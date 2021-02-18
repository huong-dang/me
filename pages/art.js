import styles from "../styles/Art.module.css";
import NavButton from "../components/NavButton";
import Image from "next/image";
import { artRec, watchIcons, tags } from "../data/media";

const IMG_WIDTH = 230;
const IMG_HEIGHT = 320;

export default function Art() {
    const media = artRec.media.map((media, idx) => {
        const watch = media.watch.map((w, idx) => {
            return (
                <img
                    src={watchIcons[w.srcName].imgUrl}
                    alt={`name`}
                    onClick={() => window.open(w.src, "_blank")}
                    key={idx}
                    className={styles.watchIcon}
                />
            );
        });

        return (
            <div className={styles.cardContainer} key={idx}>
                <div className={styles.cardHeader}>
                    <b>{media.name}</b>
                </div>
                <div className={styles.card}>
                    <Image
                        className={styles.cardImage}
                        src={media.imgUrl}
                        alt={`${media.name} movie image`}
                        width={IMG_WIDTH}
                        height={IMG_HEIGHT}
                        onClick={() => window.open(media.url, "_blank")}
                    />
                    <div className={styles.containerItem}>{watch}</div>
                    {media.tags.map((tag, idx) => {
                        return <div className={styles.pill}>{tag}</div>;
                    })}
                </div>
            </div>
        );
    });

    // const books = artRec.books.map((book, idx) => {
    //     return (
    //         <div key={idx}>
    //             <img src={book.imgUrl} alt={`${book.title} book image`} />
    //         </div>
    //     );
    // });

    return (
        <div>
            <NavButton />
            <h1 className={styles.heading}>Media</h1>
            <div className={styles.container}>{media}</div>
        </div>
    );
}
