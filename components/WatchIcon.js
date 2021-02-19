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
            <img
                src={imgUrl}
                alt={altText}
                onClick={() => window.open(url, "_blank")}
                className="watchIcon"
            />
        </div>
    );
}
