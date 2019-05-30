const API_KEY = 'YUlW2IuFR2XZR7nZmYoZIbHbUHqkdlpYMOpyX4IkqowW0aE64A';
let button_div = document.getElementById('buttons');
let words = ['koala', 'kangaroo', 'rat', 'flower', 'chinchilla'];
let gallery_div = document.getElementById('gallery')
let score = document.getElementById('score_count')
let correct_answer = ''

words.forEach(function(word) {
    let new_button = document.createElement('button')
    new_button.innerHTML = word
    new_button.classList.add('btn', 'btn-primary', 'mx-2')
    new_button.onclick = function() {
        if (word == correct_answer) {
            score.innerHTML++
            generate()
        } else {
            score.innerHTML--
            alert ("You're wrong, SUCKA!")
        }
    }
    button_div.append(new_button)
});

function generate() {
    gallery_div.innerHTML = null 
    let random_number = Math.floor ((Math.random() * words.length));
    correct_answer = words[random_number];

    fetch(`https://api.tumblr.com/v2/tagged?tag=gif&api_key=${API_KEY}&tag=${correct_answer}&limit=50`)
    .then(function(response) {
        return response.json(); // convert the raw response into a JSON
    })
    .then(function(result) {
        console.log(result.response); //only logs responses (with the word we're searching for)
        result.response.forEach(function(post) { //accesses array with our result responses 
            if (post.type == 'photo') { 
               console.log(post.photos[0].original_size.url) 
               const pic = document.createElement('img') //image tag without anything in it (needs url still)
               pic.src = post.photos[0].original_size.url
               pic.height = 200
               gallery_div.appendChild(pic)
            }
        })      
    })
}

generate()

console.log(button_div);



