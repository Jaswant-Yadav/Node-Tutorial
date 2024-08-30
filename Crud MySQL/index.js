const connectDB = require('./config');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    connectDB.query("select * from employee", (err, result) => {
        if (err) {
            console.log("error in api")
        } else {
            resp.send(result);
        }
    })
});

app.post('/', (req, resp) => {
    const data = req.body;
    connectDB.query('INSERT INTO employee SET ?', data, (error, result, fields) => {
        if (error) throw error;
        resp.send(result);
    })
})

app.put('/:empID', (req, resp) => {
    const data = [req.body.empID,req.body.empName,req.body.empAge, req.body.empCity, req.params.empID];
    connectDB.query("UPDATE employee SET empID = ?, empName = ?, empAge = ?, empCity =? where empID = ?", data, (error, result, fields) => {
        if(error) throw error;
        resp.send(result); 
    })
})

app.delete('/:empID',(req,resp)=>{
    connectDB.query("DELETE FROM employee WHERE empID = "+ req.params.empID,(error,result)=>{
        if(error) throw error;
        resp.send(result);
    })
})

app.listen(4000);