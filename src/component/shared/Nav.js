import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WaWRides</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link nav-linkbar active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-linkbar" to="/">CAR</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-linkbar" to="/">YACHT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-linkbar" to="/">PRIVATE PLANE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-linkbar" to="/">HOW IT WORKS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-linkbar" to="/">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-linkbar" to="/" data-bs-toggle="modal" data-bs-target="#exampleModal">LOGIN/SIGNUP</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Login Modal  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h2>Welcome to WAWRides Community !</h2>
                    <div class="row p-3">
                        <div class="col-md-6">
                            <h4>Login</h4>
                            <form action="">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Enter Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="name@example.com"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Enter Passwords</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="name@example.com"/>
                                </div>
                                <div class="mb-3">
                                    <a href="/" class="float-end">Forgot Password ?</a>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-primary w-100 mt-2">Submit</button>
                                </div>
                                <div class="mb-3">
                                    <a href="/" class="float-end">New Member ? Signup now</a>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6">
                            {/* <!-- Swiper --> */}
                        </div>
                    </div>
                </div>
                {/* <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>  */}
            </div>
        </div>
    </div>
        </div>
    )
}

export default Nav