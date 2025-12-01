//your JS code here. If required.
const container = document.querySelector(".code-container")
const inputs = container.querySelectorAll(".code");
inputs[0].focus();
        container.addEventListener("input", (e) => {
            const ele = e.target
            if (ele.value.length == 1) {
				if(ele.nextElementSibling){
	                ele.nextElementSibling.focus()
				}
            }

        })

        inputs.forEach((input, index) => {
            input.addEventListener("keydown", (e) => {
                if (e.key === "Backspace" && input.value.length === 0) {
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                }
            });
        });
