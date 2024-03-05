import express from 'express';
import empleados from './routes/employees.routes.js'
import base from './routes/index.route.js'


const app=express();


app.use(express.json());
app.use('/api',empleados);
app.use(base);

app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoit not found'
    });
})

export default app;