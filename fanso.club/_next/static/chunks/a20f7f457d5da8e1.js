(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 998183, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return u
        },
        searchParamsToUrlQuery: function() {
            return o
        },
        urlQueryToSearchParams: function() {
            return l
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });

    function o(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function a(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function l(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, a(e));
            else t.set(r, a(n));
        return t
    }

    function u(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        for (let t of r) {
            for (let r of t.keys()) e.delete(r);
            for (let [r, n] of t.entries()) e.append(r, n)
        }
        return e
    }
}, 195057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return s
        },
        urlObjectKeys: function() {
            return u
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(190809)._(e.r(998183)),
        a = /https?|ftp|gopher|file/;

    function l(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", i = e.pathname || "", l = e.hash || "", u = e.query || "", s = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? s = t + e.host : r && (s = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (s += ":" + e.port)), u && "object" == typeof u && (u = String(o.urlQueryToSearchParams(u)));
        let c = e.search || u && `?${u}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || a.test(n)) && !1 !== s ? (s = "//" + (s || ""), i && "/" !== i[0] && (i = "/" + i)) : s || (s = ""), l && "#" !== l[0] && (l = "#" + l), c && "?" !== c[0] && (c = "?" + c), i = i.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${s}${i}${c}${l}`
    }
    let u = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function s(e) {
        return l(e)
    }
}, 718967, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return y
        },
        MiddlewareNotFoundError: function() {
            return w
        },
        MissingStaticPage: function() {
            return _
        },
        NormalizeError: function() {
            return b
        },
        PageNotFoundError: function() {
            return v
        },
        SP: function() {
            return h
        },
        ST: function() {
            return m
        },
        WEB_VITALS: function() {
            return o
        },
        execOnce: function() {
            return a
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return s
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return u
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return g
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return P
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function a(e) {
        let t, r = !1;
        return function() {
            for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            return r || (r = !0, t = e(...i)), t
        }
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = e => l.test(e);

    function s() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = s();
        return e.substring(t.length)
    }

    function f(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function d(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function g(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await g(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && d(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let h = "u" > typeof performance,
        m = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class y extends Error {}
    class b extends Error {}
    class v extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class _ extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class w extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function P(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 573668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(718967),
        i = e.r(652817);

    function o(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, i.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 284508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 522016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return y
        },
        useLinkStatus: function() {
            return v
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(190809),
        a = e.r(843476),
        l = o._(e.r(271645)),
        u = e.r(195057),
        s = e.r(8372),
        c = e.r(818581),
        f = e.r(718967),
        d = e.r(405550);
    e.r(233525);
    let p = e.r(91949),
        g = e.r(573668),
        h = e.r(509396);

    function m(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e)
    }

    function y(t) {
        var r;
        let n, i, o, [u, y] = (0, l.useOptimistic)(p.IDLE_LINK_STATUS),
            v = (0, l.useRef)(null),
            {
                href: _,
                as: w,
                children: P,
                prefetch: j = null,
                passHref: O,
                replace: E,
                shallow: x,
                scroll: C,
                onClick: S,
                onMouseEnter: R,
                onTouchStart: M,
                legacyBehavior: $ = !1,
                onNavigate: I,
                ref: T,
                unstable_dynamicOnHover: A,
                ...U
            } = t;
        n = P, $ && ("string" == typeof n || "number" == typeof n) && (n = (0, a.jsx)("a", {
            children: n
        }));
        let z = l.default.useContext(s.AppRouterContext),
            N = !1 !== j,
            k = !1 !== j ? null === (r = j) || "auto" === r ? h.FetchStrategy.PPR : h.FetchStrategy.Full : h.FetchStrategy.PPR,
            {
                href: D,
                as: L
            } = l.default.useMemo(() => {
                let e = m(_);
                return {
                    href: e,
                    as: w ? m(w) : e
                }
            }, [_, w]);
        if ($) {
            if (n ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            i = l.default.Children.only(n)
        }
        let F = $ ? i && "object" == typeof i && i.ref : T,
            B = l.default.useCallback(e => (null !== z && (v.current = (0, p.mountLinkInstance)(e, D, z, k, N, y)), () => {
                v.current && ((0, p.unmountLinkForCurrentNavigation)(v.current), v.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [N, D, z, k, y]),
            W = {
                ref: (0, c.useMergedRef)(B, F),
                onClick(t) {
                    $ || "function" != typeof S || S(t), $ && i.props && "function" == typeof i.props.onClick && i.props.onClick(t), !z || t.defaultPrevented || function(t, r, n, i, o, a, u) {
                        if ("u" > typeof window) {
                            let s, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((s = t.currentTarget.getAttribute("target")) && "_self" !== s || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, g.isLocalURL)(r)) {
                                o && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), u) {
                                let e = !1;
                                if (u({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: f
                            } = e.r(699781);
                            l.default.startTransition(() => {
                                f(n || r, o ? "replace" : "push", a ? ? !0, i.current)
                            })
                        }
                    }(t, D, L, v, E, C, I)
                },
                onMouseEnter(e) {
                    $ || "function" != typeof R || R(e), $ && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), z && N && (0, p.onNavigationIntent)(e.currentTarget, !0 === A)
                },
                onTouchStart: function(e) {
                    $ || "function" != typeof M || M(e), $ && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), z && N && (0, p.onNavigationIntent)(e.currentTarget, !0 === A)
                }
            };
        return (0, f.isAbsoluteUrl)(L) ? W.href = L : $ && !O && ("a" !== i.type || "href" in i.props) || (W.href = (0, d.addBasePath)(L)), o = $ ? l.default.cloneElement(i, W) : (0, a.jsx)("a", { ...U,
            ...W,
            children: n
        }), (0, a.jsx)(b.Provider, {
            value: u,
            children: o
        })
    }
    e.r(284508);
    let b = (0, l.createContext)(p.IDLE_LINK_STATUS),
        v = () => (0, l.useContext)(b);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 233525, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 818581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(271645);

    function i(e, t) {
        let r = (0, n.useRef)(null),
            i = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = i.current;
                t && (i.current = null, t())
            } else e && (r.current = o(e, n)), t && (i.current = o(t, n))
        }, [e, t])
    }

    function o(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 488143, (e, t, r) => {
    "use strict";

    function n(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a
        } = e, l = n ? 40 * n : t, u = i ? 40 * i : r, s = l && u ? `viewBox='0 0 ${l} ${u}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 987690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 908927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return s
        }
    }), e.r(233525);
    let n = e.r(543369),
        i = e.r(488143),
        o = e.r(987690),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function l(e) {
        return void 0 !== e.default
    }

    function u(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function s(e, t) {
        var r;
        let s, c, f, {
                src: d,
                sizes: p,
                unoptimized: g = !1,
                priority: h = !1,
                preload: m = !1,
                loading: y,
                className: b,
                quality: v,
                width: _,
                height: w,
                fill: P = !1,
                style: j,
                overrideSrc: O,
                onLoad: E,
                onLoadingComplete: x,
                placeholder: C = "empty",
                blurDataURL: S,
                fetchPriority: R,
                decoding: M = "async",
                layout: $,
                objectFit: I,
                objectPosition: T,
                lazyBoundary: A,
                lazyRoot: U,
                ...z
            } = e,
            {
                imgConf: N,
                showAltText: k,
                blurComplete: D,
                defaultLoader: L
            } = t,
            F = N || o.imageConfigDefault;
        if ("allSizes" in F) s = F;
        else {
            let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
                t = F.deviceSizes.sort((e, t) => e - t),
                r = F.qualities ? .sort((e, t) => e - t);
            s = { ...F,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === L) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let B = z.loader || L;
        delete z.loader, delete z.srcSet;
        let W = "__next_img_default" in B;
        if (W) {
            if ("custom" === s.loader) throw Object.defineProperty(Error(`Image with src "${d}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = B;
            B = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if ($) {
            "fill" === $ && (P = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[$];
            e && (j = { ...j,
                ...e
            });
            let t = {
                responsive: "100vw",
                fill: "100vw"
            }[$];
            t && !p && (p = t)
        }
        let q = "",
            G = u(_),
            K = u(w);
        if ((r = d) && "object" == typeof r && (l(r) || void 0 !== r.src)) {
            let e = l(d) ? d.default : d;
            if (!e.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(e)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!e.height || !e.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(e)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (c = e.blurWidth, f = e.blurHeight, S = S || e.blurDataURL, q = e.src, !P)
                if (G || K) {
                    if (G && !K) {
                        let t = G / e.width;
                        K = Math.round(e.height * t)
                    } else if (!G && K) {
                        let t = K / e.height;
                        G = Math.round(e.width * t)
                    }
                } else G = e.width, K = e.height
        }
        let V = !h && !m && ("lazy" === y || void 0 === y);
        (!(d = "string" == typeof d ? d : q) || d.startsWith("data:") || d.startsWith("blob:")) && (g = !0, V = !1), s.unoptimized && (g = !0), W && !s.dangerouslyAllowSVG && d.split("?", 1)[0].endsWith(".svg") && (g = !0);
        let X = u(v),
            Q = Object.assign(P ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: I,
                objectPosition: T
            } : {}, k ? {} : {
                color: "transparent"
            }, j),
            H = D || "empty" === C ? null : "blur" === C ? `url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:G,heightInt:K,blurWidth:c,blurHeight:f,blurDataURL:S||"",objectFit:Q.objectFit})}")` : `url("${C}")`,
            J = a.includes(Q.objectFit) ? "fill" === Q.objectFit ? "100% 100%" : "cover" : Q.objectFit,
            Y = H ? {
                backgroundSize: J,
                backgroundPosition: Q.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H
            } : {},
            Z = function(e) {
                let {
                    config: t,
                    src: r,
                    unoptimized: i,
                    width: o,
                    quality: a,
                    sizes: l,
                    loader: u
                } = e;
                if (i) {
                    let e = (0, n.getDeploymentId)();
                    if (r.startsWith("/") && !r.startsWith("//") && e) {
                        let t = r.includes("?") ? "&" : "?";
                        r = `${r}${t}dpl=${e}`
                    }
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: s,
                    kind: c
                } = function(e, t, r) {
                    let {
                        deviceSizes: n,
                        allSizes: i
                    } = e;
                    if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g,
                            t = [];
                        for (let n; n = e.exec(r);) t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: i.filter(t => t >= n[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                        kind: "x"
                    }
                }(t, o, l), f = s.length - 1;
                return {
                    sizes: l || "w" !== c ? l : "100vw",
                    srcSet: s.map((e, n) => `${u({config:t,src:r,quality:a,width:e})} ${"w"===c?e:n+1}${c}`).join(", "),
                    src: u({
                        config: t,
                        src: r,
                        quality: a,
                        width: s[f]
                    })
                }
            }({
                config: s,
                src: d,
                unoptimized: g,
                width: G,
                quality: X,
                sizes: p,
                loader: B
            }),
            ee = V ? "lazy" : y;
        return {
            props: { ...z,
                loading: ee,
                fetchPriority: R,
                width: G,
                height: K,
                decoding: M,
                className: b,
                style: { ...Q,
                    ...Y
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: O || Z.src
            },
            meta: {
                unoptimized: g,
                preload: m || h,
                placeholder: C,
                fill: P
            }
        }
    }
}, 898879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(271645),
        i = "u" < typeof window,
        o = i ? () => {} : n.useLayoutEffect,
        a = i ? () => {} : n.useEffect;

    function l(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function l() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return i && (t ? .mountedInstances ? .add(e.children), l()), o(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), o(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 325633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return h
        },
        defaultHead: function() {
            return f
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(555682),
        a = e.r(190809),
        l = e.r(843476),
        u = a._(e.r(271645)),
        s = o._(e.r(898879)),
        c = e.r(742732);

    function f() {
        return [(0, l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function d(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === u.default.Fragment ? e.concat(u.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(233525);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function g(e) {
        let t, r, n, i;
        return e.reduce(d, []).reverse().concat(f().reverse()).filter((t = new Set, r = new Set, n = new Set, i = {}, e => {
            let o = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? o = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? o = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = i[r] || new Set;
                                ("name" !== r || !a) && n.has(t) ? o = !1 : (n.add(t), i[r] = n)
                            }
                    }
            }
            return o
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return u.default.cloneElement(e, {
                key: r
            })
        })
    }
    let h = function(e) {
        let {
            children: t
        } = e, r = (0, u.useContext)(c.HeadManagerContext);
        return (0, l.jsx)(s.default, {
            reduceComponentsToState: g,
            headManager: r,
            children: t
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 918556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(555682)._(e.r(271645)),
        i = e.r(987690),
        o = n.default.createContext(i.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(555682)._(e.r(271645)).default.createContext(null)
}, 670965, (e, t, r) => {
    "use strict";

    function n(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(670965),
        i = e.r(543369);

    function o(e) {
        let {
            config: t,
            src: r,
            width: o,
            quality: a
        } = e;
        if (r.startsWith("/") && r.includes("?") && t.localPatterns ? .length === 1 && "**" === t.localPatterns[0].pathname && "" === t.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${r}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let l = (0, n.findClosestQuality)(a, t),
            u = (0, i.getDeploymentId)();
        return `${t.path}?url=${encodeURIComponent(r)}&w=${o}&q=${l}${r.startsWith("/")&&u?`&dpl=${u}`:""}`
    }
    o.__next_img_default = !0;
    let a = o
}, 605500, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return _
        }
    });
    let n = e.r(555682),
        i = e.r(190809),
        o = e.r(843476),
        a = i._(e.r(271645)),
        l = n._(e.r(174080)),
        u = n._(e.r(325633)),
        s = e.r(908927),
        c = e.r(987690),
        f = e.r(918556);
    e.r(233525);
    let d = e.r(65856),
        p = n._(e.r(1948)),
        g = e.r(818581),
        h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [25, 50, 70, 75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function m(e, t, r, n, i, o, a) {
        let l = e ? .src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        i = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => i,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            i = !0, t.stopPropagation()
                        }
                    })
                }
                n ? .current && n.current(e)
            }
        }))
    }

    function y(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, a.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: i,
            height: l,
            width: u,
            decoding: s,
            className: c,
            style: f,
            fetchPriority: d,
            placeholder: p,
            loading: h,
            unoptimized: b,
            fill: v,
            onLoadRef: _,
            onLoadingCompleteRef: w,
            setBlurComplete: P,
            setShowAltText: j,
            sizesInput: O,
            onLoad: E,
            onError: x,
            ...C
        } = e, S = (0, a.useCallback)(e => {
            e && (x && (e.src = e.src), e.complete && m(e, p, _, w, P, b, O))
        }, [r, p, _, w, P, x, b, O]), R = (0, g.useMergedRef)(t, S);
        return (0, o.jsx)("img", { ...C,
            ...y(d),
            loading: h,
            width: u,
            height: l,
            decoding: s,
            "data-nimg": v ? "fill" : "1",
            className: c,
            style: f,
            sizes: i,
            srcSet: n,
            src: r,
            ref: R,
            onLoad: e => {
                m(e.currentTarget, p, _, w, P, b, O)
            },
            onError: e => {
                j(!0), "empty" !== p && P(!0), x && x(e)
            }
        })
    });

    function v(e) {
        let {
            isAppRouter: t,
            imgAttributes: r
        } = e, n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...y(r.fetchPriority)
        };
        return t && l.default.preload ? (l.default.preload(r.src, n), null) : (0, o.jsx)(u.default, {
            children: (0, o.jsx)("link", {
                rel: "preload",
                href: r.srcSet ? void 0 : r.src,
                ...n
            }, "__nimg-" + r.src + r.srcSet + r.sizes)
        })
    }
    let _ = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(d.RouterContext),
            n = (0, a.useContext)(f.ImageConfigContext),
            i = (0, a.useMemo)(() => {
                let e = h || n || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    i = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: i,
                    localPatterns: "u" < typeof window ? n ? .localPatterns : e.localPatterns
                }
            }, [n]),
            {
                onLoad: l,
                onLoadingComplete: u
            } = e,
            g = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
            g.current = l
        }, [l]);
        let m = (0, a.useRef)(u);
        (0, a.useEffect)(() => {
            m.current = u
        }, [u]);
        let [y, _] = (0, a.useState)(!1), [w, P] = (0, a.useState)(!1), {
            props: j,
            meta: O
        } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: y,
            showAltText: w
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(b, { ...j,
                unoptimized: O.unoptimized,
                placeholder: O.placeholder,
                fill: O.fill,
                onLoadRef: g,
                onLoadingCompleteRef: m,
                setBlurComplete: _,
                setShowAltText: P,
                sizesInput: e.sizes,
                ref: t
            }), O.preload ? (0, o.jsx)(v, {
                isAppRouter: !r,
                imgAttributes: j
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 794909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return s
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(555682),
        a = e.r(908927),
        l = e.r(605500),
        u = o._(e.r(1948));

    function s(e) {
        let {
            props: t
        } = (0, a.getImgProps)(e, {
            defaultLoader: u.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [25, 50, 70, 75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = l.Image
}, 657688, (e, t, r) => {
    t.exports = e.r(794909)
}, 982719, e => {
    "use strict";

    function t(e, t, r) {
        for (let n = 0; n < r.length; n++) e.setUint8(t + n, r.charCodeAt(n))
    }
    async function r(e) {
        let r = await e.arrayBuffer(),
            n = new AudioContext;
        return new Blob([function(e) {
            let r = e.numberOfChannels,
                n = e.sampleRate,
                i = new ArrayBuffer(e.length * r * 2 + 44),
                o = new DataView(i),
                a = [];
            for (let t = 0; t < r; t++) a.push(e.getChannelData(t));
            t(o, 0, "RIFF"), o.setUint32(4, 36 + e.length * r * 2, !0), t(o, 8, "WAVE"), t(o, 12, "fmt "), o.setUint32(16, 16, !0), o.setUint16(20, 1, !0), o.setUint16(22, r, !0), o.setUint32(24, n, !0), o.setUint32(28, n * r * 2, !0), o.setUint16(32, 2 * r, !0), o.setUint16(34, 16, !0), t(o, 36, "data"), o.setUint32(40, e.length * r * 2, !0);
            let l = 44;
            for (let t = 0; t < e.length; t++)
                for (let e = 0; e < r; e++) {
                    let r = Math.max(-1, Math.min(1, a[e][t]));
                    o.setInt16(l, 32767 * r, !0), l += 2
                }
            return i
        }(await n.decodeAudioData(r))], {
            type: "audio/wav"
        })
    }
    e.s(["convertToWav", () => r, "shimmer", 0, function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 256;
        return `
<svg width="${e}" height="${t}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ccc" offset="20%" />
      <stop stop-color="#eee" offset="50%" />
      <stop stop-color="#ccc" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${e}" height="${t}" fill="#ccc" />
  <rect id="r" width="${e}" height="${t}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${e}" to="${e}" dur="1s" repeatCount="indefinite"  />
</svg>`
    }, "toBase64", 0, e => window.btoa(e)])
}, 450901, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        n = e.i(657688),
        i = e.i(982719);

    function o(e) {
        let {
            src: o,
            alt: a,
            options: l,
            onClick: u = () => {},
            fallbackSrc: s = "/no-image.jpg"
        } = e, [c, f] = (0, r.useState)(o), d = {
            sizes: "(max-width: 768px) 100vw, (max-width: 2100px) 20vw",
            loading: "lazy",
            ...l,
            width: l ? .width || 256,
            height: l ? .height || 256
        };
        return l.fill && (delete d.width, delete d.height), l.priority && (d.loading = "eager", d.rel = "preload", d.fetchPriority = "high"), (0, r.useEffect)(() => {
            f(o)
        }, [o]), (0, t.jsx)(n.default, {
            alt: a || "img",
            src: c,
            placeholder: "blur",
            blurDataURL: `data:image/svg+xml;base64,${(0,i.toBase64)((0,i.shimmer)(l?.width,l?.height))}`,
            onError: () => {
                f(s)
            },
            onClick: () => u && u(),
            ...d
        })
    }
    e.s(["default", () => o])
}]);