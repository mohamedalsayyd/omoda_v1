function updatePlaceholder() {
  const lang = localStorage.getItem("lang");
  const nameInput = document.querySelector("#name");
  const phoneInput = document.querySelector("#phone");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#leaveWord");

  if (lang === "ar") {
    nameInput.placeholder = "الاسم";
    phoneInput.placeholder = "رقم الهاتف";
    emailInput.placeholder = "البريد الإلكتروني";
    messageInput.placeholder = "اترك لنا رسالتك";
  } else {
    nameInput.placeholder = "Name";
    phoneInput.placeholder = "Phone";
    emailInput.placeholder = "Email";
    messageInput.placeholder = "Leave a message";
  }
}

updatePlaceholder();

window.addEventListener("storage", function (event) {
  if (event.key === "lang") {
    updatePlaceholder();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var hintText = {
    success: "Submitted successfully!",
    error: "You have been delivery please do not repeat submitted!",
    empty: "The form cannot be empty!",
    emailcheck: "Please enter a valid email address!",
    failure: "Submission Failed!",
  };

  function showToast(status) {
    var message_box = document.createElement("div");
    message_box.classList.add("message_box");
    var span = document.createElement("span");
    span.classList.add("icon");
    var p = document.createElement("p");
    p.textContent = hintText[status];
    message_box.appendChild(span);
    message_box.appendChild(p);
    document.querySelector(".contact").appendChild(message_box);

    var timerAdd = setTimeout(function () {
      message_box.classList.add("on");
      clearTimeout(timerAdd);
    }, 10);

    var timerRemoveC = setTimeout(function () {
      message_box.classList.remove("on");
      clearTimeout(timerRemoveC);
      var timerRemove = setTimeout(function () {
        message_box.remove();
        clearTimeout(timerRemove);
      }, 600);
    }, 2000);
  }

  var isShow = false;
  var tabs = document.querySelectorAll(".types .tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var name = this.getAttribute("data-name");
      this.classList.add("on");
      var siblings = getSiblings(this);
      siblings.forEach(function (sibling) {
        sibling.classList.remove("on");
      });
      this.nextElementSibling.value = name;
      if (name === "Purchase Intention" || name === "Service Support") {
        isShow = true;
        document.querySelector(".isShow").style.display = "block";
      } else {
        isShow = false;
        document.querySelector(".isShow").style.display = "none";
      }
    });
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    this.setAttribute("disabled", "disabled");
    var about = document.querySelector(".types .on").getAttribute("data-name");
    var type = document.getElementById("type");
    var countries = document.querySelector("#country").value;
    var name = document.querySelector("#name").value.trim();
    var phone = document.querySelector("#phone").value.trim();
    var email = document.querySelector("#email").value.trim();
    var vehicleType = document.querySelector("#vehicleType").value;
    var content = document.querySelector("#leaveWord").value;

    if (
      countries === "" ||
      name === "" ||
      phone === "" ||
      email === "" ||
      content === "" ||
      about === ""
    ) {
      showToast("empty");
      this.removeAttribute("disabled");
      return;
    }
    type.value = about;
    console.log(countries, name, phone, email, content, about);

    var emailRegex =
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!email.match(emailRegex)) {
      showToast("emailcheck");
      this.removeAttribute("disabled");
      return;
    }
  });

  function getSiblings(element) {
    var siblings = [];
    var sibling = element.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== element) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  }
});
