
function Card(props) {
    return(
        <div className="card">
            <div className="card-content">
                <img src={`./images/${props.coverImg}`} 
                    className="card--image" 
                    alt={props.alt}/>
                <div className="card-intro">
                    <h1 className="card--location">{props.location}</h1>
                    <a href={props.map}    
                    className="card--maps">View on Google Maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
                <h4 className="description">{props.description}</h4>     
            </div>
        </div>
    )
}

export default Card