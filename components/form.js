import { validateForm } from "../utils/validation.js";



export class Form {
  constructor() {

    this.form = document.createElement("form");
    this.form.innerHTML = `
        <legend> Organization information</legend>
        <div id="field" class="input-control">
          <label for="name" class="form-label">Company Name </label>
          <input id="name" name="name" type="text" class="form-control" />
          <div class="error"></div>
        </div>

         <div id="field" class="input-control">
          <label for="businessType" class="form-label">Business Type</label>
          <select id="businessType" name="businessType" class="form-select">
            <option value="" selected disabled>Select a Business Type</option>
            <option value="NonProfit">Non-Profit</option>
            <option value="ForProfit">For-Profit</option>
            <option value="Government">Government</option>
            <option value="Educational">Educational</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Technology">Technology</option>
          </select>
          <div class="error"></div>

        </div>


        <div id="field" class="input-control">
          <label for="RegNumber" class="form-label">Registration Number</label>
          <input id="RegNumber" name="businessType" type="text" class="form-control" />
          <div class="error"></div>

        </div>


        <div id="field" class="input-control">
          <label for="phone" class="form-label">Phone Number</label>
          <input id="phone" name="phone" type="tel" class="form-control" />
          <div class="error"></div>

        </div>


        <div id="field" class="input-control">
          <label for="email" class="form-label">Email</label>
          <input id="email" name="email" type="email" class="form-control" />
          <div class="error"></div>

        </div>



        <div id="field" class="input-control">
          <label for="pass" class="form-label">Set a password</label>
          <input id="password" name="pass" type="password" class="form-control" />
          <div class="error"></div>

        </div>



        <div id="field" class="input-control">
          <label for="confirmPass" class="form-label">Confirm password</label>
          <input id="confirmPass" name="confirmPass" type="password" class="form-control" />
          <div class="error"></div>

        </div>


        <div id="field" class="input-control">
          <label for="region" class="form-label">Region</label>
          <input id="region" name="region" type="text" class="form-control" />
          <div class="error"></div>
        </div>

        <div id="field" class="input-control">
          <label for="city" class="form-label">City</label>
          <input id="city" name="city" type="text" class="form-control" />
          <div class="error"></div>
        </div>

        <div id="field" class="input-control">
          <label for="zip" class="form-label">Zip code</label>
          <input id="zip" name="zip" type="text" class="form-control" />
          <div class="error"></div>
        </div>


        <div id="field-checkbox" class="input-control">
          <label for="terms">I agree with Terms of use</label>
          <input id="terms" name="terms" class="form-check-input" type="checkbox" />
          <div class="error"></div>
        </div>
      

        <button id="btn-submit" type="submit">Register</button>`
      ;






    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    const compnyName = document.getElementById('name');
    const businessType = document.getElementById('businessType');
    const regNumber = document.getElementById('RegNumber');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('confirmPass');
    const region = document.getElementById('region');
    const city = document.getElementById('city');
    const zipcode = document.getElementById('zip');
    const terms = document.getElementById('terms');

    const isValid = validateForm(compnyName, businessType,regNumber,phone,email,password1,password2,region,city,zipcode,terms);

    if (isValid) {
      alert('Form submitted successfully!');
      this.form.submit();
    }

  }


  render(parent) { // form is the child and the parent is the main.js , the form will be rendered there. if we have multiple pages to be rendered we usually use tree archtuict (its up to me)
    parent.appendChild(this.form);
  }

}