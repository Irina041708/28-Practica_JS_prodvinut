// Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
//  введенное значение должно содержать от 3 до 10 символов.

// Создайте HTML-структуру с текстовым полем, кнопкой и списком.
// Напишите функцию, которая будет добавлять элементы в список или генерировать
// исключение, если длина введенного значения не соответствует требованиям.

const userInputElement = document.querySelector(".user-input");
const buttonElement = document.querySelector(".add-button");
const listElement = document.querySelector(".item-list");
const errorElement = document.querySelector(".error-message");

buttonElement.addEventListener("click", () => {
  try {
    if (
      userInputElement.ariaValueMax.length > 10 ||
      userInputElement.ariaValueMax.length < 3
    ) {
      throw new Error(`Длина введенного значения не соответствует требованиям`);
    }
    const li = document.createElement("li");
    li.textContent = userInputElement.value;
    listElement.appendChild(li);
  } catch (error) {
    errorElement.textContent = error.message;
  } finally {
    console.log("Попытка была хороша");
  }
});
