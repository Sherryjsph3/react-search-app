import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Stars } from 'react-bootstrap-icons';
import Martini from '../images/Apple-Martini.jpeg';
import Whiskey from '../images/whiskey-sour.jpeg';
import Gin from '../images/Pink-gin.webp';
import {useState} from 'react';



function Modals() {

  const [show, setShow] = useState(false);
  const [showWhiskey, setShowWhislkey] = useState(false);
  const [showGin, setShowGin] = useState(false);


  const handleClose = () => {
    setShow(false)
    setShowWhislkey(false)
    setShowGin(false)
  };
  const handleShowMartini = () => {
    setShow(true); 
  };
  const handleShowWhiskey= () => {
    setShowWhislkey(true)
  };
  const handleShowGin= () => {
    setShowGin(true)
  };
  
return(
<>

<footer>
<div className='drinks '> 

    <img 
        src={Martini}
        alt="apple martini" 
        className="drink martini"
        onClick={handleShowMartini}
    />
    <img 
        src={Whiskey}
        alt="whiskey sour" 
        className="drink whiskey"
        onClick={handleShowWhiskey}
    />
      <img 
        src={Gin}
        alt="pink gin" 
        className="drink gin"
        onClick={handleShowGin}
    />

   
</div>
</footer>
    <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
            <Modal.Title>Apple Martini</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
           
                <p>Mix in a shaker, then pour into a chilled glass. Garnish and serve.</p>
                <ul>
                    
                    <li>4.5 cl (3 parts) Vodka</li>
                    <li>31.5 cl (1 part) Apple schnapps / Calvados</li>
                    <li>1.5 cl (1 part) Cointreau</li>
                </ul>
                <Stars />
            </div> 
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
            
        </Modal.Footer>
    </Modal>

    <Modal show={showWhiskey} onHide={handleClose}> 
        <Modal.Header closeButton>
            <Modal.Title>Whiskey Sour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
           
                <p>Shake with ice. Strain into chilled glass, garnish and serve.</p>
                <ul>
                    
                    <li>4.5 cl (3 parts) bourbon whiskey</li>
                    <li>3 cl (2 parts) fresh lemon juice</li>
                    <li>1.5 cl (1 part) simple syrup</li>
                </ul>
                <Stars />
            </div> 
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
            
        </Modal.Footer>
    </Modal>

    <Modal show={showGin} onHide={handleClose}> 
        <Modal.Header closeButton>
            <Modal.Title>Pink Gin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
           
                <p>Chill the glass, then coat the inside with the Bitters. Add the gin very well chilled, garnish and serve.</p>
                <ul>
                    
                    <li>One part Plymouth gin</li>
                    <li>One Part Water</li>
                    <li>Dash of Angostura Bitters (adjust to taste)</li>
                </ul>
                <Stars />
            </div> 
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
            
        </Modal.Footer>
    </Modal>
      
</>
)
}


export default Modals;