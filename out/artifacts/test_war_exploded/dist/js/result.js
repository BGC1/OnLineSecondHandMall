webpackJsonp([11], {
    0: function (t, n, c) {
        t.exports = c(50)
    },
    9: function (t, n) {},
    12: function (t, n, c) {
        "use strict";
        c(9)
    },
    21: function (t, n) {},
    50: function (t, n, c) {
        "use strict";
        c(21), c(12);
        var s = c(1);
        $(function () {
            var t = s.getUrlParam("type") || "default",
                n = $("." + t + "-success");
            n.show()
        })
    }
});