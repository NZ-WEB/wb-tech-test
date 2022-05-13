export default class PreloaderComponent {
  render() {
    const preloader = document.createElement("div");
    const bg = document.createElement("div");

    preloader.classList.add("lds-dual-ring");
    bg.classList.add("preloader-bg");

    bg.appendChild(preloader);

    document.body.append(bg);
  }

  destroy() {
    const bg = document.querySelector(".preloader-bg");

    bg.classList.add("opacity-0");

    setTimeout(() => {
      bg.remove();
    }, 400);
  }
}
