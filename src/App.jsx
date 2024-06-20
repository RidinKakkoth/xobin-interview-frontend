import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Demo from "./pages/Demo/Demo"
import '@fortawesome/fontawesome-free/css/all.min.css';
import CalendlyPage from "./pages/ScheduleDemo/ScheduleDemo";
import Footer from "./components/Footer/Footer";

const App = () => {


  return (
    <>
    <div className="app">
      <Navbar  />
      <div className="pt-28">
      <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/request-demo" element={<Demo/>} />
      <Route path="/schedule-demo" element={<CalendlyPage/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App