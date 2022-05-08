import MainPicture from "./MainPicture";
import State from "./State";

const sunBtn = document.querySelector(".select-product__button-item_sun");
const nightBtn =   document.querySelector(".select-product__button-item_moon");
const mainPicture = new MainPicture();

const ActiveProductState = new State(0);

sunBtn.addEventListener("click", () => {
  mainPicture.setDayMode();
});

nightBtn.addEventListener("click", () => {
  mainPicture.setNightMode();
});
