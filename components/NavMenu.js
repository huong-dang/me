import Link from "next/link";
import Head from "next/head";

export const navOptions = {
    "/": "About.",
    "/media": "Media.",
    // "/books": "Books.",
    // "/blog": "Blog.",
};

function NavMenu() {
    let options = Object.keys(navOptions);

    return (
        <div className="menu-container">
            <style jsx>{`
                @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
                .button {
                    border-style: solid;
                    color: var(--electric-blue);
                    font-family: "Roboto", sans-serif;
                    font-size: 20px;
                    box-shadow: 5px 5px 0 var(--charcoal);
                    cursor: pointer;
                    margin-left: 1vh;
                    padding: 1vh;
                    transition: background-color 0.5s ease;
                }

                .button:hover {
                    background-color: var(--powder-blue);
                }

                .button:active {
                    background-color: var(--charcoal);
                    color: white;
                    border-color: var(--charcoal);
                    text-decoration: underline;
                }
                .menu-container {
                    display: flex;
                    margin: 12px;
                }

                @media only screen and (max-width: 600px) {
                    .button {
                        font-size: 16px;
                    }
                }

                @media only screen and (min-width: 768px) {
                    .menu-container {
                        margin-left: 100px;
                        margin-right: 100px;
                    }
                }

                .toggle {
                    width: 20%;
                    display: flex;
                    justify-content: flex-end;
                }
                .menu-options {
                    display: flex;
                    width: 80%;
                }
                /*Simple css to style it like a toggle switch*/
                .theme-switch-wrapper {
                    display: flex;
                    align-items: center;
                }
                .theme-switch {
                    display: inline-block;
                    height: 34px;
                    position: relative;
                    width: 60px;
                }

                .theme-switch input {
                    display: none;
                }

                .slider {
                    background-color: var(--powder-blue);
                    bottom: 0;
                    cursor: pointer;
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                    transition: 0.4s;
                }

                .slider:before {
                    background-color: #fff;
                    bottom: 4px;
                    content: "";
                    height: 26px;
                    left: 4px;
                    position: absolute;
                    transition: 0.4s;
                    width: 26px;
                }

                input:checked + .slider {
                    background-color: var(--pink);
                }

                input:checked + .slider:before {
                    transform: translateX(26px);
                }

                .slider.round {
                    border-radius: 34px;
                }

                .slider.round:before {
                    border-radius: 50%;
                }
            `}</style>
            <Head>
                <title>Huong 🌻</title>
            </Head>
            <div className="menu-options">
                {options.map((pagePath, idx) => {
                    return (
                        <div key={idx}>
                            <Link href={pagePath}>
                                <div className="button">
                                    {navOptions[pagePath]}
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="toggle">
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;
