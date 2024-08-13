// const usernameInput = document.querySelector("#username");
// const titleInput = document.querySelector("#blogtitle");
// const contentInput = document.querySelector("#blogcontent");
// const submit = document.querySelector("#submit");
// const msgDiv = document.querySelector("#msg");

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// submit.addEventListener("click", function (event) {
//   event.preventDefault();

//   const username = usernameInput.value;
//   const blogtitle = titleInput.value;
//   const blogcontent = contentInput.value;
//   const blogForm = document.getElementById("blogForm");
//   let isError = false;

//   if (username.trim() === "" || !username) {
//     console.log("username+++++", username);
//     displayMessage("error", "Username cannot be blank");
//     isError = true;
//   } else if (blogtitle.trim() === "" || !blogtitle) {
//     displayMessage("error", "Title cannot be blank");
//     isError = true;
//   } else if (blogcontent.trim() === "" || !blogcontent) {
//     displayMessage("error", "Content cannot be blank");
//     isError = true;
//   } else {
//     displayMessage("success", "Submitted successfully");
//   }

//   // if there is not an error then create the array

//   // add dttm field
//   if (!isError) {
//     // declare variable for the json object for indiviual post
//     const singlePost = {
//       username: username,
//       blogtitle: blogtitle,
//       blogcontent: blogcontent,
//       dttm: new Date(),
//     };

//     // declare variable for parent
//     // add to single post to existing json array
//     let parentPost = [];
//     const existingPosts = JSON.parse(localStorage.getItem("parentPost"));

//     //if parentpost exists then add to existing last post
//     if (existingPosts !== null) {
//       parentPost = existingPosts;
//     }

//     parentPost.push(singlePost);

//     //localStorage set item json.stringify()
//     localStorage.setItem("parentPost", JSON.stringify(parentPost));
//     blogForm.reset();
//     window.location.href = "blog.html";
//   }
// });
