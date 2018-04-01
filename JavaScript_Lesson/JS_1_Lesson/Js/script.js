mainList = {
budget,
shopName,
shopGoods: [0],
employers: {},
open: true
}

var budget = prompt("Ваш бюджет?");
var shopName = prompt("Название вашего магазина?");

for (let i = 0; i < 3; i++) {

	let a = prompt ("Какой тип товаров будем продавать?")

	{
		mainList.shopGoods[i] = a;
	}
}

var daybudget = budget/30;

alert("Бюджет на один день:" + daybudget);

console.log(mainList);









