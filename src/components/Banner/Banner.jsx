import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export function Banner() {
    return (
        <>
            <div
                className={`flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[160px] desktop:h-[600px] brand-bg-1`}
            >
                27 day Grand Scandinavia tour with Baltics cruise and flights
                <Divider />
                <p>Per person twin share from</p>
                <Box>$6,999*</Box>
            </div>
        </>
    );
}
