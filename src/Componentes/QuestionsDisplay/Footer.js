import FooterIcon from "./FooterIcon";
import React from 'react';

export default function Footer(props){
    let [footerIcons, setFooterIcons] = React.useState([]);
    let [iconClass, setIconClass] = React.useState([]);
    if(props.type === 1){
        footerIcons.push("close-circle");
        iconClass.push("not-remember");
    }
    if(props.type === 2){
        footerIcons.push("help-circle");
        iconClass.push("almost-not-remember");
    }
    if(props.type === 3){
        footerIcons.push("checkmark-circle");
        iconClass.push("remember");
    }
    console.log(footerIcons);
    return(
        <>
            <div className="footer-questions-display">
                <p>{footerIcons.length}/8 CONCLUÍDOS</p>
                <div className="footer-icons">
                    {footerIcons.map((iconName,index) => <FooterIcon key={index} number={index} iconClass={iconClass} iconName={iconName}/>)}
                </div>
            </div>
        </>
    )
}