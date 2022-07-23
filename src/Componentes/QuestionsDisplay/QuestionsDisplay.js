import "./styles.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo-pequeno.png";
import Question from "../Question/Question";

export default function QuestionsDisplay(){
    const questionData = [
        {},
        {},
    ];
    let questionProps = questionData.map(question => <Question userName={post.userName} />);
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