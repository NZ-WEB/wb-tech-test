export default class MainPictureComponent {
  renderPlace = document.querySelector(".MainPicture");

  handle() {

  }

  render(){
    this.renderPlace.innerHTML = `
      <img src="./assets/img/main.png" alt="main" class="main-picture__img active animated animate__fadeIn">
      <img src="./assets/img/dark-img.png" alt="main" class="main-picture__img animated animate__fadeIn">
    `;
    this.handle();
  }
}
