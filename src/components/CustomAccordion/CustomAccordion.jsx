import * as PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';

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
    return (
        <>
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
                        maxHeight: '40px',
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
                    aria-controls={`${title.replace(/\s+/g, '')}-content`}
                    id={`${title.replace(/\s+/g, '')}-filter`}
                >
                    <Typography component="h6">
                        <span className={'roboto-bold'}>{title}</span>
                    </Typography>
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
