import Link from "next/link"

const Register = () => {
    return (
        <div className="container2 py-[50px] bg-gray-100 flex flex-col items-center justify-center">
            <p className="text-center font-bold text-xl mb-8">
                Buyurtmani rasmiylashtirish
            </p>
            <div className="w-full max-w-2xl  flex flex-col md:flex-row gap-6">
                {/* Tizimga kirish qismi */}
                <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                        Tizimga kirish
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Telefon raqamingiz va parolingiz bilan kiring.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="010 ____ ____"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:font-medium placeholder:text-black"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                placeholder="Parolingiz"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                        <button className="w-full py-2 rounded-md active:scale-96 bg-[#019e7f] cursor-pointer text-white transition duration-300">
                            Kirish
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-center">
                        Akkauntiz yo‘qmi?{" "}
                        <span className="text-primary-variant cursor-pointer font-semibold">
                            Sign Up
                        </span>
                    </p>
                </div>

                <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg py-6 px-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Mehmon foydalanuvchi
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                        <span className="text-red-500">Eslatma:</span> Mehmonga
                        foydalanuvchilar buyurtmani va ularga xizmatlar haqida
                        ma’lumotlar olish imkoniyatiga ega emas! <br /> <br />{" "}
                        Davom etish tugmasini bosish orqali mehmonga
                        foydalanuvchi sifatida rasmiylashtirilsz.
                    </p>
                    <button className="w-full border border-[#019e7f] text-[#019e7f] cursor-pointer active:scale-98 py-2 rounded-md ">
                        Davom etish
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register
