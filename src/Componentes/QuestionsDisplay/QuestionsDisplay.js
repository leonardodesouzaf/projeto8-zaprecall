import "./styles.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo-pequeno.png";
import Question from "../Question/Question";

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
    let questionProps = questionData.map(question => <Question question={question.question} answer={question.answer} />);
    return(
        <div className="questions-display">
            <Link to="/">Voltar</Link>
            <div className="questions-logo-title">
                <img src={logo}></img>
                <p>ZapRecall</p>
            </div>
            {questionProps}
        </div>
    )
}