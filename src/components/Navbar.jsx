import { logo } from "../assets";

function Navbar() {

    return(

        <nav className="flex justify-between items-center max-w-[90%] sm:max-w-[85%] mx-auto mb-[50px]">

            <img src={logo} alt="logo" className="w-[100px] md:w-[200px]" />

            <button type="button" className="rounded-[100px] bg-white py-1 md:py-3 px-5 md:px-14 cursor-pointer text-veryDarkCyan font-openSans font-bold text-[.8rem] md:text-[1.3rem] free hover:opacity-75">Try It Free</button>

        </nav>
        
    )
}

export default Navbar;