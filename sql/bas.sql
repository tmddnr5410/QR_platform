#mysql -u root -p -h localhost
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


CREATE TABLE Company(
    id int NOT NULL AUTO_INCREMENT,
    cpnid varchar(30) NOT NULL,
    name varchar(30) NOT NULL,
    psword varchar(30) NOT NULL,
    intro text,
    in_date datetime DEFAULT current_timestamp,

    PRIMARY KEY (id)
);

INSERT INTO Company(cpnid,name,psword,intro)
    values("ys","연세대학교","123","연세대학교는 대한민국의 세계적인 명문 사립 대학교로, 1885년 설립되었습니다. 국제적 수준의 교육과 연구를 지향하여 다양한 학문 분야에서 우수한 교육 프로그램을 제공하고 있습니다. 서울의 신촌에 위치하며, 학문과 문화가 공존하는 환경에서 다양한 경험을 제공합니다"),
    ("ss","삼성 SDS","123","삼성 SDS는 삼성그룹의 일원으로, 1999년 설립된 글로벌 IT 및 디지털 솔루션 기업입니다. 기업과 정부, 공공기관 등에 첨단 기술과 서비스를 제공하여 디지털 혁신을 선도합니다. 빅데이터, 인공지능, 클라우드 컴퓨팅 등 다양한 분야에서 혁신적인 솔루션을 제공하며 세계적으로 인정받고 있습니다."),
    ("ka","카카오 택시","1234","카카오 택시는 한국의 대표적인 모빌리티 플랫폼 기업으로, 2015년에 서비스를 시작하여 빠르고 편리한 택시 호출 서비스를 제공하고 있습니다. 실시간 위치 추적과 편리한 결제 시스템을 통해 사용자들에게 안전하고 편안한 이동 경험을 제공합니다. 지속적인 혁신과 서비스 개선으로 많은 사랑을 받고 있습니다"),
    ("be","배스핀 글로벌","1w3","배스핀 글로벌은 글로벌 소프트웨어 개발 및 IT 컨설팅 회사로, 혁신적인 IT 솔루션을 제공하여 기업들의 성장을 지원합니다. 다양한 산업 분야에서 경험과 전문지식을 바탕으로 고객 맞춤형 솔루션을 개발하고 있으며, 글로벌 시장에서 경쟁력을 유지하고 성공적인 비즈니스를 구축하는데 기여하고 있습니다."),
    ("jo","좋좋소","12e","중소기업에 취직한 29세 사회 초년생 조충범을 주인공으로 한 부산표 웹 드라마 '좋좋소'는 중소기업 직원들의 공감을 일으키며 중소기업 현실 고증 끝판왕이라는 반응을 얻으며 흥행했다.");

CREATE TABLE visithistory(
    id int NOT NULL AUTO_INCREMENT,
    uid varchar(30) NOT NULL,
    cpnid varchar(30) NOT NULL,
    in_date datetime DEFAULT current_timestamp,

    PRIMARY KEY (id)
);

INSERT INTO visithistory(uid,cpnid)
    values("lls","ys");



#mysql -u root -p -h localhost

desc users;
select * from users;
