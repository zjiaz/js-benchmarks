var runString;
if (typeof runString !== "function") {
    if (typeof newGlobal === "function") {
        runString = function() {
            var g = newGlobal();
            g.loadString = g.evaluate;
            return g;
        };
    } else {
        runString = function() {
            var r = Realm.createAllowCrossRealmAccess();
            var g = Realm.global(r);
            g.loadString = s => Realm.eval(r, s);
            return g;
        };
    }
}

var readFile;
if (typeof readFile !== "function") {
    readFile = read;
}

// Choose specific tests, or run all of them.
// var testList = ["pdfjs"];
