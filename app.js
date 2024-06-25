var typed = new Typed(".text", {
  strings: ["FullStack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const bar = document.getElementById("bar");
const navbar = document.querySelector(".navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    console.log("clicked");
    // Toggle the visibility of the navbar
    navbar.style.visibility = "visible";
    bar.style.visibility = "hidden";
  });
}
if (close) {
  close.addEventListener("click", () => {
    navbar.style.display = "none";
  });
}
