import axios from "axios";

const url = "https://private-anon-335e73997e-lampshop.apiary-mock.com/lamps";

export default class ProductsApi {
  getAll() {
    axios(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }
}
