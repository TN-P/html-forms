const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value.trim();

    let valid = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("successMessage").textContent = "";

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name.length < 3){
        document.getElementById("nameError").textContent = "Minimum 3 characters required.";
        valid = false;
    }

    if(!email.match(emailPattern)){
        document.getElementById("emailError").textContent = "Enter valid email.";
        valid = false;
    }

    if(subject === ""){
        document.getElementById("subjectError").textContent = "Select subject.";
        valid = false;
    }

    if(message.length < 10){
        document.getElementById("messageError").textContent = "Minimum 10 characters required.";
        valid = false;
    }

    if(valid){
        let button = document.querySelector(".btn");
        button.textContent = "Sending...";
        button.disabled = true;

        let formData = { name, email, subject, message };

        let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
        submissions.push(formData);
        localStorage.setItem("submissions", JSON.stringify(submissions));

        setTimeout(() => {
            button.textContent = "Send Message";
            button.disabled = false;
            document.getElementById("successMessage").textContent = "Message saved!";
            form.reset();
        }, 1200);
    }
});

function toggleTheme(){
    document.body.classList.toggle("dark");
}

