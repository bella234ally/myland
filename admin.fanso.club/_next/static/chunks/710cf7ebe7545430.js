(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 293733, e => {
    "use strict";
    var t = e.i(739217);
    e.s(["Breadcrumb", () => t.default])
}, 755838, (e, t, r) => {
    "use strict";
    var n = e.r(271645),
        u = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        a = n.useState,
        i = n.useEffect,
        s = n.useLayoutEffect,
        o = n.useDebugValue;

    function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !u(e, r)
        } catch (e) {
            return !0
        }
    }
    var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var r = t(),
            n = a({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            }),
            u = n[0].inst,
            c = n[1];
        return s(function() {
            u.value = r, u.getSnapshot = t, l(u) && c({
                inst: u
            })
        }, [e, r, t]), i(function() {
            return l(u) && c({
                inst: u
            }), e(function() {
                l(u) && c({
                    inst: u
                })
            })
        }, [e]), o(r), r
    };
    r.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
}, 802239, (e, t, r) => {
    "use strict";
    t.exports = e.r(755838)
}, 283599, 271235, e => {
    "use strict";
    var t = e.i(271645),
        r = e.i(802239);
    e.s(["ERROR_REVALIDATE_EVENT", () => 3, "FOCUS_EVENT", () => 0, "MUTATE_EVENT", () => 2, "RECONNECT_EVENT", () => 1], 211671);
    var n = Object.prototype.hasOwnProperty;
    let u = new WeakMap,
        a = () => {},
        i = a(),
        s = Object,
        o = e => e === i,
        l = (e, t) => ({ ...e,
            ...t
        }),
        c = {},
        d = {},
        f = "undefined",
        p = typeof window != f,
        h = typeof document != f,
        g = p && "Deno" in window,
        y = (e, t) => {
            let r = u.get(e);
            return [() => !o(t) && e.get(t) || c, n => {
                if (!o(t)) {
                    let u = e.get(t);
                    t in d || (d[t] = u), r[5](t, l(u, n), u || c)
                }
            }, r[6], () => !o(t) && t in d ? d[t] : !o(t) && e.get(t) || c]
        },
        v = !0,
        [w, m] = p && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [a, a],
        b = {
            initFocus: e => (h && document.addEventListener("visibilitychange", e), w("focus", e), () => {
                h && document.removeEventListener("visibilitychange", e), m("focus", e)
            }),
            initReconnect: e => {
                let t = () => {
                        v = !0, e()
                    },
                    r = () => {
                        v = !1
                    };
                return w("online", t), w("offline", r), () => {
                    m("online", t), m("offline", r)
                }
            }
        },
        E = !t.default.useId,
        O = !p || g,
        _ = O ? t.useEffect : t.useLayoutEffect,
        R = "undefined" != typeof navigator && navigator.connection,
        T = !O && R && (["slow-2g", "2g"].includes(R.effectiveType) || R.saveData),
        S = new WeakMap,
        P = (e, t) => e === `[object ${t}]`,
        j = 0,
        x = e => {
            let t, r, n = typeof e,
                u = s.prototype.toString.call(e),
                a = P(u, "Date"),
                i = P(u, "RegExp"),
                l = P(u, "Object");
            if (s(e) !== e || a || i) t = a ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
            else {
                if (t = S.get(e)) return t;
                if (t = ++j + "~", S.set(e, t), Array.isArray(e)) {
                    for (r = 0, t = "@"; r < e.length; r++) t += x(e[r]) + ",";
                    S.set(e, t)
                }
                if (l) {
                    t = "#";
                    let n = s.keys(e).sort();
                    for (; !o(r = n.pop());) o(e[r]) || (t += r + ":" + x(e[r]) + ",");
                    S.set(e, t)
                }
            }
            return t
        },
        k = e => {
            if ("function" == typeof e) try {
                e = e()
            } catch (t) {
                e = ""
            }
            let t = e;
            return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? x(e) : "", t]
        },
        C = 0,
        V = () => ++C;
    async function L(...e) {
        let [t, r, n, a] = e, s = l({
            populateCache: !0,
            throwOnError: !0
        }, "boolean" == typeof a ? {
            revalidate: a
        } : a || {}), c = s.populateCache, d = s.rollbackOnError, f = s.optimisticData, p = s.throwOnError;
        if ("function" == typeof r) {
            let e = [];
            for (let n of t.keys()) !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
            return Promise.all(e.map(h))
        }
        return h(r);
        async function h(r) {
            let a, [l] = k(r);
            if (!l) return;
            let [h, g] = y(t, l), [v, w, m, b] = u.get(t), E = () => {
                let e = v[l];
                return ("function" == typeof s.revalidate ? s.revalidate(h().data, r) : !1 !== s.revalidate) && (delete m[l], delete b[l], e && e[0]) ? e[0](2).then(() => h().data) : h().data
            };
            if (e.length < 3) return E();
            let O = n,
                _ = !1,
                R = V();
            w[l] = [R, 0];
            let T = !o(f),
                S = h(),
                P = S.data,
                j = S._c,
                x = o(j) ? P : j;
            if (T && g({
                    data: f = "function" == typeof f ? f(x, P) : f,
                    _c: x
                }), "function" == typeof O) try {
                O = O(x)
            } catch (e) {
                a = e, _ = !0
            }
            if (O && "function" == typeof O.then) {
                let e;
                if (O = await O.catch(e => {
                        a = e, _ = !0
                    }), R !== w[l][0]) {
                    if (_) throw a;
                    return O
                }
                _ && T && (e = a, "function" == typeof d ? d(e) : !1 !== d) && (c = !0, g({
                    data: x,
                    _c: i
                }))
            }
            if (c && !_ && ("function" == typeof c ? g({
                    data: c(O, x),
                    error: i,
                    _c: i
                }) : g({
                    data: O,
                    error: i,
                    _c: i
                })), w[l][1] = V(), Promise.resolve(E()).then(() => {
                    g({
                        _c: i
                    })
                }), _) {
                if (p) throw a;
                return
            }
            return O
        }
    }
    let A = (e, t) => {
            for (let r in e) e[r][0] && e[r][0](t)
        },
        M = (e, t) => {
            if (!u.has(e)) {
                let r = l(b, t),
                    n = Object.create(null),
                    s = L.bind(i, e),
                    o = a,
                    c = Object.create(null),
                    d = (e, t) => {
                        let r = c[e] || [];
                        return c[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                    },
                    f = (t, r, n) => {
                        e.set(t, r);
                        let u = c[t];
                        if (u)
                            for (let e of u) e(r, n)
                    },
                    p = () => {
                        if (!u.has(e) && (u.set(e, [n, Object.create(null), Object.create(null), Object.create(null), s, f, d]), !O)) {
                            let t = r.initFocus(setTimeout.bind(i, A.bind(i, n, 0))),
                                a = r.initReconnect(setTimeout.bind(i, A.bind(i, n, 1)));
                            o = () => {
                                t && t(), a && a(), u.delete(e)
                            }
                        }
                    };
                return p(), [e, s, p, o]
            }
            return [e, u.get(e)[4]]
        },
        [D, I] = M(new Map),
        N = l({
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: (e, t, r, n, u) => {
                let a = r.errorRetryCount,
                    i = u.retryCount,
                    s = ~~((Math.random() + .5) * (1 << (i < 8 ? i : 8))) * r.errorRetryInterval;
                (o(a) || !(i > a)) && setTimeout(n, s, u)
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: T ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: T ? 5e3 : 3e3,
            compare: function e(t, r) {
                var u, a;
                if (t === r) return !0;
                if (t && r && (u = t.constructor) === r.constructor) {
                    if (u === Date) return t.getTime() === r.getTime();
                    if (u === RegExp) return t.toString() === r.toString();
                    if (u === Array) {
                        if ((a = t.length) === r.length)
                            for (; a-- && e(t[a], r[a]););
                        return -1 === a
                    }
                    if (!u || "object" == typeof t) {
                        for (u in a = 0, t)
                            if (n.call(t, u) && ++a && !n.call(r, u) || !(u in r) || !e(t[u], r[u])) return !1;
                        return Object.keys(r).length === a
                    }
                }
                return t != t && r != r
            },
            isPaused: () => !1,
            cache: D,
            mutate: I,
            fallback: {}
        }, {
            isOnline: () => v,
            isVisible: () => {
                let e = h && document.visibilityState;
                return o(e) || "hidden" !== e
            }
        }),
        U = (e, t) => {
            let r = l(e, t);
            if (t) {
                let {
                    use: n,
                    fallback: u
                } = e, {
                    use: a,
                    fallback: i
                } = t;
                n && a && (r.use = n.concat(a)), u && i && (r.fallback = l(u, i))
            }
            return r
        },
        F = (0, t.createContext)({});
    var $ = e.i(211671);
    let W = p && window.__SWR_DEVTOOLS_USE__,
        B = W ? window.__SWR_DEVTOOLS_USE__ : [],
        q = () => {
            let e = (0, t.useContext)(F);
            return (0, t.useMemo)(() => l(N, e), [e])
        },
        K = B.concat(e => (t, r, n) => {
            let a = r && ((...e) => {
                let [n] = k(t), [, , , a] = u.get(D);
                if (n.startsWith("$inf$")) return r(...e);
                let i = a[n];
                return o(i) ? r(...e) : (delete a[n], i)
            });
            return e(t, a, n)
        }),
        J = e => function(...t) {
            let r, n = q(),
                [u, a, i] = "function" == typeof(r = t)[1] ? [r[0], r[1], r[2] || {}] : [r[0], null, (null === r[1] ? r[2] : r[1]) || {}],
                s = U(n, i),
                o = e,
                {
                    use: l
                } = s,
                c = (l || []).concat(K);
            for (let e = c.length; e--;) o = c[e](o);
            return o(u, a || s.fetcher || null, s)
        },
        z = (e, t, r) => {
            let n = t[e] || (t[e] = []);
            return n.push(r), () => {
                let e = n.indexOf(r);
                e >= 0 && (n[e] = n[n.length - 1], n.pop())
            }
        };
    W && (window.__SWR_DEVTOOLS_REACT__ = t.default), e.s(["subscribeCallback", () => z, "useSWRConfig", () => q, "withArgs", () => J], 271235);
    let G = () => {},
        Q = G(),
        X = (new WeakMap, t.default.use || (e => {
            switch (e.status) {
                case "pending":
                    throw e;
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
                default:
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
            }
        })),
        H = {
            dedupe: !0
        },
        Y = Promise.resolve(i),
        Z = s.defineProperty(e => {
            let {
                value: r
            } = e, n = (0, t.useContext)(F), u = "function" == typeof r, a = (0, t.useMemo)(() => u ? r(n) : r, [u, n, r]), s = (0, t.useMemo)(() => u ? a : U(n, a), [u, n, a]), o = a && a.provider, c = (0, t.useRef)(i);
            o && !c.current && (c.current = M(o(s.cache || D), a));
            let d = c.current;
            return d && (s.cache = d[0], s.mutate = d[1]), _(() => {
                if (d) return d[2] && d[2](), d[3]
            }, []), (0, t.createElement)(F.Provider, l(e, {
                value: s
            }))
        }, "defaultValue", {
            value: N
        }),
        ee = J((e, n, a) => {
            let {
                cache: s,
                compare: c,
                suspense: d,
                fallbackData: h,
                revalidateOnMount: g,
                revalidateIfStale: v,
                refreshInterval: w,
                refreshWhenHidden: m,
                refreshWhenOffline: b,
                keepPreviousData: R
            } = a, [T, S, P, j] = u.get(s), [x, C] = k(e), A = (0, t.useRef)(!1), M = (0, t.useRef)(!1), D = (0, t.useRef)(x), I = (0, t.useRef)(n), N = (0, t.useRef)(a), U = () => N.current.isVisible() && N.current.isOnline(), [F, W, B, q] = y(s, x), K = (0, t.useRef)({}).current, J = o(h) ? o(a.fallback) ? i : a.fallback[x] : h, G = (e, t) => {
                for (let r in K)
                    if ("data" === r) {
                        if (!c(e[r], t[r]) && (!o(e[r]) || !c(ei, t[r]))) return !1
                    } else if (t[r] !== e[r]) return !1;
                return !0
            }, Q = (0, t.useMemo)(() => {
                let e = !!x && !!n && (o(g) ? !N.current.isPaused() && !d && !1 !== v : g),
                    t = t => {
                        let r = l(t);
                        return (delete r._k, e) ? {
                            isValidating: !0,
                            isLoading: !0,
                            ...r
                        } : r
                    },
                    r = F(),
                    u = q(),
                    a = t(r),
                    i = r === u ? a : t(u),
                    s = a;
                return [() => {
                    let e = t(F());
                    return G(e, s) ? (s.data = e.data, s.isLoading = e.isLoading, s.isValidating = e.isValidating, s.error = e.error, s) : (s = e, e)
                }, () => i]
            }, [s, x]), Z = (0, r.useSyncExternalStore)((0, t.useCallback)(e => B(x, (t, r) => {
                G(r, t) || e()
            }), [s, x]), Q[0], Q[1]), ee = !A.current, et = T[x] && T[x].length > 0, er = Z.data, en = o(er) ? J && "function" == typeof J.then ? X(J) : J : er, eu = Z.error, ea = (0, t.useRef)(en), ei = R ? o(er) ? o(ea.current) ? en : ea.current : er : en, es = (!et || !!o(eu)) && (ee && !o(g) ? g : !N.current.isPaused() && (d ? !o(en) && v : o(en) || v)), eo = !!(x && n && ee && es), el = o(Z.isValidating) ? eo : Z.isValidating, ec = o(Z.isLoading) ? eo : Z.isLoading, ed = (0, t.useCallback)(async e => {
                let t, r, n = I.current;
                if (!x || !n || M.current || N.current.isPaused()) return !1;
                let u = !0,
                    s = e || {},
                    l = !P[x] || !s.dedupe,
                    d = () => E ? !M.current && x === D.current && A.current : x === D.current,
                    f = {
                        isValidating: !1,
                        isLoading: !1
                    },
                    p = () => {
                        W(f)
                    },
                    h = () => {
                        let e = P[x];
                        e && e[1] === r && delete P[x]
                    },
                    g = {
                        isValidating: !0
                    };
                o(F().data) && (g.isLoading = !0);
                try {
                    if (l && (W(g), a.loadingTimeout && o(F().data) && setTimeout(() => {
                            u && d() && N.current.onLoadingSlow(x, a)
                        }, a.loadingTimeout), P[x] = [n(C), V()]), [t, r] = P[x], t = await t, l && setTimeout(h, a.dedupingInterval), !P[x] || P[x][1] !== r) return l && d() && N.current.onDiscarded(x), !1;
                    f.error = i;
                    let e = S[x];
                    if (!o(e) && (r <= e[0] || r <= e[1] || 0 === e[1])) return p(), l && d() && N.current.onDiscarded(x), !1;
                    let s = F().data;
                    f.data = c(s, t) ? s : t, l && d() && N.current.onSuccess(t, x, a)
                } catch (r) {
                    h();
                    let e = N.current,
                        {
                            shouldRetryOnError: t
                        } = e;
                    !e.isPaused() && (f.error = r, l && d()) && (e.onError(r, x, e), (!0 === t || "function" == typeof t && t(r)) && (!N.current.revalidateOnFocus || !N.current.revalidateOnReconnect || U()) && e.onErrorRetry(r, x, e, e => {
                        let t = T[x];
                        t && t[0] && t[0]($.ERROR_REVALIDATE_EVENT, e)
                    }, {
                        retryCount: (s.retryCount || 0) + 1,
                        dedupe: !0
                    }))
                }
                return u = !1, p(), !0
            }, [x, s]), ef = (0, t.useCallback)((...e) => L(s, D.current, ...e), []);
            if (_(() => {
                    I.current = n, N.current = a, o(er) || (ea.current = er)
                }), _(() => {
                    if (!x) return;
                    let e = ed.bind(i, H),
                        t = 0;
                    N.current.revalidateOnFocus && (t = Date.now() + N.current.focusThrottleInterval);
                    let r = z(x, T, (r, n = {}) => {
                        if (r == $.FOCUS_EVENT) {
                            let r = Date.now();
                            N.current.revalidateOnFocus && r > t && U() && (t = r + N.current.focusThrottleInterval, e())
                        } else if (r == $.RECONNECT_EVENT) N.current.revalidateOnReconnect && U() && e();
                        else if (r == $.MUTATE_EVENT) return ed();
                        else if (r == $.ERROR_REVALIDATE_EVENT) return ed(n)
                    });
                    if (M.current = !1, D.current = x, A.current = !0, W({
                            _k: C
                        }), es && !P[x])
                        if (o(en) || O) e();
                        else p && typeof window.requestAnimationFrame != f ? window.requestAnimationFrame(e) : setTimeout(e, 1);
                    return () => {
                        M.current = !0, r()
                    }
                }, [x]), _(() => {
                    let e;

                    function t() {
                        let t = "function" == typeof w ? w(F().data) : w;
                        t && -1 !== e && (e = setTimeout(r, t))
                    }

                    function r() {
                        !F().error && (m || N.current.isVisible()) && (b || N.current.isOnline()) ? ed(H).then(t) : t()
                    }
                    return t(), () => {
                        e && (clearTimeout(e), e = -1)
                    }
                }, [w, m, b, x]), (0, t.useDebugValue)(ei), d) {
                let e = x && o(en);
                if (!E && O && e) throw Error("Fallback data is required when using Suspense in SSR.");
                e && (I.current = n, N.current = a, M.current = !1);
                let t = j[x];
                if (X(!o(t) && e ? ef(t) : Y), !o(eu) && e) throw eu;
                let r = e ? ed(H) : Y;
                !o(ei) && e && (r.status = "fulfilled", r.value = !0), X(r)
            }
            return {
                mutate: ef,
                get data() {
                    return K.data = !0, ei
                },
                get error() {
                    return K.error = !0, eu
                },
                get isValidating() {
                    return K.isValidating = !0, el
                },
                get isLoading() {
                    return K.isLoading = !0, ec
                }
            }
        });
    e.s(["SWRConfig", () => Z, "default", () => ee], 283599)
}, 326373, e => {
    "use strict";
    var t = e.i(21539);
    e.s(["Dropdown", () => t.default])
}, 667585, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(132061);

    function u({
        reason: e,
        children: t
    }) {
        if ("undefined" == typeof window) throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 309885, (e, t, r) => {
    "use strict";

    function n(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 652157, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(843476),
        u = e.r(174080),
        a = e.r(563599),
        i = e.r(309885),
        s = e.r(543369);

    function o({
        moduleIds: e
    }) {
        if ("undefined" != typeof window) return null;
        let t = a.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
            let n = t.reactLoadableManifest;
            for (let t of e) {
                if (!n[t]) continue;
                let e = n[t].files;
                r.push(...e)
            }
        }
        if (0 === r.length) return null;
        let o = (0, s.getDeploymentIdQueryOrEmptyString)();
        return (0, n.jsx)(n.Fragment, {
            children: r.map(e => {
                let r = `${t.assetPrefix}/_next/${(0,i.encodeURIPath)(e)}${o}`;
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, u.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 869093, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(843476),
        u = e.r(271645),
        a = e.r(667585),
        i = e.r(652157);

    function s(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let o = {
            loader: () => Promise.resolve(s(() => null)),
            loading: null,
            ssr: !0
        },
        l = function(e) {
            let t = { ...o,
                    ...e
                },
                r = (0, u.lazy)(() => t.loader().then(s)),
                l = t.loading;

            function c(e) {
                let s = l ? (0, n.jsx)(l, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    o = !t.ssr || !!t.loading,
                    c = o ? u.Suspense : u.Fragment,
                    d = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["undefined" == typeof window ? (0, n.jsx)(i.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(r, { ...e
                        })]
                    }) : (0, n.jsx)(a.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(r, { ...e
                        })
                    });
                return (0, n.jsx)(c, { ...o ? {
                        fallback: s
                    } : {},
                    children: d
                })
            }
            return c.displayName = "LoadableComponent", c
        }
}, 770703, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(555682)._(e.r(869093));

    function u(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let u = { ...r,
            ...t
        };
        return (0, n.default)({ ...u,
            modules: u.loadableGenerated ? .modules
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 944779, e => {
    "use strict";
    var t = e.i(117595),
        r = e.i(83016),
        n = e.i(324322);
    class u extends n.APIRequest {
        async login(e) {
            return this.post("/auth/login", { ...e,
                password: (0, r.hashPassword)(e.password)
            })
        }
        setToken(e) {
            t.default.set(n.TOKEN, e)
        }
        getToken() {
            return t.default.get(n.TOKEN)
        }
        removeToken() {
            t.default.remove(n.TOKEN), t.default.remove("next-auth.csrf-token"), t.default.remove("next-auth.session-token")
        }
        updatePassword(e, t, n = "user") {
            let u = (0, r.hashPassword)(e);
            return this.put(t ? "/admin/auth/users/password" : "/auth/users/me/password", {
                userId: t,
                password: u,
                source: n
            })
        }
        resetPassword(e) {
            return this.post("/auth/users/forgot", e)
        }
    }
    let a = new u;
    e.s(["authService", 0, a])
}, 382526, e => {
    "use strict";
    var t = e.i(140240),
        r = e.i(83016),
        n = e.i(324322);
    class u extends n.APIRequest {
        me(e) {
            return this.get("/users/me", e)
        }
        updateMe(e) {
            return e.password && (e.password = (0, r.hashPassword)(e.password)), this.put("/users", e)
        }
        create(e) {
            return e.password && (e.password = (0, r.hashPassword)(e.password)), this.post("/admin/users", e)
        }
        update(e, t) {
            return t.password && (t.password = (0, r.hashPassword)(t.password)), this.put(`/admin/users/${e}`, t)
        }
        getAvatarUploadUrl(e) {
            return e ? `https://api.fanso.club/admin/users/${e}/avatar/upload` : "https://api.fanso.club/users/avatar/upload"
        }
        uploadAvatarUser(e, t) {
            return this.upload(`/admin/users/${t}/avatar/upload`, [{
                file: e,
                fieldname: "avatar"
            }])
        }
        search(e) {
            return this.get((0, t.buildUrl)("/admin/users/search", e))
        }
        searchEndpoint() {
            return "/admin/users/search"
        }
        findById(e, t) {
            return this.get(`/admin/users/${e}/view`, t)
        }
        delete(e) {
            return this.del(`/admin/users/${e}/delete`)
        }
    }
    let a = new u;
    e.s(["userService", 0, a])
}, 343676, (e, t, r) => {
    function n() {
        return t.exports = n = Object.assign.bind(), t.exports.__esModule = !0, t.exports.default = t.exports, n.apply(null, arguments)
    }
    t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
}, 592968, e => {
    "use strict";
    var t = e.i(491816);
    e.s(["Tooltip", () => t.default])
}, 282786, e => {
    "use strict";
    var t = e.i(829672);
    e.s(["Popover", () => t.default])
}, 770914, e => {
    "use strict";
    var t = e.i(38243);
    e.s(["Space", () => t.default])
}, 653496, e => {
    "use strict";
    var t = e.i(721369);
    e.s(["Tabs", () => t.default])
}, 482725, e => {
    "use strict";
    var t = e.i(244451);
    e.s(["Spin", () => t.default])
}, 899268, e => {
    "use strict";
    var t = e.i(60699);
    e.s(["Menu", () => t.default])
}, 229581, e => {
    e.v(t => Promise.all(["static/chunks/747bc5f03ecc6e8e.js"].map(t => e.l(t))).then(() => t(344456)))
}]);