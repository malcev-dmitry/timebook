# Timebook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

# Preview
![](https://github.com/malcev-dmitry/timebook/blob/master/src/assets/images/preview.gif)

# Задание

Создать приложение - записную книжку разработчика.
Со следующим функционалом:
1) создание заметки (заголовок, приоритет (высокий, нормальный, низкий), дата выполнения) - выполнено
2) просмотр всех заметок в виде таблицы с возможностью постраничной пагинации - выполнено
3) просмотр ранее сохраненной заметки - выполнено
4) реализовать back-end (любой стек, опционально) - выполнено

При реализации использовать:
angular6+, angular material 6+

# Настройка

Необходимо запустить браузер без политики безопасности, т.к.взаимодействие с API происходит
без https. Для Google Chrome каманда Linux: 

google-chrome --disable-web-security --user-data-dir="[some directory here]"

Api находится в отдельном репозитории: 

https://github.com/malcev-dmitry/apiRest.git

Его нужно отдельно запустить через:

npm run start

Должен быть установлен Mysql. Для удобства работы с бд стоит установить phpMyAdmin, через
него же експортировать БД:

https://github.com/malcev-dmitry/timebook/blob/master/src/assets/api.sql

Чтобы убедиться в успешной установке, вставьте в url браузера:

localhost:4201/count

Если на экране отобразился ответ подобного вида "[{"rowsCount":13}]", значит все ок.

Далее устанавливаете само приложение командой:

npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
