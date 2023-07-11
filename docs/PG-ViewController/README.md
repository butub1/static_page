# 翻译 🍔 [View Controller Programming Guide for iOS](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html)

## 简介

`《ViewController编程指南》`是`iOS`编程学习的必经之路，因此也已经有了很多国内的其他翻译，不过总觉得还有改进的空间，因此重新去翻译一下。主要是:
1. UI 更好看一点。
2. 会多审校几次，尽可能读起来舒适。
3. 更方便阅读，因为有和官方类似的侧边栏。 
:::tip 翻译的水准就无从保证了，读者见谅 ♥️ 。
可能现在大家都用 Swift 开发了，不过即便如此，Objc + MVC 的模式，仍然是理解 iOS 开发的必经之路，我仍然是这么想的。希望十年后，仍然这么想。
:::

## 目录

* [一. 概述](./Overview.md)
    - **[1. VC的作用 🍟 The Role of View Controllers](./Overview/#_1-vc%E7%9A%84%E4%BD%9C%E7%94%A8-%F0%9F%8D%9F-the-role-of-view-controllers)**
        - **[视图管理 🍟 View Management](./Overview/#%E8%A7%86%E5%9B%BE%E7%AE%A1%E7%90%86-%F0%9F%8D%9F-view-management)**
        - **[数据 Marshaling) 🍟 Data Marshaling](./Overview/#%E6%95%B0%E6%8D%AE-marshaling-https-zh-wikipedia-org-wiki-marshalling-e8-ae-a1-e7-ae-97-e6-9c-ba-e7-a7-91-e5-ad-a6-%F0%9F%8D%9F-data-marshaling)**
        - **[用户交互 🍟 User Interactions](./Overview/#%E7%94%A8%E6%88%B7%E4%BA%A4%E4%BA%92-%F0%9F%8D%9F-user-interactions)**
        - **[资源管理 🍟 Resource Management](./Overview/#%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86-%F0%9F%8D%9F-resource-management)**
        - **[设备适配 🍟 Adaptivity](./Overview/#%E8%AE%BE%E5%A4%87%E9%80%82%E9%85%8D-%F0%9F%8D%9F-adaptivity)**
    - **[2. VC的层次结构 🍟 The View Controller Hierarchy](./Overview/#_2-vc%E7%9A%84%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84-%F0%9F%8D%9F-the-view-controller-hierarchy-https-developer-apple-com-library-archive-featuredarticles-viewcontrollerpgforiphoneos-index-html-apple-ref-doc-uid-tp40007457-ch2-sw1)**
        - **[根视图控制器 🍟 The Root View Controller](./Overview/#%E6%A0%B9%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-the-root-view-controller)**
        - **[容器视图控制器 🍟 Container View Controllers](./Overview/#%E5%AE%B9%E5%99%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-container-view-controllers)**
        - **[呈现视图控制器 🍟 Presented View Controllers](./Overview/#%E5%91%88%E7%8E%B0%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-presented-view-controllers)**
    - **[3. 设计技巧 🍟 Design Tips](./Overview/#_3-%E8%AE%BE%E8%AE%A1%E6%8A%80%E5%B7%A7-%F0%9F%8D%9F-design-tips)**
        - **[尽可能使用系统提供的视图控制器 🍟 Use System-Supplied View Controllers Whenever Possible](./Overview/#%E5%B0%BD%E5%8F%AF%E8%83%BD%E4%BD%BF%E7%94%A8%E7%B3%BB%E7%BB%9F%E6%8F%90%E4%BE%9B%E7%9A%84%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-use-system-supplied-view-controllers-whenever-possible)**
        - **[使每个视图控制器成为一个孤岛 🍟 Make Each View Controller an Island](./Overview/#%E4%BD%BF%E6%AF%8F%E4%B8%AA%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E6%88%90%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%AD%A4%E5%B2%9B-%F0%9F%8D%9F-make-each-view-controller-an-island)**
        - **[仅将根视图用作其他视图的容器 🍟 Use the Root View Only as a Container for Other Views](./Overview/#%E4%BB%85%E5%B0%86%E6%A0%B9%E8%A7%86%E5%9B%BE%E7%94%A8%E4%BD%9C%E5%85%B6%E4%BB%96%E8%A7%86%E5%9B%BE%E7%9A%84%E5%AE%B9%E5%99%A8-%F0%9F%8D%9F-use-the-root-view-only-as-a-container-for-other-views)**
        - **[知道您的数据存储在哪里 🍟 Know Where Your Data Lives](./Overview/#%E7%9F%A5%E9%81%93%E6%82%A8%E7%9A%84%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E5%9C%A8%E5%93%AA%E9%87%8C-%F0%9F%8D%9F-know-where-your-data-lives)**
        - **[设备适配 🍟 Adapt to Changes](./Overview/#%E8%AE%BE%E5%A4%87%E9%80%82%E9%85%8D-%F0%9F%8D%9F-adapt-to-changes)**

* [二. 定义VC](./ViewControllerDefinition.md)
    - **[1. 定义你的子类 🍟 define your subclass](./ViewControllerDefinition/#_1-%E5%AE%9A%E4%B9%89%E4%BD%A0%E7%9A%84%E5%AD%90%E7%B1%BB-%F0%9F%8D%9F-define-your-subclass)**
        - **[定义您的UI 🍟 Defining Your UI](./ViewControllerDefinition/#%E5%AE%9A%E4%B9%89%E6%82%A8%E7%9A%84ui-%F0%9F%8D%9F-defining-your-ui)**
        - **[处理用户交互 🍟 Handling User Interactions](./ViewControllerDefinition/#%E5%A4%84%E7%90%86%E7%94%A8%E6%88%B7%E4%BA%A4%E4%BA%92-%F0%9F%8D%9F-handling-user-interactions)**
        - **[在运行时显示您的视图 🍟 Displaying Your Views at Runtime](./ViewControllerDefinition/#%E5%9C%A8%E8%BF%90%E8%A1%8C%E6%97%B6%E6%98%BE%E7%A4%BA%E6%82%A8%E7%9A%84%E8%A7%86%E5%9B%BE-%F0%9F%8D%9F-displaying-your-views-at-runtime)**
        - **[管理视图布局 🍟 Managing View Layout](./ViewControllerDefinition/#%E7%AE%A1%E7%90%86%E8%A7%86%E5%9B%BE%E5%B8%83%E5%B1%80-%F0%9F%8D%9F-managing-view-layout)**
        - **[有效管理内存 🍟 Managing Memory Efficiently](./ViewControllerDefinition/#%E6%9C%89%E6%95%88%E7%AE%A1%E7%90%86%E5%86%85%E5%AD%98-%F0%9F%8D%9F-managing-memory-efficiently)**
    - **[2. 实现容器视图控制器 🍟 Implementing a Container View Controller](./ViewControllerDefinition/#_2-%E5%AE%9E%E7%8E%B0%E5%AE%B9%E5%99%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-implementing-a-container-view-controller)**
        - **[设计自定义容器视图控制器 🍟 Designing a Custom Container View Controller](./ViewControllerDefinition/#%E8%AE%BE%E8%AE%A1%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-designing-a-custom-container-view-controller)**
        - **[Example: Navigation Controller 🍟 Example: Navigation Controller](./ViewControllerDefinition/#example-navigation-controller-%F0%9F%8D%9F-example-navigation-controller)**
        - **[Example: Split View Controller 🍟 Example: Split View Controller](./ViewControllerDefinition/#example-split-view-controller-%F0%9F%8D%9F-example-split-view-controller)**
        - **[在Interface Builder中配置容器 🍟 Configuring a Container in Interface Builder](./ViewControllerDefinition/#%E5%9C%A8interface-builder%E4%B8%AD%E9%85%8D%E7%BD%AE%E5%AE%B9%E5%99%A8-%F0%9F%8D%9F-configuring-a-container-in-interface-builder)**
        - **[实现自定义容器视图控制器 🍟 Implementing a Custom Container View Controller](./ViewControllerDefinition/#%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-implementing-a-custom-container-view-controller)**
        - **[将子视图控制器添加到您的内容上 🍟 Adding a Child View Controller to Your Content](./ViewControllerDefinition/#%E5%B0%86%E5%AD%90%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%82%A8%E7%9A%84%E5%86%85%E5%AE%B9%E4%B8%8A-%F0%9F%8D%9F-adding-a-child-view-controller-to-your-content)**
        - **[删除子视图控制器 🍟 Removing a Child View Controller](./ViewControllerDefinition/#%E5%88%A0%E9%99%A4%E5%AD%90%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-removing-a-child-view-controller)**
        - **[子视图控制器之间的转换 🍟 Transitioning Between Child View Controllers](./ViewControllerDefinition/#%E5%AD%90%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2-%F0%9F%8D%9F-transitioning-between-child-view-controllers)**
        - **[管理子VC的外观更新 🍟 Managing Appearance Updates for Children](./ViewControllerDefinition/#%E7%AE%A1%E7%90%86%E5%AD%90vc%E7%9A%84%E5%A4%96%E8%A7%82%E6%9B%B4%E6%96%B0-%F0%9F%8D%9F-managing-appearance-updates-for-children)**
        - **[关于构建容器视图控制器的建议 🍟 Suggestions for Building a Container View Controller](./ViewControllerDefinition/#%E5%85%B3%E4%BA%8E%E6%9E%84%E5%BB%BA%E5%AE%B9%E5%99%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E7%9A%84%E5%BB%BA%E8%AE%AE-%F0%9F%8D%9F-suggestions-for-building-a-container-view-controller)**
        - **[将控制委托给子视图控制器 🍟 Delegating Control to a Child View Controller](./ViewControllerDefinition/#%E5%B0%86%E6%8E%A7%E5%88%B6%E5%A7%94%E6%89%98%E7%BB%99%E5%AD%90%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-delegating-control-to-a-child-view-controller)**
    - **[3. 支持无障碍 🍟 Supporting Accessibility](./ViewControllerDefinition/#_3-%E6%94%AF%E6%8C%81%E6%97%A0%E9%9A%9C%E7%A2%8D-%F0%9F%8D%9F-supporting-accessibility)**
        - **[将VoiceOver(画外音)光标移动到特定元素 🍟 Moving the VoiceOver Cursor to a Specific Element](./ViewControllerDefinition/#%E5%B0%86-voiceover-%E7%94%BB%E5%A4%96%E9%9F%B3-%E5%85%89%E6%A0%87%E7%A7%BB%E5%8A%A8%E5%88%B0%E7%89%B9%E5%AE%9A%E5%85%83%E7%B4%A0-%F0%9F%8D%9F-moving-the-voiceover-cursor-to-a-specific-element)**
        - **[回应特定的画外音手势 🍟 Responding to Special VoiceOver Gestures](./ViewControllerDefinition/#%E5%9B%9E%E5%BA%94%E7%89%B9%E5%AE%9A%E7%9A%84%E7%94%BB%E5%A4%96%E9%9F%B3%E6%89%8B%E5%8A%BF-%F0%9F%8D%9F-responding-to-special-voiceover-gestures)**
        - **[退出 🍟 Escape](./ViewControllerDefinition/#%E9%80%80%E5%87%BA-%F0%9F%8D%9F-escape)**
        - **[两指双击 🍟 Magic Tap](./ViewControllerDefinition/#%E4%B8%A4%E6%8C%87%E5%8F%8C%E5%87%BB-%F0%9F%8D%9F-magic-tap)**
        - **[三指滚动 🍟 Three-Finger Scroll](./ViewControllerDefinition/#%E4%B8%89%E6%8C%87%E6%BB%9A%E5%8A%A8-%F0%9F%8D%9F-three-finger-scroll)**
        - **[增大和减小 🍟 Increment and Decrement](./ViewControllerDefinition/#%E5%A2%9E%E5%A4%A7%E5%92%8C%E5%87%8F%E5%B0%8F-%F0%9F%8D%9F-increment-and-decrement)**
        - **[监听无障碍通知 🍟 Observing Accessibility Notifications](./ViewControllerDefinition/#%E7%9B%91%E5%90%AC%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%80%9A%E7%9F%A5-%F0%9F%8D%9F-observing-accessibility-notifications)**
    - **[4. 保存和恢复状态 🍟 Preserving and Restoring State](./ViewControllerDefinition/#_4-%E4%BF%9D%E5%AD%98%E5%92%8C%E6%81%A2%E5%A4%8D%E7%8A%B6%E6%80%81-%F0%9F%8D%9F-preserving-and-restoring-state)**
        - **[标记保存视图控制器 🍟 Tagging View Controllers for Preservation](./ViewControllerDefinition/#%E6%A0%87%E8%AE%B0%E4%BF%9D%E5%AD%98%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-tagging-view-controllers-for-preservation)**
        - **[选择有效的restorationIdentifier 🍟 Choosing Effective Restoration Identifiers](./ViewControllerDefinition/#%E9%80%89%E6%8B%A9%E6%9C%89%E6%95%88%E7%9A%84-restorationidentifier-%F0%9F%8D%9F-choosing-effective-restoration-identifiers)**
        - **[排除视图控制器组 🍟 Excluding Groups of View Controllers](./ViewControllerDefinition/#%E6%8E%92%E9%99%A4%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E7%BB%84-%F0%9F%8D%9F-excluding-groups-of-view-controllers)**
        - **[保留视图控制器的视图 🍟 Preserving a View Controller’s Views](./ViewControllerDefinition/#%E4%BF%9D%E7%95%99%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E7%9A%84%E8%A7%86%E5%9B%BE-%F0%9F%8D%9F-preserving-a-view-controller-s-views)**
        - **[在启动时恢复视图控制器 🍟 Restoring View Controllers at Launch Time](./ViewControllerDefinition/#%E5%9C%A8%E5%90%AF%E5%8A%A8%E6%97%B6%E6%81%A2%E5%A4%8D%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-restoring-view-controllers-at-launch-time)**
        - **[对视图控制器的状态进行编码和解码 🍟 Encoding and Decoding Your View Controller’s State](./ViewControllerDefinition/#%E5%AF%B9%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E7%9A%84%E7%8A%B6%E6%80%81%E8%BF%9B%E8%A1%8C%E7%BC%96%E7%A0%81%E5%92%8C%E8%A7%A3%E7%A0%81-%F0%9F%8D%9F-encoding-and-decoding-your-view-controller-s-state)**
        - **[保存和恢复视图控制器的提示 🍟 Tips for Saving and Restoring Your View Controllers](./ViewControllerDefinition/#%E4%BF%9D%E5%AD%98%E5%92%8C%E6%81%A2%E5%A4%8D%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E7%9A%84%E6%8F%90%E7%A4%BA-%F0%9F%8D%9F-tips-for-saving-and-restoring-your-view-controllers)**

* [三. 呈现与转场](./PresentationAndTransitions.md)
    - **[1. 呈现视图控制器 🍟 PresentingaViewController](./PresentationAndTransitions/#_1-%E5%91%88%E7%8E%B0%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-presentingaviewcontroller)**
        - **[呈现和转场过程 🍟 The Presentation and Transition Process](./PresentationAndTransitions/#%E5%91%88%E7%8E%B0%E5%92%8C%E8%BD%AC%E5%9C%BA%E8%BF%87%E7%A8%8B-%F0%9F%8D%9F-the-presentation-and-transition-process)**
        - **[呈现样式 🍟 Presentation Styles](./PresentationAndTransitions/#%E5%91%88%E7%8E%B0%E6%A0%B7%E5%BC%8F-%F0%9F%8D%9F-presentation-styles)**
        - **[全屏呈现样式 🍟 Full-Screen Presentation Styles](./PresentationAndTransitions/#%E5%85%A8%E5%B1%8F%E5%91%88%E7%8E%B0%E6%A0%B7%E5%BC%8F-%F0%9F%8D%9F-full-screen-presentation-styles)**
        - **[弹出风格 🍟 The Popover Style](./PresentationAndTransitions/#%E5%BC%B9%E5%87%BA%E9%A3%8E%E6%A0%BC-%F0%9F%8D%9F-the-popover-style)**
        - **[当前上下文样式 🍟 The Current Context Styles](./PresentationAndTransitions/#%E5%BD%93%E5%89%8D%E4%B8%8A%E4%B8%8B%E6%96%87%E6%A0%B7%E5%BC%8F-%F0%9F%8D%9F-the-current-context-styles)**
        - **[自定义呈现样式 🍟 Custom Presentation Styles](./PresentationAndTransitions/#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%88%E7%8E%B0%E6%A0%B7%E5%BC%8F-%F0%9F%8D%9F-custom-presentation-styles)**
        - **[转场样式 🍟 Transition Styles](./PresentationAndTransitions/#%E8%BD%AC%E5%9C%BA%E6%A0%B7%E5%BC%8F-%F0%9F%8D%9F-transition-styles)**
        - **[呈现与展现视图控制器 🍟 Presenting Versus Showing a View Controller](./PresentationAndTransitions/#%E5%91%88%E7%8E%B0%E4%B8%8E%E5%B1%95%E7%8E%B0%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-presenting-versus-showing-a-view-controller)**
        - **[呈现视图控制器 🍟 Presenting a View Controller](./PresentationAndTransitions/#%E5%91%88%E7%8E%B0%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-presenting-a-view-controller)**
        - **[显示视图控制器 🍟 Showing View Controllers](./PresentationAndTransitions/#%E6%98%BE%E7%A4%BA%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-showing-view-controllers)**
        - **[模态化呈现视图控制器 🍟 Presenting View Controllers Modally](./PresentationAndTransitions/#%E6%A8%A1%E6%80%81%E5%8C%96%E5%91%88%E7%8E%B0%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-presenting-view-controllers-modally)**
        - **[在Popover中呈现视图控制器 🍟 Presenting a View Controller in a Popover](./PresentationAndTransitions/#%E5%9C%A8popover%E4%B8%AD%E5%91%88%E7%8E%B0%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-presenting-a-view-controller-in-a-popover)**
        - **[关闭呈现的视图控制器 🍟 Dismissing a Presented View Controller](./PresentationAndTransitions/#%E5%85%B3%E9%97%AD%E5%91%88%E7%8E%B0%E7%9A%84%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-dismissing-a-presented-view-controller)**
        - **[呈现在不同故事板中定义的视图控制器 🍟 Presenting a View Controller Defined in a Different Storyboard](./PresentationAndTransitions/#%E5%91%88%E7%8E%B0%E5%9C%A8%E4%B8%8D%E5%90%8C%E6%95%85%E4%BA%8B%E6%9D%BF%E4%B8%AD%E5%AE%9A%E4%B9%89%E7%9A%84%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-presenting-a-view-controller-defined-in-a-different-storyboard)**
    - **[2. 使用Segue 🍟 Using Segues](./PresentationAndTransitions/#_2-%E4%BD%BF%E7%94%A8segue-%F0%9F%8D%9F-using-segues)**
        - **[在视图控制器之间创建Segue 🍟 Creating a Segue Between View Controllers](./PresentationAndTransitions/#%E5%9C%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E4%B9%8B%E9%97%B4%E5%88%9B%E5%BB%BAsegue-%F0%9F%8D%9F-creating-a-segue-between-view-controllers)**
        - **[在运行时修改Segue的行为 🍟 Modifying a Segue’s Behavior at Runtime](./PresentationAndTransitions/#%E5%9C%A8%E8%BF%90%E8%A1%8C%E6%97%B6%E4%BF%AE%E6%94%B9segue%E7%9A%84%E8%A1%8C%E4%B8%BA-%F0%9F%8D%9F-modifying-a-segue-s-behavior-at-runtime)**
        - **[创建一个 Unwind Segue 🍟 Creating an Unwind Segue](./PresentationAndTransitions/#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-unwind-segue-%F0%9F%8D%9F-creating-an-unwind-segue)**
        - **[以编程方式启动Segue 🍟 Initiating a Segue Programmatically](./PresentationAndTransitions/#%E4%BB%A5%E7%BC%96%E7%A8%8B%E6%96%B9%E5%BC%8F%E5%90%AF%E5%8A%A8-segue-%F0%9F%8D%9F-initiating-a-segue-programmatically)**
        - **[创建自定义Segue 🍟 Creating a Custom Segue](./PresentationAndTransitions/#%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89segue-%F0%9F%8D%9F-creating-a-custom-segue)**
        - **[Segue的生命周期 🍟 The Life Cycle of a Segue](./PresentationAndTransitions/#segue%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-%F0%9F%8D%9F-the-life-cycle-of-a-segue)**
        - **[实现自定义Segue 🐶 Implementing a Custom Segue](./PresentationAndTransitions/#%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%AE%9A%E4%B9%89segue-%F0%9F%90%B6-implementing-a-custom-segue)**
    - **[3.自定义转场动画 🍟 Customizing the Transition Animations](./PresentationAndTransitions/#_3-%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BD%AC%E5%9C%BA%E5%8A%A8%E7%94%BB-%F0%9F%8D%9F-customizing-the-transition-animations)**
        - **[转场动画序列 🍟 The Transition Animation Sequence](./PresentationAndTransitions/#%E8%BD%AC%E5%9C%BA%E5%8A%A8%E7%94%BB%E5%BA%8F%E5%88%97-%F0%9F%8D%9F-the-transition-animation-sequence)**
        - **[转场委托 🍟 The Transitioning Delegate](./PresentationAndTransitions/#%E8%BD%AC%E5%9C%BA%E5%A7%94%E6%89%98-%F0%9F%8D%9F-the-transitioning-delegate)**
        - **[自定义动画序列 🍟 The Custom Animation Sequence](./PresentationAndTransitions/#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8A%A8%E7%94%BB%E5%BA%8F%E5%88%97-%F0%9F%8D%9F-the-custom-animation-sequence)**
        - **[转场上下文对象 🍟 The Transitioning Context Object](./PresentationAndTransitions/#%E8%BD%AC%E5%9C%BA%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%B9%E8%B1%A1-%F0%9F%8D%9F-the-transitioning-context-object)**
        - **[转场协调器 🍟 The Transition Coordinator](./PresentationAndTransitions/#%E8%BD%AC%E5%9C%BA%E5%8D%8F%E8%B0%83%E5%99%A8-%F0%9F%8D%9F-the-transition-coordinator)**
        - **[使用自定义动画呈现视图控制器 🍟 Presenting a View Controller Using Custom Animations](./PresentationAndTransitions/#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8A%A8%E7%94%BB%E5%91%88%E7%8E%B0%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-presenting-a-view-controller-using-custom-animations)**
        - **[实现转场委托 🍟 Implementing the Transitioning Delegate](./PresentationAndTransitions/#%E5%AE%9E%E7%8E%B0%E8%BD%AC%E5%9C%BA%E5%A7%94%E6%89%98-%F0%9F%8D%9F-implementing-the-transitioning-delegate)**
        - **[实现你的Animator对象 🍟 Implementing Your Animator Objects](./PresentationAndTransitions/#%E5%AE%9E%E7%8E%B0%E4%BD%A0%E7%9A%84-animator-%E5%AF%B9%E8%B1%A1-%F0%9F%8D%9F-implementing-your-animator-objects)**
        - **[获取动画参数 🍟 Getting the Animation Parameters](./PresentationAndTransitions/#%E8%8E%B7%E5%8F%96%E5%8A%A8%E7%94%BB%E5%8F%82%E6%95%B0-%F0%9F%8D%9F-getting-the-animation-parameters)**
        - **[创建转场动画 🍟 Creating the Transition Animations](./PresentationAndTransitions/#%E5%88%9B%E5%BB%BA%E8%BD%AC%E5%9C%BA%E5%8A%A8%E7%94%BB-%F0%9F%8D%9F-creating-the-transition-animations)**
        - **[创建动画。🍟 Create the animations.](./PresentationAndTransitions/#%E5%88%9B%E5%BB%BA%E5%8A%A8%E7%94%BB%E3%80%82%F0%9F%8D%9F-create-the-animations)**
        - **[动画后的清理 🍟 Cleaning Up After the Animations](./PresentationAndTransitions/#%E5%8A%A8%E7%94%BB%E5%90%8E%E7%9A%84%E6%B8%85%E7%90%86-%F0%9F%8D%9F-cleaning-up-after-the-animations)**
        - **[为您的转场添加交互性 🍟 Adding Interactivity to Your Transitions](./PresentationAndTransitions/#%E4%B8%BA%E6%82%A8%E7%9A%84%E8%BD%AC%E5%9C%BA%E6%B7%BB%E5%8A%A0%E4%BA%A4%E4%BA%92%E6%80%A7-%F0%9F%8D%9F-adding-interactivity-to-your-transitions)**
        - **[创建伴随转场运行的动画 🍟 Creating Animations that Run Alongside a Transition](./PresentationAndTransitions/#%E5%88%9B%E5%BB%BA%E4%BC%B4%E9%9A%8F%E8%BD%AC%E5%9C%BA%E8%BF%90%E8%A1%8C%E7%9A%84%E5%8A%A8%E7%94%BB-%F0%9F%8D%9F-creating-animations-that-run-alongside-a-transition)**
        - **[在动画中使用呈现控制器 🍟 Using a Presentation Controller with Your Animations](./PresentationAndTransitions/#%E5%9C%A8%E5%8A%A8%E7%94%BB%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%91%88%E7%8E%B0%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-using-a-presentation-controller-with-your-animations)**
    - **[4. 创建自定义呈现 🍟 Creating Custom Presentations](./PresentationAndTransitions/#_4-%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%88%E7%8E%B0-%F0%9F%8D%9F-creating-custom-presentations)**
        - **[自定义呈现过程 🍟 The Custom Presentation Process](./PresentationAndTransitions/#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%88%E7%8E%B0%E8%BF%87%E7%A8%8B-%F0%9F%8D%9F-the-custom-presentation-process)**
        - **[创建自定义呈现控制器 🍟 Creating a Custom Presentation Controller](./PresentationAndTransitions/#%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%88%E7%8E%B0%E6%8E%A7%E5%88%B6%E5%99%A8-%F0%9F%8D%9F-creating-a-custom-presentation-controller)**
        - **[设置Presented视图控制器的frame 🍟 Setting the Frame of the Presented View Controller](./PresentationAndTransitions/#%E8%AE%BE%E7%BD%AE-presented-%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E7%9A%84-frame-%F0%9F%8D%9F-setting-the-frame-of-the-presented-view-controller)**
        - **[管理和动画自定义视图 🍟 Managing and Animating Custom Views](./PresentationAndTransitions/#%E7%AE%A1%E7%90%86%E5%92%8C%E5%8A%A8%E7%94%BB%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%86%E5%9B%BE-%F0%9F%8D%9F-managing-and-animating-custom-views)**
        - **[将您的呈现控制器提供给UIKit 🍟 Vending Your Presentation Controller to UIKit](./PresentationAndTransitions/#%E5%B0%86%E6%82%A8%E7%9A%84%E5%91%88%E7%8E%B0%E6%8E%A7%E5%88%B6%E5%99%A8%E6%8F%90%E4%BE%9B%E7%BB%99uikit-%F0%9F%8D%9F-vending-your-presentation-controller-to-uikit)**
        - **[适应不同的尺寸类 🍟 Adapting to Different Size Classes](./PresentationAndTransitions/#%E9%80%82%E5%BA%94%E4%B8%8D%E5%90%8C%E7%9A%84%E5%B0%BA%E5%AF%B8%E7%B1%BB-%F0%9F%8D%9F-adapting-to-different-size-classes)**

* [四. 自适应和size变化](./AdaptivityAndSizeChanges.md)

    - **[1. 自适应模型 🍟 The Adaptive Model](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#_1-%E8%87%AA%E9%80%82%E5%BA%94%E6%A8%A1%E5%9E%8B-%F0%9F%8D%9F-the-adaptive-model)**
        - **[特征的作用 🍟 The Role of Traits](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#%E7%89%B9%E5%BE%81%E7%9A%84%E4%BD%9C%E7%94%A8-%F0%9F%8D%9F-the-role-of-traits)**
        - **[Trait和Size变化何时发生？ 🍟 When Do Trait and Size Changes Happen?](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#trait%E5%92%8Csize%E5%8F%98%E5%8C%96%E4%BD%95%E6%97%B6%E5%8F%91%E7%94%9F-%F0%9F%8D%9F-when-do-trait-and-size-changes-happen)**
        - **[不同设备的默认size class 🍟 Default Size Classes for Different Devices](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#%E4%B8%8D%E5%90%8C%E8%AE%BE%E5%A4%87%E7%9A%84%E9%BB%98%E8%AE%A4-size-class-%F0%9F%8D%9F-default-size-classes-for-different-devices)**
    - **[2. 构建自适应接口 🍟 Building an Adaptive Interface](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#_2-%E6%9E%84%E5%BB%BA%E8%87%AA%E9%80%82%E5%BA%94%E6%8E%A5%E5%8F%A3-%F0%9F%8D%9F-building-an-adaptive-interface)**
        - **[适应特征变化 🍟 Adapting to Trait Changes](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#%E9%80%82%E5%BA%94%E7%89%B9%E5%BE%81%E5%8F%98%E5%8C%96-%F0%9F%8D%9F-adapting-to-trait-changes)**
        - **[配置故事板以处理不同尺寸类 🍟 Configuring Your Storyboard to Handle Different Size Classes](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#%E9%85%8D%E7%BD%AE%E6%95%85%E4%BA%8B%E6%9D%BF%E4%BB%A5%E5%A4%84%E7%90%86%E4%B8%8D%E5%90%8C%E5%B0%BA%E5%AF%B8%E7%B1%BB-%F0%9F%8D%9F-configuring-your-storyboard-to-handle-different-size-classes)**
        - **[改变子视图控制器的特征 🍟 Changing the Traits of a Child View Controller](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#%E6%94%B9%E5%8F%98%E5%AD%90%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E7%9A%84%E7%89%B9%E5%BE%81-%F0%9F%8D%9F-changing-the-traits-of-a-child-view-controller)**
        - **[使Presented视图控制器适应新的风格 🍟 Adapting Presented View Controllers to a New Style](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#%E4%BD%BF-presented-%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8%E9%80%82%E5%BA%94%E6%96%B0%E7%9A%84%E9%A3%8E%E6%A0%BC-%F0%9F%8D%9F-adapting-presented-view-controllers-to-a-new-style)**
        - **[实现自适应Popovers的技巧 🍟 Tips for Implementing Adaptive Popovers](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#%E5%AE%9E%E7%8E%B0%E8%87%AA%E9%80%82%E5%BA%94popovers%E7%9A%84%E6%8A%80%E5%B7%A7-%F0%9F%8D%9F-tips-for-implementing-adaptive-popovers)**
        - **[响应尺寸变化 🍟 Responding to Size Changes](./AdaptivityAndSizeChanges%E5%8F%8C%E8%AF%AD/#%E5%93%8D%E5%BA%94%E5%B0%BA%E5%AF%B8%E5%8F%98%E5%8C%96-%F0%9F%8D%9F-responding-to-size-changes)**


## 特殊名词

| English | Chinese | Reason |
| --- | --- | --- |
| `presentation` | 呈现 | 默认翻译成演示、显示、表现，似乎都无法体现出是个特殊的名词，因此用一个比较差异化的表述“呈现”，对应反义词为“关闭” |
| `size class` | 尺寸类 | 翻译成大小类就很奇怪，尺寸类合适一点 |



---

## 参考

* [Apple原文](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html)

<Vssue :title="$title" />