import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-90 ">
                    <div className="    ">

                        <div className="w-100 d-flex   justify-content-center">
                            <a className="navbar-brand me-2 align-items-center" href="#!">
                                <img src="https://nauticalglobal.com/images/layout/logo.jpg" height="100" alt="Logo" loading="lazy" style={{ marginTop: "-1px" }} />
                                <h4 className="nav-head">Nautical Marine Management<br /> Services Pvt. Ltd.</h4>
                            </a>
                            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        <div className="w-100 d-flex">
                            <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarButtonsExample">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-btn"><a className="navigation-link" href="https://nauticalglobal.com/index.html">Home</a></li>
                                    <li className="nav-btn"><a className="navigation-link" href="https://nauticalglobal.com/aboutus.html">About Us</a></li>
                                    <li className="nav-btn"><a className="navigation-link" href="https://nauticalglobal.com/ourservices.html">Our Services</a></li>
                                    <li className="nav-btn"><a className="navigation-link" href="https://nauticalglobal.com/quality&safety.html">Quality & Safety</a></li>
                                    <li className="nav-btn"><a className="navigation-link" href="https://nauticalglobal.com/ourteam.html" id="overMe">Our Team</a> </li>
                                    <li className="nav-btn"><a className="navigation-link" href="https://nauticalglobal.com/contact.html">Contact</a></li>
                                    {/* {% if user.is_authenticated %} */}
                                    <li className="btn btn-link nav-btn" style={{ padding: "10px" }}>
                                        <a className="navigation-link" href="http://admin.nauticalglobal.com/">Admin</a>
                                        {/* <Link className="navigation-link" to="/admin">Admin Panel</Link> */}
                                        {/* http://hrithik2acc.pythonanywhere.com/admin_form */}

                                    </li>
                                    {/* <li className="btn btn-link nav-btn" style={{ padding: "10px" }}>
                        <a className="navigation-link" href="{% url 'logout'%}">Log Out</a>
                    </li> */}
                                    {/* {% else %} */}
                                    {/* <li className="btn btn-primary nav-btn" style={{ padding: "10px" }}>
                        <a className="navigation-link" style={{ color: "white !important" }} href="{% url 'login'%}">Login</a>
                    </li> */}
                                    {/* {% endif %} */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar