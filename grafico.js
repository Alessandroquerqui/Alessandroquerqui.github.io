document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.createElement('iframe');
    iframe.src = "https://Alessandroquerqui.github.io/hw4_1.html";
    iframe.width = "100%";
    iframe.height = "500";
    iframe.style.border = "none";
    document.getElementById("grafico-container").appendChild(iframe);
});