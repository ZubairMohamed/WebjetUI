import * as PropTypes from "prop-types";
import {GiDiamonds} from "react-icons/gi";

Stars.propTypes = {
    numberOfStars: PropTypes.number,
    isFilter: PropTypes.bool,
}

export default function Stars({numberOfStars, isFilter = true}) {
    let fraction = false;
    if((numberOfStars % 1) === 0.5) {
        fraction = true
    }

    return (
        <div className='flex items-center'>
            {Array.from({length: numberOfStars}).map((_, index) => (
                // <ImDiamonds key={index} className={'icon-fill-1'}  />
                <GiDiamonds key={index} className={'icon-fill-1'} size={20} />
            ))}
            {isFilter && (
                <p className='text-sm ml-0.5'>&amp; up</p>
            )}

        </div>
    );
}