function promisetimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms);
    });
}

promisetimeout(2000)
    .then(() => {
        console.log('Done!');
        return promisetimeout(1000);
    })
    .then(() => {
        console.log("ALso Done!");
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log('Error occurred!');
    });