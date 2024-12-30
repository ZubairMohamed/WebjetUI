import React, { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Stars from '../Stars/Stars.jsx';
import Divider from '@mui/material/Divider';
import { VscSearch } from 'react-icons/vsc';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import { useMediaQuery, useTheme } from '@mui/material';

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
        searchKeyword,
        setSearchKeyword,
        searchByRatingCheckboxesOneToFive,
        setSearchByRatingCheckboxesOneToFive,
        lowestRatingSelected,
    } = useContext(AppContext);

    // hotel rating field
    // returns an array where the position of the element in the array represents the raiting number
    // [true, true, true, false, false] => show me hotels with a raiting of [1, 2, 3]
    // here [4, 5] are set to false

    const handleChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    const handleCheckboxChange = (event, checkedValue) => {
        const updatedSearchByRatingCheckboxesOneToFive = [
            ...searchByRatingCheckboxesOneToFive,
        ];
        updatedSearchByRatingCheckboxesOneToFive[checkedValue] =
            !updatedSearchByRatingCheckboxesOneToFive[checkedValue];

        setSearchByRatingCheckboxesOneToFive((prevState) => {
            return updatedSearchByRatingCheckboxesOneToFive;
        });
    };

    const handleAllToggle = (event) => {
        setSearchByRatingCheckboxesOneToFive((prevState) => {
            return [true, true, true, true, true];
        });
    };

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
                <h6 className={'roboto-bold'}>Filter Results</h6>

                <Divider sx={{ mb: 2, mt: 2 }} />

                <Accordion
                    defaultExpanded={isDesktop}
                    sx={{
                        background: 'none',
                        boxShadow: 'none',
                        '&:before': { height: '0px' },

                        '&.MuiAccordion-root': {
                            border: 'none', // remove border when collapsed
                        },
                        '& .MuiAccordionDetails-root': {
                            padding: '0px',
                        },
                        '& .MuiAccordionSummary-root': {
                            padding: '0px',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropUp />}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse', // Reverses the flex order to put the icon at the front
                            alignItems: 'center',
                        }}
                        aria-controls="hotelNamefilter-content"
                        id="hotelNamefilter"
                    >
                        <Typography component="h6">
                            <span className={'roboto-bold'}>Hotel Name</span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField
                            InputLabelProps={{ shrink: false }}
                            id="outlined-basic"
                            placeholder={'Enter Hotel Name'}
                            variant="outlined"
                            onChange={(event) => handleChange(event)}
                            sx={{
                                // mb: '20px',
                                // mt: '20px',
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
                    </AccordionDetails>
                </Accordion>

                <Divider sx={{ mb: 2, mt: 2 }} />

                <Accordion
                    defaultExpanded={isDesktop}
                    sx={{
                        background: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        '&:before': { height: '0px' },
                        '&.MuiAccordion-root': {
                            border: 'none', // remove border when collapsed
                        },
                        '& .MuiAccordionDetails-root': {
                            padding: '0px',
                        },
                        '& .MuiAccordionSummary-root': {
                            padding: '0px',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropUp />}
                        aria-controls="hotelRatingfilter-content"
                        id="hotelRatingfilter"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse', // Reverses the flex order to put the icon at the front
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h6">
                            <span className={'roboto-bold'}>
                                Quality Rating
                            </span>
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <p className={'text-sm mt-1'}>
                            Showing hotels with ratings of{' '}
                            {lowestRatingSelected}+
                        </p>
                        <FormControlLabel
                            label="All"
                            control={
                                <Checkbox
                                    checked={
                                        lowestRatingSelected === 1 ||
                                        Object.values(
                                            searchByRatingCheckboxesOneToFive
                                        ).every(
                                            (checkboxvalue) =>
                                                checkboxvalue === true
                                        )
                                    }
                                    onChange={(event) => handleAllToggle(event)}
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
                                        checked={
                                            searchByRatingCheckboxesOneToFive[4]
                                        }
                                    />
                                }
                                onChange={(event) =>
                                    handleCheckboxChange(event, 4)
                                }
                            />
                            <FormControlLabel
                                label={<Stars numberOfStars={4} />}
                                control={
                                    <Checkbox
                                        checked={
                                            searchByRatingCheckboxesOneToFive[3]
                                        }
                                    />
                                }
                                onChange={(event) =>
                                    handleCheckboxChange(event, 3)
                                }
                            />
                            <FormControlLabel
                                label={<Stars numberOfStars={3} />}
                                control={
                                    <Checkbox
                                        checked={
                                            searchByRatingCheckboxesOneToFive[2]
                                        }
                                    />
                                }
                                onChange={(event) =>
                                    handleCheckboxChange(event, 2)
                                }
                            />
                            <FormControlLabel
                                label={<Stars numberOfStars={2} />}
                                control={
                                    <Checkbox
                                        checked={
                                            searchByRatingCheckboxesOneToFive[1]
                                        }
                                    />
                                }
                                onChange={(event) =>
                                    handleCheckboxChange(event, 1)
                                }
                            />
                            <FormControlLabel
                                label={<Stars numberOfStars={1} />}
                                control={
                                    <Checkbox
                                        checked={
                                            searchByRatingCheckboxesOneToFive[0]
                                        }
                                    />
                                }
                                onChange={(event) =>
                                    handleCheckboxChange(event, 0)
                                }
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
}

const Filters = React.memo(CustomFilters);

export default Filters;
