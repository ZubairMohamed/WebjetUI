import './App.less';
import Header from './components/Header/Header.jsx';
import SearchInterface from './components/SearchInterface/SearchInterface.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import Filters from './components/Filters/Filters.jsx';
import AppContextProvider, { AppContext } from './contexts/AppContext.jsx';
import { useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

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
                                    'pt-[20px] mb-[20px] brand-text-1 roboto-bold flex items-center'
                                }
                            >
                                <Sentence />
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

export const Sentence = () => {
    const { searchResultsData, filteredSearchResultsData } =
        useContext(AppContext);
    return (
        <>
            {filteredSearchResultsData && filteredSearchResultsData.length} of{' '}
            {searchResultsData && searchResultsData.length} Hotels Available in
            Melbourne{' '}
            <Tooltip title="Adjust the filters below to find the hotel that you need.">
                <IconButton aria-label={'Learn-More-Information-Button'}>
                    <InfoIcon fontSize={'small'} />
                </IconButton>
            </Tooltip>
        </>
    );
};

export default App;
