import './App.less'
import Header from "./components/Header/Header.jsx";
import SearchInterface from "./components/SearchInterface/SearchInterface.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";
import {createContext, useEffect, useState} from "react";
import Filters from "./components/Filters/Filters.jsx";

export const AppContext = createContext(undefined);

function App() {

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
    useEffect(() => {
        console.log(searchByRatingCheckboxesOneToFive);
    }, [searchByRatingCheckboxesOneToFive]);

  return (
    <>
        <AppContext.Provider value={{searchKeyword, setSearchKeyword, searchByRatingCheckboxesOneToFive, setSearchByRatingCheckboxesOneToFive}}>
            <div className="wrapper brand-bg-1 roboto-regular">

                <Header />

                ***
                {searchByRatingCheckboxesOneToFive[0] && <p>1 is checked</p>}
                {searchByRatingCheckboxesOneToFive[1] && <p>2 is checked</p>}
                {searchByRatingCheckboxesOneToFive[2] && <p>3 is checked</p>}
                {searchByRatingCheckboxesOneToFive[3] && <p>4 is checked</p>}
                {searchByRatingCheckboxesOneToFive[4] && <p>5 is checked</p>}
                ***

                <SearchInterface title={
                    <h2 className={'pt-[20px] mb-[20px] brand-text-1 roboto-bold'}>550 Hotels Available in Melbourne</h2>
                }>


                    {/*The current search keyword from outside is:*/}
                    {/****{searchKeyword}****/}

                    {/* filters */}
                    <Filters />
                    {/* filters */}

                    {/* search results */}
                    <SearchResults />



                    {/* banner */}
                    <div className={`flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[160px]`}>
                        This is a banner
                    </div>
                    {/* banner */}

                </SearchInterface>

                <p className={'mt-4'}>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, consequatur consequuntur culpa cumque debitis dolore error eum facilis illo ipsum molestias neque nobis non perferendis quam, quia, quibusdam ratione sunt vero. Aliquam eaque eum exercitationem fugiat magnam, molestias optio quisquam ullam. Ab cupiditate hic ipsum laborum molestiae mollitia, nisi quae quibusdam sit sunt. Ab, debitis deserunt dicta dolorem dolorum ex fugit hic in iste maiores mollitia, odit placeat praesentium ut voluptas? Autem, enim impedit maiores nostrum numquam quaerat, quos recusandae suscipit tempora totam vel vitae voluptates voluptatum. Aliquam animi earum et labore nisi officiis qui quis sed sint ullam.</p>
                {/* search results */}

            </div>

            {/* wrapper */}
            {/* title */}
            {/* filter */}
            {/* search results */}
            {/* banner   */}
            {/* wrapper */}
        </AppContext.Provider>


    </>
  )
}

export default App
