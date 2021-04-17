import { useState } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
function FilterBar({ filterOptions, callback, filterDictionary }) {
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    // Add the selected filter to view
    const handleOnClickFilter = (f) => {
        return () => {
            if (!selectedFilters.includes(f)) {
                const updatedFilters = [...selectedFilters, f];
                setSelectedFilters(updatedFilters);
                callback(updatedFilters);
            }
        };
    };

    // Remove the selected filter from view
    const handleRemoveFilter = (f) => {
        return () => {
            const updatedFilters = [...selectedFilters].filter((v) => v != f);
            setSelectedFilters(updatedFilters);
            callback(updatedFilters);
        };
    };

    // Show the tag options for the user to choose from
    const filtersDropdownOptions = filterOptions.map((t, idx) => {
        return (
            <div
                className={`search-text${
                    showFilterOptions ? "" : " search-hide"
                }`}
                key={idx}
                onClick={handleOnClickFilter(t)}
            >
                {filterDictionary[t]}
                <style jsx>{`
                    .search-text {
                        transition: background-color 0.5s ease;
                        border-radius: 12px;
                        height: 25px;
                        padding-left: 10px;
                        display: flex;
                        align-items: center;
                    }
                    .search-text:hover {
                        background-color: var(--powder-blue);
                        cursor: pointer;
                    }
                    .search-text:active {
                        background-color: var(--electric-blue);
                        color: white;
                    }
                    .search-hide {
                        display: none;
                    }
                `}</style>
            </div>
        );
    });

    return (
        <div>
            <div
                className="general-container filter-bar"
                onClick={() => setShowFilterOptions(!showFilterOptions)}
            >
                <div className="filter-bar-text">
                    <span id="filter-name">filter</span>{" "}
                    <span id="filter-x">{showFilterOptions ? "ʌ" : "v"}</span>
                </div>
                {filtersDropdownOptions}
            </div>
            <div className="selected-filters">
                {selectedFilters.map((f, idx) => {
                    return (
                        <div
                            className="pill"
                            key={idx}
                            onClick={handleRemoveFilter(f)}
                        >
                            {`${filterDictionary[f]} x`}
                        </div>
                    );
                })}
            </div>
            <style jsx>{`
                .pill {
                    border-style: solid;
                    border-radius: 20px;
                    border-width: thin;
                    display: flex;
                    font-size: 12px;
                    color: black;
                    cursor: default;
                    align-items: center;
                    padding: 3px 5px 3px 5px;
                    transition: background-color 0.5s ease;
                    background-color: var(--powder-blue);
                    margin-right: 5px;
                    margin-bottom: 5px;
                }

                .pill:hover {
                    border-style: solid;
                    border-width: thin;
                    color: white;
                    cursor: pointer;
                    background-color: var(--electric-blue);
                }
                .pill:active {
                    opacity: 0.5;
                }

                .filter-bar {
                    border-radius: 12px;
                    border-width: thin;
                    border-style: solid;
                    color: black;
                    margin-bottom: 10px;
                }
                @media only screen and (max-width: 768px) {
                    .filter-bar {
                        margin-left: 15px;
                        margin-right: 15px;
                    }
                }

                .filter-bar-text {
                    cursor: pointer;
                    height: 25px;
                    align-items: center;
                    padding-left: 10px;
                    padding-right: 10px;
                    display: flex;
                    justify-content: space-between;
                }
                #filter-name {
                    width: 80%;
                }
                #filter-x {
                    width: 20%;
                    text-align: right;
                }
                .selected-filters {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .bar {
                    height: 5px;
                }
                .bar-box {
                    margin-bottom: 27px;
                    margin-right: 5px;
                }
            `}</style>
        </div>
    );
}

export default FilterBar;
