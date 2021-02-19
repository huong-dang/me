import NavMenu from "../components/NavMenu";
import Heading from "../components/Heading";
import styles from "../styles/Index.module.css";

export default function Home() {
    return (
        <div>
            <NavMenu />
            <Heading text="Welcome ☀️" />

            <div className={styles.content}>
                <p>
                    Hi! I'm Huong. I'm an early-career software engineer with
                    experience building web applications and developing APIs.
                    Originally from sunny Florida, I now live and work in
                    Virginia.
                </p>
            </div>

            <div className={styles.content}>
                <h2>My current projects</h2>
                <h3>DearGenie</h3>
                <p>A wishlist.</p>
                <h3>BetterChoice</h3>
                <p>Amazon replacement finder.</p>
                <h3>huongdang.vercel.app</h3>
                <p>
                    This website will be my playground to learn web development,
                    and it'll always be a work-in-progress.
                </p>
            </div>

            <div className={styles.content}>
                <h2>Catch me on. . .</h2>
                <p>GitHub</p>
                <p>LinkedIn</p>
            </div>
        </div>
    );
}
