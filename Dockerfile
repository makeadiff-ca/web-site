FROM node:10.9-alpine

ARG GATSBY_GTAG
ENV GATSBY_GTAG ${GATSBY_GTAG}

ADD ./ /app
COPY ./site/CHECKS /app/CHECKS
RUN cd /app/site && \
  yarn && \
  yarn build && \
  rm -r node_modules && \
  cd ../server && \
  yarn && \
  yarn build && \
  yarn cache clean

WORKDIR /app/server

EXPOSE 3000
CMD ["./start"]
