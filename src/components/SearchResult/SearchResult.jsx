import * as PropTypes from "prop-types";

SearchResult.propTypes = {
    title: PropTypes.string,
    stars: PropTypes.number,
    roomType: PropTypes.string,
    price: PropTypes.number,
    isLast: PropTypes.bool,
    displayResult: PropTypes.bool,
}

/**
 * This component handles displaying a single hotel in the search results.
 * @param title - The title of the hotel.
 * @param stars - The star rating of the hotel.
 * @param roomType - The room type description.
 * @param price - The hotel room price.
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchResult({title, stars, roomType, price, isLast = false, displayResult = true}) {
    return (
        <>
            {/* Controls whether to display the result in searches */}
            {displayResult ? (
                <div className={`flex w-full h-[180px] border border-solid border-gray-400 rounded-md  ${isLast == false && 'mb-5'} shadow-md`}>
                    <div className="image grow shrink laptop:basis-[186px] desktop:basis-[186px]">
                        this is an image
                    </div>
                    <div className="desc grow shrink laptop:basis-[374px] desktop:basis-[374px] ">
                        <p className={'roboto-bold text-base'}>{title}</p>
                        <p>{stars} stars</p>
                        <p className={'text-[13px] whitespace-nowrap '}><span className={"roboto-bold"}>Room Type:</span> {roomType}</p>
                    </div>
                    <div className="price grow-0 shrink basis-[170px] text-[26px] roboto-bold bg-grey-1 flex justify-end p-[26px] ">
                        ${price}
                    </div>

                </div>
                ) : null}

        </>
    )
}
