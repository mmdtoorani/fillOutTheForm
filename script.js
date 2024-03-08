const btnResrt = document.getElementById("reset");
const btnFill = document.getElementById("fill");

let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");

function fillAll() {
  nameInp.value = "mohamad";
  emailInp.value = "mohamad@gmail.com";
}

function resetAll() {
  nameInp.value = "";
  emailInp.value = "";
}

btnResrt.addEventListener("click", resetAll);
btnFill.addEventListener("click", fillAll);
