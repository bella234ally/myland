(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 750963, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);
    let o = {
        icon: {
            tag: "svg",
            attrs: {
                "fill-rule": "evenodd",
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
                }
            }]
        },
        name: "close",
        theme: "outlined"
    };
    var n = e.i(406575);

    function l() {
        return (l = Object.assign.bind()).apply(this, arguments)
    }
    let r = t.forwardRef((e, r) => t.createElement(n.default, l({}, e, {
        ref: r,
        icon: o
    })));
    e.s(["default", 0, r], 750963)
}, 618566, (e, t, o) => {
    t.exports = e.r(976562)
}, 876083, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);
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
                    d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                }
            }]
        },
        name: "left",
        theme: "outlined"
    };
    var n = e.i(406575);

    function l() {
        return (l = Object.assign.bind()).apply(this, arguments)
    }
    let r = t.forwardRef((e, r) => t.createElement(n.default, l({}, e, {
        ref: r,
        icon: o
    })));
    e.s(["default", 0, r], 876083)
}, 328235, e => {
    "use strict";
    var t = e.i(649637),
        o = e.i(232839),
        n = e.i(207670),
        l = e.i(271645),
        r = e.i(830731),
        i = e.i(737434);
    let {
        ESC: a,
        TAB: s
    } = r.default, c = (0, l.forwardRef)((e, t) => {
        let {
            overlay: n,
            arrow: r,
            prefixCls: i
        } = e, a = (0, l.useMemo)(() => "function" == typeof n ? n() : n, [n]), s = (0, o.composeRef)(t, (0, o.getNodeRef)(a));
        return l.default.createElement(l.default.Fragment, null, r && l.default.createElement("div", {
            className: `${i}-arrow`
        }), l.default.cloneElement(a, {
            ref: (0, o.supportRef)(a) ? s : void 0
        }))
    }), d = {
        adjustX: 1,
        adjustY: 1
    }, u = [0, 0], p = {
        topLeft: {
            points: ["bl", "tl"],
            overflow: d,
            offset: [0, -4],
            targetOffset: u
        },
        top: {
            points: ["bc", "tc"],
            overflow: d,
            offset: [0, -4],
            targetOffset: u
        },
        topRight: {
            points: ["br", "tr"],
            overflow: d,
            offset: [0, -4],
            targetOffset: u
        },
        bottomLeft: {
            points: ["tl", "bl"],
            overflow: d,
            offset: [0, 4],
            targetOffset: u
        },
        bottom: {
            points: ["tc", "bc"],
            overflow: d,
            offset: [0, 4],
            targetOffset: u
        },
        bottomRight: {
            points: ["tr", "br"],
            overflow: d,
            offset: [0, 4],
            targetOffset: u
        }
    };

    function m() {
        return (m = Object.assign.bind()).apply(this, arguments)
    }
    let g = l.default.forwardRef((e, r) => {
        let {
            arrow: d = !1,
            prefixCls: u = "rc-dropdown",
            transitionName: g,
            animation: f,
            align: $,
            placement: v = "bottomLeft",
            placements: h = p,
            getPopupContainer: b,
            showAction: w,
            hideAction: y,
            overlayClassName: x,
            overlayStyle: C,
            visible: k,
            trigger: E = ["hover"],
            autoFocus: S,
            overlay: N,
            children: R,
            onVisibleChange: z,
            ...M
        } = e, [I, P] = l.default.useState(), A = "visible" in e ? k : I, B = f ? `${u}-${f}` : g, L = l.default.useRef(null), T = l.default.useRef(null), q = l.default.useRef(null);
        l.default.useImperativeHandle(r, () => L.current);
        let O = e => {
            P(e), z ? .(e)
        };
        ! function({
            visible: e,
            triggerRef: t,
            onVisibleChange: o,
            autoFocus: n,
            overlayRef: r
        }) {
            let c = l.useRef(!1),
                d = () => {
                    e && (t.current ? .focus ? .(), o ? .(!1))
                },
                u = () => !!r.current ? .focus && (r.current.focus(), c.current = !0, !0),
                p = e => {
                    switch (e.keyCode) {
                        case a:
                            d();
                            break;
                        case s:
                            {
                                let t = !1;c.current || (t = u()),
                                t ? e.preventDefault() : d()
                            }
                    }
                };
            l.useEffect(() => e ? (window.addEventListener("keydown", p), n && (0, i.default)(u, 3), () => {
                window.removeEventListener("keydown", p), c.current = !1
            }) : () => {
                c.current = !1
            }, [e])
        }({
            visible: A,
            triggerRef: q,
            onVisibleChange: O,
            autoFocus: S,
            overlayRef: T
        });
        let W = () => l.default.createElement(c, {
                ref: T,
                overlay: N,
                prefixCls: u,
                arrow: d
            }),
            H = l.default.cloneElement(R, {
                className: (0, n.clsx)(R.props ? .className, A && (() => {
                    let {
                        openClassName: t
                    } = e;
                    return void 0 !== t ? t : `${u}-open`
                })()),
                ref: (0, o.supportRef)(R) ? (0, o.composeRef)(q, (0, o.getNodeRef)(R)) : void 0
            }),
            D = y;
        return D || -1 === E.indexOf("contextMenu") || (D = ["click"]), l.default.createElement(t.default, m({
            builtinPlacements: h
        }, M, {
            prefixCls: u,
            ref: L,
            popupClassName: (0, n.clsx)(x, {
                [`${u}-show-arrow`]: d
            }),
            popupStyle: C,
            action: E,
            showAction: w,
            hideAction: D,
            popupPlacement: v,
            popupAlign: $,
            popupMotion: {
                motionName: B
            },
            popupVisible: A,
            stretch: (() => {
                let {
                    minOverlayWidthMatchTrigger: t,
                    alignPoint: o
                } = e;
                return "minOverlayWidthMatchTrigger" in e ? t : !o
            })() ? "minWidth" : "",
            popup: "function" == typeof N ? W : W(),
            onOpenChange: O,
            onPopupClick: t => {
                let {
                    onOverlayClick: o
                } = e;
                P(!1), o && o(t)
            },
            getPopupContainer: b
        }), H)
    });
    e.s(["default", 0, g], 328235)
}, 618316, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
        o = e.i(876083),
        n = e.i(631829),
        l = e.i(328235);
    e.i(63335);
    var r = e.i(751095),
        i = e.i(30294),
        a = e.i(580251),
        s = e.i(207670),
        c = e.i(711517),
        d = e.i(122767),
        u = e.i(805984),
        p = e.i(805484),
        m = e.i(763731),
        g = e.i(747656),
        f = e.i(340010),
        $ = e.i(242064),
        v = e.i(321883),
        h = e.i(60699),
        b = e.i(652199),
        w = e.i(104458),
        y = e.i(687385),
        x = e.i(183293),
        C = e.i(777489),
        k = e.i(664142),
        E = e.i(717356),
        S = e.i(320560),
        N = e.i(307358),
        R = e.i(246422),
        z = e.i(838378);
    let M = (0, R.genStyleHooks)("Dropdown", e => {
            let {
                marginXXS: t,
                sizePopupArrow: o,
                paddingXXS: n,
                componentCls: l
            } = e, r = (0, z.mergeToken)(e, {
                menuCls: `${l}-menu`,
                dropdownArrowDistance: e.calc(o).div(2).add(t).equal(),
                dropdownEdgeChildPadding: n
            });
            return [(e => {
                let {
                    componentCls: t,
                    menuCls: o,
                    zIndexPopup: n,
                    dropdownArrowDistance: l,
                    sizePopupArrow: r,
                    antCls: i,
                    iconCls: a,
                    motionDurationMid: s,
                    paddingBlock: c,
                    fontSize: d,
                    dropdownEdgeChildPadding: u,
                    colorTextDisabled: p,
                    fontSizeIcon: m,
                    controlPaddingHorizontal: g,
                    colorBgElevated: f
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
                                insetBlock: e.calc(r).div(2).sub(l).equal(),
                                zIndex: -9999,
                                opacity: 1e-4,
                                content: '""'
                            },
                            "&-menu-vertical": {
                                maxHeight: "100vh",
                                overflowY: "auto"
                            },
                            [`&-trigger${i}-btn`]: {
                                [`& > ${a}-down, & > ${i}-btn-icon > ${a}-down`]: {
                                    fontSize: m
                                }
                            },
                            [`${t}-wrap`]: {
                                position: "relative",
                                [`${i}-btn > ${a}-down`]: {
                                    fontSize: m
                                },
                                [`${a}-down::before`]: {
                                    transition: `transform ${s}`
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
                            [`&${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomLeft,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomLeft,
          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottom,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottom,
          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomRight,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomRight`]: {
                                animationName: k.slideUpIn
                            },
                            [`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]: {
                                animationName: k.slideDownIn
                            },
                            [`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]: {
                                animationName: k.slideUpOut
                            },
                            [`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]: {
                                animationName: k.slideDownOut
                            }
                        }
                    }, (0, S.default)(e, f, {
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
                        [`${t}, ${t}-menu-submenu`]: { ...(0, x.resetComponent)(e),
                            [o]: {
                                padding: u,
                                listStyleType: "none",
                                backgroundColor: f,
                                backgroundClip: "padding-box",
                                borderRadius: e.borderRadiusLG,
                                outline: "none",
                                boxShadow: e.boxShadowSecondary,
                                ...(0, x.genFocusStyle)(e),
                                "&:empty": {
                                    padding: 0,
                                    boxShadow: "none"
                                },
                                [`${o}-item-group-title`]: {
                                    padding: `${(0,y.unit)(c)} ${(0,y.unit)(g)}`,
                                    color: e.colorTextDescription,
                                    transition: `all ${s}`
                                },
                                [`${o}-item`]: {
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                [`${o}-item-icon`]: {
                                    minWidth: d,
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
                                        transition: `all ${s}`,
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
                                    padding: `${(0,y.unit)(c)} ${(0,y.unit)(g)}`,
                                    color: e.colorText,
                                    fontWeight: "normal",
                                    fontSize: d,
                                    lineHeight: e.lineHeight,
                                    cursor: "pointer",
                                    transition: `all ${s}`,
                                    borderRadius: e.borderRadiusSM,
                                    "&:hover, &-active": {
                                        backgroundColor: e.controlItemBgHover
                                    },
                                    ...(0, x.genFocusStyle)(e),
                                    "&-selected": {
                                        color: e.colorPrimary,
                                        backgroundColor: e.controlItemBgActive,
                                        "&:hover, &-active": {
                                            backgroundColor: e.controlItemBgActiveHover
                                        }
                                    },
                                    "&-disabled": {
                                        color: p,
                                        cursor: "not-allowed",
                                        "&:hover": {
                                            color: p,
                                            backgroundColor: f,
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
                                            fontSize: m,
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
                                        color: p,
                                        backgroundColor: f,
                                        cursor: "not-allowed"
                                    }
                                },
                                [`${o}-submenu-selected ${t}-menu-submenu-title`]: {
                                    color: e.colorPrimary
                                }
                            }
                        }
                    },
                    [(0, k.initSlideMotion)(e, "slide-up"), (0, k.initSlideMotion)(e, "slide-down"), (0, C.initMoveMotion)(e, "move-up"), (0, C.initMoveMotion)(e, "move-down"), (0, E.initZoomMotion)(e, "zoom-big")]
                ]
            })(r), (e => {
                let {
                    componentCls: t,
                    menuCls: o,
                    colorError: n,
                    colorTextLightSolid: l
                } = e, r = `${o}-item`;
                return {
                    [`${t}, ${t}-menu-submenu`]: {
                        [`${o} ${r}`]: {
                            [`&${r}-danger:not(${r}-disabled)`]: {
                                color: n,
                                "&:hover": {
                                    color: l,
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
            ...(0, S.getArrowOffsetToken)({
                contentRadius: e.borderRadiusLG,
                limitVerticalRadius: !0
            }),
            ...(0, N.getArrowToken)(e)
        }), {
            resetStyle: !1
        }),
        I = e => {
            let {
                menu: p,
                arrow: y,
                prefixCls: x,
                children: C,
                trigger: k,
                disabled: E,
                dropdownRender: S,
                popupRender: N,
                getPopupContainer: R,
                overlayClassName: z,
                rootClassName: I,
                overlayStyle: P,
                open: A,
                onOpenChange: B,
                mouseEnterDelay: L = .15,
                mouseLeaveDelay: T = .1,
                autoAdjustOverflow: q = !0,
                placement: O = "",
                transitionName: W,
                classNames: H,
                styles: D,
                destroyPopupOnHide: F,
                destroyOnHidden: j
            } = e, {
                getPrefixCls: X,
                direction: G,
                getPopupContainer: V,
                className: _,
                style: U,
                classNames: K,
                styles: Y
            } = (0, $.useComponentConfig)("dropdown"), Z = { ...e,
                mouseEnterDelay: L,
                mouseLeaveDelay: T,
                autoAdjustOverflow: q
            }, [J, Q] = (0, c.useMergeSemantic)([K, H], [Y, D], {
                props: Z
            }), ee = { ...U,
                ...P,
                ...Q.root
            }, et = N || S;
            (0, g.devUseWarning)("Dropdown");
            let eo = t.useMemo(() => {
                    let e = X();
                    return void 0 !== W ? W : O.includes("top") ? `${e}-slide-down` : `${e}-slide-up`
                }, [X, O, W]),
                en = t.useMemo(() => O ? O.includes("Center") ? O.slice(0, O.indexOf("Center")) : O : "rtl" === G ? "bottomRight" : "bottomLeft", [O, G]),
                el = X("dropdown", x),
                er = (0, v.default)(el),
                [ei, ea] = M(el, er),
                [, es] = (0, w.useToken)(),
                ec = t.Children.only("object" != typeof C && "function" != typeof C || null === C ? t.createElement("span", null, C) : C),
                ed = (0, m.cloneElement)(ec, {
                    className: (0, s.clsx)(`${el}-trigger`, {
                        [`${el}-rtl`]: "rtl" === G
                    }, ec.props.className),
                    disabled: ec.props.disabled ? ? E
                }),
                eu = E ? [] : k,
                ep = !!eu ? .includes("contextMenu"),
                [em, eg] = (0, i.useControlledState)(!1, A),
                ef = (0, a.useEvent)(e => {
                    B ? .(e, {
                        source: "trigger"
                    }), eg(e)
                }),
                e$ = (0, s.clsx)(z, I, ei, ea, er, _, J.root, {
                    [`${el}-rtl`]: "rtl" === G
                }),
                ev = (0, u.default)({
                    arrowPointAtCenter: "object" == typeof y && y.pointAtCenter,
                    autoAdjustOverflow: q,
                    offset: es.marginXXS,
                    arrowWidth: y ? es.sizePopupArrow : 0,
                    borderRadius: es.borderRadius
                }),
                eh = (0, a.useEvent)(() => {
                    p ? .selectable && p ? .multiple || (B ? .(!1, {
                        source: "menu"
                    }), eg(!1))
                }),
                [eb, ew] = (0, d.useZIndex)("Dropdown", ee.zIndex),
                ey = t.createElement(l.default, {
                    alignPoint: ep,
                    ...(0, r.omit)(e, ["rootClassName", "onOpenChange"]),
                    mouseEnterDelay: L,
                    mouseLeaveDelay: T,
                    visible: em,
                    builtinPlacements: ev,
                    arrow: !!y,
                    overlayClassName: e$,
                    prefixCls: el,
                    getPopupContainer: R || V,
                    transitionName: eo,
                    trigger: eu,
                    overlay: () => {
                        let e, l = (0, r.omit)(J, ["root"]),
                            i = (0, r.omit)(Q, ["root"]);
                        return p ? .items && (e = t.createElement(h.default, { ...p,
                            classNames: { ...l,
                                subMenu: { ...l
                                }
                            },
                            styles: { ...i,
                                subMenu: { ...i
                                }
                            }
                        })), et && (e = et(e)), e = t.Children.only("string" == typeof e ? t.createElement("span", null, e) : e), t.createElement(b.OverrideProvider, {
                            prefixCls: `${el}-menu`,
                            rootClassName: (0, s.clsx)(ea, er),
                            expandIcon: t.createElement("span", {
                                className: `${el}-menu-submenu-arrow`
                            }, "rtl" === G ? t.createElement(o.default, {
                                className: `${el}-menu-submenu-arrow-icon`
                            }) : t.createElement(n.default, {
                                className: `${el}-menu-submenu-arrow-icon`
                            })),
                            mode: "vertical",
                            selectable: !1,
                            onClick: eh,
                            validator: ({
                                mode: e
                            }) => {}
                        }, e)
                    },
                    placement: en,
                    onVisibleChange: ef,
                    overlayStyle: { ...ee,
                        zIndex: eb
                    },
                    autoDestroy: j ? ? F
                }, ed);
            return eb && (ey = t.createElement(f.default.Provider, {
                value: ew
            }, ey)), ey
        },
        P = (0, p.default)(I, "align", void 0, "dropdown", e => e);
    I._InternalPanelDoNotUseOrYouWillBeFired = e => t.createElement(P, { ...e
    }, t.createElement("span", null)), e.s(["default", 0, I], 618316)
}, 185793, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
        o = e.i(207670),
        n = e.i(711517),
        l = e.i(242064);
    let r = e => {
        let {
            prefixCls: n,
            className: l,
            style: r,
            size: i,
            shape: a
        } = e, s = (0, o.clsx)({
            [`${n}-lg`]: "large" === i,
            [`${n}-sm`]: "small" === i
        }), c = (0, o.clsx)({
            [`${n}-circle`]: "circle" === a,
            [`${n}-square`]: "square" === a,
            [`${n}-round`]: "round" === a
        }), d = t.useMemo(() => "number" == typeof i ? {
            width: i,
            height: i,
            lineHeight: `${i}px`
        } : {}, [i]);
        return t.createElement("span", {
            className: (0, o.clsx)(n, s, c, l),
            style: { ...d,
                ...r
            }
        })
    };
    var i = e.i(75940),
        a = e.i(687385),
        s = e.i(246422),
        c = e.i(838378);
    let d = new i.Keyframes("ant-skeleton-loading", {
            "0%": {
                backgroundPosition: "100% 50%"
            },
            "100%": {
                backgroundPosition: "0 50%"
            }
        }),
        u = e => ({
            height: e,
            lineHeight: (0, a.unit)(e)
        }),
        p = e => ({
            width: e,
            ...u(e)
        }),
        m = (e, t) => ({
            width: t(e).mul(5).equal(),
            minWidth: t(e).mul(5).equal(),
            ...u(e)
        }),
        g = e => {
            let {
                gradientFromColor: t,
                borderRadiusSM: o,
                imageSizeBase: n,
                calc: l
            } = e;
            return {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                verticalAlign: "middle",
                background: t,
                borderRadius: o,
                ...p(l(n).mul(2).equal())
            }
        },
        f = (e, t, o) => {
            let {
                skeletonButtonCls: n
            } = e;
            return {
                [`${o}${n}-circle`]: {
                    width: t,
                    minWidth: t,
                    borderRadius: "50%"
                },
                [`${o}${n}-round`]: {
                    borderRadius: t
                }
            }
        },
        $ = (e, t) => ({
            width: t(e).mul(2).equal(),
            minWidth: t(e).mul(2).equal(),
            ...u(e)
        }),
        v = (0, s.genStyleHooks)("Skeleton", e => {
            let {
                componentCls: t,
                calc: o
            } = e;
            return (e => {
                let {
                    componentCls: t,
                    skeletonAvatarCls: o,
                    skeletonTitleCls: n,
                    skeletonParagraphCls: l,
                    skeletonButtonCls: r,
                    skeletonInputCls: i,
                    skeletonNodeCls: a,
                    skeletonImageCls: s,
                    controlHeight: c,
                    controlHeightLG: u,
                    controlHeightSM: v,
                    gradientFromColor: h,
                    padding: b,
                    marginSM: w,
                    borderRadius: y,
                    titleHeight: x,
                    blockRadius: C,
                    paragraphLiHeight: k,
                    controlHeightXS: E,
                    paragraphMarginTop: S
                } = e;
                return {
                    [t]: {
                        display: "table",
                        width: "100%",
                        [`${t}-header`]: {
                            display: "table-cell",
                            paddingInlineEnd: b,
                            verticalAlign: "top",
                            [o]: {
                                display: "inline-block",
                                verticalAlign: "top",
                                background: h,
                                ...p(c)
                            },
                            [`${o}-circle`]: {
                                borderRadius: "50%"
                            },
                            [`${o}-lg`]: { ...p(u)
                            },
                            [`${o}-sm`]: { ...p(v)
                            }
                        },
                        [`${t}-section`]: {
                            display: "table-cell",
                            width: "100%",
                            verticalAlign: "top",
                            [n]: {
                                width: "100%",
                                height: x,
                                background: h,
                                borderRadius: C,
                                [`+ ${l}`]: {
                                    marginBlockStart: v
                                }
                            },
                            [l]: {
                                padding: 0,
                                "> li": {
                                    width: "100%",
                                    height: k,
                                    listStyle: "none",
                                    background: h,
                                    borderRadius: C,
                                    "+ li": {
                                        marginBlockStart: E
                                    }
                                }
                            },
                            [`${l}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
                                width: "61%"
                            }
                        },
                        [`&-round ${t}-section`]: {
                            [`${n}, ${l} > li`]: {
                                borderRadius: y
                            }
                        }
                    },
                    [`${t}-with-avatar ${t}-section`]: {
                        [n]: {
                            marginBlockStart: w,
                            [`+ ${l}`]: {
                                marginBlockStart: S
                            }
                        }
                    },
                    [`${t}${t}-element`]: {
                        display: "inline-block",
                        width: "auto",
                        ...(e => {
                            let {
                                borderRadiusSM: t,
                                skeletonButtonCls: o,
                                controlHeight: n,
                                controlHeightLG: l,
                                controlHeightSM: r,
                                gradientFromColor: i,
                                calc: a
                            } = e;
                            return {
                                [o]: {
                                    display: "inline-block",
                                    verticalAlign: "top",
                                    background: i,
                                    borderRadius: t,
                                    width: a(n).mul(2).equal(),
                                    minWidth: a(n).mul(2).equal(),
                                    ...$(n, a)
                                },
                                ...f(e, n, o),
                                [`${o}-lg`]: { ...$(l, a)
                                },
                                ...f(e, l, `${o}-lg`),
                                [`${o}-sm`]: { ...$(r, a)
                                },
                                ...f(e, r, `${o}-sm`)
                            }
                        })(e),
                        ...(e => {
                            let {
                                skeletonAvatarCls: t,
                                gradientFromColor: o,
                                controlHeight: n,
                                controlHeightLG: l,
                                controlHeightSM: r
                            } = e;
                            return {
                                [t]: {
                                    display: "inline-block",
                                    verticalAlign: "top",
                                    background: o,
                                    ...p(n)
                                },
                                [`${t}${t}-circle`]: {
                                    borderRadius: "50%"
                                },
                                [`${t}${t}-lg`]: { ...p(l)
                                },
                                [`${t}${t}-sm`]: { ...p(r)
                                }
                            }
                        })(e),
                        ...(e => {
                            let {
                                controlHeight: t,
                                borderRadiusSM: o,
                                skeletonInputCls: n,
                                controlHeightLG: l,
                                controlHeightSM: r,
                                gradientFromColor: i,
                                calc: a
                            } = e;
                            return {
                                [n]: {
                                    display: "inline-block",
                                    verticalAlign: "top",
                                    background: i,
                                    borderRadius: o,
                                    ...m(t, a)
                                },
                                [`${n}-lg`]: { ...m(l, a)
                                },
                                [`${n}-sm`]: { ...m(r, a)
                                }
                            }
                        })(e),
                        ...{
                            [e.skeletonNodeCls]: { ...g(e)
                            }
                        },
                        ...(e => {
                            let {
                                skeletonImageCls: t,
                                imageSizeBase: o,
                                calc: n
                            } = e;
                            return {
                                [t]: { ...g(e),
                                    [`${t}-path`]: {
                                        fill: "#bfbfbf"
                                    },
                                    [`${t}-svg`]: { ...p(o),
                                        maxWidth: n(o).mul(4).equal(),
                                        maxHeight: n(o).mul(4).equal()
                                    },
                                    [`${t}-svg${t}-svg-circle`]: {
                                        borderRadius: "50%"
                                    }
                                },
                                [`${t}${t}-circle`]: {
                                    borderRadius: "50%"
                                }
                            }
                        })(e)
                    },
                    [`${t}${t}-block`]: {
                        width: "100%",
                        [r]: {
                            width: "100%"
                        },
                        [i]: {
                            width: "100%"
                        }
                    },
                    [`${t}${t}-active`]: {
                        [`
        ${n},
        ${l} > li,
        ${o},
        ${r},
        ${i},
        ${a},
        ${s}
      `]: { ...{
                                background: e.skeletonLoadingBackground,
                                backgroundSize: "400% 100%",
                                animationName: d,
                                animationDuration: e.skeletonLoadingMotionDuration,
                                animationTimingFunction: "ease",
                                animationIterationCount: "infinite"
                            }
                        }
                    }
                }
            })((0, c.mergeToken)(e, {
                skeletonAvatarCls: `${t}-avatar`,
                skeletonTitleCls: `${t}-title`,
                skeletonParagraphCls: `${t}-paragraph`,
                skeletonButtonCls: `${t}-button`,
                skeletonInputCls: `${t}-input`,
                skeletonNodeCls: `${t}-node`,
                skeletonImageCls: `${t}-image`,
                imageSizeBase: o(e.controlHeight).mul(1.5).equal(),
                borderRadius: 100,
                skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
                skeletonLoadingMotionDuration: "1.4s"
            }))
        }, e => {
            let {
                colorFillContent: t,
                colorFill: o
            } = e;
            return {
                color: t,
                colorGradientEnd: o,
                gradientFromColor: t,
                gradientToColor: o,
                titleHeight: e.controlHeight / 2,
                blockRadius: e.borderRadiusSM,
                paragraphMarginTop: e.marginLG + e.marginXXS,
                paragraphLiHeight: e.controlHeight / 2
            }
        }, {
            deprecatedTokens: [
                ["color", "gradientFromColor"],
                ["colorGradientEnd", "gradientToColor"]
            ]
        }),
        h = e => {
            let {
                prefixCls: n,
                className: r,
                classNames: i,
                rootClassName: a,
                internalClassName: s,
                style: c,
                styles: d,
                active: u,
                children: p
            } = e, {
                getPrefixCls: m
            } = t.useContext(l.ConfigContext), g = m("skeleton", n), [f, $] = v(g), h = (0, o.clsx)(g, `${g}-element`, {
                [`${g}-active`]: u
            }, f, i ? .root, r, a, $);
            return t.createElement("div", {
                className: h,
                style: d ? .root
            }, t.createElement("div", {
                className: (0, o.clsx)(i ? .content, s || `${g}-node`),
                style: { ...d ? .content,
                    ...c
                }
            }, p))
        },
        b = e => {
            let {
                prefixCls: n,
                className: l,
                style: r,
                rows: i = 0
            } = e, a = Array.from({
                length: i
            }).map((o, n) => t.createElement("li", {
                key: n,
                style: {
                    width: ((e, t) => {
                        let {
                            width: o,
                            rows: n = 2
                        } = t;
                        return Array.isArray(o) ? o[e] : n - 1 === e ? o : void 0
                    })(n, e)
                }
            }));
            return t.createElement("ul", {
                className: (0, o.clsx)(n, l),
                style: r
            }, a)
        },
        w = ({
            prefixCls: e,
            className: n,
            width: l,
            style: r
        }) => t.createElement("h3", {
            className: (0, o.clsx)(e, n),
            style: {
                width: l,
                ...r
            }
        });

    function y(e) {
        return e && "object" == typeof e ? e : {}
    }
    let x = e => {
        let {
            prefixCls: i,
            loading: a,
            className: s,
            rootClassName: c,
            classNames: d,
            style: u,
            styles: p,
            children: m,
            avatar: g = !1,
            title: f = !0,
            paragraph: $ = !0,
            active: h,
            round: x
        } = e, {
            getPrefixCls: C,
            direction: k,
            className: E,
            style: S,
            classNames: N,
            styles: R
        } = (0, l.useComponentConfig)("skeleton"), z = C("skeleton", i), [M, I] = v(z), P = { ...e,
            avatar: g,
            title: f,
            paragraph: $
        }, [A, B] = (0, n.useMergeSemantic)([N, d], [R, p], {
            props: P
        });
        if (a || !("loading" in e)) {
            let e, n, l = !!g,
                i = !!f,
                a = !!$;
            if (l) {
                let n = {
                    className: A.avatar,
                    prefixCls: `${z}-avatar`,
                    ...i && !a ? {
                        size: "large",
                        shape: "square"
                    } : {
                        size: "large",
                        shape: "circle"
                    },
                    ...y(g),
                    style: B.avatar
                };
                e = t.createElement("div", {
                    className: (0, o.clsx)(A.header, `${z}-header`),
                    style: B.header
                }, t.createElement(r, { ...n
                }))
            }
            if (i || a) {
                let e, r;
                if (i) {
                    let o = {
                        className: A.title,
                        prefixCls: `${z}-title`,
                        ...!l && a ? {
                            width: "38%"
                        } : l && a ? {
                            width: "50%"
                        } : {},
                        ...y(f),
                        style: B.title
                    };
                    e = t.createElement(w, { ...o
                    })
                }
                if (a) {
                    let e, o = {
                        className: A.paragraph,
                        prefixCls: `${z}-paragraph`,
                        ...(e = {}, (!l || !i) && (e.width = "61%"), !l && i ? e.rows = 3 : e.rows = 2, e),
                        ...y($),
                        style: B.paragraph
                    };
                    r = t.createElement(b, { ...o
                    })
                }
                n = t.createElement("div", {
                    className: (0, o.clsx)(A.section, `${z}-section`),
                    style: B.section
                }, e, r)
            }
            let d = (0, o.clsx)(z, {
                [`${z}-with-avatar`]: l,
                [`${z}-active`]: h,
                [`${z}-rtl`]: "rtl" === k,
                [`${z}-round`]: x
            }, A.root, E, s, c, M, I);
            return t.createElement("div", {
                className: d,
                style: { ...B.root,
                    ...S,
                    ...u
                }
            }, e, n)
        }
        return m ? ? null
    };
    x.Button = e => {
        let {
            prefixCls: n,
            className: i,
            rootClassName: a,
            classNames: s,
            active: c,
            style: d,
            styles: u,
            block: p = !1,
            size: m = "default",
            ...g
        } = e, {
            getPrefixCls: f
        } = t.useContext(l.ConfigContext), $ = f("skeleton", n), [h, b] = v($), w = (0, o.clsx)($, `${$}-element`, {
            [`${$}-active`]: c,
            [`${$}-block`]: p
        }, s ? .root, i, a, h, b);
        return t.createElement("div", {
            className: w,
            style: u ? .root
        }, t.createElement(r, {
            prefixCls: `${$}-button`,
            className: s ? .content,
            style: { ...u ? .content,
                ...d
            },
            size: m,
            ...g
        }))
    }, x.Avatar = e => {
        let {
            prefixCls: n,
            className: i,
            classNames: a,
            rootClassName: s,
            active: c,
            style: d,
            styles: u,
            shape: p = "circle",
            size: m = "default",
            ...g
        } = e, {
            getPrefixCls: f
        } = t.useContext(l.ConfigContext), $ = f("skeleton", n), [h, b] = v($), w = (0, o.clsx)($, `${$}-element`, {
            [`${$}-active`]: c
        }, a ? .root, i, s, h, b);
        return t.createElement("div", {
            className: w,
            style: u ? .root
        }, t.createElement(r, {
            prefixCls: `${$}-avatar`,
            className: a ? .content,
            style: { ...u ? .content,
                ...d
            },
            shape: p,
            size: m,
            ...g
        }))
    }, x.Input = e => {
        let {
            prefixCls: n,
            className: i,
            classNames: a,
            rootClassName: s,
            active: c,
            block: d,
            style: u,
            styles: p,
            size: m = "default",
            ...g
        } = e, {
            getPrefixCls: f
        } = t.useContext(l.ConfigContext), $ = f("skeleton", n), [h, b] = v($), w = (0, o.clsx)($, `${$}-element`, {
            [`${$}-active`]: c,
            [`${$}-block`]: d
        }, a ? .root, i, s, h, b);
        return t.createElement("div", {
            className: w,
            style: p ? .root
        }, t.createElement(r, {
            prefixCls: `${$}-input`,
            className: a ? .content,
            style: { ...p ? .content,
                ...u
            },
            size: m,
            ...g
        }))
    }, x.Image = e => {
        let {
            getPrefixCls: o
        } = t.useContext(l.ConfigContext), n = o("skeleton", e.prefixCls);
        return t.createElement(h, { ...e,
            internalClassName: `${n}-image`
        }, t.createElement("svg", {
            viewBox: "0 0 1098 1024",
            xmlns: "http://www.w3.org/2000/svg",
            className: `${n}-image-svg`
        }, t.createElement("title", null, "Image placeholder"), t.createElement("path", {
            d: "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
            className: `${n}-image-path`
        })))
    }, x.Node = h, e.s(["default", 0, x], 185793)
}, 829672, 836938, 310730, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);
    e.i(63335);
    var o = e.i(30294),
        n = e.i(830731),
        l = e.i(207670);
    let r = e => e ? "function" == typeof e ? e() : e : null;
    e.s(["getRenderPropValue", 0, r], 836938);
    var i = e.i(711517),
        a = e.i(613541),
        s = e.i(763731),
        c = e.i(242064),
        d = e.i(491816),
        u = e.i(496158);
    e.i(337908);
    var p = e.i(492656),
        m = e.i(183293),
        g = e.i(717356),
        f = e.i(320560),
        $ = e.i(307358),
        v = e.i(246422),
        h = e.i(838378),
        b = e.i(617933);
    let w = (0, v.genStyleHooks)("Popover", e => {
            let {
                colorBgElevated: t,
                colorText: o
            } = e, n = (0, h.mergeToken)(e, {
                popoverBg: t,
                popoverColor: o
            });
            return [(e => {
                let {
                    componentCls: t,
                    popoverColor: o,
                    titleMinWidth: n,
                    fontWeightStrong: l,
                    innerPadding: r,
                    boxShadowSecondary: i,
                    colorTextHeading: a,
                    borderRadiusLG: s,
                    zIndexPopup: c,
                    titleMarginBottom: d,
                    colorBgElevated: u,
                    popoverBg: p,
                    titleBorderBottom: g,
                    innerContentPadding: $,
                    titlePadding: v
                } = e;
                return [{
                    [t]: { ...(0, m.resetComponent)(e),
                        position: "absolute",
                        top: 0,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        zIndex: c,
                        fontWeight: "normal",
                        whiteSpace: "normal",
                        textAlign: "start",
                        cursor: "auto",
                        userSelect: "text",
                        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
                        transformOrigin: "var(--valid-offset-x, 50%) var(--arrow-y, 50%)",
                        "--antd-arrow-background-color": u,
                        width: "max-content",
                        maxWidth: "100vw",
                        "&-rtl": {
                            direction: "rtl"
                        },
                        "&-hidden": {
                            display: "none"
                        },
                        [`${t}-content`]: {
                            position: "relative"
                        },
                        [`${t}-container`]: {
                            backgroundColor: p,
                            backgroundClip: "padding-box",
                            borderRadius: s,
                            boxShadow: i,
                            padding: r
                        },
                        [`${t}-title`]: {
                            minWidth: n,
                            marginBottom: d,
                            color: a,
                            fontWeight: l,
                            borderBottom: g,
                            padding: v
                        },
                        [`${t}-content`]: {
                            color: o,
                            padding: $
                        }
                    }
                }, (0, f.default)(e, "var(--antd-arrow-background-color)"), {
                    [`${t}-pure`]: {
                        position: "relative",
                        maxWidth: "none",
                        margin: e.sizePopupArrow,
                        display: "inline-block"
                    }
                }]
            })(n), (e => {
                let {
                    componentCls: t
                } = e;
                return {
                    [t]: b.PresetColors.map(o => {
                        let n = e[`${o}6`];
                        return {
                            [`&${t}-${o}`]: {
                                "--antd-arrow-background-color": n,
                                [`${t}-inner`]: {
                                    backgroundColor: n
                                },
                                [`${t}-arrow`]: {
                                    background: "transparent"
                                }
                            }
                        }
                    })
                }
            })(n), (0, g.initZoomMotion)(n, "zoom-big")]
        }, e => {
            let {
                lineWidth: t,
                controlHeight: o,
                fontHeight: n,
                padding: l,
                wireframe: r,
                zIndexPopupBase: i,
                borderRadiusLG: a,
                marginXS: s,
                lineType: c,
                colorSplit: d,
                paddingSM: u
            } = e, p = o - n;
            return {
                titleMinWidth: 177,
                zIndexPopup: i + 30,
                ...(0, $.getArrowToken)(e),
                ...(0, f.getArrowOffsetToken)({
                    contentRadius: a,
                    limitVerticalRadius: !0
                }),
                innerPadding: 12 * !r,
                titleMarginBottom: r ? 0 : s,
                titlePadding: r ? `${p/2}px ${l}px ${p/2-t}px` : 0,
                titleBorderBottom: r ? `${t}px ${c} ${d}` : "none",
                innerContentPadding: r ? `${u}px ${l}px` : 0
            }
        }, {
            resetStyle: !1,
            deprecatedTokens: [
                ["width", "titleMinWidth"],
                ["minWidth", "titleMinWidth"]
            ]
        }),
        y = e => {
            let {
                title: o,
                content: n,
                prefixCls: r,
                classNames: i,
                styles: a
            } = e;
            return o || n ? t.createElement(t.Fragment, null, o && t.createElement("div", {
                className: (0, l.clsx)(`${r}-title`, i ? .title),
                style: a ? .title
            }, o), n && t.createElement("div", {
                className: (0, l.clsx)(`${r}-content`, i ? .content),
                style: a ? .content
            }, n)) : null
        },
        x = e => {
            let {
                hashId: o,
                prefixCls: n,
                className: a,
                style: s,
                placement: c = "top",
                title: d,
                content: u,
                children: m,
                classNames: g,
                styles: f
            } = e, $ = r(d), v = r(u), h = { ...e,
                placement: c
            }, [b, w] = (0, i.useMergeSemantic)([g], [f], {
                props: h
            }), x = (0, l.clsx)(o, n, `${n}-pure`, `${n}-placement-${c}`, a);
            return t.createElement("div", {
                className: x,
                style: s
            }, t.createElement("div", {
                className: `${n}-arrow`
            }), t.createElement(p.Popup, { ...e,
                className: o,
                prefixCls: n,
                classNames: b,
                styles: w
            }, m || t.createElement(y, {
                prefixCls: n,
                title: $,
                content: v,
                classNames: b,
                styles: w
            })))
        },
        C = e => {
            let {
                prefixCls: o,
                className: n,
                ...r
            } = e, {
                getPrefixCls: i
            } = t.useContext(c.ConfigContext), a = i("popover", o), [s, d] = w(a);
            return t.createElement(x, { ...r,
                prefixCls: a,
                hashId: s,
                className: (0, l.clsx)(n, d)
            })
        };
    e.s(["Overlay", 0, y, "RawPurePanel", 0, x, "default", 0, C], 310730);
    let k = t.forwardRef((e, p) => {
        let {
            prefixCls: m,
            title: g,
            content: f,
            overlayClassName: $,
            placement: v = "top",
            trigger: h,
            children: b,
            mouseEnterDelay: x = .1,
            mouseLeaveDelay: C = .1,
            onOpenChange: k,
            overlayStyle: E = {},
            styles: S,
            classNames: N,
            motion: R,
            arrow: z,
            ...M
        } = e, {
            getPrefixCls: I,
            className: P,
            style: A,
            classNames: B,
            styles: L,
            arrow: T,
            trigger: q
        } = (0, c.useComponentConfig)("popover"), O = I("popover", m), [W, H] = w(O), D = I(), F = (0, u.default)(z, T), j = h || q || "hover", X = { ...e,
            placement: v,
            trigger: j,
            mouseEnterDelay: x,
            mouseLeaveDelay: C,
            overlayStyle: E,
            styles: S,
            classNames: N
        }, [G, V] = (0, i.useMergeSemantic)([B, N], [L, S], {
            props: X
        }), _ = (0, l.clsx)($, W, H, P, G.root), [U, K] = (0, o.useControlledState)(e.defaultOpen ? ? !1, e.open), Y = (e, t) => {
            K(e), k ? .(e, t)
        }, Z = r(g), J = r(f);
        return t.createElement(d.default, {
            unique: !1,
            arrow: F,
            placement: v,
            trigger: j,
            mouseEnterDelay: x,
            mouseLeaveDelay: C,
            ...M,
            prefixCls: O,
            classNames: {
                root: _,
                container: G.container,
                arrow: G.arrow
            },
            styles: {
                root: { ...V.root,
                    ...A,
                    ...E
                },
                container: V.container,
                arrow: V.arrow
            },
            ref: p,
            open: U,
            onOpenChange: e => {
                Y(e)
            },
            overlay: Z || J ? t.createElement(y, {
                prefixCls: O,
                title: Z,
                content: J,
                classNames: G,
                styles: V
            }) : null,
            motion: {
                motionName: (0, a.getTransitionName)(D, "zoom-big", "string" == typeof R ? .motionName ? R ? .motionName : void 0)
            },
            "data-popover-inject": !0
        }, (0, s.cloneElement)(b, {
            onKeyDown: e => {
                (0, t.isValidElement)(b) && b ? .props.onKeyDown ? .(e), e.keyCode === n.default.ESC && Y(!1, e)
            }
        }))
    });
    k._InternalPanelDoNotUseOrYouWillBeFired = C, e.s(["default", 0, k], 829672)
}, 965760, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
        o = e.i(978052),
        n = e.i(232839),
        l = e.i(207670),
        r = e.i(908206),
        i = e.i(242064),
        a = e.i(321883),
        s = e.i(517455),
        c = e.i(150073);
    let d = t.createContext({});
    var u = e.i(687385),
        p = e.i(183293),
        m = e.i(246422),
        g = e.i(838378);
    let f = (0, m.genStyleHooks)("Avatar", e => {
            let {
                colorTextLightSolid: t,
                colorTextPlaceholder: o
            } = e, n = (0, g.mergeToken)(e, {
                avatarBg: o,
                avatarColor: t
            });
            return [(e => {
                let {
                    antCls: t,
                    componentCls: o,
                    iconCls: n,
                    avatarBg: l,
                    avatarColor: r,
                    containerSize: i,
                    containerSizeLG: a,
                    containerSizeSM: s,
                    textFontSize: c,
                    textFontSizeLG: d,
                    textFontSizeSM: m,
                    iconFontSize: g,
                    iconFontSizeLG: f,
                    iconFontSizeSM: $,
                    borderRadius: v,
                    borderRadiusLG: h,
                    borderRadiusSM: b,
                    lineWidth: w,
                    lineType: y
                } = e, x = (e, t, l, r) => ({
                    width: e,
                    height: e,
                    borderRadius: "50%",
                    fontSize: t,
                    [`&${o}-square`]: {
                        borderRadius: r
                    },
                    [`&${o}-icon`]: {
                        fontSize: l,
                        [`> ${n}`]: {
                            margin: 0
                        }
                    }
                });
                return {
                    [o]: { ...(0, p.resetComponent)(e),
                        position: "relative",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        color: r,
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        verticalAlign: "middle",
                        background: l,
                        border: `${(0,u.unit)(w)} ${y} transparent`,
                        "&-image": {
                            background: "transparent"
                        },
                        [`${t}-image-img`]: {
                            display: "block"
                        },
                        ...x(i, c, g, v),
                        "&-lg": { ...x(a, d, f, h)
                        },
                        "&-sm": { ...x(s, m, $, b)
                        },
                        "> img": {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }
                    }
                }
            })(n), (e => {
                let {
                    componentCls: t,
                    groupBorderColor: o,
                    groupOverlapping: n,
                    groupSpace: l
                } = e;
                return {
                    [`${t}-group`]: {
                        display: "inline-flex",
                        [t]: {
                            borderColor: o
                        },
                        "> *:not(:first-child)": {
                            marginInlineStart: n
                        }
                    },
                    [`${t}-group-popover`]: {
                        [`${t} + ${t}`]: {
                            marginInlineStart: l
                        }
                    }
                }
            })(n)]
        }, e => {
            let {
                controlHeight: t,
                controlHeightLG: o,
                controlHeightSM: n,
                fontSize: l,
                fontSizeLG: r,
                fontSizeXL: i,
                fontSizeHeading3: a,
                marginXS: s,
                marginXXS: c,
                colorBorderBg: d
            } = e;
            return {
                containerSize: t,
                containerSizeLG: o,
                containerSizeSM: n,
                textFontSize: l,
                textFontSizeLG: l,
                textFontSizeSM: l,
                iconFontSize: Math.round((r + i) / 2),
                iconFontSizeLG: a,
                iconFontSizeSM: l,
                groupSpace: c,
                groupOverlapping: -s,
                groupBorderColor: d
            }
        }),
        $ = t.forwardRef((e, u) => {
            let p, {
                    prefixCls: m,
                    shape: g,
                    size: $,
                    src: v,
                    srcSet: h,
                    icon: b,
                    className: w,
                    rootClassName: y,
                    style: x,
                    alt: C,
                    draggable: k,
                    children: E,
                    crossOrigin: S,
                    gap: N = 4,
                    onError: R,
                    ...z
                } = e,
                [M, I] = t.useState(1),
                [P, A] = t.useState(!1),
                [B, L] = t.useState(!0),
                T = t.useRef(null),
                q = t.useRef(null),
                O = (0, n.composeRef)(u, T),
                {
                    getPrefixCls: W,
                    className: H,
                    style: D
                } = (0, i.useComponentConfig)("avatar"),
                F = t.useContext(d),
                j = () => {
                    if (!q.current || !T.current) return;
                    let e = q.current.offsetWidth,
                        t = T.current.offsetWidth;
                    0 !== e && 0 !== t && 2 * N < t && I(t - 2 * N < e ? (t - 2 * N) / e : 1)
                };
            t.useEffect(() => {
                A(!0)
            }, []), t.useEffect(() => {
                L(!0), I(1)
            }, [v]), t.useEffect(j, [N]);
            let X = (0, s.default)(e => $ ? ? F ? .size ? ? e ? ? "default"),
                G = Object.keys("object" == typeof X && X || {}).some(e => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(e)),
                V = (0, c.default)(G),
                _ = t.useMemo(() => {
                    if ("object" != typeof X) return {};
                    let e = X[r.responsiveArray.find(e => V[e])];
                    return e ? {
                        width: e,
                        height: e,
                        fontSize: e && (b || E) ? e / 2 : 18
                    } : {}
                }, [V, X, b, E]),
                U = W("avatar", m),
                K = (0, a.default)(U),
                [Y, Z] = f(U, K),
                J = (0, l.clsx)({
                    [`${U}-lg`]: "large" === X,
                    [`${U}-sm`]: "small" === X
                }),
                Q = t.isValidElement(v),
                ee = g || F ? .shape || "circle",
                et = (0, l.clsx)(U, J, H, `${U}-${ee}`, {
                    [`${U}-image`]: Q || v && B,
                    [`${U}-icon`]: !!b
                }, Z, K, w, y, Y),
                eo = "number" == typeof X ? {
                    width: X,
                    height: X,
                    fontSize: b ? X / 2 : 18
                } : {};
            if ("string" == typeof v && B) p = t.createElement("img", {
                src: v,
                draggable: k,
                srcSet: h,
                onError: () => {
                    !1 !== R ? .() && L(!1)
                },
                alt: C,
                crossOrigin: S
            });
            else if (Q) p = v;
            else if (b) p = b;
            else if (P || 1 !== M) {
                let e = `scale(${M})`;
                p = t.createElement(o.default, {
                    onResize: j
                }, t.createElement("span", {
                    className: `${U}-string`,
                    ref: q,
                    style: {
                        msTransform: e,
                        WebkitTransform: e,
                        transform: e
                    }
                }, E))
            } else p = t.createElement("span", {
                className: `${U}-string`,
                style: {
                    opacity: 0
                },
                ref: q
            }, E);
            return t.createElement("span", { ...z,
                style: { ...eo,
                    ..._,
                    ...D,
                    ...x
                },
                className: et,
                ref: O
            }, p)
        });
    e.i(63335);
    var v = e.i(943081),
        h = e.i(763731),
        b = e.i(829672);
    let w = e => {
        let {
            size: o,
            shape: n
        } = t.useContext(d), l = t.useMemo(() => ({
            size: e.size || o,
            shape: e.shape || n
        }), [e.size, e.shape, o, n]);
        return t.createElement(d.Provider, {
            value: l
        }, e.children)
    };
    $.Group = e => {
        let {
            getPrefixCls: o,
            direction: n
        } = t.useContext(i.ConfigContext), {
            prefixCls: r,
            className: s,
            rootClassName: c,
            style: d,
            maxCount: u,
            maxStyle: p,
            size: m,
            shape: g,
            maxPopoverPlacement: y,
            maxPopoverTrigger: x,
            children: C,
            max: k
        } = e, E = o("avatar", r), S = `${E}-group`, N = (0, a.default)(E), [R, z] = f(E, N), M = (0, l.clsx)(S, {
            [`${S}-rtl`]: "rtl" === n
        }, z, N, s, c, R), I = (0, v.toArray)(C).map((e, t) => (0, h.cloneElement)(e, {
            key: `avatar-key-${t}`
        })), P = k ? .count || u, A = I.length;
        if (P && P < A) {
            let e = I.slice(0, P),
                o = I.slice(P, A),
                n = k ? .style || p,
                r = k ? .popover ? .trigger || x || "hover",
                i = k ? .popover ? .placement || y || "top",
                a = {
                    content: o,
                    ...k ? .popover,
                    placement : i,
                    trigger: r,
                    rootClassName: (0, l.clsx)(`${S}-popover`, k ? .popover ? .rootClassName)
                };
            return e.push(t.createElement(b.default, {
                key: "avatar-popover-key",
                destroyOnHidden: !0,
                ...a
            }, t.createElement($, {
                style: n
            }, `+${A-P}`))), t.createElement(w, {
                shape: g,
                size: m
            }, t.createElement("div", {
                className: M,
                style: d
            }, e))
        }
        return t.createElement(w, {
            shape: g,
            size: m
        }, t.createElement("div", {
            className: M,
            style: d
        }, I))
    }, e.s(["default", 0, $], 965760)
}]);