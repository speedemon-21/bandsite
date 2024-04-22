// Array with default comment objects
let comments = [
    { name: "Victor Pinto", timestamp: "11/02/2023", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
    { name: "Christina Cabrera", timestamp: "10/28/2023", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day" },
    { name: "Isaac Tadesse", timestamp: "10/20/2023", text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough." }
  ];
  
  // Function to display a comment on the page
  function displayComment(comment) {
    const commentsList = document.getElementById("comments-list");
    const li = document.createElement("li");
    li.innerHTML = `<strong>${comment.name}</strong> (${comment.timestamp}): ${comment.text}`;
    commentsList.appendChild(li);
  }
  
  // Function to render all comments
  function renderComments() {
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = "";
    comments.forEach(comment => {
      displayComment(comment);
    });
  }
  
  // Form submission event listener
  document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById("name").value;
    const commentText = document.getElementById("comment").value;
    const timestamp = new Date().toLocaleString();
    
    // Construct new comment object
    const newComment = {
      name: name,
      timestamp: timestamp,
      text: commentText
    };
    

    comments.push(newComment);
    
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  
    // Re-render comments
    renderComments();
  });
  
  // Initial render of comments
  renderComments();
  