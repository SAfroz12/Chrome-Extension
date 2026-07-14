let tooltip;
console.log("content.js")
document.addEventListener("mouseup", (e) => {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 50) {
        createTooltip(selectedText, e);
    }
});

function createTooltip(text, e) {

    if (tooltip) tooltip.remove();

    tooltip = document.createElement("div");

    tooltip.innerText = "Check Score";
    tooltip.style.padding = "8px";
    tooltip.style.background = "black";
    tooltip.style.color = "white";
    tooltip.style.position = "absolute";
    tooltip.style.zIndex = 9999;
    tooltip.style.borderRadius = "10px";

    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX}px`;

    tooltip.onclick = () => {

        tooltip.innerText = "Checking...";

        chrome.runtime.sendMessage({
            type: "CHECK_SCORE",
            jobDescription: text
        }, (response) => {

            if (!response) {
                tooltip.innerText = "Error";
                return;
            }

            chrome.storage.local.set({ atsResult: response });

            tooltip.innerText = "Done ✔";

            setTimeout(() => tooltip.remove(), 2000);
        });
    };

    document.body.appendChild(tooltip);
}