import React from "react";


const Footer = () => {

    return(
        <div className=" bg-color text-white h-[205px] w-full">
            <div className="flex flex-col md:flex-row justify-around items-center p-5 gap-y-5">
                <div>
                    <h2 className="font-semibold text-lg">About HanaPark</h2>
                    <p className="max-w-[350px] text-xs">HanaPark is a smart parking management solution designed to streamline parking systems, reduce stress, and helps you find the perfect spots every time.</p>
                </div>

                <div className="flex flex-col">

                    <h2 className="font-semibold text-lg">Quick Links</h2>

                    <ul className="list-disc list-inside text-xs space-y-1" >
                        <li><a href="" className="hover:text-color-3">Log In</a></li>
                        <li><a href="" className="hover:text-color-3">FAQs</a></li>
                        <li><a href="" className="hover:text-color-3">Terms and Privacy</a></li>
                    </ul>

                </div>

                <div className="text-xs">
                    <h2 className="font-semibold text-lg">Contact</h2>
                    <p>Email: support@hanapark.com</p>
                    <p>Phone: +63 912 345 6789</p>
                    <p>Location: Metro Manila, PH</p>
                </div>
            </div>

             <div className="flex justify-center">
                <div className="h-px w-4xl mt-3 bg-color-2"></div>
            </div>

            <p className="text-center mt-6 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} HanaPark. All rights reserved.
            </p>

       </div>
       
)
}

export default Footer;