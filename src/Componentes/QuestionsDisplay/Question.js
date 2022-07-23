import "./styles.css";
import React from 'react';
import showAns from "./assets/setinha.png";
export default function Question(props){
    let [questionContent, setQuestionContent] = React.useState(
        <div className="question">
            <p>Pergunta {props.number}</p>
            <ion-icon name="play-outline" onClick={() => renderQuestion()}></ion-icon>
        </div>
    );

    function renderQuestion(){
        setQuestionContent(
            <div className="render-question">
                <p>{props.question}</p>
                <img className="show-answer" src={showAns} alt="show answer" onClick={() => renderAnswer()}/>
            </div>
        )
    }

    function renderAnswer(){
        setQuestionContent(
            <div className="render-answer">
                <p>{props.answer}</p>
                <div className="answer-options">
                    <div className="option-not-remember"><p>Não lembrei</p></div>
                    <div className="option-almost-not-remember"><p>Quase não lembrei</p></div>
                    <div className="option-remember"><p>Zap!</p></div>
                </div>
            </div>
        )
    }

    return(
        <>
            {questionContent}
        </>
    )
}