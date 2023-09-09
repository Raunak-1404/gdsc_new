var all = document.querySelector("html");
var flag = 0;
var toggle_plane = false;
var heading = document.querySelector(".RCOEM");
var plane = document.querySelector(".plane");
var sun = document.querySelector(".sun");
var box = document.querySelectorAll(".box");
var circle = document.querySelector(".circle");

circle.addEventListener("click", () => {
    sun.textContent = " ";
    if(flag == 0) {
        all.style.backgroundColor = "#020817";
        heading.style.color = "white";
        flag = 1;
        apps_b();
        moveRight();
    } 

    else {
        heading.style.color = "#646464";
        all.style.backgroundColor = "white";
        flag = 0;
        moveLeft();
        apps_w();
    }
})

var id = null;
var move = document.querySelector(".move");

function moveRight() {
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if(pos == 55) {
            clearInterval(id)
        } else {
            pos++;

            move.style.left = pos + 'px';
        }
    }
}


function moveLeft () {
    var pos = 55;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame () {
        if(pos == 10) {
            clearInterval(id);
        } else {
            pos --;
            move.style.left = pos + 'px';
        }
    }
}

function apps_b () {
    for(let i = 0; i <= 2; i++) {
        box[i].style.backgroundColor = "#020817";
    }
}

function apps_w () {
    for(let i = 0; i <= 2; i++) {
        box[i].style.backgroundColor = "white";
    }
}

