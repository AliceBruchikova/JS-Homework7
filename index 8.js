const container = document.getElementById("container");
const message = document.getElementsByClassName("message");
const closeM = document.getElementsByClassName("close");

container.addEventListener("click", (event) => {
    if (event.target.closest(".close")) {
        event.target.closest('.message').style.display = "none";
    }
  });
  