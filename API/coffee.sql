-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 11, 2018 at 05:48 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coffee`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `addressID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `province` varchar(30) DEFAULT NULL,
  `district` varchar(30) DEFAULT NULL,
  `ruralMunicipality` varchar(40) DEFAULT NULL,
  `villageCity` varchar(50) DEFAULT NULL,
  `wardNo` varchar(20) DEFAULT NULL,
  `note` varchar(2500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`addressID`, `loginID`, `province`, `district`, `ruralMunicipality`, `villageCity`, `wardNo`, `note`) VALUES
(1, 1, 'Province 2', 'Khotang', 'Rural', 'Village', '123123', 'This is producer'),
(2, 2, 'Province 2', 'Sankhuwasabha', 'Rural', 'Village', '112', 'This is note'),
(3, 3, 'Province 2', 'Bhaktapur', 'Bhaktapur', 'Lalachhen', '5', 'User is a cooperative union member.'),
(4, 4, 'Province 3', 'Kathmandu', 'Tinkune', 'Kathmandu', '3', 'The user is a director of a Coffee Company Division.'),
(5, 5, 'Province 1', 'Bhaktapur', 'Bhaktapur', 'Lalachhen', '5', 'Sanat mool says he got salary of 25000 from mahesh sir'),
(6, 6, 'Province 3', 'Kathmandu', 'Rural', 'Village', '5', 'Rural Village');

-- --------------------------------------------------------

--
-- Table structure for table `affiliationDetails`
--

CREATE TABLE `affiliationDetails` (
  `affiliationID` int(11) NOT NULL,
  `pulperID` int(11) DEFAULT NULL,
  `cooperativeID` int(11) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `affiliationDetails`
--

INSERT INTO `affiliationDetails` (`affiliationID`, `pulperID`, `cooperativeID`, `type`) VALUES
(1, 1, 2, 'Province 1'),
(2, 2, 3, 'Province 4'),
(3, 3, 4, 'Province 3'),
(4, 4, 4, 'Province 4'),
(5, 5, 9, 'Province 5'),
(6, 6, 3, 'Province 2');

-- --------------------------------------------------------

--
-- Table structure for table `areaOfCultivation`
--

CREATE TABLE `areaOfCultivation` (
  `areaOfCultivationID` int(11) NOT NULL,
  `coffeeID` int(11) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `aana` varchar(20) DEFAULT NULL,
  `paisa` varchar(15) DEFAULT NULL,
  `daam` varchar(10) DEFAULT NULL,
  `ropaniDhur` varchar(20) DEFAULT NULL,
  `kattha` varchar(20) DEFAULT NULL,
  `ropani` varchar(40) DEFAULT NULL,
  `bighaDhur` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cafe`
--

CREATE TABLE `cafe` (
  `cafeID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cafe`
--

INSERT INTO `cafe` (`cafeID`, `loginID`, `name`, `phone`, `email`) VALUES
(1, 1, 'Himalayan Java ', '981231231', 'hj@yopmail.com'),
(2, 1, 'Himalayan Coffee', '98123123123', 'hc@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `cafeAddress`
--

CREATE TABLE `cafeAddress` (
  `cafeAddressID` int(11) NOT NULL,
  `cafeID` int(11) DEFAULT NULL,
  `province` varchar(40) DEFAULT NULL,
  `district` varchar(40) DEFAULT NULL,
  `ruralMunicipality` varchar(40) DEFAULT NULL,
  `villageCity` varchar(50) DEFAULT NULL,
  `wardNo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cafeAddress`
--

INSERT INTO `cafeAddress` (`cafeAddressID`, `cafeID`, `province`, `district`, `ruralMunicipality`, `villageCity`, `wardNo`) VALUES
(1, 1, 'Province 3', 'Kathmandu', 'Putalisadak', 'Kathmandu', '12'),
(2, 2, 'Province 3', 'Kathmandu', 'Rural', 'Village', '6');

-- --------------------------------------------------------

--
-- Table structure for table `cafeContactPerson`
--

CREATE TABLE `cafeContactPerson` (
  `cafeContactID` int(11) NOT NULL,
  `cafeID` int(11) DEFAULT NULL,
  `contactName` varchar(20) DEFAULT NULL,
  `position` varchar(25) DEFAULT NULL,
  `contactPhone` varchar(30) DEFAULT NULL,
  `contactEmail` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cafeContactPerson`
--

INSERT INTO `cafeContactPerson` (`cafeContactID`, `cafeID`, `contactName`, `position`, `contactPhone`, `contactEmail`) VALUES
(1, 1, 'Sanat Mool', 'CEO', '9812121212', 'sanat.mool17@gmail.com'),
(2, 2, 'Sanjog Rijal', 'Developer', '9812312311', 'sanat.mool17@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `coffee`
--

CREATE TABLE `coffee` (
  `coffeeID` int(11) NOT NULL,
  `proprietorName` varchar(20) DEFAULT NULL,
  `proprietorPhone` varchar(20) DEFAULT NULL,
  `loginID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coffee`
--

INSERT INTO `coffee` (`coffeeID`, `proprietorName`, `proprietorPhone`, `loginID`) VALUES
(1, 'Sanat Mool', '9812312311', 1);

-- --------------------------------------------------------

--
-- Table structure for table `coffeeAddressDetails`
--

CREATE TABLE `coffeeAddressDetails` (
  `coffeeAddressID` int(11) NOT NULL,
  `individualEntityName` varchar(30) DEFAULT NULL,
  `coffeeID` int(11) DEFAULT NULL,
  `coffeeProvince` varchar(30) DEFAULT NULL,
  `coffeeDistrict` varchar(30) DEFAULT NULL,
  `coffeeRuralMunicipality` varchar(30) DEFAULT NULL,
  `coffeeWardNo` varchar(30) DEFAULT NULL,
  `coffeeVillageCity` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coffeeAddressDetails`
--

INSERT INTO `coffeeAddressDetails` (`coffeeAddressID`, `individualEntityName`, `coffeeID`, `coffeeProvince`, `coffeeDistrict`, `coffeeRuralMunicipality`, `coffeeWardNo`, `coffeeVillageCity`) VALUES
(1, 'Coffee Cooperative', 1, 'Province 5', 'Darchula', 'Rural', '123', 'Village');

-- --------------------------------------------------------

--
-- Table structure for table `coffeePlantDetails`
--

CREATE TABLE `coffeePlantDetails` (
  `coffeePlantDetailID` int(11) NOT NULL,
  `nurseryID` int(11) DEFAULT NULL,
  `year` varchar(25) DEFAULT NULL,
  `numberOfPlants` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `coffeeProductionDetails`
--

CREATE TABLE `coffeeProductionDetails` (
  `coffeeProductionDetailsID` int(11) NOT NULL,
  `coffeeID` int(11) DEFAULT NULL,
  `fruitingPlant` varchar(50) DEFAULT NULL,
  `nonFruitingPlant` varchar(50) DEFAULT NULL,
  `numberOfPlants` varchar(50) DEFAULT NULL,
  `estimatedProduction` varchar(30) DEFAULT NULL,
  `areaOfCultivation` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coffeeProductionDetails`
--

INSERT INTO `coffeeProductionDetails` (`coffeeProductionDetailsID`, `coffeeID`, `fruitingPlant`, `nonFruitingPlant`, `numberOfPlants`, `estimatedProduction`, `areaOfCultivation`) VALUES
(1, 1, '123123', '123123', '123123', '123123', '25');

-- --------------------------------------------------------

--
-- Table structure for table `contactPersonels`
--

CREATE TABLE `contactPersonels` (
  `contactPersonelID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `contactPersonName` varchar(255) DEFAULT NULL,
  `position` varchar(20) DEFAULT NULL,
  `contactNumber` varchar(25) DEFAULT NULL,
  `contactEmail` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactPersonels`
--

INSERT INTO `contactPersonels` (`contactPersonelID`, `loginID`, `contactPersonName`, `position`, `contactNumber`, `contactEmail`) VALUES
(1, 1, 'Sanjog Rijal', 'developer', '98123123123', 'sanjogrijal@yopmail.com'),
(2, 2, 'Sagar Hoda', 'Developer', '98123123123', 'sagarhoda@yopmail.com'),
(3, 3, 'Sanat Mool', 'Director', '98121121212', 'sanatmool@gmail.com'),
(4, 4, 'Bijay Raj Bhattarai', 'Director', '98123123123', 'bijayraj@hotmail.com'),
(5, 5, 'Sanat Mool', 'Developer', '9812312311', 'sanat.mool17@gmail.com'),
(6, 6, 'SanjogRijal', 'Developer', '98123123123', 'sanjogrijal15@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `contactID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `contactNote` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`contactID`, `loginID`, `number`, `contactNote`) VALUES
(1, 1, '98132954621', 'This is contact note'),
(2, 2, '981231231', 'this is contact note'),
(3, 3, '9841121122', 'The contact number is his personal phone number.'),
(4, 4, '9812312312', 'This is his personal cell.'),
(5, 5, '9812312311', 'Call him for this cooperative'),
(6, 6, '9812312121', 'Contact number');

-- --------------------------------------------------------

--
-- Table structure for table `cooperativeAddress`
--

CREATE TABLE `cooperativeAddress` (
  `addressID` int(11) NOT NULL,
  `cooperativeID` int(11) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `district` varchar(50) DEFAULT NULL,
  `ruralMunicipality` varchar(50) DEFAULT NULL,
  `villageCity` varchar(50) DEFAULT NULL,
  `wardNo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cooperativeAddress`
--

INSERT INTO `cooperativeAddress` (`addressID`, `cooperativeID`, `province`, `district`, `ruralMunicipality`, `villageCity`, `wardNo`) VALUES
(1, 5, 'Province 1', 'Sunsari', 'Itahari', 'Itahari', '5'),
(2, 6, 'Province 1', 'Taplejung', '123123', '12312312', '123213'),
(3, 7, 'Province 3', 'Khotang', 'Itahari', 'Itahari', '123'),
(4, 8, 'Province 3', 'Khotang', 'Itahari', 'Itahari', '123'),
(5, 9, 'Province 4', 'Jhapa', 'Itahari', 'Biratnagar', '123'),
(6, 10, 'Province 3', 'Kathmandu', 'Tushal', 'Boudha', '12'),
(7, 11, 'Province 3', 'Kathmandu', 'Tushal', 'Boudha', '12');

-- --------------------------------------------------------

--
-- Table structure for table `cooperativeAffiliationDetails`
--

CREATE TABLE `cooperativeAffiliationDetails` (
  `cooperativeAffiliationID` int(11) NOT NULL,
  `cooperativeID` int(11) DEFAULT NULL,
  `cooperativeAffiliationType` varchar(20) DEFAULT NULL,
  `cooperativeAffiliationEntity` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cooperativeAffiliationDetails`
--

INSERT INTO `cooperativeAffiliationDetails` (`cooperativeAffiliationID`, `cooperativeID`, `cooperativeAffiliationType`, `cooperativeAffiliationEntity`) VALUES
(1, 8, 'Province 3', '7'),
(2, 9, 'Province 4', '8'),
(3, 10, 'Province 3', '2'),
(4, 11, 'Province 3', '2');

-- --------------------------------------------------------

--
-- Table structure for table `cooperativeContact`
--

CREATE TABLE `cooperativeContact` (
  `contactID` int(11) NOT NULL,
  `cooperativeID` int(11) DEFAULT NULL,
  `contactName` varchar(20) DEFAULT NULL,
  `position` varchar(30) DEFAULT NULL,
  `contactPhone` varchar(30) DEFAULT NULL,
  `contactEmail` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cooperativeContact`
--

INSERT INTO `cooperativeContact` (`contactID`, `cooperativeID`, `contactName`, `position`, `contactPhone`, `contactEmail`) VALUES
(1, 2, 'Sanjog Rijal', 'Developer', '9869304785', 'sanjogrijal15@gmail.com'),
(2, 2, 'Sanjog Rijal', 'Developer', '9869304785', 'sanjogrijal15@gmail.com'),
(3, 5, 'Sanjog Rijal', 'Developer', '9869304785', 'sanjogrijal15@gmail.com'),
(4, 6, 'Sanjog Rijal', 'sanjog', '91823123123', 'sanjogrijal15@gmail.com'),
(5, 7, 'asdf', 'asdf', '12312', 'sanjogrijal15@gmail.com'),
(6, 8, 'asefsaef', 'Developer', '213123', 'sanjogrijal15@gmail.com'),
(7, 9, 'adsfsadfsdf', 'saefsef', '123123', 'sanjogrijal15@gmail.com'),
(8, 10, 'Mahesh Ghimire', 'Chairman', '981231231', 'maheshcghimire@gmail.com'),
(9, 11, 'Mahesh Ghimire', 'Chairman', '981231231', 'maheshcghimire@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `cooperativeProductionDetails`
--

CREATE TABLE `cooperativeProductionDetails` (
  `cooperativeProductionDetailsID` int(11) NOT NULL,
  `cooperativeID` int(11) DEFAULT NULL,
  `cooperativeAreaOfCultivation` varchar(10) DEFAULT NULL,
  `cooperativeEstimatedProduction` varchar(10) DEFAULT NULL,
  `threeToFive` varchar(10) DEFAULT NULL,
  `fiveToFifteen` varchar(10) DEFAULT NULL,
  `fifteenPlus` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cooperatives`
--

CREATE TABLE `cooperatives` (
  `cooperativeID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cooperatives`
--

INSERT INTO `cooperatives` (`cooperativeID`, `loginID`, `name`, `phone`, `email`) VALUES
(1, 1, 'sadfasfd', 'sadfasdf', 'asdfasdf'),
(2, 1, 'New Cooperative', '98123123123', 'sanjogrijal15@gmail.com'),
(3, 1, 'New Cooperative', '98123123123', 'sanjogrijal15@gmail.com'),
(4, 1, 'New Cooperative', '98123123123', 'sanjogrijal15@gmail.com'),
(5, 1, 'New Cooperative', '98123123113', 'sanjogrijal15@gmail.com'),
(6, 1, 'New Cooperative', '98123123', 'sanjogrijal15@gmail.com'),
(7, 1, 'New Cooperative July 5', '98123123123', 'sanjogrijal15@gmail.com'),
(8, 1, 'asdfsadf', '98123123123', 'sanjogrijal15@gmail.com'),
(9, 1, 'New Entity', '98123123123', 'sanjogrijal15@gmail.com'),
(10, 1, 'Denim Cooperative', '014459291', 'denim@cooperative.com'),
(11, 1, 'Denim Cooperative', '014459291', 'denim@cooperative.com');

-- --------------------------------------------------------

--
-- Table structure for table `farmerAddressDetails`
--

CREATE TABLE `farmerAddressDetails` (
  `addressID` int(11) NOT NULL,
  `farmerID` int(11) DEFAULT NULL,
  `province` varchar(40) DEFAULT NULL,
  `district` varchar(40) DEFAULT NULL,
  `ruralMunicipality` varchar(50) DEFAULT NULL,
  `villageCity` varchar(50) DEFAULT NULL,
  `wardNo` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `farmerAddressDetails`
--

INSERT INTO `farmerAddressDetails` (`addressID`, `farmerID`, `province`, `district`, `ruralMunicipality`, `villageCity`, `wardNo`) VALUES
(1, 2, 'Province 1', 'Taplejung', 'Taplejung', 'Taplejung', '12'),
(2, 3, 'Province 3', 'Khotang', 'Itahari', 'Biratnagar', '123'),
(3, 4, 'Province 4', 'Okhaldhunga', 'dsafsdafasdf', 'sdafasdfasdf', '123123'),
(4, 5, 'Province 3', 'Jhapa', 'dasfsdf', 'dsafsdaf', '123'),
(5, 6, 'Province 4', 'Ilam', 'Itahari', 'Biratnagar', '123'),
(6, 7, 'Province 3', 'Solukhumbu', 'Bhaktapur', 'Lalachen', '1231'),
(7, 8, 'Province 4', 'Okhaldhunga', 'Bhaktapur', 'Lalachhen', '5');

-- --------------------------------------------------------

--
-- Table structure for table `farmerAffiliationDetails`
--

CREATE TABLE `farmerAffiliationDetails` (
  `farmerAffiliationID` int(11) NOT NULL,
  `farmerID` int(11) DEFAULT NULL,
  `affiliationType` varchar(20) DEFAULT NULL,
  `affiliationEntity` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `farmerAffiliationDetails`
--

INSERT INTO `farmerAffiliationDetails` (`farmerAffiliationID`, `farmerID`, `affiliationType`, `affiliationEntity`) VALUES
(1, 5, NULL, NULL),
(2, 6, NULL, NULL),
(3, 7, NULL, NULL),
(4, 8, 'Province 3', '2');

-- --------------------------------------------------------

--
-- Table structure for table `farmerProductionDetails`
--

CREATE TABLE `farmerProductionDetails` (
  `productionDetailsID` int(11) NOT NULL,
  `farmerID` int(11) DEFAULT NULL,
  `year` varchar(20) DEFAULT NULL,
  `areaOfCultivation` varchar(60) DEFAULT NULL,
  `estimatedProduction` varchar(50) DEFAULT NULL,
  `threeToFive` varchar(20) DEFAULT NULL,
  `fiveToFifteen` varchar(20) DEFAULT NULL,
  `fifteenPlus` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `farmerProductionDetails`
--

INSERT INTO `farmerProductionDetails` (`productionDetailsID`, `farmerID`, `year`, `areaOfCultivation`, `estimatedProduction`, `threeToFive`, `fiveToFifteen`, `fifteenPlus`) VALUES
(1, 1, NULL, NULL, '1222', '1200', '12000', '120000'),
(2, 2, NULL, NULL, '11000', '1200', '12000', '120000'),
(3, 4, NULL, '123', '123123', '123', '123', '123'),
(4, 5, NULL, '123123', '123123', '123', '123', '123'),
(5, 6, NULL, NULL, '1111', '123', '123', '111'),
(6, 6, NULL, NULL, '1231', '123', '123', '123'),
(7, 6, NULL, NULL, '1231', '123', '123', '123');

-- --------------------------------------------------------

--
-- Table structure for table `farmers`
--

CREATE TABLE `farmers` (
  `farmerID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `farmers`
--

INSERT INTO `farmers` (`farmerID`, `loginID`, `name`, `phone`) VALUES
(1, 1, 'Sanat Mool', '98123123'),
(2, 1, 'Sanat Mool', '981231231'),
(3, 1, 'Farmer Prashad', '981231231123'),
(4, 1, 'Sanjog Rijal', '123123123'),
(5, 1, 'saef', '123123'),
(6, 1, 'Binding File', '9812312311'),
(7, 1, 'SanjogRijal', '9123123123'),
(8, 1, 'SanatMool', '98123123123');

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `loginID` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `loginType` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`loginID`, `username`, `password`, `email`, `loginType`) VALUES
(1, 'SanjogRijal', 'coffeeboard', 'sanjogrijal15@gmail.com', 'producer'),
(2, 'SagarHoda', 'coffeeboard', 'sagarhoda@yopmail.com', 'producer'),
(3, 'SanatMool', 'coffeeboard', 'sanat.mool17@gmail.com', 'cooperative'),
(4, 'BijayRaj', 'coffeeboard', 'bijayRaj@bijay.com', 'coffeecompany'),
(5, 'SanatMool', 'sanatmool', 'sanat.mool17@gmail.com', 'cooperative'),
(6, 'SanjogRijal', 'coffeeboard', 'sanjogrijal15@gmail.com', 'level1');

-- --------------------------------------------------------

--
-- Table structure for table `nurseries`
--

CREATE TABLE `nurseries` (
  `nurseryID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `name` varchar(35) DEFAULT NULL,
  `nurseryPhone` varchar(20) DEFAULT NULL,
  `yearOfEstablishment` varchar(20) DEFAULT NULL,
  `nurseryEmail` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nurseries`
--

INSERT INTO `nurseries` (`nurseryID`, `loginID`, `name`, `nurseryPhone`, `yearOfEstablishment`, `nurseryEmail`) VALUES
(1, 1, 'Sanjay Thapa', '9813294574', '2015', 'sanjay@gmail.com'),
(2, 1, NULL, NULL, '2016', 'sanjogrijal15@gmail.com'),
(3, 1, 'asdfsadf', '98123123123', '2017', 'sanjogrijal15@gmail.com'),
(4, 1, NULL, NULL, NULL, NULL),
(5, 1, NULL, NULL, NULL, NULL),
(6, 1, NULL, NULL, NULL, NULL),
(7, 1, NULL, NULL, NULL, NULL),
(8, 1, NULL, NULL, NULL, NULL),
(9, 1, NULL, NULL, NULL, NULL),
(10, 1, NULL, NULL, NULL, NULL),
(11, 1, NULL, NULL, NULL, NULL),
(12, 1, NULL, NULL, NULL, NULL),
(13, 1, 'Sanjog Rijal', '9812312312', '2017', 'sanjogrijal15@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `nurseryAddressDetails`
--

CREATE TABLE `nurseryAddressDetails` (
  `nurseryAddressID` int(11) NOT NULL,
  `nurseryID` int(11) DEFAULT NULL,
  `nurseryProvince` varchar(20) DEFAULT NULL,
  `nurseryDistrict` varchar(20) DEFAULT NULL,
  `nurseryRuralMunicipality` varchar(20) DEFAULT NULL,
  `nurseryVillageCity` varchar(30) DEFAULT NULL,
  `nurseryWardNo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nurseryAddressDetails`
--

INSERT INTO `nurseryAddressDetails` (`nurseryAddressID`, `nurseryID`, `nurseryProvince`, `nurseryDistrict`, `nurseryRuralMunicipality`, `nurseryVillageCity`, `nurseryWardNo`) VALUES
(1, 1, 'Province 2', 'Jhapa', 'Rural', 'Village', '123'),
(2, 2, 'Province 4', 'Dhankuta', 'Rural Municipality', NULL, NULL),
(3, 3, 'Province 7', 'Terhathum', 'Rural Municipality', 'Village', '8'),
(4, 13, 'Province 3', 'Kathmandu', 'Rural', 'Village', '6');

-- --------------------------------------------------------

--
-- Table structure for table `nurseryCoffeeDetails`
--

CREATE TABLE `nurseryCoffeeDetails` (
  `nurseryCoffeeID` int(11) NOT NULL,
  `nurseryID` int(11) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `numberOfPlants` varchar(20) DEFAULT NULL,
  `soldPlants` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nurseryCoffeeDetails`
--

INSERT INTO `nurseryCoffeeDetails` (`nurseryCoffeeID`, `nurseryID`, `year`, `numberOfPlants`, `soldPlants`) VALUES
(1, 1, '2017', '70', NULL),
(2, 10, '2018', '2123', '41131'),
(3, 10, '2018', '2123', '41131'),
(4, 10, '2018', '2123', '41131'),
(5, 11, '2018', '2123', '41131'),
(6, 11, '2018', '2123', '41131'),
(7, 11, '2018', '2123', '41131'),
(8, 11, '2018', '2123', '41131'),
(9, 11, '2018', '2123', '41131'),
(10, 11, '2018', '2123', '41131'),
(11, 12, '2018', '123123', '123123'),
(12, 12, '2020', '12312', '543534534'),
(13, 12, '2018', '123123', '123123'),
(14, 12, '2020', '12312', '543534534');

-- --------------------------------------------------------

--
-- Table structure for table `nurseryContactDetails`
--

CREATE TABLE `nurseryContactDetails` (
  `nurseryContactID` int(11) NOT NULL,
  `nurseryID` int(11) DEFAULT NULL,
  `nurseryContactName` varchar(12) DEFAULT NULL,
  `nurseryContactPosition` varchar(20) DEFAULT NULL,
  `nurseryContactPhone` varchar(20) DEFAULT NULL,
  `nurseryContactEmail` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nurseryContactDetails`
--

INSERT INTO `nurseryContactDetails` (`nurseryContactID`, `nurseryID`, `nurseryContactName`, `nurseryContactPosition`, `nurseryContactPhone`, `nurseryContactEmail`) VALUES
(1, 1, 'Sanjog Rijal', 'Nursery Manager', '981211212', 'sanjogrijal15@gmail.com'),
(2, 2, NULL, NULL, NULL, NULL),
(3, 3, 'Sanjog Rijal', 'Develioper', '123123123', 'sanjogrijal15@gmail.com'),
(4, 13, 'July10', 'July10', '98123123123', 'july10@july10.com');

-- --------------------------------------------------------

--
-- Table structure for table `processorAddressDetails`
--

CREATE TABLE `processorAddressDetails` (
  `addressID` int(11) NOT NULL,
  `processorsID` int(11) DEFAULT NULL,
  `province` varchar(40) DEFAULT NULL,
  `district` varchar(40) DEFAULT NULL,
  `ruralMunicipality` varchar(40) DEFAULT NULL,
  `villageCity` varchar(20) DEFAULT NULL,
  `wardNo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `processorAddressDetails`
--

INSERT INTO `processorAddressDetails` (`addressID`, `processorsID`, `province`, `district`, `ruralMunicipality`, `villageCity`, `wardNo`) VALUES
(1, 1, 'Province 2', 'Okhaldhunga', 'Itahari', 'Itahari', '123'),
(2, 2, 'Province 3', 'Panchthar', '123123', 'sdafasdf', '123123123'),
(3, 3, 'Province 5', 'Sunsari', 'Rural Munici', 'Biratnagar', '123'),
(4, 4, 'Province 4', 'Okhaldhunga', 'Rural Munici', 'Rural Municipality', '2'),
(5, 5, 'Province 3', 'Bhojpur', 'Rural Municipality', 'Biratnagar', '123'),
(6, 6, 'Province 5', 'Dhankuta', 'Rural Municipality', 'Biratnagar', '123'),
(7, 7, 'Province 3', 'Okhaldhunga', NULL, NULL, '123'),
(8, 8, 'Province 3', 'Ilam', 'Itahari', 'Biratnagar', '123'),
(9, 9, 'Province 5', 'Panchthar', 'Itahari', 'Biratnagar', '123'),
(10, 10, 'Province 3', 'Kathmandu', 'Rural', 'Village', '45'),
(11, 11, 'Province 5', 'Rautahat', 'Rural', 'Village', '5');

-- --------------------------------------------------------

--
-- Table structure for table `processorContactPerson`
--

CREATE TABLE `processorContactPerson` (
  `processorContactID` int(11) NOT NULL,
  `processorID` int(11) DEFAULT NULL,
  `processorContactName` varchar(30) DEFAULT NULL,
  `processorContactPosition` varchar(30) DEFAULT NULL,
  `processorContactNumber` varchar(30) DEFAULT NULL,
  `processorContactEmail` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `processorContactPerson`
--

INSERT INTO `processorContactPerson` (`processorContactID`, `processorID`, `processorContactName`, `processorContactPosition`, `processorContactNumber`, `processorContactEmail`) VALUES
(1, NULL, 'saju', 'Developer', NULL, 'sanjogrijal15@gmail.com'),
(2, NULL, 'Sanat Mool', 'Process Manager', NULL, 'sanat.mool17@gmail.com'),
(3, 11, 'SanjogSanjog', 'kljsdaflskafd', NULL, 'sanat.mool17@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `processorProductionDetails`
--

CREATE TABLE `processorProductionDetails` (
  `processorProductionDetailID` int(11) NOT NULL,
  `processorsID` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `collectionFromFarmer` varchar(255) DEFAULT NULL,
  `greenBeans` varchar(355) DEFAULT NULL,
  `roastedBeans` varchar(255) DEFAULT NULL,
  `groundCoffee` varchar(355) DEFAULT NULL,
  `totalQuantityProcessed` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `processorProductionDetails`
--

INSERT INTO `processorProductionDetails` (`processorProductionDetailID`, `processorsID`, `date`, `collectionFromFarmer`, `greenBeans`, `roastedBeans`, `groundCoffee`, `totalQuantityProcessed`) VALUES
(1, 1, '2018-07-03T06:17:57.601Z', '12', '12', '123', '234', NULL),
(2, 2, '2018-07-04T07:02:39.808Z', '123123', '123123', '123123123', '123123123', NULL),
(3, 5, '2018-07-05T10:42:06.162Z', '123', '10', '40', '50', NULL),
(4, 6, '2018-07-05T10:59:47.012Z', '1000', '250', '500', '200', NULL),
(5, 7, '2018-07-05T11:16:18.993Z', '123123', '123', '123', '12312', NULL),
(6, 8, '2018-07-05T11:43:02.941Z', '123123', '123', '123', '123123', NULL),
(7, 9, '2018-07-05T11:48:14.263Z', '123123', '12313', '111', '1231', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `processors`
--

CREATE TABLE `processors` (
  `processorsID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `processorEmail` varchar(100) DEFAULT NULL,
  `processorWebsite` varchar(120) DEFAULT NULL,
  `pan` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `processors`
--

INSERT INTO `processors` (`processorsID`, `loginID`, `name`, `phone`, `processorEmail`, `processorWebsite`, `pan`) VALUES
(1, 1, 'Samiran', '9812312311', NULL, NULL, NULL),
(2, 1, 'asefsef', '98123123123', 'sanjogrijal15@gmail.com', 'www.www.com', '123123123'),
(3, 1, 'dsafasdf', '123123123', 'sanjogrijal15@gmail.com', 'www.www.com', '123123123'),
(4, 1, 'Sanjog Rijal', '98123123', 'sanjogrijal15@gmail.com', 'www.processor.com', '981231'),
(5, 1, 'asdfasdf', '98123123123', 'sanjogrijal15@gmail.com', 'www.www.com', '123123'),
(6, 1, 'Sanjog Rijal', '98123123123', 'sanjogrijal15@gmail.com', 'www.www.com', '123123'),
(7, 1, 'Sanjog Rijal', '98123123123', 'sanjogrijal15@gmail.com', 'www.www.com', '123'),
(8, 1, 'Sanjog Rijal', '98123123123', 'sanjogrijal15@gmail.com', 'www.www.com', '123123'),
(9, 1, 'Sanjog Rijal', '98123123123', 'sanjogrijal15@gmail.com', 'www.www.com', '123123'),
(10, 1, 'New Processor July 10', '981123123', 'newprocessors@gmail.com', 'www.newprocessor.com', '12391812'),
(11, 1, 'kjlsajfel', '18023819238', 'july10@gmail.com', 'july10.com', '123123');

-- --------------------------------------------------------

--
-- Table structure for table `processorSupplyDetails`
--

CREATE TABLE `processorSupplyDetails` (
  `supplyID` int(11) NOT NULL,
  `processorsID` int(11) DEFAULT NULL,
  `domesticMarket` varchar(20) DEFAULT NULL,
  `internationalMarket` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `processorSupplyDetails`
--

INSERT INTO `processorSupplyDetails` (`supplyID`, `processorsID`, `domesticMarket`, `internationalMarket`) VALUES
(1, 9, '123123', '11123');

-- --------------------------------------------------------

--
-- Table structure for table `pulperAddressDetails`
--

CREATE TABLE `pulperAddressDetails` (
  `addressID` int(11) NOT NULL,
  `pulperID` int(11) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `district` varchar(50) DEFAULT NULL,
  `ruralMunicipality` varchar(50) DEFAULT NULL,
  `villageCity` varchar(50) DEFAULT NULL,
  `wardNo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pulperAddressDetails`
--

INSERT INTO `pulperAddressDetails` (`addressID`, `pulperID`, `province`, `district`, `ruralMunicipality`, `villageCity`, `wardNo`) VALUES
(1, 1, 'Province 1', 'Solukhumbu', 'Rural Municipality', 'Village', '123'),
(2, 2, 'Province 4', 'Morang', 'Rural Municipality', 'Biratnagar', '123'),
(3, 3, 'Province 3', 'Morang', '123123123', 'sadfsadfasdf', '123123'),
(4, 4, 'Province 5', 'Ilam', 'saefsaef', 'asefasef', '123'),
(5, 5, 'Province 2', 'Bhojpur', 'Itahari', 'Biratnagar', '123'),
(6, 6, 'Province 3', 'Kathmandu', 'Tushal', 'Boudha', '5');

-- --------------------------------------------------------

--
-- Table structure for table `pulperProductionDetails`
--

CREATE TABLE `pulperProductionDetails` (
  `pulperProductionDetailsID` int(11) NOT NULL,
  `pulperID` int(11) DEFAULT NULL,
  `pulperCapacity` varchar(20) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `formentationProcess` varchar(30) DEFAULT NULL,
  `collectionFromFarmer` varchar(255) DEFAULT NULL,
  `parchmentQuantity` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pulperProductionDetails`
--

INSERT INTO `pulperProductionDetails` (`pulperProductionDetailsID`, `pulperID`, `pulperCapacity`, `year`, `formentationProcess`, `collectionFromFarmer`, `parchmentQuantity`) VALUES
(1, 1, NULL, '2018-07-03', NULL, '112', '1212'),
(2, 4, NULL, '2018-07-04', 'Wet', '123123123', '123123'),
(3, 5, NULL, '2018-07-05', 'Honey', '123123', '123123');

-- --------------------------------------------------------

--
-- Table structure for table `pulpers`
--

CREATE TABLE `pulpers` (
  `pulperID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `name` varchar(25) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `pulperType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pulpers`
--

INSERT INTO `pulpers` (`pulperID`, `loginID`, `name`, `phone`, `pulperType`) VALUES
(1, 1, 'Sanat Mool', '98123123', NULL),
(2, 1, 'Binding File', '123123', 'Mass Pulper'),
(3, 1, 'saef', '123123123', 'Drum/Electric Pulper'),
(4, 1, 'saefsaef', '123123', 'Drum/Electric Pulper'),
(5, 1, 'Pulper', '98123123', 'Drum/Electric Pulper'),
(6, 1, 'Krennova Pulping Company', '14492923', 'Drum/Electric Pulper');

-- --------------------------------------------------------

--
-- Table structure for table `stakeholders`
--

CREATE TABLE `stakeholders` (
  `stakeholderID` int(11) NOT NULL,
  `loginID` int(11) DEFAULT NULL,
  `organizationName` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`addressID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `affiliationDetails`
--
ALTER TABLE `affiliationDetails`
  ADD PRIMARY KEY (`affiliationID`),
  ADD KEY `pulperID` (`pulperID`),
  ADD KEY `cooperativeID` (`cooperativeID`);

--
-- Indexes for table `areaOfCultivation`
--
ALTER TABLE `areaOfCultivation`
  ADD PRIMARY KEY (`areaOfCultivationID`),
  ADD KEY `coffeeID` (`coffeeID`);

--
-- Indexes for table `cafe`
--
ALTER TABLE `cafe`
  ADD PRIMARY KEY (`cafeID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `cafeAddress`
--
ALTER TABLE `cafeAddress`
  ADD PRIMARY KEY (`cafeAddressID`),
  ADD KEY `cafeID` (`cafeID`);

--
-- Indexes for table `cafeContactPerson`
--
ALTER TABLE `cafeContactPerson`
  ADD PRIMARY KEY (`cafeContactID`),
  ADD KEY `cafeID` (`cafeID`);

--
-- Indexes for table `coffee`
--
ALTER TABLE `coffee`
  ADD PRIMARY KEY (`coffeeID`),
  ADD KEY `fk_login_id` (`loginID`);

--
-- Indexes for table `coffeeAddressDetails`
--
ALTER TABLE `coffeeAddressDetails`
  ADD PRIMARY KEY (`coffeeAddressID`),
  ADD KEY `coffeeID` (`coffeeID`);

--
-- Indexes for table `coffeePlantDetails`
--
ALTER TABLE `coffeePlantDetails`
  ADD PRIMARY KEY (`coffeePlantDetailID`),
  ADD KEY `nurseryID` (`nurseryID`);

--
-- Indexes for table `coffeeProductionDetails`
--
ALTER TABLE `coffeeProductionDetails`
  ADD PRIMARY KEY (`coffeeProductionDetailsID`),
  ADD KEY `coffeeID` (`coffeeID`);

--
-- Indexes for table `contactPersonels`
--
ALTER TABLE `contactPersonels`
  ADD PRIMARY KEY (`contactPersonelID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`contactID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `cooperativeAddress`
--
ALTER TABLE `cooperativeAddress`
  ADD PRIMARY KEY (`addressID`),
  ADD KEY `cooperativeID` (`cooperativeID`);

--
-- Indexes for table `cooperativeAffiliationDetails`
--
ALTER TABLE `cooperativeAffiliationDetails`
  ADD PRIMARY KEY (`cooperativeAffiliationID`),
  ADD KEY `cooperativeID` (`cooperativeID`);

--
-- Indexes for table `cooperativeContact`
--
ALTER TABLE `cooperativeContact`
  ADD PRIMARY KEY (`contactID`),
  ADD KEY `cooperativeID` (`cooperativeID`);

--
-- Indexes for table `cooperativeProductionDetails`
--
ALTER TABLE `cooperativeProductionDetails`
  ADD PRIMARY KEY (`cooperativeProductionDetailsID`);

--
-- Indexes for table `cooperatives`
--
ALTER TABLE `cooperatives`
  ADD PRIMARY KEY (`cooperativeID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `farmerAddressDetails`
--
ALTER TABLE `farmerAddressDetails`
  ADD PRIMARY KEY (`addressID`),
  ADD KEY `farmerID` (`farmerID`);

--
-- Indexes for table `farmerAffiliationDetails`
--
ALTER TABLE `farmerAffiliationDetails`
  ADD PRIMARY KEY (`farmerAffiliationID`),
  ADD KEY `farmerID` (`farmerID`);

--
-- Indexes for table `farmerProductionDetails`
--
ALTER TABLE `farmerProductionDetails`
  ADD PRIMARY KEY (`productionDetailsID`),
  ADD KEY `farmerID` (`farmerID`);

--
-- Indexes for table `farmers`
--
ALTER TABLE `farmers`
  ADD PRIMARY KEY (`farmerID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`loginID`);

--
-- Indexes for table `nurseries`
--
ALTER TABLE `nurseries`
  ADD PRIMARY KEY (`nurseryID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `nurseryAddressDetails`
--
ALTER TABLE `nurseryAddressDetails`
  ADD PRIMARY KEY (`nurseryAddressID`),
  ADD KEY `nurseryID` (`nurseryID`);

--
-- Indexes for table `nurseryCoffeeDetails`
--
ALTER TABLE `nurseryCoffeeDetails`
  ADD PRIMARY KEY (`nurseryCoffeeID`),
  ADD KEY `nurseryID` (`nurseryID`);

--
-- Indexes for table `nurseryContactDetails`
--
ALTER TABLE `nurseryContactDetails`
  ADD PRIMARY KEY (`nurseryContactID`),
  ADD KEY `nurseryID` (`nurseryID`);

--
-- Indexes for table `processorAddressDetails`
--
ALTER TABLE `processorAddressDetails`
  ADD PRIMARY KEY (`addressID`),
  ADD KEY `processorsID` (`processorsID`);

--
-- Indexes for table `processorContactPerson`
--
ALTER TABLE `processorContactPerson`
  ADD PRIMARY KEY (`processorContactID`),
  ADD KEY `processorID` (`processorID`);

--
-- Indexes for table `processorProductionDetails`
--
ALTER TABLE `processorProductionDetails`
  ADD PRIMARY KEY (`processorProductionDetailID`),
  ADD KEY `processorsID` (`processorsID`);

--
-- Indexes for table `processors`
--
ALTER TABLE `processors`
  ADD PRIMARY KEY (`processorsID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `processorSupplyDetails`
--
ALTER TABLE `processorSupplyDetails`
  ADD PRIMARY KEY (`supplyID`),
  ADD KEY `processorsID` (`processorsID`);

--
-- Indexes for table `pulperAddressDetails`
--
ALTER TABLE `pulperAddressDetails`
  ADD PRIMARY KEY (`addressID`),
  ADD KEY `pulperID` (`pulperID`);

--
-- Indexes for table `pulperProductionDetails`
--
ALTER TABLE `pulperProductionDetails`
  ADD PRIMARY KEY (`pulperProductionDetailsID`),
  ADD KEY `pulperID` (`pulperID`);

--
-- Indexes for table `pulpers`
--
ALTER TABLE `pulpers`
  ADD PRIMARY KEY (`pulperID`),
  ADD KEY `loginID` (`loginID`);

--
-- Indexes for table `stakeholders`
--
ALTER TABLE `stakeholders`
  ADD PRIMARY KEY (`stakeholderID`),
  ADD KEY `loginID` (`loginID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `affiliationDetails`
--
ALTER TABLE `affiliationDetails`
  MODIFY `affiliationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `areaOfCultivation`
--
ALTER TABLE `areaOfCultivation`
  MODIFY `areaOfCultivationID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cafe`
--
ALTER TABLE `cafe`
  MODIFY `cafeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cafeAddress`
--
ALTER TABLE `cafeAddress`
  MODIFY `cafeAddressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cafeContactPerson`
--
ALTER TABLE `cafeContactPerson`
  MODIFY `cafeContactID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `coffee`
--
ALTER TABLE `coffee`
  MODIFY `coffeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coffeeAddressDetails`
--
ALTER TABLE `coffeeAddressDetails`
  MODIFY `coffeeAddressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coffeePlantDetails`
--
ALTER TABLE `coffeePlantDetails`
  MODIFY `coffeePlantDetailID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coffeeProductionDetails`
--
ALTER TABLE `coffeeProductionDetails`
  MODIFY `coffeeProductionDetailsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contactPersonels`
--
ALTER TABLE `contactPersonels`
  MODIFY `contactPersonelID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `contactID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cooperativeAddress`
--
ALTER TABLE `cooperativeAddress`
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cooperativeAffiliationDetails`
--
ALTER TABLE `cooperativeAffiliationDetails`
  MODIFY `cooperativeAffiliationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cooperativeContact`
--
ALTER TABLE `cooperativeContact`
  MODIFY `contactID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `cooperativeProductionDetails`
--
ALTER TABLE `cooperativeProductionDetails`
  MODIFY `cooperativeProductionDetailsID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cooperatives`
--
ALTER TABLE `cooperatives`
  MODIFY `cooperativeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `farmerAddressDetails`
--
ALTER TABLE `farmerAddressDetails`
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `farmerAffiliationDetails`
--
ALTER TABLE `farmerAffiliationDetails`
  MODIFY `farmerAffiliationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `farmerProductionDetails`
--
ALTER TABLE `farmerProductionDetails`
  MODIFY `productionDetailsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `farmers`
--
ALTER TABLE `farmers`
  MODIFY `farmerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `logins`
--
ALTER TABLE `logins`
  MODIFY `loginID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `nurseries`
--
ALTER TABLE `nurseries`
  MODIFY `nurseryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `nurseryAddressDetails`
--
ALTER TABLE `nurseryAddressDetails`
  MODIFY `nurseryAddressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `nurseryCoffeeDetails`
--
ALTER TABLE `nurseryCoffeeDetails`
  MODIFY `nurseryCoffeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `nurseryContactDetails`
--
ALTER TABLE `nurseryContactDetails`
  MODIFY `nurseryContactID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `processorAddressDetails`
--
ALTER TABLE `processorAddressDetails`
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `processorContactPerson`
--
ALTER TABLE `processorContactPerson`
  MODIFY `processorContactID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `processorProductionDetails`
--
ALTER TABLE `processorProductionDetails`
  MODIFY `processorProductionDetailID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `processors`
--
ALTER TABLE `processors`
  MODIFY `processorsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `processorSupplyDetails`
--
ALTER TABLE `processorSupplyDetails`
  MODIFY `supplyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pulperAddressDetails`
--
ALTER TABLE `pulperAddressDetails`
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pulperProductionDetails`
--
ALTER TABLE `pulperProductionDetails`
  MODIFY `pulperProductionDetailsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pulpers`
--
ALTER TABLE `pulpers`
  MODIFY `pulperID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `stakeholders`
--
ALTER TABLE `stakeholders`
  MODIFY `stakeholderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `affiliationDetails`
--
ALTER TABLE `affiliationDetails`
  ADD CONSTRAINT `affiliationDetails_ibfk_1` FOREIGN KEY (`pulperID`) REFERENCES `pulpers` (`pulperID`),
  ADD CONSTRAINT `affiliationDetails_ibfk_2` FOREIGN KEY (`cooperativeID`) REFERENCES `cooperatives` (`cooperativeID`);

--
-- Constraints for table `areaOfCultivation`
--
ALTER TABLE `areaOfCultivation`
  ADD CONSTRAINT `areaOfCultivation_ibfk_1` FOREIGN KEY (`coffeeID`) REFERENCES `coffee` (`coffeeID`);

--
-- Constraints for table `cafe`
--
ALTER TABLE `cafe`
  ADD CONSTRAINT `cafe_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `cafeAddress`
--
ALTER TABLE `cafeAddress`
  ADD CONSTRAINT `cafeAddress_ibfk_1` FOREIGN KEY (`cafeID`) REFERENCES `cafe` (`cafeID`);

--
-- Constraints for table `cafeContactPerson`
--
ALTER TABLE `cafeContactPerson`
  ADD CONSTRAINT `cafeContactPerson_ibfk_1` FOREIGN KEY (`cafeID`) REFERENCES `cafe` (`cafeID`);

--
-- Constraints for table `coffee`
--
ALTER TABLE `coffee`
  ADD CONSTRAINT `fk_login_id` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `coffeeAddressDetails`
--
ALTER TABLE `coffeeAddressDetails`
  ADD CONSTRAINT `coffeeAddressDetails_ibfk_1` FOREIGN KEY (`coffeeID`) REFERENCES `coffee` (`coffeeID`);

--
-- Constraints for table `coffeePlantDetails`
--
ALTER TABLE `coffeePlantDetails`
  ADD CONSTRAINT `coffeePlantDetails_ibfk_1` FOREIGN KEY (`nurseryID`) REFERENCES `nurseries` (`nurseryID`);

--
-- Constraints for table `coffeeProductionDetails`
--
ALTER TABLE `coffeeProductionDetails`
  ADD CONSTRAINT `coffeeProductionDetails_ibfk_1` FOREIGN KEY (`coffeeID`) REFERENCES `coffee` (`coffeeID`);

--
-- Constraints for table `contactPersonels`
--
ALTER TABLE `contactPersonels`
  ADD CONSTRAINT `contactPersonels_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `cooperativeAddress`
--
ALTER TABLE `cooperativeAddress`
  ADD CONSTRAINT `cooperativeAddress_ibfk_1` FOREIGN KEY (`cooperativeID`) REFERENCES `cooperatives` (`cooperativeID`);

--
-- Constraints for table `cooperativeAffiliationDetails`
--
ALTER TABLE `cooperativeAffiliationDetails`
  ADD CONSTRAINT `cooperativeAffiliationDetails_ibfk_1` FOREIGN KEY (`cooperativeID`) REFERENCES `cooperatives` (`cooperativeID`);

--
-- Constraints for table `cooperativeContact`
--
ALTER TABLE `cooperativeContact`
  ADD CONSTRAINT `cooperativeContact_ibfk_1` FOREIGN KEY (`cooperativeID`) REFERENCES `cooperatives` (`cooperativeID`);

--
-- Constraints for table `cooperatives`
--
ALTER TABLE `cooperatives`
  ADD CONSTRAINT `cooperatives_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `farmerAddressDetails`
--
ALTER TABLE `farmerAddressDetails`
  ADD CONSTRAINT `farmerAddressDetails_ibfk_1` FOREIGN KEY (`farmerID`) REFERENCES `farmers` (`farmerID`);

--
-- Constraints for table `farmerAffiliationDetails`
--
ALTER TABLE `farmerAffiliationDetails`
  ADD CONSTRAINT `farmerAffiliationDetails_ibfk_1` FOREIGN KEY (`farmerID`) REFERENCES `farmers` (`farmerID`);

--
-- Constraints for table `farmerProductionDetails`
--
ALTER TABLE `farmerProductionDetails`
  ADD CONSTRAINT `farmerProductionDetails_ibfk_1` FOREIGN KEY (`farmerID`) REFERENCES `farmers` (`farmerID`);

--
-- Constraints for table `farmers`
--
ALTER TABLE `farmers`
  ADD CONSTRAINT `farmers_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `nurseries`
--
ALTER TABLE `nurseries`
  ADD CONSTRAINT `nurseries_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `nurseryAddressDetails`
--
ALTER TABLE `nurseryAddressDetails`
  ADD CONSTRAINT `nurseryAddressDetails_ibfk_1` FOREIGN KEY (`nurseryID`) REFERENCES `nurseries` (`nurseryID`);

--
-- Constraints for table `nurseryCoffeeDetails`
--
ALTER TABLE `nurseryCoffeeDetails`
  ADD CONSTRAINT `nurseryCoffeeDetails_ibfk_1` FOREIGN KEY (`nurseryID`) REFERENCES `nurseries` (`nurseryID`);

--
-- Constraints for table `nurseryContactDetails`
--
ALTER TABLE `nurseryContactDetails`
  ADD CONSTRAINT `nurseryContactDetails_ibfk_1` FOREIGN KEY (`nurseryID`) REFERENCES `nurseries` (`nurseryID`);

--
-- Constraints for table `processorAddressDetails`
--
ALTER TABLE `processorAddressDetails`
  ADD CONSTRAINT `processorAddressDetails_ibfk_1` FOREIGN KEY (`processorsID`) REFERENCES `processors` (`processorsID`);

--
-- Constraints for table `processorProductionDetails`
--
ALTER TABLE `processorProductionDetails`
  ADD CONSTRAINT `processorProductionDetails_ibfk_1` FOREIGN KEY (`processorsID`) REFERENCES `processors` (`processorsID`);

--
-- Constraints for table `processors`
--
ALTER TABLE `processors`
  ADD CONSTRAINT `processors_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `processorSupplyDetails`
--
ALTER TABLE `processorSupplyDetails`
  ADD CONSTRAINT `processorSupplyDetails_ibfk_1` FOREIGN KEY (`processorsID`) REFERENCES `processors` (`processorsID`);

--
-- Constraints for table `pulperAddressDetails`
--
ALTER TABLE `pulperAddressDetails`
  ADD CONSTRAINT `pulperAddressDetails_ibfk_1` FOREIGN KEY (`pulperID`) REFERENCES `pulpers` (`pulperID`);

--
-- Constraints for table `pulperProductionDetails`
--
ALTER TABLE `pulperProductionDetails`
  ADD CONSTRAINT `pulperProductionDetails_ibfk_1` FOREIGN KEY (`pulperID`) REFERENCES `pulpers` (`pulperID`);

--
-- Constraints for table `pulpers`
--
ALTER TABLE `pulpers`
  ADD CONSTRAINT `pulpers_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);

--
-- Constraints for table `stakeholders`
--
ALTER TABLE `stakeholders`
  ADD CONSTRAINT `stakeholders_ibfk_1` FOREIGN KEY (`loginID`) REFERENCES `logins` (`loginID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
