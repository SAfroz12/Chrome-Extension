console.log("background.js")
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.type === "CHECK_SCORE") {

        fetch("http://localhost:9000/calculateScore", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jd: message.jobDescription
            })
        })
        .then(res => res.json())
        .then(data => {
            sendResponse(data);
        })
        .catch(() => {
            sendResponse({ error: "API failed" });
        });

        return true; // 🔥 important
    }
});