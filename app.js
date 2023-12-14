let input = document.querySelector('.input')
let btn = document.querySelector('button')

const apiKey = '02482884a78843e7acd3c95debfd6405';


function getData(){

    const ingredients = input.value; 

    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Process the data, filter recipes based on more criteria if needed
        console.log(data);
        input.value = "";
    })
    .catch(error => console.error('Error:', error));
}
btn.addEventListener('click',getData)