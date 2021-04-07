import React, { useState, useRef} from 'react';
import './App.css';
import {Container, Button, ResponsiveEmbed} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let limit = 1000;
let totalSpend = 0;
toast.configure()
function App() {
const [cartButtonClicked, setCartButtonClicked] = useState(false)
//const [cartButtonClicked, setCartButtonClicked] = useState(true)
const [vidPlaying, setVidPlaying] = useState(true)
const [showSideBar, setShowSideBar] = useState(false)
const [itemName,setItemName] = useState("");
const vidRef = useRef(null)
//let limit = 1000;
// const [limit, setLimit] = useState(1000)
const [itemPrice, setItemPrice] = useState(0);
const purchase = () => {
if(limit-itemPrice>=0){
  limit -= itemPrice
  totalSpend += itemPrice
  console.log(`Total spending is ${totalSpend}, limit remains ${limit}`)
  toast.success("Item Purchased and on your way!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: true,
    })
  toast.warn(`You have ${limit}$ remaining`, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
  });
}
else{
  toast.error("Sorry, you don't have enough credit", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: true,
    })
}
;}

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
        <Button variant="light" onClick={()=> {
          alert(`Total spending is ${totalSpend}, credit limit is ${limit}`)
        }}>
        <FontAwesomeIcon icon={faDollarSign} /></Button>
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
          <div className="box" onClick={ ()=> {
            setItemPrice(20)
            setItemName("Pink Kenzo Dress")
            setShowSideBar(true)
            }}>
            <ResponsiveEmbed aspectRatio="4by3">
              <embed type="image/jpg" src="./pinkdress.jpg" />
            </ResponsiveEmbed>
          </div>
          <div className="box" onClick={ ()=> {
            setItemPrice(600)
            setItemName("iPhone 11")
            setShowSideBar(true)
            }}>
            <ResponsiveEmbed aspectRatio="4by3">
              <embed type="image/jpg" src="./iphone.jpg" />
            </ResponsiveEmbed>
          </div>
          <div className="box" onClick={ ()=> {
            setItemPrice(160)
            setItemName("Airpods")
            setShowSideBar(true)
            }}>
            <ResponsiveEmbed aspectRatio="4by3">
              <embed type="image/jpg" src="./airpods.jpg" />
            </ResponsiveEmbed>
          </div>
          <div className="box" onClick={ ()=> {
            setItemPrice(600)
            setItemName("iPad Pro")
            setShowSideBar(true)
            }}>
            <ResponsiveEmbed aspectRatio="4by3">
              <embed type="image/jpg" src="./ipad.jpg" />
            </ResponsiveEmbed>
          </div>
          <div className="box" onClick={ ()=> {
            setItemPrice(20)
            setItemName("Neon Lights")
            setShowSideBar(true)
            }}>
            <ResponsiveEmbed aspectRatio="4by3">
              <embed type="image/jpeg" src="./lights.jpeg" />
            </ResponsiveEmbed>
          </div>
          <div className="box" onClick={ ()=> {
            setItemPrice(20)
            setItemName("Camera Case")
            setShowSideBar(true)
            }}>
            <ResponsiveEmbed aspectRatio="4by3">
              <embed type="image/jpg" src="./camera.jpg" />
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
          <h1> {`${itemName}`} </h1>
        </li>
        <li onClick={purchase}>
          <h1 className="listHeader">Purchase</h1>
        </li>
        <li onClick={push}>
          <h1 className="listHeader">Push This To Phone</h1>
        </li>
        <li onClick={push}>
          <h1 className="listHeader">Push All To Phone</h1>
        </li>
      </ul>
    </div>):null}
  </Container>
</div>
);
}

export default App;