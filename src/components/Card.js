
function Card(props) {
    return(
        // <div className="card">
        //     <div className="card-content">
        //         <img src={`./images/${props.coverImg}`} 
        //             className="card--image" 
        //             alt={props.alt}/>
        //         <div className="card-intro">
        //             <h1 className="card--location">{props.location}</h1>
        //             <a href={props.map}    
        //             className="card--maps">View on Google Maps</a>
        //         </div>
        //         <h2 className="title">{props.title}</h2>
        //         <h4 className="description">{props.description}</h4>     
        //     </div>
        // </div>


<div className="card">
    <img className="card--img" 
         src={`./images/${props.coverImg}`} 
         alt={props.alt} 
        />

    <div className="card--intro">
        <h2 className="card--location">{props.location}</h2>
        <a href={props.map}>
            View on Google Maps
        </a>

        <h3 className="card--title">{props.title}</h3>
        <p className="card--date">
            {props.dates}
        </p>
        <p className="description">{props.description}</p>
    </div>
</div>



    )
}

export default Card