// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,u=1.5707963267948966,e=Number.NEGATIVE_INFINITY;function t(t){var I,N,f,o;return r(t)||0===t?t:t===n?u:t===e?-u:(t<0&&(N=!0,t=-t),I=0,t>2.414213562373095?(f=u,I=1,t=-1/t):t<=.66?f=0:(f=.7853981633974483,I=2,t=(t-1)/(t+1)),o=(o=t*t)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=t*o+t,2===I?o+=3061616997868383e-32:1===I&&(o+=6123233995736766e-32),f+=o,N?-f:f)}export{t as default};
//# sourceMappingURL=mod.js.map