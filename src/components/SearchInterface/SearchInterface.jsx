import { Children } from "react";

const SearchInterface = ({children}) => {
    return (
        <>
            <div className="w-full desktop:container desktop:mx-auto bg-white pl-[12px] pr-[12px]">
                {children}
            </div>
        </>
    )
}

export default SearchInterface;
