# js transform
node_modules/.bin/babel --presets react,es2015 js/source -d js/build
# js package
node_modules/.bin/browserify js/build/app.js -o bundle.js
# scss package
cat styles/source/*/* styles/source/*.scss | sed 's/..\/..\/images/images/g' > styles/build/bundle.scss

# scss transpile
node_modules/.bin/npm-sass ./styles/build/bundle.scss > ./bundle.css

# done
date; echo;