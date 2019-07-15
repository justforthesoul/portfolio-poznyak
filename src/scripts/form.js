class Validate {
  constructor() {
    this.form = "js-form";
    this.name = "js-name";
    this.email = "js-email";
    this.message = "js-message";
    this.sendBtn = "js-send-btn";
    this.block = "js-block";
    this.errorBlock = "js-error-block";

    this.errorClass = "js-has-error";
    this.emptyErrorMessage = "Поле не может быть пустым";
    this.incorrectEmailMessage = "Некорректный email адрес";

    this.isFieldCorrect = {
      name: false,
      mail: false,
      message: false
    };
  }

  init() {
    this._initElements();
    this._bindEvents();
  }

  _initElements() {
    this.$form = document.querySelector(`.${this.form}`);
    this.$name = this.$form.querySelector(`.${this.name}`);
    this.$inputName = this.$name.querySelector("input");
    this.$email = this.$form.querySelector(`.${this.email}`);
    this.$inputEmail = this.$email.querySelector("input");
    this.$message = this.$form.querySelector(`.${this.message}`);
    this.$inputMessage = this.$message.querySelector("textarea");
    this.$sendBtn = this.$form.querySelector(`.${this.sendBtn}`);
  }

  _bindEvents() {
    this.$sendBtn.addEventListener("click", e => {
      e.preventDefault();
      const isFormFullField = this.checkForm();
      const name = this.$inputName.value;
      const mail = this.$inputEmail.value;
      const comment = this.$inputMessage.value;

      let formData = new FormData();

      formData.append("name", name);
      formData.append("to", mail);
      formData.append("comment", comment);

      if (isFormFullField) {
        fetch(`https://webdev-api.loftschool.com/sendmail`, {
          method: "POST",
          body: formData,
          mode: "no-cors"
        })
          .then(responce => {
            return responce.json();
          })
          .then(info => {
            return info.message;
          })
          .then(message => {
            this.showModal(message);
            this.$form.reset();
          })
          .catch(() => {
            this.showModal("Что-то пошло не так.");
          });
      }
    });

    this.$inputName.addEventListener("change", e => {
      this.inputChangeHandler(e, "name");
    });

    this.$inputEmail.addEventListener("change", e => {
      const isValidEmail = e.target.checkValidity();
      const emailString =
        "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$";
      const regEmail = new RegExp(emailString, "u");

      if (isValidEmail && regEmail.test(this.$inputEmail.value)) {
        this.inputChangeHandler(e, "mail");
      } else if (!isValidEmail || !regEmail.test(this.$inputEmail.value)) {
        this.showErrorMessage(e.target, this.incorrectEmailMessage);
      }
    });

    this.$inputMessage.addEventListener("change", e => {
      this.inputChangeHandler(e, "message");
    });
  }

  inputChangeHandler(e, InputName) {
    if (e.target.value.length) {
      this.isFieldCorrect[InputName] = true;
      this.removeErrorMessage(e.target);
    } else {
      this.isFieldCorrect[InputName] = false;
      this.showErrorMessage(e.target, this.emptyErrorMessage);
    }
  }

  checkForm() {
    let result = true;

    if (!this.isFieldCorrect.name) {
      this.showErrorMessage(this.$inputName, this.emptyErrorMessage);
    }
    if (!this.$inputEmail.value.length) {
      this.showErrorMessage(this.$inputEmail, this.emptyErrorMessage);
    }
    if (!this.isFieldCorrect.message) {
      this.showErrorMessage(this.$inputMessage, this.emptyErrorMessage);
    }
    for (const field in this.isFieldCorrect) {
      if (
        {}.hasOwnProperty.call(this.isFieldCorrect, field) &&
        !this.isFieldCorrect[field]
      ) {
        result = false;
        break;
      }
    }
    return result;
  }

  showErrorMessage(element, message) {
    const parentFormBlock = element.closest(`.${this.block}`);
    const massageElement = parentFormBlock.querySelector(`.${this.errorBlock}`);
    massageElement.innerText = "";
    massageElement.classList.add(this.errorClass);
    massageElement.innerText = message;
  }

  removeErrorMessage(element) {
    const el = element
      .closest(`.${this.block}`)
      .querySelector(`.${this.errorBlock}`);
    el.classList.remove(this.errorClass);
  }

  showModal(message) {
    const cotainer = document.querySelector(".wrapper");
    const popup = document.createElement("div");

    popup.classList.add("popup");

    let innerDiv = document.querySelector("#form-popup").innerHTML;
    popup.innerHTML = innerDiv;

    cotainer.appendChild(popup);

    let popupText = document.querySelector(".popup__text");
    popupText.innerHTML = message;

    const popupBtn = document.querySelector(".popup__btn");
    popupBtn.focus();

    const generatedPopap = document.querySelector(".popup");

    popupBtn.addEventListener("click", function() {
      cotainer.removeChild(generatedPopap);
    });

    window.addEventListener("keydown", function(e) {
      if (e.keyCode === 27) {
        e.preventDefault();
        cotainer.removeChild(generatedPopap);
      }
    });

  }
}

export default Validate;
