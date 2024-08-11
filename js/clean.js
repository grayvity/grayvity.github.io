$(document).ready(function () {
  const circle = document.getElementsByClassName("circle")[0];
  const container = document.getElementById("container");
  const startButton = document.getElementById("start");

  const interval = setInterval(() => growCircle(), 250);
  let currentSize = 50;

  const growCircle = () => {
    currentSize += 10;
    circle.style.width = `${currentSize}px`;
    circle.style.height = `${currentSize}px`;
  };

  circle.onclick = () => {
    clearInterval(interval);
    container.removeChild(circle);
  };

  startButton.onclick = () => {
    container.innerHTML = "";

    const width = parseInt(document.getElementById("form-width").value);
    const growthAmount = parseInt(
      document.getElementById("form-growth-amount").value
    );
    const growRate = parseInt(document.getElementById("form-rate").value);
    const numCircles = parseInt(
      document.getElementById("form-number-of-circles").value
    );
    console.log(container, width, growthAmount, growRate);
    for (let i = 0; i < numCircles; i++) {
      createGrowingCircle(container, width, growthAmount, growRate);
    }
  };

  function createGrowingCircle(
    container,
    initialWidth,
    growthAmount,
    growRate
  ) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = initialWidth + "px";
    circle.style.height = initialWidth + "px";

    // Random position within the container
    const maxX = container.clientWidth - initialWidth;
    const maxY = container.clientHeight - initialWidth;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    circle.style.left = randomX + "px";
    circle.style.top = randomY + "px";

    container.appendChild(circle);

    let currentSize = initialWidth;
    const intervalId = setInterval(() => {
      currentSize += growthAmount;
      circle.style.width = currentSize + "px";
      circle.style.height = currentSize + "px";
    }, growRate);

    circle.addEventListener("click", function () {
      clearInterval(intervalId);
      container.removeChild(circle);
    });
  }
});
