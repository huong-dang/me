import NavMenu from "../components/NavMenu";
import styles from "../styles/Index.module.css";

export default function Home() {
    return (
        <div>
            <NavMenu />
            <div className={styles.content}>
                <h1>Let me introduce myself. . .</h1>
                <p>
                    Hi! I'm Huong. I'm an early-career software engineer with
                    experience building web applications and developing APIs.
                    Originally from sunny Florida, I now live and work in
                    Virginia.
                </p>
            </div>
            <div className={styles.content}>
                <h1>My current projects</h1>
                <h2>DearGenie</h2>
                <p>A wishlist.</p>
                <h2>BetterChoice</h2>
                <p>Amazon replacement finder.</p>
                <h2>huongdang.vercel.app</h2>
                <p>
                    This website will be my playground to learn web development,
                    and it'll always be a work-in-progress.
                </p>
            </div>
            <div className={styles.content}>
                <h1>Catch me on. . .</h1>
                <p>GitHub</p>
                <p>LinkedIn</p>
            </div>
        </div>
    );
}
