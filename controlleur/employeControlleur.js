const Employe=require('../models/employeModule');

const addEmploye = async (req,res)=>{
try {
    const employe=await Employe.create(req.body);
    res.status(200).json(employe);
} catch (e) {
    console.log('error:',e);
    res.status(500).json({message:e.message})
}
};

const getEmploye = async (req,res)=>{
    try {
 const employes=await Employe.find({});
 res.status(200).json(employes);

    } catch (error) {
        console.log('error:',e);
    res.status(500).json({message:e.message})
    }
}


const getEmployebyId = async (req,res)=>{
    try {
        const {id}=req.params;
 const employes=await Employe.findById(id);
 res.status(200).json(employes);
    } catch (error) {
        console.log('error:',e);
    res.status(500).json({message:e.message})
    }
}

const deleteEmploye = async (req,res)=>{
    try {
        const {id}=req.params;
 const employes=await Employe.findByIdAndDelete(id);
 if(!employes){
    res.status(404).json({
        message:'Employe not found '
    })
 }
 res.status(200).json({message:'successful'});
    } catch (error) {
        console.log('error:',e);
    res.status(500).json({message:e.message})
    }
}
const updateEmploye = async (req,res)=>{
    try {
        const {id}=req.params;
 const employes=await Employe.findByIdAndUpdate(id,req.body);
 if(!employes){
    res.status(404).json({
        message:'Employe not found '
    })
 }
 const epmloyeUpdate=await Employe.findById(id);
 res.status(200).json(epmloyeUpdate);
    } catch (error) {
        console.log('error:',e);
    res.status(500).json({message:e.message})
    }
}
module.exports= {
    addEmploye,
    getEmploye,
    getEmployebyId,
    deleteEmploye,
    updateEmploye
}