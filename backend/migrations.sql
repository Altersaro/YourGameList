-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 14, 2022 alle 17:19
-- Versione del server: 10.4.24-MariaDB
-- Versione PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ygl-db`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `sign_in`
--

CREATE TABLE `sign_in` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `sign_in`
--

INSERT INTO `sign_in` (`id`, `username`, `name`, `surname`, `email`, `password`) VALUES
(1, 'AlterGilgamesh\r\n', 'Rosario', 'Linguanti', 'borderline7274@gmail.com', '$2y$10$Uh8oxstGbKx2g8fY9P5z8eOQ76RxcDJebmf0shgrvccPgcR5DQmrG'),
(2, 'Olinus ubi', 'Luca', 'Barresi', 'rosa@outlook.it', '$2y$10$0q0pTOymhWEFrCfayvhFRun4n9j1ExInagNBs8VLlSjB1lk/9aPxu'),
(3, 'Altersaber', 'Rosario Luca', 'Linguanti', 'rosariolinguanti37@outlook.it', '$2y$10$C03hyruac7WOs/ADGCc1Su1yGfKV//YKzuZkV8pWYRflnpZ1ekPye'),
(4, 'dcode', 'doctor', 'code', 'ciao@ciao.it', '$2y$10$/rWasFG3erSftQEzXuf3YuBDHx1gQpYVICVXLZ5KXqXlkT/P8N/.q');

-- --------------------------------------------------------

--
-- Struttura della tabella `usergame`
--

CREATE TABLE `usergame` (
  `game_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `background_image` varchar(250) NOT NULL,
  `slug` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `user_id` int(11) NOT NULL,
  `completed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `usergame`
--

INSERT INTO `usergame` (`game_id`, `id`, `background_image`, `slug`, `name`, `user_id`, `completed`) VALUES
(53, 58386, 'https://media.rawg.io/media/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg', 'stalker-2', 'S.T.A.L.K.E.R. 2: Heart of Chornobyl', 1, 1),
(55, 332787, 'https://media.rawg.io/media/games/4fa/4fa26d7d2a9bd1deed199291668690a3.jpg', 'somerville', 'Somerville', 1, 0),
(56, 303576, 'https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg', 'vampire-the-masquerade-bloodlines-2', 'Vampire: The Masquerade - Bloodlines 2', 1, 1),
(58, 494384, 'https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg', 'god-of-war-ragnarok', 'God of War: Ragnarök', 1, 1),
(76, 326243, 'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg', 'elden-ring', 'Elden Ring', 3, 0),
(77, 452642, 'https://media.rawg.io/media/games/bf7/bf73b105ccbba42107986bbcd96fcada.jpg', 'horizon-zero-dawn-2', 'Horizon Forbidden West', 3, 1),
(78, 704634, 'https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg', 'uncharted-legacy-of-thieves-collection', 'Uncharted: Legacy of Thieves Collection', 3, 1),
(79, 529698, 'https://media.rawg.io/media/games/d16/d163e28ce9c5c17d36ad2a518015f2cf.jpg', 'the-callisto-protocol', 'The Callisto Protocol', 3, 0),
(80, 248399, 'https://media.rawg.io/media/games/1ae/1ae48966d4c59da2224fe769e93c3af6.jpg', 'harry-potter-rpg-working-title', 'Hogwarts Legacy', 3, 0),
(85, 801567, 'https://media.rawg.io/media/games/f1d/f1d25c007b9b45c98b57ff9ebbca9692.jpg', 'pentiment', 'Pentiment', 1, 0),
(86, 452636, 'https://media.rawg.io/media/games/400/4002e3aa52cf33d184f0f74cc2348134.jpg', 'project-athia', 'Forspoken', 1, 0),
(90, 616697, 'https://media.rawg.io/media/games/cd0/cd074f3f6045297cda9ad077273c09b6.jpg', 'a-plague-tale-requiem', 'A Plague Tale: Requiem', 3, 0),
(91, 58779, 'https://media.rawg.io/media/games/ba8/ba82c971336adfd290e4c0eab6504fcf.jpg', 'starfield', 'Starfield', 3, 0),
(92, 50576, 'https://media.rawg.io/media/games/7f0/7f0b9320f0c87e956129f4831b8c614f.jpg', 'atomic-heart', 'Atomic Heart', 3, 0),
(93, 388309, 'https://media.rawg.io/media/games/237/237d295a345962f7b987e318b8e74575.jpg', 'diablo-iv', 'Diablo IV', 3, 0);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `sign_in`
--
ALTER TABLE `sign_in`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `usergame`
--
ALTER TABLE `usergame`
  ADD PRIMARY KEY (`game_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `sign_in`
--
ALTER TABLE `sign_in`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT per la tabella `usergame`
--
ALTER TABLE `usergame`
  MODIFY `game_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
