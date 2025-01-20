const posts = [];

function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; 

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.setAttribute('data-id', post.id);

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <p>${new Date(post.date).toLocaleDateString()}</p>
            <div class="actions">
                <button class="edit-post-btn">Editar</button>
                <button class="delete-post-btn">Eliminar</button>
            </div>
            <hr>
            <h4>Comentarios</h4>
            <div class="comments-list"></div>
            <input type="text" class="comment-input" placeholder="Agregar comentario">
            <button class="add-comment-btn">Comentar</button>
        `;

        renderComments(postElement, post.comments);

        postsContainer.appendChild(postElement);
    });

    attachPostEventListeners(); 
}


document.getElementById('add-post-btn').addEventListener('click', () => {
    const title = document.getElementById('post-title').value.trim();
    const description = document.getElementById('post-description').value.trim();

    if (title && description) {
        const newPost = {
            id: Date.now(), 
            title,
            description,
            date: new Date(),
            comments: [], 
        };

        posts.push(newPost); 
        renderPosts();
        document.getElementById('post-title').value = '';
        document.getElementById('post-description').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

function attachPostEventListeners() {
    document.querySelectorAll('.edit-post-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const postElement = e.target.closest('.post');
            const postId = postElement.getAttribute('data-id');
            const post = posts.find(p => p.id == postId);

            if (post) {
                const newTitle = prompt('Editar título:', post.title);
                const newDescription = prompt('Editar descripción:', post.description);

                if (newTitle && newDescription) {
                    post.title = newTitle;
                    post.description = newDescription;
                    renderPosts();
                }
            }
        });
    });

    document.querySelectorAll('.delete-post-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const postElement = e.target.closest('.post');
            const postId = postElement.getAttribute('data-id');

            const postIndex = posts.findIndex(p => p.id == postId);
            if (postIndex !== -1) {
                posts.splice(postIndex, 1);
                renderPosts(); 
            }
        });
    });
    
}

function filterPosts(searchTerm) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; 

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    filteredPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.setAttribute('data-id', post.id);

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <p>${new Date(post.date).toLocaleDateString()}</p>
            <div class="actions">
                <button class="edit-post-btn">Editar</button>
                <button class="delete-post-btn">Eliminar</button>
            </div>
            <hr>
            <h4>Comentarios</h4>
            <div class="comments-list"></div>
            <input type="text" class="comment-input" placeholder="Agregar comentario">
            <button class="add-comment-btn">Comentar</button>
        `;

        renderComments(postElement, post.comments);

        postsContainer.appendChild(postElement);
    });

    attachPostEventListeners(); 
}

document.getElementById('search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim();
    filterPosts(searchTerm);
});
