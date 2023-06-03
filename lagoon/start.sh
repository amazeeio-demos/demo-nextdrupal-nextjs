#!/bin/sh
cd /app
yarn dev

exit 0;



if [ $LAGOON_ENVIRONMENT_TYPE == "production" ]; then
	cd /app
	yarn preview
else
	cd /app
	yarn dev
fi
