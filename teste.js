! function() {
    "use strict";
    var e = {
            652: function(e, t, n) {
                n.r(t), n.d(t, {
                    __extends: function() {
                        return i
                    },
                    __assign: function() {
                        return o
                    },
                    __rest: function() {
                        return s
                    },
                    __decorate: function() {
                        return a
                    },
                    __param: function() {
                        return u
                    },
                    __metadata: function() {
                        return c
                    },
                    __awaiter: function() {
                        return h
                    },
                    __generator: function() {
                        return d
                    },
                    __createBinding: function() {
                        return l
                    },
                    __exportStar: function() {
                        return p
                    },
                    __values: function() {
                        return f
                    },
                    __read: function() {
                        return _
                    },
                    __spread: function() {
                        return v
                    },
                    __spreadArrays: function() {
                        return g
                    },
                    __spreadArray: function() {
                        return m
                    },
                    __await: function() {
                        return y
                    },
                    __asyncGenerator: function() {
                        return w
                    },
                    __asyncDelegator: function() {
                        return S
                    },
                    __asyncValues: function() {
                        return b
                    },
                    __makeTemplateObject: function() {
                        return E
                    },
                    __importStar: function() {
                        return k
                    },
                    __importDefault: function() {
                        return I
                    },
                    __classPrivateFieldGet: function() {
                        return C
                    },
                    __classPrivateFieldSet: function() {
                        return R
                    }
                });
                var r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                };

                function i(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }
                var o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                };

                function s(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                }

                function a(e, t, n, r) {
                    var i, o = arguments.length,
                        s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                    else
                        for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
                    return o > 3 && s && Object.defineProperty(t, n, s), s
                }

                function u(e, t) {
                    return function(n, r) {
                        t(n, r, e)
                    }
                }

                function c(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function h(e, t, n, r) {
                    return new(n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r["throw"](e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                                e(t)
                            })).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    })
                }

                function d(e, t) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        "throw": a(1),
                        "return": a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    o = t.call(e, s)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                }
                var l = Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                };

                function p(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || l(t, e, n)
                }

                function f(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                    if (n) return n.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function _(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, i, o = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = o["return"]) && n.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return s
                }

                function v() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_(arguments[t]));
                    return e
                }

                function g() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e),
                        i = 0;
                    for (t = 0; t < n; t++)
                        for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                    return r
                }

                function m(e, t) {
                    for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
                    return e
                }

                function y(e) {
                    return this instanceof y ? (this.v = e, this) : new y(e)
                }

                function w(e, t, n) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var r, i = n.apply(e, t || []),
                        o = [];
                    return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                        return this
                    }, r;

                    function s(e) {
                        i[e] && (r[e] = function(t) {
                            return new Promise(function(n, r) {
                                o.push([e, t, n, r]) > 1 || a(e, t)
                            })
                        })
                    }

                    function a(e, t) {
                        try {
                            (n = i[e](t)).value instanceof y ? Promise.resolve(n.value.v).then(u, c) : h(o[0][2], n)
                        } catch (e) {
                            h(o[0][3], e)
                        }
                        var n
                    }

                    function u(e) {
                        a("next", e)
                    }

                    function c(e) {
                        a("throw", e)
                    }

                    function h(e, t) {
                        e(t), o.shift(), o.length && a(o[0][0], o[0][1])
                    }
                }

                function S(e) {
                    var t, n;
                    return t = {}, r("next"), r("throw", function(e) {
                        throw e
                    }), r("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function r(r, i) {
                        t[r] = e[r] ? function(t) {
                            return (n = !n) ? {
                                value: y(e[r](t)),
                                done: "return" === r
                            } : i ? i(t) : t
                        } : i
                    }
                }

                function b(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, n = e[Symbol.asyncIterator];
                    return n ? n.call(e) : (e = f(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function r(n) {
                        t[n] = e[n] && function(t) {
                            return new Promise(function(r, i) {
                                (function(e, t, n, r) {
                                    Promise.resolve(r).then(function(t) {
                                        e({
                                            value: t,
                                            done: n
                                        })
                                    }, t)
                                })(r, i, (t = e[n](t)).done, t.value)
                            })
                        }
                    }
                }

                function E(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }
                var T = Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e["default"] = t
                };

                function k(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && l(t, e, n);
                    return T(t, e), t
                }

                function I(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function C(e, t, n, r) {
                    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                }

                function R(e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
                }
            },
            932: function(e, t, n) {
                var r = n(652),
                    i = !1;

                function o() {
                    return i
                }

                function s(e) {
                    o() && window.console && console.log(e)
                }
                var a = new(function() {
                    function e(e) {
                        this.rebuildFromSnapshot(e)
                    }
                    return e.prototype.rebuildFromSnapshot = function(e) {
                        var t = this.snapshot;
                        if (this.snapshot = e, !t || t.functions !== e.functions) {
                            var n = e.functions;
                            this.arrayIsArray = n.arrayIsArray, this.clearWindowInterval = c(n.clearWindowInterval), this.clearWindowTimeout = c(n.clearWindowTimeout), this.dateGetTime = c(n.dateGetTime), this.dateNow = n.dateNow, this.docFragQuerySelectorAll = c(n.docFragQuerySelectorAll), this.docQuerySelectorAll = c(n.docQuerySelectorAll), this.elMatches = c(n.elMatches), this.elQuerySelectorAll = c(n.elQuerySelectorAll), this.jsonParse = n.jsonParse, this.jsonStringify = n.jsonStringify, this.matchMedia = h(n.matchMedia), this.mathAbs = n.mathAbs, this.mathFloor = n.mathFloor, this.mathMax = n.mathMax, this.mathMin = n.mathMin, this.mathPow = n.mathPow, this.mathRandom = n.mathRandom, this.mathRound = n.mathRound, this.objectHasOwnProp = c(n.objectHasOwnProp), this.objectKeys = n.objectKeys, this.objectValues = n.objectValues || null, this.requestWindowAnimationFrame = h(n.requestWindowAnimationFrame), this.requestWindowIdleCallback = h(n.requestWindowIdleCallback), this.setWindowInterval = c(n.setWindowInterval), this.setWindowTimeout = c(n.setWindowTimeout)
                        }
                    }, e
                }())(u(window));

                function u(e, t) {
                    void 0 === t && (t = 0);
                    var n = t,
                        r = function(e) {
                            return n = 2, Qe.sendToBugsnag("Snapshot failed: " + e, "error"),
                                function() {
                                    throw new Error("Invoked failed snapshot")
                                }
                        },
                        i = function(e) {
                            try {
                                return e()
                            } catch (e) {
                                return r(e.message)
                            }
                        },
                        o = function(e) {
                            try {
                                var t = e();
                                return t || r("snapshot not found")
                            } catch (e) {
                                return r(e.message)
                            }
                        },
                        s = {
                            arrayIsArray: i(function() {
                                return e.Array.isArray
                            }),
                            clearWindowInterval: i(function() {
                                return e.clearInterval
                            }),
                            clearWindowTimeout: i(function() {
                                return e.clearTimeout
                            }),
                            dateGetTime: i(function() {
                                return e.Date.prototype.getTime
                            }),
                            dateNow: i(function() {
                                return e.Date.now
                            }),
                            docFragQuerySelectorAll: o(function() {
                                var t;
                                return null === (t = e.DocumentFragment) || void 0 === t ? void 0 : t.prototype.querySelectorAll
                            }),
                            docQuerySelectorAll: o(function() {
                                var t;
                                return null !== (t = e.Document.prototype.querySelectorAll) && void 0 !== t ? t : e.document.querySelectorAll
                            }),
                            elMatches: o(function() {
                                return p(e, d)
                            }),
                            elQuerySelectorAll: o(function() {
                                return p(e, l)
                            }),
                            jsonParse: i(function() {
                                return e.JSON.parse
                            }),
                            jsonStringify: i(function() {
                                return e.JSON.stringify
                            }),
                            matchMedia: i(function() {
                                return e.matchMedia
                            }),
                            mathAbs: i(function() {
                                return e.Math.abs
                            }),
                            mathFloor: i(function() {
                                return e.Math.floor
                            }),
                            mathMax: i(function() {
                                return e.Math.max
                            }),
                            mathMin: i(function() {
                                return e.Math.min
                            }),
                            mathPow: i(function() {
                                return e.Math.pow
                            }),
                            mathRandom: i(function() {
                                return e.Math.random
                            }),
                            mathRound: i(function() {
                                return e.Math.round
                            }),
                            objectHasOwnProp: i(function() {
                                return e.Object.prototype.hasOwnProperty
                            }),
                            objectKeys: i(function() {
                                return e.Object.keys
                            }),
                            objectValues: i(function() {
                                return e.Object.values
                            }),
                            requestWindowAnimationFrame: i(function() {
                                return e.requestAnimationFrame
                            }),
                            requestWindowIdleCallback: i(function() {
                                return e.requestIdleCallback
                            }),
                            setWindowInterval: i(function() {
                                return e.setInterval
                            }),
                            setWindowTimeout: i(function() {
                                return e.setTimeout
                            })
                        },
                        a = {
                            functionToString: i(function() {
                                return e.Function.prototype.toString
                            }),
                            objectToString: i(function() {
                                return e.Object.prototype.toString
                            })
                        };
                    return {
                        status: n,
                        functions: s,
                        helpers: a
                    }
                }

                function c(e) {
                    return function(t) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        return e.apply(t, n)
                    }
                }

                function h(e) {
                    return e ? c(e) : null
                }

                function d(e) {
                    return e.matches || e.webkitMatchesSelector || e.msMatchesSelector || e.mozMatchesSelector
                }

                function l(e) {
                    return e.querySelectorAll
                }

                function p(e, t) {
                    var n, r, i = (null === (n = e.Element) || void 0 === n ? void 0 : n.prototype) ? t(null === (r = e.Element) || void 0 === r ? void 0 : r.prototype) : void 0,
                        o = e.document ? e.document.documentElement : void 0;
                    if (!o || i && o instanceof e.Element || (i = t(o)), !i) throw new Error("Unabled to find Element proto function");
                    return i
                }

                function f() {
                    var e = function() {
                        return a.dateNow()
                    };
                    return "number" != typeof e() && (e = function() {
                        return a.dateGetTime(new Date)
                    }), e
                }
                var _ = function() {
                    var e, t = f(),
                        n = null !== (e = function() {
                            var e;
                            if (! function() {
                                    var e = window.performance;
                                    return !(!e || !e.now)
                                }()) return;
                            var t = window.performance,
                                n = t.now();
                            if ("number" != typeof n || !isFinite(n) || n <= 0) return;
                            var r = t.timeOrigin;
                            if ("number" != typeof r) {
                                var i = f()() - t.now(),
                                    o = null === (e = t.timing) || void 0 === e ? void 0 : e.navigationStart;
                                r = o ? Math.min(i, o) : i
                            }
                            var s = Math.round(r);
                            if ("number" != typeof s || !isFinite(s) || s <= 0) return;
                            return s
                        }()) && void 0 !== e ? e : t();
                    return {
                        now: t,
                        timeOrigin: n,
                        msSinceDocumentStart: function() {
                            return t() - n
                        }
                    }
                }();

                function v() {
                    return _.now()
                }

                function g() {
                    return _.msSinceDocumentStart()
                }
                var m = ["", "0", "1", "-1", "true", "false", "n/a", "nan", "undefined", "null", "nil", "the_id_that_you_use_in_your_app_for_this_user"],
                    y = ["811c9dc5", "350ca8af", "340ca71c", "14cd0a2b", "4db211e5", "0b069958", "3613e041", "2f8f13ba", "9b61ad43", "77074ba4", "0da3f8ec", "1c750511"],
                    w = function() {
                        return a.mathFloor(v() / 1e3)
                    },
                    S = function() {
                        return w() + 31536e3
                    };

                function b(e) {
                    if (!e) return null;
                    var t = e.split("/"),
                        n = t[0],
                        r = t[1],
                        i = parseInt(r, 10),
                        o = w(),
                        a = S();
                    if (isNaN(i) && (i = a), i <= o) return null;
                    i > a && (i = a);
                    var u = n.split(/[#,]/);
                    if (u.length < 3 && (u = n.split("`")).length < 3) return null;
                    var c = u[0],
                        h = u[1],
                        d = u[2],
                        l = u[3],
                        p = "";
                    void 0 !== l && (p = decodeURIComponent(l), (m.indexOf(p) >= 0 || y.indexOf(p) >= 0) && (s("Ignoring invalid app key \"" + p + "\" from cookie."), p = ""));
                    var f = d.split(":");
                    return {
                        expirationAbsTimeSeconds: i,
                        host: c,
                        orgId: h,
                        userId: f[0],
                        sessionId: f[1] || "",
                        appKeyHash: p
                    }
                }

                function E(e) {
                    var t = {};
                    try {
                        for (var n = e.cookie.split(";"), r = 0; r < n.length; r++) {
                            var i = n[r].replace(/^\s+|\s+$/g, "").split("=");
                            t[i[0]] || (t[i[0]] = i[1])
                        }
                    } catch (e) {
                        s("Exception trying to parse cookies: " + e)
                    }
                    return t
                }
                var T, k;

                function I(e) {
                    if (T) return T;
                    var t = C(e);
                    return t || (t = e._fs_namespace) ? (T = t, t) : T = "FS"
                }

                function C(e) {
                    return e._fs_loaded
                }

                function R(e) {
                    return e[I(e)]
                }

                function A(e) {
                    return "localhost" == e || "127.0.0.1" == e
                }! function(e) {
                    ! function(e) {
                        ! function(e) {
                            e.Consent = "consent", e.Log = "log", e.Record = "rec"
                        }(e.OperationName || (e.OperationName = {})),
                        function(e) {
                            e.Event = "event", e.Page = "page", e.Vars = "setVars", e.User = "user"
                        }(e.VarOperationName || (e.VarOperationName = {}))
                    }(e.V1 || (e.V1 = {})),
                    function(e) {
                        ! function(e) {
                            e.FireEvent = "fireEvent", e.GetSession = "getSession", e.Log = "log", e.Restart = "restart", e.SetIdentity = "setIdentity", e.SetOptions = "setOptions", e.SetPage = "setPage", e.SetVars = "setVars", e.Shutdown = "shutdown"
                        }(e.OperationName || (e.OperationName = {}))
                    }(e.V2 || (e.V2 = {}))
                }(k || (k = {}));
                var O, P, x, L, M = /^([^.]+\.)*(fullstory|onfire).[^.]+(\/|$)/;

                function N(e, t, n) {
                    void 0 === n && (n = "string");
                    var r = e[t];
                    if (typeof r === n) return r
                }

                function F(e) {
                    return !!N(e, "_fs_ext_debug", "boolean") || !!N(e, "_fs_debug", "boolean")
                }

                function U(e) {
                    return N(e, "_fs_rec_host") || function(e) {
                        if (!e) return e;
                        if (!M.test(e)) return e;
                        var t = "rs.";
                        return 0 === e.lastIndexOf(t, 0) || 0 === e.lastIndexOf("rs-2.", 0) ? e : 0 == e.lastIndexOf("www.", 0) || 0 == e.lastIndexOf("app.", 0) ? t + e.slice(4) : t + e
                    }(V(e))
                }

                function q(e) {
                    return N(e, "_fs_ext_org") || N(e, "_fs_org")
                }

                function B(e) {
                    return !!N(e, "_fs_is_outer_script", "boolean")
                }

                function D(e) {
                    return e._fs_transport
                }

                function W(e) {
                    var t = R(e);
                    if (!t) return [];
                    var n = t.q;
                    return n ? (delete t.q, n) : []
                }

                function H(e, t) {
                    var n = R(e);
                    if (n) {
                        var r = n.q;
                        r || (r = n.q = []), r.push(t)
                    }
                }

                function V(e) {
                    return N(e, "_fs_ext_host") || N(e, "_fs_host")
                }

                function j(e) {
                    return e ? A(function(e) {
                        var t = e,
                            n = t.indexOf(":");
                        return n >= 0 && (t = t.slice(0, n)), t
                    }(e)) ? e : 0 == e.indexOf("www.") ? "app." + e.slice(4) : "app." + e : e
                }

                function K(e) {
                    return e ? e + "/s/fs.js" : void 0
                }! function(e) {
                    e.MUT_INSERT = 2, e.MUT_REMOVE = 3, e.MUT_ATTR = 4, e.MUT_TEXT = 6, e.MOUSEMOVE = 8, e.MOUSEMOVE_CURVE = 9, e.SCROLL_LAYOUT = 10, e.SCROLL_LAYOUT_CURVE = 11, e.MOUSEDOWN = 12, e.MOUSEUP = 13, e.CLICK = 16, e.FOCUS = 17, e.VALUECHANGE = 18, e.RESIZE_LAYOUT = 19, e.DOMLOADED = 20, e.LOAD = 21, e.PLACEHOLDER_SIZE = 22, e.UNLOAD = 23, e.BLUR = 24, e.SET_FRAME_BASE = 25, e.TOUCHSTART = 32, e.TOUCHEND = 33, e.TOUCHCANCEL = 34, e.TOUCHMOVE = 35, e.TOUCHMOVE_CURVE = 36, e.NAVIGATE = 37, e.PLAY = 38, e.PAUSE = 39, e.RESIZE_VISUAL = 40, e.RESIZE_VISUAL_CURVE = 41, e.RESIZE_DOCUMENT_CONTENT = 42, e.RESIZE_SCROLLABLE_ELEMENT_CONTENT = 43, e.LOG = 48, e.ERROR = 49, e.DBL_CLICK = 50, e.FORM_SUBMIT = 51, e.WINDOW_FOCUS = 52, e.WINDOW_BLUR = 53, e.HEARTBEAT = 54, e.WATCHED_ELEM = 56, e.PERF_ENTRY = 57, e.REC_FEAT_SUPPORTED = 58, e.SELECT = 59, e.CSSRULE_INSERT = 60, e.CSSRULE_DELETE = 61, e.FAIL_THROTTLED = 62, e.AJAX_REQUEST = 63, e.SCROLL_VISUAL_OFFSET = 64, e.SCROLL_VISUAL_OFFSET_CURVE = 65, e.MEDIA_QUERY_CHANGE = 66, e.RESOURCE_TIMING_BUFFER_FULL = 67, e.MUT_SHADOW = 68, e.DISABLE_STYLESHEET = 69, e.FULLSCREEN = 70, e.FULLSCREEN_ERROR = 71, e.ADOPTED_STYLESHEETS = 72, e.CUSTOM_ELEMENT_DEFINED = 73, e.MODAL_OPEN = 74, e.MODAL_CLOSE = 75, e.SLOW_INTERACTION = 76, e.LONG_FRAME = 77, e.TIMING = 78, e.STORAGE_WRITE_FAILURE = 79, e.DOCUMENT_PROPERTIES = 80, e.ENTRY_NAVIGATE = 81, e.VIEWPORT_INTERSECTION = 83, e.COPY = 84, e.PASTE = 85, e.KEEP_ELEMENT = 2e3, e.KEEP_URL = 2001, e.KEEP_BOUNCE = 2002, e.SYS_SETVAR = 8193, e.SYS_RESOURCEHASH = 8195, e.SYS_SETCONSENT = 8196, e.SYS_CUSTOM = 8197, e.SYS_REPORTCONSENT = 8198, e.SYS_LETHE_MOBILE_BUNDLE_SEQ = 8199
                }(O || (O = {})),
                function(e) {
                    e.Unknown = 0, e.Serialization = 1
                }(P || (P = {})),
                function(e) {
                    e.Unknown = 0, e.DomSnapshot = 1, e.NodeEncoding = 2, e.LzEncoding = 3
                }(x || (x = {})),
                function(e) {
                    e.Internal = 0, e.Public = 1
                }(L || (L = {}));
                var z, Y, G, Q, X, J, Z, $, ee, te, ne, re, ie, oe, se, ae = ["print", "alert", "confirm"];

                function ue(e) {
                    switch (e) {
                        case O.MOUSEDOWN:
                        case O.MOUSEMOVE:
                        case O.MOUSEMOVE_CURVE:
                        case O.MOUSEUP:
                        case O.TOUCHSTART:
                        case O.TOUCHEND:
                        case O.TOUCHMOVE:
                        case O.TOUCHMOVE_CURVE:
                        case O.TOUCHCANCEL:
                        case O.CLICK:
                        case O.SCROLL_LAYOUT:
                        case O.SCROLL_LAYOUT_CURVE:
                        case O.SCROLL_VISUAL_OFFSET:
                        case O.SCROLL_VISUAL_OFFSET_CURVE:
                        case O.NAVIGATE:
                            return !0;
                    }
                    return !1
                }! function(e) {
                    e.GrantConsent = !0, e.RevokeConsent = !1
                }(z || (z = {})),
                function(e) {
                    e.Page = 0, e.Document = 1
                }(Y || (Y = {})),
                function(e) {
                    e.Unknown = 0, e.Api = 1, e.FsShutdownFrame = 2, e.Hibernation = 3, e.Reidentify = 4, e.SettingsBlocked = 5, e.Size = 6, e.Unload = 7
                }(G || (G = {})),
                function(e) {
                    e.Timing = 0, e.Navigation = 1, e.Resource = 2, e.Paint = 3, e.Mark = 4, e.Measure = 5, e.Memory = 6, e.TimeOrigin = 7
                }(Q || (Q = {})),
                function(e) {
                    e.Timing = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"], e.Navigation = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "type", "redirectCount", "decodedBodySize", "encodedBodySize", "transferSize"], e.Resource = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "decodedBodySize", "encodedBodySize", "transferSize"], e.Measure = ["name", "startTime", "duration"], e.Memory = ["jsHeapSizeLimit", "totalJSHeapSize", "usedJSHeapSize"], e.TimeOrigin = ["timeOrigin"]
                }(X || (X = {})),
                function(e) {
                    e.Performance = 0, e.PerformanceEntries = 1, e.PerformanceMemory = 2, e.Console = 3, e.Ajax = 4, e.PerformanceObserver = 5, e.AjaxFetch = 6, e.PerformanceTimeOrigin = 7
                }(J || (J = {})),
                function(e) {
                    e.Node = 1, e.Sheet = 2
                }(Z || (Z = {})),
                function(e) {
                    e.StyleSheetHooks = 0, e.SetPropertyHooks = 1
                }($ || ($ = {})),
                function(e) {
                    e.Document = "document", e.Event = "evt", e.Page = "page", e.User = "user"
                }(ee || (ee = {})),
                function(e) {
                    e.Elide = 0, e.Record = 1, e.Whitelist = 2
                }(te || (te = {})),
                function(e) {
                    e.SignalInvalid = 0, e.SignalDeadClick = 1, e.SignalRageClick = 2
                }(ne || (ne = {})),
                function(e) {
                    e.ReasonNoSuchOrg = 1, e.ReasonOrgDisabled = 2, e.ReasonOrgOverQuota = 3, e.ReasonBlockedDomain = 4, e.ReasonBlockedIp = 5, e.ReasonBlockedUserAgent = 6, e.ReasonBlockedGeo = 7, e.ReasonBlockedTrafficRamping = 8, e.ReasonInvalidURL = 9, e.ReasonUserOptOut = 10, e.ReasonInvalidRecScript = 11, e.ReasonDeletingUser = 12, e.ReasonNativeHookFailure = 13
                }(re || (re = {})),
                function(e) {
                    e.Unset = 0, e.Exclude = 1, e.Mask = 2, e.Unmask = 3, e.Watch = 4, e.Keep = 5
                }(ie || (ie = {})),
                function(e) {
                    e.Unset = 0, e.Click = 1
                }(oe || (oe = {})),
                function(e) {
                    e.MaxLogsPerPage = 1024, e.MutationProcessingInterval = 250, e.CurveSamplingInterval = 142, e.DefaultBundleUploadInterval = 5e3, e.HeartbeatInitial = 4e3, e.HeartbeatMax = 256200, e.PageInactivityTimeout = 18e5, e.BackoffMax = 3e5, e.ScrollSampleInterval = e.MutationProcessingInterval / 5, e.InactivityThreshold = 4e3, e.MaxAjaxPayloadLength = 16384, e.DefaultOrgSettings = {
                        MaxConsoleLogPerPage: e.MaxLogsPerPage,
                        MaxAjaxPayloadLength: e.MaxAjaxPayloadLength,
                        RecordPerformanceResourceImg: !0,
                        RecordPerformanceResourceTiming: !0,
                        HttpRequestHeadersAllowlist: [],
                        HttpResponseHeadersAllowlist: [],
                        UrlHashBlocklist: [],
                        UrlPathBlocklist: [],
                        UrlQueryStringBlocklist: [".*"]
                    }, e.BlockedFieldValue = "__fs__redacted"
                }(se || (se = {}));
                var ce = "_fs_swan_song",
                    he = "_fs_uid";

                function de(e, t) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        try {
                            return e.apply(this, n)
                        } catch (e) {
                            try {
                                t && t(e)
                            } catch (e) {}
                        }
                    }
                }
                var le = function() {},
                    pe = navigator.userAgent,
                    fe = pe.indexOf("MSIE ") > -1 || pe.indexOf("Trident/") > -1,
                    _e = (fe && pe.indexOf("Trident/5"), fe && pe.indexOf("Trident/6"), fe && pe.indexOf("rv:11") > -1),
                    ve = pe.indexOf("Edge/") > -1,
                    ge = (pe.indexOf("CriOS"), pe.indexOf("Snapchat") > -1);
                var me = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);

                function ye() {
                    var e = window.navigator.userAgent.match(/Version\/(\d+)/);
                    return e ? parseInt(e[1], 10) : -1
                }

                function we(e) {
                    if (!me) return !1;
                    var t = ye();
                    return t >= 0 && t === e
                }

                function Se(e) {
                    if (!me) return !1;
                    var t = ye();
                    return t >= 0 && t < e
                }
                we(9), we(10);
                var be = Se(8);
                Se(10), Se(12);

                function Ee(e, t) {
                    for (var n = 0 === t.indexOf("on") ? function(e) {
                            return "on" + e + t.slice(2)
                        } : function(e) {
                            return "" + e + t.charAt(0).toUpperCase() + t.slice(1)
                        }, r = 0, i = [function() {
                            return t
                        }, function() {
                            return n("webkit")
                        }, function() {
                            return n("moz")
                        }, function() {
                            return n("ms")
                        }]; r < i.length; r++) {
                        var o = (0, i[r])();
                        if (o in e) return o
                    }
                    return t
                }

                function Te(e) {
                    return a.arrayIsArray(e)
                }
                var ke = "function" == typeof a.objectKeys ? function(e) {
                    return a.objectKeys(e)
                } : function(e) {
                    var t = [];
                    for (var n in e) a.objectHasOwnProp(e, n) && t.push(n);
                    return t
                };

                function Ie(e, t) {
                    return 0 == e.lastIndexOf(t, 0)
                }

                function Ce(e, t) {
                    for (var n in e) a.objectHasOwnProp(e, n) && t(e[n], n, e)
                }

                function Re(e) {
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                }

                function Ae(e, t) {
                    var n = 0;
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t) return !1;
                    return n == t
                }

                function Oe(e, t) {
                    var n = 0;
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t) return !0;
                    return !1
                }
                var Pe = fe ? function(e) {
                        var t = e.nextSibling;
                        return t && e.parentNode && t === e.parentNode.firstChild ? null : t
                    } : function(e) {
                        return e.nextSibling
                    },
                    xe = fe ? function(e, t) {
                        if (e) {
                            var n = e.parentNode ? e.parentNode.firstChild : null,
                                r = e;
                            do {
                                t(r), r = r.nextSibling
                            } while (r && r != n)
                        }
                    } : function(e, t) {
                        for (var n = e; n; n = n.nextSibling) t(n)
                    },
                    Le = fe ? function(e) {
                        var t = e.previousSibling;
                        return t && e.parentNode && t === e.parentNode.lastChild ? null : t
                    } : function(e) {
                        return e.previousSibling
                    },
                    Me = fe ? function(e, t) {
                        if (e) {
                            var n = e.parentNode ? e.parentNode.lastChild : null,
                                r = e;
                            do {
                                t(r), r = r.previousSibling
                            } while (r && r != n)
                        }
                    } : function(e, t) {
                        for (var n = e; n; n = n.previousSibling) t(n)
                    };

                function Ne(e, t) {
                    if (!e) return le;
                    var n = function(e) {
                        try {
                            var t = window;
                            return t.Zone && t.Zone.root && "function" == typeof t.Zone.root.wrap ? t.Zone.root.wrap(e) : e
                        } catch (t) {
                            return e
                        }
                    }(e);
                    return t && (n = n.bind(t)), de(n, function(e) {
                        s("Unexpected error: " + e)
                    })
                }

                function Fe(e) {
                    var t, n = Object.getOwnPropertyDescriptor(Array.prototype, "toJSON"),
                        r = Object.getOwnPropertyDescriptor(String.prototype, "toJSON");
                    try {
                        n && n.value && n.configurable && delete Array.prototype.toJSON, r && r.value && r.configurable && delete String.prototype.toJSON, t = a.jsonStringify(e)
                    } catch (e) {
                        t = Ue(e)
                    } finally {
                        (null == n ? void 0 : n.value) && de(function() {
                            return Object.defineProperty(Array.prototype, "toJSON", n)
                        })(), (null == r ? void 0 : r.value) && de(function() {
                            return Object.defineProperty(String.prototype, "toJSON", r)
                        })()
                    }
                    return t
                }

                function Ue(e) {
                    var t = "Internal error: unable to determine what JSON error was";
                    try {
                        t = (t = "" + e).replace(/[^a-zA-Z0-9.:!, ]/g, "_")
                    } catch (e) {}
                    return "\"" + t + "\""
                }

                function qe(e) {
                    var t = e.doctype;
                    if (!t) return "";
                    var n = "<!DOCTYPE ";
                    return n += t.name, t.publicId && (n += " PUBLIC \"" + t.publicId + "\""), t.systemId && (n += " \"" + t.systemId + "\""), n + ">"
                }

                function Be(e) {
                    return a.jsonParse(e)
                }
                var De = function() {
                        function e(e, t, n) {
                            void 0 === n && (n = !1), this.target = e, this.propertyName = t, this.overrideToString = n, this._before = le, this._afterSync = le, this._afterAsync = le, this.on = !1
                        }
                        return e.prototype.before = function(e) {
                            return this._before = Ne(e), this
                        }, e.prototype.afterSync = function(e) {
                            return this._afterSync = Ne(e), this
                        }, e.prototype.afterAsync = function(e) {
                            return this._afterAsync = Ne(function(t) {
                                a.setWindowTimeout(window, de(function() {
                                    e(t)
                                }), 0)
                            }), this
                        }, e.prototype.disable = function() {
                            if (this.on = !1, this.shim) {
                                var e = this.shim,
                                    t = e.override,
                                    n = e["native"];
                                this.target[this.propertyName] === t && (this.target[this.propertyName] = n, this.shim = void 0)
                            }
                        }, e.prototype.enable = function() {
                            if (this.on = !0, this.shim) return !0;
                            this.shim = this.makeShim();
                            try {
                                this.target[this.propertyName] = this.shim.override
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }, e.prototype.getTarget = function() {
                            return this.target
                        }, e.prototype.makeShim = function() {
                            var e = this,
                                t = this,
                                n = this.target[this.propertyName],
                                r = function() {
                                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                                    var i = {
                                        that: this,
                                        args: e,
                                        result: null
                                    };
                                    t.on && t._before(i);
                                    var o = n.apply(this, e);
                                    return t.on && (i.result = o, t._afterSync(i), t._afterAsync(i)), o
                                };
                            return this.overrideToString && (r.toString = function() {
                                var t;
                                return "function " + (null !== (t = e.propertyName) && void 0 !== t ? t : "") + "() { [native code] }"
                            }), {
                                "native": n,
                                override: r
                            }
                        }, e
                    }(),
                    We = {};

                function He(e, t, n) {
                    var r;
                    if (void 0 === n && (n = !1), !e || "function" != typeof e[t]) return null;
                    We[t] = null !== (r = We[t]) && void 0 !== r ? r : new WeakMap;
                    var i = We[t].get(e);
                    return i || (i = new De(e, t, n), We[t].set(e, i)), i.enable() ? i : null
                }

                function Ve(e, t, n) {
                    if (!e) return function() {};
                    var i = Object.getOwnPropertyDescriptor(e.prototype, t);
                    if (!i || !i.set) return function() {};
                    var o = i.set,
                        s = Ne(n),
                        a = !0;

                    function u(e) {
                        o.call(this, e), a && s(this, e)
                    }
                    return Object.defineProperty(e.prototype, t, (0, r.__assign)((0, r.__assign)({}, i), {
                            set: u
                        })),
                        function() {
                            a = !1;
                            var n = Object.getOwnPropertyDescriptor(e.prototype, t);
                            n && u === n.set && Object.defineProperty(e.prototype, t, (0, r.__assign)((0, r.__assign)({}, n), {
                                set: o
                            }))
                        }
                }
                var je = "[anonymous]",
                    Ke = /function\s*([\w\-$]+)?\s*\(/i;

                function ze(e) {
                    return e.stack || e.backtrace || e.stacktrace
                }

                function Ye() {
                    var e, t;
                    try {
                        throw new Error("")
                    } catch (n) {
                        e = "<generated>\n", t = ze(n)
                    }
                    if (!t) {
                        e = "<generated-ie>\n";
                        var n = [];
                        try {
                            for (var r = arguments.callee.caller.caller; r && n.length < 10;) {
                                var i = Ke.test(r.toString()) && RegExp.$1 || je;
                                n.push(i), r = r.caller
                            }
                        } catch (e) {
                            s(e)
                        }
                        t = n.join("\n")
                    }
                    return e + t
                }

                function Ge() {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return !0
                    }
                }
                var Qe = function() {
                        function e() {}
                        return e.wrap = function(t, n) {
                            return void 0 === n && (n = "error"), de(t, function(t) {
                                return e.sendToBugsnag(t, n)
                            })
                        }, e.errorLimit = 15, e.sendToBugsnag = function(t, n, r) {
                            if (!(e.errorLimit <= 0)) {
                                e.errorLimit--;
                                var i = t;
                                "string" == typeof i && (i = new Error(i));
                                var o = E(document).fs_uid,
                                    s = o ? b(o) : void 0;
                                s && s.orgId != q(window) && (s = void 0);
                                var a = new Date(1629915348e3).toISOString(),
                                    u = {
                                        projectRoot: window.location.origin,
                                        deviceTime: v(),
                                        inIframe: Ge(),
                                        CompiledVersion: "04c8a6d263",
                                        CompiledTimestamp: 1629915348,
                                        CompiledTime: a,
                                        orgId: q(window),
                                        "userId:sessionId": s ? s.userId + ":" + s.sessionId : "NA",
                                        context: document.location && document.location.pathname,
                                        message: i.message,
                                        name: "Recording Error",
                                        releaseStage: "production " + a,
                                        severity: n,
                                        language: navigator.language || navigator.userLanguage || "en-GB",
                                        stacktrace: ze(i) || Ye()
                                    },
                                    c = function(e, t, n) {
                                        var r = encodeURIComponent(t) + "=" + encodeURIComponent(n);
                                        e.push(r)
                                    },
                                    h = [];
                                for (var d in u) {
                                    c(h, d, u[d] || "")
                                }
                                if (r)
                                    for (var d in r) {
                                        var l = typeof r[d];
                                        c(h, "aux_" + d, "string" === l || "number" === l ? r[d] : Fe(r[d]))
                                    }
                                new Image().src = "https://" + U(window) + "/rec/except?" + h.join("&")
                            }
                        }, e
                    }(),
                    Xe = {};

                function Je(e, t, n) {
                    if (void 0 === n && (n = 1), e) return !0;
                    if (Xe[t] = Xe[t] || 0, Xe[t]++, Xe[t] > n) return !1;
                    var r = new Error("Assertion failed: " + t);
                    return Qe.sendToBugsnag(r, "error"), e
                }

                function Ze(e, t, n, r) {
                    void 0 !== n && ("function" == typeof e.addEventListener ? e.addEventListener(t, n, r) : "function" == typeof e.addListener ? e.addListener(n) : s("Target of " + t + " doesn't seem to support listeners"))
                }

                function $e(e, t, n, r) {
                    void 0 !== n && ("function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r) : "function" == typeof e.removeListener ? e.removeListener(n) : s("Target of " + t + " doesn't seem to support listeners"))
                }
                var et = function() {
                    function e() {
                        var e = this;
                        this._listeners = [], this._children = [], this._yesCapture = !0, this._noCapture = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e._yesCapture = {
                                        capture: !0,
                                        passive: !0
                                    }, e._noCapture = {
                                        capture: !1,
                                        passive: !0
                                    }
                                }
                            });
                            window.addEventListener("test", le, t)
                        } catch (e) {}
                    }
                    return e.prototype.add = function(e, t, n, r, i) {
                        return void 0 === i && (i = !1), this.addCustom(e, t, n, r, i)
                    }, e.prototype.addCustom = function(e, t, n, r, i) {
                        void 0 === i && (i = !1);
                        var o = {
                            target: e,
                            type: t,
                            fn: Qe.wrap(function(e) {
                                (i || !1 !== e.isTrusted || "message" == t || e._fs_trust_event) && r(e)
                            }),
                            options: n ? this._yesCapture : this._noCapture,
                            index: this._listeners.length
                        };
                        return this._listeners.push(o), Ze(e, t, o.fn, o.options), o
                    }, e.prototype.remove = function(e) {
                        e.target && ($e(e.target, e.type, e.fn, e.options), e.target = null, e.fn = void 0)
                    }, e.prototype.clear = function() {
                        for (var e = 0; e < this._listeners.length; e++) this._listeners[e].target && this.remove(this._listeners[e]);
                        this._listeners = []
                    }, e.prototype.createChild = function() {
                        var t = new e;
                        return this._children.push(t), t
                    }, e.prototype.refresh = function() {
                        for (var e = 0, t = this._listeners; e < t.length; e++) {
                            var n = t[e];
                            n.target && ($e(n.target, n.type, n.fn, n.options), Ze(n.target, n.type, n.fn, n.options))
                        }
                        for (var r = 0, i = this._children; r < i.length; r++) {
                            i[r].refresh()
                        }
                    }, e
                }();

                function tt(e) {
                    return "function" == typeof e
                }
                var nt = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    rt = 0,
                    it = function(e, t) {
                        ht[rt] = e, ht[rt + 1] = t, 2 === (rt += 2) && ot()
                    };
                var ot, st, at, ut, ct, ht = new Array(1e3);

                function dt() {
                    for (var e = 0; e < rt; e += 2) {
                        (0, ht[e])(ht[e + 1]), ht[e] = void 0, ht[e + 1] = void 0
                    }
                    rt = 0
                }

                function lt(e, t) {
                    var n = arguments,
                        r = this,
                        i = new this.constructor(_t);
                    void 0 === i[ft] && Ot(i);
                    var o, s = r._state;
                    return s ? (o = n[s - 1], it(function() {
                        return Rt(s, i, o, r._result)
                    })) : Tt(r, i, e, t), i
                }

                function pt(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(_t);
                    return wt(t, e), t
                }
                window.MutationObserver ? (at = 0, ut = new MutationObserver(dt), ct = document.createTextNode(""), ut.observe(ct, {
                    characterData: !0
                }), ot = function() {
                    var e = at = ++at % 2;
                    ct.data = "" + e
                }) : (st = setTimeout, ot = function() {
                    return st(dt, 1)
                });
                var ft = Math.random().toString(36).substring(16);

                function _t() {}
                var vt = void 0,
                    gt = new It;

                function mt(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return gt.error = e, gt
                    }
                }

                function yt(e, t, n) {
                    t.constructor === e.constructor && n === lt && t.constructor.resolve === pt ? function(e, t) {
                        1 === t._state ? bt(e, t._result) : 2 === t._state ? Et(e, t._result) : Tt(t, void 0, function(t) {
                            return wt(e, t)
                        }, function(t) {
                            return Et(e, t)
                        })
                    }(e, t) : n === gt ? (Et(e, gt.error), gt.error = null) : void 0 === n ? bt(e, t) : tt(n) ? function(e, t, n) {
                        it(function(e) {
                            var r = !1,
                                i = function(e, t, n, r, i) {
                                    try {
                                        e.call(t, n, r)
                                    } catch (e) {
                                        return e
                                    }
                                }(n, t, function(n) {
                                    r || (r = !0, t !== n ? wt(e, n) : bt(e, n))
                                }, function(t) {
                                    r || (r = !0, Et(e, t))
                                }, e._label);
                            !r && i && (r = !0, Et(e, i))
                        }, e)
                    }(e, t, n) : bt(e, t)
                }

                function wt(e, t) {
                    var n;
                    e === t ? Et(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof(n = t) || "object" == typeof n && null !== n ? yt(e, t, mt(t)) : bt(e, t)
                }

                function St(e) {
                    e._onerror && e._onerror(e._result), kt(e)
                }

                function bt(e, t) {
                    e._state === vt && (e._result = t, e._state = 1, 0 !== e._subscribers.length && it(kt, e))
                }

                function Et(e, t) {
                    e._state === vt && (e._state = 2, e._result = t, it(St, e))
                }

                function Tt(e, t, n, r) {
                    var i = e._subscribers,
                        o = i.length;
                    e._onerror = null, i[o] = t, i[o + 1] = n, i[o + 2] = r, 0 === o && e._state && it(kt, e)
                }

                function kt(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var r, i, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? Rt(n, r, i, o) : i(o);
                        e._subscribers.length = 0
                    }
                }

                function It() {
                    this.error = null
                }
                var Ct = new It;

                function Rt(e, t, n, r) {
                    var i, o, s = tt(n),
                        a = !1,
                        u = !1;
                    if (s) {
                        if ((i = function(e, t) {
                                try {
                                    return e(t)
                                } catch (e) {
                                    return Ct.error = e, Ct
                                }
                            }(n, r)) === Ct ? (u = !0, o = i.error, i.error = null) : a = !0, t === i) return void Et(t, new TypeError("A promises callback cannot return that same promise."))
                    } else i = r, a = !0;
                    t._state !== vt || (s && a ? wt(t, i) : u ? Et(t, o) : 1 === e ? bt(t, i) : 2 === e && Et(t, i))
                }
                var At = 0;

                function Ot(e) {
                    e[ft] = At++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function Pt(e, t) {
                    this._instanceConstructor = e, this.promise = new e(_t), this.promise[ft] || Ot(this.promise), nt(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? bt(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && bt(this.promise, this._result))) : Et(this.promise, new Error("Array Methods must be provided an Array"))
                }
                Pt.prototype._enumerate = function() {
                    for (var e = this.length, t = this._input, n = 0; this._state === vt && n < e; n++) this._eachEntry(t[n], n)
                }, Pt.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor,
                        r = n.resolve;
                    if (r === pt) {
                        var i = mt(e);
                        if (i === lt && e._state !== vt) this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                        else if (n === xt) {
                            var o = new n(_t);
                            yt(o, e, i), this._willSettleAt(o, t)
                        } else this._willSettleAt(new n(function(t) {
                            return t(e)
                        }), t)
                    } else this._willSettleAt(r(e), t)
                }, Pt.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    r._state === vt && (this._remaining--, 2 === e ? Et(r, n) : this._result[t] = n), 0 === this._remaining && bt(r, this._result)
                }, Pt.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    Tt(e, void 0, function(e) {
                        return n._settledAt(1, t, e)
                    }, function(e) {
                        return n._settledAt(2, t, e)
                    })
                };
                var xt = function(e) {
                    this[ft] = At++, this._result = this._state = void 0, this._subscribers = [], _t !== e && ("function" != typeof e && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof xt ? function(e, t) {
                        try {
                            t(function(t) {
                                wt(e, t)
                            }, function(t) {
                                Et(e, t)
                            })
                        } catch (t) {
                            Et(e, t)
                        }
                    }(this, e) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                };
                xt.all = function(e) {
                    return new Pt(this, e).promise
                }, xt.race = function(e) {
                    var t = this;
                    return nt(e) ? new t(function(n, r) {
                        for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
                    }) : new t(function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }, xt.resolve = pt, xt.reject = function(e) {
                    var t = new this(_t);
                    return Et(t, e), t
                }, xt._setAsap = function(e) {
                    it = e
                }, xt._asap = it, xt.prototype = {
                    constructor: xt,
                    then: lt,
                    "catch": function(e) {
                        return this.then(null, e)
                    }
                };
                var Lt = "function" == typeof window.Promise ? window.Promise : xt;

                function Mt() {
                    var e, t;
                    return {
                        promise: new Lt(function(n, r) {
                            e = n, t = r
                        }),
                        resolve: e,
                        reject: t
                    }
                }

                function Nt(e) {
                    return new Lt(function(t) {
                        a.setWindowTimeout(window, de(t), e)
                    })
                }
                var Ft, Ut = function() {
                        try {
                            var e = new MessageChannel;
                            return e.port1.start(), e
                        } catch (e) {
                            return null
                        }
                    }(),
                    qt = function() {
                        return Ut ? new Lt(function(e) {
                            var t = Ut.port1,
                                n = Ut.port2,
                                r = function() {
                                    e(), t.removeEventListener("message", r)
                                };
                            t.addEventListener("message", r), n.postMessage(void 0)
                        }) : Nt(0)
                    };

                function Bt(e, t) {
                    return void 0 === t && (t = e), (0, r.__awaiter)(this, void 0, Lt, function() {
                        var n, i;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Nt(e)];
                                case 1:
                                    return r.sent(), (n = a.requestWindowIdleCallback) ? [2, new Lt(function(e) {
                                        n(window, e, {
                                            timeout: t
                                        })
                                    })] : (i = Date.now() + 25, [2, {
                                        timeRemaining: function() {
                                            return Math.max(0, i - Date.now())
                                        },
                                        didTimeout: !1
                                    }]);
                            }
                        })
                    })
                }! function(e) {
                    e.Essential = "0", e.High = "1", e.Medium = "2", e.Low = "3"
                }(Ft || (Ft = {}));
                var Dt = ["0", "1", "2", "3"],
                    Wt = function() {
                        function e(e) {
                            var t = this;
                            this.measurementTasks = null, this.performingMeasurements = !1, this.recursionDepth = 0, this.bugsnagNonce = !0, this.performMeasurements = Qe.wrap(function() {
                                if (t.performingMeasurements) Qe.sendToBugsnag("performMeasurements() already in progress", "error");
                                else {
                                    var e = v(),
                                        n = e + 150;
                                    t.performingMeasurements = !0;
                                    try {
                                        if (!t.measurementTasks) return;
                                        e: for (var r = 0, i = Dt; r < i.length; r++)
                                            for (var o = i[r], s = t.measurementTasks[o], a = 0; a < s.length; a++) {
                                                s[a]();
                                                var u = v();
                                                if (u > n) {
                                                    t.bugsnagNonce || (t.bugsnagNonce = !0, Qe.sendToBugsnag("Out of time for remaining measurement tasks.", "warning", {
                                                        totalRunningTimeMs: u - e
                                                    }));
                                                    break e
                                                }
                                            }
                                        t.measurementTasks = null
                                    } finally {
                                        t.performingMeasurements = !1
                                    }
                                }
                            }), this.wnd = e
                        }
                        return e.create = function(e) {
                            return e.ResizeObserver ? new Ht(e, e.ResizeObserver) : new Vt(e)
                        }, e.prototype.requestMeasureTask = function(e, t) {
                            var n, r = this;
                            if (this.recursionDepth > 16) Qe.sendToBugsnag("Too much synchronous recursion in requestMeasureTask", "error");
                            else {
                                var i = this.performingMeasurements ? this.recursionDepth : 0,
                                    o = Qe.wrap(function() {
                                        var e = r.recursionDepth;
                                        r.recursionDepth = i + 1;
                                        try {
                                            t()
                                        } finally {
                                            r.recursionDepth = e
                                        }
                                    });
                                this.measurementTasks ? this.measurementTasks[e].push(o) : (this.measurementTasks = ((n = {})[Ft.Essential] = [], n[Ft.High] = [], n[Ft.Medium] = [], n[Ft.Low] = [], n[e] = [o], n), this.schedule())
                            }
                        }, e.prototype.performMeasurementsNow = function() {
                            this.performMeasurements()
                        }, e
                    }(),
                    Ht = function(e) {
                        function t(t, n) {
                            var r = e.call(this, t) || this;
                            return r._resizeObserver = n, r
                        }
                        return (0, r.__extends)(t, e), t.prototype.schedule = function() {
                            var e = this,
                                t = this._resizeObserver,
                                n = this.wnd.document,
                                r = n.documentElement || n.body || n.head,
                                i = new t(function() {
                                    i.unobserve(r), e.performMeasurements()
                                });
                            i.observe(r)
                        }, t
                    }(Wt),
                    Vt = function(e) {
                        function t(t) {
                            return e.call(this, t) || this
                        }
                        return (0, r.__extends)(t, e), t.prototype.schedule = function() {
                            (0, r.__awaiter)(void 0, void 0, Lt, function() {
                                var e;
                                return (0, r.__generator)(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return (e = a.requestWindowAnimationFrame) ? [4, new Lt(function(t) {
                                                return e(window, t)
                                            })] : [3, 2];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return [4, qt()];
                                        case 3:
                                            return t.sent(), [2];
                                    }
                                })
                            }).then(this.performMeasurements)
                        }, t
                    }(Wt);

                function jt(e, t) {
                    return t && e.pageLeft == t.pageLeft && e.pageTop == t.pageTop
                }

                function Kt(e, t) {
                    return t && e.width == t.width && e.height == t.height
                }

                function zt(e) {
                    return {
                        pageLeft: e.pageLeft,
                        pageTop: e.pageTop,
                        width: e.width,
                        height: e.height
                    }
                }
                var Yt = [
                        ["@import\\s+\"", "\""],
                        ["@import\\s+'", "'"]
                    ].concat([
                        ["url\\(\\s*\"", "\"\\s*\\)"],
                        ["url\\(\\s*'", "'\\s*\\)"],
                        ["url\\(\\s*", "\\s*\\)"]
                    ]),
                    Gt = ".*?" + /(?:[^\\](?:\\\\)*)/.source;
                new RegExp(Yt.map(function(e) {
                    var t = e[0],
                        n = e[1];
                    return "(" + t + ")(" + Gt + ")(" + n + ")"
                }).join("|"), "g");
                var Qt = /url\(["']?(.+?)["']?\)/g,
                    Xt = /^\s*\/\//;

                function Jt(e) {
                    return "BackCompat" == e.compatMode
                }

                function Zt(e) {
                    return e && e.body && e.documentElement ? Jt(e) ? [e.body.clientWidth, e.body.clientHeight] : [e.documentElement.clientWidth, e.documentElement.clientHeight] : [0, 0]
                }
                var $t = function() {
                    function e(e, t) {
                        var n, r;
                        this.hasKnownPosition = !1, this.pageLeft = 0, this.pageTop = 0, this.width = 0, this.height = 0, this.clientWidth = 0, this.clientHeight = 0;
                        var i = e.document;
                        if (i && i.documentElement && i.body) {
                            if ("visualViewport" in e && (this.hasKnownPosition = !0, this.pageTop = e.visualViewport.pageTop - e.visualViewport.offsetTop, this.pageLeft = e.visualViewport.pageLeft - e.visualViewport.offsetLeft, 0 == this.pageTop && (this.pageTop = 0), 0 == this.pageLeft && (this.pageLeft = 0)), n = Zt(i), this.clientWidth = n[0], this.clientHeight = n[1], void 0 !== t && this.clientWidth == t.clientWidth && this.clientHeight == t.clientHeight && t.width > 0 && t.height > 0) return this.width = t.width, void(this.height = t.height);
                            r = this.computeLayoutViewportSizeFromMediaQueries(e), this.width = r[0], this.height = r[1]
                        }
                    }
                    return e.prototype.computeLayoutViewportSizeFromMediaQueries = function(e) {
                        var t = this.findMediaValue(e, "width", this.clientWidth, this.clientWidth + 128);
                        void 0 === t && (t = this.tryToGet(e, "innerWidth")), void 0 === t && (t = this.clientWidth);
                        var n = this.findMediaValue(e, "height", this.clientHeight, this.clientHeight + 128);
                        return void 0 === n && (n = this.tryToGet(e, "innerHeight")), void 0 === n && (n = this.clientHeight), [t, n]
                    }, e.prototype.findMediaValue = function(e, t, n, r) {
                        if (a.matchMedia) {
                            var i = n,
                                o = r,
                                s = a.matchMedia(e, "(min-" + t + ": " + i + "px)");
                            if (null != s) {
                                if (s.matches && a.matchMedia(e, "(max-" + t + ": " + i + "px)").matches) return i;
                                for (; i <= o;) {
                                    var u = a.mathFloor((i + o) / 2);
                                    if (a.matchMedia(e, "(min-" + t + ": " + u + "px)").matches) {
                                        if (a.matchMedia(e, "(max-" + t + ": " + u + "px)").matches) return u;
                                        i = u + 1
                                    } else o = u - 1
                                }
                            }
                        }
                    }, e.prototype.tryToGet = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {
                            return
                        }
                    }, e
                }();

                function en(e, t) {
                    return new $t(e, t)
                }
                var tn = function(e, t) {
                    this.offsetLeft = 0, this.offsetTop = 0, this.pageLeft = 0, this.pageTop = 0, this.width = 0, this.height = 0, this.scale = 0;
                    var n = e.document;
                    if (n.body) {
                        "pageXOffset" in e ? (this.pageLeft = e.pageXOffset, this.pageTop = e.pageYOffset) : n.scrollingElement ? (this.pageLeft = n.scrollingElement.scrollLeft, this.pageTop = n.scrollingElement.scrollTop) : Jt(n) ? (this.pageLeft = n.body.scrollLeft, this.pageTop = n.body.scrollTop) : n.documentElement && (n.documentElement.scrollLeft > 0 || n.documentElement.scrollTop > 0) ? (this.pageLeft = n.documentElement.scrollLeft, this.pageTop = n.documentElement.scrollTop) : (this.pageLeft = n.body.scrollLeft || 0, this.pageTop = n.body.scrollTop || 0), this.offsetLeft = this.pageLeft - t.pageLeft, this.offsetTop = this.pageTop - t.pageTop;
                        var r = 0,
                            i = 0;
                        try {
                            r = e.innerWidth, i = e.innerHeight
                        } catch (e) {
                            return
                        }
                        if (0 != r && 0 != i) {
                            this.scale = t.width / r, this.scale < 1 && (this.scale = 1);
                            var o = t.width - t.clientWidth,
                                s = t.height - t.clientHeight;
                            this.width = r - o / this.scale, this.height = i - s / this.scale
                        }
                    }
                };

                function nn(e) {
                    var t = e;
                    return t.tagName ? "object" == typeof t.tagName ? "form" : t.tagName.toLowerCase() : null
                }
                var rn = new RegExp("[^\\s]"),
                    on = new RegExp("[\\s]*$");
                String.prototype;

                function sn(e) {
                    var t = rn.exec(e);
                    if (!t) return e;
                    for (var n = t.index, r = (t = on.exec(e)) ? e.length - t.index : 0, i = "\uFFFF", o = e.slice(n, e.length - r).split(/\r\n?|\n/g), s = 0; s < o.length; s++) i += "" + o[s].length, s != o.length - 1 && (i += ":");
                    return (n || r) && (i += " " + n + " " + r), i
                }
                var an = {},
                    un = 1;

                function cn(e) {
                    var t, n, r = pn(e);
                    return null !== (n = null === (t = null == r ? void 0 : r.watchKind) || void 0 === t ? void 0 : t.hasKinds()) && void 0 !== n && n
                }

                function hn(e) {
                    var t, n, r = pn(e);
                    return null !== (n = null === (t = null == r ? void 0 : r.watchKind) || void 0 === t ? void 0 : t.has(2)) && void 0 !== n && n
                }

                function dn(e) {
                    var t = pn(e);
                    return !!t && !!t.mask
                }

                function ln(e) {
                    var t = pn(e);
                    return null == t ? void 0 : t.watchKind
                }

                function pn(e) {
                    return e && e._fs ? an[e._fs] : null
                }

                function fn(e) {
                    return an[e]
                }

                function _n(e) {
                    try {
                        return e && e._fs || 0
                    } catch (e) {
                        return 0
                    }
                }

                function vn(e) {
                    return hn(e) ? 0 : _n(e)
                }

                function gn(e, t) {
                    e.parent && (t.unobserveSubtree(e.node), e.parent.child == e && (e.parent.child = e.next), e.parent.lastChild == e && (e.parent.lastChild = e.prev), e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent = e.prev = e.next = null, delete an[e.id], e.node._fs == e.id && (e.node._fs = 0), e.id = 0, e.child && mn(e.child))
                }

                function mn(e) {
                    for (var t = [e]; t.length > 0 && t.length < 1e4;) {
                        var n = t.pop();
                        delete an[n.id], n.node._fs == n.id && (n.node._fs = 0), n.id = 0, n.next && t.push(n.next), n.child && t.push(n.child)
                    }
                    Je(t.length < 1e4, "clearIds is fast")
                }
                var yn, wn = function() {
                        function e() {
                            var t = this;
                            this._wrappedTick = Qe.wrap(function() {
                                t.unregister(), t._tick && t._tick()
                            }), this._due = 0, this._id = e.nextId++
                        }
                        return e._rearm = function() {
                            e.checkedAlready = !1, e.lastCheck = 0
                        }, e.checkForBrokenSchedulers = function() {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var t, n;
                                return (0, r.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return !a.requestWindowAnimationFrame || e.checkedAlready || (t = v()) - e.lastCheck < 100 ? [2, !1] : (e.lastCheck = t, e.checkedAlready = !0, [4, new Lt(function(e) {
                                                return a.requestWindowAnimationFrame(window, e)
                                            })]);
                                        case 1:
                                            return r.sent(), n = [], Ce(e.registry, function(e) {
                                                var r = e.maybeForceTick(t);
                                                r && n.push(r)
                                            }), [4, Lt.all(n)];
                                        case 2:
                                            return r.sent(), a.requestWindowAnimationFrame(window, Qe.wrap(function() {
                                                e.checkedAlready = !1
                                            })), [2, !0];
                                    }
                                })
                            })
                        }, e.stopAll = function() {
                            Ce(this.registry, function(e) {
                                return e.stop()
                            })
                        }, e.prototype.setTick = function(e) {
                            this._tick = e
                        }, e.prototype.stop = function() {
                            this.cancel(), delete e.registry[this._id]
                        }, e.prototype.register = function(t) {
                            this._due = v() + 100 + 1.5 * t, e.registry[this._id] = this
                        }, e.prototype.unregister = function() {
                            delete e.registry[this._id]
                        }, e.prototype.maybeForceTick = function(e) {
                            if (e > this._due) return Lt.resolve().then(this._wrappedTick)["catch"](function() {})
                        }, e.registry = {}, e.nextId = 0, e.checkedAlready = !1, e.lastCheck = 0, e
                    }(),
                    Sn = function(e) {
                        function t(t) {
                            var n = e.call(this) || this;
                            return n._interval = t, n._handle = -1, n
                        }
                        return (0, r.__extends)(t, e), t.prototype.start = function(e) {
                            var t = this; - 1 == this._handle && (this.setTick(function() {
                                e(), t.register(t._interval)
                            }), this._handle = a.setWindowInterval(window, this._wrappedTick, this._interval), this.register(this._interval))
                        }, t.prototype.cancel = function() {
                            -1 != this._handle && (a.clearWindowInterval(window, this._handle), this._handle = -1, this.setTick(function() {}))
                        }, t
                    }(wn),
                    bn = function(e) {
                        function t(t, n, r) {
                            void 0 === n && (n = 0);
                            for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                            var s = e.call(this) || this;
                            return s.delay = n, s.timer = -1, s.setTick(function() {
                                t.apply(void 0 === r ? window : r, i), s.stop()
                            }), s
                        }
                        return (0, r.__extends)(t, e), t.prototype.start = function(e) {
                            return void 0 === e && (e = this.delay), this.delay = e, a.clearWindowTimeout(window, this.timer), this.timer = a.setWindowTimeout(window, this._wrappedTick, this.delay), this.register(e), this
                        }, t.prototype.cancel = function() {
                            -1 != this.timer && (a.clearWindowTimeout(window, this.timer), this.timer = -1)
                        }, t
                    }(wn),
                    En = function() {
                        function e(e, t, n) {
                            this.limit = e, this.breaker = n, this.remaining = 0, this.ticker = new Sn(t), this.open()
                        }
                        return e.prototype.guard = function(e) {
                            var t = this;
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                return 0 == t.remaining ? (t.breaker(), void t.remaining--) : t.remaining < 0 ? void 0 : (t.remaining--, e.apply(this, n))
                            }
                        }, e.prototype.close = function() {
                            return this.ticker.stop(), this
                        }, e.prototype.open = function() {
                            var e = this;
                            return this.remaining = this.limit, this.ticker.start(function() {
                                e.remaining = e.limit
                            }), this
                        }, e
                    }(),
                    Tn = function() {
                        function e() {
                            this._reported = 0, this._skew = 0, this._startTime = v()
                        }
                        return e.prototype.wallTime = function() {
                            return v()
                        }, e.prototype.now = function() {
                            var e = this.wallTime() - this._startTime;
                            return e < 0 && this._reportTimeSkew("timekeeper now() is negative"), e
                        }, e.prototype.startTime = function() {
                            return this._startTime
                        }, e.prototype.setStartTime = function(e) {
                            var t = this.wallTime();
                            this._startTime = e, e > t && (this._skew = e - t, this._skew > 1e3 && this._reportTimeSkew("timekeeper set with future ts"))
                        }, e.prototype._reportTimeSkew = function(e) {
                            this._reported++ <= 2 && Qe.sendToBugsnag(e, "error", {
                                skew: this._skew,
                                startTime: this._startTime,
                                wallTime: this.wallTime()
                            })
                        }, e
                    }(),
                    kn = function() {
                        function e(e, t) {
                            this._ctx = e, this._queue = t, this._fallback = !1, this._elemsWithDeferredChanges = {}, this._values = {}, this._radios = {}, yn = this
                        }
                        return e.prototype.hookEvents = function() {
                            (function() {
                                var e = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
                                if (!e || !e.set) return !1;
                                In || (Ve(HTMLInputElement, "value", xn), Ve(HTMLInputElement, "checked", xn), Ve(HTMLSelectElement, "value", xn), Ve(HTMLTextAreaElement, "value", xn), Ve(HTMLSelectElement, "selectedIndex", xn), Ve(HTMLOptionElement, "selected", xn), In = !0);
                                return !0
                            })() || (this._fallback = !0)
                        }, e.prototype.addInput = function(e) {
                            var t = vn(e);
                            if (t) {
                                var n = !1;
                                if (function(e) {
                                        switch (e.type) {
                                            case "checkbox":
                                            case "radio":
                                                return e.checked != e.hasAttribute("checked");
                                            default:
                                                return (e.value || "") != function(e) {
                                                    if ("select" != nn(e)) return e.getAttribute("value") || "";
                                                    var t = e,
                                                        n = t.querySelector("option[selected]") || t.querySelector("option");
                                                    if (!n) return "";
                                                    return n.value || ""
                                                }(e);
                                        }
                                    }(e) && (this._addChangeForElem(e), n = !0), this._fallback && (this._elemsWithDeferredChanges[t] = e), !n)
                                    if (Mn(e)) {
                                        var r = On(e);
                                        e.checked && (this._radios[r] = t)
                                    } else this._values[t] = Ln(e)
                            }
                        }, e.prototype.diffValue = function(e, t) {
                            var n = vn(e);
                            if (!n) return !1;
                            if (Mn(e)) {
                                var r = On(e);
                                return this._radios[r] === n !== ("true" === t)
                            }
                            return this._values[n] !== t
                        }, e.prototype.onChange = function(e, t, n) {
                            void 0 === n && (n = Ln(e)), vn(e) && e && (t || this.diffValue(e, n)) && this._addChangeForElem(e, t)
                        }, e.prototype.tick = function() {
                            for (var e in this._elemsWithDeferredChanges) {
                                var t = this._elemsWithDeferredChanges[e];
                                if (vn(t)) try {
                                    delete this._elemsWithDeferredChanges[e];
                                    var n = Ln(t);
                                    this.diffValue(t, n) && this._addChangeForElem(t)
                                } finally {
                                    this._fallback && (this._elemsWithDeferredChanges[e] = t)
                                } else delete this._elemsWithDeferredChanges[e], delete this._values[e], Mn(t) && delete this._radios[On(t)]
                            }
                        }, e.prototype.shutdown = function() {
                            yn = void 0
                        }, e.prototype._addChangeForElem = function(e, t) {
                            var n = this;
                            void 0 === t && (t = !1);
                            var r = vn(e);
                            if (r)
                                if (this._shouldDeferChange(r, e)) this._elemsWithDeferredChanges[r] = e;
                                else {
                                    var i = Ln(e);
                                    if (Mn(e)) {
                                        var o = On(e);
                                        "false" === i && this._radios[o] === r ? delete this._radios[o] : "true" === i && (this._radios[o] = r)
                                    } else this._values[r] = i;
                                    this._ctx.measurer.requestMeasureTask(Ft.Medium, function() {
                                        var o = e.getBoundingClientRect(),
                                            s = o.width > 0 && o.height > 0,
                                            a = dn(e) ? sn(i) : i;
                                        n._queue.enqueue({
                                            Kind: O.VALUECHANGE,
                                            Args: [r, a, t, s]
                                        })
                                    })
                                }
                        }, e.prototype._shouldDeferChange = function(e, t) {
                            if (this._elemsWithDeferredChanges[e]) return !0;
                            if ("select" !== nn(t)) return !1;
                            for (var n = t.options, r = 0; r < n.length; r++) {
                                if (!vn(n[r])) return !0
                            }
                            return !1
                        }, e
                    }(),
                    In = !1;
                var Cn, Rn = {};

                function An() {
                    try {
                        if (yn)
                            for (var e in Rn) {
                                var t = Rn[e],
                                    n = t[0],
                                    r = t[1];
                                yn.onChange(n, !1, r)
                            }
                    } finally {
                        Cn = null, Rn = {}
                    }
                }

                function On(e) {
                    if (!e) return "";
                    for (var t = e; t && "form" != nn(t);) t = t.parentElement;
                    return (t && "form" == nn(t) ? _n(t) : 0) + ":" + e.name
                }

                function Pn(e, t) {
                    if (void 0 === t && (t = 2), t <= 0) return e;
                    var n = nn(e);
                    return "option" != n && "optgroup" != n || !e.parentElement ? e : Pn(e.parentElement, t - 1)
                }

                function xn(e, t) {
                    if (yn) {
                        var n = Pn(e),
                            r = vn(n);
                        r && yn.diffValue(n, "" + t) && (Rn[r] = [n, "" + t], Cn || (Cn = new bn(An)).start())
                    }
                }

                function Ln(e) {
                    switch (e.type) {
                        case "checkbox":
                        case "radio":
                            return "" + e.checked;
                        default:
                            var t = e.value;
                            return t || (t = ""), "" + t;
                    }
                }

                function Mn(e) {
                    return e && "radio" == e.type
                }
                var Nn = n(470),
                    Fn = {};
                var Un = "__default";

                function qn(e) {
                    void 0 === e && (e = Un);
                    var t = Fn[e];
                    return t || (t = function() {
                        var e = document.implementation.createHTMLDocument("");
                        return e.head || e.documentElement.appendChild(e.createElement("head")), e.body || e.documentElement.appendChild(e.createElement("body")), e
                    }(), e !== Un && (t.open(), t.write(e), t.close()), Fn[e] = t), t
                }
                var Bn = new(function() {
                    function e() {
                        var e = qn(),
                            t = e.getElementById("urlresolver-base");
                        t || ((t = e.createElement("base")).id = "urlresolver-base", e.head.appendChild(t));
                        var n = e.getElementById("urlresolver-parser");
                        n || ((n = e.createElement("a")).id = "urlresolver-parser", e.head.appendChild(n)), this.base = t, this.parser = n
                    }
                    return e.prototype.parseUrl = function(e, t) {
                        var n = e;
                        if ("undefined" != typeof URL) try {
                            n || (n = document.baseURI);
                            var r = n ? new URL(t, n) : new URL(t);
                            if (r.href) return r
                        } catch (e) {}
                        return this.parseUrlUsingBaseAndAnchor(n, t)
                    }, e.prototype.parseUrlUsingBaseAndAnchor = function(e, t) {
                        this.base.setAttribute("href", e), this.parser.setAttribute("href", t);
                        var n = document.createElement("a");
                        return n.href = this.parser.href, n
                    }, e.prototype.resolveUrl = function(e, t) {
                        return this.parseUrl(e, t).href
                    }, e.prototype.resolveToDocument = function(e, t) {
                        var n = Wn(e);
                        return null == n ? t : this.resolveUrl(n, t)
                    }, e
                }());

                function Dn(e, t) {
                    return Bn.parseUrl(e, t)
                }

                function Wn(e) {
                    var t = e.document,
                        n = e.location.href;
                    if ("string" == typeof t.baseURI) n = t.baseURI;
                    else {
                        var r = t.getElementsByTagName("base")[0];
                        r && r.href && (n = r.href)
                    }
                    return "about:blank" == n && e.parent != e ? Wn(e.parent) : n
                }
                var Hn, Vn = ["allowReorder", "attributeName", "attributeType", "autoReverse", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "contentScriptType", "contentStyleType", "diffuseConstant", "edgeMode", "externalResourcesRequired", "filterRes", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "referrerPolicy", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].reduce(function(e, t) {
                        return e[t] = t, e[t.toUpperCase()] = t, e
                    }, {}),
                    jn = JSON.parse("{\"Any\":{\"iframe\":{\"src\":\"scrubUrl\",\"srcdoc\":\"erase\"},\"frame\":{\"src\":\"scrubUrl\",\"srcdoc\":\"erase\"},\"*\":{\"data-v-form-field\":\"erase\"}},\"Exclude\":{\"*\":{\"alt\":\"erase\",\"checked\":\"erase\",\"data\":\"erase\",\"placeholder\":\"erase\",\"src\":\"erase\",\"srcset\":\"erase\",\"href\":\"erase\",\"title\":\"erase\",\"value\":\"erase\"}},\"Mask\":{\"*\":{\"checked\":\"erase\",\"data\":\"erase\",\"alt\":\"maskText\",\"placeholder\":\"maskText\",\"title\":\"maskText\",\"value\":\"maskText\"},\"option\":{\"label\":\"maskText\"}}}");

                function Kn(e) {
                    return e ? e.sheet : void 0
                }

                function zn(e) {
                    try {
                        return e ? e.cssRules || e.rules : void 0
                    } catch (e) {
                        return
                    }
                }

                function Yn(e) {
                    return ("\"" === e[0] || "'" === e[0]) && e[e.length - 1] === e[0]
                }

                function Gn(e, t) {
                    var n = function(e, t) {
                        var n = e;
                        if ("function" == typeof n.getPropertyCSSValue) {
                            var r = n.getPropertyCSSValue(t);
                            if (null != r) {
                                var i;
                                switch (r.cssValueType) {
                                    case 1:
                                        i = r;
                                        break;
                                    case 2:
                                        if (1 !== r.length) return;
                                        var o = r.item(0);
                                        if (null == o) return;
                                        if (1 !== o.cssValueType) return;
                                        i = o;
                                        break;
                                    default:
                                        return;
                                }
                                if (19 === i.primitiveType) {
                                    var s = qn();
                                    Hn || (Hn = s.createElement("div"));
                                    var a = i.cssText;
                                    try {
                                        Hn.style.cssText = t + ": \"" + a + "\";";
                                        var u = Hn.style.getPropertyCSSValue(t);
                                        if (null == u) return;
                                        if (a !== u.cssText) return
                                    } catch (e) {
                                        return
                                    } finally {
                                        Hn.style.cssText = ""
                                    }
                                    return "\"" + a + "\""
                                }
                            }
                        }
                    }(e, t);
                    return void 0 !== n ? n : e.getPropertyValue(t)
                }
                var Qn = "EventQueue not defined for 'withEventQueueFor', likely caused by holding ref to callback",
                    Xn = function(e) {
                        var t = e.ownerDocument;
                        return t && t.defaultView
                    },
                    Jn = "_fs_stylesheet_hooked",
                    Zn = function() {
                        function e(t, n) {
                            var r = this;
                            this.ctx = t, this.queue = n, this.hooks = [], this.removeShims = [], this.nextSheetId = 1;
                            var i = e;
                            this.throttle = new En(i.ThrottleMax, i.ThrottleInterval, function() {
                                return setTimeout(function() {
                                    r.queue.enqueue({
                                        Kind: O.FAIL_THROTTLED,
                                        Args: [$.StyleSheetHooks]
                                    }), r.stop()
                                })
                            }), this.addInsert = this.throttle.guard(this.addInsert), this.addDelete = this.throttle.guard(this.addDelete)
                        }
                        return e.prototype.start = function() {
                            var e = this;
                            this.throttle.open();
                            var t = this.ctx.window;
                            if (t.CSSStyleSheet && t.StyleSheet) {
                                var n = t.CSSStyleSheet.prototype;
                                this._hook(n), this.removeShims.push(Ve(t.StyleSheet, "disabled", function(t, n) {
                                    return e.onDisableSheet(t, n)
                                }), Ve(t.Document, "adoptedStyleSheets", function(t, n) {
                                    return e.onSetAdoptedStyleSheets(t)
                                }), Ve(t.ShadowRoot, "adoptedStyleSheets", function(t, n) {
                                    return e.onSetAdoptedStyleSheets(t)
                                }))
                            }
                        }, e.prototype._hook = function(e) {
                            var t, n = this;
                            (t = He(e, "insertRule")) && (t.afterSync(function(e) {
                                n.addInsert(e.that, e.args[0], e.args[1])
                            }), this.hooks.push(t)), (t = He(e, "deleteRule")) && (t.afterSync(function(e) {
                                n.addDelete(e.that, e.args[0])
                            }), this.hooks.push(t)), Object.defineProperty(e, Jn, {
                                value: !0,
                                configurable: !0
                            })
                        }, e.prototype.onSetAdoptedStyleSheets = function(e) {
                            if (_n(e)) {
                                var t = e.adoptedStyleSheets;
                                if (t) {
                                    for (var n = [], r = 0, i = t; r < i.length; r++) {
                                        var o = i[r],
                                            s = this.snapshotConstructedStylesheet(o);
                                        n.push(s), !0 === o.disabled && this.onDisableSheet(o, !0)
                                    }
                                    this.queue.enqueue({
                                        Kind: O.ADOPTED_STYLESHEETS,
                                        Args: [_n(e), n]
                                    })
                                }
                            }
                        }, e.prototype.snapshotEl = function(e, t) {
                            void 0 === t && (t = 0);
                            var n = _n(e);
                            if (n) {
                                var r = Kn(e);
                                r && this.snapshot([Z.Node, n], r, t)
                            }
                        }, e.prototype.snapshotConstructedStylesheet = function(e) {
                            var t = ir(e);
                            if (void 0 !== t) return t;
                            var n = this.nextSheetId++;
                            return function(e, t) {
                                e._fs = t
                            }(e, n), this.snapshot([Z.Sheet, n], e), n
                        }, e.prototype.snapshot = function(e, t, n) {
                            void 0 === n && (n = 0);
                            var r = zn(t);
                            if (r) {
                                for (var i = [], o = n; o < r.length; o++) try {
                                    var s = or(er(r[o]));
                                    i.push(s)
                                } catch (e) {
                                    i.push("html {}")
                                }
                                this.queue.enqueue({
                                    Kind: O.CSSRULE_INSERT,
                                    Args: [e, i, n]
                                })
                            }
                        }, e.prototype.addInsert = function(e, t, n) {
                            var r = rr(e, Z.Node);
                            if (r && "string" == typeof t) {
                                var i = or(t);
                                this.withEventQueueForSheet(e, function(e) {
                                    return e.enqueue({
                                        Kind: O.CSSRULE_INSERT,
                                        Args: "number" == typeof n ? [r, [i], n] : [r, [i]]
                                    })
                                })
                            }
                        }, e.prototype.addDelete = function(e, t) {
                            var n = rr(e, Z.Node);
                            n && this.withEventQueueForSheet(e, function(e) {
                                return e.enqueue({
                                    Kind: O.CSSRULE_DELETE,
                                    Args: [n, t]
                                })
                            })
                        }, e.prototype.onDisableSheet = function(e, t) {
                            var n = rr(e, Z.Node);
                            n && this.withEventQueueForSheet(e, function(e) {
                                return e.enqueue({
                                    Kind: O.DISABLE_STYLESHEET,
                                    Args: [n, !!t]
                                })
                            })
                        }, e.prototype.withEventQueueForSheet = function(e, t) {
                            if (e.ownerNode) return n = this.ctx, r = e.ownerNode, i = t, void((o = R(Xn(r) || n.window)) && "function" == typeof o._withEventQueue && o._withEventQueue(n.recording.pageSignature(), function(e) {
                                var t = e;
                                i({
                                    enqueue: function(e) {
                                        Je(null != t, Qn) && t.enqueue(e)
                                    },
                                    enqueueFirst: function(e) {
                                        Je(null != t, Qn) && t.enqueueFirst(e)
                                    }
                                }), t = null
                            }));
                            var n, r, i, o;
                            t(this.queue)
                        }, e.prototype.stop = function() {
                            this.throttle.close();
                            for (var e = 0, t = this.hooks; e < t.length; e++) {
                                var n = t[e];
                                n.disable(), Object.defineProperty(n.getTarget(), Jn, {
                                    value: !1,
                                    configurable: !0
                                })
                            }
                            this.hooks = [];
                            for (var r = 0, i = this.removeShims; r < i.length; r++) {
                                (0, i[r])()
                            }
                            this.removeShims = []
                        }, e.prototype.ensureHook = function(e) {
                            this._skipInstanceHook(e) || !!e[Jn] || this._hook(e)
                        }, e.prototype.removeHook = function(e) {
                            if (!this._skipInstanceHook(e))
                                for (var t = 0; t < this.hooks.length; t++) {
                                    var n = this.hooks[t],
                                        r = n.getTarget();
                                    if (e === r) {
                                        n.disable(), this.hooks.splice(t, 1), Object.defineProperty(r, Jn, {
                                            value: !1,
                                            configurable: !0
                                        });
                                        break
                                    }
                                }
                        }, e.prototype._skipInstanceHook = function(e) {
                            return Object.getPrototypeOf(e) === this.ctx.window.CSSStyleSheet
                        }, e.ThrottleMax = 1e4, e.ThrottleInterval = 1e4, e
                    }(),
                    $n = document.createElement("div");
                $n.style.width = "initial";
                var er = "" != $n.style.cssText ? function(e) {
                    return e.cssText
                } : tr;

                function tr(e, t) {
                    if (void 0 === t && (t = 0), !Je(t <= 20, "No deep recursion for CSS rules")) return "html { /* Depth limit exceeded! */ }";
                    var n = function(e) {
                        switch (e.type) {
                            case CSSRule.PAGE_RULE:
                                var t = e.selectorText || "";
                                return t && Ie(t, "@page") ? t : "@page " + t;
                            case CSSRule.KEYFRAME_RULE:
                                return e.keyText;
                            case CSSRule.STYLE_RULE:
                                return e.selectorText;
                            case CSSRule.MEDIA_RULE:
                                return "@media " + e.media.mediaText;
                            case CSSRule.KEYFRAMES_RULE:
                                return "@keyframes " + e.name;
                            case CSSRule.SUPPORTS_RULE:
                                return "@supports " + e.conditionText;
                            default:
                                return null;
                        }
                    }(e);
                    if (null == n) return e.cssText;
                    var r = function(e, t) {
                        var n = e,
                            r = n.style;
                        if (r) {
                            for (var i = "", o = 0; o < r.length; o++) {
                                var s = r[o],
                                    a = Gn(r, s);
                                ("initial" === a || Yn(a)) && (i += s + ": " + a, "important" === r.getPropertyPriority(s) && (i += " !important"), i += "; ")
                            }
                            return [r.cssText, i].filter(Boolean).join("\n")
                        }
                        var u = n.cssRules;
                        if (!u) return null;
                        var c = "";
                        for (o = 0; o < u.length; o++) c += tr(u[o], t + 1);
                        return c
                    }(e, t);
                    return null == r ? e.cssText : n + " { " + r + "} "
                }
                var nr = /^\s*$/;

                function rr(e, t) {
                    var n = function(e) {
                        var t = ir(e);
                        if (t) return [Z.Sheet, t];
                        var n = _n(e.ownerNode);
                        if (n) return [Z.Node, n];
                        return
                    }(e);
                    if (n) {
                        var r = n[0],
                            i = n[1];
                        return r === t ? i : n
                    }
                }

                function ir(e) {
                    return e._fs
                }

                function or(e) {
                    return e.length <= ur ? e : (s("CSSRule too large, inserting dummy instead: " + e.length), ":root { --fs-dropped-large-rule: 0 }")
                }

                function sr(e) {
                    var t;
                    try {
                        if ((null === (t = e.classList) || void 0 === t ? void 0 : t.contains("fs-css-in-js")) || e.hasAttribute("data-fela-type")) return !0
                    } catch (e) {
                        Qe.sendToBugsnag(e, "error")
                    }
                    return !1
                }
                var ar = "(blocked)",
                    ur = 16e6;

                function cr(e, t, n) {
                    void 0 === n && (n = !1);
                    var r = e.textContent;
                    if (!r) return "";
                    var i = t;
                    if (!i && !(i = pn(e))) return "";
                    var o = r.length;
                    return o > ur ? (Qe.sendToBugsnag("Ignoring huge text node", "warning", {
                        length: o
                    }), "") : e.parentNode && "style" == nn(e.parentNode) ? n && sr(e.parentNode) ? "" : r : i.mask ? sn(r) : r
                }

                function hr(e) {
                    return Vn[e] || e.toLowerCase()
                }
                var dr = /^\s*((prefetch|preload|prerender)\s*)+$/i;

                function lr(e, t, n) {
                    var r, i, o, s = nn(e);
                    if (null === s || "" === t) return null;
                    if ("link" === s && dr.test(null !== (r = e.getAttribute("rel")) && void 0 !== r ? r : "")) return null;
                    var a = function(e) {
                        var n, r, i;
                        o = null !== (r = null === (n = jn[e][s]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : null === (i = jn[e]["*"]) || void 0 === i ? void 0 : i[t]
                    };
                    if (a("Any"), void 0 === o) {
                        var u = pn(e);
                        if (!u) return null;
                        (null === (i = u.watchKind) || void 0 === i ? void 0 : i.has(2)) ? a("Exclude"): u.mask && a("Mask")
                    }
                    if (void 0 === o) return n;
                    switch (o) {
                        case "erase":
                            return null;
                        case "scrubUrl":
                            return pr(n, {
                                source: "dom",
                                type: s
                            });
                        case "maskText":
                            return sn(n);
                        default:
                            return (0, Nn.nt)(o);
                    }
                }

                function pr(e, t) {
                    if ("" === e) return e;
                    switch (t.source) {
                        case "dom":
                            switch (n = t.type) {
                                case "frame":
                                case "iframe":
                                    return _r(e);
                                default:
                                    return fr(e);
                            }
                            case "event":
                                switch (n = t.type) {
                                    case O.AJAX_REQUEST:
                                    case O.NAVIGATE:
                                        return fr(e);
                                    case O.SET_FRAME_BASE:
                                        return _r(e);
                                    default:
                                        return (0, Nn.nt)(n);
                                }
                                case "log":
                                    return _r(e);
                                case "page":
                                    var n;
                                    switch (n = t.type) {
                                        case "base":
                                            return _r(e);
                                        case "referrer":
                                        case "url":
                                            return fr(e);
                                        default:
                                            return (0, Nn.nt)(n);
                                    }
                                    case "perfEntry":
                                        switch (t.type) {
                                            case "frame":
                                            case "iframe":
                                            case "navigation":
                                            case "other":
                                                return _r(e);
                                            default:
                                                return fr(e);
                                        }
                                        default:
                                            return (0, Nn.nt)(t);
                    }
                }

                function fr(e) {
                    return gr(e, wr)
                }

                function _r(e) {
                    return gr(e, mr)
                }

                function vr(e, t, n) {
                    if (e.pathname.toLowerCase().indexOf(t) >= 0) {
                        var r = e.pathname;
                        "/" !== r.charAt(0) && (r = "/" + r), e.pathname = r.replace(n, "$1" + ar)
                    }
                }

                function gr(e, t) {
                    var n = Dn("", e);
                    n.hash && (n.hash = function(e, t) {
                        if (t.test(e)) return "#" + ar;
                        return e
                    }(n.hash, yr));
                    for (var r = 0, i = Sr; r < i.length; r++) {
                        var o = i[r];
                        vr(n, o[0], o[1])
                    }
                    return n.search && n.search.length > 0 && (n.search = function(e, t) {
                        return e.split("?").map(function(e) {
                            return function(e, t) {
                                return e.replace("?", "").split("&").map(function(e) {
                                    return e.split("=")
                                }).map(function(e) {
                                    var n = e[0],
                                        r = e[1],
                                        i = e.slice(2);
                                    return t.test(n) && void 0 !== r ? [n, ar].concat(i) : [n, r].concat(i)
                                }).map(function(e) {
                                    var t = e[0],
                                        n = e[1],
                                        r = e.slice(2);
                                    return void 0 === n ? t : [t, n].concat(r).join("=")
                                }).join("&")
                            }(e, t)
                        }).join("?")
                    }(n.search, t)), n.href.substring(0, 2048)
                }
                var mr = new RegExp(".*", "i"),
                    yr = mr,
                    wr = mr,
                    Sr = [];

                function br(e) {
                    var t = e.hashes,
                        n = e.paths,
                        i = e.queries,
                        o = (0, r.__spreadArray)(["access_token"], t);
                    yr = new RegExp(o.join("|"), "i"), wr = new RegExp(i.join("|"), "i"), Sr = [];
                    for (var s = 0, a = n; s < a.length; s++) {
                        var u = a[s];
                        Sr.push([u.toLowerCase(), new RegExp("(\\/" + u + "\\/).*$", "i")])
                    }
                }
                var Er = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gi,
                    Tr = /(?:(http)|(ftp)|(file))[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/gi;

                function kr(e) {
                    return "function" == typeof(t = e.constructor) && Function.prototype.toString.call(t).indexOf("[native code]") > -1;
                    var t
                }
                var Ir = {
                        INPUT: !0,
                        TEXTAREA: !0,
                        NOSCRIPT: !0
                    },
                    Cr = function() {
                        function e(e, t, n) {
                            this._watcher = e, this._resizer = t, this._watchedElIntersectionObserver = n, an = {}, un = 1
                        }
                        return e.prototype.tokenizeNode = function(e, t, n, r, i, o, s) {
                            var a = this,
                                u = pn(t),
                                c = pn(n),
                                h = [];
                            return function(e) {
                                var t = un;
                                try {
                                    return e(), !0
                                } catch (e) {
                                    return un = t, !1
                                }
                            }(function() {
                                a.tokeNode(e, u, c, r, h, i, o, s)
                            }) || (h = []), h
                        }, e.prototype.tokeNode = function(e, t, n, r, i, o, s, a) {
                            for (var u, c = [{
                                    parentMirror: t,
                                    nextMirror: n,
                                    node: r
                                }], h = function(e, t) {
                                    return function(n) {
                                        n && e.push({
                                            parentMirror: t,
                                            nextMirror: null,
                                            node: n
                                        })
                                    }
                                }; c.length;) {
                                var d = c.pop();
                                if (d)
                                    if ("string" != typeof d) {
                                        var l = d.parentMirror,
                                            p = d.nextMirror,
                                            f = d.node,
                                            _ = this._encodeTagAndAttributes(e, l, p, f, i, o, s);
                                        if (null != _ && !(null === (u = _.watchKind) || void 0 === u ? void 0 : u.has(2))) {
                                            var v = 1 === f.nodeType ? f.shadowRoot : null;
                                            (v || f.lastChild) && a(_) && (c.push("]"), Me(f.lastChild, h(c, _)), v && c.push({
                                                parentMirror: _,
                                                nextMirror: null,
                                                node: v
                                            }), c.push("["))
                                        }
                                    } else i.push(d)
                            }
                        }, e.prototype._encodeTagAndAttributes = function(e, t, n, r, i, o, s) {
                            var a, u, c;
                            if ("script" == nn(r) || 8 == r.nodeType) return null;
                            var h, d, l, p, f = function(e) {
                                    return e.constructor === window.ShadowRoot
                                }(r),
                                _ = function(e) {
                                    var t = {
                                        id: un++,
                                        node: e
                                    };
                                    return an[t.id] = t, e._fs = t.id, t
                                }(r);
                            if ((f || (null == t ? void 0 : t.isInShadowDOM)) && (_.isInShadowDOM = !0), t && (f ? (t.shadow = _, _.parent = t) : (h = t, d = _, l = n, p = this._resizer, gn(d, p), d.parent = h, d.next = l, l && (d.prev = l.prev, l.prev = d), null == d.next ? (d.prev = h.lastChild, h.lastChild = d) : d.next.prev = d, null == d.prev ? h.child = d : d.prev.next = d)), 10 == r.nodeType) {
                                var v = r;
                                return i.push("<!DOCTYPE", ":name", v.name, ":publicId", v.publicId || "", ":systemId", v.systemId || ""), _
                            }
                            _.mask = null === (a = _.parent) || void 0 === a ? void 0 : a.mask;
                            try {
                                switch (r.nodeType) {
                                    default:
                                        i.push("<" + r.nodeName), Rr(r, o);
                                        break;
                                    case 11:
                                    case 9:
                                        var g = void 0;
                                        g = f ? kr(r) ? "#shadow" : "#polyfillshadow" : r.nodeName, i.push("<" + g), Rr(r, o);
                                        break;
                                    case 3:
                                        void 0 === _.mask && (_.mask = !_.parent || _.parent.mask), _.mask && this._resizer.observe(r.parentElement), Rr(r, o), i.push("<" + r.nodeName, cr(r, _, !0));
                                        break;
                                    case 1:
                                        var m = r;
                                        g = m.nodeName;
                                        "http://www.w3.org/2000/svg" == m.namespaceURI && (g = "svg:" + g), i.push("<" + g);
                                        var y = this.getWatchState(m, !!_.isInShadowDOM, e);
                                        null != y && (_.watchKind = y, y.has(16) && (this._resizer.observe(m), null === (u = this._watchedElIntersectionObserver) || void 0 === u || u.observe(m)), y.has(2) && (this._resizer.observe(m), i.push(":_fs_excluded", "true")), y.has(8) && (_.mask = !1), y.has(4) && (_.mask = !0)), _.mask && i.push(":_fs_masked", "true"), (null === (c = _.watchKind) || void 0 === c ? void 0 : c.has(2)) || Rr(r, o),
                                            function(e, t) {
                                                var n;
                                                if (ve && "output" === nn(e)) return;
                                                var r = e;
                                                if (void 0 !== r.hasAttributes && !r.hasAttributes() || void 0 === r.hasAttributes && r.attributes && r.attributes.length <= 0) return;
                                                if (void 0 !== r.getAttributeNames)
                                                    for (var i = 0, o = null !== (n = r.getAttributeNames()) && void 0 !== n ? n : []; i < o.length; i++) {
                                                        var s = o[i];
                                                        Ar(e, t, s, r.getAttribute(s))
                                                    } else
                                                        for (var a = 0; a < r.attributes.length; a++) {
                                                            var u = r.attributes[a];
                                                            null != u && Ar(e, t, u.name, u.value)
                                                        }
                                            }(m, function(e, t) {
                                                i.push(":" + e), i.push(t);
                                                try {
                                                    s(m, e, t)
                                                } catch (e) {
                                                    Qe.sendToBugsnag(e, "error")
                                                }
                                            });
                                }
                            } catch (e) {
                                Qe.sendToBugsnag(e, "error")
                            }
                            return _
                        }, e.prototype.getWatchState = function(e, t, n) {
                            return t || null == n || Ir[e.nodeName] ? this._watcher.isWatched(e) : n.get(e)
                        }, e
                    }();

                function Rr(e, t) {
                    try {
                        t(e)
                    } catch (e) {
                        Qe.sendToBugsnag(e, "error")
                    }
                }

                function Ar(e, t, n, r) {
                    if (null !== r) {
                        var i = hr(n),
                            o = lr(e, i, r);
                        null !== o && t(i, o)
                    }
                }
                var Or = JSON.parse("[{\"Selector\":\"input[type=password]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"input[type=hidden]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"[autocomplete^=cc-]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"object:not([type^=\\\"image/\\\"])\",\"Consent\":false,\"Type\":1},{\"Selector\":\"embed:not([type^=\\\"image/\\\"])\",\"Consent\":false,\"Type\":1},{\"Selector\":\"canvas\",\"Consent\":false,\"Type\":1},{\"Selector\":\"noscript\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-hide\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-exclude\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-exclude-without-consent\",\"Consent\":true,\"Type\":1},{\"Selector\":\".fs-mask\",\"Consent\":false,\"Type\":2},{\"Selector\":\".fs-mask-without-consent\",\"Consent\":true,\"Type\":2},{\"Selector\":\".fs-unmask\",\"Consent\":false,\"Type\":3},{\"Selector\":\".fs-unmask-with-consent\",\"Consent\":true,\"Type\":3},{\"Selector\":\".fs-block\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-record-with-consent\",\"Consent\":true,\"Type\":1}]"),
                    Pr = [2, 4, 8],
                    xr = [16, 32],
                    Lr = Pr.concat(xr),
                    Mr = function(e, t) {
                        return e | t
                    },
                    Nr = xr.reduce(Mr, 0),
                    Fr = Pr.reduce(Mr, 0),
                    Ur = function() {
                        function e(e) {
                            void 0 === e && (e = 0), this._elementKinds = e
                        }
                        return e.prototype.has = function(e) {
                            return !!(this._elementKinds & e)
                        }, e.prototype.set = function(t) {
                            if (this._elementKinds & Fr && t & Fr) {
                                var n = this._elementKinds | t,
                                    r = e._getStrictestPrivacyKind(n);
                                this._elementKinds = e._combineBits(r, this._elementKinds)
                            } else this._elementKinds |= t
                        }, e.prototype.hasKinds = function() {
                            return 0 !== this._elementKinds
                        }, e.areEqual = function(e, t) {
                            return null == e && null == t || null != e && null != t && e.equals(t)
                        }, e.prototype.getStrictestPrivacyKind = function() {
                            return e._getStrictestPrivacyKind(this._elementKinds)
                        }, e._getStrictestPrivacyKind = function(e) {
                            for (var t = 0, n = Pr; t < n.length; t++) {
                                var r = n[t];
                                if (e & r) return r
                            }
                            return null
                        }, e.needsToObserve = function(e, t) {
                            var n, r, i = null !== (n = null == e ? void 0 : e._elementKinds) && void 0 !== n ? n : 0;
                            return !!((null !== (r = null == t ? void 0 : t._elementKinds) && void 0 !== r ? r : 0) & ~i & Nr)
                        }, e.combineKindsPreservePrivacy = function(t, n) {
                            var r, i, o = e._combineBits(null !== (r = null == t ? void 0 : t._elementKinds) && void 0 !== r ? r : 0, null !== (i = null == n ? void 0 : n._elementKinds) && void 0 !== i ? i : 0);
                            return new e(o)
                        }, e._combineBits = function(e, t) {
                            return e & Fr | t & Nr
                        }, e.prototype.equals = function(e) {
                            return !!e && this._elementKinds === e._elementKinds
                        }, e
                    }();

                function qr(e) {
                    var t = document.documentElement || document.createElement("div");
                    try {
                        return a.elMatches(t, e), !0
                    } catch (t) {
                        return Qe.sendToBugsnag("Browser rejected rule", "warning", {
                            selector: e,
                            error: t.toString()
                        }), !1
                    }
                }
                var Br = {
                        1: "exclude",
                        2: "mask",
                        3: "unmask",
                        4: "watch",
                        5: "keep"
                    },
                    Dr = function() {
                        function e() {
                            this._withConsent = Wr(), this._withoutConsent = Wr()
                        }
                        return e.prototype.forConsentState = function(e) {
                            return e ? this._withConsent : this._withoutConsent
                        }, e.prototype.addElementBlockRules = function(e) {
                            var t = this,
                                n = Wr(),
                                r = Wr();
                            e.map(Vr).filter(function(e) {
                                return Hr(e.selector)
                            }).forEach(function(e) {
                                if (e.consent) return 8 === e.kind ? void n[e.kind].push(e) : void r[e.kind].push(e);
                                n[e.kind].push(e), r[e.kind].push(e)
                            });
                            for (var i = document.documentElement || document.createElement("div"), o = function(e, n) {
                                    try {
                                        if (0 === e.length) return;
                                        var r = e.map(function(e) {
                                            return e.selector
                                        }).join(", ");
                                        a.elMatches(i, r), n.push(r)
                                    } catch (n) {
                                        Qe.sendToBugsnag("Browser rejected optimistic merge rule", "warning"), t._fallback(e)
                                    }
                                }, s = 0, u = Lr; s < u.length; s++) {
                                var c = u[s];
                                o(n[c], this._withConsent[c]), o(r[c], this._withoutConsent[c])
                            }
                        }, e.prototype.addRule = function(e, t, n) {
                            if (this._tryToAddRule(e, t, n)) return !0;
                            switch (e) {
                                case 16:
                                case 8:
                                case 32:
                                    break;
                                case 4:
                                case 2:
                                default:
                                    this._withConsent[e] = ["*"], this._withoutConsent[e] = ["*"];
                            }
                            return !1
                        }, e.prototype._tryToAddRule = function(e, t, n) {
                            try {
                                if (Hr(n)) {
                                    if (t) {
                                        var r = this._getConsentRulesForKind(e);
                                        return this._mergeRule(e, r, n)
                                    }
                                    return this._mergeRule(e, this._withoutConsent, n) && this._mergeRule(e, this._withConsent, n)
                                }
                                return !0
                            } catch (e) {
                                return Qe.sendToBugsnag("Error adding block rule", "error", {
                                    selector: n,
                                    error: e.toString()
                                }), !1
                            }
                        }, e.prototype._mergeRule = function(e, t, n) {
                            var r = document.documentElement || document.createElement("div"),
                                i = e;
                            switch (i) {
                                case 2:
                                case 4:
                                case 8:
                                case 16:
                                case 32:
                                    break;
                                default:
                                    i = 2;
                            }
                            if (0 == t[i].length) return !!qr(n) && (t[i].push(n), !0);
                            var o = t[i].length - 1,
                                s = t[i][o].concat(", ", n);
                            try {
                                a.elMatches(r, s)
                            } catch (e) {
                                return !!qr(n) && (t[i].push(n), Qe.sendToBugsnag("Browser rejected merged rule", "warning", {
                                    kind: Br[i],
                                    selector: n,
                                    error: e.toString()
                                }), !0)
                            }
                            return t[i][o] = s, !0
                        }, e.prototype.addElementBlock = function(e) {
                            var t = Vr(e),
                                n = t.kind,
                                r = t.consent,
                                i = t.selector;
                            return this.addRule(n, r, i)
                        }, e.prototype._fallback = function(e) {
                            for (var t = 0, n = e; t < n.length; t++) {
                                var r = n[t],
                                    i = r.kind,
                                    o = r.consent,
                                    s = r.selector;
                                this.addRule(i, o, s)
                            }
                        }, e.prototype._getConsentRulesForKind = function(e) {
                            var t = 8 === e;
                            return this.forConsentState(t)
                        }, e
                    }();

                function Wr() {
                    for (var e = Object.create ? Object.create(null) : {}, t = 0, n = Lr; t < n.length; t++) {
                        e[n[t]] = []
                    }
                    return e
                }

                function Hr(e) {
                    return !e.match(Xt) && "" != e.trim()
                }

                function Vr(e) {
                    var t = 2;
                    switch (e.Type) {
                        case ie.Unset:
                        case ie.Exclude:
                            t = 2;
                            break;
                        case ie.Mask:
                            t = 4;
                            break;
                        case ie.Unmask:
                            t = 8;
                            break;
                        case ie.Watch:
                            t = 16;
                            break;
                        case ie.Keep:
                            t = 32;
                            break;
                        default:
                            (0, Nn.nt)(e.Type, "Unexpected block type: " + e.Type);
                    }
                    return {
                        kind: t,
                        consent: e.Consent,
                        selector: e.Selector
                    }
                }

                function jr(e) {
                    if (!(null == e ? void 0 : e.hasKinds())) return 0;
                    var t = e.getStrictestPrivacyKind();
                    return null === t ? 0 : Pr.length - Pr.indexOf(t)
                }
                var Kr = function() {
                    function e() {
                        this._rules = new Dr, this._qsaStrategyEnabled = !ge
                    }
                    return e.prototype.initialize = function(e) {
                        var t = e.blocks,
                            n = e.keeps,
                            i = e.watches,
                            o = (0, r.__spreadArray)([], Or);
                        if (t)
                            for (var s = 0, a = t; s < a.length; s++) {
                                var u = a[s];
                                o.push(u)
                            }
                        if (i)
                            for (var c = 0, h = i; c < h.length; c++) {
                                var d = h[c];
                                o.push({
                                    Type: ie.Watch,
                                    Consent: z.RevokeConsent,
                                    Selector: d.Selector
                                })
                            }
                        this._rules.addElementBlockRules(o), n && this._batchElementKeeps(n)
                    }, e.prototype.isWatched = function(e) {
                        var t, n = new Ur,
                            r = this._rules.forConsentState(null !== (t = this._userHasConsented) && void 0 !== t && t),
                            i = this._firstMatches(e, Pr, r) | this._findMatches(e, xr, r);
                        return n.set(i), n.hasKinds() ? n : null
                    }, e.prototype._firstMatches = function(e, t, n) {
                        return this._findMatches(e, t, n, !0)
                    }, e.prototype._findMatches = function(e, t, n, r) {
                        void 0 === r && (r = !1);
                        for (var i = 0, o = 0, s = t; o < s.length; o++) {
                            for (var u = s[o], c = !1, h = 0, d = n[u]; h < d.length; h++) {
                                var l = d[h];
                                if (a.elMatches(e, l)) {
                                    i |= u, c = !0;
                                    break
                                }
                            }
                            if (c && r) break
                        }
                        return i
                    }, e.prototype.addElementBlock = function(e) {
                        return this._rules.addElementBlock(e)
                    }, e.prototype._batchElementKeeps = function(e) {
                        for (var t = 0, n = e; t < n.length; t++) {
                            var r = n[t];
                            this.addElementKeep(r)
                        }
                    }, e.prototype.addElementKeep = function(e) {
                        switch (e.Type) {
                            case oe.Click:
                                break;
                            default:
                                return !1;
                        }
                        return this.addRule(32, e.Consent, e.Selector)
                    }, e.prototype.addRule = function(e, t, n) {
                        return this._rules.addRule(e, t, n)
                    }, e.prototype.getConsent = function() {
                        return this._userHasConsented
                    }, e.prototype.initializeConsent = function(e) {
                        void 0 === this._userHasConsented && this._setConsent(e, !1)
                    }, e.prototype.setConsent = function(e) {
                        this._setConsent(e, !0)
                    }, e.prototype._setConsent = function(e, t) {
                        void 0 === t && (t = !0), this._userHasConsented !== e && (this._userHasConsented = e, t && this.onConsentChange && this.onConsentChange())
                    }, e.prototype.allWatchedElements = function(e) {
                        var t;
                        if (!this._qsaStrategyEnabled) return null;
                        for (var n = new WeakMap, r = !1, i = function(e, t) {
                                var i, o = null !== (i = n.get(e)) && void 0 !== i ? i : new Ur;
                                o.set(t), n.set(e, o), r = !0
                            }, o = this._rules.forConsentState(null !== (t = this._userHasConsented) && void 0 !== t && t), s = 0, u = Lr; s < u.length; s++)
                            for (var c = u[s], h = 0, d = o[c]; h < d.length; h++) {
                                var l = d[h];
                                Yr(e) && a.elMatches(e, l) && i(e, c);
                                for (var p = zr(e, l), f = 0; f < p.length; f++) i(p[f], c)
                            }
                        return r ? n : null
                    }, e
                }();

                function zr(e, t) {
                    return Yr(e) ? a.elQuerySelectorAll(e, t) : function(e) {
                        return 9 === e.nodeType
                    }(e) ? a.docQuerySelectorAll(e, t) : function(e) {
                        return 11 === e.nodeType
                    }(e) ? a.docFragQuerySelectorAll(e, t) : e.querySelectorAll(t)
                }

                function Yr(e) {
                    return 1 === e.nodeType
                }
                var Gr = function() {
                        function e(e) {
                            this._ctx = e, this._recordedDims = {}, this._observedDims = {}
                        }
                        return e.create = function(e) {
                            return Qr.isSupported(e.window) ? new Qr(e) : new Xr(e)
                        }, e.prototype.collect = function(e) {
                            var t = [];
                            for (var n in this._observedDims) this.addPlaceholderResize(e, t, Number(n));
                            return this._observedDims = {}, t
                        }, e.prototype.isObserved = function(e) {
                            return !!this._recordedDims[e]
                        }, e.prototype.addEntry = function(e) {
                            try {
                                var t = _n(e);
                                if (!t) return;
                                if (1 != e.nodeType) return;
                                var n = e;
                                this._observedDims[t] = n.getBoundingClientRect();
                                var r = this._ctx.queue();
                                if (!this._recordedDims[t] && void 0 !== r)
                                    for (var i = this.flushSizeEvents(t), o = 0, s = i; o < s.length; o++) {
                                        var a = s[o];
                                        r.enqueue(a)
                                    }
                            } catch (e) {}
                        }, e.prototype.addPlaceholderResize = function(e, t, n) {
                            for (var i = 0, o = this.flushSizeEvents(n); i < o.length; i++) {
                                var s = o[i];
                                t.push((0, r.__assign)((0, r.__assign)({}, s), {
                                    When: e
                                }))
                            }
                        }, e.prototype.flushSizeEvents = function(e) {
                            var t = this._observedDims[e];
                            if (!t) return [];
                            var n = fn(e);
                            if (!n) return [];
                            var r = n.watchKind,
                                i = t.width,
                                o = t.height,
                                s = this._recordedDims[e];
                            if (s && s.w == i && s.h == o) return [];
                            this._recordedDims[e] = {
                                w: i,
                                h: o
                            };
                            var a = [];
                            if (null == r ? void 0 : r.has(16)) {
                                var u = 0 != i && 0 != o;
                                (!!s && 0 != s.w && 0 != s.h) != u && a.push({
                                    Kind: O.WATCHED_ELEM,
                                    Args: [e, u]
                                })
                            }
                            var c = n.node,
                                h = ("scrollLeft" in c);
                            return ((null == r ? void 0 : r.has(2)) || n.mask || h) && (a.push({
                                Kind: O.PLACEHOLDER_SIZE,
                                Args: [e, i, o]
                            }), h && a.push({
                                Kind: O.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                                Args: [e, c.scrollWidth, c.scrollHeight]
                            })), a
                        }, e
                    }(),
                    Qr = function(e) {
                        function t(t) {
                            var n = e.call(this, t) || this;
                            return n._inlineGroups = new WeakMap, n._observedInlines = new WeakMap, n._obs = new t.window.ResizeObserver(function(e) {
                                for (var t = 0, r = e; t < r.length; t++) {
                                    var i = r[t].target;
                                    n.addEntry(i)
                                }
                            }), n._inlineGroupObs = new t.window.ResizeObserver(function(e) {
                                for (var t = 0, r = e; t < r.length; t++) {
                                    var i = r[t].target;
                                    n._addEntriesForInlineGroup(i)
                                }
                            }), n
                        }
                        return (0, r.__extends)(t, e), t.isSupported = function(e) {
                            return "function" == typeof e.ResizeObserver
                        }, t.prototype.observe = function(e) {
                            var t = this;
                            if (e && 1 == e.nodeType) {
                                var n = e;
                                this._obs.unobserve(n), this._obs.observe(n), this._ctx.measurer.requestMeasureTask(Ft.Medium, function() {
                                    t._addToInlineGroupIfNeeded(n)
                                })
                            }
                        }, t.prototype.unobserveSubtree = function(e) {}, t.prototype.nodeChanged = function(e) {
                            var t = this,
                                n = this._observedInlines.get(e);
                            "number" == typeof n && _n(e) === n && this._ctx.measurer.requestMeasureTask(Ft.Medium, function() {
                                t.addEntry(e)
                            })
                        }, t.prototype._addEntriesForInlineGroup = function(e) {
                            var t = this._inlineGroups.get(e);
                            if (t)
                                for (var n in t) {
                                    var r = fn(t[n]);
                                    r ? this.addEntry(r.node) : delete t[n]
                                }
                        }, t.prototype._addToInlineGroupIfNeeded = function(e) {
                            var t = this,
                                n = _n(e);
                            if (n) {
                                var r = this._nearestNonInlineElementAncestorOf(e);
                                if (r && r !== e) {
                                    this._observedInlines.set(e, n), this.addEntry(e);
                                    var i = this._inlineGroups.get(r);
                                    i || (i = Object.create(null), this._inlineGroups.set(r, i)), i[n] = n, a.setWindowTimeout(this._ctx.window, de(function() {
                                        t._inlineGroupObs.observe(r)
                                    }), 0)
                                }
                            }
                        }, t.prototype._nearestNonInlineElementAncestorOf = function(e) {
                            for (var t = 0, n = e;;) {
                                if (t++ > 1e3) return null;
                                if (!n || 1 != n.nodeType) return null;
                                var r = n;
                                if (getComputedStyle(r).display.indexOf("inline") < 0) return r;
                                n = n.parentNode
                            }
                        }, t
                    }(Gr),
                    Xr = function(e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return (0, r.__extends)(t, e), t.prototype.observe = function(e) {
                            var t = this;
                            if (e && 1 == e.nodeType) {
                                var n = e;
                                this.growWatchedIndex(pn(e)), this._ctx.measurer.requestMeasureTask(Ft.Medium, function() {
                                    t.addEntry(n)
                                })
                            }
                        }, t.prototype.unobserveSubtree = function(e) {
                            var t = pn(e);
                            t && this.clearWatchedIndex(t)
                        }, t.prototype.nodeChanged = function(e) {
                            var t = this,
                                n = this.relatedWatched(e);
                            this._ctx.measurer.requestMeasureTask(Ft.Medium, function() {
                                for (var e = 0, r = n; e < r.length; e++) {
                                    var i = r[e];
                                    t.addEntry(i)
                                }
                            })
                        }, t.prototype.watchedChildren = function(e) {
                            return e.watchedChildren
                        }, t.prototype.growWatchedIndex = function(e) {
                            if (e && cn(e.node))
                                for (var t = e, n = e.parent; n; n = n.parent) {
                                    if (this.watchedChildren(n) || (n.watchedChildren = {}), this.watchedChildren(t))
                                        for (var r in this.watchedChildren(t)) delete this.watchedChildren(n)[r];
                                    if (this.watchedChildren(n)[t.id] = t, Ae(this.watchedChildren(n), 2)) t = n;
                                    else if (Oe(this.watchedChildren(n), 2)) break
                                }
                        }, t.prototype.relatedWatched = function(e) {
                            var t = [],
                                n = pn(e);
                            if (n)
                                for (var r = [n], i = 0; r.length && ++i < 1e3;) {
                                    var o = r.pop();
                                    cn(o.node) && t.push(o.node), this.watchedChildren(o) && Ce(this.watchedChildren(o), function(e) {
                                        r.push(e)
                                    })
                                } else {
                                    for (var s = e; s && !_n(s);) s = s.parentNode;
                                    s && cn(s) && t.push(s)
                                }
                            return t
                        }, t.prototype.clearWatchedIndex = function(e) {
                            if (Oe(this.watchedChildren(e), 0) || cn(e.node))
                                for (var t = this.watchedChildren(e) && Oe(this.watchedChildren(e), 1) || cn(e.node) ? e.id : function(e) {
                                        for (var t in e)
                                            if (Object.prototype.hasOwnProperty.call(e, t)) return t
                                    }(this.watchedChildren(e)), n = t ? e.parent : null; n && this.watchedChildren(n) && this.watchedChildren(n)[t];) {
                                    if (delete this.watchedChildren(n)[t], Ae(this.watchedChildren(n), 1)) {
                                        var r = n.id,
                                            i = Re(this.watchedChildren(n));
                                        for (n = n.parent; n && this.watchedChildren(n) && this.watchedChildren(n)[r];) delete this.watchedChildren(n)[r], this.watchedChildren(n)[i.id] = i, n = n.parent;
                                        break
                                    }
                                    n = n.parent
                                }
                        }, t
                    }(Gr),
                    Jr = {
                        attributeName: null,
                        attributeNamespace: null,
                        addedNodes: [],
                        removedNodes: [],
                        nextSibling: null,
                        previousSibling: null,
                        oldValue: null
                    };

                function Zr(e) {
                    return (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, Jr), e), {
                        type: "childList"
                    })
                }

                function $r(e, t) {
                    return 0 === t.length ? Zr({
                        target: e
                    }) : Zr({
                        addedNodes: t,
                        nextSibling: Pe(t[t.length - 1]),
                        previousSibling: Le(t[0]),
                        target: e
                    })
                }
                var ei = function() {
                    function e(e, t, n, r, i, o, s) {
                        var a = this;
                        void 0 === n && (n = function() {}), void 0 === r && (r = function() {}), void 0 === i && (i = function() {}), void 0 === s && (s = function() {
                            return !0
                        }), this._watcher = t, this._nodeVisitor = n, this._beforeRemove = r, this._attrVisitor = i, this._watchedElIntersectionObserver = o, this._visitChildren = s, this._sentDomSnapshot = !1, this._newShadowContainers = [], this._toRefresh = [], this._records = [], this._setPropertyWasThrottled = !1, this._wnd = e.window, this._resizer = Gr.create(e), this._encoder = new Cr(t, this._resizer, this._watchedElIntersectionObserver), Je(!this._watcher.onConsentChange, "This is the only consent change listener."), this._watcher.onConsentChange = function() {
                            return a.updateConsent()
                        }
                    }
                    return e.prototype.hookMutations = function(e) {
                        void 0 === e && (e = this._wnd.document), this._root = e, this._sentDomSnapshot = !1;
                        var t = !0;
                        if (fe) try {
                            this.setUpIEWorkarounds()
                        } catch (e) {
                            s("Error setting up IE workarounds for mutation watcher: " + e), t = !1
                        }
                        t && (this._observer = new MutationObserver(this._addMutations.bind(this)))
                    }, e.prototype._observerOff = function() {
                        this._observer && this._observer.disconnect()
                    }, e.prototype._addMutations = function(e) {
                        for (var t = 0, n = e; t < n.length; t++) {
                            var r = n[t];
                            this._records.push(r)
                        }
                    }, e.prototype.resizer = function() {
                        return this._resizer
                    }, e.prototype.shutdown = function() {
                        this._observer && this._observer.disconnect();
                        var e = pn(this._root);
                        e && mn(e), this._records = [], fe && this.tearDownIEWorkarounds(), this._watcher.onConsentChange = null, this._attachShadowHook && (this._attachShadowHook.disable(), this._attachShadowHook = null)
                    }, e.prototype.processMutations = function(e) {
                        if (!this._root) return [];
                        var t = [];
                        if (this.maybeGetInitialSnapshot(e, t), this._setPropertyWasThrottled && (t.push({
                                Kind: O.FAIL_THROTTLED,
                                Args: [$.SetPropertyHooks],
                                When: e
                            }), this._setPropertyWasThrottled = !1), this._records.length > 0 || this._toRefresh.length > 0) {
                            var n = {},
                                r = {};
                            for (var i in this.processRecords(e, t, r, n), r) {
                                var o = i.split("\t");
                                t.push({
                                    Kind: O.MUT_ATTR,
                                    Args: [parseInt(o[0], 10), o[1], r[i]],
                                    When: e
                                })
                            }
                            for (var i in n) t.push({
                                Kind: O.MUT_TEXT,
                                Args: [parseInt(i, 10), n[i]],
                                When: e
                            })
                        }
                        var s = this._newShadowContainers;
                        this._newShadowContainers = [];
                        for (var a = 0; a < s.length; a++) {
                            var u = s[a].shadowRoot;
                            u && 0 != _n(s[a]) && 0 == _n(u) && (this.observe(u), this.genShadow(null, e, t, s[a], u))
                        }
                        return t.push.apply(t, this._resizer.collect(e)), this._records = [], t
                    }, e.prototype.recordingIsDetached = function() {
                        return !!this._root && this._root != this._wnd.document
                    }, e.prototype.maybeGetInitialSnapshot = function(e, t) {
                        if (!this._sentDomSnapshot && this._root) {
                            var n = this._watcher.allWatchedElements(this._root);
                            this.genInsert(n, e, t, null, this._root, null), this._resizer.nodeChanged(this._root), this._observer && this.observe(this._root), this._sentDomSnapshot = !0, this.hookAttachShadow()
                        }
                    }, e.prototype.hookAttachShadow = function() {
                        var e = this;
                        this._attachShadowHook = He(Element.prototype, "attachShadow", !0), this._attachShadowHook && this._attachShadowHook.before(function(t) {
                            t.that.shadowRoot || e._newShadowContainers.push(t.that)
                        })
                    }, e.prototype.observe = function(e) {
                        var t;
                        try {
                            null === (t = this._observer) || void 0 === t || t.observe(e, {
                                childList: !0,
                                attributes: !0,
                                characterData: !0,
                                subtree: !0,
                                attributeOldValue: !0,
                                characterDataOldValue: !0
                            })
                        } catch (e) {}
                    }, e.prototype.processRecords = function(e, t, n, r) {
                        for (var i, o = this, s = {}, a = {}, u = function(n) {
                                if (pn(n)) {
                                    o.genRemove(e, t, pn(n));
                                    var r = pn(n.parentNode);
                                    r && (a[r.id] = r.node)
                                }
                            }, c = 0; c < this._records.length; ++c) try {
                            var h = this._records[c],
                                d = _n(h.target);
                            if (!d) continue;
                            switch (s[d] = h.target, h.type) {
                                case "childList":
                                    if (h.removedNodes.length > 0)
                                        for (var l = 0; l < h.removedNodes.length; ++l) {
                                            (f = pn(h.removedNodes[l])) && f.id && this.genRemove(e, t, f)
                                        }
                                    if (h.addedNodes.length > 0) {
                                        a[d] = h.target;
                                        var p = ni(h.target);
                                        p && (a[p.id] = p.node)
                                    }
                                    break;
                                case "characterData":
                                    hn(h.target) || h.oldValue != h.target.textContent && (r[d] = cr(h.target));
                                    break;
                                case "attributes":
                                    var f, _ = ln(b = h.target),
                                        v = this._watcher.isWatched(b);
                                    if (jr(v) > jr(_)) {
                                        u(b);
                                        break
                                    }
                                    Ur.needsToObserve(_, v) && (this._resizer.observe(b), (null == v ? void 0 : v.has(16)) && (null === (i = this._watchedElIntersectionObserver) || void 0 === i || i.observe(b)), (f = pn(b)) && (f.watchKind = Ur.combineKindsPreservePrivacy(_, v)));
                                    var g = ti(h.attributeNamespace) + (h.attributeName || ""),
                                        m = hr(g);
                                    if (b.hasAttribute(g)) {
                                        var y = h.target.getAttribute(g);
                                        h.oldValue != y && (y = lr(h.target, m, y || ""), this._attrVisitor(h.target, m, y || ""), null !== y && (n[d + "\t" + m] = y))
                                    } else n[d + "\t" + m] = null;
                            }
                        } catch (e) {}
                        for (var w = 0, S = this._toRefresh; w < S.length; w++) {
                            var b = S[w];
                            try {
                                u(b)
                            } catch (e) {
                                Qe.sendToBugsnag(e, "error")
                            }
                        }
                        for (var E in this._toRefresh = [], a) {
                            var T = pn(k = a[E]);
                            T && T.id && this.diff(e, t, k, T.child, k.firstChild)
                        }
                        for (var E in s) {
                            var k = s[E];
                            this._resizer.nodeChanged(k)
                        }
                    }, e.prototype._checkForMissingInsertions = function(e) {
                        if (!this._sentDomSnapshot || !e || !this._root) return [];
                        return this.walkAddRecords(this._root), []
                    }, e.prototype.walkAddRecords = function(e) {
                        var t = this;
                        _n(e) || null === e.parentNode ? xe(e.firstChild, function(e) {
                            t.walkAddRecords(e)
                        }) : this._records.push($r(e.parentNode, [e]))
                    }, e.prototype.diff = function(e, t, n, r, i) {
                        for (var o = [], s = r, a = i; s && a;) {
                            var u = pn(a);
                            _n(a) ? u && s.id == u.id ? (s = s.next, a = Pe(a)) : (o.push({
                                remove: s
                            }), s = s.next) : (o.push({
                                insert: [n, a, s.node]
                            }), a = Pe(a))
                        }
                        for (; s; s = s.next) o.push({
                            remove: s
                        });
                        xe(a, function(e) {
                            o.push({
                                insert: [n, e, null]
                            })
                        });
                        for (var c = !1, h = 0; h < o.length; h++) {
                            var d = o[h];
                            d.insert ? this.genInsert(null, e, t, d.insert[0], d.insert[1], d.insert[2]) : d.remove && (c = !0, this.genRemove(e, t, d.remove))
                        }
                        Je(!c, "All remove events should have been generated earlier, in MutationWatcher.processMutations")
                    }, e.prototype.genShadow = function(e, t, n, r, i) {
                        var o = _n(r),
                            s = v(),
                            a = this.genDocStream(e, r, i, null),
                            u = v() - s;
                        a.length > 0 && n.push({
                            Kind: O.MUT_SHADOW,
                            Args: [o, a],
                            When: t
                        }, {
                            Kind: O.TIMING,
                            Args: [
                                [L.Internal, P.Serialization, x.NodeEncoding, t, u]
                            ],
                            When: t
                        })
                    }, e.prototype.genInsert = function(e, t, n, r, i, o) {
                        var s = _n(r) || -1,
                            a = _n(o) || -1,
                            u = -1 === s && -1 === a,
                            c = v(),
                            h = this.genDocStream(e, r, i, o),
                            d = v() - c;
                        h.length > 0 && n.push({
                            Kind: O.MUT_INSERT,
                            Args: [s, a, h],
                            When: t
                        }, {
                            Kind: O.TIMING,
                            Args: [
                                [L.Internal, P.Serialization, u ? x.DomSnapshot : x.NodeEncoding, t, d]
                            ],
                            When: t
                        })
                    }, e.prototype.genDocStream = function(e, t, n, r) {
                        var i = this;
                        if (t && hn(t)) return [];
                        for (var o = [], s = this._encoder.tokenizeNode(e, t, r, n, function(e) {
                                if (1 == e.nodeType) {
                                    var t = e;
                                    t.shadowRoot && i.observe(t.shadowRoot)
                                }
                                i._nodeVisitor(e, o)
                            }, this._attrVisitor, this._visitChildren), a = 0, u = o; a < u.length; a++) {
                            (0, u[a])()
                        }
                        return s
                    }, e.prototype.genRemove = function(e, t, n) {
                        var r = n.id;
                        if (this._beforeRemove(n), gn(n, this._resizer), t.length > 0) {
                            var i = t[t.length - 1];
                            if (i.Kind == O.MUT_REMOVE) return void i.Args.push(r)
                        }
                        t.push({
                            Kind: O.MUT_REMOVE,
                            Args: [r],
                            When: e
                        })
                    }, e.prototype.setUpIEWorkarounds = function() {
                        var t = this;
                        if (_e) {
                            var n = Object.getOwnPropertyDescriptor(Node.prototype, "textContent"),
                                i = n && n.set;
                            if (!n || !i) throw new Error("Missing textContent setter -- not safe to record mutations.");
                            Object.defineProperty(Element.prototype, "textContent", (0, r.__assign)((0, r.__assign)({}, n), {
                                set: function(e) {
                                    try {
                                        for (var t = void 0; t = this.firstChild;) this.removeChild(t);
                                        if (null === e || "" == e) return;
                                        var n = (this.ownerDocument || document).createTextNode(e);
                                        this.appendChild(n)
                                    } catch (t) {
                                        i && i.call(this, e)
                                    }
                                }
                            }))
                        }
                        this._setPropertyThrottle = new En(e.ThrottleMax, e.ThrottleInterval, function() {
                            return new bn(function() {
                                t._setPropertyWasThrottled = !0, t.tearDownIEWorkarounds()
                            }).start()
                        });
                        var o = this._setPropertyThrottle.guard(function(e) {
                            var t = e.cssText;
                            e.cssText = t
                        });
                        this._setPropertyThrottle.open(), this._setPropertyHook = He(CSSStyleDeclaration.prototype, "setProperty"), this._setPropertyHook && this._setPropertyHook.afterSync(function(e) {
                            o(e.that)
                        }), this._removePropertyHook = He(CSSStyleDeclaration.prototype, "removeProperty"), this._removePropertyHook && this._removePropertyHook.afterSync(function(e) {
                            o(e.that)
                        })
                    }, e.prototype.tearDownIEWorkarounds = function() {
                        this._setPropertyThrottle && this._setPropertyThrottle.close(), this._setPropertyHook && this._setPropertyHook.disable(), this._removePropertyHook && this._removePropertyHook.disable()
                    }, e.prototype.updateConsent = function() {
                        var e = this;
                        this._root && xe(this._root.firstChild, function(t) {
                            return e.refreshElement(t)
                        })
                    }, e.prototype.refreshElement = function(e) {
                        _n(e) && this._toRefresh.push(e)
                    }, e.ThrottleMax = 1024, e.ThrottleInterval = 1e4, e
                }();

                function ti(e) {
                    return void 0 === e && (e = ""), null === e ? "" : {
                        "http://www.w3.org/1999/xlink": "xlink:",
                        "http://www.w3.org/XML/1998/namespace": "xml:",
                        "http://www.w3.org/2000/xmlns/": "xmlns:"
                    } [e] || ""
                }

                function ni(e) {
                    return !(null == e ? void 0 : e.shadowRoot) || kr(e.shadowRoot) ? null : pn(e.shadowRoot)
                }
                var ri = function() {
                    function e(e, t, n) {
                        var r = this;
                        this._ctx = e, this._queue = t, this._recordResourceImgs = !1, this._recordResourceTimings = !1, this._perfSupported = !1, this._timingSupported = !1, this._getEntriesSupported = !1, this._memorySupported = !1, this._timeOriginSupported = !1, this._lastUsedJSHeapSize = 0, this._gotLoad = !1, this._observer = null, this._observedBatches = [], this._finalTask = new Lt(function(e) {
                            r._resolveFinalTask = function() {
                                e({
                                    timeRemaining: function() {
                                        return Number.POSITIVE_INFINITY
                                    },
                                    didTimeout: !1
                                }), r._resolveFinalTask = void 0
                            }
                        }), this._isRunningIdleTaskLoop = !1;
                        var i = window.performance;
                        i && (this._perfSupported = !0, i.timing && (this._timingSupported = !0), i.memory && (this._memorySupported = !0), i.timeOrigin && (this._timeOriginSupported = !0), "function" == typeof i.getEntries && (this._getEntriesSupported = !0), this._listeners = n.createChild())
                    }
                    return e.prototype.start = function(e) {
                        var t = this,
                            n = e.resourceUploader,
                            r = e.recTimings,
                            i = e.recImgs;
                        this._resourceUploader = n, this._recordResourceTimings = r, this._recordResourceImgs = i;
                        var o = window.performance;
                        o && (this._ctx.recording.inFrame || this._queue.enqueue({
                            Kind: O.REC_FEAT_SUPPORTED,
                            Args: [J.Performance, this._timingSupported, J.PerformanceEntries, this._getEntriesSupported, J.PerformanceMemory, this._memorySupported, J.PerformanceObserver, !!window.PerformanceObserver, J.PerformanceTimeOrigin, this._timeOriginSupported]
                        }), this.observe(), !this._observer && o.addEventListener && o.removeEventListener && this._listeners && this._listeners.add(o, "resourcetimingbufferfull", !0, function() {
                            t._queue.enqueue({
                                Kind: O.RESOURCE_TIMING_BUFFER_FULL,
                                Args: []
                            })
                        }), this.checkMemory(), this.recordTimeOrigin())
                    }, e.prototype.startIdleTaskLoop = function() {
                        return (0, r.__awaiter)(this, void 0, Lt, function() {
                            return (0, r.__generator)(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!this._perfSupported || !this._getEntriesSupported || 0 == this._observedBatches.length) return [2];
                                        if (this._isRunningIdleTaskLoop) return [2];
                                        this._isRunningIdleTaskLoop = !0, e.label = 1;
                                    case 1:
                                        return e.trys.push([1, , 3, 4]), [4, this.startIdleTaskLoopImpl()];
                                    case 2:
                                        return e.sent(), [3, 4];
                                    case 3:
                                        return this._isRunningIdleTaskLoop = !1, this._observedBatches = [], [7];
                                    case 4:
                                        return [2];
                                }
                            })
                        })
                    }, e.prototype.idleTask = function() {
                        return this._resolveFinalTask ? Lt.race([this._finalTask, Bt(250, 1e3)]) : this._finalTask
                    }, e.prototype.startIdleTaskLoopImpl = function() {
                        return (0, r.__awaiter)(this, void 0, Lt, function() {
                            var e, t, n, i, o, s, a, u;
                            return (0, r.__generator)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        e = 0, t = 0, n = this._observedBatches, r.label = 1;
                                    case 1:
                                        if (!(t < n.length)) return [3, 7];
                                        i = n[t], o = 0, s = i, r.label = 2;
                                    case 2:
                                        return o < s.length ? (a = s[o], v() > e ? [4, this.idleTask()] : [3, 4]) : [3, 6];
                                    case 3:
                                        u = r.sent(), e = v() + Math.max(u.timeRemaining(), 15), r.label = 4;
                                    case 4:
                                        this.recordEntry(a), r.label = 5;
                                    case 5:
                                        return o++, [3, 2];
                                    case 6:
                                        return t++, [3, 1];
                                    case 7:
                                        return [2];
                                }
                            })
                        })
                    }, e.prototype.onLoad = function() {
                        this._gotLoad || (this._gotLoad = !0, this._timingSupported && (this.recordTiming(performance.timing), this.startIdleTaskLoop()))
                    }, e.prototype.tick = function() {
                        this.checkMemory()
                    }, e.prototype.shutdown = function() {
                        var e;
                        this._listeners && this._listeners.clear(), this._resourceUploader = void 0;
                        var t = [];
                        this._observer ? (this._observer.takeRecords && (t = this._observer.takeRecords()), this._observer.disconnect()) : window.performance && window.performance.getEntries && (t = window.performance.getEntries()), t.length > 300 && (t = t.slice(0, 300), this._queue.enqueue({
                            Kind: O.RESOURCE_TIMING_BUFFER_FULL,
                            Args: []
                        })), this.checkMemory(), null === (e = this._resolveFinalTask) || void 0 === e || e.call(this), this._observedBatches.push(t), this.startIdleTaskLoop()
                    }, e.prototype.observe = function() {
                        var e = this;
                        if (!this._observer && this._getEntriesSupported && window.PerformanceObserver) {
                            this._observedBatches.push(performance.getEntries()), this.startIdleTaskLoop(), this._observer = new window.PerformanceObserver(function(t) {
                                var n = t.getEntries();
                                e._observedBatches.push(n), e.startIdleTaskLoop()
                            });
                            var t = ["navigation", "resource", "measure", "mark"];
                            window.PerformancePaintTiming && t.push("paint"), this._observer.observe({
                                entryTypes: t
                            })
                        }
                    }, e.prototype.checkMemory = function() {
                        if (this._memorySupported && !this._ctx.recording.inFrame) {
                            var e = performance.memory;
                            if (e) {
                                var t = e.usedJSHeapSize - this._lastUsedJSHeapSize;
                                (0 == this._lastUsedJSHeapSize || a.mathAbs(t / this._lastUsedJSHeapSize) > .2) && (this.addPerfEvent(Q.Memory, e, X.Memory), this._lastUsedJSHeapSize = e.usedJSHeapSize)
                            }
                        }
                    }, e.prototype.recordTimeOrigin = function() {
                        var e = {
                            timeOrigin: _.timeOrigin
                        };
                        this.addPerfEvent(Q.TimeOrigin, e, X.TimeOrigin)
                    }, e.prototype.recordEntry = function(e) {
                        switch (e.entryType) {
                            case "navigation":
                                this.recordNavigation(e);
                                break;
                            case "resource":
                                this.recordResource(e);
                                break;
                            case "paint":
                                this.recordPaint(e);
                                break;
                            case "measure":
                                this.recordMeasure(e);
                                break;
                            case "mark":
                                this.recordMark(e);
                        }
                    }, e.prototype.recordTiming = function(e) {
                        this.addPerfEvent(Q.Timing, e, X.Timing)
                    }, e.prototype.recordNavigation = function(e) {
                        this.addPerfEvent(Q.Navigation, e, X.Navigation, {
                            name: "navigation"
                        })
                    }, e.prototype.recordResource = function(e) {
                        if (this._recordResourceTimings) {
                            var t = e.initiatorType;
                            (this._recordResourceImgs || "img" !== t && "image" !== t) && this.addPerfEvent(Q.Resource, e, X.Resource, {
                                name: t
                            })
                        }
                    }, e.prototype.recordPaint = function(e) {
                        this.addPerfEvent(Q.Paint, e, X.Measure)
                    }, e.prototype.recordMark = function(e) {
                        this.addPerfEvent(Q.Mark, e, X.Measure)
                    }, e.prototype.recordMeasure = function(e) {
                        this.addPerfEvent(Q.Measure, e, X.Measure)
                    }, e.prototype.addPerfEvent = function(e, t, n, r) {
                        void 0 === r && (r = {});
                        for (var i = [e], o = 0, s = n; o < s.length; o++) {
                            var a = s[o],
                                u = t[a];
                            if (void 0 === u && (u = -1), a in r) {
                                var c = pr(u, {
                                    source: "perfEntry",
                                    type: r[a]
                                });
                                u === c && this.maybeUploadResource(e, t, c), u = c
                            }
                            i.push(u)
                        }
                        this._queue.enqueue({
                            Kind: O.PERF_ENTRY,
                            Args: i
                        })
                    }, e.prototype.maybeUploadResource = function(e, t, n) {
                        this._resourceUploader && e === Q.Resource && "css" === t.initiatorType && this._resourceUploader.uploadIfNeeded(this._ctx.window, n)
                    }, e
                }();

                function ii(e) {
                    var t = 0,
                        n = {
                            id: t++,
                            edges: {}
                        };
                    return e.split("\n").forEach(function(e) {
                        var r = e.trim();
                        if ("" != r) {
                            if (0 == r.indexOf("/") || r.lastIndexOf("/") == r.length - 1) throw new Error("Leading and trailing slashes are not supported");
                            var i = n,
                                o = r.split("/");
                            o.forEach(function(e, n) {
                                var r = e.trim();
                                if ("" === r) throw new Error("Empty elements are not allowed");
                                if ("**" != r && "*" != r && -1 != r.indexOf("*")) throw new Error("Embedded wildcards are not supported");
                                var s = null;
                                r in i.edges && (s = i.edges[r]), s || (s = {
                                    id: t++,
                                    edges: {}
                                }, i.edges[r] = s), n == o.length - 1 && (s.term = !0), i = s
                            })
                        }
                    }), n
                }
                var oi = ii("**");

                function si(e, t, n) {
                    if (!pi(n)) {
                        try {
                            for (var r = [], i = 0, o = n; i < o.length; i++) {
                                var s = o[i];
                                if (!s) return;
                                var u = new ai(!0 === s ? oi : s);
                                r.push(u)
                            }
                            var c = function(e, t) {
                                    for (var n = {}, r = function(t) {
                                            n[t] = function() {
                                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                                for (var i = 0, o = e; i < o.length; i++) {
                                                    var s = o[i];
                                                    s[t].apply(s, n)
                                                }
                                            }
                                        }, i = 0, o = t; i < o.length; i++) r(o[i]);
                                    return n
                                }(r, ["push", "pop"]),
                                h = 0,
                                d = [1];
                            return a.jsonStringify(e, function(e, n) {
                                var i = n,
                                    o = i && "object" == typeof i;
                                if ("" == e && 1 == d.length) return d[0]--, o && d.push(a.objectKeys(i).length), i;
                                for (c.push(e), r.some(function(e) {
                                        return e.isRedacted(!o)
                                    }) && (i = se.BlockedFieldValue, o = !1), h += e.length + 2, (h += o ? 2 : null === i ? 4 : i.toString().length) >= t && (i = void 0), d[d.length - 1]--, i && i !== se.BlockedFieldValue && o ? d.push(a.objectKeys(i).length) : c.pop(); d[d.length - 1] <= 0;) d.pop(), c.pop();
                                for (var s = 0, u = r; s < u.length; s++) {
                                    var l = u[s].depth();
                                    if (void 0 !== l && d.length > 0 && l !== d.length - 1) throw new Error("Property matcher depth out of sync")
                                }
                                return i
                            })
                        } catch (e) {
                            Qe.sendToBugsnag(e, "error")
                        }
                        return "[error serializing " + e.constructor.name + "]"
                    }
                }
                var ai = function() {
                    function e(e) {
                        this._depth = 1;
                        var t = [e];
                        e.edges["**"] && t.push(e.edges["**"]), this._stateSets = [t]
                    }
                    return e.prototype._currentStates = function() {
                        if (this._stateSets.length <= 0) return [];
                        var e = this._stateSets.length - 1,
                            t = this._stateSets[e];
                        return "number" == typeof t ? this._stateSets[e - 1] : t
                    }, e.prototype.depth = function() {
                        return this._depth
                    }, e.prototype.isRedacted = function(e) {
                        var t = this._currentStates();
                        return 0 === t.length || e && !t.some(function(e) {
                            return e.term
                        })
                    }, e.prototype.push = function(e) {
                        var t;
                        this._depth++;
                        var n = this._currentStates(),
                            r = [];

                        function i(t) {
                            t.edges["**"] && (r.push(t.edges["**"], ui(t)), i(t.edges["**"])), t.edges["*"] && r.push(t.edges["*"]), t.edges[e] && r.push(t.edges[e])
                        }
                        for (var o = 0, s = n; o < s.length; o++) {
                            var a = s[o];
                            if (null === (t = a.edges["**"]) || void 0 === t ? void 0 : t.term) {
                                r = [ui(a), a.edges["**"]];
                                break
                            }
                            i(a)
                        }
                        var u = !1;
                        if (r.length !== n.length) u = !0;
                        else
                            for (var c = 0; c < r.length; c++)
                                if (r[c].id !== n[c].id) {
                                    u = !0;
                                    break
                                } u ? this._stateSets.push(r) : ("number" != typeof this._stateSets[this._stateSets.length - 1] && this._stateSets.push(0), this._stateSets[this._stateSets.length - 1]++)
                    }, e.prototype.pop = function() {
                        this._depth > 0 && this._depth--;
                        var e = this._stateSets[this._stateSets.length - 1];
                        "number" == typeof e && e > 1 ? this._stateSets[this._stateSets.length - 1]-- : this._stateSets.pop()
                    }, e
                }();

                function ui(e) {
                    var t = e.edges["**"];
                    if (!t) throw new Error("Node must have double-wildcard edge.");
                    return Oe(e.edges, 1) ? {
                        id: -t.id,
                        edges: {
                            "**": t
                        }
                    } : e
                }
                var ci = function() {
                        function e(e) {
                            this._requestTracker = e, this._hook = null
                        }
                        return e.prototype.disable = function() {
                            this._hook && (this._hook.disable(), this._hook = null)
                        }, e.prototype.enable = function(e) {
                            var t, n = this,
                                r = R(e),
                                i = null === (t = null == r ? void 0 : r._w) || void 0 === t ? void 0 : t.fetch;
                            (i || e.fetch) && (this._hook = He(i ? r._w : e, "fetch"), this._hook && this._hook.afterSync(function(e) {
                                return n.recordFetch(e.result, e.args[0], e.args[1])
                            }))
                        }, e.prototype.recordFetch = function(e, t, n) {
                            var r, i, o = "GET",
                                s = "";
                            "string" == typeof t ? s = t : "url" in t ? (s = t.url, o = t.method, r = t.body, i = t.headers) : s = "" + t, s && (n && (o = n.method || o, i = mi(n.headers), r = n.body || r), this._requestTracker.startRequest(o, s, {
                                body: function() {
                                    return r
                                },
                                headers: i
                            }, this.getResponse(e)))
                        }, e.prototype.getResponse = function(e) {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var t, n, i, o;
                                return (0, r.__generator)(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return [4, e];
                                        case 1:
                                            return t = s.sent(), n = t.headers, o = (n.get("content-type") || "default").split(";")[0], ["default", "text/plain", "text/json", "application/json"].indexOf(o) > -1 && (i = t.clone()), [2, {
                                                status: t.status,
                                                data: {
                                                    headers: n,
                                                    body: function() {
                                                        return (0, r.__awaiter)(this, void 0, Lt, function() {
                                                            return (0, r.__generator)(this, function(e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        if (!i) return [2, null];
                                                                        e.label = 1;
                                                                    case 1:
                                                                        return e.trys.push([1, 3, , 4]), [4, null == i ? void 0 : i.text()];
                                                                    case 2:
                                                                        return [2, e.sent()];
                                                                    case 3:
                                                                        return e.sent(), [2, null];
                                                                    case 4:
                                                                        return [2];
                                                                }
                                                            })
                                                        })
                                                    }
                                                }
                                            }];
                                    }
                                })
                            })
                        }, e
                    }(),
                    hi = function() {
                        function e(e) {
                            this._requestTracker = e, this._requestData = new WeakMap
                        }
                        return e.prototype.disable = function() {
                            this._xhrOpenHook && (this._xhrOpenHook.disable(), this._xhrOpenHook = null), this._xhrSendHook && (this._xhrSendHook.disable(), this._xhrSendHook = null), this._xhrSetHeaderHook && (this._xhrSetHeaderHook.disable(), this._xhrSetHeaderHook = null)
                        }, e.prototype._getRequestData = function(e) {
                            var t = this._requestData.get(e);
                            if (t) return t;
                            var n = {};
                            return this._requestData.set(e, n), n
                        }, e.prototype.enable = function(e) {
                            var t, n, i, o, s = this,
                                a = R(e),
                                u = (null === (t = null == a ? void 0 : a._w) || void 0 === t ? void 0 : t.XMLHttpRequest) || e.XMLHttpRequest;
                            if (u) {
                                var c = u.prototype;
                                this._xhrOpenHook = null === (n = He(c, "open")) || void 0 === n ? void 0 : n.before(function(e) {
                                    var t = s._getRequestData(e.that);
                                    t.method = e.args[0], t.url = e.args[1]
                                }), this._xhrSetHeaderHook = null === (i = He(c, "setRequestHeader")) || void 0 === i ? void 0 : i.before(function(e) {
                                    var t = e.that,
                                        n = e.args[0],
                                        r = e.args[1],
                                        i = s._getRequestData(t);
                                    i.headers || (i.headers = []), i.headers.push([n, r])
                                }), this._xhrSendHook = null === (o = He(c, "send")) || void 0 === o ? void 0 : o.before(function(e) {
                                    var t = e.that,
                                        n = e.args[0],
                                        i = s._getRequestData(t),
                                        o = i.url,
                                        a = i.method,
                                        u = i.headers;
                                    void 0 !== o && void 0 !== a && (s._requestData["delete"](t), s._requestTracker.startRequest(a, o, {
                                        headers: mi(u),
                                        body: n
                                    }, function(e) {
                                        return (0, r.__awaiter)(this, void 0, Lt, function() {
                                            var t;
                                            return (0, r.__generator)(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, new Lt(function(t) {
                                                            e.addEventListener("readystatechange", function() {
                                                                e.readyState === XMLHttpRequest.DONE && t()
                                                            }), e.addEventListener("load", t), e.addEventListener("error", t)
                                                        })];
                                                    case 1:
                                                        return n.sent(), t = function(e) {
                                                            if (!e) return;
                                                            return {
                                                                forEach: function(t) {
                                                                    for (var n, r = /([^:]*):\s+(.*)(?:\r\n|$)/g; n = r.exec(e);) t(n[2], n[1])
                                                                }
                                                            }
                                                        }(e.getAllResponseHeaders()), [2, {
                                                            status: e.status,
                                                            data: {
                                                                headers: t,
                                                                body: function() {
                                                                    return "text" === e.responseType ? e.responseText : e.response
                                                                }
                                                            }
                                                        }];
                                                }
                                            })
                                        })
                                    }(t)))
                                })
                            }
                        }, e
                    }();
                var di = function() {
                        function e(e, t) {
                            this._ctx = e, this._queue = t, this._enabled = !1, this._tracker = new li(e, t), this._xhr = new hi(this._tracker), this._fetch = new ci(this._tracker)
                        }
                        return e.prototype.isEnabled = function() {
                            return this._enabled
                        }, e.prototype.enable = function(e) {
                            this._enabled || (this._enabled = !0, this._queue.enqueue({
                                Kind: O.REC_FEAT_SUPPORTED,
                                Args: [J.Ajax, !0, J.AjaxFetch, !!e]
                            }), this._xhr.enable(this._ctx.window), e && this._fetch.enable(this._ctx.window))
                        }, e.prototype.disable = function() {
                            this._enabled && (this._enabled = !1, this._xhr.disable(), this._fetch.disable())
                        }, e.prototype.tick = function() {
                            this._tracker.tick()
                        }, e.prototype.setWatches = function(e) {
                            this._tracker.setWatches(e)
                        }, e.prototype.initialize = function(e) {
                            this._tracker.initialize(e)
                        }, e
                    }(),
                    li = function() {
                        function e(e, t) {
                            this._ctx = e, this._queue = t, this._urlConfigs = [], this._reqHeaderAllowlist = {}, this._rspHeaderAllowlist = {}, this._events = [], this._maxAjaxPayloadLength = 0;
                            var n = se.DefaultOrgSettings;
                            this.initialize({
                                requests: n.HttpRequestHeadersAllowlist,
                                responses: n.HttpResponseHeadersAllowlist,
                                maxAjaxPayloadLength: n.MaxAjaxPayloadLength
                            })
                        }
                        return e.prototype.getReqAllowlist = function(e) {
                            for (var t = [], n = 0, r = this._urlConfigs; n < r.length; n++) {
                                var i = r[n],
                                    o = i.urlPattern,
                                    s = i.reqFields;
                                if (o.test(e)) {
                                    if (!1 === s) return [!1];
                                    t.push(s)
                                }
                            }
                            return t
                        }, e.prototype.getRspAllowlist = function(e) {
                            for (var t = [], n = 0, r = this._urlConfigs; n < r.length; n++) {
                                var i = r[n],
                                    o = i.urlPattern,
                                    s = i.rspFields;
                                if (o.test(e)) {
                                    if (!1 === s) return [!1];
                                    t.push(s)
                                }
                            }
                            return t
                        }, e.prototype.pushEvent = function(e) {
                            this._events.push(e)
                        }, e.prototype.setWatches = function(e) {
                            this._urlConfigs = e.map(function(e) {
                                return {
                                    urlPattern: new RegExp(e.URLRegex),
                                    reqFields: vi(e.RecordReq, e.ReqWhitelist),
                                    rspFields: vi(e.RecordRsp, e.RspWhitelist)
                                }
                            })
                        }, e.prototype.initialize = function(e) {
                            var t = this,
                                n = e.requests,
                                r = e.responses,
                                i = e.maxAjaxPayloadLength;
                            this._reqHeaderAllowlist = {}, this._rspHeaderAllowlist = {}, null == n || n.forEach(function(e) {
                                return t._reqHeaderAllowlist[e] = !0
                            }), null == r || r.forEach(function(e) {
                                return t._rspHeaderAllowlist[e] = !0
                            }), this._maxAjaxPayloadLength = i
                        }, e.prototype.addHeaderAllowlist = function(e, t) {
                            var n = this;
                            null == e || e.forEach(function(e) {
                                return n._reqHeaderAllowlist[e] = !0
                            }), null == t || t.forEach(function(e) {
                                return n._rspHeaderAllowlist[e] = !0
                            })
                        }, e.prototype.tick = function() {
                            for (var e = 0; e < this._events.length; e++) this._queue.enqueue({
                                Kind: O.AJAX_REQUEST,
                                Args: this._events[e]
                            });
                            this._events = []
                        }, e.prototype.startRequest = function(e, t, n, i) {
                            var o, s;
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var a, u, c, h, d, l, p, f, _;
                                return (0, r.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return a = v(), u = function(e, t) {
                                                return Bn.resolveToDocument(e, t)
                                            }(this._ctx.window, t), [4, this.processRequest(u, n)];
                                        case 1:
                                            return c = r.sent(), [4, i["catch"](function() {
                                                return {
                                                    status: 0,
                                                    data: {
                                                        headers: {
                                                            forEach: function() {}
                                                        },
                                                        body: void 0
                                                    }
                                                }
                                            })];
                                        case 2:
                                            return h = r.sent(), d = h.status, l = h.data, p = v() - a, [4, this.processResponse(u, l)];
                                        case 3:
                                            return f = r.sent(), _ = [e, pr(u, {
                                                source: "event",
                                                type: O.AJAX_REQUEST
                                            }), p, d, c.headers, f.headers, a, c.size, f.size, null !== (o = c.text) && void 0 !== o ? o : null, null !== (s = f.text) && void 0 !== s ? s : null], this.pushEvent(_), [2];
                                    }
                                })
                            })
                        }, e.prototype.processRequest = function(e, t) {
                            return gi(this._reqHeaderAllowlist, this.getReqAllowlist(e), this._maxAjaxPayloadLength, t)
                        }, e.prototype.processResponse = function(e, t) {
                            return gi(this._rspHeaderAllowlist, this.getRspAllowlist(e), this._maxAjaxPayloadLength, t)
                        }, e
                    }();

                function pi(e) {
                    return 0 === e.length || e.indexOf(!1) > -1
                }

                function fi(e) {
                    try {
                        return a.jsonStringify(e).length
                    } catch (e) {}
                    return 0
                }

                function _i(e, t, n) {
                    if (!pi(t)) try {
                        return si(a.jsonParse(e), n, t)
                    } catch (r) {
                        return t.length > 0 && t.every(function(e) {
                            return !0 === e
                        }) ? e.slice(0, n) : void 0
                    }
                }

                function vi(e, t) {
                    switch (e) {
                        default:
                        case te.Elide:
                            return !1;
                        case te.Record:
                            return !0;
                        case te.Whitelist:
                            try {
                                return ii(t)
                            } catch (e) {
                                return s("error parsing field allowlist (" + t + ": " + e), !1
                            }
                    }
                }

                function gi(e, t, n, i) {
                    var o;
                    return (0, r.__awaiter)(this, void 0, Lt, function() {
                        var s, a, u, c, h, d;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return s = "", null === (o = i.headers) || void 0 === o || o.forEach(function(t, n) {
                                        var r = n.toLowerCase(),
                                            i = e[r];
                                        s += r + (i ? ": " + t : "") + "\r\n"
                                    }), "function" != typeof(a = null == i ? void 0 : i.body) ? [3, 2] : [4, a()];
                                case 1:
                                    return u = r.sent(), [3, 3];
                                case 2:
                                    u = a, r.label = 3;
                                case 3:
                                    return c = function(e, t, n) {
                                        void 0 === n && (n = se.DefaultOrgSettings.MaxAjaxPayloadLength);
                                        if (null == t) return [0, void 0];
                                        switch (typeof t) {
                                            default:
                                                return [-1, pi(e) ? void 0 : "[unknown]"];
                                            case "string":
                                                return function(e, t, n) {
                                                    return [e.length, _i(e, t, n)]
                                                }(t, e, n);
                                            case "object":
                                                var r = t.constructor;
                                                switch (r) {
                                                    case Object:
                                                    default:
                                                        return function(e, t, n) {
                                                            var r = void 0;
                                                            return pi(t) || (r = si(e, n, t)), [fi(e), r]
                                                        }(t, e, n);
                                                    case Blob:
                                                        return function(e, t) {
                                                            var n = e.size,
                                                                r = void 0;
                                                            return pi(t) || (r = "[Blob]"), [n, r]
                                                        }(t, e);
                                                    case ArrayBuffer:
                                                        return function(e, t) {
                                                            var n = e.byteLength,
                                                                r = void 0;
                                                            return pi(t) || (r = "[ArrayBuffer]"), [n, r]
                                                        }(t, e);
                                                    case Document:
                                                    case FormData:
                                                    case URLSearchParams:
                                                    case ReadableStream:
                                                        return [-1, pi(e) ? void 0 : "" + r.name];
                                                }
                                        }
                                    }(t, u, n), h = c[0], d = c[1], [2, {
                                        headers: s,
                                        text: d,
                                        size: h
                                    }];
                            }
                        })
                    })
                }

                function mi(e) {
                    return e ? Te(e) ? {
                        forEach: function(t) {
                            for (var n = 0, r = e; n < r.length; n++) {
                                var i = r[n],
                                    o = i[0];
                                t(i[1], o)
                            }
                        }
                    } : "function" == typeof e.forEach ? e : {
                        forEach: function(t) {
                            for (var n in e) {
                                if (Object.prototype.hasOwnProperty.call(e, n)) t(e[n], n)
                            }
                        }
                    } : e
                }
                var yi = function() {
                    function e(e, t, n) {
                        this._ctx = e, this._q = t, this._listeners = n.createChild()
                    }
                    return e.prototype.start = function() {
                        var e = this,
                            t = this._ctx.window.document;
                        this._listeners.addCustom(t, this.getFullscreenChangeEvent(), !0, function(t) {
                            e.onFullscreenChange(t)
                        }), this._listeners.addCustom(t, this.getFullscreenErrorEvent(), !0, function(t) {
                            e.onFullscreenError(t)
                        })
                    }, e.prototype.stop = function() {
                        this._listeners && this._listeners.clear()
                    }, e.prototype.onFullscreenChange = function(e) {
                        var t = this.getFullscreenElement();
                        if (t) {
                            var n = _n(t);
                            Je(null == this._previousFullscreenFSID, "Error: Received fullscreen signal but we think we are already in fullscreen?"), this._q.enqueue({
                                Kind: O.FULLSCREEN,
                                Args: [n, !0]
                            }), this._previousFullscreenFSID = n
                        } else Je(null != this._previousFullscreenFSID, "Error: Received fullscreen exit signal but have no previous fullscreen event?"), this._q.enqueue({
                            Kind: O.FULLSCREEN,
                            Args: [this._previousFullscreenFSID, !1]
                        }), this._previousFullscreenFSID = void 0
                    }, e.prototype.onFullscreenError = function(e) {
                        this._q.enqueue({
                            Kind: O.FULLSCREEN_ERROR,
                            Args: []
                        })
                    }, e.prototype.getFullscreenElement = function() {
                        var e = this._ctx.window.document;
                        return e[Ee(e, "fullscreenElement")]
                    }, e.prototype.getFullscreenChangeEvent = function() {
                        return Ee(this._ctx.window.document, "onfullscreenchange").slice(2)
                    }, e.prototype.getFullscreenErrorEvent = function() {
                        return Ee(this._ctx.window.document, "onfullscreenerror").slice(2)
                    }, e
                }();
                var wi = function() {
                        function e(e, t) {
                            this._queue = t, this._registry = null, this._checkedNodeTags = {};
                            var n = e.window;
                            "customElements" in n && "get" in n.customElements && "whenDefined" in n.customElements && (this._registry = n.customElements)
                        }
                        return e.prototype.onCustomNodeVisited = function(e) {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var t, n;
                                return (0, r.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this._registry) return [2];
                                            if (t = e.nodeName.toLowerCase(), Object.prototype.hasOwnProperty.call(this._checkedNodeTags, t)) return [2];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), n = !!this._registry.get(t), this._checkedNodeTags[t] = n, [4, this._registry.whenDefined(t)];
                                        case 2:
                                            return r.sent(), this._enqueue(t), [3, 4];
                                        case 3:
                                            return r.sent(), [3, 4];
                                        case 4:
                                            return [2];
                                    }
                                })
                            })
                        }, e.prototype._enqueue = function(e) {
                            this._queue.enqueue({
                                Kind: O.CUSTOM_ELEMENT_DEFINED,
                                Args: [e]
                            })
                        }, e
                    }(),
                    Si = function() {
                        function e(e, t, n, r, i, o, s, a) {
                            var u = this;
                            this._ctx = e, this._queue = t, this._keep = n, this._onFrameCreated = o, this._beforeFrameRemoved = s, this._resourceUploader = a, this._curSelection = [], this._scrollTimeouts = {}, this._uploadResources = !1, this._modalHooks = [], this._initialized = !1, this._wnd = e.window, this._doc = this._wnd.document, this._loc = this._wnd.location, this._hst = this._wnd.history, this._listeners = i.createChild(), this._currentUrl = this._loc.href, this._inputWatcher = new kn(e, t), this._ajaxWatcher = new di(e, t), this._perfWatcher = new ri(e, t, this._listeners), this._styleSheetWatcher = new Zn(e, t), this._fullscreenWatcher = new yi(e, t, this._listeners), this._customElementWatcher = new wi(e, t), this._intersectionWatcher = function(e, t) {
                                void 0 === t && (t = .25);
                                var n = e.window.IntersectionObserver;
                                if (n) return new n(function(t) {
                                    for (var n, r = 0, i = t; r < i.length; r++) {
                                        var o = i[r],
                                            s = o.target,
                                            a = o.intersectionRatio,
                                            u = _n(s);
                                        u && (null === (n = e.queue()) || void 0 === n || n.enqueue({
                                            Kind: O.VIEWPORT_INTERSECTION,
                                            Args: [u, a]
                                        }))
                                    }
                                }, {
                                    threshold: [t, 1]
                                })
                            }(e);
                            this._mutWatcher = new ei(e, r, function(e, t) {
                                return u.visitNode(e, t)
                            }, function(e) {
                                return u.beforeRemove(e)
                            }, function(e, t, n) {
                                return u.attributeVisitor(e, t, n)
                            }, this._intersectionWatcher)
                        }
                        return e.prototype.getResourceUploader = function() {
                            return this._resourceUploader
                        }, e.prototype.watchEvents = function(e) {
                            var t = this;
                            this._mutWatcher.hookMutations(), this._inputWatcher.hookEvents(), this._styleSheetWatcher.start(), this._fullscreenWatcher.start(), (null == e ? void 0 : e.DisableCopyPasteListener) || (this._listeners.add(this._wnd, "copy", !1, this.addCopyEvent.bind(this)), this._listeners.add(this._wnd, "paste", !1, this.addPasteEvent.bind(this))), this._listeners.add(this._wnd, "mousemove", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addMouseMove(e)
                            }), this._listeners.add(this._wnd, "mousedown", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addMouseDown(e)
                            }), this._listeners.add(this._wnd, "mouseup", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addMouseUp(e)
                            }), this._listeners.add(this._wnd, "keydown", !0, function() {
                                t._maybeAddValueChange()
                            }), this._listeners.add(this._wnd, "keyup", !0, function() {
                                t._maybeAddValueChange()
                            }), this._listeners.add(this._wnd, "click", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addClick(e)
                            }), this._listeners.add(this._wnd, "dblclick", !0, function(e) {
                                t.addDblClick(e)
                            }), this._listeners.add(this._wnd, "focus", !0, function(e) {
                                t.addFocus(e, ki(e))
                            }, !0), this._listeners.add(this._wnd, "blur", !0, function(e) {
                                t.addBlur(e, ki(e))
                            }, !0), this._listeners.add(this._wnd, "change", !0, function(e) {
                                t.addChange(e, ki(e))
                            }, !0), this._listeners.add(this._wnd, "touchstart", !0, function(e) {
                                t.isSafePointerEvent(e) && (t.addTouchEvent(e, O.TOUCHSTART), t.addWindowScrollOrResize())
                            }), this._listeners.add(this._wnd, "touchend", !0, function(e) {
                                t.isSafePointerEvent(e) && (t.addTouchEvent(e, O.TOUCHEND), t.addWindowScrollOrResize())
                            }), this._listeners.add(this._wnd, "touchmove", !0, function(e) {
                                t.isSafePointerEvent(e) && (t.addTouchEvent(e, O.TOUCHMOVE), t.addWindowScrollOrResize())
                            }), this._listeners.add(this._wnd, "touchcancel", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addTouchEvent(e, O.TOUCHCANCEL)
                            }), this._listeners.add(this._wnd, "play", !0, function(e) {
                                t.addPlayEvent(e)
                            }), this._listeners.add(this._wnd, "pause", !0, function(e) {
                                t.addPauseEvent(e)
                            }), this._listeners.add(this._wnd, "scroll", !0, function(e) {
                                e.bubbles ? t.addWindowScrollOrResize() : t.addScroll(Ti(e))
                            }), this._listeners.add(this._wnd, "resize", !1, function() {
                                t.addWindowScrollOrResize()
                            }), this._listeners.add(this._wnd, "submit", !1, function(e) {
                                t.addFormSubmit(e)
                            }), this._listeners.add(this._wnd, "focus", !1, function() {
                                t.addWindowFocus()
                            }), this._listeners.add(this._wnd, "blur", !1, function() {
                                t.addWindowBlur()
                            }), this._listeners.add(this._wnd, "popstate", !1, function() {
                                t.addNavigate()
                            }), this._listeners.add(this._wnd, "selectstart", !0, function() {
                                t.addSelection()
                            }), this._listeners.add(this._doc, "selectionchange", !0, function() {
                                t.addSelection()
                            });
                            var n = this._wnd.visualViewport;
                            n ? (this._listeners.add(n, "scroll", !0, function() {
                                return t.addWindowScrollOrResize()
                            }), this._listeners.add(n, "resize", !0, function() {
                                return t.addWindowScrollOrResize()
                            })) : this._listeners.add(this._wnd, "mousewheel", !0, function() {
                                t.addWindowScrollOrResize()
                            }), this._pushHook = He(this._hst, "pushState"), this._pushHook && this._pushHook.afterSync(function() {
                                return t.addNavigate()
                            }), this._replaceHook = He(this._hst, "replaceState"), this._replaceHook && this._replaceHook.afterSync(function() {
                                return t.addNavigate()
                            });
                            for (var r = function(e) {
                                    var n = He(i._wnd, e);
                                    if (!n) return "continue";
                                    i._modalHooks.push(n), n.before(function() {
                                        t._queue.enqueue({
                                            Kind: O.MODAL_OPEN,
                                            Args: [e]
                                        })
                                    }).afterSync(function() {
                                        t._queue.enqueue({
                                            Kind: O.MODAL_CLOSE,
                                            Args: [e]
                                        })
                                    })
                                }, i = this, o = 0, s = ae; o < s.length; o++) {
                                r(s[o])
                            }
                            if ("function" == typeof this._wnd.document.hasFocus && this._queue.enqueue({
                                    Kind: this._wnd.document.hasFocus() ? O.WINDOW_FOCUS : O.WINDOW_BLUR,
                                    Args: []
                                }), a.matchMedia)
                                for (var u = function(e, n, r) {
                                        var i = a.matchMedia(c._wnd, r);
                                        if (!i) return "continue";
                                        var o = function() {
                                            i.matches && t._queue.enqueue({
                                                Kind: O.MEDIA_QUERY_CHANGE,
                                                Args: [e, n]
                                            })
                                        };
                                        c._listeners.add(i, "change", !0, o), o()
                                    }, c = this, h = 0, d = [
                                        ["any-pointer", "coarse", "not screen and (any-pointer: fine)"],
                                        ["any-pointer", "fine", "only screen and (any-pointer: fine)"],
                                        ["any-hover", "none", "not screen and (any-hover: hover)"],
                                        ["any-hover", "hover", "only screen and (any-hover: hover)"],
                                        ["pointer", "none", "(pointer: none)"],
                                        ["pointer", "coarse", "(pointer: coarse)"],
                                        ["pointer", "fine", "(pointer: fine)"],
                                        ["prefers-color-scheme", "no-preference", "(prefers-color-scheme: no-preference)"],
                                        ["prefers-color-scheme", "light", "(prefers-color-scheme: light)"],
                                        ["prefers-color-scheme", "dark", "(prefers-color-scheme: dark)"]
                                    ]; h < d.length; h++) {
                                    var l = d[h];
                                    u(l[0], l[1], l[2])
                                }
                            this._initialized = !0
                        }, e.prototype.initResourceUploading = function() {
                            this._resourceUploader.init(), this._uploadResources = !0
                        }, e.prototype.onDomLoad = function() {
                            this.addDomLoaded(), this.addViewportChange(), this._mutWatcher._checkForMissingInsertions(fe)
                        }, e.prototype.onLoad = function() {
                            var e = this,
                                t = !1,
                                n = Qe.wrap(function() {
                                    t || (t = !0, e._perfWatcher.onLoad(), e.addLoad(), e.addViewportChange())
                                }, "error");
                            new bn(n, 0).start(), a.requestWindowAnimationFrame && a.requestWindowAnimationFrame(this._wnd, n)
                        }, e.prototype.ajaxWatcher = function() {
                            return this._ajaxWatcher
                        }, e.prototype.perfWatcher = function() {
                            return this._perfWatcher
                        }, e.prototype.bundleEvents = function() {
                            var e = this;
                            return this._queue.enqueueSimultaneousEventsIn(function(t) {
                                var n = e._mutWatcher.processMutations(t);
                                return e._inputWatcher.tick(), e._perfWatcher.tick(), e._ajaxWatcher.tick(), e.addViewportChange(), n
                            })
                        }, e.prototype.shutdown = function(e) {
                            var t;
                            if (this._initialized) {
                                this._initialized = !1, this._listeners && this._listeners.clear(), this._pushHook && this._pushHook.disable(), this._replaceHook && this._replaceHook.disable();
                                for (var n = 0, r = this._modalHooks; n < r.length; n++) {
                                    r[n].disable()
                                }
                                this._modalHooks = [], this._perfWatcher.onLoad(), this._ctx.measurer.performMeasurementsNow(), this._queue.processEvents(), this._inputWatcher.shutdown(), this._mutWatcher.shutdown(), this._ajaxWatcher.disable(), this._perfWatcher.shutdown(), this._styleSheetWatcher.stop(), this._fullscreenWatcher.stop(), null === (t = this._intersectionWatcher) || void 0 === t || t.disconnect(), this._queue.shutdown(e)
                            }
                        }, e.prototype.recordingIsDetached = function() {
                            return this._mutWatcher.recordingIsDetached()
                        }, e.prototype.visitNode = function(e, t) {
                            var n = this;
                            switch (e.nodeName) {
                                case "#document":
                                case "#document-fragment":
                                    "#document-fragment" === e.nodeName && this._listeners.add(e, "scroll", !0, function(e) {
                                        return n.addScroll(Ti(e))
                                    });
                                    var r = e;
                                    try {
                                        if (!r.adoptedStyleSheets || 0 === r.adoptedStyleSheets.length) break
                                    } catch (e) {
                                        break
                                    }
                                    t.push(function() {
                                        n._styleSheetWatcher.onSetAdoptedStyleSheets(e)
                                    });
                                    break;
                                case "BODY":
                                    this.addViewportChange(), this.addSelection();
                                    break;
                                case "INPUT":
                                case "TEXTAREA":
                                case "SELECT":
                                    this._inputWatcher.addInput(e);
                                    break;
                                case "FRAME":
                                case "IFRAME":
                                    this._onFrameCreated(e);
                                    break;
                                case "VIDEO":
                                case "AUDIO":
                                    e.paused || this._queue.enqueue({
                                        Kind: O.PLAY,
                                        Args: [_n(e)]
                                    });
                                    break;
                                case "LINK":
                                    if (!(i = e.sheet)) break;
                                    this._styleSheetWatcher.ensureHook(i), !0 === i.disabled && this._styleSheetWatcher.onDisableSheet(i, !0);
                                    break;
                                case "STYLE":
                                    var i, o = e;
                                    if (!(i = o.sheet)) break;
                                    this._styleSheetWatcher.ensureHook(i), !0 === i.disabled && this._styleSheetWatcher.onDisableSheet(i, !0),
                                        function(e) {
                                            var t = e.textContent || "";
                                            if (t.length > 5e5) return !1;
                                            var n = zn(Kn(e));
                                            return !!n && (!!(n.length > 0 && nr.test(t)) || sr(e))
                                        }(o) && t.push(function() {
                                            n._styleSheetWatcher.snapshotEl(o)
                                        });
                                    break;
                                default:
                                    "#" !== e.nodeName[0] && e.nodeName.indexOf("-") > -1 && this._customElementWatcher.onCustomNodeVisited(e);
                            }
                            if ("scrollLeft" in e && "scrollTop" in e) {
                                var s = e;
                                this._ctx.measurer.requestMeasureTask(Ft.Low, function() {
                                    0 == s.scrollLeft && 0 == s.scrollTop || n.addScroll(s)
                                })
                            }
                        }, e.prototype.beforeRemove = function(e) {
                            var t = e.node,
                                n = nn(e.node);
                            if ("iframe" === n) this._beforeFrameRemoved(e.node);
                            else if ("function" == typeof t.getElementsByTagName)
                                for (var r = t.getElementsByTagName("iframe"), i = 0; i < r.length; i++) {
                                    var o = r[i];
                                    this._beforeFrameRemoved(o)
                                } else if ("link" === n || "style" === n) {
                                    var s = t.sheet;
                                    if (!s) return;
                                    this._styleSheetWatcher.removeHook(s)
                                }
                        }, e.prototype.attributeVisitor = function(e, t, n) {
                            if (this._uploadResources && ! function(e) {
                                    return hn(e) || dn(e)
                                }(e))
                                for (var r = 0, i = function(e, t, n) {
                                        var r, i = nn(e);
                                        if (Ei[t] && Ei[t][i]) return [n];
                                        if ("link" == i && "href" == t && (r = e.getAttribute("rel")) && r.indexOf("stylesheet") > -1) return [n];
                                        if ("srcset" == t && ("img" == i || "source" == i)) {
                                            return null != n.match(/^\s*$/) ? [] : n.split(",").map(function(e) {
                                                return e.trim().split(/\s+/)[0]
                                            })
                                        }
                                        var o = e;
                                        if ("style" == t && o.style) {
                                            var s = o.style.backgroundImage;
                                            if (!s) return [];
                                            if (s.length > 300) return [];
                                            var a = [],
                                                u = void 0;
                                            for (Qt.lastIndex = 0; u = Qt.exec(s);) {
                                                var c = u[1];
                                                c && a.push(c.trim())
                                            }
                                            return a
                                        }
                                        return []
                                    }(e, t, n); r < i.length; r++) {
                                    var o = i[r];
                                    this._resourceUploader.uploadIfNeeded(this._wnd, o)
                                }
                        }, e.prototype.isSafePointerEvent = function(e) {
                            var t = Ti(e);
                            return !!_n(t) && !hn(t)
                        }, e.prototype.addMouseMove = function(e) {
                            var t = _n(Ti(e));
                            this._queue.enqueue({
                                Kind: O.MOUSEMOVE,
                                Args: t ? [e.clientX, e.clientY, t] : [e.clientX, e.clientY]
                            })
                        }, e.prototype.addMouseDown = function(e) {
                            this._queue.enqueue({
                                Kind: O.MOUSEDOWN,
                                Args: [e.clientX, e.clientY]
                            })
                        }, e.prototype.addMouseUp = function(e) {
                            this._queue.enqueue({
                                Kind: O.MOUSEUP,
                                Args: [e.clientX, e.clientY]
                            })
                        }, e.prototype.addTouchEvent = function(e, t) {
                            if (void 0 !== e.changedTouches)
                                for (var n = 0; n < e.changedTouches.length; ++n) {
                                    var r = e.changedTouches[n];
                                    isNaN(parseInt(r.identifier, 10)) && (r.identifier = 0);
                                    var i = [r.identifier, r.clientX, r.clientY];
                                    this._queue.enqueue({
                                        Kind: t,
                                        Args: i
                                    })
                                }
                        }, e.prototype.addPlayEvent = function(e) {
                            var t = _n(Ti(e));
                            t && this._queue.enqueue({
                                Kind: O.PLAY,
                                Args: [t]
                            })
                        }, e.prototype.addPauseEvent = function(e) {
                            var t = _n(Ti(e));
                            t && this._queue.enqueue({
                                Kind: O.PAUSE,
                                Args: [t]
                            })
                        }, e.prototype.addWindowFocus = function() {
                            this._queue.enqueue({
                                Kind: O.WINDOW_FOCUS,
                                Args: []
                            })
                        }, e.prototype.addWindowBlur = function() {
                            this._queue.enqueue({
                                Kind: O.WINDOW_BLUR,
                                Args: []
                            })
                        }, e.prototype._maybeAddValueChange = function() {
                            var e, t = function(e) {
                                var t = e.activeElement;
                                for (; t && t.shadowRoot;) {
                                    var n = t.shadowRoot.activeElement;
                                    if (!n) return t;
                                    t = n
                                }
                                return t
                            }(this._doc);
                            t && !hn(t) && ("value" in (e = t) || "checked" in e) && this._inputWatcher.onChange(t, !1)
                        }, e.prototype.addViewportChange = function() {
                            var e = this;
                            this._ctx.measurer.requestMeasureTask(Ft.High, function() {
                                return e._addViewportChangeImpl()
                            })
                        }, e.prototype._addViewportChangeImpl = function() {
                            var e = this.getWindowScrollingElement(),
                                t = _n(e);
                            if (t) {
                                var n = function(e, t) {
                                    var n = e.documentElement.getBoundingClientRect(),
                                        r = t.scrollWidth,
                                        i = t.scrollHeight;
                                    return {
                                        width: a.mathMax(n.width, r),
                                        height: a.mathMax(n.height, i)
                                    }
                                }(this._wnd.document, e);
                                Kt(n, this._curDocSize) || (this._curDocSize = n, this._queue.enqueue({
                                    Kind: O.RESIZE_DOCUMENT_CONTENT,
                                    Args: [n.width, n.height]
                                }));
                                var r, i, o, s, u = en(this._wnd, this._curLayoutViewport),
                                    c = function(e, t) {
                                        if ("visualViewport" in e) return e.visualViewport;
                                        var n = t;
                                        return void 0 === n && (n = en(e)), new tn(e, n)
                                    }(this._wnd, u);
                                u.hasKnownPosition ? (jt(u, this._curLayoutViewport) || this._queue.enqueue({
                                        Kind: O.SCROLL_LAYOUT,
                                        Args: [t, u.pageLeft, u.pageTop]
                                    }), r = c, (i = this._curVisualViewport) && r.offsetLeft == i.offsetLeft && r.offsetTop == i.offsetTop || this._queue.enqueue({
                                        Kind: O.SCROLL_VISUAL_OFFSET,
                                        Args: [t, c.offsetLeft, c.offsetTop]
                                    })) : jt(c, this._curVisualViewport) || this._queue.enqueue({
                                        Kind: O.SCROLL_LAYOUT,
                                        Args: [t, c.pageLeft, c.pageTop]
                                    }),
                                    function(e, t) {
                                        return t && e.width == t.width && e.height == t.height && e.clientWidth == t.clientWidth && e.clientHeight == t.clientHeight
                                    }(u, this._curLayoutViewport) || (u.width == u.clientWidth && u.height == u.clientHeight ? this._queue.enqueue({
                                        Kind: O.RESIZE_LAYOUT,
                                        Args: [u.clientWidth, u.clientHeight]
                                    }) : this._queue.enqueue({
                                        Kind: O.RESIZE_LAYOUT,
                                        Args: [u.clientWidth, u.clientHeight, u.width, u.height]
                                    })), Kt(c, this._curVisualViewport) || this._queue.enqueue({
                                        Kind: O.RESIZE_VISUAL,
                                        Args: [c.width, c.height]
                                    }), this._curLayoutViewport = ((s = zt(o = u)).clientWidth = o.clientWidth, s.clientHeight = o.clientHeight, s), this._curVisualViewport = function(e) {
                                        var t = zt(e);
                                        return t.offsetLeft = e.offsetLeft, t.offsetTop = e.offsetTop, t
                                    }(c)
                            }
                        }, e.prototype.doWorkInScrollTimeout = function(e, t) {
                            var n = this;
                            e in this._scrollTimeouts || (this._scrollTimeouts[e] = t, new bn(function() {
                                n._ctx.measurer.requestMeasureTask(Ft.High, function() {
                                    if (e in n._scrollTimeouts) {
                                        var t = n._scrollTimeouts[e];
                                        delete n._scrollTimeouts[e], t()
                                    }
                                })
                            }, se.ScrollSampleInterval).start())
                        }, e.prototype._fireScrollTimeouts = function() {
                            for (var e in this._scrollTimeouts) this._scrollTimeouts[e](), delete this._scrollTimeouts[e];
                            this._scrollTimeouts = []
                        }, e.prototype.getWindowScrollingElement = function() {
                            return this._doc.scrollingElement || this._doc.body || this._doc.documentElement
                        }, e.prototype.addWindowScrollOrResize = function() {
                            var e = this;
                            this.doWorkInScrollTimeout(1, function() {
                                return e.addViewportChange()
                            })
                        }, e.prototype.addScroll = function(e) {
                            var t = this,
                                n = _n(e);
                            n && this.doWorkInScrollTimeout(n, function() {
                                if (_n(e) === n) {
                                    var r = e;
                                    n && "number" == typeof r.scrollLeft && (t._queue.enqueue({
                                        Kind: O.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                                        Args: [n, r.scrollWidth, r.scrollHeight]
                                    }), t._queue.enqueue({
                                        Kind: O.SCROLL_LAYOUT,
                                        Args: [n, r.scrollLeft, r.scrollTop]
                                    }), qt().then(function() {
                                        t._mutWatcher.resizer().isObserved(n) || t._mutWatcher.resizer().observe(e)
                                    }))
                                }
                            })
                        }, e.prototype.addDomLoaded = function() {
                            this._queue.enqueue({
                                Kind: O.DOMLOADED,
                                Args: []
                            })
                        }, e.prototype.addLoad = function() {
                            this._queue.enqueue({
                                Kind: O.LOAD,
                                Args: []
                            })
                        }, e.prototype.getNavigateEvent = function(e, t) {
                            void 0 === t && (t = O.NAVIGATE);
                            var n = {
                                Kind: t,
                                Args: [pr(e, {
                                    source: "event",
                                    type: O.NAVIGATE
                                })]
                            };
                            return t === O.ENTRY_NAVIGATE ? (n.Args.push(this.getNavigationTimingType()), n) : n
                        }, e.prototype.addNavigate = function() {
                            var e = this._loc.href;
                            this._currentUrl != e && (this._currentUrl = e, this._keep.onNavigate(e), this._queue.enqueue(this.getNavigateEvent(e)))
                        }, e.prototype.getNavigationTimingType = function() {
                            try {
                                var e = this._wnd.performance;
                                if (!e || !e.navigation) return "unknown";
                                switch (e.navigation.type) {
                                    case PerformanceNavigation.TYPE_NAVIGATE:
                                        return "navigate";
                                    case PerformanceNavigation.TYPE_RELOAD:
                                        return "reload";
                                    case PerformanceNavigation.TYPE_BACK_FORWARD:
                                        return "back_forward";
                                    default:
                                        return "unknown";
                                }
                            } catch (e) {
                                return "unknown"
                            }
                        }, e.prototype.addClick = function(e) {
                            var t = Ti(e),
                                n = _n(t);
                            if (n) {
                                var r = 0,
                                    i = 0,
                                    o = 0,
                                    s = 0;
                                if (t && t.getBoundingClientRect) {
                                    var a = t.getBoundingClientRect();
                                    r = a.left, i = a.top, o = a.width, s = a.height
                                }
                                var u = pn(t);
                                this._keep.onClick(u), this._queue.enqueue({
                                    Kind: O.CLICK,
                                    Args: [n, e.clientX, e.clientY, r, i, o, s]
                                })
                            }
                        }, e.prototype.addDblClick = function(e) {
                            var t = _n(Ti(e));
                            t && this._queue.enqueue({
                                Kind: O.DBL_CLICK,
                                Args: [t]
                            })
                        }, e.prototype.addFormSubmit = function(e) {
                            var t = _n(Ti(e));
                            t && this._queue.enqueue({
                                Kind: O.FORM_SUBMIT,
                                Args: [t]
                            })
                        }, e.prototype.addFocus = function(e, t) {
                            var n = _n(Ti(e));
                            n && this._queue.enqueue({
                                Kind: O.FOCUS,
                                Args: [n, t]
                            })
                        }, e.prototype.addBlur = function(e, t) {
                            var n = _n(Ti(e));
                            n && this._queue.enqueue({
                                Kind: O.BLUR,
                                Args: [n, t]
                            })
                        }, e.prototype.addChange = function(e, t) {
                            this._inputWatcher.onChange(Ti(e), t)
                        }, e.prototype.addSelection = function() {
                            var e = this;
                            this._ctx.measurer.requestMeasureTask(Ft.High, function() {
                                var t;
                                try {
                                    t = e.selectionArgs()
                                } catch (e) {
                                    return
                                }
                                for (var n = !1, r = 0; r < 4; r++)
                                    if (e._curSelection[r] !== t[r]) {
                                        n = !0;
                                        break
                                    } n && (e._curSelection = t, e._queue.enqueue({
                                    Kind: O.SELECT,
                                    Args: t
                                }))
                            })
                        }, e.prototype.selectionArgs = function() {
                            if (!this._wnd.getSelection) return [];
                            var e = this._wnd.getSelection();
                            if (!e) return [];
                            if ("None" == e.type) return [];
                            if ("Caret" == e.type) {
                                var t = _n(e.anchorNode);
                                return t ? [t, e.anchorOffset] : []
                            }
                            if (!e.anchorNode || !e.focusNode) return [];
                            var n = bi(e.anchorNode, e.anchorOffset),
                                r = n[0],
                                i = n[1],
                                o = bi(e.focusNode, e.focusOffset),
                                s = o[0],
                                a = o[1],
                                u = Boolean(r.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING),
                                c = u ? [r, s] : [s, r],
                                h = c[0],
                                d = c[1],
                                l = u ? [i, a] : [a, i],
                                p = l[0],
                                f = l[1];
                            for (_n(h) || (p = 0); h && !_n(h) && h != d;) h = Pe(h) || h.parentNode;
                            for (_n(d) || (f = 0); d && !_n(d) && d != h;) d = Le(d) || d.parentNode;
                            if (h == d && p == f) return [];
                            var _ = _n(h),
                                v = _n(d);
                            return h && d && _ && v ? [_, p, v, f, u] : []
                        }, e.prototype.addCopyEvent = function() {
                            this._queue.enqueue({
                                Kind: O.COPY,
                                Args: []
                            })
                        }, e.prototype.addPasteEvent = function() {
                            this._queue.enqueue({
                                Kind: O.PASTE,
                                Args: []
                            })
                        }, e
                    }();

                function bi(e, t) {
                    var n = e;
                    if (!n.firstChild) return [n, t];
                    n = n.firstChild;
                    for (var r = 0; r < t - 1; r++) {
                        var i = Pe(n);
                        if (!i) return [n, 0];
                        n = i
                    }
                    return [n, 0]
                }
                var Ei = {
                    src: {
                        img: !0,
                        embed: !0
                    },
                    href: {
                        use: !0,
                        image: !0
                    },
                    data: {
                        object: !0
                    }
                };

                function Ti(e) {
                    if (e.composed && e.target) {
                        var t = e.target;
                        if (1 == t.nodeType && t.shadowRoot) {
                            var n = e.composedPath();
                            if (n.length > 0) return n[0]
                        }
                    }
                    return e.target
                }

                function ki(e) {
                    var t;
                    return !(!(null !== (t = e._fs_trust_event) && void 0 !== t && t) && !e.isTrusted)
                }
                var Ii = /^\s*at .*(\S+:\d+|native|(<anonymous>))/m,
                    Ci = /^(eval@)?(\[native code\])?$/;

                function Ri(e) {
                    if (!e || "string" != typeof e.stack) return [];
                    var t = e;
                    return t.stack.match(Ii) ? t.stack.split("\n").filter(function(e) {
                        return !!e.match(Ii)
                    }).map(function(e) {
                        var t = e;
                        t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                        var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/\(native code\)/, "").split(/\s+/).slice(1),
                            r = Oi(n.pop());
                        return Ai(n.join(" "), ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? "" : r[0], r[1], r[2])
                    }) : function(e) {
                        return e.split("\n").filter(function(e) {
                            return !e.match(Ci)
                        }).map(function(e) {
                            var t = e;
                            if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return [t, "", -1, -1];
                            var n = t.split("@"),
                                r = Oi(n.pop());
                            return Ai(n.join("@"), r[0], r[1], r[2])
                        })
                    }(t.stack)
                }

                function Ai(e, t, n, r) {
                    return [e || "", t || "", parseInt(n || "-1", 10), parseInt(r || "-1", 10)]
                }

                function Oi(e) {
                    if (!e || -1 === e.indexOf(":")) return ["", "", ""];
                    var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                    return t ? [t[1] || "", t[2] || "", t[3] || ""] : ["", "", ""]
                }
                var Pi = function() {
                    function e(e, t, n) {
                        this._queue = t, this._enabled = !1, this._overflow = !1, this._total = 0, this._hooks = [], this.maxLogsPerPage = se.MaxLogsPerPage, this._wnd = e.window, this._listeners = n.createChild()
                    }
                    return e.prototype.initializeMaxLogsPerPage = function(e) {
                        this.maxLogsPerPage = e
                    }, e.prototype._overflowMsg = function() {
                        return "\"[received more than " + this.maxLogsPerPage + " messages]\""
                    }, e.prototype.enable = function() {
                        var e = this;
                        if (this._listeners.add(this._wnd, "error", !0, function(t) {
                                return e.addError(t)
                            }), this._listeners.add(this._wnd, "unhandledrejection", !0, function(t) {
                                e.addLog("error", ["Uncaught (in promise)", t.reason])
                            }, !0), !this._enabled)
                            if (this._enabled = !0, this._queue.enqueue({
                                    Kind: O.REC_FEAT_SUPPORTED,
                                    Args: [J.Console, !0]
                                }), this._wnd.console)
                                for (var t = function(t) {
                                        var r = He(n._wnd.console, t);
                                        if (!r) return "continue";
                                        r.before(function(n) {
                                            var r = n.args;
                                            return e.addLog(t, r)
                                        }), n._hooks.push(r)
                                    }, n = this, r = 0, i = ["log", "info", "warn", "error"]; r < i.length; r++) {
                                    t(i[r])
                                } else this.addLog("log", ["NOTE: Log messages cannot be captured on IE9"])
                    }, e.prototype.isEnabled = function() {
                        return this._enabled
                    }, e.prototype.disable = function() {
                        var e;
                        if (this._listeners && this._listeners.clear(), this._enabled)
                            for (this._enabled = !1; e = this._hooks.pop();) e.disable()
                    }, e.prototype.logEvent = function(e, t) {
                        if (!this.checkOverflow()) return null;
                        var n;
                        n = -1 == ["log", "info", "warn", "error", "debug", "_fs_debug"].indexOf(e) ? ["log", xi(e, 1e3)] : [e];
                        for (var r = 0; r < t.length; ++r) n.push(xi(t[r], 1e3));
                        return {
                            Kind: O.LOG,
                            Args: n
                        }
                    }, e.prototype.addLog = function(e, t) {
                        var n = this.logEvent(e, t);
                        n && this._queue.enqueue(n)
                    }, e.prototype.addError = function(e) {
                        var t = e.message,
                            n = e.filename,
                            i = e.lineno;
                        (t || n || i) && this.checkOverflow() && ("object" == typeof t && (t = xi(t, 1e3)), "object" == typeof n && (n = xi(n, 100, !1)), "object" == typeof i && (i = -1), this._queue.enqueue({
                            Kind: O.ERROR,
                            Args: (0, r.__spreadArray)([t, n, i], Ri(e.error))
                        }))
                    }, e.prototype.checkOverflow = function() {
                        return !this._overflow && (this._total == this.maxLogsPerPage ? (this._queue.enqueue({
                            Kind: O.LOG,
                            Args: ["warn", this._overflowMsg()]
                        }), this._overflow = !0, !1) : (this._total++, !0))
                    }, e
                }();

                function xi(e, t, n) {
                    void 0 === n && (n = !0);
                    try {
                        var r = {
                            tokens: [],
                            opath: [],
                            cyclic: Li(e, t / 4)
                        };
                        Ni(e, t, 0, r);
                        var i = r.tokens.join("");
                        return n ? i.replace(Er, "<email>").replace(Tr, function(e) {
                            return pr(e, {
                                source: "log",
                                type: "debug"
                            })
                        }) : i
                    } catch (e) {
                        return Ue(e)
                    }
                }

                function Li(e, t) {
                    var n = 0;
                    try {
                        a.jsonStringify(e, function(e, r) {
                            if (n++ > t) throw "break";
                            if ("object" == typeof r) return r
                        })
                    } catch (e) {
                        return "break" != e
                    }
                    return !1
                }
                var Mi = function(e, t, n) {
                    return void 0 === n && (n = "..."), e.length <= t ? e : e.length <= n.length || t <= n.length ? e.substring(0, t) : e.substring(0, t - n.length) + n
                };

                function Ni(e, t, n, r) {
                    if (t < 1) return 0;
                    var i, o = e && e.constructor == Date ? (i = e, isNaN(i) ? "Invalid Date" : i.toUTCString()) : function(e) {
                        return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeType > 0 && "string" == typeof e.nodeName
                    }(e) ? function(e) {
                        return e.toString()
                    }(e) : void 0 === e ? "undefined" : "object" != typeof e || null == e ? e : e instanceof Error ? e.stack || e.name + ": " + e.message : void 0;
                    if (void 0 !== o) return void 0 === (o = a.jsonStringify(o)) ? 0 : ("\"" == o[0] && (o = Mi(o, t, "...\"")), o.length <= t ? (r.tokens.push(o), o.length) : 0);
                    if (r.cyclic) {
                        r.opath.splice(n);
                        var s = r.opath.lastIndexOf(e);
                        if (s > -1) {
                            var u = "<Cycle to ancestor #" + (n - s - 1) + ">";
                            return u = "\"" + Mi(u, t - 2) + "\"", r.tokens.push(u), u.length
                        }
                        r.opath.push(e)
                    }
                    var c = t,
                        h = function(e) {
                            return c >= e.length && (c -= e.length, r.tokens.push(e), !0)
                        },
                        d = function(e) {
                            "," == r.tokens[r.tokens.length - 1] ? r.tokens[r.tokens.length - 1] = e : h(e)
                        };
                    if (c < 2) return 0;
                    if (Te(e)) {
                        h("[");
                        for (var l = 0; l < e.length && c > 0; l++) {
                            var p = Ni(e[l], c - 1, n + 1, r);
                            if (c -= p, 0 == p && !h("null")) break;
                            h(",")
                        }
                        d("]")
                    } else {
                        h("{");
                        var f = ke(e);
                        for (l = 0; l < f.length && c > 0; l++) {
                            var _ = f[l],
                                v = e[_];
                            if (!h("\"" + _ + "\":")) break;
                            if (0 == (p = Ni(v, c - 1, n + 1, r))) {
                                r.tokens.pop();
                                break
                            }
                            c -= p, h(",")
                        }
                        d("}")
                    }
                    return t == 1 / 0 ? 1 : t - c
                }
                var Fi = function() {
                    function e(e, t) {
                        this._q = e, this._valueIndices = t, this._evts = [], this._curveEndMs = 0
                    }
                    return e.prototype.add = function(e) {
                        this._evts.length > 0 && this._evts[this._evts.length - 1].When === e.When && this._evts.pop(), 0 === this._evts.length ? (this._q.push(e), this._curveEndMs = e.When) : e.When > this._curveEndMs && (this._curveEndMs = e.When), this._evts.push(e)
                    }, e.prototype.finish = function(e, t) {
                        void 0 === t && (t = []);
                        var n = this._evts.length;
                        if (n <= 1) return !1;
                        for (var i = [], o = this._evts[0].When, s = this._evts[n - 1].When, a = s - o != 0 ? s - o : 1, u = 0; u < this._valueIndices.length; ++u) {
                            var c = this._valueIndices[u],
                                h = this._evts[0].Args[c],
                                d = (this._evts[1].When - o) / a,
                                l = (this._evts[1].Args[c] - h) / d,
                                p = this._evts[n - 2].Args[c],
                                f = (s - this._evts[n - 2].When) / a,
                                _ = this._evts[n - 1].Args[c],
                                v = (_ - p) / f;
                            i.push(h, _, l, v)
                        }
                        return this._evts[0].Kind = e, this._evts[0].Args = (0, r.__spreadArray)((0, r.__spreadArray)([this._curveEndMs], t), i), !0
                    }, e.prototype.evts = function() {
                        return this._evts
                    }, e
                }();
                var Ui = function() {
                    function e() {
                        this._size = 0, this._root = {}, this._root.next = this._root.prev = this._root
                    }
                    return e.prototype.first = function() {
                        return this._root.next.value
                    }, e.prototype.last = function() {
                        return this._root.prev.value
                    }, e.prototype.size = function() {
                        return this._size
                    }, e.prototype.push = function(e) {
                        this._size++, qi(this._root.prev, {
                            value: e
                        })
                    }, e.prototype.unshift = function(e) {
                        this._size++, qi(this._root, {
                            value: e
                        })
                    }, e.prototype.pop = function() {
                        return this._size > 0 && this._size--, Bi(this._root.prev)
                    }, e.prototype.shift = function() {
                        return this._size > 0 && this._size--, Bi(this._root.next)
                    }, e
                }();

                function qi(e, t) {
                    var n = e.next;
                    t.next = n, t.prev = e, e.next = n.prev = t
                }

                function Bi(e) {
                    var t = e.prev,
                        n = e.next;
                    return t.next = n, n.prev = t, e.value
                }
                var Di = function() {
                        function e(e, t) {
                            var n, r;
                            void 0 === t && (t = g), this._ctx = e, this._msSinceDocumentStart = t, this._clickTimes = new Ui, this._rageThreshold = 5, this._thresholdRaisedAt = -1, this._isIgnoredCache = new WeakMap;
                            var i = e.recording.pageResponse();
                            if (!i) throw new Error("Attempt to construct EasyBake before rec/page response is set.");
                            for (var o = [".fs-ignore-rage-clicks", ".fs-ignore-rage-clicks *"], s = 0, a = null !== (r = null === (n = i.BehaviorSignalSettings) || void 0 === n ? void 0 : n.ElementBlocks) && void 0 !== r ? r : []; s < a.length; s++) {
                                var u = a[s];
                                u.Signals.indexOf(ne.SignalRageClick) > -1 && (o.push(u.Selector), o.push(u.Selector + " *"))
                            }
                            var c = o.join(", ");
                            qr(c) ? this._ignoreRageClickSelectors = [c] : this._ignoreRageClickSelectors = o
                        }
                        return e.prototype._isIgnored = function(e) {
                            var t = this._isIgnoredCache.get(e);
                            if (void 0 !== t) return t;
                            for (var n = 0, r = this._ignoreRageClickSelectors; n < r.length; n++) {
                                var i = r[n];
                                if (a.elMatches(e, i)) return this._isIgnoredCache.set(e, !0), !0
                            }
                            return this._isIgnoredCache.set(e, !1), !1
                        }, e.prototype.onEvent = function(e) {
                            var t;
                            if (function(e) {
                                    switch (e) {
                                        case O.VALUECHANGE:
                                        case O.SCROLL_LAYOUT:
                                        case O.SCROLL_LAYOUT_CURVE:
                                        case O.SCROLL_VISUAL_OFFSET:
                                        case O.SCROLL_VISUAL_OFFSET_CURVE:
                                        case O.MUT_INSERT:
                                        case O.MUT_REMOVE:
                                        case O.MUT_ATTR:
                                        case O.MUT_SHADOW:
                                        case O.MUT_TEXT:
                                        case O.NAVIGATE:
                                        case O.LOAD:
                                        case O.FOCUS:
                                        case O.BLUR:
                                        case O.SELECT:
                                        case O.FORM_SUBMIT:
                                        case O.PLAY:
                                        case O.PAUSE:
                                        case O.MODAL_OPEN:
                                        case O.MODAL_CLOSE:
                                            return !0;
                                    }
                                    return !1
                                }(e.Kind) && 8 !== this._rageThreshold) return this._rageThreshold = 8, void(this._thresholdRaisedAt = this._msSinceDocumentStart());
                            if (e.Kind === O.CLICK) {
                                var n = this._msSinceDocumentStart(),
                                    r = null === (t = fn(e.Args[0])) || void 0 === t ? void 0 : t.node;
                                if (r) {
                                    var i = 1 === r.nodeType ? r : r.parentElement;
                                    if (!this._isIgnored(i)) {
                                        var o = nn(r);
                                        if (!(o && ("textarea" === o || "select" === o || "input" === o && "submit" !== r.type))) {
                                            this._clickTimes.push(n);
                                            for (var s = n - 2e3;;) {
                                                var a = this._clickTimes.first();
                                                if (!(void 0 !== a && a < s)) break;
                                                this._clickTimes.shift()
                                            }
                                            if (this._thresholdRaisedAt < n - 2e3 && (this._rageThreshold = 5), this._clickTimes.size() >= this._rageThreshold) {
                                                var u = this._ctx.recording.getCurrentSessionURL,
                                                    c = {
                                                        eventStartTimeStamp: this._clickTimes.first(),
                                                        eventEndTimeStamp: n,
                                                        eventReplayUrlAtStart: u(),
                                                        eventReplayUrlAtCurrentTime: u(!0)
                                                    };
                                                this.dispatchRageClickEvent(r, c), this._rageThreshold = 5, this._clickTimes = new Ui
                                            }
                                        }
                                    }
                                }
                            }
                        }, e.prototype.dispatchRageClickEvent = function(e, t) {
                            var n, r = "fullstory/rageclick";
                            try {
                                n = new CustomEvent(r, {
                                    detail: t,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                (n = document.createEvent("customevent")).initCustomEvent(r, !0, !0, t)
                            }
                            a.setWindowTimeout(window, Qe.wrap(function() {
                                e.dispatchEvent(n)
                            }), 0)
                        }, e
                    }(),
                    Wi = function() {
                        function e(e, t, n, r) {
                            void 0 === n && (n = function() {
                                return []
                            }), void 0 === r && (r = Sn), this._ctx = e, this._transport = t, this._gatherExternalEvents = n, this._tickerFactory = r, this._frameId = 0, this._parentIds = [], this._pipelineStarted = !1, this._recordingDisabled = !1, this._activeSimultaneousEventsTransactions = 0, this._lastWhen = -1, this._gotUnload = !1, this._eventQueue = [], this._sampleCurvesTicker = new this._tickerFactory(se.CurveSamplingInterval), this._processMutationsTicker = new this._tickerFactory(se.MutationProcessingInterval)
                        }
                        return e.prototype.startPipeline = function(e) {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var t, n = this;
                                return (0, r.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this._recordingDisabled || this._pipelineStarted ? [2] : (this._pipelineStarted = !0, e.frameId && (this._frameId = e.frameId), e.parentIds && (this._parentIds = e.parentIds), t = !0, [4, qt()]);
                                        case 1:
                                            return r.sent(), this.processEvents(), [4, qt()];
                                        case 2:
                                            return r.sent(), this._processMutationsTicker.start(function() {
                                                n.processEvents()
                                            }), this._sampleCurvesTicker.start(function() {
                                                n.processEvents(t)
                                            }), this._transport.startPipeline(e), [2];
                                    }
                                })
                            })
                        }, e.prototype.enableEasyBake = function() {
                            this._easyBake = new Di(this._ctx)
                        }, e.prototype.enqueueSimultaneousEventsIn = function(e) {
                            if (0 === this._activeSimultaneousEventsTransactions) {
                                var t = this._ctx.time.now();
                                this._lastWhen = t > this._lastWhen ? t : this._lastWhen
                            }
                            try {
                                return this._activeSimultaneousEventsTransactions++, e(this._lastWhen)
                            } finally {
                                this._activeSimultaneousEventsTransactions--, this._activeSimultaneousEventsTransactions < 0 && (this._activeSimultaneousEventsTransactions = 0)
                            }
                        }, e.prototype.enqueue = function(e) {
                            var t = this._activeSimultaneousEventsTransactions > 0 ? this._lastWhen : this._ctx.time.now();
                            this.enqueueAt(t, e), wn.checkForBrokenSchedulers()
                        }, e.prototype.enqueueAt = function(e, t) {
                            var n;
                            if (!this._recordingDisabled) {
                                var r = e;
                                r < this._lastWhen && (r = this._lastWhen), this._lastWhen = r;
                                var i = t;
                                i.When = r, this._eventQueue.push(i);
                                try {
                                    null === (n = this._easyBake) || void 0 === n || n.onEvent(i)
                                } catch (e) {
                                    Qe.sendToBugsnag(e, "error")
                                }
                            }
                        }, e.prototype.enqueueFirst = function(e) {
                            if (this._eventQueue.length > 0) {
                                var t = e;
                                t.When = this._eventQueue[0].When, this._eventQueue.unshift(t)
                            } else this.enqueue(e)
                        }, e.prototype.addUnload = function(e) {
                            this._gotUnload || (this._gotUnload = !0, this.enqueue({
                                Kind: O.UNLOAD,
                                Args: [e]
                            }), this.singSwanSong())
                        }, e.prototype.shutdown = function(e) {
                            this.addUnload(e), this._flush(), this._recordingDisabled = !0, this.stopPipeline()
                        }, e.prototype._flush = function() {
                            this.processEvents(), this._transport.flush()
                        }, e.prototype.singSwanSong = function() {
                            this._recordingDisabled || (this.processEvents(), this._transport.singSwanSong())
                        }, e.prototype.rebaseIframe = function(e, t) {
                            for (var n = Math.max(0, t), r = this._ctx.time.startTime(), i = function(t) {
                                    var i = r + t - e;
                                    return i >= n ? i : n
                                }, o = 0, s = this._eventQueue; o < s.length; o++) {
                                var a = s[o];
                                a.When = i(a.When)
                            } - 1 === this._lastWhen ? this._lastWhen = n : this._lastWhen = i(this._lastWhen)
                        }, e.prototype.processEvents = function(e) {
                            if (this._pipelineStarted) {
                                var t = this._eventQueue;
                                this._eventQueue = [];
                                var n = function(e) {
                                    if (0 == e.length) return e;
                                    for (var t, n = [], r = new Fi(n, [0, 1]), i = {}, o = {}, s = {}, a = 0, u = e; a < u.length; a++) {
                                        var c = u[a];
                                        switch (c.Kind) {
                                            case O.MOUSEMOVE:
                                                r.add(c);
                                                break;
                                            case O.TOUCHMOVE:
                                                (l = c.Args[0]) in i || (i[l] = new Fi(n, [1, 2])), i[l].add(c);
                                                break;
                                            case O.SCROLL_LAYOUT:
                                                (l = c.Args[0]) in o || (o[l] = new Fi(n, [1, 2])), o[l].add(c);
                                                break;
                                            case O.SCROLL_VISUAL_OFFSET:
                                                (l = c.Args[0]) in s || (s[l] = new Fi(n, [1, 2])), s[l].add(c);
                                                break;
                                            case O.RESIZE_VISUAL:
                                                t || (t = new Fi(n, [0, 1])), t.add(c);
                                                break;
                                            default:
                                                n.push(c);
                                        }
                                    }
                                    if (r.finish(O.MOUSEMOVE_CURVE)) {
                                        var h = r.evts();
                                        if (h.length > 0) {
                                            var d = h[h.length - 1].Args[2];
                                            d && (h[0].Args[9] = d)
                                        }
                                    }
                                    for (var l in o) o[p = parseInt(l, 10)].finish(O.SCROLL_LAYOUT_CURVE, [p]);
                                    for (var l in s) s[p = parseInt(l, 10)].finish(O.SCROLL_VISUAL_OFFSET_CURVE, [p]);
                                    for (var l in i) {
                                        var p;
                                        i[p = parseInt(l, 10)].finish(O.TOUCHMOVE_CURVE, [p])
                                    }
                                    return t && t.finish(O.RESIZE_VISUAL_CURVE), n
                                }(t);
                                e || (n = n.concat(this._gatherExternalEvents())), this.ensureFrameIds(n), 0 != n.length && this._transport.enqueueEvents(this._ctx.recording.pageSignature(), n)
                            }
                        }, e.prototype.ensureFrameIds = function(e) {
                            if (this._frameId)
                                for (var t = this._parentIds, n = t && t.length > 0, r = 0; r < e.length; ++r) {
                                    var i = e[r];
                                    i.FId || (i.FId = this._frameId), n && !i.PIds && (i.PIds = t)
                                }
                        }, e.prototype.stopPipeline = function() {
                            this._pipelineStarted && (this._sampleCurvesTicker.stop(), this._processMutationsTicker.stop(), this._eventQueue = [], this._transport.stopPipeline())
                        }, e
                    }(),
                    Hi = function() {
                        function e(e) {
                            void 0 === e && (e = 4), this.hashCount = e, this.idx = 0, this.hashMask = e - 1, this.reset()
                        }
                        return e.prototype.reset = function() {
                            this.idx = 0, this.hash = [];
                            for (var e = 0; e < this.hashCount; ++e) this.hash.push(2166136261)
                        }, e.prototype.write = function(e) {
                            for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++) this.hash[n] = this.hash[n] ^ e[r], this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24), n = n + 1 & t;
                            this.idx = n
                        }, e.prototype.writeAscii = function(e) {
                            for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++) this.hash[n] = this.hash[n] ^ e.charCodeAt(r), this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24), n = n + 1 & t;
                            this.idx = n
                        }, e.prototype.sum = function() {
                            var e, t = this.sumAsHex();
                            return e = t.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").map(Number), Ki(String.fromCharCode.apply(window, e))
                        }, e.prototype.sumAsHex = function() {
                            for (var e = "", t = 0; t < this.hashCount; ++t) e += ("00000000" + (this.hash[t] >>> 0).toString(16)).slice(-8);
                            return e
                        }, e
                    }();

                function Vi(e) {
                    var t = new Hi(1);
                    return t.writeAscii(e), t.sumAsHex()
                }

                function ji(e) {
                    var t = new Uint8Array(e);
                    return Ki(String.fromCharCode.apply(null, t))
                }

                function Ki(e) {
                    var t;
                    return (null !== (t = window.btoa) && void 0 !== t ? t : zi)(e).replace(/\+/g, "-").replace(/\//g, "_")
                }

                function zi(e) {
                    for (var t = String(e), n = [], r = 0, i = 0, o = 0, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; t.charAt(0 | o) || (s = "=", o % 1); n.push(s.charAt(63 & r >> 8 - o % 1 * 8))) {
                        if ((i = t.charCodeAt(o += 3 / 4)) > 255) throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                        r = r << 8 | i
                    }
                    return n.join("")
                }

                function Yi(e, t, n, i) {
                    return void 0 === i && (i = new Hi), (0, r.__awaiter)(this, void 0, Lt, function() {
                        var o, s, a, u;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    o = e.now(), s = n.byteLength, a = 0, r.label = 1;
                                case 1:
                                    return a < s ? e.now() - o > 25 ? [4, t(100)] : [3, 3] : [3, 5];
                                case 2:
                                    r.sent(), o = e.now(), r.label = 3;
                                case 3:
                                    u = new Uint8Array(n, a, Math.min(s - a, 1e4)), i.write(u), r.label = 4;
                                case 4:
                                    return a += 1e4, [3, 1];
                                case 5:
                                    return [2, {
                                        hash: i.sum(),
                                        hasher: i
                                    }];
                            }
                        })
                    })
                }
                var Gi = 6e6,
                    Qi = function() {
                        function e(e, t, n, r, i) {
                            void 0 === r && (r = window.FormData), void 0 === i && (i = bn), this.ctx = e, this.queue = t, this.protocol = n, this.FormDataCtr = r, this.Timeout = i, this.started = {}, this.byUrl = {}, this.batchReady = !1, this.existsBatch = [], this._sentToBugsnag = !1
                        }
                        return e.prototype.init = function() {
                            this.FormDataCtr && this.main()["catch"](function(e) {
                                Qe.sendToBugsnag(e, "error")
                            })
                        }, e.prototype.main = function() {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var e, t, n, i, o, a, u, c, h, d, l, p, f, _, v, g, m, y, w, S, b, E, T, k, I, C;
                                return (0, r.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            e = this.ctx.options.orgId, r.label = 1;
                                        case 1:
                                            return [4, this.getBatch()];
                                        case 2:
                                            for (t = r.sent(), n = {
                                                    fsnv: [],
                                                    sha1: []
                                                }, i = 0, o = t; i < o.length; i++) a = o[i], u = a.hash, v = a.hashAlgorithm, n[v].push(u);
                                            for (c = {}, h = 0, d = t; h < d.length; h++) l = d[h], c[l.hash] = l;
                                            n.fsnv.sort(), n.sha1.sort(), p = void 0, r.label = 3;
                                        case 3:
                                            return r.trys.push([3, 5, , 6]), [4, this.protocol.queryResources({
                                                OrgId: e,
                                                HashesByAlgorithm: n
                                            })];
                                        case 4:
                                            return p = r.sent(), [3, 6];
                                        case 5:
                                            return s("/rec/queryResources failed with status " + r.sent()), [3, 1];
                                        case 6:
                                            for (f = 0, _ = p; f < _.length; f++)
                                                if ((y = _[f]).Found && y.CanonicalHash) {
                                                    if (!(w = c[y.QueryHash])) {
                                                        this.sendOnceToBugsnag("No resource found for hash");
                                                        continue
                                                    }
                                                    if (w.blob = w.stringData = null, "fsnv" !== (v = y.CanonicalHash.Algorithm)) {
                                                        this.sendOnceToBugsnag("Unrecognized canonical hash type", {
                                                            hashAlgorithm: v
                                                        });
                                                        continue
                                                    }
                                                    this.queue.enqueue({
                                                        Kind: O.SYS_RESOURCEHASH,
                                                        Args: ["url", w.url, y.CanonicalHash.Hash]
                                                    })
                                                } else;
                                            g = 0, m = p, r.label = 7;
                                        case 7:
                                            if (!(g < m.length)) return [3, 12];
                                            if ((y = m[g]).Found && y.CanonicalHash) return [3, 11];
                                            if (null == (w = c[y.QueryHash])) return this.sendOnceToBugsnag("Server told us to upload a hash we don't have"), [3, 11];
                                            if (S = w.url, b = w.contentType, !(E = w.blob || w.stringData)) return this.sendOnceToBugsnag("Missing resource contents"), [3, 11];
                                            if (T = w.blob || new Blob([E], {
                                                    type: b
                                                }), null == E) return this.sendOnceToBugsnag("Tried to re-upload a resource"), [3, 11];
                                            if ((k = new this.FormDataCtr).append("orgId", e), k.append("baseUrl", S), "fsnv" === y.QueryAlgorithm) k.append("fsnvHash", y.QueryHash);
                                            else {
                                                if ("sha1" !== y.QueryAlgorithm) return this.sendOnceToBugsnag("Unrecognized hash type from resource query", {
                                                    hashAlgorithm: y.QueryAlgorithm
                                                }), [3, 11];
                                                k.append("sha1Hash", y.QueryHash)
                                            }
                                            k.append("contents", T, "blob"), w.blob = w.stringData = null, r.label = 8;
                                        case 8:
                                            return r.trys.push([8, 10, , 11]), [4, this.protocol.uploadResource(k)];
                                        case 9:
                                            return I = r.sent(), "fsnv" != (C = JSON.parse(I)).Algorithm && this.sendOnceToBugsnag("Unexpected hash type from resource upload", {
                                                hashAlgorithm: C.Algorithm
                                            }), this.queue.enqueue({
                                                Kind: O.SYS_RESOURCEHASH,
                                                Args: ["url", S, C.Hash]
                                            }), [3, 11];
                                        case 10:
                                            return r.sent(), s("Server error uploading resource"), [3, 11];
                                        case 11:
                                            return g++, [3, 7];
                                        case 12:
                                            return [3, 1];
                                        case 13:
                                            return [2];
                                    }
                                })
                            })
                        }, e.prototype.getBatch = function() {
                            var e = this,
                                t = Mt(),
                                n = t.resolve,
                                r = t.promise,
                                i = function() {
                                    e.popBatch = null, e.batchReady = !1;
                                    var t = e.existsBatch;
                                    e.existsBatch = [], n(t)
                                };
                            return this.batchReady ? i() : this.popBatch = i, r
                        }, e.prototype.uploadIfNeeded = function(e, t) {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var n, i, o, s, a = this;
                                return (0, r.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.FormDataCtr ? (n = Dn(Wn(e), t), i = n.href, this.started[i] ? [2] : function(e, t) {
                                                switch (t.protocol) {
                                                    case "blob:":
                                                        return !0;
                                                    case "http:":
                                                    case "https:":
                                                        switch (t.hostname) {
                                                            case "localhost":
                                                            case "127.0.0.1":
                                                            case "[::1]":
                                                                return e.location.protocol === t.protocol && e.location.host === t.host;
                                                            case "::1":
                                                                var n = t.port ? "[::1]:" + t.port : "[::1]";
                                                                return e.location.protocol === t.protocol && e.location.host === n;
                                                            default:
                                                                return !1;
                                                        }
                                                        default:
                                                            return !1;
                                                }
                                            }(e, n) ? (this.started[i] = !0, [4, this.processResource(i)]) : [2]) : [2];
                                        case 1:
                                            return (o = r.sent()) ? (s = 0 == this.existsBatch.length, this.existsBatch.push(o), s && new this.Timeout(function() {
                                                a.batchReady = !0, a.popBatch && a.popBatch()
                                            }, 50).start(), [2]) : [2];
                                    }
                                })
                            })
                        }, e.prototype.processResource = function(e) {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var t, n, i, o, s;
                                return (0, r.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.byUrl[e] ? [2, this.byUrl[e]] : [4, Xi(e)];
                                        case 1:
                                            return (t = r.sent()) ? [4, Ji(this.ctx, t.buffer)] : [2, null];
                                        case 2:
                                            return n = r.sent(), i = n.hash, o = n.algorithm, s = {
                                                hash: i,
                                                hashAlgorithm: o,
                                                url: e,
                                                blob: t.blob,
                                                contentType: t.contentType
                                            }, this.byUrl[s.url] = s, [2, s];
                                    }
                                })
                            })
                        }, e.prototype.sendOnceToBugsnag = function(e, t) {
                            this._sentToBugsnag || (this._sentToBugsnag = !0, s(e), Qe.sendToBugsnag(e, "error", t))
                        }, e
                    }();

                function Xi(e) {
                    var t = Mt(),
                        n = t.resolve,
                        r = t.promise,
                        i = new XMLHttpRequest;
                    return "string" != typeof i.responseType ? (n(null), r) : (i.open("GET", e, !0), i.responseType = "blob", i.onerror = function() {
                        n(null)
                    }, i.onload = function() {
                        if (200 != i.status) return s("Error loading blob resource " + pr(e, {
                            source: "log",
                            type: "debug"
                        })), void n(null);
                        var t = i.response;
                        if ((t.size || t.length) > Gi) {
                            var r = pr(e, {
                                source: "log",
                                type: "bugsnag"
                            });
                            return Qe.sendToBugsnag("Size of blob resource exceeds limit", "warning", {
                                url: r,
                                MaxResourceSizeBytes: Gi
                            }), void n(null)
                        }(function(e) {
                            var t = Mt(),
                                n = t.resolve,
                                r = t.promise,
                                i = new FileReader;
                            return i.readAsArrayBuffer(e), i.onload = function() {
                                n(i.result)
                            }, i.onerror = function(e) {
                                Qe.sendToBugsnag(e, "error"), n(null)
                            }, r
                        })(t).then(function(e) {
                            n(e ? {
                                buffer: e,
                                blob: t,
                                contentType: t.type
                            } : null)
                        })
                    }, i.send(), r)
                }

                function Ji(e, t) {
                    var n, i;
                    return (0, r.__awaiter)(this, void 0, Lt, function() {
                        var o;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return o = e.window, (null === (i = null === (n = o.crypto) || void 0 === n ? void 0 : n.subtle) || void 0 === i ? void 0 : i.digest) ? [4, o.crypto.subtle.digest({
                                        name: "sha-1"
                                    }, t)] : [3, 2];
                                case 1:
                                    return [2, {
                                        hash: ji(r.sent()),
                                        algorithm: "sha1"
                                    }];
                                case 2:
                                    return [4, Yi(e.time, Nt, t)];
                                case 3:
                                    return [2, {
                                        hash: r.sent().hash,
                                        algorithm: "fsnv"
                                    }];
                            }
                        })
                    })
                }
                var Zi = function() {
                        function e(e) {
                            this._byteCount = 0, this._scheme = e.options.scheme, this._recHost = e.options.recHost, this._ctx = e
                        }
                        return e.prototype.page = function(e, t, n) {
                            this.post("/rec/page", Fe(e), function(e) {
                                try {
                                    t(Be(e))
                                } catch (e) {
                                    n(0)
                                }
                            }, function(e, t) {
                                if (t) try {
                                    return n(0, Be(t))
                                } catch (e) {}
                                n(0)
                            })
                        }, e.prototype.bundle = function(e) {
                            var t = Fe(e.bundle);
                            this._byteCount += t.length, s("total bytes written: " + this._byteCount);
                            var n = eo(e.bundle.Seq, e);
                            return this.post(n, t, function(t) {
                                try {
                                    e.win(Be(t))
                                } catch (n) {
                                    Qe.sendToBugsnag("Failed to JSON parse /rec/bundle response", "error", {
                                        rsp: t,
                                        error: n.toString()
                                    }), e.lose(0)
                                }
                            }, e.lose), this._byteCount
                        }, e.prototype.bundleBeacon = function(e) {
                            var t;
                            return ro(this._scheme, to(null === (t = this._ctx.recording.pageResponse()) || void 0 === t ? void 0 : t.GCLBSubdomain, this._recHost), e)
                        }, e.prototype.exponentialBackoffMs = function(e, t) {
                            var n = a.mathMin(se.BackoffMax, 5e3 * a.mathPow(2, e));
                            return t ? n + .25 * a.mathRandom() * n : n
                        }, e.prototype.post = function(e, t, n, r) {
                            var i;
                            no(this._scheme, to(null === (i = this._ctx.recording.pageResponse()) || void 0 === i ? void 0 : i.GCLBSubdomain, this._recHost), e, t, n, r)
                        }, e
                    }(),
                    $i = function() {
                        function e(e) {
                            this._scheme = e.options.scheme, this._recHost = e.options.recHost, this._ctx = e
                        }
                        return e.prototype.uploadResource = function(e) {
                            var t = this;
                            return new Lt(function(n, r) {
                                var i;
                                no(t._scheme, to(null === (i = t._ctx.recording.pageResponse()) || void 0 === i ? void 0 : i.GCLBSubdomain, t._recHost), "/rec/uploadResource", e, n, r)
                            })
                        }, e.prototype.queryResources = function(e) {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                var t, n, i = this;
                                return (0, r.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return t = JSON.stringify(e), [4, new Lt(function(e, n) {
                                                var r;
                                                no(i._scheme, to(null === (r = i._ctx.recording.pageResponse()) || void 0 === r ? void 0 : r.GCLBSubdomain, i._recHost), "/rec/queryResources", t, e, n)
                                            })];
                                        case 1:
                                            return n = r.sent(), [2, JSON.parse(n)];
                                    }
                                })
                            })
                        }, e
                    }();

                function eo(e, t) {
                    var n = "/rec/bundle?OrgId=" + t.orgId + "&UserId=" + t.userId + "&SessionId=" + t.sessionId + "&PageId=" + t.pageId + "&Seq=" + e;
                    return null != t.serverPageStart && (n += "&PageStart=" + t.serverPageStart), null != t.serverBundleTime && (n += "&PrevBundleTime=" + t.serverBundleTime), null != t.lastUserActivity && (n += "&LastActivity=" + t.lastUserActivity), t.isNewSession && (n += "&IsNewSession=true"), null != t.deltaT && (n += "&DeltaT=" + t.deltaT), n
                }

                function to(e, t) {
                    return e && (n = t, M.test(n)) ? t.replace(/^rs\./, e + ".") : t;
                    var n
                }

                function no(e, t, n, r, i, o) {
                    var s = "//" + t + n,
                        a = !1,
                        u = new XMLHttpRequest;
                    if ("withCredentials" in u) u.onreadystatechange = function() {
                        if (4 == u.readyState) {
                            if (a) return;
                            a = !0;
                            try {
                                200 == u.status ? i(u.responseText) : o && o(u.status, u.responseText)
                            } catch (e) {
                                Qe.sendToBugsnag(e, "error")
                            }
                        }
                    }, u.open("POST", e + s, !0), u.withCredentials = !0, "function" != typeof r.append && u.setRequestHeader("Content-Type", "text/plain"), u.send(r);
                    else {
                        var c = new XDomainRequest;
                        c.onload = function() {
                            i(c.responseText)
                        }, c.onerror = function() {
                            o && o("Not Found" == c.responseText ? 404 : 500, c.responseText)
                        }, c.onprogress = function() {}, c.open("POST", s), c.send(r)
                    }
                }

                function ro(e, t, n) {
                    if ("function" == typeof navigator.sendBeacon) {
                        var r = e + "//" + t + eo(n.bundle.Seq, n) + "&SkipResponseBody=true",
                            i = Fe(n.bundle);
                        try {
                            return navigator.sendBeacon(r, i)
                        } catch (e) {
                            Qe.sendToBugsnag(e, "error", {
                                url: r,
                                data: i
                            })
                        }
                    }
                    return !1
                }
                var io = JSON.parse("{\"AGQFM\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[\"reset-password\"]},\"95NJ7\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[\"reset-password\"]},\"RV68C\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[\"dl\"]},\"QS8RG\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[\"visitor\",\"account\",\"parentAccount\"]},\"FP60X\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[\"retailer\",\"ocadotech\",\"serviceAccounts\"]},\"7R98D\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[\"signup\"]},\"WEN2C\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[\"studies\",\"EU\",\"findings\"]},\"WQF2B\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[\"app/accounts\",\"app/order\",\"app/trade\"]},\"NWP68\":{\"urlHashBlocklist\":[],\"urlPathBlocklist\":[]},\"104r\":{\"urlHashBlocklist\":[\"#;;i=\"],\"urlPathBlocklist\":[]},\"Y94AN\":{\"urlHashBlocklist\":[\"#/app/\"],\"urlPathBlocklist\":[]},\"PEXXD\":{\"urlHashBlocklist\":[\"#/password-reset\"],\"urlPathBlocklist\":[]},\"Q6BJX\":{\"urlHashBlocklist\":[\"#token=\"],\"urlPathBlocklist\":[]}}"),
                    oo = function() {
                        function e(e, t, n) {
                            void 0 === n && (n = new so), this._ctx = e, this._q = t, this._matcher = n
                        }
                        return e.prototype.initialize = function(e) {
                            var t;
                            if (e) {
                                this._setUrlKeeps(e);
                                var n = null === (t = this._ctx.window.location) || void 0 === t ? void 0 : t.href;
                                this.onNavigate(n)
                            }
                        }, e.prototype.onNavigate = function(e) {
                            return !!this._matcher.matches(e) && (this._q.enqueue({
                                Kind: O.KEEP_URL,
                                Args: [this._scrubUrl(e)]
                            }), !0)
                        }, e.prototype.onClick = function(e) {
                            var t;
                            return !!(null === (t = null == e ? void 0 : e.watchKind) || void 0 === t ? void 0 : t.has(32)) && (this._q.enqueue({
                                Kind: O.KEEP_ELEMENT,
                                Args: [e.id]
                            }), !0)
                        }, e.prototype.urlMatches = function(e) {
                            return this._matcher.matches(e)
                        }, e.prototype._setUrlKeeps = function(e) {
                            this._matcher.setRules(e)
                        }, e.prototype._scrubUrl = function(e) {
                            return pr(e, {
                                source: "page",
                                type: "base"
                            })
                        }, e
                    }(),
                    so = function() {
                        function e() {
                            this._regexes = null
                        }
                        return e.prototype.setRules = function(e) {
                            var t = e.map(function(e) {
                                return e.Regex
                            }).filter(this._isValidRegex);
                            t.length > 0 && (this._regexes = this._joinRegexes(t))
                        }, e.prototype.matches = function(e) {
                            return !!this._regexes && this._regexes.test(e)
                        }, e.prototype._isValidRegex = function(e) {
                            try {
                                return new RegExp(e), !0
                            } catch (t) {
                                return Qe.sendToBugsnag("Browser rejected UrlKeep.Regex", "error", {
                                    expr: e,
                                    error: t.toString()
                                }), !1
                            }
                        }, e.prototype._joinRegexes = function(e) {
                            try {
                                return new RegExp("(" + e.join(")|(") + ")", "i")
                            } catch (t) {
                                return Qe.sendToBugsnag("Browser rejected joining UrlKeep.Regexs", "error", {
                                    exprs: e,
                                    error: t.toString()
                                }), null
                            }
                        }, e
                    }();
                var ao = "__fs";

                function uo(e, t) {
                    e && e.postMessage && e.postMessage(function(e) {
                        var t;
                        return Fe(((t = {}).__fs = e, t))
                    }(t), "*")
                }

                function co(e) {
                    try {
                        var t = Be(e);
                        if (ao in t) return t.__fs
                    } catch (e) {}
                    return ["Unknown"]
                }

                function ho(e, t, n, r) {
                    var i = D(e);
                    if (!i) return !1;
                    try {
                        i.send(t, n, r)
                    } catch (e) {
                        i.send(t, n)
                    }
                    return !0
                }
                var lo = new RegExp(/^\s+$/),
                    po = /^fb\d{18}$/,
                    fo = function(e) {
                        var t = e.frame,
                            n = e.orgId,
                            r = e.scheme,
                            i = e.script,
                            u = e.recHost,
                            c = e.appHost,
                            h = e.namespace,
                            d = _o(t);
                        s("Injecting into Frame " + d);
                        try {
                            if (function(e) {
                                    return e.id == e.name && po.test(e.id)
                                }(t)) return void s("Blocklisted iframe: " + d);
                            if (function(e) {
                                    if (!e.contentDocument || !e.contentWindow || !e.contentWindow.location) return !0;
                                    return function(e) {
                                        return !!e.src && "about:blank" != e.src && e.src.indexOf("javascript:") < 0
                                    }(e) && e.src != e.contentWindow.location.href && "loading" == e.contentDocument.readyState
                                }(t)) return void s("Frame not yet loaded: " + d);
                            var l = t.contentWindow,
                                p = t.contentDocument;
                            if (!l || !p) return void s("Missing contentWindow or contentDocument: " + d);
                            if (!p.head) return void s("Missing contentDocument.head: " + d);
                            if (!p.body || 0 === p.body.childNodes.length) return;
                            for (var f = !1, _ = p.body.childNodes, v = 0; v < _.length; v++) {
                                switch (_[v].nodeType) {
                                    case Node.ELEMENT_NODE:
                                        if ("SCRIPT" === _[v].tagName) continue;
                                        break;
                                    case Node.TEXT_NODE:
                                        var g = _[v].textContent;
                                        if (null === g || lo.test(g)) continue;
                                        break;
                                    case Node.COMMENT_NODE:
                                        continue;
                                }
                                f = !0;
                                break
                            }
                            if (!f) return;
                            if (R(l)) return void s("FS already defined in Frame contentWindow: " + d + " Ignoring.");
                            var m = l;
                            m._fs_org = n, m._fs_script = i, m._fs_rec_host = u, m._fs_app_host = c, m._fs_debug = o(), m._fs_run_in_iframe = !0, m._fs_transport = function(e) {
                                    return {
                                        send: function(t, n, r) {
                                            if (void 0 !== e.parent) {
                                                var i = R(e.parent);
                                                void 0 !== i && "function" == typeof i._withRecorder ? i._withRecorder(r, function(i) {
                                                    try {
                                                        i.onMessageReceived(e, [t, a.jsonParse(n), r])
                                                    } catch (e) {
                                                        e instanceof SyntaxError && Qe.sendToBugsnag(e, "error", {
                                                            msg: "Received invalid JSON"
                                                        })
                                                    }
                                                }) : s("stateless transport: missing FS or _withRecorder api")
                                            } else s("stateless transport: missing window.parent")
                                        }
                                    }
                                }(m),
                                function(e, t, n, r, i, o, s) {
                                    if (n in e) e.console && e.console.log && e.console.log("FullStory namespace conflict. Please set window[\"_fs_namespace\"].");
                                    else {
                                        var a = e[n] = function(e, t, n) {
                                            a.q ? a.q.push([e, t, n]) : a._api(e, t, n)
                                        };
                                        a.q = [];
                                        var u = t.createElement(r);
                                        u.async = 1, u.src = i + "//" + o, u.crossOrigin = "anonymous", "testdrive" == s && (u.src += "?allowMoo=true");
                                        var c = t.getElementsByTagName(r);
                                        c && c.length > 0 ? c[0].parentNode.insertBefore(u, c[0]) : t.head.appendChild(u), a.event = function(e, t, n) {
                                            a("event", {
                                                n: e,
                                                p: t
                                            }, n)
                                        }, a.log = function(e, t) {
                                            a("log", [e, t])
                                        }
                                    }
                                }(m, p, h, "script", r, i, n)
                        } catch (e) {
                            s("iFrame no injecty. Probably not same origin.")
                        }
                    };

                function _o(e) {
                    var t = "" + _n(e);
                    return e.id && (t += "#" + e.id), t += "[src=" + pr(e.src, {
                        source: "log",
                        type: "debug"
                    }) + "]"
                }
                var vo;
                ! function(e) {
                    e[e.NoInfoYet = 1] = "NoInfoYet", e[e.Enabled = 2] = "Enabled", e[e.Disabled = 3] = "Disabled"
                }(vo || (vo = {}));
                var go = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this._ctx = e, this._transport = n, this._injector = r, this._orgSettings = se.DefaultOrgSettings, this._frameId = null, this._parentIds = [], this._bundleUploadInterval = se.DefaultBundleUploadInterval, this._childFrames = [], this._childFrameListeners = new WeakMap, this._pendingChildFrameIdInits = [], this._listeners = new et, this._getCurrentSessionEnabled = vo.NoInfoYet, this._resourceUploadingEnabled = !1;
                        this._pendingIframes = {}, this._queue = new Wi(e, this._transport, function() {
                            return i._eventWatcher.bundleEvents()
                        }, t);
                        var o = new Qi(e, this._queue, new $i(e));
                        this._watcher = new Kr, this._keep = new oo(e, this._queue), this._eventWatcher = new Si(e, this._queue, this._keep, this._watcher, this._listeners, function(e) {
                            return i.onFrameCreated(e)
                        }, function(e) {
                            return i.beforeFrameRemoved(e)
                        }, o), this._consoleWatcher = new Pi(e, this._queue, this._listeners), this._scheme = e.options.scheme, this._script = e.options.script, this._recHost = e.options.recHost, this._appHost = e.options.appHost, this._orgId = e.options.orgId, this._wnd = e.window
                    }
                    return e.prototype.getPageResponse = function() {
                        return this._pageRsp
                    }, e.prototype.bundleUploadInterval = function() {
                        return this._bundleUploadInterval
                    }, e.prototype.orgSettings = function() {
                        return this._orgSettings
                    }, e.prototype.start = function(e, t) {
                        var n = this;
                        this._onFullyStarted = t, "onpagehide" in this._wnd ? this._listeners.add(this._wnd, "pagehide", !1, function(e) {
                            n.onUnload()
                        }) : this._listeners.add(this._wnd, "unload", !1, function(e) {
                            n.onUnload()
                        }), this._listeners.add(this._wnd, "message", !1, function(e) {
                            var t = e.data;
                            if ("string" == typeof t) {
                                var r = e.source;
                                n.onMessageReceived(r, co(t))
                            }
                        });
                        var r = this._wnd.Document ? this._wnd.Document.prototype : this._wnd.document;
                        this._docCloseHook = He(r, "close"), this._docCloseHook && this._docCloseHook.afterAsync(function() {
                            n._listeners.refresh()
                        })
                    }, e.prototype.tellAllFramesTo = function(e) {
                        for (var t = 0, n = this._childFrames; t < n.length; t++) {
                            var r = n[t];
                            r.contentWindow && uo(r.contentWindow, e)
                        }
                    }, e.prototype.queue = function() {
                        return this._queue
                    }, e.prototype.eventWatcher = function() {
                        return this._eventWatcher
                    }, e.prototype.console = function() {
                        return this._consoleWatcher
                    }, e.prototype.onDomLoad = function() {
                        this._eventWatcher.onDomLoad()
                    }, e.prototype.onLoad = function() {
                        this._eventWatcher.onLoad()
                    }, e.prototype.shutdown = function(e) {
                        this._eventWatcher.shutdown(e), this._consoleWatcher.disable(), this._listeners && this._listeners.clear(), this._docCloseHook && this._docCloseHook.disable(), this.tellAllFramesTo(["ShutdownFrame"])
                    }, e.prototype.getCurrentSessionURL = function(e) {
                        var t = this._getCurrentSessionEnabled;
                        if (t == vo.NoInfoYet) return null;
                        if (t == vo.Disabled) return this._scheme + "//" + this._appHost + "/opt/upgrade";
                        var n = this.getCurrentSession();
                        return n ? (e && (n += ":" + this._ctx.time.wallTime()), this._scheme + "//" + this._appHost + "/ui/" + this._ctx.options.orgId + "/session/" + encodeURIComponent(n)) : null
                    }, e.prototype.getCurrentSession = function() {
                        var e = this._getCurrentSessionEnabled;
                        return e == vo.NoInfoYet || e == vo.Disabled ? null : this._userId && this._sessionId ? this._userId + ":" + this._sessionId : null
                    }, e.prototype.setConsent = function(e) {
                        var t = this,
                            n = function() {
                                t._watcher.setConsent(e), t._queue.processEvents()
                            },
                            r = function() {
                                t._queue.enqueue({
                                    Kind: O.SYS_SETCONSENT,
                                    Args: [e, Y.Document]
                                })
                            };
                        switch (e) {
                            case z.GrantConsent:
                                r(), n();
                                break;
                            case z.RevokeConsent:
                                n(), r();
                        }
                        this.tellAllFramesTo(["SetConsent", e])
                    }, e.prototype.pageSignature = function() {
                        return this._userId + ":" + this._sessionId + ":" + this._pageId
                    }, e.prototype.fireFsReady = function(e) {
                        void 0 === e && (e = !1);
                        var t = N(this._wnd, "_fs_ready", "function");
                        if (t) try {
                            e ? t(!0) : t()
                        } catch (e) {
                            s("exception in _fs_ready(): " + e)
                        }
                    }, e.prototype.onUnload = function() {
                        this._queue.addUnload(G.Unload), wn.stopAll()
                    }, e.prototype.isValidResponse = function(e) {
                        return !!e.OrgSettings
                    }, e.prototype.handleResponse = function(e, t) {
                        var n, r, i = e.Flags,
                            o = i.AjaxFetch,
                            s = i.AjaxWatcher,
                            a = i.ClientSideRageClick,
                            u = i.ConsoleWatcher,
                            c = i.GetCurrentSession,
                            h = i.ResourceUploading;
                        this._pageRsp = e, this._userId = e.UserIntId, this._sessionId = e.SessionIntId, this._pageId = e.PageIntId, this._serverPageStart = e.PageStart, this._getCurrentSessionEnabled = c ? vo.Enabled : vo.Disabled, this._orgSettings = e.OrgSettings, br({
                            hashes: null !== (r = null === (n = io[this._orgId]) || void 0 === n ? void 0 : n.urlHashBlocklist) && void 0 !== r ? r : se.DefaultOrgSettings.UrlHashBlocklist,
                            paths: this._orgSettings.UrlPathBlocklist,
                            queries: this._orgSettings.UrlQueryStringBlocklist
                        }), this._consoleWatcher.initializeMaxLogsPerPage(this._orgSettings.MaxConsoleLogPerPage), this._eventWatcher.ajaxWatcher().initialize({
                            requests: this._orgSettings.HttpRequestHeadersAllowlist,
                            responses: this._orgSettings.HttpResponseHeadersAllowlist,
                            maxAjaxPayloadLength: this._orgSettings.MaxAjaxPayloadLength
                        }), this._eventWatcher.perfWatcher().start({
                            resourceUploader: this._eventWatcher.getResourceUploader(),
                            recTimings: !!this._orgSettings.RecordPerformanceResourceTiming,
                            recImgs: !!this._orgSettings.RecordPerformanceResourceImg
                        }), this._watcher.initialize({
                            blocks: e.ElementBlocks,
                            keeps: e.ElementKeeps,
                            watches: e.ElementWatches
                        }), this._keep.initialize(e.UrlKeeps), this._watcher.initializeConsent(null != t ? t : !!e.Consented), "number" == typeof e.BundleUploadInterval && (this._bundleUploadInterval = e.BundleUploadInterval), h && this.enableResourceUploading(), s && this.enableAjaxWatcher(!!o), u && this.enableConsoleWatcher(), s && e.AjaxWatches && this._eventWatcher.ajaxWatcher().setWatches(e.AjaxWatches), a && this._queue.enableEasyBake(), this._eventWatcher.watchEvents(e.Flags)
                    }, e.prototype.fullyStarted = function() {
                        this._onFullyStarted && this._onFullyStarted()
                    }, e.prototype.enableResourceUploading = function() {
                        this._resourceUploadingEnabled = !0, this._eventWatcher.initResourceUploading()
                    }, e.prototype.enableAjaxWatcher = function(e) {
                        this.eventWatcher().ajaxWatcher().enable(e)
                    }, e.prototype.enableConsoleWatcher = function() {
                        this.console().enable()
                    }, e.prototype.flushPendingChildFrameInits = function() {
                        if (this._pendingChildFrameIdInits.length > 0) {
                            for (var e = 0; e < this._pendingChildFrameIdInits.length; e++) this._pendingChildFrameIdInits[e]();
                            this._pendingChildFrameIdInits = []
                        }
                    }, e.prototype.inject = function(e) {
                        var t = this;
                        this._ctx.measurer.requestMeasureTask(Ft.Essential, function() {
                            o() && s("Injecting into a " + ("none" !== getComputedStyle(e, null).display ? "hidden" : "visible") + " iframe: " + _o(e));
                            t._injector({
                                frame: e,
                                orgId: t._orgId,
                                scheme: t._scheme,
                                script: t._script,
                                recHost: t._recHost,
                                appHost: t._appHost,
                                namespace: I(t._wnd)
                            })
                        })
                    }, e.prototype.onFrameCreated = function(e) {
                        var t = _n(e);
                        if (t) {
                            this._childFrames.push(e);
                            var n = !1;
                            if (e.contentWindow) try {
                                n = !!R(e.contentWindow)
                            } catch (e) {
                                n = !0
                            }
                            var r = function(e) {
                                    var t = e.src,
                                        n = location.protocol + "//" + location.host;
                                    return !t || "about:blank" == t || Ie(t, "javascript:") || Ie(t, n)
                                }(e),
                                i = e.contentWindow && e.contentWindow.postMessage;
                            r && !n || !i ? r ? this.initSameOriginIframe(e) : s("Frame Doesn't need injecting. Probably cross domain " + _o(e)) : this.initCrossOriginIframe(e, t)
                        } else s("fsid missing or invalid for iFrame " + _o(e))
                    }, e.prototype.initCrossOriginIframe = function(e, t) {
                        var n = this;
                        e.contentWindow && e.contentWindow.postMessage ? (s("Cross-origin iframe " + _o(e)), uo(e.contentWindow, ["GreetFrame", t]), o() && (this._pendingIframes[t] = !0, setTimeout(function() {
                            n._pendingIframes[t] && s("iframe " + e.src + " is unresponsive")
                        }, 5e3))) : s("No content window on init of cross-origin iframe " + _o(e))
                    }, e.prototype.initSameOriginIframe = function(e) {
                        var t = this;
                        s("Attempting to setup Frame " + _o(e)), this.inject(e);
                        var n = this._listeners.add(e, "load", !1, Qe.wrap(function() {
                            s("onload for frame " + _o(e)), t.inject(e)
                        }));
                        this._childFrameListeners.set(e, n)
                    }, e.prototype.beforeFrameRemoved = function(e) {
                        if (_n(e)) {
                            var t = this._childFrameListeners.get(e);
                            void 0 !== t && (this._listeners.remove(t), this._childFrameListeners["delete"](e)), this._childFrames = this._childFrames.filter(function(t) {
                                return t !== e
                            })
                        }
                    }, e.prototype.onMessageReceived = function(e, t) {
                        if (!e || e.parent == this._wnd) switch (t[0]) {
                            case "EvtBundle":
                                var n = t[1],
                                    r = t[2],
                                    i = this.pageSignature();
                                if (i !== r) return Qe.sendToBugsnag("Page signature mismatch", "warning", {
                                    pageSignature: i,
                                    messageSignature: r
                                }), void(e && uo(e, ["ShutdownFrame"]));
                                n.length > 0 && this._transport.enqueueEvents(i, n);
                                break;
                            case "RequestFrameId":
                                if (!e) return void s("No MessageEvent.source, iframe may have unloaded.");
                                var o = this.getFrameId(e);
                                void 0 === o ? s("No FrameId found. Hoping to send one later.") : (s("Responding to FID request for frame " + o), this._pendingIframes[o] = !1, this.sendFrameIdToInnerFrame(e, o));
                                break;
                            case "Unknown":
                                s("Received unknown message.");
                        }
                    }, e.prototype.getFrameId = function(e) {
                        for (var t = 0, n = this._childFrames; t < n.length; t++) {
                            var r = n[t];
                            if (r.contentWindow === e) return _n(r)
                        }
                    }, e.prototype.sendFrameIdToInnerFrame = function(e, t) {
                        var n = this,
                            r = function() {
                                var r = [];
                                0 != n._frameId && null !== n._frameId && (r = n._parentIds ? n._parentIds.concat(n._frameId) : [n._frameId]);
                                var i = n._ctx.time.startTime();
                                uo(e, ["SetFrameId", t, r, i, n._scheme, n._script, n._appHost, n._orgId, n._pageRsp, n._watcher.getConsent(), n._ctx.time.now()])
                            };
                        null == this._frameId ? this._pendingChildFrameIdInits.push(r) : r()
                    }, e.prototype.enqueueDocumentProperties = function(e) {
                        var t = this;
                        this._ctx.measurer.requestMeasureTask(Ft.Essential, function() {
                            t._queue.enqueue({
                                Kind: O.DOCUMENT_PROPERTIES,
                                Args: [_n(e.scrollingElement), e.compatMode]
                            })
                        })
                    }, e
                }();

                function mo(e) {
                    return e >= 400 && 502 !== e || 202 == e || 206 == e
                }
                var yo, wo = function() {
                        function e(e, t, n, r) {
                            void 0 === r && (r = bn), this._ctx = e, this._protocol = t, this._identity = n, this._timeoutFactory = r, this.sing()
                        }
                        return e.prototype.store = function(e) {
                            s("Saving " + e.bundles.length + " bundles in swan-song.");
                            var t = Fe({
                                OrgId: this._identity.orgId(),
                                UserId: this._identity.userId(),
                                SessionId: this._identity.sessionId(),
                                PageId: e.pageId,
                                Bundles: e.bundles,
                                PageStartTime: this._ctx.time.startTime(),
                                LastBundleTime: e.lastBundleTime,
                                ServerPageStart: e.serverPageStart,
                                ServerBundleTime: e.serverBundleTime,
                                IsNewSession: e.isNewSession
                            });
                            if (!(t.length > 2e6)) try {
                                localStorage._fs_swan_song = t
                            } catch (e) {}
                        }, e.prototype.sing = function() {
                            try {
                                var e = this.purge();
                                if (void 0 === e) return;
                                if (!(e.Bundles && e.UserId && e.SessionId && e.PageId)) return void s("Malformed swan song found. Ignoring it.");
                                e.OrgId || (e.OrgId = this._identity.orgId()), e.Bundles.length > 0 && (s("Sending " + e.Bundles.length + " bundles as prior page swan song"), this.sendSwanSongBundles(e))
                            } catch (e) {
                                s("Error recovering swan-song: " + e)
                            }
                        }, e.prototype.purge = function() {
                            try {
                                if (ce in localStorage) {
                                    var e = localStorage._fs_swan_song || localStorage.singSwanSong;
                                    return delete localStorage._fs_swan_song, delete localStorage.singSwanSong, Be(e)
                                }
                            } catch (e) {
                                s("Error purging swan-song: " + e)
                            }
                        }, e.prototype.sendSwanSongBundles = function(e, t) {
                            var n = this;
                            void 0 === t && (t = 0);
                            var i = null;
                            if (Te(e.Bundles) && 0 !== e.Bundles.length && void 0 !== e.Bundles[0]) {
                                1 == e.Bundles.length && (i = this._ctx.time.wallTime() - (e.LastBundleTime || 0));
                                this._protocol.bundle({
                                    bundle: e.Bundles[0],
                                    deltaT: i,
                                    orgId: e.OrgId,
                                    pageId: e.PageId,
                                    serverBundleTime: e.ServerBundleTime,
                                    serverPageStart: e.ServerPageStart,
                                    sessionId: e.SessionId,
                                    userId: e.UserId,
                                    isNewSession: e.IsNewSession,
                                    win: function(t) {
                                        s("Sent " + e.Bundles[0].Evts.length + " trailing events from last session as Seq " + e.Bundles[0].Seq), e.Bundles.shift(), e.Bundles.length > 0 ? n.sendSwanSongBundles((0, r.__assign)((0, r.__assign)({}, e), {
                                            ServerBundleTime: t.BundleTime
                                        })) : s("Done with prior page swan song")
                                    },
                                    lose: function(r) {
                                        mo(r) ? s("Fatal error while sending events, giving up") : (s("Failed to send events from last session, will retry while on this page"), n._lastSwanSongRetryTimeout = new n._timeoutFactory(n.sendSwanSongBundles, n._protocol.exponentialBackoffMs(t, !0), n, e, t + 1).start())
                                    }
                                })
                            }
                        }, e
                    }(),
                    So = function() {
                        function e() {}
                        return e.prototype.encode = function(e) {
                            return e
                        }, e
                    }(),
                    bo = function() {
                        function e() {
                            this.dict = {
                                idx: -1,
                                map: {}
                            }, this.nodeCount = 1, this.startIdx = 0
                        }
                        return e.prototype.encode = function(t) {
                            if (0 == t.length) return [];
                            var n, r, i = t[0],
                                o = Object.prototype.hasOwnProperty.call(this.dict.map, i) ? this.dict.map[i] : null,
                                s = [],
                                a = 1;

                            function u() {
                                o ? a > 1 ? s.push([o.idx, a]) : s.push(o.idx) : s.push(i)
                            }
                            for (n = 1; n < t.length; n++)
                                if (r = t[n], o && Object.prototype.hasOwnProperty.call(o.map, r)) a++, i = r, o = o.map[r];
                                else {
                                    u();
                                    var c = this.startIdx + n - a;
                                    null == o && this.nodeCount < e.MAX_NODES && (o = {
                                        idx: c,
                                        map: {}
                                    }, this.dict.map[i] = o, this.nodeCount++), o && this.nodeCount < e.MAX_NODES && (o.map[r] = {
                                        idx: c,
                                        map: {}
                                    }, this.nodeCount++), a = 1, i = r, o = Object.prototype.hasOwnProperty.call(this.dict.map, r) ? this.dict.map[r] : null
                                } return u(), this.startIdx += t.length, s
                        }, e.MAX_NODES = 1e4, e
                    }(),
                    Eo = ((yo = {})[O.PERF_ENTRY] = !0, yo[O.AJAX_REQUEST] = !0, yo),
                    To = function() {
                        function e(e, t, n, r, i) {
                            var o = this;
                            void 0 === t && (t = new Zi(e)), void 0 === n && (n = !0), void 0 === r && (r = Sn), void 0 === i && (i = bn), this._ctx = e, this._protocol = t, this._compress = n, this._tickerFactory = r, this._pendingBundleFailed = !1, this._backoffRetries = 0, this._backoffTime = 0, this._bundleSeq = 1, this._lastPostTime = 0, this._compressors = {}, this._serverBundleTime = 0, this._isNewSession = !1, this._largePageSize = 16e6, this._inProgressBundle = new ko(1), this._bundleQueue = [], this._hibernating = !1, this._heartbeatInterval = 0, this._lastUserActivity = this._ctx.time.wallTime(), this._finished = !1, this._scheme = e.options.scheme, this._identity = e.recording.identity, this._lastBundleTime = e.time.wallTime(), this._swanSong = new wo(e, this._protocol, this._identity, i), this._heartbeatTimeout = new i(function() {
                                o.onHeartbeat()
                            }), this._hibernationTimeout = new i(function() {
                                o.onHibernate()
                            }, se.PageInactivityTimeout)
                        }
                        return e.prototype.onShutdown = function(e) {
                            this._onShutdown = e
                        }, e.prototype.scheme = function() {
                            return this._scheme
                        }, e.prototype.enqueueEvents = function(e, t) {
                            if (this.maybeHibernate(), this._hibernating) {
                                if (this._finished) return;
                                for (var n = 0, r = t; n < r.length; n++) {
                                    if (ue((u = r[n]).Kind)) {
                                        this._ctx.recording.splitPage(G.Hibernation), this._finished = !0;
                                        break
                                    }
                                }
                            } else {
                                for (var i = 0, o = t; i < o.length; i++) {
                                    if (ue((u = o[i]).Kind)) {
                                        this._hibernationTimeout.start(), this._heartbeatInterval = se.HeartbeatInitial, this._heartbeatTimeout.start(this._heartbeatInterval), this._lastUserActivity = this._ctx.time.wallTime();
                                        break
                                    }
                                }
                                for (var s = 0, a = t; s < a.length; s++) {
                                    var u = a[s];
                                    this._inProgressBundle.pushEvent(u)
                                }
                            }
                        }, e.prototype.initUploadTicker = function() {
                            this._uploadTicker = new this._tickerFactory(this._ctx.recording.bundleUploadInterval())
                        }, e.prototype.startPipeline = function(e) {
                            var t = this;
                            this._pageId = e.pageId, this._serverPageStart = e.serverPageStart, this._isNewSession = e.isNewSession, this.enqueueAndSendBundle(), this._uploadTicker || this.initUploadTicker(), this._uploadTicker.start(function() {
                                t.enqueueAndSendBundle()
                            }), this._heartbeatInterval = se.HeartbeatInitial, this._heartbeatTimeout.start(this._heartbeatInterval), this._hibernationTimeout.start()
                        }, e.prototype.stopPipeline = function() {
                            this._uploadTicker && this._uploadTicker.stop(), this._inProgressBundle = new ko(this._inProgressBundle.bundle.Seq), this._bundleQueue = [], this._compressors = {}, this._hibernationTimeout.stop(), this._heartbeatTimeout.stop()
                        }, e.prototype.flush = function() {
                            this.enqueueNextBundle(), this.maybeSendNextBundle()
                        }, e.prototype.singSwanSong = function() {
                            if (!this._hibernating && this._pageId) {
                                this.enqueueNextBundle();
                                var e = [];
                                this._pendingBundle && e.push(this._pendingBundle);
                                for (var t = 0, n = this._bundleQueue; t < n.length; t++) {
                                    var r = n[t];
                                    e.push(r)
                                }
                                for (var i = [], o = !1, s = 0, a = e; s < a.length; s++) {
                                    r = a[s];
                                    if (o) i.push(r);
                                    else this._protocol.bundleBeacon({
                                        bundle: r,
                                        deltaT: null,
                                        orgId: this._identity.orgId(),
                                        pageId: this._pageId,
                                        serverBundleTime: this._serverBundleTime,
                                        serverPageStart: this._serverPageStart,
                                        isNewSession: this._isNewSession,
                                        sessionId: this._identity.sessionId(),
                                        userId: this._identity.userId(),
                                        win: function() {},
                                        lose: function() {}
                                    }) || (i.push(r), o = !0)
                                }
                                0 !== i.length && void 0 !== this._serverPageStart ? this._swanSong.store({
                                    pageId: this._pageId,
                                    bundles: i,
                                    lastBundleTime: this._lastBundleTime,
                                    serverPageStart: this._serverPageStart,
                                    serverBundleTime: this._serverBundleTime,
                                    isNewSession: this._isNewSession
                                }) : this._swanSong.purge()
                            }
                        }, e.prototype.maybeHibernate = function() {
                            this._hibernating || this.calcLastUserActivityDuration() >= se.PageInactivityTimeout + 5e3 && this.onHibernate()
                        }, e.prototype.calcLastUserActivityDuration = function() {
                            return a.mathFloor(this._ctx.time.wallTime() - this._lastUserActivity)
                        }, e.prototype.onHeartbeat = function() {
                            var e = this.calcLastUserActivityDuration();
                            this._inProgressBundle.pushEvent({
                                When: this._ctx.time.now(),
                                Kind: O.HEARTBEAT,
                                Args: [e]
                            }), this._heartbeatInterval *= 2, this._heartbeatInterval > se.HeartbeatMax && (this._heartbeatInterval = se.HeartbeatMax), this._heartbeatTimeout.start(this._heartbeatInterval)
                        }, e.prototype.onHibernate = function() {
                            this._hibernating || (this.calcLastUserActivityDuration() <= 2 * se.PageInactivityTimeout && (this._inProgressBundle.pushEvent({
                                When: this._ctx.time.now(),
                                Kind: O.UNLOAD,
                                Args: [G.Hibernation]
                            }), this.singSwanSong()), this.stopPipeline(), this._hibernating = !0)
                        }, e.prototype.enqueueAndSendBundle = function() {
                            this._pendingBundle ? this._pendingBundleFailed && this._sendPendingBundle() : (this._inProgressBundle.hasActiveEvents() && this.enqueueNextBundle(), this.maybeSendNextBundle())
                        }, e.prototype.enqueueNextBundle = function() {
                            if (this._inProgressBundle.hasAnyEvents()) {
                                var e = this.compressBundle(this._inProgressBundle.bundle);
                                return this._inProgressBundle = this._inProgressBundle.createNext(), this._bundleQueue.push(e), e
                            }
                        }, e.prototype.maybeSendNextBundle = function() {
                            this._pageId && this._serverPageStart && !this._pendingBundle && 0 != this._bundleQueue.length && (this._pendingBundle = this._bundleQueue.shift(), this._sendPendingBundle())
                        }, e.prototype._sendPendingBundle = function() {
                            var e = this,
                                t = this._ctx.time.wallTime();
                            if (!(t < this._backoffTime)) {
                                var n = this._pendingBundle;
                                n && (this._pendingBundleFailed = !1, this._lastPostTime = this._lastBundleTime = t, this.sendBundle(n, function(t) {
                                    s("Sent bundle " + n.Seq + " with " + n.Evts.length + " events"), e._serverBundleTime = t.BundleTime, e._pendingBundle = void 0, e._backoffTime = 0, e._backoffRetries = 0, e._ctx.time.wallTime() - e._lastPostTime > e._ctx.recording.bundleUploadInterval() && e.maybeSendNextBundle()
                                }, function(t) {
                                    if (s("Failed to send events."), mo(t)) return 206 == t ? Qe.sendToBugsnag("Failed to send bundle, probably because of its large size", "error") : t >= 500 && Qe.sendToBugsnag("Failed to send bundle, recording outage likely", "error"), void(e._onShutdown && e._onShutdown());
                                    e._pendingBundleFailed = !0, e._backoffTime = e._lastPostTime + e._protocol.exponentialBackoffMs(e._backoffRetries++, !1)
                                }))
                            }
                        }, e.prototype.sendBundle = function(e, t, n) {
                            if (this._pageId) {
                                var r = a.mathFloor(this._ctx.time.wallTime() - this._lastUserActivity),
                                    i = this._protocol.bundle({
                                        bundle: e,
                                        deltaT: null,
                                        lastUserActivity: r,
                                        orgId: this._identity.orgId(),
                                        pageId: this._pageId,
                                        serverBundleTime: this._serverBundleTime,
                                        serverPageStart: this._serverPageStart,
                                        isNewSession: this._isNewSession,
                                        sessionId: this._identity.sessionId(),
                                        userId: this._identity.userId(),
                                        win: t,
                                        lose: n
                                    });
                                i > this._largePageSize && this._bundleSeq > 16 && (s("splitting large page: " + i), this._ctx.recording.splitPage(G.Size))
                            }
                        }, e.prototype.compressBundle = function(e) {
                            for (var t = [], n = 0, i = e.Evts; n < i.length; n++) {
                                var o = i[n];
                                switch (o.Kind) {
                                    case O.SET_FRAME_BASE:
                                        var s = Io(o.PIds, o.FId);
                                        delete this._compressors[s];
                                        break;
                                    case O.MUT_INSERT:
                                        var a = v();
                                        o.Args[2] = this.encodeStream(o.PIds, o.FId, o.Args[2]), t.push(v() - a);
                                        break;
                                    case O.MUT_SHADOW:
                                        a = v();
                                        o.Args[1] = this.encodeStream(o.PIds, o.FId, o.Args[1]), t.push(v() - a);
                                }
                            }
                            if (0 === t.length) return e;
                            var u = e.Evts[e.Evts.length - 1],
                                c = t[0],
                                h = t.slice(1);
                            return e.Evts.push((0, r.__assign)((0, r.__assign)({}, u), {
                                Kind: O.TIMING,
                                Args: [(0, r.__spreadArray)([L.Internal, P.Serialization, x.LzEncoding, u.When, c], h.map(function(e) {
                                    return [x.LzEncoding, e]
                                }))]
                            })), e
                        }, e.prototype.encodeStream = function(e, t, n) {
                            void 0 === e && (e = []), void 0 === t && (t = 0);
                            var r = Io(e, t);
                            return this._compressors[r] || (this._compressors[r] = this._compress ? new bo : new So), this._compressors[r].encode(n)
                        }, e
                    }(),
                    ko = function() {
                        function e(e) {
                            this._active = !1, this._bundle = {
                                Seq: e,
                                When: -1,
                                Evts: []
                            }
                        }
                        return Object.defineProperty(e.prototype, "bundle", {
                            get: function() {
                                return this._bundle
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.createNext = function() {
                            return new e(this._bundle.Seq + 1)
                        }, e.prototype.hasAnyEvents = function() {
                            return this._bundle.Evts.length > 0
                        }, e.prototype.hasActiveEvents = function() {
                            return this._active
                        }, e.prototype.pushEvent = function(e) {
                            Eo[e.Kind] || (this._active = !0), this._bundle.When < 0 && (this._bundle.When = e.When), this._bundle.Evts.push(e)
                        }, e
                    }();

                function Io(e, t) {
                    void 0 === e && (e = []), void 0 === t && (t = 0);
                    for (var n = "", r = 0, i = e; r < i.length; r++) {
                        n += "/" + i[r]
                    }
                    return n + "/" + t
                }
                var Co, Ro = "_fs_preview",
                    Ao = new RegExp("(^\\?|&)_fs_preview=(?:true|false)(&|$)"),
                    Oo = function() {
                        function e(e, t) {
                            this._wnd = e, this._clientStore = t
                        }
                        return e.prototype.setDomain = function(e) {
                            this._clientStore.setDomain(e), this._write()
                        }, e.prototype.isPreviewMode = function() {
                            return this._queryContainsPreviewModeFlag() || this._clientStoreContainsPreviewModeFlag()
                        }, e.prototype.clear = function() {
                            this._clientStore.setValue(Ro, "", new Date(1970, 1, 1).toUTCString())
                        }, e.prototype._write = function() {
                            var e = this._queryContainsPreviewModeFlag(),
                                t = this._queryContainsClearPreviewModeFlag();
                            if (e || t) {
                                if (e) {
                                    this._clientStore.setValue(Ro, "true", new Date(v() + 432e5).toUTCString())
                                } else this.clear();
                                this._removeQuery()
                            }
                        }, e.prototype._removeQuery = function() {
                            if (this._wnd.history) {
                                var e = location.search.replace(Ao, function(e, t, n) {
                                    return n ? t : ""
                                });
                                this._wnd.history.replaceState({}, "", this._wnd.location.href.replace(location.search, e))
                            }
                        }, e.prototype._queryContainsPreviewModeFlag = function() {
                            return this._wnd.document.location.search.indexOf("_fs_preview=true") > -1
                        }, e.prototype._queryContainsClearPreviewModeFlag = function() {
                            return this._wnd.document.location.search.indexOf("_fs_preview=false") > -1
                        }, e.prototype._clientStoreContainsPreviewModeFlag = function() {
                            return "true" === this._clientStore.getValue(Ro)
                        }, e
                    }(),
                    Po = function(e) {
                        function t(t, n, r, i, o, s) {
                            void 0 === r && (r = !0), void 0 === i && (i = new To(t, n, r)), void 0 === o && (o = Sn), void 0 === s && (s = fo);
                            var a, u, c = e.call(this, t, o, i, s) || this;
                            return c._protocol = n, c._domLoaded = !1, c._recordingDisabled = !1, c._integrationScriptFetched = !1, i.onShutdown(function() {
                                return c.shutdown(G.SettingsBlocked)
                            }), c._doc = c._wnd.document, c._frameId = 0, c._identity = t.recording.identity, c._previewMode = new Oo(c._wnd, c._identity.clientStore()), c._getCurrentSessionEnabled = vo.NoInfoYet, a = c._wnd, u = function(e) {
                                if (c._eventWatcher.shutdown(G.Api), e) {
                                    var t = c._doc.getElementById(e);
                                    t && c._embedToken && t.setAttribute("_fs_embed_token", c._embedToken)
                                }
                            }, a._fs_shutdown = u, c
                        }
                        return (0, r.__extends)(t, e), t.prototype.onDomLoad = function() {
                            var t = this;
                            e.prototype.onDomLoad.call(this), this._domLoaded = !0, this.injectIntegrationScript(function() {
                                t.fireFsReady(t._recordingDisabled)
                            })
                        }, t.prototype.getReplayFlags = function() {
                            var e = N(this._wnd, "_fs_replay_flags");
                            if (/[?&]_fs_force_session=true(&|#|$)/.test(location.search) && (e += ",forceSession", this._wnd.history)) {
                                var t = location.search.replace(/(^\?|&)_fs_force_session=true(&|$)/, function(e, t, n) {
                                    return n ? t : ""
                                });
                                this._wnd.history.replaceState({}, "", this._wnd.location.href.replace(location.search, t))
                            }
                            return e
                        }, t.prototype.start = function(t, n) {
                            var i, o, s, a = this;
                            e.prototype.start.call(this, t, n);
                            var u, c, h, d = this.getReplayFlags(),
                                l = Zt(this._doc),
                                p = l[0],
                                f = l[1],
                                _ = (u = this._wnd, c = 0, h = 0, null == u.screen ? [c, h] : (c = parseInt(String(u.screen.width), 10), h = parseInt(String(u.screen.height), 10), [c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h])),
                                v = _[0],
                                g = _[1],
                                m = "";
                            t || (m = this._identity.userId());
                            var y = null !== (s = null === (o = null === (i = this._ctx) || void 0 === i ? void 0 : i.recording) || void 0 === o ? void 0 : o.preroll) && void 0 !== s ? s : -1,
                                w = pr(Wn(this._wnd), {
                                    source: "page",
                                    type: "base"
                                }),
                                S = function() {
                                    return pr(a._wnd.location.href, {
                                        source: "page",
                                        type: "url"
                                    })
                                },
                                b = function() {
                                    return pr(a._doc.referrer, {
                                        source: "page",
                                        type: "referrer"
                                    })
                                },
                                E = {
                                    OrgId: this._orgId,
                                    UserId: m,
                                    Url: S(),
                                    Base: w,
                                    Width: p,
                                    Height: f,
                                    ScreenWidth: v,
                                    ScreenHeight: g,
                                    Referrer: b(),
                                    Preroll: y,
                                    Doctype: qe(this._doc),
                                    CompiledVersion: "04c8a6d263",
                                    CompiledTimestamp: 1629915348,
                                    AppId: this._identity.appId(),
                                    PreviewMode: this._previewMode.isPreviewMode() || void 0
                                };
                            d && (E.ReplayFlags = d), this._protocol.page(E, function(e) {
                                return (0, r.__awaiter)(a, void 0, Lt, function() {
                                    var t, n;
                                    return (0, r.__generator)(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return this.isValidResponse(e) ? (this.handleResponse(e), this.handleIdentity(e.CookieDomain, e.UserIntId, e.SessionIntId, e.PageIntId, e.EmbedToken), this._previewMode.setDomain(e.CookieDomain), this.handleIntegrationScript(e.IntegrationScript), e.PreviewMode && this.maybeInjectPreviewScript(), (t = function(e) {
                                                    return N(e, "_fs_pagestart", "function")
                                                }(this._wnd)) && t(), this._queue.enqueueFirst(this._eventWatcher.getNavigateEvent(this._wnd.location.href, O.ENTRY_NAVIGATE)), n = !!e.Consented, this._queue.enqueueFirst({
                                                    Kind: O.SYS_REPORTCONSENT,
                                                    Args: [n, Y.Document]
                                                }), this._queue.enqueueFirst({
                                                    Kind: O.SET_FRAME_BASE,
                                                    Args: [pr(Wn(this._wnd), {
                                                        source: "event",
                                                        type: O.SET_FRAME_BASE
                                                    }), qe(this._doc), S(), b()]
                                                }), [4, this._queue.startPipeline({
                                                    pageId: e.PageIntId,
                                                    serverPageStart: e.PageStart,
                                                    isNewSession: !!e.IsNewSession
                                                })]) : [2, this.disableBecauseRecPageSaidSo()];
                                            case 1:
                                                return r.sent(), this.enqueueDocumentProperties(this._doc), this.fullyStarted(), [2];
                                        }
                                    })
                                })
                            }, function(e, t) {
                                t && t.user_id && t.cookie_domain && t.reason_code == re.ReasonBlockedTrafficRamping && m != t.user_id && a.handleIdentity(t.cookie_domain, t.user_id, "", "", ""), a.disableBecauseRecPageSaidSo()
                            })
                        }, t.prototype.handleIntegrationScript = function(e) {
                            var t = this;
                            this._integrationScriptFetched = !0, this._integrationScript = e, this.injectIntegrationScript(function() {
                                t.fireFsReady(t._recordingDisabled)
                            })
                        }, t.prototype.handleIdentity = function(e, t, n, r, i) {
                            var o = this._identity;
                            o.setIds(this._wnd, e, t, n), this._embedToken = i, s("/User," + o.userId() + "/Session," + o.sessionId() + "/Page," + r)
                        }, t.prototype.injectIntegrationScript = function(e) {
                            var t, n;
                            if (this._domLoaded && this._integrationScriptFetched) {
                                var r = this._doc.createElement("script");
                                (null === (n = null === (t = this._pageRsp) || void 0 === t ? void 0 : t.Flags) || void 0 === n ? void 0 : n.AsyncIntegration) || N(this._wnd, "_fs_csp", "boolean") ? (r.addEventListener("load", e), r.addEventListener("error", e), r.async = !0, r.src = this._scheme + "//" + this._recHost + "/rec/integrations?OrgId=" + this._orgId, this._doc.head.appendChild(r)) : this._integrationScript ? (r.text = this._integrationScript, this._doc.head.appendChild(r), e()) : e()
                            }
                        }, t.prototype.maybeInjectPreviewScript = function() {
                            var e = "FullStory-preview-script";
                            if (!this._doc.getElementById(e)) {
                                var t = this._doc.createElement("script");
                                t.id = e, t.async = !0, t.src = this._scheme + "//" + this._appHost + "/s/fspreview.js", this._doc.head.appendChild(t)
                            }
                        }, t.prototype.disableBecauseRecPageSaidSo = function() {
                            this.shutdown(G.SettingsBlocked), s("Disabling FS."), this._recordingDisabled = !0, this.fireFsReady(this._recordingDisabled)
                        }, t.prototype.onMessageReceived = function(t, n) {
                            if (e.prototype.onMessageReceived.call(this, t, n), (null == t ? void 0 : t.parent) == this._wnd) switch (n[0]) {
                                case "EndPreviewMode":
                                    this._previewMode.clear();
                            }
                        }, t
                    }(go),
                    xo = function() {
                        function e(e, t) {
                            void 0 === t && (t = new Lo(e)), this._wnd = e, this._messagePoster = t
                        }
                        return e.prototype.enqueueEvents = function(e, t) {
                            var n = null != e ? e : void 0;
                            this._messagePoster.postMessage(this._wnd.parent, ["EvtBundle", t, n], n)
                        }, e.prototype.startPipeline = function() {}, e.prototype.stopPipeline = function() {}, e.prototype.flush = function() {}, e.prototype.singSwanSong = function() {}, e.prototype.onShutdown = function(e) {}, e
                    }(),
                    Lo = function() {
                        function e(e) {
                            this.wnd = e
                        }
                        return e.prototype.postMessage = function(e, t, n) {
                            switch (t[0]) {
                                case "EvtBundle":
                                    ho(this.wnd, t[0], Fe(t[1]), n) || uo(e, t);
                                    break;
                                case "RequestFrameId":
                                    ho(this.wnd, t[0], "[]", n) || uo(e, t);
                                    break;
                                default:
                                    s("Unknown message type: " + t[0]);
                            }
                        }, e
                    }(),
                    Mo = function(e) {
                        function t(t, n, r, i, o) {
                            void 0 === n && (n = new Lo(t.window)), void 0 === r && (r = new xo(t.window, n)), void 0 === i && (i = Sn), void 0 === o && (o = fo);
                            var s = e.call(this, t, i, r, o) || this;
                            return s._messagePoster = n, s
                        }
                        return (0, r.__extends)(t, e), t.prototype.start = function(t, n) {
                            var r = this;
                            e.prototype.start.call(this, t, n), this.sendRequestForFrameId(), this._listeners.add(this._wnd, "load", !1, function() {
                                r._eventWatcher.recordingIsDetached() && (s("Recording wrong document. Restarting recording in iframe."), r._ctx.recording.splitPage(G.FsShutdownFrame))
                            })
                        }, t.prototype.onMessageReceived = function(t, n) {
                            if (e.prototype.onMessageReceived.call(this, t, n), t === this._wnd.parent || t === this._wnd) switch (n[0]) {
                                case "GreetFrame":
                                    this.sendRequestForFrameId(n[1]);
                                    break;
                                case "SetFrameId":
                                    try {
                                        var r = n[1];
                                        if (!r) return void s("Outer page gave us a bogus frame Id! Iframe: " + pr(location.href, {
                                            source: "log",
                                            type: "debug"
                                        }));
                                        this.setFrameIdFromOutside({
                                            frameId: r,
                                            parentIds: n[2],
                                            outerStartTime: n[3],
                                            scheme: n[4],
                                            script: n[5],
                                            appHost: n[6],
                                            orgId: n[7],
                                            pageRsp: n[8],
                                            consentOverride: n[9],
                                            minimumWhen: n[10]
                                        })
                                    } catch (e) {
                                        s("Failed to parse frameId from message: " + Fe(n))
                                    }
                                    break;
                                case "SetConsent":
                                    this.setConsent(n[1]);
                                    break;
                                case "InitFrameMobile":
                                    try {
                                        var i = JSON.parse(n[1]),
                                            o = i.StartTime;
                                        if (n.length > 2 && n[2]) {
                                            var a = n[2];
                                            if (Object.prototype.hasOwnProperty.call(a, "ProtocolVersion")) a.ProtocolVersion >= 20180723 && Object.prototype.hasOwnProperty.call(a, "OuterStartTime") && (o = a.OuterStartTime)
                                        }
                                        var u = i.Host;
                                        this.setFrameIdFromOutside({
                                            frameId: 0,
                                            parentIds: [],
                                            outerStartTime: o,
                                            scheme: "https:",
                                            script: K(u),
                                            appHost: j(u),
                                            orgId: i.OrgId,
                                            pageRsp: i.PageResponse,
                                            consentOverride: this._watcher.getConsent()
                                        })
                                    } catch (e) {
                                        s("Failed to initialize mobile web recording from message: " + Fe(n))
                                    }
                            }
                        }, t.prototype.sendRequestForFrameId = function(e) {
                            this._frameId && this._frameId === e || (0 != this._frameId ? this._wnd.parent ? (s("Asking for a frame ID."), this._messagePoster.postMessage(this._wnd.parent, ["RequestFrameId"])) : s("Orphaned window.") : s("For some reason the outer window attempted to request a frameId"))
                        }, t.prototype.setFrameIdFromOutside = function(e) {
                            var t, n, r = this;
                            if (this._frameId) this._frameId !== e.frameId ? (s("Updating frame id from " + this._frameId + " to " + e.frameId), this._ctx.recording.splitPage(G.FsShutdownFrame)) : s("frame Id is already set to " + this._frameId);
                            else {
                                if (s("FrameId received within frame " + pr(location.href, {
                                        source: "log",
                                        type: "debug"
                                    }) + ":" + e.frameId), this._scheme = e.scheme, this._script = e.script, this._appHost = e.appHost, this._orgId = e.orgId, this._frameId = e.frameId, this._parentIds = e.parentIds, !e.pageRsp || !this.isValidResponse(e.pageRsp)) return s("Invalid page response"), void this.shutdown(G.FsShutdownFrame);
                                var i = null !== (t = e.consentOverride) && void 0 !== t ? t : !!e.pageRsp.Consented;
                                this.handleResponse(e.pageRsp, i), this.fireFsReady(), this._queue.enqueueFirst({
                                    Kind: O.SYS_REPORTCONSENT,
                                    Args: [i, Y.Document]
                                }), this._queue.enqueueFirst({
                                    Kind: O.SET_FRAME_BASE,
                                    Args: [pr(Wn(this._wnd), {
                                        source: "event",
                                        type: O.SET_FRAME_BASE
                                    }), qe(this._wnd.document)]
                                }), this._queue.rebaseIframe(e.outerStartTime, null !== (n = e.minimumWhen) && void 0 !== n ? n : 0), this._ctx.time.setStartTime(e.outerStartTime), this._pageId ? this._queue.startPipeline({
                                    pageId: this._pageId,
                                    serverPageStart: e.pageRsp.PageStart,
                                    isNewSession: !!e.pageRsp.IsNewSession,
                                    frameId: e.frameId,
                                    parentIds: e.parentIds
                                }).then(function() {
                                    r.flushPendingChildFrameInits(), r.enqueueDocumentProperties(r._wnd.document), r.fullyStarted()
                                }) : s("pageId is undefined")
                            }
                        }, t
                    }(go),
                    No = function() {
                        function e(e, t, n) {
                            void 0 === t && (t = function() {}), void 0 === n && (n = !1), this._doc = e, this._onWriteFailure = t, this._disableWrites = n, this._cookies = {}, this._cookies = E(this._doc)
                        }
                        return e.prototype.setDomain = function(e) {
                            this._domain = e
                        }, e.prototype.getValue = function(e, t) {
                            var n = this._cookies[e];
                            if (!n) try {
                                n = localStorage[null != t ? t : e]
                            } catch (e) {}
                            return n
                        }, e.prototype.setValue = function(e, t, n, r) {
                            if (null != this._domain && !this._disableWrites) {
                                var i = [];
                                this._setCookie(e, t, n, i), this._setLocalStorage(null != r ? r : e, t, i, e), i.length > 0 && this._onWriteFailure(i)
                            }
                        }, e.prototype.setCookie = function(e, t, n) {
                            this._setCookie(e, t, n, [])
                        }, e.prototype._setCookie = function(e, t, n, r) {
                            try {
                                var i = e + "=" + t;
                                this._domain ? i += "; domain=." + encodeURIComponent(this._domain) : i += "; domain=", i += "; Expires=" + n + "; path=/; SameSite=Strict", "https:" === location.protocol && (i += "; Secure"), this._doc.cookie = i, -1 === this._doc.cookie.indexOf(t) && r.push([e, "cookie"])
                            } finally {
                                this._cookies = E(this._doc)
                            }
                        }, e.prototype._setLocalStorage = function(e, t, n, r) {
                            try {
                                localStorage[e] = t, localStorage[e] !== t && n.push([null != r ? r : e, "localStorage"])
                            } catch (t) {
                                n.push([null != r ? r : e, "localStorage", String(t)])
                            }
                        }, Object.defineProperty(e.prototype, "cookies", {
                            get: function() {
                                return this._cookies
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e
                    }(),
                    Fo = "fs_uid",
                    Uo = function() {
                        function e(e, t, n, r, i) {
                            void 0 === n && (n = document), void 0 === r && (r = function() {}), void 0 === i && (i = !1), this._appId = void 0, this._clientStore = new No(n, r, i);
                            var o = b(this._clientStore.getValue(Fo, he));
                            o && o.host.replace(/^www\./, "") == e.replace(/^www\./, "") && o.orgId == t ? this._cookie = o : this._cookie = {
                                expirationAbsTimeSeconds: S(),
                                host: e,
                                orgId: t,
                                userId: "",
                                sessionId: "",
                                appKeyHash: ""
                            }
                        }
                        return e.prototype.clear = function() {
                            this._cookie.userId = this._cookie.sessionId = this._cookie.appKeyHash = this._appId = "", this._cookie.expirationAbsTimeSeconds = S(), this._write()
                        }, e.prototype.host = function() {
                            return this._cookie.host
                        }, e.prototype.orgId = function() {
                            return this._cookie.orgId
                        }, e.prototype.userId = function() {
                            return this._cookie.userId
                        }, e.prototype.sessionId = function() {
                            return this._cookie.sessionId
                        }, e.prototype.appKeyHash = function() {
                            return this._cookie.appKeyHash
                        }, e.prototype.cookieData = function() {
                            return this._cookie
                        }, e.prototype.cookies = function() {
                            return this._clientStore.cookies
                        }, e.prototype.clientStore = function() {
                            return this._clientStore
                        }, e.prototype.setCookie = function(e, t, n) {
                            var r;
                            void 0 === n && (r = 6048e5, n = new Date(v() + r).toUTCString()), this._clientStore.setCookie(e, t, n)
                        }, e.prototype.setIds = function(e, t, n, r) {
                            var i = t;
                            (A(i) || i.match(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g)) && (i = "");
                            var o = function(e) {
                                return N(e, "_fs_cookie_domain")
                            }(e);
                            "string" == typeof o && (i = o), this._clientStore.setDomain(i), this._cookie.userId = n, this._cookie.sessionId = r, this._write()
                        }, e.prototype.clearAppId = function() {
                            return !!this._cookie.appKeyHash && (this._appId = "", this._cookie.appKeyHash = "", this._write(), !0)
                        }, e.prototype.setAppId = function(e) {
                            this._appId = e, this._cookie.appKeyHash = Vi(e), this._write()
                        }, e.prototype.appId = function() {
                            return this._appId
                        }, e.prototype.encode = function() {
                            var e = "#",
                                t = this._cookie.host + e + this._cookie.orgId + e + this._cookie.userId + ":" + this._cookie.sessionId;
                            return this._cookie.appKeyHash && (t += e + encodeURIComponent(this._cookie.appKeyHash) + e), t += "/" + this._cookie.expirationAbsTimeSeconds
                        }, e.prototype._write = function() {
                            var e = this.encode(),
                                t = new Date(1e3 * this._cookie.expirationAbsTimeSeconds).toUTCString();
                            this._clientStore.setValue(Fo, e, t, he)
                        }, e
                    }();
                var qo = ((Co = {})[ee.Document] = {
                        assetMapId: "str",
                        releaseDatetime: "date",
                        releaseVersion: "str"
                    }, Co[ee.Event] = {}, Co[ee.Page] = {
                        pageName: "str",
                        releaseVersion: "str",
                        releaseDatetime: "str"
                    }, Co[ee.User] = {
                        uid: "str",
                        displayName: "str",
                        email: "str"
                    }, Co),
                    Bo = {
                        str: Do,
                        bool: Wo,
                        real: Ho,
                        "int": Vo,
                        date: jo,
                        strs: Ko(Do),
                        bools: Ko(Wo),
                        reals: Ko(Ho),
                        ints: Ko(Vo),
                        dates: Ko(jo),
                        objs: Ko(zo),
                        obj: zo
                    };

                function Do(e) {
                    return "string" == typeof e
                }

                function Wo(e) {
                    return "boolean" == typeof e
                }

                function Ho(e) {
                    return "number" == typeof e
                }

                function Vo(e) {
                    return "number" == typeof e && e - a.mathFloor(e) == 0
                }

                function jo(e) {
                    return !!e && (e.constructor === Date ? !isNaN(e) : ("number" == typeof e || "string" == typeof e) && !isNaN(new Date(e)))
                }

                function Ko(e) {
                    return function(t) {
                        if (!(t instanceof Array)) return !1;
                        for (var n = 0; n < t.length; n++)
                            if (!e(t[n])) return !1;
                        return !0
                    }
                }

                function zo(e) {
                    return !!e && "object" == typeof e
                }
                var Yo = /^[a-zA-Z][a-zA-Z0-9_]*$/,
                    Go = function() {
                        function e(e) {
                            this._identity = e, this._documentVars = {}
                        }
                        return e.prototype.identity = function() {
                            return this._identity
                        }, e.prototype.unloadCrossPageVars = function(e) {
                            switch (e) {
                                case G.Hibernation:
                                case G.Size:
                                    break;
                                default:
                                    this._lastPageVars = void 0;
                            }
                        }, e.prototype.getCrossPageVars = function() {
                            return this._lastPageVars
                        }, e.prototype.getDocumentVars = function() {
                            var e, t = {},
                                n = void 0;
                            for (var r in this._documentVars) {
                                var i = this._documentVars[r],
                                    o = i.value;
                                if (void 0 === (h = i.apiSource)) {
                                    var s = null != n ? n : {};
                                    s[r] = o, n = s
                                } else {
                                    var a = null !== (e = t[h]) && void 0 !== e ? e : {};
                                    a[r] = o, t[h] = a
                                }
                            }
                            var u = [],
                                c = function(e) {
                                    e && u.push(e)
                                };
                            for (var h in n && c(this._buildVarRawEvent(ee.Document, {
                                    PayloadToSend: n,
                                    ValidationErrors: []
                                })), t) c(this._buildVarRawEvent(ee.Document, {
                                PayloadToSend: t[h],
                                ValidationErrors: []
                            }, h));
                            return u
                        }, e.prototype.api = function(e) {
                            var t = !1,
                                n = [],
                                r = function(e) {
                                    e && n.push(e)
                                };
                            try {
                                var i = function(e) {
                                    switch (e.operation) {
                                        case k.V2.OperationName.FireEvent:
                                            return ee.Event;
                                        case k.V2.OperationName.SetPage:
                                            return ee.Page;
                                        case k.V2.OperationName.SetVars:
                                            var t = e.option.type;
                                            switch (t) {
                                                case ee.Document:
                                                case ee.Page:
                                                case ee.User:
                                                    return t;
                                                case ee.Event:
                                                    throw new Error("Invalid scope: Event");
                                                default:
                                                    return (0, Nn.nt)(t, "Invalid scope: " + t);
                                            }
                                            default:
                                                (0, Nn.nt)(e, "Unsupported");
                                    }
                                }(e);
                                switch (i) {
                                    case ee.Document:
                                        var o = Qo(i, (d = e.option).payload),
                                            u = this._updateDocumentVars(o, e.source);
                                        if (!u) break;
                                        r(this._buildVarRawEvent(i, u, e.source));
                                        break;
                                    case ee.Event:
                                        var c = (d = e.option).name,
                                            h = Qo(i, d.payload);
                                        r(this._buildVarRawEvent(i, h, e.source, c));
                                        break;
                                    case ee.Page:
                                        (d = e.option).payload && (d = d.payload);
                                        o = Qo(i, d);
                                        this._lastPageVars = this._buildVarRawEvent(i, o, e.source), r(this._lastPageVars);
                                        break;
                                    case ee.User:
                                        var d;
                                        if ("object" != typeof(d = e.option).payload) s("Expected argument of type 'object' instead got type: '" + typeof d.payload + "', value: " + Fe(d.payload));
                                        else if ("uid" in d.payload) {
                                            var l = d.payload.uid;
                                            if (!1 === l) this._identity.clearAppId() && (t = !0), delete d.payload.uid;
                                            else {
                                                var p = function(e, t) {
                                                        var n = e;
                                                        "number" == typeof n && a.mathFloor(n) == n && (s("Expected appId of type 'string' instead got value: " + n + " of type: " + typeof n), n = "" + n);
                                                        if ("string" != typeof n) return s("blocking FS.identify API call; uid value (" + n + ") must be a string"), [void 0, "fsidentity"];
                                                        var r = n.trim();
                                                        if (m.indexOf(r.toLowerCase()) >= 0) return s("blocking FS.identify API call; uid value (" + r + ") is illegal"), [void 0, "fsidentity"];
                                                        var i = Vi(r),
                                                            o = void 0;
                                                        t && t._cookie.appKeyHash && t._cookie.appKeyHash !== i && t._cookie.appKeyHash !== r && (s("user re-identified; existing uid hash (" + t._cookie.appKeyHash + ") does not match provided uid (" + r + ")"), o = "newuid");
                                                        return [r, o]
                                                    }(l, this._identity),
                                                    f = p[0],
                                                    _ = p[1];
                                                if (!f) {
                                                    switch (_) {
                                                        case "fsidentity":
                                                        case void 0:
                                                            break;
                                                        default:
                                                            s("unexpected failReason returned from setAppId: " + _);
                                                    }
                                                    return {
                                                        events: n
                                                    }
                                                }
                                                d.payload.uid = f, this._identity.setAppId(d.payload.uid), "newuid" === _ && (t = !0)
                                            }
                                        }
                                        o = Qo(i, d.payload);
                                        r(this._buildVarRawEvent(i, o, e.source));
                                        break;
                                    default:
                                        (0, Nn.nt)(i, "Unsupported");
                                }
                            } catch (t) {
                                s("unexpected exception handling " + e.operation + " API call: " + t.message)
                            }
                            return {
                                events: n,
                                reidentify: t
                            }
                        }, e.prototype._buildVarRawEvent = function(e, t, n, r) {
                            var i = Fe(t.PayloadToSend),
                                o = !!n && "fs" !== n;
                            switch (e) {
                                case ee.Event:
                                    return {
                                        When: 0, Kind: O.SYS_CUSTOM, Args: o ? [r, i, n] : [r, i]
                                    };
                                case ee.Document:
                                case ee.Page:
                                case ee.User:
                                    return {
                                        When: 0, Kind: O.SYS_SETVAR, Args: o ? [e, i, n] : [e, i]
                                    };
                                default:
                                    (0, Nn.nt)(e, "Unsupported");
                            }
                        }, e.prototype._updateDocumentVars = function(e, t) {
                            var n = e.PayloadToSend;
                            if (n && "object" == typeof n) {
                                var r = 0,
                                    i = {};
                                for (var o in n)
                                    if (!(o in this._documentVars)) {
                                        var s = n[o];
                                        this._documentVars[o] = {
                                            value: s,
                                            apiSource: t
                                        }, i[o] = s, r++
                                    } if (0 !== r) return {
                                    PayloadToSend: i,
                                    ValidationErrors: e.ValidationErrors
                                }
                            }
                        }, e
                    }();

                function Qo(e, t) {
                    var n = 1500,
                        r = Xo(function() {
                            return --n
                        }, e, t);
                    return n < 0 && s("Too many properties for [" + e + "] API call"), r
                }
                var Xo = function(e, t, n) {
                    var r, i, o = {
                            PayloadToSend: {},
                            ValidationErrors: []
                        },
                        s = function(n) {
                            var r = Xo(e, t, n);
                            return o.ValidationErrors = o.ValidationErrors.concat(r.ValidationErrors), r.PayloadToSend
                        };
                    for (var u in n)
                        if (a.objectHasOwnProp(n, u)) {
                            if (e() <= 0) break;
                            var c = n[u],
                                h = Zo(t, u, c, o.ValidationErrors);
                            if (h) {
                                var d = h.name;
                                if ("obj" !== h.type) {
                                    if ("objs" !== h.type) o.PayloadToSend[d] = Jo(h.type, h.value);
                                    else {
                                        t != ee.Event && o.ValidationErrors.push({
                                            Type: "vartype",
                                            FieldName: d,
                                            ValueType: "Array<Object> (unsupported)"
                                        });
                                        for (var l = [], p = 0; p < h.value.length; p++) {
                                            (f = s(h.value[p])) && l.push(f)
                                        }
                                        l.length > 0 && (o.PayloadToSend[d] = l)
                                    }
                                } else {
                                    var f = s(h.value),
                                        _ = (i = "_obj").length > (r = u).length || r.substring(r.length - i.length) != i ? d.substring(0, d.length - "_obj".length) : d;
                                    o.PayloadToSend[_] = f
                                }
                            } else o.PayloadToSend[u] = Jo("str", c)
                        } return o
                };

                function Jo(e, t) {
                    var n = t;
                    return "str" == e && "string" == typeof n && (n = n.trim()), null == n || "date" != e && n.constructor != Date || (n = function(e) {
                        var t = e.constructor === Date ? e : new Date(e);
                        try {
                            return t.toISOString()
                        } catch (e) {
                            return null
                        }
                    }(n)), n
                }

                function Zo(e, t, n, r) {
                    var i = t,
                        o = i,
                        u = typeof n;
                    if ("undefined" === u) return s("Cannot infer type of " + u + " " + n), r.push({
                        Type: "vartype",
                        FieldName: i,
                        ValueType: u + " (unsupported)"
                    }), null;
                    var c = qo[e];
                    if (a.objectHasOwnProp(c, i)) return {
                        name: i,
                        type: c[i],
                        value: n
                    };
                    var h = i.lastIndexOf("_");
                    if (-1 == h || !$o(i.substring(h + 1))) {
                        var d = function(e) {
                            for (var t in Bo)
                                if (Bo[t](e)) return t;
                            return null
                        }(n);
                        if (null == d) return s("Cannot infer type of " + u + " " + n), n ? r.push({
                            Type: "vartype",
                            FieldName: i
                        }) : r.push({
                            Type: "vartype",
                            FieldName: i,
                            ValueType: "null (unsupported)"
                        }), null;
                        h = i.length, s("Warning: Inferring user variable \"" + i + "\" to be of type \"" + d + "\""), i = i + "_" + d
                    }
                    var l = i.substring(0, h),
                        p = i.substring(h + 1);
                    if ("object" === u && !n) return s("null is not a valid object type"), r.push({
                        Type: "vartype",
                        FieldName: o,
                        ValueType: "null (unsupported)"
                    }), null;
                    if (!Yo.test(l)) {
                        l = l.replace(/[^a-zA-Z0-9_]/g, "").replace(/^[0-9]+/, ""), /[0-9]/.test(l[0]) && (l = l.substring(1)), r.push({
                            Type: "varname",
                            FieldName: o
                        });
                        var f = l + "_" + p;
                        if (s("Warning: variable \"" + o + "\" has invalid characters. It should match /" + Yo.source + "/. Converted name to \"" + f + "\"."), "" == l) return null;
                        i = f
                    }
                    return $o(p) ? function(e, t) {
                        return Bo[e](t)
                    }(p, n) ? {
                        name: i,
                        type: p,
                        value: n
                    } : (s("illegal value " + Fe(n) + " for type " + p), "number" === u ? u = n % 1 == 0 ? "integer" : "real" : "object" == u && null != n && n.constructor == Date && (u = isNaN(n) ? "invalid date" : "date"), r.push({
                        Type: "vartype",
                        FieldName: o,
                        ValueType: u
                    }), null) : (s("Variable \"" + o + "\" has invalid type \"" + p + "\""), r.push({
                        Type: "varname",
                        FieldName: o
                    }), null)
                }

                function $o(e) {
                    return !!Bo[e]
                }

                function es(e, t) {
                    return (0, r.__awaiter)(this, void 0, Lt, function() {
                        var n, i, o, a, c;
                        return (0, r.__generator)(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    if (h.trys.push([0, 2, , 3]), fe || ve || function(e) {
                                            return !!N(e, "_fs_use_polyfilled_apis", "boolean")
                                        }(e)) return [2, (0, r.__assign)((0, r.__assign)({}, t), {
                                        status: 1
                                    })];
                                    if (!e.document || 0 !== t.status) return [2, t];
                                    if (1 === (n = function(e, t) {
                                            var n = t.functions,
                                                i = {},
                                                o = (0, r.__assign)({}, t.helpers);
                                            if (o.functionToString = function(e, t) {
                                                    var n, r, i = null === (n = e["__core-js_shared__"]) || void 0 === n ? void 0 : n.inspectSource;
                                                    if (i) {
                                                        var o = function() {
                                                            return i(this)
                                                        };
                                                        if (ns(o, 2)) return o
                                                    }
                                                    var s = null === (r = e["__core-js_shared__"]) || void 0 === r ? void 0 : r["native-function-to-string"];
                                                    if (ns(s)) return s;
                                                    var a = t.__zone_symbol__OriginalDelegate;
                                                    if (ns(a)) return a;
                                                    if (ns(t)) return t;
                                                    return
                                                }(e, o.functionToString), !o.functionToString) return t;
                                            var s = !1;
                                            for (var a in n)
                                                if (n[a]) {
                                                    if (i[a] = os(o.functionToString, n[a]), i[a] || (i[a] = ss(o.functionToString, o, a)), !i[a]) return t;
                                                    i[a] !== n[a] && (s = !0)
                                                } else i[a] = void 0;
                                            return {
                                                status: 1,
                                                functions: s ? i : n,
                                                helpers: o
                                            }
                                        }(e, t)).status) return [2, n];
                                    s("The window is dirty; rebuilding Windex from a fresh global."), (i = e.document.createElement("iframe")).id = "FullStory-iframe", i.className = "fs-hide", i.style.display = "none", o = e.document.body || e.document.head || e.document.documentElement || e.document;
                                    try {
                                        o.appendChild(i)
                                    } catch (e) {
                                        return [2, (0, r.__assign)((0, r.__assign)({}, t), {
                                            status: 1
                                        })]
                                    }
                                    return i.contentWindow ? (a = u(i.contentWindow, 1), i.parentNode && i.parentNode.removeChild(i), 2 === a.status ? [2, (0, r.__assign)((0, r.__assign)({}, t), {
                                        status: 1
                                    })] : [4, ts(a, t)]) : [2, (0, r.__assign)((0, r.__assign)({}, t), {
                                        status: 1
                                    })];
                                case 1:
                                    return [2, h.sent()];
                                case 2:
                                    return c = h.sent(), Qe.sendToBugsnag(c, "error"), [2, (0, r.__assign)((0, r.__assign)({}, t), {
                                        status: 1
                                    })];
                                case 3:
                                    return [2];
                            }
                        })
                    })
                }

                function ts(e, t) {
                    var n, i = new Lt(function(e) {
                        return n = e
                    });
                    return setTimeout(function() {
                        try {
                            e.functions.jsonParse("[]").push(0)
                        } catch (e) {
                            n((0, r.__assign)((0, r.__assign)({}, t), {
                                status: 1
                            }))
                        }
                        n(e)
                    }), i
                }

                function ns(e, t) {
                    var n;
                    if (void 0 === t && (t = 0), !e) return !1;
                    try {
                        e.call(function() {})
                    } catch (e) {
                        return !1
                    }
                    var r = function(e) {
                            try {
                                return void e.call(null)
                            } catch (e) {
                                return (e.stack || "").replace(/__fs_nomangle_check_stack(.|\n)*$/, "")
                            }
                        },
                        i = void 0;
                    0 !== t && "number" == typeof Error.stackTraceLimit && (i = Error.stackTraceLimit, Error.stackTraceLimit = Number.POSITIVE_INFINITY);
                    var o = [function() {
                            throw new Error("")
                        }, e],
                        s = function __fs_nomangle_check_stack() {
                            return o.map(r)
                        }(),
                        a = s[0],
                        u = s[1];
                    if (void 0 !== i && (Error.stackTraceLimit = i), !a || !u) return !1;
                    for (var c = "\n".charCodeAt(0), h = a.length > u.length ? u.length : a.length, d = 1, l = d; l < h; l++) {
                        var p = a.charCodeAt(a.length - l),
                            f = u.charCodeAt(u.length - l);
                        if (p != f) break;
                        f != c && l != h - 1 || (d = l)
                    }
                    return (null !== (n = u.slice(0, u.length - d + 1).match(/\.js:\d+([:)]|$)/gm)) && void 0 !== n ? n : []).length <= t
                }

                function rs(e, t) {
                    return e.call(t).indexOf("[native code]") >= 0
                }
                var is = ["__zone_symbol__OriginalDelegate", "nr@original"];

                function os(e, t) {
                    if (t) {
                        for (var n = 0, r = is; n < r.length; n++) {
                            var i = t[r[n]];
                            if ("function" == typeof i && rs(e, i)) return i
                        }
                        return rs(e, t) ? t : void 0
                    }
                }

                function ss(e, t, n) {
                    switch (n) {
                        case "arrayIsArray":
                            var r = os(e, t.objectToString);
                            if (!r) return;
                            return t.objectToString = r,
                                function(e) {
                                    return "[object Array]" == r.call(e)
                                };
                        default:
                            return;
                    }
                }
                var as = function() {
                    function e(e, t) {
                        void 0 === t && (t = function(e) {
                            return new WebSocket(e)
                        }), this._newSock = t, this._connecting = !1, this._connected = !1, this._queue = {}, this._seq = 1, this._scheme = e.options.scheme, this._host = e.options.recHost
                    }
                    return e.isSupported = function() {
                        return "WebSocket" in window
                    }, e.prototype.page = function(e, t, n) {
                        this.request({
                            Cmd: 1,
                            Page: e
                        }, function(e) {
                            4 === e.Cmd ? t(e.Page) : s("socket: unexpected page response: " + e.Cmd)
                        }, n)
                    }, e.prototype.bundle = function(e) {
                        var t = e.deltaT,
                            n = e.serverPageStart,
                            r = e.serverBundleTime;
                        return this.request({
                            Cmd: 2,
                            Bundle: {
                                OrgId: e.orgId,
                                UserId: e.userId,
                                SessionId: e.sessionId,
                                PageId: e.pageId,
                                Seq: e.bundle.Seq,
                                DeltaT: null === t ? void 0 : t,
                                PageStart: null == n ? void 0 : n,
                                PrevBundleTime: null == r ? void 0 : r,
                                Bundle: e.bundle
                            }
                        }, function(t) {
                            5 === t.Cmd ? e.win(t.Bundle) : s("socket: unexpected bundle response: " + t.Cmd)
                        }, e.lose)
                    }, e.prototype.bundleBeacon = function(e) {
                        return ro(this._scheme, this._host, e)
                    }, e.prototype.exponentialBackoffMs = function(e, t) {
                        var n = a.mathMin(se.BackoffMax, 5e3 * a.mathPow(2, e));
                        return t ? n + .25 * a.mathRandom() * n : n
                    }, e.prototype.request = function(e, t, n) {
                        var r = e;
                        r.Seq = this._seq++;
                        var i = Fe(r);
                        return this._queue[r.Seq] = {
                            payload: i,
                            win: t,
                            lose: n
                        }, this.maybeConnect(), i.length
                    }, e.prototype.handleMessage = function(e) {
                        var t;
                        try {
                            t = Be(e)
                        } catch (e) {
                            return void s("socket: error parsing frame: " + e.toString())
                        }
                        var n = this._queue[t.Seq];
                        delete this._queue[t.Seq], n ? 3 === t.Cmd ? (s(t.Fail.Error), n.lose(t.Fail.Status)) : n.win(t) : s("socket: mismatched request seq " + t.Seq + "; ignoring")
                    }, e.prototype.drainQueue = function() {
                        if (this._connected) {
                            if (this._sock)
                                for (var e in this._queue) {
                                    var t = this._queue[e];
                                    t.sent || (this._sock.send(t.payload), t.sent = !0)
                                } else s("socket: attempt to drain queue when no socket connection.");
                        } else s("socket: attempt to drain queue when disconnected.")
                    }, e.prototype.failPending = function() {
                        for (var e in this._queue) {
                            var t = this._queue[e];
                            t.sent && (delete this._queue[e], t.lose(0))
                        }
                    }, e.prototype.maybeConnect = function() {
                        var e = this;
                        if (this._connected) this.drainQueue();
                        else if (!this._connecting) {
                            this._connecting = !0;
                            var t = ("https:" == this._scheme ? "wss:" : "ws:") + "//" + this._host + "/rec/sock";
                            this._sock = this._newSock(t), this._sock.onopen = function(t) {
                                e._connecting = !1, e._connected = !0, e.drainQueue()
                            }, this._sock.onmessage = function(t) {
                                e.handleMessage(t.data), e.drainQueue()
                            }, this._sock.onclose = function(t) {
                                s("socket: closed; reconnecting"), e._connecting = e._connected = !1, e.failPending()
                            }, this._sock.onerror = function(t) {
                                s("socket: error; reconnecting"), e._connecting = e._connected = !1, e.failPending()
                            }
                        }
                    }, e
                }();
                var us, cs, hs, ds, ls = (us = window.navigator, cs = us.vendor, hs = void 0 !== window.opr, ds = us.userAgent.indexOf("Edge") > -1, !!us.userAgent.match("CriOS") || "Google Inc." === cs && !hs && !ds);
                /Firefox/.test(window.navigator.userAgent);

                function ps(e) {
                    if (!ls) return !1;
                    var t = window.navigator.userAgent.match(/Chrome\/(\d+)/);
                    return !!t && parseInt(t[1], 10) < e
                }
                ps(23), ps(38), ps(60);

                function fs(e, t) {
                    switch (e) {
                        case "fireEvent":
                        case "getSession":
                        case "setOptions":
                        case "setPage":
                        case "shutdown":
                        case "restart":
                        case "setIdentity":
                            return {
                                operation: e, option: t
                            };
                        case "log":
                            var n = t;
                            if (a.arrayIsArray(t)) n = {
                                level: t[0],
                                msg: t[1]
                            };
                            return {
                                operation: e, option: n
                            };
                        case "setVars":
                            n = t;
                            if (a.arrayIsArray(t)) n = {
                                type: t[0],
                                payload: t[1]
                            };
                            return {
                                operation: e, option: n
                            };
                        case "event":
                            n = t;
                            return t && "object" == typeof t && "n" in t && (n = {
                                name: t.n,
                                payload: t.p
                            }), {
                                operation: k.V2.OperationName.FireEvent,
                                option: n
                            };
                        case "user":
                            n = t;
                            return {
                                operation: k.V2.OperationName.SetVars, option: {
                                    type: "user",
                                    payload: n
                                }
                            };
                        case "consent":
                            var r = t;
                            return {
                                operation: k.V2.OperationName.SetIdentity, option: {
                                    consent: r
                                }
                            };
                        case "rec":
                            return t ? {
                                operation: k.V2.OperationName.Restart
                            } : {
                                operation: k.V2.OperationName.Shutdown
                            };
                        default:
                            s("Unrecognized api: " + e);
                    }
                }
                var _s = de(function() {}),
                    vs = {
                        commit: _s,
                        discard: _s
                    };
                var gs = function() {
                        function e() {}
                        return e.prototype.createTopRecorder = function(e) {
                            var t = N(e.window, "_fs_use_socket", "boolean") && as.isSupported() ? new as(e) : new Zi(e);
                            return new Po(e, t)
                        }, e.prototype.createInnerRecorder = function(e) {
                            return new Mo(e)
                        }, e
                    }(),
                    ms = function() {
                        function e(e, t) {
                            void 0 === e && (e = window), void 0 === t && (t = new gs), this.wnd = e, this.recMaker = t, this.scheme = "https:", this.domDoneLoaded = !1, this.identity = null, this.waitingOnStart = !1, this.reidentifyCount = 0
                        }
                        return e.prototype.init = function() {
                            var e, t;
                            C(this.wnd) || (e = this.wnd, t = I(this.wnd), e._fs_loaded = t, t in e || (e[t] = {}), function(e) {
                                (0, r.__awaiter)(this, void 0, Lt, function() {
                                    var t;
                                    return (0, r.__generator)(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, es(e, a.snapshot)];
                                            case 1:
                                                return t = n.sent(), a.rebuildFromSnapshot(t), [2];
                                        }
                                    })
                                })
                            }(this.wnd), this.initApi(), this.start())
                        }, e.prototype.initRecSettings = function(e) {
                            this.orgId = e.orgId, this.script = e.script, this.recHost = e.recHost, this.appHost = e.appHost
                        }, e.prototype.log = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this.handleApiOperation([k.V1.OperationName.Log, e])
                        }, e.prototype.getCurrentSessionURL = function(e) {
                            return this.getSession(e ? "urlAndTime" : "url")
                        }, e.prototype.getCurrentSession = function() {
                            return this.getSession("id")
                        }, e.prototype.getSession = function(e) {
                            return this.recorder ? Ss(this.recorder, e) : null
                        }, e.prototype.enableConsole = function() {
                            this.handleApiOperation([k.V2.OperationName.SetOptions, {
                                console: !0
                            }])
                        }, e.prototype.disableConsole = function() {
                            this.handleApiOperation([k.V2.OperationName.SetOptions, {
                                console: !1
                            }])
                        }, e.prototype.shutdown = function(e) {
                            void 0 === e && (e = G.Api), this.recorder && !this.deferredStart ? (this.recorder.shutdown(e), this.recorder = null, !this.inFrame() && this.vars && this.vars.unloadCrossPageVars(e)) : s("Recording already shut down.")
                        }, e.prototype.restart = function() {
                            if (this.deferredStart) return this.deferredStart(), void(this.deferredStart = null);
                            this.recorder ? s("Recording already started.") : this.onCreateRecorder(!0)
                        }, e.prototype.splitPage = function(e, t) {
                            return (0, r.__awaiter)(this, void 0, Lt, function() {
                                return (0, r.__generator)(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t && null == this.identity ? (s("Can't re-identify from an iframe"), [2]) : this.waitingOnStart ? (this.splitPending = [e, t], [2]) : (this.shutdown(e), [4, Nt(0)]);
                                        case 1:
                                            return n.sent(), [4, Nt(0)];
                                        case 2:
                                            return n.sent(), t && this.identity && this.identity.clear(), this.restart(), [2];
                                    }
                                })
                            })
                        }, e.prototype._api = function(e, t, n, r, i) {
                            this.handleApiOperation([e, t, n, r, i])
                        }, e.prototype.executeApiSequence = function(e, t) {
                            for (var n, r, i, o = this, a = [], u = 0, c = t; u < c.length; u++) {
                                var h = c[u],
                                    d = h[0],
                                    l = h[1],
                                    p = h[2],
                                    f = h[3],
                                    _ = h[4];
                                (P = fs(d, l)) && (P.source = p, P.resolve = f, P.reject = _, a.push(P))
                            }
                            for (var v, g, m = [], y = !1, w = !1, S = [], b = [], E = function(e) {
                                    if (o.vars) {
                                        var t = o.vars.api(e),
                                            n = t.events;
                                        t.reidentify && (m = [], g = void 0, y = !0, b.push.apply(b, S), S = []), m.push.apply(m, n)
                                    }
                                }, T = function(e, t) {
                                    S.push(function(e, t) {
                                        return e ? {
                                            commit: de(function() {
                                                return e(t)
                                            }),
                                            discard: de(function() {
                                                return e(t)
                                            })
                                        } : vs
                                    }(e.resolve, t))
                                }, I = function(e, t) {
                                    S.push(function(e, t) {
                                        return e ? {
                                            commit: de(function() {
                                                return e(t)
                                            }),
                                            discard: de(function() {
                                                return e(t)
                                            })
                                        } : vs
                                    }(e.reject, t))
                                }, C = function(t) {
                                    try {
                                        if (s("Processing api: " + t.operation), R.inFrame() && t.operation !== k.V2.OperationName.FireEvent) {
                                            var o = "FS." + t.operation + "() is not available in an inner frame";
                                            return w || (w = !0, s(o)), I(t, new Error(o)), "continue"
                                        }
                                        switch (t.operation) {
                                            case k.V2.OperationName.Restart:
                                                v = !0, T(t);
                                                break;
                                            case k.V2.OperationName.Shutdown:
                                                v = !1, T(t);
                                                break;
                                            case k.V2.OperationName.Log:
                                                var a = t.option,
                                                    u = a.level,
                                                    c = (o = a.msg, e.console().logEvent(u, o ? [o] : []));
                                                c && m.push(c), T(t);
                                                break;
                                            case k.V2.OperationName.SetIdentity:
                                                var h = function(e) {
                                                    E({
                                                        operation: k.V2.OperationName.SetVars,
                                                        option: e,
                                                        source: t.source,
                                                        resolve: t.resolve,
                                                        reject: t.reject
                                                    })
                                                };
                                                t.option && "object" == typeof t.option ? (Object.prototype.hasOwnProperty.call(t.option, "consent") && (g = null !== (n = t.option.consent) && void 0 !== n && n), Object.prototype.hasOwnProperty.call(t.option, "uid") && h({
                                                    type: "user",
                                                    payload: {
                                                        uid: t.option.uid
                                                    }
                                                }), Object.prototype.hasOwnProperty.call(t.option, "userVars") && h({
                                                    type: "user",
                                                    payload: null !== (r = t.option.userVars) && void 0 !== r ? r : {}
                                                }), (null === (i = t.option) || void 0 === i ? void 0 : i.anonymous) && h({
                                                    type: "user",
                                                    payload: {
                                                        uid: !1
                                                    }
                                                })) : h({
                                                    type: "user",
                                                    payload: {
                                                        uid: t.option
                                                    }
                                                }), T(t);
                                                break;
                                            case k.V2.OperationName.FireEvent:
                                            case k.V2.OperationName.SetPage:
                                            case k.V2.OperationName.SetVars:
                                                E(t), T(t);
                                                break;
                                            case k.V2.OperationName.GetSession:
                                                var d = Ss(e, t.option.format);
                                                T(t, d);
                                                break;
                                            case k.V2.OperationName.SetOptions:
                                                var l = t.option.console;
                                                S.push({
                                                    commit: de(function() {
                                                        l ? e.console().enable() : e.console().disable()
                                                    }),
                                                    discard: de(function() {})
                                                }), T(t);
                                                break;
                                            default:
                                                (0, Nn.nt)(t, "invalid operation");
                                        }
                                    } catch (e) {
                                        Qe.sendToBugsnag(e, "error"), I(t, e)
                                    }
                                }, R = this, A = 0, O = a; A < O.length; A++) {
                                var P;
                                C(P = O[A])
                            }
                            return {
                                reidentified: y,
                                recordingShouldBeEnabled: v,
                                applyApi: function() {
                                    for (var t = e.queue(), n = 0, r = m; n < r.length; n++) {
                                        var i = r[n];
                                        t.enqueue(i)
                                    }
                                    void 0 !== g && e.setConsent(g), b.forEach(function(e) {
                                        return e.discard()
                                    }), S.forEach(function(e) {
                                        return e.commit()
                                    })
                                }
                            }
                        }, e.prototype.handleApiOperation = function(e) {
                            var t;
                            if (this.recorder && !this.splitPending) {
                                var n = null !== (t = this.executeApiSequence(this.recorder, [e])) && void 0 !== t ? t : {
                                        reidentified: !1,
                                        applyApi: function() {}
                                    },
                                    r = n.reidentified,
                                    i = n.recordingShouldBeEnabled,
                                    o = n.applyApi;
                                if (r) {
                                    if (this.reidentifyCount >= 8) {
                                        var a = "reidentified too many times; giving up";
                                        return s(a), void ws(e, new Error(a))
                                    }
                                    this.reidentifyCount++, H(this.wnd, e), this.splitPage(G.Reidentify, !0)
                                } else o();
                                void 0 !== i && (i ? this.restart() : this.shutdown(G.Api))
                            } else H(this.wnd, e)
                        }, e.prototype._cookies = function() {
                            return this.identity ? this.identity.cookies() : (s("Error in FS integration: Can't get cookies from inside an iframe"), null)
                        }, e.prototype._setCookie = function(e, t) {
                            this.identity ? this.identity.setCookie(e, t) : s("Error in FS integration: Can't set cookies from inside an iframe")
                        }, e.prototype._withEventQueue = function(e, t) {
                            if (this.recorder) {
                                var n = this.recorder.queue(),
                                    r = this.recorder.pageSignature();
                                null != n && null != r ? e === r ? t(n) : Qe.sendToBugsnag("Error in _withEventQueue: Page Signature mismatch", "error", {
                                    pageSignature: r,
                                    callerSignature: e
                                }) : s("Error getting event queue or page signature: Recorder not initialized")
                            } else s("Error in FS integration: Recorder not initialized")
                        }, e.prototype._withRecorder = function(e, t) {
                            if (this.recorder) {
                                var n = this.recorder.pageSignature();
                                null !== n ? void 0 === e || e === n ? t(this.recorder) : Qe.sendToBugsnag("Error in _withRecorder: Page Signature mismatch", "error", {
                                    pageSignature: n,
                                    callerSignature: e
                                }) : s("Error getting page signature: Recorder not initialized")
                            } else s("Error in FS integration: Recorder not initialized")
                        }, e.prototype.initApi = function() {
                            var e = R(this.wnd);
                            if (e)
                                for (var t = 0, n = ["disableConsole", "enableConsole", "log", "restart", "shutdown", "getCurrentSession", "getCurrentSessionURL", "_api", "_withEventQueue", "_withRecorder", "_cookies", "_setCookie"]; t < n.length; t++) {
                                    var r = n[t];
                                    e[r] = Ne(this[r], this)
                                } else s("Missing browser API namespace; couldn't initialize API.")
                        }, e.prototype.start = function() {
                            var e, t, n, r, o, a = this;
                            o = F(this.wnd), i = o, s("script version 04c8a6d263 (compiled at 1629915348)");
                            var u = q(this.wnd);
                            if (u) {
                                var c, h = N(c = this.wnd, "_fs_script") || K(V(c));
                                if (h) {
                                    var d = U(this.wnd);
                                    if (d) {
                                        var l = function(e) {
                                            return N(e, "_fs_app_host") || j(V(e))
                                        }(this.wnd);
                                        if (l) {
                                            this.initRecSettings({
                                                orgId: u,
                                                script: h,
                                                recHost: d,
                                                appHost: l
                                            }), s("script: " + this.script), s("recording host: " + this.recHost), s("orgid: " + this.orgId), "localhost:8080" == this.recHost && (this.scheme = "http:"), br({
                                                hashes: null !== (t = null === (e = io[u]) || void 0 === e ? void 0 : e.urlHashBlocklist) && void 0 !== t ? t : se.DefaultOrgSettings.UrlHashBlocklist,
                                                paths: null !== (r = null === (n = io[u]) || void 0 === n ? void 0 : n.urlPathBlocklist) && void 0 !== r ? r : se.DefaultOrgSettings.UrlPathBlocklist,
                                                queries: se.DefaultOrgSettings.UrlQueryStringBlocklist
                                            });
                                            var p = this.inFrame();
                                            this.identity = new Uo(d, u, this.wnd.document, function(e) {
                                                for (var t, n = 0, r = e; n < r.length; n++) {
                                                    var i = r[n];
                                                    null === (t = a.recorder) || void 0 === t || t.queue().enqueue({
                                                        Kind: O.STORAGE_WRITE_FAILURE,
                                                        Args: i
                                                    })
                                                }
                                            }, p), this.vars = new Go(this.identity), this.canRecord(u) ? (this.onCreateRecorder(!1), this.hookLoadEvents(), this.wnd.addEventListener("message", Qe.wrap(function(e) {
                                                return a.onMessage(e)
                                            }))) : s("Shutting down recorder.")
                                        } else s("Missing global _fs_host or _fs_app_host. Recording disabled.")
                                    } else s("Missing global _fs_host or _fs_rec_host. Recording disabled.")
                                } else s("Missing global _fs_host or _fs_script. Recording disabled.")
                            } else s("Missing global _fs_org. Recording disabled.")
                        }, e.prototype.onMessage = function(e) {
                            if ("string" == typeof e.data && (e.source == this.wnd.parent || e.source == this.wnd)) switch (co(e.data)[0]) {
                                case "ShutdownFrame":
                                    this.shutdown(G.FsShutdownFrame);
                                    break;
                                case "RestartFrame":
                                    this.restart();
                            }
                        }, e.prototype.onCreateRecorder = function(e) {
                            this.recorder = this.createRecorder(e), this.recorder || s("Context could not be initialized so recorder could not be created.")
                        }, e.prototype._context = function(e, t) {
                            var n, r = this;
                            if (void 0 !== this.appHost && void 0 !== this.orgId && void 0 !== this.recHost && void 0 !== this.script) {
                                var i = a.mathRound(null !== (n = de(function() {
                                    var e;
                                    return null === (e = window.performance) || void 0 === e ? void 0 : e.now()
                                })()) && void 0 !== n ? n : -1);
                                return {
                                    window: this.wnd,
                                    time: new Tn,
                                    measurer: Wt.create(this.wnd),
                                    options: {
                                        appHost: this.appHost,
                                        orgId: this.orgId,
                                        recHost: this.recHost,
                                        scheme: this.scheme,
                                        script: this.script
                                    },
                                    recording: {
                                        bundleUploadInterval: function() {
                                            var t, n;
                                            return null !== (n = null === (t = e()) || void 0 === t ? void 0 : t.bundleUploadInterval()) && void 0 !== n ? n : se.DefaultBundleUploadInterval
                                        },
                                        getCurrentSessionURL: function(t) {
                                            var n, r;
                                            return null !== (r = null === (n = e()) || void 0 === n ? void 0 : n.getCurrentSessionURL(t)) && void 0 !== r ? r : null
                                        },
                                        identity: this.identity,
                                        inFrame: t,
                                        pageResponse: function() {
                                            var t;
                                            return null === (t = e()) || void 0 === t ? void 0 : t.getPageResponse()
                                        },
                                        pageSignature: function() {
                                            var t, n;
                                            return null !== (n = null === (t = e()) || void 0 === t ? void 0 : t.pageSignature()) && void 0 !== n ? n : null
                                        },
                                        preroll: i,
                                        splitPage: function(e, t) {
                                            return r.splitPage(e, t)
                                        },
                                        vars: this.vars
                                    },
                                    queue: function() {
                                        var t;
                                        return null === (t = e()) || void 0 === t ? void 0 : t.queue()
                                    }
                                }
                            }
                        }, e.prototype.addPreservedVarRawEvents = function(e, t) {
                            if (t && this.vars) {
                                for (var n = 0, r = this.vars.getDocumentVars(); n < r.length; n++) {
                                    var i = r[n];
                                    e.enqueue(i)
                                }
                                var o = this.vars.getCrossPageVars();
                                void 0 !== o && e.enqueue(o)
                            }
                        }, e.prototype.createRecorder = function(e) {
                            var t, n = this,
                                r = this.inFrame();
                            if (void 0 === r) return null;
                            var i = this._context(function() {
                                return t
                            }, r);
                            if (void 0 === i) return null;
                            var o = function(r) {
                                void 0 === r && (r = !1), t.start(r, function() {
                                    n.waitingOnStart = !1, e && t.tellAllFramesTo(["RestartFrame"]), n.splitPending && (n.splitPage(n.splitPending[0], n.splitPending[1]), n.splitPending = null)
                                })
                            };
                            return r ? (t = this.recMaker.createInnerRecorder(i), this.onCreateInnerRecorder(t), o()) : (t = this.recMaker.createTopRecorder(i), this.onCreateTopRecorder(t, o, e)), t
                        }, e.prototype.onCreateTopRecorder = function(e, t, n) {
                            var r;
                            this.waitingOnStart = !0;
                            var i, o = !1,
                                s = [];
                            this.addPreservedVarRawEvents(e.queue(), n);
                            var a = N(this.wnd, "_fs_asset_map_id");
                            a && s.push([k.V1.VarOperationName.Vars, [ee.Document, {
                                assetMapId: a
                            }]]), s.push.apply(s, W(this.wnd));
                            var u = null !== (r = this.executeApiSequence(e, s)) && void 0 !== r ? r : {
                                    applyApi: function() {}
                                },
                                c = u.reidentified,
                                h = u.recordingShouldBeEnabled,
                                d = u.applyApi;
                            void 0 !== h && (o = !h), i = !!c, d(), o ? this.deferredStart = function() {
                                return t(i)
                            } : t(i)
                        }, e.prototype.onCreateInnerRecorder = function(e) {
                            var t;
                            this.waitingOnStart = !0, (0, (null !== (t = this.executeApiSequence(e, W(this.wnd))) && void 0 !== t ? t : {
                                applyApi: function() {}
                            }).applyApi)()
                        }, e.prototype.inFrame = function() {
                            if ("boolean" == typeof this._inFrame) return this._inFrame;
                            var e = D(this.wnd);
                            return B(this.wnd) ? this._inFrame = !1 : this.wnd != top ? this._inFrame = !0 : e ? e.init && this.orgId && e.init(this.orgId) && (this._inFrame = !0) : this._inFrame = !1, this._inFrame
                        }, e.prototype.canRecord = function(e) {
                            return this.wnd.MutationObserver && this.wnd.WeakMap && !be && this.wnd.postMessage && 2 !== a.snapshot.status ? !!ys(this.wnd) || (s("FullStory recording for this page is NOT allowed within an iFrame."), !1) : (s("missing required browser features"), !1)
                        }, e.prototype.hookLoadEvents = function() {
                            var e = this,
                                t = function() {
                                    e.domDoneLoaded || (e.domDoneLoaded = !0, e.recorder && e.recorder.onDomLoad())
                                },
                                n = !1,
                                r = function() {
                                    n || (n = !0, e.recorder && e.recorder.onLoad())
                                };
                            switch (document.readyState) {
                                case "interactive":
                                    t();
                                    break;
                                case "complete":
                                    t(), r();
                            }
                            this.domDoneLoaded || document.addEventListener("DOMContentLoaded", Qe.wrap(t)), n || this.wnd.addEventListener("load", Qe.wrap(function(e) {
                                t(), r()
                            }))
                        }, e
                    }();

                function ys(e) {
                    if (e == top || B(e) || function(e) {
                            return !!N(e, "_fs_run_in_iframe", "boolean")
                        }(e) || D(e)) return !0;
                    try {
                        return e.parent.document, ys(e.parent)
                    } catch (e) {}
                    return !1
                }
                var ws = de(function(e, t) {
                        "function" == typeof e[4] && e[4](t)
                    }),
                    Ss = function(e, t) {
                        var n, r, i;
                        switch (t) {
                            case "urlAndTime":
                                return null !== (n = e.getCurrentSessionURL(!0)) && void 0 !== n ? n : null;
                            case "id":
                                return null !== (r = e.getCurrentSession()) && void 0 !== r ? r : null;
                            case "url":
                            default:
                                return null !== (i = e.getCurrentSessionURL()) && void 0 !== i ? i : null;
                        }
                    };
                ! function() {
                    try {
                        new ms().init()
                    } catch (e) {
                        Qe.sendToBugsnag(e, "error"), F(window) && window.console && console.log && console.log("Failed to initialize FullStory.")
                    }
                }()
            },
            470: function(e, t, n) {
                t.nt = void 0;
                var r = n(652),
                    i = n(495);
                t.nt = function(e, t) {
                    throw void 0 === t && (t = "Reached unexpected case in exhaustive switch"), new Error(t)
                }
            },
            495: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ExtendedObject = void 0, t.ExtendedObject = Object
            }
        },
        t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports
    }
    n.d = function(e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    n(932)
}();