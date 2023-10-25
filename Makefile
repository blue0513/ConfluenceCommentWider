.PHONY: setup install fix check

setup:
	cp manifest.json.example manifest.json
	@echo "Please edit manifest.json"

install:
	npm install

fix: install
	npm run fix-all

check: install
	npm run check-all
