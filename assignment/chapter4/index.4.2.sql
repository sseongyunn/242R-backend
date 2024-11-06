CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(20) NOT NULL,
    `닉네임` VARCHAR(20) NOT NULL,
    `프로필 사진 링크` VARCHAR(100) NOT NULL,
    `프로필 상태 메시지` VARCHAR(100) NOT NULL,
    `탈퇴 여부` TINYINT(1) NOT NULL DEFAULT 0,
    `가입 날짜` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chanels` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `채널 이름` VARCHAR(20) NOT NULL,
    `채널을 생성한 사용자` INT NOT NULL,
    `채널의 링크` VARCHAR(100) NOT NULL,
    `최대 수용 인원` INT NOT NULL,
    `탈퇴 여부` TINYINT(1) NOT NULL DEFAULT 0,
    `채널 생성 날짜` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`채널을 생성한 사용자`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chats` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `내용` INT NOT NULL AUTO_INCREMENT,
    `작성자` INT NOT NULL,
    `채널` INT NOT NULL,
    `채팅 생성 날짜` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`작성자`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`채널`)
    REFERENCES `chanels`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `팔로우한 사람` INT NOT NULL,
    `팔로우되는 사람` INT NOT NULL,
    `팔로우 날짜` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`팔로우한 사람`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`팔로우되는 사람`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `차단을 한 사람` INT NOT NULL,
    `차단을 당한 사람` INT NOT NULL,
    `차단 날짜` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`차단을 한 사람`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`차단을 당한 사람`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;