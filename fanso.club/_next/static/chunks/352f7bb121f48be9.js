(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 324322, 117595, e => {
    "use strict";
    let t, r, n, o, i;
    var s, a, l, u, c, f = e.i(247167),
        d = e.i(140240);

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) e[n] = r[n]
        }
        return e
    }
    var h = function e(t, r) {
        function n(e, n, o) {
            if ("u" > typeof document) {
                "number" == typeof(o = p({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var i = "";
                for (var s in o) o[s] && (i += "; " + s, !0 !== o[s] && (i += "=" + o[s].split(";")[0]));
                return document.cookie = e + "=" + t.write(n, e) + i
            }
        }
        return Object.create({
            set: n,
            get: function(e) {
                if ("u" > typeof document && (!arguments.length || e)) {
                    for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < r.length; o++) {
                        var i = r[o].split("="),
                            s = i.slice(1).join("=");
                        try {
                            var a = decodeURIComponent(i[0]);
                            if (n[a] = t.read(s, a), e === a) break
                        } catch (e) {}
                    }
                    return e ? n[e] : n
                }
            },
            remove: function(e, t) {
                n(e, "", p({}, t, {
                    expires: -1
                }))
            },
            withAttributes: function(t) {
                return e(this.converter, p({}, this.attributes, t))
            },
            withConverter: function(t) {
                return e(p({}, this.converter, t), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(r)
            },
            converter: {
                value: Object.freeze(t)
            }
        })
    }({
        read: function(e) {
            return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    });

    function m(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    e.s(["default", () => h], 117595);
    let {
        toString: y
    } = Object.prototype, {
        getPrototypeOf: g
    } = Object, {
        iterator: b,
        toStringTag: w
    } = Symbol, E = (t = Object.create(null), e => {
        let r = y.call(e);
        return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
    }), R = e => (e = e.toLowerCase(), t => E(t) === e), O = e => t => typeof t === e, {
        isArray: S
    } = Array, v = O("undefined");

    function T(e) {
        return null !== e && !v(e) && null !== e.constructor && !v(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    let A = R("ArrayBuffer"),
        C = O("string"),
        x = O("function"),
        j = O("number"),
        U = e => null !== e && "object" == typeof e,
        N = e => {
            if ("object" !== E(e)) return !1;
            let t = g(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(w in e) && !(b in e)
        },
        P = R("Date"),
        L = R("File"),
        B = R("Blob"),
        _ = R("FileList"),
        F = R("URLSearchParams"),
        [k, D, q, I] = ["ReadableStream", "Request", "Response", "Headers"].map(R);

    function z(e, t) {
        let r, n, {
            allOwnKeys: o = !1
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != e)
            if ("object" != typeof e && (e = [e]), S(e))
                for (r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
            else {
                let n;
                if (T(e)) return;
                let i = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
                    s = i.length;
                for (r = 0; r < s; r++) n = i[r], t.call(null, e[n], n, e)
            }
    }

    function M(e, t) {
        let r;
        if (T(e)) return null;
        t = t.toLowerCase();
        let n = Object.keys(e),
            o = n.length;
        for (; o-- > 0;)
            if (t === (r = n[o]).toLowerCase()) return r;
        return null
    }
    let J = "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : "u" > typeof window ? window : e.g,
        H = e => !v(e) && e !== J,
        W = (r = "u" > typeof Uint8Array && g(Uint8Array), e => r && e instanceof r),
        $ = R("HTMLFormElement"),
        K = (e => {
            let {
                hasOwnProperty: t
            } = e;
            return (e, r) => t.call(e, r)
        })(Object.prototype),
        V = R("RegExp"),
        X = (e, t) => {
            let r = Object.getOwnPropertyDescriptors(e),
                n = {};
            z(r, (r, o) => {
                let i;
                !1 !== (i = t(r, o, e)) && (n[o] = i || r)
            }), Object.defineProperties(e, n)
        },
        G = R("AsyncFunction"),
        Q = (s = "function" == typeof setImmediate, a = x(J.postMessage), s ? setImmediate : a ? (l = `axios@${Math.random()}`, u = [], J.addEventListener("message", e => {
            let {
                source: t,
                data: r
            } = e;
            t === J && r === l && u.length && u.shift()()
        }, !1), e => {
            u.push(e), J.postMessage(l, "*")
        }) : e => setTimeout(e)),
        Z = "u" > typeof queueMicrotask ? queueMicrotask.bind(J) : void 0 !== f.default && f.default.nextTick || Q,
        Y = {
            isArray: S,
            isArrayBuffer: A,
            isBuffer: T,
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || x(e.append) && ("formdata" === (t = E(e)) || "object" === t && x(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && A(e.buffer)
            },
            isString: C,
            isNumber: j,
            isBoolean: e => !0 === e || !1 === e,
            isObject: U,
            isPlainObject: N,
            isEmptyObject: e => {
                if (!U(e) || T(e)) return !1;
                try {
                    return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
                } catch (e) {
                    return !1
                }
            },
            isReadableStream: k,
            isRequest: D,
            isResponse: q,
            isHeaders: I,
            isUndefined: v,
            isDate: P,
            isFile: L,
            isBlob: B,
            isRegExp: V,
            isFunction: x,
            isStream: e => U(e) && x(e.pipe),
            isURLSearchParams: F,
            isTypedArray: W,
            isFileList: _,
            forEach: z,
            merge: function e() {
                let {
                    caseless: t
                } = H(this) && this || {}, r = {}, n = (n, o) => {
                    let i = t && M(r, o) || o;
                    N(r[i]) && N(n) ? r[i] = e(r[i], n) : N(n) ? r[i] = e({}, n) : S(n) ? r[i] = n.slice() : r[i] = n
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && z(arguments[e], n);
                return r
            },
            extend: function(e, t, r) {
                let {
                    allOwnKeys: n
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return z(t, (t, n) => {
                    r && x(t) ? e[n] = m(t, r) : e[n] = t
                }, {
                    allOwnKeys: n
                }), e
            },
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, r, n) => {
                e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), r && Object.assign(e.prototype, r)
            },
            toFlatObject: (e, t, r, n) => {
                let o, i, s, a = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0;) s = o[i], (!n || n(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
                    e = !1 !== r && g(e)
                } while (e && (!r || r(e, t)) && e !== Object.prototype) return t
            },
            kindOf: E,
            kindOfTest: R,
            endsWith: (e, t, r) => {
                e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
                let n = e.indexOf(t, r);
                return -1 !== n && n === r
            },
            toArray: e => {
                if (!e) return null;
                if (S(e)) return e;
                let t = e.length;
                if (!j(t)) return null;
                let r = Array(t);
                for (; t-- > 0;) r[t] = e[t];
                return r
            },
            forEachEntry: (e, t) => {
                let r, n = (e && e[b]).call(e);
                for (;
                    (r = n.next()) && !r.done;) {
                    let n = r.value;
                    t.call(e, n[0], n[1])
                }
            },
            matchAll: (e, t) => {
                let r, n = [];
                for (; null !== (r = e.exec(t));) n.push(r);
                return n
            },
            isHTMLForm: $,
            hasOwnProperty: K,
            hasOwnProp: K,
            reduceDescriptors: X,
            freezeMethods: e => {
                X(e, (t, r) => {
                    if (x(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                    if (x(e[r])) {
                        if (t.enumerable = !1, "writable" in t) {
                            t.writable = !1;
                            return
                        }
                        t.set || (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + r + "'")
                        })
                    }
                })
            },
            toObjectSet: (e, t) => {
                let r = {};
                return (S(e) ? e : String(e).split(t)).forEach(e => {
                    r[e] = !0
                }), r
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r
            }),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e *= 1) ? e : t,
            findKey: M,
            global: J,
            isContextDefined: H,
            isSpecCompliantForm: function(e) {
                return !!(e && x(e.append) && "FormData" === e[w] && e[b])
            },
            toJSONObject: e => {
                let t = Array(10),
                    r = (e, n) => {
                        if (U(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (T(e)) return e;
                            if (!("toJSON" in e)) {
                                t[n] = e;
                                let o = S(e) ? [] : {};
                                return z(e, (e, t) => {
                                    let i = r(e, n + 1);
                                    v(i) || (o[t] = i)
                                }), t[n] = void 0, o
                            }
                        }
                        return e
                    };
                return r(e, 0)
            },
            isAsyncFn: G,
            isThenable: e => e && (U(e) || x(e)) && x(e.then) && x(e.catch),
            setImmediate: Q,
            asap: Z,
            isIterable: e => null != e && x(e[b])
        };
    var ee = e.i(467034);

    function et(e, t, r, n, o) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null)
    }
    Y.inherits(et, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: Y.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    let er = et.prototype,
        en = {};

    function eo(e) {
        return Y.isPlainObject(e) || Y.isArray(e)
    }

    function ei(e) {
        return Y.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function es(e, t, r) {
        return e ? e.concat(t).map(function(e, t) {
            return e = ei(e), !r && t ? "[" + e + "]" : e
        }).join(r ? "." : "") : t
    }["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
        en[e] = {
            value: e
        }
    }), Object.defineProperties(et, en), Object.defineProperty(er, "isAxiosError", {
        value: !0
    }), et.from = (e, t, r, n, o, i) => {
        let s = Object.create(er);
        return Y.toFlatObject(e, s, function(e) {
            return e !== Error.prototype
        }, e => "isAxiosError" !== e), et.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s
    };
    let ea = Y.toFlatObject(Y, {}, null, function(e) {
            return /^is[A-Z]/.test(e)
        }),
        el = function(e, t, r) {
            if (!Y.isObject(e)) throw TypeError("target must be an object");
            t = t || new FormData;
            let n = (r = Y.toFlatObject(r, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(e, t) {
                    return !Y.isUndefined(t[e])
                })).metaTokens,
                o = r.visitor || u,
                i = r.dots,
                s = r.indexes,
                a = (r.Blob || "u" > typeof Blob && Blob) && Y.isSpecCompliantForm(t);
            if (!Y.isFunction(o)) throw TypeError("visitor must be a function");

            function l(e) {
                if (null === e) return "";
                if (Y.isDate(e)) return e.toISOString();
                if (Y.isBoolean(e)) return e.toString();
                if (!a && Y.isBlob(e)) throw new et("Blob is not supported. Use a Buffer instead.");
                return Y.isArrayBuffer(e) || Y.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : ee.Buffer.from(e) : e
            }

            function u(e, r, o) {
                let a = e;
                if (e && !o && "object" == typeof e)
                    if (Y.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), e = JSON.stringify(e);
                    else {
                        var u;
                        if (Y.isArray(e) && (u = e, Y.isArray(u) && !u.some(eo)) || (Y.isFileList(e) || Y.endsWith(r, "[]")) && (a = Y.toArray(e))) return r = ei(r), a.forEach(function(e, n) {
                            Y.isUndefined(e) || null === e || t.append(!0 === s ? es([r], n, i) : null === s ? r : r + "[]", l(e))
                        }), !1
                    }
                return !!eo(e) || (t.append(es(o, r, i), l(e)), !1)
            }
            let c = [],
                f = Object.assign(ea, {
                    defaultVisitor: u,
                    convertValue: l,
                    isVisitable: eo
                });
            if (!Y.isObject(e)) throw TypeError("data must be an object");
            return ! function e(r, n) {
                if (!Y.isUndefined(r)) {
                    if (-1 !== c.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                    c.push(r), Y.forEach(r, function(r, i) {
                        !0 === (!(Y.isUndefined(r) || null === r) && o.call(t, r, Y.isString(i) ? i.trim() : i, n, f)) && e(r, n ? n.concat(i) : [i])
                    }), c.pop()
                }
            }(e), t
        };

    function eu(e) {
        let t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e]
        })
    }

    function ec(e, t) {
        this._pairs = [], e && el(e, this, t)
    }
    let ef = ec.prototype;

    function ed(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function ep(e, t, r) {
        let n;
        if (!t) return e;
        let o = r && r.encode || ed;
        Y.isFunction(r) && (r = {
            serialize: r
        });
        let i = r && r.serialize;
        if (n = i ? i(t, r) : Y.isURLSearchParams(t) ? t.toString() : new ec(t, r).toString(o)) {
            let t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + n
        }
        return e
    }
    ef.append = function(e, t) {
        this._pairs.push([e, t])
    }, ef.toString = function(e) {
        let t = e ? function(t) {
            return e.call(this, t, eu)
        } : eu;
        return this._pairs.map(function(e) {
            return t(e[0]) + "=" + t(e[1])
        }, "").join("&")
    };
    let eh = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, r) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!r && r.synchronous,
                    runWhen: r ? r.runWhen : null
                }), this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                Y.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        },
        em = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        ey = "u" > typeof URLSearchParams ? URLSearchParams : ec,
        eg = "u" > typeof FormData ? FormData : null,
        eb = "u" > typeof Blob ? Blob : null,
        ew = "u" > typeof window && "u" > typeof document,
        eE = "object" == typeof navigator && navigator || void 0,
        eR = ew && (!eE || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(eE.product)),
        eO = "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        eS = ew && window.location.href || "http://localhost";
    e.s(["hasBrowserEnv", () => ew, "hasStandardBrowserEnv", () => eR, "hasStandardBrowserWebWorkerEnv", () => eO, "navigator", () => eE, "origin", () => eS], 557536);
    let ev = { ...e.i(557536),
            isBrowser: !0,
            classes: {
                URLSearchParams: ey,
                FormData: eg,
                Blob: eb
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        eT = function(e) {
            if (Y.isFormData(e) && Y.isFunction(e.entries)) {
                let t = {};
                return Y.forEachEntry(e, (e, r) => {
                    ! function e(t, r, n, o) {
                        let i = t[o++];
                        if ("__proto__" === i) return !0;
                        let s = Number.isFinite(+i),
                            a = o >= t.length;
                        return (i = !i && Y.isArray(n) ? n.length : i, a) ? Y.hasOwnProp(n, i) ? n[i] = [n[i], r] : n[i] = r : (n[i] && Y.isObject(n[i]) || (n[i] = []), e(t, r, n[i], o) && Y.isArray(n[i]) && (n[i] = function(e) {
                            let t, r, n = {},
                                o = Object.keys(e),
                                i = o.length;
                            for (t = 0; t < i; t++) n[r = o[t]] = e[r];
                            return n
                        }(n[i]))), !s
                    }(Y.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                }), t
            }
            return null
        },
        eA = {
            transitional: em,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let r, n = t.getContentType() || "",
                    o = n.indexOf("application/json") > -1,
                    i = Y.isObject(e);
                if (i && Y.isHTMLForm(e) && (e = new FormData(e)), Y.isFormData(e)) return o ? JSON.stringify(eT(e)) : e;
                if (Y.isArrayBuffer(e) || Y.isBuffer(e) || Y.isStream(e) || Y.isFile(e) || Y.isBlob(e) || Y.isReadableStream(e)) return e;
                if (Y.isArrayBufferView(e)) return e.buffer;
                if (Y.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                if (i) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                        var s, a;
                        return (s = e, a = this.formSerializer, el(s, new ev.classes.URLSearchParams, {
                            visitor: function(e, t, r, n) {
                                return ev.isNode && Y.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                            },
                            ...a
                        })).toString()
                    }
                    if ((r = Y.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return el(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                if (i || o) {
                    t.setContentType("application/json", !1);
                    var l = e;
                    if (Y.isString(l)) try {
                        return (0, JSON.parse)(l), Y.trim(l)
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (0, JSON.stringify)(l)
                }
                return e
            }],
            transformResponse: [function(e) {
                let t = this.transitional || eA.transitional,
                    r = t && t.forcedJSONParsing,
                    n = "json" === this.responseType;
                if (Y.isResponse(e) || Y.isReadableStream(e)) return e;
                if (e && Y.isString(e) && (r && !this.responseType || n)) {
                    let r = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (!r && n) {
                            if ("SyntaxError" === e.name) throw et.from(e, et.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: ev.classes.FormData,
                Blob: ev.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
    Y.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
        eA.headers[e] = {}
    });
    let eC = Y.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        ex = Symbol("internals");

    function ej(e) {
        return e && String(e).trim().toLowerCase()
    }

    function eU(e) {
        return !1 === e || null == e ? e : Y.isArray(e) ? e.map(eU) : String(e)
    }

    function eN(e, t, r, n, o) {
        if (Y.isFunction(n)) return n.call(this, t, r);
        if (o && (t = r), Y.isString(t)) {
            if (Y.isString(n)) return -1 !== t.indexOf(n);
            if (Y.isRegExp(n)) return n.test(t)
        }
    }
    class eP {
        constructor(e) {
            e && this.set(e)
        }
        set(e, t, r) {
            let n = this;

            function o(e, t, r) {
                let o = ej(t);
                if (!o) throw Error("header name must be a non-empty string");
                let i = Y.findKey(n, o);
                i && void 0 !== n[i] && !0 !== r && (void 0 !== r || !1 === n[i]) || (n[i || t] = eU(e))
            }
            let i = (e, t) => Y.forEach(e, (e, r) => o(e, r, t));
            if (Y.isPlainObject(e) || e instanceof this.constructor) i(e, t);
            else {
                let n;
                if (Y.isString(e) && (e = e.trim()) && (n = e, !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim()))) {
                    var s;
                    let r, n, o, a;
                    i((a = {}, (s = e) && s.split("\n").forEach(function(e) {
                        o = e.indexOf(":"), r = e.substring(0, o).trim().toLowerCase(), n = e.substring(o + 1).trim(), !r || a[r] && eC[r] || ("set-cookie" === r ? a[r] ? a[r].push(n) : a[r] = [n] : a[r] = a[r] ? a[r] + ", " + n : n)
                    }), a), t)
                } else if (Y.isObject(e) && Y.isIterable(e)) {
                    let r = {},
                        n, o;
                    for (let t of e) {
                        if (!Y.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                        r[o = t[0]] = (n = r[o]) ? Y.isArray(n) ? [...n, t[1]] : [n, t[1]] : t[1]
                    }
                    i(r, t)
                } else null != e && o(t, e, r)
            }
            return this
        }
        get(e, t) {
            if (e = ej(e)) {
                let r = Y.findKey(this, e);
                if (r) {
                    let e = this[r];
                    if (!t) return e;
                    if (!0 === t) {
                        let t, r = Object.create(null),
                            n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        for (; t = n.exec(e);) r[t[1]] = t[2];
                        return r
                    }
                    if (Y.isFunction(t)) return t.call(this, e, r);
                    if (Y.isRegExp(t)) return t.exec(e);
                    throw TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = ej(e)) {
                let r = Y.findKey(this, e);
                return !!(r && void 0 !== this[r] && (!t || eN(this, this[r], r, t)))
            }
            return !1
        }
        delete(e, t) {
            let r = this,
                n = !1;

            function o(e) {
                if (e = ej(e)) {
                    let o = Y.findKey(r, e);
                    o && (!t || eN(r, r[o], o, t)) && (delete r[o], n = !0)
                }
            }
            return Y.isArray(e) ? e.forEach(o) : o(e), n
        }
        clear(e) {
            let t = Object.keys(this),
                r = t.length,
                n = !1;
            for (; r--;) {
                let o = t[r];
                (!e || eN(this, this[o], o, e, !0)) && (delete this[o], n = !0)
            }
            return n
        }
        normalize(e) {
            let t = this,
                r = {};
            return Y.forEach(this, (n, o) => {
                let i = Y.findKey(r, o);
                if (i) {
                    t[i] = eU(n), delete t[o];
                    return
                }
                let s = e ? o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(o).trim();
                s !== o && delete t[o], t[s] = eU(n), r[s] = !0
            }), this
        }
        concat() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return this.constructor.concat(this, ...t)
        }
        toJSON(e) {
            let t = Object.create(null);
            return Y.forEach(this, (r, n) => {
                null != r && !1 !== r && (t[n] = e && Y.isArray(r) ? r.join(", ") : r)
            }), t
        }[Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(e => {
                let [t, r] = e;
                return t + ": " + r
            }).join("\n")
        }
        getSetCookie() {
            return this.get("set-cookie") || []
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            let o = new this(e);
            return r.forEach(e => o.set(e)), o
        }
        static accessor(e) {
            let t = (this[ex] = this[ex] = {
                    accessors: {}
                }).accessors,
                r = this.prototype;

            function n(e) {
                let n = ej(e);
                if (!t[n]) {
                    let o;
                    o = Y.toCamelCase(" " + e), ["get", "set", "has"].forEach(t => {
                        Object.defineProperty(r, t + o, {
                            value: function(r, n, o) {
                                return this[t].call(this, e, r, n, o)
                            },
                            configurable: !0
                        })
                    }), t[n] = !0
                }
            }
            return Y.isArray(e) ? e.forEach(n) : n(e), this
        }
    }

    function eL(e, t) {
        let r = this || eA,
            n = t || r,
            o = eP.from(n.headers),
            i = n.data;
        return Y.forEach(e, function(e) {
            i = e.call(r, i, o.normalize(), t ? t.status : void 0)
        }), o.normalize(), i
    }

    function eB(e) {
        return !!(e && e.__CANCEL__)
    }

    function e_(e, t, r) {
        et.call(this, null == e ? "canceled" : e, et.ERR_CANCELED, t, r), this.name = "CanceledError"
    }

    function eF(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status) ? e(r) : t(new et("Request failed with status code " + r.status, [et.ERR_BAD_REQUEST, et.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
    }
    eP.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), Y.reduceDescriptors(eP.prototype, (e, t) => {
        let {
            value: r
        } = e, n = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => r,
            set(e) {
                this[n] = e
            }
        }
    }), Y.freezeMethods(eP), Y.inherits(e_, et, {
        __CANCEL__: !0
    });
    let ek = function(e, t) {
            let r, n = Array(e = e || 10),
                o = Array(e),
                i = 0,
                s = 0;
            return t = void 0 !== t ? t : 1e3,
                function(a) {
                    let l = Date.now(),
                        u = o[s];
                    r || (r = l), n[i] = a, o[i] = l;
                    let c = s,
                        f = 0;
                    for (; c !== i;) f += n[c++], c %= e;
                    if ((i = (i + 1) % e) === s && (s = (s + 1) % e), l - r < t) return;
                    let d = u && l - u;
                    return d ? Math.round(1e3 * f / d) : void 0
                }
        },
        eD = function(e, t) {
            let r, n, o = 0,
                i = 1e3 / t,
                s = function(t) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    o = i, r = null, n && (clearTimeout(n), n = null), e(...t)
                };
            return [function() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                let l = Date.now(),
                    u = l - o;
                u >= i ? s(t, l) : (r = t, n || (n = setTimeout(() => {
                    n = null, s(r)
                }, i - u)))
            }, () => r && s(r)]
        },
        eq = function(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                n = 0,
                o = ek(50, 250);
            return eD(r => {
                let i = r.loaded,
                    s = r.lengthComputable ? r.total : void 0,
                    a = i - n,
                    l = o(a);
                n = i, e({
                    loaded: i,
                    total: s,
                    progress: s ? i / s : void 0,
                    bytes: a,
                    rate: l || void 0,
                    estimated: l && s && i <= s ? (s - i) / l : void 0,
                    event: r,
                    lengthComputable: null != s,
                    [t ? "download" : "upload"]: !0
                })
            }, r)
        },
        eI = (e, t) => {
            let r = null != e;
            return [n => t[0]({
                lengthComputable: r,
                total: e,
                loaded: n
            }), t[1]]
        },
        ez = e => function() {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            return Y.asap(() => e(...r))
        },
        eM = ev.hasStandardBrowserEnv ? (n = new URL(ev.origin), o = ev.navigator && /(msie|trident)/i.test(ev.navigator.userAgent), e => (e = new URL(e, ev.origin), n.protocol === e.protocol && n.host === e.host && (o || n.port === e.port))) : () => !0,
        eJ = ev.hasStandardBrowserEnv ? {
            write(e, t, r, n, o, i) {
                let s = [e + "=" + encodeURIComponent(t)];
                Y.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), Y.isString(n) && s.push("path=" + n), Y.isString(o) && s.push("domain=" + o), !0 === i && s.push("secure"), document.cookie = s.join("; ")
            },
            read(e) {
                let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };

    function eH(e, t, r) {
        let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return e && (n || !1 == r) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t
    }
    let eW = e => e instanceof eP ? { ...e
    } : e;

    function e$(e, t) {
        t = t || {};
        let r = {};

        function n(e, t, r, n) {
            return Y.isPlainObject(e) && Y.isPlainObject(t) ? Y.merge.call({
                caseless: n
            }, e, t) : Y.isPlainObject(t) ? Y.merge({}, t) : Y.isArray(t) ? t.slice() : t
        }

        function o(e, t, r, o) {
            return Y.isUndefined(t) ? Y.isUndefined(e) ? void 0 : n(void 0, e, r, o) : n(e, t, r, o)
        }

        function i(e, t) {
            if (!Y.isUndefined(t)) return n(void 0, t)
        }

        function s(e, t) {
            return Y.isUndefined(t) ? Y.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t)
        }

        function a(r, o, i) {
            return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0
        }
        let l = {
            url: i,
            method: i,
            data: i,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            withXSRFToken: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: a,
            headers: (e, t, r) => o(eW(e), eW(t), r, !0)
        };
        return Y.forEach(Object.keys({ ...e,
            ...t
        }), function(n) {
            let i = l[n] || o,
                s = i(e[n], t[n], n);
            Y.isUndefined(s) && i !== a || (r[n] = s)
        }), r
    }
    let eK = e => {
            let t, r = e$({}, e),
                {
                    data: n,
                    withXSRFToken: o,
                    xsrfHeaderName: i,
                    xsrfCookieName: s,
                    headers: a,
                    auth: l
                } = r;
            if (r.headers = a = eP.from(a), r.url = ep(eH(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), l && a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))), Y.isFormData(n)) {
                if (ev.hasStandardBrowserEnv || ev.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
                else if (!1 !== (t = a.getContentType())) {
                    let [e, ...r] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
                    a.setContentType([e || "multipart/form-data", ...r].join("; "))
                }
            }
            if (ev.hasStandardBrowserEnv && (o && Y.isFunction(o) && (o = o(r)), o || !1 !== o && eM(r.url))) {
                let e = i && s && eJ.read(s);
                e && a.set(i, e)
            }
            return r
        },
        eV = "u" > typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, r) {
                var n;
                let o, i, s, a, l, u, c = eK(e),
                    f = c.data,
                    d = eP.from(c.headers).normalize(),
                    {
                        responseType: p,
                        onUploadProgress: h,
                        onDownloadProgress: m
                    } = c;

                function y() {
                    a && a(), l && l(), c.cancelToken && c.cancelToken.unsubscribe(o), c.signal && c.signal.removeEventListener("abort", o)
                }
                let g = new XMLHttpRequest;

                function b() {
                    if (!g) return;
                    let n = eP.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
                    eF(function(e) {
                        t(e), y()
                    }, function(e) {
                        r(e), y()
                    }, {
                        data: p && "text" !== p && "json" !== p ? g.response : g.responseText,
                        status: g.status,
                        statusText: g.statusText,
                        headers: n,
                        config: e,
                        request: g
                    }), g = null
                }
                g.open(c.method.toUpperCase(), c.url, !0), g.timeout = c.timeout, "onloadend" in g ? g.onloadend = b : g.onreadystatechange = function() {
                    !g || 4 !== g.readyState || (0 !== g.status || g.responseURL && 0 === g.responseURL.indexOf("file:")) && setTimeout(b)
                }, g.onabort = function() {
                    g && (r(new et("Request aborted", et.ECONNABORTED, e, g)), g = null)
                }, g.onerror = function() {
                    r(new et("Network Error", et.ERR_NETWORK, e, g)), g = null
                }, g.ontimeout = function() {
                    let t = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded",
                        n = c.transitional || em;
                    c.timeoutErrorMessage && (t = c.timeoutErrorMessage), r(new et(t, n.clarifyTimeoutError ? et.ETIMEDOUT : et.ECONNABORTED, e, g)), g = null
                }, void 0 === f && d.setContentType(null), "setRequestHeader" in g && Y.forEach(d.toJSON(), function(e, t) {
                    g.setRequestHeader(t, e)
                }), Y.isUndefined(c.withCredentials) || (g.withCredentials = !!c.withCredentials), p && "json" !== p && (g.responseType = c.responseType), m && ([s, l] = eq(m, !0), g.addEventListener("progress", s)), h && g.upload && ([i, a] = eq(h), g.upload.addEventListener("progress", i), g.upload.addEventListener("loadend", a)), (c.cancelToken || c.signal) && (o = t => {
                    g && (r(!t || t.type ? new e_(null, e, g) : t), g.abort(), g = null)
                }, c.cancelToken && c.cancelToken.subscribe(o), c.signal && (c.signal.aborted ? o() : c.signal.addEventListener("abort", o)));
                let w = (n = c.url, (u = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n)) && u[1] || "");
                w && -1 === ev.protocols.indexOf(w) ? r(new et("Unsupported protocol " + w + ":", et.ERR_BAD_REQUEST, e)) : g.send(f || null)
            })
        },
        eX = function*(e, t) {
            let r, n = e.byteLength;
            if (!t || n < t) return void(yield e);
            let o = 0;
            for (; o < n;) r = o + t, yield e.slice(o, r), o = r
        },
        eG = async function*(e, t) {
            for await (let r of eQ(e)) yield* eX(r, t)
        },
        eQ = async function*(e) {
            if (e[Symbol.asyncIterator]) return void(yield* e);
            let t = e.getReader();
            try {
                for (;;) {
                    let {
                        done: e,
                        value: r
                    } = await t.read();
                    if (e) break;
                    yield r
                }
            } finally {
                await t.cancel()
            }
        },
        eZ = (e, t, r, n) => {
            let o, i = eG(e, t),
                s = 0,
                a = e => {
                    !o && (o = !0, n && n(e))
                };
            return new ReadableStream({
                async pull(e) {
                    try {
                        let {
                            done: t,
                            value: n
                        } = await i.next();
                        if (t) {
                            a(), e.close();
                            return
                        }
                        let o = n.byteLength;
                        if (r) {
                            let e = s += o;
                            r(e)
                        }
                        e.enqueue(new Uint8Array(n))
                    } catch (e) {
                        throw a(e), e
                    }
                },
                cancel: e => (a(e), i.return())
            }, {
                highWaterMark: 2
            })
        },
        eY = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
        e0 = eY && "function" == typeof ReadableStream,
        e1 = eY && ("function" == typeof TextEncoder ? (i = new TextEncoder, e => i.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
        e2 = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            try {
                return !!e(...r)
            } catch (e) {
                return !1
            }
        },
        e4 = e0 && e2(() => {
            let e = !1,
                t = new Request(ev.origin, {
                    body: new ReadableStream,
                    method: "POST",
                    get duplex() {
                        return e = !0, "half"
                    }
                }).headers.has("Content-Type");
            return e && !t
        }),
        e3 = e0 && e2(() => Y.isReadableStream(new Response("").body)),
        e5 = {
            stream: e3 && (e => e.body)
        };
    eY && (c = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
        e5[e] || (e5[e] = Y.isFunction(c[e]) ? t => t[e]() : (t, r) => {
            throw new et(`Response type '${e}' is not supported`, et.ERR_NOT_SUPPORT, r)
        })
    }));
    let e6 = async e => {
            if (null == e) return 0;
            if (Y.isBlob(e)) return e.size;
            if (Y.isSpecCompliantForm(e)) {
                let t = new Request(ev.origin, {
                    method: "POST",
                    body: e
                });
                return (await t.arrayBuffer()).byteLength
            }
            return Y.isArrayBufferView(e) || Y.isArrayBuffer(e) ? e.byteLength : (Y.isURLSearchParams(e) && (e += ""), Y.isString(e)) ? (await e1(e)).byteLength : void 0
        },
        e7 = async (e, t) => {
            let r = Y.toFiniteNumber(e.getContentLength());
            return null == r ? e6(t) : r
        },
        e8 = {
            http: null,
            xhr: eV,
            fetch: eY && (async e => {
                let t, r, {
                    url: n,
                    method: o,
                    data: i,
                    signal: s,
                    cancelToken: a,
                    timeout: l,
                    onDownloadProgress: u,
                    onUploadProgress: c,
                    responseType: f,
                    headers: d,
                    withCredentials: p = "same-origin",
                    fetchOptions: h
                } = eK(e);
                f = f ? (f + "").toLowerCase() : "text";
                let m = ((e, t) => {
                        let {
                            length: r
                        } = e = e ? e.filter(Boolean) : [];
                        if (t || r) {
                            let r, n = new AbortController,
                                o = function(e) {
                                    if (!r) {
                                        r = !0, s();
                                        let t = e instanceof Error ? e : this.reason;
                                        n.abort(t instanceof et ? t : new e_(t instanceof Error ? t.message : t))
                                    }
                                },
                                i = t && setTimeout(() => {
                                    i = null, o(new et(`timeout ${t} of ms exceeded`, et.ETIMEDOUT))
                                }, t),
                                s = () => {
                                    e && (i && clearTimeout(i), i = null, e.forEach(e => {
                                        e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener("abort", o)
                                    }), e = null)
                                };
                            e.forEach(e => e.addEventListener("abort", o));
                            let {
                                signal: a
                            } = n;
                            return a.unsubscribe = () => Y.asap(s), a
                        }
                    })([s, a && a.toAbortSignal()], l),
                    y = m && m.unsubscribe && (() => {
                        m.unsubscribe()
                    });
                try {
                    if (c && e4 && "get" !== o && "head" !== o && 0 !== (r = await e7(d, i))) {
                        let e, t = new Request(n, {
                            method: "POST",
                            body: i,
                            duplex: "half"
                        });
                        if (Y.isFormData(i) && (e = t.headers.get("content-type")) && d.setContentType(e), t.body) {
                            let [e, n] = eI(r, eq(ez(c)));
                            i = eZ(t.body, 65536, e, n)
                        }
                    }
                    Y.isString(p) || (p = p ? "include" : "omit");
                    let s = "credentials" in Request.prototype;
                    t = new Request(n, { ...h,
                        signal: m,
                        method: o.toUpperCase(),
                        headers: d.normalize().toJSON(),
                        body: i,
                        duplex: "half",
                        credentials: s ? p : void 0
                    });
                    let a = await fetch(t, h),
                        l = e3 && ("stream" === f || "response" === f);
                    if (e3 && (u || l && y)) {
                        let e = {};
                        ["status", "statusText", "headers"].forEach(t => {
                            e[t] = a[t]
                        });
                        let t = Y.toFiniteNumber(a.headers.get("content-length")),
                            [r, n] = u && eI(t, eq(ez(u), !0)) || [];
                        a = new Response(eZ(a.body, 65536, r, () => {
                            n && n(), y && y()
                        }), e)
                    }
                    f = f || "text";
                    let g = await e5[Y.findKey(e5, f) || "text"](a, e);
                    return !l && y && y(), await new Promise((r, n) => {
                        eF(r, n, {
                            data: g,
                            headers: eP.from(a.headers),
                            status: a.status,
                            statusText: a.statusText,
                            config: e,
                            request: t
                        })
                    })
                } catch (r) {
                    if (y && y(), r && "TypeError" === r.name && /Load failed|fetch/i.test(r.message)) throw Object.assign(new et("Network Error", et.ERR_NETWORK, e, t), {
                        cause: r.cause || r
                    });
                    throw et.from(r, r && r.code, e, t)
                }
            })
        };
    Y.forEach(e8, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    });
    let e9 = e => `- ${e}`,
        te = e => Y.isFunction(e) || null === e || !1 === e,
        tt = e => {
            let t, r, {
                    length: n
                } = e = Y.isArray(e) ? e : [e],
                o = {};
            for (let i = 0; i < n; i++) {
                let n;
                if (r = t = e[i], !te(t) && void 0 === (r = e8[(n = String(t)).toLowerCase()])) throw new et(`Unknown adapter '${n}'`);
                if (r) break;
                o[n || "#" + i] = r
            }
            if (!r) {
                let e = Object.entries(o).map(e => {
                    let [t, r] = e;
                    return `adapter ${t} ` + (!1 === r ? "is not supported by the environment" : "is not available in the build")
                });
                throw new et("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(e9).join("\n") : " " + e9(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
            }
            return r
        };

    function tr(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new e_(null, e)
    }

    function tn(e) {
        return tr(e), e.headers = eP.from(e.headers), e.data = eL.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), tt(e.adapter || eA.adapter)(e).then(function(t) {
            return tr(e), t.data = eL.call(e, e.transformResponse, t), t.headers = eP.from(t.headers), t
        }, function(t) {
            return !eB(t) && (tr(e), t && t.response && (t.response.data = eL.call(e, e.transformResponse, t.response), t.response.headers = eP.from(t.response.headers))), Promise.reject(t)
        })
    }
    let to = "1.11.0",
        ti = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        ti[e] = function(r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    let ts = {};
    ti.transitional = function(e, t, r) {
        function n(e, t) {
            return "[Axios v" + to + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
        }
        return (r, o, i) => {
            if (!1 === e) throw new et(n(o, " has been removed" + (t ? " in " + t : "")), et.ERR_DEPRECATED);
            return t && !ts[o] && (ts[o] = !0, console.warn(n(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, o, i)
        }
    }, ti.spelling = function(e) {
        return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0)
    };
    let ta = function(e, t, r) {
        if ("object" != typeof e) throw new et("options must be an object", et.ERR_BAD_OPTION_VALUE);
        let n = Object.keys(e),
            o = n.length;
        for (; o-- > 0;) {
            let i = n[o],
                s = t[i];
            if (s) {
                let t = e[i],
                    r = void 0 === t || s(t, i, e);
                if (!0 !== r) throw new et("option " + i + " must be " + r, et.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (!0 !== r) throw new et("Unknown option " + i, et.ERR_BAD_OPTION)
        }
    };
    class tl {
        constructor(e) {
            this.defaults = e || {}, this.interceptors = {
                request: new eh,
                response: new eh
            }
        }
        async request(e, t) {
            try {
                return await this._request(e, t)
            } catch (e) {
                if (e instanceof Error) {
                    let t = {};
                    Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                    let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                    try {
                        e.stack ? r && !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + r) : e.stack = r
                    } catch (e) {}
                }
                throw e
            }
        }
        _request(e, t) {
            let r, n;
            "string" == typeof e ? (t = t || {}).url = e : t = e || {};
            let {
                transitional: o,
                paramsSerializer: i,
                headers: s
            } = t = e$(this.defaults, t);
            void 0 !== o && ta(o, {
                silentJSONParsing: ti.transitional(ti.boolean),
                forcedJSONParsing: ti.transitional(ti.boolean),
                clarifyTimeoutError: ti.transitional(ti.boolean)
            }, !1), null != i && (Y.isFunction(i) ? t.paramsSerializer = {
                serialize: i
            } : ta(i, {
                encode: ti.function,
                serialize: ti.function
            }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), ta(t, {
                baseUrl: ti.spelling("baseURL"),
                withXsrfToken: ti.spelling("withXSRFToken")
            }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let a = s && Y.merge(s.common, s[t.method]);
            s && Y.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                delete s[e]
            }), t.headers = eP.concat(a, s);
            let l = [],
                u = !0;
            this.interceptors.request.forEach(function(e) {
                ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (u = u && e.synchronous, l.unshift(e.fulfilled, e.rejected))
            });
            let c = [];
            this.interceptors.response.forEach(function(e) {
                c.push(e.fulfilled, e.rejected)
            });
            let f = 0;
            if (!u) {
                let e = [tn.bind(this), void 0];
                for (e.unshift(...l), e.push(...c), n = e.length, r = Promise.resolve(t); f < n;) r = r.then(e[f++], e[f++]);
                return r
            }
            n = l.length;
            let d = t;
            for (f = 0; f < n;) {
                let e = l[f++],
                    t = l[f++];
                try {
                    d = e(d)
                } catch (e) {
                    t.call(this, e);
                    break
                }
            }
            try {
                r = tn.call(this, d)
            } catch (e) {
                return Promise.reject(e)
            }
            for (f = 0, n = c.length; f < n;) r = r.then(c[f++], c[f++]);
            return r
        }
        getUri(e) {
            return ep(eH((e = e$(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
        }
    }
    Y.forEach(["delete", "get", "head", "options"], function(e) {
        tl.prototype[e] = function(t, r) {
            return this.request(e$(r || {}, {
                method: e,
                url: t,
                data: (r || {}).data
            }))
        }
    }), Y.forEach(["post", "put", "patch"], function(e) {
        function t(t) {
            return function(r, n, o) {
                return this.request(e$(o || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: r,
                    data: n
                }))
            }
        }
        tl.prototype[e] = t(), tl.prototype[e + "Form"] = t(!0)
    });
    class tu {
        constructor(e) {
            let t;
            if ("function" != typeof e) throw TypeError("executor must be a function.");
            this.promise = new Promise(function(e) {
                t = e
            });
            const r = this;
            this.promise.then(e => {
                if (!r._listeners) return;
                let t = r._listeners.length;
                for (; t-- > 0;) r._listeners[t](e);
                r._listeners = null
            }), this.promise.then = e => {
                let t, n = new Promise(e => {
                    r.subscribe(e), t = e
                }).then(e);
                return n.cancel = function() {
                    r.unsubscribe(t)
                }, n
            }, e(function(e, n, o) {
                r.reason || (r.reason = new e_(e, n, o), t(r.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            let t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        }
        toAbortSignal() {
            let e = new AbortController,
                t = t => {
                    e.abort(t)
                };
            return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
        }
        static source() {
            let e;
            return {
                token: new tu(function(t) {
                    e = t
                }),
                cancel: e
            }
        }
    }
    let tc = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(tc).forEach(e => {
        let [t, r] = e;
        tc[r] = t
    });
    let tf = function e(t) {
        let r = new tl(t),
            n = m(tl.prototype.request, r);
        return Y.extend(n, tl.prototype, r, {
            allOwnKeys: !0
        }), Y.extend(n, r, null, {
            allOwnKeys: !0
        }), n.create = function(r) {
            return e(e$(t, r))
        }, n
    }(eA);
    tf.Axios = tl, tf.CanceledError = e_, tf.CancelToken = tu, tf.isCancel = eB, tf.VERSION = to, tf.toFormData = el, tf.AxiosError = et, tf.Cancel = tf.CanceledError, tf.all = function(e) {
        return Promise.all(e)
    }, tf.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }, tf.isAxiosError = function(e) {
        return Y.isObject(e) && !0 === e.isAxiosError
    }, tf.mergeConfig = e$, tf.AxiosHeaders = eP, tf.formToJSON = e => eT(Y.isHTMLForm(e) ? new FormData(e) : e), tf.getAdapter = tt, tf.HttpStatusCode = tc, tf.default = tf;
    let td = "usr_token";
    class tp {
        static apiEndpoint = null;
        getBaseApiEndpoint() {
            return tp.apiEndpoint ? tp.apiEndpoint : "https://api.fanso.club"
        }
        async request(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET",
                r = arguments.length > 2 ? arguments[2] : void 0,
                n = arguments.length > 3 ? arguments[3] : void 0,
                o = {
                    method: t,
                    url: (0, d.isUrl)(e) ? e : `${this.getBaseApiEndpoint()}${e}`,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: h.get(td) || "",
                        ...n
                    },
                    data: r ? JSON.stringify(r) : void 0
                };
            try {
                return (await tf(o)).data
            } catch (e) {
                if (tf.isAxiosError(e)) {
                    let {
                        response: t
                    } = e;
                    if (t ? .status === 403) throw window.location.pathname.includes("/auth") || (window.location.href = "/auth/signout"), Error("Unauthorized access");
                    if (t ? .data) throw t ? .data ? .message || "Request failed"
                }
                throw Error("Network error - unable to connect")
            }
        }
        async get(e, t) {
            return this.request(e, "GET", void 0, t)
        }
        async post(e, t, r) {
            return this.request(e, "POST", t, r)
        }
        async put(e, t, r) {
            return this.request(e, "PUT", t, r)
        }
        async del(e, t, r) {
            return this.request(e, "DELETE", t, r)
        }
        async upload(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = arguments.length > 3 ? arguments[3] : void 0,
                o = (0, d.isUrl)(e) ? e : `${this.getBaseApiEndpoint()}${e}`;
            return new Promise((e, i) => {
                let s = new XMLHttpRequest;
                s.upload.addEventListener("progress", e => {
                    e.lengthComputable && r.onProgress && r.onProgress({
                        percentage: e.loaded / e.total * 100,
                        loaded: e.loaded,
                        total: e.total
                    })
                }), s.addEventListener("load", () => {
                    if (s.status >= 200 && s.status < 300) try {
                        let t = JSON.parse(s.responseText);
                        e(t)
                    } catch {
                        i(Error("Invalid response format"))
                    } else i(JSON.parse(s.responseText))
                }), s.addEventListener("error", () => {
                    i(Error("Upload failed"))
                }), n && n.signal && "function" == typeof n.signal.addEventListener && n.signal.addEventListener("abort", () => {
                    s.abort(), i(Error("Upload cancelled"))
                });
                let a = new FormData;
                t ? .length && t.forEach(e => {
                    let {
                        file: t,
                        fieldname: r
                    } = e;
                    t && r && a.append(r, t, t.name)
                }), r.customData && Object.entries(r.customData).forEach(e => {
                    let [t, r] = e;
                    void 0 !== r && (Array.isArray(r) ? r.forEach(e => a.append(`${t}[]`, String(e))) : a.append(t, String(r)))
                }), s.open(r.method || "POST", o), s.setRequestHeader("Authorization", h.get(td) || ""), s.send(a)
            })
        }
    }
    e.s(["APIRequest", () => tp, "TOKEN", 0, td], 324322)
}]);