import { contacts, about, more } from "../constants";
import { logo, facebook, instagram, twitter } from "../assets";

function Footer() {

    return(

        <section className="text-white h-[100%] max-w-[90%] sm:max-w-[85%] mx-auto pt-[150px] pb-[80px]">

            <div className="flex flex-col lg:flex-row justify-between lg:items-center flex-wrap h-[90%]">

                <div className="w-[400px] mb-[60px] lg:mb-0">

                    <img src={logo} alt="logo" />

                    {contacts.map((contact) => (

                        <div key={contact.id} className="flex items-center justify-start gap-6 mt-10">

                            <img src={contact.icon} alt="icon" />

                            <p>{contact.details}</p>

                        </div>

                    ))}

                </div>

                <div>

                    {about.map((us) => (

                        <ul key={us.id}>

                            <li className="mb-5">{us.link}</li>

                        </ul>

                    ))}

                </div>

                <div>

                    {more.map((career) => (

                        <ul key={career.id}>

                            <li className="mb-5">{career.content}</li>

                        </ul>

                    ))}

                </div>

                <div>

                    <ul className="flex justify-center lg:justify-start items-center gap-[30px] py-[40px] lg:py-0">

                        <li>
                            <img src={facebook} alt="facebook" className="facebook" />
                        </li>

                        <li>
                            <img src={twitter} alt="instagram" className="instagram" />
                        </li>

                        <li>
                            <img src={instagram} alt="twitter" className="twitter" />
                        </li>
                    </ul>

                </div>

            </div>

            <p className="text-center lg:text-right">&copy; Copyright 2018 Huddle. All rights reserved.</p>

        </section>
    )
}

export default Footer
