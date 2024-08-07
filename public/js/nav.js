const modal = document.getElementById("login-modal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// const mLoginModal = document.getElementById("mLogin-modal");

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == mLoginModal) {
//     mLoginModal.style.display = "none";
//   }
// };

// sign up modals
const signupModal = document.getElementById("signup-modal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
};

// const mSignupModal = document.getElementById("mSignup-modal");

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == mSignupModal) {
//     mSignupModal.style.display = "none";
//   }
// };