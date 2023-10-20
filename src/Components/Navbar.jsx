import React from 'react'

export default function Navbar() {

    return (
        <nav class=" w-100 navbar navbar-expand-lg navbar-light fixed-top px-3 border-bottom" style={{ backgroundColor: "#d7c6f3" }} >
            <div class="container-fluid">
                <div className='d-flex justify-content-center align-items-center flex-column' >
                    <h4 style={{ color: "#6319ec" }}>QodeIt</h4>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul className="navbar-nav d-flex mb-2 mb-lg-0">
                        <li className="nav-item d-flex justify-content-center align-items-center">
                            <div className=" active d-flex justify-content-center align-items-center navlink mx-2" aria-current="page" >Home</div>
                        </li>

                        <li className="nav-item  d-flex justify-content-center align-items-center">
                            <div className="active d-flex justify-content-center align-items-center navlink mx-2" aria-current="page"  >Services</div>
                        </li>
                        <li className=" d-flex justify-content-center align-items-center">
                            <div className="active d-flex justify-content-center align-items-center navlink mx-2" aria-current="page"  >Blog</div>
                        </li>
                        <li className=" d-flex justify-content-center align-items-center">
                            <div className="active d-flex justify-content-center align-items-center navlink mx-2" aria-current="page" >How we work!</div>
                        </li>
                        <li className="nav-item  d-flex justify-content-center align-items-center">
                            <div className="active d-flex justify-content-center align-items-center navlink mx-2" aria-current="page">Looking for buisness!</div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

