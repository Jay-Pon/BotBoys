import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg home-navbar">
                <a class="navbar-brand navbar-text" href="#">BotBoys</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto nav-fill w-100">
                        <li class="nav-item active">
                            <a class="nav-link navbar-text" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link navbar-text" href="#">Bot Treasury <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link navbar-text" href="#">Abot Us <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link navbar-text" href="#">Custom Request <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
