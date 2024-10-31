var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX - 20 + "px"),
        (cursor.style.top = e.clientY - 20 + "px");
});
