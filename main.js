let btn = document.querySelector(".get");
let paragraph = document.querySelector(".paragraph");

let lis = document.querySelectorAll("ul li");

let imges = document.images;
let imagesArray = Array.from(imges);

let input = document.querySelector(".inputdate input");
let calc = document.querySelector(".calc");

let num = document.querySelector(".num");
let dicrement = document.querySelector(".dicrement");
let increment = document.querySelector(".increment");
let reload = document.querySelector(".incrementanddicrement i");

let jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the chicken cross the playground? To get to the other slide!",
  " What do you call a fake noodle? An impasta!",
  "Why was the math book sad? Because it had too many problems!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the cookie go to the doctor? Because it was feeling crumbly!",
  " What do you call a can opener that doesn't work? A can't opener",
  "Why did the banana go to the doctor? Because it wasn't peeling well!",
  " What do you call a boomerang that doesn't come back? A stick!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
];

btn.onclick = function () {
  paragraph.classList.add("done");
  paragraph.innerHTML = jokes[Math.floor(Math.random() * jokes.length)];
};
lis.forEach((element) => {
  element.addEventListener("click", () => {
    lis.forEach((ele) => {
      ele.classList.remove("active");
      element.classList.add("active");
      imagesArray.forEach((img) => {
        img.style.display = "none";
      });
    });
    document.querySelectorAll(element.dataset.cat).forEach((img) => {
      img.style.display = "block";
    });
  });
});

calc.addEventListener("click", () => {
  let myDateYears = new Date().getFullYear();
  let birthDayYears = new Date(input.value).getFullYear();

  let diffDateYear = myDateYears - birthDayYears;
  // document.querySelector(".numyears").innerHTML = diffDateYear;
  if (diffDateYear > 0) {
    document.querySelector(".numyears").innerHTML = diffDateYear;
  } else {
    document.querySelector(".numyears").innerHTML = `0`;
  }
  let myDateMonth = new Date().getMonth();
  let birthDayMonth = new Date(input.value).getMonth();

  let diffDateMonth = myDateMonth + 1 - (birthDayMonth + 1);

  if (diffDateMonth > 0) {
    document.querySelector(".nummonth").innerHTML = diffDateMonth;
  } else {
    document.querySelector(".nummonth").innerHTML = `0`;
  }
  let myDateDay = new Date().getDate();
  let mybirthDay = new Date(input.value).getDate();
  let diffDateDay = myDateDay - mybirthDay;

  diffDateDay > 0
    ? (document.querySelector(".numdays").innerHTML = diffDateDay)
    : (document.querySelector(".numdays").innerHTML = `0`);
});

increment.addEventListener("click", () => {
  num.innerHTML++;
});
dicrement.addEventListener("click", () => {
  num.innerHTML--;
});

reload.addEventListener("click", () => {
  window.location.reload();
});
