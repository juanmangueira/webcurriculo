import React from 'react';

import './style.css';

function ExperienciaEducacao(){
    return(
        <div className="estrutura">
            <div className="Containers">
                <div className="exp">
                    <h1>Experiência</h1>
                    <div className="exp1">
                        <p>DCE UniCEUB, Monitor bolsista</p> 
                        <p>Duração: Março, 2020 - Dezembro, 2020</p>
                        <p>Atuação: Monitor</p>
                    </div>
                    <div className="exp2">
                        <p>Labclass UniCEUB, Monitor voluntário</p>
                        <p>Duração: Julho, 2020 - Dezembro, 2020</p>
                        <p>Atuação: Aluno Tutor Google</p>
                    </div>
                    <div className="exp3">
                        <p>UniCEUB, Monitor voluntário</p>
                        <p>Duração: Julho, 2020 - Dezembro, 2020</p>
                        <p>Atuação: Monitor de Disciplina</p>
                    </div>
                </div>
                <div className="edu">
                    <h1>Educação</h1>
                    <div className="edu1">
                        <p>OBJETIVO - DF</p>
                        <p>Conclusão: 2019</p>
                        <p>Grau: Ensino Médio Completo</p>
                    </div>
                    <div className="edu2">
                        <p>UniCEUB - Direito</p>
                        <p>Duração: Fevereiro, 2020 - Dezembro, 2020</p>
                        <p>Grau: Ensino Superior Incompleto</p>
                    </div>
                    <div className="edu3">
                        <p>UnB - Engenharia de Software</p>
                        <p>Duração: Fevereiro, 2021 - Dezembro, 2026</p>
                        <p>Grau: Ensino Superior em Curso</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienciaEducacao;
