function whatsapp(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var subject = document.getElementById("subject").value;
    var writeMessage = document.getElementById("writeMessage").value;

    var whatsappurl="https//wa.me/97517898345?text="
    + "Customer Name:" + firstName + lastName + "%0a"
    + "Phone Number:" + phoneNumber + "%0a"
    + "Email Address:" + emailAddress + "%0a"
    + "Subject:" + subject + "%0a"
    + "Message:" + writeMessage;

    window.open(whatsappurl,"_blank").focus(); 
  }
		