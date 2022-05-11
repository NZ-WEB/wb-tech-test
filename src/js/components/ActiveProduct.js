export default class ActiveProduct {
  firstRenderPlace = document.querySelector(".ActiveProduct");


  handle() {
    const product = document.querySelector(".product");

    product.classList.add("active-product");
  }

  render(props = []) {
    let firstNewStr = props.map(item => {
      return `<img data-id="${item.id}" src="${item.image}" alt="product" class="product">`;
    });

    firstNewStr = firstNewStr.join("");

    this.firstRenderPlace.innerHTML = firstNewStr;

    this.handle();
  }
}
