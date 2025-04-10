"use client"
import Link from "next/link"

// icons
import {PiBasket} from "react-icons/pi"

const Card = ({product}: {product: any}) => {
    return (
        <Link href={`/home/${product?.id}`} key={product?.id}>
            <div className="bg-white shadow-md rounded-lg h-full flex flex-col justify-between overflow-hidden transform transition duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex justify-center items-center">
                    <img
                        src={product?.img}
                        alt={product?.title}
                        className="w-[90%] h-[90%] object-contain"
                    />
                </div>
                <div className="p-4 flex flex-col justify-between h-full max-[440px]:p-2">
                    <h3 className="text-md font-semibold text-gray-800">
                        {product?.title}
                    </h3>

                    <div >
                        <div className="flex items-center gap-2 mt-2 max-[440px]:flex-col-reverse max-[440px]:items-start max-[440px]:gap-0">
                            <span className="text-red-600 font-bold">
                                {product?.oldPrice} ₩
                            </span>
                            <span className="text-gray-500 line-through text-[14px]">
                                {product?.price} ₩
                            </span>
                        </div>
                        <button className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-[#019e7f] hover:text-white cursor-pointer active:scale-98 transition duration-300 flex items-center justify-center gap-2">
                            <PiBasket />
                            Qo‘shish
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
