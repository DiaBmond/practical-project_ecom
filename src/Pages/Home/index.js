import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import { Link } from 'react-router-dom';
import product from '../../assets/images/Product1.png'
import product1 from '../../assets/images/product01.png'


const products = [
    { id: 1, name: 'Library Stool Chair', price: '$20', image: product1 }
];

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome To My Practical Project</h1>
                </div>
                <div className="hero-image">
                    <img src={product} alt="Chair" />
                </div>
            </div>

            <div className="product-section">
                <h2>NEW PRODUCTS</h2>
                <div className="product-list">
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
}

export default Home;
