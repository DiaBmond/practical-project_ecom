// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Escrow.sol"; // นำเข้า Escrow contract

contract EscrowFactory {
    // โครงสร้างข้อมูลสำหรับการเก็บ Escrow Contracts
    struct EscrowInfo {
        Escrow escrowContract; // ตัวสัญญา Escrow ที่สร้างขึ้น
        address buyer; // ที่อยู่ของผู้ซื้อ
        address seller; // ที่อยู่ของผู้ขาย
        uint price; // ราคาสินค้า
    }

    mapping(uint => EscrowInfo) public escrows; // ใช้ mapping แทน array
    uint public escrowCount; // ตัวนับสำหรับจำนวน Escrow

    event EscrowCreated(
        address indexed buyer,
        address indexed seller,
        uint price
    ); // แจ้งเตือนเมื่อสร้าง Escrow ใหม่

    // ฟังก์ชันสำหรับสร้าง Escrow ใหม่
    function createEscrow(address _seller, uint _price) public payable {
        uint priceInWei = _price * 1 ether; // แปลงราคาเป็น Wei
        require(msg.value == priceInWei, "Payment must match the item price"); // ตรวจสอบว่าจ่ายตรงกับราคา

        Escrow newEscrow = new Escrow{value: msg.value}(
            msg.sender,
            _seller,
            priceInWei
        ); // สร้าง Escrow ใหม่
        escrows[escrowCount] = EscrowInfo(
            newEscrow,
            msg.sender,
            _seller,
            _price
        ); // เก็บข้อมูล Escrow ใน mapping
        escrowCount++; // เพิ่มจำนวน Escrow

        emit EscrowCreated(msg.sender, _seller, _price); // แจ้งเตือนการสร้าง Escrow
    }

    // ฟังก์ชันสำหรับดึงข้อมูล Escrow โดยใช้ id
    function getEscrow(uint id) public view returns (EscrowInfo memory) {
        require(id < escrowCount, "Escrow does not exist"); // ตรวจสอบว่า Escrow นั้นมีอยู่
        return escrows[id]; // ส่งกลับข้อมูล Escrow
    }
}
