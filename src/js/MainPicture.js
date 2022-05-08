import Products from "./Products";

export default class MainPicture {
  products = new Products();

  getMainPicture() {
    return  document.querySelectorAll(".main-picture__img");
  }

  setDayMode() {
    const pictures = this.getMainPicture();
    pictures[0].classList.add("active");
    pictures[1].classList.remove("active");
    console.log(pictures);
  }

  setNightMode() {
    const pictures = this.getMainPicture();
    const products = this.products.getProducts();

    pictures[1].classList.add("active");
    pictures[0].classList.remove("active");

    products.forEach(product => {
      product.classList.remove("active-product");
    });

  }
}
