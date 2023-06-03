#!/bin/sh

if [ $LAGOON_ENVIRONMENT_TYPE == "production" ]; then
	cd /app
	yarn preview
else
	cd /app
	yarn dev
fi
