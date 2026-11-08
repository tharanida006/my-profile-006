// ดึง Element ปุ่มทักทายและกล่องข้อความ
const greetingBtn = document.getElementById('greetingBtn');
const message = document.getElementById('message');

// รายการข้อความทักทาย
const greetings = [
    'สวัสดีฮ้าฟฟู้ววว ยินดีย์ที่ได้รู้จักค์ ✨',
    'ยินดีต้อนรับสู่ My Developer Portfolio 🌸',
    'ขอให้วันนี้เป็นวันที่สดใสและเขียนโค้ดราบรื่นนะ! 💻💖',
    '“การบ้านส่งให้ครู เลิฟยูส่งให้เธอ” ขอบคุณที่แวะมาเยี่ยมชมนะฮะ 🧸'
];

let currentIndex = 0;

// ตรวจสอบและเพิ่ม Event Listener ให้กับปุ่มทักทาย
if (greetingBtn && message) {
    greetingBtn.addEventListener('click', function () {
        // เปลี่ยนข้อความทักทายแบบหมุนเวียน
        message.textContent = greetings[currentIndex];
        
        // เพิ่มเอฟเฟกต์แอนิเมชันให้ข้อความเด้งเบาๆ
        message.style.transform = 'scale(1.08)';
        message.style.transition = 'transform 0.2s ease, color 0.2s ease';
        message.style.color = '#d84b7d';

        setTimeout(() => {
            message.style.transform = 'scale(1)';
        }, 200);

        // เลื่อน index ข้อความถัดไป
        currentIndex = (currentIndex + 1) % greetings.length;
    });
}