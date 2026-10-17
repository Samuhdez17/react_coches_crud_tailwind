import React, { Component } from 'react';
import CocheService from '../services/CocheService';
import { NavLink } from 'react-router-dom';
import EliminarCoche from './EliminarCoche';

export default class Home extends Component {
    service = new CocheService()

    state = {
        coches: [],
        eliminar: false,
        actualizar: true,
    }

    comunicacionEliminar = (statusEliminar) => {
        this.setState({
            eliminar: statusEliminar
        })
    }

    cargarCoches = async () => {
        const coches = await this.service.getCoches()
        this.setState({
            coches: coches
        })
    }

    componentDidMount = async () => {
        this.state.actualizar ?
            await this.cargarCoches()
            :
            this.setState({
                actualizar: true
            })
    }

    render() {
        if (this.state.eliminar)
            return(
                <EliminarCoche metodoPadre={this.comunicacionEliminar}/>
            )

        else 
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>MARCA</th>
                                <th>MODELO</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.coches.map((c) => {
                                return (
                                    <tr key={c.idCoche}>
                                        <td>{c.marca}</td>
                                        <td>{c.modelo}</td>
                                        <td>
                                            <NavLink to={`/coche/${c.idCoche}`}
                                            >
                                                Ver detalles
                                            </NavLink>

                                            <button onClick={ () => {
                                                this.setState({
                                                    eliminar: true
                                                })
                                            }}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )
    }
}
