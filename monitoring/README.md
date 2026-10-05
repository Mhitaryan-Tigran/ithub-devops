# Мониторинг и логирование. Prometheus + Grafana

Файлы стека — в [monitoring/](monitoring): приложение с prom-client ([src/index.js](monitoring/src/index.js): `collectDefaultMetrics` и счётчик `http_requests_total` с метками method, route, status, эндпоинт `/metrics`), [docker-compose.yml](monitoring/docker-compose.yml) с сервисами app, prometheus (prom/prometheus:latest, конфиг из файла) и grafana (grafana/grafana:latest, порт 3001, пароль через `GF_SECURITY_ADMIN_PASSWORD`), [prometheus.yml](monitoring/prometheus.yml) со scrape цели app каждые 15 секунд, дашборд [grafana-dashboard.json](monitoring/grafana-dashboard.json).

| Шаг | Скриншот |
|---|---|
| Приложение и prom-client | `screenshots/01-app.png` |
| prometheus.yml, docker-compose.yml, Dockerfile | `screenshots/02-config.png` |
| `docker compose up -d`, три сервиса | `screenshots/03-up.png` |
| Запросы через curl и метрики на `/metrics` | `screenshots/04-metrics.png` |
| Цель app — UP; источник данных `http://prometheus:9090` и дашборд добавлены через API Grafana | `screenshots/05-targets-grafana.png` |
| Status → Targets в Prometheus | `screenshots/07-prometheus-targets.png` |
| Дашборд Grafana: `rate(http_requests_total[5m])` и `process_resident_memory_bytes` | `screenshots/08-grafana-dashboard.png` |
