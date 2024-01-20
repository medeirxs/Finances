import "./style.css"

export default function Button(props){
    return(
        <div id="btn">
            <span>{props.title}</span>
        </div>
    )
}