(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 328235, 260698, 965044, 704079, 950211, 33578, 213381, e => {
    "use strict";
    var t = e.i(649637),
        n = e.i(232839),
        l = e.i(207670),
        r = e.i(271645),
        o = e.i(830731),
        i = e.i(737434);
    let {
        ESC: u,
        TAB: s
    } = o.default, a = (0, r.forwardRef)((e, t) => {
        let {
            overlay: l,
            arrow: o,
            prefixCls: i
        } = e, u = (0, r.useMemo)(() => "function" == typeof l ? l() : l, [l]), s = (0, n.composeRef)(t, (0, n.getNodeRef)(u));
        return r.default.createElement(r.default.Fragment, null, o && r.default.createElement("div", {
            className: `${i}-arrow`
        }), r.default.cloneElement(u, {
            ref: (0, n.supportRef)(u) ? s : void 0
        }))
    }), c = {
        adjustX: 1,
        adjustY: 1
    }, f = [0, 0], d = {
        topLeft: {
            points: ["bl", "tl"],
            overflow: c,
            offset: [0, -4],
            targetOffset: f
        },
        top: {
            points: ["bc", "tc"],
            overflow: c,
            offset: [0, -4],
            targetOffset: f
        },
        topRight: {
            points: ["br", "tr"],
            overflow: c,
            offset: [0, -4],
            targetOffset: f
        },
        bottomLeft: {
            points: ["tl", "bl"],
            overflow: c,
            offset: [0, 4],
            targetOffset: f
        },
        bottom: {
            points: ["tc", "bc"],
            overflow: c,
            offset: [0, 4],
            targetOffset: f
        },
        bottomRight: {
            points: ["tr", "br"],
            overflow: c,
            offset: [0, 4],
            targetOffset: f
        }
    };

    function p() {
        return (p = Object.assign.bind()).apply(this, arguments)
    }
    let m = r.default.forwardRef((e, o) => {
        let {
            arrow: c = !1,
            prefixCls: f = "rc-dropdown",
            transitionName: m,
            animation: v,
            align: b,
            placement: h = "bottomLeft",
            placements: g = d,
            getPopupContainer: y,
            showAction: E,
            hideAction: C,
            overlayClassName: w,
            overlayStyle: R,
            visible: x,
            trigger: $ = ["hover"],
            autoFocus: k,
            overlay: N,
            children: P,
            onVisibleChange: M,
            ...S
        } = e, [I, O] = r.default.useState(), T = "visible" in e ? x : I, j = v ? `${f}-${v}` : m, L = r.default.useRef(null), A = r.default.useRef(null), z = r.default.useRef(null);
        r.default.useImperativeHandle(o, () => L.current);
        let K = e => {
            O(e), M ? .(e)
        };
        ! function(e) {
            let {
                visible: t,
                triggerRef: n,
                onVisibleChange: l,
                autoFocus: o,
                overlayRef: a
            } = e, c = r.useRef(!1), f = () => {
                t && (n.current ? .focus ? .(), l ? .(!1))
            }, d = () => !!a.current ? .focus && (a.current.focus(), c.current = !0, !0), p = e => {
                switch (e.keyCode) {
                    case u:
                        f();
                        break;
                    case s:
                        {
                            let t = !1;c.current || (t = d()),
                            t ? e.preventDefault() : f()
                        }
                }
            };
            r.useEffect(() => t ? (window.addEventListener("keydown", p), o && (0, i.default)(d, 3), () => {
                window.removeEventListener("keydown", p), c.current = !1
            }) : () => {
                c.current = !1
            }, [t])
        }({
            visible: T,
            triggerRef: z,
            onVisibleChange: K,
            autoFocus: k,
            overlayRef: A
        });
        let D = () => r.default.createElement(a, {
                ref: A,
                overlay: N,
                prefixCls: f,
                arrow: c
            }),
            V = r.default.cloneElement(P, {
                className: (0, l.clsx)(P.props ? .className, T && (() => {
                    let {
                        openClassName: t
                    } = e;
                    return void 0 !== t ? t : `${f}-open`
                })()),
                ref: (0, n.supportRef)(P) ? (0, n.composeRef)(z, (0, n.getNodeRef)(P)) : void 0
            }),
            B = C;
        return B || -1 === $.indexOf("contextMenu") || (B = ["click"]), r.default.createElement(t.default, p({
            builtinPlacements: g
        }, S, {
            prefixCls: f,
            ref: L,
            popupClassName: (0, l.clsx)(w, {
                [`${f}-show-arrow`]: c
            }),
            popupStyle: R,
            action: $,
            showAction: E,
            hideAction: B,
            popupPlacement: h,
            popupAlign: b,
            popupMotion: {
                motionName: j
            },
            popupVisible: T,
            stretch: (() => {
                let {
                    minOverlayWidthMatchTrigger: t,
                    alignPoint: n
                } = e;
                return "minOverlayWidthMatchTrigger" in e ? t : !n
            })() ? "minWidth" : "",
            popup: "function" == typeof N ? D : D(),
            onOpenChange: K,
            onPopupClick: t => {
                let {
                    onOverlayClick: n
                } = e;
                O(!1), n && n(t)
            },
            getPopupContainer: y
        }), V)
    });
    e.s(["default", 0, m], 328235), e.i(247167);
    var v = e.i(452410),
        b = e.i(440383),
        h = e.i(987225),
        g = e.i(118696),
        y = e.i(24308),
        E = e.i(174080);
    let C = r.createContext(null);

    function w(e) {
        var t;
        return t = r.useContext(C), `${t}-${e}`
    }
    var R = e.i(178749);
    let x = r.createContext(null);

    function $(e) {
        let {
            children: t,
            locked: n,
            ...l
        } = e, o = r.useContext(x), i = (0, R.default)(() => {
            let e;
            return e = { ...o
            }, Object.keys(l).forEach(t => {
                let n = l[t];
                void 0 !== n && (e[t] = n)
            }), e
        }, [o, l], (e, t) => !n && (e[0] !== t[0] || !(0, g.default)(e[1], t[1], !0)));
        return r.createElement(x.Provider, {
            value: i
        }, t)
    }
    let k = r.createContext(null);

    function N() {
        return r.useContext(k)
    }
    let P = r.createContext([]);

    function M(e) {
        let t = r.useContext(P);
        return r.useMemo(() => void 0 !== e ? [...t, e] : t, [t, e])
    }
    let S = r.createContext(null);
    e.s(["PathRegisterContext", 0, k, "PathTrackerContext", 0, P, "PathUserContext", 0, S, "useFullPath", () => M, "useMeasure", () => N], 260698);
    let I = r.createContext({});
    var O = e.i(563611);
    let {
        LEFT: T,
        RIGHT: j,
        UP: L,
        DOWN: A,
        ENTER: z,
        ESC: K,
        HOME: D,
        END: V
    } = o.default, B = [L, A, T, j];

    function _(e, t) {
        return (0, O.getFocusNodeList)(e, !0).filter(e => t.has(e))
    }

    function F(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        let r = _(e, t),
            o = r.length,
            i = r.findIndex(e => n === e);
        return l < 0 ? -1 === i ? i = o - 1 : i -= 1 : l > 0 && (i += 1), r[i = (i + o) % o]
    }
    let U = (e, t) => {
            let n = new Set,
                l = new Map,
                r = new Map;
            return e.forEach(e => {
                let o = document.querySelector(`[data-menu-id='${t}-${e}']`);
                o && (n.add(o), r.set(o, e), l.set(e, o))
            }), {
                elements: n,
                key2element: l,
                element2key: r
            }
        },
        W = "__RC_UTIL_PATH_SPLIT__",
        H = "rc-menu-more";

    function q(e) {
        let t = r.useRef(e);
        t.current = e;
        let n = r.useCallback(function() {
            for (var e = arguments.length, n = Array(e), l = 0; l < e; l++) n[l] = arguments[l];
            return t.current ? .(...n)
        }, []);
        return e ? n : void 0
    }
    var X = e.i(180573),
        Y = r;

    function G(e, t, n, l) {
        let {
            activeKey: o,
            onActive: i,
            onInactive: u
        } = r.useContext(x), s = {
            active: o === e
        };
        return t || (s.onMouseEnter = t => {
            n ? .({
                key: e,
                domEvent: t
            }), i(e)
        }, s.onMouseLeave = t => {
            l ? .({
                key: e,
                domEvent: t
            }), u(e)
        }), s
    }

    function J(e) {
        let {
            mode: t,
            rtl: n,
            inlineIndent: l
        } = r.useContext(x);
        return "inline" !== t ? null : n ? {
            paddingRight: e * l
        } : {
            paddingLeft: e * l
        }
    }

    function Q(e) {
        let t, {
            icon: n,
            props: l,
            children: o
        } = e;
        return null === n || !1 === n ? null : ("function" == typeof n ? t = r.createElement(n, { ...l
        }) : "boolean" != typeof n && (t = n), t || o || null)
    }

    function Z(e) {
        let {
            item: t,
            ...n
        } = e;
        return Object.defineProperty(n, "item", {
            get: () => ((0, y.default)(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t)
        }), n
    }

    function ee() {
        return (ee = Object.assign.bind()).apply(this, arguments)
    }
    class et extends Y.Component {
        render() {
            let {
                title: e,
                attribute: t,
                elementRef: n,
                ...l
            } = this.props, r = (0, X.default)(l, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
            return (0, y.default)(!t, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), Y.createElement(v.default.Item, ee({}, t, {
                title: "string" == typeof e ? e : void 0
            }, r, {
                ref: n
            }))
        }
    }
    let en = Y.forwardRef((e, t) => {
            let {
                style: r,
                className: i,
                eventKey: u,
                warnKey: s,
                disabled: a,
                itemIcon: c,
                children: f,
                role: d,
                onMouseEnter: p,
                onMouseLeave: m,
                onClick: v,
                onKeyDown: b,
                onFocus: h,
                ...g
            } = e, y = w(u), {
                prefixCls: E,
                onItemClick: C,
                disabled: R,
                overflowDisabled: $,
                itemIcon: k,
                selectedKeys: N,
                onActive: P
            } = Y.useContext(x), {
                _internalRenderMenuItem: S
            } = Y.useContext(I), O = `${E}-item`, T = Y.useRef(), j = Y.useRef(), L = R || a, A = (0, n.useComposeRef)(t, j), z = M(u), K = e => ({
                key: u,
                keyPath: [...z].reverse(),
                item: T.current,
                domEvent: e
            }), {
                active: D,
                ...V
            } = G(u, L, p, m), B = N.includes(u), _ = J(z.length), F = {};
            "option" === e.role && (F["aria-selected"] = B);
            let U = Y.createElement(et, ee({
                ref: T,
                elementRef: A,
                role: null === d ? "none" : d || "menuitem",
                tabIndex: a ? null : -1,
                "data-menu-id": $ && y ? null : y
            }, (0, X.default)(g, ["extra"]), V, F, {
                component: "li",
                "aria-disabled": a,
                style: { ..._,
                    ...r
                },
                className: (0, l.clsx)(O, {
                    [`${O}-active`]: D,
                    [`${O}-selected`]: B,
                    [`${O}-disabled`]: L
                }, i),
                onClick: e => {
                    if (L) return;
                    let t = K(e);
                    v ? .(Z(t)), C(t)
                },
                onKeyDown: e => {
                    if (b ? .(e), e.which === o.default.ENTER) {
                        let t = K(e);
                        v ? .(Z(t)), C(t)
                    }
                },
                onFocus: e => {
                    P(u), h ? .(e)
                }
            }), f, Y.createElement(Q, {
                props: { ...e,
                    isSelected: B
                },
                icon: c || k
            }));
            return S && (U = S(U, e, {
                selected: B
            })), U
        }),
        el = Y.forwardRef(function(e, t) {
            let {
                eventKey: n
            } = e, l = N(), r = M(n);
            return (Y.useEffect(() => {
                if (l) return l.registerPath(n, r), () => {
                    l.unregisterPath(n, r)
                }
            }, [r]), l) ? null : Y.createElement(en, ee({}, e, {
                ref: t
            }))
        });

    function er() {
        return (er = Object.assign.bind()).apply(this, arguments)
    }
    e.s(["default", 0, el], 965044);
    let eo = r.forwardRef((e, t) => {
        let {
            className: n,
            children: o,
            ...i
        } = e, {
            prefixCls: u,
            mode: s,
            rtl: a
        } = r.useContext(x);
        return r.createElement("ul", er({
            className: (0, l.clsx)(u, a && `${u}-rtl`, `${u}-sub`, `${u}-${"inline"===s?"inline":"vertical"}`, n),
            role: "menu"
        }, i, {
            "data-menu-list": !0,
            ref: t
        }), o)
    });
    var ei = e.i(167007);

    function eu(e, t) {
        return (0, ei.default)(e).map((e, n) => {
            if (r.isValidElement(e)) {
                let {
                    key: l
                } = e, o = e.props ? .eventKey ? ? l;
                null == o && (o = `tmp_key-${[...t,n].join("-")}`);
                let i = {
                    key: o,
                    eventKey: o
                };
                return r.cloneElement(e, i)
            }
            return e
        })
    }
    let es = {
            adjustX: 1,
            adjustY: 1
        },
        ea = {
            topLeft: {
                points: ["bl", "tl"],
                overflow: es
            },
            topRight: {
                points: ["br", "tr"],
                overflow: es
            },
            bottomLeft: {
                points: ["tl", "bl"],
                overflow: es
            },
            bottomRight: {
                points: ["tr", "br"],
                overflow: es
            },
            leftTop: {
                points: ["tr", "tl"],
                overflow: es
            },
            leftBottom: {
                points: ["br", "bl"],
                overflow: es
            },
            rightTop: {
                points: ["tl", "tr"],
                overflow: es
            },
            rightBottom: {
                points: ["bl", "br"],
                overflow: es
            }
        },
        ec = {
            topLeft: {
                points: ["bl", "tl"],
                overflow: es
            },
            topRight: {
                points: ["br", "tr"],
                overflow: es
            },
            bottomLeft: {
                points: ["tl", "bl"],
                overflow: es
            },
            bottomRight: {
                points: ["tr", "br"],
                overflow: es
            },
            rightTop: {
                points: ["tr", "tl"],
                overflow: es
            },
            rightBottom: {
                points: ["br", "bl"],
                overflow: es
            },
            leftTop: {
                points: ["tl", "tr"],
                overflow: es
            },
            leftBottom: {
                points: ["bl", "br"],
                overflow: es
            }
        };

    function ef(e, t, n) {
        return t || (n ? n[e] || n.other : void 0)
    }
    let ed = {
        horizontal: "bottomLeft",
        vertical: "rightTop",
        "vertical-left": "rightTop",
        "vertical-right": "leftTop"
    };

    function ep(e) {
        let {
            prefixCls: n,
            visible: o,
            children: u,
            popup: s,
            popupStyle: a,
            popupClassName: c,
            popupOffset: f,
            disabled: d,
            mode: p,
            onVisibleChange: m
        } = e, {
            getPopupContainer: v,
            rtl: b,
            subMenuOpenDelay: h,
            subMenuCloseDelay: g,
            builtinPlacements: y,
            triggerSubMenuAction: E,
            forceSubMenuRender: C,
            rootClassName: w,
            motion: R,
            defaultMotions: $
        } = r.useContext(x), [k, N] = r.useState(!1), P = b ? { ...ec,
            ...y
        } : { ...ea,
            ...y
        }, M = ed[p], S = ef(p, R, $), I = r.useRef(S);
        "inline" !== p && (I.current = S);
        let O = { ...I.current,
                leavedClassName: `${n}-hidden`,
                removeOnLeave: !1,
                motionAppear: !0
            },
            T = r.useRef();
        return r.useEffect(() => (T.current = (0, i.default)(() => {
            N(o)
        }), () => {
            i.default.cancel(T.current)
        }), [o]), r.createElement(t.default, {
            prefixCls: n,
            popupClassName: (0, l.clsx)(`${n}-popup`, {
                [`${n}-rtl`]: b
            }, c, w),
            stretch: "horizontal" === p ? "minWidth" : null,
            getPopupContainer: v,
            builtinPlacements: P,
            popupPlacement: M,
            popupVisible: k,
            popup: s,
            popupStyle: a,
            popupAlign: f && {
                offset: f
            },
            action: d ? [] : [E],
            mouseEnterDelay: h,
            mouseLeaveDelay: g,
            onPopupVisibleChange: m,
            forceRender: C,
            popupMotion: O,
            fresh: !0
        }, u)
    }
    var em = e.i(128473);

    function ev() {
        return (ev = Object.assign.bind()).apply(this, arguments)
    }

    function eb(e) {
        let {
            id: t,
            open: n,
            keyPath: l,
            children: o
        } = e, i = "inline", {
            prefixCls: u,
            forceSubMenuRender: s,
            motion: a,
            defaultMotions: c,
            mode: f
        } = r.useContext(x), d = r.useRef(!1);
        d.current = f === i;
        let [p, m] = r.useState(!d.current), v = !!d.current && n;
        r.useEffect(() => {
            d.current && m(!1)
        }, [f]);
        let b = { ...ef(i, a, c)
        };
        l.length > 1 && (b.motionAppear = !1);
        let h = b.onVisibleChanged;
        return (b.onVisibleChanged = e => (d.current || e || m(!0), h ? .(e)), p) ? null : r.createElement($, {
            mode: i,
            locked: !d.current
        }, r.createElement(em.default, ev({
            visible: v
        }, b, {
            forceRender: s,
            removeOnLeave: !1,
            leavedClassName: `${u}-hidden`
        }), e => {
            let {
                className: n,
                style: l
            } = e;
            return r.createElement(eo, {
                id: t,
                className: n,
                style: l
            }, o)
        }))
    }

    function eh() {
        return (eh = Object.assign.bind()).apply(this, arguments)
    }
    let eg = r.forwardRef((e, t) => {
            let {
                style: n,
                className: o,
                styles: i,
                classNames: u,
                title: s,
                eventKey: a,
                warnKey: c,
                disabled: f,
                internalPopupClose: d,
                children: p,
                itemIcon: m,
                expandIcon: b,
                popupClassName: h,
                popupOffset: g,
                popupStyle: y,
                onClick: E,
                onMouseEnter: C,
                onMouseLeave: R,
                onTitleClick: k,
                onTitleMouseEnter: N,
                onTitleMouseLeave: P,
                popupRender: O,
                ...T
            } = e, j = w(a), {
                prefixCls: L,
                mode: A,
                openKeys: z,
                disabled: K,
                overflowDisabled: D,
                activeKey: V,
                selectedKeys: B,
                itemIcon: _,
                expandIcon: F,
                onItemClick: U,
                onOpenChange: W,
                onActive: H,
                popupRender: X
            } = r.useContext(x), {
                _internalRenderSubMenuItem: Y
            } = r.useContext(I), {
                isSubPathKey: ee
            } = r.useContext(S), et = M(), en = `${L}-submenu`, el = K || f, er = r.useRef(), ei = r.useRef(), eu = b ? ? F, es = z.includes(a), ea = !D && es, ec = ee(B, a), {
                active: ef,
                ...ed
            } = G(a, el, N, P), [em, ev] = r.useState(!1), eg = e => {
                el || ev(e)
            }, ey = r.useMemo(() => ef || "inline" !== A && (em || ee([V], a)), [A, ef, V, em, a, ee]), eE = J(et.length), eC = q(e => {
                E ? .(Z(e)), U(e)
            }), ew = j && `${j}-popup`, eR = r.useMemo(() => r.createElement(Q, {
                icon: "horizontal" !== A ? eu : void 0,
                props: { ...e,
                    isOpen: ea,
                    isSubMenu: !0
                }
            }, r.createElement("i", {
                className: `${en}-arrow`
            })), [A, eu, e, ea, en]), ex = r.createElement("div", eh({
                role: "menuitem",
                style: eE,
                className: `${en}-title`,
                tabIndex: el ? null : -1,
                ref: er,
                title: "string" == typeof s ? s : null,
                "data-menu-id": D && j ? null : j,
                "aria-expanded": ea,
                "aria-haspopup": !0,
                "aria-controls": ew,
                "aria-disabled": el,
                onClick: e => {
                    el || (k ? .({
                        key: a,
                        domEvent: e
                    }), "inline" === A && W(a, !es))
                },
                onFocus: () => {
                    H(a)
                }
            }, ed), s, eR), e$ = r.useRef(A);
            "inline" !== A && et.length > 1 ? e$.current = "vertical" : e$.current = A;
            let ek = e$.current,
                eN = r.useMemo(() => {
                    let t = r.createElement($, {
                            classNames: u,
                            styles: i,
                            mode: "horizontal" === ek ? "vertical" : ek
                        }, r.createElement(eo, {
                            id: ew,
                            ref: ei
                        }, p)),
                        n = O || X;
                    return n ? n(t, {
                        item: e,
                        keys: et
                    }) : t
                }, [O, X, et, ew, p, e, ek]);
            if (!D) {
                let e = e$.current;
                ex = r.createElement(ep, {
                    mode: e,
                    prefixCls: en,
                    visible: !d && ea && "inline" !== A,
                    popupClassName: h,
                    popupOffset: g,
                    popupStyle: y,
                    popup: eN,
                    disabled: el,
                    onVisibleChange: e => {
                        "inline" !== A && W(a, e)
                    }
                }, ex)
            }
            let eP = r.createElement(v.default.Item, eh({
                ref: t,
                role: "none"
            }, T, {
                component: "li",
                style: n,
                className: (0, l.clsx)(en, `${en}-${A}`, o, {
                    [`${en}-open`]: ea,
                    [`${en}-active`]: ey,
                    [`${en}-selected`]: ec,
                    [`${en}-disabled`]: el
                }),
                onMouseEnter: e => {
                    eg(!0), C ? .({
                        key: a,
                        domEvent: e
                    })
                },
                onMouseLeave: e => {
                    eg(!1), R ? .({
                        key: a,
                        domEvent: e
                    })
                }
            }), ex, !D && r.createElement(eb, {
                id: ew,
                open: ea,
                keyPath: et
            }, p));
            return Y && (eP = Y(eP, e, {
                selected: ec,
                active: ey,
                open: ea,
                disabled: el
            })), r.createElement($, {
                classNames: u,
                styles: i,
                onItemClick: eC,
                mode: "horizontal" === A ? "vertical" : A,
                itemIcon: m ? ? _,
                expandIcon: eu
            }, eP)
        }),
        ey = r.forwardRef((e, t) => {
            let n, {
                    eventKey: l,
                    children: o
                } = e,
                i = M(l),
                u = eu(o, i),
                s = N();
            return r.useEffect(() => {
                if (s) return s.registerPath(l, i), () => {
                    s.unregisterPath(l, i)
                }
            }, [i]), n = s ? u : r.createElement(eg, eh({
                ref: t
            }, e), u), r.createElement(P.Provider, {
                value: i
            }, n)
        });

    function eE(e) {
        let {
            className: t,
            style: n
        } = e, {
            prefixCls: o
        } = r.useContext(x);
        return N() ? null : r.createElement("li", {
            role: "separator",
            className: (0, l.clsx)(`${o}-item-divider`, t),
            style: n
        })
    }

    function eC() {
        return (eC = Object.assign.bind()).apply(this, arguments)
    }
    e.s(["default", 0, ey], 704079), e.s(["default", () => eE], 950211);
    let ew = r.forwardRef((e, t) => {
            let {
                className: n,
                title: o,
                eventKey: i,
                children: u,
                ...s
            } = e, {
                prefixCls: a,
                classNames: c,
                styles: f
            } = r.useContext(x), d = `${a}-item-group`;
            return r.createElement("li", eC({
                ref: t,
                role: "presentation"
            }, s, {
                onClick: e => e.stopPropagation(),
                className: (0, l.clsx)(d, n)
            }), r.createElement("div", {
                role: "presentation",
                className: (0, l.clsx)(`${d}-title`, c ? .listTitle),
                style: f ? .listTitle,
                title: "string" == typeof o ? o : void 0
            }, o), r.createElement("ul", {
                role: "group",
                className: (0, l.clsx)(`${d}-list`, c ? .list),
                style: f ? .list
            }, u))
        }),
        eR = r.forwardRef((e, t) => {
            let {
                eventKey: n,
                children: l
            } = e, o = eu(l, M(n));
            return N() ? o : r.createElement(ew, eC({
                ref: t
            }, (0, X.default)(e, ["warnKey"])), o)
        });

    function ex() {
        return (ex = Object.assign.bind()).apply(this, arguments)
    }

    function e$(e, t, n, l, o) {
        let i = e,
            u = {
                divider: eE,
                item: el,
                group: eR,
                submenu: ey,
                ...l
            };
        return t && (i = function e(t, n, l) {
            let {
                item: o,
                group: i,
                submenu: u,
                divider: s
            } = n;
            return (t || []).map((t, a) => {
                if (t && "object" == typeof t) {
                    let {
                        label: c,
                        children: f,
                        key: d,
                        type: p,
                        extra: m,
                        ...v
                    } = t, b = d ? ? `tmp-${a}`;
                    return f || "group" === p ? "group" === p ? r.createElement(i, ex({
                        key: b
                    }, v, {
                        title: c
                    }), e(f, n, l)) : r.createElement(u, ex({
                        key: b
                    }, v, {
                        title: c
                    }), e(f, n, l)) : "divider" === p ? r.createElement(s, ex({
                        key: b
                    }, v)) : r.createElement(o, ex({
                        key: b
                    }, v, {
                        extra: m
                    }), c, (!!m || 0 === m) && r.createElement("span", {
                        className: `${l}-item-extra`
                    }, m))
                }
                return null
            }).filter(e => e)
        }(t, u, o)), eu(i, n)
    }

    function ek() {
        return (ek = Object.assign.bind()).apply(this, arguments)
    }
    e.s(["default", 0, eR], 33578);
    let eN = [],
        eP = r.forwardRef((e, t) => {
            var n;
            let o, u, s, {
                    prefixCls: a = "rc-menu",
                    rootClassName: c,
                    style: f,
                    className: d,
                    styles: p,
                    classNames: m,
                    tabIndex: y = 0,
                    items: w,
                    children: R,
                    direction: x,
                    id: N,
                    mode: P = "vertical",
                    inlineCollapsed: M,
                    disabled: O,
                    disabledOverflow: X,
                    subMenuOpenDelay: Y = .1,
                    subMenuCloseDelay: G = .1,
                    forceSubMenuRender: J,
                    defaultOpenKeys: Q,
                    openKeys: ee,
                    activeKey: et,
                    defaultActiveFirst: en,
                    selectable: er = !0,
                    multiple: eo = !1,
                    defaultSelectedKeys: ei,
                    selectedKeys: eu,
                    onSelect: es,
                    onDeselect: ea,
                    inlineIndent: ec = 24,
                    motion: ef,
                    defaultMotions: ed,
                    triggerSubMenuAction: ep = "hover",
                    builtinPlacements: em,
                    itemIcon: ev,
                    expandIcon: eb,
                    overflowedIndicator: eh = "...",
                    overflowedIndicatorPopupClassName: eg,
                    getPopupContainer: eE,
                    onClick: eC,
                    onOpenChange: ew,
                    onKeyDown: eR,
                    openAnimation: ex,
                    openTransitionName: eP,
                    _internalRenderMenuItem: eM,
                    _internalRenderSubMenuItem: eS,
                    _internalComponents: eI,
                    popupRender: eO,
                    ...eT
                } = e,
                [ej, eL] = r.useMemo(() => [e$(R, w, eN, eI, a), e$(R, w, eN, {}, a)], [R, w, eI]),
                [eA, ez] = r.useState(!1),
                eK = r.useRef(),
                eD = (0, h.default)(N ? `rc-menu-uuid-${N}` : "rc-menu-uuid"),
                eV = "rtl" === x,
                [eB, e_] = (0, b.default)(Q, ee),
                eF = eB || eN,
                eU = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

                    function n() {
                        e_(e), ew ? .(e)
                    }
                    t ? (0, E.flushSync)(n) : n()
                },
                [eW, eH] = r.useState(eF),
                eq = r.useRef(!1),
                [eX, eY] = r.useMemo(() => ("inline" === P || "vertical" === P) && M ? ["vertical", M] : [P, !1], [P, M]),
                eG = "inline" === eX,
                [eJ, eQ] = r.useState(eX),
                [eZ, e0] = r.useState(eY);
            r.useEffect(() => {
                eQ(eX), e0(eY), eq.current && (eG ? e_(eW) : eU(eN))
            }, [eX, eY]);
            let [e1, e6] = r.useState(0), e2 = e1 >= ej.length - 1 || "horizontal" !== eJ || X;
            r.useEffect(() => {
                eG && eH(eF)
            }, [eF]), r.useEffect(() => (eq.current = !0, () => {
                eq.current = !1
            }), []);
            let {
                registerPath: e3,
                unregisterPath: e4,
                refreshOverflowKeys: e5,
                isSubPathKey: e7,
                getKeyPath: e8,
                getKeys: e9,
                getSubPathKeys: te
            } = function() {
                let [, e] = r.useState({}), t = (0, r.useRef)(new Map), n = (0, r.useRef)(new Map), [l, o] = r.useState([]), i = (0, r.useRef)(0), u = (0, r.useRef)(!1), s = (0, r.useCallback)((l, r) => {
                    let o = r.join(W);
                    n.current.set(o, l), t.current.set(l, o), i.current += 1;
                    let s = i.current;
                    Promise.resolve().then(() => {
                        s === i.current && (u.current || e({}))
                    })
                }, []), a = (0, r.useCallback)((e, l) => {
                    let r = l.join(W);
                    n.current.delete(r), t.current.delete(e)
                }, []), c = (0, r.useCallback)(e => {
                    o(e)
                }, []), f = (0, r.useCallback)((e, n) => {
                    let r = (t.current.get(e) || "").split(W);
                    return n && l.includes(r[0]) && r.unshift(H), r
                }, [l]), d = (0, r.useCallback)((e, t) => e.filter(e => void 0 !== e).some(e => f(e, !0).includes(t)), [f]), p = (0, r.useCallback)(e => {
                    let l = `${t.current.get(e)}${W}`,
                        r = new Set;
                    return [...n.current.keys()].forEach(e => {
                        e.startsWith(l) && r.add(n.current.get(e))
                    }), r
                }, []);
                return r.useEffect(() => () => {
                    u.current = !0
                }, []), {
                    registerPath: s,
                    unregisterPath: a,
                    refreshOverflowKeys: c,
                    isSubPathKey: d,
                    getKeyPath: f,
                    getKeys: () => {
                        let e = [...t.current.keys()];
                        return l.length && e.push(H), e
                    },
                    getSubPathKeys: p
                }
            }(), tt = r.useMemo(() => ({
                registerPath: e3,
                unregisterPath: e4
            }), [e3, e4]), tn = r.useMemo(() => ({
                isSubPathKey: e7
            }), [e7]);
            r.useEffect(() => {
                e5(e2 ? eN : ej.slice(e1 + 1).map(e => e.key))
            }, [e1, e2]);
            let [tl, tr] = (0, b.default)(et || en && ej[0] ? .key, et), to = q(e => {
                tr(e)
            }), ti = q(() => {
                tr(void 0)
            });
            (0, r.useImperativeHandle)(t, () => ({
                list: eK.current,
                focus: e => {
                    let t, n = e9(),
                        {
                            elements: l,
                            key2element: r,
                            element2key: o
                        } = U(n, eD),
                        i = _(eK.current, l);
                    t = tl && n.includes(tl) ? tl : i[0] ? o.get(i[0]) : ej.find(e => !e.props.disabled) ? .key;
                    let u = r.get(t);
                    t && u && u ? .focus ? .(e)
                },
                findItem: e => {
                    let {
                        key: t
                    } = e, {
                        key2element: n
                    } = U(e9(), eD);
                    return n.get(t) || null
                }
            }));
            let [tu, ts] = (0, b.default)(ei || [], eu), ta = r.useMemo(() => Array.isArray(tu) ? tu : null == tu ? eN : [tu], [tu]), tc = q(e => {
                eC ? .(Z(e)), (e => {
                    if (er) {
                        let t, {
                                key: n
                            } = e,
                            l = ta.includes(n);
                        ts(t = eo ? l ? ta.filter(e => e !== n) : [...ta, n] : [n]);
                        let r = { ...e,
                            selectedKeys: t
                        };
                        l ? ea ? .(r) : es ? .(r)
                    }!eo && eF.length && "inline" !== eJ && eU(eN)
                })(e)
            }), tf = q((e, t) => {
                let n = eF.filter(t => t !== e);
                if (t) n.push(e);
                else if ("inline" !== eJ) {
                    let t = te(e);
                    n = n.filter(e => !t.has(e))
                }(0, g.default)(eF, n, !0) || eU(n, !0)
            }), td = (n = (e, t) => {
                let n = t ? ? !eF.includes(e);
                tf(e, n)
            }, o = r.useRef(), (u = r.useRef()).current = tl, s = () => {
                i.default.cancel(o.current)
            }, r.useEffect(() => () => {
                s()
            }, []), e => {
                let {
                    which: t
                } = e;
                if ([...B, z, K, D, V].includes(t)) {
                    let l = e9(),
                        r = U(l, eD),
                        {
                            elements: a,
                            key2element: c,
                            element2key: f
                        } = r,
                        d = function(e, t) {
                            let n = e || document.activeElement;
                            for (; n;) {
                                if (t.has(n)) return n;
                                n = n.parentElement
                            }
                            return null
                        }(c.get(tl), a),
                        p = f.get(d),
                        m = function(e, t, n, l) {
                            let r = "prev",
                                o = "next",
                                i = "children",
                                u = "parent";
                            if ("inline" === e && l === z) return {
                                inlineTrigger: !0
                            };
                            let s = {
                                    [L]: r,
                                    [A]: o
                                },
                                a = {
                                    [L]: r,
                                    [A]: o,
                                    [z]: i,
                                    [K]: u,
                                    [T]: n ? i : u,
                                    [j]: n ? u : i
                                };
                            switch (({
                                inline: s,
                                horizontal: {
                                    [T]: n ? o : r,
                                    [j]: n ? r : o,
                                    [A]: i,
                                    [z]: i
                                },
                                vertical: a,
                                inlineSub: s,
                                horizontalSub: a,
                                verticalSub: a
                            })[`${e}${t?"":"Sub"}`] ? .[l]) {
                                case r:
                                    return {
                                        offset: -1,
                                        sibling: !0
                                    };
                                case o:
                                    return {
                                        offset: 1,
                                        sibling: !0
                                    };
                                case u:
                                    return {
                                        offset: -1,
                                        sibling: !1
                                    };
                                case i:
                                    return {
                                        offset: 1,
                                        sibling: !1
                                    };
                                default:
                                    return null
                            }
                        }(eJ, 1 === e8(p, !0).length, eV, t);
                    if (!m && t !== D && t !== V) return;
                    (B.includes(t) || [D, V].includes(t)) && e.preventDefault();
                    let v = e => {
                        if (e) {
                            let t = e,
                                n = e.querySelector("a");
                            n ? .getAttribute("href") && (t = n);
                            let l = f.get(e);
                            tr(l), s(), o.current = (0, i.default)(() => {
                                u.current === l && t.focus()
                            })
                        }
                    };
                    if ([D, V].includes(t) || m.sibling || !d) {
                        let e, n = _(e = d && "inline" !== eJ ? function(e) {
                            let t = e;
                            for (; t;) {
                                if (t.getAttribute("data-menu-list")) return t;
                                t = t.parentElement
                            }
                            return null
                        }(d) : eK.current, a);
                        v(t === D ? n[0] : t === V ? n[n.length - 1] : F(e, a, d, m.offset))
                    } else if (m.inlineTrigger) n(p);
                    else if (m.offset > 0) n(p, !0), s(), o.current = (0, i.default)(() => {
                        r = U(l, eD);
                        let e = d.getAttribute("aria-controls");
                        v(F(document.getElementById(e), r.elements))
                    }, 5);
                    else if (m.offset < 0) {
                        let e = e8(p, !0),
                            t = e[e.length - 2],
                            l = c.get(t);
                        n(t, !1), v(l)
                    }
                }
                eR ? .(e)
            });
            r.useEffect(() => {
                ez(!0)
            }, []);
            let tp = r.useMemo(() => ({
                    _internalRenderMenuItem: eM,
                    _internalRenderSubMenuItem: eS
                }), [eM, eS]),
                tm = "horizontal" !== eJ || X ? ej : ej.map((e, t) => r.createElement($, {
                    key: e.key,
                    overflowDisabled: t > e1,
                    classNames: m,
                    styles: p
                }, e)),
                tv = r.createElement(v.default, ek({
                    id: N,
                    ref: eK,
                    prefixCls: `${a}-overflow`,
                    component: "ul",
                    itemComponent: el,
                    className: (0, l.clsx)(a, `${a}-root`, `${a}-${eJ}`, d, {
                        [`${a}-inline-collapsed`]: eZ,
                        [`${a}-rtl`]: eV
                    }, c),
                    dir: x,
                    style: f,
                    role: "menu",
                    tabIndex: y,
                    data: tm,
                    renderRawItem: e => e,
                    renderRawRest: e => {
                        let t = e.length,
                            n = t ? ej.slice(-t) : null;
                        return r.createElement(ey, {
                            eventKey: H,
                            title: eh,
                            disabled: e2,
                            internalPopupClose: 0 === t,
                            popupClassName: eg
                        }, n)
                    },
                    maxCount: "horizontal" !== eJ || X ? v.default.INVALIDATE : v.default.RESPONSIVE,
                    ssr: "full",
                    "data-menu-list": !0,
                    onVisibleChange: e => {
                        e6(e)
                    },
                    onKeyDown: td
                }, eT));
            return r.createElement(I.Provider, {
                value: tp
            }, r.createElement(C.Provider, {
                value: eD
            }, r.createElement($, {
                prefixCls: a,
                rootClassName: c,
                classNames: m,
                styles: p,
                mode: eJ,
                openKeys: eF,
                rtl: eV,
                disabled: O,
                motion: eA ? ef : null,
                defaultMotions: eA ? ed : null,
                activeKey: tl,
                onActive: to,
                onInactive: ti,
                selectedKeys: ta,
                inlineIndent: ec,
                subMenuOpenDelay: Y,
                subMenuCloseDelay: G,
                forceSubMenuRender: J,
                builtinPlacements: em,
                triggerSubMenuAction: ep,
                getPopupContainer: eE,
                itemIcon: ev,
                expandIcon: eb,
                onItemClick: tc,
                onOpenChange: tf,
                popupRender: eO
            }, r.createElement(S.Provider, {
                value: tn
            }, tv), r.createElement("div", {
                style: {
                    display: "none"
                },
                "aria-hidden": !0
            }, r.createElement(k.Provider, {
                value: tt
            }, eL)))))
        });
    eP.Item = el, eP.SubMenu = ey, eP.ItemGroup = eR, eP.Divider = eE, e.s(["default", 0, eP], 213381)
}, 867384, e => {
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
                    d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
                }
            }]
        },
        name: "ellipsis",
        theme: "outlined"
    };
    var l = e.i(9583);

    function r() {
        return (r = Object.assign.bind()).apply(this, arguments)
    }
    let o = t.forwardRef((e, o) => t.createElement(l.default, r({}, e, {
        ref: o,
        icon: n
    })));
    e.s(["default", 0, o], 867384)
}]);