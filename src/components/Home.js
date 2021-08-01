import NavigationBar from './NavigationBar';
import {Button} from 'react-bootstrap';
import ShowRow from './ShowRow';
import axios from 'axios';
import Links from './Links';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function Home(){
    const [banner, setBanner] = useState({});
    const [horror, setHorror] = useState([]);
    const [action, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);

   async function fetchData(){
        const banner =  await axios.get(Links.netflix);
        setBanner(banner.data.results[1]);

        const horror =  await axios.get(Links.horror);
        setHorror(horror.data.results);

        const action = await axios.get(Links.action); 
        setAction(action.data.results);

        const comedy = await axios.get(Links.comedy);
        setComedy(comedy.data.results);
    }

    useEffect(()=>
            fetchData(),[]
    );
    console.log(banner);
    return(
        <div className="home__container">
            <div className="home__banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <NavigationBar />
            <div className="banner__name">{banner.name}</div>
            <div className="banner__overview">{banner.overview}</div>
            <div className="banner__button">
            <Button variant="danger">PLAY</Button>
            <Button className="second__button" variant="outline-light">+ MY LIST</Button>
            </div>
            </div>

            <div className="homepage__partition">
            <h4>Horror Movies</h4>
            <ShowRow data={horror}/>
            </div>

            <div className="homepage__partition">
            <h4>Action Movies</h4>
            <ShowRow data={action}/>
            </div>

            <div className="homepage__partition comedy">
            <h4>Comedy Movies</h4>
            <ShowRow data={comedy}/>
            </div>

            <Footer />
        </div>
    )
}

export default Home;