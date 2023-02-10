(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5365: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(5777);
        },
      ]);
    },
    4144: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var o = n(1527),
        r = n(3190),
        a = n(2325);
      let i = "Vikas Rajbanshi",
        s = "numToStr",
        c = "hello@vikasraj.dev",
        d = "https://www.".concat("vikasraj.dev"),
        l = "@".concat(s),
        m = "".concat(d, "/api/og"),
        g = "".concat(d, "/logo.png"),
        p = /\/blog\/.+/,
        h = new Intl.DateTimeFormat("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      function u(e) {
        let { content: t } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("meta", { name: "image", content: t }),
            (0, o.jsx)("meta", { itemProp: "image", content: t }),
            (0, o.jsx)("meta", { property: "og:image", content: t }),
            (0, o.jsx)("meta", { name: "twitter:image", content: t }),
          ],
        });
      }
      function f(e) {
        var t;
        let { opts: n } = e,
          r = new URLSearchParams({
            t: n.title,
            d: h.format(new Date(n.frontMatter.date)),
            p: n.route,
            r: null === (t = n.readingTime) || void 0 === t ? void 0 : t.text,
          });
        return (0, o.jsx)(u, {
          content: "".concat(m, "?").concat(r.toString()),
        });
      }
      let j = {
        darkMode: !0,
        readMore: "Read More →",
        titleSuffix: " ❙ ".concat(i),
        head: function (e) {
          let { meta: t } = e,
            { opts: n } = (0, a.FF)(),
            r = "".concat(t.title, " - ").concat(i),
            s = p.test(n.route);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("link", {
                rel: "icon",
                type: "image/svg+xml",
                href: "/favicon.svg",
              }),
              (0, o.jsx)(
                "link",
                { rel: "canonical", href: "".concat(d).concat(n.route) },
                "canonical_url"
              ),
              (0, o.jsx)("meta", { name: "author", content: i }, "author"),
              (0, o.jsx)("meta", { name: "title", content: r }, "title"),
              (0, o.jsx)(
                "meta",
                { name: "description", content: t.description },
                "description"
              ),
              (0, o.jsx)(
                "meta",
                { itemProp: "name", content: r },
                "schema_title"
              ),
              (0, o.jsx)(
                "meta",
                { itemProp: "description", content: t.description },
                "schema_description"
              ),
              (0, o.jsx)(
                "meta",
                {
                  property: "og:type",
                  content: "date" in t ? "article" : "website",
                },
                "og_type"
              ),
              (0, o.jsx)(
                "meta",
                { property: "og:title", content: r },
                "og_title"
              ),
              (0, o.jsx)(
                "meta",
                { property: "og:description", content: t.description },
                "og_description"
              ),
              (0, o.jsx)("meta", { property: "og:url", content: d }, "og_url"),
              (0, o.jsx)(
                "meta",
                { property: "og:logo", content: g },
                "og_logo"
              ),
              (0, o.jsx)(
                "meta",
                { property: "twitter:card", content: "summary_large_image" },
                "twitter_card"
              ),
              (0, o.jsx)(
                "meta",
                { name: "twitter:creator", content: l },
                "twitter_creator"
              ),
              (0, o.jsx)(
                "meta",
                { property: "twitter:site", content: l },
                "twitter_site"
              ),
              (0, o.jsx)(
                "meta",
                { property: "twitter:title", content: r },
                "twitter_title"
              ),
              (0, o.jsx)(
                "meta",
                { property: "twitter:description", content: t.description },
                "twitter_description"
              ),
              (0, o.jsx)(
                "meta",
                { property: "twitter:url", content: d },
                "twitter_url"
              ),
              (0, o.jsx)(
                "meta",
                { property: "twitter:image", content: g },
                "twitter_image"
              ),
              s
                ? (0, o.jsx)(f, { opts: n })
                : (0, o.jsx)(u, {
                    content: ""
                      .concat(m, "?t=")
                      .concat(encodeURIComponent(t.title)),
                  }),
            ],
          });
        },
        footer: (0, o.jsx)(function () {
          let { pathname: e } = (0, r.useRouter)(),
            t = p.test(e);
          return (0,
          o.jsxs)("footer", { children: [(0, o.jsx)("hr", {}), (0, o.jsxs)("section", { className: "legends", children: [(0, o.jsxs)("nav", { children: [(0, o.jsx)("a", { href: "https://twitter.com/".concat(s), target: "_blank", rel: "noreferrer", children: "Twitter" }), (0, o.jsx)("span", { children: " \xb7 " }), (0, o.jsx)("a", { href: "https://github.com/".concat(s), target: "_blank", rel: "noreferrer", children: "GitHub" }), (0, o.jsx)("span", { children: " \xb7 " }), (0, o.jsx)("a", { href: "mailto:".concat(c), target: "_blank", rel: "noreferrer", children: c })] }), (0, o.jsx)("aside", { children: t ? (0, o.jsx)("a", { title: "Found a Typo? Have any suggestions? Feel free to submit a PR :)", href: "https://github.com/".concat(s, "/site/edit/main/pages").concat(e, ".mdx"), target: "_blank", rel: "noreferrer", children: "Edit on Github" }) : null })] }), (0, o.jsxs)("section", { style: { marginTop: "4rem" }, children: [(0, o.jsx)("abbr", { title: "This site and all its content are licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.", style: { cursor: "help" }, children: "CC BY-NC-SA 4.0" }), (0, o.jsxs)("time", { children: [" ", new Date().getFullYear()] }), " \xa9 ", i, "."] })] });
        }, {}),
      };
      var x = j;
    },
    5777: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l.Z;
          },
        });
      var o,
        r,
        a,
        i = n(1527),
        s = n(4144);
      n(3642);
      var c = n(7052),
        d = n(313);
      n(3930);
      var l = n(6987);
      let m = {
          filePath: "pages/index.md",
          route: "/",
          frontMatter: {
            type: "page",
            title: "About",
            description:
              "I am Vikas Rajbanshi, a software engineer based in India. I know how to code for the browser and server but I personally enjoy building stuff for the terminals.",
          },
          pageMap: [
            {
              kind: "Folder",
              name: "blog",
              route: "/blog",
              children: [
                {
                  kind: "MdxPage",
                  name: "environment-variables-right-way",
                  route: "/blog/environment-variables-right-way",
                  frontMatter: {
                    title: "Node.js environment variables! The Right Way.",
                    date: "2019-07-12T00:00:00.000Z",
                    spoiler: "There is always a better way to do something.",
                    tags: [
                      "node",
                      "nodejs",
                      "process",
                      "environment variables",
                    ],
                    type: "post",
                  },
                },
                {
                  kind: "MdxPage",
                  name: "lsp-neovim-retrospective",
                  route: "/blog/lsp-neovim-retrospective",
                  frontMatter: {
                    title: "LSP & Neovim; A Retrospective!",
                    description:
                      "Going from a simple text editor to a coding experience that everyone loves and enjoys!",
                    date: "2022-07-28T00:00:00.000Z",
                    tag: ["neovim", "lsp"],
                    type: "post",
                  },
                },
                {
                  kind: "MdxPage",
                  name: "messing-with-lua-metatables",
                  route: "/blog/messing-with-lua-metatables",
                  frontMatter: {
                    title: "Messing with lua metatables",
                    description:
                      "because the more we mess around; the more we find out!",
                    date: "2023-01-05T00:00:00.000Z",
                    tag: ["neovim", "lua"],
                    type: "post",
                  },
                },
                {
                  kind: "MdxPage",
                  name: "my-quest-to-find-the-perfect-ide",
                  route: "/blog/my-quest-to-find-the-perfect-ide",
                  frontMatter: {
                    title: "My quest to find the perfect IDE",
                    date: "2019-06-10T00:00:00.000Z",
                    tags: ["atom", "vscode", "editor", "text editor", "ide"],
                    type: "post",
                  },
                },
                {
                  kind: "MdxPage",
                  name: "nodejs-logging",
                  route: "/blog/nodejs-logging",
                  frontMatter: {
                    title: "Logging in Node.js! Why, How and What?",
                    description:
                      "Understand Why, How, and What to log in a Node.js application, and Best Practices around it.",
                    date: "2022-06-10T00:00:00.000Z",
                    tag: ["nodejs", "fastify"],
                    type: "post",
                  },
                },
                {
                  kind: "MdxPage",
                  name: "running-react-node-concurrently",
                  route: "/blog/running-react-node-concurrently",
                  frontMatter: {
                    title:
                      "Running React and Node.js in one shot with Concurrently!",
                    date: "2019-07-22T00:00:00.000Z",
                    tags: [
                      "node",
                      "nodejs",
                      "npm",
                      "package",
                      "concurrently",
                      "react",
                      "reactjs",
                      "workflow",
                    ],
                    type: "post",
                  },
                },
                {
                  kind: "MdxPage",
                  name: "running-react-node-docker",
                  route: "/blog/running-react-node-docker",
                  frontMatter: {
                    title: "Running React and Node.js in one shot with Docker!",
                    date: "2019-07-23T00:00:00.000Z",
                    tags: [
                      "node",
                      "nodejs",
                      "npm",
                      "docker",
                      "react",
                      "reactjs",
                      "workflow",
                    ],
                    type: "post",
                  },
                },
                {
                  kind: "MdxPage",
                  name: "vim-dot-repeat",
                  route: "/blog/vim-dot-repeat",
                  frontMatter: {
                    title: "Dot-Repeat in Vim and Neovim",
                    description:
                      "Understand dot-repeat in-depth; One of the most powerful feature of vim and neovim",
                    date: "2022-06-30T00:00:00.000Z",
                    tag: ["neovim", "vim"],
                    type: "post",
                  },
                },
                {
                  kind: "MdxPage",
                  name: "why-am-i-even-coding",
                  route: "/blog/why-am-i-even-coding",
                  frontMatter: {
                    title: "Why am I even coding?",
                    date: "2019-06-06T00:00:00.000Z",
                    tags: ["career", "coding", "code"],
                    type: "post",
                  },
                },
                {
                  kind: "Meta",
                  data: {
                    "messing-with-lua-metatables":
                      "Messing with lua metatables",
                    "lsp-neovim-retrospective":
                      "LSP & Neovim; A Retrospective!",
                    "vim-dot-repeat": "Dot-Repeat in Vim and Neovim",
                    "nodejs-logging": "Logging in Node.js! Why, How and What?",
                    "running-react-node-docker":
                      "Running React and Node.js in one shot with Docker!",
                    "running-react-node-concurrently":
                      "Running React and Node.js in one shot with Concurrently!",
                    "environment-variables-right-way":
                      "Node.js environment variables! The Right Way.",
                    "my-quest-to-find-the-perfect-ide":
                      "My quest to find the perfect IDE",
                    "why-am-i-even-coding": "Why am I even coding?",
                  },
                },
              ],
            },
            {
              kind: "MdxPage",
              name: "blog",
              route: "/blog",
              frontMatter: { type: "posts", title: "Writings" },
            },
            {
              kind: "MdxPage",
              name: "index",
              route: "/",
              frontMatter: {
                type: "page",
                title: "About",
                description:
                  "I am Vikas Rajbanshi, a software engineer based in India. I know how to code for the browser and server but I personally enjoy building stuff for the terminals.",
              },
            },
            {
              kind: "Folder",
              name: "tags",
              route: "/tags",
              children: [
                {
                  kind: "MdxPage",
                  name: "[tag]",
                  route: "/tags/[tag]",
                  frontMatter: { type: "tag" },
                },
                { kind: "Meta", data: { "[tag]": "[tag]" } },
              ],
            },
            {
              kind: "Meta",
              data: { index: "About", blog: "Writings", tags: "Tags" },
            },
          ],
          headings: [],
          timestamp: 1672993101e3,
          flexsearch: { codeblocks: !0 },
          readingTime: {
            text: "1 min read",
            minutes: 0.435,
            time: 26100,
            words: 87,
          },
        },
        g = Symbol.for("__nextra_internal__"),
        p = (o = globalThis)[g] || (o[g] = Object.create(null));
      function h(e) {
        let t = Object.assign(
          { p: "p", a: "a", strong: "strong" },
          (0, d.ah)(),
          e.components
        );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.p, {
              children:
                "Hey, I'm Vikas Rajbanshi, a Software Engineer based in India. I know how to code for the browser & server but I personally enjoy building stuff for the terminals.",
            }),
            "\n",
            (0, i.jsx)(t.p, {
              children:
                "Mostly self taught and never took any formal education related to Computer Science. Did my graduation in Bachelor of Commerce (Hons) from Delhi Universtiy and completed my High School education from Kendriya Vidhyalaya.",
            }),
            "\n",
            (0, i.jsxs)(t.p, {
              children: [
                "I love making tools and contributing to Open Source. My notable work are ",
                (0, i.jsx)(t.a, {
                  href: "https://github.com/numToStr/Comment.nvim",
                  children: "Comment.nvim",
                }),
                ", ",
                (0, i.jsx)(t.a, {
                  href: "https://github.com/numToStr/FTerm.nvim",
                  children: "FTerm.nvim",
                }),
                ", ",
                (0, i.jsx)(t.a, {
                  href: "https://github.com/numToStr/lemmy-help",
                  children: "lemmy-help",
                }),
                ".",
              ],
            }),
            "\n",
            (0, i.jsxs)(t.p, {
              children: [
                "Thank you for visiting and be sure to check out my ",
                (0, i.jsx)(t.a, {
                  href: "./blog",
                  children: (0, i.jsx)(t.strong, { children: "writings" }),
                }),
                "!",
              ],
            }),
          ],
        });
      }
      (p.pageMap = m.pageMap),
        (p.route = m.route),
        (r = p).context || (r.context = Object.create(null)),
        (a = p).refreshListeners || (a.refreshListeners = Object.create(null)),
        (p.Layout = c.ZP),
        (m.title = "About"),
        (p.context["/"] = {
          Content: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { wrapper: t } = Object.assign({}, (0, d.ah)(), e.components);
            return t
              ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(h, { ...e }) })
              : h(e);
          },
          pageOpts: m,
          themeConfig: s.Z,
        });
    },
  },
  function (e) {
    e.O(0, [509, 774, 888, 179], function () {
      return e((e.s = 5365));
    }),
      (_N_E = e.O());
  },
]);
