// Определение массива для хранения продуктов

const shoppingList = {};

// Функция для добавления продукта в список

function addProduct() {

const productInput = document.getElementById("productInput");

const product = productInput.value.trim();

if (product) {

    if (shoppingList[product]) {
    
    shoppingList[product] += 1;
    
    } else {
    
    shoppingList[product] = 1;
    
    }
    
    productInput.value = "";
    
    displayShoppingList();
    
    }
    
    }

// Функция для отображения списка покупок

function displayShoppingList() {

const shoppingListContainer = document.getElementById("shoppingList");

shoppingListContainer.innerHTML = "";

shoppingList.forEach((product, index) => {

const listItem = document.createElement("li");

listItem.textContent = `${product} (Количество: 1)`;

const deleteButton = document.createElement("button");

deleteButton.textContent = "Удалить";

deleteButton.onclick = () => removeProduct(index);

listItem.appendChild(deleteButton);

shoppingListContainer.appendChild(listItem);

});

}

// Функция для удаления продукта из списка

function removeProduct(index) {

shoppingList.splice(index, 1);

displayShoppingList();

}