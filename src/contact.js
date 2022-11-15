export function contactMeniu() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('meniu-content');
    
    const contactUs = document.createElement('div');
    contactUs.classList.add('contact-title');
    contactUs.innerHTML = `<h3>Contact us</h3>`;

    const masterChef = document.createElement('div');
    masterChef.classList.add('master-chef');
    masterChef.innerHTML = `
    <h4>Master Chef Catsosurimoko</h4>
    <img class="contactImg" src="/src/images/contact1.jpg" alt="">
    <p>Supreme Chef Leader</p>
    <p>498-998-9921</p>
    <p>lazyCat@ilikeToSleep.com</p>
    `;

    const sideChef = document.createElement('div');
    sideChef.classList.add('side-chef');
    sideChef.innerHTML = `
    <h4>Side Chef Meowunchi Katamoro</h4>
    <img class="contactImg" src="/src/images/contact2.jpg" alt="">
    <p>Part-time Special Cook</p>
    <p>442-442-5515</p>
    <p>sleepingCat@ILikeToPlay.com</p>
    `;

    const assistant = document.createElement('div');
    assistant.classList.add('assistant');
    assistant.innerHTML = `
    <h4>Assistant Pebbles</h4>
    <img class="contactImg" src="/src/images/contact3.jpg" alt="">
    <p>Lovely accountant</p>
    <p>477-88-9831</p>
    <p>lovelyPebbles@IScratchThings.com</p>
    `;

    container.append(contactUs);
    container.appendChild(masterChef);
    container.appendChild(sideChef);
    container.appendChild(assistant);
   
    content.append(container);
};