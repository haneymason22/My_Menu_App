import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="login-dark">

                    <form method="post" action="/login">
                            <h2 class="sr-only">Login Form</h2>

                            <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
                        <div class="form-group">
                            <input class="form-control"  name="username" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" name="password" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-block" type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
 export default Login;