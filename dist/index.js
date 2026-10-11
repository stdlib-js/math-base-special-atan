"use strict";var a=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var s=a(function(E,v){
function c(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}v.exports=c
});var l=a(function(M,f){
function y(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}f.exports=y
});var q=a(function(Q,p){
var I=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/constants-float64-pinf/dist'),n=require('@stdlib/constants-float64-half-pi/dist'),N=require('@stdlib/constants-float64-fourth-pi/dist'),O=require('@stdlib/constants-float64-ninf/dist'),g=s(),F=l(),o=6123233995736766e-32,T=2.414213562373095;function m(r){var e,u,t,i;return I(r)||r===0?r:r===P?n:r===O?-n:(r<0&&(u=!0,r=-r),e=0,r>T?(t=n,e=1,r=-(1/r)):r<=.66?t=0:(t=N,e=2,r=(r-1)/(r+1)),i=r*r,i=i*g(i)/F(i),i=r*i+r,e===2?i+=.5*o:e===1&&(i+=o),t+=i,u?-t:t)}p.exports=m
});var z=q();module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
