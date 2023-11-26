# Домашнее задание к занятию 4 «Работа с roles»

## Подготовка к выполнению

1. * Необязательно. Познакомьтесь с [LightHouse](https://youtu.be/ymlrNlaHzIY?t=929).
2. Создайте два пустых публичных репозитория в любом своём проекте: vector-role и lighthouse-role.
3. Добавьте публичную часть своего ключа к своему профилю на GitHub.

## Основная часть

Ваша цель — разбить ваш playbook на отдельные roles. 

Задача — сделать roles для ClickHouse, Vector и LightHouse и написать playbook для использования этих ролей. 

Ожидаемый результат — существуют три ваших репозитория: два с roles и один с playbook.

**Что нужно сделать**

1. Создайте в старой версии playbook файл `requirements.yml` и заполните его содержимым:

   ```yaml
   ---
     - src: git@github.com:AlexeySetevoi/ansible-clickhouse.git
       scm: git
       version: "1.13"
       name: clickhouse 
   ```

2. При помощи `ansible-galaxy` скачайте себе эту роль.

```
ansible-galaxy install -r requirements.yml
Starting galaxy role install process
- extracting clickhouse to ~/.ansible/roles/clickhouse
- clickhouse (1.13) was installed successfully
```

3. Создайте новый каталог с ролью при помощи `ansible-galaxy role init vector-role`.

```
ansible-galaxy role init vector-role           
- Role vector-role was created successfully
```

4. На основе tasks из старого playbook заполните новую role. Разнесите переменные между `vars` и `default`. 
5. Перенести нужные шаблоны конфигов в `templates`.
6. Опишите в `README.md` обе роли и их параметры. Пример качественной документации ansible role [по ссылке](https://github.com/cloudalchemy/ansible-prometheus).


    [Открыть репозиторий vector-role](https://github.com/Muroway/vector-role.git)

7. Повторите шаги 3–6 для LightHouse. Помните, что одна роль должна настраивать один продукт.

[Открыть репозиторий lighthouse-role](https://github.com/Muroway/lighthouse-role.git)

8. Выложите все roles в репозитории. Проставьте теги, используя семантическую нумерацию. Добавьте roles в `requirements.yml` в playbook.

```yaml
---
- src: https://github.com/AlexeySetevoi/ansible-clickhouse.git
  scm: git
  version: "1.13"
  name: clickhouse
- src: https://github.com/Muroway/vector-role.git
  scm: git
  name: vector
- src: https://github.com/Muroway/lighthouse-role.git
  scm: git
  name: lighthouse

```

9. Переработайте playbook на использование roles. Не забудьте про зависимости LightHouse и возможности совмещения `roles` с `tasks`.

``` yaml
---
  - name: CLICKHOUSE | Install Clickhouse
    hosts: clickhouse
    roles:
      - clickhouse
  - name: LIGHTHOUSE | Install Lighthouse
    host: lighthouse
    roles:
      - lighthouse
  - name: VECTOR | Install Vector
    host: Vector
    roles:
      - vector

```


10. Выложите playbook в репозиторий.
11. В ответе дайте ссылки на оба репозитория с roles и одну ссылку на репозиторий с playbook.

---

### Как оформить решение задания

Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
