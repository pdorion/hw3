// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Create a set of variables that pull items from the ride to print a sentence later
  
  let firstName = ride.passengerDetails.first
  let lastName = ride.passengerDetails.last
  let phoneNum = ride.passengerDetails.phoneNumber
  let dropLocation = ride.dropoffLocation.address
  let dropState = ride.dropoffLocation.state
  let dropCity = ride.dropoffLocation.city
  let dropZip = ride.dropoffLocation.zip
  let pickupLocation = ride.pickupLocation.address
  let pickupState = ride.pickupLocation.state
  let pickupCity = ride.pickupLocation.city
  let pickupZip = ride.pickupLocation.zip

  // make a variable to print conditional service level later, including the XL status and the purple status that supercedes it
  let serviceLevel 
  if (ride.numberOfPassengers > 3) {
    serviceLevel = `Noober XL`
  } else {
    serviceLevel = `X`
  }
  if (ride.purpleRequested) {
    serviceLevel = `Purple`
  } 

  // Print the sentence in a readable form to the console using variables defined above
  let printOut = `Noober ${serviceLevel} Passenger: ${firstName} ${lastName} - ${phoneNum}. Pickup at ${pickupLocation}, ${pickupCity}, ${pickupState} ${pickupZip}. Drop-off at ${dropLocation}, ${dropCity}, ${dropState} ${dropZip}.`
  console.log(printOut)
  

  // 🔥 YOUR CODE ENDS HERE 🔥
})
