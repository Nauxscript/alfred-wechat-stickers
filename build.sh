# /bin/bash

# if any return not equal to true, process will quit.
# refer to https://www.zhizhesoft.com/unix-linux-jiao-ben-zhong-set-e-de-zuo-yong/
set -e

# refer to https://blog.csdn.net/qq_20417499/article/details/103308076
# this script's parent directory
cd $(dirname $0)
parentDir=$(pwd)
curVersion=$(node -e "console.log(require('${parentDir}/package.json').version)")
name=$(node -e "console.log(require('${parentDir}/package.json').name)")

rm -rf release
mkdir release 

cd dist
echo "setup files ..."

cp ${parentDir}/info.plist ./ 
cp ${parentDir}/icon.png ./ 
cp -r ${parentDir}/icons ./ 

rm ./index.mjs
 
echo "Bundling workflow ..."
zip -Z deflate -rq9 ${parentDir}/release/${name}.alfredworkflow * -x etc

cd ..
rm -rf ./dist