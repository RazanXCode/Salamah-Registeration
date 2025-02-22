import { Form } from "./components/form.js";
import { DataProvider } from "./components/dataProvider.js";


const app = document.getElementById("app");

const formComponent = new Form();
formComponent.render(app);

const dataProviderComponent = new DataProvider();
dataProviderComponent.render(app);


