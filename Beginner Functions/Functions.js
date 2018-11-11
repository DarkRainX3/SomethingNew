cel.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("convertButton").click();
    }
});
fah.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("convertButton").click();
    }
});
var area = function() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);
    var output = document.getElementById('output');
    if(isNaN(base) || isNaN(height)){
        output.textContent = "you did not enter 2 numbers.";
    } else {
        var area = 0.5 * base * height;
        output.textContent = "Area = " + area;
    }
};
var convert = function() {
    var cel = parseFloat(document.getElementById('cel').value);
    var fah = parseFloat(document.getElementById('fah').value);
    var output = document.getElementById('conversion');
    celField = document.getElementById('cel');
    fahField = document.getElementById('fah');
    if (isNaN(fah)&& !isNaN(cel)) {
        output.textContent = cel+" C = "+((cel*9/5)+32) + " F";
        celField.value = "";
    }
    else if (isNaN(cel)&& !isNaN(fah)) {
        output.textContent = fah+" F = "+((fah - 32)*5/9)+ " C";
        fahField.value = "";
    }
    else {
        output.textContent = " Only Fill in 1 field or enter valid numbers"
    }
}
