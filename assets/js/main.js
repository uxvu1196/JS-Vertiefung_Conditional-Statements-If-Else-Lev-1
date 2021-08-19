function adult() {
    let age = document.getElementById("age").value
    console.log(age)

    if (age >= 18) {
        console.log(true);
        document.getElementById("result").innerHTML = "Volljährig";
    } else {
        console.log(false);
        document.getElementById("result").innerHTML = "Minderjährig";
    }
}

/* KLAUS SHORTVERSION
// CodeFlow Übung lev1_1: conditional-statements punkten
function adult() {
    let age = document.getElementById("age").value;
    document.getElementById("result").innerHTML = age >= 18 ? "volljaehrig" : "minderjaehrig";
} 
*/
function greaterThan() {
    let age = document.getElementById("input").value

    if (age >= 18) {
        console.log(true)
        document.getElementById("result2").innerHTML = "Ja. Du kannst Shisha rauchen";
    } else {
        console.log(false)
        document.getElementById("result2").innerHTML = "Du darfst noch nicht Shisha rauchen";
    }
}

/* KLAUS SHORTVERSION
function greaterThan() {
    let age = document.getElementById("input").value;
    let result = document.getElementById("result2");
    result.innerHTML = (age >= 18 ? "Ja. Du darfst Shisha rauchen" : "Du darfst noch nicht Shisha rauchen");
} 
*/
