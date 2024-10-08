function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    pauseFor: 1500,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let topic = document.querySelector("#user-instructions");
  let apiKey = "9453eocfb302f861c59f1e9f04d3bta4";
  let apiContext =
    "You are a bilingual poet equally fluent in English and Spanish, you would get words in English, translate them to Spanish and write a poem with them";
  let apiPrompt = `Generate a poem in Spanish using the following topic: ${topic.value}, don't use more than 150 words`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  let showPoem = document.querySelector("#poem");
  showPoem.classList.remove("hidden");
  showPoem.innerHTML = `<div class="blink">Generating a Spanish poem about: "${topic.value}"</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
