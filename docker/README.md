# Docker: образы, контейнеры, Dockerfile

Приложение `docker-app` из задания: [src/index.js](docker-app/src/index.js), [package.json](docker-app/package.json), [Dockerfile](docker-app/Dockerfile) на node:20-alpine (WORKDIR /app, копирование package.json, npm ci, копирование кода, ENV PORT=3000, CMD) и [.dockerignore](docker-app/.dockerignore) без node_modules, .env, .git.

| Шаг | Скриншот |
|---|---|
| Файлы проекта | `screenshots/01-files.png` |
| Dockerfile и .dockerignore | `screenshots/02-dockerfile.png` |
| `docker build -t docker-app:1.0 .` | `screenshots/03-build.png` |
| `docker run -p 3000:3000`, `curl http://localhost:3000` → «Hello from Docker», `docker logs` | `screenshots/04-run.png` |
