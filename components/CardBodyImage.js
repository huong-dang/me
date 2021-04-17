import Image from "next/image";
import { IMG_WIDTH, IMG_HEIGHT } from "../constants";

function CardBodyImage({ imageSource, alternativeText }) {
    return (
        <Image
            className="image-wrapper"
            src={imageSource}
            alt={alternativeText}
            style={{ borderRadius: "12px" }}
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
        />
    );
}

export default CardBodyImage;
