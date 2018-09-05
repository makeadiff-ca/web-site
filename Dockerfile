FROM node:10.9-alpine

ARG GATSBY_GTAG
ENV GATSBY_GTAG ${GATSBY_GTAG}

ARG GATSBY_API_PREFIX
ENV GATSBY_API_PREFIX ${GATSBY_API_PREFIX}

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
