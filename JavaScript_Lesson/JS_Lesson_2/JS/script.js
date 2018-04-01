mainList = {
budget,
shopName,
shopGoods: [],
employers: {},
open: true
}

var budget = prompt("Ваш бюджет?");
var shopName = prompt("Название вашего магазина?");

for (let i = 0; i < 3; i++) {

	let a = prompt ("Какой тип товаров будем продавать?")
		mainList.shopGoods[i] = a;
}

//let i = 0;
//while (i < 3) {
//	i++;
//	let a = prompt ("Какой тип товаров будем продавать?")
//		mainList.shopGoods[i] = a;
//}

//let i = 0;
//do {
//	console.log(i);
//	i++;
//	let a = prompt ("Какой тип товаров будем продавать?")		
//		mainList.shopGoods[i] = a;
//}
//	while (i<3);

var daybudget = budget/30;

alert("Бюджет на один день:" + daybudget);

console.log(mainList);









