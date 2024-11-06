# Этап сборки
FROM node:22 AS builder

WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm i --loglevel verbose

# Копируем все файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Этап запуска
FROM node:18

WORKDIR /app

# Копируем только файлы сборки
COPY --from=builder /app/build /app

# Открываем порт 3000
EXPOSE 3000

# Устанавливаем простой сервер для статических файлов
RUN npm install -g serve --loglevel verbose

# Используем "serve" для обслуживания файлов сборки
CMD ["serve", "-s", ".", "-l", "3000"]
