import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import "./index.css";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import {useEffect, useState} from "react";

const App = () => {

    const [childData, setChildData] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        if(childData){
            setLoggedIn(true);
        }
    }, [childData]);

    return(
        <div className="App">
            {!loggedIn &&<div style={{  position: "absolute", marginLeft: "30%", marginTop: "5%"}}> <LoginForm passChildData = {setChildData} /> </div>}
            {loggedIn && <> <Menu />  <Dashboard /></>}
        </div>
)
}

export default App;
