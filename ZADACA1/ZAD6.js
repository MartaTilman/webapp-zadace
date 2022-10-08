var x = 23
var y = 1
if (x <= 1000 && x >= 0) {
    for (let index = 1; index <= x; index++) {
        if (index % 7 == 0) {
            y *= index
        }
    }

    console.log(x, "->", y)
}