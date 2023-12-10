# Домашнее задание к занятию 9 «Процессы CI/CD»

## Подготовка к выполнению

1. Создайте два VM в Yandex Cloud с параметрами: 2CPU 4RAM Centos7 (остальное по минимальным требованиям).
2. Пропишите в [inventory](./infrastructure/inventory/cicd/hosts.yml) [playbook](./infrastructure/site.yml) созданные хосты.
3. Добавьте в [files](./infrastructure/files/) файл со своим публичным ключом (id_rsa.pub). Если ключ называется иначе — найдите таску в плейбуке, которая использует id_rsa.pub имя, и исправьте на своё.
4. Запустите playbook, ожидайте успешного завершения.
5. Проверьте готовность SonarQube через [браузер](http://localhost:9000).
6. Зайдите под admin\admin, поменяйте пароль на свой.
7. Проверьте готовность Nexus через [бразуер](http://localhost:8081).
8. Подключитесь под admin\admin123, поменяйте пароль, сохраните анонимный доступ.

## Знакомоство с SonarQube

### Основная часть

1. Создайте новый проект, название произвольное.
2. Скачайте пакет sonar-scanner, который вам предлагает скачать SonarQube.
3. Сделайте так, чтобы binary был доступен через вызов в shell (или поменяйте переменную PATH, или любой другой, удобный вам способ).
4. Проверьте `sonar-scanner --version`.
5. Запустите анализатор против кода из директории [example](./example) с дополнительным ключом `-Dsonar.coverage.exclusions=fail.py`.

```bash
sonar-scanner \
  -Dsonar.projectKey=My-sonar-project \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://130.193.53.86:9000 \
  -Dsonar.login=210e854cecd350b8f69da2d10da5441402698089 \
  -Dsonar.coverage.exclusions=fail.py
```

...

```bash
INFO: ANALYSIS SUCCESSFUL, you can browse http://130.193.53.86:9000/dashboard?id=My-sonar-project
INFO: Note that you will be able to access the updated dashboard once the server has processed the submitted analysis report
INFO: More about the report processing at http://130.193.53.86:9000/api/ce/task?id=AYxUMByKJisD8RU1d2h8
INFO: Analysis total time: 5.944 s
INFO: ------------------------------------------------------------------------
INFO: EXECUTION SUCCESS
INFO: ------------------------------------------------------------------------
INFO: Total time: 11.970s
INFO: Final Memory: 11M/56M
INFO: ------------------------------------------------------------------------
```

6. Посмотрите результат в интерфейсе.

<p align="center">
  <image src="./assets/sonar_iface1.png">
</p>

7. Исправьте ошибки, которые он выявил, включая warnings.

<p align="center">
  <image src="./assets/sonar_iface2_test_PASSED.png">
</p>

8. Запустите анализатор повторно — проверьте, что QG пройдены успешно.

```bash
INFO: ANALYSIS SUCCESSFUL, you can browse http://130.193.53.86:9000/dashboard?id=My-sonar-project
INFO: Note that you will be able to access the updated dashboard once the server has processed the submitted analysis report
INFO: More about the report processing at http://130.193.53.86:9000/api/ce/task?id=AYxUPBzaJisD8RU1d2h-
INFO: Analysis total time: 4.386 s
INFO: ------------------------------------------------------------------------
INFO: EXECUTION SUCCESS
INFO: ------------------------------------------------------------------------
INFO: Total time: 5.252s
INFO: Final Memory: 11M/68M
INFO: ------------------------------------------------------------------------
```

9. Сделайте скриншот успешного прохождения анализа, приложите к решению ДЗ.

<p align="center">
  <image src="./assets/sonar_iface3_log_success.png">
</p>

## Знакомство с Nexus

### Основная часть

1. В репозиторий `maven-public` загрузите артефакт с GAV-параметрами:

* groupId: netology;
* artifactId: java;
* version: 8_282;
* classifier: distrib;
* type: tar.gz.

Вместо java использовал артефакт из задания про SonarQube:

[Артефакт fail.py ](./example/fail.py)


<p align="center">
  <image src="./assets/nexus1_release.png">
</p>

2. В него же загрузите такой же артефакт, но с version: 8_102.
3. Проверьте, что все файлы загрузились успешно.

<p align="center">
  <image src="./assets/nexus2_add_v8102.png">
</p>

4. В ответе пришлите файл `maven-metadata.xml` для этого артефекта.

    [maven-metadata.xml](./assets/maven-metadata.xml)

### Знакомство с Maven

### Подготовка к выполнению

1. Скачайте дистрибутив с [maven](https://maven.apache.org/download.cgi).
2. Разархивируйте, сделайте так, чтобы binary был доступен через вызов в shell (или поменяйте переменную PATH, или любой другой, удобный вам способ).
3. Удалите из `apache-maven-<version>/conf/settings.xml` упоминание о правиле, отвергающем HTTP- соединение — раздел mirrors —> id: my-repository-http-unblocker.
4. Проверьте `mvn --version`.
5. Заберите директорию [mvn](./mvn) с pom.

### Основная часть

1. Поменяйте в `pom.xml` блок с зависимостями под ваш артефакт из первого пункта задания для Nexus (java с версией 8_282).
2. Запустите команду `mvn package` в директории с `pom.xml`, ожидайте успешного окончания.

<p align="center">
  <image src="./assets/maven1_pom.png">
</p>

3. Проверьте директорию `~/.m2/repository/`, найдите ваш артефакт.

```bash
~/.m2/repository/netology/python/8_282$ cat python-8_282-distrib.py
def increment(index=0):
    index += 1
    return index
def get_square(numb):
    return numb*numb
def print_numb(numb):
    print("Number is {}".format(numb))

index = 0
while (index < 10):
    index = increment(index)
    print(get_square(index))

```
4. В ответе пришлите исправленный файл `pom.xml`.

    [pom.xml](./mvn/pom.xml)

---

### Как оформить решение задания

Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
