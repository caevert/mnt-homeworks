# Домашнее задание к занятию 7 «Жизненный цикл ПО»

## Подготовка к выполнению

1. Получить бесплатную версию Jira - https://www.atlassian.com/ru/software/jira/work-management/free (скопируйте ссылку в адресную строку).
2. Настроить её для своей команды разработки.
3. Создать доски Kanban и Scrum.
4. [Дополнительные инструкции от разработчика Jira](https://support.atlassian.com/jira-cloud-administration/docs/import-and-export-issue-workflows/).

## Основная часть

Необходимо создать собственные workflow для двух типов задач: bug и остальные типы задач. Задачи типа bug должны проходить жизненный цикл:

1. Open -> On reproduce.
2. On reproduce -> Open, Done reproduce.
3. Done reproduce -> On fix.
4. On fix -> On reproduce, Done fix.
5. Done fix -> On test.
6. On test -> On fix, Done.
7. Done -> Closed, Open.

Остальные задачи должны проходить по упрощённому workflow:

1. Open -> On develop.
2. On develop -> Open, Done develop.
3. Done develop -> On test.
4. On test -> On develop, Done.
5. Done -> Closed, Open.

**Что нужно сделать**

1. Создайте задачу с типом bug, попытайтесь провести его по всему workflow до Done. 
1. Создайте задачу с типом epic, к ней привяжите несколько задач с типом task, проведите их по всему workflow до Done. 
1. При проведении обеих задач по статусам используйте kanban. 
1. Верните задачи в статус Open.
1. Перейдите в Scrum, запланируйте новый спринт, состоящий из задач эпика и одного бага, стартуйте спринт, проведите задачи до состояния Closed. Закройте спринт.
2. Если всё отработалось в рамках ожидания — выгрузите схемы workflow для импорта в XML. Файлы с workflow и скриншоты workflow приложите к решению задания.



---

### Как оформить решение задания

![9](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/c51405a0-ce45-4361-afb7-6d1940978a07)

![8](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/a44f90fb-4e32-4d72-8e03-2608ff140a23)

![7](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/b16cae8a-4b1e-430a-8e2a-5dfac759bb0d)

![6](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/43c8faf7-1ec3-4755-b8ba-f33f5fec3b0d)

![5](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/771f4839-003c-4034-bad4-e6b6ad54fa40)

![4](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/33fc57b0-7c66-4ccb-8870-be65a9b51245)

![3](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/7c87004a-de9d-4c4e-8ef5-8f9eedfbd6a1)

![2](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/47238551-bebb-433b-ad53-807dcdadf04c)

![10](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/598138b9-5f5f-4af8-b84b-84907ff1882b)

для багов:

https://github.com/AlexanderM33/mnt-homeworks-m/blob/MNT-video/09-ci-01-intro/HW_WORKFLOW%20(1).xml


______________________________
для остальных задач:

https://github.com/AlexanderM33/mnt-homeworks-m/blob/MNT-video/09-ci-01-intro/REGULAR_WORKFLOW%20(2).xml

