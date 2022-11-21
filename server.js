const express = require('express')
const app = express()
const Mylogger= function(req, res, next) {
    const date = new Date();
    const hour=date.getHours();
    const day=date.getDate();
    if (day>=0 && day<=4 && hour>=9 && hour<=17) {
        next();   
    }
    else {
    res.send("Sorry ! Server is available only between Monday and Friday from 9 to 17");
   }
}
const port =8080;

app.use(Mylogger);

// app.use(express.static('public'));
app.listen(port, (err)=> {
    err ? console.log(err) : console.log('the server is running on port 8080')
})
