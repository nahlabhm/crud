const express=require('express');
const mongoose=require('mongoose');
const routerEmploye= require('./router/employeRoute');
const app =express();
app.use(express.json());

app.use('/api/v1/employe',routerEmploye);

app.listen(3000,()=>{
    console.log('connected');
});

mongoose.connect("mongodb+srv://nahlabenhajmabrouk:nahla2021@cluster0.b1azdz1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("success")
})
.catch((err)=>{
    console.log("error")
});