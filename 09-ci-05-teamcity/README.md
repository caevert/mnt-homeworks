# Домашнее задание к занятию 11 «Teamcity»

## Подготовка к выполнению

1. В Yandex Cloud создайте новый инстанс (4CPU4RAM) на основе образа `jetbrains/teamcity-server`.
2. Дождитесь запуска teamcity, выполните первоначальную настройку.
3. Создайте ещё один инстанс (2CPU4RAM) на основе образа `jetbrains/teamcity-agent`. Пропишите к нему переменную окружения `SERVER_URL: "http://<teamcity_url>:8111"`.
4. Авторизуйте агент.
5. Сделайте fork [репозитория](https://github.com/aragastmatb/example-teamcity).
6. Создайте VM (2CPU4RAM) и запустите [playbook](./infrastructure).

## Основная часть

1. Создайте новый проект в teamcity на основе fork.
2. Сделайте autodetect конфигурации.

<p align="center">
  <image src="./assests/teamcity_project_1.png"
</p>

3. Сохраните необходимые шаги, запустите первую сборку master.

<p align="center">
  <image src="./assests/teamcity_project_build1.png"
</p>


4. Поменяйте условия сборки: если сборка по ветке `master`, то должен происходит `mvn clean deploy`, иначе `mvn clean test`.
5. Для deploy будет необходимо загрузить [settings.xml](./teamcity/settings.xml) в набор конфигураций maven у teamcity, предварительно записав туда креды для подключения к nexus.
6. В pom.xml необходимо поменять ссылки на репозиторий и nexus.
7. Запустите сборку по master, убедитесь, что всё прошло успешно и артефакт появился в nexus.

<p align="center">
  <image src="./assests/teamcity_project_build7.png"
</p>

8. Мигрируйте `build configuration` в репозиторий.

<p align="center">
  <image src="./assests/teamcity_project_build8.png"
</p>

9. Создайте отдельную ветку `feature/add_reply` в репозитории.

    [Ветка feature/add_reply](https://github.com/Muroway/example-teamcity/tree/feature/add_reply)

10. Напишите новый метод для класса Welcomer: метод должен возвращать произвольную реплику, содержащую слово `hunter`.

    [Welcomer.java](https://github.com/Muroway/example-teamcity/blob/feature/add_reply/src/main/java/plaindoll/Welcomer.java)

11. Дополните тест для нового метода на поиск слова `hunter` в новой реплике.

    [WelcomerTest.java](https://github.com/Muroway/example-teamcity/blob/feature/add_reply/src/test/java/plaindoll/WelcomerTest.java)

12. Сделайте push всех изменений в новую ветку репозитория.

13. Убедитесь, что сборка самостоятельно запустилась, тесты прошли успешно.

<p align="center">
  <image src="./assests/teamcity_project_build13.png"
</p>

14. Внесите изменения из произвольной ветки `feature/add_reply` в `master` через `Merge`.



15. Убедитесь, что нет собранного артефакта в сборке по ветке `master`.
16. Настройте конфигурацию так, чтобы она собирала `.jar` в артефакты сборки.

<p align="center">
  <image src="./assests/teamcity_project_build16_2.png"
</p>

<p align="center">
  <image src="./assests/teamcity_project_build16_3.png"
</p>

17. Проведите повторную сборку мастера, убедитесь, что сбора прошла успешно и артефакты собраны.

<p align="center">
  <image src="./assests/teamcity_project_build17.png"
</p>

18. Проверьте, что конфигурация в репозитории содержит все настройки конфигурации из teamcity.

    [Конфигурация teamcity](https://github.com/Muroway/example-teamcity/tree/master/.teamcity/ForkForExampleTeamcity)

19. В ответе пришлите ссылку на репозиторий.

---

### Как оформить решение задания

Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
