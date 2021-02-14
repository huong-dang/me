const artRect = {
    media: [
        {
            name: "Gone Girl",
            url: "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
            watch: {
                hulu:
                    "https://www.hulu.com/watch/10ab8561-72f0-4009-ac6e-708e2a611a91",
                youtube:
                    "https://www.youtube.com/watch?v=u_17_kRZNFU&ab_channel=YouTubeMovies",
            },
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg",
        },
        {
            name: "Promising Young Woman",
            url: "https://en.wikipedia.org/wiki/Promising_Young_Woman",
            watch: {},
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/0/06/Promising_Young_Woman_poster.jpg",
        },
        {
            name: "The Handmaiden",
            url: "https://en.wikipedia.org/wiki/The_Handmaiden",
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Handmaiden_film.png",
            watch: {
                vudu:
                    "https://www.vudu.com/content/movies/details/The-Handmaiden/839048",
            },
        },
    ],
    books: [
        {
            name: "Girl in Translation",
            author: "Jean Kwok",
            url: "https://www.jeankwok.com/girl-in-translation",
            imgUrl:
                "https://images3.penguinrandomhouse.com/cover/9781594485152",
        },
        {
            name: "So You Want to Talk About Race",
            author: "Ijeoma Oluo",
            url: "https://en.wikipedia.org/wiki/So_You_Want_to_Talk_About_Race",
            imgUrl:
                "https://prodimage.images-bn.com/pimages/9781580058827_p0_v9_s600x595.jpg",
        },
    ],
};
export default function Art() {
    const containerItem = { display: "flex", justifyContent: "center" };
    const media = artRect.media.map((media, idx) => {
        return (
            <div key={idx}>
                <div style={containerItem}>{media.name}</div>
                <img src={media.imgUrl} alt={`${media.name} movie image`} />
            </div>
        );
    });

    const books = artRect.books.map((book, idx) => {
        return (
            <div key={idx}>
                <div>{book.name}</div>
                <div>{book.author}</div>
                <img src={book.imgUrl} alt={`${book.title} book image`} />
            </div>
        );
    });

    const container = {
        display: "flex",
        displayDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    };

    return (
        <div>
            <h1>Media</h1>
            <div style={container}>{media}</div>
            <h1>Books</h1>
            <div style={container}>{books}</div>
        </div>
    );
}
