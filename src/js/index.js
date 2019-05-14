import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
//import "../style/index.scss";

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = randomExcuse();
});

let randomExcuse = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["ate", "pissed on", "crushed", "broke"];
  let thing = ["my computer", "my car", "my homework", "my food"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let thingIndex = Math.floor(Math.random() * thing.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    thing[thingIndex] +
    " " +
    when[whenIndex] +
    "."
  );
};
