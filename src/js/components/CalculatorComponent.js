import MainPicture from "../MainPicture";
import Products from "../Products";
import State from "../State";

export default class CalculatorComponent {
  constructor(component) {
    this.component = component;
  }

  renderPlace = document.querySelector(".select-product");

  handle(props = []) {
    const sunBtn = document.querySelector(".select-product__button-item_sun");
    const nightBtn =   document.querySelector(".select-product__button-item_moon");
    const productButtons = document.querySelectorAll(".select-product__item");

    const activeProductState = new State(0);
    const isNightMode = new State(false);

    const mainPicture = new MainPicture();
    const products = new Products();

    const specificationsComponent = this.component;

    sunBtn.addEventListener("click", () => {
      mainPicture.setDayMode(activeProductState.getItem() - 1);
    });

    nightBtn.addEventListener("click", () => {
      props.forEach(item => {
        if (item.isDarkMode && item.id === +activeProductState.getItem()) {
          mainPicture.setNightMode();
          isNightMode.setState(true);
        }
      });
    });

    productButtons.forEach(button => {
      button.addEventListener("click", () => {
        activeProductState.setState(button.dataset.id);

        props.forEach(item => {
          if (!item.isDarkMode && isNightMode.getItem() && item.id === +activeProductState.getItem()) {
            isNightMode.setState(false);
            mainPicture.setDayMode(activeProductState.getItem() - 1);
          }
        });

        products.setActive(button.dataset.id);
        specificationsComponent.render(props[activeProductState.getItem()]);
      });
    });
  }

  render(props = []) {
    let productArr = props.map(item => {
      return `
        <div data-id="${item.id}" class="select-product__item">
          <img src="${item.image}" alt="product" class="select-product__image">
        </div>
      `;
    });
    productArr.length = 3;
    productArr = productArr.join("");

    this.renderPlace.innerHTML = `
      ${productArr}
      <div class="select-product__button-group">
        <button type="button" class="select-product__button-item select-product__button-item_sun"></button>
        <button type="button" class="select-product__button-item select-product__button-item_moon"></button>
      </div>
    `;
    this.handle(props);
  }
}
