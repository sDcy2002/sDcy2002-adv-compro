const message = 500;

if (message === 200) {
    console.log("OK!");
} else if (message === 400) {
    console.log("Bad Request!");
} else{
    console.log('Other status');
}

switch (message) {
    case 200:
        console.log("OK!");
        console.log('succeess');
    case 400:
        console.log("Bad Request!");
        break;
    default:
        console.log('Other status');
}

const result = (message === 200) ? "OK!" : "Other status";
console.log(result);