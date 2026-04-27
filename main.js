const page = window.location.pathname.split("/").pop();

let cityRegister = document.getElementById("city");
let donors = JSON.parse(localStorage.getItem("donors")) || [];
//  Register Page
if (page === "" || page === "index.html") {
  // Variables
  let registerForm = document.querySelector(".register-form");
  let registerBtn = document.querySelector(".register-btn");
  let nameInput = document.querySelector(".name-input");
  let emailInput = document.querySelector(".email-input");
  let passwordInput = document.querySelector(".pass-input");
  let nameError = document.querySelector(".name-error");
  let emailError = document.querySelector(".email-error");
  let passwordError = document.querySelector(".pass-error");

  //   Login Variables
  let loginBtn = document.querySelector(".login-btn");
  // Login Button
  loginBtn.onclick = (e) => {
    e.preventDefault();
    location.href = "login.html";
  };

  // Enter button
  document.body.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      registerBtn.click();
    }
  });

  //  Registeration Process
  registerBtn.onclick = (e) => {
    e.preventDefault();
    // Test for registeration
    if (
      nameInput.value != "" &&
      emailInput.value != "" &&
      emailInput.value.includes("@") &&
      passwordInput.value.length >= 8
    ) {
      location.href = "home.html";
    } else {
      registerForm.style.minHeight = "600px";
      if (nameInput.value == "") {
        nameError.textContent = "من فضلك ادخل اسمك";
      } else {
        registerForm.style.minHeight = "580px";
        nameError.textContent = "";
      }

      if (emailInput.value == "") {
        emailError.textContent = "من فضلك ادخل ايميلك";
      } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "من فضلك ادخل ايميلك و تحتوي علي @";
      } else {
        registerForm.style.minHeight = "560px";
        emailError.textContent = "";
      }

      if (passwordInput.value < 8) {
        passwordError.textContent = "ادخل كلمة سر اكبر من 8 احرف";
      } else {
        registerForm.style.minHeight = "510px";
        passwordError.textContent = "";
      }
    }
  };

  cityRegister.onchange = () => {
    localStorage.setItem("city", cityRegister.value);
  };

  nameInput.oninput = () => {
    localStorage.setItem("name", nameInput.value);
  };

  emailInput.oninput = () => {
    localStorage.setItem("email", emailInput.value);
  };

  passwordInput.oninput = () => {
    localStorage.setItem("password", passwordInput.value);
  };
  //   Change Input
  let eyeIcon = document.querySelector(".eye-icon");
  eyeIcon.onclick = () => {
    if (eyeIcon.innerHTML === `<i class="fa-solid fa-eye"></i>`) {
      passwordInput.type = "text";
      eyeIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    } else if (eyeIcon.innerHTML === `<i class="fa-solid fa-eye-slash"></i>`) {
      passwordInput.type = "password";
      eyeIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
  };
}
// Login Page
if (page === "login.html") {
  // Variables
  let loginForm = document.querySelector(".login-form");
  let loginBtn = document.querySelector(".login-btn");
  let passwordInput = document.querySelector(".pass-login-input");
  let emailInput = document.querySelector(".email-login-input");
  let emailError = document.querySelector(".email-login-error");
  let passwordError = document.querySelector(".pass-error");

  // Enter button
  document.body.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      loginBtn.click();
    }
  });
  //  Login Process
  loginBtn.onclick = (e) => {
    e.preventDefault();
    // Validation with email and password
    if (
      emailInput.value != "" &&
      emailInput.value.includes("@") &&
      emailInput.value == localStorage.getItem("email") &&
      passwordInput.value == localStorage.getItem("password")
    ) {
      location.href = "home.html";
    } else {
      loginForm.style.minHeight = "420px";
      if (emailInput.value == "") {
        emailError.textContent = "من فضلك ادخل ايميلك";
      } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "من فضلك ادخل ايميلك و تحتوي علي @";
      } else if (emailInput.value != localStorage.getItem("email")) {
        loginForm.style.minHeight = "400px";
        emailError.textContent = "الايميل غير موجود";
      } else {
        loginForm.style.minHeight = "400px";
        emailError.textContent = "";
      }

      if (passwordInput.value == "") {
        passwordError.textContent = "ادخل كلمة السر الخاصة بك";
      } else if (passwordInput.value != localStorage.getItem("password")) {
        passwordError.textContent = " كلمة السر الخاصة بك غير صحيحة";
      } else {
        loginForm.style.minHeight = "370px";
        passwordError.textContent = "";
      }
    }
  };
  //   Change Input
  let eyeIcon = document.querySelector(".eye-icon");
  eyeIcon.onclick = () => {
    if (eyeIcon.innerHTML === `<i class="fa-solid fa-eye"></i>`) {
      passwordInput.type = "text";
      eyeIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    } else if (eyeIcon.innerHTML === `<i class="fa-solid fa-eye-slash"></i>`) {
      passwordInput.type = "password";
      eyeIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
  };
}
if (page === "home.html") {
  //   bars
  let bars = document.querySelector(".bar");
  let nav = document.querySelector(".nav-menu-alt");
  bars.onclick = () => {
    if (bars.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
      nav.style.display = "block";
      bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
      nav.style.display = "none";
      bars.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  };
}
if (page === "about.html") {
  //   bars
  let bars = document.querySelector(".bar");
  let nav = document.querySelector(".nav-menu-alt");
  bars.onclick = () => {
    if (bars.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
      nav.style.display = "block";
      bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
      nav.style.display = "none";
      bars.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  };
}
if (page === "add.html") {
  let nameDonor = document.querySelector(".name-input");
  let citySelect = document.getElementById("city");
  let emailDonor = document.getElementById("email-input");
  let bloodGroup = document.querySelector(".blood-group");
  let phoneDonor = document.querySelector(".phone-donor");
  let addressDonor = document.querySelector(".address-donor");
  let cancelBtn = document.querySelector(".cancel");
  let radioGroup = document.querySelector(".radio-group");
  let saveBtn = document.querySelector(".save");
  let phoneError = document.querySelector(".phone-error");
  let addressError = document.querySelector(".address-error");
  let nameError = document.querySelector(".name-error");
  let emailError = document.querySelector(".email-error");
  let maleInput = document.querySelector(".male");
  let femaleInput = document.querySelector(".female");

  // Enter button
  document.body.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveBtn.click();
    }
  });

  //   bars
  let bars = document.querySelector(".bar");
  let nav = document.querySelector(".nav-menu-alt");
  bars.onclick = () => {
    if (bars.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
      nav.style.display = "block";
      bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
      nav.style.display = "none";
      bars.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  };

  citySelect.value = localStorage.getItem("city") || "قنا";
  emailDonor.value = localStorage.getItem("email") || "";
  bloodGroup.value = localStorage.getItem("bloodGroup") || "+A";

  if (localStorage.getItem("gender") == "male") {
    maleInput.checked = true;
  } else if (localStorage.getItem("gender") == "female") {
    femaleInput.checked = true;
  }

  radioGroup.onclick = (e) => {
    if (e.target.classList.value == "male") {
      localStorage.setItem("gender", "male");
    } else if (e.target.classList.value == "female") {
      localStorage.setItem("gender", "female");
    }
  };
  cancelBtn.onclick = (e) => {
    e.preventDefault();
    location.href = "home.html";
  };
  saveBtn.onclick = (e) => {
    e.preventDefault();
    if (
      nameDonor.value != "" &&
      phoneDonor.value.length == 11 &&
      addressDonor.value != "" &&
      emailDonor.value.includes("@") &&
      (phoneDonor.value.startsWith("012") ||
        phoneDonor.value.startsWith("011") ||
        phoneDonor.value.startsWith("010") ||
        phoneDonor.value.startsWith("015"))
    ) {
      let donor = {
        name: nameDonor.value,
        address: addressDonor.value,
        city: citySelect.value,
        phone: phoneDonor.value,
        email: emailDonor.value,
        gender: localStorage.getItem("gender"),
        bloodGroup: bloodGroup.value,
      };
      donors.push(donor);
      localStorage.setItem("donors", JSON.stringify(donors));

      // Refreshing data
      nameDonor.value = "";
      emailDonor.value = "";
      phoneDonor.value = "";
      addressDonor.value = "";

      location.href = "donors.html";
    } else {
      if (phoneDonor.value.length != 11) {
        phoneError.textContent = "ادخل رقم التليفون الخاص بك 11 رقم";
      } else if (
        !phoneDonor.value.startsWith("012") &&
        !phoneDonor.value.startsWith("011") &&
        !phoneDonor.value.startsWith("010") &&
        !phoneDonor.value.startsWith("015")
      ) {
        phoneError.textContent = "ادخل رقم التليفون الخاص بك بشكل صحيح";
      } else {
        phoneError.textContent = "";
      }
      if (addressDonor.value == "") {
        addressError.textContent = "ادخل العنوان الخاص بك";
      } else {
        addressError.textContent = "";
      }
      if (nameDonor.value == "") {
        nameError.textContent = "ادخل اسمك";
      } else {
        nameError.textContent = "";
      }
      if (emailDonor.value == "") {
        emailError.textContent = "من فضلك ادخل ايميلك";
      } else if (!emailDonor.value.includes("@")) {
        emailError.textContent = "من فضلك ادخل ايميلك و تحتوي علي @";
      } else {
        emailError.textContent = "";
      }
    }
  };
  cityRegister.onchange = () => {
    localStorage.setItem("city", cityRegister.value);
  };
  bloodGroup.onchange = () => {
    localStorage.setItem("bloodGroup", bloodGroup.value);
  };

  nameDonor.oninput = () => {
    localStorage.setItem("name", nameDonor.value);
  };
  phoneDonor.oninput = () => {
    localStorage.setItem("phone", phoneDonor.value);
  };
  addressDonor.oninput = () => {
    localStorage.setItem("address", addressDonor.value);
  };
}
if (page === "donors.html") {
  let cityFilter = document.getElementById("city-donors");
  let bloodGroupFilter = document.getElementById("blood-group-donors");
  let searchBtn = document.querySelector(".search-btn");
  let donorsList = document.querySelector(".donors");

  // Enter button
  document.body.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBtn.click();
    }
  });

  //   bars
  let bars = document.querySelector(".bar");
  let nav = document.querySelector(".nav-menu-alt");
  bars.onclick = () => {
    if (bars.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
      nav.style.display = "block";
      bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
      nav.style.display = "none";
      bars.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  };

  cityFilter.value = localStorage.getItem("cityFilter") || "الكل";
  bloodGroupFilter.value = localStorage.getItem("bloodGroupFilter") || "الكل";

  let newDonors = donors.map((donor) => {
    return `
        <div class="card">
          <div class="card-header">
          <div class="profile"> 
                <i class="fa-solid fa-circle-user"></i>
          </div>
          <span class="blood">${donor.bloodGroup}</span>
          </div>
          <div class="card-body">
          <h3>${donor.name}</h3>
          <h3>${donor.gender == "male" ? "ذكر" : "انثى"}</h3>
            <p class="address"><i class="fa-solid fa-location-dot"></i> ${donor.city} , ${donor.address}</p>
            <p class="phone"><i class="fa-solid fa-phone"></i> ${donor.phone}</p>
            <a href="mailto:${donor.email}" class="mail"><i class="fa-solid fa-envelope"></i> ${donor.email}</a>
          </div>
          <button class="contact-btn" onclick="location.href='tel:${donor.phone}'">تواصل معه</button>
        </div>
  `;
  });
  searchBtn.onclick = () => {
    let donorsFiltered = donors.filter((donor) => {
      if (cityFilter.value == "الكل" && bloodGroupFilter.value == "الكل") {
        return donor;
      } else if (
        cityFilter.value == "الكل" &&
        bloodGroupFilter.value != "الكل"
      ) {
        return donor.bloodGroup == bloodGroupFilter.value;
      } else if (
        cityFilter.value != "الكل" &&
        bloodGroupFilter.value == "الكل"
      ) {
        return donor.city == cityFilter.value;
      } else {
        return (
          donor.city == cityFilter.value &&
          donor.bloodGroup == bloodGroupFilter.value
        );
      }
    });
    let filteredHtml = donorsFiltered
      .map((donor) => {
        return `
        <div class="card">
          <div class="card-header">
          <div class="profile"> 
                <i class="fa-solid fa-circle-user"></i>
          </div>
          <span class="blood">${donor.bloodGroup}</span>
          </div>
          <div class="card-body">
          <h3>${donor.name}</h3>
          <h3>${donor.gender == "male" ? "ذكر" : "انثى"}</h3>
            <p class="address"><i class="fa-solidonor-location-dot"></i> ${donor.city} , ${donor.address}</p>
            <p class="phone"><i class="fa-solid fa-phone"></i> ${donor.phone}</p>
          </div>
          <button class="contact-btn" onclick="location.href='tel:${donor.phone}'">تواصل معه</button>
        </div>
      `;
      })
      .join("");

    if (filteredHtml === "") {
      donorsList.innerHTML =
        "<p class='donors-error'>لا يوجد متبرعين مطابقين للبحث</p>";
    } else {
      donorsList.innerHTML = filteredHtml;
    }
  };
  donorsList.innerHTML = newDonors.join("");

  cityFilter.onchange = () => {
    localStorage.setItem("cityFilter", cityFilter.value);
  };

  bloodGroupFilter.onchange = () => {
    localStorage.setItem("bloodGroupFilter", bloodGroupFilter.value);
  };
}
if (page === "details.html") {
  //   bars
  let bars = document.querySelector(".bar");
  let nav = document.querySelector(".nav-menu-alt");
  bars.onclick = () => {
    if (bars.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
      nav.style.display = "block";
      bars.innerHTML = `<i class="fa-solid fa-xmark" style="font-size: 30px;"></i>`;
    } else {
      nav.style.display = "none";
      bars.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  };
}
