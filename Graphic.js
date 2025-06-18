/* JavaScript to toggle display */

document.querySelector(".modal").addEventListener("click", function(event) {
  if (event.target === this) {
    this.style.display = "none";
  }
});
