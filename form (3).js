// TODO: Create a variable that selects the form element
const formEL = document.querySelector("form")

const handleFormSubmit = function(event){
event.preventDefault();
const username = document.getElementById('username').value;
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const errorElement= document.querySelector('#error')

            // Validate form fields
            if (!username || !title || !content) { 
                
                errorElement.textContent = "Please complete the form.";
                return;
            } else {
                errorElement.textContent = ""; // Clear error message
            }

            
            
//TODO should store form data in localStorage
    


}
formEL.addEventListener('submit',handleFormSubmit)

//let posts = JSON.parse(localStorage.getItem('posts'));

// Check if posts is null and initialize it to an empty array if it is
/*if (!posts) {
    posts = []; // Initialize as an empty array
}*/

// Now you can safely use posts.every() or any other array methods

  

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

