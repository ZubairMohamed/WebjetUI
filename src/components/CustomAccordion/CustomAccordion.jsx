import * as PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import { useState } from 'react';

/**
 * This custom accordion is used by Filters. Allows individual filters to be collapsed and expanded.
 * By default, the accordion is expanded on desktop and collapsed on screen sizes below desktop.
 * @param title
 * @param children
 * @param isDesktop
 * @returns {JSX.Element}
 * @constructor
 */
export default function CustomAccordion({ title, children, isDesktop }) {
    const [expanded, setExpanded] = useState(isDesktop);

    const handleAccordionChange = (event, isExpanded) => {
        setExpanded((expanded) => {
            return !expanded;
        });
    };

    return (
        <>
            <Accordion
                expanded={expanded}
                onChange={() => handleAccordionChange(event)}
                sx={{
                    background: 'none',
                    boxShadow: 'none',
                    '&:before': { height: '0px' },

                    '&.MuiAccordion-root': {
                        border: 'none', // remove border when collapsed
                    },
                    '& .MuiAccordionDetails-root': {
                        padding: '0px',
                        paddingLeft: '24px',
                    },
                    '& .MuiAccordionSummary-root': {
                        padding: '0px',
                        maxHeight: '40px',
                    },
                    '& .MuiAccordionSummary-content.Mui-expanded': {
                        margin: '10px 0',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ArrowDropUp sx={{ color: '#646464' }} />}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse', // Reverses the flex order to put the icon at the front
                        alignItems: 'center',
                    }}
                    aria-controls={`${title.replace(/\s+/g, '')}-content`}
                    id={`${title.replace(/\s+/g, '')}-filter`}
                >
                    <Box className={'flex flex-row items-center brand-text-4 '}>
                        <Typography component="h6">
                            <span className={' roboto-bold text-[13px]'}>
                                {title}
                            </span>
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </>
    );
}

CustomAccordion.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
    isDesktop: PropTypes.bool,
};
