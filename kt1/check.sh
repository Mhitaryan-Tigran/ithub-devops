#!/usr/bin/env bash
LOG="$(dirname "$0")/logs/app.log"
count=$(grep -c "ERROR" "$LOG" 2>/dev/null || true)
if [ "${count:-0}" -gt 0 ]; then
  echo "Найдено ошибок: $count"
else
  echo "Ошибок не найдено"
fi
