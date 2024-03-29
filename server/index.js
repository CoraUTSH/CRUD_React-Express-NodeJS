import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';

//Inicialización
const app=express();
const port='3000';
app.use(cors())
app.use(bodyParser.json())

//Establecer conexion Mysql
const db=mysql2.createConnection({
    host:"localhost",
    user:"cora",
    password:"Cora3022",
    database:"EscuelaUTSH"
});

//Comprobar conexion a BD
db.connect(function(error){
    if(error){
        console.log("Error al conectar con la BD")
    }else{
        console.log("Felicidades conexion a la BD éxitosa")
    }  
})

//Creamos el Servidor
app.listen(port,()=>{
    console.log(`Dirección servidor: http://localhost:3000`)
})

//---Inicio API---
app.post('/create',(req,res)=>{
    const matricula=req.body.matricula;
    const nombre=req.body.nombre;
    const direccion=req.body.direccion
    db.query("insert into Alumnos (Matricula, Nombre, Direccion) values(?,?,?)",[matricula,nombre,direccion]);
    res.send("success");
});

app.get('/alumnos',(req,resp)=>{
    db.query("select * from Alumnos",
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            resp.send(result)
        }
    });
});

