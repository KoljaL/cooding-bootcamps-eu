// Description: Menu for the documentation

const menu = [
    {
        title: 'Web App Bsic',
        children: [
            {
                title: 'toggle Theme',
                path: '/toggleTheme.html',
            },
            {
                title: 'other Basics',
                path: '/webappbasisc.html',
            },
        ],
    },
    {
        title: 'Web App Bsic',
        children: [
            {
                title: 'toggle Theme',
                path: '/toggleTheme.html',
            },
            {
                title: 'other Basics',
                path: '/webappbasisc.html',
            },
        ],
    },
    {
        title: 'Web App Bsic',
        children: [
            {
                title: 'toggle Theme',
                path: '/toggleTheme.html',
            },
            {
                title: 'other Basics',
                path: '/webappbasisc.html',
            },
        ],
    },
];

// function that generates a nested Menu
function generateMenu(menu) {
    const menuEl = document.querySelector('.menu');
    menu.forEach((item) => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = item.title;
        menuEl.appendChild(menuItem);
        if (item.children) {
            const subMenu = document.createElement('ul');
            subMenu.classList.add('sub-menu');
            item.children.forEach((subItem) => {
                const subMenuItem = document.createElement('li');
                subMenuItem.classList.add('sub-menu-item');
                const link = document.createElement('a');
                link.href = subItem.path;
                link.innerHTML = subItem.title;
                subMenuItem.appendChild(link);
                subMenu.appendChild(subMenuItem);
            });
            menuItem.appendChild(subMenu);
        }
    });
}
generateMenu(menu);
