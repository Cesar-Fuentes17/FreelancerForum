// Initial list of freelancers
const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

// Function to calculate the average starting price
function calculateAverageStartingPrice(freelancers) {
  const totalStartingPrice = freelancers.reduce((total, freelancer) => total + freelancer.startingPrice, 0);
  return totalStartingPrice / freelancers.length;
}

// Function to add a new freelancer and update the average starting price
function addFreelancer(name, occupation, startingPrice) {
  const newFreelancer = { name, occupation, startingPrice };
  freelancers.push(newFreelancer);

  // Calculate the updated average starting price
  const averageStartingPrice = calculateAverageStartingPrice(freelancers);

  // Display the new freelancer and updated average
  console.log(`New Freelancer: ${name}, ${occupation}, Starting Price: $${startingPrice}`);
  console.log(`Updated Average Starting Price: $${averageStartingPrice.toFixed(2)}`);
}

// Simulate the addition of new freelancers every few seconds
setInterval(() => {
  // Simulate the appearance of new freelancers (you can customize this)
  const newFreelancerName = "Carol";
  const newFreelancerOccupation = "Programmer";
  const newFreelancerStartingPrice = 70;

  // Add the new freelancer and update the average
  addFreelancer(newFreelancerName, newFreelancerOccupation, newFreelancerStartingPrice);
}, 5000); // Add new freelancers every 5 seconds
