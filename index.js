var aTags = document.querySelectorAll("a");
// sections
const HeroSection = document.querySelector(".HeroSection");
const aboutSection = document.querySelector(".aboutSection");
const main = document.querySelector(".main");
//btn
const nextBtn = document.querySelector(".nextbtn");
const prevBtn = document.querySelector(".prevbtn");

const aTagsValues = {
  Home: 0,
  About: 100,
  Services: 200,
  Portfolio: 300,
  Contacts: 400,
};

let currentLocation = 0;

aTags.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    let hasActiveClass = document.querySelector(".active");
    let targetElement = a.innerText;
    let targetElementValue = aTagsValues[targetElement];

    hasActiveClass.classList.remove("active");
    a.classList.add("active");

    main.style.right = `${targetElementValue}vw`;
    currentLocation = targetElementValue;
  });
});

prevBtn.addEventListener("click", () => {
  let isZero = currentLocation != 0;

  if (isZero) {
    currentLocation -= 100;
    main.style.right = `${currentLocation}vw`;
    setTimeout(() => {
      LinkPoint();
    }, 150);
  }
});

nextBtn.addEventListener("click", () => {
  let isNot400 = currentLocation != 400;

  if (isNot400) {
    currentLocation += 100;
    main.style.right = `${currentLocation}vw`;
    setTimeout(() => {
      LinkPoint();
    }, 150);
  }
});


function LinkPoint() {
  aTags.forEach((item) => {
    // Check conditions and add/remove 'active' class accordingly
    if (
      (currentLocation == 0 && item.innerText === "Home") ||
      (currentLocation == 100 && item.innerText === "About") ||
      (currentLocation == 200 && item.innerText === "Services") ||
      (currentLocation == 300 && item.innerText === "Portfolio") ||
      (currentLocation == 400 && item.innerText === "Contacts")
    ) {
      
      document.querySelector(".active")?.classList.remove("active");
      item.classList.add("active");
    }
  });
}
