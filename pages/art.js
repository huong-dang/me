import react from "react";
export default function Art() {
    const artRect = {
        media: [
            {
                name: "Gone Girl",
                url: "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                watch: ["Hulu", "Netflix"],
                imgUrl:
                    "https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg",
            },
            {
                name: "Promising Young Woman",
                url: "https://en.wikipedia.org/wiki/Promising_Young_Woman",
                watch: ["Hulu"],
                imgUrl:
                    "https://upload.wikimedia.org/wikipedia/en/0/06/Promising_Young_Woman_poster.jpg",
            },
        ],
        books: [
            {
                name: "Girl in Translation",
                author: "Jean Kwok",
                url: "https://www.jeankwok.com/girl-in-translation",
            },
            {
                name: "So You Want to Talk About Race",
                author: "Ijeoma Oluo",
                url:
                    "https://en.wikipedia.org/wiki/So_You_Want_to_Talk_About_Race",
            },
        ],
    };

    const media = artRect.media.map((media, idx) => {
        return (
            <div key={idx}>
                <div>{media.name}</div>
                <img src={media.imgUrl} alt={`${media.name} movie image`} />
            </div>
        );
    });

    const books = artRect.books.map((book, idx) => {
        return (
            <div key={idx}>
                <div>{book.name}</div>
                <div>{book.author}</div>
            </div>
        );
    });

    return (
        <div>
            <div>media</div>
            {media}
            <div>books</div>
            {books}
        </div>
    );
}
