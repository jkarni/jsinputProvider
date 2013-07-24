TARGET=edxJS

FILES=edxJS.js $(wildcard easyXDM/src/*.js) $(wildcard easyXDM/src/stack/*)

edxJS: $(FILES)
	uglifyjs $(FILES) -o edxJS.min.js
