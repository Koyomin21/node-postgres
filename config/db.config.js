module.exports = {
    HOST:"localhost",
    USER:"postgres",
    PASSWORD:"pass13",
    DB:"postgres",
    PORT:5432,
    dialect:"postgres",
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
};






// create table User(
// 	id int primary key,
// 	email varchar(70),
// 	fname varchar(50),
// 	lname varchar(50),
// 	pass varchar(100),
// 	age int,
	
// );

// insert into user(email,fname,lname)
// values('anuar12102001@gmail.com','Anuar','Borangaziyev'),
// ('ailachi@gmail.com','Elvira','Nugmanova');
