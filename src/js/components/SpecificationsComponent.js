export default class SpecificationsComponent {
  renderPlace = document.querySelector(".properties");

  render(props = []) {
    let {electrification, height, width, material, weight} = props;
    material =  material.split("").map(char => char === material[0] ? char.toUpperCase() : char).join("");

    this.renderPlace.innerHTML = `
      <div class="properties__circle">
        <div class="properties__content">
          <ul class="properties__list">
            <li class="properties__item">
              <span class="properties__item-title">
                Material:
              </span>
              <p class="properties__item-text">
                ${material}
              </p>
            </li>

            <li class="properties__item">
              <span class="properties__item-title">
                  Dimensions (cm):
              </span>
              <p class="properties__item-text">
                H ${height} x W ${width}
              </p>
            </li>

            <li class="properties__item">
              <span class="properties__item-title">
                  Net Weight:
              </span>
              <p class="properties__item-text">
                ${weight} Kg
              </p>
            </li>

            <li class="properties__item">
              <span class="properties__item-title">
                  Electrification:
              </span>
              <p class="properties__item-text">
                ${electrification}
              </p>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
