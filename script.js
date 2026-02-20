// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Shadow Music Landingpage geladen.");
  // Beispiel für dynamische Feature-Erweiterung
  const featureList = document.querySelectorAll(".card ul");
  if(featureList.length) featureList[0].innerHTML += "<li>Dynamisches Feature hinzugefügt ⚡</li>";
});
