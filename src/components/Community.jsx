/* eslint-disable react/prop-types */
import { businesses } from "../constants";

const Business = ({ icon, title, text }) => (

    <article className="flex flex-col md:flex-row px-[30px] md:px-[110px] py-[40px] md:py-[60px] rounded-[10px] box-shadow xs:max-w-[350px] ss:max-w-[500px] md:max-w-full md:w-full mx-auto md:gap-[100px] lg:gap-[170px]">

        <img src={icon} alt="" className="mb-[40px] md:mb-0 md:w-[300px]" />

        <div className="text-center md:text-left md:flex md:flex-col md:justify-center">

            <h2 className="font-poppins text-veryDarkCyan font-bold text-[1rem] ss:text-[1.5rem] md:text-[1.7rem] mb-[10px]">{title}</h2>

            <p className="text-[.7rem] ss:text-[.9rem] md:text-[1rem] xs:max-w-[240px] md:max-w-full mx-auto font-openSans text-grayishBlue font-regular">{text}</p>

        </div>

    </article>

)

function Community() {

    return(

        <section className="max-w-[90%] sm:max-w-[85%] lg:w-[1100px] mx-auto py-[60px] md:pb-[100px]">

            <div className="grid gap-[50px]">

                {businesses.map((business, index) => (
                    <Business key={business.id} {...business} index={index} />
                ))}

            </div>

        </section>

    )
}

export default Community;