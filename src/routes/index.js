import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Herder';

import Main from '../pages/Main';
import SobreMim from '../pages/SobreMim';
import ExperienciaEducacao from '../pages/ExperienciaEducacao';

function Routes (){
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/sobre-mim" component={SobreMim}/>
                <Route path="/experiencia" component={ExperienciaEducacao}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;