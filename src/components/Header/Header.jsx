// Dimensions (Width x Height)
// Desktop 1384px x 98px
// Tablet 768px x 98px
// Mobile 376px x 58px

const Header = () => {
    return (
        <>
            <div className="desktop:container brand-bg-1 mx-auto w-full desktop:w-[1384px] h-[58px] tablet:h-[98px] flex items-center justify-center tablet:justify-start">
                {/*Hello from header*/}

                    <img src="https://media.webjet.com.au/ui/images/webjet-logo-au-red.png" alt="webjet-logo"
                         className='h-[42px] tablet:h-[73px] tablet:pl-[12px]' />

            </div>
        </>
    )
}

export default Header;
