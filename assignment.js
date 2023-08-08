function cubeNumber(number) {
    if (typeof number !== 'number') {
        let message = 'Please enter a valid number';
        return message;

    }
    else {
        let cubeResult = Math.abs(number * number * number);
        return cubeResult;
    }
}

function matchFinder(string1, string2) {
    if (string2.length == 0) {
        return true;
    }
    if (string1.length == 0) {
        return false;
    }
    if (typeof string1 !== typeof string2) {
        let message = 'Please enter a string';
        return message;
    }
    if (string1[0] == string2[0]) {
        let matchOne = matchFinder(string1.substring(1), string2.substring(1));
        return matchOne;
    }
    else {
        let matchTwo = matchFinder(string1.substring(1), string2);
        return matchTwo;
    }
}


