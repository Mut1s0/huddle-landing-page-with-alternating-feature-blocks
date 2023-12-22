import { contacts, about, more } from "../constants";
import { logo, facebook, instagram, twitter } from "../assets";

function Footer() {

    return(

        <section className="text-white h-[100%] max-w-[90%] sm:max-w-[85%] mx-auto pt-[150px] pb-[50px]">

            <div className="flex flex-col md:flex-row justify-between md:items-center flex-wrap h-[90%]">

                <div className="sm:w-[400px] mb-[60px] md:mb-0">

                    <img src={logo} alt="logo" />

                    {contacts.map((contact) => (

                        <div key={contact.id} className="flex items-center justify-start gap-6 mt-10">

                            <img src={contact.icon} alt="icon" />

                            <p className="text-[.9rem]">{contact.details}</p>

                        </div>

                    ))}

                </div>

                <div>

                    {about.map((us) => (

                        <ul key={us.id}>

                            <li className="mb-5 text-[.9rem] cursor-pointer hover:underline">{us.link}</li>

                        </ul>

                    ))}

                </div>

                <div>

                    {more.map((career) => (

                        <ul key={career.id}>

                            <li className="mb-5 text-[.9rem] cursor-pointer">{career.content}</li>

                        </ul>

                    ))}

                </div>

                <div>

                    <ul className="flex justify-center md:justify-start items-center gap-[30px] py-[40px] md:py-0">

                        <li>
                            <img src={facebook} alt="facebook" className="facebook cursor-pointer" />
                        </li>

                        <li>
                            <img src={twitter} alt="instagram" className="instagram cursor-pointer" />
                        </li>

                        <li>
                            <img src={instagram} alt="twitter" className="twitter cursor-pointer" />
                        </li>
                    </ul>

                </div>

            </div>

            <p className="text-center md:text-right text-[.7rem] md:text-[1rem]">&copy; Copyright 2018 Huddle. All rights reserved.</p>

        </section>
    )
}

export default Footer
