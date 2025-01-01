import { Fragment, useContext } from 'react';
import SearchResult from '../SearchResult/SearchResult.jsx';
import { AppContext } from '../../contexts/AppContext.jsx';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

function NoSearchResultsFound() {
    return (
        <Fragment>
            <Box
                className={
                    'px-2.5 py-5 desktop:p-0 flex flex-col justify-center items-center bg-grey-1 brand-text-4     h-full w-full'
                }
            >
                <SearchIcon sx={{ fontSize: '80px', mb: 2 }} />
                <Box className={' max-w-64 text-center '}>
                    <Typography
                        component={'h2'}
                        fontSize={16}
                        className={'roboto-regular'}
                    >
                        No Search Results found, please search again using
                        different keywords or filters.
                    </Typography>
                </Box>
            </Box>
        </Fragment>
    );
}

/**
 * This component consists of all search results returned as one single component. Internally it uses the Search Result component to display each result.
 * @returns {JSX.Element}
 * @constructor
 */
const SearchResults = () => {
    const {
        searchKeyword,
        lowestRatingSelected,
        searchResultsData,
        filteredSearchResultsData,
    } = useContext(AppContext);

    /**
     * This function uses logic to decide if a search result should or should not be display.
     * Cases
     * 1. Search Term is blank and rating is blank => display all search results
     * 2. Search term contains text and rating is blank => filter hotels based on search term
     * 3. Search term is blank and rating is selected => filter hotels based on rating alone
     * 4. Search term contains text and rating is selected => filter hotels based on search term and rating.
     */
    function handleDisplayResult({ title, rating }) {
        let hotelName = title.toString().toLowerCase();

        let filterName = true;
        let filterRating = true;

        //handle search term first
        if (
            searchKeyword === undefined ||
            searchKeyword === null ||
            searchKeyword === ''
        ) {
            filterName = true;
        } else {
            // searching the hotel name to find the search term
            if (hotelName.includes(searchKeyword.toString().toLowerCase())) {
                filterName = true;
            } else {
                filterName = false;
            }
        }

        //handle raiting next
        if (rating >= lowestRatingSelected) {
            filterRating = true;
        } else {
            filterRating = false;
        }

        return filterName && filterRating;
    }

    return (
        <>
            <div className={'flex-grow-0 flex-shrink basis-full'}>
                {searchResultsData !== undefined &&
                    searchResultsData.map((value, index) => {
                        return (
                            <Fragment key={`${value.Title}-${index}`}>
                                <SearchResult
                                    displayResult={handleDisplayResult({
                                        title: value.Title,
                                        rating: value.Stars,
                                    })}
                                    isLast={
                                        searchResultsData.length - 1 == index
                                    }
                                    title={value.Title}
                                    stars={value.Stars}
                                    roomType={value.Room_Type}
                                    price={value.Price}
                                    imageUrl={value.Photo_URL[0]}
                                />
                            </Fragment>
                        );
                    })}
                {filteredSearchResultsData &&
                filteredSearchResultsData.length === 0 ? (
                    <NoSearchResultsFound />
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default SearchResults;
