import React, { useState } from 'react';
import './../assets/css/Altaestudiantes.css';
import axios from 'axios';
//Crear endpoint del servidor
const endpoint="http://localhost:3000";
const Altaestudiantes = () => {
    //Creación de variables para los estados
    const [matricula,setMatricula]=useState();
    const [nombre,setNombre]=useState();
    const [direccion,setDireccion]=useState();
    const [alumnos, setAlumnos]=useState([]);

    //Crearemos función para agregar alumnos
    const AgregarAlumnos=()=>{
        axios.post(endpoint+"/create",{
            matricula:matricula,
            nombre:nombre,
            direccion:direccion
        })
        .then((response)=>{
            alert(response.data)
            ObtenerDatos()
        })
    }

    //Obtener los registros
    const ObtenerDatos=()=>{
        axios.get(endpoint+'/alumnos')
        .then((resp)=>{
            setAlumnos(resp.data);            
        });                        
    }
ObtenerDatos()
    return (
        <div className='container altaEstudiantes'>
            <div className="register-container">
                <div className="card">
                    <div className="card-header">
                        <h2>Registro de Estudiantes</h2>
                    </div>
                    <div className="row">
                        <div className="col-3 imagen-reg">
                            <img src="./../src/assets/imagenes/4.jpg" alt="" />
                        </div>
                        <div className="card-body col-9">
                            <div className="container-control">
                                <input className="form-control form-control-lg" onChange={(e)=>{setMatricula(e.target.value)}} type="number" placeholder="2020123" aria-label=".form-control-lg" />
                                
                            </div>
                            <div className="container-control">
                                <input className="form-control form-control-lg" onChange={(e)=>{setNombre(e.target.value)}} type="text" placeholder="Miguel Ángel Najera Pablo" aria-label=".form-control-lg example" />
                               
                            </div>
                            <div className="container-control">
                                <input className="form-control form-control-lg" type="text" onChange={(e)=>{setDireccion(e.target.value)}} placeholder="Calle: Guzmán " aria-label=".form-control-lg example" />
                               
                            </div>
                            <button onClick={AgregarAlumnos} className='btn btn-success form-control mt-3'>Guardar registro</button>
                        </div>
                    </div>

                </div>

            </div>


            <div className="container-data">
                <h3>Estudiantes registrados</h3>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                       { alumnos.map((alumno,key)=>{
                            return (
                                 <tr key={alumno.Matricula}>
                            <th scope="row">{alumno.Matricula}</th>
                            <td>{alumno.Nombre}</td>
                            <td>{alumno.Direccion}</td>
                            <td>@mdo</td>
                        </tr>
                            )
                        })}

                       
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Altaestudiantes