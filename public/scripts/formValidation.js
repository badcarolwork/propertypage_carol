const form = document.querySelector("form");

handleSubmit = (e) => {
    e.preventDefault();
    form.classList.add("validated");
    if (!form.checkValidity()) {
        form.querySelectorAll(":invalid")[0].focus();
        return;
    } else {
        const submissionDone = `<div id="successMsg" class="py-3 shadow-xs rounded-sm text-center border border-gray-200">
                    <h5 class="font-bold text-lg text-secondary ">Your submission has been sent! </h5>
                    <p>Our team will be contact you shortly</p>
                </div>`
        form.innerHTML = submissionDone;
    }
}

document.querySelector("#formSubmit").addEventListener("click", handleSubmit);