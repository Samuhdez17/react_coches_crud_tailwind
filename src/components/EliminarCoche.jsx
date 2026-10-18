import React, { Component } from 'react';
import CocheService from '../services/CocheService';

export default class EliminarCoche extends Component {
    service = new CocheService()

    render() {
        return (
            <div>
                <h1>Estas seguro de borrar el vehiculo?</h1>

                <button onClick={ async () => {
                    await this.service.deleteCoche(this.props.id)
                    this.props.metodoPadre(false, true)
                }}>
                    Confirmar
                </button>

                <button onClick={ () => {
                    this.props.metodoPadre(false, false)
                }}>
                    Cancelar
                </button>
            </div>
        );
    }
}
