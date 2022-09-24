-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: fullstacklinkLei
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `textContent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Sonia Hintz','quidem','Dolorem consequatur hic autem cum earum ab alias. Excepturi fugiat ut sed dolore. Quidem explicabo et velit molestiae sed omnis. Unde necessitatibus nihil quod est sint rem. Necessitatibus amet enim quod et. Excepturi perferendis occaecati a saepe facere atque. Quod rerum magni autem aut reprehenderit nihil. Soluta dolores voluptatem voluptatum est sequi ut aliquid minima. Culpa nobis et fugiat accusamus. Repudiandae molestiae harum impedit. Natus repellendus tempora mollitia quam cumque. Quo rerum nesciunt mollitia ut dignissimos.','2022-09-21 22:33:53','2022-09-21 22:33:53'),(2,'Naomi Dickens','aspernatur','Enim veniam cum optio veniam. Nisi ipsa ab sed soluta cumque cupiditate. Aut quos optio assumenda voluptates. Doloremque sint est possimus ea et ipsum. Itaque dolore exercitationem nemo. Est sint est iusto omnis. Labore doloribus alias earum animi sit quam. Molestiae quae dolores iure aut dolor voluptas. Omnis sed excepturi nisi veritatis aut quia quaerat. Consequatur asperiores soluta quia odio blanditiis fugit distinctio. Distinctio consectetur doloremque rerum mollitia autem enim eius.','2022-09-21 22:33:53','2022-09-21 22:33:53'),(3,'Mr. Elliot Balistreri IV','laudantium','Delectus id rerum deleniti aut harum. Inventore ad libero ab cum numquam eos. Cumque quasi fuga vel. Quis ut nostrum similique tenetur a ab et. Corporis repellendus voluptas vero totam quo est. Iure et placeat aut. Odit nihil nesciunt voluptatem deserunt velit voluptatem. Occaecati quia libero consequuntur eos est. Minus aut aut necessitatibus dolores ut corrupti velit. Natus aut iure facere voluptatem itaque occaecati. Officiis provident quo fugit porro quod et unde. Incidunt repudiandae non nobis et itaque doloribus. Sit voluptatem rem unde delectus architecto facilis pariatur.','2022-09-21 22:33:53','2022-09-21 22:33:53'),(4,'Carol Rutherford','et','Maiores sed voluptas ea eos minus voluptatem qui. Ut qui minima amet voluptatem minima aut. Consectetur voluptate corrupti provident. Modi enim quam ea sed et numquam est. Minima ea id similique et non ipsum numquam. Dolorum sit officiis dolor iste quia ratione voluptas. Facilis corporis rerum laudantium quod dolore impedit eaque. Similique laudantium dolores accusamus ipsa assumenda ut voluptatibus. Et voluptatum similique aspernatur nemo quibusdam eum voluptas. Repellendus qui unde aperiam accusantium maxime.','2022-09-21 22:33:53','2022-09-21 22:33:53'),(5,'Bertrand Stracke','et','Omnis repellat illum eum quaerat fugiat facilis unde. Error ea quis amet eveniet qui voluptate. Expedita sunt nam voluptatem blanditiis voluptatem in nisi. Ratione qui voluptatem fugit dolorem distinctio. Aperiam in voluptatem qui. Veritatis id neque eius quia voluptas omnis. Blanditiis aut odio ea doloribus. Voluptatem et consequatur aperiam ea. Consequatur dolorem quasi fugiat mollitia. Qui ex repudiandae voluptates dolore rerum ut. Eaque iste voluptas soluta est earum quia sunt commodi.','2022-09-21 22:33:53','2022-09-21 22:33:53'),(9,'Teste','Post','Texto de teste','2022-09-22 00:15:05','2022-09-24 20:01:43'),(12,'Imagine Dragons','Post','Deu certo!','2022-09-23 08:51:01','2022-09-24 20:02:13'),(13,'Bach','Post','Diam donec adipiscing tristique risus nec feugiat in fermentum. Nunc mattis enim ut tellus elementum sagittis vitae et leo.','2022-09-23 08:55:08','2022-09-24 20:02:31'),(14,'Carla','Post','Diam donec adipiscing tristique risus nec feugiat in fermentum. Nunc mattis enim ut tellus elementum sagittis vitae et leo.','2022-09-23 08:56:21','2022-09-24 19:59:50'),(15,'Rodrigo','Artigo','Tempus imperdiet nulla malesuada pellentesque elit. Id diam maecenas ultricies mi eget mauris pharetra. Nibh tortor id aliquet lectus proin nibh nisl. Adipiscing bibendum est ultricies integer quis. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Dui accumsan sit amet nulla.','2022-09-23 08:58:15','2022-09-24 19:59:17'),(16,'Liliam','Post','Scelerisque in dictum non consectetur a erat. Semper viverra nam libero justo laoreet. Lobortis mattis aliquam faucibus purus in massa. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Placerat duis ultricies lacus sed turpis tincidunt id. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Eu lobortis elementum nibh tellus molestie nunc non blandit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit.','2022-09-23 09:21:48','2022-09-24 19:59:01'),(17,'Isadora','Post','Ac orci phasellus egestas tellus. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Ultrices neque ornare aenean euismod elementum nisi. Nec feugiat in fermentum posuere. Dui sapien eget mi proin sed libero enim.','2022-09-23 11:42:55','2022-09-24 19:58:37'),(18,'Thiago','Grupo','Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','2022-09-23 22:45:28','2022-09-24 19:57:46'),(20,'Gustavo','Post','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','2022-09-24 00:46:08','2022-09-24 19:57:19'),(21,'Selena Gomez','Post','This morning, Alice and her classmates were taught about the hibernation of animals during the cold winter. She was excited to go home so she could share the new learning with her little sister. After school, Alice played with her sister. She shared, “Bears are one of the animals that go into deep sleep. It is called hibernation. It is their special way to adapt to the season. Their body temperature drops and their heartbeat and breathing slows down. They do this to reserve their energy.” Her sister was amazed, “That’s amazing! You’re so smart, sister.” She responded, “Bears eat lots of food and store it, so they can use it slowly during their hibernation.” Alice added, “From now on, I will eat lots of food and store it, so I can sleep all day in','2022-09-24 01:04:20','2022-09-24 19:56:41'),(22,'Chico Buarque','Post','Texto bonito','2022-09-24 01:05:09','2022-09-24 01:05:09'),(23,'Mais um auutor','Artigo','Texto bonito','2022-09-24 04:03:11','2022-09-24 19:54:23');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-24 14:37:32
