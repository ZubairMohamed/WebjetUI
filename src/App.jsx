import './App.less';
import Header from './components/Header/Header.jsx';
import SearchInterface from './components/SearchInterface/SearchInterface.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Filters from './components/Filters/Filters.jsx';
import AppContextProvider, { AppContext } from './contexts/AppContext.jsx';
import { useContext } from 'react';

function App() {
    return (
        <>
            <AppContextProvider>
                <div className="wrapper brand-bg-1 roboto-regular">
                    <Header />
                    <SearchInterface
                        title={
                            <h2
                                className={
                                    'pt-[20px] mb-[20px] brand-text-1 roboto-bold'
                                }
                            >
                                550 Hotels Available in Melbourne
                            </h2>
                        }
                    >
                        {/*The current search keyword from outside is:*/}
                        {/****{searchKeyword}****/}

                        {/* filters */}
                        <Filters />
                        {/* filters */}

                        {/* search results */}
                        <SearchResults />

                        {/* banner */}
                        <div
                            className={`flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[160px]`}
                        >
                            This is a banner
                        </div>
                        {/* banner */}
                    </SearchInterface>
                    = {/* search results */}
                </div>

                {/* wrapper */}
                {/* title */}
                {/* filter */}
                {/* search results */}
                {/* banner   */}
                {/* wrapper */}
            </AppContextProvider>
        </>
    );
}

export const Test = () => {
    const { searchByRatingCheckboxesOneToFive } = useContext(AppContext);
    return (
        <div>
            ***
            {searchByRatingCheckboxesOneToFive &&
                searchByRatingCheckboxesOneToFive[0] && <p>1 is checked</p>}
            {searchByRatingCheckboxesOneToFive[1] && <p>2 is checked</p>}
            {searchByRatingCheckboxesOneToFive[2] && <p>3 is checked</p>}
            {searchByRatingCheckboxesOneToFive[3] && <p>4 is checked</p>}
            {searchByRatingCheckboxesOneToFive[4] && <p>5 is checked</p>}
            ***
        </div>
    );
};

export default App;
