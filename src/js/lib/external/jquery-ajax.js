/* eslint-disable */

// jquery-ajax-crossorigin
{
  /*
   jQuery AJAX Cross Origin v1.3 (http://www.ajax-cross-origin.com)
   jQuery plugin to bypass Same-origin_policy using Google Apps Script.
  
   references:
   http://en.wikipedia.org/wiki/Same-origin_policy
   http://www.google.com/script/start/
  
   (c) 2014, Writen by Erez Ninio. site: www.dealhotelbook.com
  
   Licensed under the Creative Commons Attribution 3.0 Unported License.
   For details, see http://creativecommons.org/licenses/by/3.0/.
  */

  var proxyJsonp = 'https://script.google.com/macros/s/AKfycbwmqG55tt2d2FcT_WQ3WjCSKmtyFpkOcdprSITn45-4UgVJnzp9/exec';
  jQuery.ajaxOrig = jQuery.ajax;
  jQuery.ajax = function (a, b) {
    function d(a) {
      a = encodeURI(a).replace(/&/g, '%26');
      return proxyJsonp + '?url=' + a + '&callback=?';
    }
    var c = 'object' === typeof a ? a : b || {};
    c.url = c.url || ('string' === typeof a ? a : '');
    var c = jQuery.ajaxSetup({}, c),
      e = (function (a, c) {
        var b = document.createElement('a');
        b.href = a;
        return c.crossOrigin && 'http' == a.substr(0, 4).toLowerCase() && 'localhost' != b.hostname && '127.0.0.1' != b.hostname && b.hostname != window.location.hostname;
      })(c.url, c);
    c.proxy && 0 < c.proxy.length && ((proxyJsonp = c.proxy), 'object' === typeof a ? (a.crossDomain = !0) : 'object' === typeof b && (b.crossDomain = !0));
    e &&
      ('object' === typeof a
        ? a.url && ((a.url = d(a.url)), a.charset && (a.url += '&charset=' + a.charset), (a.dataType = 'json'))
        : 'string' === typeof a && 'object' === typeof b && ((a = d(a)), b.charset && (a += '&charset=' + b.charset), (b.dataType = 'json')));
    return jQuery.ajaxOrig.apply(this, arguments);
  };
  jQuery.ajax.prototype = new jQuery.ajaxOrig();
  jQuery.ajax.prototype.constructor = jQuery.ajax;
}
// numeric
{
  ('use strict');
  var numeric = 'undefined' == typeof exports ? function () {} : exports;
  'undefined' != typeof global && (global.numeric = numeric),
    (numeric.version = '1.2.6'),
    (numeric.bench = function (r, n) {
      var e, i, t;
      for (void 0 === n && (n = 15), i = 0.5, e = new Date(); ; ) {
        for (t = i *= 2; t > 3; t -= 4) r(), r(), r(), r();
        for (; t > 0; ) r(), t--;
        if (new Date() - e > n) break;
      }
      for (t = i; t > 3; t -= 4) r(), r(), r(), r();
      for (; t > 0; ) r(), t--;
      return (1e3 * (3 * i - 1)) / (new Date() - e);
    }),
    (numeric._myIndexOf = function (r) {
      var n,
        e = this.length;
      for (n = 0; n < e; ++n) if (this[n] === r) return n;
      return -1;
    }),
    (numeric.myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf : numeric._myIndexOf),
    (numeric.Function = Function),
    (numeric.precision = 4),
    (numeric.largeArray = 50),
    (numeric.prettyPrint = function (r) {
      var n = [];
      return (
        (function r(e) {
          var i;
          if (void 0 === e) return n.push(Array(numeric.precision + 8).join(' ')), !1;
          if ('string' == typeof e) return n.push('"' + e + '"'), !1;
          if ('boolean' == typeof e) return n.push(e.toString()), !1;
          if ('number' == typeof e) {
            var t = (function r(n) {
                if (0 === n) return '0';
                if (isNaN(n)) return 'NaN';
                if (n < 0) return '-' + r(-n);
                if (isFinite(n)) {
                  var e = Math.floor(Math.log(n) / Math.log(10)),
                    i = n / Math.pow(10, e),
                    t = i.toPrecision(numeric.precision);
                  return 10 === parseFloat(t) && (e++, (t = (i = 1).toPrecision(numeric.precision))), parseFloat(t).toString() + 'e' + e.toString();
                }
                return 'Infinity';
              })(e),
              u = e.toPrecision(numeric.precision),
              o = parseFloat(e.toString()).toString(),
              c = [t, u, o, parseFloat(u).toString(), parseFloat(o).toString()];
            for (i = 1; i < c.length; i++) c[i].length < t.length && (t = c[i]);
            return n.push(Array(numeric.precision + 8 - t.length).join(' ') + t), !1;
          }
          if (null === e) return n.push('null'), !1;
          if ('function' == typeof e) {
            n.push(e.toString());
            var a = !1;
            for (i in e) e.hasOwnProperty(i) && (a ? n.push(',\n') : n.push('\n{'), (a = !0), n.push(i), n.push(': \n'), r(e[i]));
            return a && n.push('}\n'), !0;
          }
          if (e instanceof Array) {
            if (e.length > numeric.largeArray) return n.push('...Large Array...'), !0;
            for (a = !1, n.push('['), i = 0; i < e.length; i++) i > 0 && (n.push(','), a && n.push('\n ')), (a = r(e[i]));
            return n.push(']'), !0;
          }
          n.push('{');
          a = !1;
          for (i in e) e.hasOwnProperty(i) && (a && n.push(',\n'), (a = !0), n.push(i), n.push(': \n'), r(e[i]));
          return n.push('}'), !0;
        })(r),
        n.join('')
      );
    }),
    (numeric.parseDate = function (r) {
      return (function r(n) {
        if ('string' == typeof n) return Date.parse(n.replace(/-/g, '/'));
        if (!(n instanceof Array)) throw new Error('parseDate: parameter must be arrays of strings');
        var e,
          i = [];
        for (e = 0; e < n.length; e++) i[e] = r(n[e]);
        return i;
      })(r);
    }),
    (numeric.parseFloat = function (r) {
      return (function r(n) {
        if ('string' == typeof n) return parseFloat(n);
        if (!(n instanceof Array)) throw new Error('parseFloat: parameter must be arrays of strings');
        var e,
          i = [];
        for (e = 0; e < n.length; e++) i[e] = r(n[e]);
        return i;
      })(r);
    }),
    (numeric.parseCSV = function (r) {
      var n,
        e,
        i,
        t = r.split('\n'),
        u = [],
        o = /(([^'",]*)|('[^']*')|("[^"]*")),/g,
        c = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,
        a = 0;
      for (e = 0; e < t.length; e++) {
        var f,
          m = (t[e] + ',').match(o);
        if (m.length > 0) {
          for (u[a] = [], n = 0; n < m.length; n++) (f = (i = m[n]).substr(0, i.length - 1)), c.test(f) ? (u[a][n] = parseFloat(f)) : (u[a][n] = f);
          a++;
        }
      }
      return u;
    }),
    (numeric.toCSV = function (r) {
      var n,
        e,
        i,
        t,
        u,
        o = numeric.dim(r);
      for (i = o[0], o[1], u = [], n = 0; n < i; n++) {
        for (t = [], e = 0; e < i; e++) t[e] = r[n][e].toString();
        u[n] = t.join(', ');
      }
      return u.join('\n') + '\n';
    }),
    (numeric.getURL = function (r) {
      var n = new XMLHttpRequest();
      return n.open('GET', r, !1), n.send(), n;
    }),
    (numeric.imageURL = function (r) {
      function n(r, n, e) {
        void 0 === n && (n = 0), void 0 === e && (e = r.length);
        var i,
          t = [
            0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047,
            2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487,
            1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206,
            2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974,
            1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253,
            3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925,
            453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092,
            3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948,
            654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443,
            3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755,
            2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626,
            1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
            2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233,
            1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225,
            3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992,
            534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896,
            3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863,
            817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
            3272380065, 1510334235, 755167117,
          ],
          u = -1;
        r.length;
        for (i = n; i < e; i++) u = (u >>> 8) ^ t[255 & (u ^ r[i])];
        return -1 ^ u;
      }
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f,
        m,
        s,
        h = r[0].length,
        l = r[0][0].length,
        p = [
          137,
          80,
          78,
          71,
          13,
          10,
          26,
          10,
          0,
          0,
          0,
          13,
          73,
          72,
          68,
          82,
          (l >> 24) & 255,
          (l >> 16) & 255,
          (l >> 8) & 255,
          255 & l,
          (h >> 24) & 255,
          (h >> 16) & 255,
          (h >> 8) & 255,
          255 & h,
          8,
          2,
          0,
          0,
          0,
          -1,
          -2,
          -3,
          -4,
          -5,
          -6,
          -7,
          -8,
          73,
          68,
          65,
          84,
          8,
          29,
        ];
      for (s = n(p, 12, 29), p[29] = (s >> 24) & 255, p[30] = (s >> 16) & 255, p[31] = (s >> 8) & 255, p[32] = 255 & s, e = 1, i = 0, a = 0; a < h; a++) {
        for (
          a < h - 1 ? p.push(0) : p.push(1),
            o = (3 * l + 1 + (0 === a)) & 255,
            c = ((3 * l + 1 + (0 === a)) >> 8) & 255,
            p.push(o),
            p.push(c),
            p.push(255 & ~o),
            p.push(255 & ~c),
            0 === a && p.push(0),
            f = 0;
          f < l;
          f++
        )
          for (t = 0; t < 3; t++) (i = (i + (e = (e + (o = (o = r[t][a][f]) > 255 ? 255 : o < 0 ? 0 : Math.round(o))) % 65521)) % 65521), p.push(o);
        p.push(0);
      }
      return (
        (m = (i << 16) + e),
        p.push((m >> 24) & 255),
        p.push((m >> 16) & 255),
        p.push((m >> 8) & 255),
        p.push(255 & m),
        (u = p.length - 41),
        (p[33] = (u >> 24) & 255),
        (p[34] = (u >> 16) & 255),
        (p[35] = (u >> 8) & 255),
        (p[36] = 255 & u),
        (s = n(p, 37)),
        p.push((s >> 24) & 255),
        p.push((s >> 16) & 255),
        p.push((s >> 8) & 255),
        p.push(255 & s),
        p.push(0),
        p.push(0),
        p.push(0),
        p.push(0),
        p.push(73),
        p.push(69),
        p.push(78),
        p.push(68),
        p.push(174),
        p.push(66),
        p.push(96),
        p.push(130),
        'data:image/png;base64,' +
          (function (r) {
            var n,
              e,
              i,
              t,
              u,
              o,
              c,
              a = r.length,
              f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
              m = '';
            for (n = 0; n < a; n += 3)
              (u = ((3 & (e = r[n])) << 4) + ((i = r[n + 1]) >> 4)),
                (o = ((15 & i) << 2) + ((t = r[n + 2]) >> 6)),
                (c = 63 & t),
                n + 1 >= a ? (o = c = 64) : n + 2 >= a && (c = 64),
                (m += f.charAt(e >> 2) + f.charAt(u) + f.charAt(o) + f.charAt(c));
            return m;
          })(p)
      );
    }),
    (numeric._dim = function (r) {
      for (var n = []; 'object' == typeof r; ) n.push(r.length), (r = r[0]);
      return n;
    }),
    (numeric.dim = function (r) {
      var n;
      return 'object' == typeof r ? ('object' == typeof (n = r[0]) ? ('object' == typeof n[0] ? numeric._dim(r) : [r.length, n.length]) : [r.length]) : [];
    }),
    (numeric.mapreduce = function (r, n) {
      return Function(
        'x',
        'accum',
        '_s',
        '_k',
        'if(typeof accum === "undefined") accum = ' +
          n +
          ';\nif(typeof x === "number") { var xi = x; ' +
          r +
          '; return accum; }\nif(typeof _s === "undefined") _s = numeric.dim(x);\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i,xi;\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) {\n        accum = arguments.callee(x[i],accum,_s,_k+1);\n    }    return accum;\n}\nfor(i=_n-1;i>=1;i-=2) { \n    xi = x[i];\n    ' +
          r +
          ';\n    xi = x[i-1];\n    ' +
          r +
          ';\n}\nif(i === 0) {\n    xi = x[i];\n    ' +
          r +
          '\n}\nreturn accum;'
      );
    }),
    (numeric.mapreduce2 = function (r, n) {
      return Function('x', 'var n = x.length;\nvar i,xi;\n' + n + ';\nfor(i=n-1;i!==-1;--i) { \n    xi = x[i];\n    ' + r + ';\n}\nreturn accum;');
    }),
    (numeric.same = function r(n, e) {
      var i, t;
      if (!(n instanceof Array && e instanceof Array)) return !1;
      if ((t = n.length) !== e.length) return !1;
      for (i = 0; i < t; i++)
        if (n[i] !== e[i]) {
          if ('object' != typeof n[i]) return !1;
          if (!r(n[i], e[i])) return !1;
        }
      return !0;
    }),
    (numeric.rep = function (r, n, e) {
      void 0 === e && (e = 0);
      var i,
        t = r[e],
        u = Array(t);
      if (e === r.length - 1) {
        for (i = t - 2; i >= 0; i -= 2) (u[i + 1] = n), (u[i] = n);
        return -1 === i && (u[0] = n), u;
      }
      for (i = t - 1; i >= 0; i--) u[i] = numeric.rep(r, n, e + 1);
      return u;
    }),
    (numeric.dotMMsmall = function (r, n) {
      var e, i, t, u, o, c, a, f, m, s, h;
      for (u = r.length, o = n.length, c = n[0].length, a = Array(u), e = u - 1; e >= 0; e--) {
        for (f = Array(c), m = r[e], t = c - 1; t >= 0; t--) {
          for (s = m[o - 1] * n[o - 1][t], i = o - 2; i >= 1; i -= 2) (h = i - 1), (s += m[i] * n[i][t] + m[h] * n[h][t]);
          0 === i && (s += m[0] * n[0][t]), (f[t] = s);
        }
        a[e] = f;
      }
      return a;
    }),
    (numeric._getCol = function (r, n, e) {
      var i;
      for (i = r.length - 1; i > 0; --i) (e[i] = r[i][n]), (e[--i] = r[i][n]);
      0 === i && (e[0] = r[0][n]);
    }),
    (numeric.dotMMbig = function (r, n) {
      var e,
        i,
        t,
        u = numeric._getCol,
        o = n.length,
        c = Array(o),
        a = r.length,
        f = n[0].length,
        m = new Array(a),
        s = numeric.dotVV;
      for (--o, i = --a; -1 !== i; --i) m[i] = Array(f);
      for (i = --f; -1 !== i; --i) for (u(n, i, c), t = a; -1 !== t; --t) 0, (e = r[t]), (m[t][i] = s(e, c));
      return m;
    }),
    (numeric.dotMV = function (r, n) {
      var e,
        i = r.length,
        t = (n.length, Array(i)),
        u = numeric.dotVV;
      for (e = i - 1; e >= 0; e--) t[e] = u(r[e], n);
      return t;
    }),
    (numeric.dotVM = function (r, n) {
      var e, i, t, u, o, c, a;
      for (t = r.length, u = n[0].length, o = Array(u), i = u - 1; i >= 0; i--) {
        for (c = r[t - 1] * n[t - 1][i], e = t - 2; e >= 1; e -= 2) (a = e - 1), (c += r[e] * n[e][i] + r[a] * n[a][i]);
        0 === e && (c += r[0] * n[0][i]), (o[i] = c);
      }
      return o;
    }),
    (numeric.dotVV = function (r, n) {
      var e,
        i,
        t = r.length,
        u = r[t - 1] * n[t - 1];
      for (e = t - 2; e >= 1; e -= 2) (i = e - 1), (u += r[e] * n[e] + r[i] * n[i]);
      return 0 === e && (u += r[0] * n[0]), u;
    }),
    (numeric.dot = function (r, n) {
      var e = numeric.dim;
      switch (1e3 * e(r).length + e(n).length) {
        case 2002:
          return n.length < 10 ? numeric.dotMMsmall(r, n) : numeric.dotMMbig(r, n);
        case 2001:
          return numeric.dotMV(r, n);
        case 1002:
          return numeric.dotVM(r, n);
        case 1001:
          return numeric.dotVV(r, n);
        case 1e3:
          return numeric.mulVS(r, n);
        case 1:
          return numeric.mulSV(r, n);
        case 0:
          return r * n;
        default:
          throw new Error('numeric.dot only works on vectors and matrices');
      }
    }),
    (numeric.diag = function (r) {
      var n,
        e,
        i,
        t,
        u = r.length,
        o = Array(u);
      for (n = u - 1; n >= 0; n--) {
        for (t = Array(u), e = n + 2, i = u - 1; i >= e; i -= 2) (t[i] = 0), (t[i - 1] = 0);
        for (i > n && (t[i] = 0), t[n] = r[n], i = n - 1; i >= 1; i -= 2) (t[i] = 0), (t[i - 1] = 0);
        0 === i && (t[0] = 0), (o[n] = t);
      }
      return o;
    }),
    (numeric.getDiag = function (r) {
      var n,
        e = Math.min(r.length, r[0].length),
        i = Array(e);
      for (n = e - 1; n >= 1; --n) (i[n] = r[n][n]), (i[--n] = r[n][n]);
      return 0 === n && (i[0] = r[0][0]), i;
    }),
    (numeric.identity = function (r) {
      return numeric.diag(numeric.rep([r], 1));
    }),
    (numeric.pointwise = function (r, n, e) {
      void 0 === e && (e = '');
      var i,
        t,
        u = [],
        o = /\[i\]$/,
        c = '',
        a = !1;
      for (i = 0; i < r.length; i++) o.test(r[i]) ? (c = t = r[i].substring(0, r[i].length - 3)) : (t = r[i]), 'ret' === t && (a = !0), u.push(t);
      return (
        (u[r.length] = '_s'),
        (u[r.length + 1] = '_k'),
        (u[r.length + 2] =
          'if(typeof _s === "undefined") _s = numeric.dim(' +
          c +
          ');\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i' +
          (a ? '' : ', ret = Array(_n)') +
          ';\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(' +
          r.join(',') +
          ',_s,_k+1);\n    return ret;\n}\n' +
          e +
          '\nfor(i=_n-1;i!==-1;--i) {\n    ' +
          n +
          '\n}\nreturn ret;'),
        Function.apply(null, u)
      );
    }),
    (numeric.pointwise2 = function (r, n, e) {
      void 0 === e && (e = '');
      var i,
        t,
        u = [],
        o = /\[i\]$/,
        c = '',
        a = !1;
      for (i = 0; i < r.length; i++) o.test(r[i]) ? (c = t = r[i].substring(0, r[i].length - 3)) : (t = r[i]), 'ret' === t && (a = !0), u.push(t);
      return (
        (u[r.length] = 'var _n = ' + c + '.length;\nvar i' + (a ? '' : ', ret = Array(_n)') + ';\n' + e + '\nfor(i=_n-1;i!==-1;--i) {\n' + n + '\n}\nreturn ret;'),
        Function.apply(null, u)
      );
    }),
    (numeric._biforeach = function r(n, e, i, t, u) {
      var o;
      if (t !== i.length - 1) for (o = i[t] - 1; o >= 0; o--) r('object' == typeof n ? n[o] : n, 'object' == typeof e ? e[o] : e, i, t + 1, u);
      else u(n, e);
    }),
    (numeric._biforeach2 = function r(n, e, i, t, u) {
      if (t === i.length - 1) return u(n, e);
      var o,
        c = i[t],
        a = Array(c);
      for (o = c - 1; o >= 0; --o) a[o] = r('object' == typeof n ? n[o] : n, 'object' == typeof e ? e[o] : e, i, t + 1, u);
      return a;
    }),
    (numeric._foreach = function r(n, e, i, t) {
      var u;
      if (i !== e.length - 1) for (u = e[i] - 1; u >= 0; u--) r(n[u], e, i + 1, t);
      else t(n);
    }),
    (numeric._foreach2 = function r(n, e, i, t) {
      if (i === e.length - 1) return t(n);
      var u,
        o = e[i],
        c = Array(o);
      for (u = o - 1; u >= 0; u--) c[u] = r(n[u], e, i + 1, t);
      return c;
    }),
    (numeric.ops2 = {
      add: '+',
      sub: '-',
      mul: '*',
      div: '/',
      mod: '%',
      and: '&&',
      or: '||',
      eq: '===',
      neq: '!==',
      lt: '<',
      gt: '>',
      leq: '<=',
      geq: '>=',
      band: '&',
      bor: '|',
      bxor: '^',
      lshift: '<<',
      rshift: '>>',
      rrshift: '>>>',
    }),
    (numeric.opseq = {
      addeq: '+=',
      subeq: '-=',
      muleq: '*=',
      diveq: '/=',
      modeq: '%=',
      lshifteq: '<<=',
      rshifteq: '>>=',
      rrshifteq: '>>>=',
      bandeq: '&=',
      boreq: '|=',
      bxoreq: '^=',
    }),
    (numeric.mathfuns = ['abs', 'acos', 'asin', 'atan', 'ceil', 'cos', 'exp', 'floor', 'log', 'round', 'sin', 'sqrt', 'tan', 'isNaN', 'isFinite']),
    (numeric.mathfuns2 = ['atan2', 'pow', 'max', 'min']),
    (numeric.ops1 = { neg: '-', not: '!', bnot: '~', clone: '' }),
    (numeric.mapreducers = {
      any: ['if(xi) return true;', 'var accum = false;'],
      all: ['if(!xi) return false;', 'var accum = true;'],
      sum: ['accum += xi;', 'var accum = 0;'],
      prod: ['accum *= xi;', 'var accum = 1;'],
      norm2Squared: ['accum += xi*xi;', 'var accum = 0;'],
      norminf: ['accum = max(accum,abs(xi));', 'var accum = 0, max = Math.max, abs = Math.abs;'],
      norm1: ['accum += abs(xi)', 'var accum = 0, abs = Math.abs;'],
      sup: ['accum = max(accum,xi);', 'var accum = -Infinity, max = Math.max;'],
      inf: ['accum = min(accum,xi);', 'var accum = Infinity, min = Math.min;'],
    }),
    (function () {
      var r, n;
      for (r = 0; r < numeric.mathfuns2.length; ++r) (n = numeric.mathfuns2[r]), (numeric.ops2[n] = n);
      for (r in numeric.ops2)
        if (numeric.ops2.hasOwnProperty(r)) {
          n = numeric.ops2[r];
          var e,
            i,
            t = '';
          -1 !== numeric.myIndexOf.call(numeric.mathfuns2, r)
            ? ((t = 'var ' + n + ' = Math.' + n + ';\n'),
              (e = function (r, e, i) {
                return r + ' = ' + n + '(' + e + ',' + i + ')';
              }),
              (i = function (r, e) {
                return r + ' = ' + n + '(' + r + ',' + e + ')';
              }))
            : ((e = function (r, e, i) {
                return r + ' = ' + e + ' ' + n + ' ' + i;
              }),
              (i = numeric.opseq.hasOwnProperty(r + 'eq')
                ? function (r, e) {
                    return r + ' ' + n + '= ' + e;
                  }
                : function (r, e) {
                    return r + ' = ' + r + ' ' + n + ' ' + e;
                  })),
            (numeric[r + 'VV'] = numeric.pointwise2(['x[i]', 'y[i]'], e('ret[i]', 'x[i]', 'y[i]'), t)),
            (numeric[r + 'SV'] = numeric.pointwise2(['x', 'y[i]'], e('ret[i]', 'x', 'y[i]'), t)),
            (numeric[r + 'VS'] = numeric.pointwise2(['x[i]', 'y'], e('ret[i]', 'x[i]', 'y'), t)),
            (numeric[r] = Function(
              'var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric.' +
                r +
                'VV, VS = numeric.' +
                r +
                'VS, SV = numeric.' +
                r +
                'SV;\nvar dim = numeric.dim;\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof x === "object") {\n      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n  else ' +
                i('x', 'y') +
                '\n}\nreturn x;\n'
            )),
            (numeric[n] = numeric[r]),
            (numeric[r + 'eqV'] = numeric.pointwise2(['ret[i]', 'x[i]'], i('ret[i]', 'x[i]'), t)),
            (numeric[r + 'eqS'] = numeric.pointwise2(['ret[i]', 'x'], i('ret[i]', 'x'), t)),
            (numeric[r + 'eq'] = Function(
              'var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric.' +
                r +
                'eqV, S = numeric.' +
                r +
                'eqS\nvar s = numeric.dim(x);\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n  else numeric._biforeach(x,y,s,0,S);\n}\nreturn x;\n'
            ));
        }
      for (r = 0; r < numeric.mathfuns2.length; ++r) (n = numeric.mathfuns2[r]), delete numeric.ops2[n];
      for (r = 0; r < numeric.mathfuns.length; ++r) (n = numeric.mathfuns[r]), (numeric.ops1[n] = n);
      for (r in numeric.ops1)
        numeric.ops1.hasOwnProperty(r) &&
          ((t = ''),
          (n = numeric.ops1[r]),
          -1 !== numeric.myIndexOf.call(numeric.mathfuns, r) && Math.hasOwnProperty(n) && (t = 'var ' + n + ' = Math.' + n + ';\n'),
          (numeric[r + 'eqV'] = numeric.pointwise2(['ret[i]'], 'ret[i] = ' + n + '(ret[i]);', t)),
          (numeric[r + 'eq'] = Function(
            'x',
            'if(typeof x !== "object") return ' + n + 'x\nvar i;\nvar V = numeric.' + r + 'eqV;\nvar s = numeric.dim(x);\nnumeric._foreach(x,s,0,V);\nreturn x;\n'
          )),
          (numeric[r + 'V'] = numeric.pointwise2(['x[i]'], 'ret[i] = ' + n + '(x[i]);', t)),
          (numeric[r] = Function(
            'x',
            'if(typeof x !== "object") return ' + n + '(x)\nvar i;\nvar V = numeric.' + r + 'V;\nvar s = numeric.dim(x);\nreturn numeric._foreach2(x,s,0,V);\n'
          )));
      for (r = 0; r < numeric.mathfuns.length; ++r) (n = numeric.mathfuns[r]), delete numeric.ops1[n];
      for (r in numeric.mapreducers)
        numeric.mapreducers.hasOwnProperty(r) &&
          ((n = numeric.mapreducers[r]),
          (numeric[r + 'V'] = numeric.mapreduce2(n[0], n[1])),
          (numeric[r] = Function(
            'x',
            's',
            'k',
            n[1] +
              'if(typeof x !== "object") {    xi = x;\n' +
              n[0] +
              ';\n    return accum;\n}if(typeof s === "undefined") s = numeric.dim(x);\nif(typeof k === "undefined") k = 0;\nif(k === s.length-1) return numeric.' +
              r +
              'V(x);\nvar xi;\nvar n = x.length, i;\nfor(i=n-1;i!==-1;--i) {\n   xi = arguments.callee(x[i]);\n' +
              n[0] +
              ';\n}\nreturn accum;\n'
          )));
    })(),
    (numeric.truncVV = numeric.pointwise(['x[i]', 'y[i]'], 'ret[i] = round(x[i]/y[i])*y[i];', 'var round = Math.round;')),
    (numeric.truncVS = numeric.pointwise(['x[i]', 'y'], 'ret[i] = round(x[i]/y)*y;', 'var round = Math.round;')),
    (numeric.truncSV = numeric.pointwise(['x', 'y[i]'], 'ret[i] = round(x/y[i])*y[i];', 'var round = Math.round;')),
    (numeric.trunc = function (r, n) {
      return 'object' == typeof r ? ('object' == typeof n ? numeric.truncVV(r, n) : numeric.truncVS(r, n)) : 'object' == typeof n ? numeric.truncSV(r, n) : Math.round(r / n) * n;
    }),
    (numeric.inv = function (r) {
      var n,
        e,
        i,
        t,
        u,
        o,
        c,
        a = numeric.dim(r),
        f = Math.abs,
        m = a[0],
        s = a[1],
        h = numeric.clone(r),
        l = numeric.identity(m);
      for (o = 0; o < s; ++o) {
        var p = -1,
          y = -1;
        for (u = o; u !== m; ++u) (c = f(h[u][o])) > y && ((p = u), (y = c));
        for (e = h[p], h[p] = h[o], h[o] = e, t = l[p], l[p] = l[o], l[o] = t, r = e[o], c = o; c !== s; ++c) e[c] /= r;
        for (c = s - 1; -1 !== c; --c) t[c] /= r;
        for (u = m - 1; -1 !== u; --u)
          if (u !== o) {
            for (n = h[u], i = l[u], r = n[o], c = o + 1; c !== s; ++c) n[c] -= e[c] * r;
            for (c = s - 1; c > 0; --c) (i[c] -= t[c] * r), (i[--c] -= t[c] * r);
            0 === c && (i[0] -= t[0] * r);
          }
      }
      return l;
    }),
    (numeric.det = function (r) {
      var n = numeric.dim(r);
      if (2 !== n.length || n[0] !== n[1]) throw new Error('numeric: det() only works on square matrices');
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f,
        m = n[0],
        s = 1,
        h = numeric.clone(r);
      for (i = 0; i < m - 1; i++) {
        for (t = i, e = i + 1; e < m; e++) Math.abs(h[e][i]) > Math.abs(h[t][i]) && (t = e);
        for (t !== i && ((a = h[t]), (h[t] = h[i]), (h[i] = a), (s *= -1)), u = h[i], e = i + 1; e < m; e++) {
          for (c = (o = h[e])[i] / u[i], t = i + 1; t < m - 1; t += 2) (f = t + 1), (o[t] -= u[t] * c), (o[f] -= u[f] * c);
          t !== m && (o[t] -= u[t] * c);
        }
        if (0 === u[i]) return 0;
        s *= u[i];
      }
      return s * h[i][i];
    }),
    (numeric.transpose = function (r) {
      var n,
        e,
        i,
        t,
        u,
        o = r.length,
        c = r[0].length,
        a = Array(c);
      for (e = 0; e < c; e++) a[e] = Array(o);
      for (n = o - 1; n >= 1; n -= 2) {
        for (t = r[n], i = r[n - 1], e = c - 1; e >= 1; --e) ((u = a[e])[n] = t[e]), (u[n - 1] = i[e]), ((u = a[--e])[n] = t[e]), (u[n - 1] = i[e]);
        0 === e && (((u = a[0])[n] = t[0]), (u[n - 1] = i[0]));
      }
      if (0 === n) {
        for (i = r[0], e = c - 1; e >= 1; --e) (a[e][0] = i[e]), (a[--e][0] = i[e]);
        0 === e && (a[0][0] = i[0]);
      }
      return a;
    }),
    (numeric.negtranspose = function (r) {
      var n,
        e,
        i,
        t,
        u,
        o = r.length,
        c = r[0].length,
        a = Array(c);
      for (e = 0; e < c; e++) a[e] = Array(o);
      for (n = o - 1; n >= 1; n -= 2) {
        for (t = r[n], i = r[n - 1], e = c - 1; e >= 1; --e) ((u = a[e])[n] = -t[e]), (u[n - 1] = -i[e]), ((u = a[--e])[n] = -t[e]), (u[n - 1] = -i[e]);
        0 === e && (((u = a[0])[n] = -t[0]), (u[n - 1] = -i[0]));
      }
      if (0 === n) {
        for (i = r[0], e = c - 1; e >= 1; --e) (a[e][0] = -i[e]), (a[--e][0] = -i[e]);
        0 === e && (a[0][0] = -i[0]);
      }
      return a;
    }),
    (numeric._random = function r(n, e) {
      var i,
        t,
        u = n[e],
        o = Array(u);
      if (e === n.length - 1) {
        for (t = Math.random, i = u - 1; i >= 1; i -= 2) (o[i] = t()), (o[i - 1] = t());
        return 0 === i && (o[0] = t()), o;
      }
      for (i = u - 1; i >= 0; i--) o[i] = r(n, e + 1);
      return o;
    }),
    (numeric.random = function (r) {
      return numeric._random(r, 0);
    }),
    (numeric.norm2 = function (r) {
      return Math.sqrt(numeric.norm2Squared(r));
    }),
    (numeric.linspace = function (r, n, e) {
      if ((void 0 === e && (e = Math.max(Math.round(n - r) + 1, 1)), e < 2)) return 1 === e ? [r] : [];
      var i,
        t = Array(e);
      for (i = --e; i >= 0; i--) t[i] = (i * n + (e - i) * r) / e;
      return t;
    }),
    (numeric.getBlock = function (r, n, e) {
      var i = numeric.dim(r);
      return (function r(t, u) {
        var o,
          c = n[u],
          a = e[u] - c,
          f = Array(a);
        if (u === i.length - 1) {
          for (o = a; o >= 0; o--) f[o] = t[o + c];
          return f;
        }
        for (o = a; o >= 0; o--) f[o] = r(t[o + c], u + 1);
        return f;
      })(r, 0);
    }),
    (numeric.setBlock = function (r, n, e, i) {
      var t = numeric.dim(r);
      return (
        (function r(i, u, o) {
          var c,
            a = n[o],
            f = e[o] - a;
          if (o === t.length - 1) for (c = f; c >= 0; c--) i[c + a] = u[c];
          for (c = f; c >= 0; c--) r(i[c + a], u[c], o + 1);
        })(r, i, 0),
        r
      );
    }),
    (numeric.getRange = function (r, n, e) {
      var i,
        t,
        u,
        o,
        c = n.length,
        a = e.length,
        f = Array(c);
      for (i = c - 1; -1 !== i; --i) for (f[i] = Array(a), u = f[i], o = r[n[i]], t = a - 1; -1 !== t; --t) u[t] = o[e[t]];
      return f;
    }),
    (numeric.blockMatrix = function (r) {
      var n = numeric.dim(r);
      if (n.length < 4) return numeric.blockMatrix([r]);
      var e,
        i,
        t,
        u,
        o,
        c = n[0],
        a = n[1];
      for (e = 0, i = 0, t = 0; t < c; ++t) e += r[t][0].length;
      for (u = 0; u < a; ++u) i += r[0][u][0].length;
      var f = Array(e);
      for (t = 0; t < e; ++t) f[t] = Array(i);
      var m,
        s,
        h,
        l,
        p,
        y = 0;
      for (t = 0; t < c; ++t) {
        for (m = i, u = a - 1; -1 !== u; --u)
          for (m -= (o = r[t][u])[0].length, h = o.length - 1; -1 !== h; --h) for (p = o[h], s = f[y + h], l = p.length - 1; -1 !== l; --l) s[m + l] = p[l];
        y += r[t][0].length;
      }
      return f;
    }),
    (numeric.tensor = function (r, n) {
      if ('number' == typeof r || 'number' == typeof n) return numeric.mul(r, n);
      var e = numeric.dim(r),
        i = numeric.dim(n);
      if (1 !== e.length || 1 !== i.length) throw new Error('numeric: tensor product is only defined for vectors');
      var t,
        u,
        o,
        c,
        a = e[0],
        f = i[0],
        m = Array(a);
      for (u = a - 1; u >= 0; u--) {
        for (t = Array(f), c = r[u], o = f - 1; o >= 3; --o) (t[o] = c * n[o]), (t[--o] = c * n[o]), (t[--o] = c * n[o]), (t[--o] = c * n[o]);
        for (; o >= 0; ) (t[o] = c * n[o]), --o;
        m[u] = t;
      }
      return m;
    }),
    (numeric.T = function (r, n) {
      (this.x = r), (this.y = n);
    }),
    (numeric.t = function (r, n) {
      return new numeric.T(r, n);
    }),
    (numeric.Tbinop = function (r, n, e, i, t) {
      var u;
      numeric.indexOf;
      if ('string' != typeof t)
        for (u in ((t = ''), numeric))
          numeric.hasOwnProperty(u) &&
            (r.indexOf(u) >= 0 || n.indexOf(u) >= 0 || e.indexOf(u) >= 0 || i.indexOf(u) >= 0) &&
            u.length > 1 &&
            (t += 'var ' + u + ' = numeric.' + u + ';\n');
      return Function(
        ['y'],
        'var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n' +
          t +
          '\nif(x.y) {  if(y.y) {    return new numeric.T(' +
          i +
          ');\n  }\n  return new numeric.T(' +
          e +
          ');\n}\nif(y.y) {\n  return new numeric.T(' +
          n +
          ');\n}\nreturn new numeric.T(' +
          r +
          ');\n'
      );
    }),
    (numeric.T.prototype.add = numeric.Tbinop('add(x.x,y.x)', 'add(x.x,y.x),y.y', 'add(x.x,y.x),x.y', 'add(x.x,y.x),add(x.y,y.y)')),
    (numeric.T.prototype.sub = numeric.Tbinop('sub(x.x,y.x)', 'sub(x.x,y.x),neg(y.y)', 'sub(x.x,y.x),x.y', 'sub(x.x,y.x),sub(x.y,y.y)')),
    (numeric.T.prototype.mul = numeric.Tbinop(
      'mul(x.x,y.x)',
      'mul(x.x,y.x),mul(x.x,y.y)',
      'mul(x.x,y.x),mul(x.y,y.x)',
      'sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))'
    )),
    (numeric.T.prototype.reciprocal = function () {
      var r = numeric.mul,
        n = numeric.div;
      if (this.y) {
        var e = numeric.add(r(this.x, this.x), r(this.y, this.y));
        return new numeric.T(n(this.x, e), n(numeric.neg(this.y), e));
      }
      return new T(n(1, this.x));
    }),
    (numeric.T.prototype.div = function (r) {
      if ((r instanceof numeric.T || (r = new numeric.T(r)), r.y)) return this.mul(r.reciprocal());
      var n = numeric.div;
      return this.y ? new numeric.T(n(this.x, r.x), n(this.y, r.x)) : new numeric.T(n(this.x, r.x));
    }),
    (numeric.T.prototype.dot = numeric.Tbinop(
      'dot(x.x,y.x)',
      'dot(x.x,y.x),dot(x.x,y.y)',
      'dot(x.x,y.x),dot(x.y,y.x)',
      'sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))'
    )),
    (numeric.T.prototype.transpose = function () {
      var r = numeric.transpose,
        n = this.x,
        e = this.y;
      return e ? new numeric.T(r(n), r(e)) : new numeric.T(r(n));
    }),
    (numeric.T.prototype.transjugate = function () {
      var r = numeric.transpose,
        n = this.x,
        e = this.y;
      return e ? new numeric.T(r(n), numeric.negtranspose(e)) : new numeric.T(r(n));
    }),
    (numeric.Tunop = function (r, n, e) {
      return 'string' != typeof e && (e = ''), Function('var x = this;\n' + e + '\nif(x.y) {  ' + n + ';\n}\n' + r + ';\n');
    }),
    (numeric.T.prototype.exp = numeric.Tunop(
      'return new numeric.T(ex)',
      'return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))',
      'var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;'
    )),
    (numeric.T.prototype.conj = numeric.Tunop('return new numeric.T(x.x);', 'return new numeric.T(x.x,numeric.neg(x.y));')),
    (numeric.T.prototype.neg = numeric.Tunop('return new numeric.T(neg(x.x));', 'return new numeric.T(neg(x.x),neg(x.y));', 'var neg = numeric.neg;')),
    (numeric.T.prototype.sin = numeric.Tunop('return new numeric.T(numeric.sin(x.x))', 'return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));')),
    (numeric.T.prototype.cos = numeric.Tunop('return new numeric.T(numeric.cos(x.x))', 'return x.exp().add(x.neg().exp()).div(2);')),
    (numeric.T.prototype.abs = numeric.Tunop(
      'return new numeric.T(numeric.abs(x.x));',
      'return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));',
      'var mul = numeric.mul;'
    )),
    (numeric.T.prototype.log = numeric.Tunop(
      'return new numeric.T(numeric.log(x.x));',
      'var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);'
    )),
    (numeric.T.prototype.norm2 = numeric.Tunop('return numeric.norm2(x.x);', 'var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));')),
    (numeric.T.prototype.inv = function () {
      var r = this;
      if (void 0 === r.y) return new numeric.T(numeric.inv(r.x));
      var n,
        e,
        i,
        t,
        u,
        o,
        c,
        a,
        f,
        m,
        s,
        h,
        l,
        p,
        y,
        g,
        d,
        v,
        x = r.x.length,
        b = numeric.identity(x),
        w = numeric.rep([x, x], 0),
        M = numeric.clone(r.x),
        k = numeric.clone(r.y);
      for (f = 0; f < x; f++) {
        for (h = (p = M[f][f]) * p + (y = k[f][f]) * y, s = f, m = f + 1; m < x; m++) (l = (p = M[m][f]) * p + (y = k[m][f]) * y) > h && ((s = m), (h = l));
        for (
          s !== f && ((v = M[f]), (M[f] = M[s]), (M[s] = v), (v = k[f]), (k[f] = k[s]), (k[s] = v), (v = b[f]), (b[f] = b[s]), (b[s] = v), (v = w[f]), (w[f] = w[s]), (w[s] = v)),
            n = M[f],
            e = k[f],
            u = b[f],
            o = w[f],
            p = n[f],
            y = e[f],
            m = f + 1;
          m < x;
          m++
        )
          (g = n[m]), (d = e[m]), (n[m] = (g * p + d * y) / h), (e[m] = (d * p - g * y) / h);
        for (m = 0; m < x; m++) (g = u[m]), (d = o[m]), (u[m] = (g * p + d * y) / h), (o[m] = (d * p - g * y) / h);
        for (m = f + 1; m < x; m++) {
          for (i = M[m], t = k[m], c = b[m], a = w[m], p = i[f], y = t[f], s = f + 1; s < x; s++) (g = n[s]), (d = e[s]), (i[s] -= g * p - d * y), (t[s] -= d * p + g * y);
          for (s = 0; s < x; s++) (g = u[s]), (d = o[s]), (c[s] -= g * p - d * y), (a[s] -= d * p + g * y);
        }
      }
      for (f = x - 1; f > 0; f--)
        for (u = b[f], o = w[f], m = f - 1; m >= 0; m--)
          for (c = b[m], a = w[m], p = M[m][f], y = k[m][f], s = x - 1; s >= 0; s--) (g = u[s]), (d = o[s]), (c[s] -= p * g - y * d), (a[s] -= p * d + y * g);
      return new numeric.T(b, w);
    }),
    (numeric.T.prototype.get = function (r) {
      var n,
        e = this.x,
        i = this.y,
        t = 0,
        u = r.length;
      if (i) {
        for (; t < u; ) (e = e[(n = r[t])]), (i = i[n]), t++;
        return new numeric.T(e, i);
      }
      for (; t < u; ) (e = e[(n = r[t])]), t++;
      return new numeric.T(e);
    }),
    (numeric.T.prototype.set = function (r, n) {
      var e,
        i = this.x,
        t = this.y,
        u = 0,
        o = r.length,
        c = n.x,
        a = n.y;
      if (0 === o) return a ? (this.y = a) : t && (this.y = void 0), (this.x = i), this;
      if (a) {
        for (t || ((t = numeric.rep(numeric.dim(i), 0)), (this.y = t)); u < o - 1; ) (i = i[(e = r[u])]), (t = t[e]), u++;
        return (i[(e = r[u])] = c), (t[e] = a), this;
      }
      if (t) {
        for (; u < o - 1; ) (i = i[(e = r[u])]), (t = t[e]), u++;
        return (i[(e = r[u])] = c), c instanceof Array ? (t[e] = numeric.rep(numeric.dim(c), 0)) : (t[e] = 0), this;
      }
      for (; u < o - 1; ) (i = i[(e = r[u])]), u++;
      return (i[(e = r[u])] = c), this;
    }),
    (numeric.T.prototype.getRows = function (r, n) {
      var e,
        i,
        t = n - r + 1,
        u = Array(t),
        o = this.x,
        c = this.y;
      for (e = r; e <= n; e++) u[e - r] = o[e];
      if (c) {
        for (i = Array(t), e = r; e <= n; e++) i[e - r] = c[e];
        return new numeric.T(u, i);
      }
      return new numeric.T(u);
    }),
    (numeric.T.prototype.setRows = function (r, n, e) {
      var i,
        t = this.x,
        u = this.y,
        o = e.x,
        c = e.y;
      for (i = r; i <= n; i++) t[i] = o[i - r];
      if (c) for (u || ((u = numeric.rep(numeric.dim(t), 0)), (this.y = u)), i = r; i <= n; i++) u[i] = c[i - r];
      else if (u) for (i = r; i <= n; i++) u[i] = numeric.rep([o[i - r].length], 0);
      return this;
    }),
    (numeric.T.prototype.getRow = function (r) {
      var n = this.x,
        e = this.y;
      return e ? new numeric.T(n[r], e[r]) : new numeric.T(n[r]);
    }),
    (numeric.T.prototype.setRow = function (r, n) {
      var e = this.x,
        i = this.y,
        t = n.x,
        u = n.y;
      return (e[r] = t), u ? (i || ((i = numeric.rep(numeric.dim(e), 0)), (this.y = i)), (i[r] = u)) : i && (i = numeric.rep([t.length], 0)), this;
    }),
    (numeric.T.prototype.getBlock = function (r, n) {
      var e = this.x,
        i = this.y,
        t = numeric.getBlock;
      return i ? new numeric.T(t(e, r, n), t(i, r, n)) : new numeric.T(t(e, r, n));
    }),
    (numeric.T.prototype.setBlock = function (r, n, e) {
      e instanceof numeric.T || (e = new numeric.T(e));
      var i = this.x,
        t = this.y,
        u = numeric.setBlock,
        o = e.x,
        c = e.y;
      if (c) return t || ((this.y = numeric.rep(numeric.dim(this), 0)), (t = this.y)), u(i, r, n, o), u(t, r, n, c), this;
      u(i, r, n, o), t && u(t, r, n, numeric.rep(numeric.dim(o), 0));
    }),
    (numeric.T.rep = function (r, n) {
      var e = numeric.T;
      n instanceof e || (n = new e(n));
      var i = n.x,
        t = n.y,
        u = numeric.rep;
      return t ? new e(u(r, i), u(r, t)) : new e(u(r, i));
    }),
    (numeric.T.diag = function (r) {
      r instanceof numeric.T || (r = new numeric.T(r));
      var n = r.x,
        e = r.y,
        i = numeric.diag;
      return e ? new numeric.T(i(n), i(e)) : new numeric.T(i(n));
    }),
    (numeric.T.eig = function () {
      if (this.y) throw new Error('eig: not implemented for complex matrices.');
      return numeric.eig(this.x);
    }),
    (numeric.T.identity = function (r) {
      return new numeric.T(numeric.identity(r));
    }),
    (numeric.T.prototype.getDiag = function () {
      var r = numeric,
        n = this.x,
        e = this.y;
      return e ? new r.T(r.getDiag(n), r.getDiag(e)) : new r.T(r.getDiag(n));
    }),
    (numeric.house = function (r) {
      var n = numeric.clone(r),
        e = (r[0] >= 0 ? 1 : -1) * numeric.norm2(r);
      n[0] += e;
      var i = numeric.norm2(n);
      if (0 === i) throw new Error('eig: internal error');
      return numeric.div(n, i);
    }),
    (numeric.toUpperHessenberg = function (r) {
      var n = numeric.dim(r);
      if (2 !== n.length || n[0] !== n[1]) throw new Error('numeric: toUpperHessenberg() only works on square matrices');
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f,
        m,
        s,
        h = n[0],
        l = numeric.clone(r),
        p = numeric.identity(h);
      for (i = 0; i < h - 2; i++) {
        for (u = Array(h - i - 1), e = i + 1; e < h; e++) u[e - i - 1] = l[e][i];
        if (numeric.norm2(u) > 0) {
          for (o = numeric.house(u), c = numeric.getBlock(l, [i + 1, i], [h - 1, h - 1]), a = numeric.tensor(o, numeric.dot(o, c)), e = i + 1; e < h; e++)
            for (f = l[e], m = a[e - i - 1], t = i; t < h; t++) f[t] -= 2 * m[t - i];
          for (c = numeric.getBlock(l, [0, i + 1], [h - 1, h - 1]), a = numeric.tensor(numeric.dot(c, o), o), e = 0; e < h; e++)
            for (f = l[e], m = a[e], t = i + 1; t < h; t++) f[t] -= 2 * m[t - i - 1];
          for (c = Array(h - i - 1), e = i + 1; e < h; e++) c[e - i - 1] = p[e];
          for (a = numeric.tensor(o, numeric.dot(o, c)), e = i + 1; e < h; e++) for (s = p[e], m = a[e - i - 1], t = 0; t < h; t++) s[t] -= 2 * m[t];
        }
      }
      return { H: l, Q: p };
    }),
    (numeric.epsilon = 2.220446049250313e-16),
    (numeric.QRFrancis = function (r, n) {
      void 0 === n && (n = 1e4), (r = numeric.clone(r));
      numeric.clone(r);
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f,
        m,
        s,
        h,
        l,
        p,
        y,
        g,
        d,
        v,
        x,
        b = numeric.dim(r)[0],
        w = numeric.identity(b);
      if (b < 3) return { Q: w, B: [[0, b - 1]] };
      var M = numeric.epsilon;
      for (x = 0; x < n; x++) {
        for (d = 0; d < b - 1; d++)
          if (Math.abs(r[d + 1][d]) < M * (Math.abs(r[d][d]) + Math.abs(r[d + 1][d + 1]))) {
            var k = numeric.QRFrancis(numeric.getBlock(r, [0, 0], [d, d]), n),
              A = numeric.QRFrancis(numeric.getBlock(r, [d + 1, d + 1], [b - 1, b - 1]), n);
            for (l = Array(d + 1), g = 0; g <= d; g++) l[g] = w[g];
            for (p = numeric.dot(k.Q, l), g = 0; g <= d; g++) w[g] = p[g];
            for (l = Array(b - d - 1), g = d + 1; g < b; g++) l[g - d - 1] = w[g];
            for (p = numeric.dot(A.Q, l), g = d + 1; g < b; g++) w[g] = p[g - d - 1];
            return { Q: w, B: k.B.concat(numeric.add(A.B, d + 1)) };
          }
        var T, j, S;
        if (
          ((t = r[b - 2][b - 2]),
          (u = r[b - 2][b - 1]),
          (o = r[b - 1][b - 2]),
          (f = t + (c = r[b - 1][b - 1])),
          (a = t * c - u * o),
          (m = numeric.getBlock(r, [0, 0], [2, 2])),
          f * f >= 4 * a)
        )
          (T = 0.5 * (f + Math.sqrt(f * f - 4 * a))),
            (j = 0.5 * (f - Math.sqrt(f * f - 4 * a))),
            (m = numeric.add(numeric.sub(numeric.dot(m, m), numeric.mul(m, T + j)), numeric.diag(numeric.rep([3], T * j))));
        else m = numeric.add(numeric.sub(numeric.dot(m, m), numeric.mul(m, f)), numeric.diag(numeric.rep([3], a)));
        for (e = [m[0][0], m[1][0], m[2][0]], i = numeric.house(e), l = [r[0], r[1], r[2]], p = numeric.tensor(i, numeric.dot(i, l)), g = 0; g < 3; g++)
          for (h = r[g], y = p[g], v = 0; v < b; v++) h[v] -= 2 * y[v];
        for (l = numeric.getBlock(r, [0, 0], [b - 1, 2]), p = numeric.tensor(numeric.dot(l, i), i), g = 0; g < b; g++) for (h = r[g], y = p[g], v = 0; v < 3; v++) h[v] -= 2 * y[v];
        for (l = [w[0], w[1], w[2]], p = numeric.tensor(i, numeric.dot(i, l)), g = 0; g < 3; g++) for (s = w[g], y = p[g], v = 0; v < b; v++) s[v] -= 2 * y[v];
        for (d = 0; d < b - 2; d++) {
          for (v = d; v <= d + 1; v++)
            if (Math.abs(r[v + 1][v]) < M * (Math.abs(r[v][v]) + Math.abs(r[v + 1][v + 1]))) {
              (k = numeric.QRFrancis(numeric.getBlock(r, [0, 0], [v, v]), n)), (A = numeric.QRFrancis(numeric.getBlock(r, [v + 1, v + 1], [b - 1, b - 1]), n));
              for (l = Array(v + 1), g = 0; g <= v; g++) l[g] = w[g];
              for (p = numeric.dot(k.Q, l), g = 0; g <= v; g++) w[g] = p[g];
              for (l = Array(b - v - 1), g = v + 1; g < b; g++) l[g - v - 1] = w[g];
              for (p = numeric.dot(A.Q, l), g = v + 1; g < b; g++) w[g] = p[g - v - 1];
              return { Q: w, B: k.B.concat(numeric.add(A.B, v + 1)) };
            }
          for (S = Math.min(b - 1, d + 3), e = Array(S - d), g = d + 1; g <= S; g++) e[g - d - 1] = r[g][d];
          for (i = numeric.house(e), l = numeric.getBlock(r, [d + 1, d], [S, b - 1]), p = numeric.tensor(i, numeric.dot(i, l)), g = d + 1; g <= S; g++)
            for (h = r[g], y = p[g - d - 1], v = d; v < b; v++) h[v] -= 2 * y[v - d];
          for (l = numeric.getBlock(r, [0, d + 1], [b - 1, S]), p = numeric.tensor(numeric.dot(l, i), i), g = 0; g < b; g++)
            for (h = r[g], y = p[g], v = d + 1; v <= S; v++) h[v] -= 2 * y[v - d - 1];
          for (l = Array(S - d), g = d + 1; g <= S; g++) l[g - d - 1] = w[g];
          for (p = numeric.tensor(i, numeric.dot(i, l)), g = d + 1; g <= S; g++) for (s = w[g], y = p[g - d - 1], v = 0; v < b; v++) s[v] -= 2 * y[v];
        }
      }
      throw new Error('numeric: eigenvalue iteration does not converge -- increase maxiter?');
    }),
    (numeric.eig = function (r, n) {
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f,
        m,
        s,
        h,
        l,
        p,
        y,
        g,
        d,
        v = numeric.toUpperHessenberg(r),
        x = numeric.QRFrancis(v.H, n),
        b = numeric.T,
        w = r.length,
        M = x.B,
        k = numeric.dot(x.Q, numeric.dot(v.H, numeric.transpose(x.Q))),
        A = new b(numeric.dot(x.Q, v.Q)),
        T = M.length,
        j = Math.sqrt;
      for (i = 0; i < T; i++)
        if ((e = M[i][0]) === M[i][1]);
        else {
          if (((u = e + 1), (o = k[e][e]), (c = k[e][u]), (a = k[u][e]), (f = k[u][u]), 0 === c && 0 === a)) continue;
          (s = (m = -o - f) * m - 4 * (o * f - c * a)) >= 0
            ? ((g = (o - (h = m < 0 ? -0.5 * (m - j(s)) : -0.5 * (m + j(s)))) * (o - h) + c * c) > (d = a * a + (f - h) * (f - h))
                ? ((p = (o - h) / (g = j(g))), (y = c / g))
                : ((p = a / (d = j(d))), (y = (f - h) / d)),
              (t = new b([
                [y, -p],
                [p, y],
              ])),
              A.setRows(e, u, t.dot(A.getRows(e, u))))
            : ((h = -0.5 * m),
              (l = 0.5 * j(-s)),
              (g = (o - h) * (o - h) + c * c) > (d = a * a + (f - h) * (f - h))
                ? ((p = (o - h) / (g = j(g + l * l))), (y = c / g), (h = 0), (l /= g))
                : ((p = a / (d = j(d + l * l))), (y = (f - h) / d), (h = l / d), (l = 0)),
              (t = new b(
                [
                  [y, -p],
                  [p, y],
                ],
                [
                  [h, l],
                  [l, -h],
                ]
              )),
              A.setRows(e, u, t.dot(A.getRows(e, u))));
        }
      var S = A.dot(r).dot(A.transjugate()),
        _ = ((w = r.length), numeric.T.identity(w));
      for (u = 0; u < w; u++)
        if (u > 0)
          for (i = u - 1; i >= 0; i--) {
            var V = S.get([i, i]),
              P = S.get([u, u]);
            numeric.neq(V.x, P.x) || numeric.neq(V.y, P.y)
              ? ((h = S.getRow(i).getBlock([i], [u - 1])), (l = _.getRow(u).getBlock([i], [u - 1])), _.set([u, i], S.get([i, u]).neg().sub(h.dot(l)).div(V.sub(P))))
              : _.setRow(u, _.getRow(i));
          }
      for (u = 0; u < w; u++) (h = _.getRow(u)), _.setRow(u, h.div(h.norm2()));
      return (_ = _.transpose()), (_ = A.transjugate().dot(_)), { lambda: S.getDiag(), E: _ };
    }),
    (numeric.ccsSparse = function (r) {
      var n,
        e,
        i,
        t = r.length,
        u = [];
      for (e = t - 1; -1 !== e; --e)
        for (i in (n = r[e])) {
          for (i = parseInt(i); i >= u.length; ) u[u.length] = 0;
          0 !== n[i] && u[i]++;
        }
      var o = u.length,
        c = Array(o + 1);
      for (c[0] = 0, e = 0; e < o; ++e) c[e + 1] = c[e] + u[e];
      var a = Array(c[o]),
        f = Array(c[o]);
      for (e = t - 1; -1 !== e; --e) for (i in (n = r[e])) 0 !== n[i] && (u[i]--, (a[c[i] + u[i]] = e), (f[c[i] + u[i]] = n[i]));
      return [c, a, f];
    }),
    (numeric.ccsFull = function (r) {
      var n,
        e,
        i,
        t,
        u = r[0],
        o = r[1],
        c = r[2],
        a = numeric.ccsDim(r),
        f = a[0],
        m = a[1],
        s = numeric.rep([f, m], 0);
      for (n = 0; n < m; n++) for (i = u[n], t = u[n + 1], e = i; e < t; ++e) s[o[e]][n] = c[e];
      return s;
    }),
    (numeric.ccsTSolve = function (r, n, e, i, t) {
      var u,
        o,
        c,
        a,
        f,
        m,
        s,
        h = r[0],
        l = r[1],
        p = r[2],
        y = h.length - 1,
        g = Math.max,
        d = 0;
      function v(r) {
        var n;
        if (0 === e[r]) {
          for (e[r] = 1, n = h[r]; n < h[r + 1]; ++n) v(l[n]);
          (t[d] = r), ++d;
        }
      }
      for (void 0 === i && (e = numeric.rep([y], 0)), void 0 === i && (i = numeric.linspace(0, e.length - 1)), void 0 === t && (t = []), u = i.length - 1; -1 !== u; --u) v(i[u]);
      for (t.length = d, u = t.length - 1; -1 !== u; --u) e[t[u]] = 0;
      for (u = i.length - 1; -1 !== u; --u) (o = i[u]), (e[o] = n[o]);
      for (u = t.length - 1; -1 !== u; --u) {
        for (o = t[u], c = h[o], a = g(h[o + 1], c), f = c; f !== a; ++f)
          if (l[f] === o) {
            e[o] /= p[f];
            break;
          }
        for (s = e[o], f = c; f !== a; ++f) (m = l[f]) !== o && (e[m] -= s * p[f]);
      }
      return e;
    }),
    (numeric.ccsDFS = function (r) {
      (this.k = Array(r)), (this.k1 = Array(r)), (this.j = Array(r));
    }),
    (numeric.ccsDFS.prototype.dfs = function (r, n, e, i, t, u) {
      var o,
        c,
        a,
        f = 0,
        m = t.length,
        s = this.k,
        h = this.k1,
        l = this.j;
      if (0 === i[r])
        for (i[r] = 1, l[0] = r, s[0] = c = n[r], h[0] = a = n[r + 1]; ; )
          if (c >= a) {
            if (((t[m] = l[f]), 0 === f)) return;
            ++m, (c = s[--f]), (a = h[f]);
          } else 0 === i[(o = u[e[c]])] ? ((i[o] = 1), (s[f] = c), (l[++f] = o), (c = n[o]), (h[f] = a = n[o + 1])) : ++c;
    }),
    (numeric.ccsLPSolve = function (r, n, e, i, t, u, o) {
      var c,
        a,
        f,
        m,
        s,
        h,
        l,
        p,
        y,
        g = r[0],
        d = r[1],
        v = r[2],
        x = (g.length, n[0]),
        b = n[1],
        w = n[2];
      for (a = x[t], f = x[t + 1], i.length = 0, c = a; c < f; ++c) o.dfs(u[b[c]], g, d, e, i, u);
      for (c = i.length - 1; -1 !== c; --c) e[i[c]] = 0;
      for (c = a; c !== f; ++c) e[(m = u[b[c]])] = w[c];
      for (c = i.length - 1; -1 !== c; --c) {
        for (s = g[(m = i[c])], h = g[m + 1], l = s; l < h; ++l)
          if (u[d[l]] === m) {
            e[m] /= v[l];
            break;
          }
        for (y = e[m], l = s; l < h; ++l) (p = u[d[l]]) !== m && (e[p] -= y * v[l]);
      }
      return e;
    }),
    (numeric.ccsLUP1 = function (r, n) {
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f = r[0].length - 1,
        m = [numeric.rep([f + 1], 0), [], []],
        s = [numeric.rep([f + 1], 0), [], []],
        h = m[0],
        l = m[1],
        p = m[2],
        y = s[0],
        g = s[1],
        d = s[2],
        v = numeric.rep([f], 0),
        x = numeric.rep([f], 0),
        b = numeric.ccsLPSolve,
        w = (Math.max, Math.abs),
        M = numeric.linspace(0, f - 1),
        k = numeric.linspace(0, f - 1),
        A = new numeric.ccsDFS(f);
      for (void 0 === n && (n = 1), e = 0; e < f; ++e) {
        for (b(m, r, v, x, e, k, A), u = -1, o = -1, i = x.length - 1; -1 !== i; --i) (t = x[i]) <= e || ((c = w(v[t])) > u && ((o = t), (u = c)));
        for (
          w(v[e]) < n * u && ((i = M[e]), (u = M[o]), (M[e] = u), (k[u] = e), (M[o] = i), (k[i] = o), (u = v[e]), (v[e] = v[o]), (v[o] = u)),
            u = h[e],
            o = y[e],
            a = v[e],
            l[u] = M[e],
            p[u] = 1,
            ++u,
            i = x.length - 1;
          -1 !== i;
          --i
        )
          (c = v[(t = x[i])]), (x[i] = 0), (v[t] = 0), t <= e ? ((g[o] = t), (d[o] = c), ++o) : ((l[u] = M[t]), (p[u] = c / a), ++u);
        (h[e + 1] = u), (y[e + 1] = o);
      }
      for (i = l.length - 1; -1 !== i; --i) l[i] = k[l[i]];
      return { L: m, U: s, P: M, Pinv: k };
    }),
    (numeric.ccsDFS0 = function (r) {
      (this.k = Array(r)), (this.k1 = Array(r)), (this.j = Array(r));
    }),
    (numeric.ccsDFS0.prototype.dfs = function (r, n, e, i, t, u, o) {
      var c,
        a,
        f,
        m = 0,
        s = t.length,
        h = this.k,
        l = this.k1,
        p = this.j;
      if (0 === i[r])
        for (i[r] = 1, p[0] = r, h[0] = a = n[u[r]], l[0] = f = n[u[r] + 1]; ; ) {
          if (isNaN(a)) throw new Error('Ow!');
          if (a >= f) {
            if (((t[s] = u[p[m]]), 0 === m)) return;
            ++s, (a = h[--m]), (f = l[m]);
          } else 0 === i[(c = e[a])] ? ((i[c] = 1), (h[m] = a), (p[++m] = c), (a = n[(c = u[c])]), (l[m] = f = n[c + 1])) : ++a;
        }
    }),
    (numeric.ccsLPSolve0 = function (r, n, e, i, t, u, o, c) {
      var a,
        f,
        m,
        s,
        h,
        l,
        p,
        y,
        g,
        d = r[0],
        v = r[1],
        x = r[2],
        b = (d.length, n[0]),
        w = n[1],
        M = n[2];
      for (f = b[t], m = b[t + 1], i.length = 0, a = f; a < m; ++a) c.dfs(w[a], d, v, e, i, u, o);
      for (a = i.length - 1; -1 !== a; --a) e[o[(s = i[a])]] = 0;
      for (a = f; a !== m; ++a) e[(s = w[a])] = M[a];
      for (a = i.length - 1; -1 !== a; --a) {
        for (y = o[(s = i[a])], h = d[s], l = d[s + 1], p = h; p < l; ++p)
          if (v[p] === y) {
            e[y] /= x[p];
            break;
          }
        for (g = e[y], p = h; p < l; ++p) e[v[p]] -= g * x[p];
        e[y] = g;
      }
    }),
    (numeric.ccsLUP0 = function (r, n) {
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f = r[0].length - 1,
        m = [numeric.rep([f + 1], 0), [], []],
        s = [numeric.rep([f + 1], 0), [], []],
        h = m[0],
        l = m[1],
        p = m[2],
        y = s[0],
        g = s[1],
        d = s[2],
        v = numeric.rep([f], 0),
        x = numeric.rep([f], 0),
        b = numeric.ccsLPSolve0,
        w = (Math.max, Math.abs),
        M = numeric.linspace(0, f - 1),
        k = numeric.linspace(0, f - 1),
        A = new numeric.ccsDFS0(f);
      for (void 0 === n && (n = 1), e = 0; e < f; ++e) {
        for (b(m, r, v, x, e, k, M, A), u = -1, o = -1, i = x.length - 1; -1 !== i; --i) (t = x[i]) <= e || ((c = w(v[M[t]])) > u && ((o = t), (u = c)));
        for (
          w(v[M[e]]) < n * u && ((i = M[e]), (u = M[o]), (M[e] = u), (k[u] = e), (M[o] = i), (k[i] = o)),
            u = h[e],
            o = y[e],
            a = v[M[e]],
            l[u] = M[e],
            p[u] = 1,
            ++u,
            i = x.length - 1;
          -1 !== i;
          --i
        )
          (c = v[M[(t = x[i])]]), (x[i] = 0), (v[M[t]] = 0), t <= e ? ((g[o] = t), (d[o] = c), ++o) : ((l[u] = M[t]), (p[u] = c / a), ++u);
        (h[e + 1] = u), (y[e + 1] = o);
      }
      for (i = l.length - 1; -1 !== i; --i) l[i] = k[l[i]];
      return { L: m, U: s, P: M, Pinv: k };
    }),
    (numeric.ccsLUP = numeric.ccsLUP0),
    (numeric.ccsDim = function (r) {
      return [numeric.sup(r[1]) + 1, r[0].length - 1];
    }),
    (numeric.ccsGetBlock = function (r, n, e) {
      var i = numeric.ccsDim(r),
        t = i[0],
        u = i[1];
      void 0 === n ? (n = numeric.linspace(0, t - 1)) : 'number' == typeof n && (n = [n]), void 0 === e ? (e = numeric.linspace(0, u - 1)) : 'number' == typeof e && (e = [e]);
      var o,
        c,
        a,
        f,
        m = n.length,
        s = e.length,
        h = numeric.rep([u], 0),
        l = [],
        p = [],
        y = [h, l, p],
        g = r[0],
        d = r[1],
        v = r[2],
        x = numeric.rep([t], 0),
        b = 0,
        w = numeric.rep([t], 0);
      for (c = 0; c < s; ++c) {
        var M = g[(f = e[c])],
          k = g[f + 1];
        for (o = M; o < k; ++o) (w[(a = d[o])] = 1), (x[a] = v[o]);
        for (o = 0; o < m; ++o) w[n[o]] && ((l[b] = o), (p[b] = x[n[o]]), ++b);
        for (o = M; o < k; ++o) w[(a = d[o])] = 0;
        h[c + 1] = b;
      }
      return y;
    }),
    (numeric.ccsDot = function (r, n) {
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f,
        m,
        s,
        h,
        l = r[0],
        p = r[1],
        y = r[2],
        g = n[0],
        d = n[1],
        v = n[2],
        x = numeric.ccsDim(r),
        b = numeric.ccsDim(n),
        w = x[0],
        M = (x[1], b[1]),
        k = numeric.rep([w], 0),
        A = numeric.rep([w], 0),
        T = Array(w),
        j = numeric.rep([M], 0),
        S = [],
        _ = [],
        V = [j, S, _];
      for (t = 0; t !== M; ++t) {
        for (u = g[t], o = g[t + 1], m = 0, i = u; i < o; ++i)
          for (s = d[i], h = v[i], c = l[s], a = l[s + 1], e = c; e < a; ++e) 0 === A[(f = p[e])] && ((T[m] = f), (A[f] = 1), (m += 1)), (k[f] = k[f] + y[e] * h);
        for (o = (u = j[t]) + m, j[t + 1] = o, i = m - 1; -1 !== i; --i) (h = u + i), (e = T[i]), (S[h] = e), (_[h] = k[e]), (A[e] = 0), (k[e] = 0);
        j[t + 1] = j[t] + m;
      }
      return V;
    }),
    (numeric.ccsLUPSolve = function (r, n) {
      var e = r.L,
        i = r.U,
        t = (r.P, n[0]),
        u = !1;
      'object' != typeof t && ((t = (n = [[0, n.length], numeric.linspace(0, n.length - 1), n])[0]), (u = !0));
      var o,
        c,
        a,
        f,
        m,
        s,
        h = n[1],
        l = n[2],
        p = e[0].length - 1,
        y = t.length - 1,
        g = numeric.rep([p], 0),
        d = Array(p),
        v = numeric.rep([p], 0),
        x = Array(p),
        b = numeric.rep([y + 1], 0),
        w = [],
        M = [],
        k = numeric.ccsTSolve,
        A = 0;
      for (o = 0; o < y; ++o) {
        for (m = 0, a = t[o], f = t[o + 1], c = a; c < f; ++c) (s = r.Pinv[h[c]]), (x[m] = s), (v[s] = l[c]), ++m;
        for (x.length = m, k(e, v, g, x, d), c = x.length - 1; -1 !== c; --c) v[x[c]] = 0;
        if ((k(i, g, v, d, x), u)) return v;
        for (c = d.length - 1; -1 !== c; --c) g[d[c]] = 0;
        for (c = x.length - 1; -1 !== c; --c) (s = x[c]), (w[A] = s), (M[A] = v[s]), (v[s] = 0), ++A;
        b[o + 1] = A;
      }
      return [b, w, M];
    }),
    (numeric.ccsbinop = function (r, n) {
      return (
        void 0 === n && (n = ''),
        Function(
          'X',
          'Y',
          'var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n' +
            n +
            'for(i=0;i<n;++i) {\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Xj[j];\n    x[k] = 1;\n    Zj[p] = k;\n    ++p;\n  }\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Yj[j];\n    y[k] = Yv[j];\n    if(x[k] === 0) {\n      Zj[p] = k;\n      ++p;\n    }\n  }\n  Zi[i+1] = p;\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n  j0 = Zi[i]; j1 = Zi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Zj[j];\n    xk = x[k];\n    yk = y[k];\n' +
            r +
            '\n    Zv[j] = zk;\n  }\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n}\nreturn [Zi,Zj,Zv];'
        )
      );
    }),
    (function () {
      var k, A, B, C;
      for (k in numeric.ops2)
        (A = isFinite(eval('1' + numeric.ops2[k] + '0')) ? '[Y[0],Y[1],numeric.' + k + '(X,Y[2])]' : 'NaN'),
          (B = isFinite(eval('0' + numeric.ops2[k] + '1')) ? '[X[0],X[1],numeric.' + k + '(X[2],Y)]' : 'NaN'),
          (C = isFinite(eval('1' + numeric.ops2[k] + '0')) && isFinite(eval('0' + numeric.ops2[k] + '1')) ? 'numeric.ccs' + k + 'MM(X,Y)' : 'NaN'),
          (numeric['ccs' + k + 'MM'] = numeric.ccsbinop('zk = xk ' + numeric.ops2[k] + 'yk;')),
          (numeric['ccs' + k] = Function('X', 'Y', 'if(typeof X === "number") return ' + A + ';\nif(typeof Y === "number") return ' + B + ';\nreturn ' + C + ';\n'));
    })(),
    (numeric.ccsScatter = function (r) {
      var n,
        e = r[0],
        i = r[1],
        t = r[2],
        u = numeric.sup(i) + 1,
        o = e.length,
        c = numeric.rep([u], 0),
        a = Array(o),
        f = Array(o),
        m = numeric.rep([u], 0);
      for (n = 0; n < o; ++n) m[i[n]]++;
      for (n = 0; n < u; ++n) c[n + 1] = c[n] + m[n];
      var s,
        h,
        l = c.slice(0);
      for (n = 0; n < o; ++n) (a[(s = l[(h = i[n])])] = e[n]), (f[s] = t[n]), (l[h] = l[h] + 1);
      return [c, a, f];
    }),
    (numeric.ccsGather = function (r) {
      var n,
        e,
        i,
        t,
        u,
        o = r[0],
        c = r[1],
        a = r[2],
        f = o.length - 1,
        m = c.length,
        s = Array(m),
        h = Array(m),
        l = Array(m);
      for (u = 0, n = 0; n < f; ++n) for (i = o[n], t = o[n + 1], e = i; e !== t; ++e) (h[u] = n), (s[u] = c[e]), (l[u] = a[e]), ++u;
      return [s, h, l];
    }),
    (numeric.sdim = function r(n, e, i) {
      if ((void 0 === e && (e = []), 'object' != typeof n)) return e;
      var t;
      for (t in (void 0 === i && (i = 0), i in e || (e[i] = 0), n.length > e[i] && (e[i] = n.length), n)) n.hasOwnProperty(t) && r(n[t], e, i + 1);
      return e;
    }),
    (numeric.sclone = function r(n, e, i) {
      void 0 === e && (e = 0), void 0 === i && (i = numeric.sdim(n).length);
      var t,
        u = Array(n.length);
      if (e === i - 1) {
        for (t in n) n.hasOwnProperty(t) && (u[t] = n[t]);
        return u;
      }
      for (t in n) n.hasOwnProperty(t) && (u[t] = r(n[t], e + 1, i));
      return u;
    }),
    (numeric.sdiag = function (r) {
      var n,
        e,
        i = r.length,
        t = Array(i);
      for (n = i - 1; n >= 1; n -= 2) (e = n - 1), (t[n] = []), (t[n][n] = r[n]), (t[e] = []), (t[e][e] = r[e]);
      return 0 === n && ((t[0] = []), (t[0][0] = r[n])), t;
    }),
    (numeric.sidentity = function (r) {
      return numeric.sdiag(numeric.rep([r], 1));
    }),
    (numeric.stranspose = function (r) {
      var n,
        e,
        i,
        t = [];
      r.length;
      for (n in r) if (r.hasOwnProperty(n)) for (e in (i = r[n])) i.hasOwnProperty(e) && ('object' != typeof t[e] && (t[e] = []), (t[e][n] = i[e]));
      return t;
    }),
    (numeric.sLUP = function (r, n) {
      throw new Error('The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.');
    }),
    (numeric.sdotMM = function (r, n) {
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f = r.length,
        m = (n.length, numeric.stranspose(n)),
        s = m.length,
        h = Array(f);
      for (t = f - 1; t >= 0; t--) {
        for (a = [], e = r[t], o = s - 1; o >= 0; o--) {
          for (u in ((c = 0), (i = m[o]), e)) e.hasOwnProperty(u) && u in i && (c += e[u] * i[u]);
          c && (a[o] = c);
        }
        h[t] = a;
      }
      return h;
    }),
    (numeric.sdotMV = function (r, n) {
      var e,
        i,
        t,
        u,
        o = r.length,
        c = Array(o);
      for (i = o - 1; i >= 0; i--) {
        for (t in ((u = 0), (e = r[i]))) e.hasOwnProperty(t) && n[t] && (u += e[t] * n[t]);
        u && (c[i] = u);
      }
      return c;
    }),
    (numeric.sdotVM = function (r, n) {
      var e,
        i,
        t,
        u,
        o = [];
      for (e in r) if (r.hasOwnProperty(e)) for (i in ((t = n[e]), (u = r[e]), t)) t.hasOwnProperty(i) && (o[i] || (o[i] = 0), (o[i] += u * t[i]));
      return o;
    }),
    (numeric.sdotVV = function (r, n) {
      var e,
        i = 0;
      for (e in r) r[e] && n[e] && (i += r[e] * n[e]);
      return i;
    }),
    (numeric.sdot = function (r, n) {
      var e = numeric.sdim(r).length,
        i = numeric.sdim(n).length;
      switch (1e3 * e + i) {
        case 0:
          return r * n;
        case 1001:
          return numeric.sdotVV(r, n);
        case 2001:
          return numeric.sdotMV(r, n);
        case 1002:
          return numeric.sdotVM(r, n);
        case 2002:
          return numeric.sdotMM(r, n);
        default:
          throw new Error('numeric.sdot not implemented for tensors of order ' + e + ' and ' + i);
      }
    }),
    (numeric.sscatter = function (r) {
      var n,
        e,
        i,
        t,
        u = r[0].length,
        o = r.length,
        c = [];
      for (e = u - 1; e >= 0; --e)
        if (r[o - 1][e]) {
          for (t = c, i = 0; i < o - 2; i++) t[(n = r[i][e])] || (t[n] = []), (t = t[n]);
          t[r[i][e]] = r[i + 1][e];
        }
      return c;
    }),
    (numeric.sgather = function r(n, e, i) {
      var t, u, o;
      for (u in (void 0 === e && (e = []), void 0 === i && (i = []), (t = i.length), n))
        if (n.hasOwnProperty(u))
          if (((i[t] = parseInt(u)), 'number' == typeof (o = n[u]))) {
            if (o) {
              if (0 === e.length) for (u = t + 1; u >= 0; --u) e[u] = [];
              for (u = t; u >= 0; --u) e[u].push(i[u]);
              e[t + 1].push(o);
            }
          } else r(o, e, i);
      return i.length > t && i.pop(), e;
    }),
    (numeric.cLU = function (r) {
      var n,
        e,
        i,
        t,
        u,
        o,
        c = r[0],
        a = r[1],
        f = r[2],
        m = c.length,
        s = 0;
      for (n = 0; n < m; n++) c[n] > s && (s = c[n]);
      s++;
      var h,
        l = Array(s),
        p = Array(s),
        y = numeric.rep([s], 1 / 0),
        g = numeric.rep([s], -1 / 0);
      for (i = 0; i < m; i++) (n = c[i]), (e = a[i]) < y[n] && (y[n] = e), e > g[n] && (g[n] = e);
      for (n = 0; n < s - 1; n++) g[n] > g[n + 1] && (g[n + 1] = g[n]);
      for (n = s - 1; n >= 1; n--) y[n] < y[n - 1] && (y[n - 1] = y[n]);
      for (n = 0; n < s; n++) (p[n] = numeric.rep([g[n] - y[n] + 1], 0)), (l[n] = numeric.rep([n - y[n]], 0)), n - y[n] + 1, g[n] - n + 1;
      for (i = 0; i < m; i++) p[(n = c[i])][a[i] - y[n]] = f[i];
      for (n = 0; n < s - 1; n++)
        for (t = n - y[n], x = p[n], e = n + 1; y[e] <= n && e < s; e++)
          if (((u = n - y[e]), (o = g[n] - n), (h = (b = p[e])[u] / x[t]))) {
            for (i = 1; i <= o; i++) b[i + u] -= h * x[i + t];
            l[e][n - y[e]] = h;
          }
      var d,
        v,
        x = [],
        b = [],
        w = [],
        M = [],
        k = [],
        A = [];
      for (m = 0, d = 0, n = 0; n < s; n++) {
        for (t = y[n], u = g[n], v = p[n], e = n; e <= u; e++) v[e - t] && ((x[m] = n), (b[m] = e), (w[m] = v[e - t]), m++);
        for (v = l[n], e = t; e < n; e++) v[e - t] && ((M[d] = n), (k[d] = e), (A[d] = v[e - t]), d++);
        (M[d] = n), (k[d] = n), (A[d] = 1), d++;
      }
      return { U: [x, b, w], L: [M, k, A] };
    }),
    (numeric.cLUsolve = function (r, n) {
      var e,
        i,
        t = r.L,
        u = r.U,
        o = numeric.clone(n),
        c = t[0],
        a = t[1],
        f = t[2],
        m = u[0],
        s = u[1],
        h = u[2],
        l = m.length,
        p = (c.length, o.length);
      for (i = 0, e = 0; e < p; e++) {
        for (; a[i] < e; ) (o[e] -= f[i] * o[a[i]]), i++;
        i++;
      }
      for (i = l - 1, e = p - 1; e >= 0; e--) {
        for (; s[i] > e; ) (o[e] -= h[i] * o[s[i]]), i--;
        (o[e] /= h[i]), i--;
      }
      return o;
    }),
    (numeric.cgrid = function (r, n) {
      'number' == typeof r && (r = [r, r]);
      var e,
        i,
        t,
        u = numeric.rep(r, -1);
      if ('function' != typeof n)
        switch (n) {
          case 'L':
            n = function (n, e) {
              return n >= r[0] / 2 || e < r[1] / 2;
            };
            break;
          default:
            n = function (r, n) {
              return !0;
            };
        }
      for (t = 0, e = 1; e < r[0] - 1; e++) for (i = 1; i < r[1] - 1; i++) n(e, i) && ((u[e][i] = t), t++);
      return u;
    }),
    (numeric.cdelsq = function (r) {
      var n,
        e,
        i,
        t,
        u,
        o = [
          [-1, 0],
          [0, -1],
          [0, 1],
          [1, 0],
        ],
        c = numeric.dim(r),
        a = c[0],
        f = c[1],
        m = [],
        s = [],
        h = [];
      for (n = 1; n < a - 1; n++)
        for (e = 1; e < f - 1; e++)
          if (!(r[n][e] < 0)) {
            for (i = 0; i < 4; i++) (t = n + o[i][0]), (u = e + o[i][1]), r[t][u] < 0 || (m.push(r[n][e]), s.push(r[t][u]), h.push(-1));
            m.push(r[n][e]), s.push(r[n][e]), h.push(4);
          }
      return [m, s, h];
    }),
    (numeric.cdotMV = function (r, n) {
      var e,
        i,
        t,
        u = r[0],
        o = r[1],
        c = r[2],
        a = u.length;
      for (t = 0, i = 0; i < a; i++) u[i] > t && (t = u[i]);
      for (t++, e = numeric.rep([t], 0), i = 0; i < a; i++) e[u[i]] += c[i] * n[o[i]];
      return e;
    }),
    (numeric.Spline = function (r, n, e, i, t) {
      (this.x = r), (this.yl = n), (this.yr = e), (this.kl = i), (this.kr = t);
    }),
    (numeric.Spline.prototype._at = function (r, n) {
      var e,
        i,
        t,
        u = this.x,
        o = this.yl,
        c = this.yr,
        a = this.kl,
        f = this.kr,
        m = numeric.add,
        s = numeric.sub,
        h = numeric.mul;
      (e = s(h(a[n], u[n + 1] - u[n]), s(c[n + 1], o[n]))), (i = m(h(f[n + 1], u[n] - u[n + 1]), s(c[n + 1], o[n])));
      var l = (t = (r - u[n]) / (u[n + 1] - u[n])) * (1 - t);
      return m(m(m(h(1 - t, o[n]), h(t, c[n + 1])), h(e, l * (1 - t))), h(i, l * t));
    }),
    (numeric.Spline.prototype.at = function (r) {
      if ('number' == typeof r) {
        var n,
          e,
          i,
          t = this.x,
          u = t.length,
          o = Math.floor;
        for (n = 0, e = u - 1; e - n > 1; ) t[(i = o((n + e) / 2))] <= r ? (n = i) : (e = i);
        return this._at(r, n);
      }
      u = r.length;
      var c,
        a = Array(u);
      for (c = u - 1; -1 !== c; --c) a[c] = this.at(r[c]);
      return a;
    }),
    (numeric.Spline.prototype.diff = function () {
      var r,
        n,
        e,
        i = this.x,
        t = this.yl,
        u = this.yr,
        o = this.kl,
        c = this.kr,
        a = t.length,
        f = o,
        m = c,
        s = Array(a),
        h = Array(a),
        l = numeric.add,
        p = numeric.mul,
        y = numeric.div,
        g = numeric.sub;
      for (r = a - 1; -1 !== r; --r)
        (n = i[r + 1] - i[r]),
          (e = g(u[r + 1], t[r])),
          (s[r] = y(l(p(e, 6), p(o[r], -4 * n), p(c[r + 1], -2 * n)), n * n)),
          (h[r + 1] = y(l(p(e, -6), p(o[r], 2 * n), p(c[r + 1], 4 * n)), n * n));
      return new numeric.Spline(i, f, m, s, h);
    }),
    (numeric.Spline.prototype.roots = function () {
      function r(r) {
        return r * r;
      }
      var n = [],
        e = this.x,
        i = this.yl,
        t = this.yr,
        u = this.kl,
        o = this.kr;
      'number' == typeof i[0] && ((i = [i]), (t = [t]), (u = [u]), (o = [o]));
      var c,
        a,
        f,
        m,
        s,
        h,
        l,
        p,
        y,
        g,
        d,
        v,
        x,
        b,
        w,
        M,
        k,
        A,
        T,
        j,
        S,
        _,
        V,
        P = i.length,
        q = e.length - 1,
        F = ((n = Array(P)), Math.sqrt);
      for (c = 0; c !== P; ++c) {
        for (m = i[c], s = t[c], h = u[c], l = o[c], p = [], a = 0; a !== q; a++) {
          for (
            a > 0 && s[a] * m[a] < 0 && p.push(e[a]),
              M = e[a + 1] - e[a],
              e[a],
              d = m[a],
              v = s[a + 1],
              y = h[a] / M,
              x = (g = l[a + 1] / M) + 3 * d + 2 * y - 3 * v,
              b = 3 * (g + y + 2 * (d - v)),
              (w = r(y - g + 3 * (d - v)) + 12 * g * d) <= 0
                ? (k = (A = x / b) > e[a] && A < e[a + 1] ? [e[a], A, e[a + 1]] : [e[a], e[a + 1]])
                : ((A = (x - F(w)) / b), (T = (x + F(w)) / b), (k = [e[a]]), A > e[a] && A < e[a + 1] && k.push(A), T > e[a] && T < e[a + 1] && k.push(T), k.push(e[a + 1])),
              S = k[0],
              A = this._at(S, a),
              f = 0;
            f < k.length - 1;
            f++
          )
            if (((_ = k[f + 1]), (T = this._at(_, a)), 0 !== A))
              if (0 === T || A * T > 0) (S = _), (A = T);
              else {
                for (var L = 0; !((V = (A * _ - T * S) / (A - T)) <= S || V >= _); )
                  if ((j = this._at(V, a)) * T > 0) (_ = V), (T = j), -1 === L && (A *= 0.5), (L = -1);
                  else {
                    if (!(j * A > 0)) break;
                    (S = V), (A = j), 1 === L && (T *= 0.5), (L = 1);
                  }
                p.push(V), (S = k[f + 1]), (A = this._at(S, a));
              }
            else p.push(S), (S = _), (A = T);
          0 === T && p.push(_);
        }
        n[c] = p;
      }
      return 'number' == typeof this.yl[0] ? n[0] : n;
    }),
    (numeric.spline = function (r, n, e, i) {
      var t,
        u = r.length,
        o = [],
        c = [],
        a = [],
        f = numeric.sub,
        m = numeric.mul,
        s = numeric.add;
      for (t = u - 2; t >= 0; t--) (c[t] = r[t + 1] - r[t]), (a[t] = f(n[t + 1], n[t]));
      ('string' != typeof e && 'string' != typeof i) || (e = i = 'periodic');
      var h = [[], [], []];
      switch (typeof e) {
        case 'undefined':
          (o[0] = m(3 / (c[0] * c[0]), a[0])), h[0].push(0, 0), h[1].push(0, 1), h[2].push(2 / c[0], 1 / c[0]);
          break;
        case 'string':
          (o[0] = s(m(3 / (c[u - 2] * c[u - 2]), a[u - 2]), m(3 / (c[0] * c[0]), a[0]))),
            h[0].push(0, 0, 0),
            h[1].push(u - 2, 0, 1),
            h[2].push(1 / c[u - 2], 2 / c[u - 2] + 2 / c[0], 1 / c[0]);
          break;
        default:
          (o[0] = e), h[0].push(0), h[1].push(0), h[2].push(1);
      }
      for (t = 1; t < u - 1; t++)
        (o[t] = s(m(3 / (c[t - 1] * c[t - 1]), a[t - 1]), m(3 / (c[t] * c[t]), a[t]))),
          h[0].push(t, t, t),
          h[1].push(t - 1, t, t + 1),
          h[2].push(1 / c[t - 1], 2 / c[t - 1] + 2 / c[t], 1 / c[t]);
      switch (typeof i) {
        case 'undefined':
          (o[u - 1] = m(3 / (c[u - 2] * c[u - 2]), a[u - 2])), h[0].push(u - 1, u - 1), h[1].push(u - 2, u - 1), h[2].push(1 / c[u - 2], 2 / c[u - 2]);
          break;
        case 'string':
          h[1][h[1].length - 1] = 0;
          break;
        default:
          (o[u - 1] = i), h[0].push(u - 1), h[1].push(u - 1), h[2].push(1);
      }
      o = 'number' != typeof o[0] ? numeric.transpose(o) : [o];
      var l = Array(o.length);
      if ('string' == typeof e) for (t = l.length - 1; -1 !== t; --t) (l[t] = numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(h)), o[t])), (l[t][u - 1] = l[t][0]);
      else for (t = l.length - 1; -1 !== t; --t) l[t] = numeric.cLUsolve(numeric.cLU(h), o[t]);
      return (l = 'number' == typeof n[0] ? l[0] : numeric.transpose(l)), new numeric.Spline(r, n, n, l, l);
    }),
    (numeric.fftpow2 = function r(n, e) {
      var i = n.length;
      if (1 !== i) {
        var t,
          u,
          o = Math.cos,
          c = Math.sin,
          a = Array(i / 2),
          f = Array(i / 2),
          m = Array(i / 2),
          s = Array(i / 2);
        for (u = i / 2, t = i - 1; -1 !== t; --t) (m[--u] = n[t]), (s[u] = e[t]), --t, (a[u] = n[t]), (f[u] = e[t]);
        r(a, f), r(m, s), (u = i / 2);
        var h,
          l,
          p,
          y = -6.283185307179586 / i;
        for (t = i - 1; -1 !== t; --t) -1 === --u && (u = i / 2 - 1), (l = o((h = y * t))), (p = c(h)), (n[t] = a[u] + l * m[u] - p * s[u]), (e[t] = f[u] + l * s[u] + p * m[u]);
      }
    }),
    (numeric._ifftpow2 = function r(n, e) {
      var i = n.length;
      if (1 !== i) {
        var t,
          u,
          o = Math.cos,
          c = Math.sin,
          a = Array(i / 2),
          f = Array(i / 2),
          m = Array(i / 2),
          s = Array(i / 2);
        for (u = i / 2, t = i - 1; -1 !== t; --t) (m[--u] = n[t]), (s[u] = e[t]), --t, (a[u] = n[t]), (f[u] = e[t]);
        r(a, f), r(m, s), (u = i / 2);
        var h,
          l,
          p,
          y = 6.283185307179586 / i;
        for (t = i - 1; -1 !== t; --t) -1 === --u && (u = i / 2 - 1), (l = o((h = y * t))), (p = c(h)), (n[t] = a[u] + l * m[u] - p * s[u]), (e[t] = f[u] + l * s[u] + p * m[u]);
      }
    }),
    (numeric.ifftpow2 = function (r, n) {
      numeric._ifftpow2(r, n), numeric.diveq(r, r.length), numeric.diveq(n, n.length);
    }),
    (numeric.convpow2 = function (r, n, e, i) {
      var t, u, o, c, a;
      for (numeric.fftpow2(r, n), numeric.fftpow2(e, i), t = r.length - 1; -1 !== t; --t)
        (u = r[t]), (c = n[t]), (o = e[t]), (a = i[t]), (r[t] = u * o - c * a), (n[t] = u * a + c * o);
      numeric.ifftpow2(r, n);
    }),
    (numeric.T.prototype.fft = function () {
      var r,
        n,
        e = this.x,
        i = this.y,
        t = e.length,
        u = Math.log,
        o = u(2),
        c = Math.ceil(u(2 * t - 1) / o),
        a = Math.pow(2, c),
        f = numeric.rep([a], 0),
        m = numeric.rep([a], 0),
        s = Math.cos,
        h = Math.sin,
        l = -3.141592653589793 / t,
        p = numeric.rep([a], 0),
        y = numeric.rep([a], 0);
      Math.floor(t / 2);
      for (r = 0; r < t; r++) p[r] = e[r];
      if (void 0 !== i) for (r = 0; r < t; r++) y[r] = i[r];
      for (f[0] = 1, r = 1; r <= a / 2; r++) (n = l * r * r), (f[r] = s(n)), (m[r] = h(n)), (f[a - r] = s(n)), (m[a - r] = h(n));
      var g = new numeric.T(p, y),
        d = new numeric.T(f, m);
      return (g = g.mul(d)), numeric.convpow2(g.x, g.y, numeric.clone(d.x), numeric.neg(d.y)), ((g = g.mul(d)).x.length = t), (g.y.length = t), g;
    }),
    (numeric.T.prototype.ifft = function () {
      var r,
        n,
        e = this.x,
        i = this.y,
        t = e.length,
        u = Math.log,
        o = u(2),
        c = Math.ceil(u(2 * t - 1) / o),
        a = Math.pow(2, c),
        f = numeric.rep([a], 0),
        m = numeric.rep([a], 0),
        s = Math.cos,
        h = Math.sin,
        l = 3.141592653589793 / t,
        p = numeric.rep([a], 0),
        y = numeric.rep([a], 0);
      Math.floor(t / 2);
      for (r = 0; r < t; r++) p[r] = e[r];
      if (void 0 !== i) for (r = 0; r < t; r++) y[r] = i[r];
      for (f[0] = 1, r = 1; r <= a / 2; r++) (n = l * r * r), (f[r] = s(n)), (m[r] = h(n)), (f[a - r] = s(n)), (m[a - r] = h(n));
      var g = new numeric.T(p, y),
        d = new numeric.T(f, m);
      return (g = g.mul(d)), numeric.convpow2(g.x, g.y, numeric.clone(d.x), numeric.neg(d.y)), ((g = g.mul(d)).x.length = t), (g.y.length = t), g.div(t);
    }),
    (numeric.gradient = function (r, n) {
      var e = n.length,
        i = r(n);
      if (isNaN(i)) throw new Error('gradient: f(x) is a NaN!');
      var t,
        u,
        o,
        c,
        a,
        f,
        m,
        s,
        h,
        l = Math.max,
        p = numeric.clone(n),
        y = Array(e),
        g = (numeric.div, numeric.sub, (l = Math.max), Math.abs),
        d = Math.min,
        v = 0;
      for (t = 0; t < e; t++)
        for (var x = l(1e-6 * i, 1e-8); ; ) {
          if (++v > 20) throw new Error('Numerical gradient fails');
          if (((p[t] = n[t] + x), (u = r(p)), (p[t] = n[t] - x), (o = r(p)), (p[t] = n[t]), isNaN(u) || isNaN(o))) x /= 16;
          else {
            if (
              ((y[t] = (u - o) / (2 * x)),
              (c = n[t] - x),
              (a = n[t]),
              (f = n[t] + x),
              (m = (u - i) / x),
              (s = (i - o) / x),
              (h = l(g(y[t]), g(i), g(u), g(o), g(c), g(a), g(f), 1e-8)),
              !(d(l(g(m - y[t]), g(s - y[t]), g(m - s)) / h, x / h) > 0.001))
            )
              break;
            x /= 16;
          }
        }
      return y;
    }),
    (numeric.uncmin = function (r, n, e, i, t, u, o) {
      var c = numeric.gradient;
      void 0 === o && (o = {}),
        void 0 === e && (e = 1e-8),
        void 0 === i &&
          (i = function (n) {
            return c(r, n);
          }),
        void 0 === t && (t = 1e3);
      var a,
        f,
        m = (n = numeric.clone(n)).length,
        s = r(n);
      if (isNaN(s)) throw new Error('uncmin: f(x0) is a NaN!');
      var h = Math.max,
        l = numeric.norm2;
      e = h(e, numeric.epsilon);
      var p,
        y,
        g,
        d,
        v,
        x,
        b,
        w,
        M,
        k,
        A = o.Hinv || numeric.identity(m),
        T = numeric.dot,
        j = (numeric.inv, numeric.sub),
        S = numeric.add,
        _ = numeric.tensor,
        V = numeric.div,
        P = numeric.mul,
        q = numeric.all,
        F = numeric.isFinite,
        L = numeric.neg,
        N = 0,
        O = '';
      for (y = i(n); N < t; ) {
        if ('function' == typeof u && u(N, n, s, y, A)) {
          O = 'Callback returned true';
          break;
        }
        if (!q(F(y))) {
          O = 'Gradient has Infinity or NaN';
          break;
        }
        if (!q(F((p = L(T(A, y)))))) {
          O = 'Search direction has Infinity or NaN';
          break;
        }
        if ((k = l(p)) < e) {
          O = 'Newton step smaller than tol';
          break;
        }
        for (M = 1, f = T(y, p), v = n; N < t && !(M * k < e) && ((v = S(n, (d = P(p, M)))), (a = r(v)) - s >= 0.1 * M * f || isNaN(a)); ) (M *= 0.5), ++N;
        if (M * k < e) {
          O = 'Line search step size smaller than tol';
          break;
        }
        if (N === t) {
          O = 'maxit reached during line search';
          break;
        }
        (A = j(S(A, P(((w = T((x = j((g = i(v)), y)), d)) + T(x, (b = T(A, x)))) / (w * w), _(d, d))), V(S(_(b, d), _(d, b)), w))), (n = v), (s = a), (y = g), ++N;
      }
      return { solution: n, f: s, gradient: y, invHessian: A, iterations: N, message: O };
    }),
    (numeric.Dopri = function (r, n, e, i, t, u, o) {
      (this.x = r), (this.y = n), (this.f = e), (this.ymid = i), (this.iterations = t), (this.events = o), (this.message = u);
    }),
    (numeric.Dopri.prototype._at = function (r, n) {
      function e(r) {
        return r * r;
      }
      var i,
        t,
        u,
        o,
        c,
        a,
        f,
        m,
        s,
        h = this.x,
        l = this.y,
        p = this.f,
        y = this.ymid,
        g = (h.length, Math.floor, numeric.add),
        d = numeric.mul,
        v = numeric.sub;
      return (
        (i = h[n]),
        (t = h[n + 1]),
        (o = l[n]),
        (c = l[n + 1]),
        (u = i + 0.5 * (t - i)),
        (a = y[n]),
        (f = v(p[n], d(o, 1 / (i - u) + 2 / (i - t)))),
        (m = v(p[n + 1], d(c, 1 / (t - u) + 2 / (t - i)))),
        g(
          g(
            g(
              g(
                d(
                  o,
                  (s = [
                    (e(r - t) * (r - u)) / e(i - t) / (i - u),
                    (e(r - i) * e(r - t)) / e(i - u) / e(t - u),
                    (e(r - i) * (r - u)) / e(t - i) / (t - u),
                    ((r - i) * e(r - t) * (r - u)) / e(i - t) / (i - u),
                    ((r - t) * e(r - i) * (r - u)) / e(i - t) / (t - u),
                  ])[0]
                ),
                d(a, s[1])
              ),
              d(c, s[2])
            ),
            d(f, s[3])
          ),
          d(m, s[4])
        )
      );
    }),
    (numeric.Dopri.prototype.at = function (r) {
      var n,
        e,
        i,
        t = Math.floor;
      if ('number' != typeof r) {
        var u = r.length,
          o = Array(u);
        for (n = u - 1; -1 !== n; --n) o[n] = this.at(r[n]);
        return o;
      }
      var c = this.x;
      for (n = 0, e = c.length - 1; e - n > 1; ) c[(i = t(0.5 * (n + e)))] <= r ? (n = i) : (e = i);
      return this._at(r, n);
    }),
    (numeric.dopri = function (r, n, e, i, t, u, o) {
      void 0 === t && (t = 1e-6), void 0 === u && (u = 1e3);
      var c,
        a,
        f,
        m,
        s,
        h,
        l,
        p,
        y,
        g,
        d,
        v,
        x,
        b = [r],
        w = [e],
        M = [i(r, e)],
        k = [],
        A = [0.075, 0.225],
        T = [44 / 45, -56 / 15, 32 / 9],
        j = [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729],
        S = [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656],
        _ = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84],
        V = [0.10013431883002395, 0, 0.3918321794184259, -0.02982460176594817, 0.05893268337240795, -0.04497888809104361, 0.023904308236133973],
        P = [0.2, 0.3, 0.8, 8 / 9, 1, 1],
        q = [-71 / 57600, 0, 71 / 16695, -71 / 1920, 17253 / 339200, -22 / 525, 0.025],
        F = 0,
        L = (n - r) / 10,
        N = 0,
        O = numeric.add,
        U = numeric.mul,
        D = (Math.max, Math.min),
        B = Math.abs,
        R = numeric.norminf,
        X = Math.pow,
        E = numeric.any,
        Y = numeric.lt,
        I = numeric.and,
        Q = (numeric.sub, new numeric.Dopri(b, w, M, k, -1, ''));
      for ('function' == typeof o && (d = o(r, e)); r < n && N < u; )
        if (
          (++N,
          r + L > n && (L = n - r),
          (c = i(r + P[0] * L, O(e, U(0.2 * L, M[F])))),
          (a = i(r + P[1] * L, O(O(e, U(A[0] * L, M[F])), U(A[1] * L, c)))),
          (f = i(r + P[2] * L, O(O(O(e, U(T[0] * L, M[F])), U(T[1] * L, c)), U(T[2] * L, a)))),
          (m = i(r + P[3] * L, O(O(O(O(e, U(j[0] * L, M[F])), U(j[1] * L, c)), U(j[2] * L, a)), U(j[3] * L, f)))),
          (s = i(r + P[4] * L, O(O(O(O(O(e, U(S[0] * L, M[F])), U(S[1] * L, c)), U(S[2] * L, a)), U(S[3] * L, f)), U(S[4] * L, m)))),
          (h = i(r + L, (y = O(O(O(O(O(e, U(M[F], L * _[0])), U(a, L * _[2])), U(f, L * _[3])), U(m, L * _[4])), U(s, L * _[5]))))),
          (g = 'number' == typeof (l = O(O(O(O(O(U(M[F], L * q[0]), U(a, L * q[2])), U(f, L * q[3])), U(m, L * q[4])), U(s, L * q[5])), U(h, L * q[6]))) ? B(l) : R(l)) > t)
        ) {
          if (r + (L = 0.2 * L * X(t / g, 0.25)) === r) {
            Q.msg = 'Step size became too small';
            break;
          }
        } else {
          if (
            ((k[F] = O(O(O(O(O(O(e, U(M[F], L * V[0])), U(a, L * V[2])), U(f, L * V[3])), U(m, L * V[4])), U(s, L * V[5])), U(h, L * V[6]))),
            (b[++F] = r + L),
            (w[F] = y),
            (M[F] = h),
            'function' == typeof o)
          ) {
            var C,
              Z,
              H = r,
              z = r + 0.5 * L;
            if (((v = o(z, k[F - 1])), E((x = I(Y(d, 0), Y(0, v)))) || ((H = z), (d = v), (v = o((z = r + L), y)), (x = I(Y(d, 0), Y(0, v)))), E(x))) {
              for (var G, $, W = 0, J = 1, K = 1; ; ) {
                if ('number' == typeof d) Z = (K * v * H - J * d * z) / (K * v - J * d);
                else for (Z = z, p = d.length - 1; -1 !== p; --p) d[p] < 0 && v[p] > 0 && (Z = D(Z, (K * v[p] * H - J * d[p] * z) / (K * v[p] - J * d[p])));
                if (Z <= H || Z >= z) break;
                ($ = o(Z, (C = Q._at(Z, F - 1)))),
                  E((G = I(Y(d, 0), Y(0, $))))
                    ? ((z = Z), (v = $), (x = G), (K = 1), -1 === W ? (J *= 0.5) : (J = 1), (W = -1))
                    : ((H = Z), (d = $), (J = 1), 1 === W ? (K *= 0.5) : (K = 1), (W = 1));
              }
              return (y = Q._at(0.5 * (r + Z), F - 1)), (Q.f[F] = i(Z, C)), (Q.x[F] = Z), (Q.y[F] = C), (Q.ymid[F - 1] = y), (Q.events = x), (Q.iterations = N), Q;
            }
          }
          (r += L), (e = y), (d = v), (L = D(0.8 * L * X(t / g, 0.25), 4 * L));
        }
      return (Q.iterations = N), Q;
    }),
    (numeric.LU = function (r, n) {
      n = n || !1;
      var e,
        i,
        t,
        u,
        o,
        c,
        a,
        f,
        m,
        s = Math.abs,
        h = r.length,
        l = h - 1,
        p = new Array(h);
      for (n || (r = numeric.clone(r)), t = 0; t < h; ++t) {
        for (a = t, m = s((c = r[t])[t]), i = t + 1; i < h; ++i) m < (u = s(r[i][t])) && ((m = u), (a = i));
        for (p[t] = a, a != t && ((r[t] = r[a]), (r[a] = c), (c = r[t])), o = c[t], e = t + 1; e < h; ++e) r[e][t] /= o;
        for (e = t + 1; e < h; ++e) {
          for (f = r[e], i = t + 1; i < l; ++i) (f[i] -= f[t] * c[i]), (f[++i] -= f[t] * c[i]);
          i === l && (f[i] -= f[t] * c[i]);
        }
      }
      return { LU: r, P: p };
    }),
    (numeric.LUsolve = function (r, n) {
      var e,
        i,
        t,
        u,
        o,
        c = r.LU,
        a = c.length,
        f = numeric.clone(n),
        m = r.P;
      for (e = a - 1; -1 !== e; --e) f[e] = n[e];
      for (e = 0; e < a; ++e) for (t = m[e], m[e] !== e && ((o = f[e]), (f[e] = f[t]), (f[t] = o)), u = c[e], i = 0; i < e; ++i) f[e] -= f[i] * u[i];
      for (e = a - 1; e >= 0; --e) {
        for (u = c[e], i = e + 1; i < a; ++i) f[e] -= f[i] * u[i];
        f[e] /= u[e];
      }
      return f;
    }),
    (numeric.solve = function (r, n, e) {
      return numeric.LUsolve(numeric.LU(r, e), n);
    }),
    (numeric.echelonize = function (r) {
      var n,
        e,
        i,
        t,
        u,
        o,
        c,
        a,
        f = numeric.dim(r),
        m = f[0],
        s = f[1],
        h = numeric.identity(m),
        l = Array(m),
        p = Math.abs,
        y = numeric.diveq;
      for (r = numeric.clone(r), n = 0; n < m; ++n) {
        for (i = 0, u = r[n], o = h[n], e = 1; e < s; ++e) p(u[i]) < p(u[e]) && (i = e);
        for (l[n] = i, y(o, u[i]), y(u, u[i]), e = 0; e < m; ++e)
          if (e !== n) {
            for (a = (c = r[e])[i], t = s - 1; -1 !== t; --t) c[t] -= u[t] * a;
            for (c = h[e], t = m - 1; -1 !== t; --t) c[t] -= o[t] * a;
          }
      }
      return { I: h, A: r, P: l };
    }),
    (numeric.__solveLP = function (r, n, e, i, t, u, o) {
      var c,
        a,
        f,
        m,
        s = numeric.sum,
        h = (numeric.log, numeric.mul),
        l = numeric.sub,
        p = numeric.dot,
        y = numeric.div,
        g = numeric.add,
        d = r.length,
        v = e.length,
        x = !1,
        b = 1,
        w = (numeric.transpose(n), numeric.svd, numeric.transpose),
        M = (numeric.leq, Math.sqrt),
        k = Math.abs,
        A = (numeric.muleq, numeric.norminf, numeric.any, Math.min),
        T = numeric.all,
        j = numeric.gt,
        S = Array(d),
        _ = Array(v),
        V = (numeric.rep([v], 1), numeric.solve),
        P = l(e, p(n, u)),
        q = p(r, r);
      for (f = 0; f < t; ++f) {
        var F, L;
        for (F = v - 1; -1 !== F; --F) _[F] = y(n[F], P[F]);
        var N = w(_);
        for (F = d - 1; -1 !== F; --F) S[F] = s(N[F]);
        b = 0.25 * k(q / p(r, S));
        var O = 100 * M(q / p(S, S));
        for ((!isFinite(b) || b > O) && (b = O), m = g(r, h(b, S)), a = p(N, _), F = d - 1; -1 !== F; --F) a[F][F] += 1;
        var U = y(P, p(n, (L = V(a, y(m, b), !0)))),
          D = 1;
        for (F = v - 1; -1 !== F; --F) U[F] < 0 && (D = A(D, -0.999 * U[F]));
        if (!T(j((P = l(e, p(n, (c = l(u, h(L, D)))))), 0))) return { solution: u, message: '', iterations: f };
        if (((u = c), b < i)) return { solution: c, message: '', iterations: f };
        if (o) {
          var B = p(r, m),
            R = p(n, m);
          for (x = !0, F = v - 1; -1 !== F; --F)
            if (B * R[F] < 0) {
              x = !1;
              break;
            }
        } else x = !(u[d - 1] >= 0);
        if (x) return { solution: c, message: 'Unbounded', iterations: f };
      }
      return { solution: u, message: 'maximum iteration count exceeded', iterations: f };
    }),
    (numeric._solveLP = function (r, n, e, i, t) {
      var u = r.length,
        o = e.length,
        c = (numeric.sum, numeric.log, numeric.mul, numeric.sub),
        a = numeric.dot,
        f = (numeric.div, numeric.add, numeric.rep([u], 0).concat([1])),
        m = numeric.rep([o, 1], -1),
        s = numeric.blockMatrix([[n, m]]),
        h = e,
        l = numeric.rep([u], 0).concat(Math.max(0, numeric.sup(numeric.neg(e))) + 1),
        p = numeric.__solveLP(f, s, h, i, t, l, !1),
        y = numeric.clone(p.solution);
      if (((y.length = u), numeric.inf(c(e, a(n, y))) < 0)) return { solution: NaN, message: 'Infeasible', iterations: p.iterations };
      var g = numeric.__solveLP(r, n, e, i, t - p.iterations, y, !0);
      return (g.iterations += p.iterations), g;
    }),
    (numeric.solveLP = function (r, n, e, i, t, u, o) {
      if ((void 0 === o && (o = 1e3), void 0 === u && (u = numeric.epsilon), void 0 === i)) return numeric._solveLP(r, n, e, u, o);
      var c,
        a = i.length,
        f = i[0].length,
        m = n.length,
        s = numeric.echelonize(i),
        h = numeric.rep([f], 0),
        l = s.P,
        p = [];
      for (c = l.length - 1; -1 !== c; --c) h[l[c]] = 1;
      for (c = f - 1; -1 !== c; --c) 0 === h[c] && p.push(c);
      var y = numeric.getRange,
        g = numeric.linspace(0, a - 1),
        d = numeric.linspace(0, m - 1),
        v = y(i, g, p),
        x = y(n, d, l),
        b = y(n, d, p),
        w = numeric.dot,
        M = numeric.sub,
        k = w(x, s.I),
        A = M(b, w(k, v)),
        T = M(e, w(k, t)),
        j = Array(l.length),
        S = Array(p.length);
      for (c = l.length - 1; -1 !== c; --c) j[c] = r[l[c]];
      for (c = p.length - 1; -1 !== c; --c) S[c] = r[p[c]];
      var _ = M(S, w(j, w(s.I, v))),
        V = numeric._solveLP(_, A, T, u, o),
        P = V.solution;
      if (P != P) return V;
      var q = w(s.I, M(t, w(v, P))),
        F = Array(r.length);
      for (c = l.length - 1; -1 !== c; --c) F[l[c]] = q[c];
      for (c = p.length - 1; -1 !== c; --c) F[p[c]] = P[c];
      return { solution: F, message: V.message, iterations: V.iterations };
    }),
    (numeric.MPStoLP = function (r) {
      r instanceof String && r.split('\n');
      var n,
        e,
        i,
        t,
        u = 0,
        o = ['Initial state', 'NAME', 'ROWS', 'COLUMNS', 'RHS', 'BOUNDS', 'ENDATA'],
        c = r.length,
        a = 0,
        f = {},
        m = [],
        s = 0,
        h = {},
        l = 0,
        p = [],
        y = [],
        g = [];
      function d(e) {
        throw new Error('MPStoLP: ' + e + '\nLine ' + n + ': ' + r[n] + '\nCurrent state: ' + o[u] + '\n');
      }
      for (n = 0; n < c; ++n) {
        var v = (i = r[n]).match(/\S*/g),
          x = [];
        for (e = 0; e < v.length; ++e) '' !== v[e] && x.push(v[e]);
        if (0 !== x.length) {
          for (e = 0; e < o.length && i.substr(0, o[e].length) !== o[e]; ++e);
          if (e < o.length) {
            if (((u = e), 1 === e && (t = x[1]), 6 === e)) return { name: t, c: p, A: numeric.transpose(y), b: g, rows: f, vars: h };
          } else
            switch (u) {
              case 0:
              case 1:
                d('Unexpected line');
              case 2:
                switch (x[0]) {
                  case 'N':
                    0 === a ? (a = x[1]) : d('Two or more N rows');
                    break;
                  case 'L':
                    (f[x[1]] = s), (m[s] = 1), (g[s] = 0), ++s;
                    break;
                  case 'G':
                    (f[x[1]] = s), (m[s] = -1), (g[s] = 0), ++s;
                    break;
                  case 'E':
                    (f[x[1]] = s), (m[s] = 0), (g[s] = 0), ++s;
                    break;
                  default:
                    d('Parse error ' + numeric.prettyPrint(x));
                }
                break;
              case 3:
                h.hasOwnProperty(x[0]) || ((h[x[0]] = l), (p[l] = 0), (y[l] = numeric.rep([s], 0)), ++l);
                var b = h[x[0]];
                for (e = 1; e < x.length; e += 2)
                  if (x[e] !== a) {
                    var w = f[x[e]];
                    y[b][w] = (m[w] < 0 ? -1 : 1) * parseFloat(x[e + 1]);
                  } else p[b] = parseFloat(x[e + 1]);
                break;
              case 4:
                for (e = 1; e < x.length; e += 2) g[f[x[e]]] = (m[f[x[e]]] < 0 ? -1 : 1) * parseFloat(x[e + 1]);
                break;
              case 5:
                break;
              case 6:
                d('Internal error');
            }
        }
      }
      d('Reached end of file without ENDATA');
    }),
    (numeric.seedrandom = { pow: Math.pow, random: Math.random }),
    (function (r, n, e, i, t, u, o) {
      function c(r, n, e, i) {
        for (r += '', e = 0, i = 0; i < r.length; i++) n[a(i)] = a((e ^= 19 * n[a(i)]) + r.charCodeAt(i));
        for (i in ((r = ''), n)) r += String.fromCharCode(n[i]);
        return r;
      }
      function a(r) {
        return r & (e - 1);
      }
      (n.seedrandom = function (i, f) {
        var m,
          s = [];
        return (
          (i = c(
            (function r(n, e, i, t, u) {
              i = [];
              u = typeof n;
              if (e && 'object' == u)
                for (t in n)
                  if (t.indexOf('S') < 5)
                    try {
                      i.push(r(n[t], e - 1));
                    } catch (r) {}
              return i.length ? i : n + ('string' != u ? '\0' : '');
            })(f ? [i, r] : arguments.length ? i : [new Date().getTime(), r, window], 3),
            s
          )),
          c(
            (m = new (function (r) {
              var n,
                i,
                t = this,
                u = r.length,
                o = 0,
                c = (t.i = t.j = t.m = 0);
              (t.S = []), (t.c = []), u || (r = [u++]);
              for (; o < e; ) t.S[o] = o++;
              for (o = 0; o < e; o++) (n = t.S[o]), (c = a(c + n + r[o % u])), (i = t.S[c]), (t.S[o] = i), (t.S[c] = n);
              (t.g = function (r) {
                var n = t.S,
                  i = a(t.i + 1),
                  u = n[i],
                  o = a(t.j + u),
                  c = n[o];
                (n[i] = c), (n[o] = u);
                for (var f = n[a(u + c)]; --r; ) (i = a(i + 1)), (u = n[i]), (o = a(o + u)), (c = n[o]), (n[i] = c), (n[o] = u), (f = f * e + n[a(u + c)]);
                return (t.i = i), (t.j = o), f;
              }),
                t.g(e);
            })(s)).S,
            r
          ),
          (n.random = function () {
            for (var r = m.g(6), n = o, i = 0; r < t; ) (r = (r + i) * e), (n *= e), (i = m.g(1));
            for (; r >= u; ) (r /= 2), (n /= 2), (i >>>= 1);
            return (r + i) / n;
          }),
          i
        );
      }),
        (o = n.pow(e, 6)),
        (t = n.pow(2, t)),
        (u = 2 * t),
        c(n.random(), r);
    })([], numeric.seedrandom, 256, 0, 52),
    (function (r) {
      function n(r) {
        if ('object' != typeof r) return r;
        var e,
          i = [],
          t = r.length;
        for (e = 0; e < t; e++) i[e + 1] = n(r[e]);
        return i;
      }
      function e(r) {
        if ('object' != typeof r) return r;
        var n,
          i = [],
          t = r.length;
        for (n = 1; n < t; n++) i[n - 1] = e(r[n]);
        return i;
      }
      function i(r, n, e, i, t, u, o, c, a, f, m, s, h, l, p, y) {
        var g, d, v, x, b, w, M, k, A, T, j, S, _, V, P, q, F, L, N, O, U, D, B, R, X, E, Y;
        (_ = Math.min(i, f)), (v = 2 * i + (_ * (_ + 5)) / 2 + 2 * f + 1), (R = 1e-60);
        do {
          (X = 1 + 0.1 * (R += R)), (E = 1 + 0.2 * R);
        } while (X <= 1 || E <= 1);
        for (g = 1; g <= i; g += 1) p[g] = n[g];
        for (g = i + 1; g <= v; g += 1) p[g] = 0;
        for (g = 1; g <= f; g += 1) s[g] = 0;
        if (((b = []), 0 === y[1])) {
          if (
            ((function (r, n, e, i) {
              var t, u, o, c, a, f;
              for (u = 1; u <= e; u += 1) {
                if (((i[1] = u), (f = 0), (o = u - 1) < 1)) {
                  if ((f = r[u][u] - f) <= 0) break;
                  r[u][u] = Math.sqrt(f);
                } else {
                  for (c = 1; c <= o; c += 1) {
                    for (a = r[c][u], t = 1; t < c; t += 1) a -= r[t][u] * r[t][c];
                    (a /= r[c][c]), (r[c][u] = a), (f += a * a);
                  }
                  if ((f = r[u][u] - f) <= 0) break;
                  r[u][u] = Math.sqrt(f);
                }
                i[1] = 0;
              }
            })(r, 0, i, b),
            0 !== b[1])
          )
            return void (y[1] = 2);
          !(function (r, n, e, i) {
            var t, u, o, c;
            for (u = 1; u <= e; u += 1) {
              for (c = 0, t = 1; t < u; t += 1) c += r[t][u] * i[t];
              i[u] = (i[u] - c) / r[u][u];
            }
            for (o = 1; o <= e; o += 1) for (i[(u = e + 1 - o)] = i[u] / r[u][u], c = -i[u], t = 1; t < u; t += 1) i[t] = i[t] + c * r[t][u];
          })(r, 0, i, n),
            (function (r, n, e) {
              var i, t, u, o, c;
              for (u = 1; u <= e; u += 1) {
                for (r[u][u] = 1 / r[u][u], c = -r[u][u], i = 1; i < u; i += 1) r[i][u] = c * r[i][u];
                if (e < (o = u + 1)) break;
                for (t = o; t <= e; t += 1) for (c = r[u][t], r[u][t] = 0, i = 1; i <= u; i += 1) r[i][t] = r[i][t] + c * r[i][u];
              }
            })(r, 0, i);
        } else {
          for (d = 1; d <= i; d += 1) for (t[d] = 0, g = 1; g <= d; g += 1) t[d] = t[d] + r[g][d] * n[g];
          for (d = 1; d <= i; d += 1) for (n[d] = 0, g = d; g <= i; g += 1) n[d] = n[d] + r[d][g] * t[g];
        }
        for (u[1] = 0, d = 1; d <= i; d += 1) for (t[d] = n[d], u[1] = u[1] + p[d] * t[d], p[d] = 0, g = d + 1; g <= i; g += 1) r[g][d] = 0;
        for (u[1] = -u[1] / 2, y[1] = 0, V = (T = (A = (j = (k = (M = i) + i) + _) + _ + 1) + (_ * (_ + 1)) / 2) + f, g = 1; g <= f; g += 1) {
          for (q = 0, d = 1; d <= i; d += 1) q += o[d][g] * o[d][g];
          p[V + g] = Math.sqrt(q);
        }
        function I() {
          for (l[1] = l[1] + 1, v = T, g = 1; g <= f; g += 1) {
            for (v += 1, q = -c[g], d = 1; d <= i; d += 1) q += o[d][g] * t[d];
            if ((Math.abs(q) < R && (q = 0), g > m)) p[v] = q;
            else if (((p[v] = -Math.abs(q)), q > 0)) {
              for (d = 1; d <= i; d += 1) o[d][g] = -o[d][g];
              c[g] = -c[g];
            }
          }
          for (g = 1; g <= h; g += 1) p[T + s[g]] = 0;
          for (S = 0, P = 0, g = 1; g <= f; g += 1) p[T + g] < P * p[V + g] && ((S = g), (P = p[T + g] / p[V + g]));
          return 0 === S ? 999 : 0;
        }
        function Q() {
          for (g = 1; g <= i; g += 1) {
            for (q = 0, d = 1; d <= i; d += 1) q += r[d][g] * o[d][S];
            p[g] = q;
          }
          for (x = M, g = 1; g <= i; g += 1) p[x + g] = 0;
          for (d = h + 1; d <= i; d += 1) for (g = 1; g <= i; g += 1) p[x + g] = p[x + g] + r[g][d] * p[d];
          for (D = !0, g = h; g >= 1; g -= 1) {
            for (q = p[g], x = (v = A + (g * (g + 3)) / 2) - g, d = g + 1; d <= h; d += 1) (q -= p[v] * p[k + d]), (v += d);
            if (((q /= p[x]), (p[k + g] = q), s[g] < m)) break;
            if (q < 0) break;
            (D = !1), (w = g);
          }
          if (!D) for (F = p[j + w] / p[k + w], g = 1; g <= h && !(s[g] < m) && !(p[k + g] < 0); g += 1) (P = p[j + g] / p[k + g]) < F && ((F = P), (w = g));
          for (q = 0, g = M + 1; g <= M + i; g += 1) q += p[g] * p[g];
          if (Math.abs(q) <= R) {
            if (D) return (y[1] = 1), 999;
            for (g = 1; g <= h; g += 1) p[j + g] = p[j + g] - F * p[k + g];
            return (p[j + h + 1] = p[j + h + 1] + F), 700;
          }
          for (q = 0, g = 1; g <= i; g += 1) q += p[M + g] * o[g][S];
          for (L = -p[T + S] / q, B = !0, D || (F < L && ((L = F), (B = !1))), g = 1; g <= i; g += 1) (t[g] = t[g] + L * p[M + g]), Math.abs(t[g]) < R && (t[g] = 0);
          for (u[1] = u[1] + L * q * (L / 2 + p[j + h + 1]), g = 1; g <= h; g += 1) p[j + g] = p[j + g] - L * p[k + g];
          if (((p[j + h + 1] = p[j + h + 1] + L), !B)) {
            for (q = -c[S], d = 1; d <= i; d += 1) q += t[d] * o[d][S];
            if (S > m) p[T + S] = q;
            else if (((p[T + S] = -Math.abs(q)), q > 0)) {
              for (d = 1; d <= i; d += 1) o[d][S] = -o[d][S];
              c[S] = -c[S];
            }
            return 700;
          }
          for (s[(h += 1)] = S, v = A + ((h - 1) * h) / 2 + 1, g = 1; g <= h - 1; g += 1) (p[v] = p[g]), (v += 1);
          if (h === i) p[v] = p[i];
          else {
            for (
              g = i;
              g >= h + 1 &&
              0 !== p[g] &&
              ((N = Math.max(Math.abs(p[g - 1]), Math.abs(p[g]))),
              (O = Math.min(Math.abs(p[g - 1]), Math.abs(p[g]))),
              (P = p[g - 1] >= 0 ? Math.abs(N * Math.sqrt(1 + (O * O) / (N * N))) : -Math.abs(N * Math.sqrt(1 + (O * O) / (N * N)))),
              (N = p[g - 1] / P),
              (O = p[g] / P),
              1 !== N);
              g -= 1
            )
              if (0 === N) for (p[g - 1] = O * P, d = 1; d <= i; d += 1) (P = r[d][g - 1]), (r[d][g - 1] = r[d][g]), (r[d][g] = P);
              else for (p[g - 1] = P, U = O / (1 + N), d = 1; d <= i; d += 1) (P = N * r[d][g - 1] + O * r[d][g]), (r[d][g] = U * (r[d][g - 1] + P) - r[d][g]), (r[d][g - 1] = P);
            p[v] = p[h];
          }
          return 0;
        }
        function C() {
          if (0 === p[(x = (v = A + (w * (w + 1)) / 2 + 1) + w)]) return 798;
          if (
            ((N = Math.max(Math.abs(p[x - 1]), Math.abs(p[x]))),
            (O = Math.min(Math.abs(p[x - 1]), Math.abs(p[x]))),
            (P = p[x - 1] >= 0 ? Math.abs(N * Math.sqrt(1 + (O * O) / (N * N))) : -Math.abs(N * Math.sqrt(1 + (O * O) / (N * N)))),
            (N = p[x - 1] / P),
            (O = p[x] / P),
            1 === N)
          )
            return 798;
          if (0 === N) {
            for (g = w + 1; g <= h; g += 1) (P = p[x - 1]), (p[x - 1] = p[x]), (p[x] = P), (x += g);
            for (g = 1; g <= i; g += 1) (P = r[g][w]), (r[g][w] = r[g][w + 1]), (r[g][w + 1] = P);
          } else {
            for (U = O / (1 + N), g = w + 1; g <= h; g += 1) (P = N * p[x - 1] + O * p[x]), (p[x] = U * (p[x - 1] + P) - p[x]), (p[x - 1] = P), (x += g);
            for (g = 1; g <= i; g += 1) (P = N * r[g][w] + O * r[g][w + 1]), (r[g][w + 1] = U * (r[g][w] + P) - r[g][w + 1]), (r[g][w] = P);
          }
          return 0;
        }
        function Z() {
          for (x = v - w, g = 1; g <= w; g += 1) (p[x] = p[v]), (v += 1), (x += 1);
          return (p[j + w] = p[j + w + 1]), (s[w] = s[w + 1]), (w += 1) < h ? 797 : 0;
        }
        function H() {
          return (p[j + h] = p[j + h + 1]), (p[j + h + 1] = 0), (s[h] = 0), (h -= 1), (l[2] = l[2] + 1), 0;
        }
        for (h = 0, l[1] = 0, l[2] = 0, Y = 0; ; ) {
          if (999 === (Y = I())) return;
          for (; 0 !== (Y = Q()); ) {
            if (999 === Y) return;
            if (700 === Y)
              if (w === h) H();
              else {
                for (; C(), 797 === (Y = Z()); );
                H();
              }
          }
        }
      }
      numeric.solveQP = function (r, t, u, o, c, a) {
        (r = n(r)), (t = n(t)), (u = n(u));
        var f,
          m,
          s,
          h,
          l,
          p = [],
          y = [],
          g = [],
          d = [],
          v = [];
        if (((c = c || 0), (a = a ? n(a) : [void 0, 0]), (o = o ? n(o) : []), (m = r.length - 1), (s = u[1].length - 1), !o)) for (f = 1; f <= s; f += 1) o[f] = 0;
        for (f = 1; f <= s; f += 1) y[f] = 0;
        for (h = Math.min(m, s), f = 1; f <= m; f += 1) g[f] = 0;
        for (p[1] = 0, f = 1; f <= 2 * m + (h * (h + 5)) / 2 + 2 * s + 1; f += 1) d[f] = 0;
        for (f = 1; f <= 2; f += 1) v[f] = 0;
        return (
          i(r, t, 0, m, g, p, u, o, 0, s, c, y, 0, v, d, a),
          (l = ''),
          1 === a[1] && (l = 'constraints are inconsistent, no solution!'),
          2 === a[1] && (l = 'matrix D in quadratic function is not positive definite!'),
          { solution: e(g), value: e(p), unconstrained_solution: e(t), iterations: e(v), iact: e(y), message: l }
        );
      };
    })(),
    (numeric.svd = function (r) {
      var n,
        e = numeric.epsilon,
        i = 1e-64 / e,
        t = 0,
        u = 0,
        o = 0,
        c = 0,
        a = 0,
        f = numeric.clone(r),
        m = f.length,
        s = f[0].length;
      if (m < s) throw 'Need more rows than columns';
      var h = new Array(s),
        l = new Array(s);
      for (u = 0; u < s; u++) h[u] = l[u] = 0;
      var p = numeric.rep([s, s], 0);
      function y(r, n) {
        return (r = Math.abs(r)) > (n = Math.abs(n)) ? r * Math.sqrt(1 + (n * n) / r / r) : 0 == n ? r : n * Math.sqrt(1 + (r * r) / n / n);
      }
      var g = 0,
        d = 0,
        v = 0,
        x = 0,
        b = 0,
        w = 0,
        M = 0;
      for (u = 0; u < s; u++) {
        for (h[u] = d, M = 0, a = u + 1, o = u; o < m; o++) M += f[o][u] * f[o][u];
        if (M <= i) d = 0;
        else
          for (g = f[u][u], d = Math.sqrt(M), g >= 0 && (d = -d), v = g * d - M, f[u][u] = g - d, o = a; o < s; o++) {
            for (M = 0, c = u; c < m; c++) M += f[c][u] * f[c][o];
            for (g = M / v, c = u; c < m; c++) f[c][o] += g * f[c][u];
          }
        for (l[u] = d, M = 0, o = a; o < s; o++) M += f[u][o] * f[u][o];
        if (M <= i) d = 0;
        else {
          for (g = f[u][u + 1], d = Math.sqrt(M), g >= 0 && (d = -d), v = g * d - M, f[u][u + 1] = g - d, o = a; o < s; o++) h[o] = f[u][o] / v;
          for (o = a; o < m; o++) {
            for (M = 0, c = a; c < s; c++) M += f[o][c] * f[u][c];
            for (c = a; c < s; c++) f[o][c] += M * h[c];
          }
        }
        (b = Math.abs(l[u]) + Math.abs(h[u])) > x && (x = b);
      }
      for (u = s - 1; -1 != u; u += -1) {
        if (0 != d) {
          for (v = d * f[u][u + 1], o = a; o < s; o++) p[o][u] = f[u][o] / v;
          for (o = a; o < s; o++) {
            for (M = 0, c = a; c < s; c++) M += f[u][c] * p[c][o];
            for (c = a; c < s; c++) p[c][o] += M * p[c][u];
          }
        }
        for (o = a; o < s; o++) (p[u][o] = 0), (p[o][u] = 0);
        (p[u][u] = 1), (d = h[u]), (a = u);
      }
      for (u = s - 1; -1 != u; u += -1) {
        for (a = u + 1, d = l[u], o = a; o < s; o++) f[u][o] = 0;
        if (0 != d) {
          for (v = f[u][u] * d, o = a; o < s; o++) {
            for (M = 0, c = a; c < m; c++) M += f[c][u] * f[c][o];
            for (g = M / v, c = u; c < m; c++) f[c][o] += g * f[c][u];
          }
          for (o = u; o < m; o++) f[o][u] = f[o][u] / d;
        } else for (o = u; o < m; o++) f[o][u] = 0;
        f[u][u] += 1;
      }
      for (e *= x, c = s - 1; -1 != c; c += -1)
        for (var k = 0; k < 50; k++) {
          var A = !1;
          for (a = c; -1 != a; a += -1) {
            if (Math.abs(h[a]) <= e) {
              A = !0;
              break;
            }
            if (Math.abs(l[a - 1]) <= e) break;
          }
          if (!A) {
            (t = 0), (M = 1);
            var T = a - 1;
            for (u = a; u < c + 1 && ((g = M * h[u]), (h[u] = t * h[u]), !(Math.abs(g) <= e)); u++)
              for (v = y(g, (d = l[u])), l[u] = v, t = d / v, M = -g / v, o = 0; o < m; o++) (b = f[o][T]), (w = f[o][u]), (f[o][T] = b * t + w * M), (f[o][u] = -b * M + w * t);
          }
          if (((w = l[c]), a == c)) {
            if (w < 0) for (l[c] = -w, o = 0; o < s; o++) p[o][c] = -p[o][c];
            break;
          }
          if (k >= 49) throw 'Error: no convergence.';
          for (
            x = l[a],
              d = y((g = (((b = l[c - 1]) - w) * (b + w) + ((d = h[c - 1]) - (v = h[c])) * (d + v)) / (2 * v * b)), 1),
              g = g < 0 ? ((x - w) * (x + w) + v * (b / (g - d) - v)) / x : ((x - w) * (x + w) + v * (b / (g + d) - v)) / x,
              t = 1,
              M = 1,
              u = a + 1;
            u < c + 1;
            u++
          ) {
            for (d = h[u], b = l[u], v = M * d, d *= t, w = y(g, v), h[u - 1] = w, g = x * (t = g / w) + d * (M = v / w), d = -x * M + d * t, v = b * M, b *= t, o = 0; o < s; o++)
              (x = p[o][u - 1]), (w = p[o][u]), (p[o][u - 1] = x * t + w * M), (p[o][u] = -x * M + w * t);
            for (w = y(g, v), l[u - 1] = w, g = (t = g / w) * d + (M = v / w) * b, x = -M * d + t * b, o = 0; o < m; o++)
              (b = f[o][u - 1]), (w = f[o][u]), (f[o][u - 1] = b * t + w * M), (f[o][u] = -b * M + w * t);
          }
          (h[a] = 0), (h[c] = g), (l[c] = x);
        }
      for (u = 0; u < l.length; u++) l[u] < e && (l[u] = 0);
      for (u = 0; u < s; u++)
        for (o = u - 1; o >= 0; o--)
          if (l[o] < l[u]) {
            for (t = l[o], l[o] = l[u], l[u] = t, c = 0; c < f.length; c++) (n = f[c][u]), (f[c][u] = f[c][o]), (f[c][o] = n);
            for (c = 0; c < p.length; c++) (n = p[c][u]), (p[c][u] = p[c][o]), (p[c][o] = n);
            u = o;
          }
      return { U: f, S: l, V: p };
    });
  window.numeric = numeric;
}
// Lazyload
{
  /*! lazysizes - v5.2.2 */
  !(function (e) {
    var t = (function (u, D, f) {
      'use strict';
      var k, H;
      if (
        ((function () {
          var e;
          var t = {
            lazyClass: 'lazyload',
            loadedClass: 'lazyloaded',
            loadingClass: 'lazyloading',
            preloadClass: 'lazypreload',
            errorClass: 'lazyerror',
            autosizesClass: 'lazyautosizes',
            srcAttr: 'data-src',
            srcsetAttr: 'data-srcset',
            sizesAttr: 'data-sizes',
            minSize: 40,
            customMedia: {},
            init: true,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: true,
            ricTimeout: 0,
            throttleDelay: 125,
          };
          H = u.lazySizesConfig || u.lazysizesConfig || {};
          for (e in t) {
            if (!(e in H)) {
              H[e] = t[e];
            }
          }
        })(),
        !D || !D.getElementsByClassName)
      ) {
        return { init: function () {}, cfg: H, noSupport: true };
      }
      var O = D.documentElement,
        a = u.HTMLPictureElement,
        P = 'addEventListener',
        $ = 'getAttribute',
        q = u[P].bind(u),
        I = u.setTimeout,
        U = u.requestAnimationFrame || I,
        l = u.requestIdleCallback,
        j = /^picture$/i,
        r = ['load', 'error', 'lazyincluded', '_lazyloaded'],
        i = {},
        G = Array.prototype.forEach,
        J = function (e, t) {
          if (!i[t]) {
            i[t] = new RegExp('(\\s|^)' + t + '(\\s|$)');
          }
          return i[t].test(e[$]('class') || '') && i[t];
        },
        K = function (e, t) {
          if (!J(e, t)) {
            e.setAttribute('class', (e[$]('class') || '').trim() + ' ' + t);
          }
        },
        Q = function (e, t) {
          var i;
          if ((i = J(e, t))) {
            e.setAttribute('class', (e[$]('class') || '').replace(i, ' '));
          }
        },
        V = function (t, i, e) {
          var a = e ? P : 'removeEventListener';
          if (e) {
            V(t, i);
          }
          r.forEach(function (e) {
            t[a](e, i);
          });
        },
        X = function (e, t, i, a, r) {
          var n = D.createEvent('Event');
          if (!i) {
            i = {};
          }
          i.instance = k;
          n.initEvent(t, !a, !r);
          n.detail = i;
          e.dispatchEvent(n);
          return n;
        },
        Y = function (e, t) {
          var i;
          if (!a && (i = u.picturefill || H.pf)) {
            if (t && t.src && !e[$]('srcset')) {
              e.setAttribute('srcset', t.src);
            }
            i({ reevaluate: true, elements: [e] });
          } else if (t && t.src) {
            e.src = t.src;
          }
        },
        Z = function (e, t) {
          return (getComputedStyle(e, null) || {})[t];
        },
        s = function (e, t, i) {
          i = i || e.offsetWidth;
          while (i < H.minSize && t && !e._lazysizesWidth) {
            i = t.offsetWidth;
            t = t.parentNode;
          }
          return i;
        },
        ee = (function () {
          var i, a;
          var t = [];
          var r = [];
          var n = t;
          var s = function () {
            var e = n;
            n = t.length ? r : t;
            i = true;
            a = false;
            while (e.length) {
              e.shift()();
            }
            i = false;
          };
          var e = function (e, t) {
            if (i && !t) {
              e.apply(this, arguments);
            } else {
              n.push(e);
              if (!a) {
                a = true;
                (D.hidden ? I : U)(s);
              }
            }
          };
          e._lsFlush = s;
          return e;
        })(),
        te = function (i, e) {
          return e
            ? function () {
                ee(i);
              }
            : function () {
                var e = this;
                var t = arguments;
                ee(function () {
                  i.apply(e, t);
                });
              };
        },
        ie = function (e) {
          var i;
          var a = 0;
          var r = H.throttleDelay;
          var n = H.ricTimeout;
          var t = function () {
            i = false;
            a = f.now();
            e();
          };
          var s =
            l && n > 49
              ? function () {
                  l(t, { timeout: n });
                  if (n !== H.ricTimeout) {
                    n = H.ricTimeout;
                  }
                }
              : te(function () {
                  I(t);
                }, true);
          return function (e) {
            var t;
            if ((e = e === true)) {
              n = 33;
            }
            if (i) {
              return;
            }
            i = true;
            t = r - (f.now() - a);
            if (t < 0) {
              t = 0;
            }
            if (e || t < 9) {
              s();
            } else {
              I(s, t);
            }
          };
        },
        ae = function (e) {
          var t, i;
          var a = 99;
          var r = function () {
            t = null;
            e();
          };
          var n = function () {
            var e = f.now() - i;
            if (e < a) {
              I(n, a - e);
            } else {
              (l || r)(r);
            }
          };
          return function () {
            i = f.now();
            if (!t) {
              t = I(n, a);
            }
          };
        },
        e = (function () {
          var v, m, c, h, e;
          var y, z, g, p, C, b, A;
          var n = /^img$/i;
          var d = /^iframe$/i;
          var E = 'onscroll' in u && !/(gle|ing)bot/.test(navigator.userAgent);
          var _ = 0;
          var w = 0;
          var N = 0;
          var M = -1;
          var x = function (e) {
            N--;
            if (!e || N < 0 || !e.target) {
              N = 0;
            }
          };
          var W = function (e) {
            if (A == null) {
              A = Z(D.body, 'visibility') == 'hidden';
            }
            return A || !(Z(e.parentNode, 'visibility') == 'hidden' && Z(e, 'visibility') == 'hidden');
          };
          var S = function (e, t) {
            var i;
            var a = e;
            var r = W(e);
            g -= t;
            b += t;
            p -= t;
            C += t;
            while (r && (a = a.offsetParent) && a != D.body && a != O) {
              r = (Z(a, 'opacity') || 1) > 0;
              if (r && Z(a, 'overflow') != 'visible') {
                i = a.getBoundingClientRect();
                r = C > i.left && p < i.right && b > i.top - 1 && g < i.bottom + 1;
              }
            }
            return r;
          };
          var t = function () {
            var e, t, i, a, r, n, s, l, o, u, f, c;
            var d = k.elements;
            if ((h = H.loadMode) && N < 8 && (e = d.length)) {
              t = 0;
              M++;
              for (; t < e; t++) {
                if (!d[t] || d[t]._lazyRace) {
                  continue;
                }
                if (!E || (k.prematureUnveil && k.prematureUnveil(d[t]))) {
                  R(d[t]);
                  continue;
                }
                if (!(l = d[t][$]('data-expand')) || !(n = l * 1)) {
                  n = w;
                }
                if (!u) {
                  u = !H.expand || H.expand < 1 ? (O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370) : H.expand;
                  k._defEx = u;
                  f = u * H.expFactor;
                  c = H.hFac;
                  A = null;
                  if (w < f && N < 1 && M > 2 && h > 2 && !D.hidden) {
                    w = f;
                    M = 0;
                  } else if (h > 1 && M > 1 && N < 6) {
                    w = u;
                  } else {
                    w = _;
                  }
                }
                if (o !== n) {
                  y = innerWidth + n * c;
                  z = innerHeight + n;
                  s = n * -1;
                  o = n;
                }
                i = d[t].getBoundingClientRect();
                if (
                  (b = i.bottom) >= s &&
                  (g = i.top) <= z &&
                  (C = i.right) >= s * c &&
                  (p = i.left) <= y &&
                  (b || C || p || g) &&
                  (H.loadHidden || W(d[t])) &&
                  ((m && N < 3 && !l && (h < 3 || M < 4)) || S(d[t], n))
                ) {
                  R(d[t]);
                  r = true;
                  if (N > 9) {
                    break;
                  }
                } else if (!r && m && !a && N < 4 && M < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || (!l && (b || C || p || g || d[t][$](H.sizesAttr) != 'auto')))) {
                  a = v[0] || d[t];
                }
              }
              if (a && !r) {
                R(a);
              }
            }
          };
          var i = ie(t);
          var B = function (e) {
            var t = e.target;
            if (t._lazyCache) {
              delete t._lazyCache;
              return;
            }
            x(e);
            K(t, H.loadedClass);
            Q(t, H.loadingClass);
            V(t, L);
            X(t, 'lazyloaded');
          };
          var a = te(B);
          var L = function (e) {
            a({ target: e.target });
          };
          var T = function (t, i) {
            try {
              t.contentWindow.location.replace(i);
            } catch (e) {
              t.src = i;
            }
          };
          var F = function (e) {
            var t;
            var i = e[$](H.srcsetAttr);
            if ((t = H.customMedia[e[$]('data-media') || e[$]('media')])) {
              e.setAttribute('media', t);
            }
            if (i) {
              e.setAttribute('srcset', i);
            }
          };
          var s = te(function (t, e, i, a, r) {
            var n, s, l, o, u, f;
            if (!(u = X(t, 'lazybeforeunveil', e)).defaultPrevented) {
              if (a) {
                if (i) {
                  K(t, H.autosizesClass);
                } else {
                  t.setAttribute('sizes', a);
                }
              }
              s = t[$](H.srcsetAttr);
              n = t[$](H.srcAttr);
              if (r) {
                l = t.parentNode;
                o = l && j.test(l.nodeName || '');
              }
              f = e.firesLoad || ('src' in t && (s || n || o));
              u = { target: t };
              K(t, H.loadingClass);
              if (f) {
                clearTimeout(c);
                c = I(x, 2500);
                V(t, L, true);
              }
              if (o) {
                G.call(l.getElementsByTagName('source'), F);
              }
              if (s) {
                t.setAttribute('srcset', s);
              } else if (n && !o) {
                if (d.test(t.nodeName)) {
                  T(t, n);
                } else {
                  t.src = n;
                }
              }
              if (r && (s || o)) {
                Y(t, { src: n });
              }
            }
            if (t._lazyRace) {
              delete t._lazyRace;
            }
            Q(t, H.lazyClass);
            ee(function () {
              var e = t.complete && t.naturalWidth > 1;
              if (!f || e) {
                if (e) {
                  K(t, 'ls-is-cached');
                }
                B(u);
                t._lazyCache = true;
                I(function () {
                  if ('_lazyCache' in t) {
                    delete t._lazyCache;
                  }
                }, 9);
              }
              if (t.loading == 'lazy') {
                N--;
              }
            }, true);
          });
          var R = function (e) {
            if (e._lazyRace) {
              return;
            }
            var t;
            var i = n.test(e.nodeName);
            var a = i && (e[$](H.sizesAttr) || e[$]('sizes'));
            var r = a == 'auto';
            if ((r || !m) && i && (e[$]('src') || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
              return;
            }
            t = X(e, 'lazyunveilread').detail;
            if (r) {
              re.updateElem(e, true, e.offsetWidth);
            }
            e._lazyRace = true;
            N++;
            s(e, t, r, a, i);
          };
          var r = ae(function () {
            H.loadMode = 3;
            i();
          });
          var l = function () {
            if (H.loadMode == 3) {
              H.loadMode = 2;
            }
            r();
          };
          var o = function () {
            if (m) {
              return;
            }
            if (f.now() - e < 999) {
              I(o, 999);
              return;
            }
            m = true;
            H.loadMode = 3;
            i();
            q('scroll', l, true);
          };
          return {
            _: function () {
              e = f.now();
              k.elements = D.getElementsByClassName(H.lazyClass);
              v = D.getElementsByClassName(H.lazyClass + ' ' + H.preloadClass);
              q('scroll', i, true);
              q('resize', i, true);
              q('pageshow', function (e) {
                if (e.persisted) {
                  var t = D.querySelectorAll('.' + H.loadingClass);
                  if (t.length && t.forEach) {
                    U(function () {
                      t.forEach(function (e) {
                        if (e.complete) {
                          R(e);
                        }
                      });
                    });
                  }
                }
              });
              if (u.MutationObserver) {
                new MutationObserver(i).observe(O, { childList: true, subtree: true, attributes: true });
              } else {
                O[P]('DOMNodeInserted', i, true);
                O[P]('DOMAttrModified', i, true);
                setInterval(i, 999);
              }
              q('hashchange', i, true);
              ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function (e) {
                D[P](e, i, true);
              });
              if (/d$|^c/.test(D.readyState)) {
                o();
              } else {
                q('load', o);
                D[P]('DOMContentLoaded', i);
                I(o, 2e4);
              }
              if (k.elements.length) {
                t();
                ee._lsFlush();
              } else {
                i();
              }
            },
            checkElems: i,
            unveil: R,
            _aLSL: l,
          };
        })(),
        re = (function () {
          var i;
          var n = te(function (e, t, i, a) {
            var r, n, s;
            e._lazysizesWidth = a;
            a += 'px';
            e.setAttribute('sizes', a);
            if (j.test(t.nodeName || '')) {
              r = t.getElementsByTagName('source');
              for (n = 0, s = r.length; n < s; n++) {
                r[n].setAttribute('sizes', a);
              }
            }
            if (!i.detail.dataAttr) {
              Y(e, i.detail);
            }
          });
          var a = function (e, t, i) {
            var a;
            var r = e.parentNode;
            if (r) {
              i = s(e, r, i);
              a = X(e, 'lazybeforesizes', { width: i, dataAttr: !!t });
              if (!a.defaultPrevented) {
                i = a.detail.width;
                if (i && i !== e._lazysizesWidth) {
                  n(e, r, a, i);
                }
              }
            }
          };
          var e = function () {
            var e;
            var t = i.length;
            if (t) {
              e = 0;
              for (; e < t; e++) {
                a(i[e]);
              }
            }
          };
          var t = ae(e);
          return {
            _: function () {
              i = D.getElementsByClassName(H.autosizesClass);
              q('resize', t);
            },
            checkElems: t,
            updateElem: a,
          };
        })(),
        t = function () {
          if (!t.i && D.getElementsByClassName) {
            t.i = true;
            re._();
            e._();
          }
        };
      return (
        I(function () {
          H.init && t();
        }),
        (k = { cfg: H, autoSizer: re, loader: e, init: t, uP: Y, aC: K, rC: Q, hC: J, fire: X, gW: s, rAF: ee })
      );
    })(e, e.document, Date);
    (e.lazySizes = t), 'object' == typeof module && module.exports && (module.exports = t);
  })('undefined' != typeof window ? window : {});
}