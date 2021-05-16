const defaultArr1 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];

// get all different string's length
function getStringLengthArr(array) {
    var stringLengthArr = [];

    if (array) {
        for (a of array) {
            if (!stringLengthArr.includes(a.length)) {
                stringLengthArr.push(a.length);
            };
        };
    }

    return stringLengthArr;
}

// find the string’s length that appear most in this array
function findMostAppearLength(array, lengthArr) {
    var max = 0;
    var stringLength = 0;

    if (lengthArr && array) {
        for (a of lengthArr) {
            let count = 0;

            for (b of array) {
                if (b.length == a) {
                    count++;
                };
            };

            if (count > max) {
                max = count;
                stringLength = a;
            };
        };
    }

    return stringLength;
}

// find all elements with given string's length
function getElementWithLength(array) {
    var result = [];

    var lengthArr = getStringLengthArr(array);
    var mostAppearLength = findMostAppearLength(array, lengthArr);

    if (array && mostAppearLength) {
        for (a of array) {
            if (a.length == mostAppearLength) {
                result.push(a);
            }
        }
    }

    return result;
}

document.getElementById('default-array1').innerHTML = defaultArr1;
document.getElementById('result1').innerHTML = getElementWithLength(defaultArr1);