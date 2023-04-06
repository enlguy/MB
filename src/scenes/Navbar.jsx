import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? "text-yellow" : ""
                } hover:text-orange transition duration-500`}
                href={`#${lowerCasePage}`}
                onClick={() => setSelectedPage(lowerCasePage)}
                >
                    {page}
        </AnchorLink>
    )
}

const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
            <div className="flex justify-between mx-auto w-5/6">
                <h4 className="font-lato text-4xl font-bold mt-3 mr-10">MUSICBOOKS</h4>
                <p className="font-lato text-32 font-bold mr-20 mt-5">A place for music, books, food, and art</p>

                {/* DESKTOP NAV */}

                {isAboveSmallScreens ? (
                    <div className="flex mt-5 justify-between gap-16 font-opensans text-m font-semibold">
                        <Link 
                            id="link"
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            id="link"
                            page="Events"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            id="link"
                            page="Food"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            id="link"
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="menu-icon" src="../assets/menu-icon.svg" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img alt="close-icon" src="react-portfolio\public\assets\close-icon.svg" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                    <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    </div>
                )}
            </div>
    )
}

export default Navbar