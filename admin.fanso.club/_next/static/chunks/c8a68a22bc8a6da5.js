(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 60699, 704914, 251224, 290224, 652199, e => {
    "use strict";
    let t;
    e.i(247167);
    var o = e.i(271645),
        r = e.i(213381),
        n = e.i(33578),
        n = n;
    let i = {
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
    var l = e.i(406575);

    function a() {
        return (a = Object.assign.bind()).apply(this, arguments)
    }
    let d = o.forwardRef((e, t) => o.createElement(l.default, a({}, e, {
        ref: t,
        icon: i
    })));
    var s = e.i(876083),
        c = e.i(631829);
    e.i(63335);
    var u = e.i(751095),
        m = e.i(207670),
        g = e.i(242064);
    let p = o.createContext({
        siderHook: {
            addSider: () => null,
            removeSider: () => null
        }
    });
    e.s(["LayoutContext", 0, p], 704914);
    var $ = e.i(687385),
        b = e.i(246422);
    let h = e => {
            let {
                colorBgLayout: t,
                controlHeight: o,
                controlHeightLG: r,
                colorText: n,
                controlHeightSM: i,
                marginXXS: l,
                colorTextLightSolid: a,
                colorBgContainer: d
            } = e, s = 1.25 * r;
            return {
                colorBgHeader: "#001529",
                colorBgBody: t,
                colorBgTrigger: "#002140",
                bodyBg: t,
                headerBg: "#001529",
                headerHeight: 2 * o,
                headerPadding: `0 ${s}px`,
                headerColor: n,
                footerPadding: `${i}px ${s}px`,
                footerBg: t,
                siderBg: "#001529",
                triggerHeight: r + 2 * l,
                triggerBg: "#002140",
                triggerColor: a,
                zeroTriggerWidth: r,
                zeroTriggerHeight: r,
                lightSiderBg: d,
                lightTriggerBg: d,
                lightTriggerColor: n
            }
        },
        f = [
            ["colorBgBody", "bodyBg"],
            ["colorBgHeader", "headerBg"],
            ["colorBgTrigger", "triggerBg"]
        ],
        v = (0, b.genStyleHooks)("Layout", e => {
            let {
                antCls: t,
                componentCls: o,
                colorText: r,
                footerBg: n,
                headerHeight: i,
                headerPadding: l,
                headerColor: a,
                footerPadding: d,
                fontSize: s,
                bodyBg: c,
                headerBg: u
            } = e;
            return {
                [o]: {
                    display: "flex",
                    flex: "auto",
                    flexDirection: "column",
                    minHeight: 0,
                    background: c,
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
                    height: i,
                    padding: l,
                    color: a,
                    lineHeight: (0, $.unit)(i),
                    background: u,
                    [`${t}-menu`]: {
                        lineHeight: "inherit"
                    }
                },
                [`${o}-footer`]: {
                    padding: d,
                    color: r,
                    fontSize: s,
                    background: n
                },
                [`${o}-content`]: {
                    flex: "auto",
                    color: r,
                    minHeight: 0
                }
            }
        }, h, {
            deprecatedTokens: f
        });
    e.s(["DEPRECATED_TOKENS", 0, f, "default", 0, v, "prepareComponentToken", 0, h], 251224);
    let I = (0, b.genStyleHooks)(["Layout", "Sider"], e => {
            let {
                componentCls: t,
                siderBg: o,
                motionDurationMid: r,
                motionDurationSlow: n,
                antCls: i,
                triggerHeight: l,
                triggerColor: a,
                triggerBg: d,
                headerHeight: s,
                zeroTriggerWidth: c,
                zeroTriggerHeight: u,
                borderRadiusLG: m,
                lightSiderBg: g,
                lightTriggerColor: p,
                lightTriggerBg: b,
                bodyBg: h
            } = e;
            return {
                [t]: {
                    position: "relative",
                    minWidth: 0,
                    background: o,
                    transition: `all ${r}, background 0s`,
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
                        [`${i}-menu${i}-menu-inline-collapsed`]: {
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
                        lineHeight: (0, $.unit)(l),
                        textAlign: "center",
                        background: d,
                        cursor: "pointer",
                        transition: `all ${r}`
                    },
                    [`${t}-zero-width-trigger`]: {
                        position: "absolute",
                        top: s,
                        insetInlineEnd: e.calc(c).mul(-1).equal(),
                        zIndex: 1,
                        width: c,
                        height: u,
                        color: a,
                        fontSize: e.fontSizeXL,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: o,
                        borderRadius: `0 ${(0,$.unit)(m)} ${(0,$.unit)(m)} 0`,
                        cursor: "pointer",
                        transition: `background ${n} ease`,
                        "&::after": {
                            position: "absolute",
                            inset: 0,
                            background: "transparent",
                            transition: `all ${n}`,
                            content: '""'
                        },
                        "&:hover::after": {
                            background: "rgba(255, 255, 255, 0.2)"
                        },
                        "&-right": {
                            insetInlineStart: e.calc(c).mul(-1).equal(),
                            borderRadius: `${(0,$.unit)(m)} 0 0 ${(0,$.unit)(m)}`
                        }
                    },
                    "&-light": {
                        background: g,
                        [`${t}-trigger`]: {
                            color: p,
                            background: b
                        },
                        [`${t}-zero-width-trigger`]: {
                            color: p,
                            background: b,
                            border: `1px solid ${h}`,
                            borderInlineStart: 0
                        }
                    }
                }
            }
        }, h, {
            deprecatedTokens: f
        }),
        x = {
            xs: "479.98px",
            sm: "575.98px",
            md: "767.98px",
            lg: "991.98px",
            xl: "1199.98px",
            xxl: "1599.98px"
        },
        C = o.createContext({}),
        B = (t = 0, (e = "") => (t += 1, `${e}${t}`)),
        S = o.forwardRef((e, t) => {
            let {
                prefixCls: r,
                className: n,
                trigger: i,
                children: l,
                defaultCollapsed: a = !1,
                theme: $ = "dark",
                style: b = {},
                collapsible: h = !1,
                reverseArrow: f = !1,
                width: v = 200,
                collapsedWidth: S = 80,
                zeroWidthTriggerStyle: k,
                breakpoint: y,
                onCollapse: w,
                onBreakpoint: H,
                ...T
            } = e, {
                siderHook: E
            } = (0, o.useContext)(p), [z, M] = (0, o.useState)("collapsed" in e ? e.collapsed : a), [N, R] = (0, o.useState)(!1);
            (0, o.useEffect)(() => {
                "collapsed" in e && M(e.collapsed)
            }, [e.collapsed]);
            let A = (t, o) => {
                    "collapsed" in e || M(t), w ? .(t, o)
                },
                {
                    getPrefixCls: D,
                    direction: W
                } = (0, o.useContext)(g.ConfigContext),
                L = D("layout-sider", r),
                [P, q] = I(L),
                O = (0, o.useRef)(null);
            O.current = e => {
                R(e.matches), H ? .(e.matches), z !== e.matches && A(e.matches, "responsive")
            }, (0, o.useEffect)(() => {
                let e;

                function t(e) {
                    return O.current ? .(e)
                }
                return void 0 !== window ? .matchMedia && y && y in x && (e = window.matchMedia(`screen and (max-width: ${x[y]})`), "function" == typeof e ? .addEventListener && e.addEventListener("change", t), t(e)), () => {
                    "function" == typeof e ? .removeEventListener && e.removeEventListener("change", t)
                }
            }, [y]), (0, o.useEffect)(() => {
                let e = B("ant-sider-");
                return E.addSider(e), () => E.removeSider(e)
            }, []);
            let F = () => {
                    A(!z, "clickTrigger")
                },
                X = (0, u.omit)(T, ["collapsed"]),
                Y = z ? S : v,
                G = !Number.isNaN(Number.parseFloat(Y)) && Number.isFinite(Number(Y)) ? `${Y}px` : String(Y),
                _ = 0 === Number.parseFloat(String(S || 0)) ? o.createElement("span", {
                    onClick: F,
                    className: (0, m.clsx)(`${L}-zero-width-trigger`, `${L}-zero-width-trigger-${f?"right":"left"}`),
                    style: k
                }, i || o.createElement(d, null)) : null,
                j = "rtl" === W == !f,
                K = {
                    expanded: j ? o.createElement(c.default, null) : o.createElement(s.default, null),
                    collapsed: j ? o.createElement(s.default, null) : o.createElement(c.default, null)
                }[z ? "collapsed" : "expanded"],
                V = null !== i ? _ || o.createElement("div", {
                    className: `${L}-trigger`,
                    onClick: F,
                    style: {
                        width: G
                    }
                }, i || K) : null,
                U = { ...b,
                    flex: `0 0 ${G}`,
                    maxWidth: G,
                    minWidth: G,
                    width: G
                },
                Z = (0, m.clsx)(L, `${L}-${$}`, {
                    [`${L}-collapsed`]: !!z,
                    [`${L}-has-trigger`]: h && null !== i && !_,
                    [`${L}-below`]: !!N,
                    [`${L}-zero-width`]: 0 === Number.parseFloat(G)
                }, n, P, q),
                J = o.useMemo(() => ({
                    siderCollapsed: z
                }), [z]);
            return o.createElement(C.Provider, {
                value: J
            }, o.createElement("aside", {
                className: Z,
                ...X,
                style: U,
                ref: t
            }, o.createElement("div", {
                className: `${L}-children`
            }, l), h || N && _ ? V : null))
        });
    e.s(["SiderContext", 0, C, "default", 0, S], 290224);
    var k = e.i(539563),
        y = e.i(580251),
        w = e.i(711517),
        H = e.i(613541),
        T = e.i(763731),
        E = e.i(321883);
    let z = (0, o.createContext)({
        prefixCls: "",
        firstLevel: !0,
        inlineCollapsed: !1,
        styles: null,
        classNames: null
    });
    var M = e.i(950211),
        M = M;
    let N = e => {
        let {
            prefixCls: t,
            className: r,
            dashed: n,
            ...i
        } = e, {
            getPrefixCls: l
        } = o.useContext(g.ConfigContext), a = l("menu", t), d = (0, m.clsx)({
            [`${a}-item-divider-dashed`]: !!n
        }, r);
        return o.createElement(M.default, {
            className: d,
            ...i
        })
    };
    var R = e.i(965044),
        R = R,
        A = e.i(943081),
        D = e.i(491816);
    let W = e => {
        let t, r, {
                className: n,
                children: i,
                icon: l,
                title: a,
                danger: d,
                extra: s
            } = e,
            {
                prefixCls: c,
                firstLevel: g,
                direction: p,
                disableMenuItemTitleTooltip: $,
                inlineCollapsed: b,
                styles: h,
                classNames: f
            } = o.useContext(z),
            {
                siderCollapsed: v
            } = o.useContext(C),
            I = a;
        void 0 === a ? I = g ? i : "" : !1 === a && (I = "");
        let x = {
            title: I
        };
        v || b || (x.title = null, x.open = !1);
        let B = (0, A.toArray)(i).length,
            S = o.createElement(R.default, { ...(0, u.omit)(e, ["title", "icon", "danger"]),
                className: (0, m.clsx)(g ? f.item : f.subMenu.item, {
                    [`${c}-item-danger`]: d,
                    [`${c}-item-only-child`]: (l ? B + 1 : B) === 1
                }, n),
                style: { ...g ? h.item : h.subMenu.item,
                    ...e.style
                },
                title: "string" == typeof a ? a : void 0
            }, (0, T.cloneElement)(l, e => ({
                className: (0, m.clsx)(`${c}-item-icon`, g ? f.itemIcon : f.subMenu.itemIcon, e.className),
                style: { ...g ? h.itemIcon : h.subMenu.itemIcon,
                    ...e.style
                }
            })), (t = i ? .[0], r = o.createElement("span", {
                className: (0, m.clsx)(`${c}-title-content`, g ? f.itemContent : f.subMenu.itemContent, {
                    [`${c}-title-content-with-extra`]: !!s || 0 === s
                }),
                style: g ? h.itemContent : h.subMenu.itemContent
            }, i), (!l || o.isValidElement(i) && "span" === i.type) && i && b && g && "string" == typeof t ? o.createElement("div", {
                className: `${c}-inline-collapsed-noicon`
            }, t.charAt(0)) : r));
        return $ || (S = o.createElement(D.default, { ...x,
            placement: "rtl" === p ? "left" : "right",
            classNames: {
                root: `${c}-inline-collapsed-tooltip`
            }
        }, S)), S
    };
    var L = e.i(232839),
        P = e.i(617206);
    let q = o.createContext(null),
        O = o.forwardRef((e, t) => {
            let {
                children: r,
                ...n
            } = e, i = o.useContext(q), l = o.useMemo(() => ({ ...i,
                ...n
            }), [i, n.prefixCls, n.mode, n.selectable, n.rootClassName]), a = (0, L.supportNodeRef)(r), d = (0, L.useComposeRef)(t, a ? (0, L.getNodeRef)(r) : null);
            return o.createElement(q.Provider, {
                value: l
            }, o.createElement(P.default, {
                space: !0
            }, a ? o.cloneElement(r, {
                ref: d
            }) : r))
        });
    e.s(["OverrideProvider", 0, O, "default", 0, q], 652199), e.i(262370);
    var F = e.i(135551),
        X = e.i(183293),
        Y = e.i(447580),
        G = e.i(664142),
        _ = e.i(717356),
        j = e.i(838378);
    let K = e => (0, X.genFocusOutline)(e),
        V = (e, t) => {
            let {
                componentCls: o,
                itemColor: r,
                itemSelectedColor: n,
                subMenuItemSelectedColor: i,
                groupTitleColor: l,
                itemBg: a,
                subMenuItemBg: d,
                itemSelectedBg: s,
                activeBarHeight: c,
                activeBarWidth: u,
                activeBarBorderWidth: m,
                motionDurationSlow: g,
                motionEaseInOut: p,
                motionEaseOut: b,
                itemPaddingInline: h,
                motionDurationMid: f,
                itemHoverColor: v,
                lineType: I,
                colorSplit: x,
                itemDisabledColor: C,
                dangerItemColor: B,
                dangerItemHoverColor: S,
                dangerItemSelectedColor: k,
                dangerItemActiveBg: y,
                dangerItemSelectedBg: w,
                popupBg: H,
                itemHoverBg: T,
                itemActiveBg: E,
                menuSubMenuBg: z,
                horizontalItemSelectedColor: M,
                horizontalItemSelectedBg: N,
                horizontalItemBorderRadius: R,
                horizontalItemHoverBg: A
            } = e;
            return {
                [`${o}-${t}, ${o}-${t} > ${o}`]: {
                    color: r,
                    background: a,
                    [`&${o}-root:focus-visible`]: { ...K(e)
                    },
                    [`${o}-item`]: {
                        "&-group-title, &-extra": {
                            color: l
                        }
                    },
                    [`${o}-submenu-selected > ${o}-submenu-title`]: {
                        color: i
                    },
                    [`${o}-item, ${o}-submenu-title`]: {
                        color: r,
                        [`&:not(${o}-item-disabled):focus-visible`]: { ...K(e)
                        }
                    },
                    [`${o}-item-disabled, ${o}-submenu-disabled`]: {
                        color: `${C} !important`
                    },
                    [`${o}-item:not(${o}-item-selected):not(${o}-submenu-selected)`]: {
                        [`&:hover, > ${o}-submenu-title:hover`]: {
                            color: v
                        }
                    },
                    [`&:not(${o}-horizontal)`]: {
                        [`${o}-item:not(${o}-item-selected)`]: {
                            "&:hover": {
                                backgroundColor: T
                            },
                            "&:active": {
                                backgroundColor: E
                            }
                        },
                        [`${o}-submenu-title`]: {
                            "&:hover": {
                                backgroundColor: T
                            },
                            "&:active": {
                                backgroundColor: E
                            }
                        }
                    },
                    [`${o}-item-danger`]: {
                        color: B,
                        [`&${o}-item:hover`]: {
                            [`&:not(${o}-item-selected):not(${o}-submenu-selected)`]: {
                                color: S
                            }
                        },
                        [`&${o}-item:active`]: {
                            background: y
                        }
                    },
                    [`${o}-item a`]: {
                        "&, &:hover": {
                            color: "inherit"
                        }
                    },
                    [`${o}-item-selected`]: {
                        color: n,
                        [`&${o}-item-danger`]: {
                            color: k
                        },
                        "a, a:hover": {
                            color: "inherit"
                        }
                    },
                    [`& ${o}-item-selected`]: {
                        backgroundColor: s,
                        [`&${o}-item-danger`]: {
                            backgroundColor: w
                        }
                    },
                    [`&${o}-submenu > ${o}`]: {
                        backgroundColor: z
                    },
                    [`&${o}-popup > ${o}`]: {
                        backgroundColor: H
                    },
                    [`&${o}-submenu-popup > ${o}`]: {
                        backgroundColor: H
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
                                insetInline: h,
                                bottom: 0,
                                borderBottom: `${(0,$.unit)(c)} solid transparent`,
                                transition: `border-color ${g} ${p}`,
                                content: '""'
                            },
                            "&:hover, &-active, &-open": {
                                background: A,
                                "&::after": {
                                    borderBottomWidth: c,
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
                                    borderBottomWidth: c,
                                    borderBottomColor: M
                                }
                            }
                        }
                    },
                    [`&${o}-root`]: {
                        [`&${o}-inline, &${o}-vertical`]: {
                            borderInlineEnd: `${(0,$.unit)(m)} ${I} ${x}`
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
                                borderInlineEnd: `${(0,$.unit)(u)} solid ${n}`,
                                transform: "scaleY(0.0001)",
                                opacity: 0,
                                transition: `transform ${f} ${b},opacity ${f} ${b}`,
                                content: '""'
                            },
                            [`&${o}-item-danger`]: {
                                "&::after": {
                                    borderInlineEndColor: k
                                }
                            }
                        },
                        [`${o}-selected, ${o}-item-selected`]: {
                            "&::after": {
                                transform: "scaleY(1)",
                                opacity: 1,
                                transition: `transform ${f} ${p},opacity ${f} ${p}`
                            }
                        }
                    }
                }
            }
        },
        U = e => {
            let {
                componentCls: t,
                itemHeight: o,
                itemMarginInline: r,
                padding: n,
                menuArrowSize: i,
                marginXS: l,
                itemMarginBlock: a,
                itemWidth: d,
                itemPaddingInline: s
            } = e, c = e.calc(i).add(n).add(l).equal();
            return {
                [`${t}-item`]: {
                    position: "relative",
                    overflow: "hidden"
                },
                [`${t}-item, ${t}-submenu-title`]: {
                    height: o,
                    lineHeight: (0, $.unit)(o),
                    paddingInline: s,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginInline: r,
                    marginBlock: a,
                    width: d
                },
                [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
                    height: o,
                    lineHeight: (0, $.unit)(o)
                },
                [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
                    paddingInlineEnd: c
                }
            }
        },
        Z = e => {
            let {
                componentCls: t,
                motionDurationSlow: o,
                motionDurationMid: r,
                motionEaseInOut: n,
                motionEaseOut: i,
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
                    transition: `border-color ${o},background ${o},padding calc(${o} + 0.1s) ${n}`,
                    [`${t}-item-icon, ${l}`]: {
                        minWidth: a,
                        fontSize: a,
                        transition: `font-size ${r} ${i},margin ${o} ${n},color ${o}`,
                        "+ span": {
                            marginInlineStart: d,
                            opacity: 1,
                            transition: `opacity ${o} ${n},margin ${o},color ${o}`
                        }
                    },
                    [`${t}-item-icon`]: { ...(0, X.resetIcon)()
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
        J = e => {
            let {
                componentCls: t,
                motionDurationSlow: o,
                motionEaseInOut: r,
                borderRadius: n,
                menuArrowSize: i,
                menuArrowOffset: l
            } = e;
            return {
                [`${t}-submenu`]: {
                    "&-expand-icon, &-arrow": {
                        position: "absolute",
                        top: "50%",
                        insetInlineEnd: e.margin,
                        width: i,
                        color: "currentcolor",
                        transform: "translateY(-50%)",
                        transition: `transform ${o} ${r}, opacity ${o}`
                    },
                    "&-arrow": {
                        "&::before, &::after": {
                            position: "absolute",
                            width: e.calc(i).mul(.6).equal(),
                            height: e.calc(i).mul(.15).equal(),
                            backgroundColor: "currentcolor",
                            borderRadius: n,
                            transition: `background ${o} ${r},transform ${o} ${r},top ${o} ${r},color ${o} ${r}`,
                            content: '""'
                        },
                        "&::before": {
                            transform: `rotate(45deg) translateY(${(0,$.unit)(e.calc(l).mul(-1).equal())})`
                        },
                        "&::after": {
                            transform: `rotate(-45deg) translateY(${(0,$.unit)(l)})`
                        }
                    }
                }
            }
        },
        Q = e => {
            let {
                colorPrimary: t,
                colorError: o,
                colorTextDisabled: r,
                colorErrorBg: n,
                colorText: i,
                colorTextDescription: l,
                colorBgContainer: a,
                colorFillAlter: d,
                colorFillContent: s,
                lineWidth: c,
                lineWidthBold: u,
                controlItemBgActive: m,
                colorBgTextHover: g,
                controlHeightLG: p,
                lineHeight: $,
                colorBgElevated: b,
                marginXXS: h,
                padding: f,
                fontSize: v,
                controlHeightSM: I,
                fontSizeLG: x,
                colorTextLightSolid: C,
                colorErrorHover: B
            } = e, S = e.activeBarWidth ? ? 0, k = e.activeBarBorderWidth ? ? c, y = e.itemMarginInline ? ? e.marginXXS, w = new F.FastColor(C).setA(.65).toRgbString();
            return {
                dropdownWidth: 160,
                zIndexPopup: e.zIndexPopupBase + 50,
                radiusItem: e.borderRadiusLG,
                itemBorderRadius: e.borderRadiusLG,
                radiusSubMenuItem: e.borderRadiusSM,
                subMenuItemBorderRadius: e.borderRadiusSM,
                colorItemText: i,
                itemColor: i,
                colorItemTextHover: i,
                itemHoverColor: i,
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
                colorItemBgHover: g,
                itemHoverBg: g,
                colorItemBgActive: s,
                itemActiveBg: m,
                colorSubItemBg: d,
                subMenuItemBg: d,
                colorItemBgSelected: m,
                itemSelectedBg: m,
                colorItemBgSelectedHorizontal: "transparent",
                horizontalItemSelectedBg: "transparent",
                colorActiveBarWidth: 0,
                activeBarWidth: S,
                colorActiveBarHeight: u,
                activeBarHeight: u,
                colorActiveBarBorderSize: c,
                activeBarBorderWidth: k,
                colorItemTextDisabled: r,
                itemDisabledColor: r,
                colorDangerItemText: o,
                dangerItemColor: o,
                colorDangerItemTextHover: o,
                dangerItemHoverColor: o,
                colorDangerItemTextSelected: o,
                dangerItemSelectedColor: o,
                colorDangerItemBgActive: n,
                dangerItemActiveBg: n,
                colorDangerItemBgSelected: n,
                dangerItemSelectedBg: n,
                itemMarginInline: y,
                horizontalItemBorderRadius: 0,
                horizontalItemHoverBg: "transparent",
                itemHeight: p,
                groupTitleLineHeight: $,
                collapsedWidth: 2 * p,
                popupBg: b,
                itemMarginBlock: h,
                itemPaddingInline: f,
                horizontalLineHeight: `${1.15*p}px`,
                iconSize: v,
                iconMarginInlineEnd: I - v,
                collapsedIconSize: x,
                groupTitleFontSize: v,
                darkItemDisabledColor: new F.FastColor(C).setA(.25).toRgbString(),
                darkItemColor: w,
                darkDangerItemColor: o,
                darkItemBg: "#001529",
                darkPopupBg: "#001529",
                darkSubMenuItemBg: "#000c17",
                darkItemSelectedColor: C,
                darkItemSelectedBg: t,
                darkDangerItemSelectedBg: o,
                darkItemHoverBg: "transparent",
                darkGroupTitleColor: w,
                darkItemHoverColor: C,
                darkDangerItemHoverColor: B,
                darkDangerItemSelectedColor: C,
                darkDangerItemActiveBg: o,
                itemWidth: S ? `calc(100% + ${k}px)` : `calc(100% - ${2*y}px)`
            }
        };
    var ee = e.i(704079),
        ee = ee,
        et = e.i(260698),
        eo = e.i(122767);
    let er = e => {
        let t, {
                popupClassName: r,
                icon: n,
                title: i,
                theme: l
            } = e,
            a = o.useContext(z),
            {
                prefixCls: d,
                inlineCollapsed: s,
                theme: c,
                classNames: g,
                styles: p
            } = a,
            $ = (0, et.useFullPath)();
        if (n) {
            let e = o.isValidElement(i) && "span" === i.type;
            t = o.createElement(o.Fragment, null, (0, T.cloneElement)(n, e => ({
                className: (0, m.clsx)(e.className, `${d}-item-icon`, g.itemIcon),
                style: { ...e.style,
                    ...p.itemIcon
                }
            })), e ? i : o.createElement("span", {
                className: `${d}-title-content`
            }, i))
        } else t = s && !$.length && i && "string" == typeof i ? o.createElement("div", {
            className: `${d}-inline-collapsed-noicon`
        }, i.charAt(0)) : o.createElement("span", {
            className: `${d}-title-content`
        }, i);
        let b = o.useMemo(() => ({ ...a,
                firstLevel: !1
            }), [a]),
            [h] = (0, eo.useZIndex)("Menu");
        return o.createElement(z.Provider, {
            value: b
        }, o.createElement(ee.default, { ...(0, u.omit)(e, ["icon"]),
            title: t,
            classNames: {
                list: g.subMenu.list,
                listTitle: g.subMenu.itemTitle
            },
            styles: {
                list: p.subMenu.list,
                listTitle: p.subMenu.itemTitle
            },
            popupClassName: (0, m.clsx)(d, r, g.popup.root, `${d}-${l||c}`),
            popupStyle: {
                zIndex: h,
                ...e.popupStyle,
                ...p.popup.root
            }
        }))
    };

    function en(e) {
        return null === e || !1 === e
    }
    let ei = {
            item: W,
            submenu: er,
            divider: N
        },
        el = (0, o.forwardRef)((e, t) => {
            let n = o.useContext(q),
                i = n || {},
                {
                    prefixCls: l,
                    className: a,
                    style: d,
                    theme: s = "light",
                    expandIcon: c,
                    _internalDisableMenuItemTitleTooltip: p,
                    inlineCollapsed: h,
                    siderCollapsed: f,
                    rootClassName: v,
                    mode: I,
                    selectable: x,
                    onClick: C,
                    overflowedIndicatorPopupClassName: B,
                    classNames: S,
                    styles: M,
                    ...N
                } = e,
                {
                    menu: R
                } = o.useContext(g.ConfigContext),
                {
                    getPrefixCls: A,
                    getPopupContainer: D,
                    direction: W,
                    className: L,
                    style: P,
                    classNames: O,
                    styles: F
                } = (0, g.useComponentConfig)("menu"),
                K = A(),
                ee = (0, u.omit)(N, ["collapsedWidth"]);
            i.validator ? .({
                mode: I
            });
            let et = (0, y.useEvent)((...e) => {
                    C ? .(...e), i.onClick ? .()
                }),
                eo = i.mode || I,
                er = x ? ? i.selectable,
                el = h ? ? f,
                ea = { ...e,
                    mode: eo,
                    inlineCollapsed: el,
                    selectable: er,
                    theme: s
                },
                [ed, es] = (0, w.useMergeSemantic)([O, S], [F, M], {
                    props: ea
                }, {
                    popup: {
                        _default: "root"
                    },
                    subMenu: {
                        _default: "item"
                    }
                }),
                ec = {
                    horizontal: {
                        motionName: `${K}-slide-up`
                    },
                    inline: (0, H.default)(K),
                    other: {
                        motionName: `${K}-zoom-big`
                    }
                },
                eu = A("menu", l || i.prefixCls),
                em = (0, E.default)(eu),
                [eg, ep] = ((e, t = e, o = !0) => (0, b.genStyleHooks)("Menu", e => {
                    let {
                        colorBgElevated: t,
                        controlHeightLG: o,
                        fontSize: r,
                        darkItemColor: n,
                        darkDangerItemColor: i,
                        darkItemBg: l,
                        darkSubMenuItemBg: a,
                        darkItemSelectedColor: d,
                        darkItemSelectedBg: s,
                        darkDangerItemSelectedBg: c,
                        darkItemHoverBg: u,
                        darkGroupTitleColor: m,
                        darkItemHoverColor: g,
                        darkItemDisabledColor: p,
                        darkDangerItemHoverColor: b,
                        darkDangerItemSelectedColor: h,
                        darkDangerItemActiveBg: f,
                        popupBg: v,
                        darkPopupBg: I
                    } = e, x = e.calc(r).div(7).mul(5).equal(), C = (0, j.mergeToken)(e, {
                        menuArrowSize: x,
                        menuHorizontalHeight: e.calc(o).mul(1.15).equal(),
                        menuArrowOffset: e.calc(x).mul(.25).equal(),
                        menuSubMenuBg: t,
                        calc: e.calc,
                        popupBg: v
                    }), B = (0, j.mergeToken)(C, {
                        itemColor: n,
                        itemHoverColor: g,
                        groupTitleColor: m,
                        itemSelectedColor: d,
                        subMenuItemSelectedColor: d,
                        itemBg: l,
                        popupBg: I,
                        subMenuItemBg: a,
                        itemActiveBg: "transparent",
                        itemSelectedBg: s,
                        activeBarHeight: 0,
                        activeBarBorderWidth: 0,
                        itemHoverBg: u,
                        itemDisabledColor: p,
                        dangerItemColor: i,
                        dangerItemHoverColor: b,
                        dangerItemSelectedColor: h,
                        dangerItemActiveBg: f,
                        dangerItemSelectedBg: c,
                        menuSubMenuBg: a,
                        horizontalItemSelectedColor: d,
                        horizontalItemSelectedBg: s
                    });
                    return [(e => {
                        let {
                            antCls: t,
                            componentCls: o,
                            fontSize: r,
                            motionDurationSlow: n,
                            motionDurationMid: i,
                            motionEaseInOut: l,
                            paddingXS: a,
                            padding: d,
                            colorSplit: s,
                            lineWidth: c,
                            zIndexPopup: u,
                            borderRadiusLG: m,
                            subMenuItemBorderRadius: g,
                            menuArrowSize: p,
                            menuArrowOffset: b,
                            lineType: h,
                            groupTitleLineHeight: f,
                            groupTitleFontSize: v
                        } = e;
                        return [{
                            "": {
                                [o]: { ...(0, X.clearFix)(),
                                    "&-hidden": {
                                        display: "none"
                                    }
                                }
                            },
                            [`${o}-submenu-hidden`]: {
                                display: "none"
                            }
                        }, {
                            [o]: { ...(0, X.resetComponent)(e),
                                ...(0, X.clearFix)(),
                                marginBottom: 0,
                                paddingInlineStart: 0,
                                fontSize: r,
                                lineHeight: 0,
                                listStyle: "none",
                                outline: "none",
                                transition: `width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,
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
                                    padding: `${(0,$.unit)(a)} ${(0,$.unit)(d)}`,
                                    fontSize: v,
                                    lineHeight: f,
                                    transition: `all ${n}`
                                },
                                [`&-horizontal ${o}-submenu`]: {
                                    transition: `border-color ${n} ${l},background ${n} ${l}`
                                },
                                [`${o}-submenu, ${o}-submenu-inline`]: {
                                    transition: `border-color ${n} ${l},background ${n} ${l},padding ${i} ${l}`
                                },
                                [`${o}-submenu ${o}-sub`]: {
                                    cursor: "initial",
                                    transition: `background ${n} ${l},padding ${n} ${l}`
                                },
                                [`${o}-title-content`]: {
                                    transition: `color ${n}`,
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
                                    borderStyle: h,
                                    borderWidth: 0,
                                    borderTopWidth: c,
                                    marginBlock: c,
                                    padding: 0,
                                    "&-dashed": {
                                        borderStyle: "dashed"
                                    }
                                },
                                ...Z(e),
                                [`${o}-item-group`]: {
                                    [`${o}-item-group-list`]: {
                                        margin: 0,
                                        padding: 0,
                                        [`${o}-item, ${o}-submenu-title`]: {
                                            paddingInline: `${(0,$.unit)(e.calc(r).mul(2).equal())} ${(0,$.unit)(d)}`
                                        }
                                    }
                                },
                                "&-submenu": {
                                    "&-popup": {
                                        position: "absolute",
                                        zIndex: u,
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
                                            ...Z(e),
                                            ...J(e),
                                            [`${o}-item, ${o}-submenu > ${o}-submenu-title`]: {
                                                borderRadius: g
                                            },
                                            [`${o}-submenu-title::after`]: {
                                                transition: `transform ${n} ${l}`
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
                                ...J(e),
                                [`&-inline-collapsed ${o}-submenu-arrow,
        &-inline ${o}-submenu-arrow`]: {
                                    "&::before": {
                                        transform: `rotate(-45deg) translateX(${(0,$.unit)(b)})`
                                    },
                                    "&::after": {
                                        transform: `rotate(45deg) translateX(${(0,$.unit)(e.calc(b).mul(-1).equal())})`
                                    }
                                },
                                [`${o}-submenu-open${o}-submenu-inline > ${o}-submenu-title > ${o}-submenu-arrow`]: {
                                    transform: `translateY(${(0,$.unit)(e.calc(p).mul(.2).mul(-1).equal())})`,
                                    "&::after": {
                                        transform: `rotate(-45deg) translateX(${(0,$.unit)(e.calc(b).mul(-1).equal())})`
                                    },
                                    "&::before": {
                                        transform: `rotate(45deg) translateX(${(0,$.unit)(b)})`
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
                    })(C), (e => {
                        let {
                            componentCls: t,
                            motionDurationSlow: o,
                            horizontalLineHeight: r,
                            colorSplit: n,
                            lineWidth: i,
                            lineType: l,
                            itemPaddingInline: a
                        } = e;
                        return {
                            [`${t}-horizontal`]: {
                                lineHeight: r,
                                border: 0,
                                borderBottom: `${(0,$.unit)(i)} ${l} ${n}`,
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
                                    transition: `border-color ${o},background ${o}`
                                },
                                [`${t}-submenu-arrow`]: {
                                    display: "none"
                                }
                            }
                        }
                    })(C), (e => {
                        let {
                            componentCls: t,
                            iconCls: o,
                            itemHeight: r,
                            colorTextLightSolid: n,
                            dropdownWidth: i,
                            controlHeightLG: l,
                            motionEaseOut: a,
                            paddingXL: d,
                            itemMarginInline: s,
                            fontSizeLG: c,
                            motionDurationFast: u,
                            motionDurationSlow: m,
                            paddingXS: g,
                            boxShadowSecondary: p,
                            collapsedWidth: b,
                            collapsedIconSize: h
                        } = e, f = {
                            height: r,
                            lineHeight: (0, $.unit)(r),
                            listStylePosition: "inside",
                            listStyleType: "disc"
                        };
                        return [{
                            [t]: {
                                "&-inline, &-vertical": {
                                    [`&${t}-root`]: {
                                        boxShadow: "none"
                                    },
                                    ...U(e)
                                }
                            },
                            [`${t}-submenu-popup`]: {
                                [`${t}-vertical`]: { ...U(e),
                                    boxShadow: p
                                }
                            }
                        }, {
                            [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
                                minWidth: i,
                                maxHeight: `calc(100vh - ${(0,$.unit)(e.calc(l).mul(2.5).equal())})`,
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
                                        transition: `border-color ${m},background ${m},padding ${u} ${a}`,
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
                                width: b,
                                [`&${t}-root`]: {
                                    [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
                                        [`> ${t}-inline-collapsed-noicon`]: {
                                            fontSize: c,
                                            textAlign: "center"
                                        }
                                    }
                                },
                                [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
                                    insetInlineStart: 0,
                                    paddingInline: `calc(50% - ${(0,$.unit)(e.calc(h).div(2).equal())} - ${(0,$.unit)(s)})`,
                                    textOverflow: "clip",
                                    [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: {
                                        opacity: 0
                                    },
                                    [`${t}-item-icon, ${o}`]: {
                                        margin: 0,
                                        fontSize: h,
                                        lineHeight: (0, $.unit)(r),
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
                                        color: n
                                    }
                                },
                                [`${t}-item-group-title`]: { ...X.textEllipsis,
                                    paddingInline: g
                                }
                            }
                        }]
                    })(C), V(C, "light"), V(B, "dark"), (({
                        componentCls: e,
                        menuArrowOffset: t,
                        calc: o
                    }) => ({
                        [`${e}-rtl`]: {
                            direction: "rtl"
                        },
                        [`${e}-submenu-rtl`]: {
                            transformOrigin: "100% 0"
                        },
                        [`${e}-rtl${e}-vertical,
    ${e}-submenu-rtl ${e}-vertical`]: {
                            [`${e}-submenu-arrow`]: {
                                "&::before": {
                                    transform: `rotate(-45deg) translateY(${(0,$.unit)(o(t).mul(-1).equal())})`
                                },
                                "&::after": {
                                    transform: `rotate(45deg) translateY(${(0,$.unit)(t)})`
                                }
                            }
                        }
                    }))(C), (0, Y.genCollapseMotion)(C), (0, G.initSlideMotion)(C, "slide-up"), (0, G.initSlideMotion)(C, "slide-down"), (0, _.initZoomMotion)(C, "zoom-big")]
                }, Q, {
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
                })(e, t))(eu, em, !n),
                e$ = (0, m.clsx)(`${eu}-${s}`, L, a),
                eb = o.useMemo(() => {
                    if ("function" == typeof c || en(c)) return c || null;
                    if ("function" == typeof i.expandIcon || en(i.expandIcon)) return i.expandIcon || null;
                    if ("function" == typeof R ? .expandIcon || en(R ? .expandIcon)) return R ? .expandIcon || null;
                    let e = c ? ? i ? .expandIcon ? ? R ? .expandIcon;
                    return (0, T.cloneElement)(e, {
                        className: (0, m.clsx)(`${eu}-submenu-expand-icon`, o.isValidElement(e) ? e.props ? .className : void 0)
                    })
                }, [c, i ? .expandIcon, R ? .expandIcon, eu]),
                eh = o.useMemo(() => ({
                    prefixCls: eu,
                    inlineCollapsed: el || !1,
                    direction: W,
                    firstLevel: !0,
                    theme: s,
                    mode: eo,
                    disableMenuItemTitleTooltip: p,
                    classNames: ed,
                    styles: es
                }), [eu, el, W, p, s, eo, ed, es]);
            return o.createElement(q.Provider, {
                value: null
            }, o.createElement(z.Provider, {
                value: eh
            }, o.createElement(r.default, {
                getPopupContainer: D,
                overflowedIndicator: o.createElement(k.default, null),
                overflowedIndicatorPopupClassName: (0, m.clsx)(eu, `${eu}-${s}`, B),
                classNames: {
                    list: ed.list,
                    listTitle: ed.itemTitle
                },
                styles: {
                    list: es.list,
                    listTitle: es.itemTitle
                },
                mode: eo,
                selectable: er,
                onClick: et,
                ...ee,
                inlineCollapsed: el,
                style: { ...es.root,
                    ...P,
                    ...d
                },
                className: e$,
                prefixCls: eu,
                direction: W,
                defaultMotions: ec,
                expandIcon: eb,
                ref: t,
                rootClassName: (0, m.clsx)(v, eg, i.rootClassName, ep, em, ed.root),
                _internalComponents: ei
            })))
        }),
        ea = (0, o.forwardRef)((e, t) => {
            let r = (0, o.useRef)(null),
                n = o.useContext(C);
            return (0, o.useImperativeHandle)(t, () => ({
                menu: r.current,
                focus: e => {
                    r.current ? .focus(e)
                }
            })), o.createElement(el, {
                ref: r,
                ...e,
                ...n
            })
        });
    ea.Item = W, ea.SubMenu = er, ea.Divider = N, ea.ItemGroup = n.default, e.s(["default", 0, ea], 60699)
}]);