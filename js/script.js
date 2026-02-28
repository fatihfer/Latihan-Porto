
function changeName() {
    let name = prompt("Enter your name:");
    if (name && name.trim() !== "") {
        document.getElementById("username").innerText = name;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("messageForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("messageText").value.trim();

        if (!name || !email || !message) {
            alert("All fields must be filled!");
            return;
        }

        document.getElementById("result").innerHTML =
            `Thank you <span class="text-indigo-600">${name}</span>!<br>
             Email: ${email}<br>
             Message: ${message}`;
    });
});