let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);

let arrCheck = [];

arr.forEach(button => {
    button.addEventListener(`click`, (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            arrCheck.push(string);
            input.value = string;
        }

        else if (e.target.innerHTML == "AC") {
            string = "";
            arrCheck.push(string);
            input.value = string;
        }

        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            arrCheck.push(string);
            input.value = string;
        }

        else if (e.target.innerHTML == "%") {
            string = String(eval(string) / 100);
            arrCheck.push(string);
            input.value = string;
        }

        
        else if (e.target.innerHTML == "Back") {
            if (arrCheck.length>0){
            string = arrCheck.pop(string);
            input.value = string;
            }
        }

        else {
            string += e.target.innerHTML;
            arrCheck.push(string);
            input.value = string;
        }
    })
})