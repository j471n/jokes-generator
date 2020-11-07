const button = document.getElementById('button');
const joke = document.getElementById('joke');
const reset = document.getElementById('reset');
const delivery = document.getElementById('delivery')

/* API Base URL*/
const baseURL = "https://sv443.net/jokeapi/v2";

/* Color Array: to change the backgroundColor of the JOKE*/
const color = ["lightgreen", "lightblue", "gray", "lightgrey", "skyblue", "wheat", "white", "lightcyan", "antiquewhite", "azure", "lightyellow", "mintcream", "springgreen", "snow", "seashell"]


/* Generate Buttton click event */
button.addEventListener('click', () => {
	/* Setting Joke Color to Black*/*/
    joke.style.color = "black";

	/* Requesting for Joke*/
    const Http = new XMLHttpRequest();
    Http.open("GET", baseURL + "/joke/Any?");

    Http.onreadystatechange = function() {
        if (Http.readyState == 4 && Http.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
        {
            const randomJoke = JSON.parse(Http.responseText);
            console.log(randomJoke);

            if (randomJoke.type == "single") {
                // If type == "single", the joke only has the "joke" property
                joke.innerHTML = randomJoke.joke;
                delivery.innerHTML = "";
                delivery.style.backgroundColor = "black";
            } else {
                // If type == "single", the joke only has the "joke" property
                joke.innerHTML = randomJoke.setup;
                delivery.innerHTML = randomJoke.delivery;
                delivery.style.backgroundColor = "yellow";
            }


            joke.style.backgroundColor = color[Math.floor(Math.random() * color.length)];



        } else if (Http.readyState == 4) {
            alert("Error while requesting joke.\n\nStatus code: " + Http.status + "\nServer response: " + Http.responseText);
        }
    };

    Http.send();
});

/* Resetting the Page onClick */
reset.addEventListener('click', () => {
    joke.innerHTML = "Click Generate Button";
    joke.style.backgroundColor = "black";
    joke.style.color = "white";
    delivery.innerHTML = "";
    delivery.style.backgroundColor = "black";

})