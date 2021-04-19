const reverseString = function(message) {
    let res = '';
    for (let i = message.length - 1; i >= 0; i--){
        res += message[i];
    }
    return res;
}

module.exports = reverseString
