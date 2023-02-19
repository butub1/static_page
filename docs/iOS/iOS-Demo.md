# iOS-Demo 项目及注入方式

在接触`iOS`一年多之后，明显感觉到， `objc`带有一种青黄不接的感觉。一方面市面上的大多数app基于`Swift` 构建，另一方面在国内，大型的app还在继续使用 objc 构建， 团队中的 iOS 新人对于 iOS 开发的兴趣稍显欠缺，因此萌生了些一个 demo app ， 用来方便地构建 demo，来做各种各样的演示。

## 1. 需求
需求很简单：`方便地构建ViewController`

1. 要方便书写，避免重复劳动，避免如下情况:
    ```objc
    #import "SceneDelegate.h"
    #import "DMBaseViewController.h"
    #import "BDMSyntaxController.h"
    #import "VerticalSlidingViewController.h"
    #import "DMHitTestViewController.h"
    #import "DMCollectionViewDragViewController.h"
    #import "DMLayoutViewController.h"
    #import "DMPassThroughViewController.h"
    #import "DMSampleViewController.h"
    ```
2. 要有说明文字，要有 icon、author、hyperlink

3. 要易于检索，搞个简单的搜索的VC， 方便跳转

4. 要解耦，或者容易修改，上述的信息，在注入后，要能容易拿取到。

## 2. 设计
因为不想分散多处写注入代码， 最好是能像注解一样，只做一个操作，就注入。
```objc
@registerItem("Sample.Button.Basic")
@interface DMSampleViewController
@end
```
但是在 Objc 中，确实没有找到比较方便的实现，但是又非常想要这种效果。考虑过几种实现:

VC 继承的方式进行注入 --> Objc 不能多继承, 限制了 Demo 的能力

接口注入到全局 mountArray --> 添加操作需要运行时完成，否则需要静态注入。
```objc
/// in mount file
static NSArray<id<DMInjectProtocol>> *mountArray = @[
    [DMSampleViewController class],
]
/// in DMSampleViewController.m
@interface DMSampleViewController()<DMInjectProtocol>
@end
```
因此不得不找些运行时注入的方式，或者编译预处理的操作，考虑过

1. LazyRegister， 注入函数指针到 data 段，会在 section 引入的时候注入，运行时机可选。
2. load 方法， 运行时机在 main 函数之前，但是需要写 C 方法。
3. Category 运行时注入，生成特定函数，但是 Demo 多了之后，会生成很多小Category. `【Selected】`\
因为是 demo 项目，没有必要过度设计，所以选择了简单的方式实现，遇到问题再优化。

## 3. 实现
dm_registerDemo 宏 最终生成”一条分类“，一条 : ) 合乎文法 : )
```objc
@interface DMRegisterCenter( DMSampleViewController ) - (void)user_registerItemsFor_DMSampleViewController;@end; @implementation DMRegisterCenter( DMSampleViewController ) - (void)user_registerItemsFor_DMSampleViewController{ [self registerClass:@"DMSampleViewController" withBlock:^(DMRegisterItem *item) { { item.identifier = @"Sample.UIButton";} }]; }@end
```
> 我很喜欢这个 tricky 的实现

在 RegisterCenter 中会去遍历自己的实例方法，找到用户注入的方法(@user_ 开头)
```objc
- (void)loadAllItemsFromCategories
{
    unsigned int count;
    Method *methods = class_copyMethodList([self class], &count);
    for (int i = 0; i < count; i++) {
        SEL methodSelector = method_getName(methods[i]);
        NSString *methodName = [NSString stringWithUTF8String:sel_getName(methodSelector)];
        if ([methodName hasPrefix:@"user_"]) {
            [self performSelector:methodSelector];
        }
    }
    free(methods);
}
```



