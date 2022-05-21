var show = /** @class */ (function () {
    function show(firstname) {
        this.firstname = firstname;
    }
    show.get = function () {
        if (this.child == null) {
            this.child = new show("lolla");
        }
        return this.child;
    };
    show.child = null;
    return show;
}());
var first = show.get();
console.log(first);
var sec = show.get();
console.log(first == sec);
