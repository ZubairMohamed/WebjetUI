import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Stars from '../Stars/Stars.jsx';
import Divider from '@mui/material/Divider';
import { VscSearch } from 'react-icons/vsc';
import { useMediaQuery, useTheme } from '@mui/material';
import CustomAccordion from '../CustomAccordion/CustomAccordion.jsx';

/**
 * Component that handles displaying the filters that show up in the search interface.
 * @returns {Element}
 * @constructor
 */
function CustomFilters() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // Detect if screen width is medium or larger (desktop)

    // hotel name search field
    const {
        handleSearchTextFieldChange,
        handleCheckboxChange,
        handleAllCheckboxToggle,
        searchByRatingCheckboxesOneToFive,
        lowestRatingSelected,
    } = useContext(AppContext);

    return (
        <>
            <Box
                className={
                    'flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[275px] desktop:max-w-[275px] break-words bg-grey-1'
                }
                pt={2}
                pb={2}
                pl={1}
                pr={1}
                p={3}
            >
                <h6 className={'roboto-bold brand-text-5'}>Filter Results</h6>
                <Box
                    component={'p'}
                    className={'text-xs mt-1 desktop:hidden brand-text-5'}
                >
                    Click on the filter to show or hide it.
                </Box>

                <Divider sx={{ mb: 1, mt: 2 }} />

                <CustomAccordion title={'Hotel Name'} isDesktop={isDesktop}>
                    <TextField
                        InputLabelProps={{ shrink: false }}
                        id="outlined-basic"
                        placeholder={'Enter Hotel Name'}
                        variant="outlined"
                        onChange={(event) => handleSearchTextFieldChange(event)}
                        sx={{
                            mb: 2,
                            // mt: '20px',
                            height: '50px',
                            fontSize: '12px',
                            '& .MuiOutlinedInput-input': {
                                background: '#fff',
                            },
                            '& .MuiInputBase-root': {
                                paddingRight: '0',
                                borderRadius: '0',
                            },
                            '& .MuiInputBase-input': {
                                borderRight: '1px solid #e6e6e6',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontSize: '12px', // Adjust font size of placeholder text
                            },
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <Button
                                        size="large"
                                        variant="text"
                                        sx={{
                                            color: '#999999',
                                            height: '100%',
                                            borderRadius: '0px',
                                        }}
                                    >
                                        <VscSearch size={20} />
                                    </Button>
                                ),
                            },
                        }}
                    />
                </CustomAccordion>

                <Divider sx={{ mb: 1, mt: 1 }} />

                <CustomAccordion title={'Quality Rating'} isDesktop={isDesktop}>
                    <p className={'mt-0 mb-2 text-[12px]'}>
                        Showing hotels with ratings of {lowestRatingSelected}+
                    </p>
                    <FormControlLabel
                        label="All"
                        sx={{
                            fontSize: '13px',
                            '& .MuiTypography-root': {
                                fontSize: '13px',
                            },
                        }}
                        control={
                            <Checkbox
                                color="default"
                                checked={
                                    lowestRatingSelected === 1 ||
                                    Object.values(
                                        searchByRatingCheckboxesOneToFive
                                    ).every(
                                        (checkboxValue) =>
                                            checkboxValue === true
                                    )
                                }
                                onChange={(event) =>
                                    handleAllCheckboxToggle(event)
                                }
                            />
                        }
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            ml: 0,
                        }}
                    >
                        <FormControlLabel
                            label={<Stars numberOfStars={5} />}
                            control={
                                <Checkbox
                                    color="default"
                                    checked={
                                        searchByRatingCheckboxesOneToFive[4]
                                    }
                                />
                            }
                            onChange={(event) => handleCheckboxChange(event, 4)}
                        />
                        <FormControlLabel
                            label={<Stars numberOfStars={4} />}
                            control={
                                <Checkbox
                                    color="default"
                                    checked={
                                        searchByRatingCheckboxesOneToFive[3]
                                    }
                                />
                            }
                            onChange={(event) => handleCheckboxChange(event, 3)}
                        />
                        <FormControlLabel
                            label={<Stars numberOfStars={3} />}
                            control={
                                <Checkbox
                                    color="default"
                                    checked={
                                        searchByRatingCheckboxesOneToFive[2]
                                    }
                                />
                            }
                            onChange={(event) => handleCheckboxChange(event, 2)}
                        />
                        <FormControlLabel
                            label={<Stars numberOfStars={2} />}
                            control={
                                <Checkbox
                                    color="default"
                                    checked={
                                        searchByRatingCheckboxesOneToFive[1]
                                    }
                                />
                            }
                            onChange={(event) => handleCheckboxChange(event, 1)}
                        />
                        <FormControlLabel
                            label={<Stars numberOfStars={1} />}
                            control={
                                <Checkbox
                                    color="default"
                                    checked={
                                        searchByRatingCheckboxesOneToFive[0]
                                    }
                                />
                            }
                            onChange={(event) => handleCheckboxChange(event, 0)}
                        />
                    </Box>
                </CustomAccordion>
            </Box>
        </>
    );
}

const Filters = React.memo(CustomFilters);

export default Filters;
