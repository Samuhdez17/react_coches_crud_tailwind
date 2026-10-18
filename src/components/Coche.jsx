import React, { Component } from 'react';

export default class Coche extends Component {
    coche = this.props.coche

    render() {
        return (
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
                {/* Contenedor principal con flex para alinear imagen y texto */}
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                    {/* Imagen del coche */}
                    <div className="flex-shrink-0">
                        <img
                            src={this.coche.imagen}
                            alt="imagen coche"
                            className="w-48 h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                    </div>

                    {/* Información del coche */}
                    <div className="flex-1 space-y-3">
                        <h2 className="text-2xl font-bold text-gray-800">Marca: {this.coche.marca}</h2>
                        <h2 className="text-xl font-semibold text-gray-600">Modelo: {this.coche.modelo}</h2>
                        <h2 className="text-xl font-semibold text-gray-600">Conductor: {this.coche.conductor}</h2>
                    </div>
                </div>

                {/* Botón de editar */}
                <div className="flex mt-8 space-x-14">
                    <button
                        onClick={() => this.props.metodoPadre(true, false, this.coche)}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                    >
                        Editar Coche
                    </button>

                    <button
                        onClick={() => this.props.metodoPadre(false, true, this.coche)}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                    >
                        Eliminar Coche
                    </button>
                </div>
            </div>
        )
    }
}
