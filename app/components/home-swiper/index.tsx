"use client"
import {Carousel} from "antd"

// icons
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6"
import {MdOutlinePhone} from "react-icons/md"

const HomeSwiper = () => {
    return (
        <div className="bg-[#C4EAD2] p-[40px] flex flex-col justify-center items-start gap-[10px] max-[450px]:p-[20px] max-[450px]:text-center max-[450px]:justify-center max-[450px]:items-center ">
            <h1 className="text-[20px] font-medium leading-[130%] max-[440px]:text-[16px]">
                Yangi ro’yxatdan o’tgan mijozlarga ilk <br className="max-[430px]:hidden"/> buyurtma bepul
                yetkazib beriladi!
            </h1>
            <div className="flex justify-start items-center gap-2">
                <MdOutlinePhone />
                <p className="font-medium">1833-2178</p>
            </div>
        </div>
    )
}

export default HomeSwiper
