import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Header(){
    return (
        <div className="cabecalho">
            <div className="container">
                <nav>
                    <Link to="/" className="home">Apresentação</Link>
                    <Link to="/sobre-mim" className="sobre">Sobre Mim</Link>
                    <Link to="/experiencia" className="exp">Experiência</Link>
                </nav>
            </div>
        </div>

    );
}

export default Header;