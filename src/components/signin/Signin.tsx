import React from "react";
import signinImg from '../../assets/sign_up_pg_img.svg';
// import './Signin.css';


export const Signin: React.FC = () => {
    return (
        <>
            <section id="sign-up">

                <div id="sign-up-content">
                    <h2>Create your Account</h2>
                    <div>
                        <h3>Name</h3>
                        <input type="text" id="name" placeholder="Enter your Name here" />
                        <p className="signup-field" id="signup-name-field">Please, fill this field</p>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="email" id="sign-up-email" placeholder="Enter your Email here" />
                        <p className="signup-field" id="signup-email-field">Please, fill this field</p>
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" id="sign-up-password" placeholder="Enter your Password here"/>
                            <p className="signup-field" id="signup-password-field">Please, fill this field</p>
                    </div>
                    <div id="age-gender">
                        <div id="age-info">
                            <h3>Age</h3>
                            <input type="text" id="age" placeholder="18" />
                            <p className="signup-field" id="age-field">Please, fill this field</p>
                        </div>
                        <div id="gender-info">
                            <h3>Gender</h3>
                            <div className="male-female">
                                <input id="gender-male" name="gender" type="radio" value="male" checked />
                                <label for="male">Male</label>
                                <input id="gender-female" name="gender" type="radio" value="female" />
                                <label for="female">Female</label>
                            </div>

                        </div>
                    </div>
                    <button id="sign-up-btn" onclick="signup()">Sign-up</button>
                    <p className="or">- OR -</p>
                    <p className="acc">Already have an account?<a href="#login">Login</a></p>
                </div>

                <div id="sign-up-img">
                    <img id="sign-up-pg-img" src={signinImg} />
                </div>
            </section>
        </>
    )
}