export function homeMeniu() {

    const content = document.getElementById('content');
    
    const banner = () => {
        const div = document.createElement('div');
        div.classList.add('header');
        div.innerHTML = '<img class="catImg" src="/src/images/cat.png" alt="cat">';
    
        content.append(div);
    }

    const navBar = () => {
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li><a href="#home"><button id="home">Home</button></a></li>
        <li><a href="#menu"><button id="meniu">Menu</button></a></li>
        <li><a href="#contact"><button id="contact">Contact</button></a></li>`;

        content.append(ul)
    }

    
    const homeContent = () => {
        // Customer review div
        const meniuContent = document.createElement('div');
        meniuContent.classList.add('meniu-content');
        content.appendChild(meniuContent);

        const reviewsDiv = document.createElement('div');
        reviewsDiv.classList.add('customer-review');
        reviewsDiv.innerHTML = `
        <h3 class="hours">Testimony</h3>
        <p>“The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies. The restaurant has a vey nice ambiance and a cozy bar.” <strong>HawaiiNut02760</strong> </p>`;

        meniuContent.append(reviewsDiv);

        const br = document.createElement('br');
        meniuContent.appendChild(br);

        // Workdays hours div
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
        const abr = document.createElement('br');
        meniuContent.appendChild(abr);
        
        // Location info div
        const infoLocation = document.createElement('div');
        infoLocation.classList.add('info-location');
        infoLocation.innerHTML = `<h3 class="location">Location</h3>
        <p class="address">4295 State Highway</p>
        <p class="address">North Eastham, MA 02642</p>
        <p class="address">Phone: 508.255.3893</p><br>
        <p class="address">contact@fairwaycapecod.com</p>`;

        meniuContent.appendChild(infoLocation);
    }

    const footer = () => {
        const footer = document.createElement('footer');
        footer.innerHTML = `Copyright © 2022 Stefanpython &nbsp;<a href="https://github.com/stefanpython"><img class="git" style="border-radius: 30px;" width="30px" src="https://c.tenor.com/A15H8E1VUh8AAAAM/github-cat.gif"></a>
        `;

        document.body.appendChild(footer);
    }

    return {   
            banner,
            navBar,
            homeContent,
            footer      
                   };

};
