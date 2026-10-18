import React,{ Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import CrearCoche from './CrearCoche';

export default class Router extends Component {
    render() {
        function HomeElement() {
            const { actualizar } = useParams();
            return <Home key={actualizar || 'home'} actualizar={actualizar} />
        }
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/:actualizar?" element={<HomeElement/>} />
                    <Route path="crear_coche/" element={<CrearCoche/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}