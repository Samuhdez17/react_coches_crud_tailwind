import React,{ Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import CrearCoche from './CrearCoche';

export default class Router extends Component {
    render() {
        function HomeElement() {
            const { actualizar } = useParams();
            return <Home actualizar={actualizar} />
        }

        function CrearCocheElement() {
            const { navigate } = useParams();
            return <CrearCoche navigate={navigate} />
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="crear_coche/" element={<CrearCoche/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}