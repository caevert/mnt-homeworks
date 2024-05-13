# Домашнее задание к занятию 10 «Jenkins»

## Подготовка к выполнению

1. Создать два VM: для jenkins-master и jenkins-agent.
2. Установить Jenkins при помощи playbook.
3. Запустить и проверить работоспособность.
4. Сделать первоначальную настройку.

## Основная часть

1. Сделать Freestyle Job, который будет запускать `molecule test` из любого вашего репозитория с ролью.
<p align="center">
  <image src="./assets/Freestyle_molecule1.png"
</p>

<p align="center">
  <image src="./assets/Freestyle_molecule2.png"
</p>

<p align="center">
  <image src="./assets/Freestyle_molecule3.png"
</p>


2. Сделать Declarative Pipeline Job, который будет запускать `molecule test` из любого вашего репозитория с ролью.

<p align="center">
  <image src="./assets/Declarative_pipe1.png"
</p>

<p align="center">
  <image src="./assets/Declarative_pipe2.png"
</p>

3. Перенести Declarative Pipeline в репозиторий в файл `Jenkinsfile`.



    [Jenkinsfile]([<p align="center">
  <image src="./assetsJenkinsfile.txt"
</p>

<p align="center">
  <image src="./assets/Declarative_pipe2.png"
</p>](https://github.com/caevert/mnt-homeworks/blob/master/09-ci-04-jenkins/assets/Jenkinsfile.txt)



<p align="center">
  <image src="./assets/Declarative_pipe3.png"
</p>

4. Создать Multibranch Pipeline на запуск `Jenkinsfile` из репозитория.

<p align="center">
  <image src="./assets/Multi_pipe1.png"
</p>


5. Создать Scripted Pipeline, наполнить его скриптом из [pipeline](./pipeline).

    [Scripted Pipeline](./pipeline/ScriptedJenkinsfile)


<p align="center">
  <image src="./assets/Scripted_pipe1.png"
</p>

6. Внести необходимые изменения, чтобы Pipeline запускал `ansible-playbook` без флагов `--check --diff`, если не установлен параметр при запуске джобы (prod_run = True). По умолчанию параметр имеет значение False и запускает прогон с флагами `--check --diff`.

<p align="center">
  <image src="./assets/Scripted_pipe2.png"
</p>


<p align="center">
  <image src="./assets/Scripted_pipe3.png"
</p>

<p align="center">
  <image src="./assets/Scripted_pipe4.png"
</p>

7. Проверить работоспособность, исправить ошибки, исправленный Pipeline вложить в репозиторий в файл `ScriptedJenkinsfile`.

    [Измененный Scripted Pipeline](./pipeline/ScriptedJenkinsfile)

    Для исправления ошибки с неработающим become:

```
TASK [java : Ensure installation dir exists] ***********************************
fatal: [localhost]: FAILED! => {"changed": false, "msg": "There was an issue creating /opt/jdk as requested: [Errno 13] Permission denied: b'/opt/jdk'", "path": "/opt/jdk/openjdk-11"}
```

  Пришлось вручную добавить пользователя jenkins в sudoers: 

```
sudo visudo

jenkins ALL=(ALL) NOPASSWD: ALL
```

8. Отправить ссылку на репозиторий с ролью и Declarative Pipeline и Scripted Pipeline.

    [Declarative Pipeline для Vector-role](https://github.com/Muroway/vector-role/blob/master/Jenkinsfile)

    [Измененный Scripted Pipeline](./pipeline/ScriptedJenkinsfile)

9. Сопроводите процесс настройки скриншотами для каждого пункта задания!!

## Необязательная часть

1. Создать скрипт на groovy, который будет собирать все Job, завершившиеся хотя бы раз неуспешно. Добавить скрипт в репозиторий с решением и названием `AllJobFailure.groovy`.
2. Создать Scripted Pipeline так, чтобы он мог сначала запустить через Yandex Cloud CLI необходимое количество инстансов, прописать их в инвентори плейбука и после этого запускать плейбук. Мы должны при нажатии кнопки получить готовую к использованию систему.

---

### Как оформить решение задания

Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
