import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";

const Search = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">
                    SEARCH
                    </span>
                </div>
                <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Employee Name"
                aria-label="Search"
                onChange={e => context.handleSearchChange(e)}
                />
            </div>
        </div>
    );
}
export default Search;