(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 233525, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "warnOnce", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e => {}
}, 253348, e => {
    "use strict";
    var t = e.i(843476);

    function n(e) {
        let {
            error: n
        } = e;
        return (0, t.jsx)("html", {
            lang: "en",
            suppressHydrationWarning: !0,
            children: (0, t.jsx)("body", {
                children: (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh",
                        padding: "20px",
                        fontFamily: "system-ui, -apple-system, sans-serif"
                    },
                    children: [(0, t.jsx)("h1", {
                        style: {
                            fontSize: "24px",
                            marginBottom: "16px"
                        },
                        children: "Something went wrong!"
                    }), (0, t.jsx)("p", {
                        style: {
                            color: "#666",
                            marginBottom: "24px"
                        },
                        children: "An unexpected error occurred. Please try again."
                    })]
                })
            })
        })
    }
    e.s(["default", () => n])
}]);