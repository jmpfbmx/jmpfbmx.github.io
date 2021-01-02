+++
title = "How to prepare your PC for Android Building?"
date = "2021-01-01"
author = "Jose"
tags = ['Android']
+++

Hi,

Today will explain you how to prepare your PC for Android building.

What will you need for Android Building?
 - A computer with:
   - At least 8GB of RAM, the recommend amount of RAM is 16GB
   - 300GB free
   - A decent internet connection and reliable electricity
   - Being familiar with Linux.

1st.- We need to install ADB and Fastboot.
 
 How to install ADB and Fastboot at ___ ?:
 - Arch Linux and derivated:
    - First we will update our packages
      - `sudo pacman -Syyu`
    - When the packages update has finished we will install it using:
      - `sudo pacman -S android-tools`
 - Debian and derivated:
    - First we will update our packages
      - `sudo apt-get update`
    - When the packages update has finished we will install it using:
      - `sudo apt-get install android-tools-adb android-tools-fastboot`
 
    Now we have ADB and Fastboot installed at our pc.

2nd.- We need to install udev-rules (Thanks to @invisiblek for his work)

 If we have installed git we will just need to do:
 - `git clone http://github.com/invisiblek/udevrules.git && cd udevrules && ./install.sh`

 If we don't have installed git we will just need to do:
 - `mkdir udevrules && wget https://raw.githubusercontent.com/invisiblek/udevrules/master/99-android.rules && wget https://raw.githubusercontent.com/invisiblek/udevrules/master/install.sh && chmod a+x install.sh && ./install.sh`

3rd.- We need to install needed tools for Android building.

 How to install needed tools at ___ ?:
 - Arch Linux and derivated:
    - We will just need to do the following
       - `yay -S base-devel multilib-devel gcc repo git gnupg gperf sdl wxgtk2 squashfs-tools curl ncurses zlib schedtool perl-switch zip unzip libxslt bc rsync ccache lib32-zlib lib32-ncurses lib32-readline multilib-devel inetutils && gpg --keyserver keys.gnupg.net --recv-keys C52048C0C0748FEE227D47A2702353E0F7E48EDB && git clone http://aur.archlinux.org/ncurses5-compat-libs.git && cd ncurses5-compat-libs && makepkg -sic && cd .. && sudo rm -r ncurses5-compat-libs && yay -S lib32-ncurses5-compat-libs && yay -S lineageos-devel && yay -S python`
 - Debian and derivated:
    - First we will update our packages
      - `sudo apt-get update`
    - When the packages update has finished we will install it using:
      - `sudo apt-get install bc bison build-essential ccache curl flex g++-multilib gcc-multilib git gnupg gperf imagemagick lib32ncurses5-dev lib32readline-dev lib32z1-dev liblz4-tool libncurses5 libncurses5-dev libsdl1.2-dev libssl-dev libxml2 libxml2-utils lzop pngcrush rsync schedtool squashfs-tools xsltproc zip zlib1g-dev && sudo apt-get install git && sudo apt-get install python`

 - IMPORTANT:
    - If we are going to build Android 4.4, 5.x or 6.0 we need to install `openjdk-7-jdk`
    - If we are going to build Android 7.x or 8.x we need to install `openjdk-8-jdk`
    - If we are going to build any Android ver higher than 8.x we don't need to install openjdk-x-jdk because it is included by default at android source

4th.- We need to install the repo command.

 How to install the repo command?
  - First we will create a folder called bin:
    - `mkdir -p ~/bin/`
  - Second we will need to download repo from google, so we will do this:
    - `curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo`
  - Third we will give the correct permissions to repo:
    - `chmod a+x ~/bin/repo`
  - Fourth we will put the ~/bin directory in your path of execution:
    - First we will open .profile for it we will do this:
        - `sudo nano ~/.profile`
    - Second we will check if we have the following code if we don't have it we will add it:
        - ` # set PATH so it includes user's private bin if it exists`
        - `   if [ -d "$HOME/bin" ] ; then`
        - `        PATH="$HOME/bin:$PATH"`
        - `    fi`
    - Third if we added the code we will just need to do:
        - `sudo source ~/.profile`
    This will update our enviroment

5th.- We will configure git.
 How to configure git?
  - Is to easy we just need to config our mail and username
    - ```git config --global user.email you@example.com```
    - ```git config --global user.name YourGitUserName```
 
 We needed to config git because repo requires your identity for let you sync Android.

Finally you have finished prepiring your enviroment for building Android.
