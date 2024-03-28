import React from 'react'
import './../assets/css/Altaestudiantes.css'

const Altaestudiantes = () => {
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
                                <input className="form-control form-control-lg" type="number" placeholder="2020123" aria-label=".form-control-lg" />
                            </div>
                            <div className="container-control">
                                <input className="form-control form-control-lg" type="text" placeholder="Miguel Ángel Najera Pablo" aria-label=".form-control-lg example" />
                            </div>
                            <div className="container-control">
                                <input className="form-control form-control-lg" type="text" placeholder="Calle: Guzmán " aria-label=".form-control-lg example" />
                            </div>
                            <button className='btn btn-success form-control mt-3'>Guardar registro</button>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Altaestudiantes