import React, { Component } from 'react';
import CocheService from '../services/CocheService';
import EditarCoche from './EditarCoche';

export default class Coche extends Component {
    service = new CocheService()

    state = {
        coche: '',
        editar: false,
    }

    comunicacionEditar = (statusEditar) => {
        this.setState({
            editar: statusEditar
        })
    }
    
    componentDidMount = async () => {
        try {
            const coche = await this.service.getCoche(this.props.idCoche)
            
            this.setState({
                coche: coche
            })
        } catch (error) {
            throw error
        }

    }

    render() {
        if (this.state.editar)
            return(
                <EditarCoche metodoPadre={this.comunicacionEditar}/>
            )

        else
            return (
                <div key={this.state.coche.idCoche}>
                    <img src={this.state.coche.imagen} alt="imagen coche" 
                    style={{ width: '300px', height: '200px' }}
                    />
                    <h2>Marca: {this.state.coche.marca}</h2>
                    <h2>Modelo: {this.state.coche.modelo}</h2>
                    <h2>Conductor: {this.state.coche.conductor}</h2>
                    <button onClick={ () => {
                        this.setState({
                            editar: true
                        })
                    }}
                    >
                        editar
                    </button>
                </div>
            )
    }
}
