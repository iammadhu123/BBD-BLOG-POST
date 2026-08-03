import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export const Headermy = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState(false)
    const goToSign = () => {
        navigate("/sign-up")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            setStatus(true)
        }

    })
    const gotoLOgout = () => {
        // alert("OK")
        localStorage.removeItem('authToken')
        setStatus(false)
        navigate("/login")


    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand fw-bold fs-3" href="/">
                    <span className="text-info">BBD</span>BLOGPOST
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="about-us">About</Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="add-blog">Add Blog</Link>
                        </li> */}

                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Categories
                            </a>

                            <ul className="dropdown-menu shadow border-0 rounded-3">
                                <li><a className="dropdown-item" href="/">JavaScript</a></li>
                                <li><a className="dropdown-item" href="/">React JS</a></li>
                                <li><a className="dropdown-item" href="/">Node JS</a></li>
                                <li><a className="dropdown-item" href="/">Python</a></li>
                                <li><a className="dropdown-item" href="/">Java</a></li>
                            </ul>
                        </li> */}

                        <li className="nav-item">
                            <Link className="nav-link" to="contact-us">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact-list">Contact List</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="try">Try</Link>
                        </li> */}

                    </ul>

                    {/* Right Side */}
                    <div className="d-flex align-items-center">

                        {/* <input
                            className="form-control search-box me-3"
                            type="search"
                            placeholder="Search..."
                        /> */}


                        {
                            status ? (
                                <div className="dropdown">
                                    <button
                                        className="btn btn-danger dropdown-toggle px-4"
                                        type="button"
                                        id="userDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        My Account
                                    </button>

                                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                                        <li>
                                            <Link className="dropdown-item" to="/add-blog">
                                                <i className="bi bi-plus-circle me-2"></i>
                                                Add Blog
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="dropdown-item" to="/blog-list">
                                                <i className="bi bi-journal-text me-2"></i>
                                                Blog Lists
                                            </Link>
                                        </li>

                                        <li><hr className="dropdown-divider" /></li>

                                        <li>
                                            <button
                                                className="dropdown-item text-danger"
                                                onClick={gotoLOgout}
                                            >
                                                <i className="bi bi-box-arrow-right me-2"></i>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <button className="btn btn-primary text-white px-4" onClick={goToLogin}>
                                        Login
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-success text-white px-4" onClick={goToSign}>
                                        Sign Up
                                    </button>
                                </>
                            )
                        }

                    </div>

                </div>

            </div>
        </nav >

    )
}
