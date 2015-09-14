
build: popover.css index.js template.html components
	@component build --dev

components:
	@component install --dev

build-browserify: index.js template.html node_modules
	@mkdir -p build
	@browserify \
		--require popover \
		--require ./index.js:confirmation-popover \
		--outfile build/build.js

clean:
	rm -fr build components

.PHONY: clean build

