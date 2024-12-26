import SearchResultsDataFromJSON from "../../data/search-result-data.json"
import {useEffect, useState} from "react";
import SearchResult from "../SearchResult/SearchResult.jsx";

/**
 * This component consists of all search results returned as one single component. Internally it uses the Search Result component to display each result.
 * @returns {JSX.Element}
 * @constructor
 */
const SearchResults = () => {
    const [searchResultsData, setSearchResultsData] = useState();

    useEffect(() => {
        setSearchResultsData(SearchResultsDataFromJSON);
    }, []);

    return (
        <>

            {searchResultsData !== undefined && searchResultsData.map((value, index) => {
                return (
                    <>
                        <SearchResult key={index} isLast={searchResultsData.length - 1 == index} title={value.Title} stars={value.Stars} roomType={value.Room_Type} price={value.Price}  />
                    </>

                );
            })}

        </>
    )
}

export default SearchResults;
