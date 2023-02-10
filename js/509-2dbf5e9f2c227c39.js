(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [509],
  {
    7077: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, r, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    6916: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(5321).Z,
        a = r(1322).Z,
        l = r(6687).Z,
        o = r(6239).Z,
        i = l(r(959)),
        c = a(r(8363)),
        s = r(3536),
        u = r(1691),
        d = r(9385);
      r(3704);
      var f = a(r(3405));
      let m = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
      function h(e) {
        return void 0 !== e.default;
      }
      function p(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function g(e, t, r, a, l, o, i) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let c = "decode" in e ? e.decode() : Promise.resolve();
        c.catch(() => {}).then(() => {
          if (e.parentNode) {
            if (("blur" === r && o(!0), null == a ? void 0 : a.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let i = !1,
                c = !1;
              a.current(
                n({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => i,
                  isPropagationStopped: () => c,
                  persist: () => {},
                  preventDefault: () => {
                    (i = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (c = !0), t.stopPropagation();
                  },
                })
              );
            }
            (null == l ? void 0 : l.current) && l.current(e);
          }
        });
      }
      let x = i.forwardRef((e, t) => {
          var {
              imgAttributes: r,
              heightInt: a,
              widthInt: l,
              qualityInt: c,
              className: s,
              imgStyle: u,
              blurStyle: d,
              isLazy: f,
              fill: m,
              placeholder: h,
              loading: p,
              srcString: x,
              config: v,
              unoptimized: y,
              loader: b,
              onLoadRef: E,
              onLoadingCompleteRef: w,
              setBlurComplete: C,
              setShowAltText: k,
              onLoad: S,
              onError: M,
            } = e,
            j = o(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (p = f ? "lazy" : p),
            i.default.createElement(
              i.default.Fragment,
              null,
              i.default.createElement(
                "img",
                Object.assign({}, j, r, {
                  width: l,
                  height: a,
                  decoding: "async",
                  "data-nimg": m ? "fill" : "1",
                  className: s,
                  loading: p,
                  style: n({}, u, d),
                  ref: i.useCallback(
                    (e) => {
                      t &&
                        ("function" == typeof t
                          ? t(e)
                          : "object" == typeof t && (t.current = e)),
                        e &&
                          (M && (e.src = e.src),
                          e.complete && g(e, x, h, E, w, C, y));
                    },
                    [x, h, E, w, C, M, y, t]
                  ),
                  onLoad: (e) => {
                    let t = e.currentTarget;
                    g(t, x, h, E, w, C, y);
                  },
                  onError: (e) => {
                    k(!0), "blur" === h && C(!0), M && M(e);
                  },
                })
              )
            )
          );
        }),
        v = i.forwardRef((e, t) => {
          let r, a;
          var l,
            {
              src: g,
              sizes: v,
              unoptimized: y = !1,
              priority: b = !1,
              loading: E,
              className: w,
              quality: C,
              width: k,
              height: S,
              fill: M,
              style: j,
              onLoad: N,
              onLoadingComplete: O,
              placeholder: _ = "empty",
              blurDataURL: T,
              layout: A,
              objectFit: P,
              objectPosition: I,
              lazyBoundary: L,
              lazyRoot: $,
            } = e,
            R = o(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let z = i.useContext(d.ImageConfigContext),
            D = i.useMemo(() => {
              let e = m || z || u.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                r = e.deviceSizes.sort((e, t) => e - t);
              return n({}, e, { allSizes: t, deviceSizes: r });
            }, [z]),
            F = R,
            H = F.loader || f.default;
          delete F.loader;
          let B = "__next_img_default" in H;
          if (B) {
            if ("custom" === D.loader)
              throw Error(
                'Image with src "'.concat(g, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let Y = H;
            H = (e) => {
              let { config: t } = e,
                r = o(e, ["config"]);
              return Y(r);
            };
          }
          if (A) {
            "fill" === A && (M = !0);
            let W = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[A];
            W && (j = n({}, j, W));
            let Z = { responsive: "100vw", fill: "100vw" }[A];
            Z && !v && (v = Z);
          }
          let J = "",
            K = p(k),
            V = p(S);
          if ("object" == typeof (l = g) && (h(l) || void 0 !== l.src)) {
            let q = h(g) ? g.default : g;
            if (!q.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(q)
                )
              );
            if (!q.height || !q.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(q)
                )
              );
            if (
              ((r = q.blurWidth),
              (a = q.blurHeight),
              (T = T || q.blurDataURL),
              (J = q.src),
              !M)
            ) {
              if (K || V) {
                if (K && !V) {
                  let U = K / q.width;
                  V = Math.round(q.height * U);
                } else if (!K && V) {
                  let G = V / q.height;
                  K = Math.round(q.width * G);
                }
              } else (K = q.width), (V = q.height);
            }
          }
          let Q = !b && ("lazy" === E || void 0 === E);
          ((g = "string" == typeof g ? g : J).startsWith("data:") ||
            g.startsWith("blob:")) &&
            ((y = !0), (Q = !1)),
            D.unoptimized && (y = !0),
            B && g.endsWith(".svg") && !D.dangerouslyAllowSVG && (y = !0);
          let [X, ee] = i.useState(!1),
            [et, er] = i.useState(!1),
            en = p(C),
            ea = Object.assign(
              M
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: P,
                    objectPosition: I,
                  }
                : {},
              et ? {} : { color: "transparent" },
              j
            ),
            el =
              "blur" === _ && T && !X
                ? {
                    backgroundSize: ea.objectFit || "cover",
                    backgroundPosition: ea.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        s.getImageBlurSvg({
                          widthInt: K,
                          heightInt: V,
                          blurWidth: r,
                          blurHeight: a,
                          blurDataURL: T,
                        }),
                        '")'
                      ),
                  }
                : {},
            eo = (function (e) {
              let {
                config: t,
                src: r,
                unoptimized: n,
                width: a,
                quality: l,
                sizes: o,
                loader: i,
              } = e;
              if (n) return { src: r, srcSet: void 0, sizes: void 0 };
              let { widths: c, kind: s } = (function (e, t, r) {
                  let { deviceSizes: n, allSizes: a } = e;
                  if (r) {
                    let l = /(^|\s)(1?\d?\d)vw/g,
                      o = [];
                    for (let i; (i = l.exec(r)); i) o.push(parseInt(i[2]));
                    if (o.length) {
                      let c = 0.01 * Math.min(...o);
                      return {
                        widths: a.filter((e) => e >= n[0] * c),
                        kind: "w",
                      };
                    }
                    return { widths: a, kind: "w" };
                  }
                  if ("number" != typeof t) return { widths: n, kind: "w" };
                  let s = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => a.find((t) => t >= e) || a[a.length - 1]
                      )
                    ),
                  ];
                  return { widths: s, kind: "x" };
                })(t, a, o),
                u = c.length - 1;
              return {
                sizes: o || "w" !== s ? o : "100vw",
                srcSet: c
                  .map((e, n) =>
                    ""
                      .concat(
                        i({ config: t, src: r, quality: l, width: e }),
                        " "
                      )
                      .concat("w" === s ? e : n + 1)
                      .concat(s)
                  )
                  .join(", "),
                src: i({ config: t, src: r, quality: l, width: c[u] }),
              };
            })({
              config: D,
              src: g,
              unoptimized: y,
              width: K,
              quality: en,
              sizes: v,
              loader: H,
            }),
            ei = g,
            ec = {
              imageSrcSet: eo.srcSet,
              imageSizes: eo.sizes,
              crossOrigin: F.crossOrigin,
            },
            es = i.useRef(N);
          i.useEffect(() => {
            es.current = N;
          }, [N]);
          let eu = i.useRef(O);
          i.useEffect(() => {
            eu.current = O;
          }, [O]);
          let ed = n(
            {
              isLazy: Q,
              imgAttributes: eo,
              heightInt: V,
              widthInt: K,
              qualityInt: en,
              className: w,
              imgStyle: ea,
              blurStyle: el,
              loading: E,
              config: D,
              fill: M,
              unoptimized: y,
              placeholder: _,
              loader: H,
              srcString: ei,
              onLoadRef: es,
              onLoadingCompleteRef: eu,
              setBlurComplete: ee,
              setShowAltText: er,
            },
            F
          );
          return i.default.createElement(
            i.default.Fragment,
            null,
            i.default.createElement(x, Object.assign({}, ed, { ref: t })),
            b
              ? i.default.createElement(
                  c.default,
                  null,
                  i.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + eo.src + eo.srcSet + eo.sizes,
                        rel: "preload",
                        as: "image",
                        href: eo.srcSet ? void 0 : eo.src,
                      },
                      ec
                    )
                  )
                )
              : null
          );
        });
      (t.default = v),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1474: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(1322).Z,
        a = r(6239).Z,
        l = n(r(959)),
        o = r(5314),
        i = r(1309),
        c = r(4829),
        s = r(9209),
        u = r(956),
        d = r(6283),
        f = r(7077),
        m = r(7465);
      let h = new Set();
      function p(e, t, r, n) {
        if (o.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            let a =
                void 0 !== n.locale
                  ? n.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              l = t + "%" + r + "%" + a;
            if (h.has(l)) return;
            h.add(l);
          }
          Promise.resolve(e.prefetch(t, r, n)).catch((e) => {});
        }
      }
      function g(e) {
        return "string" == typeof e ? e : i.formatUrl(e);
      }
      let x = l.default.forwardRef(function (e, t) {
        let r, n;
        let {
            href: i,
            as: h,
            children: x,
            prefetch: v,
            passHref: y,
            replace: b,
            shallow: E,
            scroll: w,
            locale: C,
            onClick: k,
            onMouseEnter: S,
            onTouchStart: M,
            legacyBehavior: j = !1,
          } = e,
          N = a(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = x),
          j &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = l.default.createElement("a", null, r));
        let O = !1 !== v,
          _ = l.default.useContext(s.RouterContext),
          T = l.default.useContext(u.AppRouterContext),
          A = null != _ ? _ : T,
          P = !_,
          { href: I, as: L } = l.default.useMemo(() => {
            if (!_) {
              let e = g(i);
              return { href: e, as: h ? g(h) : e };
            }
            let [t, r] = o.resolveHref(_, i, !0);
            return { href: t, as: h ? o.resolveHref(_, h) : r || t };
          }, [_, i, h]),
          $ = l.default.useRef(I),
          R = l.default.useRef(L);
        j && (n = l.default.Children.only(r));
        let z = j ? n && "object" == typeof n && n.ref : t,
          [D, F, H] = d.useIntersection({ rootMargin: "200px" }),
          B = l.default.useCallback(
            (e) => {
              (R.current !== L || $.current !== I) &&
                (H(), (R.current = L), ($.current = I)),
                D(e),
                z &&
                  ("function" == typeof z
                    ? z(e)
                    : "object" == typeof z && (z.current = e));
            },
            [L, z, I, H, D]
          );
        l.default.useEffect(() => {
          A && F && O && p(A, I, L, { locale: C });
        }, [L, I, F, C, O, null == _ ? void 0 : _.locale, A]);
        let Y = {
          ref: B,
          onClick(e) {
            j || "function" != typeof k || k(e),
              j &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              A &&
                !e.defaultPrevented &&
                (function (e, t, r, n, a, i, c, s, u, d) {
                  let { nodeName: f } = e.currentTarget,
                    m = "A" === f.toUpperCase();
                  if (
                    m &&
                    ((function (e) {
                      let { target: t } = e.currentTarget;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !o.isLocalURL(r))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    "beforePopState" in t
                      ? t[a ? "replace" : "push"](r, n, {
                          shallow: i,
                          locale: s,
                          scroll: c,
                        })
                      : t[a ? "replace" : "push"](n || r, {
                          forceOptimisticNavigation: !d,
                        });
                  };
                  u ? l.default.startTransition(h) : h();
                })(e, A, I, L, b, E, w, C, P, O);
          },
          onMouseEnter(e) {
            j || "function" != typeof S || S(e),
              j &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              A &&
                (O || !P) &&
                p(A, I, L, {
                  locale: C,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart(e) {
            j || "function" != typeof M || M(e),
              j &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              A &&
                (O || !P) &&
                p(A, I, L, {
                  locale: C,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!j || y || ("a" === n.type && !("href" in n.props))) {
          let W = void 0 !== C ? C : null == _ ? void 0 : _.locale,
            Z =
              (null == _ ? void 0 : _.isLocaleDomain) &&
              f.getDomainLocale(
                L,
                W,
                null == _ ? void 0 : _.locales,
                null == _ ? void 0 : _.domainLocales
              );
          Y.href =
            Z ||
            m.addBasePath(
              c.addLocale(L, W, null == _ ? void 0 : _.defaultLocale)
            );
        }
        return j
          ? l.default.cloneElement(n, Y)
          : l.default.createElement("a", Object.assign({}, N, Y), r);
      });
      (t.default = x),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    6283: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: r, disabled: c } = e,
            s = c || !l,
            [u, d] = n.useState(!1),
            [f, m] = n.useState(null);
          n.useEffect(() => {
            if (l) {
              if (!s && !u && f && f.tagName) {
                let e = (function (e, t, r) {
                  let {
                    id: n,
                    observer: a,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = i.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = o.get(n))) return t;
                    let a = new Map(),
                      l = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = a.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          t && r && t(r);
                        });
                      }, e);
                    return (
                      (t = { id: r, observer: l, elements: a }),
                      i.push(r),
                      o.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    l.set(e, t),
                    a.observe(e),
                    function () {
                      if ((l.delete(e), a.unobserve(e), 0 === l.size)) {
                        a.disconnect(), o.delete(n);
                        let t = i.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        t > -1 && i.splice(t, 1);
                      }
                    }
                  );
                })(f, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
                return e;
              }
            } else if (!u) {
              let n = a.requestIdleCallback(() => d(!0));
              return () => a.cancelIdleCallback(n);
            }
          }, [f, s, r, t, u]);
          let h = n.useCallback(() => {
            d(!1);
          }, []);
          return [m, u, h];
        });
      var n = r(959),
        a = r(5308);
      let l = "function" == typeof IntersectionObserver,
        o = new Map(),
        i = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3536: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let {
              widthInt: t,
              heightInt: r,
              blurWidth: n,
              blurHeight: a,
              blurDataURL: l,
            } = e,
            o = n || t,
            i = a || r,
            c = l.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return o && i
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(o, " ")
                .concat(
                  i,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(n && a ? "1" : "20", "'/%3E")
                .concat(
                  c,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(l, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(
                l,
                "'/%3E%3C/svg%3E"
              );
        });
    },
    3405: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: a } = e;
        return ""
          .concat(t.path, "?url=")
          .concat(encodeURIComponent(r), "&w=")
          .concat(n, "&q=")
          .concat(a || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (r.__next_img_default = !0),
        (t.default = r);
    },
    3642: function () {},
    7831: function (e) {
      !(function () {
        "use strict";
        var t = {
            114: function (e) {
              function t(e) {
                if ("string" != typeof e)
                  throw TypeError(
                    "Path must be a string. Received " + JSON.stringify(e)
                  );
              }
              function r(e, t) {
                for (
                  var r, n = "", a = 0, l = -1, o = 0, i = 0;
                  i <= e.length;
                  ++i
                ) {
                  if (i < e.length) r = e.charCodeAt(i);
                  else if (47 === r) break;
                  else r = 47;
                  if (47 === r) {
                    if (l === i - 1 || 1 === o);
                    else if (l !== i - 1 && 2 === o) {
                      if (
                        n.length < 2 ||
                        2 !== a ||
                        46 !== n.charCodeAt(n.length - 1) ||
                        46 !== n.charCodeAt(n.length - 2)
                      ) {
                        if (n.length > 2) {
                          var c = n.lastIndexOf("/");
                          if (c !== n.length - 1) {
                            -1 === c
                              ? ((n = ""), (a = 0))
                              : (a =
                                  (n = n.slice(0, c)).length -
                                  1 -
                                  n.lastIndexOf("/")),
                              (l = i),
                              (o = 0);
                            continue;
                          }
                        } else if (2 === n.length || 1 === n.length) {
                          (n = ""), (a = 0), (l = i), (o = 0);
                          continue;
                        }
                      }
                      t && (n.length > 0 ? (n += "/..") : (n = ".."), (a = 2));
                    } else
                      n.length > 0
                        ? (n += "/" + e.slice(l + 1, i))
                        : (n = e.slice(l + 1, i)),
                        (a = i - l - 1);
                    (l = i), (o = 0);
                  } else 46 === r && -1 !== o ? ++o : (o = -1);
                }
                return n;
              }
              var n = {
                resolve: function () {
                  for (
                    var e, n, a = "", l = !1, o = arguments.length - 1;
                    o >= -1 && !l;
                    o--
                  )
                    o >= 0
                      ? (n = arguments[o])
                      : (void 0 === e && (e = ""), (n = e)),
                      t(n),
                      0 !== n.length &&
                        ((a = n + "/" + a), (l = 47 === n.charCodeAt(0)));
                  return ((a = r(a, !l)), l)
                    ? a.length > 0
                      ? "/" + a
                      : "/"
                    : a.length > 0
                    ? a
                    : ".";
                },
                normalize: function (e) {
                  if ((t(e), 0 === e.length)) return ".";
                  var n = 47 === e.charCodeAt(0),
                    a = 47 === e.charCodeAt(e.length - 1);
                  return (0 !== (e = r(e, !n)).length || n || (e = "."),
                  e.length > 0 && a && (e += "/"),
                  n)
                    ? "/" + e
                    : e;
                },
                isAbsolute: function (e) {
                  return t(e), e.length > 0 && 47 === e.charCodeAt(0);
                },
                join: function () {
                  if (0 == arguments.length) return ".";
                  for (var e, r = 0; r < arguments.length; ++r) {
                    var a = arguments[r];
                    t(a),
                      a.length > 0 && (void 0 === e ? (e = a) : (e += "/" + a));
                  }
                  return void 0 === e ? "." : n.normalize(e);
                },
                relative: function (e, r) {
                  if (
                    (t(e),
                    t(r),
                    e === r || (e = n.resolve(e)) === (r = n.resolve(r)))
                  )
                    return "";
                  for (var a = 1; a < e.length && 47 === e.charCodeAt(a); ++a);
                  for (
                    var l = e.length, o = l - a, i = 1;
                    i < r.length && 47 === r.charCodeAt(i);
                    ++i
                  );
                  for (
                    var c = r.length - i, s = o < c ? o : c, u = -1, d = 0;
                    d <= s;
                    ++d
                  ) {
                    if (d === s) {
                      if (c > s) {
                        if (47 === r.charCodeAt(i + d))
                          return r.slice(i + d + 1);
                        if (0 === d) return r.slice(i + d);
                      } else
                        o > s &&
                          (47 === e.charCodeAt(a + d)
                            ? (u = d)
                            : 0 === d && (u = 0));
                      break;
                    }
                    var f = e.charCodeAt(a + d);
                    if (f !== r.charCodeAt(i + d)) break;
                    47 === f && (u = d);
                  }
                  var m = "";
                  for (d = a + u + 1; d <= l; ++d)
                    (d === l || 47 === e.charCodeAt(d)) &&
                      (0 === m.length ? (m += "..") : (m += "/.."));
                  return m.length > 0
                    ? m + r.slice(i + u)
                    : ((i += u), 47 === r.charCodeAt(i) && ++i, r.slice(i));
                },
                _makeLong: function (e) {
                  return e;
                },
                dirname: function (e) {
                  if ((t(e), 0 === e.length)) return ".";
                  for (
                    var r = e.charCodeAt(0),
                      n = 47 === r,
                      a = -1,
                      l = !0,
                      o = e.length - 1;
                    o >= 1;
                    --o
                  )
                    if (47 === (r = e.charCodeAt(o))) {
                      if (!l) {
                        a = o;
                        break;
                      }
                    } else l = !1;
                  return -1 === a
                    ? n
                      ? "/"
                      : "."
                    : n && 1 === a
                    ? "//"
                    : e.slice(0, a);
                },
                basename: function (e, r) {
                  if (void 0 !== r && "string" != typeof r)
                    throw TypeError('"ext" argument must be a string');
                  t(e);
                  var n,
                    a = 0,
                    l = -1,
                    o = !0;
                  if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                    if (r.length === e.length && r === e) return "";
                    var i = r.length - 1,
                      c = -1;
                    for (n = e.length - 1; n >= 0; --n) {
                      var s = e.charCodeAt(n);
                      if (47 === s) {
                        if (!o) {
                          a = n + 1;
                          break;
                        }
                      } else
                        -1 === c && ((o = !1), (c = n + 1)),
                          i >= 0 &&
                            (s === r.charCodeAt(i)
                              ? -1 == --i && (l = n)
                              : ((i = -1), (l = c)));
                    }
                    return (
                      a === l ? (l = c) : -1 === l && (l = e.length),
                      e.slice(a, l)
                    );
                  }
                  for (n = e.length - 1; n >= 0; --n)
                    if (47 === e.charCodeAt(n)) {
                      if (!o) {
                        a = n + 1;
                        break;
                      }
                    } else -1 === l && ((o = !1), (l = n + 1));
                  return -1 === l ? "" : e.slice(a, l);
                },
                extname: function (e) {
                  t(e);
                  for (
                    var r = -1, n = 0, a = -1, l = !0, o = 0, i = e.length - 1;
                    i >= 0;
                    --i
                  ) {
                    var c = e.charCodeAt(i);
                    if (47 === c) {
                      if (!l) {
                        n = i + 1;
                        break;
                      }
                      continue;
                    }
                    -1 === a && ((l = !1), (a = i + 1)),
                      46 === c
                        ? -1 === r
                          ? (r = i)
                          : 1 !== o && (o = 1)
                        : -1 !== r && (o = -1);
                  }
                  return -1 === r ||
                    -1 === a ||
                    0 === o ||
                    (1 === o && r === a - 1 && r === n + 1)
                    ? ""
                    : e.slice(r, a);
                },
                format: function (e) {
                  var t, r;
                  if (null === e || "object" != typeof e)
                    throw TypeError(
                      'The "pathObject" argument must be of type Object. Received type ' +
                        typeof e
                    );
                  return (
                    (t = e.dir || e.root),
                    (r = e.base || (e.name || "") + (e.ext || "")),
                    t ? (t === e.root ? t + r : t + "/" + r) : r
                  );
                },
                parse: function (e) {
                  t(e);
                  var r,
                    n = { root: "", dir: "", base: "", ext: "", name: "" };
                  if (0 === e.length) return n;
                  var a = e.charCodeAt(0),
                    l = 47 === a;
                  l ? ((n.root = "/"), (r = 1)) : (r = 0);
                  for (
                    var o = -1, i = 0, c = -1, s = !0, u = e.length - 1, d = 0;
                    u >= r;
                    --u
                  ) {
                    if (47 === (a = e.charCodeAt(u))) {
                      if (!s) {
                        i = u + 1;
                        break;
                      }
                      continue;
                    }
                    -1 === c && ((s = !1), (c = u + 1)),
                      46 === a
                        ? -1 === o
                          ? (o = u)
                          : 1 !== d && (d = 1)
                        : -1 !== o && (d = -1);
                  }
                  return (
                    -1 === o ||
                    -1 === c ||
                    0 === d ||
                    (1 === d && o === c - 1 && o === i + 1)
                      ? -1 !== c &&
                        (0 === i && l
                          ? (n.base = n.name = e.slice(1, c))
                          : (n.base = n.name = e.slice(i, c)))
                      : (0 === i && l
                          ? ((n.name = e.slice(1, o)), (n.base = e.slice(1, c)))
                          : ((n.name = e.slice(i, o)),
                            (n.base = e.slice(i, c))),
                        (n.ext = e.slice(o, c))),
                    i > 0 ? (n.dir = e.slice(0, i - 1)) : l && (n.dir = "/"),
                    n
                  );
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null,
              };
              (n.posix = n), (e.exports = n);
            },
          },
          r = {};
        function n(e) {
          var a = r[e];
          if (void 0 !== a) return a.exports;
          var l = (r[e] = { exports: {} }),
            o = !0;
          try {
            t[e](l, l.exports, n), (o = !1);
          } finally {
            o && delete r[e];
          }
          return l.exports;
        }
        n.ab = "//";
        var a = n(114);
        e.exports = a;
      })();
    },
    5377: function (e, t, r) {
      e.exports = r(8363);
    },
    3930: function (e, t, r) {
      r(6916);
    },
    3517: function (e, t, r) {
      e.exports = r(1474);
    },
    3190: function (e, t, r) {
      e.exports = r(5516);
    },
    2325: function (e, t, r) {
      "use strict";
      r.d(t, {
        FF: function () {
          return u;
        },
        JW: function () {
          return s;
        },
        Tl: function () {
          return a;
        },
      });
      var n = r(959),
        a = (e, t) => {
          var r, n;
          return (null == (r = e.frontMatter) ? void 0 : r.date) &&
            (null == (n = t.frontMatter) ? void 0 : n.date)
            ? new Date(t.frontMatter.date).getTime() -
                new Date(e.frontMatter.date).getTime()
            : -1;
        },
        l = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?(:\d{2}\.\d{3}Z)?$/,
        o = /^\d{4}\/\d{1,2}\/\d{1,2}( \d{1,2}:\d{1,2})?$/,
        i = (e) => l.test(e) || o.test(e),
        c = (0, n.createContext)(null),
        s = ({ config: e, children: t, opts: r }) => {
          let { date: a } = r.frontMatter;
          if (a && !i(a))
            throw Error(
              `Invalid date "${a}". Provide date in "YYYY/M/D", "YYYY/M/D H:m", "YYYY-MM-DD", "[YYYY-MM-DD]T[HH:mm]" or "[YYYY-MM-DD]T[HH:mm:ss.SSS]Z" format.`
            );
          return n.createElement(
            c.Provider,
            { value: { config: e, opts: r } },
            t
          );
        },
        u = () => {
          let e = (0, n.useContext)(c);
          if (!e)
            throw Error("useBlogContext must be used within a BlogProvider");
          return e;
        };
    },
    7052: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return ev;
        },
      });
      var n = r(2325);
      function a(e) {
        return (Array.isArray(e) ? e : e.split(",")).map((e) => e.trim());
      }
      var l = (e, t = []) => {
          Array.isArray(e.children) && e.children.forEach((e) => l(e, t)),
            t.push(e);
        },
        o = Object.defineProperty,
        i = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        f = (e, t, r) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        m = (e, t) => {
          for (var r in t || (t = {})) u.call(t, r) && f(e, r, t[r]);
          if (s) for (var r of s(t)) d.call(t, r) && f(e, r, t[r]);
          return e;
        },
        h = (e, t) => i(e, c(t)),
        p = (e, t) => {
          var r = {};
          for (var n in e) u.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && s)
            for (var n of s(e))
              0 > t.indexOf(n) && d.call(e, n) && (r[n] = e[n]);
          return r;
        },
        g = r(959);
      let x = ["light", "dark"],
        v = "(prefers-color-scheme: dark)",
        y = "undefined" == typeof window,
        b = (0, g.createContext)(void 0),
        E = { setTheme: (e) => {}, themes: [] },
        w = () => {
          var e;
          return null !== (e = (0, g.useContext)(b)) && void 0 !== e ? e : E;
        },
        C = (e) =>
          (0, g.useContext)(b)
            ? g.createElement(g.Fragment, null, e.children)
            : g.createElement(S, e),
        k = ["light", "dark"],
        S = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: r = !0,
          enableColorScheme: n = !0,
          storageKey: a = "theme",
          themes: l = k,
          defaultTheme: o = r ? "system" : "light",
          attribute: i = "data-theme",
          value: c,
          children: s,
          nonce: u,
        }) => {
          let [d, f] = (0, g.useState)(() => j(a, o)),
            [m, h] = (0, g.useState)(() => j(a)),
            p = c ? Object.values(c) : l,
            y = (0, g.useCallback)((e) => {
              let a = e;
              if (!a) return;
              "system" === e && r && (a = O());
              let l = c ? c[a] : a,
                s = t ? N() : null,
                u = document.documentElement;
              if (
                ("class" === i
                  ? (u.classList.remove(...p), l && u.classList.add(l))
                  : l
                  ? u.setAttribute(i, l)
                  : u.removeAttribute(i),
                n)
              ) {
                let d = x.includes(o) ? o : null,
                  f = x.includes(a) ? a : d;
                u.style.colorScheme = f;
              }
              null == s || s();
            }, []),
            E = (0, g.useCallback)(
              (e) => {
                f(e);
                try {
                  localStorage.setItem(a, e);
                } catch (t) {}
              },
              [e]
            ),
            w = (0, g.useCallback)(
              (t) => {
                let n = O(t);
                h(n), "system" === d && r && !e && y("system");
              },
              [d, e]
            );
          (0, g.useEffect)(() => {
            let e = window.matchMedia(v);
            return e.addListener(w), w(e), () => e.removeListener(w);
          }, [w]),
            (0, g.useEffect)(() => {
              let e = (e) => {
                e.key === a && E(e.newValue || o);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [E]),
            (0, g.useEffect)(() => {
              y(null != e ? e : d);
            }, [e, d]);
          let C = (0, g.useMemo)(
            () => ({
              theme: d,
              setTheme: E,
              forcedTheme: e,
              resolvedTheme: "system" === d ? m : d,
              themes: r ? [...l, "system"] : l,
              systemTheme: r ? m : void 0,
            }),
            [d, E, e, m, r, l]
          );
          return g.createElement(
            b.Provider,
            { value: C },
            g.createElement(M, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: r,
              enableColorScheme: n,
              storageKey: a,
              themes: l,
              defaultTheme: o,
              attribute: i,
              value: c,
              children: s,
              attrs: p,
              nonce: u,
            }),
            s
          );
        },
        M = (0, g.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: r,
            enableSystem: n,
            enableColorScheme: a,
            defaultTheme: l,
            value: o,
            attrs: i,
            nonce: c,
          }) => {
            let s = "system" === l,
              u =
                "class" === r
                  ? `var d=document.documentElement,c=d.classList;c.remove(${i
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${r}',s='setAttribute';`,
              d = a
                ? x.includes(l) && l
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              f = (e, t = !1, n = !0) => {
                let l = o ? o[e] : e,
                  i = t ? e + "|| ''" : `'${l}'`,
                  c = "";
                return (
                  a &&
                    n &&
                    !t &&
                    x.includes(e) &&
                    (c += `d.style.colorScheme = '${e}';`),
                  "class" === r
                    ? (c += t || l ? `c.add(${i})` : "null")
                    : l && (c += `d[s](n,${i})`),
                  c
                );
              },
              m = e
                ? `!function(){${u}${f(e)}}()`
                : n
                ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${s})){var t='${v}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(
                    "dark"
                  )}}else{${f("light")}}}else if(e){${
                    o ? `var x=${JSON.stringify(o)};` : ""
                  }${f(o ? "x[e]" : "e", !0)}}${
                    s ? "" : "else{" + f(l, !1, !1) + "}"
                  }${d}}catch(e){}}()`
                : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${
                    o ? `var x=${JSON.stringify(o)};` : ""
                  }${f(o ? "x[e]" : "e", !0)}}else{${f(
                    l,
                    !1,
                    !1
                  )};}${d}}catch(t){}}();`;
            return g.createElement("script", {
              nonce: c,
              dangerouslySetInnerHTML: { __html: m },
            });
          },
          () => !0
        ),
        j = (e, t) => {
          let r;
          if (!y) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (n) {}
            return r || t;
          }
        },
        N = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        O = (e) => (
          e || (e = window.matchMedia(v)), e.matches ? "dark" : "light"
        );
      var _ = r(3517),
        T = r.n(_),
        A = r(4169);
      function P(e) {
        return g.createElement(
          "svg",
          (0, A.ih)(
            {
              viewBox: "0 0 20 20",
              width: "1em",
              height: "1em",
              fill: "currentColor",
            },
            e
          ),
          g.createElement("path", {
            fillRule: "evenodd",
            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
            clipRule: "evenodd",
          })
        );
      }
      function I(e) {
        return g.createElement(
          "svg",
          (0, A.ih)(
            {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              stroke: "currentColor",
            },
            e
          ),
          g.createElement("rect", {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          g.createElement("path", {
            d: "M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
      function L(e) {
        return g.createElement(
          "svg",
          (0, A.ih)(
            {
              fill: "none",
              viewBox: "2 2 20 20",
              width: "12",
              height: "12",
              stroke: "currentColor",
            },
            e
          ),
          g.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            fill: "currentColor",
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
          })
        );
      }
      function $(e) {
        return g.createElement(
          "svg",
          (0, A.ih)(
            {
              fill: "none",
              viewBox: "3 3 18 18",
              width: "12",
              height: "12",
              stroke: "currentColor",
            },
            e
          ),
          g.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            fill: "currentColor",
            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
          })
        );
      }
      function R(e) {
        return g.createElement(
          "svg",
          (0, A.ih)({ viewBox: "0 0 24 24", width: "24", height: "24" }, e),
          g.createElement("path", {
            fill: "currentColor",
            d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z",
          })
        );
      }
      var z = r(313),
        D = r(422),
        F = (e) => {
          var { children: t, className: r = "" } = e,
            n = (0, A.S0)(e, ["children", "className"]);
          return g.createElement(
            "button",
            (0, A.ih)(
              {
                className: [
                  "nextra-button nx-transition-all active:nx-opacity-50",
                  "nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5",
                  "dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",
                  r,
                ].join(" "),
              },
              n
            ),
            t
          );
        },
        H = (e) => {
          var { getValue: t } = e,
            r = (0, A.S0)(e, ["getValue"]);
          let [n, a] = (0, g.useState)(!1);
          (0, g.useEffect)(() => {
            if (!n) return;
            let e = setTimeout(() => {
              a(!1);
            }, 2e3);
            return () => {
              clearTimeout(e);
            };
          }, [n]);
          let l = (0, g.useCallback)(
            () =>
              (0, A.Cr)(void 0, null, function* () {
                a(!0),
                  (null == navigator ? void 0 : navigator.clipboard) ||
                    console.error("Access to clipboard rejected!");
                try {
                  yield navigator.clipboard.writeText(t());
                } catch (e) {
                  console.error("Failed to copy!");
                }
              }),
            [t]
          );
          return g.createElement(
            F,
            (0, A.ih)({ onClick: l, title: "Copy code", tabIndex: 0 }, r),
            g.createElement(n ? P : I, {
              className:
                "nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4",
            })
          );
        },
        B = (e) => {
          var { children: t, className: r = "" } = e,
            n = (0, A.S0)(e, ["children", "className"]);
          return g.createElement(
            "code",
            (0, A.ih)(
              {
                className: [
                  "nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]",
                  "dark:nx-border-white/10 dark:nx-bg-white/10",
                  "data-line-numbers" in n ? "[counter-reset:line]" : "",
                  r,
                ].join(" "),
                dir: "ltr",
              },
              n
            ),
            t
          );
        },
        Y = (e) => {
          var { children: t, className: r = "", value: n, filename: a } = e,
            l = (0, A.S0)(e, ["children", "className", "value", "filename"]);
          let o = (0, g.useRef)(null),
            [i, c] = (0, g.useState)(n),
            s = (0, g.useCallback)(() => {
              let e = document.documentElement.dataset,
                t = "nextraWordWrap" in e;
              t ? delete e.nextraWordWrap : (e.nextraWordWrap = "");
            }, []);
          return (
            (0, g.useEffect)(() => {
              var e;
              let t =
                null == (e = o.current) ? void 0 : e.querySelector("code");
              (null == t ? void 0 : t.textContent) && c(t.textContent);
            }, [o]),
            g.createElement(
              g.Fragment,
              null,
              a &&
                g.createElement(
                  "div",
                  {
                    className:
                      "nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",
                  },
                  a
                ),
              g.createElement(
                "pre",
                (0, A.ih)(
                  {
                    className: [
                      "nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]",
                      "contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",
                      a ? "nx-pt-12 nx-pb-4" : "nx-py-4",
                      r,
                    ].join(" "),
                    ref: o,
                  },
                  l
                ),
                t
              ),
              g.createElement(
                "div",
                {
                  className: [
                    "nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100",
                    "nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",
                    a ? "nx-top-8" : "nx-top-0",
                  ].join(" "),
                },
                g.createElement(
                  F,
                  {
                    onClick: s,
                    className: "md:nx-hidden",
                    title: "Toggle word wrap",
                  },
                  g.createElement(R, {
                    className: "nx-pointer-events-none nx-h-4 nx-w-4",
                  })
                ),
                i &&
                  g.createElement(H, {
                    getValue: () => {
                      var e, t;
                      return (
                        (null ==
                        (t =
                          null == (e = o.current)
                            ? void 0
                            : e.querySelector("code"))
                          ? void 0
                          : t.textContent) || ""
                      );
                    },
                  })
              )
            )
          );
        },
        W = (e) =>
          g.createElement(
            "td",
            (0, A.ih)(
              {
                className:
                  "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600",
              },
              e
            )
          ),
        Z = (e) => {
          var { className: t = "" } = e,
            r = (0, A.S0)(e, ["className"]);
          return g.createElement(
            "table",
            (0, A.ih)({ className: "nx-block nx-overflow-x-scroll " + t }, r)
          );
        },
        J = (e) =>
          g.createElement(
            "th",
            (0, A.ih)(
              {
                className:
                  "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600",
              },
              e
            )
          ),
        K = (e) =>
          g.createElement(
            "tr",
            (0, A.ih)(
              {
                className:
                  "nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20",
              },
              e
            )
          ),
        V = r(5377),
        q = r.n(V),
        U = r(3190);
      function G() {
        let { setTheme: e, resolvedTheme: t } = w(),
          r = (function () {
            let [e, t] = (0, g.useState)(!1);
            return (
              (0, g.useEffect)(() => {
                t(!0);
              }, []),
              e
            );
          })(),
          n = "dark" === t,
          a = () => {
            e(n ? "light" : "dark");
          };
        return g.createElement(
          "span",
          {
            role: "button",
            "aria-label": "Toggle Dark Mode",
            className: "nx-cursor-pointer nx-p-2 nx-text-current",
            tabIndex: 0,
            onClick: a,
            onKeyDown: (e) => {
              "Enter" === e.key && a();
            },
          },
          r && n ? g.createElement(L, null) : g.createElement($, null)
        );
      }
      function Q(e, t) {
        for (let r of e) if (t(r)) return r;
        for (let n of e)
          if ("Folder" === n.kind) {
            let a = Q(n.children, t);
            if (a) return a;
          }
        return null;
      }
      var X = ({ opts: e }) => {
        let t = null,
          r = [],
          { route: n } = e;
        Q(e.pageMap, (e) => {
          "route" in e &&
            n !== e.route &&
            (n + "/").startsWith("/" === e.route ? "/" : e.route + "/") &&
            r.push(e);
        });
        let a = r
          .reverse()
          .find(
            (e) =>
              "frontMatter" in e &&
              e.frontMatter &&
              "posts" === e.frontMatter.type
          );
        return a && (t = a.route), { parentPage: a, back: t };
      };
      function ee() {
        var e;
        let { opts: t, config: r } = (0, n.FF)(),
          { author: l, date: o, tag: i } = t.frontMatter,
          { back: c } = X({ opts: t, config: r }),
          s = i ? a(i) : [],
          u = s.map((e) =>
            g.createElement(
              T(),
              {
                key: e,
                href: "/tags/[tag]",
                as: `/tags/${e}`,
                passHref: !0,
                legacyBehavior: !0,
              },
              g.createElement(
                "a",
                {
                  className:
                    "\n          nx-select-none\n          nx-rounded-md\n          nx-bg-gray-200\n          nx-px-1\n          nx-text-sm\n          nx-text-gray-400\n          nx-transition-colors\n          hover:nx-bg-gray-300\n          hover:nx-text-gray-500\n          dark:nx-bg-gray-600\n          dark:nx-text-gray-300\n          dark:hover:nx-bg-gray-700\n          dark:hover:nx-text-gray-200\n        ",
                },
                e
              )
            )
          ),
          d = null == (e = t.readingTime) ? void 0 : e.text;
        return g.createElement(
          "div",
          {
            className:
              "nx-mb-8 nx-flex nx-gap-3 " +
              (d ? "nx-items-start" : "nx-items-center"),
          },
          g.createElement(
            "div",
            { className: "nx-grow nx-text-gray-400" },
            g.createElement(
              "div",
              {
                className:
                  "nx-not-prose nx-flex nx-flex-wrap nx-items-center nx-gap-1",
              },
              l,
              l && o && ",",
              o &&
                g.createElement(
                  "time",
                  { dateTime: new Date(o).toISOString() },
                  new Date(o).toDateString()
                ),
              (l || o) &&
                (d || s.length > 0) &&
                g.createElement("span", { className: "nx-px-1" }, "•"),
              d || u
            ),
            d &&
              g.createElement(
                "div",
                {
                  className:
                    "nx-not-prose nx-mt-1 nx-flex nx-flex-wrap nx-items-center nx-gap-1",
                },
                u
              )
          ),
          g.createElement(
            "div",
            { className: "nx-flex nx-items-center nx-gap-3" },
            c &&
              g.createElement(
                T(),
                { href: c, passHref: !0, legacyBehavior: !0 },
                g.createElement("a", null, "Back")
              ),
            r.darkMode && g.createElement(G, null)
          )
        );
      }
      var et = (0, g.createContext)((0, g.createRef)()),
        er = ({ children: e }) => {
          let t = (0, g.useContext)(et),
            { opts: r } = (0, n.FF)(),
            [a, l] = (0, g.useState)(!1);
          return (
            (0, g.useEffect)(() => {
              t.current && r.hasJsxInH1 && l(!0);
            }, []),
            g.createElement(
              g.Fragment,
              null,
              a && (0, D.createPortal)(e, t.current)
            )
          );
        },
        en = (e) => (t) => {
          var { children: r, id: n } = t,
            a = p(t, ["children", "id"]);
          return g.createElement(
            e,
            m({ className: `subheading-${e}` }, a),
            r,
            g.createElement("span", {
              className: "nx-absolute -nx-mt-7",
              id: n,
            }),
            g.createElement("a", {
              href: n && `#${n}`,
              className: "subheading-anchor",
              "aria-label": "Permalink for this section",
            })
          );
        },
        ea = (e) => {
          var t,
            { children: r } = e,
            n = p(e, ["children"]);
          let a = null == (t = n.href) ? void 0 : t.startsWith("https://");
          return a
            ? g.createElement(
                "a",
                m({ target: "_blank", rel: "noreferrer" }, n),
                r,
                g.createElement(
                  "span",
                  { className: "nx-sr-only" },
                  " (opens in a new tab)"
                )
              )
            : n.href
            ? g.createElement(
                T(),
                { href: n.href, passHref: !0, legacyBehavior: !0 },
                g.createElement("a", m({}, n), r)
              )
            : g.createElement(g.Fragment, null);
        },
        el = () => {
          let { config: e } = (0, n.FF)();
          return m(
            {
              h1: er,
              h2: en("h2"),
              h3: en("h3"),
              h4: en("h4"),
              h5: en("h5"),
              h6: en("h6"),
              a: ea,
              pre: (e) => {
                var { children: t } = e,
                  r = p(e, ["children"]);
                return g.createElement(
                  "div",
                  { className: "nx-not-prose" },
                  g.createElement(Y, m({}, r), t)
                );
              },
              tr: K,
              th: J,
              td: W,
              table: (e) =>
                g.createElement(Z, m({ className: "nx-not-prose" }, e)),
              code: B,
            },
            e.components
          );
        },
        eo = ({ children: e }) =>
          g.createElement(z.Zo, { components: el() }, e),
        ei = ({ children: e }) => {
          var t;
          let { config: r, opts: a } = (0, n.FF)(),
            l = `${a.title}${r.titleSuffix || ""}`,
            o = (0, g.useRef)(null);
          return g.createElement(
            "article",
            {
              className:
                "nx-container nx-prose-sm dark:nx-prose-dark md:nx-prose",
              dir: "ltr",
            },
            g.createElement(
              q(),
              null,
              g.createElement("title", null, l),
              null == (t = r.head)
                ? void 0
                : t.call(r, { title: l, meta: a.frontMatter })
            ),
            g.createElement(
              et.Provider,
              { value: o },
              a.hasJsxInH1 ? g.createElement("h1", { ref: o }) : null,
              a.hasJsxInH1 ? null : g.createElement("h1", null, a.title),
              e,
              r.footer
            )
          );
        },
        ec = ({ children: e }) => {
          let { config: t } = (0, n.FF)();
          return g.createElement(
            ei,
            null,
            g.createElement(ee, null),
            g.createElement(eo, null, e, t.postFooter, t.comments)
          );
        },
        es = (e) => {
          var t;
          let r =
            "frontMatter" in e &&
            (null == (t = e.frontMatter) ? void 0 : t.type);
          return r && ["page", "posts"].includes(r);
        },
        eu = (e) => {
          var t;
          if (
            "Folder" === e.kind ||
            "Meta" === e.kind ||
            e.name.startsWith("_")
          )
            return !1;
          let r = null == (t = e.frontMatter) ? void 0 : t.type;
          return !r || "post" === r;
        },
        ed = ({ opts: e }) => {
          let t = [],
            r = [],
            { route: a } = e;
          return (
            Q(e.pageMap, (e) => {
              es(e) && r.push(h(m({}, e), { active: e.route === a })),
                eu(e) && t.push(e);
            }),
            t.sort(n.Tl),
            r.sort(n.Tl),
            { posts: t, navPages: r }
          );
        };
      function ef() {
        var e;
        let { opts: t, config: r } = (0, n.FF)(),
          { navPages: a } = ed({ opts: t, config: r });
        return g.createElement(
          "div",
          { className: "nx-mb-8 nx-flex nx-items-center nx-gap-3" },
          g.createElement(
            "div",
            {
              className:
                "nx-flex nx-grow nx-flex-wrap nx-items-center nx-justify-end nx-gap-3",
            },
            a.map((e) => {
              var t, r;
              return e.active
                ? g.createElement(
                    "span",
                    {
                      key: e.route,
                      className: "nx-cursor-default nx-text-gray-400",
                    },
                    (null == (t = e.frontMatter) ? void 0 : t.title) || e.name
                  )
                : g.createElement(
                    T(),
                    {
                      key: e.route,
                      href: e.route,
                      passHref: !0,
                      legacyBehavior: !0,
                    },
                    g.createElement(
                      "a",
                      null,
                      (null == (r = e.frontMatter) ? void 0 : r.title) || e.name
                    )
                  );
            }),
            null == (e = r.navs)
              ? void 0
              : e.map((e) =>
                  g.createElement(
                    T(),
                    {
                      key: e.url,
                      href: e.url,
                      passHref: !0,
                      legacyBehavior: !0,
                    },
                    g.createElement("a", null, e.name)
                  )
                )
          ),
          r.darkMode && g.createElement(G, null)
        );
      }
      var em = ({ children: e }) => {
          let { config: t, opts: r } = (0, n.FF)(),
            { posts: l } = ed({ config: t, opts: r }),
            o = (0, U.useRouter)(),
            { type: i } = r.frontMatter,
            c = "tag" === i ? o.query.tag : null,
            s = l.map((e) => {
              var r, n, l;
              if (c) {
                let o = (function (e) {
                  if (!e.frontMatter) return [];
                  let t = e.frontMatter.tag || "";
                  return a(t);
                })(e);
                if (!Array.isArray(c) && !o.includes(c)) return null;
              } else if ("tag" === i) return null;
              let s =
                  (null == (r = e.frontMatter) ? void 0 : r.title) || e.name,
                u =
                  (null == (n = e.frontMatter) ? void 0 : n.date) &&
                  new Date(e.frontMatter.date),
                d = null == (l = e.frontMatter) ? void 0 : l.description;
              return g.createElement(
                "div",
                { key: e.route, className: "post-item" },
                g.createElement(
                  "h3",
                  null,
                  g.createElement(
                    T(),
                    { href: e.route, passHref: !0, legacyBehavior: !0 },
                    g.createElement("a", { className: "!nx-no-underline" }, s)
                  )
                ),
                d &&
                  g.createElement(
                    "p",
                    { className: "nx-mb-2 nx-text-gray-400" },
                    d,
                    t.readMore &&
                      g.createElement(
                        T(),
                        { href: e.route, passHref: !0, legacyBehavior: !0 },
                        g.createElement(
                          "a",
                          { className: "post-item-more nx-ml-2" },
                          t.readMore
                        )
                      )
                  ),
                u &&
                  g.createElement(
                    "time",
                    {
                      className: "nx-text-sm nx-text-gray-300",
                      dateTime: u.toISOString(),
                    },
                    u.toDateString()
                  )
              );
            });
          return g.createElement(
            ei,
            null,
            g.createElement(ef, null),
            g.createElement(eo, null, e),
            s
          );
        },
        eh = ({ children: e }) =>
          g.createElement(
            ei,
            null,
            g.createElement(ef, null),
            g.createElement(eo, null, e)
          ),
        ep = {
          footer: g.createElement(
            "small",
            { className: "nx-mt-32 nx-block" },
            "CC BY-NC 4.0 ",
            new Date().getFullYear(),
            " \xa9 Shu Ding."
          ),
          readMore: "Read More →",
        },
        eg = { post: ec, page: eh, posts: em, tag: em },
        ex = ({ config: e, children: t, opts: r }) => {
          let a = r.frontMatter.type || "post",
            l = eg[a];
          if (!l)
            throw Error(
              `nextra-theme-blog does not support the layout type "${a}" It only supports "post", "page", "posts" and "tag"`
            );
          return g.createElement(
            n.JW,
            { opts: r, config: e },
            g.createElement(l, null, t)
          );
        };
      function ev(e) {
        var { children: t } = e,
          r = p(e, ["children"]);
        let n = m(m({}, ep), r.themeConfig);
        return g.createElement(
          C,
          { attribute: "class", defaultTheme: "system", enableSystem: !0 },
          g.createElement(ex, { config: n, opts: r.pageOpts }, t)
        );
      }
    },
    313: function (e, t, r) {
      "use strict";
      r.d(t, {
        Zo: function () {
          return i;
        },
        ah: function () {
          return l;
        },
      });
      var n = r(959);
      let a = n.createContext({});
      function l(e) {
        let t = n.useContext(a);
        return n.useMemo(
          () => ("function" == typeof e ? e(t) : { ...t, ...e }),
          [t, e]
        );
      }
      let o = {};
      function i({ components: e, children: t, disableParentContext: r }) {
        let i = l(e);
        return r && (i = e || o), n.createElement(a.Provider, { value: i }, t);
      }
    },
    4169: function (e, t, r) {
      "use strict";
      r.d(t, {
        Cr: function () {
          return u;
        },
        S0: function () {
          return s;
        },
        ih: function () {
          return c;
        },
      });
      var n = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable,
        i = (e, t, r) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        c = (e, t) => {
          for (var r in t || (t = {})) l.call(t, r) && i(e, r, t[r]);
          if (a) for (var r of a(t)) o.call(t, r) && i(e, r, t[r]);
          return e;
        },
        s = (e, t) => {
          var r = {};
          for (var n in e) l.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && a)
            for (var n of a(e))
              0 > t.indexOf(n) && o.call(e, n) && (r[n] = e[n]);
          return r;
        },
        u = (e, t, r) =>
          new Promise((n, a) => {
            var l = (e) => {
                try {
                  i(r.next(e));
                } catch (t) {
                  a(t);
                }
              },
              o = (e) => {
                try {
                  i(r.throw(e));
                } catch (t) {
                  a(t);
                }
              },
              i = (e) =>
                e.done ? n(e.value) : Promise.resolve(e.value).then(l, o);
            i((r = r.apply(e, t)).next());
          });
    },
    1921: function (e, t, r) {
      "use strict";
      r.d(t, {
        mK: function () {
          return a;
        },
        sC: function () {
          return l;
        },
      });
      var n = r(959),
        a = (0, n.createContext)(!1),
        l = (e = "ssg") => {
          var t;
          return null == (t = (0, n.useContext)(a)) ? void 0 : t[e];
        };
    },
    6987: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(1921),
        a = r(7831),
        l = r(5685).cwd();
      a.join(l, "public");
      var o = Symbol.for("__nextra_internal__"),
        i = r(4169),
        c = r(959),
        s = r(3190);
      function u(e) {
        let { context: t, Layout: r } = (function () {
            let e = globalThis[o],
              { route: t } = (0, s.useRouter)(),
              r = e.context[t];
            if (!r)
              throw Error(
                "No content found for the current route. This is a Nextra bug."
              );
            return { context: r, Layout: e.Layout };
          })(),
          { Content: a } = t,
          l = (0, i.S0)(t, ["Content"]);
        return (0, c.createElement)(
          r,
          l,
          (0, c.createElement)(
            n.mK.Provider,
            { value: e },
            (0, c.createElement)(a, e)
          )
        );
      }
    },
  },
]);
