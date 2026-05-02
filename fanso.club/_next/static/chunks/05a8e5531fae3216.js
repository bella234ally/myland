(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 568497, e => {
    e.v({
        count_media: "style-module-scss-module__w3Q0Ba__count_media",
        count_media_item: "style-module-scss-module__w3Q0Ba__count_media_item",
        lock_content: "style-module-scss-module__w3Q0Ba__lock_content",
        lock_middle: "style-module-scss-module__w3Q0Ba__lock_middle"
    })
}, 442173, e => {
    "use strict";
    var s = e.i(843476),
        l = e.i(657688),
        a = e.i(271645),
        t = e.i(64777),
        i = e.i(770703),
        o = e.i(501859),
        d = e.i(568497);
    let n = (0, i.default)(() => e.A(857800), {
            loadableGenerated: {
                modules: [580478]
            },
            ssr: !1
        }),
        u = (0, i.default)(() => e.A(256779), {
            loadableGenerated: {
                modules: [652221]
            },
            ssr: !1
        }),
        c = (0, i.default)(() => e.A(906649), {
            loadableGenerated: {
                modules: [954860]
            },
            ssr: !1
        }),
        r = (0, i.default)(() => e.A(332197), {
            loadableGenerated: {
                modules: [255454]
            },
            ssr: !1
        });

    function m(e) {
        let {
            feed: i,
            priority: m,
            onBought: f
        } = e, [_, h] = (0, a.useState)(!1), p = i.files && i.files.filter(e => "feed-photo" === e.type) || [], b = i.files && i.files.find(e => "feed-video" === e.type), j = i.files && i.files.find(e => "feed-audio" === e.type), v = p && p[0] && p[0].thumbnails && p[0].thumbnails[0], x = i ? .teaser ? .thumbnails && i.teaser.thumbnails[0], y = b ? .thumbnails && b.thumbnails[0];
        return (0, s.jsxs)("div", {
            className: d.default.lock_content,
            style: {
                position: "relative"
            },
            children: [(0, s.jsx)(l.default, {
                src: i ? .thumbnail ? .url || v || y || x || j && "/audio/player-thumb.webp" || "/leaf.jpg",
                alt: "lock-f-thumb",
                fill: !0,
                sizes: "20vw",
                priority: m,
                unoptimized: !0,
                loading: m ? "eager" : "lazy"
            }), (0, s.jsxs)("div", {
                className: d.default.lock_middle,
                children: [_ ? (0, s.jsx)(o.RiLockUnlockLine, {}) : (0, s.jsx)(o.RiLockLine, {}), !i.isSale && !i.isSubscribed && (0, s.jsx)(u, {
                    feed: i,
                    onMouseEnter: () => h(!0),
                    onMouseLeave: () => h(!1)
                }), i.isSale && i.price > 0 && (0, s.jsx)(c, {
                    feed: i,
                    onMouseEnter: () => h(!0),
                    onMouseLeave: () => h(!1),
                    onBought: f
                }), i.isSale && !i.price && !i.isFollowed && (0, s.jsx)(r, {
                    feed: i,
                    onMouseEnter: () => h(!0),
                    onMouseLeave: () => h(!1)
                })]
            }), i.files && i.files.length > 0 && (0, s.jsxs)("div", {
                className: d.default.count_media,
                children: [p.length > 0 && (0, s.jsxs)("span", {
                    className: d.default.count_media_item,
                    style: {
                        color: "var(--blue)"
                    },
                    children: [(0, s.jsx)(o.RiImage2Line, {}), p.length]
                }), i ? .teaser && (0, s.jsx)(n, {
                    teaser: i.teaser
                }), b && (0, s.jsxs)("span", {
                    className: d.default.count_media_item,
                    style: {
                        color: "var(--green)"
                    },
                    children: [(0, s.jsx)(o.RiVideoOnLine, {}), (0, t.videoDuration)(b ? .duration || 0)]
                }), j && (0, s.jsxs)("span", {
                    className: d.default.count_media_item,
                    style: {
                        color: "var(--purple)"
                    },
                    children: [(0, s.jsx)(o.RiHeadphoneLine, {}), (0, t.videoDuration)(j ? .duration || 0)]
                })]
            })]
        })
    }
    e.s(["default", () => m])
}, 719912, e => {
    e.n(e.i(442173))
}, 857800, e => {
    e.v(s => Promise.all(["static/chunks/a72f6d6edfa70425.js"].map(s => e.l(s))).then(() => s(580478)))
}, 256779, e => {
    e.v(s => Promise.all(["static/chunks/e5177c7589a5fb34.js"].map(s => e.l(s))).then(() => s(652221)))
}, 906649, e => {
    e.v(s => Promise.all(["static/chunks/4ea9555c33f1b256.js"].map(s => e.l(s))).then(() => s(954860)))
}, 332197, e => {
    e.v(s => Promise.all(["static/chunks/16bf04c908c75ccd.js"].map(s => e.l(s))).then(() => s(255454)))
}]);