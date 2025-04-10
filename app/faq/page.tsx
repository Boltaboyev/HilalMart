import React from "react"
import {Collapse, Divider} from "antd"

const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, quod ratione recusandae sed dolorum sequi? Voluptates delectus temporibus laboriosam numquam labore esse eius cum atque deleniti, vel, error velit?"

const items = [
    {
        key: "1",
        label: "Ayirboshlash siyosati",
        children: text,
    },
    {
        key: "2",
        label: "Pulni qaytarish siyosati",
        children: text,
    },
    {
        key: "3",
        label: "Veb-sayt vaqt talab qilmoqda, uni qanday yaxshilash kerak?",
        children: text,
    },
    {
        key: "4",
        label: "Hisob qaydnomasini qanday yarataman?",
        children: text,
    },
]

const Faq = () => (
    <section className="py-[50px]">
        <div className="container2 flex flex-col gap-[30px] justify-center items-center">
            <h1 className="text-[24px] font-medium">F.A.Q</h1>

            <div className="w-[60%] max-[500px]:w-[80%] max-[440px]:w-[100%]">
                <Collapse items={items} size="large" accordion/>
            </div>
        </div>
    </section>
)

export default Faq
