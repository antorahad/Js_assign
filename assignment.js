function cubeNumber(number) {
    if (typeof number !== 'number') {
        let message = 'Please enter a valid number';
        return message;
    }
    else {
        let cube = number * number * number;
        return cube;
    }
}
function matchFinder(string1, string2) {
    if (typeof string1 !== typeof string2) {
        let message = 'please enter string input for result';
        return message;
    }
    else {
        let matchResult = string1.includes(string2);
        return matchResult;
    }
}
function sortMaker(arr) {
    let [firstItem, secondItem] = arr;
    if (typeof firstItem === 'number' && typeof secondItem === 'number') {
        if (firstItem === secondItem) {
            let equalMessage = "equal";
            return equalMessage;
        }
        else if (firstItem > 0 && secondItem > 0) {
            return [Math.max(firstItem, secondItem), Math.min(firstItem, secondItem)];
        }
        else {
            let invalidMessage = "Invalid Input";
            return invalidMessage;
        }
    }
    else {
        let invalidMessage2 = "Invalid Input";
        return invalidMessage2;
    }
}
function findAddress(obj) {
    let sttr = '';
    for (let key in obj) {
        let value = obj[key];
        if (value === undefined || value === null || value === '') {
            sttr += '__,';
        } else {
            sttr += value + ',';
        }
    }
    let result = sttr.slice(0, -1);
    return result;
}


