TARGET=edxJS

FILES=edxJS.js easyXDM/artifacts/v2.4.17/easyXDM.min.js

#$(wildcard easyXDM/src/*.js) $(wildcard easyXDM/src/stack/*)

edxJS: $(FILES)
	uglifyjs $(FILES) -o edxJS.min.js
