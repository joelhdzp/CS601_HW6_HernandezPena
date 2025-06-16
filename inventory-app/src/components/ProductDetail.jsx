import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Shows detailed info for a selected product
function ProductDetail() {
    const { sku } = useParams();                    // Get SKU from URL
    const [product, setProduct] = useState(null);   // Product details

    useEffect(() => {
        // Fetch inventory and find product by SKU
        fetch('/inventory.json')
            .then(result => result.json())
            .then(data => {
                const found = data.find(item => item.sku === sku);
                setProduct(found);
            })
            .catch((error) => console.error("Failed to fetch inventory:", error)
        );
    }, [sku]);

    // Show loading cursor if not loaded
    if (!product) return <div className="cursor"></div>;

    return (
        <div>
            <div className="product-detail">
                {/* Product name, description and image */}
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.image} alt={product.name} />
                {/* Product details: SKU, quantity, price */}
                <div className="product-subdetail">
                    <p><strong>SKU:</strong> {product.sku}</p>
                    <p><strong>Quantity:</strong> {product.qty}</p>
                    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                </div>
                {/* Home button for navigation */}
                <Link to="/"><button>Home</button></Link>
            </div>
        </div>
    )
}

export default ProductDetail;