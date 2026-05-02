(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 21539, 704914, 251224, 290224, 652199, 60699, 618316, e => {
    "use strict";
    let t;
    e.i(247167);
    var o = e.i(271645),
        n = e.i(801312),
        i = e.i(286612),
        r = e.i(328235);
    e.i(63335);
    var l = e.i(751095),
        a = e.i(30294),
        d = e.i(580251),
        s = e.i(207670),
        u = e.i(711517),
        c = e.i(122767),
        m = e.i(805984),
        p = e.i(805484),
        g = e.i(763731),
        $ = e.i(747656),
        b = e.i(340010),
        f = e.i(242064),
        h = e.i(321883),
        v = e.i(213381),
        x = e.i(33578),
        x = x;
    let I = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "0 0 1024 1024",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"
                }
            }]
        },
        name: "bars",
        theme: "outlined"
    };
    var C = e.i(9583);

    function S() {
        return (S = Object.assign.bind()).apply(this, arguments)
    }
    let w = o.forwardRef((e, t) => o.createElement(C.default, S({}, e, {
            ref: t,
            icon: I
        }))),
        B = o.createContext({
            siderHook: {
                addSider: () => null,
                removeSider: () => null
            }
        });
    e.s(["LayoutContext", 0, B], 704914), e.i(296059);
    var y = e.i(915654),
        k = e.i(246422);
    let E = e => {
            let {
                colorBgLayout: t,
                controlHeight: o,
                controlHeightLG: n,
                colorText: i,
                controlHeightSM: r,
                marginXXS: l,
                colorTextLightSolid: a,
                colorBgContainer: d
            } = e, s = 1.25 * n;
            return {
                colorBgHeader: "#001529",
                colorBgBody: t,
                colorBgTrigger: "#002140",
                bodyBg: t,
                headerBg: "#001529",
                headerHeight: 2 * o,
                headerPadding: `0 ${s}px`,
                headerColor: i,
                footerPadding: `${r}px ${s}px`,
                footerBg: t,
                siderBg: "#001529",
                triggerHeight: n + 2 * l,
                triggerBg: "#002140",
                triggerColor: a,
                zeroTriggerWidth: n,
                zeroTriggerHeight: n,
                lightSiderBg: d,
                lightTriggerBg: d,
                lightTriggerColor: i
            }
        },
        H = [
            ["colorBgBody", "bodyBg"],
            ["colorBgHeader", "headerBg"],
            ["colorBgTrigger", "triggerBg"]
        ],
        T = (0, k.genStyleHooks)("Layout", e => {
            let {
                antCls: t,
                componentCls: o,
                colorText: n,
                footerBg: i,
                headerHeight: r,
                headerPadding: l,
                headerColor: a,
                footerPadding: d,
                fontSize: s,
                bodyBg: u,
                headerBg: c
            } = e;
            return {
                [o]: {
                    display: "flex",
                    flex: "auto",
                    flexDirection: "column",
                    minHeight: 0,
                    background: u,
                    "&, *": {
                        boxSizing: "border-box"
                    },
                    [`&${o}-has-sider`]: {
                        flexDirection: "row",
                        [`> ${o}, > ${o}-content`]: {
                            width: 0
                        }
                    },
                    [`${o}-header, &${o}-footer`]: {
                        flex: "0 0 auto"
                    },
                    "&-rtl": {
                        direction: "rtl"
                    }
                },
                [`${o}-header`]: {
                    height: r,
                    padding: l,
                    color: a,
                    lineHeight: (0, y.unit)(r),
                    background: c,
                    [`${t}-menu`]: {
                        lineHeight: "inherit"
                    }
                },
                [`${o}-footer`]: {
                    padding: d,
                    color: n,
                    fontSize: s,
                    background: i
                },
                [`${o}-content`]: {
                    flex: "auto",
                    color: n,
                    minHeight: 0
                }
            }
        }, E, {
            deprecatedTokens: H
        });
    e.s(["DEPRECATED_TOKENS", 0, H, "default", 0, T, "prepareComponentToken", 0, E], 251224);
    let z = (0, k.genStyleHooks)(["Layout", "Sider"], e => {
            let {
                componentCls: t,
                siderBg: o,
                motionDurationMid: n,
                motionDurationSlow: i,
                antCls: r,
                triggerHeight: l,
                triggerColor: a,
                triggerBg: d,
                headerHeight: s,
                zeroTriggerWidth: u,
                zeroTriggerHeight: c,
                borderRadiusLG: m,
                lightSiderBg: p,
                lightTriggerColor: g,
                lightTriggerBg: $,
                bodyBg: b
            } = e;
            return {
                [t]: {
                    position: "relative",
                    minWidth: 0,
                    background: o,
                    transition: `all ${n}, background 0s`,
                    "&-has-trigger": {
                        paddingBottom: l
                    },
                    "&-right": {
                        order: 1
                    },
                    [`${t}-children`]: {
                        height: "100%",
                        marginTop: -.1,
                        paddingTop: .1,
                        [`${r}-menu${r}-menu-inline-collapsed`]: {
                            width: "auto"
                        }
                    },
                    [`&-zero-width ${t}-children`]: {
                        overflow: "hidden"
                    },
                    [`${t}-trigger`]: {
                        position: "fixed",
                        bottom: 0,
                        zIndex: 1,
                        height: l,
                        color: a,
                        lineHeight: (0, y.unit)(l),
                        textAlign: "center",
                        background: d,
                        cursor: "pointer",
                        transition: `all ${n}`
                    },
                    [`${t}-zero-width-trigger`]: {
                        position: "absolute",
                        top: s,
                        insetInlineEnd: e.calc(u).mul(-1).equal(),
                        zIndex: 1,
                        width: u,
                        height: c,
                        color: a,
                        fontSize: e.fontSizeXL,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: o,
                        borderRadius: `0 ${(0,y.unit)(m)} ${(0,y.unit)(m)} 0`,
                        cursor: "pointer",
                        transition: `background-color ${i} ease`,
                        "&::after": {
                            position: "absolute",
                            inset: 0,
                            background: "transparent",
                            transition: `all ${i}`,
                            content: '""'
                        },
                        "&:hover::after": {
                            background: "rgba(255, 255, 255, 0.2)"
                        },
                        "&-right": {
                            insetInlineStart: e.calc(u).mul(-1).equal(),
                            borderRadius: `${(0,y.unit)(m)} 0 0 ${(0,y.unit)(m)}`
                        }
                    },
                    "&-light": {
                        background: p,
                        [`${t}-trigger`]: {
                            color: g,
                            background: $
                        },
                        [`${t}-zero-width-trigger`]: {
                            color: g,
                            background: $,
                            border: `1px solid ${b}`,
                            borderInlineStart: 0
                        }
                    }
                }
            }
        }, E, {
            deprecatedTokens: H
        }),
        M = {
            xs: "479.98px",
            sm: "575.98px",
            md: "767.98px",
            lg: "991.98px",
            xl: "1199.98px",
            xxl: "1599.98px"
        },
        N = o.createContext({}),
        R = (t = 0, function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return t += 1, `${e}${t}`
        }),
        A = o.forwardRef((e, t) => {
            let {
                prefixCls: r,
                className: a,
                trigger: d,
                children: u,
                defaultCollapsed: c = !1,
                theme: m = "dark",
                style: p = {},
                collapsible: g = !1,
                reverseArrow: $ = !1,
                width: b = 200,
                collapsedWidth: h = 80,
                zeroWidthTriggerStyle: v,
                breakpoint: x,
                onCollapse: I,
                onBreakpoint: C,
                ...S
            } = e, {
                siderHook: y
            } = (0, o.useContext)(B), [k, E] = (0, o.useState)("collapsed" in e ? e.collapsed : c), [H, T] = (0, o.useState)(!1);
            (0, o.useEffect)(() => {
                "collapsed" in e && E(e.collapsed)
            }, [e.collapsed]);
            let A = (t, o) => {
                    "collapsed" in e || E(t), I ? .(t, o)
                },
                {
                    getPrefixCls: D,
                    direction: P
                } = (0, o.useContext)(f.ConfigContext),
                L = D("layout-sider", r),
                [W, O] = z(L),
                q = (0, o.useRef)(null);
            q.current = e => {
                T(e.matches), C ? .(e.matches), k !== e.matches && A(e.matches, "responsive")
            }, (0, o.useEffect)(() => {
                let e;

                function t(e) {
                    return q.current ? .(e)
                }
                return void 0 !== window ? .matchMedia && x && x in M && (e = window.matchMedia(`screen and (max-width: ${M[x]})`), "function" == typeof e ? .addEventListener && e.addEventListener("change", t), t(e)), () => {
                    "function" == typeof e ? .removeEventListener && e.removeEventListener("change", t)
                }
            }, [x]), (0, o.useEffect)(() => {
                let e = R("ant-sider-");
                return y.addSider(e), () => y.removeSider(e)
            }, []);
            let X = () => {
                    A(!k, "clickTrigger")
                },
                F = (0, l.omit)(S, ["collapsed"]),
                Y = k ? h : b,
                _ = !Number.isNaN(Number.parseFloat(Y)) && Number.isFinite(Number(Y)) ? `${Y}px` : String(Y),
                G = 0 === Number.parseFloat(String(h || 0)) ? o.createElement("span", {
                    onClick: X,
                    className: (0, s.clsx)(`${L}-zero-width-trigger`, `${L}-zero-width-trigger-${$?"right":"left"}`),
                    style: v
                }, d || o.createElement(w, null)) : null,
                U = "rtl" === P == !$,
                j = {
                    expanded: U ? o.createElement(i.default, null) : o.createElement(n.default, null),
                    collapsed: U ? o.createElement(n.default, null) : o.createElement(i.default, null)
                }[k ? "collapsed" : "expanded"],
                V = null !== d ? G || o.createElement("div", {
                    className: `${L}-trigger`,
                    onClick: X,
                    style: {
                        width: _
                    }
                }, d || j) : null,
                Z = { ...p,
                    flex: `0 0 ${_}`,
                    maxWidth: _,
                    minWidth: _,
                    width: _
                },
                K = (0, s.clsx)(L, `${L}-${m}`, {
                    [`${L}-collapsed`]: !!k,
                    [`${L}-has-trigger`]: g && null !== d && !G,
                    [`${L}-below`]: !!H,
                    [`${L}-zero-width`]: 0 === Number.parseFloat(_)
                }, a, W, O),
                J = o.useMemo(() => ({
                    siderCollapsed: k
                }), [k]);
            return o.createElement(N.Provider, {
                value: J
            }, o.createElement("aside", {
                className: K,
                ...F,
                style: Z,
                ref: t
            }, o.createElement("div", {
                className: `${L}-children`
            }, u), g || H && G ? V : null))
        });
    e.s(["SiderContext", 0, N, "default", 0, A], 290224);
    var D = e.i(867384),
        P = e.i(613541);
    let L = (0, o.createContext)({
        prefixCls: "",
        firstLevel: !0,
        inlineCollapsed: !1,
        styles: null,
        classNames: null
    });
    var W = e.i(950211),
        W = W;
    let O = e => {
        let {
            prefixCls: t,
            className: n,
            dashed: i,
            ...r
        } = e, {
            getPrefixCls: l
        } = o.useContext(f.ConfigContext), a = l("menu", t), d = (0, s.clsx)({
            [`${a}-item-divider-dashed`]: !!i
        }, n);
        return o.createElement(W.default, {
            className: d,
            ...r
        })
    };
    var q = e.i(965044),
        q = q,
        X = e.i(943081),
        F = e.i(491816);
    let Y = e => {
        let t, n, {
                className: i,
                children: r,
                icon: a,
                title: d,
                danger: u,
                extra: c
            } = e,
            {
                prefixCls: m,
                firstLevel: p,
                direction: $,
                disableMenuItemTitleTooltip: b,
                inlineCollapsed: f,
                styles: h,
                classNames: v
            } = o.useContext(L),
            {
                siderCollapsed: x
            } = o.useContext(N),
            I = d;
        void 0 === d ? I = p ? r : "" : !1 === d && (I = "");
        let C = {
            title: I
        };
        x || f || (C.title = null, C.open = !1);
        let S = (0, X.toArray)(r).length,
            w = o.createElement(q.default, { ...(0, l.omit)(e, ["title", "icon", "danger"]),
                className: (0, s.clsx)(p ? v ? .item : v ? .subMenu ? .item, {
                    [`${m}-item-danger`]: u,
                    [`${m}-item-only-child`]: (a ? S + 1 : S) === 1
                }, i),
                style: { ...p ? h ? .item : h ? .subMenu ? .item,
                    ...e.style
                },
                title: "string" == typeof d ? d : void 0
            }, (0, g.cloneElement)(a, e => ({
                className: (0, s.clsx)(`${m}-item-icon`, p ? v ? .itemIcon : v ? .subMenu ? .itemIcon, e.className),
                style: { ...p ? h ? .itemIcon : h ? .subMenu ? .itemIcon,
                    ...e.style
                }
            })), (t = r ? .[0], n = o.createElement("span", {
                className: (0, s.clsx)(`${m}-title-content`, p ? v ? .itemContent : v ? .subMenu ? .itemContent, {
                    [`${m}-title-content-with-extra`]: !!c || 0 === c
                }),
                style: p ? h ? .itemContent : h ? .subMenu ? .itemContent
            }, r), (!a || o.isValidElement(r) && "span" === r.type) && r && f && p && "string" == typeof t ? o.createElement("div", {
                className: `${m}-inline-collapsed-noicon`
            }, t.charAt(0)) : n));
        return b || (w = o.createElement(F.default, { ...C,
            placement: "rtl" === $ ? "left" : "right",
            classNames: {
                root: `${m}-inline-collapsed-tooltip`
            }
        }, w)), w
    };
    var _ = e.i(232839),
        G = e.i(617206);
    let U = o.createContext(null),
        j = o.forwardRef((e, t) => {
            let {
                children: n,
                ...i
            } = e, r = o.useContext(U), l = o.useMemo(() => ({ ...r,
                ...i
            }), [r, i.prefixCls, i.mode, i.selectable, i.rootClassName]), a = (0, _.supportNodeRef)(n), d = (0, _.useComposeRef)(t, a ? (0, _.getNodeRef)(n) : null);
            return o.createElement(U.Provider, {
                value: l
            }, o.createElement(G.default, {
                space: !0
            }, a ? o.cloneElement(n, {
                ref: d
            }) : n))
        });
    e.s(["OverrideProvider", 0, j, "default", 0, U], 652199), e.i(262370);
    var V = e.i(135551),
        Z = e.i(183293),
        K = e.i(447580),
        J = e.i(664142),
        Q = e.i(717356),
        ee = e.i(838378);
    let et = e => (0, Z.genFocusOutline)(e),
        eo = (e, t) => {
            let {
                componentCls: o,
                itemColor: n,
                itemSelectedColor: i,
                subMenuItemSelectedColor: r,
                groupTitleColor: l,
                itemBg: a,
                subMenuItemBg: d,
                itemSelectedBg: s,
                activeBarHeight: u,
                activeBarWidth: c,
                activeBarBorderWidth: m,
                motionDurationSlow: p,
                motionEaseInOut: g,
                motionEaseOut: $,
                itemPaddingInline: b,
                motionDurationMid: f,
                itemHoverColor: h,
                lineType: v,
                colorSplit: x,
                itemDisabledColor: I,
                dangerItemColor: C,
                dangerItemHoverColor: S,
                dangerItemSelectedColor: w,
                dangerItemActiveBg: B,
                dangerItemSelectedBg: k,
                popupBg: E,
                itemHoverBg: H,
                itemActiveBg: T,
                menuSubMenuBg: z,
                horizontalItemSelectedColor: M,
                horizontalItemSelectedBg: N,
                horizontalItemBorderRadius: R,
                horizontalItemHoverBg: A
            } = e;
            return {
                [`${o}-${t}, ${o}-${t} > ${o}`]: {
                    color: n,
                    background: a,
                    [`&${o}-root:focus-visible`]: { ...et(e)
                    },
                    [`${o}-item`]: {
                        "&-group-title, &-extra": {
                            color: l
                        }
                    },
                    [`${o}-submenu-selected > ${o}-submenu-title`]: {
                        color: r
                    },
                    [`${o}-item, ${o}-submenu-title`]: {
                        color: n,
                        [`&:not(${o}-item-disabled):focus-visible`]: { ...et(e)
                        }
                    },
                    [`${o}-item-disabled, ${o}-submenu-disabled`]: {
                        color: `${I} !important`
                    },
                    [`${o}-item:not(${o}-item-selected):not(${o}-submenu-selected)`]: {
                        [`&:hover, > ${o}-submenu-title:hover`]: {
                            color: h
                        }
                    },
                    [`&:not(${o}-horizontal)`]: {
                        [`${o}-item:not(${o}-item-selected)`]: {
                            "&:hover": {
                                backgroundColor: H
                            },
                            "&:active": {
                                backgroundColor: T
                            }
                        },
                        [`${o}-submenu-title`]: {
                            "&:hover": {
                                backgroundColor: H
                            },
                            "&:active": {
                                backgroundColor: T
                            }
                        }
                    },
                    [`${o}-item-danger`]: {
                        color: C,
                        [`&${o}-item:hover`]: {
                            [`&:not(${o}-item-selected):not(${o}-submenu-selected)`]: {
                                color: S
                            }
                        },
                        [`&${o}-item:active`]: {
                            background: B
                        }
                    },
                    [`${o}-item a`]: {
                        "&, &:hover": {
                            color: "inherit"
                        }
                    },
                    [`${o}-item-selected`]: {
                        color: i,
                        [`&${o}-item-danger`]: {
                            color: w
                        },
                        "a, a:hover": {
                            color: "inherit"
                        }
                    },
                    [`& ${o}-item-selected`]: {
                        backgroundColor: s,
                        [`&${o}-item-danger`]: {
                            backgroundColor: k
                        }
                    },
                    [`&${o}-submenu > ${o}`]: {
                        backgroundColor: z
                    },
                    [`&${o}-popup > ${o}`]: {
                        backgroundColor: E
                    },
                    [`&${o}-submenu-popup > ${o}`]: {
                        backgroundColor: E
                    },
                    [`&${o}-horizontal`]: { ..."dark" === t ? {
                            borderBottom: 0
                        } : {},
                        [`> ${o}-item, > ${o}-submenu`]: {
                            top: m,
                            marginTop: e.calc(m).mul(-1).equal(),
                            marginBottom: 0,
                            borderRadius: R,
                            "&::after": {
                                position: "absolute",
                                insetInline: b,
                                bottom: 0,
                                borderBottom: `${(0,y.unit)(u)} solid transparent`,
                                transition: `border-color ${p} ${g}`,
                                content: '""'
                            },
                            "&:hover, &-active, &-open": {
                                background: A,
                                "&::after": {
                                    borderBottomWidth: u,
                                    borderBottomColor: M
                                }
                            },
                            "&-selected": {
                                color: M,
                                backgroundColor: N,
                                "&:hover": {
                                    backgroundColor: N
                                },
                                "&::after": {
                                    borderBottomWidth: u,
                                    borderBottomColor: M
                                }
                            }
                        }
                    },
                    [`&${o}-root`]: {
                        [`&${o}-inline, &${o}-vertical`]: {
                            borderInlineEnd: `${(0,y.unit)(m)} ${v} ${x}`
                        }
                    },
                    [`&${o}-inline`]: {
                        [`${o}-sub${o}-inline`]: {
                            background: d
                        },
                        [`${o}-item`]: {
                            position: "relative",
                            "&::after": {
                                position: "absolute",
                                insetBlock: 0,
                                insetInlineEnd: 0,
                                borderInlineEnd: `${(0,y.unit)(c)} solid ${i}`,
                                transform: "scaleY(0.0001)",
                                opacity: 0,
                                transition: `transform ${f} ${$},opacity ${f} ${$}`,
                                content: '""'
                            },
                            [`&${o}-item-danger`]: {
                                "&::after": {
                                    borderInlineEndColor: w
                                }
                            }
                        },
                        [`${o}-selected, ${o}-item-selected`]: {
                            "&::after": {
                                transform: "scaleY(1)",
                                opacity: 1,
                                transition: `transform ${f} ${g},opacity ${f} ${g}`
                            }
                        }
                    }
                }
            }
        },
        en = e => {
            let {
                componentCls: t,
                itemHeight: o,
                itemMarginInline: n,
                padding: i,
                menuArrowSize: r,
                marginXS: l,
                itemMarginBlock: a,
                itemWidth: d,
                itemPaddingInline: s
            } = e, u = e.calc(r).add(i).add(l).equal();
            return {
                [`${t}-item`]: {
                    position: "relative",
                    overflow: "hidden"
                },
                [`${t}-item, ${t}-submenu-title`]: {
                    height: o,
                    lineHeight: (0, y.unit)(o),
                    paddingInline: s,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginInline: n,
                    marginBlock: a,
                    width: d
                },
                [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
                    height: o,
                    lineHeight: (0, y.unit)(o)
                },
                [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
                    paddingInlineEnd: u
                }
            }
        },
        ei = e => {
            let {
                componentCls: t,
                motionDurationSlow: o,
                motionDurationMid: n,
                motionEaseInOut: i,
                motionEaseOut: r,
                iconCls: l,
                iconSize: a,
                iconMarginInlineEnd: d
            } = e;
            return {
                [`${t}-item, ${t}-submenu-title`]: {
                    position: "relative",
                    display: "block",
                    margin: 0,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    transition: `border-color ${o},background-color ${o},padding calc(${o} + 0.1s) ${i}`,
                    [`${t}-item-icon, ${l}`]: {
                        minWidth: a,
                        fontSize: a,
                        transition: `font-size ${n} ${r},margin ${o} ${i},color ${o}`,
                        "+ span": {
                            marginInlineStart: d,
                            opacity: 1,
                            transition: `opacity ${o} ${i},margin ${o},color ${o}`
                        }
                    },
                    [`${t}-item-icon`]: { ...(0, Z.resetIcon)()
                    },
                    [`&${t}-item-only-child`]: {
                        [`> ${l}, > ${t}-item-icon`]: {
                            marginInlineEnd: 0
                        }
                    }
                },
                [`${t}-item-disabled, ${t}-submenu-disabled`]: {
                    background: "none !important",
                    cursor: "not-allowed",
                    "&::after": {
                        borderColor: "transparent !important"
                    },
                    a: {
                        color: "inherit !important",
                        cursor: "not-allowed",
                        pointerEvents: "none"
                    },
                    [`> ${t}-submenu-title`]: {
                        color: "inherit !important",
                        cursor: "not-allowed"
                    }
                }
            }
        },
        er = e => {
            let {
                componentCls: t,
                motionDurationSlow: o,
                motionEaseInOut: n,
                borderRadius: i,
                menuArrowSize: r,
                menuArrowOffset: l
            } = e;
            return {
                [`${t}-submenu`]: {
                    "&-expand-icon, &-arrow": {
                        position: "absolute",
                        top: "50%",
                        insetInlineEnd: e.margin,
                        width: r,
                        color: "currentcolor",
                        transform: "translateY(-50%)",
                        transition: `transform ${o} ${n}, opacity ${o}`
                    },
                    "&-arrow": {
                        "&::before, &::after": {
                            position: "absolute",
                            width: e.calc(r).mul(.6).equal(),
                            height: e.calc(r).mul(.15).equal(),
                            backgroundColor: "currentcolor",
                            borderRadius: i,
                            transition: `background-color ${o} ${n},transform ${o} ${n},top ${o} ${n},color ${o} ${n}`,
                            content: '""'
                        },
                        "&::before": {
                            transform: `rotate(45deg) translateY(${(0,y.unit)(e.calc(l).mul(-1).equal())})`
                        },
                        "&::after": {
                            transform: `rotate(-45deg) translateY(${(0,y.unit)(l)})`
                        }
                    }
                }
            }
        },
        el = e => {
            let {
                colorPrimary: t,
                colorError: o,
                colorTextDisabled: n,
                colorErrorBg: i,
                colorText: r,
                colorTextDescription: l,
                colorBgContainer: a,
                colorFillAlter: d,
                colorFillContent: s,
                lineWidth: u,
                lineWidthBold: c,
                controlItemBgActive: m,
                colorBgTextHover: p,
                controlHeightLG: g,
                lineHeight: $,
                colorBgElevated: b,
                marginXXS: f,
                padding: h,
                fontSize: v,
                controlHeightSM: x,
                fontSizeLG: I,
                colorTextLightSolid: C,
                colorErrorHover: S
            } = e, w = e.activeBarWidth ? ? 0, B = e.activeBarBorderWidth ? ? u, y = e.itemMarginInline ? ? e.marginXXS, k = new V.FastColor(C).setA(.65).toRgbString();
            return {
                dropdownWidth: 160,
                zIndexPopup: e.zIndexPopupBase + 50,
                radiusItem: e.borderRadiusLG,
                itemBorderRadius: e.borderRadiusLG,
                radiusSubMenuItem: e.borderRadiusSM,
                subMenuItemBorderRadius: e.borderRadiusSM,
                colorItemText: r,
                itemColor: r,
                colorItemTextHover: r,
                itemHoverColor: r,
                colorItemTextHoverHorizontal: t,
                horizontalItemHoverColor: t,
                colorGroupTitle: l,
                groupTitleColor: l,
                colorItemTextSelected: t,
                itemSelectedColor: t,
                subMenuItemSelectedColor: t,
                colorItemTextSelectedHorizontal: t,
                horizontalItemSelectedColor: t,
                colorItemBg: a,
                itemBg: a,
                colorItemBgHover: p,
                itemHoverBg: p,
                colorItemBgActive: s,
                itemActiveBg: m,
                colorSubItemBg: d,
                subMenuItemBg: d,
                colorItemBgSelected: m,
                itemSelectedBg: m,
                colorItemBgSelectedHorizontal: "transparent",
                horizontalItemSelectedBg: "transparent",
                colorActiveBarWidth: 0,
                activeBarWidth: w,
                colorActiveBarHeight: c,
                activeBarHeight: c,
                colorActiveBarBorderSize: u,
                activeBarBorderWidth: B,
                colorItemTextDisabled: n,
                itemDisabledColor: n,
                colorDangerItemText: o,
                dangerItemColor: o,
                colorDangerItemTextHover: o,
                dangerItemHoverColor: o,
                colorDangerItemTextSelected: o,
                dangerItemSelectedColor: o,
                colorDangerItemBgActive: i,
                dangerItemActiveBg: i,
                colorDangerItemBgSelected: i,
                dangerItemSelectedBg: i,
                itemMarginInline: y,
                horizontalItemBorderRadius: 0,
                horizontalItemHoverBg: "transparent",
                itemHeight: g,
                groupTitleLineHeight: $,
                collapsedWidth: 2 * g,
                popupBg: b,
                itemMarginBlock: f,
                itemPaddingInline: h,
                horizontalLineHeight: `${1.15*g}px`,
                iconSize: v,
                iconMarginInlineEnd: x - v,
                collapsedIconSize: I,
                groupTitleFontSize: v,
                darkItemDisabledColor: new V.FastColor(C).setA(.25).toRgbString(),
                darkItemColor: k,
                darkDangerItemColor: o,
                darkItemBg: "#001529",
                darkPopupBg: "#001529",
                darkSubMenuItemBg: "#000c17",
                darkItemSelectedColor: C,
                darkItemSelectedBg: t,
                darkDangerItemSelectedBg: o,
                darkItemHoverBg: "transparent",
                darkGroupTitleColor: k,
                darkItemHoverColor: C,
                darkDangerItemHoverColor: S,
                darkDangerItemSelectedColor: C,
                darkDangerItemActiveBg: o,
                itemWidth: w ? `calc(100% + ${B}px)` : `calc(100% - ${2*y}px)`
            }
        },
        ea = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return (0, k.genStyleHooks)("Menu", e => {
                let {
                    colorBgElevated: t,
                    controlHeightLG: o,
                    fontSize: n,
                    darkItemColor: i,
                    darkDangerItemColor: r,
                    darkItemBg: l,
                    darkSubMenuItemBg: a,
                    darkItemSelectedColor: d,
                    darkItemSelectedBg: s,
                    darkDangerItemSelectedBg: u,
                    darkItemHoverBg: c,
                    darkGroupTitleColor: m,
                    darkItemHoverColor: p,
                    darkItemDisabledColor: g,
                    darkDangerItemHoverColor: $,
                    darkDangerItemSelectedColor: b,
                    darkDangerItemActiveBg: f,
                    popupBg: h,
                    darkPopupBg: v
                } = e, x = e.calc(n).div(7).mul(5).equal(), I = (0, ee.mergeToken)(e, {
                    menuArrowSize: x,
                    menuHorizontalHeight: e.calc(o).mul(1.15).equal(),
                    menuArrowOffset: e.calc(x).mul(.25).equal(),
                    menuSubMenuBg: t,
                    calc: e.calc,
                    popupBg: h
                }), C = (0, ee.mergeToken)(I, {
                    itemColor: i,
                    itemHoverColor: p,
                    groupTitleColor: m,
                    itemSelectedColor: d,
                    subMenuItemSelectedColor: d,
                    itemBg: l,
                    popupBg: v,
                    subMenuItemBg: a,
                    itemActiveBg: "transparent",
                    itemSelectedBg: s,
                    activeBarHeight: 0,
                    activeBarBorderWidth: 0,
                    itemHoverBg: c,
                    itemDisabledColor: g,
                    dangerItemColor: r,
                    dangerItemHoverColor: $,
                    dangerItemSelectedColor: b,
                    dangerItemActiveBg: f,
                    dangerItemSelectedBg: u,
                    menuSubMenuBg: a,
                    horizontalItemSelectedColor: d,
                    horizontalItemSelectedBg: s
                });
                return [(e => {
                    let {
                        antCls: t,
                        componentCls: o,
                        fontSize: n,
                        motionDurationSlow: i,
                        motionDurationMid: r,
                        motionEaseInOut: l,
                        paddingXS: a,
                        padding: d,
                        colorSplit: s,
                        lineWidth: u,
                        zIndexPopup: c,
                        borderRadiusLG: m,
                        subMenuItemBorderRadius: p,
                        menuArrowSize: g,
                        menuArrowOffset: $,
                        lineType: b,
                        groupTitleLineHeight: f,
                        groupTitleFontSize: h
                    } = e;
                    return [{
                        "": {
                            [o]: { ...(0, Z.clearFix)(),
                                "&-hidden": {
                                    display: "none"
                                }
                            }
                        },
                        [`${o}-submenu-hidden`]: {
                            display: "none"
                        }
                    }, {
                        [o]: { ...(0, Z.resetComponent)(e),
                            ...(0, Z.clearFix)(),
                            marginBottom: 0,
                            paddingInlineStart: 0,
                            fontSize: n,
                            lineHeight: 0,
                            listStyle: "none",
                            outline: "none",
                            transition: `width ${i} cubic-bezier(0.2, 0, 0, 1) 0s`,
                            "ul, ol": {
                                margin: 0,
                                padding: 0,
                                listStyle: "none"
                            },
                            "&-overflow": {
                                display: "flex",
                                [`${o}-item`]: {
                                    flex: "none"
                                }
                            },
                            [`${o}-item, ${o}-submenu, ${o}-submenu-title`]: {
                                borderRadius: e.itemBorderRadius
                            },
                            [`${o}-item-group-title`]: {
                                padding: `${(0,y.unit)(a)} ${(0,y.unit)(d)}`,
                                fontSize: h,
                                lineHeight: f,
                                transition: `all ${i}`
                            },
                            [`&-horizontal ${o}-submenu`]: {
                                transition: `border-color ${i} ${l},background-color ${i} ${l}`
                            },
                            [`${o}-submenu, ${o}-submenu-inline`]: {
                                transition: `border-color ${i} ${l},background-color ${i} ${l},padding ${r} ${l}`
                            },
                            [`${o}-submenu ${o}-sub`]: {
                                cursor: "initial",
                                transition: `background-color ${i} ${l},padding ${i} ${l}`
                            },
                            [`${o}-title-content`]: {
                                transition: `color ${i}`,
                                "&-with-extra": {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    width: "100%"
                                },
                                [`> ${t}-typography-ellipsis-single-line`]: {
                                    display: "inline",
                                    verticalAlign: "unset"
                                },
                                [`${o}-item-extra`]: {
                                    marginInlineStart: "auto",
                                    paddingInlineStart: e.padding
                                }
                            },
                            [`${o}-item a`]: {
                                "&::before": {
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor: "transparent",
                                    content: '""'
                                }
                            },
                            [`${o}-item-divider`]: {
                                overflow: "hidden",
                                lineHeight: 0,
                                borderColor: s,
                                borderStyle: b,
                                borderWidth: 0,
                                borderTopWidth: u,
                                marginBlock: u,
                                padding: 0,
                                "&-dashed": {
                                    borderStyle: "dashed"
                                }
                            },
                            ...ei(e),
                            [`${o}-item-group`]: {
                                [`${o}-item-group-list`]: {
                                    margin: 0,
                                    padding: 0,
                                    [`${o}-item, ${o}-submenu-title`]: {
                                        paddingInline: `${(0,y.unit)(e.calc(n).mul(2).equal())} ${(0,y.unit)(d)}`
                                    }
                                }
                            },
                            "&-submenu": {
                                "&-popup": {
                                    position: "absolute",
                                    zIndex: c,
                                    borderRadius: m,
                                    boxShadow: "none",
                                    transformOrigin: "0 0",
                                    [`&${o}-submenu`]: {
                                        background: "transparent"
                                    },
                                    "&::before": {
                                        position: "absolute",
                                        inset: 0,
                                        zIndex: -1,
                                        width: "100%",
                                        height: "100%",
                                        opacity: 0,
                                        content: '""'
                                    },
                                    [`> ${o}`]: {
                                        borderRadius: m,
                                        ...ei(e),
                                        ...er(e),
                                        [`${o}-item, ${o}-submenu > ${o}-submenu-title`]: {
                                            borderRadius: p
                                        },
                                        [`${o}-submenu-title::after`]: {
                                            transition: `transform ${i} ${l}`
                                        }
                                    }
                                },
                                [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: {
                                    transformOrigin: "100% 0"
                                },
                                [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: {
                                    transformOrigin: "100% 100%"
                                },
                                [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: {
                                    transformOrigin: "0 100%"
                                },
                                [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: {
                                    transformOrigin: "0 0"
                                },
                                [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: {
                                    paddingInlineEnd: e.paddingXS
                                },
                                [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: {
                                    paddingInlineStart: e.paddingXS
                                },
                                [`
          &-placement-topRight,
          &-placement-topLeft
          `]: {
                                    paddingBottom: e.paddingXS
                                },
                                [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: {
                                    paddingTop: e.paddingXS
                                }
                            },
                            ...er(e),
                            [`&-inline-collapsed ${o}-submenu-arrow,
        &-inline ${o}-submenu-arrow`]: {
                                "&::before": {
                                    transform: `rotate(-45deg) translateX(${(0,y.unit)($)})`
                                },
                                "&::after": {
                                    transform: `rotate(45deg) translateX(${(0,y.unit)(e.calc($).mul(-1).equal())})`
                                }
                            },
                            [`${o}-submenu-open${o}-submenu-inline > ${o}-submenu-title > ${o}-submenu-arrow`]: {
                                transform: `translateY(${(0,y.unit)(e.calc(g).mul(.2).mul(-1).equal())})`,
                                "&::after": {
                                    transform: `rotate(-45deg) translateX(${(0,y.unit)(e.calc($).mul(-1).equal())})`
                                },
                                "&::before": {
                                    transform: `rotate(45deg) translateX(${(0,y.unit)($)})`
                                }
                            }
                        }
                    }, {
                        [`${t}-layout-header`]: {
                            [o]: {
                                lineHeight: "inherit"
                            }
                        }
                    }]
                })(I), (e => {
                    let {
                        componentCls: t,
                        motionDurationSlow: o,
                        horizontalLineHeight: n,
                        colorSplit: i,
                        lineWidth: r,
                        lineType: l,
                        itemPaddingInline: a
                    } = e;
                    return {
                        [`${t}-horizontal`]: {
                            lineHeight: n,
                            border: 0,
                            borderBottom: `${(0,y.unit)(r)} ${l} ${i}`,
                            boxShadow: "none",
                            "&::after": {
                                display: "block",
                                clear: "both",
                                height: 0,
                                content: '"\\20"'
                            },
                            [`${t}-item, ${t}-submenu`]: {
                                position: "relative",
                                display: "inline-block",
                                verticalAlign: "bottom",
                                paddingInline: a
                            },
                            [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
                                backgroundColor: "transparent"
                            },
                            [`${t}-item, ${t}-submenu-title`]: {
                                transition: `border-color ${o},background-color ${o}`
                            },
                            [`${t}-submenu-arrow`]: {
                                display: "none"
                            }
                        }
                    }
                })(I), (e => {
                    let {
                        componentCls: t,
                        iconCls: o,
                        itemHeight: n,
                        colorTextLightSolid: i,
                        dropdownWidth: r,
                        controlHeightLG: l,
                        motionEaseOut: a,
                        paddingXL: d,
                        itemMarginInline: s,
                        fontSizeLG: u,
                        motionDurationFast: c,
                        motionDurationSlow: m,
                        paddingXS: p,
                        boxShadowSecondary: g,
                        collapsedWidth: $,
                        collapsedIconSize: b
                    } = e, f = {
                        height: n,
                        lineHeight: (0, y.unit)(n),
                        listStylePosition: "inside",
                        listStyleType: "disc"
                    };
                    return [{
                        [t]: {
                            "&-inline, &-vertical": {
                                [`&${t}-root`]: {
                                    boxShadow: "none"
                                },
                                ...en(e)
                            }
                        },
                        [`${t}-submenu-popup`]: {
                            [`${t}-vertical`]: { ...en(e),
                                boxShadow: g
                            }
                        }
                    }, {
                        [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
                            minWidth: r,
                            maxHeight: `calc(100vh - ${(0,y.unit)(e.calc(l).mul(2.5).equal())})`,
                            padding: "0",
                            overflow: "hidden",
                            borderInlineEnd: 0,
                            "&:not([class*='-active'])": {
                                overflowX: "hidden",
                                overflowY: "auto"
                            }
                        }
                    }, {
                        [`${t}-inline`]: {
                            width: "100%",
                            [`&${t}-root`]: {
                                [`${t}-item, ${t}-submenu-title`]: {
                                    display: "flex",
                                    alignItems: "center",
                                    transition: `border-color ${m},background-color ${m},padding ${c} ${a}`,
                                    [`> ${t}-title-content`]: {
                                        flex: "auto",
                                        minWidth: 0,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    },
                                    "> *": {
                                        flex: "none"
                                    }
                                }
                            },
                            [`${t}-sub${t}-inline`]: {
                                padding: 0,
                                border: 0,
                                borderRadius: 0,
                                boxShadow: "none",
                                [`& > ${t}-submenu > ${t}-submenu-title`]: f,
                                [`& ${t}-item-group-title`]: {
                                    paddingInlineStart: d
                                }
                            },
                            [`${t}-item`]: f
                        }
                    }, {
                        [`${t}-inline-collapsed`]: {
                            width: $,
                            [`&${t}-root`]: {
                                [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
                                    [`> ${t}-inline-collapsed-noicon`]: {
                                        fontSize: u,
                                        textAlign: "center"
                                    }
                                }
                            },
                            [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
                                insetInlineStart: 0,
                                paddingInline: `calc(50% - ${(0,y.unit)(e.calc(b).div(2).equal())} - ${(0,y.unit)(s)})`,
                                textOverflow: "clip",
                                [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: {
                                    opacity: 0
                                },
                                [`${t}-item-icon, ${o}`]: {
                                    margin: 0,
                                    fontSize: b,
                                    lineHeight: (0, y.unit)(n),
                                    "+ span": {
                                        display: "inline-block",
                                        opacity: 0
                                    }
                                }
                            },
                            [`${t}-item-icon, ${o}`]: {
                                display: "inline-block"
                            },
                            "&-tooltip": {
                                pointerEvents: "none",
                                [`${t}-item-icon, ${o}`]: {
                                    display: "none"
                                },
                                "a, a:hover": {
                                    color: i
                                }
                            },
                            [`${t}-item-group-title`]: { ...Z.textEllipsis,
                                paddingInline: p
                            }
                        }
                    }]
                })(I), eo(I, "light"), eo(C, "dark"), (e => {
                    let {
                        componentCls: t,
                        menuArrowOffset: o,
                        calc: n
                    } = e;
                    return {
                        [`${t}-rtl`]: {
                            direction: "rtl"
                        },
                        [`${t}-submenu-rtl`]: {
                            transformOrigin: "100% 0"
                        },
                        [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
                            [`${t}-submenu-arrow`]: {
                                "&::before": {
                                    transform: `rotate(-45deg) translateY(${(0,y.unit)(n(o).mul(-1).equal())})`
                                },
                                "&::after": {
                                    transform: `rotate(45deg) translateY(${(0,y.unit)(o)})`
                                }
                            }
                        }
                    }
                })(I), (0, K.genCollapseMotion)(I), (0, J.initSlideMotion)(I, "slide-up"), (0, J.initSlideMotion)(I, "slide-down"), (0, Q.initZoomMotion)(I, "zoom-big")]
            }, el, {
                deprecatedTokens: [
                    ["colorGroupTitle", "groupTitleColor"],
                    ["radiusItem", "itemBorderRadius"],
                    ["radiusSubMenuItem", "subMenuItemBorderRadius"],
                    ["colorItemText", "itemColor"],
                    ["colorItemTextHover", "itemHoverColor"],
                    ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"],
                    ["colorItemTextSelected", "itemSelectedColor"],
                    ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"],
                    ["colorItemTextDisabled", "itemDisabledColor"],
                    ["colorDangerItemText", "dangerItemColor"],
                    ["colorDangerItemTextHover", "dangerItemHoverColor"],
                    ["colorDangerItemTextSelected", "dangerItemSelectedColor"],
                    ["colorDangerItemBgActive", "dangerItemActiveBg"],
                    ["colorDangerItemBgSelected", "dangerItemSelectedBg"],
                    ["colorItemBg", "itemBg"],
                    ["colorItemBgHover", "itemHoverBg"],
                    ["colorSubItemBg", "subMenuItemBg"],
                    ["colorItemBgActive", "itemActiveBg"],
                    ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"],
                    ["colorActiveBarWidth", "activeBarWidth"],
                    ["colorActiveBarHeight", "activeBarHeight"],
                    ["colorActiveBarBorderSize", "activeBarBorderWidth"],
                    ["colorItemBgSelected", "itemSelectedBg"]
                ],
                injectStyle: o,
                unitless: {
                    groupTitleLineHeight: !0
                }
            })(e, t)
        };
    var ed = e.i(704079),
        ed = ed,
        es = e.i(260698);
    let eu = e => {
        let t, {
                popupClassName: n,
                icon: i,
                title: r,
                theme: a
            } = e,
            d = o.useContext(L),
            {
                prefixCls: u,
                inlineCollapsed: m,
                theme: p,
                classNames: $,
                styles: b
            } = d,
            f = (0, es.useFullPath)();
        if (i) {
            let e = o.isValidElement(r) && "span" === r.type;
            t = o.createElement(o.Fragment, null, (0, g.cloneElement)(i, e => ({
                className: (0, s.clsx)(e.className, `${u}-item-icon`, $ ? .itemIcon),
                style: { ...e.style,
                    ...b ? .itemIcon
                }
            })), e ? r : o.createElement("span", {
                className: `${u}-title-content`
            }, r))
        } else t = m && !f.length && r && "string" == typeof r ? o.createElement("div", {
            className: `${u}-inline-collapsed-noicon`
        }, r.charAt(0)) : o.createElement("span", {
            className: `${u}-title-content`
        }, r);
        let h = o.useMemo(() => ({ ...d,
                firstLevel: !1
            }), [d]),
            [v] = (0, c.useZIndex)("Menu");
        return o.createElement(L.Provider, {
            value: h
        }, o.createElement(ed.default, { ...(0, l.omit)(e, ["icon"]),
            title: t,
            classNames: {
                list: $ ? .subMenu ? .list,
                listTitle: $ ? .subMenu ? .itemTitle
            },
            styles: {
                list: b ? .subMenu ? .list,
                listTitle: b ? .subMenu ? .itemTitle
            },
            popupClassName: (0, s.clsx)(u, n, $ ? .popup ? .root, `${u}-${a||p}`),
            popupStyle: {
                zIndex: v,
                ...e.popupStyle,
                ...b ? .popup ? .root
            }
        }))
    };

    function ec(e) {
        return null === e || !1 === e
    }
    let em = {
            item: Y,
            submenu: eu,
            divider: O
        },
        ep = (0, o.forwardRef)((e, t) => {
            let n = o.useContext(U),
                i = n || {},
                {
                    prefixCls: r,
                    className: a,
                    style: c,
                    theme: m = "light",
                    expandIcon: p,
                    _internalDisableMenuItemTitleTooltip: $,
                    inlineCollapsed: b,
                    siderCollapsed: x,
                    rootClassName: I,
                    mode: C,
                    selectable: S,
                    onClick: w,
                    overflowedIndicatorPopupClassName: B,
                    classNames: y,
                    styles: k,
                    ...E
                } = e,
                {
                    menu: H
                } = o.useContext(f.ConfigContext),
                {
                    getPrefixCls: T,
                    getPopupContainer: z,
                    direction: M,
                    className: N,
                    style: R,
                    classNames: A,
                    styles: W
                } = (0, f.useComponentConfig)("menu"),
                O = T(),
                q = (0, l.omit)(E, ["collapsedWidth"]);
            i.validator ? .({
                mode: C
            });
            let X = (0, d.useEvent)(function() {
                    for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    w ? .(...t), i.onClick ? .()
                }),
                F = i.mode || C,
                Y = S ? ? i.selectable,
                _ = b ? ? x,
                G = { ...e,
                    mode: F,
                    inlineCollapsed: _,
                    selectable: Y,
                    theme: m
                },
                [j, V] = (0, u.useMergeSemantic)([A, y], [W, k], {
                    props: G
                }, {
                    popup: {
                        _default: "root"
                    },
                    subMenu: {
                        _default: "item"
                    }
                }),
                Z = {
                    horizontal: {
                        motionName: `${O}-slide-up`
                    },
                    inline: (0, P.default)(O),
                    other: {
                        motionName: `${O}-zoom-big`
                    }
                },
                K = T("menu", r || i.prefixCls),
                J = (0, h.default)(K),
                [Q, ee] = ea(K, J, !n),
                et = (0, s.clsx)(`${K}-${m}`, N, a),
                eo = o.useMemo(() => {
                    if ("function" == typeof p || ec(p)) return p || null;
                    if ("function" == typeof i.expandIcon || ec(i.expandIcon)) return i.expandIcon || null;
                    if ("function" == typeof H ? .expandIcon || ec(H ? .expandIcon)) return H ? .expandIcon || null;
                    let e = p ? ? i ? .expandIcon ? ? H ? .expandIcon;
                    return (0, g.cloneElement)(e, {
                        className: (0, s.clsx)(`${K}-submenu-expand-icon`, o.isValidElement(e) ? e.props ? .className : void 0)
                    })
                }, [p, i ? .expandIcon, H ? .expandIcon, K]),
                en = o.useMemo(() => ({
                    prefixCls: K,
                    inlineCollapsed: _ || !1,
                    direction: M,
                    firstLevel: !0,
                    theme: m,
                    mode: F,
                    disableMenuItemTitleTooltip: $,
                    classNames: j,
                    styles: V
                }), [K, _, M, $, m, F, j, V]);
            return o.createElement(U.Provider, {
                value: null
            }, o.createElement(L.Provider, {
                value: en
            }, o.createElement(v.default, {
                getPopupContainer: z,
                overflowedIndicator: o.createElement(D.default, null),
                overflowedIndicatorPopupClassName: (0, s.clsx)(K, `${K}-${m}`, B),
                classNames: {
                    list: j.list,
                    listTitle: j.itemTitle
                },
                styles: {
                    list: V.list,
                    listTitle: V.itemTitle
                },
                mode: F,
                selectable: Y,
                onClick: X,
                ...q,
                inlineCollapsed: _,
                style: { ...V.root,
                    ...R,
                    ...c
                },
                className: et,
                prefixCls: K,
                direction: M,
                defaultMotions: Z,
                expandIcon: eo,
                ref: t,
                rootClassName: (0, s.clsx)(I, Q, i.rootClassName, ee, J, j.root),
                _internalComponents: em
            })))
        }),
        eg = (0, o.forwardRef)((e, t) => {
            let n = (0, o.useRef)(null),
                i = o.useContext(N);
            return (0, o.useImperativeHandle)(t, () => ({
                menu: n.current,
                focus: e => {
                    n.current ? .focus(e)
                }
            })), o.createElement(ep, {
                ref: n,
                ...e,
                ...i
            })
        });
    eg.Item = Y, eg.SubMenu = eu, eg.Divider = O, eg.ItemGroup = x.default, e.s(["default", 0, eg], 60699);
    var e$ = e.i(104458),
        eb = e.i(777489),
        ef = e.i(320560),
        eh = e.i(307358);
    let ev = (0, k.genStyleHooks)("Dropdown", e => {
            let {
                marginXXS: t,
                sizePopupArrow: o,
                paddingXXS: n,
                componentCls: i
            } = e, r = (0, ee.mergeToken)(e, {
                menuCls: `${i}-menu`,
                dropdownArrowDistance: e.calc(o).div(2).add(t).equal(),
                dropdownEdgeChildPadding: n
            });
            return [(e => {
                let {
                    componentCls: t,
                    menuCls: o,
                    zIndexPopup: n,
                    dropdownArrowDistance: i,
                    sizePopupArrow: r,
                    antCls: l,
                    iconCls: a,
                    motionDurationMid: d,
                    paddingBlock: s,
                    fontSize: u,
                    dropdownEdgeChildPadding: c,
                    colorTextDisabled: m,
                    fontSizeIcon: p,
                    controlPaddingHorizontal: g,
                    colorBgElevated: $
                } = e;
                return [{
                        [t]: {
                            position: "absolute",
                            top: -9999,
                            left: {
                                _skip_check_: !0,
                                value: -9999
                            },
                            zIndex: n,
                            display: "block",
                            "&::before": {
                                position: "absolute",
                                insetBlock: e.calc(r).div(2).sub(i).equal(),
                                zIndex: -9999,
                                opacity: 1e-4,
                                content: '""'
                            },
                            "&-menu-vertical": {
                                maxHeight: "100vh",
                                overflowY: "auto"
                            },
                            [`&-trigger${l}-btn`]: {
                                [`& > ${a}-down, & > ${l}-btn-icon > ${a}-down`]: {
                                    fontSize: p
                                }
                            },
                            [`${t}-wrap`]: {
                                position: "relative",
                                [`${l}-btn > ${a}-down`]: {
                                    fontSize: p
                                },
                                [`${a}-down::before`]: {
                                    transition: `transform ${d}`
                                }
                            },
                            [`${t}-wrap-open`]: {
                                [`${a}-down::before`]: {
                                    transform: "rotate(180deg)"
                                }
                            },
                            [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: {
                                display: "none"
                            },
                            [`&${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottomLeft,
          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottomLeft,
          &${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottom,
          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottom,
          &${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottomRight,
          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottomRight`]: {
                                animationName: J.slideUpIn
                            },
                            [`&${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topLeft,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topLeft,
          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-top,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-top,
          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topRight,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topRight`]: {
                                animationName: J.slideDownIn
                            },
                            [`&${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomLeft,
          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottom,
          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomRight`]: {
                                animationName: J.slideUpOut
                            },
                            [`&${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topLeft,
          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-top,
          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topRight`]: {
                                animationName: J.slideDownOut
                            }
                        }
                    }, (0, ef.default)(e, $, {
                        arrowPlacement: {
                            top: !0,
                            bottom: !0
                        }
                    }), {
                        [`${t} ${o}`]: {
                            position: "relative",
                            margin: 0
                        },
                        [`${o}-submenu-popup`]: {
                            position: "absolute",
                            zIndex: n,
                            background: "transparent",
                            boxShadow: "none",
                            transformOrigin: "0 0",
                            "ul, li": {
                                listStyle: "none",
                                margin: 0
                            }
                        },
                        [`${t}, ${t}-menu-submenu`]: { ...(0, Z.resetComponent)(e),
                            [o]: {
                                padding: c,
                                listStyleType: "none",
                                backgroundColor: $,
                                backgroundClip: "padding-box",
                                borderRadius: e.borderRadiusLG,
                                outline: "none",
                                boxShadow: e.boxShadowSecondary,
                                ...(0, Z.genFocusStyle)(e),
                                "&:empty": {
                                    padding: 0,
                                    boxShadow: "none"
                                },
                                [`${o}-item-group-title`]: {
                                    padding: `${(0,y.unit)(s)} ${(0,y.unit)(g)}`,
                                    color: e.colorTextDescription,
                                    transition: `all ${d}`
                                },
                                [`${o}-item`]: {
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                [`${o}-item-icon`]: {
                                    minWidth: u,
                                    marginInlineEnd: e.marginXS,
                                    fontSize: e.fontSizeSM
                                },
                                [`${o}-title-content`]: {
                                    flex: "auto",
                                    "&-with-extra": {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        width: "100%"
                                    },
                                    "> a": {
                                        color: "inherit",
                                        transition: `all ${d}`,
                                        "&:hover": {
                                            color: "inherit"
                                        },
                                        "&::after": {
                                            position: "absolute",
                                            inset: 0,
                                            content: '""'
                                        }
                                    },
                                    [`${o}-item-extra`]: {
                                        paddingInlineStart: e.padding,
                                        marginInlineStart: "auto",
                                        fontSize: e.fontSizeSM,
                                        color: e.colorTextDescription
                                    }
                                },
                                [`${o}-item, ${o}-submenu-title`]: {
                                    display: "flex",
                                    margin: 0,
                                    padding: `${(0,y.unit)(s)} ${(0,y.unit)(g)}`,
                                    color: e.colorText,
                                    fontWeight: "normal",
                                    fontSize: u,
                                    lineHeight: e.lineHeight,
                                    cursor: "pointer",
                                    transition: `all ${d}`,
                                    borderRadius: e.borderRadiusSM,
                                    "&:hover, &-active": {
                                        backgroundColor: e.controlItemBgHover
                                    },
                                    ...(0, Z.genFocusStyle)(e),
                                    "&-selected": {
                                        color: e.colorPrimary,
                                        backgroundColor: e.controlItemBgActive,
                                        "&:hover, &-active": {
                                            backgroundColor: e.controlItemBgActiveHover
                                        }
                                    },
                                    "&-disabled": {
                                        color: m,
                                        cursor: "not-allowed",
                                        "&:hover": {
                                            color: m,
                                            backgroundColor: $,
                                            cursor: "not-allowed"
                                        },
                                        a: {
                                            pointerEvents: "none"
                                        }
                                    },
                                    "&-divider": {
                                        height: 1,
                                        margin: `${(0,y.unit)(e.marginXXS)} 0`,
                                        overflow: "hidden",
                                        lineHeight: 0,
                                        backgroundColor: e.colorSplit
                                    },
                                    [`${t}-menu-submenu-expand-icon`]: {
                                        position: "absolute",
                                        insetInlineEnd: e.paddingXS,
                                        [`${t}-menu-submenu-arrow-icon`]: {
                                            marginInlineEnd: "0 !important",
                                            color: e.colorIcon,
                                            fontSize: p,
                                            fontStyle: "normal"
                                        }
                                    }
                                },
                                [`${o}-item-group-list`]: {
                                    margin: `0 ${(0,y.unit)(e.marginXS)}`,
                                    padding: 0,
                                    listStyle: "none"
                                },
                                [`${o}-submenu-title`]: {
                                    paddingInlineEnd: e.calc(g).add(e.fontSizeSM).equal()
                                },
                                [`${o}-submenu-vertical`]: {
                                    position: "relative"
                                },
                                [`${o}-submenu${o}-submenu-disabled ${t}-menu-submenu-title`]: {
                                    [`&, ${t}-menu-submenu-arrow-icon`]: {
                                        color: m,
                                        backgroundColor: $,
                                        cursor: "not-allowed"
                                    }
                                },
                                [`${o}-submenu-selected ${t}-menu-submenu-title`]: {
                                    color: e.colorPrimary
                                }
                            }
                        }
                    },
                    [(0, J.initSlideMotion)(e, "slide-up"), (0, J.initSlideMotion)(e, "slide-down"), (0, eb.initMoveMotion)(e, "move-up"), (0, eb.initMoveMotion)(e, "move-down"), (0, Q.initZoomMotion)(e, "zoom-big")]
                ]
            })(r), (e => {
                let {
                    componentCls: t,
                    menuCls: o,
                    colorError: n,
                    colorTextLightSolid: i
                } = e, r = `${o}-item`;
                return {
                    [`${t}, ${t}-menu-submenu`]: {
                        [`${o} ${r}`]: {
                            [`&${r}-danger:not(${r}-disabled)`]: {
                                color: n,
                                "&:hover": {
                                    color: i,
                                    backgroundColor: n
                                }
                            }
                        }
                    }
                }
            })(r)]
        }, e => ({
            zIndexPopup: e.zIndexPopupBase + 50,
            paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2,
            ...(0, ef.getArrowOffsetToken)({
                contentRadius: e.borderRadiusLG,
                limitVerticalRadius: !0
            }),
            ...(0, eh.getArrowToken)(e)
        }), {
            resetStyle: !1
        }),
        ex = e => {
            let {
                menu: t,
                arrow: p,
                prefixCls: v,
                children: x,
                trigger: I,
                disabled: C,
                dropdownRender: S,
                popupRender: w,
                getPopupContainer: B,
                overlayClassName: y,
                rootClassName: k,
                overlayStyle: E,
                open: H,
                onOpenChange: T,
                mouseEnterDelay: z = .15,
                mouseLeaveDelay: M = .1,
                autoAdjustOverflow: N = !0,
                placement: R = "",
                transitionName: A,
                classNames: D,
                styles: P,
                destroyPopupOnHide: L,
                destroyOnHidden: W
            } = e, {
                getPrefixCls: O,
                direction: q,
                getPopupContainer: X,
                className: F,
                style: Y,
                classNames: _,
                styles: G
            } = (0, f.useComponentConfig)("dropdown"), U = { ...e,
                mouseEnterDelay: z,
                mouseLeaveDelay: M,
                autoAdjustOverflow: N
            }, [V, Z] = (0, u.useMergeSemantic)([_, D], [G, P], {
                props: U
            }), K = { ...Y,
                ...E,
                ...Z.root
            }, J = w || S;
            (0, $.devUseWarning)("Dropdown");
            let Q = o.useMemo(() => {
                    let e = O();
                    return void 0 !== A ? A : R.includes("top") ? `${e}-slide-down` : `${e}-slide-up`
                }, [O, R, A]),
                ee = o.useMemo(() => R ? R.includes("Center") ? R.slice(0, R.indexOf("Center")) : R : "rtl" === q ? "bottomRight" : "bottomLeft", [R, q]),
                et = O("dropdown", v),
                eo = (0, h.default)(et),
                [en, ei] = ev(et, eo),
                [, er] = (0, e$.useToken)(),
                el = o.Children.only("object" != typeof x && "function" != typeof x || null === x ? o.createElement("span", null, x) : x),
                ea = (0, g.cloneElement)(el, {
                    className: (0, s.clsx)(`${et}-trigger`, {
                        [`${et}-rtl`]: "rtl" === q
                    }, el.props.className),
                    disabled: el.props.disabled ? ? C
                }),
                ed = C ? [] : I,
                es = !!ed ? .includes("contextMenu"),
                [eu, ec] = (0, a.useControlledState)(!1, H),
                em = (0, d.useEvent)(e => {
                    T ? .(e, {
                        source: "trigger"
                    }), ec(e)
                }),
                ep = (0, s.clsx)(y, k, en, ei, eo, F, V.root, {
                    [`${et}-rtl`]: "rtl" === q
                }),
                eb = (0, m.default)({
                    arrowPointAtCenter: "object" == typeof p && p.pointAtCenter,
                    autoAdjustOverflow: N,
                    offset: er.marginXXS,
                    arrowWidth: p ? er.sizePopupArrow : 0,
                    borderRadius: er.borderRadius
                }),
                ef = (0, d.useEvent)(() => {
                    t ? .selectable && t ? .multiple || (T ? .(!1, {
                        source: "menu"
                    }), ec(!1))
                }),
                [eh, ex] = (0, c.useZIndex)("Dropdown", K.zIndex),
                eI = o.createElement(r.default, {
                    alignPoint: es,
                    ...(0, l.omit)(e, ["rootClassName", "onOpenChange"]),
                    mouseEnterDelay: z,
                    mouseLeaveDelay: M,
                    visible: eu,
                    builtinPlacements: eb,
                    arrow: !!p,
                    overlayClassName: ep,
                    prefixCls: et,
                    getPopupContainer: B || X,
                    transitionName: Q,
                    trigger: ed,
                    overlay: () => {
                        let e, r = (0, l.omit)(V, ["root"]),
                            a = (0, l.omit)(Z, ["root"]);
                        return t ? .items && (e = o.createElement(eg, { ...t,
                            classNames: { ...r,
                                subMenu: { ...r
                                }
                            },
                            styles: { ...a,
                                subMenu: { ...a
                                }
                            }
                        })), J && (e = J(e)), e = o.Children.only("string" == typeof e ? o.createElement("span", null, e) : e), o.createElement(j, {
                            prefixCls: `${et}-menu`,
                            rootClassName: (0, s.clsx)(ei, eo),
                            expandIcon: o.createElement("span", {
                                className: `${et}-menu-submenu-arrow`
                            }, "rtl" === q ? o.createElement(n.default, {
                                className: `${et}-menu-submenu-arrow-icon`
                            }) : o.createElement(i.default, {
                                className: `${et}-menu-submenu-arrow-icon`
                            })),
                            mode: "vertical",
                            selectable: !1,
                            onClick: ef,
                            validator: e => {
                                let {
                                    mode: t
                                } = e
                            }
                        }, e)
                    },
                    placement: ee,
                    onVisibleChange: em,
                    overlayStyle: { ...K,
                        zIndex: eh
                    },
                    autoDestroy: W ? ? L
                }, ea);
            return eh && (eI = o.createElement(b.default.Provider, {
                value: ex
            }, eI)), eI
        },
        eI = (0, p.default)(ex, "align", void 0, "dropdown", e => e);
    ex._InternalPanelDoNotUseOrYouWillBeFired = e => o.createElement(eI, { ...e
    }, o.createElement("span", null)), e.s(["default", 0, ex], 618316);
    var eC = e.i(920228),
        eS = e.i(38243),
        ew = e.i(249616);
    let eB = e => {
        let {
            getPopupContainer: t,
            getPrefixCls: n,
            direction: i
        } = o.useContext(f.ConfigContext), {
            prefixCls: r,
            type: l = "default",
            danger: a,
            disabled: d,
            loading: u,
            onClick: c,
            htmlType: m,
            children: p,
            className: g,
            menu: $,
            arrow: b,
            autoFocus: h,
            trigger: v,
            align: x,
            open: I,
            onOpenChange: C,
            placement: S,
            getPopupContainer: w,
            href: B,
            icon: y = o.createElement(D.default, null),
            title: k,
            buttonsRender: E = e => e,
            mouseEnterDelay: H,
            mouseLeaveDelay: T,
            overlayClassName: z,
            overlayStyle: M,
            destroyOnHidden: N,
            destroyPopupOnHide: R,
            dropdownRender: A,
            popupRender: P,
            ...L
        } = e, W = n("dropdown", r), O = `${W}-button`, q = {
            menu: $,
            arrow: b,
            autoFocus: h,
            align: x,
            disabled: d,
            trigger: d ? [] : v,
            onOpenChange: C,
            getPopupContainer: w || t,
            mouseEnterDelay: H,
            mouseLeaveDelay: T,
            classNames: {
                root: z
            },
            styles: {
                root: M
            },
            destroyOnHidden: N,
            popupRender: P || A
        }, {
            compactSize: X,
            compactItemClassnames: F
        } = (0, ew.useCompactItemContext)(W, i), Y = (0, s.clsx)(O, F, g);
        "destroyPopupOnHide" in e && (q.destroyPopupOnHide = R), "open" in e && (q.open = I), "placement" in e ? q.placement = S : q.placement = "rtl" === i ? "bottomLeft" : "bottomRight";
        let [_, G] = E([o.createElement(eC.default, {
            type: l,
            danger: a,
            disabled: d,
            loading: u,
            onClick: c,
            htmlType: m,
            href: B,
            title: k
        }, p), o.createElement(eC.default, {
            type: l,
            danger: a,
            icon: y
        })]);
        return o.createElement(eS.default.Compact, {
            className: Y,
            size: X,
            block: !0,
            ...L
        }, _, o.createElement(ex, { ...q
        }, G))
    };
    eB.__ANT_BUTTON = !0, ex.Button = eB, e.s(["default", 0, ex], 21539)
}]);