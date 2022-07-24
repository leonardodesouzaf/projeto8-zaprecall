import FooterIcon from "./FooterIcon";
import React from 'react';
import party from "./assets/party.png";
import sad from "./assets/sad.png";

export default function Footer(props){
    const [footerIcons, setFooterIcons] = React.useState([]);
    const [iconClass, setIconClass] = React.useState([]);
    const [footerResultClassRight, setFooterResultClassRight] = React.useState("zap-result-right none");
    const [footerResultClassWrong, setFooterResultClassWrong] = React.useState("zap-result-wrong none");
    const [footerResultClassDiv, setFooterResultClassDiv] = React.useState("footer-result none");
    if(footerIcons.length < 8){
        if(props.type[0] === 1){
            footerIcons.push("close-circle");
            iconClass.push("not-remember");
        }
        if(props.type[0] === 2){
            footerIcons.push("help-circle");
            iconClass.push("almost-not-remember");
        }
        if(props.type[0] === 3){
            footerIcons.push("checkmark-circle");
            iconClass.push("remember");
        }
        if(footerIcons.length === 8){
            setFooterResultClassDiv("footer-result");
            const errors = iconClass.filter(counterErrors);
            if(errors.length != 0){
                setFooterResultClassWrong("zap-result-wrong");
            }else{
                setFooterResultClassRight("zap-result-right");
            }
        }
        function counterErrors (icon) {
            if (icon === "not-remember") {
                return true;
            }
        }
    }

    return(
        <>
            <div className={footerResultClassDiv}>
                <div className={footerResultClassRight}>
                    <div className="right-result-title">
                        <img src={party} alt="party face"/>
                        Parabéns!
                    </div>
                    <p>
                        Você não esqueceu de nenhum flashcard!
                    </p>
                </div>
                <div className={footerResultClassWrong}>
                    <div className="wrong-result-title">
                        <img src={sad} alt="sad face"/>
                        Putz...
                    </div>
                    <p> 
                        Ainda faltam alguns...
                        Mas não desanime!
                    </p>
                </div>
            </div>
            <div className="footer-questions-display">
                <p>{footerIcons.length}/8 CONCLUÍDOS</p>
                <div className="footer-icons">
                    {footerIcons.map((iconName,index) => <FooterIcon key={index} number={index} iconClass={iconClass} iconName={iconName}/>)}
                </div>
            </div>
        </>
    )
}