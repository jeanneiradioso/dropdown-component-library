import * as R from "react";
import re, { useRef as B, useCallback as le, useEffect as Z, useState as q, useMemo as X, useLayoutEffect as ln, createContext as ge, useContext as oe, forwardRef as So, Fragment as Fe, isValidElement as Po, cloneElement as Co, createElement as Fo, useId as Te, useReducer as sr, useSyncExternalStore as Oo, createRef as Dn } from "react";
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
  function l(s, a, f) {
    var c, m = {}, p = null, d = null;
    f !== void 0 && (p = "" + f), a.key !== void 0 && (p = "" + a.key), a.ref !== void 0 && (d = a.ref);
    for (c in a)
      r.call(a, c) && !i.hasOwnProperty(c) && (m[c] = a[c]);
    if (s && s.defaultProps)
      for (c in a = s.defaultProps, a)
        m[c] === void 0 && (m[c] = a[c]);
    return { $$typeof: t, type: s, key: p, ref: d, props: m, _owner: o.current };
  }
  return Ge.Fragment = n, Ge.jsx = l, Ge.jsxs = l, Ge;
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
    var e = re, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), v = Symbol.iterator, g = "@@iterator";
    function y(u) {
      if (u === null || typeof u != "object")
        return null;
      var h = v && u[v] || u[g];
      return typeof h == "function" ? h : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(u) {
      {
        for (var h = arguments.length, E = new Array(h > 1 ? h - 1 : 0), F = 1; F < h; F++)
          E[F - 1] = arguments[F];
        x("error", u, E);
      }
    }
    function x(u, h, E) {
      {
        var F = w.ReactDebugCurrentFrame, D = F.getStackAddendum();
        D !== "" && (h += "%s", E = E.concat([D]));
        var _ = E.map(function(I) {
          return String(I);
        });
        _.unshift("Warning: " + h), Function.prototype.apply.call(console[u], console, _);
      }
    }
    var T = !1, C = !1, $ = !1, P = !1, M = !1, O;
    O = Symbol.for("react.module.reference");
    function j(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === r || u === i || M || u === o || u === f || u === c || P || u === d || T || C || $ || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === m || u.$$typeof === l || u.$$typeof === s || u.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === O || u.getModuleId !== void 0));
    }
    function K(u, h, E) {
      var F = u.displayName;
      if (F)
        return F;
      var D = h.displayName || h.name || "";
      return D !== "" ? E + "(" + D + ")" : E;
    }
    function J(u) {
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
        case f:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var h = u;
            return J(h) + ".Consumer";
          case l:
            var E = u;
            return J(E._context) + ".Provider";
          case a:
            return K(u, u.render, "ForwardRef");
          case m:
            var F = u.displayName || null;
            return F !== null ? F : H(u.type) || "Memo";
          case p: {
            var D = u, _ = D._payload, I = D._init;
            try {
              return H(I(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, S = 0, Q, L, V, k, me, Ue, Le;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function Qr() {
      {
        if (S === 0) {
          Q = console.log, L = console.info, V = console.warn, k = console.error, me = console.group, Ue = console.groupCollapsed, Le = console.groupEnd;
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
        S++;
      }
    }
    function Zr() {
      {
        if (S--, S === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, u, {
              value: Q
            }),
            info: N({}, u, {
              value: L
            }),
            warn: N({}, u, {
              value: V
            }),
            error: N({}, u, {
              value: k
            }),
            group: N({}, u, {
              value: me
            }),
            groupCollapsed: N({}, u, {
              value: Ue
            }),
            groupEnd: N({}, u, {
              value: Le
            })
          });
        }
        S < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ot = w.ReactCurrentDispatcher, At;
    function ct(u, h, E) {
      {
        if (At === void 0)
          try {
            throw Error();
          } catch (D) {
            var F = D.stack.trim().match(/\n( *(at )?)/);
            At = F && F[1] || "";
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
      var F;
      It = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = Ot.current, Ot.current = null, Qr();
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
              F = ae;
            }
            Reflect.construct(u, [], I);
          } else {
            try {
              I.call();
            } catch (ae) {
              F = ae;
            }
            u.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            F = ae;
          }
          u();
        }
      } catch (ae) {
        if (ae && F && typeof ae.stack == "string") {
          for (var A = ae.stack.split(`
`), ie = F.stack.split(`
`), Y = A.length - 1, z = ie.length - 1; Y >= 1 && z >= 0 && A[Y] !== ie[z]; )
            z--;
          for (; Y >= 1 && z >= 0; Y--, z--)
            if (A[Y] !== ie[z]) {
              if (Y !== 1 || z !== 1)
                do
                  if (Y--, z--, z < 0 || A[Y] !== ie[z]) {
                    var de = `
` + A[Y].replace(" at new ", " at ");
                    return u.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", u.displayName)), typeof u == "function" && ft.set(u, de), de;
                  }
                while (Y >= 1 && z >= 0);
              break;
            }
        }
      } finally {
        It = !1, Ot.current = _, Zr(), Error.prepareStackTrace = D;
      }
      var ke = u ? u.displayName || u.name : "", Se = ke ? ct(ke) : "";
      return typeof u == "function" && ft.set(u, Se), Se;
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
        case f:
          return ct("Suspense");
        case c:
          return ct("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case a:
            return to(u.render);
          case m:
            return dt(u.type, h, E);
          case p: {
            var F = u, D = F._payload, _ = F._init;
            try {
              return dt(_(D), h, E);
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
    function ro(u, h, E, F, D) {
      {
        var _ = Function.call.bind(Ke);
        for (var I in u)
          if (_(u, I)) {
            var A = void 0;
            try {
              if (typeof u[I] != "function") {
                var ie = Error((F || "React class") + ": " + E + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              A = u[I](h, I, F, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              A = Y;
            }
            A && !(A instanceof Error) && (pt(D), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", E, I, typeof A), pt(null)), A instanceof Error && !(A.message in xn) && (xn[A.message] = !0, pt(D), b("Failed %s type: %s", E, A.message), pt(null));
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
    function Tn(u) {
      if (lo(u))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", io(u)), $n(u);
    }
    var ze = w.ReactCurrentOwner, ao = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Sn, Pn, Lt;
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
          Sn || (Sn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
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
    var mo = function(u, h, E, F, D, _, I) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: h,
        ref: E,
        props: I,
        // Record the component responsible for creating this element.
        _owner: _
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
        value: F
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function vo(u, h, E, F, D) {
      {
        var _, I = {}, A = null, ie = null;
        E !== void 0 && (Tn(E), A = "" + E), uo(h) && (Tn(h.key), A = "" + h.key), so(h) && (ie = h.ref, co(h, D));
        for (_ in h)
          Ke.call(h, _) && !ao.hasOwnProperty(_) && (I[_] = h[_]);
        if (u && u.defaultProps) {
          var Y = u.defaultProps;
          for (_ in Y)
            I[_] === void 0 && (I[_] = Y[_]);
        }
        if (A || ie) {
          var z = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          A && fo(I, z), ie && po(I, z);
        }
        return mo(u, A, ie, D, F, ze.current, I);
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
        var F = "";
        u && u._owner && u._owner !== Dt.current && (F = " It was passed a child from " + H(u._owner.type) + "."), De(u), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, F), De(null);
      }
    }
    function In(u, h) {
      {
        if (typeof u != "object")
          return;
        if (Mt(u))
          for (var E = 0; E < u.length; E++) {
            var F = u[E];
            _t(F) && An(F, h);
          }
        else if (_t(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var D = y(u);
          if (typeof D == "function" && D !== u.entries)
            for (var _ = D.call(u), I; !(I = _.next()).done; )
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
        else if (typeof h == "object" && (h.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === m))
          E = h.propTypes;
        else
          return;
        if (E) {
          var F = H(h);
          ro(E, u.props, "prop", F, u);
        } else if (h.PropTypes !== void 0 && !kt) {
          kt = !0;
          var D = H(h);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yo(u) {
      {
        for (var h = Object.keys(u.props), E = 0; E < h.length; E++) {
          var F = h[E];
          if (F !== "children" && F !== "key") {
            De(u), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), De(null);
            break;
          }
        }
        u.ref !== null && (De(u), b("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    var Mn = {};
    function Ln(u, h, E, F, D, _) {
      {
        var I = j(u);
        if (!I) {
          var A = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = go(D);
          ie ? A += ie : A += Fn();
          var Y;
          u === null ? Y = "null" : Mt(u) ? Y = "array" : u !== void 0 && u.$$typeof === t ? (Y = "<" + (H(u.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof u, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, A);
        }
        var z = vo(u, h, E, D, _);
        if (z == null)
          return z;
        if (I) {
          var de = h.children;
          if (de !== void 0)
            if (F)
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
          var Se = H(u), ae = Object.keys(h).filter(function(To) {
            return To !== "key";
          }), Nt = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mn[Se + Nt]) {
            var $o = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nt, Se, $o, Se), Mn[Se + Nt] = !0;
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
      let o = r.target, i = (l) => {
        t.current.isFocused = !1, o.disabled && n(new Ho("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
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
  const i = le((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = fr(i), s = le((a) => {
    const f = ot(a.target);
    a.target === a.currentTarget && f.activeElement === a.target && (n && n(a), o && o(!0), l(a));
  }, [
    o,
    n,
    l
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
  const o = typeof window < "u" ? Pe(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? Pe(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? Pe(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? Pe(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !Yo.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof s && !Bo[n.key]);
}
function zo(e, t, n) {
  Jt(), Z(() => {
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
  }), l = le((f) => {
    i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, n && n(f), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = fr(l), a = le((f) => {
    !i.current.isFocusWithin && document.activeElement === f.target && (r && r(f), o && o(!0), i.current.isFocusWithin = !0, s(f));
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
      onFocus: a,
      onBlur: l
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
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = q(!1), s = B({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Z(qo, []);
  let { hoverProps: a, triggerHoverEnd: f } = X(() => {
    let c = (d, v) => {
      if (s.pointerType = v, o || v === "touch" || s.isHovered || !d.currentTarget.contains(d.target))
        return;
      s.isHovered = !0;
      let g = d.currentTarget;
      s.target = g, t && t({
        type: "hoverstart",
        target: g,
        pointerType: v
      }), n && n(!0), l(!0);
    }, m = (d, v) => {
      if (s.pointerType = "", s.target = null, v === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let g = d.currentTarget;
      r && r({
        type: "hoverend",
        target: g,
        pointerType: v
      }), n && n(!1), l(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (d) => {
      bt && d.pointerType === "mouse" || c(d, d.pointerType);
    }, p.onPointerLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && m(d, d.pointerType);
    }) : (p.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (d) => {
      !s.ignoreEmulatedMouseEvents && !bt && c(d, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && m(d, "mouse");
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
  return Z(() => {
    o && f({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: a,
    isHovered: i
  };
}
function br(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = B({
    isFocused: !1,
    isFocusVisible: t || gr()
  }), [i, l] = q(!1), [s, a] = q(() => o.current.isFocused && o.current.isFocusVisible), f = le(() => a(o.current.isFocused && o.current.isFocusVisible), []), c = le((d) => {
    o.current.isFocused = d, l(d), f();
  }, [
    f
  ]);
  zo((d) => {
    o.current.isFocusVisible = d, f();
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
  let [e] = q(be);
  return Z(() => () => e.dispose(), [e]), e;
}
let U = (e, t) => {
  Oe.isServer ? Z(e, t) : ln(e, t);
};
function lt(e) {
  let t = B(e);
  return U(() => {
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
  let t = B(null), [n, r] = q(!1), o = Rt(), i = W(() => {
    t.current = null, r(!1), o.dispose();
  }), l = W((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = He(s.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (f) => {
          if (t.current) {
            let c = Zo(f);
            r(ei(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
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
function ce({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? oi;
  let a = wr(t, e);
  if (i)
    return mt(a, n, r, l, s);
  let f = o ?? 0;
  if (f & 2) {
    let { static: c = !1, ...m } = a;
    if (c)
      return mt(m, n, r, l, s);
  }
  if (f & 1) {
    let { unmount: c = !0, ...m } = a;
    return at(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return mt({ ...m, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return mt(a, n, r, l, s);
}
function mt(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = Wt(e, ["unmount", "static"]), f = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof l == "function" ? l(t) : l;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let m = {};
  if (t) {
    let p = !1, d = [];
    for (let [v, g] of Object.entries(t))
      typeof g == "boolean" && (p = !0), g === !0 && d.push(v.replace(/([A-Z])/g, (y) => `-${y.toLowerCase()}`));
    if (p) {
      m["data-headlessui-state"] = d.join(" ");
      for (let v of d)
        m[`data-${v}`] = "";
    }
  }
  if (i === Fe && (Object.keys(_e(a)).length > 0 || Object.keys(_e(m)).length > 0))
    if (!Po(c) || Array.isArray(c) && c.length > 1) {
      if (Object.keys(_e(a)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(_e(a)).concat(Object.keys(_e(m))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
    } else {
      let p = c.props, d = p == null ? void 0 : p.className, v = typeof d == "function" ? (...w) => jn(d(...w), a.className) : jn(d, a.className), g = v ? { className: v } : {}, y = wr(c.props, _e(Wt(a, ["ref"])));
      for (let w in m)
        w in y && delete m[w];
      return Co(c, Object.assign({}, y, m, f, { ref: o(c.ref, f.ref) }, g));
    }
  return Fo(i, Object.assign({}, Wt(a, ["ref"]), i !== Fe && f, i !== Fe && m), c);
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
      let l = n[r];
      for (let s of l) {
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
      for (let l of i)
        l == null || l(...o);
    } });
  return t;
}
function fe(e) {
  var t;
  return Object.assign(So(e), { displayName: (t = e.displayName) != null ? t : e.name });
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
  Z(() => {
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
  let [e, t] = q([]);
  return [e.length > 0 ? e.join(" ") : void 0, X(() => function(n) {
    let r = W((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = X(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return re.createElement($t.Provider, { value: o }, n.children);
  }, [t])];
}
let fi = "p";
function di(e, t) {
  let n = Te(), r = sn(), { id: o = `headlessui-description-${n}`, ...i } = e, l = Rr(), s = ye(t);
  U(() => l.register(o), [o, l.register]);
  let a = r || !1, f = X(() => ({ ...l.slot, disabled: a }), [l.slot, a]), c = { ref: s, ...l.props, id: o };
  return ce({ ourProps: c, theirProps: i, slot: f, defaultTag: fi, name: l.name || "Description" });
}
let pi = fe(di);
Object.assign(pi, {});
var ee = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ee || {});
let Tt = ge(null);
Tt.displayName = "LabelContext";
function cn() {
  let e = oe(Tt);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, cn), t;
  }
  return e;
}
function $r(e) {
  var t, n, r;
  let o = (n = (t = oe(Tt)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Tr({ inherit: e = !1 } = {}) {
  let t = $r(), [n, r] = q([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, X(() => function(i) {
    let l = W((a) => (r((f) => [...f, a]), () => r((f) => {
      let c = f.slice(), m = c.indexOf(a);
      return m !== -1 && c.splice(m, 1), c;
    }))), s = X(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return re.createElement(Tt.Provider, { value: s }, i.children);
  }, [r])];
}
let mi = "label";
function vi(e, t) {
  var n;
  let r = Te(), o = cn(), i = Er(), l = sn(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: f = !1, ...c } = e, m = ye(t);
  U(() => o.register(s), [s, o.register]);
  let p = W((y) => {
    let w = y.currentTarget;
    if (w instanceof HTMLLabelElement && y.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(y), w instanceof HTMLLabelElement) {
      let b = document.getElementById(w.htmlFor);
      if (b) {
        let x = b.getAttribute("disabled");
        if (x === "true" || x === "")
          return;
        let T = b.getAttribute("aria-disabled");
        if (T === "true" || T === "")
          return;
        (b instanceof HTMLInputElement && (b.type === "radio" || b.type === "checkbox") || b.role === "radio" || b.role === "checkbox" || b.role === "switch") && b.click(), b.focus({ preventScroll: !0 });
      }
    }
  }), d = l || !1, v = X(() => ({ ...o.slot, disabled: d }), [o.slot, d]), g = { ref: m, ...o.props, id: s, htmlFor: a, onClick: p };
  return f && ("onClick" in g && (delete g.htmlFor, delete g.onClick), "onClick" in c && delete c.onClick), ce({ ourProps: g, theirProps: c, slot: v, defaultTag: a ? mi : "div", name: o.name || "Label" });
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
  let n = e === null ? null : "current" in e ? e.current : e, [r, o] = sr(() => ({}), {}), i = X(() => hi(n), [n, r]);
  return U(() => {
    if (!n)
      return;
    let l = new ResizeObserver(o);
    return l.observe(n), () => {
      l.disconnect();
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
function Sr(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let l = t[o].call(n, ...i);
    l && (n = l, r.forEach((s) => s()));
  } };
}
function Pr(e) {
  return Oo(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let wi = new yi(() => Sr(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1)
    return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function fn(e, t) {
  let n = wi.get(t), r = Te(), o = Pr(n);
  if (U(() => {
    if (e)
      return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e)
    return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
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
  U(() => {
    var o, i;
    if (!r)
      return;
    let l = be();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : [])
      a && l.add(Hn(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a)
        continue;
      let f = He(a);
      if (!f)
        continue;
      let c = a.parentElement;
      for (; c && c !== f.body; ) {
        for (let m of c.children)
          s.some((p) => m.contains(p)) || l.add(Hn(m));
        c = c.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function xi(e, t, n) {
  let r = lt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  Z(() => {
    if (!e)
      return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o)
      return;
    let i = be();
    if (typeof ResizeObserver < "u") {
      let l = new ResizeObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let l = new IntersectionObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let tn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Ri = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var nn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(nn || {}), $i = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))($i || {}), Ti = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ti || {});
function Cr(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(tn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Si(e = document.body) {
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
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ai(e, t) {
  return Ii(Cr(), t, { relativeTo: e });
}
function Ii(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? Or(e) : e : t & 64 ? Si(e) : Cr(e);
  o.length > 0 && l.length > 1 && (l = l.filter((d) => !o.some((v) => v != null && "current" in v ? (v == null ? void 0 : v.current) === d : v === d))), r = r ?? i.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8)
      return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = t & 32 ? { preventScroll: !0 } : {}, c = 0, m = l.length, p;
  do {
    if (c >= m || c + m <= 0)
      return 0;
    let d = a + c;
    if (t & 16)
      d = (d + m) % m;
    else {
      if (d < 0)
        return 3;
      if (d >= m)
        return 1;
    }
    p = l[d], p == null || p.focus(f), c += s;
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
  Z(() => {
    if (!e)
      return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Di(e, t, n, r) {
  let o = lt(n);
  Z(() => {
    if (!e)
      return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const Bn = 30;
function ki(e, t, n) {
  let r = fn(e, "outside-click"), o = lt(n), i = le(function(a, f) {
    if (a.defaultPrevented)
      return;
    let c = f(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected)
      return;
    let m = function p(d) {
      return typeof d == "function" ? p(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let p of m) {
      if (p === null)
        continue;
      let d = p instanceof HTMLElement ? p : p.current;
      if (d != null && d.contains(c) || a.composed && a.composedPath().includes(d))
        return;
    }
    return !pn(c, dn.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o]), l = B(null);
  Xe(r, "pointerdown", (a) => {
    var f, c;
    l.current = ((c = (f = a.composedPath) == null ? void 0 : f.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Xe(r, "mousedown", (a) => {
    var f, c;
    l.current = ((c = (f = a.composedPath) == null ? void 0 : f.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Xe(r, "click", (a) => {
    Li() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = B({ x: 0, y: 0 });
  Xe(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), Xe(r, "touchend", (a) => {
    let f = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(f.x - s.current.x) >= Bn || Math.abs(f.y - s.current.y) >= Bn))
      return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), Di(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function mn(...e) {
  return X(() => He(...e), [...e]);
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
  let [n, r] = q(() => Vn(e));
  return U(() => {
    r(Vn(e));
  }, [e.type, e.as]), U(() => {
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
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement)
          try {
            let a = s.target.closest("a");
            if (!a)
              return;
            let { hash: f } = new URL(a.href), c = e.querySelector(f);
            c && !r(c) && (l = c);
          } catch {
          }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement)
          if (r(s.target)) {
            let a = s.target;
            for (; a.parentElement && r(a.parentElement); )
              a = a.parentElement;
            t.style(a, "overscrollBehavior", "contain");
          } else
            t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT")
            return;
          if (r(s.target)) {
            let a = s.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); )
              a = a.parentElement;
            a.dataset.headlessuiPortal === "" && s.preventDefault();
          } else
            s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let a = (s = window.scrollY) != null ? s : window.pageYOffset;
        i !== a && window.scrollTo(0, i), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
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
let Ce = Sr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
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
  return U(() => {
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
  let [t, n] = q(e), r = le((a) => n(a), [t]), o = le((a) => n((f) => f | a), [t]), i = le((a) => (t & a) === a, [t]), l = le((a) => n((f) => f & ~a), [n]), s = le((a) => n((f) => f ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var zi = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(zi || {});
function Gi(e) {
  let t = {};
  for (let n in e)
    e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function qi(e, t, n, r) {
  let [o, i] = q(n), { hasFlag: l, addFlag: s, removeFlag: a } = Ki(e && o ? 3 : 0), f = B(!1), c = B(!1), m = Rt();
  return U(function p() {
    var d;
    if (!e)
      return;
    n && i(!0);
    let v = t.current;
    return v ? ((d = r == null ? void 0 : r.start) == null || d.call(r, n), Xi(v, { inFlight: f, prepare() {
      c.current ? c.current = !1 : c.current = f.current, f.current = !0, !c.current && (n ? (s(3), a(4)) : (s(4), a(2)));
    }, run() {
      c.current ? n ? (a(3), s(4)) : (a(4), s(3)) : n ? a(1) : s(1);
    }, done() {
      var g;
      c.current && typeof v.getAnimations == "function" && v.getAnimations().length > 0 || (f.current = !1, a(7), n || i(!1), (g = r == null ? void 0 : r.end) == null || g.call(r, n));
    } })) : n ? (s(3), m.nextFrame(() => p())) : void 0;
  }, [e, n, t, m]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
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
  let { transitionDuration: o, transitionDelay: i } = getComputedStyle(e), [l, s] = [o, i].map((f) => {
    let [c = 0] = f.split(",").filter(Boolean).map((m) => m.includes("ms") ? parseFloat(m) : parseFloat(m) * 1e3).sort((m, p) => p - m);
    return c;
  }), a = l + s;
  if (a !== 0) {
    let f = r.group((c) => {
      let m = c.setTimeout(() => {
        n(), c.dispose();
      }, a);
      c.addEventListener(e, "transitionrun", (p) => {
        p.target === p.currentTarget && (m(), c.addEventListener(e, "transitioncancel", (d) => {
          d.target === d.currentTarget && (n(), f());
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
  Z(() => {
    o.current = n, i.current = r;
  }, [n, r]), U(() => {
    if (!t || !e)
      return;
    let l = He(t);
    if (!l)
      return;
    let s = o.current, a = i.current, f = Object.assign((m) => s(m), { acceptNode: s }), c = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, f, !1);
    for (; c.nextNode(); )
      a(c.currentNode);
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
function St(e) {
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
    if (St(t))
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
  const o = Mr(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = ue(o);
  return i ? t.concat(l, l.visualViewport || [], st(o) ? o : [], l.frameElement && n ? tt(l.frameElement) : []) : t.concat(o, tt(o, [], n));
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
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = wt(l)), [l, wt(l)];
}
function ll(e) {
  const t = wt(e);
  return [rn(e), t, rn(t)];
}
function rn(e) {
  return e.replace(/start|end/g, (t) => ol[t]);
}
function al(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function sl(e, t, n, r) {
  const o = ut(e);
  let i = al($e(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(rn)))), i;
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
  const i = Ie(t), l = kr(t), s = Dr(l), a = $e(t), f = i === "y", c = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (ut(t)) {
    case "start":
      d[l] -= p * (n && f ? -1 : 1);
      break;
    case "end":
      d[l] += p * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const fl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let f = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: m
  } = zn(f, r, a), p = r, d = {}, v = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: y,
      fn: w
    } = s[g], {
      x: b,
      y: x,
      data: T,
      reset: C
    } = await w({
      x: c,
      y: m,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: d,
      rects: f,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = b ?? c, m = x ?? m, d = {
      ...d,
      [y]: {
        ...d[y],
        ...T
      }
    }, C && v <= 50 && (v++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (f = C.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: m
    } = zn(f, p, a)), g = -1);
  }
  return {
    x: c,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: d
  };
};
async function Ct(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = Be(t, e), v = cl(d), y = s[p ? m === "floating" ? "reference" : "floating" : m], w = Et(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: c,
    strategy: a
  })), b = m === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), T = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Et(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: x,
    strategy: a
  }) : b);
  return {
    top: (w.top - C.top + v.top) / T.y,
    bottom: (C.bottom - w.bottom + v.bottom) / T.y,
    left: (w.left - C.left + v.left) / T.x,
    right: (C.right - w.right + v.right) / T.x
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
        rects: l,
        initialPlacement: s,
        platform: a,
        elements: f
      } = t, {
        mainAxis: c = !0,
        crossAxis: m = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...y
      } = Be(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = $e(o), b = Ie(s), x = $e(s) === s, T = await (a.isRTL == null ? void 0 : a.isRTL(f.floating)), C = p || (x || !g ? [wt(s)] : ll(s)), $ = v !== "none";
      !p && $ && C.push(...sl(s, g, v, T));
      const P = [s, ...C], M = await Ct(t, y), O = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && O.push(M[w]), m) {
        const N = il(o, l, T);
        O.push(M[N[0]], M[N[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: O
      }], !O.every((N) => N <= 0)) {
        var K, J;
        const N = (((K = i.flip) == null ? void 0 : K.index) || 0) + 1, S = P[N];
        if (S)
          return {
            data: {
              index: N,
              overflows: j
            },
            reset: {
              placement: S
            }
          };
        let Q = (J = j.filter((L) => L.overflows[0] <= 0).sort((L, V) => L.overflows[1] - V.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!Q)
          switch (d) {
            case "bestFit": {
              var H;
              const L = (H = j.filter((V) => {
                if ($) {
                  const k = Ie(V.placement);
                  return k === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  k === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((k) => k > 0).reduce((k, me) => k + me, 0)]).sort((V, k) => V[1] - k[1])[0]) == null ? void 0 : H[0];
              L && (Q = L);
              break;
            }
            case "initialPlacement":
              Q = s;
              break;
          }
        if (o !== Q)
          return {
            reset: {
              placement: Q
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = $e(n), s = ut(n), a = Ie(n) === "y", f = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, m = Be(t, e);
  let {
    mainAxis: p,
    crossAxis: d,
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
  return s && typeof v == "number" && (d = s === "end" ? v * -1 : v), a ? {
    x: d * c,
    y: p * f
  } : {
    x: p * f,
    y: d * c
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
        placement: l,
        middlewareData: s
      } = t, a = await pl(t, e);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: l
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
        crossAxis: l = !1,
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
        ...a
      } = Be(e, t), f = {
        x: n,
        y: r
      }, c = await Ct(t, a), m = Ie($e(o)), p = Lr(m);
      let d = f[p], v = f[m];
      if (i) {
        const y = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = d + c[y], x = d - c[w];
        d = Kn(b, d, x);
      }
      if (l) {
        const y = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = v + c[y], x = v - c[w];
        v = Kn(b, v, x);
      }
      const g = s.fn({
        ...t,
        [p]: d,
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
        apply: l = () => {
        },
        ...s
      } = Be(e, t), a = await Ct(t, s), f = $e(n), c = ut(n), m = Ie(n) === "y", {
        width: p,
        height: d
      } = r.floating;
      let v, g;
      f === "top" || f === "bottom" ? (v = f, g = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = f, v = c === "end" ? "top" : "bottom");
      const y = d - a.top - a.bottom, w = p - a.left - a.right, b = Ee(d - a[v], y), x = Ee(p - a[g], w), T = !t.middlewareData.shift;
      let C = b, $ = x;
      if (m ? $ = c || T ? Ee(x, w) : w : C = c || T ? Ee(b, y) : y, T && !c) {
        const M = se(a.left, 0), O = se(a.right, 0), j = se(a.top, 0), K = se(a.bottom, 0);
        m ? $ = p - 2 * (M !== 0 || O !== 0 ? M + O : se(a.left, a.right)) : C = d - 2 * (j !== 0 || K !== 0 ? j + K : se(a.top, a.bottom));
      }
      await l({
        ...t,
        availableWidth: $,
        availableHeight: C
      });
      const P = await o.getDimensions(i.floating);
      return p !== P.width || d !== P.height ? {
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
  const o = he(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = yt(n) !== i || yt(r) !== l;
  return s && (n = i, r = l), {
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
  let l = (i ? yt(n.width) : n.width) / r, s = (i ? yt(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
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
  let l = Re(1);
  t && (r ? ne(r) && (l = Ne(r)) : l = Ne(e));
  const s = bl(i, n, r) ? Nr(i) : Re(0);
  let a = (o.left + s.x) / l.x, f = (o.top + s.y) / l.y, c = o.width / l.x, m = o.height / l.y;
  if (i) {
    const p = ue(i), d = r && ne(r) ? ue(r) : r;
    let v = p, g = v.frameElement;
    for (; g && r && d !== v; ) {
      const y = Ne(g), w = g.getBoundingClientRect(), b = ve(g), x = w.left + (g.clientLeft + parseFloat(b.paddingLeft)) * y.x, T = w.top + (g.clientTop + parseFloat(b.paddingTop)) * y.y;
      a *= y.x, f *= y.y, c *= y.x, m *= y.y, a += x, f += T, v = ue(g), g = v.frameElement;
    }
  }
  return Et({
    width: c,
    height: m,
    x: a,
    y: f
  });
}
function yl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = we(r), s = t ? St(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Re(1);
  const c = Re(0), m = he(r);
  if ((m || !m && !i) && ((We(r) !== "body" || st(l)) && (a = Pt(r)), he(r))) {
    const p = Me(r);
    f = Ne(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - a.scrollLeft * f.x + c.x,
    y: n.y * f.y - a.scrollTop * f.y + c.y
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
  let l = -n.scrollLeft + jr(e);
  const s = -n.scrollTop;
  return ve(r).direction === "rtl" && (l += se(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function xl(e, t) {
  const n = ue(e), r = we(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const f = gn();
    (!f || f && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Rl(e, t) {
  const n = Me(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = he(e) ? Ne(e) : Re(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, f = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: f
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
  let l = i ? xe(e) : e;
  for (; ne(l) && !je(l); ) {
    const s = ve(l), a = vn(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || st(l) && !a && Hr(e, l)) ? r = r.filter((c) => c !== l) : o = s, l = xe(l);
  }
  return t.set(e, r), r;
}
function Tl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? St(t) ? [] : $l(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((f, c) => {
    const m = Gn(t, c, o);
    return f.top = se(m.top, f.top), f.right = Ee(m.right, f.right), f.bottom = Ee(m.bottom, f.bottom), f.left = se(m.left, f.left), f;
  }, Gn(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Sl(e) {
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
  const r = he(t), o = we(t), i = n === "fixed", l = Me(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Re(0);
  if (r || !r && !i)
    if ((We(t) !== "body" || st(o)) && (s = Pt(t)), r) {
      const m = Me(t, !0, i, t);
      a.x = m.x + t.clientLeft, a.y = m.y + t.clientTop;
    } else
      o && (a.x = jr(o));
  const f = l.left + s.scrollLeft - a.x, c = l.top + s.scrollTop - a.y;
  return {
    x: f,
    y: c,
    width: l.width,
    height: l.height
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
  if (St(e))
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
  getClippingRect: Tl,
  getOffsetParent: Wr,
  getElementRects: Cl,
  getClientRects: wl,
  getDimensions: Sl,
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
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const {
      left: f,
      top: c,
      width: m,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !m || !p)
      return;
    const d = vt(c), v = vt(o.clientWidth - (f + m)), g = vt(o.clientHeight - (c + p)), y = vt(f), b = {
      rootMargin: -d + "px " + -v + "px " + -g + "px " + -y + "px",
      threshold: se(0, Ee(1, a)) || 1
    };
    let x = !0;
    function T(C) {
      const $ = C[0].intersectionRatio;
      if ($ !== a) {
        if (!x)
          return l();
        $ ? l(!1, $) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, b);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function Il(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, f = hn(e), c = o || i ? [...f ? tt(f) : [], ...tt(t)] : [];
  c.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const m = f && s ? Al(f, n) : null;
  let p = -1, d = null;
  l && (d = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === f && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = d) == null || x.observe(t);
    })), n();
  }), f && !a && d.observe(f), d.observe(t));
  let v, g = a ? Me(e) : null;
  a && y();
  function y() {
    const w = Me(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, v = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    c.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), m == null || m(), (w = d) == null || w.disconnect(), d = null, a && cancelAnimationFrame(v);
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
var gt = typeof document < "u" ? ln : Z;
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
      floating: l
    } = {},
    transform: s = !0,
    whileElementsMounted: a,
    open: f
  } = e, [c, m] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = R.useState(r);
  xt(p, r) || d(r);
  const [v, g] = R.useState(null), [y, w] = R.useState(null), b = R.useCallback((L) => {
    L !== $.current && ($.current = L, g(L));
  }, []), x = R.useCallback((L) => {
    L !== P.current && (P.current = L, w(L));
  }, []), T = i || v, C = l || y, $ = R.useRef(null), P = R.useRef(null), M = R.useRef(c), O = a != null, j = Jn(a), K = Jn(o), J = R.useCallback(() => {
    if (!$.current || !P.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: p
    };
    K.current && (L.platform = K.current), _l($.current, P.current, L).then((V) => {
      const k = {
        ...V,
        isPositioned: !0
      };
      H.current && !xt(M.current, k) && (M.current = k, et.flushSync(() => {
        m(k);
      }));
    });
  }, [p, t, n, K]);
  gt(() => {
    f === !1 && M.current.isPositioned && (M.current.isPositioned = !1, m((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [f]);
  const H = R.useRef(!1);
  gt(() => (H.current = !0, () => {
    H.current = !1;
  }), []), gt(() => {
    if (T && ($.current = T), C && (P.current = C), T && C) {
      if (j.current)
        return j.current(T, C, J);
      J();
    }
  }, [T, C, J, j, O]);
  const N = R.useMemo(() => ({
    reference: $,
    floating: P,
    setReference: b,
    setFloating: x
  }), [b, x]), S = R.useMemo(() => ({
    reference: T,
    floating: C
  }), [T, C]), Q = R.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!S.floating)
      return L;
    const V = Xn(S.floating, c.x), k = Xn(S.floating, c.y);
    return s ? {
      ...L,
      transform: "translate(" + V + "px, " + k + "px)",
      ...Br(S.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: k
    };
  }, [n, s, S.floating, c.x, c.y]);
  return R.useMemo(() => ({
    ...c,
    update: J,
    refs: N,
    elements: S,
    floatingStyles: Q
  }), [c, J, N, S, Q]);
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
var on = typeof document < "u" ? ln : Z;
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
  } = e, o = zl(), i = R.useRef({}), [l] = R.useState(() => Xl()), s = Zl() != null;
  if (process.env.NODE_ENV !== "production") {
    const d = r.reference;
    d && !ne(d) && ql("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, f] = R.useState(r.reference), c = Yr((d, v, g) => {
    i.current.openEvent = d ? v : void 0, l.emit("openchange", {
      open: d,
      event: v,
      reason: g,
      nested: s
    }), n == null || n(d, v, g);
  }), m = R.useMemo(() => ({
    setPositionReference: f
  }), []), p = R.useMemo(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return R.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: p,
    events: l,
    floatingId: o,
    refs: m
  }), [t, c, p, l, o, m]);
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
  }), r = e.rootContext || n, o = r.elements, [i, l] = R.useState(null), [s, a] = R.useState(null), c = (o == null ? void 0 : o.reference) || i, m = R.useRef(null), p = ea();
  on(() => {
    c && (m.current = c);
  }, [c]);
  const d = Nl({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), v = R.useCallback((x) => {
    const T = ne(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      contextElement: x
    } : x;
    a(T), d.refs.setReference(T);
  }, [d.refs]), g = R.useCallback((x) => {
    (ne(x) || x === null) && (m.current = x, l(x)), (ne(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !ne(x)) && d.refs.setReference(x);
  }, [d.refs]), y = R.useMemo(() => ({
    ...d.refs,
    setReference: g,
    setPositionReference: v,
    domReference: m
  }), [d.refs, g, v]), w = R.useMemo(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), b = R.useMemo(() => ({
    ...d,
    ...r,
    refs: y,
    elements: w,
    nodeId: t
  }), [d, y, w, t, r]);
  return on(() => {
    r.dataRef.current.floatingContext = b;
    const x = p == null ? void 0 : p.nodesRef.current.find((T) => T.id === t);
    x && (x.context = b);
  }), R.useMemo(() => ({
    ...d,
    context: b,
    refs: y,
    elements: w
  }), [d, y, w, b]);
}
const er = "active", tr = "selected";
function Ut(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [er]: l,
      [tr]: s,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((a) => {
      let [f, c] = a;
      if (!(o && [er, tr].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof c == "function") {
            var m;
            (m = r.get(f)) == null || m.push(c), l[f] = function() {
              for (var p, d = arguments.length, v = new Array(d), g = 0; g < d; g++)
                v[g] = arguments[g];
              return (p = r.get(f)) == null ? void 0 : p.map((y) => y(...v)).find((y) => y !== void 0);
            };
          }
        } else
          l[f] = c;
    }), l), {})
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
  ), l = R.useCallback(
    (s) => Ut(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return R.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
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
      index: l = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: f,
      ...c
    } = Be(e, t), {
      rects: m,
      elements: {
        floating: p
      }
    } = t, d = n.current[l];
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || Gl('`placement` side must be "bottom" when using the `inner`', "middleware.")), !d)
      return {};
    const v = {
      ...t,
      ...await Vr(-d.offsetTop - p.clientTop - m.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, g = (f == null ? void 0 : f.current) || p, y = await Vt(nr(v, g.scrollHeight), c), w = await Vt(v, {
      ...c,
      elementContext: "reference"
    }), b = Math.max(0, y.top), x = v.y + b, T = Math.max(0, g.scrollHeight - b - Math.max(0, y.bottom));
    return g.style.maxHeight = T + "px", g.scrollTop = b, o && (g.offsetHeight < d.offsetHeight * Math.min(s, n.current.length - 1) - 1 || w.top >= -a || w.bottom >= -a ? et.flushSync(() => o(!0)) : et.flushSync(() => o(!1))), r && (r.current = await Vt(nr({
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
    scrollRef: l,
    onChange: s
  } = t, a = Yr(s), f = R.useRef(!1), c = R.useRef(null), m = R.useRef(null);
  R.useEffect(() => {
    if (!o)
      return;
    function d(g) {
      if (g.ctrlKey || !v || i.current == null)
        return;
      const y = g.deltaY, w = i.current.top >= -0.5, b = i.current.bottom >= -0.5, x = v.scrollHeight - v.clientHeight, T = y < 0 ? -1 : 1, C = y < 0 ? "max" : "min";
      v.scrollHeight <= v.clientHeight || (!w && y > 0 || !b && y < 0 ? (g.preventDefault(), et.flushSync(() => {
        a(($) => $ + Math[C](y, x * T));
      })) : /firefox/i.test(nl()) && (v.scrollTop += y));
    }
    const v = (l == null ? void 0 : l.current) || r.floating;
    if (n && v)
      return v.addEventListener("wheel", d), requestAnimationFrame(() => {
        c.current = v.scrollTop, i.current != null && (m.current = {
          ...i.current
        });
      }), () => {
        c.current = null, m.current = null, v.removeEventListener("wheel", d);
      };
  }, [o, n, r.floating, i, l, a]);
  const p = R.useMemo(() => ({
    onKeyDown() {
      f.current = !0;
    },
    onWheel() {
      f.current = !1;
    },
    onPointerMove() {
      f.current = !1;
    },
    onScroll() {
      const d = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !d || !f.current)) {
        if (c.current !== null) {
          const v = d.scrollTop - c.current;
          (i.current.bottom < -0.5 && v < -1 || i.current.top < -0.5 && v > 1) && et.flushSync(() => a((g) => g + v));
        }
        requestAnimationFrame(() => {
          c.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
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
  return X(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
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
  let t = oe(bn), n = X(() => e, [JSON.stringify(e, typeof HTMLElement < "u" ? (o, i) => i instanceof HTMLElement ? i.outerHTML : i : void 0)]);
  U(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = oe(Ve);
  return X(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let rr = 4;
function fa({ children: e, enabled: t = !0 }) {
  let [n, r] = q(null), [o, i] = q(0), l = B(null), [s, a] = q(null);
  da(s);
  let f = t && n !== null && s !== null, { to: c = "bottom", gap: m = 0, offset: p = 0, padding: d = 0, inner: v } = pa(n, s), [g, y = "center"] = c.split(" ");
  U(() => {
    f && i(0);
  }, [f]);
  let { refs: w, floatingStyles: b, context: x } = na({ open: f, placement: g === "selection" ? y === "center" ? "bottom" : `bottom-${y}` : y === "center" ? `${g}` : `${g}-${y}`, strategy: "absolute", transform: !1, middleware: [Vr({ mainAxis: g === "selection" ? 0 : m, crossAxis: p }), jl({ padding: d }), g !== "selection" && Hl({ padding: d }), g === "selection" && v ? oa({ ...v, padding: d, overflowRef: l, offset: o, minItemsVisible: rr, referenceOverflowThreshold: d, onFallbackChange(K) {
    var J, H;
    if (!K)
      return;
    let N = x.elements.floating;
    if (!N)
      return;
    let S = parseFloat(getComputedStyle(N).scrollPaddingBottom) || 0, Q = Math.min(rr, N.childElementCount), L = 0, V = 0;
    for (let k of (H = (J = x.elements.floating) == null ? void 0 : J.childNodes) != null ? H : [])
      if (k instanceof HTMLElement) {
        let me = k.offsetTop, Ue = me + k.clientHeight + S, Le = N.scrollTop, Ye = Le + N.clientHeight;
        if (me >= Le && Ue <= Ye)
          Q--;
        else {
          V = Math.max(0, Math.min(Ue, Ye) - Math.max(me, Le)), L = k.clientHeight;
          break;
        }
      }
    Q >= 1 && i((k) => {
      let me = L * Q - V + S;
      return k >= me ? k : me;
    });
  } }) : null, Wl({ padding: d, apply({ availableWidth: K, availableHeight: J, elements: H }) {
    Object.assign(H.floating.style, { overflow: "auto", maxWidth: `${K}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${J}px)` });
  } })].filter(Boolean), whileElementsMounted: Il }), [T = g, C = y] = x.placement.split("-");
  g === "selection" && (T = "selection");
  let $ = X(() => ({ anchor: [T, C].filter(Boolean).join(" ") }), [T, C]), P = ia(x, { overflowRef: l, onChange: i }), { getReferenceProps: M, getFloatingProps: O } = ra([P]), j = W((K) => {
    a(K), w.setFloating(K);
  });
  return R.createElement(bn.Provider, { value: r }, R.createElement(Ve.Provider, { value: { setFloating: j, setReference: w.setReference, styles: b, getReferenceProps: M, getFloatingProps: O, slot: $ } }, e));
}
function da(e) {
  U(() => {
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
  let i = Yt((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = Yt((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = Yt((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function Yt(e, t, n = void 0) {
  let r = Rt(), o = W((a, f) => {
    if (a == null)
      return [n, null];
    if (typeof a == "number")
      return [a, null];
    if (typeof a == "string") {
      if (!f)
        return [n, null];
      let c = or(a, f);
      return [c, (m) => {
        let p = Kr(a);
        {
          let d = p.map((v) => window.getComputedStyle(f).getPropertyValue(v));
          r.requestAnimationFrame(function v() {
            r.nextFrame(v);
            let g = !1;
            for (let [w, b] of p.entries()) {
              let x = window.getComputedStyle(f).getPropertyValue(b);
              if (d[w] !== x) {
                d[w] = x, g = !0;
                break;
              }
            }
            if (!g)
              return;
            let y = or(a, f);
            c !== y && (m(y), c = y);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = X(() => o(e, t)[0], [e, t]), [l = i, s] = q();
  return U(() => {
    let [a, f] = o(e, t);
    if (s(a), !!f)
      return f(s);
  }, [e, t]), l;
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
  Z(() => (n.current = !1, () => {
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
  let t = Ea(), n = oe(Gr), r = mn(e), [o, i] = q(() => {
    var l;
    if (!t && n !== null)
      return (l = n.current) != null ? l : null;
    if (Oe.isServer)
      return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s)
      return s;
    if (r === null)
      return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return Z(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), Z(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let zr = Fe, Ra = fe(function(e, t) {
  let n = e, r = B(null), o = ye(si((c) => {
    r.current = c;
  }), t), i = mn(r), l = xa(r), [s] = q(() => {
    var c;
    return Oe.isServer ? null : (c = i == null ? void 0 : i.createElement("div")) != null ? c : null;
  }), a = oe(Pa), f = ya();
  return U(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), U(() => {
    if (s && a)
      return a.register(s);
  }, [a, s]), ha(() => {
    var c;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((c = l.parentElement) == null || c.removeChild(l)));
  }), f ? !l || !s ? null : Ao(ce({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: zr, name: "Portal" }), s) : null;
});
function $a(e, t) {
  let n = ye(t), { enabled: r = !0, ...o } = e;
  return r ? re.createElement(Ra, { ...o, ref: n }) : ce({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: zr, name: "Portal" });
}
let Ta = Fe, Gr = ge(null);
function Sa(e, t) {
  let { target: n, ...r } = e, o = { ref: ye(t) };
  return re.createElement(Gr.Provider, { value: n }, ce({ ourProps: o, theirProps: r, defaultTag: Ta, name: "Popover.Group" }));
}
let Pa = ge(null), Ca = fe($a), Fa = fe(Sa), Oa = Object.assign(Ca, { Group: Fa }), Aa = "input";
function Ia(e, t) {
  let n = Te(), r = Er(), o = sn(), { id: i = r || `headlessui-input-${n}`, disabled: l = o || !1, autoFocus: s = !1, invalid: a = !1, ...f } = e, c = $r(), m = ui(), { isFocused: p, focusProps: d } = br({ autoFocus: s }), { isHovered: v, hoverProps: g } = hr({ isDisabled: l }), y = un({ ref: t, id: i, "aria-labelledby": c, "aria-describedby": m, "aria-invalid": a ? "" : void 0, disabled: l || void 0, autoFocus: s }, d, g), w = X(() => ({ disabled: l, invalid: a, hover: v, focus: p, autofocus: s }), [l, a, v, p, s]);
  return ce({ ourProps: y, theirProps: f, slot: w, defaultTag: Aa, name: "Input" });
}
let Ma = fe(Ia);
function La(e, t) {
  let n = B({ left: 0, top: 0 });
  if (U(() => {
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
  let l = i ? (n = o.innerText) != null ? n : "" : r;
  return ir.test(l) && (l = l.replace(ir, "")), l;
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
        let l = i.getAttribute("aria-label");
        return typeof l == "string" ? l.trim() : lr(i).trim();
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
  var n, r, o, i, l;
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
      let m = e.items[c].dataRef.current.domRef, p = Kt(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (d) => d.id, resolveDisabled: (d) => d.dataRef.current.disabled });
      if (p !== null) {
        let d = e.items[p].dataRef.current.domRef;
        if (((r = m.current) == null ? void 0 : r.previousElementSibling) === d.current || ((o = d.current) == null ? void 0 : o.previousElementSibling) === null)
          return { ...s, activeItemIndex: p };
      }
    }
  } else if (t.focus === te.Next) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let m = e.items[c].dataRef.current.domRef, p = Kt(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (d) => d.id, resolveDisabled: (d) => d.dataRef.current.disabled });
      if (p !== null) {
        let d = e.items[p].dataRef.current.domRef;
        if (((i = m.current) == null ? void 0 : i.nextElementSibling) === d.current || ((l = d.current) == null ? void 0 : l.nextElementSibling) === null)
          return { ...s, activeItemIndex: p };
      }
    }
  }
  let a = zt(e), f = Kt(t, { resolveItems: () => a.items, resolveActiveIndex: () => a.activeItemIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
  return { ...s, ...a, activeItemIndex: f };
}, 3: (e, t) => {
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), o = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((l) => {
    var s;
    return ((s = l.dataRef.current.textValue) == null ? void 0 : s.startsWith(r)) && !l.dataRef.current.disabled;
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
  let { __demoMode: n = !1, ...r } = e, o = sr(Wa, { __demoMode: n, menuState: n ? 0 : 1, buttonRef: Dn(), itemsRef: Dn(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i, itemsRef: l, buttonRef: s }, a] = o, f = ye(t);
  ki(i === 0, [s, l], (d, v) => {
    var g;
    a({ type: 1 }), pn(v, dn.Loose) || (d.preventDefault(), (g = s.current) == null || g.focus());
  });
  let c = W(() => {
    a({ type: 1 });
  }), m = X(() => ({ open: i === 0, close: c }), [i, c]), p = { ref: f };
  return re.createElement(fa, null, re.createElement(wn.Provider, { value: o }, re.createElement(va, { value: at(i, { 0: rt.Open, 1: rt.Closed }) }, ce({ ourProps: p, theirProps: r, slot: m, defaultTag: Ba, name: "Menu" }))));
}
let Ua = "button";
function Ya(e, t) {
  var n;
  let r = Te(), { id: o = `headlessui-menu-button-${r}`, disabled: i = !1, autoFocus: l = !1, ...s } = e, [a, f] = Ft("Menu.Button"), c = sa(), m = ye(a.buttonRef, t, aa()), p = W((P) => {
    switch (P.key) {
      case ee.Space:
      case ee.Enter:
      case ee.ArrowDown:
        P.preventDefault(), P.stopPropagation(), Je(() => f({ type: 0 })), f({ type: 2, focus: te.First });
        break;
      case ee.ArrowUp:
        P.preventDefault(), P.stopPropagation(), Je(() => f({ type: 0 })), f({ type: 2, focus: te.Last });
        break;
    }
  }), d = W((P) => {
    switch (P.key) {
      case ee.Space:
        P.preventDefault();
        break;
    }
  }), v = W((P) => {
    var M;
    if (li(P.currentTarget))
      return P.preventDefault();
    i || (a.menuState === 0 ? (Je(() => f({ type: 1 })), (M = a.buttonRef.current) == null || M.focus({ preventScroll: !0 })) : (P.preventDefault(), f({ type: 0 })));
  }), { isFocusVisible: g, focusProps: y } = br({ autoFocus: l }), { isHovered: w, hoverProps: b } = hr({ isDisabled: i }), { pressed: x, pressProps: T } = ti({ disabled: i }), C = X(() => ({ open: a.menuState === 0, active: x || a.menuState === 0, disabled: i, hover: w, focus: g, autofocus: l }), [a, w, g, x, i, l]), $ = un(c(), { ref: m, id: o, type: _i(e, a.buttonRef), "aria-haspopup": "menu", "aria-controls": (n = a.itemsRef.current) == null ? void 0 : n.id, "aria-expanded": a.menuState === 0, disabled: i || void 0, autoFocus: l, onKeyDown: p, onKeyUp: d, onClick: v }, y, b, T);
  return ce({ ourProps: $, theirProps: s, slot: C, defaultTag: Ua, name: "Menu.Button" });
}
let Ka = "div", za = Zt.RenderStrategy | Zt.Static;
function Ga(e, t) {
  var n, r;
  let o = Te(), { id: i = `headlessui-menu-items-${o}`, anchor: l, portal: s = !1, modal: a = !0, transition: f = !1, ...c } = e, m = la(l), [p, d] = Ft("Menu.Items"), [v, g] = ca(m), y = ua(), w = ye(p.itemsRef, t, m ? v : null), b = mn(p.itemsRef);
  m && (s = !0);
  let x = ma(), [T, C] = qi(f, p.itemsRef, x !== null ? (x & rt.Open) === rt.Open : p.menuState === 0);
  xi(T, p.buttonRef, () => {
    d({ type: 1 });
  });
  let $ = p.__demoMode ? !1 : a && p.menuState === 0;
  Vi($, b);
  let P = p.__demoMode ? !1 : a && p.menuState === 0;
  Ei(P, { allowed: W(() => [p.buttonRef.current, p.itemsRef.current]) });
  let M = p.menuState !== 0, O = La(M, p.buttonRef) ? !1 : T;
  Z(() => {
    let S = p.itemsRef.current;
    S && p.menuState === 0 && S !== (b == null ? void 0 : b.activeElement) && S.focus({ preventScroll: !0 });
  }, [p.menuState, p.itemsRef, b, p.itemsRef.current]), Zi(p.menuState === 0, { container: p.itemsRef.current, accept(S) {
    return S.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : S.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(S) {
    S.setAttribute("role", "none");
  } });
  let j = Rt(), K = W((S) => {
    var Q, L, V;
    switch (j.dispose(), S.key) {
      case ee.Space:
        if (p.searchQuery !== "")
          return S.preventDefault(), S.stopPropagation(), d({ type: 3, value: S.key });
      case ee.Enter:
        if (S.preventDefault(), S.stopPropagation(), d({ type: 1 }), p.activeItemIndex !== null) {
          let { dataRef: k } = p.items[p.activeItemIndex];
          (L = (Q = k.current) == null ? void 0 : Q.domRef.current) == null || L.click();
        }
        Fr(p.buttonRef.current);
        break;
      case ee.ArrowDown:
        return S.preventDefault(), S.stopPropagation(), d({ type: 2, focus: te.Next });
      case ee.ArrowUp:
        return S.preventDefault(), S.stopPropagation(), d({ type: 2, focus: te.Previous });
      case ee.Home:
      case ee.PageUp:
        return S.preventDefault(), S.stopPropagation(), d({ type: 2, focus: te.First });
      case ee.End:
      case ee.PageDown:
        return S.preventDefault(), S.stopPropagation(), d({ type: 2, focus: te.Last });
      case ee.Escape:
        S.preventDefault(), S.stopPropagation(), Je(() => d({ type: 1 })), (V = p.buttonRef.current) == null || V.focus({ preventScroll: !0 });
        break;
      case ee.Tab:
        S.preventDefault(), S.stopPropagation(), Je(() => d({ type: 1 })), Ai(p.buttonRef.current, S.shiftKey ? nn.Previous : nn.Next);
        break;
      default:
        S.key.length === 1 && (d({ type: 3, value: S.key }), j.setTimeout(() => d({ type: 4 }), 350));
        break;
    }
  }), J = W((S) => {
    switch (S.key) {
      case ee.Space:
        S.preventDefault();
        break;
    }
  }), H = X(() => ({ open: p.menuState === 0 }), [p.menuState]), N = un(m ? y() : {}, { "aria-activedescendant": p.activeItemIndex === null || (n = p.items[p.activeItemIndex]) == null ? void 0 : n.id, "aria-labelledby": (r = p.buttonRef.current) == null ? void 0 : r.id, id: i, onKeyDown: K, onKeyUp: J, role: "menu", tabIndex: p.menuState === 0 ? 0 : void 0, ref: w, style: { ...c.style, ...g, "--button-width": bi(p.buttonRef, !0).width }, ...Gi(C) });
  return re.createElement(Oa, { enabled: s ? e.static || T : !1 }, ce({ ourProps: N, theirProps: c, slot: H, defaultTag: Ka, features: za, visible: O, name: "Menu.Items" }));
}
let qa = Fe;
function Xa(e, t) {
  let n = Te(), { id: r = `headlessui-menu-item-${n}`, disabled: o = !1, ...i } = e, [l, s] = Ft("Menu.Item"), a = l.activeItemIndex !== null ? l.items[l.activeItemIndex].id === r : !1, f = B(null), c = ye(t, f);
  U(() => {
    if (!l.__demoMode && l.menuState === 0 && a && l.activationTrigger !== 0)
      return be().requestAnimationFrame(() => {
        var O, j;
        (j = (O = f.current) == null ? void 0 : O.scrollIntoView) == null || j.call(O, { block: "nearest" });
      });
  }, [l.__demoMode, f, a, l.menuState, l.activationTrigger, l.activeItemIndex]);
  let m = ka(f), p = B({ disabled: o, domRef: f, get textValue() {
    return m();
  } });
  U(() => {
    p.current.disabled = o;
  }, [p, o]), U(() => (s({ type: 5, id: r, dataRef: p }), () => s({ type: 6, id: r })), [p, r]);
  let d = W(() => {
    s({ type: 1 });
  }), v = W((O) => {
    if (o)
      return O.preventDefault();
    s({ type: 1 }), Fr(l.buttonRef.current);
  }), g = W(() => {
    if (o)
      return s({ type: 2, focus: te.Nothing });
    s({ type: 2, focus: te.Specific, id: r });
  }), y = Ui(), w = W((O) => {
    y.update(O), !o && (a || s({ type: 2, focus: te.Specific, id: r, trigger: 0 }));
  }), b = W((O) => {
    y.wasMoved(O) && (o || a || s({ type: 2, focus: te.Specific, id: r, trigger: 0 }));
  }), x = W((O) => {
    y.wasMoved(O) && (o || a && s({ type: 2, focus: te.Nothing }));
  }), [T, C] = Tr(), [$, P] = ci(), M = X(() => ({ active: a, focus: a, disabled: o, close: d }), [a, o, d]);
  return re.createElement(C, null, re.createElement(P, null, ce({ ourProps: { id: r, ref: c, role: "menuitem", tabIndex: o === !0 ? void 0 : -1, "aria-disabled": o === !0 ? !0 : void 0, "aria-labelledby": T, "aria-describedby": $, disabled: void 0, onClick: v, onFocus: g, onPointerEnter: w, onMouseEnter: w, onPointerMove: b, onMouseMove: b, onPointerLeave: x, onMouseLeave: x }, theirProps: i, slot: M, defaultTag: qa, name: "Menu.Item" })));
}
let Ja = "div";
function Qa(e, t) {
  let [n, r] = Tr();
  return re.createElement(r, null, ce({ ourProps: { ref: t, "aria-labelledby": n, role: "group" }, theirProps: e, slot: {}, defaultTag: Ja, name: "Menu.Section" }));
}
let Za = "header";
function es(e, t) {
  let n = Te(), { id: r = `headlessui-menu-heading-${n}`, ...o } = e, i = cn();
  U(() => i.register(r), [r, i.register]);
  let l = { id: r, ref: t, role: "presentation", ...i.props };
  return ce({ ourProps: l, theirProps: o, slot: {}, defaultTag: Za, name: "Menu.Heading" });
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
const vs = /* @__PURE__ */ R.forwardRef(ms), ar = vs, ws = ({ multiple: e = !1, search: t = !1, options: n, selectedOptions: r = [], optionLabel: o, inputLabel: i, onChange: l }) => {
  var C;
  const s = o && n[0].hasOwnProperty(o) ? o : "label", a = [...n], [f, c] = q([]), [m, p] = q(a), [d, v] = q("");
  Z(() => {
    c([]);
  }, [e]), Z(() => {
    c(g(a.filter(($) => r.includes($.id))));
  }, [n]);
  const g = ($) => $.filter((P) => n.some((M) => P.id == M.id)), y = ($) => {
    let P = f.find((O) => O.id === $.id), M = e ? [...f, ...P ? [] : [$]] : [$];
    c(M), l && l(M);
  }, w = ($, P) => {
    $.stopPropagation();
    let M = [...f].filter((O) => O.id !== P.id);
    c(M), l && l(M);
  }, b = ($) => {
    v($);
    const M = [...[...a].filter((O) => O[s].includes($))].map((O) => {
      let j = O[s];
      return O.highlightedLabel = j.replace(
        new RegExp($ + "(?!([^<]+)?<)", "gi"),
        "<mark class='!bg-teal-400'>$&</mark>"
      ), O;
    });
    p(M);
  }, x = () => {
    const $ = [...a].map((P) => (P.highlightedLabel = P[s], P));
    p($), v("");
  }, T = () => {
    v(""), b("");
  };
  return /* @__PURE__ */ G.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-3", children: [
    /* @__PURE__ */ G.jsx("div", { className: "w-full col-span-1 text-left text-gray-600 text-sm break-words pr-3 pl-2 py-2 font-semibold align-middle", children: i }),
    /* @__PURE__ */ G.jsxs(as, { as: "div", className: `${i ? "col-span-5" : "col-span-6"} w-full relative inline-block text-left pt-0 content-center`, children: [
      /* @__PURE__ */ G.jsxs(qr, { onClick: x, className: "top-0 inline-flex w-full flex text-left h-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none", children: [
        /* @__PURE__ */ G.jsx("div", { className: "w-full truncate", children: e ? f.map(($) => /* @__PURE__ */ G.jsxs("span", { className: "truncate rounded-full font-light mr-1 inline-flex border-transparent items-center bg-gray-100 px-2 py-0 text-xs text-gray-600", children: [
          $[s],
          /* @__PURE__ */ G.jsx(ar, { className: "pl-2 h-6 w-6 text-gray-500", onClick: (P) => w(P, $) })
        ] }, $.id)) : /* @__PURE__ */ G.jsx("span", { className: "font-light text-gray-600", children: ((C = f[0]) == null ? void 0 : C[s]) || "" }) }),
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
                  onChange: ($) => b($.target.value),
                  value: d
                }
              ),
              d && /* @__PURE__ */ G.jsx(ar, { className: "absolute inset-y-0 end-2 flex items-center cursor-pointer ps-3 size-7 mt-1 text-gray-500 text-slate-400", onClick: T })
            ] }),
            /* @__PURE__ */ G.jsx("div", { className: "py-0", children: m.map(($, P) => /* @__PURE__ */ G.jsx(Jr, { className: "data-[focus]:bg-emerald-50 data-[focus]:text-gray-900", as: "div", onClick: () => y($), children: /* @__PURE__ */ G.jsx("div", { className: "block px-4 py-2 text-sm text-gray-700 font-light", children: /* @__PURE__ */ G.jsx("div", { dangerouslySetInnerHTML: { __html: $.highlightedLabel || $[s] } }) }) }, P)) })
          ]
        }
      )
    ] })
  ] });
};
export {
  ws as Dropdown
};
