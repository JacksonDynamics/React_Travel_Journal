
function Card(props) {
    return(
        <div>
            <img src="./images/hero-bg.jpg" width="200px" alt=""/>
            <h1>{props.location}</h1></h1>
            <h2 className="title">{props.title}</h2>
            <h4 className="description">{props.description}</h4>
        </div>
    )
}

export default Card