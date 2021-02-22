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
                    border-color: white;
                    border-style: solid;
                    color: white;
                    font-family: "Roboto", sans-serif;
                    font-size: 20px;
                    box-shadow: 5px 5px 0 var(--dark-grey);
                    cursor: pointer;
                    margin-left: 1vh;
                    padding: 1vh;
                    background-color: var(--dark-pink);
                    transition: background-color 0.5s ease;
                }

                .button:hover {
                    background-color: var(--pink);
                }

                .button:active {
                    background-color: var(--light-grey);
                    text-decoration: underline;
                }
                .menu-container {
                    display: flex;
                    justify-content: flex-end;
                    margin: 12px;
                }

                @media only screen and (max-width: 600px) {
                    .menu-container {
                        justify-content: center;
                    }
                    .button {
                        font-size: 16px;
                    }
                }
            `}</style>
            <Head>
                <title>Huong 🌻</title>
            </Head>
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
