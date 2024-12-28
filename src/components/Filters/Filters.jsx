import React, {useContext, useState} from "react";
import {AppContext} from "../../App.jsx";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

function CustomFilters() {
    const searchContext = useContext(AppContext);
    const searchKeyword = searchContext.searchKeyword;
    const setSearchKeyword = searchContext.setSearchKeyword;

    const handleChange = (event) => {
        setSearchKeyword(event.target.value);
    }

    const [checked, setChecked] = useState([true, false]);
    //
    // setChecked([true, false]);
    // console.log(checked);

    return (
        <>
            <div
                className={'flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[275px] desktop:max-w-[275px] break-words'}>
                <h6 className={'roboto-bold'}>Filter Results</h6>
                <hr/>
                <h6 className={'roboto-bold'}>Hotel Name</h6>
                <p>{searchKeyword}</p>


                <TextField InputLabelProps={{shrink: false}} id="outlined-basic" placeholder={'Enter Hotel Name'} variant="outlined" onChange={(event) => handleChange(event)}

                           sx={{
                               '& .MuiInputBase-root': {
                                   paddingRight: '0'
                               },
                               '& .MuiInputBase-input': {
                                   borderRight: '1px solid black'
                               }
                           }}
                           slotProps={{
                               input: {
                                   endAdornment: <Button size="large" variant="text" sx={{height: '100%'}}>Go</Button>
                               },
                           }}
                />
                <hr/>
                <h6 className={'roboto-bold'}>Quality Rating</h6>

                <FormControlLabel
                    label="All"
                    control={
                        <Checkbox
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                        />
                    }
                        />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 0 }}>
                    <FormControlLabel
                        label="5"
                        control={<Checkbox   />}
                    />
                    <FormControlLabel
                        label="4"
                        control={<Checkbox   />}
                    />
                    <FormControlLabel
                        label="3"
                        control={<Checkbox   />}
                    />
                    <FormControlLabel
                        label="2"
                        control={<Checkbox   />}
                    />
                    <FormControlLabel
                        label="1"
                        control={<Checkbox   />}
                    />
                </Box>

            </div>
        </>
    )
}

const Filters = React.memo(CustomFilters);

export default Filters;
