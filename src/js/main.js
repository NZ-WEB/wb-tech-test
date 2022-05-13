import State from "./State";
import ProductsApi from "./api/api";
import MainPictureComponent from "./components/MainPictureComponent";
import CalculatorComponent from "./components/CalculatorComponent";
import ActiveProduct from "./components/ActiveProduct";
import SpecificationsComponent from "./components/SpecificationsComponent";
import PreloaderComponent from "./components/PreloaderComponent";

const productsApi = new ProductsApi();
const productsState = new State([]);

// Init components START
const mainPictureComponent = new MainPictureComponent();
const specificationsComponent = new SpecificationsComponent();
const calculatorComponent = new CalculatorComponent(specificationsComponent);
const activeProduct = new ActiveProduct();
const preloaderComponent = new PreloaderComponent();
// Init Components END

preloaderComponent.render();

productsApi.getAll()
  .then(res => {
    res.length = 3; // Set Limit
    return res;
  })
  .then(response => {
    preloaderComponent.destroy();
    productsState.setState(response);

    activeProduct.render(productsState.getItem());
    mainPictureComponent.render(productsState.getItem());
    calculatorComponent.render(productsState.getItem());
    specificationsComponent.render(productsState.getItem()[0]);

    return response;
  });










