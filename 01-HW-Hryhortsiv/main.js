const chargerPrice = 15.678;
const phonePrice = 123.965;
const headphonePrice = 90.2345;

const maxPrice = Math.max(chargerPrice, phonePrice, headphonePrice);
console.log ("max price - " + maxPrice);

const minPrice = Math.min(chargerPrice, phonePrice, headphonePrice);
console.log ("min price - " + minPrice);

const totalSum= chargerPrice + phonePrice + headphonePrice;
console.log (`total price - ${totalSum}`);

const totalSumInteger = Math.floor(chargerPrice) + 
Math.floor(phonePrice) + Math.floor(headphonePrice);
console.log (`sum integer - ${totalSumInteger}`);

const totalSumRounded = Math.round(totalSumInteger/100)*100;
console.log ("rounded sum - " + totalSumRounded);

const buleanValue = (totalSumInteger) % 2;
console.log (buleanValue === 0);

const customerPayment = 500;
console.log (`change - ${customerPayment - totalSum}`);

const midPrice = ((totalSum / 3).toFixed(2));
console.log ("medium price - "+ midPrice);

const discountRandom = ((Math.random()* 100).toFixed(2));
console.log ("customers discount - " + discountRandom + "%");

const price4Customer = ((totalSum * (discountRandom / 100)).toFixed(2));
const netProfit = (((totalSum / 2) - 
(totalSum - (totalSum - price4Customer))).toFixed(2));
console.log ("net profit - " + netProfit);

document.writeln(`
1. Максимальна ціна:  ${maxPrice}; <br> 
2. Мінімальна ціна:  ${minPrice}; <br> 
3. Сума всіх товарів:  ${totalSum}; <br> 
4. Сума всіх товарів без копійок:  ${totalSumInteger}; <br>
5. Сума товарів округлена до сотен:  ${totalSumRounded}; <br> 
6. Чи є сума парним числом?  ${buleanValue === 0}; <br>
7. Решта с 500:  ${customerPayment - totalSum}; <br>
8. Середнє значення цін: ${midPrice}; <br>
9. Чистий прибуток: ${netProfit} `)