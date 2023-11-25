Lighthouse
=========

- Загрузка и установка веб-интерфейса Lighthouse для просмотра БД Clickhouse

Requirements
------------

Для работы необходимы ```Clickhouse``` и ```nginx```

Role Variables
--------------
```lighthouse_vcs``` - адрес репозитория lighthouse на github

```ighthouse_location_dir:``` - каталог скачивания lighthouse

Dependencies
------------
Необходима роль clickhouse-role 

Example Playbook
----------------
```
    - hosts: lighthouse
      roles:
         - lighthouse-role
```
License
-------

BSD

Author Information
------------------