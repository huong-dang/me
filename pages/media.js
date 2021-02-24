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
                <CardHeader>{media.name}</CardHeader>
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
                className={`search-text${showFilter ? "" : " search-hide"}`}
                key={idx}
                onClick={() => {
                    if (!filter.includes(t)) {
                        setFilter([...filter, t]);
                    }
                }}
            >
                <style jsx>{`
                    .search-text {
                        transition: background-color 0.5s ease;
                        border-radius: 12px;
                        height: 25px;
                        padding-left: 10px;
                        display: flex;
                        align-items: center;
                    }
                    .search-text:hover {
                        background-color: var(--powder-blue);
                        cursor: pointer;
                    }
                    .search-text:active {
                        background-color: var(--electric-blue);
                        color: white;
                    }
                    .search-hide {
                        display: none;
                    }
                `}</style>
                {tags[t]}
            </div>
        );
    });

    return (
        <div className="page-container">
            <style jsx>{`
                .pill {
                    border-style: solid;
                    border-radius: 20px;
                    border-width: thin;
                    display: inline-flex;
                    font-size: 12px;
                    color: black;
                    cursor: default;
                    align-items: center;
                    padding: 3px 5px 3px 5px;
                    transition: background-color 0.5s ease;
                    background-color: var(--powder-blue);
                }

                .pill:hover {
                    border-style: solid;
                    border-width: thin;
                    color: white;
                    cursor: pointer;
                    background-color: var(--electric-blue);
                }
                .pill:active {
                    opacity: 0.5;
                }

                p {
                    text-align: center;
                    color: black;
                    font-size: 12px;
                }
                .filter-bar {
                    border-radius: 12px;
                    border-width: thin;
                    border-style: solid;
                    color: black;
                    margin-bottom: 10px;
                }

                .filter-bar-text {
                    cursor: pointer;
                    height: 25px;
                    align-items: center;
                    padding-left: 10px;
                    padding-right: 10px;
                    display: flex;
                    justify-content: space-between;
                }

                #filter-name {
                    width: 80%;
                }
                #filter-x {
                    width: 20%;
                    text-align: right;
                }
                .selected-filters {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 5px;
                }
            `}</style>
            <NavMenu />
            <Heading text="Media Recs 🎥" />

            <div
                className="general-container filter-bar"
                onClick={() => setShowFilter(!showFilter)}
            >
                <div className="filter-bar-text">
                    <span id="filter-name">filter</span>{" "}
                    <span id="filter-x">{showFilter ? "ʌ" : "v"}</span>
                </div>
                {tagsDropdown}
            </div>
            <div className="selected-filters">
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
