function genarateTempId() {
    // Matgh.random() เพื่อสร้างตัวเลขสุ่มระหว่าง 0 ถึง 1
    // toString(36) เพื่อแปลงเป็นฐาน 36 (0-9, a-z)
    // substring(2, 8) ตัด '0.' ออกและเอา 6 ตัวอักษรถัดไป
    const randomPart = Math.random().toString(36).substring(2, 8);

    // toUpperCase เพื่อแปลงเป็นตัวพิมพ์ใหญ่
    return randomPart.toUpperCase();
}

const orderId = genarateTempId();
console.log(`ID ออเดเดอร์ชั่วคราวของคุณคือ: ${orderId}`);
// output ตัวอย่าง: ID ออเดอร์ชั่วคราวของคุณคือ: 4F7G8H(สุ่มออกมา)