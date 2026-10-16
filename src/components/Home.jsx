import React, { Component } from 'react';
import CocheService from '../services/CocheService';

export default class Home extends Component {
    service = new CocheService()

    state = {
        coches: [],
    }

    cargarCoches = async () => {
        const coches = await this.service.getCoches()
        this.setState({
            coches: coches
        })
    }

    componentDidMount = async () => {
        await this.cargarCoches()
    }

    render() {
        return (
            <div>
                <h1>Lista de coches</h1>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}
