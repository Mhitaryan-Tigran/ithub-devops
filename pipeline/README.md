# Автоматическое тестирование и сборка Docker-образа в pipeline

Репозиторий: https://github.com/Mhitaryan-Tigran/devops-gitflow, workflow [`.github/workflows/ci-cd.yml`](https://github.com/Mhitaryan-Tigran/devops-gitflow/blob/main/.github/workflows/ci-cd.yml), образ: `ghcr.io/mhitaryan-tigran/devops-gitflow`.

| Job | Что делает |
|---|---|
| `lint` | Node.js 20, `npm ci`, `npm run lint` (ESLint 9, flat config) |
| `test` | `needs: lint`; сервисный контейнер `postgres:16-alpine` с health check `pg_isready`; `npm test` (Jest): 3 unit-теста функций приложения и тест подключения к Postgres через `DATABASE_URL` |
| `build-and-push` | `needs: test`, только при пуше в `main`; `docker/login-action` в ghcr.io и `docker/build-push-action` с тегами `latest` и `${{ github.sha }}` |

| Шаг | Доказательство |
|---|---|
| ESLint, Jest, скрипты lint и test | `screenshots/01-install.png`, `screenshots/02-lint-test-local.png` |
| Workflow из трёх jobs | `screenshots/03-workflow.png` |
| PR в `main`: lint → test прошли, build-and-push пропущен | `screenshots/04-push-pr.png`, `screenshots/05-pr-checks.png`, `screenshots/github-pr-checks.png` |
| Слияние в `main`: все три job, образ в GHCR скачивается | `screenshots/06-merge.png`, `screenshots/07-ghcr.png` |
| Страница Packages с образом | `screenshots/github-package.png` |
| Сломанный тест: test упал, build-and-push не запустился | `screenshots/08-break.png`, `screenshots/09-failed.png`, `screenshots/github-failed-run.png` |
| Вкладка Actions | `screenshots/github-actions.png` |
