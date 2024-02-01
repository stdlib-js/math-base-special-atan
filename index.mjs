// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-fourth-pi@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";function r(r){var o,d,m,f;return t(r)||0===r?r:r===s?n:r===i?-n:(r<0&&(d=!0,r=-r),o=0,r>2.414213562373095?(m=n,o=1,r=-1/r):r<=.66?m=0:(m=e,o=2,r=(r-1)/(r+1)),f=(f=r*r)*function(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(f)/function(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))}(f),f=r*f+r,2===o?f+=3061616997868383e-32:1===o&&(f+=6123233995736766e-32),m+=f,d?-m:m)}export{r as default};
//# sourceMappingURL=index.mjs.map
