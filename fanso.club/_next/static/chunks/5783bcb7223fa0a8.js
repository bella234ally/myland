(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 579844, e => {
    "use strict";
    var t = e.i(140240),
        r = e.i(324322);
    class o extends r.APIRequest {
        uploadAudio(e, t, r) {
            return this.upload("/performer/feeds/audio/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: r,
                customData: t
            })
        }
        uploadPhoto(e, t, r) {
            return this.upload("/performer/feeds/photo/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: r,
                customData: t
            })
        }
        uploadThumbnail(e, t, r) {
            return this.upload("/performer/feeds/thumbnail/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: r,
                customData: t
            })
        }
        uploadVideo(e, t, r) {
            return this.upload("/performer/feeds/video/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: r,
                customData: t
            })
        }
        uploadTeaser(e, t, r) {
            return this.upload("/performer/feeds/teaser/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: r,
                customData: t
            })
        }
        create(e) {
            return this.post("/performer/feeds", e)
        }
        search(e) {
            return this.get((0, t.buildUrl)("/performer/feeds", e))
        }
        performerSearchUrl() {
            return "/performer/feeds"
        }
        update(e, t) {
            return this.put(`/performer/feeds/${e}`, t)
        }
        delete(e) {
            return this.del(`/performer/feeds/${e}`)
        }
        findById(e, t) {
            return this.get(`/performer/feeds/${e}`, t)
        }
        addPoll(e) {
            return this.post("/performer/feeds/polls", e)
        }
        userSearch(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.get((0, t.buildUrl)("/feeds", e), r)
        }
        userSearchWithUsername(e, r) {
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this.get((0, t.buildUrl)(`/feeds/search/${e}`, r), o)
        }
        findOne(e, t) {
            return this.get(`/feeds/${e}`, t)
        }
        votePoll(e) {
            return this.post(`/feeds/vote/${e}`)
        }
        getBookmark(e) {
            return this.get((0, t.buildUrl)("/reactions/feeds/bookmark", e))
        }
        getVideoFileStatus(e, t) {
            return this.get(`/feeds/${e}/file/${t}/status`)
        }
    }
    let n = new o;
    e.s(["feedService", 0, n])
}, 892708, (e, t, r) => {
    t.exports = function(e, t) {
        for (var r = -1, o = null == e ? 0 : e.length, n = Array(o); ++r < o;) n[r] = t(e[r], r, e);
        return n
    }
}, 45350, (e, t, r) => {
    t.exports = Array.isArray
}, 372537, (e, t, r) => {
    var o = e.r(630353),
        n = e.r(892708),
        s = e.r(45350),
        i = e.r(361884),
        a = 1 / 0,
        l = o ? o.prototype : void 0,
        u = l ? l.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (s(t)) return n(t, e) + "";
        if (i(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -a ? "-0" : r
    }
}, 702922, (e, t, r) => {
    var o = e.r(372537);
    t.exports = function(e) {
        return null == e ? "" : o(e)
    }
}, 232189, (e, t, r) => {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, 865156, (e, t, r) => {
    "use strict";
    var o = e.r(232189);

    function n() {}

    function s() {}
    s.resetWarningCache = n, t.exports = function() {
        function e(e, t, r, n, s, i) {
            if (i !== o) {
                var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw a.name = "Invariant Violation", a
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: s,
            resetWarningCache: n
        };
        return r.PropTypes = r, r
    }
}, 745009, (e, t, r) => {
    t.exports = e.r(865156)()
}, 389502, e => {
    "use strict";
    var t = e.i(271645),
        r = e.i(745009);

    function o(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function s(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && l(e, t)
    }

    function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function u(e) {
        var t = function() {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, o = a(e);
            r = t ? Reflect.construct(o, arguments, a(this).constructor) : o.apply(this, arguments);
            if (r && ("object" == typeof r || "function" == typeof r)) return r;
            if (void 0 === this) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return this
        }
    }

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
        return o
    }

    function p(e) {
        var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
            o = String(e);
        if (0 === r) return o;
        var n = o.match(/(.*?)([0-9]+)(.*)/),
            s = n ? n[1] : "",
            i = n ? n[3] : "",
            a = n ? n[2] : o,
            l = a.length >= r ? a : (((function(e) {
                if (Array.isArray(e)) return c(e)
            })(t = Array(r)) || function(e) {
                if ("u" > typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, void 0);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, void 0)
                }
            }(t) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).map(function() {
                return "0"
            }).join("") + a).slice(-1 * r);
        return "".concat(s).concat(l).concat(i)
    }
    var f = {
            daysInHours: !1,
            zeroPadTime: 2
        },
        d = function(e) {
            i(n, e);
            var r = u(n);

            function n() {
                var e;
                return o(this, n), e = r.apply(this, arguments), e.state = {
                    count: e.props.count || 3
                }, e.startCountdown = function() {
                    e.interval = window.setInterval(function() {
                        0 == e.state.count - 1 ? (e.stopCountdown(), e.props.onComplete && e.props.onComplete()) : e.setState(function(e) {
                            return {
                                count: e.count - 1
                            }
                        })
                    }, 1e3)
                }, e.stopCountdown = function() {
                    clearInterval(e.interval)
                }, e.addTime = function(t) {
                    e.stopCountdown(), e.setState(function(e) {
                        return {
                            count: e.count + t
                        }
                    }, e.startCountdown)
                }, e
            }
            return s(n, [{
                key: "componentDidMount",
                value: function() {
                    this.startCountdown()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearInterval(this.interval)
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children ? (0, t.cloneElement)(this.props.children, {
                        count: this.state.count
                    }) : null
                }
            }]), n
        }(t.Component);
    d.propTypes = {
        count: r.number,
        children: r.element,
        onComplete: r.func
    };
    var m = function(e) {
        i(n, e);
        var r = u(n);

        function n(e) {
            var t;
            if (o(this, n), (t = r.call(this, e)).mounted = !1, t.initialTimestamp = t.calcOffsetStartTimestamp(), t.offsetStartTimestamp = t.props.autoStart ? 0 : t.initialTimestamp, t.offsetTime = 0, t.legacyMode = !1, t.legacyCountdownRef = null, t.tick = function() {
                    var e = t.calcTimeDelta(),
                        r = e.completed && !t.props.overtime ? void 0 : t.props.onTick;
                    t.setTimeDeltaState(e, void 0, r)
                }, t.setLegacyCountdownRef = function(e) {
                    t.legacyCountdownRef = e
                }, t.start = function() {
                    if (!t.isStarted()) {
                        var e = t.offsetStartTimestamp;
                        t.offsetStartTimestamp = 0, t.offsetTime += e ? t.calcOffsetStartTimestamp() - e : 0;
                        var r = t.calcTimeDelta();
                        t.setTimeDeltaState(r, "STARTED", t.props.onStart), t.props.controlled || r.completed && !t.props.overtime || (t.clearTimer(), t.interval = window.setInterval(t.tick, t.props.intervalDelay))
                    }
                }, t.pause = function() {
                    t.isPaused() || (t.clearTimer(), t.offsetStartTimestamp = t.calcOffsetStartTimestamp(), t.setTimeDeltaState(t.state.timeDelta, "PAUSED", t.props.onPause))
                }, t.stop = function() {
                    t.isStopped() || (t.clearTimer(), t.offsetStartTimestamp = t.calcOffsetStartTimestamp(), t.offsetTime = t.offsetStartTimestamp - t.initialTimestamp, t.setTimeDeltaState(t.calcTimeDelta(), "STOPPED", t.props.onStop))
                }, t.isStarted = function() {
                    return t.isStatus("STARTED")
                }, t.isPaused = function() {
                    return t.isStatus("PAUSED")
                }, t.isStopped = function() {
                    return t.isStatus("STOPPED")
                }, t.isCompleted = function() {
                    return t.isStatus("COMPLETED")
                }, e.date) {
                var s = t.calcTimeDelta();
                t.state = {
                    timeDelta: s,
                    status: s.completed ? "COMPLETED" : "STOPPED"
                }
            } else t.legacyMode = !0;
            return t
        }
        return s(n, [{
            key: "componentDidMount",
            value: function() {
                !this.legacyMode && (this.mounted = !0, this.props.onMount && this.props.onMount(this.calcTimeDelta()), this.props.autoStart && this.start())
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                this.legacyMode || this.props.date !== e.date && (this.initialTimestamp = this.calcOffsetStartTimestamp(), this.offsetStartTimestamp = this.initialTimestamp, this.offsetTime = 0, this.setTimeDeltaState(this.calcTimeDelta()))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.legacyMode || (this.mounted = !1, this.clearTimer())
            }
        }, {
            key: "calcTimeDelta",
            value: function() {
                var e = this.props,
                    t = e.date,
                    r = e.now,
                    o = e.precision,
                    n = e.controlled,
                    s = e.overtime;
                return function(e) {
                    var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = r.now,
                        n = void 0 === o ? Date.now : o,
                        s = r.precision,
                        i = r.controlled,
                        a = r.offsetTime,
                        l = r.overtime;
                    t = "string" == typeof e ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e, i || (t += void 0 === a ? 0 : a);
                    var u = i ? t : t - n(),
                        c = Math.min(20, Math.max(0, void 0 === s ? 0 : s)),
                        p = Math.round(1e3 * parseFloat(((l ? u : Math.max(0, u)) / 1e3).toFixed(c))),
                        f = Math.abs(p) / 1e3;
                    return {
                        total: p,
                        days: Math.floor(f / 86400),
                        hours: Math.floor(f / 3600 % 24),
                        minutes: Math.floor(f / 60 % 60),
                        seconds: Math.floor(f % 60),
                        milliseconds: Number((f % 1 * 1e3).toFixed()),
                        completed: p <= 0
                    }
                }(t, {
                    now: r,
                    precision: o,
                    controlled: n,
                    offsetTime: this.offsetTime,
                    overtime: s
                })
            }
        }, {
            key: "calcOffsetStartTimestamp",
            value: function() {
                return Date.now()
            }
        }, {
            key: "addTime",
            value: function(e) {
                this.legacyCountdownRef.addTime(e)
            }
        }, {
            key: "clearTimer",
            value: function() {
                window.clearInterval(this.interval)
            }
        }, {
            key: "isStatus",
            value: function(e) {
                return this.state.status === e
            }
        }, {
            key: "setTimeDeltaState",
            value: function(e, t, r) {
                var o = this;
                if (this.mounted) {
                    var n = e.completed && !this.state.timeDelta.completed,
                        s = e.completed && "STARTED" === t;
                    return n && !this.props.overtime && this.clearTimer(), this.setState(function(r) {
                        var n = t || r.status;
                        return e.completed && !o.props.overtime ? n = "COMPLETED" : t || "COMPLETED" !== n || (n = "STOPPED"), {
                            timeDelta: e,
                            status: n
                        }
                    }, function() {
                        r && r(o.state.timeDelta), o.props.onComplete && (n || s) && o.props.onComplete(e, s)
                    })
                }
            }
        }, {
            key: "getApi",
            value: function() {
                return this.api = this.api || {
                    start: this.start,
                    pause: this.pause,
                    stop: this.stop,
                    isStarted: this.isStarted,
                    isPaused: this.isPaused,
                    isStopped: this.isStopped,
                    isCompleted: this.isCompleted
                }
            }
        }, {
            key: "getRenderProps",
            value: function() {
                var e, t, r, o, n, s, i, a, l, u, c, d, m = this.props,
                    h = m.daysInHours,
                    v = m.zeroPadTime,
                    y = m.zeroPadDays,
                    T = this.state.timeDelta;
                return Object.assign(Object.assign({}, T), {
                    api: this.getApi(),
                    props: this.props,
                    formatted: (e = {
                        daysInHours: h,
                        zeroPadTime: v,
                        zeroPadDays: y
                    }, t = T.days, r = T.hours, o = T.minutes, n = T.seconds, i = (s = Object.assign(Object.assign({}, f), e)).daysInHours, a = s.zeroPadTime, u = void 0 === (l = s.zeroPadDays) ? a : l, c = Math.min(2, a), d = i ? p(r + 24 * t, a) : p(r, c), {
                        days: i ? "" : p(t, u),
                        hours: d,
                        minutes: p(o, c),
                        seconds: p(n, c)
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                if (this.legacyMode) {
                    var e = this.props,
                        r = e.count,
                        o = e.children,
                        n = e.onComplete;
                    return (0, t.createElement)(d, {
                        ref: this.setLegacyCountdownRef,
                        count: r,
                        onComplete: n
                    }, o)
                }
                var s = this.props,
                    i = s.className,
                    a = s.overtime,
                    l = s.children,
                    u = s.renderer,
                    c = this.getRenderProps();
                if (u) return u(c);
                if (l && this.state.timeDelta.completed && !a) return (0, t.cloneElement)(l, {
                    countdown: c
                });
                var p = c.formatted,
                    f = p.days,
                    m = p.hours,
                    h = p.minutes,
                    v = p.seconds;
                return (0, t.createElement)("span", {
                    className: i
                }, c.total < 0 ? "-" : "", f, f ? ":" : "", m, ":", h, ":", v)
            }
        }]), n
    }(t.Component);
    m.defaultProps = Object.assign(Object.assign({}, f), {
        controlled: !1,
        intervalDelay: 1e3,
        precision: 0,
        autoStart: !0
    }), m.propTypes = {
        date: (0, r.oneOfType)([(0, r.instanceOf)(Date), r.string, r.number]),
        daysInHours: r.bool,
        zeroPadTime: r.number,
        zeroPadDays: r.number,
        controlled: r.bool,
        intervalDelay: r.number,
        precision: r.number,
        autoStart: r.bool,
        overtime: r.bool,
        className: r.string,
        children: r.element,
        renderer: r.func,
        now: r.func,
        onMount: r.func,
        onStart: r.func,
        onPause: r.func,
        onStop: r.func,
        onTick: r.func,
        onComplete: r.func
    }, e.s(["default", 0, m])
}, 836604, e => {
    e.v({
        feed_polls: "style-module-scss-module__NhiRAa__feed_polls",
        p_desc: "style-module-scss-module__NhiRAa__p_desc",
        p_item: "style-module-scss-module__NhiRAa__p_item",
        p_quest: "style-module-scss-module__NhiRAa__p_quest",
        p_total: "style-module-scss-module__NhiRAa__p_total",
        progress_bar: "style-module-scss-module__NhiRAa__progress_bar",
        total_vote: "style-module-scss-module__NhiRAa__total_vote"
    })
}, 976075, (e, t, r) => {
    var o = e.r(139088),
        n = e.r(304653),
        s = e.r(773759),
        i = e.r(702922),
        a = o.isFinite,
        l = Math.min;
    t.exports = function(e) {
        var t = Math[e];
        return function(e, r) {
            if (e = s(e), (r = null == r ? 0 : l(n(r), 292)) && a(e)) {
                var o = (i(e) + "e").split("e");
                return +((o = (i(t(o[0] + "e" + (+o[1] + r))) + "e").split("e"))[0] + "e" + (o[1] - r))
            }
            return t(e)
        }
    }
}, 357705, (e, t, r) => {
    t.exports = e.r(976075)("round")
}, 227526, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        o = e.i(836604),
        n = e.i(217255),
        s = e.i(579844),
        i = e.i(843577),
        a = e.i(731270);
    let l = e.r(357705);

    function u(u) {
        let {
            poll: c,
            pollExpiredAt: p,
            totalVote: f,
            onVote: d
        } = u, {
            data: m
        } = (0, n.useSession)(), {
            setLoginModal: h
        } = (0, a.useMainThemeLayout)(), [v, y] = (0, r.useState)(c.totalVote), T = f > 0 ? l(100 * v / f, 2) : 0;
        return (0, t.jsxs)("div", {
            "aria-hidden": !0,
            className: o.default.p_item,
            onClick: async () => {
                let t = (0, (await e.A(824772)).default)().isAfter(p);
                if (!m ? .user ? ._id) return void h({
                    openForm: "login"
                });
                if (t) return void(0, i.showError)("The poll is now closed");
                try {
                    await s.feedService.votePoll(c._id), y(e => e + 1), d()
                } catch (e) {
                    (0, i.showError)(e)
                }
            },
            children: [(0, t.jsx)("span", {
                className: o.default.progress_bar,
                style: {
                    width: `${T}%`
                }
            }), (0, t.jsx)("span", {
                className: o.default.p_desc,
                children: c.description
            }), (0, t.jsxs)("span", {
                className: o.default.p_total,
                children: [T, "%"]
            })]
        }, c._id)
    }
    var c = e.i(389502);

    function p(e) {
        let {
            date: r
        } = e;
        return (0, t.jsx)(c.default, {
            date: r,
            children: (0, t.jsx)("span", {
                children: "Closed"
            })
        })
    }

    function f(e) {
        let {
            feed: n
        } = e, [s, i] = (0, r.useState)(0);
        return (0, r.useEffect)(() => {
            let e = 0;
            n.polls.forEach(t => {
                e += t.totalVote
            }), i(e)
        }, []), (0, t.jsxs)("div", {
            className: o.default.feed_polls,
            children: [n.pollDescription && (0, t.jsx)("h4", {
                className: o.default.p_quest,
                children: n.pollDescription
            }), n.polls.map(e => (0, t.jsx)(u, {
                poll: e,
                pollExpiredAt: n.pollExpiredAt,
                totalVote: s,
                onVote: () => i(e => e + 1)
            }, e._id)), (0, t.jsxs)("div", {
                className: o.default.total_vote,
                children: [(0, t.jsxs)("span", {
                    children: ["Total", " ", s, " ", s < 2 ? "vote" : "votes"]
                }), (0, t.jsx)(p, {
                    date: n.pollExpiredAt
                })]
            })]
        })
    }
    e.s(["default", () => f], 227526)
}, 936136, e => {
    e.n(e.i(227526))
}, 824772, e => {
    e.v(e => Promise.resolve().then(() => e(166540)))
}]);