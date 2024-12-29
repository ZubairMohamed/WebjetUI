// This separates the AppContext Logic into its own file and prevents re-renders in child components
import {createContext, useEffect, useState} from "react";
import * as PropTypes from "prop-types";

export const AppContext = createContext(null);

AppContextProvider.propTypes = {children: PropTypes.any};

export default function AppContextProvider({children}) {
    /**
     * This state is responsible for tracking the search keyword being used by the search filter
     */
    const [searchKeyword, setSearchKeyword] = useState(null);

    /**
     * By default vehicles of all raitings are selected
     * searchByRaiting is an array that represents if a checkbox is checked
     * The position of the array element determines the number of stars received by the hotel.
     * In JS array elements are offset by one starting from position 0.
     * e.g. [true, true, true, true, true] => means that hotels of rating [ 1, 2, 3, 4, 5] are to be visible
     */
    const [searchByRatingCheckboxesOneToFive, setSearchByRatingCheckboxesOneToFive] = useState([true, true, true, true, true]);

    // what is the lowest rating selected?
    const [lowestRatingSelected, setLowestRatingSelected] = useState(1);

    useEffect(() => {

        let index = searchByRatingCheckboxesOneToFive.findIndex(selectedCheckbox => selectedCheckbox === true);

        setLowestRatingSelected(prevState => {

            return index !== -1 ? index + 1 : 1
        })

        searchByRatingCheckboxesOneToFive[index] = true;

    }, [searchByRatingCheckboxesOneToFive]);




    return (
        <AppContext.Provider value={{searchKeyword, setSearchKeyword, searchByRatingCheckboxesOneToFive, setSearchByRatingCheckboxesOneToFive, lowestRatingSelected, setLowestRatingSelected}}>
            {children}
        </AppContext.Provider>
    )
}
