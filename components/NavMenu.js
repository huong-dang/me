import Link from "next/link";
import Head from "next/head";

export const navOptions = {
    "/": "About.",
    "/media": "Media.",
    "/books": "Books.",
    // "/blog": "Blog.",
};

function NavMenu() {
    let options = Object.keys(navOptions);

    return (
        <div className="menu-container">
            <Head>
                <title>Huong 🌻</title>
            </Head>
            <div className="logo-container">
                <a href="/">
                    <div className="logo">hd.</div>
                </a>
            </div>
            <div className="options-container">
                {options.map((pagePath, idx) => {
                    return (
                        <div key={idx} className="nav-options">
                            <Link href={pagePath}>
                                <div className="button">
                                    {navOptions[pagePath]}
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <style jsx>{`
                @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
                .button {
                    border-style: solid;
                    color: var(--electric-blue);
                    font-family: "Roboto", sans-serif;
                    font-size: 20px;
                    box-shadow: 5px 5px 0 var(--charcoal);
                    cursor: pointer;
                    padding: 1vh;
                    margin-left: 1vh;
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
                    justify-content: flex-end;
                    margin-top: 12px;
                    margin-left: 120px;
                    margin-right: 120px;
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
                }
                @media only screen and (max-width: 600px) {
                    .button {
                        font-size: 16px;
                    }
                    .menu-container {
                        margin-left: 15px;
                        margin-right: 15px;
                    }
                    .logo {
                        font-size: 28px;
                        height: 52px;
                        width: 52px;
                    }
                }
                a {
                    text-decoration: none;
                }
                .logo-container {
                    width: 20%;
                }
                .nav-options {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .options-container {
                    display: flex;
                    justify-content: flex-end;

                    width: 80%;
                }
            `}</style>
        </div>
    );
}

export default NavMenu;
