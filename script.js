function kliknuti() {
    console.log("test")
    if(document.getElementById("matsem").style.display === "none") {
        document.getElementById("matsem").style.display = "block"
    } else {
        document.getElementById("matsem").style.display = "none"
    }
}

document.getElementById("button").onclick=kliknuti