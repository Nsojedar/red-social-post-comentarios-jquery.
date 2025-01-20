function renderComments(postElement, comments) {
    const commentsList = postElement.querySelector('.comments-list');
    commentsList.innerHTML = ''; 

    comments.forEach(comment => {
        const commentElement = document.createElement('p');
        commentElement.setAttribute('data-comment-id', comment.id);
        commentElement.innerHTML = `
            ${comment.text}
            <button class="edit-comment-btn">Editar</button>
            <button class="delete-comment-btn">Eliminar</button>
        `;
        commentsList.appendChild(commentElement);
    });

    attachCommentEventListeners(postElement); 
}

function attachCommentEventListeners(postElement) {
    const postId = postElement.getAttribute('data-id');
    const post = posts.find(p => p.id == postId);

   
    postElement.querySelector('.add-comment-btn').addEventListener('click', () => {
        const commentInput = postElement.querySelector('.comment-input');
        const commentText = commentInput.value.trim();

        if (commentText) {
            const newComment = { id: Date.now(), text: commentText };
            post.comments.push(newComment); 

            renderComments(postElement, post.comments); 
            commentInput.value = ''; 
        } else {
            alert('El comentario no puede estar vacío.');
        }
    });

    postElement.querySelectorAll('.edit-comment-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const commentElement = e.target.closest('p');
            const commentId = commentElement.getAttribute('data-comment-id');
            const comment = post.comments.find(c => c.id == commentId);

            if (comment) {
                const newCommentText = prompt('Editar comentario:', comment.text);
                if (newCommentText) {
                    comment.text = newCommentText; 
                    renderComments(postElement, post.comments); 
                }
            }
        });
    });

    postElement.querySelectorAll('.delete-comment-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const commentElement = e.target.closest('p');
            const commentId = commentElement.getAttribute('data-comment-id');
            post.comments = post.comments.filter(c => c.id != commentId); 

            renderComments(postElement, post.comments); 
        });
    });
}
