import axios from "axios";
import { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {


  const [state1, setstate1] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

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
      .post("https://127.0.0.1:8000/api/users", state1)
      //.get("https://jsonplaceholder.typicode.com/todos/1")

      .then((res) => {
        console.log(res);

      })

  }
  function handleInput(e) {
    const newdata1 = { ...state1 };
    newdata1[e.target.id] = e.target.value;
    setstate1(newdata1);
    console.log(newdata1);
  }
  return (
    <div>
      <div class="container">
        <div class="row main">
          <div class="panel-heading">
            <div class="panel-title text-center">
              <h1 class="title">Register</h1>
              <hr />
            </div>
          </div>
          <div class="main-login main-center">
            <form class="form-horizontal" method="post" action="#" onSubmit={(e) => handleForm(e)}>

              <div class="form-group">
                <label for="name" class="cols-sm-2 control-label">First Name</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" name="name" placeholder="Enter your First Name" onChange={(e) => handleInput(e)}
                      id="firstName" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="name" class="cols-sm-2 control-label">Last Name</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" name="name" placeholder="Enter your Last Name" onChange={(e) => handleInput(e)}
                      id="lastName" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="cols-sm-2 control-label">Your Email</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" placeholder="Enter your Email" onChange={(e) => handleInput(e)}
                      id="email" />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="username" class="cols-sm-2 control-label">Phone Number</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" name="username" placeholder="Enter your Phone Number" onChange={(e) => handleInput(e)}
                      id="phoneNumber" />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="password" class="cols-sm-2 control-label">Password</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                    <input type="password" class="form-control" name="password" placeholder="Enter your Password" onChange={(e) => handleInput(e)}
                      id="password" />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                    <input type="password" class="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" onChange={(e) => handleInput(e)}
                      id="confirmpassword" />
                  </div>
                </div>
              </div>

              <div class="form-group ">
                <button type="submit" class="btn btn-primary btn-lg btn-block login-button"  >Register</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    </div>
  )
};

export default Register;