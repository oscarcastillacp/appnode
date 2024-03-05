import {Router} from 'express'
import {ping} from '../controllers/index.contoller.js'
const router= Router();

router.get('/pin',ping);


router.get('/prueba',(req,res)=>{

    res.json("Soy la prueba");
});



export default router;