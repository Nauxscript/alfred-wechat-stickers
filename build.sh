# /bin/bash

# if any return not equal to true, process will quit.
# refer to https://www.zhizhesoft.com/unix-linux-jiao-ben-zhong-set-e-de-zuo-yong/
set -e

# refer to https://blog.csdn.net/qq_20417499/article/details/103308076
# this script's parent directory
cd $(dirname $0)
parentDir=$(pwd)

cd dist
echo "setup files ..."
cp ${parentDir}/src/info.plist ./ 
cp ${parentDir}/src/icon.png ./ 
cp ${parentDir}/README.md ./ 
cp ${parentDir}/LICENSE ./ 
cp -r ${parentDir}/icons ./ 

rm ./index.mjs

echo "Updating version ..."
curVersion=$(node -e "console.log(require('${parentDir}/package.json').version)")
sed -i '' 's/{{version}}/'${curVersion}'/' ./info.plist

echo "Injecting readme ..."
readme="${parentDir}/src/README.md"
sed -i '' -e "/{{readme}}/{r ${readme}" -e 'd' -e '}' ./info.plist

echo "Injecting auto-update script ..."
update="$(mktemp)"
# s/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g => repalce '&' '<' '>'
cat ${parentDir}/src/update.sh | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g' > ${update}
sed -i '' -e "/{{update_script}}/{r ${update}" -e 'd' -e '}' ./info.plist
 
echo "Injecting copy script ..."
copy="$(mktemp)"
# s/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g => repalce '&' '<' '>'
cat ${parentDir}/src/copy.sh | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g' > ${copy}
sed -i '' -e "/{{copy_script}}/{r ${copy}" -e 'd' -e '}' ./info.plist

echo "Bundling workflow ..."
name=$(node -e "console.log(require('${parentDir}/package.json').name)")
zip -Z deflate -rq9 ${parentDir}/${name}.alfredworkflow * -x etc
