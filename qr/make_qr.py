"""สร้าง QR code  ->  python make_qr.py https://ลิงก์ของคุณ [--logo]
ค่าเริ่มต้น: ไม่ใส่โลโก้ (สแกนง่ายที่สุด)  ใส่ --logo ถ้าต้องการโลโก้ตรงกลาง
ต้องติดตั้ง: pip install segno pillow
"""
import sys, base64, io, segno
from PIL import Image, ImageDraw

args = [a for a in sys.argv[1:] if not a.startswith("--")]
USE_LOGO = "--logo" in sys.argv
URL   = args[0] if args else "https://example.com/demo"
LOGO  = "../assets/logo.png"
FG, BG = "#2b2a1c", "#ffffff"       # โมดูลเข้ม / พื้นขาว (คอนทราสต์สูง สแกนง่าย)
BOX, BORDER = 24, 4                  # px ต่อโมดูล / ขอบขาว (ขั้นต่ำมาตรฐาน = 4)
LOGO_RATIO = 0.25                    # โลโก้กว้างไม่เกิน ~25% ของ QR (ECC H ทนได้ ~30%)

qr = segno.make(URL, error="h" if USE_LOGO else "q", boost_error=False)
m = [list(r) for r in qr.matrix]
n = len(m); side = (n + BORDER*2) * BOX

img = Image.new("RGB", (side, side), BG)
d = ImageDraw.Draw(img)
for y, row in enumerate(m):
    for x, v in enumerate(row):
        if v:
            px, py = (x+BORDER)*BOX, (y+BORDER)*BOX
            d.rounded_rectangle([px, py, px+BOX-1, py+BOX-1], radius=BOX*0.28, fill=FG)
# finder pattern ให้เป็นสี่เหลี่ยมคมตามมาตรฐาน (สแกนเร็วกว่า)
def finder(ox, oy):
    for yy in range(7):
        for xx in range(7):
            if m[oy+yy][ox+xx]:
                px, py = (ox+xx+BORDER)*BOX, (oy+yy+BORDER)*BOX
                d.rectangle([px, py, px+BOX-1, py+BOX-1], fill=FG)
for ox, oy in [(0,0),(n-7,0),(0,n-7)]:
    d.rectangle([(ox+BORDER)*BOX, (oy+BORDER)*BOX, (ox+7+BORDER)*BOX-1, (oy+7+BORDER)*BOX-1], fill=BG)
    finder(ox, oy)

if USE_LOGO:
  logo = Image.open(LOGO).convert("RGBA")
  lw = int(side * LOGO_RATIO); lh = int(lw * logo.height / logo.width)
  logo = logo.resize((lw, lh), Image.LANCZOS)
  pad = int(BOX*1.2)
  bx0, by0 = (side-lw)//2 - pad, (side-lh)//2 - pad
  bx1, by1 = bx0 + lw + pad*2, by0 + lh + pad*2
  d.rounded_rectangle([bx0, by0, bx1, by1], radius=pad*1.6, fill=BG)
  img.paste(logo, ((side-lw)//2, (side-lh)//2), logo)
img.save("qr.png" if not USE_LOGO else "qr_logo.png", dpi=(300,300))

# SVG (เวกเตอร์ ใช้พิมพ์ได้คมทุกขนาด)
u = 10; S = (n + BORDER*2) * u
parts = [f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {S} {S}" width="{S}" height="{S}" shape-rendering="crispEdges">',
         f'<rect width="{S}" height="{S}" fill="{BG}"/>', f'<g fill="{FG}">']
for y, row in enumerate(m):
    x = 0
    while x < n:
        if row[x]:
            x0 = x
            while x < n and row[x]: x += 1
            parts.append(f'<rect x="{(x0+BORDER)*u}" y="{(y+BORDER)*u}" width="{(x-x0)*u}" height="{u}"/>')
        else: x += 1
parts.append('</g>')
if USE_LOGO:
  buf = io.BytesIO(); Image.open(LOGO).convert("RGBA").save(buf, "PNG")
  b64 = base64.b64encode(buf.getvalue()).decode()
  sw = S*LOGO_RATIO; sh = sw*logo.height/logo.width; sp = u*1.2
  sx, sy = (S-sw)/2, (S-sh)/2
  parts.append(f'<rect x="{sx-sp:.1f}" y="{sy-sp:.1f}" width="{sw+sp*2:.1f}" height="{sh+sp*2:.1f}" rx="{sp*1.6:.1f}" fill="{BG}"/>')
  parts.append(f'<image x="{sx:.1f}" y="{sy:.1f}" width="{sw:.1f}" height="{sh:.1f}" xlink:href="data:image/png;base64,{b64}"/>')
parts.append('</svg>')
open("qr_logo.svg" if USE_LOGO else "qr.svg", "w").write("\n".join(parts))
print("OK:", URL, "| modules:", n, "| png px:", side)
