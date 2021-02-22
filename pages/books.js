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

export default function Books() {
    return (
        <div className="page-container">
            <NavMenu />
            <Heading text="Book Recs 📚" />
            <Card>
                <CardHeader>hi</CardHeader>
            </Card>
        </div>
    );
}
