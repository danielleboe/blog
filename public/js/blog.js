// //declare the parsed variable
// //parse the array

// const lastPost = JSON.parse(localStorage.getItem('parentPost'));
// // console.log(lastPost);

// //sort reverse chronological order
// const sortResult = lastPost.sort(function (a, b) {
//     // console.log(new Date(a.dttm), "+++++++");
//     // console.log(new Date(b.dttm), "+++++++");
//     return new Date(b.dttm) - new Date(a.dttm);
// });


// // Append html blog post
// for (const singlePost of lastPost) {

//     const posts = document.getElementById("posts");
//     const card1 = document.createElement('div');
//     const title1 = document.createElement('h2');
//     const content1 = document.createElement('p');
//     const username1 = document.createElement('p');

//     title1.textContent = singlePost.blogtitle;
//     content1.textContent = singlePost.blogcontent;
//     username1.textContent = `Posted By: ${singlePost.username}`;

//     posts.appendChild(card1);
//     card1.appendChild(title1);
//     card1.appendChild(content1);
//     card1.appendChild(username1);
//     card1.setAttribute('class', 'card');
// }

// // back button
// const backbutton = document.getElementById("backbutton");

// backbutton.addEventListener('click', function (event) {
//     history.back();
// })