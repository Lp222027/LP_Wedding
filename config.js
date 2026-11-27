/* ====================================================================
   config.js — ข้อมูลทั้งหมดของเว็บอยู่ที่นี่
   แก้ง่ายที่สุดผ่าน admin.html  (หรือแก้ไฟล์นี้บน GitHub ตรงๆ ก็ได้)
   - ข้อความ: ขึ้นบรรทัดใหม่ใช้ \n
   - รูป: ใส่ "src": "" เพื่อเว้นช่องรูปไว้ก่อน (เว็บจะแสดงกรอบสีเขียวพร้อมโลโก้แทน)
   ==================================================================== */
window.SITE = {
  "eventDate": "2027-03-22T14:00:00+07:00",
  "scriptUrl": "",
  "siteUrl": "https://lp222027.github.io/LP_Wedding/",
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=The+Signature+Hotel+Airport",

  "theme": { "white": "#fdfcf8", "paper": "#f5f2ea", "ink": "#22231b", "olive": "#5b582c", "moss": "#68663f", "film": "#1d1b16" },

  "sections": { "save": true, "invite": true, "schedule": true, "dress": true, "gallery": true, "rsvp": true, "closing": true },

  "text": {
    "introEyebrow": "The wedding of",
    "introHint": "แตะซองเพื่อเปิด",
    "introHintEn": "Tap to open",
    "toPrefix": "ถึง",

    "nameA": "Lee",
    "and": "and",
    "nameB": "Praew",
    "heroDate": "22 · 03 · 2027",
    "tag": "#LPLingerHour",

    "bar1": "Save the date",
    "saveTitle": "Save the Date",
    "saveSub": "Grab your best fit and celebrate with us",
    "saveP1": "Together with our families,\nwe would love for you to join us\nin celebrating our wedding.",
    "saveP2": "Come gather, linger a little longer,\nand share in the warmth of our favorite day.",
    "dateEn": "March 22, 2027",
    "saveCta": "ตอบรับคำเชิญ",

    "bar2": "The invitation",
    "estLabel": "Est.",
    "estYear": "2027",
    "inviteTh": "วันพิเศษของเราจะสมบูรณ์ยิ่งขึ้น\nเมื่อมีคนสำคัญเช่นคุณมาร่วมยินดี",
    "name1": "อาภากร อารีวัฒนา",
    "andTh": "และ",
    "name2": "วรัญญา เกสโร",
    "venueName": "เดอะ ซิกเนเจอร์ โฮเทล แอร์พอร์ต",
    "dateTh": "วันจันทร์ 22 มีนาคม 2570",
    "mapBtn": "ดูแผนที่",

    "bar3": "The day",
    "schedTitle": "Wedding Day Schedule",
    "schedSub": "กำหนดการ",

    "bar4": "Dress code",
    "dressEyebrow": "what to wear",
    "dressTitle": "Dress Code",
    "dressSub": "โทนสีที่แนะนำ",

    "bar5": "Moments",
    "filmEdge": "LP 2027",

    "bar6": "RSVP",
    "rsvpTitle": "Kindly Reply",
    "rsvpSub": "กรุณายืนยันการเข้าร่วมงาน",
    "rsvpNote": "",
    "thanksScript": "Thank you",
    "thanksYesTitle": "แล้วพบกันนะคะ",
    "thanksYesText": "ขอบคุณ {name} เจอกันวันที่ 22 มีนาคม 2570",
    "thanksNoTitle": "ขอบคุณที่แจ้งให้ทราบค่ะ",
    "thanksNoText": "เสียดายที่ไม่ได้เจอกัน ขอบคุณ {name} สำหรับคำอวยพรนะคะ",

    "footerNote": "(ขออภัยหากมิได้มาเรียนเชิญด้วยตนเอง)"
  },

  "timeline": [
    { "time": "14.00", "th": "พิธียกน้ำชา", "en": "Tea ceremony", "icon": "teapot" },
    { "time": "15.00", "th": "พิธีกล่าวคำสัญญาและแลกแหวน", "en": "Vows & ring exchange", "icon": "ringbox" },
    { "time": "18.30", "th": "รับประทานอาหารเย็นร่วมกัน", "en": "Dinner together", "icon": "cherub" }
  ],

  "dress": [
    { "name": "Butter Yellow", "color": "#fff2b7" },
    { "name": "Avocado", "color": "#9c984b" },
    { "name": "Olive", "color": "#5b582c" },
    { "name": "Peanut", "color": "#a77b48" },
    { "name": "Dusty Taupe", "color": "#b79c87" }
  ],

  "photos": {
    "poster":   { "src": "", "focus": "50% 50%" },
    "portrait": { "src": "photos/print1.jpg", "focus": "50% 45%" },
    "detail":   { "src": "", "focus": "50% 50%" },
    "closing":  { "src": "", "focus": "50% 50%" }
  },

  "pageBg": { "src": "photos/bg.jpg", "dim": 58 },
  "music": { "src": "" },

  /* วิดีโอเปิดซอง: video = แนวตั้ง 9:16 (มือถือ), videoWide = แนวนอน 16:9 (จอคอม ไม่บังคับ)
     ภาพนิ่งซองปิดใส่ที่ photos.poster  ถ้ายังไม่มีวิดีโอ เว็บจะใช้ซองที่วาดไว้ + โลโก้แทน */
  "video": { "src": "" },
  "videoWide": { "src": "" },

  /* รูปในแถบฟิล์มที่วิ่งวน (05) */
  "gallery": [
    { "src": "photos/gallery/01.webp", "alt": "คู่บ่าวสาวยืนยิ้มข้างประตูไม้เก่า" },
    { "src": "photos/gallery/02.webp", "alt": "เจ้าสาวหมุนกระโปรงบนสนามหญ้า" },
    { "src": "photos/gallery/03.webp", "alt": "คู่บ่าวสาวจูงมือเดินริมบึง" },
    { "src": "photos/gallery/04.webp", "alt": "คู่บ่าวสาวโผล่จากหน้าต่างผนังปูนเก่า" },
    { "src": "photos/gallery/05.webp", "alt": "เจ้าบ่าวอุ้มเจ้าสาวหมุนกลางสวน" },
    { "src": "photos/gallery/06.webp", "alt": "เจ้าสาวมองกระจก เห็นเงาเจ้าบ่าว" },
    { "src": "photos/gallery/07.webp", "alt": "เจ้าสาวคลุมผ้าคลุมหน้า ยืนหันหลังในสวน" },
    { "src": "photos/gallery/08.webp", "alt": "คู่บ่าวสาวกอดกันในโถงทางเดิน ภาพขาวดำ" },
    { "src": "photos/gallery/09.webp", "alt": "เจ้าสาวหมุนชุดในศาลาไม้" },
    { "src": "photos/gallery/10.webp", "alt": "เจ้าสาวนั่งบนสนามหญ้าริมบึง เจ้าบ่าวยืนข้าง" },
    { "src": "photos/gallery/11.webp", "alt": "คู่บ่าวสาววิ่งออกจากประตูสู่สวน" },
    { "src": "photos/gallery/12.webp", "alt": "คู่บ่าวสาวใต้ผ้าคลุมหน้า ท่ามกลางหญ้าสูง" },
    { "src": "photos/gallery/13.webp", "alt": "คู่บ่าวสาวหัวเราะด้วยกัน" },
    { "src": "photos/gallery/14.webp", "alt": "เจ้าสาวยิ้มใต้ผ้าคลุมหน้า เจ้าบ่าวยืนด้านหลัง" }
  ]
};
