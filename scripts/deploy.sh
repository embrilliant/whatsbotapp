# clean up last version
rm -rf __deploy
mkdir __deploy

# build
sh scripts/build.sh

# uglify js
node_modules/.bin/uglifyjs bundle.js -o __deploy/bundle.js
# minify css
node_modules/.bin/uglifycss bundle.css > __deploy/bundle.css
# copy HTML and images
cp index.html __deploy/index.html
cp -r images/ __deploy/images/

# done
date; echo;