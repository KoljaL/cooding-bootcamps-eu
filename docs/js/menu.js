// Description: Menu for the documentation

const menu = [
    {
        title: 'Web App Basics',
        children: [
            {
                title: 'toggle Theme',
                path: './toggleTheme.html',
                desc: 'Toggle between light and dark theme',
                link: 'https://github.com/KoljaL/cooding-bootcamps-eu/blob/master/docs/toggleTheme.html',
            },
            {
                title: 'other Basics',
                path: './webappbasic.html',
                desc: 'Some other basics',
                link: 'https://github.com/KoljaL/cooding-bootcamps-eu/blob/master/docs/webappbasic.html',
            },
        ],
    },
];

// function to filter the link of the current page from the menu
function filterMenu(currentPage) {
    let link = '';
    const menuForFilter = menu;
    const filteredMenu = menuForFilter.filter((item) => {
        if (item.path === currentPage) {
            return false;
        }
        if (item.children) {
            item.children = item.children.filter((subItem) => {
                if (subItem.path === currentPage) {
                    link = subItem.link;
                    return true;
                }
            });
        }
        return true;
    });
    return link;
}

// function that generates a nested Menu
function generateMenu(menu) {
    const currentPage = './' + window.location.href.split('/').pop();
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menuWrapper');
    const menuEl = document.createElement('ul');
    menuEl.classList.add('menu');
    menuWrapper.appendChild(menuEl);
    document.body.appendChild(menuWrapper);

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
                if (currentPage === subItem.path) {
                    const span = document.createElement('span');
                    span.innerHTML = subItem.title;
                    subMenuItem.appendChild(span);
                    span.classList.add('current');
                } else {
                    const link = document.createElement('a');
                    link.href = subItem.path;
                    link.innerHTML = subItem.title;
                    subMenuItem.appendChild(link);
                }
                if (subItem.desc) {
                    const desc = document.createElement('p');
                    desc.classList.add('sub-menu-item-desc');
                    desc.innerHTML = subItem.desc;
                    subMenuItem.appendChild(desc);
                }
                subMenu.appendChild(subMenuItem);
            });
            menuItem.appendChild(subMenu);
        }
    });
    const ghLink = filterMenu(currentPage);
    if (ghLink) {
        const ghli = document.createElement('li');
        const ghLinkEl = document.createElement('a');
        ghLinkEl.href = ghLink;
        ghLinkEl.target = '_blank';
        ghLinkEl.title = 'This code on Github';
        ghLinkEl.classList.add('gh-link');
        ghli.appendChild(ghLinkEl);
        menuEl.appendChild(ghli);
    }
}

// <div class="menuWrapper">
// <ul class="menu"></ul>
// </div>

// CSS
const styleMenu = document.createElement('style');
styleMenu.innerHTML = /*CSS*/ `

.menuWrapper {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 10;
}
.menuWrapper::before {
  content: " ";
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='red'><path stroke-linecap='round' stroke-linejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' /></svg>");
  background-size: cover;
  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;
  display: inline-block;
  filter: hue-rotate(268deg) saturate(40%) brightness(120%);
  position: relative;
}

.menuWrapper:hover  {
  // filter: hue-rotate(0) saturate(40%) brightness(140%);
  cursor: pointer;
}


.menuWrapper:hover .menu {
  display: block;
}

.menu {
  // display: none;
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: .75rem;
  padding-inline: .5rem;
  margin: 0;
  z-index: 10;
  background: var(--secondary-bg1,var(--background-color-emphasized)); 
  // background: radial-gradient(var(--secondary-bg), var(--secondary-bg1));
  border: 1px solid var(--primary-darker,var(--border-color));
  border-radius: var(--border-radius-large,1rem);
}

.menu ul {
  margin-bottom: 0rem;
  padding-left: .5rem;
  font-variant: small-caps;
  font-size: 1.2rem;}

.menu li {
  list-style: none;
  font-size: 1.2rem;
  padding: .5rem;
  line-height:1;
  margin:0;
  position: relative;
}

.menu li:last-of-type{
  padding-bottom: 0;
}

.menu li.sub-menu-item:hover .sub-menu-item-desc{
  display: block;
}

.menu .sub-menu-item-desc{
  display: none;
  position: absolute;
  top: 0rem;
  left: 10rem;
  min-width: max-content;
  max-width: 20rem;
  padding-top: .75rem;
  padding-bottom: .6rem;
  padding-inline: .75rem;
  margin: 0;
  font-variant: normal;

  z-index: 10;
  background: var(--secondary-bg1,var(--background-color-emphasized));
  // background: radial-gradient(var(--secondary-bg), var(--secondary-bg1));
  border: 1px solid var(--primary-darker,var(--border-color));
  border-radius: var(--border-radius-medium,.5rem);
}

.menu a {
  white-space: nowrap;
  font-variant: normal;
  font-size: 1.2rem;
}

.menu span.current {
  font-weight: bold;
  font-variant: normal;
  border-radius: 5px;
  padding-top: .25rem;
  padding-bottom: .15rem;
  padding-inline: .5rem;
  white-space: nowrap;
  color:#ccc;
  // filter:brightness(120%);
  background: var(--primary-dark,var(--link-color));
}

.menu .gh-link {
  margin-top: .75rem;
  margin-inline:auto;
  width: 2rem;
  height: 2rem;
  position: relative;
  left: 4rem;  
  background-image: url("data:image/svg+xml;utf8,<svg width='98' height='96' xmlns='http://www.w3.org/2000/svg' fill='red'><path id='cat' fill='red' d='m 22 77 c 2.1 0 3.3 -1.1 3.3 -2.4 c 0 -1.1 -0.1 -5.1 -0.1 -9.1 c -13.6 2.9 -16.4 -5.9 -16.4 -5.9 c -2.2 -5.7 -5.4 -7.2 -5.4 -7.2 c -4.4 -3 0.3 -3 0.3 -3 c 4.9 0.3 7.5 5.1 7.5 5.1 c 4.4 7.5 11.4 5.4 14.2 4.1 c 0.4 -3.2 1.7 -5.4 3.1 -6.6 c -10.8 -1.1 -22.2 -5.4 -22.2 -24.3 c 0 -5.4 1.9 -9.8 5 -13.2 c -0.5 -1.2 -2.2 -6.3 0.5 -13 c 0 0 4.1 -1.3 13.4 5.1 a 47 47 0 0 1 12.2 -1.6 c 4.1 0 8.3 0.6 12.2 1.6 c 9.3 -6.4 13.4 -5.1 13.4 -5.1 c 2.7 6.8 1 11.8 0.5 13 c 3.2 3.4 5 7.8 5 13.2 c 0 18.9 -11.4 23.1 -22.3 24.3 c 1.8 1.5 3.3 4.5 3.3 9.1 c 0 6.6 -0.1 11.9 -0.1 13.5 c 0 1.3 0.6 2.4 3.3 2.4 z' /></svg>");
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  transition: filter .2s ease-out;
  filter: hue-rotate(268deg) saturate(40%) brightness(120%);
  }
  .menu .gh-link:hover {
    filter: hue-rotate(268deg) saturate(40%) brightness(160%);
  }
  // .menu .gh-link::after {
  //   position: absolute;
  //   top: 1rem;
  //   left: 2rem; 
  //   width: 2rem;
  //   content: "This code on GitHub";
  //   font-size: .7rem;
  //   font-variant: normal;
  //   color: #ccc;
  // }
`;
document.head.appendChild(styleMenu);
generateMenu(menu);
