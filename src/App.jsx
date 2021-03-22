import React, { useState, useRef} from 'react';
import './App.css';
import {Container, Button, ResponsiveEmbed} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {
const [cartButtonClicked, setCartButtonClicked] = useState(false)
//const [cartButtonClicked, setCartButtonClicked] = useState(true)
const [vidPlaying, setVidPlaying] = useState(true)
const [showSideBar, setShowSideBar] = useState(false)
const vidRef = useRef(null)
const purchase = () => {toast.success("Item Purchased and on your way!", {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 1000,
  hideProgressBar: true,
});}

const push = () => {toast("Pushed, please check your phone!", {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 1000,
  hideProgressBar: true,
});}


return (
<div className="App">
  <Container fluid>
    <div className="Topmenu">
      <Button variant="light" onClick={()=> {
        vidRef.current.play();
        vidPlaying? setVidPlaying(false):setVidPlaying(true)
        setShowSideBar(false)
        setCartButtonClicked(false)}}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} /></Button>
      <Button variant="light" onClick={()=> {
        if(vidPlaying){
        setVidPlaying(false)
        vidRef.current.pause();
        }
        else{
        setVidPlaying(true)
        vidRef.current.play()
        }
        setCartButtonClicked(!cartButtonClicked)
        }}>
        <FontAwesomeIcon icon={faShoppingCart} /></Button>
    </div>
    <div className="Video">
    <ToastContainer />
      <ResponsiveEmbed aspectRatio="16by9">
        <video ref={vidRef} controls autoPlay muted>
          <source src="./video.mp4" type="video/mp4" />
        </video>
        {/* <embed type="video/mp4" src="./video.mp4" ref={vidRef} /> */}
      </ResponsiveEmbed>
      {cartButtonClicked?(
      <div className="recommendation">
        <div className="flex-scroll">
          <div className="box" onClick={ ()=> {setShowSideBar(true)}}>
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/jpg" src="./watch-2.jpg" />
            </ResponsiveEmbed>
          </div>
          <div className="box">
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/jpg" src="./watch-1.jpg" />
            </ResponsiveEmbed>
          </div>
          <div className="box">
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/png" src="./bowtie.png" />
            </ResponsiveEmbed>
          </div>
          <div className="box">
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/png" src="./necklace.png" />
            </ResponsiveEmbed>
          </div>
          <div className="box">
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/png" src="./earning.png" />
            </ResponsiveEmbed>
          </div>
          <div className="box">
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/png" src="./earning.png" />
            </ResponsiveEmbed>
          </div>
        </div>
      </div>
      ):null}

    </div>

    {showSideBar?(
    <div className="SideMenu">
      <ul className="SideMenuList">
        <li>
          <h1>Omega 50 Watch</h1>
        </li>
        <li onClick={purchase}>
          <h1 className="listHeader">Purchase</h1>
        </li>
        <li onClick = {push}>
          <h1 className="listHeader">Push This To Phone</h1>
        </li>
        <li onClick = {push}>
          <h1 className="listHeader">Push All To Phone</h1>
        </li>
      </ul>
    </div>):null}
  </Container>
</div>
);
}

export default App;