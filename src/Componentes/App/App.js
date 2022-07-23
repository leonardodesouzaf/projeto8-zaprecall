import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialDisplay from "../InitialDisplay/InitialDisplay";
import QuestionsDisplay from "../QuestionsDisplay/QuestionsDisplay";

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitialDisplay />} />
                    <Route path="/QuestionsDisplay" element={<QuestionsDisplay />}/>
                </Routes>
		    </BrowserRouter>
        </>
    )
}