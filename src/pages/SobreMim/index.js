import React from 'react';
import './style.css';

import Eu_inteiro from '../assets/Eu_inteiro.jpg'

function SobreMim(){
    return(
        <div className="estrutura">
            <div className="card">
                <div className="Eu_int">
                <img src={Eu_inteiro} alt="imgEu" width="340" height="400"/>
                </div>
            </div>
        </div>
    );
};

export default SobreMim;
