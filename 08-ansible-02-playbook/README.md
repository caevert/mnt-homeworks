# Домашнее задание к занятию 2 «Работа с Playbook»

## Подготовка к выполнению

1. * Необязательно. Изучите, что такое [ClickHouse](https://www.youtube.com/watch?v=fjTNS2zkeBs) и [Vector](https://www.youtube.com/watch?v=CgEhyffisLY).
2. Создайте свой публичный репозиторий на GitHub с произвольным именем или используйте старый.
3. Скачайте [Playbook](./playbook/) из репозитория с домашним заданием и перенесите его в свой репозиторий.
4. Подготовьте хосты в соответствии с группами из предподготовленного playbook.

## Основная часть

1. Подготовьте свой inventory-файл `prod.yml`.
2. Допишите playbook: нужно сделать ещё один play, который устанавливает и настраивает [vector](https://vector.dev). Конфигурация vector должна деплоиться через template файл jinja2. От вас не требуется использовать все возможности шаблонизатора, просто вставьте стандартный конфиг в template файл. Информация по шаблонам по [ссылке](https://www.dmosk.ru/instruktions.php?object=ansible-nginx-install).
3. При создании tasks рекомендую использовать модули: `get_url`, `template`, `unarchive`, `file`.
4. Tasks должны: скачать дистрибутив нужной версии, выполнить распаковку в выбранную директорию, установить vector.

```
  tasks:
    - name: Get RPM Vector
      ansible.builtin.get_url:
        url: "https://packages.timber.io/vector/{{ vector_version }}/vector-{{ vector_version }}-1.x86_64.rpm"
        dest: "./vector-{{ vector_version }}.rpm"
        mode: "0644"
      tags: vector
    - name: Install vector package
      become: true
      become_method: su
      ansible.builtin.yum:
        name:
          - vector-{{ vector_version }}.rpm
      tags: vector
```

5. Запустите `ansible-lint site.yml` и исправьте ошибки, если они есть.
6. Попробуйте запустить playbook на этом окружении с флагом `--check`.

```
ad@ads-iMac playbook % ansible-playbook site.yml -i ./inventory --check

PLAY [Install Clickhouse] ************************************************************************************************************************************************

TASK [Gathering Facts] ***************************************************************************************************************************************************
ok: [clickhouse-01]

TASK [Get clickhouse distrib] ********************************************************************************************************************************************
ok: [clickhouse-01] => (item=clickhouse-client)
ok: [clickhouse-01] => (item=clickhouse-server)
failed: [clickhouse-01] (item=clickhouse-common-static) => {"ansible_loop_var": "item", "changed": false, "dest": "./clickhouse-common-static-22.3.3.44.rpm", "elapsed": 0, "gid": 0, "group": "root", "item": "clickhouse-common-static", "mode": "0644", "msg": "Request failed", "owner": "root", "response": "HTTP Error 404: Not Found", "size": 246310036, "state": "file", "status_code": 404, "uid": 0, "url": "https://packages.clickhouse.com/rpm/stable/clickhouse-common-static-22.3.3.44.noarch.rpm"}

TASK [Get clickhouse distrib] ********************************************************************************************************************************************
ok: [clickhouse-01]

TASK [Install clickhouse packages] ***************************************************************************************************************************************
ok: [clickhouse-01]

TASK [Flush handlers] ****************************************************************************************************************************************************

TASK [Start clickhouse-server] *******************************************************************************************************************************************
skipping: [clickhouse-01]

TASK [Create database] ***************************************************************************************************************************************************
skipping: [clickhouse-01]

PLAY [Install Vector] ****************************************************************************************************************************************************

TASK [Gathering Facts] ***************************************************************************************************************************************************
ok: [clickhouse-01]
ok: [vector-01]

TASK [Get RPM Vector] ****************************************************************************************************************************************************
ok: [clickhouse-01]
ok: [vector-01]

TASK [Install vector package] ********************************************************************************************************************************************
ok: [clickhouse-01]
ok: [vector-01]

TASK [Create vector configuration] ***************************************************************************************************************************************
ok: [vector-01]
ok: [clickhouse-01]

TASK [Using vector template] *********************************************************************************************************************************************
ok: [vector-01]
ok: [clickhouse-01]

PLAY RECAP ***************************************************************************************************************************************************************
clickhouse-01              : ok=8    changed=0    unreachable=0    failed=0    skipped=2    rescued=1    ignored=0   
vector-01                  : ok=5    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   

```

7. Запустите playbook на `prod.yml` окружении с флагом `--diff`. Убедитесь, что изменения на системе произведены.
8. Повторно запустите playbook с флагом `--diff` и убедитесь, что playbook идемпотентен.
9. Подготовьте README.md-файл по своему playbook. В нём должно быть описано: что делает playbook, какие у него есть параметры и теги. Пример качественной документации ansible playbook по [ссылке](https://github.com/opensearch-project/ansible-playbook).

# Описание работы плейбука

### Плейбук скачивает, устанавливает и настраивает Clickhouse на контейнере Docker clickhouse-01 и Vector который будет уставновлен на всех хостах, в данном случае на clickhouse-01 и vector-01

#### Тэги используемые плейбуком

```clickhouse``` - установка и настройка Clickhouse

```vector``` - установка и настройка vector

#### Переменные используемые плейбуком

#### Общие

##### ```vector_version``` - доступная версия vector

```vector_config``` - файл конфигурации vector

```vector_conf_dir``` - каталог хранения конфигурации vector

##### Для Clichouse

```clickhouse_version``` - доступная версия clickhouse

```clickhouse_packages``` - пакеты clickhouse необходимые для установки

##### Для Vector

```vector_version```- доступная версия vector

```vector_config``` - файл конфигурации vector

```vector_conf_dir``` - каталог хранения конфигурации vector

10. Готовый playbook выложите в свой репозиторий, поставьте тег `08-ansible-02-playbook` на фиксирующий коммит, в ответ предоставьте ссылку на него.

---

### Как оформить решение задания

Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
