let input = document.querySelector('.input')
let btn = document.querySelector('button')
let text1  = document.querySelector('.text1')
let text2 = document.querySelector(".text2")
let text3 = document.querySelector('.text3')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let h2 = document.querySelector('#error')

const apiKey = '02482884a78843e7acd3c95debfd6405';


function getData(){

    const ingredients = input.value; 

    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Process the data, filter recipes based on more criteria if needed
        let random1 = Math.floor(Math.random() * data.length)
        let random2 = Math.floor(Math.random() * data.length)
        let random3 = Math.floor(Math.random() * data.length)
        console.log(data);
        text1.innerHTML = data[random1].title
        img1.style.backgroundImage = `url(${data[random1].image})`
        text2.innerHTML = data[random2].title
        img2.style.backgroundImage = `url(${data[random2].image})`
        text3.innerHTML = data[random3].title
        img3.style.backgroundImage = `url(${data[random3].image})`
        input.value = "";
        if(data.length === 0){
            h2.innerHTML = "Not in the database"
        }
    })
    .catch(error => console.error('Error:', error));
    
}
btn.addEventListener('click',getData)