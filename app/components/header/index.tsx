import Link from "next/link"
import Image from "next/image"

// img
import logo from "../../../public/logo.png"
import uzb from "../../../public/uzb.png"

// icons
import {LuSearch} from "react-icons/lu"
import {IoMdPerson} from "react-icons/io"
import {IoMdCard} from "react-icons/io"
import {IoCaretDown} from "react-icons/io5"
import {PiUserCircleLight} from "react-icons/pi"

const Header = () => {
    return (
        <header
            className="py-2 bg-white"
            style={{boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.03)"}}>
            <nav className="container2 flex justify-between items-center gap-[10px]">
                <Link href={"/home"}>
                    <Image
                        src={logo}
                        alt="logo"
                        className="max-[350px]:w-[80px]"
                    />
                </Link>
                <nav className="flex justify-start items-center gap-1 bg-[#f7f7f7] h-[40px] overflow-hidden border border-[#019e7f] rounded-[6px] w-[50%] max-[1020px]:w-[30%] max-[750px]:hidden">
                    <nav className="flex justify-center items-center h-full p-2 cursor-pointer">
                        <LuSearch />
                    </nav>

                    <input
                        type="text"
                        placeholder="Qidirish"
                        className="h-full w-full pr-3 border-none outline-none"
                    />
                </nav>
                <Link
                    href={"/faq"}
                    className="flex justify-center items-center gap-[5px] cursor-pointer hover:opacity-70 max-[750px]:hidden">
                    <IoMdPerson />
                    <p className="border-b text-sm font-medium">F.A.Q</p>
                </Link>
                <nav className="flex justify-center items-center gap-[5px] h-[37px] select-none active:scale-96 overflow-hidden text-[#019e7f] border border-[#019e7f] rounded-[6px] px-[10px] cursor-pointer hover:text-white hover:bg-[#019e7f] transition duration-[.2s] max-[750px]:hidden">
                    <IoMdCard />
                    <p className="text-sm">Payme</p>
                </nav>

                <nav className="flex justify-center items-center gap-[20px]">
                    <nav className="flex justify-center items-center gap-[10px] h-[37px] select-none active:scale-96 overflow-hidden text-[#019e7f] border border-[#f1f1f1] rounded-[6px] px-[10px] cursor-pointer transition duration-[.2s]">
                        <Image src={uzb} alt="uzb" width={16} height={10} />
                        <nav className="flex justify-center items-center gap-1">
                            <p className="text-sm">
                                Uz{" "}
                                <span className="max-[350px]:hidden">
                                    / UZS
                                </span>{" "}
                            </p>
                            <IoCaretDown className="text-[10px] text-black" />
                        </nav>
                    </nav>

                    <Link href={"/sign-in"}>
                        <PiUserCircleLight className="text-[30px] cursor-pointer hover:text-[#019e7f]" />
                    </Link>
                </nav>
            </nav>
        </header>
    )
}

export default Header
