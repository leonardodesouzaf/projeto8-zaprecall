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
                    <div className="option-not-remember" onClick={() => defineQuestion(1)}><p>Não lembrei</p></div>
                    <div className="option-almost-not-remember" onClick={() => defineQuestion(2)}><p>Quase não lembrei</p></div>
                    <div className="option-remember" onClick={() => defineQuestion(3)}><p>Zap!</p></div>
                </div>
            </div>
        )
    }

    function defineQuestion(option){
        if(option === 1){
            props.footer(1);
            setQuestionContent(
                <div className="question not-remember">
                    <p>Pergunta {props.number}</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            );
        }
        if(option === 2){
            props.footer(2);
            setQuestionContent(
                <div className="question almost-not-remember">
                    <p>Pergunta {props.number}</p>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            )
        }
        if(option === 3){
            props.footer(3);
            setQuestionContent(
                <div className="question remember">
                    <p>Pergunta {props.number}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            )
        }
    }

    return(
        <>
            {questionContent}
        </>
    )
}