import { useState } from "react";
import NavMenu from "../components/NavMenu";
import { books, tags } from "../data/books";
import FilterBar from "../components/FilterBar";
import CardHeader from "../components/CardHeader";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardBodyImage from "../components/CardBodyImage";
import TotalText from "../components/TotalText";
import Pill from "../components/Pill";

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
            <Card key={idx}>
                <CardHeader>{book.name}</CardHeader>
                <CardBody>
                    <a href={book.url} target="_blank">
                        <CardBodyImage
                            imageSource={book.imgUrl}
                            alternativeText={`${book.name} poster image`}
                        />
                    </a>
                    {book.tags.map((tag, idx) => {
                        return <Pill text={tag} key={idx} />;
                    })}
                </CardBody>
            </Card>
        );
    });

    return (
        <div className="page-container">
            <NavMenu title={"Book Recs 📚"} />
            <FilterBar
                filterOptions={filterOptions}
                callback={filtersCallback}
                filterDictionary={tags}
            />
            <TotalText total={myBooks.length} />
            <div className="container">{myBooks}</div>
        </div>
    );
}

export default Books;
