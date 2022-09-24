
function Card(props) {
    return(
        <div className="card">
            <img className="card--img" 
                src={`./images/${props.coverImg}`} 
                alt={props.alt} 
                />

            <div className="card--intro">
                <div className="card--heading">
                    <h2 className="card--location">
                        <i className="fa-sharp fa-solid fa-location-dot"></i>{props.location}
                    </h2>
                    <a className="card--location" href={props.map}>
                        View on Google Maps
                    </a>
                </div>
                <h3 className="card--title">{props.title}</h3>
                <p className="card--date">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="card--description">{props.description}</p>

            </div>
                
        </div>
    )
}

export default Card