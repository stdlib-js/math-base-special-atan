// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,n=1.5707963267948966,u=Number.NEGATIVE_INFINITY;var t=6123233995736766e-32;function e(e){var I,N,a,f;return function(r){return r!=r}(e)||0===e?e:e===r?n:e===u?-n:(e<0&&(N=!0,e=-e),I=0,e>2.414213562373095?(a=n,I=1,e=-1/e):e<=.66?a=0:(a=.7853981633974483,I=2,e=(e-1)/(e+1)),f=(f=e*e)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(f)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(f),f=e*f+e,2===I?f+=.5*t:1===I&&(f+=t),a+=f,N?-a:a)}export{e as default};
//# sourceMappingURL=mod.js.map
