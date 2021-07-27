

function ShowRow(props){
    return(

        <div className="trContainer">{
        props.data.map((show)=>(
            <div className="card" style={{backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${show.backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
        <div className="banner__name">{show.name}</div>
        </div>
        ))}
        </div>
    )
}

export default ShowRow;