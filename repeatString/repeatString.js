const repeatString = function(message, number) {
    if (number < 0) return 'ERROR';
    let res = '';
    for (let i = 0; i < number; i++){
        res += message;
    }
    return res;
}
module.exports = repeatString
