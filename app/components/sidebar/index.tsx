import Image from "next/image"

// img
import flag from "../../../public/flag.png"

// icons
import {FaChevronRight} from "react-icons/fa6"

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-2 sticky top-0 flex-1/5 bg-white p-2 text-sm tex-[#0d1136] font-medium opacity-80 *:cursor-pointer *:hover:text-[#019e7f] max-[1110px]:hidden">
            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    <Image src={flag} alt="flag" width={15} height={15} />{" "}
                    O’zbekistonga yetkazish
                </p>

                <FaChevronRight />
            </div>
            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    Go'sht va Baliq
                </p>

                <FaChevronRight />
            </div>
            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    Asosiy oziq-ovqatlar
                </p>

                <FaChevronRight />
            </div>
            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    Tayyor oziq-ovqatlar
                </p>

                <FaChevronRight />
            </div>
            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    Ichimliklar
                </p>

                <FaChevronRight />
            </div>
            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    Mobil telefon va kompyuter...
                </p>

                <FaChevronRight />
            </div>
            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    Go'zallik & Sog'lik
                </p>

                <FaChevronRight />
            </div>
            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    Oilaviy do'kon
                </p>

                <FaChevronRight />
            </div>

            <div className="flex justify-between items-center gap-1 py-3">
                <p className="flex justify-start items-center gap-1">
                    Kitoblar
                </p>

                <FaChevronRight />
            </div>
        </div>
    )
}

export default Sidebar
