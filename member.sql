/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : blackcard

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2017-03-29 17:44:43
*/

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(50) DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `created_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
