document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Budget List App',
            description: 'A simple and interactive budget list application built with HTML, CSS, and JavaScript.',
            image: 'list.jpeg',  // Add your image paths here
            link: 'https://budgetappcsea.ccbp.tech/'
        },
        {
            title: 'Skin Disease Prediction',
            description: 'Here 4 types of skin diseases are classified 1.acne 2.vitiligo 3.melanoma 4.shingles.',
            image: 'skin.jpeg',
            link: 'https://bhavani0915.github.io/skin-disease-classification/'
        },
         {
            title: 'TO DO List',
            description: 'A simple TO DO List application built using HTML, CSS and JavaScript.',
            image: 'todo.jpeg',
            link: 'https://bhavani0915.github.io/To-Do-List/'
        },
        {
            title: 'Photography Website',
            description: 'A personal photography website to showcase photography and skills.',
            image: 'photo.jpeg',
            link: 'https://bhavani0915.github.io/Photography-Site---HTML-CSS-Jvascript/'
        },
        // Add more projects as needed
    ];

    const projectContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectItem);
    });
});
