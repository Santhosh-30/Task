$('document').ready(function (){

    let Day =['Please','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let Month =['Please','January','Feburary','March','April','May','June','July','August','September','October','November','December'];
    let Year =['Please','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'];


    Day.forEach(Day => { $('#day').append(`<Option value= "${Day}">${Day}</Option>`);
    });
    Month.forEach(Month => { $('#month').append(`<Option value= "${Month}">${Month}</Option>`);
    });
    Year.forEach(Year => { $('#year').append(`<Option value= "${Year}">${Year}</Option>`);
    });


    $('#signup').on('submit',function (e){
      
      let error = false;

      let fname = $('#fname').val().trim();
      let fnamePattern =/^\w{2,29}\D$/;
      if(fname ===""|| !fnamePattern.test(fname)){
        $('#fname_error').text('Enter a valid First Name');
        error = true;
      }
      else{
        $('#fname_error').text('');
      }


      let lname = $('#lname').val().trim();
      let lnamePattern =/^\w{2,29}\D$/;
      if(lname ===""|| !lnamePattern.test(lname)){
        $('#lname_error').text('Enter a valid Last Name');
        error = true;
      }
      else{
        $('#lname_error').text('');
      }


      let mobile = $('#mobile').val().trim();
      let mobilePattern =/^[6789]\d{9}$/;
      if(mobile ===""|| !mobilePattern.test(lmobile)){
        $('#mobile_error').text('Please enter a valid mobile number');
        error = true;
      }
      else{
        $('#mobile_error').text('');
      }


      let email = $('#email').val().trim();
      let emailPattern =/^^[^\d\s]\w{3,25}[@]+\w{1,10}[.]\w{10}$/;
      if(email ===""|| !emailPattern.test(!email)){
        $('#email_error').text('Please provide an valid email');
        error = true;
      }
      else{
        $('#email_error').text('');
      }


      let address = $('#address').val().trim();
      if(address ===""){
        $('#address_error').text('Invalid street address');
        error = true;
      }
      else{
        $('#address_error').text('');
      }


      let address2 = $('#address2').val().trim();
      if(address2 ===""){
        $('#address2_error').text('Invalid address field ');
        error = true;
      }
      else{
        $('#address2_error').text('');
      }


      let  tcity = $('#city').val().trim();
      if(city===""){
        $('#city_error').text('Enter a valid City');
        error = true;
      }
      else{
        $('#city_error').text('');
      }


      let state = $('#state').val().trim();
      if(state===""){
        $('#state_error').text('Enter a valid State');
        error = true;
      }
      else{
        $('#state_error').text('');
      }

      let zip = $('#zip').val().trim();
      let zipPattern =/^\d{6}$/;
      if(zip===""|| !zipPattern.test(!zip)){
        $('#zip_error').text('Invalid Zip code format');
        error = true;
      }
      else{
        $('#zip_error').text('');
      }


      let title = $('#title').val().trim();
      if(title===""){
        $('#title_error').text('Please enter a Title');
        error = true;
      }
      else{
        $('#title_error').text('');
      }


      let info = $('#title').val().trim();
      if(info===""){
        $('#info_error').text('Additional Information feild can`t be empty');
        error = true;
      }
      else{
        $('#info_error').text('');
      }


      if (!error) {
    alert('Form is submitted sucessfully.');
     this.submit(); 
      }

    })
  })