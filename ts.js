var myModule;
(function (myModule) {
    var User = (function () {
        function User(id) {
            this.id = id;
        }
        User.prototype.get = function () {
            return this.id;
        };
        return User;
    })();
    myModule.User = User;
})(myModule || (myModule = {}));
var user = new myModule.User(5);
console.log(user.get());
//# sourceMappingURL=ts.js.map