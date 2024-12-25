// Dimensions (Width x Height)
// Desktop 1384px x 98px
// Tablet 768px x 98px
// Mobile 376px x 58px

const Header = () => {
    return (
        <>
            <div className="container brand-bg-1 mx-auto w-[1384px] h-[98px] flex justify-center sm:justify-start ">
                {/*Hello from header*/}
                <img src="https://media.webjet.com.au/ui/images/webjet-logo-au-red.png" alt="webjet-logo" />
            </div>
        </>
    )
}

export default Header;
