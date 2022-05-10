export default class Products {
  getProducts() {
    return document.querySelectorAll(".product");
  }

  setActive(active) {
    const productButtons = document.querySelectorAll(".select-product__item");
    const productImages = document.querySelectorAll(".product");

    productButtons.forEach(button => {
      button.classList.remove("active");

      if (button.dataset.id === active.toString()) {
        button.classList.add("active");
      }
    });

    productImages.forEach(image => {
      image.classList.remove("active-product");

      if (image.dataset.id === active) {
        image.classList.add("active-product");
      }
    });
  }
}
