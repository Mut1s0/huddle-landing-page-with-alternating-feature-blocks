import Button from "./Button";
import { hero } from "../assets"

function Hero() {

    return(

        <section className="max-w-[90%] sm:max-w-[85%] mx-auto md:grid md:grid-cols-2">

            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">

                <h1 className="text-veryDarkCyan font-poppins font-bold capitalize text-[1.4rem] xs:text-[2rem] md:text-[2.3rem] lg:text-[2.7rem] mb-5">Build the community <br className="block" /> your fans will love</h1>

                <p className="font-openSans text-grayishBlue font-regular text-[.8rem] xs:text-[.99rem] md:text-[.8rem] lg:text-[1.1rem] mb-5">Huddle re-imagines the way we build <br className="block sm:hidden"/> communities. You have <br className="hidden md:block"/> a voice, but so <br className="block sm:hidden"/> does your audience. Create connections <br className="block sm:hidden"/> with <br className="hidden md:block"/> your users as you engage in <br className="block sm:hidden"/> genuine discussions.</p>

                <div className="mb-[40px]">

                    <Button />

                </div>

            </div>

            <div>

                <img src={hero} alt="hero" className="w-full" />

            </div>

        </section>

    )
}

export default Hero;