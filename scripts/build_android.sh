#!/bin/bash

# 设置错误时退出
set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 打印带颜色的信息
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查Python是否安装
check_python() {
    if ! command -v python3 &> /dev/null; then
        print_error "Python3 未安装，请先安装Python3"
        exit 1
    fi
}

# 检查Android环境
check_android_env() {
    if [ -z "$ANDROID_HOME" ]; then
        print_warning "ANDROID_HOME 环境变量未设置"
        print_info "请确保已正确设置Android开发环境"
    fi
}

# 创建build目录并复制APK
setup_build_dir() {
    local build_dir="build"
    local apk_source="android/app/build/outputs/apk/release/app-release.apk"
    local apk_dest="$build_dir/app-release.apk"
    
    # 创建build目录
    mkdir -p "$build_dir"
    
    # 如果APK存在，复制到build目录
    if [ -f "$apk_source" ]; then
        print_info "复制APK到build目录..."
        cp "$apk_source" "$apk_dest"
        print_info "APK已复制到: $apk_dest"
    else
        print_error "未找到APK文件: $apk_source"
        exit 1
    fi
}

# 主函数
main() {
    print_info "开始Android构建流程..."
    
    # 检查环境
    check_python
    check_android_env
    
    # 获取脚本所在目录的绝对路径
    SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
    
    # 切换到项目根目录
    cd "$SCRIPT_DIR/.."
    
    # 执行Python构建脚本
    print_info "执行构建脚本..."
    python3 "$SCRIPT_DIR/build_android.py"
    
    # 检查构建结果并复制APK
    if [ $? -eq 0 ]; then
        setup_build_dir
        print_info "构建完成！"
    else
        print_error "构建失败！"
        exit 1
    fi
}

# 执行主函数
main 