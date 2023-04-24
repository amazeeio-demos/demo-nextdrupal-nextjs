#!/bin/sh

if [ $LAGOON_ENVIRONMENT_TYPE == "production" ]; then
	yarn preview
else
	yarn dev
fi
