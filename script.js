function mailSend() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Sending email using EmailJS
  emailjs.send("service_qe5hbep", "template_ek2em98", parms).then(
    function (response) {
      alert("Send Successful!! Click ok!!!");
      clearForm(); // Clear the form after successful submission
    },
    function (error) {
      console.error("EmailJS send error:", error);
      alert("Failed to send email. Please try again later.");
    }
  );
}

function clearForm() {
  // Clearing input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

// JavaScript to toggle the visibility of the dropdown menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("dropdown-menu");
  menu.classList.toggle("hidden");
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
