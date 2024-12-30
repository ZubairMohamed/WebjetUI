import React, {useContext, useState} from "react";
import {AppContext} from "../../contexts/AppContext.jsx";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Stars from "../Stars/Stars.jsx";
import Divider from '@mui/material/Divider';

/**
 * Component that handles displaying the filters that show up in the search interface.
 * @returns {Element}
 * @constructor
 */
function CustomFilters() {
    // hotel name search field
    const {searchKeyword, setSearchKeyword, searchByRatingCheckboxesOneToFive, setSearchByRatingCheckboxesOneToFive, lowestRatingSelected} = useContext(AppContext);

    // hotel rating field
    // returns an array where the position of the element in the array represents the raiting number
    // [true, true, true, false, false] => show me hotels with a raiting of [1, 2, 3]
    // here [4, 5] are set to false

    const handleChange = (event) => {
        setSearchKeyword(event.target.value);
    }

    const handleCheckboxChange = (event, checkedValue) => {
        const updatedSearchByRatingCheckboxesOneToFive = [...searchByRatingCheckboxesOneToFive];
        updatedSearchByRatingCheckboxesOneToFive[checkedValue] = !updatedSearchByRatingCheckboxesOneToFive[checkedValue];

        setSearchByRatingCheckboxesOneToFive(prevState => {
            return updatedSearchByRatingCheckboxesOneToFive;
        });
    }

    const handleAllToggle = (event) => {
        setSearchByRatingCheckboxesOneToFive(prevState => {
            return [true, true, true, true, true];
        });
    }

    return (
        <>
            <div
                className={'flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[275px] desktop:max-w-[275px] break-words'}>
                <h6 className={'roboto-bold'}>Filter Results</h6>

                <Divider sx={{mb: 2, mt: 2}}/>

                <h6 className={'roboto-bold'}>Hotel Name</h6>

                <TextField InputLabelProps={{shrink: false}} id="outlined-basic" placeholder={'Enter Hotel Name'} variant="outlined" onChange={(event) => handleChange(event)}

                           sx={{
                               '& .MuiInputBase-root': {
                                   paddingRight: '0',
                                   borderRadius: '0',
                               },
                               '& .MuiInputBase-input': {
                                   borderRight: '1px solid black'
                               }
                           }}
                           slotProps={{
                               input: {
                                   endAdornment: <Button size="large" variant="text" sx={{height: '100%', borderRadius: '0px' }}>Go</Button>
                               },
                           }}
                />
                <Divider sx={{mb: 2, mt: 2}}/>

                <h6 className={'roboto-bold'}>Quality Rating</h6>
                <p className={'text-sm mt-1'}>Showing hotels with ratings of {lowestRatingSelected} &amp; up.</p>


                <FormControlLabel
                    label="All"
                    control={
                        <Checkbox
                            checked={lowestRatingSelected === 1 || Object.values(searchByRatingCheckboxesOneToFive).every(checkboxvalue => checkboxvalue === true)}
                            onChange={(event) => handleAllToggle(event)}
                            // checked={searchByRatingCheckboxesOneToFive[0] && searchByRatingCheckboxesOneToFive[1] && searchByRatingCheckboxesOneToFive[2] && searchByRatingCheckboxesOneToFive[3] && searchByRatingCheckboxesOneToFive[4]}
                            // indeterminate={searchByRatingCheckboxesOneToFive[0] !== searchByRatingCheckboxesOneToFive[1] !== searchByRatingCheckboxesOneToFive[2] !== searchByRatingCheckboxesOneToFive[3] !== searchByRatingCheckboxesOneToFive[4]}                            checked={searchByRatingCheckboxesOneToFive[0] && searchByRatingCheckboxesOneToFive[1] && searchByRatingCheckboxesOneToFive[2] && searchByRatingCheckboxesOneToFive[3] && searchByRatingCheckboxesOneToFive[4]}
                            // indeterminate={searchByRatingCheckboxesOneToFive[0] !== searchByRatingCheckboxesOneToFive[1] !== searchByRatingCheckboxesOneToFive[2]}
                        />
                    }
                        />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 0 }}>
                    <FormControlLabel
                        label={
                            <Stars numberOfStars={5} />
                        }
                        control={<Checkbox checked={searchByRatingCheckboxesOneToFive[4]}   />}
                        onChange={(event) => handleCheckboxChange(event, 4)}
                    />
                    <FormControlLabel
                        label={
                            <Stars numberOfStars={4} />
                        }
                        control={<Checkbox checked={searchByRatingCheckboxesOneToFive[3]}  />}
                        onChange={(event) => handleCheckboxChange(event, 3)}
                    />
                    <FormControlLabel
                        label={
                            <Stars numberOfStars={3} />
                        }
                        control={<Checkbox checked={searchByRatingCheckboxesOneToFive[2]}  />}
                        onChange={(event) => handleCheckboxChange(event, 2)}
                    />
                    <FormControlLabel
                        label={
                            <Stars numberOfStars={2} />
                        }
                        control={<Checkbox checked={searchByRatingCheckboxesOneToFive[1]}  />}
                        onChange={(event) => handleCheckboxChange(event, 1)}
                    />
                    <FormControlLabel
                        label={
                            <Stars numberOfStars={1} />
                        }
                        control={<Checkbox  checked={searchByRatingCheckboxesOneToFive[0]} />}
                        onChange={(event) => handleCheckboxChange(event, 0)}
                    />
                </Box>

            </div>
        </>
    )
}



const Filters = React.memo(CustomFilters);

export default Filters;
