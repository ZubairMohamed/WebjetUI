import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import mscLogo from '../../assets/images/msc-logo.png';
import cruiseShipImage from '../../assets/images/cruise-ship.jpg';

/**
 * This component shows  the banner sale ad alongside search results.
 * @returns {JSX.Element}
 * @constructor
 */
export function Banner() {
    return (
        <>
            <div
                className={`   cursor-pointer  desktop:h-[600px] desktop:overflow-hidden text-white flex-grow-1 flex-shrink-1 desktop:flex-shrink-0 basis-[160px] h-[800px] brand-bg-1 flex flex-col tablet:flex-row  desktop:gap-0 desktop:flex-col `}
            >
                <Box className={'flex flex-col max-w-80 px-3'}>
                    <p className={'roboto-bold pt-10 text-[22px] '}>
                        27 day Grand Scandinavia tour
                        <span className={'roboto-regular'}>
                            {' '}
                            with Baltics cruise and flights
                        </span>
                    </p>
                    <Divider
                        sx={{
                            backgroundColor: 'white',
                            mt: '30px',
                            mb: '10px',
                        }}
                    />
                    <p className={'text-[11px] text-nowrap mb-1'}>
                        Per person twin share from
                    </p>
                    <Box className={'text-[40px] '} sx={{}}>
                        $6,999*
                    </Box>
                </Box>

                <Box
                    className={
                        ' tablet:h-[40px] desktop:h-[unset] bg-white desktop:w-[172px] '
                    }
                >
                    <img
                        className={
                            ' w-[150px] desktop:ml-[35px] desktop:w-[114px] tablet:pr-3 desktop:pr-0'
                        }
                        src={mscLogo}
                        alt="MSC Cruises Logo"
                    />
                </Box>
                <Box className={' flex-grow w-full '}>
                    <img
                        className={
                            'h-full desktop:h-[250px] object-cover object-right-bottom  '
                        }
                        src={cruiseShipImage}
                        alt="Image showing a Scandinavia tour cruise ship."
                    />
                </Box>
            </div>
        </>
    );
}
