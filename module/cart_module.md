# Order Module

## Purpose
จัดการคำสั่งซื้อ

## Responsibility
- สร้างคำสั่งซื้อ
- ยกเลิกคำสั่งซื้อ
- ติดตามสถานะ
- สรุปรายการสินค้า

## Relation
- Cart Module
- Payment Module
- Shipping Module
- Inventory Module
- Member Module

## Event
- ORDER_CREATE
- ORDER_UPDATE
- ORDER_CANCEL
- ORDER_COMPLETE

## Status
- Draft
- Pending
- Paid
- Shipping
- Delivered
- Cancel

## Future Expansion
- Partial Payment
- Partial Shipping
- Return Order
- Refund
