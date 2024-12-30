import * as PropTypes from 'prop-types';
import Stars from '../Stars/Stars.jsx';

SearchResult.propTypes = {
    title: PropTypes.string,
    stars: PropTypes.number,
    roomType: PropTypes.string,
    price: PropTypes.number,
    isLast: PropTypes.bool,
    imageUrl: PropTypes.string,
    displayResult: PropTypes.bool,
};

/**
 * This component handles displaying a single hotel in the search results.
 * @param title - The title of the hotel.
 * @param stars - The star rating of the hotel.
 * @param roomType - The room type description.
 * @param price - The hotel room price.
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
}) {
    return (
        <>
            {/* Controls whether to display the result in searches */}
            {displayResult ? (
                <div
                    className={`cursor-pointer flex flex-col tablet:flex-row w-full tablet:h-[180px] border border-solid border-gray-400 rounded-md  ${isLast == false && 'mb-5'} shadow-md`}
                >
                    <div className="image grow shrink tablet:basis-[300px] desktop:basis-[350px]">
                        <img
                            className={
                                'h-[120px] tablet:h-full w-full laptop:max-w-[350px] object-cover p-1'
                            }
                            src={imageUrl}
                            alt="Hotel Image"
                        />
                    </div>

                    <div className={'flex flex-row grow shrink basis-full '}>
                        <div className="desc grow shrink basis laptop:basis-[374px] desktop:basis-[374px]">
                            <p className={'roboto-bold text-base'}>{title}</p>
                            <Stars numberOfStars={stars} isFilter={false} />
                            <p>{stars} stars</p>
                            <p
                                className={
                                    'hidden tablet:block text-[13px] whitespace-nowrap '
                                }
                            >
                                <span className={'roboto-bold'}>
                                    Room Type:
                                </span>{' '}
                                {roomType}
                            </p>
                        </div>
                        <div className="price grow-0 shrink basis-[170px] text-[26px] roboto-bold bg-grey-1 flex justify-end p-[26px]">
                            ${price}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
