function cammelCase(s) {
    return s.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}

console.log(cammelCase("Ja ide na faks u Puli."));
