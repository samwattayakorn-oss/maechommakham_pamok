# Cart Table

## Table Name
cart

| Field | Type | Description |
|-------|------|-------------|
| cart_id | UUID | รหัสตะกร้า |
| member_id | UUID | รหัสสมาชิก |
| product_id | UUID | รหัสสินค้า |
| quantity | INT | จำนวนสินค้า |
| unit_price | DECIMAL(10,2) | ราคาต่อหน่วย |
| total_price | DECIMAL(10,2) | ราคารวม |
| created_at | DATETIME | วันที่สร้าง |
| updated_at | DATETIME | วันที่แก้ไข |

## Relation
- Member Table
- Product Table
