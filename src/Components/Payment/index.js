import React, { useState } from 'react';

const Payment = ({ productPrice }) => { // รับ props จาก ProductDetailPage
    const [walletAddress, setWalletAddress] = useState('');
    const currency = 'ETH'; // กำหนดสกุลเงินเป็น ETH เสมอ

    const handlePaymentSubmit = (event) => {
        event.preventDefault();

        // Logic สำหรับการส่งข้อมูลการชำระเงินไปยัง Backend หรือ Smart Contract
        console.log('Cryptocurrency Payment Submitted', { walletAddress, amount: productPrice, currency });
    };

    return (
        <div className="payment-container">
            <h2>Cryptocurrency Payment</h2>
            <form onSubmit={handlePaymentSubmit}>
                <div className="crypto-section">
                    <label>Cryptocurrency Wallet Address</label>
                    <input
                        type="text"
                        placeholder="Enter wallet address"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        required
                    />
                </div>

                <div className="amount-section">
                    <label>Amount (in ETH)</label>
                    <p>{productPrice} {currency}</p> {/* แสดงราคาสินค้า */}
                </div>

                <button type="submit" className="submit-button">Submit Payment</button>
            </form>

            {/* แสดงรายละเอียดการชำระเงิน */}
            <div className="payment-summary">
                <h3>Payment Summary</h3>
                <p><strong>Wallet Address:</strong> {walletAddress}</p>
                <p><strong>Amount:</strong> {productPrice} {currency}</p>
            </div>
        </div>
    );
};

export default Payment;
