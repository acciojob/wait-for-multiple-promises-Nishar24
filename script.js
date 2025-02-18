//your JS code here. If required.
// Function to create a promise that resolves after a random delay
function createPromise(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000); // Convert seconds to milliseconds
  });
}

// Function to generate random delays between 1 and 3 seconds
function getRandomDelay() {
  return (Math.random() * 2 + 1).toFixed(3); // Random number between 1 and 3
}

// Create 3 promises with random delays
const promises = [
  createPromise(getRandomDelay()),
  createPromise(getRandomDelay()),
  createPromise(getRandomDelay()),
];

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
  // Get the table body element
  const tableBody = document.getElementById("output");

  // Remove the "Loading..." row
  tableBody.innerHTML = "";

  // Add rows for each promise result
  results.forEach((time, index) => {
    const row = document.createElement("tr");
    const promiseCell = document.createElement("td");
    const timeCell = document.createElement("td");

    promiseCell.textContent = `Promise ${index + 1}`;
    timeCell.textContent = time;

    row.appendChild(promiseCell);
    row.appendChild(timeCell);
    tableBody.appendChild(row);
  });

  // Calculate the total time (maximum time among all promises)
  const totalTime = Math.max(...results).toFixed(3);

  // Add the "Total" row
  const totalRow = document.createElement("tr");
  const totalLabelCell = document.createElement("td");
  const totalTimeCell = document.createElement("td");

  totalLabelCell.textContent = "Total";
  totalTimeCell.textContent = totalTime;

  totalRow.appendChild(totalLabelCell);
  totalRow.appendChild(totalTimeCell);
  tableBody.appendChild(totalRow);
});