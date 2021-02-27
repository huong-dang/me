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
                    justify-content: flex-end;
                }

                @media only screen and (max-width: 600px) {
                    .button {
                        font-size: 16px;
                    }
                }

                @media only screen and (min-width: 768px) {
                    .menu-container {
                        margin-right: 120px;
                    }
                }

                .logo {
                    height: 64px;
                    width: 64px;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    border-radius: 50%;
                    border-style: solid;
                    border-width: thin;
                    font-size: 32px;
                    color: var(--electric-blue);
                    box-shadow: 0px 0px 1px 2px var(--powder-blue);
                }
                a {
                    text-decoration: none;
                }
                .logo-container {
                    width: 78%;
                }
            `}</style>
            <Head>
                <title>Huong 🌻</title>
            </Head>
            <div className="logo-container">
                <a href="/">
                    <div className="logo">hd.</div>
                </a>
            </div>
            {options.map((pagePath, idx) => {
                return (
                    <div key={idx}>
                        <Link href={pagePath}>
                            <div className="button">{navOptions[pagePath]}</div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default NavMenu;
