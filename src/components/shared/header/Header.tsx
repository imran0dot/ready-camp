import React, { useEffect } from "react";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
import Logo from "../../widgets/Logo";
import NavList from "../../widgets/NavList";
import UserNav from "../../widgets/UserNav";

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    useEffect(() => {

        // mobile toggle naviagtion  
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar
            className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2"
            
            
            >
            <div className="flex items-center md:justify-between text-blue-gray-900 max-w-screen-2xl mx-auto">

                <div className="flex justify-center items-center">
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}           >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>

                    <Logo className="w-[170px]" />
                </div>

                <div className="hidden lg:block">
                    <NavList />
                </div>

                {/* user menu  */}
                <div className="flex justify-end items-end">
                    <UserNav />
                </div>

                {/* contact now btn  */}
                {/* <div className="hidden gap-2 lg:flex">
                    <Button
                        variant="filled"
                        size="md"
                        className="bg-[#004AAD]"
                        
                        
                        >
                        Contact Now
                    </Button>
                </div> */}



            </div>

            {/* mobile menu collapse  */}
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="filled" size="sm" color="blue-gray" fullWidth   >
                        Contact now
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default Header;