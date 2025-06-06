# React Native 插件原生配置说明

## iOS 配置

### 1. 媒体相关
- `react-native-video`
  - 需要在 Podfile 中添加依赖
  - 需要配置 Info.plist 中的权限

- `react-native-image-crop-picker`
  - 需要配置 Info.plist 中的相机和相册权限
  - 需要配置 Podfile

- `react-native-pdf`
  - 需要配置 Podfile
  - 需要添加 PDFKit 框架

### 2. 文件系统相关
- `react-native-fs`
  - 需要配置 Info.plist 中的文件访问权限

### 3. 设备功能相关
- `react-native-device-info`
  - 需要配置 Info.plist 中的设备信息访问权限

- `react-native-orientation-locker`
  - 需要配置 Info.plist 中的屏幕方向设置

### 4. 网络相关
- `react-native-udp`
  - 需要配置 Info.plist 中的网络权限

### 5. 其他功能
- `react-native-vector-icons`
  - 需要配置 Info.plist
  - 需要添加字体文件

- `react-native-sound`
  - 需要配置 Podfile
  - 需要配置音频会话

## Android 配置

### 1. 媒体相关
- `react-native-video`
  - 需要在 AndroidManifest.xml 中添加权限
  - 需要配置 build.gradle

- `react-native-image-crop-picker`
  - 需要在 AndroidManifest.xml 中添加相机和存储权限
  - 需要配置 build.gradle

- `react-native-pdf`
  - 需要配置 build.gradle
  - 需要添加 PDF 查看器依赖

### 2. 文件系统相关
- `react-native-fs`
  - 需要在 AndroidManifest.xml 中添加存储权限

### 3. 设备功能相关
- `react-native-device-info`
  - 需要在 AndroidManifest.xml 中添加设备信息权限

- `react-native-orientation-locker`
  - 需要在 AndroidManifest.xml 中配置屏幕方向

### 4. 网络相关
- `react-native-udp`
  - 需要在 AndroidManifest.xml 中添加网络权限

### 5. 其他功能
- `react-native-vector-icons`
  - 需要配置 android/app/build.gradle
  - 需要添加字体文件

- `react-native-sound`
  - 需要配置 build.gradle
  - 需要配置音频权限

## 通用配置说明

1. 权限配置
   - 相机权限
   - 相册权限
   - 存储权限
   - 网络权限
   - 设备信息权限

2. 依赖配置
   - Podfile (iOS)
   - build.gradle (Android)
   - settings.gradle (Android)

3. 资源文件
   - 字体文件
   - 图片资源
   - 配置文件

## 注意事项

1. 版本兼容性
   - 确保插件版本与 React Native 版本兼容
   - 检查插件之间的依赖关系

2. 权限处理
   - 运行时权限请求
   - 权限拒绝处理
   - 权限说明文案

3. 性能优化
   - 按需加载
   - 资源压缩
   - 缓存处理

4. 调试建议
   - 使用 React Native Debugger
   - 查看原生日志
   - 使用 Flipper 调试工具 