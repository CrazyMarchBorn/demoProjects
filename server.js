// Importing necessary modules from npm .. 
const express = require('express')
const app = express()
const port = 8000
const bodyParser = require("body-parser");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// sending data as response .. 
const json_data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// defining routes to the application ... 
app.get('/',(req,res,next)=>{    
    res.status(201).json(json_data);    
});

app.get('/:number',(req,res,next)=>{
    const result = json_data.find((c) => c===parseInt(req.params.number));
    if(!result){return res.status(201).json(`number ${req.params.number} does not exist in data`);}
    res.status(201).json(result);
});

app.post('/',(req,res,next)=>{
    const result = json_data.find((c)=>c===parseInt(req.body.id));
    if(!result){json_data.push(result); return res.status(201).json({message:'created successfully'});}
    res.status(300).json({message:'number already defined in array'}); 
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))