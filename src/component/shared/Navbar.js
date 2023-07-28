import React from 'react'

const navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link nav-linkbar active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-linkbar" href="#">CAR</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-linkbar" href="#">YACHT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-linkbar" href="#">PRIVATE PLANE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-linkbar" href="#">HOW IT WORKS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-linkbar" href="#">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-linkbar" href="#">LOGIN/SIGNUP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar