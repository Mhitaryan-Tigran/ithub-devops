# Linux для DevOps-инженера

Все команды выполнены в терминале Ubuntu 26.04 LTS (виртуальная машина Lima на macOS). Скриншоты по пунктам задания — в `screenshots/`.

| Пункт | Скриншот |
|---|---|
| 1. `mkdir -p ~/devops/app/logs ~/devops/app/config` и `ls -la ~/devops/app` | `01-mkdir.png` |
| 2. `app.env` с `APP_PORT=3000`, `APP_ENV=production`, `DB_HOST=localhost`, `chmod 600`, `ls -l` | `02-env.png` |
| 3. `app.log` из семи строк (три ERROR), `grep -n ERROR` | `03-log.png` |
| 4. Скрипт [check_logs.sh](check_logs.sh): `chmod +x`, запуск — «Найдено ошибок: 3», и проверка ветки «Ошибок не найдено» | `04-script.png`, `04b-no-errors.png` |
| 5. `ps aux \| grep bash` | `05-ps.png` |
