test:
	@./node_modules/.bin/mocha

test-w:
	@./node_modules/.bin/mocha \
			--growl \
			--watch

.PHONY: test test-w
