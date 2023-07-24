CREATE DATABASE frdg;

CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    uid varchar(30) NOT NULL,
    name varchar(30) NOT NULL,
    psword varchar(30) NOT NULL,
    in_date datetime DEFAULT current_timestamp,

    PRIMARY KEY (id)
);


INSERT INTO users(uid,name,psword,affil,age)
    values("lls","김철수","123","연세대",42),
    ("asd","김강원","123","고려대",33),
    ("ees","박영희","1234","한림대",67),
    ("abv","홍재민","1w3","강원대",19),
    ("ewq","위송욱","12e","AIS연구실",25);

CREATE TABLE visithistory(
    id int NOT NULL AUTO_INCREMENT,
    uid varchar(30) NOT NULL,
    in_date datetime DEFAULT current_timestamp,

    PRIMARY KEY (id)
);

INSERT INTO visithistory(uid)
    values("lls");


CREATE TABLE allergies(
    id int NOT NULL AUTO_INCREMENT,
    algname varchar(200) NOT NULL,

    PRIMARY KEY (id)
);


INSERT INTO allergies(algname)
    values("땅콩"),
    ("계란"),
    ("돼지고기"),
    ("새우"),
    ("대두"),
    ("밀"),
    ("복숭아"),
    ("게"),
    ("우유");



CREATE TABLE userAlgs(
    id int NOT NULL AUTO_INCREMENT,
    algid int NOT NULL,
    uid int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (algid) REFERENCES allergies(id),
    FOREIGN KEY (uid) REFERENCES users(id)
);

INSERT INTO userAlgs(uid,algid)
    values(1,1),
    (1,3),
    (1,4),
    (1,5),
    (1,7),
    (2,3),
    (2,1),
    (2,4),
    (2,6),
    (3,1),
    (3,2),
    (3,3),
    (4,1),
    (4,2),
    (4,5),
    (4,6),
    (4,7),
    (4,8);







#mysql -u root -p -h localhost

use login_lecture;
desc users;
select * from users;
