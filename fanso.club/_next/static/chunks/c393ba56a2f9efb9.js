(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 894096, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(227465);

    function s(e) {
        let {
            date: s
        } = e;
        return (0, t.jsx)("span", {
            className: "feed-time",
            children: (0, i.formatDate)(s, "MMM DD")
        })
    }
    e.s(["default", () => s])
}, 24716, e => {
    e.n(e.i(894096))
}]);