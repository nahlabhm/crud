const {Router}=require('express');
const controlleur=require('../controlleur/employeControlleur');
const router = Router();

router.post('/add',controlleur.addEmploye);
router.get('/',controlleur.getEmploye);
router.get('/:id',controlleur.getEmployebyId);
router.delete('/delete/:id',controlleur.deleteEmploye);
router.put('/update/:id',controlleur.updateEmploye);

module.exports=router;