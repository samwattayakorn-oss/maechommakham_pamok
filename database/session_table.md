# Session Table

## Table Name
session

| Field | Type | Description |
|-------|------|-------------|
| session_id | UUID | รหัส Session |
| member_id | UUID | รหัสสมาชิก |
| token | TEXT | Access Token |
| device | VARCHAR(255) | อุปกรณ์ |
| ip_address | VARCHAR(100) | IP |
| expired_at | DATETIME | วันหมดอายุ |
| created_at | DATETIME | วันที่สร้าง |
