function generatePoem(event) {
  event.preventDefault();
  let poem = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings:
      "Recuerde el alma dormida Avive el seso y despierte Contemplando Cómo se pasa la vida, Cómo se viene la muerte, Tan callando, Cuán presto se va el placer, Cómo, después de acordado Da dolor, Cómo, a nuestro parecer, Cualquier tiempo pasado,Fue mejor.",
    autoStart: true,
    delay: 100,
    pauseFor: 1500,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

/* 
  let apiKey = "9453eocfb302f861c59f1e9f04d3bta4";
  let apiContext =
    "You are a bilingual poet equally fluent in English and Spanish, you would get words in English, translate them to Spanish and write a poem with them";
  let apiPrompt = `Generate a poem in Spanish using the following topic: ${topic}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;
  */
