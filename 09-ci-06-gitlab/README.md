# Домашнее задание к занятию 12 «GitLab»

## Подготовка к выполнению

1. Или подготовьте к работе Managed GitLab от yandex cloud [по инструкции](https://cloud.yandex.ru/docs/managed-gitlab/operations/instance/instance-create) .
Или создайте виртуальную машину из публичного образа [по инструкции](https://cloud.yandex.ru/marketplace/products/yc/gitlab ) .
2. Создайте виртуальную машину и установите на нее gitlab runner, подключите к вашему серверу gitlab  [по инструкции](https://docs.gitlab.com/runner/install/linux-repository.html) .

Регистрация раннера:

```bash
sudo gitlab-runner register
Runtime platform                                    arch=amd64 os=linux pid=2620 revision=f5da3c5a version=16.6.1
Running in system-mode.

Enter the GitLab instance URL (for example, https://gitlab.com/):
https://muroway-instance.gitlab.yandexcloud.net/
Enter the registration token:
*************************
Enter a description for the runner:
[gitlab-runner]: ubuntu-gitlab-runner
Enter tags for the runner (comma-separated):
ubuntu, gitlab, linux
Enter optional maintenance note for the runner:

WARNING: Support for registration tokens and runner parameters in the 'register' command has been deprecated in GitLab Runner 15.6 and will be replaced with support for authentication tokens. For more information, see https://docs.gitlab.com/ee/ci/runners/new_creation_workflow
Registering runner... succeeded                     runner=ESfZBevE
Enter an executor: docker-autoscaler, docker+machine, kubernetes, docker-windows, shell, ssh, virtualbox, instance, custom, docker, parallels:
shell
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!

Configuration (with the authentication token) was saved in "/etc/gitlab-runner/config.toml"
```

3. (* Необязательное задание повышенной сложности. )  Если вы уже знакомы с k8s попробуйте выполнить задание, запустив gitlab server и gitlab runner в k8s  [по инструкции](https://cloud.yandex.ru/docs/tutorials/infrastructure-management/gitlab-containers).

4. Создайте свой новый проект.
5. Создайте новый репозиторий в GitLab, наполните его [файлами](./repository).
6. Проект должен быть публичным, остальные настройки по желанию.

## Основная часть

### DevOps

В репозитории содержится код проекта на Python. Проект — RESTful API сервис. Ваша задача — автоматизировать сборку образа с выполнением python-скрипта:

1. Образ собирается на основе [centos:7](https://hub.docker.com/_/centos?tab=tags&page=1&ordering=last_updated).
2. Python версии не ниже 3.7.
3. Установлены зависимости: `flask` `flask-jsonpify` `flask-restful`.
4. Создана директория `/python_api`.
5. Скрипт из репозитория размещён в /python_api.
6. Точка вызова: запуск скрипта.
7. При комите в любую ветку должен собираться docker image с форматом имени hello:gitlab-$CI_COMMIT_SHORT_SHA . Образ должен быть выложен в Gitlab registry или yandex registry.

<p align="center">
  <image src="./assets/gitlab_image_1.png"
</p>

[Образ в Yandex Container Registry](https://console.cloud.yandex.ru/folders/b1gtj97ibqlu8jsd94g4/container-registry/registries/crp82kjfktp04r8sq6hq/overview/hello/image)

---
***NOTE***

Релиз в Yandex Container Registry:
```bash
sudo docker login --username oauth --password-stdin cr.yandex
docker tag dd4af15a354b cr.yandex/crp82kjfktp04r8sq6hq/hello:gitlab-69e41473
docker push cr.yandex/crp82kjfktp04r8sq6hq/hello:gitlab-69e41473 
```
---


### Product Owner

Вашему проекту нужна бизнесовая доработка: нужно поменять JSON ответа на вызов метода GET `/rest/api/get_info`, необходимо создать Issue в котором указать:

1. Какой метод необходимо исправить.
2. Текст с `{ "message": "Already started" }` на `{ "message": "Running"}`.
3. Issue поставить label: feature.

<p align="center">
  <image src="./assets/gitlab_p_owner_1.png"
</p>

### Developer

Пришёл новый Issue на доработку, вам нужно:

1. Создать отдельную ветку, связанную с этим Issue.
2. Внести изменения по тексту из задания.
3. Подготовить Merge Request, влить необходимые изменения в `master`, проверить, что сборка прошла успешно.

<p align="center">
  <image src="./assets/gitlab_proger_2.png"
</p>

### Tester

Разработчики выполнили новый Issue, необходимо проверить валидность изменений:

1. Поднять докер-контейнер с образом `python-api:latest` и проверить возврат метода на корректность.



<p align="center">
  <image src="./assets/gitlab_testing_1.png"
</p>



2. Закрыть Issue с комментарием об успешности прохождения, указав желаемый результат и фактически достигнутый.

## Итог

В качестве ответа пришлите подробные скриншоты по каждому пункту задания:

- файл gitlab-ci.yml;

<p align="center">
  <image src="./assets/gitlab_ci_yml_1.png"
</p>

- Dockerfile;

<p align="center">
  <image src="./assets/gitlab_Dockerfile.png"
</p>

- лог успешного выполнения пайплайна;


<p align="center">
  <image src="./assets/gitlab_build_log.png"
</p>

<p align="center">
  <image src="./assets/gitlab_deploy_log.png"
</p>


- решённый Issue.

<p align="center">
  <image src="./assets/gitlab_testing_2.png"
</p>

### Важно

После выполнения задания выключите и удалите все задействованные ресурсы в Yandex Cloud.
