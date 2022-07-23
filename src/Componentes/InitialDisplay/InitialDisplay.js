import React from 'react';
import "./styles.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function InitialDisplay(){
    return(
        <div className="initial-display">
            <img src={logo} alt='logo'/>
            ZapRecall
            <Link to="/QuestionsDisplay" className='link-button'>
                <button className="button-initial-display">Iniciar Recall!</button>
            </Link>
        </div>
    )
}
