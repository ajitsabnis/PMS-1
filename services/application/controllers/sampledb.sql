-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2015 at 08:15 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sampledb`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE IF NOT EXISTS `address` (
  `person_id` tinyint(10) NOT NULL,
  `at_post` varchar(50) COLLATE utf8_bin NOT NULL,
  `taluka` varchar(50) COLLATE utf8_bin NOT NULL,
  `district` varchar(50) COLLATE utf8_bin NOT NULL,
  `pincode` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`person_id`, `at_post`, `taluka`, `district`, `pincode`) VALUES
(1, 'Bavchi', 'Walwa', 'Sangli', 416316),
(2, 'Bavdhan', 'Mulshi', 'Pune', 411025),
(3, 'Pashan', 'Mulshi', 'Pune', 411022);

-- --------------------------------------------------------

--
-- Table structure for table `assign_role`
--

CREATE TABLE IF NOT EXISTS `assign_role` (
  `assign_role_id` int(5) NOT NULL AUTO_INCREMENT,
  `user_id` int(5) NOT NULL,
  `user_role_id` int(5) NOT NULL,
  PRIMARY KEY (`assign_role_id`),
  UNIQUE KEY `user_id` (`user_id`,`user_role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `assign_role`
--

INSERT INTO `assign_role` (`assign_role_id`, `user_id`, `user_role_id`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 2, 4),
(4, 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `city_master`
--

CREATE TABLE IF NOT EXISTS `city_master` (
  `city_id` int(5) NOT NULL AUTO_INCREMENT,
  `district_id` int(5) NOT NULL,
  `state_id` int(5) NOT NULL,
  `city_name` varchar(50) NOT NULL,
  PRIMARY KEY (`city_id`),
  KEY `district_id` (`district_id`,`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `contact_numbers`
--

CREATE TABLE IF NOT EXISTS `contact_numbers` (
  `person_id` tinyint(10) NOT NULL,
  `mobile_number` int(11) NOT NULL,
  `office_number` int(11) NOT NULL,
  `office_fax` int(12) NOT NULL,
  UNIQUE KEY `person_id` (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `contact_numbers`
--

INSERT INTO `contact_numbers` (`person_id`, `mobile_number`, `office_number`, `office_fax`) VALUES
(1, 2147483647, 202221234, 201237890),
(2, 2147483647, 202222456, 20274047),
(3, 2147483647, 202235670, 20364307);

-- --------------------------------------------------------

--
-- Table structure for table `district_master`
--

CREATE TABLE IF NOT EXISTS `district_master` (
  `district_id` int(5) NOT NULL AUTO_INCREMENT,
  `state_id` int(5) NOT NULL,
  `district_name` varchar(50) NOT NULL,
  PRIMARY KEY (`district_id`),
  KEY `state_id` (`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `flag_master`
--

CREATE TABLE IF NOT EXISTS `flag_master` (
  `flag_id` int(5) NOT NULL AUTO_INCREMENT,
  `flag_name` varchar(50) NOT NULL,
  `percent` decimal(10,2) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`flag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `generic_category`
--

CREATE TABLE IF NOT EXISTS `generic_category` (
  `generic_cate_id` int(5) NOT NULL AUTO_INCREMENT,
  `generic_cate` varchar(50) NOT NULL,
  PRIMARY KEY (`generic_cate_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `generic_category`
--

INSERT INTO `generic_category` (`generic_cate_id`, `generic_cate`) VALUES
(1, 'Instrument'),
(2, 'Faculty'),
(3, 'Exam Type'),
(4, 'Group'),
(5, 'Method'),
(6, 'Sample'),
(7, 'Staff Category');

-- --------------------------------------------------------

--
-- Table structure for table `generic_exam_type_master`
--

CREATE TABLE IF NOT EXISTS `generic_exam_type_master` (
  `generic_exam_type_id` int(5) NOT NULL AUTO_INCREMENT,
  `generic_exam_type_name` varchar(100) NOT NULL,
  `generic_category_id` int(5) NOT NULL,
  PRIMARY KEY (`generic_exam_type_id`),
  KEY `FK_generic_exam_type_master` (`generic_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `generic_faculty_master`
--

CREATE TABLE IF NOT EXISTS `generic_faculty_master` (
  `generic_faculty_id` int(5) NOT NULL AUTO_INCREMENT,
  `generic_faculty_name` varchar(100) NOT NULL,
  `generic_category_id` int(5) NOT NULL,
  PRIMARY KEY (`generic_faculty_id`),
  KEY `FK_generic_faculty_master` (`generic_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `generic_group_master`
--

CREATE TABLE IF NOT EXISTS `generic_group_master` (
  `generic_group_id` int(5) NOT NULL AUTO_INCREMENT,
  `generic_group_name` varchar(100) NOT NULL,
  `generic_category_id` int(5) NOT NULL,
  PRIMARY KEY (`generic_group_id`),
  KEY `FK_generic_group_master` (`generic_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `generic_instrument_master`
--

CREATE TABLE IF NOT EXISTS `generic_instrument_master` (
  `generic_instrument_id` int(5) NOT NULL AUTO_INCREMENT,
  `generic_instrument_name` varchar(100) NOT NULL,
  `generic_category_id` int(5) NOT NULL,
  PRIMARY KEY (`generic_instrument_id`),
  KEY `FK_generic_instrument_master` (`generic_category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `generic_instrument_master`
--

INSERT INTO `generic_instrument_master` (`generic_instrument_id`, `generic_instrument_name`, `generic_category_id`) VALUES
(2, 'instrument-1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `generic_method_master`
--

CREATE TABLE IF NOT EXISTS `generic_method_master` (
  `generic_method_id` int(5) NOT NULL AUTO_INCREMENT,
  `generic_method_name` varchar(100) NOT NULL,
  `generic_category_id` int(5) NOT NULL,
  PRIMARY KEY (`generic_method_id`),
  KEY `FK_generic_method_master` (`generic_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `generic_sample_master`
--

CREATE TABLE IF NOT EXISTS `generic_sample_master` (
  `generic_sample_id` int(5) NOT NULL AUTO_INCREMENT,
  `generic_sample_name` varchar(100) NOT NULL,
  `generic_category_id` int(5) NOT NULL,
  PRIMARY KEY (`generic_sample_id`),
  KEY `FK_generic_sample_master` (`generic_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `generic_staff_category_master`
--

CREATE TABLE IF NOT EXISTS `generic_staff_category_master` (
  `generic_staff_category_id` int(5) NOT NULL AUTO_INCREMENT,
  `generic_staff_category_name` varchar(100) NOT NULL,
  `generic_category_id` int(5) NOT NULL,
  PRIMARY KEY (`generic_staff_category_id`),
  KEY `FK_generic_staff_category_master` (`generic_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `hint_ques`
--

CREATE TABLE IF NOT EXISTS `hint_ques` (
  `hint_ques_id` int(5) NOT NULL AUTO_INCREMENT,
  `hint_ques` varchar(100) NOT NULL,
  PRIMARY KEY (`hint_ques_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE IF NOT EXISTS `module` (
  `module_id` int(5) NOT NULL AUTO_INCREMENT,
  `module_name` varchar(50) NOT NULL,
  PRIMARY KEY (`module_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`module_id`, `module_name`) VALUES
(1, 'test'),
(2, 'patient'),
(3, 'patient_workflow'),
(4, 'sample_collection'),
(5, 'sample_receive'),
(6, 'sample_reject');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `person_id` tinyint(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=4 ;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`person_id`, `first_name`, `last_name`) VALUES
(1, 'Pravin', 'Patil'),
(2, 'Vishnu', 'Tekale'),
(3, 'Ajit', 'Sabnis');

-- --------------------------------------------------------

--
-- Table structure for table `snippet_master`
--

CREATE TABLE IF NOT EXISTS `snippet_master` (
  `snippet_id` int(5) NOT NULL AUTO_INCREMENT,
  `short_code` varchar(10) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`snippet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `state_master`
--

CREATE TABLE IF NOT EXISTS `state_master` (
  `state_id` int(5) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(50) NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=72 ;

--
-- Dumping data for table `state_master`
--

INSERT INTO `state_master` (`state_id`, `state_name`) VALUES
(1, 'ANDAMAN AND NICOBAR ISLANDS'),
(2, 'ANDHRA PRADESH'),
(3, 'ARUNACHAL PRADESH'),
(4, 'ASSAM'),
(5, 'BIHAR'),
(6, 'CHANDIGARH'),
(7, 'CHHATISGARH'),
(8, 'DADRA & NAGAR HAVELI'),
(9, 'DAMAN & DIU'),
(10, 'DELHI'),
(11, 'GOA'),
(12, 'GUJARAT'),
(13, 'HARYANA'),
(14, 'HIMACHAL PRADESH'),
(15, 'JAMMU AND KASHMIR'),
(16, 'JHARKHAND'),
(17, 'KARNATAKA'),
(18, 'KERALA'),
(19, 'LAKSHADWEEP'),
(20, 'MADHYA PRADESH'),
(21, 'MAHARASHTRA'),
(22, 'MANIPUR'),
(23, 'MEGHALAYA'),
(24, 'MIZORAM'),
(25, 'NAGALAND'),
(26, 'ORISSA'),
(27, 'PONDICHERRY'),
(28, 'PUNJAB'),
(29, 'RAJASTHAN'),
(30, 'SIKKIM'),
(31, 'TAMIL NADU'),
(32, 'TRIPURA'),
(33, 'UTTAR PRADESH'),
(34, 'UTTARANCHAL'),
(35, 'WEST BENGAL');

-- --------------------------------------------------------

--
-- Table structure for table `test_detail_master`
--

CREATE TABLE IF NOT EXISTS `test_detail_master` (
  `test_detail_id` int(5) NOT NULL AUTO_INCREMENT,
  `test_id` int(5) NOT NULL,
  `test_exam_type` int(5) NOT NULL,
  `test_details` varchar(20) NOT NULL,
  `test_unit` varchar(10) NOT NULL,
  `test_display_order` int(5) NOT NULL,
  `test_min_ref` decimal(10,2) NOT NULL,
  `test_max_ref` decimal(10,2) NOT NULL,
  `patient_min_age` int(5) NOT NULL,
  `patient_max_age` int(5) NOT NULL,
  `patient_gender` text NOT NULL,
  PRIMARY KEY (`test_detail_id`),
  UNIQUE KEY `test_id` (`test_id`,`test_exam_type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_master`
--

CREATE TABLE IF NOT EXISTS `test_master` (
  `test_id` int(5) NOT NULL AUTO_INCREMENT,
  `test_name` varchar(50) NOT NULL,
  `test_heading` varchar(100) NOT NULL,
  `test_short_name` varchar(20) NOT NULL,
  `test_amount` decimal(10,2) NOT NULL,
  `test_remark` varchar(500) NOT NULL,
  `flag` int(5) NOT NULL,
  `method` int(5) NOT NULL,
  `sample` int(5) NOT NULL,
  `instrumernt` int(5) NOT NULL,
  PRIMARY KEY (`test_id`),
  UNIQUE KEY `flag` (`flag`,`method`,`sample`),
  UNIQUE KEY `instrumernt` (`instrumernt`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(5) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`) VALUES
(1, 'Ajit'),
(2, 'Vishnu'),
(3, 'Pravin'),
(4, 'megha');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE IF NOT EXISTS `user_login` (
  `user_login_id` int(5) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `hint_ques_id` int(5) NOT NULL,
  `hint_ques_answ` varchar(100) NOT NULL,
  `created_by` int(5) NOT NULL,
  `Staff_id` int(5) NOT NULL,
  PRIMARY KEY (`user_login_id`),
  KEY `hint_ques_id` (`hint_ques_id`,`created_by`,`Staff_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_model_access`
--

CREATE TABLE IF NOT EXISTS `user_model_access` (
  `user_model_access_id` int(5) NOT NULL AUTO_INCREMENT,
  `user_id` int(5) NOT NULL,
  `user_role_id` int(5) NOT NULL,
  `module` int(5) NOT NULL,
  `is_visible` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_model_access_id`),
  UNIQUE KEY `user_id` (`user_id`,`user_role_id`),
  UNIQUE KEY `module` (`module`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `user_model_access`
--

INSERT INTO `user_model_access` (`user_model_access_id`, `user_id`, `user_role_id`, `module`, `is_visible`) VALUES
(1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE IF NOT EXISTS `user_role` (
  `user_role_id` int(5) NOT NULL AUTO_INCREMENT,
  `user_role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`user_role_id`, `user_role_name`) VALUES
(1, 'admin'),
(2, 'receptionist'),
(3, 'technician'),
(4, 'pathologist');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `generic_exam_type_master`
--
ALTER TABLE `generic_exam_type_master`
  ADD CONSTRAINT `FK_generic_exam_type_master` FOREIGN KEY (`generic_category_id`) REFERENCES `generic_category` (`generic_cate_id`);

--
-- Constraints for table `generic_faculty_master`
--
ALTER TABLE `generic_faculty_master`
  ADD CONSTRAINT `FK_generic_faculty_master` FOREIGN KEY (`generic_category_id`) REFERENCES `generic_category` (`generic_cate_id`);

--
-- Constraints for table `generic_group_master`
--
ALTER TABLE `generic_group_master`
  ADD CONSTRAINT `FK_generic_group_master` FOREIGN KEY (`generic_category_id`) REFERENCES `generic_category` (`generic_cate_id`);

--
-- Constraints for table `generic_instrument_master`
--
ALTER TABLE `generic_instrument_master`
  ADD CONSTRAINT `FK_generic_instrument_master` FOREIGN KEY (`generic_category_id`) REFERENCES `generic_category` (`generic_cate_id`);

--
-- Constraints for table `generic_method_master`
--
ALTER TABLE `generic_method_master`
  ADD CONSTRAINT `FK_generic_method_master` FOREIGN KEY (`generic_category_id`) REFERENCES `generic_category` (`generic_cate_id`);

--
-- Constraints for table `generic_sample_master`
--
ALTER TABLE `generic_sample_master`
  ADD CONSTRAINT `FK_generic_sample_master` FOREIGN KEY (`generic_category_id`) REFERENCES `generic_category` (`generic_cate_id`);

--
-- Constraints for table `generic_staff_category_master`
--
ALTER TABLE `generic_staff_category_master`
  ADD CONSTRAINT `FK_generic_staff_category_master` FOREIGN KEY (`generic_category_id`) REFERENCES `generic_category` (`generic_cate_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
