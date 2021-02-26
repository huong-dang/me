export default FilterBar = ({
    filterOptions,
    selectedFilters,
    updateSelectedFilters,
}) => {
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
                onClick={() => setShowFilter(!showFilter)}
            >
                <div className="filter-bar-text">
                    <span id="filter-name">filter</span>{" "}
                    <span id="filter-x">{showFilter ? "ʌ" : "v"}</span>
                </div>
                {tagsDropdown}
            </div>
            <div className="selected-filters">
                {filter.map((f, idx) => {
                    return (
                        <div
                            className="pill"
                            key={idx}
                            onClick={() => {
                                setFilter([...filter].filter((v) => v != f));
                            }}
                        >
                            {`${tags[f]} x`}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
