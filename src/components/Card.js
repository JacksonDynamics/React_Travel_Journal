
function Card(props) {
    return(
        <div className="card">
            <img src={`./images/${props.coverImg}`} 
                 className="card--image" 
                 alt={props.alt}/>
            <h1 className="card--location">{props.location}</h1>
            <a href={props.map}    
               className="card--maps">View on Google Maps</a>
            <h2 className="title">{props.title}</h2>
            <h4 className="description">{props.description}</h4>


            <div className="card mb-3"></div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="./images/Salzburg.jpg" className="card--image img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card