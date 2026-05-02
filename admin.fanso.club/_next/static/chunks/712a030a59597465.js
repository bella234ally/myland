(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 931067, e => {
    "use strict";

    function t() {
        return (t = Object.assign.bind()).apply(null, arguments)
    }
    e.s(["default", () => t])
}, 50824, e => {
    "use strict";
    let t = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
        o = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
        r = `${t} ${o}`.split(/[\s\n]+/);

    function a(e, t) {
        return 0 === e.indexOf(t)
    }

    function n(e, t = !1) {
        let o;
        o = !1 === t ? {
            aria: !0,
            data: !0,
            attr: !0
        } : !0 === t ? {
            aria: !0
        } : { ...t
        };
        let i = {};
        return Object.keys(e).forEach(t => {
            (o.aria && ("role" === t || a(t, "aria-")) || o.data && a(t, "data-") || o.attr && r.includes(t)) && (i[t] = e[t])
        }), i
    }
    e.s(["default", () => n])
}, 104458, e => {
    "use strict";
    var t = e.i(719581);
    e.s(["useToken", () => t.default])
}, 613541, e => {
    "use strict";
    var t = e.i(242064);
    let o = () => ({
            height: 0,
            opacity: 0
        }),
        r = e => {
            let {
                scrollHeight: t
            } = e;
            return {
                height: t,
                opacity: 1
            }
        },
        a = e => ({
            height: e ? e.offsetHeight : 0
        }),
        n = (e, t) => t ? .deadline === !0 || "height" === t.propertyName,
        i = (e, t, o) => void 0 !== o ? o : `${e}-${t}`;
    e.s(["default", 0, (e = t.defaultPrefixCls) => ({
        motionName: `${e}-motion-collapse`,
        onAppearStart: o,
        onEnterStart: o,
        onAppearActive: r,
        onEnterActive: r,
        onLeaveStart: a,
        onLeaveActive: o,
        onAppearEnd: n,
        onEnterEnd: n,
        onLeaveEnd: n,
        motionDeadline: 500
    }), "getTransitionName", () => i])
}, 751095, e => {
    "use strict";
    var t = e.i(180573);
    e.s(["omit", () => t.default])
}, 943081, e => {
    "use strict";
    var t = e.i(167007);
    e.s(["toArray", () => t.default])
}, 106103, 882345, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);
    let o = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "0 0 1024 1024",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                }
            }]
        },
        name: "loading",
        theme: "outlined"
    };
    e.s(["default", 0, o], 882345);
    var r = e.i(406575);

    function a() {
        return (a = Object.assign.bind()).apply(this, arguments)
    }
    let n = t.forwardRef((e, n) => t.createElement(r.default, a({}, e, {
        ref: n,
        icon: o
    })));
    e.s(["default", 0, n], 106103)
}, 16889, e => {
    "use strict";
    var t = e.i(88014);
    let o = "__rc_react_root__";

    function r(e, r) {
        let a = r[o] || (0, t.createRoot)(r);
        a.render(e), r[o] = a
    }
    async function a(e) {
        return Promise.resolve().then(() => {
            e[o] ? .unmount(), delete e[o]
        })
    }
    e.s(["render", () => r, "unmount", () => a])
}, 937328, e => {
    "use strict";
    var t = e.i(271645);
    let o = t.createContext(!1);
    e.s(["DisabledContextProvider", 0, ({
        children: e,
        disabled: r
    }) => {
        let a = t.useContext(o);
        return t.createElement(o.Provider, {
            value: r ? ? a
        }, e)
    }, "default", 0, o])
}, 69410, 26905, e => {
    "use strict";
    let t = (0, e.i(246422).genComponentStyleHook)("Wave", e => {
        let {
            componentCls: t,
            colorPrimary: o
        } = e;
        return {
            [t]: {
                position: "absolute",
                background: "transparent",
                pointerEvents: "none",
                boxSizing: "border-box",
                color: `var(--wave-color, ${o})`,
                boxShadow: "0 0 0 0 currentcolor",
                opacity: .2,
                "&.wave-motion-appear": {
                    transition: `box-shadow 0.4s ${e.motionEaseOutCirc},opacity 2s ${e.motionEaseOutCirc}`,
                    "&-active": {
                        boxShadow: "0 0 0 6px currentcolor",
                        opacity: 0
                    },
                    "&.wave-quick": {
                        transition: `box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut},opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
                    }
                }
            }
        }
    });
    e.s(["default", 0, t], 69410);
    var o = e.i(242064);
    let r = `${o.defaultPrefixCls}-wave-target`;
    e.s(["TARGET_CLS", 0, r], 26905)
}, 121872, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
        o = e.i(943022),
        r = e.i(232839),
        a = e.i(207670),
        n = e.i(242064),
        i = e.i(763731),
        s = e.i(69410);
    e.i(63335);
    var l = e.i(580251),
        c = e.i(737434),
        u = e.i(719581),
        f = e.i(26905),
        p = e.i(128473),
        m = e.i(16889);

    function d(e) {
        return e && "string" == typeof e && "#fff" !== e && "#ffffff" !== e && "rgb(255, 255, 255)" !== e && "rgba(255, 255, 255, 1)" !== e && !/rgba\((?:\d*, ){3}0\)/.test(e) && "transparent" !== e && "canvastext" !== e
    }

    function g(e) {
        return Number.isNaN(e) ? 0 : e
    }
    let h = e => {
        let {
            className: o,
            target: n,
            component: i,
            colorSource: s
        } = e, l = t.useRef(null), [u, h] = t.useState(null), [b, v] = t.useState([]), [w, y] = t.useState(0), [$, C] = t.useState(0), [E, x] = t.useState(0), [k, T] = t.useState(0), [S, O] = t.useState(!1), R = {
            left: w,
            top: $,
            width: E,
            height: k,
            borderRadius: b.map(e => `${e}px`).join(" ")
        };

        function N() {
            let e = getComputedStyle(n);
            h(function(e, t = null) {
                let o = getComputedStyle(e),
                    {
                        borderTopColor: r,
                        borderColor: a,
                        backgroundColor: n
                    } = o;
                return t && d(o[t]) ? o[t] : [r, a, n].find(d) ? ? null
            }(n, s));
            let t = "static" === e.position,
                {
                    borderLeftWidth: o,
                    borderTopWidth: r
                } = e;
            y(t ? n.offsetLeft : g(-Number.parseFloat(o))), C(t ? n.offsetTop : g(-Number.parseFloat(r))), x(n.offsetWidth), T(n.offsetHeight);
            let {
                borderTopLeftRadius: a,
                borderTopRightRadius: i,
                borderBottomLeftRadius: l,
                borderBottomRightRadius: c
            } = e;
            v([a, i, c, l].map(e => g(Number.parseFloat(e))))
        }
        if (u && (R["--wave-color"] = u), t.useEffect(() => {
                if (n) {
                    let e, t = (0, c.default)(() => {
                        N(), O(!0)
                    });
                    return "undefined" != typeof ResizeObserver && (e = new ResizeObserver(N)).observe(n), () => {
                        c.default.cancel(t), e ? .disconnect()
                    }
                }
            }, [n]), !S) return null;
        let _ = ("Checkbox" === i || "Radio" === i) && n ? .classList.contains(f.TARGET_CLS);
        return t.createElement(p.default, {
            visible: !0,
            motionAppear: !0,
            motionName: "wave-motion",
            motionDeadline: 5e3,
            onAppearEnd: (e, t) => {
                if (t.deadline || "opacity" === t.propertyName) {
                    let e = l.current ? .parentElement;
                    (0, m.unmount)(e).then(() => {
                        e ? .remove()
                    })
                }
                return !1
            }
        }, ({
            className: e
        }, n) => t.createElement("div", {
            ref: (0, r.composeRef)(l, n),
            className: (0, a.clsx)(o, e, {
                "wave-quick": _
            }),
            style: R
        }))
    };
    e.s(["default", 0, e => {
        let {
            children: p,
            disabled: d,
            component: g,
            colorSource: b
        } = e, {
            getPrefixCls: v
        } = (0, t.useContext)(n.ConfigContext), w = (0, t.useRef)(null), y = v("wave"), [, $] = (0, s.default)(y), C = ((e, o, r, a) => {
            let {
                wave: i
            } = t.useContext(n.ConfigContext), [, s, p] = (0, u.default)(), d = (0, l.useEvent)(n => {
                let l = e.current;
                if (i ? .disabled || !l) return;
                let c = l.querySelector(`.${f.TARGET_CLS}`) || l,
                    {
                        showEffect: u
                    } = i || {};
                (u || ((e, o) => {
                    let {
                        component: r
                    } = o;
                    if ("Checkbox" === r && !e.querySelector("input") ? .checked) return;
                    let a = document.createElement("div");
                    a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e ? .insertBefore(a, e ? .firstChild), (0, m.render)(t.createElement(h, { ...o,
                        target: e
                    }), a)
                }))(c, {
                    className: o,
                    token: s,
                    component: r,
                    event: n,
                    hashId: p,
                    colorSource: a
                })
            }), g = t.useRef(null);
            return t.useEffect(() => () => {
                c.default.cancel(g.current)
            }, []), e => {
                c.default.cancel(g.current), g.current = (0, c.default)(() => {
                    d(e)
                })
            }
        })(w, (0, a.clsx)(y, $), g, b);
        if (t.default.useEffect(() => {
                let e = w.current;
                if (!e || e.nodeType !== window.Node.ELEMENT_NODE || d) return;
                let t = t => {
                    !(0, o.default)(t.target) || !e.getAttribute || e.getAttribute("disabled") || e.disabled || e.className.includes("disabled") && !e.className.includes("disabled:") || "true" === e.getAttribute("aria-disabled") || e.className.includes("-leave") || C(t)
                };
                return e.addEventListener("click", t, !0), () => {
                    e.removeEventListener("click", t, !0)
                }
            }, [d]), !t.default.isValidElement(p)) return p ? ? null;
        let E = (0, r.supportRef)(p) ? (0, r.composeRef)((0, r.getNodeRef)(p), w) : w;
        return (0, i.cloneElement)(p, {
            ref: E
        })
    }], 121872)
}, 753354, e => {
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
                    d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
                }
            }]
        },
        name: "close-circle",
        theme: "filled"
    };
    var r = e.i(406575);

    function a() {
        return (a = Object.assign.bind()).apply(this, arguments)
    }
    let n = t.forwardRef((e, n) => t.createElement(r.default, a({}, e, {
        ref: n,
        icon: o
    })));
    e.s(["default", 0, n], 753354)
}, 747656, 614300, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);
    e.i(63335);
    var o = e.i(24308);
    e.s(["warning", () => o.default], 614300);
    var o = o;

    function r() {}
    let {
        resetWarned: a
    } = o.default, n = t.createContext({});
    e.s(["WarningContext", 0, n, "devUseWarning", 0, () => {
        let e = () => {};
        return e.deprecated = r, e
    }], 747656)
}, 122767, 340010, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
        o = e.i(719581);
    let r = t.default.createContext(void 0);
    e.s(["default", 0, r], 340010);
    let a = {
            Modal: 100,
            Drawer: 100,
            Popover: 100,
            Popconfirm: 100,
            Tooltip: 100,
            Tour: 100,
            FloatButton: 100
        },
        n = {
            SelectLike: 50,
            Dropdown: 50,
            DatePicker: 50,
            Menu: 50,
            ImagePreview: 1
        };
    e.s(["CONTAINER_MAX_OFFSET", 0, 1e3, "useZIndex", 0, (e, i) => {
        let s, [, l] = (0, o.default)(),
            c = t.default.useContext(r),
            u = e in a;
        if (void 0 !== i) s = [i, i];
        else {
            let t = c ? ? 0;
            u ? t += (c ? 0 : l.zIndexPopupBase) + a[e] : t += n[e], s = [void 0 === c ? i : t, t]
        }
        return s
    }], 122767)
}, 819828, e => {
    "use strict";
    let t = (0, e.i(271645).createContext)(void 0);
    e.s(["default", 0, t])
}, 353996, e => {
    "use strict";
    var t = e.i(271645);
    e.i(649637);
    var o = e.i(542569),
        o = o,
        r = e.i(128473),
        a = e.i(207670),
        n = e.i(242064);
    let i = ({
            children: e
        }) => {
            let {
                getPrefixCls: o
            } = t.default.useContext(n.ConfigContext), i = o();
            return t.default.isValidElement(e) ? t.default.createElement(r.default, {
                visible: !0,
                motionName: `${i}-fade`,
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !1,
                removeOnLeave: !1
            }, ({
                style: o,
                className: r
            }) => {
                let {
                    className: n,
                    style: i
                } = e.props, s = { ...i,
                    ...o
                };
                return t.default.cloneElement(e, {
                    className: (0, a.clsx)(n, r),
                    style: s
                })
            }) : e
        },
        s = [null, null];
    e.s(["default", 0, ({
        children: e
    }) => t.default.createElement(o.default, {
        postTriggerProps: e => {
            let o = "function" == typeof e.popup ? e.popup() : e.popup,
                {
                    id: r,
                    builtinPlacements: a
                } = e,
                n = function(e) {
                    if (s[0] !== e) {
                        let t = {};
                        Object.keys(e).forEach(o => {
                            t[o] = { ...e[o],
                                dynamicInset: !1
                            }
                        }), s[0] = e, s[1] = t
                    }
                    return s[1]
                }(a);
            return { ...e,
                getPopupContainer: null,
                arrow: !1,
                popup: t.default.createElement(i, {
                    key: r
                }, o),
                builtinPlacements: n
            }
        }
    }, e)], 353996)
}, 617206, e => {
    "use strict";
    var t = e.i(271645),
        o = e.i(62139),
        r = e.i(249616),
        a = e.i(376398);
    e.s(["default", 0, e => {
        let {
            space: n,
            form: i,
            children: s
        } = e;
        if (!(0, a.default)(s)) return null;
        let l = s;
        return i && (l = t.default.createElement(o.NoFormStyle, {
            override: !0,
            status: !0
        }, l)), n && (l = t.default.createElement(r.NoCompactStyle, null, l)), l
    }])
}, 709656, e => {
    "use strict";
    var t = e.i(75940),
        o = e.i(402366);
    let r = new t.Keyframes("antFadeIn", {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            }
        }),
        a = new t.Keyframes("antFadeOut", {
            "0%": {
                opacity: 1
            },
            "100%": {
                opacity: 0
            }
        });
    e.s(["initFadeMotion", 0, (e, t = !1) => {
        let {
            antCls: n
        } = e, i = `${n}-fade`, s = t ? "&" : "";
        return [(0, o.initMotion)(i, r, a, e.motionDurationMid, t), {
            [`
        ${s}${i}-enter,
        ${s}${i}-appear
      `]: {
                opacity: 0,
                animationTimingFunction: "linear"
            },
            [`${s}${i}-leave`]: {
                animationTimingFunction: "linear"
            }
        }]
    }])
}, 717356, e => {
    "use strict";
    var t = e.i(75940),
        o = e.i(402366);
    let r = new t.Keyframes("antZoomIn", {
            "0%": {
                transform: "scale(0.2)",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                opacity: 1
            }
        }),
        a = new t.Keyframes("antZoomOut", {
            "0%": {
                transform: "scale(1)"
            },
            "100%": {
                transform: "scale(0.2)",
                opacity: 0
            }
        }),
        n = new t.Keyframes("antZoomBigIn", {
            "0%": {
                transform: "scale(0.8)",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                opacity: 1
            }
        }),
        i = new t.Keyframes("antZoomBigOut", {
            "0%": {
                transform: "scale(1)"
            },
            "100%": {
                transform: "scale(0.8)",
                opacity: 0
            }
        }),
        s = new t.Keyframes("antZoomUpIn", {
            "0%": {
                transform: "scale(0.8)",
                transformOrigin: "50% 0%",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                transformOrigin: "50% 0%"
            }
        }),
        l = new t.Keyframes("antZoomUpOut", {
            "0%": {
                transform: "scale(1)",
                transformOrigin: "50% 0%"
            },
            "100%": {
                transform: "scale(0.8)",
                transformOrigin: "50% 0%",
                opacity: 0
            }
        }),
        c = {
            zoom: {
                inKeyframes: r,
                outKeyframes: a
            },
            "zoom-big": {
                inKeyframes: n,
                outKeyframes: i
            },
            "zoom-big-fast": {
                inKeyframes: n,
                outKeyframes: i
            },
            "zoom-left": {
                inKeyframes: new t.Keyframes("antZoomLeftIn", {
                    "0%": {
                        transform: "scale(0.8)",
                        transformOrigin: "0% 50%",
                        opacity: 0
                    },
                    "100%": {
                        transform: "scale(1)",
                        transformOrigin: "0% 50%"
                    }
                }),
                outKeyframes: new t.Keyframes("antZoomLeftOut", {
                    "0%": {
                        transform: "scale(1)",
                        transformOrigin: "0% 50%"
                    },
                    "100%": {
                        transform: "scale(0.8)",
                        transformOrigin: "0% 50%",
                        opacity: 0
                    }
                })
            },
            "zoom-right": {
                inKeyframes: new t.Keyframes("antZoomRightIn", {
                    "0%": {
                        transform: "scale(0.8)",
                        transformOrigin: "100% 50%",
                        opacity: 0
                    },
                    "100%": {
                        transform: "scale(1)",
                        transformOrigin: "100% 50%"
                    }
                }),
                outKeyframes: new t.Keyframes("antZoomRightOut", {
                    "0%": {
                        transform: "scale(1)",
                        transformOrigin: "100% 50%"
                    },
                    "100%": {
                        transform: "scale(0.8)",
                        transformOrigin: "100% 50%",
                        opacity: 0
                    }
                })
            },
            "zoom-up": {
                inKeyframes: s,
                outKeyframes: l
            },
            "zoom-down": {
                inKeyframes: new t.Keyframes("antZoomDownIn", {
                    "0%": {
                        transform: "scale(0.8)",
                        transformOrigin: "50% 100%",
                        opacity: 0
                    },
                    "100%": {
                        transform: "scale(1)",
                        transformOrigin: "50% 100%"
                    }
                }),
                outKeyframes: new t.Keyframes("antZoomDownOut", {
                    "0%": {
                        transform: "scale(1)",
                        transformOrigin: "50% 100%"
                    },
                    "100%": {
                        transform: "scale(0.8)",
                        transformOrigin: "50% 100%",
                        opacity: 0
                    }
                })
            }
        };
    e.s(["initZoomMotion", 0, (e, t) => {
        let {
            antCls: r
        } = e, a = `${r}-${t}`, {
            inKeyframes: n,
            outKeyframes: i
        } = c[t];
        return [(0, o.initMotion)(a, n, i, "zoom-big-fast" === t ? e.motionDurationFast : e.motionDurationMid), {
            [`
        ${a}-enter,
        ${a}-appear
      `]: {
                transform: "scale(0)",
                opacity: 0,
                animationTimingFunction: e.motionEaseOutCirc,
                "&-prepare": {
                    transform: "none"
                }
            },
            [`${a}-leave`]: {
                animationTimingFunction: e.motionEaseInOutCirc
            }
        }]
    }, "zoomIn", 0, r])
}, 52956, e => {
    "use strict";
    var t = e.i(207670);
    e.s(["getMergedStatus", 0, (e, t) => t || e, "getStatusClassNames", 0, (e, o, r) => (0, t.clsx)({
        [`${e}-status-success`]: "success" === o,
        [`${e}-status-warning`]: "warning" === o,
        [`${e}-status-error`]: "error" === o,
        [`${e}-status-validating`]: "validating" === o,
        [`${e}-has-feedback`]: r
    })])
}, 337908, 195220, e => {
    "use strict";
    var t = e.i(207670),
        o = e.i(271645);
    let r = e => {
        let {
            children: r,
            prefixCls: a,
            id: n,
            classNames: i,
            styles: s,
            className: l,
            style: c
        } = e;
        return o.createElement("div", {
            id: n,
            className: (0, t.clsx)(`${a}-container`, i ? .container, l),
            style: { ...s ? .container,
                ...c
            },
            role: "tooltip"
        }, "function" == typeof r ? r() : r)
    };
    e.s(["default", 0, r], 195220);
    var a = e.i(649637),
        n = e.i(987225);
    let i = {
            shiftX: 64,
            adjustY: 1
        },
        s = {
            adjustX: 1,
            shiftY: !0
        },
        l = [0, 0],
        c = {
            left: {
                points: ["cr", "cl"],
                overflow: s,
                offset: [-4, 0],
                targetOffset: l
            },
            right: {
                points: ["cl", "cr"],
                overflow: s,
                offset: [4, 0],
                targetOffset: l
            },
            top: {
                points: ["bc", "tc"],
                overflow: i,
                offset: [0, -4],
                targetOffset: l
            },
            bottom: {
                points: ["tc", "bc"],
                overflow: i,
                offset: [0, 4],
                targetOffset: l
            },
            topLeft: {
                points: ["bl", "tl"],
                overflow: i,
                offset: [0, -4],
                targetOffset: l
            },
            leftTop: {
                points: ["tr", "tl"],
                overflow: s,
                offset: [-4, 0],
                targetOffset: l
            },
            topRight: {
                points: ["br", "tr"],
                overflow: i,
                offset: [0, -4],
                targetOffset: l
            },
            rightTop: {
                points: ["tl", "tr"],
                overflow: s,
                offset: [4, 0],
                targetOffset: l
            },
            bottomRight: {
                points: ["tr", "br"],
                overflow: i,
                offset: [0, 4],
                targetOffset: l
            },
            rightBottom: {
                points: ["bl", "br"],
                overflow: s,
                offset: [4, 0],
                targetOffset: l
            },
            bottomLeft: {
                points: ["tl", "bl"],
                overflow: i,
                offset: [0, 4],
                targetOffset: l
            },
            leftBottom: {
                points: ["br", "bl"],
                overflow: s,
                offset: [-4, 0],
                targetOffset: l
            }
        };

    function u() {
        return (u = Object.assign.bind()).apply(this, arguments)
    }
    let f = o.forwardRef((e, i) => {
        let {
            trigger: s = ["hover"],
            mouseEnterDelay: l = 0,
            mouseLeaveDelay: f = .1,
            prefixCls: p = "rc-tooltip",
            children: m,
            onVisibleChange: d,
            afterVisibleChange: g,
            motion: h,
            placement: b = "right",
            align: v = {},
            destroyOnHidden: w = !1,
            defaultVisible: y,
            getTooltipContainer: $,
            arrowContent: C,
            overlay: E,
            id: x,
            showArrow: k = !0,
            classNames: T,
            styles: S,
            ...O
        } = e, R = (0, n.default)(x), N = (0, o.useRef)(null);
        (0, o.useImperativeHandle)(i, () => N.current);
        let _ = { ...O
        };
        "visible" in e && (_.popupVisible = e.visible);
        let L = o.useMemo(() => {
            if (!k) return !1;
            let e = !0 === k ? {} : k;
            return { ...e,
                className: (0, t.clsx)(e.className, T ? .arrow),
                style: { ...e.style,
                    ...S ? .arrow
                },
                content: e.content ? ? C
            }
        }, [k, T ? .arrow, S ? .arrow, C]);
        return o.createElement(a.default, u({
            popupClassName: T ? .root,
            prefixCls: p,
            popup: o.createElement(r, {
                key: "content",
                prefixCls: p,
                id: R,
                classNames: T,
                styles: S
            }, E),
            action: s,
            builtinPlacements: c,
            popupPlacement: b,
            ref: N,
            popupAlign: v,
            getPopupContainer: $,
            onOpenChange: d,
            afterOpenChange: g,
            popupMotion: h,
            defaultPopupVisible: y,
            autoDestroy: w,
            mouseLeaveDelay: f,
            popupStyle: S ? .root,
            mouseEnterDelay: l,
            arrow: L,
            uniqueContainerClassName: T ? .uniqueContainer,
            uniqueContainerStyle: S ? .uniqueContainer
        }, _), ({
            open: e
        }) => {
            let t = o.Children.only(m);
            return o.cloneElement(t, {
                "aria-describedby": E && e ? R : void 0
            })
        })
    });
    e.s(["default", 0, f], 337908)
}, 307358, e => {
    "use strict";
    var t = e.i(687385);

    function o(e) {
        let {
            sizePopupArrow: t,
            borderRadiusXS: o,
            borderRadiusOuter: r
        } = e, a = t / 2, n = r / Math.sqrt(2), i = a - r * (1 - 1 / Math.sqrt(2)), s = a - 1 / Math.sqrt(2) * o, l = r * (Math.sqrt(2) - 1) + 1 / Math.sqrt(2) * o, c = a * Math.sqrt(2) + r * (Math.sqrt(2) - 2), u = r * (Math.sqrt(2) - 1), f = `polygon(${u}px 100%, 50% ${u}px, ${2*a-u}px 100%, ${u}px 100%)`;
        return {
            arrowShadowWidth: c,
            arrowPath: `path('M 0 ${a} A ${r} ${r} 0 0 0 ${n} ${i} L ${s} ${l} A ${o} ${o} 0 0 1 ${2*a-s} ${l} L ${2*a-n} ${i} A ${r} ${r} 0 0 0 ${2*a-0} ${a} Z')`,
            arrowPolygon: f
        }
    }
    e.s(["genRoundedArrow", 0, (e, o, r) => {
        let {
            sizePopupArrow: a,
            arrowPolygon: n,
            arrowPath: i,
            arrowShadowWidth: s,
            borderRadiusXS: l,
            calc: c
        } = e;
        return {
            pointerEvents: "none",
            width: a,
            height: a,
            overflow: "hidden",
            "&::before": {
                position: "absolute",
                bottom: 0,
                insetInlineStart: 0,
                width: a,
                height: c(a).div(2).equal(),
                background: o,
                clipPath: {
                    _multi_value_: !0,
                    value: [n, i]
                },
                content: '""'
            },
            "&::after": {
                content: '""',
                position: "absolute",
                width: s,
                height: s,
                bottom: 0,
                insetInline: 0,
                margin: "auto",
                borderRadius: {
                    _skip_check_: !0,
                    value: `0 0 ${(0,t.unit)(l)} 0`
                },
                transform: "translateY(50%) rotate(-135deg)",
                boxShadow: r,
                zIndex: 0,
                background: "transparent"
            }
        }
    }, "getArrowToken", () => o])
}, 805984, 320560, e => {
    "use strict";
    var t = e.i(687385),
        o = e.i(307358);

    function r(e) {
        let {
            contentRadius: t,
            limitVerticalRadius: o
        } = e, r = t > 12 ? t + 2 : 12;
        return {
            arrowOffsetHorizontal: r,
            arrowOffsetVertical: o ? 8 : r
        }
    }

    function a(e, r, a) {
        var n, i, s, l, c, u, f, p;
        let {
            componentCls: m,
            boxShadowPopoverArrow: d,
            arrowOffsetVertical: g,
            arrowOffsetHorizontal: h
        } = e, {
            arrowDistance: b = 0,
            arrowPlacement: v = {
                left: !0,
                right: !0,
                top: !0,
                bottom: !0
            }
        } = a || {};
        return {
            [m]: {
                [`${m}-arrow`]: [{
                    position: "absolute",
                    zIndex: 1,
                    display: "block",
                    ...(0, o.genRoundedArrow)(e, r, d),
                    "&:before": {
                        background: r
                    }
                }],
                ...(n = !!v.top, i = {
                    [`&-placement-top > ${m}-arrow,&-placement-topLeft > ${m}-arrow,&-placement-topRight > ${m}-arrow`]: {
                        bottom: b,
                        transform: "translateY(100%) rotate(180deg)"
                    },
                    [`&-placement-top > ${m}-arrow`]: {
                        left: {
                            _skip_check_: !0,
                            value: "50%"
                        },
                        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
                    },
                    "&-placement-topLeft": {
                        "--arrow-offset-horizontal": h,
                        [`> ${m}-arrow`]: {
                            left: {
                                _skip_check_: !0,
                                value: h
                            }
                        }
                    },
                    "&-placement-topRight": {
                        "--arrow-offset-horizontal": `calc(100% - ${(0,t.unit)(h)})`,
                        [`> ${m}-arrow`]: {
                            right: {
                                _skip_check_: !0,
                                value: h
                            }
                        }
                    }
                }, n ? i : {}),
                ...(s = !!v.bottom, l = {
                    [`&-placement-bottom > ${m}-arrow,&-placement-bottomLeft > ${m}-arrow,&-placement-bottomRight > ${m}-arrow`]: {
                        top: b,
                        transform: "translateY(-100%)"
                    },
                    [`&-placement-bottom > ${m}-arrow`]: {
                        left: {
                            _skip_check_: !0,
                            value: "50%"
                        },
                        transform: "translateX(-50%) translateY(-100%)"
                    },
                    "&-placement-bottomLeft": {
                        "--arrow-offset-horizontal": h,
                        [`> ${m}-arrow`]: {
                            left: {
                                _skip_check_: !0,
                                value: h
                            }
                        }
                    },
                    "&-placement-bottomRight": {
                        "--arrow-offset-horizontal": `calc(100% - ${(0,t.unit)(h)})`,
                        [`> ${m}-arrow`]: {
                            right: {
                                _skip_check_: !0,
                                value: h
                            }
                        }
                    }
                }, s ? l : {}),
                ...(c = !!v.left, u = {
                    [`&-placement-left > ${m}-arrow,&-placement-leftTop > ${m}-arrow,&-placement-leftBottom > ${m}-arrow`]: {
                        right: {
                            _skip_check_: !0,
                            value: b
                        },
                        transform: "translateX(100%) rotate(90deg)"
                    },
                    [`&-placement-left > ${m}-arrow`]: {
                        top: {
                            _skip_check_: !0,
                            value: "50%"
                        },
                        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
                    },
                    [`&-placement-leftTop > ${m}-arrow`]: {
                        top: g
                    },
                    [`&-placement-leftBottom > ${m}-arrow`]: {
                        bottom: g
                    }
                }, c ? u : {}),
                ...(f = !!v.right, p = {
                    [`&-placement-right > ${m}-arrow,&-placement-rightTop > ${m}-arrow,&-placement-rightBottom > ${m}-arrow`]: {
                        left: {
                            _skip_check_: !0,
                            value: b
                        },
                        transform: "translateX(-100%) rotate(-90deg)"
                    },
                    [`&-placement-right > ${m}-arrow`]: {
                        top: {
                            _skip_check_: !0,
                            value: "50%"
                        },
                        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
                    },
                    [`&-placement-rightTop > ${m}-arrow`]: {
                        top: g
                    },
                    [`&-placement-rightBottom > ${m}-arrow`]: {
                        bottom: g
                    }
                }, f ? p : {})
            }
        }
    }
    e.s(["MAX_VERTICAL_CONTENT_RADIUS", 0, 8, "default", () => a, "getArrowOffsetToken", () => r], 320560);
    let n = {
            left: {
                points: ["cr", "cl"]
            },
            right: {
                points: ["cl", "cr"]
            },
            top: {
                points: ["bc", "tc"]
            },
            bottom: {
                points: ["tc", "bc"]
            },
            topLeft: {
                points: ["bl", "tl"]
            },
            leftTop: {
                points: ["tr", "tl"]
            },
            topRight: {
                points: ["br", "tr"]
            },
            rightTop: {
                points: ["tl", "tr"]
            },
            bottomRight: {
                points: ["tr", "br"]
            },
            rightBottom: {
                points: ["bl", "br"]
            },
            bottomLeft: {
                points: ["tl", "bl"]
            },
            leftBottom: {
                points: ["br", "bl"]
            }
        },
        i = {
            topLeft: {
                points: ["bl", "tc"]
            },
            leftTop: {
                points: ["tr", "cl"]
            },
            topRight: {
                points: ["br", "tc"]
            },
            rightTop: {
                points: ["tl", "cr"]
            },
            bottomRight: {
                points: ["tr", "bc"]
            },
            rightBottom: {
                points: ["bl", "cr"]
            },
            bottomLeft: {
                points: ["tl", "bc"]
            },
            leftBottom: {
                points: ["br", "cl"]
            }
        },
        s = new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);

    function l(e) {
        let {
            arrowWidth: t,
            autoAdjustOverflow: o,
            arrowPointAtCenter: a,
            offset: l,
            borderRadius: c,
            visibleFirst: u
        } = e, f = t / 2, p = {}, m = r({
            contentRadius: c,
            limitVerticalRadius: !0
        });
        return Object.keys(n).forEach(e => {
            let r = { ...a && i[e] || n[e],
                offset: [0, 0],
                dynamicInset: !0
            };
            switch (p[e] = r, s.has(e) && (r.autoArrow = !1), e) {
                case "top":
                case "topLeft":
                case "topRight":
                    r.offset[1] = -f - l;
                    break;
                case "bottom":
                case "bottomLeft":
                case "bottomRight":
                    r.offset[1] = f + l;
                    break;
                case "left":
                case "leftTop":
                case "leftBottom":
                    r.offset[0] = -f - l;
                    break;
                case "right":
                case "rightTop":
                case "rightBottom":
                    r.offset[0] = f + l
            }
            if (a) switch (e) {
                case "topLeft":
                case "bottomLeft":
                    r.offset[0] = -m.arrowOffsetHorizontal - f;
                    break;
                case "topRight":
                case "bottomRight":
                    r.offset[0] = m.arrowOffsetHorizontal + f;
                    break;
                case "leftTop":
                case "rightTop":
                    r.offset[1] = -(2 * m.arrowOffsetHorizontal) + f;
                    break;
                case "leftBottom":
                case "rightBottom":
                    r.offset[1] = 2 * m.arrowOffsetHorizontal - f
            }
            r.overflow = function(e, t, o, r) {
                if (!1 === r) return {
                    adjustX: !1,
                    adjustY: !1
                };
                let a = {};
                switch (e) {
                    case "top":
                    case "bottom":
                        a.shiftX = 2 * t.arrowOffsetHorizontal + o, a.shiftY = !0, a.adjustY = !0;
                        break;
                    case "left":
                    case "right":
                        a.shiftY = 2 * t.arrowOffsetVertical + o, a.shiftX = !0, a.adjustX = !0
                }
                let n = { ...a,
                    ...r && "object" == typeof r ? r : {}
                };
                return n.shiftX || (n.adjustX = !0), n.shiftY || (n.adjustY = !0), n
            }(e, m, t, o), u && (r.htmlRegion = "visibleFirst")
        }), p
    }
    e.s(["default", () => l], 805984)
}, 496158, 492656, e => {
    "use strict";
    var t = e.i(271645);
    e.s(["default", 0, (e, o) => {
        let r = e => "boolean" == typeof e ? {
            show: e
        } : e || {};
        return t.default.useMemo(() => {
            let t = r(e),
                a = r(o);
            return { ...a,
                ...t,
                show: t.show ? ? a.show ? ? !0
            }
        }, [e, o])
    }], 496158);
    var o = e.i(195220);
    e.s(["Popup", () => o.default], 492656)
}, 403541, e => {
    "use strict";
    var t = e.i(617933);

    function o(e, o) {
        return t.PresetColors.reduce((t, r) => {
            let a = e[`${r}1`],
                n = e[`${r}3`],
                i = e[`${r}6`],
                s = e[`${r}7`];
            return { ...t,
                ...o(r, {
                    lightColor: a,
                    lightBorderColor: n,
                    darkColor: i,
                    textColor: s
                })
            }
        }, {})
    }
    e.s(["genPresetColor", () => o], 403541)
}, 57667, e => {
    "use strict";
    var t = e.i(687385),
        o = e.i(183293),
        r = e.i(709656),
        a = e.i(717356),
        n = e.i(320560),
        i = e.i(307358),
        s = e.i(403541),
        l = e.i(246422),
        c = e.i(838378);
    let u = e => ({
        zIndexPopup: e.zIndexPopupBase + 70,
        ...(0, n.getArrowOffsetToken)({
            contentRadius: e.borderRadius,
            limitVerticalRadius: !0
        }),
        ...(0, i.getArrowToken)((0, c.mergeToken)(e, {
            borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
        }))
    });
    e.s(["default", 0, (e, i, f = !0) => (0, l.genStyleHooks)("Tooltip", e => {
        let {
            borderRadius: i,
            colorTextLightSolid: l,
            colorBgSpotlight: u
        } = e;
        return [(e => {
            let {
                calc: a,
                componentCls: i,
                tooltipMaxWidth: l,
                tooltipColor: c,
                tooltipBg: u,
                tooltipBorderRadius: f,
                zIndexPopup: p,
                controlHeight: m,
                boxShadowSecondary: d,
                paddingSM: g,
                paddingXS: h,
                arrowOffsetHorizontal: b,
                sizePopupArrow: v
            } = e, w = a(f).add(v).add(b).equal(), y = {
                minWidth: a(f).mul(2).add(v).equal(),
                minHeight: m,
                padding: `${(0,t.unit)(e.calc(g).div(2).equal())} ${(0,t.unit)(h)}`,
                color: `var(--ant-tooltip-color, ${c})`,
                textAlign: "start",
                textDecoration: "none",
                wordWrap: "break-word",
                backgroundColor: u,
                borderRadius: f,
                boxShadow: d,
                boxSizing: "border-box"
            }, $ = {
                "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
                transformOrigin: "var(--valid-offset-x, 50%) var(--arrow-y, 50%)"
            };
            return [{
                [i]: { ...(0, o.resetComponent)(e),
                    position: "absolute",
                    zIndex: p,
                    display: "block",
                    width: "max-content",
                    maxWidth: l,
                    visibility: "visible",
                    ...$,
                    "&-hidden": {
                        display: "none"
                    },
                    "--antd-arrow-background-color": u,
                    [`${i}-container`]: [y, (0, r.initFadeMotion)(e, !0)],
                    [`&:has(~ ${i}-unique-container)`]: {
                        [`${i}-container`]: {
                            border: "none",
                            background: "transparent",
                            boxShadow: "none"
                        }
                    },
                    "&-placement-topLeft,&-placement-topRight,&-placement-bottomLeft,&-placement-bottomRight": {
                        minWidth: w
                    },
                    "&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom": {
                        [`${i}-inner`]: {
                            borderRadius: e.min(f, n.MAX_VERTICAL_CONTENT_RADIUS)
                        }
                    },
                    [`${i}-content`]: {
                        position: "relative"
                    },
                    ...(0, s.genPresetColor)(e, (e, {
                        darkColor: t
                    }) => ({
                        [`&${i}-${e}`]: {
                            [`${i}-container`]: {
                                backgroundColor: t
                            },
                            [`${i}-arrow`]: {
                                "--antd-arrow-background-color": t
                            }
                        }
                    })),
                    "&-rtl": {
                        direction: "rtl"
                    }
                }
            }, (0, n.default)(e, "var(--antd-arrow-background-color)"), {
                [`${i}-pure`]: {
                    position: "relative",
                    maxWidth: "none",
                    margin: e.sizePopupArrow
                }
            }, {
                [`${i}-unique-container`]: { ...y,
                    ...$,
                    position: "absolute",
                    zIndex: a(p).sub(1).equal(),
                    "&-hidden": {
                        display: "none"
                    },
                    "&-visible": {
                        transition: `all ${e.motionDurationSlow}`
                    }
                }
            }]
        })((0, c.mergeToken)(e, {
            tooltipMaxWidth: 250,
            tooltipColor: l,
            tooltipBorderRadius: i,
            tooltipBg: u
        })), (0, a.initZoomMotion)(e, "zoom-big-fast")]
    }, u, {
        resetStyle: !1,
        injectStyle: f
    })(e, i)])
}, 702779, e => {
    "use strict";
    var t = e.i(991330),
        o = e.i(617933);
    let r = o.PresetColors.map(e => `${e}-inverse`),
        a = ["success", "processing", "error", "default", "warning"];

    function n(e, a = !0) {
        return a ? [].concat((0, t.default)(r), (0, t.default)(o.PresetColors)).includes(e) : o.PresetColors.includes(e)
    }

    function i(e) {
        return a.includes(e)
    }
    e.s(["isPresetColor", () => n, "isPresetStatusColor", () => i])
}, 489540, 174077, e => {
    "use strict";
    var t = e.i(271645);
    e.i(337908);
    var o = e.i(492656),
        r = e.i(207670),
        a = e.i(711517),
        n = e.i(242064),
        i = e.i(321883),
        s = e.i(57667),
        l = e.i(702779),
        c = e.i(656449);

    function u(e, t) {
        let o = (0, l.isPresetColor)(t),
            a = (0, r.clsx)({
                [`${e}-${t}`]: t && o
            }),
            n = {},
            i = {},
            s = (0, c.generateColor)(t).toRgb(),
            u = (.299 * s.r + .587 * s.g + .114 * s.b) / 255;
        return t && !o && (n.background = t, n["--ant-tooltip-color"] = u < .5 ? "#FFF" : "#000", i["--antd-arrow-background-color"] = t), {
            className: a,
            overlayStyle: n,
            arrowStyle: i
        }
    }
    e.s(["parseColor", () => u], 174077), e.s(["default", 0, e => {
        let {
            prefixCls: l,
            className: c,
            placement: f = "top",
            title: p,
            color: m,
            overlayInnerStyle: d,
            classNames: g,
            styles: h
        } = e, {
            getPrefixCls: b
        } = t.useContext(n.ConfigContext), v = b("tooltip", l), w = (0, i.default)(v), [y, $] = (0, s.default)(v, w), C = u(v, m), E = C.arrowStyle, x = t.useMemo(() => ({
            container: { ...d,
                ...C.overlayStyle
            }
        }), [d, C.overlayStyle]), k = { ...e,
            placement: f
        }, [T, S] = (0, a.useMergeSemantic)([g], [x, h], {
            props: k
        }), O = (0, r.clsx)(w, y, $, v, `${v}-pure`, `${v}-placement-${f}`, c, C.className);
        return t.createElement("div", {
            className: O,
            style: E
        }, t.createElement("div", {
            className: `${v}-arrow`
        }), t.createElement(o.Popup, { ...e,
            className: y,
            prefixCls: v,
            classNames: T,
            styles: S
        }, p))
    }], 489540)
}, 491816, e => {
    "use strict";
    var t = e.i(271645),
        o = e.i(337908);
    e.i(63335);
    var r = e.i(30294),
        a = e.i(207670),
        n = e.i(617206),
        i = e.i(711517),
        s = e.i(122767),
        l = e.i(613541),
        c = e.i(805984),
        u = e.i(763731),
        f = e.i(747656),
        p = e.i(340010),
        m = e.i(242064),
        d = e.i(321883),
        g = e.i(104458),
        h = e.i(496158),
        b = e.i(489540),
        v = e.i(57667),
        w = e.i(353996),
        y = e.i(174077);
    let $ = t.forwardRef((e, b) => {
        let {
            prefixCls: w,
            openClassName: $,
            getTooltipContainer: C,
            color: E,
            children: x,
            afterOpenChange: k,
            arrow: T,
            destroyTooltipOnHide: S,
            destroyOnHidden: O,
            title: R,
            overlay: N,
            trigger: _,
            builtinPlacements: L,
            autoAdjustOverflow: P = !0,
            motion: M,
            getPopupContainer: A,
            placement: z = "top",
            mouseEnterDelay: D = .1,
            mouseLeaveDelay: I = .1,
            rootClassName: K,
            styles: B,
            classNames: q,
            onOpenChange: F,
            overlayInnerStyle: j,
            overlayStyle: X,
            overlayClassName: W,
            ...Z
        } = e, [, V] = (0, g.useToken)(), {
            getPopupContainer: Y,
            getPrefixCls: H,
            direction: U,
            className: G,
            style: J,
            classNames: Q,
            styles: ee,
            arrow: et,
            trigger: eo
        } = (0, m.useComponentConfig)("tooltip"), er = (0, h.default)(T, et), ea = er.show, en = _ || eo || "hover";
        (0, f.devUseWarning)("Tooltip");
        let ei = t.useRef(null),
            es = () => {
                ei.current ? .forceAlign()
            };
        t.useImperativeHandle(b, () => ({
            forceAlign: es,
            nativeElement: ei.current ? .nativeElement,
            popupElement: ei.current ? .popupElement
        }));
        let [el, ec] = (0, r.useControlledState)(e.defaultOpen ? ? !1, e.open), eu = !R && !N && 0 !== R, ef = t.useMemo(() => L || (0, c.default)({
            arrowPointAtCenter: er ? .pointAtCenter ? ? !1,
            autoAdjustOverflow: P,
            arrowWidth: ea ? V.sizePopupArrow : 0,
            borderRadius: V.borderRadius,
            offset: V.marginXXS,
            visibleFirst: !0
        }), [er, L, V, ea, P]), ep = t.useMemo(() => 0 === R ? R : N || R || "", [N, R]), em = t.createElement(n.default, {
            space: !0
        }, "function" == typeof ep ? ep() : ep), ed = { ...e,
            trigger: en,
            color: E,
            placement: z,
            builtinPlacements: L,
            openClassName: $,
            arrow: T,
            autoAdjustOverflow: P,
            getPopupContainer: A,
            children: x,
            destroyTooltipOnHide: S,
            destroyOnHidden: O
        }, [eg, eh] = (0, i.useMergeSemantic)([Q, q], [ee, B], {
            props: ed
        }), eb = H("tooltip", w), ev = H(), ew = e["data-popover-inject"], ey = el;
        "open" in e || !eu || (ey = !1);
        let e$ = t.isValidElement(x) && !(0, u.isFragment)(x) ? x : t.createElement("span", null, x),
            eC = e$.props,
            eE = eC.className && "string" != typeof eC.className ? eC.className : (0, a.clsx)(eC.className, $ || `${eb}-open`),
            ex = (0, d.default)(eb),
            [ek, eT] = (0, v.default)(eb, ex, !ew),
            eS = (0, y.parseColor)(eb, E),
            eO = eS.arrowStyle,
            eR = (0, a.clsx)(ex, ek, eT),
            eN = (0, a.clsx)(W, {
                [`${eb}-rtl`]: "rtl" === U
            }, eS.className, K, eR, G, eg.root),
            [e_, eL] = (0, s.useZIndex)("Tooltip", Z.zIndex),
            eP = { ...eh.container,
                ...j,
                ...eS.overlayStyle
            },
            eM = t.createElement(o.default, {
                unique: !0,
                ...Z,
                trigger: en,
                zIndex: e_,
                showArrow: ea,
                placement: z,
                mouseEnterDelay: D,
                mouseLeaveDelay: I,
                prefixCls: eb,
                classNames: {
                    root: eN,
                    container: eg.container,
                    arrow: eg.arrow,
                    uniqueContainer: (0, a.clsx)(eR, eg.container)
                },
                styles: {
                    root: { ...eO,
                        ...eh.root,
                        ...J,
                        ...X
                    },
                    container: eP,
                    uniqueContainer: eP,
                    arrow: eh.arrow
                },
                getTooltipContainer: A || C || Y,
                ref: ei,
                builtinPlacements: ef,
                overlay: em,
                visible: ey,
                onVisibleChange: e => {
                    ec(!eu && e), !eu && F && F(e)
                },
                afterVisibleChange: k,
                arrowContent: t.createElement("span", {
                    className: `${eb}-arrow-content`
                }),
                motion: {
                    motionName: (0, l.getTransitionName)(ev, "zoom-big-fast", "string" == typeof M ? .motionName ? M ? .motionName : void 0),
                    motionDeadline: 1e3
                },
                destroyOnHidden: O ? ? !!S
            }, ey ? (0, u.cloneElement)(e$, {
                className: eE
            }) : e$);
        return t.createElement(p.default.Provider, {
            value: eL
        }, eM)
    });
    $._InternalPanelDoNotUseOrYouWillBeFired = b.default, $.UniqueProvider = w.default, e.s(["default", 0, $])
}]);