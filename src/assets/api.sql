-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Янв 23 2019 г., 12:25
-- Версия сервера: 5.7.24-0ubuntu0.16.04.1
-- Версия PHP: 7.0.33-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `api`
--

-- --------------------------------------------------------

--
-- Структура таблицы `bookmarks`
--

CREATE TABLE `bookmarks` (
  `id` int(11) NOT NULL,
  `tag` text,
  `title` text,
  `priority` int(11) DEFAULT NULL,
  `date_bookmark` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `bookmarks`
--

INSERT INTO `bookmarks` (`id`, `tag`, `title`, `priority`, `date_bookmark`) VALUES
(1, 'репозиторий', 'Тупо сделать fork какого-нибудь популярного репозитория и не создавать никаких pull-request', 1, '2018-11-01'),
(2, 'Джигурда', 'Послушать как Джигурда рассказывает стишок', 2, '2018-12-04'),
(3, 'Душ', 'Заменить старый смеситель', 1, '2018-12-26'),
(4, 'Паутина', 'Собрать паутину на люстре, избавиться от плесени в аквариуме', 1, '2018-12-27'),
(5, 'Металл', 'Сдать металлолом', 2, '2018-12-28'),
(6, 'Диван', 'Заказать удобный диван', 2, '2018-12-30'),
(7, 'Телефон', 'Отдать телефон в ремонт', 3, '2018-12-30'),
(8, 'продукты', 'Закупиться к выходным продуктами', 1, '2018-12-30'),
(9, 'Долг', 'Попросить Валеру, чтобы тот вернул 103 рубля', 1, '2018-12-31'),
(10, 'Подушка', 'Поменять солому в подушке', 1, '2018-12-31'),
(11, 'Зленый', 'Просто зеленый', 3, '2018-12-31'),
(12, 'Красный', 'Синий', 2, '2019-01-21'),
(60, 'maltsev', 'maltsev', 1, '2019-01-08');

-- --------------------------------------------------------

--
-- Структура таблицы `priority`
--

CREATE TABLE `priority` (
  `id` int(2) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `priority`
--

INSERT INTO `priority` (`id`, `name`) VALUES
(1, 'low'),
(2, 'middle'),
(3, 'high');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`id`,`date_bookmark`),
  ADD KEY `priority` (`priority`);

--
-- Индексы таблицы `priority`
--
ALTER TABLE `priority`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `bookmarks_ibfk_1` FOREIGN KEY (`priority`) REFERENCES `priority` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
