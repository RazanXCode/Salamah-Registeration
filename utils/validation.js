export const validateForm = (companyName, businessType, regNumber, phone, email, password1, password2, region, city, zipcode, terms) => {
    let isValid = true;

    const companyNameValue = companyName.value.trim();
    const businessValue = businessType.value.trim();
    const regNumberValue = regNumber.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    const regionValue = region.value.trim();
    const cityValue = city.value.trim();
    const zipcodeValue = zipcode.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;


    const setError = (element, message) => {
        isValid = false;  
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        if (errorDisplay) {
            errorDisplay.innerText = message;
        }
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        if (errorDisplay) {
            errorDisplay.innerText = '';
        }
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

  
    if (companyNameValue === '') {
        setError(companyName, 'Company name is required');
    } else {
        setSuccess(companyName);
    }

    if (businessValue === '') {
        setError(businessType, 'Business type is required');
    } else {
        setSuccess(businessType);
    }

    if (regNumberValue == '') {
        setError(regNumber, 'Registration number is required');
    } else {
        setSuccess(regNumber);
    }

    if (phoneValue == '') {
        setError(phone, 'Phone number is required');
    } else {
        setSuccess(phone);
    }

    if (emailValue == '') {
        setError(email, 'Email is required');
    } else if (!emailPattern.test(emailValue)) {
        setError(email, 'Invalid email format');
    } else {
        setSuccess(email);
    }

    if (password1Value == '') {
        setError(password1, 'Password is required');
    } else if (!passwordPattern.test(password1Value)) {
        setError(password1, 'Weak password: Password must be at least 8 characters, with letters, numbers, and special characters');
    } else {
        setSuccess(password1);
    }

    if (password2Value == '') {
        setError(password2, 'Password validation is required');
    } else if (password2Value !== password1Value) {
        setError(password2, 'Passwords must match');
    } else {
        setSuccess(password2);
    }

    if (regionValue == '') {
        setError(region, 'Region is required');
    } else {
        setSuccess(region);
    }

    if (cityValue == '') {
        setError(city, 'City is required');
    } else {
        setSuccess(city);
    }

    if (zipcodeValue == '') {
        setError(zipcode, 'ZIP code is required');
    } else {
        setSuccess(zipcode);
    }

    if (!terms.checked) {
        setError(terms, 'You must agree to the terms and conditions');
    } else {
        setSuccess(terms);
    }

    return isValid; 
};
