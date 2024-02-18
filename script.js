let cislo = Number(prompt("Zadejte číslo teploty ve stupnici Fahrenheit"))
let celsius = (cislo - 32) * 5 /  9

console.log(celsius)
document.body.innerHTML = celsius
