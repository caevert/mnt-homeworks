# Домашнее задание к занятию 9 «Процессы CI/CD»

## Подготовка к выполнению

1. Создайте два VM в Yandex Cloud с параметрами: 2CPU 4RAM Centos7 (остальное по минимальным требованиям).
2. Пропишите в [inventory](./infrastructure/inventory/cicd/hosts.yml) [playbook](./infrastructure/site.yml) созданные хосты.
3. Добавьте в [files](./infrastructure/files/) файл со своим публичным ключом (id_rsa.pub). Если ключ называется иначе — найдите таску в плейбуке, которая использует id_rsa.pub имя, и исправьте на своё.
4. Запустите playbook, ожидайте успешного завершения.
5. Проверьте готовность SonarQube через [браузер](http://localhost:9000).
6. Зайдите под admin\admin, поменяйте пароль на свой.
7.  Проверьте готовность Nexus через [бразуер](http://localhost:8081).
8. Подключитесь под admin\admin123, поменяйте пароль, сохраните анонимный доступ.

## Знакомоство с SonarQube

### Основная часть

1. Создайте новый проект, название произвольное.
2. Скачайте пакет sonar-scanner, который вам предлагает скачать SonarQube.
3. Сделайте так, чтобы binary был доступен через вызов в shell (или поменяйте переменную PATH, или любой другой, удобный вам способ).
4. Проверьте `sonar-scanner --version`.
5. Запустите анализатор против кода из директории [example](./example) с дополнительным ключом `-Dsonar.coverage.exclusions=fail.py`.
6. Посмотрите результат в интерфейсе.
7. Исправьте ошибки, которые он выявил, включая warnings.
8. Запустите анализатор повторно — проверьте, что QG пройдены успешно.
9. Сделайте скриншот успешного прохождения анализа, приложите к решению ДЗ.

## Решение


![VirtualBox_FEDORA_05_12_2023_22_55_24](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/570622f5-cb7c-438a-88d6-46db90f7a17f)

![VirtualBox_FEDORA_05_12_2023_22_47_53](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/51c45459-6629-48a6-b958-98c321422981)

![VirtualBox_FEDORA_05_12_2023_22_49_31](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/79f0c61a-f960-4369-943d-7f4ca806e823)


## Знакомство с Nexus

### Основная часть

1. В репозиторий `maven-public` загрузите артефакт с GAV-параметрами:

 *    groupId: netology;
 *    artifactId: java;
 *    version: 8_282;
 *    classifier: distrib;
 *    type: tar.gz.
   
2. В него же загрузите такой же артефакт, но с version: 8_102.
3. Проверьте, что все файлы загрузились успешно.
4. В ответе пришлите файл `maven-metadata.xml` для этого артефекта.

https://github.com/AlexanderM33/mnt-homeworks-m/blob/MNT-video/09-ci-03-cicd/maven-metadata.xml

![VirtualBox_FEDORA_05_12_2023_23_19_21](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/9d60e956-697d-4339-ba85-a2135ebf1686)

![VirtualBox_FEDORA_05_12_2023_23_19_07](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/ba72e7c4-baa4-4bf0-9859-26a0718bb6ed)

![VirtualBox_FEDORA_05_12_2023_23_17_36](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/c3c324ea-380a-41f9-bd3c-54fba7f186f8)




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
3. Проверьте директорию `~/.m2/repository/`, найдите ваш артефакт.

https://github.com/AlexanderM33/mnt-homeworks-m/tree/MNT-video/09-ci-03-cicd/repository

4. В ответе пришлите исправленный файл `pom.xml`.

https://github.com/AlexanderM33/mnt-homeworks-m/blob/MNT-video/09-ci-03-cicd/mvn/pom.xml

![VirtualBox_FEDORA_05_12_2023_23_39_38](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/f41864a4-56a1-497c-b7ef-5bf84ad33c9e)





---

### Как оформить решение задания

Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
