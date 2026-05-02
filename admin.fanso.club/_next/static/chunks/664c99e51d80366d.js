(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 971140, (e, t, n) => {
    t.exports = function(e) {
        return e.replace(/[A-Z]/g, function(e) {
            return "-" + e.toLowerCase()
        }).toLowerCase()
    }
}, 52240, (e, t, n) => {
    var l = e.r(971140),
        r = function(e) {
            var t = "",
                n = Object.keys(e);
            return n.forEach(function(r, o) {
                var a, i = e[r];
                a = r = l(r), /[height|width]$/.test(a) && "number" == typeof i && (i += "px"), !0 === i ? t += r : !1 === i ? t += "not " + r : t += "(" + r + ": " + i + ")", o < n.length - 1 && (t += " and ")
            }), t
        };
    t.exports = function(e) {
        var t = "";
        return "string" == typeof e ? e : e instanceof Array ? (e.forEach(function(n, l) {
            t += r(n), l < e.length - 1 && (t += ", ")
        }), t) : r(e)
    }
}, 196306, e => {
    "use strict";
    e.i(247167);
    let t = () => {};
    e.s(["unstableSetRender", 0, t], 984712), e.i(984712);
    var n = e.i(329261),
        l = e.i(271645),
        r = e.i(459114),
        o = e.i(753354),
        a = e.i(750963),
        i = e.i(490316),
        s = e.i(286573),
        c = e.i(128473),
        d = e.i(50824),
        u = e.i(232839),
        p = e.i(207670),
        m = e.i(711517),
        f = e.i(376398),
        g = e.i(763731),
        h = e.i(242064),
        v = e.i(687385),
        b = e.i(183293),
        y = e.i(246422);
    let $ = (e, t, n, l, r) => ({
            background: e,
            border: `${(0,v.unit)(l.lineWidth)} ${l.lineType} ${t}`,
            [`${r}-icon`]: {
                color: n
            }
        }),
        x = (0, y.genStyleHooks)("Alert", e => [(e => {
            let {
                componentCls: t,
                motionDurationSlow: n,
                marginXS: l,
                marginSM: r,
                fontSize: o,
                fontSizeLG: a,
                lineHeight: i,
                borderRadiusLG: s,
                motionEaseInOutCirc: c,
                withDescriptionIconSize: d,
                colorText: u,
                colorTextHeading: p,
                withDescriptionPadding: m,
                defaultPadding: f
            } = e;
            return {
                [t]: { ...(0, b.resetComponent)(e),
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    padding: f,
                    wordWrap: "break-word",
                    borderRadius: s,
                    [`&${t}-rtl`]: {
                        direction: "rtl"
                    },
                    [`${t}-section`]: {
                        flex: 1,
                        minWidth: 0
                    },
                    [`${t}-icon`]: {
                        marginInlineEnd: l,
                        lineHeight: 0
                    },
                    "&-description": {
                        display: "none",
                        fontSize: o,
                        lineHeight: i
                    },
                    "&-title": {
                        color: p
                    },
                    [`&${t}-motion-leave`]: {
                        overflow: "hidden",
                        opacity: 1,
                        transition: `max-height ${n} ${c}, opacity ${n} ${c},
        padding-top ${n} ${c}, padding-bottom ${n} ${c},
        margin-bottom ${n} ${c}`
                    },
                    [`&${t}-motion-leave-active`]: {
                        maxHeight: 0,
                        marginBottom: "0 !important",
                        paddingTop: 0,
                        paddingBottom: 0,
                        opacity: 0
                    }
                },
                [`${t}-with-description`]: {
                    alignItems: "flex-start",
                    padding: m,
                    [`${t}-icon`]: {
                        marginInlineEnd: r,
                        fontSize: d,
                        lineHeight: 0
                    },
                    [`${t}-title`]: {
                        display: "block",
                        marginBottom: l,
                        color: p,
                        fontSize: a
                    },
                    [`${t}-description`]: {
                        display: "block",
                        color: u
                    }
                },
                [`${t}-banner`]: {
                    marginBottom: 0,
                    border: "0 !important",
                    borderRadius: 0
                }
            }
        })(e), (e => {
            let {
                componentCls: t,
                colorSuccess: n,
                colorSuccessBorder: l,
                colorSuccessBg: r,
                colorWarning: o,
                colorWarningBorder: a,
                colorWarningBg: i,
                colorError: s,
                colorErrorBorder: c,
                colorErrorBg: d,
                colorInfo: u,
                colorInfoBorder: p,
                colorInfoBg: m
            } = e;
            return {
                [t]: {
                    "&-success": $(r, l, n, e, t),
                    "&-info": $(m, p, u, e, t),
                    "&-warning": $(i, a, o, e, t),
                    "&-error": { ...$(d, c, s, e, t),
                        [`${t}-description > pre`]: {
                            margin: 0,
                            padding: 0
                        }
                    }
                }
            }
        })(e), (e => {
            let {
                componentCls: t,
                iconCls: n,
                motionDurationMid: l,
                marginXS: r,
                fontSizeIcon: o,
                colorIcon: a,
                colorIconHover: i
            } = e;
            return {
                [t]: {
                    "&-actions": {
                        marginInlineStart: r
                    },
                    [`${t}-close-icon`]: {
                        marginInlineStart: r,
                        padding: 0,
                        overflow: "hidden",
                        fontSize: o,
                        lineHeight: (0, v.unit)(o),
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        [`${n}-close`]: {
                            color: a,
                            transition: `color ${l}`,
                            "&:hover": {
                                color: i
                            }
                        }
                    },
                    "&-close-text": {
                        color: a,
                        transition: `color ${l}`,
                        "&:hover": {
                            color: i
                        }
                    }
                }
            }
        })(e)], e => ({
            withDescriptionIconSize: e.fontSizeHeading3,
            defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
            withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
        })),
        S = {
            success: r.default,
            info: s.default,
            error: o.default,
            warning: i.default
        },
        C = e => {
            let {
                icon: t,
                prefixCls: n,
                type: r,
                className: o,
                style: a
            } = e, i = S[r] || null;
            return t ? (0, g.replaceElement)(t, l.createElement("span", {
                className: `${n}-icon`
            }, t), () => ({
                className: (0, p.clsx)(t.props.className, o),
                style: a
            })) : l.createElement(i, {
                className: o,
                style: a
            })
        },
        k = e => {
            let {
                isClosable: t,
                prefixCls: n,
                closeIcon: r,
                handleClose: o,
                ariaProps: i,
                className: s,
                style: c
            } = e, d = !0 === r || void 0 === r ? l.createElement(a.default, null) : r;
            return t ? l.createElement("button", {
                type: "button",
                onClick: o,
                className: (0, p.clsx)(`${n}-close-icon`, s),
                tabIndex: 0,
                style: c,
                ...i
            }, d) : null
        },
        E = l.forwardRef((e, t) => {
            let {
                description: n,
                prefixCls: r,
                message: o,
                title: a,
                banner: i,
                className: s,
                rootClassName: g,
                style: v,
                onMouseEnter: b,
                onMouseLeave: y,
                onClick: $,
                afterClose: S,
                showIcon: E,
                closable: w,
                closeText: N,
                closeIcon: I,
                action: M,
                id: z,
                styles: R,
                classNames: T,
                ...H
            } = e, P = a ? ? o, [L, B] = l.useState(!1), A = l.useRef(null);
            l.useImperativeHandle(t, () => ({
                nativeElement: A.current
            }));
            let {
                getPrefixCls: O,
                direction: W,
                closable: D,
                closeIcon: F,
                className: _,
                style: j,
                classNames: X,
                styles: q
            } = (0, h.useComponentConfig)("alert"), V = O("alert", r), [G, Y] = x(V), {
                onClose: U,
                afterClose: K
            } = w && "object" == typeof w ? w : {}, Q = t => {
                B(!0), (U ? ? e.onClose) ? .(t)
            }, Z = l.useMemo(() => void 0 !== e.type ? e.type : i ? "warning" : "info", [e.type, i]), J = l.useMemo(() => "object" == typeof w && !!w.closeIcon || !!N || ("boolean" == typeof w ? w : !!(!1 !== I && (0, f.default)(I)) || !!D), [N, I, w, D]), ee = !!i && void 0 === E || E, et = { ...e,
                prefixCls: V,
                type: Z,
                showIcon: ee,
                closable: J
            }, [en, el] = (0, m.useMergeSemantic)([X, T], [q, R], {
                props: et
            }), er = (0, p.clsx)(V, `${V}-${Z}`, {
                [`${V}-with-description`]: !!n,
                [`${V}-no-icon`]: !ee,
                [`${V}-banner`]: !!i,
                [`${V}-rtl`]: "rtl" === W
            }, _, s, g, en.root, Y, G), eo = (0, d.default)(H, {
                aria: !0,
                data: !0
            }), ea = l.useMemo(() => "object" == typeof w && w.closeIcon ? w.closeIcon : N || (void 0 !== I ? I : "object" == typeof D && D.closeIcon ? D.closeIcon : F), [I, w, D, N, F]), ei = l.useMemo(() => {
                let e = w ? ? D;
                return "object" == typeof e ? (0, d.default)(e, {
                    data: !0,
                    aria: !0
                }) : {}
            }, [w, D]);
            return l.createElement(c.default, {
                visible: !L,
                motionName: `${V}-motion`,
                motionAppear: !1,
                motionEnter: !1,
                onLeaveStart: e => ({
                    maxHeight: e.offsetHeight
                }),
                onLeaveEnd: K ? ? S
            }, ({
                className: t,
                style: r
            }, o) => l.createElement("div", {
                id: z,
                ref: (0, u.composeRef)(A, o),
                "data-show": !L,
                className: (0, p.clsx)(er, t),
                style: { ...el.root,
                    ...j,
                    ...v,
                    ...r
                },
                onMouseEnter: b,
                onMouseLeave: y,
                onClick: $,
                role: "alert",
                ...eo
            }, ee ? l.createElement(C, {
                className: (0, p.clsx)(`${V}-icon`, en.icon),
                style: el.icon,
                description: n,
                icon: e.icon,
                prefixCls: V,
                type: Z
            }) : null, l.createElement("div", {
                className: (0, p.clsx)(`${V}-section`, en.section),
                style: el.section
            }, P ? l.createElement("div", {
                className: (0, p.clsx)(`${V}-title`, en.title),
                style: el.title
            }, P) : null, n ? l.createElement("div", {
                className: (0, p.clsx)(`${V}-description`, en.description),
                style: el.description
            }, n) : null), M ? l.createElement("div", {
                className: (0, p.clsx)(`${V}-actions`, en.actions),
                style: el.actions
            }, M) : null, l.createElement(k, {
                className: en.close,
                style: el.close,
                isClosable: J,
                prefixCls: V,
                closeIcon: ea,
                handleClose: Q,
                ariaProps: ei
            })))
        });
    var w = e.i(396438),
        N = e.i(220116);

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function M() {
        try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (M = function() {
            return !!e
        })()
    }
    var z = e.i(567267);

    function R(e, t) {
        return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    let T = function(e) {
        function t() {
            var e, n, l;
            return (0, w.default)(this, t), n = t, l = arguments, n = I(n), (e = function(e, t) {
                if (t && ("object" == (0, z.default)(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(this, M() ? Reflect.construct(n, l || [], I(this).constructor) : n.apply(this, l))).state = {
                error: void 0,
                info: {
                    componentStack: ""
                }
            }, e
        }
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && R(t, e), (0, N.default)(t, [{
            key: "componentDidCatch",
            value: function(e, t) {
                this.setState({
                    error: e,
                    info: t
                })
            }
        }, {
            key: "render",
            value: function() {
                let {
                    message: e,
                    title: t,
                    description: n,
                    id: r,
                    children: o
                } = this.props, {
                    error: a,
                    info: i
                } = this.state, s = t ? ? e, c = i ? .componentStack || null, d = void 0 === s ? (a || "").toString() : s;
                return a ? l.createElement(E, {
                    id: r,
                    type: "error",
                    title: d,
                    description: l.createElement("pre", {
                        style: {
                            fontSize: "0.9em",
                            overflowX: "auto"
                        }
                    }, void 0 === n ? c : n)
                }) : o
            }
        }])
    }(l.Component);
    E.ErrorBoundary = T;
    var H = e.i(991330);
    e.i(63335);
    var P = e.i(580251),
        L = e.i(191909),
        B = e.i(375147),
        A = e.i(451961),
        O = e.i(321883);
    let W = l.createContext(void 0),
        D = e => {
            let {
                href: t,
                title: n,
                prefixCls: r,
                children: o,
                className: a,
                target: i,
                replace: s
            } = e, {
                registerLink: c,
                unregisterLink: d,
                scrollTo: u,
                onClick: m,
                activeLink: f,
                direction: g,
                classNames: v,
                styles: b
            } = l.useContext(W) || {};
            l.useEffect(() => (c ? .(t), () => {
                d ? .(t)
            }), [t]);
            let {
                getPrefixCls: y
            } = l.useContext(h.ConfigContext), $ = y("anchor", r), x = f === t, S = (0, p.clsx)(`${$}-link`, a, v ? .item, {
                [`${$}-link-active`]: x
            }), C = (0, p.clsx)(`${$}-link-title`, v ? .itemTitle, {
                [`${$}-link-title-active`]: x
            });
            return l.createElement("div", {
                className: S,
                style: b ? .item
            }, l.createElement("a", {
                className: C,
                style: b ? .itemTitle,
                href: t,
                title: "string" == typeof n ? n : "",
                target: i,
                onClick: e => {
                    if (m ? .(e, {
                            title: n,
                            href: t
                        }), u ? .(t), !e.defaultPrevented) {
                        if (t.startsWith("http://") || t.startsWith("https://")) {
                            s && (e.preventDefault(), window.location.replace(t));
                            return
                        }
                        e.preventDefault();
                        window.history[s ? "replaceState" : "pushState"](null, "", t)
                    }
                }
            }, n), "horizontal" !== g ? o : null)
        };
    var F = e.i(838378);
    let _ = (0, y.genStyleHooks)("Anchor", e => {
        let {
            fontSize: t,
            fontSizeLG: n,
            paddingXXS: l,
            calc: r
        } = e, o = (0, F.mergeToken)(e, {
            holderOffsetBlock: l,
            anchorPaddingBlockSecondary: r(l).div(2).equal(),
            anchorTitleBlock: r(t).div(14).mul(3).equal(),
            anchorBallSize: r(n).div(2).equal()
        });
        return [(e => {
            let {
                componentCls: t,
                holderOffsetBlock: n,
                motionDurationSlow: l,
                lineWidthBold: r,
                colorPrimary: o,
                lineType: a,
                colorSplit: i,
                calc: s
            } = e;
            return {
                [`${t}-wrapper`]: {
                    marginBlockStart: s(n).mul(-1).equal(),
                    paddingBlockStart: n,
                    [t]: { ...(0, b.resetComponent)(e),
                        position: "relative",
                        paddingInlineStart: r,
                        [`${t}-link`]: {
                            paddingBlock: e.linkPaddingBlock,
                            paddingInline: `${(0,v.unit)(e.linkPaddingInlineStart)} 0`,
                            "&-title": { ...b.textEllipsis,
                                position: "relative",
                                display: "block",
                                marginBlockEnd: e.anchorTitleBlock,
                                color: e.colorText,
                                transition: `all ${e.motionDurationSlow}`,
                                "&:only-child": {
                                    marginBlockEnd: 0
                                }
                            },
                            [`&-active > ${t}-link-title`]: {
                                color: e.colorPrimary
                            },
                            [`${t}-link`]: {
                                paddingBlock: e.anchorPaddingBlockSecondary
                            }
                        }
                    },
                    [`&:not(${t}-wrapper-horizontal)`]: {
                        [t]: {
                            "&::before": {
                                position: "absolute",
                                insetInlineStart: 0,
                                top: 0,
                                height: "100%",
                                borderInlineStart: `${(0,v.unit)(r)} ${a} ${i}`,
                                content: '" "'
                            },
                            [`${t}-ink`]: {
                                position: "absolute",
                                insetInlineStart: 0,
                                display: "none",
                                transform: "translateY(-50%)",
                                transition: `top ${l} ease-in-out`,
                                width: r,
                                backgroundColor: o,
                                [`&${t}-ink-visible`]: {
                                    display: "inline-block"
                                }
                            }
                        }
                    },
                    [`${t}-fixed ${t}-ink ${t}-ink`]: {
                        display: "none"
                    }
                }
            }
        })(o), (e => {
            let {
                componentCls: t,
                motionDurationSlow: n,
                lineWidthBold: l,
                colorPrimary: r
            } = e;
            return {
                [`${t}-wrapper-horizontal`]: {
                    position: "relative",
                    "&::before": {
                        position: "absolute",
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        right: {
                            _skip_check_: !0,
                            value: 0
                        },
                        bottom: 0,
                        borderBottom: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                        content: '" "'
                    },
                    [t]: {
                        overflowX: "scroll",
                        position: "relative",
                        display: "flex",
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                        [`${t}-link:first-of-type`]: {
                            paddingInline: 0
                        },
                        [`${t}-ink`]: {
                            position: "absolute",
                            bottom: 0,
                            transition: `left ${n} ease-in-out, width ${n} ease-in-out`,
                            height: l,
                            backgroundColor: r
                        }
                    }
                }
            }
        })(o)]
    }, e => ({
        linkPaddingBlock: e.paddingXXS,
        linkPaddingInlineStart: e.padding
    }));

    function j() {
        return window
    }

    function X(e, t) {
        if (!e.getClientRects().length) return 0;
        let n = e.getBoundingClientRect();
        return n.width || n.height ? t === window ? n.top - e.ownerDocument.documentElement.clientTop : n.top - t.getBoundingClientRect().top : n.top
    }
    let q = /#([\S ]+)$/,
        V = e => {
            let {
                rootClassName: t,
                prefixCls: r,
                className: o,
                style: a,
                offsetTop: i,
                affix: s = !0,
                showInkInFixed: c = !1,
                children: d,
                items: u,
                direction: f = "vertical",
                bounds: g,
                targetOffset: v,
                onClick: b,
                onChange: y,
                getContainer: $,
                getCurrentAnchor: x,
                replace: S,
                classNames: C,
                styles: k
            } = e, [E, w] = l.useState([]), [N, I] = l.useState(null), M = l.useRef(N), z = l.useRef(null), R = l.useRef(null), T = l.useRef(!1), F = l.useRef(null), {
                direction: V,
                getPrefixCls: G,
                className: Y,
                style: U,
                classNames: K,
                styles: Q
            } = (0, h.useComponentConfig)("anchor"), {
                getTargetContainer: Z
            } = l.useContext(h.ConfigContext), J = G("anchor", r), ee = (0, O.default)(J), [et, en] = _(J, ee), el = $ ? ? Z ? ? j, er = JSON.stringify(E), eo = (0, P.useEvent)(e => {
                E.includes(e) || w(t => [].concat((0, H.default)(t), [e]))
            }), ea = (0, P.useEvent)(e => {
                E.includes(e) && w(t => t.filter(t => t !== e))
            }), ei = (0, P.useEvent)(e => {
                if (M.current === e) return;
                let t = "function" == typeof x ? x(e) : e;
                I(t), M.current = t, y ? .(e)
            }), es = l.useCallback(() => {
                T.current || ei(((e, t = 0, n = 5) => {
                    let l = [],
                        r = el();
                    return (e.forEach(e => {
                        let o = q.exec(e ? .toString());
                        if (!o) return;
                        let a = document.getElementById(o[1]);
                        if (a) {
                            let o = X(a, r);
                            o <= t + n && l.push({
                                link: e,
                                top: o
                            })
                        }
                    }), l.length) ? l.reduce((e, t) => t.top > e.top ? t : e).link : ""
                })(E, void 0 !== v ? v : i || 0, g))
            }, [E, v, i, g]), ec = l.useCallback(e => {
                let t = M.current;
                ei(e);
                let n = q.exec(e);
                if (!n) return;
                let l = document.getElementById(n[1]);
                if (!l) return;
                if (T.current) {
                    if (t === e) return;
                    F.current ? .()
                }
                let r = el(),
                    o = (0, B.default)(r) + X(l, r);
                o -= void 0 !== v ? v : i || 0, T.current = !0, F.current = (0, A.default)(o, {
                    getContainer: el,
                    callback() {
                        T.current = !1
                    }
                })
            }, [v, i]), ed = { ...e,
                direction: f
            }, [eu, ep] = (0, m.useMergeSemantic)([K, C], [Q, k], {
                props: ed
            }), em = (0, p.clsx)(et, en, ee, t, `${J}-wrapper`, {
                [`${J}-wrapper-horizontal`]: "horizontal" === f,
                [`${J}-rtl`]: "rtl" === V
            }, o, Y, eu.root), ef = (0, p.clsx)(J, {
                [`${J}-fixed`]: !s && !c
            }), eg = (0, p.clsx)(`${J}-ink`, eu.indicator, {
                [`${J}-ink-visible`]: N
            }), eh = {
                maxHeight: i ? `calc(100vh - ${i}px)` : "100vh",
                ...ep.root,
                ...U,
                ...a
            }, ev = e => Array.isArray(e) ? e.map(e => l.createElement(D, {
                replace: S,
                ...e,
                key: e.key
            }, "vertical" === f && ev(e.children))) : null, eb = l.createElement("div", {
                ref: z,
                className: em,
                style: eh
            }, l.createElement("div", {
                className: ef
            }, l.createElement("span", {
                className: eg,
                ref: R,
                style: ep.indicator
            }), "items" in e ? ev(u) : d));
            l.useEffect(() => {
                let e = el();
                return es(), e ? .addEventListener("scroll", es), () => {
                    e ? .removeEventListener("scroll", es)
                }
            }, [er]), l.useEffect(() => {
                "function" == typeof x && ei(x(M.current || ""))
            }, [x]), l.useEffect(() => {
                (() => {
                    let e = z.current ? .querySelector(`.${J}-link-title-active`);
                    if (e && R.current) {
                        let {
                            style: t
                        } = R.current, n = "horizontal" === f;
                        t.top = n ? "" : `${e.offsetTop+e.clientHeight/2}px`, t.height = n ? "" : `${e.clientHeight}px`, t.left = n ? `${e.offsetLeft}px` : "", t.width = n ? `${e.clientWidth}px` : "", n && (0, L.default)(e, {
                            scrollMode: "if-needed",
                            block: "nearest"
                        })
                    }
                })()
            }, [f, x, er, N]);
            let ey = l.useMemo(() => ({
                registerLink: eo,
                unregisterLink: ea,
                scrollTo: ec,
                activeLink: N,
                onClick: b,
                direction: f,
                classNames: eu,
                styles: ep
            }), [N, b, ec, f, ep, eu]);
            return l.createElement(W.Provider, {
                value: ey
            }, s ? l.createElement(n.default, {
                offsetTop: i,
                target: el,
                ...s && "object" == typeof s ? s : void 0
            }, eb) : eb)
        };
    V.Link = D;
    var G = e.i(747656),
        Y = e.i(174080),
        U = e.i(958702),
        K = e.i(830731);

    function Q() {
        return (Q = Object.assign.bind()).apply(this, arguments)
    }
    let Z = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                style: r,
                className: o,
                duration: a = 4.5,
                showProgress: i,
                pauseOnHover: s = !0,
                eventKey: c,
                content: u,
                closable: m,
                props: f,
                onClick: g,
                onNoticeClose: h,
                times: v,
                hovering: b
            } = e, [y, $] = l.useState(!1), [x, S] = l.useState(0), [C, k] = l.useState(0), E = b || y, w = "number" == typeof a ? a : 0, N = w > 0 && i, I = () => {
                h(c)
            };
            l.useEffect(() => {
                if (!E && w > 0) {
                    let e = Date.now() - C,
                        t = setTimeout(() => {
                            I()
                        }, 1e3 * w - C);
                    return () => {
                        s && clearTimeout(t), k(Date.now() - e)
                    }
                }
            }, [w, E, v]), l.useEffect(() => {
                if (!E && N && (s || 0 === C)) {
                    let e, t = performance.now(),
                        n = () => {
                            cancelAnimationFrame(e), e = requestAnimationFrame(e => {
                                let l = Math.min((e + C - t) / (1e3 * w), 1);
                                S(100 * l), l < 1 && n()
                            })
                        };
                    return n(), () => {
                        s && cancelAnimationFrame(e)
                    }
                }
            }, [w, C, E, N, v]);
            let M = l.useMemo(() => "object" == typeof m && null !== m ? m : {}, [m]),
                z = (0, d.default)(M, !0),
                R = 100 - (!x || x < 0 ? 0 : x > 100 ? 100 : x),
                T = `${n}-notice`;
            return l.createElement("div", Q({}, f, {
                ref: t,
                className: (0, p.clsx)(T, o, {
                    [`${T}-closable`]: m
                }),
                style: r,
                onMouseEnter: e => {
                    $(!0), f ? .onMouseEnter ? .(e)
                },
                onMouseLeave: e => {
                    $(!1), f ? .onMouseLeave ? .(e)
                },
                onClick: g
            }), l.createElement("div", {
                className: `${T}-content`
            }, u), m && l.createElement("button", Q({
                className: `${T}-close`,
                onKeyDown: e => {
                    ("Enter" === e.key || "Enter" === e.code || e.keyCode === K.default.ENTER) && I()
                },
                "aria-label": "Close"
            }, z, {
                onClick: e => {
                    e.preventDefault(), e.stopPropagation(), I()
                }
            }), M.closeIcon ? ? "x"), N && l.createElement("progress", {
                className: `${T}-progress`,
                max: "100",
                value: R
            }, R + "%"))
        }),
        J = l.default.createContext({}),
        ee = ({
            children: e,
            classNames: t
        }) => l.default.createElement(J.Provider, {
            value: {
                classNames: t
            }
        }, e);

    function et() {
        return (et = Object.assign.bind()).apply(this, arguments)
    }
    let en = e => {
            let t, {
                    configList: n,
                    placement: r,
                    prefixCls: o,
                    className: a,
                    style: i,
                    motion: s,
                    onAllNoticeRemoved: c,
                    onNoticeClose: d,
                    stack: u
                } = e,
                {
                    classNames: m
                } = (0, l.useContext)(J),
                f = (0, l.useRef)({}),
                [g, h] = (0, l.useState)(null),
                [v, b] = (0, l.useState)([]),
                y = n.map(e => ({
                    config: e,
                    key: String(e.key)
                })),
                [$, {
                    offset: x,
                    threshold: S,
                    gap: C
                }] = (t = {
                    offset: 8,
                    threshold: 3,
                    gap: 16
                }, u && "object" == typeof u && (t.offset = u.offset ? ? 8, t.threshold = u.threshold ? ? 3, t.gap = u.gap ? ? 16), [!!u, t]),
                k = $ && (v.length > 0 || y.length <= S),
                E = "function" == typeof s ? s(r) : s;
            return (0, l.useEffect)(() => {
                $ && v.length > 1 && b(e => e.filter(e => y.some(({
                    key: t
                }) => e === t)))
            }, [v, y, $]), (0, l.useEffect)(() => {
                $ && f.current[y[y.length - 1] ? .key] && h(f.current[y[y.length - 1] ? .key])
            }, [y, $]), l.default.createElement(U.CSSMotionList, et({
                key: r,
                className: (0, p.clsx)(o, `${o}-${r}`, m ? .list, a, {
                    [`${o}-stack`]: !!$,
                    [`${o}-stack-expanded`]: k
                }),
                style: i,
                keys: y,
                motionAppear: !0
            }, E, {
                onAllRemoved: () => {
                    c(r)
                }
            }), ({
                config: e,
                className: t,
                style: n,
                index: a
            }, i) => {
                let {
                    key: s,
                    times: c
                } = e, u = String(s), {
                    className: h,
                    style: S,
                    classNames: E,
                    styles: w,
                    ...N
                } = e, I = y.findIndex(e => e.key === u), M = {};
                if ($) {
                    let e = y.length - 1 - (I > -1 ? I : a - 1),
                        t = "top" === r || "bottom" === r ? "-50%" : "0";
                    if (e > 0) {
                        M.height = k ? f.current[u] ? .offsetHeight : g ? .offsetHeight;
                        let n = 0;
                        for (let t = 0; t < e; t++) n += f.current[y[y.length - 1 - t].key] ? .offsetHeight + C;
                        let l = (k ? n : e * x) * (r.startsWith("top") ? 1 : -1),
                            o = !k && g ? .offsetWidth && f.current[u] ? .offsetWidth ? (g ? .offsetWidth - 2 * x * (e < 3 ? e : 3)) / f.current[u] ? .offsetWidth : 1;
                        M.transform = `translate3d(${t}, ${l}px, 0) scaleX(${o})`
                    } else M.transform = `translate3d(${t}, 0, 0)`
                }
                return l.default.createElement("div", {
                    ref: i,
                    className: (0, p.clsx)(`${o}-notice-wrapper`, t, E ? .wrapper),
                    style: { ...n,
                        ...M,
                        ...w ? .wrapper
                    },
                    onMouseEnter: () => b(e => e.includes(u) ? e : [...e, u]),
                    onMouseLeave: () => b(e => e.filter(e => e !== u))
                }, l.default.createElement(Z, et({}, N, {
                    ref: e => {
                        I > -1 ? f.current[u] = e : delete f.current[u]
                    },
                    prefixCls: o,
                    classNames: E,
                    styles: w,
                    className: (0, p.clsx)(h, m ? .notice),
                    style: S,
                    times: c,
                    key: s,
                    eventKey: s,
                    onNoticeClose: d,
                    hovering: $ && v.length > 0
                })))
            })
        },
        el = l.forwardRef((e, t) => {
            let {
                prefixCls: n = "rc-notification",
                container: r,
                motion: o,
                maxCount: a,
                className: i,
                style: s,
                onAllRemoved: c,
                stack: d,
                renderNotifications: u
            } = e, [p, m] = l.useState([]), f = e => {
                let t = p.find(t => t.key === e),
                    n = t ? .closable,
                    {
                        onClose: l
                    } = n && "object" == typeof n ? n : {};
                l ? .(), t ? .onClose ? .(), m(t => t.filter(t => t.key !== e))
            };
            l.useImperativeHandle(t, () => ({
                open: e => {
                    m(t => {
                        let n = [...t],
                            l = n.findIndex(t => t.key === e.key),
                            r = { ...e
                            };
                        return l >= 0 ? (r.times = (t[l] ? .times || 0) + 1, n[l] = r) : (r.times = 0, n.push(r)), a > 0 && n.length > a && (n = n.slice(-a)), n
                    })
                },
                close: e => {
                    f(e)
                },
                destroy: () => {
                    m([])
                }
            }));
            let [g, h] = l.useState({});
            l.useEffect(() => {
                let e = {};
                p.forEach(t => {
                    let {
                        placement: n = "topRight"
                    } = t;
                    n && (e[n] = e[n] || [], e[n].push(t))
                }), Object.keys(g).forEach(t => {
                    e[t] = e[t] || []
                }), h(e)
            }, [p]);
            let v = e => {
                    h(t => {
                        let n = { ...t
                        };
                        return (n[e] || []).length || delete n[e], n
                    })
                },
                b = l.useRef(!1);
            if (l.useEffect(() => {
                    Object.keys(g).length > 0 ? b.current = !0 : b.current && (c ? .(), b.current = !1)
                }, [g]), !r) return null;
            let y = Object.keys(g);
            return (0, Y.createPortal)(l.createElement(l.Fragment, null, y.map(e => {
                let t = g[e],
                    r = l.createElement(en, {
                        key: e,
                        configList: t,
                        placement: e,
                        prefixCls: n,
                        className: i ? .(e),
                        style: s ? .(e),
                        motion: o,
                        onNoticeClose: f,
                        onAllNoticeRemoved: v,
                        stack: d
                    });
                return u ? u(r, {
                    prefixCls: n,
                    key: e
                }) : r
            })), r)
        }),
        er = () => document.body,
        eo = 0;

    function ea(e = {}) {
        let {
            getContainer: t = er,
            motion: n,
            prefixCls: r,
            maxCount: o,
            className: a,
            style: i,
            onAllRemoved: s,
            stack: c,
            renderNotifications: d,
            ...u
        } = e, [p, m] = l.useState(), f = l.useRef(), g = l.createElement(el, {
            container: p,
            ref: f,
            prefixCls: r,
            motion: n,
            maxCount: o,
            className: a,
            style: i,
            onAllRemoved: s,
            stack: c,
            renderNotifications: d
        }), [h, v] = l.useState([]), b = (0, P.useEvent)(e => {
            let t = function(...e) {
                let t = {};
                return e.forEach(e => {
                    e && Object.keys(e).forEach(n => {
                        let l = e[n];
                        void 0 !== l && (t[n] = l)
                    })
                }), t
            }(u, e);
            (null === t.key || void 0 === t.key) && (t.key = `rc-notification-${eo}`, eo += 1), v(e => [...e, {
                type: "open",
                config: t
            }])
        }), y = l.useMemo(() => ({
            open: b,
            close: e => {
                v(t => [...t, {
                    type: "close",
                    key: e
                }])
            },
            destroy: () => {
                v(e => [...e, {
                    type: "destroy"
                }])
            }
        }), []);
        return l.useEffect(() => {
            m(t())
        }), l.useEffect(() => {
            if (f.current && h.length) {
                let e, t;
                h.forEach(e => {
                    switch (e.type) {
                        case "open":
                            f.current.open(e.config);
                            break;
                        case "close":
                            f.current.close(e.key);
                            break;
                        case "destroy":
                            f.current.destroy()
                    }
                }), v(n => (e === n && t || (e = n, t = n.filter(e => !h.includes(e))), t))
            }
        }, [h]), [y, g]
    }
    var ei = e.i(106103),
        es = e.i(75940),
        ec = e.i(122767);
    let ed = (0, y.genStyleHooks)("Message", e => (e => {
            let {
                componentCls: t,
                iconCls: n,
                boxShadow: l,
                colorText: r,
                colorSuccess: o,
                colorError: a,
                colorWarning: i,
                colorInfo: s,
                fontSizeLG: c,
                motionEaseInOutCirc: d,
                motionDurationSlow: u,
                marginXS: p,
                paddingXS: m,
                borderRadiusLG: f,
                zIndexPopup: g,
                contentPadding: h,
                contentBg: v
            } = e, y = `${t}-notice`, $ = new es.Keyframes("MessageMoveIn", {
                "0%": {
                    padding: 0,
                    transform: "translateY(-100%)",
                    opacity: 0
                },
                "100%": {
                    padding: m,
                    transform: "translateY(0)",
                    opacity: 1
                }
            }), x = new es.Keyframes("MessageMoveOut", {
                "0%": {
                    maxHeight: e.height,
                    padding: m,
                    opacity: 1
                },
                "100%": {
                    maxHeight: 0,
                    padding: 0,
                    opacity: 0
                }
            }), S = {
                padding: m,
                textAlign: "center",
                [`${t}-custom-content`]: {
                    display: "flex",
                    alignItems: "center"
                },
                [`${t}-custom-content > ${n}`]: {
                    marginInlineEnd: p,
                    fontSize: c
                },
                [`${y}-content`]: {
                    display: "inline-block",
                    padding: h,
                    background: v,
                    borderRadius: f,
                    boxShadow: l,
                    pointerEvents: "all"
                },
                [`${t}-success > ${n}`]: {
                    color: o
                },
                [`${t}-error > ${n}`]: {
                    color: a
                },
                [`${t}-warning > ${n}`]: {
                    color: i
                },
                [`${t}-info > ${n},
      ${t}-loading > ${n}`]: {
                    color: s
                }
            };
            return [{
                [t]: { ...(0, b.resetComponent)(e),
                    color: r,
                    position: "fixed",
                    top: p,
                    width: "100%",
                    pointerEvents: "none",
                    zIndex: g,
                    [`${t}-move-up`]: {
                        animationFillMode: "forwards"
                    },
                    [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
                        animationName: $,
                        animationDuration: u,
                        animationPlayState: "paused",
                        animationTimingFunction: d
                    },
                    [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
                        animationPlayState: "running"
                    },
                    [`${t}-move-up-leave`]: {
                        animationName: x,
                        animationDuration: u,
                        animationPlayState: "paused",
                        animationTimingFunction: d
                    },
                    [`${t}-move-up-leave${t}-move-up-leave-active`]: {
                        animationPlayState: "running"
                    },
                    "&-rtl": {
                        direction: "rtl",
                        span: {
                            direction: "rtl"
                        }
                    }
                }
            }, {
                [t]: {
                    [`${y}-wrapper`]: { ...S
                    }
                }
            }, {
                [`${t}-notice-pure-panel`]: { ...S,
                    padding: 0,
                    textAlign: "start"
                }
            }]
        })((0, F.mergeToken)(e, {
            height: 150
        })), e => ({
            zIndexPopup: e.zIndexPopupBase + ec.CONTAINER_MAX_OFFSET + 10,
            contentBg: e.colorBgElevated,
            contentPadding: `${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`
        })),
        eu = {
            info: l.createElement(s.default, null),
            success: l.createElement(r.default, null),
            error: l.createElement(o.default, null),
            warning: l.createElement(i.default, null),
            loading: l.createElement(ei.default, null)
        },
        ep = e => {
            let {
                prefixCls: t,
                type: n,
                icon: r,
                children: o,
                classNames: a,
                styles: i
            } = e, s = r || n && eu[n], c = (0, g.cloneElement)(s, e => {
                let t = { ...e ? .style,
                    ...i ? .icon
                };
                return {
                    className: (0, p.clsx)(e.className, a ? .icon),
                    style: t
                }
            });
            return l.createElement("div", {
                className: (0, p.clsx)(`${t}-custom-content`, `${t}-${n}`)
            }, c, l.createElement("span", {
                className: a ? .content,
                style: i ? .content
            }, o))
        };

    function em(e) {
        let t, n = new Promise(n => {
                t = e(() => {
                    n(!0)
                })
            }),
            l = () => {
                t ? .()
            };
        return l.then = (e, t) => n.then(e, t), l.promise = n, l
    }
    let ef = ({
            children: e,
            prefixCls: t
        }) => {
            let n = (0, O.default)(t),
                [r, o] = ed(t, n);
            return l.createElement(ee, {
                classNames: {
                    list: (0, p.clsx)(r, o, n)
                }
            }, e)
        },
        eg = (e, {
            prefixCls: t,
            key: n
        }) => l.createElement(ef, {
            prefixCls: t,
            key: n
        }, e),
        eh = l.forwardRef((e, t) => {
            let {
                top: n,
                prefixCls: r,
                getContainer: o,
                maxCount: a,
                duration: i = 3,
                rtl: s,
                transitionName: c,
                onAllRemoved: d,
                pauseOnHover: u = !0
            } = e, {
                getPrefixCls: f,
                direction: g,
                getPopupContainer: v
            } = (0, h.useComponentConfig)("message"), {
                message: b
            } = l.useContext(h.ConfigContext), y = r || f("message"), [$, x] = (0, m.useMergeSemantic)([e ? .classNames, b ? .classNames], [e ? .styles, b ? .styles], {
                props: e
            }), [S, C] = ea({
                prefixCls: y,
                style: () => ({
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: n ? ? 8
                }),
                className: () => (0, p.clsx)({
                    [`${y}-rtl`]: s ? ? "rtl" === g
                }),
                motion: () => ({
                    motionName: c ? ? `${y}-move-up`
                }),
                closable: !1,
                duration: i,
                getContainer: () => o ? .() || v ? .() || document.body,
                maxCount: a,
                onAllRemoved: d,
                renderNotifications: eg,
                pauseOnHover: u
            });
            return l.useImperativeHandle(t, () => ({ ...S,
                prefixCls: y,
                message: b,
                classNames: $,
                styles: x
            })), C
        }),
        ev = 0;

    function eb(e) {
        let t = l.useRef(null);
        return (0, G.devUseWarning)("Message"), [l.useMemo(() => {
            let n = e => {
                    t.current ? .close(e)
                },
                r = r => {
                    if (!t.current) {
                        let e = () => {};
                        return e.then = () => {}, e
                    }
                    let {
                        open: o,
                        prefixCls: a,
                        message: i,
                        classNames: s,
                        styles: c
                    } = t.current, d = i ? .className || {}, u = i ? .style || {}, g = i ? .classNames || {}, h = i ? .styles || {}, v = `${a}-notice`, {
                        content: b,
                        icon: y,
                        type: $,
                        key: x,
                        className: S,
                        style: C,
                        onClose: k,
                        classNames: E = {},
                        styles: w = {},
                        ...N
                    } = r, I = x;
                    (0, f.default)(I) || (ev += 1, I = `antd-message-${ev}`);
                    let M = { ...e,
                            ...r
                        },
                        z = (0, m.resolveStyleOrClass)(g, {
                            props: M
                        }),
                        R = (0, m.resolveStyleOrClass)(E, {
                            props: M
                        }),
                        T = (0, m.resolveStyleOrClass)(h, {
                            props: M
                        }),
                        H = (0, m.resolveStyleOrClass)(w, {
                            props: M
                        }),
                        P = (0, m.mergeClassNames)(void 0, z, R, s),
                        L = (0, m.mergeStyles)(T, H, c);
                    return em(e => (o({ ...N,
                        key: I,
                        content: l.createElement(ep, {
                            prefixCls: a,
                            type: $,
                            icon: y,
                            classNames: P,
                            styles: L
                        }, b),
                        placement: "top",
                        className: (0, p.clsx)({
                            [`${v}-${$}`]: $
                        }, S, d, P.root),
                        style: { ...L.root,
                            ...u,
                            ...C
                        },
                        onClose: () => {
                            k ? .(), e()
                        }
                    }), () => {
                        n(I)
                    }))
                },
                o = {
                    open: r,
                    destroy: e => {
                        void 0 !== e ? n(e) : t.current ? .destroy()
                    }
                };
            return ["info", "success", "warning", "error", "loading"].forEach(e => {
                o[e] = (t, n, l) => {
                    let o, a, i;
                    return o = t && "object" == typeof t && "content" in t ? t : {
                        content: t
                    }, "function" == typeof n ? i = n : (a = n, i = l), r({
                        onClose: i,
                        duration: a,
                        ...o,
                        type: e
                    })
                }
            }), o
        }, []), l.createElement(eh, {
            key: "message-holder",
            ...e,
            ref: t
        })]
    }
    var ey = e.i(301483),
        e$ = e.i(563113),
        ex = e.i(104458);
    let eS = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"],
        eC = {
            topLeft: "left",
            topRight: "right",
            bottomLeft: "left",
            bottomRight: "right",
            top: "left",
            bottom: "left"
        },
        ek = e => {
            let {
                iconCls: t,
                componentCls: n,
                boxShadow: l,
                fontSizeLG: r,
                notificationMarginBottom: o,
                borderRadiusLG: a,
                colorSuccess: i,
                colorInfo: s,
                colorWarning: c,
                colorError: d,
                colorTextHeading: u,
                notificationBg: p,
                notificationPadding: m,
                notificationMarginEdge: f,
                progressBg: g,
                notificationProgressHeight: h,
                fontSize: y,
                lineHeight: $,
                width: x,
                notificationIconSize: S,
                colorText: C,
                colorSuccessBg: k,
                colorErrorBg: E,
                colorInfoBg: w,
                colorWarningBg: N
            } = e, I = `${n}-notice`;
            return {
                position: "relative",
                marginBottom: o,
                marginInlineStart: "auto",
                background: p,
                borderRadius: a,
                boxShadow: l,
                [I]: {
                    padding: m,
                    width: x,
                    maxWidth: `calc(100vw - ${(0,v.unit)(e.calc(f).mul(2).equal())})`,
                    lineHeight: $,
                    wordWrap: "break-word",
                    borderRadius: a,
                    overflow: "hidden",
                    "&-success": k ? {
                        background: k
                    } : {},
                    "&-error": E ? {
                        background: E
                    } : {},
                    "&-info": w ? {
                        background: w
                    } : {},
                    "&-warning": N ? {
                        background: N
                    } : {}
                },
                [`${I}-title`]: {
                    marginBottom: e.marginXS,
                    color: u,
                    fontSize: r,
                    lineHeight: e.lineHeightLG
                },
                [`${I}-description`]: {
                    fontSize: y,
                    color: C,
                    marginTop: e.marginXS
                },
                [`${I}-closable ${I}-title`]: {
                    paddingInlineEnd: e.paddingLG
                },
                [`${I}-with-icon ${I}-title`]: {
                    marginBottom: e.marginXS,
                    marginInlineStart: e.calc(e.marginSM).add(S).equal(),
                    fontSize: r
                },
                [`${I}-with-icon ${I}-description`]: {
                    marginInlineStart: e.calc(e.marginSM).add(S).equal(),
                    fontSize: y
                },
                [`${I}-icon`]: {
                    position: "absolute",
                    fontSize: S,
                    lineHeight: 1,
                    [`&-success${t}`]: {
                        color: i
                    },
                    [`&-info${t}`]: {
                        color: s
                    },
                    [`&-warning${t}`]: {
                        color: c
                    },
                    [`&-error${t}`]: {
                        color: d
                    }
                },
                [`${I}-close`]: {
                    position: "absolute",
                    top: e.notificationPaddingVertical,
                    insetInlineEnd: e.notificationPaddingHorizontal,
                    color: e.colorIcon,
                    outline: "none",
                    width: e.notificationCloseButtonSize,
                    height: e.notificationCloseButtonSize,
                    borderRadius: e.borderRadiusSM,
                    transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "none",
                    border: "none",
                    "&:hover": {
                        color: e.colorIconHover,
                        backgroundColor: e.colorBgTextHover
                    },
                    "&:active": {
                        backgroundColor: e.colorBgTextActive
                    },
                    ...(0, b.genFocusStyle)(e)
                },
                [`${I}-progress`]: {
                    position: "absolute",
                    display: "block",
                    appearance: "none",
                    inlineSize: `calc(100% - ${(0,v.unit)(a)} * 2)`,
                    left: {
                        _skip_check_: !0,
                        value: a
                    },
                    right: {
                        _skip_check_: !0,
                        value: a
                    },
                    bottom: 0,
                    blockSize: h,
                    border: 0,
                    "&, &::-webkit-progress-bar": {
                        borderRadius: a,
                        backgroundColor: "rgba(0, 0, 0, 0.04)"
                    },
                    "&::-moz-progress-bar": {
                        background: g
                    },
                    "&::-webkit-progress-value": {
                        borderRadius: a,
                        background: g
                    }
                },
                [`${I}-actions`]: {
                    float: "right",
                    marginTop: e.marginSM
                }
            }
        },
        eE = e => ({
            zIndexPopup: e.zIndexPopupBase + ec.CONTAINER_MAX_OFFSET + 50,
            width: 384,
            progressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`,
            colorSuccessBg: void 0,
            colorErrorBg: void 0,
            colorInfoBg: void 0,
            colorWarningBg: void 0
        }),
        ew = e => {
            let t = e.paddingMD,
                n = e.paddingLG;
            return (0, F.mergeToken)(e, {
                notificationBg: e.colorBgElevated,
                notificationPaddingVertical: t,
                notificationPaddingHorizontal: n,
                notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
                notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(.55).equal(),
                notificationMarginBottom: e.margin,
                notificationPadding: `${(0,v.unit)(e.paddingMD)} ${(0,v.unit)(e.paddingContentHorizontalLG)}`,
                notificationMarginEdge: e.marginLG,
                animationMaxHeight: 150,
                notificationStackLayer: 3,
                notificationProgressHeight: 2
            })
        },
        eN = (0, y.genStyleHooks)("Notification", e => {
            let t = ew(e);
            return [(e => {
                let {
                    componentCls: t,
                    notificationMarginBottom: n,
                    notificationMarginEdge: l,
                    motionDurationMid: r,
                    motionEaseInOut: o
                } = e, a = `${t}-notice`, i = new es.Keyframes("antNotificationFadeOut", {
                    "0%": {
                        maxHeight: e.animationMaxHeight,
                        marginBottom: n
                    },
                    "100%": {
                        maxHeight: 0,
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        opacity: 0
                    }
                });
                return [{
                    [t]: { ...(0, b.resetComponent)(e),
                        position: "fixed",
                        zIndex: e.zIndexPopup,
                        marginRight: {
                            value: l,
                            _skip_check_: !0
                        },
                        [`${t}-hook-holder`]: {
                            position: "relative"
                        },
                        [`${t}-fade-appear-prepare`]: {
                            opacity: "0 !important"
                        },
                        [`${t}-fade-enter, ${t}-fade-appear`]: {
                            animationDuration: e.motionDurationMid,
                            animationTimingFunction: o,
                            animationFillMode: "both",
                            opacity: 0,
                            animationPlayState: "paused"
                        },
                        [`${t}-fade-leave`]: {
                            animationTimingFunction: o,
                            animationFillMode: "both",
                            animationDuration: r,
                            animationPlayState: "paused"
                        },
                        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                            animationPlayState: "running"
                        },
                        [`${t}-fade-leave${t}-fade-leave-active`]: {
                            animationName: i,
                            animationPlayState: "running"
                        },
                        "&-rtl": {
                            direction: "rtl",
                            [`${a}-actions`]: {
                                float: "left"
                            }
                        }
                    }
                }, {
                    [t]: {
                        [`${a}-wrapper`]: ek(e)
                    }
                }]
            })(t), (e => {
                let {
                    componentCls: t,
                    notificationMarginEdge: n,
                    animationMaxHeight: l
                } = e, r = `${t}-notice`, o = new es.Keyframes("antNotificationFadeIn", {
                    "0%": {
                        transform: "translate3d(100%, 0, 0)",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                        opacity: 1
                    }
                });
                return {
                    [t]: {
                        [`&${t}-top, &${t}-bottom`]: {
                            marginInline: 0,
                            [r]: {
                                marginInline: "auto auto"
                            }
                        },
                        [`&${t}-top`]: {
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationName: new es.Keyframes("antNotificationTopFadeIn", {
                                    "0%": {
                                        top: -l,
                                        opacity: 0
                                    },
                                    "100%": {
                                        top: 0,
                                        opacity: 1
                                    }
                                })
                            }
                        },
                        [`&${t}-bottom`]: {
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationName: new es.Keyframes("antNotificationBottomFadeIn", {
                                    "0%": {
                                        bottom: e.calc(l).mul(-1).equal(),
                                        opacity: 0
                                    },
                                    "100%": {
                                        bottom: 0,
                                        opacity: 1
                                    }
                                })
                            }
                        },
                        [`&${t}-topRight, &${t}-bottomRight`]: {
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationName: o
                            }
                        },
                        [`&${t}-topLeft, &${t}-bottomLeft`]: {
                            marginRight: {
                                value: 0,
                                _skip_check_: !0
                            },
                            marginLeft: {
                                value: n,
                                _skip_check_: !0
                            },
                            [r]: {
                                marginInlineEnd: "auto",
                                marginInlineStart: 0
                            },
                            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                                animationName: new es.Keyframes("antNotificationLeftFadeIn", {
                                    "0%": {
                                        transform: "translate3d(-100%, 0, 0)",
                                        opacity: 0
                                    },
                                    "100%": {
                                        transform: "translate3d(0, 0, 0)",
                                        opacity: 1
                                    }
                                })
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t
                } = e;
                return {
                    [`${t}-stack`]: {
                        [`& > ${t}-notice-wrapper`]: {
                            transition: `transform ${e.motionDurationSlow}, backdrop-filter 0s`,
                            willChange: "transform, opacity",
                            position: "absolute",
                            ...(e => {
                                let t = {};
                                for (let n = 1; n < e.notificationStackLayer; n++) t[`&:nth-last-child(${n+1})`] = {
                                    overflow: "hidden",
                                    [`& > ${e.componentCls}-notice`]: {
                                        opacity: 0,
                                        transition: `opacity ${e.motionDurationMid}`
                                    }
                                };
                                return {
                                    [`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]: {
                                        opacity: 0,
                                        overflow: "hidden",
                                        color: "transparent",
                                        pointerEvents: "none"
                                    },
                                    ...t
                                }
                            })(e)
                        }
                    },
                    [`${t}-stack:not(${t}-stack-expanded)`]: {
                        [`& > ${t}-notice-wrapper`]: { ...(e => {
                                let t = {};
                                for (let n = 1; n < e.notificationStackLayer; n++) t[`&:nth-last-child(${n+1})`] = {
                                    background: e.colorBgBlur,
                                    backdropFilter: "blur(10px)",
                                    "-webkit-backdrop-filter": "blur(10px)"
                                };
                                return { ...t
                                }
                            })(e)
                        }
                    },
                    [`${t}-stack${t}-stack-expanded`]: {
                        [`& > ${t}-notice-wrapper`]: {
                            "&:not(:nth-last-child(-n + 1))": {
                                opacity: 1,
                                overflow: "unset",
                                color: "inherit",
                                pointerEvents: "auto",
                                [`& > ${e.componentCls}-notice`]: {
                                    opacity: 1
                                }
                            },
                            "&:after": {
                                content: '""',
                                position: "absolute",
                                height: e.margin,
                                width: "100%",
                                insetInline: 0,
                                bottom: e.calc(e.margin).mul(-1).equal(),
                                background: "transparent",
                                pointerEvents: "auto"
                            }
                        }
                    },
                    ...eS.map(t => ((e, t) => {
                        let {
                            componentCls: n
                        } = e;
                        return {
                            [`${n}-${t}`]: {
                                [`&${n}-stack > ${n}-notice-wrapper`]: {
                                    [t.startsWith("top") ? "top" : "bottom"]: 0,
                                    [eC[t]]: {
                                        value: 0,
                                        _skip_check_: !0
                                    }
                                }
                            }
                        }
                    })(e, t)).reduce((e, t) => ({ ...e,
                        ...t
                    }), {})
                }
            })(t)]
        }, eE),
        eI = (0, y.genSubStyleComponent)(["Notification", "PurePanel"], e => {
            let t = `${e.componentCls}-notice`,
                n = ew(e);
            return {
                [`${t}-pure-panel`]: { ...ek(n),
                    width: n.width,
                    maxWidth: `calc(100vw - ${(0,v.unit)(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
                    margin: 0
                }
            }
        }, eE);

    function eM(e, t) {
        return null === t || !1 === t ? null : t || l.createElement(a.default, {
            className: `${e}-close-icon`
        })
    }
    s.default, r.default, o.default, i.default, ei.default;
    let ez = {
            success: r.default,
            info: s.default,
            error: o.default,
            warning: i.default
        },
        eR = e => {
            let {
                prefixCls: t,
                icon: n,
                type: r,
                title: o,
                description: a,
                actions: i,
                role: s = "alert",
                styles: c,
                classNames: d
            } = e, u = null;
            return n ? u = l.createElement("span", {
                className: (0, p.clsx)(`${t}-icon`, d.icon),
                style: c.icon
            }, n) : r && (u = l.createElement(ez[r] || null, {
                className: (0, p.clsx)(`${t}-icon`, d.icon, `${t}-icon-${r}`),
                style: c.icon
            })), l.createElement("div", {
                className: (0, p.clsx)({
                    [`${t}-with-icon`]: u
                }),
                role: s
            }, u, l.createElement("div", {
                className: (0, p.clsx)(`${t}-title`, d.title),
                style: c.title
            }, o), a && l.createElement("div", {
                className: (0, p.clsx)(`${t}-description`, d.description),
                style: c.description
            }, a), i && l.createElement("div", {
                className: (0, p.clsx)(`${t}-actions`, d.actions),
                style: c.actions
            }, i))
        },
        eT = ({
            children: e,
            prefixCls: t
        }) => {
            let n = (0, O.default)(t),
                [r, o] = eN(t, n);
            return l.default.createElement(ee, {
                classNames: {
                    list: (0, p.clsx)(r, o, n)
                }
            }, e)
        },
        eH = (e, {
            prefixCls: t,
            key: n
        }) => l.default.createElement(eT, {
            prefixCls: t,
            key: n
        }, e),
        eP = l.default.forwardRef((e, t) => {
            let {
                top: n,
                bottom: r,
                prefixCls: o,
                getContainer: a,
                maxCount: i,
                rtl: s,
                onAllRemoved: c,
                stack: d,
                duration: u = 4.5,
                pauseOnHover: f = !0,
                showProgress: g
            } = e, {
                getPrefixCls: v,
                getPopupContainer: b,
                direction: y
            } = (0, h.useComponentConfig)("notification"), {
                notification: $
            } = (0, l.useContext)(h.ConfigContext), [, x] = (0, ex.useToken)(), S = o || v("notification"), C = (0, l.useMemo)(() => "number" == typeof u && u > 0 && u, [u]), [k, E] = ea({
                prefixCls: S,
                style: e => (function(e, t, n) {
                    let l;
                    switch (e) {
                        case "top":
                            l = {
                                left: "50%",
                                transform: "translateX(-50%)",
                                right: "auto",
                                top: t,
                                bottom: "auto"
                            };
                            break;
                        case "topLeft":
                            l = {
                                left: 0,
                                top: t,
                                bottom: "auto"
                            };
                            break;
                        case "topRight":
                            l = {
                                right: 0,
                                top: t,
                                bottom: "auto"
                            };
                            break;
                        case "bottom":
                            l = {
                                left: "50%",
                                transform: "translateX(-50%)",
                                right: "auto",
                                top: "auto",
                                bottom: n
                            };
                            break;
                        case "bottomLeft":
                            l = {
                                left: 0,
                                top: "auto",
                                bottom: n
                            };
                            break;
                        default:
                            l = {
                                right: 0,
                                top: "auto",
                                bottom: n
                            }
                    }
                    return l
                })(e, n ? ? 24, r ? ? 24),
                className: () => (0, p.clsx)({
                    [`${S}-rtl`]: s ? ? "rtl" === y
                }),
                motion: () => ({
                    motionName: `${S}-fade`
                }),
                closable: {
                    closeIcon: eM(S)
                },
                duration: C,
                getContainer: () => a ? .() || b ? .() || document.body,
                maxCount: i,
                pauseOnHover: f,
                showProgress: g,
                onAllRemoved: c,
                renderNotifications: eH,
                stack: !1 !== d && {
                    threshold: "object" == typeof d ? d ? .threshold : void 0,
                    offset: 8,
                    gap: x.margin
                }
            }), [w, N] = (0, m.useMergeSemantic)([$ ? .classNames, e ? .classNames], [$ ? .styles, e ? .styles], {
                props: e
            });
            return l.default.useImperativeHandle(t, () => ({ ...k,
                prefixCls: S,
                notification: $,
                classNames: w,
                styles: N
            })), E
        });

    function eL(e) {
        let t = l.default.useRef(null);
        (0, G.devUseWarning)("Notification");
        let {
            notification: n
        } = l.default.useContext(h.ConfigContext);
        return [l.default.useMemo(() => {
            let r = r => {
                    if (!t.current) return;
                    let {
                        open: o,
                        prefixCls: a,
                        notification: i,
                        classNames: s,
                        styles: c
                    } = t.current, d = i ? .className || {}, u = i ? .style || {}, f = `${a}-notice`, {
                        title: g,
                        message: h,
                        description: v,
                        icon: b,
                        type: y,
                        btn: $,
                        actions: x,
                        className: S,
                        style: C,
                        role: k = "alert",
                        closeIcon: E,
                        closable: w,
                        classNames: N = {},
                        styles: I = {},
                        ...M
                    } = r, z = eM(f, void 0 !== E ? E : void 0 !== e ? .closeIcon ? e.closeIcon : i ? .closeIcon), [R, T, , H] = (0, e$.computeClosable)((0, e$.pickClosable)({ ...e || {},
                        ...r
                    }), (0, e$.pickClosable)(n), {
                        closable: !0,
                        closeIcon: z
                    }), P = !!R && {
                        onClose: w && "object" == typeof w ? w.onClose : void 0,
                        closeIcon: T,
                        ...H
                    }, L = (0, m.resolveStyleOrClass)(N, {
                        props: r
                    }), B = (0, m.resolveStyleOrClass)(I, {
                        props: r
                    }), A = (0, m.mergeClassNames)(void 0, s, L), O = (0, m.mergeStyles)(c, B);
                    return o({
                        placement: e ? .placement ? ? "topRight",
                        ...M,
                        content: l.default.createElement(eR, {
                            prefixCls: f,
                            icon: b,
                            type: y,
                            title: g ? ? h,
                            description: v,
                            actions: x ? ? $,
                            role: k,
                            classNames: A,
                            styles: O
                        }),
                        className: (0, p.clsx)({
                            [`${f}-${y}`]: y
                        }, S, d, A.root),
                        style: { ...u,
                            ...O.root,
                            ...C
                        },
                        closable: P
                    })
                },
                o = {
                    open: r,
                    destroy: e => {
                        void 0 !== e ? t.current ? .close(e) : t.current ? .destroy()
                    }
                };
            return ["success", "info", "warning", "error"].forEach(e => {
                o[e] = t => r({ ...t,
                    type: e
                })
            }), o
        }, [e, n]), l.default.createElement(eP, {
            key: "notification-holder",
            ...e,
            ref: t
        })]
    }
    let eB = l.default.createContext({}),
        eA = l.default.createContext({
            message: {},
            notification: {},
            modal: {}
        }),
        eO = (0, y.genStyleHooks)("App", e => {
            let {
                componentCls: t,
                colorText: n,
                fontSize: l,
                lineHeight: r,
                fontFamily: o
            } = e;
            return {
                [t]: {
                    color: n,
                    fontSize: l,
                    lineHeight: r,
                    fontFamily: o,
                    [`&${t}-rtl`]: {
                        direction: "rtl"
                    }
                }
            }
        }, () => ({})),
        eW = e => {
            let {
                prefixCls: t,
                children: n,
                className: r,
                rootClassName: o,
                message: a,
                notification: i,
                style: s,
                component: c = "div"
            } = e, {
                direction: d,
                getPrefixCls: u
            } = (0, l.useContext)(h.ConfigContext), m = u("app", t), [f, g] = eO(m), v = (0, p.clsx)(f, m, r, o, g, {
                [`${m}-rtl`]: "rtl" === d
            }), b = (0, l.useContext)(eB), y = l.default.useMemo(() => ({
                message: { ...b.message,
                    ...a
                },
                notification: { ...b.notification,
                    ...i
                }
            }), [a, i, b.message, b.notification]), [$, x] = eb(y.message), [S, C] = eL(y.notification), [k, E] = (0, ey.default)(), w = l.default.useMemo(() => ({
                message: $,
                notification: S,
                modal: k
            }), [$, S, k]);
            (0, G.devUseWarning)("App")(!(g && !1 === c), "usage", "When using cssVar, ensure `component` is assigned a valid React component string.");
            let N = !1 === c ? l.default.Fragment : c;
            return l.default.createElement(eA.Provider, {
                value: w
            }, l.default.createElement(eB.Provider, {
                value: y
            }, l.default.createElement(N, { ...!1 === c ? void 0 : {
                    className: v,
                    style: s
                }
            }, E, x, C, n)))
        };
    eW.useApp = () => l.default.useContext(eA);
    var eD = e.i(751095),
        eF = e.i(805484),
        e_ = e.i(327494),
        ej = e.i(943081);
    let {
        Option: eX
    } = e_.default;

    function eq(e) {
        return e ? .type && (e.type.isSelectOption || e.type.isSelectOptGroup)
    }
    let eV = l.forwardRef((e, t) => {
            let n, r, {
                    prefixCls: o,
                    className: a,
                    style: i,
                    popupClassName: s,
                    dropdownClassName: c,
                    children: d,
                    dataSource: u,
                    rootClassName: f,
                    dropdownStyle: g,
                    dropdownRender: v,
                    popupRender: b,
                    onDropdownVisibleChange: y,
                    onOpenChange: $,
                    styles: x,
                    classNames: S
                } = e,
                C = (0, ej.toArray)(d),
                k = b || v,
                E = $ || y;
            1 === C.length && l.isValidElement(C[0]) && !eq(C[0]) && ([n] = C);
            let w = n ? () => n : void 0;
            r = C.length && eq(C[0]) ? d : u ? u.map(e => {
                if (l.isValidElement(e)) return e;
                switch (typeof e) {
                    case "string":
                        return l.createElement(eX, {
                            key: e,
                            value: e
                        }, e);
                    case "object":
                        {
                            let {
                                value: t
                            } = e;
                            return l.createElement(eX, {
                                key: t,
                                value: t
                            }, e.text)
                        }
                    default:
                        return
                }
            }) : [];
            let {
                getPrefixCls: N
            } = l.useContext(h.ConfigContext), I = N("select", o), M = { ...e,
                dataSource: u,
                status: e.status,
                popupMatchSelectWidth: e.popupMatchSelectWidth || e.dropdownMatchSelectWidth,
                popupRender: k,
                onOpenChange: E
            }, [z, R] = (0, m.useMergeSemantic)([S], [x], {
                props: M
            }, {
                popup: {
                    _default: "root"
                }
            }), T = l.useMemo(() => ({
                root: (0, p.clsx)(`${I}-auto-complete`, a, f, z.root, {
                    [`${I}-customize`]: n
                }),
                prefix: z.prefix,
                input: z.input,
                placeholder: z.placeholder,
                content: z.content,
                popup: {
                    root: (0, p.clsx)(s, c, z.popup ? .root),
                    list: z.popup ? .list,
                    listItem: z.popup ? .listItem
                }
            }), [I, a, f, z, s, c]), H = l.useMemo(() => ({
                root: { ...R.root,
                    ...i
                },
                input: R.input,
                prefix: R.prefix,
                placeholder: R.placeholder,
                content: R.content,
                popup: {
                    root: { ...g,
                        ...R.popup ? .root
                    },
                    list: R.popup ? .list,
                    listItem: R.popup ? .listItem
                }
            }), [R, i, g]);
            return l.createElement(e_.default, {
                ref: t,
                suffixIcon: null,
                ...(0, eD.omit)(e, ["dataSource", "dropdownClassName", "popupClassName"]),
                prefixCls: I,
                classNames: T,
                styles: H,
                mode: e_.default.SECRET_COMBOBOX_MODE_DO_NOT_USE,
                popupRender: k,
                onPopupVisibleChange: E,
                getInputElement: w
            }, r)
        }),
        {
            Option: eG
        } = e_.default,
        eY = (0, eF.default)(eV, "popupAlign", e => (0, eD.omit)(e, ["visible"]));
    eV.Option = eG, eV._InternalPanelDoNotUseOrYouWillBeFired = eY;
    var eU = e.i(965760);
    let eK = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"
                }
            }]
        },
        name: "vertical-align-top",
        theme: "outlined"
    };
    var eQ = e.i(406575);

    function eZ() {
        return (eZ = Object.assign.bind()).apply(this, arguments)
    }
    let eJ = l.forwardRef((e, t) => l.createElement(eQ.default, eZ({}, e, {
        ref: t,
        icon: eK
    })));
    var e0 = e.i(180573),
        e1 = e.i(806318);
    let e2 = (0, y.genStyleHooks)("BackTop", e => {
        let {
            fontSizeHeading3: t,
            colorTextDescription: n,
            colorTextLightSolid: l,
            colorText: r,
            controlHeightLG: o,
            calc: a
        } = e, i = (0, F.mergeToken)(e, {
            backTopBackground: n,
            backTopColor: l,
            backTopHoverBackground: r,
            backTopFontSize: t,
            backTopSize: o,
            backTopBlockEnd: a(o).mul(1.25).equal(),
            backTopInlineEnd: a(o).mul(2.5).equal(),
            backTopInlineEndMD: a(o).mul(1.5).equal(),
            backTopInlineEndXS: a(o).mul(.5).equal()
        });
        return [(e => {
            let {
                componentCls: t,
                backTopFontSize: n,
                backTopSize: l,
                zIndexPopup: r
            } = e;
            return {
                [t]: { ...(0, b.resetComponent)(e),
                    position: "fixed",
                    insetInlineEnd: e.backTopInlineEnd,
                    insetBlockEnd: e.backTopBlockEnd,
                    zIndex: r,
                    width: 40,
                    height: 40,
                    cursor: "pointer",
                    "&:empty": {
                        display: "none"
                    },
                    [`${t}-content`]: {
                        width: l,
                        height: l,
                        overflow: "hidden",
                        color: e.backTopColor,
                        textAlign: "center",
                        backgroundColor: e.backTopBackground,
                        borderRadius: l,
                        transition: `all ${e.motionDurationMid}`,
                        "&:hover": {
                            backgroundColor: e.backTopHoverBackground,
                            transition: `all ${e.motionDurationMid}`
                        }
                    },
                    [`${t}-icon`]: {
                        fontSize: n,
                        lineHeight: (0, v.unit)(l)
                    }
                }
            }
        })(i), (e => {
            let {
                componentCls: t,
                screenMD: n,
                screenXS: l,
                backTopInlineEndMD: r,
                backTopInlineEndXS: o
            } = e;
            return {
                [`@media (max-width: ${(0,v.unit)(n)})`]: {
                    [t]: {
                        insetInlineEnd: r
                    }
                },
                [`@media (max-width: ${(0,v.unit)(l)})`]: {
                    [t]: {
                        insetInlineEnd: o
                    }
                }
            }
        })(i)]
    }, e => ({
        zIndexPopup: e.zIndexBase + 10
    }));
    var e3 = e.i(702779);
    let e5 = e => {
            let t, {
                prefixCls: n,
                value: r,
                current: o,
                offset: a = 0
            } = e;
            return a && (t = {
                position: "absolute",
                top: `${a}00%`,
                left: 0
            }), l.createElement("span", {
                style: t,
                className: (0, p.clsx)(`${n}-only-unit`, {
                    current: o
                })
            }, r)
        },
        e4 = e => {
            let t, n, {
                    prefixCls: r,
                    count: o,
                    value: a
                } = e,
                i = Number(a),
                s = Math.abs(o),
                [c, d] = l.useState(i),
                [u, p] = l.useState(s),
                m = () => {
                    d(i), p(s)
                };
            if (l.useEffect(() => {
                    let e = setTimeout(m, 1e3);
                    return () => clearTimeout(e)
                }, [i]), c === i || Number.isNaN(i) || Number.isNaN(c)) t = [l.createElement(e5, { ...e,
                key: i,
                current: !0
            })], n = {
                transition: "none"
            };
            else {
                t = [];
                let r = i + 10,
                    o = [];
                for (let e = i; e <= r; e += 1) o.push(e);
                let a = u < s ? 1 : -1,
                    d = o.findIndex(e => e % 10 === c);
                t = (a < 0 ? o.slice(0, d + 1) : o.slice(d)).map((t, n) => l.createElement(e5, { ...e,
                    key: t,
                    value: t % 10,
                    offset: a < 0 ? n - d : n,
                    current: n === d
                })), n = {
                    transform: `translateY(${-function(e,t,n){let l=e,r=0;for(;(l+10)%10!==t;)l+=n,r+=n;return r}(c,i,a)}00%)`
                }
            }
            return l.createElement("span", {
                className: `${r}-only`,
                style: n,
                onTransitionEnd: m
            }, t)
        },
        e8 = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                count: r,
                className: o,
                motionClassName: a,
                style: i,
                title: s,
                show: c,
                component: d = "sup",
                children: u,
                ...m
            } = e, {
                getPrefixCls: f
            } = l.useContext(h.ConfigContext), v = f("scroll-number", n), b = { ...m,
                "data-show": c,
                style: i,
                className: (0, p.clsx)(v, o, a),
                title: s
            }, y = r;
            if (r && Number(r) % 1 == 0) {
                let e = String(r).split("");
                y = l.createElement("bdi", null, e.map((t, n) => l.createElement(e4, {
                    prefixCls: v,
                    count: Number(r),
                    value: t,
                    key: e.length - n
                })))
            }
            return (i ? .borderColor && (b.style = { ...i,
                boxShadow: `0 0 0 1px ${i.borderColor} inset`
            }), u) ? (0, g.cloneElement)(u, e => ({
                className: (0, p.clsx)(`${v}-custom-component`, e ? .className, a)
            })) : l.createElement(d, { ...b,
                ref: t
            }, y)
        });
    var e6 = e.i(403541);
    let e9 = new es.Keyframes("antStatusProcessing", {
            "0%": {
                transform: "scale(0.8)",
                opacity: .5
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0
            }
        }),
        e7 = new es.Keyframes("antZoomBadgeIn", {
            "0%": {
                transform: "scale(0) translate(50%, -50%)",
                opacity: 0
            },
            "100%": {
                transform: "scale(1) translate(50%, -50%)"
            }
        }),
        te = new es.Keyframes("antZoomBadgeOut", {
            "0%": {
                transform: "scale(1) translate(50%, -50%)"
            },
            "100%": {
                transform: "scale(0) translate(50%, -50%)",
                opacity: 0
            }
        }),
        tt = new es.Keyframes("antNoWrapperZoomBadgeIn", {
            "0%": {
                transform: "scale(0)",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)"
            }
        }),
        tn = new es.Keyframes("antNoWrapperZoomBadgeOut", {
            "0%": {
                transform: "scale(1)"
            },
            "100%": {
                transform: "scale(0)",
                opacity: 0
            }
        }),
        tl = new es.Keyframes("antBadgeLoadingCircle", {
            "0%": {
                transformOrigin: "50%"
            },
            "100%": {
                transform: "translate(50%, -50%) rotate(360deg)",
                transformOrigin: "50%"
            }
        }),
        tr = e => {
            let {
                fontHeight: t,
                lineWidth: n,
                marginXS: l,
                colorBorderBg: r
            } = e, o = e.colorTextLightSolid, a = e.colorError, i = e.colorErrorHover;
            return (0, F.mergeToken)(e, {
                badgeFontHeight: t,
                badgeShadowSize: n,
                badgeTextColor: o,
                badgeColor: a,
                badgeColorHover: i,
                badgeShadowColor: r,
                badgeProcessingDuration: "1.2s",
                badgeRibbonOffset: l,
                badgeRibbonCornerTransform: "scaleY(0.75)",
                badgeRibbonCornerFilter: "brightness(75%)"
            })
        },
        to = e => {
            let {
                fontSize: t,
                lineHeight: n,
                fontSizeSM: l,
                lineWidth: r
            } = e;
            return {
                indicatorZIndex: "auto",
                indicatorHeight: Math.round(t * n) - 2 * r,
                indicatorHeightSM: t,
                dotSize: l / 2,
                textFontSize: l,
                textFontSizeSM: l,
                textFontWeight: "normal",
                statusSize: l / 2
            }
        },
        ta = (0, y.genStyleHooks)("Badge", e => (e => {
            let {
                componentCls: t,
                iconCls: n,
                antCls: l,
                badgeShadowSize: r,
                textFontSize: o,
                textFontSizeSM: a,
                statusSize: i,
                dotSize: s,
                textFontWeight: c,
                indicatorHeight: d,
                indicatorHeightSM: u,
                marginXS: p,
                calc: m
            } = e, f = `${l}-scroll-number`, g = (0, e6.genPresetColor)(e, (e, {
                darkColor: n
            }) => ({
                [`&${t} ${t}-color-${e}`]: {
                    background: n,
                    [`&:not(${t}-count)`]: {
                        color: n
                    },
                    "a:hover &": {
                        background: n
                    }
                }
            }));
            return {
                [t]: { ...(0, b.resetComponent)(e),
                    position: "relative",
                    display: "inline-block",
                    width: "fit-content",
                    lineHeight: 1,
                    [`${t}-count`]: {
                        display: "inline-flex",
                        justifyContent: "center",
                        zIndex: e.indicatorZIndex,
                        minWidth: d,
                        height: d,
                        color: e.badgeTextColor,
                        fontWeight: c,
                        fontSize: o,
                        lineHeight: (0, v.unit)(d),
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        background: e.badgeColor,
                        borderRadius: m(d).div(2).equal(),
                        boxShadow: `0 0 0 ${(0,v.unit)(r)} ${e.badgeShadowColor}`,
                        transition: `background ${e.motionDurationMid}`,
                        a: {
                            color: e.badgeTextColor
                        },
                        "a:hover": {
                            color: e.badgeTextColor
                        },
                        "a:hover &": {
                            background: e.badgeColorHover
                        }
                    },
                    [`${t}-count-sm`]: {
                        minWidth: u,
                        height: u,
                        fontSize: a,
                        lineHeight: (0, v.unit)(u),
                        borderRadius: m(u).div(2).equal()
                    },
                    [`${t}-multiple-words`]: {
                        padding: `0 ${(0,v.unit)(e.paddingXS)}`,
                        bdi: {
                            unicodeBidi: "plaintext"
                        }
                    },
                    [`${t}-dot`]: {
                        zIndex: e.indicatorZIndex,
                        width: s,
                        minWidth: s,
                        height: s,
                        background: e.badgeColor,
                        borderRadius: "100%",
                        boxShadow: `0 0 0 ${(0,v.unit)(r)} ${e.badgeShadowColor}`
                    },
                    [`${t}-count, ${t}-dot, ${f}-custom-component`]: {
                        position: "absolute",
                        top: 0,
                        insetInlineEnd: 0,
                        transform: "translate(50%, -50%)",
                        transformOrigin: "100% 0%",
                        [`&${n}-spin`]: {
                            animationName: tl,
                            animationDuration: "1s",
                            animationIterationCount: "infinite",
                            animationTimingFunction: "linear"
                        }
                    },
                    [`&${t}-status`]: {
                        lineHeight: "inherit",
                        verticalAlign: "baseline",
                        [`${t}-status-dot`]: {
                            position: "relative",
                            top: -1,
                            display: "inline-block",
                            width: i,
                            height: i,
                            verticalAlign: "middle",
                            borderRadius: "50%"
                        },
                        [`${t}-status-success`]: {
                            backgroundColor: e.colorSuccess
                        },
                        [`${t}-status-processing`]: {
                            overflow: "visible",
                            color: e.colorInfo,
                            backgroundColor: e.colorInfo,
                            borderColor: "currentcolor",
                            "&::after": {
                                position: "absolute",
                                top: 0,
                                insetInlineStart: 0,
                                width: "100%",
                                height: "100%",
                                borderWidth: r,
                                borderStyle: "solid",
                                borderColor: "inherit",
                                borderRadius: "50%",
                                animationName: e9,
                                animationDuration: e.badgeProcessingDuration,
                                animationIterationCount: "infinite",
                                animationTimingFunction: "ease-in-out",
                                content: '""'
                            }
                        },
                        [`${t}-status-default`]: {
                            backgroundColor: e.colorTextPlaceholder
                        },
                        [`${t}-status-error`]: {
                            backgroundColor: e.colorError
                        },
                        [`${t}-status-warning`]: {
                            backgroundColor: e.colorWarning
                        },
                        [`${t}-status-text`]: {
                            marginInlineStart: p,
                            color: e.colorText,
                            fontSize: e.fontSize
                        }
                    },
                    ...g,
                    [`${t}-zoom-appear, ${t}-zoom-enter`]: {
                        animationName: e7,
                        animationDuration: e.motionDurationSlow,
                        animationTimingFunction: e.motionEaseOutBack,
                        animationFillMode: "both"
                    },
                    [`${t}-zoom-leave`]: {
                        animationName: te,
                        animationDuration: e.motionDurationSlow,
                        animationTimingFunction: e.motionEaseOutBack,
                        animationFillMode: "both"
                    },
                    [`&${t}-not-a-wrapper`]: {
                        [`${t}-zoom-appear, ${t}-zoom-enter`]: {
                            animationName: tt,
                            animationDuration: e.motionDurationSlow,
                            animationTimingFunction: e.motionEaseOutBack
                        },
                        [`${t}-zoom-leave`]: {
                            animationName: tn,
                            animationDuration: e.motionDurationSlow,
                            animationTimingFunction: e.motionEaseOutBack
                        },
                        [`&:not(${t}-status)`]: {
                            verticalAlign: "middle"
                        },
                        [`${f}-custom-component, ${t}-count`]: {
                            transform: "none"
                        },
                        [`${f}-custom-component, ${f}`]: {
                            position: "relative",
                            top: "auto",
                            display: "block",
                            transformOrigin: "50% 50%"
                        }
                    },
                    [f]: {
                        overflow: "hidden",
                        transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack}`,
                        [`${f}-only`]: {
                            position: "relative",
                            display: "inline-block",
                            height: d,
                            transition: `all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,
                            WebkitTransformStyle: "preserve-3d",
                            WebkitBackfaceVisibility: "hidden",
                            [`> p${f}-only-unit`]: {
                                height: d,
                                margin: 0,
                                WebkitTransformStyle: "preserve-3d",
                                WebkitBackfaceVisibility: "hidden"
                            }
                        },
                        [`${f}-symbol`]: {
                            verticalAlign: "top"
                        }
                    },
                    "&-rtl": {
                        direction: "rtl",
                        [`${t}-count, ${t}-dot, ${f}-custom-component`]: {
                            transform: "translate(-50%, -50%)"
                        }
                    }
                }
            }
        })(tr(e)), to),
        ti = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                scrollNumberPrefixCls: r,
                children: o,
                status: a,
                text: i,
                color: s,
                count: d = null,
                overflowCount: u = 99,
                dot: v = !1,
                size: b = "default",
                title: y,
                offset: $,
                style: x,
                className: S,
                rootClassName: C,
                classNames: k,
                styles: E,
                showZero: w = !1,
                ...N
            } = e, {
                getPrefixCls: I,
                direction: M,
                className: z,
                style: R,
                classNames: T,
                styles: H
            } = (0, h.useComponentConfig)("badge"), P = I("badge", n), [L, B] = ta(P), A = { ...e,
                overflowCount: u,
                size: b,
                dot: v,
                showZero: w
            }, [O, W] = (0, m.useMergeSemantic)([T, k], [H, E], {
                props: A
            }), D = d > u ? `${u}+` : d, F = "0" === D || 0 === D || "0" === i || 0 === i, _ = null === d || F && !w, j = ((0, f.default)(a) || (0, f.default)(s)) && _, X = (0, f.default)(a) || !F, q = v && !F, V = q ? "" : D, G = (0, l.useMemo)(() => ((!(0, f.default)(V) || "" === V) && (!(0, f.default)(i) || "" === i) || F && !w) && !q, [V, F, w, q, i]), Y = (0, l.useRef)(d);
            G || (Y.current = d);
            let U = Y.current,
                K = (0, l.useRef)(V);
            G || (K.current = V);
            let Q = K.current,
                Z = (0, l.useRef)(q);
            G || (Z.current = q);
            let J = (0, l.useMemo)(() => {
                    if (!$) return { ...R,
                        ...x
                    };
                    let e = Number.parseInt($[0], 10);
                    return { ...{
                            marginTop: $[1],
                            insetInlineEnd: -e
                        },
                        ...R,
                        ...x
                    }
                }, [$, x, R]),
                ee = y ? ? ("string" == typeof U || "number" == typeof U ? U : void 0),
                et = !G && (0 === i ? w : !!i && !0 !== i),
                en = et ? l.createElement("span", {
                    className: `${P}-status-text`
                }, i) : null,
                el = U && "object" == typeof U ? (0, g.cloneElement)(U, e => ({
                    style: { ...J,
                        ...e.style
                    }
                })) : void 0,
                er = (0, e3.isPresetColor)(s, !1),
                eo = (0, p.clsx)(O.indicator, {
                    [`${P}-status-dot`]: j,
                    [`${P}-status-${a}`]: !!a,
                    [`${P}-color-${s}`]: er
                }),
                ea = {};
            s && !er && (ea.color = s, ea.background = s);
            let ei = (0, p.clsx)(P, {
                [`${P}-status`]: j,
                [`${P}-not-a-wrapper`]: !o,
                [`${P}-rtl`]: "rtl" === M
            }, S, C, z, O.root, L, B);
            if (!o && j && (i || X || !_)) {
                let e = J.color;
                return l.createElement("span", { ...N,
                    className: ei,
                    style: { ...W.root,
                        ...J
                    }
                }, l.createElement("span", {
                    className: eo,
                    style: { ...W.indicator,
                        ...ea
                    }
                }), et && l.createElement("span", {
                    style: {
                        color: e
                    },
                    className: `${P}-status-text`
                }, i))
            }
            return l.createElement("span", {
                ref: t,
                ...N,
                className: ei,
                style: W.root
            }, o, l.createElement(c.default, {
                visible: !G,
                motionName: `${P}-zoom`,
                motionAppear: !1,
                motionDeadline: 1e3
            }, ({
                className: e
            }) => {
                let t = I("scroll-number", r),
                    n = Z.current,
                    o = (0, p.clsx)(O.indicator, {
                        [`${P}-dot`]: n,
                        [`${P}-count`]: !n,
                        [`${P}-count-sm`]: "small" === b,
                        [`${P}-multiple-words`]: !n && Q && Q.toString().length > 1,
                        [`${P}-status-${a}`]: !!a,
                        [`${P}-color-${s}`]: er
                    }),
                    i = { ...W.indicator,
                        ...J
                    };
                return s && !er && ((i = i || {}).background = s), l.createElement(e8, {
                    prefixCls: t,
                    show: !G,
                    motionClassName: e,
                    className: o,
                    count: Q,
                    title: ee,
                    style: i,
                    key: "scrollNumber"
                }, el)
            }), en)
        }),
        ts = (0, y.genStyleHooks)(["Badge", "Ribbon"], e => (e => {
            let {
                antCls: t,
                badgeFontHeight: n,
                marginXS: l,
                badgeRibbonOffset: r,
                calc: o
            } = e, a = `${t}-ribbon`, i = `${t}-ribbon-wrapper`, s = (0, e6.genPresetColor)(e, (e, {
                darkColor: t
            }) => ({
                [`&${a}-color-${e}`]: {
                    background: t,
                    color: t
                }
            }));
            return {
                [i]: {
                    position: "relative"
                },
                [a]: { ...(0, b.resetComponent)(e),
                    position: "absolute",
                    top: l,
                    padding: `0 ${(0,v.unit)(e.paddingXS)}`,
                    color: e.colorPrimary,
                    lineHeight: (0, v.unit)(n),
                    whiteSpace: "nowrap",
                    backgroundColor: e.colorPrimary,
                    borderRadius: e.borderRadiusSM,
                    [`${a}-content`]: {
                        color: e.badgeTextColor
                    },
                    [`${a}-corner`]: {
                        position: "absolute",
                        top: "100%",
                        width: r,
                        height: r,
                        color: "currentcolor",
                        border: `${(0,v.unit)(o(r).div(2).equal())} solid`,
                        transform: e.badgeRibbonCornerTransform,
                        transformOrigin: "top",
                        filter: e.badgeRibbonCornerFilter
                    },
                    ...s,
                    [`&${a}-placement-end`]: {
                        insetInlineEnd: o(r).mul(-1).equal(),
                        borderEndEndRadius: 0,
                        [`${a}-corner`]: {
                            insetInlineEnd: 0,
                            borderInlineEndColor: "transparent",
                            borderBlockEndColor: "transparent"
                        }
                    },
                    [`&${a}-placement-start`]: {
                        insetInlineStart: o(r).mul(-1).equal(),
                        borderEndStartRadius: 0,
                        [`${a}-corner`]: {
                            insetInlineStart: 0,
                            borderBlockEndColor: "transparent",
                            borderInlineStartColor: "transparent"
                        }
                    },
                    "&-rtl": {
                        direction: "rtl"
                    }
                }
            }
        })(tr(e)), to);
    ti.Ribbon = e => {
        let {
            className: t,
            prefixCls: n,
            style: r,
            color: o,
            children: a,
            text: i,
            placement: s = "end",
            rootClassName: c,
            styles: d,
            classNames: u
        } = e, {
            getPrefixCls: f,
            direction: g,
            className: v,
            style: b,
            classNames: y,
            styles: $
        } = (0, h.useComponentConfig)("ribbon"), x = f("ribbon", n), S = `${x}-wrapper`, [C, k] = ts(x, S), E = { ...e,
            placement: s
        }, [w, N] = (0, m.useMergeSemantic)([y, u], [$, d], {
            props: E
        }), I = (0, e3.isPresetColor)(o, !1), M = (0, p.clsx)(x, `${x}-placement-${s}`, {
            [`${x}-rtl`]: "rtl" === g,
            [`${x}-color-${o}`]: I
        }, t, v, w.indicator), z = {}, R = {};
        return o && !I && (z.background = o, R.color = o), l.createElement("div", {
            className: (0, p.clsx)(S, c, C, k, w.root),
            style: N.root
        }, a, l.createElement("div", {
            className: (0, p.clsx)(M, C),
            style: { ...z,
                ...N.indicator,
                ...b,
                ...r
            }
        }, l.createElement("span", {
            className: (0, p.clsx)(`${x}-content`, w.content),
            style: N.content
        }, i), l.createElement("div", {
            className: `${x}-corner`,
            style: R
        })))
    };
    var tc = e.i(739217),
        td = e.i(920228),
        tu = e.i(997252);
    e.i(399101);
    var tp = e.i(904046),
        tp = tp,
        tm = e.i(30294),
        tf = e.i(408850),
        tg = e.i(62139),
        th = e.i(456328),
        th = th,
        tv = e.i(560006),
        tv = tv;

    function tb(e) {
        let {
            fullscreen: t,
            validRange: n,
            generateConfig: r,
            locale: o,
            prefixCls: a,
            value: i,
            onChange: s,
            divRef: c
        } = e, d = r.getYear(i || r.getNow()), u = d - 10, p = u + 20;
        n && (u = r.getYear(n[0]), p = r.getYear(n[1]) + 1);
        let m = o && "年" === o.year ? "年" : "",
            f = [];
        for (let e = u; e < p; e++) f.push({
            label: `${e}${m}`,
            value: e
        });
        return l.createElement(e_.default, {
            size: t ? void 0 : "small",
            options: f,
            value: d,
            className: `${a}-year-select`,
            onChange: e => {
                let t = r.setYear(i, e);
                if (n) {
                    let [e, l] = n, o = r.getYear(t), a = r.getMonth(t);
                    o === r.getYear(l) && a > r.getMonth(l) && (t = r.setMonth(t, r.getMonth(l))), o === r.getYear(e) && a < r.getMonth(e) && (t = r.setMonth(t, r.getMonth(e)))
                }
                s(t)
            },
            getPopupContainer: () => c.current
        })
    }

    function ty(e) {
        let {
            prefixCls: t,
            fullscreen: n,
            validRange: r,
            value: o,
            generateConfig: a,
            locale: i,
            onChange: s,
            divRef: c
        } = e, d = a.getMonth(o || a.getNow()), u = 0, p = 11;
        if (r) {
            let [e, t] = r, n = a.getYear(o);
            a.getYear(t) === n && (p = a.getMonth(t)), a.getYear(e) === n && (u = a.getMonth(e))
        }
        let m = i.shortMonths || a.locale.getShortMonths(i.locale),
            f = [];
        for (let e = u; e <= p; e += 1) f.push({
            label: m[e],
            value: e
        });
        return l.createElement(e_.default, {
            size: n ? void 0 : "small",
            className: `${t}-month-select`,
            value: d,
            options: f,
            onChange: e => {
                s(a.setMonth(o, e))
            },
            getPopupContainer: () => c.current
        })
    }

    function t$(e) {
        let {
            prefixCls: t,
            locale: n,
            mode: r,
            fullscreen: o,
            onModeChange: a
        } = e;
        return l.createElement(tv.default, {
            onChange: ({
                target: {
                    value: e
                }
            }) => {
                a(e)
            },
            value: r,
            size: o ? void 0 : "small",
            className: `${t}-mode-switch`
        }, l.createElement(th.default, {
            value: "month"
        }, n.month), l.createElement(th.default, {
            value: "year"
        }, n.year))
    }
    let tx = function(e) {
        let {
            prefixCls: t,
            fullscreen: n,
            mode: r,
            onChange: o,
            onModeChange: a,
            className: i,
            style: s
        } = e, c = l.useRef(null), d = (0, l.useContext)(tg.FormItemInputContext), u = (0, l.useMemo)(() => ({ ...d,
            isFormItemInput: !1
        }), [d]), m = { ...e,
            fullscreen: n,
            divRef: c
        };
        return l.createElement("div", {
            className: (0, p.clsx)(`${t}-header`, i),
            style: s,
            ref: c
        }, l.createElement(tg.FormItemInputContext.Provider, {
            value: u
        }, l.createElement(tb, { ...m,
            onChange: e => {
                o(e, "year")
            }
        }), "month" === r && l.createElement(ty, { ...m,
            onChange: e => {
                o(e, "month")
            }
        })), l.createElement(t$, { ...m,
            onModeChange: a
        }))
    };
    var tS = e.i(204142),
        tC = e.i(714288),
        tk = e.i(621828);
    let tE = (0, y.genStyleHooks)("Calendar", e => {
            let t = `${e.componentCls}-calendar`;
            return (e => {
                let {
                    calendarCls: t,
                    componentCls: n,
                    fullBg: l,
                    fullPanelBg: r,
                    itemActiveBg: o
                } = e;
                return {
                    [t]: { ...(0, tC.genPanelStyle)(e),
                        ...(0, b.resetComponent)(e),
                        background: l,
                        "&-rtl": {
                            direction: "rtl"
                        },
                        [`${t}-header`]: {
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: `${(0,v.unit)(e.paddingSM)} 0`,
                            [`${t}-year-select`]: {
                                minWidth: e.yearControlWidth
                            },
                            [`${t}-month-select`]: {
                                minWidth: e.monthControlWidth,
                                marginInlineStart: e.marginXS
                            },
                            [`${t}-mode-switch`]: {
                                marginInlineStart: e.marginXS
                            }
                        }
                    },
                    [`${t} ${n}-panel`]: {
                        background: r,
                        border: 0,
                        borderTop: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                        borderRadius: 0,
                        [`${n}-month-panel, ${n}-date-panel`]: {
                            width: "auto"
                        },
                        [`${n}-body`]: {
                            padding: `${(0,v.unit)(e.paddingXS)} 0`
                        },
                        [`${n}-content`]: {
                            width: "100%"
                        }
                    },
                    [`${t}-mini`]: {
                        borderRadius: e.borderRadiusLG,
                        [`${t}-header`]: {
                            paddingInlineEnd: e.paddingXS,
                            paddingInlineStart: e.paddingXS
                        },
                        [`${n}-panel`]: {
                            borderRadius: `0 0 ${(0,v.unit)(e.borderRadiusLG)} ${(0,v.unit)(e.borderRadiusLG)}`
                        },
                        [`${n}-content`]: {
                            height: e.miniContentHeight,
                            th: {
                                height: "auto",
                                padding: 0,
                                lineHeight: (0, v.unit)(e.weekHeight)
                            }
                        },
                        [`${n}-cell::before`]: {
                            pointerEvents: "none"
                        }
                    },
                    [`${t}${t}-full`]: {
                        [`${n}-panel`]: {
                            display: "block",
                            width: "100%",
                            textAlign: "end",
                            background: l,
                            border: 0,
                            [`${n}-body`]: {
                                "th, td": {
                                    padding: 0
                                },
                                th: {
                                    height: "auto",
                                    paddingInlineEnd: e.paddingSM,
                                    paddingBottom: e.paddingXXS,
                                    lineHeight: (0, v.unit)(e.weekHeight)
                                }
                            }
                        },
                        [`${n}-cell-week ${n}-cell-inner`]: {
                            display: "block",
                            borderRadius: 0,
                            borderTop: `${(0,v.unit)(e.lineWidthBold)} ${e.lineType} ${e.colorSplit}`,
                            width: "100%",
                            height: e.calc(e.dateValueHeight).add(e.dateContentHeight).add(e.calc(e.paddingXS).div(2)).add(e.lineWidthBold).equal()
                        },
                        [`${n}-cell`]: {
                            "&::before": {
                                display: "none"
                            },
                            "&:hover": {
                                [`${t}-date`]: {
                                    background: e.controlItemBgHover
                                }
                            },
                            [`${t}-date-today::before`]: {
                                display: "none"
                            },
                            [`&-in-view${n}-cell-selected`]: {
                                [`${t}-date, ${t}-date-today`]: {
                                    background: o
                                }
                            },
                            "&-selected, &-selected:hover": {
                                [`${t}-date, ${t}-date-today`]: {
                                    [`${t}-date-value`]: {
                                        color: e.colorPrimary
                                    }
                                }
                            }
                        },
                        [`${t}-date`]: {
                            display: "block",
                            width: "auto",
                            height: "auto",
                            margin: `0 ${(0,v.unit)(e.calc(e.marginXS).div(2).equal())}`,
                            padding: `${(0,v.unit)(e.calc(e.paddingXS).div(2).equal())} ${(0,v.unit)(e.paddingXS)} 0`,
                            border: 0,
                            borderTop: `${(0,v.unit)(e.lineWidthBold)} ${e.lineType} ${e.colorSplit}`,
                            borderRadius: 0,
                            transition: `background ${e.motionDurationSlow}`,
                            "&-value": {
                                lineHeight: (0, v.unit)(e.dateValueHeight),
                                transition: `color ${e.motionDurationSlow}`
                            },
                            "&-content": {
                                position: "static",
                                width: "auto",
                                height: e.dateContentHeight,
                                overflowY: "auto",
                                color: e.colorText,
                                lineHeight: e.lineHeight,
                                textAlign: "start"
                            },
                            "&-today": {
                                borderColor: e.colorPrimary,
                                [`${t}-date-value`]: {
                                    color: e.colorText
                                }
                            }
                        }
                    },
                    [`@media only screen and (max-width: ${(0,v.unit)(e.screenXS)}) `]: {
                        [t]: {
                            [`${t}-header`]: {
                                display: "block",
                                [`${t}-year-select`]: {
                                    width: "50%"
                                },
                                [`${t}-month-select`]: {
                                    width: `calc(50% - ${(0,v.unit)(e.paddingXS)})`
                                },
                                [`${t}-mode-switch`]: {
                                    width: "100%",
                                    marginTop: e.marginXS,
                                    marginInlineStart: 0,
                                    "> label": {
                                        width: "50%",
                                        textAlign: "center"
                                    }
                                }
                            }
                        }
                    }
                }
            })((0, F.mergeToken)(e, (0, tk.initPickerPanelToken)(e), {
                calendarCls: t,
                pickerCellInnerCls: `${e.componentCls}-cell-inner`,
                dateValueHeight: e.controlHeightSM,
                weekHeight: e.calc(e.controlHeightSM).mul(.75).equal(),
                dateContentHeight: e.calc(e.calc(e.fontHeightSM).add(e.marginXS)).mul(3).add(e.calc(e.lineWidth).mul(2)).equal()
            }))
        }, e => ({
            fullBg: e.colorBgContainer,
            fullPanelBg: e.colorBgContainer,
            itemActiveBg: e.controlItemBgActive,
            yearControlWidth: 80,
            monthControlWidth: 70,
            miniContentHeight: 256,
            ...(0, tk.initPanelComponentToken)(e)
        })),
        tw = (e, t, n) => {
            let {
                getYear: l
            } = n;
            return e && t && l(e) === l(t)
        },
        tN = (e, t, n) => {
            let {
                getMonth: l
            } = n;
            return tw(e, t, n) && l(e) === l(t)
        },
        tI = (e, t, n) => {
            let {
                getDate: l
            } = n;
            return tN(e, t, n) && l(e) === l(t)
        },
        tM = e => t => {
            let {
                prefixCls: n,
                className: r,
                rootClassName: o,
                style: a,
                dateFullCellRender: i,
                dateCellRender: s,
                monthFullCellRender: c,
                monthCellRender: d,
                cellRender: u,
                fullCellRender: f,
                headerRender: g,
                value: v,
                defaultValue: b,
                disabledDate: y,
                mode: $,
                validRange: x,
                fullscreen: S = !0,
                showWeek: C,
                onChange: k,
                onPanelChange: E,
                onSelect: w,
                styles: N,
                classNames: I
            } = t, {
                getPrefixCls: M,
                direction: z,
                className: R,
                style: T,
                classNames: H,
                styles: P
            } = (0, h.useComponentConfig)("calendar"), L = { ...t,
                mode: $,
                fullscreen: S,
                showWeek: C
            }, [B, A] = (0, m.useMergeSemantic)([H, I], [P, N], {
                props: L
            }), [O, W, D, F, _, j] = l.useMemo(() => {
                let {
                    root: e,
                    header: t,
                    ...n
                } = B, {
                    root: l,
                    header: r,
                    ...o
                } = A;
                return [e, t, n, l, r, o]
            }, [B, A]), X = M("picker", n), q = `${X}-calendar`, [V, G] = tE(X, q), Y = e.getNow(), [U, K] = (0, tm.useControlledState)(() => b || e.getNow(), v), [Q, Z] = (0, tm.useControlledState)("month", $), J = l.useMemo(() => "year" === Q ? "month" : "date", [Q]), ee = l.useCallback(t => !!x && (e.isAfter(x[0], t) || e.isAfter(t, x[1])) || !!y ? .(t), [y, x]), et = (e, t) => {
                E ? .(e, t)
            }, en = e => {
                Z(e), et(U, e)
            }, el = (t, n) => {
                K(t), tI(t, U, e) || (("date" !== J || tN(t, U, e)) && ("month" !== J || tw(t, U, e)) || et(t, Q), k ? .(t)), w ? .(t, {
                    source: n
                })
            }, er = l.useCallback((t, n) => f ? f(t, n) : i ? i(t) : l.createElement("div", {
                className: (0, p.clsx)(`${X}-cell-inner`, `${q}-date`, {
                    [`${q}-date-today`]: tI(Y, t, e)
                })
            }, l.createElement("div", {
                className: `${q}-date-value`
            }, String(e.getDate(t)).padStart(2, "0")), l.createElement("div", {
                className: `${q}-date-content`
            }, "function" == typeof u ? u(t, n) : s ? .(t))), [Y, X, q, f, i, u, s]), eo = l.useCallback((t, n) => {
                if (f) return f(t, n);
                if (c) return c(t);
                let r = n.locale.shortMonths || e.locale.getShortMonths(n.locale.locale);
                return l.createElement("div", {
                    className: (0, p.clsx)(`${X}-cell-inner`, `${q}-date`, {
                        [`${q}-date-today`]: tN(Y, t, e)
                    })
                }, l.createElement("div", {
                    className: `${q}-date-value`
                }, r[e.getMonth(t)]), l.createElement("div", {
                    className: `${q}-date-content`
                }, "function" == typeof u ? u(t, n) : d ? .(t)))
            }, [Y, X, q, f, c, u, d]), [ea] = (0, tf.useLocale)("Calendar", tS.default), ei = { ...ea,
                ...t.locale
            };
            return l.createElement("div", {
                className: (0, p.clsx)(q, {
                    [`${q}-full`]: S,
                    [`${q}-mini`]: !S,
                    [`${q}-rtl`]: "rtl" === z
                }, R, r, o, O, V, G),
                style: { ...F,
                    ...T,
                    ...a
                }
            }, g ? g({
                value: U,
                type: Q,
                onChange: e => {
                    el(e, "customize")
                },
                onTypeChange: en
            }) : l.createElement(tx, {
                className: W,
                style: _,
                prefixCls: q,
                value: U,
                generateConfig: e,
                mode: Q,
                fullscreen: S,
                locale: ei ? .lang,
                validRange: x,
                onChange: el,
                onModeChange: en
            }), l.createElement(tp.default, {
                classNames: D,
                styles: j,
                value: U,
                prefixCls: X,
                locale: ei ? .lang,
                generateConfig: e,
                cellRender: (e, t) => "date" === t.type ? er(e, t) : "month" === t.type ? eo(e, { ...t,
                    locale: ei ? .lang
                }) : void 0,
                onSelect: e => {
                    el(e, J)
                },
                mode: J,
                picker: J,
                disabledDate: ee,
                hideHeader: !0,
                showWeek: C
            }))
        },
        tz = tM(tu.default);
    tz.generateCalendar = tM;
    var tR = e.i(226240);

    function tT() {
        return (tT = Object.assign.bind()).apply(null, arguments)
    }

    function tH(e) {
        return (tH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function tP(e) {
        var t = function(e, t) {
            if ("object" != tH(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var l = n.call(e, t || "default");
                if ("object" != tH(l)) return l;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == tH(t) ? t : t + ""
    }

    function tL(e, t, n) {
        return (t = tP(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function tB(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t && (l = l.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, l)
        }
        return n
    }

    function tA(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? tB(Object(n), !0).forEach(function(t) {
                tL(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tB(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function tO(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function tW(e, t) {
        for (var n = 0; n < t.length; n++) {
            var l = t[n];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, tP(l.key), l)
        }
    }

    function tD(e, t, n) {
        return t && tW(e.prototype, t), n && tW(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function tF(e, t) {
        if (t && ("object" == tH(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function t_() {
        try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (t_ = function() {
            return !!e
        })()
    }

    function tj(e) {
        return (tj = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function tX(e, t) {
        return (tX = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function tq(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && tX(e, t)
    }
    let tV = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: {
            startX: 0,
            startY: 0,
            curX: 0,
            curY: 0
        },
        trackStyle: {},
        trackWidth: 0,
        targetSlide: 0
    };
    var tG = e.i(535414);
    let tY = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(e) {
            return l.default.createElement("ul", {
                style: {
                    display: "block"
                }
            }, e)
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: "50px",
        className: "",
        cssEase: "ease",
        customPaging: function(e) {
            return l.default.createElement("button", null, e + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "div",
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        asNavFor: null,
        unslick: !1
    };

    function tU(e, t, n) {
        return Math.max(t, Math.min(e, n))
    }
    var tK = function(e) {
            ["onTouchStart", "onTouchMove", "onWheel"].includes(e._reactName) || e.preventDefault()
        },
        tQ = function(e) {
            for (var t = [], n = tZ(e), l = tJ(e), r = n; r < l; r++) 0 > e.lazyLoadedList.indexOf(r) && t.push(r);
            return t
        },
        tZ = function(e) {
            return e.currentSlide - t0(e)
        },
        tJ = function(e) {
            return e.currentSlide + t1(e)
        },
        t0 = function(e) {
            return e.centerMode ? Math.floor(e.slidesToShow / 2) + +(parseInt(e.centerPadding) > 0) : 0
        },
        t1 = function(e) {
            return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + +(parseInt(e.centerPadding) > 0) : e.slidesToShow
        },
        t2 = function(e) {
            return e && e.offsetWidth || 0
        },
        t3 = function(e) {
            return e && e.offsetHeight || 0
        },
        t5 = function(e) {
            var t, n, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t = e.startX - e.curX, (n = Math.round(180 * Math.atan2(e.startY - e.curY, t) / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315) return "left";
            if (n >= 135 && n <= 225) return "right";
            if (!0 === l)
                if (n >= 35 && n <= 135) return "up";
                else return "down";
            return "vertical"
        },
        t4 = function(e) {
            var t = !0;
            return !e.infinite && (e.centerMode && e.currentSlide >= e.slideCount - 1 ? t = !1 : (e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1)), t
        },
        t8 = function(e, t) {
            var n = {};
            return t.forEach(function(t) {
                return n[t] = e[t]
            }), n
        },
        t6 = function(e) {
            var t, n = l.default.Children.count(e.children),
                r = e.listRef,
                o = Math.ceil(t2(r)),
                a = Math.ceil(t2(e.trackRef && e.trackRef.node));
            if (e.vertical) t = o;
            else {
                var i = e.centerMode && 2 * parseInt(e.centerPadding);
                "string" == typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (i *= o / 100), t = Math.ceil((o - i) / e.slidesToShow)
            }
            var s = r && t3(r.querySelector('[data-index="0"]')),
                c = s * e.slidesToShow,
                d = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
            e.rtl && void 0 === e.currentSlide && (d = n - 1 - e.initialSlide);
            var u = e.lazyLoadedList || [],
                p = tQ(tA(tA({}, e), {}, {
                    currentSlide: d,
                    lazyLoadedList: u
                })),
                m = {
                    slideCount: n,
                    slideWidth: t,
                    listWidth: o,
                    trackWidth: a,
                    currentSlide: d,
                    slideHeight: s,
                    listHeight: c,
                    lazyLoadedList: u = u.concat(p)
                };
            return null === e.autoplaying && e.autoplay && (m.autoplaying = "playing"), m
        },
        t9 = function(e) {
            var t = e.waitForAnimate,
                n = e.animating,
                l = e.fade,
                r = e.infinite,
                o = e.index,
                a = e.slideCount,
                i = e.lazyLoad,
                s = e.currentSlide,
                c = e.centerMode,
                d = e.slidesToScroll,
                u = e.slidesToShow,
                p = e.useCSS,
                m = e.lazyLoadedList;
            if (t && n) return {};
            var f, g, h, v = o,
                b = {},
                y = {},
                $ = r ? o : tU(o, 0, a - 1);
            if (l) {
                if (!r && (o < 0 || o >= a)) return {};
                o < 0 ? v = o + a : o >= a && (v = o - a), i && 0 > m.indexOf(v) && (m = m.concat(v)), b = {
                    animating: !0,
                    currentSlide: v,
                    lazyLoadedList: m,
                    targetSlide: v
                }, y = {
                    animating: !1,
                    targetSlide: v
                }
            } else f = v, v < 0 ? (f = v + a, r ? a % d != 0 && (f = a - a % d) : f = 0) : !t4(e) && v > s ? v = f = s : c && v >= a ? (v = r ? a : a - 1, f = r ? 0 : a - 1) : v >= a && (f = v - a, r ? a % d != 0 && (f = 0) : f = a - u), !r && v + u >= a && (f = a - u), g = ns(tA(tA({}, e), {}, {
                slideIndex: v
            })), h = ns(tA(tA({}, e), {}, {
                slideIndex: f
            })), r || (g === h && (v = f), g = h), i && (m = m.concat(tQ(tA(tA({}, e), {}, {
                currentSlide: v
            })))), p ? (b = {
                animating: !0,
                currentSlide: f,
                trackStyle: ni(tA(tA({}, e), {}, {
                    left: g
                })),
                lazyLoadedList: m,
                targetSlide: $
            }, y = {
                animating: !1,
                currentSlide: f,
                trackStyle: na(tA(tA({}, e), {}, {
                    left: h
                })),
                swipeLeft: null,
                targetSlide: $
            }) : b = {
                currentSlide: f,
                trackStyle: na(tA(tA({}, e), {}, {
                    left: h
                })),
                lazyLoadedList: m,
                targetSlide: $
            };
            return {
                state: b,
                nextState: y
            }
        },
        t7 = function(e, t) {
            var n, l, r, o, a = e.slidesToScroll,
                i = e.slidesToShow,
                s = e.slideCount,
                c = e.currentSlide,
                d = e.targetSlide,
                u = e.lazyLoad,
                p = e.infinite;
            if (n = s % a != 0 ? 0 : (s - c) % a, "previous" === t.message) o = c - (r = 0 === n ? a : i - n), u && !p && (o = -1 == (l = c - r) ? s - 1 : l), p || (o = d - a);
            else if ("next" === t.message) o = c + (r = 0 === n ? a : n), u && !p && (o = (c + a) % s + n), p || (o = d + a);
            else if ("dots" === t.message) o = t.index * t.slidesToScroll;
            else if ("children" === t.message) {
                if (o = t.index, p) {
                    var m = np(tA(tA({}, e), {}, {
                        targetSlide: o
                    }));
                    o > t.currentSlide && "left" === m ? o -= s : o < t.currentSlide && "right" === m && (o += s)
                }
            } else "index" === t.message && (o = Number(t.index));
            return o
        },
        ne = function(e, t) {
            var n = t.scrolling,
                l = t.animating,
                r = t.vertical,
                o = t.swipeToSlide,
                a = t.verticalSwiping,
                i = t.rtl,
                s = t.currentSlide,
                c = t.edgeFriction,
                d = t.edgeDragged,
                u = t.onEdge,
                p = t.swiped,
                m = t.swiping,
                f = t.slideCount,
                g = t.slidesToScroll,
                h = t.infinite,
                v = t.touchObject,
                b = t.swipeEvent,
                y = t.listHeight,
                $ = t.listWidth;
            if (!n) {
                if (l) return tK(e);
                r && o && a && tK(e);
                var x, S = {},
                    C = ns(t);
                v.curX = e.touches ? e.touches[0].pageX : e.clientX, v.curY = e.touches ? e.touches[0].pageY : e.clientY, v.swipeLength = Math.round(Math.sqrt(Math.pow(v.curX - v.startX, 2)));
                var k = Math.round(Math.sqrt(Math.pow(v.curY - v.startY, 2)));
                if (!a && !m && k > 10) return {
                    scrolling: !0
                };
                a && (v.swipeLength = k);
                var E = (i ? -1 : 1) * (v.curX > v.startX ? 1 : -1);
                a && (E = v.curY > v.startY ? 1 : -1);
                var w = Math.ceil(f / g),
                    N = t5(t.touchObject, a),
                    I = v.swipeLength;
                return !h && (0 === s && ("right" === N || "down" === N) || s + 1 >= w && ("left" === N || "up" === N) || !t4(t) && ("left" === N || "up" === N)) && (I = v.swipeLength * c, !1 === d && u && (u(N), S.edgeDragged = !0)), !p && b && (b(N), S.swiped = !0), x = r ? C + y / $ * I * E : i ? C - I * E : C + I * E, a && (x = C + I * E), S = tA(tA({}, S), {}, {
                    touchObject: v,
                    swipeLeft: x,
                    trackStyle: na(tA(tA({}, t), {}, {
                        left: x
                    }))
                }), Math.abs(v.curX - v.startX) < .8 * Math.abs(v.curY - v.startY) || v.swipeLength > 10 && (S.swiping = !0, tK(e)), S
            }
        },
        nt = function(e, t) {
            var n = t.dragging,
                l = t.swipe,
                r = t.touchObject,
                o = t.listWidth,
                a = t.touchThreshold,
                i = t.verticalSwiping,
                s = t.listHeight,
                c = t.swipeToSlide,
                d = t.scrolling,
                u = t.onSwipe,
                p = t.targetSlide,
                m = t.currentSlide,
                f = t.infinite;
            if (!n) return l && tK(e), {};
            var g = i ? s / a : o / a,
                h = t5(r, i),
                v = {
                    dragging: !1,
                    edgeDragged: !1,
                    scrolling: !1,
                    swiping: !1,
                    swiped: !1,
                    swipeLeft: null,
                    touchObject: {}
                };
            if (d || !r.swipeLength) return v;
            if (r.swipeLength > g) {
                tK(e), u && u(h);
                var b, y, $ = f ? m : p;
                switch (h) {
                    case "left":
                    case "up":
                        y = $ + nr(t), b = c ? nl(t, y) : y, v.currentDirection = 0;
                        break;
                    case "right":
                    case "down":
                        y = $ - nr(t), b = c ? nl(t, y) : y, v.currentDirection = 1;
                        break;
                    default:
                        b = $
                }
                v.triggerSlideHandler = b
            } else {
                var x = ns(t);
                v.trackStyle = ni(tA(tA({}, t), {}, {
                    left: x
                }))
            }
            return v
        },
        nn = function(e) {
            for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, l = e.infinite ? -1 * e.slidesToShow : 0, r = []; n < t;) r.push(n), n = l + e.slidesToScroll, l += Math.min(e.slidesToScroll, e.slidesToShow);
            return r
        },
        nl = function(e, t) {
            var n = nn(e),
                l = 0;
            if (t > n[n.length - 1]) t = n[n.length - 1];
            else
                for (var r in n) {
                    if (t < n[r]) {
                        t = l;
                        break
                    }
                    l = n[r]
                }
            return t
        },
        nr = function(e) {
            var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
            if (!e.swipeToSlide) return e.slidesToScroll;
            var n, l = e.listRef;
            if (Array.from(l.querySelectorAll && l.querySelectorAll(".slick-slide") || []).every(function(l) {
                    if (e.vertical) {
                        if (l.offsetTop + t3(l) / 2 > -1 * e.swipeLeft) return n = l, !1
                    } else if (l.offsetLeft - t + t2(l) / 2 > -1 * e.swipeLeft) return n = l, !1;
                    return !0
                }), !n) return 0;
            var r = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
            return Math.abs(n.dataset.index - r) || 1
        },
        no = function(e, t) {
            return t.reduce(function(t, n) {
                return t && e.hasOwnProperty(n)
            }, !0) ? null : console.error("Keys Missing:", e)
        },
        na = function(e) {
            if (no(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]), e.vertical) {
                var t, n;
                n = (e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow) * e.slideHeight
            } else t = nu(e) * e.slideWidth;
            var l = {
                opacity: 1,
                transition: "",
                WebkitTransition: ""
            };
            if (e.useTransform) {
                var r = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    o = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    a = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
                l = tA(tA({}, l), {}, {
                    WebkitTransform: r,
                    transform: o,
                    msTransform: a
                })
            } else e.vertical ? l.top = e.left : l.left = e.left;
            return e.fade && (l = {
                opacity: 1
            }), t && (l.width = t), n && (l.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? l.marginTop = e.left + "px" : l.marginLeft = e.left + "px"), l
        },
        ni = function(e) {
            no(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
            var t = na(e);
            return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
        },
        ns = function(e) {
            if (e.unslick) return 0;
            no(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
            var t = e.slideIndex,
                n = e.trackRef,
                l = e.infinite,
                r = e.centerMode,
                o = e.slideCount,
                a = e.slidesToShow,
                i = e.slidesToScroll,
                s = e.slideWidth,
                c = e.listWidth,
                d = e.variableWidth,
                u = e.slideHeight,
                p = e.fade,
                m = e.vertical,
                f = 0,
                g = 0;
            if (p || 1 === e.slideCount) return 0;
            var h = 0;
            if (l ? (h = -nc(e), o % i != 0 && t + i > o && (h = -(t > o ? a - (t - o) : o % i)), r && (h += parseInt(a / 2))) : (o % i != 0 && t + i > o && (h = a - o % i), r && (h = parseInt(a / 2))), f = h * s, g = h * u, v = m ? -(t * u * 1) + g : -(t * s * 1) + f, !0 === d) {
                var v, b, y, $ = n && n.node;
                if (y = t + nc(e), v = (b = $ && $.childNodes[y]) ? -1 * b.offsetLeft : 0, !0 === r) {
                    y = l ? t + nc(e) : t, b = $ && $.children[y], v = 0;
                    for (var x = 0; x < y; x++) v -= $ && $.children[x] && $.children[x].offsetWidth;
                    v -= parseInt(e.centerPadding), v += b && (c - b.offsetWidth) / 2
                }
            }
            return v
        },
        nc = function(e) {
            return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + +!!e.centerMode
        },
        nd = function(e) {
            return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + +!!e.centerMode
        },
        nu = function(e) {
            return 1 === e.slideCount ? 1 : nc(e) + e.slideCount + nd(e)
        },
        np = function(e) {
            return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + nm(e) ? "left" : "right" : e.targetSlide < e.currentSlide - nf(e) ? "right" : "left"
        },
        nm = function(e) {
            var t = e.slidesToShow,
                n = e.centerMode,
                l = e.rtl,
                r = e.centerPadding;
            if (n) {
                var o = (t - 1) / 2 + 1;
                return parseInt(r) > 0 && (o += 1), l && t % 2 == 0 && (o += 1), o
            }
            return l ? 0 : t - 1
        },
        nf = function(e) {
            var t = e.slidesToShow,
                n = e.centerMode,
                l = e.rtl,
                r = e.centerPadding;
            if (n) {
                var o = (t - 1) / 2 + 1;
                return parseInt(r) > 0 && (o += 1), l || t % 2 != 0 || (o += 1), o
            }
            return l ? t - 1 : 0
        },
        ng = function() {
            return !!window.document && !!window.document.createElement
        },
        nh = Object.keys(tY),
        nv = function(e) {
            var t, n, l, r, o;
            return l = (o = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || o >= e.slideCount, e.centerMode ? (r = Math.floor(e.slidesToShow / 2), n = (o - e.currentSlide) % e.slideCount == 0, o > e.currentSlide - r - 1 && o <= e.currentSlide + r && (t = !0)) : t = e.currentSlide <= o && o < e.currentSlide + e.slidesToShow, {
                "slick-slide": !0,
                "slick-active": t,
                "slick-center": n,
                "slick-cloned": l,
                "slick-current": o === (e.targetSlide < 0 ? e.targetSlide + e.slideCount : e.targetSlide >= e.slideCount ? e.targetSlide - e.slideCount : e.targetSlide)
            }
        },
        nb = function(e) {
            var t = {};
            return (void 0 === e.variableWidth || !1 === e.variableWidth) && (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical && e.slideHeight ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = +(e.currentSlide === e.index), t.zIndex = e.currentSlide === e.index ? 999 : 998, e.useCSS && (t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase)), t
        },
        ny = function(e, t) {
            return e.key + "-" + t
        },
        n$ = function(e) {
            var t, n = [],
                r = [],
                o = [],
                a = l.default.Children.count(e.children),
                i = tZ(e),
                s = tJ(e);
            return (l.default.Children.forEach(e.children, function(c, d) {
                var u, m = {
                    message: "children",
                    index: d,
                    slidesToScroll: e.slidesToScroll,
                    currentSlide: e.currentSlide
                };
                u = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(d) >= 0 ? c : l.default.createElement("div", null);
                var f = nb(tA(tA({}, e), {}, {
                        index: d
                    })),
                    g = u.props.className || "",
                    h = nv(tA(tA({}, e), {}, {
                        index: d
                    }));
                if (n.push(l.default.cloneElement(u, {
                        key: "original" + ny(u, d),
                        "data-index": d,
                        className: (0, p.clsx)(h, g),
                        tabIndex: "-1",
                        "aria-hidden": !h["slick-active"],
                        style: tA(tA({
                            outline: "none"
                        }, u.props.style || {}), f),
                        onClick: function(t) {
                            u.props && u.props.onClick && u.props.onClick(t), e.focusOnSelect && e.focusOnSelect(m)
                        }
                    })), e.infinite && a > 1 && !1 === e.fade && !e.unslick) {
                    var v = a - d;
                    v <= nc(e) && ((t = -v) >= i && (u = c), h = nv(tA(tA({}, e), {}, {
                        index: t
                    })), r.push(l.default.cloneElement(u, {
                        key: "precloned" + ny(u, t),
                        "data-index": t,
                        tabIndex: "-1",
                        className: (0, p.clsx)(h, g),
                        "aria-hidden": !h["slick-active"],
                        style: tA(tA({}, u.props.style || {}), f),
                        onClick: function(t) {
                            u.props && u.props.onClick && u.props.onClick(t), e.focusOnSelect && e.focusOnSelect(m)
                        }
                    }))), d < nd(e) && ((t = a + d) < s && (u = c), h = nv(tA(tA({}, e), {}, {
                        index: t
                    })), o.push(l.default.cloneElement(u, {
                        key: "postcloned" + ny(u, t),
                        "data-index": t,
                        tabIndex: "-1",
                        className: (0, p.clsx)(h, g),
                        "aria-hidden": !h["slick-active"],
                        style: tA(tA({}, u.props.style || {}), f),
                        onClick: function(t) {
                            u.props && u.props.onClick && u.props.onClick(t), e.focusOnSelect && e.focusOnSelect(m)
                        }
                    })))
                }
            }), e.rtl) ? r.concat(n, o).reverse() : r.concat(n, o)
        },
        nx = function(e) {
            function t() {
                tO(this, t);
                for (var e, n, l, r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                return n = t, l = [].concat(o), n = tj(n), tL(e = tF(this, t_() ? Reflect.construct(n, l || [], tj(this).constructor) : n.apply(this, l)), "node", null), tL(e, "handleRef", function(t) {
                    e.node = t
                }), e
            }
            return tq(t, e), tD(t, [{
                key: "render",
                value: function() {
                    var e = n$(this.props),
                        t = this.props,
                        n = t.onMouseEnter,
                        r = t.onMouseOver,
                        o = t.onMouseLeave;
                    return l.default.createElement("div", tT({
                        ref: this.handleRef,
                        className: "slick-track",
                        style: this.props.trackStyle
                    }, {
                        onMouseEnter: n,
                        onMouseOver: r,
                        onMouseLeave: o
                    }), e)
                }
            }])
        }(l.default.PureComponent),
        nS = function(e) {
            return e.infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1
        },
        nC = function(e) {
            function t() {
                var e, n;
                return tO(this, t), e = t, n = arguments, e = tj(e), tF(this, t_() ? Reflect.construct(e, n || [], tj(this).constructor) : e.apply(this, n))
            }
            return tq(t, e), tD(t, [{
                key: "clickHandler",
                value: function(e, t) {
                    t.preventDefault(), this.props.clickHandler(e)
                }
            }, {
                key: "render",
                value: function() {
                    for (var e = this.props, t = e.onMouseEnter, n = e.onMouseOver, r = e.onMouseLeave, o = e.infinite, a = e.slidesToScroll, i = e.slidesToShow, s = e.slideCount, c = e.currentSlide, d = nS({
                            slideCount: s,
                            slidesToScroll: a,
                            slidesToShow: i,
                            infinite: o
                        }), u = [], m = 0; m < d; m++) {
                        var f = (m + 1) * a - 1,
                            g = o ? f : tU(f, 0, s - 1),
                            h = g - (a - 1),
                            v = o ? h : tU(h, 0, s - 1),
                            b = (0, p.clsx)({
                                "slick-active": o ? c >= v && c <= g : c === v
                            }),
                            y = {
                                message: "dots",
                                index: m,
                                slidesToScroll: a,
                                currentSlide: c
                            },
                            $ = this.clickHandler.bind(this, y);
                        u = u.concat(l.default.createElement("li", {
                            key: m,
                            className: b
                        }, l.default.cloneElement(this.props.customPaging(m), {
                            onClick: $
                        })))
                    }
                    return l.default.cloneElement(this.props.appendDots(u), tA({
                        className: this.props.dotsClass
                    }, {
                        onMouseEnter: t,
                        onMouseOver: n,
                        onMouseLeave: r
                    }))
                }
            }])
        }(l.default.PureComponent);

    function nk(e, t, n) {
        return t = tj(t), tF(e, t_() ? Reflect.construct(t, n || [], tj(e).constructor) : t.apply(e, n))
    }
    var nE = function(e) {
            function t() {
                return tO(this, t), nk(this, t, arguments)
            }
            return tq(t, e), tD(t, [{
                key: "clickHandler",
                value: function(e, t) {
                    t && t.preventDefault(), this.props.clickHandler(e, t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                            "slick-arrow": !0,
                            "slick-prev": !0
                        },
                        t = this.clickHandler.bind(this, {
                            message: "previous"
                        });
                    !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                    var n = {
                            key: "0",
                            "data-role": "none",
                            className: (0, p.clsx)(e),
                            style: {
                                display: "block"
                            },
                            onClick: t
                        },
                        r = {
                            currentSlide: this.props.currentSlide,
                            slideCount: this.props.slideCount
                        };
                    return this.props.prevArrow ? l.default.cloneElement(this.props.prevArrow, tA(tA({}, n), r)) : l.default.createElement("button", tT({
                        key: "0",
                        type: "button"
                    }, n), " ", "Previous")
                }
            }])
        }(l.default.PureComponent),
        nw = function(e) {
            function t() {
                return tO(this, t), nk(this, t, arguments)
            }
            return tq(t, e), tD(t, [{
                key: "clickHandler",
                value: function(e, t) {
                    t && t.preventDefault(), this.props.clickHandler(e, t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                            "slick-arrow": !0,
                            "slick-next": !0
                        },
                        t = this.clickHandler.bind(this, {
                            message: "next"
                        });
                    t4(this.props) || (e["slick-disabled"] = !0, t = null);
                    var n = {
                            key: "1",
                            "data-role": "none",
                            className: (0, p.clsx)(e),
                            style: {
                                display: "block"
                            },
                            onClick: t
                        },
                        r = {
                            currentSlide: this.props.currentSlide,
                            slideCount: this.props.slideCount
                        };
                    return this.props.nextArrow ? l.default.cloneElement(this.props.nextArrow, tA(tA({}, n), r)) : l.default.createElement("button", tT({
                        key: "1",
                        type: "button"
                    }, n), " ", "Next")
                }
            }])
        }(l.default.PureComponent),
        nN = ["animating"],
        nI = function(e) {
            function t(e) {
                tO(this, t), n = t, r = [e], n = tj(n), tL(o = tF(this, t_() ? Reflect.construct(n, r || [], tj(this).constructor) : n.apply(this, r)), "listRefHandler", function(e) {
                    return o.list = e
                }), tL(o, "trackRefHandler", function(e) {
                    return o.track = e
                }), tL(o, "adaptHeight", function() {
                    if (o.props.adaptiveHeight && o.list) {
                        var e = o.list.querySelector('[data-index="'.concat(o.state.currentSlide, '"]'));
                        o.list.style.height = t3(e) + "px"
                    }
                }), tL(o, "componentDidMount", function() {
                    if (o.props.onInit && o.props.onInit(), o.props.lazyLoad) {
                        var e = tQ(tA(tA({}, o.props), o.state));
                        e.length > 0 && (o.setState(function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        }), o.props.onLazyLoad && o.props.onLazyLoad(e))
                    }
                    var t = tA({
                        listRef: o.list,
                        trackRef: o.track
                    }, o.props);
                    o.updateState(t, !0, function() {
                        o.adaptHeight(), o.props.autoplay && o.autoPlay("playing")
                    }), "progressive" === o.props.lazyLoad && (o.lazyLoadTimer = setInterval(o.progressiveLazyLoad, 1e3)), "undefined" != typeof ResizeObserver && (o.ro = new ResizeObserver(function() {
                        o.state.animating ? (o.onWindowResized(!1), o.callbackTimers.push(setTimeout(function() {
                            return o.onWindowResized()
                        }, o.props.speed))) : o.onWindowResized()
                    }), o.ro.observe(o.list)), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(e) {
                        e.onfocus = o.props.pauseOnFocus ? o.onSlideFocus : null, e.onblur = o.props.pauseOnFocus ? o.onSlideBlur : null
                    }), window.addEventListener ? window.addEventListener("resize", o.onWindowResized) : window.attachEvent("onresize", o.onWindowResized)
                }), tL(o, "componentWillUnmount", function() {
                    var e;
                    o.animationEndCallback && clearTimeout(o.animationEndCallback), o.lazyLoadTimer && clearInterval(o.lazyLoadTimer), o.callbackTimers.length && (o.callbackTimers.forEach(function(e) {
                        return clearTimeout(e)
                    }), o.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", o.onWindowResized) : window.detachEvent("onresize", o.onWindowResized), o.autoplayTimer && clearInterval(o.autoplayTimer), null == (e = o.ro) || e.disconnect()
                }), tL(o, "componentDidUpdate", function(e) {
                    if (o.checkImagesLoad(), o.props.onReInit && o.props.onReInit(), o.props.lazyLoad) {
                        var t = tQ(tA(tA({}, o.props), o.state));
                        t.length > 0 && (o.setState(function(e) {
                            return {
                                lazyLoadedList: e.lazyLoadedList.concat(t)
                            }
                        }), o.props.onLazyLoad && o.props.onLazyLoad(t))
                    }
                    o.adaptHeight();
                    var n = tA(tA({
                            listRef: o.list,
                            trackRef: o.track
                        }, o.props), o.state),
                        r = o.didPropsChange(e);
                    r && o.updateState(n, r, function() {
                        o.state.currentSlide >= l.default.Children.count(o.props.children) && o.changeSlide({
                            message: "index",
                            index: l.default.Children.count(o.props.children) - o.props.slidesToShow,
                            currentSlide: o.state.currentSlide
                        }), (e.autoplay !== o.props.autoplay || e.autoplaySpeed !== o.props.autoplaySpeed) && (!e.autoplay && o.props.autoplay ? o.autoPlay("playing") : o.props.autoplay ? o.autoPlay("update") : o.pause("paused"))
                    })
                }), tL(o, "onWindowResized", function(e) {
                    o.debouncedResize && o.debouncedResize.cancel(), o.debouncedResize = (0, tG.debounce)(50, function() {
                        return o.resizeWindow(e)
                    }), o.debouncedResize()
                }), tL(o, "resizeWindow", function() {
                    var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    if (o.track && o.track.node) {
                        var t = tA(tA({
                            listRef: o.list,
                            trackRef: o.track
                        }, o.props), o.state);
                        o.updateState(t, e, function() {
                            o.props.autoplay ? o.autoPlay("update") : o.pause("paused")
                        }), o.setState({
                            animating: !1
                        }), clearTimeout(o.animationEndCallback), delete o.animationEndCallback
                    }
                }), tL(o, "updateState", function(e, t, n) {
                    var r = t6(e),
                        a = ns(e = tA(tA(tA({}, e), r), {}, {
                            slideIndex: r.currentSlide
                        })),
                        i = na(e = tA(tA({}, e), {}, {
                            left: a
                        }));
                    (t || l.default.Children.count(o.props.children) !== l.default.Children.count(e.children)) && (r.trackStyle = i), o.setState(r, n)
                }), tL(o, "ssrInit", function() {
                    if (o.props.variableWidth) {
                        var e = 0,
                            t = 0,
                            n = [],
                            r = nc(tA(tA(tA({}, o.props), o.state), {}, {
                                slideCount: o.props.children.length
                            })),
                            a = nd(tA(tA(tA({}, o.props), o.state), {}, {
                                slideCount: o.props.children.length
                            }));
                        o.props.children.forEach(function(t) {
                            n.push(t.props.style.width), e += t.props.style.width
                        });
                        for (var i = 0; i < r; i++) t += n[n.length - 1 - i], e += n[n.length - 1 - i];
                        for (var s = 0; s < a; s++) e += n[s];
                        for (var c = 0; c < o.state.currentSlide; c++) t += n[c];
                        var d = {
                            width: e + "px",
                            left: -t + "px"
                        };
                        if (o.props.centerMode) {
                            var u = "".concat(n[o.state.currentSlide], "px");
                            d.left = "calc(".concat(d.left, " + (100% - ").concat(u, ") / 2 ) ")
                        }
                        return {
                            trackStyle: d
                        }
                    }
                    var p = l.default.Children.count(o.props.children),
                        m = tA(tA(tA({}, o.props), o.state), {}, {
                            slideCount: p
                        }),
                        f = nc(m) + nd(m) + p,
                        g = 100 / o.props.slidesToShow * f,
                        h = 100 / f,
                        v = -h * (nc(m) + o.state.currentSlide) * g / 100;
                    return o.props.centerMode && (v += (100 - h * g / 100) / 2), {
                        slideWidth: h + "%",
                        trackStyle: {
                            width: g + "%",
                            left: v + "%"
                        }
                    }
                }), tL(o, "checkImagesLoad", function() {
                    var e = o.list && o.list.querySelectorAll && o.list.querySelectorAll(".slick-slide img") || [],
                        t = e.length,
                        n = 0;
                    Array.prototype.forEach.call(e, function(e) {
                        var l = function() {
                            return ++n && n >= t && o.onWindowResized()
                        };
                        if (e.onclick) {
                            var r = e.onclick;
                            e.onclick = function(t) {
                                r(t), e.parentNode.focus()
                            }
                        } else e.onclick = function() {
                            return e.parentNode.focus()
                        };
                        e.onload || (o.props.lazyLoad ? e.onload = function() {
                            o.adaptHeight(), o.callbackTimers.push(setTimeout(o.onWindowResized, o.props.speed))
                        } : (e.onload = l, e.onerror = function() {
                            l(), o.props.onLazyLoadError && o.props.onLazyLoadError()
                        }))
                    })
                }), tL(o, "progressiveLazyLoad", function() {
                    for (var e = [], t = tA(tA({}, o.props), o.state), n = o.state.currentSlide; n < o.state.slideCount + nd(t); n++)
                        if (0 > o.state.lazyLoadedList.indexOf(n)) {
                            e.push(n);
                            break
                        }
                    for (var l = o.state.currentSlide - 1; l >= -nc(t); l--)
                        if (0 > o.state.lazyLoadedList.indexOf(l)) {
                            e.push(l);
                            break
                        }
                    e.length > 0 ? (o.setState(function(t) {
                        return {
                            lazyLoadedList: t.lazyLoadedList.concat(e)
                        }
                    }), o.props.onLazyLoad && o.props.onLazyLoad(e)) : o.lazyLoadTimer && (clearInterval(o.lazyLoadTimer), delete o.lazyLoadTimer)
                }), tL(o, "slideHandler", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = o.props,
                        l = n.asNavFor,
                        r = n.beforeChange,
                        a = n.onLazyLoad,
                        i = n.speed,
                        s = n.afterChange,
                        c = o.state.currentSlide,
                        d = t9(tA(tA(tA({
                            index: e
                        }, o.props), o.state), {}, {
                            trackRef: o.track,
                            useCSS: o.props.useCSS && !t
                        })),
                        u = d.state,
                        p = d.nextState;
                    if (u) {
                        r && r(c, u.currentSlide);
                        var m = u.lazyLoadedList.filter(function(e) {
                            return 0 > o.state.lazyLoadedList.indexOf(e)
                        });
                        a && m.length > 0 && a(m), !o.props.waitForAnimate && o.animationEndCallback && (clearTimeout(o.animationEndCallback), s && s(c), delete o.animationEndCallback), o.setState(u, function() {
                            l && o.asNavForIndex !== e && (o.asNavForIndex = e, l.innerSlider.slideHandler(e)), p && (o.animationEndCallback = setTimeout(function() {
                                var e = p.animating,
                                    t = function(e, t) {
                                        if (null == e) return {};
                                        var n, l, r = function(e, t) {
                                            if (null == e) return {};
                                            var n = {};
                                            for (var l in e)
                                                if (({}).hasOwnProperty.call(e, l)) {
                                                    if (-1 !== t.indexOf(l)) continue;
                                                    n[l] = e[l]
                                                }
                                            return n
                                        }(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var o = Object.getOwnPropertySymbols(e);
                                            for (l = 0; l < o.length; l++) n = o[l], -1 === t.indexOf(n) && ({}).propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                                        }
                                        return r
                                    }(p, nN);
                                o.setState(t, function() {
                                    o.callbackTimers.push(setTimeout(function() {
                                        return o.setState({
                                            animating: e
                                        })
                                    }, 10)), s && s(u.currentSlide), delete o.animationEndCallback
                                })
                            }, i))
                        })
                    }
                }), tL(o, "changeSlide", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t7(tA(tA({}, o.props), o.state), e);
                    if ((0 === n || n) && (!0 === t ? o.slideHandler(n, t) : o.slideHandler(n), o.props.autoplay && o.autoPlay("update"), o.props.focusOnSelect)) {
                        var l = o.list.querySelectorAll(".slick-current");
                        l[0] && l[0].focus()
                    }
                }), tL(o, "clickHandler", function(e) {
                    !1 === o.clickable && (e.stopPropagation(), e.preventDefault()), o.clickable = !0
                }), tL(o, "keyHandler", function(e) {
                    var t, n, l = (t = o.props.accessibility, n = o.props.rtl, e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : "");
                    "" !== l && o.changeSlide({
                        message: l
                    })
                }), tL(o, "selectHandler", function(e) {
                    o.changeSlide(e)
                }), tL(o, "disableBodyScroll", function() {
                    window.ontouchmove = function(e) {
                        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                    }
                }), tL(o, "enableBodyScroll", function() {
                    window.ontouchmove = null
                }), tL(o, "swipeStart", function(e) {
                    o.props.verticalSwiping && o.disableBodyScroll();
                    var t, n, l = (t = o.props.swipe, n = o.props.draggable, ("IMG" === e.target.tagName && tK(e), t && (n || -1 === e.type.indexOf("mouse"))) ? {
                        dragging: !0,
                        touchObject: {
                            startX: e.touches ? e.touches[0].pageX : e.clientX,
                            startY: e.touches ? e.touches[0].pageY : e.clientY,
                            curX: e.touches ? e.touches[0].pageX : e.clientX,
                            curY: e.touches ? e.touches[0].pageY : e.clientY
                        }
                    } : "");
                    "" !== l && o.setState(l)
                }), tL(o, "swipeMove", function(e) {
                    var t = ne(e, tA(tA(tA({}, o.props), o.state), {}, {
                        trackRef: o.track,
                        listRef: o.list,
                        slideIndex: o.state.currentSlide
                    }));
                    t && (t.swiping && (o.clickable = !1), o.setState(t))
                }), tL(o, "swipeEnd", function(e) {
                    var t = nt(e, tA(tA(tA({}, o.props), o.state), {}, {
                        trackRef: o.track,
                        listRef: o.list,
                        slideIndex: o.state.currentSlide
                    }));
                    if (t) {
                        var n = t.triggerSlideHandler;
                        delete t.triggerSlideHandler, o.setState(t), void 0 !== n && (o.slideHandler(n), o.props.verticalSwiping && o.enableBodyScroll())
                    }
                }), tL(o, "touchEnd", function(e) {
                    o.swipeEnd(e), o.clickable = !0
                }), tL(o, "slickPrev", function() {
                    o.callbackTimers.push(setTimeout(function() {
                        return o.changeSlide({
                            message: "previous"
                        })
                    }, 0))
                }), tL(o, "slickNext", function() {
                    o.callbackTimers.push(setTimeout(function() {
                        return o.changeSlide({
                            message: "next"
                        })
                    }, 0))
                }), tL(o, "slickGoTo", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (isNaN(e = Number(e))) return "";
                    o.callbackTimers.push(setTimeout(function() {
                        return o.changeSlide({
                            message: "index",
                            index: e,
                            currentSlide: o.state.currentSlide
                        }, t)
                    }, 0))
                }), tL(o, "play", function() {
                    var e;
                    if (o.props.rtl) e = o.state.currentSlide - o.props.slidesToScroll;
                    else {
                        if (!t4(tA(tA({}, o.props), o.state))) return !1;
                        e = o.state.currentSlide + o.props.slidesToScroll
                    }
                    o.slideHandler(e)
                }), tL(o, "autoPlay", function(e) {
                    o.autoplayTimer && clearInterval(o.autoplayTimer);
                    var t = o.state.autoplaying;
                    if ("update" === e) {
                        if ("hovered" === t || "focused" === t || "paused" === t) return
                    } else if ("leave" === e) {
                        if ("paused" === t || "focused" === t) return
                    } else if ("blur" === e && ("paused" === t || "hovered" === t)) return;
                    o.autoplayTimer = setInterval(o.play, o.props.autoplaySpeed + 50), o.setState({
                        autoplaying: "playing"
                    })
                }), tL(o, "pause", function(e) {
                    o.autoplayTimer && (clearInterval(o.autoplayTimer), o.autoplayTimer = null);
                    var t = o.state.autoplaying;
                    "paused" === e ? o.setState({
                        autoplaying: "paused"
                    }) : "focused" === e ? ("hovered" === t || "playing" === t) && o.setState({
                        autoplaying: "focused"
                    }) : "playing" === t && o.setState({
                        autoplaying: "hovered"
                    })
                }), tL(o, "onDotsOver", function() {
                    return o.props.autoplay && o.pause("hovered")
                }), tL(o, "onDotsLeave", function() {
                    return o.props.autoplay && "hovered" === o.state.autoplaying && o.autoPlay("leave")
                }), tL(o, "onTrackOver", function() {
                    return o.props.autoplay && o.pause("hovered")
                }), tL(o, "onTrackLeave", function() {
                    return o.props.autoplay && "hovered" === o.state.autoplaying && o.autoPlay("leave")
                }), tL(o, "onSlideFocus", function() {
                    return o.props.autoplay && o.pause("focused")
                }), tL(o, "onSlideBlur", function() {
                    return o.props.autoplay && "focused" === o.state.autoplaying && o.autoPlay("blur")
                }), tL(o, "render", function() {
                    var e, t, n, r = (0, p.clsx)("slick-slider", o.props.className, {
                            "slick-vertical": o.props.vertical,
                            "slick-initialized": !0
                        }),
                        a = tA(tA({}, o.props), o.state),
                        i = t8(a, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
                        s = o.props.pauseOnHover;
                    if (i = tA(tA({}, i), {}, {
                            onMouseEnter: s ? o.onTrackOver : null,
                            onMouseLeave: s ? o.onTrackLeave : null,
                            onMouseOver: s ? o.onTrackOver : null,
                            focusOnSelect: o.props.focusOnSelect && o.clickable ? o.selectHandler : null
                        }), !0 === o.props.dots && o.state.slideCount >= o.props.slidesToShow) {
                        var c = t8(a, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                            d = o.props.pauseOnDotsHover;
                        c = tA(tA({}, c), {}, {
                            clickHandler: o.changeSlide,
                            onMouseEnter: d ? o.onDotsLeave : null,
                            onMouseOver: d ? o.onDotsOver : null,
                            onMouseLeave: d ? o.onDotsLeave : null
                        }), e = l.default.createElement(nC, c)
                    }
                    var u = t8(a, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                    u.clickHandler = o.changeSlide, o.props.arrows && (t = l.default.createElement(nE, u), n = l.default.createElement(nw, u));
                    var m = null;
                    o.props.vertical && (m = {
                        height: o.state.listHeight
                    });
                    var f = null;
                    !1 === o.props.vertical ? !0 === o.props.centerMode && (f = {
                        padding: "0px " + o.props.centerPadding
                    }) : !0 === o.props.centerMode && (f = {
                        padding: o.props.centerPadding + " 0px"
                    });
                    var g = tA(tA({}, m), f),
                        h = o.props.touchMove,
                        v = {
                            className: "slick-list",
                            style: g,
                            onClick: o.clickHandler,
                            onMouseDown: h ? o.swipeStart : null,
                            onMouseMove: o.state.dragging && h ? o.swipeMove : null,
                            onMouseUp: h ? o.swipeEnd : null,
                            onMouseLeave: o.state.dragging && h ? o.swipeEnd : null,
                            onTouchStart: h ? o.swipeStart : null,
                            onTouchMove: o.state.dragging && h ? o.swipeMove : null,
                            onTouchEnd: h ? o.touchEnd : null,
                            onTouchCancel: o.state.dragging && h ? o.swipeEnd : null,
                            onKeyDown: o.props.accessibility ? o.keyHandler : null
                        },
                        b = {
                            className: r,
                            dir: "ltr",
                            style: o.props.style
                        };
                    return o.props.unslick && (v = {
                        className: "slick-list"
                    }, b = {
                        className: r,
                        style: o.props.style
                    }), l.default.createElement("div", b, o.props.unslick ? "" : t, l.default.createElement("div", tT({
                        ref: o.listRefHandler
                    }, v), l.default.createElement(nx, tT({
                        ref: o.trackRefHandler
                    }, i), o.props.children)), o.props.unslick ? "" : n, o.props.unslick ? "" : e)
                }), o.list = null, o.track = null, o.state = tA(tA({}, tV), {}, {
                    currentSlide: o.props.initialSlide,
                    targetSlide: o.props.initialSlide ? o.props.initialSlide : 0,
                    slideCount: l.default.Children.count(o.props.children)
                }), o.callbackTimers = [], o.clickable = !0, o.debouncedResize = null;
                var n, r, o, a = o.ssrInit();
                return o.state = tA(tA({}, o.state), a), o
            }
            return tq(t, e), tD(t, [{
                key: "didPropsChange",
                value: function(e) {
                    for (var t = !1, n = 0, r = Object.keys(this.props); n < r.length; n++) {
                        var o = r[n];
                        if (!e.hasOwnProperty(o) || !("object" === tH(e[o]) || "function" == typeof e[o] || isNaN(e[o])) && e[o] !== this.props[o]) {
                            t = !0;
                            break
                        }
                    }
                    return t || l.default.Children.count(this.props.children) !== l.default.Children.count(e.children)
                }
            }])
        }(l.default.Component),
        nM = e.i(52240),
        nz = function(e) {
            function t(e) {
                var n, l, r;
                return tO(this, t), l = t, r = [e], l = tj(l), tL(n = tF(this, t_() ? Reflect.construct(l, r || [], tj(this).constructor) : l.apply(this, r)), "innerSliderRefHandler", function(e) {
                    return n.innerSlider = e
                }), tL(n, "slickPrev", function() {
                    return n.innerSlider.slickPrev()
                }), tL(n, "slickNext", function() {
                    return n.innerSlider.slickNext()
                }), tL(n, "slickGoTo", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return n.innerSlider.slickGoTo(e, t)
                }), tL(n, "slickPause", function() {
                    return n.innerSlider.pause("paused")
                }), tL(n, "slickPlay", function() {
                    return n.innerSlider.autoPlay("play")
                }), n.state = {
                    breakpoint: null
                }, n._responsiveMediaHandlers = [], n
            }
            return tq(t, e), tD(t, [{
                key: "media",
                value: function(e, t) {
                    var n = window.matchMedia(e),
                        l = function(e) {
                            e.matches && t()
                        };
                    n.addListener(l), this._responsiveMediaHandlers.push({
                        mql: n,
                        query: e,
                        listener: l
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.props.responsive) {
                        var t = this.props.responsive.map(function(e) {
                            return e.breakpoint
                        });
                        t.sort(function(e, t) {
                            return e - t
                        }), t.forEach(function(n, l) {
                            var r;
                            r = 0 === l ? (0, nM.default)({
                                minWidth: 0,
                                maxWidth: n
                            }) : (0, nM.default)({
                                minWidth: t[l - 1] + 1,
                                maxWidth: n
                            }), ng() && e.media(r, function() {
                                e.setState({
                                    breakpoint: n
                                })
                            })
                        });
                        var n = (0, nM.default)({
                            minWidth: t.slice(-1)[0]
                        });
                        ng() && this.media(n, function() {
                            e.setState({
                                breakpoint: null
                            })
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._responsiveMediaHandlers.forEach(function(e) {
                        e.mql.removeListener(e.listener)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this;
                    (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter(function(e) {
                        return e.breakpoint === n.state.breakpoint
                    }))[0].settings ? "unslick" : tA(tA(tA({}, tY), this.props), t[0].settings) : tA(tA({}, tY), this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                    var r = l.default.Children.toArray(this.props.children);
                    r = r.filter(function(e) {
                        return "string" == typeof e ? !!e.trim() : !!e
                    }), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                    for (var o = [], a = null, i = 0; i < r.length; i += e.rows * e.slidesPerRow) {
                        for (var s = [], c = i; c < i + e.rows * e.slidesPerRow; c += e.slidesPerRow) {
                            for (var d = [], u = c; u < c + e.slidesPerRow && (e.variableWidth && r[u].props.style && (a = r[u].props.style.width), !(u >= r.length)); u += 1) d.push(l.default.cloneElement(r[u], {
                                key: 100 * i + 10 * c + u,
                                tabIndex: -1,
                                style: {
                                    width: "".concat(100 / e.slidesPerRow, "%"),
                                    display: "inline-block"
                                }
                            }));
                            s.push(l.default.createElement("div", {
                                key: 10 * i + c
                            }, d))
                        }
                        e.variableWidth ? o.push(l.default.createElement("div", {
                            key: i,
                            style: {
                                width: a
                            }
                        }, s)) : o.push(l.default.createElement("div", {
                            key: i
                        }, s))
                    }
                    if ("unslick" === e) {
                        var p = "regular slider " + (this.props.className || "");
                        return l.default.createElement("div", {
                            className: p
                        }, r)
                    }
                    return o.length <= e.slidesToShow && (e.unslick = !0), l.default.createElement(nI, tT({
                        style: this.props.style,
                        ref: this.innerSliderRefHandler
                    }, nh.reduce(function(t, n) {
                        return e.hasOwnProperty(n) && (t[n] = e[n]), t
                    }, {})), o)
                }
            }])
        }(l.default.Component);
    let nR = "--dot-duration",
        nT = (0, y.genStyleHooks)("Carousel", e => [(e => {
            let {
                componentCls: t,
                antCls: n
            } = e;
            return {
                [t]: { ...(0, b.resetComponent)(e),
                    ".slick-slider": {
                        position: "relative",
                        display: "block",
                        boxSizing: "border-box",
                        touchAction: "pan-y",
                        WebkitTouchCallout: "none",
                        WebkitTapHighlightColor: "transparent",
                        ".slick-track, .slick-list": {
                            transform: "translate3d(0, 0, 0)",
                            touchAction: "pan-y"
                        }
                    },
                    ".slick-list": {
                        position: "relative",
                        display: "block",
                        margin: 0,
                        padding: 0,
                        overflow: "hidden",
                        "&:focus": {
                            outline: "none"
                        },
                        "&.dragging": {
                            cursor: "pointer"
                        },
                        ".slick-slide": {
                            pointerEvents: "none",
                            [`input${n}-radio-input, input${n}-checkbox-input`]: {
                                visibility: "hidden"
                            },
                            "&.slick-active": {
                                pointerEvents: "auto",
                                [`input${n}-radio-input, input${n}-checkbox-input`]: {
                                    visibility: "visible"
                                }
                            },
                            "> div > div": {
                                verticalAlign: "bottom"
                            }
                        }
                    },
                    ".slick-track": {
                        position: "relative",
                        top: 0,
                        insetInlineStart: 0,
                        display: "block",
                        "&::before, &::after": {
                            display: "table",
                            content: '""'
                        },
                        "&::after": {
                            clear: "both"
                        }
                    },
                    ".slick-slide": {
                        display: "none",
                        float: "left",
                        height: "100%",
                        minHeight: 1,
                        img: {
                            display: "block"
                        },
                        "&.dragging img": {
                            pointerEvents: "none"
                        }
                    },
                    ".slick-initialized .slick-slide": {
                        display: "block"
                    },
                    ".slick-vertical .slick-slide": {
                        display: "block",
                        height: "auto"
                    }
                }
            }
        })(e), (e => {
            let {
                componentCls: t,
                motionDurationSlow: n,
                arrowSize: l,
                arrowOffset: r
            } = e, o = e.calc(l).div(Math.SQRT2).equal();
            return {
                [t]: {
                    ".slick-prev, .slick-next": {
                        position: "absolute",
                        top: "50%",
                        width: l,
                        height: l,
                        transform: "translateY(-50%)",
                        color: "#fff",
                        opacity: .4,
                        background: "transparent",
                        padding: 0,
                        lineHeight: 0,
                        border: 0,
                        outline: "none",
                        cursor: "pointer",
                        zIndex: 1,
                        transition: `opacity ${n}`,
                        "&:hover, &:focus": {
                            opacity: 1
                        },
                        "&.slick-disabled": {
                            pointerEvents: "none",
                            opacity: 0
                        },
                        "&::after": {
                            boxSizing: "border-box",
                            position: "absolute",
                            top: e.calc(l).sub(o).div(2).equal(),
                            insetInlineStart: e.calc(l).sub(o).div(2).equal(),
                            display: "inline-block",
                            width: o,
                            height: o,
                            border: "0 solid currentcolor",
                            borderInlineStartWidth: 2,
                            borderBlockStartWidth: 2,
                            borderRadius: 1,
                            content: '""'
                        }
                    },
                    ".slick-prev": {
                        insetInlineStart: r,
                        "&::after": {
                            transform: "rotate(-45deg)"
                        }
                    },
                    ".slick-next": {
                        insetInlineEnd: r,
                        "&::after": {
                            transform: "rotate(135deg)"
                        }
                    }
                }
            }
        })(e), (e => {
            let {
                componentCls: t,
                dotOffset: n,
                dotWidth: l,
                dotHeight: r,
                dotGap: o,
                colorBgContainer: a,
                motionDurationSlow: i
            } = e, s = new es.Keyframes(`${e.prefixCls}-dot-animation`, {
                from: {
                    width: 0
                },
                to: {
                    width: e.dotActiveWidth
                }
            });
            return {
                [t]: {
                    ".slick-dots": {
                        position: "absolute",
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        zIndex: 15,
                        display: "flex !important",
                        justifyContent: "center",
                        paddingInlineStart: 0,
                        margin: 0,
                        listStyle: "none",
                        "&-bottom": {
                            bottom: n
                        },
                        "&-top": {
                            top: n,
                            bottom: "auto"
                        },
                        li: {
                            position: "relative",
                            display: "inline-block",
                            flex: "0 1 auto",
                            boxSizing: "content-box",
                            width: l,
                            height: r,
                            marginInline: o,
                            padding: 0,
                            textAlign: "center",
                            textIndent: -999,
                            verticalAlign: "top",
                            transition: `all ${i}`,
                            borderRadius: r,
                            overflow: "hidden",
                            "&::after": {
                                display: "block",
                                position: "absolute",
                                top: 0,
                                insetInlineStart: 0,
                                width: 0,
                                height: r,
                                content: '""',
                                background: "transparent",
                                borderRadius: r,
                                opacity: 1,
                                outline: "none",
                                cursor: "pointer",
                                overflow: "hidden"
                            },
                            button: {
                                position: "relative",
                                display: "block",
                                width: "100%",
                                height: r,
                                padding: 0,
                                color: "transparent",
                                fontSize: 0,
                                background: a,
                                border: 0,
                                borderRadius: r,
                                outline: "none",
                                cursor: "pointer",
                                opacity: .2,
                                transition: `all ${i}`,
                                overflow: "hidden",
                                "&:hover": {
                                    opacity: .75
                                },
                                "&::after": {
                                    position: "absolute",
                                    inset: e.calc(o).mul(-1).equal(),
                                    content: '""'
                                }
                            },
                            "&.slick-active": {
                                width: e.dotActiveWidth,
                                position: "relative",
                                "&:hover": {
                                    opacity: 1
                                },
                                "&::after": {
                                    background: a,
                                    animationName: s,
                                    animationDuration: `var(${nR})`,
                                    animationTimingFunction: "ease-out",
                                    animationFillMode: "forwards"
                                }
                            }
                        }
                    }
                }
            }
        })(e), (e => {
            let {
                componentCls: t,
                dotOffset: n,
                arrowOffset: l,
                marginXXS: r
            } = e, o = new es.Keyframes(`${e.prefixCls}-dot-vertical-animation`, {
                from: {
                    height: 0
                },
                to: {
                    height: e.dotActiveWidth
                }
            }), a = {
                width: e.dotHeight,
                height: e.dotWidth
            };
            return {
                [`${t}-vertical`]: {
                    ".slick-prev, .slick-next": {
                        insetInlineStart: "50%",
                        marginBlockStart: "unset",
                        transform: "translateX(-50%)"
                    },
                    ".slick-prev": {
                        insetBlockStart: l,
                        insetInlineStart: "50%",
                        "&::after": {
                            transform: "rotate(45deg)"
                        }
                    },
                    ".slick-next": {
                        insetBlockStart: "auto",
                        insetBlockEnd: l,
                        "&::after": {
                            transform: "rotate(-135deg)"
                        }
                    },
                    ".slick-dots": {
                        top: "50%",
                        bottom: "auto",
                        flexDirection: "column",
                        width: e.dotHeight,
                        height: "auto",
                        margin: 0,
                        transform: "translateY(-50%)",
                        "&-start": {
                            insetInlineEnd: "auto",
                            insetInlineStart: n
                        },
                        "&-end": {
                            insetInlineEnd: n,
                            insetInlineStart: "auto"
                        },
                        li: { ...a,
                            margin: `${(0,v.unit)(r)} 0`,
                            verticalAlign: "baseline",
                            button: a,
                            "&::after": { ...a,
                                height: 0
                            },
                            "&.slick-active": { ...a,
                                height: e.dotActiveWidth,
                                button: { ...a,
                                    height: e.dotActiveWidth
                                },
                                "&::after": { ...a,
                                    animationName: o,
                                    animationDuration: `var(${nR})`,
                                    animationTimingFunction: "ease-out",
                                    animationFillMode: "forwards"
                                }
                            }
                        }
                    }
                }
            }
        })(e), (e => {
            let {
                componentCls: t
            } = e;
            return [{
                [`${t}-rtl`]: {
                    direction: "rtl"
                }
            }, {
                [`${t}-vertical`]: {
                    ".slick-dots": {
                        [`${t}-rtl&`]: {
                            flexDirection: "column"
                        }
                    }
                }
            }]
        })(e)], e => ({
            arrowSize: 16,
            arrowOffset: e.marginXS,
            dotWidth: 16,
            dotHeight: 3,
            dotGap: e.marginXXS,
            dotOffset: 12,
            dotWidthActive: 24,
            dotActiveWidth: 24
        }), {
            deprecatedTokens: [
                ["dotWidthActive", "dotActiveWidth"]
            ]
        }),
        nH = "slick-dots",
        nP = ({
            currentSlide: e,
            slideCount: t,
            ...n
        }) => l.createElement("button", {
            type: "button",
            ...n
        }),
        nL = l.forwardRef((e, t) => {
            let {
                dots: n = !0,
                arrows: r = !1,
                prevArrow: o,
                nextArrow: a,
                draggable: i = !1,
                waitForAnimate: s = !1,
                dotPosition: c,
                dotPlacement: d,
                vertical: u,
                rootClassName: m,
                className: f,
                style: g,
                id: v,
                autoplay: b = !1,
                autoplaySpeed: y = 3e3,
                rtl: $,
                ...x
            } = e, S = l.useMemo(() => {
                let e = d ? ? c ? ? "bottom";
                switch (e) {
                    case "left":
                        return "start";
                    case "right":
                        return "end";
                    default:
                        return e
                }
            }, [c, d]), C = u ? ? ("start" === S || "end" === S), {
                getPrefixCls: k,
                direction: E,
                className: w,
                style: N
            } = (0, h.useComponentConfig)("carousel"), I = l.useRef(null), M = (e, t = !1) => {
                I.current.slickGoTo(e, t)
            };
            l.useImperativeHandle(t, () => ({
                goTo: M,
                autoPlay: I.current.innerSlider.autoPlay,
                innerSlider: I.current.innerSlider,
                prev: I.current.slickPrev,
                next: I.current.slickNext
            }), [I.current]);
            let {
                children: z,
                initialSlide: R = 0
            } = e, T = (0, ej.toArray)(z).length, H = ($ ? ? "rtl" === E) && !u;
            l.useEffect(() => {
                T > 0 && M(H ? T - R - 1 : R, !1)
            }, [T, R, H]);
            let P = {
                vertical: C,
                className: (0, p.clsx)(f, w),
                style: { ...N,
                    ...g
                },
                autoplay: !!b,
                ...x
            };
            "fade" === P.effect && (P.fade = !0);
            let L = k("carousel", P.prefixCls),
                B = !!n,
                A = (0, p.clsx)(nH, `${nH}-${S}`, "boolean" != typeof n && n ? .className),
                [O, W] = nT(L),
                D = (0, p.clsx)(L, {
                    [`${L}-rtl`]: H,
                    [`${L}-vertical`]: P.vertical
                }, O, W, m),
                F = b && "object" == typeof b && b.dotDuration ? {
                    [nR]: `${y}ms`
                } : {};
            return l.createElement("div", {
                className: D,
                id: v,
                style: F
            }, l.createElement(nz, {
                ref: I,
                ...P,
                dots: B,
                dotsClass: A,
                arrows: r,
                prevArrow: o ? ? l.createElement(nP, {
                    "aria-label": H ? "next" : "prev"
                }),
                nextArrow: a ? ? l.createElement(nP, {
                    "aria-label": H ? "prev" : "next"
                }),
                draggable: i,
                verticalSwiping: C,
                autoplaySpeed: y,
                waitForAnimate: s,
                rtl: H
            }))
        });
    e.i(829148);
    var nB = e.i(736672),
        nB = nB,
        nA = e.i(987225),
        nO = e.i(940487),
        nW = e.i(440383);
    let nD = l.createContext({}),
        nF = "__rc_cascader_search_mark__",
        n_ = (e, t, {
            label: n = ""
        }) => t.some(t => String(t[n]).toLowerCase().includes(e.toLowerCase())),
        nj = (e, t, n, l) => t.map(e => e[l.label]).join(" / "),
        nX = "__RC_CASCADER_SPLIT__",
        nq = "SHOW_PARENT",
        nV = "SHOW_CHILD";

    function nG(e) {
        return e.join(nX)
    }

    function nY(e) {
        return e.map(nG)
    }

    function nU(e) {
        let {
            label: t,
            value: n,
            children: l
        } = e || {}, r = n || "value";
        return {
            label: t || "label",
            value: r,
            key: r,
            children: l || "children"
        }
    }

    function nK(e, t) {
        return e.isLeaf ? ? !e[t.children] ? .length
    }

    function nQ(e) {
        let t = e.parentElement;
        if (!t) return;
        let n = e.offsetTop - t.offsetTop;
        n - t.scrollTop < 0 ? t.scrollTo({
            top: n
        }) : n + e.offsetHeight - t.scrollTop > t.offsetHeight && t.scrollTo({
            top: n + e.offsetHeight - t.offsetHeight
        })
    }

    function nZ(e, t) {
        return e.map(e => e[nF] ? .map(e => e[t.value]))
    }

    function nJ(e) {
        return e ? Array.isArray(e) && Array.isArray(e[0]) ? e : (0 === e.length ? [] : [e]).map(e => Array.isArray(e) ? e : [e]) : []
    }

    function n0(e, t, n) {
        let l = new Set(e),
            r = t();
        return e.filter(e => {
            let t = r[e],
                o = t ? t.parent : null,
                a = t ? t.children : null;
            return !!t && !!t.node.disabled || (n === nV ? !(a && a.some(e => e.key && l.has(e.key))) : !(o && !o.node.disabled && l.has(o.key)))
        })
    }

    function n1(e, t, n, l = !1) {
        let r = t,
            o = [];
        for (let t = 0; t < e.length; t += 1) {
            let a = e[t],
                i = r ? .findIndex(e => {
                    let t = e[n.value];
                    return l ? String(t) === String(a) : t === a
                }),
                s = -1 !== i ? r ? .[i] : null;
            o.push({
                value: s ? .[n.value] ? ? a,
                index: i,
                option: s
            }), r = s ? .[n.children]
        }
        return o
    }

    function n2(e, t) {
        return l.useCallback(n => {
            let l = [],
                r = [];
            return n.forEach(n => {
                n1(n, e, t).every(e => e.option) ? r.push(n) : l.push(n)
            }), [r, l]
        }, [e, t])
    }
    var n3 = e.i(932681);

    function n5(e, t) {
        let n, r = l.useMemo(() => t || [], [t]),
            o = (n = l.useRef({
                options: [],
                info: {
                    keyEntities: {},
                    pathKeyEntities: {}
                }
            }), l.useCallback(() => (n.current.options !== r && (n.current.options = r, n.current.info = (0, n3.convertDataToEntities)(r, {
                fieldNames: e,
                initWrapper: e => ({ ...e,
                    pathKeyEntities: {}
                }),
                processEntity: (t, n) => {
                    let l = t.nodes.map(t => t[e.value]).join(nX);
                    n.pathKeyEntities[l] = t, t.key = l
                }
            })), n.current.info.pathKeyEntities), [e, r])),
            a = l.useCallback(t => {
                let n = o();
                return t.map(t => {
                    let {
                        nodes: l
                    } = n[t];
                    return l.map(t => t[e.value])
                })
            }, [o, e]);
        return [r, o, a]
    }
    var n4 = e.i(24308),
        n8 = e.i(326676);

    function n6(e, t, n, l, r, o, a, i) {
        return s => {
            if (e) {
                let e = nG(s),
                    c = nY(n),
                    d = nY(l),
                    u = c.includes(e),
                    p = r.some(t => nG(t) === e),
                    m = n,
                    f = r;
                if (p && !u) f = r.filter(t => nG(t) !== e);
                else {
                    let t, n = u ? c.filter(t => t !== e) : [...c, e],
                        l = o();
                    u ? {
                        checkedKeys: t
                    } = (0, n8.conductCheck)(n, {
                        checked: !1,
                        halfCheckedKeys: d
                    }, l) : {
                        checkedKeys: t
                    } = (0, n8.conductCheck)(n, !0, l), m = a(n0(t, o, i))
                }
                t([...f, ...m])
            } else t(s)
        }
    }

    function n9(e, t, n, r, o) {
        return l.useMemo(() => {
            let [l, a] = o(t);
            if (!e || !t.length) return [l, [], a];
            let i = nY(l),
                s = n(),
                {
                    checkedKeys: c,
                    halfCheckedKeys: d
                } = (0, n8.conductCheck)(i, !0, s);
            return [r(c), r(d), a]
        }, [e, t, n, r, o])
    }
    var n7 = e.i(960702),
        n7 = n7;
    let le = l.memo(({
        children: e
    }) => e, (e, t) => !t.open);

    function lt({
        prefixCls: e,
        checked: t,
        halfChecked: n,
        disabled: r,
        onClick: o,
        disableCheckbox: a
    }) {
        let {
            checkable: i
        } = l.useContext(nD);
        return l.createElement("span", {
            className: (0, p.clsx)(`${e}`, {
                [`${e}-checked`]: t,
                [`${e}-indeterminate`]: !t && n,
                [`${e}-disabled`]: r || a
            }),
            onClick: o
        }, "boolean" != typeof i ? i : null)
    }

    function ln() {
        return (ln = Object.assign.bind()).apply(this, arguments)
    }
    let ll = "__cascader_fix_label__";

    function lr({
        prefixCls: e,
        multiple: t,
        options: n,
        activeValue: r,
        prevValuePath: o,
        onToggleOpen: a,
        onSelect: i,
        onActive: s,
        checkedSet: c,
        halfCheckedSet: u,
        loadingKeys: m,
        isSelectable: f,
        disabled: g
    }) {
        let h = `${e}-menu`,
            v = `${e}-menu-item`,
            b = l.useRef(null),
            {
                fieldNames: y,
                changeOnSelect: $,
                expandTrigger: x,
                expandIcon: S,
                loadingIcon: C,
                popupMenuColumnStyle: k,
                optionRender: E,
                classNames: w,
                styles: N
            } = l.useContext(nD),
            I = "hover" === x,
            M = l.useMemo(() => n.map(e => {
                let {
                    disabled: t,
                    disableCheckbox: n
                } = e, l = e[nF], r = e[ll] ? ? e[y.label], a = e[y.value], i = nK(e, y), s = l ? l.map(e => e[y.value]) : [...o, a], d = nG(s), p = m.includes(d);
                return {
                    disabled: t,
                    label: r,
                    value: a,
                    isLeaf: i,
                    isLoading: p,
                    checked: c.has(d),
                    halfChecked: u.has(d),
                    option: e,
                    disableCheckbox: n,
                    fullPath: s,
                    fullPathKey: d
                }
            }), [n, c, y, u, m, o]);
        return l.useEffect(() => {
            if (b.current) {
                let e = `.${v}-active`,
                    t = b.current.querySelector(e);
                t && nQ(t)
            }
        }, [r, v]), l.createElement("ul", {
            className: (0, p.clsx)(h, w ? .popup ? .list),
            style: N ? .popup ? .list,
            ref: b,
            role: "menu"
        }, M.map(({
            disabled: n,
            label: o,
            value: c,
            isLeaf: u,
            isLoading: m,
            checked: h,
            halfChecked: b,
            option: y,
            fullPath: x,
            fullPathKey: M,
            disableCheckbox: z
        }) => {
            let R, T = (0, d.default)(y, {
                    aria: !0,
                    data: !0
                }),
                H = () => {
                    if (g || n) return;
                    let e = [...x];
                    I && u && e.pop(), s(e)
                },
                P = () => {
                    !f(y) || g || n || i(x, u)
                };
            return "string" == typeof y.title ? R = y.title : "string" == typeof o && (R = o), l.createElement("li", ln({
                key: M
            }, T, {
                className: (0, p.clsx)(v, w ? .popup ? .listItem, {
                    [`${v}-expand`]: !u,
                    [`${v}-active`]: r === c || r === M,
                    [`${v}-disabled`]: g || n,
                    [`${v}-loading`]: m
                }),
                style: { ...k,
                    ...N ? .popup ? .listItem
                },
                role: "menuitemcheckbox",
                title: R,
                "aria-checked": h,
                "data-path-key": M,
                onClick: () => {
                    H(), z || (!t || u) && P()
                },
                onDoubleClick: () => {
                    $ && a(!1)
                },
                onMouseEnter: () => {
                    I && H()
                },
                onMouseDown: e => {
                    e.preventDefault()
                }
            }), t && l.createElement(lt, {
                prefixCls: `${e}-checkbox`,
                checked: h,
                halfChecked: b,
                disabled: g || n || z,
                disableCheckbox: z,
                onClick: e => {
                    z || (e.stopPropagation(), P())
                }
            }), l.createElement("div", {
                className: `${v}-content`
            }, E ? E(y) : o), !m && S && !u && l.createElement("div", {
                className: `${v}-expand-icon`
            }, S), m && C && l.createElement("div", {
                className: `${v}-loading-icon`
            }, C))
        }))
    }

    function lo() {
        return (lo = Object.assign.bind()).apply(this, arguments)
    }
    let la = l.forwardRef((e, t) => {
        let {
            prefixCls: n,
            multiple: r,
            searchValue: o,
            toggleOpen: a,
            notFoundContent: i,
            direction: s,
            open: c,
            disabled: d
        } = e, u = l.useRef(null), {
            options: m,
            values: f,
            halfValues: g,
            fieldNames: h,
            changeOnSelect: v,
            onSelect: b,
            searchOptions: y,
            popupPrefixCls: $,
            loadData: x,
            expandTrigger: S
        } = l.useContext(nD), C = $ || n, [k, E] = l.useState([]);
        l.useEffect(() => {
            k.length && k.forEach(e => {
                let t = n1(e.split(nX), m, h, !0).map(({
                        option: e
                    }) => e),
                    n = t[t.length - 1];
                (!n || n[h.children] || nK(n, h)) && E(t => t.filter(t => t !== e))
            })
        }, [m, k, h]);
        let w = l.useMemo(() => new Set(nY(f)), [f]),
            N = l.useMemo(() => new Set(nY(g)), [g]),
            [I, M] = ((e, t) => {
                let {
                    values: n
                } = l.useContext(nD), r = n[0], [o, a] = l.useState([]);
                return l.useEffect(() => {
                    e || a(r || [])
                }, [t, r]), [o, a]
            })(r, c),
            z = e => {
                M(e), (e => {
                    if (!x || o) return;
                    let t = n1(e, m, h).map(({
                            option: e
                        }) => e),
                        n = t[t.length - 1];
                    if (n && !nK(n, h)) {
                        let n = nG(e);
                        E(e => [...e, n]), x(t)
                    }
                })(e)
            },
            R = e => {
                if (d) return !1;
                let {
                    disabled: t
                } = e, n = nK(e, h);
                return !t && (n || v || r)
            },
            T = (e, t, n = !1) => {
                b(e), !r && (t || v && ("hover" === S || n)) && a(!1)
            },
            H = l.useMemo(() => o ? y : m, [o, y, m]),
            P = l.useMemo(() => {
                let e = [{
                        options: H
                    }],
                    t = H,
                    n = nZ(t, h);
                for (let l = 0; l < I.length; l += 1) {
                    let r = I[l],
                        o = t.find((e, t) => (n[t] ? nG(n[t]) : e[h.value]) === r),
                        a = o ? .[h.children];
                    if (!a ? .length) break;
                    t = a, e.push({
                        options: a
                    })
                }
                return e
            }, [H, I, h]);
        ((e, t, n, r, o, a, i) => {
            let {
                direction: s,
                searchValue: c,
                toggleOpen: d,
                open: u
            } = i, p = "rtl" === s, [m, f, g, h] = l.useMemo(() => {
                let e = -1,
                    l = t,
                    o = [],
                    a = [],
                    i = r.length,
                    s = nZ(t, n);
                for (let t = 0; t < i && l; t += 1) {
                    let i = l.findIndex((e, l) => (s[l] ? nG(s[l]) : e[n.value]) === r[t]);
                    if (-1 === i) break;
                    e = i, o.push(e), a.push(r[t]), l = l[e][n.children]
                }
                let c = t;
                for (let e = 0; e < o.length - 1; e += 1) c = c[o[e]][n.children];
                return [a, e, c, s]
            }, [r, n, t]), v = e => {
                o(e)
            }, b = () => {
                m.length > 1 ? v(m.slice(0, -1)) : d(!1)
            }, y = () => {
                let e = (g[f] ? .[n.children] || []).find(e => !e.disabled);
                e && v([...m, e[n.value]])
            };
            l.useImperativeHandle(e, () => ({
                onKeyDown: e => {
                    let {
                        which: t
                    } = e;
                    switch (t) {
                        case K.default.UP:
                        case K.default.DOWN:
                            {
                                let e = 0;t === K.default.UP ? e = -1 : t === K.default.DOWN && (e = 1),
                                0 !== e && (e => {
                                    let t = g.length,
                                        l = f; - 1 === l && e < 0 && (l = t);
                                    for (let r = 0; r < t; r += 1) {
                                        let r = g[l = (l + e + t) % t];
                                        if (r && !r.disabled) return void v(m.slice(0, -1).concat(h[l] ? nG(h[l]) : r[n.value]))
                                    }
                                })(e);
                                break
                            }
                        case K.default.LEFT:
                            if (c) break;
                            p ? y() : b();
                            break;
                        case K.default.RIGHT:
                            if (c) break;
                            p ? b() : y();
                            break;
                        case K.default.BACKSPACE:
                            c || b();
                            break;
                        case K.default.ENTER:
                            if (m.length) {
                                let e = g[f],
                                    t = e ? .[nF] || [];
                                t.length ? a(t.map(e => e[n.value]), t[t.length - 1]) : a(m, g[f])
                            }
                            break;
                        case K.default.ESC:
                            d(!1), u && e.stopPropagation()
                    }
                },
                onKeyUp: () => {}
            }))
        })(t, H, h, I, z, (e, t) => {
            R(t) && T(e, nK(t, h), !0)
        }, {
            direction: s,
            searchValue: o,
            toggleOpen: a,
            open: c
        }), l.useEffect(() => {
            if (!o)
                for (let e = 0; e < I.length; e += 1) {
                    let t = nG(I.slice(0, e + 1)),
                        n = u.current ? .querySelector(`li[data-path-key="${t.replace(/\\{0,2}"/g,'\\"')}"]`);
                    n && nQ(n)
                }
        }, [I, o]);
        let L = !P[0] ? .options ? .length,
            B = [{
                [h.value]: "__EMPTY__",
                [ll]: i,
                disabled: !0
            }],
            A = { ...e,
                multiple: !L && r,
                onSelect: T,
                onActive: z,
                onToggleOpen: a,
                checkedSet: w,
                halfCheckedSet: N,
                loadingKeys: k,
                isSelectable: R
            },
            O = (L ? [{
                options: B
            }] : P).map((e, t) => {
                let n = I.slice(0, t),
                    r = I[t];
                return l.createElement(lr, lo({
                    key: t
                }, A, {
                    prefixCls: C,
                    options: e.options,
                    prevValuePath: n,
                    activeValue: r
                }))
            });
        return l.createElement(le, {
            open: c
        }, l.createElement("div", {
            className: (0, p.clsx)(`${C}-menus`, {
                [`${C}-menu-empty`]: L,
                [`${C}-rtl`]: "rtl" === s
            }),
            ref: u
        }, O))
    });

    function li() {
        return (li = Object.assign.bind()).apply(this, arguments)
    }
    let ls = l.forwardRef((e, t) => {
        let n = (0, n7.default)();
        return l.createElement(la, li({}, e, n, {
            ref: t
        }))
    });

    function lc() {}

    function ld(e) {
        let {
            prefixCls: t = "rc-cascader",
            style: n,
            className: r,
            options: o,
            checkable: a,
            defaultValue: i,
            value: s,
            fieldNames: c,
            changeOnSelect: d,
            onChange: u,
            showCheckedStrategy: m,
            loadData: f,
            expandTrigger: g,
            expandIcon: h = ">",
            loadingIcon: v,
            direction: b,
            notFoundContent: y = "Not Found",
            disabled: $,
            optionRender: x
        } = e, S = !!a, [C, k] = (0, tm.useControlledState)(i, s), E = nJ(C), w = l.useMemo(() => nU(c), [JSON.stringify(c)]), [N, I, M] = n5(w, o), [z, R, T] = n9(S, E, I, M, n2(N, w)), H = (0, P.useEvent)(e => {
            if (k(e), u) {
                let t = nJ(e),
                    n = t.map(e => n1(e, N, w).map(e => e.option));
                u(S ? t : t[0], S ? n : n[0])
            }
        }), L = n6(S, H, z, R, T, I, M, m), B = (0, P.useEvent)(e => {
            L(e)
        }), A = l.useMemo(() => ({
            options: N,
            fieldNames: w,
            values: z,
            halfValues: R,
            changeOnSelect: d,
            onSelect: B,
            checkable: a,
            searchOptions: [],
            popupPrefixCls: void 0,
            loadData: f,
            expandTrigger: g,
            expandIcon: h,
            loadingIcon: v,
            popupMenuColumnStyle: void 0,
            optionRender: x
        }), [N, w, z, R, d, B, a, f, g, h, v, x]), O = `${t}-panel`, W = !N.length;
        return l.createElement(nD.Provider, {
            value: A
        }, l.createElement("div", {
            className: (0, p.clsx)(O, {
                [`${O}-rtl`]: "rtl" === b,
                [`${O}-empty`]: W
            }, r),
            style: n
        }, W ? y : l.createElement(la, {
            prefixCls: t,
            searchValue: "",
            multiple: S,
            toggleOpen: lc,
            open: !0,
            direction: b,
            disabled: $
        })))
    }

    function lu() {
        return (lu = Object.assign.bind()).apply(this, arguments)
    }
    let lp = l.forwardRef((e, t) => {
        let n, {
                id: r,
                prefixCls: o = "rc-cascader",
                fieldNames: a,
                defaultValue: i,
                value: s,
                changeOnSelect: c,
                onChange: d,
                displayRender: u,
                checkable: p,
                showSearch: m,
                expandTrigger: f,
                options: g,
                popupPrefixCls: h,
                loadData: v,
                open: b,
                popupClassName: y,
                popupMenuColumnStyle: $,
                popupStyle: x,
                classNames: S,
                styles: C,
                placement: k,
                onPopupVisibleChange: E,
                expandIcon: w = ">",
                loadingIcon: N,
                children: I,
                popupMatchSelectWidth: M = !1,
                showCheckedStrategy: z = nq,
                optionRender: R,
                ...T
            } = e,
            H = (0, nA.default)(r),
            P = !!p,
            [L, B] = (0, nW.default)(i, s),
            A = nJ(L),
            O = l.useMemo(() => nU(a), [JSON.stringify(a)]),
            [W, D, F] = n5(O, g),
            [_, j] = function(e, t) {
                let {
                    autoClearSearchValue: n,
                    searchValue: r,
                    onSearch: o
                } = t;
                return l.useMemo(() => {
                    if (!e) return [!1, {}];
                    let t = {
                        matchInputWidth: !0,
                        limit: 50,
                        autoClearSearchValue: n,
                        searchValue: r,
                        onSearch: o
                    };
                    return e && "object" == typeof e && (t = { ...t,
                        ...e
                    }), t.limit <= 0 && (t.limit = !1), [!0, t]
                }, [e, n, r, o])
            }(m, e),
            {
                autoClearSearchValue: X = !0,
                searchValue: q,
                onSearch: V
            } = j,
            [G, Y] = (0, nW.default)("", q),
            U = G || "",
            K = ((e, t, n, r, o, a) => {
                let {
                    filter: i = n_,
                    render: s = nj,
                    limit: c = 50,
                    sort: d
                } = o;
                return l.useMemo(() => {
                    let l = [];
                    return e ? (! function t(o, u, p = !1) {
                        o.forEach(o => {
                            if (!d && !1 !== c && c > 0 && l.length >= c) return;
                            let m = [...u, o],
                                f = o[n.children],
                                g = p || o.disabled;
                            (!f || 0 === f.length || a) && i(e, m, {
                                label: n.label
                            }) && l.push({ ...o,
                                disabled: g,
                                [n.label]: s(e, m, r, n),
                                [nF]: m,
                                [n.children]: void 0
                            }), f && t(o[n.children], m, g)
                        })
                    }(t, []), d && l.sort((t, l) => d(t[nF], l[nF], e, n)), !1 !== c && c > 0 ? l.slice(0, c) : l) : []
                }, [e, t, n, r, s, a, i, d, c])
            })(U, W, O, h || o, j, c || P),
            [Q, Z, J] = n9(P, A, D, F, n2(W, O)),
            ee = (n = l.useMemo(() => [...J, ...F(n0(nY(Q), D, z))], [Q, D, F, J, z]), l.useMemo(() => {
                let e = u || (e => {
                    let t = P ? e.slice(-1) : e;
                    return t.every(e => ["string", "number"].includes(typeof e)) ? t.join(" / ") : t.reduce((e, t, n) => {
                        let r = l.isValidElement(t) ? l.cloneElement(t, {
                            key: n
                        }) : t;
                        return 0 === n ? [r] : [...e, " / ", r]
                    }, [])
                });
                return n.map(t => {
                    let n = n1(t, W, O),
                        l = e(n.map(({
                            option: e,
                            value: t
                        }) => e ? .[O.label] ? ? t), n.map(({
                            option: e
                        }) => e)),
                        r = nG(t);
                    return {
                        label: l,
                        value: r,
                        key: r,
                        valueCells: t,
                        disabled: n[n.length - 1] ? .option ? .disabled
                    }
                })
            }, [n, W, O, u, P])),
            et = (0, nO.default)(e => {
                if (B(e), d) {
                    let t = nJ(e),
                        n = t.map(e => n1(e, W, O).map(e => e.option));
                    d(P ? t : t[0], P ? n : n[0])
                }
            }),
            en = n6(P, et, Q, Z, J, D, F, z),
            el = (0, nO.default)(e => {
                (!P || X) && Y(""), en(e)
            }),
            er = l.useMemo(() => ({
                classNames: S,
                styles: C,
                options: W,
                fieldNames: O,
                values: Q,
                halfValues: Z,
                changeOnSelect: c,
                onSelect: el,
                checkable: p,
                searchOptions: K,
                popupPrefixCls: h,
                loadData: v,
                expandTrigger: f,
                expandIcon: w,
                loadingIcon: N,
                popupMenuColumnStyle: $,
                optionRender: R
            }), [S, C, W, O, Q, Z, c, el, p, K, h, v, f, w, N, $, R]),
            eo = !(U ? K : W).length,
            ea = U && j.matchInputWidth || eo ? {} : {
                minWidth: "auto"
            };
        return l.createElement(nD.Provider, {
            value: er
        }, l.createElement(nB.default, lu({}, T, {
            ref: t,
            id: H,
            prefixCls: o,
            autoClearSearchValue: X,
            popupMatchSelectWidth: M,
            classNames: S,
            styles: C,
            popupStyle: { ...ea,
                ...x
            },
            displayValues: ee,
            onDisplayValuesChange: (e, t) => {
                if ("clear" === t.type) return void et([]);
                let {
                    valueCells: n
                } = t.values[0];
                el(n)
            },
            mode: P ? "multiple" : void 0,
            searchValue: U,
            onSearch: (e, t) => {
                Y(e), "blur" !== t.source && V && V(e)
            },
            showSearch: _,
            OptionList: ls,
            emptyOptions: eo,
            open: b,
            popupClassName: y,
            placement: k,
            onPopupVisibleChange: e => {
                E ? .(e)
            },
            getRawInputElement: () => I
        })))
    });
    lp.SHOW_PARENT = nq, lp.SHOW_CHILD = nV, lp.Panel = ld;
    var lm = e.i(613541),
        lf = e.i(52956),
        lg = e.i(721132),
        lh = e.i(937328),
        lv = e.i(517455),
        lb = e.i(792812),
        ly = e.i(85566),
        l$ = e.i(950302),
        lx = e.i(729151),
        lS = e.i(857172),
        lC = e.i(536047),
        lk = e.i(249616);
    let lE = function(e, t) {
        let {
            getPrefixCls: n,
            direction: r,
            renderEmpty: o
        } = l.useContext(h.ConfigContext);
        return [n("select", e), n("cascader", e), t || r, o]
    };

    function lw(e, t) {
        return l.useMemo(() => !!t && l.createElement("span", {
            className: `${e}-checkbox-inner`
        }), [e, t])
    }
    var lN = e.i(876083),
        lI = e.i(631829);
    let lM = (e, t, n) => {
        let r = n;
        n || (r = t ? l.createElement(lN.default, null) : l.createElement(lI.default, null));
        let o = l.useMemo(() => l.createElement("span", {
            className: `${e}-menu-item-loading-icon`
        }, l.createElement(ei.default, {
            spin: !0
        })), [e]);
        return l.useMemo(() => [r, o], [r, o])
    };
    var lz = e.i(372409),
        lR = e.i(236836);
    let lT = e => {
            let {
                prefixCls: t,
                componentCls: n
            } = e, l = `${n}-menu-item`, r = `
  &${l}-expand ${l}-expand-icon,
  ${l}-loading-icon
`;
            return [(0, lR.getStyle)(`${t}-checkbox`, e), {
                [n]: {
                    "&-checkbox": {
                        top: 0,
                        marginInlineEnd: e.paddingXS,
                        pointerEvents: "unset"
                    },
                    "&-menus": {
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "flex-start",
                        [`&${n}-menu-empty`]: {
                            [`${n}-menu`]: {
                                width: "100%",
                                height: "auto",
                                [l]: {
                                    color: e.colorTextDisabled
                                }
                            }
                        }
                    },
                    "&-menu": {
                        flexGrow: 1,
                        flexShrink: 0,
                        minWidth: e.controlItemWidth,
                        height: e.dropdownHeight,
                        margin: 0,
                        padding: e.menuPadding,
                        overflow: "auto",
                        verticalAlign: "top",
                        listStyle: "none",
                        "-ms-overflow-style": "-ms-autohiding-scrollbar",
                        "&:not(:last-child)": {
                            borderInlineEnd: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
                        },
                        "&-item": { ...b.textEllipsis,
                            display: "flex",
                            flexWrap: "nowrap",
                            alignItems: "center",
                            padding: e.optionPadding,
                            lineHeight: e.lineHeight,
                            cursor: "pointer",
                            transition: `all ${e.motionDurationMid}`,
                            borderRadius: e.borderRadiusSM,
                            "&:hover": {
                                background: e.controlItemBgHover
                            },
                            "&-disabled": {
                                color: e.colorTextDisabled,
                                cursor: "not-allowed",
                                "&:hover": {
                                    background: "transparent"
                                },
                                [r]: {
                                    color: e.colorTextDisabled
                                }
                            },
                            [`&-active:not(${l}-disabled)`]: {
                                "&, &:hover": {
                                    color: e.optionSelectedColor,
                                    fontWeight: e.optionSelectedFontWeight,
                                    backgroundColor: e.optionSelectedBg
                                }
                            },
                            "&-content": {
                                flex: "auto"
                            },
                            [r]: {
                                marginInlineStart: e.paddingXXS,
                                color: e.colorIcon,
                                fontSize: e.fontSizeIcon
                            },
                            "&-keyword": {
                                color: e.colorHighlight
                            }
                        }
                    }
                }
            }]
        },
        lH = e => {
            let t = Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2);
            return {
                controlWidth: 184,
                controlItemWidth: 111,
                dropdownHeight: 180,
                optionSelectedBg: e.controlItemBgActive,
                optionSelectedFontWeight: e.fontWeightStrong,
                optionPadding: `${t}px ${e.paddingSM}px`,
                menuPadding: e.paddingXXS,
                optionSelectedColor: e.colorText
            }
        },
        lP = (0, y.genStyleHooks)("Cascader", e => {
            let {
                componentCls: t,
                antCls: n
            } = e;
            return [{
                [t]: {
                    width: e.controlWidth
                }
            }, {
                [`${t}-dropdown`]: [{
                    [`&${n}-select-dropdown`]: {
                        padding: 0
                    }
                }, lT(e)]
            }, {
                [`${t}-dropdown-rtl`]: {
                    direction: "rtl"
                }
            }, (0, lz.genCompactItemStyle)(e)]
        }, lH, {
            resetFont: !1,
            unitless: {
                optionSelectedFontWeight: !0
            }
        }),
        lL = (0, y.genComponentStyleHook)(["Cascader", "Panel"], e => {
            let {
                componentCls: t
            } = e;
            return {
                [`${t}-panel`]: [lT(e), {
                    display: "inline-flex",
                    border: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                    borderRadius: e.borderRadiusLG,
                    overflowX: "auto",
                    maxWidth: "100%",
                    [`${t}-menus`]: {
                        alignItems: "stretch"
                    },
                    [`${t}-menu`]: {
                        height: "auto"
                    },
                    "&-empty": {
                        padding: e.paddingXXS
                    }
                }]
            }
        }, lH, {
            resetFont: !1
        }),
        {
            SHOW_CHILD: lB,
            SHOW_PARENT: lA
        } = lp,
        lO = (e, t, n, r) => {
            let o = [],
                a = e.toLowerCase();
            return t.forEach((e, t) => {
                var i;
                let s, c, d;
                0 !== t && o.push(" / ");
                let u = e[r.label],
                    p = typeof u;
                ("string" === p || "number" === p) && (i = String(u), s = i.toLowerCase().split(a).reduce((e, t, n) => 0 === n ? [t] : [].concat((0, H.default)(e), [a, t]), []), c = [], d = 0, s.forEach((e, t) => {
                    let r = d + e.length,
                        o = i.slice(d, r);
                    d = r, t % 2 == 1 && (o = l.createElement("span", {
                        className: `${n}-menu-item-keyword`,
                        key: `separator-${t}`
                    }, o)), c.push(o)
                }), u = c), o.push(u)
            }), o
        },
        lW = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                size: r,
                disabled: o,
                className: a,
                rootClassName: i,
                multiple: s,
                bordered: c = !0,
                transitionName: d,
                choiceTransitionName: u = "",
                popupClassName: f,
                expandIcon: g,
                placement: v,
                showSearch: b,
                allowClear: y = !0,
                notFoundContent: $,
                direction: x,
                getPopupContainer: S,
                status: C,
                showArrow: k,
                builtinPlacements: E,
                style: w,
                variant: N,
                dropdownClassName: I,
                dropdownRender: M,
                onDropdownVisibleChange: z,
                onPopupVisibleChange: R,
                dropdownMenuColumnStyle: T,
                popupRender: H,
                dropdownStyle: P,
                popupMenuColumnStyle: L,
                onOpenChange: B,
                styles: A,
                classNames: W,
                ...D
            } = e, F = (0, eD.omit)(D, ["suffixIcon"]), {
                getPrefixCls: _,
                getPopupContainer: j,
                className: X,
                style: q,
                classNames: V,
                styles: G
            } = (0, h.useComponentConfig)("cascader"), {
                popupOverflow: Y
            } = l.useContext(h.ConfigContext), {
                status: U,
                hasFeedback: K,
                isFormItemInput: Q,
                feedbackIcon: Z
            } = l.useContext(tg.FormItemInputContext), J = (0, lf.getMergedStatus)(U, C), [ee, et, en, el] = lE(n, x), er = "rtl" === en, eo = _(), ea = (0, O.default)(ee), [ei, es] = (0, l$.default)(ee, ea), ed = (0, O.default)(et);
            lP(et, ed);
            let {
                compactSize: eu,
                compactItemClassnames: ep
            } = (0, lk.useCompactItemContext)(ee, x), [em, ef] = (0, lb.default)("cascader", N, c), eg = $ || el ? .("Cascader") || l.createElement(lg.default, {
                componentName: "Cascader"
            }), eh = (0, lS.default)(H || M), ev = l.useMemo(() => {
                if (!b) return b;
                let e = {
                    render: lO
                };
                return "object" == typeof b && (e = { ...e,
                    ...b
                }), e
            }, [b]), eb = (0, lv.default)(e => r ? ? eu ? ? e), ey = l.useContext(lh.default), e$ = o ? ? ey, [ex, eS] = lM(ee, er, g), eC = lw(et, s), ek = (0, lC.default)(e.suffixIcon, k), {
                suffixIcon: eE,
                removeIcon: ew,
                clearIcon: eN
            } = (0, lx.default)({ ...e,
                hasFeedback: K,
                feedbackIcon: Z,
                showSuffixIcon: ek,
                multiple: s,
                prefixCls: ee,
                componentName: "Cascader"
            }), eI = l.useMemo(() => void 0 !== v ? v : er ? "bottomRight" : "bottomLeft", [v, er]), eM = { ...e,
                variant: em,
                size: eb,
                status: J,
                disabled: e$
            }, [ez, eR] = (0, m.useMergeSemantic)([V, W], [G, A], {
                props: eM
            }, {
                popup: {
                    _default: "root"
                }
            }), eT = { ...eR.popup ? .root,
                ...P
            }, [eH] = (0, ec.useZIndex)("SelectLike", eT ? .zIndex), eP = (0, p.clsx)(f || I, `${et}-dropdown`, {
                [`${et}-dropdown-rtl`]: "rtl" === en
            }, i, ea, ez.popup ? .root, ed, ei, es);
            return l.createElement(lp, {
                prefixCls: ee,
                className: (0, p.clsx)(!n && et, {
                    [`${ee}-lg`]: "large" === eb,
                    [`${ee}-sm`]: "small" === eb,
                    [`${ee}-rtl`]: er,
                    [`${ee}-${em}`]: ef,
                    [`${ee}-in-form-item`]: Q
                }, (0, lf.getStatusClassNames)(ee, J, K), ep, X, a, i, ez.root, ea, ed, ei, es),
                disabled: e$,
                style: { ...eR.root,
                    ...q,
                    ...w
                },
                classNames: ez,
                styles: eR,
                ...F,
                builtinPlacements: (0, ly.default)(E, Y),
                direction: en,
                placement: eI,
                notFoundContent: eg,
                allowClear: !0 === y ? {
                    clearIcon: eN
                } : y,
                showSearch: ev,
                expandIcon: ex,
                suffixIcon: eE,
                removeIcon: ew,
                loadingIcon: eS,
                checkable: eC,
                popupClassName: eP,
                popupPrefixCls: n || et,
                popupStyle: { ...eT,
                    zIndex: eH
                },
                popupRender: eh,
                popupMenuColumnStyle: L || T,
                onPopupVisibleChange: B || R || z,
                choiceTransitionName: (0, lm.getTransitionName)(eo, "", u),
                transitionName: (0, lm.getTransitionName)(eo, "slide-up", d),
                getPopupContainer: S || j,
                ref: t
            })
        }),
        lD = (0, eF.default)(lW, "popupAlign", e => (0, eD.omit)(e, ["visible"]));
    lW.SHOW_PARENT = lA, lW.SHOW_CHILD = lB, lW.Panel = function(e) {
        let {
            prefixCls: t,
            className: n,
            multiple: r,
            rootClassName: o,
            notFoundContent: a,
            direction: i,
            expandIcon: s,
            disabled: c
        } = e, d = l.useContext(lh.default), [u, m, f, g] = lE(t, i), h = (0, O.default)(m), [v, b] = lP(m, h);
        lL(m);
        let [y, $] = lM(u, "rtl" === f, s), x = a || g ? .("Cascader") || l.createElement(lg.default, {
            componentName: "Cascader"
        }), S = lw(m, r);
        return l.createElement(ld, { ...e,
            checkable: S,
            prefixCls: m,
            className: (0, p.clsx)(n, v, o, b, h),
            notFoundContent: x,
            direction: f,
            expandIcon: y,
            loadingIcon: $,
            disabled: c ? ? d
        })
    }, lW._InternalPanelDoNotUseOrYouWillBeFired = lD;
    var lF = e.i(374276),
        l_ = e.i(571610),
        lj = e.i(988122),
        lX = e.i(617206),
        lq = e.i(829672),
        lV = e.i(571070),
        lG = e.i(72787),
        lY = e.i(509808),
        lU = e.i(401676),
        lK = e.i(149809),
        lQ = e.i(931067);
    let lZ = (e, t) => {
            if (!e) return null;
            let n = {
                left: e.offsetLeft,
                right: e.parentElement.clientWidth - e.clientWidth - e.offsetLeft,
                width: e.clientWidth,
                top: e.offsetTop,
                bottom: e.parentElement.clientHeight - e.clientHeight - e.offsetTop,
                height: e.clientHeight
            };
            return t ? {
                left: 0,
                right: 0,
                width: 0,
                top: n.top,
                bottom: n.bottom,
                height: n.height
            } : {
                left: n.left,
                right: n.right,
                width: n.width,
                top: 0,
                bottom: 0,
                height: 0
            }
        },
        lJ = e => void 0 !== e ? `${e}px` : void 0;

    function l0(e) {
        let {
            prefixCls: t,
            containerRef: n,
            value: r,
            getValueIndex: o,
            motionName: a,
            onMotionStart: i,
            onMotionEnd: s,
            direction: d,
            vertical: m = !1
        } = e, f = l.useRef(null), [g, h] = l.useState(r), v = e => {
            let l = o(e),
                r = n.current ? .querySelectorAll(`.${t}-item`)[l];
            return r ? .offsetParent && r
        }, [b, y] = l.useState(null), [$, x] = l.useState(null);
        (0, lU.default)(() => {
            if (g !== r) {
                let e = v(g),
                    t = v(r),
                    n = lZ(e, m),
                    l = lZ(t, m);
                h(r), y(n), x(l), e && t ? i() : s()
            }
        }, [r]);
        let S = l.useMemo(() => m ? lJ(b ? .top ? ? 0) : "rtl" === d ? lJ(-b ? .right) : lJ(b ? .left), [m, d, b]),
            C = l.useMemo(() => m ? lJ($ ? .top ? ? 0) : "rtl" === d ? lJ(-$ ? .right) : lJ($ ? .left), [m, d, $]);
        return b && $ ? l.createElement(c.default, {
            visible: !0,
            motionName: a,
            motionAppear: !0,
            onAppearStart: () => m ? {
                transform: "translateY(var(--thumb-start-top))",
                height: "var(--thumb-start-height)"
            } : {
                transform: "translateX(var(--thumb-start-left))",
                width: "var(--thumb-start-width)"
            },
            onAppearActive: () => m ? {
                transform: "translateY(var(--thumb-active-top))",
                height: "var(--thumb-active-height)"
            } : {
                transform: "translateX(var(--thumb-active-left))",
                width: "var(--thumb-active-width)"
            },
            onVisibleChanged: () => {
                y(null), x(null), s()
            }
        }, ({
            className: e,
            style: n
        }, r) => {
            let o = { ...n,
                    "--thumb-start-left": S,
                    "--thumb-start-width": lJ(b ? .width),
                    "--thumb-active-left": C,
                    "--thumb-active-width": lJ($ ? .width),
                    "--thumb-start-top": S,
                    "--thumb-start-height": lJ(b ? .height),
                    "--thumb-active-top": C,
                    "--thumb-active-height": lJ($ ? .height)
                },
                a = {
                    ref: (0, u.composeRef)(f, r),
                    style: o,
                    className: (0, p.clsx)(`${t}-thumb`, e)
                };
            return l.createElement("div", a)
        }) : null
    }
    let l1 = ({
            prefixCls: e,
            className: t,
            style: n,
            styles: r,
            classNames: o,
            data: a,
            disabled: i,
            checked: s,
            label: c,
            title: d,
            value: u,
            name: m,
            onChange: f,
            onFocus: g,
            onBlur: h,
            onKeyDown: v,
            onKeyUp: b,
            onMouseDown: y,
            itemRender: $ = e => e
        }) => $(l.createElement("label", {
            className: (0, p.clsx)(t, {
                [`${e}-item-disabled`]: i
            }),
            style: n,
            onMouseDown: y
        }, l.createElement("input", {
            name: m,
            className: `${e}-item-input`,
            type: "radio",
            disabled: i,
            checked: s,
            onChange: e => {
                i || f(e, u)
            },
            onFocus: g,
            onBlur: h,
            onKeyDown: v,
            onKeyUp: b
        }), l.createElement("div", {
            className: (0, p.clsx)(`${e}-item-label`, o ? .label),
            title: d,
            role: "radio",
            "aria-checked": s,
            style: r ? .label
        }, c)), {
            item: a
        }),
        l2 = l.forwardRef((e, t) => {
            let {
                prefixCls: n = "rc-segmented",
                direction: r,
                vertical: o,
                options: a = [],
                disabled: i,
                defaultValue: s,
                value: c,
                name: d,
                onChange: m,
                className: f = "",
                style: g,
                styles: h,
                classNames: v,
                motionName: b = "thumb-motion",
                itemRender: y,
                ...$
            } = e, x = l.useRef(null), S = l.useMemo(() => (0, u.composeRef)(x, t), [x, t]), C = l.useMemo(() => a.map(e => {
                if ("object" == typeof e && null !== e) {
                    let t = void 0 !== e.title ? e.title : "object" != typeof e.label ? e.label ? .toString() : void 0;
                    return { ...e,
                        title: t
                    }
                }
                return {
                    label: e ? .toString(),
                    title: e ? .toString(),
                    value: e
                }
            }), [a]), [k, E] = (0, nW.default)(s ? ? C[0] ? .value, c), [w, N] = l.useState(!1), I = (e, t) => {
                E(t), m ? .(t)
            }, M = (0, e0.default)($, ["children"]), [z, R] = l.useState(!1), [T, H] = l.useState(!1), P = () => {
                H(!0)
            }, L = () => {
                H(!1)
            }, B = () => {
                R(!1)
            }, A = e => {
                "Tab" === e.key && R(!0)
            }, O = e => {
                let t = C.findIndex(e => e.value === k),
                    n = C.length,
                    l = C[(t + e + n) % n];
                l && (E(l.value), m ? .(l.value))
            }, W = e => {
                switch (e.key) {
                    case "ArrowLeft":
                    case "ArrowUp":
                        O(-1);
                        break;
                    case "ArrowRight":
                    case "ArrowDown":
                        O(1)
                }
            };
            return l.createElement("div", (0, lQ.default)({
                role: "radiogroup",
                "aria-label": "segmented control",
                tabIndex: i ? void 0 : 0,
                style: g
            }, M, {
                className: (0, p.clsx)(n, {
                    [`${n}-rtl`]: "rtl" === r,
                    [`${n}-disabled`]: i,
                    [`${n}-vertical`]: o
                }, f),
                ref: S
            }), l.createElement("div", {
                className: `${n}-group`
            }, l.createElement(l0, {
                vertical: o,
                prefixCls: n,
                value: k,
                containerRef: x,
                motionName: `${n}-${b}`,
                direction: r,
                getValueIndex: e => C.findIndex(t => t.value === e),
                onMotionStart: () => {
                    N(!0)
                },
                onMotionEnd: () => {
                    N(!1)
                }
            }), C.map(e => {
                let {
                    value: t,
                    disabled: r
                } = e;
                return l.createElement(l1, (0, lQ.default)({}, e, {
                    name: d,
                    data: e,
                    itemRender: y,
                    key: t,
                    prefixCls: n,
                    className: (0, p.clsx)(e.className, `${n}-item`, v ? .item, {
                        [`${n}-item-selected`]: t === k && !w,
                        [`${n}-item-focused`]: T && z && t === k
                    }),
                    style: h ? .item,
                    classNames: v,
                    styles: h,
                    checked: t === k,
                    onChange: I,
                    onFocus: P,
                    onBlur: L,
                    onKeyDown: W,
                    onKeyUp: A,
                    onMouseDown: B,
                    disabled: !!i || !!r
                }))
            })))
        });
    var l3 = e.i(548817),
        l5 = e.i(491816);

    function l4(e, t) {
        return {
            [`${e}, ${e}:hover, ${e}:focus`]: {
                color: t.colorTextDisabled,
                cursor: "not-allowed"
            }
        }
    }

    function l8(e) {
        return {
            background: e.itemSelectedBg,
            boxShadow: e.boxShadowTertiary
        }
    }
    let l6 = {
            overflow: "hidden",
            ...b.textEllipsis
        },
        l9 = (0, y.genStyleHooks)("Segmented", e => {
            let {
                lineWidth: t,
                calc: n
            } = e;
            return (e => {
                let {
                    componentCls: t
                } = e, n = e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(), l = e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(), r = e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();
                return {
                    [t]: { ...(0, b.resetComponent)(e),
                        display: "inline-block",
                        padding: e.trackPadding,
                        color: e.itemColor,
                        background: e.trackBg,
                        borderRadius: e.borderRadius,
                        transition: `all ${e.motionDurationMid}`,
                        ...(0, b.genFocusStyle)(e),
                        [`${t}-group`]: {
                            position: "relative",
                            display: "flex",
                            alignItems: "stretch",
                            justifyItems: "flex-start",
                            flexDirection: "row",
                            width: "100%"
                        },
                        [`&${t}-rtl`]: {
                            direction: "rtl"
                        },
                        [`&${t}-vertical`]: {
                            [`${t}-group`]: {
                                flexDirection: "column"
                            },
                            [`${t}-thumb`]: {
                                width: "100%",
                                height: 0,
                                padding: `0 ${(0,v.unit)(e.paddingXXS)}`
                            }
                        },
                        [`&${t}-block`]: {
                            display: "flex"
                        },
                        [`&${t}-block ${t}-item`]: {
                            flex: 1,
                            minWidth: 0
                        },
                        [`${t}-item`]: {
                            position: "relative",
                            textAlign: "center",
                            cursor: "pointer",
                            transition: `color ${e.motionDurationMid}`,
                            borderRadius: e.borderRadiusSM,
                            transform: "translateZ(0)",
                            "&-selected": { ...l8(e),
                                color: e.itemSelectedColor
                            },
                            "&-focused": (0, b.genFocusOutline)(e),
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                zIndex: -1,
                                width: "100%",
                                height: "100%",
                                top: 0,
                                insetInlineStart: 0,
                                borderRadius: "inherit",
                                opacity: 0,
                                transition: `opacity ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
                                pointerEvents: "none"
                            },
                            [`&:not(${t}-item-selected):not(${t}-item-disabled)`]: {
                                "&:hover, &:active": {
                                    color: e.itemHoverColor
                                },
                                "&:hover::after": {
                                    opacity: 1,
                                    backgroundColor: e.itemHoverBg
                                },
                                "&:active::after": {
                                    opacity: 1,
                                    backgroundColor: e.itemActiveBg
                                }
                            },
                            "&-label": {
                                minHeight: n,
                                lineHeight: (0, v.unit)(n),
                                padding: `0 ${(0,v.unit)(e.segmentedPaddingHorizontal)}`,
                                ...l6
                            },
                            "&-icon + *": {
                                marginInlineStart: e.calc(e.marginSM).div(2).equal()
                            },
                            "&-input": {
                                position: "absolute",
                                insetBlockStart: 0,
                                insetInlineStart: 0,
                                width: 0,
                                height: 0,
                                opacity: 0,
                                pointerEvents: "none"
                            }
                        },
                        [`${t}-thumb`]: { ...l8(e),
                            position: "absolute",
                            insetBlockStart: 0,
                            insetInlineStart: 0,
                            width: 0,
                            height: "100%",
                            padding: `${(0,v.unit)(e.paddingXXS)} 0`,
                            borderRadius: e.borderRadiusSM,
                            [`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]: {
                                backgroundColor: "transparent"
                            }
                        },
                        [`&${t}-lg`]: {
                            borderRadius: e.borderRadiusLG,
                            [`${t}-item-label`]: {
                                minHeight: l,
                                lineHeight: (0, v.unit)(l),
                                padding: `0 ${(0,v.unit)(e.segmentedPaddingHorizontal)}`,
                                fontSize: e.fontSizeLG
                            },
                            [`${t}-item, ${t}-thumb`]: {
                                borderRadius: e.borderRadius
                            }
                        },
                        [`&${t}-sm`]: {
                            borderRadius: e.borderRadiusSM,
                            [`${t}-item-label`]: {
                                minHeight: r,
                                lineHeight: (0, v.unit)(r),
                                padding: `0 ${(0,v.unit)(e.segmentedPaddingHorizontalSM)}`
                            },
                            [`${t}-item, ${t}-thumb`]: {
                                borderRadius: e.borderRadiusXS
                            }
                        },
                        ...l4(`&-disabled ${t}-item`, e),
                        ...l4(`${t}-item-disabled`, e),
                        [`${t}-thumb-motion-appear-active`]: {
                            transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOut}, width ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                            willChange: "transform, width"
                        },
                        [`&${t}-shape-round`]: {
                            borderRadius: 9999,
                            [`${t}-item, ${t}-thumb`]: {
                                borderRadius: 9999
                            }
                        }
                    }
                }
            })((0, F.mergeToken)(e, {
                segmentedPaddingHorizontal: n(e.controlPaddingHorizontal).sub(t).equal(),
                segmentedPaddingHorizontalSM: n(e.controlPaddingHorizontalSM).sub(t).equal()
            }))
        }, e => {
            let {
                colorTextLabel: t,
                colorText: n,
                colorFillSecondary: l,
                colorBgElevated: r,
                colorFill: o,
                lineWidthBold: a,
                colorBgLayout: i
            } = e;
            return {
                trackPadding: a,
                trackBg: i,
                itemColor: t,
                itemHoverColor: n,
                itemHoverBg: l,
                itemSelectedBg: r,
                itemActiveBg: o,
                itemSelectedColor: n
            }
        }),
        l7 = l.forwardRef((e, t) => {
            let n = (0, nA.default)(),
                {
                    prefixCls: r,
                    className: o,
                    rootClassName: a,
                    block: i,
                    options: s = [],
                    size: c = "middle",
                    style: d,
                    vertical: u,
                    orientation: f,
                    shape: g = "default",
                    name: v = n,
                    styles: b,
                    classNames: y,
                    ...$
                } = e,
                {
                    getPrefixCls: x,
                    direction: S,
                    className: C,
                    style: k,
                    classNames: E,
                    styles: w
                } = (0, h.useComponentConfig)("segmented"),
                N = { ...e,
                    options: s,
                    size: c,
                    shape: g
                },
                [I, M] = (0, m.useMergeSemantic)([E, y], [w, b], {
                    props: N
                }),
                z = x("segmented", r),
                [R, T] = l9(z),
                H = (0, lv.default)(c),
                P = l.useMemo(() => s.map(e => {
                    if ("object" == typeof e && e ? .icon) {
                        let {
                            icon: t,
                            label: n,
                            ...r
                        } = e;
                        return { ...r,
                            label: l.createElement(l.Fragment, null, l.createElement("span", {
                                className: (0, p.clsx)(`${z}-item-icon`, I.icon),
                                style: M.icon
                            }, t), n && l.createElement("span", null, n))
                        }
                    }
                    return e
                }), [s, z, I.icon, M.icon]),
                [, L] = (0, l3.useOrientation)(f, u),
                B = (0, p.clsx)(o, a, C, I.root, {
                    [`${z}-block`]: i,
                    [`${z}-sm`]: "small" === H,
                    [`${z}-lg`]: "large" === H,
                    [`${z}-vertical`]: L,
                    [`${z}-shape-${g}`]: "round" === g
                }, R, T),
                A = { ...M.root,
                    ...k,
                    ...d
                };
            return l.createElement(l2, { ...$,
                name: v,
                className: B,
                style: A,
                classNames: I,
                styles: M,
                itemRender: (e, {
                    item: t
                }) => {
                    if (!t.tooltip) return e;
                    let n = "object" == typeof t.tooltip ? t.tooltip : {
                        title: t.tooltip
                    };
                    return l.createElement(l5.default, { ...n
                    }, e)
                },
                options: P,
                ref: t,
                prefixCls: z,
                direction: S,
                vertical: L
            })
        }),
        re = l.default.createContext({}),
        rt = l.default.createContext({});
    var rn = e.i(656449);
    let rl = ({
        prefixCls: e,
        value: t,
        onChange: n
    }) => l.default.createElement("div", {
        className: `${e}-clear`,
        onClick: () => {
            if (n && t && !t.cleared) {
                let e = t.toHsb();
                e.a = 0;
                let l = (0, rn.generateColor)(e);
                l.cleared = !0, n(l)
            }
        }
    });
    var rr = e.i(554921);
    let ro = ({
            prefixCls: e,
            min: t = 0,
            max: n = 100,
            value: r,
            onChange: o,
            className: a,
            formatter: i
        }) => {
            let s = `${e}-steppers`,
                [c, d] = (0, l.useState)(0),
                u = Number.isNaN(r) ? c : r;
            return l.default.createElement(rr.default, {
                className: (0, p.clsx)(s, a),
                min: t,
                max: n,
                value: u,
                formatter: i,
                size: "small",
                onChange: e => {
                    d(e || 0), o ? .(e)
                }
            })
        },
        ra = ({
            prefixCls: e,
            value: t,
            onChange: n
        }) => {
            let r = `${e}-alpha-input`,
                [o, a] = (0, l.useState)(() => (0, rn.generateColor)(t || "#000")),
                i = t || o;
            return l.default.createElement(ro, {
                value: (0, rn.getColorAlpha)(i),
                prefixCls: e,
                formatter: e => `${e}%`,
                className: r,
                onChange: e => {
                    let t = i.toHsb();
                    t.a = (e || 0) / 100;
                    let l = (0, rn.generateColor)(t);
                    a(l), n ? .(l)
                }
            })
        };
    var ri = e.i(90635);
    let rs = /(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i,
        rc = ({
            prefixCls: e,
            value: t,
            onChange: n
        }) => {
            let r = `${e}-hex-input`,
                [o, a] = (0, l.useState)(() => t ? (0, lV.toHexFormat)(t.toHexString()) : void 0);
            return (0, l.useEffect)(() => {
                t && a((0, lV.toHexFormat)(t.toHexString()))
            }, [t]), l.default.createElement(ri.default, {
                className: r,
                value: o,
                prefix: "#",
                onChange: e => {
                    let t, l = e.target.value;
                    a((0, lV.toHexFormat)(l)), t = (0, lV.toHexFormat)(l, !0), rs.test(`#${t}`) && n ? .((0, rn.generateColor)(l))
                },
                size: "small"
            })
        },
        rd = ({
            prefixCls: e,
            value: t,
            onChange: n
        }) => {
            let r = `${e}-hsb-input`,
                [o, a] = (0, l.useState)(() => (0, rn.generateColor)(t || "#000")),
                i = t || o,
                s = (e, t) => {
                    let l = i.toHsb();
                    l[t] = "h" === t ? e : (e || 0) / 100;
                    let r = (0, rn.generateColor)(l);
                    a(r), n ? .(r)
                };
            return l.default.createElement("div", {
                className: r
            }, l.default.createElement(ro, {
                max: 360,
                min: 0,
                value: Number(i.toHsb().h),
                prefixCls: e,
                className: r,
                formatter: e => (0, rn.getRoundNumber)(e || 0).toString(),
                onChange: e => s(Number(e), "h")
            }), l.default.createElement(ro, {
                max: 100,
                min: 0,
                value: 100 * Number(i.toHsb().s),
                prefixCls: e,
                className: r,
                formatter: e => `${(0,rn.getRoundNumber)(e||0)}%`,
                onChange: e => s(Number(e), "s")
            }), l.default.createElement(ro, {
                max: 100,
                min: 0,
                value: 100 * Number(i.toHsb().b),
                prefixCls: e,
                className: r,
                formatter: e => `${(0,rn.getRoundNumber)(e||0)}%`,
                onChange: e => s(Number(e), "b")
            }))
        },
        ru = ({
            prefixCls: e,
            value: t,
            onChange: n
        }) => {
            let r = `${e}-rgb-input`,
                [o, a] = (0, l.useState)(() => (0, rn.generateColor)(t || "#000")),
                i = t || o,
                s = (e, t) => {
                    let l = i.toRgb();
                    l[t] = e || 0;
                    let r = (0, rn.generateColor)(l);
                    a(r), n ? .(r)
                };
            return l.default.createElement("div", {
                className: r
            }, l.default.createElement(ro, {
                max: 255,
                min: 0,
                value: Number(i.toRgb().r),
                prefixCls: e,
                className: r,
                onChange: e => s(Number(e), "r")
            }), l.default.createElement(ro, {
                max: 255,
                min: 0,
                value: Number(i.toRgb().g),
                prefixCls: e,
                className: r,
                onChange: e => s(Number(e), "g")
            }), l.default.createElement(ro, {
                max: 255,
                min: 0,
                value: Number(i.toRgb().b),
                prefixCls: e,
                className: r,
                onChange: e => s(Number(e), "b")
            }))
        },
        rp = ["hex", "hsb", "rgb"].map(e => ({
            value: e,
            label: e.toUpperCase()
        })),
        rm = e => {
            let {
                prefixCls: t,
                format: n,
                value: r,
                disabledAlpha: o,
                onFormatChange: a,
                onChange: i,
                disabledFormat: s
            } = e, [c, d] = (0, tm.useControlledState)("hex", n), u = `${t}-input`, p = (0, l.useMemo)(() => {
                let e = {
                    value: r,
                    prefixCls: t,
                    onChange: i
                };
                switch (c) {
                    case "hsb":
                        return l.default.createElement(rd, { ...e
                        });
                    case "rgb":
                        return l.default.createElement(ru, { ...e
                        });
                    default:
                        return l.default.createElement(rc, { ...e
                        })
                }
            }, [c, t, r, i]);
            return l.default.createElement("div", {
                className: `${u}-container`
            }, !s && l.default.createElement(e_.default, {
                value: c,
                variant: "borderless",
                getPopupContainer: e => e,
                popupMatchSelectWidth: 68,
                placement: "bottomRight",
                onChange: e => {
                    d(e), a ? .(e)
                },
                className: `${t}-format-select`,
                size: "small",
                options: rp
            }), l.default.createElement("div", {
                className: u
            }, p), !o && l.default.createElement(ra, {
                prefixCls: t,
                value: r,
                onChange: i
            }))
        };
    e.i(422499);
    var rf = e.i(641755),
        rg = e.i(756135),
        rh = e.i(297590);
    let rv = e => {
        let {
            prefixCls: t,
            colors: n,
            type: r,
            color: o,
            range: a = !1,
            className: i,
            activeIndex: s,
            onActive: c,
            onDragStart: d,
            onDragChange: u,
            onKeyDelete: m,
            ...f
        } = e, g = { ...f,
            track: !1
        }, h = l.useMemo(() => {
            let e = n.map(e => `${e.color} ${e.percent}%`).join(", ");
            return `linear-gradient(90deg, ${e})`
        }, [n]), v = l.useMemo(() => o && r ? "alpha" === r ? o.toRgbString() : `hsl(${o.toHsb().h}, 100%, 50%)` : null, [o, r]), b = (0, P.useEvent)(d), y = (0, P.useEvent)(u), $ = l.useMemo(() => ({
            onDragStart: b,
            onDragChange: y
        }), []), x = (0, P.useEvent)((e, o) => {
            let {
                onFocus: a,
                style: i,
                className: d,
                onKeyDown: u
            } = e.props, f = { ...i
            };
            return "gradient" === r && (f.background = (0, rn.getGradientPercentColor)(n, o.value)), l.cloneElement(e, {
                onFocus: e => {
                    c ? .(o.index), a ? .(e)
                },
                style: f,
                className: (0, p.clsx)(d, {
                    [`${t}-slider-handle-active`]: s === o.index
                }),
                onKeyDown: e => {
                    ("Delete" === e.key || "Backspace" === e.key) && m && m(o.index), u ? .(e)
                }
            })
        }), S = l.useMemo(() => ({
            direction: "ltr",
            handleRender: x
        }), []);
        return l.createElement(rh.default.Provider, {
            value: S
        }, l.createElement(rf.UnstableContext.Provider, {
            value: $
        }, l.createElement(rg.default, { ...g,
            className: (0, p.clsx)(i, `${t}-slider`),
            tooltip: {
                open: !1
            },
            range: {
                editable: a,
                minCount: 2
            },
            styles: {
                rail: {
                    background: h
                },
                handle: v ? {
                    background: v
                } : {}
            },
            classNames: {
                rail: `${t}-slider-rail`,
                handle: `${t}-slider-handle`
            }
        })))
    };

    function rb(e) {
        return (0, H.default)(e).sort((e, t) => e.percent - t.percent)
    }
    let ry = l.memo(e => {
            let {
                prefixCls: t,
                mode: n,
                onChange: r,
                onChangeComplete: o,
                onActive: a,
                activeIndex: i,
                onGradientDragging: s,
                colors: c
            } = e, d = l.useMemo(() => c.map(e => ({
                percent: e.percent,
                color: e.color.toRgbString()
            })), [c]), u = l.useMemo(() => d.map(e => e.percent), [d]), p = l.useRef(d);
            return "gradient" !== n ? null : l.createElement(rv, {
                min: 0,
                max: 100,
                prefixCls: t,
                className: `${t}-gradient-slider`,
                colors: d,
                color: null,
                value: u,
                range: !0,
                onChangeComplete: e => {
                    o(new lV.AggregationColor(d)), i >= e.length && a(e.length - 1), s(!1)
                },
                disabled: !1,
                type: "gradient",
                activeIndex: i,
                onActive: a,
                onDragStart: ({
                    rawValues: e,
                    draggingIndex: t,
                    draggingValue: n
                }) => {
                    if (e.length > d.length) {
                        let e = (0, rn.getGradientPercentColor)(d, n),
                            l = (0, H.default)(d);
                        l.splice(t, 0, {
                            percent: n,
                            color: e
                        }), p.current = l
                    } else p.current = d;
                    s(!0), r(new lV.AggregationColor(rb(p.current)), !0)
                },
                onDragChange: ({
                    deleteIndex: e,
                    draggingIndex: t,
                    draggingValue: n
                }) => {
                    let l = (0, H.default)(p.current); - 1 !== e ? l.splice(e, 1) : (l[t] = { ...l[t],
                        percent: n
                    }, l = rb(l)), r(new lV.AggregationColor(l), !0)
                },
                onKeyDelete: e => {
                    let t = (0, H.default)(d);
                    t.splice(e, 1);
                    let n = new lV.AggregationColor(t);
                    r(n), o(n)
                }
            })
        }),
        r$ = {
            slider: e => {
                let {
                    value: t,
                    onChange: n,
                    onChangeComplete: r
                } = e;
                return l.createElement(rv, { ...e,
                    value: [t],
                    onChange: e => n(e[0]),
                    onChangeComplete: e => r(e[0])
                })
            }
        },
        rx = () => {
            let e = (0, l.useContext)(re),
                {
                    mode: t,
                    onModeChange: n,
                    modeOptions: r,
                    prefixCls: o,
                    allowClear: a,
                    value: i,
                    disabledAlpha: s,
                    onChange: c,
                    onClear: d,
                    onChangeComplete: u,
                    activeIndex: p,
                    gradientDragging: m,
                    ...f
                } = e,
                g = l.default.useMemo(() => i.cleared ? [{
                    percent: 0,
                    color: new lV.AggregationColor("")
                }, {
                    percent: 100,
                    color: new lV.AggregationColor("")
                }] : i.getColors(), [i]),
                h = !i.isGradient(),
                [v, b] = l.default.useState(i);
            (0, lU.default)(() => {
                h || b(g[p] ? .color)
            }, [h, g, m, p]);
            let y = l.default.useMemo(() => h ? i : m ? v : g[p] ? .color, [g, i, p, h, v, m]),
                [$, x] = l.default.useState(y),
                [S, C] = (0, lK.useForceUpdate)(),
                k = $ ? .equals(y) ? y : $;
            (0, lU.default)(() => {
                x(y)
            }, [S, y ? .toHexString()]);
            let E = (e, n) => {
                    let l = (0, rn.generateColor)(e);
                    if (i.cleared) {
                        let e = l.toRgb();
                        if (e.r || e.g || e.b || !n) l = (0, rn.genAlphaColor)(l);
                        else {
                            let {
                                type: e,
                                value: t = 0
                            } = n;
                            l = new lV.AggregationColor({
                                h: "hue" === e ? t : 0,
                                s: 1,
                                b: 1,
                                a: "alpha" === e ? t / 100 : 1
                            })
                        }
                    }
                    if ("single" === t) return l;
                    let r = (0, H.default)(g);
                    return r[p] = { ...r[p],
                        color: l
                    }, new lV.AggregationColor(r)
                },
                w = null,
                N = r.length > 1;
            return (a || N) && (w = l.default.createElement("div", {
                className: `${o}-operation`
            }, N && l.default.createElement(l7, {
                size: "small",
                options: r,
                value: t,
                onChange: n
            }), l.default.createElement(rl, {
                prefixCls: o,
                value: i,
                onChange: e => {
                    c(e), d ? .()
                },
                ...f
            }))), l.default.createElement(l.default.Fragment, null, w, l.default.createElement(ry, { ...e,
                colors: g
            }), l.default.createElement(lY.default, {
                prefixCls: o,
                value: k ? .toHsb(),
                disabledAlpha: s,
                onChange: (e, t) => {
                    let n;
                    x((n = E(e, t)).isGradient() ? n.getColors()[p].color : n), c(n, !0)
                },
                onChangeComplete: (e, t) => {
                    u(E(e, t)), C()
                },
                components: r$
            }), l.default.createElement(rm, {
                value: y,
                onChange: e => {
                    c(E(e))
                },
                prefixCls: o,
                disabledAlpha: s,
                ...f
            }))
        };
    var rS = e.i(500991);
    let rC = () => {
            let {
                prefixCls: e,
                value: t,
                presets: n,
                onChange: r
            } = (0, l.useContext)(rt);
            return Array.isArray(n) ? l.default.createElement(rS.default, {
                value: t,
                presets: n,
                prefixCls: e,
                onChange: r
            }) : null
        },
        rk = e => {
            let {
                prefixCls: t,
                presets: n,
                panelRender: r,
                value: o,
                onChange: a,
                onClear: i,
                allowClear: s,
                disabledAlpha: c,
                mode: d,
                onModeChange: u,
                modeOptions: p,
                onChangeComplete: m,
                activeIndex: f,
                onActive: g,
                format: h,
                onFormatChange: v,
                gradientDragging: b,
                onGradientDragging: y,
                disabledFormat: $
            } = e, x = `${t}-inner`, S = l.default.useMemo(() => ({
                prefixCls: t,
                value: o,
                onChange: a,
                onClear: i,
                allowClear: s,
                disabledAlpha: c,
                mode: d,
                onModeChange: u,
                modeOptions: p,
                onChangeComplete: m,
                activeIndex: f,
                onActive: g,
                format: h,
                onFormatChange: v,
                gradientDragging: b,
                onGradientDragging: y,
                disabledFormat: $
            }), [t, o, a, i, s, c, d, u, p, m, f, g, h, v, b, y, $]), C = l.default.useMemo(() => ({
                prefixCls: t,
                value: o,
                presets: n,
                onChange: a
            }), [t, o, n, a]), k = l.default.createElement("div", {
                className: `${x}-content`
            }, l.default.createElement(rx, null), Array.isArray(n) && l.default.createElement(lG.default, null), l.default.createElement(rC, null));
            return l.default.createElement(re.Provider, {
                value: S
            }, l.default.createElement(rt.Provider, {
                value: C
            }, l.default.createElement("div", {
                className: x
            }, "function" == typeof r ? r(k, {
                components: {
                    Picker: rx,
                    Presets: rC
                }
            }) : k)))
        };
    var rE = e.i(202599);
    let rw = (0, l.forwardRef)((e, t) => {
            let {
                color: n,
                prefixCls: r,
                open: o,
                disabled: a,
                format: i,
                className: s,
                showText: c,
                activeIndex: u,
                ...m
            } = e, f = `${r}-trigger`, g = `${f}-text`, h = `${g}-cell`, [v] = (0, tf.useLocale)("ColorPicker"), b = l.default.useMemo(() => {
                if (!c) return "";
                if ("function" == typeof c) return c(n);
                if (n.cleared) return v.transparent;
                if (n.isGradient()) return n.getColors().map((e, t) => {
                    let n = -1 !== u && u !== t;
                    return l.default.createElement("span", {
                        key: t,
                        className: (0, p.clsx)(h, n && `${h}-inactive`)
                    }, e.color.toRgbString(), " ", e.percent, "%")
                });
                let e = n.toHexString().toUpperCase(),
                    t = (0, rn.getColorAlpha)(n);
                switch (i) {
                    case "rgb":
                        return n.toRgbString();
                    case "hsb":
                        return n.toHsbString();
                    default:
                        return t < 100 ? `${e.slice(0,7)},${t}%` : e
                }
            }, [n, i, c, u, v.transparent, h]), y = (0, l.useMemo)(() => n.cleared ? l.default.createElement(rl, {
                prefixCls: r
            }) : l.default.createElement(rE.ColorBlock, {
                prefixCls: r,
                color: n.toCssString()
            }), [n, r]);
            return l.default.createElement("div", {
                ref: t,
                className: (0, p.clsx)(f, s, {
                    [`${f}-active`]: o,
                    [`${f}-disabled`]: a
                }),
                ...(0, d.default)(m)
            }, y, c && l.default.createElement("div", {
                className: g
            }, b))
        }),
        rN = (e, t) => ({
            backgroundImage: `conic-gradient(${t} 25%, transparent 25% 50%, ${t} 50% 75%, transparent 75% 100%)`,
            backgroundSize: `${e} ${e}`
        }),
        rI = (e, t) => {
            let {
                componentCls: n,
                borderRadiusSM: l,
                colorPickerInsetShadow: r,
                lineWidth: o,
                colorFillSecondary: a
            } = e;
            return {
                [`${n}-color-block`]: {
                    position: "relative",
                    borderRadius: l,
                    width: t,
                    height: t,
                    boxShadow: r,
                    flex: "none",
                    ...rN("50%", e.colorFillSecondary),
                    [`${n}-color-block-inner`]: {
                        width: "100%",
                        height: "100%",
                        boxShadow: `inset 0 0 0 ${(0,v.unit)(o)} ${a}`,
                        borderRadius: "inherit"
                    }
                }
            }
        },
        rM = (e, t, n) => ({
            borderInlineEndWidth: e.lineWidth,
            borderColor: t,
            boxShadow: `0 0 0 ${(0,v.unit)(e.controlOutlineWidth)} ${n}`,
            outline: 0
        }),
        rz = (e, t, n) => {
            let {
                componentCls: l,
                borderRadiusSM: r,
                lineWidth: o,
                colorSplit: a,
                colorBorder: i,
                red6: s
            } = e;
            return {
                [`${l}-clear`]: {
                    width: t,
                    height: t,
                    borderRadius: r,
                    border: `${(0,v.unit)(o)} solid ${a}`,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "inherit",
                    transition: `all ${e.motionDurationFast}`,
                    ...n,
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        insetInlineEnd: e.calc(o).mul(-1).equal(),
                        top: e.calc(o).mul(-1).equal(),
                        display: "block",
                        width: 40,
                        height: 2,
                        transformOrigin: "calc(100% - 1px) 1px",
                        transform: "rotate(-45deg)",
                        backgroundColor: s
                    },
                    "&:hover": {
                        borderColor: i
                    }
                }
            }
        },
        rR = (0, y.genStyleHooks)("ColorPicker", e => {
            let {
                colorTextQuaternary: t,
                marginSM: n
            } = e;
            return (e => {
                let {
                    antCls: t,
                    componentCls: n,
                    colorPickerWidth: l,
                    colorPrimary: r,
                    motionDurationMid: o,
                    colorBgElevated: a,
                    colorTextDisabled: i,
                    colorText: s,
                    colorBgContainerDisabled: c,
                    borderRadius: d,
                    marginXS: u,
                    marginSM: p,
                    controlHeight: m,
                    controlHeightSM: f,
                    colorBgTextActive: g,
                    colorPickerPresetColorSize: h,
                    colorPickerPreviewSize: b,
                    lineWidth: y,
                    colorBorder: $,
                    paddingXXS: x,
                    fontSize: S,
                    colorPrimaryHover: C,
                    controlOutline: k
                } = e;
                return [{
                    [n]: {
                        [`${n}-inner`]: {
                            "&-content": {
                                display: "flex",
                                flexDirection: "column",
                                width: l,
                                [`& > ${t}-divider`]: {
                                    margin: `${(0,v.unit)(p)} 0 ${(0,v.unit)(u)}`
                                }
                            },
                            [`${n}-panel`]: { ...(e => {
                                    let {
                                        componentCls: t,
                                        controlHeightLG: n,
                                        borderRadiusSM: l,
                                        colorPickerInsetShadow: r,
                                        marginSM: o,
                                        colorBgElevated: a,
                                        colorFillSecondary: i,
                                        lineWidthBold: s,
                                        colorPickerHandlerSize: c
                                    } = e;
                                    return {
                                        userSelect: "none",
                                        [`${t}-select`]: {
                                            [`${t}-palette`]: {
                                                minHeight: e.calc(n).mul(4).equal(),
                                                overflow: "hidden",
                                                borderRadius: l
                                            },
                                            [`${t}-saturation`]: {
                                                position: "absolute",
                                                borderRadius: "inherit",
                                                boxShadow: r,
                                                inset: 0
                                            },
                                            marginBottom: o
                                        },
                                        [`${t}-handler`]: {
                                            width: c,
                                            height: c,
                                            border: `${(0,v.unit)(s)} solid ${a}`,
                                            position: "relative",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            boxShadow: `${r}, 0 0 0 1px ${i}`
                                        }
                                    }
                                })(e)
                            },
                            ...(e => {
                                let {
                                    componentCls: t,
                                    colorPickerInsetShadow: n,
                                    colorBgElevated: l,
                                    colorFillSecondary: r,
                                    lineWidthBold: o,
                                    colorPickerHandlerSizeSM: a,
                                    colorPickerSliderHeight: i,
                                    marginSM: s,
                                    marginXS: c
                                } = e, d = e.calc(a).sub(e.calc(o).mul(2).equal()).equal(), u = e.calc(a).add(e.calc(o).mul(2).equal()).equal(), p = {
                                    "&:after": {
                                        transform: "scale(1)",
                                        boxShadow: `${n}, 0 0 0 1px ${e.colorPrimaryActive}`
                                    }
                                };
                                return {
                                    [`${t}-slider`]: [rN((0, v.unit)(i), e.colorFillSecondary), {
                                        margin: 0,
                                        padding: 0,
                                        height: i,
                                        borderRadius: e.calc(i).div(2).equal(),
                                        "&-rail": {
                                            height: i,
                                            borderRadius: e.calc(i).div(2).equal(),
                                            boxShadow: n
                                        },
                                        [`& ${t}-slider-handle`]: {
                                            width: d,
                                            height: d,
                                            top: 0,
                                            borderRadius: "100%",
                                            "&:before": {
                                                display: "block",
                                                position: "absolute",
                                                background: "transparent",
                                                left: {
                                                    _skip_check_: !0,
                                                    value: "50%"
                                                },
                                                top: "50%",
                                                transform: "translate(-50%, -50%)",
                                                width: u,
                                                height: u,
                                                borderRadius: "100%"
                                            },
                                            "&:after": {
                                                width: a,
                                                height: a,
                                                border: `${(0,v.unit)(o)} solid ${l}`,
                                                boxShadow: `${n}, 0 0 0 1px ${r}`,
                                                outline: "none",
                                                insetInlineStart: e.calc(o).mul(-1).equal(),
                                                top: e.calc(o).mul(-1).equal(),
                                                background: "transparent",
                                                transition: "none"
                                            },
                                            "&:focus": p
                                        }
                                    }],
                                    [`${t}-slider-container`]: {
                                        display: "flex",
                                        gap: s,
                                        marginBottom: s,
                                        [`${t}-slider-group`]: {
                                            flex: 1,
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            display: "flex",
                                            "&-disabled-alpha": {
                                                justifyContent: "center"
                                            }
                                        }
                                    },
                                    [`${t}-gradient-slider`]: {
                                        marginBottom: c,
                                        [`& ${t}-slider-handle`]: {
                                            "&:after": {
                                                transform: "scale(0.8)"
                                            },
                                            "&-active, &:focus": p
                                        }
                                    }
                                }
                            })(e),
                            ...rI(e, b),
                            ...(e => {
                                let {
                                    componentCls: t,
                                    antCls: n,
                                    fontSizeSM: l,
                                    lineHeightSM: r,
                                    colorPickerAlphaInputWidth: o,
                                    marginXXS: a,
                                    paddingXXS: i,
                                    controlHeightSM: s,
                                    marginXS: c,
                                    fontSizeIcon: d,
                                    paddingXS: u,
                                    colorTextPlaceholder: p,
                                    colorPickerInputNumberHandleWidth: m,
                                    lineWidth: f
                                } = e;
                                return {
                                    [`${t}-input-container`]: {
                                        display: "flex",
                                        [`${t}-steppers${n}-input-number`]: {
                                            fontSize: l,
                                            lineHeight: r,
                                            padding: 0,
                                            [`${n}-input-number-input`]: {
                                                paddingInlineStart: i,
                                                paddingInlineEnd: 0
                                            },
                                            [`${n}-input-number-handler-wrap`]: {
                                                width: m
                                            }
                                        },
                                        [`${t}-steppers${t}-alpha-input`]: {
                                            flex: `0 0 ${(0,v.unit)(o)}`,
                                            marginInlineStart: a
                                        },
                                        [`${t}-format-select${n}-select`]: {
                                            marginInlineEnd: c,
                                            width: "auto",
                                            "&-single": {
                                                [`${n}-select-selector`]: {
                                                    padding: 0,
                                                    border: 0
                                                },
                                                [`${n}-select-arrow`]: {
                                                    insetInlineEnd: 0
                                                },
                                                [`${n}-select-selection-item`]: {
                                                    paddingInlineEnd: e.calc(d).add(a).equal(),
                                                    fontSize: l,
                                                    lineHeight: (0, v.unit)(s)
                                                },
                                                [`${n}-select-item-option-content`]: {
                                                    fontSize: l,
                                                    lineHeight: r
                                                },
                                                [`${n}-select-dropdown`]: {
                                                    [`${n}-select-item`]: {
                                                        minHeight: "auto"
                                                    }
                                                }
                                            }
                                        },
                                        [`${t}-input`]: {
                                            gap: a,
                                            alignItems: "center",
                                            flex: 1,
                                            width: 0,
                                            [`${t}-hsb-input,${t}-rgb-input`]: {
                                                height: s,
                                                display: "flex",
                                                gap: a,
                                                alignItems: "center"
                                            },
                                            [`${t}-steppers`]: {
                                                flex: 1
                                            },
                                            [`${t}-hex-input${n}-input-affix-wrapper`]: {
                                                flex: 1,
                                                padding: `0 ${(0,v.unit)(u)}`,
                                                [`${n}-input`]: {
                                                    fontSize: l,
                                                    textTransform: "uppercase",
                                                    lineHeight: (0, v.unit)(e.calc(s).sub(e.calc(f).mul(2)).equal())
                                                },
                                                [`${n}-input-prefix`]: {
                                                    color: p
                                                }
                                            }
                                        }
                                    }
                                }
                            })(e),
                            ...(e => {
                                let {
                                    componentCls: t,
                                    antCls: n,
                                    colorTextQuaternary: l,
                                    paddingXXS: r,
                                    colorPickerPresetColorSize: o,
                                    fontSizeSM: a,
                                    colorText: i,
                                    lineHeightSM: s,
                                    lineWidth: c,
                                    borderRadius: d,
                                    colorFill: u,
                                    colorWhite: p,
                                    marginXXS: m,
                                    paddingXS: f,
                                    fontHeightSM: g
                                } = e;
                                return {
                                    [`${t}-presets`]: {
                                        [`${n}-collapse-item > ${n}-collapse-header`]: {
                                            padding: 0,
                                            [`${n}-collapse-expand-icon`]: {
                                                height: g,
                                                color: l,
                                                paddingInlineEnd: r
                                            }
                                        },
                                        [`${n}-collapse`]: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: m
                                        },
                                        [`${n}-collapse-item > ${n}-collapse-panel > ${n}-collapse-body`]: {
                                            padding: `${(0,v.unit)(f)} 0`
                                        },
                                        "&-label": {
                                            fontSize: a,
                                            color: i,
                                            lineHeight: s
                                        },
                                        "&-items": {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: e.calc(m).mul(1.5).equal(),
                                            [`${t}-presets-color`]: {
                                                position: "relative",
                                                cursor: "pointer",
                                                width: o,
                                                height: o,
                                                "&::before": {
                                                    content: '""',
                                                    pointerEvents: "none",
                                                    width: e.calc(o).add(e.calc(c).mul(4)).equal(),
                                                    height: e.calc(o).add(e.calc(c).mul(4)).equal(),
                                                    position: "absolute",
                                                    top: e.calc(c).mul(-2).equal(),
                                                    insetInlineStart: e.calc(c).mul(-2).equal(),
                                                    borderRadius: d,
                                                    border: `${(0,v.unit)(c)} solid transparent`,
                                                    transition: `border-color ${e.motionDurationMid} ${e.motionEaseInBack}`
                                                },
                                                "&:hover::before": {
                                                    borderColor: u
                                                },
                                                "&::after": {
                                                    boxSizing: "border-box",
                                                    position: "absolute",
                                                    top: "50%",
                                                    insetInlineStart: "21.5%",
                                                    display: "table",
                                                    width: e.calc(o).div(13).mul(5).equal(),
                                                    height: e.calc(o).div(13).mul(8).equal(),
                                                    border: `${(0,v.unit)(e.lineWidthBold)} solid ${e.colorWhite}`,
                                                    borderTop: 0,
                                                    borderInlineStart: 0,
                                                    transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
                                                    opacity: 0,
                                                    content: '""',
                                                    transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
                                                },
                                                [`&${t}-presets-color-checked`]: {
                                                    "&::after": {
                                                        opacity: 1,
                                                        borderColor: p,
                                                        transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
                                                        transition: `transform ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
                                                    },
                                                    [`&${t}-presets-color-bright`]: {
                                                        "&::after": {
                                                            borderColor: "rgba(0, 0, 0, 0.45)"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "&-empty": {
                                            fontSize: a,
                                            color: l
                                        }
                                    }
                                }
                            })(e),
                            ...rz(e, h, {
                                marginInlineStart: "auto"
                            }),
                            [`${n}-operation`]: {
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: u
                            }
                        },
                        "&-trigger": {
                            minWidth: m,
                            minHeight: m,
                            borderRadius: d,
                            border: `${(0,v.unit)(y)} solid ${$}`,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            transition: `all ${o}`,
                            background: a,
                            padding: e.calc(x).sub(y).equal(),
                            [`${n}-trigger-text`]: {
                                marginInlineStart: u,
                                marginInlineEnd: e.calc(u).sub(e.calc(x).sub(y)).equal(),
                                fontSize: S,
                                color: s,
                                alignSelf: "center",
                                "&-cell": {
                                    "&:not(:last-child):after": {
                                        content: '", "'
                                    },
                                    "&-inactive": {
                                        color: i
                                    }
                                }
                            },
                            "&:hover": {
                                borderColor: C
                            },
                            [`&${n}-trigger-active`]: { ...rM(e, r, k)
                            },
                            "&-disabled": {
                                color: i,
                                background: c,
                                cursor: "not-allowed",
                                "&:hover": {
                                    borderColor: g
                                },
                                [`${n}-trigger-text`]: {
                                    color: i
                                }
                            },
                            ...rz(e, f),
                            ...rI(e, f),
                            ...(e => {
                                let {
                                    componentCls: t,
                                    colorError: n,
                                    colorWarning: l,
                                    colorErrorHover: r,
                                    colorWarningHover: o,
                                    colorErrorOutline: a,
                                    colorWarningOutline: i
                                } = e;
                                return {
                                    [`&${t}-status-error`]: {
                                        borderColor: n,
                                        "&:hover": {
                                            borderColor: r
                                        },
                                        [`&${t}-trigger-active`]: { ...rM(e, n, a)
                                        }
                                    },
                                    [`&${t}-status-warning`]: {
                                        borderColor: l,
                                        "&:hover": {
                                            borderColor: o
                                        },
                                        [`&${t}-trigger-active`]: { ...rM(e, l, i)
                                        }
                                    }
                                }
                            })(e),
                            ...(e => {
                                let {
                                    componentCls: t,
                                    controlHeightLG: n,
                                    controlHeightSM: l,
                                    controlHeight: r,
                                    controlHeightXS: o,
                                    borderRadius: a,
                                    borderRadiusSM: i,
                                    borderRadiusXS: s,
                                    borderRadiusLG: c,
                                    fontSizeLG: d
                                } = e;
                                return {
                                    [`&${t}-lg`]: {
                                        minWidth: n,
                                        minHeight: n,
                                        borderRadius: c,
                                        [`${t}-color-block, ${t}-clear`]: {
                                            width: r,
                                            height: r,
                                            borderRadius: a
                                        },
                                        [`${t}-trigger-text`]: {
                                            fontSize: d
                                        }
                                    },
                                    [`&${t}-sm`]: {
                                        minWidth: l,
                                        minHeight: l,
                                        borderRadius: i,
                                        [`${t}-color-block, ${t}-clear`]: {
                                            width: o,
                                            height: o,
                                            borderRadius: s
                                        },
                                        [`${t}-trigger-text`]: {
                                            lineHeight: (0, v.unit)(o)
                                        }
                                    }
                                }
                            })(e)
                        },
                        ...(e => {
                            let {
                                componentCls: t
                            } = e;
                            return {
                                "&-rtl": {
                                    [`${t}-presets-color`]: {
                                        "&::after": {
                                            direction: "ltr"
                                        }
                                    },
                                    [`${t}-clear`]: {
                                        "&::after": {
                                            direction: "ltr"
                                        }
                                    }
                                }
                            }
                        })(e)
                    }
                }, (0, lz.genCompactItemStyle)(e, {
                    focusElCls: `${n}-trigger-active`
                })]
            })((0, F.mergeToken)(e, {
                colorPickerWidth: 234,
                colorPickerHandlerSize: 16,
                colorPickerHandlerSizeSM: 12,
                colorPickerAlphaInputWidth: 44,
                colorPickerInputNumberHandleWidth: 16,
                colorPickerPresetColorSize: 24,
                colorPickerInsetShadow: `inset 0 0 1px 0 ${t}`,
                colorPickerSliderHeight: 8,
                colorPickerPreviewSize: e.calc(8).mul(2).add(n).equal()
            }))
        }),
        rT = e => {
            let {
                mode: t,
                value: n,
                defaultValue: r,
                format: o,
                defaultFormat: a,
                allowClear: i = !1,
                presets: s,
                children: c,
                trigger: d = "click",
                open: u,
                disabled: f,
                placement: g = "bottomLeft",
                arrow: v = !0,
                panelRender: b,
                showText: y,
                style: $,
                className: x,
                size: S,
                rootClassName: C,
                prefixCls: k,
                styles: E,
                classNames: w,
                disabledAlpha: N = !1,
                onFormatChange: I,
                onChange: M,
                onClear: z,
                onOpenChange: R,
                onChangeComplete: T,
                getPopupContainer: H,
                autoAdjustOverflow: L = !0,
                destroyTooltipOnHide: B,
                destroyOnHidden: A,
                disabledFormat: W,
                ...D
            } = e, {
                getPrefixCls: F,
                direction: _,
                className: j,
                style: X,
                classNames: q,
                styles: V
            } = (0, h.useComponentConfig)("colorPicker"), G = (0, l.useContext)(lh.default), Y = f ? ? G, U = F("color-picker", k), {
                compactSize: K,
                compactItemClassnames: Q
            } = (0, lk.useCompactItemContext)(U, _), Z = (0, lv.default)(e => S ? ? K ? ? e), J = { ...e,
                trigger: d,
                allowClear: i,
                autoAdjustOverflow: L,
                disabledAlpha: N,
                arrow: v,
                placement: g,
                disabled: Y,
                size: Z
            }, [ee, et] = (0, m.useMergeSemantic)([q, w], [V, E], {
                props: J
            }, {
                popup: {
                    _default: "root"
                }
            }), [en, el] = (0, tm.useControlledState)(!1, u), er = !Y && en, [eo, ea] = (0, tm.useControlledState)(a, o), [ei, es, ec, ed, eu] = function(e, t, n) {
                let [r] = (0, tf.useLocale)("ColorPicker"), [o, a] = (0, tm.useControlledState)(e, t), [i, s] = l.useState("single"), [c, d] = l.useMemo(() => {
                    let e = (Array.isArray(n) ? n : [n]).filter(e => e);
                    e.length || e.push("single");
                    let t = new Set(e),
                        l = [],
                        o = (e, n) => {
                            t.has(e) && l.push({
                                label: n,
                                value: e
                            })
                        };
                    return o("single", r.singleColor), o("gradient", r.gradientColor), [l, t]
                }, [n, r.singleColor, r.gradientColor]), [u, p] = l.useState(null), m = (0, P.useEvent)(e => {
                    p(e), a(e)
                }), f = l.useMemo(() => {
                    let e = (0, rn.generateColor)(o || "");
                    return e.equals(u) ? u : e
                }, [o, u]), g = l.useMemo(() => d.has(i) ? i : c[0] ? .value, [d, i, c]);
                return l.useEffect(() => {
                    s(f.isGradient() ? "gradient" : "single")
                }, [f]), [f, m, g, s, c]
            }(r, n, t), ep = (0, l.useMemo)(() => 100 > (0, rn.getColorAlpha)(ei), [ei]), [em, ef] = l.default.useState(null), eg = e => {
                if (T) {
                    let t = (0, rn.generateColor)(e);
                    N && ep && (t = (0, rn.genAlphaColor)(e)), T(t)
                }
            }, eh = (e, t) => {
                let n = (0, rn.generateColor)(e);
                N && ep && (n = (0, rn.genAlphaColor)(n)), es(n), ef(null), M && M(n, n.toCssString()), t || eg(n)
            }, [ev, eb] = l.default.useState(0), [ey, e$] = l.default.useState(!1), {
                status: ex
            } = l.default.useContext(tg.FormItemInputContext), eS = (0, O.default)(U), [eC, ek] = rR(U, eS), eE = {
                [`${U}-rtl`]: _
            }, ew = (0, p.clsx)(ee.root, C, ek, eS, eE), eN = (0, p.clsx)((0, lf.getStatusClassNames)(U, ex), {
                [`${U}-sm`]: "small" === Z,
                [`${U}-lg`]: "large" === Z
            }, Q, j, ew, x, eC), eI = (0, p.clsx)(U, ew, ee.popup ? .root), eM = { ...et.root,
                ...X,
                ...$
            };
            return l.default.createElement(lq.default, {
                classNames: {
                    root: eI
                },
                styles: {
                    root: et.popup ? .root,
                    container: E ? .popupOverlayInner
                },
                onOpenChange: e => {
                    e && Y || (el(e), R ? .(e))
                },
                content: l.default.createElement(lX.default, {
                    form: !0
                }, l.default.createElement(rk, {
                    mode: ec,
                    onModeChange: e => {
                        if (ed(e), "single" === e && ei.isGradient()) eb(0), eh(new lV.AggregationColor(ei.getColors()[0].color)), ef(ei);
                        else if ("gradient" === e && !ei.isGradient()) {
                            let e = ep ? (0, rn.genAlphaColor)(ei) : ei;
                            eh(new lV.AggregationColor(em || [{
                                percent: 0,
                                color: e
                            }, {
                                percent: 100,
                                color: e
                            }]))
                        }
                    },
                    modeOptions: eu,
                    prefixCls: U,
                    value: ei,
                    allowClear: i,
                    disabled: Y,
                    disabledAlpha: N,
                    presets: s,
                    panelRender: b,
                    format: eo,
                    onFormatChange: e => {
                        ea(e), eo !== e && I ? .(e)
                    },
                    onChange: eh,
                    onChangeComplete: eg,
                    onClear: z,
                    activeIndex: ev,
                    onActive: eb,
                    gradientDragging: ey,
                    onGradientDragging: e$,
                    disabledFormat: W
                })),
                ...{
                    open: er,
                    trigger: d,
                    placement: g,
                    arrow: v,
                    rootClassName: C,
                    getPopupContainer: H,
                    autoAdjustOverflow: L,
                    destroyOnHidden: A ? ? !!B
                }
            }, c || l.default.createElement(rw, {
                activeIndex: er ? ev : -1,
                open: er,
                className: eN,
                style: eM,
                prefixCls: U,
                disabled: Y,
                showText: y,
                format: eo,
                ...D,
                color: ei
            }))
        },
        rH = (0, eF.default)(rT, void 0, e => ({ ...e,
            placement: "bottom",
            autoAdjustOverflow: !1
        }), "color-picker", e => e);
    rT._InternalPanelDoNotUseOrYouWillBeFired = rH;
    var rP = e.i(609587),
        rL = e.i(494489),
        rB = e.i(908206),
        rA = e.i(150073);
    let rO = {
            xxl: 3,
            xl: 3,
            lg: 3,
            md: 3,
            sm: 2,
            xs: 1
        },
        rW = l.default.createContext(null),
        rD = e => {
            let {
                itemPrefixCls: t,
                component: n,
                span: r,
                className: o,
                style: a,
                labelStyle: i,
                contentStyle: s,
                bordered: c,
                label: d,
                content: u,
                colon: g,
                type: h,
                styles: v,
                classNames: b
            } = e, {
                classNames: y,
                styles: $
            } = l.useContext(rW), [x, S] = (0, m.useMergeSemantic)([y, b], [$, v], {
                props: e
            }), C = { ...i,
                ...S.label
            }, k = { ...s,
                ...S.content
            };
            return c ? l.createElement(n, {
                colSpan: r,
                style: a,
                className: (0, p.clsx)(o, {
                    [`${t}-item-${h}`]: "label" === h || "content" === h,
                    [x.label]: x.label && "label" === h,
                    [x.content]: x.content && "content" === h
                })
            }, (0, f.default)(d) && l.createElement("span", {
                style: C
            }, d), (0, f.default)(u) && l.createElement("span", {
                style: k
            }, u)) : l.createElement(n, {
                className: (0, p.clsx)(`${t}-item`, o),
                style: a,
                colSpan: r
            }, l.createElement("div", {
                className: `${t}-item-container`
            }, (0, f.default)(d) && l.createElement("span", {
                style: C,
                className: (0, p.clsx)(`${t}-item-label`, x.label, {
                    [`${t}-item-no-colon`]: !g
                })
            }, d), (0, f.default)(u) && l.createElement("span", {
                style: k,
                className: (0, p.clsx)(`${t}-item-content`, x.content)
            }, u)))
        };

    function rF(e, {
        colon: t,
        prefixCls: n,
        bordered: r
    }, {
        component: o,
        type: a,
        showLabel: i,
        showContent: s,
        labelStyle: c,
        contentStyle: d,
        styles: u
    }) {
        return e.map(({
            label: e,
            children: p,
            prefixCls: m = n,
            className: f,
            style: g,
            labelStyle: h,
            contentStyle: v,
            span: b = 1,
            key: y,
            styles: $,
            classNames: x
        }, S) => "string" == typeof o ? l.createElement(rD, {
            key: `${a}-${y||S}`,
            className: f,
            style: g,
            classNames: x,
            styles: {
                label: { ...c,
                    ...u ? .label,
                    ...h,
                    ...$ ? .label
                },
                content: { ...d,
                    ...u ? .content,
                    ...v,
                    ...$ ? .content
                }
            },
            span: b,
            colon: t,
            component: o,
            itemPrefixCls: m,
            bordered: r,
            label: i ? e : null,
            content: s ? p : null,
            type: a
        }) : [l.createElement(rD, {
            key: `label-${y||S}`,
            className: f,
            style: { ...c,
                ...u ? .label,
                ...g,
                ...h,
                ...$ ? .label
            },
            span: 1,
            colon: t,
            component: o[0],
            itemPrefixCls: m,
            bordered: r,
            label: e,
            type: "label"
        }), l.createElement(rD, {
            key: `content-${y||S}`,
            className: f,
            style: { ...d,
                ...u ? .content,
                ...g,
                ...v,
                ...$ ? .content
            },
            span: 2 * b - 1,
            component: o[1],
            itemPrefixCls: m,
            bordered: r,
            content: p,
            type: "content"
        })])
    }
    let r_ = e => {
            let t = l.useContext(rW),
                {
                    prefixCls: n,
                    vertical: r,
                    row: o,
                    index: a,
                    bordered: i
                } = e;
            return r ? l.createElement(l.Fragment, null, l.createElement("tr", {
                key: `label-${a}`,
                className: `${n}-row`
            }, rF(o, e, {
                component: "th",
                type: "label",
                showLabel: !0,
                ...t
            })), l.createElement("tr", {
                key: `content-${a}`,
                className: `${n}-row`
            }, rF(o, e, {
                component: "td",
                type: "content",
                showContent: !0,
                ...t
            }))) : l.createElement("tr", {
                key: a,
                className: `${n}-row`
            }, rF(o, e, {
                component: i ? ["th", "td"] : "td",
                type: "item",
                showLabel: !0,
                showContent: !0,
                ...t
            }))
        },
        rj = (0, y.genStyleHooks)("Descriptions", e => (e => {
            let {
                componentCls: t,
                extraColor: n,
                itemPaddingBottom: l,
                itemPaddingEnd: r,
                colonMarginRight: o,
                colonMarginLeft: a,
                titleMarginBottom: i
            } = e;
            return {
                [t]: { ...(0, b.resetComponent)(e),
                    ...(e => {
                        let {
                            componentCls: t,
                            labelBg: n
                        } = e;
                        return {
                            [`&${t}-bordered`]: {
                                [`> ${t}-view`]: {
                                    border: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                                    "> table": {
                                        tableLayout: "auto"
                                    },
                                    [`${t}-row`]: {
                                        borderBottom: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                                        "&:first-child": {
                                            "> th:first-child, > td:first-child": {
                                                borderStartStartRadius: e.borderRadiusLG
                                            }
                                        },
                                        "&:last-child": {
                                            borderBottom: "none",
                                            "> th:first-child, > td:first-child": {
                                                borderEndStartRadius: e.borderRadiusLG
                                            }
                                        },
                                        [`> ${t}-item-label, > ${t}-item-content`]: {
                                            padding: `${(0,v.unit)(e.padding)} ${(0,v.unit)(e.paddingLG)}`,
                                            borderInlineEnd: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                                            "&:last-child": {
                                                borderInlineEnd: "none"
                                            }
                                        },
                                        [`> ${t}-item-label`]: {
                                            color: e.colorTextSecondary,
                                            backgroundColor: n,
                                            "&::after": {
                                                display: "none"
                                            }
                                        }
                                    }
                                },
                                [`&${t}-middle`]: {
                                    [`${t}-row`]: {
                                        [`> ${t}-item-label, > ${t}-item-content`]: {
                                            padding: `${(0,v.unit)(e.paddingSM)} ${(0,v.unit)(e.paddingLG)}`
                                        }
                                    }
                                },
                                [`&${t}-small`]: {
                                    [`${t}-row`]: {
                                        [`> ${t}-item-label, > ${t}-item-content`]: {
                                            padding: `${(0,v.unit)(e.paddingXS)} ${(0,v.unit)(e.padding)}`
                                        }
                                    }
                                }
                            }
                        }
                    })(e),
                    "&-rtl": {
                        direction: "rtl"
                    },
                    [`${t}-header`]: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: i
                    },
                    [`${t}-title`]: { ...b.textEllipsis,
                        flex: "auto",
                        color: e.titleColor,
                        fontWeight: e.fontWeightStrong,
                        fontSize: e.fontSizeLG,
                        lineHeight: e.lineHeightLG
                    },
                    [`${t}-extra`]: {
                        marginInlineStart: "auto",
                        color: n,
                        fontSize: e.fontSize
                    },
                    [`${t}-view`]: {
                        width: "100%",
                        borderRadius: e.borderRadiusLG,
                        table: {
                            width: "100%",
                            tableLayout: "fixed",
                            borderCollapse: "collapse"
                        }
                    },
                    [`${t}-row`]: {
                        "> th, > td": {
                            paddingBottom: l,
                            paddingInlineEnd: r
                        },
                        "> th:last-child, > td:last-child": {
                            paddingInlineEnd: 0
                        },
                        "&:last-child": {
                            borderBottom: "none",
                            "> th, > td": {
                                paddingBottom: 0
                            }
                        }
                    },
                    [`${t}-item-label`]: {
                        color: e.labelColor,
                        fontWeight: "normal",
                        fontSize: e.fontSize,
                        lineHeight: e.lineHeight,
                        textAlign: "start",
                        "&::after": {
                            content: '":"',
                            position: "relative",
                            top: -.5,
                            marginInline: `${(0,v.unit)(a)} ${(0,v.unit)(o)}`
                        },
                        [`&${t}-item-no-colon::after`]: {
                            content: '""'
                        }
                    },
                    [`${t}-item-no-label`]: {
                        "&::after": {
                            margin: 0,
                            content: '""'
                        }
                    },
                    [`${t}-item-content`]: {
                        display: "table-cell",
                        flex: 1,
                        color: e.contentColor,
                        fontSize: e.fontSize,
                        lineHeight: e.lineHeight,
                        wordBreak: "break-word",
                        overflowWrap: "break-word"
                    },
                    [`${t}-item`]: {
                        paddingBottom: 0,
                        verticalAlign: "top",
                        "&-container": {
                            display: "flex",
                            [`${t}-item-label`]: {
                                display: "inline-flex",
                                alignItems: "baseline"
                            },
                            [`${t}-item-content`]: {
                                display: "inline-flex",
                                alignItems: "baseline",
                                minWidth: "1em"
                            }
                        }
                    },
                    "&-middle": {
                        [`${t}-row`]: {
                            "> th, > td": {
                                paddingBottom: e.paddingSM
                            }
                        }
                    },
                    "&-small": {
                        [`${t}-row`]: {
                            "> th, > td": {
                                paddingBottom: e.paddingXS
                            }
                        }
                    }
                }
            }
        })((0, F.mergeToken)(e, {})), e => ({
            labelBg: e.colorFillAlter,
            labelColor: e.colorTextTertiary,
            titleColor: e.colorText,
            titleMarginBottom: e.fontSizeSM * e.lineHeightSM,
            itemPaddingBottom: e.padding,
            itemPaddingEnd: e.padding,
            colonMarginRight: e.marginXS,
            colonMarginLeft: e.marginXXS / 2,
            contentColor: e.colorText,
            extraColor: e.colorText
        })),
        rX = e => {
            let t, {
                    prefixCls: n,
                    title: r,
                    extra: o,
                    column: a,
                    colon: i = !0,
                    bordered: s,
                    layout: c,
                    children: d,
                    className: u,
                    rootClassName: f,
                    style: g,
                    size: v,
                    labelStyle: b,
                    contentStyle: y,
                    styles: $,
                    items: x,
                    classNames: S,
                    ...C
                } = e,
                {
                    getPrefixCls: k,
                    direction: E,
                    className: w,
                    style: N,
                    classNames: I,
                    styles: M
                } = (0, h.useComponentConfig)("descriptions"),
                z = k("descriptions", n),
                R = (0, rA.default)(),
                T = l.useMemo(() => "number" == typeof a ? a : (0, rB.matchScreen)(R, { ...rO,
                    ...a
                }) ? ? 3, [R, a]),
                H = (t = l.useMemo(() => x || (0, ej.toArray)(d).map(e => ({ ...e ? .props,
                    key : e.key
                })), [x, d]), l.useMemo(() => t.map(({
                    span: e,
                    ...t
                }) => "filled" === e ? { ...t,
                    filled: !0
                } : { ...t,
                    span: "number" == typeof e ? e : (0, rB.matchScreen)(R, e)
                }), [t, R])),
                P = (0, lv.default)(v),
                L = ((e, t) => {
                    let [n, r] = (0, l.useMemo)(() => {
                        let n, l, r, o;
                        return n = [], l = [], r = !1, o = 0, t.filter(e => e).forEach(t => {
                            let {
                                filled: a,
                                ...i
                            } = t;
                            if (a) {
                                l.push(i), n.push(l), l = [], o = 0;
                                return
                            }
                            let s = e - o;
                            (o += t.span || 1) >= e ? (o > e ? (r = !0, l.push({ ...i,
                                span: s
                            })) : l.push(i), n.push(l), l = [], o = 0) : l.push(i)
                        }), l.length > 0 && n.push(l), [n = n.map(t => {
                            let n = t.reduce((e, t) => e + (t.span || 1), 0);
                            if (n < e) {
                                let l = t[t.length - 1];
                                l.span = e - (n - (l.span || 1))
                            }
                            return t
                        }), r]
                    }, [t, e]);
                    return n
                })(T, H),
                [B, A] = rj(z),
                O = { ...e,
                    column: T,
                    items: H,
                    size: P
                },
                [W, D] = (0, m.useMergeSemantic)([I, S], [M, $], {
                    props: O
                }),
                F = l.useMemo(() => ({
                    labelStyle: b,
                    contentStyle: y,
                    styles: {
                        label: D.label,
                        content: D.content
                    },
                    classNames: {
                        label: (0, p.clsx)(W.label),
                        content: (0, p.clsx)(W.content)
                    }
                }), [b, y, D.label, D.content, W.label, W.content]);
            return l.createElement(rW.Provider, {
                value: F
            }, l.createElement("div", {
                className: (0, p.clsx)(z, w, W.root, {
                    [`${z}-${P}`]: P && "default" !== P,
                    [`${z}-bordered`]: !!s,
                    [`${z}-rtl`]: "rtl" === E
                }, u, f, B, A),
                style: { ...N,
                    ...D.root,
                    ...g
                },
                ...C
            }, (r || o) && l.createElement("div", {
                className: (0, p.clsx)(`${z}-header`, W.header),
                style: D.header
            }, r && l.createElement("div", {
                className: (0, p.clsx)(`${z}-title`, W.title),
                style: D.title
            }, r), o && l.createElement("div", {
                className: (0, p.clsx)(`${z}-extra`, W.extra),
                style: D.extra
            }, o)), l.createElement("div", {
                className: `${z}-view`
            }, l.createElement("table", null, l.createElement("tbody", null, L.map((e, t) => l.createElement(r_, {
                key: t,
                index: t,
                colon: i,
                prefixCls: z,
                vertical: "vertical" === c,
                bordered: s,
                row: e
            })))))))
        };
    rX.Item = e => e.children;
    var rq = e.i(638145),
        rV = e.i(21539),
        rG = e.i(616303),
        rY = e.i(908286);
    let rU = ["wrap", "nowrap", "wrap-reverse"],
        rK = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"],
        rQ = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"],
        rZ = (0, y.genStyleHooks)("Flex", e => {
            let {
                paddingXS: t,
                padding: n,
                paddingLG: l
            } = e, r = (0, F.mergeToken)(e, {
                flexGapSM: t,
                flexGap: n,
                flexGapLG: l
            });
            return [(e => {
                let {
                    componentCls: t
                } = e;
                return {
                    [t]: {
                        display: "flex",
                        margin: 0,
                        padding: 0,
                        "&-vertical": {
                            flexDirection: "column"
                        },
                        "&-rtl": {
                            direction: "rtl"
                        },
                        "&:empty": {
                            display: "none"
                        }
                    }
                }
            })(r), (e => {
                let {
                    componentCls: t
                } = e;
                return {
                    [t]: {
                        "&-gap-small": {
                            gap: e.flexGapSM
                        },
                        "&-gap-middle": {
                            gap: e.flexGap
                        },
                        "&-gap-large": {
                            gap: e.flexGapLG
                        }
                    }
                }
            })(r), (e => {
                let {
                    componentCls: t
                } = e, n = {};
                return rU.forEach(e => {
                    n[`${t}-wrap-${e}`] = {
                        flexWrap: e
                    }
                }), n
            })(r), (e => {
                let {
                    componentCls: t
                } = e, n = {};
                return rQ.forEach(e => {
                    n[`${t}-align-${e}`] = {
                        alignItems: e
                    }
                }), n
            })(r), (e => {
                let {
                    componentCls: t
                } = e, n = {};
                return rK.forEach(e => {
                    n[`${t}-justify-${e}`] = {
                        justifyContent: e
                    }
                }), n
            })(r)]
        }, () => ({}), {
            resetStyle: !1
        }),
        rJ = l.default.forwardRef((e, t) => {
            let n, r, o, {
                    prefixCls: a,
                    rootClassName: i,
                    className: s,
                    style: c,
                    flex: d,
                    gap: u,
                    vertical: m,
                    orientation: g,
                    component: v = "div",
                    children: b,
                    ...y
                } = e,
                {
                    flex: $,
                    direction: x,
                    getPrefixCls: S
                } = l.default.useContext(h.ConfigContext),
                C = S("flex", a),
                [k, E] = rZ(C),
                [, w] = (0, l3.useOrientation)(g, m ? ? $ ? .vertical),
                N = (0, p.clsx)(s, i, $ ? .className, C, k, E, (0, p.clsx)({ ...(n = !0 === e.wrap ? "wrap" : e.wrap, {
                        [`${C}-wrap-${n}`]: n && rU.includes(n)
                    }),
                    ...(r = {}, rQ.forEach(t => {
                        r[`${C}-align-${t}`] = e.align === t
                    }), r[`${C}-align-stretch`] = !e.align && !!e.vertical, r),
                    ...(o = {}, rK.forEach(t => {
                        o[`${C}-justify-${t}`] = e.justify === t
                    }), o)
                }), {
                    [`${C}-rtl`]: "rtl" === x,
                    [`${C}-gap-${u}`]: (0, rY.isPresetSize)(u),
                    [`${C}-vertical`]: w
                }),
                I = { ...$ ? .style,
                    ...c
                };
            return (0, f.default)(d) && (I.flex = d), (0, f.default)(u) && !(0, rY.isPresetSize)(u) && (I.gap = u), l.default.createElement(v, {
                ref: t,
                className: N,
                style: I,
                ...(0, eD.omit)(y, ["justify", "wrap", "align"])
            }, b)
        }),
        r0 = l.default.createContext(null),
        r1 = {
            icon: {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"
                    }
                }]
            },
            name: "file-text",
            theme: "outlined"
        };

    function r2() {
        return (r2 = Object.assign.bind()).apply(this, arguments)
    }
    let r3 = l.forwardRef((e, t) => l.createElement(eQ.default, r2({}, e, {
        ref: t,
        icon: r1
    })));
    var r5 = e.i(995144),
        r4 = e.i(334596),
        r8 = e.i(709656);
    let r6 = (0, y.genStyleHooks)("FloatButton", e => {
            let {
                controlHeightLG: t,
                marginXXL: n,
                marginLG: l,
                fontSizeIcon: r,
                calc: o
            } = e, a = (0, F.mergeToken)(e, {
                floatButtonIconSize: o(r).mul(1.5).equal(),
                floatButtonSize: t,
                floatButtonInsetBlockEnd: n,
                floatButtonInsetInlineEnd: l
            });
            return [(e => {
                let {
                    componentCls: t,
                    floatButtonSize: n,
                    iconCls: l,
                    antCls: r,
                    floatButtonIconSize: o
                } = e, a = (0, y.genCssVar)(r, "float-btn"), i = `${t}-badge`, s = Math.SQRT2, c = (s - 1) / s, d = e.calc(e.borderRadius).mul(c).equal(), u = e.calc(e.controlHeight).div(2).mul(c).equal();
                return {
                    [t]: [{
                        [a("size")]: (0, v.unit)(n)
                    }, {
                        flexDirection: "column",
                        margin: 0,
                        padding: `${(0,v.unit)(e.paddingXXS)} 0`,
                        width: `var(${a("size")})`,
                        minHeight: `var(${a("size")})`,
                        height: "auto",
                        wordBreak: "break-word",
                        whiteSpace: "normal",
                        gap: e.calc(e.paddingXXS).div(2).equal(),
                        "&-rtl": {
                            direction: "rtl"
                        },
                        [`&${t}-individual`]: {
                            position: "fixed",
                            zIndex: e.zIndexPopupBase,
                            insetInlineEnd: e.floatButtonInsetInlineEnd,
                            bottom: e.floatButtonInsetBlockEnd,
                            boxShadow: e.boxShadowSecondary
                        },
                        [`&${t}-pure`]: {
                            position: "relative",
                            inset: "auto"
                        },
                        "&:empty": {
                            display: "none"
                        },
                        [`${t}-icon`]: {
                            lineHeight: 1
                        },
                        [`&${t}-icon-only`]: {
                            [l]: {
                                fontSize: o
                            }
                        },
                        [`${t}-content`]: {
                            fontSize: e.fontSizeSM
                        },
                        [i]: {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: 0,
                            [`&:not(${i}-dot)`]: {
                                transform: "translate(50%, -50%)"
                            }
                        },
                        [`&-rtl ${i}:not(${i}-dot)`]: {
                            transform: "translate(-50%, -50%)"
                        },
                        "&-square": {
                            [`${i}-dot`]: {
                                marginTop: d,
                                marginInlineEnd: d
                            }
                        },
                        "&-circle": {
                            [i]: {
                                marginTop: u,
                                marginInlineEnd: u
                            }
                        }
                    }]
                }
            })(a), (e => {
                let {
                    componentCls: t,
                    antCls: n,
                    floatButtonSize: l,
                    padding: r
                } = e, o = `${t}-group`, a = `${o}-list`, i = (0, y.genCssVar)(n, "float-btn");
                return {
                    [o]: [{
                        [i("list-transform-start")]: `translate(0,${(0,v.unit)(l)})`,
                        [i("list-trigger-offset")]: `calc(${(0,v.unit)(l)} + ${(0,v.unit)(r)})`
                    }, { ...(0, b.resetComponent)(e),
                        position: "fixed",
                        zIndex: e.zIndexPopupBase,
                        insetInlineEnd: e.floatButtonInsetInlineEnd,
                        bottom: e.floatButtonInsetBlockEnd,
                        gap: r,
                        "&-rtl": {
                            direction: "rtl"
                        },
                        [`&${t}-pure`]: {
                            position: "relative",
                            inset: "auto"
                        },
                        [t]: {
                            position: "relative",
                            inset: "auto"
                        }
                    }, {
                        [`&:not(${o}-individual) ${a}`]: {
                            boxShadow: e.boxShadowSecondary
                        },
                        [`&${o}-individual ${a}`]: {
                            gap: r
                        },
                        [`&-menu-mode ${a}`]: {
                            position: "absolute"
                        },
                        [a]: {
                            borderRadius: e.borderRadiusLG,
                            "&-motion": {
                                transition: `all ${e.motionDurationSlow}`,
                                "&-enter, &-appear": {
                                    opacity: 0,
                                    transform: i("list-transform-start", !0),
                                    "&-active": {
                                        opacity: 1,
                                        transform: "translate(0, 0)"
                                    }
                                },
                                "&-leave": {
                                    "&-active": {
                                        opacity: 0,
                                        transform: i("list-transform-start", !0)
                                    }
                                }
                            }
                        },
                        "&-top": {
                            [a]: {
                                bottom: i("list-trigger-offset", !0)
                            }
                        },
                        "&-bottom": {
                            [a]: {
                                [i("list-transform-start")]: `translate(0, calc(${(0,v.unit)(l)} * -1))`,
                                top: i("list-trigger-offset", !0)
                            }
                        },
                        "&-left": {
                            [a]: {
                                [i("list-transform-start")]: `translate(${(0,v.unit)(l)}, 0)`,
                                right: i("list-trigger-offset", !0)
                            }
                        },
                        "&-right": {
                            [a]: {
                                [i("list-transform-start")]: `translate(calc(${(0,v.unit)(l)} * -1), 0)`,
                                left: i("list-trigger-offset", !0)
                            }
                        }
                    }]
                }
            })(a), (0, r8.initFadeMotion)(e)]
        }, () => ({}), {
            order: -998
        }),
        r9 = "float-btn",
        r7 = l.default.forwardRef((e, t) => {
            let {
                prefixCls: n,
                className: r,
                rootClassName: o,
                style: a,
                type: i = "default",
                shape: s = "circle",
                icon: c,
                description: d,
                content: u,
                tooltip: f,
                badge: g = {},
                classNames: v,
                styles: b,
                ...y
            } = e, {
                getPrefixCls: $,
                direction: x
            } = l.default.useContext(h.ConfigContext), S = l.default.useContext(r0), C = $(r9, n), k = (0, O.default)(C), {
                shape: E,
                individual: w,
                classNames: N,
                styles: I
            } = S || {}, M = E || s, z = u ? ? d, R = { ...e,
                type: i,
                shape: M
            }, [T, H] = r6(C, k), P = l.default.useMemo(() => ({
                icon: `${C}-icon`,
                content: `${C}-content`
            }), [C]), [L, B] = (0, m.useMergeSemantic)([P, N, v], [I, b], {
                props: R
            }), A = z || c ? c : l.default.createElement(r3, null), [W] = (0, ec.useZIndex)("FloatButton", a ? .zIndex), D = { ...a,
                zIndex: W
            }, F = (0, eD.omit)(g, ["title", "children", "status", "text"]), _ = "badge" in e && l.default.createElement(ti, { ...F,
                className: (0, p.clsx)(F.className, `${C}-badge`, {
                    [`${C}-badge-dot`]: F.dot
                })
            }), j = (0, r5.default)(f), X = l.default.createElement(r4.default, { ...y,
                ref: t,
                className: (0, p.clsx)(T, H, k, C, r, o, `${C}-${i}`, `${C}-${M}`, {
                    [`${C}-rtl`]: "rtl" === x,
                    [`${C}-individual`]: w ? ? !0,
                    [`${C}-icon-only`]: !z
                }),
                classNames: L,
                styles: B,
                style: D,
                shape: M,
                type: i,
                size: "large",
                icon: A,
                _skipSemantic: !0
            }, z, _);
            return j && (X = l.default.createElement(l5.default, { ...j
            }, X)), X
        }),
        oe = l.default.createElement(eJ, null),
        ot = l.default.forwardRef((e, t) => {
            let {
                backTopIcon: n
            } = (0, h.useComponentConfig)("floatButton"), {
                prefixCls: r,
                className: o,
                type: a = "default",
                shape: i = "circle",
                visibilityHeight: s = 400,
                icon: d,
                target: m,
                onClick: f,
                duration: g = 450,
                ...v
            } = e, [b, y] = (0, l.useState)(0 === s), $ = l.default.useRef(null);
            l.default.useImperativeHandle(t, () => ({
                nativeElement: $.current
            }));
            let x = () => $.current ? .ownerDocument || window,
                S = (0, e1.default)(e => {
                    y((0, B.default)(e.target) >= s)
                });
            (0, l.useEffect)(() => {
                let e = (m || x)();
                return S({
                    target: e
                }), e ? .addEventListener("scroll", S), () => {
                    S.cancel(), e ? .removeEventListener("scroll", S)
                }
            }, [m]);
            let C = e => {
                    (0, A.default)(0, {
                        getContainer: m || x,
                        duration: g
                    }), f ? .(e)
                },
                {
                    getPrefixCls: k
                } = (0, l.useContext)(h.ConfigContext),
                E = k(r9, r),
                w = k(),
                N = {
                    prefixCls: E,
                    icon: d ? ? n ? ? oe,
                    type: a,
                    shape: (0, l.useContext)(r0) ? .shape || i,
                    ...v
                };
            return l.default.createElement(c.default, {
                visible: b,
                motionName: `${w}-fade`
            }, ({
                className: e
            }, t) => l.default.createElement(r7, {
                ref: (0, u.composeRef)($, t),
                ...N,
                onClick: C,
                className: (0, p.clsx)(o, e)
            }))
        });
    var on = e.i(38243);
    let ol = e => {
            let {
                prefixCls: t,
                className: n,
                style: r,
                classNames: o,
                styles: i,
                rootClassName: s,
                shape: d = "circle",
                type: u = "default",
                placement: f,
                icon: g = l.default.createElement(r3, null),
                closeIcon: v,
                trigger: b,
                children: y,
                onOpenChange: $,
                open: x,
                onClick: S,
                ...C
            } = e, {
                direction: k,
                getPrefixCls: E,
                closeIcon: w,
                classNames: N,
                styles: I,
                className: M,
                style: z
            } = (0, h.useComponentConfig)("floatButtonGroup"), R = v ? ? w ? ? l.default.createElement(a.default, null), T = E(r9, t), H = (0, O.default)(T), [L, B] = r6(T, H), A = `${T}-group`, W = b && ["click", "hover"].includes(b), [D] = (0, ec.useZIndex)("FloatButton", r ? .zIndex), F = l.default.useRef(null), _ = ["top", "left", "right", "bottom"].includes(f) ? f : "top", [j, X] = (0, tm.useControlledState)(!1, x), q = "hover" === b, V = "click" === b, G = (0, P.useEvent)(e => {
                j !== e && (X(e), $ ? .(e))
            });
            l.default.useEffect(() => {
                if (V) {
                    let e = e => {
                        F.current ? .contains(e.target) || G(!1)
                    };
                    return document.addEventListener("click", e, {
                        capture: !0
                    }), () => document.removeEventListener("click", e, {
                        capture: !0
                    })
                }
            }, [V]);
            let Y = "circle" === d,
                U = { ...e,
                    shape: d,
                    type: u,
                    placement: _
                },
                [K, Q] = (0, m.useMergeSemantic)([N, o], [I, i], {
                    props: U
                }),
                Z = l.default.useMemo(() => ({
                    shape: d,
                    individual: Y,
                    classNames: {
                        root: K.item,
                        icon: K.itemIcon,
                        content: K.itemContent
                    },
                    styles: {
                        root: Q.item,
                        icon: Q.itemIcon,
                        content: Q.itemContent
                    }
                }), [d, Y, K, Q]),
                J = l.default.useMemo(() => ({ ...Z,
                    individual: !0,
                    classNames: {
                        root: K.trigger,
                        icon: K.triggerIcon,
                        content: K.triggerContent
                    },
                    styles: {
                        root: Q.trigger,
                        icon: Q.triggerIcon,
                        content: Q.triggerContent
                    }
                }), [Z, K, Q]),
                ee = `${A}-list`,
                et = e => {
                    let t = "top" === _ || "bottom" === _,
                        n = {
                            className: (0, p.clsx)(ee, K.list, e),
                            style: Q.list
                        };
                    return Y ? l.default.createElement(rJ, {
                        vertical: t,
                        ...n
                    }, y) : l.default.createElement(on.default.Compact, {
                        vertical: t,
                        ...n
                    }, y)
                };
            return l.default.createElement(r0.Provider, {
                value: Z
            }, l.default.createElement("div", {
                className: (0, p.clsx)(A, L, B, H, M, K.root, n, s, {
                    [`${A}-rtl`]: "rtl" === k,
                    [`${A}-individual`]: Y,
                    [`${A}-${_}`]: W,
                    [`${A}-menu-mode`]: W
                }),
                style: { ...z,
                    zIndex: D,
                    ...Q.root,
                    ...r
                },
                ref: F,
                onMouseEnter: () => {
                    q && G(!0)
                },
                onMouseLeave: () => {
                    q && G(!1)
                }
            }, W ? l.default.createElement(c.default, {
                visible: j,
                motionName: `${ee}-motion`
            }, ({
                className: e
            }) => et(e)) : et(), W && l.default.createElement(r0.Provider, {
                value: J
            }, l.default.createElement(r7, {
                type: u,
                icon: j ? R : g,
                "aria-label": e["aria-label"],
                className: `${A}-trigger`,
                onClick: e => {
                    V && G(!j), S ? .(e)
                },
                ...C
            }))))
        },
        or = ({
            backTop: e,
            ...t
        }) => e ? l.createElement(ot, { ...t,
            visibilityHeight: 0
        }) : l.createElement(r7, { ...t
        });
    r7.BackTop = ot, r7.Group = ol, r7._InternalPanelDoNotUseOrYouWillBeFired = ({
        className: e,
        items: t,
        classNames: n,
        styles: r,
        prefixCls: o,
        ...a
    }) => {
        let {
            getPrefixCls: i
        } = l.useContext(h.ConfigContext), s = i(r9, o), c = `${s}-pure`;
        return t ? l.createElement(ol, {
            className: (0, p.clsx)(e, c),
            classNames: n,
            styles: r,
            ...a
        }, t.map((e, t) => l.createElement(or, {
            key: t,
            ...e
        }))) : l.createElement(or, {
            className: (0, p.clsx)(e, c),
            classNames: n,
            styles: r,
            ...a
        })
    };
    var oo = e.i(648601);
    e.i(131757), e.i(401188);
    var oa = e.i(839598),
        oi = e.i(644099),
        os = e.i(235875),
        oc = e.i(887719),
        od = e.i(264042),
        ou = e.i(165370),
        op = e.i(244451);
    let om = l.default.createContext({});
    om.Consumer;
    var of = e.i(211576);
    let og = l.default.forwardRef((e, t) => {
        let n, {
                prefixCls: r,
                children: o,
                actions: a,
                extra: i,
                styles: s,
                className: c,
                classNames: d,
                colStyle: u,
                ...m
            } = e,
            {
                grid: f,
                itemLayout: v
            } = (0, l.useContext)(om),
            {
                getPrefixCls: b,
                list: y
            } = (0, l.useContext)(h.ConfigContext),
            $ = e => (0, p.clsx)(y ? .item ? .classNames ? .[e], d ? .[e]),
            x = e => ({ ...y ? .item ? .styles ? .[e],
                ...s ? .[e]
            }),
            S = b("list", r),
            C = a && a.length > 0 && l.default.createElement("ul", {
                className: (0, p.clsx)(`${S}-item-action`, $("actions")),
                key: "actions",
                style: x("actions")
            }, a.map((e, t) => l.default.createElement("li", {
                key: `${S}-item-action-${t}`
            }, e, t !== a.length - 1 && l.default.createElement("em", {
                className: `${S}-item-action-split`
            })))),
            k = l.default.createElement(f ? "div" : "li", { ...m,
                ...!f ? {
                    ref: t
                } : {},
                className: (0, p.clsx)(`${S}-item`, {
                    [`${S}-item-no-flex`]: !("vertical" === v ? !!i : !(n = (0, ej.toArray)(o)).some(e => "string" == typeof e) || !(n.length > 1))
                }, c)
            }, "vertical" === v && i ? [l.default.createElement("div", {
                className: `${S}-item-main`,
                key: "content"
            }, o, C), l.default.createElement("div", {
                className: (0, p.clsx)(`${S}-item-extra`, $("extra")),
                key: "extra",
                style: x("extra")
            }, i)] : [o, C, (0, g.cloneElement)(i, {
                key: "extra"
            })]);
        return f ? l.default.createElement( of .Col, {
            ref: t,
            flex: 1,
            style: u
        }, k) : k
    });
    og.Meta = ({
        prefixCls: e,
        className: t,
        avatar: n,
        title: r,
        description: o,
        ...a
    }) => {
        let {
            getPrefixCls: i
        } = (0, l.useContext)(h.ConfigContext), s = i("list", e), c = (0, p.clsx)(`${s}-item-meta`, t), d = l.default.createElement("div", {
            className: `${s}-item-meta-content`
        }, r && l.default.createElement("h4", {
            className: `${s}-item-meta-title`
        }, r), o && l.default.createElement("div", {
            className: `${s}-item-meta-description`
        }, o));
        return l.default.createElement("div", { ...a,
            className: c
        }, n && l.default.createElement("div", {
            className: `${s}-item-meta-avatar`
        }, n), (r || o) && d)
    };
    let oh = (0, y.genStyleHooks)("List", e => {
            let t = (0, F.mergeToken)(e, {
                listBorderedCls: `${e.componentCls}-bordered`,
                minHeight: e.controlHeightLG
            });
            return [(e => {
                let {
                    componentCls: t,
                    antCls: n,
                    controlHeight: l,
                    minHeight: r,
                    paddingSM: o,
                    marginLG: a,
                    padding: i,
                    itemPadding: s,
                    colorPrimary: c,
                    itemPaddingSM: d,
                    itemPaddingLG: u,
                    paddingXS: p,
                    margin: m,
                    colorText: f,
                    colorTextDescription: g,
                    motionDurationSlow: h,
                    lineWidth: y,
                    headerBg: $,
                    footerBg: x,
                    emptyTextPadding: S,
                    metaMarginBottom: C,
                    avatarMarginRight: k,
                    titleMarginBottom: E,
                    descriptionFontSize: w
                } = e;
                return {
                    [t]: { ...(0, b.resetComponent)(e),
                        position: "relative",
                        "--rc-virtual-list-scrollbar-bg": e.colorSplit,
                        "*": {
                            outline: "none"
                        },
                        [`${t}-header`]: {
                            background: $
                        },
                        [`${t}-footer`]: {
                            background: x
                        },
                        [`${t}-header, ${t}-footer`]: {
                            paddingBlock: o
                        },
                        [`${t}-pagination`]: {
                            marginBlockStart: a,
                            [`${n}-pagination-options`]: {
                                textAlign: "start"
                            }
                        },
                        [`${t}-spin`]: {
                            minHeight: r,
                            textAlign: "center"
                        },
                        [`${t}-items`]: {
                            margin: 0,
                            padding: 0,
                            listStyle: "none"
                        },
                        [`${t}-item`]: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: s,
                            color: f,
                            [`${t}-item-meta`]: {
                                display: "flex",
                                flex: 1,
                                alignItems: "flex-start",
                                maxWidth: "100%",
                                [`${t}-item-meta-avatar`]: {
                                    marginInlineEnd: k
                                },
                                [`${t}-item-meta-content`]: {
                                    flex: "1 0",
                                    width: 0,
                                    color: f
                                },
                                [`${t}-item-meta-title`]: {
                                    margin: `0 0 ${(0,v.unit)(e.marginXXS)} 0`,
                                    color: f,
                                    fontSize: e.fontSize,
                                    lineHeight: e.lineHeight,
                                    "> a": {
                                        color: f,
                                        transition: `all ${h}`,
                                        "&:hover": {
                                            color: c
                                        }
                                    }
                                },
                                [`${t}-item-meta-description`]: {
                                    color: g,
                                    fontSize: w,
                                    lineHeight: e.lineHeight
                                }
                            },
                            [`${t}-item-action`]: {
                                flex: "0 0 auto",
                                marginInlineStart: e.marginXXL,
                                padding: 0,
                                fontSize: 0,
                                listStyle: "none",
                                "& > li": {
                                    position: "relative",
                                    display: "inline-block",
                                    padding: `0 ${(0,v.unit)(p)}`,
                                    color: g,
                                    fontSize: e.fontSize,
                                    lineHeight: e.lineHeight,
                                    textAlign: "center",
                                    "&:first-child": {
                                        paddingInlineStart: 0
                                    }
                                },
                                [`${t}-item-action-split`]: {
                                    position: "absolute",
                                    insetBlockStart: "50%",
                                    insetInlineEnd: 0,
                                    width: y,
                                    height: e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),
                                    transform: "translateY(-50%)",
                                    backgroundColor: e.colorSplit
                                }
                            }
                        },
                        [`${t}-empty`]: {
                            padding: `${(0,v.unit)(i)} 0`,
                            color: g,
                            fontSize: e.fontSizeSM,
                            textAlign: "center"
                        },
                        [`${t}-empty-text`]: {
                            padding: S,
                            color: e.colorTextDisabled,
                            fontSize: e.fontSize,
                            textAlign: "center"
                        },
                        [`${t}-item-no-flex`]: {
                            display: "block"
                        }
                    },
                    [`${t}-grid ${n}-col > ${t}-item`]: {
                        display: "block",
                        maxWidth: "100%",
                        marginBlockEnd: m,
                        paddingBlock: 0,
                        borderBlockEnd: "none"
                    },
                    [`${t}-vertical ${t}-item`]: {
                        alignItems: "initial",
                        [`${t}-item-main`]: {
                            display: "block",
                            flex: 1
                        },
                        [`${t}-item-extra`]: {
                            marginInlineStart: a
                        },
                        [`${t}-item-meta`]: {
                            marginBlockEnd: C,
                            [`${t}-item-meta-title`]: {
                                marginBlockStart: 0,
                                marginBlockEnd: E,
                                color: f,
                                fontSize: e.fontSizeLG,
                                lineHeight: e.lineHeightLG
                            }
                        },
                        [`${t}-item-action`]: {
                            marginBlockStart: i,
                            marginInlineStart: "auto",
                            "> li": {
                                padding: `0 ${(0,v.unit)(i)}`,
                                "&:first-child": {
                                    paddingInlineStart: 0
                                }
                            }
                        }
                    },
                    [`${t}-split ${t}-item`]: {
                        borderBlockEnd: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                        "&:last-child": {
                            borderBlockEnd: "none"
                        }
                    },
                    [`${t}-split ${t}-header`]: {
                        borderBlockEnd: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
                    },
                    [`${t}-split${t}-empty ${t}-footer`]: {
                        borderTop: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
                    },
                    [`${t}-loading ${t}-spin-nested-loading`]: {
                        minHeight: l
                    },
                    [`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]: {
                        borderBlockEnd: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
                    },
                    [`${t}-lg ${t}-item`]: {
                        padding: u
                    },
                    [`${t}-sm ${t}-item`]: {
                        padding: d
                    },
                    [`${t}:not(${t}-vertical)`]: {
                        [`${t}-item-no-flex`]: {
                            [`${t}-item-action`]: {
                                float: "right"
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    listBorderedCls: t,
                    componentCls: n,
                    paddingLG: l,
                    margin: r,
                    itemPaddingSM: o,
                    itemPaddingLG: a,
                    marginLG: i,
                    borderRadiusLG: s
                } = e, c = (0, v.unit)(e.calc(s).sub(e.lineWidth).equal());
                return {
                    [t]: {
                        border: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderRadius: s,
                        [`${n}-header`]: {
                            borderRadius: `${c} ${c} 0 0`
                        },
                        [`${n}-footer`]: {
                            borderRadius: `0 0 ${c} ${c}`
                        },
                        [`${n}-header,${n}-footer,${n}-item`]: {
                            paddingInline: l
                        },
                        [`${n}-pagination`]: {
                            margin: `${(0,v.unit)(r)} ${(0,v.unit)(i)}`
                        }
                    },
                    [`${t}${n}-sm`]: {
                        [`${n}-item,${n}-header,${n}-footer`]: {
                            padding: o
                        }
                    },
                    [`${t}${n}-lg`]: {
                        [`${n}-item,${n}-header,${n}-footer`]: {
                            padding: a
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    screenSM: n,
                    screenMD: l,
                    marginLG: r,
                    marginSM: o,
                    margin: a
                } = e;
                return {
                    [`@media screen and (max-width:${l}px)`]: {
                        [t]: {
                            [`${t}-item`]: {
                                [`${t}-item-action`]: {
                                    marginInlineStart: r
                                }
                            }
                        },
                        [`${t}-vertical`]: {
                            [`${t}-item`]: {
                                [`${t}-item-extra`]: {
                                    marginInlineStart: r
                                }
                            }
                        }
                    },
                    [`@media screen and (max-width: ${n}px)`]: {
                        [t]: {
                            [`${t}-item`]: {
                                flexWrap: "wrap",
                                [`${t}-action`]: {
                                    marginInlineStart: o
                                }
                            }
                        },
                        [`${t}-vertical`]: {
                            [`${t}-item`]: {
                                flexWrap: "wrap-reverse",
                                [`${t}-item-main`]: {
                                    minWidth: e.contentWidth
                                },
                                [`${t}-item-extra`]: {
                                    margin: `auto auto ${(0,v.unit)(a)}`
                                }
                            }
                        }
                    }
                }
            })(t)]
        }, e => ({
            contentWidth: 220,
            itemPadding: `${(0,v.unit)(e.paddingContentVertical)} 0`,
            itemPaddingSM: `${(0,v.unit)(e.paddingContentVerticalSM)} ${(0,v.unit)(e.paddingContentHorizontal)}`,
            itemPaddingLG: `${(0,v.unit)(e.paddingContentVerticalLG)} ${(0,v.unit)(e.paddingContentHorizontalLG)}`,
            headerBg: "transparent",
            footerBg: "transparent",
            emptyTextPadding: e.padding,
            metaMarginBottom: e.padding,
            avatarMarginRight: e.padding,
            titleMarginBottom: e.paddingSM,
            descriptionFontSize: e.fontSize
        })),
        ov = l.forwardRef((e, t) => {
            let {
                pagination: n = !1,
                prefixCls: r,
                bordered: o = !1,
                split: a = !0,
                className: i,
                rootClassName: s,
                style: c,
                children: d,
                itemLayout: u,
                loadMore: m,
                grid: f,
                dataSource: g = [],
                size: v,
                header: b,
                footer: y,
                loading: $ = !1,
                rowKey: x,
                renderItem: S,
                locale: C,
                ...k
            } = e, E = n && "object" == typeof n ? n : {}, [w, N] = l.useState(E.defaultCurrent || 1), [I, M] = l.useState(E.defaultPageSize || 10), {
                getPrefixCls: z,
                direction: R,
                className: T,
                style: P
            } = (0, h.useComponentConfig)("list"), {
                renderEmpty: L
            } = l.useContext(h.ConfigContext), B = e => (t, l) => {
                N(t), M(l), n && n ? .[e] ? .(t, l)
            }, A = B("onChange"), O = B("onShowSizeChange"), W = !!(m || n || y), D = z("list", r), [F, _] = oh(D), j = $;
            "boolean" == typeof j && (j = {
                spinning: j
            });
            let X = !!j ? .spinning,
                q = (0, lv.default)(v),
                V = "";
            switch (q) {
                case "large":
                    V = "lg";
                    break;
                case "small":
                    V = "sm"
            }
            let G = (0, p.clsx)(D, {
                    [`${D}-vertical`]: "vertical" === u,
                    [`${D}-${V}`]: V,
                    [`${D}-split`]: a,
                    [`${D}-bordered`]: o,
                    [`${D}-loading`]: X,
                    [`${D}-grid`]: !!f,
                    [`${D}-something-after-last-item`]: W,
                    [`${D}-rtl`]: "rtl" === R
                }, T, i, s, F, _),
                Y = (0, oc.default)({
                    current: 1,
                    total: 0,
                    position: "bottom"
                }, {
                    total: g.length,
                    current: w,
                    pageSize: I
                }, n || {}),
                U = Math.ceil(Y.total / Y.pageSize);
            Y.current = Math.min(Y.current, U);
            let K = n && l.createElement("div", {
                    className: (0, p.clsx)(`${D}-pagination`)
                }, l.createElement(ou.default, {
                    align: "end",
                    ...Y,
                    onChange: A,
                    onShowSizeChange: O
                })),
                Q = (0, H.default)(g);
            n && g.length > (Y.current - 1) * Y.pageSize && (Q = (0, H.default)(g).splice((Y.current - 1) * Y.pageSize, Y.pageSize));
            let Z = Object.keys(f || {}).some(e => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(e)),
                J = (0, rA.default)(Z),
                ee = l.useMemo(() => {
                    for (let e = 0; e < rB.responsiveArray.length; e += 1) {
                        let t = rB.responsiveArray[e];
                        if (J[t]) return t
                    }
                }, [J]),
                et = l.useMemo(() => {
                    if (!f) return;
                    let e = ee && f[ee] ? f[ee] : f.column;
                    if (e) return {
                        width: `${100/e}%`,
                        maxWidth: `${100/e}%`
                    }
                }, [JSON.stringify(f), ee]),
                en = X && l.createElement("div", {
                    style: {
                        minHeight: 53
                    }
                });
            if (Q.length > 0) {
                let e = Q.map((e, t) => {
                    let n;
                    return S ? ((n = "function" == typeof x ? x(e) : x ? e[x] : e.key) || (n = `list-item-${t}`), l.createElement(l.Fragment, {
                        key: n
                    }, S(e, t))) : null
                });
                en = f ? l.createElement(od.Row, {
                    gutter: f.gutter
                }, l.Children.map(e, e => l.createElement("div", {
                    key: e ? .key,
                    style: et
                }, e))) : l.createElement("ul", {
                    className: `${D}-items`
                }, e)
            } else d || X || (en = l.createElement("div", {
                className: `${D}-empty-text`
            }, C ? .emptyText || L ? .("List") || l.createElement(lg.default, {
                componentName: "List"
            })));
            let el = Y.position,
                er = l.useMemo(() => ({
                    grid: f,
                    itemLayout: u
                }), [JSON.stringify(f), u]);
            return l.createElement(om.Provider, {
                value: er
            }, l.createElement("div", {
                ref: t,
                style: { ...P,
                    ...c
                },
                className: G,
                ...k
            }, ("top" === el || "both" === el) && K, b && l.createElement("div", {
                className: `${D}-header`
            }, b), l.createElement(op.default, { ...j
            }, en, d), y && l.createElement("div", {
                className: `${D}-footer`
            }, y), m || ("bottom" === el || "both" === el) && K))
        });
    ov.Item = og;
    var ob = e.i(978052),
        oy = e.i(118696),
        o$ = e.i(39874),
        ox = e.i(737434);
    let oS = l.default.forwardRef((e, t) => {
            let {
                item: n,
                style: r,
                prefixCls: o,
                itemRender: a,
                className: i,
                index: s,
                column: c,
                onResize: d
            } = e, u = `${o}-item`, m = (0, l.useMemo)(() => n.children ? ? a ? .({ ...n,
                index: s,
                column: c
            }), [n, a, c, s]), f = l.default.createElement("div", {
                ref: t,
                style: r,
                className: (0, p.clsx)(u, i)
            }, m);
            return d && (f = l.default.createElement(ob.default, {
                onResize: d
            }, f)), f
        }),
        oC = (0, y.genStyleHooks)("Masonry", e => [(e => {
            let {
                componentCls: t
            } = e, n = `${t}-item`;
            return {
                [t]: {
                    position: "relative",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    "&-rtl": {
                        direction: "rtl"
                    },
                    [`& > ${n}`]: {
                        boxSizing: "border-box",
                        "&-fade": {
                            "&-appear": {
                                transition: `opacity ${e.motionDurationSlow} ${e.motionEaseOut}`,
                                opacity: 0,
                                "&-active": {
                                    opacity: 1
                                }
                            },
                            "&-leave": {
                                transition: `opacity ${e.motionDurationFast} ${e.motionEaseOut}`,
                                opacity: 1,
                                "&-active": {
                                    opacity: 0
                                }
                            }
                        },
                        [`&:not(${n}-fade)`]: {
                            transition: ["left", "right", "top"].map(t => `${t} ${e.motionDurationSlow} ${e.motionEaseOut}`).join(",")
                        }
                    }
                }
            }
        })(e)]),
        ok = l.forwardRef((e, t) => {
            var n;
            let r, o, a, {
                    rootClassName: i,
                    className: s,
                    style: c,
                    classNames: d,
                    styles: f,
                    columns: g,
                    prefixCls: v,
                    gutter: b = 0,
                    items: y,
                    itemRender: $,
                    onLayoutChange: x,
                    fresh: S
                } = e,
                {
                    getPrefixCls: C,
                    direction: k,
                    className: E,
                    style: w,
                    classNames: N,
                    styles: I
                } = (0, h.useComponentConfig)("masonry"),
                M = C("masonry", v),
                z = (0, O.default)(M),
                [R, T] = oC(M, z),
                L = l.useRef(null);
            l.useImperativeHandle(t, () => ({
                nativeElement: L.current
            }));
            let [B, A] = (null === (r = l.useRef(null)).current && (r.current = new Map), [(e, t) => {
                r.current.set(e, t)
            }, e => r.current.get(e)]), [W, D] = l.useState([]);
            l.useEffect(() => {
                D(y || [])
            }, [y]);
            let F = (0, rA.default)(),
                [_ = 0, j = _] = (0, o$.default)(b, F),
                X = l.useMemo(() => {
                    if (!g) return 3;
                    if ("number" == typeof g) return g;
                    let e = rB.responsiveArray.find(e => F[e] && void 0 !== g[e]);
                    return e ? g[e] : g.xs ? ? 1
                }, [g, F]),
                q = { ...e,
                    columns: X
                },
                [V, G] = (0, m.useMergeSemantic)([N, d], [I, f], {
                    props: q
                }),
                [Y, K] = l.useState([]),
                Q = (n = () => {
                    let e = W.map((e, t) => {
                        let n = e.key ? ? t,
                            l = A(n),
                            r = l ? .getBoundingClientRect();
                        return [n, r ? r.height : 0, e.column]
                    });
                    K(t => (0, oy.default)(t, e) ? t : e)
                }, o = l.useRef(0), a = () => {
                    ox.default.cancel(o.current)
                }, l.useEffect(() => a, []), (0, P.useEvent)(() => {
                    a(), o.current = (0, ox.default)(n)
                })),
                [Z, J] = function(e, t, n) {
                    let [r, o] = l.useMemo(() => {
                        let l = Array(t).fill(0),
                            r = new Map;
                        for (let o = 0; o < e.length; o += 1) {
                            let [a, i, s] = e[o], c = s ? ? l.indexOf(Math.min.apply(Math, (0, H.default)(l))), d = l[c = Math.min(c, t - 1)];
                            r.set(a, {
                                column: c,
                                top: d
                            }), l[c] += i + n
                        }
                        return [r, Math.max(0, Math.max.apply(Math, (0, H.default)(l)) - n)]
                    }, [t, e, n]);
                    return [r, o]
                }(Y, X, j),
                ee = l.useMemo(() => W.map((e, t) => {
                    let n = e.key ? ? t;
                    return {
                        item: e,
                        itemIndex: t,
                        itemKey: n,
                        key: n,
                        position: Z.get(n)
                    }
                }), [W, Z]);
            l.useEffect(() => {
                Q()
            }, [W, X]);
            let [et, en] = l.useState([]);
            return (0, lU.default)(() => {
                x && ee.every(({
                    position: e
                }) => e) && en(e => {
                    let t = ee.map(({
                        item: e,
                        position: t
                    }) => [e, t.column]);
                    return (0, oy.default)(e, t) ? e : t
                })
            }, [ee]), (0, lU.default)(() => {
                x && y && y.length === et.length && x(et.map(([e, t]) => ({ ...e,
                    column: t
                })))
            }, [et]), l.createElement(ob.default, {
                onResize: Q
            }, l.createElement("div", {
                ref: L,
                className: (0, p.clsx)(M, E, V.root, i, s, R, T, {
                    [`${M}-rtl`]: "rtl" === k
                }),
                style: {
                    height: J,
                    ...G.root,
                    ...w,
                    ...c
                },
                onLoad: Q,
                onError: Q
            }, l.createElement(U.CSSMotionList, {
                keys: ee,
                component: !1,
                motionAppear: !0,
                motionLeave: !0,
                motionName: `${M}-item-fade`
            }, (e, t) => {
                let {
                    item: n,
                    itemKey: r,
                    position: o = {},
                    itemIndex: a,
                    key: i,
                    className: s,
                    style: c
                } = e, {
                    column: d = 0
                } = o, m = {
                    "--item-width": `calc((100% + ${_}px) / ${X})`,
                    insetInlineStart: `calc(var(--item-width) * ${d})`,
                    width: `calc(var(--item-width) - ${_}px)`,
                    top: o.top,
                    position: "absolute"
                };
                return l.createElement(oS, {
                    prefixCls: M,
                    key: i,
                    item: n,
                    style: { ...c,
                        ...G.item,
                        ...m
                    },
                    className: (0, p.clsx)(V.item, s),
                    ref: (0, u.composeRef)(t, e => B(r, e)),
                    index: a,
                    itemRender: $,
                    column: d,
                    onResize: S ? Q : null
                })
            })))
        });
    e.i(556419);
    var oE = e.i(642667),
        ow = e.i(963651),
        oN = e.i(167007),
        oI = e.i(649637),
        oM = e.i(213381),
        oz = e.i(425994);
    let oR = l.createContext(null),
        oT = function(e) {
            let {
                notFoundContent: t,
                activeIndex: n,
                setActiveIndex: r,
                selectOption: o,
                onFocus: a,
                onBlur: i,
                onScroll: s
            } = l.default.useContext(oR), {
                prefixCls: c,
                options: d,
                opened: u
            } = e, p = d[n] || {}, m = (0, l.useRef)(null);
            return (0, l.useEffect)(() => {
                if (-1 === n || !m.current || !u) return;
                let e = m.current ? .findItem ? .({
                    key: p.key
                });
                e && e.scrollIntoView({
                    block: "nearest",
                    inline: "nearest"
                })
            }, [n, p.key, u]), l.default.createElement(oM.default, {
                ref: m,
                prefixCls: `${c}-menu`,
                activeKey: p.key,
                onSelect: ({
                    key: e
                }) => {
                    o(d.find(({
                        key: t
                    }) => t === e))
                },
                onFocus: a,
                onBlur: i,
                onScroll: s
            }, d.map((e, t) => {
                let {
                    key: n,
                    disabled: o,
                    className: a,
                    style: i,
                    label: s
                } = e;
                return l.default.createElement(oz.MenuItem, {
                    key: n,
                    disabled: o,
                    className: a,
                    style: i,
                    onMouseEnter: () => {
                        r(t)
                    }
                }, s)
            }), !d.length && l.default.createElement(oz.MenuItem, {
                disabled: !0
            }, t))
        },
        oH = {
            bottomRight: {
                points: ["tl", "br"],
                offset: [0, 4],
                overflow: {
                    adjustX: 1,
                    adjustY: 1
                }
            },
            bottomLeft: {
                points: ["tr", "bl"],
                offset: [0, 4],
                overflow: {
                    adjustX: 1,
                    adjustY: 1
                }
            },
            topRight: {
                points: ["bl", "tr"],
                offset: [0, -4],
                overflow: {
                    adjustX: 1,
                    adjustY: 1
                }
            },
            topLeft: {
                points: ["br", "tl"],
                offset: [0, -4],
                overflow: {
                    adjustX: 1,
                    adjustY: 1
                }
            }
        },
        oP = e => {
            let {
                prefixCls: t,
                options: n,
                children: r,
                visible: o,
                transitionName: a,
                getPopupContainer: i,
                popupClassName: s,
                popupStyle: c,
                direction: d,
                placement: u
            } = e, p = `${t}-dropdown`, [m, f] = l.useState(!1), g = l.createElement(oT, {
                prefixCls: p,
                options: n,
                opened: m
            }), h = (0, l.useMemo)(() => "rtl" === d ? "top" === u ? "topLeft" : "bottomLeft" : "top" === u ? "topRight" : "bottomRight", [d, u]);
            return l.createElement(oI.default, {
                prefixCls: p,
                popupVisible: o,
                popup: g,
                popupPlacement: h,
                popupMotion: {
                    motionName: a
                },
                builtinPlacements: oH,
                getPopupContainer: i,
                popupClassName: s,
                popupStyle: c,
                afterOpenChange: f
            }, r)
        };

    function oL(e) {
        return (e || "").toLowerCase()
    }

    function oB(e, t) {
        return !t || -1 === e.indexOf(t)
    }

    function oA(e, {
        value: t = ""
    }) {
        let n = e.toLowerCase();
        return -1 !== t.toLowerCase().indexOf(n)
    }
    let oO = l.createContext({});

    function oW() {
        return (oW = Object.assign.bind()).apply(this, arguments)
    }
    let oD = (0, l.forwardRef)((e, t) => {
            let {
                prefixCls: n,
                className: r,
                style: o,
                classNames: a,
                styles: i,
                prefix: s = "@",
                split: c = " ",
                notFoundContent: d = "Not Found",
                value: u,
                defaultValue: m,
                children: f,
                options: g,
                allowClear: h,
                hasWrapper: v,
                silent: b,
                validateSearch: y = oB,
                filterOption: $ = oA,
                onChange: x,
                onKeyDown: S,
                onKeyUp: C,
                onPressEnter: k,
                onSearch: E,
                onSelect: w,
                onFocus: N,
                onBlur: I,
                transitionName: M,
                placement: z,
                direction: R,
                getPopupContainer: T,
                popupClassName: H,
                rows: P = 1,
                visible: L,
                onPopupScroll: B,
                ...A
            } = e, O = (0, l.useMemo)(() => Array.isArray(s) ? s : [s], [s]), W = (0, l.useRef)(null), D = (0, l.useRef)(null), F = (0, l.useRef)(null), _ = () => D.current ? .resizableTextArea ? .textArea;
            l.default.useImperativeHandle(t, () => ({
                focus: () => D.current ? .focus(),
                blur: () => D.current ? .blur(),
                textarea: D.current ? .resizableTextArea ? .textArea,
                nativeElement: W.current
            }));
            let [j, X] = (0, l.useState)(!1), [q, V] = (0, l.useState)(""), [G, Y] = (0, l.useState)(""), [U, Q] = (0, l.useState)(0), [Z, J] = (0, l.useState)(0), [ee, et] = (0, l.useState)(!1), en = (0, nA.default)(e.id), [el, er] = (0, nW.default)(m || "", u), {
                open: eo
            } = (0, l.useContext)(oO);
            (0, l.useEffect)(() => {
                j && F.current && (F.current.scrollTop = _().scrollTop)
            }, [j]);
            let [ea, ei, es, ec] = l.default.useMemo(() => {
                if (eo)
                    for (let e = 0; e < O.length; e += 1) {
                        let t = O[e],
                            n = el.lastIndexOf(t);
                        if (n >= 0) return [!0, "", t, n]
                    }
                return [j, q, G, U]
            }, [eo, j, O, el, q, G, U]), ed = l.default.useCallback(e => (g && g.length > 0 ? g.map(e => ({ ...e,
                key: `${e?.key??e.value}-${en}`
            })) : (0, oN.default)(f).map(({
                props: e,
                key: t
            }) => ({ ...e,
                label: e.children,
                key: `${t||e.value}-${en}`
            }))).filter(t => !1 === $ || $(e, t)), [g, en, f, $]), eu = l.default.useMemo(() => ed(ei), [ed, ei]), ep = function() {
                let [e, t] = (0, l.useState)({
                    id: 0,
                    callback: null
                }), n = (0, l.useCallback)(e => {
                    t(({
                        id: t
                    }) => ({
                        id: t + 1,
                        callback: e
                    }))
                }, []);
                return (0, l.useEffect)(() => {
                    e.callback ? .()
                }, [e]), n
            }(), em = e => {
                X(!1), Q(0), V(""), ep(e)
            }, ef = e => {
                er(e), x ? .(e)
            }, eg = e => {
                let {
                    value: t = ""
                } = e, {
                    text: n,
                    selectionLocation: l
                } = function(e, t) {
                    let {
                        measureLocation: n,
                        prefix: l,
                        targetText: r,
                        selectionStart: o,
                        split: a
                    } = t, i = e.slice(0, n);
                    i[i.length - a.length] === a && (i = i.slice(0, i.length - a.length)), i && (i = `${i}${a}`);
                    let s = function(e, t, n) {
                        let l = e[0];
                        if (!l || l === n) return e;
                        let r = e,
                            o = t.length;
                        for (let e = 0; e < o; e += 1)
                            if (oL(r[e]) !== oL(t[e])) {
                                r = r.slice(e);
                                break
                            } else e === o - 1 && (r = r.slice(o));
                        return r
                    }(e.slice(o), r.slice(o - n - l.length), a);
                    s.slice(0, a.length) === a && (s = s.slice(a.length));
                    let c = `${i}${l}${r}${a}`;
                    return {
                        text: `${c}${s}`,
                        selectionLocation: c.length
                    }
                }(el, {
                    measureLocation: ec,
                    targetText: t,
                    prefix: es,
                    selectionStart: _() ? .selectionStart,
                    split: c
                });
                ef(n), em(() => {
                    var e;
                    e = _(), e.setSelectionRange(l, l), e.blur(), e.focus()
                }), w ? .(e, es)
            }, eh = (0, l.useRef)(), ev = e => {
                window.clearTimeout(eh.current), !ee && e && N && N(e), et(!0)
            }, eb = e => {
                eh.current = window.setTimeout(() => {
                    et(!1), em(), I ? .(e)
                }, 0)
            }, ey = l.default.useMemo(() => {
                let e = i ? .textarea ? .resize ? ? o ? .resize,
                    t = { ...i ? .textarea
                    };
                return void 0 !== e && (t.resize = e), { ...i,
                    textarea: t
                }
            }, [o, i]), e$ = l.default.createElement(l.default.Fragment, null, l.default.createElement(ow.default, oW({
                classNames: {
                    textarea: a ? .textarea
                },
                styles: ey,
                ref: D,
                value: el
            }, A, {
                rows: P,
                onChange: ({
                    target: {
                        value: e
                    }
                }) => {
                    ef(e)
                },
                onKeyDown: e => {
                    let {
                        which: t
                    } = e;
                    if (S ? .(e), ea) {
                        if (t === K.default.UP || t === K.default.DOWN) {
                            let n = eu.length;
                            J((Z + (t === K.default.UP ? -1 : 1) + n) % n), e.preventDefault()
                        } else if (t === K.default.ESC) em();
                        else if (t === K.default.ENTER) {
                            if (e.preventDefault(), b) return;
                            if (!eu.length) return void em();
                            eg(eu[Z])
                        }
                    }
                },
                onKeyUp: e => {
                    let {
                        key: t,
                        which: n
                    } = e, l = function(e) {
                        let {
                            selectionStart: t
                        } = e;
                        return e.value.slice(0, t)
                    }(e.target), {
                        location: r,
                        prefix: o
                    } = O.reduce((e, t) => {
                        let n = l.lastIndexOf(t);
                        return n > e.location ? {
                            location: n,
                            prefix: t
                        } : e
                    }, {
                        location: -1,
                        prefix: ""
                    });
                    if (C ? .(e), -1 === [K.default.ESC, K.default.UP, K.default.DOWN, K.default.ENTER].indexOf(n))
                        if (-1 !== r) {
                            let e = l.slice(r + o.length),
                                a = y(e, c),
                                i = !!ed(e).length;
                            a ? (t === o || "Shift" === t || n === K.default.ALT || "AltGraph" === t || ea || e !== ei && i) && (X(!0), V(e), Y(o), Q(r), J(0)) : ea && em(), E && a && E(e, o)
                        } else ea && em()
                },
                onPressEnter: e => {
                    !ea && k && k(e)
                },
                onFocus: ev,
                onBlur: eb
            })), ea && l.default.createElement("div", {
                ref: F,
                className: `${n}-measure`
            }, el.slice(0, ec), l.default.createElement(oR.Provider, {
                value: {
                    notFoundContent: d,
                    activeIndex: Z,
                    setActiveIndex: J,
                    selectOption: eg,
                    onFocus: () => {
                        ev()
                    },
                    onBlur: () => {
                        eb()
                    },
                    onScroll: e => {
                        B ? .(e)
                    }
                }
            }, l.default.createElement(oP, {
                prefixCls: n,
                transitionName: M,
                placement: z,
                direction: R,
                options: eu,
                visible: !0,
                getPopupContainer: T,
                popupClassName: (0, p.clsx)(H, a ? .popup),
                popupStyle: i ? .popup
            }, l.default.createElement("span", null, es))), el.slice(ec + es.length)));
            return v ? e$ : l.default.createElement("div", {
                className: (0, p.clsx)(n, r),
                style: o,
                ref: W
            }, e$)
        }),
        oF = (0, l.forwardRef)(({
            suffix: e,
            prefixCls: t = "rc-mentions",
            defaultValue: n,
            value: r,
            id: o,
            allowClear: a,
            onChange: i,
            classNames: s,
            styles: c,
            className: d,
            disabled: u,
            onClear: m,
            ...f
        }, g) => {
            let h = !!(e || a),
                v = (0, l.useRef)(null),
                b = (0, l.useRef)(null);
            (0, l.useImperativeHandle)(g, () => ({ ...b.current,
                nativeElement: v.current ? .nativeElement || b.current ? .nativeElement
            }));
            let [y, $] = (0, nW.default)(n || "", r), x = e => {
                $(e), i ? .(e)
            };
            return l.default.createElement(oE.BaseInput, {
                suffix: e,
                prefixCls: t,
                value: y,
                allowClear: a,
                handleReset: () => {
                    x("")
                },
                className: (0, p.clsx)(t, d, {
                    [`${t}-has-suffix`]: h
                }),
                classNames: s,
                disabled: u,
                ref: v,
                onClear: m
            }, l.default.createElement(oD, oW({
                className: s ? .mentions,
                styles: c,
                classNames: s,
                prefixCls: t,
                id: o,
                ref: b,
                onChange: x,
                disabled: u,
                hasWrapper: h
            }, f)))
        });
    oF.Option = () => null;
    var o_ = e.i(330683);
    let oj = (e, t = !1) => t && !(0, f.default)(e) ? [] : Array.isArray(e) ? e : [e];
    var oX = e.i(349942),
        oq = e.i(517458),
        oV = e.i(889943);
    let oG = (0, y.genStyleHooks)("Mentions", e => {
            let t = (0, F.mergeToken)(e, (0, oq.initInputToken)(e));
            return [(e => {
                let {
                    componentCls: t,
                    calc: n,
                    colorText: l,
                    antCls: r,
                    colorTextDisabled: o
                } = e;
                return {
                    [t]: [(0, b.resetComponent)(e), (0, oX.genBasicInputStyle)(e, {
                        largeStyle: {
                            padding: void 0
                        },
                        smallStyle: {
                            padding: void 0
                        }
                    }), (0, oV.genOutlinedStyle)(e), (0, oV.genFilledStyle)(e), (0, oV.genBorderlessStyle)(e), (0, oV.genUnderlinedStyle)(e), {
                        "--mentions-padding-inline": e.paddingInline,
                        "--mentions-padding-block": e.paddingBlock,
                        "--mentions-control-height": e.controlHeight,
                        display: "flex",
                        padding: 0,
                        whiteSpace: "pre-wrap",
                        "> textarea": [(0, b.resetComponent)(e), (0, oX.genPlaceholderStyle)(e.colorTextPlaceholder), {
                            background: "transparent",
                            border: "none",
                            borderRadius: "inherit",
                            outline: "none",
                            flex: "auto",
                            minWidth: 0,
                            resize: "none",
                            "&:disabled": {
                                color: o
                            }
                        }],
                        [`> textarea, ${t}-measure`]: {
                            color: l,
                            boxSizing: "border-box",
                            margin: 0,
                            minHeight: n("var(--mentions-control-height)").sub(n(e.lineWidth).mul(2).equal()).equal(),
                            paddingInline: "var(--mentions-padding-inline)",
                            paddingBlock: "var(--mentions-padding-block)",
                            overflow: "inherit",
                            overflowX: "hidden",
                            overflowY: "auto",
                            fontWeight: "inherit",
                            fontSize: "inherit",
                            fontFamily: "inherit",
                            fontStyle: "inherit",
                            fontVariant: "inherit",
                            fontSizeAdjust: "inherit",
                            fontStretch: "inherit",
                            lineHeight: "inherit",
                            direction: "inherit",
                            letterSpacing: "inherit",
                            whiteSpace: "inherit",
                            textAlign: "inherit",
                            verticalAlign: "top",
                            wordWrap: "break-word",
                            wordBreak: "inherit",
                            tabSize: "inherit"
                        },
                        [`${t}-measure`]: {
                            position: "absolute",
                            inset: 0,
                            zIndex: -1,
                            color: "transparent",
                            pointerEvents: "none",
                            "> span": {
                                display: "inline-block",
                                minHeight: "1em"
                            }
                        },
                        [`${t}-suffix`]: {
                            display: "inline-flex",
                            alignItems: "center",
                            flex: "none",
                            color: e.colorTextQuaternary,
                            fontSize: e.fontSizeIcon,
                            lineHeight: 1,
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            insetInlineEnd: "var(--mentions-padding-inline)",
                            columnGap: e.marginXS,
                            [`${t}-clear-icon`]: {
                                cursor: "pointer",
                                border: 0,
                                background: "transparent",
                                "&:hover": {
                                    color: e.colorIcon
                                },
                                "&:active": {
                                    color: e.colorText
                                },
                                "&-hidden": {
                                    visibility: "hidden"
                                }
                            },
                            [`${r}-form-item-feedback-icon`]: {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        }
                    }, {
                        "&-has-suffix": {
                            "> textarea": {
                                paddingInlineEnd: n(e.paddingXXS).mul(1.5).add(e.fontSizeIcon).add("var(--mentions-padding-inline)").equal()
                            }
                        }
                    }, {
                        "&-disabled": {
                            "> textarea": { ...(0, oV.genDisabledStyle)(e)
                            }
                        }
                    }, {
                        "&-lg": {
                            "--mentions-padding-inline": e.paddingInlineLG,
                            "--mentions-padding-block": e.paddingBlockLG,
                            "--mentions-control-height": e.controlHeightLG
                        },
                        "&-sm": {
                            "--mentions-padding-inline": e.paddingInlineSM,
                            "--mentions-padding-block": e.paddingBlockSM,
                            "--mentions-control-height": e.controlHeightSM
                        }
                    }]
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    fontSize: n,
                    paddingXXS: l,
                    colorBgElevated: r,
                    borderRadiusLG: o,
                    boxShadowSecondary: a,
                    itemPaddingVertical: i,
                    controlPaddingHorizontal: s,
                    colorText: c,
                    borderRadius: d,
                    lineHeight: u,
                    colorTextDisabled: p,
                    controlItemBgHover: m,
                    motionDurationSlow: f
                } = e;
                return {
                    [t]: {
                        "&-dropdown": { ...(0, b.resetComponent)(e),
                            position: "absolute",
                            top: -9999,
                            insetInlineStart: -9999,
                            zIndex: e.zIndexPopup,
                            boxSizing: "border-box",
                            fontSize: n,
                            fontVariant: "initial",
                            padding: l,
                            backgroundColor: r,
                            borderRadius: o,
                            outline: "none",
                            boxShadow: a,
                            "&-hidden": {
                                display: "none"
                            },
                            [`${t}-dropdown-menu`]: {
                                maxHeight: e.dropdownHeight,
                                margin: 0,
                                paddingInlineStart: 0,
                                overflow: "auto",
                                listStyle: "none",
                                outline: "none",
                                "&-item": { ...b.textEllipsis,
                                    position: "relative",
                                    display: "block",
                                    minWidth: e.controlItemWidth,
                                    padding: `${(0,v.unit)(i)} ${(0,v.unit)(s)}`,
                                    color: c,
                                    borderRadius: d,
                                    fontWeight: "normal",
                                    lineHeight: u,
                                    cursor: "pointer",
                                    transition: `background ${f} ease`,
                                    "&:hover": {
                                        backgroundColor: m
                                    },
                                    "&-disabled": {
                                        color: p,
                                        cursor: "not-allowed",
                                        "&:hover": {
                                            color: p,
                                            backgroundColor: m,
                                            cursor: "not-allowed"
                                        }
                                    },
                                    "&-selected": {
                                        color: c,
                                        fontWeight: e.fontWeightStrong,
                                        backgroundColor: m
                                    },
                                    "&-active": {
                                        backgroundColor: m
                                    }
                                }
                            }
                        }
                    }
                }
            })(t)]
        }, e => ({ ...(0, oq.initComponentToken)(e),
            dropdownHeight: 250,
            controlItemWidth: 100,
            zIndexPopup: e.zIndexPopupBase + 50,
            itemPaddingVertical: (e.controlHeight - e.fontHeight) / 2
        })),
        {
            Option: oY
        } = oF;

    function oU() {
        return !0
    }
    let oK = l.forwardRef((e, t) => {
        let {
            prefixCls: n,
            className: r,
            rootClassName: o,
            disabled: a,
            loading: i,
            filterOption: s,
            children: c,
            notFoundContent: d,
            options: f,
            status: g,
            allowClear: v = !1,
            popupClassName: b,
            style: y,
            variant: $,
            classNames: x,
            styles: S,
            size: C,
            ...k
        } = e, [E, w] = l.useState(!1), N = l.useRef(null), I = (0, u.composeRef)(t, N), M = (0, lv.default)(e => C ? ? e), {
            getPrefixCls: z,
            direction: R,
            className: T,
            style: H,
            classNames: P,
            styles: L
        } = (0, h.useComponentConfig)("mentions"), {
            renderEmpty: B
        } = l.useContext(h.ConfigContext), {
            status: A,
            hasFeedback: W,
            feedbackIcon: D
        } = l.useContext(tg.FormItemInputContext), F = (0, lf.getMergedStatus)(A, g), _ = l.useContext(lh.default), j = a ? ? _, X = z("mentions", n), q = { ...e,
            disabled: j,
            status: F,
            loading: i,
            options: f,
            variant: $
        }, [V, G] = (0, m.useMergeSemantic)([P, x], [L, S], {
            props: q
        }), Y = l.useMemo(() => void 0 !== d ? d : B ? .("Select") || l.createElement(lg.default, {
            componentName: "Select"
        }), [d, B]), U = l.useMemo(() => i ? l.createElement(oY, {
            value: "ANTD_SEARCHING",
            disabled: !0
        }, l.createElement(op.default, {
            size: "small"
        })) : c, [i, c]), K = i ? [{
            value: "ANTD_SEARCHING",
            disabled: !0,
            label: l.createElement(op.default, {
                size: "small"
            })
        }] : f, Q = i ? oU : s, Z = (0, o_.default)(v), J = (0, O.default)(X), [ee, et] = oG(X, J), [en, el] = (0, lb.default)("mentions", $), er = W && l.createElement(l.Fragment, null, D), eo = (0, p.clsx)(T, r, o, et, J, V.root, {
            [`${X}-sm`]: "small" === M,
            [`${X}-lg`]: "large" === M
        });
        return l.createElement(oF, {
            silent: i,
            prefixCls: X,
            notFoundContent: Y,
            className: eo,
            disabled: j,
            allowClear: Z,
            direction: R,
            style: { ...G.root,
                ...H,
                ...y
            },
            ...k,
            filterOption: Q,
            onFocus: (...e) => {
                k.onFocus && k.onFocus.apply(k, e), w(!0)
            },
            onBlur: (...e) => {
                k.onBlur && k.onBlur.apply(k, e), w(!1)
            },
            ref: I,
            options: K,
            suffix: er,
            styles: {
                textarea: G.textarea,
                popup: G.popup,
                suffix: G.suffix
            },
            classNames: {
                textarea: (0, p.clsx)(V.textarea),
                popup: (0, p.clsx)(V.popup, b, o, ee, et, J),
                suffix: V.suffix,
                mentions: (0, p.clsx)({
                    [`${X}-disabled`]: j,
                    [`${X}-focused`]: E,
                    [`${X}-rtl`]: "rtl" === R
                }, ee),
                variant: (0, p.clsx)({
                    [`${X}-${en}`]: el
                }, (0, lf.getStatusClassNames)(X, F)),
                affixWrapper: ee
            }
        }, U)
    });
    oK.Option = oY;
    let oQ = (0, eF.default)(oK, void 0, void 0, "mentions");
    oK._InternalPanelDoNotUseOrYouWillBeFired = oQ, oK.getMentions = (e = "", t = {}) => {
        let {
            prefix: n = "@",
            split: l = " "
        } = t, r = oj(n);
        return e.split(l).map((e = "") => {
            let t = null;
            return (r.some(n => e.slice(0, n.length) === n && (t = n, !0)), null !== t) ? {
                prefix: t,
                value: e.slice(t.length)
            } : null
        }).filter(e => !!e && !!e.value)
    };
    var oZ = e.i(60699),
        oJ = e.i(16889);
    let o0 = null,
        o1 = [],
        o2 = {};

    function o3() {
        let {
            getContainer: e,
            duration: t,
            rtl: n,
            maxCount: l,
            top: r
        } = o2, o = e ? .() || document.body;
        return {
            getContainer: () => o,
            duration: t,
            rtl: n,
            maxCount: l,
            top: r
        }
    }
    let o5 = l.default.forwardRef((e, t) => {
            let {
                messageConfig: n,
                sync: r
            } = e, {
                getPrefixCls: o
            } = (0, l.useContext)(h.ConfigContext), a = o2.prefixCls || o("message"), i = (0, l.useContext)(eB), [s, c] = eb({ ...n,
                prefixCls: a,
                ...i.message
            });
            return l.default.useImperativeHandle(t, () => {
                let e = { ...s
                };
                return Object.keys(e).forEach(t => {
                    e[t] = (...e) => (r(), s[t].apply(s, e))
                }), {
                    instance: e,
                    sync: r
                }
            }), c
        }),
        o4 = l.default.forwardRef((e, t) => {
            let [n, r] = l.default.useState(o3), o = () => {
                r(o3)
            };
            l.default.useEffect(o, []);
            let a = (0, rP.globalConfig)(),
                i = a.getRootPrefixCls(),
                s = a.getIconPrefixCls(),
                c = a.getTheme(),
                d = l.default.createElement(o5, {
                    ref: t,
                    sync: o,
                    messageConfig: n
                });
            return l.default.createElement(rP.default, {
                prefixCls: i,
                iconPrefixCls: s,
                theme: c
            }, a.holderRender ? a.holderRender(d) : d)
        }),
        o8 = () => {
            if (!o0) {
                let e = document.createDocumentFragment(),
                    t = {
                        fragment: e
                    };
                o0 = t, (() => {
                    (0, oJ.render)(l.default.createElement(o4, {
                        ref: e => {
                            let {
                                instance: n,
                                sync: l
                            } = e || {};
                            Promise.resolve().then(() => {
                                !t.instance && n && (t.instance = n, t.sync = l, o8())
                            })
                        }
                    }), e)
                })();
                return
            }
            o0.instance && (o1.forEach(e => {
                let {
                    type: t,
                    skipped: n
                } = e;
                if (!n) switch (t) {
                    case "open":
                        {
                            let t = o0.instance.open({ ...o2,
                                ...e.config
                            });t ? .then(e.resolve),
                            e.setCloseFn(t)
                        }
                        break;
                    case "destroy":
                        o0 ? .instance.destroy(e.key);
                        break;
                    default:
                        {
                            var l;
                            let n = (l = o0.instance)[t].apply(l, (0, H.default)(e.args));n ? .then(e.resolve),
                            e.setCloseFn(n)
                        }
                }
            }), o1 = [])
        },
        o6 = {
            open: function(e) {
                let t = em(t => {
                    let n, l = {
                        type: "open",
                        config: e,
                        resolve: t,
                        setCloseFn: e => {
                            n = e
                        }
                    };
                    return o1.push(l), () => {
                        n ? (() => {
                            n()
                        })() : l.skipped = !0
                    }
                });
                return o8(), t
            },
            destroy: e => {
                o1.push({
                    type: "destroy",
                    key: e
                }), o8()
            },
            config: function(e) {
                o2 = { ...o2,
                    ...e
                }, (() => {
                    o0 ? .sync ? .()
                })()
            },
            useMessage: function(e) {
                return eb(e)
            },
            _InternalPanelDoNotUseOrYouWillBeFired: e => {
                let {
                    prefixCls: t,
                    className: n,
                    style: r,
                    type: o,
                    icon: a,
                    content: i,
                    classNames: s,
                    styles: c,
                    ...d
                } = e, {
                    getPrefixCls: u,
                    className: f,
                    style: g,
                    classNames: v,
                    styles: b
                } = (0, h.useComponentConfig)("message"), y = t || u("message"), $ = (0, O.default)(y), [x, S] = ed(y, $), [C, k] = (0, m.useMergeSemantic)([v, s], [b, c], {
                    props: e
                });
                return l.createElement(Z, { ...d,
                    prefixCls: y,
                    className: (0, p.clsx)(f, C.root, n, x, `${y}-notice-pure-panel`, S, $),
                    style: { ...k.root,
                        ...g,
                        ...r
                    },
                    eventKey: "pure",
                    duration: null,
                    content: l.createElement(ep, {
                        prefixCls: y,
                        type: o,
                        icon: a,
                        classNames: C,
                        styles: k
                    }, i)
                })
            }
        };
    ["success", "info", "warning", "error", "loading"].forEach(e => {
        o6[e] = (...t) => {
            let n;
            return (0, rP.globalConfig)(), n = em(n => {
                let l, r = {
                    type: e,
                    args: t,
                    resolve: n,
                    setCloseFn: e => {
                        l = e
                    }
                };
                return o1.push(r), () => {
                    l ? (() => {
                        l()
                    })() : r.skipped = !0
                }
            }), o8(), n
        }
    });
    var o9 = e.i(687518);
    let o7 = null,
        ae = [],
        at = {};

    function an() {
        let {
            getContainer: e,
            rtl: t,
            maxCount: n,
            top: l,
            bottom: r,
            showProgress: o,
            pauseOnHover: a
        } = at, i = e ? .() || document.body;
        return {
            getContainer: () => i,
            rtl: t,
            maxCount: n,
            top: l,
            bottom: r,
            showProgress: o,
            pauseOnHover: a
        }
    }
    let al = l.default.forwardRef((e, t) => {
            let {
                notificationConfig: n,
                sync: r
            } = e, {
                getPrefixCls: o
            } = (0, l.useContext)(h.ConfigContext), a = at.prefixCls || o("notification"), i = (0, l.useContext)(eB), [s, c] = eL({ ...n,
                prefixCls: a,
                ...i.notification
            });
            return l.default.useEffect(r, []), l.default.useImperativeHandle(t, () => {
                let e = { ...s
                };
                return Object.keys(e).forEach(t => {
                    e[t] = (...e) => (r(), s[t].apply(s, e))
                }), {
                    instance: e,
                    sync: r
                }
            }), c
        }),
        ar = l.default.forwardRef((e, t) => {
            let [n, r] = l.default.useState(an), o = () => {
                r(an)
            };
            l.default.useEffect(o, []);
            let a = (0, rP.globalConfig)(),
                i = a.getRootPrefixCls(),
                s = a.getIconPrefixCls(),
                c = a.getTheme(),
                d = l.default.createElement(al, {
                    ref: t,
                    sync: o,
                    notificationConfig: n
                });
            return l.default.createElement(rP.default, {
                prefixCls: i,
                iconPrefixCls: s,
                theme: c
            }, a.holderRender ? a.holderRender(d) : d)
        }),
        ao = () => {
            if (!o7) {
                let e = document.createDocumentFragment(),
                    t = {
                        fragment: e
                    };
                o7 = t, (() => {
                    (0, oJ.render)(l.default.createElement(ar, {
                        ref: e => {
                            let {
                                instance: n,
                                sync: l
                            } = e || {};
                            Promise.resolve().then(() => {
                                !t.instance && n && (t.instance = n, t.sync = l, ao())
                            })
                        }
                    }), e)
                })();
                return
            }
            o7.instance && (ae.forEach(e => {
                switch (e.type) {
                    case "open":
                        o7.instance.open({ ...at,
                            ...e.config
                        });
                        break;
                    case "destroy":
                        o7 ? .instance ? .destroy(e.key)
                }
            }), ae = [])
        };

    function aa(e) {
        (0, rP.globalConfig)(), ae.push({
            type: "open",
            config: e
        }), ao()
    }
    let ai = {
        open: aa,
        destroy: e => {
            ae.push({
                type: "destroy",
                key: e
            }), ao()
        },
        config: function(e) {
            at = { ...at,
                ...e
            }, (() => {
                o7 ? .sync ? .()
            })()
        },
        useNotification: function(e) {
            return eL(e)
        },
        _InternalPanelDoNotUseOrYouWillBeFired: e => {
            let {
                prefixCls: t,
                icon: n,
                type: r,
                message: o,
                title: i,
                description: s,
                btn: c,
                actions: d,
                closeIcon: u,
                className: f,
                style: g,
                styles: v,
                classNames: b,
                closable: y,
                ...$
            } = e, {
                getPrefixCls: x,
                className: S,
                style: C,
                classNames: k,
                styles: E
            } = (0, h.useComponentConfig)("notification"), [w, N] = (0, m.useMergeSemantic)([k, b], [E, v], {
                props: e
            }), {
                notification: I
            } = l.useContext(h.ConfigContext), M = t || x("notification"), z = `${M}-notice`, R = (0, O.default)(M), [T, H] = eN(M, R), [P, L, , B] = (0, e$.useClosable)((0, e$.pickClosable)(e), (0, e$.pickClosable)(I), {
                closable: !0,
                closeIcon: l.createElement(a.default, {
                    className: `${M}-close-icon`
                }),
                closeIconRender: e => eM(M, e)
            }), A = !!P && {
                onClose: y && "object" == typeof y ? y ? .onClose : void 0,
                closeIcon: L,
                ...B
            };
            return l.createElement("div", {
                className: (0, p.clsx)(`${z}-pure-panel`, T, f, H, R, w.root),
                style: N.root
            }, l.createElement(eI, {
                prefixCls: M
            }), l.createElement(Z, {
                style: { ...C,
                    ...g
                },
                ...$,
                prefixCls: M,
                eventKey: "pure",
                duration: null,
                closable: A,
                className: (0, p.clsx)(f, S),
                content: l.createElement(eR, {
                    classNames: w,
                    styles: N,
                    prefixCls: z,
                    icon: n,
                    type: r,
                    title: i ? ? o,
                    description: s,
                    actions: d ? ? c
                })
            }))
        }
    };
    ["success", "info", "warning", "error"].forEach(e => {
        ai[e] = t => aa({ ...t,
            type: e
        })
    });
    var as = e.i(496158),
        ac = e.i(285781),
        ad = e.i(836938),
        au = e.i(62405),
        ap = e.i(87414),
        am = e.i(310730);
    let af = (0, y.genStyleHooks)("Popconfirm", e => (e => {
            let {
                componentCls: t,
                iconCls: n,
                antCls: l,
                zIndexPopup: r,
                colorText: o,
                colorWarning: a,
                marginXXS: i,
                marginXS: s,
                fontSize: c,
                fontWeightStrong: d,
                colorTextHeading: u
            } = e;
            return {
                [t]: {
                    zIndex: r,
                    [`&${l}-popover`]: {
                        fontSize: c
                    },
                    [`${t}-message`]: {
                        marginBottom: s,
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "start",
                        [`> ${t}-message-icon ${n}`]: {
                            color: a,
                            fontSize: c,
                            lineHeight: 1,
                            marginInlineEnd: s
                        },
                        [`${t}-title`]: {
                            fontWeight: d,
                            color: u,
                            "&:only-child": {
                                fontWeight: "normal"
                            }
                        },
                        [`${t}-description`]: {
                            marginTop: i,
                            color: o
                        }
                    },
                    [`${t}-buttons`]: {
                        textAlign: "end",
                        whiteSpace: "nowrap",
                        button: {
                            marginInlineStart: s
                        }
                    }
                }
            }
        })(e), e => {
            let {
                zIndexPopupBase: t
            } = e;
            return {
                zIndexPopup: t + 60
            }
        }, {
            resetStyle: !1
        }),
        ag = e => {
            let {
                prefixCls: t,
                okButtonProps: n,
                cancelButtonProps: r,
                title: o,
                description: a,
                cancelText: s,
                okText: c,
                okType: d = "primary",
                icon: u = l.createElement(i.default, null),
                showCancel: m = !0,
                close: f,
                onConfirm: g,
                onCancel: v,
                onPopupClick: b,
                classNames: y,
                styles: $
            } = e, {
                getPrefixCls: x
            } = l.useContext(h.ConfigContext), [S] = (0, tf.useLocale)("Popconfirm", ap.default.Popconfirm), C = (0, ad.getRenderPropValue)(o), k = (0, ad.getRenderPropValue)(a);
            return l.createElement("div", {
                className: `${t}-inner-content`,
                onClick: b
            }, l.createElement("div", {
                className: `${t}-message`
            }, u && l.createElement("span", {
                className: `${t}-message-icon`
            }, u), l.createElement("div", {
                className: `${t}-message-text`
            }, C && l.createElement("div", {
                className: (0, p.clsx)(`${t}-title`, y ? .title),
                style: $ ? .title
            }, C), k && l.createElement("div", {
                className: (0, p.clsx)(`${t}-description`, y ? .content),
                style: $ ? .content
            }, k))), l.createElement("div", {
                className: `${t}-buttons`
            }, m && l.createElement(r4.default, {
                onClick: v,
                size: "small",
                ...r
            }, s || S ? .cancelText), l.createElement(ac.default, {
                buttonProps: {
                    size: "small",
                    ...(0, au.convertLegacyProps)(d),
                    ...n
                },
                actionFn: g,
                close: f,
                prefixCls: x("btn"),
                quitOnNullishReturnValue: !0,
                emitEvent: !0
            }, c || S ? .okText)))
        },
        ah = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                placement: r = "top",
                trigger: o,
                okType: a = "primary",
                icon: s = l.createElement(i.default, null),
                children: c,
                overlayClassName: d,
                onOpenChange: u,
                overlayStyle: f,
                styles: g,
                arrow: v,
                classNames: b,
                ...y
            } = e, {
                getPrefixCls: $,
                className: x,
                style: S,
                classNames: C,
                styles: k,
                arrow: E,
                trigger: w
            } = (0, h.useComponentConfig)("popconfirm"), [N, I] = (0, tm.useControlledState)(e.defaultOpen ? ? !1, e.open), M = (0, as.default)(v, E), z = o || w || "click", R = (e, t) => {
                I(e), u ? .(e, t)
            }, T = $("popconfirm", n), H = { ...e,
                placement: r,
                trigger: z,
                okType: a,
                overlayStyle: f,
                styles: g,
                classNames: b
            }, [P, L] = (0, m.useMergeSemantic)([C, b], [k, g], {
                props: H
            }), B = (0, p.clsx)(T, x, d, P.root);
            return af(T), l.createElement(lq.default, {
                arrow: M,
                ...(0, eD.omit)(y, ["title"]),
                trigger: z,
                placement: r,
                onOpenChange: (t, n) => {
                    let {
                        disabled: l = !1
                    } = e;
                    l || R(t, n)
                },
                open: N,
                ref: t,
                classNames: {
                    root: B,
                    container: P.container,
                    arrow: P.arrow
                },
                styles: {
                    root: { ...S,
                        ...L.root,
                        ...f
                    },
                    container: L.container,
                    arrow: L.arrow
                },
                content: l.createElement(ag, {
                    okType: a,
                    icon: s,
                    ...e,
                    prefixCls: T,
                    close: e => {
                        R(!1, e)
                    },
                    onConfirm: t => e.onConfirm ? .call(void 0, t),
                    onCancel: t => {
                        R(!1, t), e.onCancel ? .call(void 0, t)
                    },
                    classNames: P,
                    styles: L
                }),
                "data-popover-inject": !0
            }, c)
        });
    ah._InternalPanelDoNotUseOrYouWillBeFired = e => {
        let {
            prefixCls: t,
            placement: n,
            className: r,
            style: o,
            ...a
        } = e, {
            getPrefixCls: i
        } = l.useContext(h.ConfigContext), s = i("popconfirm", t);
        return af(s), l.createElement(am.default, {
            placement: n,
            className: (0, p.clsx)(s, r),
            style: o,
            content: l.createElement(ag, {
                prefixCls: s,
                ...a
            })
        })
    };
    var av = e.i(309821),
        ab = e.i(713882);

    function ay(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = (0, ab.default)(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var l = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function() {
                        return l >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[l++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            i = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                i = !0, o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (i) throw o
                }
            }
        }
    }
    var a$ = e.i(278409),
        ax = e.i(233848),
        aS = e.i(211577);

    function aC(e, t, n) {
        if (t < 0 || t > 31 || e >>> t != 0) throw RangeError("Value out of range");
        for (var l = t - 1; l >= 0; l--) n.push(e >>> l & 1)
    }

    function ak(e, t) {
        return (e >>> t & 1) != 0
    }

    function aE(e) {
        if (!e) throw Error("Assertion error")
    }
    var aw = function() {
        function e(t, n) {
            (0, a$.default)(this, e), (0, aS.default)(this, "modeBits", void 0), (0, aS.default)(this, "numBitsCharCount", void 0), this.modeBits = t, this.numBitsCharCount = n
        }
        return (0, ax.default)(e, [{
            key: "numCharCountBits",
            value: function(e) {
                return this.numBitsCharCount[Math.floor((e + 7) / 17)]
            }
        }]), e
    }();
    (0, aS.default)(aw, "NUMERIC", new aw(1, [10, 12, 14])), (0, aS.default)(aw, "ALPHANUMERIC", new aw(2, [9, 11, 13])), (0, aS.default)(aw, "BYTE", new aw(4, [8, 16, 16])), (0, aS.default)(aw, "KANJI", new aw(8, [8, 10, 12])), (0, aS.default)(aw, "ECI", new aw(7, [0, 0, 0]));
    var aN = (0, ax.default)(function e(t, n) {
        (0, a$.default)(this, e), (0, aS.default)(this, "ordinal", void 0), (0, aS.default)(this, "formatBits", void 0), this.ordinal = t, this.formatBits = n
    });
    (0, aS.default)(aN, "LOW", new aN(0, 1)), (0, aS.default)(aN, "MEDIUM", new aN(1, 0)), (0, aS.default)(aN, "QUARTILE", new aN(2, 3)), (0, aS.default)(aN, "HIGH", new aN(3, 2));
    var aI = function() {
        function e(t, n, l) {
            if ((0, a$.default)(this, e), (0, aS.default)(this, "mode", void 0), (0, aS.default)(this, "numChars", void 0), (0, aS.default)(this, "bitData", void 0), this.mode = t, this.numChars = n, this.bitData = l, n < 0) throw RangeError("Invalid argument");
            this.bitData = l.slice()
        }
        return (0, ax.default)(e, [{
            key: "getData",
            value: function() {
                return this.bitData.slice()
            }
        }], [{
            key: "makeBytes",
            value: function(t) {
                var n, l = [],
                    r = ay(t);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var o = n.value;
                        aC(o, 8, l)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return new e(aw.BYTE, t.length, l)
            }
        }, {
            key: "makeNumeric",
            value: function(t) {
                if (!e.isNumeric(t)) throw RangeError("String contains non-numeric characters");
                for (var n = [], l = 0; l < t.length;) {
                    var r = Math.min(t.length - l, 3);
                    aC(parseInt(t.substring(l, l + r), 10), 3 * r + 1, n), l += r
                }
                return new e(aw.NUMERIC, t.length, n)
            }
        }, {
            key: "makeAlphanumeric",
            value: function(t) {
                if (!e.isAlphanumeric(t)) throw RangeError("String contains unencodable characters in alphanumeric mode");
                var n, l = [];
                for (n = 0; n + 2 <= t.length; n += 2) {
                    var r = 45 * e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));
                    aC(r += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n + 1)), 11, l)
                }
                return n < t.length && aC(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)), 6, l), new e(aw.ALPHANUMERIC, t.length, l)
            }
        }, {
            key: "makeSegments",
            value: function(t) {
                return "" == t ? [] : e.isNumeric(t) ? [e.makeNumeric(t)] : e.isAlphanumeric(t) ? [e.makeAlphanumeric(t)] : [e.makeBytes(e.toUtf8ByteArray(t))]
            }
        }, {
            key: "makeEci",
            value: function(t) {
                var n = [];
                if (t < 0) throw RangeError("ECI assignment value out of range");
                if (t < 128) aC(t, 8, n);
                else if (t < 16384) aC(2, 2, n), aC(t, 14, n);
                else if (t < 1e6) aC(6, 3, n), aC(t, 21, n);
                else throw RangeError("ECI assignment value out of range");
                return new e(aw.ECI, 0, n)
            }
        }, {
            key: "isNumeric",
            value: function(t) {
                return e.NUMERIC_REGEX.test(t)
            }
        }, {
            key: "isAlphanumeric",
            value: function(t) {
                return e.ALPHANUMERIC_REGEX.test(t)
            }
        }, {
            key: "getTotalBits",
            value: function(e, t) {
                var n, l = 0,
                    r = ay(e);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var o = n.value,
                            a = o.mode.numCharCountBits(t);
                        if (o.numChars >= 1 << a) return 1 / 0;
                        l += 4 + a + o.bitData.length
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return l
            }
        }, {
            key: "toUtf8ByteArray",
            value: function(e) {
                for (var t = encodeURI(e), n = [], l = 0; l < t.length; l++) "%" != t.charAt(l) ? n.push(t.charCodeAt(l)) : (n.push(parseInt(t.substring(l + 1, l + 3), 16)), l += 2);
                return n
            }
        }]), e
    }();
    (0, aS.default)(aI, "NUMERIC_REGEX", /^[0-9]*$/), (0, aS.default)(aI, "ALPHANUMERIC_REGEX", /^[A-Z0-9 $%*+.\/:-]*$/), (0, aS.default)(aI, "ALPHANUMERIC_CHARSET", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
    var aM = function() {
        function e(t, n, l, r) {
            (0, a$.default)(this, e), (0, aS.default)(this, "size", void 0), (0, aS.default)(this, "mask", void 0), (0, aS.default)(this, "modules", []), (0, aS.default)(this, "isFunction", []), (0, aS.default)(this, "version", void 0), (0, aS.default)(this, "errorCorrectionLevel", void 0);
            var o = r;
            if (this.version = t, this.errorCorrectionLevel = n, t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version value out of range");
            if (o < -1 || o > 7) throw RangeError("Mask value out of range");
            this.size = 4 * t + 17;
            for (var a = [], i = 0; i < this.size; i++) a.push(!1);
            for (var s = 0; s < this.size; s++) this.modules.push(a.slice()), this.isFunction.push(a.slice());
            this.drawFunctionPatterns();
            var c = this.addEccAndInterleave(l);
            if (this.drawCodewords(c), -1 == o)
                for (var d = 1e9, u = 0; u < 8; u++) {
                    this.applyMask(u), this.drawFormatBits(u);
                    var p = this.getPenaltyScore();
                    p < d && (o = u, d = p), this.applyMask(u)
                }
            aE(0 <= o && o <= 7), this.mask = o, this.applyMask(o), this.drawFormatBits(o), this.isFunction = []
        }
        return (0, ax.default)(e, [{
            key: "getModule",
            value: function(e, t) {
                return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
            }
        }, {
            key: "getModules",
            value: function() {
                return this.modules
            }
        }, {
            key: "drawFunctionPatterns",
            value: function() {
                for (var e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0);
                this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                for (var t = this.getAlignmentPatternPositions(), n = t.length, l = 0; l < n; l++)
                    for (var r = 0; r < n; r++)(0 != l || 0 != r) && (0 != l || r != n - 1) && (l != n - 1 || 0 != r) && this.drawAlignmentPattern(t[l], t[r]);
                this.drawFormatBits(0), this.drawVersion()
            }
        }, {
            key: "drawFormatBits",
            value: function(e) {
                for (var t = this.errorCorrectionLevel.formatBits << 3 | e, n = t, l = 0; l < 10; l++) n = n << 1 ^ (n >>> 9) * 1335;
                var r = (t << 10 | n) ^ 21522;
                aE(r >>> 15 == 0);
                for (var o = 0; o <= 5; o++) this.setFunctionModule(8, o, ak(r, o));
                this.setFunctionModule(8, 7, ak(r, 6)), this.setFunctionModule(8, 8, ak(r, 7)), this.setFunctionModule(7, 8, ak(r, 8));
                for (var a = 9; a < 15; a++) this.setFunctionModule(14 - a, 8, ak(r, a));
                for (var i = 0; i < 8; i++) this.setFunctionModule(this.size - 1 - i, 8, ak(r, i));
                for (var s = 8; s < 15; s++) this.setFunctionModule(8, this.size - 15 + s, ak(r, s));
                this.setFunctionModule(8, this.size - 8, !0)
            }
        }, {
            key: "drawVersion",
            value: function() {
                if (!(this.version < 7)) {
                    for (var e = this.version, t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
                    var n = this.version << 12 | e;
                    aE(n >>> 18 == 0);
                    for (var l = 0; l < 18; l++) {
                        var r = ak(n, l),
                            o = this.size - 11 + l % 3,
                            a = Math.floor(l / 3);
                        this.setFunctionModule(o, a, r), this.setFunctionModule(a, o, r)
                    }
                }
            }
        }, {
            key: "drawFinderPattern",
            value: function(e, t) {
                for (var n = -4; n <= 4; n++)
                    for (var l = -4; l <= 4; l++) {
                        var r = Math.max(Math.abs(l), Math.abs(n)),
                            o = e + l,
                            a = t + n;
                        0 <= o && o < this.size && 0 <= a && a < this.size && this.setFunctionModule(o, a, 2 != r && 4 != r)
                    }
            }
        }, {
            key: "drawAlignmentPattern",
            value: function(e, t) {
                for (var n = -2; n <= 2; n++)
                    for (var l = -2; l <= 2; l++) this.setFunctionModule(e + l, t + n, 1 != Math.max(Math.abs(l), Math.abs(n)))
            }
        }, {
            key: "setFunctionModule",
            value: function(e, t, n) {
                this.modules[t][e] = n, this.isFunction[t][e] = !0
            }
        }, {
            key: "addEccAndInterleave",
            value: function(t) {
                var n = this.version,
                    l = this.errorCorrectionLevel;
                if (t.length != e.getNumDataCodewords(n, l)) throw RangeError("Invalid argument");
                for (var r = e.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][n], o = e.ECC_CODEWORDS_PER_BLOCK[l.ordinal][n], a = Math.floor(e.getNumRawDataModules(n) / 8), i = r - a % r, s = Math.floor(a / r), c = [], d = e.reedSolomonComputeDivisor(o), u = 0, p = 0; u < r; u++) {
                    var m = t.slice(p, p + s - o + (u < i ? 0 : 1));
                    p += m.length;
                    var f = e.reedSolomonComputeRemainder(m, d);
                    u < i && m.push(0), c.push(m.concat(f))
                }
                for (var g = [], h = function(e) {
                        c.forEach(function(t, n) {
                            (e != s - o || n >= i) && g.push(t[e])
                        })
                    }, v = 0; v < c[0].length; v++) h(v);
                return aE(g.length == a), g
            }
        }, {
            key: "drawCodewords",
            value: function(t) {
                if (t.length != Math.floor(e.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
                for (var n = 0, l = this.size - 1; l >= 1; l -= 2) {
                    6 == l && (l = 5);
                    for (var r = 0; r < this.size; r++)
                        for (var o = 0; o < 2; o++) {
                            var a = l - o,
                                i = (l + 1 & 2) == 0 ? this.size - 1 - r : r;
                            !this.isFunction[i][a] && n < 8 * t.length && (this.modules[i][a] = ak(t[n >>> 3], 7 - (7 & n)), n++)
                        }
                }
                aE(n == 8 * t.length)
            }
        }, {
            key: "applyMask",
            value: function(e) {
                if (e < 0 || e > 7) throw RangeError("Mask value out of range");
                for (var t = 0; t < this.size; t++)
                    for (var n = 0; n < this.size; n++) {
                        var l = void 0;
                        switch (e) {
                            case 0:
                                l = (n + t) % 2 == 0;
                                break;
                            case 1:
                                l = t % 2 == 0;
                                break;
                            case 2:
                                l = n % 3 == 0;
                                break;
                            case 3:
                                l = (n + t) % 3 == 0;
                                break;
                            case 4:
                                l = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
                                break;
                            case 5:
                                l = n * t % 2 + n * t % 3 == 0;
                                break;
                            case 6:
                                l = (n * t % 2 + n * t % 3) % 2 == 0;
                                break;
                            case 7:
                                l = ((n + t) % 2 + n * t % 3) % 2 == 0;
                                break;
                            default:
                                throw Error("Unreachable")
                        }!this.isFunction[t][n] && l && (this.modules[t][n] = !this.modules[t][n])
                    }
            }
        }, {
            key: "getPenaltyScore",
            value: function() {
                for (var t = 0, n = 0; n < this.size; n++) {
                    for (var l = !1, r = 0, o = [0, 0, 0, 0, 0, 0, 0], a = 0; a < this.size; a++) this.modules[n][a] == l ? 5 == ++r ? t += e.PENALTY_N1 : r > 5 && t++ : (this.finderPenaltyAddHistory(r, o), l || (t += this.finderPenaltyCountPatterns(o) * e.PENALTY_N3), l = this.modules[n][a], r = 1);
                    t += this.finderPenaltyTerminateAndCount(l, r, o) * e.PENALTY_N3
                }
                for (var i = 0; i < this.size; i++) {
                    for (var s = !1, c = 0, d = [0, 0, 0, 0, 0, 0, 0], u = 0; u < this.size; u++) this.modules[u][i] == s ? 5 == ++c ? t += e.PENALTY_N1 : c > 5 && t++ : (this.finderPenaltyAddHistory(c, d), s || (t += this.finderPenaltyCountPatterns(d) * e.PENALTY_N3), s = this.modules[u][i], c = 1);
                    t += this.finderPenaltyTerminateAndCount(s, c, d) * e.PENALTY_N3
                }
                for (var p = 0; p < this.size - 1; p++)
                    for (var m = 0; m < this.size - 1; m++) {
                        var f = this.modules[p][m];
                        f == this.modules[p][m + 1] && f == this.modules[p + 1][m] && f == this.modules[p + 1][m + 1] && (t += e.PENALTY_N2)
                    }
                var g, h = 0,
                    v = ay(this.modules);
                try {
                    for (v.s(); !(g = v.n()).done;) h = g.value.reduce(function(e, t) {
                        return e + +!!t
                    }, h)
                } catch (e) {
                    v.e(e)
                } finally {
                    v.f()
                }
                var b = this.size * this.size,
                    y = Math.ceil(Math.abs(20 * h - 10 * b) / b) - 1;
                return aE(0 <= y && y <= 9), aE(0 <= (t += y * e.PENALTY_N4) && t <= 2568888), t
            }
        }, {
            key: "getAlignmentPatternPositions",
            value: function() {
                if (1 == this.version) return [];
                for (var e = Math.floor(this.version / 7) + 2, t = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2)), n = [6], l = this.size - 7; n.length < e; l -= t) n.splice(1, 0, l);
                return n
            }
        }, {
            key: "finderPenaltyCountPatterns",
            value: function(e) {
                var t = e[1];
                aE(t <= 3 * this.size);
                var n = t > 0 && e[2] == t && e[3] == 3 * t && e[4] == t && e[5] == t;
                return (n && e[0] >= 4 * t && e[6] >= t ? 1 : 0) + (n && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
            }
        }, {
            key: "finderPenaltyTerminateAndCount",
            value: function(e, t, n) {
                var l = t;
                return e && (this.finderPenaltyAddHistory(l, n), l = 0), l += this.size, this.finderPenaltyAddHistory(l, n), this.finderPenaltyCountPatterns(n)
            }
        }, {
            key: "finderPenaltyAddHistory",
            value: function(e, t) {
                var n = e;
                0 == t[0] && (n += this.size), t.pop(), t.unshift(n)
            }
        }], [{
            key: "encodeText",
            value: function(t, n) {
                var l = aI.makeSegments(t);
                return e.encodeSegments(l, n)
            }
        }, {
            key: "encodeBinary",
            value: function(t, n) {
                var l = aI.makeBytes(t);
                return e.encodeSegments([l], n)
            }
        }, {
            key: "encodeSegments",
            value: function(t, n) {
                var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 40,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
                    a = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                if (!(e.MIN_VERSION <= l && l <= r && r <= e.MAX_VERSION) || o < -1 || o > 7) throw RangeError("Invalid value");
                for (m = l;; m++) {
                    var i = 8 * e.getNumDataCodewords(m, n),
                        s = aI.getTotalBits(t, m);
                    if (s <= i) {
                        f = s;
                        break
                    }
                    if (m >= r) throw RangeError("Data too long")
                }
                for (var c = n, d = 0, u = [aN.MEDIUM, aN.QUARTILE, aN.HIGH]; d < u.length; d++) {
                    var p = u[d];
                    a && f <= 8 * e.getNumDataCodewords(m, p) && (c = p)
                }
                var m, f, g, h = [],
                    v = ay(t);
                try {
                    for (v.s(); !(g = v.n()).done;) {
                        var b = g.value;
                        aC(b.mode.modeBits, 4, h), aC(b.numChars, b.mode.numCharCountBits(m), h);
                        var y, $ = ay(b.getData());
                        try {
                            for ($.s(); !(y = $.n()).done;) {
                                var x = y.value;
                                h.push(x)
                            }
                        } catch (e) {
                            $.e(e)
                        } finally {
                            $.f()
                        }
                    }
                } catch (e) {
                    v.e(e)
                } finally {
                    v.f()
                }
                aE(h.length == f);
                var S = 8 * e.getNumDataCodewords(m, c);
                aE(h.length <= S), aC(0, Math.min(4, S - h.length), h), aC(0, (8 - h.length % 8) % 8, h), aE(h.length % 8 == 0);
                for (var C = 236; h.length < S; C ^= 253) aC(C, 8, h);
                for (var k = []; 8 * k.length < h.length;) k.push(0);
                return h.forEach(function(e, t) {
                    k[t >>> 3] |= e << 7 - (7 & t)
                }), new e(m, c, k, o)
            }
        }, {
            key: "getNumRawDataModules",
            value: function(t) {
                if (t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version number out of range");
                var n = (16 * t + 128) * t + 64;
                if (t >= 2) {
                    var l = Math.floor(t / 7) + 2;
                    n -= (25 * l - 10) * l - 55, t >= 7 && (n -= 36)
                }
                return aE(208 <= n && n <= 29648), n
            }
        }, {
            key: "getNumDataCodewords",
            value: function(t, n) {
                return Math.floor(e.getNumRawDataModules(t) / 8) - e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t] * e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]
            }
        }, {
            key: "reedSolomonComputeDivisor",
            value: function(t) {
                if (t < 1 || t > 255) throw RangeError("Degree out of range");
                for (var n = [], l = 0; l < t - 1; l++) n.push(0);
                n.push(1);
                for (var r = 1, o = 0; o < t; o++) {
                    for (var a = 0; a < n.length; a++) n[a] = e.reedSolomonMultiply(n[a], r), a + 1 < n.length && (n[a] ^= n[a + 1]);
                    r = e.reedSolomonMultiply(r, 2)
                }
                return n
            }
        }, {
            key: "reedSolomonComputeRemainder",
            value: function(t, n) {
                var l, r = n.map(function() {
                        return 0
                    }),
                    o = ay(t);
                try {
                    for (o.s(); !(l = o.n()).done;) ! function() {
                        var t = l.value ^ r.shift();
                        r.push(0), n.forEach(function(n, l) {
                            r[l] ^= e.reedSolomonMultiply(n, t)
                        })
                    }()
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return r
            }
        }, {
            key: "reedSolomonMultiply",
            value: function(e, t) {
                if (e >>> 8 != 0 || t >>> 8 != 0) throw RangeError("Byte out of range");
                for (var n = 0, l = 7; l >= 0; l--) n = n << 1 ^ (n >>> 7) * 285 ^ (t >>> l & 1) * e;
                return aE(n >>> 8 == 0), n
            }
        }]), e
    }();
    (0, aS.default)(aM, "MIN_VERSION", 1), (0, aS.default)(aM, "MAX_VERSION", 40), (0, aS.default)(aM, "PENALTY_N1", 3), (0, aS.default)(aM, "PENALTY_N2", 3), (0, aS.default)(aM, "PENALTY_N3", 40), (0, aS.default)(aM, "PENALTY_N4", 10), (0, aS.default)(aM, "ECC_CODEWORDS_PER_BLOCK", [
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    ]), (0, aS.default)(aM, "NUM_ERROR_CORRECTION_BLOCKS", [
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    ]);
    var az = {
            L: aN.LOW,
            M: aN.MEDIUM,
            Q: aN.QUARTILE,
            H: aN.HIGH
        },
        aR = "#FFFFFF",
        aT = "#000000",
        aH = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = [];
            return e.forEach(function(e, l) {
                var r = null;
                e.forEach(function(o, a) {
                    if (!o && null !== r) {
                        n.push("M".concat(r + t, " ").concat(l + t, "h").concat(a - r, "v1H").concat(r + t, "z")), r = null;
                        return
                    }
                    if (a === e.length - 1) {
                        if (!o) return;
                        null === r ? n.push("M".concat(a + t, ",").concat(l + t, " h1v1H").concat(a + t, "z")) : n.push("M".concat(r + t, ",").concat(l + t, " h").concat(a + 1 - r, "v1H").concat(r + t, "z"));
                        return
                    }
                    o && null === r && (r = a)
                })
            }), n.join("")
        },
        aP = function(e, t) {
            return e.slice().map(function(e, n) {
                return n < t.y || n >= t.y + t.h ? e : e.map(function(e, n) {
                    return (n < t.x || n >= t.x + t.w) && e
                })
            })
        },
        aL = function(e, t, n, l) {
            if (null == l) return null;
            var r = e.length + 2 * n,
                o = Math.floor(.1 * t),
                a = r / t,
                i = (l.width || o) * a,
                s = (l.height || o) * a,
                c = null == l.x ? e.length / 2 - i / 2 : l.x * a,
                d = null == l.y ? e.length / 2 - s / 2 : l.y * a,
                u = null == l.opacity ? 1 : l.opacity,
                p = null;
            if (l.excavate) {
                var m = Math.floor(c),
                    f = Math.floor(d),
                    g = Math.ceil(i + c - m),
                    h = Math.ceil(s + d - f);
                p = {
                    x: m,
                    y: f,
                    w: g,
                    h: h
                }
            }
            return {
                x: c,
                y: d,
                h: s,
                w: i,
                excavation: p,
                opacity: u,
                crossOrigin: l.crossOrigin
            }
        },
        aB = function() {
            try {
                new Path2D().addPath(new Path2D)
            } catch (e) {
                return !1
            }
            return !0
        }(),
        aA = e.i(209428),
        aO = e.i(392221),
        aW = e.i(703923),
        aD = e.i(8211),
        aF = function(e) {
            var t = e.value,
                n = e.level,
                r = e.minVersion,
                o = e.includeMargin,
                a = e.marginSize,
                i = e.imageSettings,
                s = e.size,
                c = e.boostLevel,
                d = l.default.useMemo(function() {
                    var e = (Array.isArray(t) ? t : [t]).reduce(function(e, t) {
                        return e.push.apply(e, (0, aD.default)(aI.makeSegments(t))), e
                    }, []);
                    return aM.encodeSegments(e, az[n], r, void 0, void 0, c)
                }, [t, n, r, c]);
            return l.default.useMemo(function() {
                var e = d.getModules(),
                    t = null != a ? Math.max(Math.floor(a), 0) : 4 * !!o,
                    n = e.length + 2 * t,
                    l = aL(e, s, t, i);
                return {
                    cells: e,
                    margin: t,
                    numCells: n,
                    calculatedImageSettings: l,
                    qrcode: d
                }
            }, [d, s, i, o, a])
        },
        a_ = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "marginSize", "style", "imageSettings", "boostLevel"],
        aj = l.default.forwardRef(function(e, t) {
            var n = e.value,
                r = e.size,
                o = void 0 === r ? 128 : r,
                a = e.level,
                i = e.bgColor,
                s = void 0 === i ? aR : i,
                c = e.fgColor,
                d = void 0 === c ? aT : c,
                u = e.includeMargin,
                p = e.minVersion,
                m = e.marginSize,
                f = e.style,
                g = e.imageSettings,
                h = e.boostLevel,
                v = (0, aW.default)(e, a_),
                b = null == g ? void 0 : g.src,
                y = l.default.useRef(null),
                $ = l.default.useRef(null),
                x = l.default.useCallback(function(e) {
                    y.current = e, "function" == typeof t ? t(e) : t && (t.current = e)
                }, [t]),
                S = l.default.useState(!1),
                C = (0, aO.default)(S, 2)[1],
                k = aF({
                    value: n,
                    level: void 0 === a ? "L" : a,
                    minVersion: void 0 === p ? 1 : p,
                    includeMargin: void 0 !== u && u,
                    marginSize: m,
                    imageSettings: g,
                    size: o,
                    boostLevel: h
                }),
                E = k.margin,
                w = k.cells,
                N = k.numCells,
                I = k.calculatedImageSettings;
            l.default.useEffect(function() {
                if (y.current) {
                    var e = y.current,
                        t = e.getContext("2d");
                    if (t) {
                        var n = w,
                            l = $.current,
                            r = null != I && null !== l && l.complete && 0 !== l.naturalHeight && 0 !== l.naturalWidth;
                        r && null != I.excavation && (n = aP(w, I.excavation));
                        var a = window.devicePixelRatio || 1;
                        e.height = e.width = o * a;
                        var i = o / N * a;
                        t.scale(i, i), t.fillStyle = s, t.fillRect(0, 0, N, N), t.fillStyle = d, aB ? t.fill(new Path2D(aH(n, E))) : w.forEach(function(e, n) {
                            e.forEach(function(e, l) {
                                e && t.fillRect(l + E, n + E, 1, 1)
                            })
                        }), I && (t.globalAlpha = I.opacity), r && t.drawImage(l, I.x + E, I.y + E, I.w, I.h)
                    }
                }
            }), l.default.useEffect(function() {
                C(!1)
            }, [b]);
            var M = (0, aA.default)({
                    height: o,
                    width: o
                }, f),
                z = null;
            return null != b && (z = l.default.createElement("img", {
                alt: "QR-Code",
                src: b,
                key: b,
                style: {
                    display: "none"
                },
                onLoad: function() {
                    C(!0)
                },
                ref: $,
                crossOrigin: null == I ? void 0 : I.crossOrigin
            })), l.default.createElement(l.default.Fragment, null, l.default.createElement("canvas", (0, lQ.default)({
                style: M,
                height: o,
                width: o,
                ref: x,
                role: "img"
            }, v)), z)
        }),
        aX = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "title", "marginSize", "imageSettings", "boostLevel"],
        aq = l.default.forwardRef(function(e, t) {
            var n = e.value,
                r = e.size,
                o = void 0 === r ? 128 : r,
                a = e.level,
                i = e.bgColor,
                s = e.fgColor,
                c = e.includeMargin,
                d = e.minVersion,
                u = e.title,
                p = e.marginSize,
                m = e.imageSettings,
                f = e.boostLevel,
                g = (0, aW.default)(e, aX),
                h = aF({
                    value: n,
                    level: void 0 === a ? "L" : a,
                    minVersion: void 0 === d ? 1 : d,
                    includeMargin: void 0 !== c && c,
                    marginSize: p,
                    imageSettings: m,
                    size: o,
                    boostLevel: f
                }),
                v = h.margin,
                b = h.cells,
                y = h.numCells,
                $ = h.calculatedImageSettings,
                x = b,
                S = null;
            null != m && null != $ && (null != $.excavation && (x = aP(b, $.excavation)), S = l.default.createElement("image", {
                href: m.src,
                height: $.h,
                width: $.w,
                x: $.x + v,
                y: $.y + v,
                preserveAspectRatio: "none",
                opacity: $.opacity,
                crossOrigin: $.crossOrigin
            }));
            var C = aH(x, v);
            return l.default.createElement("svg", (0, lQ.default)({
                height: o,
                width: o,
                viewBox: "0 0 ".concat(y, " ").concat(y),
                ref: t,
                role: "img"
            }, g), !!u && l.default.createElement("title", null, u), l.default.createElement("path", {
                fill: void 0 === i ? aR : i,
                d: "M0,0 h".concat(y, "v").concat(y, "H0z"),
                shapeRendering: "crispEdges"
            }), l.default.createElement("path", {
                fill: void 0 === s ? aT : s,
                d: C,
                shapeRendering: "crispEdges"
            }), S)
        });
    let aV = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"
                }
            }]
        },
        name: "reload",
        theme: "outlined"
    };

    function aG() {
        return (aG = Object.assign.bind()).apply(this, arguments)
    }
    let aY = l.forwardRef((e, t) => l.createElement(eQ.default, aG({}, e, {
            ref: t,
            icon: aV
        }))),
        aU = l.default.createElement(op.default, null);

    function aK({
        prefixCls: e,
        locale: t,
        onRefresh: n,
        statusRender: r,
        status: o
    }) {
        let a = {
            expired: l.default.createElement(l.default.Fragment, null, l.default.createElement("p", {
                className: `${e}-expired`
            }, t ? .expired), n && l.default.createElement(r4.default, {
                type: "link",
                icon: l.default.createElement(aY, null),
                onClick: n
            }, t ? .refresh)),
            loading: aU,
            scanned: l.default.createElement("p", {
                className: `${e}-scanned`
            }, t ? .scanned)
        };
        return (r ? ? (e => a[e.status]))({
            status: o,
            locale: t,
            onRefresh: n
        })
    }
    e.i(262370);
    var aQ = e.i(135551);
    let aZ = (0, y.genStyleHooks)("QRCode", e => (e => {
        let {
            componentCls: t,
            lineWidth: n,
            lineType: l,
            colorSplit: r
        } = e;
        return {
            [t]: { ...(0, b.resetComponent)(e),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: e.paddingSM,
                backgroundColor: e.colorWhite,
                borderRadius: e.borderRadiusLG,
                border: `${(0,v.unit)(n)} ${l} ${r}`,
                position: "relative",
                overflow: "hidden",
                [`& > ${t}-cover`]: {
                    position: "absolute",
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    color: e.colorText,
                    lineHeight: e.lineHeight,
                    background: e.QRCodeCoverBackgroundColor,
                    textAlign: "center",
                    [`& > ${t}-expired, & > ${t}-scanned`]: {
                        color: e.QRCodeTextColor
                    }
                },
                "> canvas": {
                    alignSelf: "stretch",
                    flex: "auto",
                    minWidth: 0
                },
                "&-icon": {
                    marginBlockEnd: e.marginXS,
                    fontSize: e.controlHeight
                }
            },
            [`${t}-borderless`]: {
                borderColor: "transparent",
                padding: 0,
                borderRadius: 0
            }
        }
    })((0, F.mergeToken)(e, {
        QRCodeTextColor: e.colorText
    })), e => ({
        QRCodeCoverBackgroundColor: new aQ.FastColor(e.colorBgContainer).setA(.96).toRgbString()
    }));
    var aJ = e.i(544195);
    let a0 = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                }
            }]
        },
        name: "star",
        theme: "filled"
    };

    function a1() {
        return (a1 = Object.assign.bind()).apply(this, arguments)
    }
    let a2 = l.forwardRef((e, t) => l.createElement(eQ.default, a1({}, e, {
            ref: t,
            icon: a0
        }))),
        a3 = l.default.forwardRef(function(e, t) {
            let {
                disabled: n,
                prefixCls: r,
                character: o,
                characterRender: a,
                index: i,
                count: s,
                value: c,
                allowHalf: d,
                focused: u,
                onHover: m,
                onClick: f
            } = e, g = i + 1, h = new Set([r]);
            0 === c && 0 === i && u ? h.add(`${r}-focused`) : d && c + .5 >= g && c < g ? (h.add(`${r}-half`), h.add(`${r}-active`), u && h.add(`${r}-focused`)) : (g <= c ? h.add(`${r}-full`) : h.add(`${r}-zero`), g === c && u && h.add(`${r}-focused`));
            let v = "function" == typeof o ? o(e) : o,
                b = l.default.createElement("li", {
                    className: (0, p.clsx)(Array.from(h)),
                    ref: t
                }, l.default.createElement("div", {
                    onClick: n ? null : e => {
                        f(e, i)
                    },
                    onKeyDown: n ? null : e => {
                        e.keyCode === K.default.ENTER && f(e, i)
                    },
                    onMouseMove: n ? null : e => {
                        m(e, i)
                    },
                    role: "radio",
                    "aria-checked": c > i ? "true" : "false",
                    "aria-posinset": i + 1,
                    "aria-setsize": s,
                    tabIndex: n ? -1 : 0
                }, l.default.createElement("div", {
                    className: `${r}-first`
                }, v), l.default.createElement("div", {
                    className: `${r}-second`
                }, v)));
            return a && (b = a(b, e)), b
        });

    function a5() {
        return (a5 = Object.assign.bind()).apply(this, arguments)
    }
    let a4 = l.default.forwardRef(function(e, t) {
            let n, {
                    prefixCls: r = "rc-rate",
                    className: o,
                    defaultValue: a,
                    value: i,
                    count: s = 5,
                    allowHalf: c = !1,
                    allowClear: u = !0,
                    keyboard: m = !0,
                    character: f = "★",
                    characterRender: g,
                    disabled: h,
                    direction: v = "ltr",
                    tabIndex: b = 0,
                    autoFocus: y,
                    onHoverChange: $,
                    onChange: x,
                    onFocus: S,
                    onBlur: C,
                    onKeyDown: k,
                    onMouseLeave: E,
                    ...w
                } = e,
                [N, I] = (n = l.useRef({}), [function(e) {
                    return n.current[e]
                }, function(e) {
                    return t => {
                        n.current[e] = t
                    }
                }]),
                M = l.default.useRef(null),
                z = () => {
                    h || M.current ? .focus()
                };
            l.default.useImperativeHandle(t, () => ({
                focus: z,
                blur: () => {
                    h || M.current ? .blur()
                }
            }));
            let [R, T] = (0, nW.default)(a || 0, i), [H, P] = (0, nW.default)(null), L = (e, t) => {
                let n = "rtl" === v,
                    l = e + 1;
                if (c) {
                    let r, o, a, i = N(e),
                        s = (r = function(e) {
                            let t, n, l = e.ownerDocument,
                                {
                                    body: r
                                } = l,
                                o = l && l.documentElement,
                                a = e.getBoundingClientRect();
                            return t = a.left, n = a.top, {
                                left: t -= o.clientLeft || r.clientLeft || 0,
                                top: n -= o.clientTop || r.clientTop || 0
                            }
                        }(i), a = (o = i.ownerDocument).defaultView || o.parentWindow, r.left += function(e) {
                            let t = e.pageXOffset,
                                n = "scrollLeft";
                            if ("number" != typeof t) {
                                let l = e.document;
                                "number" != typeof(t = l.documentElement[n]) && (t = l.body[n])
                            }
                            return t
                        }(a), r.left),
                        c = i.clientWidth;
                    n && t - s > c / 2 ? l -= .5 : !n && t - s < c / 2 && (l -= .5)
                }
                return l
            }, B = e => {
                T(e), x ? .(e)
            }, [A, O] = l.default.useState(!1), [W, D] = l.default.useState(null), F = (e, t) => {
                let n = L(t, e.pageX);
                n !== H && (D(n), P(null)), $ ? .(n)
            }, _ = e => {
                h || (D(null), P(null), $ ? .(void 0)), e && E ? .(e)
            }, j = (e, t) => {
                let n = L(t, e.pageX),
                    l = !1;
                u && (l = n === R), _(), B(l ? 0 : n), P(l ? n : null)
            };
            l.default.useEffect(() => {
                y && !h && z()
            }, []);
            let X = Array(s).fill(0).map((e, t) => l.default.createElement(a3, {
                    ref: I(t),
                    index: t,
                    count: s,
                    disabled: h,
                    prefixCls: `${r}-star`,
                    allowHalf: c,
                    value: null === W ? R : W,
                    onClick: j,
                    onHover: F,
                    key: e || t,
                    character: f,
                    characterRender: g,
                    focused: A
                })),
                q = (0, p.clsx)(r, o, {
                    [`${r}-disabled`]: h,
                    [`${r}-rtl`]: "rtl" === v
                });
            return l.default.createElement("ul", a5({
                className: q,
                onMouseLeave: _,
                tabIndex: h ? -1 : b,
                onFocus: h ? null : () => {
                    O(!0), S ? .()
                },
                onBlur: h ? null : () => {
                    O(!1), C ? .()
                },
                onKeyDown: h ? null : e => {
                    let {
                        keyCode: t
                    } = e, n = "rtl" === v, l = c ? .5 : 1;
                    m && (t === K.default.RIGHT && R < s && !n ? (B(R + l), e.preventDefault()) : t === K.default.LEFT && R > 0 && !n || t === K.default.RIGHT && R > 0 && n ? (B(R - l), e.preventDefault()) : t === K.default.LEFT && R < s && n && (B(R + l), e.preventDefault())), k ? .(e)
                },
                ref: M
            }, (0, d.default)(w, {
                aria: !0,
                data: !0,
                attr: !0
            })), X)
        }),
        a8 = (0, y.genStyleHooks)("Rate", e => (e => {
            let {
                componentCls: t
            } = e;
            return {
                [t]: { ...(0, b.resetComponent)(e),
                    display: "inline-block",
                    margin: 0,
                    padding: 0,
                    color: e.starColor,
                    fontSize: e.starSize,
                    lineHeight: 1,
                    listStyle: "none",
                    outline: "none",
                    "&-small": {
                        fontSize: e.starSizeSM
                    },
                    "&-large": {
                        fontSize: e.starSizeLG
                    },
                    [`&-disabled${t} ${t}-star`]: {
                        cursor: "default",
                        "> div:hover": {
                            transform: "scale(1)"
                        }
                    },
                    ...(e => {
                        let {
                            componentCls: t
                        } = e;
                        return {
                            [`${t}-star`]: {
                                position: "relative",
                                display: "inline-block",
                                color: "inherit",
                                cursor: "pointer",
                                "&:not(:last-child)": {
                                    marginInlineEnd: e.marginXS
                                },
                                "> div": {
                                    transition: `all ${e.motionDurationMid}, outline 0s`,
                                    "&:hover": {
                                        transform: e.starHoverScale
                                    },
                                    "&:focus": {
                                        outline: 0
                                    },
                                    "&:focus-visible": {
                                        outline: `${(0,v.unit)(e.lineWidth)} dashed ${e.starColor}`,
                                        transform: e.starHoverScale
                                    }
                                },
                                "&-first, &-second": {
                                    color: e.starBg,
                                    transition: `all ${e.motionDurationMid}`,
                                    userSelect: "none"
                                },
                                "&-first": {
                                    position: "absolute",
                                    top: 0,
                                    insetInlineStart: 0,
                                    width: "50%",
                                    height: "100%",
                                    overflow: "hidden",
                                    opacity: 0
                                },
                                [`&-half ${t}-star-first, &-half ${t}-star-second`]: {
                                    opacity: 1
                                },
                                [`&-half ${t}-star-first, &-full ${t}-star-second`]: {
                                    color: "inherit"
                                }
                            }
                        }
                    })(e),
                    ...{
                        [`&-rtl${e.componentCls}`]: {
                            direction: "rtl"
                        }
                    }
                }
            }
        })((0, F.mergeToken)(e, {})), e => ({
            starColor: e.yellow6,
            starSize: .625 * e.controlHeight,
            starSizeSM: .625 * e.controlHeightSM,
            starSizeLG: .625 * e.controlHeightLG,
            starHoverScale: "scale(1.1)",
            starBg: e.colorFillContent
        })),
        a6 = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                className: r,
                rootClassName: o,
                style: a,
                tooltips: i,
                character: s = l.createElement(a2, null),
                disabled: c,
                size: d = "middle",
                ...u
            } = e, {
                getPrefixCls: m,
                direction: f,
                className: g,
                style: v
            } = (0, h.useComponentConfig)("rate"), b = m("rate", n), [y, $] = a8(b), x = { ...v,
                ...a
            }, S = l.useContext(lh.default);
            return l.createElement(a4, {
                ref: t,
                character: s,
                characterRender: (e, {
                    index: t
                }) => {
                    if (!i) return e;
                    let n = i[t];
                    return "object" == typeof n && null !== n ? l.createElement(l5.default, { ...n
                    }, e) : l.createElement(l5.default, {
                        title: n
                    }, e)
                },
                disabled: c ? ? S,
                ...u,
                className: (0, p.clsx)(`${b}-${d}`, r, o, y, $, g),
                style: x,
                prefixCls: b,
                direction: f
            })
        });
    var a9 = e.i(376150),
        a7 = e.i(649536),
        ie = e.i(185793);
    let it = (0, l.forwardRef)((e, t) => {
        let {
            prefixCls: n,
            className: r,
            children: o,
            size: a,
            style: i = {}
        } = e, s = (0, p.clsx)(`${n}-panel`, {
            [`${n}-panel-hidden`]: 0 === a
        }, r), c = void 0 !== a;
        return l.default.createElement("div", {
            ref: t,
            className: s,
            style: { ...i,
                flexBasis: c ? a : "auto",
                flexGrow: +!c
            }
        }, o)
    });

    function il(e, t) {
        return e.collapsible && t.collapsible ? !0 === e.showCollapsibleIcon || !0 === t.showCollapsibleIcon || ("auto" === e.showCollapsibleIcon || "auto" === t.showCollapsibleIcon) && "auto" : e.collapsible ? e.showCollapsibleIcon : !!t.collapsible && t.showCollapsibleIcon
    }

    function ir(e) {
        return Number(e.slice(0, -1)) / 100
    }

    function io(e) {
        return "string" == typeof e && e.endsWith("%")
    }
    var ia = e.i(180909),
        ii = e.i(948740);

    function is(e) {
        return "number" == typeof e && !Number.isNaN(e) && Number.isFinite(e) ? Math.round(e) : 0
    }
    let ic = e => {
            let {
                prefixCls: t,
                vertical: n,
                index: r,
                active: o,
                ariaNow: a,
                ariaMin: i,
                ariaMax: s,
                resizable: c,
                draggerIcon: d,
                draggerStyle: u,
                draggerClassName: m,
                collapsibleIcon: f,
                startCollapsible: g,
                endCollapsible: h,
                onOffsetStart: v,
                onOffsetUpdate: b,
                onOffsetEnd: y,
                onCollapse: $,
                lazy: x,
                containerSize: S,
                showStartCollapsibleIcon: C,
                showEndCollapsibleIcon: k
            } = e, E = `${t}-bar`, [w, N] = (0, l.useState)(null), [I, M] = (0, l.useState)(0), z = n ? 0 : I, R = n ? I : 0, T = (0, P.useEvent)((e, t) => {
                var l;
                let r;
                M((l = n ? t : e, r = S * a / 100, Math.max(Math.max(0, S * i / 100), Math.min(Math.min(S, S * s / 100), r + l)) - r))
            }), H = (0, P.useEvent)(() => {
                b(r, z, R, !0), M(0), y(!0)
            }), L = e => {
                switch (e) {
                    case !0:
                        return `${E}-collapse-bar-always-visible`;
                    case !1:
                        return `${E}-collapse-bar-always-hidden`;
                    case "auto":
                        return `${E}-collapse-bar-hover-only`
                }
            };
            (0, lU.default)(() => {
                if (!w) return;
                let e = {
                    mousemove: e => {
                        let {
                            pageX: t,
                            pageY: n
                        } = e, l = t - w[0], o = n - w[1];
                        x ? T(l, o) : b(r, l, o)
                    },
                    mouseup: () => {
                        x ? H() : y(), N(null)
                    },
                    touchmove: e => {
                        if (1 === e.touches.length) {
                            let t = e.touches[0],
                                n = t.pageX - w[0],
                                l = t.pageY - w[1];
                            x ? T(n, l) : b(r, n, l)
                        }
                    },
                    touchend: () => {
                        x ? H() : y(), N(null)
                    }
                };
                for (let [t, n] of Object.entries(e)) window.addEventListener(t, n);
                return () => {
                    for (let [t, n] of Object.entries(e)) window.removeEventListener(t, n)
                }
            }, [w, r, x]);
            let B = {
                    [`--${E}-preview-offset`]: `${I}px`
                },
                [A, O, W, D] = l.default.useMemo(() => {
                    let e = null,
                        t = null,
                        r = f ? .start !== void 0,
                        o = f ? .end !== void 0;
                    return n ? (e = r ? f.start : l.default.createElement(ii.default, null), t = o ? f.end : l.default.createElement(ia.default, null)) : (e = r ? f.start : l.default.createElement(lN.default, null), t = o ? f.end : l.default.createElement(lI.default, null)), [e, t, r, o]
                }, [f, n]);
            return l.default.createElement("div", {
                className: E,
                role: "separator",
                "aria-valuenow": is(a),
                "aria-valuemin": is(i),
                "aria-valuemax": is(s)
            }, x && l.default.createElement("div", {
                className: (0, p.clsx)(`${E}-preview`, {
                    [`${E}-preview-active`]: !!I
                }),
                style: B
            }), l.default.createElement("div", {
                style: u,
                className: (0, p.clsx)(`${E}-dragger`, {
                    [`${E}-dragger-disabled`]: !c,
                    [`${E}-dragger-active`]: o,
                    [`${E}-dragger-customize`]: void 0 !== d
                }, m ? .default, o && m ? .active),
                onMouseDown: e => {
                    c && e.currentTarget && (N([e.pageX, e.pageY]), v(r))
                },
                onTouchStart: e => {
                    if (c && 1 === e.touches.length) {
                        let t = e.touches[0];
                        N([t.pageX, t.pageY]), v(r)
                    }
                }
            }, void 0 !== d ? l.default.createElement("div", {
                className: (0, p.clsx)(`${E}-dragger-icon`)
            }, d) : null), g && l.default.createElement("div", {
                className: (0, p.clsx)(`${E}-collapse-bar`, `${E}-collapse-bar-start`, {
                    [`${E}-collapse-bar-customize`]: W
                }, L(C)),
                onClick: () => $(r, "start")
            }, l.default.createElement("span", {
                className: (0, p.clsx)(`${E}-collapse-icon`, `${E}-collapse-start`)
            }, A)), h && l.default.createElement("div", {
                className: (0, p.clsx)(`${E}-collapse-bar`, `${E}-collapse-bar-end`, {
                    [`${E}-collapse-bar-customize`]: D
                }, L(k)),
                onClick: () => $(r, "end")
            }, l.default.createElement("span", {
                className: (0, p.clsx)(`${E}-collapse-icon`, `${E}-collapse-end`)
            }, O)))
        },
        id = {
            position: "absolute",
            top: "50%",
            left: {
                _skip_check_: !0,
                value: "50%"
            },
            transform: "translate(-50%, -50%)"
        },
        iu = (0, y.genStyleHooks)("Splitter", e => {
            let {
                componentCls: t,
                colorFill: n,
                splitBarDraggableSize: l,
                splitBarSize: r,
                splitTriggerSize: o,
                controlItemBgHover: a,
                controlItemBgActive: i,
                controlItemBgActiveHover: s,
                prefixCls: c,
                colorPrimary: d
            } = e, u = `${t}-bar`, p = `${t}-mask`, m = `${t}-panel`, f = e.calc(o).div(2).equal(), g = `${c}-bar-preview-offset`, h = {
                position: "absolute",
                background: e.colorPrimary,
                opacity: .2,
                pointerEvents: "none",
                transition: "none",
                zIndex: 1,
                display: "none"
            };
            return {
                [t]: { ...(0, b.resetComponent)(e),
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "stretch",
                    [`> ${u}`]: {
                        flex: "none",
                        position: "relative",
                        userSelect: "none",
                        [`${u}-dragger`]: { ...id,
                            zIndex: 1,
                            "&::before": {
                                content: '""',
                                background: a,
                                ...id
                            },
                            "&::after": {
                                content: '""',
                                background: n,
                                ...id
                            },
                            [`&:hover:not(${u}-dragger-active)`]: {
                                "&::before": {
                                    background: i
                                }
                            },
                            "&-active": {
                                zIndex: 2,
                                "&::before": {
                                    background: s
                                }
                            },
                            [`&-active${u}-dragger-customize`]: {
                                [`${u}-dragger-icon`]: {
                                    color: d
                                }
                            },
                            [`&-disabled${u}-dragger`]: {
                                zIndex: 0,
                                "&, &:hover, &-active": {
                                    cursor: "default",
                                    "&::before": {
                                        background: a
                                    }
                                },
                                "&::after": {
                                    display: "none"
                                },
                                [`${u}-dragger-icon`]: {
                                    display: "none"
                                }
                            },
                            "&-customize": {
                                [`${u}-dragger-icon`]: { ...id,
                                    display: "flex",
                                    alignItems: "center",
                                    color: n
                                },
                                "&::after": {
                                    display: "none"
                                }
                            }
                        },
                        [`${u}-collapse-bar`]: { ...id,
                            zIndex: e.zIndexPopupBase,
                            background: a,
                            fontSize: e.fontSizeSM,
                            borderRadius: e.borderRadiusXS,
                            color: e.colorText,
                            cursor: "pointer",
                            opacity: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            [`&:hover:not(${u}-collapse-bar-customize)`]: {
                                background: i
                            },
                            [`&:active:not(${u}-collapse-bar-customize)`]: {
                                background: s
                            },
                            [`${u}-collapse-icon`]: {
                                display: "flex",
                                alignItems: "center"
                            }
                        },
                        [`${u}-collapse-bar-customize`]: {
                            background: "transparent"
                        },
                        "&:hover, &:active": {
                            [`${u}-collapse-bar-hover-only`]: {
                                opacity: 1
                            }
                        },
                        [`${u}-collapse-bar-hover-only`]: {
                            "@media(hover:none)": {
                                opacity: 1
                            }
                        },
                        [`${u}-collapse-bar-always-hidden`]: {
                            display: "none"
                        },
                        [`${u}-collapse-bar-always-visible`]: {
                            opacity: 1
                        }
                    },
                    [p]: {
                        position: "fixed",
                        zIndex: e.zIndexPopupBase,
                        inset: 0,
                        "&-horizontal": {
                            cursor: "col-resize"
                        },
                        "&-vertical": {
                            cursor: "row-resize"
                        }
                    },
                    "&-horizontal": {
                        flexDirection: "row",
                        [`> ${u}`]: {
                            width: 0,
                            [`${u}-preview`]: {
                                height: "100%",
                                width: r,
                                ...h,
                                [`&${u}-preview-active`]: {
                                    display: "block",
                                    transform: `translateX(var(--${g}))`
                                }
                            },
                            [`${u}-dragger`]: {
                                cursor: "col-resize",
                                height: "100%",
                                width: o,
                                "&::before": {
                                    height: "100%",
                                    width: r
                                },
                                "&::after": {
                                    height: l,
                                    width: r
                                }
                            },
                            [`${u}-collapse-bar`]: {
                                width: e.fontSizeSM,
                                height: e.controlHeightSM,
                                "&-start": {
                                    left: {
                                        _skip_check_: !0,
                                        value: "auto"
                                    },
                                    right: {
                                        _skip_check_: !0,
                                        value: f
                                    },
                                    transform: "translateY(-50%)"
                                },
                                "&-end": {
                                    left: {
                                        _skip_check_: !0,
                                        value: f
                                    },
                                    right: {
                                        _skip_check_: !0,
                                        value: "auto"
                                    },
                                    transform: "translateY(-50%)"
                                }
                            }
                        }
                    },
                    "&-vertical": {
                        flexDirection: "column",
                        [`> ${u}`]: {
                            height: 0,
                            [`${u}-preview`]: {
                                height: r,
                                width: "100%",
                                ...h,
                                [`&${u}-preview-active`]: {
                                    display: "block",
                                    transform: `translateY(var(--${g}))`
                                }
                            },
                            [`${u}-dragger`]: {
                                cursor: "row-resize",
                                width: "100%",
                                height: o,
                                "&::before": {
                                    width: "100%",
                                    height: r
                                },
                                "&::after": {
                                    width: l,
                                    height: r
                                }
                            },
                            [`${u}-collapse-bar`]: {
                                height: e.fontSizeSM,
                                width: e.controlHeightSM,
                                "&-start": {
                                    top: "auto",
                                    bottom: f,
                                    transform: "translateX(-50%)"
                                },
                                "&-end": {
                                    top: f,
                                    bottom: "auto",
                                    transform: "translateX(-50%)"
                                }
                            }
                        }
                    },
                    [m]: {
                        overflow: "auto",
                        padding: "0 1px",
                        scrollbarWidth: "thin",
                        boxSizing: "border-box",
                        "&-hidden": {
                            padding: 0,
                            overflow: "hidden"
                        },
                        [`&:has(${t}:only-child)`]: {
                            overflow: "hidden"
                        }
                    }
                }
            }
        }, e => {
            let t = e.splitBarSize || 2,
                n = e.splitTriggerSize || 6,
                l = e.resizeSpinnerSize || 20;
            return {
                splitBarSize: t,
                splitTriggerSize: n,
                splitBarDraggableSize: e.splitBarDraggableSize ? ? l,
                resizeSpinnerSize: l
            }
        }),
        ip = e => {
            let {
                prefixCls: t,
                className: n,
                classNames: r,
                style: o,
                styles: a,
                layout: i,
                orientation: s,
                vertical: c,
                children: d,
                draggerIcon: u,
                collapsibleIcon: f,
                rootClassName: g,
                onResizeStart: v,
                onResize: b,
                onResizeEnd: y,
                lazy: $
            } = e, {
                getPrefixCls: x,
                direction: S,
                className: C,
                style: k,
                classNames: E,
                styles: w
            } = (0, h.useComponentConfig)("splitter"), N = x("splitter", t), I = (0, O.default)(N), [M, z] = iu(N, I), [R, T] = (0, l3.useOrientation)(s, c, i), L = "rtl" === S, B = !T && L, A = l.useMemo(() => (0, ej.toArray)(d).filter(e => l.isValidElement(e)).map(e => {
                let {
                    props: t
                } = e, {
                    collapsible: n,
                    ...l
                } = t;
                return { ...l,
                    collapsible: function(e) {
                        if (e && "object" == typeof e) return { ...e,
                            showCollapsibleIcon: void 0 === e.showCollapsibleIcon ? "auto" : e.showCollapsibleIcon
                        };
                        let t = !!e;
                        return {
                            start: t,
                            end: t,
                            showCollapsibleIcon: "auto"
                        }
                    }(n)
                }
            }), [d]), [W, D] = (0, l.useState)(), [F, _, j, X, q, V] = function(e, t) {
                let n = e.map(e => e.size),
                    r = e.length,
                    o = t || 0,
                    a = e => e * o,
                    [i, s] = l.default.useState(() => e.map(e => e.defaultSize)),
                    c = l.default.useMemo(() => {
                        let e = [];
                        for (let t = 0; t < r; t += 1) e[t] = n[t] ? ? i[t];
                        return e
                    }, [r, i, n]),
                    d = l.default.useMemo(() => e.map(e => io(e.min) ? ir(e.min) : (e.min || 0) / o), [e, o]),
                    u = l.default.useMemo(() => e.map(e => io(e.max) ? ir(e.max) : (e.max || o) / o), [e, o]),
                    p = l.default.useMemo(() => {
                        let e = [];
                        for (let t = 0; t < r; t += 1) {
                            let n = c[t];
                            if (io(n)) e[t] = ir(n);
                            else if (n || 0 === n) {
                                let l = Number(n);
                                Number.isNaN(l) || (e[t] = l / o)
                            } else e[t] = void 0
                        }
                        return function(e, t, n) {
                            let l = 0,
                                r = [];
                            e.forEach((e, t) => {
                                void 0 === e ? r.push(t) : l += e
                            });
                            let o = 1 - l,
                                a = r.length;
                            if (e.length && !r.length && 1 !== l) {
                                if (0 === l) {
                                    let t = 1 / e.length;
                                    return e.map(() => t)
                                }
                                let t = 1 / l;
                                return e.map(e => e * t)
                            }
                            if (o < 0) {
                                let t = 1 / l;
                                return e.map(e => void 0 === e ? 0 : e * t)
                            }
                            let i = 0,
                                s = 0,
                                c = 0,
                                d = 1;
                            for (let e of r) {
                                let l = t[e] || 0,
                                    r = n[e] || 1;
                                i += l, s += r, c = Math.max(c, l), d = Math.min(d, r)
                            }
                            if (i > 1 && s < 1) {
                                let t = 1 / a;
                                return e.map(e => void 0 === e ? t : e)
                            }
                            let u = o / a;
                            if (c <= u && u <= d) return e.map(e => void 0 === e ? u : e);
                            let p = (0, H.default)(e),
                                m = o - i;
                            for (let e = 0; e < a; e += 1) {
                                let l = r[e],
                                    o = t[l] || 0,
                                    a = n[l] || 1;
                                p[l] = o;
                                let i = Math.min(a - o, m);
                                p[l] += i, m -= i
                            }
                            return p
                        }(e, d, u)
                    }, [r, c, o, d, u]),
                    m = l.default.useMemo(() => p.map(a), [p, o]);
                return [l.default.useMemo(() => t ? m : c, [m, c, t]), m, p, d, u, s]
            }(A, W), G = l.useMemo(() => {
                let e = [];
                for (let t = 0; t < A.length - 1; t += 1) {
                    let n = A[t],
                        l = A[t + 1],
                        r = _[t],
                        o = _[t + 1],
                        {
                            resizable: a = !0,
                            min: i,
                            collapsible: s
                        } = n,
                        {
                            resizable: c = !0,
                            min: d,
                            collapsible: u
                        } = l,
                        p = a && c && (0 !== r || !i) && (0 !== o || !d),
                        m = !!s.end && r > 0,
                        f = !!u.start && 0 === o && r > 0,
                        g = m || f,
                        h = !!u.start && o > 0,
                        v = !!s.end && 0 === r && o > 0,
                        b = h || v,
                        y = il({
                            collapsible: m,
                            showCollapsibleIcon: s.showCollapsibleIcon
                        }, {
                            collapsible: f,
                            showCollapsibleIcon: u.showCollapsibleIcon
                        }),
                        $ = il({
                            collapsible: h,
                            showCollapsibleIcon: u.showCollapsibleIcon
                        }, {
                            collapsible: v,
                            showCollapsibleIcon: s.showCollapsibleIcon
                        });
                    e[t] = {
                        resizable: p,
                        startCollapsible: !!(B ? b : g),
                        endCollapsible: !!(B ? g : b),
                        showStartCollapsibleIcon: B ? $ : y,
                        showEndCollapsibleIcon: B ? y : $
                    }
                }
                return e
            }, [_, A, B]), [Y, U, K, Q, Z] = function(e, t, n, r, o, a) {
                let i = e.map(e => [e.min, e.max]),
                    s = r || 0,
                    c = e => e * s;

                function d(e, t) {
                    return "string" == typeof e ? c(ir(e)) : e ? ? t
                }
                let [u, p] = l.useState([]), m = l.useRef([]), [f, g] = l.useState(null);
                return [e => {
                    p(n.map(c)), g({
                        index: e,
                        confirmed: !1
                    })
                }, (e, n) => {
                    let l = null;
                    if ((!f || !f.confirmed) && 0 !== n) {
                        if (n > 0) l = e, g({
                            index: e,
                            confirmed: !0
                        });
                        else
                            for (let n = e; n >= 0; n -= 1)
                                if (u[n] > 0 && t[n].resizable) {
                                    l = n, g({
                                        index: n,
                                        confirmed: !0
                                    });
                                    break
                                }
                    }
                    let r = l ? ? f ? .index ? ? e,
                        a = (0, H.default)(u),
                        c = r + 1,
                        p = d(i[r][0], 0),
                        m = d(i[c][0], 0),
                        h = d(i[r][1], s),
                        v = d(i[c][1], s),
                        b = n;
                    return a[r] + b < p && (b = p - a[r]), a[c] - b < m && (b = a[c] - m), a[r] + b > h && (b = h - a[r]), a[c] - b > v && (b = a[c] - v), a[r] += b, a[c] -= b, o(a), a
                }, () => {
                    g(null)
                }, (e, t) => {
                    let l = n.map(c),
                        r = a ? "start" === t ? "end" : "start" : t,
                        u = "start" === r ? e : e + 1,
                        p = "start" === r ? e + 1 : e,
                        f = l[u],
                        g = l[p];
                    if (0 !== f && 0 !== g) l[u] = 0, l[p] += f, m.current[e] = f;
                    else {
                        let t = f + g,
                            n = d(i[u][0], 0),
                            r = d(i[u][1], s),
                            o = d(i[p][0], 0),
                            a = d(i[p][1], s),
                            c = Math.max(n, t - a),
                            h = Math.min(r, t - o),
                            v = o || (h - c) / 2,
                            b = m.current[e],
                            y = t - b;
                        b && b <= a && b >= o && y <= r && y >= n ? (l[p] = b, l[u] = y) : (l[u] -= v, l[p] += v)
                    }
                    return o(l), l
                }, f ? .index]
            }(A, G, j, W, V, B), J = (0, P.useEvent)(e => {
                Y(e), v ? .(_)
            }), ee = (0, P.useEvent)((e, t, n) => {
                let l = U(e, t);
                n ? y ? .(l) : b ? .(l)
            }), et = (0, P.useEvent)(e => {
                K(), e || y ? .(_)
            }), en = (0, P.useEvent)((t, n) => {
                let l = Q(t, n);
                b ? .(l), y ? .(l);
                let r = l.map(e => Math.abs(e) < Number.EPSILON);
                e.onCollapse ? .(r, l)
            }), el = { ...e,
                vertical: T,
                orientation: R
            }, [er, eo] = (0, m.useMergeSemantic)([E, r], [w, a], {
                props: el
            }, {
                dragger: {
                    _default: "default"
                }
            }), ea = (0, p.clsx)(N, n, `${N}-${R}`, {
                [`${N}-rtl`]: L
            }, g, er.root, C, z, I, M), ei = `${N}-mask`, es = l.default.useMemo(() => {
                let e = [],
                    t = 0,
                    n = A.length;
                for (let l = 0; l < n; l += 1) e.push(t += j[l]);
                return e
            }, [j, A.length]), ec = { ...eo.root,
                ...k,
                ...o
            };
            return l.default.createElement(ob.default, {
                onResize: e => {
                    let {
                        offsetWidth: t,
                        offsetHeight: n
                    } = e, l = T ? n : t;
                    0 !== l && D(l)
                }
            }, l.default.createElement("div", {
                style: ec,
                className: ea
            }, A.map((e, t) => {
                let n = { ...e,
                        className: (0, p.clsx)(er.panel, e.className),
                        style: { ...eo.panel,
                            ...e.style
                        }
                    },
                    r = l.default.createElement(it, { ...n,
                        prefixCls: N,
                        size: F[t]
                    }),
                    o = null,
                    a = G[t];
                if (a) {
                    let e = (es[t - 1] || 0) + X[t],
                        n = (es[t + 1] || 100) - q[t + 1],
                        r = (es[t - 1] || 0) + q[t],
                        i = (es[t + 1] || 100) - X[t + 1];
                    o = l.default.createElement(ic, {
                        lazy: $,
                        index: t,
                        active: Z === t,
                        prefixCls: N,
                        vertical: T,
                        resizable: a.resizable,
                        draggerStyle: eo.dragger,
                        draggerClassName: er.dragger,
                        draggerIcon: u,
                        collapsibleIcon: f,
                        ariaNow: 100 * es[t],
                        ariaMin: 100 * Math.max(e, n),
                        ariaMax: 100 * Math.min(r, i),
                        startCollapsible: a.startCollapsible,
                        endCollapsible: a.endCollapsible,
                        showStartCollapsibleIcon: a.showStartCollapsibleIcon,
                        showEndCollapsibleIcon: a.showEndCollapsibleIcon,
                        onOffsetStart: J,
                        onOffsetUpdate: (e, t, n, l) => {
                            let r = T ? n : t;
                            B && (r = -r), ee(e, r, l)
                        },
                        onOffsetEnd: et,
                        onCollapse: en,
                        containerSize: W || 0
                    })
                }
                return l.default.createElement(l.default.Fragment, {
                    key: `split-panel-${t}`
                }, r, o)
            }), "number" == typeof Z && l.default.createElement("div", {
                "aria-hidden": !0,
                className: (0, p.clsx)(ei, `${ei}-${R}`)
            })))
        };
    ip.Panel = () => null;
    var im = e.i(160226),
        ig = e.i(393615);

    function ih(e) {
        let {
            prefixCls: t,
            className: n,
            style: r,
            status: o
        } = e, a = `${t}-rail`;
        return l.createElement("div", {
            className: (0, p.clsx)(a, `${a}-${o}`, n),
            style: r
        })
    }
    let iv = l.createContext({}),
        ib = l.createContext(null);

    function iy() {
        return (iy = Object.assign.bind()).apply(this, arguments)
    }
    let i$ = l.createContext({}),
        ix = l.forwardRef((e, t) => {
            let {
                className: n,
                style: r,
                children: o,
                ...a
            } = e, {
                prefixCls: i,
                classNames: s,
                styles: c
            } = l.useContext(ib), {
                className: u,
                style: m
            } = l.useContext(i$), f = `${i}-item`;
            return l.createElement("div", iy({}, (0, d.default)(a, !1), {
                ref: t,
                className: (0, p.clsx)(`${f}-icon`, s.itemIcon, u, n),
                style: { ...c.itemIcon,
                    ...m,
                    ...r
                }
            }), o)
        });

    function iS() {
        return (iS = Object.assign.bind()).apply(this, arguments)
    }

    function iC(e) {
        let {
            prefixCls: t,
            classNames: n,
            styles: r,
            data: o,
            last: a,
            nextStatus: i,
            active: s,
            index: c,
            itemRender: d,
            iconRender: u,
            itemWrapperRender: m,
            onClick: f
        } = e, g = `${t}-item`, {
            railFollowPrevStatus: h
        } = l.useContext(iv), {
            ItemComponent: v
        } = l.useContext(ib), {
            onClick: b,
            title: y,
            subTitle: $,
            content: x,
            description: S,
            disabled: C,
            icon: k,
            status: E,
            className: w,
            style: N,
            classNames: I = {},
            styles: M = {},
            ...z
        } = o, R = x ? ? S, T = {
            item: { ...o,
                content: R
            },
            index: c,
            active: s
        }, H = {};
        (f || b) && !C && (H.role = "button", H.tabIndex = 0, H.onClick = e => {
            b ? .(e), f(c)
        }, H.onKeyDown = e => {
            let {
                which: t
            } = e;
            (t === K.default.ENTER || t === K.default.SPACE) && f(c)
        });
        let P = null != y,
            L = null != $,
            B = (0, p.clsx)(g, `${g}-${E||"wait"}`, {
                [`${g}-custom`]: k,
                [`${g}-active`]: s,
                [`${g}-disabled`]: !0 === C,
                [`${g}-empty-header`]: !P && !L
            }, w, n.item, I.root),
            A = l.createElement(ix, null);
        u && (A = u(A, { ...T,
            components: {
                Icon: ix
            }
        }));
        let O = l.createElement("div", {
                className: (0, p.clsx)(`${g}-wrapper`, n.itemWrapper, I.wrapper),
                style: { ...r.itemWrapper,
                    ...M.wrapper
                }
            }, l.createElement(i$.Provider, {
                value: {
                    className: I.icon,
                    style: M.icon
                }
            }, A), l.createElement("div", {
                className: (0, p.clsx)(`${g}-section`, n.itemSection, I.section),
                style: { ...r.itemSection,
                    ...M.section
                }
            }, l.createElement("div", {
                className: (0, p.clsx)(`${g}-header`, n.itemHeader, I.header),
                style: { ...r.itemHeader,
                    ...M.header
                }
            }, P && l.createElement("div", {
                className: (0, p.clsx)(`${g}-title`, n.itemTitle, I.title),
                style: { ...r.itemTitle,
                    ...M.title
                }
            }, y), L && l.createElement("div", {
                title: "string" == typeof $ ? $ : void 0,
                className: (0, p.clsx)(`${g}-subtitle`, n.itemSubtitle, I.subtitle),
                style: { ...r.itemSubtitle,
                    ...M.subtitle
                }
            }, $), !a && l.createElement(ih, {
                prefixCls: g,
                className: (0, p.clsx)(n.itemRail, I.rail),
                style: { ...r.itemRail,
                    ...M.rail
                },
                status: h ? E : i
            })), null != R && l.createElement("div", {
                className: (0, p.clsx)(`${g}-content`, n.itemContent, I.content),
                style: { ...r.itemContent,
                    ...M.content
                }
            }, R))),
            W = l.createElement(v, iS({}, z, H, {
                className: B,
                style: { ...r.item,
                    ...M.root,
                    ...N
                }
            }), m ? m(O) : O);
        return d && (W = d(W, T) || null), W
    }

    function ik() {
        return (ik = Object.assign.bind()).apply(this, arguments)
    }
    let iE = {},
        iw = function(e) {
            let {
                prefixCls: t = "rc-steps",
                style: n,
                className: r,
                classNames: o = iE,
                styles: a = iE,
                rootClassName: i,
                orientation: s,
                titlePlacement: c,
                components: d,
                status: u = "process",
                current: m = 0,
                initial: f = 0,
                onChange: g,
                items: h,
                iconRender: v,
                itemRender: b,
                itemWrapperRender: y,
                ...$
            } = e, x = "vertical" === s, S = (0, p.clsx)(t, `${t}-${x?"vertical":"horizontal"}`, `${t}-title-${x||"vertical"!==c?"horizontal":"vertical"}`, i, r, o.root), C = l.default.useMemo(() => (h || []).filter(Boolean), [h]), k = l.default.useMemo(() => C.map(({
                status: e
            }, t) => {
                let n = f + t;
                return e ? e : n === m ? u : n < m ? "finish" : "wait"
            }), [C, u, m, f]), E = e => {
                g && m !== e && g(e)
            }, {
                root: w = "div",
                item: N = "div"
            } = d || {}, I = l.default.useMemo(() => ({
                prefixCls: t,
                classNames: o,
                styles: a,
                ItemComponent: N
            }), [t, o, a, N]);
            return l.default.createElement(w, ik({
                className: S,
                style: { ...n,
                    ...a ? .root
                }
            }, $), l.default.createElement(ib.Provider, {
                value: I
            }, C.map((e, n) => {
                let r = f + n,
                    i = k[n],
                    s = k[n + 1],
                    c = { ...e,
                        status: i
                    };
                return l.default.createElement(iC, {
                    key: r,
                    prefixCls: t,
                    classNames: o,
                    styles: a,
                    data: c,
                    nextStatus: s,
                    active: r === m,
                    index: r,
                    last: C.length - 1 === n,
                    iconRender: v,
                    itemRender: b,
                    itemWrapperRender: y,
                    onClick: g && E
                })
            })))
        };
    var iN = e.i(121872),
        iI = e.i(26905);
    let iM = l.createContext(null);

    function iz(e) {
        let {
            prefixCls: t
        } = e;
        return l.createElement("svg", {
            className: `${t}-panel-arrow`,
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "none"
        }, l.createElement("title", null, "Arrow"), l.createElement("path", {
            d: "M 0 0 L 100 50 L 0 100"
        }))
    }

    function iR(e) {
        let {
            prefixCls: t,
            children: n,
            percent: r
        } = e, o = `${t}-item-progress-icon`, a = `${o}-circle`, i = `calc(var(--progress-r) * 2 * ${Math.PI*r/100}) 9999`;
        return l.createElement(l.Fragment, null, l.createElement("svg", {
            className: `${o}-svg`,
            viewBox: "0 0 100 100",
            width: "100%",
            height: "100%",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-valuemax": 100,
            "aria-valuemin": 0,
            "aria-valuenow": r
        }, l.createElement("title", null, "Progress"), l.createElement("circle", {
            className: (0, p.clsx)(a, `${a}-rail`)
        }), l.createElement("circle", {
            className: (0, p.clsx)(a, `${a}-ptg`),
            strokeDasharray: i,
            transform: "rotate(-90 50 50)"
        })), n)
    }

    function iT(e, t, n) {
        let {
            calc: l,
            componentCls: r,
            descriptionMaxWidth: o
        } = e, a = `${r}-item`;
        return {
            [`@container style(${(o||"--ant-not-exist").replace(/var\((.*)\)/,"$1")})`]: [{
                [`${a}-icon`]: {
                    marginInlineStart: l(o).sub("var(--steps-icon-size)").div(2).equal()
                },
                [`${a}-rail`]: {
                    width: "auto",
                    insetInlineStart: l(o).add("var(--steps-icon-size)").div(2).add(t).equal(),
                    insetInlineEnd: l(o).sub("var(--steps-icon-size)").div(2).sub(t).mul(-1).equal()
                }
            }, n]
        }
    }
    let iH = "wait",
        iP = "process",
        iL = "finish",
        iB = "error",
        iA = (0, y.genStyleHooks)("Steps", e => {
            let t = (0, F.mergeToken)(e, {
                inlineDotSize: 6
            });
            return [(e => {
                let {
                    componentCls: t
                } = e, n = `${t}-item`;
                return {
                    [t]: {
                        "--steps-title-font-size": e.fontSizeLG,
                        "--steps-title-line-height": e.lineHeightLG,
                        "--steps-subtitle-font-size": e.fontSize,
                        "--steps-subtitle-line-height": e.lineHeight,
                        "--steps-item-wrapper-padding-top": "0px",
                        "--steps-rail-size": e.lineWidth,
                        "--steps-rail-line-style": e.lineType,
                        ...(0, b.resetComponent)(e),
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "flex-start",
                        [n]: {
                            flex: "none",
                            position: "relative"
                        },
                        [`${n}-wrapper`]: {
                            display: "flex",
                            flexWrap: "nowrap",
                            paddingTop: "var(--steps-item-wrapper-padding-top)"
                        },
                        [`${n}-header`]: {
                            display: "flex",
                            flexWrap: "nowrap",
                            alignItems: "center"
                        },
                        [`${n}-title`]: {
                            color: e.colorText,
                            fontSize: "var(--steps-title-font-size)",
                            lineHeight: "var(--steps-title-line-height)",
                            wordBreak: "break-word"
                        },
                        [`${n}-subtitle`]: {
                            color: e.colorTextDescription,
                            fontWeight: "normal",
                            fontSize: "var(--steps-subtitle-font-size)",
                            lineHeight: "var(--steps-subtitle-line-height)",
                            marginInlineStart: e.marginXS,
                            wordBreak: "break-word"
                        },
                        [`${n}-content`]: {
                            color: e.colorTextDescription,
                            fontSize: e.fontSize,
                            lineHeight: e.lineHeight,
                            wordBreak: "break-word"
                        },
                        [`${n}-rail`]: {
                            borderStyle: "var(--steps-rail-line-style)",
                            borderWidth: 0
                        },
                        [`${n}-title, ${n}-subtitle, ${n}-content, ${n}-rail`]: {
                            transition: `all ${e.motionDurationSlow}`
                        },
                        [`&${t}-ellipsis`]: {
                            [`${n}-title, ${n}-subtitle, ${n}-content`]: b.textEllipsis
                        },
                        [`${n}[role='button']:not(${n}-active):hover`]: {
                            cursor: "pointer"
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    customIconFontSize: n,
                    motionDurationSlow: l
                } = e, r = `${t}-item`;
                return {
                    [t]: {
                        "--steps-icon-size": e.iconSize,
                        "--steps-icon-border-width": e.lineWidth,
                        [`${r}-icon`]: {
                            width: "var(--steps-icon-size)",
                            height: "var(--steps-icon-size)",
                            margin: 0,
                            flex: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: e.iconFontSize,
                            fontFamily: e.fontFamily,
                            lineHeight: "var(--steps-icon-size)",
                            textAlign: "center",
                            borderRadius: "var(--steps-icon-size)",
                            border: `var(--steps-icon-border-width) ${e.lineType} transparent`,
                            transition: ["background", "border", "color", "inset", "transform"].map(e => `${e} ${l}`).join(", "),
                            zIndex: 1
                        },
                        [`${r}-custom ${r}-icon`]: {
                            background: "none",
                            border: 0,
                            fontSize: n
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    calc: n
                } = e, l = `${t}-item`;
                return {
                    [`${t}-vertical`]: {
                        "--steps-vertical-rail-margin": n(e.marginXXS).mul(1.5).equal(),
                        flexDirection: "column",
                        alignItems: "stretch",
                        [`> ${l}`]: {
                            minHeight: n(e.controlHeight).mul(1.5).equal(),
                            paddingBottom: e.paddingSM,
                            "&:last-child": {
                                paddingBottom: 0
                            },
                            [`${l}-icon`]: {
                                marginInlineStart: "calc((var(--steps-icon-size-max) - var(--steps-icon-size)) / 2)"
                            },
                            [`${l}-rail`]: {
                                "--steps-rail-offset": n("var(--steps-heading-height)").sub("var(--steps-icon-size)").div(2).equal(),
                                borderInlineStartWidth: "var(--steps-rail-size)",
                                position: "absolute",
                                top: n("var(--steps-icon-size)").add("var(--steps-item-wrapper-padding-top)").add("var(--steps-rail-offset)").add("var(--steps-vertical-rail-margin)").equal(),
                                insetInlineStart: n("var(--steps-icon-size-max)").div(2).equal(),
                                bottom: n("var(--steps-vertical-rail-margin)").sub("var(--steps-rail-offset)").equal(),
                                marginInlineStart: "calc(var(--steps-rail-size) / -2)"
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t
                } = e, n = `${t}-item`;
                return {
                    [`${t}-horizontal`]: {
                        [`> ${n}`]: {
                            flex: "1 1 auto",
                            minWidth: e.iconSize,
                            [`${n}-rail`]: {
                                "--steps-horizontal-rail-margin": "calc(var(--steps-icon-size-max) / 2 + var(--steps-item-wrapper-padding-top))",
                                position: "static",
                                marginTop: "var(--steps-horizontal-rail-margin)",
                                width: "auto",
                                borderBlockStartWidth: "var(--steps-rail-size)",
                                flex: 1,
                                minWidth: 0,
                                alignSelf: "flex-start",
                                transform: "translateY(-50%)"
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    descriptionMaxWidth: n,
                    marginXS: l,
                    fontHeightLG: r,
                    calc: o
                } = e, a = `${t}-item`;
                return {
                    [t]: {
                        "--steps-icon-size-max": "max(var(--steps-icon-size), var(--steps-icon-size-active, var(--steps-icon-size)))",
                        [`${a}-icon`]: {
                            marginBlockStart: "calc((var(--steps-heading-height) - var(--steps-icon-size)) / 2)"
                        }
                    },
                    [`${t}-title-horizontal`]: {
                        "--steps-title-horizontal-item-margin": e.margin,
                        "--steps-title-horizontal-rail-margin": e.margin,
                        "--steps-title-horizontal-title-height": r,
                        "--steps-heading-height": "max(var(--steps-icon-size), var(--steps-title-horizontal-title-height))",
                        [`&${t}-horizontal, &${t}-horizontal-alternate`]: {
                            [`${a}:not(:first-child)`]: {
                                marginInlineStart: "var(--steps-title-horizontal-item-margin)"
                            },
                            [`${a}:last-child`]: {
                                flex: "0 1 auto"
                            },
                            [`${a}-wrapper`]: {
                                columnGap: e.marginXS
                            }
                        },
                        [`&${t}-vertical`]: {
                            [`${a}-wrapper`]: {
                                columnGap: e.margin
                            },
                            [`${a}-empty-header`]: {
                                [`${a}-header`]: {
                                    minHeight: "auto"
                                },
                                [`${a}-content`]: {
                                    marginTop: o("var(--steps-heading-height)").sub(e.fontHeight).div(2).equal()
                                }
                            }
                        },
                        [`${a}-section`]: {
                            flex: 1,
                            minWidth: 0
                        },
                        [`${a}-header`]: {
                            minHeight: "var(--steps-heading-height)"
                        },
                        [`${a}-title`]: {
                            flex: "0 1 auto"
                        },
                        [`${a}-content`]: {
                            maxWidth: n
                        },
                        [`${a}-subtitle`]: {
                            flex: "0 9999 auto"
                        },
                        [`&${t}-horizontal ${a}-rail`]: {
                            "--steps-item-wrapper-padding-top": "0px",
                            flex: 1,
                            marginInlineStart: "var(--steps-title-horizontal-rail-margin)"
                        }
                    },
                    [`${t}-title-vertical`]: {
                        "--steps-title-vertical-row-gap": e.paddingSM,
                        "--steps-title-horizontal-rail-gap": e.marginXXS,
                        "--steps-heading-height": "var(--steps-icon-size-max)",
                        [`> ${a}`]: {
                            flex: 1,
                            [`${a}-wrapper`]: {
                                flexDirection: "column",
                                rowGap: "var(--steps-title-vertical-row-gap)",
                                alignItems: "center"
                            },
                            [`${a}-section`]: {
                                alignSelf: "stretch"
                            },
                            [`${a}-header`]: {
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            [`${a}-title, ${a}-subtitle, ${a}-content`]: {
                                textAlign: "center",
                                maxWidth: "100%"
                            },
                            [`${a}-subtitle`]: {
                                margin: 0
                            },
                            [`${a}-rail`]: {
                                position: "absolute",
                                top: 0,
                                width: "calc(100% - var(--steps-icon-size) - var(--steps-title-horizontal-rail-gap) * 2)",
                                insetInlineStart: "calc(50% + var(--steps-icon-size) / 2 + var(--steps-title-horizontal-rail-gap))"
                            }
                        },
                        ...iT(e, l, {
                            [`${a}:last-child`]: {
                                flex: "none"
                            },
                            [`${a}-icon`]: {
                                alignSelf: "flex-start"
                            },
                            [`${a}-section`]: {
                                width: n
                            }
                        })
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    iconSizeSM: n,
                    fontSize: l,
                    lineHeight: r,
                    marginXS: o
                } = e;
                return {
                    [`${t}${t}-small`]: {
                        "--steps-icon-size": n,
                        "--steps-title-horizontal-item-margin": e.marginSM,
                        "--steps-title-vertical-row-gap": e.paddingXS,
                        "--steps-title-font-size": l,
                        "--steps-title-line-height": r,
                        "--steps-title-horizontal-rail-margin": e.marginXS,
                        "--steps-title-horizontal-title-height": e.fontHeight,
                        [`&${t}-horizontal${t}-title-vertical`]: iT(e, o)
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    iconSize: n,
                    dotSize: l,
                    dotCurrentSize: r,
                    marginXXS: o,
                    lineWidthBold: a,
                    fontSizeSM: i
                } = e, s = `${t}-item`;
                return {
                    [`${t}${t}-dot`]: {
                        "--steps-icon-size-active": r,
                        "--steps-icon-size": l,
                        "--steps-dot-icon-size": l,
                        "--steps-dot-icon-border-width": e.lineWidthBold,
                        "--steps-rail-size": a,
                        "--steps-icon-border-width": a,
                        [`${s}-custom ${s}-icon`]: {
                            fontSize: i
                        },
                        [`${s}-icon`]: {
                            position: "relative",
                            "&:after": {
                                content: '""',
                                width: n,
                                height: n,
                                display: "block",
                                position: "absolute",
                                top: "50%",
                                left: {
                                    _skip_check_: !0,
                                    value: "50%"
                                },
                                transform: "translate(-50%, -50%)"
                            }
                        },
                        [`${s}-active ${s}-icon`]: {
                            "--steps-icon-size": "var(--steps-icon-size-active)"
                        },
                        [`&${t}-horizontal`]: {
                            [`&, &${t}-small`]: iT(e, o)
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    colorTextDisabled: n,
                    colorTextLightSolid: l,
                    colorPrimary: r,
                    colorTextLabel: o,
                    colorError: a,
                    colorText: i,
                    colorTextDescription: s,
                    colorBgContainer: c,
                    colorPrimaryHover: d
                } = e, u = `${t}-item`;
                return {
                    [t]: [{
                        [u]: {
                            "--steps-item-solid-line-color": "#000",
                            "--steps-item-title-color": "#000",
                            "--steps-item-content-color": "#000",
                            "--steps-item-subtitle-color": "var(--steps-item-content-color)",
                            "--steps-item-icon-custom-color": "#000",
                            "--steps-item-icon-bg-color": "#000",
                            "--steps-item-icon-border-color": "#000",
                            "--steps-item-icon-text-color": "#fff",
                            "--steps-item-icon-dot-color": "#000",
                            "--steps-item-icon-dot-bg-color": "var(--steps-item-icon-dot-color)",
                            "--steps-item-icon-dot-border-color": "var(--steps-item-icon-dot-color)",
                            "--steps-item-text-hover-color": "#000",
                            "--steps-item-icon-bg-hover-color": "var(--steps-item-icon-bg-color)",
                            "--steps-item-icon-border-hover-color": "var(--steps-item-icon-border-color)",
                            "--steps-item-icon-text-hover-color": "var(--steps-item-icon-text-color)",
                            "--steps-item-content-active-color": "var(--steps-item-content-color)",
                            "--steps-item-icon-active-bg-color": "var(--steps-item-icon-bg-color)",
                            "--steps-item-icon-active-border-color": "var(--steps-item-icon-border-color)",
                            "--steps-item-icon-active-text-color": "var(--steps-item-icon-text-color)",
                            "--steps-item-process-rail-line-style": e.lineType
                        },
                        [`${u}-rail`]: {
                            borderColor: "var(--steps-item-solid-line-color)"
                        },
                        [`${u}-custom ${u}-icon`]: {
                            color: "var(--steps-item-icon-custom-color)"
                        },
                        [`${u}-title`]: {
                            color: "var(--steps-item-title-color)"
                        },
                        [`${u}-subtitle`]: {
                            color: "var(--steps-item-subtitle-color)"
                        },
                        [`${u}-content`]: {
                            color: "var(--steps-item-content-color)"
                        },
                        [`${u}-active ${u}-icon`]: {},
                        [`${u}-active ${u}-content`]: {
                            color: "var(--steps-item-content-active-color)"
                        },
                        [`${u}[role='button']:not(${u}-active):hover`]: {
                            [`${u}-title, ${u}-content`]: {
                                color: "var(--steps-item-text-hover-color)"
                            }
                        },
                        [`&:not(${t}-dot)`]: {
                            [`${u}:not(${u}-custom)`]: {
                                [`${u}-icon`]: {
                                    background: "var(--steps-item-icon-bg-color)",
                                    borderColor: "var(--steps-item-icon-border-color)",
                                    color: "var(--steps-item-icon-text-color)"
                                },
                                [`&[role='button']:not(${u}-active):hover`]: {
                                    [`${u}-icon`]: {
                                        background: "var(--steps-item-icon-bg-hover-color)",
                                        borderColor: "var(--steps-item-icon-border-hover-color)",
                                        color: "var(--steps-item-icon-text-hover-color)"
                                    }
                                },
                                [`&${u}-active`]: {
                                    [`${u}-icon`]: {
                                        background: "var(--steps-item-icon-active-bg-color)",
                                        borderColor: "var(--steps-item-icon-active-border-color)",
                                        color: "var(--steps-item-icon-active-text-color)"
                                    }
                                }
                            }
                        },
                        [`&${t}-dot`]: {
                            [`${u}-icon`]: {
                                background: "var(--steps-item-icon-dot-bg-color)",
                                borderColor: "var(--steps-item-icon-dot-border-color)",
                                color: "var(--steps-item-icon-dot-color)",
                                [`&${u}-icon-dot-custom`]: {
                                    background: "transparent",
                                    border: "none"
                                }
                            }
                        }
                    }, {
                        [`${u}-${iH}`]: {
                            "--steps-item-icon-custom-color": n,
                            "--steps-item-title-color": s,
                            "--steps-item-content-color": s,
                            "--steps-item-content-active-color": i,
                            "--steps-item-text-hover-color": d
                        },
                        [`${u}-rail-${iH}`]: {
                            "--steps-item-solid-line-color": n
                        },
                        [`${u}-${iP}`]: {
                            "--steps-item-icon-custom-color": r,
                            "--steps-item-title-color": i,
                            "--steps-item-content-color": s,
                            "--steps-item-content-active-color": i,
                            "--steps-item-text-hover-color": d
                        },
                        [`${u}-rail-${iP}`]: {
                            "--steps-item-solid-line-color": r,
                            "--steps-rail-line-style": "var(--steps-item-process-rail-line-style)"
                        },
                        [`${u}-${iL}`]: {
                            "--steps-item-icon-custom-color": r,
                            "--steps-item-title-color": i,
                            "--steps-item-content-color": s,
                            "--steps-item-content-active-color": i,
                            "--steps-item-text-hover-color": d
                        },
                        [`${u}-rail-${iL}`]: {
                            "--steps-item-solid-line-color": r
                        },
                        [`${u}-${iB}`]: {
                            "--steps-item-icon-custom-color": a,
                            "--steps-item-title-color": a,
                            "--steps-item-content-color": a,
                            "--steps-item-content-active-color": a,
                            "--steps-item-text-hover-color": e.colorErrorHover
                        },
                        [`${u}-rail-${iB}`]: {
                            "--steps-item-solid-line-color": a
                        }
                    }, {
                        [`&${t}-filled`]: {
                            [u]: {
                                "--steps-item-icon-dot-border-color": "transparent"
                            },
                            [`${u}-${iH}`]: {
                                "--steps-item-icon-bg-color": e.colorFillTertiary,
                                "--steps-item-icon-border-color": "transparent",
                                "--steps-item-icon-text-color": o,
                                "--steps-item-icon-dot-bg-color": n,
                                "--steps-item-icon-bg-hover-color": e.colorPrimaryBgHover,
                                "--steps-item-icon-border-hover-color": "transparent",
                                "--steps-item-icon-text-hover-color": r,
                                "--steps-item-icon-active-bg-color": r,
                                "--steps-item-icon-active-border-color": "transparent",
                                "--steps-item-icon-active-text-color": l
                            },
                            [`${u}-${iP}, ${u}-${iL}`]: {
                                "--steps-item-icon-bg-color": e.colorPrimaryBg,
                                "--steps-item-icon-border-color": "transparent",
                                "--steps-item-icon-text-color": r,
                                "--steps-item-icon-dot-bg-color": r,
                                "--steps-item-icon-bg-hover-color": e.colorPrimaryBgHover,
                                "--steps-item-icon-border-hover-color": "transparent",
                                "--steps-item-icon-text-hover-color": r,
                                "--steps-item-icon-active-bg-color": r,
                                "--steps-item-icon-active-border-color": "transparent",
                                "--steps-item-icon-active-text-color": l
                            },
                            [`${u}-${iB}`]: {
                                "--steps-item-icon-bg-color": e.colorErrorBg,
                                "--steps-item-icon-border-color": "transparent",
                                "--steps-item-icon-text-color": a,
                                "--steps-item-icon-dot-bg-color": a,
                                "--steps-item-icon-bg-hover-color": e.colorErrorBgFilledHover,
                                "--steps-item-icon-border-hover-color": "transparent",
                                "--steps-item-icon-text-hover-color": a,
                                "--steps-item-icon-active-bg-color": a,
                                "--steps-item-icon-active-border-color": "transparent",
                                "--steps-item-icon-active-text-color": l
                            }
                        }
                    }, {
                        [`&${t}-outlined`]: {
                            [u]: {
                                "--steps-item-icon-dot-bg-color": "transparent"
                            },
                            [`${u}-${iH}`]: {
                                "--steps-item-icon-bg-color": c,
                                "--steps-item-icon-border-color": n,
                                "--steps-item-icon-text-color": n,
                                "--steps-item-icon-dot-color": n,
                                "--steps-item-icon-bg-hover-color": "transparent",
                                "--steps-item-icon-border-hover-color": d,
                                "--steps-item-icon-text-hover-color": d,
                                "--steps-item-icon-active-bg-color": e.colorFillTertiary
                            },
                            [`${u}-${iP}, ${u}-${iL}`]: {
                                "--steps-item-icon-bg-color": c,
                                "--steps-item-icon-border-color": r,
                                "--steps-item-icon-text-color": r,
                                "--steps-item-icon-dot-color": r,
                                "--steps-item-icon-bg-hover-color": "transparent",
                                "--steps-item-icon-border-hover-color": e.colorPrimaryHover,
                                "--steps-item-icon-text-hover-color": e.colorPrimaryHover,
                                "--steps-item-icon-active-bg-color": e.colorPrimaryBg
                            },
                            [`${u}-${iB}`]: {
                                "--steps-item-icon-bg-color": c,
                                "--steps-item-icon-border-color": a,
                                "--steps-item-icon-text-color": a,
                                "--steps-item-icon-dot-color": a,
                                "--steps-item-icon-bg-hover-color": "transparent",
                                "--steps-item-icon-border-hover-color": e.colorErrorHover,
                                "--steps-item-icon-text-hover-color": e.colorErrorHover,
                                "--steps-item-icon-active-bg-color": e.colorErrorBg
                            }
                        }
                    }]
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    fontSizeIcon: n,
                    calc: l,
                    navContentMaxWidth: r,
                    navArrowColor: o,
                    colorPrimary: a,
                    motionDurationSlow: i
                } = e, s = `${t}-item`;
                return {
                    [`${t}${t}-navigation`]: {
                        [s.repeat(4)]: {
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                            flex: 1,
                            marginInlineStart: 0,
                            [`${s}-wrapper`]: {
                                paddingBlock: e.paddingSM
                            },
                            [`${s}-section`]: {
                                maxWidth: r
                            },
                            [`${s}-rail`]: {
                                display: "none"
                            },
                            "&:before": {
                                position: "absolute",
                                display: "block",
                                backgroundColor: a,
                                transition: `all ${i}`,
                                transitionTimingFunction: "ease-out",
                                content: '""'
                            },
                            "&:not(:last-child):after": {
                                position: "absolute",
                                display: "block",
                                borderTop: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${o}`,
                                borderBottom: "none",
                                borderInlineStart: "none",
                                borderInlineEnd: `${(0,v.unit)(e.lineWidth)} ${e.lineType} ${o}`,
                                content: '""'
                            },
                            [`&${s}-active`]: {
                                "--steps-item-content-active-color": "var(--steps-item-content-color)",
                                "--steps-item-icon-active-bg-color": "var(--steps-item-icon-bg-color)",
                                "--steps-item-icon-active-border-color": "var(--steps-item-icon-border-color)",
                                "--steps-item-icon-active-text-color": "var(--steps-item-icon-text-color)"
                            }
                        },
                        [`&${t}-horizontal`]: {
                            [s]: {
                                "&:before": {
                                    bottom: 0,
                                    insetInlineStart: "50%",
                                    width: 0,
                                    height: e.lineWidthBold
                                },
                                [`&${s}-active:before`]: {
                                    insetInlineStart: 0,
                                    width: "100%"
                                },
                                "&:not(:last-child):after": {
                                    top: "50%",
                                    insetInlineStart: l(n).div(2).mul(-1).add("100%").equal(),
                                    width: n,
                                    height: n,
                                    transform: "translateY(-50%) rotate(45deg)"
                                }
                            }
                        },
                        [`&${t}-vertical`]: {
                            [s.repeat(4)]: {
                                [`${s}-content`]: {
                                    padding: 0
                                },
                                "&:before": {
                                    insetInlineEnd: 0,
                                    top: "50%",
                                    width: e.lineWidthBold,
                                    height: 0
                                },
                                [`&${s}-active::before`]: {
                                    top: 0,
                                    height: "100%"
                                },
                                "&:not(:last-child):after": {
                                    left: {
                                        _skip_check_: !0,
                                        value: "50%"
                                    },
                                    top: "100%",
                                    width: l(n).div(3).mul(2).equal(),
                                    height: l(n).div(3).mul(2).equal(),
                                    transform: "translateY(-50%) translateX(-50%) rotate(135deg)"
                                }
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    calc: n,
                    lineWidthBold: l,
                    borderRadius: r,
                    borderRadiusSM: o,
                    motionDurationMid: a
                } = e, i = `${t}-item`, s = `${(0,v.unit)(l)} ${e.lineType} var(--steps-panel-border-color)`;
                return {
                    [`${t}${t}-panel`]: [{
                        [`${i}-rail`]: {
                            display: "none"
                        },
                        [`&${t}-horizontal`]: {
                            alignItems: "stretch",
                            [i]: {
                                flex: 1,
                                margin: 0
                            }
                        }
                    }, {
                        "&": {
                            "--steps-panel-padding": e.paddingSM,
                            "--steps-item-border-radius": r,
                            [i]: {
                                "--steps-panel-bg-color": "var(--steps-item-icon-bg-color)",
                                "--steps-panel-border-color": "var(--steps-item-icon-border-color)",
                                "--steps-panel-active-bg-color": "var(--steps-item-icon-active-bg-color)",
                                "--steps-panel-active-border-color": "var(--steps-item-icon-active-border-color)",
                                "--steps-panel-title-height": "calc(var(--steps-title-font-size) * var(--steps-title-line-height))",
                                "--steps-item-base-height": n("var(--steps-panel-padding)").mul(2).add("var(--steps-icon-size)").add("var(--steps-panel-title-height)").equal(),
                                "--steps-item-base-width": "calc(var(--steps-item-base-height) * 0.7071)",
                                transition: `background ${a}`
                            }
                        },
                        [`${i}-icon`]: {
                            display: "none"
                        },
                        [`${i}-header`]: {
                            minHeight: "auto"
                        },
                        [`${t}-panel-arrow`]: {
                            position: "absolute",
                            top: n(l).mul(-1).equal(),
                            insetInlineStart: "100%",
                            zIndex: 1,
                            height: n(l).mul(2).add("100%").equal(),
                            width: "var(--steps-item-base-width)",
                            overflow: "visible",
                            strokeLinecap: "round",
                            path: {
                                fill: "var(--steps-panel-bg-color)",
                                stroke: "var(--steps-panel-border-color)",
                                strokeWidth: l,
                                vectorEffect: "non-scaling-stroke",
                                transition: `fill ${a}`
                            }
                        },
                        [`${i}:last-child ${t}-panel-arrow`]: {
                            display: "none"
                        },
                        [i]: {
                            padding: "var(--steps-panel-padding)",
                            background: "var(--steps-panel-bg-color)",
                            position: "relative",
                            borderBlock: s,
                            "&:not(:first-child)": {
                                paddingInlineStart: "calc(var(--steps-panel-padding) + var(--steps-item-base-width))"
                            },
                            "&:first-child": {
                                borderInlineStart: s,
                                borderStartStartRadius: "var(--steps-item-border-radius)",
                                borderEndStartRadius: "var(--steps-item-border-radius)"
                            },
                            "&:last-child": {
                                borderInlineEnd: s,
                                borderStartEndRadius: "var(--steps-item-border-radius)",
                                borderEndEndRadius: "var(--steps-item-border-radius)"
                            },
                            "&-active": {
                                background: "var(--steps-panel-active-bg-color)",
                                borderColor: "var(--steps-panel-active-border-color)",
                                [`${t}-panel-arrow`]: {
                                    path: {
                                        fill: "var(--steps-panel-active-bg-color)",
                                        stroke: "var(--steps-panel-active-border-color)"
                                    }
                                },
                                [`${i}-title, ${i}-subtitle, ${i}-content`]: {
                                    color: "var(--steps-item-icon-active-text-color)"
                                }
                            }
                        }
                    }, {
                        [`&${t}-small`]: {
                            "--steps-panel-padding": e.paddingXS,
                            "--steps-item-border-radius": o
                        }
                    }, {
                        [`&${t}-filled`]: {
                            [i]: {
                                "&:not(:first-child)": {
                                    clipPath: `polygon(${(0,v.unit)(l)} 0,calc(100% + var(--steps-item-base-width)) 0,calc(100% + var(--steps-item-base-width)) 100%,${(0,v.unit)(l)} 100%,calc(var(--steps-item-base-width) + ${(0,v.unit)(l)}) 50%)`
                                }
                            }
                        }
                    }, {
                        [`&${t}-outlined`]: {
                            [`${t}-panel-arrow`]: {
                                top: n(l).div(2).mul(-1).equal(),
                                height: n(l).add("100%").equal()
                            }
                        }
                    }]
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    inlineDotSize: n
                } = e, l = e.calc(e.paddingXS).add(e.lineWidth).equal(), r = `${t}-item`;
                return {
                    [`${t}-inline`]: {
                        "--steps-items-offset": "0",
                        "--steps-item-wrapper-padding-top": l,
                        display: "inline-flex",
                        "&:before": {
                            content: '""',
                            flex: "var(--steps-items-offset)"
                        },
                        [r]: {
                            "--steps-title-vertical-row-gap": e.paddingXS,
                            "--steps-icon-size": n,
                            "--steps-icon-size-active": n,
                            "--steps-title-font-size": e.fontSizeSM,
                            "--steps-title-line-height": e.lineHeightSM,
                            "--steps-item-title-color": e.colorTextSecondary,
                            "--steps-subtitle-font-size": e.fontSizeSM,
                            "--steps-subtitle-line-height": e.lineHeightSM,
                            "--steps-item-subtitle-color": e.colorTextQuaternary,
                            "--steps-rail-size": e.lineWidth,
                            "--steps-title-horizontal-rail-gap": "0px",
                            flex: 1,
                            "&-wrapper": {
                                paddingInline: e.paddingXXS,
                                marginInline: e.calc(e.marginXXS).div(2).equal(),
                                borderRadius: e.borderRadiusSM,
                                cursor: "pointer",
                                transition: `background ${e.motionDurationMid}`,
                                "&:hover": {
                                    background: e.controlItemBgHover
                                }
                            },
                            "&-icon": {
                                [`${r}-icon-dot`]: {
                                    "&:after": {
                                        display: "none"
                                    }
                                }
                            },
                            "&-title": {
                                fontWeight: "normal",
                                whiteSpace: "nowrap"
                            },
                            "&-content": {
                                display: "none"
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    calc: t,
                    antCls: n,
                    componentCls: l,
                    iconSize: r,
                    iconSizeSM: o,
                    lineWidthBold: a,
                    paddingXXS: i
                } = e, s = `${l}-item`, c = e.calc(r).add(e.calc(a).mul(4).equal()).equal(), d = e.calc(o).add(e.calc(e.lineWidth).mul(4).equal()).equal(), u = t(a).add(a).equal();
                return {
                    [`${l}${l}-with-progress`]: {
                        "--steps-item-wrapper-padding-top": u,
                        [`${s}${s}-process`]: {
                            [`${s}-icon`]: {
                                position: "relative"
                            }
                        },
                        [`${s}-progress-icon`]: {
                            "&-svg": {
                                "--steps-svg-size": t(u).mul(2).add("var(--steps-icon-size)").equal(),
                                "--icon-size-ptg-unitless": "calc(100 / tan(atan2(var(--steps-svg-size),1px)))",
                                fontSize: "var(--steps-svg-size)",
                                lineHeight: "var(--icon-size-ptg-unitless)",
                                position: "absolute",
                                inset: t(u).mul(-1).equal(),
                                width: "auto",
                                height: "auto"
                            },
                            "&-circle": {
                                lineHeight: "var(--icon-size-ptg-unitless)",
                                strokeWidth: t("var(--icon-size-ptg-unitless)").mul(a).equal(),
                                "--progress-r": t("var(--steps-svg-size)").sub(a).mul("var(--icon-size-ptg-unitless)").div(2).equal(),
                                r: "var(--progress-r)",
                                fill: "none",
                                cx: 50,
                                cy: 50,
                                transition: `all ${e.motionDurationSlow} ease-in-out`,
                                "&-rail": {
                                    stroke: e.colorSplit
                                },
                                "&-ptg": {
                                    stroke: e.colorPrimary
                                }
                            }
                        }
                    },
                    [`&${l}-with-progress11`]: {
                        [s]: {
                            paddingTop: i,
                            paddingInlineStart: i
                        },
                        [`${s}-icon`]: {
                            position: "relative",
                            [`${n}-progress`]: {
                                position: "absolute",
                                left: {
                                    _skip_check_: !0,
                                    value: "50%"
                                },
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                "&-body": {
                                    width: `${(0,v.unit)(c)} !important`,
                                    height: `${(0,v.unit)(c)} !important`
                                }
                            }
                        },
                        [`&${l}-small`]: {
                            [`${s}-icon ${n}-progress-body`]: {
                                width: `${(0,v.unit)(d)} !important`,
                                height: `${(0,v.unit)(d)} !important`
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    lineWidthBold: n
                } = e, l = `${t}-item`;
                return {
                    [`${t}${t}-rtl`]: {
                        direction: "rtl",
                        [`&${t}-navigation${t}-horizontal`]: {
                            [`${l}:after`]: {
                                transform: "translateY(-50%) rotate(-45deg)"
                            }
                        },
                        [`&${t}-panel`]: {
                            [`${t}-panel-arrow`]: {
                                transform: "scaleX(-1)"
                            },
                            [`&${t}-filled`]: {
                                [l]: {
                                    "&:not(:first-child)": {
                                        clipPath: `polygon(calc(0px - var(--steps-item-base-width)) 0px,calc(100% - ${(0,v.unit)(n)}) 0px,calc(100% - var(--steps-item-base-width) - ${(0,v.unit)(n)}) 50%,calc(100% - ${(0,v.unit)(n)}) 100%,calc(0px - var(--steps-item-base-width)) 100%)`
                                    }
                                }
                            }
                        }
                    }
                }
            })(t)]
        }, e => ({
            titleLineHeight: e.controlHeight,
            customIconSize: e.controlHeight,
            customIconTop: 0,
            customIconFontSize: e.controlHeightSM,
            iconSize: e.controlHeight,
            iconTop: -.5,
            iconFontSize: e.fontSize,
            iconSizeSM: e.fontSizeHeading3,
            dotSize: e.controlHeight / 4,
            dotCurrentSize: e.controlHeightLG / 4,
            navArrowColor: e.colorTextDisabled,
            navContentMaxWidth: "unset",
            descriptionMaxWidth: void 0,
            waitIconColor: e.wireframe ? e.colorTextDisabled : e.colorTextLabel,
            waitIconBgColor: e.wireframe ? e.colorBgContainer : e.colorFillContent,
            waitIconBorderColor: e.wireframe ? e.colorTextDisabled : "transparent",
            finishIconBgColor: e.wireframe ? e.colorBgContainer : e.controlItemBgActive,
            finishIconBorderColor: e.wireframe ? e.colorPrimary : e.controlItemBgActive
        })),
        iO = {
            itemIcon: iI.TARGET_CLS
        },
        iW = e => {
            let t, n, {
                    size: r,
                    className: o,
                    rootClassName: i,
                    style: s,
                    variant: c = "filled",
                    type: d,
                    classNames: u,
                    styles: f,
                    direction: g,
                    orientation: v,
                    responsive: b = !0,
                    progressDot: y,
                    labelPlacement: $,
                    titlePlacement: x,
                    ellipsis: S,
                    offset: C = 0,
                    items: k,
                    percent: E,
                    current: w = 0,
                    onChange: N,
                    iconRender: I,
                    ...M
                } = e,
                z = l.useContext(iM),
                R = (0, h.useComponentConfig)("steps"),
                {
                    getPrefixCls: T,
                    direction: H,
                    className: P,
                    style: L
                } = R,
                B = {};
            z ? B = {
                root: z.rootComponent,
                item: z.itemComponent
            } : {
                classNames: t,
                styles: n
            } = R;
            let A = T("steps", e.prefixCls),
                O = `${A}-item-icon`,
                [W, D] = iA(A),
                F = (0, lv.default)(r),
                _ = l.useMemo(() => (k || []).filter(Boolean), [k]),
                {
                    xs: j
                } = (0, rA.default)(b),
                X = l.useMemo(() => d && "default" !== d ? d : y ? "dot" : d, [y, d]),
                q = "inline" === X,
                V = "dot" === X || "inline" === X,
                G = l.useMemo(() => "dot" === X && "function" == typeof y ? y : void 0, [X, y]),
                Y = l.useMemo(() => {
                    let e = v || g;
                    return "panel" === X ? "horizontal" : b && j || "vertical" === e ? "vertical" : "horizontal"
                }, [v, g, X, b, j]),
                U = l.useMemo(() => V || "vertical" === Y ? "vertical" === Y ? "horizontal" : "vertical" : "navigation" === d ? "horizontal" : x || $ || "horizontal", [V, $, Y, x, d]),
                K = q ? void 0 : E,
                Q = { ...e,
                    variant: c,
                    size: F,
                    type: X,
                    orientation: Y,
                    titlePlacement: U,
                    current: w,
                    percent: K,
                    responsive: b,
                    offset: C
                },
                [Z, J] = (0, m.useMergeSemantic)([iO, t, u], [n, f], {
                    props: Q
                }),
                ee = "panel" === X ? e => l.createElement(l.Fragment, null, e, l.createElement(iz, {
                    prefixCls: A
                })) : void 0,
                et = {
                    "--steps-items-offset": `${C}`,
                    ...L,
                    ...s
                },
                en = (0, p.clsx)(P, `${A}-${c}`, {
                    [`${A}-${X}`]: "dot" !== X && X,
                    [`${A}-rtl`]: "rtl" === H,
                    [`${A}-dot`]: V,
                    [`${A}-ellipsis`]: S,
                    [`${A}-with-progress`]: void 0 !== K,
                    [`${A}-${F}`]: F
                }, o, i, W, D);
            return l.createElement(iw, { ...M,
                prefixCls: A,
                className: en,
                style: et,
                classNames: Z,
                styles: J,
                orientation: Y,
                titlePlacement: U,
                components: B,
                current: w,
                items: _,
                onChange: N,
                iconRender: (e, t) => {
                    let {
                        item: n,
                        index: r,
                        active: o,
                        components: {
                            Icon: i
                        }
                    } = t, {
                        status: s,
                        icon: c
                    } = n, d = null;
                    if (V || c) d = c;
                    else switch (s) {
                        case "finish":
                            d = l.createElement(ig.default, {
                                className: `${O}-finish`
                            });
                            break;
                        case "error":
                            d = l.createElement(a.default, {
                                className: `${O}-error`
                            });
                            break;
                        default:
                            {
                                let e = l.createElement("span", {
                                    className: `${O}-number`
                                }, t.index + 1);
                                "process" === s && void 0 !== K && (e = l.createElement(iR, {
                                    prefixCls: A,
                                    percent: K
                                }, e)),
                                d = e
                            }
                    }
                    let u = l.createElement(i, null, d);
                    return I ? u = I(u, {
                        index: r,
                        active: o,
                        item: n,
                        components: {
                            Icon: i
                        }
                    }) : "function" == typeof G && (u = G(u, {
                        index: r,
                        ...n
                    })), u
                },
                itemRender: (e, t) => {
                    let n = e;
                    return q && t.item.content && (n = l.createElement(l5.default, {
                        destroyOnHidden: !0,
                        title: t.item.content
                    }, e)), l.createElement(iN.default, {
                        component: "Steps",
                        disabled: t.item.disabled || !N,
                        colorSource: "filled" === c ? "color" : null
                    }, n)
                },
                itemWrapperRender: ee
            })
        };
    var iD = e.i(715168),
        iF = e.i(221479),
        i_ = e.i(721369),
        ij = e.i(746885),
        iX = e.i(40312),
        iq = e.i(110422);
    let {
        TimePicker: iV,
        RangePicker: iG
    } = rL.default, iY = l.forwardRef((e, t) => l.createElement(iG, { ...e,
        picker: "time",
        mode: void 0,
        ref: t
    })), iU = l.forwardRef((e, t) => {
        let {
            addon: n,
            renderExtraFooter: r,
            variant: o,
            bordered: a,
            classNames: i,
            styles: s,
            popupClassName: c,
            popupStyle: d,
            ...u
        } = e, [p] = (0, lb.default)("timePicker", o, a), m = l.useMemo(() => r || n || void 0, [n, r]), f = { ...e,
            variant: p
        }, [g, h] = (0, iq.default)("timePicker", i, s, c, d, f);
        return l.createElement(iV, { ...u,
            mode: void 0,
            ref: t,
            renderExtraFooter: m,
            variant: p,
            classNames: g,
            styles: h
        })
    }), iK = (0, eF.default)(iU, "popupAlign", void 0, "picker");
    iU._InternalPanelDoNotUseOrYouWillBeFired = iK, iU.RangePicker = iY, iU._InternalPanelDoNotUseOrYouWillBeFired = iK;
    let iQ = (0, y.genStyleHooks)("Timeline", e => {
            let t = (0, F.mergeToken)(e, {
                itemHeadSize: 10,
                customHeadPaddingVertical: e.paddingXXS,
                paddingInlineEnd: 2
            });
            return [(e => {
                let {
                    componentCls: t,
                    tailColor: n
                } = e, l = `${t}-item`;
                return {
                    [t]: [{ ...(0, b.resetComponent)(e),
                        [l]: {
                            "--steps-title-horizontal-title-height": e.fontHeight,
                            "--steps-vertical-rail-margin": "0px",
                            "--steps-title-horizontal-rail-gap": "0px",
                            "--steps-icon-dot-size-origin": "var(--steps-icon-size-active)",
                            "--steps-icon-dot-size-custom": e.dotSize,
                            "--steps-item-icon-dot-bg-color-origin": "var(--steps-item-icon-dot-bg-color)",
                            "--steps-item-icon-dot-bg-color-custom": e.dotBg,
                            "--steps-icon-size": "var(--steps-icon-dot-size-custom, var(--steps-icon-dot-size-origin))",
                            [`${l}-icon`]: {
                                "--steps-dot-icon-border-width": e.dotBorderWidth,
                                "--steps-dot-icon-size": "var(--steps-icon-size)",
                                "--steps-item-icon-dot-bg-color": "var(--steps-item-icon-dot-bg-color-custom, var(--steps-item-icon-dot-bg-color-origin))"
                            },
                            [`${l}-title`]: {
                                fontSize: e.fontSize,
                                lineHeight: e.lineHeight
                            },
                            [`${l}-content`]: {
                                color: e.colorText
                            },
                            [`${l}-rail`]: {
                                "--steps-item-solid-line-color": n,
                                "--steps-rail-size": e.tailWidth
                            }
                        }
                    }, {
                        [l]: {
                            "--steps-item-process-rail-line-style": "dotted"
                        },
                        [`${l}${l}${l}-color`]: {
                            "&-blue": {
                                "--steps-item-icon-dot-color": e.colorPrimary
                            },
                            "&-red": {
                                "--steps-item-icon-dot-color": e.colorError
                            },
                            "&-green": {
                                "--steps-item-icon-dot-color": e.colorSuccess
                            },
                            "&-gray": {
                                "--steps-item-icon-dot-color": e.colorTextDisabled
                            }
                        }
                    }]
                }
            })(t), (e => {
                let {
                    calc: t,
                    componentCls: n,
                    itemPaddingBottom: l
                } = e, r = `${n}-item`;
                return {
                    [`${n}:not(${n}-horizontal)`]: {
                        "--timeline-head-span": "12",
                        "--timeline-head-span-ptg": "calc(var(--timeline-head-span) / 24 * 100%)",
                        [`&${n}-layout-alternate`]: {
                            [r]: {
                                "--timeline-alternate-gap": t(e.margin).mul(2).add("var(--steps-dot-icon-size)").equal(),
                                minHeight: "auto",
                                paddingBottom: l,
                                [`${r}-icon, ${r}-rail`]: {
                                    position: "absolute",
                                    insetInlineStart: "var(--timeline-head-span-ptg)"
                                },
                                [`${r}-icon`]: {
                                    marginInlineStart: "calc(var(--steps-icon-size) / -2)"
                                },
                                [`${r}-section`]: {
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    gap: "var(--timeline-alternate-gap)"
                                },
                                [`${r}-header`]: {
                                    textAlign: "end",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                    flex: "1 1 calc(var(--timeline-head-span-ptg) - var(--timeline-alternate-gap) / 2)"
                                },
                                [`${r}-content`]: {
                                    textAlign: "start",
                                    flex: "1 1 calc(100% - var(--timeline-head-span-ptg) - var(--timeline-alternate-gap) / 2)"
                                },
                                "&-placement-end": {
                                    [`${r}-header`]: {
                                        textAlign: "start",
                                        order: 1
                                    },
                                    [`${r}-content`]: {
                                        textAlign: "end"
                                    },
                                    [`${r}-icon, ${r}-rail`]: {
                                        insetInlineStart: "calc(100% - var(--timeline-head-span-ptg))"
                                    }
                                }
                            }
                        },
                        [`&:not(${n}-layout-alternate)`]: {
                            [`${r}-placement-end`]: {
                                textAlign: "end",
                                [`${r}-icon`]: {
                                    order: 1
                                },
                                [`${r}-rail`]: {
                                    insetInlineStart: "auto",
                                    insetInlineEnd: "calc(var(--steps-icon-size) / 2)",
                                    marginInlineEnd: "calc(var(--steps-rail-size) / -2)"
                                }
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    fontHeight: n
                } = e, l = `${t}-item`;
                return {
                    [`${t}-horizontal`]: {
                        "--steps-title-vertical-row-gap": e.paddingXS,
                        "--timeline-content-height": `${(0,v.unit)(n)}`,
                        alignItems: "stretch",
                        [`&${t}-layout-alternate`]: {
                            [l]: {
                                [`${l}-wrapper`]: {
                                    "--timeline-alternate-content-offset": "calc(var(--timeline-content-height) + var(--steps-title-vertical-row-gap) * 2 + var(--steps-icon-size-max))",
                                    height: "calc(var(--timeline-content-height) * 2 + var(--steps-title-vertical-row-gap) * 2 + var(--steps-icon-size-max))"
                                },
                                [`${l}-icon`]: {
                                    position: "absolute"
                                },
                                [`${l}-icon, ${l}-rail`]: {
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    margin: 0
                                },
                                [`${l}-title, ${l}-subtitle, ${l}-content`]: {
                                    whiteSpace: "nowrap",
                                    maxWidth: "unset"
                                },
                                [`${l}-title`]: {
                                    position: "absolute",
                                    left: {
                                        _skip_check_: !0,
                                        value: "50%"
                                    },
                                    transform: "translateX(-50%)"
                                },
                                [`${l}-content`]: {
                                    position: "absolute",
                                    left: {
                                        _skip_check_: !0,
                                        value: "50%"
                                    },
                                    transform: "translateX(-50%)"
                                },
                                "&-placement-start": {
                                    [`${l}-title`]: {
                                        bottom: "var(--timeline-alternate-content-offset)"
                                    },
                                    [`${l}-content`]: {
                                        top: "var(--timeline-alternate-content-offset)"
                                    }
                                },
                                "&-placement-end": {
                                    [`${l}-title`]: {
                                        top: "var(--timeline-alternate-content-offset)"
                                    },
                                    [`${l}-content`]: {
                                        bottom: "var(--timeline-alternate-content-offset)"
                                    }
                                }
                            }
                        },
                        [`&:not(${t}-layout-alternate)`]: {
                            [`${l}-placement-end`]: {
                                display: "flex",
                                alignItems: "flex-end",
                                [`${l}-wrapper`]: {
                                    flex: "auto",
                                    flexDirection: "column-reverse"
                                },
                                [`${l}-rail`]: {
                                    top: "auto",
                                    bottom: "var(--steps-horizontal-rail-margin)",
                                    transform: "translateY(50%)"
                                }
                            }
                        }
                    }
                }
            })(t)]
        }, e => ({
            tailColor: e.colorSplit,
            tailWidth: e.lineWidthBold,
            dotBorderWidth: e.lineWidthBold,
            dotBg: void 0,
            dotSize: void 0,
            itemPaddingBottom: 1.25 * e.padding
        })),
        iZ = {
            rootComponent: "ol",
            itemComponent: "li"
        },
        iJ = e => {
            let t, n, {
                    getPrefixCls: r,
                    direction: o,
                    className: a,
                    style: i,
                    classNames: s,
                    styles: c
                } = (0, h.useComponentConfig)("timeline"),
                {
                    prefixCls: d,
                    className: u,
                    style: f,
                    classNames: g,
                    styles: v,
                    variant: b = "outlined",
                    mode: y,
                    orientation: $ = "vertical",
                    titleSpan: x,
                    items: S,
                    children: C,
                    reverse: k,
                    pending: E,
                    pendingDot: w,
                    ...N
                } = e,
                I = r("timeline", d),
                [M, z] = iQ(I),
                R = l.useMemo(() => ({
                    item: `${I}-item`,
                    itemTitle: `${I}-item-title`,
                    itemIcon: `${I}-item-icon`,
                    itemContent: `${I}-item-content`,
                    itemRail: `${I}-item-rail`,
                    itemWrapper: `${I}-item-wrapper`,
                    itemSection: `${I}-item-section`,
                    itemHeader: `${I}-item-header`
                }), [I]),
                T = l.useMemo(() => "left" === y ? "start" : "right" === y ? "end" : ["alternate", "start", "end"].includes(y) ? y : "start", [y]),
                P = (t = `${I}-item`, n = l.useMemo(() => Array.isArray(S) ? S : (0, ej.toArray)(C).map(e => ({ ...e.props
                })), [S, C]), l.useMemo(() => {
                    let e = n.map((e, n) => {
                        let {
                            label: r,
                            children: o,
                            title: a,
                            content: i,
                            color: s,
                            className: c,
                            style: d,
                            icon: u,
                            dot: m,
                            placement: f,
                            position: g,
                            loading: h,
                            ...v
                        } = e, b = d, y = c;
                        s && (["blue", "red", "green", "gray"].includes(s) ? y = (0, p.clsx)(c, `${t}-color-${s}`) : b = {
                            "--steps-item-icon-dot-color": s,
                            ...d
                        });
                        let $ = f ? ? g ? ? ("alternate" === T ? n % 2 == 0 ? "start" : "end" : T);
                        y = (0, p.clsx)(y, `${t}-placement-${$}`);
                        let x = u ? ? m;
                        return !x && h && (x = l.createElement(ei.default, null)), { ...v,
                            title: a ? ? r,
                            content: i ? ? o,
                            style: b,
                            className: y,
                            icon: x,
                            status: h ? "process" : "finish"
                        }
                    });
                    return E && e.push({
                        icon: w ? ? l.createElement(ei.default, null),
                        content: E,
                        status: "process"
                    }), e
                }, [n, E, w, t, T])),
                L = l.useMemo(() => k ? (0, H.default)(P).reverse() : P, [k, P]),
                B = { ...e,
                    variant: b,
                    mode: T,
                    orientation: $,
                    items: L
                },
                [A, O] = (0, m.useMergeSemantic)([R, s, g], [c, v], {
                    props: B
                }),
                W = l.useMemo(() => ({
                    railFollowPrevStatus: k
                }), [k]),
                D = l.useMemo(() => "alternate" === T || "vertical" === $ && L.some(e => e.title), [L, T, $]),
                F = { ...i,
                    ...f
                };
            return x && "alternate" !== T && ("number" == typeof x ? F["--timeline-head-span"] = x : F["--timeline-head-span-ptg"] = x), l.createElement(iM.Provider, {
                value: iZ
            }, l.createElement(iv.Provider, {
                value: W
            }, l.createElement(iW, { ...N,
                className: (0, p.clsx)(I, a, u, M, z, {
                    [`${I}-${$}`]: "horizontal" === $,
                    [`${I}-layout-alternate`]: D,
                    [`${I}-rtl`]: "rtl" === o
                }),
                style: F,
                classNames: A,
                styles: O,
                variant: b,
                orientation: $,
                type: "dot",
                items: L,
                current: L.length - 1
            })))
        };

    function i0(e) {
        return null !== e && "object" == typeof e
    }

    function i1(e, t, n) {
        if (!1 === e || !1 === t && (!i0(e) || !e.closeIcon)) return null;
        let l = "boolean" != typeof t ? t : void 0;
        return i0(e) ? { ...e,
            closeIcon: e.closeIcon ? ? l
        } : n || e || t ? {
            closeIcon: l
        } : "empty"
    }
    iJ.Item = () => {};
    var i2 = e.i(951160);

    function i3() {
        return (i3 = Object.assign.bind()).apply(this, arguments)
    }
    let i5 = {
            fill: "transparent",
            pointerEvents: "auto"
        },
        i4 = e => {
            let {
                prefixCls: t,
                rootClassName: n,
                pos: r,
                showMask: o,
                style: a = {},
                fill: i = "rgba(0,0,0,0.5)",
                open: s,
                animated: c,
                zIndex: d,
                disabledInteraction: u,
                styles: m,
                classNames: f,
                getPopupContainer: g
            } = e, h = (0, nA.default)(), v = `${t}-mask-${h}`, b = "object" == typeof c ? c ? .placeholder : c, y = "undefined" != typeof navigator && /^((?!chrome|android).)*safari/i.test(navigator.userAgent), $ = !1 === g;
            return l.default.createElement(i2.default, {
                open: s,
                autoLock: !$,
                getContainer: g
            }, l.default.createElement("div", {
                className: (0, p.clsx)(`${t}-mask`, n, f ? .mask),
                style: {
                    position: $ ? "absolute" : "fixed",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: d,
                    pointerEvents: r && !u ? "none" : "auto",
                    ...a,
                    ...m ? .mask
                }
            }, o ? l.default.createElement("svg", {
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, l.default.createElement("defs", null, l.default.createElement("mask", {
                id: v
            }, l.default.createElement("rect", i3({
                x: "0",
                y: "0"
            }, y ? {
                width: "100%",
                height: "100%"
            } : {
                width: "100vw",
                height: "100vh"
            }, {
                fill: "white"
            })), r && l.default.createElement("rect", {
                x: r.left,
                y: r.top,
                rx: r.radius,
                width: r.width,
                height: r.height,
                fill: "black",
                className: b ? `${t}-placeholder-animated` : ""
            }))), l.default.createElement("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: i,
                mask: `url(#${v})`
            }), r && l.default.createElement(l.default.Fragment, null, l.default.createElement("rect", i3({}, i5, {
                x: "0",
                y: "0",
                width: "100%",
                height: Math.max(r.top, 0)
            })), l.default.createElement("rect", i3({}, i5, {
                x: "0",
                y: "0",
                width: Math.max(r.left, 0),
                height: "100%"
            })), l.default.createElement("rect", i3({}, i5, {
                x: "0",
                y: r.top + r.height,
                width: "100%",
                height: `calc(100% - ${r.top+r.height}px)`
            })), l.default.createElement("rect", i3({}, i5, {
                x: r.left + r.width,
                y: "0",
                width: `calc(100% - ${r.left+r.width}px)`,
                height: "100%"
            })))) : null))
        },
        i8 = [0, 0],
        i6 = {
            left: {
                points: ["cr", "cl"],
                offset: [-8, 0]
            },
            right: {
                points: ["cl", "cr"],
                offset: [8, 0]
            },
            top: {
                points: ["bc", "tc"],
                offset: [0, -8]
            },
            bottom: {
                points: ["tc", "bc"],
                offset: [0, 8]
            },
            topLeft: {
                points: ["bl", "tl"],
                offset: [0, -8]
            },
            leftTop: {
                points: ["tr", "tl"],
                offset: [-8, 0]
            },
            topRight: {
                points: ["br", "tr"],
                offset: [0, -8]
            },
            rightTop: {
                points: ["tl", "tr"],
                offset: [8, 0]
            },
            bottomRight: {
                points: ["tr", "br"],
                offset: [0, 8]
            },
            rightBottom: {
                points: ["bl", "br"],
                offset: [8, 0]
            },
            bottomLeft: {
                points: ["tl", "bl"],
                offset: [0, 8]
            },
            leftBottom: {
                points: ["br", "bl"],
                offset: [-8, 0]
            }
        };

    function i9(e = !1) {
        let t = {};
        return Object.keys(i6).forEach(n => {
            t[n] = { ...i6[n],
                autoArrow: e,
                targetOffset: i8
            }
        }), t
    }

    function i7() {
        return (i7 = Object.assign.bind()).apply(this, arguments)
    }

    function se(e) {
        let {
            prefixCls: t,
            current: n,
            total: r,
            title: o,
            description: a,
            onClose: i,
            onPrev: s,
            onNext: c,
            onFinish: u,
            className: m,
            closable: f,
            classNames: g,
            styles: h
        } = e, v = (0, d.default)(f || {}, !0), b = f ? .closeIcon ? ? l.createElement("span", {
            className: `${t}-close-x`
        }, "×"), y = !!f;
        return l.createElement("div", {
            className: (0, p.clsx)(`${t}-panel`, m)
        }, l.createElement("div", {
            className: (0, p.clsx)(`${t}-section`, g ? .section),
            style: h ? .section
        }, y && l.createElement("button", i7({
            type: "button",
            onClick: i,
            "aria-label": "Close"
        }, v, {
            className: `${t}-close`
        }), b), l.createElement("div", {
            className: (0, p.clsx)(`${t}-header`, g ? .header),
            style: h ? .header
        }, l.createElement("div", {
            className: (0, p.clsx)(`${t}-title`, g ? .title),
            style: h ? .title
        }, o)), l.createElement("div", {
            className: (0, p.clsx)(`${t}-description`, g ? .description),
            style: h ? .description
        }, a), l.createElement("div", {
            className: (0, p.clsx)(`${t}-footer`, g ? .footer),
            style: h ? .footer
        }, l.createElement("div", {
            className: `${t}-sliders`
        }, r > 1 ? [...Array.from({
            length: r
        }).keys()].map((e, t) => l.createElement("span", {
            key: e,
            className: t === n ? "active" : ""
        })) : null), l.createElement("div", {
            className: (0, p.clsx)(`${t}-actions`, g ? .actions),
            style: h ? .actions
        }, 0 !== n ? l.createElement("button", {
            className: `${t}-prev-btn`,
            onClick: s
        }, "Prev") : null, n === r - 1 ? l.createElement("button", {
            className: `${t}-finish-btn`,
            onClick: u
        }, "Finish") : l.createElement("button", {
            className: `${t}-next-btn`,
            onClick: c
        }, "Next")))))
    }
    i9();
    let st = e => {
            let {
                current: t,
                renderPanel: n
            } = e;
            return l.createElement(l.Fragment, null, "function" == typeof n ? n(e, t) : l.createElement(se, e))
        },
        sn = l.forwardRef((e, t) => {
            let {
                open: n,
                autoLock: r,
                getContainer: o,
                domRef: a,
                className: i,
                style: s,
                fallbackDOM: c
            } = e;
            return l.useImperativeHandle(t, () => a.current || c()), l.createElement(i2.default, {
                open: n,
                autoLock: r,
                getContainer: o
            }, l.createElement("div", {
                ref: a,
                className: i,
                style: s
            }))
        });

    function sl() {
        return (sl = Object.assign.bind()).apply(this, arguments)
    }
    let sr = {
            left: "50%",
            top: "50%",
            width: 1,
            height: 1
        },
        so = {
            block: "center",
            inline: "center"
        },
        sa = e => {
            let {
                prefixCls: t = "rc-tour",
                steps: n = [],
                defaultCurrent: r,
                current: o,
                onChange: a,
                onClose: i,
                onFinish: s,
                open: c,
                defaultOpen: d,
                mask: u = !0,
                arrow: m = !0,
                rootClassName: f,
                placement: g,
                renderPanel: h,
                gap: v,
                animated: b,
                scrollIntoViewOptions: y = so,
                zIndex: $ = 1001,
                closeIcon: x,
                closable: S,
                builtinPlacements: C,
                disabledInteraction: k,
                styles: E,
                classNames: w,
                className: N,
                style: I,
                getPopupContainer: M,
                ...z
            } = e, R = l.useRef(), [T, H] = (0, nW.default)(r || 0, o), [P, L] = (0, nW.default)(d, c), B = !(T < 0) && !(T >= n.length) && (P ? ? !0), [A, O] = l.useState(B), W = l.useRef(B);
            (0, lU.default)(() => {
                B && (W.current || H(0), O(!0)), W.current = B
            }, [B]);
            let {
                target: D,
                placement: F,
                style: _,
                arrow: j,
                className: X,
                mask: q,
                scrollIntoViewOptions: V = so,
                closeIcon: G,
                closable: Y
            } = n[T] || {}, U = l.useMemo(() => {
                let e = i1(Y, G, !1),
                    t = i1(S, x, !0);
                return "empty" !== e ? e : t
            }, [S, x, Y, G]), K = B && (q ? ? u), Q = l.useRef(null), Z = !1 === M, [J, ee] = function(e, t, n, r, o, a) {
                let [i, s] = (0, l.useState)(void 0);
                (0, lU.default)(() => {
                    s(("function" == typeof e ? e() : e) || null)
                });
                let [c, d] = (0, l.useState)(null), u = (0, nO.default)(() => {
                    if (i) {
                        !o && ! function(e) {
                            let t = window.innerWidth || document.documentElement.clientWidth,
                                n = window.innerHeight || document.documentElement.clientHeight,
                                {
                                    top: l,
                                    right: r,
                                    bottom: o,
                                    left: a
                                } = e.getBoundingClientRect();
                            return l >= 0 && a >= 0 && r <= t && o <= n
                        }(i) && t && i.scrollIntoView(r);
                        let {
                            left: e,
                            top: n,
                            width: l,
                            height: s
                        } = i.getBoundingClientRect(), c = {
                            left: e,
                            top: n,
                            width: l,
                            height: s,
                            radius: 0
                        };
                        if (o) {
                            let e = a.current ? .parentElement ? .getBoundingClientRect();
                            e && (c.left -= e.left, c.top -= e.top)
                        }
                        d(e => JSON.stringify(e) !== JSON.stringify(c) ? c : e)
                    } else d(null)
                }), p = e => (Array.isArray(n ? .offset) ? n ? .offset[e] : n ? .offset) ? ? 6;
                return (0, lU.default)(() => (u(), window.addEventListener("resize", u), window.addEventListener("scroll", u), () => {
                    window.removeEventListener("resize", u), window.removeEventListener("scroll", u)
                }), [i, t, u]), [(0, l.useMemo)(() => {
                    var e;
                    if (!c) return c;
                    let t = p(0),
                        l = p(1),
                        r = "number" != typeof(e = n ? .radius) || Number.isNaN(e) ? 2 : n ? .radius;
                    return {
                        left: c.left - t,
                        top: c.top - l,
                        width: c.width + 2 * t,
                        height: c.height + 2 * l,
                        radius: r
                    }
                }, [c, n]), i]
            }(D, c, v, V ? ? y, Z, Q), et = !!ee && (void 0 === j ? m : j), en = "object" == typeof et && et.pointAtCenter;
            (0, lU.default)(() => {
                R.current ? .forceAlign()
            }, [en, T]);
            let el = e => {
                    H(e), a ? .(e)
                },
                er = (0, l.useMemo)(() => C ? "function" == typeof C ? C({
                    arrowPointAtCenter: en
                }) : C : i9(en), [C, en]);
            if (void 0 === ee || !A) return null;
            let eo = () => {
                    L(!1), i ? .(T)
                },
                ea = "boolean" == typeof K ? void 0 : K;
            return l.createElement(l.Fragment, null, l.createElement(i4, {
                getPopupContainer: M,
                styles: E,
                classNames: w,
                zIndex: $,
                prefixCls: t,
                pos: J,
                showMask: "boolean" == typeof K ? K : !!K,
                style: ea ? .style,
                fill: ea ? .color,
                open: B,
                animated: b,
                rootClassName: f,
                disabledInteraction: k
            }), l.createElement(oI.default, sl({}, z, {
                getPopupContainer: M,
                builtinPlacements: er,
                ref: R,
                popupStyle: _,
                popupPlacement: F ? ? g ? ? (null === ee ? "center" : "bottom"),
                popupVisible: B,
                popupClassName: (0, p.clsx)(f, X),
                prefixCls: t,
                popup: () => l.createElement(st, sl({
                    styles: E,
                    classNames: w,
                    arrow: et,
                    key: "content",
                    prefixCls: t,
                    total: n.length,
                    renderPanel: h,
                    onPrev: () => {
                        el(T - 1)
                    },
                    onNext: () => {
                        el(T + 1)
                    },
                    onClose: eo,
                    current: T,
                    onFinish: () => {
                        eo(), s ? .()
                    }
                }, n[T], {
                    closable: U
                })),
                forceRender: !1,
                autoDestroy: !0,
                zIndex: $,
                arrow: !!et
            }), l.createElement(sn, {
                open: B,
                autoLock: !Z,
                getContainer: M,
                domRef: Q,
                fallbackDOM: () => ee || document.body,
                className: (0, p.clsx)(N, f, `${t}-target-placeholder`),
                style: { ...J || sr,
                    position: Z ? "absolute" : "fixed",
                    pointerEvents: "none",
                    ...I
                }
            })))
        };
    var si = e.i(805984),
        ss = e.i(340010);
    let sc = e => {
        let t, {
                stepProps: n,
                current: r,
                type: o,
                indicatorsRender: i,
                actionsRender: s
            } = e,
            {
                prefixCls: c,
                total: u = 1,
                title: m,
                onClose: g,
                onPrev: h,
                onNext: v,
                onFinish: b,
                cover: y,
                description: $,
                nextButtonProps: x,
                prevButtonProps: S,
                type: C,
                closable: k,
                classNames: E = {},
                styles: w = {}
            } = n,
            N = C ? ? o,
            I = (0, d.default)(k ? ? {}, !0),
            [M] = (0, tf.useLocale)("global", ap.default.global),
            [z] = (0, tf.useLocale)("Tour", ap.default.Tour),
            R = l.default.createElement("button", {
                type: "button",
                onClick: g,
                className: `${c}-close`,
                "aria-label": M ? .close,
                ...I
            }, k ? .closeIcon || l.default.createElement(a.default, {
                className: `${c}-close-icon`
            })),
            T = r === u - 1,
            P = (0, f.default)(m) ? l.default.createElement("div", {
                className: (0, p.clsx)(`${c}-header`, E.header),
                style: w.header
            }, l.default.createElement("div", {
                className: (0, p.clsx)(`${c}-title`, E.title),
                style: w.title
            }, m)) : null,
            L = (0, f.default)($) ? l.default.createElement("div", {
                className: (0, p.clsx)(`${c}-description`, E.description),
                style: w.description
            }, $) : null,
            B = (0, f.default)(y) ? l.default.createElement("div", {
                className: (0, p.clsx)(`${c}-cover`, E.cover),
                style: w.cover
            }, y) : null;
        t = i ? i(r, u) : (0, H.default)(Array.from({
            length: u
        }).keys()).map((e, t) => l.default.createElement("span", {
            key: e,
            className: (0, p.clsx)(t === r && `${c}-indicator-active`, `${c}-indicator`, E.indicator),
            style: w.indicator
        }));
        let A = l.default.createElement(l.default.Fragment, null, 0 !== r ? l.default.createElement(r4.default, {
            size: "small",
            ...{
                type: "default",
                ghost: "primary" === N
            },
            ...S,
            onClick: () => {
                h ? .(), S ? .onClick ? .()
            },
            className: (0, p.clsx)(`${c}-prev-btn`, S ? .className)
        }, S ? .children ? ? z ? .Previous) : null, l.default.createElement(r4.default, {
            size: "small",
            type: "primary" === N ? "default" : "primary",
            ...x,
            onClick: () => {
                T ? b ? .() : v ? .(), x ? .onClick ? .()
            },
            className: (0, p.clsx)(`${c}-next-btn`, x ? .className)
        }, x ? .children ? ? (T ? z ? .Finish : z ? .Next)));
        return l.default.createElement("div", {
            className: `${c}-panel`
        }, l.default.createElement("div", {
            className: (0, p.clsx)(`${c}-section`, E.section),
            style: w.section
        }, k && R, B, P, L, l.default.createElement("div", {
            className: (0, p.clsx)(`${c}-footer`, E.footer),
            style: w.footer
        }, u > 1 && l.default.createElement("div", {
            className: (0, p.clsx)(`${c}-indicators`, E.indicators),
            style: w.indicators
        }, t), l.default.createElement("div", {
            className: (0, p.clsx)(`${c}-actions`, E.actions),
            style: w.actions
        }, s ? s(A, {
            current: r,
            total: u
        }) : A))))
    };
    var sd = e.i(320560),
        su = e.i(307358);
    let sp = (0, y.genStyleHooks)("Tour", e => {
            let {
                borderRadiusLG: t
            } = e;
            return (e => {
                let {
                    componentCls: t,
                    padding: n,
                    paddingXS: l,
                    borderRadius: r,
                    borderRadiusXS: o,
                    colorPrimary: a,
                    colorFill: i,
                    indicatorHeight: s,
                    indicatorWidth: c,
                    boxShadowTertiary: d,
                    zIndexPopup: u,
                    colorBgElevated: p,
                    fontWeightStrong: m,
                    marginXS: f,
                    colorTextLightSolid: g,
                    tourBorderRadius: h,
                    colorWhite: y,
                    primaryNextBtnHoverBg: $,
                    closeBtnSize: x,
                    motionDurationSlow: S,
                    antCls: C,
                    primaryPrevBtnBg: k
                } = e;
                return [{
                    [t]: { ...(0, b.resetComponent)(e),
                        position: "absolute",
                        zIndex: u,
                        maxWidth: "fit-content",
                        visibility: "visible",
                        width: 520,
                        "--antd-arrow-background-color": p,
                        "&-pure": {
                            maxWidth: "100%",
                            position: "relative"
                        },
                        [`&${t}-hidden`]: {
                            display: "none"
                        },
                        [`${t}-panel`]: {
                            position: "relative"
                        },
                        [`${t}-section`]: {
                            textAlign: "start",
                            textDecoration: "none",
                            borderRadius: h,
                            boxShadow: d,
                            position: "relative",
                            backgroundColor: p,
                            border: "none",
                            backgroundClip: "padding-box",
                            [`${t}-close`]: {
                                position: "absolute",
                                top: n,
                                insetInlineEnd: n,
                                color: e.colorIcon,
                                background: "none",
                                border: "none",
                                width: x,
                                height: x,
                                borderRadius: e.borderRadiusSM,
                                transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                "&:hover": {
                                    color: e.colorIconHover,
                                    backgroundColor: e.colorBgTextHover
                                },
                                "&:active": {
                                    backgroundColor: e.colorBgTextActive
                                },
                                ...(0, b.genFocusStyle)(e)
                            },
                            [`${t}-cover`]: {
                                textAlign: "center",
                                padding: `${(0,v.unit)(e.calc(n).add(x).add(l).equal())} ${(0,v.unit)(n)} 0`,
                                img: {
                                    width: "100%"
                                }
                            },
                            [`${t}-header`]: {
                                padding: `${(0,v.unit)(n)} ${(0,v.unit)(n)} ${(0,v.unit)(l)}`,
                                width: `calc(100% - ${(0,v.unit)(x)})`,
                                wordBreak: "break-word",
                                [`${t}-title`]: {
                                    fontWeight: m
                                }
                            },
                            [`${t}-description`]: {
                                padding: `0 ${(0,v.unit)(n)}`,
                                wordWrap: "break-word"
                            },
                            [`${t}-footer`]: {
                                padding: `${(0,v.unit)(l)} ${(0,v.unit)(n)} ${(0,v.unit)(n)}`,
                                textAlign: "end",
                                borderRadius: `0 0 ${(0,v.unit)(o)} ${(0,v.unit)(o)}`,
                                display: "flex",
                                [`${t}-indicators`]: {
                                    display: "inline-block",
                                    [`${t}-indicator`]: {
                                        width: c,
                                        height: s,
                                        display: "inline-block",
                                        borderRadius: "50%",
                                        background: i,
                                        "&:not(:last-child)": {
                                            marginInlineEnd: s
                                        },
                                        "&-active": {
                                            background: a
                                        }
                                    }
                                },
                                [`${t}-actions`]: {
                                    marginInlineStart: "auto",
                                    [`${C}-btn`]: {
                                        marginInlineStart: f
                                    }
                                }
                            }
                        },
                        [`${t}-primary, &${t}-primary`]: {
                            "--antd-arrow-background-color": a,
                            [`${t}-section`]: {
                                color: g,
                                textAlign: "start",
                                textDecoration: "none",
                                backgroundColor: a,
                                borderRadius: r,
                                boxShadow: d,
                                [`${t}-close`]: {
                                    color: g
                                },
                                [`${t}-indicators`]: {
                                    [`${t}-indicator`]: {
                                        background: k,
                                        "&-active": {
                                            background: g
                                        }
                                    }
                                },
                                [`${t}-prev-btn`]: {
                                    color: g,
                                    borderColor: k,
                                    backgroundColor: a,
                                    "&:hover": {
                                        backgroundColor: k,
                                        borderColor: "transparent"
                                    }
                                },
                                [`${t}-next-btn`]: {
                                    color: a,
                                    borderColor: "transparent",
                                    background: y,
                                    "&:hover": {
                                        background: $
                                    }
                                }
                            }
                        }
                    },
                    [`${t}-mask`]: {
                        [`${t}-placeholder-animated`]: {
                            transition: `all ${S}`
                        }
                    },
                    "&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom": {
                        [`${t}-section`]: {
                            borderRadius: e.min(h, sd.MAX_VERTICAL_CONTENT_RADIUS)
                        }
                    }
                }, (0, sd.default)(e, "var(--antd-arrow-background-color)")]
            })((0, F.mergeToken)(e, {
                indicatorWidth: 6,
                indicatorHeight: 6,
                tourBorderRadius: t
            }))
        }, e => ({
            zIndexPopup: e.zIndexPopupBase + 70,
            closeBtnSize: e.fontSize * e.lineHeight,
            primaryPrevBtnBg: new aQ.FastColor(e.colorTextLightSolid).setA(.15).toRgbString(),
            primaryNextBtnHoverBg: new aQ.FastColor(e.colorBgTextHover).onBackground(e.colorWhite).toRgbString(),
            ...(0, sd.getArrowOffsetToken)({
                contentRadius: e.borderRadiusLG,
                limitVerticalRadius: !0
            }),
            ...(0, su.getArrowToken)(e)
        })),
        sm = (0, eF.withPureRenderTheme)(e => {
            let {
                prefixCls: t,
                current: n = 0,
                total: r = 6,
                className: o,
                style: a,
                type: i,
                closable: s,
                closeIcon: c,
                ...d
            } = e, {
                getPrefixCls: u
            } = l.useContext(h.ConfigContext), m = u("tour", t), [f, v] = sp(m), [b, y] = (0, e$.useClosable)({
                closable: s,
                closeIcon: c
            }, null, {
                closable: !0,
                closeIconRender: e => l.isValidElement(e) ? (0, g.cloneElement)(e, {
                    className: (0, p.clsx)(e.props ? .className, `${m}-close-icon`)
                }) : e
            });
            return l.createElement(am.RawPurePanel, {
                prefixCls: m,
                hashId: f,
                className: (0, p.clsx)(o, `${m}-pure`, i && `${m}-${i}`, v),
                style: a
            }, l.createElement(sc, {
                stepProps: { ...d,
                    prefixCls: m,
                    total: r,
                    closable: b ? {
                        closeIcon: y
                    } : void 0
                },
                current: n,
                type: i
            }))
        }),
        sf = e => {
            let {
                prefixCls: t,
                type: n,
                rootClassName: r,
                indicatorsRender: o,
                actionsRender: a,
                steps: i,
                closeIcon: s,
                classNames: c,
                styles: d,
                className: u,
                style: f,
                ...g
            } = e, {
                getPrefixCls: v,
                direction: b,
                closeIcon: y,
                className: $,
                style: x,
                classNames: S,
                styles: C
            } = (0, h.useComponentConfig)("tour"), k = v("tour", t), [E, w] = sp(k), [, N] = (0, ex.useToken)(), I = l.default.useMemo(() => i ? .map(e => ({ ...e,
                className: (0, p.clsx)(e.className, {
                    [`${k}-primary`]: (e.type ? ? n) === "primary"
                })
            })), [k, i, n]), M = { ...e,
                steps: I
            }, [z, R] = (0, m.useMergeSemantic)([S, c], [C, d], {
                props: M
            }), T = (0, p.clsx)({
                [`${k}-rtl`]: "rtl" === b
            }, E, w, r, $, z.root, u), H = { ...R,
                mask: { ...R.root,
                    ...R.mask,
                    ...x,
                    ...f
                }
            }, [P, L] = (0, ec.useZIndex)("Tour", g.zIndex);
            return l.default.createElement(ss.default.Provider, {
                value: L
            }, l.default.createElement(sa, { ...g,
                styles: H,
                classNames: z,
                closeIcon: s ? ? y,
                zIndex: P,
                rootClassName: T,
                prefixCls: k,
                animated: !0,
                renderPanel: (e, t) => l.default.createElement(sc, {
                    styles: H,
                    classNames: z,
                    type: n,
                    stepProps: e,
                    current: t,
                    indicatorsRender: o,
                    actionsRender: a
                }),
                builtinPlacements: e => (0, si.default)({
                    arrowPointAtCenter: e ? .arrowPointAtCenter ? ? !0,
                    autoAdjustOverflow: !0,
                    offset: N.marginXXS,
                    arrowWidth: N.sizePopupArrow,
                    borderRadius: N.borderRadius
                }),
                steps: I
            }))
        };
    sf._InternalPanelDoNotUseOrYouWillBeFired = sm;
    var sg = e.i(94844);
    let sh = e => {
            let t = new Map;
            return e.forEach((e, n) => {
                t.set(e, n)
            }), t
        },
        sv = ({
            type: e,
            actions: t,
            moveToLeft: n,
            moveToRight: r,
            leftActive: o,
            rightActive: a,
            direction: i,
            disabled: s
        }) => {
            let c, d = "right" === e,
                u = d ? t[0] : t[1],
                p = d ? r : n,
                m = d ? a : o,
                f = (c = "right" === e, "rtl" !== i ? c ? l.default.createElement(lI.default, null) : l.default.createElement(lN.default, null) : c ? l.default.createElement(lN.default, null) : l.default.createElement(lI.default, null));
            return l.default.isValidElement(u) ? l.default.cloneElement(u, {
                disabled: s || !m,
                onClick: e => {
                    u ? .props ? .onClick ? .(e), p ? .(e)
                }
            }) : l.default.createElement(r4.default, {
                type: "primary",
                size: "small",
                disabled: s || !m,
                onClick: e => p ? .(e),
                icon: f
            }, u)
        },
        sb = e => {
            let {
                className: t,
                style: n,
                oneWay: r,
                actions: o,
                ...a
            } = e;
            return l.default.createElement("div", {
                className: t,
                style: n
            }, l.default.createElement(sv, {
                type: "right",
                actions: o,
                ...a
            }), !r && l.default.createElement(sv, {
                type: "left",
                actions: o,
                ...a
            }), o.slice(r ? 1 : 2))
        },
        sy = [];

    function s$(e, t) {
        let n = e.filter(e => t.has(e));
        return e.length === n.length ? e : n
    }

    function sx(e) {
        return Array.from(e).join(";")
    }
    let sS = function(e, t, n) {
        let [r, o] = l.useMemo(() => [new Set(e.map(e => e ? .key)), new Set(t.map(e => e ? .key))], [e, t]), [a, i] = (0, tm.useControlledState)(sy, n), s = l.useMemo(() => s$(a, r), [a, r]), c = l.useMemo(() => s$(a, o), [a, o]);
        l.useEffect(() => {
            i([].concat((0, H.default)(s$(a, r)), (0, H.default)(s$(a, o))))
        }, [sx(r), sx(o)]);
        let d = (0, P.useEvent)(e => {
                i([].concat((0, H.default)(e), (0, H.default)(c)))
            }),
            u = (0, P.useEvent)(e => {
                i([].concat((0, H.default)(s), (0, H.default)(e)))
            });
        return [s, c, d, u]
    };
    var sC = e.i(597167);
    let sk = e => {
        let {
            placeholder: t = "",
            value: n,
            prefixCls: r,
            disabled: o,
            onChange: a,
            handleClear: i
        } = e, s = l.useCallback(e => {
            a ? .(e), "" === e.target.value && i ? .()
        }, [a]);
        return l.createElement(ri.default, {
            placeholder: t,
            className: r,
            value: n,
            onChange: s,
            disabled: o,
            allowClear: !0,
            prefix: l.createElement(sC.default, null)
        })
    };
    var sE = e.i(160554);
    let sw = l.memo(e => {
            let t, {
                    prefixCls: n,
                    classNames: r,
                    styles: o,
                    renderedText: a,
                    renderedEl: i,
                    item: s,
                    checked: c,
                    disabled: d,
                    onClick: u,
                    onRemove: m,
                    showRemove: f
                } = e,
                g = (0, p.clsx)(`${n}-content-item`, r.item, {
                    [`${n}-content-item-disabled`]: d || s.disabled,
                    [`${n}-content-item-checked`]: c && !s.disabled
                });
            ("string" == typeof a || "number" == typeof a) && (t = String(a));
            let [h] = (0, tf.useLocale)("Transfer", ap.default.Transfer), v = {
                className: g,
                style: o.item,
                title: t
            }, b = l.createElement("span", {
                className: (0, p.clsx)(`${n}-content-item-text`, r.itemContent),
                style: o.itemContent
            }, i);
            return f ? l.createElement("li", { ...v
            }, b, l.createElement("button", {
                type: "button",
                disabled: d || s.disabled,
                className: `${n}-content-item-remove`,
                "aria-label": h ? .remove,
                onClick: () => m ? .(s)
            }, l.createElement(sE.default, null))) : (v.onClick = d || s.disabled ? void 0 : e => u(s, e), l.createElement("li", { ...v
            }, l.createElement(lF.default, {
                className: (0, p.clsx)(`${n}-checkbox`, r.itemIcon),
                style: o.itemIcon,
                checked: c,
                disabled: d || s.disabled
            }), b))
        }),
        sN = ["handleFilter", "handleClear", "checkedKeys"],
        sI = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                classNames: r,
                styles: o,
                filteredRenderItems: a,
                selectedKeys: i,
                disabled: s,
                showRemove: c,
                pagination: d,
                onScroll: u,
                onItemSelect: m,
                onItemRemove: f
            } = e, [g, h] = l.useState(1), v = l.useMemo(() => d ? {
                simple: !0,
                showSizeChanger: !1,
                showLessItems: !1,
                ..."object" == typeof d ? d : {}
            } : null, [d]), [b, y] = (0, tm.useControlledState)(10, v ? .pageSize);
            l.useEffect(() => {
                v && h(Math.min(g, Math.ceil(a.length / b)))
            }, [a, v, b]);
            let $ = (e, t) => {
                    m(e.key, !i.includes(e.key), t)
                },
                x = e => {
                    f ? .([e.key])
                },
                S = l.useMemo(() => v ? a.slice((g - 1) * b, g * b) : a, [g, a, v, b]);
            l.useImperativeHandle(t, () => ({
                items: S
            }));
            let C = v ? l.createElement(ou.default, {
                size: "small",
                disabled: s,
                simple: v.simple,
                pageSize: b,
                showLessItems: v.showLessItems,
                showSizeChanger: v.showSizeChanger,
                className: `${n}-pagination`,
                total: a.length,
                current: g,
                onChange: e => {
                    h(e)
                },
                onShowSizeChange: (e, t) => {
                    h(e), y(t)
                }
            }) : null;
            return l.createElement(l.Fragment, null, l.createElement("ul", {
                className: (0, p.clsx)(`${n}-content`, r.list, {
                    [`${n}-content-show-remove`]: c
                }),
                style: o.list,
                onScroll: u
            }, (S || []).map(({
                renderedEl: e,
                renderedText: t,
                item: a
            }) => l.createElement(sw, {
                key: a.key,
                prefixCls: n,
                classNames: r,
                styles: o,
                item: a,
                renderedText: t,
                renderedEl: e,
                showRemove: c,
                onClick: $,
                onRemove: x,
                checked: i.includes(a.key),
                disabled: s || a.disabled
            }))), C)
        }),
        sM = () => null;

    function sz(e) {
        return e.filter(e => !e.disabled).map(e => e.key)
    }
    let sR = e => {
            var t, n;
            let r, {
                    prefixCls: o,
                    style: a,
                    classNames: i,
                    styles: s,
                    dataSource: c = [],
                    titleText: d = "",
                    checkedKeys: u,
                    disabled: m,
                    showSearch: f = !1,
                    searchPlaceholder: g,
                    notFoundContent: h,
                    selectAll: v,
                    deselectAll: b,
                    selectCurrent: y,
                    selectInvert: $,
                    removeAll: x,
                    removeCurrent: S,
                    showSelectAll: C = !0,
                    showRemove: k,
                    pagination: E,
                    direction: w,
                    itemsUnit: N,
                    itemUnit: I,
                    selectAllLabel: M,
                    selectionsIcon: z,
                    footer: R,
                    renderList: T,
                    onItemSelectAll: H,
                    onItemRemove: P,
                    handleFilter: L,
                    handleClear: B,
                    filterOption: A,
                    render: O = sM
                } = e,
                W = `${o}-section`,
                D = `${o}-list`,
                F = f && "object" == typeof f ? { ...f,
                    defaultValue: f.defaultValue || ""
                } : {
                    defaultValue: "",
                    placeholder: ""
                },
                [_, j] = (0, l.useState)(F.defaultValue),
                X = (0, l.useRef)({}),
                q = e => {
                    j(e.target.value), L(e)
                },
                V = () => {
                    j(""), B()
                },
                G = (0, l.useMemo)(() => Array.isArray(h) ? h[+("left" !== w)] : h, [h, w]),
                [Y, U] = (0, l.useMemo)(() => {
                    let e = [],
                        t = [];
                    return c.forEach(n => {
                        var r;
                        let o, a, i = {
                            item: n,
                            renderedEl: (a = !!((o = O(n)) && !l.default.isValidElement(o) && "[object Object]" === Object.prototype.toString.call(o))) ? o.label : o,
                            renderedText: a ? o.value : o
                        };
                        (!_ || (r = i.renderedText, "function" == typeof A ? A(_, n, w) : r.includes(_))) && (e.push(n), t.push(i))
                    }), [e, t]
                }, [c, _]),
                K = (0, l.useMemo)(() => Y.filter(e => u.includes(e.key) && !e.disabled), [u, Y]),
                Q = (0, l.useMemo)(() => {
                    if (0 === K.length) return "none";
                    let e = sh(u);
                    return Y.every(t => e.has(t.key) || !!t.disabled) ? "all" : "part"
                }, [K.length, u, Y]),
                Z = l.default.createElement(lF.default, {
                    disabled: 0 === c.filter(e => !e.disabled).length || m,
                    checked: "all" === Q,
                    indeterminate: "part" === Q,
                    className: `${D}-checkbox`,
                    onChange: () => {
                        H ? .(Y.filter(e => !e.disabled).map(({
                            key: e
                        }) => e), "all" !== Q)
                    }
                }),
                J = R && (R.length < 2 ? R(e) : R(e, {
                    direction: w
                })),
                ee = J ? l.default.createElement("div", {
                    className: (0, p.clsx)(`${D}-footer`, i.footer),
                    style: s.footer
                }, J) : null;
            r = k ? [E ? {
                key: "removeCurrent",
                label: S,
                onClick() {
                    let e = sz((X.current ? .items || []).map(e => e.item));
                    P ? .(e)
                }
            } : null, {
                key: "removeAll",
                label: x,
                onClick() {
                    P ? .(sz(Y))
                }
            }].filter(Boolean) : [{
                key: "selectAll",
                label: "all" === Q ? b : v,
                onClick() {
                    let e = sz(Y);
                    H ? .(e, e.length !== u.length)
                }
            }, E ? {
                key: "selectCurrent",
                label: y,
                onClick() {
                    let e = X.current ? .items || [];
                    H ? .(sz(e.map(e => e.item)), !0)
                }
            } : null, {
                key: "selectInvert",
                label: $,
                onClick() {
                    let e = sz((X.current ? .items || []).map(e => e.item)),
                        t = new Set(u),
                        n = new Set(t);
                    e.forEach(e => {
                        t.has(e) ? n.delete(e) : n.add(e)
                    }), H ? .(Array.from(n), "replace")
                }
            }];
            let et = l.default.createElement(rV.default, {
                className: `${D}-header-dropdown`,
                menu: {
                    items: r
                },
                disabled: m
            }, void 0 !== z ? z : l.default.createElement(ia.default, null));
            return l.default.createElement("div", {
                className: (0, p.clsx)(W, i.section, {
                    [`${W}-with-pagination`]: !!E,
                    [`${W}-with-footer`]: !!J
                }),
                style: { ...a,
                    ...s.section
                }
            }, l.default.createElement("div", {
                className: (0, p.clsx)(`${D}-header`, i.header),
                style: s.header
            }, C ? l.default.createElement(l.default.Fragment, null, !k && !E && Z, et) : null, l.default.createElement("span", {
                className: `${D}-header-selected`
            }, (t = K.length, n = Y.length, M ? "function" == typeof M ? M({
                selectedCount: t,
                totalCount: n
            }) : M : l.default.createElement(l.default.Fragment, null, (t > 0 ? `${t}/` : "") + n, " ", n > 1 ? N : I))), l.default.createElement("span", {
                className: (0, p.clsx)(`${D}-header-title`, i.title),
                style: s.title
            }, d)), (() => {
                var t;
                let n, r, o, a = f ? l.default.createElement("div", {
                        className: `${D}-body-search-wrapper`
                    }, l.default.createElement(sk, {
                        prefixCls: `${D}-search`,
                        onChange: q,
                        handleClear: V,
                        placeholder: F.placeholder || g,
                        value: _,
                        disabled: m
                    })) : null,
                    {
                        customize: c,
                        bodyContent: d
                    } = (t = { ...(0, eD.omit)(e, sN),
                        filteredItems: Y,
                        filteredRenderItems: U,
                        selectedKeys: u,
                        classNames: i,
                        styles: s
                    }, (o = !!(r = T ? T({ ...t,
                        onItemSelect: (e, n) => t.onItemSelect(e, n)
                    }) : null)) || (r = l.default.createElement(sI, {
                        ref: X,
                        ...t,
                        prefixCls: D
                    })), {
                        customize: o,
                        bodyContent: r
                    });
                return n = c ? l.default.createElement("div", {
                    className: `${D}-body-customize-wrapper`
                }, d) : Y.length ? d : l.default.createElement("div", {
                    className: `${D}-body-not-found`
                }, G), l.default.createElement("div", {
                    className: (0, p.clsx)(`${D}-body`, {
                        [`${D}-body-with-search`]: f
                    }, i.body),
                    style: s.body
                }, a, n)
            })(), ee)
        },
        sT = (e, t) => {
            let {
                componentCls: n,
                colorBorder: l
            } = e;
            return {
                [`${n}-section`]: {
                    borderColor: t,
                    [`${n}-list-search:not([disabled])`]: {
                        borderColor: l
                    }
                }
            }
        },
        sH = (0, y.genStyleHooks)("Transfer", e => {
            let t = (0, F.mergeToken)(e);
            return [(e => {
                let {
                    antCls: t,
                    iconCls: n,
                    componentCls: l,
                    marginXS: r,
                    marginXXS: o,
                    fontSizeIcon: a,
                    colorBgContainerDisabled: i
                } = e;
                return {
                    [l]: { ...(0, b.resetComponent)(e),
                        position: "relative",
                        display: "flex",
                        alignItems: "stretch",
                        [`${l}-disabled`]: {
                            [`${l}-section`]: {
                                background: i
                            }
                        },
                        [`${l}-section`]: (e => {
                            let {
                                componentCls: t,
                                colorBorder: n,
                                colorSplit: l,
                                lineWidth: r,
                                itemHeight: o,
                                headerHeight: a,
                                transferHeaderVerticalPadding: i,
                                itemPaddingBlock: s,
                                controlItemBgActive: c,
                                colorTextDisabled: d,
                                colorTextSecondary: u,
                                listHeight: p,
                                listWidth: m,
                                listWidthLG: f,
                                fontSizeIcon: g,
                                marginXS: h,
                                paddingSM: y,
                                lineType: $,
                                antCls: x,
                                iconCls: S,
                                motionDurationSlow: C,
                                controlItemBgHover: k,
                                borderRadiusLG: E,
                                colorBgContainer: w,
                                colorText: N,
                                controlItemBgActiveHover: I
                            } = e, M = (0, v.unit)(e.calc(E).sub(r).equal());
                            return {
                                display: "flex",
                                flexDirection: "column",
                                width: m,
                                height: p,
                                border: `${(0,v.unit)(r)} ${$} ${n}`,
                                borderRadius: e.borderRadiusLG,
                                "&-with-pagination": {
                                    width: f,
                                    height: "auto"
                                },
                                [`${t}-list`]: {
                                    "&-search": {
                                        [`${S}-search`]: {
                                            color: d
                                        }
                                    },
                                    "&-header": {
                                        display: "flex",
                                        flex: "none",
                                        alignItems: "center",
                                        height: a,
                                        padding: `${(0,v.unit)(e.calc(i).sub(r).equal())} ${(0,v.unit)(y)} ${(0,v.unit)(i)}`,
                                        color: N,
                                        background: w,
                                        borderBottom: `${(0,v.unit)(r)} ${$} ${l}`,
                                        borderRadius: `${(0,v.unit)(E)} ${(0,v.unit)(E)} 0 0`,
                                        "> *:not(:last-child)": {
                                            marginInlineEnd: 4
                                        },
                                        "> *": {
                                            flex: "none"
                                        },
                                        "&-title": { ...b.textEllipsis,
                                            flex: "0 1 auto",
                                            textAlign: "end",
                                            marginInlineStart: "auto"
                                        },
                                        "&-dropdown": { ...(0, b.resetIcon)(),
                                            fontSize: g,
                                            transform: "translateY(10%)",
                                            cursor: "pointer",
                                            "&[disabled]": {
                                                cursor: "not-allowed"
                                            }
                                        }
                                    },
                                    "&-body": {
                                        display: "flex",
                                        flex: "auto",
                                        flexDirection: "column",
                                        fontSize: e.fontSize,
                                        minHeight: 0,
                                        "&-search-wrapper": {
                                            position: "relative",
                                            flex: "none",
                                            padding: y
                                        }
                                    },
                                    "&-content": {
                                        flex: "auto",
                                        margin: 0,
                                        padding: 0,
                                        overflow: "auto",
                                        listStyle: "none",
                                        borderRadius: `0 0 ${M} ${M}`,
                                        "&-item": {
                                            display: "flex",
                                            alignItems: "center",
                                            minHeight: o,
                                            padding: `${(0,v.unit)(s)} ${(0,v.unit)(y)}`,
                                            transition: `all ${C}`,
                                            "> *:not(:last-child)": {
                                                marginInlineEnd: h
                                            },
                                            "> *": {
                                                flex: "none"
                                            },
                                            "&-text": { ...b.textEllipsis,
                                                flex: "auto"
                                            },
                                            "&-remove": { ...(0, b.operationUnit)(e),
                                                color: n,
                                                "&:hover, &:focus": {
                                                    color: u
                                                }
                                            },
                                            [`&:not(${t}-list-content-item-disabled)`]: {
                                                "&:hover": {
                                                    backgroundColor: k,
                                                    cursor: "pointer"
                                                },
                                                [`&${t}-list-content-item-checked:hover`]: {
                                                    backgroundColor: I
                                                }
                                            },
                                            "&-checked": {
                                                backgroundColor: c
                                            },
                                            "&-disabled": {
                                                color: d,
                                                cursor: "not-allowed"
                                            }
                                        },
                                        [`&-show-remove ${t}-list-content-item:not(${t}-list-content-item-disabled):hover`]: {
                                            background: "transparent",
                                            cursor: "default"
                                        }
                                    },
                                    "&-pagination": {
                                        padding: e.paddingXS,
                                        textAlign: "end",
                                        borderTop: `${(0,v.unit)(r)} ${$} ${l}`,
                                        [`${x}-pagination-options`]: {
                                            paddingInlineEnd: e.paddingXS
                                        }
                                    },
                                    "&-body-not-found": {
                                        flex: "none",
                                        width: "100%",
                                        margin: "auto 0",
                                        color: d,
                                        textAlign: "center"
                                    },
                                    "&-footer": {
                                        borderTop: `${(0,v.unit)(r)} ${$} ${l}`
                                    },
                                    "&-checkbox": {
                                        lineHeight: 1
                                    }
                                }
                            }
                        })(e),
                        [`${l}-actions`]: {
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            alignSelf: "center",
                            margin: `0 ${(0,v.unit)(r)}`,
                            verticalAlign: "middle",
                            gap: o,
                            [`${t}-btn ${n}`]: {
                                fontSize: a
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    antCls: t,
                    componentCls: n,
                    listHeight: l,
                    controlHeightLG: r
                } = e, o = `${t}-table`, a = `${t}-input`;
                return {
                    [`${n}-customize-list`]: {
                        [`${n}-section`]: {
                            flex: "1 1 50%",
                            width: "auto",
                            height: "auto",
                            minHeight: l,
                            minWidth: 0
                        },
                        [`${o}-wrapper`]: {
                            [`${o}-small`]: {
                                border: 0,
                                borderRadius: 0,
                                [`${o}-selection-column`]: {
                                    width: r,
                                    minWidth: r
                                }
                            },
                            [`${o}-pagination${o}-pagination`]: {
                                margin: 0,
                                padding: e.paddingXS
                            }
                        },
                        [`${a}[disabled]`]: {
                            backgroundColor: "transparent"
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t
                } = e;
                return {
                    [`${t}-status-error`]: { ...sT(e, e.colorError)
                    },
                    [`${t}-status-warning`]: { ...sT(e, e.colorWarning)
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t
                } = e;
                return {
                    [`${t}-rtl`]: {
                        direction: "rtl"
                    }
                }
            })(t)]
        }, e => {
            let {
                fontSize: t,
                lineHeight: n,
                controlHeight: l,
                controlHeightLG: r,
                lineWidth: o
            } = e, a = Math.round(t * n);
            return {
                listWidth: 180,
                listHeight: 200,
                listWidthLG: 250,
                headerHeight: r,
                itemHeight: l,
                itemPaddingBlock: (l - a) / 2,
                transferHeaderVerticalPadding: Math.ceil((r - o - a) / 2)
            }
        }),
        sP = e => {
            let {
                prefixCls: t,
                className: n,
                rootClassName: r,
                classNames: o,
                styles: a,
                style: i,
                listStyle: s,
                operationStyle: c,
                operations: d,
                actions: u,
                dataSource: f,
                targetKeys: g = [],
                selectedKeys: v,
                selectAllLabels: b = [],
                locale: y = {},
                titles: $,
                disabled: x,
                showSearch: S = !1,
                showSelectAll: C,
                oneWay: k,
                pagination: E,
                status: w,
                selectionsIcon: N,
                filterOption: I,
                render: M,
                footer: z,
                children: R,
                rowKey: T,
                onScroll: P,
                onChange: L,
                onSearch: B,
                onSelectChange: A
            } = e, {
                getPrefixCls: O,
                renderEmpty: W,
                direction: D,
                className: F,
                style: _,
                classNames: j,
                styles: X,
                selectionsIcon: q
            } = (0, h.useComponentConfig)("transfer"), V = (0, l.useContext)(lh.default), G = x ? ? V, Y = { ...e,
                disabled: G
            }, U = O("transfer", t), [K, Q] = sH(U), [Z, J, ee] = ((e, t, n) => {
                let r = l.useMemo(() => (e || []).map(e => t ? { ...e,
                        key: t(e)
                    } : e), [e, t]),
                    [o, a] = l.useMemo(() => {
                        let e = [],
                            t = Array.from({
                                length: n ? .length ? ? 0
                            }),
                            l = sh(n || []);
                        return r.forEach(n => {
                            l.has(n.key) ? t[l.get(n.key)] = n : e.push(n)
                        }), [e, t]
                    }, [r, n]);
                return [r, o.filter(Boolean), a.filter(Boolean)]
            })(f, T, g), [et, en, el, er] = sS(J, ee, v), [eo, ea] = (0, sg.useMultipleSelect)(e => e.key), [ei, es] = (0, sg.useMultipleSelect)(e => e.key), ec = (0, l.useCallback)((e, t) => {
                "left" === e ? el("function" == typeof t ? t(et || []) : t) : er("function" == typeof t ? t(en || []) : t)
            }, [et, en]), ed = (e, t) => {
                ("left" === e ? ea : es)(t)
            }, eu = (0, l.useCallback)((e, t) => {
                "left" === e ? A ? .(t, en) : A ? .(et, t)
            }, [et, en]), ep = e => {
                let t, n = "right" === e ? et : en,
                    l = (t = new Map, Z.forEach(({
                        disabled: e,
                        key: n
                    }, l) => {
                        e && t.set(n, l)
                    }), t),
                    r = n.filter(e => !l.has(e)),
                    o = sh(r),
                    a = "right" === e ? r.concat(g) : g.filter(e => !o.has(e)),
                    i = "right" === e ? "left" : "right";
                ec(i, []), eu(i, []), L ? .(a, e, r)
            }, em = (e, t, n) => {
                ec(e, l => {
                    let r = [];
                    if ("replace" === n) r = t;
                    else if (n) r = Array.from(new Set([].concat((0, H.default)(l), (0, H.default)(t))));
                    else {
                        let e = sh(t);
                        r = l.filter(t => !e.has(t))
                    }
                    return eu(e, r), r
                }), ed(e, null)
            }, ef = (t, n, l, r) => {
                let o = "left" === t,
                    a = (0, H.default)(o ? et : en),
                    i = new Set(a),
                    s = (0, H.default)(o ? J : ee).filter(e => !e ? .disabled),
                    c = s.findIndex(e => e.key === n);
                if (r && a.length > 0)("left" === t ? eo : ei)(c, s, i);
                else i.has(n) && (i.delete(n), ed(t, null)), l && (i.add(n), ed(t, c));
                let d = Array.from(i);
                eu(t, d), e.selectedKeys || ec(t, d)
            }, eg = e => "function" == typeof s ? s({
                direction: e
            }) : s || {}, {
                hasFeedback: eh,
                status: ev
            } = (0, l.useContext)(tg.FormItemInputContext), eb = (0, lf.getMergedStatus)(ev, w), ey = !R && E, e$ = ee.filter(e => en.includes(e.key) && !e.disabled).length > 0, ex = J.filter(e => et.includes(e.key) && !e.disabled).length > 0, [eS, eC] = (0, m.useMergeSemantic)([j, o], [X, a], {
                props: Y
            }), ek = (0, p.clsx)(U, {
                [`${U}-disabled`]: G,
                [`${U}-customize-list`]: !!R,
                [`${U}-rtl`]: "rtl" === D
            }, (0, lf.getStatusClassNames)(U, eb, eh), F, n, r, K, Q, eS.root), [eE] = (0, tf.useLocale)("Transfer", ap.default.Transfer), ew = { ...eE,
                notFoundContent: W ? .("Transfer") || l.default.createElement(lg.default, {
                    componentName: "Transfer"
                }),
                ...y
            }, [eN, eI] = $ ? ? ew.titles ? ? [], eM = N ? ? q;
            return l.default.createElement("div", {
                className: ek,
                style: { ..._,
                    ...eC.root,
                    ...i
                }
            }, l.default.createElement(sR, {
                prefixCls: U,
                style: eg("left"),
                classNames: eS,
                styles: eC,
                titleText: eN,
                dataSource: J,
                filterOption: I,
                checkedKeys: et,
                handleFilter: e => B ? .("left", e.target.value),
                handleClear: () => B ? .("left", ""),
                onItemSelect: (e, t, n) => {
                    ef("left", e, t, n ? .shiftKey)
                },
                onItemSelectAll: (e, t) => {
                    em("left", e, t)
                },
                render: M,
                showSearch: S,
                renderList: R,
                footer: z,
                onScroll: e => {
                    P ? .("left", e)
                },
                disabled: G,
                direction: "rtl" === D ? "right" : "left",
                showSelectAll: C,
                selectAllLabel: b[0],
                pagination: ey,
                selectionsIcon: eM,
                ...ew
            }), l.default.createElement(sb, {
                className: (0, p.clsx)(`${U}-actions`, eS.actions),
                rightActive: ex,
                moveToRight: () => {
                    ep("right"), ed("right", null)
                },
                leftActive: e$,
                actions: u || d || [],
                moveToLeft: () => {
                    ep("left"), ed("left", null)
                },
                style: { ...c,
                    ...eC.actions
                },
                disabled: G,
                direction: D,
                oneWay: k
            }), l.default.createElement(sR, {
                prefixCls: U,
                style: eg("right"),
                classNames: eS,
                styles: eC,
                titleText: eI,
                dataSource: ee,
                filterOption: I,
                checkedKeys: en,
                handleFilter: e => B ? .("right", e.target.value),
                handleClear: () => B ? .("right", ""),
                onItemSelect: (e, t, n) => {
                    ef("right", e, t, n ? .shiftKey)
                },
                onItemSelectAll: (e, t) => {
                    em("right", e, t)
                },
                onItemRemove: e => {
                    ec("right", []), L ? .(g.filter(t => !e.includes(t)), "left", (0, H.default)(e))
                },
                render: M,
                showSearch: S,
                renderList: R,
                footer: z,
                onScroll: e => {
                    P ? .("right", e)
                },
                disabled: G,
                direction: "rtl" === D ? "left" : "right",
                showSelectAll: C,
                selectAllLabel: b[1],
                showRemove: k,
                pagination: ey,
                selectionsIcon: eM,
                ...ew
            }))
        };
    sP.List = sR, sP.Search = sk, sP.Operation = sb;
    var sL = e.i(275219),
        nB = nB;
    let sB = e => !e || e.disabled || e.disableCheckbox || !1 === e.checkable,
        sA = () => null;

    function sO(e) {
        if (!e) return e;
        let t = { ...e
        };
        return "props" in t || Object.defineProperty(t, "props", {
            get: () => ((0, n4.default)(!1, "New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."), t)
        }), t
    }

    function sW(e) {
        let t = l.useRef();
        return t.current = e, l.useCallback((...e) => t.current(...e), [])
    }
    let sD = l.createContext(null);
    var n7 = n7,
        sF = e.i(292379),
        s_ = e.i(375015),
        sj = e.i(178749);
    let sX = l.createContext(null);

    function sq() {
        return (sq = Object.assign.bind()).apply(this, arguments)
    }
    let sV = {
            width: 0,
            height: 0,
            display: "flex",
            overflow: "hidden",
            opacity: 0,
            border: 0,
            padding: 0,
            margin: 0
        },
        sG = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                multiple: r,
                searchValue: o,
                toggleOpen: a,
                open: i,
                notFoundContent: s
            } = (0, n7.default)(), {
                virtual: c,
                listHeight: d,
                listItemHeight: u,
                listItemScrollOffset: p,
                treeData: m,
                fieldNames: f,
                onSelect: g,
                popupMatchSelectWidth: h,
                treeExpandAction: v,
                treeTitleRender: b,
                onPopupScroll: y,
                leftMaxCount: $,
                leafCountOnly: x,
                valueEntities: S,
                classNames: C,
                styles: k
            } = l.useContext(sX), {
                checkable: E,
                checkedKeys: w,
                halfCheckedKeys: N,
                treeExpandedKeys: I,
                treeDefaultExpandAll: M,
                treeDefaultExpandedKeys: z,
                onTreeExpand: R,
                treeIcon: T,
                showTreeIcon: H,
                switcherIcon: L,
                treeLine: B,
                treeNodeFilterProp: A,
                loadData: O,
                treeLoadedKeys: W,
                treeMotion: D,
                onTreeLoad: F,
                keyEntities: _
            } = l.useContext(sD), j = l.useRef(), X = (0, sj.default)(() => m, [i, m], (e, t) => t[0] && e[1] !== t[1]), q = l.useMemo(() => E ? {
                checked: w,
                halfChecked: N
            } : null, [E, w, N]);
            l.useEffect(() => {
                i && !r && w.length && j.current ? .scrollTo({
                    key: w[0]
                })
            }, [i]);
            let V = e => {
                    e.preventDefault()
                },
                G = (e, t) => {
                    let {
                        node: n
                    } = t;
                    !(E && sB(n)) && (g(n.key, {
                        selected: !w.includes(n.key)
                    }), r || a(!1))
                },
                [Y, U] = l.useState(z),
                [Q, Z] = l.useState(null),
                J = l.useMemo(() => I ? [...I] : o ? Q : Y, [Y, Q, I, o]),
                ee = String(o).toLowerCase(),
                et = e => !!ee && String(e[A]).toLowerCase().includes(ee);
            l.useEffect(() => {
                let e, t;
                o && Z((e = [], (t = n => {
                    n.forEach(n => {
                        let l = n[f.children];
                        l && (e.push(n[f.value]), t(l))
                    })
                })(m), e))
            }, [o]);
            let [en, el] = l.useState(() => new Map);
            l.useEffect(() => {
                $ && el(new Map)
            }, [$]);
            let er = (0, P.useEvent)(e => {
                    let t = e[f.value];
                    if (w.includes(t) || null === $) return !1;
                    if ($ <= 0) return !0;
                    if (x && $) {
                        let t = e[f.value];
                        if (!en.has(t)) {
                            let e = S.get(t);
                            if (0 === (e.children || []).length) en.set(t, !1);
                            else {
                                let n = e.children.filter(e => !e.node.disabled && !e.node.disableCheckbox && !w.includes(e.node[f.value])).length;
                                en.set(t, n > $)
                            }
                        }
                        return en.get(t)
                    }
                    return !1
                }),
                eo = e => {
                    for (let t of e)
                        if (!t.disabled && !1 !== t.selectable) {
                            if (!o || et(t)) return t;
                            if (t[f.children]) {
                                let e = eo(t[f.children]);
                                if (e) return e
                            }
                        }
                    return null
                },
                [ea, ei] = l.useState(null),
                es = _[ea];
            l.useEffect(() => {
                if (!i) return;
                let e = null;
                if (r || !w.length || o) {
                    let t;
                    e = (t = eo(X)) ? t[f.value] : null
                } else e = w[0];
                ei(e)
            }, [i, o]), l.useImperativeHandle(t, () => ({
                scrollTo: j.current ? .scrollTo,
                onKeyDown: e => {
                    let {
                        which: t
                    } = e;
                    switch (t) {
                        case K.default.UP:
                        case K.default.DOWN:
                        case K.default.LEFT:
                        case K.default.RIGHT:
                            j.current ? .onKeyDown(e);
                            break;
                        case K.default.ENTER:
                            if (es) {
                                let e = er(es.node),
                                    {
                                        selectable: t,
                                        value: n,
                                        disabled: l
                                    } = es ? .node || {};
                                !1 === t || l || e || G(null, {
                                    node: {
                                        key: ea
                                    },
                                    selected: !w.includes(n)
                                })
                            }
                            break;
                        case K.default.ESC:
                            a(!1)
                    }
                },
                onKeyUp: () => {}
            }));
            let ec = (0, sj.default)(() => !o, [o, I || Y], ([e], [t, n]) => e !== t && !!(t || n));
            if (0 === X.length) return l.createElement("div", {
                role: "listbox",
                className: `${n}-empty`,
                onMouseDown: V
            }, s);
            let ed = {
                fieldNames: f
            };
            return W && (ed.loadedKeys = W), J && (ed.expandedKeys = J), l.createElement("div", {
                onMouseDown: V
            }, es && i && l.createElement("span", {
                style: sV,
                "aria-live": "assertive"
            }, es.node.value), l.createElement(s_.UnstableContext.Provider, {
                value: {
                    nodeDisabled: er
                }
            }, l.createElement(sF.default, sq({
                classNames: C ? .popup,
                styles: k ? .popup,
                ref: j,
                focusable: !1,
                prefixCls: `${n}-tree`,
                treeData: X,
                height: d,
                itemHeight: u,
                itemScrollOffset: p,
                virtual: !1 !== c && !1 !== h,
                multiple: r,
                icon: T,
                showIcon: H,
                switcherIcon: L,
                showLine: B,
                loadData: ec ? O : null,
                motion: D,
                activeKey: ea,
                checkable: E,
                checkStrictly: !0,
                checkedKeys: q,
                selectedKeys: E ? [] : w,
                defaultExpandAll: M,
                titleRender: b
            }, ed, {
                onActiveChange: ei,
                onSelect: G,
                onCheck: G,
                onExpand: e => {
                    U(e), Z(e), R && R(e)
                },
                onLoad: F,
                filterTreeNode: et,
                expandAction: v,
                onScroll: y
            }))))
        }),
        sY = "SHOW_ALL",
        sU = "SHOW_PARENT",
        sK = "SHOW_CHILD";

    function sQ(e, t, n, l) {
        let r = new Set(e);
        return t === sK ? e.filter(e => {
            let t = n[e];
            return !t || !t.children || !t.children.some(({
                node: e
            }) => r.has(e[l.value])) || !t.children.every(({
                node: e
            }) => sB(e) || r.has(e[l.value]))
        }) : t === sU ? e.filter(e => {
            let t = n[e],
                l = t ? t.parent : null;
            return !l || sB(l.node) || !r.has(l.key)
        }) : e
    }

    function sZ() {
        return (sZ = Object.assign.bind()).apply(this, arguments)
    }
    let sJ = l.forwardRef((e, t) => {
        var n;
        let r, {
                id: o,
                prefixCls: a = "rc-tree-select",
                value: i,
                defaultValue: s,
                onChange: c,
                onSelect: d,
                onDeselect: u,
                showSearch: p,
                searchValue: m,
                inputValue: f,
                onSearch: g,
                autoClearSearchValue: h,
                filterTreeNode: v,
                treeNodeFilterProp: b,
                showCheckedStrategy: y,
                treeNodeLabelProp: $,
                multiple: x,
                treeCheckable: S,
                treeCheckStrictly: C,
                labelInValue: k,
                maxCount: E,
                fieldNames: w,
                treeDataSimpleMode: N,
                treeData: I,
                children: M,
                loadData: z,
                treeLoadedKeys: R,
                onTreeLoad: T,
                treeDefaultExpandAll: H,
                treeExpandedKeys: P,
                treeDefaultExpandedKeys: L,
                onTreeExpand: B,
                treeExpandAction: A,
                virtual: O,
                listHeight: W = 200,
                listItemHeight: D = 20,
                listItemScrollOffset: F = 0,
                onPopupVisibleChange: _,
                popupMatchSelectWidth: j = !0,
                treeLine: X,
                treeIcon: q,
                showTreeIcon: V,
                switcherIcon: G,
                treeMotion: Y,
                treeTitleRender: U,
                onPopupScroll: K,
                classNames: Q,
                styles: Z,
                ...J
            } = e,
            ee = (0, nA.default)(o),
            et = S && !C,
            en = S || C,
            el = C || k,
            er = en || x,
            [eo, ea] = function(e, t) {
                let {
                    searchValue: n,
                    inputValue: r,
                    onSearch: o,
                    autoClearSearchValue: a,
                    filterTreeNode: i,
                    treeNodeFilterProp: s
                } = t;
                return l.useMemo(() => {
                    let t = "object" == typeof e,
                        l = {
                            searchValue: n ? ? r,
                            onSearch: o,
                            autoClearSearchValue: a,
                            filterTreeNode: i,
                            treeNodeFilterProp: s,
                            ...t ? e : {}
                        };
                    return [!!t || e, l]
                }, [e, n, r, o, a, i, s])
            }(p, {
                searchValue: m,
                inputValue: f,
                onSearch: g,
                autoClearSearchValue: h,
                filterTreeNode: v,
                treeNodeFilterProp: b
            }),
            {
                searchValue: ei,
                onSearch: es,
                autoClearSearchValue: ec = !0,
                filterTreeNode: ed,
                treeNodeFilterProp: eu = "value"
            } = ea,
            [ep, em] = (0, nW.default)(s, i),
            ef = l.useMemo(() => S ? y || sK : sY, [y, S]),
            eg = l.useMemo(() => (e => {
                let {
                    label: t,
                    value: n,
                    children: l
                } = e || {};
                return {
                    _title: t ? [t] : ["title", "label"],
                    value: n || "value",
                    key: n || "value",
                    children: l || "children"
                }
            })(w), [JSON.stringify(w)]),
            [eh, ev] = (0, nW.default)("", ei),
            eb = eh || "",
            ey = l.useMemo(() => I ? N ? function(e, t) {
                let {
                    id: n,
                    pId: l,
                    rootPId: r
                } = t, o = new Map, a = [];
                return e.forEach(e => {
                    let t = e[n],
                        l = { ...e,
                            key: e.key || t
                        };
                    o.set(t, l)
                }), o.forEach(e => {
                    let t = e[l],
                        n = o.get(t);
                    n ? (n.children = n.children || [], n.children.push(e)) : (t === r || null === r) && a.push(e)
                }), a
            }(I, {
                id: "id",
                pId: "pId",
                rootPId: null,
                ..."object" == typeof N ? N : {}
            }) : I : function e(t) {
                return (0, oN.default)(t).map(t => {
                    if (!l.isValidElement(t) || !t.type) return null;
                    let {
                        key: n,
                        props: {
                            children: r,
                            value: o,
                            ...a
                        }
                    } = t, i = {
                        key: n,
                        value: o,
                        ...a
                    }, s = e(r);
                    return s.length && (i.children = s), i
                }).filter(e => e)
            }(M), [M, N, I]),
            {
                keyEntities: e$,
                valueEntities: ex
            } = l.useMemo(() => (0, n3.convertDataToEntities)(ey, {
                fieldNames: eg,
                initWrapper: e => ({ ...e,
                    valueEntities: new Map
                }),
                processEntity: (e, t) => {
                    let n = e.node[eg.value];
                    t.valueEntities.set(n, e)
                }
            }), [ey, eg]),
            eS = l.useCallback(e => {
                let t = [],
                    n = [];
                return e.forEach(e => {
                    ex.has(e) ? n.push(e) : t.push(e)
                }), {
                    missingRawValues: t,
                    existRawValues: n
                }
            }, [ex]),
            eC = ((e, t, n) => {
                let {
                    fieldNames: r,
                    treeNodeFilterProp: o,
                    filterTreeNode: a
                } = n, {
                    children: i
                } = r;
                return l.useMemo(() => {
                    if (!t || !1 === a) return e;
                    let n = "function" == typeof a ? a : (e, n) => String(n[o]).toUpperCase().includes(t.toUpperCase()),
                        l = (e, r = !1) => e.reduce((e, o) => {
                            let a = o[i],
                                s = r || n(t, sO(o)),
                                c = l(a || [], s);
                            return (s || c.length) && e.push({ ...o,
                                isLeaf: void 0,
                                [i]: c
                            }), e
                        }, []);
                    return l(e)
                }, [e, t, i, o, a])
            })(ey, eb, {
                fieldNames: eg,
                treeNodeFilterProp: eu,
                filterTreeNode: ed
            }),
            ek = l.useCallback(e => {
                if (e) {
                    if ($) return e[$];
                    let {
                        _title: t
                    } = eg;
                    for (let n = 0; n < t.length; n += 1) {
                        let l = e[t[n]];
                        if (void 0 !== l) return l
                    }
                }
            }, [eg, $]),
            eE = l.useCallback(e => (Array.isArray(e) ? e : void 0 !== e ? [e] : []).map(e => e && "object" == typeof e ? e : {
                value: e
            }), []),
            ew = l.useCallback(e => eE(e).map(e => {
                let t, {
                        label: n
                    } = e,
                    {
                        value: l,
                        halfChecked: r
                    } = e,
                    o = ex.get(l);
                return o ? (n = U ? U(o.node) : n ? ? ek(o.node), t = o.node.disabled) : void 0 === n && (n = eE(ep).find(e => e.value === l).label), {
                    label: n,
                    value: l,
                    halfChecked: r,
                    disabled: t
                }
            }), [ex, ek, eE, ep]),
            eN = l.useMemo(() => eE(null === ep ? [] : ep), [eE, ep]),
            [eI, eM] = l.useMemo(() => {
                let e = [],
                    t = [];
                return eN.forEach(n => {
                    n.halfChecked ? t.push(n) : e.push(n)
                }), [e, t]
            }, [eN]),
            ez = l.useMemo(() => eI.map(e => e.value), [eI]),
            [eR, eT] = l.useMemo(() => {
                let e = e => e.map(({
                        value: e
                    }) => e),
                    t = e(eI),
                    n = e(eM),
                    l = t.filter(e => !e$[e]),
                    r = t,
                    o = n;
                if (et) {
                    let e = (0, n8.conductCheck)(t, !0, e$);
                    r = e.checkedKeys, o = e.halfCheckedKeys
                }
                return [Array.from(new Set([...l, ...r])), o]
            }, [eI, eM, et, e$]),
            [eH] = (n = l.useMemo(() => {
                let e = ew(sQ(eR, ef, e$, eg).map(e => e$[e] ? .node ? .[eg.value] ? ? e).map(e => {
                        let t = eI.find(t => t.value === e);
                        return {
                            value: e,
                            label: k ? t ? .label : U ? .(t)
                        }
                    })),
                    t = e[0];
                return !er && t && null == t.value && null == t.label ? [] : e.map(e => ({ ...e,
                    label: e.label ? ? e.value
                }))
            }, [eg, er, eR, eI, ew, ef, e$]), r = l.useRef({
                valueLabels: new Map
            }), l.useMemo(() => {
                let {
                    valueLabels: e
                } = r.current, t = new Map, l = n.map(n => {
                    let {
                        value: l,
                        label: r
                    } = n, o = r ? ? e.get(l);
                    return t.set(l, o), { ...n,
                        label: o
                    }
                });
                return r.current.valueLabels = t, [l]
            }, [n])),
            eP = l.useMemo(() => er && ("SHOW_CHILD" === ef || C || !S) ? E : null, [E, er, C, ef, S]),
            eL = sW((e, t, n) => {
                let r = sQ(e, ef, e$, eg);
                if ((!eP || !(r.length > eP)) && (em(ew(e)), ec && ev(""), c)) {
                    let i = e;
                    et && (i = r.map(e => {
                        let t = ex.get(e);
                        return t ? t.node[eg.value] : e
                    }));
                    let {
                        triggerValue: s,
                        selected: d
                    } = t || {
                        triggerValue: void 0,
                        selected: void 0
                    }, u = i;
                    C && (u = [...u, ...eM.filter(e => !i.includes(e.value))]);
                    let p = ew(u),
                        m = {
                            preValue: eI,
                            triggerValue: s
                        },
                        f = !0;
                    (C || "selection" === n && !d) && (f = !1);
                    var o = f;
                    let g = null,
                        h = null;

                    function a() {
                        h || (h = [], function t(n, r = "0", o = !1) {
                            return n.map((n, a) => {
                                let i = `${r}-${a}`,
                                    c = n[eg.value],
                                    d = e.includes(c),
                                    u = t(n[eg.children] || [], i, d),
                                    p = l.createElement(sA, n, u.map(e => e.node));
                                if (s === c && (g = p), d) {
                                    let e = {
                                        pos: i,
                                        node: p,
                                        children: u
                                    };
                                    return o || h.push(e), e
                                }
                                return null
                            }).filter(e => e)
                        }(ey), h.sort(({
                            node: {
                                props: {
                                    value: t
                                }
                            }
                        }, {
                            node: {
                                props: {
                                    value: n
                                }
                            }
                        }) => e.indexOf(t) - e.indexOf(n)))
                    }
                    Object.defineProperty(m, "triggerNode", {
                        get: () => ((0, n4.default)(!1, "`triggerNode` is deprecated. Please consider decoupling data with node."), a(), g)
                    }), Object.defineProperty(m, "allCheckedNodes", {
                        get: () => ((0, n4.default)(!1, "`allCheckedNodes` is deprecated. Please consider decoupling data with node."), a(), o) ? h : h.map(({
                            node: e
                        }) => e)
                    }), en ? m.checked = d : m.selected = d;
                    let v = el ? p : p.map(e => e.value);
                    c(er ? v : v[0], el ? null : p.map(e => e.label), m)
                }
            }),
            eB = l.useCallback((e, {
                selected: t,
                source: n
            }) => {
                let l = e$[e],
                    r = l ? .node,
                    o = r ? .[eg.value] ? ? e;
                if (er) {
                    let e = t ? [...ez, o] : eR.filter(e => e !== o);
                    if (et) {
                        let n, {
                                missingRawValues: l,
                                existRawValues: r
                            } = eS(e),
                            o = r.map(e => ex.get(e).key);
                        t ? {
                            checkedKeys: n
                        } = (0, n8.conductCheck)(o, !0, e$) : {
                            checkedKeys: n
                        } = (0, n8.conductCheck)(o, {
                            checked: !1,
                            halfCheckedKeys: eT
                        }, e$), e = [...l, ...n.map(e => e$[e].node[eg.value])]
                    }
                    eL(e, {
                        selected: t,
                        triggerValue: o
                    }, n || "option")
                } else eL([o], {
                    selected: !0,
                    triggerValue: o
                }, "option");
                t || !er ? d ? .(o, sO(r)) : u ? .(o, sO(r))
            }, [eS, ex, e$, eg, er, ez, eL, et, d, u, eR, eT, E]),
            eA = l.useCallback(e => {
                _ && _(e)
            }, [_]),
            eO = sW((e, t) => {
                let n = e.map(e => e.value);
                "clear" === t.type ? eL(n, {}, "selection") : t.values.length && eB(t.values[0].value, {
                    selected: !1,
                    source: "selection"
                })
            }),
            eW = l.useMemo(() => ({
                virtual: O,
                popupMatchSelectWidth: j,
                listHeight: W,
                listItemHeight: D,
                listItemScrollOffset: F,
                treeData: eC,
                fieldNames: eg,
                onSelect: eB,
                treeExpandAction: A,
                treeTitleRender: U,
                onPopupScroll: K,
                leftMaxCount: void 0 === E ? null : E - eH.length,
                leafCountOnly: "SHOW_CHILD" === ef && !C && !!S,
                valueEntities: ex,
                classNames: Q,
                styles: Z
            }), [O, j, W, D, F, eC, eg, eB, A, U, K, E, eH.length, ef, C, S, ex, Q, Z]),
            eD = l.useMemo(() => ({
                checkable: en,
                loadData: z,
                treeLoadedKeys: R,
                onTreeLoad: T,
                checkedKeys: eR,
                halfCheckedKeys: eT,
                treeDefaultExpandAll: H,
                treeExpandedKeys: P,
                treeDefaultExpandedKeys: L,
                onTreeExpand: B,
                treeIcon: q,
                treeMotion: Y,
                showTreeIcon: V,
                switcherIcon: G,
                treeLine: X,
                treeNodeFilterProp: eu,
                keyEntities: e$
            }), [en, z, R, T, eR, eT, H, P, L, B, q, Y, V, G, X, eu, e$]);
        return l.createElement(sX.Provider, {
            value: eW
        }, l.createElement(sD.Provider, {
            value: eD
        }, l.createElement(nB.default, sZ({
            ref: t
        }, J, {
            classNames: Q,
            styles: Z,
            id: ee,
            prefixCls: a,
            mode: er ? "multiple" : void 0,
            displayValues: eH,
            onDisplayValuesChange: eO,
            autoClearSearchValue: ec,
            showSearch: eo,
            searchValue: eb,
            onSearch: e => {
                ev(e), es ? .(e)
            },
            OptionList: sG,
            emptyOptions: !ey.length,
            onPopupVisibleChange: eA,
            popupMatchSelectWidth: j
        }))))
    });
    sJ.TreeNode = sA, sJ.SHOW_ALL = sY, sJ.SHOW_PARENT = sU, sJ.SHOW_CHILD = sK;
    var s0 = e.i(170938),
        s1 = e.i(278587);
    s1.initComponentToken;
    let s2 = l.forwardRef((e, t) => {
            let n, {
                    prefixCls: r,
                    size: o,
                    disabled: a,
                    bordered: i = !0,
                    style: s,
                    className: c,
                    rootClassName: d,
                    treeCheckable: u,
                    multiple: f,
                    listHeight: g = 256,
                    listItemHeight: b,
                    placement: $,
                    notFoundContent: x,
                    switcherIcon: S,
                    treeLine: C,
                    getPopupContainer: k,
                    popupClassName: E,
                    dropdownClassName: w,
                    treeIcon: N = !1,
                    transitionName: I,
                    choiceTransitionName: M = "",
                    status: z,
                    treeExpandAction: R,
                    builtinPlacements: T,
                    dropdownMatchSelectWidth: H,
                    popupMatchSelectWidth: P,
                    allowClear: L,
                    variant: B,
                    dropdownStyle: A,
                    dropdownRender: W,
                    popupRender: D,
                    onDropdownVisibleChange: _,
                    onOpenChange: j,
                    tagRender: X,
                    maxCount: q,
                    showCheckedStrategy: V,
                    treeCheckStrictly: G,
                    styles: Y,
                    classNames: U,
                    ...K
                } = e,
                {
                    getPrefixCls: Q,
                    getPopupContainer: Z,
                    direction: J,
                    styles: ee,
                    classNames: et,
                    switcherIcon: en
                } = (0, h.useComponentConfig)("treeSelect"),
                {
                    renderEmpty: el,
                    virtual: er,
                    popupMatchSelectWidth: eo,
                    popupOverflow: ea
                } = l.useContext(h.ConfigContext),
                [, ei] = (0, ex.useToken)(),
                es = b ? ? ei ? .controlHeightSM + ei ? .paddingXXS,
                ed = Q(),
                eu = Q("select", r),
                ep = Q("select-tree", r),
                em = Q("tree-select", r),
                {
                    compactSize: ef,
                    compactItemClassnames: eg
                } = (0, lk.useCompactItemContext)(eu, J),
                eh = (0, O.default)(eu),
                ev = (0, O.default)(em),
                [eb, ey] = (0, l$.default)(eu, eh);
            (0, y.genStyleHooks)("TreeSelect", e => (e => {
                let {
                    componentCls: t,
                    treePrefixCls: n,
                    colorBgElevated: l
                } = e, r = `.${n}`;
                return [{
                    [`${t}-dropdown`]: [{
                        padding: `${(0,v.unit)(e.paddingXS)} ${(0,v.unit)(e.calc(e.paddingXS).div(2).equal())}`
                    }, (0, s1.genTreeStyle)(n, (0, F.mergeToken)(e, {
                        colorBgContainer: l
                    }), !1), {
                        [r]: {
                            borderRadius: 0,
                            [`${r}-list-holder-inner`]: {
                                alignItems: "stretch",
                                [`${r}-treenode`]: {
                                    [`${r}-node-content-wrapper`]: {
                                        flex: "auto"
                                    }
                                }
                            }
                        }
                    }, (0, lR.getStyle)(`${n}-checkbox`, e), {
                        "&-rtl": {
                            direction: "rtl",
                            [`${r}-switcher${r}-switcher_close`]: {
                                [`${r}-switcher-icon svg`]: {
                                    transform: "rotate(90deg)"
                                }
                            }
                        }
                    }]
                }]
            })((0, F.mergeToken)(e, {
                treePrefixCls: ep
            })), s1.initComponentToken, {
                resetFont: !1
            })(em, ev);
            let [e$, eS] = (0, lb.default)("treeSelect", B, i), eC = (0, lv.default)(e => o ? ? ef ? ? e), ek = l.useContext(lh.default), eE = a ? ? ek, {
                status: ew,
                hasFeedback: eN,
                isFormItemInput: eI,
                feedbackIcon: eM
            } = l.useContext(tg.FormItemInputContext), ez = (0, lf.getMergedStatus)(ew, z), eR = { ...e,
                size: eC,
                disabled: eE,
                status: ez,
                variant: e$
            }, [eT, eH] = (0, m.useMergeSemantic)([et, U], [ee, Y], {
                props: eR
            }, {
                popup: {
                    _default: "root"
                }
            }), eP = (0, p.clsx)(E || w, `${em}-dropdown`, {
                [`${em}-dropdown-rtl`]: "rtl" === J
            }, d, eT.root, eT.popup ? .root, ey, eh, ev, eb), eL = (0, lS.default)(D || W), eB = !!(u || f), eA = l.useMemo(() => {
                if (!q || ("SHOW_ALL" !== V || G) && "SHOW_PARENT" !== V) return q
            }, [q, V, G]), eO = (0, lC.default)(e.suffixIcon, e.showArrow), {
                suffixIcon: eW,
                removeIcon: eF,
                clearIcon: e_
            } = (0, lx.default)({ ...K,
                multiple: eB,
                showSuffixIcon: eO,
                hasFeedback: eN,
                feedbackIcon: eM,
                prefixCls: eu,
                componentName: "TreeSelect"
            });
            n = void 0 !== x ? x : el ? .("Select") || l.createElement(lg.default, {
                componentName: "Select"
            });
            let ej = (0, eD.omit)(K, ["suffixIcon", "removeIcon", "clearIcon", "itemIcon", "switcherIcon", "style"]),
                eX = l.useMemo(() => void 0 !== $ ? $ : "rtl" === J ? "bottomRight" : "bottomLeft", [$, J]),
                eq = (0, p.clsx)(!r && em, {
                    [`${eu}-lg`]: "large" === eC,
                    [`${eu}-sm`]: "small" === eC,
                    [`${eu}-rtl`]: "rtl" === J,
                    [`${eu}-${e$}`]: eS,
                    [`${eu}-in-form-item`]: eI
                }, (0, lf.getStatusClassNames)(eu, ez, eN), eg, c, d, eT ? .root, ey, eh, ev, eb),
                eV = S ? ? en,
                [eG] = (0, ec.useZIndex)("SelectLike", eH.popup ? .root ? .zIndex);
            return l.createElement(sJ, {
                classNames: eT,
                styles: eH,
                virtual: er,
                disabled: eE,
                ...ej,
                popupMatchSelectWidth: P ? ? H ? ? eo,
                builtinPlacements: (0, ly.default)(T, ea),
                ref: t,
                prefixCls: eu,
                className: eq,
                style: { ...eH ? .root,
                    ...s
                },
                listHeight: g,
                listItemHeight: es,
                treeCheckable: u ? l.createElement("span", {
                    className: `${eu}-tree-checkbox-inner`
                }) : u,
                treeLine: !!C,
                suffixIcon: eW,
                multiple: eB,
                placement: eX,
                removeIcon: eF,
                allowClear: !0 === L ? {
                    clearIcon: e_
                } : L,
                switcherIcon: e => l.createElement(s0.default, {
                    prefixCls: ep,
                    switcherIcon: eV,
                    treeNodeProps: e,
                    showLine: C
                }),
                showTreeIcon: N,
                notFoundContent: n,
                getPopupContainer: k || Z,
                treeMotion: null,
                popupClassName: eP,
                popupStyle: { ...eH.root,
                    ...eH.popup ? .root,
                    zIndex : eG
                },
                popupRender: eL,
                onPopupVisibleChange: j || _,
                choiceTransitionName: (0, lm.getTransitionName)(ed, "", M),
                transitionName: (0, lm.getTransitionName)(ed, "slide-up", I),
                treeExpandAction: R,
                tagRender: eB ? X : void 0,
                maxCount: eA,
                showCheckedStrategy: V,
                treeCheckStrictly: G
            })
        }),
        s3 = (0, eF.default)(s2, "popupAlign", e => (0, eD.omit)(e, ["visible"]));
    s2.TreeNode = sA, s2.SHOW_ALL = sY, s2.SHOW_PARENT = sU, s2.SHOW_CHILD = sK, s2._InternalPanelDoNotUseOrYouWillBeFired = s3;
    var s5 = e.i(438843);

    function s4() {
        return (s4 = Object.assign.bind()).apply(this, arguments)
    }
    let s8 = l.forwardRef((e, t) => l.createElement(eQ.default, s4({}, e, {
        ref: t,
        icon: s5.default
    })));
    var s6 = e.i(14515),
        s9 = e.i(929447);
    let s7 = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "enter",
        theme: "outlined"
    };

    function ce() {
        return (ce = Object.assign.bind()).apply(this, arguments)
    }
    let ct = l.forwardRef((e, t) => l.createElement(eQ.default, ce({}, e, {
        ref: t,
        icon: s7
    })));
    var cn = e.i(635432);
    e.i(765846);
    var cl = e.i(896091);
    let cr = (0, y.genStyleHooks)("Typography", e => {
            let t, {
                componentCls: n,
                titleMarginTop: l
            } = e;
            return {
                [n]: {
                    color: e.colorText,
                    wordBreak: "break-word",
                    lineHeight: e.lineHeight,
                    [`&${n}-secondary`]: {
                        color: e.colorTextDescription
                    },
                    [`&${n}-success`]: {
                        color: e.colorSuccessText
                    },
                    [`&${n}-warning`]: {
                        color: e.colorWarningText
                    },
                    [`&${n}-danger`]: {
                        color: e.colorErrorText,
                        "a&:active, a&:focus": {
                            color: e.colorErrorTextActive
                        },
                        "a&:hover": {
                            color: e.colorErrorTextHover
                        }
                    },
                    [`&${n}-disabled`]: {
                        color: e.colorTextDisabled,
                        cursor: "not-allowed",
                        userSelect: "none"
                    },
                    [`
        div&,
        p
      `]: {
                        marginBottom: "1em"
                    },
                    ...(t = {}, [1, 2, 3, 4, 5].forEach(n => {
                        t[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = ((e, t, n, l) => {
                            let {
                                titleMarginBottom: r,
                                fontWeightStrong: o
                            } = l;
                            return {
                                marginBottom: r,
                                color: n,
                                fontWeight: o,
                                fontSize: e,
                                lineHeight: t
                            }
                        })(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e)
                    }), t),
                    [`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]: {
                        marginTop: l
                    },
                    [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
                        [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: {
                            marginTop: l
                        }
                    },
                    ...{
                        code: {
                            margin: "0 0.2em",
                            paddingInline: "0.4em",
                            paddingBlock: "0.2em 0.1em",
                            fontSize: "85%",
                            fontFamily: e.fontFamilyCode,
                            background: "rgba(150, 150, 150, 0.1)",
                            border: "1px solid rgba(100, 100, 100, 0.2)",
                            borderRadius: 3
                        },
                        kbd: {
                            margin: "0 0.2em",
                            paddingInline: "0.4em",
                            paddingBlock: "0.15em 0.1em",
                            fontSize: "90%",
                            fontFamily: e.fontFamilyCode,
                            background: "rgba(150, 150, 150, 0.06)",
                            border: "1px solid rgba(100, 100, 100, 0.2)",
                            borderBottomWidth: 2,
                            borderRadius: 3
                        },
                        mark: {
                            padding: 0,
                            backgroundColor: cl.gold[2]
                        },
                        "u, ins": {
                            textDecoration: "underline",
                            textDecorationSkipInk: "auto"
                        },
                        "s, del": {
                            textDecoration: "line-through"
                        },
                        strong: {
                            fontWeight: e.fontWeightStrong
                        },
                        "ul, ol": {
                            marginInline: 0,
                            marginBlock: "0 1em",
                            padding: 0,
                            li: {
                                marginInline: "20px 0",
                                marginBlock: 0,
                                paddingInline: "4px 0",
                                paddingBlock: 0
                            }
                        },
                        ul: {
                            listStyleType: "circle",
                            ul: {
                                listStyleType: "disc"
                            }
                        },
                        ol: {
                            listStyleType: "decimal"
                        },
                        "pre, blockquote": {
                            margin: "1em 0"
                        },
                        pre: {
                            padding: "0.4em 0.6em",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            background: "rgba(150, 150, 150, 0.1)",
                            border: "1px solid rgba(100, 100, 100, 0.2)",
                            borderRadius: 3,
                            fontFamily: e.fontFamilyCode,
                            code: {
                                display: "inline",
                                margin: 0,
                                padding: 0,
                                fontSize: "inherit",
                                fontFamily: "inherit",
                                background: "transparent",
                                border: 0
                            }
                        },
                        blockquote: {
                            paddingInline: "0.6em 0",
                            paddingBlock: 0,
                            borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
                            opacity: .85
                        }
                    },
                    ...(e => {
                        let {
                            componentCls: t
                        } = e;
                        return {
                            "a&, a": { ...(0, b.operationUnit)(e),
                                userSelect: "text",
                                [`&[disabled], &${t}-disabled`]: {
                                    color: e.colorTextDisabled,
                                    cursor: "not-allowed",
                                    "&:active, &:hover": {
                                        color: e.colorTextDisabled
                                    },
                                    "&:active": {
                                        pointerEvents: "none"
                                    }
                                }
                            }
                        }
                    })(e),
                    [`
        ${n}-expand,
        ${n}-collapse,
        ${n}-edit,
        ${n}-copy
      `]: { ...(0, b.operationUnit)(e),
                        marginInlineStart: e.marginXXS
                    },
                    ...(e => {
                        let {
                            componentCls: t,
                            paddingSM: n
                        } = e;
                        return {
                            "&-edit-content": {
                                position: "relative",
                                "div&": {
                                    insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
                                    insetBlockStart: e.calc(n).div(-2).add(1).equal(),
                                    marginBottom: e.calc(n).div(2).sub(2).equal()
                                },
                                [`${t}-edit-content-confirm`]: {
                                    position: "absolute",
                                    insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
                                    insetBlockEnd: e.marginXS,
                                    color: e.colorIcon,
                                    fontWeight: "normal",
                                    fontSize: e.fontSize,
                                    fontStyle: "normal",
                                    pointerEvents: "none"
                                },
                                textarea: {
                                    margin: "0!important",
                                    MozTransition: "none",
                                    height: "1em"
                                }
                            }
                        }
                    })(e),
                    ...{
                        [`${e.componentCls}-copy-success`]: {
                            [`
    &,
    &:hover,
    &:focus`]: {
                                color: e.colorSuccess
                            }
                        },
                        [`${e.componentCls}-copy-icon-only`]: {
                            marginInlineStart: 0
                        }
                    },
                    ...{
                        [`
  a&-ellipsis,
  span&-ellipsis
  `]: {
                            display: "inline-block",
                            maxWidth: "100%"
                        },
                        "&-ellipsis-single-line": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "a&, span&": {
                                verticalAlign: "bottom"
                            },
                            "> code": {
                                paddingBlock: 0,
                                maxWidth: "calc(100% - 1.2em)",
                                display: "inline-block",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                verticalAlign: "bottom",
                                boxSizing: "content-box"
                            }
                        },
                        "&-ellipsis-multiple-line": {
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical"
                        }
                    },
                    "&-rtl": {
                        direction: "rtl"
                    }
                }
            }
        }, () => ({
            titleMarginTop: "1.2em",
            titleMarginBottom: "0.5em"
        })),
        co = e => {
            let {
                prefixCls: t,
                "aria-label": n,
                className: r,
                style: o,
                direction: a,
                maxLength: i,
                autoSize: s = !0,
                value: c,
                onSave: d,
                onCancel: u,
                onEnd: m,
                component: f,
                enterIcon: h = l.createElement(ct, null)
            } = e, v = l.useRef(null), b = l.useRef(!1), y = l.useRef(null), [$, x] = l.useState(c);
            l.useEffect(() => {
                x(c)
            }, [c]), l.useEffect(() => {
                if (v.current ? .resizableTextArea) {
                    let {
                        textArea: e
                    } = v.current.resizableTextArea;
                    e.focus();
                    let {
                        length: t
                    } = e.value;
                    e.setSelectionRange(t, t)
                }
            }, []);
            let S = () => {
                    d($.trim())
                },
                [C, k] = cr(t),
                E = (0, p.clsx)(t, `${t}-edit-content`, {
                    [`${t}-rtl`]: "rtl" === a,
                    [`${t}-${f}`]: !!f
                }, r, C, k);
            return l.createElement("div", {
                className: E,
                style: o
            }, l.createElement(cn.default, {
                ref: v,
                maxLength: i,
                value: $,
                onChange: ({
                    target: e
                }) => {
                    x(e.value.replace(/[\n\r]/g, ""))
                },
                onKeyDown: ({
                    keyCode: e
                }) => {
                    b.current || (y.current = e)
                },
                onKeyUp: ({
                    keyCode: e,
                    ctrlKey: t,
                    altKey: n,
                    metaKey: l,
                    shiftKey: r
                }) => {
                    y.current !== e || b.current || t || n || l || r || (e === K.default.ENTER ? (S(), m ? .()) : e === K.default.ESC && u())
                },
                onCompositionStart: () => {
                    b.current = !0
                },
                onCompositionEnd: () => {
                    b.current = !1
                },
                onBlur: () => {
                    S()
                },
                "aria-label": n,
                rows: 1,
                autoSize: s
            }), null !== h ? (0, g.cloneElement)(h, {
                className: `${t}-edit-content-confirm`
            }) : null)
        },
        ca = async (e, t) => {
            try {
                return t ? await navigator.clipboard.write([new ClipboardItem({
                    "text/html": new Blob([e], {
                        type: "text/html"
                    }),
                    "text/plain": new Blob([e], {
                        type: "text/plain"
                    })
                })]) : await navigator.clipboard.writeText(e), !0
            } catch {
                return !1
            }
        };
    async function ci(e, t) {
        if ("string" != typeof e) return !1;
        let n = t ? .format === "text/html";
        return !!(await ca(e, n) || ((e, t) => {
            let n = !1,
                l = l => {
                    l.stopPropagation(), l.preventDefault(), l.clipboardData ? .clearData(), l.clipboardData ? .setData("text/plain", e), t && l.clipboardData ? .setData("text/html", e), n = !0
                };
            try {
                return document.addEventListener("copy", l, {
                    capture: !0
                }), document.execCommand("copy"), n
            } catch {
                return !1
            } finally {
                document.removeEventListener("copy", l, {
                    capture: !0
                })
            }
        })(e, n))
    }

    function cs(e, t) {
        return l.useMemo(() => {
            let n = !!e;
            return [n, { ...t,
                ...n && "object" == typeof e ? e : null
            }]
        }, [e])
    }
    let cc = l.forwardRef((e, t) => {
            let {
                prefixCls: n,
                component: r = "article",
                className: o,
                rootClassName: a,
                children: i,
                direction: s,
                style: c,
                ...d
            } = e, {
                getPrefixCls: u,
                direction: m,
                className: f,
                style: g
            } = (0, h.useComponentConfig)("typography"), v = u("typography", n), [b, y] = cr(v), $ = (0, p.clsx)(v, f, {
                [`${v}-rtl`]: "rtl" === (s ? ? m)
            }, o, a, b, y), x = { ...g,
                ...c
            };
            return l.createElement(r, {
                className: $,
                style: x,
                ref: t,
                ...d
            }, i)
        }),
        cd = {
            icon: {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                    }
                }]
            },
            name: "copy",
            theme: "outlined"
        };

    function cu() {
        return (cu = Object.assign.bind()).apply(this, arguments)
    }
    let cp = l.forwardRef((e, t) => l.createElement(eQ.default, cu({}, e, {
        ref: t,
        icon: cd
    })));

    function cm(e) {
        return !1 === e ? [!1, !1] : Array.isArray(e) ? e : [e]
    }

    function cf(e, t, n) {
        return !0 === e || void 0 === e ? t : e || n && t
    }
    let cg = e => ["string", "number"].includes(typeof e),
        ch = ({
            prefixCls: e,
            copied: t,
            locale: n,
            iconOnly: r,
            tooltips: o,
            icon: a,
            tabIndex: i,
            onCopy: s,
            loading: c
        }) => {
            let d = cm(o),
                u = cm(a),
                {
                    copied: m,
                    copy: f
                } = n ? ? {},
                g = t ? m : f,
                h = cf(d[+!!t], g),
                v = "string" == typeof h ? h : g;
            return l.createElement(l5.default, {
                title: h
            }, l.createElement("button", {
                type: "button",
                className: (0, p.clsx)(`${e}-copy`, {
                    [`${e}-copy-success`]: t,
                    [`${e}-copy-icon-only`]: r
                }),
                onClick: s,
                "aria-label": v,
                tabIndex: i
            }, t ? cf(u[1], l.createElement(ig.default, null), !0) : cf(u[0], c ? l.createElement(ei.default, null) : l.createElement(cp, null), !0)))
        },
        cv = l.forwardRef(({
            style: e,
            children: t
        }, n) => {
            let r = l.useRef(null);
            return l.useImperativeHandle(n, () => ({
                isExceed: () => {
                    let e = r.current;
                    return e.scrollHeight > e.clientHeight
                },
                getHeight: () => r.current.clientHeight
            })), l.createElement("span", {
                "aria-hidden": !0,
                ref: r,
                style: {
                    position: "fixed",
                    display: "block",
                    left: 0,
                    top: 0,
                    pointerEvents: "none",
                    backgroundColor: "rgba(255, 0, 0, 0.65)",
                    ...e
                }
            }, t)
        });

    function cb(e, t) {
        let n = 0,
            l = [];
        for (let r = 0; r < e.length; r += 1) {
            if (n === t) return l;
            let o = e[r],
                a = n + (cg(o) ? String(o).length : 1);
            if (a > t) {
                let e = t - n;
                return l.push(String(o).slice(0, e)), l
            }
            l.push(o), n = a
        }
        return e
    }
    let cy = {
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical"
    };

    function c$(e) {
        let {
            enableMeasure: t,
            width: n,
            text: r,
            children: o,
            rows: a,
            expanded: i,
            miscDeps: s,
            onEllipsis: c
        } = e, d = l.useMemo(() => (0, ej.toArray)(r), [r]), u = l.useMemo(() => d.reduce((e, t) => e + (cg(t) ? String(t).length : 1), 0), [r]), p = l.useMemo(() => o(d, !1), [r]), [m, f] = l.useState(null), g = l.useRef(null), h = l.useRef(null), v = l.useRef(null), b = l.useRef(null), y = l.useRef(null), [$, x] = l.useState(!1), [S, C] = l.useState(0), [k, E] = l.useState(0), [w, N] = l.useState(null);
        (0, lU.default)(() => {
            t && n && u ? C(1) : C(0)
        }, [n, r, a, t, d]), (0, lU.default)(() => {
            if (1 === S) C(2), N(h.current && getComputedStyle(h.current).whiteSpace);
            else if (2 === S) {
                let e = !!v.current ? .isExceed();
                C(e ? 3 : 4), f(e ? [0, u] : null), x(e), E(Math.max(v.current ? .getHeight() || 0, (1 === a ? 0 : b.current ? .getHeight() || 0) + (y.current ? .getHeight() || 0)) + 1), c(e)
            }
        }, [S]);
        let I = m ? Math.ceil((m[0] + m[1]) / 2) : 0;
        (0, lU.default)(() => {
            let [e, t] = m || [0, 0];
            if (e !== t) {
                let n = (g.current ? .getHeight() || 0) > k,
                    l = I;
                t - e == 1 && (l = n ? e : t), f(n ? [e, l] : [l, t])
            }
        }, [m, I]);
        let M = l.useMemo(() => {
                if (!t) return o(d, !1);
                if (3 !== S || !m || m[0] !== m[1]) {
                    let e = o(d, !1);
                    return [4, 0].includes(S) ? e : l.createElement("span", {
                        style: { ...cy,
                            WebkitLineClamp: a
                        }
                    }, e)
                }
                return o(i ? d : cb(d, m[0]), $)
            }, [i, S, m, d].concat((0, H.default)(s))),
            z = {
                width: n,
                margin: 0,
                padding: 0,
                whiteSpace: "nowrap" === w ? "normal" : "inherit"
            };
        return l.createElement(l.Fragment, null, M, 2 === S && l.createElement(l.Fragment, null, l.createElement(cv, {
            style: { ...z,
                ...cy,
                WebkitLineClamp: a
            },
            ref: v
        }, p), l.createElement(cv, {
            style: { ...z,
                ...cy,
                WebkitLineClamp: a - 1
            },
            ref: b
        }, p), l.createElement(cv, {
            style: { ...z,
                ...cy,
                WebkitLineClamp: 1
            },
            ref: y
        }, o([], !0))), 3 === S && m && m[0] !== m[1] && l.createElement(cv, {
            style: { ...z,
                top: 400
            },
            ref: g
        }, o(cb(d, I), !0)), 1 === S && l.createElement("span", {
            style: {
                whiteSpace: "inherit"
            },
            ref: h
        }))
    }
    let cx = ({
            enableEllipsis: e,
            isEllipsis: t,
            children: n,
            tooltipProps: r
        }) => r ? .title && e ? l.createElement(l5.default, {
            open: !!t && void 0,
            ...r
        }, n) : n,
        cS = ["delete", "mark", "code", "underline", "strong", "keyboard", "italic"],
        cC = l.forwardRef((e, t) => {
            let n, r, o, {
                    prefixCls: a,
                    className: i,
                    style: s,
                    type: c,
                    disabled: d,
                    children: m,
                    ellipsis: g,
                    editable: v,
                    copyable: b,
                    component: y,
                    title: $,
                    ...x
                } = e,
                {
                    getPrefixCls: S,
                    direction: C
                } = l.useContext(h.ConfigContext),
                [k] = (0, s9.default)("Text"),
                E = l.useRef(null),
                w = l.useRef(null),
                N = S("typography", a),
                I = (0, eD.omit)(x, cS),
                [M, z] = cs(v),
                [R, T] = (0, tm.useControlledState)(!1, z.editing),
                {
                    triggerType: L = ["icon"]
                } = z,
                B = e => {
                    e && z.onStart ? .(), T(e)
                },
                A = (n = (0, l.useRef)(void 0), (0, l.useEffect)(() => {
                    n.current = R
                }), n.current);
            (0, lU.default)(() => {
                !R && A && w.current ? .focus()
            }, [R]);
            let O = e => {
                    e ? .preventDefault(), B(!0)
                },
                [W, D] = cs(b),
                {
                    copied: F,
                    copyLoading: _,
                    onClick: j
                } = (({
                    copyConfig: e,
                    children: t
                }) => {
                    let [n, r] = l.useState(!1), [o, a] = l.useState(!1), i = l.useRef(null), s = () => {
                        i.current && clearTimeout(i.current)
                    }, c = {};
                    return e.format && (c.format = e.format), l.useEffect(() => s, []), {
                        copied: n,
                        copyLoading: o,
                        onClick: (0, P.useEvent)(async n => {
                            n ? .preventDefault(), n ? .stopPropagation(), a(!0);
                            try {
                                let l = "function" == typeof e.text ? await e.text() : e.text;
                                await ci(l || oj(t, !0).join("") || "", c), a(!1), r(!0), s(), i.current = setTimeout(() => {
                                    r(!1)
                                }, 3e3), e.onCopy ? .(n)
                            } catch (e) {
                                throw a(!1), e
                            }
                        })
                    }
                })({
                    copyConfig: D,
                    children: m
                }),
                [X, q] = l.useState(!1),
                [V, G] = l.useState(!1),
                [Y, U] = l.useState(!1),
                [K, Q] = l.useState(!1),
                [Z, J] = l.useState(!0),
                [ee, et] = cs(g, {
                    expandable: !1,
                    symbol: e => e ? k ? .collapse : k ? .expand
                }),
                [en, el] = (0, tm.useControlledState)(et.defaultExpanded || !1, et.expanded),
                er = ee && (!en || "collapsible" === et.expandable),
                {
                    rows: eo = 1
                } = et,
                ea = l.useMemo(() => er && (void 0 !== et.suffix || et.onEllipsis || et.expandable || M || W), [er, et, M, W]);
            (0, lU.default)(() => {
                ee && !ea && (q((0, s6.isStyleSupport)("webkitLineClamp")), G((0, s6.isStyleSupport)("textOverflow")))
            }, [ea, ee]);
            let [ei, es] = l.useState(er), ec = l.useMemo(() => !ea && (1 === eo ? V : X), [ea, V, X]);
            (0, lU.default)(() => {
                es(ec && er)
            }, [ec, er]);
            let ed = er && (ei ? K : Y),
                eu = er && 1 === eo && ei,
                ep = er && eo > 1 && ei,
                [em, ef] = l.useState(0),
                eg = e => {
                    U(e), Y !== e && et.onEllipsis ? .(e)
                };
            l.useEffect(() => {
                let e = E.current;
                if (ee && ei && e) {
                    let t, n, l, r = (t = document.createElement("em"), e.appendChild(t), n = e.getBoundingClientRect(), l = t.getBoundingClientRect(), e.removeChild(t), n.left > l.left || l.right > n.right || n.top > l.top || l.bottom > n.bottom);
                    K !== r && Q(r)
                }
            }, [ee, ei, m, ep, Z, em]), l.useEffect(() => {
                let e = E.current;
                if ("undefined" == typeof IntersectionObserver || !e || !ei || !er) return;
                let t = new IntersectionObserver(() => {
                    J(!!e.offsetParent)
                });
                return t.observe(e), () => {
                    t.disconnect()
                }
            }, [ei, er]);
            let eh = (r = et.tooltip, o = z.text, (0, l.useMemo)(() => !0 === r ? {
                    title: o ? ? m
                } : (0, l.isValidElement)(r) ? {
                    title: r
                } : "object" == typeof r ? {
                    title: o ? ? m,
                    ...r
                } : {
                    title: r
                }, [r, o, m])),
                ev = l.useMemo(() => {
                    if (ee && !ei) return [z.text, m, $, eh.title].find(cg)
                }, [ee, ei, $, eh.title, ed]);
            return R ? l.createElement(co, {
                value: z.text ? ? ("string" == typeof m ? m : ""),
                onSave: e => {
                    z.onChange ? .(e), B(!1)
                },
                onCancel: () => {
                    z.onCancel ? .(), B(!1)
                },
                onEnd: z.onEnd,
                prefixCls: N,
                className: i,
                style: s,
                direction: C,
                component: y,
                maxLength: z.maxLength,
                autoSize: z.autoSize,
                enterIcon: z.enterIcon
            }) : l.createElement(ob.default, {
                onResize: ({
                    offsetWidth: e
                }) => {
                    ef(e)
                },
                disabled: !er
            }, n => l.createElement(cx, {
                tooltipProps: eh,
                enableEllipsis: er,
                isEllipsis: ed
            }, l.createElement(cc, {
                className: (0, p.clsx)({
                    [`${N}-${c}`]: c,
                    [`${N}-disabled`]: d,
                    [`${N}-ellipsis`]: ee,
                    [`${N}-ellipsis-single-line`]: eu,
                    [`${N}-ellipsis-multiple-line`]: ep
                }, i),
                prefixCls: a,
                style: { ...s,
                    WebkitLineClamp: ep ? eo : void 0
                },
                component: y,
                ref: (0, u.composeRef)(n, E, t),
                direction: C,
                onClick: L.includes("text") ? O : void 0,
                "aria-label": ev ? .toString(),
                title: $,
                ...I
            }, l.createElement(c$, {
                enableMeasure: er && !ei,
                text: m,
                rows: eo,
                width: em,
                onEllipsis: eg,
                expanded: en,
                miscDeps: [F, en, _, M, W, k].concat((0, H.default)(cS.map(t => e[t])))
            }, (t, n) => {
                let r;
                return function({
                    mark: e,
                    code: t,
                    underline: n,
                    delete: r,
                    strong: o,
                    keyboard: a,
                    italic: i
                }, s) {
                    let c = s;

                    function d(e, t) {
                        t && (c = l.createElement(e, {}, c))
                    }
                    return d("strong", o), d("u", n), d("del", r), d("code", t), d("mark", e), d("kbd", a), d("i", i), c
                }(e, l.createElement(l.Fragment, null, t.length > 0 && n && !en && ev ? l.createElement("span", {
                    key: "show-content",
                    "aria-hidden": !0
                }, t) : t, [(r = n) && !en && l.createElement("span", {
                    "aria-hidden": !0,
                    key: "ellipsis"
                }, "..."), et.suffix, [r && (() => {
                    let {
                        expandable: e,
                        symbol: t
                    } = et;
                    return e ? l.createElement("button", {
                        type: "button",
                        key: "expand",
                        className: `${N}-${en?"collapse":"expand"}`,
                        onClick: e => {
                            var t;
                            el((t = {
                                expanded: !en
                            }).expanded), et.onExpand ? .(e, t)
                        },
                        "aria-label": en ? k.collapse : k ? .expand
                    }, "function" == typeof t ? t(en) : t) : null
                })(), (() => {
                    if (!M) return;
                    let {
                        icon: e,
                        tooltip: t,
                        tabIndex: n
                    } = z, r = (0, ej.toArray)(t)[0] || k ? .edit, o = "string" == typeof r ? r : "";
                    return L.includes("icon") ? l.createElement(l5.default, {
                        key: "edit",
                        title: !1 === t ? "" : r
                    }, l.createElement("button", {
                        type: "button",
                        ref: w,
                        className: `${N}-edit`,
                        onClick: O,
                        "aria-label": o,
                        tabIndex: n
                    }, e || l.createElement(s8, {
                        role: "button"
                    }))) : null
                })(), W ? l.createElement(ch, {
                    key: "copy",
                    ...D,
                    prefixCls: N,
                    copied: F,
                    locale: k,
                    onCopy: j,
                    loading: _,
                    iconOnly: !(0, f.default)(m)
                }) : null]]))
            }))))
        }),
        ck = l.forwardRef((e, t) => {
            let {
                ellipsis: n,
                rel: r,
                children: o,
                navigate: a,
                ...i
            } = e, s = { ...i,
                rel: void 0 === r && "_blank" === i.target ? "noopener noreferrer" : r
            };
            return l.createElement(cC, { ...s,
                ref: t,
                ellipsis: !!n,
                component: "a"
            }, o)
        }),
        cE = l.forwardRef((e, t) => {
            let {
                children: n,
                ...r
            } = e;
            return l.createElement(cC, {
                ref: t,
                ...r,
                component: "div"
            }, n)
        }),
        cw = l.forwardRef((e, t) => {
            let {
                ellipsis: n,
                children: r,
                ...o
            } = e, a = l.useMemo(() => n && "object" == typeof n ? (0, eD.omit)(n, ["expandable", "rows"]) : n, [n]);
            return l.createElement(cC, {
                ref: t,
                ...o,
                ellipsis: a,
                component: "span"
            }, r)
        }),
        cN = [1, 2, 3, 4, 5],
        cI = l.forwardRef((e, t) => {
            let {
                level: n = 1,
                children: r,
                ...o
            } = e, a = cN.includes(n) ? `h${n}` : "h1";
            return l.createElement(cC, {
                ref: t,
                ...o,
                component: a
            }, r)
        });
    cc.Text = cw, cc.Link = ck, cc.Title = cI, cc.Paragraph = cE;
    var cM = e.i(85060),
        cz = e.i(686746);
    e.i(46302);
    var cR = e.i(32044);
    let cT = {
        subtree: !0,
        childList: !0,
        attributeFilter: ["style", "class"]
    };
    var cH = e.i(922611);
    let cP = (e, t, n = 1) => {
            let l = document.createElement("canvas"),
                r = l.getContext("2d"),
                o = e * n,
                a = t * n;
            return l.setAttribute("width", `${o}px`), l.setAttribute("height", `${a}px`), r.save(), [r, l, o, a]
        },
        cL = {
            visibility: "visible !important"
        };

    function cB(e, t) {
        return e.size === t.size ? e : t
    }
    let cA = {
        position: "relative",
        overflow: "hidden"
    };
    e.s(["Affix", () => n.default, "Alert", 0, E, "Anchor", 0, V, "App", 0, eW, "AutoComplete", 0, eV, "Avatar", () => eU.default, "BackTop", 0, e => {
        let {
            prefixCls: t,
            className: n,
            rootClassName: r,
            visibilityHeight: o = 400,
            target: a,
            onClick: i,
            duration: s = 450,
            children: d
        } = e, [u, m] = l.default.useState(0 === o), f = l.default.useRef(null), v = () => f.current ? .ownerDocument || window, b = (0, e1.default)(e => {
            m((0, B.default)(e.target) >= o)
        });
        l.default.useEffect(() => {
            let e = (a || v)();
            return b({
                target: e
            }), e ? .addEventListener("scroll", b), () => {
                b.cancel(), e ? .removeEventListener("scroll", b)
            }
        }, [a]);
        let {
            getPrefixCls: y,
            direction: $
        } = l.default.useContext(h.ConfigContext), x = y("back-top", t), S = y(), C = (0, O.default)(x), [k, E] = e2(x, C), w = (0, p.clsx)(k, E, x, {
            [`${x}-rtl`]: "rtl" === $
        }, n, r), N = (0, e0.default)(e, ["prefixCls", "className", "rootClassName", "children", "visibilityHeight", "target"]), I = l.default.createElement("div", {
            className: `${x}-content`
        }, l.default.createElement("div", {
            className: `${x}-icon`
        }, l.default.createElement(eJ, null)));
        return l.default.createElement("div", { ...N,
            className: w,
            onClick: e => {
                (0, A.default)(0, {
                    getContainer: a || v,
                    duration: s
                }), i ? .(e)
            },
            ref: f
        }, l.default.createElement(c.default, {
            visible: u,
            motionName: `${S}-fade`
        }, ({
            className: e
        }) => (0, g.cloneElement)(d || I, ({
            className: t
        }) => ({
            className: (0, p.clsx)(e, t)
        }))))
    }, "Badge", 0, ti, "Breadcrumb", () => tc.default, "Button", () => td.default, "Calendar", 0, tz, "Card", () => tR.default, "Carousel", 0, nL, "Cascader", 0, lW, "Checkbox", () => lF.default, "Col", () => l_.default, "Collapse", () => lj.default, "ColorPicker", 0, rT, "ConfigProvider", () => rP.default, "DatePicker", () => rL.default, "Descriptions", 0, rX, "Divider", () => lG.default, "Drawer", () => rq.default, "Dropdown", () => rV.default, "Empty", () => rG.default, "Flex", 0, rJ, "FloatButton", 0, r7, "Form", () => oo.default, "Grid", 0, {
        useBreakpoint: function() {
            return (0, rA.default)()
        }
    }, "Image", () => oa.default, "Input", () => oi.default, "InputNumber", () => rr.default, "Layout", () => os.default, "List", 0, ov, "Masonry", 0, ok, "Mentions", 0, oK, "Menu", () => oZ.default, "Modal", () => o9.default, "Pagination", () => ou.default, "Popconfirm", 0, ah, "Popover", () => lq.default, "Progress", () => av.default, "QRCode", 0, e => {
        let [, t] = (0, ex.useToken)(), {
            value: n,
            type: r = "canvas",
            icon: o = "",
            size: a = 160,
            iconSize: i,
            color: s = t.colorText,
            errorLevel: c = "M",
            status: u = "active",
            bordered: f = !0,
            onRefresh: g,
            style: v,
            className: b,
            rootClassName: y,
            prefixCls: $,
            bgColor: x = "transparent",
            statusRender: S,
            classNames: C,
            styles: k,
            boostLevel: E,
            ...w
        } = e, {
            getPrefixCls: N,
            className: I,
            style: M,
            classNames: z,
            styles: R
        } = (0, h.useComponentConfig)("qrcode"), T = { ...e,
            bgColor: x,
            type: r,
            size: a,
            status: u,
            bordered: f,
            errorLevel: c
        }, [H, P] = (0, m.useMergeSemantic)([z, C], [R, k], {
            props: T
        }), L = N("qrcode", $), [B, A] = aZ(L), O = {
            src: o,
            x: void 0,
            y: void 0,
            height: "number" == typeof i ? i : i ? .height ? ? 40,
            width: "number" == typeof i ? i : i ? .width ? ? 40,
            excavate: !0,
            crossOrigin: "anonymous"
        }, W = (0, d.default)(w, !0), D = (0, eD.omit)(w, Object.keys(W)), F = {
            value: n,
            size: a,
            level: c,
            bgColor: x,
            fgColor: s,
            style: {
                width: v ? .width,
                height: v ? .height
            },
            imageSettings: o ? O : void 0,
            boostLevel: E,
            ...W
        }, [_] = (0, tf.useLocale)("QRCode");
        if (!n) return null;
        let j = (0, p.clsx)(L, b, y, B, A, I, H.root, {
                [`${L}-borderless`]: !f
            }),
            X = {
                backgroundColor: x,
                ...P.root,
                ...M,
                ...v,
                width: v ? .width ? ? a,
                height: v ? .height ? ? a
            };
        return l.default.createElement("div", { ...D,
            className: j,
            style: X
        }, "active" !== u && l.default.createElement("div", {
            className: (0, p.clsx)(`${L}-cover`, H.cover),
            style: P.cover
        }, l.default.createElement(aK, {
            prefixCls: L,
            locale: _,
            status: u,
            onRefresh: g,
            statusRender: S
        })), "canvas" === r ? l.default.createElement(aj, { ...F
        }) : l.default.createElement(aq, { ...F
        }))
    }, "Radio", () => aJ.default, "Rate", 0, a6, "Result", () => a9.default, "Row", () => a7.default, "Segmented", 0, l7, "Select", () => e_.default, "Skeleton", () => ie.default, "Slider", () => rg.default, "Space", () => on.default, "Spin", () => op.default, "Splitter", 0, ip, "Statistic", () => im.default, "Steps", 0, iW, "Switch", () => iD.default, "Table", () => iF.default, "Tabs", () => i_.default, "Tag", () => ij.default, "TimePicker", 0, iU, "Timeline", 0, iJ, "Tooltip", () => l5.default, "Tour", 0, sf, "Transfer", 0, sP, "Tree", () => sL.default, "TreeSelect", 0, s2, "Typography", 0, cc, "Upload", () => cM.default, "Watermark", 0, e => {
        var t;
        let n, r, o, a, i, s, {
                zIndex: c = 9,
                rotate: d = -22,
                width: u,
                height: m,
                image: f,
                content: g,
                font: v = {},
                style: b,
                className: y,
                rootClassName: $,
                gap: x = [100, 100],
                offset: S,
                children: C,
                inherit: k = !0,
                onRemove: E
            } = e,
            {
                className: w,
                style: N
            } = (0, h.useComponentConfig)("watermark"),
            I = { ...cA,
                ...N,
                ...b
            },
            [, M] = (0, ex.useToken)(),
            {
                color: z = M.colorFill,
                fontSize: R = M.fontSizeLG,
                fontWeight: T = "normal",
                fontStyle: L = "normal",
                fontFamily: B = "sans-serif",
                textAlign: A = "center"
            } = v,
            [O = 100, W = 100] = x,
            D = O / 2,
            F = W / 2,
            _ = S ? .[0] ? ? D,
            j = S ? .[1] ? ? F,
            X = l.default.useMemo(() => {
                let e = {
                        zIndex: c,
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        backgroundRepeat: "repeat"
                    },
                    t = _ - D,
                    n = j - F;
                return t > 0 && (e.left = `${t}px`, e.width = `calc(100% - ${t}px)`, t = 0), n > 0 && (e.top = `${n}px`, e.height = `calc(100% - ${n}px)`, n = 0), e.backgroundPosition = `${t}px ${n}px`, e
            }, [c, _, D, j, F]),
            [q, V] = l.default.useState(),
            [G, Y] = l.default.useState(() => new Set),
            U = l.default.useMemo(() => [].concat(q ? [q] : [], (0, H.default)(Array.from(G))), [q, G]),
            K = l.default.useCallback((e, t, n, l, r, o, a, i) => {
                let [s, c, d, u] = cP(l, r, n);
                if (e instanceof HTMLImageElement) s.drawImage(e, 0, 0, d, u);
                else {
                    let {
                        color: t,
                        fontSize: l,
                        fontStyle: a,
                        fontWeight: i,
                        fontFamily: c,
                        textAlign: u
                    } = o, p = Number(l) * n;
                    s.font = `${a} normal ${i} ${p}px/${r}px ${c}`, s.fillStyle = t, s.textAlign = u, s.textBaseline = "top";
                    let m = oj(e);
                    m ? .forEach((e, t) => {
                        s.fillText(e ? ? "", d / 2, t * (p + 3 * n))
                    })
                }
                let p = Math.PI / 180 * Number(t),
                    m = Math.max(l, r),
                    [f, g, h] = cP(m, m, n);
                f.translate(h / 2, h / 2), f.rotate(p), d > 0 && u > 0 && f.drawImage(c, -d / 2, -u / 2);
                let v = 0,
                    b = 0,
                    y = 0,
                    $ = 0,
                    x = d / 2,
                    S = u / 2;
                [
                    [0 - x, 0 - S],
                    [0 + x, 0 - S],
                    [0 + x, 0 + S],
                    [0 - x, 0 + S]
                ].forEach(([e, t]) => {
                    let [n, l] = [e * Math.cos(p) - t * Math.sin(p), e * Math.sin(p) + t * Math.cos(p)];
                    v = Math.min(v, n), b = Math.max(b, n), y = Math.min(y, l), $ = Math.max($, l)
                });
                let C = v + h / 2,
                    k = y + h / 2,
                    E = b - v,
                    w = $ - y,
                    N = a * n,
                    I = i * n,
                    M = (E + N) * 2,
                    z = w + I,
                    [R, T] = cP(M, z),
                    H = (e = 0, t = 0) => {
                        R.drawImage(g, C, k, E, w, e, t, E, w)
                    };
                return H(), H(E + N, -w / 2 - I / 2), H(E + N, w / 2 + I / 2), [T.toDataURL(), M / n, z / n]
            }, []),
            Q = (n = l.useRef([null, null]), (e, t) => {
                let l = e.map(e => e instanceof HTMLElement || Number.isNaN(e) ? "" : e);
                return (0, oy.default)(n.current[0], l) || (n.current = [l, t()]), n.current[1]
            }),
            [Z, J] = l.default.useState(null),
            ee = (t = () => {
                let e = document.createElement("canvas").getContext("2d");
                if (e) {
                    let t = window.devicePixelRatio || 1,
                        [n, l] = (e => {
                            let t = 120,
                                n = 64;
                            if (!f && e.measureText) {
                                e.font = `${Number(R)}px ${B}`;
                                let l = oj(g),
                                    r = l.map(t => {
                                        let n = e.measureText(t);
                                        return [n.width, n.fontBoundingBoxAscent + n.fontBoundingBoxDescent]
                                    });
                                t = Math.ceil(Math.max.apply(Math, (0, H.default)(r.map(e => e[0])))), n = Math.ceil(Math.max.apply(Math, (0, H.default)(r.map(e => e[1])))) * l.length + (l.length - 1) * 3
                            }
                            return [u ? ? t, m ? ? n]
                        })(e),
                        r = e => {
                            let r = [e || "", d, t, n, l, {
                                    color: z,
                                    fontSize: R,
                                    fontStyle: L,
                                    fontWeight: T,
                                    fontFamily: B,
                                    textAlign: A
                                }, O, W],
                                [o, a] = Q(r, () => K.apply(void 0, r));
                            J([o, a])
                        };
                    if (f) {
                        let e = new Image;
                        e.onload = () => {
                            r(e)
                        }, e.onerror = () => {
                            r(g)
                        }, e.crossOrigin = "anonymous", e.referrerPolicy = "no-referrer", e.src = f
                    } else r(g)
                }
            }, r = l.default.useRef(!1), o = l.default.useRef(null), a = (0, P.useEvent)(t), () => {
                r.current || (r.current = !0, a(), o.current = (0, ox.default)(() => {
                    r.current = !1
                }))
            }),
            [et, en, el] = (i = l.useRef(new Map), s = (0, P.useEvent)(E), [(e, t, n) => {
                if (n) {
                    var l;
                    let r = i.current.get(n);
                    if (!r) {
                        let e = document.createElement("div");
                        i.current.set(n, e)
                    }
                    let o = i.current.get(n);
                    o.setAttribute("style", Object.keys(l = { ...X,
                        backgroundImage: `url('${e}')`,
                        backgroundSize: `${Math.floor(t)}px`,
                        ...cL
                    }).map(e => `${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${l[e]};`).join(" ")), o.removeAttribute("class"), o.removeAttribute("hidden"), o.parentElement !== n && (r && E && s(), n.append(o))
                }
                return i.current.get(n)
            }, e => {
                let t = i.current.get(e);
                t && e && e.removeChild(t), i.current.delete(e)
            }, e => Array.from(i.current.values()).includes(e)]);
        (0, l.useEffect)(() => {
            Z && U.forEach(e => {
                et(Z[0], Z[1], e)
            })
        }, [Z, U]), ((e, t, n = cT) => {
            l.default.useEffect(() => {
                let l;
                if (!(0, cR.default)() || !e) return;
                let r = Array.isArray(e) ? e : [e];
                return "MutationObserver" in window && (l = new MutationObserver(t), r.forEach(e => {
                    l.observe(e, n)
                })), () => {
                    l ? .takeRecords(), l ? .disconnect()
                }
            }, [n, e])
        })(U, (0, P.useEvent)(e => {
            e.forEach(e => {
                let t;
                if (t = !1, e.removedNodes.length && (t = Array.from(e.removedNodes).some(e => el(e))), "attributes" === e.type && el(e.target) && (t = !0), t) ee();
                else if (e.target === q && "style" === e.attributeName) {
                    let e = Object.keys(cA);
                    for (let t = 0; t < e.length; t += 1) {
                        let n = e[t],
                            l = I[n],
                            r = q.style[n];
                        l && l !== r && (q.style[n] = l)
                    }
                }
            })
        })), (0, l.useEffect)(ee, [d, c, u, m, f, g, z, R, T, L, B, A, O, W, _, j]);
        let er = l.default.useMemo(() => ({
                add: e => {
                    Y(t => {
                        let n = new Set(t);
                        return n.add(e), cB(t, n)
                    })
                },
                remove: e => {
                    en(e), Y(t => {
                        let n = new Set(t);
                        return n.delete(e), cB(t, n)
                    })
                }
            }), []),
            eo = k ? l.default.createElement(cH.default.Provider, {
                value: er
            }, C) : C;
        return l.default.createElement("div", {
            ref: V,
            className: (0, p.clsx)(y, w, $),
            style: I
        }, eo)
    }, "message", 0, o6, "notification", 0, ai, "theme", () => iX.default, "unstableSetRender", 0, t, "version", () => cz.default], 196306)
}]);