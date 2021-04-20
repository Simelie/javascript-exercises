const sumAll = function(start, end) {
    if ((start < 0 || end < 0) || (typeof(start) != 'number' || typeof(end) != 'number')) return 'ERROR';
    if (start > end){
        temp = start;
        start = end;
        end = temp;
    }
    let sum = 0;
    for (i = start; i <= end; i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll
