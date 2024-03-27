function togglePattern() {
  // Enter your code here!
  console.log("Hello world!")

  let revealButton = document.querySelector("#patternButton");
  let videoDiv = document.querySelector("#pattern");

  revealButton.classList.toggle("revealed");

  if (revealButton.classList.contains("revealed")) {
    revealButton.innerText = "Hide pattern";
    videoDiv.style.display = "block";
  } else {
    revealButton.innerText = "Reveal!";
    videoDiv.style.display = "none";
  }
}