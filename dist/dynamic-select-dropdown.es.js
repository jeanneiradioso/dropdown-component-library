import * as R from "react";
import re, { useRef as B, useCallback as le, useEffect as q, useState as X, useMemo as J, useLayoutEffect as ln, createContext as ge, useContext as oe, forwardRef as To, Fragment as Fe, isValidElement as Po, cloneElement as Co, createElement as Fo, useId as Se, useReducer as sr, useSyncExternalStore as Oo, createRef as Dn } from "react";
import * as et from "react-dom";
import { createPortal as Ao, flushSync as Je } from "react-dom";
var Gt = { exports: {} }, Ge = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Io() {
  if (kn)
    return Ge;
  kn = 1;
  var e = re, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, d) {
    var c, m = {}, p = null, f = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (f = l.ref);
    for (c in l)
      r.call(l, c) && !i.hasOwnProperty(c) && (m[c] = l[c]);
    if (s && s.defaultProps)
      for (c in l = s.defaultProps, l)
        m[c] === void 0 && (m[c] = l[c]);
    return { $$typeof: t, type: s, key: p, ref: f, props: m, _owner: o.current };
  }
  return Ge.Fragment = n, Ge.jsx = a, Ge.jsxs = a, Ge;
}
var qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Mo() {
  return _n || (_n = 1, process.env.NODE_ENV !== "production" && function() {
    var e = re, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), v = Symbol.iterator, g = "@@iterator";
    function y(u) {
      if (u === null || typeof u != "object")
        return null;
      var h = v && u[v] || u[g];
      return typeof h == "function" ? h : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(u) {
      {
        for (var h = arguments.length, E = new Array(h > 1 ? h - 1 : 0), P = 1; P < h; P++)
          E[P - 1] = arguments[P];
        x("error", u, E);
      }
    }
    function x(u, h, E) {
      {
        var P = w.ReactDebugCurrentFrame, k = P.getStackAddendum();
        k !== "" && (h += "%s", E = E.concat([k]));
        var N = E.map(function(I) {
          return String(I);
        });
        N.unshift("Warning: " + h), Function.prototype.apply.call(console[u], console, N);
      }
    }
    var S = !1, C = !1, M = !1, $ = !1, F = !1, O;
    O = Symbol.for("react.module.reference");
    function L(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === r || u === i || F || u === o || u === d || u === c || $ || u === f || S || C || M || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === m || u.$$typeof === a || u.$$typeof === s || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === O || u.getModuleId !== void 0));
    }
    function V(u, h, E) {
      var P = u.displayName;
      if (P)
        return P;
      var k = h.displayName || h.name || "";
      return k !== "" ? E + "(" + k + ")" : E;
    }
    function Q(u) {
      return u.displayName || "Context";
    }
    function H(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var h = u;
            return Q(h) + ".Consumer";
          case a:
            var E = u;
            return Q(E._context) + ".Provider";
          case l:
            return V(u, u.render, "ForwardRef");
          case m:
            var P = u.displayName || null;
            return P !== null ? P : H(u.type) || "Memo";
          case p: {
            var k = u, N = k._payload, I = k._init;
            try {
              return H(I(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, T = 0, Z, D, U, _, me, Ue, Le;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function Qr() {
      {
        if (T === 0) {
          Z = console.log, D = console.info, U = console.warn, _ = console.error, me = console.group, Ue = console.groupCollapsed, Le = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        T++;
      }
    }
    function Zr() {
      {
        if (T--, T === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, u, {
              value: Z
            }),
            info: j({}, u, {
              value: D
            }),
            warn: j({}, u, {
              value: U
            }),
            error: j({}, u, {
              value: _
            }),
            group: j({}, u, {
              value: me
            }),
            groupCollapsed: j({}, u, {
              value: Ue
            }),
            groupEnd: j({}, u, {
              value: Le
            })
          });
        }
        T < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ot = w.ReactCurrentDispatcher, At;
    function ct(u, h, E) {
      {
        if (At === void 0)
          try {
            throw Error();
          } catch (k) {
            var P = k.stack.trim().match(/\n( *(at )?)/);
            At = P && P[1] || "";
          }
        return `
` + At + u;
      }
    }
    var It = !1, ft;
    {
      var eo = typeof WeakMap == "function" ? WeakMap : Map;
      ft = new eo();
    }
    function En(u, h) {
      if (!u || It)
        return "";
      {
        var E = ft.get(u);
        if (E !== void 0)
          return E;
      }
      var P;
      It = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Ot.current, Ot.current = null, Qr();
      try {
        if (h) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ae) {
              P = ae;
            }
            Reflect.construct(u, [], I);
          } else {
            try {
              I.call();
            } catch (ae) {
              P = ae;
            }
            u.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            P = ae;
          }
          u();
        }
      } catch (ae) {
        if (ae && P && typeof ae.stack == "string") {
          for (var A = ae.stack.split(`
`), ie = P.stack.split(`
`), K = A.length - 1, z = ie.length - 1; K >= 1 && z >= 0 && A[K] !== ie[z]; )
            z--;
          for (; K >= 1 && z >= 0; K--, z--)
            if (A[K] !== ie[z]) {
              if (K !== 1 || z !== 1)
                do
                  if (K--, z--, z < 0 || A[K] !== ie[z]) {
                    var de = `
` + A[K].replace(" at new ", " at ");
                    return u.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", u.displayName)), typeof u == "function" && ft.set(u, de), de;
                  }
                while (K >= 1 && z >= 0);
              break;
            }
        }
      } finally {
        It = !1, Ot.current = N, Zr(), Error.prepareStackTrace = k;
      }
      var ke = u ? u.displayName || u.name : "", Te = ke ? ct(ke) : "";
      return typeof u == "function" && ft.set(u, Te), Te;
    }
    function to(u, h, E) {
      return En(u, !1);
    }
    function no(u) {
      var h = u.prototype;
      return !!(h && h.isReactComponent);
    }
    function dt(u, h, E) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return En(u, no(u));
      if (typeof u == "string")
        return ct(u);
      switch (u) {
        case d:
          return ct("Suspense");
        case c:
          return ct("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return to(u.render);
          case m:
            return dt(u.type, h, E);
          case p: {
            var P = u, k = P._payload, N = P._init;
            try {
              return dt(N(k), h, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Ke = Object.prototype.hasOwnProperty, xn = {}, Rn = w.ReactDebugCurrentFrame;
    function pt(u) {
      if (u) {
        var h = u._owner, E = dt(u.type, u._source, h ? h.type : null);
        Rn.setExtraStackFrame(E);
      } else
        Rn.setExtraStackFrame(null);
    }
    function ro(u, h, E, P, k) {
      {
        var N = Function.call.bind(Ke);
        for (var I in u)
          if (N(u, I)) {
            var A = void 0;
            try {
              if (typeof u[I] != "function") {
                var ie = Error((P || "React class") + ": " + E + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              A = u[I](h, I, P, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              A = K;
            }
            A && !(A instanceof Error) && (pt(k), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", E, I, typeof A), pt(null)), A instanceof Error && !(A.message in xn) && (xn[A.message] = !0, pt(k), b("Failed %s type: %s", E, A.message), pt(null));
          }
      }
    }
    var oo = Array.isArray;
    function Mt(u) {
      return oo(u);
    }
    function io(u) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, E = h && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return E;
      }
    }
    function lo(u) {
      try {
        return $n(u), !1;
      } catch {
        return !0;
      }
    }
    function $n(u) {
      return "" + u;
    }
    function Sn(u) {
      if (lo(u))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", io(u)), $n(u);
    }
    var ze = w.ReactCurrentOwner, ao = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Tn, Pn, Lt;
    Lt = {};
    function so(u) {
      if (Ke.call(u, "ref")) {
        var h = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function uo(u) {
      if (Ke.call(u, "key")) {
        var h = Object.getOwnPropertyDescriptor(u, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function co(u, h) {
      if (typeof u.ref == "string" && ze.current && h && ze.current.stateNode !== h) {
        var E = H(ze.current.type);
        Lt[E] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(ze.current.type), u.ref), Lt[E] = !0);
      }
    }
    function fo(u, h) {
      {
        var E = function() {
          Tn || (Tn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        E.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function po(u, h) {
      {
        var E = function() {
          Pn || (Pn = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        E.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var mo = function(u, h, E, P, k, N, I) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: h,
        ref: E,
        props: I,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function vo(u, h, E, P, k) {
      {
        var N, I = {}, A = null, ie = null;
        E !== void 0 && (Sn(E), A = "" + E), uo(h) && (Sn(h.key), A = "" + h.key), so(h) && (ie = h.ref, co(h, k));
        for (N in h)
          Ke.call(h, N) && !ao.hasOwnProperty(N) && (I[N] = h[N]);
        if (u && u.defaultProps) {
          var K = u.defaultProps;
          for (N in K)
            I[N] === void 0 && (I[N] = K[N]);
        }
        if (A || ie) {
          var z = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          A && fo(I, z), ie && po(I, z);
        }
        return mo(u, A, ie, k, P, ze.current, I);
      }
    }
    var Dt = w.ReactCurrentOwner, Cn = w.ReactDebugCurrentFrame;
    function De(u) {
      if (u) {
        var h = u._owner, E = dt(u.type, u._source, h ? h.type : null);
        Cn.setExtraStackFrame(E);
      } else
        Cn.setExtraStackFrame(null);
    }
    var kt;
    kt = !1;
    function _t(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function Fn() {
      {
        if (Dt.current) {
          var u = H(Dt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function go(u) {
      {
        if (u !== void 0) {
          var h = u.fileName.replace(/^.*[\\\/]/, ""), E = u.lineNumber;
          return `

Check your code at ` + h + ":" + E + ".";
        }
        return "";
      }
    }
    var On = {};
    function ho(u) {
      {
        var h = Fn();
        if (!h) {
          var E = typeof u == "string" ? u : u.displayName || u.name;
          E && (h = `

Check the top-level render call using <` + E + ">.");
        }
        return h;
      }
    }
    function An(u, h) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var E = ho(h);
        if (On[E])
          return;
        On[E] = !0;
        var P = "";
        u && u._owner && u._owner !== Dt.current && (P = " It was passed a child from " + H(u._owner.type) + "."), De(u), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, P), De(null);
      }
    }
    function In(u, h) {
      {
        if (typeof u != "object")
          return;
        if (Mt(u))
          for (var E = 0; E < u.length; E++) {
            var P = u[E];
            _t(P) && An(P, h);
          }
        else if (_t(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var k = y(u);
          if (typeof k == "function" && k !== u.entries)
            for (var N = k.call(u), I; !(I = N.next()).done; )
              _t(I.value) && An(I.value, h);
        }
      }
    }
    function bo(u) {
      {
        var h = u.type;
        if (h == null || typeof h == "string")
          return;
        var E;
        if (typeof h == "function")
          E = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === m))
          E = h.propTypes;
        else
          return;
        if (E) {
          var P = H(h);
          ro(E, u.props, "prop", P, u);
        } else if (h.PropTypes !== void 0 && !kt) {
          kt = !0;
          var k = H(h);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yo(u) {
      {
        for (var h = Object.keys(u.props), E = 0; E < h.length; E++) {
          var P = h[E];
          if (P !== "children" && P !== "key") {
            De(u), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), De(null);
            break;
          }
        }
        u.ref !== null && (De(u), b("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    var Mn = {};
    function Ln(u, h, E, P, k, N) {
      {
        var I = L(u);
        if (!I) {
          var A = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = go(k);
          ie ? A += ie : A += Fn();
          var K;
          u === null ? K = "null" : Mt(u) ? K = "array" : u !== void 0 && u.$$typeof === t ? (K = "<" + (H(u.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : K = typeof u, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, A);
        }
        var z = vo(u, h, E, k, N);
        if (z == null)
          return z;
        if (I) {
          var de = h.children;
          if (de !== void 0)
            if (P)
              if (Mt(de)) {
                for (var ke = 0; ke < de.length; ke++)
                  In(de[ke], u);
                Object.freeze && Object.freeze(de);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              In(de, u);
        }
        if (Ke.call(h, "key")) {
          var Te = H(u), ae = Object.keys(h).filter(function(So) {
            return So !== "key";
          }), Nt = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mn[Te + Nt]) {
            var $o = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nt, Te, $o, Te), Mn[Te + Nt] = !0;
          }
        }
        return u === r ? yo(z) : bo(z), z;
      }
    }
    function wo(u, h, E) {
      return Ln(u, h, E, !0);
    }
    function Eo(u, h, E) {
      return Ln(u, h, E, !1);
    }
    var xo = Eo, Ro = wo;
    qe.Fragment = r, qe.jsx = xo, qe.jsxs = Ro;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Gt.exports = Io() : Gt.exports = Mo();
var G = Gt.exports;
const ur = typeof document < "u" ? re.useLayoutEffect : () => {
};
function Lo(e) {
  const t = B(null);
  return ur(() => {
    t.current = e;
  }, [
    e
  ]), le((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const ot = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Pe = (e) => e && "window" in e && e.window === e ? e : ot(e).defaultView || window;
function Do(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function ko(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function cr(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const _o = cr(function() {
  return ko(/^Mac/i);
}), No = cr(function() {
  return Do(/Android/i);
});
function jo(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : No() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class Ho {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function fr(e) {
  let t = B({
    isFocused: !1,
    observer: null
  });
  ur(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Lo((r) => {
    e == null || e(r);
  });
  return le((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (a) => {
        t.current.isFocused = !1, o.disabled && n(new Ho("blur", a)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var a;
          (a = t.current.observer) === null || a === void 0 || a.disconnect();
          let s = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
function Wo(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = le((l) => {
    if (l.target === l.currentTarget)
      return r && r(l), o && o(!1), !0;
  }, [
    r,
    o
  ]), a = fr(i), s = le((l) => {
    const d = ot(l.target);
    l.target === l.currentTarget && d.activeElement === l.target && (n && n(l), o && o(!0), a(l));
  }, [
    o,
    n,
    a
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? s : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
let it = null, qt = /* @__PURE__ */ new Set(), Qe = /* @__PURE__ */ new Map(), Ae = !1, Xt = !1;
const Bo = {
  Tab: !0,
  Escape: !0
};
function an(e, t) {
  for (let n of qt)
    n(e, t);
}
function Vo(e) {
  return !(e.metaKey || !_o() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function ht(e) {
  Ae = !0, Vo(e) && (it = "keyboard", an("keyboard", e));
}
function pe(e) {
  it = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ae = !0, an("pointer", e));
}
function dr(e) {
  jo(e) && (Ae = !0, it = "virtual");
}
function pr(e) {
  e.target === window || e.target === document || (!Ae && !Xt && (it = "virtual", an("virtual", e)), Ae = !1, Xt = !1);
}
function mr() {
  Ae = !1, Xt = !0;
}
function Jt(e) {
  if (typeof window > "u" || Qe.get(Pe(e)))
    return;
  const t = Pe(e), n = ot(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ae = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", ht, !0), n.addEventListener("keyup", ht, !0), n.addEventListener("click", dr, !0), t.addEventListener("focus", pr, !0), t.addEventListener("blur", mr, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", pe, !0), n.addEventListener("pointermove", pe, !0), n.addEventListener("pointerup", pe, !0)) : (n.addEventListener("mousedown", pe, !0), n.addEventListener("mousemove", pe, !0), n.addEventListener("mouseup", pe, !0)), t.addEventListener("beforeunload", () => {
    vr(e);
  }, {
    once: !0
  }), Qe.set(t, {
    focus: r
  });
}
const vr = (e, t) => {
  const n = Pe(e), r = ot(e);
  t && r.removeEventListener("DOMContentLoaded", t), Qe.has(n) && (n.HTMLElement.prototype.focus = Qe.get(n).focus, r.removeEventListener("keydown", ht, !0), r.removeEventListener("keyup", ht, !0), r.removeEventListener("click", dr, !0), n.removeEventListener("focus", pr, !0), n.removeEventListener("blur", mr, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", pe, !0), r.removeEventListener("pointermove", pe, !0), r.removeEventListener("pointerup", pe, !0)) : (r.removeEventListener("mousedown", pe, !0), r.removeEventListener("mousemove", pe, !0), r.removeEventListener("mouseup", pe, !0)), Qe.delete(n));
};
function Uo(e) {
  const t = ot(e);
  let n;
  return t.readyState !== "loading" ? Jt(e) : (n = () => {
    Jt(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => vr(e, n);
}
typeof document < "u" && Uo();
function gr() {
  return it !== "pointer";
}
const Yo = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Ko(e, t, n) {
  var r;
  const o = typeof window < "u" ? Pe(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? Pe(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? Pe(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? Pe(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !Yo.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof a && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof s && !Bo[n.key]);
}
function zo(e, t, n) {
  Jt(), q(() => {
    let r = (o, i) => {
      Ko(!!(n != null && n.isTextInput), o, i) && e(gr());
    };
    return qt.add(r), () => {
      qt.delete(r);
    };
  }, t);
}
function Go(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = B({
    isFocusWithin: !1
  }), a = le((d) => {
    i.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (i.current.isFocusWithin = !1, n && n(d), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = fr(a), l = le((d) => {
    !i.current.isFocusWithin && document.activeElement === d.target && (r && r(d), o && o(!0), i.current.isFocusWithin = !0, s(d));
  }, [
    r,
    o,
    s
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: l,
      onBlur: a
    }
  };
}
let bt = !1, jt = 0;
function Qt() {
  bt = !0, setTimeout(() => {
    bt = !1;
  }, 50);
}
function Nn(e) {
  e.pointerType === "touch" && Qt();
}
function qo() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Nn) : document.addEventListener("touchend", Qt), jt++, () => {
      jt--, !(jt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Nn) : document.removeEventListener("touchend", Qt));
    };
}
function hr(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, a] = X(!1), s = B({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  q(qo, []);
  let { hoverProps: l, triggerHoverEnd: d } = J(() => {
    let c = (f, v) => {
      if (s.pointerType = v, o || v === "touch" || s.isHovered || !f.currentTarget.contains(f.target))
        return;
      s.isHovered = !0;
      let g = f.currentTarget;
      s.target = g, t && t({
        type: "hoverstart",
        target: g,
        pointerType: v
      }), n && n(!0), a(!0);
    }, m = (f, v) => {
      if (s.pointerType = "", s.target = null, v === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let g = f.currentTarget;
      r && r({
        type: "hoverend",
        target: g,
        pointerType: v
      }), n && n(!1), a(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (f) => {
      bt && f.pointerType === "mouse" || c(f, f.pointerType);
    }, p.onPointerLeave = (f) => {
      !o && f.currentTarget.contains(f.target) && m(f, f.pointerType);
    }) : (p.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (f) => {
      !s.ignoreEmulatedMouseEvents && !bt && c(f, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (f) => {
      !o && f.currentTarget.contains(f.target) && m(f, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: m
    };
  }, [
    t,
    n,
    r,
    o,
    s
  ]);
  return q(() => {
    o && d({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: l,
    isHovered: i
  };
}
function br(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = B({
    isFocused: !1,
    isFocusVisible: t || gr()
  }), [i, a] = X(!1), [s, l] = X(() => o.current.isFocused && o.current.isFocusVisible), d = le(() => l(o.current.isFocused && o.current.isFocusVisible), []), c = le((f) => {
    o.current.isFocused = f, a(f), d();
  }, [
    d
  ]);
  zo((f) => {
    o.current.isFocusVisible = f, d();
  }, [], {
    isTextInput: n
  });
  let { focusProps: m } = Wo({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: p } = Go({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? p : m
  };
}
var Xo = Object.defineProperty, Jo = (e, t, n) => t in e ? Xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ht = (e, t, n) => (Jo(e, typeof t != "symbol" ? t + "" : t, n), n);
let Qo = class {
  constructor() {
    Ht(this, "current", this.detect()), Ht(this, "handoffState", "pending"), Ht(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Oe = new Qo();
function He(e) {
  return Oe.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function yr(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function be() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return yr(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = be();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let o of e.splice(r, 1))
          o();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
function Rt() {
  let [e] = X(be);
  return q(() => () => e.dispose(), [e]), e;
}
let Y = (e, t) => {
  Oe.isServer ? q(e, t) : ln(e, t);
};
function lt(e) {
  let t = B(e);
  return Y(() => {
    t.current = e;
  }, [e]), t;
}
let W = function(e) {
  let t = lt(e);
  return re.useCallback((...n) => t.current(...n), [t]);
};
function Zo(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function ei(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function ti({ disabled: e = !1 } = {}) {
  let t = B(null), [n, r] = X(!1), o = Rt(), i = W(() => {
    t.current = null, r(!1), o.dispose();
  }), a = W((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let l = He(s.currentTarget);
        o.addEventListener(l, "pointerup", i, !1), o.addEventListener(l, "pointermove", (d) => {
          if (t.current) {
            let c = Zo(d);
            r(ei(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(l, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: a, onPointerUp: i, onClick: i } };
}
let ni = ge(void 0);
function sn() {
  return oe(ni);
}
function jn(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function at(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, at), r;
}
var Zt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Zt || {}), ri = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ri || {});
function ce({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: a, mergeRefs: s }) {
  s = s ?? oi;
  let l = wr(t, e);
  if (i)
    return mt(l, n, r, a, s);
  let d = o ?? 0;
  if (d & 2) {
    let { static: c = !1, ...m } = l;
    if (c)
      return mt(m, n, r, a, s);
  }
  if (d & 1) {
    let { unmount: c = !0, ...m } = l;
    return at(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return mt({ ...m, hidden: !0, style: { display: "none" } }, n, r, a, s);
    } });
  }
  return mt(l, n, r, a, s);
}
function mt(e, t = {}, n, r, o) {
  let { as: i = n, children: a, refName: s = "ref", ...l } = Wt(e, ["unmount", "static"]), d = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof a == "function" ? a(t) : a;
  "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(t)), l["aria-labelledby"] && l["aria-labelledby"] === l.id && (l["aria-labelledby"] = void 0);
  let m = {};
  if (t) {
    let p = !1, f = [];
    for (let [v, g] of Object.entries(t))
      typeof g == "boolean" && (p = !0), g === !0 && f.push(v.replace(/([A-Z])/g, (y) => `-${y.toLowerCase()}`));
    if (p) {
      m["data-headlessui-state"] = f.join(" ");
      for (let v of f)
        m[`data-${v}`] = "";
    }
  }
  if (i === Fe && (Object.keys(_e(l)).length > 0 || Object.keys(_e(m)).length > 0))
    if (!Po(c) || Array.isArray(c) && c.length > 1) {
      if (Object.keys(_e(l)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(_e(l)).concat(Object.keys(_e(m))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
    } else {
      let p = c.props, f = p == null ? void 0 : p.className, v = typeof f == "function" ? (...w) => jn(f(...w), l.className) : jn(f, l.className), g = v ? { className: v } : {}, y = wr(c.props, _e(Wt(l, ["ref"])));
      for (let w in m)
        w in y && delete m[w];
      return Co(c, Object.assign({}, y, m, d, { ref: o(c.ref, d.ref) }, g));
    }
  return Fo(i, Object.assign({}, Wt(l, ["ref"]), i !== Fe && d, i !== Fe && m), c);
}
function oi(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e)
      n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function wr(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    for (let r in n)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
        var i;
        return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
      }]);
  for (let r in n)
    Object.assign(t, { [r](o, ...i) {
      let a = n[r];
      for (let s of a) {
        if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented)
          return;
        s(o, ...i);
      }
    } });
  return t;
}
function un(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n)
    Object.assign(t, { [r](...o) {
      let i = n[r];
      for (let a of i)
        a == null || a(...o);
    } });
  return t;
}
function fe(e) {
  var t;
  return Object.assign(To(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function _e(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Wt(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
let ii = ge(void 0);
function Er() {
  return oe(ii);
}
function li(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && ai(n) ? !1 : r;
}
function ai(e) {
  if (!e)
    return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let xr = Symbol();
function si(e, t = !0) {
  return Object.assign(e, { [xr]: t });
}
function ye(...e) {
  let t = B(e);
  q(() => {
    t.current = e;
  }, [e]);
  let n = W((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[xr])) ? void 0 : n;
}
let $t = ge(null);
$t.displayName = "DescriptionContext";
function Rr() {
  let e = oe($t);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Rr), t;
  }
  return e;
}
function ui() {
  var e, t;
  return (t = (e = oe($t)) == null ? void 0 : e.value) != null ? t : void 0;
}
function ci() {
  let [e, t] = X([]);
  return [e.length > 0 ? e.join(" ") : void 0, J(() => function(n) {
    let r = W((i) => (t((a) => [...a, i]), () => t((a) => {
      let s = a.slice(), l = s.indexOf(i);
      return l !== -1 && s.splice(l, 1), s;
    }))), o = J(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return re.createElement($t.Provider, { value: o }, n.children);
  }, [t])];
}
let fi = "p";
function di(e, t) {
  let n = Se(), r = sn(), { id: o = `headlessui-description-${n}`, ...i } = e, a = Rr(), s = ye(t);
  Y(() => a.register(o), [o, a.register]);
  let l = r || !1, d = J(() => ({ ...a.slot, disabled: l }), [a.slot, l]), c = { ref: s, ...a.props, id: o };
  return ce({ ourProps: c, theirProps: i, slot: d, defaultTag: fi, name: a.name || "Description" });
}
let pi = fe(di);
Object.assign(pi, {});
var ee = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ee || {});
let St = ge(null);
St.displayName = "LabelContext";
function cn() {
  let e = oe(St);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, cn), t;
  }
  return e;
}
function $r(e) {
  var t, n, r;
  let o = (n = (t = oe(St)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Sr({ inherit: e = !1 } = {}) {
  let t = $r(), [n, r] = X([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, J(() => function(i) {
    let a = W((l) => (r((d) => [...d, l]), () => r((d) => {
      let c = d.slice(), m = c.indexOf(l);
      return m !== -1 && c.splice(m, 1), c;
    }))), s = J(() => ({ register: a, slot: i.slot, name: i.name, props: i.props, value: i.value }), [a, i.slot, i.name, i.props, i.value]);
    return re.createElement(St.Provider, { value: s }, i.children);
  }, [r])];
}
let mi = "label";
function vi(e, t) {
  var n;
  let r = Se(), o = cn(), i = Er(), a = sn(), { id: s = `headlessui-label-${r}`, htmlFor: l = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: d = !1, ...c } = e, m = ye(t);
  Y(() => o.register(s), [s, o.register]);
  let p = W((y) => {
    let w = y.currentTarget;
    if (w instanceof HTMLLabelElement && y.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(y), w instanceof HTMLLabelElement) {
      let b = document.getElementById(w.htmlFor);
      if (b) {
        let x = b.getAttribute("disabled");
        if (x === "true" || x === "")
          return;
        let S = b.getAttribute("aria-disabled");
        if (S === "true" || S === "")
          return;
        (b instanceof HTMLInputElement && (b.type === "radio" || b.type === "checkbox") || b.role === "radio" || b.role === "checkbox" || b.role === "switch") && b.click(), b.focus({ preventScroll: !0 });
      }
    }
  }), f = a || !1, v = J(() => ({ ...o.slot, disabled: f }), [o.slot, f]), g = { ref: m, ...o.props, id: s, htmlFor: l, onClick: p };
  return d && ("onClick" in g && (delete g.htmlFor, delete g.onClick), "onClick" in c && delete c.onClick), ce({ ourProps: g, theirProps: c, slot: v, defaultTag: l ? mi : "div", name: o.name || "Label" });
}
let gi = fe(vi);
Object.assign(gi, {});
function hi(e) {
  if (e === null)
    return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function bi(e, t = !1) {
  let n = e === null ? null : "current" in e ? e.current : e, [r, o] = sr(() => ({}), {}), i = J(() => hi(n), [n, r]);
  return Y(() => {
    if (!n)
      return;
    let a = new ResizeObserver(o);
    return a.observe(n), () => {
      a.disconnect();
    };
  }, [n]), t ? { width: `${i.width}px`, height: `${i.height}px` } : i;
}
let yi = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function Tr(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let a = t[o].call(n, ...i);
    a && (n = a, r.forEach((s) => s()));
  } };
}
function Pr(e) {
  return Oo(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let wi = new yi(() => Tr(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1)
    return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function fn(e, t) {
  let n = wi.get(t), r = Se(), o = Pr(n);
  if (Y(() => {
    if (e)
      return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e)
    return !1;
  let i = o.indexOf(r), a = o.length;
  return i === -1 && (i = a, a += 1), i === a - 1;
}
let en = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map();
function Hn(e) {
  var t;
  let n = (t = Ze.get(e)) != null ? t : 0;
  return Ze.set(e, n + 1), n !== 0 ? () => Wn(e) : (en.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Wn(e));
}
function Wn(e) {
  var t;
  let n = (t = Ze.get(e)) != null ? t : 1;
  if (n === 1 ? Ze.delete(e) : Ze.set(e, n - 1), n !== 1)
    return;
  let r = en.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, en.delete(e));
}
function Ei(e, { allowed: t, disallowed: n } = {}) {
  let r = fn(e, "inert-others");
  Y(() => {
    var o, i;
    if (!r)
      return;
    let a = be();
    for (let l of (o = n == null ? void 0 : n()) != null ? o : [])
      l && a.add(Hn(l));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let l of s) {
      if (!l)
        continue;
      let d = He(l);
      if (!d)
        continue;
      let c = l.parentElement;
      for (; c && c !== d.body; ) {
        for (let m of c.children)
          s.some((p) => m.contains(p)) || a.add(Hn(m));
        c = c.parentElement;
      }
    }
    return a.dispose;
  }, [r, t, n]);
}
function xi(e, t, n) {
  let r = lt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  q(() => {
    if (!e)
      return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o)
      return;
    let i = be();
    if (typeof ResizeObserver < "u") {
      let a = new ResizeObserver(() => r.current(o));
      a.observe(o), i.add(() => a.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let a = new IntersectionObserver(() => r.current(o));
      a.observe(o), i.add(() => a.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let tn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Ri = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var nn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(nn || {}), $i = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))($i || {}), Si = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Si || {});
function Cr(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(tn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Ti(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ri)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var dn = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(dn || {});
function pn(e, t = 0) {
  var n;
  return e === ((n = He(e)) == null ? void 0 : n.body) ? !1 : at(t, { 0() {
    return e.matches(tn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(tn))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function Fr(e) {
  let t = He(e);
  be().nextFrame(() => {
    t && !pn(t.activeElement, 0) && Ci(e);
  });
}
var Pi = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Pi || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Ci(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Fi = ["textarea", "input"].join(",");
function Oi(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Fi)) != null ? n : !1;
}
function Or(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null)
      return 0;
    let a = o.compareDocumentPosition(i);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ai(e, t) {
  return Ii(Cr(), t, { relativeTo: e });
}
function Ii(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, a = Array.isArray(e) ? n ? Or(e) : e : t & 64 ? Ti(e) : Cr(e);
  o.length > 0 && a.length > 1 && (a = a.filter((f) => !o.some((v) => v != null && "current" in v ? (v == null ? void 0 : v.current) === f : v === f))), r = r ?? i.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, a.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(r)) + 1;
    if (t & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, c = 0, m = a.length, p;
  do {
    if (c >= m || c + m <= 0)
      return 0;
    let f = l + c;
    if (t & 16)
      f = (f + m) % m;
    else {
      if (f < 0)
        return 3;
      if (f >= m)
        return 1;
    }
    p = a[f], p == null || p.focus(d), c += s;
  } while (p !== i.activeElement);
  return t & 6 && Oi(p) && p.select(), 2;
}
function Ar() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Mi() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Li() {
  return Ar() || Mi();
}
function Xe(e, t, n, r) {
  let o = lt(n);
  q(() => {
    if (!e)
      return;
    function i(a) {
      o.current(a);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Di(e, t, n, r) {
  let o = lt(n);
  q(() => {
    if (!e)
      return;
    function i(a) {
      o.current(a);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const Bn = 30;
function ki(e, t, n) {
  let r = fn(e, "outside-click"), o = lt(n), i = le(function(l, d) {
    if (l.defaultPrevented)
      return;
    let c = d(l);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected)
      return;
    let m = function p(f) {
      return typeof f == "function" ? p(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let p of m) {
      if (p === null)
        continue;
      let f = p instanceof HTMLElement ? p : p.current;
      if (f != null && f.contains(c) || l.composed && l.composedPath().includes(f))
        return;
    }
    return !pn(c, dn.Loose) && c.tabIndex !== -1 && l.preventDefault(), o.current(l, c);
  }, [o]), a = B(null);
  Xe(r, "pointerdown", (l) => {
    var d, c;
    a.current = ((c = (d = l.composedPath) == null ? void 0 : d.call(l)) == null ? void 0 : c[0]) || l.target;
  }, !0), Xe(r, "mousedown", (l) => {
    var d, c;
    a.current = ((c = (d = l.composedPath) == null ? void 0 : d.call(l)) == null ? void 0 : c[0]) || l.target;
  }, !0), Xe(r, "click", (l) => {
    Li() || a.current && (i(l, () => a.current), a.current = null);
  }, !0);
  let s = B({ x: 0, y: 0 });
  Xe(r, "touchstart", (l) => {
    s.current.x = l.touches[0].clientX, s.current.y = l.touches[0].clientY;
  }, !0), Xe(r, "touchend", (l) => {
    let d = { x: l.changedTouches[0].clientX, y: l.changedTouches[0].clientY };
    if (!(Math.abs(d.x - s.current.x) >= Bn || Math.abs(d.y - s.current.y) >= Bn))
      return i(l, () => l.target instanceof HTMLElement ? l.target : null);
  }, !0), Di(r, "blur", (l) => i(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function mn(...e) {
  return J(() => He(...e), [...e]);
}
function Vn(e) {
  var t;
  if (e.type)
    return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function _i(e, t) {
  let [n, r] = X(() => Vn(e));
  return Y(() => {
    r(Vn(e));
  }, [e.type, e.as]), Y(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
function Ni() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - o);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function ji() {
  return Ar() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = be();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, a = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement)
          try {
            let l = s.target.closest("a");
            if (!l)
              return;
            let { hash: d } = new URL(l.href), c = e.querySelector(d);
            c && !r(c) && (a = c);
          } catch {
          }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement)
          if (r(s.target)) {
            let l = s.target;
            for (; l.parentElement && r(l.parentElement); )
              l = l.parentElement;
            t.style(l, "overscrollBehavior", "contain");
          } else
            t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT")
            return;
          if (r(s.target)) {
            let l = s.target;
            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); )
              l = l.parentElement;
            l.dataset.headlessuiPortal === "" && s.preventDefault();
          } else
            s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let l = (s = window.scrollY) != null ? s : window.pageYOffset;
        i !== l && window.scrollTo(0, i), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
      });
    });
  } } : {};
}
function Hi() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Wi(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let Ce = Tr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: be(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Wi(n) }, o = [ji(), Ni(), Hi()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Ce.subscribe(() => {
  let e = Ce.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Ce.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Ce.dispatch("TEARDOWN", n);
  }
});
function Bi(e, t, n = () => ({ containers: [] })) {
  let r = Pr(Ce), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return Y(() => {
    if (!(!t || !e))
      return Ce.dispatch("PUSH", t, n), () => Ce.dispatch("POP", t, n);
  }, [e, t]), i;
}
function Vi(e, t, n = () => [document.body]) {
  let r = fn(e, "scroll-lock");
  Bi(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function Un(e) {
  return [e.screenX, e.screenY];
}
function Ui() {
  let e = B([-1, -1]);
  return { wasMoved(t) {
    let n = Un(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Un(t);
  } };
}
function Yi(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Ki(e = 0) {
  let [t, n] = X(e), r = le((l) => n(l), [t]), o = le((l) => n((d) => d | l), [t]), i = le((l) => (t & l) === l, [t]), a = le((l) => n((d) => d & ~l), [n]), s = le((l) => n((d) => d ^ l), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: a, toggleFlag: s };
}
var zi = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(zi || {});
function Gi(e) {
  let t = {};
  for (let n in e)
    e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function qi(e, t, n, r) {
  let [o, i] = X(n), { hasFlag: a, addFlag: s, removeFlag: l } = Ki(e && o ? 3 : 0), d = B(!1), c = B(!1), m = Rt();
  return Y(function p() {
    var f;
    if (!e)
      return;
    n && i(!0);
    let v = t.current;
    return v ? ((f = r == null ? void 0 : r.start) == null || f.call(r, n), Xi(v, { inFlight: d, prepare() {
      c.current ? c.current = !1 : c.current = d.current, d.current = !0, !c.current && (n ? (s(3), l(4)) : (s(4), l(2)));
    }, run() {
      c.current ? n ? (l(3), s(4)) : (l(4), s(3)) : n ? l(1) : s(1);
    }, done() {
      var g;
      c.current && typeof v.getAnimations == "function" && v.getAnimations().length > 0 || (d.current = !1, l(7), n || i(!1), (g = r == null ? void 0 : r.end) == null || g.call(r, n));
    } })) : n ? (s(3), m.nextFrame(() => p())) : void 0;
  }, [e, n, t, m]), e ? [o, { closed: a(1), enter: a(2), leave: a(4), transition: a(2) || a(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function Xi(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = be();
  return Qi(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    i.add(Ji(e, r)), n();
  }), i.dispose;
}
function Ji(e, t) {
  let n = Yi(t), r = be();
  if (!e)
    return r.dispose;
  let { transitionDuration: o, transitionDelay: i } = getComputedStyle(e), [a, s] = [o, i].map((d) => {
    let [c = 0] = d.split(",").filter(Boolean).map((m) => m.includes("ms") ? parseFloat(m) : parseFloat(m) * 1e3).sort((m, p) => p - m);
    return c;
  }), l = a + s;
  if (l !== 0) {
    let d = r.group((c) => {
      let m = c.setTimeout(() => {
        n(), c.dispose();
      }, l);
      c.addEventListener(e, "transitionrun", (p) => {
        p.target === p.currentTarget && (m(), c.addEventListener(e, "transitioncancel", (f) => {
          f.target === f.currentTarget && (n(), d());
        }));
      });
    });
    r.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (n(), r.dispose());
    });
  } else
    n();
  return r.dispose;
}
function Qi(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function Zi(e, { container: t, accept: n, walk: r }) {
  let o = B(n), i = B(r);
  q(() => {
    o.current = n, i.current = r;
  }, [n, r]), Y(() => {
    if (!t || !e)
      return;
    let a = He(t);
    if (!a)
      return;
    let s = o.current, l = i.current, d = Object.assign((m) => s(m), { acceptNode: s }), c = a.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, d, !1);
    for (; c.nextNode(); )
      l(c.currentNode);
  }, [t, e, o, i]);
}
function We(e) {
  return Ir(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function we(e) {
  var t;
  return (t = (Ir(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ir(e) {
  return e instanceof Node || e instanceof ue(e).Node;
}
function ne(e) {
  return e instanceof Element || e instanceof ue(e).Element;
}
function he(e) {
  return e instanceof HTMLElement || e instanceof ue(e).HTMLElement;
}
function Yn(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
function st(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ve(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function el(e) {
  return ["table", "td", "th"].includes(We(e));
}
function Tt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function vn(e) {
  const t = gn(), n = ne(e) ? ve(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function tl(e) {
  let t = xe(e);
  for (; he(t) && !je(t); ) {
    if (vn(t))
      return t;
    if (Tt(t))
      return null;
    t = xe(t);
  }
  return null;
}
function gn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function je(e) {
  return ["html", "body", "#document"].includes(We(e));
}
function ve(e) {
  return ue(e).getComputedStyle(e);
}
function Pt(e) {
  return ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function xe(e) {
  if (We(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yn(e) && e.host || // Fallback.
    we(e)
  );
  return Yn(t) ? t.host : t;
}
function Mr(e) {
  const t = xe(e);
  return je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : he(t) && st(t) ? t : Mr(t);
}
function tt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Mr(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = ue(o);
  return i ? t.concat(a, a.visualViewport || [], st(o) ? o : [], a.frameElement && n ? tt(a.frameElement) : []) : t.concat(o, tt(o, [], n));
}
function nl() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Ee = Math.min, se = Math.max, yt = Math.round, vt = Math.floor, Re = (e) => ({
  x: e,
  y: e
}), rl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ol = {
  start: "end",
  end: "start"
};
function Kn(e, t, n) {
  return se(e, Ee(t, n));
}
function Be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $e(e) {
  return e.split("-")[0];
}
function ut(e) {
  return e.split("-")[1];
}
function Lr(e) {
  return e === "x" ? "y" : "x";
}
function Dr(e) {
  return e === "y" ? "height" : "width";
}
function Ie(e) {
  return ["top", "bottom"].includes($e(e)) ? "y" : "x";
}
function kr(e) {
  return Lr(Ie(e));
}
function il(e, t, n) {
  n === void 0 && (n = !1);
  const r = ut(e), o = kr(e), i = Dr(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = wt(a)), [a, wt(a)];
}
function ll(e) {
  const t = wt(e);
  return [rn(e), t, rn(t)];
}
function rn(e) {
  return e.replace(/start|end/g, (t) => ol[t]);
}
function al(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function sl(e, t, n, r) {
  const o = ut(e);
  let i = al($e(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(rn)))), i;
}
function wt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rl[t]);
}
function ul(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function cl(e) {
  return typeof e != "number" ? ul(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Et(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function zn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ie(t), a = kr(t), s = Dr(a), l = $e(t), d = i === "y", c = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (ut(t)) {
    case "start":
      f[a] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      f[a] += p * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const fl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: m
  } = zn(d, r, l), p = r, f = {}, v = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: y,
      fn: w
    } = s[g], {
      x: b,
      y: x,
      data: S,
      reset: C
    } = await w({
      x: c,
      y: m,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: f,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = b ?? c, m = x ?? m, f = {
      ...f,
      [y]: {
        ...f[y],
        ...S
      }
    }, C && v <= 50 && (v++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: m
    } = zn(d, p, l)), g = -1);
  }
  return {
    x: c,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: f
  };
};
async function Ct(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = Be(t, e), v = cl(f), y = s[p ? m === "floating" ? "reference" : "floating" : m], w = Et(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: l
  })), b = m === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Et(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + v.top) / S.y,
    bottom: (C.bottom - w.bottom + v.bottom) / S.y,
    left: (w.left - C.left + v.left) / S.x,
    right: (C.right - w.right + v.right) / S.x
  };
}
const dl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: m = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...y
      } = Be(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = $e(o), b = Ie(s), x = $e(s) === s, S = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (x || !g ? [wt(s)] : ll(s)), M = v !== "none";
      !p && M && C.push(...sl(s, g, v, S));
      const $ = [s, ...C], F = await Ct(t, y), O = [];
      let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && O.push(F[w]), m) {
        const j = il(o, a, S);
        O.push(F[j[0]], F[j[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: O
      }], !O.every((j) => j <= 0)) {
        var V, Q;
        const j = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, T = $[j];
        if (T)
          return {
            data: {
              index: j,
              overflows: L
            },
            reset: {
              placement: T
            }
          };
        let Z = (Q = L.filter((D) => D.overflows[0] <= 0).sort((D, U) => D.overflows[1] - U.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!Z)
          switch (f) {
            case "bestFit": {
              var H;
              const D = (H = L.filter((U) => {
                if (M) {
                  const _ = Ie(U.placement);
                  return _ === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((_) => _ > 0).reduce((_, me) => _ + me, 0)]).sort((U, _) => U[1] - _[1])[0]) == null ? void 0 : H[0];
              D && (Z = D);
              break;
            }
            case "initialPlacement":
              Z = s;
              break;
          }
        if (o !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
async function pl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = $e(n), s = ut(n), l = Ie(n) === "y", d = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, m = Be(t, e);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: v
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return s && typeof v == "number" && (f = s === "end" ? v * -1 : v), l ? {
    x: f * c,
    y: p * d
  } : {
    x: p * d,
    y: f * c
  };
}
const ml = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, l = await pl(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, vl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (y) => {
            let {
              x: w,
              y: b
            } = y;
            return {
              x: w,
              y: b
            };
          }
        },
        ...l
      } = Be(e, t), d = {
        x: n,
        y: r
      }, c = await Ct(t, l), m = Ie($e(o)), p = Lr(m);
      let f = d[p], v = d[m];
      if (i) {
        const y = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = f + c[y], x = f - c[w];
        f = Kn(b, f, x);
      }
      if (a) {
        const y = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = v + c[y], x = v - c[w];
        v = Kn(b, v, x);
      }
      const g = s.fn({
        ...t,
        [p]: f,
        [m]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, gl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: a = () => {
        },
        ...s
      } = Be(e, t), l = await Ct(t, s), d = $e(n), c = ut(n), m = Ie(n) === "y", {
        width: p,
        height: f
      } = r.floating;
      let v, g;
      d === "top" || d === "bottom" ? (v = d, g = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = d, v = c === "end" ? "top" : "bottom");
      const y = f - l.top - l.bottom, w = p - l.left - l.right, b = Ee(f - l[v], y), x = Ee(p - l[g], w), S = !t.middlewareData.shift;
      let C = b, M = x;
      if (m ? M = c || S ? Ee(x, w) : w : C = c || S ? Ee(b, y) : y, S && !c) {
        const F = se(l.left, 0), O = se(l.right, 0), L = se(l.top, 0), V = se(l.bottom, 0);
        m ? M = p - 2 * (F !== 0 || O !== 0 ? F + O : se(l.left, l.right)) : C = f - 2 * (L !== 0 || V !== 0 ? L + V : se(l.top, l.bottom));
      }
      await a({
        ...t,
        availableWidth: M,
        availableHeight: C
      });
      const $ = await o.getDimensions(i.floating);
      return p !== $.width || f !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function _r(e) {
  const t = ve(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = he(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = yt(n) !== i || yt(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function hn(e) {
  return ne(e) ? e : e.contextElement;
}
function Ne(e) {
  const t = hn(e);
  if (!he(t))
    return Re(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = _r(t);
  let a = (i ? yt(n.width) : n.width) / r, s = (i ? yt(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const hl = /* @__PURE__ */ Re(0);
function Nr(e) {
  const t = ue(e);
  return !gn() || !t.visualViewport ? hl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ue(e) ? !1 : t;
}
function Me(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = hn(e);
  let a = Re(1);
  t && (r ? ne(r) && (a = Ne(r)) : a = Ne(e));
  const s = bl(i, n, r) ? Nr(i) : Re(0);
  let l = (o.left + s.x) / a.x, d = (o.top + s.y) / a.y, c = o.width / a.x, m = o.height / a.y;
  if (i) {
    const p = ue(i), f = r && ne(r) ? ue(r) : r;
    let v = p, g = v.frameElement;
    for (; g && r && f !== v; ) {
      const y = Ne(g), w = g.getBoundingClientRect(), b = ve(g), x = w.left + (g.clientLeft + parseFloat(b.paddingLeft)) * y.x, S = w.top + (g.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, d *= y.y, c *= y.x, m *= y.y, l += x, d += S, v = ue(g), g = v.frameElement;
    }
  }
  return Et({
    width: c,
    height: m,
    x: l,
    y: d
  });
}
function yl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = we(r), s = t ? Tt(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Re(1);
  const c = Re(0), m = he(r);
  if ((m || !m && !i) && ((We(r) !== "body" || st(a)) && (l = Pt(r)), he(r))) {
    const p = Me(r);
    d = Ne(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + c.x,
    y: n.y * d.y - l.scrollTop * d.y + c.y
  };
}
function wl(e) {
  return Array.from(e.getClientRects());
}
function jr(e) {
  return Me(we(e)).left + Pt(e).scrollLeft;
}
function El(e) {
  const t = we(e), n = Pt(e), r = e.ownerDocument.body, o = se(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = se(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + jr(e);
  const s = -n.scrollTop;
  return ve(r).direction === "rtl" && (a += se(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function xl(e, t) {
  const n = ue(e), r = we(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const d = gn();
    (!d || d && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Rl(e, t) {
  const n = Me(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = he(e) ? Ne(e) : Re(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, d = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: d
  };
}
function Gn(e, t, n) {
  let r;
  if (t === "viewport")
    r = xl(e, n);
  else if (t === "document")
    r = El(we(e));
  else if (ne(t))
    r = Rl(t, n);
  else {
    const o = Nr(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Et(r);
}
function Hr(e, t) {
  const n = xe(e);
  return n === t || !ne(n) || je(n) ? !1 : ve(n).position === "fixed" || Hr(n, t);
}
function $l(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = tt(e, [], !1).filter((s) => ne(s) && We(s) !== "body"), o = null;
  const i = ve(e).position === "fixed";
  let a = i ? xe(e) : e;
  for (; ne(a) && !je(a); ) {
    const s = ve(a), l = vn(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || st(a) && !l && Hr(e, a)) ? r = r.filter((c) => c !== a) : o = s, a = xe(a);
  }
  return t.set(e, r), r;
}
function Sl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Tt(t) ? [] : $l(t, this._c) : [].concat(n), r], s = a[0], l = a.reduce((d, c) => {
    const m = Gn(t, c, o);
    return d.top = se(m.top, d.top), d.right = Ee(m.right, d.right), d.bottom = Ee(m.bottom, d.bottom), d.left = se(m.left, d.left), d;
  }, Gn(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Tl(e) {
  const {
    width: t,
    height: n
  } = _r(e);
  return {
    width: t,
    height: n
  };
}
function Pl(e, t, n) {
  const r = he(t), o = we(t), i = n === "fixed", a = Me(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Re(0);
  if (r || !r && !i)
    if ((We(t) !== "body" || st(o)) && (s = Pt(t)), r) {
      const m = Me(t, !0, i, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else
      o && (l.x = jr(o));
  const d = a.left + s.scrollLeft - l.x, c = a.top + s.scrollTop - l.y;
  return {
    x: d,
    y: c,
    width: a.width,
    height: a.height
  };
}
function Bt(e) {
  return ve(e).position === "static";
}
function qn(e, t) {
  return !he(e) || ve(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Wr(e, t) {
  const n = ue(e);
  if (Tt(e))
    return n;
  if (!he(e)) {
    let o = xe(e);
    for (; o && !je(o); ) {
      if (ne(o) && !Bt(o))
        return o;
      o = xe(o);
    }
    return n;
  }
  let r = qn(e, t);
  for (; r && el(r) && Bt(r); )
    r = qn(r, t);
  return r && je(r) && Bt(r) && !vn(r) ? n : r || tl(e) || n;
}
const Cl = async function(e) {
  const t = this.getOffsetParent || Wr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Pl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Fl(e) {
  return ve(e).direction === "rtl";
}
const Ol = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yl,
  getDocumentElement: we,
  getClippingRect: Sl,
  getOffsetParent: Wr,
  getElementRects: Cl,
  getClientRects: wl,
  getDimensions: Tl,
  getScale: Ne,
  isElement: ne,
  isRTL: Fl
};
function Al(e, t) {
  let n = null, r;
  const o = we(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const {
      left: d,
      top: c,
      width: m,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !m || !p)
      return;
    const f = vt(c), v = vt(o.clientWidth - (d + m)), g = vt(o.clientHeight - (c + p)), y = vt(d), b = {
      rootMargin: -f + "px " + -v + "px " + -g + "px " + -y + "px",
      threshold: se(0, Ee(1, l)) || 1
    };
    let x = !0;
    function S(C) {
      const M = C[0].intersectionRatio;
      if (M !== l) {
        if (!x)
          return a();
        M ? a(!1, M) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, b);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function Il(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = hn(e), c = o || i ? [...d ? tt(d) : [], ...tt(t)] : [];
  c.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const m = d && s ? Al(d, n) : null;
  let p = -1, f = null;
  a && (f = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = f) == null || x.observe(t);
    })), n();
  }), d && !l && f.observe(d), f.observe(t));
  let v, g = l ? Me(e) : null;
  l && y();
  function y() {
    const w = Me(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, v = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    c.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), m == null || m(), (w = f) == null || w.disconnect(), f = null, l && cancelAnimationFrame(v);
  };
}
const Vt = Ct, Ml = ml, Ll = vl, Dl = dl, kl = gl, _l = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ol,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return fl(e, t, {
    ...o,
    platform: i
  });
};
var gt = typeof document < "u" ? ln : q;
function xt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!xt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !xt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Br(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xn(e, t) {
  const n = Br(e);
  return Math.round(t * n) / n;
}
function Jn(e) {
  const t = R.useRef(e);
  return gt(() => {
    t.current = e;
  }), t;
}
function Nl(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: d
  } = e, [c, m] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = R.useState(r);
  xt(p, r) || f(r);
  const [v, g] = R.useState(null), [y, w] = R.useState(null), b = R.useCallback((D) => {
    D !== M.current && (M.current = D, g(D));
  }, []), x = R.useCallback((D) => {
    D !== $.current && ($.current = D, w(D));
  }, []), S = i || v, C = a || y, M = R.useRef(null), $ = R.useRef(null), F = R.useRef(c), O = l != null, L = Jn(l), V = Jn(o), Q = R.useCallback(() => {
    if (!M.current || !$.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: p
    };
    V.current && (D.platform = V.current), _l(M.current, $.current, D).then((U) => {
      const _ = {
        ...U,
        isPositioned: !0
      };
      H.current && !xt(F.current, _) && (F.current = _, et.flushSync(() => {
        m(_);
      }));
    });
  }, [p, t, n, V]);
  gt(() => {
    d === !1 && F.current.isPositioned && (F.current.isPositioned = !1, m((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [d]);
  const H = R.useRef(!1);
  gt(() => (H.current = !0, () => {
    H.current = !1;
  }), []), gt(() => {
    if (S && (M.current = S), C && ($.current = C), S && C) {
      if (L.current)
        return L.current(S, C, Q);
      Q();
    }
  }, [S, C, Q, L, O]);
  const j = R.useMemo(() => ({
    reference: M,
    floating: $,
    setReference: b,
    setFloating: x
  }), [b, x]), T = R.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), Z = R.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return D;
    const U = Xn(T.floating, c.x), _ = Xn(T.floating, c.y);
    return s ? {
      ...D,
      transform: "translate(" + U + "px, " + _ + "px)",
      ...Br(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: _
    };
  }, [n, s, T.floating, c.x, c.y]);
  return R.useMemo(() => ({
    ...c,
    update: Q,
    refs: j,
    elements: T,
    floatingStyles: Z
  }), [c, Q, j, T, Z]);
}
const Vr = (e, t) => ({
  ...Ml(e),
  options: [e, t]
}), jl = (e, t) => ({
  ...Ll(e),
  options: [e, t]
}), Hl = (e, t) => ({
  ...Dl(e),
  options: [e, t]
}), Wl = (e, t) => ({
  ...kl(e),
  options: [e, t]
}), Ur = {
  ...R
}, Bl = Ur.useInsertionEffect, Vl = Bl || ((e) => e());
function Yr(e) {
  const t = R.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Vl(() => {
    t.current = e;
  }), R.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var on = typeof document < "u" ? ln : q;
let Qn = !1, Ul = 0;
const Zn = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Ul++
);
function Yl() {
  const [e, t] = R.useState(() => Qn ? Zn() : void 0);
  return on(() => {
    e == null && t(Zn());
  }, []), R.useEffect(() => {
    Qn = !0;
  }, []), e;
}
const Kl = Ur.useId, zl = Kl || Yl;
let nt;
process.env.NODE_ENV !== "production" && (nt = /* @__PURE__ */ new Set());
function Gl() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = nt) != null && e.has(o))) {
    var i;
    (i = nt) == null || i.add(o), console.warn(o);
  }
}
function ql() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = nt) != null && e.has(o))) {
    var i;
    (i = nt) == null || i.add(o), console.error(o);
  }
}
function Xl() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const Jl = /* @__PURE__ */ R.createContext(null), Ql = /* @__PURE__ */ R.createContext(null), Zl = () => {
  var e;
  return ((e = R.useContext(Jl)) == null ? void 0 : e.id) || null;
}, ea = () => R.useContext(Ql);
function ta(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = zl(), i = R.useRef({}), [a] = R.useState(() => Xl()), s = Zl() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = r.reference;
    f && !ne(f) && ql("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, d] = R.useState(r.reference), c = Yr((f, v, g) => {
    i.current.openEvent = f ? v : void 0, a.emit("openchange", {
      open: f,
      event: v,
      reason: g,
      nested: s
    }), n == null || n(f, v, g);
  }), m = R.useMemo(() => ({
    setPositionReference: d
  }), []), p = R.useMemo(() => ({
    reference: l || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [l, r.reference, r.floating]);
  return R.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: p,
    events: a,
    floatingId: o,
    refs: m
  }), [t, c, p, a, o, m]);
}
function na(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = ta({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, a] = R.useState(null), [s, l] = R.useState(null), c = (o == null ? void 0 : o.reference) || i, m = R.useRef(null), p = ea();
  on(() => {
    c && (m.current = c);
  }, [c]);
  const f = Nl({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), v = R.useCallback((x) => {
    const S = ne(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      contextElement: x
    } : x;
    l(S), f.refs.setReference(S);
  }, [f.refs]), g = R.useCallback((x) => {
    (ne(x) || x === null) && (m.current = x, a(x)), (ne(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !ne(x)) && f.refs.setReference(x);
  }, [f.refs]), y = R.useMemo(() => ({
    ...f.refs,
    setReference: g,
    setPositionReference: v,
    domReference: m
  }), [f.refs, g, v]), w = R.useMemo(() => ({
    ...f.elements,
    domReference: c
  }), [f.elements, c]), b = R.useMemo(() => ({
    ...f,
    ...r,
    refs: y,
    elements: w,
    nodeId: t
  }), [f, y, w, t, r]);
  return on(() => {
    r.dataRef.current.floatingContext = b;
    const x = p == null ? void 0 : p.nodesRef.current.find((S) => S.id === t);
    x && (x.context = b);
  }), R.useMemo(() => ({
    ...f,
    context: b,
    refs: y,
    elements: w
  }), [f, y, w, b]);
}
const er = "active", tr = "selected";
function Ut(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [er]: a,
      [tr]: s,
      ...l
    } = e;
    i = l;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...i,
    ...t.map((a) => {
      const s = a ? a[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((a, s) => (s && Object.entries(s).forEach((l) => {
      let [d, c] = l;
      if (!(o && [er, tr].includes(d)))
        if (d.indexOf("on") === 0) {
          if (r.has(d) || r.set(d, []), typeof c == "function") {
            var m;
            (m = r.get(d)) == null || m.push(c), a[d] = function() {
              for (var p, f = arguments.length, v = new Array(f), g = 0; g < f; g++)
                v[g] = arguments[g];
              return (p = r.get(d)) == null ? void 0 : p.map((y) => y(...v)).find((y) => y !== void 0);
            };
          }
        } else
          a[d] = c;
    }), a), {})
  };
}
function ra(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = R.useCallback(
    (s) => Ut(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = R.useCallback(
    (s) => Ut(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), a = R.useCallback(
    (s) => Ut(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return R.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: a
  }), [o, i, a]);
}
function nr(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const oa = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: a = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: l = 0,
      scrollRef: d,
      ...c
    } = Be(e, t), {
      rects: m,
      elements: {
        floating: p
      }
    } = t, f = n.current[a];
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || Gl('`placement` side must be "bottom" when using the `inner`', "middleware.")), !f)
      return {};
    const v = {
      ...t,
      ...await Vr(-f.offsetTop - p.clientTop - m.reference.height / 2 - f.offsetHeight / 2 - i).fn(t)
    }, g = (d == null ? void 0 : d.current) || p, y = await Vt(nr(v, g.scrollHeight), c), w = await Vt(v, {
      ...c,
      elementContext: "reference"
    }), b = Math.max(0, y.top), x = v.y + b, S = Math.max(0, g.scrollHeight - b - Math.max(0, y.bottom));
    return g.style.maxHeight = S + "px", g.scrollTop = b, o && (g.offsetHeight < f.offsetHeight * Math.min(s, n.current.length - 1) - 1 || w.top >= -l || w.bottom >= -l ? et.flushSync(() => o(!0)) : et.flushSync(() => o(!1))), r && (r.current = await Vt(nr({
      ...v,
      y: x
    }, g.offsetHeight), c)), {
      y: x
    };
  }
});
function ia(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: a,
    onChange: s
  } = t, l = Yr(s), d = R.useRef(!1), c = R.useRef(null), m = R.useRef(null);
  R.useEffect(() => {
    if (!o)
      return;
    function f(g) {
      if (g.ctrlKey || !v || i.current == null)
        return;
      const y = g.deltaY, w = i.current.top >= -0.5, b = i.current.bottom >= -0.5, x = v.scrollHeight - v.clientHeight, S = y < 0 ? -1 : 1, C = y < 0 ? "max" : "min";
      v.scrollHeight <= v.clientHeight || (!w && y > 0 || !b && y < 0 ? (g.preventDefault(), et.flushSync(() => {
        l((M) => M + Math[C](y, x * S));
      })) : /firefox/i.test(nl()) && (v.scrollTop += y));
    }
    const v = (a == null ? void 0 : a.current) || r.floating;
    if (n && v)
      return v.addEventListener("wheel", f), requestAnimationFrame(() => {
        c.current = v.scrollTop, i.current != null && (m.current = {
          ...i.current
        });
      }), () => {
        c.current = null, m.current = null, v.removeEventListener("wheel", f);
      };
  }, [o, n, r.floating, i, a, l]);
  const p = R.useMemo(() => ({
    onKeyDown() {
      d.current = !0;
    },
    onWheel() {
      d.current = !1;
    },
    onPointerMove() {
      d.current = !1;
    },
    onScroll() {
      const f = (a == null ? void 0 : a.current) || r.floating;
      if (!(!i.current || !f || !d.current)) {
        if (c.current !== null) {
          const v = f.scrollTop - c.current;
          (i.current.bottom < -0.5 && v < -1 || i.current.top < -0.5 && v > 1) && et.flushSync(() => l((g) => g + v));
        }
        requestAnimationFrame(() => {
          c.current = f.scrollTop;
        });
      }
    }
  }), [r.floating, l, i, a]);
  return R.useMemo(() => o ? {
    floating: p
  } : {}, [o, p]);
}
let Ve = ge({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Ve.displayName = "FloatingContext";
let bn = ge(null);
bn.displayName = "PlacementContext";
function la(e) {
  return J(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function aa() {
  return oe(Ve).setReference;
}
function sa() {
  return oe(Ve).getReferenceProps;
}
function ua() {
  let { getFloatingProps: e, slot: t } = oe(Ve);
  return le((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function ca(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = oe(bn), n = J(() => e, [JSON.stringify(e, typeof HTMLElement < "u" ? (o, i) => i instanceof HTMLElement ? i.outerHTML : i : void 0)]);
  Y(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = oe(Ve);
  return J(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let rr = 4;
function fa({ children: e, enabled: t = !0 }) {
  let [n, r] = X(null), [o, i] = X(0), a = B(null), [s, l] = X(null);
  da(s);
  let d = t && n !== null && s !== null, { to: c = "bottom", gap: m = 0, offset: p = 0, padding: f = 0, inner: v } = pa(n, s), [g, y = "center"] = c.split(" ");
  Y(() => {
    d && i(0);
  }, [d]);
  let { refs: w, floatingStyles: b, context: x } = na({ open: d, placement: g === "selection" ? y === "center" ? "bottom" : `bottom-${y}` : y === "center" ? `${g}` : `${g}-${y}`, strategy: "absolute", transform: !1, middleware: [Vr({ mainAxis: g === "selection" ? 0 : m, crossAxis: p }), jl({ padding: f }), g !== "selection" && Hl({ padding: f }), g === "selection" && v ? oa({ ...v, padding: f, overflowRef: a, offset: o, minItemsVisible: rr, referenceOverflowThreshold: f, onFallbackChange(V) {
    var Q, H;
    if (!V)
      return;
    let j = x.elements.floating;
    if (!j)
      return;
    let T = parseFloat(getComputedStyle(j).scrollPaddingBottom) || 0, Z = Math.min(rr, j.childElementCount), D = 0, U = 0;
    for (let _ of (H = (Q = x.elements.floating) == null ? void 0 : Q.childNodes) != null ? H : [])
      if (_ instanceof HTMLElement) {
        let me = _.offsetTop, Ue = me + _.clientHeight + T, Le = j.scrollTop, Ye = Le + j.clientHeight;
        if (me >= Le && Ue <= Ye)
          Z--;
        else {
          U = Math.max(0, Math.min(Ue, Ye) - Math.max(me, Le)), D = _.clientHeight;
          break;
        }
      }
    Z >= 1 && i((_) => {
      let me = D * Z - U + T;
      return _ >= me ? _ : me;
    });
  } }) : null, Wl({ padding: f, apply({ availableWidth: V, availableHeight: Q, elements: H }) {
    Object.assign(H.floating.style, { overflow: "auto", maxWidth: `${V}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${Q}px)` });
  } })].filter(Boolean), whileElementsMounted: Il }), [S = g, C = y] = x.placement.split("-");
  g === "selection" && (S = "selection");
  let M = J(() => ({ anchor: [S, C].filter(Boolean).join(" ") }), [S, C]), $ = ia(x, { overflowRef: a, onChange: i }), { getReferenceProps: F, getFloatingProps: O } = ra([$]), L = W((V) => {
    l(V), w.setFloating(V);
  });
  return R.createElement(bn.Provider, { value: r }, R.createElement(Ve.Provider, { value: { setFloating: L, setReference: w.setReference, styles: b, getReferenceProps: F, getFloatingProps: O, slot: M } }, e));
}
function da(e) {
  Y(() => {
    if (!e)
      return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r))
        return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function pa(e, t) {
  var n, r, o;
  let i = Yt((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), a = Yt((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = Yt((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: a, padding: s };
}
function Yt(e, t, n = void 0) {
  let r = Rt(), o = W((l, d) => {
    if (l == null)
      return [n, null];
    if (typeof l == "number")
      return [l, null];
    if (typeof l == "string") {
      if (!d)
        return [n, null];
      let c = or(l, d);
      return [c, (m) => {
        let p = Kr(l);
        {
          let f = p.map((v) => window.getComputedStyle(d).getPropertyValue(v));
          r.requestAnimationFrame(function v() {
            r.nextFrame(v);
            let g = !1;
            for (let [w, b] of p.entries()) {
              let x = window.getComputedStyle(d).getPropertyValue(b);
              if (f[w] !== x) {
                f[w] = x, g = !0;
                break;
              }
            }
            if (!g)
              return;
            let y = or(l, d);
            c !== y && (m(y), c = y);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = J(() => o(e, t)[0], [e, t]), [a = i, s] = X();
  return Y(() => {
    let [l, d] = o(e, t);
    if (s(l), !!d)
      return d(s);
  }, [e, t]), a;
}
function Kr(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1)
      return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Kr(o)] : [r];
  }
  return [];
}
function or(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
let yn = ge(null);
yn.displayName = "OpenClosedContext";
var rt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(rt || {});
function ma() {
  return oe(yn);
}
function va({ value: e, children: t }) {
  return re.createElement(yn.Provider, { value: e }, t);
}
function ga(e) {
  throw new Error("Unexpected object: " + e);
}
var te = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(te || {});
function Kt(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i)
        if (!t.resolveDisabled(n[i], i, n))
          return i;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let i = o - 1; i >= 0; --i)
        if (!t.resolveDisabled(n[i], i, n))
          return i;
      return r;
    }
    case 2: {
      for (let i = o + 1; i < n.length; ++i)
        if (!t.resolveDisabled(n[i], i, n))
          return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i)
        if (!t.resolveDisabled(n[i], i, n))
          return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i)
        if (t.resolveId(n[i], i, n) === e.id)
          return i;
      return r;
    }
    case 5:
      return null;
    default:
      ga(e);
  }
}
function ha(e) {
  let t = W(e), n = B(!1);
  q(() => (n.current = !1, () => {
    n.current = !0, yr(() => {
      n.current && t();
    });
  }), [t]);
}
function ba() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in R ? ((t) => t.useSyncExternalStore)(R)(() => () => {
  }, () => !1, () => !e) : !1;
}
function ya() {
  let e = ba(), [t, n] = R.useState(Oe.isHandoffComplete);
  return t && Oe.isHandoffComplete === !1 && n(!1), R.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), R.useEffect(() => Oe.handoff(), []), e ? !1 : t;
}
let wa = ge(!1);
function Ea() {
  return oe(wa);
}
function xa(e) {
  let t = Ea(), n = oe(Gr), r = mn(e), [o, i] = X(() => {
    var a;
    if (!t && n !== null)
      return (a = n.current) != null ? a : null;
    if (Oe.isServer)
      return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s)
      return s;
    if (r === null)
      return null;
    let l = r.createElement("div");
    return l.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(l);
  });
  return q(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), q(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let zr = Fe, Ra = fe(function(e, t) {
  let n = e, r = B(null), o = ye(si((c) => {
    r.current = c;
  }), t), i = mn(r), a = xa(r), [s] = X(() => {
    var c;
    return Oe.isServer ? null : (c = i == null ? void 0 : i.createElement("div")) != null ? c : null;
  }), l = oe(Pa), d = ya();
  return Y(() => {
    !a || !s || a.contains(s) || (s.setAttribute("data-headlessui-portal", ""), a.appendChild(s));
  }, [a, s]), Y(() => {
    if (s && l)
      return l.register(s);
  }, [l, s]), ha(() => {
    var c;
    !a || !s || (s instanceof Node && a.contains(s) && a.removeChild(s), a.childNodes.length <= 0 && ((c = a.parentElement) == null || c.removeChild(a)));
  }), d ? !a || !s ? null : Ao(ce({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: zr, name: "Portal" }), s) : null;
});
function $a(e, t) {
  let n = ye(t), { enabled: r = !0, ...o } = e;
  return r ? re.createElement(Ra, { ...o, ref: n }) : ce({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: zr, name: "Portal" });
}
let Sa = Fe, Gr = ge(null);
function Ta(e, t) {
  let { target: n, ...r } = e, o = { ref: ye(t) };
  return re.createElement(Gr.Provider, { value: n }, ce({ ourProps: o, theirProps: r, defaultTag: Sa, name: "Popover.Group" }));
}
let Pa = ge(null), Ca = fe($a), Fa = fe(Ta), Oa = Object.assign(Ca, { Group: Fa }), Aa = "input";
function Ia(e, t) {
  let n = Se(), r = Er(), o = sn(), { id: i = r || `headlessui-input-${n}`, disabled: a = o || !1, autoFocus: s = !1, invalid: l = !1, ...d } = e, c = $r(), m = ui(), { isFocused: p, focusProps: f } = br({ autoFocus: s }), { isHovered: v, hoverProps: g } = hr({ isDisabled: a }), y = un({ ref: t, id: i, "aria-labelledby": c, "aria-describedby": m, "aria-invalid": l ? "" : void 0, disabled: a || void 0, autoFocus: s }, f, g), w = J(() => ({ disabled: a, invalid: l, hover: v, focus: p, autofocus: s }), [a, l, v, p, s]);
  return ce({ ourProps: y, theirProps: d, slot: w, defaultTag: Aa, name: "Input" });
}
let Ma = fe(Ia);
function La(e, t) {
  let n = B({ left: 0, top: 0 });
  if (Y(() => {
    let o = t.current;
    if (!o)
      return;
    let i = o.getBoundingClientRect();
    i && (n.current = i);
  }, [e]), t.current == null || !e || t.current === document.activeElement)
    return !1;
  let r = t.current.getBoundingClientRect();
  return r.top !== n.current.top || r.left !== n.current.left;
}
let ir = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function lr(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement))
    return r;
  let i = !1;
  for (let s of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    s.remove(), i = !0;
  let a = i ? (n = o.innerText) != null ? n : "" : r;
  return ir.test(a) && (a = a.replace(ir, "")), a;
}
function Da(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((o) => {
      let i = document.getElementById(o);
      if (i) {
        let a = i.getAttribute("aria-label");
        return typeof a == "string" ? a.trim() : lr(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0)
      return r.join(", ");
  }
  return lr(e).trim();
}
function ka(e) {
  let t = B(""), n = B("");
  return W(() => {
    let r = e.current;
    if (!r)
      return "";
    let o = r.innerText;
    if (t.current === o)
      return n.current;
    let i = Da(r).trim().toLowerCase();
    return t.current = o, n.current = i, i;
  });
}
var _a = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_a || {}), Na = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Na || {}), ja = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(ja || {});
function zt(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, r = Or(t(e.items.slice()), (i) => i.dataRef.current.domRef.current), o = n ? r.indexOf(n) : null;
  return o === -1 && (o = null), { items: r, activeItemIndex: o };
}
let Ha = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, t) => {
  var n, r, o, i, a;
  if (e.menuState === 1)
    return e;
  let s = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === te.Nothing)
    return { ...s, activeItemIndex: null };
  if (t.focus === te.Specific)
    return { ...s, activeItemIndex: e.items.findIndex((c) => c.id === t.id) };
  if (t.focus === te.Previous) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let m = e.items[c].dataRef.current.domRef, p = Kt(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (p !== null) {
        let f = e.items[p].dataRef.current.domRef;
        if (((r = m.current) == null ? void 0 : r.previousElementSibling) === f.current || ((o = f.current) == null ? void 0 : o.previousElementSibling) === null)
          return { ...s, activeItemIndex: p };
      }
    }
  } else if (t.focus === te.Next) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let m = e.items[c].dataRef.current.domRef, p = Kt(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (p !== null) {
        let f = e.items[p].dataRef.current.domRef;
        if (((i = m.current) == null ? void 0 : i.nextElementSibling) === f.current || ((a = f.current) == null ? void 0 : a.nextElementSibling) === null)
          return { ...s, activeItemIndex: p };
      }
    }
  }
  let l = zt(e), d = Kt(t, { resolveItems: () => l.items, resolveActiveIndex: () => l.activeItemIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
  return { ...s, ...l, activeItemIndex: d };
}, 3: (e, t) => {
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), o = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((a) => {
    var s;
    return ((s = a.dataRef.current.textValue) == null ? void 0 : s.startsWith(r)) && !a.dataRef.current.disabled;
  }), i = o ? e.items.indexOf(o) : -1;
  return i === -1 || i === e.activeItemIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeItemIndex: i, activationTrigger: 1 };
}, 4(e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e, t) => {
  let n = zt(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...n };
}, 6: (e, t) => {
  let n = zt(e, (r) => {
    let o = r.findIndex((i) => i.id === t.id);
    return o !== -1 && r.splice(o, 1), r;
  });
  return { ...e, ...n, activationTrigger: 1 };
} }, wn = ge(null);
wn.displayName = "MenuContext";
function Ft(e) {
  let t = oe(wn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ft), n;
  }
  return t;
}
function Wa(e, t) {
  return at(t.type, Ha, e, t);
}
let Ba = Fe;
function Va(e, t) {
  let { __demoMode: n = !1, ...r } = e, o = sr(Wa, { __demoMode: n, menuState: n ? 0 : 1, buttonRef: Dn(), itemsRef: Dn(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i, itemsRef: a, buttonRef: s }, l] = o, d = ye(t);
  ki(i === 0, [s, a], (f, v) => {
    var g;
    l({ type: 1 }), pn(v, dn.Loose) || (f.preventDefault(), (g = s.current) == null || g.focus());
  });
  let c = W(() => {
    l({ type: 1 });
  }), m = J(() => ({ open: i === 0, close: c }), [i, c]), p = { ref: d };
  return re.createElement(fa, null, re.createElement(wn.Provider, { value: o }, re.createElement(va, { value: at(i, { 0: rt.Open, 1: rt.Closed }) }, ce({ ourProps: p, theirProps: r, slot: m, defaultTag: Ba, name: "Menu" }))));
}
let Ua = "button";
function Ya(e, t) {
  var n;
  let r = Se(), { id: o = `headlessui-menu-button-${r}`, disabled: i = !1, autoFocus: a = !1, ...s } = e, [l, d] = Ft("Menu.Button"), c = sa(), m = ye(l.buttonRef, t, aa()), p = W(($) => {
    switch ($.key) {
      case ee.Space:
      case ee.Enter:
      case ee.ArrowDown:
        $.preventDefault(), $.stopPropagation(), Je(() => d({ type: 0 })), d({ type: 2, focus: te.First });
        break;
      case ee.ArrowUp:
        $.preventDefault(), $.stopPropagation(), Je(() => d({ type: 0 })), d({ type: 2, focus: te.Last });
        break;
    }
  }), f = W(($) => {
    switch ($.key) {
      case ee.Space:
        $.preventDefault();
        break;
    }
  }), v = W(($) => {
    var F;
    if (li($.currentTarget))
      return $.preventDefault();
    i || (l.menuState === 0 ? (Je(() => d({ type: 1 })), (F = l.buttonRef.current) == null || F.focus({ preventScroll: !0 })) : ($.preventDefault(), d({ type: 0 })));
  }), { isFocusVisible: g, focusProps: y } = br({ autoFocus: a }), { isHovered: w, hoverProps: b } = hr({ isDisabled: i }), { pressed: x, pressProps: S } = ti({ disabled: i }), C = J(() => ({ open: l.menuState === 0, active: x || l.menuState === 0, disabled: i, hover: w, focus: g, autofocus: a }), [l, w, g, x, i, a]), M = un(c(), { ref: m, id: o, type: _i(e, l.buttonRef), "aria-haspopup": "menu", "aria-controls": (n = l.itemsRef.current) == null ? void 0 : n.id, "aria-expanded": l.menuState === 0, disabled: i || void 0, autoFocus: a, onKeyDown: p, onKeyUp: f, onClick: v }, y, b, S);
  return ce({ ourProps: M, theirProps: s, slot: C, defaultTag: Ua, name: "Menu.Button" });
}
let Ka = "div", za = Zt.RenderStrategy | Zt.Static;
function Ga(e, t) {
  var n, r;
  let o = Se(), { id: i = `headlessui-menu-items-${o}`, anchor: a, portal: s = !1, modal: l = !0, transition: d = !1, ...c } = e, m = la(a), [p, f] = Ft("Menu.Items"), [v, g] = ca(m), y = ua(), w = ye(p.itemsRef, t, m ? v : null), b = mn(p.itemsRef);
  m && (s = !0);
  let x = ma(), [S, C] = qi(d, p.itemsRef, x !== null ? (x & rt.Open) === rt.Open : p.menuState === 0);
  xi(S, p.buttonRef, () => {
    f({ type: 1 });
  });
  let M = p.__demoMode ? !1 : l && p.menuState === 0;
  Vi(M, b);
  let $ = p.__demoMode ? !1 : l && p.menuState === 0;
  Ei($, { allowed: W(() => [p.buttonRef.current, p.itemsRef.current]) });
  let F = p.menuState !== 0, O = La(F, p.buttonRef) ? !1 : S;
  q(() => {
    let T = p.itemsRef.current;
    T && p.menuState === 0 && T !== (b == null ? void 0 : b.activeElement) && T.focus({ preventScroll: !0 });
  }, [p.menuState, p.itemsRef, b, p.itemsRef.current]), Zi(p.menuState === 0, { container: p.itemsRef.current, accept(T) {
    return T.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : T.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(T) {
    T.setAttribute("role", "none");
  } });
  let L = Rt(), V = W((T) => {
    var Z, D, U;
    switch (L.dispose(), T.key) {
      case ee.Space:
        if (p.searchQuery !== "")
          return T.preventDefault(), T.stopPropagation(), f({ type: 3, value: T.key });
      case ee.Enter:
        if (T.preventDefault(), T.stopPropagation(), f({ type: 1 }), p.activeItemIndex !== null) {
          let { dataRef: _ } = p.items[p.activeItemIndex];
          (D = (Z = _.current) == null ? void 0 : Z.domRef.current) == null || D.click();
        }
        Fr(p.buttonRef.current);
        break;
      case ee.ArrowDown:
        return T.preventDefault(), T.stopPropagation(), f({ type: 2, focus: te.Next });
      case ee.ArrowUp:
        return T.preventDefault(), T.stopPropagation(), f({ type: 2, focus: te.Previous });
      case ee.Home:
      case ee.PageUp:
        return T.preventDefault(), T.stopPropagation(), f({ type: 2, focus: te.First });
      case ee.End:
      case ee.PageDown:
        return T.preventDefault(), T.stopPropagation(), f({ type: 2, focus: te.Last });
      case ee.Escape:
        T.preventDefault(), T.stopPropagation(), Je(() => f({ type: 1 })), (U = p.buttonRef.current) == null || U.focus({ preventScroll: !0 });
        break;
      case ee.Tab:
        T.preventDefault(), T.stopPropagation(), Je(() => f({ type: 1 })), Ai(p.buttonRef.current, T.shiftKey ? nn.Previous : nn.Next);
        break;
      default:
        T.key.length === 1 && (f({ type: 3, value: T.key }), L.setTimeout(() => f({ type: 4 }), 350));
        break;
    }
  }), Q = W((T) => {
    switch (T.key) {
      case ee.Space:
        T.preventDefault();
        break;
    }
  }), H = J(() => ({ open: p.menuState === 0 }), [p.menuState]), j = un(m ? y() : {}, { "aria-activedescendant": p.activeItemIndex === null || (n = p.items[p.activeItemIndex]) == null ? void 0 : n.id, "aria-labelledby": (r = p.buttonRef.current) == null ? void 0 : r.id, id: i, onKeyDown: V, onKeyUp: Q, role: "menu", tabIndex: p.menuState === 0 ? 0 : void 0, ref: w, style: { ...c.style, ...g, "--button-width": bi(p.buttonRef, !0).width }, ...Gi(C) });
  return re.createElement(Oa, { enabled: s ? e.static || S : !1 }, ce({ ourProps: j, theirProps: c, slot: H, defaultTag: Ka, features: za, visible: O, name: "Menu.Items" }));
}
let qa = Fe;
function Xa(e, t) {
  let n = Se(), { id: r = `headlessui-menu-item-${n}`, disabled: o = !1, ...i } = e, [a, s] = Ft("Menu.Item"), l = a.activeItemIndex !== null ? a.items[a.activeItemIndex].id === r : !1, d = B(null), c = ye(t, d);
  Y(() => {
    if (!a.__demoMode && a.menuState === 0 && l && a.activationTrigger !== 0)
      return be().requestAnimationFrame(() => {
        var O, L;
        (L = (O = d.current) == null ? void 0 : O.scrollIntoView) == null || L.call(O, { block: "nearest" });
      });
  }, [a.__demoMode, d, l, a.menuState, a.activationTrigger, a.activeItemIndex]);
  let m = ka(d), p = B({ disabled: o, domRef: d, get textValue() {
    return m();
  } });
  Y(() => {
    p.current.disabled = o;
  }, [p, o]), Y(() => (s({ type: 5, id: r, dataRef: p }), () => s({ type: 6, id: r })), [p, r]);
  let f = W(() => {
    s({ type: 1 });
  }), v = W((O) => {
    if (o)
      return O.preventDefault();
    s({ type: 1 }), Fr(a.buttonRef.current);
  }), g = W(() => {
    if (o)
      return s({ type: 2, focus: te.Nothing });
    s({ type: 2, focus: te.Specific, id: r });
  }), y = Ui(), w = W((O) => {
    y.update(O), !o && (l || s({ type: 2, focus: te.Specific, id: r, trigger: 0 }));
  }), b = W((O) => {
    y.wasMoved(O) && (o || l || s({ type: 2, focus: te.Specific, id: r, trigger: 0 }));
  }), x = W((O) => {
    y.wasMoved(O) && (o || l && s({ type: 2, focus: te.Nothing }));
  }), [S, C] = Sr(), [M, $] = ci(), F = J(() => ({ active: l, focus: l, disabled: o, close: f }), [l, o, f]);
  return re.createElement(C, null, re.createElement($, null, ce({ ourProps: { id: r, ref: c, role: "menuitem", tabIndex: o === !0 ? void 0 : -1, "aria-disabled": o === !0 ? !0 : void 0, "aria-labelledby": S, "aria-describedby": M, disabled: void 0, onClick: v, onFocus: g, onPointerEnter: w, onMouseEnter: w, onPointerMove: b, onMouseMove: b, onPointerLeave: x, onMouseLeave: x }, theirProps: i, slot: F, defaultTag: qa, name: "Menu.Item" })));
}
let Ja = "div";
function Qa(e, t) {
  let [n, r] = Sr();
  return re.createElement(r, null, ce({ ourProps: { ref: t, "aria-labelledby": n, role: "group" }, theirProps: e, slot: {}, defaultTag: Ja, name: "Menu.Section" }));
}
let Za = "header";
function es(e, t) {
  let n = Se(), { id: r = `headlessui-menu-heading-${n}`, ...o } = e, i = cn();
  Y(() => i.register(r), [r, i.register]);
  let a = { id: r, ref: t, role: "presentation", ...i.props };
  return ce({ ourProps: a, theirProps: o, slot: {}, defaultTag: Za, name: "Menu.Heading" });
}
let ts = "div";
function ns(e, t) {
  return ce({ ourProps: { ref: t, role: "separator" }, theirProps: e, slot: {}, defaultTag: ts, name: "Menu.Separator" });
}
let rs = fe(Va), qr = fe(Ya), Xr = fe(Ga), Jr = fe(Xa), os = fe(Qa), is = fe(es), ls = fe(ns), as = Object.assign(rs, { Button: qr, Items: Xr, Item: Jr, Section: os, Heading: is, Separator: ls });
function ss({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ R.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const us = /* @__PURE__ */ R.forwardRef(ss), cs = us;
function fs({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ R.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",
    clipRule: "evenodd"
  }));
}
const ds = /* @__PURE__ */ R.forwardRef(fs), ps = ds;
function ms({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ R.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ R.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const vs = /* @__PURE__ */ R.forwardRef(ms), ar = vs, ws = ({ multiple: e = !1, search: t = !1, options: n, selectedOptions: r = [], optionLabel: o, inputLabel: i, onChange: a }) => {
  var M;
  const s = o && n[0].hasOwnProperty(o) ? o : "label", l = [...n], d = Array.isArray(r) && r.length > 0 ? l.filter(($) => r.includes($.id)) : [], [c, m] = X(d), [p, f] = X(l), [v, g] = X("");
  q(() => {
    m(y(l.filter(($) => r.includes($.id))));
  }, [r]), q(() => {
    m([]);
  }, [e]), q(() => {
    m(y(l.filter(($) => r.includes($.id))));
  }, [n]);
  const y = ($) => $.filter((F) => n.some((O) => F.id == O.id)), w = ($) => {
    let F = c.find((L) => L.id === $.id), O = e ? [...c, ...F ? [] : [$]] : [$];
    m(O), a && a();
  }, b = ($, F) => {
    $.stopPropagation();
    let O = [...c].filter((L) => L.id !== F.id);
    m(O), a && a();
  }, x = ($) => {
    g($);
    const O = [...[...l].filter((L) => L[s].includes($))].map((L) => {
      let V = L[s];
      return L.highlightedLabel = V.replace(
        new RegExp($ + "(?!([^<]+)?<)", "gi"),
        "<mark class='!bg-teal-400'>$&</mark>"
      ), L;
    });
    f(O);
  }, S = () => {
    const $ = [...l].map((F) => (F.highlightedLabel = F[s], F));
    f($), g("");
  }, C = () => {
    g(""), x("");
  };
  return /* @__PURE__ */ G.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-3", children: [
    /* @__PURE__ */ G.jsx("div", { className: "w-full col-span-1 text-left text-gray-600 text-sm break-words pr-4 pl-2 py-2 font-semibold align-middle", children: i }),
    /* @__PURE__ */ G.jsxs(as, { as: "div", className: `${i ? "col-span-5" : "col-span-6"} w-full relative inline-block text-left pt-0 content-center`, children: [
      /* @__PURE__ */ G.jsxs(qr, { onClick: S, className: "top-0 inline-flex w-full flex text-left h-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none", children: [
        /* @__PURE__ */ G.jsx("div", { className: "w-full truncate", children: e ? c.map(($) => /* @__PURE__ */ G.jsxs("span", { className: "truncate rounded-full font-light mr-1 inline-flex border-transparent items-center bg-gray-100 px-2 py-0 text-xs text-gray-600", children: [
          $[s],
          /* @__PURE__ */ G.jsx(ar, { className: "pl-2 h-6 w-6 text-gray-500", onClick: (F) => b(F, $) })
        ] }, $.id)) : /* @__PURE__ */ G.jsx("span", { className: "font-light text-gray-600", children: ((M = c[0]) == null ? void 0 : M[s]) || "" }) }),
        /* @__PURE__ */ G.jsx(cs, { "aria-hidden": "true", className: "-mr-1 h-5 content-center text-gray-500 object-right" })
      ] }),
      /* @__PURE__ */ G.jsxs(
        Xr,
        {
          className: "absolute w-full z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",
          children: [
            t && /* @__PURE__ */ G.jsxs("div", { className: "relative  border border-gray-100 border-t-transparent border-r-transparent border-l-transparent", children: [
              /* @__PURE__ */ G.jsx("div", { className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none", children: /* @__PURE__ */ G.jsx(ps, { className: "size-4 text-slate-400" }) }),
              /* @__PURE__ */ G.jsx(
                Ma,
                {
                  type: "text",
                  id: "search-input",
                  className: "block w-full px-3 py-2 ps-10 pe-8 text-sm font-light text-gray-600 focus:outline-none rounded-t-lg dark:text-white",
                  placeholder: "Search items",
                  autoComplete: "off",
                  onChange: ($) => x($.target.value),
                  value: v
                }
              ),
              v && /* @__PURE__ */ G.jsx(ar, { className: "absolute inset-y-0 end-2 flex items-center cursor-pointer ps-3 size-7 mt-1 text-gray-500 text-slate-400", onClick: C })
            ] }),
            /* @__PURE__ */ G.jsx("div", { className: "py-0", children: p.map(($, F) => /* @__PURE__ */ G.jsx(Jr, { className: "data-[focus]:bg-emerald-50 data-[focus]:text-gray-900", as: "div", onClick: () => w($), children: /* @__PURE__ */ G.jsx("div", { className: "block px-4 py-2 text-sm text-gray-700 font-light", children: /* @__PURE__ */ G.jsx("div", { dangerouslySetInnerHTML: { __html: $.highlightedLabel || $[s] } }) }) }, F)) })
          ]
        }
      )
    ] })
  ] });
};
export {
  ws as Dropdown
};
