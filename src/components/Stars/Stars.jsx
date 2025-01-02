import * as PropTypes from 'prop-types';
import { GiDiamonds } from 'react-icons/gi';
import classes from './Stars.module.less';
import { Fragment } from 'react';

Stars.propTypes = {
    numberOfStars: PropTypes.number,
    isFilter: PropTypes.bool,
};

/**
 * This is used to show stars inside the UI. Stars are displayed in the filters and the hotel search results.
 * @param numberOfStars - this is the number of stars to show.
 * @param isFilter - if this is set to true then the component will return a & up at the end of the stars.
 * @returns {JSX.Element}
 */
export default function Stars({ numberOfStars, isFilter = true }) {
    let fraction = false;
    if (numberOfStars % 1 === 0.5) {
        fraction = true;
    }

    return (
        <div className="flex items-center">
            {Array.from({ length: numberOfStars }).map((_, index) => (
                // <ImDiamonds key={index} className={'icon-fill-1'}  />
                <Fragment key={index}>
                    <GiDiamonds className={classes.iconFill} size={20} />
                    {/*
                        - here we are first checking if fraction is true
                        - next we are checking if currently we are on the last loop
                        - the last loop is equal to the number of elements in our array - 1
                        - lastly we are subtracting 0.5 as our number contains a fractional value
                     */}
                    {fraction && index === numberOfStars - 1 - 0.5 && (
                        <GiDiamonds
                            className={`${classes.half} ${classes.iconFill}`}
                            size={20}
                        />
                    )}
                </Fragment>
            ))}
            {isFilter && <p className="text-xs ml-0.5">&amp; up</p>}
        </div>
    );
}
