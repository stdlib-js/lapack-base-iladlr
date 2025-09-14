"use strict";var d=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var p=d(function(X,g){
var S=require('@stdlib/ndarray-base-assert-is-row-major/dist');function V(r,a,t,n,e,s){var v,i,q,f,m,u,l,o,c;if(r<=0||a<=0)return-1;if(u=s+(r-1)*n,v=(a-1)*e,t[u]!==0||t[u+v]!==0)return r-1;if(S([n,e])){for(f=a,m=r,i=e,q=n-f*e,u+=v,o=m-1;o>=0;o--){for(l=0;l<f;l++){if(t[u]!==0)return o;u-=i}u-=q}return-1}for(f=r,m=a,i=n,q=e,v=s+(f-1)*i,c=-1,o=0;o<m;o++)for(u=v+o*q,l=f-1;l>c;l--){if(t[u]!==0){c=l;break}u-=i}return c}g.exports=V
});var y=d(function(Y,w){
var _=require('@stdlib/blas-base-assert-is-layout/dist'),C=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),O=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),T=require('@stdlib/math-base-special-fast-max/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),z=p();function B(r,a,t,n,e){var s,v,i;if(!_(r))throw new TypeError(j('2IHFx',r));if(C(r)?i=t:i=a,e<T(1,i))throw new RangeError(j('2IHIR',i,e));return O(r)?(s=1,v=e):(s=e,v=1),z(a,t,n,s,v,0)}w.exports=B
});var R=d(function(Z,b){
var G=p();function H(r,a,t,n,e,s){return G(r,a,t,n,e,s)}b.exports=H
});var k=d(function($,E){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=y(),J=R();I(h,"ndarray",J);E.exports=h
});var K=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),U=k(),x,F=P(K(__dirname,"./native.js"));Q(F)?x=U:x=F;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
