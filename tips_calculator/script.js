
const dom = {
    bill: document.getElementById("bill-before-tip"),
    tipsContainer: document.getElementsByClassName("select-tip-contaner"),
    fivePercentTip: document.getElementsByClassName("five-percent-tip"),
    tenPercentTip: document.getElementsByClassName("ten-percent-tip"),
    fiftheenPercentTip: document.getElementsByClassName("fiftheen-percent-tip"),
    twentyfivePercentTip: document.getElementsByClassName("twentyfive-percent-tip"),
    fiftyPercentTip: document.getElementsByClassName("fifty-percent-tip"),
    customPercentTip: document.getElementsByClassName("custom-percent-tip"),
    numberOfPeople: document.getElementById("number-of-people"),
    amountByPerson: document.getElementsByClassName("amount-by-person-actual"),
    amountTotal: document.getElementsByClassName("amount-total-actual"),
    resetBtn: document.getElementsByClassName("reset-btn"),
    emptyFieldBill: document.getElementsByClassName("empty-field-msg-bill"),
    emptyFieldPeople: document.getElementsByClassName("empty-field-msg-people"),

}



dom.fivePercentTip[0].addEventListener("click", function () {
    tips.push(5)
})
dom.tenPercentTip[0].addEventListener("click", function () {
    tips.push(10)
})

dom.fiftheenPercentTip[0].addEventListener("click", function () {
    tips.push(15)
})

dom.twentyfivePercentTip[0].addEventListener("click", function () {
    tips.push(25)
})

dom.fiftyPercentTip[0].addEventListener("click", function () {
    tips.push(50)
})


const tips = []
console.log(tips);

var currentBill;
let getcurrentBill = function () {
    currentBill = dom.bill.value
}

dom.bill.addEventListener("change", getcurrentBill())

var customerTip;
let getCurrenCustomertInputValue = function () {
    customerTip = dom.customPercentTip[0].value

}
dom.customPercentTip[0].addEventListener("change", getCurrenCustomertInputValue())

var numberOfPeople;
let getCurrentNumberOfPeople = function () {
    numberOfPeople = dom.numberOfPeople.value
}

dom.numberOfPeople.addEventListener("change", getCurrentNumberOfPeople())

function calculateAmountByPerson(bill, customerTip, people, tip) {
    if (bill === undefined || null) {
        console.log(`undefined current bill`);
    }
    console.log(bill);
    console.log(people);
    tip=0
    tip= tips[0]


    let result = (bill / people) * tip

    dom.amountByPerson[0].innerHTML = result
}

calculateAmountByPerson(currentBill, customerTip, numberOfPeople, tips)