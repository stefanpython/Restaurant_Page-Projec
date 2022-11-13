export function myMeniu() {
    
    const banner = () => {
        const content = document.getElementById('content')
        const div = document.createElement('div');
        div.classList.add('header');
        div.innerHTML = '<img class="catImg" src="/src/cat.png" alt="cat">';
    
        content.append(div);
    }

    const navBar = () => {
        const ul = document.createElement('ul');
        console.log(ul)
    }
    

    return { banner, navBar };

};
