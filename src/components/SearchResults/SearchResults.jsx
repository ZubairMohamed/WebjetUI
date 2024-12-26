// this component is all search results returned as one component
import SearchResultsDataFromJSON from "../../data/search-result-data.json"
import {useEffect, useState} from "react";
// import SearchResult from "/src/components/SearchResult/SearchResult.jsx";

const SearchResults = () => {
    const [searchResultsData, setSearchResultsData] = useState();

    useEffect(() => {
        setSearchResultsData(SearchResultsDataFromJSON);
    }, []);

    console.log(searchResultsData);

    return (
        <>

            {searchResultsData !== undefined && searchResultsData.map((value, index) => {
                // title, rating, pictures, roomType, price
                return (
                    <>
                        <div id={`${value.Title}-${index}`}>{value.Title}</div>
                        <div id={`${value.Stars}-${index}`}>{value.Stars}</div>
                        <div id={`${value.Room_Type}-${index}`}>{value.Room_Type}</div>
                        <div id={`${value.Price}-${index}`}>{value.Price}</div>
                    </>

                );
            })}


        </>
    )
}

export default SearchResults;
