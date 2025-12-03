const fullname = " Anirach  Mingkhwan  ";

const cleanname = fullname.trim();
console.log(`trim: '${cleanname}'`);

const nameParts = cleanname.split(" ");
console.log('nameParts: ', {nameParts});

const finalParts = nameParts.filter(Boolean);
console.log('fiter: ', {finalParts});

const firstname = finalParts[0];

console.log(`Hello, ${firstname}!`);
