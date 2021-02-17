import NavButton from "../components/NavButton";
import styles from "../styles/Index.module.css";

export default function Home() {
    return (
        <div>
            <NavButton />
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
                <h1>Catch me on. . .</h1>
                <p>GitHub</p>
                <p>LinkedIn</p>
            </div>
        </div>
    );
}
