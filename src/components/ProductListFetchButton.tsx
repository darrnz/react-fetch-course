import { useState } from "react"
import { ProductType } from "../types/products"
import { jsonUrl } from "../constants"


const ProductListButton = () => {
    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch(jsonUrl)
            const data = await response.json()
            console.log('data --->', {data, response})
            setProducts(data)
            setLoading(false)
        } catch (error) {
            setError('Error fetching products - ' + error)
            setLoading(false)
        }
    }

    console.log('products --->', products)

    if (loading) return <div>Loading...</div>
    if (error) return <div style={{ fontWeight: 'bold', color: 'red' }}>{error}</div>

    return (
        <div>
            <h1>Product List</h1>
            <section>
                <button type="button" onClick={fetchProducts}>Fetch Products</button>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.name} - {product.price}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default ProductListButton