import React from 'react';

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, imageUrl }) => {
    return (
        <div className="product-card" key={id}>
            <img src={imageUrl} alt={name} className="product-image" />
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;