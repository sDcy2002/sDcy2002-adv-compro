function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

// try.Catch
console.log("\n--- try.Catch ---\n");

try {
    criticalCode();
} catch (ex) {
    console.log('Got an error');
    logError(ex);
}

//throwing in Try..Catch
console.log("\n--- throwing in Try..Catch ---\n");
try {
    throw "An exception that is throw every time";
} catch (ex) {
    console.log('Got an error');
    logError(ex);
}


// Try..Catch..Finally
console.log("\n--- Try..Catch..Finally ---\n");

try {
    criticalCode();
} catch (ex) {
    console.log('Got an error');
    logError(ex);
} finally {
    console.log('Code that always runs');
}

function hello() {
    console.log("\n*******Throwing Exceptions Example*******\n");
}