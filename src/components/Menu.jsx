import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                            <span className="font-bold text-xl text-gray-900">CRUD Coches</span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <NavLink 
                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-600 text-sm font-medium"
                            to="/true">
                                Home
                            </NavLink>

                            <NavLink 
                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-600 text-sm font-medium"
                            to="crear_coche/">
                                Crear coche
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
