import * as PropTypes from "prop-types";

SearchResult.propTypes = {
    title: PropTypes.string,
    stars: PropTypes.number,
    roomType: PropTypes.string,
    price: PropTypes.number,
}

export default function SearchResult({title, stars, roomType, price}) {
    return (
        <>
            <p>Title is: {title}</p>
            <p>Stars is: {stars}</p>
            <p>Room Type is: {roomType}</p>
            <p>Price is: {price}</p>
            <br/>
        </>
    )
}
