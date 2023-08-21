const userEmail = document.getElementById("email").value;

const sendEmail = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "alsayyd.medo72@gmail.com",
    Password: "msh318285k",
    To: "bm7596524@gmail.com",
    From: userEmail,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
};
