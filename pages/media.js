import NavMenu from "../components/NavMenu";
import WatchIcon from "../components/WatchIcon";
import Heading from "../components/Heading";
import CardHeader from "../components/CardHeader";
import Pill from "../components/Pill";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardImage from "../components/CardImage";
import { artRec, watchIcons, tags } from "../data/media";
import { useState } from "react";
export default function Media() {
    const [showFilter, setShowFilter] = useState(false);
    const [filter, setFilter] = useState([]);
    const [filterOptions, setFilterOptions] = useState(Object.keys(tags));

    let mediaRecs = artRec.media;
    if (filter.length > 0) {
        const filterValues = filter.map((f) => tags[f]);
        mediaRecs = artRec.media.filter((m) => {
            return filterValues.some((f) => m.tags.includes(f));
        });
    }

    const media = mediaRecs.map((media, idx) => {
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
                    setFilter([...filter, t]);
                    setFilterOptions([...filterOptions].filter((v) => v !== t));
                }}
            >
                <style jsx>{`
                    .search-text-show {
                        border-style: solid none none none;
                        border-width: thin;
                        padding: 2px 0px 2px 5px;
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
                }

                @media only screen and (max-width: 768px) {
                    .filter {
                        margin-left: 75px;
                        margin-right: 75px;
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
                {filter.map((f, idx) => (
                    <Pill text={tags[f]} key={idx} />
                ))}
            </div>
            <div className="container">{media}</div>
        </div>
    );
}
