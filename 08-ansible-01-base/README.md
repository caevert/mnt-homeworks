# Домашнее задание к занятию 1 «Введение в Ansible»

## Подготовка к выполнению

1. Установите Ansible версии 2.10 или выше.
![0](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/1307bfd5-518b-4c93-9461-93a83ce5b32f)
2. Создайте свой публичный репозиторий на GitHub с произвольным именем.
3. Скачайте [Playbook](./playbook/) из репозитория с домашним заданием и перенесите его в свой репозиторий.

## Основная часть

1. Попробуйте запустить playbook на окружении из `test.yml`, зафиксируйте значение, которое имеет факт `some_fact` для указанного хоста при выполнении playbook.

![1](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/92091bec-ba55-4d9b-a7d3-ce190646ed3d)


2. Найдите файл с переменными (group_vars), в котором задаётся найденное в первом пункте значение, и поменяйте его на `all default fact`.

![2-1](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/d59bdb61-640a-404e-bb1f-15278f819ab3)


3. Воспользуйтесь подготовленным (используется `docker`) или создайте собственное окружение для проведения дальнейших испытаний.

![3](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/d3fc29f2-afcd-4fd9-80ce-1826c7067964)


4. Проведите запуск playbook на окружении из `prod.yml`. Зафиксируйте полученные значения `some_fact` для каждого из `managed host`.

![4](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/3fb780a4-7353-4be2-b432-d826a99a8d70)


5. Добавьте факты в `group_vars` каждой из групп хостов так, чтобы для `some_fact` получились значения: для `deb` — `deb default fact`, для `el` — `el default fact`.
6.  Повторите запуск playbook на окружении `prod.yml`. Убедитесь, что выдаются корректные значения для всех хостов.

![5](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/0cd38940-ce18-41f9-a697-281b0fddc6d3)


7. При помощи `ansible-vault` зашифруйте факты в `group_vars/deb` и `group_vars/el` с паролем `netology`.

![7](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/0b2979d3-13ff-4695-aaa1-35cbbc781751)

![6-2](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/37a95169-9432-4814-bfd3-e5746f144a79)
![6-1](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/9f56ce5d-c6b0-4f38-96f5-66f7428b92be)


8. Запустите playbook на окружении `prod.yml`. При запуске `ansible` должен запросить у вас пароль. Убедитесь в работоспособности.

![8](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/9b9ff347-94e7-4ecc-98c0-0c1e9e4f2b2a)


9. Посмотрите при помощи `ansible-doc` список плагинов для подключения. Выберите подходящий для работы на `control node`.

![9](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/8db9a1c3-14c7-4774-983e-5ea94c902fb1)


10. В `prod.yml` добавьте новую группу хостов с именем  `local`, в ней разместите localhost с необходимым типом подключения.

```
local:
  hosts:
    localhost:
      ansible_connection: local
```



11. Запустите playbook на окружении `prod.yml`. При запуске `ansible` должен запросить у вас пароль. Убедитесь, что факты `some_fact` для каждого из хостов определены из верных `group_vars`.

![10](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/c96121ed-838e-46f9-945a-be899500fdc0)


12. Заполните `README.md` ответами на вопросы. Сделайте `git push` в ветку `master`. В ответе отправьте ссылку на ваш открытый репозиторий с изменённым `playbook` и заполненным `README.md`.

https://github.com/AlexanderM33/mnt-homeworks-m/tree/MNT-video/08-ansible-01-base/playbook

13. Предоставьте скриншоты результатов запуска команд.

## Необязательная часть

1. При помощи `ansible-vault` расшифруйте все зашифрованные файлы с переменными.
2. Зашифруйте отдельное значение `PaSSw0rd` для переменной `some_fact` паролем `netology`. Добавьте полученное значение в `group_vars/all/exmp.yml`.
3. Запустите `playbook`, убедитесь, что для нужных хостов применился новый `fact`.
4. Добавьте новую группу хостов `fedora`, самостоятельно придумайте для неё переменную. В качестве образа можно использовать [этот вариант](https://hub.docker.com/r/pycontribs/fedora).
5. Напишите скрипт на bash: автоматизируйте поднятие необходимых контейнеров, запуск ansible-playbook и остановку контейнеров.
6. Все изменения должны быть зафиксированы и отправлены в ваш личный репозиторий.

---

### Как оформить решение задания

Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
