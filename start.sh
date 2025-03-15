#!/bin/bash
export PATH=/opt/cpanel/ea-nodejs20/root/usr/bin:$PATH
cd /home/bindx/public_html

# Install dependencies
npm install --production

# Build the application
npm run build

# Start the application with PM2
if pm2 list | grep -q "next"; then
    pm2 reload next
else
    pm2 start npm --name "next" -- start
fi 