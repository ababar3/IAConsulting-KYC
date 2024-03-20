import "./index.css";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard/index.jsx";
import Menu from "../src/components/Menu.jsx"

const App = () => {

    return(
        <Router>
            <Routes>
                <Route path="/login" element={<div style={{ position: "absolute", marginLeft: "30%", marginTop: "5%"}}><LoginForm /> </div>} />
                <Route path="/dashboard" element={<div className= "App"> <Menu /> <Dashboard /> </div>} />
            </Routes>
        </Router>

    )
}

export default App;
