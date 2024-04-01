import React from "react";
import loginImg from '../../assets/login_pg_img.svg';
// import './Login.css';


export const Login: React.FC = () => {
    return (
        <>
            <section id="login">
                <div id="login-img">
                    <img id="login-pg-img" src={loginImg}/>
                </div>

                <div id="login-content">
                    <h2>Login your Account</h2>
                    <div>
                        <h3>Email</h3>
                        <input type="email" id="login-email" placeholder="Enter your Email here" />
                        <p className="login-field" id="login-email-field">Please, fill this field</p>
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" id="login-password" placeholder="Enter your Password here" />
                        <p className="login-field" id="login-password-field">Please, fill this field</p>
                    </div>
                    <p className="login-field" id="login-error">Wrong login or password</p>
                    <button id="login-btn" onclick="login()">Login Here</button>
                    <p className="or">- OR -</p>
                    <p className="acc">Create an account? <a href="#sign-up">Sign-Up</a></p>
                </div>
            </section>
        </>
    )
}



