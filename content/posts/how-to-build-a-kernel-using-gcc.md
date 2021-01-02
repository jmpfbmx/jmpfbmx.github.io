+++
title = "How to build a kernel using GCC?"
date = "2021-01-01"
author = "Jose"
tags = ['Linux_Kernel','Android']
+++

Hi,

Today will explain you how to build a kernel using GCC toolchain.

What will you need for Android Building?
 - A computer with:
   - At least 4GB of RAM.
   - 10GB free as maximum
   - Being familiar with Linux.

1st.- We need to clone our kernel source or download it from the brand opensource webpage.

2nd.- We need to know the arch of our kernel source before start cloning the toolchain.
 
 - For know it is an easy thing you just need to go to arch/arm/configs/ and search for the codename of your phone if it isn't there it will be located at arch/arm64/configs/.

3rd.- When we know the arch of our phone we will start cloning the toolchain:

 - If it is ARM
    - If we are gonna build a kernel of an Android below 9.0 we will just need to sync 4.8 toolchain
      - `git clone https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/arm/arm-eabi-4.8`
    - If we are gonna build a kernel of Android 9 or + we will just need to sync 4.9 toolchain
      - `git clone https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/arm/arm-linux-androideabi-4.9/`
 - If it is ARM64
    - We will just need to sync 4.9 toolchain
      - `git clone https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/`

4th.- We will just need to make a folder called KERNEL_OUT

 - `mkdir -p KERNEL_OUT`

5th.- Start building the kernel

 - If it is ARM
    - If we are going to build a kernel using 4.8 toolchain:
      - `make -C kernel  O=../KERNEL_OUT  ARCH=arm CROSS_COMPILE=../arm-eabi-4.8/bin/arm-eabi- codename_defconfig`
      - `make O=../KERNEL_OUT/ -C kernel ARCH=arm  CROSS_COMPILE=../arm-eabi-4.8/bin/arm-eabi- -j$(nproc --all)`
    - If we are going to build a kernel using 4.9 toolchain:
      - `make -C kernel  O=../KERNEL_OUT  ARCH=arm CROSS_COMPILE=../arm-linux-androideabi-4.9/bin/arm-linux-androideabi- codename_defconfig`
      - `make O=../KERNEL_OUT/ -C kernel ARCH=arm  CROSS_COMPILE=../arm-linux-androideabi-4.9/bin/arm-linux-androideabi- -j$(nproc --all)`
 - If it is ARM64
    - `make -C kernel O=../KERNEL_OUT ARCH=arm64 CROSS_COMPILE=../aarch64-linux-android-4.9 codename_defconfig`
    - `make O=../KERNEL_OUT/ -C kernel ARCH=arm64 CROSS_COMPILE=../aarch64-linux-android-4.9/bin/aarch64-linux-android- -j$(nproc --all)`

* Remember that you need to change `codename` with the codename of your device!