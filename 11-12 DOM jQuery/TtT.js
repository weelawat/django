var td = document.querySelectorAll("td")

var restart = document.querySelector('#b');

restart.addEventListener("click", function cleartb(){
    for (var i = 0; i<td.length; i++){
        td[i].textContent = " "
    }
})

function changeMarker() {
    if (this.textContent === " "){
        this.textContent = "x"
    }
    else if(this.textContent === "x"){
        this.textContent = "o"
    }
    else{
        this.textContent = " "
    }
}

for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", changeMarker);
}