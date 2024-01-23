// Урок 3. Промисы. Хранилище
// Создайте интерактивную веб-страницу для оставления и
// просмотра отзывов о продуктах. Пользователи могут добавлять
// отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с
//  отзывом, данный отзыв удаляется из LocalStorage).

document.getElementById("addReviewButton").addEventListener("click", addReview); //Функция срабатывает при нажатии на элемент "addReviewButton"
window.onload = loadReviews; //поддерживается наиболее широко,выполнение скрипта после загрузки(просмотр загрузки)
function addReview() {
  //добавить отзыв
  const productName = document.getElementById("productNameInput").value.trim(); //извлекает значения, введенные в поле "productNameInput"(ввести название продукта) и обреезает все пробелы
  const reviewText = document.getElementById("reviewInput").value.trim(); ////извлекает значения, введенные в поле "reviewInput"(ввести отзыв) и обреезает все пробелы
  if (!productName || !reviewText) {
    //проверяем,заполнены ли все поля  productName(название продукта) и reviewText(отзыв о продукте)
    alert("Необходимо заполнить все поля."); //вывод сообщения,если что то пошло не так
    return;
  }

  let reviews = JSON.parse(localStorage.getItem("reviews")) || {}; //при наличии всех заполненных полей функция извлекает
  // существующие отзывы из localStorage и сохраняет их в переменной reviews.

  if (!reviews[productName]) {
    //Если по указанному названию товара нет отзывов,
    reviews[productName] = []; //  создается новый пустой массив.
  }

  reviews[productName].push(reviewText); // Затем текст отзыва добавляется в массив.

  localStorage.setItem("reviews", JSON.stringify(reviews)); //обновленный объект отзывов сохраняется в localStorage
  loadReviews(); //вызывается функция для обновления отображаемых отзывов

  document.getElementById("productNameInput").value = ""; //поле ввода productNameInput очищается
  document.getElementById("reviewInput").value = ""; //поле ввода reviewInput очищается
}
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || {}; //извлекает отзывы из localStorage и сохраняет их в переменной reviews
  //если отзывов нет, создается пустой объект.
  document.getElementById("productsList").innerHTML = "";
  Object.keys(reviews).forEach((productName) => {
    //Для каждого названия товара в объекте reviews
    const productDiv = document.createElement("div"); //создается новый элемент
    productDiv.className = "product"; //и присваивается класс "product"
    productDiv.innerHTML = `${productName}`; //присваивается имя продукта.
    reviews[productName].forEach((review, index) => {
      //ля каждого отзыва, связанного с товаром,
      const reviewDiv = document.createElement("div"); //создается новый элемент
      reviewDiv.className = "review"; //которому присваивается класс review
      reviewDiv.innerHTML = `${review};Удалить`;
      productDiv.appendChild(reviewDiv); //к продукту добавляем отзыв
    });
    productsList.appendChild(productDiv); //с список продуктов добавляем отзыв о продукте
  });
}
function deleteReview(productName, reviewIndex) {//удаление конкретного отзыва.
  // принимает два параметра: название товара и индекс отзыва в массиве отзывов об этом товаре.
  const reviews = JSON.parse(localStorage.getItem("reviews")) || {}; //извлекает отзывы из localStorage и сохраняет их в переменной.
  reviews[productName].splice(reviewIndex, 1); //Конкретный отзыв удаляется из массива.
  if (reviews[productName].length === 0) {//Если на товар больше нет отзывов,
    delete reviews[productName]; //товар удаляется из объекта отзывов.
  }
  localStorage.setItem("reviews", JSON.stringify(reviews)); //обновленный объект отзывов сохраняется в localStorage
  loadReviews(); //вызывается функция для обновления отображаемых отзывов
}
