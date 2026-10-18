import React, { Component } from 'react';
import CocheService from '../services/CocheService';
import EliminarCoche from './EliminarCoche';
import Coche from './Coche';
import EditarCoche from './EditarCoche';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class Home extends Component {
    service = new CocheService()

    state = {
        coches: [],
        cocheSeleccionado: '',
        eliminar: false,
        editar: false,
        actualizar: true,
    }

    comunicacionEliminarEditar = async (status, actualizar, accion) => {
        if (accion === 'editar')
            this.setState({
                editar: status,
            })
        else if (accion === 'eliminar')
        this.setState({
            eliminar: status,
        })

        if (actualizar)
            await this.cargarCoches()
        else {
            console.log('cargando coches desde global');
            this.setState({
                coches: Global.coches
            })
        }
    }
    
    comunicacionCoche = (editar, eliminar, coche) => {
        this.setState({
            editar: editar,
            eliminar: eliminar,
            coche: coche
        })
    }

    cargarCoches = async () => {
        console.log('haciendo peticion');
        
        const coches = await this.service.getCoches()
        this.setState({
            coches: coches
        })

        Global.coches = coches
    }

    componentDidMount = async () => {
        if (this.state.actualizar)
            await this.cargarCoches()
    }

    render() {
        if (this.state.eliminar)
            return(
                <EliminarCoche metodoPadre={this.comunicacionEliminarEditar} 
                id = {this.state.coche.idCoche}
                />
            )

        else if (this.state.editar)
            return(
                <EditarCoche metodoPadre={this.comunicacionEliminarEditar}
                coche = {this.state.coche}
                />
            )

        else 
            return (
                <ul>
                    {
                        this.state.coches.map((c,i) => {
                            return (
                                <li key={i}>
                                    <Coche metodoPadre = {this.comunicacionCoche} 
                                    coche = {c}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            )
    }
}
