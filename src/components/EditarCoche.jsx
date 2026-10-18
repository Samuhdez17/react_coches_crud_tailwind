import React, { Component } from 'react';

export default class EditarCoche extends Component {
    marcaRef = React.createRef()
    modeloRef = React.createRef()
    conductorRef = React.createRef()
    imagenRef = React.createRef()

    render() {
        return (
            <div>
                <h1>Edicion de coche</h1>
                <label>Marca</label>
                <input type="text" defaultValue={this.props.coche.marca} ref={this.marcaRef}/>

                <label>Modelo</label>
                <input type="text" defaultValue={this.props.coche.modelo} ref={this.modeloRef}/>

                <label>Conductor</label>
                <input type="text" defaultValue={this.props.coche.conductor} ref={this.conductorRef}/>

                <label>Imagen</label>
                <input type="text" defaultValue={this.props.coche.imagen} placeholder='url imagen' ref={this.imagenRef}/>

                <div>
                    <button onClick={async () => {
                        const coche = {
                            marca:      this.marcaRef.current.value,
                            modelo:     this.modeloRef.current.value,
                            conductor:  this.conductorRef.current.value,
                            imagen:     this.imagenRef.current.value
                        }

                        await this.service.updateCoche(coche)
                        this.props.metodoPadre(false, true)
                    }} >
                        Aplicar cambios
                    </button>

                    <button onClick={() => {
                        this.props.metodoPadre(false, false)
                    }}>
                        Volver
                    </button>
                </div>
            </div>
        );
    }
}