// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-fourth-pi@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";var r=6123233995736766e-32;function o(o){var d,m,a,f;return t(o)||0===o?o:o===s?n:o===i?-n:(o<0&&(m=!0,o=-o),d=0,o>2.414213562373095?(a=n,d=1,o=-1/o):o<=.66?a=0:(a=e,d=2,o=(o-1)/(o+1)),f=(f=o*o)*function(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(f)/function(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))}(f),f=o*f+o,2===d?f+=.5*r:1===d&&(f+=r),a+=f,m?-a:a)}export{o as default};
//# sourceMappingURL=index.mjs.map
