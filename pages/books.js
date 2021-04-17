import { useState } from "react";
import NavMenu from "../components/NavMenu";
import Heading from "../components/Heading";
import { books, tags } from "../data/books";
import FilterBar from "../components/FilterBar";
import CardHeader from "../components/CardHeader";
import Pill from "../components/Pill";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import { media } from "../data/media";
import Image from "next/image";

const IMG_WIDTH = 230;
const IMG_HEIGHT = 320;

function Books() {
    const [filters, setFilters] = useState([]);
    const filterOptions = Object.keys(tags).sort();
    const filtersCallback = (updatedFilters) => {
        setFilters(updatedFilters);
    };
    const myBooks = books.map((book, idx) => {
        return (
            <Card>
                <CardHeader>{book.name}</CardHeader>
                <CardBody>
                    <div>Author: {book.author}</div>
                    <Image
                        src={book.imgUrl}
                        alt={`${book.name} poster image`}
                        width={IMG_WIDTH}
                        height={IMG_HEIGHT}
                    />
                </CardBody>
            </Card>
        );
    });

    return (
        <div className="page-container">
            <NavMenu />
            <Heading>Book Recs 📚</Heading>
            <FilterBar
                filterOptions={filterOptions}
                callback={filtersCallback}
                filterDictionary={tags}
            />
            <div className="container">{myBooks}</div>
        </div>
    );
}

export default Books;
