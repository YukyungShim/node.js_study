function first() {
    second();
    console.log('첫 번째');
}
function second() {
    third();
    console.log('첫 번째');
}
function third() {
    first();
    console.log('첫 번째');
}
