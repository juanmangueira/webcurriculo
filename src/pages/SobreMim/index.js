import React from 'react';
import './style.css';

import Eu_inteiro from '../assets/Eu_inteiro.jpg'
import i_in from '../assets/linkedin.png'
import i_git from '../assets/github.png'
import i_fb from '../assets/facebook.png'
import i_inst from '../assets/instagram.png'

function SobreMim(){
    return(
        <div className="estrutura">
                <div className="titulo"><h1>Sobre Mim</h1></div>
            <div className="card">
                <div className="Eu_int">
                    <img src={Eu_inteiro} alt="imgEu" width="340" height="440"/>
                </div>
                <ul> 
                    <li className="b1">
                        <p><b>Idade:</b> 19 anos</p>
                    </li>
                
                    <li className="b2">
                        <p><b>Curso:</b> Engenharia de Software</p>
                    </li>

                    <li className="b3">
                        <p><b>Endereço:</b> Pau Brasil, 18. Apto 2207B. AC-DF</p>
                    </li>

                    <li className="b4">
                        <p><b>CEP:</b> 71.926-000</p>
                    </li>

                    <li className="b5">
                        <p><b>Telefone:</b> (61) 9 8365-4753</p>
                    </li>

                    <li className="b6">
                        <p><b>E-mail:</b> d.juan.alves@gmail.com</p>
                    </li>

                    <li className="icons">
                        <a href="https://www.linkedin.com/in/juan-mangueira-alves-9379bb163/"><img src={i_in} alt="iin" width="40" height="40"/></a>
                        <a href="https://github.com/BlyBR"><img src={i_git} alt="igit" width="40" height="40"/></a>
                        <a href="https://www.facebook.com/profile.php?id=100003505258495"><img src={i_fb} alt="ifb" width="40" height="40"/></a>
                        <a href="https://www.instagram.com/juan_malves/"><img src={i_inst} alt="iinst" width="40" height="40"/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SobreMim;
