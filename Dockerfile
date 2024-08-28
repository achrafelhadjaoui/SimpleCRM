FROM node:20
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8080
RUN npx prisma generate
RUN npx prisma migrate deploy
CMD ["node", "index.js"]
