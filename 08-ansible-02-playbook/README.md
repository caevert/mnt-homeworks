# Домашнее задание к занятию 2 «Работа с Playbook»

## Подготовка к выполнению

1. * Необязательно. Изучите, что такое [ClickHouse](https://www.youtube.com/watch?v=fjTNS2zkeBs) и [Vector](https://www.youtube.com/watch?v=CgEhyffisLY).
2. Создайте свой публичный репозиторий на GitHub с произвольным именем или используйте старый.
3. Скачайте [Playbook](./playbook/) из репозитория с домашним заданием и перенесите его в свой репозиторий.
4. Подготовьте хосты в соответствии с группами из предподготовленного playbook.

## Основная часть

1. Подготовьте свой inventory-файл `prod.yml`.
2. Допишите playbook: нужно сделать ещё один play, который устанавливает и настраивает [vector](https://vector.dev). Конфигурация vector должна деплоиться через template файл jinja2. От вас не требуется использовать все возможности шаблонизатора, просто вставьте стандартный конфиг в template файл. Информация по шаблонам по [ссылке](https://www.dmosk.ru/instruktions.php?object=ansible-nginx-install).


```
- name: Install Vector
  hosts: vector
  handlers:
    - name: Start VECTOR
      become: true
      ansible.builtin.service:
        name: vector
        state: restarted
  tasks:
    - name: Get VECTOR
      ansible.builtin.get_url:
        url: https://packages.timber.io/vector/{{ vector_version }}/vector-{{ vector_version }}-1.x86_64.rpm
        dest: ./vector-{{ vector_version }}-1.x86_64.rpm
        mode: "0644"
    - name: Install VECTOR
      become: true
      ansible.builtin.yum:
        disable_gpg_check: true
        name: vector-{{ vector_version }}-1.x86_64.rpm
      notify: Start VECTOR

    - name: Configure Vector | ensure what directory exists
      ansible.builtin.file:
        path: "{{ vector_config_dir }}"
        state: directory
        mode: "0644"
    - name: Configure Vector | Template config
      ansible.builtin.template:
        src: "templates/vector.yml.j2"
        dest: "{{ vector_config_dir }}/vector.yml"
        mode: "0644"
```


3. При создании tasks рекомендую использовать модули: `get_url`, `template`, `unarchive`, `file`.
4. Tasks должны: скачать дистрибутив нужной версии, выполнить распаковку в выбранную директорию, установить vector.

```
alex@fedora:~/mnt-homeworks-m/08-ansible-02-playbook/playbook$ vector --version
vector 0.34.1 (x86_64-unknown-linux-gnu 86f1c22 2023-11-16 14:59:10.486846964)
```

5. Запустите `ansible-lint site.yml` и исправьте ошибки, если они есть.

![VirtualBox_FEDORA_20_11_2023_23_52_30](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/c0e600b4-7516-43fa-bd27-08df81d7ca28)

![VirtualBox_FEDORA_21_11_2023_18_32_53](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/3a29053e-6a56-44be-badc-c69da1fa8f29)

6. Попробуйте запустить playbook на этом окружении с флагом `--check`.
7. Запустите playbook на `prod.yml` окружении с флагом `--diff`. Убедитесь, что изменения на системе произведены.
8. Повторно запустите playbook с флагом `--diff` и убедитесь, что playbook идемпотентен.

```
###FINAL PLAYBOOK
```
https://github.com/AlexanderM33/mnt-homeworks-m/tree/MNT-video/08-ansible-02-playbook/playbook

