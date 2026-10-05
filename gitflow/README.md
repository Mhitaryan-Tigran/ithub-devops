# Принципы CI/CD. Git-flow и стратегии ветвления

Репозиторий: https://github.com/Mhitaryan-Tigran/devops-gitflow

## Что сделано

| Шаг | Доказательство |
|---|---|
| Репозиторий создан, ветки `main` и `develop` запушены | `screenshots/01-init.png` |
| Ветка `feature/hello-page` от `develop`, `index.html`, PR в `develop` | `screenshots/02-feature-pr.png`, [PR #1](https://github.com/Mhitaryan-Tigran/devops-gitflow/pull/1), `screenshots/github-pr-feature.png` |
| Branch protection для `main`: Require a pull request before merging | `screenshots/03-protection.png`; прямой `git push origin develop:main` отклонён — `screenshots/04-merge-develop.png` |
| PR `feature/hello-page → develop` смержен, затем PR `develop → main` смержен | `screenshots/04-merge-develop.png`, `screenshots/05-release.png`, [PR #2](https://github.com/Mhitaryan-Tigran/devops-gitflow/pull/2), `screenshots/github-pr-release.png` |
| Граф веток `git log --oneline --graph --all` | `screenshots/05-release.png` |

## Стратегия ветвления

- `main` — то, что работает в production. Только через PR из `develop` (релиз) или `hotfix/*`, прямой пуш запрещён.
- `develop` — интеграционная ветка следующего релиза.
- `feature/*` — одна задача, ответвляется от `develop` и возвращается в неё через PR с ревью.
- `hotfix/*` — срочное исправление от `main`, сливается и в `main`, и в `develop`.

## Каким был бы CI/CD-пайплайн

| Событие | Что запускается |
|---|---|
| Пуш в `feature/*` и PR в `develop` | Установка зависимостей, линтер, unit-тесты, сборка проекта. Быстрая обратная связь за пару минут; PR нельзя слить, пока проверки красные |
| Слияние в `develop` | Всё то же + интеграционные тесты с базой в сервисном контейнере, сборка Docker-образа с тегом `develop-<sha>`, автоматический деплой на staging и smoke-тест staging |
| Слияние в `main` | Полный набор тестов, сборка образа с тегами `latest` и `<sha>`, публикация в реестр, деплой в production (с ручным подтверждением или постепенным rollout), проверка `/health`, уведомление команды; при сбое — откат на предыдущий тег |

Именно это и реализовано в следующих практиках: [GitHub Actions](../actions) и [пайплайн с lint, test, build-and-push](../pipeline).
