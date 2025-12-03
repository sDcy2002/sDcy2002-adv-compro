const registrationDate = new Date("2023-08-15T14:30:00Z");

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};

const formatDate =
 registrationDate.toLocaleDateString('th-TH', options);

console.log(`วันที่สมัครสมาชิก: ${formatDate}`);
// output: วันที่สมัครสมาชิก: 15 สิงหาคม 2023