let shoppingList = [
  {name: "Хліб", price: 30, quantity: 0, bought: false, total: 0},
  {name: "Бухло", price: 500, quantity: 0, bought: false, total: 0},
  {name: "Сіль", price: 10, quantity: 0, bought: false, total: 0},
  {name: "Молоко", price: 50, quantity: 0, bought: false, total: 0},
  {name: "Сир", price: 70, quantity: 0, bought: false, total: 0},
  {name: "Вода", price: 10, quantity: 0, bought: false, total: 0},
  {name: "Чпси", price: 35, quantity: 0, bought: false, total: 0},
];

let tableRows = document.querySelectorAll("#shopping-list tbody tr");

function calculateTotal() {
  let totalCost = 0;
  shoppingList.forEach((item, index) => {
      let row = tableRows[index];
      item.quantity = parseInt(row.querySelector(".quantity").value);
      item.bought = row.querySelector(".bought").checked;
      item.total = item.price * item.quantity;
      row.querySelector(".total").textContent = item.total + " грн";
      totalCost += item.total;
  });
  return totalCost;
}

function displayShoppingList() {
  calculateTotal();
  let shoppingListString = "";
  shoppingList.forEach((item) => {
      if (item.bought) {
          shoppingListString += item.quantity + " x " + item.name + ": " + item.total + " грн\n";
      }
  });
  shoppingListString += "Вартість: " + calculateTotal() + " грн";
  alert(shoppingListString);
}

function sortShoppingList() {
  shoppingList.sort((a, b) => {
      if (a.name < b.name) {
          return -1;
      } else if (a.name > b.name) {
          return 1;
      } else {
          return 0;
      }
  });
  calculateTotal();
}