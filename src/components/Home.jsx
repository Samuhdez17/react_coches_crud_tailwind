import React, { Component } from 'react';
import CocheService from '../services/CocheService';
import EliminarCoche from './EliminarCoche';
import Coche from './Coche';
import EditarCoche from './EditarCoche';

export default class Home extends Component {
    service = new CocheService()

    state = {
        coches: [],
        cocheSeleccionado: '',
        eliminar: false,
        editar: false,
        actualizar: true,
    }

    comunicacionEliminar = (statusEliminar, actualizar) => {
        this.setState({
            eliminar: statusEliminar,
        })

        if (actualizar) 
            this.cargarCoches()
    }

    comunicacionEditar = (statusEditar, actualizar) => {
        this.setState({
            editar: statusEditar,
        })

        if (actualizar) 
            this.cargarCoches()
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
    }

    componentDidMount = async () => {
        if (this.state.actualizar) {
            await this.cargarCoches()
            this.setState({
                actualizar: false
            })

        } else 
            this.setState({
                actualizar: true
            })
    }

    render() {
        if (this.state.eliminar)
            return(
                <EliminarCoche metodoPadre={this.comunicacionEliminar}/>
            )

        else if (this.state.editar)
            return(
                <EditarCoche metodoPadre={this.comunicacionEditar}
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
                                    <Coche coche = {c} metodoPadre = {this.comunicacionCoche} 
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            )
    }
}
