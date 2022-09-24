import React from "react";


const Nav = () => {

    return (
        <section className="header-sec">
            <div className="nav-links-bar">
                <div className="nav">
                    <a href="/">Home</a>
                    <a href="/Dashboard">Dashboard</a>
                    <a href="/Console">Consoles</a>
                    <a href="/Games">Games</a>
                </div>
                <div className="nav alt-nav">
                    <a href="/Login">Login</a>
                    <a href="">Logout</a>
                </div>
            </div>
        </section>
    );
};

export default Nav;