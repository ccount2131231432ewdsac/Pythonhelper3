const btn = document.getElementById("showBtn");
const img = document.getElementById("myImage");

btn.addEventListener("click", function() {
    if (img.style.display === "none") {
        img.style.display = "block";
        btn.textContent = "Hide Image";
    } else {
        img.style.display = "none";
        btn.textContent = "Show Image";
    }
});
