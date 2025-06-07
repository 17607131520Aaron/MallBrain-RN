这是一个新的 [**React Native**](https://reactnative.dev) 项目，使用 [`@react-native-community/cli`](https://github.com/react-native-community/cli) 引导创建。

# 开始使用

> **注意**：在继续之前，请确保您已完成 [环境设置](https://reactnative.dev/docs/set-up-your-environment) 指南。

## 步骤 1：启动 Metro

首先，您需要运行 **Metro**，React Native 的 JavaScript 构建工具。

要从 React Native 项目的根目录启动 Metro 开发服务器，请运行以下命令：

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## 步骤 2：构建并运行您的应用

Metro 运行后，从 React Native 项目的根目录打开一个新的终端窗口/面板，并使用以下命令之一来构建和运行您的 Android 或 iOS 应用：

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

对于 iOS，请记得安装 CocoaPods 依赖项（这只需要在首次克隆或更新原生依赖后运行）。

首次创建新项目时，运行 Ruby bundler 安装 CocoaPods 本身：

```sh
bundle install
```

然后，每次更新原生依赖项时，运行：

```sh
bundle exec pod install
```

有关更多信息，请访问 [CocoaPods 入门指南](https://guides.cocoapods.org/using/getting-started.html)。

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

如果一切设置正确，您应该会看到您的新应用在 Android 模拟器、iOS 模拟器或已连接的设备上运行。

这是运行应用的一种方式 — 您还可以直接从 Android Studio 或 Xcode 构建它。

## 步骤 3：修改您的应用

现在您已成功运行了应用，让我们进行一些更改！

在您选择的文本编辑器中打开 `App.tsx` 并进行一些更改。保存时，您的应用将自动更新并反映这些更改 — 这由 [Fast Refresh](https://reactnative.dev/docs/fast-refresh) 提供支持。

当您想要强制重新加载时，例如重置应用的状态，您可以执行完全重新加载：

- **Android**：按两次 <kbd>R</kbd> 键或从 **开发菜单** 中选择 **"Reload"**，通过 <kbd>Ctrl</kbd> + <kbd>M</kbd>（Windows/Linux）或 <kbd>Cmd ⌘</kbd> + <kbd>M</kbd>（macOS）访问。
- **iOS**：在 iOS 模拟器中按 <kbd>R</kbd> 键。

## 恭喜！ :tada:

您已成功运行并修改了您的 React Native 应用。:partying_face:

### 接下来做什么？

- 如果您想将这个新的 React Native 代码添加到现有应用程序中，请查看 [集成指南](https://reactnative.dev/docs/integration-with-existing-apps)。
- 如果您对学习更多关于 React Native 的知识感兴趣，请查看 [文档](https://reactnative.dev/docs/getting-started)。

# 故障排除

如果您在上述步骤中遇到问题，请参阅 [故障排除](https://reactnative.dev/docs/troubleshooting) 页面。

# 了解更多

要了解更多关于 React Native 的信息，请查看以下资源：

- [React Native 网站](https://reactnative.dev) - 了解更多关于 React Native 的信息。
- [入门指南](https://reactnative.dev/docs/environment-setup) - React Native 的**概览**以及如何设置您的环境。
- [学习基础知识](https://reactnative.dev/docs/getting-started) - React Native **基础知识**的**引导教程**。
- [博客](https://reactnative.dev/blog) - 阅读最新的官方 React Native **博客**文章。
- [`@facebook/react-native`](https://github.com/facebook/react-native) - React Native 的开源 GitHub **仓库**。
