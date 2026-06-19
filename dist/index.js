"use strict";var d=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var p=d(function(X,g){
var S=require('@stdlib/ndarray-base-assert-is-row-major/dist');function V(a,r,i,n,e,s){var v,u,q,f,m,t,l,o,c;if(a<=0||r<=0)return-1;if(t=s+(a-1)*n,v=(r-1)*e,i[t]!==0||i[t+v]!==0)return a-1;if(S([n,e])){for(f=r,m=a,u=e,q=n-f*e,t+=v,o=m-1;o>=0;o--){for(l=0;l<f;l++){if(i[t]!==0)return o;t-=u}t-=q}return-1}for(f=a,m=r,u=n,q=e,v=s+(f-1)*u,c=-1,o=0;o<m;o++)for(t=v+o*q,l=f-1;l>c;l--){if(i[t]!==0){c=l;break}t-=u}return c}g.exports=V
});var y=d(function(Y,w){
var _=require('@stdlib/blas-base-assert-is-layout/dist'),C=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),O=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),T=require('@stdlib/math-base-special-fast-max/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),z=p();function B(a,r,i,n,e){var s,v,u;if(!_(a))throw new TypeError(j('2IHFx',a));if(C(a)?u=i:u=r,e<T(1,u))throw new RangeError(j('2IHIR',u,e));return O(a)?(s=1,v=e):(s=e,v=1),z(r,i,n,s,v,0)}w.exports=B
});var R=d(function(Z,b){
var G=p();function H(a,r,i,n,e,s){return G(a,r,i,n,e,s)}b.exports=H
});var k=d(function($,E){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=y(),J=R();I(h,"ndarray",J);E.exports=h
});var K=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),U=k(),x,F=P(K(__dirname,"./native.js"));Q(F)?x=U:x=F;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
