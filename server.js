const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL as id:", db.threadId);
});

// //get method
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//QUESTION 1
// app.get('/data', (req,res) =>{
//     db.query('SELECT * FROM patients', (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error Retrieving data')
//         }else{
//             res.render('data', {results:results});
//         }
//     });
// });

//QUESTION 2
// app.get('/data', (req,res) =>{
//     db.query('SELECT * FROM providers', (err, results) => {
//     if (err) {
//         console.error(err);
//         res.status(500).send('Error Retrieving data')
//     }else{
//         res.render('data', {results:results});
//     }
// });
// });

//QUESTION 3
// app.get('/data', (req,res) =>{
//     db.query('SELECT * FROM patients', (err, results) => {
//     if (err) {
//         console.error(err);
//         res.status(500).send('Error Retrieving data')
//     }else{
//         res.render('data', {results:results});
//     }
// });
// });

//QUESTION 4
// app.get('/data', (req,res) =>{
//     db.query('SELECT * FROM providers', (err, results) => {
//     if (err) {
//         console.error(err);
//         res.status(500).send('Error Retrieving data')
//     }else{
//         res.render('data', {results:results});
//     }
// });
// });


app.get('/', (req, res) => {
    res.send('Connected successfully!!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
    console.log('Sending message to browser...');
});
