export default function WatchIcon({
    imgUrl,
    url,
    altText = "img context text",
}) {
    return (
        <div>
            <style jsx>{`
                .watchIcon {
                    padding: 3px;
                }

                .watchIcon:hover {
                    cursor: pointer;
                    opacity: 0.8;
                }

                .watchIcon:active {
                    cursor: pointer;
                    opacity: 0.6;
                }
            `}</style>
            <a href={url} target="_blank">
                <img src={imgUrl} alt={altText} className="watchIcon" />
            </a>
        </div>
    );
}
