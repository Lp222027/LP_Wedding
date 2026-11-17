# Lee & Praew · Wedding RSVP

- `index.html` หน้าเว็บทั้งหมด (HTML/CSS/JS ไฟล์เดียว) แก้ข้อความ/ลิงก์ได้ที่ `CONFIG` ด้านล่างไฟล์
- `assets/` โลโก้และรูป
- `apps-script.gs` โค้ดรับคำตอบ RSVP เข้า Google Sheet
- `qr/make_qr.py` สร้าง QR ใส่โลโก้: `python make_qr.py https://ลิงก์จริง` (ต้อง `pip install segno pillow`)

ลิงก์เฉพาะแขก: ต่อท้าย URL ด้วย `?to=ชื่อแขก` จะขึ้นชื่อบนซองและกรอกชื่อในฟอร์มให้อัตโนมัติ
ข้ามซองเปิดการ์ด: `?skip`

เผยแพร่: อัปโหลดทั้งโฟลเดอร์ขึ้น GitHub แล้วเปิด Settings > Pages (หรือลากไปวางที่ Netlify Drop)
