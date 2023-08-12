import FormValidator from "./FormValidator.js";

const formValidator = new FormValidator("#claim-trial");
formValidator.register("#firstName", (value, inputField) => {
  if (value.length > 0 && value.length <= 30) {
    inputField.classList.remove("error");
    return {
      pass: true,
      error: "",
    };
  } else {
    inputField.classList.add("error");
    return {
      pass: false,
      error:
        value === "" ? "First Name cannot be empty" : "First Name is too long",
    };
  }
});

formValidator.register("#lastName", (value, inputField) => {
  if (value.length > 0 && value.length <= 30) {
    inputField.classList.remove("error");
    return {
      pass: true,
      error: "",
    };
  } else {
    inputField.classList.add("error");
    return {
      pass: false,
      error:
        value === "" ? "Last Name cannot be empty" : "Last Name is too long",
    };
  }
});

formValidator.register("#email", (value, inputField) => {
  if (value !== "" && inputField.checkValidity()) {
    inputField.classList.remove("error");
    return {
      pass: true,
      error: "",
    };
  } else {
    inputField.classList.add("error");
    return {
      pass: false,
      error: value === "" ? "Email cannot be empty" : "Email invalid",
    };
  }
});

formValidator.register("#password", (value, inputField) => {
  const regex =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (value !== "" && regex.test(value)) {
    inputField.classList.remove("error");
    return {
      pass: true,
      error: "",
    };
  } else {
    inputField.classList.add("error");
    return {
      pass: false,
      error:
        value === ""
          ? "Password cannot be empty"
          : "Password not valid (Mayus, number, special char, 8 chars long)",
    };
  }
});
