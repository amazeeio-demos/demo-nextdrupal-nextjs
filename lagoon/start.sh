#!/bin/sh

if [ $LAGOON_ENVIRONMENT_TYPE == "production" ]; then
	yarn start
else
	yarn dev
fi
