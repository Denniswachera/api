
document.querySelector('#submit').addEventListener('click', () => {
    let date = new Date();
    let year = date.getFullYear();
    const age = parseFloat(document.querySelector('#text').value);
    let sum = year - age;
       
    if ( sum <= 12) {
        sum = `You are ` + sum +` years old hence you are a Child`;
    }

    if ( sum <= 19 && sum >= 13) {
        sum = `You are ` + sum + ` years old hence you are still Teenager`;
    }

    if ( sum <= 28 && sum >= 20) {
        sum = `You are ` + sum + ` years old hence you are a Youthful person`;
    }

    if (sum >= 29) {
        sum = `You are ` + sum + ` years old hence you are an Adult`;
    }

    const result = document.querySelector('#result');
    result.innerHTML = sum;
    

},false);

function sum (a, b, c) {
    let total = a + b + c;

    if ( total < 50) {
        total = `Sum is less than 50`;
    }
return total;    
}

console.log(sum(20, 14, 6));
function shoppingList(e) {
    e.preventDefault();
    const item = document.createElement('h2');

    const data = document.querySelector('#data').value;


    const newItem = document.createTextNode(data);

    item.appendChild(newItem);


    const display = document.querySelector('#display-list');

    document.body.insertBefore(item, display);

  }


const form = document.querySelector('#form');

form.addEventListener('submit', shoppingList, false);

function alertMe () {
    alert(2 + 2);
};

alertMe();
