const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

//USING .THEN

// const config = {
//   headers: {
//     Accept: "application/json",
//   },
// };

// jokeBtn.addEventListener("click", generateJoke);
// generateJoke();

// function generateJoke() {
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

//USING ASYNC AWAIT
jokeBtn.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  //fetch is async so we have to use await
  const res = await fetch("https://icanhazdadjoke.com", config);

  //also returns a promise, so await
  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
