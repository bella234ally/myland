(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 959013, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);
    let n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"
                }
            }]
        },
        name: "plus",
        theme: "outlined"
    };
    var i = e.i(9583);

    function r() {
        return (r = Object.assign.bind()).apply(this, arguments)
    }
    let a = t.forwardRef((e, a) => t.createElement(i.default, r({}, e, {
        ref: a,
        icon: n
    })));
    e.s(["default", 0, a], 959013)
}, 554921, 536591, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);
    let n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "minus",
        theme: "outlined"
    };
    var i = e.i(9583);

    function r() {
        return (r = Object.assign.bind()).apply(this, arguments)
    }
    let a = t.forwardRef((e, a) => t.createElement(i.default, r({}, e, {
        ref: a,
        icon: n
    })));
    var l = e.i(959013),
        u = e.i(247153);
    let o = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
                }
            }]
        },
        name: "up",
        theme: "outlined"
    };

    function s() {
        return (s = Object.assign.bind()).apply(this, arguments)
    }
    let c = t.forwardRef((e, n) => t.createElement(i.default, s({}, e, {
        ref: n,
        icon: o
    })));
    e.s(["default", 0, c], 536591);
    var d = e.i(278409),
        f = e.i(233848),
        m = e.i(211577);

    function g() {
        return "function" == typeof BigInt
    }

    function p(e) {
        return !e && 0 !== e && !Number.isNaN(e) || !String(e).trim()
    }

    function h(e) {
        var t = e.trim(),
            n = t.startsWith("-");
        n && (t = t.slice(1)), (t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, "")).startsWith(".") && (t = "0".concat(t));
        var i = t || "0",
            r = i.split("."),
            a = r[0] || "0",
            l = r[1] || "0";
        "0" === a && "0" === l && (n = !1);
        var u = n ? "-" : "";
        return {
            negative: n,
            negativeStr: u,
            trimStr: i,
            integerStr: a,
            decimalStr: l,
            fullStr: "".concat(u).concat(i)
        }
    }

    function v(e) {
        var t = String(e);
        return !Number.isNaN(Number(t)) && t.includes("e")
    }

    function b(e) {
        var t = String(e);
        if (v(e)) {
            var n = Number(t.slice(t.indexOf("e-") + 2)),
                i = t.match(/\.(\d+)/);
            return null != i && i[1] && (n += i[1].length), n
        }
        return t.includes(".") && S(t) ? t.length - t.indexOf(".") - 1 : 0
    }

    function N(e) {
        var t = String(e);
        if (v(e)) {
            if (e > Number.MAX_SAFE_INTEGER) return String(g() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER);
            if (e < Number.MIN_SAFE_INTEGER) return String(g() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER);
            t = e.toFixed(b(t))
        }
        return h(t).fullStr
    }

    function S(e) {
        return "number" == typeof e ? !Number.isNaN(e) : !!e && (/^\s*-?\d+(\.\d+)?\s*$/.test(e) || /^\s*-?\d+\.\s*$/.test(e) || /^\s*-?\.\d+\s*$/.test(e))
    }
    var y = function() {
            function e(t) {
                if ((0, d.default)(this, e), (0, m.default)(this, "origin", ""), (0, m.default)(this, "negative", void 0), (0, m.default)(this, "integer", void 0), (0, m.default)(this, "decimal", void 0), (0, m.default)(this, "decimalLen", void 0), (0, m.default)(this, "empty", void 0), (0, m.default)(this, "nan", void 0), p(t)) {
                    this.empty = !0;
                    return
                }
                if (this.origin = String(t), "-" === t || Number.isNaN(t)) {
                    this.nan = !0;
                    return
                }
                var n = t;
                if (v(n) && (n = Number(n)), S(n = "string" == typeof n ? n : N(n))) {
                    var i = h(n);
                    this.negative = i.negative;
                    var r = i.trimStr.split(".");
                    this.integer = BigInt(r[0]);
                    var a = r[1] || "0";
                    this.decimal = BigInt(a), this.decimalLen = a.length
                } else this.nan = !0
            }
            return (0, f.default)(e, [{
                key: "getMark",
                value: function() {
                    return this.negative ? "-" : ""
                }
            }, {
                key: "getIntegerStr",
                value: function() {
                    return this.integer.toString()
                }
            }, {
                key: "getDecimalStr",
                value: function() {
                    return this.decimal.toString().padStart(this.decimalLen, "0")
                }
            }, {
                key: "alignDecimal",
                value: function(e) {
                    return BigInt("".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e, "0")))
                }
            }, {
                key: "negate",
                value: function() {
                    var t = new e(this.toString());
                    return t.negative = !t.negative, t
                }
            }, {
                key: "cal",
                value: function(t, n, i) {
                    var r = Math.max(this.getDecimalStr().length, t.getDecimalStr().length),
                        a = n(this.alignDecimal(r), t.alignDecimal(r)).toString(),
                        l = i(r),
                        u = h(a),
                        o = u.negativeStr,
                        s = u.trimStr,
                        c = "".concat(o).concat(s.padStart(l + 1, "0"));
                    return new e("".concat(c.slice(0, -l), ".").concat(c.slice(-l)))
                }
            }, {
                key: "add",
                value: function(t) {
                    if (this.isInvalidate()) return new e(t);
                    var n = new e(t);
                    return n.isInvalidate() ? this : this.cal(n, function(e, t) {
                        return e + t
                    }, function(e) {
                        return e
                    })
                }
            }, {
                key: "multi",
                value: function(t) {
                    var n = new e(t);
                    return this.isInvalidate() || n.isInvalidate() ? new e(NaN) : this.cal(n, function(e, t) {
                        return e * t
                    }, function(e) {
                        return 2 * e
                    })
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return this.empty
                }
            }, {
                key: "isNaN",
                value: function() {
                    return this.nan
                }
            }, {
                key: "isInvalidate",
                value: function() {
                    return this.isEmpty() || this.isNaN()
                }
            }, {
                key: "equals",
                value: function(e) {
                    return this.toString() === (null == e ? void 0 : e.toString())
                }
            }, {
                key: "lessEquals",
                value: function(e) {
                    return 0 >= this.add(e.negate().toString()).toNumber()
                }
            }, {
                key: "toNumber",
                value: function() {
                    return this.isNaN() ? NaN : Number(this.toString())
                }
            }, {
                key: "toString",
                value: function() {
                    var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return e ? this.isInvalidate() ? "" : h("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin
                }
            }]), e
        }(),
        E = function() {
            function e(t) {
                if ((0, d.default)(this, e), (0, m.default)(this, "origin", ""), (0, m.default)(this, "number", void 0), (0, m.default)(this, "empty", void 0), p(t)) {
                    this.empty = !0;
                    return
                }
                this.origin = String(t), this.number = Number(t)
            }
            return (0, f.default)(e, [{
                key: "negate",
                value: function() {
                    return new e(-this.toNumber())
                }
            }, {
                key: "add",
                value: function(t) {
                    if (this.isInvalidate()) return new e(t);
                    var n = Number(t);
                    if (Number.isNaN(n)) return this;
                    var i = this.number + n;
                    if (i > Number.MAX_SAFE_INTEGER) return new e(Number.MAX_SAFE_INTEGER);
                    if (i < Number.MIN_SAFE_INTEGER) return new e(Number.MIN_SAFE_INTEGER);
                    var r = Math.max(b(this.number), b(n));
                    return new e(i.toFixed(r))
                }
            }, {
                key: "multi",
                value: function(t) {
                    var n = Number(t);
                    if (this.isInvalidate() || Number.isNaN(n)) return new e(NaN);
                    var i = this.number * n;
                    if (i > Number.MAX_SAFE_INTEGER) return new e(Number.MAX_SAFE_INTEGER);
                    if (i < Number.MIN_SAFE_INTEGER) return new e(Number.MIN_SAFE_INTEGER);
                    var r = Math.max(b(this.number), b(n));
                    return new e(i.toFixed(r))
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return this.empty
                }
            }, {
                key: "isNaN",
                value: function() {
                    return Number.isNaN(this.number)
                }
            }, {
                key: "isInvalidate",
                value: function() {
                    return this.isEmpty() || this.isNaN()
                }
            }, {
                key: "equals",
                value: function(e) {
                    return this.toNumber() === (null == e ? void 0 : e.toNumber())
                }
            }, {
                key: "lessEquals",
                value: function(e) {
                    return 0 >= this.add(e.negate().toString()).toNumber()
                }
            }, {
                key: "toNumber",
                value: function() {
                    return this.number
                }
            }, {
                key: "toString",
                value: function() {
                    var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return e ? this.isInvalidate() ? "" : N(this.number) : this.origin
                }
            }]), e
        }();

    function $(e) {
        return g() ? new y(e) : new E(e)
    }

    function I(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if ("" === e) return "";
        var r = h(e),
            a = r.negativeStr,
            l = r.integerStr,
            u = r.decimalStr,
            o = "".concat(t).concat(u),
            s = "".concat(a).concat(l);
        if (n >= 0) {
            var c = Number(u[n]);
            return c >= 5 && !i ? I($(e).add("".concat(a, "0.").concat("0".repeat(n)).concat(10 - c)).toString(), t, n, i) : 0 === n ? s : "".concat(s).concat(t).concat(u.padEnd(n, "0").slice(0, n))
        }
        return ".0" === o ? s : "".concat(s).concat(o)
    }
    e.s(["default", () => $, "toFixed", () => I], 522181), e.i(522181);
    var w = e.i(401676),
        x = e.i(207670),
        k = e.i(24308),
        M = e.i(737434);

    function C(e) {
        let {
            prefixCls: n,
            action: i,
            children: r,
            disabled: a,
            className: l,
            style: u,
            onStep: o
        } = e, s = "up" === i, c = t.useRef(), d = t.useRef([]), f = () => {
            clearTimeout(c.current)
        };
        t.useEffect(() => () => {
            f(), d.current.forEach(e => {
                M.default.cancel(e)
            })
        }, []);
        let m = `${n}-action`,
            g = (0, x.clsx)(m, `${m}-${i}`, {
                [`${m}-${i}-disabled`]: a
            }, l),
            p = () => d.current.push((0, M.default)(f));
        return t.createElement("span", {
            unselectable: "on",
            role: "button",
            onMouseUp: p,
            onMouseLeave: p,
            onMouseDown: e => {
                e.preventDefault(), f(), o(s, "handler"), c.current = setTimeout(function e() {
                    o(s, "handler"), c.current = setTimeout(e, 200)
                }, 600)
            },
            "aria-label": s ? "Increase Value" : "Decrease Value",
            "aria-disabled": a,
            className: g,
            style: u
        }, r || t.createElement("span", {
            unselectable: "on",
            className: `${n}-action-${i}-inner`
        }))
    }

    function R(e) {
        let t = "number" == typeof e ? N(e) : h(e).fullStr;
        return t.includes(".") ? h(t.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr : e + "0"
    }
    e.i(63335);
    var B = e.i(580251),
        A = e.i(563611);

    function F() {
        return (F = Object.assign.bind()).apply(this, arguments)
    }
    let T = (e, t) => e || t.isEmpty() ? t.toString() : t.toNumber(),
        _ = e => {
            let t = $(e);
            return t.isInvalidate() ? null : t
        },
        D = t.forwardRef((e, n) => {
            var i;
            let r, a, l, {
                    mode: u = "input",
                    prefixCls: o = "rc-input-number",
                    className: s,
                    style: c,
                    classNames: d,
                    styles: f,
                    min: m,
                    max: g,
                    step: p = 1,
                    defaultValue: h,
                    value: v,
                    disabled: y,
                    readOnly: E,
                    upHandler: D,
                    downHandler: q,
                    keyboard: O,
                    changeOnWheel: H = !1,
                    controls: U = !0,
                    prefix: z,
                    suffix: L,
                    stringMode: W,
                    parser: G,
                    formatter: P,
                    precision: V,
                    decimalSeparator: j,
                    onChange: X,
                    onInput: K,
                    onPressEnter: Y,
                    onStep: J,
                    onMouseDown: Q,
                    onClick: Z,
                    onMouseUp: ee,
                    onMouseLeave: et,
                    onMouseMove: en,
                    onMouseEnter: ei,
                    onMouseOut: er,
                    changeOnBlur: ea = !0,
                    ...el
                } = e,
                [eu, eo] = t.useState(!1),
                es = t.useRef(!1),
                ec = t.useRef(!1),
                ed = t.useRef(!1),
                ef = t.useRef(null),
                em = t.useRef(null);
            t.useImperativeHandle(n, () => {
                var e, t;
                return e = em.current, t = {
                    focus: e => {
                        (0, A.triggerFocus)(em.current, e)
                    },
                    blur: () => {
                        em.current ? .blur()
                    },
                    nativeElement: ef.current
                }, "u" > typeof Proxy && e ? new Proxy(e, {
                    get(e, n) {
                        if (t[n]) return t[n];
                        let i = e[n];
                        return "function" == typeof i ? i.bind(e) : i
                    }
                }) : e
            });
            let [eg, ep] = t.useState(() => $(v ? ? h)), eh = t.useCallback((e, t) => {
                if (!t) return V >= 0 ? V : Math.max(b(e), b(p))
            }, [V, p]), ev = t.useCallback(e => {
                let t = String(e);
                if (G) return G(t);
                let n = t;
                return j && (n = n.replace(j, ".")), n.replace(/[^\w.-]+/g, "")
            }, [G, j]), eb = t.useRef(""), eN = t.useCallback((e, t) => {
                if (P) return P(e, {
                    userTyping: t,
                    input: String(eb.current)
                });
                let n = "number" == typeof e ? N(e) : e;
                if (!t) {
                    let e = eh(n, t);
                    S(n) && (j || e >= 0) && (n = I(n, j || ".", e))
                }
                return n
            }, [P, eh, j]), [eS, ey] = t.useState(() => {
                let e = h ? ? v;
                return eg.isInvalidate() && ["string", "number"].includes(typeof e) ? Number.isNaN(e) ? "" : e : eN(eg.toString(), !1)
            });

            function eE(e, t) {
                ey(eN(e.isInvalidate() ? e.toString(!1) : e.toString(!t), t))
            }
            eb.current = eS;
            let e$ = t.useMemo(() => _(g), [g, V]),
                eI = t.useMemo(() => _(m), [m, V]),
                ew = t.useMemo(() => !(!e$ || !eg || eg.isInvalidate()) && e$.lessEquals(eg), [e$, eg]),
                ex = t.useMemo(() => !(!eI || !eg || eg.isInvalidate()) && eg.lessEquals(eI), [eI, eg]),
                [ek, eM] = (i = em.current, r = (0, t.useRef)(null), [function() {
                    try {
                        let {
                            selectionStart: e,
                            selectionEnd: t,
                            value: n
                        } = i, a = n.substring(0, e), l = n.substring(t);
                        r.current = {
                            start: e,
                            end: t,
                            value: n,
                            beforeTxt: a,
                            afterTxt: l
                        }
                    } catch (e) {}
                }, function() {
                    if (i && r.current && eu) try {
                        let {
                            value: e
                        } = i, {
                            beforeTxt: t,
                            afterTxt: n,
                            start: a
                        } = r.current, l = e.length;
                        if (e.startsWith(t)) l = t.length;
                        else if (e.endsWith(n)) l = e.length - r.current.afterTxt.length;
                        else {
                            let n = t[a - 1],
                                i = e.indexOf(n, a - 1); - 1 !== i && (l = i + 1)
                        }
                        i.setSelectionRange(l, l)
                    } catch (e) {
                        (0, k.default)(!1, `Something warning of cursor restore. Please fire issue about this: ${e.message}`)
                    }
                }]),
                eC = e => e$ && !e.lessEquals(e$) ? e$ : eI && !eI.lessEquals(e) ? eI : null,
                eR = (e, t) => {
                    let n = e,
                        i = !eC(n) || n.isEmpty();
                    if (n.isEmpty() || t || (n = eC(n) || n, i = !0), !E && !y && i) {
                        let e = n.toString(),
                            i = eh(e, t);
                        if (i >= 0 && eC(n = $(I(e, ".", i))) && (n = $(I(e, ".", i, !0))), !n.equals(eg)) {
                            var r;
                            r = n, void 0 === v && ep(r), X ? .(n.isEmpty() ? null : T(W, n)), void 0 === v && eE(n, t)
                        }
                        return n
                    }
                    return eg
                },
                eB = (a = (0, t.useRef)(0), l = () => {
                    M.default.cancel(a.current)
                }, (0, t.useEffect)(() => l, []), e => {
                    l(), a.current = (0, M.default)(() => {
                        e()
                    })
                }),
                eA = e => {
                    if (ek(), eb.current = e, ey(e), !ec.current) {
                        let t = $(ev(e));
                        t.isNaN() || eR(t, !0)
                    }
                    K ? .(e), eB(() => {
                        let t = e;
                        G || (t = e.replace(/。/g, ".")), t !== e && eA(t)
                    })
                },
                eF = (0, B.useEvent)((e, t) => {
                    if (e && ew || !e && ex) return;
                    es.current = !1;
                    let n = $(ed.current ? R(p) : p);
                    e || (n = n.negate());
                    let i = eR((eg || $(0)).add(n.toString()), !1);
                    J ? .(T(W, i), {
                        offset: ed.current ? R(p) : p,
                        type: e ? "up" : "down",
                        emitter: t
                    }), em.current ? .focus()
                }),
                eT = e => {
                    let t, n = $(ev(eS));
                    t = n.isNaN() ? eR(eg, e) : eR(n, e), void 0 !== v ? eE(eg, !1) : t.isNaN() || eE(t, !1)
                };
            t.useEffect(() => {
                if (H && eu) {
                    let e = e => {
                            eF(e.deltaY < 0, "wheel"), e.preventDefault()
                        },
                        t = em.current;
                    if (t) return t.addEventListener("wheel", e, {
                        passive: !1
                    }), () => t.removeEventListener("wheel", e)
                }
            }), (0, w.useLayoutUpdateEffect)(() => {
                eg.isInvalidate() || eE(eg, !1)
            }, [V, P]), (0, w.useLayoutUpdateEffect)(() => {
                let e = $(v);
                ep(e);
                let t = $(ev(eS));
                e.equals(t) && es.current && !P || eE(e, es.current)
            }, [v]), (0, w.useLayoutUpdateEffect)(() => {
                P && eM()
            }, [eS]);
            let e_ = {
                    prefixCls: o,
                    onStep: eF,
                    className: d ? .action,
                    style: f ? .action
                },
                eD = t.createElement(C, F({}, e_, {
                    action: "up",
                    disabled: ew
                }), D),
                eq = t.createElement(C, F({}, e_, {
                    action: "down",
                    disabled: ex
                }), q);
            return t.createElement("div", {
                ref: ef,
                className: (0, x.clsx)(o, `${o}-mode-${u}`, s, d ? .root, {
                    [`${o}-focused`]: eu,
                    [`${o}-disabled`]: y,
                    [`${o}-readonly`]: E,
                    [`${o}-not-a-number`]: eg.isNaN(),
                    [`${o}-out-of-range`]: !eg.isInvalidate() && !!eC(eg)
                }),
                style: { ...f ? .root,
                    ...c
                },
                onMouseDown: e => {
                    em.current && e.target !== em.current && (em.current.focus(), e.preventDefault()), Q ? .(e)
                },
                onMouseUp: ee,
                onMouseLeave: et,
                onMouseMove: en,
                onMouseEnter: ei,
                onMouseOut: er,
                onClick: Z,
                onFocus: () => {
                    eo(!0)
                },
                onBlur: () => {
                    ea && eT(!1), eo(!1), es.current = !1
                },
                onKeyDown: e => {
                    let {
                        key: t,
                        shiftKey: n
                    } = e;
                    es.current = !0, ed.current = n, "Enter" === t && (ec.current || (es.current = !1), eT(!1), Y ? .(e)), !1 !== O && !ec.current && ["Up", "ArrowUp", "Down", "ArrowDown"].includes(t) && (eF("Up" === t || "ArrowUp" === t, "keyboard"), e.preventDefault())
                },
                onKeyUp: () => {
                    es.current = !1, ed.current = !1
                },
                onCompositionStart: () => {
                    ec.current = !0
                },
                onCompositionEnd: () => {
                    ec.current = !1, eA(em.current.value)
                },
                onBeforeInput: () => {
                    es.current = !0
                }
            }, "spinner" === u && U && eq, void 0 !== z && t.createElement("div", {
                className: (0, x.clsx)(`${o}-prefix`, d ? .prefix),
                style: f ? .prefix
            }, z), t.createElement("input", F({
                autoComplete: "off",
                role: "spinbutton",
                "aria-valuemin": m,
                "aria-valuemax": g,
                "aria-valuenow": eg.isInvalidate() ? null : eg.toString(),
                step: p,
                ref: em,
                className: (0, x.clsx)(`${o}-input`, d ? .input),
                style: f ? .input,
                value: eS,
                onChange: e => {
                    eA(e.target.value)
                },
                disabled: y,
                readOnly: E
            }, el)), void 0 !== L && t.createElement("div", {
                className: (0, x.clsx)(`${o}-suffix`, d ? .suffix),
                style: f ? .suffix
            }, L), "spinner" === u && U && eD, "input" === u && U && t.createElement("div", {
                className: (0, x.clsx)(`${o}-actions`, d ? .actions),
                style: f ? .actions
            }, eD, eq))
        });
    var q = e.i(617206),
        O = e.i(711517),
        H = e.i(52956),
        U = e.i(609587),
        z = e.i(242064),
        L = e.i(937328),
        W = e.i(321883),
        G = e.i(517455),
        P = e.i(62139),
        V = e.i(792812),
        j = e.i(713082),
        X = e.i(249616);
    e.i(296059);
    var K = e.i(915654),
        Y = e.i(349942),
        J = e.i(517458),
        Q = e.i(889943),
        Z = e.i(183293),
        ee = e.i(372409),
        et = e.i(246422),
        en = e.i(838378);
    e.i(262370);
    var ei = e.i(135551);
    let er = (0, et.genStyleHooks)("InputNumber", e => {
            let t = (0, en.mergeToken)(e, (0, J.initInputToken)(e));
            return [(e => {
                let {
                    componentCls: t,
                    lineWidth: n,
                    lineType: i,
                    borderRadius: r,
                    inputFontSizeSM: a,
                    inputFontSizeLG: l,
                    colorError: u,
                    paddingInlineSM: o,
                    paddingBlockSM: s,
                    paddingBlockLG: c,
                    paddingInlineLG: d,
                    colorIcon: f,
                    motionDurationMid: m,
                    handleHoverColor: g,
                    handleOpacity: p,
                    paddingInline: h,
                    paddingBlock: v,
                    handleBg: b,
                    handleActiveBg: N,
                    inputAffixPadding: S,
                    borderRadiusSM: y,
                    controlWidth: E,
                    handleBorderColor: $,
                    filledHandleBg: I,
                    lineHeightLG: w,
                    antCls: x
                } = e, k = `${(0,K.unit)(n)} ${i} ${$}`, [M, C] = (0, et.genCssVar)(x, "input-number");
                return [{
                    [t]: { ...(0, Z.resetComponent)(e),
                        ...(0, Y.genBasicInputStyle)(e),
                        [M("input-padding-block")]: (0, K.unit)(v),
                        [M("input-padding-inline")]: (0, K.unit)(h),
                        display: "inline-flex",
                        width: E,
                        margin: 0,
                        paddingBlock: 0,
                        borderRadius: r,
                        ...(0, Q.genOutlinedStyle)(e, {
                            [`${t}-actions`]: {
                                background: b,
                                [`${t}-action-down`]: {
                                    borderBlockStart: k
                                }
                            }
                        }),
                        ...(0, Q.genFilledStyle)(e, {
                            [`${t}-actions`]: {
                                background: I,
                                [`${t}-action-down`]: {
                                    borderBlockStart: k
                                }
                            },
                            "&:focus-within": {
                                [`${t}-actions`]: {
                                    background: b
                                }
                            }
                        }),
                        ...(0, Q.genUnderlinedStyle)(e, {
                            [`${t}-actions`]: {
                                background: b,
                                [`${t}-action-down`]: {
                                    borderBlockStart: k
                                }
                            }
                        }),
                        ...(0, Q.genBorderlessStyle)(e),
                        "&-rtl": {
                            direction: "rtl",
                            [`${t}-input`]: {
                                direction: "rtl"
                            }
                        },
                        [`&${t}-out-of-range`]: {
                            [`${t}-input`]: {
                                color: u
                            }
                        },
                        [`${t}-input`]: { ...(0, Z.resetComponent)(e),
                            width: "100%",
                            paddingBlock: C("input-padding-block"),
                            textAlign: "start",
                            backgroundColor: "transparent",
                            border: 0,
                            borderRadius: r,
                            outline: 0,
                            transition: `all ${m} linear`,
                            appearance: "textfield",
                            fontSize: "inherit",
                            lineHeight: "inherit",
                            ...(0, Y.genPlaceholderStyle)(e.colorTextPlaceholder),
                            '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
                                margin: 0,
                                appearance: "none"
                            }
                        },
                        [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: {
                            width: e.handleWidth,
                            opacity: 1
                        },
                        [`&-disabled ${t}-input`]: {
                            cursor: "not-allowed",
                            color: e.colorTextDisabled
                        }
                    }
                }, {
                    [t]: {
                        [`
          ${t}-action-up-disabled,
          ${t}-action-down-disabled
        `]: {
                            cursor: "not-allowed"
                        },
                        [`${t}-action`]: { ...(0, Z.resetIcon)(),
                            userSelect: "none",
                            overflow: "hidden",
                            fontWeight: "bold",
                            lineHeight: 0,
                            textAlign: "center",
                            cursor: "pointer",
                            transition: `all ${m} linear`,
                            "&:active": {
                                background: N
                            },
                            "&:hover": {
                                color: g
                            }
                        },
                        "&-mode-input": {
                            overflow: "hidden",
                            [`${t}-actions`]: {
                                position: "absolute",
                                insetBlockStart: 0,
                                insetInlineEnd: 0,
                                width: e.handleVisibleWidth,
                                opacity: p,
                                height: "100%",
                                borderRadius: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "stretch",
                                transition: `all ${m}`,
                                overflow: "hidden",
                                [`${t}-action`]: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flex: "auto",
                                    height: "40%",
                                    marginInlineEnd: 0,
                                    fontSize: e.handleFontSize
                                }
                            },
                            [`&:hover ${t}-actions, &-focused ${t}-actions`]: {
                                width: e.handleWidth,
                                opacity: 1
                            },
                            [`${t}-action`]: {
                                color: f,
                                height: "50%",
                                borderInlineStart: k,
                                "&:hover": {
                                    height: "60%"
                                }
                            },
                            [`&${t}-disabled, &${t}-readonly`]: {
                                [`${t}-actions`]: {
                                    display: "none"
                                }
                            }
                        },
                        [`&${t}-mode-spinner`]: {
                            padding: 0,
                            width: "auto",
                            [`${t}-action`]: {
                                flex: "none",
                                paddingInline: C("input-padding-inline"),
                                "&-up": {
                                    borderInlineStart: k
                                },
                                "&-down": {
                                    borderInlineEnd: k
                                }
                            },
                            [`${t}-input`]: {
                                textAlign: "center",
                                paddingInline: C("input-padding-inline")
                            }
                        }
                    }
                }, {
                    [t]: {
                        "&-lg": {
                            [M("input-padding-block")]: (0, K.unit)(c),
                            [M("input-padding-inline")]: (0, K.unit)(d),
                            paddingBlock: 0,
                            fontSize: l,
                            lineHeight: w
                        },
                        "&-sm": {
                            [M("input-padding-block")]: (0, K.unit)(s),
                            [M("input-padding-inline")]: (0, K.unit)(o),
                            paddingBlock: 0,
                            fontSize: a,
                            borderRadius: y
                        }
                    }
                }, {
                    [t]: {
                        [`${t}-prefix, ${t}-suffix`]: {
                            display: "flex",
                            flex: "none",
                            alignItems: "center",
                            alignSelf: "center",
                            pointerEvents: "none"
                        },
                        [`${t}-prefix`]: {
                            marginInlineEnd: S
                        },
                        [`${t}-suffix`]: {
                            height: "100%",
                            marginInlineStart: S,
                            transition: `margin ${m}`
                        },
                        [`&:hover:not(${t}-without-controls)`]: {
                            [`${t}-suffix`]: {
                                marginInlineEnd: e.handleWidth
                            }
                        }
                    }
                }]
            })(t), (e => {
                let {
                    componentCls: t,
                    antCls: n
                } = e;
                return {
                    [`${t}-addon`]: {
                        [`&:has(${n}-select)`]: {
                            border: 0,
                            padding: 0
                        }
                    }
                }
            })(t), (0, ee.genCompactItemStyle)(t)]
        }, e => {
            let t = e.handleVisible ? ? "auto",
                n = e.controlHeightSM - 2 * e.lineWidth;
            return { ...(0, J.initComponentToken)(e),
                controlWidth: 90,
                handleWidth: n,
                handleFontSize: e.fontSize / 2,
                handleVisible: t,
                handleActiveBg: e.colorFillAlter,
                handleBg: e.colorBgContainer,
                filledHandleBg: new ei.FastColor(e.colorFillSecondary).onBackground(e.colorBgContainer).toHexString(),
                handleHoverColor: e.colorPrimary,
                handleBorderColor: e.colorBorder,
                handleOpacity: +(!0 === t),
                handleVisibleWidth: !0 === t ? n : 0
            }
        }, {
            unitless: {
                handleOpacity: !0
            },
            resetFont: !1
        }),
        ea = t.forwardRef((e, n) => {
            let i = t.useRef(null);
            t.useImperativeHandle(n, () => i.current);
            let {
                rootClassName: r,
                size: o,
                disabled: s,
                prefixCls: d,
                addonBefore: f,
                addonAfter: m,
                prefix: g,
                suffix: p,
                bordered: h,
                readOnly: v,
                status: b,
                controls: N = !0,
                variant: S,
                className: y,
                style: E,
                classNames: $,
                styles: I,
                mode: w,
                ...k
            } = e, {
                direction: M,
                className: C,
                style: R,
                styles: B,
                classNames: A
            } = (0, z.useComponentConfig)("inputNumber"), F = t.useContext(L.default), T = s ? ? F, _ = t.useMemo(() => !!N && !T && !v && N, [N, T, v]), {
                compactSize: q,
                compactItemClassnames: U
            } = (0, X.useCompactItemContext)(d, M), W = "spinner" === w ? t.createElement(l.default, null) : t.createElement(c, null), j = "spinner" === w ? t.createElement(a, null) : t.createElement(u.default, null), K = "boolean" == typeof _ ? _ : void 0;
            "object" == typeof _ && (W = _.upIcon || W, j = _.downIcon || j);
            let {
                hasFeedback: Y,
                isFormItemInput: J,
                feedbackIcon: Q
            } = t.useContext(P.FormItemInputContext), Z = (0, G.default)(e => o ? ? q ? ? e), [ee, et] = (0, V.default)("inputNumber", S, h), en = Y && t.createElement(t.Fragment, null, Q), ei = { ...e,
                size: Z,
                disabled: T,
                controls: _
            }, [er, ea] = (0, O.useMergeSemantic)([A, $], [B, I], {
                props: ei
            });
            return t.createElement(D, {
                ref: i,
                mode: w,
                disabled: T,
                className: (0, x.clsx)(y, r, er.root, C, U, (0, H.getStatusClassNames)(d, b, Y), {
                    [`${d}-${ee}`]: et,
                    [`${d}-lg`]: "large" === Z,
                    [`${d}-sm`]: "small" === Z,
                    [`${d}-rtl`]: "rtl" === M,
                    [`${d}-in-form-item`]: J,
                    [`${d}-without-controls`]: !_
                }),
                style: { ...ea.root,
                    ...R,
                    ...E
                },
                upHandler: W,
                downHandler: j,
                prefixCls: d,
                readOnly: v,
                controls: K,
                prefix: g,
                suffix: en || p,
                classNames: er,
                styles: ea,
                ...k
            })
        }),
        el = t.forwardRef((e, n) => {
            let {
                addonBefore: i,
                addonAfter: r,
                prefixCls: a,
                className: l,
                status: u,
                rootClassName: o,
                ...s
            } = e, {
                getPrefixCls: c
            } = (0, z.useComponentConfig)("inputNumber"), d = c("input-number", a), {
                status: f
            } = t.useContext(P.FormItemInputContext), m = (0, H.getMergedStatus)(f, u), g = (0, W.default)(d), [p, h] = er(d, g), v = i || r, b = t.createElement(ea, {
                ref: n,
                ...s,
                prefixCls: d,
                status: m,
                className: (0, x.clsx)(h, g, p, l),
                rootClassName: v ? void 0 : o
            });
            if (v) {
                let n = n => n ? t.createElement(j.default, {
                        className: (0, x.clsx)(`${d}-addon`, h, p),
                        variant: e.variant,
                        disabled: e.disabled,
                        status: m
                    }, t.createElement(q.default, {
                        form: !0
                    }, n)) : null,
                    a = n(i),
                    l = n(r);
                return t.createElement(X.default, {
                    rootClassName: o
                }, a, b, l)
            }
            return b
        });
    el._InternalPanelDoNotUseOrYouWillBeFired = e => t.createElement(U.default, {
        theme: {
            components: {
                InputNumber: {
                    handleVisible: !0
                }
            }
        }
    }, t.createElement(el, { ...e
    })), e.s(["default", 0, el], 554921)
}]);