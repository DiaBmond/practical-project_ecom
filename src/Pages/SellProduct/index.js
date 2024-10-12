import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import { Link } from 'react-router-dom';
import product1 from '../../assets/images/product01.png'


const products = [
    { id: 1, name: 'Library Stool Chair', price: '$20', image: product1 }
];

const SellProductPage = () => {
    return (
        <>
            <Navigation />
            <div className='sell-product'>
                <h2>My Products</h2>
                <div className='product-grid'>
                    {products.map((product) => (
                        <div className='product-item' key={product.id}>
                            {/* เพิ่มลิงก์เพื่อไปที่ Product Detail */}
                            <Link to={`/sellproduct/${product.id}`}>
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

export default SellProductPage;
