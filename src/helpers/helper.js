
export const addZero = (num, size) => {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

export const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');


