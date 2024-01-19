function Header(): JSX.Element {
    return (
        <header>
            <img alt="background header1" src="images/bg-header-desktop.svg" className="desktop:block mobile:hidden max-w-full w-full h-auto bg-desaturatedDarkCyan" />
            <img alt="background header" src="images/bg-header-mobile.svg" className="desktop:hidden mobile:block max-w-full w-full h-auto max-h-[156px] bg-desaturatedDarkCyan" />
        </header>
    )
}
export default Header