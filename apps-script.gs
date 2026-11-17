// วางโค้ดนี้ใน Google Sheet: Extensions > Apps Script  แล้วกด Deploy > New deployment > Web app
// Execute as: Me  |  Who has access: Anyone  จากนั้นคัดลอก Web app URL ไปใส่ CONFIG.scriptUrl ใน index.html
const SHEET_NAME = 'RSVP';
const HEADERS = ['เวลา', 'ชื่อ', 'การตอบรับ', 'จำนวนผู้ร่วมงาน', 'อาหารที่แพ้', 'ข้อความ'];

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  sh.appendRow([new Date(d.timestamp), d.name, d.attending, d.guests, d.diet, d.message]);
  return ContentService.createTextOutput('ok');
}
