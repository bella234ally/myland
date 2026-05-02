(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 634771, e => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);

    function n() {
        return (n = Object.assign.bind()).apply(null, arguments)
    }

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e) {
        var t = function(e, t) {
            if ("object" != l(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != l(r)) return r;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == l(t) ? t : t + ""
    }

    function o(e, t, n) {
        return (t = r(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t && (l = l.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, l)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0).forEach(function(t) {
                o(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function s(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var l = t[n];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, r(l.key), l)
        }
    }

    function d(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function u(e, t) {
        if (t && ("object" == l(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f() {
        try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (f = function() {
            return !!e
        })()
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && m(e, t)
    }
    let g = {
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
    var v = e.i(207670);
    let b = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(e) {
            return t.default.createElement("ul", {
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
            return t.default.createElement("button", null, e + 1)
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

    function y(e, t, n) {
        return Math.max(t, Math.min(e, n))
    }
    var $ = function(e) {
            ["onTouchStart", "onTouchMove", "onWheel"].includes(e._reactName) || e.preventDefault()
        },
        x = function(e) {
            for (var t = [], n = S(e), l = C(e), r = n; r < l; r++) 0 > e.lazyLoadedList.indexOf(r) && t.push(r);
            return t
        },
        S = function(e) {
            return e.currentSlide - k(e)
        },
        C = function(e) {
            return e.currentSlide + w(e)
        },
        k = function(e) {
            return e.centerMode ? Math.floor(e.slidesToShow / 2) + +(parseInt(e.centerPadding) > 0) : 0
        },
        w = function(e) {
            return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + +(parseInt(e.centerPadding) > 0) : e.slidesToShow
        },
        E = function(e) {
            return e && e.offsetWidth || 0
        },
        N = function(e) {
            return e && e.offsetHeight || 0
        },
        I = function(e) {
            var t, n, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t = e.startX - e.curX, (n = Math.round(180 * Math.atan2(e.startY - e.curY, t) / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315) return "left";
            if (n >= 135 && n <= 225) return "right";
            if (!0 === l)
                if (n >= 35 && n <= 135) return "up";
                else return "down";
            return "vertical"
        },
        M = function(e) {
            var t = !0;
            return !e.infinite && (e.centerMode && e.currentSlide >= e.slideCount - 1 ? t = !1 : (e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1)), t
        },
        z = function(e, t) {
            var n = {};
            return t.forEach(function(t) {
                return n[t] = e[t]
            }), n
        },
        R = function(e) {
            var n, l = t.default.Children.count(e.children),
                r = e.listRef,
                o = Math.ceil(E(r)),
                i = Math.ceil(E(e.trackRef && e.trackRef.node));
            if (e.vertical) n = o;
            else {
                var s = e.centerMode && 2 * parseInt(e.centerPadding);
                "string" == typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (s *= o / 100), n = Math.ceil((o - s) / e.slidesToShow)
            }
            var c = r && N(r.querySelector('[data-index="0"]')),
                d = c * e.slidesToShow,
                u = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
            e.rtl && void 0 === e.currentSlide && (u = l - 1 - e.initialSlide);
            var f = e.lazyLoadedList || [],
                p = x(a(a({}, e), {}, {
                    currentSlide: u,
                    lazyLoadedList: f
                })),
                m = {
                    slideCount: l,
                    slideWidth: n,
                    listWidth: o,
                    trackWidth: i,
                    currentSlide: u,
                    slideHeight: c,
                    listHeight: d,
                    lazyLoadedList: f = f.concat(p)
                };
            return null === e.autoplaying && e.autoplay && (m.autoplaying = "playing"), m
        },
        T = function(e) {
            var t = e.waitForAnimate,
                n = e.animating,
                l = e.fade,
                r = e.infinite,
                o = e.index,
                i = e.slideCount,
                s = e.lazyLoad,
                c = e.currentSlide,
                d = e.centerMode,
                u = e.slidesToScroll,
                f = e.slidesToShow,
                p = e.useCSS,
                m = e.lazyLoadedList;
            if (t && n) return {};
            var h, g, v, b = o,
                $ = {},
                S = {},
                C = r ? o : y(o, 0, i - 1);
            if (l) {
                if (!r && (o < 0 || o >= i)) return {};
                o < 0 ? b = o + i : o >= i && (b = o - i), s && 0 > m.indexOf(b) && (m = m.concat(b)), $ = {
                    animating: !0,
                    currentSlide: b,
                    lazyLoadedList: m,
                    targetSlide: b
                }, S = {
                    animating: !1,
                    targetSlide: b
                }
            } else h = b, b < 0 ? (h = b + i, r ? i % u != 0 && (h = i - i % u) : h = 0) : !M(e) && b > c ? b = h = c : d && b >= i ? (b = r ? i : i - 1, h = r ? 0 : i - 1) : b >= i && (h = b - i, r ? i % u != 0 && (h = 0) : h = i - f), !r && b + f >= i && (h = i - f), g = _(a(a({}, e), {}, {
                slideIndex: b
            })), v = _(a(a({}, e), {}, {
                slideIndex: h
            })), r || (g === v && (b = h), g = v), s && (m = m.concat(x(a(a({}, e), {}, {
                currentSlide: b
            })))), p ? ($ = {
                animating: !0,
                currentSlide: h,
                trackStyle: F(a(a({}, e), {}, {
                    left: g
                })),
                lazyLoadedList: m,
                targetSlide: C
            }, S = {
                animating: !1,
                currentSlide: h,
                trackStyle: D(a(a({}, e), {}, {
                    left: v
                })),
                swipeLeft: null,
                targetSlide: C
            }) : $ = {
                currentSlide: h,
                trackStyle: D(a(a({}, e), {}, {
                    left: v
                })),
                lazyLoadedList: m,
                targetSlide: C
            };
            return {
                state: $,
                nextState: S
            }
        },
        H = function(e, t) {
            var n, l, r, o, i = e.slidesToScroll,
                s = e.slidesToShow,
                c = e.slideCount,
                d = e.currentSlide,
                u = e.targetSlide,
                f = e.lazyLoad,
                p = e.infinite;
            if (n = c % i != 0 ? 0 : (c - d) % i, "previous" === t.message) o = d - (r = 0 === n ? i : s - n), f && !p && (o = -1 == (l = d - r) ? c - 1 : l), p || (o = u - i);
            else if ("next" === t.message) o = d + (r = 0 === n ? i : n), f && !p && (o = (d + i) % c + n), p || (o = u + i);
            else if ("dots" === t.message) o = t.index * t.slidesToScroll;
            else if ("children" === t.message) {
                if (o = t.index, p) {
                    var m = V(a(a({}, e), {}, {
                        targetSlide: o
                    }));
                    o > t.currentSlide && "left" === m ? o -= c : o < t.currentSlide && "right" === m && (o += c)
                }
            } else "index" === t.message && (o = Number(t.index));
            return o
        },
        P = function(e, t) {
            var n = t.scrolling,
                l = t.animating,
                r = t.vertical,
                o = t.swipeToSlide,
                i = t.verticalSwiping,
                s = t.rtl,
                c = t.currentSlide,
                d = t.edgeFriction,
                u = t.edgeDragged,
                f = t.onEdge,
                p = t.swiped,
                m = t.swiping,
                h = t.slideCount,
                g = t.slidesToScroll,
                v = t.infinite,
                b = t.touchObject,
                y = t.swipeEvent,
                x = t.listHeight,
                S = t.listWidth;
            if (!n) {
                if (l) return $(e);
                r && o && i && $(e);
                var C, k = {},
                    w = _(t);
                b.curX = e.touches ? e.touches[0].pageX : e.clientX, b.curY = e.touches ? e.touches[0].pageY : e.clientY, b.swipeLength = Math.round(Math.sqrt(Math.pow(b.curX - b.startX, 2)));
                var E = Math.round(Math.sqrt(Math.pow(b.curY - b.startY, 2)));
                if (!i && !m && E > 10) return {
                    scrolling: !0
                };
                i && (b.swipeLength = E);
                var N = (s ? -1 : 1) * (b.curX > b.startX ? 1 : -1);
                i && (N = b.curY > b.startY ? 1 : -1);
                var z = Math.ceil(h / g),
                    R = I(t.touchObject, i),
                    T = b.swipeLength;
                return !v && (0 === c && ("right" === R || "down" === R) || c + 1 >= z && ("left" === R || "up" === R) || !M(t) && ("left" === R || "up" === R)) && (T = b.swipeLength * d, !1 === u && f && (f(R), k.edgeDragged = !0)), !p && y && (y(R), k.swiped = !0), C = r ? w + x / S * T * N : s ? w - T * N : w + T * N, i && (C = w + T * N), k = a(a({}, k), {}, {
                    touchObject: b,
                    swipeLeft: C,
                    trackStyle: D(a(a({}, t), {}, {
                        left: C
                    }))
                }), Math.abs(b.curX - b.startX) < .8 * Math.abs(b.curY - b.startY) || b.swipeLength > 10 && (k.swiping = !0, $(e)), k
            }
        },
        L = function(e, t) {
            var n = t.dragging,
                l = t.swipe,
                r = t.touchObject,
                o = t.listWidth,
                i = t.touchThreshold,
                s = t.verticalSwiping,
                c = t.listHeight,
                d = t.swipeToSlide,
                u = t.scrolling,
                f = t.onSwipe,
                p = t.targetSlide,
                m = t.currentSlide,
                h = t.infinite;
            if (!n) return l && $(e), {};
            var g = s ? c / i : o / i,
                v = I(r, s),
                b = {
                    dragging: !1,
                    edgeDragged: !1,
                    scrolling: !1,
                    swiping: !1,
                    swiped: !1,
                    swipeLeft: null,
                    touchObject: {}
                };
            if (u || !r.swipeLength) return b;
            if (r.swipeLength > g) {
                $(e), f && f(v);
                var y, x, S = h ? m : p;
                switch (v) {
                    case "left":
                    case "up":
                        x = S + O(t), y = d ? B(t, x) : x, b.currentDirection = 0;
                        break;
                    case "right":
                    case "down":
                        x = S - O(t), y = d ? B(t, x) : x, b.currentDirection = 1;
                        break;
                    default:
                        y = S
                }
                b.triggerSlideHandler = y
            } else {
                var C = _(t);
                b.trackStyle = F(a(a({}, t), {}, {
                    left: C
                }))
            }
            return b
        },
        A = function(e) {
            for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, l = e.infinite ? -1 * e.slidesToShow : 0, r = []; n < t;) r.push(n), n = l + e.slidesToScroll, l += Math.min(e.slidesToScroll, e.slidesToShow);
            return r
        },
        B = function(e, t) {
            var n = A(e),
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
        O = function(e) {
            var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
            if (!e.swipeToSlide) return e.slidesToScroll;
            var n, l = e.listRef;
            if (Array.from(l.querySelectorAll && l.querySelectorAll(".slick-slide") || []).every(function(l) {
                    if (e.vertical) {
                        if (l.offsetTop + N(l) / 2 > -1 * e.swipeLeft) return n = l, !1
                    } else if (l.offsetLeft - t + E(l) / 2 > -1 * e.swipeLeft) return n = l, !1;
                    return !0
                }), !n) return 0;
            var r = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
            return Math.abs(n.dataset.index - r) || 1
        },
        W = function(e, t) {
            return t.reduce(function(t, n) {
                return t && e.hasOwnProperty(n)
            }, !0) ? null : console.error("Keys Missing:", e)
        },
        D = function(e) {
            if (W(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]), e.vertical) {
                var t, n;
                n = (e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow) * e.slideHeight
            } else t = q(e) * e.slideWidth;
            var l = {
                opacity: 1,
                transition: "",
                WebkitTransition: ""
            };
            if (e.useTransform) {
                var r = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    o = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    i = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
                l = a(a({}, l), {}, {
                    WebkitTransform: r,
                    transform: o,
                    msTransform: i
                })
            } else e.vertical ? l.top = e.left : l.left = e.left;
            return e.fade && (l = {
                opacity: 1
            }), t && (l.width = t), n && (l.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? l.marginTop = e.left + "px" : l.marginLeft = e.left + "px"), l
        },
        F = function(e) {
            W(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
            var t = D(e);
            return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
        },
        _ = function(e) {
            if (e.unslick) return 0;
            W(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
            var t = e.slideIndex,
                n = e.trackRef,
                l = e.infinite,
                r = e.centerMode,
                o = e.slideCount,
                i = e.slidesToShow,
                a = e.slidesToScroll,
                s = e.slideWidth,
                c = e.listWidth,
                d = e.variableWidth,
                u = e.slideHeight,
                f = e.fade,
                p = e.vertical,
                m = 0,
                h = 0;
            if (f || 1 === e.slideCount) return 0;
            var g = 0;
            if (l ? (g = -j(e), o % a != 0 && t + a > o && (g = -(t > o ? i - (t - o) : o % a)), r && (g += parseInt(i / 2))) : (o % a != 0 && t + a > o && (g = i - o % a), r && (g = parseInt(i / 2))), m = g * s, h = g * u, v = p ? -(t * u * 1) + h : -(t * s * 1) + m, !0 === d) {
                var v, b, y, $ = n && n.node;
                if (y = t + j(e), v = (b = $ && $.childNodes[y]) ? -1 * b.offsetLeft : 0, !0 === r) {
                    y = l ? t + j(e) : t, b = $ && $.children[y], v = 0;
                    for (var x = 0; x < y; x++) v -= $ && $.children[x] && $.children[x].offsetWidth;
                    v -= parseInt(e.centerPadding), v += b && (c - b.offsetWidth) / 2
                }
            }
            return v
        },
        j = function(e) {
            return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + +!!e.centerMode
        },
        X = function(e) {
            return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + +!!e.centerMode
        },
        q = function(e) {
            return 1 === e.slideCount ? 1 : j(e) + e.slideCount + X(e)
        },
        V = function(e) {
            return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + G(e) ? "left" : "right" : e.targetSlide < e.currentSlide - Y(e) ? "right" : "left"
        },
        G = function(e) {
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
        Y = function(e) {
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
        U = function() {
            return !!window.document && !!window.document.createElement
        },
        K = Object.keys(b),
        Q = function(e) {
            var t, n, l, r, o;
            return l = (o = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || o >= e.slideCount, e.centerMode ? (r = Math.floor(e.slidesToShow / 2), n = (o - e.currentSlide) % e.slideCount == 0, o > e.currentSlide - r - 1 && o <= e.currentSlide + r && (t = !0)) : t = e.currentSlide <= o && o < e.currentSlide + e.slidesToShow, {
                "slick-slide": !0,
                "slick-active": t,
                "slick-center": n,
                "slick-cloned": l,
                "slick-current": o === (e.targetSlide < 0 ? e.targetSlide + e.slideCount : e.targetSlide >= e.slideCount ? e.targetSlide - e.slideCount : e.targetSlide)
            }
        },
        Z = function(e) {
            var t = {};
            return (void 0 === e.variableWidth || !1 === e.variableWidth) && (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical && e.slideHeight ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = +(e.currentSlide === e.index), t.zIndex = e.currentSlide === e.index ? 999 : 998, e.useCSS && (t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase)), t
        },
        J = function(e, t) {
            return e.key + "-" + t
        },
        ee = function(e) {
            var n, l = [],
                r = [],
                o = [],
                i = t.default.Children.count(e.children),
                s = S(e),
                c = C(e);
            return (t.default.Children.forEach(e.children, function(d, u) {
                var f, p = {
                    message: "children",
                    index: u,
                    slidesToScroll: e.slidesToScroll,
                    currentSlide: e.currentSlide
                };
                f = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(u) >= 0 ? d : t.default.createElement("div", null);
                var m = Z(a(a({}, e), {}, {
                        index: u
                    })),
                    h = f.props.className || "",
                    g = Q(a(a({}, e), {}, {
                        index: u
                    }));
                if (l.push(t.default.cloneElement(f, {
                        key: "original" + J(f, u),
                        "data-index": u,
                        className: (0, v.clsx)(g, h),
                        tabIndex: "-1",
                        "aria-hidden": !g["slick-active"],
                        style: a(a({
                            outline: "none"
                        }, f.props.style || {}), m),
                        onClick: function(t) {
                            f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(p)
                        }
                    })), e.infinite && i > 1 && !1 === e.fade && !e.unslick) {
                    var b = i - u;
                    b <= j(e) && ((n = -b) >= s && (f = d), g = Q(a(a({}, e), {}, {
                        index: n
                    })), r.push(t.default.cloneElement(f, {
                        key: "precloned" + J(f, n),
                        "data-index": n,
                        tabIndex: "-1",
                        className: (0, v.clsx)(g, h),
                        "aria-hidden": !g["slick-active"],
                        style: a(a({}, f.props.style || {}), m),
                        onClick: function(t) {
                            f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(p)
                        }
                    }))), u < X(e) && ((n = i + u) < c && (f = d), g = Q(a(a({}, e), {}, {
                        index: n
                    })), o.push(t.default.cloneElement(f, {
                        key: "postcloned" + J(f, n),
                        "data-index": n,
                        tabIndex: "-1",
                        className: (0, v.clsx)(g, h),
                        "aria-hidden": !g["slick-active"],
                        style: a(a({}, f.props.style || {}), m),
                        onClick: function(t) {
                            f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(p)
                        }
                    })))
                }
            }), e.rtl) ? r.concat(l, o).reverse() : r.concat(l, o)
        },
        et = function(e) {
            function l() {
                s(this, l);
                for (var e, t, n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                return t = l, n = [].concat(i), t = p(t), o(e = u(this, f() ? Reflect.construct(t, n || [], p(this).constructor) : t.apply(this, n)), "node", null), o(e, "handleRef", function(t) {
                    e.node = t
                }), e
            }
            return h(l, e), d(l, [{
                key: "render",
                value: function() {
                    var e = ee(this.props),
                        l = this.props,
                        r = l.onMouseEnter,
                        o = l.onMouseOver,
                        i = l.onMouseLeave;
                    return t.default.createElement("div", n({
                        ref: this.handleRef,
                        className: "slick-track",
                        style: this.props.trackStyle
                    }, {
                        onMouseEnter: r,
                        onMouseOver: o,
                        onMouseLeave: i
                    }), e)
                }
            }])
        }(t.default.PureComponent),
        en = function(e) {
            return e.infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1
        },
        el = function(e) {
            function n() {
                var e, t;
                return s(this, n), e = n, t = arguments, e = p(e), u(this, f() ? Reflect.construct(e, t || [], p(this).constructor) : e.apply(this, t))
            }
            return h(n, e), d(n, [{
                key: "clickHandler",
                value: function(e, t) {
                    t.preventDefault(), this.props.clickHandler(e)
                }
            }, {
                key: "render",
                value: function() {
                    for (var e = this.props, n = e.onMouseEnter, l = e.onMouseOver, r = e.onMouseLeave, o = e.infinite, i = e.slidesToScroll, s = e.slidesToShow, c = e.slideCount, d = e.currentSlide, u = en({
                            slideCount: c,
                            slidesToScroll: i,
                            slidesToShow: s,
                            infinite: o
                        }), f = [], p = 0; p < u; p++) {
                        var m = (p + 1) * i - 1,
                            h = o ? m : y(m, 0, c - 1),
                            g = h - (i - 1),
                            b = o ? g : y(g, 0, c - 1),
                            $ = (0, v.clsx)({
                                "slick-active": o ? d >= b && d <= h : d === b
                            }),
                            x = {
                                message: "dots",
                                index: p,
                                slidesToScroll: i,
                                currentSlide: d
                            },
                            S = this.clickHandler.bind(this, x);
                        f = f.concat(t.default.createElement("li", {
                            key: p,
                            className: $
                        }, t.default.cloneElement(this.props.customPaging(p), {
                            onClick: S
                        })))
                    }
                    return t.default.cloneElement(this.props.appendDots(f), a({
                        className: this.props.dotsClass
                    }, {
                        onMouseEnter: n,
                        onMouseOver: l,
                        onMouseLeave: r
                    }))
                }
            }])
        }(t.default.PureComponent);

    function er(e, t, n) {
        return t = p(t), u(e, f() ? Reflect.construct(t, n || [], p(e).constructor) : t.apply(e, n))
    }
    var eo = function(e) {
            function l() {
                return s(this, l), er(this, l, arguments)
            }
            return h(l, e), d(l, [{
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
                        l = this.clickHandler.bind(this, {
                            message: "previous"
                        });
                    !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, l = null);
                    var r = {
                            key: "0",
                            "data-role": "none",
                            className: (0, v.clsx)(e),
                            style: {
                                display: "block"
                            },
                            onClick: l
                        },
                        o = {
                            currentSlide: this.props.currentSlide,
                            slideCount: this.props.slideCount
                        };
                    return this.props.prevArrow ? t.default.cloneElement(this.props.prevArrow, a(a({}, r), o)) : t.default.createElement("button", n({
                        key: "0",
                        type: "button"
                    }, r), " ", "Previous")
                }
            }])
        }(t.default.PureComponent),
        ei = function(e) {
            function l() {
                return s(this, l), er(this, l, arguments)
            }
            return h(l, e), d(l, [{
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
                        l = this.clickHandler.bind(this, {
                            message: "next"
                        });
                    M(this.props) || (e["slick-disabled"] = !0, l = null);
                    var r = {
                            key: "1",
                            "data-role": "none",
                            className: (0, v.clsx)(e),
                            style: {
                                display: "block"
                            },
                            onClick: l
                        },
                        o = {
                            currentSlide: this.props.currentSlide,
                            slideCount: this.props.slideCount
                        };
                    return this.props.nextArrow ? t.default.cloneElement(this.props.nextArrow, a(a({}, r), o)) : t.default.createElement("button", n({
                        key: "1",
                        type: "button"
                    }, r), " ", "Next")
                }
            }])
        }(t.default.PureComponent),
        ea = ["animating"],
        es = function(e) {
            function r(e) {
                s(this, r), l = r, i = [e], l = p(l), o(c = u(this, f() ? Reflect.construct(l, i || [], p(this).constructor) : l.apply(this, i)), "listRefHandler", function(e) {
                    return c.list = e
                }), o(c, "trackRefHandler", function(e) {
                    return c.track = e
                }), o(c, "adaptHeight", function() {
                    if (c.props.adaptiveHeight && c.list) {
                        var e = c.list.querySelector('[data-index="'.concat(c.state.currentSlide, '"]'));
                        c.list.style.height = N(e) + "px"
                    }
                }), o(c, "componentDidMount", function() {
                    if (c.props.onInit && c.props.onInit(), c.props.lazyLoad) {
                        var e = x(a(a({}, c.props), c.state));
                        e.length > 0 && (c.setState(function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        }), c.props.onLazyLoad && c.props.onLazyLoad(e))
                    }
                    var t = a({
                        listRef: c.list,
                        trackRef: c.track
                    }, c.props);
                    c.updateState(t, !0, function() {
                        c.adaptHeight(), c.props.autoplay && c.autoPlay("playing")
                    }), "progressive" === c.props.lazyLoad && (c.lazyLoadTimer = setInterval(c.progressiveLazyLoad, 1e3)), "u" > typeof ResizeObserver && (c.ro = new ResizeObserver(function() {
                        c.state.animating ? (c.onWindowResized(!1), c.callbackTimers.push(setTimeout(function() {
                            return c.onWindowResized()
                        }, c.props.speed))) : c.onWindowResized()
                    }), c.ro.observe(c.list)), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(e) {
                        e.onfocus = c.props.pauseOnFocus ? c.onSlideFocus : null, e.onblur = c.props.pauseOnFocus ? c.onSlideBlur : null
                    }), window.addEventListener ? window.addEventListener("resize", c.onWindowResized) : window.attachEvent("onresize", c.onWindowResized)
                }), o(c, "componentWillUnmount", function() {
                    var e;
                    c.animationEndCallback && clearTimeout(c.animationEndCallback), c.lazyLoadTimer && clearInterval(c.lazyLoadTimer), c.callbackTimers.length && (c.callbackTimers.forEach(function(e) {
                        return clearTimeout(e)
                    }), c.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", c.onWindowResized) : window.detachEvent("onresize", c.onWindowResized), c.autoplayTimer && clearInterval(c.autoplayTimer), null == (e = c.ro) || e.disconnect()
                }), o(c, "componentDidUpdate", function(e) {
                    if (c.checkImagesLoad(), c.props.onReInit && c.props.onReInit(), c.props.lazyLoad) {
                        var n = x(a(a({}, c.props), c.state));
                        n.length > 0 && (c.setState(function(e) {
                            return {
                                lazyLoadedList: e.lazyLoadedList.concat(n)
                            }
                        }), c.props.onLazyLoad && c.props.onLazyLoad(n))
                    }
                    c.adaptHeight();
                    var l = a(a({
                            listRef: c.list,
                            trackRef: c.track
                        }, c.props), c.state),
                        r = c.didPropsChange(e);
                    r && c.updateState(l, r, function() {
                        c.state.currentSlide >= t.default.Children.count(c.props.children) && c.changeSlide({
                            message: "index",
                            index: t.default.Children.count(c.props.children) - c.props.slidesToShow,
                            currentSlide: c.state.currentSlide
                        }), (e.autoplay !== c.props.autoplay || e.autoplaySpeed !== c.props.autoplaySpeed) && (!e.autoplay && c.props.autoplay ? c.autoPlay("playing") : c.props.autoplay ? c.autoPlay("update") : c.pause("paused"))
                    })
                }), o(c, "onWindowResized", function(e) {
                    c.debouncedResize && c.debouncedResize.cancel(), c.debouncedResize = function(e, t, n) {
                        var l, r = n || {},
                            o = r.noTrailing,
                            i = void 0 !== o && o,
                            a = r.noLeading,
                            s = void 0 !== a && a,
                            c = r.debounceMode,
                            d = void 0 === c ? void 0 : c,
                            u = !1,
                            f = 0;

                        function p() {
                            l && clearTimeout(l)
                        }

                        function m() {
                            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            var a = this,
                                c = Date.now() - f;

                            function m() {
                                f = Date.now(), t.apply(a, r)
                            }

                            function h() {
                                l = void 0
                            }!u && (s || !d || l || m(), p(), void 0 === d && c > e ? s ? (f = Date.now(), i || (l = setTimeout(d ? h : m, e))) : m() : !0 !== i && (l = setTimeout(d ? h : m, void 0 === d ? e - c : e)))
                        }
                        return m.cancel = function(e) {
                            var t = (e || {}).upcomingOnly;
                            p(), u = !(void 0 !== t && t)
                        }, m
                    }(50, function() {
                        return c.resizeWindow(e)
                    }, {
                        debounceMode: false
                    }), c.debouncedResize()
                }), o(c, "resizeWindow", function() {
                    var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    if (c.track && c.track.node) {
                        var t = a(a({
                            listRef: c.list,
                            trackRef: c.track
                        }, c.props), c.state);
                        c.updateState(t, e, function() {
                            c.props.autoplay ? c.autoPlay("update") : c.pause("paused")
                        }), c.setState({
                            animating: !1
                        }), clearTimeout(c.animationEndCallback), delete c.animationEndCallback
                    }
                }), o(c, "updateState", function(e, n, l) {
                    var r = R(e),
                        o = _(e = a(a(a({}, e), r), {}, {
                            slideIndex: r.currentSlide
                        })),
                        i = D(e = a(a({}, e), {}, {
                            left: o
                        }));
                    (n || t.default.Children.count(c.props.children) !== t.default.Children.count(e.children)) && (r.trackStyle = i), c.setState(r, l)
                }), o(c, "ssrInit", function() {
                    if (c.props.variableWidth) {
                        var e = 0,
                            n = 0,
                            l = [],
                            r = j(a(a(a({}, c.props), c.state), {}, {
                                slideCount: c.props.children.length
                            })),
                            o = X(a(a(a({}, c.props), c.state), {}, {
                                slideCount: c.props.children.length
                            }));
                        c.props.children.forEach(function(t) {
                            l.push(t.props.style.width), e += t.props.style.width
                        });
                        for (var i = 0; i < r; i++) n += l[l.length - 1 - i], e += l[l.length - 1 - i];
                        for (var s = 0; s < o; s++) e += l[s];
                        for (var d = 0; d < c.state.currentSlide; d++) n += l[d];
                        var u = {
                            width: e + "px",
                            left: -n + "px"
                        };
                        if (c.props.centerMode) {
                            var f = "".concat(l[c.state.currentSlide], "px");
                            u.left = "calc(".concat(u.left, " + (100% - ").concat(f, ") / 2 ) ")
                        }
                        return {
                            trackStyle: u
                        }
                    }
                    var p = t.default.Children.count(c.props.children),
                        m = a(a(a({}, c.props), c.state), {}, {
                            slideCount: p
                        }),
                        h = j(m) + X(m) + p,
                        g = 100 / c.props.slidesToShow * h,
                        v = 100 / h,
                        b = -v * (j(m) + c.state.currentSlide) * g / 100;
                    return c.props.centerMode && (b += (100 - v * g / 100) / 2), {
                        slideWidth: v + "%",
                        trackStyle: {
                            width: g + "%",
                            left: b + "%"
                        }
                    }
                }), o(c, "checkImagesLoad", function() {
                    var e = c.list && c.list.querySelectorAll && c.list.querySelectorAll(".slick-slide img") || [],
                        t = e.length,
                        n = 0;
                    Array.prototype.forEach.call(e, function(e) {
                        var l = function() {
                            return ++n && n >= t && c.onWindowResized()
                        };
                        if (e.onclick) {
                            var r = e.onclick;
                            e.onclick = function(t) {
                                r(t), e.parentNode.focus()
                            }
                        } else e.onclick = function() {
                            return e.parentNode.focus()
                        };
                        e.onload || (c.props.lazyLoad ? e.onload = function() {
                            c.adaptHeight(), c.callbackTimers.push(setTimeout(c.onWindowResized, c.props.speed))
                        } : (e.onload = l, e.onerror = function() {
                            l(), c.props.onLazyLoadError && c.props.onLazyLoadError()
                        }))
                    })
                }), o(c, "progressiveLazyLoad", function() {
                    for (var e = [], t = a(a({}, c.props), c.state), n = c.state.currentSlide; n < c.state.slideCount + X(t); n++)
                        if (0 > c.state.lazyLoadedList.indexOf(n)) {
                            e.push(n);
                            break
                        }
                    for (var l = c.state.currentSlide - 1; l >= -j(t); l--)
                        if (0 > c.state.lazyLoadedList.indexOf(l)) {
                            e.push(l);
                            break
                        }
                    e.length > 0 ? (c.setState(function(t) {
                        return {
                            lazyLoadedList: t.lazyLoadedList.concat(e)
                        }
                    }), c.props.onLazyLoad && c.props.onLazyLoad(e)) : c.lazyLoadTimer && (clearInterval(c.lazyLoadTimer), delete c.lazyLoadTimer)
                }), o(c, "slideHandler", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = c.props,
                        l = n.asNavFor,
                        r = n.beforeChange,
                        o = n.onLazyLoad,
                        i = n.speed,
                        s = n.afterChange,
                        d = c.state.currentSlide,
                        u = T(a(a(a({
                            index: e
                        }, c.props), c.state), {}, {
                            trackRef: c.track,
                            useCSS: c.props.useCSS && !t
                        })),
                        f = u.state,
                        p = u.nextState;
                    if (f) {
                        r && r(d, f.currentSlide);
                        var m = f.lazyLoadedList.filter(function(e) {
                            return 0 > c.state.lazyLoadedList.indexOf(e)
                        });
                        o && m.length > 0 && o(m), !c.props.waitForAnimate && c.animationEndCallback && (clearTimeout(c.animationEndCallback), s && s(d), delete c.animationEndCallback), c.setState(f, function() {
                            l && c.asNavForIndex !== e && (c.asNavForIndex = e, l.innerSlider.slideHandler(e)), p && (c.animationEndCallback = setTimeout(function() {
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
                                    }(p, ea);
                                c.setState(t, function() {
                                    c.callbackTimers.push(setTimeout(function() {
                                        return c.setState({
                                            animating: e
                                        })
                                    }, 10)), s && s(f.currentSlide), delete c.animationEndCallback
                                })
                            }, i))
                        })
                    }
                }), o(c, "changeSlide", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = H(a(a({}, c.props), c.state), e);
                    if ((0 === n || n) && (!0 === t ? c.slideHandler(n, t) : c.slideHandler(n), c.props.autoplay && c.autoPlay("update"), c.props.focusOnSelect)) {
                        var l = c.list.querySelectorAll(".slick-current");
                        l[0] && l[0].focus()
                    }
                }), o(c, "clickHandler", function(e) {
                    !1 === c.clickable && (e.stopPropagation(), e.preventDefault()), c.clickable = !0
                }), o(c, "keyHandler", function(e) {
                    var t, n, l = (t = c.props.accessibility, n = c.props.rtl, e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : "");
                    "" !== l && c.changeSlide({
                        message: l
                    })
                }), o(c, "selectHandler", function(e) {
                    c.changeSlide(e)
                }), o(c, "disableBodyScroll", function() {
                    window.ontouchmove = function(e) {
                        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                    }
                }), o(c, "enableBodyScroll", function() {
                    window.ontouchmove = null
                }), o(c, "swipeStart", function(e) {
                    c.props.verticalSwiping && c.disableBodyScroll();
                    var t, n, l = (t = c.props.swipe, n = c.props.draggable, ("IMG" === e.target.tagName && $(e), t && (n || -1 === e.type.indexOf("mouse"))) ? {
                        dragging: !0,
                        touchObject: {
                            startX: e.touches ? e.touches[0].pageX : e.clientX,
                            startY: e.touches ? e.touches[0].pageY : e.clientY,
                            curX: e.touches ? e.touches[0].pageX : e.clientX,
                            curY: e.touches ? e.touches[0].pageY : e.clientY
                        }
                    } : "");
                    "" !== l && c.setState(l)
                }), o(c, "swipeMove", function(e) {
                    var t = P(e, a(a(a({}, c.props), c.state), {}, {
                        trackRef: c.track,
                        listRef: c.list,
                        slideIndex: c.state.currentSlide
                    }));
                    t && (t.swiping && (c.clickable = !1), c.setState(t))
                }), o(c, "swipeEnd", function(e) {
                    var t = L(e, a(a(a({}, c.props), c.state), {}, {
                        trackRef: c.track,
                        listRef: c.list,
                        slideIndex: c.state.currentSlide
                    }));
                    if (t) {
                        var n = t.triggerSlideHandler;
                        delete t.triggerSlideHandler, c.setState(t), void 0 !== n && (c.slideHandler(n), c.props.verticalSwiping && c.enableBodyScroll())
                    }
                }), o(c, "touchEnd", function(e) {
                    c.swipeEnd(e), c.clickable = !0
                }), o(c, "slickPrev", function() {
                    c.callbackTimers.push(setTimeout(function() {
                        return c.changeSlide({
                            message: "previous"
                        })
                    }, 0))
                }), o(c, "slickNext", function() {
                    c.callbackTimers.push(setTimeout(function() {
                        return c.changeSlide({
                            message: "next"
                        })
                    }, 0))
                }), o(c, "slickGoTo", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (isNaN(e = Number(e))) return "";
                    c.callbackTimers.push(setTimeout(function() {
                        return c.changeSlide({
                            message: "index",
                            index: e,
                            currentSlide: c.state.currentSlide
                        }, t)
                    }, 0))
                }), o(c, "play", function() {
                    var e;
                    if (c.props.rtl) e = c.state.currentSlide - c.props.slidesToScroll;
                    else {
                        if (!M(a(a({}, c.props), c.state))) return !1;
                        e = c.state.currentSlide + c.props.slidesToScroll
                    }
                    c.slideHandler(e)
                }), o(c, "autoPlay", function(e) {
                    c.autoplayTimer && clearInterval(c.autoplayTimer);
                    var t = c.state.autoplaying;
                    if ("update" === e) {
                        if ("hovered" === t || "focused" === t || "paused" === t) return
                    } else if ("leave" === e) {
                        if ("paused" === t || "focused" === t) return
                    } else if ("blur" === e && ("paused" === t || "hovered" === t)) return;
                    c.autoplayTimer = setInterval(c.play, c.props.autoplaySpeed + 50), c.setState({
                        autoplaying: "playing"
                    })
                }), o(c, "pause", function(e) {
                    c.autoplayTimer && (clearInterval(c.autoplayTimer), c.autoplayTimer = null);
                    var t = c.state.autoplaying;
                    "paused" === e ? c.setState({
                        autoplaying: "paused"
                    }) : "focused" === e ? ("hovered" === t || "playing" === t) && c.setState({
                        autoplaying: "focused"
                    }) : "playing" === t && c.setState({
                        autoplaying: "hovered"
                    })
                }), o(c, "onDotsOver", function() {
                    return c.props.autoplay && c.pause("hovered")
                }), o(c, "onDotsLeave", function() {
                    return c.props.autoplay && "hovered" === c.state.autoplaying && c.autoPlay("leave")
                }), o(c, "onTrackOver", function() {
                    return c.props.autoplay && c.pause("hovered")
                }), o(c, "onTrackLeave", function() {
                    return c.props.autoplay && "hovered" === c.state.autoplaying && c.autoPlay("leave")
                }), o(c, "onSlideFocus", function() {
                    return c.props.autoplay && c.pause("focused")
                }), o(c, "onSlideBlur", function() {
                    return c.props.autoplay && "focused" === c.state.autoplaying && c.autoPlay("blur")
                }), o(c, "render", function() {
                    var e, l, r, o = (0, v.clsx)("slick-slider", c.props.className, {
                            "slick-vertical": c.props.vertical,
                            "slick-initialized": !0
                        }),
                        i = a(a({}, c.props), c.state),
                        s = z(i, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
                        d = c.props.pauseOnHover;
                    if (s = a(a({}, s), {}, {
                            onMouseEnter: d ? c.onTrackOver : null,
                            onMouseLeave: d ? c.onTrackLeave : null,
                            onMouseOver: d ? c.onTrackOver : null,
                            focusOnSelect: c.props.focusOnSelect && c.clickable ? c.selectHandler : null
                        }), !0 === c.props.dots && c.state.slideCount >= c.props.slidesToShow) {
                        var u = z(i, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                            f = c.props.pauseOnDotsHover;
                        u = a(a({}, u), {}, {
                            clickHandler: c.changeSlide,
                            onMouseEnter: f ? c.onDotsLeave : null,
                            onMouseOver: f ? c.onDotsOver : null,
                            onMouseLeave: f ? c.onDotsLeave : null
                        }), e = t.default.createElement(el, u)
                    }
                    var p = z(i, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                    p.clickHandler = c.changeSlide, c.props.arrows && (l = t.default.createElement(eo, p), r = t.default.createElement(ei, p));
                    var m = null;
                    c.props.vertical && (m = {
                        height: c.state.listHeight
                    });
                    var h = null;
                    !1 === c.props.vertical ? !0 === c.props.centerMode && (h = {
                        padding: "0px " + c.props.centerPadding
                    }) : !0 === c.props.centerMode && (h = {
                        padding: c.props.centerPadding + " 0px"
                    });
                    var g = a(a({}, m), h),
                        b = c.props.touchMove,
                        y = {
                            className: "slick-list",
                            style: g,
                            onClick: c.clickHandler,
                            onMouseDown: b ? c.swipeStart : null,
                            onMouseMove: c.state.dragging && b ? c.swipeMove : null,
                            onMouseUp: b ? c.swipeEnd : null,
                            onMouseLeave: c.state.dragging && b ? c.swipeEnd : null,
                            onTouchStart: b ? c.swipeStart : null,
                            onTouchMove: c.state.dragging && b ? c.swipeMove : null,
                            onTouchEnd: b ? c.touchEnd : null,
                            onTouchCancel: c.state.dragging && b ? c.swipeEnd : null,
                            onKeyDown: c.props.accessibility ? c.keyHandler : null
                        },
                        $ = {
                            className: o,
                            dir: "ltr",
                            style: c.props.style
                        };
                    return c.props.unslick && (y = {
                        className: "slick-list"
                    }, $ = {
                        className: o,
                        style: c.props.style
                    }), t.default.createElement("div", $, c.props.unslick ? "" : l, t.default.createElement("div", n({
                        ref: c.listRefHandler
                    }, y), t.default.createElement(et, n({
                        ref: c.trackRefHandler
                    }, s), c.props.children)), c.props.unslick ? "" : r, c.props.unslick ? "" : e)
                }), c.list = null, c.track = null, c.state = a(a({}, g), {}, {
                    currentSlide: c.props.initialSlide,
                    targetSlide: c.props.initialSlide ? c.props.initialSlide : 0,
                    slideCount: t.default.Children.count(c.props.children)
                }), c.callbackTimers = [], c.clickable = !0, c.debouncedResize = null;
                var l, i, c, d = c.ssrInit();
                return c.state = a(a({}, c.state), d), c
            }
            return h(r, e), d(r, [{
                key: "didPropsChange",
                value: function(e) {
                    for (var n = !1, r = 0, o = Object.keys(this.props); r < o.length; r++) {
                        var i = o[r];
                        if (!e.hasOwnProperty(i) || !("object" === l(e[i]) || "function" == typeof e[i] || isNaN(e[i])) && e[i] !== this.props[i]) {
                            n = !0;
                            break
                        }
                    }
                    return n || t.default.Children.count(this.props.children) !== t.default.Children.count(e.children)
                }
            }])
        }(t.default.Component),
        ec = e.i(52240),
        ed = function(e) {
            function l(e) {
                var t, n, r;
                return s(this, l), n = l, r = [e], n = p(n), o(t = u(this, f() ? Reflect.construct(n, r || [], p(this).constructor) : n.apply(this, r)), "innerSliderRefHandler", function(e) {
                    return t.innerSlider = e
                }), o(t, "slickPrev", function() {
                    return t.innerSlider.slickPrev()
                }), o(t, "slickNext", function() {
                    return t.innerSlider.slickNext()
                }), o(t, "slickGoTo", function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t.innerSlider.slickGoTo(e, n)
                }), o(t, "slickPause", function() {
                    return t.innerSlider.pause("paused")
                }), o(t, "slickPlay", function() {
                    return t.innerSlider.autoPlay("play")
                }), t.state = {
                    breakpoint: null
                }, t._responsiveMediaHandlers = [], t
            }
            return h(l, e), d(l, [{
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
                            r = 0 === l ? (0, ec.default)({
                                minWidth: 0,
                                maxWidth: n
                            }) : (0, ec.default)({
                                minWidth: t[l - 1] + 1,
                                maxWidth: n
                            }), U() && e.media(r, function() {
                                e.setState({
                                    breakpoint: n
                                })
                            })
                        });
                        var n = (0, ec.default)({
                            minWidth: t.slice(-1)[0]
                        });
                        U() && this.media(n, function() {
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
                    var e, l, r = this;
                    (e = this.state.breakpoint ? "unslick" === (l = this.props.responsive.filter(function(e) {
                        return e.breakpoint === r.state.breakpoint
                    }))[0].settings ? "unslick" : a(a(a({}, b), this.props), l[0].settings) : a(a({}, b), this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                    var o = t.default.Children.toArray(this.props.children);
                    o = o.filter(function(e) {
                        return "string" == typeof e ? !!e.trim() : !!e
                    }), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                    for (var i = [], s = null, c = 0; c < o.length; c += e.rows * e.slidesPerRow) {
                        for (var d = [], u = c; u < c + e.rows * e.slidesPerRow; u += e.slidesPerRow) {
                            for (var f = [], p = u; p < u + e.slidesPerRow && (e.variableWidth && o[p].props.style && (s = o[p].props.style.width), !(p >= o.length)); p += 1) f.push(t.default.cloneElement(o[p], {
                                key: 100 * c + 10 * u + p,
                                tabIndex: -1,
                                style: {
                                    width: "".concat(100 / e.slidesPerRow, "%"),
                                    display: "inline-block"
                                }
                            }));
                            d.push(t.default.createElement("div", {
                                key: 10 * c + u
                            }, f))
                        }
                        e.variableWidth ? i.push(t.default.createElement("div", {
                            key: c,
                            style: {
                                width: s
                            }
                        }, d)) : i.push(t.default.createElement("div", {
                            key: c
                        }, d))
                    }
                    if ("unslick" === e) {
                        var m = "regular slider " + (this.props.className || "");
                        return t.default.createElement("div", {
                            className: m
                        }, o)
                    }
                    return i.length <= e.slidesToShow && (e.unslick = !0), t.default.createElement(es, n({
                        style: this.props.style,
                        ref: this.innerSliderRefHandler
                    }, K.reduce(function(t, n) {
                        return e.hasOwnProperty(n) && (t[n] = e[n]), t
                    }, {})), i)
                }
            }])
        }(t.default.Component);
    e.i(63335);
    var eu = e.i(943081),
        ef = e.i(242064);
    e.i(296059);
    var ep = e.i(694758),
        em = e.i(915654),
        eh = e.i(183293),
        eg = e.i(246422);
    let ev = "--dot-duration",
        eb = (0, eg.genStyleHooks)("Carousel", e => [(e => {
            let {
                componentCls: t,
                antCls: n
            } = e;
            return {
                [t]: { ...(0, eh.resetComponent)(e),
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
                colorBgContainer: i,
                motionDurationSlow: a
            } = e, s = new ep.Keyframes(`${e.prefixCls}-dot-animation`, {
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
                            transition: `all ${a}`,
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
                                background: i,
                                border: 0,
                                borderRadius: r,
                                outline: "none",
                                cursor: "pointer",
                                opacity: .2,
                                transition: `all ${a}`,
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
                                    background: i,
                                    animationName: s,
                                    animationDuration: `var(${ev})`,
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
            } = e, o = new ep.Keyframes(`${e.prefixCls}-dot-vertical-animation`, {
                from: {
                    height: 0
                },
                to: {
                    height: e.dotActiveWidth
                }
            }), i = {
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
                        li: { ...i,
                            margin: `${(0,em.unit)(r)} 0`,
                            verticalAlign: "baseline",
                            button: i,
                            "&::after": { ...i,
                                height: 0
                            },
                            "&.slick-active": { ...i,
                                height: e.dotActiveWidth,
                                button: { ...i,
                                    height: e.dotActiveWidth
                                },
                                "&::after": { ...i,
                                    animationName: o,
                                    animationDuration: `var(${ev})`,
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
        ey = "slick-dots",
        e$ = e => {
            let {
                currentSlide: n,
                slideCount: l,
                ...r
            } = e;
            return t.createElement("button", {
                type: "button",
                ...r
            })
        },
        ex = t.forwardRef((e, n) => {
            let {
                dots: l = !0,
                arrows: r = !1,
                prevArrow: o,
                nextArrow: i,
                draggable: a = !1,
                waitForAnimate: s = !1,
                dotPosition: c,
                dotPlacement: d,
                vertical: u,
                rootClassName: f,
                className: p,
                style: m,
                id: h,
                autoplay: g = !1,
                autoplaySpeed: b = 3e3,
                rtl: y,
                ...$
            } = e, x = t.useMemo(() => {
                let e = d ? ? c ? ? "bottom";
                switch (e) {
                    case "left":
                        return "start";
                    case "right":
                        return "end";
                    default:
                        return e
                }
            }, [c, d]), S = u ? ? ("start" === x || "end" === x), {
                getPrefixCls: C,
                direction: k,
                className: w,
                style: E
            } = (0, ef.useComponentConfig)("carousel"), N = t.useRef(null), I = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                N.current.slickGoTo(e, t)
            };
            t.useImperativeHandle(n, () => ({
                goTo: I,
                autoPlay: N.current.innerSlider.autoPlay,
                innerSlider: N.current.innerSlider,
                prev: N.current.slickPrev,
                next: N.current.slickNext
            }), [N.current]);
            let {
                children: M,
                initialSlide: z = 0
            } = e, R = (0, eu.toArray)(M).length, T = (y ? ? "rtl" === k) && !u;
            t.useEffect(() => {
                R > 0 && I(T ? R - z - 1 : z, !1)
            }, [R, z, T]);
            let H = {
                vertical: S,
                className: (0, v.clsx)(p, w),
                style: { ...E,
                    ...m
                },
                autoplay: !!g,
                ...$
            };
            "fade" === H.effect && (H.fade = !0);
            let P = C("carousel", H.prefixCls),
                L = !!l,
                A = (0, v.clsx)(ey, `${ey}-${x}`, "boolean" != typeof l && l ? .className),
                [B, O] = eb(P),
                W = (0, v.clsx)(P, {
                    [`${P}-rtl`]: T,
                    [`${P}-vertical`]: H.vertical
                }, B, O, f),
                D = g && "object" == typeof g && g.dotDuration ? {
                    [ev]: `${b}ms`
                } : {};
            return t.createElement("div", {
                className: W,
                id: h,
                style: D
            }, t.createElement(ed, {
                ref: N,
                ...H,
                dots: L,
                dotsClass: A,
                arrows: r,
                prevArrow: o ? ? t.createElement(e$, {
                    "aria-label": T ? "next" : "prev"
                }),
                nextArrow: i ? ? t.createElement(e$, {
                    "aria-label": T ? "prev" : "next"
                }),
                draggable: a,
                verticalSwiping: S,
                autoplaySpeed: b,
                waitForAnimate: s,
                rtl: T
            }))
        });
    e.s(["default", 0, ex], 634771)
}, 196306, e => {
    "use strict";
    e.i(247167);
    let t = () => {};
    e.s(["unstableSetRender", 0, t], 984712), e.i(984712);
    var n = e.i(271645),
        l = e.i(978052),
        r = e.i(207670),
        o = e.i(991330),
        i = e.i(737434);
    let a = function(e) {
        let t = null,
            n = function() {
                for (var n = arguments.length, l = Array(n), r = 0; r < n; r++) l[r] = arguments[r];
                null === t && (t = (0, i.default)(() => {
                    t = null, e.apply(void 0, (0, o.default)(l))
                }))
            };
        return n.cancel = () => {
            i.default.cancel(t), t = null
        }, n
    };
    var s = e.i(242064),
        c = e.i(246422);
    let d = (0, c.genStyleHooks)("Affix", e => {
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

    function u(e) {
        return e !== window ? e.getBoundingClientRect() : {
            top: 0,
            bottom: window.innerHeight
        }
    }

    function f(e, t, n) {
        if (void 0 !== n && Math.round(t.top) > Math.round(e.top) - n) return n + t.top
    }

    function p(e, t, n) {
        if (void 0 !== n && Math.round(t.bottom) < Math.round(e.bottom) + n) return n + (window.innerHeight - t.bottom)
    }
    let m = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"];

    function h() {
        return window
    }
    let g = n.default.forwardRef((e, t) => {
        let {
            style: o,
            offsetTop: i,
            offsetBottom: c,
            prefixCls: g,
            className: v,
            rootClassName: b,
            children: y,
            target: $,
            onChange: x,
            onTestUpdatePosition: S,
            ...C
        } = e, {
            getPrefixCls: k,
            className: w,
            style: E
        } = (0, s.useComponentConfig)("affix"), {
            getTargetContainer: N
        } = n.default.useContext(s.ConfigContext), I = k("affix", g), [M, z] = n.default.useState(!1), [R, T] = n.default.useState(), [H, P] = n.default.useState(), L = n.default.useRef(0), A = n.default.useRef(null), B = n.default.useRef(null), O = n.default.useRef(null), W = n.default.useRef(null), D = n.default.useRef(null), F = $ ? ? N ? ? h, _ = void 0 === c && void 0 === i ? 0 : i, j = () => {
            L.current = 1, (() => {
                if (1 !== L.current || !W.current || !O.current || !F) return;
                let e = F();
                if (e) {
                    let t = {
                            status: 0
                        },
                        n = u(O.current);
                    if (0 === n.top && 0 === n.left && 0 === n.width && 0 === n.height) return;
                    let l = u(e),
                        r = f(n, l, _),
                        o = p(n, l, c);
                    void 0 !== r ? (t.affixStyle = {
                        position: "fixed",
                        top: r,
                        width: n.width,
                        height: n.height
                    }, t.placeholderStyle = {
                        width: n.width,
                        height: n.height
                    }) : void 0 !== o && (t.affixStyle = {
                        position: "fixed",
                        bottom: o,
                        width: n.width,
                        height: n.height
                    }, t.placeholderStyle = {
                        width: n.width,
                        height: n.height
                    }), t.lastAffix = !!t.affixStyle, M !== t.lastAffix && x ? .(t.lastAffix), L.current = t.status, T(t.affixStyle), P(t.placeholderStyle), z(t.lastAffix)
                }
            })()
        }, X = a(() => {
            j()
        }), q = a(() => {
            if (F && R) {
                let e = F();
                if (e && O.current) {
                    let t = u(e),
                        n = u(O.current),
                        l = f(n, t, _),
                        r = p(n, t, c);
                    if (void 0 !== l && R.top === l || void 0 !== r && R.bottom === r) return
                }
            }
            j()
        }), V = () => {
            let e = F ? .();
            e && (m.forEach(t => {
                B.current && A.current ? .removeEventListener(t, B.current), e ? .addEventListener(t, q)
            }), A.current = e, B.current = q)
        }, G = () => {
            let e = F ? .();
            m.forEach(t => {
                e ? .removeEventListener(t, q), B.current && A.current ? .removeEventListener(t, B.current)
            }), X.cancel(), q.cancel()
        };
        n.default.useImperativeHandle(t, () => ({
            updatePosition: X
        })), n.default.useEffect(() => (D.current = setTimeout(V), () => {
            D.current && (clearTimeout(D.current), D.current = null), G()
        }), []), n.default.useEffect(() => (V(), () => G()), [$, R, M, i, c]), n.default.useEffect(() => {
            X()
        }, [$, i, c]);
        let [Y, U] = d(I), K = (0, r.clsx)(b, Y, I, U), Q = (0, r.clsx)({
            [K]: R
        });
        return n.default.createElement(l.default, {
            onResize: X
        }, n.default.createElement("div", {
            style: { ...E,
                ...o
            },
            className: (0, r.clsx)(v, w),
            ref: O,
            ...C
        }, R && n.default.createElement("div", {
            style: H,
            "aria-hidden": "true"
        }), n.default.createElement("div", {
            className: Q,
            ref: W,
            style: R
        }, n.default.createElement(l.default, {
            onResize: X
        }, y))))
    });
    var v = e.i(534300);
    e.i(63335);
    var b = e.i(580251),
        y = e.i(191909),
        $ = e.i(375147),
        x = e.i(711517),
        S = e.i(451961),
        C = e.i(321883);
    let k = n.createContext(void 0),
        w = e => {
            let {
                href: t,
                title: l,
                prefixCls: o,
                children: i,
                className: a,
                target: c,
                replace: d
            } = e, {
                registerLink: u,
                unregisterLink: f,
                scrollTo: p,
                onClick: m,
                activeLink: h,
                direction: g,
                classNames: v,
                styles: b
            } = n.useContext(k) || {};
            n.useEffect(() => (u ? .(t), () => {
                f ? .(t)
            }), [t]);
            let {
                getPrefixCls: y
            } = n.useContext(s.ConfigContext), $ = y("anchor", o), x = h === t, S = (0, r.clsx)(`${$}-link`, a, v ? .item, {
                [`${$}-link-active`]: x
            }), C = (0, r.clsx)(`${$}-link-title`, v ? .itemTitle, {
                [`${$}-link-title-active`]: x
            });
            return n.createElement("div", {
                className: S,
                style: b ? .item
            }, n.createElement("a", {
                className: C,
                style: b ? .itemTitle,
                href: t,
                title: "string" == typeof l ? l : "",
                target: c,
                onClick: e => {
                    if (m ? .(e, {
                            title: l,
                            href: t
                        }), p ? .(t), !e.defaultPrevented) {
                        if (t.startsWith("http://") || t.startsWith("https://")) {
                            d && (e.preventDefault(), window.location.replace(t));
                            return
                        }
                        e.preventDefault();
                        window.history[d ? "replaceState" : "pushState"](null, "", t)
                    }
                }
            }, l), "horizontal" !== g ? i : null)
        };
    e.i(296059);
    var E = e.i(915654),
        N = e.i(183293),
        I = e.i(838378);
    let M = (0, c.genStyleHooks)("Anchor", e => {
        let {
            fontSize: t,
            fontSizeLG: n,
            paddingXXS: l,
            calc: r
        } = e, o = (0, I.mergeToken)(e, {
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
                lineType: i,
                colorSplit: a,
                calc: s
            } = e;
            return {
                [`${t}-wrapper`]: {
                    marginBlockStart: s(n).mul(-1).equal(),
                    paddingBlockStart: n,
                    [t]: { ...(0, N.resetComponent)(e),
                        position: "relative",
                        paddingInlineStart: r,
                        [`${t}-link`]: {
                            paddingBlock: e.linkPaddingBlock,
                            paddingInline: `${(0,E.unit)(e.linkPaddingInlineStart)} 0`,
                            "&-title": { ...N.textEllipsis,
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
                                borderInlineStart: `${(0,E.unit)(r)} ${i} ${a}`,
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
                        borderBottom: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
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

    function z() {
        return window
    }

    function R(e, t) {
        if (!e.getClientRects().length) return 0;
        let n = e.getBoundingClientRect();
        return n.width || n.height ? t === window ? n.top - e.ownerDocument.documentElement.clientTop : n.top - t.getBoundingClientRect().top : n.top
    }
    let T = /#([\S ]+)$/,
        H = e => {
            let {
                rootClassName: t,
                prefixCls: l,
                className: i,
                style: a,
                offsetTop: c,
                affix: d = !0,
                showInkInFixed: u = !1,
                children: f,
                items: p,
                direction: m = "vertical",
                bounds: h,
                targetOffset: v,
                onClick: E,
                onChange: N,
                getContainer: I,
                getCurrentAnchor: H,
                replace: P,
                classNames: L,
                styles: A
            } = e, [B, O] = n.useState([]), [W, D] = n.useState(null), F = n.useRef(W), _ = n.useRef(null), j = n.useRef(null), X = n.useRef(!1), q = n.useRef(null), {
                direction: V,
                getPrefixCls: G,
                className: Y,
                style: U,
                classNames: K,
                styles: Q
            } = (0, s.useComponentConfig)("anchor"), {
                getTargetContainer: Z
            } = n.useContext(s.ConfigContext), J = G("anchor", l), ee = (0, C.default)(J), [et, en] = M(J, ee), el = I ? ? Z ? ? z, er = JSON.stringify(B), eo = (0, b.useEvent)(e => {
                B.includes(e) || O(t => [].concat((0, o.default)(t), [e]))
            }), ei = (0, b.useEvent)(e => {
                B.includes(e) && O(t => t.filter(t => t !== e))
            }), ea = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    l = [],
                    r = el();
                return (e.forEach(e => {
                    let o = T.exec(e ? .toString());
                    if (!o) return;
                    let i = document.getElementById(o[1]);
                    if (i) {
                        let o = R(i, r);
                        o <= t + n && l.push({
                            link: e,
                            top: o
                        })
                    }
                }), l.length) ? l.reduce((e, t) => t.top > e.top ? t : e).link : ""
            }, es = (0, b.useEvent)(e => {
                if (F.current === e) return;
                let t = "function" == typeof H ? H(e) : e;
                D(t), F.current = t, N ? .(e)
            }), ec = n.useCallback(() => {
                X.current || es(ea(B, void 0 !== v ? v : c || 0, h))
            }, [B, v, c, h]), ed = n.useCallback(e => {
                let t = F.current;
                es(e);
                let n = T.exec(e);
                if (!n) return;
                let l = document.getElementById(n[1]);
                if (!l) return;
                if (X.current) {
                    if (t === e) return;
                    q.current ? .()
                }
                let r = el(),
                    o = (0, $.default)(r) + R(l, r);
                o -= void 0 !== v ? v : c || 0, X.current = !0, q.current = (0, S.default)(o, {
                    getContainer: el,
                    callback() {
                        X.current = !1
                    }
                })
            }, [v, c]), eu = { ...e,
                direction: m
            }, [ef, ep] = (0, x.useMergeSemantic)([K, L], [Q, A], {
                props: eu
            }), em = (0, r.clsx)(et, en, ee, t, `${J}-wrapper`, {
                [`${J}-wrapper-horizontal`]: "horizontal" === m,
                [`${J}-rtl`]: "rtl" === V
            }, i, Y, ef.root), eh = (0, r.clsx)(J, {
                [`${J}-fixed`]: !d && !u
            }), eg = (0, r.clsx)(`${J}-ink`, ef.indicator, {
                [`${J}-ink-visible`]: W
            }), ev = {
                maxHeight: c ? `calc(100vh - ${c}px)` : "100vh",
                ...ep.root,
                ...U,
                ...a
            }, eb = e => Array.isArray(e) ? e.map(e => n.createElement(w, {
                replace: P,
                ...e,
                key: e.key
            }, "vertical" === m && eb(e.children))) : null, ey = n.createElement("div", {
                ref: _,
                className: em,
                style: ev
            }, n.createElement("div", {
                className: eh
            }, n.createElement("span", {
                className: eg,
                ref: j,
                style: ep.indicator
            }), "items" in e ? eb(p) : f));
            n.useEffect(() => {
                let e = el();
                return ec(), e ? .addEventListener("scroll", ec), () => {
                    e ? .removeEventListener("scroll", ec)
                }
            }, [er]), n.useEffect(() => {
                "function" == typeof H && es(H(F.current || ""))
            }, [H]), n.useEffect(() => {
                (() => {
                    let e = _.current ? .querySelector(`.${J}-link-title-active`);
                    if (e && j.current) {
                        let {
                            style: t
                        } = j.current, n = "horizontal" === m;
                        t.top = n ? "" : `${e.offsetTop+e.clientHeight/2}px`, t.height = n ? "" : `${e.clientHeight}px`, t.left = n ? `${e.offsetLeft}px` : "", t.width = n ? `${e.clientWidth}px` : "", n && (0, y.default)(e, {
                            scrollMode: "if-needed",
                            block: "nearest"
                        })
                    }
                })()
            }, [m, H, er, W]);
            let e$ = n.useMemo(() => ({
                registerLink: eo,
                unregisterLink: ei,
                scrollTo: ed,
                activeLink: W,
                onClick: E,
                direction: m,
                classNames: ef,
                styles: ep
            }), [W, E, ed, m, ep, ef]);
            return n.createElement(k.Provider, {
                value: e$
            }, d ? n.createElement(g, {
                offsetTop: c,
                target: el,
                ...d && "object" == typeof d ? d : void 0
            }, ey) : ey)
        };
    H.Link = w;
    var P = e.i(747656),
        L = e.i(413834),
        A = e.i(301483);
    e.i(882380);
    var B = e.i(62366),
        O = e.i(344411),
        W = e.i(563113),
        D = e.i(104458),
        F = e.i(201072),
        _ = e.i(726289),
        j = e.i(864517),
        X = e.i(562901),
        q = e.i(779573),
        V = e.i(739295),
        G = e.i(586317),
        Y = e.i(694758),
        U = e.i(122767);
    let K = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"],
        Q = {
            topLeft: "left",
            topRight: "right",
            bottomLeft: "left",
            bottomRight: "right",
            top: "left",
            bottom: "left"
        },
        Z = e => {
            let {
                iconCls: t,
                componentCls: n,
                boxShadow: l,
                fontSizeLG: r,
                notificationMarginBottom: o,
                borderRadiusLG: i,
                colorSuccess: a,
                colorInfo: s,
                colorWarning: c,
                colorError: d,
                colorTextHeading: u,
                notificationBg: f,
                notificationPadding: p,
                notificationMarginEdge: m,
                progressBg: h,
                notificationProgressHeight: g,
                fontSize: v,
                lineHeight: b,
                width: y,
                notificationIconSize: $,
                colorText: x,
                colorSuccessBg: S,
                colorErrorBg: C,
                colorInfoBg: k,
                colorWarningBg: w
            } = e, I = `${n}-notice`;
            return {
                position: "relative",
                marginBottom: o,
                marginInlineStart: "auto",
                background: f,
                borderRadius: i,
                boxShadow: l,
                [I]: {
                    padding: p,
                    width: y,
                    maxWidth: `calc(100vw - ${(0,E.unit)(e.calc(m).mul(2).equal())})`,
                    lineHeight: b,
                    wordWrap: "break-word",
                    borderRadius: i,
                    overflow: "hidden",
                    "&-success": S ? {
                        background: S
                    } : {},
                    "&-error": C ? {
                        background: C
                    } : {},
                    "&-info": k ? {
                        background: k
                    } : {},
                    "&-warning": w ? {
                        background: w
                    } : {}
                },
                [`${I}-title`]: {
                    marginBottom: e.marginXS,
                    color: u,
                    fontSize: r,
                    lineHeight: e.lineHeightLG
                },
                [`${I}-description`]: {
                    fontSize: v,
                    color: x,
                    marginTop: e.marginXS
                },
                [`${I}-closable ${I}-title`]: {
                    paddingInlineEnd: e.paddingLG
                },
                [`${I}-with-icon ${I}-title`]: {
                    marginBottom: e.marginXS,
                    marginInlineStart: e.calc(e.marginSM).add($).equal(),
                    fontSize: r
                },
                [`${I}-with-icon ${I}-description`]: {
                    marginInlineStart: e.calc(e.marginSM).add($).equal(),
                    fontSize: v
                },
                [`${I}-icon`]: {
                    position: "absolute",
                    fontSize: $,
                    lineHeight: 1,
                    [`&-success${t}`]: {
                        color: a
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
                    ...(0, N.genFocusStyle)(e)
                },
                [`${I}-progress`]: {
                    position: "absolute",
                    display: "block",
                    appearance: "none",
                    inlineSize: `calc(100% - ${(0,E.unit)(i)} * 2)`,
                    left: {
                        _skip_check_: !0,
                        value: i
                    },
                    right: {
                        _skip_check_: !0,
                        value: i
                    },
                    bottom: 0,
                    blockSize: g,
                    border: 0,
                    "&, &::-webkit-progress-bar": {
                        borderRadius: i,
                        backgroundColor: "rgba(0, 0, 0, 0.04)"
                    },
                    "&::-moz-progress-bar": {
                        background: h
                    },
                    "&::-webkit-progress-value": {
                        borderRadius: i,
                        background: h
                    }
                },
                [`${I}-actions`]: {
                    float: "right",
                    marginTop: e.marginSM
                }
            }
        },
        J = e => ({
            zIndexPopup: e.zIndexPopupBase + U.CONTAINER_MAX_OFFSET + 50,
            width: 384,
            progressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`,
            colorSuccessBg: void 0,
            colorErrorBg: void 0,
            colorInfoBg: void 0,
            colorWarningBg: void 0
        }),
        ee = e => {
            let t = e.paddingMD,
                n = e.paddingLG;
            return (0, I.mergeToken)(e, {
                notificationBg: e.colorBgElevated,
                notificationPaddingVertical: t,
                notificationPaddingHorizontal: n,
                notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
                notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(.55).equal(),
                notificationMarginBottom: e.margin,
                notificationPadding: `${(0,E.unit)(e.paddingMD)} ${(0,E.unit)(e.paddingContentHorizontalLG)}`,
                notificationMarginEdge: e.marginLG,
                animationMaxHeight: 150,
                notificationStackLayer: 3,
                notificationProgressHeight: 2
            })
        },
        et = (0, c.genStyleHooks)("Notification", e => {
            let t = ee(e);
            return [(e => {
                let {
                    componentCls: t,
                    notificationMarginBottom: n,
                    notificationMarginEdge: l,
                    motionDurationMid: r,
                    motionEaseInOut: o
                } = e, i = `${t}-notice`, a = new Y.Keyframes("antNotificationFadeOut", {
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
                    [t]: { ...(0, N.resetComponent)(e),
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
                            animationName: a,
                            animationPlayState: "running"
                        },
                        "&-rtl": {
                            direction: "rtl",
                            [`${i}-actions`]: {
                                float: "left"
                            }
                        }
                    }
                }, {
                    [t]: {
                        [`${i}-wrapper`]: Z(e)
                    }
                }]
            })(t), (e => {
                let {
                    componentCls: t,
                    notificationMarginEdge: n,
                    animationMaxHeight: l
                } = e, r = `${t}-notice`, o = new Y.Keyframes("antNotificationFadeIn", {
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
                                animationName: new Y.Keyframes("antNotificationTopFadeIn", {
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
                                animationName: new Y.Keyframes("antNotificationBottomFadeIn", {
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
                                animationName: new Y.Keyframes("antNotificationLeftFadeIn", {
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
                    ...K.map(t => ((e, t) => {
                        let {
                            componentCls: n
                        } = e;
                        return {
                            [`${n}-${t}`]: {
                                [`&${n}-stack > ${n}-notice-wrapper`]: {
                                    [t.startsWith("top") ? "top" : "bottom"]: 0,
                                    [Q[t]]: {
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
        }, J),
        en = (0, c.genSubStyleComponent)(["Notification", "PurePanel"], e => {
            let t = `${e.componentCls}-notice`,
                n = ee(e);
            return {
                [`${t}-pure-panel`]: { ...Z(n),
                    width: n.width,
                    maxWidth: `calc(100vw - ${(0,E.unit)(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
                    margin: 0
                }
            }
        }, J);

    function el(e, t) {
        return null === t || !1 === t ? null : t || n.createElement(j.default, {
            className: `${e}-close-icon`
        })
    }
    q.default, F.default, _.default, X.default, V.default;
    let er = {
            success: F.default,
            info: q.default,
            error: _.default,
            warning: X.default
        },
        eo = e => {
            let {
                prefixCls: t,
                icon: l,
                type: o,
                title: i,
                description: a,
                actions: s,
                role: c = "alert",
                styles: d,
                classNames: u
            } = e, f = null;
            return l ? f = n.createElement("span", {
                className: (0, r.clsx)(`${t}-icon`, u.icon),
                style: d.icon
            }, l) : o && (f = n.createElement(er[o] || null, {
                className: (0, r.clsx)(`${t}-icon`, u.icon, `${t}-icon-${o}`),
                style: d.icon
            })), n.createElement("div", {
                className: (0, r.clsx)({
                    [`${t}-with-icon`]: f
                }),
                role: c
            }, f, n.createElement("div", {
                className: (0, r.clsx)(`${t}-title`, u.title),
                style: d.title
            }, i), a && n.createElement("div", {
                className: (0, r.clsx)(`${t}-description`, u.description),
                style: d.description
            }, a), s && n.createElement("div", {
                className: (0, r.clsx)(`${t}-actions`, u.actions),
                style: d.actions
            }, s))
        },
        ei = e => {
            let {
                children: t,
                prefixCls: l
            } = e, o = (0, C.default)(l), [i, a] = et(l, o);
            return n.default.createElement(B.NotificationProvider, {
                classNames: {
                    list: (0, r.clsx)(i, a, o)
                }
            }, t)
        },
        ea = (e, t) => {
            let {
                prefixCls: l,
                key: r
            } = t;
            return n.default.createElement(ei, {
                prefixCls: l,
                key: r
            }, e)
        },
        es = n.default.forwardRef((e, t) => {
            let {
                top: l,
                bottom: o,
                prefixCls: i,
                getContainer: a,
                maxCount: c,
                rtl: d,
                onAllRemoved: u,
                stack: f,
                duration: p = 4.5,
                pauseOnHover: m = !0,
                showProgress: h
            } = e, {
                getPrefixCls: g,
                getPopupContainer: v,
                direction: b
            } = (0, s.useComponentConfig)("notification"), {
                notification: y
            } = (0, n.useContext)(s.ConfigContext), [, $] = (0, D.useToken)(), S = i || g("notification"), C = (0, n.useMemo)(() => "number" == typeof p && p > 0 && p, [p]), [k, w] = (0, O.useNotification)({
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
                })(e, l ? ? 24, o ? ? 24),
                className: () => (0, r.clsx)({
                    [`${S}-rtl`]: d ? ? "rtl" === b
                }),
                motion: () => ({
                    motionName: `${S}-fade`
                }),
                closable: {
                    closeIcon: el(S)
                },
                duration: C,
                getContainer: () => a ? .() || v ? .() || document.body,
                maxCount: c,
                pauseOnHover: m,
                showProgress: h,
                onAllRemoved: u,
                renderNotifications: ea,
                stack: !1 !== f && {
                    threshold: "object" == typeof f ? f ? .threshold : void 0,
                    offset: 8,
                    gap: $.margin
                }
            }), [E, N] = (0, x.useMergeSemantic)([y ? .classNames, e ? .classNames], [y ? .styles, e ? .styles], {
                props: e
            });
            return n.default.useImperativeHandle(t, () => ({ ...k,
                prefixCls: S,
                notification: y,
                classNames: E,
                styles: N
            })), w
        });

    function ec(e) {
        let t = n.default.useRef(null);
        (0, P.devUseWarning)("Notification");
        let {
            notification: l
        } = n.default.useContext(s.ConfigContext);
        return [n.default.useMemo(() => {
            let o = o => {
                    if (!t.current) return;
                    let {
                        open: i,
                        prefixCls: a,
                        notification: s,
                        classNames: c,
                        styles: d
                    } = t.current, u = s ? .className || {}, f = s ? .style || {}, p = `${a}-notice`, {
                        title: m,
                        message: h,
                        description: g,
                        icon: v,
                        type: b,
                        btn: y,
                        actions: $,
                        className: S,
                        style: C,
                        role: k = "alert",
                        closeIcon: w,
                        closable: E,
                        classNames: N = {},
                        styles: I = {},
                        ...M
                    } = o, z = el(p, void 0 !== w ? w : void 0 !== e ? .closeIcon ? e.closeIcon : s ? .closeIcon), [R, T, , H] = (0, W.computeClosable)((0, W.pickClosable)({ ...e || {},
                        ...o
                    }), (0, W.pickClosable)(l), {
                        closable: !0,
                        closeIcon: z
                    }), P = !!R && {
                        onClose: E && "object" == typeof E ? E.onClose : void 0,
                        closeIcon: T,
                        ...H
                    }, L = (0, x.resolveStyleOrClass)(N, {
                        props: o
                    }), A = (0, x.resolveStyleOrClass)(I, {
                        props: o
                    }), B = (0, x.mergeClassNames)(void 0, c, L), O = (0, x.mergeStyles)(d, A);
                    return i({
                        placement: e ? .placement ? ? "topRight",
                        ...M,
                        content: n.default.createElement(eo, {
                            prefixCls: p,
                            icon: v,
                            type: b,
                            title: m ? ? h,
                            description: g,
                            actions: $ ? ? y,
                            role: k,
                            classNames: B,
                            styles: O
                        }),
                        className: (0, r.clsx)({
                            [`${p}-${b}`]: b
                        }, S, u, B.root),
                        style: { ...f,
                            ...O.root,
                            ...C
                        },
                        closable: P
                    })
                },
                i = {
                    open: o,
                    destroy: e => {
                        void 0 !== e ? t.current ? .close(e) : t.current ? .destroy()
                    }
                };
            return ["success", "info", "warning", "error"].forEach(e => {
                i[e] = t => o({ ...t,
                    type: e
                })
            }), i
        }, [e, l]), n.default.createElement(es, {
            key: "notification-holder",
            ...e,
            ref: t
        })]
    }
    var ed = e.i(738275);
    let eu = (0, c.genStyleHooks)("App", e => {
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
        ef = e => {
            let {
                prefixCls: t,
                children: l,
                className: o,
                rootClassName: i,
                message: a,
                notification: c,
                style: d,
                component: u = "div"
            } = e, {
                direction: f,
                getPrefixCls: p
            } = (0, n.useContext)(s.ConfigContext), m = p("app", t), [h, g] = eu(m), v = (0, r.clsx)(h, m, o, i, g, {
                [`${m}-rtl`]: "rtl" === f
            }), b = (0, n.useContext)(ed.AppConfigContext), y = n.default.useMemo(() => ({
                message: { ...b.message,
                    ...a
                },
                notification: { ...b.notification,
                    ...c
                }
            }), [a, c, b.message, b.notification]), [$, x] = (0, L.default)(y.message), [S, C] = ec(y.notification), [k, w] = (0, A.default)(), E = n.default.useMemo(() => ({
                message: $,
                notification: S,
                modal: k
            }), [$, S, k]);
            (0, P.devUseWarning)("App")(!(g && !1 === u), "usage", "When using cssVar, ensure `component` is assigned a valid React component string.");
            let N = !1 === u ? n.default.Fragment : u;
            return n.default.createElement(ed.default.Provider, {
                value: E
            }, n.default.createElement(ed.AppConfigContext.Provider, {
                value: y
            }, n.default.createElement(N, { ...!1 === u ? void 0 : {
                    className: v,
                    style: d
                }
            }, w, x, C, l)))
        };
    ef.useApp = () => n.default.useContext(ed.default);
    var ep = e.i(751095),
        em = e.i(805484),
        eh = e.i(327494),
        eg = e.i(943081);
    let {
        Option: ev
    } = eh.default;

    function eb(e) {
        return e ? .type && (e.type.isSelectOption || e.type.isSelectOptGroup)
    }
    let ey = n.forwardRef((e, t) => {
            let l, o, {
                    prefixCls: i,
                    className: a,
                    style: c,
                    popupClassName: d,
                    dropdownClassName: u,
                    children: f,
                    dataSource: p,
                    rootClassName: m,
                    dropdownStyle: h,
                    dropdownRender: g,
                    popupRender: v,
                    onDropdownVisibleChange: b,
                    onOpenChange: y,
                    styles: $,
                    classNames: S
                } = e,
                C = (0, eg.toArray)(f),
                k = v || g,
                w = y || b;
            1 === C.length && n.isValidElement(C[0]) && !eb(C[0]) && ([l] = C);
            let E = l ? () => l : void 0;
            o = C.length && eb(C[0]) ? f : p ? p.map(e => {
                if (n.isValidElement(e)) return e;
                switch (typeof e) {
                    case "string":
                        return n.createElement(ev, {
                            key: e,
                            value: e
                        }, e);
                    case "object":
                        {
                            let {
                                value: t
                            } = e;
                            return n.createElement(ev, {
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
            } = n.useContext(s.ConfigContext), I = N("select", i), M = { ...e,
                dataSource: p,
                status: e.status,
                popupMatchSelectWidth: e.popupMatchSelectWidth || e.dropdownMatchSelectWidth,
                popupRender: k,
                onOpenChange: w
            }, [z, R] = (0, x.useMergeSemantic)([S], [$], {
                props: M
            }, {
                popup: {
                    _default: "root"
                }
            }), T = n.useMemo(() => ({
                root: (0, r.clsx)(`${I}-auto-complete`, a, m, z.root, {
                    [`${I}-customize`]: l
                }),
                prefix: z.prefix,
                input: z.input,
                placeholder: z.placeholder,
                content: z.content,
                popup: {
                    root: (0, r.clsx)(d, u, z.popup ? .root),
                    list: z.popup ? .list,
                    listItem: z.popup ? .listItem
                }
            }), [I, a, m, z, d, u]), H = n.useMemo(() => ({
                root: { ...R.root,
                    ...c
                },
                input: R.input,
                prefix: R.prefix,
                placeholder: R.placeholder,
                content: R.content,
                popup: {
                    root: { ...h,
                        ...R.popup ? .root
                    },
                    list: R.popup ? .list,
                    listItem: R.popup ? .listItem
                }
            }), [R, c, h]);
            return n.createElement(eh.default, {
                ref: t,
                suffixIcon: null,
                ...(0, ep.omit)(e, ["dataSource", "dropdownClassName", "popupClassName"]),
                prefixCls: I,
                classNames: T,
                styles: H,
                mode: eh.default.SECRET_COMBOBOX_MODE_DO_NOT_USE,
                popupRender: k,
                onPopupVisibleChange: w,
                getInputElement: E
            }, o)
        }),
        {
            Option: e$
        } = eh.default,
        ex = (0, em.default)(ey, "popupAlign", e => (0, ep.omit)(e, ["visible"]));
    ey.Option = e$, ey._InternalPanelDoNotUseOrYouWillBeFired = ex;
    var eS = e.i(965760);
    let eC = {
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
    var ek = e.i(9583);

    function ew() {
        return (ew = Object.assign.bind()).apply(this, arguments)
    }
    let eE = n.forwardRef((e, t) => n.createElement(ek.default, ew({}, e, {
        ref: t,
        icon: eC
    })));
    var eN = e.i(592681),
        eI = e.i(180573),
        eM = e.i(763731);
    let ez = (0, c.genStyleHooks)("BackTop", e => {
        let {
            fontSizeHeading3: t,
            colorTextDescription: n,
            colorTextLightSolid: l,
            colorText: r,
            controlHeightLG: o,
            calc: i
        } = e, a = (0, I.mergeToken)(e, {
            backTopBackground: n,
            backTopColor: l,
            backTopHoverBackground: r,
            backTopFontSize: t,
            backTopSize: o,
            backTopBlockEnd: i(o).mul(1.25).equal(),
            backTopInlineEnd: i(o).mul(2.5).equal(),
            backTopInlineEndMD: i(o).mul(1.5).equal(),
            backTopInlineEndXS: i(o).mul(.5).equal()
        });
        return [(e => {
            let {
                componentCls: t,
                backTopFontSize: n,
                backTopSize: l,
                zIndexPopup: r
            } = e;
            return {
                [t]: { ...(0, N.resetComponent)(e),
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
                        lineHeight: (0, E.unit)(l)
                    }
                }
            }
        })(a), (e => {
            let {
                componentCls: t,
                screenMD: n,
                screenXS: l,
                backTopInlineEndMD: r,
                backTopInlineEndXS: o
            } = e;
            return {
                [`@media (max-width: ${(0,E.unit)(n)})`]: {
                    [t]: {
                        insetInlineEnd: r
                    }
                },
                [`@media (max-width: ${(0,E.unit)(l)})`]: {
                    [t]: {
                        insetInlineEnd: o
                    }
                }
            }
        })(a)]
    }, e => ({
        zIndexPopup: e.zIndexBase + 10
    }));
    var eR = e.i(162404),
        eT = e.i(247153),
        eH = e.i(50824);
    let eP = n.default.createContext({});
    var eL = e.i(376398),
        eA = e.i(618316);
    let eB = e => {
        let {
            children: t
        } = e, {
            getPrefixCls: l
        } = n.useContext(s.ConfigContext), o = l("breadcrumb"), {
            classNames: i,
            styles: a
        } = n.useContext(eP);
        return n.createElement("li", {
            className: (0, r.clsx)(`${o}-separator`, i ? .separator),
            style: a ? .separator,
            "aria-hidden": "true"
        }, "" === t ? t : t || "/")
    };

    function eO(e, t, l, o) {
        if (!(0, eL.default)(l)) return null;
        let {
            className: i,
            onClick: a,
            ...s
        } = t, c = { ...(0, eH.default)(s, {
                data: !0,
                aria: !0
            }),
            onClick: a
        };
        return void 0 !== o ? n.createElement("a", { ...c,
            className: (0, r.clsx)(`${e}-link`, i),
            href: o
        }, l) : n.createElement("span", { ...c,
            className: (0, r.clsx)(`${e}-link`, i)
        }, l)
    }
    eB.__ANT_BREADCRUMB_SEPARATOR = !0;
    let eW = e => {
            let {
                prefixCls: t,
                separator: l = "/",
                children: o,
                menu: i,
                dropdownProps: a,
                href: s,
                dropdownIcon: c
            } = e, {
                classNames: d,
                styles: u
            } = n.useContext(eP), f = (e => {
                if (i) {
                    let l = { ...a
                    };
                    if (i) {
                        let {
                            items: e,
                            ...t
                        } = i || {};
                        l.menu = { ...t,
                            items: e ? .map((e, t) => {
                                let {
                                    key: l,
                                    title: r,
                                    label: o,
                                    path: i,
                                    ...a
                                } = e, c = o ? ? r;
                                return i && (c = n.createElement("a", {
                                    href: `${s}${i}`
                                }, c)), { ...a,
                                    key: l ? ? t,
                                    label: c
                                }
                            })
                        }
                    }
                    return n.createElement(eA.default, {
                        placement: "bottom",
                        ...l
                    }, n.createElement("span", {
                        className: `${t}-overlay-link`
                    }, e, c))
                }
                return e
            })(o);
            return (0, eL.default)(f) ? n.createElement(n.Fragment, null, n.createElement("li", {
                className: (0, r.clsx)(`${t}-item`, d ? .item),
                style: u ? .item
            }, f), l && n.createElement(eB, null, l)) : null
        },
        eD = e => {
            let {
                prefixCls: t,
                children: l,
                href: r,
                ...o
            } = e, {
                getPrefixCls: i
            } = n.useContext(s.ConfigContext), a = i("breadcrumb", t);
            return n.createElement(eW, { ...o,
                prefixCls: a
            }, eO(a, o, l, r))
        };
    eD.__ANT_BREADCRUMB_ITEM = !0;
    let eF = (0, c.genStyleHooks)("Breadcrumb", e => (e => {
        let {
            componentCls: t,
            iconCls: n,
            calc: l
        } = e;
        return {
            [t]: { ...(0, N.resetComponent)(e),
                color: e.itemColor,
                fontSize: e.fontSize,
                [n]: {
                    fontSize: e.iconFontSize
                },
                ol: {
                    display: "flex",
                    flexWrap: "wrap",
                    margin: 0,
                    padding: 0,
                    listStyle: "none"
                },
                [`${t}-item a`]: {
                    color: e.linkColor,
                    transition: `color ${e.motionDurationMid}`,
                    padding: `0 ${(0,E.unit)(e.paddingXXS)}`,
                    borderRadius: e.borderRadiusSM,
                    height: e.fontHeight,
                    display: "inline-block",
                    marginInline: l(e.marginXXS).mul(-1).equal(),
                    "&:hover": {
                        color: e.linkHoverColor,
                        backgroundColor: e.colorBgTextHover
                    },
                    ...(0, N.genFocusStyle)(e)
                },
                [`${t}-item:last-child`]: {
                    color: e.lastItemColor
                },
                [`${t}-separator`]: {
                    marginInline: e.separatorMargin,
                    color: e.separatorColor
                },
                [`${t}-link`]: {
                    [`
          > ${n} + span,
          > ${n} + a
        `]: {
                        marginInlineStart: e.marginXXS
                    }
                },
                [`${t}-overlay-link`]: {
                    borderRadius: e.borderRadiusSM,
                    height: e.fontHeight,
                    display: "inline-block",
                    padding: `0 ${(0,E.unit)(e.paddingXXS)}`,
                    marginInline: l(e.marginXXS).mul(-1).equal(),
                    [`> ${n}`]: {
                        marginInlineStart: e.marginXXS,
                        fontSize: e.fontSizeIcon
                    },
                    "&:hover": {
                        color: e.linkHoverColor,
                        backgroundColor: e.colorBgTextHover,
                        a: {
                            color: e.linkHoverColor
                        }
                    },
                    a: {
                        "&:hover": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                [`&${e.componentCls}-rtl`]: {
                    direction: "rtl"
                }
            }
        }
    })((0, I.mergeToken)(e, {})), e => ({
        itemColor: e.colorTextDescription,
        lastItemColor: e.colorText,
        iconFontSize: e.fontSize,
        linkColor: e.colorTextDescription,
        linkHoverColor: e.colorText,
        separatorColor: e.colorTextDescription,
        separatorMargin: e.marginXS
    }));

    function e_(e) {
        let {
            breadcrumbName: t,
            children: n,
            ...l
        } = e, r = {
            title: t,
            ...l
        };
        return n && (r.menu = {
            items: n.map(e => {
                let {
                    breadcrumbName: t,
                    ...n
                } = e;
                return { ...n,
                    title: t
                }
            })
        }), r
    }
    let ej = e => {
        let t, {
                prefixCls: l,
                separator: o,
                style: i,
                className: a,
                rootClassName: c,
                routes: d,
                items: u,
                children: f,
                itemRender: p,
                params: m = {},
                classNames: h,
                styles: g,
                dropdownIcon: v,
                ...b
            } = e,
            {
                getPrefixCls: y,
                direction: $,
                className: S,
                style: C,
                classNames: k,
                styles: w,
                separator: E,
                dropdownIcon: N
            } = (0, s.useComponentConfig)("breadcrumb"),
            I = o ? ? E ? ? "/",
            M = v ? ? N ? ? n.createElement(eT.default, null),
            z = y("breadcrumb", l),
            [R, T] = eF(z),
            H = (0, n.useMemo)(() => u || (d ? d.map(e_) : null), [u, d]),
            P = n.useMemo(() => ({ ...e,
                separator: I
            }), [e, I]),
            [L, A] = (0, x.useMergeSemantic)([k, h], [w, g], {
                props: P
            }),
            B = (e, t, n, l, r) => {
                if (p) return p(e, t, n, l);
                let o = function(e, t) {
                    if (!(0, eL.default)(e.title)) return null;
                    let n = Object.keys(t).join("|");
                    return "object" == typeof e.title ? e.title : String(e.title).replace(RegExp(`:(${n})`, "g"), (e, n) => t[n] || e)
                }(e, t);
                return eO(z, e, o, r)
            };
        if (H && H.length > 0) {
            let e = [],
                l = u || d;
            t = H.map((t, r) => {
                let {
                    path: o,
                    key: i,
                    type: a,
                    menu: s,
                    onClick: c,
                    className: d,
                    style: u,
                    separator: f,
                    dropdownProps: p
                } = t, h = ((e, t) => {
                    if (void 0 === t) return t;
                    let n = (t || "").replace(/^\//, "");
                    return Object.keys(e).forEach(t => {
                        n = n.replace(`:${t}`, e[t])
                    }), n
                })(m, o);
                void 0 !== h && e.push(h);
                let g = i ? ? r;
                if ("separator" === a) return n.createElement(eB, {
                    key: g
                }, f);
                let v = {},
                    b = r === H.length - 1;
                s && (v.menu = s);
                let {
                    href: y
                } = t;
                return e.length && void 0 !== h && (y = `#/${e.join("/")}`), n.createElement(eW, {
                    key: g,
                    ...v,
                    ...(0, eH.default)(t, {
                        data: !0,
                        aria: !0
                    }),
                    className: d,
                    style: u,
                    dropdownProps: p,
                    dropdownIcon: M,
                    href: y,
                    separator: b ? "" : I,
                    onClick: c,
                    prefixCls: z
                }, B(t, m, l, e, y))
            })
        } else if (f) {
            let e = (0, eg.toArray)(f).length;
            t = (0, eg.toArray)(f).map((t, n) => {
                if (!t) return t;
                let l = n === e - 1;
                return (0, eM.cloneElement)(t, {
                    separator: l ? "" : I,
                    key: n
                })
            })
        }
        let O = (0, r.clsx)(z, S, {
                [`${z}-rtl`]: "rtl" === $
            }, a, c, L.root, R, T),
            W = { ...A.root,
                ...C,
                ...i
            },
            D = n.useMemo(() => ({
                classNames: L,
                styles: A
            }), [L, A]);
        return n.createElement(eP.Provider, {
            value: D
        }, n.createElement("nav", {
            className: O,
            style: W,
            ...b
        }, n.createElement("ol", null, t)))
    };
    ej.Item = eD, ej.Separator = eB;
    var eX = e.i(920228),
        eq = e.i(997252);
    e.i(399101);
    var eV = e.i(904046),
        eV = eV,
        eG = e.i(819261),
        eY = e.i(30294),
        eU = e.i(408850),
        eK = e.i(62139),
        eQ = e.i(456328),
        eQ = eQ,
        eZ = e.i(560006),
        eZ = eZ;

    function eJ(e) {
        let {
            fullscreen: t,
            validRange: l,
            generateConfig: r,
            locale: o,
            prefixCls: i,
            value: a,
            onChange: s,
            divRef: c
        } = e, d = r.getYear(a || r.getNow()), u = d - 10, f = u + 20;
        l && (u = r.getYear(l[0]), f = r.getYear(l[1]) + 1);
        let p = o && "年" === o.year ? "年" : "",
            m = [];
        for (let e = u; e < f; e++) m.push({
            label: `${e}${p}`,
            value: e
        });
        return n.createElement(eh.default, {
            size: t ? void 0 : "small",
            options: m,
            value: d,
            className: `${i}-year-select`,
            onChange: e => {
                let t = r.setYear(a, e);
                if (l) {
                    let [e, n] = l, o = r.getYear(t), i = r.getMonth(t);
                    o === r.getYear(n) && i > r.getMonth(n) && (t = r.setMonth(t, r.getMonth(n))), o === r.getYear(e) && i < r.getMonth(e) && (t = r.setMonth(t, r.getMonth(e)))
                }
                s(t)
            },
            getPopupContainer: () => c.current
        })
    }

    function e0(e) {
        let {
            prefixCls: t,
            fullscreen: l,
            validRange: r,
            value: o,
            generateConfig: i,
            locale: a,
            onChange: s,
            divRef: c
        } = e, d = i.getMonth(o || i.getNow()), u = 0, f = 11;
        if (r) {
            let [e, t] = r, n = i.getYear(o);
            i.getYear(t) === n && (f = i.getMonth(t)), i.getYear(e) === n && (u = i.getMonth(e))
        }
        let p = a.shortMonths || i.locale.getShortMonths(a.locale),
            m = [];
        for (let e = u; e <= f; e += 1) m.push({
            label: p[e],
            value: e
        });
        return n.createElement(eh.default, {
            size: l ? void 0 : "small",
            className: `${t}-month-select`,
            value: d,
            options: m,
            onChange: e => {
                s(i.setMonth(o, e))
            },
            getPopupContainer: () => c.current
        })
    }

    function e1(e) {
        let {
            prefixCls: t,
            locale: l,
            mode: r,
            fullscreen: o,
            onModeChange: i
        } = e;
        return n.createElement(eZ.default, {
            onChange: e => {
                let {
                    target: {
                        value: t
                    }
                } = e;
                i(t)
            },
            value: r,
            size: o ? void 0 : "small",
            className: `${t}-mode-switch`
        }, n.createElement(eQ.default, {
            value: "month"
        }, l.month), n.createElement(eQ.default, {
            value: "year"
        }, l.year))
    }
    let e2 = function(e) {
        let {
            prefixCls: t,
            fullscreen: l,
            mode: o,
            onChange: i,
            onModeChange: a,
            className: s,
            style: c
        } = e, d = n.useRef(null), u = (0, n.useContext)(eK.FormItemInputContext), f = (0, n.useMemo)(() => ({ ...u,
            isFormItemInput: !1
        }), [u]), p = { ...e,
            fullscreen: l,
            divRef: d
        };
        return n.createElement("div", {
            className: (0, r.clsx)(`${t}-header`, s),
            style: c,
            ref: d
        }, n.createElement(eK.FormItemInputContext.Provider, {
            value: f
        }, n.createElement(eJ, { ...p,
            onChange: e => {
                i(e, "year")
            }
        }), "month" === o && n.createElement(e0, { ...p,
            onChange: e => {
                i(e, "month")
            }
        })), n.createElement(e1, { ...p,
            onModeChange: a
        }))
    };
    var e3 = e.i(204142),
        e4 = e.i(714288),
        e8 = e.i(621828);
    let e5 = (0, c.genStyleHooks)("Calendar", e => {
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
                    [t]: { ...(0, e4.genPanelStyle)(e),
                        ...(0, N.resetComponent)(e),
                        background: l,
                        "&-rtl": {
                            direction: "rtl"
                        },
                        [`${t}-header`]: {
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: `${(0,E.unit)(e.paddingSM)} 0`,
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
                        borderTop: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
                        borderRadius: 0,
                        [`${n}-month-panel, ${n}-date-panel`]: {
                            width: "auto"
                        },
                        [`${n}-body`]: {
                            padding: `${(0,E.unit)(e.paddingXS)} 0`
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
                            borderRadius: `0 0 ${(0,E.unit)(e.borderRadiusLG)} ${(0,E.unit)(e.borderRadiusLG)}`
                        },
                        [`${n}-content`]: {
                            height: e.miniContentHeight,
                            th: {
                                height: "auto",
                                padding: 0,
                                lineHeight: (0, E.unit)(e.weekHeight)
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
                                    lineHeight: (0, E.unit)(e.weekHeight)
                                }
                            }
                        },
                        [`${n}-cell-week ${n}-cell-inner`]: {
                            display: "block",
                            borderRadius: 0,
                            borderTop: `${(0,E.unit)(e.lineWidthBold)} ${e.lineType} ${e.colorSplit}`,
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
                            margin: `0 ${(0,E.unit)(e.calc(e.marginXS).div(2).equal())}`,
                            padding: `${(0,E.unit)(e.calc(e.paddingXS).div(2).equal())} ${(0,E.unit)(e.paddingXS)} 0`,
                            border: 0,
                            borderTop: `${(0,E.unit)(e.lineWidthBold)} ${e.lineType} ${e.colorSplit}`,
                            borderRadius: 0,
                            transition: `background-color ${e.motionDurationSlow}`,
                            "&-value": {
                                lineHeight: (0, E.unit)(e.dateValueHeight),
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
                    [`@media only screen and (max-width: ${(0,E.unit)(e.screenXS)}) `]: {
                        [t]: {
                            [`${t}-header`]: {
                                display: "block",
                                [`${t}-year-select`]: {
                                    width: "50%"
                                },
                                [`${t}-month-select`]: {
                                    width: `calc(50% - ${(0,E.unit)(e.paddingXS)})`
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
            })((0, I.mergeToken)(e, (0, e8.initPickerPanelToken)(e), {
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
            ...(0, e8.initPanelComponentToken)(e)
        })),
        e6 = (e, t, n) => {
            let {
                getYear: l
            } = n;
            return e && t && l(e) === l(t)
        },
        e9 = (e, t, n) => {
            let {
                getMonth: l
            } = n;
            return e6(e, t, n) && l(e) === l(t)
        },
        e7 = (e, t, n) => {
            let {
                getDate: l
            } = n;
            return e9(e, t, n) && l(e) === l(t)
        },
        te = e => t => {
            let {
                prefixCls: l,
                className: o,
                rootClassName: i,
                style: a,
                dateFullCellRender: c,
                dateCellRender: d,
                monthFullCellRender: u,
                monthCellRender: f,
                cellRender: p,
                fullCellRender: m,
                headerRender: h,
                value: g,
                defaultValue: v,
                disabledDate: b,
                mode: y,
                validRange: $,
                fullscreen: S = !0,
                showWeek: C,
                onChange: k,
                onPanelChange: w,
                onSelect: E,
                styles: N,
                classNames: I
            } = t, {
                getPrefixCls: M,
                direction: z,
                className: R,
                style: T,
                classNames: H,
                styles: P
            } = (0, s.useComponentConfig)("calendar"), L = { ...t,
                mode: y,
                fullscreen: S,
                showWeek: C
            }, [A, B] = (0, x.useMergeSemantic)([H, I], [P, N], {
                props: L
            }), [O, W, D, F, _, j] = n.useMemo(() => {
                let {
                    root: e,
                    header: t,
                    ...n
                } = A, {
                    root: l,
                    header: r,
                    ...o
                } = B;
                return [e, t, n, l, r, o]
            }, [A, B]), X = M("picker", l), q = `${X}-calendar`, [V, G] = e5(X, q), Y = e.getNow(), [U, K] = (0, eY.useControlledState)(() => v || e.getNow(), g), [Q, Z] = (0, eY.useControlledState)("month", y), J = n.useMemo(() => "year" === Q ? "month" : "date", [Q]), ee = n.useCallback(t => !!$ && (e.isAfter($[0], t) || e.isAfter(t, $[1])) || !!b ? .(t), [b, $]), et = (e, t) => {
                w ? .(e, t)
            }, en = e => {
                Z(e), et(U, e)
            }, el = (t, n) => {
                K(t), e7(t, U, e) || (("date" !== J || e9(t, U, e)) && ("month" !== J || e6(t, U, e)) || et(t, Q), k ? .(t)), E ? .(t, {
                    source: n
                })
            }, er = n.useCallback((t, l) => m ? m(t, l) : c ? c(t) : n.createElement("div", {
                className: (0, r.clsx)(`${X}-cell-inner`, `${q}-date`, {
                    [`${q}-date-today`]: e7(Y, t, e)
                })
            }, n.createElement("div", {
                className: `${q}-date-value`
            }, String(e.getDate(t)).padStart(2, "0")), n.createElement("div", {
                className: `${q}-date-content`
            }, "function" == typeof p ? p(t, l) : d ? .(t))), [Y, X, q, m, c, p, d]), eo = n.useCallback((t, l) => {
                if (m) return m(t, l);
                if (u) return u(t);
                let o = l.locale.shortMonths || e.locale.getShortMonths(l.locale.locale);
                return n.createElement("div", {
                    className: (0, r.clsx)(`${X}-cell-inner`, `${q}-date`, {
                        [`${q}-date-today`]: e9(Y, t, e)
                    })
                }, n.createElement("div", {
                    className: `${q}-date-value`
                }, o[e.getMonth(t)]), n.createElement("div", {
                    className: `${q}-date-content`
                }, "function" == typeof p ? p(t, l) : f ? .(t)))
            }, [Y, X, q, m, u, p, f]), [ei] = (0, eU.useLocale)("Calendar", e3.default), ea = (0, eG.merge)(ei, t.locale || {});
            return n.createElement("div", {
                className: (0, r.clsx)(q, {
                    [`${q}-full`]: S,
                    [`${q}-mini`]: !S,
                    [`${q}-rtl`]: "rtl" === z
                }, R, o, i, O, V, G),
                style: { ...F,
                    ...T,
                    ...a
                }
            }, h ? h({
                value: U,
                type: Q,
                onChange: e => {
                    el(e, "customize")
                },
                onTypeChange: en
            }) : n.createElement(e2, {
                className: W,
                style: _,
                prefixCls: q,
                value: U,
                generateConfig: e,
                mode: Q,
                fullscreen: S,
                locale: ea ? .lang,
                validRange: $,
                onChange: el,
                onModeChange: en
            }), n.createElement(eV.default, {
                classNames: D,
                styles: j,
                value: U,
                prefixCls: X,
                locale: ea ? .lang,
                generateConfig: e,
                cellRender: (e, t) => "date" === t.type ? er(e, t) : "month" === t.type ? eo(e, { ...t,
                    locale: ea ? .lang
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
        tt = te(eq.default);
    tt.generateCalendar = te;
    var tn = e.i(517455),
        tl = e.i(792812),
        tr = e.i(185793),
        to = e.i(721369);
    let ti = e => {
            let {
                prefixCls: t,
                className: l,
                hoverable: o = !0,
                ...i
            } = e, {
                getPrefixCls: a
            } = n.useContext(s.ConfigContext), c = a("card", t), d = (0, r.clsx)(`${c}-grid`, l, {
                [`${c}-grid-hoverable`]: o
            });
            return n.createElement("div", { ...i,
                className: d
            })
        },
        ta = (0, c.genStyleHooks)("Card", e => {
            let t = (0, I.mergeToken)(e, {
                cardShadow: e.boxShadowCard,
                cardHeadPadding: e.padding,
                cardPaddingBase: e.paddingLG,
                cardActionsIconSize: e.fontSize
            });
            return [(e => {
                let {
                    componentCls: t,
                    cardShadow: n,
                    cardHeadPadding: l,
                    colorBorderSecondary: r,
                    boxShadowTertiary: o,
                    bodyPadding: i,
                    extraColor: a
                } = e;
                return {
                    [t]: { ...(0, N.resetComponent)(e),
                        position: "relative",
                        background: e.colorBgContainer,
                        borderRadius: e.borderRadiusLG,
                        [`&:not(${t}-bordered)`]: {
                            boxShadow: o
                        },
                        [`${t}-head`]: (e => {
                            let {
                                antCls: t,
                                componentCls: n,
                                headerHeight: l,
                                headerPadding: r,
                                tabsMarginBottom: o
                            } = e;
                            return {
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                minHeight: l,
                                marginBottom: -1,
                                padding: `0 ${(0,E.unit)(r)}`,
                                color: e.colorTextHeading,
                                fontWeight: e.fontWeightStrong,
                                fontSize: e.headerFontSize,
                                background: e.headerBg,
                                borderBottom: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
                                borderRadius: `${(0,E.unit)(e.borderRadiusLG)} ${(0,E.unit)(e.borderRadiusLG)} 0 0`,
                                ...(0, N.clearFix)(),
                                "&-wrapper": {
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                "&-title": {
                                    display: "inline-block",
                                    flex: 1,
                                    ...N.textEllipsis,
                                    [`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]: {
                                        insetInlineStart: 0,
                                        marginTop: 0,
                                        marginBottom: 0
                                    }
                                },
                                [`${t}-tabs-top`]: {
                                    clear: "both",
                                    marginBottom: o,
                                    color: e.colorText,
                                    fontWeight: "normal",
                                    fontSize: e.fontSize,
                                    "&-bar": {
                                        borderBottom: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`
                                    }
                                }
                            }
                        })(e),
                        [`${t}-extra`]: {
                            marginInlineStart: "auto",
                            color: a,
                            fontWeight: "normal",
                            fontSize: e.fontSize
                        },
                        [`${t}-body`]: {
                            padding: i,
                            borderRadius: `0 0 ${(0,E.unit)(e.borderRadiusLG)} ${(0,E.unit)(e.borderRadiusLG)}`,
                            "&:first-child": {
                                borderStartStartRadius: e.borderRadiusLG,
                                borderStartEndRadius: e.borderRadiusLG
                            },
                            "&:not(:last-child)": {
                                borderEndStartRadius: 0,
                                borderEndEndRadius: 0
                            }
                        },
                        [`${t}-grid`]: (e => {
                            let {
                                cardPaddingBase: t,
                                colorBorderSecondary: n,
                                cardShadow: l,
                                lineWidth: r
                            } = e;
                            return {
                                width: "33.33%",
                                padding: t,
                                border: 0,
                                borderRadius: 0,
                                boxShadow: `
      ${(0,E.unit)(r)} 0 0 0 ${n},
      0 ${(0,E.unit)(r)} 0 0 ${n},
      ${(0,E.unit)(r)} ${(0,E.unit)(r)} 0 0 ${n},
      ${(0,E.unit)(r)} 0 0 0 ${n} inset,
      0 ${(0,E.unit)(r)} 0 0 ${n} inset;
    `,
                                transition: `all ${e.motionDurationMid}`,
                                "&-hoverable:hover": {
                                    position: "relative",
                                    zIndex: 1,
                                    boxShadow: l
                                }
                            }
                        })(e),
                        [`${t}-cover`]: {
                            "> *": {
                                display: "block",
                                width: "100%",
                                borderRadius: `${(0,E.unit)(e.borderRadiusLG)} ${(0,E.unit)(e.borderRadiusLG)} 0 0`
                            }
                        },
                        [`${t}-actions`]: (e => {
                            let {
                                componentCls: t,
                                iconCls: n,
                                actionsLiMargin: l,
                                cardActionsIconSize: r,
                                colorBorderSecondary: o,
                                actionsBg: i
                            } = e;
                            return {
                                margin: 0,
                                padding: 0,
                                listStyle: "none",
                                background: i,
                                borderTop: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${o}`,
                                display: "flex",
                                borderRadius: `0 0 ${(0,E.unit)(e.borderRadiusLG)} ${(0,E.unit)(e.borderRadiusLG)}`,
                                ...(0, N.clearFix)(),
                                "& > li": {
                                    margin: l,
                                    color: e.colorTextDescription,
                                    textAlign: "center",
                                    "> span": {
                                        position: "relative",
                                        display: "block",
                                        minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
                                        fontSize: e.fontSize,
                                        lineHeight: e.lineHeight,
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: e.colorPrimary,
                                            transition: `color ${e.motionDurationMid}`
                                        },
                                        [`a:not(${t}-btn), > ${n}`]: {
                                            display: "inline-block",
                                            width: "100%",
                                            color: e.colorIcon,
                                            lineHeight: (0, E.unit)(e.fontHeight),
                                            transition: `color ${e.motionDurationMid}`,
                                            "&:hover": {
                                                color: e.colorPrimary
                                            }
                                        },
                                        [`> ${n}`]: {
                                            fontSize: r,
                                            lineHeight: (0, E.unit)(e.calc(r).mul(e.lineHeight).equal())
                                        }
                                    },
                                    "&:not(:last-child)": {
                                        borderInlineEnd: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${o}`
                                    }
                                }
                            }
                        })(e),
                        [`${t}-meta`]: {
                            margin: `${(0,E.unit)(e.calc(e.marginXXS).mul(-1).equal())} 0`,
                            display: "flex",
                            ...(0, N.clearFix)(),
                            "&-avatar": {
                                paddingInlineEnd: e.padding
                            },
                            "&-section": {
                                overflow: "hidden",
                                flex: 1,
                                "> div:not(:last-child)": {
                                    marginBottom: e.marginXS
                                }
                            },
                            "&-title": {
                                color: e.colorTextHeading,
                                fontWeight: e.fontWeightStrong,
                                fontSize: e.fontSizeLG,
                                ...N.textEllipsis
                            },
                            "&-description": {
                                color: e.colorTextDescription
                            }
                        }
                    },
                    [`${t}-bordered`]: {
                        border: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${r}`,
                        [`${t}-cover`]: {
                            marginTop: -1,
                            marginInlineStart: -1,
                            marginInlineEnd: -1
                        }
                    },
                    [`${t}-hoverable`]: {
                        cursor: "pointer",
                        transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
                        "&:hover": {
                            borderColor: "transparent",
                            boxShadow: n
                        }
                    },
                    [`${t}-contain-grid`]: {
                        borderRadius: `${(0,E.unit)(e.borderRadiusLG)} ${(0,E.unit)(e.borderRadiusLG)} 0 0 `,
                        [`&:not(:has(> ${t}-head))`]: {
                            borderRadius: 0
                        },
                        [`${t}-body`]: {
                            display: "flex",
                            flexWrap: "wrap"
                        },
                        [`&:not(${t}-loading) ${t}-body`]: {
                            marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
                            marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
                            padding: 0
                        }
                    },
                    [`${t}-contain-tabs`]: {
                        [`> div${t}-head`]: {
                            minHeight: 0,
                            [`${t}-head-title, ${t}-extra`]: {
                                paddingTop: l
                            }
                        }
                    },
                    [`${t}-type-inner`]: (e => {
                        let {
                            componentCls: t,
                            colorFillAlter: n,
                            headerPadding: l,
                            bodyPadding: r
                        } = e;
                        return {
                            [`${t}-head`]: {
                                padding: `0 ${(0,E.unit)(l)}`,
                                background: n,
                                "&-title": {
                                    fontSize: e.fontSize
                                }
                            },
                            [`${t}-body`]: {
                                padding: `${(0,E.unit)(e.padding)} ${(0,E.unit)(r)}`
                            }
                        }
                    })(e),
                    [`${t}-loading`]: (e => {
                        let {
                            componentCls: t
                        } = e;
                        return {
                            overflow: "hidden",
                            [`${t}-body`]: {
                                userSelect: "none"
                            }
                        }
                    })(e),
                    [`${t}-rtl`]: {
                        direction: "rtl"
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    bodyPaddingSM: n,
                    headerPaddingSM: l,
                    headerHeightSM: r,
                    headerFontSizeSM: o
                } = e;
                return {
                    [`${t}-small`]: {
                        [`> ${t}-head`]: {
                            minHeight: r,
                            padding: `0 ${(0,E.unit)(l)}`,
                            fontSize: o,
                            [`> ${t}-head-wrapper`]: {
                                [`> ${t}-extra`]: {
                                    fontSize: e.fontSize
                                }
                            }
                        },
                        [`> ${t}-body`]: {
                            padding: n
                        }
                    },
                    [`${t}-small${t}-contain-tabs`]: {
                        [`> ${t}-head`]: {
                            [`${t}-head-title, ${t}-extra`]: {
                                paddingTop: 0,
                                display: "flex",
                                alignItems: "center"
                            }
                        }
                    }
                }
            })(t)]
        }, e => ({
            headerBg: "transparent",
            headerFontSize: e.fontSizeLG,
            headerFontSizeSM: e.fontSize,
            headerHeight: e.fontSizeLG * e.lineHeightLG + 2 * e.padding,
            headerHeightSM: e.fontSize * e.lineHeight + 2 * e.paddingXS,
            actionsBg: e.colorBgContainer,
            actionsLiMargin: `${e.paddingSM}px 0`,
            tabsMarginBottom: -e.padding - e.lineWidth,
            extraColor: e.colorText,
            bodyPaddingSM: 12,
            headerPaddingSM: 12,
            bodyPadding: e.bodyPadding ? ? e.paddingLG,
            headerPadding: e.headerPadding ? ? e.paddingLG
        })),
        ts = e => {
            let {
                actionClasses: t,
                actions: l = [],
                actionStyle: r
            } = e;
            return n.createElement("ul", {
                className: t,
                style: r
            }, l.map((e, t) => {
                let r = `action-${t}`;
                return n.createElement("li", {
                    style: {
                        width: `${100/l.length}%`
                    },
                    key: r
                }, n.createElement("span", null, e))
            }))
        },
        tc = n.forwardRef((e, t) => {
            let l, {
                    prefixCls: o,
                    className: i,
                    rootClassName: a,
                    style: c,
                    extra: d,
                    headStyle: u = {},
                    bodyStyle: f = {},
                    title: p,
                    loading: m,
                    bordered: h,
                    variant: g,
                    size: v,
                    type: b,
                    cover: y,
                    actions: $,
                    tabList: S,
                    children: C,
                    activeTabKey: k,
                    defaultActiveTabKey: w,
                    tabBarExtraContent: E,
                    hoverable: N,
                    tabProps: I = {},
                    classNames: M,
                    styles: z,
                    ...R
                } = e,
                {
                    getPrefixCls: T,
                    direction: H,
                    className: P,
                    style: L,
                    classNames: A,
                    styles: B
                } = (0, s.useComponentConfig)("card"),
                [O] = (0, tl.default)("card", g, h),
                W = (0, tn.default)(v),
                D = { ...e,
                    size: W,
                    variant: O,
                    loading: m
                },
                [F, _] = (0, x.useMergeSemantic)([A, M], [B, z], {
                    props: D
                }),
                j = n.useMemo(() => (0, eg.toArray)(C).some(e => n.isValidElement(e) && e.type === ti), [C]),
                X = T("card", o),
                [q, V] = ta(X),
                G = n.createElement(tr.default, {
                    loading: !0,
                    active: !0,
                    paragraph: {
                        rows: 4
                    },
                    title: !1
                }, C),
                Y = void 0 !== k,
                U = { ...I,
                    [Y ? "activeKey" : "defaultActiveKey"]: Y ? k : w,
                    tabBarExtraContent: E
                },
                K = W && "default" !== W ? W : "large",
                Q = S ? n.createElement(to.default, {
                    size: K,
                    ...U,
                    className: `${X}-head-tabs`,
                    onChange: t => {
                        e.onTabChange ? .(t)
                    },
                    items: S.map(e => {
                        let {
                            tab: t,
                            ...n
                        } = e;
                        return {
                            label: t,
                            ...n
                        }
                    })
                }) : null;
            if (p || d || Q) {
                let e = (0, r.clsx)(`${X}-head`, F.header),
                    t = (0, r.clsx)(`${X}-head-title`, F.title),
                    o = (0, r.clsx)(`${X}-extra`, F.extra),
                    i = { ...u,
                        ..._.header
                    };
                l = n.createElement("div", {
                    className: e,
                    style: i
                }, n.createElement("div", {
                    className: `${X}-head-wrapper`
                }, p && n.createElement("div", {
                    className: t,
                    style: _.title
                }, p), d && n.createElement("div", {
                    className: o,
                    style: _.extra
                }, d)), Q)
            }
            let Z = (0, r.clsx)(`${X}-cover`, F.cover),
                J = y ? n.createElement("div", {
                    className: Z,
                    style: _.cover
                }, y) : null,
                ee = (0, r.clsx)(`${X}-body`, F.body),
                et = { ...f,
                    ..._.body
                },
                en = n.createElement("div", {
                    className: ee,
                    style: et
                }, m ? G : C),
                el = (0, r.clsx)(`${X}-actions`, F.actions),
                er = $ ? .length ? n.createElement(ts, {
                    actionClasses: el,
                    actionStyle: _.actions,
                    actions: $
                }) : null,
                eo = (0, ep.omit)(R, ["onTabChange"]),
                ei = (0, r.clsx)(X, P, {
                    [`${X}-loading`]: m,
                    [`${X}-bordered`]: "borderless" !== O,
                    [`${X}-hoverable`]: N,
                    [`${X}-contain-grid`]: j,
                    [`${X}-contain-tabs`]: S ? .length,
                    [`${X}-${W}`]: W,
                    [`${X}-type-${b}`]: !!b,
                    [`${X}-rtl`]: "rtl" === H
                }, i, a, q, V, F.root),
                ea = { ..._.root,
                    ...L,
                    ...c
                };
            return n.createElement("div", {
                ref: t,
                ...eo,
                className: ei,
                style: ea
            }, l, J, en, er)
        });
    tc.Grid = ti, tc.Meta = e => {
        let {
            prefixCls: t,
            className: l,
            avatar: o,
            title: i,
            description: a,
            style: c,
            classNames: d,
            styles: u,
            ...f
        } = e, {
            getPrefixCls: p,
            className: m,
            style: h,
            classNames: g,
            styles: v
        } = (0, s.useComponentConfig)("cardMeta"), b = p("card", t), y = `${b}-meta`, [$, S] = (0, x.useMergeSemantic)([g, d], [v, u], {
            props: e
        }), C = (0, r.clsx)(y, l, m, $.root), k = { ...h,
            ...S.root,
            ...c
        }, w = (0, r.clsx)(`${y}-avatar`, $.avatar), E = (0, r.clsx)(`${y}-title`, $.title), N = (0, r.clsx)(`${y}-description`, $.description), I = (0, r.clsx)(`${y}-section`, $.section), M = o ? n.createElement("div", {
            className: w,
            style: S.avatar
        }, o) : null, z = i ? n.createElement("div", {
            className: E,
            style: S.title
        }, i) : null, R = a ? n.createElement("div", {
            className: N,
            style: S.description
        }, a) : null, T = z || R ? n.createElement("div", {
            className: I,
            style: S.section
        }, z, R) : null;
        return n.createElement("div", { ...f,
            className: C,
            style: k
        }, M, T)
    };
    var td = e.i(634771);
    e.i(829148);
    var tu = e.i(736672),
        tu = tu,
        tf = e.i(987225),
        tp = e.i(940487),
        tm = e.i(440383);
    let th = n.createContext({}),
        tg = "__rc_cascader_search_mark__",
        tv = (e, t, n) => {
            let {
                label: l = ""
            } = n;
            return t.some(t => String(t[l]).toLowerCase().includes(e.toLowerCase()))
        },
        tb = (e, t, n, l) => t.map(e => e[l.label]).join(" / "),
        ty = "__RC_CASCADER_SPLIT__",
        t$ = "SHOW_PARENT",
        tx = "SHOW_CHILD";

    function tS(e) {
        return e.join(ty)
    }

    function tC(e) {
        return e.map(tS)
    }

    function tk(e) {
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

    function tw(e, t) {
        return e.isLeaf ? ? !e[t.children] ? .length
    }

    function tE(e) {
        let t = e.parentElement;
        if (!t) return;
        let n = e.offsetTop - t.offsetTop;
        n - t.scrollTop < 0 ? t.scrollTo({
            top: n
        }) : n + e.offsetHeight - t.scrollTop > t.offsetHeight && t.scrollTo({
            top: n + e.offsetHeight - t.offsetHeight
        })
    }

    function tN(e, t) {
        return e.map(e => e[tg] ? .map(e => e[t.value]))
    }

    function tI(e) {
        return e ? Array.isArray(e) && Array.isArray(e[0]) ? e : (0 === e.length ? [] : [e]).map(e => Array.isArray(e) ? e : [e]) : []
    }

    function tM(e, t, n) {
        let l = new Set(e),
            r = t();
        return e.filter(e => {
            let t = r[e],
                o = t ? t.parent : null,
                i = t ? t.children : null;
            return !!t && !!t.node.disabled || (n === tx ? !(i && i.some(e => e.key && l.has(e.key))) : !(o && !o.node.disabled && l.has(o.key)))
        })
    }

    function tz(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = t,
            o = [];
        for (let t = 0; t < e.length; t += 1) {
            let i = e[t],
                a = r ? .findIndex(e => {
                    let t = e[n.value];
                    return l ? String(t) === String(i) : t === i
                }),
                s = -1 !== a ? r ? .[a] : null;
            o.push({
                value: s ? .[n.value] ? ? i,
                index: a,
                option: s
            }), r = s ? .[n.children]
        }
        return o
    }

    function tR(e, t) {
        return n.useCallback(n => {
            let l = [],
                r = [];
            return n.forEach(n => {
                tz(n, e, t).every(e => e.option) ? r.push(n) : l.push(n)
            }), [r, l]
        }, [e, t])
    }
    var tT = e.i(932681);

    function tH(e, t) {
        let l, r = n.useMemo(() => t || [], [t]),
            o = (l = n.useRef({
                options: [],
                info: {
                    keyEntities: {},
                    pathKeyEntities: {}
                }
            }), n.useCallback(() => (l.current.options !== r && (l.current.options = r, l.current.info = (0, tT.convertDataToEntities)(r, {
                fieldNames: e,
                initWrapper: e => ({ ...e,
                    pathKeyEntities: {}
                }),
                processEntity: (t, n) => {
                    let l = t.nodes.map(t => t[e.value]).join(ty);
                    n.pathKeyEntities[l] = t, t.key = l
                }
            })), l.current.info.pathKeyEntities), [e, r])),
            i = n.useCallback(t => {
                let n = o();
                return t.map(t => {
                    let {
                        nodes: l
                    } = n[t];
                    return l.map(t => t[e.value])
                })
            }, [o, e]);
        return [r, o, i]
    }
    var tP = e.i(24308),
        tL = e.i(326676);

    function tA(e, t, n, l, r, o, i, a) {
        return s => {
            if (e) {
                let e = tS(s),
                    c = tC(n),
                    d = tC(l),
                    u = c.includes(e),
                    f = r.some(t => tS(t) === e),
                    p = n,
                    m = r;
                if (f && !u) m = r.filter(t => tS(t) !== e);
                else {
                    let t, n = u ? c.filter(t => t !== e) : [...c, e],
                        l = o();
                    u ? {
                        checkedKeys: t
                    } = (0, tL.conductCheck)(n, {
                        checked: !1,
                        halfCheckedKeys: d
                    }, l) : {
                        checkedKeys: t
                    } = (0, tL.conductCheck)(n, !0, l), p = i(tM(t, o, a))
                }
                t([...m, ...p])
            } else t(s)
        }
    }

    function tB(e, t, l, r, o) {
        return n.useMemo(() => {
            let [n, i] = o(t);
            if (!e || !t.length) return [n, [], i];
            let a = tC(n),
                s = l(),
                {
                    checkedKeys: c,
                    halfCheckedKeys: d
                } = (0, tL.conductCheck)(a, !0, s);
            return [r(c), r(d), i]
        }, [e, t, l, r, o])
    }
    var tO = e.i(960702),
        tO = tO;
    let tW = n.memo(e => {
        let {
            children: t
        } = e;
        return t
    }, (e, t) => !t.open);

    function tD(e) {
        let {
            prefixCls: t,
            checked: l,
            halfChecked: o,
            disabled: i,
            onClick: a,
            disableCheckbox: s
        } = e, {
            checkable: c
        } = n.useContext(th);
        return n.createElement("span", {
            className: (0, r.clsx)(`${t}`, {
                [`${t}-checked`]: l,
                [`${t}-indeterminate`]: !l && o,
                [`${t}-disabled`]: i || s
            }),
            onClick: a
        }, "boolean" != typeof c ? c : null)
    }

    function tF() {
        return (tF = Object.assign.bind()).apply(this, arguments)
    }
    let t_ = "__cascader_fix_label__";

    function tj(e) {
        let {
            prefixCls: t,
            multiple: l,
            options: o,
            activeValue: i,
            prevValuePath: a,
            onToggleOpen: s,
            onSelect: c,
            onActive: d,
            checkedSet: u,
            halfCheckedSet: f,
            loadingKeys: p,
            isSelectable: m,
            disabled: h
        } = e, g = `${t}-menu`, v = `${t}-menu-item`, b = n.useRef(null), {
            fieldNames: y,
            changeOnSelect: $,
            expandTrigger: x,
            expandIcon: S,
            loadingIcon: C,
            popupMenuColumnStyle: k,
            optionRender: w,
            classNames: E,
            styles: N
        } = n.useContext(th), I = "hover" === x, M = n.useMemo(() => o.map(e => {
            let {
                disabled: t,
                disableCheckbox: n
            } = e, l = e[tg], r = e[t_] ? ? e[y.label], o = e[y.value], i = tw(e, y), s = l ? l.map(e => e[y.value]) : [...a, o], c = tS(s), d = p.includes(c);
            return {
                disabled: t,
                label: r,
                value: o,
                isLeaf: i,
                isLoading: d,
                checked: u.has(c),
                halfChecked: f.has(c),
                option: e,
                disableCheckbox: n,
                fullPath: s,
                fullPathKey: c
            }
        }), [o, u, y, f, p, a]);
        return n.useEffect(() => {
            if (b.current) {
                let e = `.${v}-active`,
                    t = b.current.querySelector(e);
                t && tE(t)
            }
        }, [i, v]), n.createElement("ul", {
            className: (0, r.clsx)(g, E ? .popup ? .list),
            style: N ? .popup ? .list,
            ref: b,
            role: "menu"
        }, M.map(e => {
            let o, {
                    disabled: a,
                    label: u,
                    value: f,
                    isLeaf: p,
                    isLoading: g,
                    checked: b,
                    halfChecked: y,
                    option: x,
                    fullPath: M,
                    fullPathKey: z,
                    disableCheckbox: R
                } = e,
                T = (0, eH.default)(x, {
                    aria: !0,
                    data: !0
                }),
                H = () => {
                    if (h || a) return;
                    let e = [...M];
                    I && p && e.pop(), d(e)
                },
                P = () => {
                    !m(x) || h || a || c(M, p)
                };
            return "string" == typeof x.title ? o = x.title : "string" == typeof u && (o = u), n.createElement("li", tF({
                key: z
            }, T, {
                className: (0, r.clsx)(v, E ? .popup ? .listItem, {
                    [`${v}-expand`]: !p,
                    [`${v}-active`]: i === f || i === z,
                    [`${v}-disabled`]: h || a,
                    [`${v}-loading`]: g
                }),
                style: { ...k,
                    ...N ? .popup ? .listItem
                },
                role: "menuitemcheckbox",
                title: o,
                "aria-checked": b,
                "data-path-key": z,
                onClick: () => {
                    H(), R || (!l || p) && P()
                },
                onDoubleClick: () => {
                    $ && s(!1)
                },
                onMouseEnter: () => {
                    I && H()
                },
                onMouseDown: e => {
                    e.preventDefault()
                }
            }), l && n.createElement(tD, {
                prefixCls: `${t}-checkbox`,
                checked: b,
                halfChecked: y,
                disabled: h || a || R,
                disableCheckbox: R,
                onClick: e => {
                    R || (e.stopPropagation(), P())
                }
            }), n.createElement("div", {
                className: `${v}-content`
            }, w ? w(x) : u), !g && S && !p && n.createElement("div", {
                className: `${v}-expand-icon`
            }, S), g && C && n.createElement("div", {
                className: `${v}-loading-icon`
            }, C))
        }))
    }
    var tX = e.i(830731);

    function tq() {
        return (tq = Object.assign.bind()).apply(this, arguments)
    }
    let tV = n.forwardRef((e, t) => {
        let {
            prefixCls: l,
            multiple: o,
            searchValue: i,
            toggleOpen: a,
            notFoundContent: s,
            direction: c,
            open: d,
            disabled: u
        } = e, f = n.useRef(null), {
            options: p,
            values: m,
            halfValues: h,
            fieldNames: g,
            changeOnSelect: v,
            onSelect: b,
            searchOptions: y,
            popupPrefixCls: $,
            loadData: x,
            expandTrigger: S
        } = n.useContext(th), C = $ || l, [k, w] = n.useState([]);
        n.useEffect(() => {
            k.length && k.forEach(e => {
                let t = tz(e.split(ty), p, g, !0).map(e => {
                        let {
                            option: t
                        } = e;
                        return t
                    }),
                    n = t[t.length - 1];
                (!n || n[g.children] || tw(n, g)) && w(t => t.filter(t => t !== e))
            })
        }, [p, k, g]);
        let E = n.useMemo(() => new Set(tC(m)), [m]),
            N = n.useMemo(() => new Set(tC(h)), [h]),
            [I, M] = ((e, t) => {
                let {
                    values: l
                } = n.useContext(th), r = l[0], [o, i] = n.useState([]);
                return n.useEffect(() => {
                    e || i(r || [])
                }, [t, r]), [o, i]
            })(o, d),
            z = e => {
                M(e), (e => {
                    if (!x || i) return;
                    let t = tz(e, p, g).map(e => {
                            let {
                                option: t
                            } = e;
                            return t
                        }),
                        n = t[t.length - 1];
                    if (n && !tw(n, g)) {
                        let n = tS(e);
                        w(e => [...e, n]), x(t)
                    }
                })(e)
            },
            R = e => {
                if (u) return !1;
                let {
                    disabled: t
                } = e, n = tw(e, g);
                return !t && (n || v || o)
            },
            T = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                b(e), !o && (t || v && ("hover" === S || n)) && a(!1)
            },
            H = n.useMemo(() => i ? y : p, [i, y, p]),
            P = n.useMemo(() => {
                let e = [{
                        options: H
                    }],
                    t = H,
                    n = tN(t, g);
                for (let l = 0; l < I.length; l += 1) {
                    let r = I[l],
                        o = t.find((e, t) => (n[t] ? tS(n[t]) : e[g.value]) === r),
                        i = o ? .[g.children];
                    if (!i ? .length) break;
                    t = i, e.push({
                        options: i
                    })
                }
                return e
            }, [H, I, g]);
        ((e, t, l, r, o, i, a) => {
            let {
                direction: s,
                searchValue: c,
                toggleOpen: d,
                open: u
            } = a, f = "rtl" === s, [p, m, h, g] = n.useMemo(() => {
                let e = -1,
                    n = t,
                    o = [],
                    i = [],
                    a = r.length,
                    s = tN(t, l);
                for (let t = 0; t < a && n; t += 1) {
                    let a = n.findIndex((e, n) => (s[n] ? tS(s[n]) : e[l.value]) === r[t]);
                    if (-1 === a) break;
                    e = a, o.push(e), i.push(r[t]), n = n[e][l.children]
                }
                let c = t;
                for (let e = 0; e < o.length - 1; e += 1) c = c[o[e]][l.children];
                return [i, e, c, s]
            }, [r, l, t]), v = e => {
                o(e)
            }, b = () => {
                p.length > 1 ? v(p.slice(0, -1)) : d(!1)
            }, y = () => {
                let e = (h[m] ? .[l.children] || []).find(e => !e.disabled);
                e && v([...p, e[l.value]])
            };
            n.useImperativeHandle(e, () => ({
                onKeyDown: e => {
                    let {
                        which: t
                    } = e;
                    switch (t) {
                        case tX.default.UP:
                        case tX.default.DOWN:
                            {
                                let e = 0;t === tX.default.UP ? e = -1 : t === tX.default.DOWN && (e = 1),
                                0 !== e && (e => {
                                    let t = h.length,
                                        n = m; - 1 === n && e < 0 && (n = t);
                                    for (let r = 0; r < t; r += 1) {
                                        let r = h[n = (n + e + t) % t];
                                        if (r && !r.disabled) return void v(p.slice(0, -1).concat(g[n] ? tS(g[n]) : r[l.value]))
                                    }
                                })(e);
                                break
                            }
                        case tX.default.LEFT:
                            if (c) break;
                            f ? y() : b();
                            break;
                        case tX.default.RIGHT:
                            if (c) break;
                            f ? b() : y();
                            break;
                        case tX.default.BACKSPACE:
                            c || b();
                            break;
                        case tX.default.ENTER:
                            if (p.length) {
                                let e = h[m],
                                    t = e ? .[tg] || [];
                                t.length ? i(t.map(e => e[l.value]), t[t.length - 1]) : i(p, h[m])
                            }
                            break;
                        case tX.default.ESC:
                            d(!1), u && e.stopPropagation()
                    }
                },
                onKeyUp: () => {}
            }))
        })(t, H, g, I, z, (e, t) => {
            R(t) && T(e, tw(t, g), !0)
        }, {
            direction: c,
            searchValue: i,
            toggleOpen: a,
            open: d
        }), n.useEffect(() => {
            if (!i)
                for (let e = 0; e < I.length; e += 1) {
                    let t = tS(I.slice(0, e + 1)),
                        n = f.current ? .querySelector(`li[data-path-key="${t.replace(/\\{0,2}"/g,'\\"')}"]`);
                    n && tE(n)
                }
        }, [I, i]);
        let L = !P[0] ? .options ? .length,
            A = [{
                [g.value]: "__EMPTY__",
                [t_]: s,
                disabled: !0
            }],
            B = { ...e,
                multiple: !L && o,
                onSelect: T,
                onActive: z,
                onToggleOpen: a,
                checkedSet: E,
                halfCheckedSet: N,
                loadingKeys: k,
                isSelectable: R
            },
            O = (L ? [{
                options: A
            }] : P).map((e, t) => {
                let l = I.slice(0, t),
                    r = I[t];
                return n.createElement(tj, tq({
                    key: t
                }, B, {
                    prefixCls: C,
                    options: e.options,
                    prevValuePath: l,
                    activeValue: r
                }))
            });
        return n.createElement(tW, {
            open: d
        }, n.createElement("div", {
            className: (0, r.clsx)(`${C}-menus`, {
                [`${C}-menu-empty`]: L,
                [`${C}-rtl`]: "rtl" === c
            }),
            ref: f
        }, O))
    });

    function tG() {
        return (tG = Object.assign.bind()).apply(this, arguments)
    }
    let tY = n.forwardRef((e, t) => {
        let l = (0, tO.default)();
        return n.createElement(tV, tG({}, e, l, {
            ref: t
        }))
    });

    function tU() {}

    function tK(e) {
        let {
            prefixCls: t = "rc-cascader",
            style: l,
            className: o,
            options: i,
            checkable: a,
            defaultValue: s,
            value: c,
            fieldNames: d,
            changeOnSelect: u,
            onChange: f,
            showCheckedStrategy: p,
            loadData: m,
            expandTrigger: h,
            expandIcon: g = ">",
            loadingIcon: v,
            direction: y,
            notFoundContent: $ = "Not Found",
            disabled: x,
            optionRender: S
        } = e, C = !!a, [k, w] = (0, eY.useControlledState)(s, c), E = tI(k), N = n.useMemo(() => tk(d), [JSON.stringify(d)]), [I, M, z] = tH(N, i), [R, T, H] = tB(C, E, M, z, tR(I, N)), P = (0, b.useEvent)(e => {
            if (w(e), f) {
                let t = tI(e),
                    n = t.map(e => tz(e, I, N).map(e => e.option));
                f(C ? t : t[0], C ? n : n[0])
            }
        }), L = tA(C, P, R, T, H, M, z, p), A = (0, b.useEvent)(e => {
            L(e)
        }), B = n.useMemo(() => ({
            options: I,
            fieldNames: N,
            values: R,
            halfValues: T,
            changeOnSelect: u,
            onSelect: A,
            checkable: a,
            searchOptions: [],
            popupPrefixCls: void 0,
            loadData: m,
            expandTrigger: h,
            expandIcon: g,
            loadingIcon: v,
            popupMenuColumnStyle: void 0,
            optionRender: S
        }), [I, N, R, T, u, A, a, m, h, g, v, S]), O = `${t}-panel`, W = !I.length;
        return n.createElement(th.Provider, {
            value: B
        }, n.createElement("div", {
            className: (0, r.clsx)(O, {
                [`${O}-rtl`]: "rtl" === y,
                [`${O}-empty`]: W
            }, o),
            style: l
        }, W ? $ : n.createElement(tV, {
            prefixCls: t,
            searchValue: "",
            multiple: C,
            toggleOpen: tU,
            open: !0,
            direction: y,
            disabled: x
        })))
    }

    function tQ() {
        return (tQ = Object.assign.bind()).apply(this, arguments)
    }
    let tZ = n.forwardRef((e, t) => {
        let l, {
                id: r,
                prefixCls: o = "rc-cascader",
                fieldNames: i,
                defaultValue: a,
                value: s,
                changeOnSelect: c,
                onChange: d,
                displayRender: u,
                checkable: f,
                showSearch: p,
                expandTrigger: m,
                options: h,
                popupPrefixCls: g,
                loadData: v,
                open: b,
                popupClassName: y,
                popupMenuColumnStyle: $,
                popupStyle: x,
                classNames: S,
                styles: C,
                placement: k,
                onPopupVisibleChange: w,
                expandIcon: E = ">",
                loadingIcon: N,
                children: I,
                popupMatchSelectWidth: M = !1,
                showCheckedStrategy: z = t$,
                optionRender: R,
                ...T
            } = e,
            H = (0, tf.default)(r),
            P = !!f,
            [L, A] = (0, tm.default)(a, s),
            B = tI(L),
            O = n.useMemo(() => tk(i), [JSON.stringify(i)]),
            [W, D, F] = tH(O, h),
            [_, j] = function(e, t) {
                let {
                    autoClearSearchValue: l,
                    searchValue: r,
                    onSearch: o
                } = t;
                return n.useMemo(() => {
                    if (!e) return [!1, {}];
                    let t = {
                        matchInputWidth: !0,
                        limit: 50,
                        autoClearSearchValue: l,
                        searchValue: r,
                        onSearch: o
                    };
                    return e && "object" == typeof e && (t = { ...t,
                        ...e
                    }), t.limit <= 0 && (t.limit = !1), [!0, t]
                }, [e, l, r, o])
            }(p, e),
            {
                autoClearSearchValue: X = !0,
                searchValue: q,
                onSearch: V
            } = j,
            [G, Y] = (0, tm.default)("", q),
            U = G || "",
            K = ((e, t, l, r, o, i) => {
                let {
                    filter: a = tv,
                    render: s = tb,
                    limit: c = 50,
                    sort: d
                } = o;
                return n.useMemo(() => {
                    let n = [];
                    return e ? (! function t(o, u) {
                        let f = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        o.forEach(o => {
                            if (!d && !1 !== c && c > 0 && n.length >= c) return;
                            let p = [...u, o],
                                m = o[l.children],
                                h = f || o.disabled;
                            (!m || 0 === m.length || i) && a(e, p, {
                                label: l.label
                            }) && n.push({ ...o,
                                disabled: h,
                                [l.label]: s(e, p, r, l),
                                [tg]: p,
                                [l.children]: void 0
                            }), m && t(o[l.children], p, h)
                        })
                    }(t, []), d && n.sort((t, n) => d(t[tg], n[tg], e, l)), !1 !== c && c > 0 ? n.slice(0, c) : n) : []
                }, [e, t, l, r, s, i, a, d, c])
            })(U, W, O, g || o, j, c || P),
            [Q, Z, J] = tB(P, B, D, F, tR(W, O)),
            ee = (l = n.useMemo(() => [...J, ...F(tM(tC(Q), D, z))], [Q, D, F, J, z]), n.useMemo(() => {
                let e = u || (e => {
                    let t = P ? e.slice(-1) : e;
                    return t.every(e => ["string", "number"].includes(typeof e)) ? t.join(" / ") : t.reduce((e, t, l) => {
                        let r = n.isValidElement(t) ? n.cloneElement(t, {
                            key: l
                        }) : t;
                        return 0 === l ? [r] : [...e, " / ", r]
                    }, [])
                });
                return l.map(t => {
                    let n = tz(t, W, O),
                        l = e(n.map(e => {
                            let {
                                option: t,
                                value: n
                            } = e;
                            return t ? .[O.label] ? ? n
                        }), n.map(e => {
                            let {
                                option: t
                            } = e;
                            return t
                        })),
                        r = tS(t);
                    return {
                        label: l,
                        value: r,
                        key: r,
                        valueCells: t,
                        disabled: n[n.length - 1] ? .option ? .disabled
                    }
                })
            }, [l, W, O, u, P])),
            et = (0, tp.default)(e => {
                if (A(e), d) {
                    let t = tI(e),
                        n = t.map(e => tz(e, W, O).map(e => e.option));
                    d(P ? t : t[0], P ? n : n[0])
                }
            }),
            en = tA(P, et, Q, Z, J, D, F, z),
            el = (0, tp.default)(e => {
                (!P || X) && Y(""), en(e)
            }),
            er = n.useMemo(() => ({
                classNames: S,
                styles: C,
                options: W,
                fieldNames: O,
                values: Q,
                halfValues: Z,
                changeOnSelect: c,
                onSelect: el,
                checkable: f,
                searchOptions: K,
                popupPrefixCls: g,
                loadData: v,
                expandTrigger: m,
                expandIcon: E,
                loadingIcon: N,
                popupMenuColumnStyle: $,
                optionRender: R
            }), [S, C, W, O, Q, Z, c, el, f, K, g, v, m, E, N, $, R]),
            eo = !(U ? K : W).length,
            ei = U && j.matchInputWidth || eo ? {} : {
                minWidth: "auto"
            };
        return n.createElement(th.Provider, {
            value: er
        }, n.createElement(tu.default, tQ({}, T, {
            ref: t,
            id: H,
            prefixCls: o,
            autoClearSearchValue: X,
            popupMatchSelectWidth: M,
            classNames: S,
            styles: C,
            popupStyle: { ...ei,
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
            OptionList: tY,
            emptyOptions: eo,
            open: b,
            popupClassName: y,
            placement: k,
            onPopupVisibleChange: e => {
                w ? .(e)
            },
            getRawInputElement: () => I
        })))
    });
    tZ.SHOW_PARENT = t$, tZ.SHOW_CHILD = tx, tZ.Panel = tK;
    var tJ = e.i(613541),
        t0 = e.i(52956),
        t1 = e.i(721132),
        t2 = e.i(937328),
        t3 = e.i(85566),
        t4 = e.i(950302),
        t8 = e.i(729151),
        t5 = e.i(857172),
        t6 = e.i(536047),
        t9 = e.i(249616);
    let t7 = function(e, t) {
        let {
            getPrefixCls: l,
            direction: r,
            renderEmpty: o
        } = n.useContext(s.ConfigContext);
        return [l("select", e), l("cascader", e), t || r, o]
    };

    function ne(e, t) {
        return n.useMemo(() => !!t && n.createElement("span", {
            className: `${e}-checkbox-inner`
        }), [e, t])
    }
    var nt = e.i(801312),
        nn = e.i(286612);
    let nl = (e, t, l) => {
        let r = l;
        l || (r = t ? n.createElement(nt.default, null) : n.createElement(nn.default, null));
        let o = n.useMemo(() => n.createElement("span", {
            className: `${e}-menu-item-loading-icon`
        }, n.createElement(V.default, {
            spin: !0
        })), [e]);
        return n.useMemo(() => [r, o], [r, o])
    };
    var nr = e.i(372409),
        no = e.i(236836);
    let ni = e => {
            let {
                prefixCls: t,
                componentCls: n
            } = e, l = `${n}-menu-item`, r = `
  &${l}-expand ${l}-expand-icon,
  ${l}-loading-icon
`;
            return [(0, no.getStyle)(`${t}-checkbox`, e), {
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
                            borderInlineEnd: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
                        },
                        "&-item": { ...N.textEllipsis,
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
        na = e => {
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
        ns = (0, c.genStyleHooks)("Cascader", e => {
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
                }, ni(e)]
            }, {
                [`${t}-dropdown-rtl`]: {
                    direction: "rtl"
                }
            }, (0, nr.genCompactItemStyle)(e)]
        }, na, {
            resetFont: !1,
            unitless: {
                optionSelectedFontWeight: !0
            }
        }),
        nc = (0, c.genComponentStyleHook)(["Cascader", "Panel"], e => {
            let {
                componentCls: t
            } = e;
            return {
                [`${t}-panel`]: [ni(e), {
                    display: "inline-flex",
                    border: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
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
        }, na, {
            resetFont: !1
        }),
        {
            SHOW_CHILD: nd,
            SHOW_PARENT: nu
        } = tZ,
        nf = (e, t, l, r) => {
            let i = [],
                a = e.toLowerCase();
            return t.forEach((e, t) => {
                var s;
                let c, d, u;
                0 !== t && i.push(" / ");
                let f = e[r.label],
                    p = typeof f;
                ("string" === p || "number" === p) && (s = String(f), c = s.toLowerCase().split(a).reduce((e, t, n) => 0 === n ? [t] : [].concat((0, o.default)(e), [a, t]), []), d = [], u = 0, c.forEach((e, t) => {
                    let r = u + e.length,
                        o = s.slice(u, r);
                    u = r, t % 2 == 1 && (o = n.createElement("span", {
                        className: `${l}-menu-item-keyword`,
                        key: `separator-${t}`
                    }, o)), d.push(o)
                }), f = d), i.push(f)
            }), i
        },
        np = n.forwardRef((e, t) => {
            let {
                prefixCls: l,
                size: o,
                disabled: i,
                className: a,
                rootClassName: c,
                multiple: d,
                bordered: u = !0,
                transitionName: f,
                choiceTransitionName: p = "",
                popupClassName: m,
                expandIcon: h,
                placement: g,
                showSearch: v,
                allowClear: b = !0,
                notFoundContent: y,
                direction: $,
                getPopupContainer: S,
                status: k,
                showArrow: w,
                builtinPlacements: E,
                style: N,
                variant: I,
                dropdownClassName: M,
                dropdownRender: z,
                onDropdownVisibleChange: R,
                onPopupVisibleChange: T,
                dropdownMenuColumnStyle: H,
                popupRender: P,
                dropdownStyle: L,
                popupMenuColumnStyle: A,
                onOpenChange: B,
                styles: O,
                classNames: W,
                ...D
            } = e, F = (0, ep.omit)(D, ["suffixIcon"]), {
                getPrefixCls: _,
                getPopupContainer: j,
                className: X,
                style: q,
                classNames: V,
                styles: G
            } = (0, s.useComponentConfig)("cascader"), {
                popupOverflow: Y
            } = n.useContext(s.ConfigContext), {
                status: K,
                hasFeedback: Q,
                isFormItemInput: Z,
                feedbackIcon: J
            } = n.useContext(eK.FormItemInputContext), ee = (0, t0.getMergedStatus)(K, k), [et, en, el, er] = t7(l, $), eo = "rtl" === el, ei = _(), ea = (0, C.default)(et), [es, ec] = (0, t4.default)(et, ea), ed = (0, C.default)(en);
            ns(en, ed);
            let {
                compactSize: eu,
                compactItemClassnames: ef
            } = (0, t9.useCompactItemContext)(et, $), [em, eh] = (0, tl.default)("cascader", I, u), eg = y || er ? .("Cascader") || n.createElement(t1.default, {
                componentName: "Cascader"
            }), ev = (0, t5.default)(P || z), eb = n.useMemo(() => {
                if (!v) return v;
                let e = {
                    render: nf
                };
                return "object" == typeof v && (e = { ...e,
                    ...v
                }), e
            }, [v]), ey = (0, tn.default)(e => o ? ? eu ? ? e), e$ = n.useContext(t2.default), ex = i ? ? e$, [eS, eC] = nl(et, eo, h), ek = ne(en, d), ew = (0, t6.default)(e.suffixIcon, w), {
                suffixIcon: eE,
                removeIcon: eN,
                clearIcon: eI
            } = (0, t8.default)({ ...e,
                hasFeedback: Q,
                feedbackIcon: J,
                showSuffixIcon: ew,
                multiple: d,
                prefixCls: et,
                componentName: "Cascader"
            }), eM = n.useMemo(() => void 0 !== g ? g : eo ? "bottomRight" : "bottomLeft", [g, eo]), ez = { ...e,
                variant: em,
                size: ey,
                status: ee,
                disabled: ex
            }, [eR, eT] = (0, x.useMergeSemantic)([V, W], [G, O], {
                props: ez
            }, {
                popup: {
                    _default: "root"
                }
            }), eH = { ...eT.popup ? .root,
                ...L
            }, [eP] = (0, U.useZIndex)("SelectLike", eH ? .zIndex), eL = (0, r.clsx)(m || M, `${en}-dropdown`, {
                [`${en}-dropdown-rtl`]: "rtl" === el
            }, c, ea, eR.popup ? .root, ed, es, ec);
            return n.createElement(tZ, {
                prefixCls: et,
                className: (0, r.clsx)(!l && en, {
                    [`${et}-lg`]: "large" === ey,
                    [`${et}-sm`]: "small" === ey,
                    [`${et}-rtl`]: eo,
                    [`${et}-${em}`]: eh,
                    [`${et}-in-form-item`]: Z
                }, (0, t0.getStatusClassNames)(et, ee, Q), ef, X, a, c, eR.root, ea, ed, es, ec),
                disabled: ex,
                style: { ...eT.root,
                    ...q,
                    ...N
                },
                classNames: eR,
                styles: eT,
                ...F,
                builtinPlacements: (0, t3.default)(E, Y),
                direction: el,
                placement: eM,
                notFoundContent: eg,
                allowClear: !0 === b ? {
                    clearIcon: eI
                } : b,
                showSearch: eb,
                expandIcon: eS,
                suffixIcon: eE,
                removeIcon: eN,
                loadingIcon: eC,
                checkable: ek,
                popupClassName: eL,
                popupPrefixCls: l || en,
                popupStyle: { ...eH,
                    zIndex: eP
                },
                popupRender: ev,
                popupMenuColumnStyle: A || H,
                onPopupVisibleChange: B || T || R,
                choiceTransitionName: (0, tJ.getTransitionName)(ei, "", p),
                transitionName: (0, tJ.getTransitionName)(ei, "slide-up", f),
                getPopupContainer: S || j,
                ref: t
            })
        }),
        nm = (0, em.default)(np, "popupAlign", e => (0, ep.omit)(e, ["visible"]));
    np.SHOW_PARENT = nu, np.SHOW_CHILD = nd, np.Panel = function(e) {
        let {
            prefixCls: t,
            className: l,
            multiple: o,
            rootClassName: i,
            notFoundContent: a,
            direction: s,
            expandIcon: c,
            disabled: d
        } = e, u = n.useContext(t2.default), [f, p, m, h] = t7(t, s), g = (0, C.default)(p), [v, b] = ns(p, g);
        nc(p);
        let [y, $] = nl(f, "rtl" === m, c), x = a || h ? .("Cascader") || n.createElement(t1.default, {
            componentName: "Cascader"
        }), S = ne(p, o);
        return n.createElement(tK, { ...e,
            checkable: S,
            prefixCls: p,
            className: (0, r.clsx)(l, v, i, b, g),
            notFoundContent: x,
            direction: m,
            expandIcon: y,
            loadingIcon: $,
            disabled: d ? ? u
        })
    }, np._InternalPanelDoNotUseOrYouWillBeFired = nm;
    var nh = e.i(374276),
        ng = e.i(571610),
        nv = e.i(988122),
        nb = e.i(617206),
        ny = e.i(829672),
        n$ = e.i(571070),
        nx = e.i(72787),
        nS = e.i(509808),
        nC = e.i(401676),
        nk = e.i(149809),
        nw = e.i(931067),
        nE = e.i(232839),
        nN = e.i(128473);
    let nI = (e, t) => {
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
        nM = e => void 0 !== e ? `${e}px` : void 0;

    function nz(e) {
        let {
            prefixCls: t,
            containerRef: l,
            value: o,
            getValueIndex: i,
            motionName: a,
            onMotionStart: s,
            onMotionEnd: c,
            direction: d,
            vertical: u = !1
        } = e, f = n.useRef(null), [p, m] = n.useState(o), h = e => {
            let n = i(e),
                r = l.current ? .querySelectorAll(`.${t}-item`)[n];
            return r ? .offsetParent && r
        }, [g, v] = n.useState(null), [b, y] = n.useState(null);
        (0, nC.default)(() => {
            if (p !== o) {
                let e = h(p),
                    t = h(o),
                    n = nI(e, u),
                    l = nI(t, u);
                m(o), v(n), y(l), e && t ? s() : c()
            }
        }, [o]);
        let $ = n.useMemo(() => u ? nM(g ? .top ? ? 0) : "rtl" === d ? nM(-g ? .right) : nM(g ? .left), [u, d, g]),
            x = n.useMemo(() => u ? nM(b ? .top ? ? 0) : "rtl" === d ? nM(-b ? .right) : nM(b ? .left), [u, d, b]);
        return g && b ? n.createElement(nN.default, {
            visible: !0,
            motionName: a,
            motionAppear: !0,
            onAppearStart: () => u ? {
                transform: "translateY(var(--thumb-start-top))",
                height: "var(--thumb-start-height)"
            } : {
                transform: "translateX(var(--thumb-start-left))",
                width: "var(--thumb-start-width)"
            },
            onAppearActive: () => u ? {
                transform: "translateY(var(--thumb-active-top))",
                height: "var(--thumb-active-height)"
            } : {
                transform: "translateX(var(--thumb-active-left))",
                width: "var(--thumb-active-width)"
            },
            onVisibleChanged: () => {
                v(null), y(null), c()
            }
        }, (e, l) => {
            let {
                className: o,
                style: i
            } = e, a = { ...i,
                "--thumb-start-left": $,
                "--thumb-start-width": nM(g ? .width),
                "--thumb-active-left": x,
                "--thumb-active-width": nM(b ? .width),
                "--thumb-start-top": $,
                "--thumb-start-height": nM(g ? .height),
                "--thumb-active-top": x,
                "--thumb-active-height": nM(b ? .height)
            }, s = {
                ref: (0, nE.composeRef)(f, l),
                style: a,
                className: (0, r.clsx)(`${t}-thumb`, o)
            };
            return n.createElement("div", s)
        }) : null
    }
    let nR = e => {
            let {
                prefixCls: t,
                className: l,
                style: o,
                styles: i,
                classNames: a,
                data: s,
                disabled: c,
                checked: d,
                label: u,
                title: f,
                value: p,
                name: m,
                onChange: h,
                onFocus: g,
                onBlur: v,
                onKeyDown: b,
                onKeyUp: y,
                onMouseDown: $,
                itemRender: x = e => e
            } = e;
            return x(n.createElement("label", {
                className: (0, r.clsx)(l, {
                    [`${t}-item-disabled`]: c
                }),
                style: o,
                onMouseDown: $
            }, n.createElement("input", {
                name: m,
                className: `${t}-item-input`,
                type: "radio",
                disabled: c,
                checked: d,
                onChange: e => {
                    c || h(e, p)
                },
                onFocus: g,
                onBlur: v,
                onKeyDown: b,
                onKeyUp: y
            }), n.createElement("div", {
                className: (0, r.clsx)(`${t}-item-label`, a ? .label),
                title: f,
                style: i ? .label
            }, u)), {
                item: s
            })
        },
        nT = n.forwardRef((e, t) => {
            let {
                prefixCls: l = "rc-segmented",
                direction: o,
                vertical: i,
                options: a = [],
                disabled: s,
                defaultValue: c,
                value: d,
                name: u,
                onChange: f,
                className: p = "",
                style: m,
                styles: h,
                classNames: g,
                motionName: v = "thumb-motion",
                itemRender: b,
                ...y
            } = e, $ = n.useRef(null), x = n.useMemo(() => (0, nE.composeRef)($, t), [$, t]), S = n.useMemo(() => a.map(e => {
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
            }), [a]), [C, k] = (0, tm.default)(c ? ? S[0] ? .value, d), [w, E] = n.useState(!1), N = (e, t) => {
                k(t), f ? .(t)
            }, I = (0, eI.default)(y, ["children"]), [M, z] = n.useState(!1), [R, T] = n.useState(!1), H = () => {
                T(!0)
            }, P = () => {
                T(!1)
            }, L = () => {
                z(!1)
            }, A = e => {
                "Tab" === e.key && z(!0)
            }, B = e => {
                let t = S.findIndex(e => e.value === C),
                    n = S.length,
                    l = S[(t + e + n) % n];
                l && (k(l.value), f ? .(l.value))
            }, O = e => {
                switch (e.key) {
                    case "ArrowLeft":
                    case "ArrowUp":
                        B(-1);
                        break;
                    case "ArrowRight":
                    case "ArrowDown":
                        B(1)
                }
            };
            return n.createElement("div", (0, nw.default)({
                role: "radiogroup",
                "aria-label": "segmented control",
                tabIndex: s ? void 0 : 0,
                "aria-orientation": i ? "vertical" : "horizontal",
                style: m
            }, I, {
                className: (0, r.clsx)(l, {
                    [`${l}-rtl`]: "rtl" === o,
                    [`${l}-disabled`]: s,
                    [`${l}-vertical`]: i
                }, p),
                ref: x
            }), n.createElement("div", {
                className: `${l}-group`
            }, n.createElement(nz, {
                vertical: i,
                prefixCls: l,
                value: C,
                containerRef: $,
                motionName: `${l}-${v}`,
                direction: o,
                getValueIndex: e => S.findIndex(t => t.value === e),
                onMotionStart: () => {
                    E(!0)
                },
                onMotionEnd: () => {
                    E(!1)
                }
            }), S.map(e => {
                let {
                    value: t,
                    disabled: o
                } = e;
                return n.createElement(nR, (0, nw.default)({}, e, {
                    name: u,
                    data: e,
                    itemRender: b,
                    key: t,
                    prefixCls: l,
                    className: (0, r.clsx)(e.className, `${l}-item`, g ? .item, {
                        [`${l}-item-selected`]: t === C && !w,
                        [`${l}-item-focused`]: R && M && t === C
                    }),
                    style: h ? .item,
                    classNames: g,
                    styles: h,
                    checked: t === C,
                    onChange: N,
                    onFocus: H,
                    onBlur: P,
                    onKeyDown: O,
                    onKeyUp: A,
                    onMouseDown: L,
                    disabled: !!s || !!o
                }))
            })))
        });
    var nH = e.i(548817),
        nP = e.i(491816);

    function nL(e, t) {
        return {
            [`${e}, ${e}:hover, ${e}:focus`]: {
                color: t.colorTextDisabled,
                cursor: "not-allowed"
            }
        }
    }

    function nA(e) {
        return {
            background: e.itemSelectedBg,
            boxShadow: e.boxShadowTertiary
        }
    }
    let nB = {
            overflow: "hidden",
            ...N.textEllipsis
        },
        nO = (0, c.genStyleHooks)("Segmented", e => {
            let {
                lineWidth: t,
                calc: n
            } = e;
            return (e => {
                let {
                    componentCls: t
                } = e, n = e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(), l = e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(), r = e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();
                return {
                    [t]: { ...(0, N.resetComponent)(e),
                        display: "inline-block",
                        padding: e.trackPadding,
                        color: e.itemColor,
                        background: e.trackBg,
                        borderRadius: e.borderRadius,
                        transition: `all ${e.motionDurationMid}`,
                        ...(0, N.genFocusStyle)(e),
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
                                padding: `0 ${(0,E.unit)(e.paddingXXS)}`
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
                            "&-selected": { ...nA(e),
                                color: e.itemSelectedColor
                            },
                            "&-focused": (0, N.genFocusOutline)(e),
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
                                lineHeight: (0, E.unit)(n),
                                padding: `0 ${(0,E.unit)(e.segmentedPaddingHorizontal)}`,
                                ...nB
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
                        [`${t}-thumb`]: { ...nA(e),
                            position: "absolute",
                            insetBlockStart: 0,
                            insetInlineStart: 0,
                            width: 0,
                            height: "100%",
                            padding: `${(0,E.unit)(e.paddingXXS)} 0`,
                            borderRadius: e.borderRadiusSM,
                            [`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]: {
                                backgroundColor: "transparent"
                            }
                        },
                        [`&${t}-lg`]: {
                            borderRadius: e.borderRadiusLG,
                            [`${t}-item-label`]: {
                                minHeight: l,
                                lineHeight: (0, E.unit)(l),
                                padding: `0 ${(0,E.unit)(e.segmentedPaddingHorizontal)}`,
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
                                lineHeight: (0, E.unit)(r),
                                padding: `0 ${(0,E.unit)(e.segmentedPaddingHorizontalSM)}`
                            },
                            [`${t}-item, ${t}-thumb`]: {
                                borderRadius: e.borderRadiusXS
                            }
                        },
                        ...nL(`&-disabled ${t}-item`, e),
                        ...nL(`${t}-item-disabled`, e),
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
            })((0, I.mergeToken)(e, {
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
                lineWidthBold: i,
                colorBgLayout: a
            } = e;
            return {
                trackPadding: i,
                trackBg: a,
                itemColor: t,
                itemHoverColor: n,
                itemHoverBg: l,
                itemSelectedBg: r,
                itemActiveBg: o,
                itemSelectedColor: n
            }
        }),
        nW = n.forwardRef((e, t) => {
            let l = (0, tf.default)(),
                {
                    prefixCls: o,
                    className: i,
                    rootClassName: a,
                    block: c,
                    options: d = [],
                    size: u = "middle",
                    style: f,
                    vertical: p,
                    orientation: m,
                    shape: h = "default",
                    name: g = l,
                    styles: v,
                    classNames: b,
                    ...y
                } = e,
                {
                    getPrefixCls: $,
                    direction: S,
                    className: C,
                    style: k,
                    classNames: w,
                    styles: E
                } = (0, s.useComponentConfig)("segmented"),
                N = { ...e,
                    options: d,
                    size: u,
                    shape: h
                },
                [I, M] = (0, x.useMergeSemantic)([w, b], [E, v], {
                    props: N
                }),
                z = $("segmented", o),
                [R, T] = nO(z),
                H = (0, tn.default)(u),
                P = n.useMemo(() => d.map(e => {
                    if ("object" == typeof e && e ? .icon) {
                        let {
                            icon: t,
                            label: l,
                            ...o
                        } = e;
                        return { ...o,
                            label: n.createElement(n.Fragment, null, n.createElement("span", {
                                className: (0, r.clsx)(`${z}-item-icon`, I.icon),
                                style: M.icon
                            }, t), l && n.createElement("span", null, l))
                        }
                    }
                    return e
                }), [d, z, I.icon, M.icon]),
                [, L] = (0, nH.useOrientation)(m, p),
                A = (0, r.clsx)(i, a, C, I.root, {
                    [`${z}-block`]: c,
                    [`${z}-sm`]: "small" === H,
                    [`${z}-lg`]: "large" === H,
                    [`${z}-vertical`]: L,
                    [`${z}-shape-${h}`]: "round" === h
                }, R, T),
                B = { ...M.root,
                    ...k,
                    ...f
                };
            return n.createElement(nT, { ...y,
                name: g,
                className: A,
                style: B,
                classNames: I,
                styles: M,
                itemRender: (e, t) => {
                    let {
                        item: l
                    } = t;
                    if (!l.tooltip) return e;
                    let r = "object" == typeof l.tooltip ? l.tooltip : {
                        title: l.tooltip
                    };
                    return n.createElement(nP.default, { ...r
                    }, e)
                },
                options: P,
                ref: t,
                prefixCls: z,
                direction: S,
                vertical: L
            })
        }),
        nD = n.default.createContext({}),
        nF = n.default.createContext({});
    var n_ = e.i(656449);
    let nj = e => {
        let {
            prefixCls: t,
            value: l,
            onChange: r
        } = e;
        return n.default.createElement("div", {
            className: `${t}-clear`,
            onClick: () => {
                if (r && l && !l.cleared) {
                    let e = l.toHsb();
                    e.a = 0;
                    let t = (0, n_.generateColor)(e);
                    t.cleared = !0, r(t)
                }
            }
        })
    };
    var nX = e.i(554921);
    let nq = e => {
            let {
                prefixCls: t,
                min: l = 0,
                max: o = 100,
                value: i,
                onChange: a,
                className: s,
                formatter: c
            } = e, d = `${t}-steppers`, [u, f] = (0, n.useState)(0), p = Number.isNaN(i) ? u : i;
            return n.default.createElement(nX.default, {
                className: (0, r.clsx)(d, s),
                min: l,
                max: o,
                value: p,
                formatter: c,
                size: "small",
                onChange: e => {
                    f(e || 0), a ? .(e)
                }
            })
        },
        nV = e => {
            let {
                prefixCls: t,
                value: l,
                onChange: r
            } = e, o = `${t}-alpha-input`, [i, a] = (0, n.useState)(() => (0, n_.generateColor)(l || "#000")), s = l || i;
            return n.default.createElement(nq, {
                value: (0, n_.getColorAlpha)(s),
                prefixCls: t,
                formatter: e => `${e}%`,
                className: o,
                onChange: e => {
                    let t = s.toHsb();
                    t.a = (e || 0) / 100;
                    let n = (0, n_.generateColor)(t);
                    a(n), r ? .(n)
                }
            })
        };
    var nG = e.i(90635);
    let nY = /(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i,
        nU = e => {
            let {
                prefixCls: t,
                value: l,
                onChange: r
            } = e, o = `${t}-hex-input`, [i, a] = (0, n.useState)(() => l ? (0, n$.toHexFormat)(l.toHexString()) : void 0);
            return (0, n.useEffect)(() => {
                l && a((0, n$.toHexFormat)(l.toHexString()))
            }, [l]), n.default.createElement(nG.default, {
                className: o,
                value: i,
                prefix: "#",
                onChange: e => {
                    let t, n = e.target.value;
                    a((0, n$.toHexFormat)(n)), t = (0, n$.toHexFormat)(n, !0), nY.test(`#${t}`) && r ? .((0, n_.generateColor)(n))
                },
                size: "small"
            })
        },
        nK = e => {
            let {
                prefixCls: t,
                value: l,
                onChange: r
            } = e, o = `${t}-hsb-input`, [i, a] = (0, n.useState)(() => (0, n_.generateColor)(l || "#000")), s = l || i, c = (e, t) => {
                let n = s.toHsb();
                n[t] = "h" === t ? e : (e || 0) / 100;
                let l = (0, n_.generateColor)(n);
                a(l), r ? .(l)
            };
            return n.default.createElement("div", {
                className: o
            }, n.default.createElement(nq, {
                max: 360,
                min: 0,
                value: Number(s.toHsb().h),
                prefixCls: t,
                className: o,
                formatter: e => (0, n_.getRoundNumber)(e || 0).toString(),
                onChange: e => c(Number(e), "h")
            }), n.default.createElement(nq, {
                max: 100,
                min: 0,
                value: 100 * Number(s.toHsb().s),
                prefixCls: t,
                className: o,
                formatter: e => `${(0,n_.getRoundNumber)(e||0)}%`,
                onChange: e => c(Number(e), "s")
            }), n.default.createElement(nq, {
                max: 100,
                min: 0,
                value: 100 * Number(s.toHsb().b),
                prefixCls: t,
                className: o,
                formatter: e => `${(0,n_.getRoundNumber)(e||0)}%`,
                onChange: e => c(Number(e), "b")
            }))
        },
        nQ = e => {
            let {
                prefixCls: t,
                value: l,
                onChange: r
            } = e, o = `${t}-rgb-input`, [i, a] = (0, n.useState)(() => (0, n_.generateColor)(l || "#000")), s = l || i, c = (e, t) => {
                let n = s.toRgb();
                n[t] = e || 0;
                let l = (0, n_.generateColor)(n);
                a(l), r ? .(l)
            };
            return n.default.createElement("div", {
                className: o
            }, n.default.createElement(nq, {
                max: 255,
                min: 0,
                value: Number(s.toRgb().r),
                prefixCls: t,
                className: o,
                onChange: e => c(Number(e), "r")
            }), n.default.createElement(nq, {
                max: 255,
                min: 0,
                value: Number(s.toRgb().g),
                prefixCls: t,
                className: o,
                onChange: e => c(Number(e), "g")
            }), n.default.createElement(nq, {
                max: 255,
                min: 0,
                value: Number(s.toRgb().b),
                prefixCls: t,
                className: o,
                onChange: e => c(Number(e), "b")
            }))
        },
        nZ = ["hex", "hsb", "rgb"].map(e => ({
            value: e,
            label: e.toUpperCase()
        })),
        nJ = e => {
            let {
                prefixCls: t,
                format: l,
                value: r,
                disabledAlpha: o,
                onFormatChange: i,
                onChange: a,
                disabledFormat: s
            } = e, [c, d] = (0, eY.useControlledState)("hex", l), u = `${t}-input`, f = (0, n.useMemo)(() => {
                let e = {
                    value: r,
                    prefixCls: t,
                    onChange: a
                };
                switch (c) {
                    case "hsb":
                        return n.default.createElement(nK, { ...e
                        });
                    case "rgb":
                        return n.default.createElement(nQ, { ...e
                        });
                    default:
                        return n.default.createElement(nU, { ...e
                        })
                }
            }, [c, t, r, a]);
            return n.default.createElement("div", {
                className: `${u}-container`
            }, !s && n.default.createElement(eh.default, {
                value: c,
                variant: "borderless",
                getPopupContainer: e => e,
                popupMatchSelectWidth: 68,
                placement: "bottomRight",
                onChange: e => {
                    d(e), i ? .(e)
                },
                className: `${t}-format-select`,
                size: "small",
                options: nZ
            }), n.default.createElement("div", {
                className: u
            }, f), !o && n.default.createElement(nV, {
                prefixCls: t,
                value: r,
                onChange: a
            }))
        };
    e.i(422499);
    var n0 = e.i(641755),
        n1 = e.i(756135),
        n2 = e.i(297590);
    let n3 = e => {
        let {
            prefixCls: t,
            colors: l,
            type: o,
            color: i,
            range: a = !1,
            className: s,
            activeIndex: c,
            onActive: d,
            onDragStart: u,
            onDragChange: f,
            onKeyDelete: p,
            ...m
        } = e, h = { ...m,
            track: !1
        }, g = n.useMemo(() => {
            let e = l.map(e => `${e.color} ${e.percent}%`).join(", ");
            return `linear-gradient(90deg, ${e})`
        }, [l]), v = n.useMemo(() => i && o ? "alpha" === o ? i.toRgbString() : `hsl(${i.toHsb().h}, 100%, 50%)` : null, [i, o]), y = (0, b.useEvent)(u), $ = (0, b.useEvent)(f), x = n.useMemo(() => ({
            onDragStart: y,
            onDragChange: $
        }), []), S = (0, b.useEvent)((e, i) => {
            let {
                onFocus: a,
                style: s,
                className: u,
                onKeyDown: f
            } = e.props, m = { ...s
            };
            return "gradient" === o && (m.background = (0, n_.getGradientPercentColor)(l, i.value)), n.cloneElement(e, {
                onFocus: e => {
                    d ? .(i.index), a ? .(e)
                },
                style: m,
                className: (0, r.clsx)(u, {
                    [`${t}-slider-handle-active`]: c === i.index
                }),
                onKeyDown: e => {
                    ("Delete" === e.key || "Backspace" === e.key) && p && p(i.index), f ? .(e)
                }
            })
        }), C = n.useMemo(() => ({
            direction: "ltr",
            handleRender: S
        }), []);
        return n.createElement(n2.default.Provider, {
            value: C
        }, n.createElement(n0.UnstableContext.Provider, {
            value: x
        }, n.createElement(n1.default, { ...h,
            className: (0, r.clsx)(s, `${t}-slider`),
            tooltip: {
                open: !1
            },
            range: {
                editable: a,
                minCount: 2
            },
            styles: {
                rail: {
                    background: g
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

    function n4(e) {
        return (0, o.default)(e).sort((e, t) => e.percent - t.percent)
    }
    let n8 = n.memo(e => {
            let {
                prefixCls: t,
                mode: l,
                onChange: r,
                onChangeComplete: i,
                onActive: a,
                activeIndex: s,
                onGradientDragging: c,
                colors: d
            } = e, u = n.useMemo(() => d.map(e => ({
                percent: e.percent,
                color: e.color.toRgbString()
            })), [d]), f = n.useMemo(() => u.map(e => e.percent), [u]), p = n.useRef(u);
            return "gradient" !== l ? null : n.createElement(n3, {
                min: 0,
                max: 100,
                prefixCls: t,
                className: `${t}-gradient-slider`,
                colors: u,
                color: null,
                value: f,
                range: !0,
                onChangeComplete: e => {
                    i(new n$.AggregationColor(u)), s >= e.length && a(e.length - 1), c(!1)
                },
                disabled: !1,
                type: "gradient",
                activeIndex: s,
                onActive: a,
                onDragStart: e => {
                    let {
                        rawValues: t,
                        draggingIndex: n,
                        draggingValue: l
                    } = e;
                    if (t.length > u.length) {
                        let e = (0, n_.getGradientPercentColor)(u, l),
                            t = (0, o.default)(u);
                        t.splice(n, 0, {
                            percent: l,
                            color: e
                        }), p.current = t
                    } else p.current = u;
                    c(!0), r(new n$.AggregationColor(n4(p.current)), !0)
                },
                onDragChange: e => {
                    let {
                        deleteIndex: t,
                        draggingIndex: n,
                        draggingValue: l
                    } = e, i = (0, o.default)(p.current); - 1 !== t ? i.splice(t, 1) : (i[n] = { ...i[n],
                        percent: l
                    }, i = n4(i)), r(new n$.AggregationColor(i), !0)
                },
                onKeyDelete: e => {
                    let t = (0, o.default)(u);
                    t.splice(e, 1);
                    let n = new n$.AggregationColor(t);
                    r(n), i(n)
                }
            })
        }),
        n5 = {
            slider: e => {
                let {
                    value: t,
                    onChange: l,
                    onChangeComplete: r
                } = e;
                return n.createElement(n3, { ...e,
                    value: [t],
                    onChange: e => l(e[0]),
                    onChangeComplete: e => r(e[0])
                })
            }
        },
        n6 = () => {
            let e = (0, n.useContext)(nD),
                {
                    mode: t,
                    onModeChange: l,
                    modeOptions: r,
                    prefixCls: i,
                    allowClear: a,
                    value: s,
                    disabledAlpha: c,
                    onChange: d,
                    onClear: u,
                    onChangeComplete: f,
                    activeIndex: p,
                    gradientDragging: m,
                    ...h
                } = e,
                g = n.default.useMemo(() => s.cleared ? [{
                    percent: 0,
                    color: new n$.AggregationColor("")
                }, {
                    percent: 100,
                    color: new n$.AggregationColor("")
                }] : s.getColors(), [s]),
                v = !s.isGradient(),
                [b, y] = n.default.useState(s);
            (0, nC.default)(() => {
                v || y(g[p] ? .color)
            }, [v, g, m, p]);
            let $ = n.default.useMemo(() => v ? s : m ? b : g[p] ? .color, [g, s, p, v, b, m]),
                [x, S] = n.default.useState($),
                [C, k] = (0, nk.useForceUpdate)(),
                w = x ? .equals($) ? $ : x;
            (0, nC.default)(() => {
                S($)
            }, [C, $ ? .toHexString()]);
            let E = (e, n) => {
                    let l = (0, n_.generateColor)(e);
                    if (s.cleared) {
                        let e = l.toRgb();
                        if (e.r || e.g || e.b || !n) l = (0, n_.genAlphaColor)(l);
                        else {
                            let {
                                type: e,
                                value: t = 0
                            } = n;
                            l = new n$.AggregationColor({
                                h: "hue" === e ? t : 0,
                                s: 1,
                                b: 1,
                                a: "alpha" === e ? t / 100 : 1
                            })
                        }
                    }
                    if ("single" === t) return l;
                    let r = (0, o.default)(g);
                    return r[p] = { ...r[p],
                        color: l
                    }, new n$.AggregationColor(r)
                },
                N = null,
                I = r.length > 1;
            return (a || I) && (N = n.default.createElement("div", {
                className: `${i}-operation`
            }, I && n.default.createElement(nW, {
                size: "small",
                options: r,
                value: t,
                onChange: l
            }), n.default.createElement(nj, {
                prefixCls: i,
                value: s,
                onChange: e => {
                    d(e), u ? .()
                },
                ...h
            }))), n.default.createElement(n.default.Fragment, null, N, n.default.createElement(n8, { ...e,
                colors: g
            }), n.default.createElement(nS.default, {
                prefixCls: i,
                value: w ? .toHsb(),
                disabledAlpha: c,
                onChange: (e, t) => {
                    let n;
                    S((n = E(e, t)).isGradient() ? n.getColors()[p].color : n), d(n, !0)
                },
                onChangeComplete: (e, t) => {
                    f(E(e, t)), k()
                },
                components: n5
            }), n.default.createElement(nJ, {
                value: $,
                onChange: e => {
                    d(E(e))
                },
                prefixCls: i,
                disabledAlpha: c,
                ...h
            }))
        };
    var n9 = e.i(500991);
    let n7 = () => {
            let {
                prefixCls: e,
                value: t,
                presets: l,
                onChange: r
            } = (0, n.useContext)(nF);
            return Array.isArray(l) ? n.default.createElement(n9.default, {
                value: t,
                presets: l,
                prefixCls: e,
                onChange: r
            }) : null
        },
        le = e => {
            let {
                prefixCls: t,
                presets: l,
                panelRender: r,
                value: o,
                onChange: i,
                onClear: a,
                allowClear: s,
                disabledAlpha: c,
                mode: d,
                onModeChange: u,
                modeOptions: f,
                onChangeComplete: p,
                activeIndex: m,
                onActive: h,
                format: g,
                onFormatChange: v,
                gradientDragging: b,
                onGradientDragging: y,
                disabledFormat: $
            } = e, x = `${t}-inner`, S = n.default.useMemo(() => ({
                prefixCls: t,
                value: o,
                onChange: i,
                onClear: a,
                allowClear: s,
                disabledAlpha: c,
                mode: d,
                onModeChange: u,
                modeOptions: f,
                onChangeComplete: p,
                activeIndex: m,
                onActive: h,
                format: g,
                onFormatChange: v,
                gradientDragging: b,
                onGradientDragging: y,
                disabledFormat: $
            }), [t, o, i, a, s, c, d, u, f, p, m, h, g, v, b, y, $]), C = n.default.useMemo(() => ({
                prefixCls: t,
                value: o,
                presets: l,
                onChange: i
            }), [t, o, l, i]), k = n.default.createElement("div", {
                className: `${x}-content`
            }, n.default.createElement(n6, null), Array.isArray(l) && n.default.createElement(nx.default, null), n.default.createElement(n7, null));
            return n.default.createElement(nD.Provider, {
                value: S
            }, n.default.createElement(nF.Provider, {
                value: C
            }, n.default.createElement("div", {
                className: x
            }, "function" == typeof r ? r(k, {
                components: {
                    Picker: n6,
                    Presets: n7
                }
            }) : k)))
        };
    var lt = e.i(202599);
    let ln = (0, n.forwardRef)((e, t) => {
            let {
                color: l,
                prefixCls: o,
                open: i,
                disabled: a,
                format: s,
                className: c,
                showText: d,
                activeIndex: u,
                ...f
            } = e, p = `${o}-trigger`, m = `${p}-text`, h = `${m}-cell`, [g] = (0, eU.useLocale)("ColorPicker"), v = n.default.useMemo(() => {
                if (!d) return "";
                if ("function" == typeof d) return d(l);
                if (l.cleared) return g.transparent;
                if (l.isGradient()) return l.getColors().map((e, t) => {
                    let l = -1 !== u && u !== t;
                    return n.default.createElement("span", {
                        key: t,
                        className: (0, r.clsx)(h, l && `${h}-inactive`)
                    }, e.color.toRgbString(), " ", e.percent, "%")
                });
                let e = l.toHexString().toUpperCase(),
                    t = (0, n_.getColorAlpha)(l);
                switch (s) {
                    case "rgb":
                        return l.toRgbString();
                    case "hsb":
                        return l.toHsbString();
                    default:
                        return t < 100 ? `${e.slice(0,7)},${t}%` : e
                }
            }, [l, s, d, u, g.transparent, h]), b = (0, n.useMemo)(() => l.cleared ? n.default.createElement(nj, {
                prefixCls: o
            }) : n.default.createElement(lt.ColorBlock, {
                prefixCls: o,
                color: l.toCssString()
            }), [l, o]);
            return n.default.createElement("div", {
                ref: t,
                className: (0, r.clsx)(p, c, {
                    [`${p}-active`]: i,
                    [`${p}-disabled`]: a
                }),
                ...(0, eH.default)(f)
            }, b, d && n.default.createElement("div", {
                className: m
            }, v))
        }),
        ll = (e, t) => ({
            backgroundImage: `conic-gradient(${t} 25%, transparent 25% 50%, ${t} 50% 75%, transparent 75% 100%)`,
            backgroundSize: `${e} ${e}`
        }),
        lr = (e, t) => {
            let {
                componentCls: n,
                borderRadiusSM: l,
                colorPickerInsetShadow: r,
                lineWidth: o,
                colorFillSecondary: i
            } = e;
            return {
                [`${n}-color-block`]: {
                    position: "relative",
                    borderRadius: l,
                    width: t,
                    height: t,
                    boxShadow: r,
                    flex: "none",
                    ...ll("50%", e.colorFillSecondary),
                    [`${n}-color-block-inner`]: {
                        width: "100%",
                        height: "100%",
                        boxShadow: `inset 0 0 0 ${(0,E.unit)(o)} ${i}`,
                        borderRadius: "inherit"
                    }
                }
            }
        },
        lo = (e, t, n) => ({
            borderInlineEndWidth: e.lineWidth,
            borderColor: t,
            boxShadow: `0 0 0 ${(0,E.unit)(e.controlOutlineWidth)} ${n}`,
            outline: 0
        }),
        li = (e, t, n) => {
            let {
                componentCls: l,
                borderRadiusSM: r,
                lineWidth: o,
                colorSplit: i,
                colorBorder: a,
                red6: s
            } = e;
            return {
                [`${l}-clear`]: {
                    width: t,
                    height: t,
                    borderRadius: r,
                    border: `${(0,E.unit)(o)} solid ${i}`,
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
                        borderColor: a
                    }
                }
            }
        },
        la = (0, c.genStyleHooks)("ColorPicker", e => {
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
                    colorBgElevated: i,
                    colorTextDisabled: a,
                    colorText: s,
                    colorBgContainerDisabled: c,
                    borderRadius: d,
                    marginXS: u,
                    marginSM: f,
                    controlHeight: p,
                    controlHeightSM: m,
                    colorBgTextActive: h,
                    colorPickerPresetColorSize: g,
                    colorPickerPreviewSize: v,
                    lineWidth: b,
                    colorBorder: y,
                    paddingXXS: $,
                    fontSize: x,
                    colorPrimaryHover: S,
                    controlOutline: C
                } = e;
                return [{
                    [n]: {
                        [`${n}-inner`]: {
                            "&-content": {
                                display: "flex",
                                flexDirection: "column",
                                width: l,
                                [`& > ${t}-divider`]: {
                                    margin: `${(0,E.unit)(f)} 0 ${(0,E.unit)(u)}`
                                }
                            },
                            [`${n}-panel`]: { ...(e => {
                                    let {
                                        componentCls: t,
                                        controlHeightLG: n,
                                        borderRadiusSM: l,
                                        colorPickerInsetShadow: r,
                                        marginSM: o,
                                        colorBgElevated: i,
                                        colorFillSecondary: a,
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
                                            border: `${(0,E.unit)(s)} solid ${i}`,
                                            position: "relative",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            boxShadow: `${r}, 0 0 0 1px ${a}`
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
                                    colorPickerHandlerSizeSM: i,
                                    colorPickerSliderHeight: a,
                                    marginSM: s,
                                    marginXS: c
                                } = e, d = e.calc(i).sub(e.calc(o).mul(2).equal()).equal(), u = e.calc(i).add(e.calc(o).mul(2).equal()).equal(), f = {
                                    "&:after": {
                                        transform: "scale(1)",
                                        boxShadow: `${n}, 0 0 0 1px ${e.colorPrimaryActive}`
                                    }
                                };
                                return {
                                    [`${t}-slider`]: [ll((0, E.unit)(a), e.colorFillSecondary), {
                                        margin: 0,
                                        padding: 0,
                                        height: a,
                                        borderRadius: e.calc(a).div(2).equal(),
                                        "&-rail": {
                                            height: a,
                                            borderRadius: e.calc(a).div(2).equal(),
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
                                                width: i,
                                                height: i,
                                                border: `${(0,E.unit)(o)} solid ${l}`,
                                                boxShadow: `${n}, 0 0 0 1px ${r}`,
                                                outline: "none",
                                                insetInlineStart: e.calc(o).mul(-1).equal(),
                                                top: e.calc(o).mul(-1).equal(),
                                                background: "transparent",
                                                transition: "none"
                                            },
                                            "&:focus": f
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
                                            "&-active, &:focus": f
                                        }
                                    }
                                }
                            })(e),
                            ...lr(e, v),
                            ...(e => {
                                let {
                                    componentCls: t,
                                    antCls: n,
                                    fontSizeSM: l,
                                    lineHeightSM: r,
                                    colorPickerAlphaInputWidth: o,
                                    marginXXS: i,
                                    paddingXXS: a,
                                    controlHeightSM: s,
                                    marginXS: c,
                                    fontSizeIcon: d,
                                    paddingXS: u,
                                    colorTextPlaceholder: f,
                                    colorPickerInputNumberHandleWidth: p,
                                    lineWidth: m
                                } = e;
                                return {
                                    [`${t}-input-container`]: {
                                        display: "flex",
                                        [`${t}-steppers${n}-input-number`]: {
                                            fontSize: l,
                                            lineHeight: r,
                                            padding: 0,
                                            [`${n}-input-number-input`]: {
                                                paddingInlineStart: a,
                                                paddingInlineEnd: 0
                                            },
                                            [`${n}-input-number-handler-wrap`]: {
                                                width: p
                                            }
                                        },
                                        [`${t}-steppers${t}-alpha-input`]: {
                                            flex: `0 0 ${(0,E.unit)(o)}`,
                                            marginInlineStart: i
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
                                                    paddingInlineEnd: e.calc(d).add(i).equal(),
                                                    fontSize: l,
                                                    lineHeight: (0, E.unit)(s)
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
                                            gap: i,
                                            alignItems: "center",
                                            flex: 1,
                                            width: 0,
                                            [`${t}-hsb-input,${t}-rgb-input`]: {
                                                height: s,
                                                display: "flex",
                                                gap: i,
                                                alignItems: "center"
                                            },
                                            [`${t}-steppers`]: {
                                                flex: 1
                                            },
                                            [`${t}-hex-input${n}-input-affix-wrapper`]: {
                                                flex: 1,
                                                padding: `0 ${(0,E.unit)(u)}`,
                                                [`${n}-input`]: {
                                                    fontSize: l,
                                                    textTransform: "uppercase",
                                                    lineHeight: (0, E.unit)(e.calc(s).sub(e.calc(m).mul(2)).equal())
                                                },
                                                [`${n}-input-prefix`]: {
                                                    color: f
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
                                    fontSizeSM: i,
                                    colorText: a,
                                    lineHeightSM: s,
                                    lineWidth: c,
                                    borderRadius: d,
                                    colorFill: u,
                                    colorWhite: f,
                                    marginXXS: p,
                                    paddingXS: m,
                                    fontHeightSM: h
                                } = e;
                                return {
                                    [`${t}-presets`]: {
                                        [`${n}-collapse-item > ${n}-collapse-header`]: {
                                            padding: 0,
                                            [`${n}-collapse-expand-icon`]: {
                                                height: h,
                                                color: l,
                                                paddingInlineEnd: r
                                            }
                                        },
                                        [`${n}-collapse`]: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: p
                                        },
                                        [`${n}-collapse-item > ${n}-collapse-panel > ${n}-collapse-body`]: {
                                            padding: `${(0,E.unit)(m)} 0`
                                        },
                                        "&-label": {
                                            fontSize: i,
                                            color: a,
                                            lineHeight: s
                                        },
                                        "&-items": {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: e.calc(p).mul(1.5).equal(),
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
                                                    border: `${(0,E.unit)(c)} solid transparent`,
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
                                                    border: `${(0,E.unit)(e.lineWidthBold)} solid ${e.colorWhite}`,
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
                                                        borderColor: f,
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
                                            fontSize: i,
                                            color: l
                                        }
                                    }
                                }
                            })(e),
                            ...li(e, g, {
                                marginInlineStart: "auto"
                            }),
                            [`${n}-operation`]: {
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: u
                            }
                        },
                        "&-trigger": {
                            minWidth: p,
                            minHeight: p,
                            borderRadius: d,
                            border: `${(0,E.unit)(b)} solid ${y}`,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            transition: `all ${o}`,
                            background: i,
                            padding: e.calc($).sub(b).equal(),
                            [`${n}-trigger-text`]: {
                                marginInlineStart: u,
                                marginInlineEnd: e.calc(u).sub(e.calc($).sub(b)).equal(),
                                fontSize: x,
                                color: s,
                                alignSelf: "center",
                                "&-cell": {
                                    "&:not(:last-child):after": {
                                        content: '", "'
                                    },
                                    "&-inactive": {
                                        color: a
                                    }
                                }
                            },
                            "&:hover": {
                                borderColor: S
                            },
                            [`&${n}-trigger-active`]: { ...lo(e, r, C)
                            },
                            "&-disabled": {
                                color: a,
                                background: c,
                                cursor: "not-allowed",
                                "&:hover": {
                                    borderColor: h
                                },
                                [`${n}-trigger-text`]: {
                                    color: a
                                }
                            },
                            ...li(e, m),
                            ...lr(e, m),
                            ...(e => {
                                let {
                                    componentCls: t,
                                    colorError: n,
                                    colorWarning: l,
                                    colorErrorHover: r,
                                    colorWarningHover: o,
                                    colorErrorOutline: i,
                                    colorWarningOutline: a
                                } = e;
                                return {
                                    [`&${t}-status-error`]: {
                                        borderColor: n,
                                        "&:hover": {
                                            borderColor: r
                                        },
                                        [`&${t}-trigger-active`]: { ...lo(e, n, i)
                                        }
                                    },
                                    [`&${t}-status-warning`]: {
                                        borderColor: l,
                                        "&:hover": {
                                            borderColor: o
                                        },
                                        [`&${t}-trigger-active`]: { ...lo(e, l, a)
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
                                    borderRadius: i,
                                    borderRadiusSM: a,
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
                                            borderRadius: i
                                        },
                                        [`${t}-trigger-text`]: {
                                            fontSize: d
                                        }
                                    },
                                    [`&${t}-sm`]: {
                                        minWidth: l,
                                        minHeight: l,
                                        borderRadius: a,
                                        [`${t}-color-block, ${t}-clear`]: {
                                            width: o,
                                            height: o,
                                            borderRadius: s
                                        },
                                        [`${t}-trigger-text`]: {
                                            lineHeight: (0, E.unit)(o)
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
                }, (0, nr.genCompactItemStyle)(e, {
                    focusElCls: `${n}-trigger-active`
                })]
            })((0, I.mergeToken)(e, {
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
        ls = e => {
            let {
                mode: t,
                value: l,
                defaultValue: o,
                format: i,
                defaultFormat: a,
                allowClear: c = !1,
                presets: d,
                children: u,
                trigger: f = "click",
                open: p,
                disabled: m,
                placement: h = "bottomLeft",
                arrow: g = !0,
                panelRender: v,
                showText: y,
                style: $,
                className: S,
                size: k,
                rootClassName: w,
                prefixCls: E,
                styles: N,
                classNames: I,
                disabledAlpha: M = !1,
                onFormatChange: z,
                onChange: R,
                onClear: T,
                onOpenChange: H,
                onChangeComplete: P,
                getPopupContainer: L,
                autoAdjustOverflow: A = !0,
                destroyTooltipOnHide: B,
                destroyOnHidden: O,
                disabledFormat: W,
                ...D
            } = e, {
                getPrefixCls: F,
                direction: _,
                className: j,
                style: X,
                classNames: q,
                styles: V
            } = (0, s.useComponentConfig)("colorPicker"), G = (0, n.useContext)(t2.default), Y = m ? ? G, U = F("color-picker", E), {
                compactSize: K,
                compactItemClassnames: Q
            } = (0, t9.useCompactItemContext)(U, _), Z = (0, tn.default)(e => k ? ? K ? ? e), J = { ...e,
                trigger: f,
                allowClear: c,
                autoAdjustOverflow: A,
                disabledAlpha: M,
                arrow: g,
                placement: h,
                disabled: Y,
                size: Z
            }, [ee, et] = (0, x.useMergeSemantic)([q, I], [V, N], {
                props: J
            }, {
                popup: {
                    _default: "root"
                }
            }), [en, el] = (0, eY.useControlledState)(!1, p), er = !Y && en, [eo, ei] = (0, eY.useControlledState)(a, i), [ea, es, ec, ed, eu] = function(e, t, l) {
                let [r] = (0, eU.useLocale)("ColorPicker"), [o, i] = (0, eY.useControlledState)(e, t), [a, s] = n.useState("single"), [c, d] = n.useMemo(() => {
                    let e = (Array.isArray(l) ? l : [l]).filter(e => e);
                    e.length || e.push("single");
                    let t = new Set(e),
                        n = [],
                        o = (e, l) => {
                            t.has(e) && n.push({
                                label: l,
                                value: e
                            })
                        };
                    return o("single", r.singleColor), o("gradient", r.gradientColor), [n, t]
                }, [l, r.singleColor, r.gradientColor]), [u, f] = n.useState(null), p = (0, b.useEvent)(e => {
                    f(e), i(e)
                }), m = n.useMemo(() => {
                    let e = (0, n_.generateColor)(o || "");
                    return e.equals(u) ? u : e
                }, [o, u]), h = n.useMemo(() => d.has(a) ? a : c[0] ? .value, [d, a, c]);
                return n.useEffect(() => {
                    s(m.isGradient() ? "gradient" : "single")
                }, [m]), [m, p, h, s, c]
            }(o, l, t), ef = (0, n.useMemo)(() => 100 > (0, n_.getColorAlpha)(ea), [ea]), [ep, em] = n.default.useState(null), eh = e => {
                if (P) {
                    let t = (0, n_.generateColor)(e);
                    M && ef && (t = (0, n_.genAlphaColor)(e)), P(t)
                }
            }, eg = (e, t) => {
                let n = (0, n_.generateColor)(e);
                M && ef && (n = (0, n_.genAlphaColor)(n)), es(n), em(null), R && R(n, n.toCssString()), t || eh(n)
            }, [ev, eb] = n.default.useState(0), [ey, e$] = n.default.useState(!1), {
                status: ex
            } = n.default.useContext(eK.FormItemInputContext), eS = (0, C.default)(U), [eC, ek] = la(U, eS), ew = {
                [`${U}-rtl`]: _
            }, eE = (0, r.clsx)(ee.root, w, ek, eS, ew), eN = (0, r.clsx)((0, t0.getStatusClassNames)(U, ex), {
                [`${U}-sm`]: "small" === Z,
                [`${U}-lg`]: "large" === Z
            }, Q, j, eE, S, eC), eI = (0, r.clsx)(U, eE, ee.popup ? .root), eM = { ...et.root,
                ...X,
                ...$
            };
            return n.default.createElement(ny.default, {
                classNames: {
                    root: eI
                },
                styles: {
                    root: et.popup ? .root,
                    container: N ? .popupOverlayInner
                },
                onOpenChange: e => {
                    e && Y || (el(e), H ? .(e))
                },
                content: n.default.createElement(nb.default, {
                    form: !0
                }, n.default.createElement(le, {
                    mode: ec,
                    onModeChange: e => {
                        if (ed(e), "single" === e && ea.isGradient()) eb(0), eg(new n$.AggregationColor(ea.getColors()[0].color)), em(ea);
                        else if ("gradient" === e && !ea.isGradient()) {
                            let e = ef ? (0, n_.genAlphaColor)(ea) : ea;
                            eg(new n$.AggregationColor(ep || [{
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
                    value: ea,
                    allowClear: c,
                    disabled: Y,
                    disabledAlpha: M,
                    presets: d,
                    panelRender: v,
                    format: eo,
                    onFormatChange: e => {
                        ei(e), eo !== e && z ? .(e)
                    },
                    onChange: eg,
                    onChangeComplete: eh,
                    onClear: T,
                    activeIndex: ev,
                    onActive: eb,
                    gradientDragging: ey,
                    onGradientDragging: e$,
                    disabledFormat: W
                })),
                ...{
                    open: er,
                    trigger: f,
                    placement: h,
                    arrow: g,
                    rootClassName: w,
                    getPopupContainer: L,
                    autoAdjustOverflow: A,
                    destroyOnHidden: O ? ? !!B
                }
            }, u || n.default.createElement(ln, {
                activeIndex: er ? ev : -1,
                open: er,
                className: eN,
                style: eM,
                prefixCls: U,
                disabled: Y,
                showText: y,
                format: eo,
                ...D,
                color: ea
            }))
        },
        lc = (0, em.default)(ls, void 0, e => ({ ...e,
            placement: "bottom",
            autoAdjustOverflow: !1
        }), "color-picker", e => e);
    ls._InternalPanelDoNotUseOrYouWillBeFired = lc;
    var ld = e.i(609587),
        lu = e.i(494489),
        lf = e.i(389254),
        lp = e.i(638145),
        lm = e.i(21539),
        lh = e.i(616303),
        lg = e.i(908286);
    let lv = ["wrap", "nowrap", "wrap-reverse"],
        lb = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"],
        ly = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"],
        l$ = (0, c.genStyleHooks)("Flex", e => {
            let {
                paddingXS: t,
                padding: n,
                paddingLG: l
            } = e, r = (0, I.mergeToken)(e, {
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
                return lv.forEach(e => {
                    n[`${t}-wrap-${e}`] = {
                        flexWrap: e
                    }
                }), n
            })(r), (e => {
                let {
                    componentCls: t
                } = e, n = {};
                return ly.forEach(e => {
                    n[`${t}-align-${e}`] = {
                        alignItems: e
                    }
                }), n
            })(r), (e => {
                let {
                    componentCls: t
                } = e, n = {};
                return lb.forEach(e => {
                    n[`${t}-justify-${e}`] = {
                        justifyContent: e
                    }
                }), n
            })(r)]
        }, () => ({}), {
            resetStyle: !1
        }),
        lx = n.default.forwardRef((e, t) => {
            var l;
            let o, i, a, {
                    prefixCls: c,
                    rootClassName: d,
                    className: u,
                    style: f,
                    flex: p,
                    gap: m,
                    vertical: h,
                    orientation: g,
                    component: v = "div",
                    children: b,
                    ...y
                } = e,
                {
                    flex: $,
                    direction: x,
                    getPrefixCls: S
                } = n.default.useContext(s.ConfigContext),
                C = S("flex", c),
                [k, w] = l$(C),
                [, E] = (0, nH.useOrientation)(g, h ? ? $ ? .vertical),
                N = (0, r.clsx)(u, d, $ ? .className, C, k, w, (l = { ...e,
                    vertical: E
                }, (0, r.clsx)({ ...(o = !0 === l.wrap ? "wrap" : l.wrap, {
                        [`${C}-wrap-${o}`]: o && lv.includes(o)
                    }),
                    ...(i = {}, ly.forEach(e => {
                        i[`${C}-align-${e}`] = l.align === e
                    }), i[`${C}-align-stretch`] = !l.align && !!l.vertical, i),
                    ...(a = {}, lb.forEach(e => {
                        a[`${C}-justify-${e}`] = l.justify === e
                    }), a)
                })), {
                    [`${C}-rtl`]: "rtl" === x,
                    [`${C}-gap-${m}`]: (0, lg.isPresetSize)(m),
                    [`${C}-vertical`]: E
                }),
                I = { ...$ ? .style,
                    ...f
                };
            return (0, eL.default)(p) && (I.flex = p), (0, eL.default)(m) && !(0, lg.isPresetSize)(m) && (I.gap = m), n.default.createElement(v, {
                ref: t,
                className: N,
                style: I,
                ...(0, ep.omit)(y, ["justify", "wrap", "align"])
            }, b)
        }),
        lS = n.default.createContext(null),
        lC = {
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

    function lk() {
        return (lk = Object.assign.bind()).apply(this, arguments)
    }
    let lw = n.forwardRef((e, t) => n.createElement(ek.default, lk({}, e, {
        ref: t,
        icon: lC
    })));
    var lE = e.i(995144),
        lN = e.i(334596),
        lI = e.i(709656);
    let lM = (0, c.genStyleHooks)("FloatButton", e => {
            let {
                controlHeightLG: t,
                marginXXL: n,
                marginLG: l,
                fontSizeIcon: r,
                calc: o
            } = e, i = (0, I.mergeToken)(e, {
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
                } = e, [i, a] = (0, c.genCssVar)(r, "float-btn"), s = `${t}-badge`, d = Math.SQRT2, u = (d - 1) / d, f = e.calc(e.borderRadius).mul(u).equal(), p = e.calc(e.controlHeight).div(2).mul(u).equal();
                return {
                    [t]: [{
                        [i("size")]: (0, E.unit)(n)
                    }, {
                        flexDirection: "column",
                        margin: 0,
                        padding: `${(0,E.unit)(e.paddingXXS)} 0`,
                        width: a("size"),
                        minHeight: a("size"),
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
                        [s]: {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: 0,
                            [`&:not(${s}-dot)`]: {
                                transform: "translate(50%, -50%)"
                            }
                        },
                        [`&-rtl ${s}:not(${s}-dot)`]: {
                            transform: "translate(-50%, -50%)"
                        },
                        "&-square": {
                            [`${s}-dot`]: {
                                marginTop: f,
                                marginInlineEnd: f
                            }
                        },
                        "&-circle": {
                            [s]: {
                                marginTop: p,
                                marginInlineEnd: p
                            }
                        }
                    }]
                }
            })(i), (e => {
                let {
                    componentCls: t,
                    antCls: n,
                    floatButtonSize: l,
                    padding: r
                } = e, o = `${t}-group`, i = `${o}-list`, [a, s] = (0, c.genCssVar)(n, "float-btn");
                return {
                    [o]: [{
                        [a("list-transform-start")]: `translate(0,${(0,E.unit)(l)})`,
                        [a("list-trigger-offset")]: `calc(${(0,E.unit)(l)} + ${(0,E.unit)(r)})`
                    }, { ...(0, N.resetComponent)(e),
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
                        [`&:not(${o}-individual) ${i}`]: {
                            boxShadow: e.boxShadowSecondary
                        },
                        [`&${o}-individual ${i}`]: {
                            gap: r
                        },
                        [`&-menu-mode ${i}`]: {
                            position: "absolute"
                        },
                        [i]: {
                            borderRadius: e.borderRadiusLG,
                            "&-motion": {
                                transition: `all ${e.motionDurationSlow}`,
                                "&-enter, &-appear": {
                                    opacity: 0,
                                    transform: s("list-transform-start"),
                                    "&-active": {
                                        opacity: 1,
                                        transform: "translate(0, 0)"
                                    }
                                },
                                "&-leave": {
                                    "&-active": {
                                        opacity: 0,
                                        transform: s("list-transform-start")
                                    }
                                }
                            }
                        },
                        "&-top": {
                            [i]: {
                                bottom: s("list-trigger-offset")
                            }
                        },
                        "&-bottom": {
                            [i]: {
                                [a("list-transform-start")]: `translate(0, calc(${(0,E.unit)(l)} * -1))`,
                                top: s("list-trigger-offset")
                            }
                        },
                        "&-left": {
                            [i]: {
                                [a("list-transform-start")]: `translate(${(0,E.unit)(l)}, 0)`,
                                right: s("list-trigger-offset")
                            }
                        },
                        "&-right": {
                            [i]: {
                                [a("list-transform-start")]: `translate(calc(${(0,E.unit)(l)} * -1), 0)`,
                                left: s("list-trigger-offset")
                            }
                        }
                    }]
                }
            })(i), (0, lI.initFadeMotion)(e)]
        }, () => ({}), {
            order: -998
        }),
        lz = "float-btn",
        lR = n.default.forwardRef((e, t) => {
            let {
                prefixCls: l,
                className: o,
                rootClassName: i,
                style: a,
                type: c = "default",
                shape: d = "circle",
                icon: u,
                description: f,
                content: p,
                tooltip: m,
                badge: h = {},
                classNames: g,
                styles: v,
                ...b
            } = e, {
                getPrefixCls: y,
                direction: $
            } = n.default.useContext(s.ConfigContext), S = n.default.useContext(lS), k = y(lz, l), w = (0, C.default)(k), {
                shape: E,
                individual: N,
                classNames: I,
                styles: M
            } = S || {}, z = E || d, R = p ? ? f, T = { ...e,
                type: c,
                shape: z
            }, [H, P] = lM(k, w), L = n.default.useMemo(() => ({
                icon: `${k}-icon`,
                content: `${k}-content`
            }), [k]), [A, B] = (0, x.useMergeSemantic)([L, I, g], [M, v], {
                props: T
            }), O = R || u ? u : n.default.createElement(lw, null), [W] = (0, U.useZIndex)("FloatButton", a ? .zIndex), D = { ...a,
                zIndex: W
            }, F = (0, ep.omit)(h, ["title", "children", "status", "text"]), _ = "badge" in e && n.default.createElement(eR.default, { ...F,
                className: (0, r.clsx)(F.className, `${k}-badge`, {
                    [`${k}-badge-dot`]: F.dot
                })
            }), j = (0, lE.default)(m), X = n.default.createElement(lN.default, { ...b,
                ref: t,
                className: (0, r.clsx)(H, P, w, k, o, i, `${k}-${c}`, `${k}-${z}`, {
                    [`${k}-rtl`]: "rtl" === $,
                    [`${k}-individual`]: N ? ? !0,
                    [`${k}-icon-only`]: !R
                }),
                classNames: A,
                styles: B,
                style: D,
                shape: z,
                type: c,
                size: "large",
                icon: O,
                _skipSemantic: !0
            }, R, _);
            return j && (X = n.default.createElement(nP.default, { ...j
            }, X)), X
        }),
        lT = n.default.createElement(eE, null),
        lH = n.default.forwardRef((e, t) => {
            let {
                backTopIcon: l
            } = (0, s.useComponentConfig)("floatButton"), {
                prefixCls: o,
                className: i,
                type: c = "default",
                shape: d = "circle",
                visibilityHeight: u = 400,
                icon: f,
                target: p,
                onClick: m,
                duration: h = 450,
                ...g
            } = e, [v, b] = (0, n.useState)(0 === u), y = n.default.useRef(null);
            n.default.useImperativeHandle(t, () => ({
                nativeElement: y.current
            }));
            let x = () => y.current ? .ownerDocument || window,
                C = a(e => {
                    b((0, $.default)(e.target) >= u)
                });
            (0, n.useEffect)(() => {
                let e = (p || x)();
                return C({
                    target: e
                }), e ? .addEventListener("scroll", C), () => {
                    C.cancel(), e ? .removeEventListener("scroll", C)
                }
            }, [p]);
            let k = e => {
                    (0, S.default)(0, {
                        getContainer: p || x,
                        duration: h
                    }), m ? .(e)
                },
                {
                    getPrefixCls: w
                } = (0, n.useContext)(s.ConfigContext),
                E = w(lz, o),
                N = w(),
                I = {
                    prefixCls: E,
                    icon: f ? ? l ? ? lT,
                    type: c,
                    shape: (0, n.useContext)(lS) ? .shape || d,
                    ...g
                };
            return n.default.createElement(eN.default, {
                visible: v,
                motionName: `${N}-fade`
            }, (e, t) => {
                let {
                    className: l
                } = e;
                return n.default.createElement(lR, {
                    ref: (0, nE.composeRef)(y, t),
                    ...I,
                    onClick: k,
                    className: (0, r.clsx)(i, l)
                })
            })
        });
    var lP = e.i(38243);
    let lL = e => {
            let {
                prefixCls: t,
                className: l,
                style: o,
                classNames: i,
                styles: a,
                rootClassName: c,
                shape: d = "circle",
                type: u = "default",
                placement: f,
                icon: p = n.default.createElement(lw, null),
                closeIcon: m,
                trigger: h,
                children: g,
                onOpenChange: v,
                open: y,
                onClick: $,
                ...S
            } = e, {
                direction: k,
                getPrefixCls: w,
                closeIcon: E,
                classNames: N,
                styles: I,
                className: M,
                style: z
            } = (0, s.useComponentConfig)("floatButtonGroup"), R = m ? ? E ? ? n.default.createElement(j.default, null), T = w(lz, t), H = (0, C.default)(T), [P, L] = lM(T, H), A = `${T}-group`, B = h && ["click", "hover"].includes(h), [O] = (0, U.useZIndex)("FloatButton", o ? .zIndex), W = n.default.useRef(null), D = ["top", "left", "right", "bottom"].includes(f) ? f : "top", [F, _] = (0, eY.useControlledState)(!1, y), X = "hover" === h, q = "click" === h, V = (0, b.useEvent)(e => {
                F !== e && (_(e), v ? .(e))
            });
            n.default.useEffect(() => {
                if (q) {
                    let e = e => {
                        W.current ? .contains(e.target) || V(!1)
                    };
                    return document.addEventListener("click", e, {
                        capture: !0
                    }), () => document.removeEventListener("click", e, {
                        capture: !0
                    })
                }
            }, [q]);
            let G = "circle" === d,
                Y = { ...e,
                    shape: d,
                    type: u,
                    placement: D
                },
                [K, Q] = (0, x.useMergeSemantic)([N, i], [I, a], {
                    props: Y
                }),
                Z = n.default.useMemo(() => ({
                    shape: d,
                    individual: G,
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
                }), [d, G, K, Q]),
                J = n.default.useMemo(() => ({ ...Z,
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
                    let t = "top" === D || "bottom" === D,
                        l = {
                            className: (0, r.clsx)(ee, K.list, e),
                            style: Q.list
                        };
                    return G ? n.default.createElement(lx, {
                        vertical: t,
                        ...l
                    }, g) : n.default.createElement(lP.default.Compact, {
                        vertical: t,
                        ...l
                    }, g)
                };
            return n.default.createElement(lS.Provider, {
                value: Z
            }, n.default.createElement("div", {
                className: (0, r.clsx)(A, P, L, H, M, K.root, l, c, {
                    [`${A}-rtl`]: "rtl" === k,
                    [`${A}-individual`]: G,
                    [`${A}-${D}`]: B,
                    [`${A}-menu-mode`]: B
                }),
                style: { ...z,
                    zIndex: O,
                    ...Q.root,
                    ...o
                },
                ref: W,
                onMouseEnter: () => {
                    X && V(!0)
                },
                onMouseLeave: () => {
                    X && V(!1)
                }
            }, B ? n.default.createElement(eN.default, {
                visible: F,
                motionName: `${ee}-motion`
            }, e => {
                let {
                    className: t
                } = e;
                return et(t)
            }) : et(), B && n.default.createElement(lS.Provider, {
                value: J
            }, n.default.createElement(lR, {
                type: u,
                icon: F ? R : p,
                "aria-label": e["aria-label"],
                className: `${A}-trigger`,
                onClick: e => {
                    q && V(!F), $ ? .(e)
                },
                ...S
            }))))
        },
        lA = e => {
            let {
                backTop: t,
                ...l
            } = e;
            return t ? n.createElement(lH, { ...l,
                visibilityHeight: 0
            }) : n.createElement(lR, { ...l
            })
        };
    lR.BackTop = lH, lR.Group = lL, lR._InternalPanelDoNotUseOrYouWillBeFired = e => {
        let {
            className: t,
            items: l,
            classNames: o,
            styles: i,
            prefixCls: a,
            ...c
        } = e, {
            getPrefixCls: d
        } = n.useContext(s.ConfigContext), u = d(lz, a), f = `${u}-pure`;
        return l ? n.createElement(lL, {
            className: (0, r.clsx)(t, f),
            classNames: o,
            styles: i,
            ...c
        }, l.map((e, t) => n.createElement(lA, {
            key: t,
            ...e
        }))) : n.createElement(lA, {
            className: (0, r.clsx)(t, f),
            classNames: o,
            styles: i,
            ...c
        })
    };
    var lB = e.i(648601);
    e.i(131757);
    var lO = e.i(150073);
    e.i(401188);
    var lW = e.i(839598),
        lD = e.i(644099),
        lF = e.i(704914),
        l_ = e.i(290224),
        lj = e.i(251224);
    let lX = e => {
            let {
                suffixCls: t,
                tagName: l,
                displayName: r
            } = e;
            return e => n.forwardRef((r, o) => n.createElement(e, {
                ref: o,
                suffixCls: t,
                tagName: l,
                ...r
            }))
        },
        lq = n.forwardRef((e, t) => {
            let {
                prefixCls: l,
                suffixCls: o,
                className: i,
                tagName: a,
                ...c
            } = e, {
                getPrefixCls: d
            } = n.useContext(s.ConfigContext), u = d("layout", l), [f] = (0, lj.default)(u), p = o ? `${u}-${o}` : u;
            return n.createElement(a, {
                className: (0, r.clsx)(l || p, i, f),
                ref: t,
                ...c
            })
        }),
        lV = n.forwardRef((e, t) => {
            let {
                direction: l
            } = n.useContext(s.ConfigContext), [i, a] = n.useState([]), {
                prefixCls: c,
                className: d,
                rootClassName: u,
                children: f,
                hasSider: p,
                tagName: m,
                style: h,
                ...g
            } = e, v = (0, ep.omit)(g, ["suffixCls"]), {
                getPrefixCls: b,
                className: y,
                style: $
            } = (0, s.useComponentConfig)("layout"), x = b("layout", c), S = "boolean" == typeof p ? p : !!i.length || (0, eg.toArray)(f).some(e => e.type === l_.default), [C, k] = (0, lj.default)(x), w = (0, r.clsx)(x, {
                [`${x}-has-sider`]: S,
                [`${x}-rtl`]: "rtl" === l
            }, y, d, u, C, k), E = n.useMemo(() => ({
                siderHook: {
                    addSider: e => {
                        a(t => [].concat((0, o.default)(t), [e]))
                    },
                    removeSider: e => {
                        a(t => t.filter(t => t !== e))
                    }
                }
            }), []);
            return n.createElement(lF.LayoutContext.Provider, {
                value: E
            }, n.createElement(m, {
                ref: t,
                className: w,
                style: { ...$,
                    ...h
                },
                ...v
            }, f))
        }),
        lG = lX({
            tagName: "div",
            displayName: "Layout"
        })(lV),
        lY = lX({
            suffixCls: "header",
            tagName: "header",
            displayName: "Header"
        })(lq),
        lU = lX({
            suffixCls: "footer",
            tagName: "footer",
            displayName: "Footer"
        })(lq),
        lK = lX({
            suffixCls: "content",
            tagName: "main",
            displayName: "Content"
        })(lq);
    lG.Header = lY, lG.Footer = lU, lG.Content = lK, lG.Sider = l_.default, lG._InternalSiderContext = l_.SiderContext;
    var lQ = e.i(502341),
        lZ = e.i(855297),
        lJ = e.i(118696),
        l0 = e.i(908206),
        l1 = e.i(39874);
    let l2 = n.default.forwardRef((e, t) => {
            let {
                item: o,
                style: i,
                prefixCls: a,
                itemRender: s,
                className: c,
                index: d,
                column: u,
                onResize: f
            } = e, p = `${a}-item`, m = (0, n.useMemo)(() => o.children ? ? s ? .({ ...o,
                index: d,
                column: u
            }), [o, s, u, d]), h = n.default.createElement("div", {
                ref: t,
                style: i,
                className: (0, r.clsx)(p, c)
            }, m);
            return f && (h = n.default.createElement(l.default, {
                onResize: f
            }, h)), h
        }),
        l3 = (0, c.genStyleHooks)("Masonry", e => [(e => {
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
        l4 = n.forwardRef((e, t) => {
            var a;
            let d, u, f, {
                    rootClassName: p,
                    className: m,
                    style: h,
                    classNames: g,
                    styles: v,
                    columns: y,
                    prefixCls: $,
                    gutter: S = 0,
                    items: k,
                    itemRender: w,
                    onLayoutChange: E,
                    fresh: N
                } = e,
                {
                    getPrefixCls: I,
                    direction: M,
                    className: z,
                    style: R,
                    classNames: T,
                    styles: H
                } = (0, s.useComponentConfig)("masonry"),
                P = I("masonry", $),
                L = I(),
                A = (0, C.default)(P),
                [B, O] = l3(P, A),
                [W, D] = (0, c.genCssVar)(L, "masonry"),
                F = n.useRef(null);
            n.useImperativeHandle(t, () => ({
                nativeElement: F.current
            }));
            let [_, j] = (null === (d = n.useRef(null)).current && (d.current = new Map), [(e, t) => {
                d.current.set(e, t)
            }, e => d.current.get(e)]), [X, q] = n.useState([]);
            n.useEffect(() => {
                q(k || [])
            }, [k]);
            let V = (0, lO.default)(),
                [G = 0, Y = G] = (0, l1.default)(S, V),
                U = n.useMemo(() => {
                    if (!y) return 3;
                    if ("number" == typeof y) return y;
                    let e = l0.responsiveArray.find(e => V[e] && void 0 !== y[e]);
                    return e ? y[e] : y.xs ? ? 1
                }, [y, V]),
                K = { ...e,
                    columns: U
                },
                [Q, Z] = (0, x.useMergeSemantic)([T, g], [H, v], {
                    props: K
                }),
                [J, ee] = n.useState([]),
                et = (a = () => {
                    let e = X.map((e, t) => {
                        let n = e.key ? ? t,
                            l = j(n),
                            r = l ? .getBoundingClientRect();
                        return [n, r ? r.height : 0, e.column]
                    });
                    ee(t => (0, lJ.default)(t, e) ? t : e)
                }, u = n.useRef(0), f = () => {
                    i.default.cancel(u.current)
                }, n.useEffect(() => f, []), (0, b.useEvent)(() => {
                    f(), u.current = (0, i.default)(a)
                })),
                [en, el] = function(e, t, l) {
                    let [r, i] = n.useMemo(() => {
                        let n = Array(t).fill(0),
                            r = new Map;
                        for (let i = 0; i < e.length; i += 1) {
                            let [a, s, c] = e[i], d = c ? ? n.indexOf(Math.min.apply(Math, (0, o.default)(n))), u = n[d = Math.min(d, t - 1)];
                            r.set(a, {
                                column: d,
                                top: u
                            }), n[d] += s + l
                        }
                        return [r, Math.max(0, Math.max.apply(Math, (0, o.default)(n)) - l)]
                    }, [t, e, l]);
                    return [r, i]
                }(J, U, Y),
                er = n.useMemo(() => X.map((e, t) => {
                    let n = e.key ? ? t;
                    return {
                        item: e,
                        itemIndex: t,
                        itemKey: n,
                        key: n,
                        position: en.get(n)
                    }
                }), [X, en]);
            n.useEffect(() => {
                et()
            }, [X, U]);
            let [eo, ei] = n.useState([]);
            return (0, nC.default)(() => {
                E && er.every(e => {
                    let {
                        position: t
                    } = e;
                    return t
                }) && ei(e => {
                    let t = er.map(e => {
                        let {
                            item: t,
                            position: n
                        } = e;
                        return [t, n.column]
                    });
                    return (0, lJ.default)(e, t) ? e : t
                })
            }, [er]), (0, nC.default)(() => {
                E && k && k.length === eo.length && E(eo.map(e => {
                    let [t, n] = e;
                    return { ...t,
                        column: n
                    }
                }))
            }, [eo]), n.createElement(l.default, {
                onResize: et
            }, n.createElement("div", {
                ref: F,
                className: (0, r.clsx)(P, z, Q.root, p, m, B, O, {
                    [`${P}-rtl`]: "rtl" === M
                }),
                style: {
                    height: el,
                    ...Z.root,
                    ...R,
                    ...h
                },
                onLoad: et,
                onError: et
            }, n.createElement(lZ.CSSMotionList, {
                keys: er,
                component: !1,
                motionAppear: !0,
                motionLeave: !0,
                motionName: `${P}-item-fade`
            }, (e, t) => {
                let {
                    item: l,
                    itemKey: o,
                    position: i = {},
                    itemIndex: a,
                    key: s,
                    className: c,
                    style: d
                } = e, {
                    column: u = 0
                } = i, f = {
                    [W("item-width")]: `calc((100% + ${G}px) / ${U})`,
                    insetInlineStart: `calc(${D("item-width")} * ${u})`,
                    width: `calc(${D("item-width")} - ${G}px)`,
                    top: i.top,
                    position: "absolute"
                };
                return n.createElement(l2, {
                    prefixCls: P,
                    key: s,
                    item: l,
                    style: { ...d,
                        ...Z.item,
                        ...f
                    },
                    className: (0, r.clsx)(Q.item, c),
                    ref: (0, nE.composeRef)(t, e => _(o, e)),
                    index: a,
                    itemRender: w,
                    column: u,
                    onResize: N ? et : null
                })
            })))
        });
    e.i(556419);
    var l8 = e.i(642667),
        l5 = e.i(963651),
        l6 = e.i(167007),
        l9 = e.i(649637),
        l7 = e.i(213381),
        re = e.i(425994);
    let rt = n.createContext(null),
        rn = function(e) {
            let {
                notFoundContent: t,
                activeIndex: l,
                setActiveIndex: r,
                selectOption: o,
                onFocus: i,
                onBlur: a,
                onScroll: s
            } = n.default.useContext(rt), {
                prefixCls: c,
                options: d,
                opened: u
            } = e, f = d[l] || {}, p = (0, n.useRef)(null);
            return (0, n.useEffect)(() => {
                if (-1 === l || !p.current || !u) return;
                let e = p.current ? .findItem ? .({
                    key: f.key
                });
                e && e.scrollIntoView({
                    block: "nearest",
                    inline: "nearest"
                })
            }, [l, f.key, u]), n.default.createElement(l7.default, {
                ref: p,
                prefixCls: `${c}-menu`,
                activeKey: f.key,
                onSelect: e => {
                    let {
                        key: t
                    } = e;
                    o(d.find(e => {
                        let {
                            key: n
                        } = e;
                        return n === t
                    }))
                },
                onFocus: i,
                onBlur: a,
                onScroll: s
            }, d.map((e, t) => {
                let {
                    key: l,
                    disabled: o,
                    className: i,
                    style: a,
                    label: s
                } = e;
                return n.default.createElement(re.MenuItem, {
                    key: l,
                    disabled: o,
                    className: i,
                    style: a,
                    onMouseEnter: () => {
                        r(t)
                    }
                }, s)
            }), !d.length && n.default.createElement(re.MenuItem, {
                disabled: !0
            }, t))
        },
        rl = {
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
        rr = e => {
            let {
                prefixCls: t,
                options: l,
                children: r,
                visible: o,
                transitionName: i,
                getPopupContainer: a,
                popupClassName: s,
                popupStyle: c,
                direction: d,
                placement: u
            } = e, f = `${t}-dropdown`, [p, m] = n.useState(!1), h = n.createElement(rn, {
                prefixCls: f,
                options: l,
                opened: p
            }), g = (0, n.useMemo)(() => "rtl" === d ? "top" === u ? "topLeft" : "bottomLeft" : "top" === u ? "topRight" : "bottomRight", [d, u]);
            return n.createElement(l9.default, {
                prefixCls: f,
                popupVisible: o,
                popup: h,
                popupPlacement: g,
                popupMotion: {
                    motionName: i
                },
                builtinPlacements: rl,
                getPopupContainer: a,
                popupClassName: s,
                popupStyle: c,
                afterOpenChange: m
            }, r)
        };

    function ro(e) {
        return (e || "").toLowerCase()
    }

    function ri(e, t) {
        return !t || -1 === e.indexOf(t)
    }

    function ra(e, t) {
        let {
            value: n = ""
        } = t, l = e.toLowerCase();
        return -1 !== n.toLowerCase().indexOf(l)
    }
    let rs = n.createContext({});

    function rc() {
        return (rc = Object.assign.bind()).apply(this, arguments)
    }
    let rd = (0, n.forwardRef)((e, t) => {
            let {
                prefixCls: l,
                className: o,
                style: i,
                classNames: a,
                styles: s,
                prefix: c = "@",
                split: d = " ",
                notFoundContent: u = "Not Found",
                value: f,
                defaultValue: p,
                children: m,
                options: h,
                allowClear: g,
                hasWrapper: v,
                silent: b,
                validateSearch: y = ri,
                filterOption: $ = ra,
                onChange: x,
                onKeyDown: S,
                onKeyUp: C,
                onPressEnter: k,
                onSearch: w,
                onSelect: E,
                onFocus: N,
                onBlur: I,
                transitionName: M,
                placement: z,
                direction: R,
                getPopupContainer: T,
                popupClassName: H,
                rows: P = 1,
                visible: L,
                onPopupScroll: A,
                ...B
            } = e, O = (0, n.useMemo)(() => Array.isArray(c) ? c : [c], [c]), W = (0, n.useRef)(null), D = (0, n.useRef)(null), F = (0, n.useRef)(null), _ = () => D.current ? .resizableTextArea ? .textArea;
            n.default.useImperativeHandle(t, () => ({
                focus: () => D.current ? .focus(),
                blur: () => D.current ? .blur(),
                textarea: D.current ? .resizableTextArea ? .textArea,
                nativeElement: W.current
            }));
            let [j, X] = (0, n.useState)(!1), [q, V] = (0, n.useState)(""), [G, Y] = (0, n.useState)(""), [U, K] = (0, n.useState)(0), [Q, Z] = (0, n.useState)(0), [J, ee] = (0, n.useState)(!1), et = (0, tf.default)(e.id), [en, el] = (0, tm.default)(p || "", f), {
                open: er
            } = (0, n.useContext)(rs);
            (0, n.useEffect)(() => {
                j && F.current && (F.current.scrollTop = _().scrollTop)
            }, [j]);
            let [eo, ei, ea, es] = n.default.useMemo(() => {
                if (er)
                    for (let e = 0; e < O.length; e += 1) {
                        let t = O[e],
                            n = en.lastIndexOf(t);
                        if (n >= 0) return [!0, "", t, n]
                    }
                return [j, q, G, U]
            }, [er, j, O, en, q, G, U]), ec = n.default.useCallback(e => (h && h.length > 0 ? h.map(e => ({ ...e,
                key: `${e?.key??e.value}-${et}`
            })) : (0, l6.default)(m).map(e => {
                let {
                    props: t,
                    key: n
                } = e;
                return { ...t,
                    label: t.children,
                    key: `${n||t.value}-${et}`
                }
            })).filter(t => !1 === $ || $(e, t)), [h, et, m, $]), ed = n.default.useMemo(() => ec(ei), [ec, ei]), eu = function() {
                let [e, t] = (0, n.useState)({
                    id: 0,
                    callback: null
                }), l = (0, n.useCallback)(e => {
                    t(t => {
                        let {
                            id: n
                        } = t;
                        return {
                            id: n + 1,
                            callback: e
                        }
                    })
                }, []);
                return (0, n.useEffect)(() => {
                    e.callback ? .()
                }, [e]), l
            }(), ef = e => {
                X(!1), K(0), V(""), eu(e)
            }, ep = e => {
                el(e), x ? .(e)
            }, em = e => {
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
                        split: i
                    } = t, a = e.slice(0, n);
                    a[a.length - i.length] === i && (a = a.slice(0, a.length - i.length)), a && (a = `${a}${i}`);
                    let s = function(e, t, n) {
                        let l = e[0];
                        if (!l || l === n) return e;
                        let r = e,
                            o = t.length;
                        for (let e = 0; e < o; e += 1)
                            if (ro(r[e]) !== ro(t[e])) {
                                r = r.slice(e);
                                break
                            } else e === o - 1 && (r = r.slice(o));
                        return r
                    }(e.slice(o), r.slice(o - n - l.length), i);
                    s.slice(0, i.length) === i && (s = s.slice(i.length));
                    let c = `${a}${l}${r}${i}`;
                    return {
                        text: `${c}${s}`,
                        selectionLocation: c.length
                    }
                }(en, {
                    measureLocation: es,
                    targetText: t,
                    prefix: ea,
                    selectionStart: _() ? .selectionStart,
                    split: d
                });
                ep(n), ef(() => {
                    var e;
                    e = _(), e.setSelectionRange(l, l), e.blur(), e.focus()
                }), E ? .(e, ea)
            }, eh = (0, n.useRef)(), eg = e => {
                window.clearTimeout(eh.current), !J && e && N && N(e), ee(!0)
            }, ev = e => {
                eh.current = window.setTimeout(() => {
                    ee(!1), ef(), I ? .(e)
                }, 0)
            }, eb = n.default.useMemo(() => {
                let e = s ? .textarea ? .resize ? ? i ? .resize,
                    t = { ...s ? .textarea
                    };
                return void 0 !== e && (t.resize = e), { ...s,
                    textarea: t
                }
            }, [i, s]), ey = n.default.createElement(n.default.Fragment, null, n.default.createElement(l5.default, rc({
                classNames: {
                    textarea: a ? .textarea
                },
                styles: eb,
                ref: D,
                value: en
            }, B, {
                rows: P,
                onChange: e => {
                    let {
                        target: {
                            value: t
                        }
                    } = e;
                    ep(t)
                },
                onKeyDown: e => {
                    let {
                        which: t
                    } = e;
                    if (S ? .(e), eo) {
                        if (t === tX.default.UP || t === tX.default.DOWN) {
                            let n = ed.length;
                            Z((Q + (t === tX.default.UP ? -1 : 1) + n) % n), e.preventDefault()
                        } else if (t === tX.default.ESC) ef();
                        else if (t === tX.default.ENTER) {
                            if (e.preventDefault(), b) return;
                            if (!ed.length) return void ef();
                            em(ed[Q])
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
                    if (C ? .(e), -1 === [tX.default.ESC, tX.default.UP, tX.default.DOWN, tX.default.ENTER].indexOf(n))
                        if (-1 !== r) {
                            let e = l.slice(r + o.length),
                                i = y(e, d),
                                a = !!ec(e).length;
                            i ? (t === o || "Shift" === t || n === tX.default.ALT || "AltGraph" === t || eo || e !== ei && a) && (X(!0), V(e), Y(o), K(r), Z(0)) : eo && ef(), w && i && w(e, o)
                        } else eo && ef()
                },
                onPressEnter: e => {
                    !eo && k && k(e)
                },
                onFocus: eg,
                onBlur: ev
            })), eo && n.default.createElement("div", {
                ref: F,
                className: `${l}-measure`
            }, en.slice(0, es), n.default.createElement(rt.Provider, {
                value: {
                    notFoundContent: u,
                    activeIndex: Q,
                    setActiveIndex: Z,
                    selectOption: em,
                    onFocus: () => {
                        eg()
                    },
                    onBlur: () => {
                        ev()
                    },
                    onScroll: e => {
                        A ? .(e)
                    }
                }
            }, n.default.createElement(rr, {
                prefixCls: l,
                transitionName: M,
                placement: z,
                direction: R,
                options: ed,
                visible: !0,
                getPopupContainer: T,
                popupClassName: (0, r.clsx)(H, a ? .popup),
                popupStyle: s ? .popup
            }, n.default.createElement("span", null, ea))), en.slice(es + ea.length)));
            return v ? ey : n.default.createElement("div", {
                className: (0, r.clsx)(l, o),
                style: i,
                ref: W
            }, ey)
        }),
        ru = (0, n.forwardRef)((e, t) => {
            let {
                suffix: l,
                prefixCls: o = "rc-mentions",
                defaultValue: i,
                value: a,
                id: s,
                allowClear: c,
                onChange: d,
                classNames: u,
                styles: f,
                className: p,
                disabled: m,
                onClear: h,
                ...g
            } = e, v = !!(l || c), b = (0, n.useRef)(null), y = (0, n.useRef)(null);
            (0, n.useImperativeHandle)(t, () => ({ ...y.current,
                nativeElement: b.current ? .nativeElement || y.current ? .nativeElement
            }));
            let [$, x] = (0, tm.default)(i || "", a), S = e => {
                x(e), d ? .(e)
            };
            return n.default.createElement(l8.BaseInput, {
                suffix: l,
                prefixCls: o,
                value: $,
                allowClear: c,
                handleReset: () => {
                    S("")
                },
                className: (0, r.clsx)(o, p, {
                    [`${o}-has-suffix`]: v
                }),
                classNames: u,
                disabled: m,
                ref: b,
                onClear: h
            }, n.default.createElement(rd, rc({
                className: u ? .mentions,
                styles: f,
                classNames: u,
                prefixCls: o,
                id: s,
                ref: y,
                onChange: S,
                disabled: m,
                hasWrapper: v
            }, g)))
        });
    ru.Option = () => null;
    var rf = e.i(330683);
    let rp = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t && !(0, eL.default)(e) ? [] : Array.isArray(e) ? e : [e]
    };
    var rm = e.i(244451),
        rh = e.i(349942),
        rg = e.i(517458),
        rv = e.i(889943);
    let rb = (0, c.genStyleHooks)("Mentions", e => {
            let t = (0, I.mergeToken)(e, (0, rg.initInputToken)(e));
            return [(e => {
                let {
                    componentCls: t,
                    colorText: n,
                    antCls: l,
                    colorTextDisabled: r,
                    calc: o
                } = e, [i, a] = (0, c.genCssVar)(l, "cmp-mentions");
                return {
                    [t]: [(0, N.resetComponent)(e), (0, rh.genBasicInputStyle)(e, {
                        largeStyle: {
                            padding: 0
                        },
                        smallStyle: {
                            padding: 0
                        }
                    }), (0, rv.genOutlinedStyle)(e), (0, rv.genFilledStyle)(e), (0, rv.genBorderlessStyle)(e), (0, rv.genUnderlinedStyle)(e), {
                        [i("padding-inline")]: e.paddingInline,
                        [i("padding-block")]: e.paddingBlock,
                        [i("control-height")]: e.controlHeight,
                        display: "flex",
                        padding: 0,
                        whiteSpace: "pre-wrap",
                        "> textarea": [(0, N.resetComponent)(e), (0, rh.genPlaceholderStyle)(e.colorTextPlaceholder), {
                            background: "transparent",
                            border: "none",
                            borderRadius: "inherit",
                            outline: "none",
                            flex: "auto",
                            minWidth: 0,
                            resize: "none",
                            "&:disabled": {
                                color: r
                            }
                        }],
                        [`> textarea, ${t}-measure`]: {
                            color: n,
                            boxSizing: "border-box",
                            margin: 0,
                            minHeight: o(a("control-height")).sub(o(e.lineWidth).mul(2).equal()).equal(),
                            paddingInline: a("padding-inline"),
                            paddingBlock: a("padding-block"),
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
                            insetInlineEnd: a("padding-inline"),
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
                            [`${l}-form-item-feedback-icon`]: {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        }
                    }, {
                        "&-has-suffix": {
                            "> textarea": {
                                paddingInlineEnd: o(e.paddingXXS).mul(1.5).add(e.fontSizeIcon).add(a("padding-inline")).equal()
                            }
                        }
                    }, {
                        "&-disabled": {
                            "> textarea": { ...(0, rv.genDisabledStyle)(e)
                            }
                        }
                    }, {
                        "&-lg": {
                            [i("padding-inline")]: e.paddingInlineLG,
                            [i("padding-block")]: e.paddingBlockLG,
                            [i("control-height")]: e.controlHeightLG
                        },
                        "&-sm": {
                            [i("padding-inline")]: e.paddingInlineSM,
                            [i("padding-block")]: e.paddingBlockSM,
                            [i("control-height")]: e.controlHeightSM
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
                    boxShadowSecondary: i,
                    itemPaddingVertical: a,
                    controlPaddingHorizontal: s,
                    colorText: c,
                    borderRadius: d,
                    lineHeight: u,
                    colorTextDisabled: f,
                    controlItemBgHover: p,
                    motionDurationSlow: m
                } = e;
                return {
                    [t]: {
                        "&-dropdown": { ...(0, N.resetComponent)(e),
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
                            boxShadow: i,
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
                                "&-item": { ...N.textEllipsis,
                                    position: "relative",
                                    display: "block",
                                    minWidth: e.controlItemWidth,
                                    padding: `${(0,E.unit)(a)} ${(0,E.unit)(s)}`,
                                    color: c,
                                    borderRadius: d,
                                    fontWeight: "normal",
                                    lineHeight: u,
                                    cursor: "pointer",
                                    transition: `background-color ${m} ease`,
                                    "&:hover": {
                                        backgroundColor: p
                                    },
                                    "&-disabled": {
                                        color: f,
                                        cursor: "not-allowed",
                                        "&:hover": {
                                            color: f,
                                            backgroundColor: p,
                                            cursor: "not-allowed"
                                        }
                                    },
                                    "&-selected": {
                                        color: c,
                                        fontWeight: e.fontWeightStrong,
                                        backgroundColor: p
                                    },
                                    "&-active": {
                                        backgroundColor: p
                                    }
                                }
                            }
                        }
                    }
                }
            })(t)]
        }, e => ({ ...(0, rg.initComponentToken)(e),
            dropdownHeight: 250,
            controlItemWidth: 100,
            zIndexPopup: e.zIndexPopupBase + 50,
            itemPaddingVertical: (e.controlHeight - e.fontHeight) / 2
        })),
        {
            Option: ry
        } = ru;

    function r$() {
        return !0
    }
    let rx = n.forwardRef((e, t) => {
        let {
            prefixCls: l,
            className: o,
            rootClassName: i,
            disabled: a,
            loading: c,
            filterOption: d,
            children: u,
            notFoundContent: f,
            options: p,
            status: m,
            allowClear: h = !1,
            popupClassName: g,
            style: v,
            variant: b,
            classNames: y,
            styles: $,
            size: S,
            ...k
        } = e, [w, E] = n.useState(!1), N = n.useRef(null), I = (0, nE.composeRef)(t, N), M = (0, tn.default)(e => S ? ? e), {
            getPrefixCls: z,
            direction: R,
            className: T,
            style: H,
            classNames: P,
            styles: L
        } = (0, s.useComponentConfig)("mentions"), {
            renderEmpty: A
        } = n.useContext(s.ConfigContext), {
            status: B,
            hasFeedback: O,
            feedbackIcon: W
        } = n.useContext(eK.FormItemInputContext), D = (0, t0.getMergedStatus)(B, m), F = n.useContext(t2.default), _ = a ? ? F, j = z("mentions", l), X = { ...e,
            disabled: _,
            status: D,
            loading: c,
            options: p,
            variant: b
        }, [q, V] = (0, x.useMergeSemantic)([P, y], [L, $], {
            props: X
        }), G = n.useMemo(() => void 0 !== f ? f : A ? .("Select") || n.createElement(t1.default, {
            componentName: "Select"
        }), [f, A]), Y = n.useMemo(() => c ? n.createElement(ry, {
            value: "ANTD_SEARCHING",
            disabled: !0
        }, n.createElement(rm.default, {
            size: "small"
        })) : u, [c, u]), U = c ? [{
            value: "ANTD_SEARCHING",
            disabled: !0,
            label: n.createElement(rm.default, {
                size: "small"
            })
        }] : p, K = c ? r$ : d, Q = (0, rf.default)(h), Z = (0, C.default)(j), [J, ee] = rb(j, Z), [et, en] = (0, tl.default)("mentions", b), el = O && n.createElement(n.Fragment, null, W), er = (0, r.clsx)(T, o, i, ee, Z, q.root, {
            [`${j}-sm`]: "small" === M,
            [`${j}-lg`]: "large" === M
        });
        return n.createElement(ru, {
            silent: c,
            prefixCls: j,
            notFoundContent: G,
            className: er,
            disabled: _,
            allowClear: Q,
            direction: R,
            style: { ...V.root,
                ...H,
                ...v
            },
            ...k,
            filterOption: K,
            onFocus: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                k.onFocus && k.onFocus.apply(k, t), E(!0)
            },
            onBlur: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                k.onBlur && k.onBlur.apply(k, t), E(!1)
            },
            ref: I,
            options: U,
            suffix: el,
            styles: {
                textarea: V.textarea,
                popup: V.popup,
                suffix: V.suffix
            },
            classNames: {
                textarea: (0, r.clsx)(q.textarea),
                popup: (0, r.clsx)(q.popup, g, i, J, ee, Z),
                suffix: q.suffix,
                mentions: (0, r.clsx)({
                    [`${j}-disabled`]: _,
                    [`${j}-focused`]: w,
                    [`${j}-rtl`]: "rtl" === R
                }, J),
                variant: (0, r.clsx)({
                    [`${j}-${et}`]: en
                }, (0, t0.getStatusClassNames)(j, D)),
                affixWrapper: J
            }
        }, Y)
    });
    rx.Option = ry;
    let rS = (0, em.default)(rx, void 0, void 0, "mentions");
    rx._InternalPanelDoNotUseOrYouWillBeFired = rS, rx.getMentions = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                prefix: n = "@",
                split: l = " "
            } = t,
            r = rp(n);
        return e.split(l).map(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = null;
            return (r.some(n => e.slice(0, n.length) === n && (t = n, !0)), null !== t) ? {
                prefix: t,
                value: e.slice(t.length)
            } : null
        }).filter(e => !!e && !!e.value)
    };
    var rC = e.i(60699),
        rk = e.i(294916),
        rw = e.i(687518),
        rE = e.i(16889);
    let rN = null,
        rI = [],
        rM = {};

    function rz() {
        let {
            getContainer: e,
            rtl: t,
            maxCount: n,
            top: l,
            bottom: r,
            showProgress: o,
            pauseOnHover: i
        } = rM, a = e ? .() || document.body;
        return {
            getContainer: () => a,
            rtl: t,
            maxCount: n,
            top: l,
            bottom: r,
            showProgress: o,
            pauseOnHover: i
        }
    }
    let rR = n.default.forwardRef((e, t) => {
            let {
                notificationConfig: l,
                sync: r
            } = e, {
                getPrefixCls: o
            } = (0, n.useContext)(s.ConfigContext), i = rM.prefixCls || o("notification"), a = (0, n.useContext)(ed.AppConfigContext), [c, d] = ec({ ...l,
                prefixCls: i,
                ...a.notification
            });
            return n.default.useEffect(r, []), n.default.useImperativeHandle(t, () => {
                let e = { ...c
                };
                return Object.keys(e).forEach(t => {
                    e[t] = function() {
                        for (var e = arguments.length, n = Array(e), l = 0; l < e; l++) n[l] = arguments[l];
                        return r(), c[t].apply(c, n)
                    }
                }), {
                    instance: e,
                    sync: r
                }
            }), d
        }),
        rT = n.default.forwardRef((e, t) => {
            let [l, r] = n.default.useState(rz), o = () => {
                r(rz)
            };
            n.default.useEffect(o, []);
            let i = (0, ld.globalConfig)(),
                a = i.getRootPrefixCls(),
                s = i.getIconPrefixCls(),
                c = i.getTheme(),
                d = n.default.createElement(rR, {
                    ref: t,
                    sync: o,
                    notificationConfig: l
                });
            return n.default.createElement(ld.default, {
                prefixCls: a,
                iconPrefixCls: s,
                theme: c
            }, i.holderRender ? i.holderRender(d) : d)
        }),
        rH = () => {
            if (!rN) {
                let e = document.createDocumentFragment(),
                    t = {
                        fragment: e
                    };
                rN = t, (() => {
                    (0, rE.render)(n.default.createElement(rT, {
                        ref: e => {
                            let {
                                instance: n,
                                sync: l
                            } = e || {};
                            Promise.resolve().then(() => {
                                !t.instance && n && (t.instance = n, t.sync = l, rH())
                            })
                        }
                    }), e)
                })();
                return
            }
            rN.instance && (rI.forEach(e => {
                switch (e.type) {
                    case "open":
                        rN.instance.open({ ...rM,
                            ...e.config
                        });
                        break;
                    case "destroy":
                        rN ? .instance ? .destroy(e.key)
                }
            }), rI = [])
        };

    function rP(e) {
        (0, ld.globalConfig)(), rI.push({
            type: "open",
            config: e
        }), rH()
    }
    let rL = {
        open: rP,
        destroy: e => {
            rI.push({
                type: "destroy",
                key: e
            }), rH()
        },
        config: function(e) {
            rM = { ...rM,
                ...e
            }, (() => {
                rN ? .sync ? .()
            })()
        },
        useNotification: function(e) {
            return ec(e)
        },
        _InternalPanelDoNotUseOrYouWillBeFired: e => {
            let {
                prefixCls: t,
                icon: l,
                type: o,
                message: i,
                title: a,
                description: c,
                btn: d,
                actions: u,
                closeIcon: f,
                className: p,
                style: m,
                styles: h,
                classNames: g,
                closable: v,
                ...b
            } = e, {
                getPrefixCls: y,
                className: $,
                style: S,
                classNames: k,
                styles: w
            } = (0, s.useComponentConfig)("notification"), [E, N] = (0, x.useMergeSemantic)([k, g], [w, h], {
                props: e
            }), {
                notification: I
            } = n.useContext(s.ConfigContext), M = t || y("notification"), z = `${M}-notice`, R = (0, C.default)(M), [T, H] = et(M, R), [P, L, , A] = (0, W.useClosable)((0, W.pickClosable)(e), (0, W.pickClosable)(I), {
                closable: !0,
                closeIcon: n.createElement(j.default, {
                    className: `${M}-close-icon`
                }),
                closeIconRender: e => el(M, e)
            }), B = !!P && {
                onClose: v && "object" == typeof v ? v ? .onClose : void 0,
                closeIcon: L,
                ...A
            };
            return n.createElement("div", {
                className: (0, r.clsx)(`${z}-pure-panel`, T, p, H, R, E.root),
                style: N.root
            }, n.createElement(en, {
                prefixCls: M
            }), n.createElement(G.Notice, {
                style: { ...S,
                    ...m
                },
                ...b,
                prefixCls: M,
                eventKey: "pure",
                duration: null,
                closable: B,
                className: (0, r.clsx)(p, $),
                content: n.createElement(eo, {
                    classNames: E,
                    styles: N,
                    prefixCls: z,
                    icon: l,
                    type: o,
                    title: a ? ? i,
                    description: c,
                    actions: u ? ? d
                })
            }))
        }
    };
    ["success", "info", "warning", "error"].forEach(e => {
        rL[e] = t => rP({ ...t,
            type: e
        })
    });
    var rA = e.i(165370),
        rB = e.i(496158),
        rO = e.i(285781),
        rW = e.i(836938),
        rD = e.i(62405),
        rF = e.i(87414),
        r_ = e.i(310730);
    let rj = (0, c.genStyleHooks)("Popconfirm", e => (e => {
            let {
                componentCls: t,
                iconCls: n,
                antCls: l,
                zIndexPopup: r,
                colorText: o,
                colorWarning: i,
                marginXXS: a,
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
                            color: i,
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
                            marginTop: a,
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
        rX = e => {
            let {
                prefixCls: t,
                okButtonProps: l,
                cancelButtonProps: o,
                title: i,
                description: a,
                cancelText: c,
                okText: d,
                okType: u = "primary",
                icon: f = n.createElement(X.default, null),
                showCancel: p = !0,
                close: m,
                onConfirm: h,
                onCancel: g,
                onPopupClick: v,
                classNames: b,
                styles: y
            } = e, {
                getPrefixCls: $
            } = n.useContext(s.ConfigContext), [x] = (0, eU.useLocale)("Popconfirm", rF.default.Popconfirm), S = (0, rW.getRenderPropValue)(i), C = (0, rW.getRenderPropValue)(a);
            return n.createElement("div", {
                className: `${t}-inner-content`,
                onClick: v
            }, n.createElement("div", {
                className: `${t}-message`
            }, f && n.createElement("span", {
                className: `${t}-message-icon`
            }, f), n.createElement("div", {
                className: `${t}-message-text`
            }, S && n.createElement("div", {
                className: (0, r.clsx)(`${t}-title`, b ? .title),
                style: y ? .title
            }, S), C && n.createElement("div", {
                className: (0, r.clsx)(`${t}-description`, b ? .content),
                style: y ? .content
            }, C))), n.createElement("div", {
                className: `${t}-buttons`
            }, p && n.createElement(lN.default, {
                onClick: g,
                size: "small",
                ...o
            }, c || x ? .cancelText), n.createElement(rO.default, {
                buttonProps: {
                    size: "small",
                    ...(0, rD.convertLegacyProps)(u),
                    ...l
                },
                actionFn: h,
                close: m,
                prefixCls: $("btn"),
                quitOnNullishReturnValue: !0,
                emitEvent: !0
            }, d || x ? .okText)))
        },
        rq = n.forwardRef((e, t) => {
            let {
                prefixCls: l,
                placement: o = "top",
                trigger: i,
                okType: a = "primary",
                icon: c = n.createElement(X.default, null),
                children: d,
                overlayClassName: u,
                onOpenChange: f,
                overlayStyle: p,
                styles: m,
                arrow: h,
                classNames: g,
                ...v
            } = e, {
                getPrefixCls: b,
                className: y,
                style: $,
                classNames: S,
                styles: C,
                arrow: k,
                trigger: w
            } = (0, s.useComponentConfig)("popconfirm"), [E, N] = (0, eY.useControlledState)(e.defaultOpen ? ? !1, e.open), I = (0, rB.default)(h, k), M = i || w || "click", z = e => {
                N(e), f ? .(e)
            }, R = b("popconfirm", l), T = { ...e,
                placement: o,
                trigger: M,
                okType: a,
                overlayStyle: p,
                styles: m,
                classNames: g
            }, [H, P] = (0, x.useMergeSemantic)([S, g], [C, m], {
                props: T
            }), L = (0, r.clsx)(R, y, u, H.root);
            return rj(R), n.createElement(ny.default, {
                arrow: I,
                ...(0, ep.omit)(v, ["title"]),
                trigger: M,
                placement: o,
                onOpenChange: t => {
                    let {
                        disabled: n = !1
                    } = e;
                    n || z(t)
                },
                open: E,
                ref: t,
                classNames: {
                    root: L,
                    container: H.container,
                    arrow: H.arrow
                },
                styles: {
                    root: { ...$,
                        ...P.root,
                        ...p
                    },
                    container: P.container,
                    arrow: P.arrow
                },
                content: n.createElement(rX, {
                    okType: a,
                    icon: c,
                    ...e,
                    prefixCls: R,
                    close: () => {
                        z(!1)
                    },
                    onConfirm: t => e.onConfirm ? .call(void 0, t),
                    onCancel: t => {
                        z(!1), e.onCancel ? .call(void 0, t)
                    },
                    classNames: H,
                    styles: P
                }),
                "data-popover-inject": !0
            }, d)
        });
    rq._InternalPanelDoNotUseOrYouWillBeFired = e => {
        let {
            prefixCls: t,
            placement: l,
            className: o,
            style: i,
            ...a
        } = e, {
            getPrefixCls: c
        } = n.useContext(s.ConfigContext), d = c("popconfirm", t);
        return rj(d), n.createElement(r_.default, {
            placement: l,
            className: (0, r.clsx)(d, o),
            style: i,
            content: n.createElement(rX, {
                prefixCls: d,
                ...a
            })
        })
    };
    var rV = e.i(309821),
        rG = e.i(713882);

    function rY(e, t) {
        var n = "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = (0, rG.default)(e)) || t && e && "number" == typeof e.length) {
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
        var o, i = !0,
            a = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return i = e.done, e
            },
            e: function(e) {
                a = !0, o = e
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (a) throw o
                }
            }
        }
    }
    var rU = e.i(278409),
        rK = e.i(233848),
        rQ = e.i(211577);

    function rZ(e, t, n) {
        if (t < 0 || t > 31 || e >>> t != 0) throw RangeError("Value out of range");
        for (var l = t - 1; l >= 0; l--) n.push(e >>> l & 1)
    }

    function rJ(e, t) {
        return (e >>> t & 1) != 0
    }

    function r0(e) {
        if (!e) throw Error("Assertion error")
    }
    var r1 = function() {
        function e(t, n) {
            (0, rU.default)(this, e), (0, rQ.default)(this, "modeBits", void 0), (0, rQ.default)(this, "numBitsCharCount", void 0), this.modeBits = t, this.numBitsCharCount = n
        }
        return (0, rK.default)(e, [{
            key: "numCharCountBits",
            value: function(e) {
                return this.numBitsCharCount[Math.floor((e + 7) / 17)]
            }
        }]), e
    }();
    (0, rQ.default)(r1, "NUMERIC", new r1(1, [10, 12, 14])), (0, rQ.default)(r1, "ALPHANUMERIC", new r1(2, [9, 11, 13])), (0, rQ.default)(r1, "BYTE", new r1(4, [8, 16, 16])), (0, rQ.default)(r1, "KANJI", new r1(8, [8, 10, 12])), (0, rQ.default)(r1, "ECI", new r1(7, [0, 0, 0]));
    var r2 = (0, rK.default)(function e(t, n) {
        (0, rU.default)(this, e), (0, rQ.default)(this, "ordinal", void 0), (0, rQ.default)(this, "formatBits", void 0), this.ordinal = t, this.formatBits = n
    });
    (0, rQ.default)(r2, "LOW", new r2(0, 1)), (0, rQ.default)(r2, "MEDIUM", new r2(1, 0)), (0, rQ.default)(r2, "QUARTILE", new r2(2, 3)), (0, rQ.default)(r2, "HIGH", new r2(3, 2));
    var r3 = function() {
        function e(t, n, l) {
            if ((0, rU.default)(this, e), (0, rQ.default)(this, "mode", void 0), (0, rQ.default)(this, "numChars", void 0), (0, rQ.default)(this, "bitData", void 0), this.mode = t, this.numChars = n, this.bitData = l, n < 0) throw RangeError("Invalid argument");
            this.bitData = l.slice()
        }
        return (0, rK.default)(e, [{
            key: "getData",
            value: function() {
                return this.bitData.slice()
            }
        }], [{
            key: "makeBytes",
            value: function(t) {
                var n, l = [],
                    r = rY(t);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var o = n.value;
                        rZ(o, 8, l)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return new e(r1.BYTE, t.length, l)
            }
        }, {
            key: "makeNumeric",
            value: function(t) {
                if (!e.isNumeric(t)) throw RangeError("String contains non-numeric characters");
                for (var n = [], l = 0; l < t.length;) {
                    var r = Math.min(t.length - l, 3);
                    rZ(parseInt(t.substring(l, l + r), 10), 3 * r + 1, n), l += r
                }
                return new e(r1.NUMERIC, t.length, n)
            }
        }, {
            key: "makeAlphanumeric",
            value: function(t) {
                if (!e.isAlphanumeric(t)) throw RangeError("String contains unencodable characters in alphanumeric mode");
                var n, l = [];
                for (n = 0; n + 2 <= t.length; n += 2) {
                    var r = 45 * e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));
                    rZ(r += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n + 1)), 11, l)
                }
                return n < t.length && rZ(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)), 6, l), new e(r1.ALPHANUMERIC, t.length, l)
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
                if (t < 128) rZ(t, 8, n);
                else if (t < 16384) rZ(2, 2, n), rZ(t, 14, n);
                else if (t < 1e6) rZ(6, 3, n), rZ(t, 21, n);
                else throw RangeError("ECI assignment value out of range");
                return new e(r1.ECI, 0, n)
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
                    r = rY(e);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var o = n.value,
                            i = o.mode.numCharCountBits(t);
                        if (o.numChars >= 1 << i) return 1 / 0;
                        l += 4 + i + o.bitData.length
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
    (0, rQ.default)(r3, "NUMERIC_REGEX", /^[0-9]*$/), (0, rQ.default)(r3, "ALPHANUMERIC_REGEX", /^[A-Z0-9 $%*+.\/:-]*$/), (0, rQ.default)(r3, "ALPHANUMERIC_CHARSET", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
    var r4 = function() {
        function e(t, n, l, r) {
            (0, rU.default)(this, e), (0, rQ.default)(this, "size", void 0), (0, rQ.default)(this, "mask", void 0), (0, rQ.default)(this, "modules", []), (0, rQ.default)(this, "isFunction", []), (0, rQ.default)(this, "version", void 0), (0, rQ.default)(this, "errorCorrectionLevel", void 0);
            var o = r;
            if (this.version = t, this.errorCorrectionLevel = n, t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version value out of range");
            if (o < -1 || o > 7) throw RangeError("Mask value out of range");
            this.size = 4 * t + 17;
            for (var i = [], a = 0; a < this.size; a++) i.push(!1);
            for (var s = 0; s < this.size; s++) this.modules.push(i.slice()), this.isFunction.push(i.slice());
            this.drawFunctionPatterns();
            var c = this.addEccAndInterleave(l);
            if (this.drawCodewords(c), -1 == o)
                for (var d = 1e9, u = 0; u < 8; u++) {
                    this.applyMask(u), this.drawFormatBits(u);
                    var f = this.getPenaltyScore();
                    f < d && (o = u, d = f), this.applyMask(u)
                }
            r0(0 <= o && o <= 7), this.mask = o, this.applyMask(o), this.drawFormatBits(o), this.isFunction = []
        }
        return (0, rK.default)(e, [{
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
                r0(r >>> 15 == 0);
                for (var o = 0; o <= 5; o++) this.setFunctionModule(8, o, rJ(r, o));
                this.setFunctionModule(8, 7, rJ(r, 6)), this.setFunctionModule(8, 8, rJ(r, 7)), this.setFunctionModule(7, 8, rJ(r, 8));
                for (var i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, rJ(r, i));
                for (var a = 0; a < 8; a++) this.setFunctionModule(this.size - 1 - a, 8, rJ(r, a));
                for (var s = 8; s < 15; s++) this.setFunctionModule(8, this.size - 15 + s, rJ(r, s));
                this.setFunctionModule(8, this.size - 8, !0)
            }
        }, {
            key: "drawVersion",
            value: function() {
                if (!(this.version < 7)) {
                    for (var e = this.version, t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
                    var n = this.version << 12 | e;
                    r0(n >>> 18 == 0);
                    for (var l = 0; l < 18; l++) {
                        var r = rJ(n, l),
                            o = this.size - 11 + l % 3,
                            i = Math.floor(l / 3);
                        this.setFunctionModule(o, i, r), this.setFunctionModule(i, o, r)
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
                            i = t + n;
                        0 <= o && o < this.size && 0 <= i && i < this.size && this.setFunctionModule(o, i, 2 != r && 4 != r)
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
                for (var r = e.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][n], o = e.ECC_CODEWORDS_PER_BLOCK[l.ordinal][n], i = Math.floor(e.getNumRawDataModules(n) / 8), a = r - i % r, s = Math.floor(i / r), c = [], d = e.reedSolomonComputeDivisor(o), u = 0, f = 0; u < r; u++) {
                    var p = t.slice(f, f + s - o + (u < a ? 0 : 1));
                    f += p.length;
                    var m = e.reedSolomonComputeRemainder(p, d);
                    u < a && p.push(0), c.push(p.concat(m))
                }
                for (var h = [], g = function(e) {
                        c.forEach(function(t, n) {
                            (e != s - o || n >= a) && h.push(t[e])
                        })
                    }, v = 0; v < c[0].length; v++) g(v);
                return r0(h.length == i), h
            }
        }, {
            key: "drawCodewords",
            value: function(t) {
                if (t.length != Math.floor(e.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
                for (var n = 0, l = this.size - 1; l >= 1; l -= 2) {
                    6 == l && (l = 5);
                    for (var r = 0; r < this.size; r++)
                        for (var o = 0; o < 2; o++) {
                            var i = l - o,
                                a = (l + 1 & 2) == 0 ? this.size - 1 - r : r;
                            !this.isFunction[a][i] && n < 8 * t.length && (this.modules[a][i] = rJ(t[n >>> 3], 7 - (7 & n)), n++)
                        }
                }
                r0(n == 8 * t.length)
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
                    for (var l = !1, r = 0, o = [0, 0, 0, 0, 0, 0, 0], i = 0; i < this.size; i++) this.modules[n][i] == l ? 5 == ++r ? t += e.PENALTY_N1 : r > 5 && t++ : (this.finderPenaltyAddHistory(r, o), l || (t += this.finderPenaltyCountPatterns(o) * e.PENALTY_N3), l = this.modules[n][i], r = 1);
                    t += this.finderPenaltyTerminateAndCount(l, r, o) * e.PENALTY_N3
                }
                for (var a = 0; a < this.size; a++) {
                    for (var s = !1, c = 0, d = [0, 0, 0, 0, 0, 0, 0], u = 0; u < this.size; u++) this.modules[u][a] == s ? 5 == ++c ? t += e.PENALTY_N1 : c > 5 && t++ : (this.finderPenaltyAddHistory(c, d), s || (t += this.finderPenaltyCountPatterns(d) * e.PENALTY_N3), s = this.modules[u][a], c = 1);
                    t += this.finderPenaltyTerminateAndCount(s, c, d) * e.PENALTY_N3
                }
                for (var f = 0; f < this.size - 1; f++)
                    for (var p = 0; p < this.size - 1; p++) {
                        var m = this.modules[f][p];
                        m == this.modules[f][p + 1] && m == this.modules[f + 1][p] && m == this.modules[f + 1][p + 1] && (t += e.PENALTY_N2)
                    }
                var h, g = 0,
                    v = rY(this.modules);
                try {
                    for (v.s(); !(h = v.n()).done;) g = h.value.reduce(function(e, t) {
                        return e + +!!t
                    }, g)
                } catch (e) {
                    v.e(e)
                } finally {
                    v.f()
                }
                var b = this.size * this.size,
                    y = Math.ceil(Math.abs(20 * g - 10 * b) / b) - 1;
                return r0(0 <= y && y <= 9), r0(0 <= (t += y * e.PENALTY_N4) && t <= 2568888), t
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
                r0(t <= 3 * this.size);
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
                var l = r3.makeSegments(t);
                return e.encodeSegments(l, n)
            }
        }, {
            key: "encodeBinary",
            value: function(t, n) {
                var l = r3.makeBytes(t);
                return e.encodeSegments([l], n)
            }
        }, {
            key: "encodeSegments",
            value: function(t, n) {
                var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 40,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
                    i = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                if (!(e.MIN_VERSION <= l && l <= r && r <= e.MAX_VERSION) || o < -1 || o > 7) throw RangeError("Invalid value");
                for (p = l;; p++) {
                    var a = 8 * e.getNumDataCodewords(p, n),
                        s = r3.getTotalBits(t, p);
                    if (s <= a) {
                        m = s;
                        break
                    }
                    if (p >= r) throw RangeError("Data too long")
                }
                for (var c = n, d = 0, u = [r2.MEDIUM, r2.QUARTILE, r2.HIGH]; d < u.length; d++) {
                    var f = u[d];
                    i && m <= 8 * e.getNumDataCodewords(p, f) && (c = f)
                }
                var p, m, h, g = [],
                    v = rY(t);
                try {
                    for (v.s(); !(h = v.n()).done;) {
                        var b = h.value;
                        rZ(b.mode.modeBits, 4, g), rZ(b.numChars, b.mode.numCharCountBits(p), g);
                        var y, $ = rY(b.getData());
                        try {
                            for ($.s(); !(y = $.n()).done;) {
                                var x = y.value;
                                g.push(x)
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
                r0(g.length == m);
                var S = 8 * e.getNumDataCodewords(p, c);
                r0(g.length <= S), rZ(0, Math.min(4, S - g.length), g), rZ(0, (8 - g.length % 8) % 8, g), r0(g.length % 8 == 0);
                for (var C = 236; g.length < S; C ^= 253) rZ(C, 8, g);
                for (var k = []; 8 * k.length < g.length;) k.push(0);
                return g.forEach(function(e, t) {
                    k[t >>> 3] |= e << 7 - (7 & t)
                }), new e(p, c, k, o)
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
                return r0(208 <= n && n <= 29648), n
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
                    for (var i = 0; i < n.length; i++) n[i] = e.reedSolomonMultiply(n[i], r), i + 1 < n.length && (n[i] ^= n[i + 1]);
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
                    o = rY(t);
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
                return r0(n >>> 8 == 0), n
            }
        }]), e
    }();
    (0, rQ.default)(r4, "MIN_VERSION", 1), (0, rQ.default)(r4, "MAX_VERSION", 40), (0, rQ.default)(r4, "PENALTY_N1", 3), (0, rQ.default)(r4, "PENALTY_N2", 3), (0, rQ.default)(r4, "PENALTY_N3", 40), (0, rQ.default)(r4, "PENALTY_N4", 10), (0, rQ.default)(r4, "ECC_CODEWORDS_PER_BLOCK", [
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    ]), (0, rQ.default)(r4, "NUM_ERROR_CORRECTION_BLOCKS", [
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    ]);
    var r8 = {
            L: r2.LOW,
            M: r2.MEDIUM,
            Q: r2.QUARTILE,
            H: r2.HIGH
        },
        r5 = "#FFFFFF",
        r6 = "#000000",
        r9 = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = [];
            return e.forEach(function(e, l) {
                var r = null;
                e.forEach(function(o, i) {
                    if (!o && null !== r) {
                        n.push("M".concat(r + t, " ").concat(l + t, "h").concat(i - r, "v1H").concat(r + t, "z")), r = null;
                        return
                    }
                    if (i === e.length - 1) {
                        if (!o) return;
                        null === r ? n.push("M".concat(i + t, ",").concat(l + t, " h1v1H").concat(i + t, "z")) : n.push("M".concat(r + t, ",").concat(l + t, " h").concat(i + 1 - r, "v1H").concat(r + t, "z"));
                        return
                    }
                    o && null === r && (r = i)
                })
            }), n.join("")
        },
        r7 = function(e, t) {
            return e.slice().map(function(e, n) {
                return n < t.y || n >= t.y + t.h ? e : e.map(function(e, n) {
                    return (n < t.x || n >= t.x + t.w) && e
                })
            })
        },
        oe = function(e, t, n, l) {
            if (null == l) return null;
            var r = e.length + 2 * n,
                o = Math.floor(.1 * t),
                i = r / t,
                a = (l.width || o) * i,
                s = (l.height || o) * i,
                c = null == l.x ? e.length / 2 - a / 2 : l.x * i,
                d = null == l.y ? e.length / 2 - s / 2 : l.y * i,
                u = null == l.opacity ? 1 : l.opacity,
                f = null;
            if (l.excavate) {
                var p = Math.floor(c),
                    m = Math.floor(d),
                    h = Math.ceil(a + c - p),
                    g = Math.ceil(s + d - m);
                f = {
                    x: p,
                    y: m,
                    w: h,
                    h: g
                }
            }
            return {
                x: c,
                y: d,
                h: s,
                w: a,
                excavation: f,
                opacity: u,
                crossOrigin: l.crossOrigin
            }
        },
        ot = function() {
            try {
                new Path2D().addPath(new Path2D)
            } catch (e) {
                return !1
            }
            return !0
        }(),
        on = e.i(209428),
        ol = e.i(392221);

    function or(e, t) {
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
    }
    var oo = e.i(8211),
        oi = function(e) {
            var t = e.value,
                l = e.level,
                r = e.minVersion,
                o = e.includeMargin,
                i = e.marginSize,
                a = e.imageSettings,
                s = e.size,
                c = e.boostLevel,
                d = n.default.useMemo(function() {
                    var e = (Array.isArray(t) ? t : [t]).reduce(function(e, t) {
                        return e.push.apply(e, (0, oo.default)(r3.makeSegments(t))), e
                    }, []);
                    return r4.encodeSegments(e, r8[l], r, void 0, void 0, c)
                }, [t, l, r, c]);
            return n.default.useMemo(function() {
                var e = d.getModules(),
                    t = null != i ? Math.max(Math.floor(i), 0) : 4 * !!o,
                    n = e.length + 2 * t,
                    l = oe(e, s, t, a);
                return {
                    cells: e,
                    margin: t,
                    numCells: n,
                    calculatedImageSettings: l,
                    qrcode: d
                }
            }, [d, s, a, o, i])
        },
        oa = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "marginSize", "style", "imageSettings", "boostLevel"],
        os = n.default.forwardRef(function(e, t) {
            var l = e.value,
                r = e.size,
                o = void 0 === r ? 128 : r,
                i = e.level,
                a = e.bgColor,
                s = void 0 === a ? r5 : a,
                c = e.fgColor,
                d = void 0 === c ? r6 : c,
                u = e.includeMargin,
                f = e.minVersion,
                p = e.marginSize,
                m = e.style,
                h = e.imageSettings,
                g = e.boostLevel,
                v = or(e, oa),
                b = null == h ? void 0 : h.src,
                y = n.default.useRef(null),
                $ = n.default.useRef(null),
                x = n.default.useCallback(function(e) {
                    y.current = e, "function" == typeof t ? t(e) : t && (t.current = e)
                }, [t]),
                S = n.default.useState(!1),
                C = (0, ol.default)(S, 2)[1],
                k = oi({
                    value: l,
                    level: void 0 === i ? "L" : i,
                    minVersion: void 0 === f ? 1 : f,
                    includeMargin: void 0 !== u && u,
                    marginSize: p,
                    imageSettings: h,
                    size: o,
                    boostLevel: g
                }),
                w = k.margin,
                E = k.cells,
                N = k.numCells,
                I = k.calculatedImageSettings;
            n.default.useEffect(function() {
                if (y.current) {
                    var e = y.current,
                        t = e.getContext("2d");
                    if (t) {
                        var n = E,
                            l = $.current,
                            r = null != I && null !== l && l.complete && 0 !== l.naturalHeight && 0 !== l.naturalWidth;
                        r && null != I.excavation && (n = r7(E, I.excavation));
                        var i = window.devicePixelRatio || 1;
                        e.height = e.width = o * i;
                        var a = o / N * i;
                        t.scale(a, a), t.fillStyle = s, t.fillRect(0, 0, N, N), t.fillStyle = d, ot ? t.fill(new Path2D(r9(n, w))) : E.forEach(function(e, n) {
                            e.forEach(function(e, l) {
                                e && t.fillRect(l + w, n + w, 1, 1)
                            })
                        }), I && (t.globalAlpha = I.opacity), r && t.drawImage(l, I.x + w, I.y + w, I.w, I.h)
                    }
                }
            }), n.default.useEffect(function() {
                C(!1)
            }, [b]);
            var M = (0, on.default)({
                    height: o,
                    width: o
                }, m),
                z = null;
            return null != b && (z = n.default.createElement("img", {
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
            })), n.default.createElement(n.default.Fragment, null, n.default.createElement("canvas", (0, nw.default)({
                style: M,
                height: o,
                width: o,
                ref: x,
                role: "img"
            }, v)), z)
        }),
        oc = ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "title", "marginSize", "imageSettings", "boostLevel"],
        od = n.default.forwardRef(function(e, t) {
            var l = e.value,
                r = e.size,
                o = void 0 === r ? 128 : r,
                i = e.level,
                a = e.bgColor,
                s = e.fgColor,
                c = e.includeMargin,
                d = e.minVersion,
                u = e.title,
                f = e.marginSize,
                p = e.imageSettings,
                m = e.boostLevel,
                h = or(e, oc),
                g = oi({
                    value: l,
                    level: void 0 === i ? "L" : i,
                    minVersion: void 0 === d ? 1 : d,
                    includeMargin: void 0 !== c && c,
                    marginSize: f,
                    imageSettings: p,
                    size: o,
                    boostLevel: m
                }),
                v = g.margin,
                b = g.cells,
                y = g.numCells,
                $ = g.calculatedImageSettings,
                x = b,
                S = null;
            null != p && null != $ && (null != $.excavation && (x = r7(b, $.excavation)), S = n.default.createElement("image", {
                href: p.src,
                height: $.h,
                width: $.w,
                x: $.x + v,
                y: $.y + v,
                preserveAspectRatio: "none",
                opacity: $.opacity,
                crossOrigin: $.crossOrigin
            }));
            var C = r9(x, v);
            return n.default.createElement("svg", (0, nw.default)({
                height: o,
                width: o,
                viewBox: "0 0 ".concat(y, " ").concat(y),
                ref: t,
                role: "img"
            }, h), !!u && n.default.createElement("title", null, u), n.default.createElement("path", {
                fill: void 0 === a ? r5 : a,
                d: "M0,0 h".concat(y, "v").concat(y, "H0z"),
                shapeRendering: "crispEdges"
            }), n.default.createElement("path", {
                fill: void 0 === s ? r6 : s,
                d: C,
                shapeRendering: "crispEdges"
            }), S)
        });
    let ou = {
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

    function of () {
        return ( of = Object.assign.bind()).apply(this, arguments)
    }
    let op = n.forwardRef((e, t) => n.createElement(ek.default, of ({}, e, {
            ref: t,
            icon: ou
        }))),
        om = n.default.createElement(rm.default, null);

    function oh(e) {
        let {
            prefixCls: t,
            locale: l,
            onRefresh: r,
            statusRender: o,
            status: i
        } = e, a = {
            expired: n.default.createElement(n.default.Fragment, null, n.default.createElement("p", {
                className: `${t}-expired`
            }, l ? .expired), r && n.default.createElement(lN.default, {
                type: "link",
                icon: n.default.createElement(op, null),
                onClick: r
            }, l ? .refresh)),
            loading: om,
            scanned: n.default.createElement("p", {
                className: `${t}-scanned`
            }, l ? .scanned)
        };
        return (o ? ? (e => a[e.status]))({
            status: i,
            locale: l,
            onRefresh: r
        })
    }
    e.i(262370);
    var og = e.i(135551);
    let ov = (0, c.genStyleHooks)("QRCode", e => (e => {
        let {
            componentCls: t,
            lineWidth: n,
            lineType: l,
            colorSplit: r
        } = e;
        return {
            [t]: { ...(0, N.resetComponent)(e),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: e.paddingSM,
                backgroundColor: e.colorWhite,
                borderRadius: e.borderRadiusLG,
                border: `${(0,E.unit)(n)} ${l} ${r}`,
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
    })((0, I.mergeToken)(e, {
        QRCodeTextColor: e.colorText
    })), e => ({
        QRCodeCoverBackgroundColor: new og.FastColor(e.colorBgContainer).setA(.96).toRgbString()
    }));
    var ob = e.i(544195);
    let oy = {
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

    function o$() {
        return (o$ = Object.assign.bind()).apply(this, arguments)
    }
    let ox = n.forwardRef((e, t) => n.createElement(ek.default, o$({}, e, {
            ref: t,
            icon: oy
        }))),
        oS = n.default.forwardRef(function(e, t) {
            let {
                disabled: l,
                prefixCls: o,
                character: i,
                characterRender: a,
                index: s,
                count: c,
                value: d,
                allowHalf: u,
                focused: f,
                onHover: p,
                onClick: m
            } = e, h = s + 1, g = new Set([o]);
            0 === d && 0 === s && f ? g.add(`${o}-focused`) : u && d + .5 >= h && d < h ? (g.add(`${o}-half`), g.add(`${o}-active`), f && g.add(`${o}-focused`)) : (h <= d ? g.add(`${o}-full`) : g.add(`${o}-zero`), h === d && f && g.add(`${o}-focused`));
            let v = "function" == typeof i ? i(e) : i,
                b = n.default.createElement("li", {
                    className: (0, r.clsx)(Array.from(g)),
                    ref: t
                }, n.default.createElement("div", {
                    onClick: l ? null : e => {
                        m(e, s)
                    },
                    onKeyDown: l ? null : e => {
                        e.keyCode === tX.default.ENTER && m(e, s)
                    },
                    onMouseMove: l ? null : e => {
                        p(e, s)
                    },
                    role: "radio",
                    "aria-checked": d > s ? "true" : "false",
                    "aria-posinset": s + 1,
                    "aria-setsize": c,
                    tabIndex: l ? -1 : 0
                }, n.default.createElement("div", {
                    className: `${o}-first`
                }, v), n.default.createElement("div", {
                    className: `${o}-second`
                }, v)));
            return a && (b = a(b, e)), b
        });

    function oC() {
        return (oC = Object.assign.bind()).apply(this, arguments)
    }
    let ok = n.default.forwardRef(function(e, t) {
            let l, {
                    prefixCls: o = "rc-rate",
                    className: i,
                    defaultValue: a,
                    value: s,
                    count: c = 5,
                    allowHalf: d = !1,
                    allowClear: u = !0,
                    keyboard: f = !0,
                    character: p = "★",
                    characterRender: m,
                    disabled: h,
                    direction: g = "ltr",
                    tabIndex: v = 0,
                    autoFocus: b,
                    onHoverChange: y,
                    onChange: $,
                    onFocus: x,
                    onBlur: S,
                    onKeyDown: C,
                    onMouseLeave: k,
                    ...w
                } = e,
                [E, N] = (l = n.useRef({}), [function(e) {
                    return l.current[e]
                }, function(e) {
                    return t => {
                        l.current[e] = t
                    }
                }]),
                I = n.default.useRef(null),
                M = () => {
                    h || I.current ? .focus()
                };
            n.default.useImperativeHandle(t, () => ({
                focus: M,
                blur: () => {
                    h || I.current ? .blur()
                }
            }));
            let [z, R] = (0, tm.default)(a || 0, s), [T, H] = (0, tm.default)(null), P = (e, t) => {
                let n = "rtl" === g,
                    l = e + 1;
                if (d) {
                    let r, o, i, a = E(e),
                        s = (r = function(e) {
                            let t, n, l = e.ownerDocument,
                                {
                                    body: r
                                } = l,
                                o = l && l.documentElement,
                                i = e.getBoundingClientRect();
                            return t = i.left, n = i.top, {
                                left: t -= o.clientLeft || r.clientLeft || 0,
                                top: n -= o.clientTop || r.clientTop || 0
                            }
                        }(a), i = (o = a.ownerDocument).defaultView || o.parentWindow, r.left += function(e) {
                            let t = e.pageXOffset,
                                n = "scrollLeft";
                            if ("number" != typeof t) {
                                let l = e.document;
                                "number" != typeof(t = l.documentElement[n]) && (t = l.body[n])
                            }
                            return t
                        }(i), r.left),
                        c = a.clientWidth;
                    n && t - s > c / 2 ? l -= .5 : !n && t - s < c / 2 && (l -= .5)
                }
                return l
            }, L = e => {
                R(e), $ ? .(e)
            }, [A, B] = n.default.useState(!1), [O, W] = n.default.useState(null), D = (e, t) => {
                let n = P(t, e.pageX);
                n !== T && (W(n), H(null)), y ? .(n)
            }, F = e => {
                h || (W(null), H(null), y ? .(void 0)), e && k ? .(e)
            }, _ = (e, t) => {
                let n = P(t, e.pageX),
                    l = !1;
                u && (l = n === z), F(), L(l ? 0 : n), H(l ? n : null)
            };
            n.default.useEffect(() => {
                b && !h && M()
            }, []);
            let j = Array(c).fill(0).map((e, t) => n.default.createElement(oS, {
                    ref: N(t),
                    index: t,
                    count: c,
                    disabled: h,
                    prefixCls: `${o}-star`,
                    allowHalf: d,
                    value: null === O ? z : O,
                    onClick: _,
                    onHover: D,
                    key: e || t,
                    character: p,
                    characterRender: m,
                    focused: A
                })),
                X = (0, r.clsx)(o, i, {
                    [`${o}-disabled`]: h,
                    [`${o}-rtl`]: "rtl" === g
                });
            return n.default.createElement("ul", oC({
                className: X,
                onMouseLeave: F,
                tabIndex: h ? -1 : v,
                onFocus: h ? null : () => {
                    B(!0), x ? .()
                },
                onBlur: h ? null : () => {
                    B(!1), S ? .()
                },
                onKeyDown: h ? null : e => {
                    let {
                        keyCode: t
                    } = e, n = "rtl" === g, l = d ? .5 : 1;
                    f && (t === tX.default.RIGHT && z < c && !n ? (L(z + l), e.preventDefault()) : t === tX.default.LEFT && z > 0 && !n || t === tX.default.RIGHT && z > 0 && n ? (L(z - l), e.preventDefault()) : t === tX.default.LEFT && z < c && n && (L(z + l), e.preventDefault())), C ? .(e)
                },
                ref: I
            }, (0, eH.default)(w, {
                aria: !0,
                data: !0,
                attr: !0
            })), j)
        }),
        ow = (0, c.genStyleHooks)("Rate", e => (e => {
            let {
                componentCls: t
            } = e;
            return {
                [t]: { ...(0, N.resetComponent)(e),
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
                                        outline: `${(0,E.unit)(e.lineWidth)} dashed ${e.starColor}`,
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
        })((0, I.mergeToken)(e, {})), e => ({
            starColor: e.yellow6,
            starSize: .625 * e.controlHeight,
            starSizeSM: .625 * e.controlHeightSM,
            starSizeLG: .625 * e.controlHeightLG,
            starHoverScale: "scale(1.1)",
            starBg: e.colorFillContent
        })),
        oE = n.forwardRef((e, t) => {
            let {
                prefixCls: l,
                className: o,
                rootClassName: i,
                style: a,
                tooltips: c,
                character: d = n.createElement(ox, null),
                disabled: u,
                size: f = "middle",
                ...p
            } = e, {
                getPrefixCls: m,
                direction: h,
                className: g,
                style: v
            } = (0, s.useComponentConfig)("rate"), b = m("rate", l), [y, $] = ow(b), x = { ...v,
                ...a
            }, S = n.useContext(t2.default);
            return n.createElement(ok, {
                ref: t,
                character: d,
                characterRender: (e, t) => {
                    let {
                        index: l
                    } = t;
                    if (!c) return e;
                    let r = c[l];
                    return "object" == typeof r && null !== r ? n.createElement(nP.default, { ...r
                    }, e) : n.createElement(nP.default, {
                        title: r
                    }, e)
                },
                disabled: u ? ? S,
                ...p,
                className: (0, r.clsx)(`${b}-${f}`, o, i, y, $, g),
                style: x,
                prefixCls: b,
                direction: h
            })
        });
    var oN = e.i(376150),
        oI = e.i(649536);
    let oM = (0, n.forwardRef)((e, t) => {
        let {
            prefixCls: l,
            className: o,
            children: i,
            size: a,
            style: s = {}
        } = e, c = (0, r.clsx)(`${l}-panel`, {
            [`${l}-panel-hidden`]: 0 === a
        }, o), d = void 0 !== a;
        return n.default.createElement("div", {
            ref: t,
            className: c,
            style: { ...s,
                flexBasis: d ? a : "auto",
                flexGrow: +!d
            }
        }, i)
    });

    function oz(e, t) {
        return e.collapsible && t.collapsible ? !0 === e.showCollapsibleIcon || !0 === t.showCollapsibleIcon || ("auto" === e.showCollapsibleIcon || "auto" === t.showCollapsibleIcon) && "auto" : e.collapsible ? e.showCollapsibleIcon : !!t.collapsible && t.showCollapsibleIcon
    }

    function oR(e) {
        return Number(e.slice(0, -1)) / 100
    }

    function oT(e) {
        return "string" == typeof e && e.endsWith("%")
    }
    var oH = e.i(536591);

    function oP(e) {
        return "number" == typeof e && !Number.isNaN(e) && Number.isFinite(e) ? Math.round(e) : 0
    }
    let oL = e => {
            let {
                prefixCls: t,
                rootPrefixCls: l,
                vertical: o,
                index: i,
                active: a,
                ariaNow: s,
                ariaMin: d,
                ariaMax: u,
                resizable: f,
                draggerIcon: p,
                draggerStyle: m,
                draggerClassName: h,
                collapsibleIcon: g,
                startCollapsible: v,
                endCollapsible: y,
                onOffsetStart: $,
                onOffsetUpdate: x,
                onOffsetEnd: S,
                onCollapse: C,
                lazy: k,
                containerSize: w,
                showStartCollapsibleIcon: E,
                showEndCollapsibleIcon: N
            } = e, I = `${t}-bar`, [M] = (0, c.genCssVar)(l, "splitter"), [z, R] = (0, n.useState)(null), [T, H] = (0, n.useState)(0), P = o ? 0 : T, L = o ? T : 0, A = (0, b.useEvent)((e, t) => {
                var n;
                let l;
                H((n = o ? t : e, l = w * s / 100, Math.max(Math.max(0, w * d / 100), Math.min(Math.min(w, w * u / 100), l + n)) - l))
            }), B = (0, b.useEvent)(() => {
                x(i, P, L, !0), H(0), S(!0)
            }), O = e => {
                switch (e) {
                    case !0:
                        return `${I}-collapse-bar-always-visible`;
                    case !1:
                        return `${I}-collapse-bar-always-hidden`;
                    case "auto":
                        return `${I}-collapse-bar-hover-only`
                }
            };
            (0, nC.default)(() => {
                if (!z) return;
                let e = {
                    mousemove: e => {
                        let {
                            pageX: t,
                            pageY: n
                        } = e, l = t - z[0], r = n - z[1];
                        k ? A(l, r) : x(i, l, r)
                    },
                    mouseup: () => {
                        k ? B() : S(), R(null)
                    },
                    touchmove: e => {
                        if (1 === e.touches.length) {
                            let t = e.touches[0],
                                n = t.pageX - z[0],
                                l = t.pageY - z[1];
                            k ? A(n, l) : x(i, n, l)
                        }
                    },
                    touchend: () => {
                        k ? B() : S(), R(null)
                    }
                };
                for (let [t, n] of Object.entries(e)) window.addEventListener(t, n);
                return () => {
                    for (let [t, n] of Object.entries(e)) window.removeEventListener(t, n)
                }
            }, [z, i, k]);
            let W = {
                    [M("bar-preview-offset")]: `${T}px`
                },
                [D, F, _, j] = n.default.useMemo(() => {
                    let e = null,
                        t = null,
                        l = g ? .start !== void 0,
                        r = g ? .end !== void 0;
                    return o ? (e = l ? g.start : n.default.createElement(oH.default, null), t = r ? g.end : n.default.createElement(eT.default, null)) : (e = l ? g.start : n.default.createElement(nt.default, null), t = r ? g.end : n.default.createElement(nn.default, null)), [e, t, l, r]
                }, [g, o]);
            return n.default.createElement("div", {
                className: I,
                role: "separator",
                "aria-valuenow": oP(s),
                "aria-valuemin": oP(d),
                "aria-valuemax": oP(u)
            }, k && n.default.createElement("div", {
                className: (0, r.clsx)(`${I}-preview`, {
                    [`${I}-preview-active`]: !!T
                }),
                style: W
            }), n.default.createElement("div", {
                style: m,
                className: (0, r.clsx)(`${I}-dragger`, {
                    [`${I}-dragger-disabled`]: !f,
                    [`${I}-dragger-active`]: a,
                    [`${I}-dragger-customize`]: void 0 !== p
                }, h ? .default, a && h ? .active),
                onMouseDown: e => {
                    f && e.currentTarget && (R([e.pageX, e.pageY]), $(i))
                },
                onTouchStart: e => {
                    if (f && 1 === e.touches.length) {
                        let t = e.touches[0];
                        R([t.pageX, t.pageY]), $(i)
                    }
                }
            }, void 0 !== p ? n.default.createElement("div", {
                className: (0, r.clsx)(`${I}-dragger-icon`)
            }, p) : null), v && n.default.createElement("div", {
                className: (0, r.clsx)(`${I}-collapse-bar`, `${I}-collapse-bar-start`, {
                    [`${I}-collapse-bar-customize`]: _
                }, O(E)),
                onClick: () => C(i, "start")
            }, n.default.createElement("span", {
                className: (0, r.clsx)(`${I}-collapse-icon`, `${I}-collapse-start`)
            }, D)), y && n.default.createElement("div", {
                className: (0, r.clsx)(`${I}-collapse-bar`, `${I}-collapse-bar-end`, {
                    [`${I}-collapse-bar-customize`]: j
                }, O(N)),
                onClick: () => C(i, "end")
            }, n.default.createElement("span", {
                className: (0, r.clsx)(`${I}-collapse-icon`, `${I}-collapse-end`)
            }, F)))
        },
        oA = {
            position: "absolute",
            top: "50%",
            left: {
                _skip_check_: !0,
                value: "50%"
            },
            transform: "translate(-50%, -50%)"
        },
        oB = (0, c.genStyleHooks)("Splitter", e => {
            let {
                componentCls: t,
                colorFill: n,
                splitBarDraggableSize: l,
                splitBarSize: r,
                splitTriggerSize: o,
                controlItemBgHover: i,
                controlItemBgActive: a,
                controlItemBgActiveHover: s,
                colorPrimary: d,
                antCls: u,
                calc: f
            } = e, [, p] = (0, c.genCssVar)(u, "splitter"), m = `${t}-bar`, h = `${t}-mask`, g = `${t}-panel`, v = f(o).div(2).equal(), b = {
                position: "absolute",
                background: e.colorPrimary,
                opacity: .2,
                pointerEvents: "none",
                transition: "none",
                zIndex: 1,
                display: "none"
            };
            return {
                [t]: { ...(0, N.resetComponent)(e),
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "stretch",
                    [`> ${m}`]: {
                        flex: "none",
                        position: "relative",
                        userSelect: "none",
                        [`${m}-dragger`]: { ...oA,
                            zIndex: 1,
                            "&::before": {
                                content: '""',
                                background: i,
                                ...oA
                            },
                            "&::after": {
                                content: '""',
                                background: n,
                                ...oA
                            },
                            [`&:hover:not(${m}-dragger-active)`]: {
                                "&::before": {
                                    background: a
                                }
                            },
                            "&-active": {
                                zIndex: 2,
                                "&::before": {
                                    background: s
                                }
                            },
                            [`&-active${m}-dragger-customize`]: {
                                [`${m}-dragger-icon`]: {
                                    color: d
                                }
                            },
                            [`&-disabled${m}-dragger`]: {
                                zIndex: 0,
                                "&, &:hover, &-active": {
                                    cursor: "default",
                                    "&::before": {
                                        background: i
                                    }
                                },
                                "&::after": {
                                    display: "none"
                                },
                                [`${m}-dragger-icon`]: {
                                    display: "none"
                                }
                            },
                            "&-customize": {
                                [`${m}-dragger-icon`]: { ...oA,
                                    display: "flex",
                                    alignItems: "center",
                                    color: n
                                },
                                "&::after": {
                                    display: "none"
                                }
                            }
                        },
                        [`${m}-collapse-bar`]: { ...oA,
                            zIndex: e.zIndexPopupBase,
                            background: i,
                            fontSize: e.fontSizeSM,
                            borderRadius: e.borderRadiusXS,
                            color: e.colorText,
                            cursor: "pointer",
                            opacity: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            [`&:hover:not(${m}-collapse-bar-customize)`]: {
                                background: a
                            },
                            [`&:active:not(${m}-collapse-bar-customize)`]: {
                                background: s
                            },
                            [`${m}-collapse-icon`]: {
                                display: "flex",
                                alignItems: "center"
                            }
                        },
                        [`${m}-collapse-bar-customize`]: {
                            background: "transparent"
                        },
                        "&:hover, &:active": {
                            [`${m}-collapse-bar-hover-only`]: {
                                opacity: 1
                            }
                        },
                        [`${m}-collapse-bar-hover-only`]: {
                            "@media(hover:none)": {
                                opacity: 1
                            }
                        },
                        [`${m}-collapse-bar-always-hidden`]: {
                            display: "none"
                        },
                        [`${m}-collapse-bar-always-visible`]: {
                            opacity: 1
                        }
                    },
                    [h]: {
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
                        [`> ${m}`]: {
                            width: 0,
                            [`${m}-preview`]: {
                                height: "100%",
                                width: r,
                                ...b,
                                [`&${m}-preview-active`]: {
                                    display: "block",
                                    transform: `translate3d(${p("bar-preview-offset")}, 0, 0)`
                                }
                            },
                            [`${m}-dragger`]: {
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
                            [`${m}-collapse-bar`]: {
                                width: e.fontSizeSM,
                                height: e.controlHeightSM,
                                "&-start": {
                                    left: {
                                        _skip_check_: !0,
                                        value: "auto"
                                    },
                                    right: {
                                        _skip_check_: !0,
                                        value: v
                                    },
                                    transform: "translateY(-50%)"
                                },
                                "&-end": {
                                    left: {
                                        _skip_check_: !0,
                                        value: v
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
                        [`> ${m}`]: {
                            height: 0,
                            [`${m}-preview`]: {
                                height: r,
                                width: "100%",
                                ...b,
                                [`&${m}-preview-active`]: {
                                    display: "block",
                                    transform: `translate3d(0, ${p("bar-preview-offset")}, 0)`
                                }
                            },
                            [`${m}-dragger`]: {
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
                            [`${m}-collapse-bar`]: {
                                height: e.fontSizeSM,
                                width: e.controlHeightSM,
                                "&-start": {
                                    top: "auto",
                                    bottom: v,
                                    transform: "translateX(-50%)"
                                },
                                "&-end": {
                                    top: v,
                                    bottom: "auto",
                                    transform: "translateX(-50%)"
                                }
                            }
                        }
                    },
                    [g]: {
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
        oO = e => {
            let {
                prefixCls: t,
                className: i,
                classNames: a,
                style: c,
                styles: d,
                layout: u,
                orientation: f,
                vertical: p,
                children: m,
                draggerIcon: h,
                collapsibleIcon: g,
                rootClassName: v,
                onResizeStart: y,
                onResize: $,
                onResizeEnd: S,
                lazy: k
            } = e, {
                getPrefixCls: w,
                direction: E,
                className: N,
                style: I,
                classNames: M,
                styles: z
            } = (0, s.useComponentConfig)("splitter"), R = w("splitter", t), T = w(), H = (0, C.default)(R), [P, L] = oB(R, H), [A, B] = (0, nH.useOrientation)(f, p, u), O = "rtl" === E, W = !B && O, D = n.useMemo(() => (0, eg.toArray)(m).filter(e => n.isValidElement(e)).map(e => {
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
            }), [m]), [F, _] = (0, n.useState)(), [j, X, q, V, G, Y] = function(e, t) {
                let l = e.map(e => e.size),
                    r = e.length,
                    i = t || 0,
                    a = e => e * i,
                    [s, c] = n.default.useState(() => e.map(e => e.defaultSize)),
                    d = n.default.useMemo(() => {
                        let e = [];
                        for (let t = 0; t < r; t += 1) e[t] = l[t] ? ? s[t];
                        return e
                    }, [r, s, l]),
                    u = n.default.useMemo(() => e.map(e => oT(e.min) ? oR(e.min) : (e.min || 0) / i), [e, i]),
                    f = n.default.useMemo(() => e.map(e => oT(e.max) ? oR(e.max) : (e.max || i) / i), [e, i]),
                    p = n.default.useMemo(() => {
                        let e = [];
                        for (let t = 0; t < r; t += 1) {
                            let n = d[t];
                            if (oT(n)) e[t] = oR(n);
                            else if (n || 0 === n) {
                                let l = Number(n);
                                Number.isNaN(l) || (e[t] = l / i)
                            } else e[t] = void 0
                        }
                        return function(e, t, n) {
                            let l = 0,
                                r = [];
                            e.forEach((e, t) => {
                                void 0 === e ? r.push(t) : l += e
                            });
                            let i = 1 - l,
                                a = r.length;
                            if (e.length && !r.length && 1 !== l) {
                                if (0 === l) {
                                    let t = 1 / e.length;
                                    return e.map(() => t)
                                }
                                let t = 1 / l;
                                return e.map(e => e * t)
                            }
                            if (i < 0) {
                                let t = 1 / l;
                                return e.map(e => void 0 === e ? 0 : e * t)
                            }
                            let s = 0,
                                c = 0,
                                d = 0,
                                u = 1;
                            for (let e of r) {
                                let l = t[e] || 0,
                                    r = n[e] || 1;
                                s += l, c += r, d = Math.max(d, l), u = Math.min(u, r)
                            }
                            if (s > 1 && c < 1) {
                                let t = 1 / a;
                                return e.map(e => void 0 === e ? t : e)
                            }
                            let f = i / a;
                            if (d <= f && f <= u) return e.map(e => void 0 === e ? f : e);
                            let p = (0, o.default)(e),
                                m = i - s;
                            for (let e = 0; e < a; e += 1) {
                                let l = r[e],
                                    o = t[l] || 0,
                                    i = n[l] || 1;
                                p[l] = o;
                                let a = Math.min(i - o, m);
                                p[l] += a, m -= a
                            }
                            return p
                        }(e, u, f)
                    }, [r, d, i, u, f]),
                    m = n.default.useMemo(() => p.map(a), [p, i]);
                return [n.default.useMemo(() => t ? m : d, [m, d, t]), m, p, u, f, c]
            }(D, F), U = n.useMemo(() => {
                let e = [];
                for (let t = 0; t < D.length - 1; t += 1) {
                    let n = D[t],
                        l = D[t + 1],
                        r = X[t],
                        o = X[t + 1],
                        {
                            resizable: i = !0,
                            min: a,
                            collapsible: s
                        } = n,
                        {
                            resizable: c = !0,
                            min: d,
                            collapsible: u
                        } = l,
                        f = i && c && (0 !== r || !a) && (0 !== o || !d),
                        p = !!s.end && r > 0,
                        m = !!u.start && 0 === o && r > 0,
                        h = p || m,
                        g = !!u.start && o > 0,
                        v = !!s.end && 0 === r && o > 0,
                        b = g || v,
                        y = oz({
                            collapsible: p,
                            showCollapsibleIcon: s.showCollapsibleIcon
                        }, {
                            collapsible: m,
                            showCollapsibleIcon: u.showCollapsibleIcon
                        }),
                        $ = oz({
                            collapsible: g,
                            showCollapsibleIcon: u.showCollapsibleIcon
                        }, {
                            collapsible: v,
                            showCollapsibleIcon: s.showCollapsibleIcon
                        });
                    e[t] = {
                        resizable: f,
                        startCollapsible: !!(W ? b : h),
                        endCollapsible: !!(W ? h : b),
                        showStartCollapsibleIcon: W ? $ : y,
                        showEndCollapsibleIcon: W ? y : $
                    }
                }
                return e
            }, [X, D, W]), [K, Q, Z, J, ee] = function(e, t, l, r, i, a) {
                let s = e.map(e => [e.min, e.max]),
                    c = r || 0,
                    d = e => e * c;

                function u(e, t) {
                    return "string" == typeof e ? d(oR(e)) : e ? ? t
                }
                let [f, p] = n.useState([]), m = n.useRef([]), [h, g] = n.useState(null);
                return [e => {
                    p(l.map(d)), g({
                        index: e,
                        confirmed: !1
                    })
                }, (e, n) => {
                    let l = null;
                    if ((!h || !h.confirmed) && 0 !== n) {
                        if (n > 0) l = e, g({
                            index: e,
                            confirmed: !0
                        });
                        else
                            for (let n = e; n >= 0; n -= 1)
                                if (f[n] > 0 && t[n].resizable) {
                                    l = n, g({
                                        index: n,
                                        confirmed: !0
                                    });
                                    break
                                }
                    }
                    let r = l ? ? h ? .index ? ? e,
                        a = (0, o.default)(f),
                        d = r + 1,
                        p = u(s[r][0], 0),
                        m = u(s[d][0], 0),
                        v = u(s[r][1], c),
                        b = u(s[d][1], c),
                        y = n;
                    return a[r] + y < p && (y = p - a[r]), a[d] - y < m && (y = a[d] - m), a[r] + y > v && (y = v - a[r]), a[d] - y > b && (y = a[d] - b), a[r] += y, a[d] -= y, i(a), a
                }, () => {
                    g(null)
                }, (e, t) => {
                    let n = l.map(d),
                        r = a ? "start" === t ? "end" : "start" : t,
                        o = "start" === r ? e : e + 1,
                        f = "start" === r ? e + 1 : e,
                        p = n[o],
                        h = n[f];
                    if (0 !== p && 0 !== h) n[o] = 0, n[f] += p, m.current[e] = p;
                    else {
                        let t = p + h,
                            l = u(s[o][0], 0),
                            r = u(s[o][1], c),
                            i = u(s[f][0], 0),
                            a = u(s[f][1], c),
                            d = Math.max(l, t - a),
                            g = Math.min(r, t - i),
                            v = i || (g - d) / 2,
                            b = m.current[e],
                            y = t - b;
                        b && b <= a && b >= i && y <= r && y >= l ? (n[f] = b, n[o] = y) : (n[o] -= v, n[f] += v)
                    }
                    return i(n), n
                }, h ? .index]
            }(D, U, q, F, Y, W), et = (0, b.useEvent)(e => {
                K(e), y ? .(X)
            }), en = (0, b.useEvent)((e, t, n) => {
                let l = Q(e, t);
                n ? S ? .(l) : $ ? .(l)
            }), el = (0, b.useEvent)(e => {
                Z(), e || S ? .(X)
            }), er = (0, b.useEvent)((t, n) => {
                let l = J(t, n);
                $ ? .(l), S ? .(l);
                let r = l.map(e => Math.abs(e) < Number.EPSILON);
                e.onCollapse ? .(r, l)
            }), eo = { ...e,
                vertical: B,
                orientation: A
            }, [ei, ea] = (0, x.useMergeSemantic)([M, a], [z, d], {
                props: eo
            }, {
                dragger: {
                    _default: "default"
                }
            }), es = (0, r.clsx)(R, i, `${R}-${A}`, {
                [`${R}-rtl`]: O
            }, v, ei.root, N, L, H, P), ec = `${R}-mask`, ed = n.default.useMemo(() => {
                let e = [],
                    t = 0,
                    n = D.length;
                for (let l = 0; l < n; l += 1) e.push(t += q[l]);
                return e
            }, [q, D.length]), eu = { ...ea.root,
                ...I,
                ...c
            };
            return n.default.createElement(l.default, {
                onResize: e => {
                    let {
                        offsetWidth: t,
                        offsetHeight: n
                    } = e, l = B ? n : t;
                    0 !== l && _(l)
                }
            }, n.default.createElement("div", {
                style: eu,
                className: es
            }, D.map((e, t) => {
                let l = { ...e,
                        className: (0, r.clsx)(ei.panel, e.className),
                        style: { ...ea.panel,
                            ...e.style
                        }
                    },
                    o = n.default.createElement(oM, { ...l,
                        prefixCls: R,
                        size: j[t]
                    }),
                    i = null,
                    a = U[t];
                if (a) {
                    let e = (ed[t - 1] || 0) + V[t],
                        l = (ed[t + 1] || 100) - G[t + 1],
                        r = (ed[t - 1] || 0) + G[t],
                        o = (ed[t + 1] || 100) - V[t + 1];
                    i = n.default.createElement(oL, {
                        lazy: k,
                        index: t,
                        active: ee === t,
                        prefixCls: R,
                        rootPrefixCls: T,
                        vertical: B,
                        resizable: a.resizable,
                        draggerStyle: ea.dragger,
                        draggerClassName: ei.dragger,
                        draggerIcon: h,
                        collapsibleIcon: g,
                        ariaNow: 100 * ed[t],
                        ariaMin: 100 * Math.max(e, l),
                        ariaMax: 100 * Math.min(r, o),
                        startCollapsible: a.startCollapsible,
                        endCollapsible: a.endCollapsible,
                        showStartCollapsibleIcon: a.showStartCollapsibleIcon,
                        showEndCollapsibleIcon: a.showEndCollapsibleIcon,
                        onOffsetStart: et,
                        onOffsetUpdate: (e, t, n, l) => {
                            let r = B ? n : t;
                            W && (r = -r), en(e, r, l)
                        },
                        onOffsetEnd: el,
                        onCollapse: er,
                        containerSize: F || 0
                    })
                }
                return n.default.createElement(n.default.Fragment, {
                    key: `split-panel-${t}`
                }, o, i)
            }), "number" == typeof ee && n.default.createElement("div", {
                "aria-hidden": !0,
                className: (0, r.clsx)(ec, `${ec}-${A}`)
            })))
        };
    oO.Panel = () => null;
    var oW = e.i(160226),
        oD = e.i(121229);

    function oF(e) {
        let {
            prefixCls: t,
            className: l,
            style: o,
            status: i
        } = e, a = `${t}-rail`;
        return n.createElement("div", {
            className: (0, r.clsx)(a, `${a}-${i}`, l),
            style: o
        })
    }
    let o_ = n.createContext({}),
        oj = n.createContext(null);

    function oX() {
        return (oX = Object.assign.bind()).apply(this, arguments)
    }
    let oq = n.createContext({}),
        oV = n.forwardRef((e, t) => {
            let {
                className: l,
                style: o,
                children: i,
                ...a
            } = e, {
                prefixCls: s,
                classNames: c,
                styles: d
            } = n.useContext(oj), {
                className: u,
                style: f
            } = n.useContext(oq), p = `${s}-item`;
            return n.createElement("div", oX({}, (0, eH.default)(a, !1), {
                ref: t,
                className: (0, r.clsx)(`${p}-icon`, c.itemIcon, u, l),
                style: { ...d.itemIcon,
                    ...f,
                    ...o
                }
            }), i)
        });

    function oG() {
        return (oG = Object.assign.bind()).apply(this, arguments)
    }

    function oY(e) {
        let {
            prefixCls: t,
            classNames: l,
            styles: o,
            data: i,
            last: a,
            nextStatus: s,
            active: c,
            index: d,
            itemRender: u,
            iconRender: f,
            itemWrapperRender: p,
            onClick: m
        } = e, h = `${t}-item`, {
            railFollowPrevStatus: g
        } = n.useContext(o_), {
            ItemComponent: v
        } = n.useContext(oj), {
            onClick: b,
            title: y,
            subTitle: $,
            content: x,
            description: S,
            disabled: C,
            icon: k,
            status: w,
            className: E,
            style: N,
            classNames: I = {},
            styles: M = {},
            ...z
        } = i, R = x ? ? S, T = {
            item: { ...i,
                content: R
            },
            index: d,
            active: c
        }, H = {};
        (m || b) && !C && (H.role = "button", H.tabIndex = 0, H.onClick = e => {
            b ? .(e), m(d)
        }, H.onKeyDown = e => {
            let {
                which: t
            } = e;
            (t === tX.default.ENTER || t === tX.default.SPACE) && m(d)
        });
        let P = null != y,
            L = null != $,
            A = (0, r.clsx)(h, `${h}-${w||"wait"}`, {
                [`${h}-custom`]: k,
                [`${h}-active`]: c,
                [`${h}-disabled`]: !0 === C,
                [`${h}-empty-header`]: !P && !L
            }, E, l.item, I.root),
            B = n.createElement(oV, null);
        f && (B = f(B, { ...T,
            components: {
                Icon: oV
            }
        }));
        let O = n.createElement("div", {
                className: (0, r.clsx)(`${h}-wrapper`, l.itemWrapper, I.wrapper),
                style: { ...o.itemWrapper,
                    ...M.wrapper
                }
            }, n.createElement(oq.Provider, {
                value: {
                    className: I.icon,
                    style: M.icon
                }
            }, B), n.createElement("div", {
                className: (0, r.clsx)(`${h}-section`, l.itemSection, I.section),
                style: { ...o.itemSection,
                    ...M.section
                }
            }, n.createElement("div", {
                className: (0, r.clsx)(`${h}-header`, l.itemHeader, I.header),
                style: { ...o.itemHeader,
                    ...M.header
                }
            }, P && n.createElement("div", {
                className: (0, r.clsx)(`${h}-title`, l.itemTitle, I.title),
                style: { ...o.itemTitle,
                    ...M.title
                }
            }, y), L && n.createElement("div", {
                title: "string" == typeof $ ? $ : void 0,
                className: (0, r.clsx)(`${h}-subtitle`, l.itemSubtitle, I.subtitle),
                style: { ...o.itemSubtitle,
                    ...M.subtitle
                }
            }, $), !a && n.createElement(oF, {
                prefixCls: h,
                className: (0, r.clsx)(l.itemRail, I.rail),
                style: { ...o.itemRail,
                    ...M.rail
                },
                status: g ? w : s
            })), null != R && n.createElement("div", {
                className: (0, r.clsx)(`${h}-content`, l.itemContent, I.content),
                style: { ...o.itemContent,
                    ...M.content
                }
            }, R))),
            W = n.createElement(v, oG({}, z, H, {
                className: A,
                style: { ...o.item,
                    ...M.root,
                    ...N
                }
            }), p ? p(O) : O);
        return u && (W = u(W, T) || null), W
    }

    function oU() {
        return (oU = Object.assign.bind()).apply(this, arguments)
    }
    let oK = {},
        oQ = function(e) {
            let {
                prefixCls: t = "rc-steps",
                style: l,
                className: o,
                classNames: i = oK,
                styles: a = oK,
                rootClassName: s,
                orientation: c,
                titlePlacement: d,
                components: u,
                status: f = "process",
                current: p = 0,
                initial: m = 0,
                onChange: h,
                items: g,
                iconRender: v,
                itemRender: b,
                itemWrapperRender: y,
                ...$
            } = e, x = "vertical" === c, S = (0, r.clsx)(t, `${t}-${x?"vertical":"horizontal"}`, `${t}-title-${x||"vertical"!==d?"horizontal":"vertical"}`, s, o, i.root), C = n.default.useMemo(() => (g || []).filter(Boolean), [g]), k = n.default.useMemo(() => C.map((e, t) => {
                let {
                    status: n
                } = e, l = m + t;
                return n ? n : l === p ? f : l < p ? "finish" : "wait"
            }), [C, f, p, m]), w = e => {
                h && p !== e && h(e)
            }, {
                root: E = "div",
                item: N = "div"
            } = u || {}, I = n.default.useMemo(() => ({
                prefixCls: t,
                classNames: i,
                styles: a,
                ItemComponent: N
            }), [t, i, a, N]);
            return n.default.createElement(E, oU({
                className: S,
                style: { ...l,
                    ...a ? .root
                }
            }, $), n.default.createElement(oj.Provider, {
                value: I
            }, C.map((e, l) => {
                let r = m + l,
                    o = k[l],
                    s = k[l + 1],
                    c = { ...e,
                        status: o
                    };
                return n.default.createElement(oY, {
                    key: r,
                    prefixCls: t,
                    classNames: i,
                    styles: a,
                    data: c,
                    nextStatus: s,
                    active: r === p,
                    index: r,
                    last: C.length - 1 === l,
                    iconRender: v,
                    itemRender: b,
                    itemWrapperRender: y,
                    onClick: h && w
                })
            })))
        };
    var oZ = e.i(121872),
        oJ = e.i(26905);
    let o0 = n.createContext(null),
        o1 = e => {
            let {
                prefixCls: t
            } = e;
            return n.createElement("svg", {
                className: `${t}-panel-arrow`,
                viewBox: "0 0 100 100",
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "none"
            }, n.createElement("title", null, "Arrow"), n.createElement("path", {
                d: "M 0 0 L 100 50 L 0 100"
            }))
        },
        o2 = e => {
            let {
                prefixCls: t,
                rootPrefixCls: l,
                children: o,
                percent: i
            } = e, a = `${t}-item-progress-icon`, s = `${a}-circle`, [, d] = (0, c.genCssVar)(l, "cmp-steps"), u = `calc(${d("progress-radius")} * 2 * ${Math.PI*i/100}) 9999`;
            return n.createElement(n.Fragment, null, n.createElement("svg", {
                className: `${a}-svg`,
                viewBox: "0 0 100 100",
                width: "100%",
                height: "100%",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-valuemax": 100,
                "aria-valuemin": 0,
                "aria-valuenow": i
            }, n.createElement("title", null, "Progress"), n.createElement("circle", {
                className: (0, r.clsx)(s, `${s}-rail`)
            }), n.createElement("circle", {
                className: (0, r.clsx)(s, `${s}-ptg`),
                strokeDasharray: u,
                transform: "rotate(-90 50 50)"
            })), o)
        },
        o3 = (e, t, n) => {
            let {
                calc: l,
                componentCls: r,
                descriptionMaxWidth: o,
                antCls: i
            } = e, a = `${r}-item`, [, s] = (0, c.genCssVar)(i, "cmp-steps");
            return {
                [`@container style(${(o||"--ant-not-exist").replace(/var\((.*)\)/,"$1")})`]: [{
                    [`${a}-icon`]: {
                        marginInlineStart: l(o).sub(s("icon-size")).div(2).equal()
                    },
                    [`${a}-rail`]: {
                        width: "auto",
                        insetInlineStart: l(o).add(s("icon-size")).div(2).add(t).equal(),
                        insetInlineEnd: l(o).sub(s("icon-size")).div(2).sub(t).mul(-1).equal()
                    }
                }, n]
            }
        },
        o4 = "wait",
        o8 = "process",
        o5 = "finish",
        o6 = "error",
        o9 = (0, c.genStyleHooks)("Steps", e => {
            let t = (0, I.mergeToken)(e, {
                inlineDotSize: 6
            });
            return [(e => {
                let {
                    componentCls: t,
                    antCls: n
                } = e, l = `${t}-item`, [r, o] = (0, c.genCssVar)(n, "cmp-steps");
                return {
                    [t]: {
                        [r("title-font-size")]: e.fontSizeLG,
                        [r("title-line-height")]: e.lineHeightLG,
                        [r("subtitle-font-size")]: e.fontSize,
                        [r("subtitle-line-height")]: e.lineHeight,
                        [r("item-wrapper-padding-top")]: "0px",
                        [r("rail-size")]: e.lineWidth,
                        [r("rail-line-style")]: e.lineType,
                        ...(0, N.resetComponent)(e),
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "flex-start",
                        [l]: {
                            flex: "none",
                            position: "relative"
                        },
                        [`${l}-wrapper`]: {
                            display: "flex",
                            flexWrap: "nowrap",
                            paddingTop: o("item-wrapper-padding-top")
                        },
                        [`${l}-header`]: {
                            display: "flex",
                            flexWrap: "nowrap",
                            alignItems: "center"
                        },
                        [`${l}-title`]: {
                            color: e.colorText,
                            fontSize: o("title-font-size"),
                            lineHeight: o("title-line-height"),
                            wordBreak: "break-word"
                        },
                        [`${l}-subtitle`]: {
                            color: e.colorTextDescription,
                            fontWeight: "normal",
                            fontSize: o("subtitle-font-size"),
                            lineHeight: o("subtitle-line-height"),
                            marginInlineStart: e.marginXS,
                            wordBreak: "break-word"
                        },
                        [`${l}-content`]: {
                            color: e.colorTextDescription,
                            fontSize: e.fontSize,
                            lineHeight: e.lineHeight,
                            wordBreak: "break-word"
                        },
                        [`${l}-rail`]: {
                            borderStyle: o("rail-line-style"),
                            borderWidth: 0
                        },
                        [`${l}-title, ${l}-subtitle, ${l}-content, ${l}-rail`]: {
                            transition: `all ${e.motionDurationSlow}`
                        },
                        [`&${t}-ellipsis`]: {
                            [`${l}-title, ${l}-subtitle, ${l}-content`]: N.textEllipsis
                        },
                        [`${l}[role='button']:not(${l}-active):hover`]: {
                            cursor: "pointer"
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    customIconFontSize: n,
                    motionDurationSlow: l,
                    iconSize: r,
                    lineWidth: o,
                    lineType: i,
                    antCls: a
                } = e, s = `${t}-item`, [d, u] = (0, c.genCssVar)(a, "cmp-steps");
                return {
                    [t]: {
                        [d("icon-size")]: r,
                        [d("icon-border-width")]: o,
                        [`${s}-icon`]: {
                            width: u("icon-size"),
                            height: u("icon-size"),
                            margin: 0,
                            flex: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: e.iconFontSize,
                            fontFamily: e.fontFamily,
                            lineHeight: u("icon-size"),
                            textAlign: "center",
                            borderRadius: u("icon-size"),
                            border: `${u("icon-border-width")} ${i} transparent`,
                            transition: ["background-color", "border", "color", "inset", "transform"].map(e => `${e} ${l}`).join(", "),
                            zIndex: 1
                        },
                        [`${s}-custom ${s}-icon`]: {
                            background: "none",
                            border: 0,
                            fontSize: n
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    marginXXS: n,
                    paddingSM: l,
                    controlHeight: r,
                    antCls: o,
                    calc: i
                } = e, a = `${t}-item`, [s, d] = (0, c.genCssVar)(o, "cmp-steps");
                return {
                    [`${t}-vertical`]: {
                        [s("vertical-rail-margin")]: i(n).mul(1.5).equal(),
                        flexDirection: "column",
                        alignItems: "stretch",
                        [`> ${a}`]: {
                            minHeight: i(r).mul(1.5).equal(),
                            paddingBottom: l,
                            "&:last-child": {
                                paddingBottom: 0
                            },
                            [`${a}-icon`]: {
                                marginInlineStart: `calc((${d("icon-size-max")} - ${d("icon-size")}) / 2)`
                            },
                            [`${a}-rail`]: {
                                [s("rail-offset")]: i(d("heading-height")).sub(d("icon-size")).div(2).equal(),
                                borderInlineStartWidth: d("rail-size"),
                                position: "absolute",
                                top: i(d("icon-size")).add(d("item-wrapper-padding-top")).add(d("rail-offset")).add(d("vertical-rail-margin")).equal(),
                                insetInlineStart: i(d("icon-size-max")).div(2).equal(),
                                bottom: i(d("vertical-rail-margin")).sub(d("rail-offset")).equal(),
                                marginInlineStart: `calc(${d("rail-size")} / -2)`
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    antCls: n
                } = e, l = `${t}-item`, [r, o] = (0, c.genCssVar)(n, "cmp-steps");
                return {
                    [`${t}-horizontal`]: {
                        [`> ${l}`]: {
                            flex: "1 1 auto",
                            minWidth: e.iconSize,
                            [`${l}-rail`]: {
                                [r("horizontal-rail-margin")]: `calc(${o("icon-size-max")} / 2 + ${o("item-wrapper-padding-top")})`,
                                position: "static",
                                marginTop: o("horizontal-rail-margin"),
                                width: "auto",
                                borderBlockStartWidth: o("rail-size"),
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
                    margin: o,
                    paddingSM: i,
                    marginXXS: a,
                    antCls: s,
                    calc: d
                } = e, u = `${t}-item`, [f, p] = (0, c.genCssVar)(s, "cmp-steps");
                return {
                    [t]: {
                        [f("icon-size-max")]: `max(${p("icon-size")}, ${p("icon-size-active",p("icon-size"))})`,
                        [`${u}-icon`]: {
                            marginBlockStart: `calc((${p("heading-height")} - ${p("icon-size")}) / 2)`
                        }
                    },
                    [`${t}-title-horizontal`]: {
                        [f("title-horizontal-item-margin")]: o,
                        [f("title-horizontal-rail-margin")]: o,
                        [f("title-horizontal-title-height")]: r,
                        [f("heading-height")]: `max(${p("icon-size")}, ${p("title-horizontal-title-height")})`,
                        [`&${t}-horizontal, &${t}-horizontal-alternate`]: {
                            [`${u}:not(:first-child)`]: {
                                marginInlineStart: p("title-horizontal-item-margin")
                            },
                            [`${u}:last-child`]: {
                                flex: "0 1 auto"
                            },
                            [`${u}-wrapper`]: {
                                columnGap: e.marginXS
                            }
                        },
                        [`&${t}-vertical`]: {
                            [`${u}-wrapper`]: {
                                columnGap: e.margin
                            },
                            [`${u}-empty-header`]: {
                                [`${u}-header`]: {
                                    minHeight: "auto"
                                },
                                [`${u}-content`]: {
                                    marginTop: d(p("heading-height")).sub(e.fontHeight).div(2).equal()
                                }
                            }
                        },
                        [`${u}-section`]: {
                            flex: 1,
                            minWidth: 0
                        },
                        [`${u}-header`]: {
                            minHeight: p("heading-height")
                        },
                        [`${u}-title`]: {
                            flex: "0 1 auto"
                        },
                        [`${u}-content`]: {
                            maxWidth: n
                        },
                        [`${u}-subtitle`]: {
                            flex: "0 9999 auto"
                        },
                        [`&${t}-horizontal ${u}-rail`]: {
                            [f("item-wrapper-padding-top")]: "0px",
                            flex: "1 1 0%",
                            marginInlineStart: p("title-horizontal-rail-margin")
                        }
                    },
                    [`${t}-title-vertical`]: {
                        [f("title-vertical-row-gap")]: i,
                        [f("title-horizontal-rail-gap")]: a,
                        [f("heading-height")]: p("icon-size-max"),
                        [`> ${u}`]: {
                            flex: "1 1 0%",
                            [`${u}-wrapper`]: {
                                flexDirection: "column",
                                rowGap: p("title-vertical-row-gap"),
                                alignItems: "center"
                            },
                            [`${u}-section`]: {
                                alignSelf: "stretch"
                            },
                            [`${u}-header`]: {
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            [`${u}-title, ${u}-subtitle, ${u}-content`]: {
                                textAlign: "center",
                                maxWidth: "100%"
                            },
                            [`${u}-subtitle`]: {
                                margin: 0
                            },
                            [`${u}-rail`]: {
                                position: "absolute",
                                top: 0,
                                width: `calc(100% - ${p("icon-size")} - ${p("title-horizontal-rail-gap")} * 2)`,
                                insetInlineStart: `calc(50% + ${p("icon-size")} / 2 + ${p("title-horizontal-rail-gap")})`
                            }
                        },
                        ...o3(e, l, {
                            [`${u}:last-child`]: {
                                flex: "none"
                            },
                            [`${u}-icon`]: {
                                alignSelf: "flex-start"
                            },
                            [`${u}-section`]: {
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
                    marginXS: o,
                    fontHeight: i,
                    marginSM: a,
                    paddingXS: s,
                    antCls: d
                } = e, [u] = (0, c.genCssVar)(d, "cmp-steps");
                return {
                    [`${t}${t}-small`]: {
                        [u("icon-size")]: n,
                        [u("title-horizontal-item-margin")]: a,
                        [u("title-vertical-row-gap")]: s,
                        [u("title-font-size")]: l,
                        [u("title-line-height")]: r,
                        [u("title-horizontal-rail-margin")]: o,
                        [u("title-horizontal-title-height")]: i,
                        [`&${t}-horizontal${t}-title-vertical`]: o3(e, o)
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    iconSize: n,
                    dotSize: l,
                    dotCurrentSize: r,
                    marginXXS: o,
                    lineWidthBold: i,
                    fontSizeSM: a,
                    antCls: s
                } = e, d = `${t}-item`, [u, f] = (0, c.genCssVar)(s, "cmp-steps");
                return {
                    [`${t}${t}-dot`]: {
                        [u("icon-size-active")]: r,
                        [u("icon-size")]: l,
                        [u("dot-icon-size")]: l,
                        [u("dot-icon-border-width")]: i,
                        [u("rail-size")]: i,
                        [u("icon-border-width")]: i,
                        [`${d}-custom ${d}-icon`]: {
                            fontSize: a
                        },
                        [`${d}-icon`]: {
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
                        [`${d}-active ${d}-icon`]: {
                            [u("icon-size")]: f("icon-size-active")
                        },
                        [`&${t}-horizontal`]: {
                            [`&, &${t}-small`]: o3(e, o)
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
                    colorError: i,
                    colorErrorHover: a,
                    colorErrorBgFilledHover: s,
                    colorFillTertiary: d,
                    colorErrorBg: u,
                    colorPrimaryBgHover: f,
                    colorPrimaryBg: p,
                    colorText: m,
                    colorTextDescription: h,
                    colorBgContainer: g,
                    colorPrimaryHover: v,
                    lineType: b,
                    antCls: y
                } = e, $ = `${t}-item`, [x, S] = (0, c.genCssVar)(y, "cmp-steps");
                return {
                    [t]: [{
                        [$]: {
                            [x("item-solid-line-color")]: "#000",
                            [x("item-title-color")]: "#000",
                            [x("item-content-color")]: "#000",
                            [x("item-subtitle-color")]: S("item-content-color"),
                            [x("item-icon-custom-color")]: "#000",
                            [x("item-icon-bg-color")]: "#000",
                            [x("item-icon-border-color")]: "#000",
                            [x("item-icon-text-color")]: "#fff",
                            [x("item-icon-dot-color")]: "#000",
                            [x("item-icon-dot-bg-color")]: S("item-icon-dot-color"),
                            [x("item-icon-dot-border-color")]: S("item-icon-dot-color"),
                            [x("item-text-hover-color")]: "#000",
                            [x("item-icon-bg-hover-color")]: S("item-icon-bg-color"),
                            [x("item-icon-border-hover-color")]: S("item-icon-border-color"),
                            [x("item-icon-text-hover-color")]: S("item-icon-text-color"),
                            [x("item-content-active-color")]: S("item-content-color"),
                            [x("item-icon-active-bg-color")]: S("item-icon-bg-color"),
                            [x("item-icon-active-border-color")]: S("item-icon-border-color"),
                            [x("item-icon-active-text-color")]: S("item-icon-text-color"),
                            [x("item-process-rail-line-style")]: b
                        },
                        [`${$}-rail`]: {
                            borderColor: S("item-solid-line-color")
                        },
                        [`${$}-custom ${$}-icon`]: {
                            color: S("item-icon-custom-color")
                        },
                        [`${$}-title`]: {
                            color: S("item-title-color")
                        },
                        [`${$}-subtitle`]: {
                            color: S("item-subtitle-color")
                        },
                        [`${$}-content`]: {
                            color: S("item-content-color")
                        },
                        [`${$}-active ${$}-icon`]: {},
                        [`${$}-active ${$}-content`]: {
                            color: S("item-content-active-color")
                        },
                        [`${$}[role='button']:not(${$}-active):hover`]: {
                            [`${$}-title, ${$}-content`]: {
                                color: S("item-text-hover-color")
                            }
                        },
                        [`&:not(${t}-dot)`]: {
                            [`${$}:not(${$}-custom)`]: {
                                [`${$}-icon`]: {
                                    background: S("item-icon-bg-color"),
                                    borderColor: S("item-icon-border-color"),
                                    color: S("item-icon-text-color")
                                },
                                [`&[role='button']:not(${$}-active):hover`]: {
                                    [`${$}-icon`]: {
                                        background: S("item-icon-bg-hover-color"),
                                        borderColor: S("item-icon-border-hover-color"),
                                        color: S("item-icon-text-hover-color")
                                    }
                                },
                                [`&${$}-active`]: {
                                    [`${$}-icon`]: {
                                        background: S("item-icon-active-bg-color"),
                                        borderColor: S("item-icon-active-border-color"),
                                        color: S("item-icon-active-text-color")
                                    }
                                }
                            }
                        },
                        [`&${t}-dot`]: {
                            [`${$}-icon`]: {
                                background: S("item-icon-dot-bg-color"),
                                borderColor: S("item-icon-dot-border-color"),
                                color: S("item-icon-dot-color"),
                                [`&${$}-icon-dot-custom`]: {
                                    background: "transparent",
                                    border: "none"
                                }
                            }
                        }
                    }, {
                        [`${$}-${o4}`]: {
                            [x("item-icon-custom-color")]: n,
                            [x("item-title-color")]: h,
                            [x("item-content-color")]: h,
                            [x("item-content-active-color")]: m,
                            [x("item-text-hover-color")]: v
                        },
                        [`${$}-rail-${o4}`]: {
                            [x("item-solid-line-color")]: n
                        },
                        [`${$}-${o8}`]: {
                            [x("item-icon-custom-color")]: r,
                            [x("item-title-color")]: m,
                            [x("item-content-color")]: h,
                            [x("item-content-active-color")]: m,
                            [x("item-text-hover-color")]: v
                        },
                        [`${$}-rail-${o8}`]: {
                            [x("item-solid-line-color")]: r,
                            [x("rail-line-style")]: S("item-process-rail-line-style")
                        },
                        [`${$}-${o5}`]: {
                            [x("item-icon-custom-color")]: r,
                            [x("item-title-color")]: m,
                            [x("item-content-color")]: h,
                            [x("item-content-active-color")]: m,
                            [x("item-text-hover-color")]: v
                        },
                        [`${$}-rail-${o5}`]: {
                            [x("item-solid-line-color")]: r
                        },
                        [`${$}-${o6}`]: {
                            [x("item-icon-custom-color")]: i,
                            [x("item-title-color")]: i,
                            [x("item-content-color")]: i,
                            [x("item-content-active-color")]: i,
                            [x("item-text-hover-color")]: a
                        },
                        [`${$}-rail-${o6}`]: {
                            [x("item-solid-line-color")]: i
                        }
                    }, {
                        [`&${t}-filled`]: {
                            [$]: {
                                [x("item-icon-dot-border-color")]: "transparent"
                            },
                            [`${$}-${o4}`]: {
                                [x("item-icon-bg-color")]: d,
                                [x("item-icon-border-color")]: "transparent",
                                [x("item-icon-text-color")]: o,
                                [x("item-icon-dot-bg-color")]: n,
                                [x("item-icon-bg-hover-color")]: f,
                                [x("item-icon-border-hover-color")]: "transparent",
                                [x("item-icon-text-hover-color")]: r,
                                [x("item-icon-active-bg-color")]: r,
                                [x("item-icon-active-border-color")]: "transparent",
                                [x("item-icon-active-text-color")]: l
                            },
                            [`${$}-${o8}, ${$}-${o5}`]: {
                                [x("item-icon-bg-color")]: p,
                                [x("item-icon-border-color")]: "transparent",
                                [x("item-icon-text-color")]: r,
                                [x("item-icon-dot-bg-color")]: r,
                                [x("item-icon-bg-hover-color")]: f,
                                [x("item-icon-border-hover-color")]: "transparent",
                                [x("item-icon-text-hover-color")]: r,
                                [x("item-icon-active-bg-color")]: r,
                                [x("item-icon-active-border-color")]: "transparent",
                                [x("item-icon-active-text-color")]: l
                            },
                            [`${$}-${o6}`]: {
                                [x("item-icon-bg-color")]: u,
                                [x("item-icon-border-color")]: "transparent",
                                [x("item-icon-text-color")]: i,
                                [x("item-icon-dot-bg-color")]: i,
                                [x("item-icon-bg-hover-color")]: s,
                                [x("item-icon-border-hover-color")]: "transparent",
                                [x("item-icon-text-hover-color")]: i,
                                [x("item-icon-active-bg-color")]: i,
                                [x("item-icon-active-border-color")]: "transparent",
                                [x("item-icon-active-text-color")]: l
                            }
                        }
                    }, {
                        [`&${t}-outlined`]: {
                            [$]: {
                                [x("item-icon-dot-bg-color")]: "transparent"
                            },
                            [`${$}-${o4}`]: {
                                [x("item-icon-bg-color")]: g,
                                [x("item-icon-border-color")]: n,
                                [x("item-icon-text-color")]: n,
                                [x("item-icon-dot-color")]: n,
                                [x("item-icon-bg-hover-color")]: "transparent",
                                [x("item-icon-border-hover-color")]: v,
                                [x("item-icon-text-hover-color")]: v,
                                [x("item-icon-active-bg-color")]: d
                            },
                            [`${$}-${o8}, ${$}-${o5}`]: {
                                [x("item-icon-bg-color")]: g,
                                [x("item-icon-border-color")]: r,
                                [x("item-icon-text-color")]: r,
                                [x("item-icon-dot-color")]: r,
                                [x("item-icon-bg-hover-color")]: "transparent",
                                [x("item-icon-border-hover-color")]: v,
                                [x("item-icon-text-hover-color")]: v,
                                [x("item-icon-active-bg-color")]: p
                            },
                            [`${$}-${o6}`]: {
                                [x("item-icon-bg-color")]: g,
                                [x("item-icon-border-color")]: i,
                                [x("item-icon-text-color")]: i,
                                [x("item-icon-dot-color")]: i,
                                [x("item-icon-bg-hover-color")]: "transparent",
                                [x("item-icon-border-hover-color")]: a,
                                [x("item-icon-text-hover-color")]: a,
                                [x("item-icon-active-bg-color")]: u
                            }
                        }
                    }]
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    fontSizeIcon: n,
                    navContentMaxWidth: l,
                    navArrowColor: r,
                    colorPrimary: o,
                    motionDurationSlow: i,
                    antCls: a,
                    calc: s
                } = e, d = `${t}-item`, [u, f] = (0, c.genCssVar)(a, "cmp-steps");
                return {
                    [`${t}${t}-navigation`]: {
                        [d.repeat(4)]: {
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                            flex: 1,
                            marginInlineStart: 0,
                            [`${d}-wrapper`]: {
                                paddingBlock: e.paddingSM
                            },
                            [`${d}-section`]: {
                                maxWidth: l
                            },
                            [`${d}-rail`]: {
                                display: "none"
                            },
                            "&:before": {
                                position: "absolute",
                                display: "block",
                                backgroundColor: o,
                                transition: `all ${i}`,
                                transitionTimingFunction: "ease-out",
                                content: '""'
                            },
                            "&:not(:last-child):after": {
                                position: "absolute",
                                display: "block",
                                borderTop: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${r}`,
                                borderBottom: "none",
                                borderInlineStart: "none",
                                borderInlineEnd: `${(0,E.unit)(e.lineWidth)} ${e.lineType} ${r}`,
                                content: '""'
                            },
                            [`&${d}-active`]: {
                                [u("item-content-active-color")]: f("item-content-color"),
                                [u("item-icon-active-bg-color")]: f("item-icon-bg-color"),
                                [u("item-icon-active-border-color")]: f("item-icon-border-color"),
                                [u("item-icon-active-text-color")]: f("item-icon-text-color")
                            }
                        },
                        [`&${t}-horizontal`]: {
                            [d]: {
                                "&:before": {
                                    bottom: 0,
                                    insetInlineStart: "50%",
                                    width: 0,
                                    height: e.lineWidthBold
                                },
                                [`&${d}-active:before`]: {
                                    insetInlineStart: 0,
                                    width: "100%"
                                },
                                "&:not(:last-child):after": {
                                    top: "50%",
                                    insetInlineStart: s(n).div(2).mul(-1).add("100%").equal(),
                                    width: n,
                                    height: n,
                                    transform: "translateY(-50%) rotate(45deg)"
                                }
                            }
                        },
                        [`&${t}-vertical`]: {
                            [d.repeat(4)]: {
                                [`${d}-content`]: {
                                    padding: 0
                                },
                                "&:before": {
                                    insetInlineEnd: 0,
                                    top: "50%",
                                    width: e.lineWidthBold,
                                    height: 0
                                },
                                [`&${d}-active::before`]: {
                                    top: 0,
                                    height: "100%"
                                },
                                "&:not(:last-child):after": {
                                    left: {
                                        _skip_check_: !0,
                                        value: "50%"
                                    },
                                    top: "100%",
                                    width: s(n).div(3).mul(2).equal(),
                                    height: s(n).div(3).mul(2).equal(),
                                    transform: "translateY(-50%) translateX(-50%) rotate(135deg)"
                                }
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    lineWidthBold: n,
                    borderRadius: l,
                    borderRadiusSM: r,
                    motionDurationMid: o,
                    paddingXS: i,
                    lineType: a,
                    paddingSM: s,
                    antCls: d,
                    calc: u
                } = e, f = `${t}-item`, [p, m] = (0, c.genCssVar)(d, "cmp-steps"), h = `${(0,E.unit)(n)} ${a} ${m("panel-border-color")}`;
                return {
                    [`${t}${t}-panel`]: [{
                        [`${f}-rail`]: {
                            display: "none"
                        },
                        [`&${t}-horizontal`]: {
                            alignItems: "stretch",
                            [f]: {
                                flex: 1,
                                margin: 0
                            }
                        }
                    }, {
                        "&": {
                            [p("panel-padding")]: s,
                            [p("item-border-radius")]: l,
                            [f]: {
                                [p("panel-bg-color")]: m("item-icon-bg-color"),
                                [p("panel-border-color")]: m("item-icon-border-color"),
                                [p("panel-active-bg-color")]: m("item-icon-active-bg-color"),
                                [p("panel-active-border-color")]: m("item-icon-active-border-color"),
                                [p("panel-title-height")]: `calc(${m("title-font-size")} * ${m("title-line-height")})`,
                                [p("item-base-height")]: u(m("panel-padding")).mul(2).add(m("icon-size")).add(m("panel-title-height")).equal(),
                                [p("item-base-width")]: `calc(${m("item-base-height")} * 0.7071)`,
                                transition: `background-color ${o}`
                            }
                        },
                        [`${f}-icon`]: {
                            display: "none"
                        },
                        [`${f}-header`]: {
                            minHeight: "auto"
                        },
                        [`${t}-panel-arrow`]: {
                            position: "absolute",
                            top: u(n).mul(-1).equal(),
                            insetInlineStart: "100%",
                            zIndex: 1,
                            height: u(n).mul(2).add("100%").equal(),
                            width: m("item-base-width"),
                            overflow: "visible",
                            strokeLinecap: "round",
                            path: {
                                fill: m("panel-bg-color"),
                                stroke: m("panel-border-color"),
                                strokeWidth: n,
                                vectorEffect: "non-scaling-stroke",
                                transition: `fill ${o}`
                            }
                        },
                        [`${f}:last-child ${t}-panel-arrow`]: {
                            display: "none"
                        },
                        [f]: {
                            padding: m("panel-padding"),
                            background: m("panel-bg-color"),
                            position: "relative",
                            borderBlock: h,
                            "&:not(:first-child)": {
                                paddingInlineStart: `calc(${m("panel-padding")} + ${m("item-base-width")})`
                            },
                            "&:first-child": {
                                borderInlineStart: h,
                                borderStartStartRadius: m("item-border-radius"),
                                borderEndStartRadius: m("item-border-radius")
                            },
                            "&:last-child": {
                                borderInlineEnd: h,
                                borderStartEndRadius: m("item-border-radius"),
                                borderEndEndRadius: m("item-border-radius")
                            },
                            "&-active": {
                                background: m("panel-active-bg-color"),
                                borderColor: m("panel-active-border-color"),
                                [`${t}-panel-arrow`]: {
                                    path: {
                                        fill: m("panel-active-bg-color"),
                                        stroke: m("panel-active-border-color")
                                    }
                                },
                                [`${f}-title, ${f}-subtitle, ${f}-content`]: {
                                    color: m("item-icon-active-text-color")
                                }
                            }
                        }
                    }, {
                        [`&${t}-small`]: {
                            [p("panel-padding")]: i,
                            [p("item-border-radius")]: r
                        }
                    }, {
                        [`&${t}-filled`]: {
                            [f]: {
                                "&:not(:first-child)": {
                                    clipPath: `polygon(${(0,E.unit)(n)} 0,calc(100% + ${m("item-base-width")}) 0,calc(100% + ${m("item-base-width")}) 100%,${(0,E.unit)(n)} 100%,calc(${m("item-base-width")} + ${(0,E.unit)(n)}) 50%)`
                                }
                            }
                        }
                    }, {
                        [`&${t}-outlined`]: {
                            [`${t}-panel-arrow`]: {
                                top: u(n).div(2).mul(-1).equal(),
                                height: u(n).add("100%").equal()
                            }
                        }
                    }]
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    inlineDotSize: n,
                    paddingXS: l,
                    lineWidth: r,
                    antCls: o,
                    calc: i
                } = e, a = i(l).add(r).equal(), s = `${t}-item`, [d, u] = (0, c.genCssVar)(o, "cmp-steps");
                return {
                    [`${t}-inline`]: {
                        [d("items-offset")]: "0",
                        [d("item-wrapper-padding-top")]: a,
                        display: "inline-flex",
                        "&:before": {
                            content: '""',
                            flex: u("items-offset")
                        },
                        [s]: {
                            [d("title-vertical-row-gap")]: l,
                            [d("icon-size")]: n,
                            [d("icon-size-active")]: n,
                            [d("title-font-size")]: e.fontSizeSM,
                            [d("title-line-height")]: e.lineHeightSM,
                            [d("item-title-color")]: e.colorTextSecondary,
                            [d("subtitle-font-size")]: e.fontSizeSM,
                            [d("subtitle-line-height")]: e.lineHeightSM,
                            [d("item-subtitle-color")]: e.colorTextQuaternary,
                            [d("rail-size")]: e.lineWidth,
                            [d("title-horizontal-rail-gap")]: "0px",
                            flex: 1,
                            "&-wrapper": {
                                paddingInline: e.paddingXXS,
                                marginInline: e.calc(e.marginXXS).div(2).equal(),
                                borderRadius: e.borderRadiusSM,
                                cursor: "pointer",
                                transition: `background-color ${e.motionDurationMid}`,
                                "&:hover": {
                                    background: e.controlItemBgHover
                                }
                            },
                            "&-icon": {
                                [`${s}-icon-dot`]: {
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
                    lineWidthBold: r,
                    motionDurationSlow: o
                } = e, i = `${l}-item`, [a, s] = (0, c.genCssVar)(n, "cmp-steps"), d = t(r).add(r).equal();
                return {
                    [`${l}${l}-with-progress`]: {
                        [a("item-wrapper-padding-top")]: d,
                        [`${i}${i}-process`]: {
                            [`${i}-icon`]: {
                                position: "relative"
                            }
                        },
                        [`${i}-progress-icon`]: {
                            "&-svg": {
                                [a("svg-size")]: t(d).mul(2).add(s("icon-size")).equal(),
                                [a("icon-size-ptg-unitless")]: `calc(100 / tan(atan2(${s("svg-size")}, 1px)))`,
                                fontSize: s("svg-size"),
                                lineHeight: s("icon-size-ptg-unitless"),
                                position: "absolute",
                                inset: t(d).mul(-1).equal(),
                                width: "auto",
                                height: "auto"
                            },
                            "&-circle": {
                                lineHeight: s("icon-size-ptg-unitless"),
                                strokeWidth: t(s("icon-size-ptg-unitless")).mul(r).equal(),
                                [a("progress-radius")]: t(s("svg-size")).sub(r).mul(s("icon-size-ptg-unitless")).div(2).equal(),
                                r: s("progress-radius"),
                                fill: "none",
                                cx: 50,
                                cy: 50,
                                transition: `all ${o} ease-in-out`,
                                "&-rail": {
                                    stroke: e.colorSplit
                                },
                                "&-ptg": {
                                    stroke: e.colorPrimary
                                }
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    lineWidthBold: n,
                    antCls: l
                } = e, r = `${t}-item`, [, o] = (0, c.genCssVar)(l, "cmp-steps");
                return {
                    [`${t}${t}-rtl`]: {
                        direction: "rtl",
                        [`&${t}-navigation${t}-horizontal`]: {
                            [`${r}:after`]: {
                                transform: "translateY(-50%) rotate(-45deg)"
                            }
                        },
                        [`&${t}-panel`]: {
                            [`${t}-panel-arrow`]: {
                                transform: "scaleX(-1)"
                            },
                            [`&${t}-filled`]: {
                                [r]: {
                                    "&:not(:first-child)": {
                                        clipPath: `polygon(calc(0px - ${o("item-base-width")}) 0px,calc(100% - ${(0,E.unit)(n)}) 0px,calc(100% - ${o("item-base-width")} - ${(0,E.unit)(n)}) 50%,calc(100% - ${(0,E.unit)(n)}) 100%,calc(0px - ${o("item-base-width")}) 100%)`
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
        o7 = {
            itemIcon: oJ.TARGET_CLS
        },
        ie = e => {
            let t, l, {
                    size: o,
                    className: i,
                    rootClassName: a,
                    style: d,
                    variant: u = "filled",
                    type: f,
                    classNames: p,
                    styles: m,
                    direction: h,
                    orientation: g,
                    responsive: v = !0,
                    progressDot: b,
                    labelPlacement: y,
                    titlePlacement: $,
                    ellipsis: S,
                    offset: C = 0,
                    items: k,
                    percent: w,
                    current: E = 0,
                    onChange: N,
                    iconRender: I,
                    ...M
                } = e,
                z = n.useContext(o0),
                R = (0, s.useComponentConfig)("steps"),
                {
                    getPrefixCls: T,
                    direction: H,
                    className: P,
                    style: L
                } = R,
                A = {};
            z ? A = {
                root: z.rootComponent,
                item: z.itemComponent
            } : {
                classNames: t,
                styles: l
            } = R;
            let B = T(),
                O = T("steps", e.prefixCls),
                W = `${O}-item-icon`,
                [D, F] = o9(O),
                [_] = (0, c.genCssVar)(B, "cmp-steps"),
                X = (0, tn.default)(o),
                q = n.useMemo(() => (k || []).filter(Boolean), [k]),
                {
                    xs: V
                } = (0, lO.default)(v),
                G = n.useMemo(() => f && "default" !== f ? f : b ? "dot" : f, [b, f]),
                Y = "inline" === G,
                U = "dot" === G || "inline" === G,
                K = n.useMemo(() => "dot" === G && "function" == typeof b ? b : void 0, [G, b]),
                Q = n.useMemo(() => {
                    let e = g || h;
                    return "panel" === G ? "horizontal" : v && V || "vertical" === e ? "vertical" : "horizontal"
                }, [g, h, G, v, V]),
                Z = n.useMemo(() => U || "vertical" === Q ? "vertical" === Q ? "horizontal" : "vertical" : "navigation" === f ? "horizontal" : $ || y || "horizontal", [U, y, Q, $, f]),
                J = Y ? void 0 : w,
                ee = { ...e,
                    variant: u,
                    size: X,
                    type: G,
                    orientation: Q,
                    titlePlacement: Z,
                    current: E,
                    percent: J,
                    responsive: v,
                    offset: C
                },
                [et, en] = (0, x.useMergeSemantic)([o7, t, p], [l, m], {
                    props: ee
                }),
                el = "panel" === G ? e => n.createElement(n.Fragment, null, e, n.createElement(o1, {
                    prefixCls: O
                })) : void 0,
                er = {
                    [_("items-offset")]: `${C}`,
                    ...L,
                    ...d
                },
                eo = (0, r.clsx)(P, `${O}-${u}`, {
                    [`${O}-${G}`]: "dot" !== G && G,
                    [`${O}-rtl`]: "rtl" === H,
                    [`${O}-dot`]: U,
                    [`${O}-ellipsis`]: S,
                    [`${O}-with-progress`]: void 0 !== J,
                    [`${O}-${X}`]: X
                }, i, a, D, F);
            return n.createElement(oQ, { ...M,
                prefixCls: O,
                className: eo,
                style: er,
                classNames: et,
                styles: en,
                orientation: Q,
                titlePlacement: Z,
                components: A,
                current: E,
                items: q,
                onChange: N,
                iconRender: (e, t) => {
                    let {
                        item: l,
                        index: r,
                        active: o,
                        components: {
                            Icon: i
                        }
                    } = t, {
                        status: a,
                        icon: s
                    } = l, c = null;
                    if (U || s) c = s;
                    else switch (a) {
                        case "finish":
                            c = n.createElement(oD.default, {
                                className: `${W}-finish`
                            });
                            break;
                        case "error":
                            c = n.createElement(j.default, {
                                className: `${W}-error`
                            });
                            break;
                        default:
                            {
                                let e = n.createElement("span", {
                                    className: `${W}-number`
                                }, t.index + 1);
                                "process" === a && void 0 !== J && (e = n.createElement(o2, {
                                    prefixCls: O,
                                    rootPrefixCls: B,
                                    percent: J
                                }, e)),
                                c = e
                            }
                    }
                    let d = n.createElement(i, null, c);
                    return I ? d = I(d, {
                        index: r,
                        active: o,
                        item: l,
                        components: {
                            Icon: i
                        }
                    }) : "function" == typeof K && (d = K(d, {
                        index: r,
                        ...l
                    })), d
                },
                itemRender: (e, t) => {
                    let l = e;
                    return Y && t.item.content && (l = n.createElement(nP.default, {
                        destroyOnHidden: !0,
                        title: t.item.content
                    }, e)), n.createElement(oZ.default, {
                        component: "Steps",
                        disabled: t.item.disabled || !N,
                        colorSource: "filled" === u ? "color" : null
                    }, l)
                },
                itemWrapperRender: el
            })
        };
    var it = e.i(715168),
        il = e.i(221479),
        ir = e.i(746885),
        io = e.i(868297),
        ii = e.i(732961),
        ia = e.i(289882),
        is = e.i(170517),
        ic = e.i(628882),
        id = e.i(320890),
        iu = e.i(722319),
        ip = e.i(8398),
        im = e.i(279728);
    e.i(765846);
    var ih = e.i(602716),
        ig = e.i(328052);
    let iv = (e, t) => new og.FastColor(e).setA(t).toRgbString(),
        ib = (e, t) => new og.FastColor(e).lighten(t).toHexString(),
        iy = e => {
            let t = (0, ih.generate)(e, {
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
        i$ = (e, t) => {
            let n = e || "#000",
                l = t || "#fff";
            return {
                colorBgBase: n,
                colorTextBase: l,
                colorText: iv(l, .85),
                colorTextSecondary: iv(l, .65),
                colorTextTertiary: iv(l, .45),
                colorTextQuaternary: iv(l, .25),
                colorFill: iv(l, .18),
                colorFillSecondary: iv(l, .12),
                colorFillTertiary: iv(l, .08),
                colorFillQuaternary: iv(l, .04),
                colorBgSolid: iv(l, .95),
                colorBgSolidHover: iv(l, 1),
                colorBgSolidActive: iv(l, .9),
                colorBgElevated: ib(n, 12),
                colorBgContainer: ib(n, 8),
                colorBgLayout: ib(n, 0),
                colorBgSpotlight: ib(n, 26),
                colorBgBlur: iv(l, .04),
                colorBorder: ib(n, 26),
                colorBorderDisabled: ib(n, 26),
                colorBorderSecondary: ib(n, 19)
            }
        },
        ix = {
            defaultSeed: id.defaultConfig.token,
            useToken: function() {
                let [e, t, n, l] = (0, D.useToken)();
                return {
                    theme: e,
                    token: t,
                    hashId: n,
                    cssVar: l
                }
            },
            defaultAlgorithm: iu.default,
            darkAlgorithm: (e, t) => {
                let n = Object.keys(is.defaultPresetColors).map(t => {
                        let n = (0, ih.generate)(e[t], {
                            theme: "dark"
                        });
                        return Array.from({
                            length: 10
                        }, () => 1).reduce((e, l, r) => (e[`${t}-${r+1}`] = n[r], e[`${t}${r+1}`] = n[r], e), {})
                    }).reduce((e, t) => e = { ...e,
                        ...t
                    }, {}),
                    l = t ? ? (0, iu.default)(e),
                    r = (0, ig.default)(e, {
                        generateColorPalettes: iy,
                        generateNeutralColorPalettes: i$
                    });
                return { ...l,
                    ...n,
                    ...r,
                    colorPrimaryBg: r.colorPrimaryBorder,
                    colorPrimaryBgHover: r.colorPrimaryBorderHover
                }
            },
            compactAlgorithm: (e, t) => {
                let n = t ? ? (0, iu.default)(e),
                    l = n.fontSizeSM,
                    r = n.controlHeight - 4;
                return { ...n,
                    ... function(e) {
                        let {
                            sizeUnit: t,
                            sizeStep: n
                        } = e, l = n - 2;
                        return {
                            sizeXXL: t * (l + 10),
                            sizeXL: t * (l + 6),
                            sizeLG: t * (l + 2),
                            sizeMD: t * (l + 2),
                            sizeMS: t * (l + 1),
                            size: t * l,
                            sizeSM: t * l,
                            sizeXS: t * (l - 1),
                            sizeXXS: t * (l - 1)
                        }
                    }(t ? ? e),
                    ...(0, im.default)(l),
                    controlHeight: r,
                    ...(0, ip.default)({ ...n,
                        controlHeight: r
                    })
                }
            },
            getDesignToken: e => {
                let t = e ? .algorithm ? (0, io.createTheme)(e.algorithm) : ia.default,
                    n = { ...is.default,
                        ...e ? .token
                    };
                return (0, ii.getComputedToken)(n, {
                    override: e ? .token
                }, t, ic.default)
            },
            defaultConfig: id.defaultConfig,
            _internalContext: id.DesignTokenContext
        };
    var iS = e.i(110422);
    let {
        TimePicker: iC,
        RangePicker: ik
    } = lu.default, iw = n.forwardRef((e, t) => n.createElement(ik, { ...e,
        picker: "time",
        mode: void 0,
        ref: t
    })), iE = n.forwardRef((e, t) => {
        let {
            addon: l,
            renderExtraFooter: r,
            variant: o,
            bordered: i,
            classNames: a,
            styles: s,
            popupClassName: c,
            popupStyle: d,
            ...u
        } = e, [f] = (0, tl.default)("timePicker", o, i), p = n.useMemo(() => r || l || void 0, [l, r]), m = { ...e,
            variant: f
        }, [h, g] = (0, iS.default)("timePicker", a, s, c, d, m);
        return n.createElement(iC, { ...u,
            mode: void 0,
            ref: t,
            renderExtraFooter: p,
            variant: f,
            classNames: h,
            styles: g
        })
    }), iN = (0, em.default)(iE, "popupAlign", void 0, "picker");
    iE._InternalPanelDoNotUseOrYouWillBeFired = iN, iE.RangePicker = iw, iE._InternalPanelDoNotUseOrYouWillBeFired = iN;
    let iI = (0, c.genStyleHooks)("Timeline", e => {
            let t = (0, I.mergeToken)(e, {
                itemHeadSize: 10,
                customHeadPaddingVertical: e.paddingXXS,
                paddingInlineEnd: 2
            });
            return [(e => {
                let {
                    componentCls: t,
                    tailColor: n,
                    fontHeight: l,
                    dotSize: r,
                    dotBg: o,
                    dotBorderWidth: i,
                    fontSize: a,
                    lineHeight: s,
                    colorText: d,
                    tailWidth: u,
                    colorPrimary: f,
                    colorError: p,
                    colorSuccess: m,
                    colorTextDisabled: h,
                    antCls: g
                } = e, v = `${t}-item`, [b, y] = (0, c.genCssVar)(g, "cmp-steps");
                return {
                    [t]: [{ ...(0, N.resetComponent)(e),
                        [v]: {
                            [b("title-horizontal-title-height")]: l,
                            [b("vertical-rail-margin")]: "0px",
                            [b("title-horizontal-rail-gap")]: "0px",
                            [b("icon-dot-size-origin")]: y("icon-size-active"),
                            [b("icon-dot-size-custom")]: r,
                            [b("item-icon-dot-bg-color-origin")]: y("item-icon-dot-bg-color"),
                            [b("item-icon-dot-bg-color-custom")]: o,
                            [b("icon-size")]: y("icon-dot-size-custom", y("icon-dot-size-origin")),
                            [`${v}-icon`]: {
                                [b("dot-icon-border-width")]: i,
                                [b("dot-icon-size")]: y("icon-size"),
                                [b("item-icon-dot-bg-color")]: y("item-icon-dot-bg-color-custom", y("item-icon-dot-bg-color-origin"))
                            },
                            [`${v}-title`]: {
                                fontSize: a,
                                lineHeight: s
                            },
                            [`${v}-content`]: {
                                color: d
                            },
                            [`${v}-rail`]: {
                                [b("item-solid-line-color")]: n,
                                [b("rail-size")]: u
                            }
                        }
                    }, {
                        [v]: {
                            [b("item-process-rail-line-style")]: "dotted"
                        },
                        [`${v}${v}${v}-color`]: {
                            "&-blue": {
                                [b("item-icon-dot-color")]: f
                            },
                            "&-red": {
                                [b("item-icon-dot-color")]: p
                            },
                            "&-green": {
                                [b("item-icon-dot-color")]: m
                            },
                            "&-gray": {
                                [b("item-icon-dot-color")]: h
                            }
                        }
                    }]
                }
            })(t), (e => {
                let {
                    calc: t,
                    componentCls: n,
                    itemPaddingBottom: l,
                    margin: r,
                    antCls: o
                } = e, i = `${n}-item`, [, a] = (0, c.genCssVar)(o, "cmp-steps"), [s, d] = (0, c.genCssVar)(o, "timeline");
                return {
                    [`${n}:not(${n}-horizontal)`]: {
                        [s("head-span")]: "12",
                        [s("head-span-ptg")]: `calc(${d("head-span")} / 24 * 100%)`,
                        [`&${n}-layout-alternate`]: {
                            [i]: {
                                [s("alternate-gap")]: t(r).mul(2).add(a("dot-icon-size")).equal(),
                                minHeight: "auto",
                                paddingBottom: l,
                                [`${i}-icon, ${i}-rail`]: {
                                    position: "absolute",
                                    insetInlineStart: d("head-span-ptg")
                                },
                                [`${i}-icon`]: {
                                    marginInlineStart: `calc(${a("icon-size")} / -2)`
                                },
                                [`${i}-section`]: {
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    gap: d("alternate-gap")
                                },
                                [`${i}-header`]: {
                                    textAlign: "end",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                    flex: `1 1 calc(${d("head-span-ptg")} - ${d("alternate-gap")} / 2)`
                                },
                                [`${i}-content`]: {
                                    textAlign: "start",
                                    flex: `1 1 calc(100% - ${d("head-span-ptg")} - ${d("alternate-gap")} / 2)`
                                },
                                "&-placement-end": {
                                    [`${i}-header`]: {
                                        textAlign: "start",
                                        order: 1
                                    },
                                    [`${i}-content`]: {
                                        textAlign: "end"
                                    },
                                    [`${i}-icon, ${i}-rail`]: {
                                        insetInlineStart: `calc(100% - ${d("head-span-ptg")})`
                                    }
                                }
                            }
                        },
                        [`&:not(${n}-layout-alternate)`]: {
                            [`${i}-placement-end`]: {
                                textAlign: "end",
                                [`${i}-icon`]: {
                                    order: 1
                                },
                                [`${i}-rail`]: {
                                    insetInlineStart: "auto",
                                    insetInlineEnd: `calc(${a("icon-size")} / 2)`,
                                    marginInlineEnd: `calc(${a("rail-size")} / -2)`
                                }
                            }
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t,
                    fontHeight: n,
                    antCls: l,
                    paddingXS: r
                } = e, [o, i] = (0, c.genCssVar)(l, "cmp-steps"), [a, s] = (0, c.genCssVar)(l, "timeline"), d = `${t}-item`;
                return {
                    [`${t}-horizontal`]: {
                        [o("title-vertical-row-gap")]: r,
                        [a("content-height")]: (0, E.unit)(n),
                        alignItems: "stretch",
                        [`&${t}-layout-alternate`]: {
                            [d]: {
                                [`${d}-wrapper`]: {
                                    [a("alternate-content-offset")]: `calc(${s("content-height")} + ${i("title-vertical-row-gap")} * 2 + ${i("icon-size-max")})`,
                                    height: `calc(${s("content-height")} * 2 + ${i("title-vertical-row-gap")} * 2 + ${i("icon-size-max")})`
                                },
                                [`${d}-icon`]: {
                                    position: "absolute"
                                },
                                [`${d}-icon, ${d}-rail`]: {
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    margin: 0
                                },
                                [`${d}-title, ${d}-subtitle, ${d}-content`]: {
                                    whiteSpace: "nowrap",
                                    maxWidth: "unset"
                                },
                                [`${d}-title`]: {
                                    position: "absolute",
                                    left: {
                                        _skip_check_: !0,
                                        value: "50%"
                                    },
                                    transform: "translateX(-50%)"
                                },
                                [`${d}-content`]: {
                                    position: "absolute",
                                    left: {
                                        _skip_check_: !0,
                                        value: "50%"
                                    },
                                    transform: "translateX(-50%)"
                                },
                                "&-placement-start": {
                                    [`${d}-title`]: {
                                        bottom: s("alternate-content-offset")
                                    },
                                    [`${d}-content`]: {
                                        top: s("alternate-content-offset")
                                    }
                                },
                                "&-placement-end": {
                                    [`${d}-title`]: {
                                        top: s("alternate-content-offset")
                                    },
                                    [`${d}-content`]: {
                                        bottom: s("alternate-content-offset")
                                    }
                                }
                            }
                        },
                        [`&:not(${t}-layout-alternate)`]: {
                            [`${d}-placement-end`]: {
                                display: "flex",
                                alignItems: "flex-end",
                                [`${d}-wrapper`]: {
                                    flex: "auto",
                                    flexDirection: "column-reverse"
                                },
                                [`${d}-rail`]: {
                                    top: "auto",
                                    bottom: i("horizontal-rail-margin"),
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
        iM = {
            rootComponent: "ol",
            itemComponent: "li"
        },
        iz = e => {
            let {
                getPrefixCls: t,
                direction: l,
                className: i,
                style: a,
                classNames: d,
                styles: u
            } = (0, s.useComponentConfig)("timeline"), {
                prefixCls: f,
                className: p,
                style: m,
                classNames: h,
                styles: g,
                variant: v = "outlined",
                mode: b,
                orientation: y = "vertical",
                titleSpan: $,
                items: S,
                children: C,
                reverse: k,
                pending: w,
                pendingDot: E,
                ...N
            } = e, I = t(), M = t("timeline", f), [z, R] = iI(M), [T] = (0, c.genCssVar)(I, "timeline"), H = n.useMemo(() => ({
                item: `${M}-item`,
                itemTitle: `${M}-item-title`,
                itemIcon: `${M}-item-icon`,
                itemContent: `${M}-item-content`,
                itemRail: `${M}-item-rail`,
                itemWrapper: `${M}-item-wrapper`,
                itemSection: `${M}-item-section`,
                itemHeader: `${M}-item-header`
            }), [M]), P = n.useMemo(() => "left" === b ? "start" : "right" === b ? "end" : ["alternate", "start", "end"].includes(b) ? b : "start", [b]), L = ((e, t, l, o, i, a, s) => {
                let d = `${t}-item`,
                    [u] = (0, c.genCssVar)(e, "cmp-steps"),
                    f = n.useMemo(() => Array.isArray(o) ? o : (0, eg.toArray)(i).map(e => ({ ...e.props
                    })), [o, i]);
                return n.useMemo(() => {
                    let e = f.map((e, t) => {
                        let {
                            label: o,
                            children: i,
                            title: a,
                            content: s,
                            color: c,
                            className: f,
                            style: p,
                            icon: m,
                            dot: h,
                            placement: g,
                            position: v,
                            loading: b,
                            ...y
                        } = e, $ = p, x = f;
                        c && (["blue", "red", "green", "gray"].includes(c) ? x = (0, r.clsx)(f, `${d}-color-${c}`) : $ = {
                            [u("item-icon-dot-color")]: c,
                            ...p
                        });
                        let S = g ? ? v ? ? ("alternate" === l ? t % 2 == 0 ? "start" : "end" : l);
                        x = (0, r.clsx)(x, `${d}-placement-${S}`);
                        let C = m ? ? h;
                        return !C && b && (C = n.createElement(V.default, null)), { ...y,
                            title: a ? ? o,
                            content: s ? ? i,
                            style: $,
                            className: x,
                            icon: C,
                            status: b ? "process" : "finish"
                        }
                    });
                    return a && e.push({
                        icon: s ? ? n.createElement(V.default, null),
                        content: a,
                        status: "process"
                    }), e
                }, [f, a, l, d, u, s])
            })(I, M, P, S, C, w, E), A = n.useMemo(() => k ? (0, o.default)(L).reverse() : L, [k, L]), B = { ...e,
                variant: v,
                mode: P,
                orientation: y,
                items: A
            }, [O, W] = (0, x.useMergeSemantic)([H, d, h], [u, g], {
                props: B
            }), D = n.useMemo(() => ({
                railFollowPrevStatus: k
            }), [k]), F = n.useMemo(() => "alternate" === P || "vertical" === y && A.some(e => e.title), [A, P, y]), _ = { ...a,
                ...m
            };
            return (0, eL.default)($) && "alternate" !== P && ("number" != typeof $ || Number.isNaN($) ? _[T("head-span-ptg")] = $ : _[T("head-span")] = $), n.createElement(o0.Provider, {
                value: iM
            }, n.createElement(o_.Provider, {
                value: D
            }, n.createElement(ie, { ...N,
                className: (0, r.clsx)(M, i, p, z, R, {
                    [`${M}-${y}`]: "horizontal" === y,
                    [`${M}-layout-alternate`]: F,
                    [`${M}-rtl`]: "rtl" === l
                }),
                style: _,
                classNames: O,
                styles: W,
                variant: v,
                orientation: y,
                type: "dot",
                items: A,
                current: A.length - 1
            })))
        };

    function iR(e) {
        return null !== e && "object" == typeof e
    }

    function iT(e, t, n) {
        if (!1 === e || !1 === t && (!iR(e) || !e.closeIcon)) return null;
        let l = "boolean" != typeof t ? t : void 0;
        return iR(e) ? { ...e,
            closeIcon: e.closeIcon ? ? l
        } : n || e || t ? {
            closeIcon: l
        } : "empty"
    }
    iz.Item = () => {};
    var iH = e.i(951160);

    function iP() {
        return (iP = Object.assign.bind()).apply(this, arguments)
    }
    let iL = {
            fill: "transparent",
            pointerEvents: "auto"
        },
        iA = e => {
            let {
                prefixCls: t,
                rootClassName: l,
                pos: o,
                showMask: i,
                style: a = {},
                fill: s = "rgba(0,0,0,0.5)",
                open: c,
                animated: d,
                zIndex: u,
                disabledInteraction: f,
                styles: p,
                classNames: m,
                getPopupContainer: h,
                onEsc: g
            } = e, v = (0, tf.default)(), b = `${t}-mask-${v}`, y = "object" == typeof d ? d ? .placeholder : d, $ = "u" > typeof navigator && /^((?!chrome|android).)*safari/i.test(navigator.userAgent), x = !1 === h;
            return n.default.createElement(iH.default, {
                open: c,
                autoLock: !x,
                getContainer: h,
                onEsc: g
            }, n.default.createElement("div", {
                className: (0, r.clsx)(`${t}-mask`, l, m ? .mask),
                style: {
                    position: x ? "absolute" : "fixed",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: u,
                    pointerEvents: o && !f ? "none" : "auto",
                    ...a,
                    ...p ? .mask
                }
            }, i ? n.default.createElement("svg", {
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, n.default.createElement("defs", null, n.default.createElement("mask", {
                id: b
            }, n.default.createElement("rect", iP({
                x: "0",
                y: "0"
            }, $ ? {
                width: "100%",
                height: "100%"
            } : {
                width: "100vw",
                height: "100vh"
            }, {
                fill: "white"
            })), o && n.default.createElement("rect", {
                x: o.left,
                y: o.top,
                rx: o.radius,
                width: o.width,
                height: o.height,
                fill: "black",
                className: y ? `${t}-placeholder-animated` : ""
            }))), n.default.createElement("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: s,
                mask: `url(#${b})`
            }), o && n.default.createElement(n.default.Fragment, null, n.default.createElement("rect", iP({}, iL, {
                x: "0",
                y: "0",
                width: "100%",
                height: Math.max(o.top, 0)
            })), n.default.createElement("rect", iP({}, iL, {
                x: "0",
                y: "0",
                width: Math.max(o.left, 0),
                height: "100%"
            })), n.default.createElement("rect", iP({}, iL, {
                x: "0",
                y: o.top + o.height,
                width: "100%",
                height: `calc(100% - ${o.top+o.height}px)`
            })), n.default.createElement("rect", iP({}, iL, {
                x: o.left + o.width,
                y: "0",
                width: `calc(100% - ${o.left+o.width}px)`,
                height: "100%"
            })))) : null))
        },
        iB = [0, 0],
        iO = {
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

    function iW() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = {};
        return Object.keys(iO).forEach(n => {
            t[n] = { ...iO[n],
                autoArrow: e,
                targetOffset: iB
            }
        }), t
    }

    function iD() {
        return (iD = Object.assign.bind()).apply(this, arguments)
    }

    function iF(e) {
        let {
            prefixCls: t,
            current: l,
            total: o,
            title: i,
            description: a,
            onClose: s,
            onPrev: c,
            onNext: d,
            onFinish: u,
            className: f,
            closable: p,
            classNames: m,
            styles: h
        } = e, g = (0, eH.default)(p || {}, !0), v = p ? .closeIcon ? ? n.createElement("span", {
            className: `${t}-close-x`
        }, "×"), b = !!p;
        return n.createElement("div", {
            className: (0, r.clsx)(`${t}-panel`, f)
        }, n.createElement("div", {
            className: (0, r.clsx)(`${t}-section`, m ? .section),
            style: h ? .section
        }, b && n.createElement("button", iD({
            type: "button",
            onClick: s,
            "aria-label": "Close"
        }, g, {
            className: `${t}-close`
        }), v), n.createElement("div", {
            className: (0, r.clsx)(`${t}-header`, m ? .header),
            style: h ? .header
        }, n.createElement("div", {
            className: (0, r.clsx)(`${t}-title`, m ? .title),
            style: h ? .title
        }, i)), n.createElement("div", {
            className: (0, r.clsx)(`${t}-description`, m ? .description),
            style: h ? .description
        }, a), n.createElement("div", {
            className: (0, r.clsx)(`${t}-footer`, m ? .footer),
            style: h ? .footer
        }, n.createElement("div", {
            className: `${t}-sliders`
        }, o > 1 ? [...Array.from({
            length: o
        }).keys()].map((e, t) => n.createElement("span", {
            key: e,
            className: t === l ? "active" : ""
        })) : null), n.createElement("div", {
            className: (0, r.clsx)(`${t}-actions`, m ? .actions),
            style: h ? .actions
        }, 0 !== l ? n.createElement("button", {
            className: `${t}-prev-btn`,
            onClick: c
        }, "Prev") : null, l === o - 1 ? n.createElement("button", {
            className: `${t}-finish-btn`,
            onClick: u
        }, "Finish") : n.createElement("button", {
            className: `${t}-next-btn`,
            onClick: d
        }, "Next")))))
    }
    iW();
    let i_ = e => {
            let {
                current: t,
                renderPanel: l
            } = e;
            return n.createElement(n.Fragment, null, "function" == typeof l ? l(e, t) : n.createElement(iF, e))
        },
        ij = n.forwardRef((e, t) => {
            let {
                open: l,
                autoLock: r,
                getContainer: o,
                domRef: i,
                className: a,
                style: s,
                fallbackDOM: c
            } = e;
            return n.useImperativeHandle(t, () => i.current || c()), n.createElement(iH.default, {
                open: l,
                autoLock: r,
                getContainer: o
            }, n.createElement("div", {
                ref: i,
                className: a,
                style: s
            }))
        });

    function iX() {
        return (iX = Object.assign.bind()).apply(this, arguments)
    }
    let iq = {
            left: "50%",
            top: "50%",
            width: 1,
            height: 1
        },
        iV = {
            block: "center",
            inline: "center"
        },
        iG = e => {
            let {
                prefixCls: t = "rc-tour",
                steps: l = [],
                defaultCurrent: o,
                current: i,
                keyboard: a = !0,
                onChange: s,
                onClose: c,
                onFinish: d,
                open: u,
                defaultOpen: f,
                mask: p = !0,
                arrow: m = !0,
                rootClassName: h,
                placement: g,
                renderPanel: v,
                gap: b,
                animated: y,
                scrollIntoViewOptions: $ = iV,
                zIndex: x = 1001,
                closeIcon: S,
                closable: C,
                builtinPlacements: k,
                disabledInteraction: w,
                styles: E,
                classNames: N,
                className: I,
                style: M,
                getPopupContainer: z,
                ...R
            } = e, T = n.useRef(), [H, P] = (0, tm.default)(o || 0, i), [L, A] = (0, tm.default)(f, u), B = !(H < 0) && !(H >= l.length) && (L ? ? !0), [O, W] = n.useState(B), D = n.useRef(B);
            (0, nC.default)(() => {
                B && (D.current || P(0), W(!0)), D.current = B
            }, [B, P]);
            let {
                target: F,
                placement: _,
                style: j,
                arrow: X,
                className: q,
                mask: V,
                scrollIntoViewOptions: G = iV,
                closeIcon: Y,
                closable: U
            } = l[H] || {}, K = n.useMemo(() => {
                let e = iT(U, Y, !1),
                    t = iT(C, S, !0);
                return "empty" !== e ? e : t
            }, [C, S, U, Y]), Q = B && (V ? ? p), Z = n.useRef(null), J = !1 === z, [ee, et] = function(e, t, l, r, o, i) {
                let [a, s] = (0, n.useState)(void 0);
                (0, nC.default)(() => {
                    s(("function" == typeof e ? e() : e) || null)
                });
                let [c, d] = (0, n.useState)(null), u = (0, tp.default)(() => {
                    if (a) {
                        !o && ! function(e) {
                            let t = window.innerWidth || document.documentElement.clientWidth,
                                n = window.innerHeight || document.documentElement.clientHeight,
                                {
                                    top: l,
                                    right: r,
                                    bottom: o,
                                    left: i
                                } = e.getBoundingClientRect();
                            return l >= 0 && i >= 0 && r <= t && o <= n
                        }(a) && t && a.scrollIntoView(r);
                        let {
                            left: e,
                            top: n,
                            width: l,
                            height: s
                        } = a.getBoundingClientRect(), c = {
                            left: e,
                            top: n,
                            width: l,
                            height: s,
                            radius: 0
                        };
                        if (o) {
                            let e = i.current ? .parentElement ? .getBoundingClientRect();
                            e && (c.left -= e.left, c.top -= e.top)
                        }
                        d(e => JSON.stringify(e) !== JSON.stringify(c) ? c : e)
                    } else d(null)
                }), f = e => (Array.isArray(l ? .offset) ? l ? .offset[e] : l ? .offset) ? ? 6;
                return (0, nC.default)(() => (u(), window.addEventListener("resize", u), window.addEventListener("scroll", u), () => {
                    window.removeEventListener("resize", u), window.removeEventListener("scroll", u)
                }), [a, t, u]), [(0, n.useMemo)(() => {
                    var e;
                    if (!c) return c;
                    let t = f(0),
                        n = f(1),
                        r = "number" != typeof(e = l ? .radius) || Number.isNaN(e) ? 2 : l ? .radius;
                    return {
                        left: c.left - t,
                        top: c.top - n,
                        width: c.width + 2 * t,
                        height: c.height + 2 * n,
                        radius: r
                    }
                }, [c, l]), a]
            }(F, u, b, G ? ? $, J, Z), en = !!et && (void 0 === X ? m : X), el = "object" == typeof en && en.pointAtCenter;
            (0, nC.default)(() => {
                T.current ? .forceAlign()
            }, [el, H]);
            let er = e => {
                    P(e), s ? .(e)
                },
                eo = (0, n.useMemo)(() => k ? "function" == typeof k ? k({
                    arrowPointAtCenter: el
                }) : k : iW(el), [k, el]),
                ei = () => {
                    A(!1), c ? .(H)
                },
                ea = (0, tp.default)(e => {
                    let {
                        event: t
                    } = e;
                    a && null !== K && (t.preventDefault(), ei())
                }),
                es = (0, tp.default)(e => {
                    if (!tX.default.isEditableTarget(e)) {
                        if (a && "ArrowLeft" === e.key) {
                            H > 0 && (e.preventDefault(), er(H - 1));
                            return
                        }
                        if (a && "ArrowRight" === e.key) {
                            H < l.length - 1 && (e.preventDefault(), er(H + 1));
                            return
                        }
                    }
                });
            if ((0, nC.default)(() => {
                    if (B) return window.addEventListener("keydown", es), () => {
                        window.removeEventListener("keydown", es)
                    }
                }, [B, es]), void 0 === et || !O) return null;
            let ec = "boolean" == typeof Q ? void 0 : Q;
            return n.createElement(n.Fragment, null, n.createElement(iA, {
                getPopupContainer: z,
                styles: E,
                classNames: N,
                zIndex: x,
                prefixCls: t,
                pos: ee,
                showMask: "boolean" == typeof Q ? Q : !!Q,
                style: ec ? .style,
                fill: ec ? .color,
                open: B,
                animated: y,
                rootClassName: h,
                disabledInteraction: w,
                onEsc: ea
            }), n.createElement(l9.default, iX({}, R, {
                getPopupContainer: z,
                builtinPlacements: eo,
                ref: T,
                popupStyle: j,
                popupPlacement: _ ? ? g ? ? (null === et ? "center" : "bottom"),
                popupVisible: B,
                popupClassName: (0, r.clsx)(h, q),
                prefixCls: t,
                popup: () => n.createElement(i_, iX({
                    styles: E,
                    classNames: N,
                    arrow: en,
                    key: "content",
                    prefixCls: t,
                    total: l.length,
                    renderPanel: v,
                    onPrev: () => {
                        er(H - 1)
                    },
                    onNext: () => {
                        er(H + 1)
                    },
                    onClose: ei,
                    current: H,
                    onFinish: () => {
                        ei(), d ? .()
                    }
                }, l[H], {
                    closable: K
                })),
                forceRender: !1,
                autoDestroy: !0,
                zIndex: x,
                arrow: !!en
            }), n.createElement(ij, {
                open: B,
                autoLock: !J,
                getContainer: z,
                domRef: Z,
                fallbackDOM: () => et || document.body,
                className: (0, r.clsx)(I, h, `${t}-target-placeholder`),
                style: { ...ee || iq,
                    position: J ? "absolute" : "fixed",
                    pointerEvents: "none",
                    ...M
                }
            })))
        };
    var iY = e.i(805984),
        iU = e.i(340010);
    let iK = e => {
        let t, {
                stepProps: l,
                current: i,
                type: a,
                indicatorsRender: s,
                actionsRender: c
            } = e,
            {
                prefixCls: d,
                total: u = 1,
                title: f,
                onClose: p,
                onPrev: m,
                onNext: h,
                onFinish: g,
                cover: v,
                description: b,
                nextButtonProps: y,
                prevButtonProps: $,
                type: x,
                closable: S,
                classNames: C = {},
                styles: k = {}
            } = l,
            w = x ? ? a,
            E = (0, eH.default)(S ? ? {}, !0),
            [N] = (0, eU.useLocale)("global", rF.default.global),
            [I] = (0, eU.useLocale)("Tour", rF.default.Tour),
            M = n.default.createElement("button", {
                type: "button",
                onClick: p,
                className: `${d}-close`,
                "aria-label": N ? .close,
                ...E
            }, S ? .closeIcon || n.default.createElement(j.default, {
                className: `${d}-close-icon`
            })),
            z = i === u - 1,
            R = (0, eL.default)(f) ? n.default.createElement("div", {
                className: (0, r.clsx)(`${d}-header`, C.header),
                style: k.header
            }, n.default.createElement("div", {
                className: (0, r.clsx)(`${d}-title`, C.title),
                style: k.title
            }, f)) : null,
            T = (0, eL.default)(b) ? n.default.createElement("div", {
                className: (0, r.clsx)(`${d}-description`, C.description),
                style: k.description
            }, b) : null,
            H = (0, eL.default)(v) ? n.default.createElement("div", {
                className: (0, r.clsx)(`${d}-cover`, C.cover),
                style: k.cover
            }, v) : null;
        t = s ? s(i, u) : (0, o.default)(Array.from({
            length: u
        }).keys()).map((e, t) => n.default.createElement("span", {
            key: e,
            className: (0, r.clsx)(t === i && `${d}-indicator-active`, `${d}-indicator`, C.indicator),
            style: k.indicator
        }));
        let P = n.default.createElement(n.default.Fragment, null, 0 !== i ? n.default.createElement(lN.default, {
            size: "small",
            ...{
                type: "default",
                ghost: "primary" === w
            },
            ...$,
            onClick: () => {
                m ? .(), $ ? .onClick ? .()
            },
            className: (0, r.clsx)(`${d}-prev-btn`, $ ? .className)
        }, $ ? .children ? ? I ? .Previous) : null, n.default.createElement(lN.default, {
            size: "small",
            type: "primary" === w ? "default" : "primary",
            ...y,
            onClick: () => {
                z ? g ? .() : h ? .(), y ? .onClick ? .()
            },
            className: (0, r.clsx)(`${d}-next-btn`, y ? .className)
        }, y ? .children ? ? (z ? I ? .Finish : I ? .Next)));
        return n.default.createElement("div", {
            className: `${d}-panel`
        }, n.default.createElement("div", {
            className: (0, r.clsx)(`${d}-section`, C.section),
            style: k.section
        }, S && M, H, R, T, n.default.createElement("div", {
            className: (0, r.clsx)(`${d}-footer`, C.footer),
            style: k.footer
        }, u > 1 && n.default.createElement("div", {
            className: (0, r.clsx)(`${d}-indicators`, C.indicators),
            style: k.indicators
        }, t), n.default.createElement("div", {
            className: (0, r.clsx)(`${d}-actions`, C.actions),
            style: k.actions
        }, c ? c(P, {
            current: i,
            total: u
        }) : P))))
    };
    var iQ = e.i(320560),
        iZ = e.i(307358);
    let iJ = (0, c.genStyleHooks)("Tour", e => {
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
                    colorPrimary: i,
                    colorFill: a,
                    indicatorHeight: s,
                    indicatorWidth: d,
                    boxShadowTertiary: u,
                    zIndexPopup: f,
                    colorBgElevated: p,
                    fontWeightStrong: m,
                    marginXS: h,
                    colorTextLightSolid: g,
                    tourBorderRadius: v,
                    colorWhite: b,
                    primaryNextBtnHoverBg: y,
                    closeBtnSize: $,
                    motionDurationSlow: x,
                    antCls: S,
                    primaryPrevBtnBg: C
                } = e, [k, w] = (0, c.genCssVar)(S, "tooltip");
                return [{
                    [t]: { ...(0, N.resetComponent)(e),
                        position: "absolute",
                        zIndex: f,
                        maxWidth: "fit-content",
                        visibility: "visible",
                        width: 520,
                        [k("arrow-background-color")]: p,
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
                            borderRadius: v,
                            boxShadow: u,
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
                                width: $,
                                height: $,
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
                                ...(0, N.genFocusStyle)(e)
                            },
                            [`${t}-cover`]: {
                                textAlign: "center",
                                padding: `${(0,E.unit)(e.calc(n).add($).add(l).equal())} ${(0,E.unit)(n)} 0`,
                                img: {
                                    width: "100%"
                                }
                            },
                            [`${t}-header`]: {
                                padding: `${(0,E.unit)(n)} ${(0,E.unit)(n)} ${(0,E.unit)(l)}`,
                                width: `calc(100% - ${(0,E.unit)($)})`,
                                wordBreak: "break-word",
                                [`${t}-title`]: {
                                    fontWeight: m
                                }
                            },
                            [`${t}-description`]: {
                                padding: `0 ${(0,E.unit)(n)}`,
                                wordWrap: "break-word"
                            },
                            [`${t}-footer`]: {
                                padding: `${(0,E.unit)(l)} ${(0,E.unit)(n)} ${(0,E.unit)(n)}`,
                                textAlign: "end",
                                borderRadius: `0 0 ${(0,E.unit)(o)} ${(0,E.unit)(o)}`,
                                display: "flex",
                                [`${t}-indicators`]: {
                                    display: "inline-block",
                                    [`${t}-indicator`]: {
                                        width: d,
                                        height: s,
                                        display: "inline-block",
                                        borderRadius: "50%",
                                        background: a,
                                        "&:not(:last-child)": {
                                            marginInlineEnd: s
                                        },
                                        "&-active": {
                                            background: i
                                        }
                                    }
                                },
                                [`${t}-actions`]: {
                                    marginInlineStart: "auto",
                                    [`${S}-btn`]: {
                                        marginInlineStart: h
                                    }
                                }
                            }
                        },
                        [`${t}-primary, &${t}-primary`]: {
                            [k("arrow-background-color")]: i,
                            [`${t}-section`]: {
                                color: g,
                                textAlign: "start",
                                textDecoration: "none",
                                backgroundColor: i,
                                borderRadius: r,
                                boxShadow: u,
                                [`${t}-close`]: {
                                    color: g
                                },
                                [`${t}-indicators`]: {
                                    [`${t}-indicator`]: {
                                        background: C,
                                        "&-active": {
                                            background: g
                                        }
                                    }
                                },
                                [`${t}-prev-btn`]: {
                                    color: g,
                                    borderColor: C,
                                    backgroundColor: i,
                                    "&:hover": {
                                        backgroundColor: C,
                                        borderColor: "transparent"
                                    }
                                },
                                [`${t}-next-btn`]: {
                                    color: i,
                                    borderColor: "transparent",
                                    background: b,
                                    "&:hover": {
                                        background: y
                                    }
                                }
                            }
                        }
                    },
                    [`${t}-mask`]: {
                        [`${t}-placeholder-animated`]: {
                            transition: `all ${x}`
                        }
                    },
                    "&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom": {
                        [`${t}-section`]: {
                            borderRadius: e.min(v, iQ.MAX_VERTICAL_CONTENT_RADIUS)
                        }
                    }
                }, (0, iQ.default)(e, w("arrow-background-color"))]
            })((0, I.mergeToken)(e, {
                indicatorWidth: 6,
                indicatorHeight: 6,
                tourBorderRadius: t
            }))
        }, e => ({
            zIndexPopup: e.zIndexPopupBase + 70,
            closeBtnSize: e.fontSize * e.lineHeight,
            primaryPrevBtnBg: new og.FastColor(e.colorTextLightSolid).setA(.15).toRgbString(),
            primaryNextBtnHoverBg: new og.FastColor(e.colorBgTextHover).onBackground(e.colorWhite).toRgbString(),
            ...(0, iQ.getArrowOffsetToken)({
                contentRadius: e.borderRadiusLG,
                limitVerticalRadius: !0
            }),
            ...(0, iZ.getArrowToken)(e)
        })),
        i0 = (0, em.withPureRenderTheme)(e => {
            let {
                prefixCls: t,
                current: l = 0,
                total: o = 6,
                className: i,
                style: a,
                type: c,
                closable: d,
                closeIcon: u,
                ...f
            } = e, {
                getPrefixCls: p
            } = n.useContext(s.ConfigContext), m = p("tour", t), [h, g] = iJ(m), [v, b] = (0, W.useClosable)({
                closable: d,
                closeIcon: u
            }, null, {
                closable: !0,
                closeIconRender: e => n.isValidElement(e) ? (0, eM.cloneElement)(e, {
                    className: (0, r.clsx)(e.props ? .className, `${m}-close-icon`)
                }) : e
            });
            return n.createElement(r_.RawPurePanel, {
                prefixCls: m,
                hashId: h,
                className: (0, r.clsx)(i, `${m}-pure`, c && `${m}-${c}`, g),
                style: a
            }, n.createElement(iK, {
                stepProps: { ...f,
                    prefixCls: m,
                    total: o,
                    closable: v ? {
                        closeIcon: b
                    } : void 0
                },
                current: l,
                type: c
            }))
        }),
        i1 = e => {
            let {
                prefixCls: t,
                type: l,
                rootClassName: o,
                indicatorsRender: i,
                actionsRender: a,
                steps: c,
                closeIcon: d,
                keyboard: u = !0,
                classNames: f,
                styles: p,
                className: m,
                style: h,
                ...g
            } = e, {
                getPrefixCls: v,
                direction: b,
                closeIcon: y,
                className: $,
                style: S,
                classNames: C,
                styles: k
            } = (0, s.useComponentConfig)("tour"), w = v("tour", t), [E, N] = iJ(w), [, I] = (0, D.useToken)(), M = n.default.useMemo(() => c ? .map(e => ({ ...e,
                className: (0, r.clsx)(e.className, {
                    [`${w}-primary`]: (e.type ? ? l) === "primary"
                })
            })), [w, c, l]), z = { ...e,
                steps: M
            }, [R, T] = (0, x.useMergeSemantic)([C, f], [k, p], {
                props: z
            }), H = (0, r.clsx)({
                [`${w}-rtl`]: "rtl" === b
            }, E, N, o, $, R.root, m), P = { ...T,
                mask: { ...T.root,
                    ...T.mask,
                    ...S,
                    ...h
                }
            }, [L, A] = (0, U.useZIndex)("Tour", g.zIndex);
            return n.default.createElement(iU.default.Provider, {
                value: A
            }, n.default.createElement(iG, { ...g,
                styles: P,
                classNames: R,
                closeIcon: d ? ? y,
                keyboard: u,
                zIndex: L,
                rootClassName: H,
                prefixCls: w,
                animated: !0,
                renderPanel: (e, t) => n.default.createElement(iK, {
                    styles: P,
                    classNames: R,
                    type: l,
                    stepProps: e,
                    current: t,
                    indicatorsRender: i,
                    actionsRender: a
                }),
                builtinPlacements: e => (0, iY.default)({
                    arrowPointAtCenter: e ? .arrowPointAtCenter ? ? !0,
                    autoAdjustOverflow: !0,
                    offset: I.marginXXS,
                    arrowWidth: I.sizePopupArrow,
                    borderRadius: I.borderRadius
                }),
                steps: M
            }))
        };
    i1._InternalPanelDoNotUseOrYouWillBeFired = i0;
    var i2 = e.i(94844);
    let i3 = e => {
            let t = new Map;
            return e.forEach((e, n) => {
                t.set(e, n)
            }), t
        },
        i4 = e => {
            let t, {
                    type: l,
                    actions: r,
                    moveToLeft: o,
                    moveToRight: i,
                    leftActive: a,
                    rightActive: s,
                    direction: c,
                    disabled: d
                } = e,
                u = "right" === l,
                f = u ? r[0] : r[1],
                p = u ? i : o,
                m = u ? s : a,
                h = (t = "right" === l, "rtl" !== c ? t ? n.default.createElement(nn.default, null) : n.default.createElement(nt.default, null) : t ? n.default.createElement(nt.default, null) : n.default.createElement(nn.default, null));
            return n.default.isValidElement(f) ? n.default.cloneElement(f, {
                disabled: d || !m,
                onClick: e => {
                    f ? .props ? .onClick ? .(e), p ? .(e)
                }
            }) : n.default.createElement(lN.default, {
                type: "primary",
                size: "small",
                disabled: d || !m,
                onClick: e => p ? .(e),
                icon: h
            }, f)
        },
        i8 = e => {
            let {
                className: t,
                style: l,
                oneWay: r,
                actions: o,
                ...i
            } = e;
            return n.default.createElement("div", {
                className: t,
                style: l
            }, n.default.createElement(i4, {
                type: "right",
                actions: o,
                ...i
            }), !r && n.default.createElement(i4, {
                type: "left",
                actions: o,
                ...i
            }), o.slice(r ? 1 : 2))
        },
        i5 = [];

    function i6(e, t) {
        let n = e.filter(e => t.has(e));
        return e.length === n.length ? e : n
    }

    function i9(e) {
        return Array.from(e).join(";")
    }
    let i7 = function(e, t, l) {
        let [r, i] = n.useMemo(() => [new Set(e.map(e => e ? .key)), new Set(t.map(e => e ? .key))], [e, t]), [a, s] = (0, eY.useControlledState)(i5, l), c = n.useMemo(() => i6(a, r), [a, r]), d = n.useMemo(() => i6(a, i), [a, i]);
        n.useEffect(() => {
            s([].concat((0, o.default)(i6(a, r)), (0, o.default)(i6(a, i))))
        }, [i9(r), i9(i)]);
        let u = (0, b.useEvent)(e => {
                s([].concat((0, o.default)(e), (0, o.default)(d)))
            }),
            f = (0, b.useEvent)(e => {
                s([].concat((0, o.default)(c), (0, o.default)(e)))
            });
        return [c, d, u, f]
    };
    var ae = e.i(38953);
    let at = e => {
        let {
            placeholder: t = "",
            value: l,
            prefixCls: r,
            disabled: o,
            onChange: i,
            handleClear: a
        } = e, s = n.useCallback(e => {
            i ? .(e), "" === e.target.value && a ? .()
        }, [i]);
        return n.createElement(nG.default, {
            placeholder: t,
            className: r,
            value: l,
            onChange: s,
            disabled: o,
            allowClear: !0,
            prefix: n.createElement(ae.default, null)
        })
    };
    var an = e.i(597440);
    let al = n.memo(e => {
            let t, {
                    prefixCls: l,
                    classNames: o,
                    styles: i,
                    renderedText: a,
                    renderedEl: s,
                    item: c,
                    checked: d,
                    disabled: u,
                    onClick: f,
                    onRemove: p,
                    showRemove: m
                } = e,
                h = u || c ? .disabled,
                g = (0, r.clsx)(`${l}-content-item`, o.item, {
                    [`${l}-content-item-disabled`]: h,
                    [`${l}-content-item-checked`]: d && !h
                });
            ("string" == typeof a || "number" == typeof a) && (t = String(a));
            let [v] = (0, eU.useLocale)("Transfer", rF.default.Transfer), b = {
                className: g,
                style: i.item,
                title: t
            }, y = n.createElement("span", {
                className: (0, r.clsx)(`${l}-content-item-text`, o.itemContent),
                style: i.itemContent
            }, s);
            return m ? n.createElement("li", { ...b
            }, y, n.createElement("button", {
                type: "button",
                disabled: h,
                className: `${l}-content-item-remove`,
                "aria-label": v ? .remove,
                onClick: () => p ? .(c)
            }, n.createElement(an.default, null))) : (b.onClick = h ? void 0 : e => f(c, e), n.createElement("li", { ...b
            }, n.createElement(nh.default, {
                className: (0, r.clsx)(`${l}-checkbox`, o.itemIcon),
                style: i.itemIcon,
                checked: d,
                disabled: h
            }), y))
        }),
        ar = ["handleFilter", "handleClear", "checkedKeys"],
        ao = n.forwardRef((e, t) => {
            let {
                prefixCls: l,
                classNames: o,
                styles: i,
                filteredRenderItems: a,
                selectedKeys: s,
                disabled: c,
                showRemove: d,
                pagination: u,
                onScroll: f,
                onItemSelect: p,
                onItemRemove: m
            } = e, [h, g] = n.useState(1), v = n.useMemo(() => u ? {
                simple: !0,
                showSizeChanger: !1,
                showLessItems: !1,
                ..."object" == typeof u ? u : {}
            } : null, [u]), [b, y] = (0, eY.useControlledState)(10, v ? .pageSize);
            n.useEffect(() => {
                v && g(Math.min(h, Math.ceil(a.length / b)))
            }, [a, v, b]);
            let $ = (e, t) => {
                    p(e.key, !s.includes(e.key), t)
                },
                x = e => {
                    m ? .([e.key])
                },
                S = n.useMemo(() => v ? a.slice((h - 1) * b, h * b) : a, [h, a, v, b]);
            n.useImperativeHandle(t, () => ({
                items: S
            }));
            let C = v ? n.createElement(rA.default, {
                size: "small",
                disabled: c,
                simple: v.simple,
                pageSize: b,
                showLessItems: v.showLessItems,
                showSizeChanger: v.showSizeChanger,
                className: `${l}-pagination`,
                total: a.length,
                current: h,
                onChange: e => {
                    g(e)
                },
                onShowSizeChange: (e, t) => {
                    g(e), y(t)
                }
            }) : null;
            return n.createElement(n.Fragment, null, n.createElement("ul", {
                className: (0, r.clsx)(`${l}-content`, o.list, {
                    [`${l}-content-show-remove`]: d
                }),
                style: i.list,
                onScroll: f
            }, (S || []).map(e => {
                let {
                    renderedEl: t,
                    renderedText: r,
                    item: a
                } = e;
                return n.createElement(al, {
                    key: a.key,
                    prefixCls: l,
                    classNames: o,
                    styles: i,
                    item: a,
                    renderedText: r,
                    renderedEl: t,
                    showRemove: d,
                    onClick: $,
                    onRemove: x,
                    checked: s.includes(a.key),
                    disabled: c
                })
            })), C)
        }),
        ai = () => null;

    function aa(e) {
        return e.filter(e => !e.disabled).map(e => e.key)
    }
    let as = e => {
            var t, l;
            let o, {
                    prefixCls: i,
                    style: a,
                    classNames: s,
                    styles: c,
                    dataSource: d = [],
                    titleText: u = "",
                    checkedKeys: f,
                    disabled: p,
                    showSearch: m = !1,
                    searchPlaceholder: h,
                    notFoundContent: g,
                    selectAll: v,
                    deselectAll: b,
                    selectCurrent: y,
                    selectInvert: $,
                    removeAll: x,
                    removeCurrent: S,
                    showSelectAll: C = !0,
                    showRemove: k,
                    pagination: w,
                    direction: E,
                    itemsUnit: N,
                    itemUnit: I,
                    selectAllLabel: M,
                    selectionsIcon: z,
                    footer: R,
                    renderList: T,
                    onItemSelectAll: H,
                    onItemRemove: P,
                    handleFilter: L,
                    handleClear: A,
                    filterOption: B,
                    render: O = ai
                } = e,
                W = `${i}-section`,
                D = `${i}-list`,
                F = m && "object" == typeof m ? { ...m,
                    defaultValue: m.defaultValue || ""
                } : {
                    defaultValue: "",
                    placeholder: ""
                },
                [_, j] = (0, n.useState)(F.defaultValue),
                X = (0, n.useRef)({}),
                q = e => {
                    j(e.target.value), L(e)
                },
                V = () => {
                    j(""), A()
                },
                G = (0, n.useMemo)(() => Array.isArray(g) ? g[+("left" !== E)] : g, [g, E]),
                [Y, U] = (0, n.useMemo)(() => {
                    let e = [],
                        t = [];
                    return d.forEach(l => {
                        var r;
                        let o, i, a = {
                            item: l,
                            renderedEl: (i = !!((o = O(l)) && !n.default.isValidElement(o) && "[object Object]" === Object.prototype.toString.call(o))) ? o.label : o,
                            renderedText: i ? o.value : o
                        };
                        (!_ || (r = a.renderedText, "function" == typeof B ? B(_, l, E) : r.includes(_))) && (e.push(l), t.push(a))
                    }), [e, t]
                }, [d, _]),
                K = (0, n.useMemo)(() => Y.filter(e => f.includes(e.key) && !e.disabled), [f, Y]),
                Q = (0, n.useMemo)(() => {
                    if (0 === K.length) return "none";
                    let e = i3(f);
                    return Y.every(t => e.has(t.key) || !!t.disabled) ? "all" : "part"
                }, [K.length, f, Y]),
                Z = n.default.createElement(nh.default, {
                    disabled: 0 === d.filter(e => !e.disabled).length || p,
                    checked: "all" === Q,
                    indeterminate: "part" === Q,
                    className: `${D}-checkbox`,
                    onChange: () => {
                        H ? .(Y.filter(e => !e.disabled).map(e => {
                            let {
                                key: t
                            } = e;
                            return t
                        }), "all" !== Q)
                    }
                }),
                J = R && (R.length < 2 ? R(e) : R(e, {
                    direction: E
                })),
                ee = J ? n.default.createElement("div", {
                    className: (0, r.clsx)(`${D}-footer`, s.footer),
                    style: c.footer
                }, J) : null;
            o = k ? [w ? {
                key: "removeCurrent",
                label: S,
                onClick() {
                    let e = aa((X.current ? .items || []).map(e => e.item));
                    P ? .(e)
                }
            } : null, {
                key: "removeAll",
                label: x,
                onClick() {
                    P ? .(aa(Y))
                }
            }].filter(Boolean) : [{
                key: "selectAll",
                label: "all" === Q ? b : v,
                onClick() {
                    let e = aa(Y);
                    H ? .(e, e.length !== f.length)
                }
            }, w ? {
                key: "selectCurrent",
                label: y,
                onClick() {
                    let e = X.current ? .items || [];
                    H ? .(aa(e.map(e => e.item)), !0)
                }
            } : null, {
                key: "selectInvert",
                label: $,
                onClick() {
                    let e = aa((X.current ? .items || []).map(e => e.item)),
                        t = new Set(f),
                        n = new Set(t);
                    e.forEach(e => {
                        t.has(e) ? n.delete(e) : n.add(e)
                    }), H ? .(Array.from(n), "replace")
                }
            }];
            let et = n.default.createElement(lm.default, {
                className: `${D}-header-dropdown`,
                menu: {
                    items: o
                },
                disabled: p
            }, void 0 !== z ? z : n.default.createElement(eT.default, null));
            return n.default.createElement("div", {
                className: (0, r.clsx)(W, s.section, {
                    [`${W}-with-pagination`]: !!w,
                    [`${W}-with-footer`]: !!J
                }),
                style: { ...a,
                    ...c.section
                }
            }, n.default.createElement("div", {
                className: (0, r.clsx)(`${D}-header`, s.header),
                style: c.header
            }, C ? n.default.createElement(n.default.Fragment, null, !k && !w && Z, et) : null, n.default.createElement("span", {
                className: `${D}-header-selected`
            }, (t = K.length, l = Y.length, M ? "function" == typeof M ? M({
                selectedCount: t,
                totalCount: l
            }) : M : n.default.createElement(n.default.Fragment, null, (t > 0 ? `${t}/` : "") + l, " ", l > 1 ? N : I))), n.default.createElement("span", {
                className: (0, r.clsx)(`${D}-header-title`, s.title),
                style: c.title
            }, u)), (() => {
                var t;
                let l, o, i, a = m ? n.default.createElement("div", {
                        className: `${D}-body-search-wrapper`
                    }, n.default.createElement(at, {
                        prefixCls: `${D}-search`,
                        onChange: q,
                        handleClear: V,
                        placeholder: F.placeholder || h,
                        value: _,
                        disabled: p
                    })) : null,
                    {
                        customize: d,
                        bodyContent: u
                    } = (t = { ...(0, ep.omit)(e, ar),
                        filteredItems: Y,
                        filteredRenderItems: U,
                        selectedKeys: f,
                        classNames: s,
                        styles: c
                    }, (i = !!(o = T ? T({ ...t,
                        onItemSelect: (e, n) => t.onItemSelect(e, n)
                    }) : null)) || (o = n.default.createElement(ao, {
                        ref: X,
                        ...t,
                        prefixCls: D
                    })), {
                        customize: i,
                        bodyContent: o
                    });
                return l = d ? n.default.createElement("div", {
                    className: `${D}-body-customize-wrapper`
                }, u) : Y.length ? u : n.default.createElement("div", {
                    className: `${D}-body-not-found`
                }, G), n.default.createElement("div", {
                    className: (0, r.clsx)(`${D}-body`, {
                        [`${D}-body-with-search`]: m
                    }, s.body),
                    style: c.body
                }, a, l)
            })(), ee)
        },
        ac = (e, t) => {
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
        ad = (0, c.genStyleHooks)("Transfer", e => {
            let t = (0, I.mergeToken)(e);
            return [(e => {
                let {
                    antCls: t,
                    iconCls: n,
                    componentCls: l,
                    marginXS: r,
                    marginXXS: o,
                    fontSizeIcon: i,
                    colorBgContainerDisabled: a
                } = e;
                return {
                    [l]: { ...(0, N.resetComponent)(e),
                        position: "relative",
                        display: "flex",
                        alignItems: "stretch",
                        [`${l}-disabled`]: {
                            [`${l}-section`]: {
                                background: a
                            }
                        },
                        [`${l}-section`]: (e => {
                            let {
                                componentCls: t,
                                colorBorder: n,
                                colorSplit: l,
                                lineWidth: r,
                                itemHeight: o,
                                headerHeight: i,
                                transferHeaderVerticalPadding: a,
                                itemPaddingBlock: s,
                                controlItemBgActive: c,
                                colorTextDisabled: d,
                                colorTextSecondary: u,
                                listHeight: f,
                                listWidth: p,
                                listWidthLG: m,
                                fontSizeIcon: h,
                                marginXS: g,
                                paddingSM: v,
                                lineType: b,
                                antCls: y,
                                iconCls: $,
                                motionDurationSlow: x,
                                controlItemBgHover: S,
                                borderRadiusLG: C,
                                colorBgContainer: k,
                                colorText: w,
                                controlItemBgActiveHover: I
                            } = e, M = (0, E.unit)(e.calc(C).sub(r).equal());
                            return {
                                display: "flex",
                                flexDirection: "column",
                                width: p,
                                height: f,
                                border: `${(0,E.unit)(r)} ${b} ${n}`,
                                borderRadius: e.borderRadiusLG,
                                "&-with-pagination": {
                                    width: m,
                                    height: "auto"
                                },
                                [`${t}-list`]: {
                                    "&-search": {
                                        [`${$}-search`]: {
                                            color: d
                                        }
                                    },
                                    "&-header": {
                                        display: "flex",
                                        flex: "none",
                                        alignItems: "center",
                                        height: i,
                                        padding: `${(0,E.unit)(e.calc(a).sub(r).equal())} ${(0,E.unit)(v)} ${(0,E.unit)(a)}`,
                                        color: w,
                                        background: k,
                                        borderBottom: `${(0,E.unit)(r)} ${b} ${l}`,
                                        borderRadius: `${(0,E.unit)(C)} ${(0,E.unit)(C)} 0 0`,
                                        "> *:not(:last-child)": {
                                            marginInlineEnd: 4
                                        },
                                        "> *": {
                                            flex: "none"
                                        },
                                        "&-title": { ...N.textEllipsis,
                                            flex: "0 1 auto",
                                            textAlign: "end",
                                            marginInlineStart: "auto"
                                        },
                                        "&-dropdown": { ...(0, N.resetIcon)(),
                                            fontSize: h,
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
                                            padding: v
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
                                            padding: `${(0,E.unit)(s)} ${(0,E.unit)(v)}`,
                                            transition: `all ${x}`,
                                            "> *:not(:last-child)": {
                                                marginInlineEnd: g
                                            },
                                            "> *": {
                                                flex: "none"
                                            },
                                            "&-text": { ...N.textEllipsis,
                                                flex: "auto"
                                            },
                                            "&-remove": { ...(0, N.operationUnit)(e),
                                                color: n,
                                                "&:hover, &:focus": {
                                                    color: u
                                                }
                                            },
                                            [`&:not(${t}-list-content-item-disabled)`]: {
                                                "&:hover": {
                                                    backgroundColor: S,
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
                                        borderTop: `${(0,E.unit)(r)} ${b} ${l}`,
                                        [`${y}-pagination-options`]: {
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
                                        borderTop: `${(0,E.unit)(r)} ${b} ${l}`
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
                            margin: `0 ${(0,E.unit)(r)}`,
                            verticalAlign: "middle",
                            gap: o,
                            [`${t}-btn ${n}`]: {
                                fontSize: i
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
                } = e, o = `${t}-table`, i = `${t}-input`;
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
                        [`${i}[disabled]`]: {
                            backgroundColor: "transparent"
                        }
                    }
                }
            })(t), (e => {
                let {
                    componentCls: t
                } = e;
                return {
                    [`${t}-status-error`]: { ...ac(e, e.colorError)
                    },
                    [`${t}-status-warning`]: { ...ac(e, e.colorWarning)
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
            } = e, i = Math.round(t * n);
            return {
                listWidth: 180,
                listHeight: 200,
                listWidthLG: 250,
                headerHeight: r,
                itemHeight: l,
                itemPaddingBlock: (l - i) / 2,
                transferHeaderVerticalPadding: Math.ceil((r - o - i) / 2)
            }
        }),
        au = e => {
            let {
                prefixCls: t,
                className: l,
                rootClassName: i,
                classNames: a,
                styles: c,
                style: d,
                listStyle: u,
                operationStyle: f,
                operations: p,
                actions: m,
                dataSource: h,
                targetKeys: g = [],
                selectedKeys: v,
                selectAllLabels: b = [],
                locale: y = {},
                titles: $,
                disabled: S,
                showSearch: C = !1,
                showSelectAll: k,
                oneWay: w,
                pagination: E,
                status: N,
                selectionsIcon: I,
                filterOption: M,
                render: z,
                footer: R,
                children: T,
                rowKey: H,
                onScroll: P,
                onChange: L,
                onSearch: A,
                onSelectChange: B
            } = e, {
                getPrefixCls: O,
                renderEmpty: W,
                direction: D,
                className: F,
                style: _,
                classNames: j,
                styles: X,
                selectionsIcon: q
            } = (0, s.useComponentConfig)("transfer"), V = (0, n.useContext)(t2.default), G = S ? ? V, Y = { ...e,
                disabled: G
            }, U = O("transfer", t), [K, Q] = ad(U), [Z, J, ee] = ((e, t, l) => {
                let r = n.useMemo(() => (e || []).map(e => t ? { ...e,
                        key: t(e)
                    } : e), [e, t]),
                    [o, i] = n.useMemo(() => {
                        let e = [],
                            t = Array.from({
                                length: l ? .length ? ? 0
                            }),
                            n = i3(l || []);
                        return r.forEach(l => {
                            n.has(l.key) ? t[n.get(l.key)] = l : e.push(l)
                        }), [e, t]
                    }, [r, l]);
                return [r, o.filter(Boolean), i.filter(Boolean)]
            })(h, H, g), [et, en, el, er] = i7(J, ee, v), [eo, ei] = (0, i2.useMultipleSelect)(e => e.key), [ea, es] = (0, i2.useMultipleSelect)(e => e.key), ec = (0, n.useCallback)((e, t) => {
                "left" === e ? el("function" == typeof t ? t(et || []) : t) : er("function" == typeof t ? t(en || []) : t)
            }, [et, en]), ed = (e, t) => {
                ("left" === e ? ei : es)(t)
            }, eu = (0, n.useCallback)((e, t) => {
                "left" === e ? B ? .(t, en) : B ? .(et, t)
            }, [et, en]), ef = e => {
                let t, n = "right" === e ? et : en,
                    l = (t = new Map, Z.forEach((e, n) => {
                        let {
                            disabled: l,
                            key: r
                        } = e;
                        l && t.set(r, n)
                    }), t),
                    r = n.filter(e => !l.has(e)),
                    o = i3(r),
                    i = "right" === e ? r.concat(g) : g.filter(e => !o.has(e)),
                    a = "right" === e ? "left" : "right";
                ec(a, []), eu(a, []), L ? .(i, e, r)
            }, ep = (e, t, n) => {
                ec(e, l => {
                    let r = [];
                    if ("replace" === n) r = t;
                    else if (n) r = Array.from(new Set([].concat((0, o.default)(l), (0, o.default)(t))));
                    else {
                        let e = i3(t);
                        r = l.filter(t => !e.has(t))
                    }
                    return eu(e, r), r
                }), ed(e, null)
            }, em = (t, n, l, r) => {
                let i = "left" === t,
                    a = (0, o.default)(i ? et : en),
                    s = new Set(a),
                    c = (0, o.default)(i ? J : ee).filter(e => !e ? .disabled),
                    d = c.findIndex(e => e.key === n);
                if (r && a.length > 0)("left" === t ? eo : ea)(d, c, s);
                else s.has(n) && (s.delete(n), ed(t, null)), l && (s.add(n), ed(t, d));
                let u = Array.from(s);
                eu(t, u), e.selectedKeys || ec(t, u)
            }, eh = e => "function" == typeof u ? u({
                direction: e
            }) : u || {}, {
                hasFeedback: eg,
                status: ev
            } = (0, n.useContext)(eK.FormItemInputContext), eb = (0, t0.getMergedStatus)(ev, N), ey = !T && E, e$ = ee.filter(e => en.includes(e.key) && !e.disabled).length > 0, ex = J.filter(e => et.includes(e.key) && !e.disabled).length > 0, [eS, eC] = (0, x.useMergeSemantic)([j, a], [X, c], {
                props: Y
            }), ek = (0, r.clsx)(U, {
                [`${U}-disabled`]: G,
                [`${U}-customize-list`]: !!T,
                [`${U}-rtl`]: "rtl" === D
            }, (0, t0.getStatusClassNames)(U, eb, eg), F, l, i, K, Q, eS.root), [ew] = (0, eU.useLocale)("Transfer", rF.default.Transfer), eE = { ...ew,
                notFoundContent: W ? .("Transfer") || n.default.createElement(t1.default, {
                    componentName: "Transfer"
                }),
                ...y
            }, [eN, eI] = $ ? ? eE.titles ? ? [], eM = I ? ? q;
            return n.default.createElement("div", {
                className: ek,
                style: { ..._,
                    ...eC.root,
                    ...d
                }
            }, n.default.createElement(as, {
                prefixCls: U,
                style: eh("left"),
                classNames: eS,
                styles: eC,
                titleText: eN,
                dataSource: J,
                filterOption: M,
                checkedKeys: et,
                handleFilter: e => A ? .("left", e.target.value),
                handleClear: () => A ? .("left", ""),
                onItemSelect: (e, t, n) => {
                    em("left", e, t, n ? .shiftKey)
                },
                onItemSelectAll: (e, t) => {
                    ep("left", e, t)
                },
                render: z,
                showSearch: C,
                renderList: T,
                footer: R,
                onScroll: e => {
                    P ? .("left", e)
                },
                disabled: G,
                direction: "rtl" === D ? "right" : "left",
                showSelectAll: k,
                selectAllLabel: b[0],
                pagination: ey,
                selectionsIcon: eM,
                ...eE
            }), n.default.createElement(i8, {
                className: (0, r.clsx)(`${U}-actions`, eS.actions),
                rightActive: ex,
                moveToRight: () => {
                    ef("right"), ed("right", null)
                },
                leftActive: e$,
                actions: m || p || [],
                moveToLeft: () => {
                    ef("left"), ed("left", null)
                },
                style: { ...f,
                    ...eC.actions
                },
                disabled: G,
                direction: D,
                oneWay: w
            }), n.default.createElement(as, {
                prefixCls: U,
                style: eh("right"),
                classNames: eS,
                styles: eC,
                titleText: eI,
                dataSource: ee,
                filterOption: M,
                checkedKeys: en,
                handleFilter: e => A ? .("right", e.target.value),
                handleClear: () => A ? .("right", ""),
                onItemSelect: (e, t, n) => {
                    em("right", e, t, n ? .shiftKey)
                },
                onItemSelectAll: (e, t) => {
                    ep("right", e, t)
                },
                onItemRemove: e => {
                    ec("right", []), L ? .(g.filter(t => !e.includes(t)), "left", (0, o.default)(e))
                },
                render: z,
                showSearch: C,
                renderList: T,
                footer: R,
                onScroll: e => {
                    P ? .("right", e)
                },
                disabled: G,
                direction: "rtl" === D ? "left" : "right",
                showSelectAll: k,
                selectAllLabel: b[1],
                showRemove: w,
                pagination: ey,
                selectionsIcon: eM,
                ...eE
            }))
        };
    au.List = as, au.Search = at, au.Operation = i8;
    var af = e.i(275219),
        tu = tu;
    let ap = e => !e || e.disabled || e.disableCheckbox || !1 === e.checkable,
        am = () => null;

    function ah(e) {
        if (!e) return e;
        let t = { ...e
        };
        return "props" in t || Object.defineProperty(t, "props", {
            get: () => ((0, tP.default)(!1, "New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."), t)
        }), t
    }

    function ag(e) {
        let t = n.useRef();
        return t.current = e, n.useCallback(function() {
            for (var e = arguments.length, n = Array(e), l = 0; l < e; l++) n[l] = arguments[l];
            return t.current(...n)
        }, [])
    }
    let av = n.createContext(null);
    var tO = tO,
        ab = e.i(292379),
        ay = e.i(375015),
        a$ = e.i(178749);
    let ax = n.createContext(null);

    function aS() {
        return (aS = Object.assign.bind()).apply(this, arguments)
    }
    let aC = {
            width: 0,
            height: 0,
            display: "flex",
            overflow: "hidden",
            opacity: 0,
            border: 0,
            padding: 0,
            margin: 0
        },
        ak = n.forwardRef((e, t) => {
            let {
                prefixCls: l,
                multiple: r,
                searchValue: o,
                toggleOpen: i,
                open: a,
                notFoundContent: s
            } = (0, tO.default)(), {
                virtual: c,
                listHeight: d,
                listItemHeight: u,
                listItemScrollOffset: f,
                treeData: p,
                fieldNames: m,
                onSelect: h,
                popupMatchSelectWidth: g,
                treeExpandAction: v,
                treeTitleRender: y,
                onPopupScroll: $,
                leftMaxCount: x,
                leafCountOnly: S,
                valueEntities: C,
                classNames: k,
                styles: w
            } = n.useContext(ax), {
                checkable: E,
                checkedKeys: N,
                halfCheckedKeys: I,
                treeExpandedKeys: M,
                treeDefaultExpandAll: z,
                treeDefaultExpandedKeys: R,
                onTreeExpand: T,
                treeIcon: H,
                showTreeIcon: P,
                switcherIcon: L,
                treeLine: A,
                treeNodeFilterProp: B,
                loadData: O,
                treeLoadedKeys: W,
                treeMotion: D,
                onTreeLoad: F,
                keyEntities: _
            } = n.useContext(av), j = n.useRef(), X = (0, a$.default)(() => p, [a, p], (e, t) => t[0] && e[1] !== t[1]), q = n.useMemo(() => E ? {
                checked: N,
                halfChecked: I
            } : null, [E, N, I]);
            n.useEffect(() => {
                a && !r && N.length && j.current ? .scrollTo({
                    key: N[0]
                })
            }, [a]);
            let V = e => {
                    e.preventDefault()
                },
                G = (e, t) => {
                    let {
                        node: n
                    } = t;
                    !(E && ap(n)) && (h(n.key, {
                        selected: !N.includes(n.key)
                    }), r || i(!1))
                },
                [Y, U] = n.useState(R),
                [K, Q] = n.useState(null),
                Z = n.useMemo(() => M ? [...M] : o ? K : Y, [Y, K, M, o]),
                J = String(o).toLowerCase(),
                ee = e => !!J && String(e[B]).toLowerCase().includes(J);
            n.useEffect(() => {
                let e, t;
                o && Q((e = [], (t = n => {
                    n.forEach(n => {
                        let l = n[m.children];
                        l && (e.push(n[m.value]), t(l))
                    })
                })(p), e))
            }, [o]);
            let [et, en] = n.useState(() => new Map);
            n.useEffect(() => {
                x && en(new Map)
            }, [x]);
            let el = (0, b.useEvent)(e => {
                    let t = e[m.value];
                    if (N.includes(t) || null === x) return !1;
                    if (x <= 0) return !0;
                    if (S && x) {
                        let t = e[m.value];
                        if (!et.has(t)) {
                            let e = C.get(t);
                            if (0 === (e.children || []).length) et.set(t, !1);
                            else {
                                let n = e.children.filter(e => !e.node.disabled && !e.node.disableCheckbox && !N.includes(e.node[m.value])).length;
                                et.set(t, n > x)
                            }
                        }
                        return et.get(t)
                    }
                    return !1
                }),
                er = e => {
                    for (let t of e)
                        if (!t.disabled && !1 !== t.selectable) {
                            if (!o || ee(t)) return t;
                            if (t[m.children]) {
                                let e = er(t[m.children]);
                                if (e) return e
                            }
                        }
                    return null
                },
                [eo, ei] = n.useState(null),
                ea = _[eo];
            n.useEffect(() => {
                if (!a) return;
                let e = null;
                if (r || !N.length || o) {
                    let t;
                    e = (t = er(X)) ? t[m.value] : null
                } else e = N[0];
                ei(e)
            }, [a, o]), n.useImperativeHandle(t, () => ({
                scrollTo: j.current ? .scrollTo,
                onKeyDown: e => {
                    let {
                        which: t
                    } = e;
                    switch (t) {
                        case tX.default.UP:
                        case tX.default.DOWN:
                        case tX.default.LEFT:
                        case tX.default.RIGHT:
                            j.current ? .onKeyDown(e);
                            break;
                        case tX.default.ENTER:
                            if (ea) {
                                let e = el(ea.node),
                                    {
                                        selectable: t,
                                        value: n,
                                        disabled: l
                                    } = ea ? .node || {};
                                !1 === t || l || e || G(null, {
                                    node: {
                                        key: eo
                                    },
                                    selected: !N.includes(n)
                                })
                            }
                            break;
                        case tX.default.ESC:
                            i(!1)
                    }
                },
                onKeyUp: () => {}
            }));
            let es = (0, a$.default)(() => !o, [o, M || Y], (e, t) => {
                let [n] = e, [l, r] = t;
                return n !== l && !!(l || r)
            });
            if (0 === X.length) return n.createElement("div", {
                role: "listbox",
                className: `${l}-empty`,
                onMouseDown: V
            }, s);
            let ec = {
                fieldNames: m
            };
            return W && (ec.loadedKeys = W), Z && (ec.expandedKeys = Z), n.createElement("div", {
                onMouseDown: V
            }, ea && a && n.createElement("span", {
                style: aC,
                "aria-live": "assertive"
            }, ea.node.value), n.createElement(ay.UnstableContext.Provider, {
                value: {
                    nodeDisabled: el
                }
            }, n.createElement(ab.default, aS({
                classNames: k ? .popup,
                styles: w ? .popup,
                ref: j,
                focusable: !1,
                prefixCls: `${l}-tree`,
                treeData: X,
                height: d,
                itemHeight: u,
                itemScrollOffset: f,
                virtual: !1 !== c && !1 !== g,
                multiple: r,
                icon: H,
                showIcon: P,
                switcherIcon: L,
                showLine: A,
                loadData: es ? O : null,
                motion: D,
                activeKey: eo,
                checkable: E,
                checkStrictly: !0,
                checkedKeys: q,
                selectedKeys: E ? [] : N,
                defaultExpandAll: z,
                titleRender: y
            }, ec, {
                onActiveChange: ei,
                onSelect: G,
                onCheck: G,
                onExpand: e => {
                    U(e), Q(e), T && T(e)
                },
                onLoad: F,
                filterTreeNode: ee,
                expandAction: v,
                onScroll: $
            }))))
        }),
        aw = "SHOW_ALL",
        aE = "SHOW_PARENT",
        aN = "SHOW_CHILD";

    function aI(e, t, n, l) {
        let r = new Set(e);
        return t === aN ? e.filter(e => {
            let t = n[e];
            return !t || !t.children || !t.children.some(e => {
                let {
                    node: t
                } = e;
                return r.has(t[l.value])
            }) || !t.children.every(e => {
                let {
                    node: t
                } = e;
                return ap(t) || r.has(t[l.value])
            })
        }) : t === aE ? e.filter(e => {
            let t = n[e],
                l = t ? t.parent : null;
            return !l || ap(l.node) || !r.has(l.key)
        }) : e
    }

    function aM() {
        return (aM = Object.assign.bind()).apply(this, arguments)
    }
    let az = n.forwardRef((e, t) => {
        var l;
        let r, {
                id: o,
                prefixCls: i = "rc-tree-select",
                value: a,
                defaultValue: s,
                onChange: c,
                onSelect: d,
                onDeselect: u,
                showSearch: f,
                searchValue: p,
                inputValue: m,
                onSearch: h,
                autoClearSearchValue: g,
                filterTreeNode: v,
                treeNodeFilterProp: b,
                showCheckedStrategy: y,
                treeNodeLabelProp: $,
                multiple: x,
                treeCheckable: S,
                treeCheckStrictly: C,
                labelInValue: k,
                maxCount: w,
                fieldNames: E,
                treeDataSimpleMode: N,
                treeData: I,
                children: M,
                loadData: z,
                treeLoadedKeys: R,
                onTreeLoad: T,
                treeDefaultExpandAll: H,
                treeExpandedKeys: P,
                treeDefaultExpandedKeys: L,
                onTreeExpand: A,
                treeExpandAction: B,
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
            ee = (0, tf.default)(o),
            et = S && !C,
            en = S || C,
            el = C || k,
            er = en || x,
            [eo, ei] = function(e, t) {
                let {
                    searchValue: l,
                    inputValue: r,
                    onSearch: o,
                    autoClearSearchValue: i,
                    filterTreeNode: a,
                    treeNodeFilterProp: s
                } = t;
                return n.useMemo(() => {
                    let t = "object" == typeof e,
                        n = {
                            searchValue: l ? ? r,
                            onSearch: o,
                            autoClearSearchValue: i,
                            filterTreeNode: a,
                            treeNodeFilterProp: s,
                            ...t ? e : {}
                        };
                    return [!!t || e, n]
                }, [e, l, r, o, i, a, s])
            }(f, {
                searchValue: p,
                inputValue: m,
                onSearch: h,
                autoClearSearchValue: g,
                filterTreeNode: v,
                treeNodeFilterProp: b
            }),
            {
                searchValue: ea,
                onSearch: es,
                autoClearSearchValue: ec = !0,
                filterTreeNode: ed,
                treeNodeFilterProp: eu = "value"
            } = ei,
            [ef, ep] = (0, tm.default)(s, a),
            em = n.useMemo(() => S ? y || aN : aw, [y, S]),
            eh = n.useMemo(() => (e => {
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
            })(E), [JSON.stringify(E)]),
            [eg, ev] = (0, tm.default)("", ea),
            eb = eg || "",
            ey = n.useMemo(() => I ? N ? function(e, t) {
                let {
                    id: n,
                    pId: l,
                    rootPId: r
                } = t, o = new Map, i = [];
                return e.forEach(e => {
                    let t = e[n],
                        l = { ...e,
                            key: e.key || t
                        };
                    o.set(t, l)
                }), o.forEach(e => {
                    let t = e[l],
                        n = o.get(t);
                    n ? (n.children = n.children || [], n.children.push(e)) : (t === r || null === r) && i.push(e)
                }), i
            }(I, {
                id: "id",
                pId: "pId",
                rootPId: null,
                ..."object" == typeof N ? N : {}
            }) : I : function e(t) {
                return (0, l6.default)(t).map(t => {
                    if (!n.isValidElement(t) || !t.type) return null;
                    let {
                        key: l,
                        props: {
                            children: r,
                            value: o,
                            ...i
                        }
                    } = t, a = {
                        key: l,
                        value: o,
                        ...i
                    }, s = e(r);
                    return s.length && (a.children = s), a
                }).filter(e => e)
            }(M), [M, N, I]),
            {
                keyEntities: e$,
                valueEntities: ex
            } = n.useMemo(() => (0, tT.convertDataToEntities)(ey, {
                fieldNames: eh,
                initWrapper: e => ({ ...e,
                    valueEntities: new Map
                }),
                processEntity: (e, t) => {
                    let n = e.node[eh.value];
                    t.valueEntities.set(n, e)
                }
            }), [ey, eh]),
            eS = n.useCallback(e => {
                let t = [],
                    n = [];
                return e.forEach(e => {
                    ex.has(e) ? n.push(e) : t.push(e)
                }), {
                    missingRawValues: t,
                    existRawValues: n
                }
            }, [ex]),
            eC = ((e, t, l) => {
                let {
                    fieldNames: r,
                    treeNodeFilterProp: o,
                    filterTreeNode: i
                } = l, {
                    children: a
                } = r;
                return n.useMemo(() => {
                    if (!t || !1 === i) return e;
                    let n = "function" == typeof i ? i : (e, n) => String(n[o]).toUpperCase().includes(t.toUpperCase()),
                        l = function(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return e.reduce((e, o) => {
                                let i = o[a],
                                    s = r || n(t, ah(o)),
                                    c = l(i || [], s);
                                return (s || c.length) && e.push({ ...o,
                                    isLeaf: void 0,
                                    [a]: c
                                }), e
                            }, [])
                        };
                    return l(e)
                }, [e, t, a, o, i])
            })(ey, eb, {
                fieldNames: eh,
                treeNodeFilterProp: eu,
                filterTreeNode: ed
            }),
            ek = n.useCallback(e => {
                if (e) {
                    if ($) return e[$];
                    let {
                        _title: t
                    } = eh;
                    for (let n = 0; n < t.length; n += 1) {
                        let l = e[t[n]];
                        if (void 0 !== l) return l
                    }
                }
            }, [eh, $]),
            ew = n.useCallback(e => (Array.isArray(e) ? e : void 0 !== e ? [e] : []).map(e => e && "object" == typeof e ? e : {
                value: e
            }), []),
            eE = n.useCallback(e => ew(e).map(e => {
                let t, {
                        label: n
                    } = e,
                    {
                        value: l,
                        halfChecked: r
                    } = e,
                    o = ex.get(l);
                return o ? (n = U ? U(o.node) : n ? ? ek(o.node), t = o.node.disabled) : void 0 === n && (n = ew(ef).find(e => e.value === l).label), {
                    label: n,
                    value: l,
                    halfChecked: r,
                    disabled: t
                }
            }), [ex, ek, ew, ef]),
            eN = n.useMemo(() => ew(null === ef ? [] : ef), [ew, ef]),
            [eI, eM] = n.useMemo(() => {
                let e = [],
                    t = [];
                return eN.forEach(n => {
                    n.halfChecked ? t.push(n) : e.push(n)
                }), [e, t]
            }, [eN]),
            ez = n.useMemo(() => eI.map(e => e.value), [eI]),
            [eR, eT] = n.useMemo(() => {
                let e = e => e.map(e => {
                        let {
                            value: t
                        } = e;
                        return t
                    }),
                    t = e(eI),
                    n = e(eM),
                    l = t.filter(e => !e$[e]),
                    r = t,
                    o = n;
                if (et) {
                    let e = (0, tL.conductCheck)(t, !0, e$);
                    r = e.checkedKeys, o = e.halfCheckedKeys
                }
                return [Array.from(new Set([...l, ...r])), o]
            }, [eI, eM, et, e$]),
            [eH] = (l = n.useMemo(() => {
                let e = eE(aI(eR, em, e$, eh).map(e => e$[e] ? .node ? .[eh.value] ? ? e).map(e => {
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
            }, [eh, er, eR, eI, eE, em, e$]), r = n.useRef({
                valueLabels: new Map
            }), n.useMemo(() => {
                let {
                    valueLabels: e
                } = r.current, t = new Map, n = l.map(n => {
                    let {
                        value: l,
                        label: r
                    } = n, o = r ? ? e.get(l);
                    return t.set(l, o), { ...n,
                        label: o
                    }
                });
                return r.current.valueLabels = t, [n]
            }, [l])),
            eP = n.useMemo(() => er && ("SHOW_CHILD" === em || C || !S) ? w : null, [w, er, C, em, S]),
            eL = ag((e, t, l) => {
                let r = aI(e, em, e$, eh);
                if ((!eP || !(r.length > eP)) && (ep(eE(e)), ec && ev(""), c)) {
                    let a = e;
                    et && (a = r.map(e => {
                        let t = ex.get(e);
                        return t ? t.node[eh.value] : e
                    }));
                    let {
                        triggerValue: s,
                        selected: d
                    } = t || {
                        triggerValue: void 0,
                        selected: void 0
                    }, u = a;
                    C && (u = [...u, ...eM.filter(e => !a.includes(e.value))]);
                    let f = eE(u),
                        p = {
                            preValue: eI,
                            triggerValue: s
                        },
                        m = !0;
                    (C || "selection" === l && !d) && (m = !1);
                    var o = m;
                    let h = null,
                        g = null;

                    function i() {
                        g || (g = [], function t(l) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0",
                                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return l.map((l, i) => {
                                let a = `${r}-${i}`,
                                    c = l[eh.value],
                                    d = e.includes(c),
                                    u = t(l[eh.children] || [], a, d),
                                    f = n.createElement(am, l, u.map(e => e.node));
                                if (s === c && (h = f), d) {
                                    let e = {
                                        pos: a,
                                        node: f,
                                        children: u
                                    };
                                    return o || g.push(e), e
                                }
                                return null
                            }).filter(e => e)
                        }(ey), g.sort((t, n) => {
                            let {
                                node: {
                                    props: {
                                        value: l
                                    }
                                }
                            } = t, {
                                node: {
                                    props: {
                                        value: r
                                    }
                                }
                            } = n;
                            return e.indexOf(l) - e.indexOf(r)
                        }))
                    }
                    Object.defineProperty(p, "triggerNode", {
                        get: () => ((0, tP.default)(!1, "`triggerNode` is deprecated. Please consider decoupling data with node."), i(), h)
                    }), Object.defineProperty(p, "allCheckedNodes", {
                        get: () => ((0, tP.default)(!1, "`allCheckedNodes` is deprecated. Please consider decoupling data with node."), i(), o) ? g : g.map(e => {
                            let {
                                node: t
                            } = e;
                            return t
                        })
                    }), en ? p.checked = d : p.selected = d;
                    let v = el ? f : f.map(e => e.value);
                    c(er ? v : v[0], el ? null : f.map(e => e.label), p)
                }
            }),
            eA = n.useCallback((e, t) => {
                let {
                    selected: n,
                    source: l
                } = t, r = e$[e], o = r ? .node, i = o ? .[eh.value] ? ? e;
                if (er) {
                    let e = n ? [...ez, i] : eR.filter(e => e !== i);
                    if (et) {
                        let t, {
                                missingRawValues: l,
                                existRawValues: r
                            } = eS(e),
                            o = r.map(e => ex.get(e).key);
                        n ? {
                            checkedKeys: t
                        } = (0, tL.conductCheck)(o, !0, e$) : {
                            checkedKeys: t
                        } = (0, tL.conductCheck)(o, {
                            checked: !1,
                            halfCheckedKeys: eT
                        }, e$), e = [...l, ...t.map(e => e$[e].node[eh.value])]
                    }
                    eL(e, {
                        selected: n,
                        triggerValue: i
                    }, l || "option")
                } else eL([i], {
                    selected: !0,
                    triggerValue: i
                }, "option");
                n || !er ? d ? .(i, ah(o)) : u ? .(i, ah(o))
            }, [eS, ex, e$, eh, er, ez, eL, et, d, u, eR, eT, w]),
            eB = n.useCallback(e => {
                _ && _(e)
            }, [_]),
            eO = ag((e, t) => {
                let n = e.map(e => e.value);
                "clear" === t.type ? eL(n, {}, "selection") : t.values.length && eA(t.values[0].value, {
                    selected: !1,
                    source: "selection"
                })
            }),
            eW = n.useMemo(() => ({
                virtual: O,
                popupMatchSelectWidth: j,
                listHeight: W,
                listItemHeight: D,
                listItemScrollOffset: F,
                treeData: eC,
                fieldNames: eh,
                onSelect: eA,
                treeExpandAction: B,
                treeTitleRender: U,
                onPopupScroll: K,
                leftMaxCount: void 0 === w ? null : w - eH.length,
                leafCountOnly: "SHOW_CHILD" === em && !C && !!S,
                valueEntities: ex,
                classNames: Q,
                styles: Z
            }), [O, j, W, D, F, eC, eh, eA, B, U, K, w, eH.length, em, C, S, ex, Q, Z]),
            eD = n.useMemo(() => ({
                checkable: en,
                loadData: z,
                treeLoadedKeys: R,
                onTreeLoad: T,
                checkedKeys: eR,
                halfCheckedKeys: eT,
                treeDefaultExpandAll: H,
                treeExpandedKeys: P,
                treeDefaultExpandedKeys: L,
                onTreeExpand: A,
                treeIcon: q,
                treeMotion: Y,
                showTreeIcon: V,
                switcherIcon: G,
                treeLine: X,
                treeNodeFilterProp: eu,
                keyEntities: e$
            }), [en, z, R, T, eR, eT, H, P, L, A, q, Y, V, G, X, eu, e$]);
        return n.createElement(ax.Provider, {
            value: eW
        }, n.createElement(av.Provider, {
            value: eD
        }, n.createElement(tu.default, aM({
            ref: t
        }, J, {
            classNames: Q,
            styles: Z,
            id: ee,
            prefixCls: i,
            mode: er ? "multiple" : void 0,
            displayValues: eH,
            onDisplayValuesChange: eO,
            autoClearSearchValue: ec,
            showSearch: eo,
            searchValue: eb,
            onSearch: e => {
                ev(e), es ? .(e)
            },
            OptionList: ak,
            emptyOptions: !ey.length,
            onPopupVisibleChange: eB,
            popupMatchSelectWidth: j
        }))))
    });
    az.TreeNode = am, az.SHOW_ALL = aw, az.SHOW_PARENT = aE, az.SHOW_CHILD = aN;
    var aR = e.i(170938),
        aT = e.i(278587);
    aT.initComponentToken;
    let aH = n.forwardRef((e, t) => {
            let l, {
                    prefixCls: o,
                    size: i,
                    disabled: a,
                    bordered: d = !0,
                    style: u,
                    className: f,
                    rootClassName: p,
                    treeCheckable: m,
                    multiple: h,
                    listHeight: g = 256,
                    listItemHeight: v,
                    placement: b,
                    notFoundContent: y,
                    switcherIcon: $,
                    treeLine: S,
                    getPopupContainer: k,
                    popupClassName: w,
                    dropdownClassName: N,
                    treeIcon: M = !1,
                    transitionName: z,
                    choiceTransitionName: R = "",
                    status: T,
                    treeExpandAction: H,
                    builtinPlacements: P,
                    dropdownMatchSelectWidth: L,
                    popupMatchSelectWidth: A,
                    allowClear: B,
                    variant: O,
                    dropdownStyle: W,
                    dropdownRender: F,
                    popupRender: _,
                    onDropdownVisibleChange: j,
                    onOpenChange: X,
                    tagRender: q,
                    maxCount: V,
                    showCheckedStrategy: G,
                    treeCheckStrictly: Y,
                    styles: K,
                    classNames: Q,
                    ...Z
                } = e,
                {
                    getPrefixCls: J,
                    getPopupContainer: ee,
                    direction: et,
                    styles: en,
                    classNames: el,
                    switcherIcon: er
                } = (0, s.useComponentConfig)("treeSelect"),
                {
                    renderEmpty: eo,
                    virtual: ei,
                    popupMatchSelectWidth: ea,
                    popupOverflow: es
                } = n.useContext(s.ConfigContext),
                [, ec] = (0, D.useToken)(),
                ed = v ? ? ec ? .controlHeightSM + ec ? .paddingXXS,
                eu = J(),
                ef = J("select", o),
                em = J("select-tree", o),
                eh = J("tree-select", o),
                {
                    compactSize: eg,
                    compactItemClassnames: ev
                } = (0, t9.useCompactItemContext)(ef, et),
                eb = (0, C.default)(ef),
                ey = (0, C.default)(eh),
                [e$, ex] = (0, t4.default)(ef, eb);
            (0, c.genStyleHooks)("TreeSelect", e => (e => {
                let {
                    componentCls: t,
                    treePrefixCls: n,
                    colorBgElevated: l
                } = e, r = `.${n}`;
                return [{
                    [`${t}-dropdown`]: [{
                        padding: `${(0,E.unit)(e.paddingXS)} ${(0,E.unit)(e.calc(e.paddingXS).div(2).equal())}`
                    }, (0, aT.genTreeStyle)(n, (0, I.mergeToken)(e, {
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
                    }, (0, no.getStyle)(`${n}-checkbox`, e), {
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
            })((0, I.mergeToken)(e, {
                treePrefixCls: em
            })), aT.initComponentToken, {
                resetFont: !1
            })(eh, ey);
            let [eS, eC] = (0, tl.default)("treeSelect", O, d), ek = (0, tn.default)(e => i ? ? eg ? ? e), ew = n.useContext(t2.default), eE = a ? ? ew, {
                status: eN,
                hasFeedback: eI,
                isFormItemInput: eM,
                feedbackIcon: ez
            } = n.useContext(eK.FormItemInputContext), eR = (0, t0.getMergedStatus)(eN, T), eT = { ...e,
                size: ek,
                disabled: eE,
                status: eR,
                variant: eS
            }, [eH, eP] = (0, x.useMergeSemantic)([el, Q], [en, K], {
                props: eT
            }, {
                popup: {
                    _default: "root"
                }
            }), eL = (0, r.clsx)(w || N, `${eh}-dropdown`, {
                [`${eh}-dropdown-rtl`]: "rtl" === et
            }, p, eH.root, eH.popup ? .root, ex, eb, ey, e$), eA = (0, t5.default)(_ || F), eB = !!(m || h), eO = n.useMemo(() => {
                if (!V || ("SHOW_ALL" !== G || Y) && "SHOW_PARENT" !== G) return V
            }, [V, G, Y]), eW = (0, t6.default)(e.suffixIcon, e.showArrow), {
                suffixIcon: eD,
                removeIcon: eF,
                clearIcon: e_
            } = (0, t8.default)({ ...Z,
                multiple: eB,
                showSuffixIcon: eW,
                hasFeedback: eI,
                feedbackIcon: ez,
                prefixCls: ef,
                componentName: "TreeSelect"
            });
            l = void 0 !== y ? y : eo ? .("Select") || n.createElement(t1.default, {
                componentName: "Select"
            });
            let ej = (0, ep.omit)(Z, ["suffixIcon", "removeIcon", "clearIcon", "itemIcon", "switcherIcon", "style"]),
                eX = n.useMemo(() => void 0 !== b ? b : "rtl" === et ? "bottomRight" : "bottomLeft", [b, et]),
                eq = (0, r.clsx)(!o && eh, {
                    [`${ef}-lg`]: "large" === ek,
                    [`${ef}-sm`]: "small" === ek,
                    [`${ef}-rtl`]: "rtl" === et,
                    [`${ef}-${eS}`]: eC,
                    [`${ef}-in-form-item`]: eM
                }, (0, t0.getStatusClassNames)(ef, eR, eI), ev, f, p, eH ? .root, ex, eb, ey, e$),
                eV = $ ? ? er,
                [eG] = (0, U.useZIndex)("SelectLike", eP.popup ? .root ? .zIndex);
            return n.createElement(az, {
                classNames: eH,
                styles: eP,
                virtual: ei,
                disabled: eE,
                ...ej,
                popupMatchSelectWidth: A ? ? L ? ? ea,
                builtinPlacements: (0, t3.default)(P, es),
                ref: t,
                prefixCls: ef,
                className: eq,
                style: { ...eP ? .root,
                    ...u
                },
                listHeight: g,
                listItemHeight: ed,
                treeCheckable: m ? n.createElement("span", {
                    className: `${ef}-tree-checkbox-inner`
                }) : m,
                treeLine: !!S,
                suffixIcon: eD,
                multiple: eB,
                placement: eX,
                removeIcon: eF,
                allowClear: !0 === B ? {
                    clearIcon: e_
                } : B,
                switcherIcon: e => n.createElement(aR.default, {
                    prefixCls: em,
                    switcherIcon: eV,
                    treeNodeProps: e,
                    showLine: S
                }),
                showTreeIcon: M,
                notFoundContent: l,
                getPopupContainer: k || ee,
                treeMotion: null,
                popupClassName: eL,
                popupStyle: { ...eP.root,
                    ...eP.popup ? .root,
                    zIndex : eG
                },
                popupRender: eA,
                onPopupVisibleChange: X || j,
                choiceTransitionName: (0, tJ.getTransitionName)(eu, "", R),
                transitionName: (0, tJ.getTransitionName)(eu, "slide-up", z),
                treeExpandAction: H,
                tagRender: eB ? q : void 0,
                maxCount: eO,
                showCheckedStrategy: G,
                treeCheckStrictly: Y
            })
        }),
        aP = (0, em.default)(aH, "popupAlign", e => (0, ep.omit)(e, ["visible"]));
    aH.TreeNode = am, aH.SHOW_ALL = aw, aH.SHOW_PARENT = aE, aH.SHOW_CHILD = aN, aH._InternalPanelDoNotUseOrYouWillBeFired = aP;
    var aL = e.i(401361),
        aA = e.i(14515),
        aB = e.i(929447);
    let aO = {
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

    function aW() {
        return (aW = Object.assign.bind()).apply(this, arguments)
    }
    let aD = n.forwardRef((e, t) => n.createElement(ek.default, aW({}, e, {
        ref: t,
        icon: aO
    })));
    var aF = e.i(635432),
        a_ = e.i(896091);
    let aj = (0, c.genStyleHooks)("Typography", e => {
            let t, {
                componentCls: n,
                titleMarginTop: l
            } = e;
            return {
                [n]: {
                    color: e.colorText,
                    wordBreak: "break-word",
                    lineHeight: e.lineHeight,
                    [`&${n}-secondary, &${n}-link${n}-secondary`]: {
                        color: e.colorTextDescription
                    },
                    [`&${n}-success, &${n}-link${n}-success`]: {
                        color: e.colorSuccessText
                    },
                    [`&${n}-warning, &${n}-link${n}-warning`]: {
                        color: e.colorWarningText
                    },
                    [`&${n}-danger, &${n}-link${n}-danger`]: {
                        color: e.colorErrorText,
                        [`&${n}-link:active, &${n}-link:focus`]: {
                            color: e.colorErrorTextActive
                        },
                        [`&${n}-link:hover`]: {
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
                            backgroundColor: a_.gold[2]
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
                        } = e, n = `${t}-link`;
                        return {
                            [`&${n}`]: { ...(0, N.operationUnit)(e),
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
      `]: { ...(0, N.operationUnit)(e),
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
        aX = e => {
            let {
                prefixCls: t,
                "aria-label": l,
                className: o,
                style: i,
                direction: a,
                maxLength: s,
                autoSize: c = !0,
                value: d,
                onSave: u,
                onCancel: f,
                onEnd: p,
                component: m,
                enterIcon: h = n.createElement(aD, null)
            } = e, g = n.useRef(null), v = n.useRef(!1), b = n.useRef(null), [y, $] = n.useState(d);
            n.useEffect(() => {
                $(d)
            }, [d]), n.useEffect(() => {
                if (g.current ? .resizableTextArea) {
                    let {
                        textArea: e
                    } = g.current.resizableTextArea;
                    e.focus();
                    let {
                        length: t
                    } = e.value;
                    e.setSelectionRange(t, t)
                }
            }, []);
            let x = () => {
                    u(y.trim())
                },
                [S, C] = aj(t),
                k = (0, r.clsx)(t, `${t}-edit-content`, {
                    [`${t}-rtl`]: "rtl" === a,
                    [`${t}-${m}`]: !!m
                }, o, S, C);
            return n.createElement("div", {
                className: k,
                style: i
            }, n.createElement(aF.default, {
                ref: g,
                maxLength: s,
                value: y,
                onChange: e => {
                    let {
                        target: t
                    } = e;
                    $(t.value.replace(/[\n\r]/g, ""))
                },
                onKeyDown: e => {
                    let {
                        keyCode: t
                    } = e;
                    v.current || (b.current = t)
                },
                onKeyUp: e => {
                    let {
                        keyCode: t,
                        ctrlKey: n,
                        altKey: l,
                        metaKey: r,
                        shiftKey: o
                    } = e;
                    b.current !== t || v.current || n || l || r || o || (t === tX.default.ENTER ? (x(), p ? .()) : t === tX.default.ESC && f())
                },
                onCompositionStart: () => {
                    v.current = !0
                },
                onCompositionEnd: () => {
                    v.current = !1
                },
                onBlur: () => {
                    x()
                },
                "aria-label": l,
                rows: 1,
                autoSize: c
            }), null !== h ? (0, eM.cloneElement)(h, {
                className: `${t}-edit-content-confirm`
            }) : null)
        },
        aq = async (e, t) => {
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
    async function aV(e, t) {
        if ("string" != typeof e) return !1;
        let n = t ? .format === "text/html";
        return !!(await aq(e, n) || ((e, t) => {
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

    function aG(e, t) {
        return n.useMemo(() => {
            let n = !!e;
            return [n, { ...t,
                ...n && "object" == typeof e ? e : null
            }]
        }, [e])
    }
    let aY = n.forwardRef((e, t) => {
            let {
                prefixCls: l,
                component: o = "article",
                className: i,
                rootClassName: a,
                children: c,
                direction: d,
                style: u,
                ...f
            } = e, {
                getPrefixCls: p,
                direction: m,
                className: h,
                style: g
            } = (0, s.useComponentConfig)("typography"), v = p("typography", l), [b, y] = aj(v), $ = (0, r.clsx)(v, h, {
                [`${v}-rtl`]: "rtl" === (d ? ? m)
            }, i, a, b, y), x = { ...g,
                ...u
            };
            return n.createElement(o, {
                className: $,
                style: x,
                ref: t,
                ...f
            }, c)
        }),
        aU = {
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

    function aK() {
        return (aK = Object.assign.bind()).apply(this, arguments)
    }
    let aQ = n.forwardRef((e, t) => n.createElement(ek.default, aK({}, e, {
        ref: t,
        icon: aU
    })));

    function aZ(e) {
        return !1 === e ? [!1, !1] : Array.isArray(e) ? e : [e]
    }

    function aJ(e, t, n) {
        return !0 === e || void 0 === e ? t : e || n && t
    }
    let a0 = e => ["string", "number"].includes(typeof e),
        a1 = e => {
            let {
                prefixCls: t,
                copied: l,
                locale: o,
                iconOnly: i,
                tooltips: a,
                icon: s,
                tabIndex: c,
                onCopy: d,
                loading: u
            } = e, f = aZ(a), p = aZ(s), {
                copied: m,
                copy: h
            } = o ? ? {}, g = l ? m : h, v = aJ(f[+!!l], g), b = "string" == typeof v ? v : g;
            return n.createElement(nP.default, {
                title: v
            }, n.createElement("button", {
                type: "button",
                className: (0, r.clsx)(`${t}-copy`, {
                    [`${t}-copy-success`]: l,
                    [`${t}-copy-icon-only`]: i
                }),
                onClick: d,
                "aria-label": b,
                tabIndex: c
            }, l ? aJ(p[1], n.createElement(oD.default, null), !0) : aJ(p[0], u ? n.createElement(V.default, null) : n.createElement(aQ, null), !0)))
        },
        a2 = n.forwardRef((e, t) => {
            let {
                style: l,
                children: r
            } = e, o = n.useRef(null);
            return n.useImperativeHandle(t, () => ({
                isExceed: () => {
                    let e = o.current;
                    return e.scrollHeight > e.clientHeight
                },
                getHeight: () => o.current.clientHeight
            })), n.createElement("span", {
                "aria-hidden": !0,
                ref: o,
                style: {
                    position: "fixed",
                    display: "block",
                    left: 0,
                    top: 0,
                    pointerEvents: "none",
                    backgroundColor: "rgba(255, 0, 0, 0.65)",
                    ...l
                }
            }, r)
        });

    function a3(e, t) {
        let n = 0,
            l = [];
        for (let r = 0; r < e.length; r += 1) {
            if (n === t) return l;
            let o = e[r],
                i = n + (a0(o) ? String(o).length : 1);
            if (i > t) {
                let e = t - n;
                return l.push(String(o).slice(0, e)), l
            }
            l.push(o), n = i
        }
        return e
    }
    let a4 = {
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical"
    };

    function a8(e) {
        let {
            enableMeasure: t,
            width: l,
            text: r,
            children: i,
            rows: a,
            expanded: s,
            miscDeps: c,
            onEllipsis: d
        } = e, u = n.useMemo(() => (0, eg.toArray)(r), [r]), f = n.useMemo(() => u.reduce((e, t) => e + (a0(t) ? String(t).length : 1), 0), [r]), p = n.useMemo(() => i(u, !1), [r]), [m, h] = n.useState(null), g = n.useRef(null), v = n.useRef(null), b = n.useRef(null), y = n.useRef(null), $ = n.useRef(null), [x, S] = n.useState(!1), [C, k] = n.useState(0), [w, E] = n.useState(0), [N, I] = n.useState(null);
        (0, nC.default)(() => {
            t && l && f ? k(1) : k(0)
        }, [l, r, a, t, u]), (0, nC.default)(() => {
            if (1 === C) k(2), I(v.current && getComputedStyle(v.current).whiteSpace);
            else if (2 === C) {
                let e = !!b.current ? .isExceed();
                k(e ? 3 : 4), h(e ? [0, f] : null), S(e), E(Math.max(b.current ? .getHeight() || 0, (1 === a ? 0 : y.current ? .getHeight() || 0) + ($.current ? .getHeight() || 0)) + 1), d(e)
            }
        }, [C]);
        let M = m ? Math.ceil((m[0] + m[1]) / 2) : 0;
        (0, nC.default)(() => {
            let [e, t] = m || [0, 0];
            if (e !== t) {
                let n = (g.current ? .getHeight() || 0) > w,
                    l = M;
                t - e == 1 && (l = n ? e : t), h(n ? [e, l] : [l, t])
            }
        }, [m, M]);
        let z = n.useMemo(() => {
                if (!t) return i(u, !1);
                if (3 !== C || !m || m[0] !== m[1]) {
                    let e = i(u, !1);
                    return [4, 0].includes(C) ? e : n.createElement("span", {
                        style: { ...a4,
                            WebkitLineClamp: a
                        }
                    }, e)
                }
                return i(s ? u : a3(u, m[0]), x)
            }, [s, C, m, u].concat((0, o.default)(c))),
            R = {
                width: l,
                margin: 0,
                padding: 0,
                whiteSpace: "nowrap" === N ? "normal" : "inherit"
            };
        return n.createElement(n.Fragment, null, z, 2 === C && n.createElement(n.Fragment, null, n.createElement(a2, {
            style: { ...R,
                ...a4,
                WebkitLineClamp: a
            },
            ref: b
        }, p), n.createElement(a2, {
            style: { ...R,
                ...a4,
                WebkitLineClamp: a - 1
            },
            ref: y
        }, p), n.createElement(a2, {
            style: { ...R,
                ...a4,
                WebkitLineClamp: 1
            },
            ref: $
        }, i([], !0))), 3 === C && m && m[0] !== m[1] && n.createElement(a2, {
            style: { ...R,
                top: 400
            },
            ref: g
        }, i(a3(u, M), !0)), 1 === C && n.createElement("span", {
            style: {
                whiteSpace: "inherit"
            },
            ref: v
        }))
    }
    let a5 = e => {
            let {
                enableEllipsis: t,
                isEllipsis: l,
                children: r,
                tooltipProps: o
            } = e;
            return o ? .title && t ? n.createElement(nP.default, {
                open: !!l && void 0,
                ...o
            }, r) : r
        },
        a6 = ["delete", "mark", "code", "underline", "strong", "keyboard", "italic"],
        a9 = n.forwardRef((e, t) => {
            let i, a, c, {
                    prefixCls: d,
                    className: u,
                    style: f,
                    type: p,
                    disabled: m,
                    children: h,
                    ellipsis: g,
                    editable: v,
                    copyable: y,
                    component: $,
                    title: x,
                    ...S
                } = e,
                {
                    getPrefixCls: C,
                    direction: k
                } = n.useContext(s.ConfigContext),
                [w] = (0, aB.default)("Text"),
                E = n.useRef(null),
                N = n.useRef(null),
                I = C("typography", d),
                M = (0, ep.omit)(S, a6),
                [z, R] = aG(v),
                [T, H] = (0, eY.useControlledState)(!1, R.editing),
                {
                    triggerType: P = ["icon"]
                } = R,
                L = e => {
                    e && R.onStart ? .(), H(e)
                },
                A = (i = (0, n.useRef)(void 0), (0, n.useEffect)(() => {
                    i.current = T
                }), i.current);
            (0, nC.default)(() => {
                !T && A && N.current ? .focus()
            }, [T]);
            let B = e => {
                    e ? .preventDefault(), L(!0)
                },
                [O, W] = aG(y),
                {
                    copied: D,
                    copyLoading: F,
                    onClick: _
                } = (e => {
                    let {
                        copyConfig: t,
                        children: l
                    } = e, [r, o] = n.useState(!1), [i, a] = n.useState(!1), s = n.useRef(null), c = () => {
                        s.current && clearTimeout(s.current)
                    }, d = {};
                    return t.format && (d.format = t.format), n.useEffect(() => c, []), {
                        copied: r,
                        copyLoading: i,
                        onClick: (0, b.useEvent)(async e => {
                            e ? .preventDefault(), e ? .stopPropagation(), a(!0);
                            try {
                                let n = "function" == typeof t.text ? await t.text() : t.text;
                                await aV(n || rp(l, !0).join("") || "", d), a(!1), o(!0), c(), s.current = setTimeout(() => {
                                    o(!1)
                                }, 3e3), t.onCopy ? .(e)
                            } catch (e) {
                                throw a(!1), e
                            }
                        })
                    }
                })({
                    copyConfig: W,
                    children: h
                }),
                [j, X] = n.useState(!1),
                [q, V] = n.useState(!1),
                [G, Y] = n.useState(!1),
                [U, K] = n.useState(!1),
                [Q, Z] = n.useState(!0),
                [J, ee] = aG(g, {
                    expandable: !1,
                    symbol: e => e ? w ? .collapse : w ? .expand
                }),
                [et, en] = (0, eY.useControlledState)(ee.defaultExpanded || !1, ee.expanded),
                el = J && (!et || "collapsible" === ee.expandable),
                {
                    rows: er = 1
                } = ee,
                eo = n.useMemo(() => el && (void 0 !== ee.suffix || ee.onEllipsis || ee.expandable || z || O), [el, ee, z, O]);
            (0, nC.default)(() => {
                J && !eo && (X((0, aA.isStyleSupport)("webkitLineClamp")), V((0, aA.isStyleSupport)("textOverflow")))
            }, [eo, J]);
            let [ei, ea] = n.useState(el), es = n.useMemo(() => !eo && (1 === er ? q : j), [eo, q, j]);
            (0, nC.default)(() => {
                ea(es && el)
            }, [es, el]);
            let ec = el && (ei ? U : G),
                ed = el && 1 === er && ei,
                eu = el && er > 1 && ei,
                [ef, em] = n.useState(0),
                eh = e => {
                    Y(e), G !== e && ee.onEllipsis ? .(e)
                };
            n.useEffect(() => {
                let e = E.current;
                if (J && ei && e) {
                    let t, n, l, r = (t = document.createElement("em"), e.appendChild(t), n = e.getBoundingClientRect(), l = t.getBoundingClientRect(), e.removeChild(t), n.left > l.left || l.right > n.right || n.top > l.top || l.bottom > n.bottom);
                    U !== r && K(r)
                }
            }, [J, ei, h, eu, Q, ef]), n.useEffect(() => {
                let e = E.current;
                if ("u" < typeof IntersectionObserver || !e || !ei || !el) return;
                let t = new IntersectionObserver(() => {
                    Z(!!e.offsetParent)
                });
                return t.observe(e), () => {
                    t.disconnect()
                }
            }, [ei, el]);
            let ev = (a = ee.tooltip, c = R.text, (0, n.useMemo)(() => !0 === a ? {
                    title: c ? ? h
                } : (0, n.isValidElement)(a) ? {
                    title: a
                } : "object" == typeof a ? {
                    title: c ? ? h,
                    ...a
                } : {
                    title: a
                }, [a, c, h])),
                eb = n.useMemo(() => {
                    if (J && !ei) return [R.text, h, x, ev.title].find(a0)
                }, [J, ei, x, ev.title, ec]);
            return T ? n.createElement(aX, {
                value: R.text ? ? ("string" == typeof h ? h : ""),
                onSave: e => {
                    R.onChange ? .(e), L(!1)
                },
                onCancel: () => {
                    R.onCancel ? .(), L(!1)
                },
                onEnd: R.onEnd,
                prefixCls: I,
                className: u,
                style: f,
                direction: k,
                component: $,
                maxLength: R.maxLength,
                autoSize: R.autoSize,
                enterIcon: R.enterIcon
            }) : n.createElement(l.default, {
                onResize: e => {
                    let {
                        offsetWidth: t
                    } = e;
                    em(t)
                },
                disabled: !el
            }, l => n.createElement(a5, {
                tooltipProps: ev,
                enableEllipsis: el,
                isEllipsis: ec
            }, n.createElement(aY, {
                className: (0, r.clsx)({
                    [`${I}-${p}`]: p,
                    [`${I}-disabled`]: m,
                    [`${I}-ellipsis`]: J,
                    [`${I}-ellipsis-single-line`]: ed,
                    [`${I}-ellipsis-multiple-line`]: eu,
                    [`${I}-link`]: "a" === $
                }, u),
                prefixCls: d,
                style: { ...f,
                    WebkitLineClamp: eu ? er : void 0
                },
                component: $,
                ref: (0, nE.composeRef)(l, E, t),
                direction: k,
                onClick: P.includes("text") ? B : void 0,
                "aria-label": eb ? .toString(),
                title: x,
                ...M
            }, n.createElement(a8, {
                enableMeasure: el && !ei,
                text: h,
                rows: er,
                width: ef,
                onEllipsis: eh,
                expanded: et,
                miscDeps: [D, et, F, z, O, w].concat((0, o.default)(a6.map(t => e[t])))
            }, (t, l) => {
                let r;
                return function(e, t) {
                    let {
                        mark: l,
                        code: r,
                        underline: o,
                        delete: i,
                        strong: a,
                        keyboard: s,
                        italic: c
                    } = e, d = t;

                    function u(e, t) {
                        t && (d = n.createElement(e, {}, d))
                    }
                    return u("strong", a), u("u", o), u("del", i), u("code", r), u("mark", l), u("kbd", s), u("i", c), d
                }(e, n.createElement(n.Fragment, null, t.length > 0 && l && !et && eb ? n.createElement("span", {
                    key: "show-content",
                    "aria-hidden": !0
                }, t) : t, [(r = l) && !et && n.createElement("span", {
                    "aria-hidden": !0,
                    key: "ellipsis"
                }, "..."), ee.suffix, [r && (() => {
                    let {
                        expandable: e,
                        symbol: t
                    } = ee;
                    return e ? n.createElement("button", {
                        type: "button",
                        key: "expand",
                        className: `${I}-${et?"collapse":"expand"}`,
                        onClick: e => {
                            var t;
                            en((t = {
                                expanded: !et
                            }).expanded), ee.onExpand ? .(e, t)
                        },
                        "aria-label": et ? w.collapse : w ? .expand
                    }, "function" == typeof t ? t(et) : t) : null
                })(), (() => {
                    if (!z) return;
                    let {
                        icon: e,
                        tooltip: t,
                        tabIndex: l
                    } = R, r = (0, eg.toArray)(t)[0] || w ? .edit, o = "string" == typeof r ? r : "";
                    return P.includes("icon") ? n.createElement(nP.default, {
                        key: "edit",
                        title: !1 === t ? "" : r
                    }, n.createElement("button", {
                        type: "button",
                        ref: N,
                        className: `${I}-edit`,
                        onClick: B,
                        "aria-label": o,
                        tabIndex: l
                    }, e || n.createElement(aL.default, {
                        role: "button"
                    }))) : null
                })(), O ? n.createElement(a1, {
                    key: "copy",
                    ...W,
                    prefixCls: I,
                    copied: D,
                    locale: w,
                    onCopy: _,
                    loading: F,
                    iconOnly: !(0, eL.default)(h)
                }) : null]]))
            }))))
        }),
        a7 = n.forwardRef((e, t) => {
            let {
                ellipsis: l,
                rel: r,
                children: o,
                navigate: i,
                ...a
            } = e, s = { ...a,
                rel: void 0 === r && "_blank" === a.target ? "noopener noreferrer" : r
            };
            return n.createElement(a9, { ...s,
                ref: t,
                ellipsis: !!l,
                component: "a"
            }, o)
        }),
        se = n.forwardRef((e, t) => {
            let {
                children: l,
                ...r
            } = e;
            return n.createElement(a9, {
                ref: t,
                ...r,
                component: "div"
            }, l)
        }),
        st = n.forwardRef((e, t) => {
            let {
                ellipsis: l,
                children: r,
                ...o
            } = e, i = n.useMemo(() => l && "object" == typeof l ? (0, ep.omit)(l, ["expandable", "rows"]) : l, [l]);
            return n.createElement(a9, {
                ref: t,
                ...o,
                ellipsis: i,
                component: "span"
            }, r)
        }),
        sn = [1, 2, 3, 4, 5],
        sl = n.forwardRef((e, t) => {
            let {
                level: l = 1,
                children: r,
                ...o
            } = e, i = sn.includes(l) ? `h${l}` : "h1";
            return n.createElement(a9, {
                ref: t,
                ...o,
                component: i
            }, r)
        });
    aY.Text = st, aY.Link = a7, aY.Title = sl, aY.Paragraph = se;
    var sr = e.i(85060),
        so = e.i(686746);
    e.i(46302);
    var si = e.i(32044);
    let sa = {
            subtree: !0,
            childList: !0,
            attributeFilter: ["style", "class"]
        },
        ss = function(e, t) {
            let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sa;
            n.default.useEffect(() => {
                let n;
                if (!(0, si.default)() || !e) return;
                let r = Array.isArray(e) ? e : [e];
                return "MutationObserver" in window && (n = new MutationObserver(t), r.forEach(e => {
                    n.observe(e, l)
                })), () => {
                    n ? .takeRecords(), n ? .disconnect()
                }
            }, [l, e])
        };
    var sc = e.i(922611);
    let sd = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                l = document.createElement("canvas"),
                r = l.getContext("2d"),
                o = e * n,
                i = t * n;
            return l.setAttribute("width", `${o}px`), l.setAttribute("height", `${i}px`), r.save(), [r, l, o, i]
        },
        su = {
            visibility: "visible !important"
        };

    function sf(e, t) {
        return e.size === t.size ? e : t
    }
    let sp = {
        position: "relative",
        overflow: "hidden"
    };
    e.s(["Affix", 0, g, "Alert", () => v.default, "Anchor", 0, H, "App", 0, ef, "AutoComplete", 0, ey, "Avatar", () => eS.default, "BackTop", 0, e => {
        let {
            prefixCls: t,
            className: l,
            rootClassName: o,
            visibilityHeight: i = 400,
            target: c,
            onClick: d,
            duration: u = 450,
            children: f
        } = e, [p, m] = n.default.useState(0 === i), h = n.default.useRef(null), g = () => h.current ? .ownerDocument || window, v = a(e => {
            m((0, $.default)(e.target) >= i)
        });
        n.default.useEffect(() => {
            let e = (c || g)();
            return v({
                target: e
            }), e ? .addEventListener("scroll", v), () => {
                v.cancel(), e ? .removeEventListener("scroll", v)
            }
        }, [c]);
        let {
            getPrefixCls: b,
            direction: y
        } = n.default.useContext(s.ConfigContext), x = b("back-top", t), k = b(), w = (0, C.default)(x), [E, N] = ez(x, w), I = (0, r.clsx)(E, N, x, {
            [`${x}-rtl`]: "rtl" === y
        }, l, o), M = (0, eI.default)(e, ["prefixCls", "className", "rootClassName", "children", "visibilityHeight", "target"]), z = n.default.createElement("div", {
            className: `${x}-content`
        }, n.default.createElement("div", {
            className: `${x}-icon`
        }, n.default.createElement(eE, null)));
        return n.default.createElement("div", { ...M,
            className: I,
            onClick: e => {
                (0, S.default)(0, {
                    getContainer: c || g,
                    duration: u
                }), d ? .(e)
            },
            ref: h
        }, n.default.createElement(eN.default, {
            visible: p,
            motionName: `${k}-fade`
        }, e => {
            let {
                className: t
            } = e;
            return (0, eM.cloneElement)(f || z, e => {
                let {
                    className: n
                } = e;
                return {
                    className: (0, r.clsx)(t, n)
                }
            })
        }))
    }, "Badge", () => eR.default, "Breadcrumb", 0, ej, "Button", () => eX.default, "Calendar", 0, tt, "Card", 0, tc, "Carousel", () => td.default, "Cascader", 0, np, "Checkbox", () => nh.default, "Col", () => ng.default, "Collapse", () => nv.default, "ColorPicker", 0, ls, "ConfigProvider", () => ld.default, "DatePicker", () => lu.default, "Descriptions", () => lf.default, "Divider", () => nx.default, "Drawer", () => lp.default, "Dropdown", () => lm.default, "Empty", () => lh.default, "Flex", 0, lx, "FloatButton", 0, lR, "Form", () => lB.default, "Grid", 0, {
        useBreakpoint: function() {
            return (0, lO.default)()
        }
    }, "Image", () => lW.default, "Input", () => lD.default, "InputNumber", () => nX.default, "Layout", 0, lG, "List", () => lQ.default, "Masonry", 0, l4, "Mentions", 0, rx, "Menu", () => rC.default, "Modal", () => rw.default, "Pagination", () => rA.default, "Popconfirm", 0, rq, "Popover", () => ny.default, "Progress", () => rV.default, "QRCode", 0, e => {
        let [, t] = (0, D.useToken)(), {
            value: l,
            type: o = "canvas",
            icon: i = "",
            size: a = 160,
            iconSize: c,
            color: d = t.colorText,
            errorLevel: u = "M",
            status: f = "active",
            bordered: p = !0,
            onRefresh: m,
            style: h,
            className: g,
            rootClassName: v,
            prefixCls: b,
            bgColor: y = "transparent",
            marginSize: $,
            statusRender: S,
            classNames: C,
            styles: k,
            boostLevel: w,
            ...E
        } = e, {
            getPrefixCls: N,
            className: I,
            style: M,
            classNames: z,
            styles: R
        } = (0, s.useComponentConfig)("qrcode"), T = { ...e,
            bgColor: y,
            type: o,
            size: a,
            status: f,
            bordered: p,
            errorLevel: u
        }, [H, P] = (0, x.useMergeSemantic)([z, C], [R, k], {
            props: T
        }), L = N("qrcode", b), [A, B] = ov(L), O = {
            src: i,
            x: void 0,
            y: void 0,
            height: "number" == typeof c ? c : c ? .height ? ? 40,
            width: "number" == typeof c ? c : c ? .width ? ? 40,
            excavate: !0,
            crossOrigin: "anonymous"
        }, W = (0, eH.default)(E, !0), F = (0, ep.omit)(E, Object.keys(W)), _ = {
            value: l,
            size: a,
            level: u,
            bgColor: y,
            fgColor: d,
            style: {
                width: h ? .width,
                height: h ? .height
            },
            imageSettings: i ? O : void 0,
            marginSize: $,
            boostLevel: w,
            ...W
        }, [j] = (0, eU.useLocale)("QRCode");
        if (!l) return null;
        let X = (0, r.clsx)(L, g, v, A, B, I, H.root, {
                [`${L}-borderless`]: !p
            }),
            q = {
                backgroundColor: y,
                ...P.root,
                ...M,
                ...h,
                width: h ? .width ? ? a,
                height: h ? .height ? ? a
            };
        return n.default.createElement("div", { ...F,
            className: X,
            style: q
        }, "active" !== f && n.default.createElement("div", {
            className: (0, r.clsx)(`${L}-cover`, H.cover),
            style: P.cover
        }, n.default.createElement(oh, {
            prefixCls: L,
            locale: j,
            status: f,
            onRefresh: m,
            statusRender: S
        })), "canvas" === o ? n.default.createElement(os, { ..._
        }) : n.default.createElement(od, { ..._
        }))
    }, "Radio", () => ob.default, "Rate", 0, oE, "Result", () => oN.default, "Row", () => oI.default, "Segmented", 0, nW, "Select", () => eh.default, "Skeleton", () => tr.default, "Slider", () => n1.default, "Space", () => lP.default, "Spin", () => rm.default, "Splitter", 0, oO, "Statistic", () => oW.default, "Steps", 0, ie, "Switch", () => it.default, "Table", () => il.default, "Tabs", () => to.default, "Tag", () => ir.default, "TimePicker", 0, iE, "Timeline", 0, iz, "Tooltip", () => nP.default, "Tour", 0, i1, "Transfer", 0, au, "Tree", () => af.default, "TreeSelect", 0, aH, "Typography", 0, aY, "Upload", () => sr.default, "Watermark", 0, e => {
        var t;
        let l, a, c, d, u, f, {
                zIndex: p = 9,
                rotate: m = -22,
                width: h,
                height: g,
                image: v,
                content: y,
                font: $ = {},
                style: x,
                className: S,
                rootClassName: C,
                gap: k = [100, 100],
                offset: w,
                children: E,
                inherit: N = !0,
                onRemove: I
            } = e,
            {
                className: M,
                style: z
            } = (0, s.useComponentConfig)("watermark"),
            R = { ...sp,
                ...z,
                ...x
            },
            [, T] = (0, D.useToken)(),
            {
                color: H = T.colorFill,
                fontSize: P = T.fontSizeLG,
                fontWeight: L = "normal",
                fontStyle: A = "normal",
                fontFamily: B = "sans-serif",
                textAlign: O = "center"
            } = $,
            [W = 100, F = 100] = k,
            _ = W / 2,
            j = F / 2,
            X = w ? .[0] ? ? _,
            q = w ? .[1] ? ? j,
            V = n.default.useMemo(() => {
                let e = {
                        zIndex: p,
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        backgroundRepeat: "repeat"
                    },
                    t = X - _,
                    n = q - j;
                return t > 0 && (e.left = `${t}px`, e.width = `calc(100% - ${t}px)`, t = 0), n > 0 && (e.top = `${n}px`, e.height = `calc(100% - ${n}px)`, n = 0), e.backgroundPosition = `${t}px ${n}px`, e
            }, [p, X, _, q, j]),
            [G, Y] = n.default.useState(),
            [U, K] = n.default.useState(() => new Set),
            Q = n.default.useMemo(() => [].concat(G ? [G] : [], (0, o.default)(Array.from(U))), [G, U]),
            Z = n.default.useCallback((e, t, n, l, r, o, i, a) => {
                let [s, c, d, u] = sd(l, r, n);
                if (e instanceof HTMLImageElement) s.drawImage(e, 0, 0, d, u);
                else {
                    let {
                        color: t,
                        fontSize: l,
                        fontStyle: i,
                        fontWeight: a,
                        fontFamily: c,
                        textAlign: u
                    } = o, f = Number(l) * n;
                    s.font = `${i} normal ${a} ${f}px/${r}px ${c}`, s.fillStyle = t, s.textAlign = u, s.textBaseline = "top";
                    let p = rp(e);
                    p ? .forEach((e, t) => {
                        s.fillText(e ? ? "", d / 2, t * (f + 3 * n))
                    })
                }
                let f = Math.PI / 180 * Number(t),
                    p = Math.max(l, r),
                    [m, h, g] = sd(p, p, n);
                m.translate(g / 2, g / 2), m.rotate(f), d > 0 && u > 0 && m.drawImage(c, -d / 2, -u / 2);
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
                ].forEach(e => {
                    let [t, n] = e, [l, r] = [t * Math.cos(f) - n * Math.sin(f), t * Math.sin(f) + n * Math.cos(f)];
                    v = Math.min(v, l), b = Math.max(b, l), y = Math.min(y, r), $ = Math.max($, r)
                });
                let C = v + g / 2,
                    k = y + g / 2,
                    w = b - v,
                    E = $ - y,
                    N = i * n,
                    I = a * n,
                    M = (w + N) * 2,
                    z = E + I,
                    [R, T] = sd(M, z),
                    H = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        R.drawImage(h, C, k, w, E, e, t, w, E)
                    };
                return H(), H(w + N, -E / 2 - I / 2), H(w + N, E / 2 + I / 2), [T.toDataURL(), M / n, z / n]
            }, []),
            J = (l = n.useRef([null, null]), (e, t) => {
                let n = e.map(e => e instanceof HTMLElement || Number.isNaN(e) ? "" : e);
                return (0, lJ.default)(l.current[0], n) || (l.current = [n, t()]), l.current[1]
            }),
            [ee, et] = n.default.useState(null),
            en = (t = () => {
                let e = document.createElement("canvas").getContext("2d");
                if (e) {
                    let t = window.devicePixelRatio || 1,
                        [n, l] = (e => {
                            let t = 120,
                                n = 64;
                            if (!v && e.measureText) {
                                e.font = `${Number(P)}px ${B}`;
                                let l = rp(y),
                                    r = l.map(t => {
                                        let n = e.measureText(t);
                                        return [n.width, n.fontBoundingBoxAscent + n.fontBoundingBoxDescent]
                                    });
                                t = Math.ceil(Math.max.apply(Math, (0, o.default)(r.map(e => e[0])))), n = Math.ceil(Math.max.apply(Math, (0, o.default)(r.map(e => e[1])))) * l.length + (l.length - 1) * 3
                            }
                            return [h ? ? t, g ? ? n]
                        })(e),
                        r = e => {
                            let r = [e || "", m, t, n, l, {
                                    color: H,
                                    fontSize: P,
                                    fontStyle: A,
                                    fontWeight: L,
                                    fontFamily: B,
                                    textAlign: O
                                }, W, F],
                                [o, i] = J(r, () => Z.apply(void 0, r));
                            et([o, i])
                        };
                    if (v) {
                        let e = new Image;
                        e.onload = () => {
                            r(e)
                        }, e.onerror = () => {
                            r(y)
                        }, e.crossOrigin = "anonymous", e.referrerPolicy = "no-referrer", e.src = v
                    } else r(y)
                }
            }, a = n.default.useRef(!1), c = n.default.useRef(null), d = (0, b.useEvent)(t), () => {
                a.current || (a.current = !0, d(), c.current = (0, i.default)(() => {
                    a.current = !1
                }))
            }),
            [el, er, eo] = (u = n.useRef(new Map), f = (0, b.useEvent)(I), [(e, t, n) => {
                if (n) {
                    var l;
                    let r = u.current.get(n);
                    if (!r) {
                        let e = document.createElement("div");
                        u.current.set(n, e)
                    }
                    let o = u.current.get(n);
                    o.setAttribute("style", Object.keys(l = { ...V,
                        backgroundImage: `url('${e}')`,
                        backgroundSize: `${Math.floor(t)}px`,
                        ...su
                    }).map(e => `${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${l[e]};`).join(" ")), o.removeAttribute("class"), o.removeAttribute("hidden"), o.parentElement !== n && (r && I && f(), n.append(o))
                }
                return u.current.get(n)
            }, e => {
                let t = u.current.get(e);
                t && e && e.removeChild(t), u.current.delete(e)
            }, e => Array.from(u.current.values()).includes(e)]);
        (0, n.useEffect)(() => {
            ee && Q.forEach(e => {
                el(ee[0], ee[1], e)
            })
        }, [ee, Q]), ss(Q, (0, b.useEvent)(e => {
            e.forEach(e => {
                let t;
                if (t = !1, e.removedNodes.length && (t = Array.from(e.removedNodes).some(e => eo(e))), "attributes" === e.type && eo(e.target) && (t = !0), t) en();
                else if (e.target === G && "style" === e.attributeName) {
                    let e = Object.keys(sp);
                    for (let t = 0; t < e.length; t += 1) {
                        let n = e[t],
                            l = R[n],
                            r = G.style[n];
                        l && l !== r && (G.style[n] = l)
                    }
                }
            })
        })), (0, n.useEffect)(en, [m, p, h, g, v, y, H, P, L, A, B, O, W, F, X, q]);
        let ei = n.default.useMemo(() => ({
                add: e => {
                    K(t => {
                        let n = new Set(t);
                        return n.add(e), sf(t, n)
                    })
                },
                remove: e => {
                    er(e), K(t => {
                        let n = new Set(t);
                        return n.delete(e), sf(t, n)
                    })
                }
            }), []),
            ea = N ? n.default.createElement(sc.default.Provider, {
                value: ei
            }, E) : E;
        return n.default.createElement("div", {
            ref: Y,
            className: (0, r.clsx)(S, M, C),
            style: R
        }, ea)
    }, "message", () => rk.default, "notification", 0, rL, "theme", 0, ix, "unstableSetRender", 0, t, "version", () => so.default], 196306)
}]);