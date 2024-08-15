const modal = document.getElementById("login-modal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// sign up modals
const signupModal = document.getElementById("signup-modal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
};


// Handle Register Form Submission
document.getElementById('signup-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (username && email && password) {
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to register.');
    }
  }
});

// Handle Login Form Submission
document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
});


///logout
const logout = async () => {
  const response = await fetch('/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.query
