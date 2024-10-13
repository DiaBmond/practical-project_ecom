import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Navigation from '../../Components/Navigation';
import { useParams } from 'react-router-dom';
import Payment from '../../Components/Payment';
import product1 from '../../assets/images/product01.png';
import './index.css';

const products = [
    {
        id: 1,
        name: 'Library Stool Chair',
        price: 20, // เปลี่ยนราคาเป็นจำนวนเพื่อสะดวกในการใช้งาน
        description: 'A classic library stool chair, perfect for any setting. Durable and stylish with a comfortable seat.',
        image: product1,
    },
    // เพิ่มสินค้าตัวอื่น ๆ ตามที่ต้องการ
];

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [showPayment, setShowPayment] = useState(false); // state สำหรับแสดง/ซ่อน Payment modal

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const handleBuyClick = () => {
        setShowPayment(true);  // เมื่อกดปุ่ม Buy จะให้แสดงฟอร์มการชำระเงิน
    };

    const handleClosePayment = () => {
        setShowPayment(false); // ปิดฟอร์มการชำระเงิน
    };

    return (
        <>
            <Navigation />
            <div className='product-detail'>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>${product.price}</p> {/* แสดงราคาด้วยสัญลักษณ์ $ */}
                <p>{product.description}</p>
                <button className='buy-btn' onClick={handleBuyClick}>Buy</button>
            </div>

            {/* แสดงฟอร์ม Payment เมื่อกดปุ่ม Buy */}
            {showPayment && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleClosePayment}>Close</button>
                        <Payment productPrice={product.price} /> {/* ส่งราคาสินค้าไปยัง Payment */}
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default ProductDetailPage;
