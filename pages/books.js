import NavMenu from "../components/NavMenu";
import Heading from "../components/Heading";
import CardHeader from "../components/CardHeader";
import Card from "../components/Card";
import Popover from "../components/Popover";
import { useState } from "react";
import { books } from "../data/books";
import { useAppContext } from "../context/state";

export default function Books() {
    const { updateShowBookDetails, showBookDetails } = useAppContext();
    const [selectedBook, setSelectedBook] = useState(books[0]);

    return (
        <div className="page-container">
            <NavMenu />
            <Heading text="Book Recs 📚" />
            <button onClick={() => updateShowBookDetails(true)}>hi</button>
            <Popover
                showPopover={showBookDetails}
                updateShowPopover={updateShowBookDetails}
            >
                <div>
                    <p>{selectedBook.name}</p>
                    <p>{selectedBook.author}</p>
                </div>
            </Popover>
        </div>
    );
}
