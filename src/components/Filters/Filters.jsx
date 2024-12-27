import {useContext} from "react";
import {AppContext} from "../../App.jsx";

export default function Filters() {
    const searchContext = useContext(AppContext);
    const searchKeyword = searchContext.searchKeyword;
    const setSearchKeyword = searchContext.setSearchKeyword;

    const handleChange = (event) => {
        setSearchKeyword(event.target.value);
    }

    console.log(searchKeyword);

    return (
        <>
            <div
                className={'flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[275px] desktop:max-w-[275px] break-words'}>
                <h6 className={'roboto-bold'}>Filter Results</h6>
                <hr/>
                <h6 className={'roboto-bold'}>Hotel Name</h6>
                <p>{searchKeyword}</p>
                <input className={'border border-black'} type="text" id="search" name="search" onChange={handleChange}/>
                <hr/>
                <h6 className={'roboto-bold'}>Quality Rating</h6>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        </>
    )
}
