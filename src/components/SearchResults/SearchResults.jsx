// this component is all search results returned as one component
import SearchResultsDataFromJSON from "../../data/search-result-data.json"
import {useEffect, useState} from "react";
import SearchResult from "../SearchResult/SearchResult.jsx";

const SearchResults = () => {
    const [searchResultsData, setSearchResultsData] = useState();

    useEffect(() => {
        setSearchResultsData(SearchResultsDataFromJSON);
    }, []);

    console.log(searchResultsData);

    return (
        <>

            {searchResultsData !== undefined && searchResultsData.map((value, index) => {
                return (
                    <>
                        <SearchResult key={index} title={value.Title} stars={value.Stars} roomType={value.Room_Type} price={value.Price}  />
                    </>

                );
            })}

        </>
    )
}

export default SearchResults;
