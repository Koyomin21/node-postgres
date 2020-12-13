const {Pool,Client} = require('pg')
const dbconfig = require('../config/db.config')

const pool = new Pool({
    HOST:dbconfig.HOST,
    USER:dbconfig.USER,
    PASSWORD:dbconfig.PASSWORD,
    DB:dbconfig.DB,
    port:dbconfig.PORT,
})
pool.query("SELECT NOW()",(err,res)=>{
      if(err){
          console.log(err);
      }
  
      console.log(res.rows[0])
  })


const client = new Client({
    HOST:dbconfig.HOST,
    USER:dbconfig.USER,
    PASSWORD:dbconfig.PASSWORD,
    DB:dbconfig.DB,
    port:dbconfig.PORT,
})
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})

