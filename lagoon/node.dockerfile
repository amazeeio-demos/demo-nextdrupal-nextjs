FROM uselagoon/node-16-builder:latest as builder
COPY package.json /app/
RUN yarn install

FROM uselagoon/node-16:latest
COPY --from=builder /app/node_modules /app/node_modules
COPY . /app/

EXPOSE 3000

CMD ["/app/lagoon/start.sh"]
