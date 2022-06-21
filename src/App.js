import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>   
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
