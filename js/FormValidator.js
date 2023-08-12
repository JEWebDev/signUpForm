export default class FormValidator {
  constructor(selectedForm) {
    this.form = document.querySelector(selectedForm);
    this.inputsWithErrors = new Set();

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!this.hasErrors) {
        this.form.submit();
      }
    });
  }
  get hasErrors() {
    return this.inputsWithErrors.size > 0;
  }
  register(selectedInput, validation) {
    const inputField = this.form.querySelector(selectedInput);
    const errorElement = inputField
      .closest(".input-group")
      .querySelector(".input__error");
    const evaluate = (hideErrors) => {
      const { pass, error } = validation(inputField.value, inputField);
      if (hideErrors) {
        inputField.classList.remove("error");
      }
      if (!hideErrors) {
        errorElement.textContent = error || "";
      }
      if (!pass) {
        this.inputsWithErrors.add(inputField);
      } else {
        this.inputsWithErrors.delete(inputField);
      }
    };

    inputField.addEventListener("focusout", () => evaluate(false));
    evaluate(true);
  }
}
