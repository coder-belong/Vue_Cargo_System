/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : cargo_system

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 23/06/2021 10:48:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cargo_info
-- ----------------------------
DROP TABLE IF EXISTS `cargo_info`;
CREATE TABLE `cargo_info`  (
  `id` int(11) NOT NULL,
  `cargo_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cargo_price` int(10) NULL DEFAULT NULL,
  `cargo_count` int(255) NULL DEFAULT NULL,
  `cargo_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cargo_info
-- ----------------------------
INSERT INTO `cargo_info` VALUES (1, '英短蓝猫', 2300, 9, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (2, '阿拉斯加', 3600, 23, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (3, '测试128', 88, 88, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (4, '360行车记录仪', 350, 7, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (5, '哈士奇', 2560, 84, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (6, '保赐利(botny) 防雾剂汽车', 76, 2, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (7, '	\r\n先科（SAST）二代彩屏胎压胎', 756, 99, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (8, '中华田园犬', 2560, 84, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (9, '日本柴犬', 2560, 84, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (10, '布偶猫', 2560, 84, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (11, '车载冰箱', 2560, 84, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (12, '车载冰箱', 2560, 84, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (13, '车载冰箱', 2560, 84, '2021-06-21 17:44:53');
INSERT INTO `cargo_info` VALUES (14, '联想电脑（小新air）', 3650, 999, '2021-06-23 09:42:32');
INSERT INTO `cargo_info` VALUES (15, '测试', 1, 2, '2021-06-23 10:13:15');

-- ----------------------------
-- Table structure for facility_info
-- ----------------------------
DROP TABLE IF EXISTS `facility_info`;
CREATE TABLE `facility_info`  (
  `id` int(11) NOT NULL,
  `facility_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `facility_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `facility_place` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `facility_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `facility_principal` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of facility_info
-- ----------------------------
INSERT INTO `facility_info` VALUES (1, '联想小新电脑', '18850454419', '福州闽侯', '33158742@qq.com', '黄磊');
INSERT INTO `facility_info` VALUES (2, '美的中央空调', '18850454416', '福建莆田', '33158742@qq.com', '黄三石');
INSERT INTO `facility_info` VALUES (3, '床上桌', '18850454411', '福建龙岩', '33158742@qq.com', '蓝耀春');
INSERT INTO `facility_info` VALUES (4, '员工宿舍床', '18850454412', '福建莆田', '33158742@qq.com', '科比');
INSERT INTO `facility_info` VALUES (5, '抽油烟机', '18850454413', '福州长乐', '33158742@qq.com', '詹姆斯');
INSERT INTO `facility_info` VALUES (6, '淋浴房', '18850454414', '福建漳州', '33158742@qq.com', '林宏辉');
INSERT INTO `facility_info` VALUES (7, '洗衣机', '18850454419', '福州长乐', '33158742@qq.com', '张源');
INSERT INTO `facility_info` VALUES (8, '冰箱', '110', '福建莆田', '33158742@q.com', '吴彦祖');
INSERT INTO `facility_info` VALUES (9, '松下智能马桶', '18850454415', '福建漳州', '33158742@qq.com', '詹泉林');
INSERT INTO `facility_info` VALUES (10, '电动智能窗帘', '18850454419', '福州苍山', '33158742@qq.com', '林必龙');

-- ----------------------------
-- Table structure for order_list
-- ----------------------------
DROP TABLE IF EXISTS `order_list`;
CREATE TABLE `order_list`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_number` char(99) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `order_pay` varchar(99) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `order_price` int(11) NULL DEFAULT NULL,
  `order_time` datetime(0) NULL DEFAULT NULL,
  `order_send` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_list
-- ----------------------------
INSERT INTO `order_list` VALUES (1, 'itcast-g7kmck725jaujgdts', '未付款', 40, '2021-06-21 20:05:54', '否');
INSERT INTO `order_list` VALUES (2, 'itcast-g7kmck725jaubds', '未付款', 960, '2021-06-21 20:05:54', '是');
INSERT INTO `order_list` VALUES (3, 'itcast-g7kmck725jauascaw', '未付款', 777, '2021-06-21 20:05:54', '否');
INSERT INTO `order_list` VALUES (4, 'itcast-g7kmck725jauaw', '已付款', 336, '2021-06-21 20:05:54', '是');
INSERT INTO `order_list` VALUES (5, 'itcast-g7kmck725jauqwerg', '已付款', 164, '2021-06-21 20:05:54', '否');
INSERT INTO `order_list` VALUES (6, 'itcast-g7kmck725jauabfyh', '未付款', 965, '2021-06-21 20:05:54', '否');
INSERT INTO `order_list` VALUES (7, 'itcast-g7kmck725jauabewgd', '未付款', 99, '2021-06-21 20:05:54', '是');
INSERT INTO `order_list` VALUES (8, 'itcast-g7kmck725jauyuio', '已付款', 88, '2021-06-21 20:05:54', '否');
INSERT INTO `order_list` VALUES (9, 'itcast-g7kmck725jasd', '未付款', 1440, '2021-06-21 20:05:54', '否');
INSERT INTO `order_list` VALUES (10, 'itcast-g7kmck725jasd', '已付款', 3370, '2021-06-21 20:05:54', '否');
INSERT INTO `order_list` VALUES (11, 'itcast-g7kmck725jasd', '未付款', 2640, '2021-06-21 20:05:54', '是');
INSERT INTO `order_list` VALUES (12, 'itcast-g7kmck725jasd', '已付款', 2850, '2021-06-21 20:05:54', '否');
INSERT INTO `order_list` VALUES (13, 'itcast-g7kmck725jasd', '未付款', 2730, '2021-06-21 20:05:54', '是');
INSERT INTO `order_list` VALUES (14, 'itcast-g7kmck725jasd', '未付款', 999, '2021-06-21 20:05:54', '是');
INSERT INTO `order_list` VALUES (15, 'itcast-g7kmck725jasd', '已付款', 1500, '2021-06-21 20:05:54', '是');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES (1, '测试1', '123456');
INSERT INTO `user_info` VALUES (2, '测试12', '12344');
INSERT INTO `user_info` VALUES (3, '测试123', '12344');
INSERT INTO `user_info` VALUES (4, '测试1235', '$2a$10$GKK44YZX6fx3mXdFXnO.XO9b/kn4pN5I6kLYCe2ClFOyweF7vbSba');
INSERT INTO `user_info` VALUES (6, 'admi', '$2a$10$/42RsQf66GMiExWjNnBLie2OUO4/jcOXdIJdFcsmW92e1e2GuNEj2');
INSERT INTO `user_info` VALUES (7, 'adm', '$2a$10$g5sWd17Qop3iNOZ6h8uIKOzjqMu3s6IdorGLtGrQod3JJEL6IGLyW');
INSERT INTO `user_info` VALUES (8, 'aaa', '$2a$10$gNPYSrBugoKK6OJ3Dpd0D.TDGmScplQCBWE8IDSe85IJPx.SxjhW2');
INSERT INTO `user_info` VALUES (9, 'rrr', '$2a$10$ReRP5UWbhE14lBnvocDTH.b4Z8cCahcTiB/9.wPBSDC9Pm/v9czaa');
INSERT INTO `user_info` VALUES (10, 'ooo', '$2a$10$mIz2ESo3/DGrejROlLckZOiNAdKZR1DnnBLgzbyaQ6e5FA/ii7A8a');
INSERT INTO `user_info` VALUES (11, 'ppp', '$2a$10$iAXUr9o9OowOwjsbdnSis.eXv6eko0Em7qU7JfXYKneT5auKrFcdq');
INSERT INTO `user_info` VALUES (12, 'adr', '$2a$10$4SoA3oLk2CJSuw2FuomQpuvk7Ve6HpAMPfzWTtAP4OXnSl0jIisk6');
INSERT INTO `user_info` VALUES (13, 'bbb', '$2a$10$KP/sT7Nig9eBkevH01Vms.//VKGlP5XKvFHNYQAdetgKll6afGRn.');
INSERT INTO `user_info` VALUES (14, 'lll', '$2a$10$PbpAF9w9.GuqmD/bsyIL6Or39WoGcQJd2hQEqqMA7eK55GW48qxd6');
INSERT INTO `user_info` VALUES (15, '888', '$2a$10$wbGQjphBBzlgLApnLdIsru5mxiPOLXGGvIZfUNX9EQ5SIWhr8/ao.');
INSERT INTO `user_info` VALUES (16, 'jjj', '$2a$10$UQtldcPCSRFVn6wW09/qaep8UEIIJNLSzjm3atO8IAuJL4bq00d7u');
INSERT INTO `user_info` VALUES (17, 'uuu', '$2a$10$gyp1646ZsleIl0MLShdmZ.cHmI7JmshY5CuuK1Hz.4w0NZOkg3AZ.');
INSERT INTO `user_info` VALUES (18, 'test', '$2a$10$Ad67uZAeHaqAndXA0/2.j.FS8tlKyuxp0vgREIUqOqXnH8517ACZm');
INSERT INTO `user_info` VALUES (19, 'test1', '$2a$10$jJoxIdRdxGkb9ho6anrNAeKP.IFRsvf09swxftu0qOHW5b1OTD2Xm');
INSERT INTO `user_info` VALUES (20, 'test5', '$2a$10$nIWQk6Y5dxNM.5z.tbzJFe4hipjz.a872RuvonnEnGPyC3//TUmgK');
INSERT INTO `user_info` VALUES (21, 'test4', '$2a$10$i1jkSj7UnIZAwlGT0fY6b.ip0y7zbHouSJt92FPZ/oGdEVXO0/3ty');
INSERT INTO `user_info` VALUES (22, 'yyy', '$2a$10$Ux4ocR6x5H5hDgO3IMaUCe63ss.nM18wcL9ACCAsXdvw3sZbiYZ6y');
INSERT INTO `user_info` VALUES (23, 'yyyt', '$2a$10$zdgHPM/FaRcv67JGKiyIvuqjPvCI6.3QJBpNiBusOXBg.bIsbsANi');
INSERT INTO `user_info` VALUES (24, 'nnn', '$2a$10$ld.i3ERQlICIKjQZFHbe.OIy2orUj3lI90gxNwMhFs.k0YNKfVXYW');
INSERT INTO `user_info` VALUES (25, '测试199', '$2a$10$zS3.GtAr742qhbp/mSnR3.6xdxXNNsbLgjgv2WKcYb0BXKh7aq9W2');
INSERT INTO `user_info` VALUES (26, 'lkl', '$2a$10$ahz4x02V36DStdDE/t1p1unAxlb5aJJEnSOBEz7n3.uD/krQuZlmy');
INSERT INTO `user_info` VALUES (27, '777', '$2a$10$jIitPnttPlwNY5SwzUSUo.buQbN42V4uxT0n0vNqG.ms8Fy4uv4im');
INSERT INTO `user_info` VALUES (28, 'jkl', '$2a$10$GVl8XHU2bjFoLD964IcPLOD20GyPOHgQ1SkIiXxbawaN5rNWvcjCq');
INSERT INTO `user_info` VALUES (29, 'asdw', '$2a$10$/0yFOtZiYk9E7ByEzpFJlet1nTVgThUR8UDrU7YanwjH6jjIKGMa2');
INSERT INTO `user_info` VALUES (30, '测试6', '$2a$10$VRD3DzZgNVm8oZyTtyqj0.bz72SGPaghNT1.Iljm32Sqcr8kXghUG');
INSERT INTO `user_info` VALUES (31, '测试11235', '$2a$10$v1pcXJt2fkS9I/Y9ORInkuN8n1692A.eWzo.um6yWHVxBHSo/68s.');
INSERT INTO `user_info` VALUES (32, '测试112357', '$2a$10$ZXUpIUOSwbWhm/9eo10KmOZsrROt6jkvmhcCtbaiKE38H9C3ndOly');
INSERT INTO `user_info` VALUES (33, '测试666', '$2a$10$NQ1RH9PQkYispcog/UHWe.8NKw1kCeW6IYlAVFz8sfcTwL2wHgKF6');
INSERT INTO `user_info` VALUES (34, '测试112356', '$2a$10$5u0UVfreJf7f2H2Sb7F.ketZEa1VxQdulmEEmnQlE8mRdbF.rmBL.');
INSERT INTO `user_info` VALUES (35, 'admin', '$2a$10$0dAasHuIG5dwSUxhWEMHmuxaPamZyl4eQnjSPGtRe58X0G85z41BO');

SET FOREIGN_KEY_CHECKS = 1;
