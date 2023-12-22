/* eslint-disable react-refresh/only-export-components */

import Button from "./Button";

function CTA() {

    return(

        <section className="absolute w-full">

            <div className="text-center rounded-[10px] max-w-[90%] ss:max-w-[50%] ss:w-[600px] mx-auto py-[40px] relative top-0 right-0 bg-white call-to-action">

                <h1 className="capitalize mb-5 font-poppins font-bold">Ready to build your community ?</h1>

                <Button />

            </div>

        </section>
    )
}

export default CTA;