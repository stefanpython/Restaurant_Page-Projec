export function myMeniu() {

    const content = document.getElementById('content');
    
    const banner = () => {
        const content = document.getElementById('content');
        const div = document.createElement('div');
        div.classList.add('header');
        div.innerHTML = '<img class="catImg" src="/src/cat.png" alt="cat">';
    
        content.append(div);
    }

    const navBar = () => {
        const ul = document.createElement('ul');
        ul.innerHTML = `<li><a class="active" href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>`;

        content.append(ul)
    }
    

    return { banner, navBar };

};
