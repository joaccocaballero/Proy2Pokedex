
export const addZero = (num, size) => {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

export function toPascalCase(text) {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

export function clearAndUpper(text) {
    return text.replace(" ").toUpperCase();
}


export function sortByTrash(x, y) {
    const number1 = parseInt(x.id, 10)
    const number2 = parseInt(y.id, 10)
    if (number1 < number2) {return -1;}
    if (number1 > number2) {return 1;}
    return 0;
}

export function sortByName(x, y) {
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}


