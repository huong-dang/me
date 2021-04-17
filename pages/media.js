import NavMenu from "../components/NavMenu";
import WatchIcon from "../components/WatchIcon";
import Heading from "../components/Heading";
import CardHeader from "../components/CardHeader";
import Pill from "../components/Pill";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import { media, watchIcons, tags } from "../data/media";
import { useState } from "react";
import { useAppContext } from "../context/state";
import ReactPlayer from "react-player";
import Image from "next/image";
import Popover from "../components/Popover";
import FilterBar from "../components/FilterBar";

const IMG_WIDTH = 230;
const IMG_HEIGHT = 320;

const Trailer = () => {
    const { trailerUrl, showTrailer, updateShowTrailer } = useAppContext();
    return (
        <Popover
            showPopover={showTrailer}
            updateShowPopover={updateShowTrailer}
        >
            <ReactPlayer url={trailerUrl} width="100%" height="100%" />
        </Popover>
    );
};
export default function Media() {
    const [filters, setFilters] = useState([]);
    const filterOptions = Object.keys(tags).sort();
    const [selectedMedia, setSelectedMedia] = useState({});

    let mediaRecs = [...media];
    if (filters.length > 0) {
        const filterValues = filters.map((f) => tags[f]);
        mediaRecs = mediaRecs.filter((m) =>
            filterValues.some((f) => m.tags.includes(f))
        );
    }

    const filtersCallback = (updatedFilters) => {
        setFilters(updatedFilters);
    };

    // For each media rec in the data model, build the visual for the media card
    const myMedia = mediaRecs.map((media, idx) => {
        const { updateShowTrailer } = useAppContext();

        // Present options for how to view the media (hulu, netflix, etc.)
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
                    <div
                        onClick={() => {
                            setSelectedMedia(media);
                            updateShowTrailer(true, media.trailerUrl);
                        }}
                    >
                        <Image
                            className="movie-wrapper"
                            style={{ borderRadius: "12px" }}
                            src={media.imgUrl}
                            alt={`${media.name} poster image`}
                            width={IMG_WIDTH}
                            height={IMG_HEIGHT}
                        />
                    </div>
                    <div className="containerItem">{watch}</div>
                    {media.tags.map((tag, idx) => {
                        return <Pill text={tag} key={idx} />;
                    })}
                </CardBody>
                <style jsx global>{`
                    .movie-wrapper {
                        cursor: pointer;
                        border-radius: 12px;
                    }
                    .movie-wrapper:hover {
                        opacity: 0.8;
                    }
                `}</style>
            </Card>
        );
    });

    return (
        <div className="page-container">
            <NavMenu />
            <Heading>Media Recs 🎥</Heading>
            <FilterBar
                callback={filtersCallback}
                filterOptions={filterOptions}
                filterDictionary={tags}
            />
            <p>Showing {myMedia.length} items</p>
            <div className="container">{myMedia}</div>
            <Trailer />
            <style jsx>{`
                .pill {
                    border-style: solid;
                    border-radius: 20px;
                    border-width: thin;
                    display: flex;
                    font-size: 12px;
                    color: black;
                    cursor: default;
                    align-items: center;
                    padding: 3px 5px 3px 5px;
                    transition: background-color 0.5s ease;
                    background-color: var(--powder-blue);
                    margin-right: 5px;
                    margin-bottom: 5px;
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
                @media only screen and (max-width: 768px) {
                    .filter-bar {
                        margin-left: 15px;
                        margin-right: 15px;
                    }
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
                }
                .bar {
                    height: 5px;
                }
                .bar-box {
                    margin-bottom: 27px;
                    margin-right: 5px;
                }
            `}</style>
        </div>
    );
}
