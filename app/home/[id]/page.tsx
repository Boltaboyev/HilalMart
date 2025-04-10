"use client"
import React, {useEffect, useState} from "react"
import {Minus, Plus, Truck, Shield, Package} from "lucide-react"

interface ProductType {
    id: string
    img: string
    title: string
    oldPrice: number
    price: number
}

const ProductDetail = ({params}: {params: Promise<{id: string}>}) => {
    // Unwrap the params promise
    const {id} = React.use(params)

    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState<ProductType | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setIsLoading(true)
                setError(null)
                const response = await fetch(
                    `https://67a2eab7409de5ed5256be7b.mockapi.io/products/${id}`
                )

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data = await response.json()
                setProduct(data)
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "Failed to fetch product"
                )
                console.error("Error fetching product:", err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProduct()
    }, [id])

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const increaseQuantity = () => {
        if (product && quantity < 12) setQuantity(quantity + 1)
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">
                        Loading product details...
                    </p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="text-center">
                    <div className="text-red-500 mb-4">
                        <Shield className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                        Error loading product
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700">
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="text-center">
                    <Package className="h-12 w-12 text-gray-400 mx-auto" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                        Product not found
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                        The requested product could not be loaded.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Product Image */}
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-white shadow-sm">
                        <img
                            src={product.img}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {product.title}
                        </h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <div className="flex items-center gap-3">
                                <p className="text-3xl tracking-tight text-gray-900">
                                    {product.price.toLocaleString()}₩
                                </p>
                                {product.oldPrice && (
                                    <p className="text-lg text-gray-500 line-through">
                                        {product.oldPrice.toLocaleString()}₩
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Stock Info */}
                        <div className="mt-6">
                            <div className="flex items-center">
                                <div
                                    className={`text-sm ${
                                        quantity < 12
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}>
                                    {quantity < 12
                                        ? "In Stock 12"
                                        : "Only 12 left"}
                                </div>
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mt-8">
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="p-2 hover:bg-gray-100 disabled:opacity-50"
                                        disabled={quantity <= 1}
                                        aria-label="Decrease quantity">
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="px-4 py-2 text-center w-12">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="p-2 hover:bg-gray-100 disabled:opacity-50"
                                        disabled={quantity >= 12}
                                        aria-label="Increase quantity">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="mt-8">
                            <button
                                type="button"
                                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
                                Add to Cart -{" "}
                                {(product.price * quantity).toLocaleString()}₩
                            </button>
                        </div>

                        {/* Product Details */}
                        <div className="mt-10">
                            <div className="border-t border-gray-200 pt-10">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Product Details
                                </h3>
                                <div className="mt-4 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">
                                            Weight:
                                        </span>
                                        <span className="text-gray-900">
                                            500 gr
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">
                                            Country of origin:
                                        </span>
                                        <span className="text-gray-900">
                                            Uzbekistan
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Info */}
                        <div className="mt-10">
                            <div className="border-t border-gray-200 pt-10">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Shipping Information
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start">
                                        <Truck className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                        <p className="text-sm text-gray-500">
                                            Delivery available across Korea.
                                            <br />
                                            Orders received before 5 p.m. ship
                                            same day.
                                            <br />
                                            Remote areas and islands may take
                                            3-4 business days.
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <Package className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                        <p className="text-sm text-gray-500">
                                            Frozen items are shipped in
                                            eco-friendly packaging with special
                                            cooling materials.
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <Shield className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                        <p className="text-sm text-gray-500">
                                            All products undergo rigorous
                                            quality inspection before shipping.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
