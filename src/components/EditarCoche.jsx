import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class EditarCoche extends Component {
    render() {
        return (
            <div>
                <h1>EDITAR</h1>
                <button onClick={() => {
                    this.props.metodoPadre(false)
                }} >
                    volver
                </button>
            </div>
        );
    }
}
