// write your code here
// Fetches the image data from the server and displays it on the page
//declare variables for json file links
const imageUrl = "http://localhost:3000/images";
const commentsUrl = "http://localhost:3000/comments";

//Fetch Dog Details
function fetchDogDetails (id) {
    fetch(`${imageUrl}/${id}`)
    .then(response => response.json())
    .then((dog) => {
        document.getElementById("card-title").innerText = dog.title

        document.getElementById("card-image").src = dog.image;
    

        //Add Like Functionality
        const heart = document.getElementById("like-button");
        heart.addEventListener("click", () => {
            const dogLikes = document.getElementById("like-count");
            dog.likes += 1;
            dogLikes.innerText = `${dog.likes} likes`;
        })
    });
}




document.addEventListener("DOMContentLoaded", function () {
    fetchDogDetails(1);
    fetchDogComments();
    createNewComment();
    getDogImage();
})