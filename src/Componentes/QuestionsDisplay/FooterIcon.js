export default function FooterIcon(props){
    return(
        <div className={props.iconClass[props.number]}>
            <ion-icon name={props.iconName}></ion-icon>
        </div>
    )
}