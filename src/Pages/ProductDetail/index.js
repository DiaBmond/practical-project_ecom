import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import { useParams } from 'react-router-dom';
import product1 from '../../assets/images/product01.png'

import './index.css';

const products = [
    {
        id: 1,
        name: 'Library Stool Chair',
        price: '$20',
        description: 'A classic library stool chair, perfect for any setting. Durable and stylish with a comfortable seat.',
        image: product1,
    },
    // เพิ่มสินค้าตัวอื่น ๆ ตามที่ต้องการ
];

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <>
            <Navigation />
            <div className='product-detail'>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button className='buy-btn'>Buy</button>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetailPage;
