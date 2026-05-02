(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 621192, e => {
    "use strict";
    var t = e.i(649536);
    e.s(["Row", () => t.default])
}, 178654, e => {
    "use strict";
    var t = e.i(571610);
    e.s(["Col", () => t.default])
}, 281575, e => {
    "use strict";
    var t = e.i(271645),
        l = e.i(117595),
        a = e.i(283599),
        i = e.i(324322),
        r = e.i(140240);
    let s = e => fetch(e, {
        headers: {
            "Content-Type": "application/json",
            Authorization: l.default.get(i.TOKEN) || null
        }
    }).then(async e => {
        if (e.status >= 200 && e.status <= 300) return e.json();
        throw await e.json()
    });

    function c(e) {
        return (l, a, i) => {
            let r = (0, t.useRef)(null),
                s = e(l, a, i);
            (0, t.useEffect)(() => {
                void 0 !== s.data && (r.current = s.data)
            }, [s.data]);
            let c = (0, t.useCallback)(() => {
                    r.current = void 0
                }, []),
                d = void 0 === s.data ? r.current : s.data,
                n = void 0 === s.data && void 0 !== r.current;
            return { ...s,
                data: d,
                isLagging: n,
                resetLaggy: c
            }
        }
    }

    function d(e, t) {
        let {
            data: l,
            error: i,
            isValidating: d,
            mutate: o,
            isLoading: u
        } = (0, a.default)((0, r.isUrl)(e) ? e : `https://api.fanso.club${e}`, s, { ...t,
            shouldRetryOnError: !1,
            use: [c]
        });
        return {
            data: l && l.data,
            error: i,
            isValidating: d,
            isLoading: u,
            mutate: o,
            handleTableChange: (e, t, l) => {
                n({
                    current: e.current,
                    pageSize: e.pageSize,
                    sortBy: l.field || "updatedAt",
                    sort: "ascend" === l.order ? "asc" : "desc"
                })
            },
            handleFilter: e => {
                n({ ...e,
                    current: 1
                })
            },
            handlePaginationChange: (e, t) => {
                n({
                    current: e,
                    pageSize: t
                })
            }
        }
    }

    function n(e) {
        let {
            pathname: t
        } = window.location, l = Object.fromEntries(new URLSearchParams(window.location.search).entries());
        window.history.replaceState(null, "", `${(0,r.buildUrl)(t,{...l,...e})}`)
    }
    e.s(["useClientFetch", () => d])
}, 331849, e => {
    "use strict";
    var t = e.i(324322);
    class l extends t.APIRequest {
        statistics() {
            return this.get("/admin/statistics")
        }
        statisticsEndpoint() {
            return "/admin/statistics"
        }
        earningStatisticsEndpoint() {
            return "/admin/statistics/earnings"
        }
    }
    let a = new l;
    e.s(["utilsService", 0, a])
}, 475538, e => {
    "use strict";
    var t = e.i(160226);
    e.s(["Statistic", () => t.default])
}, 703224, e => {
    "use strict";
    var t = e.i(843476),
        l = e.i(621192),
        a = e.i(178654),
        i = e.i(475538),
        r = e.i(226240),
        r = r,
        s = e.i(331849);
    e.i(247167);
    var c = e.i(931067),
        d = e.i(271645);
    let n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 00-11.3 0l-189 189.6a7.87 7.87 0 00-2.3 5.6V720c0 4.4 3.6 8 8 8z"
                }
            }]
        },
        name: "area-chart",
        theme: "outlined"
    };
    var o = e.i(9583),
        u = d.forwardRef(function(e, t) {
            return d.createElement(o.default, (0, c.default)({}, e, {
                ref: t,
                icon: n
            }))
        });
    let f = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 00-282.8 117.1 398.19 398.19 0 00-85.7 127.1A397.61 397.61 0 0072 552a398.46 398.46 0 00117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 00472 952a398.46 398.46 0 00282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 00872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 01470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 00589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 01166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"
                }
            }]
        },
        name: "pie-chart",
        theme: "outlined"
    };
    var h = d.forwardRef(function(e, t) {
        return d.createElement(o.default, (0, c.default)({}, e, {
            ref: t,
            icon: f
        }))
    });
    let x = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"
                }
            }]
        },
        name: "bar-chart",
        theme: "outlined"
    };
    var j = d.forwardRef(function(e, t) {
        return d.createElement(o.default, (0, c.default)({}, e, {
            ref: t,
            icon: x
        }))
    });
    let v = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"
                }
            }]
        },
        name: "line-chart",
        theme: "outlined"
    };
    var S = d.forwardRef(function(e, t) {
        return d.createElement(o.default, (0, c.default)({}, e, {
            ref: t,
            icon: v
        }))
    });
    let m = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"
                }
            }]
        },
        name: "dot-chart",
        theme: "outlined"
    };
    var g = d.forwardRef(function(e, t) {
            return d.createElement(o.default, (0, c.default)({}, e, {
                ref: t,
                icon: m
            }))
        }),
        p = e.i(522016),
        E = e.i(140240),
        R = e.i(281575);

    function C() {
        let {
            data: e,
            isLoading: c
        } = (0, R.useClientFetch)((0, E.buildUrl)(s.utilsService.statisticsEndpoint(), {})), {
            data: d,
            isLoading: n
        } = (0, R.useClientFetch)((0, E.buildUrl)(s.utilsService.earningStatisticsEndpoint(), {}));
        return (0, t.jsxs)(l.Row, {
            gutter: [16, 16],
            children: [(0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: {
                        pathname: "/users",
                        query: {
                            status: "active"
                        }
                    },
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "ACTIVE USERS",
                            value: e ? .totalActiveUsers || 0,
                            valueStyle: {
                                color: "#ffc107"
                            },
                            prefix: (0, t.jsx)(S, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: {
                        pathname: "/users",
                        query: {
                            status: "inactive"
                        }
                    },
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "INACTIVE USERS",
                            value: e ? .totalInactiveUsers || 0,
                            valueStyle: {
                                color: "#ffc107"
                            },
                            prefix: (0, t.jsx)(S, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: {
                        pathname: "/users",
                        query: {
                            verifiedEmail: !1
                        }
                    },
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "NOT VERIFIED EMAIL USERS",
                            value: e ? .totalPendingUsers || 0,
                            valueStyle: {
                                color: "#ffc107"
                            },
                            prefix: (0, t.jsx)(S, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: {
                        pathname: "/creator",
                        query: {
                            status: "active"
                        }
                    },
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "ACTIVE CREATORS",
                            value: e ? .totalActivePerformers || 0,
                            valueStyle: {
                                color: "#009688"
                            },
                            prefix: (0, t.jsx)(j, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: {
                        pathname: "/creator",
                        query: {
                            status: "inactive"
                        }
                    },
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "INACTIVE CREATORS",
                            value: e ? .totalInactivePerformers || 0,
                            valueStyle: {
                                color: "#009688"
                            },
                            prefix: (0, t.jsx)(j, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: {
                        pathname: "/creator",
                        query: {
                            verifiedDocument: !1
                        }
                    },
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "NOT VERIFIED ID CREATORS",
                            value: e ? .totalPendingPerformers || 0,
                            valueStyle: {
                                color: "#009688"
                            },
                            prefix: (0, t.jsx)(j, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: {
                        pathname: "/creator",
                        query: {
                            isFeatured: !0
                        }
                    },
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "FEATURED CREATORS",
                            value: e ? .totalFeaturedPerformers || 0,
                            valueStyle: {
                                color: "#009688"
                            },
                            prefix: (0, t.jsx)(j, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: {
                        pathname: "/creator",
                        query: {
                            isFeatured: !1
                        }
                    },
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "NON-FEATURED CREATORS",
                            value: e ? .totalNonFeaturedPerformers || 0,
                            valueStyle: {
                                color: "#009688"
                            },
                            prefix: (0, t.jsx)(j, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/feed",
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "TOTAL POSTS",
                            value: e ? .totalPosts || 0,
                            valueStyle: {
                                color: "#5399d0"
                            },
                            prefix: (0, t.jsx)(h, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/gallery",
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "TOTAL GALLERIES",
                            value: e ? .totalGalleries || 0,
                            valueStyle: {
                                color: "#5399d0"
                            },
                            prefix: (0, t.jsx)(h, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/photos",
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "TOTAL PHOTOS",
                            value: e ? .totalPhotos || 0,
                            valueStyle: {
                                color: "#5399d0"
                            },
                            prefix: (0, t.jsx)(h, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/video",
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "TOTAL VIDEOS",
                            value: e ? .totalVideos || 0,
                            valueStyle: {
                                color: "#5399d0"
                            },
                            prefix: (0, t.jsx)(h, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/product",
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "TOTAL PRODUCTS",
                            value: e ? .totalProducts || 0,
                            valueStyle: {
                                color: "#5399d0"
                            },
                            prefix: (0, t.jsx)(h, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/subscription",
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "TOTAL SUBSCRIBERS",
                            value: e ? .totalSubscribers || 0,
                            valueStyle: {
                                color: "#941fd0"
                            },
                            prefix: (0, t.jsx)(g, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/subscription?status=active",
                    children: (0, t.jsx)(r.default, {
                        loading: c,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "ACTIVE SUBSCRIBERS",
                            value: e ? .totalActiveSubscribers || 0,
                            valueStyle: {
                                color: "#941fd0"
                            },
                            prefix: (0, t.jsx)(g, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/earnings",
                    children: (0, t.jsx)(r.default, {
                        loading: n,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "TOTAL EARNINGS",
                            value: (0, E.formatPrice)(d ? .totalGrossPrice || 0),
                            valueStyle: {
                                color: "#fb2b2b"
                            }
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/earnings",
                    children: (0, t.jsx)(r.default, {
                        loading: n,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "PLATFORM EARNINGS",
                            value: (0, E.formatPrice)(d ? .totalPriceCommission || 0),
                            valueStyle: {
                                color: "#fb2b2b"
                            }
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/earnings",
                    children: (0, t.jsx)(r.default, {
                        loading: n,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "CREATOR'S EARNINGS",
                            value: (0, E.formatPrice)(d ? .totalNetPrice || 0),
                            valueStyle: {
                                color: "#fb2b2b"
                            }
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/order?deliveryStatus=shipping",
                    children: (0, t.jsx)(r.default, {
                        loading: n,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "SHIPPED ORDERS",
                            value: d ? .totalShippingdOrders || 0,
                            valueStyle: {
                                color: "#c8d841"
                            },
                            prefix: (0, t.jsx)(u, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/order?deliveryStatus=delivered",
                    children: (0, t.jsx)(r.default, {
                        loading: n,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "DELIVERED ORDERS",
                            value: d ? .totalDeliveredOrders || 0,
                            valueStyle: {
                                color: "#c8d841"
                            },
                            prefix: (0, t.jsx)(u, {})
                        })
                    })
                })
            }), (0, t.jsx)(a.Col, {
                md: 8,
                xs: 12,
                children: (0, t.jsx)(p.default, {
                    href: "/order?deliveryStatus=refunded",
                    children: (0, t.jsx)(r.default, {
                        loading: n,
                        children: (0, t.jsx)(i.Statistic, {
                            title: "REFUNDED ORDERS",
                            value: d ? .totalRefundedOrders || 0,
                            valueStyle: {
                                color: "#c8d841"
                            },
                            prefix: (0, t.jsx)(u, {})
                        })
                    })
                })
            })]
        })
    }
    e.s(["default", () => C], 703224)
}]);