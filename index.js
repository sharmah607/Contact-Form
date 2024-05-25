function validate() {
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    const query = document.getElementsByName("query").checked;
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;

    const fNameError = document.getElementById("fName-error");
    const lNameError = document.getElementById("lName-error");
    const emailError = document.getElementById("email-error");
    const queryError = document.getElementById("query-error");
    const messageError = document.getElementById("message-error");
    const consentError = document.getElementById("consent-error");

    fNameError.textContent = "";
    lNameError.textContent = "";
    emailError.textContent = "";
    queryError.textContent = "";
    messageError.textContent = "";
    consentError.textContent = "";

    let isValid = true;

    if (fName === "" || undefined){
        fNameError.textContent = "This field is required";
        isValid = false;
    }

    if (lName === "" || undefined){
        lNameError.textContent = "This field is required";
        isValid = false;
    }

    if (email === "" || !email.includes("@")){
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    if ((query[0].checked == false ) && ( query[1].checked == false )){
        queryError.textContent = "Please select a query type";
        isValid = false;
    }

    if (message === "" || undefined){
        messageError.textContent = "This field is required";
        isValid = false;
    }

    if (!consent) {
        consentError.textContent = "To submit this form, please consent to being contacted";
        isValid = false;
    }

    return isValid;
}