import NavMenu from "../components/NavMenu";
import WatchIcon from "../components/WatchIcon";
import Heading from "../components/Heading";
import CardHeader from "../components/CardHeader";
import Pill from "../components/Pill";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardImage from "../components/CardImage";
import { artRec, watchIcons } from "../data/media";

export default function Media() {
    const media = artRec.media.map((media, idx) => {
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

    return (
        <div>
            <NavMenu />
            <Heading text="Media Recs 🎥" />
            <div className="container">{media}</div>
        </div>
    );
}
