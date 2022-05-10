import MainPicture from "./MainPicture";
import State from "./State";
import Products from "./Products";
import ProductsApi from "./api/api";
import MainPictureComponent from "./components/MainPictureComponent";
import CalculatorComponent from "./components/CalculatorComponent";

const productsApi = new ProductsApi();
const productsState = new State([]);

productsApi.getAll().then(response => {
  productsState.setState(JSON.parse(response));

  calculatorComponent.render(productsState.getItem());
});

// Components Start
const mainPictureComponent = new MainPictureComponent({url: "./assets/img/main.png", darkUrl: "./assets/img/dark-img.png"});
mainPictureComponent.render();

const calculatorComponent = new CalculatorComponent(productsState.getItem());
calculatorComponent.render();

// Components End

//  Api start








