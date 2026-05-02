(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 65300, (e, t, n) => {
    "use strict";
    var r, a = Symbol.for("react.element"),
        o = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        l = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        d = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.suspense_list"),
        h = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        v = Symbol.for("react.offscreen");

    function y(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case a:
                    switch (e = e.type) {
                        case i:
                        case c:
                        case l:
                        case p:
                        case m:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case d:
                                case u:
                                case f:
                                case g:
                                case h:
                                case s:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case o:
                    return t
            }
        }
    }
    r = Symbol.for("react.module.reference"), n.ContextConsumer = u, n.ContextProvider = s, n.Element = a, n.ForwardRef = f, n.Fragment = i, n.Lazy = g, n.Memo = h, n.Portal = o, n.Profiler = c, n.StrictMode = l, n.Suspense = p, n.SuspenseList = m, n.isAsyncMode = function() {
        return !1
    }, n.isConcurrentMode = function() {
        return !1
    }, n.isContextConsumer = function(e) {
        return y(e) === u
    }, n.isContextProvider = function(e) {
        return y(e) === s
    }, n.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a
    }, n.isForwardRef = function(e) {
        return y(e) === f
    }, n.isFragment = function(e) {
        return y(e) === i
    }, n.isLazy = function(e) {
        return y(e) === g
    }, n.isMemo = function(e) {
        return y(e) === h
    }, n.isPortal = function(e) {
        return y(e) === o
    }, n.isProfiler = function(e) {
        return y(e) === c
    }, n.isStrictMode = function(e) {
        return y(e) === l
    }, n.isSuspense = function(e) {
        return y(e) === p
    }, n.isSuspenseList = function(e) {
        return y(e) === m
    }, n.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === c || e === l || e === p || e === m || e === v || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === h || e.$$typeof === s || e.$$typeof === u || e.$$typeof === f || e.$$typeof === r || void 0 !== e.getModuleId) || !1
    }, n.typeOf = y
}, 428383, (e, t, n) => {
    "use strict";
    t.exports = e.r(65300)
}, 256331, (e, t, n) => {
    e.e, t.exports = function(e) {
        "use strict";
        var t = {
            name: "zh-cn",
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            ordinal: function(e, t) {
                return "W" === t ? e + "周" : e + "日"
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            meridiem: function(e, t) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1100 ? "上午" : n < 1300 ? "中午" : n < 1800 ? "下午" : "晚上"
            }
        };
        return (e && "object" == typeof e && "default" in e ? e : {
            default: e
        }).default.locale(t, null, !0), t
    }(e.r(822315))
}, 216891, (e, t, n) => {
    var r = e.r(935045).default;

    function a(e, n) {
        if ("function" == typeof WeakMap) var o = new WeakMap,
            i = new WeakMap;
        return (t.exports = a = function(e, t) {
            if (!t && e && e.__esModule) return e;
            var n, a, l = {
                __proto__: null,
                default: e
            };
            if (null === e || "object" != r(e) && "function" != typeof e) return l;
            if (n = t ? i : o) {
                if (n.has(e)) return n.get(e);
                n.set(e, l)
            }
            for (var c in e) "default" !== c && ({}).hasOwnProperty.call(e, c) && ((a = (n = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, c)) && (a.get || a.set) ? n(l, c, a) : l[c] = e[c]);
            return l
        }, t.exports.__esModule = !0, t.exports.default = t.exports)(e, n)
    }
    t.exports = a, t.exports.__esModule = !0, t.exports.default = t.exports
}, 366833, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "arrow-left",
        theme: "outlined"
    }
}, 800419, (e, t, n) => {
    t.exports = function(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
            if (({}).hasOwnProperty.call(e, r)) {
                if (-1 !== t.indexOf(r)) continue;
                n[r] = e[r]
            }
        return n
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, 553326, (e, t, n) => {
    var r = e.r(800419);
    t.exports = function(e, t) {
        if (null == e) return {};
        var n, a, o = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (a = 0; a < i.length; a++) n = i[a], -1 === t.indexOf(n) && ({}).propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, 117675, e => {
    "use strict";
    e.s([], 666315), e.i(666315);
    var t = e.i(685886),
        n = e.i(277915);
    e.s(["blue", () => n.blue, "blueDark", () => n.blueDark, "cyan", () => n.cyan, "cyanDark", () => n.cyanDark, "geekblue", () => n.geekblue, "geekblueDark", () => n.geekblueDark, "generate", () => t.default, "gold", () => n.gold, "goldDark", () => n.goldDark, "gray", () => n.gray, "green", () => n.green, "greenDark", () => n.greenDark, "grey", () => n.grey, "greyDark", () => n.greyDark, "lime", () => n.lime, "limeDark", () => n.limeDark, "magenta", () => n.magenta, "magentaDark", () => n.magentaDark, "orange", () => n.orange, "orangeDark", () => n.orangeDark, "presetDarkPalettes", () => n.presetDarkPalettes, "presetPalettes", () => n.presetPalettes, "presetPrimaryColors", () => n.presetPrimaryColors, "purple", () => n.purple, "purpleDark", () => n.purpleDark, "red", () => n.red, "redDark", () => n.redDark, "volcano", () => n.volcano, "volcanoDark", () => n.volcanoDark, "yellow", () => n.yellow, "yellowDark", () => n.yellowDark], 117675)
}, 736893, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0, n.default = (0, e.r(271645).createContext)({})
}, 802953, (e, t, n) => {
    var r = e.r(514414);

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }
    t.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach(function(t) {
                r(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, 24910, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = function() {
        return !!window.document && !!window.document.createElement
    }
}, 814221, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = function(e, t) {
        if (!e) return !1;
        if (e.contains) return e.contains(t);
        for (var n = t; n;) {
            if (n === e) return !0;
            n = n.parentNode
        }
        return !1
    }
}, 425774, (e, t, n) => {
    "use strict";
    var r = e.r(13451).default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.clearContainerCache = function() {
        s.clear()
    }, n.injectCSS = p, n.removeCSS = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = m(e, t);
        n && d(t).removeChild(n)
    }, n.updateCSS = function(e, t) {
        var n, r, o, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            c = d(l),
            h = f(c),
            g = (0, a.default)((0, a.default)({}, l), {}, {
                styles: h
            }),
            v = s.get(c);
        if (!v || !(0, i.default)(document, v)) {
            var y = p("", g),
                b = y.parentNode;
            s.set(c, b), c.removeChild(y)
        }
        var x = m(t, g);
        if (x) return null != (n = g.csp) && n.nonce && x.nonce !== (null == (r = g.csp) ? void 0 : r.nonce) && (x.nonce = null == (o = g.csp) ? void 0 : o.nonce), x.innerHTML !== e && (x.innerHTML = e), x;
        var C = p(e, g);
        return C.setAttribute(u(g), t), C
    };
    var a = r(e.r(802953)),
        o = r(e.r(24910)),
        i = r(e.r(814221)),
        l = "data-rc-order",
        c = "data-rc-priority",
        s = new Map;

    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.mark;
        return t ? t.startsWith("data-") ? t : "data-".concat(t) : "rc-util-key"
    }

    function d(e) {
        return e.attachTo ? e.attachTo : document.querySelector("head") || document.body
    }

    function f(e) {
        return Array.from((s.get(e) || e).children).filter(function(e) {
            return "STYLE" === e.tagName
        })
    }

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, o.default)()) return null;
        var n = t.csp,
            r = t.prepend,
            a = t.priority,
            i = void 0 === a ? 0 : a,
            s = "queue" === r ? "prependQueue" : r ? "prepend" : "append",
            u = "prependQueue" === s,
            p = document.createElement("style");
        p.setAttribute(l, s), u && i && p.setAttribute(c, "".concat(i)), null != n && n.nonce && (p.nonce = null == n ? void 0 : n.nonce), p.innerHTML = e;
        var m = d(t),
            h = m.firstChild;
        if (r) {
            if (u) {
                var g = (t.styles || f(m)).filter(function(e) {
                    return !!["prepend", "prependQueue"].includes(e.getAttribute(l)) && i >= Number(e.getAttribute(c) || 0)
                });
                if (g.length) return m.insertBefore(p, g[g.length - 1].nextSibling), p
            }
            m.insertBefore(p, h)
        } else m.appendChild(p);
        return p
    }

    function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = d(t);
        return (t.styles || f(n)).find(function(n) {
            return n.getAttribute(u(t)) === e
        })
    }
}, 841824, (e, t, n) => {
    "use strict";

    function r(e) {
        var t;
        return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e)
    }

    function a(e) {
        return r(e) instanceof ShadowRoot
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.getShadowRoot = function(e) {
        return a(e) ? r(e) : null
    }, n.inShadow = a
}, 272658, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.call = c, n.default = void 0, n.note = i, n.noteOnce = u, n.preMessage = void 0, n.resetWarned = l, n.warning = o, n.warningOnce = s;
    var r = {},
        a = [];

    function o(e, t) {}

    function i(e, t) {}

    function l() {
        r = {}
    }

    function c(e, t, n) {
        t || r[n] || (e(!1, n), r[n] = !0)
    }

    function s(e, t) {
        c(o, e, t)
    }

    function u(e, t) {
        c(i, e, t)
    }
    s.preMessage = n.preMessage = function(e) {
        a.push(e)
    }, s.resetWarned = l, s.noteOnce = u, n.default = s
}, 412114, (e, t, n) => {
    "use strict";
    var r = e.r(216891).default,
        a = e.r(13451).default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.generate = function e(t, n, r) {
        return r ? d.default.createElement(t.tag, (0, o.default)((0, o.default)({
            key: n
        }, p(t.attrs)), r), (t.children || []).map(function(r, a) {
            return e(r, "".concat(n, "-").concat(t.tag, "-").concat(a))
        })) : d.default.createElement(t.tag, (0, o.default)({
            key: n
        }, p(t.attrs)), (t.children || []).map(function(r, a) {
            return e(r, "".concat(n, "-").concat(t.tag, "-").concat(a))
        }))
    }, n.getSecondaryColor = function(e) {
        return (0, l.generate)(e)[0]
    }, n.iconStyles = void 0, n.isIconDefinition = function(e) {
        return "object" === (0, i.default)(e) && "string" == typeof e.name && "string" == typeof e.theme && ("object" === (0, i.default)(e.icon) || "function" == typeof e.icon)
    }, n.normalizeAttrs = p, n.normalizeTwoToneColors = function(e) {
        return e ? Array.isArray(e) ? e : [e] : []
    }, n.useInsertStyles = n.svgBaseProps = void 0, n.warning = function(e, t) {
        (0, u.default)(e, "[@ant-design/icons] ".concat(t))
    };
    var o = a(e.r(802953)),
        i = a(e.r(935045)),
        l = e.r(117675),
        c = e.r(425774),
        s = e.r(841824),
        u = a(e.r(272658)),
        d = r(e.r(271645)),
        f = a(e.r(736893));

    function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).reduce(function(t, n) {
            var r = e[n];
            return "class" === n ? (t.className = r, delete t.class) : (delete t[n], t[n.replace(/-(.)/g, function(e, t) {
                return t.toUpperCase()
            })] = r), t
        }, {})
    }
    n.svgBaseProps = {
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true",
        focusable: "false"
    };
    var m = n.iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
    n.useInsertStyles = function(e) {
        var t = (0, d.useContext)(f.default),
            n = t.csp,
            r = t.prefixCls,
            a = t.layer,
            o = m;
        r && (o = o.replace(/anticon/g, r)), a && (o = "@layer ".concat(a, " {\n").concat(o, "\n}")), (0, d.useEffect)(function() {
            var t = e.current,
                r = (0, s.getShadowRoot)(t);
            (0, c.updateCSS)(o, "@ant-design-icons", {
                prepend: !a,
                csp: n,
                attachTo: r
            })
        }, [])
    }
}, 723446, (e, t, n) => {
    "use strict";
    var r = e.r(13451).default,
        a = e.r(216891).default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0;
    var o = r(e.r(553326)),
        i = r(e.r(802953)),
        l = a(e.r(271645)),
        c = e.r(412114),
        s = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"],
        u = {
            primaryColor: "#333",
            secondaryColor: "#E6E6E6",
            calculated: !1
        },
        d = function(e) {
            var t = e.icon,
                n = e.className,
                r = e.onClick,
                a = e.style,
                d = e.primaryColor,
                f = e.secondaryColor,
                p = (0, o.default)(e, s),
                m = l.useRef(),
                h = u;
            if (d && (h = {
                    primaryColor: d,
                    secondaryColor: f || (0, c.getSecondaryColor)(d)
                }), (0, c.useInsertStyles)(m), (0, c.warning)((0, c.isIconDefinition)(t), "icon should be icon definiton, but got ".concat(t)), !(0, c.isIconDefinition)(t)) return null;
            var g = t;
            return g && "function" == typeof g.icon && (g = (0, i.default)((0, i.default)({}, g), {}, {
                icon: g.icon(h.primaryColor, h.secondaryColor)
            })), (0, c.generate)(g.icon, "svg-".concat(g.name), (0, i.default)((0, i.default)({
                className: n,
                onClick: r,
                style: a,
                "data-icon": g.name,
                width: "1em",
                height: "1em",
                fill: "currentColor",
                "aria-hidden": "true"
            }, p), {}, {
                ref: m
            }))
        };
    d.displayName = "IconReact", d.getTwoToneColors = function() {
        return (0, i.default)({}, u)
    }, d.setTwoToneColors = function(e) {
        var t = e.primaryColor,
            n = e.secondaryColor;
        u.primaryColor = t, u.secondaryColor = n || (0, c.getSecondaryColor)(t), u.calculated = !!n
    }, n.default = d
}, 49189, (e, t, n) => {
    "use strict";
    var r = e.r(13451).default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.getTwoToneColor = function() {
        var e = o.default.getTwoToneColors();
        return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
    }, n.setTwoToneColor = function(e) {
        var t = (0, i.normalizeTwoToneColors)(e),
            n = (0, a.default)(t, 2),
            r = n[0],
            l = n[1];
        return o.default.setTwoToneColors({
            primaryColor: r,
            secondaryColor: l
        })
    };
    var a = r(e.r(462195)),
        o = r(e.r(723446)),
        i = e.r(412114)
}, 873776, (e, t, n) => {
    "use strict";
    var r = e.r(13451).default,
        a = e.r(216891).default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0;
    var o = r(e.r(343676)),
        i = r(e.r(462195)),
        l = r(e.r(514414)),
        c = r(e.r(553326)),
        s = a(e.r(271645)),
        u = r(e.r(343794)),
        d = e.r(117675),
        f = r(e.r(736893)),
        p = r(e.r(723446)),
        m = e.r(49189),
        h = e.r(412114),
        g = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
    (0, m.setTwoToneColor)(d.blue.primary);
    var v = s.forwardRef(function(e, t) {
        var n = e.className,
            r = e.icon,
            a = e.spin,
            d = e.rotate,
            m = e.tabIndex,
            v = e.onClick,
            y = e.twoToneColor,
            b = (0, c.default)(e, g),
            x = s.useContext(f.default),
            C = x.prefixCls,
            S = void 0 === C ? "anticon" : C,
            k = x.rootClassName,
            T = (0, u.default)(k, S, (0, l.default)((0, l.default)({}, "".concat(S, "-").concat(r.name), !!r.name), "".concat(S, "-spin"), !!a || "loading" === r.name), n),
            w = m;
        void 0 === w && v && (w = -1);
        var M = (0, h.normalizeTwoToneColors)(y),
            P = (0, i.default)(M, 2),
            j = P[0],
            F = P[1];
        return s.createElement("span", (0, o.default)({
            role: "img",
            "aria-label": r.name
        }, b, {
            ref: t,
            tabIndex: w,
            onClick: v,
            className: T
        }), s.createElement(p.default, {
            icon: r,
            primaryColor: j,
            secondaryColor: F,
            style: d ? {
                msTransform: "rotate(".concat(d, "deg)"),
                transform: "rotate(".concat(d, "deg)")
            } : void 0
        }))
    });
    v.displayName = "AntdIcon", v.getTwoToneColor = m.getTwoToneColor, v.setTwoToneColor = m.setTwoToneColor, n.default = v
}, 524559, (e, t, n) => {
    "use strict";
    var r = e.r(216891).default,
        a = e.r(13451).default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0;
    var o = a(e.r(343676)),
        i = r(e.r(271645)),
        l = a(e.r(366833)),
        c = a(e.r(873776));
    n.default = i.forwardRef(function(e, t) {
        return i.createElement(c.default, (0, o.default)({}, e, {
            ref: t,
            icon: l.default
        }))
    })
}, 742392, (e, t, n) => {
    "use strict";
    var r;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0;
    let a = (r = e.r(524559)) && r.__esModule ? r : {
        default: r
    };
    n.default = a, t.exports = a
}, 579261, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                }
            }]
        },
        name: "arrow-right",
        theme: "outlined"
    }
}, 10822, (e, t, n) => {
    "use strict";
    var r = e.r(216891).default,
        a = e.r(13451).default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0;
    var o = a(e.r(343676)),
        i = r(e.r(271645)),
        l = a(e.r(579261)),
        c = a(e.r(873776));
    n.default = i.forwardRef(function(e, t) {
        return i.createElement(c.default, (0, o.default)({}, e, {
            ref: t,
            icon: l.default
        }))
    })
}, 407813, (e, t, n) => {
    "use strict";
    var r;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = void 0;
    let a = (r = e.r(10822)) && r.__esModule ? r : {
        default: r
    };
    n.default = a, t.exports = a
}, 270559, (e, t, n) => {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e, t) {
        void 0 === t && (t = {});
        for (var n = function(e) {
                for (var t = [], n = 0; n < e.length;) {
                    var r = e[n];
                    if ("*" === r || "+" === r || "?" === r) {
                        t.push({
                            type: "MODIFIER",
                            index: n,
                            value: e[n++]
                        });
                        continue
                    }
                    if ("\\" === r) {
                        t.push({
                            type: "ESCAPED_CHAR",
                            index: n++,
                            value: e[n++]
                        });
                        continue
                    }
                    if ("{" === r) {
                        t.push({
                            type: "OPEN",
                            index: n,
                            value: e[n++]
                        });
                        continue
                    }
                    if ("}" === r) {
                        t.push({
                            type: "CLOSE",
                            index: n,
                            value: e[n++]
                        });
                        continue
                    }
                    if (":" === r) {
                        for (var a = "", o = n + 1; o < e.length;) {
                            var i = e.charCodeAt(o);
                            if (i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 || 95 === i) {
                                a += e[o++];
                                continue
                            }
                            break
                        }
                        if (!a) throw TypeError("Missing parameter name at " + n);
                        t.push({
                            type: "NAME",
                            index: n,
                            value: a
                        }), n = o;
                        continue
                    }
                    if ("(" === r) {
                        var l = 1,
                            c = "",
                            o = n + 1;
                        if ("?" === e[o]) throw TypeError('Pattern cannot start with "?" at ' + o);
                        for (; o < e.length;) {
                            if ("\\" === e[o]) {
                                c += e[o++] + e[o++];
                                continue
                            }
                            if (")" === e[o]) {
                                if (0 == --l) {
                                    o++;
                                    break
                                }
                            } else if ("(" === e[o] && (l++, "?" !== e[o + 1])) throw TypeError("Capturing groups are not allowed at " + o);
                            c += e[o++]
                        }
                        if (l) throw TypeError("Unbalanced pattern at " + n);
                        if (!c) throw TypeError("Missing pattern at " + n);
                        t.push({
                            type: "PATTERN",
                            index: n,
                            value: c
                        }), n = o;
                        continue
                    }
                    t.push({
                        type: "CHAR",
                        index: n,
                        value: e[n++]
                    })
                }
                return t.push({
                    type: "END",
                    index: n,
                    value: ""
                }), t
            }(e), r = t.prefixes, a = void 0 === r ? "./" : r, o = "[^" + l(t.delimiter || "/#?") + "]+?", i = [], c = 0, s = 0, u = "", d = function(e) {
                if (s < n.length && n[s].type === e) return n[s++].value
            }, f = function(e) {
                var t = d(e);
                if (void 0 !== t) return t;
                var r = n[s];
                throw TypeError("Unexpected " + r.type + " at " + r.index + ", expected " + e)
            }, p = function() {
                for (var e, t = ""; e = d("CHAR") || d("ESCAPED_CHAR");) t += e;
                return t
            }; s < n.length;) {
            var m = d("CHAR"),
                h = d("NAME"),
                g = d("PATTERN");
            if (h || g) {
                var v = m || ""; - 1 === a.indexOf(v) && (u += v, v = ""), u && (i.push(u), u = ""), i.push({
                    name: h || c++,
                    prefix: v,
                    suffix: "",
                    pattern: g || o,
                    modifier: d("MODIFIER") || ""
                });
                continue
            }
            var y = m || d("ESCAPED_CHAR");
            if (y) {
                u += y;
                continue
            }
            if (u && (i.push(u), u = ""), d("OPEN")) {
                var v = p(),
                    b = d("NAME") || "",
                    x = d("PATTERN") || "",
                    C = p();
                f("CLOSE"), i.push({
                    name: b || (x ? c++ : ""),
                    pattern: b && !x ? o : x,
                    prefix: v,
                    suffix: C,
                    modifier: d("MODIFIER") || ""
                });
                continue
            }
            f("END")
        }
        return i
    }

    function o(e, t) {
        void 0 === t && (t = {});
        var n = c(t),
            a = t.encode,
            o = void 0 === a ? function(e) {
                return e
            } : a,
            i = t.validate,
            l = void 0 === i || i,
            s = e.map(function(e) {
                if ("object" === r(e)) return RegExp("^(?:" + e.pattern + ")$", n)
            });
        return function(t) {
            for (var n = "", r = 0; r < e.length; r++) {
                var a = e[r];
                if ("string" == typeof a) {
                    n += a;
                    continue
                }
                var i = t ? t[a.name] : void 0,
                    c = "?" === a.modifier || "*" === a.modifier,
                    u = "*" === a.modifier || "+" === a.modifier;
                if (Array.isArray(i)) {
                    if (!u) throw TypeError('Expected "' + a.name + '" to not repeat, but got an array');
                    if (0 === i.length) {
                        if (c) continue;
                        throw TypeError('Expected "' + a.name + '" to not be empty')
                    }
                    for (var d = 0; d < i.length; d++) {
                        var f = o(i[d], a);
                        if (l && !s[r].test(f)) throw TypeError('Expected all "' + a.name + '" to match "' + a.pattern + '", but got "' + f + '"');
                        n += a.prefix + f + a.suffix
                    }
                    continue
                }
                if ("string" == typeof i || "number" == typeof i) {
                    var f = o(String(i), a);
                    if (l && !s[r].test(f)) throw TypeError('Expected "' + a.name + '" to match "' + a.pattern + '", but got "' + f + '"');
                    n += a.prefix + f + a.suffix;
                    continue
                }
                if (!c) {
                    var p = u ? "an array" : "a string";
                    throw TypeError('Expected "' + a.name + '" to be ' + p)
                }
            }
            return n
        }
    }

    function i(e, t, n) {
        void 0 === n && (n = {});
        var r = n.decode,
            a = void 0 === r ? function(e) {
                return e
            } : r;
        return function(n) {
            var r = e.exec(n);
            if (!r) return !1;
            for (var o = r[0], i = r.index, l = Object.create(null), c = 1; c < r.length; c++) ! function(e) {
                if (void 0 !== r[e]) {
                    var n = t[e - 1];
                    "*" === n.modifier || "+" === n.modifier ? l[n.name] = r[e].split(n.prefix + n.suffix).map(function(e) {
                        return a(e, n)
                    }) : l[n.name] = a(r[e], n)
                }
            }(c);
            return {
                path: o,
                index: i,
                params: l
            }
        }
    }

    function l(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
    }

    function c(e) {
        return e && e.sensitive ? "" : "i"
    }

    function s(e, t, n) {
        void 0 === n && (n = {});
        for (var r = n.strict, a = void 0 !== r && r, o = n.start, i = n.end, s = n.encode, u = void 0 === s ? function(e) {
                return e
            } : s, d = "[" + l(n.endsWith || "") + "]|$", f = "[" + l(n.delimiter || "/#?") + "]", p = void 0 === o || o ? "^" : "", m = 0; m < e.length; m++) {
            var h = e[m];
            if ("string" == typeof h) p += l(u(h));
            else {
                var g = l(u(h.prefix)),
                    v = l(u(h.suffix));
                if (h.pattern)
                    if (t && t.push(h), g || v)
                        if ("+" === h.modifier || "*" === h.modifier) {
                            var y = "*" === h.modifier ? "?" : "";
                            p += "(?:" + g + "((?:" + h.pattern + ")(?:" + v + g + "(?:" + h.pattern + "))*)" + v + ")" + y
                        } else p += "(?:" + g + "(" + h.pattern + ")" + v + ")" + h.modifier;
                else p += "(" + h.pattern + ")" + h.modifier;
                else p += "(?:" + g + v + ")" + h.modifier
            }
        }
        if (void 0 === i || i) a || (p += f + "?"), p += n.endsWith ? "(?=" + d + ")" : "$";
        else {
            var b = e[e.length - 1],
                x = "string" == typeof b ? f.indexOf(b[b.length - 1]) > -1 : void 0 === b;
            a || (p += "(?:" + f + "(?=" + d + "))?"), x || (p += "(?=" + f + "|" + d + ")")
        }
        return new RegExp(p, c(n))
    }

    function u(e, t, n) {
        if (e instanceof RegExp) {
            if (!t) return e;
            var r = e.source.match(/\((?!\?)/g);
            if (r)
                for (var o = 0; o < r.length; o++) t.push({
                    name: o,
                    prefix: "",
                    suffix: "",
                    modifier: "",
                    pattern: ""
                });
            return e
        }
        return Array.isArray(e) ? RegExp("(?:" + e.map(function(e) {
            return u(e, t, n).source
        }).join("|") + ")", c(n)) : s(a(e, n), t, n)
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.pathToRegexp = n.tokensToRegexp = n.regexpToFunction = n.match = n.tokensToFunction = n.compile = n.parse = void 0, n.parse = a, n.compile = function(e, t) {
        return o(a(e, t), t)
    }, n.tokensToFunction = o, n.match = function(e, t) {
        var n = [];
        return i(u(e, n, t), n, t)
    }, n.regexpToFunction = i, n.tokensToRegexp = s, n.pathToRegexp = u
}, 346383, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.TokenData = void 0, n.parse = d, n.compile = function(e, t = {}) {
        let {
            encode: n = encodeURIComponent,
            delimiter: a = "/"
        } = t, o = function e(t, n, a) {
            let o = t.map(t => (function(t, n, a) {
                if ("text" === t.type) return () => [t.value];
                if ("group" === t.type) {
                    let r = e(t.tokens, n, a);
                    return e => {
                        let [t, ...n] = r(e);
                        return n.length ? [""] : [t]
                    }
                }
                let o = a || r;
                return "wildcard" === t.type && !1 !== a ? e => {
                    let r = e[t.name];
                    if (null == r) return ["", t.name];
                    if (!Array.isArray(r) || 0 === r.length) throw TypeError(`Expected "${t.name}" to be a non-empty array`);
                    return [r.map((e, n) => {
                        if ("string" != typeof e) throw TypeError(`Expected "${t.name}/${n}" to be a string`);
                        return o(e)
                    }).join(n)]
                } : e => {
                    let n = e[t.name];
                    if (null == n) return ["", t.name];
                    if ("string" != typeof n) throw TypeError(`Expected "${t.name}" to be a string`);
                    return [o(n)]
                }
            })(t, n, a));
            return e => {
                let t = [""];
                for (let n of o) {
                    let [r, ...a] = n(e);
                    t[0] += r, t.push(...a)
                }
                return t
            }
        }((e instanceof u ? e : d(e, t)).tokens, a, n);
        return function(e = {}) {
            let [t, ...n] = o(e);
            if (n.length) throw TypeError(`Missing parameters: ${n.join(", ")}`);
            return t
        }
    }, n.match = function(e, t = {}) {
        let {
            decode: n = decodeURIComponent,
            delimiter: a = "/"
        } = t, {
            regexp: o,
            keys: i
        } = f(e, t), l = i.map(e => !1 === n ? r : "param" === e.type ? n : e => e.split(a).map(n));
        return function(e) {
            let t = o.exec(e);
            if (!t) return !1;
            let n = t[0],
                r = Object.create(null);
            for (let e = 1; e < t.length; e++) {
                if (void 0 === t[e]) continue;
                let n = i[e - 1],
                    a = l[e - 1];
                r[n.name] = a(t[e])
            }
            return {
                path: n,
                params: r
            }
        }
    }, n.pathToRegexp = f, n.stringify = function(e) {
        return e.tokens.map(function e(t, n, r) {
            var i;
            if ("text" === t.type) return t.value.replace(/[{}()\[\]+?!:*]/g, "\\$&");
            if ("group" === t.type) return `{${t.tokens.map(e).join("")}}`;
            let l = function(e) {
                let [t, ...n] = e;
                return !!a.test(t) && n.every(e => o.test(e))
            }(t.name) && ((null == (i = r[n + 1]) ? void 0 : i.type) !== "text" || !o.test(i.value[0])) ? t.name : JSON.stringify(t.name);
            if ("param" === t.type) return `:${l}`;
            if ("wildcard" === t.type) return `*${l}`;
            throw TypeError(`Unexpected token: ${t}`)
        }).join("")
    };
    let r = e => e,
        a = /^[$_\p{ID_Start}]$/u,
        o = /^[$\u200c\u200d\p{ID_Continue}]$/u,
        i = "https://git.new/pathToRegexpError",
        l = {
            "{": "{",
            "}": "}",
            "(": "(",
            ")": ")",
            "[": "[",
            "]": "]",
            "+": "+",
            "?": "?",
            "!": "!"
        };

    function c(e) {
        return e.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&")
    }
    class s {
        constructor(e) {
            this.tokens = e
        }
        peek() {
            if (!this._peek) {
                let e = this.tokens.next();
                this._peek = e.value
            }
            return this._peek
        }
        tryConsume(e) {
            let t = this.peek();
            if (t.type === e) return this._peek = void 0, t.value
        }
        consume(e) {
            let t = this.tryConsume(e);
            if (void 0 !== t) return t;
            let {
                type: n,
                index: r
            } = this.peek();
            throw TypeError(`Unexpected ${n} at ${r}, expected ${e}: ${i}`)
        }
        text() {
            let e, t = "";
            for (; e = this.tryConsume("CHAR") || this.tryConsume("ESCAPED");) t += e;
            return t
        }
    }
    class u {
        constructor(e) {
            this.tokens = e
        }
    }

    function d(e, t = {}) {
        let {
            encodePath: n = r
        } = t, c = new s(function*(e) {
            let t = [...e],
                n = 0;

            function r() {
                let e = "";
                if (a.test(t[++n]))
                    for (e += t[n]; o.test(t[++n]);) e += t[n];
                else if ('"' === t[n]) {
                    let r = n;
                    for (; n < t.length;) {
                        if ('"' === t[++n]) {
                            n++, r = 0;
                            break
                        }
                        "\\" === t[n] ? e += t[++n] : e += t[n]
                    }
                    if (r) throw TypeError(`Unterminated quote at ${r}: ${i}`)
                }
                if (!e) throw TypeError(`Missing parameter name at ${n}: ${i}`);
                return e
            }
            for (; n < t.length;) {
                let e = t[n],
                    a = l[e];
                if (a) yield {
                    type: a,
                    index: n++,
                    value: e
                };
                else if ("\\" === e) yield {
                    type: "ESCAPED",
                    index: n++,
                    value: t[n++]
                };
                else if (":" === e) {
                    let e = r();
                    yield {
                        type: "PARAM",
                        index: n,
                        value: e
                    }
                } else if ("*" === e) {
                    let e = r();
                    yield {
                        type: "WILDCARD",
                        index: n,
                        value: e
                    }
                } else yield {
                    type: "CHAR",
                    index: n,
                    value: t[n++]
                }
            }
            return {
                type: "END",
                index: n,
                value: ""
            }
        }(e));
        return new u(function e(t) {
            let r = [];
            for (;;) {
                let a = c.text();
                a && r.push({
                    type: "text",
                    value: n(a)
                });
                let o = c.tryConsume("PARAM");
                if (o) {
                    r.push({
                        type: "param",
                        name: o
                    });
                    continue
                }
                let i = c.tryConsume("WILDCARD");
                if (i) {
                    r.push({
                        type: "wildcard",
                        name: i
                    });
                    continue
                }
                if (c.tryConsume("{")) {
                    r.push({
                        type: "group",
                        tokens: e("}")
                    });
                    continue
                }
                return c.consume(t), r
            }
        }("END"))
    }
    n.TokenData = u;

    function f(e, t = {}) {
        let {
            delimiter: n = "/",
            end: r = !0,
            sensitive: a = !1,
            trailing: o = !0
        } = t, l = [], s = [];
        for (let {
                tokens: r
            } of (Array.isArray(e) ? e : [e]).map(e => e instanceof u ? e : d(e, t)))
            for (let e of function* e(t, n, r) {
                    if (n === t.length) return yield r;
                    let a = t[n];
                    if ("group" === a.type) {
                        let o = r.slice();
                        for (let r of e(a.tokens, 0, o)) yield* e(t, n + 1, r)
                    } else r.push(a);
                    yield* e(t, n + 1, r)
                }(r, 0, [])) {
                let t = function(e, t, n) {
                    let r = "",
                        a = "",
                        o = !0;
                    for (let u = 0; u < e.length; u++) {
                        let d = e[u];
                        if ("text" === d.type) {
                            r += c(d.value), a += d.value, o || (o = d.value.includes(t));
                            continue
                        }
                        if ("param" === d.type || "wildcard" === d.type) {
                            var l, s;
                            if (!o && !a) throw TypeError(`Missing text after "${d.name}": ${i}`);
                            "param" === d.type ? r += `(${l=t,(s=o?"":a).length<2?l.length<2?`[^${c(l+s)}]`:`(?:(?!${c(l)})[^${c(s)}])`:l.length<2?`(?:(?!${c(s)})[^${c(l)}])`:`(?:(?!${c(s)}|${c(l)})[\\s\\S])`}+)` : r += "([\\s\\S]+)", n.push(d), a = "", o = !1;
                            continue
                        }
                    }
                    return r
                }(e, n, l);
                s.push(t)
            }
        let p = `^(?:${s.join("|")})`;
        return o && (p += `(?:${c(n)}$)?`), {
            regexp: new RegExp(p += r ? "$" : `(?=${c(n)}|$)`, a ? "" : "i"),
            keys: l
        }
    }
}, 717512, e => {
    "use strict";
    var t, n, r, a, o = e.i(843476),
        i = e.i(271645),
        l = e.i(211577),
        c = e.i(703923),
        s = e.i(209428),
        u = e.i(410160),
        d = e.i(247167),
        f = e.i(8211),
        p = e.i(392221);
    e.i(296059);
    var m = e.i(732961),
        m = m,
        h = e.i(609587),
        h = h,
        g = e.i(434859);

    function v(e) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? y(Object(n), !0).forEach(function(t) {
                var r, a, o;
                r = e, a = t, o = n[t], (a = function(e) {
                    var t = function(e, t) {
                        if ("object" != v(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" != v(r)) return r;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == v(t) ? t : String(t)
                }(a)) in r ? Object.defineProperty(r, a, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[a] = o
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var x = b(b({}, e.i(203694).commonLocale), {}, {
        locale: "zh_CN",
        today: "今天",
        now: "此刻",
        backToToday: "返回今天",
        ok: "确定",
        timeSelect: "选择时间",
        dateSelect: "选择日期",
        weekSelect: "选择周",
        clear: "清除",
        week: "周",
        month: "月",
        year: "年",
        previousMonth: "上个月 (翻页上键)",
        nextMonth: "下个月 (翻页下键)",
        monthSelect: "选择月份",
        yearSelect: "选择年份",
        decadeSelect: "选择年代",
        previousYear: "上一年 (Control键加左方向键)",
        nextYear: "下一年 (Control键加右方向键)",
        previousDecade: "上一年代",
        nextDecade: "下一年代",
        previousCentury: "上一世纪",
        nextCentury: "下一世纪",
        yearFormat: "YYYY年",
        cellDateFormat: "D",
        monthBeforeYear: !1
    });
    let C = {
            placeholder: "请选择时间",
            rangePlaceholder: ["开始时间", "结束时间"]
        },
        S = {
            lang: {
                placeholder: "请选择日期",
                yearPlaceholder: "请选择年份",
                quarterPlaceholder: "请选择季度",
                monthPlaceholder: "请选择月份",
                weekPlaceholder: "请选择周",
                rangePlaceholder: ["开始日期", "结束日期"],
                rangeYearPlaceholder: ["开始年份", "结束年份"],
                rangeMonthPlaceholder: ["开始月份", "结束月份"],
                rangeQuarterPlaceholder: ["开始季度", "结束季度"],
                rangeWeekPlaceholder: ["开始周", "结束周"],
                ...x
            },
            timePickerLocale: { ...C
            }
        };
    S.lang.ok = "确定";
    let k = "${label}不是一个有效的${type}",
        T = {
            locale: "zh-cn",
            Pagination: g.default,
            DatePicker: S,
            TimePicker: C,
            Calendar: S,
            global: {
                placeholder: "请选择",
                close: "关闭",
                sortable: "可排序"
            },
            Table: {
                filterTitle: "筛选",
                filterConfirm: "确定",
                filterReset: "重置",
                filterEmptyText: "无筛选项",
                filterCheckAll: "全选",
                filterSearchPlaceholder: "在筛选项中搜索",
                emptyText: "暂无数据",
                selectAll: "全选当页",
                selectInvert: "反选当页",
                selectNone: "清空所有",
                selectionAll: "全选所有",
                sortTitle: "排序",
                expand: "展开行",
                collapse: "关闭行",
                triggerDesc: "点击降序",
                triggerAsc: "点击升序",
                cancelSort: "取消排序"
            },
            Modal: {
                okText: "确定",
                cancelText: "取消",
                justOkText: "知道了"
            },
            Tour: {
                Next: "下一步",
                Previous: "上一步",
                Finish: "结束导览"
            },
            Popconfirm: {
                cancelText: "取消",
                okText: "确定"
            },
            Transfer: {
                titles: ["", ""],
                searchPlaceholder: "请输入搜索内容",
                itemUnit: "项",
                itemsUnit: "项",
                remove: "删除",
                selectCurrent: "全选当页",
                removeCurrent: "删除当页",
                selectAll: "全选所有",
                deselectAll: "取消全选",
                removeAll: "删除全部",
                selectInvert: "反选当页"
            },
            Upload: {
                uploading: "文件上传中",
                removeFile: "删除文件",
                uploadError: "上传错误",
                previewFile: "预览文件",
                downloadFile: "下载文件"
            },
            Empty: {
                description: "暂无数据"
            },
            Icon: {
                icon: "图标"
            },
            Text: {
                edit: "编辑",
                copy: "复制",
                copied: "复制成功",
                expand: "展开",
                collapse: "收起"
            },
            Form: {
                optional: "（可选）",
                defaultValidateMessages: {
                    default: "字段验证错误${label}",
                    required: "请输入${label}",
                    enum: "${label}必须是其中一个[${enum}]",
                    whitespace: "${label}不能为空字符",
                    date: {
                        format: "${label}日期格式无效",
                        parse: "${label}不能转换为日期",
                        invalid: "${label}是一个无效日期"
                    },
                    types: {
                        string: k,
                        method: k,
                        array: k,
                        object: k,
                        number: k,
                        date: k,
                        boolean: k,
                        integer: k,
                        float: k,
                        regexp: k,
                        email: k,
                        url: k,
                        hex: k
                    },
                    string: {
                        len: "${label}须为${len}个字符",
                        min: "${label}最少${min}个字符",
                        max: "${label}最多${max}个字符",
                        range: "${label}须在${min}-${max}字符之间"
                    },
                    number: {
                        len: "${label}必须等于${len}",
                        min: "${label}最小值为${min}",
                        max: "${label}最大值为${max}",
                        range: "${label}须在${min}-${max}之间"
                    },
                    array: {
                        len: "须为${len}个${label}",
                        min: "最少${min}个${label}",
                        max: "最多${max}个${label}",
                        range: "${label}数量须在${min}-${max}之间"
                    },
                    pattern: {
                        mismatch: "${label}与模式不匹配${pattern}"
                    }
                }
            },
            QRCode: {
                expired: "二维码过期",
                refresh: "点击刷新",
                scanned: "已扫描"
            },
            ColorPicker: {
                presetEmpty: "暂无",
                transparent: "无色",
                singleColor: "单色",
                gradientColor: "渐变色"
            }
        };
    var w = e.i(283599),
        M = e.i(271235);

    function P(e) {
        var t = i.useRef();
        return t.current = e, i.useCallback(function() {
            for (var e, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return null == (e = t.current) ? void 0 : e.call.apply(e, [t].concat(r))
        }, [])
    }
    var j = e.i(174428);

    function F(e) {
        var t = i.useRef(!1),
            n = i.useState(e),
            r = (0, p.default)(n, 2),
            a = r[0],
            o = r[1];
        return i.useEffect(function() {
            return t.current = !1,
                function() {
                    t.current = !0
                }
        }, []), [a, function(e, n) {
            n && t.current || o(e)
        }]
    }

    function I(e) {
        return void 0 !== e
    }

    function B(e, t) {
        var n = t || {},
            r = n.defaultValue,
            a = n.value,
            o = n.onChange,
            i = n.postState,
            l = F(function() {
                return I(a) ? a : I(r) ? "function" == typeof r ? r() : r : "function" == typeof e ? e() : e
            }),
            c = (0, p.default)(l, 2),
            s = c[0],
            u = c[1],
            d = void 0 !== a ? a : s,
            f = i ? i(d) : d,
            m = P(o),
            h = F([d]),
            g = (0, p.default)(h, 2),
            v = g[0],
            y = g[1];
        return (0, j.useLayoutUpdateEffect)(function() {
            var e = v[0];
            s !== e && m(s, e)
        }, [v]), (0, j.useLayoutUpdateEffect)(function() {
            I(a) || u(a)
        }, [a]), [f, P(function(e, t) {
            u(e, t), y([d], t)
        })]
    }
    var R = e.i(428383),
        E = e.i(182585),
        A = Symbol.for("react.element"),
        H = Symbol.for("react.transitional.element"),
        O = Symbol.for("react.fragment");

    function L(e) {
        return e && "object" === (0, u.default)(e) && (e.$$typeof === A || e.$$typeof === H) && e.type === O
    }
    var z = Number(i.version.split(".")[0]),
        D = function(e, t) {
            "function" == typeof e ? e(t) : "object" === (0, u.default)(e) && e && "current" in e && (e.current = t)
        },
        N = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t.filter(Boolean);
            return r.length <= 1 ? r[0] : function(e) {
                t.forEach(function(t) {
                    D(t, e)
                })
            }
        },
        _ = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return (0, E.default)(function() {
                return N.apply(void 0, t)
            }, t, function(e, t) {
                return e.length !== t.length || e.every(function(e, n) {
                    return e !== t[n]
                })
            })
        },
        W = function(e) {
            if (!e) return !1;
            if ($(e) && z >= 19) return !0;
            var t, n, r = (0, R.isMemo)(e) ? e.type.type : e.type;
            return ("function" != typeof r || !!(null != (t = r.prototype) && t.render) || r.$$typeof === R.ForwardRef) && ("function" != typeof e || !!(null != (n = e.prototype) && n.render) || e.$$typeof === R.ForwardRef)
        };

    function $(e) {
        return (0, i.isValidElement)(e) && !L(e)
    }
    e.i(815199), e.i(962837), e.i(713882), e.i(523699);
    var U = e.i(883110),
        V = function(e, t) {
            return {
                getMessage: function(n, r) {
                    var a = function(e, t) {
                        for (var n = e, r = 0; r < t.length; r += 1) {
                            if (null == n) return;
                            n = n[t[r]]
                        }
                        return n
                    }(t, n.replace(/\[(\d+)\]/g, ".$1").split(".")) || "";
                    if (a) return a;
                    if ("zh-CN" === e.replace("_", "-")) return r;
                    var o = X["zh-CN"];
                    return o ? o.getMessage(n, r) : r
                },
                locale: e
            }
        },
        G = V("mn_MN", {
            moneySymbol: "₮",
            form: {
                lightFilter: {
                    more: "Илүү",
                    clear: "Цэвэрлэх",
                    confirm: "Баталгаажуулах",
                    itemUnit: "Нэгжүүд"
                }
            },
            tableForm: {
                search: "Хайх",
                reset: "Шинэчлэх",
                submit: "Илгээх",
                collapsed: "Өргөтгөх",
                expand: "Хураах",
                inputPlaceholder: "Утга оруулна уу",
                selectPlaceholder: "Утга сонгоно уу"
            },
            alert: {
                clear: "Цэвэрлэх",
                selected: "Сонгогдсон",
                item: "Нэгж"
            },
            pagination: {
                total: {
                    range: " ",
                    total: "Нийт",
                    item: "мөр"
                }
            },
            tableToolBar: {
                leftPin: "Зүүн тийш бэхлэх",
                rightPin: "Баруун тийш бэхлэх",
                noPin: "Бэхлэхгүй",
                leftFixedTitle: "Зүүн зэрэгцүүлэх",
                rightFixedTitle: "Баруун зэрэгцүүлэх",
                noFixedTitle: "Зэрэгцүүлэхгүй",
                reset: "Шинэчлэх",
                columnDisplay: "Баганаар харуулах",
                columnSetting: "Тохиргоо",
                fullScreen: "Бүтэн дэлгэцээр",
                exitFullScreen: "Бүтэн дэлгэц цуцлах",
                reload: "Шинэчлэх",
                density: "Хэмжээ",
                densityDefault: "Хэвийн",
                densityLarger: "Том",
                densityMiddle: "Дунд",
                densitySmall: "Жижиг"
            },
            stepsForm: {
                next: "Дараах",
                prev: "Өмнөх",
                submit: "Дуусгах"
            },
            loginForm: {
                submitText: "Нэвтрэх"
            },
            editableTable: {
                action: {
                    save: "Хадгалах",
                    cancel: "Цуцлах",
                    delete: "Устгах",
                    add: "Мөр нэмэх"
                }
            },
            switch: {
                open: "Нээх",
                close: "Хаах"
            }
        }),
        K = V("ar_EG", {
            moneySymbol: "$",
            form: {
                lightFilter: {
                    more: "المزيد",
                    clear: "نظف",
                    confirm: "تأكيد",
                    itemUnit: "عناصر"
                }
            },
            tableForm: {
                search: "ابحث",
                reset: "إعادة تعيين",
                submit: "ارسال",
                collapsed: "مُقلص",
                expand: "مُوسع",
                inputPlaceholder: "الرجاء الإدخال",
                selectPlaceholder: "الرجاء الإختيار"
            },
            alert: {
                clear: "نظف",
                selected: "محدد",
                item: "عنصر"
            },
            pagination: {
                total: {
                    range: " ",
                    total: "من",
                    item: "عناصر"
                }
            },
            tableToolBar: {
                leftPin: "ثبت على اليسار",
                rightPin: "ثبت على اليمين",
                noPin: "الغاء التثبيت",
                leftFixedTitle: "لصق على اليسار",
                rightFixedTitle: "لصق على اليمين",
                noFixedTitle: "إلغاء الإلصاق",
                reset: "إعادة تعيين",
                columnDisplay: "الأعمدة المعروضة",
                columnSetting: "الإعدادات",
                fullScreen: "وضع كامل الشاشة",
                exitFullScreen: "الخروج من وضع كامل الشاشة",
                reload: "تحديث",
                density: "الكثافة",
                densityDefault: "افتراضي",
                densityLarger: "أكبر",
                densityMiddle: "وسط",
                densitySmall: "مدمج"
            },
            stepsForm: {
                next: "التالي",
                prev: "السابق",
                submit: "أنهى"
            },
            loginForm: {
                submitText: "تسجيل الدخول"
            },
            editableTable: {
                action: {
                    save: "أنقذ",
                    cancel: "إلغاء الأمر",
                    delete: "حذف",
                    add: "إضافة صف من البيانات"
                }
            },
            switch: {
                open: "مفتوح",
                close: "غلق"
            }
        }),
        Y = V("zh_CN", {
            moneySymbol: "¥",
            deleteThisLine: "删除此项",
            copyThisLine: "复制此项",
            form: {
                lightFilter: {
                    more: "更多筛选",
                    clear: "清除",
                    confirm: "确认",
                    itemUnit: "项"
                }
            },
            tableForm: {
                search: "查询",
                reset: "重置",
                submit: "提交",
                collapsed: "展开",
                expand: "收起",
                inputPlaceholder: "请输入",
                selectPlaceholder: "请选择"
            },
            alert: {
                clear: "取消选择",
                selected: "已选择",
                item: "项"
            },
            pagination: {
                total: {
                    range: "第",
                    total: "条/总共",
                    item: "条"
                }
            },
            tableToolBar: {
                leftPin: "固定在列首",
                rightPin: "固定在列尾",
                noPin: "不固定",
                leftFixedTitle: "固定在左侧",
                rightFixedTitle: "固定在右侧",
                noFixedTitle: "不固定",
                reset: "重置",
                columnDisplay: "列展示",
                columnSetting: "列设置",
                fullScreen: "全屏",
                exitFullScreen: "退出全屏",
                reload: "刷新",
                density: "密度",
                densityDefault: "正常",
                densityLarger: "宽松",
                densityMiddle: "中等",
                densitySmall: "紧凑"
            },
            stepsForm: {
                next: "下一步",
                prev: "上一步",
                submit: "提交"
            },
            loginForm: {
                submitText: "登录"
            },
            editableTable: {
                onlyOneLineEditor: "只能同时编辑一行",
                action: {
                    save: "保存",
                    cancel: "取消",
                    delete: "删除",
                    add: "添加一行数据"
                }
            },
            switch: {
                open: "打开",
                close: "关闭"
            }
        }),
        X = {
            "mn-MN": G,
            "ar-EG": K,
            "zh-CN": Y,
            "en-US": V("en_US", {
                moneySymbol: "$",
                deleteThisLine: "Delete this line",
                copyThisLine: "Copy this line",
                form: {
                    lightFilter: {
                        more: "More",
                        clear: "Clear",
                        confirm: "Confirm",
                        itemUnit: "Items"
                    }
                },
                tableForm: {
                    search: "Query",
                    reset: "Reset",
                    submit: "Submit",
                    collapsed: "Expand",
                    expand: "Collapse",
                    inputPlaceholder: "Please enter",
                    selectPlaceholder: "Please select"
                },
                alert: {
                    clear: "Clear",
                    selected: "Selected",
                    item: "Item"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "of",
                        item: "items"
                    }
                },
                tableToolBar: {
                    leftPin: "Pin to left",
                    rightPin: "Pin to right",
                    noPin: "Unpinned",
                    leftFixedTitle: "Fixed to the left",
                    rightFixedTitle: "Fixed to the right",
                    noFixedTitle: "Not Fixed",
                    reset: "Reset",
                    columnDisplay: "Column Display",
                    columnSetting: "Table Settings",
                    fullScreen: "Full Screen",
                    exitFullScreen: "Exit Full Screen",
                    reload: "Refresh",
                    density: "Density",
                    densityDefault: "Default",
                    densityLarger: "Larger",
                    densityMiddle: "Middle",
                    densitySmall: "Compact"
                },
                stepsForm: {
                    next: "Next",
                    prev: "Previous",
                    submit: "Finish"
                },
                loginForm: {
                    submitText: "Login"
                },
                editableTable: {
                    onlyOneLineEditor: "Only one line can be edited",
                    onlyAddOneLine: "Only one line can be added",
                    action: {
                        save: "Save",
                        cancel: "Cancel",
                        delete: "Delete",
                        add: "add a row of data"
                    }
                },
                switch: {
                    open: "open",
                    close: "close"
                }
            }),
            "en-GB": V("en_GB", {
                moneySymbol: "£",
                form: {
                    lightFilter: {
                        more: "More",
                        clear: "Clear",
                        confirm: "Confirm",
                        itemUnit: "Items"
                    }
                },
                tableForm: {
                    search: "Query",
                    reset: "Reset",
                    submit: "Submit",
                    collapsed: "Expand",
                    expand: "Collapse",
                    inputPlaceholder: "Please enter",
                    selectPlaceholder: "Please select"
                },
                alert: {
                    clear: "Clear",
                    selected: "Selected",
                    item: "Item"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "of",
                        item: "items"
                    }
                },
                tableToolBar: {
                    leftPin: "Pin to left",
                    rightPin: "Pin to right",
                    noPin: "Unpinned",
                    leftFixedTitle: "Fixed to the left",
                    rightFixedTitle: "Fixed to the right",
                    noFixedTitle: "Not Fixed",
                    reset: "Reset",
                    columnDisplay: "Column Display",
                    columnSetting: "Table Settings",
                    fullScreen: "Full Screen",
                    exitFullScreen: "Exit Full Screen",
                    reload: "Refresh",
                    density: "Density",
                    densityDefault: "Default",
                    densityLarger: "Larger",
                    densityMiddle: "Middle",
                    densitySmall: "Compact"
                },
                stepsForm: {
                    next: "Next",
                    prev: "Previous",
                    submit: "Finish"
                },
                loginForm: {
                    submitText: "Login"
                },
                editableTable: {
                    onlyOneLineEditor: "Only one line can be edited",
                    onlyAddOneLine: "Only one line can be added",
                    action: {
                        save: "Save",
                        cancel: "Cancel",
                        delete: "Delete",
                        add: "add a row of data"
                    }
                },
                switch: {
                    open: "open",
                    close: "close"
                }
            }),
            "vi-VN": V("vi_VN", {
                moneySymbol: "₫",
                form: {
                    lightFilter: {
                        more: "Nhiều hơn",
                        clear: "Trong",
                        confirm: "Xác nhận",
                        itemUnit: "Mục"
                    }
                },
                tableForm: {
                    search: "Tìm kiếm",
                    reset: "Làm lại",
                    submit: "Gửi đi",
                    collapsed: "Mở rộng",
                    expand: "Thu gọn",
                    inputPlaceholder: "nhập dữ liệu",
                    selectPlaceholder: "Vui lòng chọn"
                },
                alert: {
                    clear: "Xóa",
                    selected: "đã chọn",
                    item: "mục"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "trên",
                        item: "mặt hàng"
                    }
                },
                tableToolBar: {
                    leftPin: "Ghim trái",
                    rightPin: "Ghim phải",
                    noPin: "Bỏ ghim",
                    leftFixedTitle: "Cố định trái",
                    rightFixedTitle: "Cố định phải",
                    noFixedTitle: "Chưa cố định",
                    reset: "Làm lại",
                    columnDisplay: "Cột hiển thị",
                    columnSetting: "Cấu hình",
                    fullScreen: "Chế độ toàn màn hình",
                    exitFullScreen: "Thoát chế độ toàn màn hình",
                    reload: "Làm mới",
                    density: "Mật độ hiển thị",
                    densityDefault: "Mặc định",
                    densityLarger: "Mặc định",
                    densityMiddle: "Trung bình",
                    densitySmall: "Chật"
                },
                stepsForm: {
                    next: "Sau",
                    prev: "Trước",
                    submit: "Kết thúc"
                },
                loginForm: {
                    submitText: "Đăng nhập"
                },
                editableTable: {
                    action: {
                        save: "Cứu",
                        cancel: "Hủy",
                        delete: "Xóa",
                        add: "thêm một hàng dữ liệu"
                    }
                },
                switch: {
                    open: "mở",
                    close: "đóng"
                }
            }),
            "it-IT": V("it_IT", {
                moneySymbol: "€",
                form: {
                    lightFilter: {
                        more: "più",
                        clear: "pulisci",
                        confirm: "conferma",
                        itemUnit: "elementi"
                    }
                },
                tableForm: {
                    search: "Filtra",
                    reset: "Pulisci",
                    submit: "Invia",
                    collapsed: "Espandi",
                    expand: "Contrai",
                    inputPlaceholder: "Digita",
                    selectPlaceholder: "Seleziona"
                },
                alert: {
                    clear: "Rimuovi",
                    selected: "Selezionati",
                    item: "elementi"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "di",
                        item: "elementi"
                    }
                },
                tableToolBar: {
                    leftPin: "Fissa a sinistra",
                    rightPin: "Fissa a destra",
                    noPin: "Ripristina posizione",
                    leftFixedTitle: "Fissato a sinistra",
                    rightFixedTitle: "Fissato a destra",
                    noFixedTitle: "Non fissato",
                    reset: "Ripristina",
                    columnDisplay: "Disposizione colonne",
                    columnSetting: "Impostazioni",
                    fullScreen: "Modalità schermo intero",
                    exitFullScreen: "Esci da modalità schermo intero",
                    reload: "Ricarica",
                    density: "Grandezza tabella",
                    densityDefault: "predefinito",
                    densityLarger: "Grande",
                    densityMiddle: "Media",
                    densitySmall: "Compatta"
                },
                stepsForm: {
                    next: "successivo",
                    prev: "precedente",
                    submit: "finisci"
                },
                loginForm: {
                    submitText: "Accedi"
                },
                editableTable: {
                    action: {
                        save: "salva",
                        cancel: "annulla",
                        delete: "Delete",
                        add: "add a row of data"
                    }
                },
                switch: {
                    open: "open",
                    close: "chiudi"
                }
            }),
            "ja-JP": V("ja_JP", {
                moneySymbol: "¥",
                form: {
                    lightFilter: {
                        more: "更に",
                        clear: "クリア",
                        confirm: "確認",
                        itemUnit: "アイテム"
                    }
                },
                tableForm: {
                    search: "検索",
                    reset: "リセット",
                    submit: "送信",
                    collapsed: "拡大",
                    expand: "折畳",
                    inputPlaceholder: "入力してください",
                    selectPlaceholder: "選択してください"
                },
                alert: {
                    clear: "クリア",
                    selected: "選択した",
                    item: "アイテム"
                },
                pagination: {
                    total: {
                        range: "レコード",
                        total: "/合計",
                        item: " "
                    }
                },
                tableToolBar: {
                    leftPin: "左に固定",
                    rightPin: "右に固定",
                    noPin: "キャンセル",
                    leftFixedTitle: "左に固定された項目",
                    rightFixedTitle: "右に固定された項目",
                    noFixedTitle: "固定されてない項目",
                    reset: "リセット",
                    columnDisplay: "表示列",
                    columnSetting: "列表示設定",
                    fullScreen: "フルスクリーン",
                    exitFullScreen: "終了",
                    reload: "更新",
                    density: "行高",
                    densityDefault: "デフォルト",
                    densityLarger: "大",
                    densityMiddle: "中",
                    densitySmall: "小"
                },
                stepsForm: {
                    next: "次へ",
                    prev: "前へ",
                    submit: "送信"
                },
                loginForm: {
                    submitText: "ログイン"
                },
                editableTable: {
                    action: {
                        save: "保存",
                        cancel: "キャンセル",
                        delete: "削除",
                        add: "追加"
                    }
                },
                switch: {
                    open: "開く",
                    close: "閉じる"
                }
            }),
            "es-ES": V("es_ES", {
                moneySymbol: "€",
                form: {
                    lightFilter: {
                        more: "Más",
                        clear: "Limpiar",
                        confirm: "Confirmar",
                        itemUnit: "artículos"
                    }
                },
                tableForm: {
                    search: "Buscar",
                    reset: "Limpiar",
                    submit: "Submit",
                    collapsed: "Expandir",
                    expand: "Colapsar",
                    inputPlaceholder: "Ingrese valor",
                    selectPlaceholder: "Seleccione valor"
                },
                alert: {
                    clear: "Limpiar",
                    selected: "Seleccionado",
                    item: "Articulo"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "de",
                        item: "artículos"
                    }
                },
                tableToolBar: {
                    leftPin: "Pin a la izquierda",
                    rightPin: "Pin a la derecha",
                    noPin: "Sin Pin",
                    leftFixedTitle: "Fijado a la izquierda",
                    rightFixedTitle: "Fijado a la derecha",
                    noFixedTitle: "Sin Fijar",
                    reset: "Reiniciar",
                    columnDisplay: "Mostrar Columna",
                    columnSetting: "Configuración",
                    fullScreen: "Pantalla Completa",
                    exitFullScreen: "Salir Pantalla Completa",
                    reload: "Refrescar",
                    density: "Densidad",
                    densityDefault: "Por Defecto",
                    densityLarger: "Largo",
                    densityMiddle: "Medio",
                    densitySmall: "Compacto"
                },
                stepsForm: {
                    next: "Siguiente",
                    prev: "Anterior",
                    submit: "Finalizar"
                },
                loginForm: {
                    submitText: "Entrar"
                },
                editableTable: {
                    action: {
                        save: "Guardar",
                        cancel: "Descartar",
                        delete: "Borrar",
                        add: "añadir una fila de datos"
                    }
                },
                switch: {
                    open: "abrir",
                    close: "cerrar"
                }
            }),
            "ca-ES": V("ca_ES", {
                moneySymbol: "€",
                form: {
                    lightFilter: {
                        more: "Més",
                        clear: "Netejar",
                        confirm: "Confirmar",
                        itemUnit: "Elements"
                    }
                },
                tableForm: {
                    search: "Cercar",
                    reset: "Netejar",
                    submit: "Enviar",
                    collapsed: "Expandir",
                    expand: "Col·lapsar",
                    inputPlaceholder: "Introduïu valor",
                    selectPlaceholder: "Seleccioneu valor"
                },
                alert: {
                    clear: "Netejar",
                    selected: "Seleccionat",
                    item: "Article"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "de",
                        item: "articles"
                    }
                },
                tableToolBar: {
                    leftPin: "Pin a l'esquerra",
                    rightPin: "Pin a la dreta",
                    noPin: "Sense Pin",
                    leftFixedTitle: "Fixat a l'esquerra",
                    rightFixedTitle: "Fixat a la dreta",
                    noFixedTitle: "Sense fixar",
                    reset: "Reiniciar",
                    columnDisplay: "Mostrar Columna",
                    columnSetting: "Configuració",
                    fullScreen: "Pantalla Completa",
                    exitFullScreen: "Sortir Pantalla Completa",
                    reload: "Refrescar",
                    density: "Densitat",
                    densityDefault: "Per Defecte",
                    densityLarger: "Llarg",
                    densityMiddle: "Mitjà",
                    densitySmall: "Compacte"
                },
                stepsForm: {
                    next: "Següent",
                    prev: "Anterior",
                    submit: "Finalizar"
                },
                loginForm: {
                    submitText: "Entrar"
                },
                editableTable: {
                    action: {
                        save: "Guardar",
                        cancel: "Cancel·lar",
                        delete: "Eliminar",
                        add: "afegir una fila de dades"
                    }
                },
                switch: {
                    open: "obert",
                    close: "tancat"
                }
            }),
            "ru-RU": V("ru_RU", {
                moneySymbol: "₽",
                form: {
                    lightFilter: {
                        more: "Еще",
                        clear: "Очистить",
                        confirm: "ОК",
                        itemUnit: "Позиции"
                    }
                },
                tableForm: {
                    search: "Найти",
                    reset: "Сброс",
                    submit: "Отправить",
                    collapsed: "Развернуть",
                    expand: "Свернуть",
                    inputPlaceholder: "Введите значение",
                    selectPlaceholder: "Выберите значение"
                },
                alert: {
                    clear: "Очистить",
                    selected: "Выбрано",
                    item: "элементов"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "из",
                        item: "элементов"
                    }
                },
                tableToolBar: {
                    leftPin: "Закрепить слева",
                    rightPin: "Закрепить справа",
                    noPin: "Открепить",
                    leftFixedTitle: "Закреплено слева",
                    rightFixedTitle: "Закреплено справа",
                    noFixedTitle: "Не закреплено",
                    reset: "Сброс",
                    columnDisplay: "Отображение столбца",
                    columnSetting: "Настройки",
                    fullScreen: "Полный экран",
                    exitFullScreen: "Выйти из полноэкранного режима",
                    reload: "Обновить",
                    density: "Размер",
                    densityDefault: "По умолчанию",
                    densityLarger: "Большой",
                    densityMiddle: "Средний",
                    densitySmall: "Сжатый"
                },
                stepsForm: {
                    next: "Следующий",
                    prev: "Предыдущий",
                    submit: "Завершить"
                },
                loginForm: {
                    submitText: "Вход"
                },
                editableTable: {
                    action: {
                        save: "Сохранить",
                        cancel: "Отменить",
                        delete: "Удалить",
                        add: "добавить ряд данных"
                    }
                },
                switch: {
                    open: "Открытый чемпионат мира по теннису",
                    close: "По адресу:"
                }
            }),
            "sr-RS": V("sr_RS", {
                moneySymbol: "RSD",
                form: {
                    lightFilter: {
                        more: "Više",
                        clear: "Očisti",
                        confirm: "Potvrdi",
                        itemUnit: "Stavke"
                    }
                },
                tableForm: {
                    search: "Pronađi",
                    reset: "Resetuj",
                    submit: "Pošalji",
                    collapsed: "Proširi",
                    expand: "Skupi",
                    inputPlaceholder: "Molimo unesite",
                    selectPlaceholder: "Molimo odaberite"
                },
                alert: {
                    clear: "Očisti",
                    selected: "Odabrano",
                    item: "Stavka"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "od",
                        item: "stavki"
                    }
                },
                tableToolBar: {
                    leftPin: "Zakači levo",
                    rightPin: "Zakači desno",
                    noPin: "Nije zakačeno",
                    leftFixedTitle: "Fiksirano levo",
                    rightFixedTitle: "Fiksirano desno",
                    noFixedTitle: "Nije fiksirano",
                    reset: "Resetuj",
                    columnDisplay: "Prikaz kolona",
                    columnSetting: "Podešavanja",
                    fullScreen: "Pun ekran",
                    exitFullScreen: "Zatvori pun ekran",
                    reload: "Osveži",
                    density: "Veličina",
                    densityDefault: "Podrazumevana",
                    densityLarger: "Veća",
                    densityMiddle: "Srednja",
                    densitySmall: "Kompaktna"
                },
                stepsForm: {
                    next: "Dalje",
                    prev: "Nazad",
                    submit: "Gotovo"
                },
                loginForm: {
                    submitText: "Prijavi se"
                },
                editableTable: {
                    action: {
                        save: "Sačuvaj",
                        cancel: "Poništi",
                        delete: "Obriši",
                        add: "dodajte red podataka"
                    }
                },
                switch: {
                    open: "Отворите",
                    close: "Затворите"
                }
            }),
            "ms-MY": V("ms_MY", {
                moneySymbol: "RM",
                form: {
                    lightFilter: {
                        more: "Lebih banyak",
                        clear: "Jelas",
                        confirm: "Mengesahkan",
                        itemUnit: "Item"
                    }
                },
                tableForm: {
                    search: "Cari",
                    reset: "Menetapkan semula",
                    submit: "Hantar",
                    collapsed: "Kembang",
                    expand: "Kuncup",
                    inputPlaceholder: "Sila masuk",
                    selectPlaceholder: "Sila pilih"
                },
                alert: {
                    clear: "Padam",
                    selected: "Dipilih",
                    item: "Item"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "daripada",
                        item: "item"
                    }
                },
                tableToolBar: {
                    leftPin: "Pin ke kiri",
                    rightPin: "Pin ke kanan",
                    noPin: "Tidak pin",
                    leftFixedTitle: "Tetap ke kiri",
                    rightFixedTitle: "Tetap ke kanan",
                    noFixedTitle: "Tidak Tetap",
                    reset: "Menetapkan semula",
                    columnDisplay: "Lajur",
                    columnSetting: "Settings",
                    fullScreen: "Full Screen",
                    exitFullScreen: "Keluar Full Screen",
                    reload: "Muat Semula",
                    density: "Densiti",
                    densityDefault: "Biasa",
                    densityLarger: "Besar",
                    densityMiddle: "Tengah",
                    densitySmall: "Kecil"
                },
                stepsForm: {
                    next: "Seterusnya",
                    prev: "Sebelumnya",
                    submit: "Selesai"
                },
                loginForm: {
                    submitText: "Log Masuk"
                },
                editableTable: {
                    action: {
                        save: "Simpan",
                        cancel: "Membatalkan",
                        delete: "Menghapuskan",
                        add: "tambah baris data"
                    }
                },
                switch: {
                    open: "Terbuka",
                    close: "Tutup"
                }
            }),
            "zh-TW": V("zh_TW", {
                moneySymbol: "NT$",
                deleteThisLine: "刪除此项",
                copyThisLine: "複製此项",
                form: {
                    lightFilter: {
                        more: "更多篩選",
                        clear: "清除",
                        confirm: "確認",
                        itemUnit: "項"
                    }
                },
                tableForm: {
                    search: "查詢",
                    reset: "重置",
                    submit: "提交",
                    collapsed: "展開",
                    expand: "收起",
                    inputPlaceholder: "請輸入",
                    selectPlaceholder: "請選擇"
                },
                alert: {
                    clear: "取消選擇",
                    selected: "已選擇",
                    item: "項"
                },
                pagination: {
                    total: {
                        range: "第",
                        total: "條/總共",
                        item: "條"
                    }
                },
                tableToolBar: {
                    leftPin: "固定到左邊",
                    rightPin: "固定到右邊",
                    noPin: "不固定",
                    leftFixedTitle: "固定在左側",
                    rightFixedTitle: "固定在右側",
                    noFixedTitle: "不固定",
                    reset: "重置",
                    columnDisplay: "列展示",
                    columnSetting: "列設置",
                    fullScreen: "全屏",
                    exitFullScreen: "退出全屏",
                    reload: "刷新",
                    density: "密度",
                    densityDefault: "正常",
                    densityLarger: "寬鬆",
                    densityMiddle: "中等",
                    densitySmall: "緊湊"
                },
                stepsForm: {
                    next: "下一步",
                    prev: "上一步",
                    submit: "完成"
                },
                loginForm: {
                    submitText: "登入"
                },
                editableTable: {
                    onlyOneLineEditor: "只能同時編輯一行",
                    action: {
                        save: "保存",
                        cancel: "取消",
                        delete: "刪除",
                        add: "新增一行資料"
                    }
                },
                switch: {
                    open: "打開",
                    close: "關閉"
                }
            }),
            "zh-HK": V("zh_HK", {
                moneySymbol: "HK$",
                deleteThisLine: "刪除此項",
                copyThisLine: "複製此項",
                form: {
                    lightFilter: {
                        more: "更多篩選",
                        clear: "清除",
                        confirm: "確認",
                        itemUnit: "項"
                    }
                },
                tableForm: {
                    search: "搜尋",
                    reset: "重設",
                    submit: "提交",
                    collapsed: "展開",
                    expand: "收起",
                    inputPlaceholder: "請輸入",
                    selectPlaceholder: "請選擇"
                },
                alert: {
                    clear: "取消選取",
                    selected: "已選取",
                    item: "項"
                },
                pagination: {
                    total: {
                        range: "第",
                        total: "項/總共",
                        item: "項"
                    }
                },
                tableToolBar: {
                    leftPin: "固定到左邊",
                    rightPin: "固定到右邊",
                    noPin: "不固定",
                    leftFixedTitle: "固定在左側",
                    rightFixedTitle: "固定在右側",
                    noFixedTitle: "不固定",
                    reset: "重設",
                    columnDisplay: "列顯示",
                    columnSetting: "列設定",
                    fullScreen: "全螢幕",
                    exitFullScreen: "退出全螢幕",
                    reload: "重新整理",
                    density: "密度",
                    densityDefault: "正常",
                    densityLarger: "寬鬆",
                    densityMiddle: "中等",
                    densitySmall: "緊湊"
                },
                stepsForm: {
                    next: "下一步",
                    prev: "上一步",
                    submit: "完成"
                },
                loginForm: {
                    submitText: "登入"
                },
                editableTable: {
                    onlyOneLineEditor: "只能同時編輯一行",
                    action: {
                        save: "保存",
                        cancel: "取消",
                        delete: "刪除",
                        add: "新增一行資料"
                    }
                },
                switch: {
                    open: "打開",
                    close: "關閉"
                }
            }),
            "fr-FR": V("fr_FR", {
                moneySymbol: "€",
                form: {
                    lightFilter: {
                        more: "Plus",
                        clear: "Effacer",
                        confirm: "Confirmer",
                        itemUnit: "Items"
                    }
                },
                tableForm: {
                    search: "Rechercher",
                    reset: "Réinitialiser",
                    submit: "Envoyer",
                    collapsed: "Agrandir",
                    expand: "Réduire",
                    inputPlaceholder: "Entrer une valeur",
                    selectPlaceholder: "Sélectionner une valeur"
                },
                alert: {
                    clear: "Réinitialiser",
                    selected: "Sélectionné",
                    item: "Item"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "sur",
                        item: "éléments"
                    }
                },
                tableToolBar: {
                    leftPin: "Épingler à gauche",
                    rightPin: "Épingler à gauche",
                    noPin: "Sans épingle",
                    leftFixedTitle: "Fixer à gauche",
                    rightFixedTitle: "Fixer à droite",
                    noFixedTitle: "Non fixé",
                    reset: "Réinitialiser",
                    columnDisplay: "Affichage colonne",
                    columnSetting: "Réglages",
                    fullScreen: "Plein écran",
                    exitFullScreen: "Quitter Plein écran",
                    reload: "Rafraichir",
                    density: "Densité",
                    densityDefault: "Par défaut",
                    densityLarger: "Larger",
                    densityMiddle: "Moyenne",
                    densitySmall: "Compacte"
                },
                stepsForm: {
                    next: "Suivante",
                    prev: "Précédente",
                    submit: "Finaliser"
                },
                loginForm: {
                    submitText: "Se connecter"
                },
                editableTable: {
                    action: {
                        save: "Sauvegarder",
                        cancel: "Annuler",
                        delete: "Supprimer",
                        add: "ajouter une ligne de données"
                    }
                },
                switch: {
                    open: "ouvert",
                    close: "près"
                }
            }),
            "pt-BR": V("pt_BR", {
                moneySymbol: "R$",
                form: {
                    lightFilter: {
                        more: "Mais",
                        clear: "Limpar",
                        confirm: "Confirmar",
                        itemUnit: "Itens"
                    }
                },
                tableForm: {
                    search: "Filtrar",
                    reset: "Limpar",
                    submit: "Confirmar",
                    collapsed: "Expandir",
                    expand: "Colapsar",
                    inputPlaceholder: "Por favor insira",
                    selectPlaceholder: "Por favor selecione"
                },
                alert: {
                    clear: "Limpar",
                    selected: "Selecionado(s)",
                    item: "Item(s)"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "de",
                        item: "itens"
                    }
                },
                tableToolBar: {
                    leftPin: "Fixar à esquerda",
                    rightPin: "Fixar à direita",
                    noPin: "Desfixado",
                    leftFixedTitle: "Fixado à esquerda",
                    rightFixedTitle: "Fixado à direita",
                    noFixedTitle: "Não fixado",
                    reset: "Limpar",
                    columnDisplay: "Mostrar Coluna",
                    columnSetting: "Configurações",
                    fullScreen: "Tela Cheia",
                    exitFullScreen: "Sair da Tela Cheia",
                    reload: "Atualizar",
                    density: "Densidade",
                    densityDefault: "Padrão",
                    densityLarger: "Largo",
                    densityMiddle: "Médio",
                    densitySmall: "Compacto"
                },
                stepsForm: {
                    next: "Próximo",
                    prev: "Anterior",
                    submit: "Enviar"
                },
                loginForm: {
                    submitText: "Entrar"
                },
                editableTable: {
                    action: {
                        save: "Salvar",
                        cancel: "Cancelar",
                        delete: "Apagar",
                        add: "adicionar uma linha de dados"
                    }
                },
                switch: {
                    open: "abrir",
                    close: "fechar"
                }
            }),
            "ko-KR": V("ko_KR", {
                moneySymbol: "₩",
                form: {
                    lightFilter: {
                        more: "더보기",
                        clear: "초기화",
                        confirm: "확인",
                        itemUnit: "건수"
                    }
                },
                tableForm: {
                    search: "조회",
                    reset: "초기화",
                    submit: "제출",
                    collapsed: "확장",
                    expand: "닫기",
                    inputPlaceholder: "입력해 주세요",
                    selectPlaceholder: "선택해 주세요"
                },
                alert: {
                    clear: "취소",
                    selected: "선택",
                    item: "건"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "/ 총",
                        item: "건"
                    }
                },
                tableToolBar: {
                    leftPin: "왼쪽으로 핀",
                    rightPin: "오른쪽으로 핀",
                    noPin: "핀 제거",
                    leftFixedTitle: "왼쪽으로 고정",
                    rightFixedTitle: "오른쪽으로 고정",
                    noFixedTitle: "비고정",
                    reset: "초기화",
                    columnDisplay: "컬럼 표시",
                    columnSetting: "설정",
                    fullScreen: "전체 화면",
                    exitFullScreen: "전체 화면 취소",
                    reload: "새로 고침",
                    density: "여백",
                    densityDefault: "기본",
                    densityLarger: "많은 여백",
                    densityMiddle: "중간 여백",
                    densitySmall: "좁은 여백"
                },
                stepsForm: {
                    next: "다음",
                    prev: "이전",
                    submit: "종료"
                },
                loginForm: {
                    submitText: "로그인"
                },
                editableTable: {
                    action: {
                        save: "저장",
                        cancel: "취소",
                        delete: "삭제",
                        add: "데이터 행 추가"
                    }
                },
                switch: {
                    open: "열",
                    close: "가까 운"
                }
            }),
            "id-ID": V("id_ID", {
                moneySymbol: "RP",
                form: {
                    lightFilter: {
                        more: "Lebih",
                        clear: "Hapus",
                        confirm: "Konfirmasi",
                        itemUnit: "Unit"
                    }
                },
                tableForm: {
                    search: "Cari",
                    reset: "Atur ulang",
                    submit: "Kirim",
                    collapsed: "Lebih sedikit",
                    expand: "Lebih banyak",
                    inputPlaceholder: "Masukkan pencarian",
                    selectPlaceholder: "Pilih"
                },
                alert: {
                    clear: "Hapus",
                    selected: "Dipilih",
                    item: "Butir"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "Dari",
                        item: "Butir"
                    }
                },
                tableToolBar: {
                    leftPin: "Pin kiri",
                    rightPin: "Pin kanan",
                    noPin: "Tidak ada pin",
                    leftFixedTitle: "Rata kiri",
                    rightFixedTitle: "Rata kanan",
                    noFixedTitle: "Tidak tetap",
                    reset: "Atur ulang",
                    columnDisplay: "Tampilan kolom",
                    columnSetting: "Pengaturan",
                    fullScreen: "Layar penuh",
                    exitFullScreen: "Keluar layar penuh",
                    reload: "Atur ulang",
                    density: "Kerapatan",
                    densityDefault: "Standar",
                    densityLarger: "Lebih besar",
                    densityMiddle: "Sedang",
                    densitySmall: "Rapat"
                },
                stepsForm: {
                    next: "Selanjutnya",
                    prev: "Sebelumnya",
                    submit: "Selesai"
                },
                loginForm: {
                    submitText: "Login"
                },
                editableTable: {
                    action: {
                        save: "simpan",
                        cancel: "batal",
                        delete: "hapus",
                        add: "Tambahkan baris data"
                    }
                },
                switch: {
                    open: "buka",
                    close: "tutup"
                }
            }),
            "de-DE": V("de_DE", {
                moneySymbol: "€",
                form: {
                    lightFilter: {
                        more: "Mehr",
                        clear: "Zurücksetzen",
                        confirm: "Bestätigen",
                        itemUnit: "Einträge"
                    }
                },
                tableForm: {
                    search: "Suchen",
                    reset: "Zurücksetzen",
                    submit: "Absenden",
                    collapsed: "Zeige mehr",
                    expand: "Zeige weniger",
                    inputPlaceholder: "Bitte eingeben",
                    selectPlaceholder: "Bitte auswählen"
                },
                alert: {
                    clear: "Zurücksetzen",
                    selected: "Ausgewählt",
                    item: "Eintrag"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "von",
                        item: "Einträgen"
                    }
                },
                tableToolBar: {
                    leftPin: "Links anheften",
                    rightPin: "Rechts anheften",
                    noPin: "Nicht angeheftet",
                    leftFixedTitle: "Links fixiert",
                    rightFixedTitle: "Rechts fixiert",
                    noFixedTitle: "Nicht fixiert",
                    reset: "Zurücksetzen",
                    columnDisplay: "Angezeigte Reihen",
                    columnSetting: "Einstellungen",
                    fullScreen: "Vollbild",
                    exitFullScreen: "Vollbild verlassen",
                    reload: "Aktualisieren",
                    density: "Abstand",
                    densityDefault: "Standard",
                    densityLarger: "Größer",
                    densityMiddle: "Mittel",
                    densitySmall: "Kompakt"
                },
                stepsForm: {
                    next: "Weiter",
                    prev: "Zurück",
                    submit: "Abschließen"
                },
                loginForm: {
                    submitText: "Anmelden"
                },
                editableTable: {
                    action: {
                        save: "Retten",
                        cancel: "Abbrechen",
                        delete: "Löschen",
                        add: "Hinzufügen einer Datenzeile"
                    }
                },
                switch: {
                    open: "offen",
                    close: "schließen"
                }
            }),
            "fa-IR": V("fa_IR", {
                moneySymbol: "تومان",
                form: {
                    lightFilter: {
                        more: "بیشتر",
                        clear: "پاک کردن",
                        confirm: "تایید",
                        itemUnit: "مورد"
                    }
                },
                tableForm: {
                    search: "جستجو",
                    reset: "بازنشانی",
                    submit: "تایید",
                    collapsed: "نمایش بیشتر",
                    expand: "نمایش کمتر",
                    inputPlaceholder: "پیدا کنید",
                    selectPlaceholder: "انتخاب کنید"
                },
                alert: {
                    clear: "پاک سازی",
                    selected: "انتخاب",
                    item: "مورد"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "از",
                        item: "مورد"
                    }
                },
                tableToolBar: {
                    leftPin: "سنجاق به چپ",
                    rightPin: "سنجاق به راست",
                    noPin: "سنجاق نشده",
                    leftFixedTitle: "ثابت شده در چپ",
                    rightFixedTitle: "ثابت شده در راست",
                    noFixedTitle: "شناور",
                    reset: "بازنشانی",
                    columnDisplay: "نمایش همه",
                    columnSetting: "تنظیمات",
                    fullScreen: "تمام صفحه",
                    exitFullScreen: "خروج از حالت تمام صفحه",
                    reload: "تازه سازی",
                    density: "تراکم",
                    densityDefault: "پیش فرض",
                    densityLarger: "بزرگ",
                    densityMiddle: "متوسط",
                    densitySmall: "کوچک"
                },
                stepsForm: {
                    next: "بعدی",
                    prev: "قبلی",
                    submit: "اتمام"
                },
                loginForm: {
                    submitText: "ورود"
                },
                editableTable: {
                    action: {
                        save: "ذخیره",
                        cancel: "لغو",
                        delete: "حذف",
                        add: "یک ردیف داده اضافه کنید"
                    }
                },
                switch: {
                    open: "باز",
                    close: "نزدیک"
                }
            }),
            "tr-TR": V("tr_TR", {
                moneySymbol: "₺",
                form: {
                    lightFilter: {
                        more: "Daha Fazla",
                        clear: "Temizle",
                        confirm: "Onayla",
                        itemUnit: "Öğeler"
                    }
                },
                tableForm: {
                    search: "Filtrele",
                    reset: "Sıfırla",
                    submit: "Gönder",
                    collapsed: "Daha fazla",
                    expand: "Daha az",
                    inputPlaceholder: "Filtrelemek için bir değer girin",
                    selectPlaceholder: "Filtrelemek için bir değer seçin"
                },
                alert: {
                    clear: "Temizle",
                    selected: "Seçili",
                    item: "Öğe"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "Toplam",
                        item: "Öğe"
                    }
                },
                tableToolBar: {
                    leftPin: "Sola sabitle",
                    rightPin: "Sağa sabitle",
                    noPin: "Sabitlemeyi kaldır",
                    leftFixedTitle: "Sola sabitlendi",
                    rightFixedTitle: "Sağa sabitlendi",
                    noFixedTitle: "Sabitlenmedi",
                    reset: "Sıfırla",
                    columnDisplay: "Kolon Görünümü",
                    columnSetting: "Ayarlar",
                    fullScreen: "Tam Ekran",
                    exitFullScreen: "Tam Ekrandan Çık",
                    reload: "Yenile",
                    density: "Kalınlık",
                    densityDefault: "Varsayılan",
                    densityLarger: "Büyük",
                    densityMiddle: "Orta",
                    densitySmall: "Küçük"
                },
                stepsForm: {
                    next: "Sıradaki",
                    prev: "Önceki",
                    submit: "Gönder"
                },
                loginForm: {
                    submitText: "Giriş Yap"
                },
                editableTable: {
                    action: {
                        save: "Kaydet",
                        cancel: "Vazgeç",
                        delete: "Sil",
                        add: "foegje in rige gegevens ta"
                    }
                },
                switch: {
                    open: "açık",
                    close: "kapatmak"
                }
            }),
            "pl-PL": V("pl_PL", {
                moneySymbol: "zł",
                form: {
                    lightFilter: {
                        more: "Więcej",
                        clear: "Wyczyść",
                        confirm: "Potwierdź",
                        itemUnit: "Ilość"
                    }
                },
                tableForm: {
                    search: "Szukaj",
                    reset: "Reset",
                    submit: "Zatwierdź",
                    collapsed: "Pokaż wiecej",
                    expand: "Pokaż mniej",
                    inputPlaceholder: "Proszę podać",
                    selectPlaceholder: "Proszę wybrać"
                },
                alert: {
                    clear: "Wyczyść",
                    selected: "Wybrane",
                    item: "Wpis"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "z",
                        item: "Wpisów"
                    }
                },
                tableToolBar: {
                    leftPin: "Przypnij do lewej",
                    rightPin: "Przypnij do prawej",
                    noPin: "Odepnij",
                    leftFixedTitle: "Przypięte do lewej",
                    rightFixedTitle: "Przypięte do prawej",
                    noFixedTitle: "Nieprzypięte",
                    reset: "Reset",
                    columnDisplay: "Wyświetlane wiersze",
                    columnSetting: "Ustawienia",
                    fullScreen: "Pełen ekran",
                    exitFullScreen: "Zamknij pełen ekran",
                    reload: "Odśwież",
                    density: "Odstęp",
                    densityDefault: "Standard",
                    densityLarger: "Wiekszy",
                    densityMiddle: "Sredni",
                    densitySmall: "Kompaktowy"
                },
                stepsForm: {
                    next: "Weiter",
                    prev: "Zurück",
                    submit: "Abschließen"
                },
                loginForm: {
                    submitText: "Zaloguj się"
                },
                editableTable: {
                    action: {
                        save: "Zapisać",
                        cancel: "Anuluj",
                        delete: "Usunąć",
                        add: "dodawanie wiersza danych"
                    }
                },
                switch: {
                    open: "otwierać",
                    close: "zamykać"
                }
            }),
            "hr-HR": V("hr_", {
                moneySymbol: "kn",
                form: {
                    lightFilter: {
                        more: "Više",
                        clear: "Očisti",
                        confirm: "Potvrdi",
                        itemUnit: "Stavke"
                    }
                },
                tableForm: {
                    search: "Pretraži",
                    reset: "Poništi",
                    submit: "Potvrdi",
                    collapsed: "Raširi",
                    expand: "Skupi",
                    inputPlaceholder: "Unesite",
                    selectPlaceholder: "Odaberite"
                },
                alert: {
                    clear: "Očisti",
                    selected: "Odaberi",
                    item: "stavke"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "od",
                        item: "stavke"
                    }
                },
                tableToolBar: {
                    leftPin: "Prikači lijevo",
                    rightPin: "Prikači desno",
                    noPin: "Bez prikačenja",
                    leftFixedTitle: "Fiksiraj lijevo",
                    rightFixedTitle: "Fiksiraj desno",
                    noFixedTitle: "Bez fiksiranja",
                    reset: "Resetiraj",
                    columnDisplay: "Prikaz stupaca",
                    columnSetting: "Postavke",
                    fullScreen: "Puni zaslon",
                    exitFullScreen: "Izađi iz punog zaslona",
                    reload: "Ponovno učitaj",
                    density: "Veličina",
                    densityDefault: "Zadano",
                    densityLarger: "Veliko",
                    densityMiddle: "Srednje",
                    densitySmall: "Malo"
                },
                stepsForm: {
                    next: "Sljedeći",
                    prev: "Prethodni",
                    submit: "Kraj"
                },
                loginForm: {
                    submitText: "Prijava"
                },
                editableTable: {
                    action: {
                        save: "Spremi",
                        cancel: "Odustani",
                        delete: "Obriši",
                        add: "dodajte red podataka"
                    }
                },
                switch: {
                    open: "otvori",
                    close: "zatvori"
                }
            }),
            "th-TH": V("th_TH", {
                moneySymbol: "฿",
                deleteThisLine: "ลบบรรทัดนี้",
                copyThisLine: "คัดลอกบรรทัดนี้",
                form: {
                    lightFilter: {
                        more: "มากกว่า",
                        clear: "ชัดเจน",
                        confirm: "ยืนยัน",
                        itemUnit: "รายการ"
                    }
                },
                tableForm: {
                    search: "สอบถาม",
                    reset: "รีเซ็ต",
                    submit: "ส่ง",
                    collapsed: "ขยาย",
                    expand: "ทรุด",
                    inputPlaceholder: "กรุณาป้อน",
                    selectPlaceholder: "โปรดเลือก"
                },
                alert: {
                    clear: "ชัดเจน",
                    selected: "เลือกแล้ว",
                    item: "รายการ"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "ของ",
                        item: "รายการ"
                    }
                },
                tableToolBar: {
                    leftPin: "ปักหมุดไปทางซ้าย",
                    rightPin: "ปักหมุดไปทางขวา",
                    noPin: "เลิกตรึงแล้ว",
                    leftFixedTitle: "แก้ไขด้านซ้าย",
                    rightFixedTitle: "แก้ไขด้านขวา",
                    noFixedTitle: "ไม่คงที่",
                    reset: "รีเซ็ต",
                    columnDisplay: "การแสดงคอลัมน์",
                    columnSetting: "การตั้งค่า",
                    fullScreen: "เต็มจอ",
                    exitFullScreen: "ออกจากโหมดเต็มหน้าจอ",
                    reload: "รีเฟรช",
                    density: "ความหนาแน่น",
                    densityDefault: "ค่าเริ่มต้น",
                    densityLarger: "ขนาดใหญ่ขึ้น",
                    densityMiddle: "กลาง",
                    densitySmall: "กะทัดรัด"
                },
                stepsForm: {
                    next: "ถัดไป",
                    prev: "ก่อนหน้า",
                    submit: "เสร็จ"
                },
                loginForm: {
                    submitText: "เข้าสู่ระบบ"
                },
                editableTable: {
                    onlyOneLineEditor: "แก้ไขได้เพียงบรรทัดเดียวเท่านั้น",
                    action: {
                        save: "บันทึก",
                        cancel: "ยกเลิก",
                        delete: "ลบ",
                        add: "เพิ่มแถวของข้อมูล"
                    }
                },
                switch: {
                    open: "เปิด",
                    close: "ปิด"
                }
            }),
            "cs-CZ": V("cs_cz", {
                moneySymbol: "Kč",
                deleteThisLine: "Smazat tento řádek",
                copyThisLine: "Kopírovat tento řádek",
                form: {
                    lightFilter: {
                        more: "Víc",
                        clear: "Vymazat",
                        confirm: "Potvrdit",
                        itemUnit: "Položky"
                    }
                },
                tableForm: {
                    search: "Hledat",
                    reset: "Resetovat",
                    submit: "Odeslat",
                    collapsed: "Zvětšit",
                    expand: "Zmenšit",
                    inputPlaceholder: "Zadejte prosím",
                    selectPlaceholder: "Vyberte prosím"
                },
                alert: {
                    clear: "Vymazat",
                    selected: "Vybráno",
                    item: "Položka"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "z",
                        item: "položek"
                    }
                },
                tableToolBar: {
                    leftPin: "Připnout doleva",
                    rightPin: "Připnout doprava",
                    noPin: "Odepnuto",
                    leftFixedTitle: "Fixováno nalevo",
                    rightFixedTitle: "Fixováno napravo",
                    noFixedTitle: "Nefixováno",
                    reset: "Resetovat",
                    columnDisplay: "Zobrazení sloupců",
                    columnSetting: "Nastavení",
                    fullScreen: "Celá obrazovka",
                    exitFullScreen: "Ukončit celou obrazovku",
                    reload: "Obnovit",
                    density: "Hustota",
                    densityDefault: "Výchozí",
                    densityLarger: "Větší",
                    densityMiddle: "Střední",
                    densitySmall: "Kompaktní"
                },
                stepsForm: {
                    next: "Další",
                    prev: "Předchozí",
                    submit: "Dokončit"
                },
                loginForm: {
                    submitText: "Přihlásit se"
                },
                editableTable: {
                    onlyOneLineEditor: "Upravit lze pouze jeden řádek",
                    action: {
                        save: "Uložit",
                        cancel: "Zrušit",
                        delete: "Vymazat",
                        add: "Přidat řádek"
                    }
                },
                switch: {
                    open: "Otevřít",
                    close: "Zavřít"
                }
            }),
            "sk-SK": V("sk_SK", {
                moneySymbol: "€",
                deleteThisLine: "Odstrániť tento riadok",
                copyThisLine: "Skopírujte tento riadok",
                form: {
                    lightFilter: {
                        more: "Viac",
                        clear: "Vyčistiť",
                        confirm: "Potvrďte",
                        itemUnit: "Položky"
                    }
                },
                tableForm: {
                    search: "Vyhladať",
                    reset: "Resetovať",
                    submit: "Odoslať",
                    collapsed: "Rozbaliť",
                    expand: "Zbaliť",
                    inputPlaceholder: "Prosím, zadajte",
                    selectPlaceholder: "Prosím, vyberte"
                },
                alert: {
                    clear: "Vyčistiť",
                    selected: "Vybraný",
                    item: "Položka"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "z",
                        item: "položiek"
                    }
                },
                tableToolBar: {
                    leftPin: "Pripnúť vľavo",
                    rightPin: "Pripnúť vpravo",
                    noPin: "Odopnuté",
                    leftFixedTitle: "Fixované na ľavo",
                    rightFixedTitle: "Fixované na pravo",
                    noFixedTitle: "Nefixované",
                    reset: "Resetovať",
                    columnDisplay: "Zobrazenie stĺpcov",
                    columnSetting: "Nastavenia",
                    fullScreen: "Celá obrazovka",
                    exitFullScreen: "Ukončiť celú obrazovku",
                    reload: "Obnoviť",
                    density: "Hustota",
                    densityDefault: "Predvolené",
                    densityLarger: "Väčšie",
                    densityMiddle: "Stredné",
                    densitySmall: "Kompaktné"
                },
                stepsForm: {
                    next: "Ďalšie",
                    prev: "Predchádzajúce",
                    submit: "Potvrdiť"
                },
                loginForm: {
                    submitText: "Prihlásiť sa"
                },
                editableTable: {
                    onlyOneLineEditor: "Upravovať možno iba jeden riadok",
                    action: {
                        save: "Uložiť",
                        cancel: "Zrušiť",
                        delete: "Odstrániť",
                        add: "pridať riadok údajov"
                    }
                },
                switch: {
                    open: "otvoriť",
                    close: "zavrieť"
                }
            }),
            "he-IL": V("he_IL", {
                moneySymbol: "₪",
                deleteThisLine: "מחק שורה זו",
                copyThisLine: "העתק שורה זו",
                form: {
                    lightFilter: {
                        more: "יותר",
                        clear: "נקה",
                        confirm: "אישור",
                        itemUnit: "פריטים"
                    }
                },
                tableForm: {
                    search: "חיפוש",
                    reset: "איפוס",
                    submit: "שלח",
                    collapsed: "הרחב",
                    expand: "כווץ",
                    inputPlaceholder: "אנא הכנס",
                    selectPlaceholder: "אנא בחר"
                },
                alert: {
                    clear: "נקה",
                    selected: "נבחר",
                    item: "פריט"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "מתוך",
                        item: "פריטים"
                    }
                },
                tableToolBar: {
                    leftPin: "הצמד לשמאל",
                    rightPin: "הצמד לימין",
                    noPin: "לא מצורף",
                    leftFixedTitle: "מוצמד לשמאל",
                    rightFixedTitle: "מוצמד לימין",
                    noFixedTitle: "לא מוצמד",
                    reset: "איפוס",
                    columnDisplay: "תצוגת עמודות",
                    columnSetting: "הגדרות",
                    fullScreen: "מסך מלא",
                    exitFullScreen: "צא ממסך מלא",
                    reload: "רענן",
                    density: "רזולוציה",
                    densityDefault: "ברירת מחדל",
                    densityLarger: "גדול",
                    densityMiddle: "בינוני",
                    densitySmall: "קטן"
                },
                stepsForm: {
                    next: "הבא",
                    prev: "קודם",
                    submit: "סיום"
                },
                loginForm: {
                    submitText: "כניסה"
                },
                editableTable: {
                    onlyOneLineEditor: "ניתן לערוך רק שורה אחת",
                    action: {
                        save: "שמור",
                        cancel: "ביטול",
                        delete: "מחיקה",
                        add: "הוסף שורת נתונים"
                    }
                },
                switch: {
                    open: "פתח",
                    close: "סגור"
                }
            }),
            "uk-UA": V("uk_UA", {
                moneySymbol: "₴",
                deleteThisLine: "Видатили рядок",
                copyThisLine: "Скопіювати рядок",
                form: {
                    lightFilter: {
                        more: "Ще",
                        clear: "Очистити",
                        confirm: "Ок",
                        itemUnit: "Позиції"
                    }
                },
                tableForm: {
                    search: "Пошук",
                    reset: "Очистити",
                    submit: "Відправити",
                    collapsed: "Розгорнути",
                    expand: "Згорнути",
                    inputPlaceholder: "Введіть значення",
                    selectPlaceholder: "Оберіть значення"
                },
                alert: {
                    clear: "Очистити",
                    selected: "Обрано",
                    item: "елементів"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "з",
                        item: "елементів"
                    }
                },
                tableToolBar: {
                    leftPin: "Закріпити зліва",
                    rightPin: "Закріпити справа",
                    noPin: "Відкріпити",
                    leftFixedTitle: "Закріплено зліва",
                    rightFixedTitle: "Закріплено справа",
                    noFixedTitle: "Не закріплено",
                    reset: "Скинути",
                    columnDisplay: "Відображення стовпців",
                    columnSetting: "Налаштування",
                    fullScreen: "Повноекранний режим",
                    exitFullScreen: "Вийти з повноекранного режиму",
                    reload: "Оновити",
                    density: "Розмір",
                    densityDefault: "За замовчуванням",
                    densityLarger: "Великий",
                    densityMiddle: "Середній",
                    densitySmall: "Стислий"
                },
                stepsForm: {
                    next: "Наступний",
                    prev: "Попередній",
                    submit: "Завершити"
                },
                loginForm: {
                    submitText: "Вхіх"
                },
                editableTable: {
                    onlyOneLineEditor: "Тільки один рядок може бути редагований одночасно",
                    action: {
                        save: "Зберегти",
                        cancel: "Відмінити",
                        delete: "Видалити",
                        add: "додати рядок"
                    }
                },
                switch: {
                    open: "Відкрито",
                    close: "Закрито"
                }
            }),
            "uz-UZ": V("uz_UZ", {
                moneySymbol: "UZS",
                form: {
                    lightFilter: {
                        more: "Yana",
                        clear: "Tozalash",
                        confirm: "OK",
                        itemUnit: "Pozitsiyalar"
                    }
                },
                tableForm: {
                    search: "Qidirish",
                    reset: "Qayta tiklash",
                    submit: "Yuborish",
                    collapsed: "Yig‘ish",
                    expand: "Kengaytirish",
                    inputPlaceholder: "Qiymatni kiriting",
                    selectPlaceholder: "Qiymatni tanlang"
                },
                alert: {
                    clear: "Tozalash",
                    selected: "Tanlangan",
                    item: "elementlar"
                },
                pagination: {
                    total: {
                        range: " ",
                        total: "dan",
                        item: "elementlar"
                    }
                },
                tableToolBar: {
                    leftPin: "Chapga mahkamlash",
                    rightPin: "O‘ngga mahkamlash",
                    noPin: "Mahkamlashni olib tashlash",
                    leftFixedTitle: "Chapga mahkamlangan",
                    rightFixedTitle: "O‘ngga mahkamlangan",
                    noFixedTitle: "Mahkamlashsiz",
                    reset: "Qayta tiklash",
                    columnDisplay: "Ustunni ko‘rsatish",
                    columnSetting: "Sozlamalar",
                    fullScreen: "To‘liq ekran",
                    exitFullScreen: "To‘liq ekrandan chiqish",
                    reload: "Yangilash",
                    density: "O‘lcham",
                    densityDefault: "Standart",
                    densityLarger: "Katta",
                    densityMiddle: "O‘rtacha",
                    densitySmall: "Kichik"
                },
                stepsForm: {
                    next: "Keyingi",
                    prev: "Oldingi",
                    submit: "Tugatish"
                },
                loginForm: {
                    submitText: "Kirish"
                },
                editableTable: {
                    action: {
                        save: "Saqlash",
                        cancel: "Bekor qilish",
                        delete: "O‘chirish",
                        add: "maʼlumotlar qatorini qo‘shish"
                    }
                },
                switch: {
                    open: "Ochish",
                    close: "Yopish"
                }
            }),
            "nl-NL": V("nl_NL", {
                moneySymbol: "€",
                deleteThisLine: "Verwijder deze regel",
                copyThisLine: "Kopieer deze regel",
                form: {
                    lightFilter: {
                        more: "Meer filters",
                        clear: "Wissen",
                        confirm: "Bevestigen",
                        itemUnit: "item"
                    }
                },
                tableForm: {
                    search: "Zoeken",
                    reset: "Resetten",
                    submit: "Indienen",
                    collapsed: "Uitvouwen",
                    expand: "Inklappen",
                    inputPlaceholder: "Voer in",
                    selectPlaceholder: "Selecteer"
                },
                alert: {
                    clear: "Selectie annuleren",
                    selected: "Geselecteerd",
                    item: "item"
                },
                pagination: {
                    total: {
                        range: "Van",
                        total: "items/totaal",
                        item: "items"
                    }
                },
                tableToolBar: {
                    leftPin: "Vastzetten aan begin",
                    rightPin: "Vastzetten aan einde",
                    noPin: "Niet vastzetten",
                    leftFixedTitle: "Vastzetten aan de linkerkant",
                    rightFixedTitle: "Vastzetten aan de rechterkant",
                    noFixedTitle: "Niet vastzetten",
                    reset: "Resetten",
                    columnDisplay: "Kolomweergave",
                    columnSetting: "Kolominstellingen",
                    fullScreen: "Volledig scherm",
                    exitFullScreen: "Verlaat volledig scherm",
                    reload: "Vernieuwen",
                    density: "Dichtheid",
                    densityDefault: "Normaal",
                    densityLarger: "Ruim",
                    densityMiddle: "Gemiddeld",
                    densitySmall: "Compact"
                },
                stepsForm: {
                    next: "Volgende stap",
                    prev: "Vorige stap",
                    submit: "Indienen"
                },
                loginForm: {
                    submitText: "Inloggen"
                },
                editableTable: {
                    onlyOneLineEditor: "Slechts één regel tegelijk bewerken",
                    action: {
                        save: "Opslaan",
                        cancel: "Annuleren",
                        delete: "Verwijderen",
                        add: "Een regel toevoegen"
                    }
                },
                switch: {
                    open: "Openen",
                    close: "Sluiten"
                }
            }),
            "ro-RO": V("ro_RO", {
                moneySymbol: "RON",
                deleteThisLine: "Șterge acest rând",
                copyThisLine: "Copiază acest rând",
                form: {
                    lightFilter: {
                        more: "Mai multe filtre",
                        clear: "Curăță",
                        confirm: "Confirmă",
                        itemUnit: "elemente"
                    }
                },
                tableForm: {
                    search: "Caută",
                    reset: "Resetează",
                    submit: "Trimite",
                    collapsed: "Extinde",
                    expand: "Restrânge",
                    inputPlaceholder: "Introduceți",
                    selectPlaceholder: "Selectați"
                },
                alert: {
                    clear: "Anulează selecția",
                    selected: "Selectat",
                    item: "elemente"
                },
                pagination: {
                    total: {
                        range: "De la",
                        total: "elemente/total",
                        item: "elemente"
                    }
                },
                tableToolBar: {
                    leftPin: "Fixează la început",
                    rightPin: "Fixează la sfârșit",
                    noPin: "Nu fixa",
                    leftFixedTitle: "Fixează în stânga",
                    rightFixedTitle: "Fixează în dreapta",
                    noFixedTitle: "Nu fixa",
                    reset: "Resetează",
                    columnDisplay: "Afișare coloane",
                    columnSetting: "Setări coloane",
                    fullScreen: "Ecran complet",
                    exitFullScreen: "Ieși din ecran complet",
                    reload: "Reîncarcă",
                    density: "Densitate",
                    densityDefault: "Normal",
                    densityLarger: "Larg",
                    densityMiddle: "Mediu",
                    densitySmall: "Compact"
                },
                stepsForm: {
                    next: "Pasul următor",
                    prev: "Pasul anterior",
                    submit: "Trimite"
                },
                loginForm: {
                    submitText: "Autentificare"
                },
                editableTable: {
                    onlyOneLineEditor: "Se poate edita doar un rând simultan",
                    action: {
                        save: "Salvează",
                        cancel: "Anulează",
                        delete: "Șterge",
                        add: "Adaugă un rând"
                    }
                },
                switch: {
                    open: "Deschide",
                    close: "Închide"
                }
            }),
            "sv-SE": V("sv_SE", {
                moneySymbol: "SEK",
                deleteThisLine: "Radera denna rad",
                copyThisLine: "Kopiera denna rad",
                form: {
                    lightFilter: {
                        more: "Fler filter",
                        clear: "Rensa",
                        confirm: "Bekräfta",
                        itemUnit: "objekt"
                    }
                },
                tableForm: {
                    search: "Sök",
                    reset: "Återställ",
                    submit: "Skicka",
                    collapsed: "Expandera",
                    expand: "Fäll ihop",
                    inputPlaceholder: "Vänligen ange",
                    selectPlaceholder: "Vänligen välj"
                },
                alert: {
                    clear: "Avbryt val",
                    selected: "Vald",
                    item: "objekt"
                },
                pagination: {
                    total: {
                        range: "Från",
                        total: "objekt/totalt",
                        item: "objekt"
                    }
                },
                tableToolBar: {
                    leftPin: "Fäst till vänster",
                    rightPin: "Fäst till höger",
                    noPin: "Inte fäst",
                    leftFixedTitle: "Fäst till vänster",
                    rightFixedTitle: "Fäst till höger",
                    noFixedTitle: "Inte fäst",
                    reset: "Återställ",
                    columnDisplay: "Kolumnvisning",
                    columnSetting: "Kolumninställningar",
                    fullScreen: "Fullskärm",
                    exitFullScreen: "Avsluta fullskärm",
                    reload: "Ladda om",
                    density: "Täthet",
                    densityDefault: "Normal",
                    densityLarger: "Lös",
                    densityMiddle: "Medium",
                    densitySmall: "Kompakt"
                },
                stepsForm: {
                    next: "Nästa steg",
                    prev: "Föregående steg",
                    submit: "Skicka"
                },
                loginForm: {
                    submitText: "Logga in"
                },
                editableTable: {
                    onlyOneLineEditor: "Endast en rad kan redigeras åt gången",
                    action: {
                        save: "Spara",
                        cancel: "Avbryt",
                        delete: "Radera",
                        add: "Lägg till en rad"
                    }
                },
                switch: {
                    open: "Öppna",
                    close: "Stäng"
                }
            })
        },
        q = Object.keys(X),
        Z = function(e) {
            var t = (e || "zh-CN").toLocaleLowerCase();
            return q.find(function(e) {
                return e.toLocaleLowerCase().includes(t)
            })
        },
        Q = e.i(822315),
        J = e.i(952103),
        J = J;

    function ee(e, t) {
        "string" == typeof(n = e) && -1 !== n.indexOf(".") && 1 === parseFloat(n) && (e = "100%");
        var n, r, a = "string" == typeof(r = e) && -1 !== r.indexOf("%");
        return (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e))), a && (e = parseInt(String(e * t), 10) / 100), 1e-6 > Math.abs(e - t)) ? 1 : e = 360 === t ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t))
    }

    function et(e) {
        return Math.min(1, Math.max(0, e))
    }

    function en(e) {
        return (isNaN(e = parseFloat(e)) || e < 0 || e > 1) && (e = 1), e
    }

    function er(e) {
        return e <= 1 ? "".concat(100 * Number(e), "%") : e
    }

    function ea(e) {
        return 1 === e.length ? "0" + e : String(e)
    }

    function eo(e, t, n) {
        e = ee(e, 255);
        var r = Math.max(e, t = ee(t, 255), n = ee(n, 255)),
            a = Math.min(e, t, n),
            o = 0,
            i = 0,
            l = (r + a) / 2;
        if (r === a) i = 0, o = 0;
        else {
            var c = r - a;
            switch (i = l > .5 ? c / (2 - r - a) : c / (r + a), r) {
                case e:
                    o = (t - n) / c + 6 * (t < n);
                    break;
                case t:
                    o = (n - e) / c + 2;
                    break;
                case n:
                    o = (e - t) / c + 4
            }
            o /= 6
        }
        return {
            h: o,
            s: i,
            l: l
        }
    }

    function ei(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + 6 * n * (t - e) : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }

    function el(e, t, n) {
        e = ee(e, 255);
        var r = Math.max(e, t = ee(t, 255), n = ee(n, 255)),
            a = Math.min(e, t, n),
            o = 0,
            i = r - a;
        if (r === a) o = 0;
        else {
            switch (r) {
                case e:
                    o = (t - n) / i + 6 * (t < n);
                    break;
                case t:
                    o = (n - e) / i + 2;
                    break;
                case n:
                    o = (e - t) / i + 4
            }
            o /= 6
        }
        return {
            h: o,
            s: 0 === r ? 0 : i / r,
            v: r
        }
    }

    function ec(e, t, n, r) {
        var a = [ea(Math.round(e).toString(16)), ea(Math.round(t).toString(16)), ea(Math.round(n).toString(16))];
        return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("")
    }

    function es(e) {
        return parseInt(e, 16)
    }
    var eu = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            goldenrod: "#daa520",
            gold: "#ffd700",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavenderblush: "#fff0f5",
            lavender: "#e6e6fa",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        },
        ed = "(?:".concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:").concat("[-\\+]?\\d+%?", ")"),
        ef = "[\\s|\\(]+(".concat(ed, ")[,|\\s]+(").concat(ed, ")[,|\\s]+(").concat(ed, ")\\s*\\)?"),
        ep = "[\\s|\\(]+(".concat(ed, ")[,|\\s]+(").concat(ed, ")[,|\\s]+(").concat(ed, ")[,|\\s]+(").concat(ed, ")\\s*\\)?"),
        em = {
            CSS_UNIT: new RegExp(ed),
            rgb: RegExp("rgb" + ef),
            rgba: RegExp("rgba" + ep),
            hsl: RegExp("hsl" + ef),
            hsla: RegExp("hsla" + ep),
            hsv: RegExp("hsv" + ef),
            hsva: RegExp("hsva" + ep),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };

    function eh(e) {
        return !!em.CSS_UNIT.exec(String(e))
    }
    var eg = function() {
            function e(t, n) {
                if (void 0 === t && (t = ""), void 0 === n && (n = {}), t instanceof e) return t;
                "number" == typeof t && (t = {
                    r: (k = t) >> 16,
                    g: (65280 & k) >> 8,
                    b: 255 & k
                }), this.originalInput = t;
                var r, a, o, i, l, c, s, u, d, f, p, m, h, g, v, y, b, x, C, S, k, T, w = (g = {
                    r: 0,
                    g: 0,
                    b: 0
                }, v = 1, y = null, b = null, x = null, C = !1, S = !1, "string" == typeof(r = t) && (r = function(e) {
                    if (0 === (e = e.trim().toLowerCase()).length) return !1;
                    var t = !1;
                    if (eu[e]) e = eu[e], t = !0;
                    else if ("transparent" === e) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    var n = em.rgb.exec(e);
                    return n ? {
                        r: n[1],
                        g: n[2],
                        b: n[3]
                    } : (n = em.rgba.exec(e)) ? {
                        r: n[1],
                        g: n[2],
                        b: n[3],
                        a: n[4]
                    } : (n = em.hsl.exec(e)) ? {
                        h: n[1],
                        s: n[2],
                        l: n[3]
                    } : (n = em.hsla.exec(e)) ? {
                        h: n[1],
                        s: n[2],
                        l: n[3],
                        a: n[4]
                    } : (n = em.hsv.exec(e)) ? {
                        h: n[1],
                        s: n[2],
                        v: n[3]
                    } : (n = em.hsva.exec(e)) ? {
                        h: n[1],
                        s: n[2],
                        v: n[3],
                        a: n[4]
                    } : (n = em.hex8.exec(e)) ? {
                        r: es(n[1]),
                        g: es(n[2]),
                        b: es(n[3]),
                        a: es(n[4]) / 255,
                        format: t ? "name" : "hex8"
                    } : (n = em.hex6.exec(e)) ? {
                        r: es(n[1]),
                        g: es(n[2]),
                        b: es(n[3]),
                        format: t ? "name" : "hex"
                    } : (n = em.hex4.exec(e)) ? {
                        r: es(n[1] + n[1]),
                        g: es(n[2] + n[2]),
                        b: es(n[3] + n[3]),
                        a: es(n[4] + n[4]) / 255,
                        format: t ? "name" : "hex8"
                    } : !!(n = em.hex3.exec(e)) && {
                        r: es(n[1] + n[1]),
                        g: es(n[2] + n[2]),
                        b: es(n[3] + n[3]),
                        format: t ? "name" : "hex"
                    }
                }(r)), "object" == typeof r && (eh(r.r) && eh(r.g) && eh(r.b) ? (a = r.r, o = r.g, i = r.b, g = {
                    r: 255 * ee(a, 255),
                    g: 255 * ee(o, 255),
                    b: 255 * ee(i, 255)
                }, C = !0, S = "%" === String(r.r).substr(-1) ? "prgb" : "rgb") : eh(r.h) && eh(r.s) && eh(r.v) ? (y = er(r.s), b = er(r.v), l = r.h, c = y, s = b, l = 6 * ee(l, 360), c = ee(c, 100), s = ee(s, 100), u = Math.floor(l), d = l - u, f = s * (1 - c), p = s * (1 - d * c), m = s * (1 - (1 - d) * c), g = {
                    r: 255 * [s, p, f, f, m, s][h = u % 6],
                    g: 255 * [m, s, s, p, f, f][h],
                    b: 255 * [f, f, m, s, s, p][h]
                }, C = !0, S = "hsv") : eh(r.h) && eh(r.s) && eh(r.l) && (y = er(r.s), x = er(r.l), g = function(e, t, n) {
                    if (e = ee(e, 360), t = ee(t, 100), n = ee(n, 100), 0 === t) a = n, o = n, r = n;
                    else {
                        var r, a, o, i = n < .5 ? n * (1 + t) : n + t - n * t,
                            l = 2 * n - i;
                        r = ei(l, i, e + 1 / 3), a = ei(l, i, e), o = ei(l, i, e - 1 / 3)
                    }
                    return {
                        r: 255 * r,
                        g: 255 * a,
                        b: 255 * o
                    }
                }(r.h, y, x), C = !0, S = "hsl"), Object.prototype.hasOwnProperty.call(r, "a") && (v = r.a)), v = en(v), {
                    ok: C,
                    format: r.format || S,
                    r: Math.min(255, Math.max(g.r, 0)),
                    g: Math.min(255, Math.max(g.g, 0)),
                    b: Math.min(255, Math.max(g.b, 0)),
                    a: v
                });
                this.originalInput = t, this.r = w.r, this.g = w.g, this.b = w.b, this.a = w.a, this.roundA = Math.round(100 * this.a) / 100, this.format = null != (T = n.format) ? T : w.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = w.ok
            }
            return e.prototype.isDark = function() {
                return 128 > this.getBrightness()
            }, e.prototype.isLight = function() {
                return !this.isDark()
            }, e.prototype.getBrightness = function() {
                var e = this.toRgb();
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
            }, e.prototype.getLuminance = function() {
                var e = this.toRgb(),
                    t = e.r / 255,
                    n = e.g / 255,
                    r = e.b / 255;
                return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4))
            }, e.prototype.getAlpha = function() {
                return this.a
            }, e.prototype.setAlpha = function(e) {
                return this.a = en(e), this.roundA = Math.round(100 * this.a) / 100, this
            }, e.prototype.isMonochrome = function() {
                return 0 === this.toHsl().s
            }, e.prototype.toHsv = function() {
                var e = el(this.r, this.g, this.b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    v: e.v,
                    a: this.a
                }
            }, e.prototype.toHsvString = function() {
                var e = el(this.r, this.g, this.b),
                    t = Math.round(360 * e.h),
                    n = Math.round(100 * e.s),
                    r = Math.round(100 * e.v);
                return 1 === this.a ? "hsv(".concat(t, ", ").concat(n, "%, ").concat(r, "%)") : "hsva(".concat(t, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")")
            }, e.prototype.toHsl = function() {
                var e = eo(this.r, this.g, this.b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    l: e.l,
                    a: this.a
                }
            }, e.prototype.toHslString = function() {
                var e = eo(this.r, this.g, this.b),
                    t = Math.round(360 * e.h),
                    n = Math.round(100 * e.s),
                    r = Math.round(100 * e.l);
                return 1 === this.a ? "hsl(".concat(t, ", ").concat(n, "%, ").concat(r, "%)") : "hsla(".concat(t, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")")
            }, e.prototype.toHex = function(e) {
                return void 0 === e && (e = !1), ec(this.r, this.g, this.b, e)
            }, e.prototype.toHexString = function(e) {
                return void 0 === e && (e = !1), "#" + this.toHex(e)
            }, e.prototype.toHex8 = function(e) {
                var t, n, r, a, o, i;
                return void 0 === e && (e = !1), t = this.r, n = this.g, r = this.b, a = this.a, o = e, i = [ea(Math.round(t).toString(16)), ea(Math.round(n).toString(16)), ea(Math.round(r).toString(16)), ea(Math.round(255 * parseFloat(a)).toString(16))], o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
            }, e.prototype.toHex8String = function(e) {
                return void 0 === e && (e = !1), "#" + this.toHex8(e)
            }, e.prototype.toHexShortString = function(e) {
                return void 0 === e && (e = !1), 1 === this.a ? this.toHexString(e) : this.toHex8String(e)
            }, e.prototype.toRgb = function() {
                return {
                    r: Math.round(this.r),
                    g: Math.round(this.g),
                    b: Math.round(this.b),
                    a: this.a
                }
            }, e.prototype.toRgbString = function() {
                var e = Math.round(this.r),
                    t = Math.round(this.g),
                    n = Math.round(this.b);
                return 1 === this.a ? "rgb(".concat(e, ", ").concat(t, ", ").concat(n, ")") : "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", ").concat(this.roundA, ")")
            }, e.prototype.toPercentageRgb = function() {
                var e = function(e) {
                    return "".concat(Math.round(100 * ee(e, 255)), "%")
                };
                return {
                    r: e(this.r),
                    g: e(this.g),
                    b: e(this.b),
                    a: this.a
                }
            }, e.prototype.toPercentageRgbString = function() {
                var e = function(e) {
                    return Math.round(100 * ee(e, 255))
                };
                return 1 === this.a ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")")
            }, e.prototype.toName = function() {
                if (0 === this.a) return "transparent";
                if (this.a < 1) return !1;
                for (var e = "#" + ec(this.r, this.g, this.b, !1), t = 0, n = Object.entries(eu); t < n.length; t++) {
                    var r = n[t],
                        a = r[0];
                    if (e === r[1]) return a
                }
                return !1
            }, e.prototype.toString = function(e) {
                var t = !!e;
                e = null != e ? e : this.format;
                var n = !1,
                    r = this.a < 1 && this.a >= 0;
                return !t && r && (e.startsWith("hex") || "name" === e) ? "name" === e && 0 === this.a ? this.toName() : this.toRgbString() : ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), ("hex" === e || "hex6" === e) && (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString())
            }, e.prototype.toNumber = function() {
                return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
            }, e.prototype.clone = function() {
                return new e(this.toString())
            }, e.prototype.lighten = function(t) {
                void 0 === t && (t = 10);
                var n = this.toHsl();
                return n.l += t / 100, n.l = et(n.l), new e(n)
            }, e.prototype.brighten = function(t) {
                void 0 === t && (t = 10);
                var n = this.toRgb();
                return n.r = Math.max(0, Math.min(255, n.r - Math.round(-(t / 100 * 255)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(-(t / 100 * 255)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(-(t / 100 * 255)))), new e(n)
            }, e.prototype.darken = function(t) {
                void 0 === t && (t = 10);
                var n = this.toHsl();
                return n.l -= t / 100, n.l = et(n.l), new e(n)
            }, e.prototype.tint = function(e) {
                return void 0 === e && (e = 10), this.mix("white", e)
            }, e.prototype.shade = function(e) {
                return void 0 === e && (e = 10), this.mix("black", e)
            }, e.prototype.desaturate = function(t) {
                void 0 === t && (t = 10);
                var n = this.toHsl();
                return n.s -= t / 100, n.s = et(n.s), new e(n)
            }, e.prototype.saturate = function(t) {
                void 0 === t && (t = 10);
                var n = this.toHsl();
                return n.s += t / 100, n.s = et(n.s), new e(n)
            }, e.prototype.greyscale = function() {
                return this.desaturate(100)
            }, e.prototype.spin = function(t) {
                var n = this.toHsl(),
                    r = (n.h + t) % 360;
                return n.h = r < 0 ? 360 + r : r, new e(n)
            }, e.prototype.mix = function(t, n) {
                void 0 === n && (n = 50);
                var r = this.toRgb(),
                    a = new e(t).toRgb(),
                    o = n / 100;
                return new e({
                    r: (a.r - r.r) * o + r.r,
                    g: (a.g - r.g) * o + r.g,
                    b: (a.b - r.b) * o + r.b,
                    a: (a.a - r.a) * o + r.a
                })
            }, e.prototype.analogous = function(t, n) {
                void 0 === t && (t = 6), void 0 === n && (n = 30);
                var r = this.toHsl(),
                    a = 360 / n,
                    o = [this];
                for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t;) r.h = (r.h + a) % 360, o.push(new e(r));
                return o
            }, e.prototype.complement = function() {
                var t = this.toHsl();
                return t.h = (t.h + 180) % 360, new e(t)
            }, e.prototype.monochromatic = function(t) {
                void 0 === t && (t = 6);
                for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, i = [], l = 1 / t; t--;) i.push(new e({
                    h: r,
                    s: a,
                    v: o
                })), o = (o + l) % 1;
                return i
            }, e.prototype.splitcomplement = function() {
                var t = this.toHsl(),
                    n = t.h;
                return [this, new e({
                    h: (n + 72) % 360,
                    s: t.s,
                    l: t.l
                }), new e({
                    h: (n + 216) % 360,
                    s: t.s,
                    l: t.l
                })]
            }, e.prototype.onBackground = function(t) {
                var n = this.toRgb(),
                    r = new e(t).toRgb(),
                    a = n.a + r.a * (1 - n.a);
                return new e({
                    r: (n.r * n.a + r.r * r.a * (1 - n.a)) / a,
                    g: (n.g * n.a + r.g * r.a * (1 - n.a)) / a,
                    b: (n.b * n.a + r.b * r.a * (1 - n.a)) / a,
                    a: a
                })
            }, e.prototype.triad = function() {
                return this.polyad(3)
            }, e.prototype.tetrad = function() {
                return this.polyad(4)
            }, e.prototype.polyad = function(t) {
                for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, i = 1; i < t; i++) a.push(new e({
                    h: (r + i * o) % 360,
                    s: n.s,
                    l: n.l
                }));
                return a
            }, e.prototype.equals = function(t) {
                return this.toRgbString() === new e(t).toRgbString()
            }, e
        }(),
        h = h,
        ev = e.i(40312),
        ev = ev,
        ey = e.i(868297),
        ev = ev,
        eb = {
            blue: "#1677ff",
            purple: "#722ED1",
            cyan: "#13C2C2",
            green: "#52C41A",
            magenta: "#EB2F96",
            pink: "#eb2f96",
            red: "#F5222D",
            orange: "#FA8C16",
            yellow: "#FADB14",
            volcano: "#FA541C",
            geekblue: "#2F54EB",
            gold: "#FAAD14",
            lime: "#A0D911",
            colorPrimary: "#1677ff",
            colorSuccess: "#52c41a",
            colorWarning: "#faad14",
            colorError: "#ff7875",
            colorInfo: "#1677ff",
            colorTextBase: "#000",
            colorBgBase: "#fff",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            fontSize: 14,
            lineWidth: 1,
            lineType: "solid",
            motionUnit: .1,
            motionBase: 0,
            motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
            motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
            motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
            motionEaseInQuint: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
            borderRadius: 4,
            sizeUnit: 4,
            sizeStep: 4,
            sizePopupArrow: 16,
            controlHeight: 32,
            zIndexBase: 0,
            zIndexPopupBase: 1e3,
            opacityImage: 1,
            wireframe: !1,
            "blue-1": "#e6f4ff",
            "blue-2": "#bae0ff",
            "blue-3": "#91caff",
            "blue-4": "#69b1ff",
            "blue-5": "#4096ff",
            "blue-6": "#1677ff",
            "blue-7": "#0958d9",
            "blue-8": "#003eb3",
            "blue-9": "#002c8c",
            "blue-10": "#001d66",
            "purple-1": "#f9f0ff",
            "purple-2": "#efdbff",
            "purple-3": "#d3adf7",
            "purple-4": "#b37feb",
            "purple-5": "#9254de",
            "purple-6": "#722ed1",
            "purple-7": "#531dab",
            "purple-8": "#391085",
            "purple-9": "#22075e",
            "purple-10": "#120338",
            "cyan-1": "#e6fffb",
            "cyan-2": "#b5f5ec",
            "cyan-3": "#87e8de",
            "cyan-4": "#5cdbd3",
            "cyan-5": "#36cfc9",
            "cyan-6": "#13c2c2",
            "cyan-7": "#08979c",
            "cyan-8": "#006d75",
            "cyan-9": "#00474f",
            "cyan-10": "#002329",
            "green-1": "#f6ffed",
            "green-2": "#d9f7be",
            "green-3": "#b7eb8f",
            "green-4": "#95de64",
            "green-5": "#73d13d",
            "green-6": "#52c41a",
            "green-7": "#389e0d",
            "green-8": "#237804",
            "green-9": "#135200",
            "green-10": "#092b00",
            "magenta-1": "#fff0f6",
            "magenta-2": "#ffd6e7",
            "magenta-3": "#ffadd2",
            "magenta-4": "#ff85c0",
            "magenta-5": "#f759ab",
            "magenta-6": "#eb2f96",
            "magenta-7": "#c41d7f",
            "magenta-8": "#9e1068",
            "magenta-9": "#780650",
            "magenta-10": "#520339",
            "pink-1": "#fff0f6",
            "pink-2": "#ffd6e7",
            "pink-3": "#ffadd2",
            "pink-4": "#ff85c0",
            "pink-5": "#f759ab",
            "pink-6": "#eb2f96",
            "pink-7": "#c41d7f",
            "pink-8": "#9e1068",
            "pink-9": "#780650",
            "pink-10": "#520339",
            "red-1": "#fff1f0",
            "red-2": "#ffccc7",
            "red-3": "#ffa39e",
            "red-4": "#ff7875",
            "red-5": "#ff4d4f",
            "red-6": "#f5222d",
            "red-7": "#cf1322",
            "red-8": "#a8071a",
            "red-9": "#820014",
            "red-10": "#5c0011",
            "orange-1": "#fff7e6",
            "orange-2": "#ffe7ba",
            "orange-3": "#ffd591",
            "orange-4": "#ffc069",
            "orange-5": "#ffa940",
            "orange-6": "#fa8c16",
            "orange-7": "#d46b08",
            "orange-8": "#ad4e00",
            "orange-9": "#873800",
            "orange-10": "#612500",
            "yellow-1": "#feffe6",
            "yellow-2": "#ffffb8",
            "yellow-3": "#fffb8f",
            "yellow-4": "#fff566",
            "yellow-5": "#ffec3d",
            "yellow-6": "#fadb14",
            "yellow-7": "#d4b106",
            "yellow-8": "#ad8b00",
            "yellow-9": "#876800",
            "yellow-10": "#614700",
            "volcano-1": "#fff2e8",
            "volcano-2": "#ffd8bf",
            "volcano-3": "#ffbb96",
            "volcano-4": "#ff9c6e",
            "volcano-5": "#ff7a45",
            "volcano-6": "#fa541c",
            "volcano-7": "#d4380d",
            "volcano-8": "#ad2102",
            "volcano-9": "#871400",
            "volcano-10": "#610b00",
            "geekblue-1": "#f0f5ff",
            "geekblue-2": "#d6e4ff",
            "geekblue-3": "#adc6ff",
            "geekblue-4": "#85a5ff",
            "geekblue-5": "#597ef7",
            "geekblue-6": "#2f54eb",
            "geekblue-7": "#1d39c4",
            "geekblue-8": "#10239e",
            "geekblue-9": "#061178",
            "geekblue-10": "#030852",
            "gold-1": "#fffbe6",
            "gold-2": "#fff1b8",
            "gold-3": "#ffe58f",
            "gold-4": "#ffd666",
            "gold-5": "#ffc53d",
            "gold-6": "#faad14",
            "gold-7": "#d48806",
            "gold-8": "#ad6800",
            "gold-9": "#874d00",
            "gold-10": "#613400",
            "lime-1": "#fcffe6",
            "lime-2": "#f4ffb8",
            "lime-3": "#eaff8f",
            "lime-4": "#d3f261",
            "lime-5": "#bae637",
            "lime-6": "#a0d911",
            "lime-7": "#7cb305",
            "lime-8": "#5b8c00",
            "lime-9": "#3f6600",
            "lime-10": "#254000",
            colorText: "rgba(0, 0, 0, 0.88)",
            colorTextSecondary: "rgba(0, 0, 0, 0.65)",
            colorTextTertiary: "rgba(0, 0, 0, 0.45)",
            colorTextQuaternary: "rgba(0, 0, 0, 0.25)",
            colorFill: "rgba(0, 0, 0, 0.15)",
            colorFillSecondary: "rgba(0, 0, 0, 0.06)",
            colorFillTertiary: "rgba(0, 0, 0, 0.04)",
            colorFillQuaternary: "rgba(0, 0, 0, 0.02)",
            colorBgLayout: "hsl(220,23%,97%)",
            colorBgContainer: "#ffffff",
            colorBgElevated: "#ffffff",
            colorBgSpotlight: "rgba(0, 0, 0, 0.85)",
            colorBorder: "#d9d9d9",
            colorBorderSecondary: "#f0f0f0",
            colorPrimaryBg: "#e6f4ff",
            colorPrimaryBgHover: "#bae0ff",
            colorPrimaryBorder: "#91caff",
            colorPrimaryBorderHover: "#69b1ff",
            colorPrimaryHover: "#4096ff",
            colorPrimaryActive: "#0958d9",
            colorPrimaryTextHover: "#4096ff",
            colorPrimaryText: "#1677ff",
            colorPrimaryTextActive: "#0958d9",
            colorSuccessBg: "#f6ffed",
            colorSuccessBgHover: "#d9f7be",
            colorSuccessBorder: "#b7eb8f",
            colorSuccessBorderHover: "#95de64",
            colorSuccessHover: "#95de64",
            colorSuccessActive: "#389e0d",
            colorSuccessTextHover: "#73d13d",
            colorSuccessText: "#52c41a",
            colorSuccessTextActive: "#389e0d",
            colorErrorBg: "#fff2f0",
            colorErrorBgHover: "#fff1f0",
            colorErrorBorder: "#ffccc7",
            colorErrorBorderHover: "#ffa39e",
            colorErrorHover: "#ffa39e",
            colorErrorActive: "#d9363e",
            colorErrorTextHover: "#ff7875",
            colorErrorText: "#ff4d4f",
            colorErrorTextActive: "#d9363e",
            colorWarningBg: "#fffbe6",
            colorWarningBgHover: "#fff1b8",
            colorWarningBorder: "#ffe58f",
            colorWarningBorderHover: "#ffd666",
            colorWarningHover: "#ffd666",
            colorWarningActive: "#d48806",
            colorWarningTextHover: "#ffc53d",
            colorWarningText: "#faad14",
            colorWarningTextActive: "#d48806",
            colorInfoBg: "#e6f4ff",
            colorInfoBgHover: "#bae0ff",
            colorInfoBorder: "#91caff",
            colorInfoBorderHover: "#69b1ff",
            colorInfoHover: "#69b1ff",
            colorInfoActive: "#0958d9",
            colorInfoTextHover: "#4096ff",
            colorInfoText: "#1677ff",
            colorInfoTextActive: "#0958d9",
            colorBgMask: "rgba(0, 0, 0, 0.45)",
            colorWhite: "#fff",
            sizeXXL: 48,
            sizeXL: 32,
            sizeLG: 24,
            sizeMD: 20,
            sizeMS: 16,
            size: 16,
            sizeSM: 12,
            sizeXS: 8,
            sizeXXS: 4,
            controlHeightSM: 24,
            controlHeightXS: 16,
            controlHeightLG: 40,
            motionDurationFast: "0.1s",
            motionDurationMid: "0.2s",
            motionDurationSlow: "0.3s",
            fontSizes: [12, 14, 16, 20, 24, 30, 38, 46, 56, 68],
            lineHeights: [1.6666666666666667, 1.5714285714285714, 1.5, 1.4, 1.3333333333333333, 1.2666666666666666, 1.2105263157894737, 1.173913043478261, 1.1428571428571428, 1.1176470588235294],
            lineWidthBold: 2,
            borderRadiusXS: 1,
            borderRadiusSM: 4,
            borderRadiusLG: 8,
            borderRadiusOuter: 4,
            colorLink: "#1677ff",
            colorLinkHover: "#69b1ff",
            colorLinkActive: "#0958d9",
            colorFillContent: "rgba(0, 0, 0, 0.06)",
            colorFillContentHover: "rgba(0, 0, 0, 0.15)",
            colorFillAlter: "rgba(0, 0, 0, 0.02)",
            colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
            colorBorderBg: "#ffffff",
            colorSplit: "rgba(5, 5, 5, 0.06)",
            colorTextPlaceholder: "rgba(0, 0, 0, 0.25)",
            colorTextDisabled: "rgba(0, 0, 0, 0.25)",
            colorTextHeading: "rgba(0, 0, 0, 0.88)",
            colorTextLabel: "rgba(0, 0, 0, 0.65)",
            colorTextDescription: "rgba(0, 0, 0, 0.45)",
            colorTextLightSolid: "#fff",
            colorHighlight: "#ff7875",
            colorBgTextHover: "rgba(0, 0, 0, 0.06)",
            colorBgTextActive: "rgba(0, 0, 0, 0.15)",
            colorIcon: "rgba(0, 0, 0, 0.45)",
            colorIconHover: "rgba(0, 0, 0, 0.88)",
            colorErrorOutline: "rgba(255, 38, 5, 0.06)",
            colorWarningOutline: "rgba(255, 215, 5, 0.1)",
            fontSizeSM: 12,
            fontSizeLG: 16,
            fontSizeXL: 20,
            fontSizeHeading1: 38,
            fontSizeHeading2: 30,
            fontSizeHeading3: 24,
            fontSizeHeading4: 20,
            fontSizeHeading5: 16,
            fontSizeIcon: 12,
            lineHeight: 1.5714285714285714,
            lineHeightLG: 1.5,
            lineHeightSM: 1.6666666666666667,
            lineHeightHeading1: 1.2105263157894737,
            lineHeightHeading2: 1.2666666666666666,
            lineHeightHeading3: 1.3333333333333333,
            lineHeightHeading4: 1.4,
            lineHeightHeading5: 1.5,
            controlOutlineWidth: 2,
            controlInteractiveSize: 16,
            controlItemBgHover: "rgba(0, 0, 0, 0.04)",
            controlItemBgActive: "#e6f4ff",
            controlItemBgActiveHover: "#bae0ff",
            controlItemBgActiveDisabled: "rgba(0, 0, 0, 0.15)",
            controlTmpOutline: "rgba(0, 0, 0, 0.02)",
            controlOutline: "rgba(5, 145, 255, 0.1)",
            fontWeightStrong: 600,
            opacityLoading: .65,
            linkDecoration: "none",
            linkHoverDecoration: "none",
            linkFocusDecoration: "none",
            controlPaddingHorizontal: 12,
            controlPaddingHorizontalSM: 8,
            paddingXXS: 4,
            paddingXS: 8,
            paddingSM: 12,
            padding: 16,
            paddingMD: 20,
            paddingLG: 24,
            paddingXL: 32,
            paddingContentHorizontalLG: 24,
            paddingContentVerticalLG: 16,
            paddingContentHorizontal: 16,
            paddingContentVertical: 12,
            paddingContentHorizontalSM: 16,
            paddingContentVerticalSM: 8,
            marginXXS: 4,
            marginXS: 8,
            marginSM: 12,
            margin: 16,
            marginMD: 20,
            marginLG: 24,
            marginXL: 32,
            marginXXL: 48,
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)",
            boxShadowSecondary: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
            screenXS: 480,
            screenXSMin: 480,
            screenXSMax: 479,
            screenSM: 576,
            screenSMMin: 576,
            screenSMMax: 575,
            screenMD: 768,
            screenMDMin: 768,
            screenMDMax: 767,
            screenLG: 992,
            screenLGMin: 992,
            screenLGMax: 991,
            screenXL: 1200,
            screenXLMin: 1200,
            screenXLMax: 1199,
            screenXXL: 1600,
            screenXXLMin: 1600,
            screenXXLMax: 1599,
            boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
            boxShadowCard: "0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)",
            boxShadowDrawerRight: "-6px 0 16px 0 rgba(0, 0, 0, 0.08),-3px 0 6px -4px rgba(0, 0, 0, 0.12),-9px 0 28px 8px rgba(0, 0, 0, 0.05)",
            boxShadowDrawerLeft: "6px 0 16px 0 rgba(0, 0, 0, 0.08),3px 0 6px -4px rgba(0, 0, 0, 0.12),9px 0 28px 8px rgba(0, 0, 0, 0.05)",
            boxShadowDrawerUp: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
            boxShadowDrawerDown: "0 -6px 16px 0 rgba(0, 0, 0, 0.08),0 -3px 6px -4px rgba(0, 0, 0, 0.12),0 -9px 28px 8px rgba(0, 0, 0, 0.05)",
            boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
            _tokenKey: "19w80ff",
            _hashId: "css-dev-only-do-not-override-i2zu9q"
        },
        ex = function(e) {
            for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = 0xdeadbeef ^ n, a = 0x41c6ce57 ^ n, o = 0; o < e.length; o++) r = Math.imul(r ^ (t = e.charCodeAt(o)), 0x9e3779b1), a = Math.imul(a ^ t, 0x5f356495);
            return r = Math.imul(r ^ r >>> 16, 0x85ebca6b) ^ Math.imul(a ^ a >>> 13, 0xc2b2ae35), 0x100000000 * (2097151 & (a = Math.imul(a ^ a >>> 16, 0x85ebca6b) ^ Math.imul(r ^ r >>> 13, 0xc2b2ae35))) + (r >>> 0)
        },
        eC = (0, ey.createTheme)(function(e) {
            return e
        }),
        eS = {
            theme: eC,
            token: (0, s.default)((0, s.default)({}, eb), null === ev.default || void 0 === ev.default || null == (t = ev.default.defaultAlgorithm) ? void 0 : t.call(ev.default, null === ev.default || void 0 === ev.default ? void 0 : ev.default.defaultSeed)),
            hashId: "pro-".concat(ex(JSON.stringify(eb)))
        },
        ek = function() {
            return eS
        };
    e.s(["defaultToken", () => eb, "emptyTheme", () => eC, "hashCode", () => ex, "token", () => eS, "useToken", () => ek], 7359);
    var eT = e.i(7359),
        ew = function(e, t) {
            return new eg(e).setAlpha(t).toRgbString()
        },
        eM = void 0 !== ev.default && ev.default ? ev.default : eT,
        eP = eM.useToken,
        ej = function(e) {
            return {
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                color: e.colorText,
                fontSize: e.fontSize,
                lineHeight: e.lineHeight,
                listStyle: "none"
            }
        },
        eF = function(e) {
            return {
                color: e.colorLink,
                outline: "none",
                cursor: "pointer",
                transition: "color ".concat(e.motionDurationSlow),
                "&:focus, &:hover": {
                    color: e.colorLinkHover
                },
                "&:active": {
                    color: e.colorLinkActive
                }
            }
        };

    function eI(e, t) {
        var n, r = (0, i.useContext)(e_).token,
            a = void 0 === r ? {} : r,
            o = (0, i.useContext)(e_).hashed,
            l = eP(),
            c = l.token,
            u = l.hashId,
            d = (0, i.useContext)(e_).theme,
            f = (0, i.useContext)(h.default.ConfigContext),
            p = f.getPrefixCls,
            m = f.csp;
        return a.layout || (a = (0, s.default)({}, c)), a.proComponentsCls = null != (n = a.proComponentsCls) ? n : ".".concat(p("pro")), a.antCls = ".".concat(p()), {
            wrapSSR: (0, J.default)({
                theme: d,
                token: a,
                path: [e],
                nonce: null == m ? void 0 : m.nonce,
                layer: {
                    name: "antd-pro"
                }
            }, function() {
                return t(a)
            }),
            hashId: o ? u : ""
        }
    }
    var eB = function(e, t) {
            var n, r, a, o, i, l = (0, s.default)({}, e);
            return (0, s.default)((0, s.default)({
                bgLayout: "linear-gradient(".concat(t.colorBgContainer, ", ").concat(t.colorBgLayout, " 28%)"),
                colorTextAppListIcon: t.colorTextSecondary,
                appListIconHoverBgColor: null == l || null == (n = l.sider) ? void 0 : n.colorBgMenuItemSelected,
                colorBgAppListIconHover: ew(t.colorTextBase, .04),
                colorTextAppListIconHover: t.colorTextBase
            }, l), {}, {
                header: (0, s.default)({
                    colorBgHeader: ew(t.colorBgElevated, .6),
                    colorBgScrollHeader: ew(t.colorBgElevated, .8),
                    colorHeaderTitle: t.colorText,
                    colorBgMenuItemHover: ew(t.colorTextBase, .03),
                    colorBgMenuItemSelected: "transparent",
                    colorBgMenuElevated: (null == l || null == (r = l.header) ? void 0 : r.colorBgHeader) !== "rgba(255, 255, 255, 0.6)" ? null == (a = l.header) ? void 0 : a.colorBgHeader : t.colorBgElevated,
                    colorTextMenuSelected: ew(t.colorTextBase, .95),
                    colorBgRightActionsItemHover: ew(t.colorTextBase, .03),
                    colorTextRightActionsItem: t.colorTextTertiary,
                    heightLayoutHeader: 56,
                    colorTextMenu: t.colorTextSecondary,
                    colorTextMenuSecondary: t.colorTextTertiary,
                    colorTextMenuTitle: t.colorText,
                    colorTextMenuActive: t.colorText
                }, l.header),
                sider: (0, s.default)({
                    paddingInlineLayoutMenu: 8,
                    paddingBlockLayoutMenu: 0,
                    colorBgCollapsedButton: t.colorBgElevated,
                    colorTextCollapsedButtonHover: t.colorTextSecondary,
                    colorTextCollapsedButton: ew(t.colorTextBase, .25),
                    colorMenuBackground: "transparent",
                    colorMenuItemDivider: ew(t.colorTextBase, .06),
                    colorBgMenuItemHover: ew(t.colorTextBase, .03),
                    colorBgMenuItemSelected: ew(t.colorTextBase, .04),
                    colorTextMenuItemHover: t.colorText,
                    colorTextMenuSelected: ew(t.colorTextBase, .95),
                    colorTextMenuActive: t.colorText,
                    colorTextMenu: t.colorTextSecondary,
                    colorTextMenuSecondary: t.colorTextTertiary,
                    colorTextMenuTitle: t.colorText,
                    colorTextSubMenuSelected: ew(t.colorTextBase, .95)
                }, l.sider),
                pageContainer: (0, s.default)({
                    colorBgPageContainer: "transparent",
                    paddingInlinePageContainerContent: (null == (o = l.pageContainer) ? void 0 : o.marginInlinePageContainerContent) || 40,
                    paddingBlockPageContainerContent: (null == (i = l.pageContainer) ? void 0 : i.marginBlockPageContainerContent) || 32,
                    colorBgPageContainerFixed: t.colorBgElevated
                }, l.pageContainer)
            })
        },
        eR = function() {
            for (var e, t = {}, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            for (var o = r.length, i = 0; i < o; i += 1)
                for (e in r[i]) r[i].hasOwnProperty(e) && ("object" !== (0, u.default)(t[e]) || "object" !== (0, u.default)(r[i][e]) || void 0 === t[e] || null === t[e] || Array.isArray(t[e]) || Array.isArray(r[i][e]) ? t[e] = r[i][e] : t[e] = (0, s.default)((0, s.default)({}, t[e]), r[i][e]));
            return t
        };
    e.i(256331);
    var eE = ["locale", "getPrefixCls"],
        eA = ["locale", "theme"],
        eH = function(e) {
            var t = {};
            if (Object.keys(e || {}).forEach(function(n) {
                    void 0 !== e[n] && (t[n] = e[n])
                }), !(Object.keys(t).length < 1)) return t
        },
        eO = function() {
            return void 0 === d.default || true
        },
        eL = i.default.createContext({
            intl: (0, s.default)((0, s.default)({}, Y), {}, {
                locale: "default"
            }),
            valueTypeMap: {},
            theme: eC,
            hashed: !0,
            dark: !1,
            token: eb
        });
    eL.Consumer;
    var ez = function() {
            var e = (0, M.useSWRConfig)().cache;
            return (0, i.useEffect)(function() {
                return function() {
                    e.clear()
                }
            }, []), null
        },
        eD = function(e) {
            var t, n = e.children,
                r = e.dark,
                a = e.valueTypeMap,
                l = e.autoClearCache,
                u = void 0 !== l && l,
                d = e.token,
                f = e.prefixCls,
                g = e.intl,
                v = (0, i.useContext)(h.default.ConfigContext),
                y = v.locale,
                b = v.getPrefixCls,
                x = (0, c.default)(v, eE),
                C = null == (t = eM.useToken) ? void 0 : t.call(eM),
                S = (0, i.useContext)(eL),
                k = f ? ".".concat(f) : ".".concat(b(), "-pro"),
                T = "." + b(),
                M = "".concat(k),
                P = (0, i.useMemo)(function() {
                    return eB(d || {}, C.token || eb)
                }, [d, C.token]),
                j = (0, i.useMemo)(function() {
                    var e, t = null == y ? void 0 : y.locale,
                        n = Z(t),
                        a = null != g ? g : t && (null == (e = S.intl) ? void 0 : e.locale) === "default" ? X[n] : S.intl || X[n];
                    return (0, s.default)((0, s.default)({}, S), {}, {
                        dark: null != r ? r : S.dark,
                        token: eR(S.token, C.token, {
                            proComponentsCls: k,
                            antCls: T,
                            themeId: C.theme.id,
                            layout: P
                        }),
                        intl: a || Y
                    })
                }, [null == y ? void 0 : y.locale, S, r, C.token, C.theme.id, k, T, P, g]),
                F = (0, s.default)((0, s.default)({}, j.token || {}), {}, {
                    proComponentsCls: k
                }),
                I = (0, m.default)(C.theme, [C.token, null != F ? F : {}], {
                    salt: M,
                    override: F
                }),
                B = (0, p.default)(I, 2),
                R = B[0],
                E = B[1],
                A = (0, i.useMemo)(function() {
                    return !1 !== e.hashed && !1 !== S.hashed
                }, [S.hashed, e.hashed]),
                H = (0, i.useMemo)(function() {
                    return !1 === e.hashed || !1 === S.hashed || !1 === eO() ? "" : C.hashId ? C.hashId : E
                }, [E, S.hashed, e.hashed]);
            (0, i.useEffect)(function() {
                Q.default.locale((null == y ? void 0 : y.locale) || "zh-cn")
            }, [null == y ? void 0 : y.locale]);
            var O = (0, i.useMemo)(function() {
                    return (0, s.default)((0, s.default)({}, x.theme), {}, {
                        hashId: H,
                        hashed: A && eO()
                    })
                }, [x.theme, H, A, eO()]),
                L = (0, i.useMemo)(function() {
                    return (0, s.default)((0, s.default)({}, j), {}, {
                        valueTypeMap: a || (null == j ? void 0 : j.valueTypeMap),
                        token: R,
                        theme: C.theme,
                        hashed: A,
                        hashId: H
                    })
                }, [j, a, R, C.theme, A, H]),
                z = (0, i.useMemo)(function() {
                    return (0, o.jsx)(h.default, (0, s.default)((0, s.default)({}, x), {}, {
                        theme: O,
                        children: (0, o.jsx)(eL.Provider, {
                            value: L,
                            children: (0, o.jsxs)(o.Fragment, {
                                children: [u && (0, o.jsx)(ez, {}), n]
                            })
                        })
                    }))
                }, [x, O, L, u, n]);
            return u ? (0, o.jsx)(w.SWRConfig, {
                value: {
                    provider: function() {
                        return new Map
                    }
                },
                children: z
            }) : z
        },
        eN = function(e) {
            var t, n = e.needDeps,
                r = e.dark,
                a = e.token,
                l = (0, i.useContext)(eL),
                u = (0, i.useContext)(h.default.ConfigContext),
                d = u.locale,
                p = u.theme,
                m = (0, c.default)(u, eA);
            if (n && void 0 !== l.hashId && "children-needDeps" === Object.keys(e).sort().join("-")) return (0, o.jsx)(o.Fragment, {
                children: e.children
            });
            var g = (0, s.default)((0, s.default)({}, m), {}, {
                locale: d || T,
                theme: eH((0, s.default)((0, s.default)({}, p), {}, {
                    algorithm: (t = null != r ? r : l.dark) && !Array.isArray(null == p ? void 0 : p.algorithm) ? [null == p ? void 0 : p.algorithm, eM.darkAlgorithm].filter(Boolean) : t && Array.isArray(null == p ? void 0 : p.algorithm) ? [].concat((0, f.default)((null == p ? void 0 : p.algorithm) || []), [eM.darkAlgorithm]).filter(Boolean) : null == p ? void 0 : p.algorithm
                }))
            });
            return (0, o.jsx)(h.default, (0, s.default)((0, s.default)({}, g), {}, {
                children: (0, o.jsx)(eD, (0, s.default)((0, s.default)({}, e), {}, {
                    token: a
                }))
            }))
        };
    eL.displayName = "ProProvider";
    var e_ = eL,
        eW = e.i(329261),
        eW = eW,
        e$ = e.i(293733),
        h = h,
        eU = e.i(653496),
        eV = e.i(686746),
        eV = eV,
        eG = e.i(343794),
        eK = (0, i.createContext)({}),
        eY = void 0 !== d.default && null != d.default.versions && null != d.default.versions.node,
        eX = function() {
            return void 0 !== window.document && void 0 !== window.matchMedia && !eY
        },
        h = h;

    function eq(e, t) {
        var n = Object.assign({}, e);
        return Array.isArray(t) && t.forEach(function(e) {
            delete n[e]
        }), n
    }
    var eZ = e.i(174080),
        eQ = ["children", "className", "extra", "portalDom", "style", "renderContent"],
        eJ = function(e) {
            var t, n, r = e.children,
                a = e.className,
                u = e.extra,
                d = e.portalDom,
                f = e.style,
                p = e.renderContent,
                m = (0, c.default)(e, eQ),
                g = (0, i.useContext)(h.default.ConfigContext),
                v = g.getPrefixCls,
                y = g.getTargetContainer,
                b = e.prefixCls || v("pro"),
                x = "".concat(b, "-footer-bar"),
                C = eI("ProLayoutFooterToolbar", function(e) {
                    var t;
                    return [(t = (0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(x)
                    }), (0, l.default)({}, t.componentCls, {
                        position: "fixed",
                        insetInlineEnd: 0,
                        bottom: 0,
                        zIndex: 99,
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        paddingInline: 24,
                        paddingBlock: 0,
                        boxSizing: "border-box",
                        lineHeight: "64px",
                        backgroundColor: ew(t.colorBgElevated, .6),
                        borderBlockStart: "1px solid ".concat(t.colorSplit),
                        "-webkit-backdrop-filter": "blur(8px)",
                        backdropFilter: "blur(8px)",
                        color: t.colorText,
                        transition: "all 0.2s ease 0s",
                        "&-left": {
                            flex: 1,
                            color: t.colorText
                        },
                        "&-right": {
                            color: t.colorText,
                            "> *": {
                                marginInlineEnd: 8,
                                "&:last-child": {
                                    marginBlock: 0,
                                    marginInline: 0
                                }
                            }
                        }
                    }))]
                }),
                S = C.wrapSSR,
                k = C.hashId,
                T = (0, i.useContext)(eK),
                w = (0, i.useMemo)(function() {
                    var e = T.hasSiderMenu,
                        t = T.isMobile,
                        n = T.siderWidth;
                    if (e) return n ? t ? "100%" : "calc(100% - ".concat(n, "px)") : "100%"
                }, [T.collapsed, T.hasSiderMenu, T.isMobile, T.siderWidth]),
                M = (0, i.useMemo)(function() {
                    return "undefined" == typeof document ? null : (null == y ? void 0 : y()) || document.body
                }, []),
                P = (t = "".concat(x, ".").concat(x, "-stylish"), n = ({
                    stylish: e.stylish
                }).stylish, eI("ProLayoutFooterToolbarStylish", function(e) {
                    var r = (0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(t)
                    });
                    return n ? [(0, l.default)({}, "".concat(r.componentCls), null == n ? void 0 : n(r))] : []
                })),
                j = (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("div", {
                        className: "".concat(x, "-left ").concat(k).trim(),
                        children: u
                    }), (0, o.jsx)("div", {
                        className: "".concat(x, "-right ").concat(k).trim(),
                        children: r
                    })]
                });
            (0, i.useEffect)(function() {
                return T && null != T && T.setHasFooterToolbar ? (null == T || T.setHasFooterToolbar(!0), function() {
                    var e;
                    null == T || null == (e = T.setHasFooterToolbar) || e.call(T, !1)
                }) : function() {}
            }, []);
            var F = (0, o.jsx)("div", (0, s.default)((0, s.default)({
                    className: (0, eG.default)(a, k, x, (0, l.default)({}, "".concat(x, "-stylish"), !!e.stylish)),
                    style: (0, s.default)({
                        width: w
                    }, f)
                }, eq(m, ["prefixCls"])), {}, {
                    children: p ? p((0, s.default)((0, s.default)((0, s.default)({}, e), T), {}, {
                        leftWidth: w
                    }), j) : j
                })),
                I = eX() && (void 0 === d || d) && M ? (0, eZ.createPortal)(F, M, x) : F;
            return P.wrapSSR(S((0, o.jsx)(i.default.Fragment, {
                children: I
            }, x)))
        },
        h = h,
        e0 = function(e) {
            var t = (0, i.useContext)(eK),
                n = e.children,
                r = e.contentWidth,
                a = e.className,
                c = e.style,
                u = (0, i.useContext)(h.default.ConfigContext).getPrefixCls,
                d = e.prefixCls || u("pro"),
                f = r || t.contentWidth,
                p = "".concat(d, "-grid-content"),
                m = eI("ProLayoutGridContent", function(e) {
                    var t;
                    return [(t = (0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(p)
                    }), (0, l.default)({}, t.componentCls, {
                        width: "100%",
                        "&-wide": {
                            maxWidth: 1152,
                            margin: "0 auto"
                        }
                    }))]
                }),
                g = m.wrapSSR,
                v = m.hashId,
                y = "Fixed" === f && "top" === t.layout;
            return g((0, o.jsx)("div", {
                className: (0, eG.default)(p, v, a, (0, l.default)({}, "".concat(p, "-wide"), y)),
                style: c,
                children: (0, o.jsx)("div", {
                    className: "".concat(d, "-grid-content-children ").concat(v).trim(),
                    children: n
                })
            }))
        },
        e1 = e.i(742392),
        e2 = e.i(407813),
        e6 = e.i(247437),
        h = h,
        e5 = e.i(770914),
        e4 = e.i(931067);

    function e8(e) {
        return e instanceof HTMLElement || e instanceof SVGElement
    }

    function e3(e) {
        var t, n = e && "object" === (0, u.default)(e) && e8(e.nativeElement) ? e.nativeElement : e8(e) ? e : null;
        return n || (e instanceof i.default.Component ? null == (t = eZ.default.findDOMNode) ? void 0 : t.call(eZ.default, e) : null)
    }
    var e9 = i.createContext(null),
        e7 = function() {
            if ("undefined" != typeof Map) return Map;

            function e(e, t) {
                var n = -1;
                return e.some(function(e, r) {
                    return e[0] === t && (n = r, !0)
                }), n
            }

            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(t) {
                var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                return r && r[1]
            }, t.prototype.set = function(t, n) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
            }, t.prototype.delete = function(t) {
                var n = this.__entries__,
                    r = e(n, t);
                ~r && n.splice(r, 1)
            }, t.prototype.has = function(t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var a = r[n];
                    e.call(t, a[1], a[0])
                }
            }, t
        }(),
        te = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        tt = e.g.Math === Math ? e.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        tn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(tt) : function(e) {
            return setTimeout(function() {
                return e(Date.now())
            }, 1e3 / 60)
        },
        tr = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        ta = "undefined" != typeof MutationObserver,
        to = function() {
            function e() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                    var n = !1,
                        r = !1,
                        a = 0;

                    function o() {
                        n && (n = !1, e()), r && l()
                    }

                    function i() {
                        tn(o)
                    }

                    function l() {
                        var e = Date.now();
                        if (n) {
                            if (e - a < 2) return;
                            r = !0
                        } else n = !0, r = !1, setTimeout(i, 20);
                        a = e
                    }
                    return l
                }(this.refresh.bind(this), 0)
            }
            return e.prototype.addObserver = function(e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
            }, e.prototype.removeObserver = function(e) {
                var t = this.observers_,
                    n = t.indexOf(e);
                ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
            }, e.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }, e.prototype.updateObservers_ = function() {
                var e = this.observers_.filter(function(e) {
                    return e.gatherActive(), e.hasActive()
                });
                return e.forEach(function(e) {
                    return e.broadcastActive()
                }), e.length > 0
            }, e.prototype.connect_ = function() {
                te && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ta ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, e.prototype.disconnect_ = function() {
                te && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, e.prototype.onTransitionEnd_ = function(e) {
                var t = e.propertyName,
                    n = void 0 === t ? "" : t;
                tr.some(function(e) {
                    return !!~n.indexOf(e)
                }) && this.refresh()
            }, e.getInstance = function() {
                return this.instance_ || (this.instance_ = new e), this.instance_
            }, e.instance_ = null, e
        }(),
        ti = function(e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                var a = r[n];
                Object.defineProperty(e, a, {
                    value: t[a],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return e
        },
        tl = function(e) {
            return e && e.ownerDocument && e.ownerDocument.defaultView || tt
        },
        tc = tf(0, 0, 0, 0);

    function ts(e) {
        return parseFloat(e) || 0
    }

    function tu(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return t.reduce(function(t, n) {
            return t + ts(e["border-" + n + "-width"])
        }, 0)
    }
    var td = "undefined" != typeof SVGGraphicsElement ? function(e) {
        return e instanceof tl(e).SVGGraphicsElement
    } : function(e) {
        return e instanceof tl(e).SVGElement && "function" == typeof e.getBBox
    };

    function tf(e, t, n, r) {
        return {
            x: e,
            y: t,
            width: n,
            height: r
        }
    }
    var tp = function() {
            function e(e) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = tf(0, 0, 0, 0), this.target = e
            }
            return e.prototype.isActive = function() {
                var e = function(e) {
                    if (!te) return tc;
                    if (td(e)) {
                        var t;
                        return tf(0, 0, (t = e.getBBox()).width, t.height)
                    }
                    return function(e) {
                        var t, n = e.clientWidth,
                            r = e.clientHeight;
                        if (!n && !r) return tc;
                        var a = tl(e).getComputedStyle(e),
                            o = function(e) {
                                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                                    var a = r[n],
                                        o = e["padding-" + a];
                                    t[a] = ts(o)
                                }
                                return t
                            }(a),
                            i = o.left + o.right,
                            l = o.top + o.bottom,
                            c = ts(a.width),
                            s = ts(a.height);
                        if ("border-box" === a.boxSizing && (Math.round(c + i) !== n && (c -= tu(a, "left", "right") + i), Math.round(s + l) !== r && (s -= tu(a, "top", "bottom") + l)), (t = e) !== tl(t).document.documentElement) {
                            var u = Math.round(c + i) - n,
                                d = Math.round(s + l) - r;
                            1 !== Math.abs(u) && (c -= u), 1 !== Math.abs(d) && (s -= d)
                        }
                        return tf(o.left, o.top, c, s)
                    }(e)
                }(this.target);
                return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
            }, e.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
            }, e
        }(),
        tm = function(e, t) {
            var n, r, a, o, i, l = (n = t.x, r = t.y, a = t.width, o = t.height, ti(i = Object.create(("undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object).prototype), {
                x: n,
                y: r,
                width: a,
                height: o,
                top: r,
                right: n + a,
                bottom: o + r,
                left: n
            }), i);
            ti(this, {
                target: e,
                contentRect: l
            })
        },
        th = function() {
            function e(e, t, n) {
                if (this.activeObservations_ = [], this.observations_ = new e7, "function" != typeof e) throw TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
            }
            return e.prototype.observe = function(e) {
                if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof tl(e).Element)) throw TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new tp(e)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, e.prototype.unobserve = function(e) {
                if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof tl(e).Element)) throw TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                }
            }, e.prototype.disconnect = function() {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, e.prototype.gatherActive = function() {
                var e = this;
                this.clearActive(), this.observations_.forEach(function(t) {
                    t.isActive() && e.activeObservations_.push(t)
                })
            }, e.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var e = this.callbackCtx_,
                        t = this.activeObservations_.map(function(e) {
                            return new tm(e.target, e.broadcastRect())
                        });
                    this.callback_.call(e, t, e), this.clearActive()
                }
            }, e.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, e
        }(),
        tg = "undefined" != typeof WeakMap ? new WeakMap : new e7,
        tv = function e(t) {
            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
            var n = new th(t, to.getInstance(), this);
            tg.set(this, n)
        };
    ["observe", "unobserve", "disconnect"].forEach(function(e) {
        tv.prototype[e] = function() {
            var t;
            return (t = tg.get(this))[e].apply(t, arguments)
        }
    });
    var ty = void 0 !== tt.ResizeObserver ? tt.ResizeObserver : tv,
        tb = new Map,
        tx = new ty(function(e) {
            e.forEach(function(e) {
                var t, n = e.target;
                null == (t = tb.get(n)) || t.forEach(function(e) {
                    return e(n)
                })
            })
        }),
        tC = e.i(278409),
        tS = e.i(233848),
        tk = e.i(868917),
        tT = e.i(674813),
        tw = function(e) {
            (0, tk.default)(n, e);
            var t = (0, tT.default)(n);

            function n() {
                return (0, tC.default)(this, n), t.apply(this, arguments)
            }
            return (0, tS.default)(n, [{
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]), n
        }(i.Component),
        tM = i.forwardRef(function(e, t) {
            var n = e.children,
                r = e.disabled,
                a = i.useRef(null),
                o = i.useRef(null),
                l = i.useContext(e9),
                c = "function" == typeof n,
                d = c ? n(a) : n,
                f = i.useRef({
                    width: -1,
                    height: -1,
                    offsetWidth: -1,
                    offsetHeight: -1
                }),
                p = !c && i.isValidElement(d) && W(d),
                m = _(p && d && $(d) ? d.props.propertyIsEnumerable("ref") ? d.props.ref : d.ref : null, a),
                h = function() {
                    var e;
                    return e3(a.current) || (a.current && "object" === (0, u.default)(a.current) ? e3(null == (e = a.current) ? void 0 : e.nativeElement) : null) || e3(o.current)
                };
            i.useImperativeHandle(t, function() {
                return h()
            });
            var g = i.useRef(e);
            g.current = e;
            var v = i.useCallback(function(e) {
                var t = g.current,
                    n = t.onResize,
                    r = t.data,
                    a = e.getBoundingClientRect(),
                    o = a.width,
                    i = a.height,
                    c = e.offsetWidth,
                    u = e.offsetHeight,
                    d = Math.floor(o),
                    p = Math.floor(i);
                if (f.current.width !== d || f.current.height !== p || f.current.offsetWidth !== c || f.current.offsetHeight !== u) {
                    var m = {
                        width: d,
                        height: p,
                        offsetWidth: c,
                        offsetHeight: u
                    };
                    f.current = m;
                    var h = c === Math.round(o) ? o : c,
                        v = u === Math.round(i) ? i : u,
                        y = (0, s.default)((0, s.default)({}, m), {}, {
                            offsetWidth: h,
                            offsetHeight: v
                        });
                    null == l || l(y, e, r), n && Promise.resolve().then(function() {
                        n(y, e)
                    })
                }
            }, []);
            return i.useEffect(function() {
                var e = h();
                return e && !r && (tb.has(e) || (tb.set(e, new Set), tx.observe(e)), tb.get(e).add(v)),
                    function() {
                        tb.has(e) && (tb.get(e).delete(v), !tb.get(e).size && (tx.unobserve(e), tb.delete(e)))
                    }
            }, [a.current, r]), i.createElement(tw, {
                ref: o
            }, p ? i.cloneElement(d, {
                ref: m
            }) : d)
        }),
        tP = i.forwardRef(function(e, t) {
            var n = e.children;
            return ("function" == typeof n ? [n] : function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = [];
                return i.default.Children.forEach(t, function(t) {
                    (null != t || n.keepEmpty) && (Array.isArray(t) ? r = r.concat(e(t)) : L(t) && t.props ? r = r.concat(e(t.props.children, n)) : r.push(t))
                }), r
            }(n)).map(function(n, r) {
                var a = (null == n ? void 0 : n.key) || "".concat("rc-observer-key", "-").concat(r);
                return i.createElement(tM, (0, e4.default)({}, e, {
                    key: a,
                    ref: 0 === r ? t : void 0
                }), n)
            })
        });
    tP.Collection = function(e) {
        var t = e.children,
            n = e.onBatchResize,
            r = i.useRef(0),
            a = i.useRef([]),
            o = i.useContext(e9),
            l = i.useCallback(function(e, t, i) {
                r.current += 1;
                var l = r.current;
                a.current.push({
                    size: e,
                    element: t,
                    data: i
                }), Promise.resolve().then(function() {
                    l === r.current && (null == n || n(a.current), a.current = [])
                }), null == o || o(e, t, i)
            }, [n, o]);
        return i.createElement(e9.Provider, {
            value: l
        }, t)
    };
    var tj = function() {
            return {
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
            }
        },
        tF = function(e) {
            var t;
            return (0, l.default)({}, e.componentCls, (0, s.default)((0, s.default)({}, null == ej ? void 0 : ej(e)), {}, (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                position: "relative",
                backgroundColor: e.colorWhite,
                paddingBlock: e.pageHeaderPaddingVertical + 2,
                paddingInline: e.pageHeaderPadding,
                "&&-ghost": {
                    backgroundColor: e.pageHeaderBgGhost
                },
                "&-no-children": {
                    height: null == (t = e.layout) || null == (t = t.pageContainer) ? void 0 : t.paddingBlockPageContainerContent
                },
                "&&-has-breadcrumb": {
                    paddingBlockStart: e.pageHeaderPaddingBreadCrumb
                },
                "&&-has-footer": {
                    paddingBlockEnd: 0
                },
                "& &-back": (0, l.default)({
                    marginInlineEnd: e.margin,
                    fontSize: 16,
                    lineHeight: 1,
                    "&-button": (0, s.default)((0, s.default)({
                        fontSize: 16
                    }, null == eF ? void 0 : eF(e)), {}, {
                        color: e.pageHeaderColorBack,
                        cursor: "pointer"
                    })
                }, "".concat(e.componentCls, "-rlt &"), {
                    float: "right",
                    marginInlineEnd: 0,
                    marginInlineStart: 0
                })
            }, "& ".concat("ant", "-divider-vertical"), {
                height: 14,
                marginBlock: 0,
                marginInline: e.marginSM,
                verticalAlign: "middle"
            }), "& &-breadcrumb + &-heading", {
                marginBlockStart: e.marginXS
            }), "& &-heading", {
                display: "flex",
                justifyContent: "space-between",
                "&-left": {
                    display: "flex",
                    alignItems: "center",
                    marginBlock: e.marginXS / 2,
                    marginInlineEnd: 0,
                    marginInlineStart: 0,
                    overflow: "hidden"
                },
                "&-title": (0, s.default)((0, s.default)({
                    marginInlineEnd: e.marginSM,
                    marginBlockEnd: 0,
                    color: e.colorTextHeading,
                    fontWeight: 600,
                    fontSize: e.pageHeaderFontSizeHeaderTitle,
                    lineHeight: e.controlHeight + "px"
                }, tj()), {}, (0, l.default)({}, "".concat(e.componentCls, "-rlt &"), {
                    marginInlineEnd: 0,
                    marginInlineStart: e.marginSM
                })),
                "&-avatar": (0, l.default)({
                    marginInlineEnd: e.marginSM
                }, "".concat(e.componentCls, "-rlt &"), {
                    float: "right",
                    marginInlineEnd: 0,
                    marginInlineStart: e.marginSM
                }),
                "&-tags": (0, l.default)({}, "".concat(e.componentCls, "-rlt &"), {
                    float: "right"
                }),
                "&-sub-title": (0, s.default)((0, s.default)({
                    marginInlineEnd: e.marginSM,
                    color: e.colorTextSecondary,
                    fontSize: e.pageHeaderFontSizeHeaderSubTitle,
                    lineHeight: e.lineHeight
                }, tj()), {}, (0, l.default)({}, "".concat(e.componentCls, "-rlt &"), {
                    float: "right",
                    marginInlineEnd: 0,
                    marginInlineStart: 12
                })),
                "&-extra": (0, l.default)((0, l.default)({
                    marginBlock: e.marginXS / 2,
                    marginInlineEnd: 0,
                    marginInlineStart: 0,
                    whiteSpace: "nowrap",
                    "> *": (0, l.default)({
                        "white-space": "unset"
                    }, "".concat(e.componentCls, "-rlt &"), {
                        marginInlineEnd: e.marginSM,
                        marginInlineStart: 0
                    })
                }, "".concat(e.componentCls, "-rlt &"), {
                    float: "left"
                }), "*:first-child", (0, l.default)({}, "".concat(e.componentCls, "-rlt &"), {
                    marginInlineEnd: 0
                }))
            }), "&-content", {
                paddingBlockStart: e.pageHeaderPaddingContentPadding
            }), "&-footer", {
                marginBlockStart: e.margin
            }), "&-compact &-heading", {
                flexWrap: "wrap"
            }), "&-wide", {
                maxWidth: 1152,
                margin: "0 auto"
            }), "&-rtl", {
                direction: "rtl"
            })))
        },
        tI = function(e, t) {
            var n;
            return null != (n = e.items) && n.length ? (0, o.jsx)(e$.Breadcrumb, (0, s.default)((0, s.default)({}, e), {}, {
                className: (0, eG.default)("".concat(t, "-breadcrumb"), e.className)
            })) : null
        },
        tB = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr";
            return void 0 !== e.backIcon ? e.backIcon : "rtl" === t ? (0, o.jsx)(e2.default, {}) : (0, o.jsx)(e1.default, {})
        },
        tR = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                r = arguments.length > 3 ? arguments[3] : void 0,
                a = t.title,
                i = t.avatar,
                l = t.subTitle,
                c = t.tags,
                u = t.extra,
                d = t.onBack,
                f = "".concat(e, "-heading"),
                p = a || l || c || u;
            if (!p) return null;
            var m = tB(t, n),
                h = m && d ? (0, o.jsx)("div", {
                    className: "".concat(e, "-back ").concat(r).trim(),
                    children: (0, o.jsx)("div", {
                        role: "button",
                        onClick: function(e) {
                            null == d || d(e)
                        },
                        className: "".concat(e, "-back-button ").concat(r).trim(),
                        "aria-label": "back",
                        children: m
                    })
                }) : null,
                g = h || i || p;
            return (0, o.jsxs)("div", {
                className: f + " " + r,
                children: [g && (0, o.jsxs)("div", {
                    className: "".concat(f, "-left ").concat(r).trim(),
                    children: [h, i && (0, o.jsx)(e6.Avatar, (0, s.default)({
                        className: (0, eG.default)("".concat(f, "-avatar"), r, i.className)
                    }, i)), a && (0, o.jsx)("span", {
                        className: "".concat(f, "-title ").concat(r).trim(),
                        title: "string" == typeof a ? a : void 0,
                        children: a
                    }), l && (0, o.jsx)("span", {
                        className: "".concat(f, "-sub-title ").concat(r).trim(),
                        title: "string" == typeof l ? l : void 0,
                        children: l
                    }), c && (0, o.jsx)("span", {
                        className: "".concat(f, "-tags ").concat(r).trim(),
                        children: c
                    })]
                }), u && (0, o.jsx)("span", {
                    className: "".concat(f, "-extra ").concat(r).trim(),
                    children: (0, o.jsx)(e5.Space, {
                        children: u
                    })
                })]
            })
        },
        tE = function(e) {
            var t, n = i.useState(!1),
                r = (0, p.default)(n, 2),
                a = r[0],
                c = r[1],
                u = i.useContext(h.default.ConfigContext),
                d = u.getPrefixCls,
                f = u.direction,
                m = e.prefixCls,
                g = e.style,
                v = e.footer,
                y = e.children,
                b = e.breadcrumb,
                x = e.breadcrumbRender,
                C = e.className,
                S = e.contentWidth,
                k = e.layout,
                T = e.ghost,
                w = d("page-header", m),
                M = eI("ProLayoutPageHeader", function(e) {
                    return [tF((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(w),
                        pageHeaderBgGhost: "transparent",
                        pageHeaderPadding: 16,
                        pageHeaderPaddingVertical: 4,
                        pageHeaderPaddingBreadCrumb: e.paddingSM,
                        pageHeaderColorBack: e.colorTextHeading,
                        pageHeaderFontSizeHeaderTitle: e.fontSizeHeading4,
                        pageHeaderFontSizeHeaderSubTitle: 14,
                        pageHeaderPaddingContentPadding: e.paddingSM
                    }))]
                }),
                P = M.wrapSSR,
                j = M.hashId,
                F = (b && !(null != b && b.items) && null != b && b.routes && ((0, U.noteOnce)(!1, "The routes of Breadcrumb is deprecated, please use items instead."), b.items = function e(t) {
                    return null == t ? void 0 : t.map(function(t) {
                        var n;
                        return (0, U.noteOnce)(!!t.breadcrumbName, "Route.breadcrumbName is deprecated, please use Route.title instead."), (0, s.default)((0, s.default)({}, t), {}, {
                            breadcrumbName: void 0,
                            children: void 0,
                            title: t.title || t.breadcrumbName
                        }, null != (n = t.children) && n.length ? {
                            menu: {
                                items: e(t.children)
                            }
                        } : {})
                    })
                }(b.routes)), null != b && b.items) ? tI(b, w) : null,
                I = b && "props" in b,
                B = null != (t = null == x ? void 0 : x((0, s.default)((0, s.default)({}, e), {}, {
                    prefixCls: w
                }), F)) ? t : F,
                R = I ? b : B,
                E = (0, eG.default)(w, j, C, (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({}, "".concat(w, "-has-breadcrumb"), !!R), "".concat(w, "-has-footer"), !!v), "".concat(w, "-rtl"), "rtl" === f), "".concat(w, "-compact"), a), "".concat(w, "-wide"), "Fixed" === S && "top" == k), "".concat(w, "-ghost"), void 0 === T || T)),
                A = tR(w, e, f, j),
                H = y && (0, o.jsx)("div", {
                    className: "".concat(w, "-content ").concat(j).trim(),
                    children: y
                }),
                O = v ? (0, o.jsx)("div", {
                    className: "".concat(w, "-footer ").concat(j).trim(),
                    children: v
                }) : null;
            return R || A || O || H ? P((0, o.jsx)(tP, {
                onResize: function(e) {
                    return c(e.width < 768)
                },
                children: (0, o.jsxs)("div", {
                    className: E,
                    style: g,
                    children: [R, A, H, O]
                })
            })) : (0, o.jsx)("div", {
                className: (0, eG.default)(j, ["".concat(w, "-no-children")])
            })
        },
        tA = e.i(482725),
        tH = ["isLoading", "pastDelay", "timedOut", "error", "retry"],
        tO = function(e) {
            e.isLoading, e.pastDelay, e.timedOut, e.error, e.retry;
            var t = (0, c.default)(e, tH);
            return (0, o.jsx)("div", {
                style: {
                    paddingBlockStart: 100,
                    textAlign: "center"
                },
                children: (0, o.jsx)(tA.Spin, (0, s.default)({
                    size: "large"
                }, t))
            })
        },
        h = h,
        tL = function(e) {
            if (!e) return 1;
            var t = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / t
        },
        tz = function(e) {
            var t = eP().token,
                n = e.children,
                r = e.style,
                a = e.className,
                l = e.markStyle,
                c = e.markClassName,
                u = e.zIndex,
                d = e.gapX,
                f = void 0 === d ? 212 : d,
                m = e.gapY,
                g = void 0 === m ? 222 : m,
                v = e.width,
                y = void 0 === v ? 120 : v,
                b = e.height,
                x = void 0 === b ? 64 : b,
                C = e.rotate,
                S = void 0 === C ? -22 : C,
                k = e.image,
                T = e.offsetLeft,
                w = e.offsetTop,
                M = e.fontStyle,
                P = void 0 === M ? "normal" : M,
                j = e.fontWeight,
                F = void 0 === j ? "normal" : j,
                I = e.fontColor,
                B = void 0 === I ? t.colorFill : I,
                R = e.fontSize,
                E = void 0 === R ? 16 : R,
                A = e.fontFamily,
                H = void 0 === A ? "sans-serif" : A,
                O = e.prefixCls,
                L = (0, (0, i.useContext)(h.default.ConfigContext).getPrefixCls)("pro-layout-watermark", O),
                z = (0, eG.default)("".concat(L, "-wrapper"), a),
                D = (0, eG.default)(L, c),
                N = (0, i.useState)(""),
                _ = (0, p.default)(N, 2),
                W = _[0],
                $ = _[1];
            return (0, i.useEffect)(function() {
                var t = document.createElement("canvas"),
                    n = t.getContext("2d"),
                    r = tL(n),
                    a = T || f / 2,
                    o = w || g / 2;
                if (t.setAttribute("width", "".concat((f + y) * r, "px")), t.setAttribute("height", "".concat((g + x) * r, "px")), !n) return void console.error("当前环境不支持Canvas");
                n.translate(a * r, o * r), n.rotate(Math.PI / 180 * Number(S));
                var i = y * r,
                    l = x * r,
                    c = function(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            o = Number(E) * r;
                        n.font = "".concat(P, " normal ").concat(F, " ").concat(o, "px/").concat(l, "px ").concat(H), n.fillStyle = B, Array.isArray(e) ? null == e || e.forEach(function(e, t) {
                            return n.fillText(e, 0, t * o + a)
                        }) : n.fillText(e, 0, a ? a + o : 0), $(t.toDataURL())
                    };
                if (k) {
                    var s = new Image;
                    s.crossOrigin = "anonymous", s.referrerPolicy = "no-referrer", s.src = k, s.onload = function() {
                        if (n.drawImage(s, 0, 0, i, l), $(t.toDataURL()), e.content) return void c(e.content, s.height + 8)
                    };
                    return
                }
                if (e.content) return void c(e.content)
            }, [f, g, T, w, S, P, F, y, x, H, B, k, e.content, E]), (0, o.jsxs)("div", {
                style: (0, s.default)({
                    position: "relative"
                }, r),
                className: z,
                children: [n, (0, o.jsx)("div", {
                    className: D,
                    style: (0, s.default)((0, s.default)({
                        zIndex: void 0 === u ? 9 : u,
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        backgroundSize: "".concat(f + y, "px"),
                        pointerEvents: "none",
                        backgroundRepeat: "repeat"
                    }, W ? {
                        backgroundImage: "url('".concat(W, "')")
                    } : {}), l)
                })]
            })
        },
        tD = [576, 768, 992, 1200].map(function(e) {
            return "@media (max-width: ".concat(e, "px)")
        }),
        tN = (0, p.default)(tD, 4),
        t_ = tN[0],
        tW = tN[1],
        t$ = tN[2],
        tU = tN[3],
        tV = function(e) {
            var t, n, r, a, o, i, c, s, u, d, f, p, m, h, g, v, y, b;
            return (0, l.default)({}, e.componentCls, (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                position: "relative",
                "&-children-container": {
                    paddingBlockStart: 0,
                    paddingBlockEnd: null == (t = e.layout) || null == (t = t.pageContainer) ? void 0 : t.paddingBlockPageContainerContent,
                    paddingInline: null == (n = e.layout) || null == (n = n.pageContainer) ? void 0 : n.paddingInlinePageContainerContent
                },
                "&-children-container-no-header": {
                    paddingBlockStart: null == (r = e.layout) || null == (r = r.pageContainer) ? void 0 : r.paddingBlockPageContainerContent
                },
                "&-affix": (0, l.default)({}, "".concat(e.antCls, "-affix"), (0, l.default)({}, "".concat(e.componentCls, "-warp"), {
                    backgroundColor: null == (a = e.layout) || null == (a = a.pageContainer) ? void 0 : a.colorBgPageContainerFixed,
                    transition: "background-color 0.3s",
                    boxShadow: "0 2px 8px #f0f1f2"
                }))
            }, "& &-warp-page-header", (0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                paddingBlockStart: (null != (o = null == (i = e.layout) || null == (i = i.pageContainer) ? void 0 : i.paddingBlockPageContainerContent) ? o : 40) / 4,
                paddingBlockEnd: (null != (c = null == (s = e.layout) || null == (s = s.pageContainer) ? void 0 : s.paddingBlockPageContainerContent) ? c : 40) / 2,
                paddingInlineStart: null == (u = e.layout) || null == (u = u.pageContainer) ? void 0 : u.paddingInlinePageContainerContent,
                paddingInlineEnd: null == (d = e.layout) || null == (d = d.pageContainer) ? void 0 : d.paddingInlinePageContainerContent
            }, "& ~ ".concat(e.proComponentsCls, "-grid-content"), (0, l.default)({}, "".concat(e.proComponentsCls, "-page-container-children-content"), {
                paddingBlock: (null != (f = null == (p = e.layout) || null == (p = p.pageContainer) ? void 0 : p.paddingBlockPageContainerContent) ? f : 24) / 3
            })), "".concat(e.antCls, "-page-header-breadcrumb"), {
                paddingBlockStart: (null != (m = null == (h = e.layout) || null == (h = h.pageContainer) ? void 0 : h.paddingBlockPageContainerContent) ? m : 40) / 4 + 10
            }), "".concat(e.antCls, "-page-header-heading"), {
                paddingBlockStart: (null != (g = null == (v = e.layout) || null == (v = v.pageContainer) ? void 0 : v.paddingBlockPageContainerContent) ? g : 40) / 4
            }), "".concat(e.antCls, "-page-header-footer"), {
                marginBlockStart: (null != (y = null == (b = e.layout) || null == (b = b.pageContainer) ? void 0 : b.paddingBlockPageContainerContent) ? y : 40) / 4
            })), "&-detail", (0, l.default)({
                display: "flex"
            }, t_, {
                display: "block"
            })), "&-main", {
                width: "100%"
            }), "&-row", (0, l.default)({
                display: "flex",
                width: "100%"
            }, tW, {
                display: "block"
            })), "&-content", {
                flex: "auto",
                width: "100%"
            }), "&-extraContent", (0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                flex: "0 1 auto",
                minWidth: "242px",
                marginInlineStart: 88,
                textAlign: "end"
            }, tU, {
                marginInlineStart: 44
            }), t$, {
                marginInlineStart: 20
            }), tW, {
                marginInlineStart: 0,
                textAlign: "start"
            }), t_, {
                marginInlineStart: 0
            })))
        },
        tG = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
        tK = function(e) {
            return "*" === e || "x" === e || "X" === e
        },
        tY = function(e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? e : t
        },
        tX = function(e, t) {
            if (tK(e) || tK(t)) return 0;
            var n, r, a = (n = tY(e), r = tY(t), (0, u.default)(n) !== (0, u.default)(r) ? [String(n), String(r)] : [n, r]),
                o = (0, p.default)(a, 2),
                i = o[0],
                l = o[1];
            return i > l ? 1 : i < l ? -1 : 0
        },
        tq = function(e, t) {
            for (var n = 0; n < Math.max(e.length, t.length); n++) {
                var r = tX(e[n] || "0", t[n] || "0");
                if (0 !== r) return r
            }
            return 0
        },
        tZ = function(e) {
            var t, n = e.match(tG);
            return null == n || null == (t = n.shift) || t.call(n), n
        },
        tQ = function(e, t) {
            var n = tZ(e),
                r = tZ(t),
                a = n.pop(),
                o = r.pop(),
                i = tq(n, r);
            return 0 !== i ? i : a || o ? a ? -1 : 1 : 0
        },
        tJ = ["title", "content", "pageHeaderRender", "header", "prefixedClassName", "extraContent", "childrenContentStyle", "style", "prefixCls", "hashId", "value", "breadcrumbRender"],
        t0 = ["children", "loading", "className", "style", "footer", "affixProps", "token", "fixedHeader", "breadcrumbRender", "footerToolBarProps", "childrenContentStyle"],
        t1 = function(e) {
            var t = e.tabList,
                n = e.tabActiveKey,
                r = e.onTabChange,
                a = e.hashId,
                i = e.tabBarExtraContent,
                l = e.tabProps,
                c = e.prefixedClassName;
            return Array.isArray(t) || i ? (0, o.jsx)(eU.Tabs, (0, s.default)((0, s.default)({
                className: "".concat(c, "-tabs ").concat(a).trim(),
                activeKey: n,
                onChange: function(e) {
                    r && r(e)
                },
                tabBarExtraContent: i,
                items: null == t ? void 0 : t.map(function(e, t) {
                    var n;
                    return (0, s.default)((0, s.default)({
                        label: e.tab
                    }, e), {}, {
                        key: (null == (n = e.key) ? void 0 : n.toString()) || (null == t ? void 0 : t.toString())
                    })
                })
            }, l), {}, {
                children: 0 > tQ(eV.default, "4.23.0") ? null == t ? void 0 : t.map(function(e, t) {
                    return (0, o.jsx)(eU.Tabs.TabPane, (0, s.default)({
                        tab: e.tab
                    }, e), e.key || t)
                }) : null
            })) : null
        },
        t2 = function(e) {
            var t, n = e.title,
                r = e.content,
                a = e.pageHeaderRender,
                i = e.header,
                l = e.prefixedClassName,
                u = e.extraContent,
                d = (e.childrenContentStyle, e.style, e.prefixCls),
                f = e.hashId,
                p = e.value,
                m = e.breadcrumbRender,
                h = (0, c.default)(e, tJ);
            if (!1 === a) return null;
            if (a) return (0, o.jsxs)(o.Fragment, {
                children: [" ", a((0, s.default)((0, s.default)({}, e), p))]
            });
            var g = n;
            n || !1 === n || (g = p.title);
            var v = (0, s.default)((0, s.default)((0, s.default)({}, p), {}, {
                    title: g
                }, h), {}, {
                    footer: t1((0, s.default)((0, s.default)({}, h), {}, {
                        hashId: f,
                        breadcrumbRender: m,
                        prefixedClassName: l
                    }))
                }, i),
                y = v.breadcrumb,
                b = (!y || !(null != y && y.itemRender) && !(null != y && null != (t = y.items) && t.length)) && !m;
            return ["title", "subTitle", "extra", "tags", "footer", "avatar", "backIcon"].every(function(e) {
                return !v[e]
            }) && b && !r && !u ? null : (0, o.jsx)(tE, (0, s.default)((0, s.default)({}, v), {}, {
                className: "".concat(l, "-warp-page-header ").concat(f).trim(),
                breadcrumb: !1 === m ? void 0 : (0, s.default)((0, s.default)({}, v.breadcrumb), p.breadcrumbProps),
                breadcrumbRender: function() {
                    if (m) return m
                }(),
                prefixCls: d,
                children: (null == i ? void 0 : i.children) || (r || u ? (0, o.jsx)("div", {
                    className: "".concat(l, "-detail ").concat(f).trim(),
                    children: (0, o.jsx)("div", {
                        className: "".concat(l, "-main ").concat(f).trim(),
                        children: (0, o.jsxs)("div", {
                            className: "".concat(l, "-row ").concat(f).trim(),
                            children: [r && (0, o.jsx)("div", {
                                className: "".concat(l, "-content ").concat(f).trim(),
                                children: r
                            }), u && (0, o.jsx)("div", {
                                className: "".concat(l, "-extraContent ").concat(f).trim(),
                                children: u
                            })]
                        })
                    })
                }) : null)
            }))
        },
        t6 = function(e) {
            var t, n, r, a, d = e.children,
                f = e.loading,
                p = void 0 !== f && f,
                m = e.className,
                g = e.style,
                v = e.footer,
                y = e.affixProps,
                b = e.token,
                x = e.fixedHeader,
                C = e.breadcrumbRender,
                S = e.footerToolBarProps,
                k = e.childrenContentStyle,
                T = (0, c.default)(e, t0),
                w = (0, i.useContext)(eK);
            (0, i.useEffect)(function() {
                var e;
                return w && null != w && w.setHasPageContainer ? (null == w || null == (e = w.setHasPageContainer) || e.call(w, function(e) {
                    return e + 1
                }), function() {
                    var e;
                    null == w || null == (e = w.setHasPageContainer) || e.call(w, function(e) {
                        return e - 1
                    })
                }) : function() {}
            }, []);
            var M = (0, i.useContext)(e_).token,
                P = (0, i.useContext)(h.default.ConfigContext).getPrefixCls,
                j = e.prefixCls || P("pro"),
                F = "".concat(j, "-page-container"),
                I = eI("ProLayoutPageContainer", function(e) {
                    var t;
                    return [tV((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(F),
                        layout: (0, s.default)((0, s.default)({}, null == e ? void 0 : e.layout), {}, {
                            pageContainer: (0, s.default)((0, s.default)({}, null == e || null == (t = e.layout) ? void 0 : t.pageContainer), b)
                        })
                    }))]
                }),
                B = I.wrapSSR,
                R = I.hashId,
                E = (t = "".concat(F, ".").concat(F, "-stylish"), n = ({
                    stylish: e.stylish
                }).stylish, eI("ProLayoutPageContainerStylish", function(e) {
                    var r = (0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(t)
                    });
                    return n ? [(0, l.default)({}, "div".concat(r.componentCls), null == n ? void 0 : n(r))] : []
                })),
                A = (0, i.useMemo)(function() {
                    var e;
                    return !1 != C && (C || (null == T || null == (e = T.header) ? void 0 : e.breadcrumbRender))
                }, [C, null == T || null == (r = T.header) ? void 0 : r.breadcrumbRender]),
                H = t2((0, s.default)((0, s.default)({}, T), {}, {
                    breadcrumbRender: A,
                    ghost: !0,
                    hashId: R,
                    prefixCls: void 0,
                    prefixedClassName: F,
                    value: w
                })),
                O = (0, i.useMemo)(function() {
                    if (i.default.isValidElement(p)) return p;
                    if ("boolean" == typeof p && !p) return null;
                    var e = "object" === (0, u.default)(p) ? p : {
                        spinning: p
                    };
                    return e.spinning ? (0, o.jsx)(tO, (0, s.default)({}, e)) : null
                }, [p]),
                L = (0, i.useMemo)(function() {
                    return d ? (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)("div", {
                            className: (0, eG.default)(R, "".concat(F, "-children-container"), (0, l.default)({}, "".concat(F, "-children-container-no-header"), !H)),
                            style: k,
                            children: d
                        })
                    }) : null
                }, [d, F, k, R]),
                z = (0, i.useMemo)(function() {
                    var t = O || L;
                    if (e.waterMarkProps || w.waterMarkProps) {
                        var n = (0, s.default)((0, s.default)({}, w.waterMarkProps), e.waterMarkProps);
                        return (0, o.jsx)(tz, (0, s.default)((0, s.default)({}, n), {}, {
                            children: t
                        }))
                    }
                    return t
                }, [e.waterMarkProps, w.waterMarkProps, O, L]),
                D = (0, eG.default)(F, R, m, (0, l.default)((0, l.default)((0, l.default)({}, "".concat(F, "-with-footer"), v), "".concat(F, "-with-affix"), x && H), "".concat(F, "-stylish"), !!T.stylish));
            return B(E.wrapSSR((0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsxs)("div", {
                    style: g,
                    className: D,
                    children: [x && H ? (0, o.jsx)(eW.default, (0, s.default)((0, s.default)({
                        offsetTop: w.hasHeader && w.fixedHeader ? null == (a = M.layout) || null == (a = a.header) ? void 0 : a.heightLayoutHeader : 1
                    }, y), {}, {
                        className: "".concat(F, "-affix ").concat(R).trim(),
                        children: (0, o.jsx)("div", {
                            className: "".concat(F, "-warp ").concat(R).trim(),
                            children: H
                        })
                    })) : H, z && (0, o.jsx)(e0, {
                        children: z
                    })]
                }), v && (0, o.jsx)(eJ, (0, s.default)((0, s.default)({
                    stylish: T.footerStylish,
                    prefixCls: j
                }, S), {}, {
                    children: v
                }))]
            })))
        },
        t5 = function(e) {
            return (0, o.jsx)(eN, {
                needDeps: !0,
                children: (0, o.jsx)(t6, (0, s.default)({}, e))
            })
        };

    function t4(e, t) {
        this.v = e, this.k = t
    }

    function t8(e, t, n, r) {
        var a = Object.defineProperty;
        try {
            a({}, "", {})
        } catch (e) {
            a = 0
        }(t8 = function(e, t, n, r) {
            function o(t, n) {
                t8(e, t, function(e) {
                    return this._invoke(t, n, e)
                })
            }
            t ? a ? a(e, t, {
                value: n,
                enumerable: !r,
                configurable: !r,
                writable: !r
            }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2))
        })(e, t, n, r)
    }

    function t3() {
        var e, t, n = "function" == typeof Symbol ? Symbol : {},
            r = n.iterator || "@@iterator",
            a = n.toStringTag || "@@toStringTag";

        function o(n, r, a, o) {
            var c = Object.create((r && r.prototype instanceof l ? r : l).prototype);
            return t8(c, "_invoke", function(n, r, a) {
                var o, l, c, s = 0,
                    u = a || [],
                    d = !1,
                    f = {
                        p: 0,
                        n: 0,
                        v: e,
                        a: p,
                        f: p.bind(e, 4),
                        d: function(t, n) {
                            return o = t, l = 0, c = e, f.n = n, i
                        }
                    };

                function p(n, r) {
                    for (l = n, c = r, t = 0; !d && s && !a && t < u.length; t++) {
                        var a, o = u[t],
                            p = f.p,
                            m = o[2];
                        n > 3 ? (a = m === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, f.v = r, f.n = o[1]) : p < m && (a = n < 3 || o[0] > r || r > m) && (o[4] = n, o[5] = r, f.n = m, l = 0))
                    }
                    if (a || n > 1) return i;
                    throw d = !0, r
                }
                return function(a, u, m) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (d && 1 === u && p(u, m), l = u, c = m;
                        (t = l < 2 ? e : c) || !d;) {
                        o || (l ? l < 3 ? (l > 1 && (f.n = -1), p(l, c)) : f.n = c : f.v = c);
                        try {
                            if (s = 2, o) {
                                if (l || (a = "next"), t = o[a]) {
                                    if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                                    if (!t.done) return t;
                                    c = t.value, l < 2 && (l = 0)
                                } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
                                o = e
                            } else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== i) break
                        } catch (t) {
                            o = e, l = 1, c = t
                        } finally {
                            s = 1
                        }
                    }
                    return {
                        value: t,
                        done: d
                    }
                }
            }(n, a, o), !0), c
        }
        var i = {};

        function l() {}

        function c() {}

        function s() {}
        t = Object.getPrototypeOf;
        var u = s.prototype = l.prototype = Object.create([][r] ? t(t([][r]())) : (t8(t = {}, r, function() {
            return this
        }), t));

        function d(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, t8(e, a, "GeneratorFunction")), e.prototype = Object.create(u), e
        }
        return c.prototype = s, t8(u, "constructor", s), t8(s, "constructor", c), c.displayName = "GeneratorFunction", t8(s, a, "GeneratorFunction"), t8(u), t8(u, a, "Generator"), t8(u, r, function() {
            return this
        }), t8(u, "toString", function() {
            return "[object Generator]"
        }), (t3 = function() {
            return {
                w: o,
                m: d
            }
        })()
    }

    function t9(e, t) {
        var n;
        this.next || (t8(t9.prototype), t8(t9.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
            return this
        })), t8(this, "_invoke", function(r, a, o) {
            function i() {
                return new t(function(n, a) {
                    ! function n(r, a, o, i) {
                        try {
                            var l = e[r](a),
                                c = l.value;
                            return c instanceof t4 ? t.resolve(c.v).then(function(e) {
                                n("next", e, o, i)
                            }, function(e) {
                                n("throw", e, o, i)
                            }) : t.resolve(c).then(function(e) {
                                l.value = e, o(l)
                            }, function(e) {
                                return n("throw", e, o, i)
                            })
                        } catch (e) {
                            i(e)
                        }
                    }(r, o, n, a)
                })
            }
            return n = n ? n.then(i, i) : i()
        }, !0)
    }

    function t7(e, t, n, r, a) {
        return new t9(t3().w(e, t, n, r), a || Promise)
    }

    function ne(e) {
        var t = Object(e),
            n = [];
        for (var r in t) n.unshift(r);
        return function e() {
            for (; n.length;)
                if ((r = n.pop()) in t) return e.value = r, e.done = !1, e;
            return e.done = !0, e
        }
    }

    function nt(e) {
        if (null != e) {
            var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
                n = 0;
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) return {
                next: function() {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    }
                }
            }
        }
        throw TypeError((0, u.default)(e) + " is not iterable")
    }

    function nn() {
        var e = t3(),
            t = e.m(nn),
            n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;

        function r(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === n || "GeneratorFunction" === (t.displayName || t.name))
        }
        var a = {
            throw: 1,
            return: 2,
            break: 3,
            continue: 3
        };

        function o(e) {
            var t, n;
            return function(r) {
                t || (t = {
                    stop: function() {
                        return n(r.a, 2)
                    },
                    catch: function() {
                        return r.v
                    },
                    abrupt: function(e, t) {
                        return n(r.a, a[e], t)
                    },
                    delegateYield: function(e, a, o) {
                        return t.resultName = a, n(r.d, nt(e), o)
                    },
                    finish: function(e) {
                        return n(r.f, e)
                    }
                }, n = function(e, n, a) {
                    r.p = t.prev, r.n = t.next;
                    try {
                        return e(n, a)
                    } finally {
                        t.next = r.n
                    }
                }), t.resultName && (t[t.resultName] = r.v, t.resultName = void 0), t.sent = r.v, t.next = r.n;
                try {
                    return e.call(this, t)
                } finally {
                    r.p = t.prev, r.n = t.next
                }
            }
        }
        return (nn = function() {
            return {
                wrap: function(t, n, r, a) {
                    return e.w(o(t), n, r, a && a.reverse())
                },
                isGeneratorFunction: r,
                mark: e.m,
                awrap: function(e, t) {
                    return new t4(e, t)
                },
                AsyncIterator: t9,
                async: function(e, t, n, a, i) {
                    return (r(t) ? t7 : function(e, t, n, r, a) {
                        var o = t7(e, t, n, r, a);
                        return o.next().then(function(e) {
                            return e.done ? e.value : o.next()
                        })
                    })(o(e), t, n, a, i)
                },
                keys: ne,
                values: nt
            }
        })()
    }

    function nr(e, t, n, r, a, o, i) {
        try {
            var l = e[o](i),
                c = l.value
        } catch (e) {
            return void n(e)
        }
        l.done ? t(c) : Promise.resolve(c).then(r, a)
    }

    function na(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, a) {
                var o = e.apply(t, n);

                function i(e) {
                    nr(o, r, a, i, l, "next", e)
                }

                function l(e) {
                    nr(o, r, a, i, l, "throw", e)
                }
                i(void 0)
            })
        }
    }
    var eV = eV,
        no = function(e) {
            var t = {};
            if (Object.keys(e || {}).forEach(function(n) {
                    void 0 !== e[n] && (t[n] = e[n])
                }), !(Object.keys(t).length < 1)) return t
        },
        ni = function() {
            var e;
            return void 0 === d.default ? eV.default : (null == (e = d.default) || null == (e = e.env) ? void 0 : e.ANTD_VERSION) || eV.default
        },
        nl = function(e, t) {
            return no(tQ(ni(), "4.23.0") > -1 ? {
                open: e,
                onOpenChange: t
            } : {
                visible: e,
                onVisibleChange: t
            })
        };

    function nc(e) {
        if (0 > tQ(ni(), "5.6.0")) return e;
        var t = {
                colorGroupTitle: "groupTitleColor",
                radiusItem: "itemBorderRadius",
                radiusSubMenuItem: "subMenuItemBorderRadius",
                colorItemText: "itemColor",
                colorItemTextHover: "itemHoverColor",
                colorItemTextHoverHorizontal: "horizontalItemHoverColor",
                colorItemTextSelected: "itemSelectedColor",
                colorItemTextSelectedHorizontal: "horizontalItemSelectedColor",
                colorItemTextDisabled: "itemDisabledColor",
                colorDangerItemText: "dangerItemColor",
                colorDangerItemTextHover: "dangerItemHoverColor",
                colorDangerItemTextSelected: "dangerItemSelectedColor",
                colorDangerItemBgActive: "dangerItemActiveBg",
                colorDangerItemBgSelected: "dangerItemSelectedBg",
                colorItemBg: "itemBg",
                colorItemBgHover: "itemHoverBg",
                colorSubItemBg: "subMenuItemBg",
                colorItemBgActive: "itemActiveBg",
                colorItemBgSelected: "itemSelectedBg",
                colorItemBgSelectedHorizontal: "horizontalItemSelectedBg",
                colorActiveBarWidth: "activeBarWidth",
                colorActiveBarHeight: "activeBarHeight",
                colorActiveBarBorderSize: "activeBarBorderWidth"
            },
            n = (0, s.default)({}, e);
        return Object.keys(t).forEach(function(e) {
            void 0 !== n[e] && (n[t[e]] = n[e], delete n[e])
        }), n
    }

    function ns(e) {
        var t = (0, i.useState)(function() {
                return window.matchMedia(e).matches
            }),
            n = (0, p.default)(t, 2),
            r = n[0],
            a = n[1];
        return (0, i.useLayoutEffect)(function() {
            var t = window.matchMedia(e),
                n = function(e) {
                    return a(e.matches)
                };
            return t.addListener(n),
                function() {
                    return t.removeListener(n)
                }
        }, [e]), r
    }
    var nu = {
            xs: {
                maxWidth: 575,
                matchMedia: "(max-width: 575px)"
            },
            sm: {
                minWidth: 576,
                maxWidth: 767,
                matchMedia: "(min-width: 576px) and (max-width: 767px)"
            },
            md: {
                minWidth: 768,
                maxWidth: 991,
                matchMedia: "(min-width: 768px) and (max-width: 991px)"
            },
            lg: {
                minWidth: 992,
                maxWidth: 1199,
                matchMedia: "(min-width: 992px) and (max-width: 1199px)"
            },
            xl: {
                minWidth: 1200,
                maxWidth: 1599,
                matchMedia: "(min-width: 1200px) and (max-width: 1599px)"
            },
            xxl: {
                minWidth: 1600,
                matchMedia: "(min-width: 1600px)"
            }
        },
        nd = function() {
            return Object.keys(nu).find(function(e) {
                var t = nu[e].matchMedia;
                return !!window.matchMedia(t).matches
            })
        },
        nf = function() {
            var e = ns(nu.md.matchMedia),
                t = ns(nu.lg.matchMedia),
                n = ns(nu.xxl.matchMedia),
                r = ns(nu.xl.matchMedia),
                a = ns(nu.sm.matchMedia),
                o = ns(nu.xs.matchMedia),
                l = (0, i.useState)(nd()),
                c = (0, p.default)(l, 2),
                s = c[0],
                u = c[1];
            return (0, i.useEffect)(function() {
                n ? u("xxl") : r ? u("xl") : t ? u("lg") : e ? u("md") : a ? u("sm") : o ? u("xs") : u("md")
            }, [e, t, n, r, a, o]), s
        },
        np = e.i(270559);

    function nm(e, t) {
        return t >>> e | t << 32 - e
    }
    var nh = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

    function ng(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }

    function nv() {
        var e, t, r, o, i, l, c, s, u, d, f, p, m, h, g, v, y = Array(16);
        c = n[0], s = n[1], u = n[2], d = n[3], f = n[4], p = n[5], m = n[6], h = n[7];
        for (var b = 0; b < 16; b++) y[b] = a[(b << 2) + 3] | a[(b << 2) + 2] << 8 | a[(b << 2) + 1] << 16 | a[b << 2] << 24;
        for (var x = 0; x < 64; x++) g = h + (nm(6, e = f) ^ nm(11, e) ^ nm(25, e)) + ((t = f) & p ^ ~t & m) + nh[x], x < 16 ? g += y[x] : g += function(e, t) {
            var n, r;
            return e[15 & t] += (nm(17, n = e[t + 14 & 15]) ^ nm(19, n) ^ n >>> 10) + e[t + 9 & 15] + (nm(7, r = e[t + 1 & 15]) ^ nm(18, r) ^ r >>> 3)
        }(y, x), v = (nm(2, r = c) ^ nm(13, r) ^ nm(22, r)) + ((o = c) & (i = s) ^ o & (l = u) ^ i & l), h = m, m = p, p = f, f = ng(d, g), d = u, u = s, s = c, c = ng(g, v);
        n[0] += c, n[1] += s, n[2] += u, n[3] += d, n[4] += f, n[5] += p, n[6] += m, n[7] += h
    }
    let ny = function(e) {
        n = Array(8), r = [, , ], a = Array(64), r[0] = r[1] = 0, n[0] = 0x6a09e667, n[1] = 0xbb67ae85, n[2] = 0x3c6ef372, n[3] = 0xa54ff53a, n[4] = 0x510e527f, n[5] = 0x9b05688c, n[6] = 0x1f83d9ab, n[7] = 0x5be0cd19,
            function(e, t) {
                var n, o, i = 0;
                o = r[0] >> 3 & 63;
                var l = 63 & t;
                for ((r[0] += t << 3) < t << 3 && r[1]++, r[1] += t >> 29, n = 0; n + 63 < t; n += 64) {
                    for (var c = o; c < 64; c++) a[c] = e.charCodeAt(i++);
                    nv(), o = 0
                }
                for (var s = 0; s < l; s++) a[s] = e.charCodeAt(i++)
            }(e, e.length);
        var t = r[0] >> 3 & 63;
        if (a[t++] = 128, t <= 56)
            for (var o = t; o < 56; o++) a[o] = 0;
        else {
            for (var i = t; i < 64; i++) a[i] = 0;
            nv();
            for (var l = 0; l < 56; l++) a[l] = 0
        }
        a[56] = r[1] >>> 24 & 255, a[57] = r[1] >>> 16 & 255, a[58] = r[1] >>> 8 & 255, a[59] = 255 & r[1], a[60] = r[0] >>> 24 & 255, a[61] = r[0] >>> 16 & 255, a[62] = r[0] >>> 8 & 255, a[63] = 255 & r[0], nv();
        for (var c = new String, s = 0; s < 8; s++)
            for (var u = 28; u >= 0; u -= 4) c += "0123456789abcdef".charAt(n[s] >>> u & 15);
        return c
    };

    function nb(e) {
        return (nb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var nx = ["pro_layout_parentKeys", "children", "icon", "flatMenu", "indexRoute", "routes"];

    function nC(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (nC = function(e) {
            var n;
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return nS(e, arguments, nw(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), nT(r, e)
        })(e)
    }

    function nS(e, t, n) {
        return (nS = nk() ? Reflect.construct.bind() : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var a = new(Function.bind.apply(e, r));
            return n && nT(a, n.prototype), a
        }).apply(null, arguments)
    }

    function nk() {
        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch (e) {
            return !1
        }
    }

    function nT(e, t) {
        return (nT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function nw(e) {
        return (nw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function nM(e) {
        return function(e) {
            if (Array.isArray(e)) return nj(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || nP(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function nP(e, t) {
        if (e) {
            if ("string" == typeof e) return nj(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nj(e, t)
        }
    }

    function nj(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function nF(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function nI(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? nF(Object(n), !0).forEach(function(t) {
                var r, a, o;
                r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[a] = o
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nF(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var nB = "routes";

    function nR(e) {
        return e.split("?")[0].split("#")[0]
    }
    var nE = function(e) {
            if (!e.startsWith("http")) return !1;
            try {
                return new URL(e), !0
            } catch (e) {
                return !1
            }
        },
        nA = function(e) {
            var t = e.path;
            if (!t || "/" === t) try {
                return "/".concat(ny(JSON.stringify(e)))
            } catch (e) {}
            return t ? nR(t) : t
        },
        nH = function(e, t) {
            var n = e.name,
                r = e.locale;
            return (!("locale" in e) || !1 !== r) && !!n && (e.locale || "".concat(t, ".").concat(n))
        },
        nO = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/";
            return e.endsWith("/*") ? e.replace("/*", "/") : (e || t).startsWith("/") || nE(e) ? e : "/".concat(t, "/").concat(e).replace(/\/\//g, "/").replace(/\/\//g, "/")
        },
        nL = function(e, t) {
            var n = e.menu,
                r = void 0 === n ? {} : n,
                a = e.indexRoute,
                o = e.path,
                i = e.children || [],
                l = r.name,
                c = void 0 === l ? e.name : l,
                s = r.icon,
                u = void 0 === s ? e.icon : s,
                d = r.hideChildren,
                f = void 0 === d ? e.hideChildren : d,
                p = r.flatMenu,
                m = void 0 === p ? e.flatMenu : p,
                h = a && "redirect" !== Object.keys(a).join(",") ? [nI({
                    path: void 0 === o ? "" : o,
                    menu: r
                }, a)].concat(i || []) : i,
                g = nI({}, e);
            if (c && (g.name = c), u && (g.icon = u), h && h.length) {
                if (f) return delete g.children, g;
                var v = nD(nI(nI({}, t), {}, {
                    data: h
                }), e);
                if (m) return v;
                delete g[nB]
            }
            return g
        },
        nz = function(e) {
            return Array.isArray(e) && e.length > 0
        };

    function nD(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                path: "/"
            },
            n = e.data,
            r = e.formatMessage,
            a = e.parentName,
            o = e.locale;
        return n && Array.isArray(n) ? n.filter(function(e) {
            return !!e && (!!nz(e.children) || !!e.path || !!e.originPath || !!e.layout || !e.redirect && (e.unaccessible, !1))
        }).filter(function(e) {
            var t, n;
            return null != e && null != (t = e.menu) && !!t.name || null != e && !!e.flatMenu || null != e && null != (n = e.menu) && !!n.flatMenu || !1 !== e.menu
        }).map(function(e) {
            var t = nI(nI({}, e), {}, {
                path: e.path || e.originPath
            });
            return !t.children && t[nB] && (t.children = t[nB], delete t[nB]), t.unaccessible && delete t.name, "*" === t.path && (t.path = "."), "/*" === t.path && (t.path = "."), !t.path && t.originPath && (t.path = t.originPath), t
        }).map(function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    path: "/"
                },
                i = n.children || n[nB] || [],
                l = nO(n.path, t ? t.path : "/"),
                c = n.name,
                s = nH(n, a || "menu"),
                u = !1 !== s && !1 !== o && r && s ? r({
                    id: s,
                    defaultMessage: c
                }) : c,
                d = t.pro_layout_parentKeys,
                f = (t.children, t.icon, t.flatMenu, t.indexRoute, t.routes, function(e, t) {
                    if (null == e) return {};
                    var n, r, a = function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                    return a
                }(t, nx)),
                p = new Set([].concat(nM(void 0 === d ? [] : d), nM(n.parentKeys || [])));
            t.key && p.add(t.key);
            var m = nI(nI(nI({}, f), {}, {
                menu: void 0
            }, n), {}, {
                path: l,
                locale: s,
                key: n.key || nA(nI(nI({}, n), {}, {
                    path: l
                })),
                pro_layout_parentKeys: Array.from(p).filter(function(e) {
                    return e && "/" !== e
                })
            });
            if (u ? m.name = u : delete m.name, void 0 === m.menu && delete m.menu, nz(i)) {
                var h = nD(nI(nI({}, e), {}, {
                    data: i,
                    parentName: s || ""
                }), m);
                nz(h) && (m.children = h)
            }
            return nL(m, e)
        }).flat(1) : []
    }
    var nN = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return t.filter(function(e) {
                return e && (e.name || nz(e.children)) && !e.hideInMenu && !e.redirect
            }).map(function(t) {
                var n = nI({}, t),
                    r = n.children || t[nB] || [];
                if (delete n[nB], nz(r) && !n.hideChildrenInMenu && r.some(function(e) {
                        return e && !!e.name
                    })) {
                    var a = e(r);
                    if (a.length) return nI(nI({}, n), {}, {
                        children: a
                    })
                }
                return nI({}, t)
            }).filter(function(e) {
                return e
            })
        },
        n_ = function(e) {
            if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
            a.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(a, "prototype", {
                writable: !1
            }), e && nT(a, e);
            var t, n, r = (t = nk(), function() {
                var e, n = nw(a);
                return e = t ? Reflect.construct(n, arguments, nw(this).constructor) : n.apply(this, arguments),
                    function(e, t) {
                        if (t && ("object" === nb(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                        var n = e;
                        if (void 0 === n) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return n
                    }(this, e)
            });

            function a() {
                if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
                return r.apply(this, arguments)
            }
            return n = [{
                    key: "get",
                    value: function(e) {
                        var t;
                        try {
                            var n, r = function(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = nP(e))) {
                                        n && (e = n);
                                        var r = 0,
                                            a = function() {};
                                        return {
                                            s: a,
                                            n: function() {
                                                return r >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[r++]
                                                }
                                            },
                                            e: function(e) {
                                                throw e
                                            },
                                            f: a
                                        }
                                    }
                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var o, i = !0,
                                    l = !1;
                                return {
                                    s: function() {
                                        n = n.call(e)
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return i = e.done, e
                                    },
                                    e: function(e) {
                                        l = !0, o = e
                                    },
                                    f: function() {
                                        try {
                                            i || null == n.return || n.return()
                                        } finally {
                                            if (l) throw o
                                        }
                                    }
                                }
                            }(this.entries());
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var a, o = (a = n.value, function(e) {
                                            if (Array.isArray(e)) return e
                                        }(a) || function(e, t) {
                                            var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != a) {
                                                var o = [],
                                                    i = !0,
                                                    l = !1;
                                                try {
                                                    for (a = a.call(e); !(i = (n = a.next()).done) && (o.push(n.value), 2 !== o.length); i = !0);
                                                } catch (e) {
                                                    l = !0, r = e
                                                } finally {
                                                    try {
                                                        i || null == a.return || a.return()
                                                    } finally {
                                                        if (l) throw r
                                                    }
                                                }
                                                return o
                                            }
                                        }(a, 2) || nP(a, 2) || function() {
                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }()),
                                        i = o[0],
                                        l = o[1],
                                        c = nR(i);
                                    if (!nE(i) && (0, np.pathToRegexp)(c, []).test(e)) {
                                        t = l;
                                        break
                                    }
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                        } catch (e) {
                            t = void 0
                        }
                        return t
                    }
                }],
                function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }(a.prototype, n), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), a
        }(nC(Map)),
        nW = function(e) {
            var t = new n_;
            return ! function e(n, r) {
                n.forEach(function(n) {
                    var a = n.children || n[nB] || [];
                    nz(a) && e(a, n);
                    var o = nO(n.path, r ? r.path : "/");
                    t.set(nR(o), n)
                })
            }(e), t
        },
        n$ = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return t.map(function(t) {
                var n = t.children || t[nB];
                if (nz(n) && e(n).length) return nI({}, t);
                var r = nI({}, t);
                return delete r[nB], delete r.children, r
            }).filter(function(e) {
                return e
            })
        };
    let nU = function(e, t, n, r) {
        var a = nD({
                data: e,
                formatMessage: n,
                locale: t
            }),
            o = r ? n$(a) : nN(a);
        return {
            breadcrumb: nW(a),
            menuData: o
        }
    };

    function nV(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function nG(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? nV(Object(n), !0).forEach(function(t) {
                var r, a, o;
                r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[a] = o
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nV(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    let nK = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = {};
        return t.forEach(function(t) {
            var r = nG({}, t);
            if (r && r.key) {
                !r.children && r[nB] && (r.children = r[nB], delete r[nB]);
                var a = r.children || [];
                n[nR(r.path || r.key || "/")] = nG({}, r), n[r.key || r.path || "/"] = nG({}, r), n = nG(nG({}, n), e(a))
            }
        }), n
    };
    var nY = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return e.filter(function(e) {
            if ("/" === e && "/" === t) return !0;
            if ("/" !== e && "/*" !== e && e && !nE(e)) {
                var r = nR(e);
                try {
                    if (n && (0, np.pathToRegexp)("".concat(r)).test(t) || (0, np.pathToRegexp)("".concat(r), []).test(t) || (0, np.pathToRegexp)("".concat(r, "/(.*)")).test(t)) return !0
                } catch (e) {}
            }
            return !1
        }).sort(function(e, n) {
            return e === t ? 10 : n === t ? -10 : e.substr(1).split("/").length - n.substr(1).split("/").length
        })
    };
    let nX = function(e, t, n, r) {
        var a = nK(t),
            o = nY(Object.keys(a), e || "/", r);
        return !o || o.length < 1 ? [] : (n || (o = [o[o.length - 1]]), o.map(function(e) {
            var t = a[e] || {
                    pro_layout_parentKeys: "",
                    key: ""
                },
                n = new Map,
                r = (t.pro_layout_parentKeys || []).map(function(e) {
                    return n.has(e) ? null : (n.set(e, !0), a[e])
                }).filter(function(e) {
                    return e
                });
            return t.key && r.push(t), r
        }).flat(1))
    };
    var h = h,
        nq = e.i(235875),
        nq = nq,
        nZ = e.i(971151),
        nQ = e.i(376150),
        nQ = nQ,
        nJ = function(e) {
            (0, tk.default)(n, e);
            var t = (0, tT.default)(n);

            function n() {
                var e;
                (0, tC.default)(this, n);
                for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(a)), (0, l.default)((0, nZ.default)(e), "state", {
                    hasError: !1,
                    errorInfo: ""
                }), e
            }
            return (0, tS.default)(n, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    console.log(e, t)
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.hasError ? (0, o.jsx)(nQ.default, {
                        status: "error",
                        title: "Something went wrong.",
                        extra: this.state.errorInfo
                    }) : this.props.children
                }
            }], [{
                key: "getDerivedStateFromError",
                value: function(e) {
                    return {
                        hasError: !0,
                        errorInfo: e.message
                    }
                }
            }]), n
        }(i.default.Component),
        nq = nq,
        n0 = function(e) {
            var t = (0, i.useContext)(e_).hashId,
                n = e.style,
                r = e.prefixCls,
                a = e.children,
                c = e.hasPageContainer,
                s = (0, eG.default)("".concat(r, "-content"), t, (0, l.default)((0, l.default)({}, "".concat(r, "-has-header"), e.hasHeader), "".concat(r, "-content-has-page-container"), (void 0 === c ? 0 : c) > 0)),
                u = e.ErrorBoundary || nJ;
            return !1 === e.ErrorBoundary ? (0, o.jsx)(nq.default.Content, {
                className: s,
                style: n,
                children: a
            }) : (0, o.jsx)(u, {
                children: (0, o.jsx)(nq.default.Content, {
                    className: s,
                    style: n,
                    children: a
                })
            })
        },
        n1 = function() {
            return (0, o.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 200 200",
                children: [(0, o.jsxs)("defs", {
                    children: [(0, o.jsxs)("linearGradient", {
                        x1: "62.1023273%",
                        y1: "0%",
                        x2: "108.19718%",
                        y2: "37.8635764%",
                        id: "linearGradient-1",
                        children: [(0, o.jsx)("stop", {
                            stopColor: "#4285EB",
                            offset: "0%"
                        }), (0, o.jsx)("stop", {
                            stopColor: "#2EC7FF",
                            offset: "100%"
                        })]
                    }), (0, o.jsxs)("linearGradient", {
                        x1: "69.644116%",
                        y1: "0%",
                        x2: "54.0428975%",
                        y2: "108.456714%",
                        id: "linearGradient-2",
                        children: [(0, o.jsx)("stop", {
                            stopColor: "#29CDFF",
                            offset: "0%"
                        }), (0, o.jsx)("stop", {
                            stopColor: "#148EFF",
                            offset: "37.8600687%"
                        }), (0, o.jsx)("stop", {
                            stopColor: "#0A60FF",
                            offset: "100%"
                        })]
                    }), (0, o.jsxs)("linearGradient", {
                        x1: "69.6908165%",
                        y1: "-12.9743587%",
                        x2: "16.7228981%",
                        y2: "117.391248%",
                        id: "linearGradient-3",
                        children: [(0, o.jsx)("stop", {
                            stopColor: "#FA816E",
                            offset: "0%"
                        }), (0, o.jsx)("stop", {
                            stopColor: "#F74A5C",
                            offset: "41.472606%"
                        }), (0, o.jsx)("stop", {
                            stopColor: "#F51D2C",
                            offset: "100%"
                        })]
                    }), (0, o.jsxs)("linearGradient", {
                        x1: "68.1279872%",
                        y1: "-35.6905737%",
                        x2: "30.4400914%",
                        y2: "114.942679%",
                        id: "linearGradient-4",
                        children: [(0, o.jsx)("stop", {
                            stopColor: "#FA8E7D",
                            offset: "0%"
                        }), (0, o.jsx)("stop", {
                            stopColor: "#F74A5C",
                            offset: "51.2635191%"
                        }), (0, o.jsx)("stop", {
                            stopColor: "#F51D2C",
                            offset: "100%"
                        })]
                    })]
                }), (0, o.jsx)("g", {
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd",
                    children: (0, o.jsx)("g", {
                        transform: "translate(-20.000000, -20.000000)",
                        children: (0, o.jsx)("g", {
                            transform: "translate(20.000000, 20.000000)",
                            children: (0, o.jsxs)("g", {
                                children: [(0, o.jsxs)("g", {
                                    fillRule: "nonzero",
                                    children: [(0, o.jsxs)("g", {
                                        children: [(0, o.jsx)("path", {
                                            d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                                            fill: "url(#linearGradient-1)"
                                        }), (0, o.jsx)("path", {
                                            d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                                            fill: "url(#linearGradient-2)"
                                        })]
                                    }), (0, o.jsx)("path", {
                                        d: "M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z",
                                        fill: "url(#linearGradient-3)"
                                    })]
                                }), (0, o.jsx)("ellipse", {
                                    fill: "url(#linearGradient-4)",
                                    cx: "100.519339",
                                    cy: "100.436681",
                                    rx: "23.6001926",
                                    ry: "23.580786"
                                })]
                            })
                        })
                    })
                })]
            })
        };
    let n2 = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"
                }
            }]
        },
        name: "copyright",
        theme: "outlined"
    };
    var n6 = e.i(9583),
        n5 = i.forwardRef(function(e, t) {
            return i.createElement(n6.default, (0, e4.default)({}, e, {
                ref: t,
                icon: n2
            }))
        }),
        nq = nq,
        h = h,
        n4 = function(e) {
            var t = e.className,
                n = e.prefixCls,
                r = e.links,
                a = e.copyright,
                c = e.style,
                u = (0, i.useContext)(h.default.ConfigContext).getPrefixCls(n || "pro-global-footer"),
                d = eI("ProLayoutFooter", function(e) {
                    var t;
                    return [(t = (0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(u)
                    }), (0, l.default)({}, t.componentCls, {
                        marginBlock: 0,
                        marginBlockStart: 48,
                        marginBlockEnd: 24,
                        marginInline: 0,
                        paddingBlock: 0,
                        paddingInline: 16,
                        textAlign: "center",
                        "&-list": {
                            marginBlockEnd: 8,
                            color: t.colorTextSecondary,
                            "&-link": {
                                color: t.colorTextSecondary,
                                textDecoration: t.linkDecoration
                            },
                            "*:not(:last-child)": {
                                marginInlineEnd: 8
                            },
                            "&:hover": {
                                color: t.colorPrimary
                            }
                        },
                        "&-copyright": {
                            fontSize: "14px",
                            color: t.colorText
                        }
                    }))]
                }),
                f = d.wrapSSR,
                p = d.hashId;
            return (null == r || !1 === r || Array.isArray(r) && 0 === r.length) && (null == a || !1 === a) ? null : f((0, o.jsxs)("div", {
                className: (0, eG.default)(u, p, t),
                style: c,
                children: [r && (0, o.jsx)("div", {
                    className: "".concat(u, "-list ").concat(p).trim(),
                    children: r.map(function(e) {
                        return (0, o.jsx)("a", {
                            className: "".concat(u, "-list-link ").concat(p).trim(),
                            title: e.key,
                            target: e.blankTarget ? "_blank" : "_self",
                            href: e.href,
                            rel: "noreferrer",
                            children: e.title
                        }, e.key)
                    })
                }), a && (0, o.jsx)("div", {
                    className: "".concat(u, "-copyright ").concat(p).trim(),
                    children: a
                })]
            }))
        },
        n8 = nq.default.Footer,
        n3 = function(e) {
            var t = e.links,
                n = e.copyright,
                r = e.style,
                a = e.className,
                l = e.prefixCls;
            return (0, o.jsx)(n8, {
                className: a,
                style: (0, s.default)({
                    padding: 0
                }, r),
                children: (0, o.jsx)(n4, {
                    links: t,
                    prefixCls: l,
                    copyright: !1 === n ? null : (0, o.jsxs)(i.Fragment, {
                        children: [(0, o.jsx)(n5, {}), " ", n]
                    })
                })
            })
        },
        h = h,
        nq = nq,
        n9 = function e(t) {
            return (t || []).reduce(function(t, n) {
                return (n.key && t.push(n.key), n.children || n.routes) ? t.concat(e(n.children || n.routes) || []) : t
            }, [])
        };

    function n7(e) {
        return e.map(function(e) {
            var t = e.children || [],
                n = (0, s.default)({}, e);
            if (!n.children && n.routes && (n.children = n.routes), !n.name || n.hideInMenu) return null;
            if (n && null != n && n.children) {
                if (!n.hideChildrenInMenu && t.some(function(e) {
                        return e && e.name && !e.hideInMenu
                    })) return (0, s.default)((0, s.default)({}, e), {}, {
                    children: n7(t)
                });
                delete n.children
            }
            return delete n.routes, n
        }).filter(function(e) {
            return e
        })
    }
    let re = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "menu",
        theme: "outlined"
    };
    var rt = i.forwardRef(function(e, t) {
            return i.createElement(n6.default, (0, e4.default)({}, e, {
                ref: t,
                icon: re
            }))
        }),
        h = h,
        rn = e.i(282786),
        rr = function() {
            return (0, o.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 12 12",
                fill: "currentColor",
                "aria-hidden": "true",
                children: (0, o.jsx)("path", {
                    d: "M0 0h3v3H0V0zm4.5 0h3v3h-3V0zM9 0h3v3H9V0zM0 4.5h3v3H0v-3zm4.503 0h3v3h-3v-3zM9 4.5h3v3H9v-3zM0 9h3v3H0V9zm4.503 0h3v3h-3V9zM9 9h3v3H9V9z"
                })
            })
        },
        ra = function e(t) {
            var n = t.appList,
                r = t.baseClassName,
                a = t.hashId,
                i = t.itemClick;
            return (0, o.jsx)("div", {
                className: "".concat(r, "-content ").concat(a).trim(),
                children: (0, o.jsx)("ul", {
                    className: "".concat(r, "-content-list ").concat(a).trim(),
                    children: null == n ? void 0 : n.map(function(t, n) {
                        var l;
                        return null != t && null != (l = t.children) && l.length ? (0, o.jsxs)("div", {
                            className: "".concat(r, "-content-list-item-group ").concat(a).trim(),
                            children: [(0, o.jsx)("div", {
                                className: "".concat(r, "-content-list-item-group-title ").concat(a).trim(),
                                children: t.title
                            }), (0, o.jsx)(e, {
                                hashId: a,
                                itemClick: i,
                                appList: null == t ? void 0 : t.children,
                                baseClassName: r
                            })]
                        }, n) : (0, o.jsx)("li", {
                            className: "".concat(r, "-content-list-item ").concat(a).trim(),
                            onClick: function(e) {
                                e.stopPropagation(), null == i || i(t)
                            },
                            children: (0, o.jsxs)("a", {
                                href: i ? void 0 : t.url,
                                target: t.target,
                                rel: "noreferrer",
                                children: [rs(t.icon), (0, o.jsxs)("div", {
                                    children: [(0, o.jsx)("div", {
                                        children: t.title
                                    }), t.desc ? (0, o.jsx)("span", {
                                        children: t.desc
                                    }) : null]
                                })]
                            })
                        }, n)
                    })
                })
            })
        },
        ro = function(e) {
            if (!e || !e.startsWith("http")) return !1;
            try {
                return new URL(e), !0
            } catch (e) {
                return !1
            }
        },
        ri = function(e, t) {
            if (e && "string" == typeof e && ro(e)) return (0, o.jsx)("img", {
                src: e,
                alt: "logo"
            });
            if ("function" == typeof e) return e();
            if (e && "string" == typeof e) return (0, o.jsx)("div", {
                id: "avatarLogo",
                children: e
            });
            if (!e && t && "string" == typeof t) {
                var n = t.substring(0, 1);
                return (0, o.jsx)("div", {
                    id: "avatarLogo",
                    children: n
                })
            }
            return e
        },
        rl = function e(t) {
            var n = t.appList,
                r = t.baseClassName,
                a = t.hashId,
                i = t.itemClick;
            return (0, o.jsx)("div", {
                className: "".concat(r, "-content ").concat(a).trim(),
                children: (0, o.jsx)("ul", {
                    className: "".concat(r, "-content-list ").concat(a).trim(),
                    children: null == n ? void 0 : n.map(function(t, n) {
                        var l;
                        return null != t && null != (l = t.children) && l.length ? (0, o.jsxs)("div", {
                            className: "".concat(r, "-content-list-item-group ").concat(a).trim(),
                            children: [(0, o.jsx)("div", {
                                className: "".concat(r, "-content-list-item-group-title ").concat(a).trim(),
                                children: t.title
                            }), (0, o.jsx)(e, {
                                hashId: a,
                                itemClick: i,
                                appList: null == t ? void 0 : t.children,
                                baseClassName: r
                            })]
                        }, n) : (0, o.jsx)("li", {
                            className: "".concat(r, "-content-list-item ").concat(a).trim(),
                            onClick: function(e) {
                                e.stopPropagation(), null == i || i(t)
                            },
                            children: (0, o.jsxs)("a", {
                                href: i ? "javascript:;" : t.url,
                                target: t.target,
                                rel: "noreferrer",
                                children: [ri(t.icon, t.title), (0, o.jsx)("div", {
                                    children: (0, o.jsx)("div", {
                                        children: t.title
                                    })
                                })]
                            })
                        }, n)
                    })
                })
            })
        },
        rc = function(e) {
            var t, n, r, a, o;
            return (0, l.default)({}, e.componentCls, {
                "&-icon": {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingInline: 4,
                    paddingBlock: 0,
                    fontSize: 14,
                    lineHeight: "14px",
                    height: 28,
                    width: 28,
                    cursor: "pointer",
                    color: null == (t = e.layout) ? void 0 : t.colorTextAppListIcon,
                    borderRadius: e.borderRadius,
                    "&:hover": {
                        color: null == (n = e.layout) ? void 0 : n.colorTextAppListIconHover,
                        backgroundColor: null == (r = e.layout) ? void 0 : r.colorBgAppListIconHover
                    },
                    "&-active": {
                        color: null == (a = e.layout) ? void 0 : a.colorTextAppListIconHover,
                        backgroundColor: null == (o = e.layout) ? void 0 : o.colorBgAppListIconHover
                    }
                },
                "&-item-title": {
                    marginInlineStart: "16px",
                    marginInlineEnd: "8px",
                    marginBlockStart: 0,
                    marginBlockEnd: "12px",
                    fontWeight: 600,
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: 16,
                    opacity: .85,
                    lineHeight: 1.5,
                    "&:first-child": {
                        marginBlockStart: 12
                    }
                },
                "&-popover": (0, l.default)({}, "".concat(e.antCls, "-popover-arrow"), {
                    display: "none"
                }),
                "&-simple": {
                    "&-content": {
                        maxHeight: "calc(100vh - 48px)",
                        overflow: "auto",
                        "&-list": {
                            boxSizing: "border-box",
                            maxWidth: 376,
                            marginBlock: 0,
                            marginInline: 0,
                            paddingBlock: 0,
                            paddingInline: 0,
                            listStyle: "none",
                            "&-item": {
                                position: "relative",
                                display: "inline-block",
                                width: 104,
                                height: 104,
                                marginBlock: 8,
                                marginInline: 8,
                                paddingInline: 24,
                                paddingBlock: 24,
                                verticalAlign: "top",
                                listStyleType: "none",
                                transition: "transform 0.2s cubic-bezier(0.333, 0, 0, 1)",
                                borderRadius: e.borderRadius,
                                "&-group": {
                                    marginBottom: 16,
                                    "&-title": {
                                        margin: "16px 0 8px 12px",
                                        fontWeight: 600,
                                        color: "rgba(0, 0, 0, 0.88)",
                                        fontSize: 16,
                                        opacity: .85,
                                        lineHeight: 1.5,
                                        "&:first-child": {
                                            marginTop: 12
                                        }
                                    }
                                },
                                "&:hover": {
                                    backgroundColor: e.colorBgTextHover
                                },
                                a: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 12,
                                    textDecoration: "none",
                                    "& > #avatarLogo": {
                                        width: 40,
                                        height: 40,
                                        margin: "0 auto",
                                        color: e.colorPrimary,
                                        fontSize: 22,
                                        lineHeight: "40px",
                                        textAlign: "center",
                                        backgroundImage: "linear-gradient(180deg, #E8F0FB 0%, #F6F8FC 100%)",
                                        borderRadius: e.borderRadius
                                    },
                                    "& > img": {
                                        width: 40,
                                        height: 40
                                    },
                                    "& > div": {
                                        marginBlockStart: 5,
                                        marginInlineStart: 0,
                                        color: e.colorTextHeading,
                                        fontSize: 14,
                                        lineHeight: "22px",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis"
                                    },
                                    "& > div > span": {
                                        color: e.colorTextSecondary,
                                        fontSize: 12,
                                        lineHeight: "20px"
                                    }
                                }
                            }
                        }
                    }
                },
                "&-default": {
                    "&-content": {
                        maxHeight: "calc(100vh - 48px)",
                        overflow: "auto",
                        "&-list": {
                            boxSizing: "content-box",
                            maxWidth: 656,
                            marginBlock: 0,
                            marginInline: 0,
                            paddingBlock: 0,
                            paddingInline: 0,
                            listStyle: "none",
                            "&-item": {
                                position: "relative",
                                display: "inline-block",
                                width: 328,
                                height: 72,
                                paddingInline: 16,
                                paddingBlock: 16,
                                verticalAlign: "top",
                                listStyleType: "none",
                                transition: "transform 0.2s cubic-bezier(0.333, 0, 0, 1)",
                                borderRadius: e.borderRadius,
                                "&-group": {
                                    marginBottom: 16,
                                    "&-title": {
                                        margin: "16px 0 8px 12px",
                                        fontWeight: 600,
                                        color: "rgba(0, 0, 0, 0.88)",
                                        fontSize: 16,
                                        opacity: .85,
                                        lineHeight: 1.5,
                                        "&:first-child": {
                                            marginTop: 12
                                        }
                                    }
                                },
                                "&:hover": {
                                    backgroundColor: e.colorBgTextHover
                                },
                                "* div": null == ej ? void 0 : ej(e),
                                a: {
                                    display: "flex",
                                    height: "100%",
                                    fontSize: 12,
                                    textDecoration: "none",
                                    "& > img": {
                                        width: 40,
                                        height: 40
                                    },
                                    "& > div": {
                                        marginInlineStart: 14,
                                        color: e.colorTextHeading,
                                        fontSize: 14,
                                        lineHeight: "22px",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis"
                                    },
                                    "& > div > span": {
                                        color: e.colorTextSecondary,
                                        fontSize: 12,
                                        lineHeight: "20px"
                                    }
                                }
                            }
                        }
                    }
                }
            })
        },
        rs = function(e) {
            return "string" == typeof e ? (0, o.jsx)("img", {
                width: "auto",
                height: 22,
                src: e,
                alt: "logo"
            }) : "function" == typeof e ? e() : e
        },
        ru = function(e) {
            var t, n = e.appList,
                r = e.appListRender,
                a = e.prefixCls,
                c = e.onItemClick,
                u = i.default.useRef(null),
                d = i.default.useRef(null),
                f = "".concat(void 0 === a ? "ant-pro" : a, "-layout-apps"),
                m = eI("AppsLogoComponents", function(e) {
                    return [rc((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(f)
                    }))]
                }),
                h = m.wrapSSR,
                g = m.hashId,
                v = (0, i.useState)(!1),
                y = (0, p.default)(v, 2),
                b = y[0],
                x = y[1],
                C = function(e) {
                    null == c || c(e, d)
                },
                S = (0, i.useMemo)(function() {
                    return (null == n ? void 0 : n.some(function(e) {
                        return !(null != e && e.desc)
                    })) ? (0, o.jsx)(rl, {
                        hashId: g,
                        appList: n,
                        itemClick: c ? C : void 0,
                        baseClassName: "".concat(f, "-simple")
                    }) : (0, o.jsx)(ra, {
                        hashId: g,
                        appList: n,
                        itemClick: c ? C : void 0,
                        baseClassName: "".concat(f, "-default")
                    })
                }, [n, f, g]);
            if (!(null != e && null != (t = e.appList) && t.length)) return null;
            var k = r ? r(null == e ? void 0 : e.appList, S) : S,
                T = nl(void 0, function(e) {
                    return x(e)
                });
            return h((0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    ref: u,
                    onClick: function(e) {
                        e.stopPropagation(), e.preventDefault()
                    }
                }), (0, o.jsx)(rn.Popover, (0, s.default)((0, s.default)({
                    placement: "bottomRight",
                    trigger: ["click"],
                    zIndex: 9999,
                    arrow: !1
                }, T), {}, {
                    overlayClassName: "".concat(f, "-popover ").concat(g).trim(),
                    content: k,
                    getPopupContainer: function() {
                        return u.current || document.body
                    },
                    children: (0, o.jsx)("span", {
                        ref: d,
                        onClick: function(e) {
                            e.stopPropagation()
                        },
                        className: (0, eG.default)("".concat(f, "-icon"), g, (0, l.default)({}, "".concat(f, "-icon-active"), b)),
                        children: (0, o.jsx)(rr, {})
                    })
                }))]
            }))
        },
        nq = nq,
        rd = e.i(899268);

    function rf() {
        return (0, o.jsx)("svg", {
            width: "1em",
            height: "1em",
            viewBox: "0 0 12 12",
            fill: "currentColor",
            "aria-hidden": "true",
            children: (0, o.jsx)("path", {
                d: "M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z"
            })
        })
    }
    var rp = function(e) {
            var t, n, r;
            return (0, l.default)({}, e.componentCls, {
                position: "absolute",
                insetBlockStart: "18px",
                zIndex: "101",
                width: "24px",
                height: "24px",
                fontSize: ["14px", "16px"],
                textAlign: "center",
                borderRadius: "40px",
                insetInlineEnd: "-13px",
                transition: "transform 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: null == (t = e.layout) || null == (t = t.sider) ? void 0 : t.colorTextCollapsedButton,
                backgroundColor: null == (n = e.layout) || null == (n = n.sider) ? void 0 : n.colorBgCollapsedButton,
                boxShadow: "0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)",
                "&:hover": {
                    color: null == (r = e.layout) || null == (r = r.sider) ? void 0 : r.colorTextCollapsedButtonHover,
                    boxShadow: "0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)"
                },
                ".anticon": {
                    fontSize: "14px"
                },
                "& > svg": {
                    transition: "transform  0.3s",
                    transform: "rotate(90deg)"
                },
                "&-collapsed": {
                    "& > svg": {
                        transform: "rotate(-90deg)"
                    }
                }
            })
        },
        rm = ["isMobile", "collapsed"],
        rh = function(e) {
            var t, n = e.isMobile,
                r = e.collapsed,
                a = (0, c.default)(e, rm),
                i = (t = e.className, eI("SiderMenuCollapsedIcon", function(e) {
                    return [rp((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(t)
                    }))]
                })),
                u = i.wrapSSR,
                d = i.hashId;
            return n && r ? null : u((0, o.jsx)("div", (0, s.default)((0, s.default)({}, a), {}, {
                className: (0, eG.default)(e.className, d, (0, l.default)((0, l.default)({}, "".concat(e.className, "-collapsed"), r), "".concat(e.className, "-is-mobile"), n)),
                children: (0, o.jsx)(rf, {})
            })))
        },
        rg = e.i(327256),
        rv = e.i(968720),
        ry = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"],
        rb = i.forwardRef(function(e, t) {
            var n = e.className,
                r = e.component,
                a = e.viewBox,
                o = e.spin,
                u = e.rotate,
                d = e.tabIndex,
                f = e.onClick,
                p = e.children,
                m = (0, c.default)(e, ry),
                h = i.useRef(),
                g = _(h, t);
            (0, rv.warning)(!!(r || p), "Should have `component` prop or `children`."), (0, rv.useInsertStyles)(h);
            var v = i.useContext(rg.default),
                y = v.prefixCls,
                b = void 0 === y ? "anticon" : y,
                x = v.rootClassName,
                C = (0, eG.default)(x, b, (0, l.default)({}, "".concat(b, "-spin"), !!o && !!r), n),
                S = (0, eG.default)((0, l.default)({}, "".concat(b, "-spin"), !!o)),
                k = (0, s.default)((0, s.default)({}, rv.svgBaseProps), {}, {
                    className: S,
                    style: u ? {
                        msTransform: "rotate(".concat(u, "deg)"),
                        transform: "rotate(".concat(u, "deg)")
                    } : void 0,
                    viewBox: a
                });
            a || delete k.viewBox;
            var T = d;
            return void 0 === T && f && (T = -1), i.createElement("span", (0, e4.default)({
                role: "img"
            }, m, {
                ref: g,
                tabIndex: T,
                onClick: f,
                className: C
            }), r ? i.createElement(r, k, p) : p ? ((0, rv.warning)(!!a || 1 === i.Children.count(p) && i.isValidElement(p) && "use" === i.Children.only(p).type, "Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."), i.createElement("svg", (0, e4.default)({}, k, {
                viewBox: a
            }), p)) : null)
        });
    rb.displayName = "AntdIcon";
    var rx = ["type", "children"],
        rC = new Set;

    function rS(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = e[t];
        if ("string" == typeof n && n.length && !rC.has(n)) {
            var r = document.createElement("script");
            r.setAttribute("src", n), r.setAttribute("data-namespace", n), e.length > t + 1 && (r.onload = function() {
                rS(e, t + 1)
            }, r.onerror = function() {
                rS(e, t + 1)
            }), rC.add(n), document.body.appendChild(r)
        }
    }

    function rk() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.scriptUrl,
            n = e.extraCommonProps,
            r = void 0 === n ? {} : n;
        t && "undefined" != typeof document && "function" == typeof document.createElement && (Array.isArray(t) ? rS(t.reverse()) : rS([t]));
        var a = i.forwardRef(function(e, t) {
            var n = e.type,
                a = e.children,
                o = (0, c.default)(e, rx),
                l = null;
            return e.type && (l = i.createElement("use", {
                xlinkHref: "#".concat(n)
            })), a && (l = a), i.createElement(rb, (0, e4.default)({}, r, o, {
                ref: t
            }), l)
        });
        return a.displayName = "Iconfont", a
    }
    var rT = e.i(981339),
        rw = e.i(592968),
        rM = {
            navTheme: "light",
            layout: "side",
            contentWidth: "Fluid",
            fixedHeader: !1,
            fixSiderbar: !0,
            iconfontUrl: "",
            colorPrimary: "#1677FF",
            splitMenus: !1
        },
        rP = function(e, t) {
            var n, r, a = t.includes("horizontal") ? null == (n = e.layout) ? void 0 : n.header : null == (r = e.layout) ? void 0 : r.sider;
            return (0, s.default)((0, s.default)((0, l.default)({}, "".concat(e.componentCls), (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                background: "transparent",
                color: null == a ? void 0 : a.colorTextMenu,
                border: "none"
            }, "".concat(e.componentCls, "-menu-item"), {
                transition: "none !important"
            }), "".concat(e.componentCls, "-submenu-has-icon"), (0, l.default)({}, "> ".concat(e.antCls, "-menu-sub"), {
                paddingInlineStart: 10
            })), "".concat(e.antCls, "-menu-title-content"), {
                width: "100%",
                height: "100%",
                display: "inline-flex"
            }), "".concat(e.antCls, "-menu-title-content"), {
                "&:first-child": {
                    width: "100%"
                }
            }), "".concat(e.componentCls, "-item-icon"), {
                display: "flex",
                alignItems: "center"
            }), "&&-collapsed", (0, l.default)((0, l.default)((0, l.default)({}, "".concat(e.antCls, "-menu-item, \n        ").concat(e.antCls, "-menu-item-group > ").concat(e.antCls, "-menu-item-group-list > ").concat(e.antCls, "-menu-item, \n        ").concat(e.antCls, "-menu-item-group > ").concat(e.antCls, "-menu-item-group-list > ").concat(e.antCls, "-menu-submenu > ").concat(e.antCls, "-menu-submenu-title, \n        ").concat(e.antCls, "-menu-submenu > ").concat(e.antCls, "-menu-submenu-title"), {
                paddingInline: "0 !important",
                marginBlock: "4px !important"
            }), "".concat(e.antCls, "-menu-item-group > ").concat(e.antCls, "-menu-item-group-list > ").concat(e.antCls, "-menu-submenu-selected > ").concat(e.antCls, "-menu-submenu-title, \n        ").concat(e.antCls, "-menu-submenu-selected > ").concat(e.antCls, "-menu-submenu-title"), {
                backgroundColor: null == a ? void 0 : a.colorBgMenuItemSelected,
                borderRadius: e.borderRadiusLG
            }), "".concat(e.componentCls, "-group"), (0, l.default)({}, "".concat(e.antCls, "-menu-item-group-title"), {
                paddingInline: 0
            }))), "&-item-title", (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: e.marginXS
            }, "".concat(e.componentCls, "-item-text"), {
                maxWidth: "100%",
                textOverflow: "ellipsis",
                overflow: "hidden",
                wordBreak: "break-all",
                whiteSpace: "nowrap"
            }), "&-collapsed", (0, l.default)((0, l.default)({
                minWidth: 40,
                height: 40
            }, "".concat(e.componentCls, "-item-icon"), {
                height: "16px",
                width: "16px",
                lineHeight: "16px !important",
                ".anticon": {
                    lineHeight: "16px !important",
                    height: "16px"
                }
            }), "".concat(e.componentCls, "-item-text-has-icon"), {
                display: "none !important"
            })), "&-collapsed-level-0", {
                flexDirection: "column",
                justifyContent: "center"
            }), "&".concat(e.componentCls, "-group-item-title"), {
                gap: e.marginXS,
                height: 18,
                overflow: "hidden"
            }), "&".concat(e.componentCls, "-item-collapsed-show-title"), (0, l.default)({
                lineHeight: "16px",
                gap: 0
            }, "&".concat(e.componentCls, "-item-title-collapsed"), (0, l.default)((0, l.default)({
                display: "flex"
            }, "".concat(e.componentCls, "-item-icon"), {
                height: "16px",
                width: "16px",
                lineHeight: "16px !important",
                ".anticon": {
                    lineHeight: "16px!important",
                    height: "16px"
                }
            }), "".concat(e.componentCls, "-item-text"), {
                opacity: "1 !important",
                display: "inline !important",
                textAlign: "center",
                fontSize: 12,
                height: 12,
                lineHeight: "12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
                margin: 0,
                padding: 0,
                marginBlockStart: 4
            })))), "&-group", (0, l.default)({}, "".concat(e.antCls, "-menu-item-group-title"), {
                fontSize: 12,
                color: e.colorTextLabel,
                ".anticon": {
                    marginInlineEnd: 8
                }
            })), "&-group-divider", {
                color: e.colorTextSecondary,
                fontSize: 12,
                lineHeight: 20
            })), t.includes("horizontal") ? {} : (0, l.default)({}, "".concat(e.antCls, "-menu-submenu").concat(e.antCls, "-menu-submenu-popup"), (0, l.default)({}, "".concat(e.componentCls, "-item-title"), {
                alignItems: "flex-start"
            }))), {}, (0, l.default)({}, "".concat(e.antCls, "-menu-submenu-popup"), {
                backgroundColor: "rgba(255, 255, 255, 0.42)",
                "-webkit-backdrop-filter": "blur(8px)",
                backdropFilter: "blur(8px)"
            }))
        },
        rj = function(e) {
            var t = (0, i.useState)(e.collapsed),
                n = (0, p.default)(t, 2),
                r = n[0],
                a = n[1],
                l = (0, i.useState)(!1),
                c = (0, p.default)(l, 2),
                s = c[0],
                u = c[1];
            return ((0, i.useEffect)(function() {
                u(!1), setTimeout(function() {
                    a(e.collapsed)
                }, 400)
            }, [e.collapsed]), e.disable) ? e.children : (0, o.jsx)(rw.Tooltip, {
                title: e.title,
                open: !!r && !!e.collapsed && s,
                placement: "right",
                onOpenChange: u,
                children: e.children
            })
        },
        rF = rk({
            scriptUrl: rM.iconfontUrl
        }),
        rI = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon-",
                n = arguments.length > 2 ? arguments[2] : void 0;
            if ("string" == typeof e && "" !== e) {
                if (ro(e) || /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(e)) return (0, o.jsx)("img", {
                    width: 16,
                    src: e,
                    alt: "icon",
                    className: n
                }, e);
                if (e.startsWith(t)) return (0, o.jsx)(rF, {
                    type: e
                })
            }
            return e
        },
        rB = function(e) {
            return e && "string" == typeof e ? e.substring(0, 1).toUpperCase() : null
        },
        rR = (0, tS.default)(function e(t) {
            var n = this;
            (0, tC.default)(this, e), (0, l.default)(this, "props", void 0), (0, l.default)(this, "getNavMenuItems", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                return e.map(function(e) {
                    return n.getSubMenuOrItem(e, t, r)
                }).filter(function(e) {
                    return e
                }).flat(1)
            }), (0, l.default)(this, "getSubMenuOrItem", function(e, t, r) {
                var a = n.props,
                    i = a.subMenuItemRender,
                    c = a.baseClassName,
                    u = a.prefixCls,
                    d = a.collapsed,
                    f = a.menu,
                    p = a.iconPrefixes,
                    m = a.layout,
                    h = (null == f ? void 0 : f.type) === "group" && "top" !== m,
                    g = n.props.token,
                    v = n.getIntlName(e),
                    y = (null == e ? void 0 : e.children) || (null == e ? void 0 : e.routes),
                    b = h && 0 === t ? "group" : void 0;
                if (Array.isArray(y) && y.length > 0) {
                    var x, C, S, k, T, w = 0 === t || h && 1 === t,
                        M = rI(e.icon, p, "".concat(c, "-icon ").concat(null == (x = n.props) ? void 0 : x.hashId)),
                        P = d && w ? rB(v) : null,
                        j = (0, o.jsxs)("div", {
                            className: (0, eG.default)("".concat(c, "-item-title"), null == (C = n.props) ? void 0 : C.hashId, (0, l.default)((0, l.default)((0, l.default)((0, l.default)({}, "".concat(c, "-item-title-collapsed"), d), "".concat(c, "-item-title-collapsed-level-").concat(r), d), "".concat(c, "-group-item-title"), "group" === b), "".concat(c, "-item-collapsed-show-title"), (null == f ? void 0 : f.collapsedShowTitle) && d)),
                            children: ["group" === b && d ? null : w && M ? (0, o.jsx)("span", {
                                className: "".concat(c, "-item-icon ").concat(null == (S = n.props) ? void 0 : S.hashId).trim(),
                                children: M
                            }) : P, (0, o.jsx)("span", {
                                className: (0, eG.default)("".concat(c, "-item-text"), null == (k = n.props) ? void 0 : k.hashId, (0, l.default)({}, "".concat(c, "-item-text-has-icon"), "group" !== b && w && (M || P))),
                                children: v
                            })]
                        }),
                        F = i ? i((0, s.default)((0, s.default)({}, e), {}, {
                            isUrl: !1
                        }), j, n.props) : j;
                    if (h && 0 === t && n.props.collapsed && !f.collapsedShowGroupTitle) return n.getNavMenuItems(y, t + 1, t);
                    var I = n.getNavMenuItems(y, t + 1, h && 0 === t && n.props.collapsed ? t : t + 1);
                    return [{
                        type: b,
                        key: e.key || e.path,
                        label: F,
                        onClick: h ? void 0 : e.onTitleClick,
                        children: I,
                        className: (0, eG.default)((0, l.default)((0, l.default)((0, l.default)({}, "".concat(c, "-group"), "group" === b), "".concat(c, "-submenu"), "group" !== b), "".concat(c, "-submenu-has-icon"), "group" !== b && w && M))
                    }, h && 0 === t ? {
                        type: "divider",
                        prefixCls: u,
                        className: "".concat(c, "-divider"),
                        key: (e.key || e.path) + "-group-divider",
                        style: {
                            padding: 0,
                            borderBlockEnd: 0,
                            margin: n.props.collapsed ? "4px" : "6px 16px",
                            marginBlockStart: n.props.collapsed ? 4 : 8,
                            borderColor: null == g || null == (T = g.layout) || null == (T = T.sider) ? void 0 : T.colorMenuItemDivider
                        }
                    } : void 0].filter(Boolean)
                }
                return {
                    className: "".concat(c, "-menu-item"),
                    disabled: e.disabled,
                    key: e.key || e.path,
                    onClick: e.onTitleClick,
                    label: n.getMenuItemPath(e, t, r)
                }
            }), (0, l.default)(this, "getIntlName", function(e) {
                var t = e.name,
                    r = e.locale,
                    a = n.props,
                    o = a.menu,
                    i = a.formatMessage,
                    l = t;
                return (r && (null == o ? void 0 : o.locale) !== !1 && (l = null == i ? void 0 : i({
                    id: r,
                    defaultMessage: t
                })), n.props.menuTextRender) ? n.props.menuTextRender(e, l, n.props) : l
            }), (0, l.default)(this, "getMenuItemPath", function(e, t, r) {
                var a, i, c, u, d, f, p, m = n.conversionPath(e.path || "/"),
                    h = n.props,
                    g = h.location,
                    v = h.isMobile,
                    y = h.onCollapse,
                    b = h.menuItemRender,
                    x = h.iconPrefixes,
                    C = n.getIntlName(e),
                    S = n.props,
                    k = S.baseClassName,
                    T = S.menu,
                    w = S.collapsed,
                    M = (null == T ? void 0 : T.type) === "group",
                    P = 0 === t || M && 1 === t,
                    j = P ? rI(e.icon, x, "".concat(k, "-icon ").concat(null == (a = n.props) ? void 0 : a.hashId)) : null,
                    F = w && P ? rB(C) : null,
                    I = (0, o.jsxs)("div", {
                        className: (0, eG.default)("".concat(k, "-item-title"), null == (i = n.props) ? void 0 : i.hashId, (0, l.default)((0, l.default)((0, l.default)({}, "".concat(k, "-item-title-collapsed"), w), "".concat(k, "-item-title-collapsed-level-").concat(r), w), "".concat(k, "-item-collapsed-show-title"), (null == T ? void 0 : T.collapsedShowTitle) && w)),
                        children: [(0, o.jsx)("span", {
                            className: "".concat(k, "-item-icon ").concat(null == (c = n.props) ? void 0 : c.hashId).trim(),
                            style: {
                                display: null !== F || j ? "" : "none"
                            },
                            children: j || (0, o.jsx)("span", {
                                className: "anticon",
                                children: F
                            })
                        }), (0, o.jsx)("span", {
                            className: (0, eG.default)("".concat(k, "-item-text"), null == (u = n.props) ? void 0 : u.hashId, (0, l.default)({}, "".concat(k, "-item-text-has-icon"), P && (j || F))),
                            children: C
                        })]
                    }, m),
                    B = ro(m);
                if (B && (I = (0, o.jsxs)("span", {
                        onClick: function() {
                            var e, t;
                            null == (e = window) || null == (t = e.open) || t.call(e, m, "_blank")
                        },
                        className: (0, eG.default)("".concat(k, "-item-title"), null == (d = n.props) ? void 0 : d.hashId, (0, l.default)((0, l.default)((0, l.default)((0, l.default)({}, "".concat(k, "-item-title-collapsed"), w), "".concat(k, "-item-title-collapsed-level-").concat(r), w), "".concat(k, "-item-link"), !0), "".concat(k, "-item-collapsed-show-title"), (null == T ? void 0 : T.collapsedShowTitle) && w)),
                        children: [(0, o.jsx)("span", {
                            className: "".concat(k, "-item-icon ").concat(null == (f = n.props) ? void 0 : f.hashId).trim(),
                            style: {
                                display: null !== F || j ? "" : "none"
                            },
                            children: j || (0, o.jsx)("span", {
                                className: "anticon",
                                children: F
                            })
                        }), (0, o.jsx)("span", {
                            className: (0, eG.default)("".concat(k, "-item-text"), null == (p = n.props) ? void 0 : p.hashId, (0, l.default)({}, "".concat(k, "-item-text-has-icon"), P && (j || F))),
                            children: C
                        })]
                    }, m)), b) {
                    var R = (0, s.default)((0, s.default)({}, e), {}, {
                        isUrl: B,
                        itemPath: m,
                        isMobile: v,
                        replace: m === (void 0 === g ? {
                            pathname: "/"
                        } : g).pathname,
                        onClick: function() {
                            return y && y(!0)
                        },
                        children: void 0
                    });
                    return 0 === t ? (0, o.jsx)(rj, {
                        collapsed: w,
                        title: C,
                        disable: e.disabledTooltip,
                        children: b(R, I, n.props)
                    }) : b(R, I, n.props)
                }
                return 0 === t ? (0, o.jsx)(rj, {
                    collapsed: w,
                    title: C,
                    disable: e.disabledTooltip,
                    children: I
                }) : I
            }), (0, l.default)(this, "conversionPath", function(e) {
                return e && 0 === e.indexOf("http") ? e : "/".concat(e || "").replace(/\/+/g, "/")
            }), this.props = t
        }),
        rE = function(e, t) {
            var n = t.layout,
                r = t.collapsed,
                a = {};
            return e && !r && ["side", "mix"].includes(n || "mix") && (a = {
                openKeys: e
            }), a
        },
        rA = function(e) {
            var t = e.mode,
                n = e.className,
                r = e.handleOpenChange,
                a = e.style,
                c = e.menuData,
                u = e.prefixCls,
                d = e.menu,
                m = e.matchMenuKeys,
                h = e.iconfontUrl,
                g = e.selectedKeys,
                v = e.onSelect,
                y = e.menuRenderType,
                b = e.openKeys,
                x = (0, i.useContext)(e_),
                C = x.dark,
                S = x.token,
                k = "".concat(u, "-base-menu-").concat(t),
                T = (0, i.useRef)([]),
                w = B(null == d ? void 0 : d.defaultOpenAll),
                M = (0, p.default)(w, 2),
                P = M[0],
                j = M[1],
                F = B(function() {
                    return null != d && d.defaultOpenAll ? n9(c) || [] : !1 !== b && []
                }, {
                    value: !1 === b ? void 0 : b,
                    onChange: r
                }),
                I = (0, p.default)(F, 2),
                R = I[0],
                E = I[1],
                A = B([], {
                    value: g,
                    onChange: v ? function(e) {
                        v && e && v(e)
                    } : void 0
                }),
                H = (0, p.default)(A, 2),
                O = H[0],
                L = H[1];
            (0, i.useEffect)(function() {
                (null == d || !d.defaultOpenAll) && !1 !== b && m && (E(m), L(m))
            }, [m.join("-")]), (0, i.useEffect)(function() {
                h && (rF = rk({
                    scriptUrl: h
                }))
            }, [h]), (0, i.useEffect)(function() {
                if (m.join("-") !== (O || []).join("-") && L(m), P || !1 === b || m.join("-") === (R || []).join("-")) null != d && d.ignoreFlatMenu && P ? E(n9(c)) : j(!1);
                else {
                    var e = m;
                    (null == d ? void 0 : d.autoClose) === !1 && (e = Array.from(new Set([].concat((0, f.default)(m), (0, f.default)(R || []))))), E(e)
                }
            }, [m.join("-")]);
            var z = (0, i.useMemo)(function() {
                    return rE(R, e)
                }, [R && R.join(","), e.layout, e.collapsed]),
                D = eI("ProLayoutBaseMenu" + t, function(e) {
                    return [rP((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(k)
                    }), t || "inline")]
                }),
                N = D.wrapSSR,
                _ = D.hashId,
                W = (0, i.useMemo)(function() {
                    return new rR((0, s.default)((0, s.default)({}, e), {}, {
                        token: S,
                        menuRenderType: y,
                        baseClassName: k,
                        hashId: _
                    }))
                }, [e, S, y, k, _]);
            if (null != d && d.loading) return (0, o.jsx)("div", {
                style: null != t && t.includes("inline") ? {
                    padding: 24
                } : {
                    marginBlockStart: 16
                },
                children: (0, o.jsx)(rT.Skeleton, {
                    active: !0,
                    title: !1,
                    paragraph: {
                        rows: null != t && t.includes("inline") ? 6 : 1
                    }
                })
            });
            !1 !== e.openKeys || e.handleOpenChange || (T.current = m);
            var $ = e.postMenuData ? e.postMenuData(c) : c;
            return $ && (null == $ ? void 0 : $.length) < 1 ? null : N((0, i.createElement)(rd.Menu, (0, s.default)((0, s.default)({}, z), {}, {
                _internalDisableMenuItemTitleTooltip: !0,
                key: "Menu",
                mode: t,
                inlineIndent: 16,
                defaultOpenKeys: T.current,
                theme: C ? "dark" : "light",
                selectedKeys: O,
                style: (0, s.default)({
                    backgroundColor: "transparent",
                    border: "none"
                }, a),
                className: (0, eG.default)(n, _, k, (0, l.default)((0, l.default)({}, "".concat(k, "-horizontal"), "horizontal" === t), "".concat(k, "-collapsed"), e.collapsed)),
                items: W.getNavMenuItems($, 0, 0),
                onOpenChange: function(t) {
                    e.collapsed || E(t)
                }
            }, e.menuProps)))
        },
        rH = ["title", "render"],
        rO = i.default.memo(function(e) {
            return (0, o.jsx)(o.Fragment, {
                children: e.children
            })
        }),
        rL = nq.default.Sider,
        rz = nq.default._InternalSiderContext,
        rD = void 0 === rz ? {
            Provider: rO
        } : rz,
        rN = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "menuHeaderRender",
                n = e.logo,
                r = e.title,
                a = e.layout,
                i = e[t];
            if (!1 === i) return null;
            var l = rs(n),
                c = (0, o.jsx)("h1", {
                    children: null != r ? r : "Ant Design Pro"
                });
            return i ? i(l, e.collapsed ? null : c, e) : e.isMobile ? null : ("mix" !== a || "menuHeaderRender" !== t) && (e.collapsed ? (0, o.jsx)("a", {
                children: l
            }, "title") : (0, o.jsxs)("a", {
                children: [l, c]
            }, "title"))
        },
        r_ = function(e) {
            var t, n, r, a, u, d = e.collapsed,
                f = e.originCollapsed,
                p = e.fixSiderbar,
                m = e.menuFooterRender,
                h = e.onCollapse,
                g = e.theme,
                v = e.siderWidth,
                y = e.isMobile,
                b = e.onMenuHeaderClick,
                x = e.breakpoint,
                C = void 0 === x ? "lg" : x,
                S = e.style,
                k = e.layout,
                T = e.menuExtraRender,
                w = void 0 !== T && T,
                M = e.links,
                P = e.menuContentRender,
                j = e.collapsedButtonRender,
                F = e.prefixCls,
                I = e.avatarProps,
                B = e.rightContentRender,
                R = e.actionsRender,
                E = e.onOpenChange,
                A = e.stylish,
                H = e.logoStyle,
                O = (0, i.useContext)(e_).hashId,
                L = (0, i.useMemo)(function() {
                    return !y && "mix" !== k
                }, [y, k]),
                z = "".concat(F, "-sider"),
                D = (t = "".concat(z, ".").concat(z, "-stylish"), r = (n = {
                    stylish: A,
                    proLayoutCollapsedWidth: 64
                }).stylish, a = n.proLayoutCollapsedWidth, eI("ProLayoutSiderMenuStylish", function(e) {
                    var n = (0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(t),
                        proLayoutCollapsedWidth: a
                    });
                    return r ? [(0, l.default)({}, "div".concat(e.proComponentsCls, "-layout"), (0, l.default)({}, "".concat(n.componentCls), null == r ? void 0 : r(n)))] : []
                })),
                N = (0, eG.default)("".concat(z), O, (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({}, "".concat(z, "-fixed"), p), "".concat(z, "-fixed-mix"), "mix" === k && !y && p), "".concat(z, "-collapsed"), e.collapsed), "".concat(z, "-layout-").concat(k), k && !y), "".concat(z, "-light"), "dark" !== g), "".concat(z, "-mix"), "mix" === k && !y), "".concat(z, "-stylish"), !!A)),
                _ = rN(e),
                W = w && w(e),
                $ = (0, i.useMemo)(function() {
                    return !1 !== P && (0, i.createElement)(rA, (0, s.default)((0, s.default)({}, e), {}, {
                        key: "base-menu",
                        mode: d && !y ? "vertical" : "inline",
                        handleOpenChange: E,
                        style: {
                            width: "100%"
                        },
                        className: "".concat(z, "-menu ").concat(O).trim()
                    }))
                }, [z, O, P, E, e]),
                U = (M || []).map(function(e, t) {
                    return {
                        className: "".concat(z, "-link"),
                        label: e,
                        key: t
                    }
                }),
                V = (0, i.useMemo)(function() {
                    return P ? P(e, $) : $
                }, [P, $, e]),
                G = (0, i.useMemo)(function() {
                    if (!I) return null;
                    var t = I.title,
                        n = I.render,
                        r = (0, c.default)(I, rH),
                        a = (0, o.jsxs)("div", {
                            className: "".concat(z, "-actions-avatar"),
                            children: [null != r && r.src || null != r && r.srcSet || r.icon || r.children ? (0, o.jsx)(e6.Avatar, (0, s.default)({
                                size: 28
                            }, r)) : null, I.title && !d && (0, o.jsx)("span", {
                                children: t
                            })]
                        });
                    return n ? n(I, a, e) : a
                }, [I, z, d]),
                K = (0, i.useMemo)(function() {
                    return R ? (0, o.jsx)(e5.Space, {
                        align: "center",
                        size: 4,
                        direction: d ? "vertical" : "horizontal",
                        className: (0, eG.default)(["".concat(z, "-actions-list"), d && "".concat(z, "-actions-list-collapsed"), O]),
                        children: [null == R ? void 0 : R(e)].flat(1).map(function(e, t) {
                            return (0, o.jsx)("div", {
                                className: "".concat(z, "-actions-list-item ").concat(O).trim(),
                                children: e
                            }, t)
                        })
                    }) : null
                }, [R, z, d]),
                Y = (0, i.useMemo)(function() {
                    return (0, o.jsx)(ru, {
                        onItemClick: e.itemClick,
                        appListRender: e.appListRender,
                        appList: e.appList,
                        prefixCls: e.prefixCls
                    })
                }, [e.appList, e.appListRender, e.prefixCls]),
                X = (0, i.useMemo)(function() {
                    if (!1 === j) return null;
                    var e = (0, o.jsx)(rh, {
                        isMobile: y,
                        collapsed: f,
                        className: "".concat(z, "-collapsed-button"),
                        onClick: function() {
                            null == h || h(!f)
                        }
                    });
                    return j ? j(d, e) : e
                }, [j, y, f, z, d, h]),
                q = (0, i.useMemo)(function() {
                    return G || K ? (0, o.jsxs)("div", {
                        className: (0, eG.default)("".concat(z, "-actions"), O, d && "".concat(z, "-actions-collapsed")),
                        children: [G, K]
                    }) : null
                }, [K, G, z, d, O]),
                Z = (0, i.useMemo)(function() {
                    var t;
                    return null != e && null != (t = e.menu) && t.hideMenuWhenCollapsed && d ? "".concat(z, "-hide-menu-collapsed") : null
                }, [z, d, null == e || null == (u = e.menu) ? void 0 : u.hideMenuWhenCollapsed]),
                Q = m && (null == m ? void 0 : m(e)),
                J = (0, o.jsxs)(o.Fragment, {
                    children: [_ && (0, o.jsxs)("div", {
                        className: (0, eG.default)([(0, eG.default)("".concat(z, "-logo"), O, (0, l.default)({}, "".concat(z, "-logo-collapsed"), d))]),
                        onClick: L ? b : void 0,
                        id: "logo",
                        style: H,
                        children: [_, Y]
                    }), W && (0, o.jsx)("div", {
                        className: (0, eG.default)(["".concat(z, "-extra"), !_ && "".concat(z, "-extra-no-logo"), O]),
                        children: W
                    }), (0, o.jsx)("div", {
                        style: {
                            flex: 1,
                            overflowY: "auto",
                            overflowX: "hidden"
                        },
                        children: V
                    }), (0, o.jsxs)(rD.Provider, {
                        value: {},
                        children: [M ? (0, o.jsx)("div", {
                            className: "".concat(z, "-links ").concat(O).trim(),
                            children: (0, o.jsx)(rd.Menu, {
                                inlineIndent: 16,
                                className: "".concat(z, "-link-menu ").concat(O).trim(),
                                selectedKeys: [],
                                openKeys: [],
                                theme: g,
                                mode: "inline",
                                items: U
                            })
                        }) : null, L && (0, o.jsxs)(o.Fragment, {
                            children: [q, !K && B ? (0, o.jsx)("div", {
                                className: (0, eG.default)("".concat(z, "-actions"), O, (0, l.default)({}, "".concat(z, "-actions-collapsed"), d)),
                                children: null == B ? void 0 : B(e)
                            }) : null]
                        }), Q && (0, o.jsx)("div", {
                            className: (0, eG.default)(["".concat(z, "-footer"), O, (0, l.default)({}, "".concat(z, "-footer-collapsed"), d)]),
                            children: Q
                        })]
                    })]
                });
            return D.wrapSSR((0, o.jsxs)(o.Fragment, {
                children: [p && !y && !Z && (0, o.jsx)("div", {
                    style: (0, s.default)({
                        width: d ? 64 : v,
                        overflow: "hidden",
                        flex: "0 0 ".concat(d ? 64 : v, "px"),
                        maxWidth: d ? 64 : v,
                        minWidth: d ? 64 : v,
                        transition: "all 0.2s ease 0s"
                    }, S)
                }), (0, o.jsxs)(rL, {
                    collapsible: !0,
                    trigger: null,
                    collapsed: d,
                    breakpoint: !1 === C ? void 0 : C,
                    onCollapse: function(e) {
                        y || null == h || h(e)
                    },
                    collapsedWidth: 64,
                    style: S,
                    theme: g,
                    width: v,
                    className: (0, eG.default)(N, O, Z),
                    children: [Z ? (0, o.jsx)("div", {
                        className: "".concat(z, "-hide-when-collapsed ").concat(O).trim(),
                        style: {
                            height: "100%",
                            width: "100%",
                            opacity: +!Z
                        },
                        children: J
                    }) : J, X]
                })]
            }))
        },
        h = h,
        rW = function(e) {
            var t = (0, i.useRef)(null);
            return t.current = e, (0, i.useCallback)(function() {
                for (var e, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                return null == (e = t.current) ? void 0 : e.call.apply(e, [t].concat((0, f.default)(r)))
            }, [])
        },
        h = h,
        r$ = function(e) {
            var t, n, r, a, o;
            return (0, l.default)({}, e.componentCls, {
                "&-header-actions": {
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    "&-item": {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBlock: 0,
                        paddingInline: 2,
                        color: null == (t = e.layout) || null == (t = t.header) ? void 0 : t.colorTextRightActionsItem,
                        fontSize: "16px",
                        cursor: "pointer",
                        borderRadius: e.borderRadius,
                        "> *": {
                            paddingInline: 6,
                            paddingBlock: 6,
                            borderRadius: e.borderRadius,
                            "&:hover": {
                                backgroundColor: null == (n = e.layout) || null == (n = n.header) ? void 0 : n.colorBgRightActionsItemHover
                            }
                        }
                    },
                    "&-avatar": {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingInlineStart: e.padding,
                        paddingInlineEnd: e.padding,
                        cursor: "pointer",
                        color: null == (r = e.layout) || null == (r = r.header) ? void 0 : r.colorTextRightActionsItem,
                        "> div": {
                            height: "44px",
                            color: null == (a = e.layout) || null == (a = a.header) ? void 0 : a.colorTextRightActionsItem,
                            paddingInline: 8,
                            paddingBlock: 8,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            lineHeight: "44px",
                            borderRadius: e.borderRadius,
                            "&:hover": {
                                backgroundColor: null == (o = e.layout) || null == (o = o.header) ? void 0 : o.colorBgRightActionsItemHover
                            }
                        }
                    }
                }
            })
        },
        rU = ["rightContentRender", "avatarProps", "actionsRender", "headerContentRender"],
        rV = ["title", "render"],
        rG = function(e) {
            var t, n, r, a, u, d = e.rightContentRender,
                f = e.avatarProps,
                m = e.actionsRender,
                g = (e.headerContentRender, (0, c.default)(e, rU)),
                v = (0, i.useContext)(h.default.ConfigContext).getPrefixCls,
                y = "".concat(v(), "-pro-global-header"),
                b = eI("ProLayoutRightContent", function(e) {
                    return [r$((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(y)
                    }))]
                }),
                x = b.wrapSSR,
                C = b.hashId,
                S = (0, i.useState)("auto"),
                k = (0, p.default)(S, 2),
                T = k[0],
                w = k[1],
                M = (0, i.useMemo)(function() {
                    if (!f) return null;
                    var e = f.title,
                        t = f.render,
                        n = (0, c.default)(f, rV),
                        r = [null != n && n.src || null != n && n.srcSet || n.icon || n.children ? (0, i.createElement)(e6.Avatar, (0, s.default)((0, s.default)({}, n), {}, {
                            size: 28,
                            key: "avatar"
                        })) : null, e ? (0, o.jsx)("span", {
                            style: {
                                marginInlineStart: 8
                            },
                            children: e
                        }, "name") : void 0];
                    return t ? t(f, (0, o.jsx)("div", {
                        children: r
                    }), g) : (0, o.jsx)("div", {
                        children: r
                    })
                }, [f]),
                P = m || M ? function(e) {
                    var t = m && (null == m ? void 0 : m(e));
                    return t || M ? Array.isArray(t) ? x((0, o.jsxs)("div", {
                        className: "".concat(y, "-header-actions ").concat(C).trim(),
                        children: [t.filter(Boolean).map(function(e, t) {
                            var n, r = !1;
                            return i.default.isValidElement(e) && (r = !!(null != e && null != (n = e.props) && n["aria-hidden"])), (0, o.jsx)("div", {
                                className: (0, eG.default)("".concat(y, "-header-actions-item ").concat(C), (0, l.default)({}, "".concat(y, "-header-actions-hover"), !r)),
                                children: e
                            }, t)
                        }), M && (0, o.jsx)("span", {
                            className: "".concat(y, "-header-actions-avatar ").concat(C).trim(),
                            children: M
                        })]
                    })) : x((0, o.jsxs)("div", {
                        className: "".concat(y, "-header-actions ").concat(C).trim(),
                        children: [t, M && (0, o.jsx)("span", {
                            className: "".concat(y, "-header-actions-avatar ").concat(C).trim(),
                            children: M
                        })]
                    })) : null
                } : void 0,
                j = (t = na(nn().mark(function e(t) {
                    return nn().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                w(t);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), n = rW(function(e) {
                    return t.apply(this, arguments)
                }), r = (0, i.useRef)(), a = (0, i.useCallback)(function() {
                    r.current && (clearTimeout(r.current), r.current = null)
                }, []), u = (0, i.useCallback)(na(nn().mark(function e() {
                    var t, o, i, l = arguments;
                    return nn().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                for (o = Array(t = l.length), i = 0; i < t; i++) o[i] = l[i];
                                !0;
                                e.next = 3;
                                break;
                            case 3:
                                return a(), e.abrupt("return", new Promise(function(e) {
                                    r.current = setTimeout(na(nn().mark(function t() {
                                        return nn().wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = e, t.next = 3, n.apply(void 0, o);
                                                case 3:
                                                    return t.t1 = t.sent, (0, t.t0)(t.t1), t.abrupt("return");
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }, t)
                                    })), 160)
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), [n, a, 160]), (0, i.useEffect)(function() {
                    return a
                }, [a]), {
                    run: u,
                    cancel: a
                }),
                F = P || d;
            return (0, o.jsx)("div", {
                className: "".concat(y, "-right-content ").concat(C).trim(),
                style: {
                    minWidth: T,
                    height: "100%"
                },
                children: (0, o.jsx)("div", {
                    style: {
                        height: "100%"
                    },
                    children: (0, o.jsx)(tP, {
                        onResize: function(e) {
                            var t = e.width;
                            j.run(t)
                        },
                        children: F ? (0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                                justifyContent: "flex-end"
                            },
                            children: F((0, s.default)((0, s.default)({}, g), {}, {
                                rightContentSize: T
                            }))
                        }) : null
                    })
                })
            })
        },
        rK = function(e) {
            var t, n;
            return (0, l.default)({}, e.componentCls, {
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                ".anticon": {
                    color: "inherit"
                },
                "&-main": {
                    display: "flex",
                    height: "100%",
                    paddingInlineStart: "16px",
                    "&-left": (0, l.default)({
                        display: "flex",
                        alignItems: "center"
                    }, "".concat(e.proComponentsCls, "-layout-apps-icon"), {
                        marginInlineEnd: 16,
                        marginInlineStart: -8
                    })
                },
                "&-wide": {
                    maxWidth: 1152,
                    margin: "0 auto"
                },
                "&-logo": {
                    position: "relative",
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    overflow: "hidden",
                    "> *:first-child": {
                        display: "flex",
                        alignItems: "center",
                        minHeight: "22px",
                        fontSize: "22px"
                    },
                    "> *:first-child > img": {
                        display: "inline-block",
                        height: "32px",
                        verticalAlign: "middle"
                    },
                    "> *:first-child > h1": {
                        display: "inline-block",
                        marginBlock: 0,
                        marginInline: 0,
                        lineHeight: "24px",
                        marginInlineStart: 6,
                        fontWeight: "600",
                        fontSize: "16px",
                        color: null == (t = e.layout) || null == (t = t.header) ? void 0 : t.colorHeaderTitle,
                        verticalAlign: "top"
                    }
                },
                "&-menu": {
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    paddingInline: 6,
                    paddingBlock: 6,
                    lineHeight: "".concat(Math.max(((null == (n = e.layout) || null == (n = n.header) ? void 0 : n.heightLayoutHeader) || 56) - 12, 40), "px")
                }
            })
        },
        rY = function(e) {
            var t, n, r, a, c, u, d, f = (0, i.useRef)(null),
                p = e.onMenuHeaderClick,
                m = e.contentWidth,
                g = e.rightContentRender,
                v = e.className,
                y = e.style,
                b = e.headerContentRender,
                x = e.layout,
                C = e.actionsRender,
                S = (0, i.useContext)(h.default.ConfigContext).getPrefixCls,
                k = (0, i.useContext)(e_).dark,
                T = "".concat(e.prefixCls || S("pro"), "-top-nav-header"),
                w = eI("ProLayoutTopNavHeader", function(e) {
                    return [rK((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(T)
                    }))]
                }),
                M = w.wrapSSR,
                P = w.hashId,
                j = void 0;
            void 0 !== e.menuHeaderRender ? j = "menuHeaderRender" : ("mix" === x || "top" === x) && (j = "headerTitleRender");
            var F = rN((0, s.default)((0, s.default)({}, e), {}, {
                    collapsed: !1
                }), j),
                I = (0, i.useContext)(e_).token,
                B = (0, i.useMemo)(function() {
                    var t, n, r, a, i, l, c, u, d, f, p, m, g, v = (0, o.jsx)(h.default, {
                        theme: {
                            hashed: eO(),
                            components: {
                                Layout: {
                                    headerBg: "transparent",
                                    bodyBg: "transparent"
                                },
                                Menu: (0, s.default)({}, nc({
                                    colorItemBg: (null == (t = I.layout) || null == (t = t.header) ? void 0 : t.colorBgHeader) || "transparent",
                                    colorSubItemBg: (null == (n = I.layout) || null == (n = n.header) ? void 0 : n.colorBgHeader) || "transparent",
                                    radiusItem: I.borderRadius,
                                    colorItemBgSelected: (null == (r = I.layout) || null == (r = r.header) ? void 0 : r.colorBgMenuItemSelected) || (null == I ? void 0 : I.colorBgTextHover),
                                    itemHoverBg: (null == (a = I.layout) || null == (a = a.header) ? void 0 : a.colorBgMenuItemHover) || (null == I ? void 0 : I.colorBgTextHover),
                                    colorItemBgSelectedHorizontal: (null == (i = I.layout) || null == (i = i.header) ? void 0 : i.colorBgMenuItemSelected) || (null == I ? void 0 : I.colorBgTextHover),
                                    colorActiveBarWidth: 0,
                                    colorActiveBarHeight: 0,
                                    colorActiveBarBorderSize: 0,
                                    colorItemText: (null == (l = I.layout) || null == (l = l.header) ? void 0 : l.colorTextMenu) || (null == I ? void 0 : I.colorTextSecondary),
                                    colorItemTextHoverHorizontal: (null == (c = I.layout) || null == (c = c.header) ? void 0 : c.colorTextMenuActive) || (null == I ? void 0 : I.colorText),
                                    colorItemTextSelectedHorizontal: (null == (u = I.layout) || null == (u = u.header) ? void 0 : u.colorTextMenuSelected) || (null == I ? void 0 : I.colorTextBase),
                                    horizontalItemBorderRadius: 4,
                                    colorItemTextHover: (null == (d = I.layout) || null == (d = d.header) ? void 0 : d.colorTextMenuActive) || "rgba(0, 0, 0, 0.85)",
                                    horizontalItemHoverBg: (null == (f = I.layout) || null == (f = f.header) ? void 0 : f.colorBgMenuItemHover) || "rgba(0, 0, 0, 0.04)",
                                    colorItemTextSelected: (null == (p = I.layout) || null == (p = p.header) ? void 0 : p.colorTextMenuSelected) || "rgba(0, 0, 0, 1)",
                                    popupBg: null == I ? void 0 : I.colorBgElevated,
                                    subMenuItemBg: null == I ? void 0 : I.colorBgElevated,
                                    darkSubMenuItemBg: "transparent",
                                    darkPopupBg: null == I ? void 0 : I.colorBgElevated
                                }))
                            },
                            token: {
                                colorBgElevated: (null == (m = I.layout) || null == (m = m.header) ? void 0 : m.colorBgHeader) || "transparent"
                            }
                        },
                        children: (0, o.jsx)(rA, (0, s.default)((0, s.default)((0, s.default)({
                            theme: k ? "dark" : "light"
                        }, e), {}, {
                            className: "".concat(T, "-base-menu ").concat(P).trim()
                        }, e.menuProps), {}, {
                            style: (0, s.default)({
                                width: "100%"
                            }, null == (g = e.menuProps) ? void 0 : g.style),
                            collapsed: !1,
                            menuRenderType: "header",
                            mode: "horizontal"
                        }))
                    });
                    return b ? b(e, v) : v
                }, [null == (t = I.layout) || null == (t = t.header) ? void 0 : t.colorBgHeader, null == (n = I.layout) || null == (n = n.header) ? void 0 : n.colorBgMenuItemSelected, null == (r = I.layout) || null == (r = r.header) ? void 0 : r.colorBgMenuItemHover, null == (a = I.layout) || null == (a = a.header) ? void 0 : a.colorTextMenu, null == (c = I.layout) || null == (c = c.header) ? void 0 : c.colorTextMenuActive, null == (u = I.layout) || null == (u = u.header) ? void 0 : u.colorTextMenuSelected, null == (d = I.layout) || null == (d = d.header) ? void 0 : d.colorBgMenuElevated, I.borderRadius, null == I ? void 0 : I.colorBgTextHover, null == I ? void 0 : I.colorTextSecondary, null == I ? void 0 : I.colorText, null == I ? void 0 : I.colorTextBase, I.colorBgElevated, k, e, T, P, b]);
            return M((0, o.jsx)("div", {
                className: (0, eG.default)(T, P, v, (0, l.default)({}, "".concat(T, "-light"), !0)),
                style: y,
                children: (0, o.jsxs)("div", {
                    ref: f,
                    className: (0, eG.default)("".concat(T, "-main"), P, (0, l.default)({}, "".concat(T, "-wide"), "Fixed" === m && "top" === x)),
                    children: [F && (0, o.jsxs)("div", {
                        className: (0, eG.default)("".concat(T, "-main-left ").concat(P)),
                        onClick: p,
                        children: [(0, o.jsx)(ru, (0, s.default)({}, e)), (0, o.jsx)("div", {
                            className: "".concat(T, "-logo ").concat(P).trim(),
                            id: "logo",
                            children: F
                        }, "logo")]
                    }), (0, o.jsx)("div", {
                        style: {
                            flex: 1
                        },
                        className: "".concat(T, "-menu ").concat(P).trim(),
                        children: B
                    }), (g || C || e.avatarProps) && (0, o.jsx)(rG, (0, s.default)((0, s.default)({
                        rightContentRender: g
                    }, e), {}, {
                        prefixCls: T
                    }))]
                })
            }))
        },
        rX = function(e) {
            var t, n, r;
            return (0, l.default)({}, e.componentCls, (0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                position: "relative",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                marginBlock: 0,
                marginInline: 16,
                height: (null == (t = e.layout) || null == (t = t.header) ? void 0 : t.heightLayoutHeader) || 56,
                boxSizing: "border-box",
                "> a": {
                    height: "100%"
                }
            }, "".concat(e.proComponentsCls, "-layout-apps-icon"), {
                marginInlineEnd: 16
            }), "&-collapsed-button", {
                minHeight: "22px",
                color: null == (n = e.layout) || null == (n = n.header) ? void 0 : n.colorHeaderTitle,
                fontSize: "18px",
                marginInlineEnd: "16px"
            }), "&-logo", {
                position: "relative",
                marginInlineEnd: "16px",
                a: {
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    minHeight: "22px",
                    fontSize: "20px"
                },
                img: {
                    height: "28px"
                },
                h1: {
                    height: "32px",
                    marginBlock: 0,
                    marginInline: 0,
                    marginInlineStart: 8,
                    fontWeight: "600",
                    color: (null == (r = e.layout) || null == (r = r.header) ? void 0 : r.colorHeaderTitle) || e.colorTextHeading,
                    fontSize: "18px",
                    lineHeight: "32px"
                },
                "&-mix": {
                    display: "flex",
                    alignItems: "center"
                }
            }), "&-logo-mobile", {
                minWidth: "24px",
                marginInlineEnd: 0
            }))
        },
        rq = function(e) {
            var t = e.isMobile,
                n = e.logo,
                r = e.collapsed,
                a = e.onCollapse,
                c = e.rightContentRender,
                u = e.menuHeaderRender,
                d = e.onMenuHeaderClick,
                f = e.className,
                p = e.style,
                m = e.layout,
                g = e.children,
                v = e.splitMenus,
                y = e.menuData,
                b = e.prefixCls,
                x = (0, i.useContext)(h.default.ConfigContext),
                C = x.getPrefixCls,
                S = x.direction,
                k = "".concat(b || C("pro"), "-global-header"),
                T = eI("ProLayoutGlobalHeader", function(e) {
                    return [rX((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(k)
                    }))]
                }),
                w = T.wrapSSR,
                M = T.hashId,
                P = (0, eG.default)(f, k, M);
            if ("mix" === m && !t && v) {
                var j = n7((y || []).map(function(e) {
                    return (0, s.default)((0, s.default)({}, e), {}, {
                        children: void 0,
                        routes: void 0
                    })
                }));
                return (0, o.jsx)(rY, (0, s.default)((0, s.default)({
                    mode: "horizontal"
                }, e), {}, {
                    splitMenus: !1,
                    menuData: j
                }))
            }
            var F = (0, eG.default)("".concat(k, "-logo"), M, (0, l.default)((0, l.default)((0, l.default)({}, "".concat(k, "-logo-rtl"), "rtl" === S), "".concat(k, "-logo-mix"), "mix" === m), "".concat(k, "-logo-mobile"), t)),
                I = (0, o.jsx)("span", {
                    className: F,
                    children: (0, o.jsx)("a", {
                        children: rs(n)
                    })
                }, "logo");
            return w((0, o.jsxs)("div", {
                className: P,
                style: (0, s.default)({}, p),
                children: [t && (0, o.jsx)("span", {
                    className: "".concat(k, "-collapsed-button ").concat(M).trim(),
                    onClick: function() {
                        null == a || a(!r)
                    },
                    children: (0, o.jsx)(rt, {})
                }), t && (!1 === u ? null : u ? u(I, null) : I), "mix" === m && !t && (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(ru, (0, s.default)({}, e)), (0, o.jsx)("div", {
                        className: F,
                        onClick: d,
                        children: rN((0, s.default)((0, s.default)({}, e), {}, {
                            collapsed: !1
                        }), "headerTitleRender")
                    })]
                }), (0, o.jsx)("div", {
                    style: {
                        flex: 1
                    },
                    children: g
                }), (c || e.actionsRender || e.avatarProps) && (0, o.jsx)(rG, (0, s.default)({
                    rightContentRender: c
                }, e))]
            }))
        },
        rZ = function(e) {
            var t, n, r, a;
            return (0, l.default)({}, "".concat(e.proComponentsCls, "-layout"), (0, l.default)({}, "".concat(e.antCls, "-layout-header").concat(e.componentCls), {
                height: (null == (t = e.layout) || null == (t = t.header) ? void 0 : t.heightLayoutHeader) || 56,
                lineHeight: "".concat((null == (n = e.layout) || null == (n = n.header) ? void 0 : n.heightLayoutHeader) || 56, "px"),
                zIndex: 19,
                width: "100%",
                paddingBlock: 0,
                paddingInline: 0,
                borderBlockEnd: "1px solid ".concat(e.colorSplit),
                backgroundColor: (null == (r = e.layout) || null == (r = r.header) ? void 0 : r.colorBgHeader) || "rgba(255, 255, 255, 0.4)",
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
                transition: "background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
                "&-fixed-header": {
                    position: "fixed",
                    insetBlockStart: 0,
                    width: "100%",
                    zIndex: 100,
                    insetInlineEnd: 0
                },
                "&-fixed-header-scroll": {
                    backgroundColor: (null == (a = e.layout) || null == (a = a.header) ? void 0 : a.colorBgScrollHeader) || "rgba(255, 255, 255, 0.8)"
                },
                "&-header-actions": {
                    display: "flex",
                    alignItems: "center",
                    fontSize: "16",
                    cursor: "pointer",
                    "& &-item": {
                        paddingBlock: 0,
                        paddingInline: 8,
                        "&:hover": {
                            color: e.colorText
                        }
                    }
                },
                "&-header-realDark": {
                    boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 65%)"
                },
                "&-header-actions-header-action": {
                    transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
                }
            }))
        },
        rQ = nq.default.Header,
        rJ = function(e) {
            var t, n, r, a, c, u, d, f = e.isMobile,
                m = e.fixedHeader,
                g = e.className,
                v = e.style,
                y = e.collapsed,
                b = e.prefixCls,
                x = e.onCollapse,
                C = e.layout,
                S = e.headerRender,
                k = e.headerContentRender,
                T = (0, i.useContext)(e_).token,
                w = (0, i.useContext)(h.default.ConfigContext),
                M = (0, i.useState)(!1),
                P = (0, p.default)(M, 2),
                j = P[0],
                F = P[1],
                I = m || "mix" === C,
                B = (0, i.useCallback)(function() {
                    var t = "top" === C,
                        n = n7(e.menuData || []),
                        r = (0, o.jsx)(rq, (0, s.default)((0, s.default)({
                            onCollapse: x
                        }, e), {}, {
                            menuData: n,
                            children: k && k(e, null)
                        }));
                    return (t && !f && (r = (0, o.jsx)(rY, (0, s.default)((0, s.default)({
                        mode: "horizontal",
                        onCollapse: x
                    }, e), {}, {
                        menuData: n
                    }))), S && "function" == typeof S) ? S(e, r) : r
                }, [k, S, f, C, x, e]);
            (0, i.useEffect)(function() {
                var e, t = (null == w || null == (e = w.getTargetContainer) ? void 0 : e.call(w)) || document.body,
                    n = function() {
                        var e;
                        return t.scrollTop > ((null == (e = T.layout) || null == (e = e.header) ? void 0 : e.heightLayoutHeader) || 56) && !j ? (F(!0), !0) : (j && F(!1), !1)
                    };
                if (I) return t.addEventListener("scroll", n, {
                        passive: !0
                    }),
                    function() {
                        t.removeEventListener("scroll", n)
                    }
            }, [null == (c = T.layout) || null == (c = c.header) ? void 0 : c.heightLayoutHeader, I, j]);
            var R = "".concat(b, "-layout-header"),
                E = eI("ProLayoutHeader", function(e) {
                    return [rZ((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(R)
                    }))]
                }),
                A = E.wrapSSR,
                H = E.hashId,
                O = (t = "".concat(R, ".").concat(R, "-stylish"), r = (n = {
                    proLayoutCollapsedWidth: 64,
                    stylish: e.stylish
                }).stylish, a = n.proLayoutCollapsedWidth, eI("ProLayoutHeaderStylish", function(e) {
                    var n = (0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(t),
                        proLayoutCollapsedWidth: a
                    });
                    return r ? [(0, l.default)({}, "div".concat(e.proComponentsCls, "-layout"), (0, l.default)({}, "".concat(n.componentCls), null == r ? void 0 : r(n)))] : []
                })),
                L = (0, eG.default)(g, H, R, (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({}, "".concat(R, "-fixed-header"), I), "".concat(R, "-fixed-header-scroll"), j), "".concat(R, "-mix"), "mix" === C), "".concat(R, "-fixed-header-action"), !y), "".concat(R, "-top-menu"), "top" === C), "".concat(R, "-header"), !0), "".concat(R, "-stylish"), !!e.stylish));
            return "side" !== C || f ? O.wrapSSR(A((0, o.jsx)(o.Fragment, {
                children: (0, o.jsxs)(h.default, {
                    theme: {
                        hashed: eO(),
                        components: {
                            Layout: {
                                headerBg: "transparent",
                                bodyBg: "transparent"
                            }
                        }
                    },
                    children: [I && (0, o.jsx)(rQ, {
                        style: (0, s.default)({
                            height: (null == (u = T.layout) || null == (u = u.header) ? void 0 : u.heightLayoutHeader) || 56,
                            lineHeight: "".concat((null == (d = T.layout) || null == (d = d.header) ? void 0 : d.heightLayoutHeader) || 56, "px"),
                            backgroundColor: "transparent",
                            zIndex: 19
                        }, v)
                    }), (0, o.jsx)(rQ, {
                        className: L,
                        style: v,
                        children: B()
                    })]
                })
            }))) : null
        },
        h = h,
        r0 = e.i(638145),
        r0 = r0,
        r1 = e.i(717813),
        r1 = r1,
        r2 = new r1.default("antBadgeLoadingCircle", {
            "0%": {
                display: "none",
                opacity: 0,
                overflow: "hidden"
            },
            "80%": {
                overflow: "hidden"
            },
            "100%": {
                display: "unset",
                opacity: 1
            }
        }),
        r6 = function(e) {
            var t, n, r, a, o, i, c, s, u, d, f, p;
            return (0, l.default)({}, "".concat(e.proComponentsCls, "-layout"), (0, l.default)((0, l.default)((0, l.default)({}, "".concat(e.antCls, "-layout-sider").concat(e.componentCls), {
                background: (null == (t = e.layout) || null == (t = t.sider) ? void 0 : t.colorMenuBackground) || "transparent"
            }), e.componentCls, (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                position: "relative",
                boxSizing: "border-box",
                "&-menu": {
                    position: "relative",
                    zIndex: 10,
                    minHeight: "100%"
                }
            }, "& ".concat(e.antCls, "-layout-sider-children"), {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                paddingInline: null == (n = e.layout) || null == (n = n.sider) ? void 0 : n.paddingInlineLayoutMenu,
                paddingBlock: null == (r = e.layout) || null == (r = r.sider) ? void 0 : r.paddingBlockLayoutMenu,
                borderInlineEnd: "1px solid ".concat(e.colorSplit),
                marginInlineEnd: -1
            }), "".concat(e.antCls, "-menu"), (0, l.default)((0, l.default)({}, "".concat(e.antCls, "-menu-item-group-title"), {
                fontSize: e.fontSizeSM,
                paddingBottom: 4
            }), "".concat(e.antCls, "-menu-item:not(").concat(e.antCls, "-menu-item-selected):hover"), {
                color: null == (a = e.layout) || null == (a = a.sider) ? void 0 : a.colorTextMenuItemHover
            })), "&-logo", {
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingInline: 12,
                paddingBlock: 16,
                color: null == (o = e.layout) || null == (o = o.sider) ? void 0 : o.colorTextMenu,
                cursor: "pointer",
                borderBlockEnd: "1px solid ".concat(null == (i = e.layout) || null == (i = i.sider) ? void 0 : i.colorMenuItemDivider),
                "> a": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 22,
                    fontSize: 22,
                    "> img": {
                        display: "inline-block",
                        height: 22,
                        verticalAlign: "middle"
                    },
                    "> h1": {
                        display: "inline-block",
                        height: 22,
                        marginBlock: 0,
                        marginInlineEnd: 0,
                        marginInlineStart: 6,
                        color: null == (c = e.layout) || null == (c = c.sider) ? void 0 : c.colorTextMenuTitle,
                        animationName: r2,
                        animationDuration: ".4s",
                        animationTimingFunction: "ease",
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: "22px",
                        verticalAlign: "middle"
                    }
                },
                "&-collapsed": (0, l.default)({
                    flexDirection: "column-reverse",
                    margin: 0,
                    padding: 12
                }, "".concat(e.proComponentsCls, "-layout-apps-icon"), {
                    marginBlockEnd: 8,
                    fontSize: 16,
                    transition: "font-size 0.2s ease-in-out,color 0.2s ease-in-out"
                })
            }), "&-actions", {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBlock: 4,
                marginInline: 0,
                color: null == (s = e.layout) || null == (s = s.sider) ? void 0 : s.colorTextMenu,
                "&-collapsed": {
                    flexDirection: "column-reverse",
                    paddingBlock: 0,
                    paddingInline: 8,
                    fontSize: 16,
                    transition: "font-size 0.3s ease-in-out"
                },
                "&-list": {
                    color: null == (u = e.layout) || null == (u = u.sider) ? void 0 : u.colorTextMenuSecondary,
                    "&-collapsed": {
                        marginBlockEnd: 8,
                        animationName: "none"
                    },
                    "&-item": {
                        paddingInline: 6,
                        paddingBlock: 6,
                        lineHeight: "16px",
                        fontSize: 16,
                        cursor: "pointer",
                        borderRadius: e.borderRadius,
                        "&:hover": {
                            background: e.colorBgTextHover
                        }
                    }
                },
                "&-avatar": {
                    fontSize: 14,
                    paddingInline: 8,
                    paddingBlock: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: e.marginXS,
                    borderRadius: e.borderRadius,
                    "& *": {
                        cursor: "pointer"
                    },
                    "&:hover": {
                        background: e.colorBgTextHover
                    }
                }
            }), "&-hide-menu-collapsed", {
                insetInlineStart: "-".concat(e.proLayoutCollapsedWidth - 12, "px"),
                position: "absolute"
            }), "&-extra", {
                marginBlockEnd: 16,
                marginBlock: 0,
                marginInline: 16,
                "&-no-logo": {
                    marginBlockStart: 16
                }
            }), "&-links", {
                width: "100%",
                ul: {
                    height: "auto"
                }
            }), "&-link-menu", {
                border: "none",
                boxShadow: "none",
                background: "transparent"
            }), "&-footer", {
                color: null == (d = e.layout) || null == (d = d.sider) ? void 0 : d.colorTextMenuSecondary,
                paddingBlockEnd: 16,
                fontSize: e.fontSize,
                animationName: r2,
                animationDuration: ".4s",
                animationTimingFunction: "ease"
            })), "".concat(e.componentCls).concat(e.componentCls, "-fixed"), {
                position: "fixed",
                insetBlockStart: 0,
                insetInlineStart: 0,
                zIndex: "100",
                height: "100%",
                "&-mix": {
                    height: "calc(100% - ".concat((null == (f = e.layout) || null == (f = f.header) ? void 0 : f.heightLayoutHeader) || 56, "px)"),
                    insetBlockStart: "".concat((null == (p = e.layout) || null == (p = p.header) ? void 0 : p.heightLayoutHeader) || 56, "px")
                }
            }))
        },
        r5 = function(e) {
            var t, n, r = e.isMobile,
                a = e.siderWidth,
                l = e.collapsed,
                c = e.onCollapse,
                u = e.style,
                d = e.className,
                f = e.hide,
                p = e.prefixCls,
                m = e.getContainer,
                g = (0, i.useContext)(e_).token;
            (0, i.useEffect)(function() {
                !0 === r && (null == c || c(!0))
            }, [r]);
            var v = eq(e, ["className", "style"]),
                y = i.default.useContext(h.default.ConfigContext).direction,
                b = (t = "".concat(p, "-sider"), eI("ProLayoutSiderMenu", function(e) {
                    return [r6((0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(t),
                        proLayoutCollapsedWidth: 64
                    }))]
                })),
                x = b.wrapSSR,
                C = b.hashId,
                S = (0, eG.default)("".concat(p, "-sider"), d, C);
            if (f) return null;
            var k = nl(!l, function() {
                return null == c ? void 0 : c(!0)
            });
            return x(r ? (0, o.jsx)(r0.default, (0, s.default)((0, s.default)({
                placement: "rtl" === y ? "right" : "left",
                className: (0, eG.default)("".concat(p, "-drawer-sider"), d)
            }, k), {}, {
                style: (0, s.default)({
                    padding: 0,
                    height: "100vh"
                }, u),
                onClose: function() {
                    null == c || c(!0)
                },
                maskClosable: !0,
                closable: !1,
                getContainer: m || !1,
                width: a,
                styles: {
                    body: {
                        height: "100vh",
                        padding: 0,
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: null == (n = g.layout) || null == (n = n.sider) ? void 0 : n.colorMenuBackground
                    }
                },
                children: (0, o.jsx)(r_, (0, s.default)((0, s.default)({}, v), {}, {
                    isMobile: !0,
                    className: S,
                    collapsed: !r && l,
                    splitMenus: !1,
                    originCollapsed: l
                }))
            })) : (0, o.jsx)(r_, (0, s.default)((0, s.default)({
                className: S,
                originCollapsed: l
            }, v), {}, {
                style: u
            })))
        },
        r4 = e.i(346383),
        r8 = function(e, t, n) {
            if (n) {
                var r = (0, f.default)(n.keys()).find(function(t) {
                    try {
                        if (t.startsWith("http")) return !1;
                        return (0, r4.match)(t)(e)
                    } catch (e) {
                        return console.log("key", t, e), !1
                    }
                });
                if (r) return n.get(r)
            }
            if (t) {
                var a = Object.keys(t).find(function(t) {
                    try {
                        if (null != t && t.startsWith("http")) return !1;
                        return (0, r4.match)(t)(e)
                    } catch (e) {
                        return console.log("key", t, e), !1
                    }
                });
                if (a) return t[a]
            }
            return {
                path: ""
            }
        },
        r3 = function(e, t) {
            var n = e.pathname,
                r = e.breadcrumb,
                a = e.breadcrumbMap,
                o = e.formatMessage,
                i = e.title,
                l = e.menu,
                c = t ? "" : i || "",
                s = r8(void 0 === n ? "/" : n, r, a);
            if (!s) return {
                title: c,
                id: "",
                pageName: c
            };
            var u = s.name;
            return (!1 !== (void 0 === l ? {
                locale: !1
            } : l).locale && s.locale && o && (u = o({
                id: s.locale || "",
                defaultMessage: s.name
            })), u) ? t || !i ? {
                title: u,
                id: s.locale || "",
                pageName: u
            } : {
                title: "".concat(u, " - ").concat(i),
                id: s.locale || "",
                pageName: u
            } : {
                title: c,
                id: s.locale || "",
                pageName: c
            }
        };
    let r9 = (0, s.default)({}, {
            "app.setting.pagestyle": "Page style setting",
            "app.setting.pagestyle.dark": "Dark Menu style",
            "app.setting.pagestyle.light": "Light Menu style",
            "app.setting.pagestyle.realdark": "Dark style (Beta)",
            "app.setting.content-width": "Content Width",
            "app.setting.content-width.fixed": "Fixed",
            "app.setting.content-width.fluid": "Fluid",
            "app.setting.themecolor": "Theme Color",
            "app.setting.themecolor.dust": "Dust Red",
            "app.setting.themecolor.volcano": "Volcano",
            "app.setting.themecolor.sunset": "Sunset Orange",
            "app.setting.themecolor.cyan": "Cyan",
            "app.setting.themecolor.green": "Polar Green",
            "app.setting.themecolor.techBlue": "Tech Blue (default)",
            "app.setting.themecolor.daybreak": "Daybreak Blue",
            "app.setting.themecolor.geekblue": "Geek Blue",
            "app.setting.themecolor.purple": "Golden Purple",
            "app.setting.sidermenutype": "SideMenu Type",
            "app.setting.sidermenutype-sub": "Classic",
            "app.setting.sidermenutype-group": "Grouping",
            "app.setting.navigationmode": "Navigation Mode",
            "app.setting.regionalsettings": "Regional Settings",
            "app.setting.regionalsettings.header": "Header",
            "app.setting.regionalsettings.menu": "Menu",
            "app.setting.regionalsettings.footer": "Footer",
            "app.setting.regionalsettings.menuHeader": "Menu Header",
            "app.setting.sidemenu": "Side Menu Layout",
            "app.setting.topmenu": "Top Menu Layout",
            "app.setting.mixmenu": "Mix Menu Layout",
            "app.setting.splitMenus": "Split Menus",
            "app.setting.fixedheader": "Fixed Header",
            "app.setting.fixedsidebar": "Fixed Sidebar",
            "app.setting.fixedsidebar.hint": "Works on Side Menu Layout",
            "app.setting.hideheader": "Hidden Header when scrolling",
            "app.setting.hideheader.hint": "Works when Hidden Header is enabled",
            "app.setting.othersettings": "Other Settings",
            "app.setting.weakmode": "Weak Mode",
            "app.setting.copy": "Copy Setting",
            "app.setting.loading": "Loading theme",
            "app.setting.copyinfo": "copy success，please replace defaultSettings in src/models/setting.js",
            "app.setting.production.hint": "Setting panel shows in development environment only, please manually modify"
        }),
        r7 = (0, s.default)({}, {
            "app.setting.pagestyle": "Impostazioni di stile",
            "app.setting.pagestyle.dark": "Tema scuro",
            "app.setting.pagestyle.light": "Tema chiaro",
            "app.setting.content-width": "Largezza contenuto",
            "app.setting.content-width.fixed": "Fissa",
            "app.setting.content-width.fluid": "Fluida",
            "app.setting.themecolor": "Colore del tema",
            "app.setting.themecolor.dust": "Rosso polvere",
            "app.setting.themecolor.volcano": "Vulcano",
            "app.setting.themecolor.sunset": "Arancione tramonto",
            "app.setting.themecolor.cyan": "Ciano",
            "app.setting.themecolor.green": "Verde polare",
            "app.setting.themecolor.techBlue": "Tech Blu (default)",
            "app.setting.themecolor.daybreak": "Blu cielo mattutino",
            "app.setting.themecolor.geekblue": "Blu geek",
            "app.setting.themecolor.purple": "Viola dorato",
            "app.setting.navigationmode": "Modalità di navigazione",
            "app.setting.sidemenu": "Menu laterale",
            "app.setting.topmenu": "Menu in testata",
            "app.setting.mixmenu": "Menu misto",
            "app.setting.splitMenus": "Menu divisi",
            "app.setting.fixedheader": "Testata fissa",
            "app.setting.fixedsidebar": "Menu laterale fisso",
            "app.setting.fixedsidebar.hint": "Solo se selezionato Menu laterale",
            "app.setting.hideheader": "Nascondi testata durante lo scorrimento",
            "app.setting.hideheader.hint": "Solo se abilitato Nascondi testata durante lo scorrimento",
            "app.setting.othersettings": "Altre impostazioni",
            "app.setting.weakmode": "Inverti colori",
            "app.setting.copy": "Copia impostazioni",
            "app.setting.loading": "Carico tema...",
            "app.setting.copyinfo": "Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js",
            "app.setting.production.hint": "Questo pannello è visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente"
        }),
        ae = (0, s.default)({}, {
            "app.setting.pagestyle": "스타일 설정",
            "app.setting.pagestyle.dark": "다크 모드",
            "app.setting.pagestyle.light": "라이트 모드",
            "app.setting.content-width": "컨텐츠 너비",
            "app.setting.content-width.fixed": "고정",
            "app.setting.content-width.fluid": "흐름",
            "app.setting.themecolor": "테마 색상",
            "app.setting.themecolor.dust": "Dust Red",
            "app.setting.themecolor.volcano": "Volcano",
            "app.setting.themecolor.sunset": "Sunset Orange",
            "app.setting.themecolor.cyan": "Cyan",
            "app.setting.themecolor.green": "Polar Green",
            "app.setting.themecolor.techBlue": "Tech Blu (default)",
            "app.setting.themecolor.daybreak": "Daybreak Blue",
            "app.setting.themecolor.geekblue": "Geek Blue",
            "app.setting.themecolor.purple": "Golden Purple",
            "app.setting.navigationmode": "네비게이션 모드",
            "app.setting.regionalsettings": "영역별 설정",
            "app.setting.regionalsettings.header": "헤더",
            "app.setting.regionalsettings.menu": "메뉴",
            "app.setting.regionalsettings.footer": "바닥글",
            "app.setting.regionalsettings.menuHeader": "메뉴 헤더",
            "app.setting.sidemenu": "메뉴 사이드 배치",
            "app.setting.topmenu": "메뉴 상단 배치",
            "app.setting.mixmenu": "혼합형 배치",
            "app.setting.splitMenus": "메뉴 분리",
            "app.setting.fixedheader": "헤더 고정",
            "app.setting.fixedsidebar": "사이드바 고정",
            "app.setting.fixedsidebar.hint": "'메뉴 사이드 배치'를 선택했을 때 동작함",
            "app.setting.hideheader": "스크롤 중 헤더 감추기",
            "app.setting.hideheader.hint": "'헤더 감추기 옵션'을 선택했을 때 동작함",
            "app.setting.othersettings": "다른 설정",
            "app.setting.weakmode": "고대비 모드",
            "app.setting.copy": "설정값 복사",
            "app.setting.loading": "테마 로딩 중",
            "app.setting.copyinfo": "복사 성공. src/models/settings.js에 있는 defaultSettings를 교체해 주세요.",
            "app.setting.production.hint": "설정 판넬은 개발 환경에서만 보여집니다. 직접 수동으로 변경바랍니다."
        });
    var at = {
            "zh-CN": (0, s.default)({}, {
                "app.setting.pagestyle": "整体风格设置",
                "app.setting.pagestyle.dark": "暗色菜单风格",
                "app.setting.pagestyle.light": "亮色菜单风格",
                "app.setting.pagestyle.realdark": "暗色风格(实验功能)",
                "app.setting.content-width": "内容区域宽度",
                "app.setting.content-width.fixed": "定宽",
                "app.setting.content-width.fluid": "流式",
                "app.setting.themecolor": "主题色",
                "app.setting.themecolor.dust": "薄暮",
                "app.setting.themecolor.volcano": "火山",
                "app.setting.themecolor.sunset": "日暮",
                "app.setting.themecolor.cyan": "明青",
                "app.setting.themecolor.green": "极光绿",
                "app.setting.themecolor.techBlue": "科技蓝（默认）",
                "app.setting.themecolor.daybreak": "拂晓",
                "app.setting.themecolor.geekblue": "极客蓝",
                "app.setting.themecolor.purple": "酱紫",
                "app.setting.navigationmode": "导航模式",
                "app.setting.sidermenutype": "侧边菜单类型",
                "app.setting.sidermenutype-sub": "经典模式",
                "app.setting.sidermenutype-group": "分组模式",
                "app.setting.regionalsettings": "内容区域",
                "app.setting.regionalsettings.header": "顶栏",
                "app.setting.regionalsettings.menu": "菜单",
                "app.setting.regionalsettings.footer": "页脚",
                "app.setting.regionalsettings.menuHeader": "菜单头",
                "app.setting.sidemenu": "侧边菜单布局",
                "app.setting.topmenu": "顶部菜单布局",
                "app.setting.mixmenu": "混合菜单布局",
                "app.setting.splitMenus": "自动分割菜单",
                "app.setting.fixedheader": "固定 Header",
                "app.setting.fixedsidebar": "固定侧边菜单",
                "app.setting.fixedsidebar.hint": "侧边菜单布局时可配置",
                "app.setting.hideheader": "下滑时隐藏 Header",
                "app.setting.hideheader.hint": "固定 Header 时可配置",
                "app.setting.othersettings": "其他设置",
                "app.setting.weakmode": "色弱模式",
                "app.setting.copy": "拷贝设置",
                "app.setting.loading": "正在加载主题",
                "app.setting.copyinfo": "拷贝成功，请到 src/defaultSettings.js 中替换默认配置",
                "app.setting.production.hint": "配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改配置文件"
            }),
            "zh-TW": (0, s.default)({}, {
                "app.setting.pagestyle": "整體風格設置",
                "app.setting.pagestyle.dark": "暗色菜單風格",
                "app.setting.pagestyle.realdark": "暗色風格(实验功能)",
                "app.setting.pagestyle.light": "亮色菜單風格",
                "app.setting.content-width": "內容區域寬度",
                "app.setting.content-width.fixed": "定寬",
                "app.setting.content-width.fluid": "流式",
                "app.setting.themecolor": "主題色",
                "app.setting.themecolor.dust": "薄暮",
                "app.setting.themecolor.volcano": "火山",
                "app.setting.themecolor.sunset": "日暮",
                "app.setting.themecolor.cyan": "明青",
                "app.setting.themecolor.green": "極光綠",
                "app.setting.themecolor.techBlue": "科技蓝（默認）",
                "app.setting.themecolor.daybreak": "拂曉藍",
                "app.setting.themecolor.geekblue": "極客藍",
                "app.setting.themecolor.purple": "醬紫",
                "app.setting.navigationmode": "導航模式",
                "app.setting.sidemenu": "側邊菜單布局",
                "app.setting.topmenu": "頂部菜單布局",
                "app.setting.mixmenu": "混合菜單布局",
                "app.setting.splitMenus": "自动分割菜单",
                "app.setting.fixedheader": "固定 Header",
                "app.setting.fixedsidebar": "固定側邊菜單",
                "app.setting.fixedsidebar.hint": "側邊菜單布局時可配置",
                "app.setting.hideheader": "下滑時隱藏 Header",
                "app.setting.hideheader.hint": "固定 Header 時可配置",
                "app.setting.othersettings": "其他設置",
                "app.setting.weakmode": "色弱模式",
                "app.setting.copy": "拷貝設置",
                "app.setting.loading": "正在加載主題",
                "app.setting.copyinfo": "拷貝成功，請到 src/defaultSettings.js 中替換默認配置",
                "app.setting.production.hint": "配置欄只在開發環境用於預覽，生產環境不會展現，請拷貝後手動修改配置文件"
            }),
            "en-US": r9,
            "it-IT": r7,
            "ko-KR": ae
        },
        eV = eV,
        an = function() {
            var e;
            return void 0 === d.default ? eV.default : (null == (e = d.default) || null == (e = e.env) ? void 0 : e.ANTD_VERSION) || eV.default
        },
        ar = function(e) {
            var t, n, r, a, o, i, c, s, u, d, f, p, m, h, g, v, y, b, x, C, S, k, T, w, M, P, j, F, I, B, R, E;
            return null != (t = an()) && t.startsWith("5") ? {} : (0, l.default)((0, l.default)((0, l.default)({}, e.componentCls, (0, l.default)((0, l.default)({
                width: "100%",
                height: "100%"
            }, "".concat(e.proComponentsCls, "-base-menu"), (S = {
                color: null == (n = e.layout) || null == (n = n.sider) ? void 0 : n.colorTextMenu
            }, (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)(S, "".concat(e.antCls, "-menu-sub"), {
                backgroundColor: "transparent!important",
                color: null == (r = e.layout) || null == (r = r.sider) ? void 0 : r.colorTextMenu
            }), "& ".concat(e.antCls, "-layout"), {
                backgroundColor: "transparent",
                width: "100%"
            }), "".concat(e.antCls, "-menu-submenu-expand-icon, ").concat(e.antCls, "-menu-submenu-arrow"), {
                color: "inherit"
            }), "&".concat(e.antCls, "-menu"), (0, l.default)((0, l.default)({
                color: null == (a = e.layout) || null == (a = a.sider) ? void 0 : a.colorTextMenu
            }, "".concat(e.antCls, "-menu-item"), {
                "*": {
                    transition: "none !important"
                }
            }), "".concat(e.antCls, "-menu-item a"), {
                color: "inherit"
            })), "&".concat(e.antCls, "-menu-inline"), (0, l.default)({}, "".concat(e.antCls, "-menu-selected::after,").concat(e.antCls, "-menu-item-selected::after"), {
                display: "none"
            })), "".concat(e.antCls, "-menu-sub ").concat(e.antCls, "-menu-inline"), {
                backgroundColor: "transparent!important"
            }), "".concat(e.antCls, "-menu-item:active, \n        ").concat(e.antCls, "-menu-submenu-title:active"), {
                backgroundColor: "transparent!important"
            }), "&".concat(e.antCls, "-menu-light"), (0, l.default)({}, "".concat(e.antCls, "-menu-item:hover, \n            ").concat(e.antCls, "-menu-item-active,\n            ").concat(e.antCls, "-menu-submenu-active, \n            ").concat(e.antCls, "-menu-submenu-title:hover"), (0, l.default)({
                color: null == (o = e.layout) || null == (o = o.sider) ? void 0 : o.colorTextMenuActive,
                borderRadius: e.borderRadius
            }, "".concat(e.antCls, "-menu-submenu-arrow"), {
                color: null == (i = e.layout) || null == (i = i.sider) ? void 0 : i.colorTextMenuActive
            }))), "&".concat(e.antCls, "-menu:not(").concat(e.antCls, "-menu-horizontal)"), (0, l.default)((0, l.default)({}, "".concat(e.antCls, "-menu-item-selected"), {
                backgroundColor: null == (c = e.layout) || null == (c = c.sider) ? void 0 : c.colorBgMenuItemSelected,
                borderRadius: e.borderRadius
            }), "".concat(e.antCls, "-menu-item:hover, \n            ").concat(e.antCls, "-menu-item-active,\n            ").concat(e.antCls, "-menu-submenu-title:hover"), (0, l.default)({
                color: null == (s = e.layout) || null == (s = s.sider) ? void 0 : s.colorTextMenuActive,
                borderRadius: e.borderRadius,
                backgroundColor: "".concat(null == (u = e.layout) || null == (u = u.header) ? void 0 : u.colorBgMenuItemHover, " !important")
            }, "".concat(e.antCls, "-menu-submenu-arrow"), {
                color: null == (d = e.layout) || null == (d = d.sider) ? void 0 : d.colorTextMenuActive
            }))), "".concat(e.antCls, "-menu-item-selected"), {
                color: null == (f = e.layout) || null == (f = f.sider) ? void 0 : f.colorTextMenuSelected
            }), (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)(S, "".concat(e.antCls, "-menu-submenu-selected"), {
                color: null == (p = e.layout) || null == (p = p.sider) ? void 0 : p.colorTextMenuSelected
            }), "&".concat(e.antCls, "-menu:not(").concat(e.antCls, "-menu-inline) ").concat(e.antCls, "-menu-submenu-open"), {
                color: null == (m = e.layout) || null == (m = m.sider) ? void 0 : m.colorTextMenuSelected
            }), "&".concat(e.antCls, "-menu-vertical"), (0, l.default)({}, "".concat(e.antCls, "-menu-submenu-selected"), {
                borderRadius: e.borderRadius,
                color: null == (h = e.layout) || null == (h = h.sider) ? void 0 : h.colorTextMenuSelected
            })), "".concat(e.antCls, "-menu-submenu:hover > ").concat(e.antCls, "-menu-submenu-title > ").concat(e.antCls, "-menu-submenu-arrow"), {
                color: null == (g = e.layout) || null == (g = g.sider) ? void 0 : g.colorTextMenuActive
            }), "&".concat(e.antCls, "-menu-horizontal"), (0, l.default)((0, l.default)((0, l.default)((0, l.default)({}, "".concat(e.antCls, "-menu-item:hover,\n          ").concat(e.antCls, "-menu-submenu:hover,\n          ").concat(e.antCls, "-menu-item-active,\n          ").concat(e.antCls, "-menu-submenu-active"), {
                borderRadius: 4,
                transition: "none",
                color: null == (v = e.layout) || null == (v = v.header) ? void 0 : v.colorTextMenuActive,
                backgroundColor: "".concat(null == (y = e.layout) || null == (y = y.header) ? void 0 : y.colorBgMenuItemHover, " !important")
            }), "".concat(e.antCls, "-menu-item-open,\n          ").concat(e.antCls, "-menu-submenu-open,\n          ").concat(e.antCls, "-menu-item-selected,\n          ").concat(e.antCls, "-menu-submenu-selected"), (0, l.default)({
                backgroundColor: null == (b = e.layout) || null == (b = b.header) ? void 0 : b.colorBgMenuItemSelected,
                borderRadius: e.borderRadius,
                transition: "none",
                color: "".concat(null == (x = e.layout) || null == (x = x.header) ? void 0 : x.colorTextMenuSelected, " !important")
            }, "".concat(e.antCls, "-menu-submenu-arrow"), {
                color: "".concat(null == (C = e.layout) || null == (C = C.header) ? void 0 : C.colorTextMenuSelected, " !important")
            })), "> ".concat(e.antCls, "-menu-item, > ").concat(e.antCls, "-menu-submenu"), {
                paddingInline: 16,
                marginInline: 4
            }), "> ".concat(e.antCls, "-menu-item::after, > ").concat(e.antCls, "-menu-submenu::after"), {
                display: "none"
            })))), "".concat(e.proComponentsCls, "-top-nav-header-base-menu"), (0, l.default)((0, l.default)({}, "&".concat(e.antCls, "-menu"), (0, l.default)({
                color: null == (k = e.layout) || null == (k = k.header) ? void 0 : k.colorTextMenu
            }, "".concat(e.antCls, "-menu-item a"), {
                color: "inherit"
            })), "&".concat(e.antCls, "-menu-light"), (0, l.default)((0, l.default)({}, "".concat(e.antCls, "-menu-item:hover, \n            ").concat(e.antCls, "-menu-item-active,\n            ").concat(e.antCls, "-menu-submenu-active, \n            ").concat(e.antCls, "-menu-submenu-title:hover"), (0, l.default)({
                color: null == (T = e.layout) || null == (T = T.header) ? void 0 : T.colorTextMenuActive,
                borderRadius: e.borderRadius,
                transition: "none",
                backgroundColor: null == (w = e.layout) || null == (w = w.header) ? void 0 : w.colorBgMenuItemSelected
            }, "".concat(e.antCls, "-menu-submenu-arrow"), {
                color: null == (M = e.layout) || null == (M = M.header) ? void 0 : M.colorTextMenuActive
            })), "".concat(e.antCls, "-menu-item-selected"), {
                color: null == (P = e.layout) || null == (P = P.header) ? void 0 : P.colorTextMenuSelected,
                borderRadius: e.borderRadius,
                backgroundColor: null == (j = e.layout) || null == (j = j.header) ? void 0 : j.colorBgMenuItemSelected
            })))), "".concat(e.antCls, "-menu-sub").concat(e.antCls, "-menu-inline"), {
                backgroundColor: "transparent!important"
            }), "".concat(e.antCls, "-menu-submenu-popup"), (0, l.default)((0, l.default)((0, l.default)((0, l.default)({
                backgroundColor: "rgba(255, 255, 255, 0.42)",
                "-webkit-backdrop-filter": "blur(8px)",
                backdropFilter: "blur(8px)"
            }, "".concat(e.antCls, "-menu"), (0, l.default)({
                background: "transparent !important",
                backgroundColor: "transparent !important"
            }, "".concat(e.antCls, "-menu-item:active, \n        ").concat(e.antCls, "-menu-submenu-title:active"), {
                backgroundColor: "transparent!important"
            })), "".concat(e.antCls, "-menu-item-selected"), {
                color: null == (F = e.layout) || null == (F = F.sider) ? void 0 : F.colorTextMenuSelected
            }), "".concat(e.antCls, "-menu-submenu-selected"), {
                color: null == (I = e.layout) || null == (I = I.sider) ? void 0 : I.colorTextMenuSelected
            }), "".concat(e.antCls, "-menu:not(").concat(e.antCls, "-menu-horizontal)"), (0, l.default)((0, l.default)({}, "".concat(e.antCls, "-menu-item-selected"), {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                borderRadius: e.borderRadius,
                color: null == (B = e.layout) || null == (B = B.sider) ? void 0 : B.colorTextMenuSelected
            }), "".concat(e.antCls, "-menu-item:hover, \n          ").concat(e.antCls, "-menu-item-active,\n          ").concat(e.antCls, "-menu-submenu-title:hover"), (0, l.default)({
                color: null == (R = e.layout) || null == (R = R.sider) ? void 0 : R.colorTextMenuActive,
                borderRadius: e.borderRadius
            }, "".concat(e.antCls, "-menu-submenu-arrow"), {
                color: null == (E = e.layout) || null == (E = E.sider) ? void 0 : E.colorTextMenuActive
            }))))
        },
        aa = function(e) {
            var t, n, r, a;
            return (0, l.default)((0, l.default)({}, "".concat(e.antCls, "-layout"), {
                backgroundColor: "transparent !important"
            }), e.componentCls, (0, l.default)((0, l.default)((0, l.default)((0, l.default)({}, "& ".concat(e.antCls, "-layout"), {
                display: "flex",
                backgroundColor: "transparent",
                width: "100%"
            }), "".concat(e.componentCls, "-content"), {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: (null == (t = e.layout) || null == (t = t.pageContainer) ? void 0 : t.colorBgPageContainer) || "transparent",
                position: "relative",
                paddingBlock: null == (n = e.layout) || null == (n = n.pageContainer) ? void 0 : n.paddingBlockPageContainerContent,
                paddingInline: null == (r = e.layout) || null == (r = r.pageContainer) ? void 0 : r.paddingInlinePageContainerContent,
                "&-has-page-container": {
                    padding: 0
                }
            }), "".concat(e.componentCls, "-container"), {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                minHeight: 0,
                backgroundColor: "transparent"
            }), "".concat(e.componentCls, "-bg-list"), {
                pointerEvents: "none",
                position: "fixed",
                overflow: "hidden",
                insetBlockStart: 0,
                insetInlineStart: 0,
                zIndex: 0,
                height: "100%",
                width: "100%",
                background: null == (a = e.layout) ? void 0 : a.bgLayout
            }))
        },
        eV = eV,
        ao = function() {
            var e;
            return void 0 === d.default ? eV.default : (null == (e = d.default) || null == (e = e.env) ? void 0 : e.ANTD_VERSION) || eV.default
        },
        ai = function(e, t, n) {
            var r = e.breadcrumbName,
                a = e.title,
                i = e.path;
            return n.findIndex(function(t) {
                return t.linkPath === e.path
            }) === n.length - 1 ? (0, o.jsx)("span", {
                children: a || r
            }) : (0, o.jsx)("span", {
                onClick: i ? function() {
                    return location.href = i
                } : void 0,
                children: a || r
            })
        },
        al = function(e, t) {
            var n = t.formatMessage,
                r = t.menu;
            return e.locale && n && (null == r ? void 0 : r.locale) !== !1 ? n({
                id: e.locale,
                defaultMessage: e.name
            }) : e.name
        },
        ac = function(e, t) {
            var n = e.get(t);
            if (!n) {
                var r = (Array.from(e.keys()) || []).find(function(e) {
                    try {
                        if (null != e && e.startsWith("http")) return !1;
                        return (0, r4.match)(e.replace("?", ""))(t)
                    } catch (t) {
                        return console.log("path", e, t), !1
                    }
                });
                r && (n = e.get(r))
            }
            return n || {
                path: ""
            }
        },
        as = function(e) {
            var t = {
                    location: e.location,
                    breadcrumbMap: e.breadcrumbMap
                },
                n = t.location,
                r = t.breadcrumbMap;
            return n && n.pathname && r ? (function(e) {
                if (!e || "/" === e) return ["/"];
                var t = e.split("/").filter(function(e) {
                    return e
                });
                return t.map(function(e, n) {
                    return "/".concat(t.slice(0, n + 1).join("/"))
                })
            })(null == n ? void 0 : n.pathname).map(function(t) {
                var n = ac(r, t),
                    a = al(n, e),
                    o = n.hideInBreadcrumb;
                return a && !o ? {
                    linkPath: t,
                    breadcrumbName: a,
                    title: a,
                    component: n.component
                } : {
                    linkPath: "",
                    breadcrumbName: "",
                    title: ""
                }
            }).filter(function(e) {
                return e && e.linkPath
            }) : []
        },
        au = function(e, t) {
            var n = e.breadcrumbRender,
                r = e.itemRender,
                a = (t.breadcrumbProps || {}).minLength,
                o = as(e),
                i = function(e) {
                    for (var t = r || ai, n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                    return null == t ? void 0 : t.apply(void 0, [(0, s.default)((0, s.default)({}, e), {}, {
                        path: e.linkPath || e.path
                    })].concat(a))
                },
                l = o;
            return n && (l = n(l || []) || void 0), (l && l.length < (void 0 === a ? 2 : a) || !1 === n) && (l = void 0), tQ(ao(), "5.3.0") > -1 ? {
                items: l,
                itemRender: i
            } : {
                routes: l,
                itemRender: i
            }
        },
        ad = function e(t, n, r, a) {
            var o = nU(t, (null == n ? void 0 : n.locale) || !1, r, !0),
                i = o.menuData,
                l = o.breadcrumb;
            return a ? e(a(i), n, r, void 0) : {
                breadcrumb: (0, f.default)(l).reduce(function(e, t) {
                    var n = (0, p.default)(t, 2),
                        r = n[0],
                        a = n[1];
                    return e[r] = a, e
                }, {}),
                breadcrumbMap: l,
                menuData: i
            }
        },
        af = function(e) {
            var t = (0, i.useState)({}),
                n = (0, p.default)(t, 2),
                r = n[0],
                a = n[1];
            return (0, i.useEffect)(function() {
                a(no({
                    layout: "object" !== (0, u.default)(e.layout) ? e.layout : void 0,
                    navTheme: e.navTheme,
                    menuRender: e.menuRender,
                    footerRender: e.footerRender,
                    menuHeaderRender: e.menuHeaderRender,
                    headerRender: e.headerRender,
                    fixSiderbar: e.fixSiderbar
                }))
            }, [e.layout, e.navTheme, e.menuRender, e.footerRender, e.menuHeaderRender, e.headerRender, e.fixSiderbar]), r
        },
        ap = ["id", "defaultMessage"],
        am = ["fixSiderbar", "navTheme", "layout"],
        ah = 0,
        ag = function(e, t) {
            var n;
            return !1 === e.headerRender || e.pure ? null : (0, o.jsx)(rJ, (0, s.default)((0, s.default)({
                matchMenuKeys: t
            }, e), {}, {
                stylish: null == (n = e.stylish) ? void 0 : n.header
            }))
        },
        av = function(e, t) {
            var n, r = e.layout,
                a = e.isMobile,
                i = e.selectedKeys,
                l = e.openKeys,
                c = e.splitMenus,
                u = e.suppressSiderWhenMenuEmpty,
                d = e.menuRender;
            if (!1 === e.menuRender || e.pure) return null;
            var f = e.menuData;
            if (c && (!1 !== l || "mix" === r) && !a) {
                var m, h, g = i || t,
                    v = (0, p.default)(g, 1)[0];
                f = v && (null == (h = e.menuData) || null == (h = h.find(function(e) {
                    return e.key === v
                })) ? void 0 : h.children) || []
            }
            var y = n7(f || []);
            if (y && (null == y ? void 0 : y.length) < 1 && (c || u)) return null;
            if ("top" === r && !a) return (0, o.jsx)(r5, (0, s.default)((0, s.default)({
                matchMenuKeys: t
            }, e), {}, {
                hide: !0,
                stylish: null == (n = e.stylish) ? void 0 : n.sider
            }));
            var b = (0, o.jsx)(r5, (0, s.default)((0, s.default)({
                matchMenuKeys: t
            }, e), {}, {
                menuData: y,
                stylish: null == (m = e.stylish) ? void 0 : m.sider
            }));
            return d ? d(e, b) : b
        },
        ay = function(e, t) {
            var n = t.pageTitleRender,
                r = r3(e);
            if (!1 === n) return {
                title: t.title || "",
                id: "",
                pageName: ""
            };
            if (n) {
                var a = n(e, r.title, r);
                if ("string" == typeof a) return r3((0, s.default)((0, s.default)({}, r), {}, {
                    title: a
                }));
                (0, U.default)("string" == typeof a, "pro-layout: renderPageTitle return value should be a string")
            }
            return r
        },
        ab = function(e) {
            var t, n, r, a, u, d, f, m, g, v, y, b, x, C, S, k, T, P, j = e || {},
                F = j.children,
                I = j.onCollapse,
                R = j.location,
                E = void 0 === R ? {
                    pathname: "/"
                } : R,
                A = j.contentStyle,
                H = j.route,
                O = j.defaultCollapsed,
                L = j.style,
                z = j.siderWidth,
                D = j.menu,
                N = j.siderMenuType,
                _ = j.isChildrenLayout,
                W = j.menuDataRender,
                $ = j.actionRef,
                U = j.bgLayoutImgList,
                V = j.formatMessage,
                G = j.loading,
                K = (0, i.useMemo)(function() {
                    return z || ("mix" === e.layout ? 215 : 256)
                }, [e.layout, z]),
                Y = (0, i.useContext)(h.default.ConfigContext),
                X = null != (u = e.prefixCls) ? u : Y.getPrefixCls("pro"),
                q = B(!1, {
                    value: null == D ? void 0 : D.loading,
                    onChange: null == D ? void 0 : D.onLoadingChange
                }),
                Z = (0, p.default)(q, 2),
                Q = Z[0],
                J = Z[1],
                ee = (0, i.useState)(function() {
                    return ah += 1, "pro-layout-".concat(ah)
                }),
                et = (0, p.default)(ee, 1)[0],
                en = (0, i.useCallback)(function(e) {
                    var t = e.id,
                        n = e.defaultMessage,
                        r = (0, c.default)(e, ap);
                    if (V) return V((0, s.default)({
                        id: t,
                        defaultMessage: n
                    }, r));
                    var a = at[!eX() ? "zh-CN" : window.localStorage.getItem("umi_locale") || window.g_locale || navigator.language] || at["zh-CN"];
                    return a[t] ? a[t] : n
                }, [V]),
                er = (0, w.default)([et, null == D ? void 0 : D.params], (t = na(nn().mark(function e(t) {
                    var n, r, a;
                    return nn().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, p.default)(t, 2)[1], J(!0), e.next = 4, null == D || null == (n = D.request) ? void 0 : n.call(D, r || {}, (null == H ? void 0 : H.children) || (null == H ? void 0 : H.routes) || []);
                            case 4:
                                return a = e.sent, J(!1), e.abrupt("return", a);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return t.apply(this, arguments)
                }), {
                    revalidateOnFocus: !1,
                    shouldRetryOnError: !1,
                    revalidateOnReconnect: !1
                }),
                ea = er.data,
                eo = er.mutate,
                ei = er.isLoading;
            (0, i.useEffect)(function() {
                J(ei)
            }, [ei]);
            var el = (0, M.useSWRConfig)().cache;
            (0, i.useEffect)(function() {
                return function() {
                    el instanceof Map && el.delete(et)
                }
            }, []);
            var ec = (0, i.useMemo)(function() {
                    return ad(ea || (null == H ? void 0 : H.children) || (null == H ? void 0 : H.routes) || [], D, en, W)
                }, [en, D, W, ea, null == H ? void 0 : H.children, null == H ? void 0 : H.routes]) || {},
                es = ec.breadcrumb,
                eu = ec.breadcrumbMap,
                ed = ec.menuData,
                ef = void 0 === ed ? [] : ed;
            $ && null != D && D.request && ($.current = {
                reload: function() {
                    eo()
                }
            });
            var ep = (0, i.useMemo)(function() {
                    return nX(E.pathname || "/", ef || [], !0)
                }, [E.pathname, ef]),
                em = (0, i.useMemo)(function() {
                    return Array.from(new Set(ep.map(function(e) {
                        return e.key || e.path || ""
                    })))
                }, [ep]),
                eh = ep[ep.length - 1] || {},
                eg = af(eh),
                ev = (0, s.default)((0, s.default)({}, e), eg),
                ey = ev.fixSiderbar,
                eb = (ev.navTheme, ev.layout),
                ex = (0, c.default)(ev, am),
                eC = nf(),
                eS = (0, i.useMemo)(function() {
                    return ("sm" === eC || "xs" === eC) && !e.disableMobile
                }, [eC, e.disableMobile]),
                ek = "top" !== eb && !eS,
                eT = B(function() {
                    return void 0 !== O ? O : !!eS || "md" === eC
                }, {
                    value: e.collapsed,
                    onChange: I
                }),
                ew = (0, p.default)(eT, 2),
                eM = ew[0],
                eP = ew[1],
                ej = eq((0, s.default)((0, s.default)((0, s.default)({
                    prefixCls: X
                }, e), {}, {
                    siderWidth: K
                }, eg), {}, {
                    formatMessage: en,
                    breadcrumb: es,
                    menu: (0, s.default)((0, s.default)({}, D), {}, {
                        type: N || (null == D ? void 0 : D.type),
                        loading: Q
                    }),
                    layout: eb
                }), ["className", "style", "breadcrumbRender"]),
                eF = ay((0, s.default)((0, s.default)({
                    pathname: E.pathname
                }, ej), {}, {
                    breadcrumbMap: eu
                }), e),
                eB = au((0, s.default)((0, s.default)({}, ej), {}, {
                    breadcrumbRender: e.breadcrumbRender,
                    breadcrumbMap: eu
                }), e),
                eR = av((0, s.default)((0, s.default)({}, ej), {}, {
                    menuData: ef,
                    onCollapse: eP,
                    isMobile: eS,
                    collapsed: eM
                }), em),
                eE = ag((0, s.default)((0, s.default)({}, ej), {}, {
                    children: null,
                    hasSiderMenu: !!eR,
                    menuData: ef,
                    isMobile: eS,
                    collapsed: eM,
                    onCollapse: eP
                }), em),
                eA = !1 === (n = (0, s.default)({
                    isMobile: eS,
                    collapsed: eM
                }, ej)).footerRender || n.pure ? null : n.footerRender ? n.footerRender((0, s.default)({}, n), (0, o.jsx)(n3, {})) : null,
                eH = (0, i.useContext)(eK).isChildrenLayout,
                eL = void 0 !== _ ? _ : eH,
                ez = "".concat(X, "-layout"),
                eD = eI("ProLayout", function(e) {
                    var t = (0, s.default)((0, s.default)({}, e), {}, {
                        componentCls: ".".concat(ez)
                    });
                    return [aa(t), ar(t)]
                }),
                eN = eD.wrapSSR,
                eW = eD.hashId,
                e$ = (0, eG.default)(e.className, eW, "ant-design-pro", ez, (0, l.default)((0, l.default)((0, l.default)((0, l.default)((0, l.default)({}, "screen-".concat(eC), eC), "".concat(ez, "-top-menu"), "top" === eb), "".concat(ez, "-is-children"), eL), "".concat(ez, "-fix-siderbar"), ey), "".concat(ez, "-").concat(eb), eb)),
                eU = ek ? eM ? 64 : K : 0,
                eV = {
                    position: "relative"
                };
            (eL || A && A.minHeight) && (eV.minHeight = 0), (0, i.useEffect)(function() {
                var t;
                null == (t = e.onPageChange) || t.call(e, e.location)
            }, [E.pathname, null == (d = E.pathname) ? void 0 : d.search]);
            var eY = (0, i.useState)(!1),
                eZ = (0, p.default)(eY, 2),
                eQ = eZ[0],
                eJ = eZ[1],
                e0 = (0, i.useState)(0),
                e1 = (0, p.default)(e0, 2),
                e2 = e1[0],
                e6 = e1[1];
            r = e.title || !1, a = "string" == typeof eF.pageName ? eF.title : r, (0, i.useEffect)(function() {
                eX() && a && (document.title = a)
            }, [eF.title, a]);
            var e5 = (0, i.useContext)(e_).token,
                e4 = (0, i.useMemo)(function() {
                    return U && U.length > 0 ? null == U ? void 0 : U.map(function(e, t) {
                        return (0, o.jsx)("img", {
                            src: e.src,
                            style: (0, s.default)({
                                position: "absolute"
                            }, e)
                        }, t)
                    }) : null
                }, [U]);
            return eN((0, o.jsx)(eK.Provider, {
                value: (0, s.default)((0, s.default)({}, ej), {}, {
                    breadcrumb: eB,
                    menuData: ef,
                    isMobile: eS,
                    collapsed: eM,
                    hasPageContainer: e2,
                    setHasPageContainer: e6,
                    isChildrenLayout: !0,
                    title: eF.pageName,
                    hasSiderMenu: !!eR,
                    hasHeader: !!eE,
                    siderWidth: eU,
                    hasFooter: !!eA,
                    hasFooterToolbar: eQ,
                    setHasFooterToolbar: eJ,
                    pageTitleInfo: eF,
                    matchMenus: ep,
                    matchMenuKeys: em,
                    currentMenu: eh
                }),
                children: e.pure ? (0, o.jsx)(o.Fragment, {
                    children: F
                }) : (0, o.jsxs)("div", {
                    className: e$,
                    children: [e4 || null != (f = e5.layout) && f.bgLayout ? (0, o.jsx)("div", {
                        className: (0, eG.default)("".concat(ez, "-bg-list"), eW),
                        children: e4
                    }) : null, (0, o.jsxs)(nq.default, {
                        style: (0, s.default)({
                            minHeight: "100%",
                            flexDirection: eR ? "row" : void 0
                        }, L),
                        children: [(0, o.jsx)(h.default, {
                            theme: {
                                hashed: eO(),
                                token: {
                                    controlHeightLG: (null == (m = e5.layout) || null == (m = m.sider) ? void 0 : m.menuHeight) || (null == e5 ? void 0 : e5.controlHeightLG)
                                },
                                components: {
                                    Menu: nc({
                                        colorItemBg: (null == (g = e5.layout) || null == (g = g.sider) ? void 0 : g.colorMenuBackground) || "transparent",
                                        colorSubItemBg: (null == (v = e5.layout) || null == (v = v.sider) ? void 0 : v.colorMenuBackground) || "transparent",
                                        radiusItem: e5.borderRadius,
                                        colorItemBgSelected: (null == (y = e5.layout) || null == (y = y.sider) ? void 0 : y.colorBgMenuItemSelected) || (null == e5 ? void 0 : e5.colorBgTextHover),
                                        colorItemBgHover: (null == (b = e5.layout) || null == (b = b.sider) ? void 0 : b.colorBgMenuItemHover) || (null == e5 ? void 0 : e5.colorBgTextHover),
                                        colorItemBgActive: (null == (x = e5.layout) || null == (x = x.sider) ? void 0 : x.colorBgMenuItemActive) || (null == e5 ? void 0 : e5.colorBgTextActive),
                                        colorItemBgSelectedHorizontal: (null == (C = e5.layout) || null == (C = C.sider) ? void 0 : C.colorBgMenuItemSelected) || (null == e5 ? void 0 : e5.colorBgTextHover),
                                        colorActiveBarWidth: 0,
                                        colorActiveBarHeight: 0,
                                        colorActiveBarBorderSize: 0,
                                        colorItemText: (null == (S = e5.layout) || null == (S = S.sider) ? void 0 : S.colorTextMenu) || (null == e5 ? void 0 : e5.colorTextSecondary),
                                        colorItemTextHover: (null == (k = e5.layout) || null == (k = k.sider) ? void 0 : k.colorTextMenuItemHover) || "rgba(0, 0, 0, 0.85)",
                                        colorItemTextSelected: (null == (T = e5.layout) || null == (T = T.sider) ? void 0 : T.colorTextMenuSelected) || "rgba(0, 0, 0, 1)",
                                        popupBg: null == e5 ? void 0 : e5.colorBgElevated,
                                        subMenuItemBg: null == e5 ? void 0 : e5.colorBgElevated,
                                        darkSubMenuItemBg: "transparent",
                                        darkPopupBg: null == e5 ? void 0 : e5.colorBgElevated
                                    })
                                }
                            },
                            children: eR
                        }), (0, o.jsxs)("div", {
                            style: eV,
                            className: "".concat(ez, "-container ").concat(eW).trim(),
                            children: [eE, (0, o.jsx)(n0, (0, s.default)((0, s.default)({
                                hasPageContainer: e2,
                                isChildrenLayout: eL
                            }, ex), {}, {
                                hasHeader: !!eE,
                                prefixCls: ez,
                                style: A,
                                children: G ? (0, o.jsx)(tO, {}) : F
                            })), eA, eQ && (0, o.jsx)("div", {
                                className: "".concat(ez, "-has-footer"),
                                style: {
                                    height: 64,
                                    marginBlockStart: null == (P = e5.layout) || null == (P = P.pageContainer) ? void 0 : P.paddingBlockPageContainerContent
                                }
                            })]
                        })]
                    })]
                })
            }))
        },
        ax = function(e) {
            var t = e.colorPrimary,
                n = void 0 !== e.navTheme ? {
                    dark: "realDark" === e.navTheme
                } : {};
            return (0, o.jsx)(h.default, {
                theme: t ? {
                    token: {
                        colorPrimary: t
                    }
                } : void 0,
                children: (0, o.jsx)(eN, (0, s.default)((0, s.default)({}, n), {}, {
                    token: e.token,
                    prefixCls: e.prefixCls,
                    children: (0, o.jsx)(ab, (0, s.default)((0, s.default)({
                        logo: (0, o.jsx)(n1, {})
                    }, rM), {}, {
                        location: eX() ? window.location : void 0
                    }, e))
                }))
            })
        },
        aC = e.i(313811),
        aS = e.i(618566),
        ak = e.i(326373),
        aT = e.i(217255),
        aw = e.i(363178),
        aM = e.i(770703),
        aP = e.i(944779),
        aj = e.i(522016),
        aF = e.i(731270),
        aI = e.i(382526),
        aB = e.i(940141);
    let aR = {
        route: {
            path: "/",
            routes: [{
                path: "/block-countries",
                name: "Block countries",
                icon: (0, o.jsx)(aC.AiOutlineStop, {})
            }, {
                path: "/email-templates",
                name: "Email templates",
                icon: (0, o.jsx)(aC.AiOutlineMail, {})
            }, {
                path: "/post",
                name: "Static Posts",
                icon: (0, o.jsx)(aC.AiOutlineContainer, {}),
                children: [{
                    name: "All posts",
                    path: "/posts"
                }, {
                    name: "Create new",
                    path: "/posts/create"
                }]
            }, {
                path: "/menus",
                name: "Existing Menu Options",
                icon: (0, o.jsx)(aC.AiOutlineMenu, {}),
                children: [{
                    name: "All menu options",
                    path: "/menu"
                }, {
                    name: "Create new",
                    path: "/menu/create"
                }]
            }, {
                path: "/coupons",
                name: "Coupons",
                icon: (0, o.jsx)(aC.AiOutlineDollar, {}),
                children: [{
                    name: "All coupons",
                    path: "/coupon"
                }, {
                    name: "Create new",
                    path: "/coupon/create"
                }]
            }, {
                path: "/banner",
                name: "Banners",
                icon: (0, o.jsx)(aC.AiOutlineFileImage, {}),
                children: [{
                    name: "All banners",
                    path: "/banners"
                }, {
                    name: "Upload new",
                    path: "/banners/upload"
                }]
            }, {
                path: "/user",
                name: "Users",
                icon: (0, o.jsx)(aC.AiOutlineUser, {}),
                children: [{
                    name: "All users",
                    path: "/users"
                }, {
                    name: "Create new",
                    path: "/users/create"
                }]
            }, {
                path: "/creators",
                name: "Creators",
                icon: (0, o.jsx)(aC.AiOutlineWoman, {}),
                children: [{
                    name: "All creators",
                    path: "/creator"
                }, {
                    name: "Create new",
                    path: "/creator/create"
                }]
            }, {
                path: "/category",
                name: "Creator Categories",
                icon: (0, o.jsx)(aC.AiOutlineAreaChart, {}),
                children: [{
                    name: "All categories",
                    path: "/creator-category"
                }, {
                    name: "Create New",
                    path: "/creator-category/create"
                }]
            }, {
                path: "/feeds",
                name: "Feed posts",
                icon: (0, o.jsx)(aC.AiOutlineFire, {}),
                children: [{
                    name: "All posts",
                    path: "/feed"
                }, {
                    name: "Create new",
                    path: "/feed/create"
                }]
            }, {
                path: "/videos",
                name: "Videos",
                icon: (0, o.jsx)(aC.AiOutlineVideoCamera, {}),
                children: [{
                    name: "All videos",
                    path: "/video"
                }, {
                    name: "Upload new",
                    path: "/video/upload"
                }, {
                    name: "Bulk upload",
                    path: "/video/bulk-upload"
                }]
            }, {
                path: "/performers-photos",
                name: "Galleries",
                icon: (0, o.jsx)(aC.AiOutlineCamera, {}),
                children: [{
                    name: "All galleries",
                    path: "/gallery"
                }, {
                    name: "Create new gallery",
                    path: "/gallery/create"
                }, {
                    name: "Bulk upload",
                    path: "/photos/bulk-upload"
                }]
            }, {
                path: "/performers-products",
                name: "Products",
                icon: (0, o.jsx)(aC.AiOutlineSkin, {}),
                children: [{
                    name: "All products",
                    path: "/product"
                }, {
                    name: "Create new",
                    path: "/product/create"
                }]
            }, {
                path: "/report",
                name: "Reports",
                icon: (0, o.jsx)(aC.AiOutlineNotification, {})
            }, {
                path: "/order",
                name: "Order History",
                icon: (0, o.jsx)(aC.AiOutlineContainer, {})
            }, {
                path: "/earnings",
                name: "Earning History",
                icon: (0, o.jsx)(aC.AiOutlineHistory, {})
            }, {
                path: "/subscriptions",
                name: "Subscriptions",
                icon: (0, o.jsx)(aC.AiOutlineHeart, {}),
                children: [{
                    name: "All subscriptions",
                    path: "/subscription"
                }, {
                    name: "Create new",
                    path: "/subscription/create"
                }]
            }, {
                path: "/payment-history",
                name: "Payment History",
                icon: (0, o.jsx)(function(e) {
                    return (0, aB.GenIcon)({
                        tag: "svg",
                        attr: {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        },
                        child: [{
                            tag: "path",
                            attr: {
                                d: "M17.1 8.648a.568 .568 0 0 1 -.761 .011a5.682 5.682 0 0 0 -3.659 -1.34c-1.102 0 -2.205 .363 -2.205 1.374c0 1.023 1.182 1.364 2.546 1.875c2.386 .796 4.363 1.796 4.363 4.137c0 2.545 -1.977 4.295 -5.204 4.488l-.295 1.364a.557 .557 0 0 1 -.546 .443h-2.034l-.102 -.011a.568 .568 0 0 1 -.432 -.67l.318 -1.444a7.432 7.432 0 0 1 -3.273 -1.784v-.011a.545 .545 0 0 1 0 -.773l1.137 -1.102c.214 -.2 .547 -.2 .761 0a5.495 5.495 0 0 0 3.852 1.5c1.478 0 2.466 -.625 2.466 -1.614c0 -.989 -1 -1.25 -2.886 -1.954c-2 -.716 -3.898 -1.728 -3.898 -4.091c0 -2.75 2.284 -4.091 4.989 -4.216l.284 -1.398a.545 .545 0 0 1 .545 -.432h2.023l.114 .012a.544 .544 0 0 1 .42 .647l-.307 1.557a8.528 8.528 0 0 1 2.818 1.58l.023 .022c.216 .228 .216 .569 0 .773l-1.057 1.057z"
                            },
                            child: []
                        }]
                    })(e)
                }, {})
            }, {
                path: "/wallet-transactions",
                name: "Wallet Transactions",
                icon: (0, o.jsx)(aC.AiOutlineDollar, {})
            }, {
                path: "/payout-request",
                name: "Payout Requests",
                icon: (0, o.jsx)(aC.AiOutlineNotification, {})
            }, {
                path: "/settings",
                name: "Settings",
                icon: (0, o.jsx)(aC.AiOutlinePieChart, {})
            }, {
                path: "/loggers",
                name: "Logger",
                icon: (0, o.jsx)(aC.AiOutlineRadarChart, {}),
                children: [{
                    path: "/logger/http-exception-logs",
                    name: "HTTP Exception"
                }, {
                    path: "/logger/request-logs",
                    name: "Request Logs"
                }, {
                    path: "/logger/system-logs",
                    name: "System Logs"
                }]
            }]
        }
    };

    function aE() {
        return (0, o.jsxs)("span", {
            children: [(0, o.jsx)(aC.AiOutlineRocket, {}), "  v.", "3.0.2"]
        })
    }
    let aA = (0, aM.default)(() => e.A(229581), {
        loadableGenerated: {
            modules: [344456]
        },
        ssr: !1
    });

    function aH({
        children: e
    }) {
        let {
            data: t,
            update: n
        } = (0, aT.useSession)(), r = (0, aS.usePathname)(), a = (0, aS.useRouter)(), {
            theme: l,
            setTheme: c
        } = (0, aw.useTheme)(), {
            settings: s
        } = (0, aF.useMainThemeLayout)(), [u, d] = (0, i.useState)(!1);
        (0, i.useEffect)(() => d(!0), []);
        let f = "dark" === l,
            p = (0, i.useMemo)(() => f ? {
                sider: {
                    colorTextMenu: "rgba(255,255,255,0.85)",
                    colorTextMenuSecondary: "rgba(255,255,255,0.65)",
                    colorTextMenuActive: "#fff",
                    colorTextMenuSelected: "#fff",
                    colorBgMenuItemHover: "rgba(255,255,255,0.08)"
                }
            } : {
                sider: {
                    colorTextMenu: "rgba(0,0,0,0.85)",
                    colorTextMenuSecondary: "rgba(0,0,0,0.65)",
                    colorTextMenuActive: "#000",
                    colorTextMenuSelected: "#000"
                }
            }, [f]);
        return ((0, i.useEffect)(() => {
            t ? .user ? ._id && (async () => {
                let {
                    data: e
                } = await aI.userService.me();
                n({
                    info: e
                })
            })()
        }, []), u) ? (0, o.jsx)("main", {
            suppressHydrationWarning: !0,
            children: (0, o.jsx)(eN, {
                hashed: !1,
                dark: "dark" === l,
                children: (0, o.jsx)(ax, {
                    title: !s ? .logoUrl && (s ? .siteName || "Admin Panel"),
                    logo: s ? .logoUrl ? (0, o.jsx)("img", {
                        loading: "lazy",
                        height: 40,
                        width: "auto",
                        alt: "logo",
                        src: s.logoUrl
                    }) : (0, o.jsx)(aC.AiOutlineRocket, {}),
                    siderWidth: 256,
                    layout: "mix",
                    siderMenuType: "sub",
                    ...aR,
                    location: {
                        pathname: r ? ? void 0
                    },
                    appList: [],
                    menu: {
                        defaultOpenAll: !1,
                        collapsedShowGroupTitle: !1
                    },
                    selectedKeys: [r ? ? ""],
                    avatarProps: {
                        src: t ? .user ? .avatar || "/no-avatar.jpg",
                        size: "small",
                        title: t ? .user ? .name || t ? .user ? .username,
                        render: (e, n) => (0, o.jsx)(ak.Dropdown, {
                            menu: {
                                items: [{
                                    key: "account",
                                    icon: (0, o.jsx)(aC.AiOutlineLogout, {}),
                                    label: "Update account",
                                    onClick: () => {
                                        a.push(`/users/update/${t?.user?._id}`)
                                    }
                                }, {
                                    key: "logout",
                                    icon: (0, o.jsx)(aC.AiOutlineLogout, {}),
                                    label: "Log out",
                                    onClick: () => {
                                        aP.authService.removeToken(), (0, aT.signOut)({
                                            redirect: !1
                                        }).then(() => {
                                            window.location.href = "/"
                                        })
                                    }
                                }]
                            },
                            children: n
                        })
                    },
                    headerTitleRender: (e, t, n) => {
                        let r = (0, o.jsxs)(aj.default, {
                            href: "/",
                            children: [e, t]
                        });
                        return document.body.clientWidth < 1400 || n.isMobile, r
                    },
                    menuFooterRender: ({
                        collapsed: e
                    }) => {
                        if (!e) return (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                textAlign: "center",
                                paddingTop: 16
                            },
                            children: [(0, o.jsx)(aE, {}), (0, o.jsx)(aA, {
                                theme: l ? ? "light",
                                setTheme: c
                            })]
                        })
                    },
                    menuItemRender: (e, t) => (0, o.jsx)("div", {
                        "aria-hidden": !0,
                        onClick: () => {
                            e.path && a.push(e.path)
                        },
                        children: t
                    }),
                    token: p,
                    children: (0, o.jsx)(t5, {
                        children: e
                    })
                })
            })
        }) : null
    }
    e.s(["default", () => aH], 717512)
}]);