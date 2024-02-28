let cars_prices = [4000,90000,20000,14000,7000,30000,18000,45000,36000]

let from = +prompt('summa ot') // 10000
let to = +prompt('summa do') // 20000


let price = cars_prices.filter( el => el >= from && el<= to).sort((a,b) => a - b )


if (price.length > 0) {
    alert(`вам доступны ${price}`)
}else{
    alert(`напишите сумму "от" например 0`)
}
