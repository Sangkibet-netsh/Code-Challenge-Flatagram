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

//Fetch Dog Comments
function fetchDogComments () {
    fetch(`${commentsUrl}`)
    .then(response => response.json())
    .then(comments => {
        document.getElementById("comments-list").innerHTML = comments
        .map((comment) => `<li> ${comment.content}</li>`)
        .join("");
    })
}

//Create a new comment
function createNewComment () {
    document.getElementById("comment-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const commentForm = event.target;

        const newCommentDescription = document.getElementById("comment");
        const newComment = document.createElement("li");
        newComment.innerText = newCommentDescription.value;

        appendNewComment(newComment);
        event.target.reset();  //Reset the form

        //Delete comment from comment list
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-button";
        deleteBtn.textContent = "Delete";
        newComment.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", deleteNewComment)
    })
}
//Add comment to comment list
function appendNewComment(comment) {
    document.getElementById("comments-list").appendChild(comment);
}

function deleteNewComment (event) {
    event.target.parentNode.remove();
}



document.addEventListener("DOMContentLoaded", function () {
    fetchDogDetails(1);
    fetchDogComments();
    createNewComment();
    getDogImage();
})