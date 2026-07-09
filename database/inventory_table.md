# Inventory Table

## Table Name
inventory

| Field | Type | Description |
|-------|------|-------------|
| inventory_id | UUID | รหัสสต๊อก |
| product_id | UUID | รหัสสินค้า |
| stock_quantity | INT | จำนวนคงเหลือ |
| reserved_quantity | INT | จำนวนที่ถูกจอง |
| available_quantity | INT | จำนวนขายได้ |
| stock_status | VARCHAR(50) | สถานะ |
| created_at | DATETIME | วันที่สร้าง |
| updated_at | DATETIME | วันที่แก้ไข |

## Relation
- Product Table
- Order Table
