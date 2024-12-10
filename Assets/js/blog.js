// TODO: Create a variable that selects the main element, and a variable that selects the back button element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
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

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    renderPosts();
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
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-moon';
            icon.style.color = '#fff'; // White color for the moon icon
        } else {
            icon.className = 'fas fa-sun';
            icon.style.color = '#ffd700'; // Yellow color for the sun icon
        }
    }

    themeToggle.addEventListener('click', toggleTheme);

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Set initial theme based on saved preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
    updateThemeIcon();

    renderPosts();
});
