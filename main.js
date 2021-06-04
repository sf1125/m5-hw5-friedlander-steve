var pizza = {
    crust: "medium-crispy",
    cheese: "mozzarella",
    sauce: "tomato",
    addToppings: function() {
        console.log("Please add pepperoni and sausage");
    }
};

function orderPizza(pizza){
    console.log(pizza.crust);
    console.log(pizza.cheese);
    console.log(pizza.sauce);
    pizza.addToppings();
}

orderPizza(pizza);



// var a = 5;
// var b = 8;

// function example(x, y) {
//     return x + y;
// }

// var z = example(a, b);

// console.log(z);

// var c = 2;
// var d = 9;
// var e = example(c, d);

// console.log(e);

// var f = example(3, 7);
// console.log(f);





