"use client"
import {useEffect, useState} from "react"
import HomeSwiper from "../components/home-swiper"
import Sidebar from "../components/sidebar"
import Card from "../components/card"

// img
import icon1 from "../../public/new.png"
import icon2 from "../../public/popular.png"
import icon3 from "../../public/discount.png"
import Image from "next/image"

const Home = () => {
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                "https://67a2eab7409de5ed5256be7b.mockapi.io/products"
            )
            const data = await response.json()
            setProducts(data)
        }

        fetchProducts()
    }, [])

    const newProducts = products.filter((value) => value?.status == "new")
    const popularProducts = products.filter(
        (value) => value?.status == "popular"
    )
    const discountProducts = products.filter(
        (value) => value?.status == "discount"
    )

    return (
        <section className="py-[15px]">
            <div className="container2 flex justify-between items-start gap-3">
                {/* sidebar */}
                <Sidebar />

                {/* main */}
                <div className="flex flex-col gap-2 flex-4/5">
                    <HomeSwiper />

                    {/* new */}
                    <div className="flex flex-col gap-[15px] mt-5">
                        <div className="flex justify-start items-center gap-[10px]">
                            <Image
                                src={icon1}
                                alt="new"
                                height={20}
                                width={20}
                            />
                            <h1 className="font-medium text-[20px]">Yangi</h1>
                        </div>
                        <div className="grid grid-cols-4 gap-[25px] max-[920px]:grid-cols-3 max-[920px]:gap-[15px] max-[620px]:grid-cols-2 max-[400px]:grid-cols-1">
                            {newProducts?.map((value) => (
                                <Card key={value.id} product={value} />
                            ))}
                        </div>
                    </div>

                    {/* popular */}
                    <div className="flex flex-col gap-[15px] mt-5">
                        <div className="flex justify-start items-center gap-[10px]">
                            <Image
                                src={icon1}
                                alt="popular"
                                height={20}
                                width={20}
                            />
                            <h1 className="font-medium text-[20px]">Ommabop</h1>
                        </div>
                        <div className="grid grid-cols-4 gap-[25px] max-[920px]:grid-cols-3 max-[920px]:gap-[15px] max-[620px]:grid-cols-2 max-[400px]:grid-cols-1">
                            {popularProducts?.map((value) => (
                                <Card key={value.id} product={value} />
                            ))}
                        </div>
                    </div>

                    {/* discount */}
                    <div className="flex flex-col gap-[15px] mt-5">
                        <div className="flex justify-start items-center gap-[10px]">
                            <Image
                                src={icon3}
                                alt="discount"
                                height={20}
                                width={20}
                            />
                            <h1 className="font-medium text-[20px]">
                                Chegirma
                            </h1>
                        </div>
                        <div className="grid grid-cols-4 gap-[25px] max-[920px]:grid-cols-3 max-[920px]:gap-[15px] max-[620px]:grid-cols-2 max-[400px]:grid-cols-1">
                            {discountProducts?.map((value) => (
                                <Card key={value.id} product={value} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
