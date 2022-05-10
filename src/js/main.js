import State from "./State";
import ProductsApi from "./api/api";
import MainPictureComponent from "./components/MainPictureComponent";
import CalculatorComponent from "./components/CalculatorComponent";
import ActiveProduct from "./components/ActiveProduct";

const productsApi = new ProductsApi();
const productsState = new State([]);

// Init components START
const mainPictureComponent = new MainPictureComponent();
const calculatorComponent = new CalculatorComponent();
const activeProduct = new ActiveProduct();
// Init Components END

productsApi.getAll().then(response => {
  productsState.setState(JSON.parse(response));

  activeProduct.render(productsState.getItem());
  mainPictureComponent.render(productsState.getItem());
  calculatorComponent.render(productsState.getItem());

  return response;
}).then(r => console.log(JSON.parse(r)));








