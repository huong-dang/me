import Image from "next/image";

const IMG_WIDTH = 230;
const IMG_HEIGHT = 320;

export default function CardImage({ imgUrl, altText = "card image text" }) {
    return (
        <div>
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
        </div>
    );
}
