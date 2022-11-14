export function mainMeniu() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('meniu-content');
    
    const burgerMeniu = document.createElement('div');
    burgerMeniu.classList.add('burger-meniu');

    burgerMeniu.innerHTML = `
    <h3>Burgers</h3>
    <hr style="border: 2px dashed rgb(189, 99, 76);">
    <h4>Blue Cat Cheeseburger*</h4>
    <img class="menuImg" src="/src/images/burger2.jpg" alt="cat">
    <p>blue cheese, caramelized onions, crispy onion ring, frisée, blue cheese dressing, bibb lettuce, spicy aioli</p>
    <p style="margin-left: 300px;">$17.00</p>
    <br><hr>
    
    <h4>Vegan Meow Burger</h4>
    <img class="menuImg" src="/src/images/vegan.jpg" alt="cat">
    <p>plant-based patty, vegan bun, bibb lettuce, roasted tomato, avocado, eggless garlic mayo</p>
    <p style="margin-left: 300px;">$19.00</p>
    <br><hr>

    <h4>Backyard Cat Burger</h4>
    <img class="menuImg" src="/src/images/vegan.jpg" alt="cat">
    <p>american cheese, bibb lettuce, tomato, red onion, house pickles</p>
    <p style="margin-left: 300px;">$21.00</p>
    <br><hr>

    <h4>Forest Cat Burger</h4>
    <img class="menuImg" src="/src/images/burger3.jpg" alt="cat">
    <p>swiss, mixed mushrooms, fried egg, arugula, porcini aioli</p>
    <p style="margin-left: 300px;">$16.00</p>
    `;

    container.append(burgerMeniu);

    content.append(container);
}