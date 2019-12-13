const dbConnection = require('./dbConnection');

const connection = dbConnection();

connection.connect(function(err){
    if(err){
        console.log('err connecting '+ err.stack);
        return;
    }

    console.log(`connected as id ${connection.threadId}`)
})


setTimeout(() => {
    connection.end(function(err) {
        if(err){
            console.log(`connection end - err: ${err}`)
            return;
        }
        console.log('connected end')
      });
}, 1000);

/*connection.query('INSERT INTO <table> SET?',{
    title,
    news
});*/

//https://www.npmjs.com/package/mysql