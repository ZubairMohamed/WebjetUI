import * as PropTypes from 'prop-types';
import Stars from '../Stars/Stars.jsx';
import classes from './SearchResult.module.less';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

SearchResult.propTypes = {
    title: PropTypes.string,
    stars: PropTypes.number,
    roomType: PropTypes.string,
    price: PropTypes.number,
    isLast: PropTypes.bool,
    imageUrl: PropTypes.string,
    imageAltText: PropTypes.string,
    displayResult: PropTypes.bool,
};

/**
 * This component handles displaying a single hotel in the search results.
 * @param title - The title of the hotel.
 * @param stars - The star rating of the hotel.
 * @param roomType - The room type description.
 * @param price - The hotel room price.
 * @param isLast - Used to determine if this is the last search result
 * @param displayResult - Used to determine if the hotel is displayed in search results
 * @param imageUrl - This is the link to the image displayed in search results
 * @param imageAltText - This is the text that is displayed in case the image is not loaded
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchResult({
    title,
    stars,
    roomType,
    price,
    isLast = false,
    displayResult = true,
    imageUrl,
    imageAltText,
}) {
    return (
        <>
            {/* Controls whether to display the result in searches */}
            {displayResult ? (
                <div
                    className={`cursor-pointer flex flex-col tablet:flex-row w-full tablet:h-[180px] border border-solid ${classes.searchResultBorder} rounded-md  ${isLast === false && 'mb-5'} shadow-md`}
                >
                    <div className="image grow shrink tablet:basis-[300px] desktop:basis-[350px]">
                        <img
                            className={
                                'h-[120px] tablet:h-full w-full laptop:max-w-[350px] object-cover p-1'
                            }
                            src={imageUrl}
                            alt={imageAltText}
                        />
                    </div>

                    <div
                        className={
                            'flex flex-row grow shrink basis-full gap-[14px]'
                        }
                    >
                        <div className="flex flex-col tablet:gap-[14px] desc grow shrink basis laptop:basis-[374px] p-2.5 desktop:basis-[374px]">
                            <p className={'roboto-bold text-base'}>{title}</p>
                            <Stars numberOfStars={stars} isFilter={false} />
                            <p
                                className={
                                    'hidden tablet:block text-[13px] whitespace-nowrap brand-text-4'
                                }
                            >
                                <span className={'roboto-bold'}>
                                    Room Type:
                                </span>{' '}
                                {roomType}
                            </p>
                        </div>
                        <div className="price grow-0 shrink basis-[170px] text-[26px] roboto-bold bg-grey-1 brand-text-5 flex items-end justify-end  tablet:items-stretch tablet:p-[26px]">
                            <span
                                className={'pb-2.5 pr-2 tablet:p-0 tablet:pr-0'}
                            >
                                ${price}
                            </span>
                            <Box
                                className={
                                    'tablet:hidden h-full brand-bg-3 cursor-pointer'
                                }
                            >
                                <IconButton
                                    aria-label={`Select-Hotel-Button-${title}`}
                                    disableRipple={true}
                                    sx={{
                                        height: '100%',
                                    }}
                                >
                                    <ArrowRightIcon
                                        sx={{ color: 'white' }}
                                    ></ArrowRightIcon>
                                </IconButton>
                            </Box>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
