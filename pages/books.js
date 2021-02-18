import NavButton from "../components/NavButton";
import styles from "../styles/Art.module.css";

export default function Books() {
    return (
        <div>
            <NavButton />
            <h1 className={styles.heading}>Book Recs</h1>
        </div>
    );
}
