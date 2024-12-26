import * as PropTypes from "prop-types";

SearchResult.propTypes = {
    title: PropTypes.any,
    stars: PropTypes.any,
    photoURL: PropTypes.any,
    photoALTText: PropTypes.any,
    roomType: PropTypes.any,
    price: PropTypes.any
}

// this is a single search result
const SearchResult = ({title, stars, roomType, price, photoURL = null, photoALTText = null }) => {
        <>
            <div className={'w-[350px] h-[180px]'}>
                <p>{title}</p>
                <p>{stars}</p>
                <p>{photoURL}</p>
                <p>{photoALTText}</p>
                <p>{roomType}</p>
                <p>{price}</p>
            </div>
        </>
}

export default SearchResult;
