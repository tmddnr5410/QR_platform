CREATE DATABASE qr_platform;
use qr_platform;


CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    uid varchar(30) NOT NULL,
    name varchar(30) NOT NULL,
    psword varchar(30) NOT NULL,
    affil varchar(200) NOT NULL,
    age int NOT NULL,
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



#mysql -u root -p -h localhost

desc users;
select * from users;
