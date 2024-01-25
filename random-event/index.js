// file2.js
import { pizza } from './index.html';

myVariable = "Goodbye"; // Modifying the exported variable

// Define the possible events
const events = {
  none: { name: "None", action: () => {} },
  "2x pizza clicks": () => alert("You got 2x pizza clicks!"),
  "-pizza": () => {
    const pizzaLoss = Math.floor(Math.random() * 6) + 5;
    alert(`You lost ${pizzaLoss} pizzas!`);
    
  },
};

// Variable to store the current event
let currentEvent = events.none;

// Function to randomly select and trigger an event
function triggerRandomEvent() {
  // Choose a random event (excluding "none")
  const eventNames = Object.keys(events).filter((name) => name !== "none");
  const randomIndex = Math.floor(Math.random() * eventNames.length);
  const chosenEvent = events[eventNames[randomIndex]];

  // Update current event and display
  currentEvent = chosenEvent;
  const displayElement = document.getElementById("event-value");
  if (currentEvent.name !== "none") {
    displayElement.textContent = currentEvent.name;
  } else {
    displayElement.textContent = "";
  }

  // Execute the event's action (if any)
  chosenEvent();

  // Schedule the next random event
  const delay = Math.floor(Math.random() * 10) + 5; // Random delay between 5 and 15 seconds
  setTimeout(triggerRandomEvent, delay * 1000); // Convert seconds to milliseconds
}

// Start the initial event loop
triggerRandomEvent();

// Add a button to manually trigger events (optional)
// ... (similar to previous examples)
