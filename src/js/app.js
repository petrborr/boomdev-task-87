import "../scss/app.scss";
import * as R from "ramda"

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  let classes = R.pluck("class", arrayToPluck);

  const articles = document.querySelectorAll("article");
  for (let i = 0; i < 3; i++) {
    articles[i].classList.add(classes[i])
  }
});
