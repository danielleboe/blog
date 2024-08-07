document.addEventListener('DOMContentLoaded', () => {
    // Get references to the forms and their elements
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
  
    // Ensure the forms exist before adding event listeners
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
  
        // Gather data from the form
        const email = document.querySelector('#email-login').value;
        const password = document.querySelector('#password-login').value;
  
        try {
          const response = await fetch('/login', {
            method: 'POST', // Use POST for login
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) // Send data as JSON
          });
  
          if (response.ok) {
            // Redirect to homepage on successful login
            window.location.href = '/';
          } else {
            // Handle login failure
            const error = await response.json();
            alert(`Login failed: ${error.message}`);
          }
        } catch (error) {
          console.error('Error logging in:', error);
          alert('An error occurred while logging in. Please try again later.');
        }
      });
  
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
  
        // Gather data from the form
        const name = document.querySelector('#name-signup').value;
        const email = document.querySelector('#email-signup').value;
        const password = document.querySelector('#password-signup').value;
  
        try {
          const response = await fetch('/signup', {
            method: 'POST', // Use POST for signup
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password }) // Send data as JSON
          });
  
          if (response.ok) {
            // Handle successful signup (e.g., show a message or redirect)
            alert('Account created successfully. Please log in.');
            // Optionally, you might want to redirect to the login page:
            // window.location.href = '/login';
          } else {
            // Handle signup failure
            const error = await response.json();
            alert(`Signup failed: ${error.message}`);
          }
        } catch (error) {
          console.error('Error signing up:', error);
          alert('An error occurred while creating your account. Please try again later.');
        }
      });
    }
  });
  


// const withAuth = (req, res, next) => {
//     // If the user is not logged in, redirect the request to the login route
//     if (!req.session.logged_in) {
//       res.redirect('/login');
//     } else {
//       next();
//     }
//   };
  
//   module.exports = withAuth;
  