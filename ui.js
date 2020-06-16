let $ = (id) => document.getElementById(id);
let click = () => console.log("CLICK");

let toggleDisplay = (id) => {
    if ($(id).style.display == "none") {
        $(id).style.display = "flex";
    } else {
        $(id).style.display = "none";
    }
}

$("menuBtn").addEventListener("click", function() {
    toggleDisplay("menu");
});

$("collapse").addEventListener("click", function() {
    toggleDisplay("listContent");
});