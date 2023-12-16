import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoute";


function App() {

  return (
      <div className="App">
       <Router>
        <Header/>
        <AnimatedRoutes/>
       </Router>
      </div>
  )
}

export default App
