(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 579844, e => {
    "use strict";
    var r = e.i(140240),
        t = e.i(324322);
    class o extends t.APIRequest {
        uploadAudio(e, r, t) {
            return this.upload("/performer/feeds/audio/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: t,
                customData: r
            })
        }
        uploadPhoto(e, r, t) {
            return this.upload("/performer/feeds/photo/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: t,
                customData: r
            })
        }
        uploadThumbnail(e, r, t) {
            return this.upload("/performer/feeds/thumbnail/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: t,
                customData: r
            })
        }
        uploadVideo(e, r, t) {
            return this.upload("/performer/feeds/video/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: t,
                customData: r
            })
        }
        uploadTeaser(e, r, t) {
            return this.upload("/performer/feeds/teaser/upload", [{
                fieldname: "file",
                file: e
            }], {
                onProgress: t,
                customData: r
            })
        }
        create(e) {
            return this.post("/performer/feeds", e)
        }
        search(e) {
            return this.get((0, r.buildUrl)("/performer/feeds", e))
        }
        performerSearchUrl() {
            return "/performer/feeds"
        }
        update(e, r) {
            return this.put(`/performer/feeds/${e}`, r)
        }
        delete(e) {
            return this.del(`/performer/feeds/${e}`)
        }
        findById(e, r) {
            return this.get(`/performer/feeds/${e}`, r)
        }
        addPoll(e) {
            return this.post("/performer/feeds/polls", e)
        }
        userSearch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.get((0, r.buildUrl)("/feeds", e), t)
        }
        userSearchWithUsername(e, t) {
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this.get((0, r.buildUrl)(`/feeds/search/${e}`, t), o)
        }
        findOne(e, r) {
            return this.get(`/feeds/${e}`, r)
        }
        votePoll(e) {
            return this.post(`/feeds/vote/${e}`)
        }
        getBookmark(e) {
            return this.get((0, r.buildUrl)("/reactions/feeds/bookmark", e))
        }
        getVideoFileStatus(e, r) {
            return this.get(`/feeds/${e}/file/${r}/status`)
        }
    }
    let s = new o;
    e.s(["feedService", 0, s])
}, 326373, e => {
    "use strict";
    var r = e.i(21539);
    e.s(["Dropdown", () => r.default])
}, 318649, e => {
    "use strict";
    var r = e.i(843577);
    let t = async e => {
        await navigator.clipboard.writeText(e), (0, r.showSuccess)("Copied to clipboard!")
    };
    e.s(["copyToClipboard", 0, t])
}, 103661, e => {
    "use strict";
    var r = e.i(843476),
        t = e.i(318649),
        o = e.i(313811),
        s = e.i(326373),
        i = e.i(217255),
        d = e.i(522016),
        l = e.i(843577),
        u = e.i(579844),
        a = e.i(618566);

    function n(e) {
        let {
            feed: n
        } = e, {
            data: p
        } = (0, i.useSession)(), f = (0, a.useRouter)(), c = [{
            key: "copy",
            label: "Copy link",
            onClick: () => (0, t.copyToClipboard)(`https://fanso.club/post/${n.slug||n._id}`)
        }];
        return p ? .user ? ._id === n.fromSourceId && c.push({
            key: "edit",
            label: (0, r.jsx)(d.default, {
                href: `/my-post/${n._id}`,
                children: "Edit post"
            })
        }, {
            key: "remove",
            label: "Delete post",
            onClick: async () => {
                try {
                    if (!window.confirm("Are you sure you want to delete this post?")) return;
                    await u.feedService.delete(n._id), f.refresh(), (0, l.showSuccess)("Delete post successfully")
                } catch (e) {
                    (0, l.showError)(e)
                }
            }
        }), (0, r.jsx)(s.Dropdown, {
            menu: {
                items: c
            },
            className: "p-more-dropdown",
            children: (0, r.jsx)(o.AiOutlineMore, {})
        })
    }
    e.s(["default", () => n])
}, 959703, e => {
    e.n(e.i(103661))
}]);