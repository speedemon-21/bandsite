
const shows = [// Show data
    {
      venue: "Ronald Lane",
      location: "San Francisco, CA",
      date: "Mon Sept 09 2024"
    },
    {
      venue: "Pier 3 East",
      location: "San Francisco, CA",
      date: "Tue Sept 17 2024"
    },
    {
      venue: "View Lounge",
      location: "San Francisco, CA",
      date: "Sat Oct 12 2024"
    },
    {
      venue: "Hyatt Agency",
      location: "San Francisco, CA",
      date: "Sat Nov 16 2024"
    },
    {
      venue: "Moscow Center",
      location: "San Francisco, CA",
      date: "Fri Nov 29 2024"
    },
    {
      venue: "Press Club",
      location: "San Francisco, CA",
      date: "Wed Dec 18 2024"
    }
  ];
  
 
  function renderShows() { // Function to render shows
    const showsContainer = document.getElementById("shows-container");
    
    shows.forEach(show => {
      const showItem = document.createElement("div");
      showItem.classList.add("show-item");
      showItem.innerHTML = `
        <span>${show.date}</span>
        <span>${show.venue}</span>
        <span>${show.location}</span>
        <button class="book-button">Book Now</button>
      `;
      showsContainer.appendChild(showItem);
    });
  }
  
  // Call the renderShows function 
  renderShows();
  