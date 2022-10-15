const generate = document.getElementById("generate");
const joke = document.getElementById("joke");
const reset = document.getElementById("reset");
const delivery = document.getElementById("delivery");
const copyBtn = document.querySelector("#copy_btn");

/* API Base URL*/
const baseURL = "https://sv443.net/jokeapi/v2/joke/Any?";

/* Color Array: to change the backgroundColor of the JOKE*/
const color = [
  "lightgreen",
  "lightblue",
  "gray",
  "lightgrey",
  "skyblue",
  "wheat",
  "white",
  "lightcyan",
  "antiquewhite",
  "azure",
  "lightyellow",
  "mintcream",
  "springgreen",
  "snow",
  "seashell",
];

/* Generate Buttton click event */
generate.addEventListener("click", () => {
  /* Setting Joke Color to Black*/
  joke.style.color = "black";

  fetch(baseURL)
    .then((res) => res.json())
    .then((randomJoke) => {
      console.log(randomJoke);
      if (randomJoke.type === "single") {
        // If type == "single", the joke only has the "joke" property
        joke.innerHTML = randomJoke.joke;
        delivery.innerHTML = "";
        delivery.style.display = "none";
      } else {
        // If type == "single", the joke only has the "joke" property
        joke.innerHTML = randomJoke.setup;
        delivery.style.display = "block";
        delivery.innerHTML = randomJoke.delivery;
        delivery.style.backgroundColor = "yellow";
      }

      console.log(copyBtn);
      copyBtn.style.display = "flex";
      joke.style.backgroundColor =
        color[Math.floor(Math.random() * color.length)];
    });
});

/* Resetting the Page onClick */
reset.addEventListener("click", () => {
  joke.innerHTML = "Click Generate Button";
  joke.style.backgroundColor = "black";
  joke.style.color = "white";
  delivery.style.backgroundColor = "black";
  copyBtn.style.display = "none";
  elivery.style.display = "none";
});

copyBtn.onclick = () => {
  var exportJoke = joke.textContent + "\n\n" + delivery.textContent;

  // Copy the text inside the text field
  navigator.clipboard.writeText(exportJoke);
};
