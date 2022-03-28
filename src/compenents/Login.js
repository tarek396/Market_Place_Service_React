import axios from "axios";
import { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
    const [state1, setstate1] = useState({
        username: null,
        password: null,
        login: false,
        store: null
    });
    const navigate = useNavigate();
    function handleForm(e) {
        e.preventDefault();
        //  let form_data = new FormData();
        //  this.form_data={

        //  }
        //  form_data.append('first_name', state1.firstName);
        // form_data.append('last_name', state1.lastName);
        // form_data.append('email', state1.email);
        // form_data.append('password', state1.password);
        //  form_data.append('phone_number', state1.phoneNumber);
        console.log("form", state1)
        axios
            .post("https://127.0.0.1:8000/api/login", state1)
            //.get("https://jsonplaceholder.typicode.com/todos/1")

            .then((res) => {

                console.log(res.data.token);
                localStorage.setItem('login', JSON.stringify({
                    login: true,
                    token: res.data
                }))

            })
        navigate('/Compte');

    }
    function handleInput(e) {
        const newdata1 = { ...state1 };
        newdata1[e.target.id] = e.target.value;
        setstate1(newdata1);

    }
    return (
        <div>
            <div class="container">
                <div class="row main">
                    <div class="panel-heading">
                        <div class="panel-title text-center">
                            <h1 class="title">Login</h1>
                            <hr />
                        </div>
                    </div>


                    <div class="main-login main-center">
                        <form class="form-horizontal" method="post" action="#" onSubmit={(e) => handleForm(e)}>

                            <div class="form-group">
                                <label for="email" class="cols-sm-2 control-label">Your Email</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="email" placeholder="Enter your Email" onChange={(e) => handleInput(e)}
                                            id="username" />
                                    </div>
                                </div>
                            </div>



                            <div class="form-group">
                                <label for="password" class="cols-sm-2 control-label">Password</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Enter your Password" onChange={(e) => handleInput(e)}
                                            id="password" />
                                    </div>
                                </div>
                            </div>



                            <div class="form-group ">
                                <button type="submit" class="btn btn-primary btn-lg btn-block login-button" /*onClick={createPost}*/>login</button>
                            </div>
                            <div class="login-register">


                            </div>
                        </form>
                    </div>

                    <div>

                    </div>








                </div>
            </div>
            <script type="text/javascript" src="assets/js/bootstrap.js"></script>
        </div>

    )
}

export default Login;

