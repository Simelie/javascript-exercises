const removeFromArray = function(array, ...element) {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < element.length; j++){
            if (array[i] === element[j]){
                array.splice(i, 1);
                i = 0;
            }
        }
    }
    return array;
}

module.exports = removeFromArray
