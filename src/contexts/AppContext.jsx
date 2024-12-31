// This separates the AppContext Logic into its own file and prevents re-renders in child components
import { createContext, useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import SearchResultsDataFromJSON from '../data/search-result-data.json';

export const AppContext = createContext(null);

AppContextProvider.propTypes = { children: PropTypes.any };

export default function AppContextProvider({ children }) {
    // ------------------------------SEARCH RESULTS DATA -------------------------------- //

    const [searchResultsData, setSearchResultsData] = useState();

    useEffect(() => {
        setSearchResultsData(SearchResultsDataFromJSON);
    }, [SearchResultsDataFromJSON]);
    // ------------------------------SEARCH RESULTS DATA -------------------------------- //

    // ------------------------------SEARCH BOX -------------------------------- //
    /**
     * This state is responsible for tracking the search keyword being used by the search filter
     */
    const [searchKeyword, setSearchKeyword] = useState(null);

    /**
     * function that is run when a user types text into a textbox. Used by filters
     * @param event
     */
    const handleSearchTextFieldChange = (event) => {
        setSearchKeyword(event.target.value);
    };
    // ------------------------------SEARCH BOX -------------------------------- //

    // ------------------------------STAR RATING -------------------------------- //

    /**
     * By default vehicles of all raitings are selected
     * searchByRaiting is an array that represents if a checkbox is checked
     * The position of the array element determines the number of stars received by the hotel.
     * In JS array elements are offset by one starting from position 0.
     * e.g. [true, true, true, true, true] => means that hotels of rating [ 1, 2, 3, 4, 5] are to be visible
     */
    const [
        searchByRatingCheckboxesOneToFive,
        setSearchByRatingCheckboxesOneToFive,
    ] = useState([true, true, true, true, true]);

    // what is the lowest rating selected?
    const [lowestRatingSelected, setLowestRatingSelected] = useState(1);

    useEffect(() => {
        let index = searchByRatingCheckboxesOneToFive.findIndex(
            (selectedCheckbox) => selectedCheckbox === true
        );

        setLowestRatingSelected((prevState) => {
            return index !== -1 ? index + 1 : 1;
        });

        searchByRatingCheckboxesOneToFive[index] = true;
    }, [searchByRatingCheckboxesOneToFive]);

    // hotel rating field
    // returns an array where the position of the element in the array represents the raiting number
    // [true, true, true, false, false] => show me hotels with a raiting of [1, 2, 3]
    // here [4, 5] are set to false

    /**
     * function that is run when a user clicks on a checkbox to display hotels with different star ratings.
     * This is used by filters
     * @param event
     * @param checkedValue
     */
    const handleCheckboxChange = (event, checkedValue) => {
        const updatedSearchByRatingCheckboxesOneToFive = [
            ...searchByRatingCheckboxesOneToFive,
        ];
        updatedSearchByRatingCheckboxesOneToFive[checkedValue] =
            !updatedSearchByRatingCheckboxesOneToFive[checkedValue];

        setSearchByRatingCheckboxesOneToFive((prevState) => {
            return updatedSearchByRatingCheckboxesOneToFive;
        });
    };

    /**
     * function that is run when a user clicks on the all stars checkbox used by filters.
     * @param event
     */
    const handleAllCheckboxToggle = (event) => {
        setSearchByRatingCheckboxesOneToFive((prevState) => {
            return [true, true, true, true, true];
        });
    };
    // ------------------------------STAR RATING -------------------------------- //

    return (
        <AppContext.Provider
            value={{
                searchKeyword,
                setSearchKeyword,
                handleSearchTextFieldChange,
                handleCheckboxChange,
                handleAllCheckboxToggle,
                searchByRatingCheckboxesOneToFive,
                setSearchByRatingCheckboxesOneToFive,
                lowestRatingSelected,
                setLowestRatingSelected,
                searchResultsData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
