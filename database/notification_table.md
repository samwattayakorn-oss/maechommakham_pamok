# Notification Table

## Table Name
notification

| Field | Type | Description |
|-------|------|-------------|
| notification_id | UUID | รหัสแจ้งเตือน |
| member_id | UUID | รหัสสมาชิก |
| title | VARCHAR(255) | หัวข้อ |
| message | TEXT | ข้อความ |
| type | VARCHAR(50) | ประเภท |
| status | VARCHAR(50) | สถานะ |
| created_at | DATETIME | วันที่สร้าง |
| read_at | DATETIME | วันที่อ่าน |

## Relation
- Member Table
