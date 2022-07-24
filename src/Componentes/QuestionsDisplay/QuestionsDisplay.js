import "./styles.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo-pequeno.png";
import Question from "./Question";
import React from 'react';
import Footer from "./Footer";

export default function QuestionsDisplay(){
    const questionData = [
        {question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
        {question:"O React é ...", answer:"Uma biblioteca JavaScript para construção de interfaces"},
        {question:"Componentes devem iniciar com ...", answer:"Letra maiúscula"},
        {question:"Podemos colocar ... dentro do JSX", answer:"Expressões"},
        {question:"O ReactDOM nos ajuda ...", answer:"Interagindo com a DOM para colocar componentes React na mesma"},
        {question:"Usamos o npm para ...", answer:"Gerenciar os pacotes necessários e suas dependências"},
        {question:"Usamos props para ...", answer:"Passar diferentes informações para componentes "},
        {question:"Usamos estado (state) para ...", answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ];
    questionData.sort(() => Math.random() - 0.5);
    let [footerType, setFooterType] = React.useState(0);
    let questionProps = questionData.map((question,index) => <Question key={index} number={index+1} question={question.question} answer={question.answer} footer={setFooterType}/>);
    return(
        <div className="questions-display">
            <div className="questions-logo-title">
                <img src={logo} alt='logo'></img>
                <p>ZapRecall</p>
            </div>
            {questionProps}
            <Footer type={footerType}/>
        </div>
    )
}