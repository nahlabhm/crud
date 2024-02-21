
const mongoose=require('mongoose');

const EmployeeShema=mongoose.Schema({
    name:{
        type:String
    },
    position:{
        type:String
    },
    office:{
        type:String
    },
    price:{
        type:Number
    }
});

const Employe = mongoose.model("Employe",EmployeeShema);
module.exports=Employe;