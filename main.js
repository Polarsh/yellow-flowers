onload = () => {
  document.body.classList.remove("container");

  function getNameFromUrl() {
    // Extrae la última parte de la URL (por ejemplo, /olga)
    const url = window.location.pathname;
    const name = url.substring(url.lastIndexOf("/") + 1);
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return name;
  }

  const name = getNameFromUrl();

  if (name) {
    const personalizedMessage = `¡Aquí tienes unas flores para ti, ${name}! 🌻🌼💛`;
    const personalizedGreeting = `¡Hola, ${name}!`;

    document.getElementById("greeting").textContent = personalizedGreeting;
    document.getElementById("message").textContent = personalizedMessage;

    document.title = `${name}'s Flowers - Un regalo especial`;
    document
      .querySelector("meta[property='og:title']")
      .setAttribute("content", `${name}'s Flowers - Un regalo especial`);
    document
      .querySelector("meta[property='og:description']")
      .setAttribute(
        "content",
        `Un ramo especial para ti, ${name}! Disfruta estas flores.`
      );
    document
      .querySelector("meta[property='og:image']")
      .setAttribute("content", "/public/icon.png");
    document
      .querySelector("meta[property='og:url']")
      .setAttribute("content", window.location.href);
  }
};
