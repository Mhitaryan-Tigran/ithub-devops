# GitHub Actions. Написание pipeline

Репозиторий: https://github.com/Mhitaryan-Tigran/devops-gitflow, workflow `.github/workflows/ci.yml` (в следующей практике заменён на `ci-cd.yml`, история запусков сохранилась).

| Job | Условия и шаги |
|---|---|
| `ci` | ubuntu-latest; push и pull_request в `main` и `develop`; checkout → Node.js 20 → `npm ci` → `npm test` |
| `docker` | `needs: ci`, `if: push в main`; checkout → `docker build -t devops-gitflow:${{ github.sha }} .` |

| Шаг | Доказательство |
|---|---|
| Node.js-приложение, `"test": "echo 'tests passed' && exit 0"`, Dockerfile | `screenshots/01-app.png` |
| Workflow с двумя jobs | `screenshots/02-workflow.png` |
| Пуш в `develop`, PR в `main` | `screenshots/03-push-pr.png` |
| Job `ci` прошёл, `docker` пропущен на PR | `screenshots/04-pr-checks.png`, `screenshots/github-pr-checks.png` |
| Для `main` обязателен зелёный `ci` | `screenshots/05-require-ci.png` |
| После слияния в `main` запустились `ci` и `docker` | `screenshots/06-merge.png`, `screenshots/07-main-run.png` |
| `exit 1` в тесте → пайплайн упал, PR в состоянии BLOCKED, слить нельзя | `screenshots/08-break.png`, `screenshots/09-failed.png` |
| Исправление → проверки зелёные, PR снова CLEAN | `screenshots/10-fix.png`, `screenshots/11-fixed.png` |
| Вкладка Actions с успешными и упавшим запусками | `screenshots/github-actions.png` |
