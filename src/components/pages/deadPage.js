import React from "react";
import './deadPage.css';
import { NavLink } from "react-router-dom";

export default function deadPage() {
    return (
        // Container for the whole dead page body
        <div className="body-">
            <section className="header-">
                <h2>Sorry, this page is currently unavailable</h2>
                <p>Feel free to visit one of our other pages:</p>
            </section>
            <section className="container- cards- row-">
                <div className="card-">
                    <div className="icon-title- column-">
                        <i className="fab fa-jedi-order"></i>
                        <h3>Start Over: Home</h3>
                    </div>
                    <div className="card-content- column-">
                        <div className="title- row-">
                            <i className="fab fa-jedi-order"></i>
                            <h2>Visit Our Home Page</h2>
                        </div>
                        <div className="title-btn- column-">
                            <h3>Home Page</h3>
                            <NavLink exact to="/">
                                <div className="btn-">Click to Know</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="card-">
                    <div className="icon-title- column-">
                        <i className="fab fa-jedi-order"></i>
                        <h3>Learn with Us: Modules</h3>
                    </div>
                    <div className="card-content- column-">
                        <div className="title- row-">
                            <i className="fab fa-jedi-order"></i>
                            <h2>Visit Our Modules Page</h2>
                        </div>
                        <div className="title-btn- column-">
                            <h3>Course</h3>
                            <NavLink exact to="/modules">
                                <div className="btn-">Click to Know</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* <div className="card-">
                    <div className="icon-title- column-">
                        <i className="fab fa-jedi-order"></i>
                        <h3>Let Us Help: Services</h3>
                    </div>
                    <div className="card-content- column-">
                        <div className="title- row-">
                            <i className="fab fa-jedi-order"></i>
                            <h2>Visit Our Services Page</h2>
                        </div>
                        <div className="title-btn- column-">
                            <h3>Services</h3>
                            <a href="/services" className="btn-">Click to Know</a>
                        </div>
                    </div>
                </div> */}
                <div className="card-">
                    <div className="icon-title- column-">
                        <i className="fab fa-jedi-order"></i>
                        <h3>Get It From Us: Shop</h3>
                    </div>
                    <div className="card-content- column-">
                        <div className="title- row-">
                            <i className="fab fa-jedi-order"></i>
                            <h2>Visit Our Shop Page</h2>
                        </div>
                        <div className="title-btn- column-">
                            <h3>Shop</h3>
                            <NavLink exact to="/Shop">
                                <div className="btn-">Click to Know</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="card-">
                    <div className="icon-title- column-">
                        <i className="fab fa-jedi-order"></i>
                        <h3>Find Out More: Contact Us </h3>
                    </div>
                    <div className="card-content- column-">
                        <div className="title- row-">
                            <i className="fab fa-jedi-order"></i>
                            <h2>Visit Our Contact Details</h2>
                        </div>
                        <div className="title-btn- column-">
                            <h3>Contact Us</h3>
                            <NavLink exact to="/Contact-us">
                                <div className="btn-">Click to Know</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
