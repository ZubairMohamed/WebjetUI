import * as PropTypes from "prop-types";

SearchInterface.propTypes = {children: PropTypes.any, title: PropTypes.element};

/**
 * This component is the parent component to the entire search interface consisting of filters, search results, banner, etc.
 * @param children - takes in react children
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchInterface({children, title}){
    return (
        <>
            <div className="w-full desktop:container desktop:mx-auto bg-white pl-[12px] pr-[12px] pb-[20px] ">
                {title}
                <div className="flex flex-col desktop:flex-row gap-5">
                    {children}
                </div>
            </div>
        </>
    )
}
