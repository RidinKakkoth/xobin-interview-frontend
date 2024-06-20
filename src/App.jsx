import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Demo from "./pages/Demo/Demo"
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Footer from "./components/Footer/Footer"
// import { useState } from "react"
// import LoginPopup from "./components/LoginPopup/LoginPopup"

const App = () => {

  // const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {/* {showLogin?<LoginPopup  setShowLogin={setShowLogin}/>:<></>} */}
    <div className="app">
      {/* <Navbar setShowLogin={setShowLogin} /> */}
      <Navbar  />
      <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/request-demo" element={<Demo/>} />
      </Routes>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default App