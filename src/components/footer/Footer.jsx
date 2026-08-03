import React from 'react'

export const Footer = () => {
    return (
        <>
            {/* Bootstrap Icons */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
            />
            {/* Footer */}
            <footer className="bg-dark text-light pt-5 pb-3 mt-5">
                <div className="container">
                    <div className="row">
                        {/* About */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h3 className="fw-bold text-white">BBD</h3>
                            <p className="text-light-emphasis mt-3">
                                BBD is a modern technology blog where you can learn
                                Programming, Web Development, JavaScript, React, Node.js, Python,
                                Java, AI, and the latest technology trends.
                            </p>
                            <div className="mt-4">
                                <a href="#" className="text-white me-3 fs-5">
                                    <i className="bi bi-facebook" />
                                </a>
                                <a href="#" className="text-white me-3 fs-5">
                                    <i className="bi bi-twitter-x" />
                                </a>
                                <a href="#" className="text-white me-3 fs-5">
                                    <i className="bi bi-instagram" />
                                </a>
                                <a href="#" className="text-white me-3 fs-5">
                                    <i className="bi bi-linkedin" />
                                </a>
                                <a href="#" className="text-white fs-5">
                                    <i className="bi bi-youtube" />
                                </a>
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-6 mb-4">
                            <h5 className="fw-bold mb-3">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        Home
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        About
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Categories */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="fw-bold mb-3">Categories</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        JavaScript
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        React JS
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        Node JS
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        Python
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none text-light-emphasis">
                                        Java
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Newsletter */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="fw-bold mb-3">Newsletter</h5>
                            <p className="text-light-emphasis">
                                Subscribe to receive the latest tutorials and tech articles.
                            </p>
                            <form>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                    />
                                    <button className="btn btn-primary">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr className="border-secondary" />
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0">
                                © 2026 <strong>BBD</strong>. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                            <a href="#" className="text-decoration-none text-light-emphasis me-3">
                                Terms of Service
                            </a>
                            <a href="#" className="text-decoration-none text-light-emphasis me-3">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-decoration-none text-light-emphasis">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}
