import Products from "./Products";

export default class MainPicture {
  products = new Products().getProducts();

  getMainPicture() {
    return  document.querySelectorAll(".main-picture__img");
  }

  setDayMode(activeIndex) {
    const pictures = this.getMainPicture();
    pictures[0].classList.add("active");
    pictures[1].classList.remove("active");

    this.products[activeIndex].classList.add("active-product");
  }

  setNightMode() {
    const pictures = this.getMainPicture();
    const products = this.products;

    pictures[1].classList.add("active");
    pictures[0].classList.remove("active");

    products.forEach(product => {
      product.classList.remove("active-product");
    });

  }
}
