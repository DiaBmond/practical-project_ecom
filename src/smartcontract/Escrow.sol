// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    // โครงสร้างข้อมูลสำหรับการทำธุรกรรม
    struct Transaction {
        address buyer; // ที่อยู่ของผู้ซื้อ
        address seller; // ที่อยู่ของผู้ขาย
        uint price; // ราคาของสินค้า
        bool isDelivered; // สถานะการจัดส่งสินค้า
    }

    Transaction public transaction; // ตัวแปรสำหรับเก็บข้อมูลการทำธุรกรรม

    event DeliveryConfirmed(address indexed buyer); // Event แจ้งเตือนเมื่อยืนยันการส่งสินค้า
    event DisputeResolved(address indexed winner); // Event แจ้งเตือนเมื่อแก้ไขข้อพิพาท

    // Constructor: สร้างสัญญาใหม่พร้อมข้อมูลการทำธุรกรรม
    constructor(address _buyer, address _seller, uint _price) payable {
        require(msg.value == _price, "Payment must match the item price"); // ตรวจสอบยอดเงินที่ส่งมา
        transaction.buyer = _buyer; // ตั้งผู้ซื้อ
        transaction.seller = _seller; // ตั้งผู้ขาย
        transaction.price = _price; // กำหนดราคา
        transaction.isDelivered = false; // กำหนดสถานะการจัดส่งเบื้องต้นเป็น false
    }

    // ฟังก์ชันสำหรับยืนยันการส่งสินค้า
    function confirmDelivery() public {
        require(
            msg.sender == transaction.buyer,
            "Only buyer can confirm delivery"
        ); // ตรวจสอบว่าผู้ซื้อเรียกฟังก์ชันนี้
        require(!transaction.isDelivered, "Already delivered"); // ตรวจสอบว่ายังไม่ได้ส่งสินค้า

        transaction.isDelivered = true; // อัปเดตสถานะเป็นส่งแล้ว
        payable(transaction.seller).transfer(address(this).balance); // โอนเงินไปยังผู้ขาย
        emit DeliveryConfirmed(transaction.buyer); // แจ้งเตือนการส่งสินค้า
    }

    // ฟังก์ชันสำหรับแก้ไขข้อพิพาท
    function resolveDispute(bool refundBuyer) public {
        if (refundBuyer) {
            payable(transaction.buyer).transfer(address(this).balance); // คืนเงินให้ผู้ซื้อ
            emit DisputeResolved(transaction.buyer); // แจ้งเตือนผู้ชนะ
        } else {
            payable(transaction.seller).transfer(address(this).balance); // โอนเงินให้ผู้ขาย
            emit DisputeResolved(transaction.seller); // แจ้งเตือนผู้ชนะ
        }
    }

    // ป้องกันการรับ ETH โดยตรง
    receive() external payable {
        revert("Do not send ETH directly to this contract");
    }
}
