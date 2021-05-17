const defaultArr2 = [1, 4, 2, 3, 5];

function sum2TopNum(array) {
    var max1 = 0;
    var max2 = 0;
    var result2 = 0;

    if (array) {
        array.sort();

        max1 = array.pop();
        max2 = array.pop();
    }

    return result2 = max1 + max2;
}

document.getElementById('default-array2').innerHTML = defaultArr2;
document.getElementById('result2').innerHTML = sum2TopNum(defaultArr2);