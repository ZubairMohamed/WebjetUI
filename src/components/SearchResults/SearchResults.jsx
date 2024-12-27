import SearchResultsDataFromJSON from "../../data/search-result-data.json"
import {useContext, useEffect, useState} from "react";
import SearchResult from "../SearchResult/SearchResult.jsx";
import {AppContext} from "../../App.jsx";

/**
 * This component consists of all search results returned as one single component. Internally it uses the Search Result component to display each result.
 * @returns {JSX.Element}
 * @constructor
 */
const SearchResults = () => {
    const [searchResultsData, setSearchResultsData] = useState();

    const searchContext = useContext(AppContext);
    const searchKeyword = searchContext.searchKeyword;
    const setSearchKeyword = searchContext.setSearchKeyword;

    useEffect(() => {
        setSearchResultsData(SearchResultsDataFromJSON);
    }, []);

    /**
     * This function uses logic to decide if a search result should or should not be display.
     * Cases
     * 1. Search Term is blank and rating is blank => display all search results
     * 2. Search term contains text and rating is blank => filter hotels based on search term
     * 3. Search term is blank and rating is selected => filter hotels based on rating alone
     * 4. Search term contains text and rating is selected => filter hotels based on search term and rating.
     */
    function handleDisplayResult({title, rating}) {
        let hotelName = title.toString().toLowerCase();

        //handle search term first
        if(searchKeyword === undefined || searchKeyword === null || searchKeyword === '') {
            return true;
        }

        // searching the hotel name to find the search term
        if(hotelName.includes(searchKeyword.toString().toLowerCase())) {
            return true;
        } else {
            return false;
        }



        //handle raiting next
    }

    return (
        <>
            <div className={'flex-grow-0 flex-shrink basis-full'}>
                {searchResultsData !== undefined && searchResultsData.map((value, index) => {
                    return (
                        <>
                            <SearchResult displayResult={handleDisplayResult({title: value.Title, rating: value.Stars})} key={index} isLast={searchResultsData.length - 1 == index} title={value.Title} stars={value.Stars} roomType={value.Room_Type} price={value.Price}  />
                        </>

                    );
                })}
            </div>

        </>
    )
}

export default SearchResults;
