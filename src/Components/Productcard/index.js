function ProductCard({ image, name, price }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h5>{name}</h5>
                <p>${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;