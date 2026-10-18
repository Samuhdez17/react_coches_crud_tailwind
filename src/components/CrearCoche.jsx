import React, { Component } from 'react';
import CocheService from '../services/CocheService';
import { Navigate } from 'react-router-dom';

export default class CrearCoche extends Component {
    service = new CocheService()

    marcaRef = React.createRef()
    modeloRef = React.createRef()
    conductorRef = React.createRef()
    imagenRef = React.createRef()

    state = {
        status: false,
    }

    render() {
        if (this.state.status)
            return <Navigate to='/' />

        else
            return (
                <div>
                    <h1>Crea tu coche</h1>
                    <label>Marca</label>
                    <input type="text" ref={this.marcaRef}/>

                    <label>Modelo</label>
                    <input type="text" ref={this.modeloRef}/>

                    <label>Conductor</label>
                    <input type="text" ref={this.conductorRef}/>

                    <label>Imagen</label>
                    <input type="text" placeholder='url imagen' ref={this.imagenRef}/>

                    <button onClick={async () => {
                        const coche = {
                            marca:      this.marcaRef.current.value,
                            modelo:     this.modeloRef.current.value,
                            conductor:  this.conductorRef.current.value,
                            imagen:     this.imagenRef.current.value
                        }

                        await this.service.createCoche(coche)
                        this.setState({
                            status: true
                        })
                    }} >
                        Crear coche
                    </button>

                    <button onClick={() => {
                        this.setState({
                            status: true
                        })
                    }}>
                        Volver
                    </button>
                </div>
            );
    }
}
