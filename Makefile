# необходимо установить утилиту make v4.2.1 через пакетный менеджер Chocolatey v0.10.11
# запуск в консоли по умолчанию "make" без параметров
.DEFAULT_GOAL := run

# запускается командой "make run". Все сроки с отступом TAB, а новые команды с новой строки без отступа
run:
	echo "Start server now!"
	babel src --out-dir dist
	http-server

# Запускаем одну команду в составе другой командой "make build". Это пример.
build: run
