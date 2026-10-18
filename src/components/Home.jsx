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
        redireccionar: null
    }

    comunicacionEliminarEditar = async (statusEliminar, actualizar) => {
        this.setState({
            eliminar: statusEliminar,
            editar: statusEliminar,
            cocheSeleccionado: '',
            coche: null,
            redireccionar: null
        })

        if (actualizar) await this.cargarCoches()
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
        if (this.props.actualizar === 'true') {
            await this.cargarCoches()

        } else {
            console.log('cargando coches desde global');
            this.setState({
                coches: Global.coches
            })
        }
    }

    render() {
        if (this.state.redireccionar)
            return <Navigate to={this.state.redireccionar} replace/>

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
