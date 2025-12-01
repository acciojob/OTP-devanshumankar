//your JS code here. If required.
const container = document.querySelector(".code-container")
        container.addEventListener("input", (e) => {
            const ele = e.target
            if (ele.value.length == 1) {
                ele.nextElementSibling.focus()
            }

        })
        const inputs = container.querySelectorAll(".code");

        inputs.forEach((input, index) => {
            input.addEventListener("keydown", (e) => {
                if (e.key === "Backspace" && input.value.length === 0) {
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                }
            });
        });
