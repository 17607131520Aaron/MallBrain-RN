#!/usr/bin/env node

/**
 * 自动组件注册脚本
 * 扫描src/components目录下的所有组件并生成index.ts文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 组件目录路径
const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');
// 输出文件路径
const OUTPUT_FILE = path.resolve(COMPONENTS_DIR, 'index.ts');

// 忽略的目录
const IGNORED_DIRS = ['__tests__', '__mocks__', 'styles', 'utils', 'types'];
// 忽略的文件
const IGNORED_FILES = ['index.ts', 'index.js', 'GlobalComponents.tsx'];

/**
 * 获取组件目录列表
 * @returns {string[]} 组件目录列表
 */
function getComponentDirs() {
  return fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !IGNORED_DIRS.includes(dirent.name))
    .map((dirent) => dirent.name);
}

/**
 * 生成组件索引文件内容
 * @param {string[]} componentDirs 组件目录列表
 * @returns {string} 索引文件内容
 */
function generateIndexContent(componentDirs) {
  // 导入语句
  const imports = componentDirs.map((dir) => `import ${dir} from './${dir}';`).join('\n');

  // 特殊处理Toast组件
  const hasToast = componentDirs.includes('Toast');
  const toastEnhancement = hasToast
    ? `
// 增强Toast组件
const EnhancedToast = Object.assign(Toast, {
  show: (content: string) => Toast.add(content),
  success: (content: string) => Toast.add(content),
  error: (content: string) => Toast.add(content),
  info: (content: string) => Toast.add(content),
  warn: (content: string) => Toast.add(content),
  hide: () => {
    /* 实现隐藏逻辑 */
  },
});`
    : '';
  // 组件模块对象
  const componentModulesEntries = componentDirs.map((dir) => {
    if (dir === 'Toast') {
      return `  Toast: EnhancedToast`;
    }
    return `  ${dir}`;
  });
  const componentModules = `// 组件模块对象
const componentModules = {
${componentModulesEntries.join(',\n')}
};`;

  // 组件注册表
  const registry = `
// 组件类型定义
export interface ITComponentRegistry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>;
}

// 自动生成组件注册表
export const componentRegistry: ITComponentRegistry = Object.entries(componentModules).reduce(
  (registry, [name, component]) => {
    registry[name] = component;
    return registry;
  },
  {} as ITComponentRegistry,
);

// 导出组件对象，用于直接解构使用
export const Components = componentRegistry;`;

  // 导出语句
  const exports = componentDirs.map((dir) => {
    if (dir === 'Toast') {
      return 'EnhancedToast as Toast';
    }
    return dir;
  });
  const exportStatement = `// 自动导出所有组件
export { ${exports.join(', ')} };`;

  // 组合所有内容
  return `// 自动生成的组件索引文件，请勿手动修改
// 由scripts/generate_components.js生成

${imports}
${toastEnhancement}

${componentModules}
${registry}

${exportStatement}

// 如需添加新组件，请在src/components目录下创建新的组件目录
// 然后运行 yarn generate:components 命令更新此文件
`;
}

/**
 * 主函数
 */
function main() {
  try {
    // 获取组件目录列表
    const componentDirs = getComponentDirs();
    console.log(`找到 ${componentDirs.length} 个组件: ${componentDirs.join(', ')}`);

    // 生成索引文件内容
    const indexContent = generateIndexContent(componentDirs);

    // 写入文件
    fs.writeFileSync(OUTPUT_FILE, indexContent, 'utf8');
    console.log(`组件索引文件已生成: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('生成组件索引文件失败:', error);
    process.exit(1);
  }
}

// 执行主函数
main();
