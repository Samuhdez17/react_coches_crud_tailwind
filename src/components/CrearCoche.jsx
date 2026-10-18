import React, { Component } from 'react';
import CocheService from '../services/CocheService';
import { Navigate } from 'react-router-dom';

export default class CrearCoche extends Component {
    service = new CocheService()

    marcaRef = React.createRef()
    modeloRef = React.createRef()
    conductorRef = React.createRef()
    imagenRef = React.createRef()

    state = {
        status: false,
    }

    render() {
        if (this.state.status)
            return <Navigate to='/' />

        else
            return (
                <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Crea tu coche
                    </h1>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Marca
                            </label>
                            <input
                                type="text"
                                ref={this.marcaRef}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Modelo
                            </label>
                            <input
                                type="text"
                                ref={this.modeloRef}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Conductor
                            </label>
                            <input
                                type="text"
                                ref={this.conductorRef}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Imagen
                            </label>
                            <input
                                type="text"
                                placeholder='url imagen'
                                ref={this.imagenRef}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex space-x-3">
                        <button
                            onClick={async () => {
                                const coche = {
                                    marca:      this.marcaRef.current.value,
                                    modelo:     this.modeloRef.current.value,
                                    conductor:  this.conductorRef.current.value,
                                    imagen:     this.imagenRef.current.value
                                }

                                await this.service.createCoche(coche)
                                this.setState({
                                    status: true
                                })
                            }}
                            className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium"
                        >
                            Crear coche
                        </button>

                        <button
                            onClick={() => {
                                this.setState({
                                    status: true
                                })
                            }}
                            className="flex-1 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-all font-medium"
                        >
                            Volver
                        </button>
                    </div>
                </div>
            );
    }
}
