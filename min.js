const price = [1000, 3000, 5000, 10000, 500, 3000, 200]

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const cheap = getMin(price);
console.log("the cheapest price is", cheap);

//----------------------------------------------
//another process to find min or lowest or cheapest value.

const mobile = [
    { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
    { name: "oppo", price: 15000, camera: "12mp", color: "white" },
    { name: "nokia", price: 25000, camera: "10mp", color: "red" },
    { name: "apple", price: 10000, camera: "5mp", color: "blue" },
    { name: "vivo", price: 50000, camera: "20mp", color: "green" },
    { name: "xaime", price: 40000, camera: "12mp", color: "purple" },
    { name: "oneplus", price: 60000, camera: "20mp", color: "orange" }
    
    
]

function getCheapestPhone(mobile) {
    let min =mobile[0]
    for (const mob of mobile) {
        if (mob.price < min.price) {
            min = mob;
            
        }

    
    }
    return min;
}

const cheap2 = getCheapestPhone(mobile);
console.log("cheapest phone is:", cheap2);

