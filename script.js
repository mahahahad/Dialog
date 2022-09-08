// DOM ELEMENTS
const dialogWrapperEl = document.querySelector("#dialogWrapper");
const dialogEl = document.querySelector("#dialog");
const openDialogBtn = document.querySelector("#openDialog");
const dialogDisagreeBtn = document.querySelector("#disagreeBtn");
const dialogAgreeBtn = document.querySelector("#agreeBtn");
const closeIcon = document.querySelector("#closeIcon");

function showDialog() {
  dialogWrapperEl.classList.toggle("hidden");

  // Display the dialog 10ms after wrapper is made visible
  setTimeout(() => {
    dialogWrapperEl.style.opacity = 1;
    dialogEl.style.transform = "initial";
    dialogEl.style.opacity = 1;
  }, 10);
}

function hideDialog(response = "default") {
  // could use response parameter to see if user denied or agreed and
  // proceed based on that
  dialogWrapperEl.style.opacity = 0;
  dialogEl.style.transform = "translateY(15px)";
  dialogEl.style.opacity = 0;

  // Wait till animation is over to hide the wrapper
  setTimeout(() => {
    dialogWrapperEl.classList.toggle("hidden");
  }, 150);
}

openDialogBtn.addEventListener("click", showDialog);
dialogDisagreeBtn.addEventListener("click", hideDialog);
dialogAgreeBtn.addEventListener("click", hideDialog);
closeIcon.addEventListener("click", hideDialog);
