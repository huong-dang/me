import NavMenu from "../components/NavMenu";
import WatchIcon from "../components/WatchIcon";
import Heading from "../components/Heading";
import CardHeader from "../components/CardHeader";
import Pill from "../components/Pill";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardImage from "../components/CardImage";
import { media, watchIcons, tags } from "../data/media";
import { useState } from "react";
export default function Media() {
    const [showFilter, setShowFilter] = useState(false);
    const [filter, setFilter] = useState([]);
    const filterOptions = Object.keys(tags);

    let mediaRecs = [...media];
    if (filter.length > 0) {
        const filterValues = filter.map((f) => tags[f]);
        mediaRecs = mediaRecs.filter((m) => {
            return filterValues.some((f) => m.tags.includes(f));
        });
    }

    const myMedia = mediaRecs.map((media, idx) => {
        const watch = media.watch.map((w, idx) => {
            return (
                <WatchIcon
                    key={idx}
                    url={w.src}
                    imgUrl={watchIcons[w.srcName].imgUrl}
                    altText={`${w.srcName} icon`}
                />
            );
        });

        return (
            <Card key={idx}>
                <CardHeader text={media.name} />
                <CardBody>
                    <CardImage
                        imgUrl={media.imgUrl}
                        altText={`${media.name} movie image`}
                        clickUrl={media.url}
                    />
                    <div className="containerItem">{watch}</div>
                    {media.tags.map((tag, idx) => {
                        return <Pill text={tag} key={idx} />;
                    })}
                </CardBody>
            </Card>
        );
    });

    const tagsDropdown = filterOptions.map((t, idx) => {
        return (
            <div
                className={`search-text${showFilter ? "-show" : ""}`}
                key={idx}
                onClick={() => {
                    if (!filter.includes(t)) {
                        setFilter([...filter, t]);
                    }
                }}
            >
                <style jsx>{`
                    .search-text-show {
                        padding: 2px 0px 2px 5px;
                        transition: background-color 0.5s ease;
                        border-radius: 12px;
                        height: 25px;
                    }
                    .search-text-show:hover {
                        border-style: solid;
                        border-width: thin;
                        background-color: var(--pink);
                        cursor: pointer;
                        border-color: var(--pink);
                        border-color: white;
                    }
                    .search-text-show:active {
                        background-color: var(--light-pink);
                        color: var(--dark-pink);
                    }
                    .search-text {
                        display: none;
                    }
                `}</style>
                {tags[t]}
            </div>
        );
    });

    return (
        <div>
            <style jsx>{`
                .filter {
                    margin-top: 12px;
                    margin-bottom: 12px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-left: 75px;
                    margin-right: 75px;
                }
                .filter:hover {
                    cursor: pointer;
                }

                @media only screen and (max-width: 600px) {
                    .filter {
                        margin-left: 0px;
                        margin-right: 0px;
                    }
                }

                .search {
                    border-radius: 12px;
                    border-width: thin;
                    border-style: solid;
                    width: 100%;
                    color: white;
                }

                .filterText {
                    padding: 5px 0px 5px 5px;
                }

                .pill {
                    border-style: solid;
                    border-radius: 20px;
                    border-width: thin;
                    display: inline-flex;
                    font-size: 12px;
                    border-color: white;
                    color: white;
                    cursor: default;
                    align-items: center;
                    padding: 3px 5px 3px 5px;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    background-color: var(--pink);
                    transition: background-color 0.5s ease;
                }

                .pill:hover {
                    border-style: solid;
                    border-width: thin;
                    background-color: var(--light-pink);
                    color: var(--dark-pink);
                    border-color: var(--light-pink);
                    cursor: pointer;
                }
                .pill:active {
                    opacity: 0.5;
                }

                p {
                    text-align: center;
                    color: white;
                    font-size: 12px;
                }
            `}</style>
            <NavMenu />
            <Heading text="Media Recs 🎥" />

            <div className="filter" onMouseOut={() => setShowFilter(false)}>
                <div className="search" onMouseOver={() => setShowFilter(true)}>
                    <div className="filterText">filter</div>
                    {tagsDropdown}
                </div>
            </div>
            <div className="filter">
                {filter.map((f, idx) => {
                    return (
                        <div
                            className="pill"
                            key={idx}
                            onClick={() => {
                                setFilter([...filter].filter((v) => v != f));
                            }}
                        >
                            {`${tags[f]} x`}
                        </div>
                    );
                })}
            </div>
            <p>Showing {myMedia.length} items</p>
            <div className="container">{myMedia}</div>
        </div>
    );
}
