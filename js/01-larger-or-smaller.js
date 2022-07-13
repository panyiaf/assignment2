let firstInteger = Number(prompt('Insert a number'));
let secondInteger = Number(prompt('Insert another number'));

if (firstInteger > secondInteger) {
    document.write('The bigger number is: ' + firstInteger);
} else if (firstInteger < secondInteger) {
    document.write('The bigger number is: ' + secondInteger);
} else if (firstInteger === secondInteger) {
    document.write('The numbers are the same: ' + firstInteger);
}
else {
    document.write('You did not provide proper numbers. Please try again.');
}