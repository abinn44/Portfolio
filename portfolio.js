

function sendMail(){
            
    var myEmail = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    };
    const serviceID = "service_lucidgi";
    const  templateID = "template_izndu36"

    

    emailjs
    .send(serviceID, templateID, myEmail)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    }
   )

.catch(err => console.log(err))
}