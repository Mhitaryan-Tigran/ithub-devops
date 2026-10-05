# Docker Registry. Управление образами

Образ `docker-app:1.0` опубликован в Docker Hub под пользователем legitcode: https://hub.docker.com/r/legitcode/docker-app

| Шаг | Скриншот |
|---|---|
| `docker login`, `docker tag` на `legitcode/docker-app:1.0` и `:latest` | `screenshots/01-tag.png` |
| `docker push` обоих тегов | `screenshots/02-push.png` |
| `docker rmi` обоих тегов, `docker pull` | `screenshots/03-pull.png` |
| Запуск скачанного образа, `curl http://localhost:3000` | `screenshots/04-run-pulled.png` |
| Страница образа на Docker Hub с тегами 1.0 и latest | `screenshots/dockerhub-docker-app.png` |
