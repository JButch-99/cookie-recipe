window.onload = function() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    let img = document.querySelector("img");

    button1.onclick = function() {
        h1.style.backgroundColor = "lightGrey";
        h1.style.webkitTextStrokeColor = "black";
        body.style.backgroundColor = "grey";
        console.log("Light Mode Enabled");
    }

    button2.onclick = function() {
        h1.style.backgroundColor = "darkBlue";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        console.log("Dark Mode Enabled");
    }

    button3.onclick = function() {
        body.style.fontSize = "150%";
        img.style.height = "700px";
    }

    button4.onclick = function() {
        body.style.fontSize = "75%";
        
    }

    img.onmouseover = function() {
        img.style.height = "500px";
    }

    img.onmouseleave = function() {
        img.style.height = "250px";
    }

    let h1 = document.querySelector("h1");
    let body = document.querySelector("body");
}