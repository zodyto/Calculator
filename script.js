let string = "";

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.value === "AC") {
            console.log(event.target.value);
            string = "";
            document.querySelector("input").value = string;
        } else if (event.target.value === "=") {
            if (string === "") {
            } else {
                try {
                    string = eval(string);
                    document.querySelector("input").value = string;
                } catch (err) {
                    document.querySelector("input").value = string;
                        'Error, Please click "AC".';
                }
            }
        } else {
            string += event.target.value;
            document.querySelector("input").value = string;
        }
    });
});
