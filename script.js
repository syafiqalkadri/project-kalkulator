
let input = document.getElementById("input")
let numbers = document.getElementsByClassName("numbers");
let operator = document.getElementsByClassName("operator")

for (let i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = [i].toString();
    numbers[i].addEventListener("click", () => {
        input.innerHTML += [i].toString();

    })
  
}

for(let i = 0 ; i < operator.length; i++) {
    operator[0].addEventListener("click", () => {
        input.innerHTML = "";
    })


    if ([i] > 0 && [i] < 6 && [i] != 5) {
        operator[i].addEventListener("click", () => {
            input.innerHTML += " " + operator[i].innerHTML.toString() + " ";

        })
    }  else if ([i] == 6) {
        operator[i].addEventListener("click", () =>  {
            input.innerHTML += operator[i].innerHTML.toString();
        })
    } else if ([i] == 5) {
       operator[i].addEventListener("click", () => {
        input.innerHTML += operator[i].innerHTML.toString();
       })
    } else if ([i] == 9) {
        operator[i].addEventListener("click", () => {
            if (input.innerHTML == "" ) {
                alert("kosong kocak") 
            } else {
                input.innerHTML = eval(input.innerHTML); 
            }
        })
    } else if ([i] == 7) {
        operator[i].addEventListener("click", () =>  {
            let hasil = input.innerHTML;
            input.innerHTML = hasil.substring(0,hasil.length-1);
        })
    } else if ([i] == 8) {
        operator[i].addEventListener("click", () => {
            if (input.innerHTML == "") {
                alert("kosong kocak");
            } else {
                input.innerHTML = Math.sqrt(input.innerHTML);
            }
        
        })
      }

}






