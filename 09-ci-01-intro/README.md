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

![2](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/41e55c67-fa1c-428a-8d39-471f95d9aa01)

![1](https://github.com/AlexanderM33/mnt-homeworks-m/assets/122460278/b7673770-9664-4b72-b84c-e7d00e3a9489)

[Uploadin

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE workflow PUBLIC "-//OpenSymphony Group//DTD OSWorkflow 2.8//EN" "http://www.opensymphony.com/osworkflow/workflow_2_8.dtd">
<workflow>
  <meta name="jira.description"></meta>
  <meta name="jira.update.author.id">712020:a572fa9e-e2c3-4b19-b045-05a7f6bf62bf</meta>
  <meta name="jira.update.author.key">712020:a572fa9e-e2c3-4b19-b045-05a7f6bf62bf</meta>
  <meta name="jira.updated.date">1701104024035</meta>
  <initial-actions>
    <action id="1" name="Create">
      <validators>
        <validator name="" type="class">
          <arg name="class.name">com.atlassian.jira.workflow.validator.PermissionValidator</arg>
          <arg name="permission">Create Issue</arg>
        </validator>
      </validators>
      <results>
        <unconditional-result old-status="null" status="open" step="1">
          <post-functions>
            <function type="class">
              <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueCreateFunction</arg>
            </function>
            <function type="class">
              <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
            </function>
            <function type="class">
              <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
              <arg name="eventTypeId">1</arg>
            </function>
          </post-functions>
        </unconditional-result>
      </results>
    </action>
  </initial-actions>
  <steps>
    <step id="1" name="Open">
      <meta name="jira.status.id">1</meta>
      <actions>
        <action id="11" name="Open -&gt; On reproduce">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="2">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="2" name="on reproduce">
      <meta name="jira.status.id">10006</meta>
      <actions>
        <action id="21" name="reproduce--done">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="3">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
        <action id="41" name="reproduce-open">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="1">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="3" name="Done reproduce">
      <meta name="jira.status.id">10007</meta>
      <actions>
        <action id="51" name="done reproduce-fix">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="4">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="4" name="On fix">
      <meta name="jira.status.id">10008</meta>
      <actions>
        <action id="61" name="on fix - on reproduce">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="2">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
        <action id="71" name="on fix - done-fix">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="5">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="5" name="Done fix">
      <meta name="jira.status.id">10009</meta>
      <actions>
        <action id="81" name="done fix- on test">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="6">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="6" name="On test">
      <meta name="jira.status.id">10010</meta>
      <actions>
        <action id="91" name="on test - on fix">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="4">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
        <action id="101" name="on test - done">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="7">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="7" name="Done">
      <meta name="jira.status.id">10005</meta>
      <actions>
        <action id="111" name="done-closed">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="8">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
        <action id="121" name="done - open">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="1">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="8" name="Closed">
      <meta name="jira.status.id">6</meta>
    </step>
  </steps>
</workflow>

g HW_WORKFLOW.xml…]()


[Uploading RE

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE workflow PUBLIC "-//OpenSymphony Group//DTD OSWorkflow 2.8//EN" "http://www.opensymphony.com/osworkflow/workflow_2_8.dtd">
<workflow>
  <meta name="jira.description"></meta>
  <meta name="jira.update.author.id">712020:a572fa9e-e2c3-4b19-b045-05a7f6bf62bf</meta>
  <meta name="jira.update.author.key">712020:a572fa9e-e2c3-4b19-b045-05a7f6bf62bf</meta>
  <meta name="jira.updated.date">1701118037769</meta>
  <initial-actions>
    <action id="1" name="Create">
      <validators>
        <validator name="" type="class">
          <arg name="class.name">com.atlassian.jira.workflow.validator.PermissionValidator</arg>
          <arg name="permission">Create Issue</arg>
        </validator>
      </validators>
      <results>
        <unconditional-result old-status="null" status="open" step="1">
          <post-functions>
            <function type="class">
              <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueCreateFunction</arg>
            </function>
            <function type="class">
              <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
            </function>
            <function type="class">
              <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
              <arg name="eventTypeId">1</arg>
            </function>
          </post-functions>
        </unconditional-result>
      </results>
    </action>
  </initial-actions>
  <steps>
    <step id="1" name="Open">
      <meta name="jira.status.id">1</meta>
      <actions>
        <action id="11" name="open-on develop">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="2">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="2" name="On develop">
      <meta name="jira.status.id">10011</meta>
      <actions>
        <action id="21" name="in develop - done develop">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="3">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
        <action id="31" name="on develop - open">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="1">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="3" name="Done develop">
      <meta name="jira.status.id">10012</meta>
      <actions>
        <action id="41" name="done develop - on test">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="4">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="4" name="On test">
      <meta name="jira.status.id">10010</meta>
      <actions>
        <action id="51" name="on test  -on develop">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="2">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
        <action id="61" name="on test  -done">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="5">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="5" name="Done">
      <meta name="jira.status.id">10005</meta>
      <actions>
        <action id="71" name="done - closed">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="6">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
    <step id="6" name="Closed">
      <meta name="jira.status.id">6</meta>
      <actions>
        <action id="81" name="closed - open">
          <meta name="jira.description"></meta>
          <meta name="jira.fieldscreen.id"></meta>
          <results>
            <unconditional-result old-status="null" status="null" step="1">
              <post-functions>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.UpdateIssueStatusFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.misc.CreateCommentFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.GenerateChangeHistoryFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.issue.IssueReindexFunction</arg>
                </function>
                <function type="class">
                  <arg name="class.name">com.atlassian.jira.workflow.function.event.FireIssueEventFunction</arg>
                  <arg name="eventTypeId">13</arg>
                </function>
              </post-functions>
            </unconditional-result>
          </results>
        </action>
      </actions>
    </step>
  </steps>
</workflow>

GULAR_WORKFLOW.xml…]()


Выполненное домашнее задание пришлите в виде ссылки на .md-файл в вашем репозитории.

---
