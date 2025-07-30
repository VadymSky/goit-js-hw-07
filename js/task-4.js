const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    let email = loginForm.elements.email.value.trim();;
    let password = loginForm.elements.password.value.trim();

    if (email === "" || password === "") {
        alert('All form fields must be filled in');
        return;
    }
    let formObject = {
        userEmail: email,
        userPassword: password
    };
    
    console.log(formObject);
    loginForm.reset();
});
