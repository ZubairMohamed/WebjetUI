import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import mscLogo from '../../assets/images/msc-logo.png';
import cruiseShipImage from '../../assets/images/cruise-ship.jpg';

export function Banner() {
    return (
        <>
            <div
                className={` cursor-pointer overflow-hidden px-3 text-white flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[160px] desktop:h-[600px] brand-bg-1 flex flex-row desktop:flex-col`}
            >
                <p className={'roboto-bold pt-10 text-[22px] '}>
                    27 day Grand Scandinavia tour
                    <span className={'roboto-regular'}>
                        {' '}
                        with Baltics cruise and flights
                    </span>
                </p>
                <Divider
                    sx={{ backgroundColor: 'white', mt: '30px', mb: '10px' }}
                />
                <p className={'text-[11px] text-nowrap mb-1'}>
                    Per person twin share from
                </p>
                <Box className={'text-[40px] '} sx={{}}>
                    $6,999*
                </Box>

                <Box className={'bg-white w-[172px] ml-[-12px]'}>
                    <img
                        className={'ml-[35px] w-[114px]'}
                        src={mscLogo}
                        alt="MSC Cruises Logo"
                    />
                </Box>
                <Box className={'bg-white w-[172px] ml-[-12px]'}>
                    <img
                        className={'h-52 object-cover object-right-bottom  '}
                        src={cruiseShipImage}
                        alt="Image showing a Scandinavia tour cruise ship."
                    />
                </Box>
            </div>
        </>
    );
}
