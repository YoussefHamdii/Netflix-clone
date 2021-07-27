import NavigationBar from './NavigationBar';
import ShowRow from './ShowRow';
import axios from 'axios';
import Links from './Links';
import { useEffect, useState } from 'react';

function Home(){
    const [banner, setBanner] = useState({});
    const [horror, setHorror] = useState([]);
    const [action, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);

   async function fetchData(){
        const banner =  await axios.get(Links.netflix);
        setBanner(banner.data.results[1])

        const horror =  await axios.get(Links.horror);
        setHorror(horror.data.results);

        const action = await axios.get(Links.action); 
        setAction(action.data.results);

        const comedy = await axios.get(Links.comedy);
        setComedy(comedy.data.results);
    }

    useEffect(()=>
            fetchData()
    );

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
            <h2>Horror Movies</h2>
            <ShowRow data={horror}/>
            <h2>Action Movies</h2>
            <ShowRow data={action}/>
            <h2>Comedy Movies</h2>
            <ShowRow data={comedy}/>
        </div>
    )
}

export default Home;