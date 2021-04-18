import Link from "next/link";
import Head from "next/head";
import Heading from "../components/Heading";
import { useState } from "react";

export const navOptions = {
    "/": "About.",
    "/media": "Media.",
    "/books": "Books.",
    "/blog": "Blog.",
};

function NavMenu({ pageTitle, pageHeading, special = false }) {
    const [showMenu, setShowMenu] = useState(false);
    let options = Object.keys(navOptions);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div className="side-nav">
                <div className="x-icon-container">
                    <div onClick={handleMenuToggle} className="x-icon">
                        𝖷
                    </div>
                </div>
                {options.map((pagePath, idx) => {
                    return (
                        <Link href={pagePath} key={idx}>
                            <div className="nav-button-collapsible">
                                {navOptions[pagePath]}
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className="menu-container">
                <a href="/">
                    <div className="logo">hd.</div>
                </a>
                <div className="nav-options-container">
                    {options.map((pagePath, idx) => {
                        return (
                            <Link href={pagePath} key={idx}>
                                <div className="nav-button">
                                    {navOptions[pagePath]}
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="collapsible-menu">
                    <div className="hamburger-icon" onClick={handleMenuToggle}>
                        ☰
                    </div>
                </div>
            </div>
            <Heading special={special}>{pageHeading}</Heading>
            <style jsx>{`
                @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
                a {
                    text-decoration: none;
                }
                .hamburger-icon {
                    font-size: xx-large;
                    color: var(--electric-blue);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: solid;
                    height: 40px;
                    width: 40px;
                    border-width: thin;
                    border-radius: 12px;
                    padding: 0px 2px 2px 2px;
                    box-shadow: 5px 5px 0 var(--charcoal);
                    cursor: pointer;
                    transition: background-color 0.5s ease;
                }
                .hamburger-icon:hover {
                    background-color: var(--powder-blue);
                    cursor: pointer;
                }
                .menu-container {
                    margin-top: 12px;
                    margin-left: 120px;
                    margin-right: 120px;
                    height: 80px;
                }
                .logo {
                    height: 64px;
                    width: 64px;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    border-radius: 50%;
                    border-width: thin;
                    font-size: 32px;
                    color: var(--electric-blue);
                    box-shadow: 0px 0px 5px 2px var(--powder-blue);
                    float: left;
                    margin-top: 8px;
                }
                .nav-options-container {
                    float: right;
                }
                .nav-button {
                    border-style: solid;
                    color: var(--electric-blue);
                    font-family: "Roboto", sans-serif;
                    font-size: large;
                    box-shadow: 5px 5px 0 var(--charcoal);
                    cursor: pointer;
                    padding: 1vh;
                    transition: background-color 0.5s ease;
                    display: inline-block;
                    margin-left: 10px;
                }
                .nav-button:hover {
                    background-color: var(--powder-blue);
                }
                .nav-button:active {
                    background-color: var(--charcoal);
                    color: white;
                    border-color: var(--charcoal);
                    text-decoration: underline;
                }
                @media only screen and (max-width: 768px) {
                    .menu-container {
                        margin-left: var(--small-media-space);
                        margin-right: var(--small-media-space);
                    }
                }
                @media only screen and (max-width: 600px) {
                    .nav-options-container {
                        display: none;
                    }
                    .collapsible-menu {
                        float: right;
                        height: 100%;
                        padding-top: 13px;
                    }
                    .side-nav {
                        height: 100%;
                        width: ${showMenu ? "40%" : "0px"};
                        position: fixed;
                        z-index: 1;
                        top: 0;
                        right: 0;
                        background-color: var(--electric-blue);
                        color: var(--off-white);
                        overflow-x: hidden;
                        transition: 0.5s;
                    }
                    .x-icon {
                        float: right;
                        font-size: x-large;
                        height: 100%;
                        width: 50px;
                        text-align: center;
                        padding-top: 5px;
                        cursor: pointer;
                    }
                    .x-icon:hover {
                        opacity: 50%;
                    }
                    .x-icon-container {
                        height: 50px;
                    }
                    .nav-button-collapsible {
                        color: var(--off-white);
                        font-family: "Roboto", sans-serif;
                        font-size: x-large;
                        text-align: center;
                        cursor: pointer;
                        transition: background-color 0.5s ease;
                        padding: 1vh;
                    }
                    .nav-button-collapsible:hover {
                        background-color: var(--powder-blue);
                        color: var(--charcoal);
                    }
                    .nav-button-collapsible:active {
                        background-color: var(--charcoal);
                        color: white;
                        border-color: var(--charcoal);
                        text-decoration: underline;
                    }
                }
                @media only screen and (min-width: 601px) {
                    .collapsible-menu,
                    .side-nav {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}

export default NavMenu;
