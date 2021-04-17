import { useState } from "react";
import NavMenu from "../components/NavMenu";
import Heading from "../components/Heading";
import { books, tags } from "../data/books";
import FilterBar from "../components/FilterBar";
import CardHeader from "../components/CardHeader";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardBodyImage from "../components/CardBodyImage";

function Books() {
    const [filters, setFilters] = useState([]);
    const filterOptions = Object.keys(tags).sort();
    const filtersCallback = (updatedFilters) => {
        setFilters(updatedFilters);
    };
    let bookRecs = [...books];
    if (filters.length > 0) {
        const filterValues = filters.map((f) => tags[f]);
        bookRecs = bookRecs.filter((b) =>
            filterValues.some((f) => b.tags.includes(f))
        );
    }
    const myBooks = bookRecs.map((book, idx) => {
        return (
            <Card>
                <CardHeader>{book.name}</CardHeader>
                <CardBody>
                    <CardBodyImage
                        imageSource={book.imgUrl}
                        alternativeText={`${book.name} poster image`}
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
            <p>Showing {myBooks.length} items</p>
            <div className="container">{myBooks}</div>
            <style jsx>{`
                p {
                    text-align: center;
                    color: black;
                    font-size: 12px;
                }
            `}</style>
        </div>
    );
}

export default Books;
