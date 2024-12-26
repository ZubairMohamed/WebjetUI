import * as PropTypes from "prop-types";

SearchInterface.propTypes = {children: PropTypes.any}

/**
 * This component is the parent component to the entire search interface consisting of filters, search results, banner, etc.
 * @param children - takes in react children
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchInterface({children}){
    return (
        <>
            <div className="w-full desktop:container desktop:mx-auto bg-white pl-[12px] pr-[12px]">
                {children}
            </div>
        </>
    )
}
