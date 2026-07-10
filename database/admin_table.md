# Admin Table

## Table Name
admin

| Field | Type | Description |
|-------|------|-------------|
| admin_id | UUID | รหัสผู้ดูแล |
| username | VARCHAR(100) | ชื่อผู้ใช้ |
| password_hash | TEXT | รหัสผ่านเข้ารหัส |
| full_name | VARCHAR(255) | ชื่อเต็ม |
| role | VARCHAR(50) | สิทธิ์ |
| status | VARCHAR(50) | สถานะ |
| created_at | DATETIME | วันที่สร้าง |
| updated_at | DATETIME | วันที่แก้ไข |
