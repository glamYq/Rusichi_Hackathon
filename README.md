
# Rusichi_Hackathon

Установка всех библиотек для python (файл requirement.txt из корня репозитория):

```
pip install -r requirements.txt
```

Для поднятия сервисов баз (необходимо наличие докера):

```
make up
```

Дроп сервисов баз:

```
make down
```

Для накатывания миграций, если файла alembic.ini ещё нет, нужно запустить в терминале команду:

```
alembic init migrations
```