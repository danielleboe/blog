document.getElementById('comment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const comment_text = document.getElementById('comment-text').value.trim();
    const post_id = '{{post.id}}';

    if (comment_text) {
      const response = await fetch('/comments', {
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