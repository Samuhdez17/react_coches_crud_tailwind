import React,{ Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Coche from './Coche';

export default class Router extends Component {
    render() {
        function CocheElement() {
            const { id } = useParams();
            return <Coche id={id} />;
        }
        
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/coche/:id" element={<CocheElement/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}