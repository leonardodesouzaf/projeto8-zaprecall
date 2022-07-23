import "./styles.css";
export default function Question(props){
    return(
        <div className="question">
            <p>Pergunta {props.number}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}