import * as PropTypes from "prop-types";

SearchResult.propTypes = {
    title: PropTypes.string,
    stars: PropTypes.number,
    roomType: PropTypes.string,
    price: PropTypes.number,
    isLast: PropTypes.bool,
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
export default function SearchResult({title, stars, roomType, price, isLast = false}) {
    return (
        <>
            <div className={`w-full h-[180px] border border-solid border-gray-400 rounded-md  ${isLast == false && 'mb-5'} shadow-md`}>
                <p>Title is: {title}</p>
                <p>Stars is: {stars}</p>
                <p>Room Type is: {roomType}</p>
                <p>Price is: {price}</p>
            </div>

        </>
    )
}
