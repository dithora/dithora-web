! function () {
   "use strict";
   var e, n, t, r, o, i = {},
      a = {};

   function u(e) {
      var n = a[e];
      if (void 0 !== n) return n.exports;
      var t = a[e] = {
         exports: {}
      };
      return i[e].call(t.exports, t, t.exports, u), t.exports
   }
   u.m = i, e = [], u.O = function (n, t, r, o) {
         if (!t) {
            var i = 1 / 0;
            for (s = 0; s < e.length; s++) {
               t = e[s][0], r = e[s][1], o = e[s][2];
               for (var a = !0, c = 0; c < t.length; c++)(!1 & o || i >= o) && Object.keys(u.O).every((function (e) {
                  return u.O[e](t[c])
               })) ? t.splice(c--, 1) : (a = !1, o < i && (i = o));
               if (a) {
                  e.splice(s--, 1);
                  var f = r();
                  void 0 !== f && (n = f)
               }
            }
            return n
         }
         o = o || 0;
         for (var s = e.length; s > 0 && e[s - 1][2] > o; s--) e[s] = e[s - 1];
         e[s] = [t, r, o]
      }, u.n = function (e) {
         var n = e && e.__esModule ? function () {
            return e.default
         } : function () {
            return e
         };
         return u.d(n, {
            a: n
         }), n
      }, u.d = function (e, n) {
         for (var t in n) u.o(n, t) && !u.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
         })
      }, u.f = {}, u.e = function (e) {
         return Promise.all(Object.keys(u.f).reduce((function (n, t) {
            return u.f[t](e, n), n
         }), []))
      }, u.u = function (e) {
         return {
            80: "3cf1fa16",
            137: "component---src-pages-works-js",
            306: "component---cache-caches-gatsby-plugin-offline-app-shell-js",
            532: "styles",
            559: "component---src-pages-resume-en-js",
            678: "component---src-pages-index-js",
            883: "component---src-pages-404-js",
            903: "component---src-pages-resume-js"
         } [e] + "-" + {
            80: "8ce60dc5eac7163c1b22",
            137: "9bc8d8c95ea57a20ac2e",
            306: "5aa41ef2e00e8fe0abf5",
            532: "3f20eae71e35313c544b",
            559: "a029a16f1d52dab48c13",
            678: "f6ed7a0866355c4373f0",
            883: "39e1c2fb6109609d1669",
            903: "ffd4587fd62a3fa80b75"
         } [e] + ".js"
      }, u.miniCssF = function (e) {
         return "styles.4716534f7fb0a250f296.css"
      }, u.g = function () {
         if ("object" == typeof globalThis) return globalThis;
         try {
            return this || new Function("return this")()
         } catch (e) {
            if ("object" == typeof window) return window
         }
      }(), u.o = function (e, n) {
         return Object.prototype.hasOwnProperty.call(e, n)
      }, n = {}, t = "yangerxiao-landingpage:", u.l = function (e, r, o, i) {
         if (n[e]) n[e].push(r);
         else {
            var a, c;
            if (void 0 !== o)
               for (var f = document.getElementsByTagName("script"), s = 0; s < f.length; s++) {
                  var l = f[s];
                  if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + o) {
                     a = l;
                     break
                  }
               }
            a || (c = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, u.nc && a.setAttribute("nonce", u.nc), a.setAttribute("data-webpack", t + o), a.src = e), n[e] = [r];
            var d = function (t, r) {
                  a.onerror = a.onload = null, clearTimeout(p);
                  var o = n[e];
                  if (delete n[e], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((function (e) {
                        return e(r)
                     })), t) return t(r)
               },
               p = setTimeout(d.bind(null, void 0, {
                  type: "timeout",
                  target: a
               }), 12e4);
            a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), c && document.head.appendChild(a)
         }
      }, u.r = function (e) {
         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
         }), Object.defineProperty(e, "__esModule", {
            value: !0
         })
      }, u.p = "/", r = function (e) {
         return new Promise((function (n, t) {
            var r = u.miniCssF(e),
               o = u.p + r;
            if (function (e, n) {
                  for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                     var o = (a = t[r]).getAttribute("data-href") || a.getAttribute("href");
                     if ("stylesheet" === a.rel && (o === e || o === n)) return a
                  }
                  var i = document.getElementsByTagName("style");
                  for (r = 0; r < i.length; r++) {
                     var a;
                     if ((o = (a = i[r]).getAttribute("data-href")) === e || o === n) return a
                  }
               }(r, o)) return n();
            ! function (e, n, t, r) {
               var o = document.createElement("link");
               o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = function (i) {
                  if (o.onerror = o.onload = null, "load" === i.type) t();
                  else {
                     var a = i && ("load" === i.type ? "missing" : i.type),
                        u = i && i.target && i.target.href || n,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                     c.code = "CSS_CHUNK_LOAD_FAILED", c.type = a, c.request = u, o.parentNode.removeChild(o), r(c)
                  }
               }, o.href = n, document.head.appendChild(o)
            }(e, o, n, t)
         }))
      }, o = {
         658: 0
      }, u.f.miniCss = function (e, n) {
         o[e] ? n.push(o[e]) : 0 !== o[e] && {
            532: 1
         } [e] && n.push(o[e] = r(e).then((function () {
            o[e] = 0
         }), (function (n) {
            throw delete o[e], n
         })))
      },
      function () {
         var e = {
            658: 0
         };
         u.f.j = function (n, t) {
            var r = u.o(e, n) ? e[n] : void 0;
            if (0 !== r)
               if (r) t.push(r[2]);
               else if (/^(532|658)$/.test(n)) e[n] = 0;
            else {
               var o = new Promise((function (t, o) {
                  r = e[n] = [t, o]
               }));
               t.push(r[2] = o);
               var i = u.p + u.u(n),
                  a = new Error;
               u.l(i, (function (t) {
                  if (u.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
                     var o = t && ("load" === t.type ? "missing" : t.type),
                        i = t && t.target && t.target.src;
                     a.message = "Loading chunk " + n + " failed.\n(" + o + ": " + i + ")", a.name = "ChunkLoadError", a.type = o, a.request = i, r[1](a)
                  }
               }), "chunk-" + n, n)
            }
         }, u.O.j = function (n) {
            return 0 === e[n]
         };
         var n = function (n, t) {
               var r, o, i = t[0],
                  a = t[1],
                  c = t[2],
                  f = 0;
               if (i.some((function (n) {
                     return 0 !== e[n]
                  }))) {
                  for (r in a) u.o(a, r) && (u.m[r] = a[r]);
                  if (c) var s = c(u)
               }
               for (n && n(t); f < i.length; f++) o = i[f], u.o(e, o) && e[o] && e[o][0](), e[o] = 0;
               return u.O(s)
            },
            t = self.webpackChunkyangerxiao_landingpage = self.webpackChunkyangerxiao_landingpage || [];
         t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
      }(), u.nc = void 0
}();
//# sourceMappingURL=webpack-runtime-8e68cd982bacb6e2d9e5.js.map
