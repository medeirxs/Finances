import "./style.css"

export default function WalletCard(props){
    return(
        <div className="wallet">
            <div id="top">
                <span>{props.title}</span>
                <span></span>
            </div>
            <div id="bot">
                <span>${props.money}</span>
            </div>
        </div>
    )
}