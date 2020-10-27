//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const dancer = document.querySelector(".dancer img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const dates = document.querySelector(".dates");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(75px)";
  dancer.style.transform = "translateZ(120px) rotateZ(-15deg)";
  description.style.transform = "translateZ(65px)";
  dates.style.transform = "translateZ(50px)";
  purchase.style.transform = "translateZ(50px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  //Popback
  title.style.transform = "translateZ(0px)";
  dancer.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  dates.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
