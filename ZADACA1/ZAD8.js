var a = {
    x: 1,
    y: 2,
    z: 3
}

var b = {
    x: 123,
    y: 3,
    z: 1
}

var c = function (a, b) {
    var Alen = Object.keys(a).length
    var Blen = Object.keys(b).length

    if (Alen == Blen) {
        return Object.keys(a).every(
            key => b.hasOwnProperty(key) && b[key] == a[key]
        );
    }
    return false
}
console.log(c(a, b))