(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 167309, t => {
    "use strict";
    let e, s, r;
    t.i(247167);
    var n, i, o = t.i(843476),
        a = t.i(271645),
        c = t.i(217255);
    let h = Object.create(null);
    h.open = "0", h.close = "1", h.ping = "2", h.pong = "3", h.message = "4", h.upgrade = "5", h.noop = "6";
    let u = Object.create(null);
    Object.keys(h).forEach(t => {
        u[h[t]] = t
    });
    let l = {
            type: "error",
            data: "parser error"
        },
        p = "function" == typeof Blob || "u" > typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob),
        d = "function" == typeof ArrayBuffer,
        f = t => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer,
        g = (t, e, s) => {
            let {
                type: r,
                data: n
            } = t;
            if (p && n instanceof Blob)
                if (e) return s(n);
                else return y(n, s);
            if (d && (n instanceof ArrayBuffer || f(n)))
                if (e) return s(n);
                else return y(new Blob([n]), s);
            return s(h[r] + (n || ""))
        },
        y = (t, e) => {
            let s = new FileReader;
            return s.onload = function() {
                e("b" + (s.result.split(",")[1] || ""))
            }, s.readAsDataURL(t)
        };

    function m(t) {
        return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    }
    let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        _ = "u" < typeof Uint8Array ? [] : new Uint8Array(256);
    for (let t = 0; t < b.length; t++) _[b.charCodeAt(t)] = t;
    let v = "function" == typeof ArrayBuffer,
        k = (t, e) => {
            if ("string" != typeof t) return {
                type: "message",
                data: E(t, e)
            };
            let s = t.charAt(0);
            return "b" === s ? {
                type: "message",
                data: w(t.substring(1), e)
            } : u[s] ? t.length > 1 ? {
                type: u[s],
                data: t.substring(1)
            } : {
                type: u[s]
            } : l
        },
        w = (t, e) => v ? E((t => {
            let e = .75 * t.length,
                s = t.length,
                r, n = 0,
                i, o, a, c;
            "=" === t[t.length - 1] && (e--, "=" === t[t.length - 2] && e--);
            let h = new ArrayBuffer(e),
                u = new Uint8Array(h);
            for (r = 0; r < s; r += 4) i = _[t.charCodeAt(r)], o = _[t.charCodeAt(r + 1)], a = _[t.charCodeAt(r + 2)], c = _[t.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (15 & o) << 4 | a >> 2, u[n++] = (3 & a) << 6 | 63 & c;
            return h
        })(t), e) : {
            base64: !0,
            data: t
        },
        E = (t, e) => "blob" === e ? t instanceof Blob ? t : new Blob([t]) : t instanceof ArrayBuffer ? t : t.buffer;

    function A(t) {
        return t.reduce((t, e) => t + e.length, 0)
    }

    function T(t, e) {
        if (t[0].length === e) return t.shift();
        let s = new Uint8Array(e),
            r = 0;
        for (let n = 0; n < e; n++) s[n] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
        return t.length && r < t[0].length && (t[0] = t[0].slice(r)), s
    }

    function O(t) {
        if (t) {
            var e = t;
            for (var s in O.prototype) e[s] = O.prototype[s];
            return e
        }
    }
    O.prototype.on = O.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, O.prototype.once = function(t, e) {
        function s() {
            this.off(t, s), e.apply(this, arguments)
        }
        return s.fn = e, this.on(t, s), this
    }, O.prototype.off = O.prototype.removeListener = O.prototype.removeAllListeners = O.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var s, r = this._callbacks["$" + t];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var n = 0; n < r.length; n++)
            if ((s = r[n]) === e || s.fn === e) {
                r.splice(n, 1);
                break
            }
        return 0 === r.length && delete this._callbacks["$" + t], this
    }, O.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        for (var e = Array(arguments.length - 1), s = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        if (s) {
            s = s.slice(0);
            for (var r = 0, n = s.length; r < n; ++r) s[r].apply(this, e)
        }
        return this
    }, O.prototype.emitReserved = O.prototype.emit, O.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, O.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
    };
    let R = "function" == typeof Promise && "function" == typeof Promise.resolve ? t => Promise.resolve().then(t) : (t, e) => e(t, 0),
        S = "u" > typeof self ? self : "u" > typeof window ? window : Function("return this")();

    function C(t) {
        for (var e = arguments.length, s = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) s[r - 1] = arguments[r];
        return s.reduce((e, s) => (t.hasOwnProperty(s) && (e[s] = t[s]), e), {})
    }
    let x = S.setTimeout,
        B = S.clearTimeout;

    function N(t, e) {
        e.useNativeTimers ? (t.setTimeoutFn = x.bind(S), t.clearTimeoutFn = B.bind(S)) : (t.setTimeoutFn = S.setTimeout.bind(S), t.clearTimeoutFn = S.clearTimeout.bind(S))
    }

    function L() {
        return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
    }
    class q extends Error {
        constructor(t, e, s) {
            super(t), this.description = e, this.context = s, this.type = "TransportError"
        }
    }
    class P extends O {
        constructor(t) {
            super(), this.writable = !1, N(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64
        }
        onError(t, e, s) {
            return super.emitReserved("error", new q(t, e, s)), this
        }
        open() {
            return this.readyState = "opening", this.doOpen(), this
        }
        close() {
            return ("opening" === this.readyState || "open" === this.readyState) && (this.doClose(), this.onClose()), this
        }
        send(t) {
            "open" === this.readyState && this.write(t)
        }
        onOpen() {
            this.readyState = "open", this.writable = !0, super.emitReserved("open")
        }
        onData(t) {
            let e = k(t, this.socket.binaryType);
            this.onPacket(e)
        }
        onPacket(t) {
            super.emitReserved("packet", t)
        }
        onClose(t) {
            this.readyState = "closed", super.emitReserved("close", t)
        }
        pause(t) {}
        createUri(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(e)
        }
        _hostname() {
            let t = this.opts.hostname;
            return -1 === t.indexOf(":") ? t : "[" + t + "]"
        }
        _port() {
            return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : ""
        }
        _query(t) {
            let e = function(t) {
                let e = "";
                for (let s in t) t.hasOwnProperty(s) && (e.length && (e += "&"), e += encodeURIComponent(s) + "=" + encodeURIComponent(t[s]));
                return e
            }(t);
            return e.length ? "?" + e : ""
        }
    }
    class j extends P {
        constructor() {
            super(...arguments), this._polling = !1
        }
        get name() {
            return "polling"
        }
        doOpen() {
            this._poll()
        }
        pause(t) {
            this.readyState = "pausing";
            let e = () => {
                this.readyState = "paused", t()
            };
            if (this._polling || !this.writable) {
                let t = 0;
                this._polling && (t++, this.once("pollComplete", function() {
                    --t || e()
                })), this.writable || (t++, this.once("drain", function() {
                    --t || e()
                }))
            } else e()
        }
        _poll() {
            this._polling = !0, this.doPoll(), this.emitReserved("poll")
        }
        onData(t) {
            let e = t => {
                if ("opening" === this.readyState && "open" === t.type && this.onOpen(), "close" === t.type) return this.onClose({
                    description: "transport closed by the server"
                }), !1;
                this.onPacket(t)
            };
            ((t, e) => {
                let s = t.split("\x1e"),
                    r = [];
                for (let t = 0; t < s.length; t++) {
                    let n = k(s[t], e);
                    if (r.push(n), "error" === n.type) break
                }
                return r
            })(t, this.socket.binaryType).forEach(e), "closed" !== this.readyState && (this._polling = !1, this.emitReserved("pollComplete"), "open" === this.readyState && this._poll())
        }
        doClose() {
            let t = () => {
                this.write([{
                    type: "close"
                }])
            };
            "open" === this.readyState ? t() : this.once("open", t)
        }
        write(t) {
            var e;
            let s, r, n;
            this.writable = !1, e = t => {
                this.doWrite(t, () => {
                    this.writable = !0, this.emitReserved("drain")
                })
            }, r = Array(s = t.length), n = 0, t.forEach((t, i) => {
                g(t, !1, t => {
                    r[i] = t, ++n === s && e(r.join("\x1e"))
                })
            })
        }
        uri() {
            let t = this.opts.secure ? "https" : "http",
                e = this.query || {};
            return !1 !== this.opts.timestampRequests && (e[this.opts.timestampParam] = L()), this.supportsBinary || e.sid || (e.b64 = 1), this.createUri(t, e)
        }
    }
    let D = !1;
    try {
        D = "u" > typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (t) {}
    let U = D;

    function I() {}
    class F extends j {
        constructor(t) {
            if (super(t), "u" > typeof location) {
                const e = "https:" === location.protocol;
                let s = location.port;
                s || (s = e ? "443" : "80"), this.xd = "u" > typeof location && t.hostname !== location.hostname || s !== t.port
            }
        }
        doWrite(t, e) {
            let s = this.request({
                method: "POST",
                data: t
            });
            s.on("success", e), s.on("error", (t, e) => {
                this.onError("xhr post error", t, e)
            })
        }
        doPoll() {
            let t = this.request();
            t.on("data", this.onData.bind(this)), t.on("error", (t, e) => {
                this.onError("xhr poll error", t, e)
            }), this.pollXhr = t
        }
    }
    class M extends O {
        constructor(t, e, s) {
            super(), this.createRequest = t, N(this, s), this._opts = s, this._method = s.method || "GET", this._uri = e, this._data = void 0 !== s.data ? s.data : null, this._create()
        }
        _create() {
            var t;
            let e = C(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            e.xdomain = !!this._opts.xd;
            let s = this._xhr = this.createRequest(e);
            try {
                s.open(this._method, this._uri, !0);
                try {
                    if (this._opts.extraHeaders)
                        for (let t in s.setDisableHeaderCheck && s.setDisableHeaderCheck(!0), this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(t) && s.setRequestHeader(t, this._opts.extraHeaders[t])
                } catch (t) {}
                if ("POST" === this._method) try {
                    s.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch (t) {}
                try {
                    s.setRequestHeader("Accept", "*/*")
                } catch (t) {}
                null == (t = this._opts.cookieJar) || t.addCookies(s), "withCredentials" in s && (s.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (s.timeout = this._opts.requestTimeout), s.onreadystatechange = () => {
                    var t;
                    3 === s.readyState && (null == (t = this._opts.cookieJar) || t.parseCookies(s.getResponseHeader("set-cookie"))), 4 === s.readyState && (200 === s.status || 1223 === s.status ? this._onLoad() : this.setTimeoutFn(() => {
                        this._onError("number" == typeof s.status ? s.status : 0)
                    }, 0))
                }, s.send(this._data)
            } catch (t) {
                this.setTimeoutFn(() => {
                    this._onError(t)
                }, 0);
                return
            }
            "u" > typeof document && (this._index = M.requestsCount++, M.requests[this._index] = this)
        }
        _onError(t) {
            this.emitReserved("error", t, this._xhr), this._cleanup(!0)
        }
        _cleanup(t) {
            if (void 0 !== this._xhr && null !== this._xhr) {
                if (this._xhr.onreadystatechange = I, t) try {
                    this._xhr.abort()
                } catch (t) {}
                "u" > typeof document && delete M.requests[this._index], this._xhr = null
            }
        }
        _onLoad() {
            let t = this._xhr.responseText;
            null !== t && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup())
        }
        abort() {
            this._cleanup()
        }
    }

    function V() {
        for (let t in M.requests) M.requests.hasOwnProperty(t) && M.requests[t].abort()
    }
    M.requestsCount = 0, M.requests = {}, "u" > typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", V) : "function" == typeof addEventListener && addEventListener("onpagehide" in S ? "pagehide" : "unload", V, !1));
    let H = (r = K({
        xdomain: !1
    })) && null !== r.responseType;

    function K(t) {
        let e = t.xdomain;
        try {
            if ("u" > typeof XMLHttpRequest && (!e || U)) return new XMLHttpRequest
        } catch (t) {}
        if (!e) try {
            return new S[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    let W = "u" > typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
    class Y extends P {
        get name() {
            return "websocket"
        }
        doOpen() {
            let t = this.uri(),
                e = this.opts.protocols,
                s = W ? {} : C(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
            this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
            try {
                this.ws = this.createSocket(t, e, s)
            } catch (t) {
                return this.emitReserved("error", t)
            }
            this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
        }
        addEventListeners() {
            this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
            }, this.ws.onclose = t => this.onClose({
                description: "websocket connection closed",
                context: t
            }), this.ws.onmessage = t => this.onData(t.data), this.ws.onerror = t => this.onError("websocket error", t)
        }
        write(t) {
            this.writable = !1;
            for (let e = 0; e < t.length; e++) {
                let s = t[e],
                    r = e === t.length - 1;
                g(s, this.supportsBinary, t => {
                    try {
                        this.doWrite(s, t)
                    } catch (t) {}
                    r && R(() => {
                        this.writable = !0, this.emitReserved("drain")
                    }, this.setTimeoutFn)
                })
            }
        }
        doClose() {
            void 0 !== this.ws && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
        }
        uri() {
            let t = this.opts.secure ? "wss" : "ws",
                e = this.query || {};
            return this.opts.timestampRequests && (e[this.opts.timestampParam] = L()), this.supportsBinary || (e.b64 = 1), this.createUri(t, e)
        }
    }
    let $ = S.WebSocket || S.MozWebSocket,
        z = {
            websocket: class extends Y {
                createSocket(t, e, s) {
                    return W ? new $(t, e, s) : e ? new $(t, e) : new $(t)
                }
                doWrite(t, e) {
                    this.ws.send(e)
                }
            },
            webtransport: class extends P {
                get name() {
                    return "webtransport"
                }
                doOpen() {
                    try {
                        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
                    } catch (t) {
                        return this.emitReserved("error", t)
                    }
                    this._transport.closed.then(() => {
                        this.onClose()
                    }).catch(t => {
                        this.onError("webtransport error", t)
                    }), this._transport.ready.then(() => {
                        this._transport.createBidirectionalStream().then(t => {
                            var r, n;
                            let i, o, a, c, h = (r = Number.MAX_SAFE_INTEGER, n = this.socket.binaryType, s || (s = new TextDecoder), i = [], o = 0, a = -1, c = !1, new TransformStream({
                                    transform(t, e) {
                                        for (i.push(t);;) {
                                            if (0 === o) {
                                                if (1 > A(i)) break;
                                                let t = T(i, 1);
                                                c = (128 & t[0]) == 128, o = (a = 127 & t[0]) < 126 ? 3 : 126 === a ? 1 : 2
                                            } else if (1 === o) {
                                                if (2 > A(i)) break;
                                                let t = T(i, 2);
                                                a = new DataView(t.buffer, t.byteOffset, t.length).getUint16(0), o = 3
                                            } else if (2 === o) {
                                                if (8 > A(i)) break;
                                                let t = T(i, 8),
                                                    s = new DataView(t.buffer, t.byteOffset, t.length),
                                                    r = s.getUint32(0);
                                                if (r > 2097151) {
                                                    e.enqueue(l);
                                                    break
                                                }
                                                a = 0x100000000 * r + s.getUint32(4), o = 3
                                            } else {
                                                if (A(i) < a) break;
                                                let t = T(i, a);
                                                e.enqueue(k(c ? t : s.decode(t), n)), o = 0
                                            }
                                            if (0 === a || a > r) {
                                                e.enqueue(l);
                                                break
                                            }
                                        }
                                    }
                                })),
                                u = t.readable.pipeThrough(h).getReader(),
                                y = new TransformStream({
                                    transform(t, s) {
                                        var r;
                                        r = e => {
                                            let r, n = e.length;
                                            if (n < 126) new DataView((r = new Uint8Array(1)).buffer).setUint8(0, n);
                                            else if (n < 65536) {
                                                let t = new DataView((r = new Uint8Array(3)).buffer);
                                                t.setUint8(0, 126), t.setUint16(1, n)
                                            } else {
                                                let t = new DataView((r = new Uint8Array(9)).buffer);
                                                t.setUint8(0, 127), t.setBigUint64(1, BigInt(n))
                                            }
                                            t.data && "string" != typeof t.data && (r[0] |= 128), s.enqueue(r), s.enqueue(e)
                                        }, p && t.data instanceof Blob ? t.data.arrayBuffer().then(m).then(r) : d && (t.data instanceof ArrayBuffer || f(t.data)) ? r(m(t.data)) : g(t, !1, t => {
                                            e || (e = new TextEncoder), r(e.encode(t))
                                        })
                                    }
                                });
                            y.readable.pipeTo(t.writable), this._writer = y.writable.getWriter();
                            let b = () => {
                                u.read().then(t => {
                                    let {
                                        done: e,
                                        value: s
                                    } = t;
                                    e || (this.onPacket(s), b())
                                }).catch(t => {})
                            };
                            b();
                            let _ = {
                                type: "open"
                            };
                            this.query.sid && (_.data = `{"sid":"${this.query.sid}"}`), this._writer.write(_).then(() => this.onOpen())
                        })
                    })
                }
                write(t) {
                    this.writable = !1;
                    for (let e = 0; e < t.length; e++) {
                        let s = t[e],
                            r = e === t.length - 1;
                        this._writer.write(s).then(() => {
                            r && R(() => {
                                this.writable = !0, this.emitReserved("drain")
                            }, this.setTimeoutFn)
                        })
                    }
                }
                doClose() {
                    var t;
                    null == (t = this._transport) || t.close()
                }
            },
            polling: class extends F {
                constructor(t) {
                    super(t);
                    const e = t && t.forceBase64;
                    this.supportsBinary = H && !e
                }
                request() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.assign(t, {
                        xd: this.xd
                    }, this.opts), new M(K, this.uri(), t)
                }
            }
        },
        J = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        Q = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

    function X(t) {
        var e, s;
        let r, n;
        if (t.length > 8e3) throw "URI too long";
        let i = t,
            o = t.indexOf("["),
            a = t.indexOf("]"); - 1 != o && -1 != a && (t = t.substring(0, o) + t.substring(o, a).replace(/:/g, ";") + t.substring(a, t.length));
        let c = J.exec(t || ""),
            h = {},
            u = 14;
        for (; u--;) h[Q[u]] = c[u] || "";
        return -1 != o && -1 != a && (h.source = i, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0), r = (e = h.path).replace(/\/{2,9}/g, "/").split("/"), ("/" == e.slice(0, 1) || 0 === e.length) && r.splice(0, 1), "/" == e.slice(-1) && r.splice(r.length - 1, 1), h.pathNames = r, s = h.query, n = {}, s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, e, s) {
            e && (n[e] = s)
        }), h.queryKey = n, h
    }
    let G = "function" == typeof addEventListener && "function" == typeof removeEventListener,
        Z = [];
    G && addEventListener("offline", () => {
        Z.forEach(t => t())
    }, !1);
    class tt extends O {
        constructor(t, e) {
            if (super(), this.binaryType = "arraybuffer", this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && "object" == typeof t && (e = t, t = null), t) {
                const s = X(t);
                e.hostname = s.host, e.secure = "https" === s.protocol || "wss" === s.protocol, e.port = s.port, s.query && (e.query = s.query)
            } else e.host && (e.hostname = X(e.host).host);
            N(this, e), this.secure = null != e.secure ? e.secure : "u" > typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || ("u" > typeof location ? location.hostname : "localhost"), this.port = e.port || ("u" > typeof location && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, e.transports.forEach(t => {
                let e = t.prototype.name;
                this.transports.push(e), this._transportsByName[e] = t
            }), this.opts = Object.assign({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !1
            }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), "string" == typeof this.opts.query && (this.opts.query = function(t) {
                let e = {},
                    s = t.split("&");
                for (let t = 0, r = s.length; t < r; t++) {
                    let r = s[t].split("=");
                    e[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
                }
                return e
            }(this.opts.query)), G && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
                this.transport && (this.transport.removeAllListeners(), this.transport.close())
            }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), "localhost" !== this.hostname && (this._offlineEventListener = () => {
                this._onClose("transport close", {
                    description: "network connection lost"
                })
            }, Z.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
        }
        createTransport(t) {
            let e = Object.assign({}, this.opts.query);
            e.EIO = 4, e.transport = t, this.id && (e.sid = this.id);
            let s = Object.assign({}, this.opts, {
                query: e,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port
            }, this.opts.transportOptions[t]);
            return new this._transportsByName[t](s)
        }
        _open() {
            if (0 === this.transports.length) return void this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            let t = this.opts.rememberUpgrade && tt.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket") ? "websocket" : this.transports[0];
            this.readyState = "opening";
            let e = this.createTransport(t);
            e.open(), this.setTransport(e)
        }
        setTransport(t) {
            this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", t => this._onClose("transport close", t))
        }
        onOpen() {
            this.readyState = "open", tt.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush()
        }
        _onPacket(t) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "ping":
                    this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                    break;
                case "error":
                    let e = Error("server error");
                    e.code = t.data, this._onError(e);
                    break;
                case "message":
                    this.emitReserved("data", t.data), this.emitReserved("message", t.data)
            }
        }
        onHandshake(t) {
            this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), "closed" !== this.readyState && this._resetPingTimeout()
        }
        _resetPingTimeout() {
            this.clearTimeoutFn(this._pingTimeoutTimer);
            let t = this._pingInterval + this._pingTimeout;
            this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
                this._onClose("ping timeout")
            }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref()
        }
        _onDrain() {
            this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
        }
        flush() {
            if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                let t = this._getWritablePackets();
                this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush")
            }
        }
        _getWritablePackets() {
            if (!(this._maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
            let t = 1;
            for (let e = 0; e < this.writeBuffer.length; e++) {
                let s = this.writeBuffer[e].data;
                if (s && (t += "string" == typeof s ? function(t) {
                        let e = 0,
                            s = 0;
                        for (let r = 0, n = t.length; r < n; r++)(e = t.charCodeAt(r)) < 128 ? s += 1 : e < 2048 ? s += 2 : e < 55296 || e >= 57344 ? s += 3 : (r++, s += 4);
                        return s
                    }(s) : Math.ceil(1.33 * (s.byteLength || s.size))), e > 0 && t > this._maxPayload) return this.writeBuffer.slice(0, e);
                t += 2
            }
            return this.writeBuffer
        }
        _hasPingExpired() {
            if (!this._pingTimeoutTime) return !0;
            let t = Date.now() > this._pingTimeoutTime;
            return t && (this._pingTimeoutTime = 0, R(() => {
                this._onClose("ping timeout")
            }, this.setTimeoutFn)), t
        }
        write(t, e, s) {
            return this._sendPacket("message", t, e, s), this
        }
        send(t, e, s) {
            return this._sendPacket("message", t, e, s), this
        }
        _sendPacket(t, e, s, r) {
            if ("function" == typeof e && (r = e, e = void 0), "function" == typeof s && (r = s, s = null), "closing" === this.readyState || "closed" === this.readyState) return;
            (s = s || {}).compress = !1 !== s.compress;
            let n = {
                type: t,
                data: e,
                options: s
            };
            this.emitReserved("packetCreate", n), this.writeBuffer.push(n), r && this.once("flush", r), this.flush()
        }
        close() {
            let t = () => {
                    this._onClose("forced close"), this.transport.close()
                },
                e = () => {
                    this.off("upgrade", e), this.off("upgradeError", e), t()
                },
                s = () => {
                    this.once("upgrade", e), this.once("upgradeError", e)
                };
            return ("opening" === this.readyState || "open" === this.readyState) && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
                this.upgrading ? s() : t()
            }) : this.upgrading ? s() : t()), this
        }
        _onError(t) {
            if (tt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && "opening" === this.readyState) return this.transports.shift(), this._open();
            this.emitReserved("error", t), this._onClose("transport error", t)
        }
        _onClose(t, e) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), G && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                    let t = Z.indexOf(this._offlineEventListener); - 1 !== t && Z.splice(t, 1)
                }
                this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this._prevBufferLen = 0
            }
        }
    }
    tt.protocol = 4;
    class te extends tt {
        constructor() {
            super(...arguments), this._upgrades = []
        }
        onOpen() {
            if (super.onOpen(), "open" === this.readyState && this.opts.upgrade)
                for (let t = 0; t < this._upgrades.length; t++) this._probe(this._upgrades[t])
        }
        _probe(t) {
            let e = this.createTransport(t),
                s = !1;
            tt.priorWebsocketSuccess = !1;
            let r = () => {
                s || (e.send([{
                    type: "ping",
                    data: "probe"
                }]), e.once("packet", t => {
                    if (!s)
                        if ("pong" === t.type && "probe" === t.data) {
                            if (this.upgrading = !0, this.emitReserved("upgrading", e), !e) return;
                            tt.priorWebsocketSuccess = "websocket" === e.name, this.transport.pause(() => {
                                s || "closed" !== this.readyState && (h(), this.setTransport(e), e.send([{
                                    type: "upgrade"
                                }]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush())
                            })
                        } else {
                            let t = Error("probe error");
                            t.transport = e.name, this.emitReserved("upgradeError", t)
                        }
                }))
            };

            function n() {
                s || (s = !0, h(), e.close(), e = null)
            }
            let i = t => {
                let s = Error("probe error: " + t);
                s.transport = e.name, n(), this.emitReserved("upgradeError", s)
            };

            function o() {
                i("transport closed")
            }

            function a() {
                i("socket closed")
            }

            function c(t) {
                e && t.name !== e.name && n()
            }
            let h = () => {
                e.removeListener("open", r), e.removeListener("error", i), e.removeListener("close", o), this.off("close", a), this.off("upgrading", c)
            };
            e.once("open", r), e.once("error", i), e.once("close", o), this.once("close", a), this.once("upgrading", c), -1 !== this._upgrades.indexOf("webtransport") && "webtransport" !== t ? this.setTimeoutFn(() => {
                s || e.open()
            }, 200) : e.open()
        }
        onHandshake(t) {
            this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t)
        }
        _filterUpgrades(t) {
            let e = [];
            for (let s = 0; s < t.length; s++) ~this.transports.indexOf(t[s]) && e.push(t[s]);
            return e
        }
    }
    class ts extends te {
        constructor(t, e = {}) {
            const s = "object" == typeof t ? t : e;
            (!s.transports || s.transports && "string" == typeof s.transports[0]) && (s.transports = (s.transports || ["polling", "websocket", "webtransport"]).map(t => z[t]).filter(t => !!t)), super(t, s)
        }
    }
    ts.protocol;
    let tr = "function" == typeof ArrayBuffer,
        tn = Object.prototype.toString,
        ti = "function" == typeof Blob || "u" > typeof Blob && "[object BlobConstructor]" === tn.call(Blob),
        to = "function" == typeof File || "u" > typeof File && "[object FileConstructor]" === tn.call(File);

    function ta(t) {
        return tr && (t instanceof ArrayBuffer || ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer)) || ti && t instanceof Blob || to && t instanceof File
    }
    let tc = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
    (n = i || (i = {}))[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
    class th {
        constructor(t) {
            this.replacer = t
        }
        encode(t) {
            return (t.type === i.EVENT || t.type === i.ACK) && function t(e, s) {
                if (!e || "object" != typeof e) return !1;
                if (Array.isArray(e)) {
                    for (let s = 0, r = e.length; s < r; s++)
                        if (t(e[s])) return !0;
                    return !1
                }
                if (ta(e)) return !0;
                if (e.toJSON && "function" == typeof e.toJSON && 1 == arguments.length) return t(e.toJSON(), !0);
                for (let s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s) && t(e[s])) return !0;
                return !1
            }(t) ? this.encodeAsBinary({
                type: t.type === i.EVENT ? i.BINARY_EVENT : i.BINARY_ACK,
                nsp: t.nsp,
                data: t.data,
                id: t.id
            }) : [this.encodeAsString(t)]
        }
        encodeAsString(t) {
            let e = "" + t.type;
            return (t.type === i.BINARY_EVENT || t.type === i.BINARY_ACK) && (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data, this.replacer)), e
        }
        encodeAsBinary(t) {
            let e, s, r = (e = [], s = t.data, t.data = function t(e, s) {
                    if (!e) return e;
                    if (ta(e)) {
                        let t = {
                            _placeholder: !0,
                            num: s.length
                        };
                        return s.push(e), t
                    }
                    if (Array.isArray(e)) {
                        let r = Array(e.length);
                        for (let n = 0; n < e.length; n++) r[n] = t(e[n], s);
                        return r
                    }
                    if ("object" == typeof e && !(e instanceof Date)) {
                        let r = {};
                        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = t(e[n], s));
                        return r
                    }
                    return e
                }(s, e), t.attachments = e.length, {
                    packet: t,
                    buffers: e
                }),
                n = this.encodeAsString(r.packet),
                i = r.buffers;
            return i.unshift(n), i
        }
    }

    function tu(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }
    class tl extends O {
        constructor(t) {
            super(), this.reviver = t
        }
        add(t) {
            let e;
            if ("string" == typeof t) {
                if (this.reconstructor) throw Error("got plaintext data when reconstructing a packet");
                let s = (e = this.decodeString(t)).type === i.BINARY_EVENT;
                s || e.type === i.BINARY_ACK ? (e.type = s ? i.EVENT : i.ACK, this.reconstructor = new tp(e), 0 === e.attachments && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e)
            } else if (ta(t) || t.base64)
                if (this.reconstructor)(e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, super.emitReserved("decoded", e));
                else throw Error("got binary data when not reconstructing a packet");
            else throw Error("Unknown type: " + t)
        }
        decodeString(t) {
            let e = 0,
                s = {
                    type: Number(t.charAt(0))
                };
            if (void 0 === i[s.type]) throw Error("unknown packet type " + s.type);
            if (s.type === i.BINARY_EVENT || s.type === i.BINARY_ACK) {
                let r = e + 1;
                for (;
                    "-" !== t.charAt(++e) && e != t.length;);
                let n = t.substring(r, e);
                if (n != Number(n) || "-" !== t.charAt(e)) throw Error("Illegal attachments");
                s.attachments = Number(n)
            }
            if ("/" === t.charAt(e + 1)) {
                let r = e + 1;
                for (; ++e && "," !== t.charAt(e) && e !== t.length;);
                s.nsp = t.substring(r, e)
            } else s.nsp = "/";
            let r = t.charAt(e + 1);
            if ("" !== r && Number(r) == r) {
                let r = e + 1;
                for (; ++e;) {
                    let s = t.charAt(e);
                    if (null == s || Number(s) != s) {
                        --e;
                        break
                    }
                    if (e === t.length) break
                }
                s.id = Number(t.substring(r, e + 1))
            }
            if (t.charAt(++e)) {
                let r = this.tryParse(t.substr(e));
                if (tl.isPayloadValid(s.type, r)) s.data = r;
                else throw Error("invalid payload")
            }
            return s
        }
        tryParse(t) {
            try {
                return JSON.parse(t, this.reviver)
            } catch (t) {
                return !1
            }
        }
        static isPayloadValid(t, e) {
            switch (t) {
                case i.CONNECT:
                    return tu(e);
                case i.DISCONNECT:
                    return void 0 === e;
                case i.CONNECT_ERROR:
                    return "string" == typeof e || tu(e);
                case i.EVENT:
                case i.BINARY_EVENT:
                    return Array.isArray(e) && ("number" == typeof e[0] || "string" == typeof e[0] && -1 === tc.indexOf(e[0]));
                case i.ACK:
                case i.BINARY_ACK:
                    return Array.isArray(e)
            }
        }
        destroy() {
            this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
        }
    }
    class tp {
        constructor(t) {
            this.packet = t, this.buffers = [], this.reconPack = t
        }
        takeBinaryData(t) {
            if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                var e, s;
                let t = (e = this.reconPack, s = this.buffers, e.data = function t(e, s) {
                    if (!e) return e;
                    if (e && !0 === e._placeholder) {
                        if ("number" == typeof e.num && e.num >= 0 && e.num < s.length) return s[e.num];
                        throw Error("illegal attachments")
                    }
                    if (Array.isArray(e))
                        for (let r = 0; r < e.length; r++) e[r] = t(e[r], s);
                    else if ("object" == typeof e)
                        for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (e[r] = t(e[r], s));
                    return e
                }(e.data, s), delete e.attachments, e);
                return this.finishedReconstruction(), t
            }
            return null
        }
        finishedReconstruction() {
            this.reconPack = null, this.buffers = []
        }
    }

    function td(t, e, s) {
        return t.on(e, s),
            function() {
                t.off(e, s)
            }
    }
    t.s(["Decoder", () => tl, "Encoder", () => th, "PacketType", () => i, "protocol", 0, 5], 351890);
    let tf = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
    });
    class tg extends O {
        constructor(t, e, s) {
            super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = e, s && s.auth && (this.auth = s.auth), this._opts = Object.assign({}, s), this.io._autoConnect && this.open()
        }
        get disconnected() {
            return !this.connected
        }
        subEvents() {
            if (this.subs) return;
            let t = this.io;
            this.subs = [td(t, "open", this.onopen.bind(this)), td(t, "packet", this.onpacket.bind(this)), td(t, "error", this.onerror.bind(this)), td(t, "close", this.onclose.bind(this))]
        }
        get active() {
            return !!this.subs
        }
        connect() {
            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
        }
        open() {
            return this.connect()
        }
        send() {
            for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
            return e.unshift("message"), this.emit.apply(this, e), this
        }
        emit(t) {
            for (var e, s, r, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
            if (tf.hasOwnProperty(t)) throw Error('"' + t.toString() + '" is a reserved event name');
            if (o.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(o), this;
            let c = {
                type: i.EVENT,
                data: o
            };
            if (c.options = {}, c.options.compress = !1 !== this.flags.compress, "function" == typeof o[o.length - 1]) {
                let t = this.ids++,
                    e = o.pop();
                this._registerAckCallback(t, e), c.id = t
            }
            let h = null == (s = null == (e = this.io.engine) ? void 0 : e.transport) ? void 0 : s.writable,
                u = this.connected && !(null == (r = this.io.engine) ? void 0 : r._hasPingExpired());
            return this.flags.volatile && !h || (u ? (this.notifyOutgoingListeners(c), this.packet(c)) : this.sendBuffer.push(c)), this.flags = {}, this
        }
        _registerAckCallback(t, e) {
            var s, r = this;
            let n = null != (s = this.flags.timeout) ? s : this._opts.ackTimeout;
            if (void 0 === n) {
                this.acks[t] = e;
                return
            }
            let i = this.io.setTimeoutFn(() => {
                    delete this.acks[t];
                    for (let e = 0; e < this.sendBuffer.length; e++) this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1);
                    e.call(this, Error("operation has timed out"))
                }, n),
                o = function() {
                    for (var t = arguments.length, s = Array(t), n = 0; n < t; n++) s[n] = arguments[n];
                    r.io.clearTimeoutFn(i), e.apply(r, s)
                };
            o.withError = !0, this.acks[t] = o
        }
        emitWithAck(t) {
            for (var e = arguments.length, s = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) s[r - 1] = arguments[r];
            return new Promise((e, r) => {
                let n = (t, s) => t ? r(t) : e(s);
                n.withError = !0, s.push(n), this.emit(t, ...s)
            })
        }
        _addToQueue(t) {
            let e;
            var s = this;
            "function" == typeof t[t.length - 1] && (e = t.pop());
            let r = {
                id: this._queueSeq++,
                tryCount: 0,
                pending: !1,
                args: t,
                flags: Object.assign({
                    fromQueue: !0
                }, this.flags)
            };
            t.push(function(t) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                if (r === s._queue[0]) return null !== t ? r.tryCount > s._opts.retries && (s._queue.shift(), e && e(t)) : (s._queue.shift(), e && e(null, ...i)), r.pending = !1, s._drainQueue()
            }), this._queue.push(r), this._drainQueue()
        }
        _drainQueue() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.connected || 0 === this._queue.length) return;
            let e = this._queue[0];
            (!e.pending || t) && (e.pending = !0, e.tryCount++, this.flags = e.flags, this.emit.apply(this, e.args))
        }
        packet(t) {
            t.nsp = this.nsp, this.io._packet(t)
        }
        onopen() {
            "function" == typeof this.auth ? this.auth(t => {
                this._sendConnectPacket(t)
            }) : this._sendConnectPacket(this.auth)
        }
        _sendConnectPacket(t) {
            this.packet({
                type: i.CONNECT,
                data: this._pid ? Object.assign({
                    pid: this._pid,
                    offset: this._lastOffset
                }, t) : t
            })
        }
        onerror(t) {
            this.connected || this.emitReserved("connect_error", t)
        }
        onclose(t, e) {
            this.connected = !1, delete this.id, this.emitReserved("disconnect", t, e), this._clearAcks()
        }
        _clearAcks() {
            Object.keys(this.acks).forEach(t => {
                if (!this.sendBuffer.some(e => String(e.id) === t)) {
                    let e = this.acks[t];
                    delete this.acks[t], e.withError && e.call(this, Error("socket has been disconnected"))
                }
            })
        }
        onpacket(t) {
            if (t.nsp === this.nsp) switch (t.type) {
                case i.CONNECT:
                    t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                    break;
                case i.EVENT:
                case i.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case i.ACK:
                case i.BINARY_ACK:
                    this.onack(t);
                    break;
                case i.DISCONNECT:
                    this.ondisconnect();
                    break;
                case i.CONNECT_ERROR:
                    this.destroy();
                    let e = Error(t.data.message);
                    e.data = t.data.data, this.emitReserved("connect_error", e)
            }
        }
        onevent(t) {
            let e = t.data || [];
            null != t.id && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
        }
        emitEvent(t) {
            if (this._anyListeners && this._anyListeners.length)
                for (let e of this._anyListeners.slice()) e.apply(this, t);
            super.emit.apply(this, t), this._pid && t.length && "string" == typeof t[t.length - 1] && (this._lastOffset = t[t.length - 1])
        }
        ack(t) {
            let e = this,
                s = !1;
            return function() {
                for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                s || (s = !0, e.packet({
                    type: i.ACK,
                    id: t,
                    data: n
                }))
            }
        }
        onack(t) {
            let e = this.acks[t.id];
            "function" == typeof e && (delete this.acks[t.id], e.withError && t.data.unshift(null), e.apply(this, t.data))
        }
        onconnect(t, e) {
            this.id = t, this.recovered = e && this._pid === e, this._pid = e, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
        }
        emitBuffered() {
            this.receiveBuffer.forEach(t => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach(t => {
                this.notifyOutgoingListeners(t), this.packet(t)
            }), this.sendBuffer = []
        }
        ondisconnect() {
            this.destroy(), this.onclose("io server disconnect")
        }
        destroy() {
            this.subs && (this.subs.forEach(t => t()), this.subs = void 0), this.io._destroy(this)
        }
        disconnect() {
            return this.connected && this.packet({
                type: i.DISCONNECT
            }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }
        close() {
            return this.disconnect()
        }
        compress(t) {
            return this.flags.compress = t, this
        }
        get volatile() {
            return this.flags.volatile = !0, this
        }
        timeout(t) {
            return this.flags.timeout = t, this
        }
        onAny(t) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
        }
        prependAny(t) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
        }
        offAny(t) {
            if (!this._anyListeners) return this;
            if (t) {
                let e = this._anyListeners;
                for (let s = 0; s < e.length; s++)
                    if (t === e[s]) {
                        e.splice(s, 1);
                        break
                    }
            } else this._anyListeners = [];
            return this
        }
        listenersAny() {
            return this._anyListeners || []
        }
        onAnyOutgoing(t) {
            return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this
        }
        prependAnyOutgoing(t) {
            return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this
        }
        offAnyOutgoing(t) {
            if (!this._anyOutgoingListeners) return this;
            if (t) {
                let e = this._anyOutgoingListeners;
                for (let s = 0; s < e.length; s++)
                    if (t === e[s]) {
                        e.splice(s, 1);
                        break
                    }
            } else this._anyOutgoingListeners = [];
            return this
        }
        listenersAnyOutgoing() {
            return this._anyOutgoingListeners || []
        }
        notifyOutgoingListeners(t) {
            if (this._anyOutgoingListeners && this._anyOutgoingListeners.length)
                for (let e of this._anyOutgoingListeners.slice()) e.apply(this, t.data)
        }
    }
    var ty = t.i(351890);

    function tm(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
    }
    tm.prototype.duration = function() {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random(),
                s = Math.floor(e * this.jitter * t);
            t = (1 & Math.floor(10 * e)) == 0 ? t - s : t + s
        }
        return 0 | Math.min(t, this.max)
    }, tm.prototype.reset = function() {
        this.attempts = 0
    }, tm.prototype.setMin = function(t) {
        this.ms = t
    }, tm.prototype.setMax = function(t) {
        this.max = t
    }, tm.prototype.setJitter = function(t) {
        this.jitter = t
    };
    class tb extends O {
        constructor(t, e) {
            var s;
            super(), this.nsps = {}, this.subs = [], t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.opts = e, N(this, e), this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(null != (s = e.randomizationFactor) ? s : .5), this.backoff = new tm({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this._readyState = "closed", this.uri = t;
            const r = e.parser || ty;
            this.encoder = new r.Encoder, this.decoder = new r.Decoder, this._autoConnect = !1 !== e.autoConnect, this._autoConnect && this.open()
        }
        reconnection(t) {
            return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection
        }
        reconnectionAttempts(t) {
            return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
        }
        reconnectionDelay(t) {
            var e;
            return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null == (e = this.backoff) || e.setMin(t), this)
        }
        randomizationFactor(t) {
            var e;
            return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null == (e = this.backoff) || e.setJitter(t), this)
        }
        reconnectionDelayMax(t) {
            var e;
            return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null == (e = this.backoff) || e.setMax(t), this)
        }
        timeout(t) {
            return arguments.length ? (this._timeout = t, this) : this._timeout
        }
        maybeReconnectOnOpen() {
            !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }
        open(t) {
            if (~this._readyState.indexOf("open")) return this;
            this.engine = new ts(this.uri, this.opts);
            let e = this.engine,
                s = this;
            this._readyState = "opening", this.skipReconnect = !1;
            let r = td(e, "open", function() {
                    s.onopen(), t && t()
                }),
                n = e => {
                    this.cleanup(), this._readyState = "closed", this.emitReserved("error", e), t ? t(e) : this.maybeReconnectOnOpen()
                },
                i = td(e, "error", n);
            if (!1 !== this._timeout) {
                let t = this._timeout,
                    s = this.setTimeoutFn(() => {
                        r(), n(Error("timeout")), e.close()
                    }, t);
                this.opts.autoUnref && s.unref(), this.subs.push(() => {
                    this.clearTimeoutFn(s)
                })
            }
            return this.subs.push(r), this.subs.push(i), this
        }
        connect(t) {
            return this.open(t)
        }
        onopen() {
            this.cleanup(), this._readyState = "open", this.emitReserved("open");
            let t = this.engine;
            this.subs.push(td(t, "ping", this.onping.bind(this)), td(t, "data", this.ondata.bind(this)), td(t, "error", this.onerror.bind(this)), td(t, "close", this.onclose.bind(this)), td(this.decoder, "decoded", this.ondecoded.bind(this)))
        }
        onping() {
            this.emitReserved("ping")
        }
        ondata(t) {
            try {
                this.decoder.add(t)
            } catch (t) {
                this.onclose("parse error", t)
            }
        }
        ondecoded(t) {
            R(() => {
                this.emitReserved("packet", t)
            }, this.setTimeoutFn)
        }
        onerror(t) {
            this.emitReserved("error", t)
        }
        socket(t, e) {
            let s = this.nsps[t];
            return s ? this._autoConnect && !s.active && s.connect() : (s = new tg(this, t, e), this.nsps[t] = s), s
        }
        _destroy(t) {
            for (let t of Object.keys(this.nsps))
                if (this.nsps[t].active) return;
            this._close()
        }
        _packet(t) {
            let e = this.encoder.encode(t);
            for (let s = 0; s < e.length; s++) this.engine.write(e[s], t.options)
        }
        cleanup() {
            this.subs.forEach(t => t()), this.subs.length = 0, this.decoder.destroy()
        }
        _close() {
            this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close")
        }
        disconnect() {
            return this._close()
        }
        onclose(t, e) {
            var s;
            this.cleanup(), null == (s = this.engine) || s.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, e), this._reconnection && !this.skipReconnect && this.reconnect()
        }
        reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            let t = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
            else {
                let e = this.backoff.duration();
                this._reconnecting = !0;
                let s = this.setTimeoutFn(() => {
                    t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), t.skipReconnect || t.open(e => {
                        e ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", e)) : t.onreconnect()
                    }))
                }, e);
                this.opts.autoUnref && s.unref(), this.subs.push(() => {
                    this.clearTimeoutFn(s)
                })
            }
        }
        onreconnect() {
            let t = this.backoff.attempts;
            this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
        }
    }
    let t_ = {};

    function tv(t, e) {
        let s;
        "object" == typeof t && (e = t, t = void 0);
        let r = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    s = arguments.length > 2 ? arguments[2] : void 0,
                    r = t;
                s = s || "u" > typeof location && location, null == t && (t = s.protocol + "//" + s.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? s.protocol + t : s.host + t), /^(https?|wss?):\/\//.test(t) || (t = void 0 !== s ? s.protocol + "//" + t : "https://" + t), r = X(t)), !r.port && (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
                let n = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + n + ":" + r.port + e, r.href = r.protocol + "://" + n + (s && s.port === r.port ? "" : ":" + r.port), r
            }(t, (e = e || {}).path || "/socket.io"),
            n = r.source,
            i = r.id,
            o = r.path,
            a = t_[i] && o in t_[i].nsps;
        return e.forceNew || e["force new connection"] || !1 === e.multiplex || a ? s = new tb(n, e) : (t_[i] || (t_[i] = new tb(n, e)), s = t_[i]), r.query && !e.query && (e.query = r.queryKey), s.socket(r.path, e)
    }
    Object.assign(tv, {
        Manager: tb,
        Socket: tg,
        io: tv,
        connect: tv
    });
    var tk = t.i(944779);
    let tw = (0, a.createContext)({
        socket: null,
        isConnected: !1,
        connectionStatus: "disconnected",
        connect: () => {},
        disconnect: () => {},
        emit: () => {}
    });

    function tE(t) {
        let {
            children: e
        } = t, {
            data: s,
            status: r
        } = (0, c.useSession)(), n = (0, a.useRef)(null), [i, h] = (0, a.useState)(!1), [u, l] = (0, a.useState)("disconnected"), p = (0, a.useRef)(null), d = (0, a.useCallback)(() => {
            n.current && (n.current.disconnect(), n.current = null, h(!1), l("disconnected")), p.current && clearTimeout(p.current)
        }, []), f = (0, a.useCallback)(() => {
            let t = tk.authService.getToken();
            n.current && t && n.current.emit("auth/login", {
                token: t
            })
        }, []), g = (0, a.useCallback)(() => {
            if (n.current) {
                if (n.current.connected) return void console.log("Socket already connected, skipping connection");
                if (!n.current.connected) {
                    console.log("Socket exists but disconnected, attempting reconnect"), n.current.connect();
                    return
                }
            }
            let t = tk.authService.getToken();
            t ? (console.log("Creating new socket connection"), l("connecting"), n.current = tv("https://api.fanso.club", {
                reconnection: !0,
                reconnectionAttempts: 5,
                reconnectionDelay: 1e3,
                reconnectionDelayMax: 5e3,
                autoConnect: !0,
                transports: ["websocket", "polling"],
                query: {
                    token: t
                }
            }), n.current.on("connect", () => {
                console.log("Socket connected successfully"), h(!0), l("connected"), f()
            }), n.current.on("disconnect", t => {
                console.log("Socket disconnected, reason:", t), h(!1), l("disconnected"), "io server disconnect" === t && (console.log("Server disconnected socket, signing out user"), tk.authService.removeToken(), (0, c.signOut)({
                    redirect: !1
                }))
            }), n.current.on("connect_error", t => {
                l("error"), console.error("Socket connection error:", t)
            }), n.current.on("reconnect", () => {
                h(!0), l("connected"), f()
            }), n.current.on("reconnecting", () => {
                l("reconnecting")
            }), n.current.on("reconnect_failed", () => {
                l("error")
            }), n.current.on("auth/error", () => {
                console.error("Socket authentication failed"), tk.authService.removeToken(), (0, c.signOut)({
                    redirect: !1
                })
            })) : console.log("No token available, skipping socket connection")
        }, [f]), y = (0, a.useCallback)((t, e) => {
            n.current ? .connected && n.current.emit(t, e)
        }, []);
        (0, a.useEffect)(() => {
            "authenticated" === r && s ? .user ? g() : "unauthenticated" === r && d()
        }, [s ? .user ? ._id, r]), (0, a.useEffect)(() => {
            let t = () => {
                "visible" === document.visibilityState && "authenticated" === r && n.current && !n.current.connected && (console.log("Page visible, reconnecting socket"), n.current.connect())
            };
            return document.addEventListener("visibilitychange", t), () => {
                document.removeEventListener("visibilitychange", t)
            }
        }, [r]), (0, a.useEffect)(() => () => {
            n.current && (console.log("Component unmounting, cleaning up socket"), n.current.disconnect(), n.current = null)
        }, []);
        let m = (0, a.useMemo)(() => ({
            socket: n.current,
            isConnected: i,
            connectionStatus: u,
            connect: g,
            disconnect: d,
            emit: y
        }), [n.current, i, u, g, d, y]);
        return (0, o.jsx)(tw.Provider, {
            value: m,
            children: e
        })
    }
    t.s(["SocketProvider", () => tE, "useSocket", 0, () => {
        let t = (0, a.useContext)(tw);
        if (!t) throw Error("useSocket must be used within a SocketProvider");
        return t
    }], 167309)
}, 604448, t => {
    "use strict";
    var e = t.i(271645),
        s = t.i(167309);

    function r(t, r) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                socket: i,
                isConnected: o
            } = (0, s.useSocket)(),
            {
                autoCleanup: a = !0,
                enabled: c = !0
            } = n,
            h = (0, e.useRef)(r);
        h.current = r;
        let u = (0, e.useRef)(t => {
            h.current(t)
        });
        return (0, e.useEffect)(() => {
            if (!i || !o || !c) return () => {};
            let e = u.current;
            return i.on(t, e), () => {}
        }, [i, o, t, c, a]), {
            removeListener: () => {
                i && i.off(t, u.current)
            }
        }
    }

    function n(t) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                socket: n,
                isConnected: i
            } = (0, s.useSocket)(),
            {
                autoCleanup: o = !0,
                enabled: a = !0
            } = r,
            c = (0, e.useRef)(t);
        c.current = t, (0, e.useEffect)(() => {
            if (!n || !i || !a) return () => {};
            let e = [];
            return Object.entries(t).forEach(t => {
                let [s] = t, r = t => {
                    let e = c.current[s];
                    e && e(t)
                };
                n.on(s, r), e.push(() => {
                    n.off(s, r)
                })
            }), () => {}
        }, [n, i, a, o])
    }

    function i() {
        let {
            emit: t
        } = (0, s.useSocket)();
        return t
    }
    t.s(["useSocketEmit", () => i, "useSocketListener", () => r, "useSocketListeners", () => n])
}, 697239, t => {
    "use strict";
    var e = t.i(843476),
        s = t.i(167309);

    function r(t) {
        let {
            showText: r = !1,
            className: n = "",
            position: i = "bottom-right"
        } = t, {
            connectionStatus: o
        } = (0, s.useSocket)();
        return (0, e.jsx)("div", {
            className: `fixed ${(()=>{switch(i){case"top-left":return"top-4 left-4";case"top-right":return"top-4 right-4";case"bottom-left":return"bottom-4 left-4";default:return"bottom-4 right-4"}})()} z-50 ${n}`,
            children: (0, e.jsxs)("div", {
                className: "flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg",
                children: [(0, e.jsx)("div", {
                    className: `w-2 h-2 rounded-full ${(()=>{switch(o){case"connected":return"bg-green-500";case"connecting":case"reconnecting":return"bg-yellow-500";case"error":return"bg-red-500";default:return"bg-gray-400"}})()}`
                }), r && (0, e.jsx)("span", {
                    className: "text-xs text-gray-600 font-medium",
                    children: (() => {
                        switch (o) {
                            case "connected":
                                return "Connected";
                            case "connecting":
                                return "Connecting...";
                            case "reconnecting":
                                return "Reconnecting...";
                            case "error":
                                return "Connection Error";
                            default:
                                return "Disconnected"
                        }
                    })()
                })]
            })
        })
    }

    function n(t) {
        let {
            className: r = ""
        } = t, {
            connectionStatus: n
        } = (0, s.useSocket)();
        return (0, e.jsx)("div", {
            className: `w-2 h-2 rounded-full ${(()=>{switch(n){case"connected":return"bg-green-500";case"connecting":case"reconnecting":return"bg-yellow-500 animate-pulse";case"error":return"bg-red-500";default:return"bg-gray-400"}})()} ${r}`,
            title: n
        })
    }
    t.s(["SocketStatusDot", () => n, "SocketStatusIndicator", () => r])
}]);