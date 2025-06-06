# React Native 项目依赖包说明文档

## 核心依赖

### React 相关

- `react`: React 核心库 (v19.0.0)
- `react-native`: React Native 框架 (v0.79.2)

### 导航相关

- `@react-navigation/native`: React Navigation 核心库
- `@react-navigation/bottom-tabs`: 底部标签导航
- `@react-navigation/native-stack`: 原生堆栈导航

### UI 组件

- `react-native-vector-icons`: 图标库
- `react-native-modal`: 模态框组件
- `react-native-linear-gradient`: 渐变效果
- `react-native-swiper`: 轮播组件
- `react-native-tab-view`: 标签页视图
- `react-native-table-component`: 表格组件
- `react-native-marquee-ab`: 跑马灯效果
- `react-native-stickyheader`: 粘性头部
- `react-native-pager-view`: 页面视图组件

### 媒体处理

- `react-native-video`: 视频播放
- `react-native-video-controls`: 视频控制器
- `react-native-fast-image`: 图片加载优化
- `react-native-image-crop-picker`: 图片裁剪选择器
- `react-native-image-zoom-viewer`: 图片缩放查看器
- `react-native-pdf`: PDF 文件查看
- `react-native-create-thumbnail`: 缩略图生成

### 存储和缓存

- `@react-native-community/async-storage`: 异步存储
- `@react-native-cookies/cookies`: Cookie 管理
- `react-native-fs`: 文件系统操作
- `react-native-blob-util`: Blob 数据处理

### 网络和通信

- `axios`: HTTP 客户端
- `@react-native-community/netinfo`: 网络状态检测
- `react-native-ping`: 网络延迟检测
- `react-native-udp`: UDP 通信

### 工具库

- `lodash`: 实用工具库
- `ahooks`: React Hooks 库
- `uuid`: 唯一标识符生成
- `blueimp-md5`: MD5 加密
- `crypto-browserify`: 加密工具
- `react-native-crypto`: 加密功能
- `react-native-crypto-js`: 加密功能

### 设备功能

- `react-native-device-info`: 设备信息
- `react-native-orientation-locker`: 屏幕方向控制
- `react-native-keep-awake`: 保持屏幕常亮
- `react-native-background-timer`: 后台定时器

### 渲染和展示

- `react-native-render-html`: HTML 渲染
- `react-native-markdown-display`: Markdown 渲染
- `@native-html/table-plugin`: HTML 表格渲染
- `react-native-qrcode-svg`: 二维码生成
- `react-native-signature-canvas`: 签名画布
- `react-native-view-shot`: 视图截图

### 音效和动画

- `react-native-sound`: 音频播放
- `lottie-react-native`: 动画效果

### 开发工具

- `react-native-logs`: 日志工具
- `redux-flipper`: Redux 调试工具

### 兼容性和 Polyfill

- `react-native-polyfill-globals`: 全局 polyfill
- `react-native-url-polyfill`: URL polyfill
- `react-native-get-random-values`: 随机值生成
- `text-encoding`: 文本编码
- `web-streams-polyfill`: Web Streams polyfill
- `stream-browserify`: Stream polyfill
- `buffer`: Buffer polyfill
- `readable-stream`: 可读流 polyfill

## 开发依赖

### 构建工具

- `@babel/core`: Babel 核心
- `@babel/preset-env`: Babel 环境预设
- `@babel/runtime`: Babel 运行时
- `@react-native/babel-preset`: React Native Babel 预设

### 类型检查

- `typescript`: TypeScript 支持
- `@types/react`: React 类型定义
- `@types/jest`: Jest 类型定义
- `@types/react-test-renderer`: React Test Renderer 类型定义

### 代码质量

- `eslint`: 代码检查
- `prettier`: 代码格式化
- `jest`: 测试框架

### CLI 工具

- `@react-native-community/cli`: React Native CLI
- `@react-native-community/cli-platform-android`: Android 平台 CLI
- `@react-native-community/cli-platform-ios`: iOS 平台 CLI
