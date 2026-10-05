# Основы IaC. Введение в Ansible

Плейбук выполнен в Ubuntu 26.04 LTS (виртуальная машина Lima), Ansible установлен через pip в виртуальное окружение.

- [inventory.ini](inventory.ini) — группа `local`, хост `localhost` с `ansible_connection=local`.
- [playbook.yml](playbook.yml) — обновление кэша apt, установка nginx, каталог `/var/www/devops` с правами 755, `index.html` с текстом «Deployed with Ansible» (с `notify: Restart nginx`), корень сайта nginx переключён на `/var/www/devops`, nginx запущен и включён в автозапуск; handler `Restart nginx`.

| Шаг | Скриншот |
|---|---|
| Установка Ansible, директория `~/devops/ansible` | `screenshots/01-install.png` |
| inventory.ini и playbook.yml | `screenshots/02-files.png` |
| Запуск с `--check` — проверка без изменений | `screenshots/03-check.png` |
| Первый запуск: задачи `changed`, сработал handler | `screenshots/04-first-run.png` |
| `systemctl status nginx` и `curl http://localhost` → «Deployed with Ansible» | `screenshots/05-nginx.png` |
| Повторный запуск: все задачи `ok`, `changed=0` — идемпотентность | `screenshots/06-second-run.png` |
