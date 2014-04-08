
build: popover.css index.js template.html components
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean
