export default class ActiveProduct {
  renderPlace = document.querySelector(".ActiveProduct")

  handle() {
    const product = document.querySelector(".product");

    product.classList.add("active-product");
  }

  render(props = []) {
    let newStr = props.map(item => {
      return `<img data-id="${item.id}" src="${item.image}" alt="product" class="product">`;
    });

    newStr.length = 3;

    newStr = newStr.join("");


    this.renderPlace.innerHTML = newStr;

    this.handle();
  }
}
