# Домашнее задание к занятию 11 «Teamcity»



1. Создайте новый проект в teamcity на основе fork.
2. Сделайте autodetect конфигурации.
3. Сохраните необходимые шаги, запустите первую сборку master.
4. Поменяйте условия сборки: если сборка по ветке `master`, то должен происходит `mvn clean deploy`, иначе `mvn clean test`.

![3](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/2b552356-e48a-4415-bdde-5d39431c7dca)

5. Для deploy будет необходимо загрузить [settings.xml](./teamcity/settings.xml) в набор конфигураций maven у teamcity, предварительно записав туда креды для подключения к nexus.
6. В pom.xml необходимо поменять ссылки на репозиторий и nexus.
7. Запустите сборку по master, убедитесь, что всё прошло успешно и артефакт появился в nexus.
8. Мигрируйте `build configuration` в репозиторий.
9. Создайте отдельную ветку `feature/add_reply` в репозитории.

https://github.com/AlexanderM33/example-teamcity2/tree/feature/add_reply

10. Напишите новый метод для класса Welcomer: метод должен возвращать произвольную реплику, содержащую слово `hunter`.

https://github.com/AlexanderM33/example-teamcity2/blob/feature/add_reply/src/main/java/plaindoll/Welcomer.java

11. Дополните тест для нового метода на поиск слова `hunter` в новой реплике.

https://github.com/AlexanderM33/example-teamcity2/blob/feature/add_reply/src/test/java/plaindoll/WelcomerTest.java

12. Сделайте push всех изменений в новую ветку репозитория.
13. Убедитесь, что сборка самостоятельно запустилась, тесты прошли успешно.

![4](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/95ce9357-65b0-4298-8ca3-683a30b13128)


14. Внесите изменения из произвольной ветки `feature/add_reply` в `master` через `Merge`.
15. Убедитесь, что нет собранного артефакта в сборке по ветке `master`.
16. Настройте конфигурацию так, чтобы она собирала `.jar` в артефакты сборки.
17. Проведите повторную сборку мастера, убедитесь, что сбора прошла успешно и артефакты собраны.
18. Проверьте, что конфигурация в репозитории содержит все настройки конфигурации из teamcity.
19. В ответе пришлите ссылку на репозиторий.

https://github.com/AlexanderM33/example-teamcity2


![10](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/c2b29c0c-cdbc-4bb1-848a-17fec7fa43f4)

![9](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/9c5e9cdd-fd44-454f-96af-861a671f62f1)

![8](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/400cfbb5-62a1-4a4f-90b1-53060c54067f)

![7](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/4eace13c-c405-4698-81e8-e8a13b4dd64b)

![6](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/49426f3b-1092-4d09-8364-22eba74d67ef)


---

### Как оформить решение задания

Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
