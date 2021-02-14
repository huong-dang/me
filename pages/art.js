// import styles from "./art.module.css";

const watchIcons = {
    hulu: {
        imgUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM5ODYyRjYyQzcwMTFFQTlDNzJDREU4QzcxRkZFRjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzExQzBBRTQyQzcwMTFFQTlDNzJDREU4QzcxRkZFRjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzk4NjJGNDJDNzAxMUVBOUM3MkNERThDNzFGRkVGNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzk4NjJGNTJDNzAxMUVBOUM3MkNERThDNzFGRkVGNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuTmXZkAAAdlSURBVHjaxJgJ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",
    },
    youtube: {
        imgUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACtklEQVR4AczYAwwlSRRA0V7btm3btm3GySpY27atsW3btm0GozPpjFX1/f9N2v363XbVS5DPcBwewFv4FTVXDH7HO3gYJ+WTI5egE6wQ6idzBuNDnF5MwXNQX/60wMWFFNwKnys8P2KXfAVPxHDFYzLOy1XwWqXj3mwFr1Z67sxU8HDl44yY4BaYoHzMww4hwW+Vn+qbEjxO5XDhxgTbqBwGri94COIsXsykSQwdSo8etGtHy5Y0aUKDBtStS5061K9P48YrtqX7pPumMWlseozMOHVtwbeF6NCBq69m333ZYos0LLchjU2PcdllVK0qwo9rC46yKYYOJUmKM7RoIcBsbJbgCCFeeaV4gnfdJcK5CR4S4sEHiyd46qkiPJvgPSGuuCKe6Prreeml7AX331+ELxP8IcSZZ8YTPfww0KcP996bueCOOzJ/vgD/JKglxLHHxhPdcIN1aNuWa65hhx3CcZtvzpQpAtSKCx51VFzwpptslBdeiMdOnBgV/DPvK3jjjdahc2fuu4+dd45/F6dOFeDfBB8IccYZccH0TYexY3nggcyfwZ12ij2DXyd4TIjLL48nuvZaXn+dLbcs9Fv8QoJjhHjggXJ+By9KkA7jbYro9y2P4Y47BJiPLVYI8pFNMXBg8QQbNRLgz7UbC0cL0a4d55zD9tvnL7XFFhx3HL//LsK56zdYu4sxcyaDB9O9+4qPcfPmK65C3brUqkX16iuGmjVXrGvYkGbNaN2aLl0YMGBFmzDO6I21qE9TOVy1qU7TX8pPk1CvbjvMVj6WYI9Yx/1U5ePyTEsfdys9T8VLH+WTfDrX8tv5mKZ4LMR1+RYw98CfCk8NHFTIEvB16Ch/euG2YhbRz8d3WVbBpuBXXF64Inp82BwXYPlygbgXmgzWQrsQi6Dj2gVAbA/ErOTaAwBDm9ddnj7AhQAAAABJRU5ErkJggg==",
    },
    vudu: {
        imgUrl: "https://ssl.gstatic.com/kpui/watch/vudu_40x40.png",
    },
    netflix: {
        imgUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEL0lEQVR4Ab3YA5DsWgKA4e+cJOOZvfbatm3btm17C2vbfrZt27aNcXdyXld18am7k7n3q2pGf1UcDT0Ub8f38Fdsr/v6O36Ad+GRGggG93C8Ga/R/8LPwi7YGidsrsAn4xt4hWb2x/dwyFIFFvgRPmNp/Qlfws1NAh+BHfEAm8dVeB2OrBP4Euxpy3grthok8EXY25b1RmwHABDd0f16xX1teeGfa4f8avWQ33Zef10zZH0WAMA7JwrfWjbkM1NDvtL5/HjncyQEd2NbPL5XYNbP3vWm8dy7OmGf7IR+bEXhfZ3YN0xkAODVY7lOlPdMFj40OeQdneAhPR2I8bsL/BU26uGY+aSar1zTqly1WLFQedV4BgCuLJML2pVLOq+LOq/LOq9KT5P4x10FPhQf04cb21zTZjTS/Z08dyzzoCLS3BvwDO4Y+Ht9qnBFiwiYS2R58I7JzBL5I0AE3BvP1qeJyHVtbinJAxHK5KVjSxb4MDwGIuAD9G80MlNxdXc1gxvayWNHogcWAQSNfRQi4O30LyDgkhYxkTCvu5rfOZmDMjWOfBNCxP1xX/pXYlnOVS2ubTMciGi1K6+fyMC1ZRI0sgxPjniaAaXEWHc1u3CR8QjcUPKwkehpnde5i0mFoJGnRjxUDSExGrmsRQWoIPDq8dytJa1E1Mh9IjYYUEKFVVl3FV/dYiQQMNtOXjoePaiIrmwnMWhiZcSUGipMZExXnLfQ/Z5wU8UjhoPHjgQXLRI1MhbVlBAwGblgkTIRENBK3G+YhUSJoL6IW9VUYWMRnNMpOW0+WZYRcGvF/Ya4R8bNJVFS01zElWpKiRU5l5fJPrOVkSyosJhYlbM255o2WVDXDRFnq6lCTicm2Gm61CqTYQRUuNcQrURS28URR6gpAR40xDGLpYNnKyvyAKbL7mpelnFrGQS1HB1xNi7TwPIIbDXdFrIgoaUbt7HgppLMwKZxRAT8X00JWQB2nim128loIKCVWJ+TkAxsB5QR8BcNRERcV3L4XGlZHiTMJdYXTEVmKoKB/B4i4Bwcp6YkGArA1reWhCChnZjMWFcwXRGDfl2EoyAC4EMaCWDb6dIti5WpQMBiYkORFIGU9OtDABEAJ+LfdbIiAK6rkt1mSxNFBPMVq/NgZcZM0o+9se8dA4EP4yY9rMuC++XRvfNgU+e1MgYBALvOlOTBuiJYW0TFcPTk0aDUU4m3A0AOAJjDc3GiuxCw31zpiPnSBe3KdOLasrKQEoAdpktvvGjOaAyWRR5QRDlGA3PJ3XkRru/n0cebsPVdBSa91Zj2Q/gzAECAXpFbwIfxJxgkEJ6GnbDa5jGLN2BPqBMIK/EzvMvS2h6fxaXQJBDgpfgGnqaZE/F97KgPweCehnfgVdioP1djd/wXB9hCIp6OT+Kn+Ce2xw74F36Oz+DZKNR0G9LyYOtXWmbtAAAAAElFTkSuQmCC",
    },
};
const artRect = {
    media: [
        {
            name: "Gone Girl",
            url: "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
            watch: [
                {
                    src:
                        "https://www.hulu.com/watch/10ab8561-72f0-4009-ac6e-708e2a611a91",
                    srcName: "hulu",
                },
                {
                    src:
                        "https://www.youtube.com/watch?v=u_17_kRZNFU&ab_channel=YouTubeMovies",
                    srcName: "youtube",
                },
            ],
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg",
        },
        {
            name: "Promising Young Woman",
            url: "https://en.wikipedia.org/wiki/Promising_Young_Woman",
            watch: [
                {
                    src:
                        "https://www.youtube.com/watch?v=ZCpTaCE4hMM&ab_channel=YouTubeMovies",
                    srcName: "youtube",
                },
            ],
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/0/06/Promising_Young_Woman_poster.jpg",
        },
        {
            name: "The Handmaiden",
            url: "https://en.wikipedia.org/wiki/The_Handmaiden",
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Handmaiden_film.png",
            watch: [
                {
                    src:
                        "https://www.vudu.com/content/movies/details/The-Handmaiden/839048",
                    srcName: "vudu",
                },
            ],
        },
        {
            name: "God's Own Country",
            url:
                "https://en.wikipedia.org/wiki/God%27s_Own_Country_(2017_film)",
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/1/14/God%27s_Own_Country_%282017_film%29.png",
            watch: [
                {
                    src:
                        "https://www.hulu.com/watch/d0a4b82d-2bf5-4794-a4e4-6d047a2aed46",
                    srcName: "hulu",
                },
                {
                    src: "http://www.youtube.com/watch?v=5C9B_FL3EG4",
                    srcName: "youtube",
                },
            ],
        },
        {
            name: "The Hate U Give",
            url: "https://en.wikipedia.org/wiki/The_Hate_U_Give_(film)",
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/bc/The_Hate_U_Give_poster.png",
            watch: [
                {
                    src:
                        "https://www.hulu.com/watch/71ec4528-cfe0-409c-accb-d1bb42c13db9",
                    srcName: "hulu",
                },
                {
                    src: "http://www.youtube.com/watch?v=NXy0H-EZR5s",
                    srcName: "youtube",
                },
            ],
        },
        {
            name: "Dear White People",
            url: "https://en.wikipedia.org/wiki/Dear_White_People_(TV_series)",
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/en/f/f5/Dear_White_People_Netflix.png",
            watch: [
                {
                    src: "https://www.netflix.com/watch/80095698?source=35",
                    srcName: "netflix",
                },
            ],
        },
        // {
        //     name: "Train to Busan",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "New Girl",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "Captain America: Civil War",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "The Half of It",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "Dear Ex",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "Homecoming King",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "Jigsaw",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "Quarter-Life Crisis",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "What Kind of Asian Are You",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
        // {
        //     name: "",
        //     url: "",
        //     imgUrl: "",
        //     watch: [
        //         {
        //             src: "",
        //             srcName: "",
        //         },
        //     ],
        // },
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
const container = {
    display: "flex",
    displayDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
};
const containerItem = {
    display: "flex",
    justifyContent: "center",
};

const mediaStyle = {
    margin: "5px",
    backgroundColor: "#ceb1be",
    padding: "10px",
    borderRadius: "5%",
};

export default function Art() {
    const media = artRect.media.map((media, idx) => {
        const watch = media.watch.map((w, idx) => {
            return (
                <a href={w.src} key={idx} style={{ padding: "3px" }}>
                    <img src={watchIcons[w.srcName].imgUrl} alt={`name`} />
                </a>
            );
        });

        return (
            <div style={mediaStyle} key={idx}>
                <img
                    style={{ borderRadius: "5%" }}
                    src={media.imgUrl}
                    alt={`${media.name} movie image`}
                />
                <div style={containerItem}>{watch}</div>
            </div>
        );
    });

    // const books = artRect.books.map((book, idx) => {
    //     return (
    //         <div key={idx}>
    //             <img src={book.imgUrl} alt={`${book.title} book image`} />
    //         </div>
    //     );
    // });

    return (
        <div>
            <h1 style={containerItem}>Media</h1>
            <div style={container}>{media}</div>
            {/* <h1 style={containerItem}>Books</h1>
            <div style={container}>{books}</div> */}
        </div>
    );
}
