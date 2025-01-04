// Toggle visibility of the secret hobby
const toggleButton = document.getElementById("toggle-hobby-btn");
const secretHobby = document.getElementById("secret-hobby");

toggleButton.addEventListener("click", () => {
  if (secretHobby.classList.contains("hidden")) {
    secretHobby.classList.remove("hidden");
    toggleButton.textContent = "Hide Secret Hobby";
  } else {
    secretHobby.classList.add("hidden");
    toggleButton.textContent = "Reveal a Secret Hobby";
  }
});
