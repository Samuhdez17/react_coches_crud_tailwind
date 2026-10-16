import React, { Component } from 'react';

export default class EliminarCoche extends Component {
    render() {
        return (
            <div>
                <h1>eliminar</h1>
                <button onClick={ () => {
                    this.props.metodoPadre(false)
                }}>
                    volver
                </button>
            </div>
        );
    }
}
