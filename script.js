//your JS code here. If required.
const promises = [
    new Promise(resolve => setTimeout(() => resolve('Promise 1'), Math.random() * 2000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve('Promise 2'), Math.random() * 2000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve('Promise 3'), Math.random() * 2000 + 1000))
];

const startTime = performance.now();

Promise.all(promises)
    .then(results => {
        const endTime = performance.now();
        const totalTime = (endTime - startTime) / 1000;

        // Remove the loading row
        const loadingRow = document.getElementById('loadingRow');
        loadingRow.parentNode.removeChild(loadingRow);

        // Add rows for each promise
        results.forEach((result, index) => {
            const row = document.createElement('tr');
            const promiseCell = document.createElement('td');
            const timeCell = document.createElement('td');
            promiseCell.textContent = result;
            timeCell.textContent = index + 1; // Assuming index starts from 0
            row.appendChild(promiseCell);
            row.appendChild(timeCell);
            document.getElementById('output').appendChild(row);
        });

        // Add a row for the total time
        const totalRow = document.createElement('tr');
        const totalPromiseCell = document.createElement('td');
        const totalTimeCell = document.createElement('td');
        totalPromiseCell.textContent = 'Total';
        totalTimeCell.textContent = totalTime.toFixed(3);
        totalRow.appendChild(totalPromiseCell);
        totalRow.appendChild(totalTimeCell);
        document.getElementById('output').appendChild(totalRow);
    })
    .catch(error => {
        console.error('Error:', error);
    });