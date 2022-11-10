FROM node:18-alpine3.15 AS deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

FROM node:18-alpine3.15 AS builder
# ENV NODE_ENV=production
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:18-alpine3.15 AS runner

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile --production

COPY package.json yarn.lock next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 3000
ENV PORT 3000

CMD ["yarn", "start"]
