var signUpLink = document.getElementById("signUpLink");
var signUpBtn = document.getElementById("signUp");
var signInBtn = document.getElementById("signIn");

var signUpModal = document.getElementById("modal-signUp");
var signInModal = document.getElementById("signInModal");

var closeSignIn = document.getElementById("closeSignIn");
var closeSignUp = document.getElementById("closeSignUp");

signUpBtn.addEventListener("click", () => openModal(signUpModal));
signInBtn.addEventListener("click", () => openModal(signInModal));


closeSignIn.addEventListener("click", () => closeModal(signInModal));
closeSignUp.addEventListener("click", () => closeModal(signUpModal));

signUpLink.onclick = function() {
    closeModal(signInModal);
    openModal(signUpModal);
  };

window.addEventListener("click", function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
});

openModal = modal => {
  modal.style.display = "block";
};

closeModal = modal => {
  modal.style.display = "none";
};