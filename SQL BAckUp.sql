-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Ноя 14 2022 г., 11:28
-- Версия сервера: 5.7.35-38
-- Версия PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cl12056_ekb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `abouts`
--

CREATE TABLE IF NOT EXISTS `abouts` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `licence` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `inn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `baddress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iban` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `swift` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accountNumber` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `abouts`
--

INSERT INTO `abouts` (`id`, `name`, `address`, `email`, `phone`, `licence`, `inn`, `code`, `bank`, `baddress`, `iban`, `swift`, `branch`, `accountNumber`) VALUES
(1, 'AMC - Aircraft Maintenance Center FZC', 'SAIF-Zone Q1-09, Office 102/A', 'info@amc-engines.com', '+971 11 111 1111', '01673', '100321525600003', 'code', 'BANQUE MISR', 'P.O. Box 1502', 'AE68 0150 0803 0920 0012 636', 'BMISAEAAXXX', 'Dubai (UAE)', '8030 9200 0126 36 USD');

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ipo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `clients`
--

INSERT INTO `clients` (`id`, `name`, `address`, `email`, `phone`, `code`, `ipo`, `contact`, `address1`, `address2`, `address3`) VALUES
(13, 'Skyparts FZCO', 'DAFZA', 'info@skyparts.ae', 'NA', 'SP', NULL, 'MASHA', 'DAFZA', NULL, 'new ship3'),
(14, 'IZHAVIA STOCK COMPANY', 'Airport area, Zavyalovskiy District, Udmurt Republic, Russian Federation, 427000', 'procurement@izhavia.aero', '+79197750113', 'IZ', NULL, 'Lyubov Golubtsova', 'Airport area, Zavyalovskiy District, Udmurt Republic, Russian Federation, 427000', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_09_19_074909_create_provider_table', 1),
(6, '2022_09_19_113304_create_parts_table', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `datestart` date NOT NULL,
  `dateend` date NOT NULL,
  `ipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `client` int(11) NOT NULL,
  `shipto` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `manager` int(11) NOT NULL,
  `delivery` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `comission` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `currency` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `terms` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `wd` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_idx` (`client`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `number`, `datestart`, `dateend`, `ipo`, `client`, `shipto`, `manager`, `delivery`, `comission`, `currency`, `terms`, `wd`) VALUES
(73, '12e12e', '2022-11-15', '2022-11-15', 'IPO.pdf', 13, 'DAFZA', 3, NULL, NULL, 'USD', NULL, NULL),
(76, 'P1234567', '2022-11-28', '2022-11-30', 'IPO.pdf', 13, 'DAFZA', 3, NULL, NULL, 'USD', 'EXW USA', '10x10x10, WEIGHT 5kg'),
(77, 'P2140122', '2022-11-03', '2022-11-10', 'IPO.pdf', 13, 'DAFZA', 3, '60', NULL, 'USD', 'EXW SHJ', 'TBA'),
(78, '78ggfjh', '2022-11-07', '2022-11-07', 'IPO.pdf', 14, 'Airport area, Zavyalovskiy District, Udmurt Republic, Russian Federation, 427000', 3, NULL, NULL, 'USD', NULL, NULL),
(83, 'prod ver', '2022-11-28', '2022-11-28', 'IPO.pdf', 13, 'DAFZA', 3, NULL, NULL, 'USD', NULL, NULL),
(84, 'prod ver', '2022-11-28', '2022-11-28', 'IPO.pdf', 13, 'DAFZA', 3, NULL, NULL, 'USD', NULL, NULL),
(85, 'test prod', '2022-11-22', '2022-11-22', 'IPO.pdf', 13, 'DAFZA', 3, NULL, NULL, 'USD', NULL, NULL),
(87, 'test prod  mode', '2022-11-07', '2022-11-07', 'IPO.pdf', 13, 'DAFZA', 3, NULL, NULL, 'USD', NULL, NULL),
(88, '01-087-005', '2022-11-09', '2022-11-09', '01-087-005.pdf', 13, 'DAFZA', 3, NULL, NULL, 'USD', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `order_lists`
--

CREATE TABLE IF NOT EXISTS `order_lists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part` int(11) NOT NULL,
  `provider` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `order_number` int(11) NOT NULL,
  `priceClient` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cd` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mfg` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `coo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `schb` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `eccn` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sb` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `provider_link_ind` (`provider`),
  KEY `parts_idx` (`part`),
  KEY `order_link` (`order_number`)
) ENGINE=InnoDB AUTO_INCREMENT=187 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `order_lists`
--

INSERT INTO `order_lists` (`id`, `part`, `provider`, `quantity`, `price`, `order_number`, `priceClient`, `cd`, `mfg`, `coo`, `schb`, `eccn`, `sb`) VALUES
(149, 54, 15, 1, '1', 73, '1', 'AR', '1', '1', '1', '1', '1'),
(151, 56, 15, 1, '35000', 76, '48000', 'OH', 'DUMB', 'USA', '8807300060', '9A991.D', 'PBH'),
(152, 61, 15, 1, '14200', 77, '16000', 'SV', 'TBA', 'USA', '8807300060', '9A991.D', 'TBA'),
(153, 61, 18, 1, '12750', 77, '14750', 'SV', 'TBA', 'USA', '8807300060', '9A991.D', 'TBA'),
(154, 64, 19, 1, '2000', 78, '3500', 'NE', 'Boeing', 'USA', '8807300060', '9A991.D', 'N/A'),
(181, 56, 15, 1, '1', 87, '1', 'NE', '1', '1', '1', '1', '1'),
(182, 67, 15, 1, '1', 87, '1', 'NE', '1', '1', '1', '1', '1'),
(185, 67, 15, 1, '5000', 88, '3000', 'OH', 'HAMILTON', 'USA', '8807300060', '9A991.D', '123'),
(186, 67, 18, 1, '5000', 88, '2000', 'RE', 'HAMILTON', 'USA', '8807300060', '9A991.D', '321');

-- --------------------------------------------------------

--
-- Структура таблицы `parts`
--

CREATE TABLE IF NOT EXISTS `parts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pn` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `parts`
--

INSERT INTO `parts` (`id`, `pn`, `description`) VALUES
(54, '778787', '89'),
(55, '99999', 'yuiol'),
(56, '740119G', 'IDG'),
(58, 'TESTPN12', 'TESTITEM12'),
(61, '6774E010000', 'BLEED PRESSURE REG VALVE'),
(64, 'D717-01-100', 'BATTERY PACK ASSY'),
(67, 'BA03604', 'GENERATOR APU'),
(72, 'TESTPN', 'TEST PART NUM');

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `personal_access_tokens`
--

CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `providers`
--

CREATE TABLE IF NOT EXISTS `providers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tradename` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `providers`
--

INSERT INTO `providers` (`id`, `name`, `tradename`, `address`, `email`, `phone`, `country`, `contact`, `address1`, `address2`) VALUES
(15, 'Aerotron Ltd', 'Aerotron', 'CAXTON WAY 56 BA CRAWLEY WEST SUSSEX', 'sales@aerotron.co.uk', 'TEL', 'United Kingdom', 'Chelsea', 'Aerotron ship-to address', NULL),
(16, 'VENDOR1', 'VENDOR', 'VENDOR', 'VENDOR', 'VENDOR', 'VENDOR', 'VENDOR', 'VENDOR', NULL),
(17, 'VENDOR1', 'VENDOR555', 'VENDOR555', 'VENDOR555', 'VENDOR555', 'VENDOR555', 'VENDOR555', 'VENDOR555', NULL),
(18, 'Pioneer Aero Supply', 'Pioneer AS', '3520 S Morgan Street Suite 220 Chicago IL 60609', 'pioneer@pioneer.avia', '224-577-1177', 'USA', 'Turker Sezgin', '3520 S Morgan Street Suite 220 Chicago IL 60609 US Phone: 224-577-1177', NULL),
(19, 'OH Capitals Inc.', NULL, '4500 Morris Park Dr., Mint Hill, NC 28227', 'justin@ohcapitalassets.com', '+1336-540-4599', 'USA', 'Justin Hulsizer', '4500 Morris Park Dr., Mint Hill, NC 28227', NULL),
(20, 'VENDORTEST', 'POSTAVSHIK 1', '123', '123', '123', '123', '123', '123', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prefix` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_phone_unique` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `password`, `prefix`, `role`) VALUES
(3, 'admin', '89859641123', '$2y$10$TzSeJx09qCNJaDAhbXlm0um6NkPC8xJwmAaMeEDuSDgfOH0l0PF5e', '12', 1);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `client` FOREIGN KEY (`client`) REFERENCES `clients` (`id`);

--
-- Ограничения внешнего ключа таблицы `order_lists`
--
ALTER TABLE `order_lists`
  ADD CONSTRAINT `order_link` FOREIGN KEY (`order_number`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `parts` FOREIGN KEY (`part`) REFERENCES `parts` (`id`),
  ADD CONSTRAINT `provider` FOREIGN KEY (`provider`) REFERENCES `providers` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
