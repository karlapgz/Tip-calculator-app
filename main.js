// inputs
let inputBill = document.getElementById("bill-id"),    
    inputPeople = document.getElementById("num-people");

// people
let buttonsTip = document.querySelectorAll(".btn-tip"),
    buttonCustom = document.querySelector(".btn-custom");
 
// total tip - person
let amount = document.querySelector(".total-tip"),
    totalPerson = document.querySelector(".total");

// btn reset
let btnReset = document.querySelector(".reset");

// tip variables
let tip = 0,
    tipCustom = 0,
    btnTip = 0;

selectTip();

btnReset.addEventListener('click', () => {
    tipCustom = buttonCustom.value;
    bill = Number(inputBill.value),
    people = inputPeople.value;

    if(btnTip === 1) {
        tip = tipCustom / 100;
    }

    let porcentage = bill * tip;
    let tipPerson = porcentage / people;
    let total = (bill + porcentage) / people;

    amount.textContent = tipPerson.toFixed(2);
    totalPerson.textContent = total.toFixed(2);
});

/******* funciones *******/

function selectTip() {
    buttonsTip.forEach(button => {
        button.addEventListener('click', (e) => {
            let btn = e.currentTarget.classList;
            if(btn.contains('5')) {
                tip = .05;
                btnTip = 0;
            } else if(btn.contains('10')) {
                tip = .10;
                btnTip = 0;
            } else if(btn.contains('15')) {
                tip = .15;
                btnTip = 0;
            } else if(btn.contains('25')) {
                tip = .25;
                btnTip = 0;
            } else if(btn.contains('50')) {
                tip = .50;
                btnTip = 0;
            } else {
                btnTip = 1;
            }
        });
    });
}
