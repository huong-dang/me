import { useState } from "react";
import NavMenu from "../components/NavMenu";
import Heading from "../components/Heading";
import { books, tags } from "../data/books";
import FilterBar from "../components/FilterBar";

function Books() {
    const [filters, setFilters] = useState([]);
    const filterOptions = Object.keys(tags).sort();
    const filtersCallback = (updatedFilters) => {
        setFilters(updatedFilters);
    };

    return (
        <div className="page-container">
            <NavMenu />
            <Heading>Book Recs 📚</Heading>
            <FilterBar
                filterOptions={filterOptions}
                callback={filtersCallback}
                filterDictionary={tags}
            />
        </div>
    );
}

export default Books;
