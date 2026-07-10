# Order Workflow

## Create Order

Cart
↓
Validate Customer
↓
Validate Stock
↓
Create Order
↓
Generate Order Number
↓
Save Order
↓
Complete

--------------------------------

## Payment Success

Payment
↓
Update Order Status
↓
Reduce Inventory
↓
Prepare Shipping
↓
Complete

--------------------------------

## Cancel Order

Customer/Admin
↓
Update Status
↓
Restore Stock
↓
Complete

--------------------------------

## Complete Order

Shipping Delivered
↓
Update Status
↓
Save History
↓
Complete
