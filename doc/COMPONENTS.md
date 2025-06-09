# 组件自动挂载系统

本项目实现了一个组件自动挂载系统，可以自动将`src/components`目录下的组件注册并在应用中全局使用。

## 工作原理

1. 通过脚本自动扫描`src/components`目录下的所有组件
2. 生成一个统一的组件索引文件(`src/components/index.ts`)
3. 使用 React Context API 将组件注册表提供给整个应用
4. 在任何组件中通过`useComponents` hook 访问所有注册的组件

## 使用方法

### 添加新组件

1. 在`src/components`目录下创建新的组件目录，例如`MyNewComponent`
2. 在组件目录中创建`index.tsx`作为组件的入口文件
3. 运行以下命令生成更新的组件索引：

```bash
yarn generate:components
```

### 在页面中使用组件

#### 方法一：通过组件对象使用

```tsx
import React from 'react';
import { View } from 'react-native';
import { useComponents } from '~/contexts/ComponentContext';

const MyPage: React.FC = () => {
  // 获取所有注册的组件
  const components = useComponents();

  return (
    <View>
      {/* 使用Button组件 */}
      <components.Button title='按钮' onPress={() => console.log('点击')} />

      {/* 使用其他组件 */}
      {components.MyNewComponent && <components.MyNewComponent />}
    </View>
  );
};

export default MyPage;
```

#### 方法二：使用 Context 解构组件

```tsx
import React from 'react';
import { View } from 'react-native';
import { useComponentsProps } from '~/contexts/ComponentContext';

const MyPage: React.FC = () => {
  // 直接解构使用组件
  const { Button, MyNewComponent } = useComponentsProps();

  return (
    <View>
      {/* 直接使用Button组件 */}
      <Button title='按钮' onPress={() => console.log('点击')} />

      {/* 使用其他组件 */}
      {MyNewComponent && <MyNewComponent />}
    </View>
  );
};

export default MyPage;
```

#### 方法三：直接从导出对象解构使用

```tsx
import React from 'react';
import { View } from 'react-native';
// 导入组件对象
import { Components } from '~/components';

// 解构需要的组件
const { Button, MyNewComponent } = Components;

const MyPage: React.FC = () => {
  return (
    <View>
      {/* 直接使用Button组件 */}
      <Button title='按钮' onPress={() => console.log('点击')} />

      {/* 使用其他组件 */}
      {MyNewComponent && <MyNewComponent />}
    </View>
  );
};

export default MyPage;
```

## 自动生成脚本

项目包含一个自动生成组件索引的脚本，每次添加新组件后都应该运行此脚本。

您也可以将此脚本添加到项目的构建流程中，确保组件索引始终是最新的。

## 注意事项

1. 组件目录名称将被用作组件的注册名称（首字母会自动大写）
2. 每个组件目录必须有一个`index.tsx`文件作为入口
3. 组件应该是自包含的，不应该依赖于应用的其他部分
4. 如果组件有特殊的依赖项，请确保在组件内部处理
