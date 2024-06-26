import React, {useEffect, useState} from "react";
import "./LoginForm.css";
import Card from "../Card/Card";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const errors = {
        username: "Invalid username",
        password: "Invalid password",
        noUsername: "Please enter your username",
        noPassword: "Please enter your password",
    };

    useEffect(() => {
        if(loggedIn){
            navigate('/dashboard');
        }

    }, [loggedIn]);


    const handleSubmit = (e) => {
        // Prevent page from reloading
        e.preventDefault();

        if (!username) {
            // Username input is empty
            setErrorMessages({ name: "noUsername", message: errors.noUsername });
            return;
        }

        if (!password) {
            // Password input is empty
            setErrorMessages({ name: "noPassword", message: errors.noPassword });
            return;
        }

        // Search for user credentials
        const currentUser = true;

        if (currentUser) {
             // Correct password, log in user
            setErrorMessages({});
            console.log("Logged in Username: " +username)
            setLoggedIn(true);
            // setIsLoggedIn(true);
        } else {
            // Username doens't exist in the database
            setErrorMessages({ name: "username", message: errors.username });
        }
    };

    // Render error messages
    const renderErrorMsg = (name) =>
        name === errorMessages.name && (
            <p className="error_msg">{errorMessages.message}</p>
        );

    return (
        <Card style={{marginLeft: '30%'}}>
            {/*{props.passChildData(loggedIn)}*/}
            <h1 className="title">Sign In</h1>
            <p className="subtitle">
                Please log in using your username and password!
            </p>
            <form onSubmit={handleSubmit}>
                <div className="inputs_container">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {renderErrorMsg("username")}
                    {renderErrorMsg("noUsername")}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {renderErrorMsg("password")}
                    {renderErrorMsg("noPassword")}
                </div>
                <input type="submit" value="Log In" className="login_button" />
            </form>
            <div className="link_container">
                <a href="" className="small">
                    Forgot Password?
                </a>
            </div>
            <div className="icons">
                <GoogleIcon className="icon" />
                <FacebookIcon className="icon" />
                <TwitterIcon className="icon" />
            </div>
        </Card>
    );
};

export default LoginForm;