FROM node:16-alpine as base

WORKDIR /app
COPY . /app
EXPOSE 3000

FROM base as dev
ENV NODE_ENV=dev
# ENV DB_USER=gag
# ENV DB_HOST=localhost
# ENV DB_NAME=newgag
# ENV DB_PASSWORD='gag'
# ENV DB_PORT=5432
ENV PORT=5050
ENV HOST=localhost
RUN npm install -g nodemon && npm install
RUN nodemon app.js
# CMD ["bash", "backend/deploy.sh"]