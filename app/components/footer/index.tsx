"use client"
import Image from "next/image"

// img
import logo from "../../../public/logo.png"
import appStore from "../../../public/appstore.png"
import googlePlay from "../../../public/googleplay.png"


const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-6 px-4 md:px-8 lg:px-12">
            <div className="container2 flex flex-col md:flex-row justify-between  gap-8">
                <div className="flex flex-col max-[450px]:items-center">
                    <Image
                        src={logo}
                        alt="HilalMart Logo"
                        width={100}
                        height={100}
                        className="mb-2"
                    />
                    <p className="text-sm text-center md:text-left">
                        HilalMart © 2021 <br /> Baracha huquqlar kafolatlangan
                    </p>
                    <div className="flex mt-4 space-x-2">
                        <Image
                            src={googlePlay}
                            alt="Google Play"
                            width={100}
                            height={30}
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                        <Image
                            src={appStore}
                            alt="App Store"
                            width={100}
                            height={30}
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center max-[800px]:hidden">
                    <h3 className="text-lg font-semibold mb-2">
                        Foydali havolalar
                    </h3>
                    <ul className="text-sm space-y-1 *:cursor-pointer *:hover:text-[#019e7f]">
                        <li>Bosh sahifa</li>
                        <li>Yordam kerakmi?</li>
                        <li>Foydalanuvchi shartlari</li>
                        <li>Maxfiylik siyosati</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-2">
                        Biz haqimizda
                    </h3>
                    <p className="text-sm text-center md:text-left">
                        Manzil: Lotte castle,
                        Seoul, 03113, Crescent Trade Ltd <br />
                        Korxona nomi: Crescent trade llc <br />
                        Korxona rahbari: DADAJONOV RAKHIMJON <br />
                        Registratsiya raqami: 433-82-00377 <br />
                        Telefon raqami: 1833-2178 / 02-3670-6808
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
