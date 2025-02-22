
import { fetchCompanyData } from "../services/api.js";

export class DataProvider {
    constructor() {
        this.button = document.createElement("button");
        this.button.id = "fetchBtn"
        this.button.textContent = "Load Data from our API";
        this.button.addEventListener("click", () => this.loadData());
    }

    async loadData() {
        try {
            const companyData = await fetchCompanyData();
            if (companyData) {
                this.WriteToForm(companyData);
            }
        } catch (error) {
            console.error("Error fetching company data:", error);
        }
    }

    WriteToForm(data) {
        if (!data) {
            console.error("Error: Data is undefined or null.");
            return;
        }

        const companyName = document.querySelector("#name");
        const businessType = document.querySelector("#businessType");
        const regNumber = document.querySelector("#RegNumber");
        const phone = document.querySelector("#phone");
        const email = document.querySelector("#email");
        const region = document.querySelector("#region");
        const city = document.querySelector("#city");
        const zipcode = document.querySelector("#zip");

        if (!companyName) {
            console.error("Error: One or more form fields do not exist.");
            return;
        }

        // Assign values to form fields
        companyName.value = data.name || "";
        businessType.value = "Government"; // Default value
        regNumber.value = data.id || "";
        phone.value = data.phone || "";
        email.value = data.email || "";
        region.value = data.address?.city || "";
        city.value = data.address?.city || "";
        zipcode.value = data.address?.zipcode || "";
    }

    render(parent) {
        parent.appendChild(this.button);
    }
}

