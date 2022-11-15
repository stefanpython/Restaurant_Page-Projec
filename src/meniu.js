export function mainMeniu() {
    // Burgers meniu
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('meniu-content');
    
    const burgerMeniu = document.createElement('div');
    burgerMeniu.classList.add('burger-meniu');

    burgerMeniu.innerHTML = `
    <h3 id="title">Burgers</h3>
    
    <h4>Blue Cat Cheeseburger*</h4>
    <img class="menuImg" src="/src/images/burger2.jpg" alt="cat">
    <p>blue cheese, caramelized onions, crispy onion ring, frisée, blue cheese dressing, bibb lettuce, spicy aioli</p>
    <p id="price" style="margin-left: 300px;">$17.00</p>
    <br><hr>
    
    <h4>Vegan Meow Burger</h4>
    <img class="menuImg" src="/src/images/vegan.jpg" alt="cat">
    <p>plant-based patty, vegan bun, bibb lettuce, roasted tomato, avocado, eggless garlic mayo</p>
    <p id="price" style="margin-left: 300px;">$19.00</p>
    <br><hr>

    <h4>Backyard Cat Burger</h4>
    <img class="menuImg" src="/src/images/vegan.jpg" alt="cat">
    <p>american cheese, bibb lettuce, tomato, red onion, house pickles</p>
    <p id="price" style="margin-left: 300px;">$21.00</p>
    <br><hr>

    <h4>Forest Cat Burger</h4>
    <img class="menuImg" src="/src/images/burger3.jpg" alt="cat">
    <p>swiss, mixed mushrooms, fried egg, arugula, porcini aioli</p>
    <p id="price" style="margin-left: 300px;">$16.00</p>
    `;

    container.append(burgerMeniu);

    // Drinks meniu
    const meniu = document.querySelector('.meniu-content');

    const drinksMeniu = document.createElement('div');
    drinksMeniu.classList.add('drinks-meniu');

    drinksMeniu.innerHTML = `
    <br>
    <h3 id="title">Drinks</h3>

    <h4>STICKY CAT SHAKE</h4>
    <img class="menuImg" src="/src/images/drink1.jpg" alt="">
    <p>brown butter milkshake, toffee sauce, whipped cream</p>
    <p id="price" style="margin-left: 300px;">$9.00</p>
    <br><hr>

    <h4>Snowball Coffee Cat</h4>
    <img class="menuImg" src="/src/images/drink2.jpg" alt="">
    <p>roasted mayan signiture caffee beans, milk, fijy water, honney</p>
    <p id="price" style="margin-left: 300px;">$11.00</p>
    <br><hr>

    <h4>Drunken Meowshi Beer</h4>
    <img class="menuImg" src="/src/images/drink3.jpg" alt="">
    <p>weat, barley, grain, hops, yeast, special secret ingredient - it's water</p>
    <p id="price" style="margin-left: 300px;">$7.00</p>`;

    container.append(drinksMeniu);

    content.append(container);


    
        

    
    
    
    return { burgers }
}