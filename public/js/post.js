// document.getElementById('comment-form').addEventListener('submit', async function(event) {
//   event.preventDefault();

//   const comment_text = document.getElementById('comment-text').value.trim();
//   const post_id = document.getElementById('post_id').value.trim();

//   if (comment_text) {
//     const response = await fetch('/api/comments', {
//       method: 'POST',
//       body: JSON.stringify({
//         comment_text,
//         post_id,
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert('Failed to add comment');
//     }
//   }
// });


////


document.getElementById('comment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const comment_text = document.getElementById('comment-text').value.trim();
    const post_id = document.getElementById('post_id').value.trim();

    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          comment_text,
          post_id,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment');
      }
    }
  });