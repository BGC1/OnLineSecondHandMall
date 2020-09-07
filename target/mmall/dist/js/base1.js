! function (t) {
    function e(t) {
        var e = document.getElementsByTagName("head")[0],
            n = document.createElement("script");
        n.type = "text/javascript", n.charset = "utf-8", n.src = p.p + "" + t + "." + w + ".hot-update.js", e.appendChild(n)
    }

    function n(t) {
        if ("undefined" == typeof XMLHttpRequest) return t(new Error("No browser support"));
        try {
            var e = new XMLHttpRequest,
                n = p.p + "" + w + ".hot-update.json";
            e.open("GET", n, !0), e.timeout = 1e4, e.send(null)
        } catch (e) {
            return t(e)
        }
        e.onreadystatechange = function () {
            if (4 === e.readyState)
                if (0 === e.status) t(new Error("Manifest request to " + n + " timed out."));
                else if (404 === e.status) t();
            else if (200 !== e.status && 304 !== e.status) t(new Error("Manifest request to " + n + " failed."));
            else {
                try {
                    var r = JSON.parse(e.responseText)
                } catch (e) {
                    return void t(e)
                }
                t(null, r)
            }
        }
    }

    function r(t) {
        function e(t, e) {
            "ready" === C && o("prepare"), j++, p.e(t, function () {
                function n() {
                    j--, "prepare" === C && (T[t] || u(t), 0 === j && 0 === _ && l())
                }
                try {
                    e.call(null, r)
                } finally {
                    n()
                }
            })
        }
        var n = $[t];
        if (!n) return p;
        var r = function (e) {
            return n.hot.active ? $[e] ? ($[e].parents.indexOf(t) < 0 && $[e].parents.push(t), n.children.indexOf(e) < 0 && n.children.push(e)) : k = [t] : (console.warn("[HMR] unexpected require(" + e + ") from disposed module " + t), k = []), p(e)
        };
        for (var i in p) Object.prototype.hasOwnProperty.call(p, i) && (g ? Object.defineProperty(r, i, function (t) {
            return {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return p[t]
                },
                set: function (e) {
                    p[t] = e
                }
            }
        }(i)) : r[i] = p[i]);
        return g ? Object.defineProperty(r, "e", {
            enumerable: !0,
            value: e
        }) : r.e = e, r
    }

    function i(t) {
        var e = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            active: !0,
            accept: function (t, n) {
                if ("undefined" == typeof t) e._selfAccepted = !0;
                else if ("function" == typeof t) e._selfAccepted = t;
                else if ("object" == typeof t)
                    for (var r = 0; r < t.length; r++) e._acceptedDependencies[t[r]] = n;
                else e._acceptedDependencies[t] = n
            },
            decline: function (t) {
                if ("undefined" == typeof t) e._selfDeclined = !0;
                else if ("number" == typeof t) e._declinedDependencies[t] = !0;
                else
                    for (var n = 0; n < t.length; n++) e._declinedDependencies[t[n]] = !0
            },
            dispose: function (t) {
                e._disposeHandlers.push(t)
            },
            addDisposeHandler: function (t) {
                e._disposeHandlers.push(t)
            },
            removeDisposeHandler: function (t) {
                var n = e._disposeHandlers.indexOf(t);
                n >= 0 && e._disposeHandlers.splice(n, 1)
            },
            check: s,
            apply: f,
            status: function (t) {
                return t ? void O.push(t) : C
            },
            addStatusHandler: function (t) {
                O.push(t)
            },
            removeStatusHandler: function (t) {
                var e = O.indexOf(t);
                e >= 0 && O.splice(e, 1)
            },
            data: x[t]
        };
        return e
    }

    function o(t) {
        C = t;
        for (var e = 0; e < O.length; e++) O[e].call(null, t)
    }

    function a(t) {
        var e = +t + "" === t;
        return e ? +t : t
    }

    function s(t, e) {
        if ("idle" !== C) throw new Error("check() is only allowed in idle status");
        "function" == typeof t ? (b = !1, e = t) : (b = t, e = e || function (t) {
            if (t) throw t
        }), o("check"), n(function (t, n) {
            if (t) return e(t);
            if (!n) return o("idle"), void e(null, null);
            E = {}, H = {}, T = {};
            for (var r = 0; r < n.c.length; r++) H[n.c[r]] = !0;
            y = n.h, o("prepare"), v = e, m = {};
            for (var i in S) u(i);
            "prepare" === C && 0 === j && 0 === _ && l()
        })
    }

    function c(t, e) {
        if (H[t] && E[t]) {
            E[t] = !1;
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (m[n] = e[n]);
            0 === --_ && 0 === j && l()
        }
    }

    function u(t) {
        H[t] ? (E[t] = !0, _++, e(t)) : T[t] = !0
    }

    function l() {
        o("ready");
        var t = v;
        if (v = null, t)
            if (b) f(b, t);
            else {
                var e = [];
                for (var n in m) Object.prototype.hasOwnProperty.call(m, n) && e.push(a(n));
                t(null, e)
            }
    }

    function f(e, n) {
        function r(t) {
            for (var e = [t], n = {}, r = e.slice(); r.length > 0;) {
                var o = r.pop(),
                    t = $[o];
                if (t && !t.hot._selfAccepted) {
                    if (t.hot._selfDeclined) return new Error("Aborted because of self decline: " + o);
                    if (0 === o) return;
                    for (var a = 0; a < t.parents.length; a++) {
                        var s = t.parents[a],
                            c = $[s];
                        if (c.hot._declinedDependencies[o]) return new Error("Aborted because of declined dependency: " + o + " in " + s);
                        e.indexOf(s) >= 0 || (c.hot._acceptedDependencies[o] ? (n[s] || (n[s] = []), i(n[s], [o])) : (delete n[s], e.push(s), r.push(s)))
                    }
                }
            }
            return [e, n]
        }

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                t.indexOf(r) < 0 && t.push(r)
            }
        }
        if ("ready" !== C) throw new Error("apply() is only allowed in ready status");
        "function" == typeof e ? (n = e, e = {}) : e && "object" == typeof e ? n = n || function (t) {
            if (t) throw t
        } : (e = {}, n = n || function (t) {
            if (t) throw t
        });
        var s = {},
            c = [],
            u = {};
        for (var l in m)
            if (Object.prototype.hasOwnProperty.call(m, l)) {
                var f = a(l),
                    d = r(f);
                if (!d) {
                    if (e.ignoreUnaccepted) continue;
                    return o("abort"), n(new Error("Aborted because " + f + " is not accepted"))
                }
                if (d instanceof Error) return o("abort"), n(d);
                u[f] = m[f], i(c, d[0]);
                for (var f in d[1]) Object.prototype.hasOwnProperty.call(d[1], f) && (s[f] || (s[f] = []), i(s[f], d[1][f]))
            } for (var h = [], g = 0; g < c.length; g++) {
            var f = c[g];
            $[f] && $[f].hot._selfAccepted && h.push({
                module: f,
                errorHandler: $[f].hot._selfAccepted
            })
        }
        o("dispose");
        for (var v = c.slice(); v.length > 0;) {
            var f = v.pop(),
                b = $[f];
            if (b) {
                for (var O = {}, _ = b.hot._disposeHandlers, j = 0; j < _.length; j++) {
                    var T = _[j];
                    T(O)
                }
                x[f] = O, b.hot.active = !1, delete $[f];
                for (var j = 0; j < b.children.length; j++) {
                    var E = $[b.children[j]];
                    if (E) {
                        var H = E.parents.indexOf(f);
                        H >= 0 && E.parents.splice(H, 1)
                    }
                }
            }
        }
        for (var f in s)
            if (Object.prototype.hasOwnProperty.call(s, f))
                for (var b = $[f], S = s[f], j = 0; j < S.length; j++) {
                    var A = S[j],
                        H = b.children.indexOf(A);
                    H >= 0 && b.children.splice(H, 1)
                }
        o("apply"), w = y;
        for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (t[f] = u[f]);
        var P = null;
        for (var f in s)
            if (Object.prototype.hasOwnProperty.call(s, f)) {
                for (var b = $[f], S = s[f], D = [], g = 0; g < S.length; g++) {
                    var A = S[g],
                        T = b.hot._acceptedDependencies[A];
                    D.indexOf(T) >= 0 || D.push(T)
                }
                for (var g = 0; g < D.length; g++) {
                    var T = D[g];
                    try {
                        T(s)
                    } catch (t) {
                        P || (P = t)
                    }
                }
            } for (var g = 0; g < h.length; g++) {
            var M = h[g],
                f = M.module;
            k = [f];
            try {
                p(f)
            } catch (t) {
                if ("function" == typeof M.errorHandler) try {
                    M.errorHandler(t)
                } catch (t) {
                    P || (P = t)
                } else P || (P = t)
            }
        }
        return P ? (o("fail"), n(P)) : (o("idle"), void n(null, c))
    }

    function p(e) {
        if ($[e]) return $[e].exports;
        var n = $[e] = {
            exports: {},
            id: e,
            loaded: !1,
            hot: i(e),
            parents: k,
            children: []
        };
        return t[e].call(n.exports, n, n.exports, r(e)), n.loaded = !0, n.exports
    }
    var d = window.webpackJsonp;
    window.webpackJsonp = function (e, n) {
        for (var r, i, o = 0, a = []; o < e.length; o++) i = e[o], S[i] && a.push.apply(a, S[i]), S[i] = 0;
        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        for (d && d(e, n); a.length;) a.shift().call(null, p);
        if (n[0]) return $[0] = 0, p(0)
    };
    var h = this.webpackHotUpdate;
    this.webpackHotUpdate = function (t, e) {
        c(t, e), h && h(t, e)
    };
    var g = !1;
    try {
        Object.defineProperty({}, "x", {
            get: function () {}
        }), g = !0
    } catch (t) {}
    var v, m, y, b = !0,
        w = "30339d4ef0c1b467de56",
        x = {},
        k = [],
        O = [],
        C = "idle",
        _ = 0,
        j = 0,
        T = {},
        E = {},
        H = {},
        $ = {},
        S = {
            0: 0
        };
    return p.e = function (t, e) {
        if (0 === S[t]) return e.call(null, p);
        if (void 0 !== S[t]) S[t].push(e);
        else {
            S[t] = [e];
            var n = document.getElementsByTagName("head")[0],
                r = document.createElement("script");
            r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = p.p + "" + t + ".js/" + ({
                1: "index",
                2: "order-list",
                3: "order-confirm",
                4: "list",
                5: "order-detail",
                6: "user-center",
                7: "user-center-update",
                8: "user-pass-update",
                9: "about",
                10: "payment",
                11: "detail",
                12: "cart",
                13: "user-register",
                14: "user-pass-reset",
                15: "user-login",
                16: "result"
            } [t] || t) + ".js", n.appendChild(r)
        }
    }, p.m = t, p.c = $, p.p = "//s.rayhahah.com/Raymallweb/dist/", p.h = function () {
        return w
    }, r(0)(0)
}({
    0: function (t, e, n) {
        t.exports = n(66)
    },
    1: function (t, e, n) {
        var r = n(11),
            i = n(84),
            o = {
                serverHost: ""
            },
            a = {
                request: function (t) {
                    var e = this;
                    $.ajax({
                        type: t.method || "get",
                        url: t.url || "",
                        dataType: t.type || "json",
                        data: t.data || "",
                        success: function (n) {
                            0 === n.status ? "function" == typeof t.success && t.success(n.data, n.msg) : 10 === n.status ? e.doLogin() : 1 === n.status && "function" == typeof t.error && t.error(n.msg)
                        },
                        error: function (e) {
                            "function" == typeof t.error && t.error(e.statusText)
                        }
                    })
                },
                getServerUrl: function (t) {
                    return o.serverHost + t
                },
                getUrlParam: function (t) {
                    var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                        n = window.location.search.substr(1).match(e);
                    return n ? decodeURIComponent(n[2]) : null
                },
                renderHtml: function (t, e) {
                    var n = r.compile(t),
                        i = n.render(e);
                    return i
                },
                successTips: function (t) {
                    i.show({
                        isConfirm: !1,
                        message: t || "操作成功！",
                        target: "body",
                        onConfirm: function () {
                            i.hide()
                        },
                        onCancel: function () {}
                    })
                },
                errorTips: function (t) {
                    i.show({
                        isConfirm: !1,
                        message: t || "哪里不好了~",
                        target: "body",
                        onConfirm: function () {
                            i.hide()
                        },
                        onCancel: function () {}
                    })
                },
                confirmTips: function (t, e, n) {
                    i.show({
                        isConfirm: !0,
                        message: t || "是否确认该操作？",
                        target: "body",
                        onConfirm: function () {
                            i.hide(), "function" == typeof e && e()
                        },
                        onCancel: function () {
                            i.hide(), "function" == typeof n && n()
                        }
                    })
                },
                showLoading: function (t) {
                    t instanceof jQuery ? t.html('<div class="loading"></div>') : $(t).html('<div class="loading"></div>')
                },
                showErrorMessage: function (t, e) {
                    t instanceof jQuery ? t.html('<p class="err-tip">' + e + "</p>") : $(t).html('<p class="err-tip">' + e + "</p>")
                },
                validate: function (t, e) {
                    var t = $.trim(t);
                    return "require" === e ? !!t : "phone" === e ? /^1\d{10}$/.test(t) : "email" === e ? /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(t) : void 0
                },
                doLogin: function () {
                    window.location.href = "./user-login.html?redirect=" + encodeURIComponent(window.location.href)
                },
                goHome: function () {
                    window.location.href = "./index.html"
                }
            };
        t.exports = a
    },
    11: function (t, e, n) {
        var r = n(44);
        r.Template = n(45).Template, r.template = r.Template, t.exports = r
    },
    23: function (t, e) {},
    26: function (t, e) {},
    27: function (t, e) {},
    42: function (t, e) {},
    44: function (t, e, n) {
        ! function (t) {
            function e(t) {
                "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
            }

            function n(t) {
                return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
            }

            function r(t, e, n) {
                if (e.charAt(n) != t.charAt(0)) return !1;
                for (var r = 1, i = t.length; r < i; r++)
                    if (e.charAt(n + r) != t.charAt(r)) return !1;
                return !0
            }

            function i(e, n, r, s) {
                var c = [],
                    u = null,
                    l = null,
                    f = null;
                for (l = r[r.length - 1]; e.length > 0;) {
                    if (f = e.shift(), l && "<" == l.tag && !(f.tag in x)) throw new Error("Illegal content in < super tag.");
                    if (t.tags[f.tag] <= t.tags.$ || o(f, s)) r.push(f), f.nodes = i(e, f.tag, r, s);
                    else {
                        if ("/" == f.tag) {
                            if (0 === r.length) throw new Error("Closing tag without opener: /" + f.n);
                            if (u = r.pop(), f.n != u.n && !a(f.n, u.n, s)) throw new Error("Nesting error: " + u.n + " vs. " + f.n);
                            return u.end = f.i, c
                        }
                        "\n" == f.tag && (f.last = 0 == e.length || "\n" == e[0].tag)
                    }
                    c.push(f)
                }
                if (r.length > 0) throw new Error("missing closing tag: " + r.pop().n);
                return c
            }

            function o(t, e) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n].o == t.n) return t.tag = "#", !0
            }

            function a(t, e, n) {
                for (var r = 0, i = n.length; r < i; r++)
                    if (n[r].c == t && n[r].o == e) return !0
            }

            function s(t) {
                var e = [];
                for (var n in t) e.push('"' + u(n) + '": function(c,p,t,i) {' + t[n] + "}");
                return "{ " + e.join(",") + " }"
            }

            function c(t) {
                var e = [];
                for (var n in t.partials) e.push('"' + u(n) + '":{name:"' + u(t.partials[n].name) + '", ' + c(t.partials[n]) + "}");
                return "partials: {" + e.join(",") + "}, subs: " + s(t.subs)
            }

            function u(t) {
                return t.replace(y, "\\\\").replace(g, '\\"').replace(v, "\\n").replace(m, "\\r").replace(b, "\\u2028").replace(w, "\\u2029")
            }

            function l(t) {
                return ~t.indexOf(".") ? "d" : "f"
            }

            function f(t, e) {
                var n = "<" + (e.prefix || ""),
                    r = n + t.n + k++;
                return e.partials[r] = {
                    name: t.n,
                    partials: {}
                }, e.code += 't.b(t.rp("' + u(r) + '",c,p,"' + (t.indent || "") + '"));', r
            }

            function p(t, e) {
                e.code += "t.b(t.t(t." + l(t.n) + '("' + u(t.n) + '",c,p,0)));'
            }

            function d(t) {
                return "t.b(" + t + ");"
            }
            var h = /\S/,
                g = /\"/g,
                v = /\n/g,
                m = /\r/g,
                y = /\\/g,
                b = /\u2028/,
                w = /\u2029/;
            t.tags = {
                "#": 1,
                "^": 2,
                "<": 3,
                $: 4,
                "/": 5,
                "!": 6,
                ">": 7,
                "=": 8,
                _v: 9,
                "{": 10,
                "&": 11,
                _t: 12
            }, t.scan = function (i, o) {
                function a() {
                    y.length > 0 && (b.push({
                        tag: "_t",
                        text: new String(y)
                    }), y = "")
                }

                function s() {
                    for (var e = !0, n = k; n < b.length; n++)
                        if (e = t.tags[b[n].tag] < t.tags._v || "_t" == b[n].tag && null === b[n].text.match(h), !e) return !1;
                    return e
                }

                function c(t, e) {
                    if (a(), t && s())
                        for (var n, r = k; r < b.length; r++) b[r].text && ((n = b[r + 1]) && ">" == n.tag && (n.indent = b[r].text.toString()), b.splice(r, 1));
                    else e || b.push({
                        tag: "\n"
                    });
                    w = !1, k = b.length
                }

                function u(t, e) {
                    var r = "=" + C,
                        i = t.indexOf(r, e),
                        o = n(t.substring(t.indexOf("=", e) + 1, i)).split(" ");
                    return O = o[0], C = o[o.length - 1], i + r.length - 1
                }
                var l = i.length,
                    f = 0,
                    p = 1,
                    d = 2,
                    g = f,
                    v = null,
                    m = null,
                    y = "",
                    b = [],
                    w = !1,
                    x = 0,
                    k = 0,
                    O = "{{",
                    C = "}}";
                for (o && (o = o.split(" "), O = o[0], C = o[1]), x = 0; x < l; x++) g == f ? r(O, i, x) ? (--x, a(), g = p) : "\n" == i.charAt(x) ? c(w) : y += i.charAt(x) : g == p ? (x += O.length - 1, m = t.tags[i.charAt(x + 1)], v = m ? i.charAt(x + 1) : "_v", "=" == v ? (x = u(i, x), g = f) : (m && x++, g = d), w = x) : r(C, i, x) ? (b.push({
                    tag: v,
                    n: n(y),
                    otag: O,
                    ctag: C,
                    i: "/" == v ? w - O.length : x + C.length
                }), y = "", x += C.length - 1, g = f, "{" == v && ("}}" == C ? x++ : e(b[b.length - 1]))) : y += i.charAt(x);
                return c(w, !0), b
            };
            var x = {
                _t: !0,
                "\n": !0,
                $: !0,
                "/": !0
            };
            t.stringify = function (e, n, r) {
                return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + c(e) + "}"
            };
            var k = 0;
            t.generate = function (e, n, r) {
                k = 0;
                var i = {
                    code: "",
                    subs: {},
                    partials: {}
                };
                return t.walk(e, i), r.asString ? this.stringify(i, n, r) : this.makeTemplate(i, n, r)
            }, t.wrapMain = function (t) {
                return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
            }, t.template = t.Template, t.makeTemplate = function (t, e, n) {
                var r = this.makePartials(t);
                return r.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(r, e, this, n)
            }, t.makePartials = function (t) {
                var e, n = {
                    subs: {},
                    partials: t.partials,
                    name: t.name
                };
                for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
                for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]);
                return n
            }, t.codegen = {
                "#": function (e, n) {
                    n.code += "if(t.s(t." + l(e.n) + '("' + u(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}"
                },
                "^": function (e, n) {
                    n.code += "if(!t.s(t." + l(e.n) + '("' + u(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};"
                },
                ">": f,
                "<": function (e, n) {
                    var r = {
                        partials: {},
                        code: "",
                        subs: {},
                        inPartial: !0
                    };
                    t.walk(e.nodes, r);
                    var i = n.partials[f(e, n)];
                    i.subs = r.subs, i.partials = r.partials
                },
                $: function (e, n) {
                    var r = {
                        subs: {},
                        code: "",
                        partials: n.partials,
                        prefix: e.n
                    };
                    t.walk(e.nodes, r), n.subs[e.n] = r.code, n.inPartial || (n.code += 't.sub("' + u(e.n) + '",c,p,i);')
                },
                "\n": function (t, e) {
                    e.code += d('"\\n"' + (t.last ? "" : " + i"))
                },
                _v: function (t, e) {
                    e.code += "t.b(t.v(t." + l(t.n) + '("' + u(t.n) + '",c,p,0)));'
                },
                _t: function (t, e) {
                    e.code += d('"' + u(t.text) + '"')
                },
                "{": p,
                "&": p
            }, t.walk = function (e, n) {
                for (var r, i = 0, o = e.length; i < o; i++) r = t.codegen[e[i].tag], r && r(e[i], n);
                return n
            }, t.parse = function (t, e, n) {
                return n = n || {}, i(t, "", [], n.sectionTags || [])
            }, t.cache = {}, t.cacheKey = function (t, e) {
                return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
            }, t.compile = function (e, n) {
                n = n || {};
                var r = t.cacheKey(e, n),
                    i = this.cache[r];
                if (i) {
                    var o = i.partials;
                    for (var a in o) delete o[a].instance;
                    return i
                }
                return i = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[r] = i
            }
        }(e)
    },
    45: function (t, e, n) {
        ! function (t) {
            function e(t, e, n) {
                var r;
                return e && "object" == typeof e && (void 0 !== e[t] ? r = e[t] : n && e.get && "function" == typeof e.get && (r = e.get(t))), r
            }

            function n(t, e, n, r, i, o) {
                function a() {}

                function s() {}
                a.prototype = t, s.prototype = t.subs;
                var c, u = new a;
                u.subs = new s, u.subsText = {}, u.buf = "", r = r || {}, u.stackSubs = r, u.subsText = o;
                for (c in e) r[c] || (r[c] = e[c]);
                for (c in r) u.subs[c] = r[c];
                i = i || {}, u.stackPartials = i;
                for (c in n) i[c] || (i[c] = n[c]);
                for (c in i) u.partials[c] = i[c];
                return u
            }

            function r(t) {
                return String(null === t || void 0 === t ? "" : t)
            }

            function i(t) {
                return t = r(t), l.test(t) ? t.replace(o, "&amp;").replace(a, "&lt;").replace(s, "&gt;").replace(c, "&#39;").replace(u, "&quot;") : t
            }
            t.Template = function (t, e, n, r) {
                t = t || {}, this.r = t.code || this.r, this.c = n, this.options = r || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = ""
            }, t.Template.prototype = {
                r: function (t, e, n) {
                    return ""
                },
                v: i,
                t: r,
                render: function (t, e, n) {
                    return this.ri([t], e || {}, n)
                },
                ri: function (t, e, n) {
                    return this.r(t, e, n)
                },
                ep: function (t, e) {
                    var r = this.partials[t],
                        i = e[r.name];
                    if (r.instance && r.base == i) return r.instance;
                    if ("string" == typeof i) {
                        if (!this.c) throw new Error("No compiler available.");
                        i = this.c.compile(i, this.options)
                    }
                    if (!i) return null;
                    if (this.partials[t].base = i, r.subs) {
                        e.stackText || (e.stackText = {});
                        for (key in r.subs) e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                        i = n(i, r.subs, r.partials, this.stackSubs, this.stackPartials, e.stackText)
                    }
                    return this.partials[t].instance = i, i
                },
                rp: function (t, e, n, r) {
                    var i = this.ep(t, n);
                    return i ? i.ri(e, n, r) : ""
                },
                rs: function (t, e, n) {
                    var r = t[t.length - 1];
                    if (!f(r)) return void n(t, e, this);
                    for (var i = 0; i < r.length; i++) t.push(r[i]), n(t, e, this), t.pop()
                },
                s: function (t, e, n, r, i, o, a) {
                    var s;
                    return (!f(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, n, r, i, o, a)), s = !!t, !r && s && e && e.push("object" == typeof t ? t : e[e.length - 1]), s)
                },
                d: function (t, n, r, i) {
                    var o, a = t.split("."),
                        s = this.f(a[0], n, r, i),
                        c = this.options.modelGet,
                        u = null;
                    if ("." === t && f(n[n.length - 2])) s = n[n.length - 1];
                    else
                        for (var l = 1; l < a.length; l++) o = e(a[l], s, c), void 0 !== o ? (u = s, s = o) : s = "";
                    return !(i && !s) && (i || "function" != typeof s || (n.push(u), s = this.mv(s, n, r), n.pop()), s)
                },
                f: function (t, n, r, i) {
                    for (var o = !1, a = null, s = !1, c = this.options.modelGet, u = n.length - 1; u >= 0; u--)
                        if (a = n[u], o = e(t, a, c), void 0 !== o) {
                            s = !0;
                            break
                        } return s ? (i || "function" != typeof o || (o = this.mv(o, n, r)), o) : !i && ""
                },
                ls: function (t, e, n, i, o) {
                    var a = this.options.delimiters;
                    return this.options.delimiters = o, this.b(this.ct(r(t.call(e, i)), e, n)), this.options.delimiters = a, !1
                },
                ct: function (t, e, n) {
                    if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                    return this.c.compile(t, this.options).render(e, n)
                },
                b: function (t) {
                    this.buf += t
                },
                fl: function () {
                    var t = this.buf;
                    return this.buf = "", t
                },
                ms: function (t, e, n, r, i, o, a) {
                    var s, c = e[e.length - 1],
                        u = t.call(c);
                    return "function" == typeof u ? !!r || (s = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(u, c, n, s.substring(i, o), a)) : u
                },
                mv: function (t, e, n) {
                    var i = e[e.length - 1],
                        o = t.call(i);
                    return "function" == typeof o ? this.ct(r(o.call(i)), i, n) : o
                },
                sub: function (t, e, n, r) {
                    var i = this.subs[t];
                    i && (this.activeSub = t, i(e, n, this, r), this.activeSub = !1)
                }
            };
            var o = /&/g,
                a = /</g,
                s = />/g,
                c = /\'/g,
                u = /\"/g,
                l = /[&<>\"\']/,
                f = Array.isArray || function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
        }(e)
    },
    58: function (t, e) {
        t.exports = '<div class="ray-dialog ray-close"> <div class="ray-dialog-container"> <div class="ray-dialog-message"> {{message}} </div> <div class="ray-dialog-opera"> {{#isConfirm}} <span class="ray-dialog-cancel"> 取消 </span> <span class="ray-dialog-confirm"> 确认 </span> {{/isConfirm}} {{^isConfirm}} <span class="ray-dialog-confirm center"> 确认 </span> {{/isConfirm}} </div> </div> </div>'
    },
    66: function (t, e, n) {
        console.log("i am global js"), n(27), n(23), n(26)
    },
    84: function (t, e, n) {
        n(42);
        var r = n(11),
            i = n(58),
            o = {
                option: {
                    isConfirm: !1,
                    message: ""
                },
                show: function (t) {
                    this.option.isConfirm = t.isConfirm, this.option.message = t.message, this.$dialog = $(t.target), this.onConfirm = t.onConfirm, this.onCancel = t.onCancel, this.loadDialog(), this.bindEvent()
                },
                loadDialog: function () {
                    var t = this,
                        e = this.renderHtml(i, {
                            isConfirm: this.option.isConfirm,
                            message: t.option.message
                        });
                    this.$dialog.append(e), $(".ray-dialog-container").animate({
                        width: "600px",
                        margin: "150px auto",
                        opacity: "1"
                    }, 250, "swing")
                },
                bindEvent: function () {
                    var t = this;
                    this.$dialog.find(".ray-dialog-cancel").click(function () {
                        t.onCancel && "function" == typeof t.onCancel && t.onCancel()
                    }), this.$dialog.find(".ray-dialog-confirm").click(function () {
                        t.onConfirm && "function" == typeof t.onConfirm && t.onConfirm()
                    }), this.$dialog.find(".ray-dialog-container").click(function (t) {
                        t.stopPropagation()
                    }), this.$dialog.find(".ray-close").click(function () {
                        t.hide()
                    })
                },
                hide: function () {
                    $(".ray-dialog-container").animate({
                        width: "750px",
                        margin: "100px auto",
                        opacity: "0"
                    }, 250, "swing", function () {
                        $(".ray-dialog").fadeOut(200, function () {
                            $("div").remove(".ray-dialog")
                        })
                    })
                },
                renderHtml: function (t, e) {
                    var n = r.compile(t),
                        i = n.render(e);
                    return i
                }
            };
        t.exports = o
    }
});