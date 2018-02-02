# clean up last version
rm -rf _deploy
mkdir _deploy

# build
sh scripts/build.sh

# uglify js
node_modules/.bin/uglifyjs bundle.js -o _deploy/bundle.js
# minify css
node_modules/.bin/uglifycss bundle.css > _deploy/bundle.css
# copy HTML and images
cp index.html _deploy/index.html
cp -r images/ _deploy/images/

# done
date; echo;