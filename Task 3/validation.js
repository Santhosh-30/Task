function validateform(){
    
    proceed = validate();
if (!proceed) {
    document.getElementById('signup').submit();
    alert("Form submitted sucessfully");
}
}

function validate(){
    let hasError = false;


    let fname = document.getElementById('fname').value;
    let fnamePattern = /^[A-Za-z][A-Za-z0_]{2,29}$/; 
    if (fname === "" || !fnamePattern.test(fname)) {
        document.getElementById('fname_error').innerText = "Please enter valid First Name";
        hasError = true;
    }
    else{
        document.getElementById('fname_error').innerText = '';
    }

    let lname = document.getElementById('lname').value;
    let lnamePattern = /^[A-Za-z][A-Za-z0-9_]{2,29}$/; 
    if (lname === "" || !lnamePattern.test(lname)) {
        document.getElementById('lname_error').innerText = " Please enter valid Last Name";
        hasError = true;
    }
    else{
        document.getElementById('lname_error').innerText = " ";
    }

    let mobile = document.getElementById('mobile').value;
    let mobilePattern = /^[6789]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById('mobile_error').innerText = "Invalid mobile number format";
        hasError = true;
    }
    else{
        document.getElementById('mobile_error').innerText = " ";

    }

    let email = document.getElementById('email').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email_error').innerText = "Invalid email address";
        hasError = true;
    }
    else{
        document.getElementById('email_error').innerText = "";

    }

    let address = document.getElementById('address').value;
    if (address === "") {
        document.getElementById('address_error').innerText = "Address is required";
        hasError = true;
    }
    else{
        document.getElementById('address_error').innerText = "";

    }

    let city = document.getElementById('city').value;
    if (city === "") {
        document.getElementById('city_error').innerText = "City is required";
        hasError = true;
    }
    else{
        document.getElementById('city_error').innerText = "";

    }

    let state = document.getElementById('state').value;
    if (state === "") {
        document.getElementById('state_error').innerText = "State is required";
        hasError = true;
    }
    else{
        document.getElementById('state_error').innerText = "";

    }
    

    let zip = document.getElementById('zip').value;
    let zipPattern= /^\d{6}$/
;
    if (zip === "") {
        document.getElementById('zip_error').innerText = "Invalid Zip Code format";
        hasError = true;
    }
    else{
        document.getElementById('zip_error').innerText = "";

    }

    
    let sday = document.getElementById('sday').value;
    if (sday === "") {
        document.getElementById('sday_error').innerText = "Invalid Start Day";
        hasError = true;
    }
    else{
        document.getElementById('sday_error').innerText = "";

    }

    let smonth = document.getElementById('smonth').value;
    if (smonth === "") {
        document.getElementById('smonth_error').innerText = "Invalid Start Month";
        hasError = true;
    }
    else{
        document.getElementById('smonth_error').innerText = "";

    }

    let syear = document.getElementById('syear').value;
    if (syear === "") {
        document.getElementById('syear_error').innerText = "Invalid Start Year";
        hasError = true;
    }
    else{
        document.getElementById('syear_error').innerText = "";

    }

    let title = document.getElementById('title').value;
    if (title === "") {
        document.getElementById('title_error').innerText = "Title is required";
        hasError = true;
    }
    else{
        document.getElementById('title_error').innerText = "";

    }

    let info = document.getElementById('info').value;
    if (info === "") {
        document.getElementById('info_error').innerText = "Info is required";
        has
        Error = true;
    }
    else{
        document.getElementById('info_error').innerText = "";

    }

    return hasError;
};

