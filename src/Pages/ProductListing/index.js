import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import { Link } from 'react-router-dom';
import product1 from '../../assets/images/product01.png'
import './index.css';

const products = [
    { id: 1, name: 'Library Stool Chair', price: '$20', image: product1 }
];

const ProductListingPage = () => {
    return (
        <>
            <Navigation />
            <div className='product-listing'>
                <h2>All Products</h2>
                <div className='product-grid'>
                    {products.map((product) => (
                        <div className='product-item' key={product.id}>
                            {/* เพิ่มลิงก์เพื่อไปที่ Product Detail */}
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductListingPage;
