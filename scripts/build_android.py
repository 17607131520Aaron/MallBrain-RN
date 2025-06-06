#!/usr/bin/env python3
import os
import subprocess
import sys
import time

def run_command(command):
    print(f"执行命令: {command}")
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    
    if process.returncode != 0:
        print(f"错误: {stderr.decode()}")
        sys.exit(1)
    return stdout.decode()

def build_android():
    print("开始构建Android应用...")
    
    # 1. 清理之前的构建
    print("清理之前的构建...")
    run_command("cd android && ./gradlew clean")
    
    # 2. 安装依赖
    print("安装依赖...")
    run_command("yarn install")
    
    # 3. 构建Android应用
    print("构建Android应用...")
    run_command("cd android && ./gradlew assembleRelease")
    
    # 4. 检查APK是否生成
    apk_path = "android/app/build/outputs/apk/release/app-release.apk"
    if not os.path.exists(apk_path):
        print("错误: APK文件未生成")
        sys.exit(1)
    
    print(f"\n构建完成！APK文件位置: {apk_path}")
    return 0

if __name__ == "__main__":
    try:
        sys.exit(build_android())
    except Exception as e:
        print(f"构建过程中发生错误: {str(e)}")
        sys.exit(1) 