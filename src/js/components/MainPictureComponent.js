export default class MainPictureComponent {
  constructor(props) {
    this.props = props;
  }
  renderPlace = document.querySelector(".MainPicture");

  handle() {

  }

  render(){
    const {url, darkUrl} = this.props;

    this.renderPlace.innerHTML = `
      <img src="${url}" alt="main" class="main-picture__img active">
      <img src="${darkUrl}" alt="main" class="main-picture__img ">
    `;
    this.handle();
  }
}
