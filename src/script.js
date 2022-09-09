// DOM ELEMENTS
const openDialogBtn = document.querySelector("#openDialog");
const dialogWrapperEl = document.querySelector("#dialogWrapper");
const dialogEl = document.querySelector("#dialog");
const dialogDisagreeBtn = document.querySelector("#disagreeBtn");
const dialogAgreeBtn = dialogEl.querySelector("#agreeBtn");
const dialogCloseIcon = dialogEl.querySelector("#dialogCloseIcon");

const snackbarWrapperEl = document.querySelector("#snackbarWrapper");
const snackbarEl = document.querySelector("#snackbar");
const snackbarMessage = snackbarEl.querySelector("#snackbarMessage");
const snackbarCloseIcon = snackbarEl.querySelector("#snackbarCloseIcon");

function showDialog() {
  dialogWrapperEl.classList.toggle("hidden");

  // Display the dialog 10ms after wrapper is made visible
  setTimeout(() => {
    dialogWrapperEl.style.opacity = 1;
    dialogEl.style.transform = "initial";
    dialogEl.style.opacity = 1;
  }, 10);
}

function showSnackbar(message) {
  const paraEl = document.createElement("p");
  paraEl.classList.add("content");
  paraEl.innerText = message;
  snackbarMessage.innerHTML = "";
  snackbarMessage.append(paraEl);

  snackbarWrapperEl.classList.remove("hidden");

  // Display the dialog 10ms after wrapper is made visible
  setTimeout(() => {
    snackbarWrapperEl.style.opacity = 1;
    snackbarEl.style.transform = "initial";
    snackbarEl.style.opacity = 1;
  }, 10);
}

function hideSnackbar() {
  snackbarWrapperEl.style.opacity = 0;
  snackbarEl.style.transform = "translateY(10px)";
  snackbarEl.style.opacity = 0;

  // Wait till animation is over to hide the wrapper
  setTimeout(() => {
    snackbarWrapperEl.classList.toggle("hidden");
  }, 150);
}

function hideDialog(response = null) {
  if (response == true) {
    showSnackbar("You agreed to the T&Cs.");
  } else {
    showSnackbar("You didn't agree to the T&Cs. ;(");
  }

  dialogWrapperEl.style.opacity = 0;
  dialogEl.style.transform = "translateY(10px)";
  dialogEl.style.opacity = 0;

  // Wait till animation is over to hide the wrapper
  setTimeout(() => {
    dialogWrapperEl.classList.toggle("hidden");
  }, 150);
}

openDialogBtn.addEventListener("click", showDialog);
dialogAgreeBtn.addEventListener("click", () => {
  hideDialog(true);
});
dialogDisagreeBtn.addEventListener("click", () => {
  hideDialog(false);
});
dialogCloseIcon.addEventListener("click", hideDialog);
snackbarCloseIcon.addEventListener("click", hideSnackbar);
