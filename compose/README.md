# Docker Compose. Многоконтейнерные приложения

[docker-compose.yml](docker-compose.yml): сервис `app` собирается из Dockerfile приложения docker-app, порт 3000, `DB_HOST=postgres`, `depends_on: postgres`, `restart: unless-stopped`; сервис `postgres` — postgres:16-alpine с POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD и именованным томом `postgres_data`.

| Шаг | Скриншот |
|---|---|
| Файл compose | `screenshots/01-compose-file.png` |
| `docker compose up -d`, `docker compose ps` — оба running, curl | `screenshots/02-up.png` |
| `docker compose logs postgres` | `screenshots/03-logs.png` |
| `psql -U myuser -d mydb` внутри контейнера, запись строки | `screenshots/04-psql.png` |
| `docker compose down`, том на месте, `up -d` — строка сохранилась | `screenshots/05-persist.png` |
