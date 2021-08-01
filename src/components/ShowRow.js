import {Modal} from 'react-bootstrap'
import { useState } from 'react';


function ShowRow(props){
    const [modalShow, setModalShow] = useState(false);
    const [modalObject, setModalObject] = useState({});
    function setModal(obj){
        setModalShow(true);
        setModalObject(obj);
        console.log(obj);
    }

    return(

        <div className="trContainer">
             <Modal
             show={modalShow}
             onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Body>
        <h4>{modalObject.title}</h4>
        <img alt="show" className="modal__img" src={`https://image.tmdb.org/t/p/original/${modalObject.backdrop_path}`}/>
        <p>
          {modalObject.overview}
        </p>
      </Modal.Body>
    </Modal>
    
            
            {
        props.data.map((show)=>(
            <div className="card" onClick={()=> setModal(show)} style={{backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${show.backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
        
        </div>
        ))}
        </div>
    )
}

export default ShowRow;