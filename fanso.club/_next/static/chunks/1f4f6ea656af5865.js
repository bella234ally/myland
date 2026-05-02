(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 978052, 787553, e => {
    "use strict";
    let t;
    e.i(247167);
    var n = e.i(271645),
        r = e.i(167007);
    e.i(24308);
    var o = e.i(46302),
        l = e.i(232839);
    let i = n.createContext(null),
        u = new Map;

    function s(e) {
        e.forEach(e => {
            let {
                target: t
            } = e;
            u.get(t) ? .forEach(e => e(t))
        })
    }

    function a() {
        return t || (t = new ResizeObserver(s)), t
    }
    e.i(63335);
    var f = e.i(580251);

    function c(e, t, r, o) {
        let l = n.useRef({
                width: -1,
                height: -1,
                offsetWidth: -1,
                offsetHeight: -1
            }),
            i = (0, f.useEvent)(e => {
                let {
                    width: t,
                    height: n
                } = e.getBoundingClientRect(), {
                    offsetWidth: i,
                    offsetHeight: u
                } = e, s = Math.floor(t), a = Math.floor(n);
                if (l.current.width !== s || l.current.height !== a || l.current.offsetWidth !== i || l.current.offsetHeight !== u) {
                    let f = {
                        width: s,
                        height: a,
                        offsetWidth: i,
                        offsetHeight: u
                    };
                    l.current = f;
                    let c = i === Math.round(t) ? t : i,
                        d = u === Math.round(n) ? n : u,
                        h = { ...f,
                            offsetWidth: c,
                            offsetHeight: d
                        };
                    o ? .(h, e), Promise.resolve().then(() => {
                        r ? .(h, e)
                    })
                }
            }),
            s = "function" == typeof t;
        n.useEffect(() => {
            let n = s ? t() : t;
            return n && e && (u.has(n) || (u.set(n, new Set), a().observe(n)), u.get(n).add(i)), () => {
                n && u.has(n) && (u.get(n).delete(i), u.get(n).size || (a().unobserve(n), u.delete(n)))
            }
        }, [e, s ? 0 : t])
    }
    e.s(["default", () => c], 787553);
    let d = n.forwardRef(function(e, t) {
        let {
            children: r,
            disabled: u,
            onResize: s,
            data: a
        } = e, f = n.useRef(null), d = n.useContext(i), h = "function" == typeof r, m = h ? r(f) : r, p = !h && n.isValidElement(m) && (0, l.supportRef)(m), g = p ? (0, l.getNodeRef)(m) : null, v = (0, l.useComposeRef)(g, f), y = () => (0, o.getDOM)(f.current);
        return n.useImperativeHandle(t, () => y()), c(!u, y, s, (e, t) => {
            d ? .(e, t, a)
        }), p ? n.cloneElement(m, {
            ref: v
        }) : m
    });

    function h() {
        return (h = Object.assign.bind()).apply(this, arguments)
    }
    let m = n.forwardRef(function(e, t) {
        let {
            children: o
        } = e;
        return ("function" == typeof o ? [o] : (0, r.default)(o)).map((r, o) => {
            let l = r ? .key || `rc-observer-key-${o}`;
            return n.createElement(d, h({}, e, {
                key: l,
                ref: 0 === o ? t : void 0
            }), r)
        })
    });
    m.Collection = function(e) {
        let {
            children: t,
            onBatchResize: r
        } = e, o = n.useRef(0), l = n.useRef([]), u = n.useContext(i), s = n.useCallback((e, t, n) => {
            o.current += 1;
            let i = o.current;
            l.current.push({
                size: e,
                element: t,
                data: n
            }), Promise.resolve().then(() => {
                i === o.current && (r ? .(l.current), l.current = [])
            }), u ? .(e, t, n)
        }, [r, u]);
        return n.createElement(i.Provider, {
            value: s
        }, t)
    }, e.s(["default", 0, m], 978052)
}, 943709, 627456, 363079, e => {
    "use strict";
    var t = e.i(271645);
    let n = t.createContext(null);
    e.s(["default", 0, n], 943709);
    let r = !1;

    function o(e) {
        return "boolean" == typeof e && (r = e), r
    }
    e.s(["inlineMock", () => o], 627456), e.i(247167);
    var l = e.i(401676),
        i = e.i(32044);
    let u = [];

    function s(e, r) {
        let [o] = t.useState(() => (0, i.default)() ? document.createElement("div") : null), s = t.useRef(!1), a = t.useContext(n), [f, c] = t.useState(u), d = a || (s.current ? void 0 : e => {
            c(t => [e, ...t])
        });

        function h() {
            o.parentElement || document.body.appendChild(o), s.current = !0
        }

        function m() {
            o.parentElement ? .removeChild(o), s.current = !1
        }
        return (0, l.default)(() => (e ? a ? a(h) : h() : m(), m), [e]), (0, l.default)(() => {
            f.length && (f.forEach(e => e()), c(u))
        }, [f]), [o, d]
    }
    e.s(["default", () => s], 363079)
}, 471168, e => {
    "use strict";
    let t;
    var n = e.i(678519);

    function r(e) {
        let t, r, o = `rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`,
            l = document.createElement("div");
        l.id = o;
        let i = l.style;
        if (i.position = "absolute", i.left = "0", i.top = "0", i.width = "100px", i.height = "100px", i.overflow = "scroll", e) {
            let l = getComputedStyle(e);
            i.scrollbarColor = l.scrollbarColor, i.scrollbarWidth = l.scrollbarWidth;
            let u = getComputedStyle(e, "::-webkit-scrollbar"),
                s = parseInt(u.width, 10),
                a = parseInt(u.height, 10);
            try {
                let e = s ? `width: ${u.width};` : "",
                    t = a ? `height: ${u.height};` : "";
                (0, n.updateCSS)(`
#${o}::-webkit-scrollbar {
${e}
${t}
}`, o)
            } catch (e) {
                console.error(e), t = s, r = a
            }
        }
        document.body.appendChild(l);
        let u = e && t && !isNaN(t) ? t : l.offsetWidth - l.clientWidth,
            s = e && r && !isNaN(r) ? r : l.offsetHeight - l.clientHeight;
        return document.body.removeChild(l), (0, n.removeCSS)(o), {
            width: u,
            height: s
        }
    }

    function o(e) {
        return "u" < typeof document ? 0 : ((e || void 0 === t) && (t = r()), t.width)
    }

    function l(e) {
        return !("u" < typeof document) && e && e instanceof Element ? r(e) : {
            width: 0,
            height: 0
        }
    }
    e.s(["default", () => o, "getTargetScrollBarSize", () => l])
}, 592287, e => {
    "use strict";
    var t = e.i(271645),
        n = e.i(678519),
        r = e.i(401676),
        o = e.i(471168);
    let l = `rc-util-locker-${Date.now()}`,
        i = 0;

    function u(e) {
        let u = !!e,
            [s] = t.useState(() => (i += 1, `${l}_${i}`));
        (0, r.default)(() => {
            if (u) {
                let e = (0, o.getTargetScrollBarSize)(document.body).width,
                    t = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
                (0, n.updateCSS)(`
html body {
  overflow-y: hidden;
  ${t?`width: calc(100% - ${e}px);`:""}
}`, s)
            } else(0, n.removeCSS)(s);
            return () => {
                (0, n.removeCSS)(s)
            }
        }, [u, s])
    }
    e.s(["default", () => u], 592287)
}, 987225, e => {
    "use strict";
    var t = e.i(271645);
    let n = 0,
        r = { ...t
        }.useId,
        o = r ? function(e) {
            let t = r();
            return e || t
        } : function(e) {
            let [r, o] = t.useState("ssr-id");
            return (t.useEffect(() => {
                let e = n;
                n += 1, o(`rc_unique_${e}`)
            }, []), e) ? e : r
        };
    e.s(["default", 0, o])
}, 951160, e => {
    "use strict";
    e.i(247167);
    var t = e.i(32044),
        n = e.i(232839);
    e.i(24308);
    var r = e.i(271645),
        o = e.i(174080),
        l = e.i(943709),
        i = e.i(627456),
        u = e.i(363079),
        s = e.i(592287);
    e.i(63335);
    var a = e.i(580251),
        f = e.i(987225);
    let c = [],
        d = 0,
        h = e => {
            if ("Escape" === e.key && !e.isComposing) {
                if (Date.now() - d < 200) return;
                let t = c.length;
                for (let n = t - 1; n >= 0; n -= 1) c[n].onEsc({
                    top: n === t - 1,
                    event: e
                })
            }
        },
        m = () => {
            d = Date.now()
        },
        p = e => !1 !== e && ((0, t.default)() && e ? "string" == typeof e ? document.querySelector(e) : "function" == typeof e ? e() : e : null),
        g = r.forwardRef((e, d) => {
            let g, v, y, w, {
                    open: b,
                    autoLock: E,
                    getContainer: x,
                    debug: C,
                    autoDestroy: M = !0,
                    children: S,
                    onEsc: R
                } = e,
                [P, k] = r.useState(b),
                $ = P || b;
            r.useEffect(() => {
                (M || b) && k(b)
            }, [b, M]);
            let [L, N] = r.useState(() => p(x));
            r.useEffect(() => {
                let e = p(x);
                N(() => e ? ? null)
            });
            let [A, D] = (0, u.default)($ && !L, C), H = L ? ? A;
            (0, s.default)(E && b && (0, t.default)() && (H === A || H === document.body)), g = (0, f.default)(), v = (0, a.useEvent)(R), y = () => {
                c.find(e => e.id === g) || c.push({
                    id: g,
                    onEsc: v
                })
            }, w = () => {
                c = c.filter(e => e.id !== g)
            }, (0, r.useMemo)(() => {
                b ? y() : b || w()
            }, [b]), (0, r.useEffect)(() => {
                if (b) return y(), window.addEventListener("keydown", h), window.addEventListener("compositionend", m), () => {
                    w(), 0 === c.length && (window.removeEventListener("keydown", h), window.removeEventListener("compositionend", m))
                }
            }, [b]);
            let B = null;
            S && (0, n.supportRef)(S) && d && (B = (0, n.getNodeRef)(S));
            let O = (0, n.useComposeRef)(B, d);
            if (!$ || !(0, t.default)() || void 0 === L) return null;
            let W = !1 === H || (0, i.inlineMock)(),
                z = S;
            return d && (z = r.cloneElement(S, {
                ref: O
            })), r.createElement(l.default.Provider, {
                value: D
            }, W ? z : (0, o.createPortal)(z, H))
        });
    e.s(["default", 0, g], 951160)
}, 649637, 542569, e => {
    "use strict";
    e.i(247167);
    var t = e.i(951160),
        n = e.i(207670),
        r = e.i(978052),
        o = e.i(787553),
        o = o,
        l = e.i(46302),
        i = e.i(965783),
        u = e.i(232839),
        s = e.i(940487),
        a = e.i(987225),
        f = e.i(401676),
        c = e.i(271645),
        d = e.i(128473);

    function h(e) {
        let {
            prefixCls: t,
            align: r,
            arrow: o,
            arrowPos: l
        } = e, {
            className: i,
            content: u,
            style: s
        } = o || {}, {
            x: a = 0,
            y: f = 0
        } = l, d = c.useRef(null);
        if (!r || !r.points) return null;
        let h = {
            position: "absolute"
        };
        if (!1 !== r.autoArrow) {
            let e = r.points[0],
                t = r.points[1],
                n = e[0],
                o = e[1],
                l = t[0],
                i = t[1];
            n !== l && ["t", "b"].includes(n) ? "t" === n ? h.top = 0 : h.bottom = 0 : h.top = f, o !== i && ["l", "r"].includes(o) ? "l" === o ? h.left = 0 : h.right = 0 : h.left = a
        }
        return c.createElement("div", {
            ref: d,
            className: (0, n.clsx)(`${t}-arrow`, i),
            style: { ...h,
                ...s
            }
        }, u)
    }

    function m() {
        return (m = Object.assign.bind()).apply(this, arguments)
    }

    function p(e) {
        let {
            prefixCls: t,
            open: r,
            zIndex: o,
            mask: l,
            motion: i,
            mobile: u
        } = e;
        return l ? c.createElement(d.default, m({}, i, {
            motionAppear: !0,
            visible: r,
            removeOnLeave: !0
        }), e => {
            let {
                className: r
            } = e;
            return c.createElement("div", {
                style: {
                    zIndex: o
                },
                className: (0, n.clsx)(`${t}-mask`, u && `${t}-mobile-mask`, r)
            })
        }) : null
    }
    let g = c.memo(e => {
        let {
            children: t
        } = e;
        return t
    }, (e, t) => t.cache);

    function v(e, t, n, r, o, l, i, u) {
        let s = "auto",
            a = e ? {} : {
                left: "-1000vw",
                top: "-1000vh",
                right: s,
                bottom: s
            };
        if (!e && (t || !n)) {
            let {
                points: e
            } = r, t = r.dynamicInset || r._experimental ? .dynamicInset, n = t && "r" === e[0][1], f = t && "b" === e[0][0];
            n ? (a.right = o, a.left = s) : (a.left = i, a.right = s), f ? (a.bottom = l, a.top = s) : (a.top = u, a.bottom = s)
        }
        return a
    }
    e.i(63335);
    var y = e.i(580251);

    function w() {
        return (w = Object.assign.bind()).apply(this, arguments)
    }
    let b = c.forwardRef((e, t) => {
            let {
                onEsc: o,
                popup: l,
                className: i,
                prefixCls: s,
                style: a,
                target: m,
                onVisibleChanged: b,
                open: E,
                keepDom: x,
                fresh: C,
                onClick: M,
                mask: S,
                arrow: R,
                arrowPos: P,
                align: k,
                motion: $,
                maskMotion: L,
                mobile: N,
                forceRender: A,
                getPopupContainer: D,
                autoDestroy: H,
                portal: B,
                children: O,
                zIndex: W,
                onMouseEnter: z,
                onMouseLeave: T,
                onPointerEnter: X,
                onPointerDownCapture: Y,
                ready: F,
                offsetX: I,
                offsetY: j,
                offsetR: q,
                offsetB: V,
                onAlign: _,
                onPrepare: K,
                onResize: U,
                stretch: J,
                targetWidth: G,
                targetHeight: Q
            } = e, Z = "function" == typeof l ? l() : l, ee = E || x, et = !!N, [en, er, eo] = c.useMemo(() => N ? [N.mask, N.maskMotion, N.motion] : [S, L, $], [N, S, L, $]), el = D ? .length > 0, [ei, eu] = c.useState(!D || !el);
            (0, f.default)(() => {
                !ei && el && m && eu(!0)
            }, [ei, el, m]);
            let es = (0, y.useEvent)((e, t) => {
                    U ? .(e, t), _()
                }),
                ea = v(et, F, E, k, q, V, I, j);
            if (!ei) return null;
            let ef = {};
            return J && (J.includes("height") && Q ? ef.height = Q : J.includes("minHeight") && Q && (ef.minHeight = Q), J.includes("width") && G ? ef.width = G : J.includes("minWidth") && G && (ef.minWidth = G)), E || (ef.pointerEvents = "none"), c.createElement(B, {
                open: A || ee,
                getContainer: D && (() => D(m)),
                autoDestroy: H,
                onEsc: o
            }, c.createElement(p, {
                prefixCls: s,
                open: E,
                zIndex: W,
                mask: en,
                motion: er,
                mobile: et
            }), c.createElement(r.default, {
                onResize: es,
                disabled: !E
            }, e => c.createElement(d.default, w({
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: A,
                leavedClassName: `${s}-hidden`
            }, eo, {
                onAppearPrepare: K,
                onEnterPrepare: K,
                visible: E,
                onVisibleChanged: e => {
                    $ ? .onVisibleChanged ? .(e), b(e)
                }
            }), (r, o) => {
                let {
                    className: l,
                    style: f
                } = r, d = (0, n.clsx)(s, l, i, {
                    [`${s}-mobile`]: et
                });
                return c.createElement("div", {
                    ref: (0, u.composeRef)(e, t, o),
                    className: d,
                    style: {
                        "--arrow-x": `${P.x||0}px`,
                        "--arrow-y": `${P.y||0}px`,
                        ...ea,
                        ...ef,
                        ...f,
                        boxSizing: "border-box",
                        zIndex: W,
                        ...a
                    },
                    onMouseEnter: z,
                    onMouseLeave: T,
                    onPointerEnter: X,
                    onClick: M,
                    onPointerDownCapture: Y
                }, R && c.createElement(h, {
                    prefixCls: s,
                    arrow: R,
                    arrowPos: P,
                    align: k
                }), c.createElement(g, {
                    cache: !E && !C
                }, Z))
            })), O)
        }),
        E = c.createContext(null),
        x = c.createContext(null);

    function C(e) {
        return e ? Array.isArray(e) ? e : [e] : []
    }
    var M = e.i(943022);

    function S(e, t, n, r) {
        let {
            points: o
        } = n, l = Object.keys(e);
        for (let n = 0; n < l.length; n += 1) {
            let i = l[n];
            if (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = (e, t) => e[t] || "";
                    return n ? r(e, 0) === r(t, 0) : r(e, 0) === r(t, 0) && r(e, 1) === r(t, 1)
                }(e[i] ? .points, o, r)) return `${t}-placement-${i}`
        }
        return ""
    }

    function R(e) {
        return e.ownerDocument.defaultView
    }

    function P(e) {
        let t = [],
            n = e ? .parentElement,
            r = ["hidden", "scroll", "clip", "auto"];
        for (; n;) {
            let {
                overflowX: e,
                overflowY: o,
                overflow: l
            } = R(n).getComputedStyle(n);
            [e, o, l].some(e => r.includes(e)) && t.push(n), n = n.parentElement
        }
        return t
    }

    function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return Number.isNaN(e) ? t : e
    }

    function $(e) {
        return k(parseFloat(e), 0)
    }

    function L(e, t) {
        let n = { ...e
        };
        return (t || []).forEach(e => {
            if (e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement) return;
            let {
                overflow: t,
                overflowClipMargin: r,
                borderTopWidth: o,
                borderBottomWidth: l,
                borderLeftWidth: i,
                borderRightWidth: u
            } = R(e).getComputedStyle(e), s = e.getBoundingClientRect(), {
                offsetHeight: a,
                clientHeight: f,
                offsetWidth: c,
                clientWidth: d
            } = e, h = $(o), m = $(l), p = $(i), g = $(u), v = k(Math.round(s.width / c * 1e3) / 1e3), y = k(Math.round(s.height / a * 1e3) / 1e3), w = h * y, b = p * v, E = 0, x = 0;
            if ("clip" === t) {
                let e = $(r);
                E = e * v, x = e * y
            }
            let C = s.x + b - E,
                M = s.y + w - x,
                S = C + s.width + 2 * E - b - g * v - (c - d - p - g) * v,
                P = M + s.height + 2 * x - w - m * y - (a - f - h - m) * y;
            n.left = Math.max(n.left, C), n.top = Math.max(n.top, M), n.right = Math.min(n.right, S), n.bottom = Math.min(n.bottom, P)
        }), n
    }

    function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = `${t}`,
            r = n.match(/^(.*)\%$/);
        return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n)
    }

    function A(e, t) {
        let [n, r] = t || [];
        return [N(e.width, n), N(e.height, r)]
    }

    function D() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return [e[0], e[1]]
    }

    function H(e, t) {
        let n, r = t[0],
            o = t[1];
        return n = "t" === r ? e.y : "b" === r ? e.y + e.height : e.y + e.height / 2, {
            x: "l" === o ? e.x : "r" === o ? e.x + e.width : e.x + e.width / 2,
            y: n
        }
    }

    function B(e, t) {
        let n = [...e];
        return n[t] = ({
            t: "b",
            b: "t",
            l: "r",
            r: "l"
        })[e[t]] || "c", n
    }

    function O(e, t, n, r, o, i, u, a) {
        let [d, h] = c.useState({
            ready: !1,
            offsetX: 0,
            offsetY: 0,
            offsetR: 0,
            offsetB: 0,
            arrowX: 0,
            arrowY: 0,
            scaleX: 1,
            scaleY: 1,
            align: o[r] || {}
        }), m = c.useRef(0), p = c.useMemo(() => !t || a ? [] : P(t), [t]), g = c.useRef({});
        e || (g.current = {});
        let v = (0, s.default)(() => {
                if (t && n && e && !a) {
                    let e, a, c, d, m, v = t.ownerDocument,
                        y = R(t),
                        {
                            position: w
                        } = y.getComputedStyle(t),
                        b = t.style.left,
                        E = t.style.top,
                        x = t.style.right,
                        C = t.style.bottom,
                        S = t.style.overflow,
                        P = { ...o[r],
                            ...i
                        },
                        $ = v.createElement("div");
                    if (t.parentElement ? .appendChild($), $.style.left = `${t.offsetLeft}px`, $.style.top = `${t.offsetTop}px`, $.style.position = w, $.style.height = `${t.offsetHeight}px`, $.style.width = `${t.offsetWidth}px`, t.style.left = "0", t.style.top = "0", t.style.right = "auto", t.style.bottom = "auto", t.style.overflow = "hidden", Array.isArray(n)) e = {
                        x: n[0],
                        y: n[1],
                        width: 0,
                        height: 0
                    };
                    else {
                        let t = n.getBoundingClientRect();
                        t.x = t.x ? ? t.left, t.y = t.y ? ? t.top, e = {
                            x: t.x,
                            y: t.y,
                            width: t.width,
                            height: t.height
                        }
                    }
                    let N = t.getBoundingClientRect(),
                        {
                            height: O,
                            width: W
                        } = y.getComputedStyle(t);
                    N.x = N.x ? ? N.left, N.y = N.y ? ? N.top;
                    let {
                        clientWidth: z,
                        clientHeight: T,
                        scrollWidth: X,
                        scrollHeight: Y,
                        scrollTop: F,
                        scrollLeft: I
                    } = v.documentElement, j = N.height, q = N.width, V = e.height, _ = e.width, {
                        htmlRegion: K
                    } = P, U = "visible", J = "visibleFirst";
                    "scroll" !== K && K !== J && (K = U);
                    let G = K === J,
                        Q = L({
                            left: -I,
                            top: -F,
                            right: X - I,
                            bottom: Y - F
                        }, p),
                        Z = L({
                            left: 0,
                            top: 0,
                            right: z,
                            bottom: T
                        }, p),
                        ee = K === U ? Z : Q,
                        et = G ? Z : ee;
                    t.style.left = "auto", t.style.top = "auto", t.style.right = "0", t.style.bottom = "0";
                    let en = t.getBoundingClientRect();
                    t.style.left = b, t.style.top = E, t.style.right = x, t.style.bottom = C, t.style.overflow = S, t.parentElement ? .removeChild($);
                    let er = k(Math.round(q / parseFloat(W) * 1e3) / 1e3),
                        eo = k(Math.round(j / parseFloat(O) * 1e3) / 1e3);
                    if (0 === er || 0 === eo || (0, l.isDOM)(n) && !(0, M.default)(n)) return;
                    let {
                        offset: el,
                        targetOffset: ei
                    } = P, [eu, es] = A(N, el), [ea, ef] = A(e, ei);
                    e.x -= ea, e.y -= ef;
                    let [ec, ed] = P.points || [], eh = D(ed), em = D(ec), ep = H(e, eh), eg = H(N, em), ev = { ...P
                    }, ey = [em, eh], ew = ep.x - eg.x + eu, eb = ep.y - eg.y + es;

                    function s(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee,
                            r = N.x + e,
                            o = N.y + t,
                            l = Math.max(r, n.left),
                            i = Math.max(o, n.top);
                        return Math.max(0, (Math.min(r + q, n.right) - l) * (Math.min(o + j, n.bottom) - i))
                    }
                    let eE = s(ew, eb),
                        ex = s(ew, eb, Z),
                        eC = H(e, ["t", "l"]),
                        eM = H(N, ["t", "l"]),
                        eS = H(e, ["b", "r"]),
                        eR = H(N, ["b", "r"]),
                        {
                            adjustX: eP,
                            adjustY: ek,
                            shiftX: e$,
                            shiftY: eL
                        } = P.overflow || {},
                        eN = e => "boolean" == typeof e ? e : e >= 0;

                    function f() {
                        c = (a = N.y + eb) + j, m = (d = N.x + ew) + q
                    }
                    f();
                    let eA = eN(ek),
                        eD = em[0] === eh[0];
                    if (eA && "t" === em[0] && (c > et.bottom || g.current.bt)) {
                        let e = eb;
                        eD ? e -= j - V : e = eC.y - eR.y - es;
                        let t = s(ew, e),
                            n = s(ew, e, Z);
                        t > eE || t === eE && (!G || n >= ex) ? (g.current.bt = !0, eb = e, es = -es, ey = [B(ey[0], 0), B(ey[1], 0)]) : g.current.bt = !1
                    }
                    if (eA && "b" === em[0] && (a < et.top || g.current.tb)) {
                        let e = eb;
                        eD ? e += j - V : e = eS.y - eM.y - es;
                        let t = s(ew, e),
                            n = s(ew, e, Z);
                        t > eE || t === eE && (!G || n >= ex) ? (g.current.tb = !0, eb = e, es = -es, ey = [B(ey[0], 0), B(ey[1], 0)]) : g.current.tb = !1
                    }
                    let eH = eN(eP),
                        eB = em[1] === eh[1];
                    if (eH && "l" === em[1] && (m > et.right || g.current.rl)) {
                        let e = ew;
                        eB ? e -= q - _ : e = eC.x - eR.x - eu;
                        let t = s(e, eb),
                            n = s(e, eb, Z);
                        t > eE || t === eE && (!G || n >= ex) ? (g.current.rl = !0, ew = e, eu = -eu, ey = [B(ey[0], 1), B(ey[1], 1)]) : g.current.rl = !1
                    }
                    if (eH && "r" === em[1] && (d < et.left || g.current.lr)) {
                        let e = ew;
                        eB ? e += q - _ : e = eS.x - eM.x - eu;
                        let t = s(e, eb),
                            n = s(e, eb, Z);
                        t > eE || t === eE && (!G || n >= ex) ? (g.current.lr = !0, ew = e, eu = -eu, ey = [B(ey[0], 1), B(ey[1], 1)]) : g.current.lr = !1
                    }
                    ev.points = [ey[0].join(""), ey[1].join("")], f();
                    let eO = !0 === e$ ? 0 : e$;
                    "number" == typeof eO && (d < Z.left && (ew -= d - Z.left - eu, e.x + _ < Z.left + eO && (ew += e.x - Z.left + _ - eO)), m > Z.right && (ew -= m - Z.right - eu, e.x > Z.right - eO && (ew += e.x - Z.right + eO)));
                    let eW = !0 === eL ? 0 : eL;
                    "number" == typeof eW && (a < Z.top && (eb -= a - Z.top - es, e.y + V < Z.top + eW && (eb += e.y - Z.top + V - eW)), c > Z.bottom && (eb -= c - Z.bottom - es, e.y > Z.bottom - eW && (eb += e.y - Z.bottom + eW)));
                    let ez = N.x + ew,
                        eT = N.y + eb,
                        eX = e.x,
                        eY = e.y,
                        eF = Math.max(ez, eX),
                        eI = Math.min(ez + q, eX + _),
                        ej = Math.max(eT, eY),
                        eq = Math.min(eT + j, eY + V);
                    u ? .(t, ev);
                    let eV = en.right - N.x - (ew + N.width),
                        e_ = en.bottom - N.y - (eb + N.height);
                    1 === er && (ew = Math.floor(ew), eV = Math.floor(eV)), 1 === eo && (eb = Math.floor(eb), e_ = Math.floor(e_)), h({
                        ready: !0,
                        offsetX: ew / er,
                        offsetY: eb / eo,
                        offsetR: eV / er,
                        offsetB: e_ / eo,
                        arrowX: ((eF + eI) / 2 - ez) / er,
                        arrowY: ((ej + eq) / 2 - eT) / eo,
                        scaleX: er,
                        scaleY: eo,
                        align: ev
                    })
                }
            }),
            y = () => {
                h(e => ({ ...e,
                    ready: !1
                }))
            };
        return (0, f.default)(y, [r]), (0, f.default)(() => {
            e || y()
        }, [e]), [d.ready, d.offsetX, d.offsetY, d.offsetR, d.offsetB, d.arrowX, d.arrowY, d.scaleX, d.scaleY, d.align, () => {
            m.current += 1;
            let e = m.current;
            Promise.resolve().then(() => {
                m.current === e && v()
            })
        }]
    }

    function W() {
        let e = c.useRef(null),
            t = () => {
                e.current && (clearTimeout(e.current), e.current = null)
            };
        return c.useEffect(() => () => {
            t()
        }, []), (n, r) => {
            t(), 0 === r ? n() : e.current = setTimeout(() => {
                n()
            }, 1e3 * r)
        }
    }

    function z() {
        return (z = Object.assign.bind()).apply(this, arguments)
    }
    e.i(24308);
    let T = e => {
        let {
            prefixCls: t,
            isMobile: r,
            ready: o,
            open: l,
            align: i,
            offsetR: u,
            offsetB: s,
            offsetX: a,
            offsetY: f,
            arrowPos: h,
            popupSize: m,
            motion: p,
            uniqueContainerClassName: g,
            uniqueContainerStyle: y
        } = e, w = `${t}-unique-container`, [b, E] = c.default.useState(!1), x = v(r, o, l, i, u, s, a, f), C = c.default.useRef(x);
        o && (C.current = x);
        let M = {};
        return m && (M.width = m.width, M.height = m.height), c.default.createElement(d.default, z({
            motionAppear: !0,
            motionEnter: !0,
            motionLeave: !0,
            removeOnLeave: !1,
            leavedClassName: `${w}-hidden`
        }, p, {
            visible: l,
            onVisibleChanged: e => {
                E(e)
            }
        }), e => {
            let {
                className: t,
                style: r
            } = e, o = (0, n.clsx)(w, t, g, {
                [`${w}-visible`]: b
            });
            return c.default.createElement("div", {
                className: o,
                style: {
                    "--arrow-x": `${h?.x||0}px`,
                    "--arrow-y": `${h?.y||0}px`,
                    ...C.current,
                    ...M,
                    ...r,
                    ...y
                }
            })
        })
    };
    e.s(["default", 0, e => {
        let {
            children: r,
            postTriggerProps: o
        } = e, [i, u, s, a] = function() {
            let [e, t] = c.default.useState(null), [n, r] = c.default.useState(!1), [o, l] = c.default.useState(!1), i = c.default.useRef(null);
            return [(0, y.useEvent)(e => {
                !1 === e ? (i.current = null, r(!1)) : o && n ? i.current = e : (r(!0), t(e), i.current = null, n || l(!0))
            }), n, e, (0, y.useEvent)(e => {
                e ? (l(!1), i.current && (t(i.current), i.current = null)) : (l(!1), i.current = null)
            })]
        }(), f = c.useMemo(() => s && o ? o(s) : s, [s, o]), [d, h] = c.useState(null), [m, p] = c.useState(null), g = c.useRef(null), v = (0, y.useEvent)(e => {
            g.current = e, (0, l.isDOM)(e) && d !== e && h(e)
        }), w = c.useRef(null), C = W(), M = (0, y.useEvent)((e, t) => {
            w.current = t, C(() => {
                i(e)
            }, e.delay)
        }), R = e => {
            C(() => {
                w.current ? .() || i(!1)
            }, e)
        }, P = (0, y.useEvent)(e => {
            a(e)
        }), [k, $, L, N, A, D, H, , , B, z] = O(u, d, f ? .target, f ? .popupPlacement, f ? .builtinPlacements || {}, f ? .popupAlign, void 0, !1), X = c.useMemo(() => {
            if (!f) return "";
            let e = S(f.builtinPlacements || {}, f.prefixCls || "", B, !1);
            return (0, n.clsx)(e, f.getPopupClassNameFromAlign ? .(B))
        }, [B, f ? .getPopupClassNameFromAlign, f ? .builtinPlacements, f ? .prefixCls]), Y = c.useMemo(() => ({
            show: M,
            hide: R
        }), []);
        c.useEffect(() => {
            z()
        }, [f ? .target]);
        let F = (0, y.useEvent)(() => (z(), Promise.resolve())),
            I = c.useRef({}),
            j = c.useContext(E),
            q = c.useMemo(() => ({
                registerSubPopup: (e, t) => {
                    I.current[e] = t, j ? .registerSubPopup(e, t)
                }
            }), [j]),
            V = f ? .prefixCls;
        return c.createElement(x.Provider, {
            value: Y
        }, r, f && c.createElement(E.Provider, {
            value: q
        }, c.createElement(b, {
            ref: v,
            portal: t.default,
            onEsc: f.onEsc,
            prefixCls: V,
            popup: f.popup,
            className: (0, n.clsx)(f.popupClassName, X, `${V}-unique-controlled`),
            style: f.popupStyle,
            target: f.target,
            open: u,
            keepDom: !0,
            fresh: !0,
            autoDestroy: !1,
            onVisibleChanged: P,
            ready: k,
            offsetX: $,
            offsetY: L,
            offsetR: N,
            offsetB: A,
            onAlign: z,
            onPrepare: F,
            onResize: e => p({
                width: e.offsetWidth,
                height: e.offsetHeight
            }),
            arrowPos: {
                x: D,
                y: H
            },
            align: B,
            zIndex: f.zIndex,
            mask: f.mask,
            arrow: f.arrow,
            motion: f.popupMotion,
            maskMotion: f.maskMotion,
            getPopupContainer: f.getPopupContainer
        }, c.createElement(T, {
            prefixCls: V,
            isMobile: !1,
            ready: k,
            open: u,
            align: B,
            offsetR: N,
            offsetB: A,
            offsetX: $,
            offsetY: L,
            arrowPos: {
                x: D,
                y: H
            },
            popupSize: m,
            motion: f.popupMotion,
            uniqueContainerClassName: (0, n.clsx)(f.uniqueContainerClassName, X),
            uniqueContainerStyle: f.uniqueContainerStyle
        }))))
    }], 542569);
    var X = e.i(30294),
        Y = e.i(174080);
    let F = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.default;
        return c.forwardRef((t, r) => {
            var d;
            let h, m, p, g, {
                    prefixCls: v = "rc-trigger-popup",
                    children: y,
                    action: w = "hover",
                    showAction: M,
                    hideAction: k,
                    popupVisible: $,
                    defaultPopupVisible: L,
                    onOpenChange: N,
                    afterOpenChange: A,
                    onPopupVisibleChange: D,
                    afterPopupVisibleChange: H,
                    mouseEnterDelay: B,
                    mouseLeaveDelay: z = .1,
                    focusDelay: T,
                    blurDelay: F,
                    mask: I,
                    maskClosable: j = !0,
                    getPopupContainer: q,
                    forceRender: V,
                    autoDestroy: _,
                    popup: K,
                    popupClassName: U,
                    uniqueContainerClassName: J,
                    uniqueContainerStyle: G,
                    popupStyle: Q,
                    popupPlacement: Z,
                    builtinPlacements: ee = {},
                    popupAlign: et,
                    zIndex: en,
                    stretch: er,
                    getPopupClassNameFromAlign: eo,
                    fresh: el,
                    unique: ei,
                    alignPoint: eu,
                    onPopupClick: es,
                    onPopupAlign: ea,
                    arrow: ef,
                    popupMotion: ec,
                    maskMotion: ed,
                    mobile: eh,
                    ...em
                } = t,
                ep = void 0 === $,
                eg = !!eh,
                ev = c.useRef({}),
                ey = c.useContext(E),
                ew = c.useMemo(() => ({
                    registerSubPopup: (e, t) => {
                        ev.current[e] = t, ey ? .registerSubPopup(e, t)
                    }
                }), [ey]),
                eb = c.useContext(x),
                eE = (0, a.default)(),
                [ex, eC] = c.useState(null),
                eM = c.useRef(null),
                eS = (0, s.default)(e => {
                    eM.current = e, (0, l.isDOM)(e) && ex !== e && eC(e), ey ? .registerSubPopup(eE, e)
                }),
                [eR, eP] = c.useState(null),
                ek = c.useRef(null),
                e$ = (0, s.default)(e => {
                    let t = (0, l.getDOM)(e);
                    (0, l.isDOM)(t) && eR !== t && (eP(t), ek.current = t)
                }),
                eL = {},
                eN = (0, s.default)(e => eR ? .contains(e) || (0, i.getShadowRoot)(eR) ? .host === e || e === eR || ex ? .contains(e) || (0, i.getShadowRoot)(ex) ? .host === e || e === ex || Object.values(ev.current).some(t => t ? .contains(e) || e === t)),
                eA = ef ? { ...!0 !== ef ? ef : {}
                } : null,
                [eD, eH] = (0, X.useControlledState)(L || !1, $),
                eB = eD || !1,
                eO = c.useMemo(() => {
                    let e = "function" == typeof y ? y({
                        open: eB
                    }) : y;
                    return c.Children.only(e)
                }, [y, eB]),
                eW = eO ? .props || {},
                ez = (0, s.default)(() => eB),
                eT = (0, s.default)(function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return {
                        popup: K,
                        target: eR,
                        delay: e,
                        prefixCls: v,
                        popupClassName: U,
                        uniqueContainerClassName: J,
                        uniqueContainerStyle: G,
                        popupStyle: Q,
                        popupPlacement: Z,
                        builtinPlacements: ee,
                        popupAlign: et,
                        zIndex: en,
                        mask: I,
                        maskClosable: j,
                        popupMotion: ec,
                        maskMotion: ed,
                        arrow: eA,
                        getPopupContainer: q,
                        getPopupClassNameFromAlign: eo,
                        id: eE,
                        onEsc: ej
                    }
                });
            (0, f.default)(() => {
                eb && ei && eR && !ep && !ey && (eB ? eb.show(eT(B), ez) : eb.hide(z))
            }, [eB, eR]);
            let eX = c.useRef(eB);
            eX.current = eB;
            let eY = (0, s.default)(e => {
                    (0, Y.flushSync)(() => {
                        eB !== e && (eH(e), N ? .(e), D ? .(e))
                    })
                }),
                eF = W(),
                eI = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    void 0 !== $ ? eF(() => {
                        eY(e)
                    }, t) : eb && ei && ep && !ey ? e ? eb.show(eT(t), ez) : eb.hide(t) : eF(() => {
                        eY(e)
                    }, t)
                };

            function ej(e) {
                let {
                    top: t
                } = e;
                t && eI(!1)
            }
            let [eq, eV] = c.useState(!1);
            (0, f.default)(e => {
                (!e || eB) && eV(!0)
            }, [eB]);
            let [e_, eK] = c.useState(null), [eU, eJ] = c.useState(null), eG = e => {
                eJ([e.clientX, e.clientY])
            }, [eQ, eZ, e0, e1, e2, e7, e3, e6, e5, e4, e9] = O(eB, ex, eu && null !== eU ? eU : eR, Z, ee, et, ea, eg), [e8, te] = c.useMemo(() => {
                let e = C(M ? ? w),
                    t = C(k ? ? w),
                    n = new Set(e),
                    r = new Set(t);
                return n.has("hover") && !n.has("click") && n.add("touch"), r.has("hover") && !r.has("click") && r.add("touch"), [n, r]
            }, [w, M, k]), tt = e8.has("click"), tn = te.has("click") || te.has("contextMenu"), tr = (0, s.default)(() => {
                eq || e9()
            });
            (0, f.default)(() => {
                if (eB && eR && ex) {
                    let t = P(eR),
                        n = P(ex),
                        r = R(ex),
                        o = new Set([r, ...t, ...n]);

                    function e() {
                        tr(), (() => {
                            eX.current && eu && tn && eI(!1)
                        })()
                    }
                    return o.forEach(t => {
                        t.addEventListener("scroll", e, {
                            passive: !0
                        })
                    }), r.addEventListener("resize", e, {
                        passive: !0
                    }), tr(), () => {
                        o.forEach(t => {
                            t.removeEventListener("scroll", e), r.removeEventListener("resize", e)
                        })
                    }
                }
            }, [eB, eR, ex]), (0, f.default)(() => {
                tr()
            }, [eU, Z]), (0, f.default)(() => {
                eB && !ee ? .[Z] && tr()
            }, [JSON.stringify(et)]);
            let to = c.useMemo(() => {
                let e = S(ee, v, e4, eu);
                return (0, n.clsx)(e, eo ? .(e4))
            }, [e4, eo, ee, v, eu]);
            c.useImperativeHandle(r, () => ({
                nativeElement: ek.current,
                popupElement: eM.current,
                forceAlign: tr
            }));
            let [tl, ti] = c.useState(0), [tu, ts] = c.useState(0), ta = () => {
                if (er && eR) {
                    let e = eR.getBoundingClientRect();
                    ti(e.width), ts(e.height)
                }
            };

            function tf(e, t, n, r, o) {
                eL[e] = function(l) {
                    for (var i = arguments.length, u = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) u[s - 1] = arguments[s];
                    o && o() || (r ? .(l), eI(t, n)), eW[e] ? .(l, ...u)
                }
            }(0, f.default)(() => {
                e_ && (e9(), e_(), eK(null))
            }, [e_]);
            let tc = e8.has("touch"),
                td = te.has("touch"),
                th = c.useRef(!1);
            (tc || td) && (eL.onTouchStart = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                th.current = !0, eX.current && td ? eI(!1) : !eX.current && tc && eI(!0), eW.onTouchStart ? .(...t)
            }), (tt || tn) && (eL.onClick = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                eX.current && tn ? eI(!1) : !eX.current && tt && (eG(e), eI(!0)), eW.onClick ? .(e, ...n), th.current = !1
            });
            let tm = (d = tn || td, (p = c.useRef(eB)).current = eB, g = c.useRef(!1), c.useEffect(() => {
                    if (d && ex && (!I || j)) {
                        let e = () => {
                                g.current = !1
                            },
                            t = e => {
                                !p.current || eN(e.composedPath ? .() ? .[0] || e.target) || g.current || eI(!1)
                            },
                            n = R(ex);
                        n.addEventListener("pointerdown", e, !0), n.addEventListener("mousedown", t, !0), n.addEventListener("contextmenu", t, !0);
                        let r = (0, i.getShadowRoot)(eR);
                        return r && (r.addEventListener("mousedown", t, !0), r.addEventListener("contextmenu", t, !0)), () => {
                            n.removeEventListener("pointerdown", e, !0), n.removeEventListener("mousedown", t, !0), n.removeEventListener("contextmenu", t, !0), r && (r.removeEventListener("mousedown", t, !0), r.removeEventListener("contextmenu", t, !0))
                        }
                    }
                }, [d, eR, ex, I, j]), function() {
                    g.current = !0
                }),
                tp = e8.has("hover"),
                tg = te.has("hover"),
                tv = () => th.current;
            if (tp) {
                let e = e => {
                    eG(e)
                };
                tf("onMouseEnter", !0, B, e, tv), tf("onPointerEnter", !0, B, e, tv), h = e => {
                    (eB || eq) && ex ? .contains(e.target) && eI(!0, B)
                }, eu && (eL.onMouseMove = e => {
                    eW.onMouseMove ? .(e)
                })
            }
            tg && (tf("onMouseLeave", !1, z, void 0, tv), tf("onPointerLeave", !1, z, void 0, tv), m = () => {
                eI(!1, z)
            }), e8.has("focus") && tf("onFocus", !0, T), te.has("focus") && tf("onBlur", !1, F), e8.has("contextMenu") && (eL.onContextMenu = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                eX.current && te.has("contextMenu") ? eI(!1) : (eG(e), eI(!0)), e.preventDefault(), eW.onContextMenu ? .(e, ...n)
            });
            let ty = c.useRef(!1);
            ty.current || = V || eB || eq;
            let tw = { ...eW,
                    ...eL
                },
                tb = {};
            ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"].forEach(e => {
                em[e] && (tb[e] = function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    tw[e] ? .(...n), em[e](...n)
                })
            }), (0, o.default)(eB, eR, () => {
                ta(), tr()
            });
            let tE = (0, u.useComposeRef)(e$, (0, u.getNodeRef)(eO)),
                tx = c.cloneElement(eO, { ...tw,
                    ...tb,
                    ref: tE
                });
            return c.createElement(c.Fragment, null, tx, ty.current && (!eb || !ei) && c.createElement(E.Provider, {
                value: ew
            }, c.createElement(b, {
                portal: e,
                ref: eS,
                prefixCls: v,
                popup: K,
                className: (0, n.clsx)(U, !eg && to),
                style: Q,
                target: eR,
                onMouseEnter: h,
                onMouseLeave: m,
                onPointerEnter: h,
                zIndex: en,
                open: eB,
                keepDom: eq,
                fresh: el,
                onClick: es,
                onPointerDownCapture: tm,
                mask: I,
                motion: ec,
                maskMotion: ed,
                onVisibleChanged: e => {
                    eV(!1), e9(), A ? .(e), H ? .(e)
                },
                onPrepare: () => new Promise(e => {
                    ta(), eK(() => e)
                }),
                forceRender: V,
                autoDestroy: _ || !1,
                getPopupContainer: q,
                onEsc: ej,
                align: e4,
                arrow: eA,
                arrowPos: {
                    x: e7,
                    y: e3
                },
                ready: eQ,
                offsetX: eZ,
                offsetY: e0,
                offsetR: e1,
                offsetB: e2,
                onAlign: tr,
                stretch: er,
                targetWidth: tl / e6,
                targetHeight: tu / e5,
                mobile: eh
            })))
        })
    }(t.default);
    e.s(["default", 0, F], 649637)
}]);