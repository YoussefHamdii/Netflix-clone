import NavigationBar from './NavigationBar';
import axios from 'axios';
import BaseUrl from './BaseUrl';
import { useEffect, useState } from 'react';

function Home(){
    const [banner, setBanner] = useState({});

    useEffect(()=>
            axios.get(`${BaseUrl}discover/tv?api_key=c812123b0f6e4ebc8cdcbaa79883e00f&with_networks=213`)
            .then((response) => setBanner(response.data.results[1]))
    );

    console.log(banner)
    return(
        <div className="home__container">
            <div className="home__banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,
                //backgroundPosition: "center center"
            }}>
            <NavigationBar />
            <div className="banner__name">{banner.name}</div>
            <div className="banner__overview">{banner.overview}</div>
            </div>
        </div>
    )
}

export default Home;