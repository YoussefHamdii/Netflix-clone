import myVid from '../1.mp4';
import { useEffect, useState } from 'react';
import {Redirect} from 'react-router';

function Landing (){
    const [redirect, setRedirect] = useState(false);

  useEffect(()=>{
    setTimeout(()=> setRedirect(true),3500);
  });

  return (
    <div className="App">
      <video autoPlay muted className="myVideo">
        <source src={myVid} type="video/mp4"/>
      </video>

      {redirect?<Redirect to="/home" />:""}
    </div>
  );
}

export default Landing;