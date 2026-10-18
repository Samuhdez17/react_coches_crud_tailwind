import React,{ Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Coche from './Coche';
import CrearCoche from './CrearCoche';

export default class Router extends Component {
    render() {
        function CocheElement() {
            const { idCoche } = useParams();
            return <Coche idCoche={idCoche} />;
        }
        
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="coche/:idCoche" element={<CocheElement/>} />
                    <Route path="crear_coche/" element={<CrearCoche/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}