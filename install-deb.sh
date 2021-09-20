# Node & NPM installation script for Debian based distros.
# Use this script to install node and npm if not installed yet.
# by 4ngel🍁#2769

sudo apt-get update && sudo apt-get upgrade
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source ~/.profile

nvm install v14.17.6

npm install
