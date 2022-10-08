var b = 125

function sati(x) {
    var a = x / 60
    var d = Math.floor(a);
    var c = x % 60
    console.log("Ovo je", d, "sata i ", c, "minuta")
}
sati(b)