//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
  const inputValue = document.getElementById("ip").value.trim();
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous results

  const number = parseFloat(inputValue);

  if (isNaN(number)) {
    outputDiv.innerText = "Please enter a valid number.";
    return;
  }

  // First promise: resolve input after 2 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerText = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
  // Multiply by 2
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newResult = result * 2;
        outputDiv.innerText = `Result: ${newResult}`;
        resolve(newResult);
      }, 1000); // 2nd promise (after 3s total)
    });
  })
  // Subtract 3
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newResult = result - 3;
        outputDiv.innerText = `Result: ${newResult}`;
        resolve(newResult);
      }, 1000); // 3rd promise (after 4s total)
    });
  })
  // Divide by 2
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newResult = result / 2;
        outputDiv.innerText = `Result: ${newResult}`;
        resolve(newResult);
      }, 1000); // 4th promise (after 5s total)
    });
  })
  // Add 10
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const finalResult = result + 10;
        outputDiv.innerText = `Final Result: ${finalResult}`;
        resolve(finalResult);
      }, 1000); // 5th promise (after 6s total)
    });
  });
});

