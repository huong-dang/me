import Image from "next/image";
import { useState } from "react";

const IMG_WIDTH = 230;
const IMG_HEIGHT = 320;

const Trailer = ({ showTrailer }) => {
    return (
        <div
            id="trailer"
            onKeyDown={(e) => {
                console.log(e);
            }}
        >
            <style jsx>{`
                #trailer {
                    position: fixed;
                    display: none;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    opacity: 0.5;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: var(--light-pink);
                    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
                    cursor: pointer; /* Add a pointer on hover */
                }
            `}</style>
            <div onClick={() => (showTrailer = false)}>hi</div>
            <div>
                hi
                {/* <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/u_17_kRZNFU"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe> */}
            </div>
        </div>
    );
};

export default function CardImage({
    imgUrl,
    altText = "card image text",
    clickUrl,
}) {
    const [showTrailer, setShowTrailer] = useState(true);
    const trailer = () => {
        setShowTrailer(true);
    };
    return (
        <div onClick={trailer}>
            <style jsx>{`
                .cardImg {
                    border-radius: 10px;
                }

                .cardImg:hover {
                    opacity: 0.9;
                    cursor: pointer;
                }
                .cardImg:active {
                    opacity: 0.8;
                }
            `}</style>
            <Image
                className="cardImg"
                src={imgUrl}
                alt={altText}
                width={IMG_WIDTH}
                height={IMG_HEIGHT}
            />
            <Trailer showTrailer={showTrailer} />
        </div>
    );
}
