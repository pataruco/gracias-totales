!(function(e) {
  const t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    const o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
      const r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && typeof e !== 'string')
      )
        for (const o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o),
          );
      return r;
    }),
    (n.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function(e, t) {
    document.body.appendChild(
      (() => {
        const e = document.createElement('div');
        return (e.innerHTML = 'Hello'), e;
      })(),
    );
  },
]);
