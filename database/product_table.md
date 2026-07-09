# Product Table

## Table Name
product

## Purpose
เก็บข้อมูลสินค้าทั้งหมดของระบบ

## Columns

| Field | Type | Null | Key | Description |
|-------|------|------|-----|-------------|
| product_id | UUID | NO | PK | รหัสสินค้า |
| product_code | VARCHAR(50) | NO | UNIQUE | รหัสสินค้าแบบกำหนดเอง |
| product_name | VARCHAR(255) | NO | | ชื่อสินค้า |
| category_id | UUID | YES | FK | หมวดหมู่สินค้า |
| product_price | DECIMAL(10,2) | NO | | ราคาสินค้า |
| product_stock | INT | NO | | จำนวนคงเหลือ |
| product_weight | DECIMAL(10,2) | YES | | น้ำหนักสินค้า |
| product_description | TEXT | YES | | รายละเอียดสินค้า |
| product_image | TEXT | YES | | รูปภาพสินค้า |
| product_tag | TEXT | YES | | คำค้น |
| product_status | VARCHAR(50) | NO | | สถานะสินค้า |
| created_at | DATETIME | NO | | วันที่สร้าง |
| updated_at | DATETIME | NO | | วันที่แก้ไข |

## Relation
- Category Table
- Inventory Table
- Order Table
- Promotion Table
