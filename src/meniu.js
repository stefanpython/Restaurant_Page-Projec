export function myMeniu() {

    const content = document.getElementById('content');
    
    const banner = () => {
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

    
    const review = () => {
        // Customer review
        const meniuContent = document.createElement('div');
        meniuContent.classList.add('meniu-content');
        content.appendChild(meniuContent);

        const reviewsDiv = document.createElement('div');
        reviewsDiv.classList.add('customer-review');
        reviewsDiv.innerHTML = '<p>“The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies. The restaurant has a vey nice ambiance and a cozy bar.” <strong>HawaiiNut02760</strong> </p>';

        meniuContent.append(reviewsDiv);

        const br = document.createElement('br');
        meniuContent.appendChild(br);

        // Workdays hours
        const infoHours = document.createElement('div');
        infoHours.classList.add('info-hours');
        infoHours.innerHTML = `<h3 class="hours">Squedule</h3>
        <p class="sunday">Sunday: 8am - 8pm</p>
        <p class="monday">Monday: 6am - 6pm</p>
        <p class="tuesday">Tuesday: 6am - 6pm</p>
        <p class="wednesday">Wednesday: 6am - 6pm</p>
        <p class="thursday">Thursday: 6am - 10pm</p>
        <p class="friday">Friday: 6am - 10pm</p>
        <p class="saturday">Saturday: 8am - 10pm</p>`;

        meniuContent.appendChild(infoHours);

        
    }

    

    return {   
            banner,
            navBar,
            review      
                   };

};
