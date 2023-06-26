# [UIImageView](https://developer.apple.com/documentation/uikit/uiimageview) 翻译
| iOS 2.0+ | iPadOS 2.0+ | Mac Catalyst 13.1+ | tvOS 9.0+ | visionOS 1.0+ Beta |
| --- | --- | --- | --- | --- |
```objc
@interface `UIImageView` : UIView
```
## 概览 // Overview
`UIImageView` 可让你高效地绘制任何可以使用 UIImage 对象指定的图片。例如，你可以使用 `UIImageView` 类来显示许多标准图片文件的内容，例如 JPEG 和 PNG 文件。可以以编程方式或在  StoryBoard 文件中配置 `UIImageView`，并在运行时更改显示的图片。对于动图，可以使用`UIImageView`的方法来启动和停止动画，并指定其他动画参数。
## 1. 理解图片是如何被缩放的 //  Understand how images are scaled
一个 `image view` 使用其 `ContentMode` 属性和图片本身的配置来确定如何显示图片。最好指定尺寸与 `image view` 尺寸完全匹配的图片，但是 `image view` 可以缩放图片以适应全部或部分可用空间。如果 `image view` 本身的大小发生变化，它会根据需要自动缩放图片。\

对于没有 cap insets 的图片，图片的显示方式完全由 `image view` 的`ContentMode`属性决定。\

 `UIViewContentModeScaleAobservFit` 和 `UIViewContentModeScaleAobservFill` 模式缩放图片以适应或填充空间，同时保持图片的原始长宽比。`UIViewContentModeScaleToFill` 值缩放图片而不考虑原始长宽比，这可能导致图片看起来失真。其他内容模式将图片放置在 `image view` 边界中的适当位置，而不缩放它。\

对于带有 cap insets 的可调整大小的图片，这些 insets 会影响图片的最终外观。具体来说，cap insets 定义了图片的哪些部分可以缩放以及可以在哪些方向缩放。您可以使用 UIImage 的 `rezableImageHestCapInset： resizingMode： `方法创建可拉伸的可调整大小的图片。使用这种类型的图片时，您通常会将`image view` 的内容模式设置为 `UIViewContentModeScaleToFill` ，以便图片在适当的位置拉伸并填充 `image view` 的边界。 \

有关如何准备图片的注意点，请参阅 `image view` 的调试问题。有关使用  cap insets 创建可调整大小图片的更多信息，请参阅 UIImage。

## 2. 解决图片的最终透明度 // Determine the final transparency of the image
图片被合成到  `image view`  的背景上，然后被合成到 window 上。图片中的任何透明度都允许 `image view` 的背景显示出来。类似地，`image view` 中任何的透明度都取决于 `image view` 的透明度和它显示的 UIImage 对象的透明度。当 `image view` 及其图片都具有透明度时，`image view` 使用 Alpha 混合 (alpha blending) 将两者结合起来。
- 图片被合成到 `image view` 的 background 上。
- 如果 `image view` 的 opaque 属性为 YES，图片的像素将合成在 `image view` 的 background color 之上，并且 `image view` 的 alpha 属性会被忽略。
- 如果 `image view` 的 opaque 属性为 NO，则每个像素的 alpha 值乘以 `image view` 的 alpha 值，得到的值成为该像素的实际透明度值。如果图片没有 alpha 通道，则假定每个像素的 alpha 值为 1.0。
Important
将图片的 alpha 通道与非透明 `image view` 的 alpha 通道合成在计算上是昂贵的。如果使用 Core Animation 阴影，性能劣化会进一步放大，因为阴影的形状是基于视图的内容，并且必须动态计算。如果你不是有意使用图片的 alpha 通道或 `image view` 的 alpha 通道，请将 opaque 属性设置为 YES 以提高性能。有关其他优化提示，请参阅提高性能。
## 3. 播放动图序列 // Animate a sequence of images
`image view` 可以存储动图序列，并播放该序列的全部或部分。你需要给 `animationImages` 属性指定一个 UIImage 对象的数组。指定后，你可以使用 `UIImageView` 的方法和属性来配置动画时间，以及启动和停止动画。
Note
你还可以使用` + (UIImage *)animatedImageWithImages:(NSArray<UIImage *> *)images duration:(NSTimeInterval)duration` 方法从一系列单独的图像构造单个 UIImage 对象。 这样做会产生与将单个图像分配给 `animationImages` 属性相同的结果。
显示动图时，请考虑以下两点：
- 序列中的所有图像应具有相同的大小。 当需要缩放时，图像视图会分别缩放序列中的每个图像。 如果图像大小不同，缩放可能不会产生你想要的结果。
- 序列中的所有图像应使用相同的 scale 。 确保每个图像的 scale 属性包含相同的值。
## 4. 接收触摸事件 // Respond to touch events
默认情况下，`image view` 会忽略用户触摸事件。 通常，您使用 `image view` 仅在界面中呈现视觉内容。 如果您还希望 `image view` 处理用户交互，请将其 userInteractionEnabled 属性的值更改为 YES。 之后，你就可以附加手势识别器或使用任何其他事件处理技术来响应触摸事件或其他用户启动的事件。
有关处理事件的更多信息，请参阅 Event Handling Guide for UIKit Apps.
## 5. 提高性能 // Improve performance
图像缩放和 alpha 混合是两种相对昂贵的操作，可能会影响 app 的性能。要最大限度地提高 `image view` 代码的性能，请参考以下提示：
- 缓存常用图像的缩放版本。如果你希望某些大型图像在缩小的缩略图视图中频繁显示，请提前创建缩小的图像，并将其存储在缩略图缓存中。这样做可以减轻每个图像视图单独缩放的需要。
- 使用大小接近图像视图大小的图像。不是将大图像指定给图像视图，而是创建了与图像视图的当前大小匹配的缩放版本。你还可以使用 `UIImageResizingModeFile` 选项创建可调整大小的图像对象，该选项将会平铺图像而不是缩放图像。
- 尽可能使图像视图不透明。除非您有意使用包含透明度的图像（例如，绘制UI元素），否则请确保将图像视图的 opaque 属性设置为YES。有关如何确定透明度的详细信息，请参见 Determine the final transparency of the image.
## 6. 排查问题 // Debug issues with your `image view`
如果您的图像视图没有显示预期的内容，请使用以下提示帮助排查问题：
- 使用正确的方法加载图像。使用UIImage的`imageNamed:inBundle:compatibleWithTraitCollection:`方法从 asset catalogs 或 app 的 bundle 加载图像。对于app 的 bundle之外的图像，请使用`imageWithContentsOfFile:`方法。
- 不要将 `image view` 用于自定义绘图。`UIImageView`类不使用drawRect:方法绘制其内容，所以仅使用`image view` 显示图像。要进行涉及图像的自定义绘制，请直接子类化UIView并在那里绘制图像。
## 7. Interface Builder 属性 // Interface Builder attributes
下表列出了在Interface Builder中为 `image view` 配置的属性。
暂时无法在飞书文档外展示此内容
## 8. 国际化 // Internationalization
如果您的 `image view` 仅显示从 app bundle 加载的静态图像，则 `image view` 的国际化是自动的。如果您是以编程方式加载图像，那么您需要负责加载正确的图像。
- 对于 app bundle 中的资源，可以通过在 attributes inspector 中指定名称或通过调用`UIImage`上的`imageNamed:` 类方法来获取每个图像的本地化版本。
- 对于不在 app bundle 中的图像，您的代码必须执行以下操作：
  1. 确定加载哪个图像，例如提供包含 URL 的本地化字符串。
  2. 通过将URL或数据传递给适当的 `UIImage` 类方法（例如`imageWithData:`或`imageWithContentsOfFile:）`来加载该图像。
Note
Screen metrics 和 layout 也可能根据语言和语言环境而变化，特别是如果图像的国际化版本具有不同的 dimensions。在可能的情况下，您应该尽量减少图像资源的国际化版本中的 dimensions 差异。
For more information, see Localization.
## 9. 无障碍 // Accessibility
`image view` 默认是支持无障碍的。`image view` 默认的无障碍特性是图像和用户交互。（The default accessibility traits for an `image view` are Image and User Interaction Enabled. ？）
有关使iOS控件无障碍的详细信息，请参阅UIControl中的无障碍信息。有关使UI支持无障碍的一般信息，请参阅 Accessibility for UIKit.

## 10.  状态保存 // State preservation
当您为图像视图的`restorationIdentifier`属性指定值时，它会尝试保留显示图像的 `frame`。具体来说，保留视图的`bounds`, `center`, `transform`以及使用的 `layer` 的`anchorPoint`属性的值。在恢复过程中，`image view` 会恢复这些值，以便图像与之前完全相同。有关状态保存和恢复工作原理的详细信息，请参阅 Restoring Your App’s State.。
 
## Topics
### 创建 // Creating an `image view`
`- initWithImage:` \
    Returns an `image view` initialized with the specified image. \
`- initWithImage:highlightedImage:` \
    Returns an `image view` initialized with the specified regular and highlighted images.
### 设置图片 // Accessing the displayed images
`image` \
  The image displayed in the `image view`. \
`highlightedImage` \
  The highlighted image displayed in the `image view`.
### 配置动图 // Animating a sequence of images
`animationImages` \
  An array of UIImage objects to use for an animation.\
`highlightedAnimationImages` \
  An array of UIImage objects to use for an animation when the view is highlighted.\
`animationDuration` \
  The amount of time it takes to go through one cycle of the images.\
`animationRepeatCount`\
  Specifies the number of times to repeat the animation. \
`- startAnimating` \
  Starts animating the images in the receiver.\
`- stopAnimating` \
  Stops animating the images in the receiver.
`animating` \
  Returns a Boolean value indicating whether the animation is running.
### 配置符号 //  Configuring the appearance of symbol images \
`Configuring and displaying symbol images in your UI`\
  Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.\
`preferredSymbolConfiguration`\
  The configuration values to use when rendering the image.
### 配置 imageView // Configuring the `image view`
`userInteractionEnabled`\
  A Boolean value that determines whether user events are ignored and removed from the event queue.\
`highlighted`\
  A Boolean value that determines whether the image is highlighted.
`tintColor`\
  A color used to tint template images in the view hierarchy.
### 配置焦点 // Managing focus-related behaviors
`adjustsImageWhenAncestorFocused`\
  Allows `UIImageView` to respond when an ancestor becomes focused.\
`focusedFrameGuide`\
  The layout guide to use when the `image view` is focused.\
`masksFocusEffectToContents`\
  A Boolean value indicating whether the floating focused appearance uses the image’s alpha channel.
### 配置overlayContentView // Layering content on top of the `image view`
`overlayContentView`\
  A view for hosting layered content on top of the `image view`.
 
## Ref
* [`UIImageView` | Apple Developer Documentation](https://developer.apple.com/documentation/uikit/uiimageview)