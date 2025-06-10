#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys
import subprocess
import argparse
import shutil
from datetime import datetime

def run_command(command, cwd=None):
    """执行命令并实时输出结果"""
    print(f"执行: {command}")
    process = subprocess.Popen(
        command,
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        universal_newlines=True,
        cwd=cwd
    )

    for line in process.stdout:
        print(line.strip())

    process.wait()
    return process.returncode

def ensure_dir(directory):
    """确保目录存在，如果不存在则创建"""
    if not os.path.exists(directory):
        os.makedirs(directory)
        print(f"创建目录: {directory}")

def build_android(release=True, aab=False):
    """构建Android应用"""
    print("\n===== 开始构建Android应用 =====")

    # 创建输出目录
    output_base_dir = "build_outputs"
    ensure_dir(output_base_dir)

    android_output_dir = os.path.join(output_base_dir, "android")
    ensure_dir(android_output_dir)

    # 根据构建类型创建子目录
    build_type = "release" if release else "debug"
    build_format = "aab" if aab and release else "apk"

    output_dir = os.path.join(android_output_dir, build_type)
    ensure_dir(output_dir)

    # 当前时间戳，用于文件名
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    # 清理旧的构建文件
    run_command("cd android && ./gradlew clean")

    if release:
        if aab:
            # 构建AAB格式（Google Play发布）
            result = run_command("cd android && ./gradlew bundleRelease")
            if result == 0:
                # 源文件路径
                source_file = "android/app/build/outputs/bundle/release/app-release.aab"
                # 目标文件路径
                target_file = os.path.join(output_dir, f"app-release-{timestamp}.aab")

                # 复制文件
                if os.path.exists(source_file):
                    shutil.copy2(source_file, target_file)
                    print("\n✅ Android App Bundle (.aab) 构建成功!")
                    print(f"文件已复制到: {target_file}")
                else:
                    print(f"\n❌ 源文件不存在: {source_file}")
                    return False
        else:
            # 构建APK格式
            result = run_command("cd android && ./gradlew assembleRelease")
            if result == 0:
                # 源文件路径
                source_file = "android/app/build/outputs/apk/release/app-release.apk"
                # 目标文件路径
                target_file = os.path.join(output_dir, f"app-release-{timestamp}.apk")

                # 复制文件
                if os.path.exists(source_file):
                    shutil.copy2(source_file, target_file)
                    print("\n✅ Android APK 构建成功!")
                    print(f"文件已复制到: {target_file}")
                else:
                    print(f"\n❌ 源文件不存在: {source_file}")
                    return False
    else:
        # 构建Debug版本
        result = run_command("cd android && ./gradlew assembleDebug")
        if result == 0:
            # 源文件路径
            source_file = "android/app/build/outputs/apk/debug/app-debug.apk"
            # 目标文件路径
            target_file = os.path.join(output_dir, f"app-debug-{timestamp}.apk")

            # 复制文件
            if os.path.exists(source_file):
                shutil.copy2(source_file, target_file)
                print("\n✅ Android Debug APK 构建成功!")
                print(f"文件已复制到: {target_file}")
            else:
                print(f"\n❌ 源文件不存在: {source_file}")
                return False

    # 创建最新版本的链接
    if result == 0:
        latest_link = os.path.join(output_dir, f"latest.{build_format}")
        if os.path.exists(latest_link):
            os.remove(latest_link)
        os.symlink(os.path.basename(target_file), latest_link)
        print(f"创建最新版本链接: {latest_link}")

    return result == 0

def main():
    parser = argparse.ArgumentParser(description="React Native Android应用打包脚本")
    parser.add_argument("--debug", action="store_true", help="构建Debug版本而不是Release版本")
    parser.add_argument("--aab", action="store_true", help="构建AAB格式(Google Play)而不是APK")

    args = parser.parse_args()
    release = not args.debug

    print(f"{'=' * 50}")
    print(f"React Native Android应用打包 - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"模式: {'Debug' if args.debug else 'Release'}")
    print(f"Android格式: {'AAB' if args.aab else 'APK'}")
    print(f"{'=' * 50}\n")

    success = build_android(release=release, aab=args.aab)

    print(f"\n{'=' * 50}")
    if success:
        print("✅ Android应用构建成功!")
    else:
        print("❌ Android应用构建失败，请检查上面的错误信息")
    print(f"{'=' * 50}")

    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())
