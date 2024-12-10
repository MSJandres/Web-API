// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (validateForm(username, title, content)) {
            const post = { username, title, content };
            saveBlogPost(post);
            window.location.href = 'blog.html';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.getElementById('blog-posts');
    const themeToggle = document.getElementById('theme-toggle');
    const backButton = document.getElementById('back-button');

    function renderPosts() {
        const posts = getBlogPosts();
        blogPosts.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>Author: ${post.username}</em></p>
            `;
            blogPosts.appendChild(postElement);
        });
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        updateThemeIcon();
        // Save the current theme preference
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-moon';
            icon.style.color = '#light gray'; 
        } else {
            icon.className = 'fas fa-sun';
            icon.style.color = '#ffd700'; 
        }
    }

    themeToggle.addEventListener('click', toggleTheme);

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
    updateThemeIcon();

    renderPosts();
});


