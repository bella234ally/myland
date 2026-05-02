(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 329261, 806318, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
        r = e.i(978052),
        a = e.i(207670),
        l = e.i(991330),
        n = e.i(737434);
    let o = function(e) {
        let t = null,
            r = (...r) => {
                null === t && (t = (0, n.default)(() => {
                    t = null, e.apply(void 0, (0, l.default)(r))
                }))
            };
        return r.cancel = () => {
            n.default.cancel(t), t = null
        }, r
    };
    e.s(["default", 0, o], 806318);
    var i = e.i(242064);
    let s = (0, e.i(246422).genStyleHooks)("Affix", e => {
        let {
            componentCls: t
        } = e;
        return {
            [t]: {
                position: "fixed",
                zIndex: e.zIndexPopup
            }
        }
    }, e => ({
        zIndexPopup: e.zIndexBase + 10
    }));

    function c(e) {
        return e !== window ? e.getBoundingClientRect() : {
            top: 0,
            bottom: window.innerHeight
        }
    }

    function d(e, t, r) {
        if (void 0 !== r && Math.round(t.top) > Math.round(e.top) - r) return r + t.top
    }

    function m(e, t, r) {
        if (void 0 !== r && Math.round(t.bottom) < Math.round(e.bottom) + r) return r + (window.innerHeight - t.bottom)
    }
    let u = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"];

    function h() {
        return window
    }
    let f = t.default.forwardRef((e, l) => {
        let {
            style: n,
            offsetTop: f,
            offsetBottom: p,
            prefixCls: E,
            className: k,
            rootClassName: g,
            children: v,
            target: F,
            onChange: M,
            onTestUpdatePosition: x,
            ...C
        } = e, {
            getPrefixCls: $,
            className: y,
            style: b
        } = (0, i.useComponentConfig)("affix"), {
            getTargetContainer: L
        } = t.default.useContext(i.ConfigContext), B = $("affix", E), [S, w] = t.default.useState(!1), [D, z] = t.default.useState(), [A, N] = t.default.useState(), W = t.default.useRef(0), j = t.default.useRef(null), R = t.default.useRef(null), I = t.default.useRef(null), H = t.default.useRef(null), T = t.default.useRef(null), P = F ? ? L ? ? h, _ = void 0 === p && void 0 === f ? 0 : f, X = () => {
            W.current = 1, (() => {
                if (1 !== W.current || !H.current || !I.current || !P) return;
                let e = P();
                if (e) {
                    let t = {
                            status: 0
                        },
                        r = c(I.current);
                    if (0 === r.top && 0 === r.left && 0 === r.width && 0 === r.height) return;
                    let a = c(e),
                        l = d(r, a, _),
                        n = m(r, a, p);
                    void 0 !== l ? (t.affixStyle = {
                        position: "fixed",
                        top: l,
                        width: r.width,
                        height: r.height
                    }, t.placeholderStyle = {
                        width: r.width,
                        height: r.height
                    }) : void 0 !== n && (t.affixStyle = {
                        position: "fixed",
                        bottom: n,
                        width: r.width,
                        height: r.height
                    }, t.placeholderStyle = {
                        width: r.width,
                        height: r.height
                    }), t.lastAffix = !!t.affixStyle, S !== t.lastAffix && M ? .(t.lastAffix), W.current = t.status, z(t.affixStyle), N(t.placeholderStyle), w(t.lastAffix)
                }
            })()
        }, O = o(() => {
            X()
        }), V = o(() => {
            if (P && D) {
                let e = P();
                if (e && I.current) {
                    let t = c(e),
                        r = c(I.current),
                        a = d(r, t, _),
                        l = m(r, t, p);
                    if (void 0 !== a && D.top === a || void 0 !== l && D.bottom === l) return
                }
            }
            X()
        }), Y = () => {
            let e = P ? .();
            e && (u.forEach(t => {
                R.current && j.current ? .removeEventListener(t, R.current), e ? .addEventListener(t, V)
            }), j.current = e, R.current = V)
        }, U = () => {
            let e = P ? .();
            u.forEach(t => {
                e ? .removeEventListener(t, V), R.current && j.current ? .removeEventListener(t, R.current)
            }), O.cancel(), V.cancel()
        };
        t.default.useImperativeHandle(l, () => ({
            updatePosition: O
        })), t.default.useEffect(() => (T.current = setTimeout(Y), () => {
            T.current && (clearTimeout(T.current), T.current = null), U()
        }), []), t.default.useEffect(() => (Y(), () => U()), [F, D, S, f, p]), t.default.useEffect(() => {
            O()
        }, [F, f, p]);
        let [G, q] = s(B), K = (0, a.clsx)(g, G, B, q), Q = (0, a.clsx)({
            [K]: D
        });
        return t.default.createElement(r.default, {
            onResize: O
        }, t.default.createElement("div", {
            style: { ...b,
                ...n
            },
            className: (0, a.clsx)(k, y),
            ref: I,
            ...C
        }, D && t.default.createElement("div", {
            style: A,
            "aria-hidden": "true"
        }), t.default.createElement("div", {
            className: Q,
            ref: H,
            style: D
        }, t.default.createElement(r.default, {
            onResize: O
        }, v))))
    });
    e.s(["default", 0, f], 329261)
}, 638145, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
        r = e.i(951160),
        a = e.i(401676);
    let l = t.createContext(null),
        n = t.createContext({});
    var o = e.i(207670),
        i = e.i(128473),
        s = e.i(830731),
        c = e.i(50824),
        d = e.i(232839);

    function m() {
        return (m = Object.assign.bind()).apply(this, arguments)
    }
    let u = e => {
        let {
            prefixCls: r,
            className: a,
            containerRef: l,
            ...i
        } = e, {
            panel: s
        } = t.useContext(n), u = (0, d.useComposeRef)(s, l);
        return t.createElement("div", m({
            className: (0, o.clsx)(`${r}-section`, a),
            role: "dialog",
            ref: u
        }, (0, c.default)(e, {
            aria: !0
        }), {
            "aria-modal": "true"
        }, i))
    };
    e.i(63335);
    var h = e.i(580251),
        f = e.i(24308);

    function p(e) {
        if ("string" == typeof e) {
            let t = Number(e.replace(/px$/i, ""));
            if (parseFloat(e) === t && (0, f.default)(!1, "Invalid value type of `width` or `height` which should be number type instead."), !Number.isNaN(t)) return t
        }
        return e
    }

    function E() {
        return (E = Object.assign.bind()).apply(this, arguments)
    }
    e.i(32044);
    let k = {
            width: 0,
            height: 0,
            overflow: "hidden",
            outline: "none",
            position: "absolute"
        },
        g = t.forwardRef((e, r) => {
            let {
                prefixCls: a,
                open: n,
                placement: d,
                inline: m,
                push: f,
                forceRender: g,
                autoFocus: v,
                keyboard: F,
                classNames: M,
                rootClassName: x,
                rootStyle: C,
                zIndex: $,
                className: y,
                id: b,
                style: L,
                motion: B,
                width: S,
                height: w,
                size: D,
                maxSize: z,
                children: A,
                mask: N,
                maskClosable: W,
                maskMotion: j,
                maskClassName: R,
                maskStyle: I,
                afterOpenChange: H,
                onClose: T,
                onMouseEnter: P,
                onMouseOver: _,
                onMouseLeave: X,
                onClick: O,
                onKeyDown: V,
                onKeyUp: Y,
                styles: U,
                drawerRender: G,
                resizable: q,
                defaultSize: K
            } = e, Q = t.useRef(null), Z = t.useRef(null), J = t.useRef(null);
            t.useImperativeHandle(r, () => Q.current), t.useEffect(() => {
                n && v && Q.current ? .focus({
                    preventScroll: !0
                })
            }, [n]);
            let [ee, et] = t.useState(!1), er = t.useContext(l), ea = ("boolean" == typeof f ? f ? {} : {
                distance: 0
            } : f || {}) ? .distance ? ? er ? .pushDistance ? ? 180, el = t.useMemo(() => ({
                pushDistance: ea,
                push: () => {
                    et(!0)
                },
                pull: () => {
                    et(!1)
                }
            }), [ea]);
            t.useEffect(() => {
                n ? er ? .push ? .() : er ? .pull ? .()
            }, [n]), t.useEffect(() => () => {
                er ? .pull ? .()
            }, []);
            let en = t.createElement(i.default, E({
                    key: "mask"
                }, j, {
                    visible: N && n
                }), ({
                    className: e,
                    style: r
                }, l) => t.createElement("div", {
                    className: (0, o.clsx)(`${a}-mask`, e, M ? .mask, R),
                    style: { ...r,
                        ...I,
                        ...U ? .mask
                    },
                    onClick: W && n ? T : void 0,
                    ref: l
                })),
                eo = "function" == typeof B ? B(d) : B,
                [ei, es] = t.useState(),
                ec = "left" === d || "right" === d,
                ed = t.useMemo(() => {
                    let e = ec ? S : w;
                    return p(D ? ? e ? ? ei ? ? K ? ? (ec ? 378 : void 0))
                }, [D, S, w, K, ec, ei]),
                em = t.useMemo(() => {
                    let e = {};
                    if (ee && ea) switch (d) {
                        case "top":
                            e.transform = `translateY(${ea}px)`;
                            break;
                        case "bottom":
                            e.transform = `translateY(${-ea}px)`;
                            break;
                        case "left":
                            e.transform = `translateX(${ea}px)`;
                            break;
                        default:
                            e.transform = `translateX(${-ea}px)`
                    }
                    return ec ? e.width = p(ed) : e.height = p(ed), e
                }, [ee, ea, d, ec, ed]),
                eu = t.useRef(null),
                eh = !!q,
                ef = "object" == typeof q && q || {},
                ep = (0, h.useEvent)(e => {
                    es(e), ef.onResize ? .(e)
                }),
                {
                    dragElementProps: eE,
                    isDragging: ek
                } = function(e) {
                    let {
                        prefixCls: r,
                        direction: a,
                        className: l,
                        style: n,
                        maxSize: i,
                        containerRef: s,
                        currentSize: c,
                        onResize: d,
                        onResizeEnd: m,
                        onResizeStart: u
                    } = e, [f, p] = t.useState(!1), [E, k] = t.useState(0), [g, v] = t.useState(0), F = "left" === a || "right" === a, M = (0, h.useEvent)(e => {
                        let t;
                        if (e.preventDefault(), e.stopPropagation(), p(!0), F ? k(e.clientX) : k(e.clientY), "number" == typeof c) t = c;
                        else if (s ? .current) {
                            let e = s.current.getBoundingClientRect();
                            t = F ? e.width : e.height
                        }
                        v(t), u ? .(t)
                    }), x = (0, h.useEvent)(e => {
                        if (!f) return;
                        let t = (F ? e.clientX : e.clientY) - E;
                        ("right" === a || "bottom" === a) && (t = -t);
                        let r = g + t;
                        r < 0 && (r = 0), i && r > i && (r = i), d ? .(r)
                    }), C = t.useCallback(() => {
                        if (f && (p(!1), s ? .current)) {
                            let e = s.current.getBoundingClientRect(),
                                t = F ? e.width : e.height;
                            m ? .(t)
                        }
                    }, [f, s, m, F]);
                    return t.useEffect(() => {
                        if (f) return document.addEventListener("mousemove", x), document.addEventListener("mouseup", C), () => {
                            document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", C)
                        }
                    }, [f, x, C]), {
                        dragElementProps: {
                            className: (0, o.clsx)(`${r}-dragger`, `${r}-dragger-${a}`, {
                                [`${r}-dragger-dragging`]: f,
                                [`${r}-dragger-horizontal`]: F,
                                [`${r}-dragger-vertical`]: !F
                            }, l),
                            style: n,
                            onMouseDown: M
                        },
                        isDragging: f
                    }
                }({
                    prefixCls: `${a}-resizable`,
                    direction: d,
                    className: M ? .dragger,
                    style: U ? .dragger,
                    maxSize: z,
                    containerRef: eu,
                    currentSize: ed,
                    onResize: ep,
                    onResizeStart: ef.onResizeStart,
                    onResizeEnd: ef.onResizeEnd
                }),
                eg = {
                    onMouseEnter: P,
                    onMouseOver: _,
                    onMouseLeave: X,
                    onClick: O,
                    onKeyDown: V,
                    onKeyUp: Y
                },
                ev = t.createElement(i.default, E({
                    key: "panel"
                }, eo, {
                    visible: n,
                    forceRender: g,
                    onVisibleChanged: e => {
                        H ? .(e)
                    },
                    removeOnLeave: !1,
                    leavedClassName: `${a}-content-wrapper-hidden`
                }), ({
                    className: r,
                    style: l
                }, n) => {
                    let i = t.createElement(u, E({
                        id: b,
                        containerRef: n,
                        prefixCls: a,
                        className: (0, o.clsx)(y, M ? .section),
                        style: { ...L,
                            ...U ? .section
                        }
                    }, (0, c.default)(e, {
                        aria: !0
                    }), eg), A);
                    return t.createElement("div", E({
                        ref: eu,
                        className: (0, o.clsx)(`${a}-content-wrapper`, ek && `${a}-content-wrapper-dragging`, M ? .wrapper, !ek && r),
                        style: { ...l,
                            ...em,
                            ...U ? .wrapper
                        }
                    }, (0, c.default)(e, {
                        data: !0
                    })), eh && t.createElement("div", eE), G ? G(i) : i)
                }),
                eF = { ...C
                };
            return $ && (eF.zIndex = $), t.createElement(l.Provider, {
                value: el
            }, t.createElement("div", {
                className: (0, o.clsx)(a, `${a}-${d}`, x, {
                    [`${a}-open`]: n,
                    [`${a}-inline`]: m
                }),
                style: eF,
                tabIndex: -1,
                ref: Q,
                onKeyDown: e => {
                    let {
                        keyCode: t,
                        shiftKey: r
                    } = e;
                    switch (t) {
                        case s.default.TAB:
                            t === s.default.TAB && (r || document.activeElement !== J.current ? r && document.activeElement === Z.current && J.current ? .focus({
                                preventScroll: !0
                            }) : Z.current ? .focus({
                                preventScroll: !0
                            }));
                            break;
                        case s.default.ESC:
                            T && F && (e.stopPropagation(), T(e))
                    }
                }
            }, en, t.createElement("div", {
                tabIndex: 0,
                ref: Z,
                style: k,
                "aria-hidden": "true",
                "data-sentinel": "start"
            }), ev, t.createElement("div", {
                tabIndex: 0,
                ref: J,
                style: k,
                "aria-hidden": "true",
                "data-sentinel": "end"
            })))
        }),
        v = e => {
            let {
                open: l = !1,
                prefixCls: o = "rc-drawer",
                placement: i = "right",
                autoFocus: s = !0,
                keyboard: c = !0,
                width: d,
                height: m,
                size: u,
                maxSize: h,
                mask: f = !0,
                maskClosable: p = !0,
                getContainer: E,
                forceRender: k,
                afterOpenChange: v,
                destroyOnHidden: F,
                onMouseEnter: M,
                onMouseOver: x,
                onMouseLeave: C,
                onClick: $,
                onKeyDown: y,
                onKeyUp: b,
                resizable: L,
                defaultSize: B,
                panelRef: S
            } = e, [w, D] = t.useState(!1), [z, A] = t.useState(!1);
            (0, a.default)(() => {
                A(!0)
            }, []);
            let N = !!z && l,
                W = t.useRef(null),
                j = t.useRef(null);
            (0, a.default)(() => {
                N && (j.current = document.activeElement)
            }, [N]);
            let R = t.useMemo(() => ({
                panel: S
            }), [S]);
            if (!k && !w && !N && F) return null;
            let I = { ...e,
                open: N,
                prefixCls: o,
                placement: i,
                autoFocus: s,
                keyboard: c,
                width: d,
                height: m,
                size: u,
                maxSize: h,
                defaultSize: B,
                mask: f,
                maskClosable: p,
                inline: !1 === E,
                afterOpenChange: e => {
                    D(e), v ? .(e), e || !j.current || W.current ? .contains(j.current) || j.current ? .focus({
                        preventScroll: !0
                    })
                },
                ref: W,
                resizable: L,
                onMouseEnter: M,
                onMouseOver: x,
                onMouseLeave: C,
                onClick: $,
                onKeyDown: y,
                onKeyUp: b
            };
            return t.createElement(n.Provider, {
                value: R
            }, t.createElement(r.default, {
                open: N || k || w,
                autoDestroy: !1,
                getContainer: E,
                autoLock: f && (N || w)
            }, t.createElement(g, I)))
        };
    var F = e.i(987225),
        M = e.i(617206),
        x = e.i(690121),
        C = e.i(711517),
        $ = e.i(122767),
        y = e.i(613541),
        b = e.i(340010),
        L = e.i(242064),
        B = e.i(922611),
        S = e.i(563113),
        w = e.i(185793);
    let D = e => {
        let {
            prefixCls: r,
            ariaId: a,
            title: l,
            footer: n,
            extra: i,
            closable: s,
            loading: c,
            onClose: d,
            headerStyle: m,
            bodyStyle: u,
            footerStyle: h,
            children: f,
            classNames: p,
            styles: E
        } = e, k = (0, L.useComponentConfig)("drawer"), {
            classNames: g,
            styles: v,
            closable: F
        } = k, [M, x] = (0, C.useMergeSemantic)([g, p], [v, E], {
            props: { ...e,
                closable: s ? ? F
            }
        }), $ = t.useMemo(() => {
            let e = s ? ? F;
            if (!1 !== e) return "object" == typeof e && e && "end" === e.placement ? "end" : "start"
        }, [s, F]), y = t.useCallback(e => t.createElement("button", {
            type: "button",
            onClick: d,
            className: (0, o.clsx)(`${r}-close`, {
                [`${r}-close-${$}`]: "end" === $
            }, M.close),
            style: x.close
        }, e), [d, r, $, M.close, x.close]), [b, B] = (0, S.useClosable)((0, S.pickClosable)(e), (0, S.pickClosable)(k), {
            closable: !0,
            closeIconRender: y
        });
        return t.createElement(t.Fragment, null, l || b ? t.createElement("div", {
            style: { ...x.header,
                ...m
            },
            className: (0, o.clsx)(`${r}-header`, M.header, {
                [`${r}-header-close-only`]: b && !l && !i
            })
        }, t.createElement("div", {
            className: `${r}-header-title`
        }, "start" === $ && B, l && t.createElement("div", {
            className: (0, o.clsx)(`${r}-title`, M.title),
            style: x.title,
            id: a
        }, l)), i && t.createElement("div", {
            className: (0, o.clsx)(`${r}-extra`, M.extra),
            style: x.extra
        }, i), "end" === $ && B) : null, t.createElement("div", {
            className: (0, o.clsx)(`${r}-body`, M.body),
            style: { ...x.body,
                ...u
            }
        }, c ? t.createElement(w.default, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 5
            },
            className: `${r}-body-skeleton`
        }) : f), n ? t.createElement("div", {
            className: (0, o.clsx)(`${r}-footer`, M.footer),
            style: { ...x.footer,
                ...h
            }
        }, n) : null)
    };
    var z = e.i(687385),
        A = e.i(183293),
        N = e.i(246422),
        W = e.i(838378);
    let j = (e, t) => ({
            "&-enter, &-appear": { ...e,
                "&-active": t
            },
            "&-leave": { ...t,
                "&-active": e
            }
        }),
        R = (e, t) => ({
            "&-enter, &-appear, &-leave": {
                "&-start": {
                    transition: "none"
                },
                "&-active": {
                    transition: `all ${t}`
                }
            },
            ...j({
                opacity: e
            }, {
                opacity: 1
            })
        }),
        I = (0, N.genStyleHooks)("Drawer", e => {
            let t = (0, W.mergeToken)(e, {});
            return [(e => {
                let {
                    borderRadiusSM: t,
                    componentCls: r,
                    zIndexPopup: a,
                    colorBgMask: l,
                    colorBgElevated: n,
                    motionDurationSlow: o,
                    motionDurationMid: i,
                    paddingXS: s,
                    padding: c,
                    paddingLG: d,
                    fontSizeLG: m,
                    lineHeightLG: u,
                    lineWidth: h,
                    lineType: f,
                    colorSplit: p,
                    marginXS: E,
                    colorIcon: k,
                    colorIconHover: g,
                    colorBgTextHover: v,
                    colorBgTextActive: F,
                    colorText: M,
                    fontWeightStrong: x,
                    footerPaddingBlock: C,
                    footerPaddingInline: $,
                    draggerSize: y,
                    calc: b
                } = e, L = `${r}-content-wrapper`, B = `${r}-resizable-dragger`;
                return {
                    [r]: {
                        position: "fixed",
                        inset: 0,
                        zIndex: a,
                        pointerEvents: "none",
                        color: M,
                        "&-pure": {
                            position: "relative",
                            background: n,
                            display: "flex",
                            flexDirection: "column",
                            [`&${r}-left`]: {
                                boxShadow: e.boxShadowDrawerLeft
                            },
                            [`&${r}-right`]: {
                                boxShadow: e.boxShadowDrawerRight
                            },
                            [`&${r}-top`]: {
                                boxShadow: e.boxShadowDrawerUp
                            },
                            [`&${r}-bottom`]: {
                                boxShadow: e.boxShadowDrawerDown
                            }
                        },
                        "&-inline": {
                            position: "absolute"
                        },
                        [`${r}-mask`]: {
                            position: "absolute",
                            inset: 0,
                            zIndex: a,
                            background: l,
                            pointerEvents: "auto",
                            [`&${r}-mask-blur`]: {
                                backdropFilter: "blur(4px)"
                            }
                        },
                        [L]: {
                            position: "absolute",
                            zIndex: a,
                            maxWidth: "100vw",
                            transition: `all ${o}`,
                            "&-hidden": {
                                display: "none"
                            }
                        },
                        [`&-left > ${L}`]: {
                            top: 0,
                            bottom: 0,
                            left: {
                                _skip_check_: !0,
                                value: 0
                            },
                            boxShadow: e.boxShadowDrawerLeft
                        },
                        [`&-right > ${L}`]: {
                            top: 0,
                            right: {
                                _skip_check_: !0,
                                value: 0
                            },
                            bottom: 0,
                            boxShadow: e.boxShadowDrawerRight
                        },
                        [`&-top > ${L}`]: {
                            top: 0,
                            insetInline: 0,
                            boxShadow: e.boxShadowDrawerUp
                        },
                        [`&-bottom > ${L}`]: {
                            bottom: 0,
                            insetInline: 0,
                            boxShadow: e.boxShadowDrawerDown
                        },
                        [`${r}-section`]: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            overflow: "auto",
                            background: n,
                            pointerEvents: "auto"
                        },
                        [`${r}-header`]: {
                            display: "flex",
                            flex: 0,
                            alignItems: "center",
                            padding: `${(0,z.unit)(c)} ${(0,z.unit)(d)}`,
                            fontSize: m,
                            lineHeight: u,
                            borderBottom: `${(0,z.unit)(h)} ${f} ${p}`,
                            "&-title": {
                                display: "flex",
                                flex: 1,
                                alignItems: "center",
                                minWidth: 0,
                                minHeight: 0
                            }
                        },
                        [`${r}-extra`]: {
                            flex: "none"
                        },
                        [`${r}-close`]: {
                            display: "inline-flex",
                            width: b(m).add(s).equal(),
                            height: b(m).add(s).equal(),
                            borderRadius: t,
                            justifyContent: "center",
                            alignItems: "center",
                            color: k,
                            fontWeight: x,
                            fontSize: m,
                            fontStyle: "normal",
                            lineHeight: 1,
                            textAlign: "center",
                            textTransform: "none",
                            textDecoration: "none",
                            background: "transparent",
                            border: 0,
                            cursor: "pointer",
                            transition: `all ${i}`,
                            textRendering: "auto",
                            [`&${r}-close-end`]: {
                                marginInlineStart: E
                            },
                            [`&:not(${r}-close-end)`]: {
                                marginInlineEnd: E
                            },
                            "&:hover": {
                                color: g,
                                backgroundColor: v,
                                textDecoration: "none"
                            },
                            "&:active": {
                                backgroundColor: F
                            },
                            ...(0, A.genFocusStyle)(e)
                        },
                        [`${r}-title`]: {
                            flex: 1,
                            margin: 0,
                            fontWeight: e.fontWeightStrong,
                            fontSize: m,
                            lineHeight: u
                        },
                        [`${r}-body`]: {
                            flex: 1,
                            minWidth: 0,
                            minHeight: 0,
                            padding: d,
                            overflow: "auto",
                            [`${r}-body-skeleton`]: {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }
                        },
                        [`${r}-footer`]: {
                            flexShrink: 0,
                            padding: `${(0,z.unit)(C)} ${(0,z.unit)($)}`,
                            borderTop: `${(0,z.unit)(h)} ${f} ${p}`
                        },
                        [B]: {
                            position: "absolute",
                            zIndex: 1,
                            backgroundColor: "transparent",
                            userSelect: "none",
                            pointerEvents: "auto",
                            "&:hover": {
                                backgroundColor: e.colorPrimary,
                                opacity: .2
                            },
                            "&-dragging": {
                                backgroundColor: e.colorPrimary,
                                opacity: .3
                            }
                        },
                        [`${B}-left`]: {
                            top: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            width: y,
                            cursor: "col-resize"
                        },
                        [`${B}-right`]: {
                            top: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            width: y,
                            cursor: "col-resize"
                        },
                        [`${B}-top`]: {
                            insetInline: 0,
                            bottom: 0,
                            height: y,
                            cursor: "row-resize"
                        },
                        [`${B}-bottom`]: {
                            insetInline: 0,
                            top: 0,
                            height: y,
                            cursor: "row-resize"
                        },
                        [`${L}-dragging`]: {
                            userSelect: "none",
                            transition: "none",
                            willChange: "width, height",
                            [`${r}-content`]: {
                                pointerEvents: "none"
                            },
                            [`${r}-section`]: {
                                pointerEvents: "none"
                            }
                        },
                        "&-rtl": {
                            direction: "rtl"
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    motionDurationSlow: r
                } = e;
                return {
                    [t]: {
                        [`${t}-mask-motion`]: R(0, r),
                        [`${t}-panel-motion`]: ["left", "right", "top", "bottom"].reduce((e, t) => {
                            let a;
                            return { ...e,
                                [`&-${t}`]: [R(.7, r), j({
                                    transform: (a = "100%", ({
                                        left: `translateX(-${a})`,
                                        right: `translateX(${a})`,
                                        top: `translateY(-${a})`,
                                        bottom: `translateY(${a})`
                                    })[t])
                                }, {
                                    transform: "none"
                                })]
                            }
                        }, {})
                    }
                }
            })(t)]
        }, e => ({
            zIndexPopup: e.zIndexPopupBase,
            footerPaddingBlock: e.paddingXS,
            footerPaddingInline: e.padding,
            draggerSize: 4
        })),
        H = {
            distance: 180
        },
        T = e => {
            let {
                rootClassName: r,
                size: a,
                defaultSize: l = 378,
                height: n,
                width: i,
                mask: s,
                push: c = H,
                open: m,
                afterOpenChange: u,
                onClose: h,
                prefixCls: f,
                getContainer: p,
                panelRef: E = null,
                style: k,
                className: g,
                resizable: S,
                "aria-labelledby": w,
                maskStyle: z,
                drawerStyle: A,
                contentWrapperStyle: N,
                destroyOnClose: W,
                destroyOnHidden: j,
                ...R
            } = e, {
                placement: T
            } = R, P = (0, F.default)(), _ = R.title ? P : void 0, {
                getPopupContainer: X,
                getPrefixCls: O,
                direction: V,
                className: Y,
                style: U,
                classNames: G,
                styles: q,
                mask: K
            } = (0, L.useComponentConfig)("drawer"), Q = O("drawer", f), [Z, J] = I(Q), ee = void 0 === p && X ? () => X(document.body) : p, et = t.useMemo(() => "number" == typeof a ? a : "large" === a ? 736 : "default" === a ? 378 : T && "left" !== T && "right" !== T ? n : i, [a, T, i, n]), er = {
                motionName: (0, y.getTransitionName)(Q, "mask-motion"),
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                motionDeadline: 500
            }, ea = (0, B.usePanelRef)(), el = (0, d.composeRef)(E, ea), [en, eo] = (0, $.useZIndex)("Drawer", R.zIndex), {
                classNames: ei,
                styles: es,
                rootStyle: ec
            } = R, [ed, em] = (0, x.useMergedMask)(s, K, Q), eu = { ...e,
                zIndex: en,
                panelRef: E,
                mask: ed,
                defaultSize: l,
                push: c
            }, [eh, ef] = (0, C.useMergeSemantic)([G, ei], [q, es], {
                props: eu
            }), ep = (0, o.clsx)({
                "no-mask": !ed,
                [`${Q}-rtl`]: "rtl" === V
            }, r, Z, J, eh.root);
            return t.createElement(M.default, {
                form: !0,
                space: !0
            }, t.createElement(b.default.Provider, {
                value: eo
            }, t.createElement(v, {
                prefixCls: Q,
                onClose: h,
                maskMotion: er,
                motion: e => ({
                    motionName: (0, y.getTransitionName)(Q, `panel-motion-${e}`),
                    motionAppear: !0,
                    motionEnter: !0,
                    motionLeave: !0,
                    motionDeadline: 500
                }),
                ...R,
                classNames: {
                    mask: (0, o.clsx)(eh.mask, em.mask),
                    section: eh.section,
                    wrapper: eh.wrapper,
                    dragger: eh.dragger
                },
                styles: {
                    mask: { ...ef.mask,
                        ...z
                    },
                    section: { ...ef.section,
                        ...A
                    },
                    wrapper: { ...ef.wrapper,
                        ...N
                    },
                    dragger: ef.dragger
                },
                open: m,
                mask: ed,
                push: c,
                size: et,
                defaultSize: l,
                style: { ...U,
                    ...k
                },
                rootStyle: { ...ec,
                    ...ef.root
                },
                className: (0, o.clsx)(Y, g),
                rootClassName: ep,
                getContainer: ee,
                afterOpenChange: u,
                panelRef: el,
                zIndex: en,
                ...S ? {
                    resizable: S
                } : {},
                "aria-labelledby": w ? ? _,
                destroyOnHidden: j ? ? W
            }, t.createElement(D, {
                prefixCls: Q,
                size: a,
                ...R,
                ariaId: _,
                onClose: h
            }))))
        };
    T._InternalPanelDoNotUseOrYouWillBeFired = e => {
        let {
            prefixCls: r,
            style: a,
            className: l,
            placement: n = "right",
            ...i
        } = e, {
            getPrefixCls: s
        } = t.useContext(L.ConfigContext), c = s("drawer", r), [d, m] = I(c), u = (0, o.clsx)(c, `${c}-pure`, `${c}-${n}`, d, m, l);
        return t.createElement("div", {
            className: u,
            style: a
        }, t.createElement(D, {
            prefixCls: c,
            ...i
        }))
    }, e.s(["default", 0, T], 638145)
}, 235875, 376150, e => {
    "use strict";
    e.i(247167);
    var t = e.i(991330),
        r = e.i(271645);
    e.i(63335);
    var a = e.i(751095),
        l = e.i(207670),
        n = e.i(242064),
        o = e.i(704914),
        i = e.i(943081),
        s = e.i(290224),
        c = e.i(251224);

    function d({
        suffixCls: e,
        tagName: t,
        displayName: a
    }) {
        return a => r.forwardRef((l, n) => r.createElement(a, {
            ref: n,
            suffixCls: e,
            tagName: t,
            ...l
        }))
    }
    let m = r.forwardRef((e, t) => {
            let {
                prefixCls: a,
                suffixCls: o,
                className: i,
                tagName: s,
                ...d
            } = e, {
                getPrefixCls: m
            } = r.useContext(n.ConfigContext), u = m("layout", a), [h] = (0, c.default)(u), f = o ? `${u}-${o}` : u;
            return r.createElement(s, {
                className: (0, l.clsx)(a || f, i, h),
                ref: t,
                ...d
            })
        }),
        u = r.forwardRef((e, d) => {
            let {
                direction: m
            } = r.useContext(n.ConfigContext), [u, h] = r.useState([]), {
                prefixCls: f,
                className: p,
                rootClassName: E,
                children: k,
                hasSider: g,
                tagName: v,
                style: F,
                ...M
            } = e, x = (0, a.omit)(M, ["suffixCls"]), {
                getPrefixCls: C,
                className: $,
                style: y
            } = (0, n.useComponentConfig)("layout"), b = C("layout", f), L = "boolean" == typeof g ? g : !!u.length || (0, i.toArray)(k).some(e => e.type === s.default), [B, S] = (0, c.default)(b), w = (0, l.clsx)(b, {
                [`${b}-has-sider`]: L,
                [`${b}-rtl`]: "rtl" === m
            }, $, p, E, B, S), D = r.useMemo(() => ({
                siderHook: {
                    addSider: e => {
                        h(r => [].concat((0, t.default)(r), [e]))
                    },
                    removeSider: e => {
                        h(t => t.filter(t => t !== e))
                    }
                }
            }), []);
            return r.createElement(o.LayoutContext.Provider, {
                value: D
            }, r.createElement(v, {
                ref: d,
                className: w,
                style: { ...y,
                    ...F
                },
                ...x
            }, k))
        }),
        h = d({
            tagName: "div",
            displayName: "Layout"
        })(u),
        f = d({
            suffixCls: "header",
            tagName: "header",
            displayName: "Header"
        })(m),
        p = d({
            suffixCls: "footer",
            tagName: "footer",
            displayName: "Footer"
        })(m),
        E = d({
            suffixCls: "content",
            tagName: "main",
            displayName: "Content"
        })(m);
    h.Header = f, h.Footer = p, h.Content = E, h.Sider = s.default, h._InternalSiderContext = s.SiderContext, e.s(["default", 0, h], 235875);
    var k = e.i(459114),
        g = e.i(753354),
        v = e.i(490316);
    let F = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                }
            }]
        },
        name: "warning",
        theme: "filled"
    };
    var M = e.i(406575);

    function x() {
        return (x = Object.assign.bind()).apply(this, arguments)
    }
    let C = r.forwardRef((e, t) => r.createElement(M.default, x({}, e, {
        ref: t,
        icon: F
    })));
    var $ = e.i(50824),
        y = e.i(711517),
        b = e.i(687385),
        L = e.i(246422),
        B = e.i(838378);
    let S = (0, L.genStyleHooks)("Result", e => {
            let t, r = e.colorInfo,
                a = e.colorError,
                l = e.colorSuccess,
                n = e.colorWarning;
            return [
                [(e => {
                    let {
                        componentCls: t,
                        lineHeightHeading3: r,
                        iconCls: a,
                        padding: l,
                        paddingXL: n,
                        paddingXS: o,
                        paddingLG: i,
                        marginXS: s,
                        lineHeight: c
                    } = e;
                    return {
                        [t]: {
                            padding: `${(0,b.unit)(e.calc(i).mul(2).equal())} ${(0,b.unit)(n)}`,
                            "&-rtl": {
                                direction: "rtl"
                            }
                        },
                        [`${t} ${t}-image`]: {
                            width: e.imageWidth,
                            height: e.imageHeight,
                            margin: "auto"
                        },
                        [`${t} ${t}-icon`]: {
                            marginBottom: i,
                            textAlign: "center",
                            [`& > ${a}`]: {
                                fontSize: e.iconFontSize
                            }
                        },
                        [`${t} ${t}-title`]: {
                            color: e.colorTextHeading,
                            fontSize: e.titleFontSize,
                            lineHeight: r,
                            marginBlock: s,
                            textAlign: "center"
                        },
                        [`${t} ${t}-subtitle`]: {
                            color: e.colorTextDescription,
                            fontSize: e.subtitleFontSize,
                            lineHeight: c,
                            textAlign: "center"
                        },
                        [`${t} ${t}-body`]: {
                            marginTop: i,
                            padding: `${(0,b.unit)(i)} ${(0,b.unit)(e.calc(l).mul(2.5).equal())}`,
                            backgroundColor: e.colorFillAlter
                        },
                        [`${t} ${t}-extra`]: {
                            margin: e.extraMargin,
                            textAlign: "center",
                            "& > *": {
                                marginInlineEnd: o,
                                "&:last-child": {
                                    marginInlineEnd: 0
                                }
                            }
                        }
                    }
                })(t = (0, B.mergeToken)(e, {
                    resultInfoIconColor: r,
                    resultErrorIconColor: a,
                    resultSuccessIconColor: l,
                    resultWarningIconColor: n,
                    imageWidth: 250,
                    imageHeight: 295
                })), (e => {
                    let {
                        componentCls: t,
                        iconCls: r
                    } = e;
                    return {
                        [`${t}-success ${t}-icon > ${r}`]: {
                            color: e.resultSuccessIconColor
                        },
                        [`${t}-error ${t}-icon > ${r}`]: {
                            color: e.resultErrorIconColor
                        },
                        [`${t}-info ${t}-icon > ${r}`]: {
                            color: e.resultInfoIconColor
                        },
                        [`${t}-warning ${t}-icon > ${r}`]: {
                            color: e.resultWarningIconColor
                        }
                    }
                })(t)]
            ]
        }, e => ({
            titleFontSize: e.fontSizeHeading3,
            subtitleFontSize: e.fontSize,
            iconFontSize: 3 * e.fontSizeHeading3,
            extraMargin: `${e.paddingLG}px 0 0 0`
        })),
        w = {
            success: k.default,
            error: g.default,
            info: v.default,
            warning: C
        },
        D = {
            404: () => r.createElement("svg", {
                width: "252",
                height: "294"
            }, r.createElement("title", null, "No Found"), r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("circle", {
                cx: "126.75",
                cy: "128.1",
                r: "126",
                fill: "#E4EBF7"
            }), r.createElement("circle", {
                cx: "31.55",
                cy: "130.8",
                r: "8.3",
                fill: "#FFF"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "m37 134.3 10.5 6m.9 6.2-12.7 10.8",
                strokeWidth: "2"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M39.9 159.4a5.7 5.7 0 1 1-11.3-1.2 5.7 5.7 0 0 1 11.3 1.2m17.7-16.2a5.7 5.7 0 1 1-11.4-1.1 5.7 5.7 0 0 1 11.4 1.1M99 27h29.8a4.6 4.6 0 1 0 0-9.2H99a4.6 4.6 0 1 0 0 9.2m11.4 18.3h29.8a4.6 4.6 0 0 0 0-9.2h-29.8a4.6 4.6 0 1 0 0 9.2"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M112.8 26.9h15.8a4.6 4.6 0 1 0 0 9.1h-15.8a4.6 4.6 0 0 0 0-9.1m71.7 108.8a10 10 0 1 1-19.8-2 10 10 0 0 1 19.8 2"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "m179.3 141.8 12.6 7.1m1.1 7.6-15.2 13",
                strokeWidth: "2"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M184.7 170a6.8 6.8 0 1 1-13.6-1.3 6.8 6.8 0 0 1 13.6 1.4m18.6-16.8a6.9 6.9 0 1 1-13.7-1.4 6.9 6.9 0 0 1 13.7 1.4"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "M152 192.3a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.4 0zm73.3-76.2a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.5 0zm-9 35a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.5 0zM177 107.6a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm18.4-15.4a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.5 0zm6.8 88.5a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.5 0z",
                strokeWidth: "2"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "m214.4 153.3-2 20.2-10.8 6m-28-4.7-6.3 9.8H156l-4.5 6.5m23.5-66v-15.7m46 7.8-13 8-15.2-8V94.4",
                strokeWidth: "2"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M166.6 66h-4a4.8 4.8 0 0 1-4.7-4.8 4.8 4.8 0 0 1 4.7-4.7h4a4.8 4.8 0 0 1 4.7 4.7 4.8 4.8 0 0 1-4.7 4.7"
            }), r.createElement("circle", {
                cx: "204.3",
                cy: "30",
                r: "29.5",
                fill: "#1677ff"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M206 38.4c.5.5.7 1.1.7 2s-.2 1.4-.7 1.9a3 3 0 0 1-2 .7c-.8 0-1.5-.3-2-.8s-.8-1.1-.8-1.9.3-1.4.8-2c.5-.4 1.2-.7 2-.7.7 0 1.4.3 2 .8m4.2-19.5c1.5 1.3 2.2 3 2.2 5.2a7.2 7.2 0 0 1-1.5 4.5l-3 2.7a5 5 0 0 0-1.3 1.7 5.2 5.2 0 0 0-.6 2.4v.5h-4v-.5c0-1.4.1-2.5.6-3.5s1.9-2.5 4.2-4.5l.4-.5a4 4 0 0 0 1-2.6c0-1.2-.4-2-1-2.8-.7-.6-1.6-1-2.9-1-1.5 0-2.6.5-3.3 1.5-.4.5-.6 1-.8 1.9a2 2 0 0 1-2 1.6 2 2 0 0 1-2-2.4c.4-1.6 1-2.8 2.1-3.8a8.5 8.5 0 0 1 6.3-2.3c2.3 0 4.2.6 5.6 2"
            }), r.createElement("path", {
                fill: "#FFB594",
                d: "M52 76.1s21.8 5.4 27.3 16c5.6 10.7-6.3 9.2-15.7 5C52.8 92 39 85 52 76"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "m90.5 67.5-.5 2.9c-.7.5-4.7-2.7-4.7-2.7l-1.7.8-1.3-5.7s6.8-4.6 9-5c2.4-.5 9.8 1 10.6 2.3 0 0 1.3.4-2.2.6-3.6.3-5 .5-6.8 3.2l-2.4 3.6"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M128 111.4a36.7 36.7 0 0 0-8.9-15.5c-3.5-3-9.3-2.2-11.3-4.2-1.3-1.2-3.2-1.2-3.2-1.2L87.7 87c-2.3-.4-2.1-.7-6-1.4-1.6-1.9-3-1.1-3-1.1l-7-1.4c-1-1.5-2.5-1-2.5-1l-2.4-.9C65 91.2 59 95 59 95c1.8 1.1 15.7 8.3 15.7 8.3l5.1 37.1s-3.3 5.7 1.4 9.1c0 0 19.9-3.7 34.9-.3 0 0 3-2.6 1-8.8.5-3 1.4-8.3 1.7-11.6.4.7 2 1.9 3.1 3.4 0 0 9.4-7.3 11-14a17 17 0 0 1-2.2-2.4c-.5-.8-.3-2-.7-2.8-.7-1-1.8-1.3-2-1.6"
            }), r.createElement("path", {
                fill: "#CBD1D1",
                d: "M101 290s4.4 2 7.4 1c2.9-1 4.6.7 7.1 1.2 2.6.5 6.9 1.1 11.7-1.3 0-5.5-6.9-4-12-6.7-2.5-1.4-3.7-4.7-3.5-8.8h-9.5s-1.2 10.6-1 14.6"
            }), r.createElement("path", {
                fill: "#2B0849",
                d: "M101 289.8s2.5 1.3 6.8.7c3-.5 3.7.5 7.4 1 3.8.6 10.8 0 11.9-.9.4 1.1-.4 2-.4 2s-1.5.7-4.8.9c-2 .1-5.8.3-7.6-.5-1.8-1.4-5.2-1.9-5.7-.2-4 1-7.4-.3-7.4-.3l-.1-2.7z"
            }), r.createElement("path", {
                fill: "#A4AABA",
                d: "M108.3 276h3.1s0 6.7 4.6 8.6c-4.7.6-8.6-2.3-7.7-8.6"
            }), r.createElement("path", {
                fill: "#CBD1D1",
                d: "M57.5 272.4s-2 7.4-4.4 12.3c-1.8 3.7-4.3 7.5 5.4 7.5 6.7 0 9-.5 7.4-6.6-1.5-6.1.3-13.2.3-13.2h-8.7z"
            }), r.createElement("path", {
                fill: "#2B0849",
                d: "M51.5 289.8s2 1.2 6.6 1.2c6 0 8.3-1.7 8.3-1.7s.6 1.1-.7 2.2c-1 .8-3.6 1.6-7.4 1.5-4.1 0-5.8-.5-6.7-1.1-.8-.6-.7-1.6-.1-2.1"
            }), r.createElement("path", {
                fill: "#A4AABA",
                d: "M58.4 274.3s0 1.5-.3 3c-.3 1.4-1 3-1.1 4 0 1.2 4.5 1.7 5.1.1.6-1.5 1.3-6.4 2-7.2.6-.9-5-2.2-5.7.1"
            }), r.createElement("path", {
                fill: "#7BB2F9",
                d: "m99.7 278.5 13.3.1s1.3-54.5 1.9-64.4c.5-9.9 3.8-43.4 1-63.1l-12.6-.7-22.8.8-1.2 10c0 .5-.7.8-.7 1.4-.1.5.4 1.3.3 2-2.4 14-6.4 33-8.8 46.6 0 .7-1.2 1-1.4 2.7 0 .3.2 1.5 0 1.8-6.8 18.7-10.9 47.8-14.2 61.9h14.6s2.2-8.6 4-17c2.9-12.9 23.2-85 23.2-85l3-.5 1 46.3s-.2 1.2.4 2c.5.8-.6 1.1-.4 2.3l.4 1.8-1 11.8c-.4 4.8 0 39.2 0 39.2"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M76 221.6c1.2.1 4.1-2 7-5m23.4 8.5s2.7-1 6-3.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M107.3 222.1s2.7-1.1 6-3.9",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M74.7 224.8s2.7-.6 6.5-3.4m4.8-69.8c-.2 3.1.3 8.6-4.3 9.2m22-11s0 14-1.4 15.1a15 15 0 0 1-3 2m.5-16.5s0 13-1.2 24.4m-5 1.1s7.3-1.7 9.5-1.7M74.3 206a212 212 0 0 1-1 4.5s-1.4 1.9-1 3.8c.5 2-1 2-5 15.4A353 353 0 0 0 61 257l-.2 1.2m14.9-60.5a321 321 0 0 1-.9 4.8m7.8-50.4-1.2 10.5s-1.1.1-.5 2.2c.1 1.4-2.7 15.8-5.2 30.5m-19.6 79h13.3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#192064",
                d: "M116.2 148.2s-17-3-35.9.2c.2 2.5 0 4.2 0 4.2s14.7-2.8 35.7-.3c.3-2.4.2-4 .2-4"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M106.3 151.2v-5a.8.8 0 0 0-.8-.8h-7.8a.8.8 0 0 0-.8.8v5a.8.8 0 0 0 .8.8h7.8a.8.8 0 0 0 .8-.8"
            }), r.createElement("path", {
                fill: "#192064",
                d: "M105.2 150.2v-3a.6.6 0 0 0-.6-.7 94.3 94.3 0 0 0-5.9 0 .7.7 0 0 0-.6.6v3.1a.6.6 0 0 0 .6.7 121.1 121.1 0 0 1 5.8 0c.4 0 .7-.3.7-.7"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M100.3 275.4h12.3m-11.2-4.9.1 6.5m0-12.5a915.8 915.8 0 0 0 0 4.4m-.5-94 .9 44.7s.7 1.6-.2 2.7c-1 1.1 2.4.7.9 2.2-1.6 1.6.9 1.2 0 3.4-.6 1.5-1 21.1-1.1 35.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M46.9 83.4s-.5 6 7.2 5.6c11.2-.7 9.2-9.4 31.5-21.7-.7-2.7-2.4-4.7-2.4-4.7s-11 3-22.6 8c-6.8 3-13.4 6.4-13.7 12.8m57.6 7.7.9-5.4-8.9-11.4-5 5.3-1.8 7.9a.3.3 0 0 0 .1.3c1 .8 6.5 5 14.4 3.5a.3.3 0 0 0 .3-.2"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M94 79.4s-4.6-2.9-2.5-6.9c1.6-3 4.5 1.2 4.5 1.2s.5-3.7 3.1-3.7c.6-1 1.6-4.1 1.6-4.1l13.5 3c0 5.3-2.3 19.5-7.8 20-8.9.6-12.5-9.5-12.5-9.5"
            }), r.createElement("path", {
                fill: "#520038",
                d: "M113.9 73.4c2.6-2 3.4-9.7 3.4-9.7s-2.4-.5-6.6-2c-4.7-2.1-12.8-4.8-17.5 1-9.6 3.2-2 19.8-2 19.8l2.7-3s-4-3.3-2-6.3c2-3.5 3.8 1 3.8 1s.7-2.3 3.6-3.3c.4-.7 1-2.6 1.4-3.8a1 1 0 0 1 1.3-.7l11.4 2.6c.5.2.8.7.8 1.2l-.3 3.2z"
            }), r.createElement("path", {
                fill: "#552950",
                d: "M105 76c-.1.7-.6 1.1-1 1-.6 0-.9-.6-.8-1.2.1-.6.6-1 1-1 .6 0 .9.7.8 1.3m7.1 1.6c0 .6-.5 1-1 1-.5-.1-.8-.7-.7-1.3 0-.6.5-1 1-1 .5.1.8.7.7 1.3"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "m110.1 74.8-.9 1.7-.3 4.3h-2.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#5C2552",
                d: "M110.8 74.5s1.8-.7 2.6.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M92.4 74.3s.5-1.1 1.1-.7c.6.4 1.3 1.4.6 2-.8.5.1 1.6.1 1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#5C2552",
                d: "M103.3 73s1.8 1 4.1.9",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M103.7 81.8s2.2 1.2 4.4 1.2m-3.5 1.3s1 .4 1.6.3m-11.5-3.4s2.3 7.4 10.4 7.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M81.5 89.4s.4 5.6-5 12.8M69 82.7s-.7 9.2-8.2 14.2m68.6 26s-5.3 7.4-9.4 10.7m-.7-26.3s.5 4.4-2.1 32",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#F2D7AD",
                d: "M150 151.2h-49.8a1 1 0 0 1-1-1v-31.7c0-.5.4-1 1-1H150c.6 0 1 .5 1 1v31.7a1 1 0 0 1-1 1"
            }), r.createElement("path", {
                fill: "#F4D19D",
                d: "M150.3 151.2h-19.9v-33.7h20.8v32.8a1 1 0 0 1-1 1"
            }), r.createElement("path", {
                fill: "#F2D7AD",
                d: "M123.6 127.9H92.9a.5.5 0 0 1-.4-.8l6.4-9.1c.2-.3.5-.5.8-.5h31.1l-7.2 10.4z"
            }), r.createElement("path", {
                fill: "#CC9B6E",
                d: "M123.7 128.4H99.2v-.5h24.2l7.2-10.2.4.3z"
            }), r.createElement("path", {
                fill: "#F4D19D",
                d: "M158.3 127.9h-18.7a2 2 0 0 1-1.6-.8l-7.2-9.6h20c.5 0 1 .3 1.2.6l6.7 9a.5.5 0 0 1-.4.8"
            }), r.createElement("path", {
                fill: "#CC9B6E",
                d: "M157.8 128.5h-19.3l-7.9-10.5.4-.3 7.7 10.3h19.1zm-27.2 22.2v-8.2h.4v8.2zm-.1-10.9v-21.4h.4l.1 21.4zm-18.6 1.1-.5-.1 1.5-5.2.5.2zm-3.5.2-2.6-3 2.6-3.4.4.3-2.4 3.1 2.4 2.6zm8.2 0-.4-.4 2.4-2.6-2.4-3 .4-.4 2.7 3.4z"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "m154.3 131.9-3.1-2v3.5l-1 .1a85 85 0 0 1-4.8.3c-1.9 0-2.7 2.2 2.2 2.6l-2.6-.6s-2.2 1.3.5 2.3c0 0-1.6 1.2.6 2.6-.6 3.5 5.2 4 7 3.6a6.1 6.1 0 0 0 4.6-5.2 8 8 0 0 0-3.4-7.2"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M153.7 133.6s-6.5.4-8.4.3c-1.8 0-1.9 2.2 2.4 2.3 3.7.2 5.4 0 5.4 0",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M145.2 135.9c-1.9 1.3.5 2.3.5 2.3s3.5 1 6.8.6m-.6 2.9s-6.3.1-6.7-2.1c-.3-1.4.4-1.4.4-1.4m.5 2.7s-1 3.1 5.5 3.5m-.4-14.5v3.5M52.8 89.3a18 18 0 0 0 13.6-7.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#5BA02E",
                d: "M168.6 248.3a6.6 6.6 0 0 1-6.7-6.6v-66.5a6.6 6.6 0 1 1 13.3 0v66.5a6.6 6.6 0 0 1-6.6 6.6"
            }), r.createElement("path", {
                fill: "#92C110",
                d: "M176.5 247.7a6.6 6.6 0 0 1-6.6-6.7v-33.2a6.6 6.6 0 1 1 13.3 0V241a6.6 6.6 0 0 1-6.7 6.7"
            }), r.createElement("path", {
                fill: "#F2D7AD",
                d: "M186.4 293.6H159a3.2 3.2 0 0 1-3.2-3.2v-46.1a3.2 3.2 0 0 1 3.2-3.2h27.5a3.2 3.2 0 0 1 3.2 3.2v46.1a3.2 3.2 0 0 1-3.2 3.2"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M89 89.5s7.8 5.4 16.6 2.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }))),
            500: () => r.createElement("svg", {
                width: "254",
                height: "294"
            }, r.createElement("title", null, "Server Error"), r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#E4EBF7",
                d: "M0 128.1v-2C0 56.5 56.3.2 125.7.2h2.1C197.2.3 253.5 56.6 253.5 126v2.1c0 69.5-56.3 125.7-125.7 125.7h-2.1A125.7 125.7 0 0 1 0 128.1"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M40 132.1a8.3 8.3 0 1 1-16.6-1.7 8.3 8.3 0 0 1 16.6 1.7"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "m37.2 135.6 10.5 6m1 6.3-12.8 10.8",
                strokeWidth: "2"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M40.1 160.8a5.7 5.7 0 1 1-11.3-1.1 5.7 5.7 0 0 1 11.3 1.1M58 144.6a5.7 5.7 0 1 1-11.4-1.2 5.7 5.7 0 0 1 11.4 1.2M99.7 27.4h30a4.6 4.6 0 1 0 0-9.2h-30a4.6 4.6 0 0 0 0 9.2M111 46h30a4.6 4.6 0 1 0 0-9.3h-30a4.6 4.6 0 1 0 0 9.3m2.5-18.6h16a4.6 4.6 0 1 0 0 9.3h-16a4.6 4.6 0 0 0 0-9.3m36.7 42.7h-4a4.8 4.8 0 0 1-4.8-4.8 4.8 4.8 0 0 1 4.8-4.8h4a4.8 4.8 0 0 1 4.7 4.8 4.8 4.8 0 0 1-4.7 4.8"
            }), r.createElement("circle", {
                cx: "201.35",
                cy: "30.2",
                r: "29.7",
                fill: "#FF603B"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "m203.6 19.4-.7 15a1.5 1.5 0 0 1-3 0l-.7-15a2.2 2.2 0 1 1 4.4 0m-.3 19.4c.5.5.8 1.1.8 1.9s-.3 1.4-.8 1.9a3 3 0 0 1-2 .7 2.5 2.5 0 0 1-1.8-.7c-.6-.6-.8-1.2-.8-2 0-.7.2-1.3.8-1.8.5-.5 1.1-.7 1.8-.7.8 0 1.5.2 2 .7"
            }), r.createElement("path", {
                fill: "#FFB594",
                d: "M119.3 133.3c4.4-.6 3.6-1.2 4-4.8.8-5.2-3-17-8.2-25.1-1-10.7-12.6-11.3-12.6-11.3s4.3 5 4.2 16.2c1.4 5.3.8 14.5.8 14.5s5.3 11.4 11.8 10.5"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M101 91.6s1.4-.6 3.2.6c8 1.4 10.3 6.7 11.3 11.4 1.8 1.2 1.8 2.3 1.8 3.5l1.5 3s-7.2 1.7-11 6.7c-1.3-6.4-6.9-25.2-6.9-25.2"
            }), r.createElement("path", {
                fill: "#FFB594",
                d: "m94 90.5 1-5.8-9.2-11.9-5.2 5.6-2.6 9.9s8.4 5 16 2.2"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M83 78.2s-4.6-2.9-2.5-6.9c1.6-3 4.5 1.2 4.5 1.2s.5-3.7 3.2-3.7c.5-1 1.5-4.2 1.5-4.2l13.6 3.2c0 5.2-2.3 19.5-7.9 20-8.9.6-12.5-9.6-12.5-9.6"
            }), r.createElement("path", {
                fill: "#520038",
                d: "M103 72.2c2.6-2 3.5-9.7 3.5-9.7s-2.5-.5-6.7-2c-4.7-2.2-12.9-4.9-17.6.9-9.5 4.4-2 20-2 20l2.7-3.1s-4-3.3-2.1-6.3c2.2-3.5 4 1 4 1s.6-2.3 3.5-3.3c.4-.7 1-2.7 1.5-3.8A1 1 0 0 1 91 65l11.5 2.7c.5.1.8.6.8 1.2l-.3 3.2z"
            }), r.createElement("path", {
                fill: "#552950",
                d: "M101.2 76.5c0 .6-.6 1-1 1-.5-.1-.9-.7-.8-1.3.1-.6.6-1 1.1-1 .5.1.8.7.7 1.3m-7-1.4c0 .6-.5 1-1 1-.5-.1-.8-.7-.7-1.3 0-.6.6-1 1-1 .5.1.9.7.8 1.3"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "m99.2 73.6-.9 1.7-.3 4.3h-2.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#5C2552",
                d: "M100 73.3s1.7-.7 2.4.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M81.4 73s.4-1 1-.6c.7.4 1.4 1.4.6 2s.2 1.6.2 1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#5C2552",
                d: "M92.3 71.7s1.9 1.1 4.2 1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M92.7 80.6s2.3 1.2 4.4 1.2m-3.4 1.4s1 .4 1.5.3M83.7 80s1.8 6.6 9.2 8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M95.5 91.7s-1 2.8-8.2 2c-7.3-.6-10.3-5-10.3-5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M78.1 87.5s6.6 5 16.5 2.5c0 0 9.6 1 11.5 5.3 5.4 11.8.6 36.8 0 40 3.5 4-.4 8.4-.4 8.4-15.7-3.5-35.8-.6-35.8-.6-4.9-3.5-1.3-9-1.3-9l-6.2-23.8c-2.5-15.2.8-19.8 3.5-20.7 3-1 8-1.3 8-1.3.6 0 1.1 0 1.4-.2 2.4-1.3 2.8-.6 2.8-.6"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M65.8 89.8s-6.8.5-7.6 8.2c-.4 8.8 3 11 3 11s6.1 22 16.9 22.9c8.4-2.2 4.7-6.7 4.6-11.4-.2-11.3-7-17-7-17s-4.3-13.7-9.9-13.7"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M71.7 124.2s.9 11.3 9.8 6.5c4.8-2.5 7.6-13.8 9.8-22.6A201 201 0 0 0 94 96l-5-1.7s-2.4 5.6-7.7 12.3c-4.4 5.5-9.2 11.1-9.5 17.7"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M108.5 105.2s1.7 2.7-2.4 30.5c2.4 2.2 1 6-.2 7.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M123.3 131.5s-.5 2.8-11.8 2c-15.2-1-25.3-3.2-25.3-3.2l.9-5.8s.7.2 9.7-.1c11.9-.4 18.7-6 25-1 4 3.2 1.5 8.1 1.5 8.1"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M70.2 91s-5.6-4.8-11 2.7c-3.3 7.2.5 15.2 2.6 19.5-.3 3.8 2.4 4.3 2.4 4.3s0 1 1.5 2.7c4-7 6.7-9.1 13.7-12.5-.3-.7-1.9-3.3-1.8-3.8.2-1.7-1.3-2.6-1.3-2.6s-.3-.2-1.2-2.8c-.8-2.3-2-5.1-4.9-7.5"
            }), r.createElement("path", {
                fill: "#CBD1D1",
                d: "M90.2 288s4.9 2.3 8.3 1.2c3.2-1 5.2.7 8 1.3a20 20 0 0 0 13.3-1.4c-.2-6.2-7.8-4.5-13.6-7.6-2.9-1.6-4.2-5.3-4-10H91.5s-1.5 12-1.3 16.5"
            }), r.createElement("path", {
                fill: "#2B0849",
                d: "M90.2 287.8s2.8 1.5 7.6.8c3.5-.5 3.3.6 7.5 1.3 4.2.6 13-.2 14.3-1.2.5 1.3-.4 2.4-.4 2.4s-1.7.6-5.4.9c-2.3.1-8.1.3-10.2-.6-2-1.6-4.9-1.5-6-.3-4.5 1.1-7.2-.3-7.2-.3l-.2-3z"
            }), r.createElement("path", {
                fill: "#A4AABA",
                d: "M98.4 272.3h3.5s0 7.5 5.2 9.6c-5.3.7-9.7-2.6-8.7-9.6"
            }), r.createElement("path", {
                fill: "#CBD1D1",
                d: "M44.4 272s-2.2 7.8-4.7 13c-1.9 3.8-4.4 7.8 5.8 7.8 7 0 9.3-.5 7.7-7-1.6-6.3.3-13.8.3-13.8h-9z"
            }), r.createElement("path", {
                fill: "#2B0849",
                d: "M38 290.3s2.3 1.2 7 1.2c6.4 0 8.7-1.7 8.7-1.7s.6 1.1-.7 2.2c-1 1-3.8 1.7-7.7 1.7-4.4 0-6.1-.6-7-1.3-1-.5-.8-1.6-.2-2.1"
            }), r.createElement("path", {
                fill: "#A4AABA",
                d: "M45.3 274s0 1.6-.3 3.1-1.1 3.3-1.2 4.4c0 1.2 4.8 1.6 5.4 0 .7-1.6 1.4-6.8 2-7.6.7-.9-5.1-2.2-5.9.1"
            }), r.createElement("path", {
                fill: "#7BB2F9",
                d: "M89.5 277.6h13.9s1.3-56.6 1.9-66.8c.6-10.3 4-45.1 1-65.6l-13-.7-23.7.8-1.3 10.4c0 .5-.7.9-.8 1.4 0 .6.5 1.4.4 2L59.6 206c-.1.7-1.3 1-1.5 2.8 0 .3.2 1.6.1 1.8-7.1 19.5-12.2 52.6-15.6 67.2h15.1L62 259c3-13.3 24-88.3 24-88.3l3.2-1-.2 48.6s-.2 1.3.4 2.1c.5.8-.6 1.2-.4 2.4l.4 1.8-1 12.4c-.4 4.9 1.2 40.7 1.2 40.7"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M64.6 218.9c1.2 0 4.2-2.1 7.2-5.1m24.2 8.7s3-1.1 6.4-4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M97 219.4s2.9-1.2 6.3-4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M63.2 222.1s2.7-.6 6.7-3.5m5-72.4c-.3 3.2.3 8.8-4.5 9.4m22.8-11.3s.1 14.6-1.4 15.7c-2.3 1.7-3 2-3 2m.4-17s.3 13-1 25m-4.7.7s6.8-1 9.1-1M46 270l-.9 4.6m1.8-11.3-.8 4.1m16.6-64.9c-.3 1.6 0 2-.4 3.4 0 0-2.8 2-2.3 4s-.3 3.4-4.5 17.2c-1.8 5.8-4.3 19-6.2 28.3l-1.1 5.8m16-67-1 4.9m8.1-52.3-1.2 10.9s-1.2.1-.5 2.3c0 1.4-2.8 16.4-5.4 31.6m-20 82.1h13.9",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#192064",
                d: "M106.2 142.1c-3-.5-18.8-2.7-36.2.2a.6.6 0 0 0-.6.7v3a.6.6 0 0 0 .8.6c3.3-.5 17-2.4 35.6-.3.4 0 .7-.2.7-.5.2-1.4.2-2.5.2-3a.6.6 0 0 0-.5-.7"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M96.4 145.3v-5.1a.8.8 0 0 0-.8-.9 114.1 114.1 0 0 0-8.1 0 .8.8 0 0 0-.9.8v5.1c0 .5.4.9.9.9h8a.8.8 0 0 0 .9-.8"
            }), r.createElement("path", {
                fill: "#192064",
                d: "M95.2 144.3v-3.2a.7.7 0 0 0-.6-.7h-6.1a.7.7 0 0 0-.6.7v3.2c0 .4.3.7.6.7h6c.4 0 .7-.3.7-.7"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M90.1 273.5h12.8m-11.7-3.7v6.3m-.3-12.6v4.5m-.5-97.6 1 46.4s.7 1.6-.3 2.8c-.9 1.1 2.6.7 1 2.3-1.7 1.6.9 1.2 0 3.5-.6 1.6-1 22-1.2 36.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M73.7 98.7 76 103s2 .8 1.8 2.7l.8 2.2m-14.3 8.7c.2-1 2.2-7.1 12.6-10.5m.7-16s7.7 6 16.5 2.7",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M92 87s5.5-.9 7.5-4.6c1.3-.3.8 2.2-.3 3.7l-1 1.5s.2.3.2.9c0 .6-.2.6-.3 1v1l-.4 1c-.1.2 0 .6-.2.9-.2.4-1.6 1.8-2.6 2.8-3.8 3.6-5 1.7-6-.4-1-1.8-.7-5.1-.9-6.9-.3-2.9-2.6-3-2-4.4.4-.7 3 .7 3.4 1.8.7 2 2.9 1.8 2.6 1.7"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M99.8 82.4c-.5.1-.3.3-1 1.3-.6 1-4.8 2.9-6.4 3.2-2.5.5-2.2-1.6-4.2-2.9-1.7-1-3.6-.6-1.4 1.4 1 1 1 1.1 1.4 3.2.3 1.5-.7 3.7.7 5.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".8"
            }), r.createElement("path", {
                stroke: "#E59788",
                d: "M79.5 108.7c-2 2.9-4.2 6.1-5.5 8.7",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".8"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M87.7 124.8s-2-2-5.1-2.8c-3-.7-3.6-.1-5.5.1-2 .3-4-.9-3.7.7.3 1.7 5 1 5.2 2.1.2 1.1-6.3 2.8-8.3 2.2-.8.8.5 1.9 2 2.2.3 1.5 2.3 1.5 2.3 1.5s.7 1 2.6 1.1c2.5 1.3 9-.7 11-1.5 2-.9-.5-5.6-.5-5.6"
            }), r.createElement("path", {
                stroke: "#E59788",
                d: "M73.4 122.8s.7 1.2 3.2 1.4c2.3.3 2.6.6 2.6.6s-2.6 3-9.1 2.3m2.3 2.2s3.8 0 5-.7m-2.4 2.2s2 0 3.3-.6m-1 1.7s1.7 0 2.8-.5m-6.8-9s-.6-1.1 1.3-.5c1.7.5 2.8 0 5.1.1 1.4.1 3-.2 4 .2 1.6.8 3.6 2.2 3.6 2.2s10.6 1.2 19-1.1M79 108s-8.4 2.8-13.2 12.1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".8"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M109.3 112.5s3.4-3.6 7.6-4.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#E59788",
                d: "M107.4 123s9.7-2.7 11.4-.9",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".8"
            }), r.createElement("path", {
                stroke: "#BFCDDD",
                d: "m194.6 83.7 4-4M187.2 91l3.7-3.6m.9-3-4.5-4.7m11.2 11.5-4.2-4.3m-65 76.3 3.7-3.7M122.3 170l3.5-3.5m.8-2.9-4.3-4.2M133 170l-4-4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }), r.createElement("path", {
                fill: "#A3B4C6",
                d: "M190.2 211.8h-1.6a4 4 0 0 1-4-4v-32.1a4 4 0 0 1 4-4h1.6a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4"
            }), r.createElement("path", {
                fill: "#A3B4C6",
                d: "M237.8 213a4.8 4.8 0 0 1-4.8 4.8h-86.6a4.8 4.8 0 0 1 0-9.6H233a4.8 4.8 0 0 1 4.8 4.8"
            }), r.createElement("path", {
                fill: "#A3B4C6",
                d: "M154.1 190.1h70.5v-84.6h-70.5z"
            }), r.createElement("path", {
                fill: "#BFCDDD",
                d: "M225 190.1h-71.2a3.2 3.2 0 0 1-3.2-3.2v-19a3.2 3.2 0 0 1 3.2-3.2h71.1a3.2 3.2 0 0 1 3.2 3.2v19a3.2 3.2 0 0 1-3.2 3.2m0-59.3h-71.1a3.2 3.2 0 0 1-3.2-3.2v-19a3.2 3.2 0 0 1 3.2-3.2h71.1a3.2 3.2 0 0 1 3.2 3.3v19a3.2 3.2 0 0 1-3.2 3.1"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M159.6 120.5a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m48.1 0h-22.4a.8.8 0 0 1-.8-.8v-3.2c0-.4.3-.8.8-.8h22.4c.5 0 .8.4.8.8v3.2c0 .5-.3.8-.8.8"
            }), r.createElement("path", {
                fill: "#BFCDDD",
                d: "M225 160.5h-71.2a3.2 3.2 0 0 1-3.2-3.2v-19a3.2 3.2 0 0 1 3.2-3.2h71.1a3.2 3.2 0 0 1 3.2 3.2v19a3.2 3.2 0 0 1-3.2 3.2"
            }), r.createElement("path", {
                stroke: "#7C90A5",
                d: "M173.5 130.8h49.3m-57.8 0h6m-15 0h6.7m11.1 29.8h49.3m-57.7 0h6m-15.8 0h6.7",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M159.6 151a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m48.1 0h-22.4a.8.8 0 0 1-.8-.8V147c0-.4.3-.8.8-.8h22.4c.5 0 .8.4.8.8v3.2c0 .5-.3.8-.8.8m-63 29a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.5 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m48.1 0h-22.4a.8.8 0 0 1-.8-.8V176c0-.5.3-.8.8-.8h22.4c.5 0 .8.3.8.8v3.2c0 .4-.3.8-.8.8"
            }), r.createElement("path", {
                fill: "#BFCDDD",
                d: "M203 221.1h-27.3a2.4 2.4 0 0 1-2.4-2.4v-11.4a2.4 2.4 0 0 1 2.4-2.5H203a2.4 2.4 0 0 1 2.4 2.5v11.4a2.4 2.4 0 0 1-2.4 2.4"
            }), r.createElement("path", {
                stroke: "#A3B4C6",
                d: "M177.3 207.2v11.5m23.8-11.5v11.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#5BA02E",
                d: "M162.9 267.9a9.4 9.4 0 0 1-9.4-9.4v-14.8a9.4 9.4 0 0 1 18.8 0v14.8a9.4 9.4 0 0 1-9.4 9.4"
            }), r.createElement("path", {
                fill: "#92C110",
                d: "M171.2 267.8a9.4 9.4 0 0 1-9.4-9.4V255a9.4 9.4 0 0 1 18.8 0v3.4a9.4 9.4 0 0 1-9.4 9.4"
            }), r.createElement("path", {
                fill: "#F2D7AD",
                d: "M181.3 293.7h-27.7a3.2 3.2 0 0 1-3.2-3.2v-20.7a3.2 3.2 0 0 1 3.2-3.2h27.7a3.2 3.2 0 0 1 3.2 3.2v20.7a3.2 3.2 0 0 1-3.2 3.2"
            }))),
            403: () => r.createElement("svg", {
                width: "251",
                height: "294"
            }, r.createElement("title", null, "Unauthorized"), r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#E4EBF7",
                d: "M0 129v-2C0 58.3 55.6 2.7 124.2 2.7h2c68.6 0 124.2 55.6 124.2 124.1v2.1c0 68.6-55.6 124.2-124.1 124.2h-2.1A124.2 124.2 0 0 1 0 129"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M41.4 133a8.2 8.2 0 1 1-16.4-1.7 8.2 8.2 0 0 1 16.4 1.6"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "m38.7 136.4 10.4 5.9m.9 6.2-12.6 10.7",
                strokeWidth: "2"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M41.5 161.3a5.6 5.6 0 1 1-11.2-1.2 5.6 5.6 0 0 1 11.2 1.2m17.7-16a5.7 5.7 0 1 1-11.3-1.2 5.7 5.7 0 0 1 11.3 1.2m41.2-115.8H130a4.6 4.6 0 1 0 0-9.1h-29.6a4.6 4.6 0 0 0 0 9.1m11.3 18.3h29.7a4.6 4.6 0 1 0 0-9.2h-29.7a4.6 4.6 0 1 0 0 9.2"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M114 29.5h15.8a4.6 4.6 0 1 0 0 9.1H114a4.6 4.6 0 0 0 0-9.1m71.3 108.2a10 10 0 1 1-19.8-2 10 10 0 0 1 19.8 2"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "m180.2 143.8 12.5 7.1m1.1 7.5-15.1 13",
                strokeWidth: "2"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M185.6 172a6.8 6.8 0 1 1-13.6-1.4 6.8 6.8 0 0 1 13.5 1.3m18.6-16.6a6.8 6.8 0 1 1-13.6-1.4 6.8 6.8 0 0 1 13.6 1.4"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "M153 194a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm73-75.8a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.4 0zm-9 34.9a2.2 2.2 0 1 1-4.3 0 2.2 2.2 0 0 1 4.4 0zm-39.2-43.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm18.3-15.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm6.7 88a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0z",
                strokeWidth: "2"
            }), r.createElement("path", {
                stroke: "#FFF",
                d: "m215.1 155.3-1.9 20-10.8 6m-27.8-4.7-6.3 9.8H157l-4.5 6.4m23.4-65.5v-15.7m45.6 7.8-12.8 7.9-15.2-7.9V96.7",
                strokeWidth: "2"
            }), r.createElement("path", {
                fill: "#A26EF4",
                d: "M180.7 29.3a29.3 29.3 0 1 1 58.6 0 29.3 29.3 0 0 1-58.6 0"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "m221.4 41.7-21.5-.1a1.7 1.7 0 0 1-1.7-1.8V27.6a1.7 1.7 0 0 1 1.8-1.7h21.5c1 0 1.8.9 1.8 1.8l-.1 12.3a1.7 1.7 0 0 1-1.7 1.7"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M215.1 29.2c0 2.6-2 4.6-4.5 4.6a4.6 4.6 0 0 1-4.5-4.7v-6.9c0-2.6 2-4.6 4.6-4.6 2.5 0 4.5 2 4.4 4.7v6.9zm-4.5-14a6.9 6.9 0 0 0-7 6.8v7.3a6.9 6.9 0 0 0 13.8.1V22a6.9 6.9 0 0 0-6.8-6.9zm-43 53.2h-4a4.7 4.7 0 0 1-4.7-4.8 4.7 4.7 0 0 1 4.7-4.7h4a4.7 4.7 0 0 1 4.7 4.8 4.7 4.7 0 0 1-4.7 4.7"
            }), r.createElement("path", {
                fill: "#5BA02E",
                d: "M168.2 248.8a6.6 6.6 0 0 1-6.6-6.6v-66a6.6 6.6 0 0 1 13.2 0v66a6.6 6.6 0 0 1-6.6 6.6"
            }), r.createElement("path", {
                fill: "#92C110",
                d: "M176.1 248.2a6.6 6.6 0 0 1-6.6-6.6v-33a6.6 6.6 0 1 1 13.3 0v33a6.6 6.6 0 0 1-6.7 6.6"
            }), r.createElement("path", {
                fill: "#F2D7AD",
                d: "M186 293.9h-27.4a3.2 3.2 0 0 1-3.2-3.2v-45.9a3.2 3.2 0 0 1 3.2-3.1H186a3.2 3.2 0 0 1 3.2 3.1v46a3.2 3.2 0 0 1-3.2 3"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M82 147.7s6.3-1 17.5-1.3c11.8-.4 17.6 1 17.6 1s3.7-3.8 1-8.3c1.3-12.1 6-32.9.3-48.3-1.1-1.4-3.7-1.5-7.5-.6-1.4.3-7.2-.2-8-.1l-15.3-.4-8-.5c-1.6-.1-4.3-1.7-5.5-.3-.4.4-2.4 5.6-2 16l8.7 35.7s-3.2 3.6 1.2 7"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "m75.8 73.3-1-6.4 12-6.5s7.4-.1 8 1.2c.8 1.3-5.5 1-5.5 1s-1.9 1.4-2.6 2.5c-1.7 2.4-1 6.5-8.4 6-1.7.3-2.5 2.2-2.5 2.2"
            }), r.createElement("path", {
                fill: "#FFB594",
                d: "M52.4 77.7S66.7 87 77.4 92c1 .5-2 16.2-11.9 11.8-7.4-3.3-20.1-8.4-21.5-14.5-.7-3.2 2.6-7.6 8.4-11.7M142 80s-6.7 3-13.9 6.9c-3.9 2.1-10.1 4.7-12.3 8-6.2 9.3 3.5 11.2 13 7.5 6.6-2.7 29-12.1 13.2-22.4"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "m76.2 66.4 3 3.8S76.4 73 73 76c-7 6.2-12.8 14.3-16 16.4-4 2.7-9.7 3.3-12.2 0-3.5-5.1.5-14.7 31.5-26"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M64.7 85.1s-2.4 8.4-9 14.5c.7.5 18.6 10.5 22.2 10 5.2-.6 6.4-19 1.2-20.5-.8-.2-6-1.3-8.9-2.2-.9-.2-1.6-1.7-3.5-1l-2-.8zm63.7.7s5.3 2 7.3 13.8c-.6.2-17.6 12.3-21.8 7.8-6.6-7-.8-17.4 4.2-18.6 4.7-1.2 5-1.4 10.3-3"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M78.2 94.7s.9 7.4-5 13",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M87.4 94.7s3.1 2.6 10.3 2.6c7.1 0 9-3.5 9-3.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".9"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "m117.2 68.6-6.8-6.1s-5.4-4.4-9.2-1c-3.9 3.5 4.4 2.2 5.6 4.2 1.2 2.1.9 1.2-2 .5-5.7-1.4-2.1.9 3 5.3 2 1.9 7 1 7 1l2.4-3.9z"
            }), r.createElement("path", {
                fill: "#FFB594",
                d: "m105.3 91.3-.3-11H89l-.5 10.5c0 .4.2.8.6 1 2 1.3 9.3 5 15.8.4.2-.2.4-.5.4-.9"
            }), r.createElement("path", {
                fill: "#5C2552",
                d: "M107.6 74.2c.8-1.1 1-9 1-11.9a1 1 0 0 0-1-1l-4.6-.4c-7.7-1-17 .6-18.3 6.3-5.4 5.9-.4 13.3-.4 13.3s2 3.5 4.3 6.8c.8 1 .4-3.8 3-6a47.9 47.9 0 0 1 16-7"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "M88.4 83.2s2.7 6.2 11.6 6.5c7.8.3 9-7 7.5-17.5l-1-5.5c-6-2.9-15.4.6-15.4.6s-.6 2-.2 5.5c-2.3 2-1.8 5.6-1.8 5.6s-1-2-2-2.3c-.9-.3-2 0-2.3 2-1 4.6 3.6 5.1 3.6 5.1"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "m100.8 77.1 1.7-1-1-4.3.7-1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#552950",
                d: "M105.5 74c0 .8-.4 1.4-1 1.4-.4 0-.8-.7-.8-1.4s.5-1.2 1-1.2.9.6.8 1.3m-8 .2c0 .8-.4 1.3-.9 1.3s-.9-.6-.9-1.3c0-.7.5-1.3 1-1.3s1 .6.9 1.3"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M91.1 86.8s5.3 5 12.7 2.3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#DB836E",
                d: "M99.8 81.9s-3.6.2-1.5-2.8c1.6-1.5 5-.4 5-.4s1 3.9-3.5 3.2"
            }), r.createElement("path", {
                stroke: "#5C2552",
                d: "M102.9 70.6s2.5.8 3.4.7m-12.4.7s2.5-1.2 4.8-1.1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M86.3 77.4s1 .9 1.5 2c-.4.6-1 1.2-.3 1.9m11.8 2.4s2 .2 2.5-.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "m87.8 115.8 15.7-3m-3.3 3 10-2m-43.7-27s-1.6 8.8-6.7 14M128.3 88s3 4 4 11.7",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M64 84.8s-6 10-13.5 10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".8"
            }), r.createElement("path", {
                fill: "#FFC6A0",
                d: "m112.4 66-.2 5.2 12 9.2c4.5 3.6 8.9 7.5 11 8.7 4.8 2.8 8.9 3.3 11 1.8 4.1-2.9 4.4-9.9-8.1-15.3-4.3-1.8-16.1-6.3-25.7-9.7"
            }), r.createElement("path", {
                stroke: "#DB836E",
                d: "M130.5 85.5s4.6 5.7 11.7 6.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".8"
            }), r.createElement("path", {
                stroke: "#E4EBF7",
                d: "M121.7 105.7s-.4 8.6-1.3 13.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M115.8 161.5s-3.6-1.5-2.7-7.1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#CBD1D1",
                d: "M101.5 290.2s4.3 2.1 7.4 1c2.9-.9 4.6.7 7.2 1.3 2.5.5 6.9 1 11.7-1.3 0-5.6-7-4-12-6.8-2.6-1.4-3.8-4.7-3.6-8.8h-9.5s-1.4 10.6-1.2 14.6"
            }), r.createElement("path", {
                fill: "#2B0849",
                d: "M101.5 290s2.4 1.4 6.8.7c3-.4 3.7.5 7.5 1 3.7.6 10.8 0 11.9-.8.4 1-.4 2-.4 2s-1.5.7-4.8.9c-2 .1-5.8.3-7.7-.5-1.8-1.4-5.2-2-5.7-.3-4 1-7.4-.3-7.4-.3l-.2-2.6z"
            }), r.createElement("path", {
                fill: "#A4AABA",
                d: "M108.8 276.2h3.1s0 6.7 4.6 8.6c-4.7.6-8.6-2.3-7.7-8.6"
            }), r.createElement("path", {
                fill: "#CBD1D1",
                d: "M57.6 272.5s-2 7.5-4.5 12.4c-1.8 3.7-4.2 7.6 5.5 7.6 6.7 0 9-.5 7.5-6.7-1.5-6.1.3-13.3.3-13.3h-8.8z"
            }), r.createElement("path", {
                fill: "#2B0849",
                d: "M51.5 290s2.2 1.2 6.7 1.2c6.1 0 8.3-1.6 8.3-1.6s.6 1-.6 2.1c-1 .9-3.6 1.6-7.4 1.6-4.2 0-6-.6-6.8-1.2-.9-.5-.7-1.6-.2-2"
            }), r.createElement("path", {
                fill: "#A4AABA",
                d: "M58.5 274.4s0 1.6-.3 3-1 3.1-1.1 4.2c0 1.1 4.5 1.5 5.2 0 .6-1.6 1.3-6.5 1.9-7.3.6-.8-5-2.1-5.7.1"
            }), r.createElement("path", {
                fill: "#7BB2F9",
                d: "m100.9 277 13.3.1s1.3-54.2 1.8-64c.6-9.9 3.8-43.2 1-62.8l-12.4-.7-22.8.8-1.2 10c0 .4-.6.8-.7 1.3 0 .6.4 1.3.3 2-2.3 14-6.3 32.9-8.7 46.4-.1.6-1.2 1-1.4 2.6 0 .3.2 1.6 0 1.8-6.8 18.7-10.8 47.6-14.1 61.6h14.5s2.2-8.6 4-17a3984 3984 0 0 1 23-84.5l3-.5 1 46.1s-.2 1.2.4 2c.5.8-.6 1.1-.4 2.3l.4 1.7-1 11.9c-.4 4.6 0 39 0 39"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M77.4 220.4c1.2.1 4-2 7-4.9m23.1 8.4s2.8-1 6.1-3.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M108.5 221s2.7-1.2 6-4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M76.1 223.6s2.6-.6 6.5-3.4m4.7-69.4c-.2 3.1.3 8.5-4.3 9m21.8-10.7s.1 14-1.3 15c-2.2 1.6-3 1.9-3 1.9m.5-16.4s0 12.8-1.2 24.3m-4.9 1s7.2-1.6 9.4-1.6m-28.6 31.5-1 4.5s-1.5 1.8-1 3.7c.4 2-1 2-5 15.3-1.7 5.6-4.4 18.5-6.3 27.5l-4 18.4M77 196.7a313.3 313.3 0 0 1-.8 4.8m7.7-50-1.2 10.3s-1 .2-.5 2.3c.1 1.3-2.6 15.6-5.1 30.2M57.6 273h13.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            }), r.createElement("path", {
                fill: "#192064",
                d: "M117.4 147.4s-17-3-35.7.2v4.2s14.6-2.9 35.5-.4l.2-4"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M107.5 150.4v-5a.8.8 0 0 0-.8-.7H99a.8.8 0 0 0-.7.8v4.8c0 .5.3.9.8.8a140.8 140.8 0 0 1 7.7 0 .8.8 0 0 0 .8-.7"
            }), r.createElement("path", {
                fill: "#192064",
                d: "M106.4 149.4v-3a.6.6 0 0 0-.6-.7 94.1 94.1 0 0 0-5.8 0 .6.6 0 0 0-.7.7v3c0 .4.3.7.7.7h5.7c.4 0 .7-.3.7-.7"
            }), r.createElement("path", {
                stroke: "#648BD8",
                d: "M101.5 274h12.3m-11.1-5v6.5m0-12.4v4.3m-.5-93.4.9 44.4s.7 1.6-.2 2.7c-1 1.1 2.4.7.9 2.2-1.6 1.6.9 1.1 0 3.4-.6 1.5-1 21-1.1 35",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.1"
            })))
        },
        z = Object.keys(D),
        A = ({
            icon: e,
            status: t,
            className: a,
            style: l
        }) => {
            if (z.includes(`${t}`)) {
                let e = D[t];
                return r.createElement("div", {
                    className: a,
                    style: l
                }, r.createElement(e, null))
            }
            let n = r.createElement(w[t]);
            return null === e || !1 === e ? null : r.createElement("div", {
                className: a,
                style: l
            }, e || n)
        },
        N = ({
            className: e,
            extra: t,
            style: a
        }) => t ? r.createElement("div", {
            className: e,
            style: a
        }, t) : null,
        W = e => {
            let {
                prefixCls: t,
                className: a,
                rootClassName: o,
                subTitle: i,
                title: s,
                style: c,
                children: d,
                status: m = "info",
                icon: u,
                extra: h,
                styles: f,
                classNames: p,
                ...E
            } = e, {
                getPrefixCls: k,
                direction: g,
                className: v,
                style: F,
                classNames: M,
                styles: x
            } = (0, n.useComponentConfig)("result"), C = { ...e,
                status: m
            }, [b, L] = (0, y.useMergeSemantic)([M, p], [x, f], {
                props: C
            }), B = k("result", t), [w, D] = S(B), W = (0, l.clsx)(B, `${B}-${m}`, a, v, o, {
                [`${B}-rtl`]: "rtl" === g
            }, w, D, b.root), j = (0, l.clsx)(`${B}-title`, b.title), R = (0, l.clsx)(`${B}-subtitle`, b.subTitle), I = (0, l.clsx)(`${B}-extra`, b.extra), H = (0, l.clsx)(`${B}-body`, b.body), T = (0, l.clsx)(`${B}-icon`, {
                [`${B}-image`]: z.includes(`${m}`)
            }, b.icon), P = { ...L.root,
                ...F,
                ...c
            }, _ = (0, $.default)(E, {
                aria: !0,
                data: !0
            });
            return r.createElement("div", { ..._,
                className: W,
                style: P
            }, r.createElement(A, {
                className: T,
                style: L.icon,
                status: m,
                icon: u
            }), r.createElement("div", {
                className: j,
                style: L.title
            }, s), i && r.createElement("div", {
                className: R,
                style: L.subTitle
            }, i), r.createElement(N, {
                className: I,
                extra: h,
                style: L.extra
            }), d && r.createElement("div", {
                className: H,
                style: L.body
            }, d))
        };
    W.PRESENTED_IMAGE_403 = D["403"], W.PRESENTED_IMAGE_404 = D["404"], W.PRESENTED_IMAGE_500 = D["500"], e.s(["default", 0, W], 376150)
}, 40312, e => {
    "use strict";
    var t = e.i(466404),
        r = e.i(522254),
        a = e.i(289882),
        l = e.i(170517),
        n = e.i(628882),
        o = e.i(320890),
        i = e.i(104458),
        s = e.i(722319),
        c = e.i(8398),
        d = e.i(279728);
    e.i(765846);
    var m = e.i(602716),
        u = e.i(328052);
    e.i(262370);
    var h = e.i(135551);
    let f = (e, t) => new h.FastColor(e).setA(t).toRgbString(),
        p = (e, t) => new h.FastColor(e).lighten(t).toHexString(),
        E = e => {
            let t = (0, m.generate)(e, {
                theme: "dark"
            });
            return {
                1: t[0],
                2: t[1],
                3: t[2],
                4: t[3],
                5: t[6],
                6: t[5],
                7: t[4],
                8: t[6],
                9: t[5],
                10: t[4]
            }
        },
        k = (e, t) => {
            let r = e || "#000",
                a = t || "#fff";
            return {
                colorBgBase: r,
                colorTextBase: a,
                colorText: f(a, .85),
                colorTextSecondary: f(a, .65),
                colorTextTertiary: f(a, .45),
                colorTextQuaternary: f(a, .25),
                colorFill: f(a, .18),
                colorFillSecondary: f(a, .12),
                colorFillTertiary: f(a, .08),
                colorFillQuaternary: f(a, .04),
                colorBgSolid: f(a, .95),
                colorBgSolidHover: f(a, 1),
                colorBgSolidActive: f(a, .9),
                colorBgElevated: p(r, 12),
                colorBgContainer: p(r, 8),
                colorBgLayout: p(r, 0),
                colorBgSpotlight: p(r, 26),
                colorBgBlur: f(a, .04),
                colorBorder: p(r, 26),
                colorBorderDisabled: p(r, 26),
                colorBorderSecondary: p(r, 19)
            }
        },
        g = {
            defaultSeed: o.defaultConfig.token,
            useToken: function() {
                let [e, t, r, a] = (0, i.useToken)();
                return {
                    theme: e,
                    token: t,
                    hashId: r,
                    cssVar: a
                }
            },
            defaultAlgorithm: s.default,
            darkAlgorithm: (e, t) => {
                let r = Object.keys(l.defaultPresetColors).map(t => {
                        let r = (0, m.generate)(e[t], {
                            theme: "dark"
                        });
                        return Array.from({
                            length: 10
                        }, () => 1).reduce((e, a, l) => (e[`${t}-${l+1}`] = r[l], e[`${t}${l+1}`] = r[l], e), {})
                    }).reduce((e, t) => e = { ...e,
                        ...t
                    }, {}),
                    a = t ? ? (0, s.default)(e),
                    n = (0, u.default)(e, {
                        generateColorPalettes: E,
                        generateNeutralColorPalettes: k
                    });
                return { ...a,
                    ...r,
                    ...n,
                    colorPrimaryBg: n.colorPrimaryBorder,
                    colorPrimaryBgHover: n.colorPrimaryBorderHover
                }
            },
            compactAlgorithm: (e, t) => {
                let r = t ? ? (0, s.default)(e),
                    a = r.fontSizeSM,
                    l = r.controlHeight - 4;
                return { ...r,
                    ... function(e) {
                        let {
                            sizeUnit: t,
                            sizeStep: r
                        } = e, a = r - 2;
                        return {
                            sizeXXL: t * (a + 10),
                            sizeXL: t * (a + 6),
                            sizeLG: t * (a + 2),
                            sizeMD: t * (a + 2),
                            sizeMS: t * (a + 1),
                            size: t * a,
                            sizeSM: t * a,
                            sizeXS: t * (a - 1),
                            sizeXXS: t * (a - 1)
                        }
                    }(t ? ? e),
                    ...(0, d.default)(a),
                    controlHeight: l,
                    ...(0, c.default)({ ...r,
                        controlHeight: l
                    })
                }
            },
            getDesignToken: e => {
                let o = e ? .algorithm ? (0, t.createTheme)(e.algorithm) : a.default,
                    i = { ...l.default,
                        ...e ? .token
                    };
                return (0, r.getComputedToken)(i, {
                    override: e ? .token
                }, o, n.default)
            },
            defaultConfig: o.defaultConfig,
            _internalContext: o.DesignTokenContext
        };
    e.s(["default", 0, g], 40312)
}]);