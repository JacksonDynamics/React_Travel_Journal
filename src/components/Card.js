
function Card(props) {
    return(
        <div className="card">
            <img src={`./images/${props.coverImg}`} 
                 className="card--image" 
                 alt={props.alt}/>
            <h1 className="card--location">{props.location}</h1>
            <a href="https://www.google.com/maps/place/Washington,+DC/@38.8930059,-77.0396292,14.62z/data=!4m5!3m4!1s0x89b7c6de5af6e45b:0xc2524522d4885d2a!8m2!3d38.9071923!4d-77.0368707"   className="card--maps">View on Google Maps</a>
            <h2 className="title">{props.title}</h2>
            <h4 className="description">{props.description}</h4>
        </div>
    )
}

export default Card