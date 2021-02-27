import { useState } from "react";
// const tagsDropdown = filterOptions.map((t, idx) => {
//     return (
//         <div
//             className={`search-text${showFilter ? "" : " search-hide"}`}
//             key={idx}
//             onClick={() => {
//                 if (!filter.includes(t)) {
//                     setFilter([...filter, t]);
//                 }
//             }}
//         >
//             <style jsx>{`
//                 .search-text {
//                     transition: background-color 0.5s ease;
//                     border-radius: 12px;
//                     height: 25px;
//                     padding-left: 10px;
//                     display: flex;
//                     align-items: center;
//                 }
//                 .search-text:hover {
//                     background-color: var(--powder-blue);
//                     cursor: pointer;
//                 }
//                 .search-text:active {
//                     background-color: var(--electric-blue);
//                     color: white;
//                 }
//                 .search-hide {
//                     display: none;
//                 }
//             `}</style>
//             {tags[t]}
//         </div>
//     );
// });

export default FilterBar = ({
    filterOptions,
    filterOptionsDictionary,
    selectedFilters,
    updateSelectedFilters,
}) => {
    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilterOptions = () => {
        setShowFilter(!showFilter);
    };

    const handleSelectFilter = (e) => {
        console.log(e.target.value);
        // setFilter([...filter].filter((v) => v != f));
        // updateSelectedFilters
    };
    return (
        <div>
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
            <div
                className="general-container filter-bar"
                onClick={handleShowFilterOptions}
            >
                <div className="filter-bar-text">
                    <span id="filter-name">filter</span>{" "}
                    <span id="filter-x">{showFilter ? "ʌ" : "v"}</span>
                </div>
                {filterOptions}
            </div>
            <div className="selected-filters">
                {selectedFilters.map((f, idx) => {
                    return (
                        <div
                            className="pill"
                            key={idx}
                            onClick={handleSelectFilter}
                        >
                            {`${filterOptionsDictionary[f]} x`}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
