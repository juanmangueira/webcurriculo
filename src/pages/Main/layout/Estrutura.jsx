import './Estrutura.css';
import Eu from '../../assets/Eu1.jpg';
import React from 'react';

export default () =>
    <div className="Estrutura">
        <div className="retansuperior">
            <div className="titulo">
                <h1>Juan Mangueira Alves</h1>
            </div>
            <div className="subtitulo">
                <h2>Trainee - 1/2021</h2>
            </div>
        </div>
        <div className="Eu">
            <img src={Eu} alt="imgEu" width="439" height="395"/>
        </div>
        <div className="retaninferior">
            <div className="texto">
                <p>Um pequeno gafanhoto curioso. Fascinado por conhecimento diversificados, sou um rapaz sempre disposto a novas aventuras e aprendizados. Em uma palavra, inovação.
                </p>
            </div>
        </div>
    </div>