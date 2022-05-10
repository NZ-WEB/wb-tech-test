import MainPicture from "./MainPicture";
import State from "./State";
import Products from "./Products";

const sunBtn = document.querySelector(".select-product__button-item_sun");
const nightBtn =   document.querySelector(".select-product__button-item_moon");
const productButtons = document.querySelectorAll(".select-product__item");
const mainPicture = new MainPicture();
const products = new Products();

const activeProductState = new State(0);
const isNightMode = new State(false);

sunBtn.addEventListener("click", () => {
  mainPicture.setDayMode(activeProductState.getItem());
});

nightBtn.addEventListener("click", () => {
  mainPicture.setNightMode();
  products.setActive(3);
  isNightMode.setState(true);
});

productButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeProductState.setState(button.dataset.id);

    if (button.dataset.id !== 3 && isNightMode) {
      mainPicture.setDayMode(button.dataset.id - 1);
    }

    products.setActive(button.dataset.id);
  });
});
