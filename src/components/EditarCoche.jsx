import React, { Component } from 'react';

export default class EditarCoche extends Component {
    render() {
        return (
            <div>
                <h1>EDITAR</h1>
                <h2>{this.props.coche.marca}</h2>
                <h2>{this.props.coche.modelo}</h2>
                <h2>{this.props.coche.conductor}</h2>

                <button onClick={() => {
                    this.props.metodoPadre(false, false)
                }} >
                    volver
                </button>

                <button onClick={() => {
                    this.props.metodoPadre(false, true)
                }} >
                    aplicar cambios
                </button>
            </div>
        );
    }
}
