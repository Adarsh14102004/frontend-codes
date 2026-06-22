function downloadStarted(callback) {
    console.log("Download Started...");

    setTimeout(() => {
        callback();
    }, 3000);
}

function downloading(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        callback();
    }, 2000);
}

function downloadCompleted() {
    console.log("Download Completed!");
}
downloadStarted(() => {
    downloading(() => {
        downloadCompleted();
    });
});