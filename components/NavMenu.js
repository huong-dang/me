import Link from "next/link";
import styles from "../styles/NavMenu.module.css";
import Head from "next/head";

export const navOptions = {
    "/": "Home.",
    "/media": "Media.",
    "/blog": "Blog.",
    "/books": "Books.",
};

function NavMenu() {
    let options = Object.keys(navOptions);

    const menu = options.map((pagePath, idx) => {
        return (
            <div key={idx}>
                <Link href={pagePath}>
                    <div className={styles.button}>{navOptions[pagePath]}</div>
                </Link>
            </div>
        );
    });
    return (
        <div
            className={styles.container}
            // onMouseOut={() => setHideOptions(true)}
        >
            <Head>
                <title>Huong 🌻</title>
            </Head>
            {menu}
        </div>
    );
}

export default NavMenu;
