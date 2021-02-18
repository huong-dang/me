import Link from "next/link";
import styles from "../styles/NavButton.module.css";
import React, { useState } from "react";
import { withRouter } from "next/router";
import Head from "next/head";

export const navOptions = {
    "/": "Home.",
    "/media": "Media.",
    // "/blog": "Blog.",
    "/books": "Books.",
};

function NavButton({ router }) {
    const currentPage = router.pathname;
    const [hideOptions, setHideOptions] = useState(true);

    let options = Object.keys(navOptions).filter((i) => {
        return i != currentPage;
    });
    options.push(currentPage);

    const menu = options.map((pagePath, idx) => {
        if (pagePath === currentPage) {
            return (
                <div key={idx} onMouseOver={() => setHideOptions(!hideOptions)}>
                    <Link href={pagePath}>
                        <div className={styles.button}>
                            {navOptions[pagePath]}
                        </div>
                    </Link>
                </div>
            );
        } else {
            return (
                <div
                    key={idx}
                    hidden={hideOptions}
                    onMouseOver={() => setHideOptions(false)}
                >
                    <Link href={pagePath}>
                        <div className={styles.button}>
                            {navOptions[pagePath]}
                        </div>
                    </Link>
                </div>
            );
        }
    });
    return (
        <div
            className={styles.container}
            onMouseOut={() => setHideOptions(true)}
        >
            <Head>
                <title>Huong 🌻</title>
            </Head>
            {menu}
        </div>
    );
}

export default withRouter(NavButton);
