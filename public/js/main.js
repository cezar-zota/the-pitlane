// main.js

document.addEventListener('DOMContentLoaded', function() {
  
  // Handle form submission (like user registration/login forms)
  const forms = document.querySelectorAll('form');
  
  forms.forEach((form) => {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
      }
    });
  });
  
  // Comment submission via AJAX
  const commentForm = document.getElementById('comment-form');
  
  if (commentForm) {
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const content = document.getElementById('comment-content').value;
      const articleId = document.getElementById('article-id').value;
      const url = `/comments`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: content,
            article_id: articleId,
          }),
        });

        if (response.ok) {
          location.reload(); // Reload the page to show new comment
        } else {
          alert('Error posting comment');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
      }
    });
  }

  // Enable Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
});
