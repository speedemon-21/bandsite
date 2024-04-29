// Legecy from Sprint-2

// const shows = [// Show data
//     {
//       venue: "Ronald Lane",
//       location: "San Francisco, CA",
//       date: "Mon Sept 09 2024"
//     },
//     {
//       venue: "Pier 3 East",
//       location: "San Francisco, CA",
//       date: "Tue Sept 17 2024"
//     },
//     {
//       venue: "View Lounge",
//       location: "San Francisco, CA",
//       date: "Sat Oct 12 2024"
//     },
//     {
//       venue: "Hyatt Agency",
//       location: "San Francisco, CA",
//       date: "Sat Nov 16 2024"
//     },
//     {
//       venue: "Moscow Center",
//       location: "San Francisco, CA",
//       date: "Fri Nov 29 2024"
//     },
//     {
//       venue: "Press Club",
//       location: "San Francisco, CA",
//       date: "Wed Dec 18 2024"
//     }
//   ];
  
 
//   function renderShows() { // Function to render shows
//     const showsContainer = document.getElementById("shows-container");
    
//     shows.forEach(show => {
//       const showItem = document.createElement("div");
//       showItem.classList.add("show-item");
//       showItem.innerHTML = `
//         <span>${show.date}</span>
//         <span>${show.venue}</span>
//         <span>${show.location}</span>
//         <button class="book-button">Book Now</button>
//       `;
//       showsContainer.appendChild(showItem);
//     });
//   }




//   const ShowsPage = () => {
//     const [shows, setShows] = useState([]);
  
//     useEffect(() => {
//       const fetchShows = async () => {
//         try {
//           const apiKey = 'bfa7ff98-1cbf-4c72-b8cb-2a37c5c55465'; // Replace with your actual API key
//           const bandSiteApi = new BandSiteApi(apiKey);
//           const showsData = await bandSiteApi.getShows();
//           setShows(showsData);
//         } catch (error) {
//           console.error('Error fetching shows:', error);
//         }
//       };
  
//       fetchShows();
//     }, []);
  
//     return (
//       const showItem = document.createElement("div");
//             showItem.classList.add("show-item");
//            showItem.innerHTML = `
//             <span>${show.date}</span>
//               <span>${show.venue}</span>
//               <span>${show.location}</span>
//               <button class="book-button">Book Now</button>
//             `;
//     );
//   };

  
  // Call the renderShows function 
  // renderShows();


  

  import BandSiteApi from './band-site-api.js';

  
const apiKey = 'bfa7ff98-1cbf-4c72-b8cb-2a37c5c55465'; 
const bandSiteApi = new BandSiteApi(apiKey);

//construct displayShows function
const displayShows = async () => {
  try {
    const showsData = await bandSiteApi.getShows();
    const showsContainer = document.getElementById('shows-container');
    showsContainer.innerHTML = '';

    showsData.forEach(show => {
      const showDiv = document.createElement('div');
      //add class for styling
      showDiv.classList.add('show-item');

      const dateSpan = document.createElement('span');
      //formate timestamp
      dateSpan.textContent = new Date(show.date).toISOString().split('T')[0];

      const venueSpan = document.createElement('span');
      venueSpan.textContent = show.place;

      const locationSpan = document.createElement('span');
      locationSpan.textContent = show.location;

      const bookButton = document.createElement('button');
      bookButton.textContent = 'Book Now';
       //add class for styling
      bookButton.classList.add('book-button');

         // Append each elemeent to showContainer
      showDiv.appendChild(dateSpan);
      showDiv.appendChild(venueSpan);
      showDiv.appendChild(locationSpan);
      showDiv.appendChild(bookButton);

      showsContainer.appendChild(showDiv);
    });
  } catch (error) {
    console.error('Error fetching shows:', error);
  }
};

//Display enable
displayShows();


