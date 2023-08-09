function cubeNumber(number) {
    if (typeof number !== 'number') {
        let message = 'Please enter a valid number';
        return message;

    }
    else {
        let cubeResult = number * number * number;
        return cubeResult;
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


