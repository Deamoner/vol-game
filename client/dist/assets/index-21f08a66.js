var dh=Object.defineProperty;var ph=(r,e,t)=>e in r?dh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var st=(r,e,t)=>(ph(r,typeof e!="symbol"?e+"":e,t),t);var Cr=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};function mh(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in r)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="156",gh=0,dc=1,_h=2,Sf=1,vh=2,Xn=3,Yn=0,zt=1,bn=2,ri=0,ir=1,pc=2,mc=3,gc=4,xh=5,Qi=100,yh=101,Sh=102,_c=103,vc=104,Mh=200,bh=201,Eh=202,Th=203,Mf=204,bf=205,Ch=206,Ah=207,Rh=208,wh=209,Ph=210,Uh=0,Lh=1,Dh=2,so=3,Ih=4,Fh=5,Oh=6,kh=7,Bo=0,Nh=1,Bh=2,si=0,Gh=1,zh=2,Vh=3,Hh=4,Wh=5,Ef=300,ar=301,or=302,ao=303,oo=304,Qs=306,co=1e3,En=1001,lo=1002,Gt=1003,xc=1004,ga=1005,Rt=1006,Xh=1007,zr=1008,ai=1009,jh=1010,Yh=1011,Go=1012,Tf=1013,ni=1014,ii=1015,Vr=1016,Cf=1017,Af=1018,xi=1020,qh=1021,Tn=1023,Kh=1024,Jh=1025,yi=1026,cr=1027,$h=1028,Rf=1029,Zh=1030,wf=1031,Pf=1033,_a=33776,va=33777,xa=33778,ya=33779,yc=35840,Sc=35841,Mc=35842,bc=35843,Qh=36196,Ec=37492,Tc=37496,Cc=37808,Ac=37809,Rc=37810,wc=37811,Pc=37812,Uc=37813,Lc=37814,Dc=37815,Ic=37816,Fc=37817,Oc=37818,kc=37819,Nc=37820,Bc=37821,Sa=36492,Gc=36494,zc=36495,ed=36283,Vc=36284,Hc=36285,Wc=36286,Uf=3e3,Si=3001,td=3200,Lf=3201,Df=0,nd=1,Mi="",ot="srgb",On="srgb-linear",ea="display-p3",Ma=7680,id=519,rd=512,sd=513,ad=514,od=515,cd=516,ld=517,fd=518,ud=519,Xc=35044,jc="300 es",fo=1035,jn=2e3,Ys=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,uo=180/Math.PI;function Kr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Jt(r,e,t){return Math.max(e,Math.min(t,r))}function hd(r,e){return(r%e+e)%e}function Ea(r,e,t){return(1-t)*r+t*e}function Yc(r){return(r&r-1)===0&&r!==0}function ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ar(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,a,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],T=i[1],v=i[4],y=i[7],E=i[2],w=i[5],R=i[8];return s[0]=a*_+o*T+c*E,s[3]=a*p+o*v+c*w,s[6]=a*m+o*y+c*R,s[1]=l*_+f*T+u*E,s[4]=l*p+f*v+u*w,s[7]=l*m+f*y+u*R,s[2]=h*_+d*T+g*E,s[5]=h*p+d*v+g*w,s[8]=h*m+d*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=f*a-o*l,h=o*c-f*s,d=l*s-a*c,g=t*u+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-f*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(f*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new Ze;function If(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dd(){const r=qs("canvas");return r.style.display="block",r}const qc={};function Or(r){r in qc||(qc[r]=!0,console.warn(r))}function rr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ca(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const pd=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),md=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function gd(r){return r.convertSRGBToLinear().applyMatrix3(md)}function _d(r){return r.applyMatrix3(pd).convertLinearToSRGB()}const vd={[On]:r=>r,[ot]:r=>r.convertSRGBToLinear(),[ea]:gd},xd={[On]:r=>r,[ot]:r=>r.convertLinearToSRGB(),[ea]:_d},vn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return On},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=vd[e],i=xd[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ii;class Ff{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=qs("canvas")),Ii.width=e.width,Ii.height=e.height;const n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=rr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yd=0;class Of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Aa(i[a].image)):s.push(Aa(i[a]))}else s=Aa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Aa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ff.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sd=0;class Vt extends ur{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=En,i=En,s=Rt,a=zr,o=Tn,c=ai,l=Vt.DEFAULT_ANISOTROPY,f=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Kr(),this.name="",this.source=new Of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Si?ot:Mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?Si:Uf}set encoding(e){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Si?ot:Mi}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Ef;Vt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(d+1)/2,E=(m+1)/2,w=(f+h)/4,R=(u+_)/4,B=(g+p)/4;return v>y&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=R/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=B/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=R/s,i=B/s),this.set(n,i,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-_)/T,this.z=(h-f)/T,this.w=Math.acos((l+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends ur{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Si?ot:Mi),this.texture=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Md{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kf extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bd extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],f=n[i+2],u=n[i+3];const h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==h||l!==d||f!==g){let p=1-o;const m=c*h+l*d+f*g+u*_,T=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const E=Math.sqrt(v),w=Math.atan2(E,m*T);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E}const y=o*T;if(c=c*p+h*y,l=l*p+d*y,f=f*p+g*y,u=u*p+_*y,p===1-o){const E=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=E,l*=E,f*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],f=n[i+3],u=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+f*u+c*d-l*h,e[t+1]=c*g+f*h+l*u-o*d,e[t+2]=l*g+f*d+o*h-c*u,e[t+3]=f*g-o*u-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(i/2),u=o(s/2),h=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=h*f*u+l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u+h*d*g;break;case"YZX":this._x=h*f*u+l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u-h*d*g;break;case"XZY":this._x=h*f*u-l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],u=t[10],h=n+o+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(f-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+i*l-s*c,this._y=i*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-i*o,this._w=a*f-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),u=Math.sin((1-t)*f)/l,h=Math.sin(t*f)/l;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,n=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,f=c*n+o*t-s*i,u=c*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=l*c+h*-s+f*-o-u*-a,this.y=f*c+h*-a+u*-s-l*-o,this.z=u*c+h*-o+l*-a-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new ne,Kc=new Jr;class hr{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Fi.copy(e.boundingBox),Fi.applyMatrix4(e.matrixWorld),this.union(Fi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else i.boundingBox===null&&i.computeBoundingBox(),Fi.copy(i.boundingBox),Fi.applyMatrix4(e.matrixWorld),this.union(Fi)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),cs.subVectors(this.max,Rr),Oi.subVectors(e.a,Rr),ki.subVectors(e.b,Rr),Ni.subVectors(e.c,Rr),$n.subVectors(ki,Oi),Zn.subVectors(Ni,ki),li.subVectors(Oi,Ni);let t=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-li.z,li.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,li.z,0,-li.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-li.y,li.x,0];return!wa(t,Oi,ki,Ni,cs)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,Oi,ki,Ni,cs))?!1:(ls.crossVectors($n,Zn),t=[ls.x,ls.y,ls.z],wa(t,Oi,ki,Ni,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Gn=new ne,Fi=new hr,Oi=new ne,ki=new ne,Ni=new ne,$n=new ne,Zn=new ne,li=new ne,Rr=new ne,cs=new ne,ls=new ne,fi=new ne;function wa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fi.fromArray(r,s);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),c=e.dot(fi),l=t.dot(fi),f=n.dot(fi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Ed=new hr,wr=new ne,Pa=new ne;class $r{constructor(e=new ne,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Pa)),this.expandByPoint(wr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new ne,Ua=new ne,fs=new ne,Qn=new ne,La=new ne,us=new ne,Da=new ne;class Nf{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ua.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Ua);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=Qn.dot(this.direction),c=-Qn.dot(fs),l=Qn.lengthSq(),f=Math.abs(1-a*a);let u,h,d,g;if(f>0)if(u=a*c-o,h=a*o-c,g=s*f,u>=0)if(h>=-g)if(h<=g){const _=1/f;u*=_,h*=_,d=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+h*(h+2*c)+l);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ua).addScaledVector(fs,h),d}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,s){La.subVectors(t,e),us.subVectors(n,e),Da.crossVectors(La,us);let a=this.direction.dot(Da),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);const c=o*this.direction.dot(us.crossVectors(Qn,us));if(c<0)return null;const l=o*this.direction.dot(La.cross(Qn));if(l<0||c+l>a)return null;const f=-o*Qn.dot(Da);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,i,s,a,o,c,l,f,u,h,d,g,_,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,f,u,h,d,g,_,p)}set(e,t,n,i,s,a,o,c,l,f,u,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=f,m[10]=u,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*f,d=a*u,g=o*f,_=o*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,d=c*u,g=l*f,_=l*u;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,d=c*u,g=l*f,_=l*u;t[0]=h-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*f,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,d=a*u,g=o*f,_=o*u;t[0]=c*f,t[4]=g*l-d,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*f,t[4]=_-h*u,t[8]=g*u+d,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=d*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=h*u+_,t[5]=a*f,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*f,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Td,e,Cd)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ei.crossVectors(n,en),ei.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ei.crossVectors(n,en)),ei.normalize(),hs.crossVectors(en,ei),i[0]=ei.x,i[4]=hs.x,i[8]=en.x,i[1]=ei.y,i[5]=hs.y,i[9]=en.y,i[2]=ei.z,i[6]=hs.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],T=n[3],v=n[7],y=n[11],E=n[15],w=i[0],R=i[4],B=i[8],M=i[12],A=i[1],$=i[5],N=i[9],x=i[13],P=i[2],L=i[6],F=i[10],I=i[14],W=i[3],G=i[7],k=i[11],b=i[15];return s[0]=a*w+o*A+c*P+l*W,s[4]=a*R+o*$+c*L+l*G,s[8]=a*B+o*N+c*F+l*k,s[12]=a*M+o*x+c*I+l*b,s[1]=f*w+u*A+h*P+d*W,s[5]=f*R+u*$+h*L+d*G,s[9]=f*B+u*N+h*F+d*k,s[13]=f*M+u*x+h*I+d*b,s[2]=g*w+_*A+p*P+m*W,s[6]=g*R+_*$+p*L+m*G,s[10]=g*B+_*N+p*F+m*k,s[14]=g*M+_*x+p*I+m*b,s[3]=T*w+v*A+y*P+E*W,s[7]=T*R+v*$+y*L+E*G,s[11]=T*B+v*N+y*F+E*k,s[15]=T*M+v*x+y*I+E*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*c*u-i*l*u-s*o*h+n*l*h+i*o*d-n*c*d)+_*(+t*c*d-t*l*h+s*a*h-i*a*d+i*l*f-s*c*f)+p*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*f-n*l*f)+m*(-i*o*f-t*c*u+t*o*h+i*a*u-n*a*h+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],T=u*p*l-_*h*l+_*c*d-o*p*d-u*c*m+o*h*m,v=g*h*l-f*p*l-g*c*d+a*p*d+f*c*m-a*h*m,y=f*_*l-g*u*l+g*o*d-a*_*d-f*o*m+a*u*m,E=g*u*c-f*_*c-g*o*h+a*_*h+f*o*p-a*u*p,w=t*T+n*v+i*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=T*R,e[1]=(_*h*s-u*p*s-_*i*d+n*p*d+u*i*m-n*h*m)*R,e[2]=(o*p*s-_*c*s+_*i*l-n*p*l-o*i*m+n*c*m)*R,e[3]=(u*c*s-o*h*s-u*i*l+n*h*l+o*i*d-n*c*d)*R,e[4]=v*R,e[5]=(f*p*s-g*h*s+g*i*d-t*p*d-f*i*m+t*h*m)*R,e[6]=(g*c*s-a*p*s-g*i*l+t*p*l+a*i*m-t*c*m)*R,e[7]=(a*h*s-f*c*s+f*i*l-t*h*l-a*i*d+t*c*d)*R,e[8]=y*R,e[9]=(g*u*s-f*_*s-g*n*d+t*_*d+f*n*m-t*u*m)*R,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*m+t*o*m)*R,e[11]=(f*o*s-a*u*s-f*n*l+t*u*l+a*n*d-t*o*d)*R,e[12]=E*R,e[13]=(f*_*i-g*u*i+g*n*h-t*_*h-f*n*p+t*u*p)*R,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*p-t*o*p)*R,e[15]=(a*u*i-f*o*i+f*n*c-t*u*c-a*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,f*o+n,f*c-i*a,0,l*c-i*o,f*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,u=o+o,h=s*l,d=s*f,g=s*u,_=a*f,p=a*u,m=o*u,T=c*l,v=c*f,y=c*u,E=n.x,w=n.y,R=n.z;return i[0]=(1-(_+m))*E,i[1]=(d+y)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(h+m))*w,i[6]=(p+T)*w,i[7]=0,i[8]=(g+v)*R,i[9]=(p-T)*R,i[10]=(1-(h+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Bi.set(i[0],i[1],i[2]).length();const a=Bi.set(i[4],i[5],i[6]).length(),o=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);const l=1/s,f=1/a,u=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=jn){const c=this.elements,l=2*s/(t-e),f=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(o===jn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ys)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=jn){const c=this.elements,l=1/(t-e),f=1/(n-i),u=1/(a-s),h=(t+e)*l,d=(n+i)*f;let g,_;if(o===jn)g=(a+s)*u,_=-2*u;else if(o===Ys)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new ne,xn=new mt,Td=new ne(0,0,0),Cd=new ne(1,1,1),ei=new ne,hs=new ne,en=new ne,Jc=new mt,$c=new Jr;class ta{constructor(e=0,t=0,n=0,i=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],f=i[9],u=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ad=0;const Zc=new ne,Gi=new Jr,Vn=new mt,ds=new ne,Pr=new ne,Rd=new ne,wd=new Jr,Qc=new ne(1,0,0),el=new ne(0,1,0),tl=new ne(0,0,1),Pd={type:"added"},Ud={type:"removed"};class It extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new ne,t=new ta,n=new Jr,i=new ne(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Qc,e)}rotateY(e){return this.rotateOnAxis(el,e)}rotateZ(e){return this.rotateOnAxis(tl,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qc,e)}translateY(e){return this.translateOnAxis(el,e)}translateZ(e){return this.translateOnAxis(tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Pr,ds,this.up):Vn.lookAt(ds,Pr,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ud)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}It.DEFAULT_UP=new ne(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new ne,Hn=new ne,Ia=new ne,Wn=new ne,zi=new ne,Vi=new ne,nl=new ne,Fa=new ne,Oa=new ne,ka=new ne;let ps=!1;class Mn{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yn.subVectors(i,t),Hn.subVectors(n,t),Ia.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Hn),c=yn.dot(Ia),l=Hn.dot(Hn),f=Hn.dot(Ia),u=a*l-o*o;if(u===0)return s.set(-2,-1,-1);const h=1/u,d=(l*c-o*f)*h,g=(a*f-o*c)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn),Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,n,i,s,a,o,c){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Wn),c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Hn.subVectors(e,t),yn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;zi.subVectors(i,n),Vi.subVectors(s,n),Fa.subVectors(e,n);const c=zi.dot(Fa),l=Vi.dot(Fa);if(c<=0&&l<=0)return t.copy(n);Oa.subVectors(e,i);const f=zi.dot(Oa),u=Vi.dot(Oa);if(f>=0&&u<=f)return t.copy(i);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(zi,a);ka.subVectors(e,s);const d=zi.dot(ka),g=Vi.dot(ka);if(g>=0&&d<=g)return t.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Vi,o);const p=f*g-d*u;if(p<=0&&u-f>=0&&d-g>=0)return nl.subVectors(s,i),o=(u-f)/(u-f+(d-g)),t.copy(i).addScaledVector(nl,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(zi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ld=0;class dr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=ir,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=bf,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Na(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vn.workingColorSpace){return this.r=e,this.g=t,this.b=n,vn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vn.workingColorSpace){if(e=hd(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Na(a,s,e+1/3),this.g=Na(a,s,e),this.b=Na(a,s,e-1/3)}return vn.toWorkingColorSpace(this,i),this}setStyle(e,t=ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){const n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return vn.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Jt(Ot.r*255,0,255))*65536+Math.round(Jt(Ot.g*255,0,255))*256+Math.round(Jt(Ot.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vn.workingColorSpace){vn.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=vn.workingColorSpace){return vn.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=ot){vn.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=n,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(ms);const n=Ea(Sn.h,ms.h,t),i=Ea(Sn.s,ms.s,t),s=Ea(Sn.l,ms.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new tt;tt.NAMES=Gf;class na extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new ne,gs=new nt;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this.updateRange={offset:0,count:-1},this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ar(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class zf extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vf extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dn extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dd=0;const ln=new mt,Ba=new It,Hi=new ne,tn=new hr,Ur=new hr,Tt=new ne;class Rn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(If(e)?Vf:zf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(tn.min,Ur.min),tn.expandByPoint(Tt),Tt.addVectors(tn.max,Ur.max),tn.expandByPoint(Tt)):(tn.expandByPoint(Ur.min),tn.expandByPoint(Ur.max))}tn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Tt.fromBufferAttribute(o,l),c&&(Hi.fromBufferAttribute(e,l),Tt.add(Hi)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let A=0;A<o;A++)l[A]=new ne,f[A]=new ne;const u=new ne,h=new ne,d=new ne,g=new nt,_=new nt,p=new nt,m=new ne,T=new ne;function v(A,$,N){u.fromArray(i,A*3),h.fromArray(i,$*3),d.fromArray(i,N*3),g.fromArray(a,A*2),_.fromArray(a,$*2),p.fromArray(a,N*2),h.sub(u),d.sub(u),_.sub(g),p.sub(g);const x=1/(_.x*p.y-p.x*_.y);isFinite(x)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(x),T.copy(d).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(x),l[A].add(m),l[$].add(m),l[N].add(m),f[A].add(T),f[$].add(T),f[N].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,$=y.length;A<$;++A){const N=y[A],x=N.start,P=N.count;for(let L=x,F=x+P;L<F;L+=3)v(n[L+0],n[L+1],n[L+2])}const E=new ne,w=new ne,R=new ne,B=new ne;function M(A){R.fromArray(s,A*3),B.copy(R);const $=l[A];E.copy($),E.sub(R.multiplyScalar(R.dot($))).normalize(),w.crossVectors(B,$);const x=w.dot(f[A])<0?-1:1;c[A*4]=E.x,c[A*4+1]=E.y,c[A*4+2]=E.z,c[A*4+3]=x}for(let A=0,$=y.length;A<$;++A){const N=y[A],x=N.start,P=N.count;for(let L=x,F=x+P;L<F;L+=3)M(n[L+0]),M(n[L+1]),M(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new ne,s=new ne,a=new ne,o=new ne,c=new ne,l=new ne,f=new ne,u=new ne;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),f.subVectors(a,s),u.subVectors(i,s),f.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(f),c.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),u.subVectors(i,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,u=o.normalized,h=new l.constructor(c.length*f);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*f;for(let m=0;m<f;m++)h[g++]=l[d++]}return new An(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,u=l.length;f<u;f++){const h=l[f],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const d=l[u];f.push(d.toJSON(e.data))}f.length>0&&(i[c]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const f=i[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],u=s[l];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new mt,ui=new Nf,_s=new $r,rl=new ne,Wi=new ne,Xi=new ne,ji=new ne,Ga=new ne,vs=new ne,xs=new nt,ys=new nt,Ss=new nt,sl=new ne,al=new ne,ol=new ne,Ms=new ne,bs=new ne;class rn extends It{constructor(e=new Rn,t=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){vs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],u=s[c];f!==0&&(Ga.fromBufferAttribute(u,e),a?vs.addScaledVector(Ga,f):vs.addScaledVector(Ga.sub(t),f))}t.add(vs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(_s.containsPoint(ui.origin)===!1&&(ui.intersectSphere(_s,rl)===null||ui.origin.distanceToSquared(rl)>(e.far-e.near)**2))&&(il.copy(s).invert(),ui.copy(e.ray).applyMatrix4(il),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=T,E=v;y<E;y+=3){const w=o.getX(y),R=o.getX(y+1),B=o.getX(y+2);i=Es(this,m,e,n,l,f,u,w,R,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const T=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);i=Es(this,a,e,n,l,f,u,T,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=T,E=v;y<E;y+=3){const w=y,R=y+1,B=y+2;i=Es(this,m,e,n,l,f,u,w,R,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const T=p,v=p+1,y=p+2;i=Es(this,a,e,n,l,f,u,T,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Id(r,e,t,n,i,s,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Yn,o),c===null)return null;bs.copy(o),bs.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(bs);return l<t.near||l>t.far?null:{distance:l,point:bs.clone(),object:r}}function Es(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Wi),r.getVertexPosition(c,Xi),r.getVertexPosition(l,ji);const f=Id(r,e,t,n,Wi,Xi,ji,Ms);if(f){i&&(xs.fromBufferAttribute(i,o),ys.fromBufferAttribute(i,c),Ss.fromBufferAttribute(i,l),f.uv=Mn.getInterpolation(Ms,Wi,Xi,ji,xs,ys,Ss,new nt)),s&&(xs.fromBufferAttribute(s,o),ys.fromBufferAttribute(s,c),Ss.fromBufferAttribute(s,l),f.uv1=Mn.getInterpolation(Ms,Wi,Xi,ji,xs,ys,Ss,new nt),f.uv2=f.uv1),a&&(sl.fromBufferAttribute(a,o),al.fromBufferAttribute(a,c),ol.fromBufferAttribute(a,l),f.normal=Mn.getInterpolation(Ms,Wi,Xi,ji,sl,al,ol,new ne),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new ne,materialIndex:0};Mn.getNormal(Wi,Xi,ji,u.normal),f.face=u}return f}class Zr extends Rn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],u=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(f,3)),this.setAttribute("uv",new dn(u,2));function g(_,p,m,T,v,y,E,w,R,B,M){const A=y/R,$=E/B,N=y/2,x=E/2,P=w/2,L=R+1,F=B+1;let I=0,W=0;const G=new ne;for(let k=0;k<F;k++){const b=k*$-x;for(let U=0;U<L;U++){const j=U*A-N;G[_]=j*T,G[p]=b*v,G[m]=P,l.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[m]=w>0?1:-1,f.push(G.x,G.y,G.z),u.push(U/R),u.push(1-k/B),I+=1}}for(let k=0;k<B;k++)for(let b=0;b<R;b++){const U=h+b+L*k,j=h+b+L*(k+1),X=h+(b+1)+L*(k+1),Y=h+(b+1)+L*k;c.push(U,j,Y),c.push(j,X,Y),W+=6}o.addGroup(d,W,M),d+=W,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(r){const e={};for(let t=0;t<r.length;t++){const n=lr(r[t]);for(const i in n)e[i]=n[i]}return e}function Fd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Hf(r){return r.getRenderTarget()===null?r.outputColorSpace:On}const Wf={clone:lr,merge:Nt};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xf extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends Xf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,qi=1;class Nd extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new un(Yi,qi,e,t);i.layers=this.layers,this.add(i);const s=new un(Yi,qi,e,t);s.layers=this.layers,this.add(s);const a=new un(Yi,qi,e,t);a.layers=this.layers,this.add(a);const o=new un(Yi,qi,e,t);o.layers=this.layers,this.add(o);const c=new un(Yi,qi,e,t);c.layers=this.layers,this.add(c);const l=new un(Yi,qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,c,l]=this.children,f=e.getRenderTarget(),u=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(f),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class jf extends Vt{constructor(e,t,n,i,s,a,o,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,i,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Si?ot:Mi),this.texture=new jf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zr(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:ri});s.uniforms.tEquirect.value=t;const a=new rn(i,s),o=t.minFilter;return t.minFilter===zr&&(t.minFilter=Rt),new Nd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const za=new ne,Gd=new ne,zd=new Ze;class pi{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=za.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zd.getNormalMatrix(e),i=this.coplanarPoint(za).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new $r,Ts=new ne;class zo{constructor(e=new pi,t=new pi,n=new pi,i=new pi,s=new pi,a=new pi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],f=i[5],u=i[6],h=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],T=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-s,h-l,p-d,y-m).normalize(),n[1].setComponents(c+s,h+l,p+d,y+m).normalize(),n[2].setComponents(c+a,h+f,p+g,y+T).normalize(),n[3].setComponents(c-a,h-f,p-g,y-T).normalize(),n[4].setComponents(c-o,h-u,p-_,y-v).normalize(),t===jn)n[5].setComponents(c+o,h+u,p+_,y+v).normalize();else if(t===Ys)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,f){const u=l.array,h=l.usage,d=r.createBuffer();r.bindBuffer(f,d),r.bufferData(f,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,u){const h=f.array,d=f.updateRange;r.bindBuffer(u,l),d.count===-1?r.bufferSubData(u,0,h):(t?r.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f&&(r.deleteBuffer(f.buffer),n.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,f)):u.version<l.version&&(s(u.buffer,l,f),u.version=l.version)}return{get:a,remove:o,update:c}}class oi extends Rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,f=c+1,u=e/o,h=t/c,d=[],g=[],_=[],p=[];for(let m=0;m<f;m++){const T=m*h-a;for(let v=0;v<l;v++){const y=v*u-s;g.push(y,-T,0),_.push(0,0,1),p.push(v/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<o;T++){const v=T+l*m,y=T+l*(m+1),E=T+1+l*(m+1),w=T+1+l*m;d.push(v,y,w),d.push(y,E,w)}this.setIndex(d),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ep=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ip=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$p=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Hd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:jd,alphatest_fragment:Yd,alphatest_pars_fragment:qd,aomap_fragment:Kd,aomap_pars_fragment:Jd,begin_vertex:$d,beginnormal_vertex:Zd,bsdfs:Qd,iridescence_fragment:ep,bumpmap_pars_fragment:tp,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:rp,clipping_planes_vertex:sp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:cp,color_vertex:lp,common:fp,cube_uv_reflection_fragment:up,defaultnormal_vertex:hp,displacementmap_pars_vertex:dp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:_p,colorspace_pars_fragment:vp,envmap_fragment:xp,envmap_common_pars_fragment:yp,envmap_pars_fragment:Sp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Ip,envmap_vertex:bp,fog_vertex:Ep,fog_pars_vertex:Tp,fog_fragment:Cp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_fragment:wp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Lp,lights_pars_begin:Dp,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:kp,lights_phong_pars_fragment:Np,lights_physical_fragment:Bp,lights_physical_pars_fragment:Gp,lights_fragment_begin:zp,lights_fragment_maps:Vp,lights_fragment_end:Hp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Yp,map_fragment:qp,map_pars_fragment:Kp,map_particle_fragment:Jp,map_particle_pars_fragment:$p,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Qp,morphcolor_vertex:em,morphnormal_vertex:tm,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:rm,normal_fragment_maps:sm,normal_pars_fragment:am,normal_pars_vertex:om,normal_vertex:cm,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:hm,iridescence_pars_fragment:dm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:_m,dithering_fragment:vm,dithering_pars_fragment:xm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:bm,shadowmap_vertex:Em,shadowmask_pars_fragment:Tm,skinbase_vertex:Cm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:wm,specularmap_fragment:Pm,specularmap_pars_fragment:Um,tonemapping_fragment:Lm,tonemapping_pars_fragment:Dm,transmission_fragment:Im,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:km,uv_vertex:Nm,worldpos_vertex:Bm,background_vert:Gm,background_frag:zm,backgroundCube_vert:Vm,backgroundCube_frag:Hm,cube_vert:Wm,cube_frag:Xm,depth_vert:jm,depth_frag:Ym,distanceRGBA_vert:qm,distanceRGBA_frag:Km,equirect_vert:Jm,equirect_frag:$m,linedashed_vert:Zm,linedashed_frag:Qm,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:cg,meshphong_frag:lg,meshphysical_vert:fg,meshphysical_frag:ug,meshtoon_vert:hg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:vg,sprite_frag:xg},Pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Dn={basic:{uniforms:Nt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Nt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Nt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Nt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Nt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Nt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Nt([Pe.points,Pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Nt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Nt([Pe.common,Pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Nt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Nt([Pe.sprite,Pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Nt([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Nt([Pe.lights,Pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Dn.physical={uniforms:Nt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Cs={r:0,b:0,g:0};function yg(r,e,t,n,i,s,a){const o=new tt(0);let c=s===!0?0:1,l,f,u=null,h=0,d=null;function g(p,m){let T=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),T=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Qs)?(f===void 0&&(f=new rn(new Zr(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:lr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=v.colorSpace!==ot,(u!==v||h!==v.version||d!==r.toneMapping)&&(f.material.needsUpdate=!0,u=v,h=v.version,d=r.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new rn(new oi(2,2),new Ci({name:"BackgroundMaterial",uniforms:lr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=v.colorSpace!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,m){p.getRGB(Cs,Hf(r)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),c=m,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function Sg(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,f=!1;function u(P,L,F,I,W){let G=!1;if(a){const k=_(I,F,L);l!==k&&(l=k,d(l.object)),G=m(P,I,F,W),G&&T(P,I,F,W)}else{const k=L.wireframe===!0;(l.geometry!==I.id||l.program!==F.id||l.wireframe!==k)&&(l.geometry=I.id,l.program=F.id,l.wireframe=k,G=!0)}W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(G||f)&&(f=!1,B(P,L,F,I),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,L,F){const I=F.wireframe===!0;let W=o[P.id];W===void 0&&(W={},o[P.id]=W);let G=W[L.id];G===void 0&&(G={},W[L.id]=G);let k=G[I];return k===void 0&&(k=p(h()),G[I]=k),k}function p(P){const L=[],F=[],I=[];for(let W=0;W<i;W++)L[W]=0,F[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:I,object:P,attributes:{},index:null}}function m(P,L,F,I){const W=l.attributes,G=L.attributes;let k=0;const b=F.getAttributes();for(const U in b)if(b[U].location>=0){const X=W[U];let Y=G[U];if(Y===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),X===void 0||X.attribute!==Y||Y&&X.data!==Y.data)return!0;k++}return l.attributesNum!==k||l.index!==I}function T(P,L,F,I){const W={},G=L.attributes;let k=0;const b=F.getAttributes();for(const U in b)if(b[U].location>=0){let X=G[U];X===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const Y={};Y.attribute=X,X&&X.data&&(Y.data=X.data),W[U]=Y,k++}l.attributes=W,l.attributesNum=k,l.index=I}function v(){const P=l.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function y(P){E(P,0)}function E(P,L){const F=l.newAttributes,I=l.enabledAttributes,W=l.attributeDivisors;F[P]=1,I[P]===0&&(r.enableVertexAttribArray(P),I[P]=1),W[P]!==L&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),W[P]=L)}function w(){const P=l.newAttributes,L=l.enabledAttributes;for(let F=0,I=L.length;F<I;F++)L[F]!==P[F]&&(r.disableVertexAttribArray(F),L[F]=0)}function R(P,L,F,I,W,G,k){k===!0?r.vertexAttribIPointer(P,L,F,W,G):r.vertexAttribPointer(P,L,F,I,W,G)}function B(P,L,F,I){if(n.isWebGL2===!1&&(P.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=I.attributes,G=F.getAttributes(),k=L.defaultAttributeValues;for(const b in G){const U=G[b];if(U.location>=0){let j=W[b];if(j===void 0&&(b==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),b==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const X=j.normalized,Y=j.itemSize,re=t.get(j);if(re===void 0)continue;const ee=re.buffer,ie=re.type,_e=re.bytesPerElement,Ie=n.isWebGL2===!0&&(ie===r.INT||ie===r.UNSIGNED_INT||j.gpuType===Tf);if(j.isInterleavedBufferAttribute){const pe=j.data,O=pe.stride,Ge=j.offset;if(pe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<U.locationSize;Ce++)E(U.location+Ce,pe.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)y(U.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let Ce=0;Ce<U.locationSize;Ce++)R(U.location+Ce,Y/U.locationSize,ie,X,O*_e,(Ge+Y/U.locationSize*Ce)*_e,Ie)}else{if(j.isInstancedBufferAttribute){for(let pe=0;pe<U.locationSize;pe++)E(U.location+pe,j.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pe=0;pe<U.locationSize;pe++)y(U.location+pe);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let pe=0;pe<U.locationSize;pe++)R(U.location+pe,Y/U.locationSize,ie,X,Y*_e,Y/U.locationSize*pe*_e,Ie)}}else if(k!==void 0){const X=k[b];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(U.location,X);break;case 3:r.vertexAttrib3fv(U.location,X);break;case 4:r.vertexAttrib4fv(U.location,X);break;default:r.vertexAttrib1fv(U.location,X)}}}}w()}function M(){N();for(const P in o){const L=o[P];for(const F in L){const I=L[F];for(const W in I)g(I[W].object),delete I[W];delete L[F]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;const L=o[P.id];for(const F in L){const I=L[F];for(const W in I)g(I[W].object),delete I[W];delete L[F]}delete o[P.id]}function $(P){for(const L in o){const F=o[L];if(F[P.id]===void 0)continue;const I=F[P.id];for(const W in I)g(I[W].object),delete I[W];delete F[P.id]}}function N(){x(),f=!0,l!==c&&(l=c,d(l.object))}function x(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:N,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function Mg(r,e,t,n){const i=n.isWebGL2;let s;function a(l){s=l}function o(l,f){r.drawArrays(s,l,f),t.update(f,s,1)}function c(l,f,u){if(u===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,l,f,u),t.update(f,s,u)}this.setMode=a,this.render=o,this.renderInstances=c}function bg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=a||e.has("OES_texture_float"),E=v&&y,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:w}}function Eg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new pi,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||n!==0||i;return i=h,n=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?f(null):l();else{const T=s?0:n,v=T*4;let y=m.clippingState||null;c.value=y,y=f(g,h,v,d);for(let E=0;E!==v;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=d;v!==_;++v,y+=4)a.copy(u[v]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Tg(r){let e=new WeakMap;function t(a,o){return o===ao?a.mapping=ar:o===oo&&(a.mapping=or),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ao||o===oo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Bd(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qf extends Xf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const tr=4,cl=[.125,.215,.35,.446,.526,.582],_i=20,Va=new qf,ll=new tt;let Ha=null;const mi=(1+Math.sqrt(5))/2,Ki=1/mi,fl=[new ne(1,1,1),new ne(-1,1,1),new ne(1,1,-1),new ne(-1,1,-1),new ne(0,mi,Ki),new ne(0,mi,-Ki),new ne(Ki,0,mi),new ne(-Ki,0,mi),new ne(mi,Ki,0),new ne(-mi,Ki,0)];class ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ha=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha),e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Vr,format:Tn,colorSpace:On,depthBuffer:!1},i=hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(s)),this._blurMaterial=Ag(s,e,t)}return i}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,i){const o=new un(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(ll),f.toneMapping=si,f.autoClear=!1;const d=new na({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new rn(new Zr,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(ll),_=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):T===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const v=this._cubeSize;As(i,T*v,m>2?v:0,v,v),f.setRenderTarget(i),_&&f.render(g,o),f.render(e,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ar||e.mapping===or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new rn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;As(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=fl[(i-1)%fl.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new rn(this._lodPlanes[i],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_i-1),_=s/g,p=isFinite(s)?1+Math.floor(f*_):_i;p>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);const m=[];let T=0;for(let R=0;R<_i;++R){const B=R/_,M=Math.exp(-B*B/2);m.push(M),R===0?T+=M:R<p&&(T+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[i],E=3*y*(i>v-tr?i-v+tr:0),w=4*(this._cubeSize-y);As(t,E,w,3*y,2*y),c.setRenderTarget(t),c.render(u,Va)}}function Cg(r){const e=[],t=[],n=[];let i=r;const s=r-tr+1+cl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-tr?c=cl[a-r+tr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,g=6,_=3,p=2,m=1,T=new Float32Array(_*g*d),v=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,B=w>2?0:-1,M=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];T.set(M,_*g*w),v.set(h,p*g*w);const A=[w,w,w,w,w,w];y.set(A,m*g*w)}const E=new Rn;E.setAttribute("position",new An(T,_)),E.setAttribute("uv",new An(v,p)),E.setAttribute("faceIndex",new An(y,m)),e.push(E),i>tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hl(r,e,t){const n=new Ti(r,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ag(r,e,t){const n=new Float32Array(_i),i=new ne(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function dl(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function pl(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ao||c===oo,f=c===ar||c===or;if(l||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new ul(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||f&&u&&i(u)){t===null&&(t=new ul(r));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pg(r,e,t,n){const i={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function l(u){const h=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let v=0,y=T.length;v<y;v+=3){const E=T[v+0],w=T[v+1],R=T[v+2];h.push(E,w,w,R,R,E)}}else if(g!==void 0){const T=g.array;_=g.version;for(let v=0,y=T.length/3-1;v<y;v+=3){const E=v+0,w=v+1,R=v+2;h.push(E,w,w,R,R,E)}}else return;const p=new(If(h)?Vf:zf)(h,1);p.version=_;const m=s.get(u);m&&e.remove(m),s.set(u,p)}function f(u){const h=s.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function Ug(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function f(h,d){r.drawElements(s,d,o,h*c),t.update(d,s,1)}function u(h,d,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,d,o,h*c,g),t.update(d,s,g)}this.setMode=a,this.setIndex=l,this.render=f,this.renderInstances=u}function Lg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dg(r,e){return r[0]-e[0]}function Ig(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Fg(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,f,u){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(f);if(p===void 0||p.count!==_){let L=function(){x.dispose(),s.delete(f),f.removeEventListener("dispose",L)};var d=L;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],B=f.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),E===!0&&(M=3);let A=f.attributes.position.count*M,$=1;A>e.maxTextureSize&&($=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const N=new Float32Array(A*$*4*_),x=new kf(N,A,$,_);x.type=ii,x.needsUpdate=!0;const P=M*4;for(let F=0;F<_;F++){const I=w[F],W=R[F],G=B[F],k=A*$*4*F;for(let b=0;b<I.count;b++){const U=b*P;v===!0&&(a.fromBufferAttribute(I,b),N[k+U+0]=a.x,N[k+U+1]=a.y,N[k+U+2]=a.z,N[k+U+3]=0),y===!0&&(a.fromBufferAttribute(W,b),N[k+U+4]=a.x,N[k+U+5]=a.y,N[k+U+6]=a.z,N[k+U+7]=0),E===!0&&(a.fromBufferAttribute(G,b),N[k+U+8]=a.x,N[k+U+9]=a.y,N[k+U+10]=a.z,N[k+U+11]=G.itemSize===4?a.w:1)}}p={count:_,texture:x,size:new nt(A,$)},s.set(f,p),f.addEventListener("dispose",L)}let m=0;for(let v=0;v<h.length;v++)m+=h[v];const T=f.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",T),u.getUniforms().setValue(r,"morphTargetInfluences",h),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=n[f.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[f.id]=_}for(let y=0;y<g;y++){const E=_[y];E[0]=y,E[1]=h[y]}_.sort(Ig);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Dg);const p=f.morphAttributes.position,m=f.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const E=o[y],w=E[0],R=E[1];w!==Number.MAX_SAFE_INTEGER&&R?(p&&f.getAttribute("morphTarget"+y)!==p[w]&&f.setAttribute("morphTarget"+y,p[w]),m&&f.getAttribute("morphNormal"+y)!==m[w]&&f.setAttribute("morphNormal"+y,m[w]),i[y]=R,T+=R):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),m&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),i[y]=0)}const v=f.morphTargetsRelative?1:1-T;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Og(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,u=e.get(c,f);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Kf=new Vt,Jf=new kf,$f=new bd,Zf=new jf,ml=[],gl=[],_l=new Float32Array(16),vl=new Float32Array(9),xl=new Float32Array(4);function pr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ml[i];if(s===void 0&&(s=new Float32Array(i),ml[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ia(r,e){let t=gl[e];t===void 0&&(t=new Int32Array(e),gl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function kg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function Gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function zg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;xl.set(n),r.uniformMatrix2fv(this.addr,!1,xl),Et(t,n)}}function Vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;vl.set(n),r.uniformMatrix3fv(this.addr,!1,vl),Et(t,n)}}function Hg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;_l.set(n),r.uniformMatrix4fv(this.addr,!1,_l),Et(t,n)}}function Wg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function qg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function Jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function Zg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Kf,i)}function Qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$f,i)}function e0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zf,i)}function t0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jf,i)}function n0(r){switch(r){case 5126:return kg;case 35664:return Ng;case 35665:return Bg;case 35666:return Gg;case 35674:return zg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return jg;case 35669:case 35673:return Yg;case 5125:return qg;case 36294:return Kg;case 36295:return Jg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}function i0(r,e){r.uniform1fv(this.addr,e)}function r0(r,e){const t=pr(e,this.size,2);r.uniform2fv(this.addr,t)}function s0(r,e){const t=pr(e,this.size,3);r.uniform3fv(this.addr,t)}function a0(r,e){const t=pr(e,this.size,4);r.uniform4fv(this.addr,t)}function o0(r,e){const t=pr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function c0(r,e){const t=pr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function l0(r,e){const t=pr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function f0(r,e){r.uniform1iv(this.addr,e)}function u0(r,e){r.uniform2iv(this.addr,e)}function h0(r,e){r.uniform3iv(this.addr,e)}function d0(r,e){r.uniform4iv(this.addr,e)}function p0(r,e){r.uniform1uiv(this.addr,e)}function m0(r,e){r.uniform2uiv(this.addr,e)}function g0(r,e){r.uniform3uiv(this.addr,e)}function _0(r,e){r.uniform4uiv(this.addr,e)}function v0(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Kf,s[a])}function x0(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$f,s[a])}function y0(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Zf,s[a])}function S0(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jf,s[a])}function M0(r){switch(r){case 5126:return i0;case 35664:return r0;case 35665:return s0;case 35666:return a0;case 35674:return o0;case 35675:return c0;case 35676:return l0;case 5124:case 35670:return f0;case 35667:case 35671:return u0;case 35668:case 35672:return h0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return S0}}class b0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=n0(t.type)}}class E0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=M0(t.type)}}class T0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function yl(r,e){r.seq.push(e),r.map[e.id]=e}function C0(r,e,t){const n=r.name,i=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),a=Wa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){yl(t,l===void 0?new b0(o,r,e):new E0(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new T0(o),yl(t,u)),t=u}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);C0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Sl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let A0=0;function R0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function w0(r){switch(r){case On:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Ml(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+R0(r.getShaderSource(e),a)}else return i}function P0(r,e){const t=w0(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function U0(r,e){let t;switch(e){case Gh:t="Linear";break;case zh:t="Reinhard";break;case Vh:t="OptimizedCineon";break;case Hh:t="ACESFilmic";break;case Wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function L0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function D0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ir(r){return r!==""}function bl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function El(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F0=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(r){return r.replace(F0,k0)}const O0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function k0(r,e){let t=$e[e];if(t===void 0){const n=O0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return po(t)}const N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(r){return r.replace(N0,B0)}function B0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function z0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ar:case or:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function H0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bo:e="ENVMAP_BLENDING_MULTIPLY";break;case Nh:e="ENVMAP_BLENDING_MIX";break;case Bh:e="ENVMAP_BLENDING_ADD";break}return e}function W0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function X0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=G0(t),l=z0(t),f=V0(t),u=H0(t),h=W0(t),d=t.isWebGL2?"":L0(t),g=D0(s),_=i.createProgram();let p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(p=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[d,Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?$e.tonemapping_pars_fragment:"",t.toneMapping!==si?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=po(a),a=bl(a,t),a=El(a,t),o=po(o),o=bl(o,t),o=El(o,t),a=Tl(a),o=Tl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=T+p+a,y=T+m+o,E=Sl(i,i.VERTEX_SHADER,v),w=Sl(i,i.FRAGMENT_SHADER,y);if(i.attachShader(_,E),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),A=i.getShaderInfoLog(E).trim(),$=i.getShaderInfoLog(w).trim();let N=!0,x=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,w);else{const P=Ml(i,E,"vertex"),L=Ml(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+P+`
`+L)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||$==="")&&(x=!1);x&&(this.diagnostics={runnable:N,programLog:M,vertexShader:{log:A,prefix:p},fragmentShader:{log:$,prefix:m}})}i.deleteShader(E),i.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Fs(i,_)),R};let B;return this.getAttributes=function(){return B===void 0&&(B=I0(i,_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let j0=0;class Y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new q0(e),t.set(e,n)),n}}class q0{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function K0(r,e,t,n,i,s,a){const o=new Bf,c=new Y0,l=[],f=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,A,$,N,x){const P=N.fog,L=x.geometry,F=M.isMeshStandardMaterial?N.environment:null,I=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),W=I&&I.mapping===Qs?I.image.height:null,G=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,b=k!==void 0?k.length:0;let U=0;L.morphAttributes.position!==void 0&&(U=1),L.morphAttributes.normal!==void 0&&(U=2),L.morphAttributes.color!==void 0&&(U=3);let j,X,Y,re;if(G){const We=Dn[G];j=We.vertexShader,X=We.fragmentShader}else j=M.vertexShader,X=M.fragmentShader,c.update(M),Y=c.getVertexShaderID(M),re=c.getFragmentShaderID(M);const ee=r.getRenderTarget(),ie=x.isInstancedMesh===!0,_e=!!M.map,Ie=!!M.matcap,pe=!!I,O=!!M.aoMap,Ge=!!M.lightMap,Ce=!!M.bumpMap,Ee=!!M.normalMap,Re=!!M.displacementMap,Ne=!!M.emissiveMap,de=!!M.metalnessMap,Se=!!M.roughnessMap,Ae=M.anisotropy>0,ae=M.clearcoat>0,Ue=M.iridescence>0,C=M.sheen>0,S=M.transmission>0,V=Ae&&!!M.anisotropyMap,me=ae&&!!M.clearcoatMap,te=ae&&!!M.clearcoatNormalMap,se=ae&&!!M.clearcoatRoughnessMap,ve=Ue&&!!M.iridescenceMap,he=Ue&&!!M.iridescenceThicknessMap,q=C&&!!M.sheenColorMap,we=C&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ye=!!M.specularColorMap,fe=!!M.specularIntensityMap,be=S&&!!M.transmissionMap,ke=S&&!!M.thicknessMap,qe=!!M.gradientMap,z=!!M.alphaMap,le=M.alphaTest>0,K=!!M.alphaHash,Te=!!M.extensions,ge=!!L.attributes.uv1,De=!!L.attributes.uv2,Ye=!!L.attributes.uv3;let ze=si;return M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ze=r.toneMapping),{isWebGL2:f,shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:X,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:ie,instancingColor:ie&&x.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:On,map:_e,matcap:Ie,envMap:pe,envMapMode:pe&&I.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Ge,bumpMap:Ce,normalMap:Ee,displacementMap:h&&Re,emissiveMap:Ne,normalMapObjectSpace:Ee&&M.normalMapType===nd,normalMapTangentSpace:Ee&&M.normalMapType===Df,metalnessMap:de,roughnessMap:Se,anisotropy:Ae,anisotropyMap:V,clearcoat:ae,clearcoatMap:me,clearcoatNormalMap:te,clearcoatRoughnessMap:se,iridescence:Ue,iridescenceMap:ve,iridescenceThicknessMap:he,sheen:C,sheenColorMap:q,sheenRoughnessMap:we,specularMap:Me,specularColorMap:ye,specularIntensityMap:fe,transmission:S,transmissionMap:be,thicknessMap:ke,gradientMap:qe,opaque:M.transparent===!1&&M.blending===ir,alphaMap:z,alphaTest:le,alphaHash:K,combine:M.combine,mapUv:_e&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:Ge&&_(M.lightMap.channel),bumpMapUv:Ce&&_(M.bumpMap.channel),normalMapUv:Ee&&_(M.normalMap.channel),displacementMapUv:Re&&_(M.displacementMap.channel),emissiveMapUv:Ne&&_(M.emissiveMap.channel),metalnessMapUv:de&&_(M.metalnessMap.channel),roughnessMapUv:Se&&_(M.roughnessMap.channel),anisotropyMapUv:V&&_(M.anisotropyMap.channel),clearcoatMapUv:me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:q&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(M.sheenRoughnessMap.channel),specularMapUv:Me&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:fe&&_(M.specularIntensityMap.channel),transmissionMapUv:be&&_(M.transmissionMap.channel),thicknessMapUv:ke&&_(M.thicknessMap.channel),alphaMapUv:z&&_(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ee||Ae),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:De,vertexUv3s:Ye,pointsUvs:x.isPoints===!0&&!!L.attributes.uv&&(_e||z),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:x.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:U,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&$.length>0,shadowMapType:r.shadowMap.type,toneMapping:ze,useLegacyLights:r._useLegacyLights,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&M.map.colorSpace===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bn,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Te&&M.extensions.derivatives===!0,extensionFragDepth:Te&&M.extensions.fragDepth===!0,extensionDrawBuffers:Te&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)A.push($),A.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(T(A,M),v(A,M),A.push(r.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function T(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const A=g[M.type];let $;if(A){const N=Dn[A];$=Wf.clone(N.uniforms)}else $=M.uniforms;return $}function E(M,A){let $;for(let N=0,x=l.length;N<x;N++){const P=l[N];if(P.cacheKey===A){$=P,++$.usedTimes;break}}return $===void 0&&($=new X0(r,A,M,s),l.push($)),$}function w(M){if(--M.usedTimes===0){const A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function B(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:B}}function J0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Al(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,h,d,g,_,p){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function o(u,h,d,g,_,p){const m=a(u,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(u,h,d,g,_,p){const m=a(u,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,h){t.length>1&&t.sort(u||$0),n.length>1&&n.sort(h||Al),i.length>1&&i.sort(h||Al)}function f(){for(let u=e,h=r.length;u<h;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:f,sort:l}}function Z0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Rl,r.set(n,[a])):i>=s.length?(a=new Rl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Q0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new tt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=t,t}}}function e_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let t_=0;function n_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function i_(r,e){const t=new Q0,n=e_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new ne);const s=new ne,a=new mt,o=new mt;function c(f,u){let h=0,d=0,g=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let _=0,p=0,m=0,T=0,v=0,y=0,E=0,w=0,R=0,B=0;f.sort(n_);const M=u===!0?Math.PI:1;for(let $=0,N=f.length;$<N;$++){const x=f[$],P=x.color,L=x.intensity,F=x.distance,I=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)h+=P.r*L*M,d+=P.g*L*M,g+=P.b*L*M;else if(x.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(x.sh.coefficients[W],L);else if(x.isDirectionalLight){const W=t.get(x);if(W.color.copy(x.color).multiplyScalar(x.intensity*M),x.castShadow){const G=x.shadow,k=n.get(x);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[_]=k,i.directionalShadowMap[_]=I,i.directionalShadowMatrix[_]=x.shadow.matrix,y++}i.directional[_]=W,_++}else if(x.isSpotLight){const W=t.get(x);W.position.setFromMatrixPosition(x.matrixWorld),W.color.copy(P).multiplyScalar(L*M),W.distance=F,W.coneCos=Math.cos(x.angle),W.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),W.decay=x.decay,i.spot[m]=W;const G=x.shadow;if(x.map&&(i.spotLightMap[R]=x.map,R++,G.updateMatrices(x),x.castShadow&&B++),i.spotLightMatrix[m]=G.matrix,x.castShadow){const k=n.get(x);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[m]=k,i.spotShadowMap[m]=I,w++}m++}else if(x.isRectAreaLight){const W=t.get(x);W.color.copy(P).multiplyScalar(L),W.halfWidth.set(x.width*.5,0,0),W.halfHeight.set(0,x.height*.5,0),i.rectArea[T]=W,T++}else if(x.isPointLight){const W=t.get(x);if(W.color.copy(x.color).multiplyScalar(x.intensity*M),W.distance=x.distance,W.decay=x.decay,x.castShadow){const G=x.shadow,k=n.get(x);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[p]=k,i.pointShadowMap[p]=I,i.pointShadowMatrix[p]=x.shadow.matrix,E++}i.point[p]=W,p++}else if(x.isHemisphereLight){const W=t.get(x);W.skyColor.copy(x.color).multiplyScalar(L*M),W.groundColor.copy(x.groundColor).multiplyScalar(L*M),i.hemi[v]=W,v++}}T>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==_||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==T||A.hemiLength!==v||A.numDirectionalShadows!==y||A.numPointShadows!==E||A.numSpotShadows!==w||A.numSpotMaps!==R)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=T,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+R-B,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=B,A.directionalLength=_,A.pointLength=p,A.spotLength=m,A.rectAreaLength=T,A.hemiLength=v,A.numDirectionalShadows=y,A.numPointShadows=E,A.numSpotShadows=w,A.numSpotMaps=R,i.version=t_++)}function l(f,u){let h=0,d=0,g=0,_=0,p=0;const m=u.matrixWorldInverse;for(let T=0,v=f.length;T<v;T++){const y=f[T];if(y.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function wl(r,e){const t=new i_(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function r_(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new wl(r,e),t.set(s,[c])):a>=o.length?(c=new wl(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Qf extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eu extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o_(r,e,t){let n=new zo;const i=new nt,s=new nt,a=new _t,o=new Qf({depthPacking:Lf}),c=new eu,l={},f=t.maxTextureSize,u={[Yn]:zt,[zt]:Yn,[bn]:bn},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:s_,fragmentShader:a_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sf;let m=this.type;this.render=function(E,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const B=r.getRenderTarget(),M=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),$=r.state;$.setBlending(ri),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const N=m!==Xn&&this.type===Xn,x=m===Xn&&this.type!==Xn;for(let P=0,L=E.length;P<L;P++){const F=E[P],I=F.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const W=I.getFrameExtents();if(i.multiply(W),s.copy(I.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/W.x),i.x=s.x*W.x,I.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/W.y),i.y=s.y*W.y,I.mapSize.y=s.y)),I.map===null||N===!0||x===!0){const k=this.type!==Xn?{minFilter:Gt,magFilter:Gt}:{};I.map!==null&&I.map.dispose(),I.map=new Ti(i.x,i.y,k),I.map.texture.name=F.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const G=I.getViewportCount();for(let k=0;k<G;k++){const b=I.getViewport(k);a.set(s.x*b.x,s.y*b.y,s.x*b.z,s.y*b.w),$.viewport(a),I.updateMatrices(F,k),n=I.getFrustum(),y(w,R,I.camera,F,this.type)}I.isPointLightShadow!==!0&&this.type===Xn&&T(I,R),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(B,M,A)};function T(E,w){const R=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ti(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,R,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,R,d,_,null)}function v(E,w,R,B){let M=null;const A=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=M.uuid,N=w.uuid;let x=l[$];x===void 0&&(x={},l[$]=x);let P=x[N];P===void 0&&(P=M.clone(),x[N]=P),M=P}if(M.visible=w.visible,M.wireframe=w.wireframe,B===Xn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=r.properties.get(M);$.light=R}return M}function y(E,w,R,B,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const N=e.update(E),x=E.material;if(Array.isArray(x)){const P=N.groups;for(let L=0,F=P.length;L<F;L++){const I=P[L],W=x[I.materialIndex];if(W&&W.visible){const G=v(E,W,B,M);r.renderBufferDirect(R,null,N,G,E,I)}}}else if(x.visible){const P=v(E,x,B,M);r.renderBufferDirect(R,null,N,P,E,null)}}const $=E.children;for(let N=0,x=$.length;N<x;N++)y($[N],w,R,B,M)}}function c_(r,e,t){const n=t.isWebGL2;function i(){let z=!1;const le=new _t;let K=null;const Te=new _t(0,0,0,0);return{setMask:function(ge){K!==ge&&!z&&(r.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){z=ge},setClear:function(ge,De,Ye,ze,Xe){Xe===!0&&(ge*=ze,De*=ze,Ye*=ze),le.set(ge,De,Ye,ze),Te.equals(le)===!1&&(r.clearColor(ge,De,Ye,ze),Te.copy(le))},reset:function(){z=!1,K=null,Te.set(-1,0,0,0)}}}function s(){let z=!1,le=null,K=null,Te=null;return{setTest:function(ge){ge?ee(r.DEPTH_TEST):ie(r.DEPTH_TEST)},setMask:function(ge){le!==ge&&!z&&(r.depthMask(ge),le=ge)},setFunc:function(ge){if(K!==ge){switch(ge){case Uh:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case Ih:r.depthFunc(r.EQUAL);break;case Fh:r.depthFunc(r.GEQUAL);break;case Oh:r.depthFunc(r.GREATER);break;case kh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ge}},setLocked:function(ge){z=ge},setClear:function(ge){Te!==ge&&(r.clearDepth(ge),Te=ge)},reset:function(){z=!1,le=null,K=null,Te=null}}}function a(){let z=!1,le=null,K=null,Te=null,ge=null,De=null,Ye=null,ze=null,Xe=null;return{setTest:function(We){z||(We?ee(r.STENCIL_TEST):ie(r.STENCIL_TEST))},setMask:function(We){le!==We&&!z&&(r.stencilMask(We),le=We)},setFunc:function(We,ct,it){(K!==We||Te!==ct||ge!==it)&&(r.stencilFunc(We,ct,it),K=We,Te=ct,ge=it)},setOp:function(We,ct,it){(De!==We||Ye!==ct||ze!==it)&&(r.stencilOp(We,ct,it),De=We,Ye=ct,ze=it)},setLocked:function(We){z=We},setClear:function(We){Xe!==We&&(r.clearStencil(We),Xe=We)},reset:function(){z=!1,le=null,K=null,Te=null,ge=null,De=null,Ye=null,ze=null,Xe=null}}}const o=new i,c=new s,l=new a,f=new WeakMap,u=new WeakMap;let h={},d={},g=new WeakMap,_=[],p=null,m=!1,T=null,v=null,y=null,E=null,w=null,R=null,B=null,M=!1,A=null,$=null,N=null,x=null,P=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,I=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=I>=1):W.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=I>=2);let G=null,k={};const b=r.getParameter(r.SCISSOR_BOX),U=r.getParameter(r.VIEWPORT),j=new _t().fromArray(b),X=new _t().fromArray(U);function Y(z,le,K,Te){const ge=new Uint8Array(4),De=r.createTexture();r.bindTexture(z,De),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<K;Ye++)n&&(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(le+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return De}const re={};re[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(re[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ee(r.DEPTH_TEST),c.setFunc(so),Re(!1),Ne(dc),ee(r.CULL_FACE),Ce(ri);function ee(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function ie(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function _e(z,le){return d[z]!==le?(r.bindFramebuffer(z,le),d[z]=le,n&&(z===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),z===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function Ie(z,le){let K=_,Te=!1;if(z)if(K=g.get(le),K===void 0&&(K=[],g.set(le,K)),z.isWebGLMultipleRenderTargets){const ge=z.texture;if(K.length!==ge.length||K[0]!==r.COLOR_ATTACHMENT0){for(let De=0,Ye=ge.length;De<Ye;De++)K[De]=r.COLOR_ATTACHMENT0+De;K.length=ge.length,Te=!0}}else K[0]!==r.COLOR_ATTACHMENT0&&(K[0]=r.COLOR_ATTACHMENT0,Te=!0);else K[0]!==r.BACK&&(K[0]=r.BACK,Te=!0);Te&&(t.isWebGL2?r.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function pe(z){return p!==z?(r.useProgram(z),p=z,!0):!1}const O={[Qi]:r.FUNC_ADD,[yh]:r.FUNC_SUBTRACT,[Sh]:r.FUNC_REVERSE_SUBTRACT};if(n)O[_c]=r.MIN,O[vc]=r.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(O[_c]=z.MIN_EXT,O[vc]=z.MAX_EXT)}const Ge={[Mh]:r.ZERO,[bh]:r.ONE,[Eh]:r.SRC_COLOR,[Mf]:r.SRC_ALPHA,[Ph]:r.SRC_ALPHA_SATURATE,[Rh]:r.DST_COLOR,[Ch]:r.DST_ALPHA,[Th]:r.ONE_MINUS_SRC_COLOR,[bf]:r.ONE_MINUS_SRC_ALPHA,[wh]:r.ONE_MINUS_DST_COLOR,[Ah]:r.ONE_MINUS_DST_ALPHA};function Ce(z,le,K,Te,ge,De,Ye,ze){if(z===ri){m===!0&&(ie(r.BLEND),m=!1);return}if(m===!1&&(ee(r.BLEND),m=!0),z!==xh){if(z!==T||ze!==M){if((v!==Qi||w!==Qi)&&(r.blendEquation(r.FUNC_ADD),v=Qi,w=Qi),ze)switch(z){case ir:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pc:r.blendFunc(r.ONE,r.ONE);break;case mc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case mc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,E=null,R=null,B=null,T=z,M=ze}return}ge=ge||le,De=De||K,Ye=Ye||Te,(le!==v||ge!==w)&&(r.blendEquationSeparate(O[le],O[ge]),v=le,w=ge),(K!==y||Te!==E||De!==R||Ye!==B)&&(r.blendFuncSeparate(Ge[K],Ge[Te],Ge[De],Ge[Ye]),y=K,E=Te,R=De,B=Ye),T=z,M=!1}function Ee(z,le){z.side===bn?ie(r.CULL_FACE):ee(r.CULL_FACE);let K=z.side===zt;le&&(K=!K),Re(K),z.blending===ir&&z.transparent===!1?Ce(ri):Ce(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);const Te=z.stencilWrite;l.setTest(Te),Te&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Se(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(z){A!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),A=z)}function Ne(z){z!==gh?(ee(r.CULL_FACE),z!==$&&(z===dc?r.cullFace(r.BACK):z===_h?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ie(r.CULL_FACE),$=z}function de(z){z!==N&&(F&&r.lineWidth(z),N=z)}function Se(z,le,K){z?(ee(r.POLYGON_OFFSET_FILL),(x!==le||P!==K)&&(r.polygonOffset(le,K),x=le,P=K)):ie(r.POLYGON_OFFSET_FILL)}function Ae(z){z?ee(r.SCISSOR_TEST):ie(r.SCISSOR_TEST)}function ae(z){z===void 0&&(z=r.TEXTURE0+L-1),G!==z&&(r.activeTexture(z),G=z)}function Ue(z,le,K){K===void 0&&(G===null?K=r.TEXTURE0+L-1:K=G);let Te=k[K];Te===void 0&&(Te={type:void 0,texture:void 0},k[K]=Te),(Te.type!==z||Te.texture!==le)&&(G!==K&&(r.activeTexture(K),G=K),r.bindTexture(z,le||re[z]),Te.type=z,Te.texture=le)}function C(){const z=k[G];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(z){j.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),j.copy(z))}function fe(z){X.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),X.copy(z))}function be(z,le){let K=u.get(le);K===void 0&&(K=new WeakMap,u.set(le,K));let Te=K.get(z);Te===void 0&&(Te=r.getUniformBlockIndex(le,z.name),K.set(z,Te))}function ke(z,le){const Te=u.get(le).get(z);f.get(le)!==Te&&(r.uniformBlockBinding(le,Te,z.__bindingPointIndex),f.set(le,Te))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},G=null,k={},d={},g=new WeakMap,_=[],p=null,m=!1,T=null,v=null,y=null,E=null,w=null,R=null,B=null,M=!1,A=null,$=null,N=null,x=null,P=null,j.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ee,disable:ie,bindFramebuffer:_e,drawBuffers:Ie,useProgram:pe,setBlending:Ce,setMaterial:Ee,setFlipSided:Re,setCullFace:Ne,setLineWidth:de,setPolygonOffset:Se,setScissorTest:Ae,activeTexture:ae,bindTexture:Ue,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:we,texImage3D:Me,updateUBOMapping:be,uniformBlockBinding:ke,texStorage2D:he,texStorage3D:q,texSubImage2D:me,texSubImage3D:te,compressedTexSubImage2D:se,compressedTexSubImage3D:ve,scissor:ye,viewport:fe,reset:qe}}function l_(r,e,t,n,i,s,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,f=i.maxTextureSize,u=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,S){return m?new OffscreenCanvas(C,S):qs("canvas")}function v(C,S,V,me){let te=1;if((C.width>me||C.height>me)&&(te=me/Math.max(C.width,C.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=S?ho:Math.floor,ve=se(te*C.width),he=se(te*C.height);_===void 0&&(_=T(ve,he));const q=V?T(ve,he):_;return q.width=ve,q.height=he,q.getContext("2d").drawImage(C,0,0,ve,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ve+"x"+he+")."),q}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Yc(C.width)&&Yc(C.height)}function E(C){return o?!1:C.wrapS!==En||C.wrapT!==En||C.minFilter!==Gt&&C.minFilter!==Rt}function w(C,S){return C.generateMipmaps&&S&&C.minFilter!==Gt&&C.minFilter!==Rt}function R(C){r.generateMipmap(C)}function B(C,S,V,me,te=!1){if(o===!1)return S;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=S;return S===r.RED&&(V===r.FLOAT&&(se=r.R32F),V===r.HALF_FLOAT&&(se=r.R16F),V===r.UNSIGNED_BYTE&&(se=r.R8)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(se=r.R8UI),V===r.UNSIGNED_SHORT&&(se=r.R16UI),V===r.UNSIGNED_INT&&(se=r.R32UI),V===r.BYTE&&(se=r.R8I),V===r.SHORT&&(se=r.R16I),V===r.INT&&(se=r.R32I)),S===r.RG&&(V===r.FLOAT&&(se=r.RG32F),V===r.HALF_FLOAT&&(se=r.RG16F),V===r.UNSIGNED_BYTE&&(se=r.RG8)),S===r.RGBA&&(V===r.FLOAT&&(se=r.RGBA32F),V===r.HALF_FLOAT&&(se=r.RGBA16F),V===r.UNSIGNED_BYTE&&(se=me===ot&&te===!1?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)),(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function M(C,S,V){return w(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==Rt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){return C===Gt||C===xc||C===ga?r.NEAREST:r.LINEAR}function $(C){const S=C.target;S.removeEventListener("dispose",$),x(S),S.isVideoTexture&&g.delete(S)}function N(C){const S=C.target;S.removeEventListener("dispose",N),L(S)}function x(C){const S=n.get(C);if(S.__webglInit===void 0)return;const V=C.source,me=p.get(V);if(me){const te=me[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(C),Object.keys(me).length===0&&p.delete(V)}n.remove(C)}function P(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const V=C.source,me=p.get(V);delete me[S.__cacheKey],a.memory.textures--}function L(C){const S=C.texture,V=n.get(C),me=n.get(S);if(me.__webglTexture!==void 0&&(r.deleteTexture(me.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(V.__webglFramebuffer[te]))for(let se=0;se<V.__webglFramebuffer[te].length;se++)r.deleteFramebuffer(V.__webglFramebuffer[te][se]);else r.deleteFramebuffer(V.__webglFramebuffer[te]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[te])}else{if(Array.isArray(V.__webglFramebuffer))for(let te=0;te<V.__webglFramebuffer.length;te++)r.deleteFramebuffer(V.__webglFramebuffer[te]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let te=0;te<V.__webglColorRenderbuffer.length;te++)V.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[te]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,se=S.length;te<se;te++){const ve=n.get(S[te]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(C)}let F=0;function I(){F=0}function W(){const C=F;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),F+=1,C}function G(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function k(C,S){const V=n.get(C);if(C.isVideoTexture&&ae(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const me=C.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(V,C,S);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function b(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){_e(V,C,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function U(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){_e(V,C,S);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function j(C,S){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Ie(V,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const X={[co]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[lo]:r.MIRRORED_REPEAT},Y={[Gt]:r.NEAREST,[xc]:r.NEAREST_MIPMAP_NEAREST,[ga]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[Xh]:r.LINEAR_MIPMAP_NEAREST,[zr]:r.LINEAR_MIPMAP_LINEAR},re={[rd]:r.NEVER,[ud]:r.ALWAYS,[sd]:r.LESS,[od]:r.LEQUAL,[ad]:r.EQUAL,[fd]:r.GEQUAL,[cd]:r.GREATER,[ld]:r.NOTEQUAL};function ee(C,S,V){if(V?(r.texParameteri(C,r.TEXTURE_WRAP_S,X[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,X[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,X[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Y[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Y[S.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==En||S.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,A(S.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Gt&&S.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Gt||S.minFilter!==ga&&S.minFilter!==zr||S.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Vr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(C,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ie(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",$));const me=S.source;let te=p.get(me);te===void 0&&(te={},p.set(me,te));const se=G(S);if(se!==C.__cacheKey){te[se]===void 0&&(te[se]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[se].usedTimes++;const ve=te[C.__cacheKey];ve!==void 0&&(te[C.__cacheKey].usedTimes--,ve.usedTimes===0&&P(S)),C.__cacheKey=se,C.__webglTexture=te[se].texture}return V}function _e(C,S,V){let me=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(me=r.TEXTURE_3D);const te=ie(C,S),se=S.source;t.bindTexture(me,C.__webglTexture,r.TEXTURE0+V);const ve=n.get(se);if(se.version!==ve.__version||te===!0){t.activeTexture(r.TEXTURE0+V),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const he=E(S)&&y(S.image)===!1;let q=v(S.image,he,!1,f);q=Ue(S,q);const we=y(q)||o,Me=s.convert(S.format,S.colorSpace);let ye=s.convert(S.type),fe=B(S.internalFormat,Me,ye,S.colorSpace,S.isVideoTexture);ee(me,S,we);let be;const ke=S.mipmaps,qe=o&&S.isVideoTexture!==!0,z=ve.__version===void 0||te===!0,le=M(S,q,we);if(S.isDepthTexture)fe=r.DEPTH_COMPONENT,o?S.type===ii?fe=r.DEPTH_COMPONENT32F:S.type===ni?fe=r.DEPTH_COMPONENT24:S.type===xi?fe=r.DEPTH24_STENCIL8:fe=r.DEPTH_COMPONENT16:S.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===yi&&fe===r.DEPTH_COMPONENT&&S.type!==Go&&S.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ni,ye=s.convert(S.type)),S.format===cr&&fe===r.DEPTH_COMPONENT&&(fe=r.DEPTH_STENCIL,S.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=xi,ye=s.convert(S.type))),z&&(qe?t.texStorage2D(r.TEXTURE_2D,1,fe,q.width,q.height):t.texImage2D(r.TEXTURE_2D,0,fe,q.width,q.height,0,Me,ye,null));else if(S.isDataTexture)if(ke.length>0&&we){qe&&z&&t.texStorage2D(r.TEXTURE_2D,le,fe,ke[0].width,ke[0].height);for(let K=0,Te=ke.length;K<Te;K++)be=ke[K],qe?t.texSubImage2D(r.TEXTURE_2D,K,0,0,be.width,be.height,Me,ye,be.data):t.texImage2D(r.TEXTURE_2D,K,fe,be.width,be.height,0,Me,ye,be.data);S.generateMipmaps=!1}else qe?(z&&t.texStorage2D(r.TEXTURE_2D,le,fe,q.width,q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,q.width,q.height,Me,ye,q.data)):t.texImage2D(r.TEXTURE_2D,0,fe,q.width,q.height,0,Me,ye,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&z&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,fe,ke[0].width,ke[0].height,q.depth);for(let K=0,Te=ke.length;K<Te;K++)be=ke[K],S.format!==Tn?Me!==null?qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,q.depth,Me,be.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,fe,be.width,be.height,q.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,q.depth,Me,ye,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,fe,be.width,be.height,q.depth,0,Me,ye,be.data)}else{qe&&z&&t.texStorage2D(r.TEXTURE_2D,le,fe,ke[0].width,ke[0].height);for(let K=0,Te=ke.length;K<Te;K++)be=ke[K],S.format!==Tn?Me!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(r.TEXTURE_2D,K,fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(r.TEXTURE_2D,K,0,0,be.width,be.height,Me,ye,be.data):t.texImage2D(r.TEXTURE_2D,K,fe,be.width,be.height,0,Me,ye,be.data)}else if(S.isDataArrayTexture)qe?(z&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,fe,q.width,q.height,q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Me,ye,q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,fe,q.width,q.height,q.depth,0,Me,ye,q.data);else if(S.isData3DTexture)qe?(z&&t.texStorage3D(r.TEXTURE_3D,le,fe,q.width,q.height,q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Me,ye,q.data)):t.texImage3D(r.TEXTURE_3D,0,fe,q.width,q.height,q.depth,0,Me,ye,q.data);else if(S.isFramebufferTexture){if(z)if(qe)t.texStorage2D(r.TEXTURE_2D,le,fe,q.width,q.height);else{let K=q.width,Te=q.height;for(let ge=0;ge<le;ge++)t.texImage2D(r.TEXTURE_2D,ge,fe,K,Te,0,Me,ye,null),K>>=1,Te>>=1}}else if(ke.length>0&&we){qe&&z&&t.texStorage2D(r.TEXTURE_2D,le,fe,ke[0].width,ke[0].height);for(let K=0,Te=ke.length;K<Te;K++)be=ke[K],qe?t.texSubImage2D(r.TEXTURE_2D,K,0,0,Me,ye,be):t.texImage2D(r.TEXTURE_2D,K,fe,Me,ye,be);S.generateMipmaps=!1}else qe?(z&&t.texStorage2D(r.TEXTURE_2D,le,fe,q.width,q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,ye,q)):t.texImage2D(r.TEXTURE_2D,0,fe,Me,ye,q);w(S,we)&&R(me),ve.__version=se.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ie(C,S,V){if(S.image.length!==6)return;const me=ie(C,S),te=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const se=n.get(te);if(te.version!==se.__version||me===!0){t.activeTexture(r.TEXTURE0+V),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,q=[];for(let K=0;K<6;K++)!ve&&!he?q[K]=v(S.image[K],!1,!0,l):q[K]=he?S.image[K].image:S.image[K],q[K]=Ue(S,q[K]);const we=q[0],Me=y(we)||o,ye=s.convert(S.format,S.colorSpace),fe=s.convert(S.type),be=B(S.internalFormat,ye,fe,S.colorSpace),ke=o&&S.isVideoTexture!==!0,qe=se.__version===void 0||me===!0;let z=M(S,we,Me);ee(r.TEXTURE_CUBE_MAP,S,Me);let le;if(ve){ke&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,z,be,we.width,we.height);for(let K=0;K<6;K++){le=q[K].mipmaps;for(let Te=0;Te<le.length;Te++){const ge=le[Te];S.format!==Tn?ye!==null?ke?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,0,0,ge.width,ge.height,ye,fe,ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,be,ge.width,ge.height,0,ye,fe,ge.data)}}}else{le=S.mipmaps,ke&&qe&&(le.length>0&&z++,t.texStorage2D(r.TEXTURE_CUBE_MAP,z,be,q[0].width,q[0].height));for(let K=0;K<6;K++)if(he){ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,q[K].width,q[K].height,ye,fe,q[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,q[K].width,q[K].height,0,ye,fe,q[K].data);for(let Te=0;Te<le.length;Te++){const De=le[Te].image[K].image;ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,0,0,De.width,De.height,ye,fe,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,be,De.width,De.height,0,ye,fe,De.data)}}else{ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,fe,q[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,ye,fe,q[K]);for(let Te=0;Te<le.length;Te++){const ge=le[Te];ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,0,0,ye,fe,ge.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,be,ye,fe,ge.image[K])}}}w(S,Me)&&R(r.TEXTURE_CUBE_MAP),se.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function pe(C,S,V,me,te,se){const ve=s.convert(V.format,V.colorSpace),he=s.convert(V.type),q=B(V.internalFormat,ve,he,V.colorSpace);if(!n.get(S).__hasExternalTextures){const Me=Math.max(1,S.width>>se),ye=Math.max(1,S.height>>se);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,se,q,Me,ye,S.depth,0,ve,he,null):t.texImage2D(te,se,q,Me,ye,0,ve,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ae(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,te,n.get(V).__webglTexture,0,Se(S)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,te,n.get(V).__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function O(C,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let me=r.DEPTH_COMPONENT16;if(V||Ae(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===ii?me=r.DEPTH_COMPONENT32F:te.type===ni&&(me=r.DEPTH_COMPONENT24));const se=Se(S);Ae(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,me,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,se,me,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,me,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const me=Se(S);V&&Ae(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,r.DEPTH24_STENCIL8,S.width,S.height):Ae(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const me=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<me.length;te++){const se=me[te],ve=s.convert(se.format,se.colorSpace),he=s.convert(se.type),q=B(se.internalFormat,ve,he,se.colorSpace),we=Se(S);V&&Ae(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,q,S.width,S.height):Ae(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,q,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const me=n.get(S.depthTexture).__webglTexture,te=Se(S);if(S.depthTexture.format===yi)Ae(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(S.depthTexture.format===cr)Ae(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ge(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[me]),S.__webglDepthbuffer[me]=r.createRenderbuffer(),O(S.__webglDepthbuffer[me],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),O(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(C,S,V){const me=n.get(C);S!==void 0&&pe(me.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Ce(C)}function Re(C){const S=C.texture,V=n.get(C),me=n.get(S);C.addEventListener("dispose",N),C.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=S.version,a.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,ve=y(C)||o;if(te){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let q=0;q<S.mipmaps.length;q++)V.__webglFramebuffer[he][q]=r.createFramebuffer()}else V.__webglFramebuffer[he]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)V.__webglFramebuffer[he]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(se)if(i.drawBuffers){const he=C.texture;for(let q=0,we=he.length;q<we;q++){const Me=n.get(he[q]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ae(C)===!1){const he=se?S:[S];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let q=0;q<he.length;q++){const we=he[q];V.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[q]);const Me=s.convert(we.format,we.colorSpace),ye=s.convert(we.type),fe=B(we.internalFormat,Me,ye,we.colorSpace,C.isXRRenderTarget===!0),be=Se(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,fe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,V.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),O(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ee(r.TEXTURE_CUBE_MAP,S,ve);for(let he=0;he<6;he++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)pe(V.__webglFramebuffer[he][q],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,q);else pe(V.__webglFramebuffer[he],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);w(S,ve)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const he=C.texture;for(let q=0,we=he.length;q<we;q++){const Me=he[q],ye=n.get(Me);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),ee(r.TEXTURE_2D,Me,ve),pe(V.__webglFramebuffer,C,Me,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D,0),w(Me,ve)&&R(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?he=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,me.__webglTexture),ee(he,S,ve),o&&S.mipmaps&&S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)pe(V.__webglFramebuffer[q],C,S,r.COLOR_ATTACHMENT0,he,q);else pe(V.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,he,0);w(S,ve)&&R(he),t.unbindTexture()}C.depthBuffer&&Ce(C)}function Ne(C){const S=y(C)||o,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let me=0,te=V.length;me<te;me++){const se=V[me];if(w(se,S)){const ve=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,he=n.get(se).__webglTexture;t.bindTexture(ve,he),R(ve),t.unbindTexture()}}}function de(C){if(o&&C.samples>0&&Ae(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,me=C.height;let te=r.COLOR_BUFFER_BIT;const se=[],ve=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=n.get(C),q=C.isWebGLMultipleRenderTargets===!0;if(q)for(let we=0;we<S.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let we=0;we<S.length;we++){se.push(r.COLOR_ATTACHMENT0+we),C.depthBuffer&&se.push(ve);const Me=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Me===!1&&(C.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),q&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[we]),Me===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ve])),q){const ye=n.get(S[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,V,me,0,0,V,me,te,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let we=0;we<S.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,he.__webglColorRenderbuffer[we]);const Me=n.get(S[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Se(C){return Math.min(u,C.samples)}function Ae(C){const S=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(C){const S=a.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function Ue(C,S){const V=C.colorSpace,me=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===fo||V!==On&&V!==Mi&&(V===ot||V===ea?o===!1?e.has("EXT_sRGB")===!0&&me===Tn?(C.format=fo,C.minFilter=Rt,C.generateMipmaps=!1):S=Ff.sRGBToLinear(S):(me!==Tn||te!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=b,this.setTexture3D=U,this.setTextureCube=j,this.rebindTextures=Ee,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ae}const f_=0,yt=1;function u_(r,e,t){const n=t.isWebGL2;function i(s,a=Mi){let o;const c=a===ot||a===ea?yt:f_;if(s===ai)return r.UNSIGNED_BYTE;if(s===Cf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Af)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jh)return r.BYTE;if(s===Yh)return r.SHORT;if(s===Go)return r.UNSIGNED_SHORT;if(s===Tf)return r.INT;if(s===ni)return r.UNSIGNED_INT;if(s===ii)return r.FLOAT;if(s===Vr)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qh)return r.ALPHA;if(s===Tn)return r.RGBA;if(s===Kh)return r.LUMINANCE;if(s===Jh)return r.LUMINANCE_ALPHA;if(s===yi)return r.DEPTH_COMPONENT;if(s===cr)return r.DEPTH_STENCIL;if(s===fo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$h)return r.RED;if(s===Rf)return r.RED_INTEGER;if(s===Zh)return r.RG;if(s===wf)return r.RG_INTEGER;if(s===Pf)return r.RGBA_INTEGER;if(s===_a||s===va||s===xa||s===ya)if(c===yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===_a)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===_a)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===va)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ya)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yc||s===Sc||s===Mc||s===bc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===yc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ec||s===Tc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ec)return c===yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Tc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cc||s===Ac||s===Rc||s===wc||s===Pc||s===Uc||s===Lc||s===Dc||s===Ic||s===Fc||s===Oc||s===kc||s===Nc||s===Bc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Cc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ac)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ic)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Oc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bc)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sa||s===Gc||s===zc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Sa)return c===yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ed||s===Vc||s===Hc||s===Wc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Sa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Vc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xi?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class h_ extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rs extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class p_ extends Vt{constructor(e,t,n,i,s,a,o,c,l,f){if(f=f!==void 0?f:yi,f!==yi&&f!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===yi&&(n=ni),n===void 0&&f===cr&&(n=xi),super(null,i,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class m_ extends ur{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,h=null,d=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const T=[],v=[],y=new un;y.layers.enable(1),y.viewport=new _t;const E=new un;E.layers.enable(2),E.viewport=new _t;const w=[y,E],R=new h_;R.layers.enable(1),R.layers.enable(2);let B=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let U=T[b];return U===void 0&&(U=new Xa,T[b]=U),U.getTargetRaySpace()},this.getControllerGrip=function(b){let U=T[b];return U===void 0&&(U=new Xa,T[b]=U),U.getGripSpace()},this.getHand=function(b){let U=T[b];return U===void 0&&(U=new Xa,T[b]=U),U.getHandSpace()};function A(b){const U=v.indexOf(b.inputSource);if(U===-1)return;const j=T[U];j!==void 0&&(j.update(b.inputSource,b.frame,l||a),j.dispatchEvent({type:b.type,data:b.inputSource}))}function $(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",N);for(let b=0;b<T.length;b++){const U=v[b];U!==null&&(v[b]=null,T[b].disconnect(U))}B=null,M=null,e.setRenderTarget(p),d=null,h=null,u=null,i=null,m=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){s=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(b){l=b},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(b){if(i=b,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",$),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:d}),m=new Ti(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let U=null,j=null,X=null;_.depth&&(X=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=_.stencil?cr:yi,j=_.stencil?xi:ni);const Y={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(Y),i.updateRenderState({layers:[h]}),m=new Ti(h.textureWidth,h.textureHeight,{format:Tn,type:ai,depthTexture:new p_(h.textureWidth,h.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const re=e.properties.get(m);re.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(b){for(let U=0;U<b.removed.length;U++){const j=b.removed[U],X=v.indexOf(j);X>=0&&(v[X]=null,T[X].disconnect(j))}for(let U=0;U<b.added.length;U++){const j=b.added[U];let X=v.indexOf(j);if(X===-1){for(let re=0;re<T.length;re++)if(re>=v.length){v.push(j),X=re;break}else if(v[re]===null){v[re]=j,X=re;break}if(X===-1)break}const Y=T[X];Y&&Y.connect(j)}}const x=new ne,P=new ne;function L(b,U,j){x.setFromMatrixPosition(U.matrixWorld),P.setFromMatrixPosition(j.matrixWorld);const X=x.distanceTo(P),Y=U.projectionMatrix.elements,re=j.projectionMatrix.elements,ee=Y[14]/(Y[10]-1),ie=Y[14]/(Y[10]+1),_e=(Y[9]+1)/Y[5],Ie=(Y[9]-1)/Y[5],pe=(Y[8]-1)/Y[0],O=(re[8]+1)/re[0],Ge=ee*pe,Ce=ee*O,Ee=X/(-pe+O),Re=Ee*-pe;U.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(Re),b.translateZ(Ee),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Ne=ee+Ee,de=ie+Ee,Se=Ge-Re,Ae=Ce+(X-Re),ae=_e*ie/de*Ne,Ue=Ie*ie/de*Ne;b.projectionMatrix.makePerspective(Se,Ae,ae,Ue,Ne,de),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function F(b,U){U===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(U.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(i===null)return;R.near=E.near=y.near=b.near,R.far=E.far=y.far=b.far,(B!==R.near||M!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,M=R.far);const U=b.parent,j=R.cameras;F(R,U);for(let X=0;X<j.length;X++)F(j[X],U);j.length===2?L(R,y,E):R.projectionMatrix.copy(y.projectionMatrix),I(b,R,U)};function I(b,U,j){j===null?b.matrix.copy(U.matrixWorld):(b.matrix.copy(j.matrixWorld),b.matrix.invert(),b.matrix.multiply(U.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(U.projectionMatrix),b.projectionMatrixInverse.copy(U.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=uo*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(b){c=b,h!==null&&(h.fixedFoveation=b),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=b)};let W=null;function G(b,U){if(f=U.getViewerPose(l||a),g=U,f!==null){const j=f.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let X=!1;j.length!==R.cameras.length&&(R.cameras.length=0,X=!0);for(let Y=0;Y<j.length;Y++){const re=j[Y];let ee=null;if(d!==null)ee=d.getViewport(re);else{const _e=u.getViewSubImage(h,re);ee=_e.viewport,Y===0&&(e.setRenderTargetTextures(m,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(m))}let ie=w[Y];ie===void 0&&(ie=new un,ie.layers.enable(Y),ie.viewport=new _t,w[Y]=ie),ie.matrix.fromArray(re.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(re.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ee.x,ee.y,ee.width,ee.height),Y===0&&(R.matrix.copy(ie.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),X===!0&&R.cameras.push(ie)}}for(let j=0;j<T.length;j++){const X=v[j],Y=T[j];X!==null&&Y!==void 0&&Y.update(X,U,l||a)}W&&W(b,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}const k=new Yf;k.setAnimationLoop(G),this.setAnimationLoop=function(b){W=b},this.dispose=function(){}}}function g_(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,T,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),f(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,T,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=e.get(m).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function f(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function __(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,v){const y=v.program;n.uniformBlockBinding(T,y)}function l(T,v){let y=i[T.id];y===void 0&&(g(T),y=f(T),i[T.id]=y,T.addEventListener("dispose",p));const E=v.program;n.updateUBOMapping(T,E);const w=e.render.frame;s[T.id]!==w&&(h(T),s[T.id]=w)}function f(T){const v=u();T.__bindingPointIndex=v;const y=r.createBuffer(),E=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const v=i[T.id],y=T.uniforms,E=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,R=y.length;w<R;w++){const B=y[w];if(d(B,w,E)===!0){const M=B.__offset,A=Array.isArray(B.value)?B.value:[B.value];let $=0;for(let N=0;N<A.length;N++){const x=A[N],P=_(x);typeof x=="number"?(B.__data[0]=x,r.bufferSubData(r.UNIFORM_BUFFER,M+$,B.__data)):x.isMatrix3?(B.__data[0]=x.elements[0],B.__data[1]=x.elements[1],B.__data[2]=x.elements[2],B.__data[3]=x.elements[0],B.__data[4]=x.elements[3],B.__data[5]=x.elements[4],B.__data[6]=x.elements[5],B.__data[7]=x.elements[0],B.__data[8]=x.elements[6],B.__data[9]=x.elements[7],B.__data[10]=x.elements[8],B.__data[11]=x.elements[0]):(x.toArray(B.__data,$),$+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,M,B.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(T,v,y){const E=T.value;if(y[v]===void 0){if(typeof E=="number")y[v]=E;else{const w=Array.isArray(E)?E:[E],R=[];for(let B=0;B<w.length;B++)R.push(w[B].clone());y[v]=R}return!0}else if(typeof E=="number"){if(y[v]!==E)return y[v]=E,!0}else{const w=Array.isArray(y[v])?y[v]:[y[v]],R=Array.isArray(E)?E:[E];for(let B=0;B<w.length;B++){const M=w[B];if(M.equals(R[B])===!1)return M.copy(R[B]),!0}}return!1}function g(T){const v=T.uniforms;let y=0;const E=16;let w=0;for(let R=0,B=v.length;R<B;R++){const M=v[R],A={boundary:0,storage:0},$=Array.isArray(M.value)?M.value:[M.value];for(let N=0,x=$.length;N<x;N++){const P=$[N],L=_(P);A.boundary+=L.boundary,A.storage+=L.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,R>0){w=y%E;const N=E-w;w!==0&&N-A.boundary<0&&(y+=E-w,M.__offset=y)}y+=A.storage}return w=y%E,w>0&&(y+=E-w),T.__size=y,T.__cache={},this}function _(T){const v={boundary:0,storage:0};return typeof T=="number"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function p(T){const v=T.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:c,update:l,dispose:m}}class tu{constructor(e={}){const{canvas:t=dd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ot,this._useLegacyLights=!1,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let y=!1,E=0,w=0,R=null,B=-1,M=null;const A=new _t,$=new _t;let N=null;const x=new tt(0);let P=0,L=t.width,F=t.height,I=1,W=null,G=null;const k=new _t(0,0,L,F),b=new _t(0,0,L,F);let U=!1;const j=new zo;let X=!1,Y=!1,re=null;const ee=new mt,ie=new nt,_e=new ne,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return R===null?I:1}let O=n;function Ge(D,Z){for(let ce=0;ce<D.length;ce++){const Q=D[ce],oe=t.getContext(Q,Z);if(oe!==null)return oe}return null}try{const D={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){const Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),O=Ge(Z,D),O===null)throw Ge(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ce,Ee,Re,Ne,de,Se,Ae,ae,Ue,C,S,V,me,te,se,ve,he,q,we,Me,ye,fe,be,ke;function qe(){Ce=new wg(O),Ee=new bg(O,Ce,e),Ce.init(Ee),fe=new u_(O,Ce,Ee),Re=new c_(O,Ce,Ee),Ne=new Lg(O),de=new J0,Se=new l_(O,Ce,Re,de,Ee,fe,Ne),Ae=new Tg(v),ae=new Rg(v),Ue=new Vd(O,Ee),be=new Sg(O,Ce,Ue,Ee),C=new Pg(O,Ue,Ne,be),S=new Og(O,C,Ue,Ne),we=new Fg(O,Ee,Se),ve=new Eg(de),V=new K0(v,Ae,ae,Ce,Ee,be,ve),me=new g_(v,de),te=new Z0,se=new r_(Ce,Ee),q=new yg(v,Ae,ae,Re,S,h,c),he=new o_(v,S,Ee),ke=new __(O,Ne,Ee,Re),Me=new Mg(O,Ce,Ne,Ee),ye=new Ug(O,Ce,Ne,Ee),Ne.programs=V.programs,v.capabilities=Ee,v.extensions=Ce,v.properties=de,v.renderLists=te,v.shadowMap=he,v.state=Re,v.info=Ne}qe();const z=new m_(v,O);this.xr=z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=Ce.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ce.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(D){D!==void 0&&(I=D,this.setSize(L,F,!1))},this.getSize=function(D){return D.set(L,F)},this.setSize=function(D,Z,ce=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=D,F=Z,t.width=Math.floor(D*I),t.height=Math.floor(Z*I),ce===!0&&(t.style.width=D+"px",t.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(L*I,F*I).floor()},this.setDrawingBufferSize=function(D,Z,ce){L=D,F=Z,I=ce,t.width=Math.floor(D*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(k)},this.setViewport=function(D,Z,ce,Q){D.isVector4?k.set(D.x,D.y,D.z,D.w):k.set(D,Z,ce,Q),Re.viewport(A.copy(k).multiplyScalar(I).floor())},this.getScissor=function(D){return D.copy(b)},this.setScissor=function(D,Z,ce,Q){D.isVector4?b.set(D.x,D.y,D.z,D.w):b.set(D,Z,ce,Q),Re.scissor($.copy(b).multiplyScalar(I).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(D){Re.setScissorTest(U=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){G=D},this.getClearColor=function(D){return D.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(D=!0,Z=!0,ce=!0){let Q=0;if(D){let oe=!1;if(R!==null){const Le=R.texture.format;oe=Le===Pf||Le===wf||Le===Rf}if(oe){const Le=R.texture.type,Be=Le===ai||Le===ni||Le===Go||Le===xi||Le===Cf||Le===Af,Ve=q.getClearColor(),He=q.getClearAlpha(),Ke=Ve.r,xe=Ve.g,je=Ve.b;Be?(d[0]=Ke,d[1]=xe,d[2]=je,d[3]=He,O.clearBufferuiv(O.COLOR,0,d)):(g[0]=Ke,g[1]=xe,g[2]=je,g[3]=He,O.clearBufferiv(O.COLOR,0,g))}else Q|=O.COLOR_BUFFER_BIT}Z&&(Q|=O.DEPTH_BUFFER_BIT),ce&&(Q|=O.STENCIL_BUFFER_BIT),O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),te.dispose(),se.dispose(),de.dispose(),Ae.dispose(),ae.dispose(),S.dispose(),be.dispose(),ke.dispose(),V.dispose(),z.dispose(),z.removeEventListener("sessionstart",We),z.removeEventListener("sessionend",ct),re&&(re.dispose(),re=null),it.stop()};function le(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const D=Ne.autoReset,Z=he.enabled,ce=he.autoUpdate,Q=he.needsUpdate,oe=he.type;qe(),Ne.autoReset=D,he.enabled=Z,he.autoUpdate=ce,he.needsUpdate=Q,he.type=oe}function Te(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ge(D){const Z=D.target;Z.removeEventListener("dispose",ge),De(Z)}function De(D){Ye(D),de.remove(D)}function Ye(D){const Z=de.get(D).programs;Z!==void 0&&(Z.forEach(function(ce){V.releaseProgram(ce)}),D.isShaderMaterial&&V.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,ce,Q,oe,Le){Z===null&&(Z=Ie);const Be=oe.isMesh&&oe.matrixWorld.determinant()<0,Ve=wt(D,Z,ce,Q,oe);Re.setMaterial(Q,Be);let He=ce.index,Ke=1;if(Q.wireframe===!0){if(He=C.getWireframeAttribute(ce),He===void 0)return;Ke=2}const xe=ce.drawRange,je=ce.attributes.position;let lt=xe.start*Ke,rt=(xe.start+xe.count)*Ke;Le!==null&&(lt=Math.max(lt,Le.start*Ke),rt=Math.min(rt,(Le.start+Le.count)*Ke)),He!==null?(lt=Math.max(lt,0),rt=Math.min(rt,He.count)):je!=null&&(lt=Math.max(lt,0),rt=Math.min(rt,je.count));const Pt=rt-lt;if(Pt<0||Pt===1/0)return;be.setup(oe,Q,Ve,ce,He);let on,ft=Me;if(He!==null&&(on=Ue.get(He),ft=ye,ft.setIndex(on)),oe.isMesh)Q.wireframe===!0?(Re.setLineWidth(Q.wireframeLinewidth*pe()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(oe.isLine){let Je=Q.linewidth;Je===void 0&&(Je=1),Re.setLineWidth(Je*pe()),oe.isLineSegments?ft.setMode(O.LINES):oe.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else oe.isPoints?ft.setMode(O.POINTS):oe.isSprite&&ft.setMode(O.TRIANGLES);if(oe.isInstancedMesh)ft.renderInstances(lt,Pt,oe.count);else if(ce.isInstancedBufferGeometry){const Je=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,qn=Math.min(ce.instanceCount,Je);ft.renderInstances(lt,Pt,qn)}else ft.render(lt,Pt)},this.compile=function(D,Z){function ce(Q,oe,Le){Q.transparent===!0&&Q.side===bn&&Q.forceSinglePass===!1?(Q.side=zt,Q.needsUpdate=!0,sn(Q,oe,Le),Q.side=Yn,Q.needsUpdate=!0,sn(Q,oe,Le),Q.side=bn):sn(Q,oe,Le)}p=se.get(D),p.init(),T.push(p),D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights(v._useLegacyLights),D.traverse(function(Q){const oe=Q.material;if(oe)if(Array.isArray(oe))for(let Le=0;Le<oe.length;Le++){const Be=oe[Le];ce(Be,D,Q)}else ce(oe,D,Q)}),T.pop(),p=null};let ze=null;function Xe(D){ze&&ze(D)}function We(){it.stop()}function ct(){it.start()}const it=new Yf;it.setAnimationLoop(Xe),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(D){ze=D,z.setAnimationLoop(D),D===null?it.stop():it.start()},z.addEventListener("sessionstart",We),z.addEventListener("sessionend",ct),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(Z),Z=z.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,Z,R),p=se.get(D,T.length),p.init(),T.push(p),ee.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j.setFromProjectionMatrix(ee),Y=this.localClippingEnabled,X=ve.init(this.clippingPlanes,Y),_=te.get(D,m.length),_.init(),m.push(_),xt(D,Z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,G),this.info.render.frame++,X===!0&&ve.beginShadows();const ce=p.state.shadowsArray;if(he.render(ce,D,Z),X===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(_,D),p.setupLights(v._useLegacyLights),Z.isArrayCamera){const Q=Z.cameras;for(let oe=0,Le=Q.length;oe<Le;oe++){const Be=Q[oe];Wt(_,D,Be,Be.viewport)}}else Wt(_,D,Z);R!==null&&(Se.updateMultisampleRenderTarget(R),Se.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(v,D,Z),be.resetDefaultState(),B=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function xt(D,Z,ce,Q){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||j.intersectsSprite(D)){Q&&_e.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ee);const Be=S.update(D),Ve=D.material;Ve.visible&&_.push(D,Be,Ve,ce,_e.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||j.intersectsObject(D))){const Be=S.update(D),Ve=D.material;if(Q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),_e.copy(D.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),_e.copy(Be.boundingSphere.center)),_e.applyMatrix4(D.matrixWorld).applyMatrix4(ee)),Array.isArray(Ve)){const He=Be.groups;for(let Ke=0,xe=He.length;Ke<xe;Ke++){const je=He[Ke],lt=Ve[je.materialIndex];lt&&lt.visible&&_.push(D,Be,lt,ce,_e.z,je)}}else Ve.visible&&_.push(D,Be,Ve,ce,_e.z,null)}}const Le=D.children;for(let Be=0,Ve=Le.length;Be<Ve;Be++)xt(Le[Be],Z,ce,Q)}function Wt(D,Z,ce,Q){const oe=D.opaque,Le=D.transmissive,Be=D.transparent;p.setupLightsView(ce),X===!0&&ve.setGlobalState(v.clippingPlanes,ce),Le.length>0&&wn(oe,Le,Z,ce),Q&&Re.viewport(A.copy(Q)),oe.length>0&&Xt(oe,Z,ce),Le.length>0&&Xt(Le,Z,ce),Be.length>0&&Xt(Be,Z,ce),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function wn(D,Z,ce,Q){const oe=Ee.isWebGL2;re===null&&(re=new Ti(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Vr:ai,minFilter:zr,samples:oe?4:0})),v.getDrawingBufferSize(ie),oe?re.setSize(ie.x,ie.y):re.setSize(ho(ie.x),ho(ie.y));const Le=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(x),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Be=v.toneMapping;v.toneMapping=si,Xt(D,ce,Q),Se.updateMultisampleRenderTarget(re),Se.updateRenderTargetMipmap(re);let Ve=!1;for(let He=0,Ke=Z.length;He<Ke;He++){const xe=Z[He],je=xe.object,lt=xe.geometry,rt=xe.material,Pt=xe.group;if(rt.side===bn&&je.layers.test(Q.layers)){const on=rt.side;rt.side=zt,rt.needsUpdate=!0,pn(je,ce,Q,lt,rt,Pt),rt.side=on,rt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Se.updateMultisampleRenderTarget(re),Se.updateRenderTargetMipmap(re)),v.setRenderTarget(Le),v.setClearColor(x,P),v.toneMapping=Be}function Xt(D,Z,ce){const Q=Z.isScene===!0?Z.overrideMaterial:null;for(let oe=0,Le=D.length;oe<Le;oe++){const Be=D[oe],Ve=Be.object,He=Be.geometry,Ke=Q===null?Be.material:Q,xe=Be.group;Ve.layers.test(ce.layers)&&pn(Ve,Z,ce,He,Ke,xe)}}function pn(D,Z,ce,Q,oe,Le){D.onBeforeRender(v,Z,ce,Q,oe,Le),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),oe.onBeforeRender(v,Z,ce,Q,D,Le),oe.transparent===!0&&oe.side===bn&&oe.forceSinglePass===!1?(oe.side=zt,oe.needsUpdate=!0,v.renderBufferDirect(ce,Z,Q,oe,D,Le),oe.side=Yn,oe.needsUpdate=!0,v.renderBufferDirect(ce,Z,Q,oe,D,Le),oe.side=bn):v.renderBufferDirect(ce,Z,Q,oe,D,Le),D.onAfterRender(v,Z,ce,Q,oe,Le)}function sn(D,Z,ce){Z.isScene!==!0&&(Z=Ie);const Q=de.get(D),oe=p.state.lights,Le=p.state.shadowsArray,Be=oe.state.version,Ve=V.getParameters(D,oe.state,Le,Z,ce),He=V.getProgramCacheKey(Ve);let Ke=Q.programs;Q.environment=D.isMeshStandardMaterial?Z.environment:null,Q.fog=Z.fog,Q.envMap=(D.isMeshStandardMaterial?ae:Ae).get(D.envMap||Q.environment),Ke===void 0&&(D.addEventListener("dispose",ge),Ke=new Map,Q.programs=Ke);let xe=Ke.get(He);if(xe!==void 0){if(Q.currentProgram===xe&&Q.lightsStateVersion===Be)return an(D,Ve),xe}else Ve.uniforms=V.getUniforms(D),D.onBuild(ce,Ve,v),D.onBeforeCompile(Ve,v),xe=V.acquireProgram(Ve,He),Ke.set(He,xe),Q.uniforms=Ve.uniforms;const je=Q.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(je.clippingPlanes=ve.uniform),an(D,Ve),Q.needsLights=es(D),Q.lightsStateVersion=Be,Q.needsLights&&(je.ambientLightColor.value=oe.state.ambient,je.lightProbe.value=oe.state.probe,je.directionalLights.value=oe.state.directional,je.directionalLightShadows.value=oe.state.directionalShadow,je.spotLights.value=oe.state.spot,je.spotLightShadows.value=oe.state.spotShadow,je.rectAreaLights.value=oe.state.rectArea,je.ltc_1.value=oe.state.rectAreaLTC1,je.ltc_2.value=oe.state.rectAreaLTC2,je.pointLights.value=oe.state.point,je.pointLightShadows.value=oe.state.pointShadow,je.hemisphereLights.value=oe.state.hemi,je.directionalShadowMap.value=oe.state.directionalShadowMap,je.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,je.spotShadowMap.value=oe.state.spotShadowMap,je.spotLightMatrix.value=oe.state.spotLightMatrix,je.spotLightMap.value=oe.state.spotLightMap,je.pointShadowMap.value=oe.state.pointShadowMap,je.pointShadowMatrix.value=oe.state.pointShadowMatrix);const lt=xe.getUniforms(),rt=Fs.seqWithValue(lt.seq,je);return Q.currentProgram=xe,Q.uniformsList=rt,xe}function an(D,Z){const ce=de.get(D);ce.outputColorSpace=Z.outputColorSpace,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function wt(D,Z,ce,Q,oe){Z.isScene!==!0&&(Z=Ie),Se.resetTextureUnits();const Le=Z.fog,Be=Q.isMeshStandardMaterial?Z.environment:null,Ve=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:On,He=(Q.isMeshStandardMaterial?ae:Ae).get(Q.envMap||Be),Ke=Q.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,xe=!!ce.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),je=!!ce.morphAttributes.position,lt=!!ce.morphAttributes.normal,rt=!!ce.morphAttributes.color;let Pt=si;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const on=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ft=on!==void 0?on.length:0,Je=de.get(Q),qn=p.state.lights;if(X===!0&&(Y===!0||D!==M)){const Ut=D===M&&Q.id===B;ve.setState(Q,D,Ut)}let ut=!1;Q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qn.state.version||Je.outputColorSpace!==Ve||oe.isInstancedMesh&&Je.instancing===!1||!oe.isInstancedMesh&&Je.instancing===!0||oe.isSkinnedMesh&&Je.skinning===!1||!oe.isSkinnedMesh&&Je.skinning===!0||oe.isInstancedMesh&&Je.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Je.instancingColor===!1&&oe.instanceColor!==null||Je.envMap!==He||Q.fog===!0&&Je.fog!==Le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ve.numPlanes||Je.numIntersection!==ve.numIntersection)||Je.vertexAlphas!==Ke||Je.vertexTangents!==xe||Je.morphTargets!==je||Je.morphNormals!==lt||Je.morphColors!==rt||Je.toneMapping!==Pt||Ee.isWebGL2===!0&&Je.morphTargetsCount!==ft)&&(ut=!0):(ut=!0,Je.__version=Q.version);let cn=Je.currentProgram;ut===!0&&(cn=sn(Q,Z,oe));let gr=!1,Nn=!1,Ui=!1;const pt=cn.getUniforms(),mn=Je.uniforms;if(Re.useProgram(cn.program)&&(gr=!0,Nn=!0,Ui=!0),Q.id!==B&&(B=Q.id,Nn=!0),gr||M!==D){pt.setValue(O,"projectionMatrix",D.projectionMatrix),pt.setValue(O,"viewMatrix",D.matrixWorldInverse);const Ut=pt.map.cameraPosition;Ut!==void 0&&Ut.setValue(O,_e.setFromMatrixPosition(D.matrixWorld)),Ee.logarithmicDepthBuffer&&pt.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&pt.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),M!==D&&(M=D,Nn=!0,Ui=!0)}if(oe.isSkinnedMesh){pt.setOptional(O,oe,"bindMatrix"),pt.setOptional(O,oe,"bindMatrixInverse");const Ut=oe.skeleton;Ut&&(Ee.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),pt.setValue(O,"boneTexture",Ut.boneTexture,Se),pt.setValue(O,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pn=ce.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0&&Ee.isWebGL2===!0)&&we.update(oe,ce,cn),(Nn||Je.receiveShadow!==oe.receiveShadow)&&(Je.receiveShadow=oe.receiveShadow,pt.setValue(O,"receiveShadow",oe.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(mn.envMap.value=He,mn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Nn&&(pt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&kn(mn,Ui),Le&&Q.fog===!0&&me.refreshFogUniforms(mn,Le),me.refreshMaterialUniforms(mn,Q,I,F,re),Fs.upload(O,Je.uniformsList,mn,Se)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Fs.upload(O,Je.uniformsList,mn,Se),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&pt.setValue(O,"center",oe.center),pt.setValue(O,"modelViewMatrix",oe.modelViewMatrix),pt.setValue(O,"normalMatrix",oe.normalMatrix),pt.setValue(O,"modelMatrix",oe.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ut=Q.uniformsGroups;for(let ci=0,_r=Ut.length;ci<_r;ci++)if(Ee.isWebGL2){const Zt=Ut[ci];ke.update(Zt,cn),ke.bind(Zt,cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cn}function kn(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function es(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,Z,ce){de.get(D.texture).__webglTexture=Z,de.get(D.depthTexture).__webglTexture=ce;const Q=de.get(D);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=ce===void 0,Q.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Z){const ce=de.get(D);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(D,Z=0,ce=0){R=D,E=Z,w=ce;let Q=!0,oe=null,Le=!1,Be=!1;if(D){const He=de.get(D);He.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(O.FRAMEBUFFER,null),Q=!1):He.__webglFramebuffer===void 0?Se.setupRenderTarget(D):He.__hasExternalTextures&&Se.rebindTextures(D,de.get(D.texture).__webglTexture,de.get(D.depthTexture).__webglTexture);const Ke=D.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Be=!0);const xe=de.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(xe[Z])?oe=xe[Z][ce]:oe=xe[Z],Le=!0):Ee.isWebGL2&&D.samples>0&&Se.useMultisampledRTT(D)===!1?oe=de.get(D).__webglMultisampledFramebuffer:Array.isArray(xe)?oe=xe[ce]:oe=xe,A.copy(D.viewport),$.copy(D.scissor),N=D.scissorTest}else A.copy(k).multiplyScalar(I).floor(),$.copy(b).multiplyScalar(I).floor(),N=U;if(Re.bindFramebuffer(O.FRAMEBUFFER,oe)&&Ee.drawBuffers&&Q&&Re.drawBuffers(D,oe),Re.viewport(A),Re.scissor($),Re.setScissorTest(N),Le){const He=de.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Z,He.__webglTexture,ce)}else if(Be){const He=de.get(D.texture),Ke=Z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,ce||0,Ke)}B=-1},this.readRenderTargetPixels=function(D,Z,ce,Q,oe,Le,Be){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=de.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){Re.bindFramebuffer(O.FRAMEBUFFER,Ve);try{const He=D.texture,Ke=He.format,xe=He.type;if(Ke!==Tn&&fe.convert(Ke)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=xe===Vr&&(Ce.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(xe!==ai&&fe.convert(xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(xe===ii&&(Ee.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-Q&&ce>=0&&ce<=D.height-oe&&O.readPixels(Z,ce,Q,oe,fe.convert(Ke),fe.convert(xe),Le)}finally{const He=R!==null?de.get(R).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(D,Z,ce=0){const Q=Math.pow(2,-ce),oe=Math.floor(Z.image.width*Q),Le=Math.floor(Z.image.height*Q);Se.setTexture2D(Z,0),O.copyTexSubImage2D(O.TEXTURE_2D,ce,0,0,D.x,D.y,oe,Le),Re.unbindTexture()},this.copyTextureToTexture=function(D,Z,ce,Q=0){const oe=Z.image.width,Le=Z.image.height,Be=fe.convert(ce.format),Ve=fe.convert(ce.type);Se.setTexture2D(ce,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,ce.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,ce.unpackAlignment),Z.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Q,D.x,D.y,oe,Le,Be,Ve,Z.image.data):Z.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Q,D.x,D.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Be,Z.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Q,D.x,D.y,Be,Ve,Z.image),Q===0&&ce.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,ce,Q,oe=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=D.max.x-D.min.x+1,Be=D.max.y-D.min.y+1,Ve=D.max.z-D.min.z+1,He=fe.convert(Q.format),Ke=fe.convert(Q.type);let xe;if(Q.isData3DTexture)Se.setTexture3D(Q,0),xe=O.TEXTURE_3D;else if(Q.isDataArrayTexture)Se.setTexture2DArray(Q,0),xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment);const je=O.getParameter(O.UNPACK_ROW_LENGTH),lt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),rt=O.getParameter(O.UNPACK_SKIP_PIXELS),Pt=O.getParameter(O.UNPACK_SKIP_ROWS),on=O.getParameter(O.UNPACK_SKIP_IMAGES),ft=ce.isCompressedTexture?ce.mipmaps[0]:ce.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,D.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,D.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,D.min.z),ce.isDataTexture||ce.isData3DTexture?O.texSubImage3D(xe,oe,Z.x,Z.y,Z.z,Le,Be,Ve,He,Ke,ft.data):ce.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(xe,oe,Z.x,Z.y,Z.z,Le,Be,Ve,He,ft.data)):O.texSubImage3D(xe,oe,Z.x,Z.y,Z.z,Le,Be,Ve,He,Ke,ft),O.pixelStorei(O.UNPACK_ROW_LENGTH,je),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,on),oe===0&&Q.generateMipmaps&&O.generateMipmap(xe),Re.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Se.setTextureCube(D,0):D.isData3DTexture?Se.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Se.setTexture2DArray(D,0):Se.setTexture2D(D,0),Re.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,Re.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?Si:Uf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Si?ot:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class v_ extends tu{}v_.prototype.isWebGL1Renderer=!0;class x_ extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class y_ extends An{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class nu extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pl=new ne,Ul=new ne,Ll=new mt,ja=new Nf,ws=new $r;class S_ extends It{constructor(e=new Rn,t=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Pl.fromBufferAttribute(t,i-1),Ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pl.distanceTo(Ul);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=s,e.ray.intersectsSphere(ws)===!1)return;Ll.copy(i).invert(),ja.copy(e.ray).applyMatrix4(Ll);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new ne,f=new ne,u=new ne,h=new ne,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let v=m,y=T-1;v<y;v+=d){const E=g.getX(v),w=g.getX(v+1);if(l.fromBufferAttribute(p,E),f.fromBufferAttribute(p,w),ja.distanceSqToSegment(l,f,h,u)>c)continue;h.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(h);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),T=Math.min(p.count,a.start+a.count);for(let v=m,y=T-1;v<y;v+=d){if(l.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),ja.distanceSqToSegment(l,f,h,u)>c)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Dl=new ne,Il=new ne;class M_ extends S_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Dl.fromBufferAttribute(t,i),Il.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dl.distanceTo(Il);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class b_ extends Vt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Rt,this.magFilter=s!==void 0?s:Rt,this.generateMipmaps=!1;const f=this;function u(){f.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class E_ extends dr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tt(16777215),this.specular=new tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iu extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ya=new mt,Fl=new ne,Ol=new ne;class T_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ol),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class C_ extends T_{constructor(){super(new qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A_ extends iu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new C_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class R_ extends iu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class w_ extends Rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class kl extends M_{constructor(e=10,t=10,n=4473924,i=8947848){n=new tt(n),i=new tt(i);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let h=0,d=0,g=-o;h<=t;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=h===s?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const f=new Rn;f.setAttribute("position",new dn(c,3)),f.setAttribute("color",new dn(l,3));const u=new nu({vertexColors:!0,toneMapped:!1});super(f,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);function P_(){var r=Object.create(null);function e(i,s){var a=i.id,o=i.name,c=i.dependencies;c===void 0&&(c=[]);var l=i.init;l===void 0&&(l=function(){});var f=i.getTransferables;if(f===void 0&&(f=null),!r[a])try{c=c.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=r[h.id].value),h}),l=n("<"+o+">.init",l),f&&(f=n("<"+o+">.getTransferables",f));var u=null;typeof l=="function"?u=l.apply(void 0,c):console.error("worker module init function failed to rehydrate"),r[a]={id:a,value:u,getTransferables:f},s(u)}catch(h){h&&h.noLog||console.error(h),s(h)}}function t(i,s){var a,o=i.id,c=i.args;(!r[o]||typeof r[o].value!="function")&&s(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var l=(a=r[o]).value.apply(a,c);l&&typeof l.then=="function"?l.then(f,function(u){return s(u instanceof Error?u:new Error(""+u))}):f(l)}catch(u){s(u)}function f(u){try{var h=r[o].getTransferables&&r[o].getTransferables(u);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),s(u,h)}catch(d){console.error(d),s(d)}}}function n(i,s){var a=void 0;self.troikaDefine=function(c){return a=c};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+s+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(c){console.error(c)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(i){var s=i.data,a=s.messageId,o=s.action,c=s.data;try{o==="registerModule"&&e(c,function(l){l instanceof Error?postMessage({messageId:a,success:!1,error:l.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof l=="function"}})}),o==="callModule"&&t(c,function(l,f){l instanceof Error?postMessage({messageId:a,success:!1,error:l.message}):postMessage({messageId:a,success:!0,result:l},f||void 0)})}catch(l){postMessage({messageId:a,success:!1,error:l.stack})}})}function U_(r){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=r.dependencies,n=r.init;t=Array.isArray(t)?t.map(function(s){return s&&s._getInitResult?s._getInitResult():s}):[];var i=Promise.all(t).then(function(s){return n.apply(null,s)});return e._getInitResult=function(){return i},i},e}var ru=function(){var r=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),r=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return ru=function(){return r},r},L_=0,D_=0,qa=!1,kr=Object.create(null),Nr=Object.create(null),mo=Object.create(null);function mr(r){if((!r||typeof r.init!="function")&&!qa)throw new Error("requires `options.init` function");var e=r.dependencies,t=r.init,n=r.getTransferables,i=r.workerId;if(!ru())return U_(r);i==null&&(i="#default");var s="workerModule"+ ++L_,a=r.name||s,o=null;e=e&&e.map(function(l){return typeof l=="function"&&!l.workerModuleData&&(qa=!0,l=mr({workerId:i,name:"<"+a+"> function dependency: "+l.name,init:`function(){return (
`+Os(l)+`
)}`}),qa=!1),l&&l.workerModuleData&&(l=l.workerModuleData),l});function c(){for(var l=[],f=arguments.length;f--;)l[f]=arguments[f];if(!o){o=Nl(i,"registerModule",c.workerModuleData);var u=function(){o=null,Nr[i].delete(u)};(Nr[i]||(Nr[i]=new Set)).add(u)}return o.then(function(h){var d=h.isCallable;if(d)return Nl(i,"callModule",{id:s,args:l});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:a,dependencies:e,init:Os(t),getTransferables:n&&Os(n)},c}function I_(r){Nr[r]&&Nr[r].forEach(function(e){e()}),kr[r]&&(kr[r].terminate(),delete kr[r])}function Os(r){var e=r.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function F_(r){var e=kr[r];if(!e){var t=Os(P_);e=kr[r]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+r.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,s=i.messageId,a=mo[s];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete mo[s],a(i)}}return e}function Nl(r,e,t){return new Promise(function(n,i){var s=++D_;mo[s]=function(a){a.success?n(a.result):i(new Error("Error in worker "+e+" call: "+a.error))},F_(r).postMessage({messageId:s,action:e,data:t})})}function su(){var r=function(e){function t(G,k,b,U,j,X,Y,re){var ee=1-Y;re.x=ee*ee*G+2*ee*Y*b+Y*Y*j,re.y=ee*ee*k+2*ee*Y*U+Y*Y*X}function n(G,k,b,U,j,X,Y,re,ee,ie){var _e=1-ee;ie.x=_e*_e*_e*G+3*_e*_e*ee*b+3*_e*ee*ee*j+ee*ee*ee*Y,ie.y=_e*_e*_e*k+3*_e*_e*ee*U+3*_e*ee*ee*X+ee*ee*ee*re}function i(G,k){for(var b=/([MLQCZ])([^MLQCZ]*)/g,U,j,X,Y,re;U=b.exec(G);){var ee=U[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ie){return parseFloat(ie)});switch(U[1]){case"M":Y=j=ee[0],re=X=ee[1];break;case"L":(ee[0]!==Y||ee[1]!==re)&&k("L",Y,re,Y=ee[0],re=ee[1]);break;case"Q":{k("Q",Y,re,Y=ee[2],re=ee[3],ee[0],ee[1]);break}case"C":{k("C",Y,re,Y=ee[4],re=ee[5],ee[0],ee[1],ee[2],ee[3]);break}case"Z":(Y!==j||re!==X)&&k("L",Y,re,j,X);break}}}function s(G,k,b){b===void 0&&(b=16);var U={x:0,y:0};i(G,function(j,X,Y,re,ee,ie,_e,Ie,pe){switch(j){case"L":k(X,Y,re,ee);break;case"Q":{for(var O=X,Ge=Y,Ce=1;Ce<b;Ce++)t(X,Y,ie,_e,re,ee,Ce/(b-1),U),k(O,Ge,U.x,U.y),O=U.x,Ge=U.y;break}case"C":{for(var Ee=X,Re=Y,Ne=1;Ne<b;Ne++)n(X,Y,ie,_e,Ie,pe,re,ee,Ne/(b-1),U),k(Ee,Re,U.x,U.y),Ee=U.x,Re=U.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",c=new WeakMap,l={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function f(G,k){var b=G.getContext?G.getContext("webgl",l):G,U=c.get(b);if(!U){let Ee=function(ae){var Ue=X[ae];if(!Ue&&(Ue=X[ae]=b.getExtension(ae),!Ue))throw new Error(ae+" not supported");return Ue},Re=function(ae,Ue){var C=b.createShader(Ue);return b.shaderSource(C,ae),b.compileShader(C),C},Ne=function(ae,Ue,C,S){if(!Y[ae]){var V={},me={},te=b.createProgram();b.attachShader(te,Re(Ue,b.VERTEX_SHADER)),b.attachShader(te,Re(C,b.FRAGMENT_SHADER)),b.linkProgram(te),Y[ae]={program:te,transaction:function(ve){b.useProgram(te),ve({setUniform:function(q,we){for(var Me=[],ye=arguments.length-2;ye-- >0;)Me[ye]=arguments[ye+2];var fe=me[we]||(me[we]=b.getUniformLocation(te,we));b["uniform"+q].apply(b,[fe].concat(Me))},setAttribute:function(q,we,Me,ye,fe){var be=V[q];be||(be=V[q]={buf:b.createBuffer(),loc:b.getAttribLocation(te,q),data:null}),b.bindBuffer(b.ARRAY_BUFFER,be.buf),b.vertexAttribPointer(be.loc,we,b.FLOAT,!1,0,0),b.enableVertexAttribArray(be.loc),j?b.vertexAttribDivisor(be.loc,ye):Ee("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(be.loc,ye),fe!==be.data&&(b.bufferData(b.ARRAY_BUFFER,fe,Me),be.data=fe)}})}}}Y[ae].transaction(S)},de=function(ae,Ue){ee++;try{b.activeTexture(b.TEXTURE0+ee);var C=re[ae];C||(C=re[ae]=b.createTexture(),b.bindTexture(b.TEXTURE_2D,C),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST)),b.bindTexture(b.TEXTURE_2D,C),Ue(C,ee)}finally{ee--}},Se=function(ae,Ue,C){var S=b.createFramebuffer();ie.push(S),b.bindFramebuffer(b.FRAMEBUFFER,S),b.activeTexture(b.TEXTURE0+Ue),b.bindTexture(b.TEXTURE_2D,ae),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ae,0);try{C(S)}finally{b.deleteFramebuffer(S),b.bindFramebuffer(b.FRAMEBUFFER,ie[--ie.length-1]||null)}},Ae=function(){X={},Y={},re={},ee=-1,ie.length=0};var _e=Ee,Ie=Re,pe=Ne,O=de,Ge=Se,Ce=Ae,j=typeof WebGL2RenderingContext<"u"&&b instanceof WebGL2RenderingContext,X={},Y={},re={},ee=-1,ie=[];b.canvas.addEventListener("webglcontextlost",function(ae){Ae(),ae.preventDefault()},!1),c.set(b,U={gl:b,isWebGL2:j,getExtension:Ee,withProgram:Ne,withTexture:de,withTextureFramebuffer:Se,handleContextLoss:Ae})}k(U)}function u(G,k,b,U,j,X,Y,re){Y===void 0&&(Y=15),re===void 0&&(re=null),f(G,function(ee){var ie=ee.gl,_e=ee.withProgram,Ie=ee.withTexture;Ie("copy",function(pe,O){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,j,X,0,ie.RGBA,ie.UNSIGNED_BYTE,k),_e("copy",a,o,function(Ge){var Ce=Ge.setUniform,Ee=Ge.setAttribute;Ee("aUV",2,ie.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Ce("1i","image",O),ie.bindFramebuffer(ie.FRAMEBUFFER,re||null),ie.disable(ie.BLEND),ie.colorMask(Y&8,Y&4,Y&2,Y&1),ie.viewport(b,U,j,X),ie.scissor(b,U,j,X),ie.drawArrays(ie.TRIANGLES,0,3)})})})}function h(G,k,b){var U=G.width,j=G.height;f(G,function(X){var Y=X.gl,re=new Uint8Array(U*j*4);Y.readPixels(0,0,U,j,Y.RGBA,Y.UNSIGNED_BYTE,re),G.width=k,G.height=b,u(Y,re,0,0,U,j)})}var d=Object.freeze({__proto__:null,withWebGLContext:f,renderImageData:u,resizeWebGLCanvasWithoutClearing:h});function g(G,k,b,U,j,X){X===void 0&&(X=1);var Y=new Uint8Array(G*k),re=U[2]-U[0],ee=U[3]-U[1],ie=[];s(b,function(Ee,Re,Ne,de){ie.push({x1:Ee,y1:Re,x2:Ne,y2:de,minX:Math.min(Ee,Ne),minY:Math.min(Re,de),maxX:Math.max(Ee,Ne),maxY:Math.max(Re,de)})}),ie.sort(function(Ee,Re){return Ee.maxX-Re.maxX});for(var _e=0;_e<G;_e++)for(var Ie=0;Ie<k;Ie++){var pe=Ge(U[0]+re*(_e+.5)/G,U[1]+ee*(Ie+.5)/k),O=Math.pow(1-Math.abs(pe)/j,X)/2;pe<0&&(O=1-O),O=Math.max(0,Math.min(255,Math.round(O*255))),Y[Ie*G+_e]=O}return Y;function Ge(Ee,Re){for(var Ne=1/0,de=1/0,Se=ie.length;Se--;){var Ae=ie[Se];if(Ae.maxX+de<=Ee)break;if(Ee+de>Ae.minX&&Re-de<Ae.maxY&&Re+de>Ae.minY){var ae=m(Ee,Re,Ae.x1,Ae.y1,Ae.x2,Ae.y2);ae<Ne&&(Ne=ae,de=Math.sqrt(Ne))}}return Ce(Ee,Re)&&(de=-de),de}function Ce(Ee,Re){for(var Ne=0,de=ie.length;de--;){var Se=ie[de];if(Se.maxX<=Ee)break;var Ae=Se.y1>Re!=Se.y2>Re&&Ee<(Se.x2-Se.x1)*(Re-Se.y1)/(Se.y2-Se.y1)+Se.x1;Ae&&(Ne+=Se.y1<Se.y2?1:-1)}return Ne!==0}}function _(G,k,b,U,j,X,Y,re,ee,ie){X===void 0&&(X=1),re===void 0&&(re=0),ee===void 0&&(ee=0),ie===void 0&&(ie=0),p(G,k,b,U,j,X,Y,null,re,ee,ie)}function p(G,k,b,U,j,X,Y,re,ee,ie,_e){X===void 0&&(X=1),ee===void 0&&(ee=0),ie===void 0&&(ie=0),_e===void 0&&(_e=0);for(var Ie=g(G,k,b,U,j,X),pe=new Uint8Array(Ie.length*4),O=0;O<Ie.length;O++)pe[O*4+_e]=Ie[O];u(Y,pe,ee,ie,G,k,1<<3-_e,re)}function m(G,k,b,U,j,X){var Y=j-b,re=X-U,ee=Y*Y+re*re,ie=ee?Math.max(0,Math.min(1,((G-b)*Y+(k-U)*re)/ee)):0,_e=G-(b+ie*Y),Ie=k-(U+ie*re);return _e*_e+Ie*Ie}var T=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),v="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),R=null,B=!1,M={},A=new WeakMap;function $(G){if(!B&&!L(G))throw new Error("WebGL generation not supported")}function N(G,k,b,U,j,X,Y){if(X===void 0&&(X=1),Y===void 0&&(Y=null),!Y&&(Y=R,!Y)){var re=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!re)throw new Error("OffscreenCanvas or DOM canvas not supported");Y=R=re.getContext("webgl",{depth:!1})}$(Y);var ee=new Uint8Array(G*k*4);f(Y,function(pe){var O=pe.gl,Ge=pe.withTexture,Ce=pe.withTextureFramebuffer;Ge("readable",function(Ee,Re){O.texImage2D(O.TEXTURE_2D,0,O.RGBA,G,k,0,O.RGBA,O.UNSIGNED_BYTE,null),Ce(Ee,Re,function(Ne){P(G,k,b,U,j,X,O,Ne,0,0,0),O.readPixels(0,0,G,k,O.RGBA,O.UNSIGNED_BYTE,ee)})})});for(var ie=new Uint8Array(G*k),_e=0,Ie=0;_e<ee.length;_e+=4)ie[Ie++]=ee[_e];return ie}function x(G,k,b,U,j,X,Y,re,ee,ie){X===void 0&&(X=1),re===void 0&&(re=0),ee===void 0&&(ee=0),ie===void 0&&(ie=0),P(G,k,b,U,j,X,Y,null,re,ee,ie)}function P(G,k,b,U,j,X,Y,re,ee,ie,_e){X===void 0&&(X=1),ee===void 0&&(ee=0),ie===void 0&&(ie=0),_e===void 0&&(_e=0),$(Y);var Ie=[];s(b,function(pe,O,Ge,Ce){Ie.push(pe,O,Ge,Ce)}),Ie=new Float32Array(Ie),f(Y,function(pe){var O=pe.gl,Ge=pe.isWebGL2,Ce=pe.getExtension,Ee=pe.withProgram,Re=pe.withTexture,Ne=pe.withTextureFramebuffer,de=pe.handleContextLoss;if(Re("rawDistances",function(Se,Ae){(G!==Se._lastWidth||k!==Se._lastHeight)&&O.texImage2D(O.TEXTURE_2D,0,O.RGBA,Se._lastWidth=G,Se._lastHeight=k,0,O.RGBA,O.UNSIGNED_BYTE,null),Ee("main",v,y,function(ae){var Ue=ae.setAttribute,C=ae.setUniform,S=!Ge&&Ce("ANGLE_instanced_arrays"),V=!Ge&&Ce("EXT_blend_minmax");Ue("aUV",2,O.STATIC_DRAW,0,w),Ue("aLineSegment",4,O.DYNAMIC_DRAW,1,Ie),C.apply(void 0,["4f","uGlyphBounds"].concat(U)),C("1f","uMaxDistance",j),C("1f","uExponent",X),Ne(Se,Ae,function(me){O.enable(O.BLEND),O.colorMask(!0,!0,!0,!0),O.viewport(0,0,G,k),O.scissor(0,0,G,k),O.blendFunc(O.ONE,O.ONE),O.blendEquationSeparate(O.FUNC_ADD,Ge?O.MAX:V.MAX_EXT),O.clear(O.COLOR_BUFFER_BIT),Ge?O.drawArraysInstanced(O.TRIANGLES,0,3,Ie.length/4):S.drawArraysInstancedANGLE(O.TRIANGLES,0,3,Ie.length/4)})}),Ee("post",a,E,function(ae){ae.setAttribute("aUV",2,O.STATIC_DRAW,0,w),ae.setUniform("1i","tex",Ae),O.bindFramebuffer(O.FRAMEBUFFER,re),O.disable(O.BLEND),O.colorMask(_e===0,_e===1,_e===2,_e===3),O.viewport(ee,ie,G,k),O.scissor(ee,ie,G,k),O.drawArrays(O.TRIANGLES,0,3)})}),O.isContextLost())throw de(),new Error("webgl context lost")})}function L(G){var k=!G||G===R?M:G.canvas||G,b=A.get(k);if(b===void 0){B=!0;var U=null;try{var j=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],X=N(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,G);b=X&&j.length===X.length&&X.every(function(Y,re){return Y===j[re]}),b||(U="bad trial run results",console.info(j,X))}catch(Y){b=!1,U=Y.message}U&&console.warn("WebGL SDF generation not supported:",U),B=!1,A.set(k,b)}return b}var F=Object.freeze({__proto__:null,generate:N,generateIntoCanvas:x,generateIntoFramebuffer:P,isSupported:L});function I(G,k,b,U,j,X){j===void 0&&(j=Math.max(U[2]-U[0],U[3]-U[1])/2),X===void 0&&(X=1);try{return N.apply(F,arguments)}catch(Y){return console.info("WebGL SDF generation failed, falling back to JS",Y),g.apply(T,arguments)}}function W(G,k,b,U,j,X,Y,re,ee,ie){j===void 0&&(j=Math.max(U[2]-U[0],U[3]-U[1])/2),X===void 0&&(X=1),re===void 0&&(re=0),ee===void 0&&(ee=0),ie===void 0&&(ie=0);try{return x.apply(F,arguments)}catch(_e){return console.info("WebGL SDF generation failed, falling back to JS",_e),_.apply(T,arguments)}}return e.forEachPathCommand=i,e.generate=I,e.generateIntoCanvas=W,e.javascript=T,e.pathToLineSegments=s,e.webgl=F,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return r}function O_(){var r=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(de,Se){n[de]=1<<Se+1,i[n[de]]=de}),Object.freeze(n);var s=n.LRI|n.RLI|n.FSI,a=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,c=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,l=n.S|n.WS|n.B|s|n.PDI|c,f=null;function u(){if(!f){f=new Map;var de=function(Ae){if(t.hasOwnProperty(Ae)){var ae=0;t[Ae].split(",").forEach(function(Ue){var C=Ue.split("+"),S=C[0],V=C[1];S=parseInt(S,36),V=V?parseInt(V,36):0,f.set(ae+=S,n[Ae]);for(var me=0;me<V;me++)f.set(++ae,n[Ae])})}};for(var Se in t)de(Se)}}function h(de){return u(),f.get(de.codePointAt(0))||n.L}function d(de){return i[h(de)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(de,Se){var Ae=36,ae=0,Ue=new Map,C=Se&&new Map,S;return de.split(",").forEach(function V(me){if(me.indexOf("+")!==-1)for(var te=+me;te--;)V(S);else{S=me;var se=me.split(">"),ve=se[0],he=se[1];ve=String.fromCodePoint(ae+=parseInt(ve,Ae)),he=String.fromCodePoint(ae+=parseInt(he,Ae)),Ue.set(ve,he),Se&&C.set(he,ve)}}),{map:Ue,reverseMap:C}}var p,m,T;function v(){if(!p){var de=_(g.pairs,!0),Se=de.map,Ae=de.reverseMap;p=Se,m=Ae,T=_(g.canonical,!1).map}}function y(de){return v(),p.get(de)||null}function E(de){return v(),m.get(de)||null}function w(de){return v(),T.get(de)||null}var R=n.L,B=n.R,M=n.EN,A=n.ES,$=n.ET,N=n.AN,x=n.CS,P=n.B,L=n.S,F=n.ON,I=n.BN,W=n.NSM,G=n.AL,k=n.LRO,b=n.RLO,U=n.LRE,j=n.RLE,X=n.PDF,Y=n.LRI,re=n.RLI,ee=n.FSI,ie=n.PDI;function _e(de,Se){for(var Ae=125,ae=new Uint32Array(de.length),Ue=0;Ue<de.length;Ue++)ae[Ue]=h(de[Ue]);var C=new Map;function S(jt,_n){var Yt=ae[jt];ae[jt]=_n,C.set(Yt,C.get(Yt)-1),Yt&o&&C.set(o,C.get(o)-1),C.set(_n,(C.get(_n)||0)+1),_n&o&&C.set(o,(C.get(o)||0)+1)}for(var V=new Uint8Array(de.length),me=new Map,te=[],se=null,ve=0;ve<de.length;ve++)se||te.push(se={start:ve,end:de.length-1,level:Se==="rtl"?1:Se==="ltr"?0:uc(ve,!1)}),ae[ve]&P&&(se.end=ve,se=null);for(var he=j|U|b|k|s|ie|X|P,q=function(jt){return jt+(jt&1?1:2)},we=function(jt){return jt+(jt&1?2:1)},Me=0;Me<te.length;Me++){se=te[Me];var ye=[{_level:se.level,_override:0,_isolate:0}],fe=void 0,be=0,ke=0,qe=0;C.clear();for(var z=se.start;z<=se.end;z++){var le=ae[z];if(fe=ye[ye.length-1],C.set(le,(C.get(le)||0)+1),le&o&&C.set(o,(C.get(o)||0)+1),le&he)if(le&(j|U)){V[z]=fe._level;var K=(le===j?we:q)(fe._level);K<=Ae&&!be&&!ke?ye.push({_level:K,_override:0,_isolate:0}):be||ke++}else if(le&(b|k)){V[z]=fe._level;var Te=(le===b?we:q)(fe._level);Te<=Ae&&!be&&!ke?ye.push({_level:Te,_override:le&b?B:R,_isolate:0}):be||ke++}else if(le&s){le&ee&&(le=uc(z+1,!0)===1?re:Y),V[z]=fe._level,fe._override&&S(z,fe._override);var ge=(le===re?we:q)(fe._level);ge<=Ae&&be===0&&ke===0?(qe++,ye.push({_level:ge,_override:0,_isolate:1,_isolInitIndex:z})):be++}else if(le&ie){if(be>0)be--;else if(qe>0){for(ke=0;!ye[ye.length-1]._isolate;)ye.pop();var De=ye[ye.length-1]._isolInitIndex;De!=null&&(me.set(De,z),me.set(z,De)),ye.pop(),qe--}fe=ye[ye.length-1],V[z]=fe._level,fe._override&&S(z,fe._override)}else le&X?(be===0&&(ke>0?ke--:!fe._isolate&&ye.length>1&&(ye.pop(),fe=ye[ye.length-1])),V[z]=fe._level):le&P&&(V[z]=se.level);else V[z]=fe._level,fe._override&&le!==I&&S(z,fe._override)}for(var Ye=[],ze=null,Xe=se.start;Xe<=se.end;Xe++){var We=ae[Xe];if(!(We&c)){var ct=V[Xe],it=We&s,xt=We===ie;ze&&ct===ze._level?(ze._end=Xe,ze._endsWithIsolInit=it):Ye.push(ze={_start:Xe,_end:Xe,_level:ct,_startsWithPDI:xt,_endsWithIsolInit:it})}}for(var Wt=[],wn=0;wn<Ye.length;wn++){var Xt=Ye[wn];if(!Xt._startsWithPDI||Xt._startsWithPDI&&!me.has(Xt._start)){for(var pn=[ze=Xt],sn=void 0;ze&&ze._endsWithIsolInit&&(sn=me.get(ze._end))!=null;)for(var an=wn+1;an<Ye.length;an++)if(Ye[an]._start===sn){pn.push(ze=Ye[an]);break}for(var wt=[],kn=0;kn<pn.length;kn++)for(var es=pn[kn],D=es._start;D<=es._end;D++)wt.push(D);for(var Z=V[wt[0]],ce=se.level,Q=wt[0]-1;Q>=0;Q--)if(!(ae[Q]&c)){ce=V[Q];break}var oe=wt[wt.length-1],Le=V[oe],Be=se.level;if(!(ae[oe]&s)){for(var Ve=oe+1;Ve<=se.end;Ve++)if(!(ae[Ve]&c)){Be=V[Ve];break}}Wt.push({_seqIndices:wt,_sosType:Math.max(ce,Z)%2?B:R,_eosType:Math.max(Be,Le)%2?B:R})}}for(var He=0;He<Wt.length;He++){var Ke=Wt[He],xe=Ke._seqIndices,je=Ke._sosType,lt=Ke._eosType,rt=V[xe[0]]&1?B:R;if(C.get(W))for(var Pt=0;Pt<xe.length;Pt++){var on=xe[Pt];if(ae[on]&W){for(var ft=je,Je=Pt-1;Je>=0;Je--)if(!(ae[xe[Je]]&c)){ft=ae[xe[Je]];break}S(on,ft&(s|ie)?F:ft)}}if(C.get(M))for(var qn=0;qn<xe.length;qn++){var ut=xe[qn];if(ae[ut]&M)for(var cn=qn-1;cn>=-1;cn--){var gr=cn===-1?je:ae[xe[cn]];if(gr&a){gr===G&&S(ut,N);break}}}if(C.get(G))for(var Nn=0;Nn<xe.length;Nn++){var Ui=xe[Nn];ae[Ui]&G&&S(Ui,B)}if(C.get(A)||C.get(x))for(var pt=1;pt<xe.length-1;pt++){var mn=xe[pt];if(ae[mn]&(A|x)){for(var Pn=0,Ut=0,ci=pt-1;ci>=0&&(Pn=ae[xe[ci]],!!(Pn&c));ci--);for(var _r=pt+1;_r<xe.length&&(Ut=ae[xe[_r]],!!(Ut&c));_r++);Pn===Ut&&(ae[mn]===A?Pn===M:Pn&(M|N))&&S(mn,Pn)}}if(C.get(M))for(var Zt=0;Zt<xe.length;Zt++){var fh=xe[Zt];if(ae[fh]&M){for(var ts=Zt-1;ts>=0&&ae[xe[ts]]&($|c);ts--)S(xe[ts],M);for(Zt++;Zt<xe.length&&ae[xe[Zt]]&($|c|M);Zt++)ae[xe[Zt]]!==M&&S(xe[Zt],M)}}if(C.get($)||C.get(A)||C.get(x))for(var vr=0;vr<xe.length;vr++){var Zo=xe[vr];if(ae[Zo]&($|A|x)){S(Zo,F);for(var ns=vr-1;ns>=0&&ae[xe[ns]]&c;ns--)S(xe[ns],F);for(var is=vr+1;is<xe.length&&ae[xe[is]]&c;is++)S(xe[is],F)}}if(C.get(M))for(var aa=0,Qo=je;aa<xe.length;aa++){var ec=xe[aa],oa=ae[ec];oa&M?Qo===R&&S(ec,R):oa&a&&(Qo=oa)}if(C.get(o)){var xr=B|M|N,tc=xr|R,rs=[];{for(var Li=[],Di=0;Di<xe.length;Di++)if(ae[xe[Di]]&o){var yr=de[xe[Di]],nc=void 0;if(y(yr)!==null)if(Li.length<63)Li.push({char:yr,seqIndex:Di});else break;else if((nc=E(yr))!==null)for(var Sr=Li.length-1;Sr>=0;Sr--){var ca=Li[Sr].char;if(ca===nc||ca===E(w(yr))||y(w(ca))===yr){rs.push([Li[Sr].seqIndex,Di]),Li.length=Sr;break}}}rs.sort(function(jt,_n){return jt[0]-_n[0]})}for(var la=0;la<rs.length;la++){for(var ic=rs[la],ss=ic[0],fa=ic[1],rc=!1,gn=0,ua=ss+1;ua<fa;ua++){var sc=xe[ua];if(ae[sc]&tc){rc=!0;var ac=ae[sc]&xr?B:R;if(ac===rt){gn=ac;break}}}if(rc&&!gn){gn=je;for(var ha=ss-1;ha>=0;ha--){var oc=xe[ha];if(ae[oc]&tc){var cc=ae[oc]&xr?B:R;cc!==rt?gn=cc:gn=rt;break}}}if(gn){if(ae[xe[ss]]=ae[xe[fa]]=gn,gn!==rt){for(var Mr=ss+1;Mr<xe.length;Mr++)if(!(ae[xe[Mr]]&c)){h(de[xe[Mr]])&W&&(ae[xe[Mr]]=gn);break}}if(gn!==rt){for(var br=fa+1;br<xe.length;br++)if(!(ae[xe[br]]&c)){h(de[xe[br]])&W&&(ae[xe[br]]=gn);break}}}}for(var Kn=0;Kn<xe.length;Kn++)if(ae[xe[Kn]]&o){for(var lc=Kn,da=Kn,pa=je,Er=Kn-1;Er>=0;Er--)if(ae[xe[Er]]&c)lc=Er;else{pa=ae[xe[Er]]&xr?B:R;break}for(var fc=lt,Tr=Kn+1;Tr<xe.length;Tr++)if(ae[xe[Tr]]&(o|c))da=Tr;else{fc=ae[xe[Tr]]&xr?B:R;break}for(var ma=lc;ma<=da;ma++)ae[xe[ma]]=pa===fc?pa:rt;Kn=da}}}for(var Qt=se.start;Qt<=se.end;Qt++){var uh=V[Qt],as=ae[Qt];if(uh&1?as&(R|M|N)&&V[Qt]++:as&B?V[Qt]++:as&(N|M)&&(V[Qt]+=2),as&c&&(V[Qt]=Qt===0?se.level:V[Qt-1]),Qt===se.end||h(de[Qt])&(L|P))for(var os=Qt;os>=0&&h(de[os])&l;os--)V[os]=se.level}}return{levels:V,paragraphs:te};function uc(jt,_n){for(var Yt=jt;Yt<de.length;Yt++){var Jn=ae[Yt];if(Jn&(B|G))return 1;if(Jn&(P|R)||_n&&Jn===ie)return 0;if(Jn&s){var hc=hh(Yt);Yt=hc===-1?de.length:hc}}return 0}function hh(jt){for(var _n=1,Yt=jt+1;Yt<de.length;Yt++){var Jn=ae[Yt];if(Jn&P)break;if(Jn&ie){if(--_n===0)return Yt}else Jn&s&&_n++}return-1}}var Ie="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",pe;function O(){if(!pe){var de=_(Ie,!0),Se=de.map,Ae=de.reverseMap;Ae.forEach(function(ae,Ue){Se.set(Ue,ae)}),pe=Se}}function Ge(de){return O(),pe.get(de)||null}function Ce(de,Se,Ae,ae){var Ue=de.length;Ae=Math.max(0,Ae==null?0:+Ae),ae=Math.min(Ue-1,ae==null?Ue-1:+ae);for(var C=new Map,S=Ae;S<=ae;S++)if(Se[S]&1){var V=Ge(de[S]);V!==null&&C.set(S,V)}return C}function Ee(de,Se,Ae,ae){var Ue=de.length;Ae=Math.max(0,Ae==null?0:+Ae),ae=Math.min(Ue-1,ae==null?Ue-1:+ae);var C=[];return Se.paragraphs.forEach(function(S){var V=Math.max(Ae,S.start),me=Math.min(ae,S.end);if(V<me){for(var te=Se.levels.slice(V,me+1),se=me;se>=V&&h(de[se])&l;se--)te[se]=S.level;for(var ve=S.level,he=1/0,q=0;q<te.length;q++){var we=te[q];we>ve&&(ve=we),we<he&&(he=we|1)}for(var Me=ve;Me>=he;Me--)for(var ye=0;ye<te.length;ye++)if(te[ye]>=Me){for(var fe=ye;ye+1<te.length&&te[ye+1]>=Me;)ye++;ye>fe&&C.push([fe+V,ye+V])}}}),C}function Re(de,Se,Ae,ae){var Ue=Ne(de,Se,Ae,ae),C=[].concat(de);return Ue.forEach(function(S,V){C[V]=(Se.levels[S]&1?Ge(de[S]):null)||de[S]}),C.join("")}function Ne(de,Se,Ae,ae){for(var Ue=Ee(de,Se,Ae,ae),C=[],S=0;S<de.length;S++)C[S]=S;return Ue.forEach(function(V){for(var me=V[0],te=V[1],se=C.slice(me,te+1),ve=se.length;ve--;)C[te-ve]=se[ve]}),C}return e.closingToOpeningBracket=E,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=_e,e.getMirroredCharacter=Ge,e.getMirroredCharactersMap=Ce,e.getReorderSegments=Ee,e.getReorderedIndices=Ne,e.getReorderedString=Re,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return r}const au=/\bvoid\s+main\s*\(\s*\)\s*{/g;function go(r){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let s=$e[i];return s?go(s):n}return r.replace(e,t)}const Lt=[];for(let r=0;r<256;r++)Lt[r]=(r<16?"0":"")+r.toString(16);function k_(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toUpperCase()}const di=Object.assign||function(){let r=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},N_=Date.now(),Bl=new WeakMap,Gl=new Map;let B_=1e10;function _o(r,e){const t=H_(e);let n=Bl.get(r);if(n||Bl.set(r,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,s=function(l,f){r.onBeforeCompile.call(this,l,f);const u=this.customProgramCacheKey()+"|"+l.vertexShader+"|"+l.fragmentShader;let h=Gl[u];if(!h){const d=G_(this,l,e,t);h=Gl[u]=d}l.vertexShader=h.vertexShader,l.fragmentShader=h.fragmentShader,di(l.uniforms,this.uniforms),e.timeUniform&&(l.uniforms[e.timeUniform]={get value(){return Date.now()-N_}}),this[i]&&this[i](l)},a=function(){return o(e.chained?r:r.clone())},o=function(l){const f=Object.create(l,c);return Object.defineProperty(f,"baseMaterial",{value:r}),Object.defineProperty(f,"id",{value:B_++}),f.uuid=k_(),f.uniforms=di({},l.uniforms,e.uniforms),f.defines=di({},l.defines,e.defines),f.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",f.extensions=di({},l.extensions,e.extensions),f._listeners=void 0,f},c={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return r.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return s},set(l){this[i]=l}},copy:{writable:!0,configurable:!0,value:function(l){return r.copy.call(this,l),!r.isShaderMaterial&&!r.isDerivedMaterial&&(di(this.extensions,l.extensions),di(this.defines,l.defines),di(this.uniforms,Wf.clone(l.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const l=new r.constructor;return o(l).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let l=this._depthMaterial;return l||(l=this._depthMaterial=_o(r.isDerivedMaterial?r.getDepthMaterial():new Qf({depthPacking:Lf}),e),l.defines.IS_DEPTH_MATERIAL="",l.uniforms=this.uniforms),l}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let l=this._distanceMaterial;return l||(l=this._distanceMaterial=_o(r.isDerivedMaterial?r.getDistanceMaterial():new eu,e),l.defines.IS_DISTANCE_MATERIAL="",l.uniforms=this.uniforms),l}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:l,_distanceMaterial:f}=this;l&&l.dispose(),f&&f.dispose(),r.dispose.call(this)}}};return n[t]=a,new a}function G_(r,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:s,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:c,fragmentDefs:l,fragmentMainIntro:f,fragmentMainOutro:u,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=n;if(s=s||"",a=a||"",o=o||"",l=l||"",f=f||"",u=u||"",(c||d)&&(e=go(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=go(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),u=`${h}
${_.join(`
`)}
${u}`}if(g){const _=`
uniform float ${g};
`;s=_+s,l=_+l}return c&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,s=`${s}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`,a=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,T)=>/\battribute\s+vec[23]\s+$/.test(T.substr(0,m))?p:`troika_${p}_${i}`),r.map&&r.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=zl(e,i,s,a,o),t=zl(t,i,l,f,u),{vertexShader:e,fragmentShader:t}}function zl(r,e,t,n,i){return(n||i||t)&&(r=r.replace(au,`
${t}
void troikaOrigMain${e}() {`),r+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),r}function z_(r,e){return r==="uniforms"?void 0:typeof e=="function"?e.toString():e}let V_=0;const Vl=new Map;function H_(r){const e=JSON.stringify(r,z_);let t=Vl.get(e);return t==null&&Vl.set(e,t=++V_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function W_(){return typeof window>"u"&&(self.window=self),function(r){var e={parse:function(i){var s=e._bin,a=new Uint8Array(i);if(s.readASCII(a,0,4)=="ttcf"){var o=4;s.readUshort(a,o),o+=2,s.readUshort(a,o),o+=2;var c=s.readUint(a,o);o+=4;for(var l=[],f=0;f<c;f++){var u=s.readUint(a,o);o+=4,l.push(e._readFont(a,u))}return l}return[e._readFont(a,0)]},_readFont:function(i,s){var a=e._bin,o=s;a.readFixed(i,s),s+=4;var c=a.readUshort(i,s);s+=2,a.readUshort(i,s),s+=2,a.readUshort(i,s),s+=2,a.readUshort(i,s),s+=2;for(var l=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],f={_data:i,_offset:o},u={},h=0;h<c;h++){var d=a.readASCII(i,s,4);s+=4,a.readUint(i,s),s+=4;var g=a.readUint(i,s);s+=4;var _=a.readUint(i,s);s+=4,u[d]={offset:g,length:_}}for(h=0;h<l.length;h++){var p=l[h];u[p]&&(f[p.trim()]=e[p.trim()].parse(i,u[p].offset,u[p].length,f))}return f},_tabOffset:function(i,s,a){for(var o=e._bin,c=o.readUshort(i,a+4),l=a+12,f=0;f<c;f++){var u=o.readASCII(i,l,4);l+=4,o.readUint(i,l),l+=4;var h=o.readUint(i,l);if(l+=4,o.readUint(i,l),l+=4,u==s)return h}return 0}};e._bin={readFixed:function(i,s){return(i[s]<<8|i[s+1])+(i[s+2]<<8|i[s+3])/65540},readF2dot14:function(i,s){return e._bin.readShort(i,s)/16384},readInt:function(i,s){return e._bin._view(i).getInt32(s)},readInt8:function(i,s){return e._bin._view(i).getInt8(s)},readShort:function(i,s){return e._bin._view(i).getInt16(s)},readUshort:function(i,s){return e._bin._view(i).getUint16(s)},readUshorts:function(i,s,a){for(var o=[],c=0;c<a;c++)o.push(e._bin.readUshort(i,s+2*c));return o},readUint:function(i,s){return e._bin._view(i).getUint32(s)},readUint64:function(i,s){return 4294967296*e._bin.readUint(i,s)+e._bin.readUint(i,s+4)},readASCII:function(i,s,a){for(var o="",c=0;c<a;c++)o+=String.fromCharCode(i[s+c]);return o},readUnicode:function(i,s,a){for(var o="",c=0;c<a;c++){var l=i[s++]<<8|i[s++];o+=String.fromCharCode(l)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,s,a){var o=e._bin._tdec;return o&&s==0&&a==i.length?o.decode(i):e._bin.readASCII(i,s,a)},readBytes:function(i,s,a){for(var o=[],c=0;c<a;c++)o.push(i[s+c]);return o},readASCIIArray:function(i,s,a){for(var o=[],c=0;c<a;c++)o.push(String.fromCharCode(i[s+c]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,s,a,o,c){var l=e._bin,f={},u=s;l.readFixed(i,s),s+=4;var h=l.readUshort(i,s);s+=2;var d=l.readUshort(i,s);s+=2;var g=l.readUshort(i,s);return s+=2,f.scriptList=e._lctf.readScriptList(i,u+h),f.featureList=e._lctf.readFeatureList(i,u+d),f.lookupList=e._lctf.readLookupList(i,u+g,c),f},e._lctf.readLookupList=function(i,s,a){var o=e._bin,c=s,l=[],f=o.readUshort(i,s);s+=2;for(var u=0;u<f;u++){var h=o.readUshort(i,s);s+=2;var d=e._lctf.readLookupTable(i,c+h,a);l.push(d)}return l},e._lctf.readLookupTable=function(i,s,a){var o=e._bin,c=s,l={tabs:[]};l.ltype=o.readUshort(i,s),s+=2,l.flag=o.readUshort(i,s),s+=2;var f=o.readUshort(i,s);s+=2;for(var u=l.ltype,h=0;h<f;h++){var d=o.readUshort(i,s);s+=2;var g=a(i,u,c+d,l);l.tabs.push(g)}return l},e._lctf.numOfOnes=function(i){for(var s=0,a=0;a<32;a++)i>>>a&1&&s++;return s},e._lctf.readClassDef=function(i,s){var a=e._bin,o=[],c=a.readUshort(i,s);if(s+=2,c==1){var l=a.readUshort(i,s);s+=2;var f=a.readUshort(i,s);s+=2;for(var u=0;u<f;u++)o.push(l+u),o.push(l+u),o.push(a.readUshort(i,s)),s+=2}if(c==2){var h=a.readUshort(i,s);for(s+=2,u=0;u<h;u++)o.push(a.readUshort(i,s)),s+=2,o.push(a.readUshort(i,s)),s+=2,o.push(a.readUshort(i,s)),s+=2}return o},e._lctf.getInterval=function(i,s){for(var a=0;a<i.length;a+=3){var o=i[a],c=i[a+1];if(i[a+2],o<=s&&s<=c)return a}return-1},e._lctf.readCoverage=function(i,s){var a=e._bin,o={};o.fmt=a.readUshort(i,s),s+=2;var c=a.readUshort(i,s);return s+=2,o.fmt==1&&(o.tab=a.readUshorts(i,s,c)),o.fmt==2&&(o.tab=a.readUshorts(i,s,3*c)),o},e._lctf.coverageIndex=function(i,s){var a=i.tab;if(i.fmt==1)return a.indexOf(s);if(i.fmt==2){var o=e._lctf.getInterval(a,s);if(o!=-1)return a[o+2]+(s-a[o])}return-1},e._lctf.readFeatureList=function(i,s){var a=e._bin,o=s,c=[],l=a.readUshort(i,s);s+=2;for(var f=0;f<l;f++){var u=a.readASCII(i,s,4);s+=4;var h=a.readUshort(i,s);s+=2;var d=e._lctf.readFeatureTable(i,o+h);d.tag=u.trim(),c.push(d)}return c},e._lctf.readFeatureTable=function(i,s){var a=e._bin,o=s,c={},l=a.readUshort(i,s);s+=2,l>0&&(c.featureParams=o+l);var f=a.readUshort(i,s);s+=2,c.tab=[];for(var u=0;u<f;u++)c.tab.push(a.readUshort(i,s+2*u));return c},e._lctf.readScriptList=function(i,s){var a=e._bin,o=s,c={},l=a.readUshort(i,s);s+=2;for(var f=0;f<l;f++){var u=a.readASCII(i,s,4);s+=4;var h=a.readUshort(i,s);s+=2,c[u.trim()]=e._lctf.readScriptTable(i,o+h)}return c},e._lctf.readScriptTable=function(i,s){var a=e._bin,o=s,c={},l=a.readUshort(i,s);s+=2,l>0&&(c.default=e._lctf.readLangSysTable(i,o+l));var f=a.readUshort(i,s);s+=2;for(var u=0;u<f;u++){var h=a.readASCII(i,s,4);s+=4;var d=a.readUshort(i,s);s+=2,c[h.trim()]=e._lctf.readLangSysTable(i,o+d)}return c},e._lctf.readLangSysTable=function(i,s){var a=e._bin,o={};a.readUshort(i,s),s+=2,o.reqFeature=a.readUshort(i,s),s+=2;var c=a.readUshort(i,s);return s+=2,o.features=a.readUshorts(i,s,c),o},e.CFF={},e.CFF.parse=function(i,s,a){var o=e._bin;(i=new Uint8Array(i.buffer,s,a))[s=0],i[++s],i[++s],i[++s],s++;var c=[];s=e.CFF.readIndex(i,s,c);for(var l=[],f=0;f<c.length-1;f++)l.push(o.readASCII(i,s+c[f],c[f+1]-c[f]));s+=c[c.length-1];var u=[];s=e.CFF.readIndex(i,s,u);var h=[];for(f=0;f<u.length-1;f++)h.push(e.CFF.readDict(i,s+u[f],s+u[f+1]));s+=u[u.length-1];var d=h[0],g=[];s=e.CFF.readIndex(i,s,g);var _=[];for(f=0;f<g.length-1;f++)_.push(o.readASCII(i,s+g[f],g[f+1]-g[f]));if(s+=g[g.length-1],e.CFF.readSubrs(i,s,d),d.CharStrings){s=d.CharStrings,g=[],s=e.CFF.readIndex(i,s,g);var p=[];for(f=0;f<g.length-1;f++)p.push(o.readBytes(i,s+g[f],g[f+1]-g[f]));d.CharStrings=p}if(d.ROS){s=d.FDArray;var m=[];for(s=e.CFF.readIndex(i,s,m),d.FDArray=[],f=0;f<m.length-1;f++){var T=e.CFF.readDict(i,s+m[f],s+m[f+1]);e.CFF._readFDict(i,T,_),d.FDArray.push(T)}s+=m[m.length-1],s=d.FDSelect,d.FDSelect=[];var v=i[s];if(s++,v!=3)throw v;var y=o.readUshort(i,s);for(s+=2,f=0;f<y+1;f++)d.FDSelect.push(o.readUshort(i,s),i[s+2]),s+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,_),d},e.CFF._readFDict=function(i,s,a){var o;for(var c in s.Private&&(o=s.Private[1],s.Private=e.CFF.readDict(i,o,o+s.Private[0]),s.Private.Subrs&&e.CFF.readSubrs(i,o+s.Private.Subrs,s.Private)),s)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(c)!=-1&&(s[c]=a[s[c]-426+35])},e.CFF.readSubrs=function(i,s,a){var o=e._bin,c=[];s=e.CFF.readIndex(i,s,c);var l,f=c.length;l=f<1240?107:f<33900?1131:32768,a.Bias=l,a.Subrs=[];for(var u=0;u<c.length-1;u++)a.Subrs.push(o.readBytes(i,s+c[u],c[u+1]-c[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,s){for(var a=0;a<i.charset.length;a++)if(i.charset[a]==s)return a;return-1},e.CFF.glyphBySE=function(i,s){return s<0||s>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[s])},e.CFF.readEncoding=function(i,s,a){e._bin;var o=[".notdef"],c=i[s];if(s++,c!=0)throw"error: unknown encoding format: "+c;var l=i[s];s++;for(var f=0;f<l;f++)o.push(i[s+f]);return o},e.CFF.readCharset=function(i,s,a){var o=e._bin,c=[".notdef"],l=i[s];if(s++,l==0)for(var f=0;f<a;f++){var u=o.readUshort(i,s);s+=2,c.push(u)}else{if(l!=1&&l!=2)throw"error: format: "+l;for(;c.length<a;){u=o.readUshort(i,s),s+=2;var h=0;for(l==1?(h=i[s],s++):(h=o.readUshort(i,s),s+=2),f=0;f<=h;f++)c.push(u),u++}}return c},e.CFF.readIndex=function(i,s,a){var o=e._bin,c=o.readUshort(i,s)+1,l=i[s+=2];if(s++,l==1)for(var f=0;f<c;f++)a.push(i[s+f]);else if(l==2)for(f=0;f<c;f++)a.push(o.readUshort(i,s+2*f));else if(l==3)for(f=0;f<c;f++)a.push(16777215&o.readUint(i,s+3*f-1));else if(c!=1)throw"unsupported offset size: "+l+", count: "+c;return(s+=c*l)-1},e.CFF.getCharString=function(i,s,a){var o=e._bin,c=i[s],l=i[s+1];i[s+2],i[s+3],i[s+4];var f=1,u=null,h=null;c<=20&&(u=c,f=1),c==12&&(u=100*c+l,f=2),21<=c&&c<=27&&(u=c,f=1),c==28&&(h=o.readShort(i,s+1),f=3),29<=c&&c<=31&&(u=c,f=1),32<=c&&c<=246&&(h=c-139,f=1),247<=c&&c<=250&&(h=256*(c-247)+l+108,f=2),251<=c&&c<=254&&(h=256*-(c-251)-l-108,f=2),c==255&&(h=o.readInt(i,s+1)/65535,f=5),a.val=h??"o"+u,a.size=f},e.CFF.readCharString=function(i,s,a){for(var o=s+a,c=e._bin,l=[];s<o;){var f=i[s],u=i[s+1];i[s+2],i[s+3],i[s+4];var h=1,d=null,g=null;f<=20&&(d=f,h=1),f==12&&(d=100*f+u,h=2),f!=19&&f!=20||(d=f,h=2),21<=f&&f<=27&&(d=f,h=1),f==28&&(g=c.readShort(i,s+1),h=3),29<=f&&f<=31&&(d=f,h=1),32<=f&&f<=246&&(g=f-139,h=1),247<=f&&f<=250&&(g=256*(f-247)+u+108,h=2),251<=f&&f<=254&&(g=256*-(f-251)-u-108,h=2),f==255&&(g=c.readInt(i,s+1)/65535,h=5),l.push(g??"o"+d),s+=h}return l},e.CFF.readDict=function(i,s,a){for(var o=e._bin,c={},l=[];s<a;){var f=i[s],u=i[s+1];i[s+2],i[s+3],i[s+4];var h=1,d=null,g=null;if(f==28&&(g=o.readShort(i,s+1),h=3),f==29&&(g=o.readInt(i,s+1),h=5),32<=f&&f<=246&&(g=f-139,h=1),247<=f&&f<=250&&(g=256*(f-247)+u+108,h=2),251<=f&&f<=254&&(g=256*-(f-251)-u-108,h=2),f==255)throw g=o.readInt(i,s+1)/65535,h=5,"unknown number";if(f==30){var _=[];for(h=1;;){var p=i[s+h];h++;var m=p>>4,T=15&p;if(m!=15&&_.push(m),T!=15&&_.push(T),T==15)break}for(var v="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<_.length;E++)v+=y[_[E]];g=parseFloat(v)}f<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][f],h=1,f==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],h=2)),d!=null?(c[d]=l.length==1?l[0]:l,l=[]):l.push(g),s+=h}return c},e.cmap={},e.cmap.parse=function(i,s,a){i=new Uint8Array(i.buffer,s,a),s=0;var o=e._bin,c={};o.readUshort(i,s),s+=2;var l=o.readUshort(i,s);s+=2;var f=[];c.tables=[];for(var u=0;u<l;u++){var h=o.readUshort(i,s);s+=2;var d=o.readUshort(i,s);s+=2;var g=o.readUint(i,s);s+=4;var _="p"+h+"e"+d,p=f.indexOf(g);if(p==-1){var m;p=c.tables.length,f.push(g);var T=o.readUshort(i,g);T==0?m=e.cmap.parse0(i,g):T==4?m=e.cmap.parse4(i,g):T==6?m=e.cmap.parse6(i,g):T==12?m=e.cmap.parse12(i,g):console.debug("unknown format: "+T,h,d,g),c.tables.push(m)}if(c[_]!=null)throw"multiple tables for one platform+encoding";c[_]=p}return c},e.cmap.parse0=function(i,s){var a=e._bin,o={};o.format=a.readUshort(i,s),s+=2;var c=a.readUshort(i,s);s+=2,a.readUshort(i,s),s+=2,o.map=[];for(var l=0;l<c-6;l++)o.map.push(i[s+l]);return o},e.cmap.parse4=function(i,s){var a=e._bin,o=s,c={};c.format=a.readUshort(i,s),s+=2;var l=a.readUshort(i,s);s+=2,a.readUshort(i,s),s+=2;var f=a.readUshort(i,s);s+=2;var u=f/2;c.searchRange=a.readUshort(i,s),s+=2,c.entrySelector=a.readUshort(i,s),s+=2,c.rangeShift=a.readUshort(i,s),s+=2,c.endCount=a.readUshorts(i,s,u),s+=2*u,s+=2,c.startCount=a.readUshorts(i,s,u),s+=2*u,c.idDelta=[];for(var h=0;h<u;h++)c.idDelta.push(a.readShort(i,s)),s+=2;for(c.idRangeOffset=a.readUshorts(i,s,u),s+=2*u,c.glyphIdArray=[];s<o+l;)c.glyphIdArray.push(a.readUshort(i,s)),s+=2;return c},e.cmap.parse6=function(i,s){var a=e._bin,o={};o.format=a.readUshort(i,s),s+=2,a.readUshort(i,s),s+=2,a.readUshort(i,s),s+=2,o.firstCode=a.readUshort(i,s),s+=2;var c=a.readUshort(i,s);s+=2,o.glyphIdArray=[];for(var l=0;l<c;l++)o.glyphIdArray.push(a.readUshort(i,s)),s+=2;return o},e.cmap.parse12=function(i,s){var a=e._bin,o={};o.format=a.readUshort(i,s),s+=2,s+=2,a.readUint(i,s),s+=4,a.readUint(i,s),s+=4;var c=a.readUint(i,s);s+=4,o.groups=[];for(var l=0;l<c;l++){var f=s+12*l,u=a.readUint(i,f+0),h=a.readUint(i,f+4),d=a.readUint(i,f+8);o.groups.push([u,h,d])}return o},e.glyf={},e.glyf.parse=function(i,s,a,o){for(var c=[],l=0;l<o.maxp.numGlyphs;l++)c.push(null);return c},e.glyf._parseGlyf=function(i,s){var a=e._bin,o=i._data,c=e._tabOffset(o,"glyf",i._offset)+i.loca[s];if(i.loca[s]==i.loca[s+1])return null;var l={};if(l.noc=a.readShort(o,c),c+=2,l.xMin=a.readShort(o,c),c+=2,l.yMin=a.readShort(o,c),c+=2,l.xMax=a.readShort(o,c),c+=2,l.yMax=a.readShort(o,c),c+=2,l.xMin>=l.xMax||l.yMin>=l.yMax)return null;if(l.noc>0){l.endPts=[];for(var f=0;f<l.noc;f++)l.endPts.push(a.readUshort(o,c)),c+=2;var u=a.readUshort(o,c);if(c+=2,o.length-c<u)return null;l.instructions=a.readBytes(o,c,u),c+=u;var h=l.endPts[l.noc-1]+1;for(l.flags=[],f=0;f<h;f++){var d=o[c];if(c++,l.flags.push(d),(8&d)!=0){var g=o[c];c++;for(var _=0;_<g;_++)l.flags.push(d),f++}}for(l.xs=[],f=0;f<h;f++){var p=(2&l.flags[f])!=0,m=(16&l.flags[f])!=0;p?(l.xs.push(m?o[c]:-o[c]),c++):m?l.xs.push(0):(l.xs.push(a.readShort(o,c)),c+=2)}for(l.ys=[],f=0;f<h;f++)p=(4&l.flags[f])!=0,m=(32&l.flags[f])!=0,p?(l.ys.push(m?o[c]:-o[c]),c++):m?l.ys.push(0):(l.ys.push(a.readShort(o,c)),c+=2);var T=0,v=0;for(f=0;f<h;f++)T+=l.xs[f],v+=l.ys[f],l.xs[f]=T,l.ys[f]=v}else{var y;l.parts=[];do{y=a.readUshort(o,c),c+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(l.parts.push(E),E.glyphIndex=a.readUshort(o,c),c+=2,1&y){var w=a.readShort(o,c);c+=2;var R=a.readShort(o,c);c+=2}else w=a.readInt8(o,c),c++,R=a.readInt8(o,c),c++;2&y?(E.m.tx=w,E.m.ty=R):(E.p1=w,E.p2=R),8&y?(E.m.a=E.m.d=a.readF2dot14(o,c),c+=2):64&y?(E.m.a=a.readF2dot14(o,c),c+=2,E.m.d=a.readF2dot14(o,c),c+=2):128&y&&(E.m.a=a.readF2dot14(o,c),c+=2,E.m.b=a.readF2dot14(o,c),c+=2,E.m.c=a.readF2dot14(o,c),c+=2,E.m.d=a.readF2dot14(o,c),c+=2)}while(32&y);if(256&y){var B=a.readUshort(o,c);for(c+=2,l.instr=[],f=0;f<B;f++)l.instr.push(o[c]),c++}}return l},e.GPOS={},e.GPOS.parse=function(i,s,a,o){return e._lctf.parse(i,s,a,o,e.GPOS.subt)},e.GPOS.subt=function(i,s,a,o){var c=e._bin,l=a,f={};if(f.fmt=c.readUshort(i,a),a+=2,s==1||s==2||s==3||s==7||s==8&&f.fmt<=2){var u=c.readUshort(i,a);a+=2,f.coverage=e._lctf.readCoverage(i,u+l)}if(s==1&&f.fmt==1){var h=c.readUshort(i,a);a+=2;var d=e._lctf.numOfOnes(h);h!=0&&(f.pos=e.GPOS.readValueRecord(i,a,h))}else if(s==2&&f.fmt>=1&&f.fmt<=2){h=c.readUshort(i,a),a+=2;var g=c.readUshort(i,a);a+=2,d=e._lctf.numOfOnes(h);var _=e._lctf.numOfOnes(g);if(f.fmt==1){f.pairsets=[];var p=c.readUshort(i,a);a+=2;for(var m=0;m<p;m++){var T=l+c.readUshort(i,a);a+=2;var v=c.readUshort(i,T);T+=2;for(var y=[],E=0;E<v;E++){var w=c.readUshort(i,T);T+=2,h!=0&&(N=e.GPOS.readValueRecord(i,T,h),T+=2*d),g!=0&&(x=e.GPOS.readValueRecord(i,T,g),T+=2*_),y.push({gid2:w,val1:N,val2:x})}f.pairsets.push(y)}}if(f.fmt==2){var R=c.readUshort(i,a);a+=2;var B=c.readUshort(i,a);a+=2;var M=c.readUshort(i,a);a+=2;var A=c.readUshort(i,a);for(a+=2,f.classDef1=e._lctf.readClassDef(i,l+R),f.classDef2=e._lctf.readClassDef(i,l+B),f.matrix=[],m=0;m<M;m++){var $=[];for(E=0;E<A;E++){var N=null,x=null;h!=0&&(N=e.GPOS.readValueRecord(i,a,h),a+=2*d),g!=0&&(x=e.GPOS.readValueRecord(i,a,g),a+=2*_),$.push({val1:N,val2:x})}f.matrix.push($)}}}else{if(s==9&&f.fmt==1){var P=c.readUshort(i,a);a+=2;var L=c.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=P;else if(o.ltype!=P)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,l+L)}console.debug("unsupported GPOS table LookupType",s,"format",f.fmt)}return f},e.GPOS.readValueRecord=function(i,s,a){var o=e._bin,c=[];return c.push(1&a?o.readShort(i,s):0),s+=1&a?2:0,c.push(2&a?o.readShort(i,s):0),s+=2&a?2:0,c.push(4&a?o.readShort(i,s):0),s+=4&a?2:0,c.push(8&a?o.readShort(i,s):0),s+=8&a?2:0,c},e.GSUB={},e.GSUB.parse=function(i,s,a,o){return e._lctf.parse(i,s,a,o,e.GSUB.subt)},e.GSUB.subt=function(i,s,a,o){var c=e._bin,l=a,f={};if(f.fmt=c.readUshort(i,a),a+=2,s!=1&&s!=4&&s!=5&&s!=6)return null;if(s==1||s==4||s==5&&f.fmt<=2||s==6&&f.fmt<=2){var u=c.readUshort(i,a);a+=2,f.coverage=e._lctf.readCoverage(i,l+u)}if(s==1&&f.fmt>=1&&f.fmt<=2){if(f.fmt==1)f.delta=c.readShort(i,a),a+=2;else if(f.fmt==2){var h=c.readUshort(i,a);a+=2,f.newg=c.readUshorts(i,a,h),a+=2*f.newg.length}}else if(s==4){f.vals=[],h=c.readUshort(i,a),a+=2;for(var d=0;d<h;d++){var g=c.readUshort(i,a);a+=2,f.vals.push(e.GSUB.readLigatureSet(i,l+g))}}else if(s==5&&f.fmt==2){if(f.fmt==2){var _=c.readUshort(i,a);a+=2,f.cDef=e._lctf.readClassDef(i,l+_),f.scset=[];var p=c.readUshort(i,a);for(a+=2,d=0;d<p;d++){var m=c.readUshort(i,a);a+=2,f.scset.push(m==0?null:e.GSUB.readSubClassSet(i,l+m))}}}else if(s==6&&f.fmt==3){if(f.fmt==3){for(d=0;d<3;d++){h=c.readUshort(i,a),a+=2;for(var T=[],v=0;v<h;v++)T.push(e._lctf.readCoverage(i,l+c.readUshort(i,a+2*v)));a+=2*h,d==0&&(f.backCvg=T),d==1&&(f.inptCvg=T),d==2&&(f.ahedCvg=T)}h=c.readUshort(i,a),a+=2,f.lookupRec=e.GSUB.readSubstLookupRecords(i,a,h)}}else{if(s==7&&f.fmt==1){var y=c.readUshort(i,a);a+=2;var E=c.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=y;else if(o.ltype!=y)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,l+E)}console.debug("unsupported GSUB table LookupType",s,"format",f.fmt)}return f},e.GSUB.readSubClassSet=function(i,s){var a=e._bin.readUshort,o=s,c=[],l=a(i,s);s+=2;for(var f=0;f<l;f++){var u=a(i,s);s+=2,c.push(e.GSUB.readSubClassRule(i,o+u))}return c},e.GSUB.readSubClassRule=function(i,s){var a=e._bin.readUshort,o={},c=a(i,s),l=a(i,s+=2);s+=2,o.input=[];for(var f=0;f<c-1;f++)o.input.push(a(i,s)),s+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,s,l),o},e.GSUB.readSubstLookupRecords=function(i,s,a){for(var o=e._bin.readUshort,c=[],l=0;l<a;l++)c.push(o(i,s),o(i,s+2)),s+=4;return c},e.GSUB.readChainSubClassSet=function(i,s){var a=e._bin,o=s,c=[],l=a.readUshort(i,s);s+=2;for(var f=0;f<l;f++){var u=a.readUshort(i,s);s+=2,c.push(e.GSUB.readChainSubClassRule(i,o+u))}return c},e.GSUB.readChainSubClassRule=function(i,s){for(var a=e._bin,o={},c=["backtrack","input","lookahead"],l=0;l<c.length;l++){var f=a.readUshort(i,s);s+=2,l==1&&f--,o[c[l]]=a.readUshorts(i,s,f),s+=2*o[c[l]].length}return f=a.readUshort(i,s),s+=2,o.subst=a.readUshorts(i,s,2*f),s+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,s){var a=e._bin,o=s,c=[],l=a.readUshort(i,s);s+=2;for(var f=0;f<l;f++){var u=a.readUshort(i,s);s+=2,c.push(e.GSUB.readLigature(i,o+u))}return c},e.GSUB.readLigature=function(i,s){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(i,s),s+=2;var c=a.readUshort(i,s);s+=2;for(var l=0;l<c-1;l++)o.chain.push(a.readUshort(i,s)),s+=2;return o},e.head={},e.head.parse=function(i,s,a){var o=e._bin,c={};return o.readFixed(i,s),s+=4,c.fontRevision=o.readFixed(i,s),s+=4,o.readUint(i,s),s+=4,o.readUint(i,s),s+=4,c.flags=o.readUshort(i,s),s+=2,c.unitsPerEm=o.readUshort(i,s),s+=2,c.created=o.readUint64(i,s),s+=8,c.modified=o.readUint64(i,s),s+=8,c.xMin=o.readShort(i,s),s+=2,c.yMin=o.readShort(i,s),s+=2,c.xMax=o.readShort(i,s),s+=2,c.yMax=o.readShort(i,s),s+=2,c.macStyle=o.readUshort(i,s),s+=2,c.lowestRecPPEM=o.readUshort(i,s),s+=2,c.fontDirectionHint=o.readShort(i,s),s+=2,c.indexToLocFormat=o.readShort(i,s),s+=2,c.glyphDataFormat=o.readShort(i,s),s+=2,c},e.hhea={},e.hhea.parse=function(i,s,a){var o=e._bin,c={};return o.readFixed(i,s),s+=4,c.ascender=o.readShort(i,s),s+=2,c.descender=o.readShort(i,s),s+=2,c.lineGap=o.readShort(i,s),s+=2,c.advanceWidthMax=o.readUshort(i,s),s+=2,c.minLeftSideBearing=o.readShort(i,s),s+=2,c.minRightSideBearing=o.readShort(i,s),s+=2,c.xMaxExtent=o.readShort(i,s),s+=2,c.caretSlopeRise=o.readShort(i,s),s+=2,c.caretSlopeRun=o.readShort(i,s),s+=2,c.caretOffset=o.readShort(i,s),s+=2,s+=8,c.metricDataFormat=o.readShort(i,s),s+=2,c.numberOfHMetrics=o.readUshort(i,s),s+=2,c},e.hmtx={},e.hmtx.parse=function(i,s,a,o){for(var c=e._bin,l={aWidth:[],lsBearing:[]},f=0,u=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(f=c.readUshort(i,s),s+=2,u=c.readShort(i,s),s+=2),l.aWidth.push(f),l.lsBearing.push(u);return l},e.kern={},e.kern.parse=function(i,s,a,o){var c=e._bin,l=c.readUshort(i,s);if(s+=2,l==1)return e.kern.parseV1(i,s-2,a,o);var f=c.readUshort(i,s);s+=2;for(var u={glyph1:[],rval:[]},h=0;h<f;h++){s+=2,a=c.readUshort(i,s),s+=2;var d=c.readUshort(i,s);s+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;s=e.kern.readFormat0(i,s,u)}return u},e.kern.parseV1=function(i,s,a,o){var c=e._bin;c.readFixed(i,s),s+=4;var l=c.readUint(i,s);s+=4;for(var f={glyph1:[],rval:[]},u=0;u<l;u++){c.readUint(i,s),s+=4;var h=c.readUshort(i,s);s+=2,c.readUshort(i,s),s+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;s=e.kern.readFormat0(i,s,f)}return f},e.kern.readFormat0=function(i,s,a){var o=e._bin,c=-1,l=o.readUshort(i,s);s+=2,o.readUshort(i,s),s+=2,o.readUshort(i,s),s+=2,o.readUshort(i,s),s+=2;for(var f=0;f<l;f++){var u=o.readUshort(i,s);s+=2;var h=o.readUshort(i,s);s+=2;var d=o.readShort(i,s);s+=2,u!=c&&(a.glyph1.push(u),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(h),g.vals.push(d),c=u}return s},e.loca={},e.loca.parse=function(i,s,a,o){var c=e._bin,l=[],f=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(f==0)for(var h=0;h<u;h++)l.push(c.readUshort(i,s+(h<<1))<<1);if(f==1)for(h=0;h<u;h++)l.push(c.readUint(i,s+(h<<2)));return l},e.maxp={},e.maxp.parse=function(i,s,a){var o=e._bin,c={},l=o.readUint(i,s);return s+=4,c.numGlyphs=o.readUshort(i,s),s+=2,l==65536&&(c.maxPoints=o.readUshort(i,s),s+=2,c.maxContours=o.readUshort(i,s),s+=2,c.maxCompositePoints=o.readUshort(i,s),s+=2,c.maxCompositeContours=o.readUshort(i,s),s+=2,c.maxZones=o.readUshort(i,s),s+=2,c.maxTwilightPoints=o.readUshort(i,s),s+=2,c.maxStorage=o.readUshort(i,s),s+=2,c.maxFunctionDefs=o.readUshort(i,s),s+=2,c.maxInstructionDefs=o.readUshort(i,s),s+=2,c.maxStackElements=o.readUshort(i,s),s+=2,c.maxSizeOfInstructions=o.readUshort(i,s),s+=2,c.maxComponentElements=o.readUshort(i,s),s+=2,c.maxComponentDepth=o.readUshort(i,s),s+=2),c},e.name={},e.name.parse=function(i,s,a){var o=e._bin,c={};o.readUshort(i,s),s+=2;var l=o.readUshort(i,s);s+=2,o.readUshort(i,s);for(var f,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=s+=2,d=0;d<l;d++){var g=o.readUshort(i,s);s+=2;var _=o.readUshort(i,s);s+=2;var p=o.readUshort(i,s);s+=2;var m=o.readUshort(i,s);s+=2;var T=o.readUshort(i,s);s+=2;var v=o.readUshort(i,s);s+=2;var y,E=u[m],w=h+12*l+v;if(g==0)y=o.readUnicode(i,w,T/2);else if(g==3&&_==0)y=o.readUnicode(i,w,T/2);else if(_==0)y=o.readASCII(i,w,T);else if(_==1)y=o.readUnicode(i,w,T/2);else if(_==3)y=o.readUnicode(i,w,T/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;y=o.readASCII(i,w,T),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var R="p"+g+","+p.toString(16);c[R]==null&&(c[R]={}),c[R][E!==void 0?E:m]=y,c[R]._lang=p}for(var B in c)if(c[B].postScriptName!=null&&c[B]._lang==1033)return c[B];for(var B in c)if(c[B].postScriptName!=null&&c[B]._lang==0)return c[B];for(var B in c)if(c[B].postScriptName!=null&&c[B]._lang==3084)return c[B];for(var B in c)if(c[B].postScriptName!=null)return c[B];for(var B in c){f=B;break}return console.debug("returning name table with languageID "+c[f]._lang),c[f]},e["OS/2"]={},e["OS/2"].parse=function(i,s,a){var o=e._bin.readUshort(i,s);s+=2;var c={};if(o==0)e["OS/2"].version0(i,s,c);else if(o==1)e["OS/2"].version1(i,s,c);else if(o==2||o==3||o==4)e["OS/2"].version2(i,s,c);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,s,c)}return c},e["OS/2"].version0=function(i,s,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(i,s),s+=2,a.usWeightClass=o.readUshort(i,s),s+=2,a.usWidthClass=o.readUshort(i,s),s+=2,a.fsType=o.readUshort(i,s),s+=2,a.ySubscriptXSize=o.readShort(i,s),s+=2,a.ySubscriptYSize=o.readShort(i,s),s+=2,a.ySubscriptXOffset=o.readShort(i,s),s+=2,a.ySubscriptYOffset=o.readShort(i,s),s+=2,a.ySuperscriptXSize=o.readShort(i,s),s+=2,a.ySuperscriptYSize=o.readShort(i,s),s+=2,a.ySuperscriptXOffset=o.readShort(i,s),s+=2,a.ySuperscriptYOffset=o.readShort(i,s),s+=2,a.yStrikeoutSize=o.readShort(i,s),s+=2,a.yStrikeoutPosition=o.readShort(i,s),s+=2,a.sFamilyClass=o.readShort(i,s),s+=2,a.panose=o.readBytes(i,s,10),s+=10,a.ulUnicodeRange1=o.readUint(i,s),s+=4,a.ulUnicodeRange2=o.readUint(i,s),s+=4,a.ulUnicodeRange3=o.readUint(i,s),s+=4,a.ulUnicodeRange4=o.readUint(i,s),s+=4,a.achVendID=[o.readInt8(i,s),o.readInt8(i,s+1),o.readInt8(i,s+2),o.readInt8(i,s+3)],s+=4,a.fsSelection=o.readUshort(i,s),s+=2,a.usFirstCharIndex=o.readUshort(i,s),s+=2,a.usLastCharIndex=o.readUshort(i,s),s+=2,a.sTypoAscender=o.readShort(i,s),s+=2,a.sTypoDescender=o.readShort(i,s),s+=2,a.sTypoLineGap=o.readShort(i,s),s+=2,a.usWinAscent=o.readUshort(i,s),s+=2,a.usWinDescent=o.readUshort(i,s),s+=2},e["OS/2"].version1=function(i,s,a){var o=e._bin;return s=e["OS/2"].version0(i,s,a),a.ulCodePageRange1=o.readUint(i,s),s+=4,a.ulCodePageRange2=o.readUint(i,s),s+=4},e["OS/2"].version2=function(i,s,a){var o=e._bin;return s=e["OS/2"].version1(i,s,a),a.sxHeight=o.readShort(i,s),s+=2,a.sCapHeight=o.readShort(i,s),s+=2,a.usDefault=o.readUshort(i,s),s+=2,a.usBreak=o.readUshort(i,s),s+=2,a.usMaxContext=o.readUshort(i,s),s+=2},e["OS/2"].version5=function(i,s,a){var o=e._bin;return s=e["OS/2"].version2(i,s,a),a.usLowerOpticalPointSize=o.readUshort(i,s),s+=2,a.usUpperOpticalPointSize=o.readUshort(i,s),s+=2},e.post={},e.post.parse=function(i,s,a){var o=e._bin,c={};return c.version=o.readFixed(i,s),s+=4,c.italicAngle=o.readFixed(i,s),s+=4,c.underlinePosition=o.readShort(i,s),s+=2,c.underlineThickness=o.readShort(i,s),s+=2,c},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,s){var a=i.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var c=a.tables[o];if(c.format==0)return s>=c.map.length?0:c.map[s];if(c.format==4){for(var l=-1,f=0;f<c.endCount.length;f++)if(s<=c.endCount[f]){l=f;break}return l==-1||c.startCount[l]>s?0:65535&(c.idRangeOffset[l]!=0?c.glyphIdArray[s-c.startCount[l]+(c.idRangeOffset[l]>>1)-(c.idRangeOffset.length-l)]:s+c.idDelta[l])}if(c.format==12){if(s>c.groups[c.groups.length-1][1])return 0;for(f=0;f<c.groups.length;f++){var u=c.groups[f];if(u[0]<=s&&s<=u[1])return u[2]+(s-u[0])}return 0}throw"unknown cmap table format "+c.format},e.U.glyphToPath=function(i,s){var a={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[s]){var o=i.SVG.entries[s];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[s]=o),o)}if(i.CFF){var c={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},l=i.CFF,f=i.CFF.Private;if(l.ROS){for(var u=0;l.FDSelect[u+2]<=s;)u+=2;f=l.FDArray[l.FDSelect[u+1]].Private}e.U._drawCFF(i.CFF.CharStrings[s],c,l,f,a)}else i.glyf&&e.U._drawGlyf(s,i,a);return a},e.U._drawGlyf=function(i,s,a){var o=s.glyf[i];o==null&&(o=s.glyf[i]=e.glyf._parseGlyf(s,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,s,a))},e.U._simpleGlyph=function(i,s){for(var a=0;a<i.noc;a++){for(var o=a==0?0:i.endPts[a-1]+1,c=i.endPts[a],l=o;l<=c;l++){var f=l==o?c:l-1,u=l==c?o:l+1,h=1&i.flags[l],d=1&i.flags[f],g=1&i.flags[u],_=i.xs[l],p=i.ys[l];if(l==o)if(h){if(!d){e.U.P.moveTo(s,_,p);continue}e.U.P.moveTo(s,i.xs[f],i.ys[f])}else d?e.U.P.moveTo(s,i.xs[f],i.ys[f]):e.U.P.moveTo(s,(i.xs[f]+_)/2,(i.ys[f]+p)/2);h?d&&e.U.P.lineTo(s,_,p):g?e.U.P.qcurveTo(s,_,p,i.xs[u],i.ys[u]):e.U.P.qcurveTo(s,_,p,(_+i.xs[u])/2,(p+i.ys[u])/2)}e.U.P.closePath(s)}},e.U._compoGlyph=function(i,s,a){for(var o=0;o<i.parts.length;o++){var c={cmds:[],crds:[]},l=i.parts[o];e.U._drawGlyf(l.glyphIndex,s,c);for(var f=l.m,u=0;u<c.crds.length;u+=2){var h=c.crds[u],d=c.crds[u+1];a.crds.push(h*f.a+d*f.b+f.tx),a.crds.push(h*f.c+d*f.d+f.ty)}for(u=0;u<c.cmds.length;u++)a.cmds.push(c.cmds[u])}},e.U._getGlyphClass=function(i,s){var a=e._lctf.getInterval(s,i);return a==-1?0:s[a+2]},e.U.getPairAdjustment=function(i,s,a){var o=!1;if(i.GPOS)for(var c=i.GPOS,l=c.lookupList,f=c.featureList,u=[],h=0;h<f.length;h++){var d=f[h];if(d.tag=="kern"){o=!0;for(var g=0;g<d.tab.length;g++)if(!u[d.tab[g]]){u[d.tab[g]]=!0;for(var _=l[d.tab[g]],p=0;p<_.tabs.length;p++)if(_.tabs[p]!=null){var m,T=_.tabs[p];if((!T.coverage||(m=e._lctf.coverageIndex(T.coverage,s))!=-1)&&_.ltype!=1){if(_.ltype==2){var v=null;if(T.fmt==1){var y=T.pairsets[m];for(h=0;h<y.length;h++)y[h].gid2==a&&(v=y[h])}else if(T.fmt==2){var E=e.U._getGlyphClass(s,T.classDef1),w=e.U._getGlyphClass(a,T.classDef2);v=T.matrix[E][w]}if(v){var R=0;return v.val1&&v.val1[2]&&(R+=v.val1[2]),v.val2&&v.val2[0]&&(R+=v.val2[0]),R}}}}}}}if(i.kern&&!o){var B=i.kern.glyph1.indexOf(s);if(B!=-1){var M=i.kern.rval[B].glyph2.indexOf(a);if(M!=-1)return i.kern.rval[B].vals[M]}}return 0},e.U._applySubs=function(i,s,a,o){for(var c=i.length-s-1,l=0;l<a.tabs.length;l++)if(a.tabs[l]!=null){var f,u=a.tabs[l];if(!u.coverage||(f=e._lctf.coverageIndex(u.coverage,i[s]))!=-1){if(a.ltype==1)i[s],u.fmt==1?i[s]=i[s]+u.delta:i[s]=u.newg[f];else if(a.ltype==4)for(var h=u.vals[f],d=0;d<h.length;d++){var g=h[d],_=g.chain.length;if(!(_>c)){for(var p=!0,m=0,T=0;T<_;T++){for(;i[s+m+(1+T)]==-1;)m++;g.chain[T]!=i[s+m+(1+T)]&&(p=!1)}if(p){for(i[s]=g.nglyph,T=0;T<_+m;T++)i[s+T+1]=-1;break}}}else if(a.ltype==5&&u.fmt==2)for(var v=e._lctf.getInterval(u.cDef,i[s]),y=u.cDef[v+2],E=u.scset[y],w=0;w<E.length;w++){var R=E[w],B=R.input;if(!(B.length>c)){for(p=!0,T=0;T<B.length;T++){var M=e._lctf.getInterval(u.cDef,i[s+1+T]);if(v==-1&&u.cDef[M+2]!=B[T]){p=!1;break}}if(p){var A=R.substLookupRecords;for(d=0;d<A.length;d+=2)A[d],A[d+1]}}}else if(a.ltype==6&&u.fmt==3){if(!e.U._glsCovered(i,u.backCvg,s-u.backCvg.length)||!e.U._glsCovered(i,u.inptCvg,s)||!e.U._glsCovered(i,u.ahedCvg,s+u.inptCvg.length))continue;var $=u.lookupRec;for(w=0;w<$.length;w+=2){v=$[w];var N=o[$[w+1]];e.U._applySubs(i,s+v,N,o)}}}}},e.U._glsCovered=function(i,s,a){for(var o=0;o<s.length;o++)if(e._lctf.coverageIndex(s[o],i[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,s,a){for(var o={cmds:[],crds:[]},c=0,l=0;l<s.length;l++){var f=s[l];if(f!=-1){for(var u=l<s.length-1&&s[l+1]!=-1?s[l+1]:0,h=e.U.glyphToPath(i,f),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+c),o.crds.push(h.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);a&&o.cmds.push("X"),c+=i.hmtx.aWidth[f],l<s.length-1&&(c+=e.U.getPairAdjustment(i,f,u))}}return o},e.U.P={},e.U.P.moveTo=function(i,s,a){i.cmds.push("M"),i.crds.push(s,a)},e.U.P.lineTo=function(i,s,a){i.cmds.push("L"),i.crds.push(s,a)},e.U.P.curveTo=function(i,s,a,o,c,l,f){i.cmds.push("C"),i.crds.push(s,a,o,c,l,f)},e.U.P.qcurveTo=function(i,s,a,o,c){i.cmds.push("Q"),i.crds.push(s,a,o,c)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,s,a,o,c){for(var l=s.stack,f=s.nStems,u=s.haveWidth,h=s.width,d=s.open,g=0,_=s.x,p=s.y,m=0,T=0,v=0,y=0,E=0,w=0,R=0,B=0,M=0,A=0,$={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,$);var N=$.val;if(g+=$.size,N=="o1"||N=="o18")l.length%2!=0&&!u&&(h=l.shift()+o.nominalWidthX),f+=l.length>>1,l.length=0,u=!0;else if(N=="o3"||N=="o23")l.length%2!=0&&!u&&(h=l.shift()+o.nominalWidthX),f+=l.length>>1,l.length=0,u=!0;else if(N=="o4")l.length>1&&!u&&(h=l.shift()+o.nominalWidthX,u=!0),d&&e.U.P.closePath(c),p+=l.pop(),e.U.P.moveTo(c,_,p),d=!0;else if(N=="o5")for(;l.length>0;)_+=l.shift(),p+=l.shift(),e.U.P.lineTo(c,_,p);else if(N=="o6"||N=="o7")for(var x=l.length,P=N=="o6",L=0;L<x;L++){var F=l.shift();P?_+=F:p+=F,P=!P,e.U.P.lineTo(c,_,p)}else if(N=="o8"||N=="o24"){x=l.length;for(var I=0;I+6<=x;)m=_+l.shift(),T=p+l.shift(),v=m+l.shift(),y=T+l.shift(),_=v+l.shift(),p=y+l.shift(),e.U.P.curveTo(c,m,T,v,y,_,p),I+=6;N=="o24"&&(_+=l.shift(),p+=l.shift(),e.U.P.lineTo(c,_,p))}else{if(N=="o11")break;if(N=="o1234"||N=="o1235"||N=="o1236"||N=="o1237")N=="o1234"&&(T=p,v=(m=_+l.shift())+l.shift(),A=y=T+l.shift(),w=y,B=p,_=(R=(E=(M=v+l.shift())+l.shift())+l.shift())+l.shift(),e.U.P.curveTo(c,m,T,v,y,M,A),e.U.P.curveTo(c,E,w,R,B,_,p)),N=="o1235"&&(m=_+l.shift(),T=p+l.shift(),v=m+l.shift(),y=T+l.shift(),M=v+l.shift(),A=y+l.shift(),E=M+l.shift(),w=A+l.shift(),R=E+l.shift(),B=w+l.shift(),_=R+l.shift(),p=B+l.shift(),l.shift(),e.U.P.curveTo(c,m,T,v,y,M,A),e.U.P.curveTo(c,E,w,R,B,_,p)),N=="o1236"&&(m=_+l.shift(),T=p+l.shift(),v=m+l.shift(),A=y=T+l.shift(),w=y,R=(E=(M=v+l.shift())+l.shift())+l.shift(),B=w+l.shift(),_=R+l.shift(),e.U.P.curveTo(c,m,T,v,y,M,A),e.U.P.curveTo(c,E,w,R,B,_,p)),N=="o1237"&&(m=_+l.shift(),T=p+l.shift(),v=m+l.shift(),y=T+l.shift(),M=v+l.shift(),A=y+l.shift(),E=M+l.shift(),w=A+l.shift(),R=E+l.shift(),B=w+l.shift(),Math.abs(R-_)>Math.abs(B-p)?_=R+l.shift():p=B+l.shift(),e.U.P.curveTo(c,m,T,v,y,M,A),e.U.P.curveTo(c,E,w,R,B,_,p));else if(N=="o14"){if(l.length>0&&!u&&(h=l.shift()+a.nominalWidthX,u=!0),l.length==4){var W=l.shift(),G=l.shift(),k=l.shift(),b=l.shift(),U=e.CFF.glyphBySE(a,k),j=e.CFF.glyphBySE(a,b);e.U._drawCFF(a.CharStrings[U],s,a,o,c),s.x=W,s.y=G,e.U._drawCFF(a.CharStrings[j],s,a,o,c)}d&&(e.U.P.closePath(c),d=!1)}else if(N=="o19"||N=="o20")l.length%2!=0&&!u&&(h=l.shift()+o.nominalWidthX),f+=l.length>>1,l.length=0,u=!0,g+=f+7>>3;else if(N=="o21")l.length>2&&!u&&(h=l.shift()+o.nominalWidthX,u=!0),p+=l.pop(),_+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,_,p),d=!0;else if(N=="o22")l.length>1&&!u&&(h=l.shift()+o.nominalWidthX,u=!0),_+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,_,p),d=!0;else if(N=="o25"){for(;l.length>6;)_+=l.shift(),p+=l.shift(),e.U.P.lineTo(c,_,p);m=_+l.shift(),T=p+l.shift(),v=m+l.shift(),y=T+l.shift(),_=v+l.shift(),p=y+l.shift(),e.U.P.curveTo(c,m,T,v,y,_,p)}else if(N=="o26")for(l.length%2&&(_+=l.shift());l.length>0;)m=_,T=p+l.shift(),_=v=m+l.shift(),p=(y=T+l.shift())+l.shift(),e.U.P.curveTo(c,m,T,v,y,_,p);else if(N=="o27")for(l.length%2&&(p+=l.shift());l.length>0;)T=p,v=(m=_+l.shift())+l.shift(),y=T+l.shift(),_=v+l.shift(),p=y,e.U.P.curveTo(c,m,T,v,y,_,p);else if(N=="o10"||N=="o29"){var X=N=="o10"?o:a;if(l.length==0)console.debug("error: empty stack");else{var Y=l.pop(),re=X.Subrs[Y+X.Bias];s.x=_,s.y=p,s.nStems=f,s.haveWidth=u,s.width=h,s.open=d,e.U._drawCFF(re,s,a,o,c),_=s.x,p=s.y,f=s.nStems,u=s.haveWidth,h=s.width,d=s.open}}else if(N=="o30"||N=="o31"){var ee=l.length,ie=(I=0,N=="o31");for(I+=ee-(x=-3&ee);I<x;)ie?(T=p,v=(m=_+l.shift())+l.shift(),p=(y=T+l.shift())+l.shift(),x-I==5?(_=v+l.shift(),I++):_=v,ie=!1):(m=_,T=p+l.shift(),v=m+l.shift(),y=T+l.shift(),_=v+l.shift(),x-I==5?(p=y+l.shift(),I++):p=y,ie=!0),e.U.P.curveTo(c,m,T,v,y,_,p),I+=4}else{if((N+"").charAt(0)=="o")throw console.debug("Unknown operation: "+N,i),N;l.push(N)}}}s.x=_,s.y=p,s.nStems=f,s.haveWidth=u,s.width=h,s.open=d};var t=e,n={Typr:t};return r.Typr=t,r.default=n,Object.defineProperty(r,"__esModule",{value:!0}),r}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function X_(){return function(r){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),s=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(N,x){for(var P=new t(31),L=0;L<31;++L)P[L]=x+=1<<N[L-1];var F=new n(P[30]);for(L=1;L<30;++L)for(var I=P[L];I<P[L+1];++I)F[I]=I-P[L]<<5|L;return[P,F]},c=o(i,2),l=c[0],f=c[1];l[28]=258,f[258]=28;for(var u=o(s,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(N,x,P){for(var L=N.length,F=0,I=new t(x);F<L;++F)++I[N[F]-1];var W,G=new t(x);for(F=0;F<x;++F)G[F]=G[F-1]+I[F-1]<<1;if(P){W=new t(1<<x);var k=15-x;for(F=0;F<L;++F)if(N[F])for(var b=F<<4|N[F],U=x-N[F],j=G[N[F]-1]++<<U,X=j|(1<<U)-1;j<=X;++j)W[h[j]>>>k]=b}else for(W=new t(L),F=0;F<L;++F)N[F]&&(W[F]=h[G[N[F]-1]++]>>>15-N[F]);return W},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var T=_(p,9,1),v=_(m,5,1),y=function(N){for(var x=N[0],P=1;P<N.length;++P)N[P]>x&&(x=N[P]);return x},E=function(N,x,P){var L=x/8|0;return(N[L]|N[L+1]<<8)>>(7&x)&P},w=function(N,x){var P=x/8|0;return(N[P]|N[P+1]<<8|N[P+2]<<16)>>(7&x)},R=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B=function(N,x,P){var L=new Error(x||R[N]);if(L.code=N,Error.captureStackTrace&&Error.captureStackTrace(L,B),!P)throw L;return L},M=function(N,x,P){var L=N.length;if(!L||P&&!P.l&&L<5)return x||new e(0);var F=!x||P,I=!P||P.i;P||(P={}),x||(x=new e(3*L));var W,G=function(fe){var be=x.length;if(fe>be){var ke=new e(Math.max(2*be,fe));ke.set(x),x=ke}},k=P.f||0,b=P.p||0,U=P.b||0,j=P.l,X=P.d,Y=P.m,re=P.n,ee=8*L;do{if(!j){P.f=k=E(N,b,1);var ie=E(N,b+1,3);if(b+=3,!ie){var _e=N[(Ae=((W=b)/8|0)+(7&W&&1)+4)-4]|N[Ae-3]<<8,Ie=Ae+_e;if(Ie>L){I&&B(0);break}F&&G(U+_e),x.set(N.subarray(Ae,Ie),U),P.b=U+=_e,P.p=b=8*Ie;continue}if(ie==1)j=T,X=v,Y=9,re=5;else if(ie==2){var pe=E(N,b,31)+257,O=E(N,b+10,15)+4,Ge=pe+E(N,b+5,31)+1;b+=14;for(var Ce=new e(Ge),Ee=new e(19),Re=0;Re<O;++Re)Ee[a[Re]]=E(N,b+3*Re,7);b+=3*O;var Ne=y(Ee),de=(1<<Ne)-1,Se=_(Ee,Ne,1);for(Re=0;Re<Ge;){var Ae,ae=Se[E(N,b,de)];if(b+=15&ae,(Ae=ae>>>4)<16)Ce[Re++]=Ae;else{var Ue=0,C=0;for(Ae==16?(C=3+E(N,b,3),b+=2,Ue=Ce[Re-1]):Ae==17?(C=3+E(N,b,7),b+=3):Ae==18&&(C=11+E(N,b,127),b+=7);C--;)Ce[Re++]=Ue}}var S=Ce.subarray(0,pe),V=Ce.subarray(pe);Y=y(S),re=y(V),j=_(S,Y,1),X=_(V,re,1)}else B(1);if(b>ee){I&&B(0);break}}F&&G(U+131072);for(var me=(1<<Y)-1,te=(1<<re)-1,se=b;;se=b){var ve=(Ue=j[w(N,b)&me])>>>4;if((b+=15&Ue)>ee){I&&B(0);break}if(Ue||B(2),ve<256)x[U++]=ve;else{if(ve==256){se=b,j=null;break}var he=ve-254;if(ve>264){var q=i[Re=ve-257];he=E(N,b,(1<<q)-1)+l[Re],b+=q}var we=X[w(N,b)&te],Me=we>>>4;if(we||B(3),b+=15&we,V=u[Me],Me>3&&(q=s[Me],V+=w(N,b)&(1<<q)-1,b+=q),b>ee){I&&B(0);break}F&&G(U+131072);for(var ye=U+he;U<ye;U+=4)x[U]=x[U-V],x[U+1]=x[U+1-V],x[U+2]=x[U+2-V],x[U+3]=x[U+3-V];U=ye}}P.l=j,P.p=se,P.b=U,j&&(k=1,P.m=Y,P.d=X,P.n=re)}while(!k);return U==x.length?x:function(fe,be,ke){(be==null||be<0)&&(be=0),(ke==null||ke>fe.length)&&(ke=fe.length);var qe=new(fe instanceof t?t:fe instanceof n?n:e)(ke-be);return qe.set(fe.subarray(be,ke)),qe}(x,0,U)},A=new e(0),$=typeof TextDecoder<"u"&&new TextDecoder;try{$.decode(A,{stream:!0})}catch{}return r.convert_streams=function(N){var x=new DataView(N),P=0;function L(){var pe=x.getUint16(P);return P+=2,pe}function F(){var pe=x.getUint32(P);return P+=4,pe}function I(pe){_e.setUint16(Ie,pe),Ie+=2}function W(pe){_e.setUint32(Ie,pe),Ie+=4}for(var G={signature:F(),flavor:F(),length:F(),numTables:L(),reserved:L(),totalSfntSize:F(),majorVersion:L(),minorVersion:L(),metaOffset:F(),metaLength:F(),metaOrigLength:F(),privOffset:F(),privLength:F()},k=0;Math.pow(2,k)<=G.numTables;)k++;k--;for(var b=16*Math.pow(2,k),U=16*G.numTables-b,j=12,X=[],Y=0;Y<G.numTables;Y++)X.push({tag:F(),offset:F(),compLength:F(),origLength:F(),origChecksum:F()}),j+=16;var re,ee=new Uint8Array(12+16*X.length+X.reduce(function(pe,O){return pe+O.origLength+4},0)),ie=ee.buffer,_e=new DataView(ie),Ie=0;return W(G.flavor),I(G.numTables),I(b),I(k),I(U),X.forEach(function(pe){W(pe.tag),W(pe.origChecksum),W(j),W(pe.origLength),pe.outOffset=j,(j+=pe.origLength)%4!=0&&(j+=4-j%4)}),X.forEach(function(pe){var O,Ge=N.slice(pe.offset,pe.offset+pe.compLength);if(pe.compLength!=pe.origLength){var Ce=new Uint8Array(pe.origLength);O=new Uint8Array(Ge,2),M(O,Ce)}else Ce=new Uint8Array(Ge);ee.set(Ce,pe.outOffset);var Ee=0;(j=pe.outOffset+pe.origLength)%4!=0&&(Ee=4-j%4),ee.set(new Uint8Array(Ee).buffer,pe.outOffset+pe.origLength),re=j+Ee}),ie.slice(0,re)},Object.defineProperty(r,"__esModule",{value:!0}),r}({}).convert_streams}function j_(r,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,s=2,a=4,o=8,c=16,l=32;let f;function u(E){if(!f){const w={R:s,L:i,D:a,C:c,U:l,T:o};f=new Map;for(let R in n){let B=0;n[R].split(",").forEach(M=>{let[A,$]=M.split("+");A=parseInt(A,36),$=$?parseInt($,36):0,f.set(B+=A,w[R]);for(let N=$;N--;)f.set(++B,w[R])})}}return f.get(E)||l}const h=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(E){const w=new Uint8Array(E.length);let R=l,B=h,M=-1;for(let A=0;A<E.length;A++){const $=E.codePointAt(A);let N=u($)|0,x=h;N&o||(R&(i|a|c)?N&(s|a|c)?(x=g,(B===h||B===g)&&w[M]++):N&(i|l)&&(B===d||B===_)&&w[M]--:R&(s|l)&&(B===d||B===_)&&w[M]--,B=w[A]=x,R=N,M=A,$>65535&&A++)}return w}function T(E,w){const R=[];for(let M=0;M<w.length;M++){const A=w.codePointAt(M);A>65535&&M++,R.push(r.U.codeToGlyph(E,A))}const B=E.GSUB;if(B){const{lookupList:M,featureList:A}=B;let $;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,x=[];A.forEach(P=>{if(N.test(P.tag))for(let L=0;L<P.tab.length;L++){if(x[P.tab[L]])continue;x[P.tab[L]]=!0;const F=M[P.tab[L]],I=/^(isol|init|fina|medi)$/.test(P.tag);I&&!$&&($=m(w));for(let W=0;W<R.length;W++)(!$||!I||p[$[W]]===P.tag)&&r.U._applySubs(R,W,F,M)}})}return R}function v(...E){for(let w=0;w<E.length;w++)if(typeof E[w]=="number")return E[w]}function y(E){const w=Object.create(null),R=E["OS/2"],B=E.hhea,M=E.head.unitsPerEm,A=v(R&&R.sTypoAscender,B&&B.ascender,M),$={unitsPerEm:M,ascender:A,descender:v(R&&R.sTypoDescender,B&&B.descender,0),capHeight:v(R&&R.sCapHeight,A),xHeight:v(R&&R.sxHeight,A),lineGap:v(R&&R.sTypoLineGap,B&&B.lineGap),supportsCodePoint(N){return r.U.codeToGlyph(E,N)>0},forEachGlyph(N,x,P,L){let F=0;const I=1/$.unitsPerEm*x,W=T(E,N);let G=0,k=-1;return W.forEach((b,U)=>{if(b!==-1){let j=w[b];if(!j){const{cmds:X,crds:Y}=r.U.glyphToPath(E,b);let re="",ee=0;for(let O=0,Ge=X.length;O<Ge;O++){const Ce=t[X[O]];re+=X[O];for(let Ee=1;Ee<=Ce;Ee++)re+=(Ee>1?",":"")+Y[ee++]}let ie,_e,Ie,pe;if(Y.length){ie=_e=1/0,Ie=pe=-1/0;for(let O=0,Ge=Y.length;O<Ge;O+=2){let Ce=Y[O],Ee=Y[O+1];Ce<ie&&(ie=Ce),Ee<_e&&(_e=Ee),Ce>Ie&&(Ie=Ce),Ee>pe&&(pe=Ee)}}else ie=Ie=_e=pe=0;j=w[b]={index:b,advanceWidth:E.hmtx.aWidth[b],xMin:ie,yMin:_e,xMax:Ie,yMax:pe,path:re,pathCommandCount:X.length}}k!==-1&&(F+=r.U.getPairAdjustment(E,k,b)*I),L.call(null,j,F,G),j.advanceWidth&&(F+=j.advanceWidth*I),P&&(F+=P*x),k=b}G+=N.codePointAt(G)>65535?2:1}),F}};return $}return function(w){const R=new Uint8Array(w,0,4),B=r._bin.readASCII(R,0,4);if(B==="wOFF")w=e(w);else if(B==="wOF2")throw new Error("woff2 fonts not supported");return y(r.parse(w)[0])}}const Y_=mr({name:"Typr Font Parser",dependencies:[W_,X_,j_],init(r,e,t){const n=r(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.0 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function q_(){return function(r){var e=function(){this.buckets=new Map};e.prototype.add=function(v){var y=v>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&v))},e.prototype.has=function(v){var y=this.buckets.get(v>>5);return y!==void 0&&(y&1<<(31&v))!=0},e.prototype.serialize=function(){var v=[];return this.buckets.forEach(function(y,E){v.push((+E).toString(36)+":"+y.toString(36))}),v.join(",")},e.prototype.deserialize=function(v){var y=this;this.buckets.clear(),v.split(",").forEach(function(E){var w=E.split(":");y.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function s(v){var y=function(w){return w&i}(v).toString(16),E=function(w){return(w&i)+t-1}(v).toString(16);return"codepoint-index/plane"+(v>>16)+"/"+y+"-"+E+".json"}function a(v,y){var E=v&n,w=y.codePointAt(E/6|0);return((w=(w||48)-48)&1<<E%6)!=0}function o(v,y){var E;(E=v,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(R){return parseInt(R.trim(),16)})})).forEach(function(w){var R=w[0],B=w[1];B===void 0&&(B=R),y(R,B)})}function c(v,y){o(v,function(E,w){for(var R=E;R<=w;R++)y(R)})}var l={},f={},u=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.0/packages/data";function d(v){var y=u.get(v);return y||(y=new e,c(v.ranges,function(E){return y.add(E)}),u.set(v,y)),y}var g,_=new Map;function p(v,y,E){return v[y]?y:v[E]?E:function(w){for(var R in w)return R}(v)}function m(v,y){var E=y;if(!v.includes(E)){E=1/0;for(var w=0;w<v.length;w++)Math.abs(v[w]-y)<Math.abs(E-y)&&(E=v[w])}return E}function T(v){return g||(g=new Set,c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(y){g.add(y)})),g.has(v)}return r.CodePointSet=e,r.clearCache=function(){l={},f={}},r.getFontsForString=function(v,y){y===void 0&&(y={});var E=y.lang;E===void 0&&(E="en");var w=y.category;w===void 0&&(w="sans-serif");var R=y.style;R===void 0&&(R="normal");var B=y.weight;B===void 0&&(B=400);var M=(y.dataUrl||h).replace(/\/$/g,""),A=new Map,$=new Uint8Array(v.length),N={},x={},P=new Array(v.length),L=new Map,F=!1;function I(k){var b=_.get(k);return b||(b=fetch(M+"/"+k).then(function(U){if(!U.ok)throw new Error(U.statusText);return U.json().then(function(j){if(!Array.isArray(j)||j[0]!==1)throw new Error("Incorrect schema version; need 1, got "+j[0]);return j[1]})}).catch(function(U){if(M!==h)return F||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+U.message),F=!0),M=h,_.delete(k),I(k);throw U}),_.set(k,b)),b}for(var W=function(k){var b=v.codePointAt(k),U=s(b);P[k]=U,l[U]||L.has(U)||L.set(U,I(U).then(function(j){l[U]=j})),b>65535&&(k++,G=k)},G=0;G<v.length;G++)W(G);return Promise.all(L.values()).then(function(){L.clear();for(var k=function(U){var j=v.codePointAt(U),X=null,Y=l[P[U]];e:for(var re in Y){var ee=x[re];if(ee===void 0&&(ee=x[re]=new RegExp(re).test(E)),ee){for(var ie in Y[re])if(a(j,Y[re][ie])){X=ie;break e}}}X||(console.debug("No font coverage for U+"+j.toString(16)),X="latin"),P[U]=X,f[X]||L.has(X)||L.set(X,I("font-meta/"+X+".json").then(function(_e){f[X]=_e})),j>65535&&(U++,b=U)},b=0;b<v.length;b++)k(b);return Promise.all(L.values())}).then(function(){for(var k,b=null,U=0;U<v.length;U++){var j=v.codePointAt(U);if(b&&(T(j)||d(b).has(j)))$[U]=$[U-1];else{b=f[P[U]];var X=N[b.id];if(!X){var Y=b.typeforms,re=p(Y,w,"sans-serif"),ee=p(Y[re],R,"normal"),ie=m((k=Y[re])===null||k===void 0?void 0:k[ee],B);X=N[b.id]=M+"/font-files/"+b.id+"/"+re+"."+ee+"."+ie+".woff"}var _e=A.get(X);_e==null&&(_e=A.size,A.set(X,_e)),$[U]=_e}j>65535&&(U++,$[U]=$[U-1])}return{fontUrls:Array.from(A.keys()),chars:$}})},Object.defineProperty(r,"__esModule",{value:!0}),r}({})}function K_(r,e){const t=Object.create(null),n=Object.create(null);function i(a,o){const c=l=>{console.error(`Failure loading font ${a}`,l)};try{const l=new XMLHttpRequest;l.open("get",a,!0),l.responseType="arraybuffer",l.onload=function(){if(l.status>=400)c(new Error(l.statusText));else if(l.status>0)try{const f=r(l.response);f.src=a,o(f)}catch(f){c(f)}},l.onerror=c,l.send()}catch(l){c(l)}}function s(a,o){let c=t[a];c?o(c):n[a]?n[a].push(o):(n[a]=[o],i(a,l=>{l.src=a,t[a]=l,n[a].forEach(f=>f(l)),delete n[a]}))}return function(a,o,{lang:c,fonts:l=[],style:f="normal",weight:u="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(a.length),g=[];a.length||T();const _=new Map,p=[];if(f!=="italic"&&(f="normal"),typeof u!="number"&&(u=u==="bold"?700:400),l&&!Array.isArray(l)&&(l=[l]),l=l.slice().filter(y=>!y.lang||y.lang.test(c)).reverse(),l.length){let R=0;(function B(M=0){for(let A=M,$=a.length;A<$;A++){const N=a.codePointAt(A);if(R===1&&g[d[A-1]].supportsCodePoint(N)||/\s/.test(a[A]))d[A]=d[A-1],R===2&&(p[p.length-1][1]=A);else for(let x=d[A],P=l.length;x<=P;x++)if(x===P){const L=R===2?p[p.length-1]:p[p.length]=[A,A];L[1]=A,R=2}else{d[A]=x;const{src:L,unicodeRange:F}=l[x];if(!F||v(N,F)){const I=t[L];if(!I){s(L,()=>{B(A)});return}if(I.supportsCodePoint(N)){let W=_.get(I);typeof W!="number"&&(W=g.length,g.push(I),_.set(I,W)),d[A]=W,R=1;break}}}N>65535&&A+1<$&&(d[A+1]=d[A],A++,R===2&&(p[p.length-1][1]=A))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){const y=p.map(E=>a.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(y,{lang:c,style:f,weight:u,dataUrl:h}).then(({fontUrls:E,chars:w})=>{const R=g.length;let B=0;p.forEach(A=>{for(let $=0,N=A[1]-A[0];$<=N;$++)d[A[0]+$]=w[B++]+R;B++});let M=0;E.forEach((A,$)=>{s(A,N=>{g[$+R]=N,++M===E.length&&T()})})})}else T()}function T(){o({chars:d,fonts:g})}function v(y,E){for(let w=0;w<E.length;w++){const[R,B=R]=E[w];if(R<=y&&y<=B)return!0}return!1}}}const J_=mr({name:"FontResolver",dependencies:[K_,Y_,q_],init(r,e,t){return r(e,t())}});function $_(r,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",s=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:_,fonts:p,style:m,weight:T,preResolvedFonts:v,unicodeFontsURL:y},E){const w=({chars:R,fonts:B})=>{let M,A;const $=[];for(let N=0;N<R.length;N++)R[N]!==A?(A=R[N],$.push(M={start:N,end:N,fontObj:B[R[N]]})):M.end=N;E($)};v?w(v):r(g,w,{lang:_,fonts:p,style:m,weight:T,unicodeFontsURL:y})}function o({text:g="",font:_,lang:p="en",sdfGlyphSize:m=64,fontSize:T=400,fontWeight:v=1,fontStyle:y="normal",letterSpacing:E=0,lineHeight:w="normal",maxWidth:R=1/0,direction:B,textAlign:M="left",textIndent:A=0,whiteSpace:$="normal",overflowWrap:N="normal",anchorX:x=0,anchorY:P=0,metricsOnly:L=!1,unicodeFontsURL:F,preResolvedFonts:I=null,includeCaretPositions:W=!1,chunkedBoundsSize:G=8192,colorRanges:k=null},b){const U=u(),j={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),T=+T,E=+E,R=+R,w=w||"normal",A=+A,a({text:g,lang:p,style:y,weight:v,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:F,preResolvedFonts:I},X=>{j.fontLoad=u()-U;const Y=isFinite(R);let re=null,ee=null,ie=null,_e=null,Ie=null,pe=null,O=null,Ge=null,Ce=0,Ee=0,Re=$!=="nowrap";const Ne=new Map,de=u();let Se=A,Ae=0,ae=new h;const Ue=[ae];X.forEach(te=>{const{fontObj:se}=te,{ascender:ve,descender:he,unitsPerEm:q,lineGap:we,capHeight:Me,xHeight:ye}=se;let fe=Ne.get(se);if(!fe){const le=T/q,K=w==="normal"?(ve-he+we)*le:w*T,Te=(K-(ve-he)*le)/2,ge=Math.min(K,(ve-he)*le),De=(ve+he)/2*le+ge/2;fe={index:Ne.size,src:se.src,fontObj:se,fontSizeMult:le,unitsPerEm:q,ascender:ve*le,descender:he*le,capHeight:Me*le,xHeight:ye*le,lineHeight:K,baseline:-Te-ve*le,caretTop:(ve+he)/2*le+ge/2,caretBottom:De-ge},Ne.set(se,fe)}const{fontSizeMult:be}=fe,ke=g.slice(te.start,te.end+1);let qe,z;se.forEachGlyph(ke,T,E,(le,K,Te)=>{K+=Ae,Te+=te.start,qe=K,z=le;const ge=g.charAt(Te),De=le.advanceWidth*be,Ye=ae.count;let ze;if("isEmpty"in le||(le.isWhitespace=!!ge&&new RegExp(i).test(ge),le.canBreakAfter=!!ge&&s.test(ge),le.isEmpty=le.xMin===le.xMax||le.yMin===le.yMax||n.test(ge)),!le.isWhitespace&&!le.isEmpty&&Ee++,Re&&Y&&!le.isWhitespace&&K+De+Se>R&&Ye){if(ae.glyphAt(Ye-1).glyphObj.canBreakAfter)ze=new h,Se=-K;else for(let We=Ye;We--;)if(We===0&&N==="break-word"){ze=new h,Se=-K;break}else if(ae.glyphAt(We).glyphObj.canBreakAfter){ze=ae.splitAt(We+1);const ct=ze.glyphAt(0).x;Se-=ct;for(let it=ze.count;it--;)ze.glyphAt(it).x-=ct;break}ze&&(ae.isSoftWrapped=!0,ae=ze,Ue.push(ae),Ce=R)}let Xe=ae.glyphAt(ae.count);Xe.glyphObj=le,Xe.x=K+Se,Xe.width=De,Xe.charIndex=Te,Xe.fontData=fe,ge===`
`&&(ae=new h,Ue.push(ae),Se=-(K+De+E*T)+A)}),Ae=qe+z.advanceWidth*be+E*T});let C=0;Ue.forEach(te=>{let se=!0;for(let ve=te.count;ve--;){const he=te.glyphAt(ve);se&&!he.glyphObj.isWhitespace&&(te.width=he.x+he.width,te.width>Ce&&(Ce=te.width),se=!1);let{lineHeight:q,capHeight:we,xHeight:Me,baseline:ye}=he.fontData;q>te.lineHeight&&(te.lineHeight=q);const fe=ye-te.baseline;fe<0&&(te.baseline+=fe,te.cap+=fe,te.ex+=fe),te.cap=Math.max(te.cap,te.baseline+we),te.ex=Math.max(te.ex,te.baseline+Me)}te.baseline-=C,te.cap-=C,te.ex-=C,C+=te.lineHeight});let S=0,V=0;if(x&&(typeof x=="number"?S=-x:typeof x=="string"&&(S=-Ce*(x==="left"?0:x==="center"?.5:x==="right"?1:l(x)))),P&&(typeof P=="number"?V=-P:typeof P=="string"&&(V=P==="top"?0:P==="top-baseline"?-Ue[0].baseline:P==="top-cap"?-Ue[0].cap:P==="top-ex"?-Ue[0].ex:P==="middle"?C/2:P==="bottom"?C:P==="bottom-baseline"?Ue[Ue.length-1].baseline:l(P)*C)),!L){const te=e.getEmbeddingLevels(g,B);re=new Uint16Array(Ee),ee=new Uint8Array(Ee),ie=new Float32Array(Ee*2),_e={},O=[1/0,1/0,-1/0,-1/0],Ge=[],W&&(pe=new Float32Array(g.length*4)),k&&(Ie=new Uint8Array(Ee*3));let se=0,ve=-1,he=-1,q,we;if(Ue.forEach((Me,ye)=>{let{count:fe,width:be}=Me;if(fe>0){let ke=0;for(let ge=fe;ge--&&Me.glyphAt(ge).glyphObj.isWhitespace;)ke++;let qe=0,z=0;if(M==="center")qe=(Ce-be)/2;else if(M==="right")qe=Ce-be;else if(M==="justify"&&Me.isSoftWrapped){let ge=0;for(let De=fe-ke;De--;)Me.glyphAt(De).glyphObj.isWhitespace&&ge++;z=(Ce-be)/ge}if(z||qe){let ge=0;for(let De=0;De<fe;De++){let Ye=Me.glyphAt(De);const ze=Ye.glyphObj;Ye.x+=qe+ge,z!==0&&ze.isWhitespace&&De<fe-ke&&(ge+=z,Ye.width+=z)}}const le=e.getReorderSegments(g,te,Me.glyphAt(0).charIndex,Me.glyphAt(Me.count-1).charIndex);for(let ge=0;ge<le.length;ge++){const[De,Ye]=le[ge];let ze=1/0,Xe=-1/0;for(let We=0;We<fe;We++)if(Me.glyphAt(We).charIndex>=De){let ct=We,it=We;for(;it<fe;it++){let xt=Me.glyphAt(it);if(xt.charIndex>Ye)break;it<fe-ke&&(ze=Math.min(ze,xt.x),Xe=Math.max(Xe,xt.x+xt.width))}for(let xt=ct;xt<it;xt++){const Wt=Me.glyphAt(xt);Wt.x=Xe-(Wt.x+Wt.width-ze)}break}}let K;const Te=ge=>K=ge;for(let ge=0;ge<fe;ge++){const De=Me.glyphAt(ge);K=De.glyphObj;const Ye=K.index,ze=te.levels[De.charIndex]&1;if(ze){const Xe=e.getMirroredCharacter(g[De.charIndex]);Xe&&De.fontData.fontObj.forEachGlyph(Xe,0,0,Te)}if(W){const{charIndex:Xe,fontData:We}=De,ct=De.x+S,it=De.x+De.width+S;pe[Xe*4]=ze?it:ct,pe[Xe*4+1]=ze?ct:it,pe[Xe*4+2]=Me.baseline+We.caretBottom+V,pe[Xe*4+3]=Me.baseline+We.caretTop+V;const xt=Xe-ve;xt>1&&f(pe,ve,xt),ve=Xe}if(k){const{charIndex:Xe}=De;for(;Xe>he;)he++,k.hasOwnProperty(he)&&(we=k[he])}if(!K.isWhitespace&&!K.isEmpty){const Xe=se++,{fontSizeMult:We,src:ct,index:it}=De.fontData,xt=_e[ct]||(_e[ct]={});xt[Ye]||(xt[Ye]={path:K.path,pathBounds:[K.xMin,K.yMin,K.xMax,K.yMax]});const Wt=De.x+S,wn=Me.baseline+V;ie[Xe*2]=Wt,ie[Xe*2+1]=wn;const Xt=Wt+K.xMin*We,pn=wn+K.yMin*We,sn=Wt+K.xMax*We,an=wn+K.yMax*We;Xt<O[0]&&(O[0]=Xt),pn<O[1]&&(O[1]=pn),sn>O[2]&&(O[2]=sn),an>O[3]&&(O[3]=an),Xe%G===0&&(q={start:Xe,end:Xe,rect:[1/0,1/0,-1/0,-1/0]},Ge.push(q)),q.end++;const wt=q.rect;if(Xt<wt[0]&&(wt[0]=Xt),pn<wt[1]&&(wt[1]=pn),sn>wt[2]&&(wt[2]=sn),an>wt[3]&&(wt[3]=an),re[Xe]=Ye,ee[Xe]=it,k){const kn=Xe*3;Ie[kn]=we>>16&255,Ie[kn+1]=we>>8&255,Ie[kn+2]=we&255}}}}}),pe){const Me=g.length-ve;Me>1&&f(pe,ve,Me)}}const me=[];Ne.forEach(({index:te,src:se,unitsPerEm:ve,ascender:he,descender:q,lineHeight:we,capHeight:Me,xHeight:ye})=>{me[te]={src:se,unitsPerEm:ve,ascender:he,descender:q,lineHeight:we,capHeight:Me,xHeight:ye}}),j.typesetting=u()-de,b({glyphIds:re,glyphFontIndices:ee,glyphPositions:ie,glyphData:_e,fontData:me,caretPositions:pe,glyphColors:Ie,chunkedBounds:Ge,fontSize:T,topBaseline:V+Ue[0].baseline,blockBounds:[S,V-C,S+Ce,V],visibleBounds:O,timings:j})})}function c(g,_){o({...g,metricsOnly:!0},p=>{const[m,T,v,y]=p.blockBounds;_({width:v-m,height:y-T})})}function l(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function f(g,_,p){const m=g[_*4],T=g[_*4+1],v=g[_*4+2],y=g[_*4+3],E=(T-m)/p;for(let w=0;w<p;w++){const R=(_+w)*4;g[R]=m+E*w,g[R+1]=m+E*(w+1),g[R+2]=v,g[R+3]=y}}function u(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*d.length),_}},h.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(T){this.data[this.index*d.length+p]=T}}),g),{data:null,index:0}),{typeset:o,measure:c}}const bi=()=>(self.performance||Date).now(),ra=su();let Hl;function Z_(r,e,t,n,i,s,a,o,c,l,f=!0){return f?ev(r,e,t,n,i,s,a,o,c,l).then(null,u=>(Hl||(console.warn("WebGL SDF generation failed, falling back to JS",u),Hl=!0),Xl(r,e,t,n,i,s,a,o,c,l))):Xl(r,e,t,n,i,s,a,o,c,l)}const ks=[],Q_=5;let vo=0;function ou(){const r=bi();for(;ks.length&&bi()-r<Q_;)ks.shift()();vo=ks.length?setTimeout(ou,0):0}const ev=(...r)=>new Promise((e,t)=>{ks.push(()=>{const n=bi();try{ra.webgl.generateIntoCanvas(...r),e({timing:bi()-n})}catch(i){t(i)}}),vo||(vo=setTimeout(ou,0))}),tv=4,nv=2e3,Wl={};let iv=0;function Xl(r,e,t,n,i,s,a,o,c,l){const f="TroikaTextSDFGenerator_JS_"+iv++%tv;let u=Wl[f];return u||(u=Wl[f]={workerModule:mr({name:f,workerId:f,dependencies:[su,bi],init(h,d){const g=h().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(r,e,t,n,i,s).then(({textureData:h,timing:d})=>{const g=bi(),_=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)_[p*4+l]=h[p];return ra.webglUtils.renderImageData(a,_,o,c,r,e,1<<3-l),d+=bi()-g,--u.requests===0&&(u.idleTimer=setTimeout(()=>{I_(f)},nv)),{timing:d}})}function rv(r){r._warm||(ra.webgl.isSupported(r),r._warm=!0)}const sv=ra.webglUtils.resizeWebGLCanvasWithoutClearing,er={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},av=new tt;function Ji(){return(self.performance||Date).now()}const jl=Object.create(null);function ov(r,e){r=lv({},r);const t=Ji(),{defaultFontURL:n}=er,i=[];if(n&&i.push({label:"default",src:Yl(n)}),r.font&&i.push({label:"user",src:Yl(r.font)}),r.font=i,r.text=""+r.text,r.sdfGlyphSize=r.sdfGlyphSize||er.sdfGlyphSize,r.unicodeFontsURL=r.unicodeFontsURL||er.unicodeFontsURL,r.colorRanges!=null){let h={};for(let d in r.colorRanges)if(r.colorRanges.hasOwnProperty(d)){let g=r.colorRanges[d];typeof g!="number"&&(g=av.set(g).getHex()),h[d]=g}r.colorRanges=h}Object.freeze(r);const{textureWidth:s,sdfExponent:a}=er,{sdfGlyphSize:o}=r,c=s/o*4;let l=jl[o];if(!l){const h=document.createElement("canvas");h.width=s,h.height=o*256/c,l=jl[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:h,sdfTexture:new Vt(h,void 0,void 0,void 0,Rt,Rt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,cv(l)}const{sdfTexture:f,sdfCanvas:u}=l;uv(r).then(h=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:p,fontSize:m,timings:T}=h,v=[],y=new Float32Array(d.length*4);let E=0,w=0;const R=Ji(),B=_.map(x=>{let P=l.glyphsByFont.get(x.src);return P||l.glyphsByFont.set(x.src,P=new Map),P});d.forEach((x,P)=>{const L=g[P],{src:F,unitsPerEm:I}=_[L];let W=B[L].get(x);if(!W){const{path:j,pathBounds:X}=h.glyphData[F][x],Y=Math.max(X[2]-X[0],X[3]-X[1])/o*(er.sdfMargin*o+.5),re=l.glyphCount++,ee=[X[0]-Y,X[1]-Y,X[2]+Y,X[3]+Y];B[L].set(x,W={path:j,atlasIndex:re,sdfViewBox:ee}),v.push(W)}const{sdfViewBox:G}=W,k=p[w++],b=p[w++],U=m/I;y[E++]=k+G[0]*U,y[E++]=b+G[1]*U,y[E++]=k+G[2]*U,y[E++]=b+G[3]*U,d[P]=W.atlasIndex}),T.quads=(T.quads||0)+(Ji()-R);const M=Ji();T.sdf={};const A=u.height,$=Math.ceil(l.glyphCount/c),N=Math.pow(2,Math.ceil(Math.log2($*o)));N>A&&(console.info(`Increasing SDF texture size ${A}->${N}`),sv(u,s,N),f.dispose()),Promise.all(v.map(x=>cu(x,l,r.gpuAccelerateSDF).then(({timing:P})=>{T.sdf[x.atlasIndex]=P}))).then(()=>{v.length&&!l.contextLost&&(lu(l),f.needsUpdate=!0),T.sdfTotal=Ji()-M,T.total=Ji()-t,e(Object.freeze({parameters:r,sdfTexture:f,sdfGlyphSize:o,sdfExponent:a,glyphBounds:y,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||rv(u)})}function cu({path:r,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:s},a){if(s)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:c}=er,l=Math.max(t[2]-t[0],t[3]-t[1]),f=Math.floor(e/4),u=f%(o/n)*n,h=Math.floor(f/(o/n))*n,d=e%4;return Z_(n,n,r,t,l,c,i,u,h,d,a)}function cv(r){const e=r.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),r.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),r.contextLost=!1;const n=[];r.glyphsByFont.forEach(i=>{i.forEach(s=>{n.push(cu(s,r,!0))})}),Promise.all(n).then(()=>{lu(r),r.sdfTexture.needsUpdate=!0})})}function lv(r,e){for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}let Ps;function Yl(r){return Ps||(Ps=typeof document>"u"?{}:document.createElement("a")),Ps.href=r,Ps.href}function lu(r){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=r,{width:n,height:i}=e,s=r.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==n*i*4)&&(a=new Uint8Array(n*i*4),t.image={width:n,height:i,data:a},t.flipY=!1,t.isDataTexture=!0),s.readPixels(0,0,n,i,s.RGBA,s.UNSIGNED_BYTE,a)}}const fv=mr({name:"Typesetter",dependencies:[$_,J_,O_],init(r,e,t){return r(e,t())}}),uv=mr({name:"Typesetter",dependencies:[fv],init(r){return function(e){return new Promise(t=>{r.typeset(e,t)})}},getTransferables(r){const e=[];for(let t in r)r[t]&&r[t].buffer&&e.push(r[t].buffer);return e}}),ql={};function hv(r){let e=ql[r];if(!e){const t=new oi(1,1,r,r),n=t.clone(),i=t.attributes,s=n.attributes,a=new Rn,o=i.uv.count;for(let c=0;c<o;c++)s.position.array[c*3]*=-1,s.normal.array[c*3+2]*=-1;["position","normal","uv"].forEach(c=>{a.setAttribute(c,new dn([...i[c].array,...s[c].array],i[c].itemSize))}),a.setIndex([...t.index.array,...n.index.array.map(c=>c+o)]),a.translate(.5,.5,0),e=ql[r]=a}return e}const dv="aTroikaGlyphBounds",Kl="aTroikaGlyphIndex",pv="aTroikaGlyphColor";class mv extends w_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new $r,this.boundingBox=new hr}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===zt?t/2:0,e===bn?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=hv(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,s){Ka(this,dv,e,4),Ka(this,Kl,t,1),Ka(this,pv,s,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:s,min:a,max:o,sin:c,cos:l}=Math,f=i/2,u=i*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,_=s((d+f)/u)!==s((g+f)/u)?-h:a(c(d)*h,c(g)*h),p=s((d-f)/u)!==s((g-f)/u)?h:o(c(d)*h,c(g)*h),m=s((d+i)/u)!==s((g+i)/u)?h*2:o(h-l(d)*h,h-l(g)*h);n.min.set(_,e[1],t<0?-m:0),n.max.set(p,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Kl).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let s=n[i].rect;if(s[1]<e.w&&s[3]>e.y&&s[0]<e.z&&s[2]>e.x)break}this.instanceCount=t}}function Ka(r,e,t,n){const i=r.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(r.setAttribute(e,new y_(t,n)),delete r._maxInstanceCount,r.dispose()):i&&r.deleteAttribute(e)}const gv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,_v=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,vv=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,xv=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function yv(r){const e=_o(r,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new nt},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new _t(0,0,0,0)},uTroikaClipRect:{value:new _t(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new nt},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new tt},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ze},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:gv,vertexTransform:_v,fragmentDefs:vv,fragmentColorTransform:xv,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(au,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ho=new na({color:16777215,side:bn,transparent:!0}),Jl=8421504,$l=new mt,Us=new ne,Ja=new ne,Lr=[],Sv=new ne,$a="+x+y";function Zl(r){return Array.isArray(r)?r[0]:r}let fu=()=>{const r=new rn(new oi(1,1),Ho);return fu=()=>r,r},uu=()=>{const r=new rn(new oi(1,1,32,1),Ho);return uu=()=>r,r};const Mv={type:"syncstart"},bv={type:"synccomplete"},hu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Ev=hu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class xo extends rn{constructor(){const e=new mv;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang="en",this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Jl,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=$a,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Mv),ov({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(bv),e&&e()})))}onBeforeRender(e,t,n,i,s,a){this.sync(),s.isTroikaTextMaterial&&this._prepareForRender(s),s._hadOwnSide=s.hasOwnProperty("side"),this.geometry.setSide(s._actualSide=s.side),s.side=Yn}onAfterRender(e,t,n,i,s,a){s._hadOwnSide?s.side=s._actualSide:delete s.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Ho.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=yv(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Zl(this.material).getDepthMaterial()}get customDistanceMaterial(){return Zl(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:c}=i;n.uTroikaSDFTexture.value=o,n.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(c),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let l=0,f=0,u=0,h,d,g,_=0,p=0;if(t){let{outlineWidth:T,outlineOffsetX:v,outlineOffsetY:y,outlineBlur:E,outlineOpacity:w}=this;l=this._parsePercent(T)||0,f=Math.max(0,this._parsePercent(E)||0),h=w,_=this._parsePercent(v)||0,p=this._parsePercent(y)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(g=this.strokeColor,n.uTroikaStrokeColor.value.set(g??Jl),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;n.uTroikaDistanceOffset.value=l,n.uTroikaPositionOffset.value.set(_,p),n.uTroikaBlurRadius.value=f,n.uTroikaStrokeWidth.value=u,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=h??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const T=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(c[0]-T,c[1]-T,c[2]+T,c[3]+T)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const s=t?this.outlineColor||0:this.color;if(s==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new tt;(s!==o._input||typeof s=="object")&&o.set(o._input=s)}let a=this.orientation||$a;if(a!==e._orientation){let o=n.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let c=a!==$a&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(c){let[,l,f,u,h]=c;Us.set(0,0,0)[f]=l==="-"?1:-1,Ja.set(0,0,0)[h]=u==="-"?-1:1,$l.lookAt(Sv,Us.cross(Ja),Ja),o.setFromMatrix4($l)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new nt){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new nt){return Us.copy(e),this.localPositionToTextCoords(this.worldToLocal(Us),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const s=n.blockBounds,a=i?uu():fu(),o=a.geometry,{position:c,uv:l}=o.attributes;for(let f=0;f<l.count;f++){let u=s[0]+l.getX(f)*(s[2]-s[0]);const h=s[1]+l.getY(f)*(s[3]-s[1]);let d=0;i&&(d=i-Math.cos(u/i)*i,u=Math.sin(u/i)*i),c.setXYZ(f,u,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Lr.length=0,a.raycast(e,Lr);for(let f=0;f<Lr.length;f++)Lr[f].object=this,t.push(Lr[f])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Ev.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}hu.forEach(r=>{const e="_private_"+r;Object.defineProperty(xo.prototype,r,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});function du(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var pu={exports:{}};(function(r){console.log("object"),r.exports=e;function e(n){if(n)return t(n)}function t(n){for(var i in e.prototype)n[i]=e.prototype[i];return n}e.prototype.on=e.prototype.addEventListener=function(n,i){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(i),this},e.prototype.once=function(n,i){function s(){this.off(n,s),i.apply(this,arguments)}return s.fn=i,this.on(n,s),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(n,i){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var s=this._callbacks["$"+n];if(!s)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var a,o=0;o<s.length;o++)if(a=s[o],a===i||a.fn===i){s.splice(o,1);break}return s.length===0&&delete this._callbacks["$"+n],this},e.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var i=new Array(arguments.length-1),s=this._callbacks["$"+n],a=1;a<arguments.length;a++)i[a-1]=arguments[a];if(s){s=s.slice(0);for(var a=0,o=s.length;a<o;++a)s[a].apply(this,i)}return this},e.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]},e.prototype.hasListeners=function(n){return!!this.listeners(n).length}})(pu);var Tv=pu.exports;const Cv=du(Tv);class Av extends Emitter{constructor(t,n,i){super();st(this,"uid",null);st(this,"profile",null);st(this,"state","loading");st(this,"peer",null);st(this,"connection",null);this.uid=t,this.profile=n,this.peerServer=i,this.setState("loading")}async setState(t){switch(this.state=t,t){case"loading":this.validateProfile(),this.setState("connecting");break;case"connecting":this.connect();break;case"peernegotiating":this.initiatePeerHandshake();break;case"peerconnected":this.setState("ready");break}this.fire("statechange",this.state)}fire(t,n){this.emit(t,{uid:this.uid,...n})}validateProfile(){this.profile||(this.profile={name:"Anonymous",score:0})}async connect(){this.connection=await this.peerServer.connect(this.uid),this.connection.on("open",t=>{this.setState("peernegotiating")}),this.connection.on("connection",t=>{this.connection=t,this.setState("peerconnected")}),this.connection.on("data",t=>{const n=t.event;switch(t.uid,n){case"handshake":t.data.step==="accept"&&(this.connection.send({uid:this.peerServer._id,event:"handshake",data:{step:"complete"}}),this.setState("peerconnected"));break}})}initiatePeerHandshake(){this.connection.send({uid:this.peerServer._id,event:"handshake",data:{step:"start"}})}}class Rv{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return wv(e).buffer}}function wv(r){let e=0;for(const i of r)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of r){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(s,n),n+=i.byteLength}return t}function mu(r){return new Pv(r).unpack()}function gu(r){const e=new Uv;return e.pack(r),e.getBuffer()}class Pv{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",s,a;for(;n<e;)s=t[n],s<160?(a=s,n++):(s^192)<32?(a=(s&31)<<6|t[n+1]&63,n+=2):(s^224)<16?(a=(s&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(s&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(a);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Uv{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array)this.pack_array(e);else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else if(t==Object||t.toString().startsWith("class"))this.pack_object(e);else throw new Error(`Type "${t.toString()}" not yet supported`)}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");for(let n=0;n<t;n++)this.pack(e[n])}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,s=Math.floor(i*2**52),a=2**32,o=t<<31|n+1023<<20|s/a&1048575,c=s%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const n=Object.keys(e).length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");for(const i in e)e.hasOwnProperty(i)&&(this.pack(i),this.pack(e[i]))}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Rv,this._textEncoder=new TextEncoder}}let _u=!0,vu=!0;function Ns(r,e,t){const n=r.match(e);return n&&n.length>=t&&parseInt(n[t],10)}function Ri(r,e,t){if(!r.RTCPeerConnection)return;const n=r.RTCPeerConnection.prototype,i=n.addEventListener;n.addEventListener=function(a,o){if(a!==e)return i.apply(this,arguments);const c=l=>{const f=t(l);f&&(o.handleEvent?o.handleEvent(f):o(f))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(o,c),i.apply(this,[a,c])};const s=n.removeEventListener;n.removeEventListener=function(a,o){if(a!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(o))return s.apply(this,arguments);const c=this._eventMap[e].get(o);return this._eventMap[e].delete(o),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[a,c])},Object.defineProperty(n,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function Lv(r){return typeof r!="boolean"?new Error("Argument type: "+typeof r+". Please use a boolean."):(_u=r,r?"adapter.js logging disabled":"adapter.js logging enabled")}function Dv(r){return typeof r!="boolean"?new Error("Argument type: "+typeof r+". Please use a boolean."):(vu=!r,"adapter.js deprecation warnings "+(r?"disabled":"enabled"))}function xu(){if(typeof window=="object"){if(_u)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Wo(r,e){vu&&console.warn(r+" is deprecated, please use "+e+" instead.")}function Iv(r){const e={browser:null,version:null};if(typeof r>"u"||!r.navigator||!r.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=r;if(t.mozGetUserMedia)e.browser="firefox",e.version=Ns(t.userAgent,/Firefox\/(\d+)\./,1);else if(t.webkitGetUserMedia||r.isSecureContext===!1&&r.webkitRTCPeerConnection)e.browser="chrome",e.version=Ns(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(r.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=Ns(t.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=r.RTCRtpTransceiver&&"currentDirection"in r.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function Ql(r){return Object.prototype.toString.call(r)==="[object Object]"}function yu(r){return Ql(r)?Object.keys(r).reduce(function(e,t){const n=Ql(r[t]),i=n?yu(r[t]):r[t],s=n&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,{[t]:i})},{}):r}function yo(r,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?yo(r,r.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{yo(r,r.get(i),t)})}))}function ef(r,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const s=[];return r.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&s.push(a)}),s.forEach(a=>{r.forEach(o=>{o.type===n&&o.trackId===a.id&&yo(r,o,i)})}),i}const tf=xu;function Su(r,e){const t=r&&r.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const f=typeof o[l]=="object"?o[l]:{ideal:o[l]};f.exact!==void 0&&typeof f.exact=="number"&&(f.min=f.max=f.exact);const u=function(h,d){return h?h+d.charAt(0).toUpperCase()+d.slice(1):d==="deviceId"?"sourceId":d};if(f.ideal!==void 0){c.optional=c.optional||[];let h={};typeof f.ideal=="number"?(h[u("min",l)]=f.ideal,c.optional.push(h),h={},h[u("max",l)]=f.ideal,c.optional.push(h)):(h[u("",l)]=f.ideal,c.optional.push(h))}f.exact!==void 0&&typeof f.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=f.exact):["min","max"].forEach(h=>{f[h]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(h,l)]=f[h])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},i=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(f,u,h){u in f&&!(h in f)&&(f[h]=f[u],delete f[u])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const f=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!f)){delete o.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(h=>{h=h.filter(g=>g.kind==="videoinput");let d=h.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!d&&h.length&&u.includes("back")&&(d=h[h.length-1]),d&&(o.video.deviceId=l.exact?{exact:d.deviceId}:{ideal:d.deviceId}),o.video=n(o.video),tf("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return tf("chrome: "+JSON.stringify(o)),c(o)},s=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){i(o,f=>{t.webkitGetUserMedia(f,c,u=>{l&&l(s(u))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,l=>o(l).then(f=>{if(l.audio&&!f.getAudioTracks().length||l.video&&!f.getVideoTracks().length)throw f.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return f},f=>Promise.reject(s(f))))}}}function Fv(r,e){if(!(r.navigator.mediaDevices&&"getDisplayMedia"in r.navigator.mediaDevices)&&r.navigator.mediaDevices){if(typeof e!="function"){console.error("shimGetDisplayMedia: getSourceId argument is not a function");return}r.navigator.mediaDevices.getDisplayMedia=function(n){return e(n).then(i=>{const s=n.video&&n.video.width,a=n.video&&n.video.height,o=n.video&&n.video.frameRate;return n.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:i,maxFrameRate:o||3}},s&&(n.video.mandatory.maxWidth=s),a&&(n.video.mandatory.maxHeight=a),r.navigator.mediaDevices.getUserMedia(n)})}}}function Mu(r){r.MediaStream=r.MediaStream||r.webkitMediaStream}function bu(r){if(typeof r=="object"&&r.RTCPeerConnection&&!("ontrack"in r.RTCPeerConnection.prototype)){Object.defineProperty(r.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=n=>{n.stream.addEventListener("addtrack",i=>{let s;r.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(o=>o.track&&o.track.id===i.track.id):s={track:i.track};const a=new Event("track");a.track=i.track,a.receiver=s,a.transceiver={receiver:s},a.streams=[n.stream],this.dispatchEvent(a)}),n.stream.getTracks().forEach(i=>{let s;r.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(o=>o.track&&o.track.id===i.id):s={track:i};const a=new Event("track");a.track=i,a.receiver=s,a.transceiver={receiver:s},a.streams=[n.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else Ri(r,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function Eu(r){if(typeof r=="object"&&r.RTCPeerConnection&&!("getSenders"in r.RTCPeerConnection.prototype)&&"createDTMFSender"in r.RTCPeerConnection.prototype){const e=function(i,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=i.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:i}};if(!r.RTCPeerConnection.prototype.getSenders){r.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addTrack=function(o,c){let l=i.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const s=r.RTCPeerConnection.prototype.removeTrack;r.RTCPeerConnection.prototype.removeTrack=function(o){s.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof r=="object"&&r.RTCPeerConnection&&"getSenders"in r.RTCPeerConnection.prototype&&"createDTMFSender"in r.RTCPeerConnection.prototype&&r.RTCRtpSender&&!("dtmf"in r.RTCRtpSender.prototype)){const e=r.RTCPeerConnection.prototype.getSenders;r.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(r.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Tu(r){if(!r.RTCPeerConnection)return;const e=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){const[n,i,s]=arguments;if(arguments.length>0&&typeof n=="function")return e.apply(this,arguments);if(e.length===0&&(arguments.length===0||typeof n!="function"))return e.apply(this,[]);const a=function(c){const l={};return c.result().forEach(u=>{const h={id:u.id,timestamp:u.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[u.type]||u.type};u.names().forEach(d=>{h[d]=u.stat(d)}),l[h.id]=h}),l},o=function(c){return new Map(Object.keys(c).map(l=>[l,c[l]]))};if(arguments.length>=2){const c=function(l){i(o(a(l)))};return e.apply(this,[c,n])}return new Promise((c,l)=>{e.apply(this,[function(f){c(o(a(f)))},l])}).then(i,s)}}function Cu(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender&&r.RTCRtpReceiver))return;if(!("getStats"in r.RTCRtpSender.prototype)){const t=r.RTCPeerConnection.prototype.getSenders;t&&(r.RTCPeerConnection.prototype.getSenders=function(){const s=t.apply(this,[]);return s.forEach(a=>a._pc=this),s});const n=r.RTCPeerConnection.prototype.addTrack;n&&(r.RTCPeerConnection.prototype.addTrack=function(){const s=n.apply(this,arguments);return s._pc=this,s}),r.RTCRtpSender.prototype.getStats=function(){const s=this;return this._pc.getStats().then(a=>ef(a,s.track,!0))}}if(!("getStats"in r.RTCRtpReceiver.prototype)){const t=r.RTCPeerConnection.prototype.getReceivers;t&&(r.RTCPeerConnection.prototype.getReceivers=function(){const i=t.apply(this,[]);return i.forEach(s=>s._pc=this),i}),Ri(r,"track",n=>(n.receiver._pc=n.srcElement,n)),r.RTCRtpReceiver.prototype.getStats=function(){const i=this;return this._pc.getStats().then(s=>ef(s,i.track,!1))}}if(!("getStats"in r.RTCRtpSender.prototype&&"getStats"in r.RTCRtpReceiver.prototype))return;const e=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof r.MediaStreamTrack){const n=arguments[0];let i,s,a;return this.getSenders().forEach(o=>{o.track===n&&(i?a=!0:i=o)}),this.getReceivers().forEach(o=>(o.track===n&&(s?a=!0:s=o),o.track===n)),a||i&&s?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):i?i.getStats():s?s.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function Au(r){r.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const i=r.RTCPeerConnection.prototype.removeTrack;r.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),i.apply(this,arguments)}}function Ru(r,e){if(!r.RTCPeerConnection)return;if(r.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Au(r);const t=r.RTCPeerConnection.prototype.getLocalStreams;r.RTCPeerConnection.prototype.getLocalStreams=function(){const f=t.apply(this);return this._reverseStreams=this._reverseStreams||{},f.map(u=>this._reverseStreams[u.id])};const n=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(f){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},f.getTracks().forEach(u=>{if(this.getSenders().find(d=>d.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[f.id]){const u=new r.MediaStream(f.getTracks());this._streams[f.id]=u,this._reverseStreams[u.id]=f,f=u}n.apply(this,[f])};const i=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(f){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[f.id]||f]),delete this._reverseStreams[this._streams[f.id]?this._streams[f.id].id:f.id],delete this._streams[f.id]},r.RTCPeerConnection.prototype.addTrack=function(f,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const h=[].slice.call(arguments,1);if(h.length!==1||!h[0].getTracks().find(_=>_===f))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===f))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(f),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new r.MediaStream([f]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===f)};function s(l,f){let u=f.sdp;return Object.keys(l._reverseStreams||[]).forEach(h=>{const d=l._reverseStreams[h],g=l._streams[d.id];u=u.replace(new RegExp(g.id,"g"),d.id)}),new RTCSessionDescription({type:f.type,sdp:u})}function a(l,f){let u=f.sdp;return Object.keys(l._reverseStreams||[]).forEach(h=>{const d=l._reverseStreams[h],g=l._streams[d.id];u=u.replace(new RegExp(d.id,"g"),g.id)}),new RTCSessionDescription({type:f.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const f=r.RTCPeerConnection.prototype[l],u={[l](){const h=arguments;return arguments.length&&typeof arguments[0]=="function"?f.apply(this,[g=>{const _=s(this,g);h[0].apply(null,[_])},g=>{h[1]&&h[1].apply(null,g)},arguments[2]]):f.apply(this,arguments).then(g=>s(this,g))}};r.RTCPeerConnection.prototype[l]=u[l]});const o=r.RTCPeerConnection.prototype.setLocalDescription;r.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(r.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(r.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),r.RTCPeerConnection.prototype.removeTrack=function(f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!f._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(f._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let h;Object.keys(this._streams).forEach(d=>{this._streams[d].getTracks().find(_=>f.track===_)&&(h=this._streams[d])}),h&&(h.getTracks().length===1?this.removeStream(this._reverseStreams[h.id]):h.removeTrack(f.track),this.dispatchEvent(new Event("negotiationneeded")))}}function So(r,e){!r.RTCPeerConnection&&r.webkitRTCPeerConnection&&(r.RTCPeerConnection=r.webkitRTCPeerConnection),r.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=r.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?r.RTCIceCandidate:r.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};r.RTCPeerConnection.prototype[t]=i[t]})}function wu(r,e){Ri(r,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const nf=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:wu,shimAddTrackRemoveTrack:Ru,shimAddTrackRemoveTrackWithNative:Au,shimGetDisplayMedia:Fv,shimGetSendersWithDtmf:Eu,shimGetStats:Tu,shimGetUserMedia:Su,shimMediaStream:Mu,shimOnTrack:bu,shimPeerConnection:So,shimSenderReceiverGetStats:Cu},Symbol.toStringTag,{value:"Module"}));function Pu(r,e){const t=r&&r.navigator,n=r&&r.MediaStreamTrack;if(t.getUserMedia=function(i,s,a){Wo("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(s,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a.audio,"autoGainControl","mozAutoGainControl"),i(a.audio,"noiseSuppression","mozNoiseSuppression")),s(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return i(o,"mozAutoGainControl","autoGainControl"),i(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o,"autoGainControl","mozAutoGainControl"),i(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function Ov(r,e){r.navigator.mediaDevices&&"getDisplayMedia"in r.navigator.mediaDevices||r.navigator.mediaDevices&&(r.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,r.navigator.mediaDevices.getUserMedia(n)})}function Uu(r){typeof r=="object"&&r.RTCTrackEvent&&"receiver"in r.RTCTrackEvent.prototype&&!("transceiver"in r.RTCTrackEvent.prototype)&&Object.defineProperty(r.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Mo(r,e){if(typeof r!="object"||!(r.RTCPeerConnection||r.mozRTCPeerConnection))return;!r.RTCPeerConnection&&r.mozRTCPeerConnection&&(r.RTCPeerConnection=r.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const s=r.RTCPeerConnection.prototype[i],a={[i](){return arguments[0]=new(i==="addIceCandidate"?r.RTCIceCandidate:r.RTCSessionDescription)(arguments[0]),s.apply(this,arguments)}};r.RTCPeerConnection.prototype[i]=a[i]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){const[s,a,o]=arguments;return n.apply(this,[s||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((f,u)=>{c.set(u,Object.assign({},f,{type:t[f.type]||f.type}))})}return c}).then(a,o)}}function Lu(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender)||r.RTCRtpSender&&"getStats"in r.RTCRtpSender.prototype)return;const e=r.RTCPeerConnection.prototype.getSenders;e&&(r.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(s=>s._pc=this),i});const t=r.RTCPeerConnection.prototype.addTrack;t&&(r.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),r.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Du(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender)||r.RTCRtpSender&&"getStats"in r.RTCRtpReceiver.prototype)return;const e=r.RTCPeerConnection.prototype.getReceivers;e&&(r.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),Ri(r,"track",t=>(t.receiver._pc=t.srcElement,t)),r.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Iu(r){!r.RTCPeerConnection||"removeStream"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.removeStream=function(t){Wo("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Fu(r){r.DataChannel&&!r.RTCDataChannel&&(r.RTCDataChannel=r.DataChannel)}function Ou(r){if(!(typeof r=="object"&&r.RTCPeerConnection))return;const e=r.RTCPeerConnection.prototype.addTransceiver;e&&(r.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let n=arguments[1]&&arguments[1].sendEncodings;n===void 0&&(n=[]),n=[...n];const i=n.length>0;i&&n.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const s=e.apply(this,arguments);if(i){const{sender:a}=s,o=a.getParameters();(!("encodings"in o)||o.encodings.length===1&&Object.keys(o.encodings[0]).length===0)&&(o.encodings=n,a.sendEncodings=n,this.setParametersPromises.push(a.setParameters(o).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return s})}function ku(r){if(!(typeof r=="object"&&r.RTCRtpSender))return;const e=r.RTCRtpSender.prototype.getParameters;e&&(r.RTCRtpSender.prototype.getParameters=function(){const n=e.apply(this,arguments);return"encodings"in n||(n.encodings=[].concat(this.sendEncodings||[{}])),n})}function Nu(r){if(!(typeof r=="object"&&r.RTCPeerConnection))return;const e=r.RTCPeerConnection.prototype.createOffer;r.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function Bu(r){if(!(typeof r=="object"&&r.RTCPeerConnection))return;const e=r.RTCPeerConnection.prototype.createAnswer;r.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const rf=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Ou,shimCreateAnswer:Bu,shimCreateOffer:Nu,shimGetDisplayMedia:Ov,shimGetParameters:ku,shimGetUserMedia:Pu,shimOnTrack:Uu,shimPeerConnection:Mo,shimRTCDataChannel:Fu,shimReceiverGetStats:Du,shimRemoveStream:Iu,shimSenderGetStats:Lu},Symbol.toStringTag,{value:"Module"}));function Gu(r){if(!(typeof r!="object"||!r.RTCPeerConnection)){if("getLocalStreams"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in r.RTCPeerConnection.prototype)){const e=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},r.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(s=>{i.includes(s.track)&&this.removeTrack(s)})})}}function zu(r){if(!(typeof r!="object"||!r.RTCPeerConnection)&&("getRemoteStreams"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in r.RTCPeerConnection.prototype))){Object.defineProperty(r.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const s=new Event("addstream");s.stream=i,this.dispatchEvent(s)})})}});const e=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);const a=new Event("addstream");a.stream=s,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Vu(r){if(typeof r!="object"||!r.RTCPeerConnection)return;const e=r.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,f){const u=arguments.length>=2?arguments[2]:arguments[0],h=t.apply(this,[u]);return f?(h.then(l,f),Promise.resolve()):h},e.createAnswer=function(l,f){const u=arguments.length>=2?arguments[2]:arguments[0],h=n.apply(this,[u]);return f?(h.then(l,f),Promise.resolve()):h};let o=function(c,l,f){const u=i.apply(this,[c]);return f?(u.then(l,f),Promise.resolve()):u};e.setLocalDescription=o,o=function(c,l,f){const u=s.apply(this,[c]);return f?(u.then(l,f),Promise.resolve()):u},e.setRemoteDescription=o,o=function(c,l,f){const u=a.apply(this,[c]);return f?(u.then(l,f),Promise.resolve()):u},e.addIceCandidate=o}function Hu(r){const e=r&&r.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(Wu(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,s){e.mediaDevices.getUserMedia(n).then(i,s)}).bind(e))}function Wu(r){return r&&r.video!==void 0?Object.assign({},r,{video:yu(r.video)}):r}function Xu(r){if(!r.RTCPeerConnection)return;const e=r.RTCPeerConnection;r.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const s=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(Wo("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,s.push(o)):s.push(n.iceServers[a])}n.iceServers=s}return new e(n,i)},r.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(r.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function ju(r){typeof r=="object"&&r.RTCTrackEvent&&"receiver"in r.RTCTrackEvent.prototype&&!("transceiver"in r.RTCTrackEvent.prototype)&&Object.defineProperty(r.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Yu(r){const e=r.RTCPeerConnection.prototype.createOffer;r.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function qu(r){typeof r!="object"||r.AudioContext||(r.AudioContext=r.webkitAudioContext)}const sf=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:qu,shimCallbacksAPI:Vu,shimConstraints:Wu,shimCreateOfferLegacy:Yu,shimGetUserMedia:Hu,shimLocalStreamsAPI:Gu,shimRTCIceServerUrls:Xu,shimRemoteStreamsAPI:zu,shimTrackEventTransceiver:ju},Symbol.toStringTag,{value:"Module"}));var Ku={exports:{}};(function(r){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,s)=>(s>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let s=8;s<n.length;s+=2)switch(n[s]){case"raddr":i.relatedAddress=n[s+1];break;case"rport":i.relatedPort=parseInt(n[s+1],10);break;case"tcptype":i.tcpType=n[s+1];break;case"ufrag":i.ufrag=n[s+1],i.usernameFragment=n[s+1];break;default:i[n[s]]===void 0&&(i[n[s]]=n[s+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const s=t.type;return n.push("typ"),n.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const s=t.substring(t.indexOf(" ")+1).split(";");for(let a=0;a<s.length;a++)i=s[a].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?s.push(a+"="+t.parameters[a]):s.push(a)}),n+="a=fmtp:"+i+" "+s.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{n+="a=rtcp-fb:"+i+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},s=t.indexOf(":",n);return s>-1?(i.attribute=t.substring(n+1,s),i.value=t.substring(s+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(s=>{i+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],s=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&s?{usernameFragment:i.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");n.profile=s[2];for(let o=3;o<s.length;o++){const c=s[o],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const f=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(f.parameters=u.length?e.parseFmtp(u[0]):{},f.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(f),f.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(f.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{n.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(f=>f.type===c.type&&f.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{i+=e.writeRtpMap(a),i+=e.writeFmtp(a),i+=e.writeRtcpFb(a)});let s=0;return n.codecs.forEach(a=>{a.maxptime>s&&(s=a.maxptime)}),s>0&&(i+="a=maxptime:"+s+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{i+=e.writeExtmap(a)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),s=i.fecMechanisms.indexOf("RED")!==-1,a=i.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(h=>e.parseSsrcMedia(h)).filter(h=>h.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const f=e.matchPrefix(t,"a=ssrc-group:FID").map(h=>h.substring(17).split(" ").map(g=>parseInt(g,10)));f.length>0&&f[0].length>1&&f[0][0]===c&&(l=f[0][1]),i.codecs.forEach(h=>{if(h.name.toUpperCase()==="RTX"&&h.parameters.apt){let d={ssrc:c,codecPayloadType:parseInt(h.parameters.apt,10)};c&&l&&(d.rtx={ssrc:l}),n.push(d),s&&(d=JSON.parse(JSON.stringify(d)),d.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(d))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-50*40*8:u=void 0,n.forEach(h=>{h.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=s.length>0,n.compound=s.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(s.length>0)return n=s[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let s;i.length>0&&(s=parseInt(i[0].substring(19),10)),isNaN(s)&&(s=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:s};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let s;const a=n!==void 0?n:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+s+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let s=0;s<i.length;s++)switch(i[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[s].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},r.exports=e})(Ku);var Ju=Ku.exports;const sr=du(Ju),kv=mh({__proto__:null,default:sr},[Ju]);function Bs(r){if(!r.RTCIceCandidate||r.RTCIceCandidate&&"foundation"in r.RTCIceCandidate.prototype)return;const e=r.RTCIceCandidate;r.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),s=sr.parseCandidate(n.candidate);for(const a in s)a in i||Object.defineProperty(i,a,{value:s[a]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},r.RTCIceCandidate.prototype=e.prototype,Ri(r,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new r.RTCIceCandidate(t.candidate),writable:"false"}),t))}function bo(r){!r.RTCIceCandidate||r.RTCIceCandidate&&"relayProtocol"in r.RTCIceCandidate.prototype||Ri(r,"icecandidate",e=>{if(e.candidate){const t=sr.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Gs(r,e){if(!r.RTCPeerConnection)return;"sctp"in r.RTCPeerConnection.prototype||Object.defineProperty(r.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=sr.splitSections(o.sdp);return c.shift(),c.some(l=>{const f=sr.parseMLine(l);return f&&f.kind==="application"&&f.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},i=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const f=sr.matchPrefix(o.sdp,"a=max-message-size:");return f.length>0?l=parseInt(f[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=i(c),f=s(arguments[0],c);let u;l===0&&f===0?u=Number.POSITIVE_INFINITY:l===0||f===0?u=Math.max(l,f):u=Math.min(l,f);const h={};Object.defineProperty(h,"maxMessageSize",{get(){return u}}),this._sctp=h}return a.apply(this,arguments)}}function zs(r){if(!(r.RTCPeerConnection&&"createDataChannel"in r.RTCPeerConnection.prototype))return;function e(n,i){const s=n.send;n.send=function(){const o=arguments[0],c=o.length||o.size||o.byteLength;if(n.readyState==="open"&&i.sctp&&c>i.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+i.sctp.maxMessageSize+" bytes)");return s.apply(n,arguments)}}const t=r.RTCPeerConnection.prototype.createDataChannel;r.RTCPeerConnection.prototype.createDataChannel=function(){const i=t.apply(this,arguments);return e(i,this),i},Ri(r,"datachannel",n=>(e(n.channel,n.target),n))}function Eo(r){if(!r.RTCPeerConnection||"connectionState"in r.RTCPeerConnection.prototype)return;const e=r.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const s=i.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const a=new Event("connectionstatechange",i);s.dispatchEvent(a)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function To(r,e){if(!r.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e.version>=605)return;const t=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=i.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);r.RTCSessionDescription&&i instanceof r.RTCSessionDescription?arguments[0]=new r.RTCSessionDescription({type:i.type,sdp:s}):i.sdp=s}return t.apply(this,arguments)}}function Vs(r,e){if(!(r.RTCPeerConnection&&r.RTCPeerConnection.prototype))return;const t=r.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(r.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Hs(r,e){if(!(r.RTCPeerConnection&&r.RTCPeerConnection.prototype))return;const t=r.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(r.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Nv=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:To,shimAddIceCandidateNullOrEmpty:Vs,shimConnectionState:Eo,shimMaxMessageSize:Gs,shimParameterlessSetLocalDescription:Hs,shimRTCIceCandidate:Bs,shimRTCIceCandidateRelayProtocol:bo,shimSendThrowTypeError:zs},Symbol.toStringTag,{value:"Module"}));function Bv({window:r}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=xu,n=Iv(r),i={browserDetails:n,commonShim:Nv,extractVersion:Ns,disableLog:Lv,disableWarnings:Dv,sdp:kv};switch(n.browser){case"chrome":if(!nf||!So||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=nf,Vs(r,n),Hs(r),Su(r,n),Mu(r),So(r,n),bu(r),Ru(r,n),Eu(r),Tu(r),Cu(r),wu(r,n),Bs(r),bo(r),Eo(r),Gs(r,n),zs(r),To(r,n);break;case"firefox":if(!rf||!Mo||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=rf,Vs(r,n),Hs(r),Pu(r,n),Mo(r,n),Uu(r),Iu(r),Lu(r),Du(r),Fu(r),Ou(r),ku(r),Nu(r),Bu(r),Bs(r),Eo(r),Gs(r,n),zs(r);break;case"safari":if(!sf||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=sf,Vs(r,n),Hs(r),Xu(r),Yu(r),Vu(r),Gu(r),zu(r),ju(r),Hu(r),qu(r),Bs(r),bo(r),Gs(r,n),zs(r),To(r,n);break;default:t("Unsupported browser!");break}return i}const af=Bv({window:typeof window>"u"?void 0:window});let Co;try{Co=new TextDecoder}catch{}let Fe,Ei,ue=0;const Gv=105,zv=57342,Vv=57343,of=57337,cf=6,$i={};let et={},dt,Ks,Js=0,Hr=0,Mt,Cn,vt=[],Ao=[],$t,Bt,Fr,lf={useRecords:!1,mapsAsObjects:!0},Wr=!1,$u=2;try{new Function("")}catch{$u=1/0}class Xr{constructor(e){if(e&&((e.keyMap||e._keyMap)&&!e.useRecords&&(e.useRecords=!1,e.mapsAsObjects=!0),e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.getStructures&&(e.getShared=e.getStructures),e.getShared&&!e.structures&&((e.structures=[]).uninitialized=!0),e.keyMap)){this.mapKey=new Map;for(let[t,n]of Object.entries(e.keyMap))this.mapKey.set(n,t)}Object.assign(this,e)}decodeKey(e){return this.keyMap&&this.mapKey.get(e)||e}encodeKey(e){return this.keyMap&&this.keyMap.hasOwnProperty(e)?this.keyMap[e]:e}encodeKeys(e){if(!this._keyMap)return e;let t=new Map;for(let[n,i]of Object.entries(e))t.set(this._keyMap.hasOwnProperty(n)?this._keyMap[n]:n,i);return t}decodeKeys(e){if(!this._keyMap||e.constructor.name!="Map")return e;if(!this._mapKey){this._mapKey=new Map;for(let[n,i]of Object.entries(this._keyMap))this._mapKey.set(i,n)}let t={};return e.forEach((n,i)=>t[hn(this._mapKey.has(i)?this._mapKey.get(i):i)]=n),t}mapDecode(e,t){let n=this.decode(e);if(this._keyMap)switch(n.constructor.name){case"Array":return n.map(i=>this.decodeKeys(i))}return n}decode(e,t){if(Fe)return th(()=>(Uo(),this?this.decode(e,t):Xr.prototype.decode.call(lf,e,t)));Ei=t>-1?t:e.length,ue=0,Hr=0,Ks=null,Mt=null,Fe=e;try{Bt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw Fe=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Xr){if(et=this,$t=this.sharedValues&&(this.pack?new Array(this.maxPrivatePackedValues||16).concat(this.sharedValues):this.sharedValues),this.structures)return dt=this.structures,Ls();(!dt||dt.length>0)&&(dt=[])}else et=lf,(!dt||dt.length>0)&&(dt=[]),$t=null;return Ls()}decodeMultiple(e,t){let n,i=0;try{let s=e.length;Wr=!0;let a=this?this.decode(e,s):Yo.decode(e,s);if(t){if(t(a)===!1)return;for(;ue<s;)if(i=ue,t(Ls())===!1)return}else{for(n=[a];ue<s;)i=ue,n.push(Ls());return n}}catch(s){throw s.lastPosition=i,s.values=n,s}finally{Wr=!1,Uo()}}}function Ls(){try{let r=Qe();if(Mt){if(ue>=Mt.postBundlePosition){let e=new Error("Unexpected bundle position");throw e.incomplete=!0,e}ue=Mt.postBundlePosition,Mt=null}if(ue==Ei)dt=null,Fe=null,Cn&&(Cn=null);else if(ue>Ei){let e=new Error("Unexpected end of CBOR data");throw e.incomplete=!0,e}else if(!Wr)throw new Error("Data read, but end of buffer not reached");return r}catch(r){throw Uo(),(r instanceof RangeError||r.message.startsWith("Unexpected end of buffer"))&&(r.incomplete=!0),r}}function Qe(){let r=Fe[ue++],e=r>>5;if(r=r&31,r>23)switch(r){case 24:r=Fe[ue++];break;case 25:if(e==7)return jv();r=Bt.getUint16(ue),ue+=2;break;case 26:if(e==7){let t=Bt.getFloat32(ue);if(et.useFloat32>2){let n=jo[(Fe[ue]&127)<<1|Fe[ue+1]>>7];return ue+=4,(n*t+(t>0?.5:-.5)>>0)/n}return ue+=4,t}r=Bt.getUint32(ue),ue+=4;break;case 27:if(e==7){let t=Bt.getFloat64(ue);return ue+=8,t}if(e>1){if(Bt.getUint32(ue)>0)throw new Error("JavaScript does not support arrays, maps, or strings with length over 4294967295");r=Bt.getUint32(ue+4)}else et.int64AsNumber?(r=Bt.getUint32(ue)*4294967296,r+=Bt.getUint32(ue+4)):r=Bt.getBigUint64(ue);ue+=8;break;case 31:switch(e){case 2:case 3:throw new Error("Indefinite length not supported for byte or text strings");case 4:let t=[],n,i=0;for(;(n=Qe())!=$i;)t[i++]=n;return e==4?t:e==3?t.join(""):Buffer.concat(t);case 5:let s;if(et.mapsAsObjects){let a={};if(et.keyMap)for(;(s=Qe())!=$i;)a[hn(et.decodeKey(s))]=Qe();else for(;(s=Qe())!=$i;)a[hn(s)]=Qe();return a}else{Fr&&(et.mapsAsObjects=!0,Fr=!1);let a=new Map;if(et.keyMap)for(;(s=Qe())!=$i;)a.set(et.decodeKey(s),Qe());else for(;(s=Qe())!=$i;)a.set(s,Qe());return a}case 7:return $i;default:throw new Error("Invalid major type for indefinite length "+e)}default:throw new Error("Unknown token "+r)}switch(e){case 0:return r;case 1:return~r;case 2:return Xv(r);case 3:if(Hr>=ue)return Ks.slice(ue-Js,(ue+=r)-Js);if(Hr==0&&Ei<140&&r<32){let i=r<16?Zu(r):Wv(r);if(i!=null)return i}return Hv(r);case 4:let t=new Array(r);for(let i=0;i<r;i++)t[i]=Qe();return t;case 5:if(et.mapsAsObjects){let i={};if(et.keyMap)for(let s=0;s<r;s++)i[hn(et.decodeKey(Qe()))]=Qe();else for(let s=0;s<r;s++)i[hn(Qe())]=Qe();return i}else{Fr&&(et.mapsAsObjects=!0,Fr=!1);let i=new Map;if(et.keyMap)for(let s=0;s<r;s++)i.set(et.decodeKey(Qe()),Qe());else for(let s=0;s<r;s++)i.set(Qe(),Qe());return i}case 6:if(r>=of){let i=dt[r&8191];if(i)return i.read||(i.read=Ro(i)),i.read();if(r<65536){if(r==Vv){let s=nr(),a=Qe(),o=Qe();Po(a,o);let c={};if(et.keyMap)for(let l=2;l<s;l++){let f=et.decodeKey(o[l-2]);c[hn(f)]=Qe()}else for(let l=2;l<s;l++){let f=o[l-2];c[hn(f)]=Qe()}return c}else if(r==zv){let s=nr(),a=Qe();for(let o=2;o<s;o++)Po(a++,Qe());return Qe()}else if(r==of)return Zv();if(et.getShared&&(Xo(),i=dt[r&8191],i))return i.read||(i.read=Ro(i)),i.read()}}let n=vt[r];if(n)return n.handlesRead?n(Qe):n(Qe());{let i=Qe();for(let s=0;s<Ao.length;s++){let a=Ao[s](r,i);if(a!==void 0)return a}return new Ai(i,r)}case 7:switch(r){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;case 31:default:let i=($t||gi())[r];if(i!==void 0)return i;throw new Error("Unknown token "+r)}default:if(isNaN(r)){let i=new Error("Unexpected end of CBOR data");throw i.incomplete=!0,i}throw new Error("Unknown CBOR token "+r)}}const ff=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Ro(r){function e(){let t=Fe[ue++];if(t=t&31,t>23)switch(t){case 24:t=Fe[ue++];break;case 25:t=Bt.getUint16(ue),ue+=2;break;case 26:t=Bt.getUint32(ue),ue+=4;break;default:throw new Error("Expected array header, but got "+Fe[ue-1])}let n=this.compiledReader;for(;n;){if(n.propertyCount===t)return n(Qe);n=n.next}if(this.slowReads++>=$u){let s=this.length==t?this:this.slice(0,t);return n=et.keyMap?new Function("r","return {"+s.map(a=>et.decodeKey(a)).map(a=>ff.test(a)?hn(a)+":r()":"["+JSON.stringify(a)+"]:r()").join(",")+"}"):new Function("r","return {"+s.map(a=>ff.test(a)?hn(a)+":r()":"["+JSON.stringify(a)+"]:r()").join(",")+"}"),this.compiledReader&&(n.next=this.compiledReader),n.propertyCount=t,this.compiledReader=n,n(Qe)}let i={};if(et.keyMap)for(let s=0;s<t;s++)i[hn(et.decodeKey(this[s]))]=Qe();else for(let s=0;s<t;s++)i[hn(this[s])]=Qe();return i}return r.slowReads=0,e}function hn(r){return r==="__proto__"?"__proto_":r}let Hv=wo;function wo(r){let e;if(r<16&&(e=Zu(r)))return e;if(r>64&&Co)return Co.decode(Fe.subarray(ue,ue+=r));const t=ue+r,n=[];for(e="";ue<t;){const i=Fe[ue++];if(!(i&128))n.push(i);else if((i&224)===192){const s=Fe[ue++]&63;n.push((i&31)<<6|s)}else if((i&240)===224){const s=Fe[ue++]&63,a=Fe[ue++]&63;n.push((i&31)<<12|s<<6|a)}else if((i&248)===240){const s=Fe[ue++]&63,a=Fe[ue++]&63,o=Fe[ue++]&63;let c=(i&7)<<18|s<<12|a<<6|o;c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|c&1023),n.push(c)}else n.push(i);n.length>=4096&&(e+=Ct.apply(String,n),n.length=0)}return n.length>0&&(e+=Ct.apply(String,n)),e}let Ct=String.fromCharCode;function Wv(r){let e=ue,t=new Array(r);for(let n=0;n<r;n++){const i=Fe[ue++];if((i&128)>0){ue=e;return}t[n]=i}return Ct.apply(String,t)}function Zu(r){if(r<4)if(r<2){if(r===0)return"";{let e=Fe[ue++];if((e&128)>1){ue-=1;return}return Ct(e)}}else{let e=Fe[ue++],t=Fe[ue++];if((e&128)>0||(t&128)>0){ue-=2;return}if(r<3)return Ct(e,t);let n=Fe[ue++];if((n&128)>0){ue-=3;return}return Ct(e,t,n)}else{let e=Fe[ue++],t=Fe[ue++],n=Fe[ue++],i=Fe[ue++];if((e&128)>0||(t&128)>0||(n&128)>0||(i&128)>0){ue-=4;return}if(r<6){if(r===4)return Ct(e,t,n,i);{let s=Fe[ue++];if((s&128)>0){ue-=5;return}return Ct(e,t,n,i,s)}}else if(r<8){let s=Fe[ue++],a=Fe[ue++];if((s&128)>0||(a&128)>0){ue-=6;return}if(r<7)return Ct(e,t,n,i,s,a);let o=Fe[ue++];if((o&128)>0){ue-=7;return}return Ct(e,t,n,i,s,a,o)}else{let s=Fe[ue++],a=Fe[ue++],o=Fe[ue++],c=Fe[ue++];if((s&128)>0||(a&128)>0||(o&128)>0||(c&128)>0){ue-=8;return}if(r<10){if(r===8)return Ct(e,t,n,i,s,a,o,c);{let l=Fe[ue++];if((l&128)>0){ue-=9;return}return Ct(e,t,n,i,s,a,o,c,l)}}else if(r<12){let l=Fe[ue++],f=Fe[ue++];if((l&128)>0||(f&128)>0){ue-=10;return}if(r<11)return Ct(e,t,n,i,s,a,o,c,l,f);let u=Fe[ue++];if((u&128)>0){ue-=11;return}return Ct(e,t,n,i,s,a,o,c,l,f,u)}else{let l=Fe[ue++],f=Fe[ue++],u=Fe[ue++],h=Fe[ue++];if((l&128)>0||(f&128)>0||(u&128)>0||(h&128)>0){ue-=12;return}if(r<14){if(r===12)return Ct(e,t,n,i,s,a,o,c,l,f,u,h);{let d=Fe[ue++];if((d&128)>0){ue-=13;return}return Ct(e,t,n,i,s,a,o,c,l,f,u,h,d)}}else{let d=Fe[ue++],g=Fe[ue++];if((d&128)>0||(g&128)>0){ue-=14;return}if(r<15)return Ct(e,t,n,i,s,a,o,c,l,f,u,h,d,g);let _=Fe[ue++];if((_&128)>0){ue-=15;return}return Ct(e,t,n,i,s,a,o,c,l,f,u,h,d,g,_)}}}}}function Xv(r){return et.copyBuffers?Uint8Array.prototype.slice.call(Fe,ue,ue+=r):Fe.subarray(ue,ue+=r)}let Qu=new Float32Array(1),Ds=new Uint8Array(Qu.buffer,0,4);function jv(){let r=Fe[ue++],e=Fe[ue++],t=(r&127)>>2;if(t===31)return e||r&3?NaN:r&128?-1/0:1/0;if(t===0){let n=((r&3)<<8|e)/16777216;return r&128?-n:n}return Ds[3]=r&128|(t>>1)+56,Ds[2]=(r&7)<<5|e>>3,Ds[1]=e<<5,Ds[0]=0,Qu[0]}new Array(4096);class Ai{constructor(e,t){this.value=e,this.tag=t}}vt[0]=r=>new Date(r);vt[1]=r=>new Date(Math.round(r*1e3));vt[2]=r=>{let e=BigInt(0);for(let t=0,n=r.byteLength;t<n;t++)e=BigInt(r[t])+e<<BigInt(8);return e};vt[3]=r=>BigInt(-1)-vt[2](r);vt[4]=r=>+(r[1]+"e"+r[0]);vt[5]=r=>r[1]*Math.exp(r[0]*Math.log(2));const Po=(r,e)=>{r=r-57344;let t=dt[r];t&&t.isShared&&((dt.restoreStructures||(dt.restoreStructures=[]))[r]=t),dt[r]=e,e.read=Ro(e)};vt[Gv]=r=>{let e=r.length,t=r[1];Po(r[0],t);let n={};for(let i=2;i<e;i++){let s=t[i-2];n[hn(s)]=r[i]}return n};vt[14]=r=>Mt?Mt[0].slice(Mt.position0,Mt.position0+=r):new Ai(r,14);vt[15]=r=>Mt?Mt[1].slice(Mt.position1,Mt.position1+=r):new Ai(r,15);let Yv={Error,RegExp};vt[27]=r=>(Yv[r[0]]||Error)(r[1],r[2]);const eh=r=>{if(Fe[ue++]!=132)throw new Error("Packed values structure must be followed by a 4 element array");let e=r();return $t=$t?e.concat($t.slice(e.length)):e,$t.prefixes=r(),$t.suffixes=r(),r()};eh.handlesRead=!0;vt[51]=eh;vt[cf]=r=>{if(!$t)if(et.getShared)Xo();else return new Ai(r,cf);if(typeof r=="number")return $t[16+(r>=0?2*r:-2*r-1)];throw new Error("No support for non-integer packed references yet")};vt[28]=r=>{Cn||(Cn=new Map,Cn.id=0);let e=Cn.id++,t=Fe[ue],n;t>>5==4?n=[]:n={};let i={target:n};Cn.set(e,i);let s=r();return i.used?Object.assign(n,s):(i.target=s,s)};vt[28].handlesRead=!0;vt[29]=r=>{let e=Cn.get(r);return e.used=!0,e.target};vt[258]=r=>new Set(r);(vt[259]=r=>(et.mapsAsObjects&&(et.mapsAsObjects=!1,Fr=!0),r())).handlesRead=!0;function Zi(r,e){return typeof r=="string"?r+e:r instanceof Array?r.concat(e):Object.assign({},r,e)}function gi(){if(!$t)if(et.getShared)Xo();else throw new Error("No packed values available");return $t}const qv=1399353956;Ao.push((r,e)=>{if(r>=225&&r<=255)return Zi(gi().prefixes[r-224],e);if(r>=28704&&r<=32767)return Zi(gi().prefixes[r-28672],e);if(r>=1879052288&&r<=2147483647)return Zi(gi().prefixes[r-1879048192],e);if(r>=216&&r<=223)return Zi(e,gi().suffixes[r-216]);if(r>=27647&&r<=28671)return Zi(e,gi().suffixes[r-27639]);if(r>=1811940352&&r<=1879048191)return Zi(e,gi().suffixes[r-1811939328]);if(r==qv)return{packedValues:$t,structures:dt.slice(0),version:e};if(r==55799)return e});const Kv=new Uint8Array(new Uint16Array([1]).buffer)[0]==1,uf=[Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,typeof BigUint64Array>"u"?{name:"BigUint64Array"}:BigUint64Array,Int8Array,Int16Array,Int32Array,typeof BigInt64Array>"u"?{name:"BigInt64Array"}:BigInt64Array,Float32Array,Float64Array],Jv=[64,68,69,70,71,72,77,78,79,85,86];for(let r=0;r<uf.length;r++)$v(uf[r],Jv[r]);function $v(r,e){let t="get"+r.name.slice(0,-5),n;typeof r=="function"?n=r.BYTES_PER_ELEMENT:r=null;for(let i=0;i<2;i++){if(!i&&n==1)continue;let s=n==2?1:n==4?2:3;vt[i?e:e-4]=n==1||i==Kv?a=>{if(!r)throw new Error("Could not find typed array for code "+e);return new r(Uint8Array.prototype.slice.call(a,0).buffer)}:a=>{if(!r)throw new Error("Could not find typed array for code "+e);let o=new DataView(a.buffer,a.byteOffset,a.byteLength),c=a.length>>s,l=new r(c),f=o[t];for(let u=0;u<c;u++)l[u]=f.call(o,u<<s,i);return l}}}function Zv(){let r=nr(),e=ue+Qe();for(let n=2;n<r;n++){let i=nr();ue+=i}let t=ue;return ue=e,Mt=[wo(nr()),wo(nr())],Mt.position0=0,Mt.position1=0,Mt.postBundlePosition=ue,ue=t,Qe()}function nr(){let r=Fe[ue++]&31;if(r>23)switch(r){case 24:r=Fe[ue++];break;case 25:r=Bt.getUint16(ue),ue+=2;break;case 26:r=Bt.getUint32(ue),ue+=4;break}return r}function Xo(){if(et.getShared){let r=th(()=>(Fe=null,et.getShared()))||{},e=r.structures||[];et.sharedVersion=r.version,$t=et.sharedValues=r.packedValues,dt===!0?et.structures=dt=e:dt.splice.apply(dt,[0,e.length].concat(e))}}function th(r){let e=Ei,t=ue,n=Js,i=Hr,s=Ks,a=Cn,o=Mt,c=new Uint8Array(Fe.slice(0,Ei)),l=dt,f=et,u=Wr,h=r();return Ei=e,ue=t,Js=n,Hr=i,Ks=s,Cn=a,Mt=o,Fe=c,Wr=u,dt=l,et=f,Bt=new DataView(Fe.buffer,Fe.byteOffset,Fe.byteLength),h}function Uo(){Fe=null,Cn=null,dt=null}const jo=new Array(147);for(let r=0;r<256;r++)jo[r]=+("1e"+Math.floor(45.15-r*.30103));let Yo=new Xr({useRecords:!1});Yo.decode;Yo.decodeMultiple;let Ws;try{Ws=new TextEncoder}catch{}let Lo,nh;const sa=typeof globalThis=="object"&&globalThis.Buffer,Qr=typeof sa<"u",Za=Qr?sa.allocUnsafeSlow:Uint8Array,hf=Qr?sa:Uint8Array,df=256,pf=Qr?4294967296:2144337920;let Qa,J,at,H=0,ti,St=null;const Qv=61440,ex=/[\u0080-\uFFFF]/,nn=Symbol("record-id");class tx extends Xr{constructor(e){super(e),this.offset=0;let t,n,i,s,a;e=e||{};let o=hf.prototype.utf8Write?function(x,P,L){return J.utf8Write(x,P,L)}:Ws&&Ws.encodeInto?function(x,P){return Ws.encodeInto(x,J.subarray(P)).written}:!1,c=this,l=e.structures||e.saveStructures,f=e.maxSharedStructures;if(f==null&&(f=l?128:0),f>8190)throw new Error("Maximum maxSharedStructure is 8190");let u=e.sequential;u&&(f=0),this.structures||(this.structures=[]),this.saveStructures&&(this.saveShared=this.saveStructures);let h,d,g=e.sharedValues,_;if(g){_=Object.create(null);for(let x=0,P=g.length;x<P;x++)_[g[x]]=x}let p=[],m=0,T=0;this.mapEncode=function(x,P){if(this._keyMap&&!this._mapped)switch(x.constructor.name){case"Array":x=x.map(L=>this.encodeKeys(L));break}return this.encode(x,P)},this.encode=function(x,P){if(J||(J=new Za(8192),at=new DataView(J.buffer,0,8192),H=0),ti=J.length-10,ti-H<2048?(J=new Za(J.length),at=new DataView(J.buffer,0,J.length),ti=J.length-10,H=0):P===vf&&(H=H+7&2147483640),t=H,c.useSelfDescribedHeader&&(at.setUint32(H,3654940416),H+=3),a=c.structuredClone?new Map:null,c.bundleStrings&&typeof x!="string"?(St=[],St.size=1/0):St=null,n=c.structures,n){if(n.uninitialized){let F=c.getShared()||{};c.structures=n=F.structures||[],c.sharedVersion=F.version;let I=c.sharedValues=F.packedValues;if(I){_={};for(let W=0,G=I.length;W<G;W++)_[I[W]]=W}}let L=n.length;if(L>f&&!u&&(L=f),!n.transitions){n.transitions=Object.create(null);for(let F=0;F<L;F++){let I=n[F];if(!I)continue;let W,G=n.transitions;for(let k=0,b=I.length;k<b;k++){G[nn]===void 0&&(G[nn]=F);let U=I[k];W=G[U],W||(W=G[U]=Object.create(null)),G=W}G[nn]=F|1048576}}u||(n.nextId=L)}if(i&&(i=!1),s=n||[],d=_,e.pack){let L=new Map;if(L.values=[],L.encoder=c,L.maxValues=e.maxPrivatePackedValues||(_?16:1/0),L.objectMap=_||!1,L.samplingPackedValues=h,Xs(x,L),L.values.length>0){J[H++]=216,J[H++]=51,Ln(4);let F=L.values;v(F),Ln(0),Ln(0),d=Object.create(_||null);for(let I=0,W=F.length;I<W;I++)d[F[I]]=I}}Qa=P&to;try{if(Qa)return;if(v(x),St&&_f(t,v),c.offset=H,a&&a.idsToInsert){H+=a.idsToInsert.length*2,H>ti&&E(H),c.offset=H;let L=rx(J.subarray(t,H),a.idsToInsert);return a=null,L}return P&vf?(J.start=t,J.end=H,J):J.subarray(t,H)}finally{if(n){if(T<10&&T++,n.length>f&&(n.length=f),m>1e4)n.transitions=null,T=0,m=0,p.length>0&&(p=[]);else if(p.length>0&&!u){for(let L=0,F=p.length;L<F;L++)p[L][nn]=void 0;p=[]}}if(i&&c.saveShared){c.structures.length>f&&(c.structures=c.structures.slice(0,f));let L=J.subarray(t,H);return c.updateSharedData()===!1?c.encode(x):L}P&sx&&(H=t)}},this.findCommonStringsToPack=()=>(h=new Map,_||(_=Object.create(null)),x=>{let P=x&&x.threshold||4,L=this.pack?x.maxPrivatePackedValues||16:0;g||(g=this.sharedValues=[]);for(let[F,I]of h)I.count>P&&(_[F]=L++,g.push(F),i=!0);for(;this.saveShared&&this.updateSharedData()===!1;);h=null});const v=x=>{H>ti&&(J=E(H));var P=typeof x,L;if(P==="string"){if(d){let G=d[x];if(G>=0){G<16?J[H++]=G+224:(J[H++]=198,G&1?v(15-G>>1):v(G-16>>1));return}else if(h&&!e.pack){let k=h.get(x);k?k.count++:h.set(x,{count:1})}}let F=x.length;if(St&&F>=4&&F<1024){if((St.size+=F)>Qv){let k,b=(St[0]?St[0].length*3+St[1].length:0)+10;H+b>ti&&(J=E(H+b)),J[H++]=217,J[H++]=223,J[H++]=249,J[H++]=St.position?132:130,J[H++]=26,k=H-t,H+=4,St.position&&_f(t,v),St=["",""],St.size=0,St.position=k}let G=ex.test(x);St[G?0:1]+=x,J[H++]=G?206:207,v(F);return}let I;F<32?I=1:F<256?I=2:F<65536?I=3:I=5;let W=F*3;if(H+W>ti&&(J=E(H+W)),F<64||!o){let G,k,b,U=H+I;for(G=0;G<F;G++)k=x.charCodeAt(G),k<128?J[U++]=k:k<2048?(J[U++]=k>>6|192,J[U++]=k&63|128):(k&64512)===55296&&((b=x.charCodeAt(G+1))&64512)===56320?(k=65536+((k&1023)<<10)+(b&1023),G++,J[U++]=k>>18|240,J[U++]=k>>12&63|128,J[U++]=k>>6&63|128,J[U++]=k&63|128):(J[U++]=k>>12|224,J[U++]=k>>6&63|128,J[U++]=k&63|128);L=U-H-I}else L=o(x,H+I,W);L<24?J[H++]=96|L:L<256?(I<2&&J.copyWithin(H+2,H+1,H+1+L),J[H++]=120,J[H++]=L):L<65536?(I<3&&J.copyWithin(H+3,H+2,H+2+L),J[H++]=121,J[H++]=L>>8,J[H++]=L&255):(I<5&&J.copyWithin(H+5,H+3,H+3+L),J[H++]=122,at.setUint32(H,L),H+=4),H+=L}else if(P==="number")if(!this.alwaysUseFloat&&x>>>0===x)x<24?J[H++]=x:x<256?(J[H++]=24,J[H++]=x):x<65536?(J[H++]=25,J[H++]=x>>8,J[H++]=x&255):(J[H++]=26,at.setUint32(H,x),H+=4);else if(!this.alwaysUseFloat&&x>>0===x)x>=-24?J[H++]=31-x:x>=-256?(J[H++]=56,J[H++]=~x):x>=-65536?(J[H++]=57,at.setUint16(H,~x),H+=2):(J[H++]=58,at.setUint32(H,~x),H+=4);else{let F;if((F=this.useFloat32)>0&&x<4294967296&&x>=-2147483648){J[H++]=250,at.setFloat32(H,x);let I;if(F<4||(I=x*jo[(J[H]&127)<<1|J[H+1]>>7])>>0===I){H+=4;return}else H--}J[H++]=251,at.setFloat64(H,x),H+=8}else if(P==="object")if(!x)J[H++]=246;else{if(a){let I=a.get(x);if(I){if(J[H++]=216,J[H++]=29,J[H++]=25,!I.references){let W=a.idsToInsert||(a.idsToInsert=[]);I.references=[],W.push(I)}I.references.push(H-t),H+=2;return}else a.set(x,{offset:H-t})}let F=x.constructor;if(F===Object)y(x,!0);else if(F===Array){L=x.length,L<24?J[H++]=128|L:Ln(L);for(let I=0;I<L;I++)v(x[I])}else if(F===Map)if((this.mapsAsObjects?this.useTag259ForMaps!==!1:this.useTag259ForMaps)&&(J[H++]=217,J[H++]=1,J[H++]=3),L=x.size,L<24?J[H++]=160|L:L<256?(J[H++]=184,J[H++]=L):L<65536?(J[H++]=185,J[H++]=L>>8,J[H++]=L&255):(J[H++]=186,at.setUint32(H,L),H+=4),c.keyMap)for(let[I,W]of x)v(c.encodeKey(I)),v(W);else for(let[I,W]of x)v(I),v(W);else{for(let I=0,W=Lo.length;I<W;I++){let G=nh[I];if(x instanceof G){let k=Lo[I],b=k.tag;b==null&&(b=k.getTag&&k.getTag.call(this,x)),b<24?J[H++]=192|b:b<256?(J[H++]=216,J[H++]=b):b<65536?(J[H++]=217,J[H++]=b>>8,J[H++]=b&255):b>-1&&(J[H++]=218,at.setUint32(H,b),H+=4),k.encode.call(this,x,v,E);return}}if(x[Symbol.iterator]){if(Qa){let I=new Error("Iterable should be serialized as iterator");throw I.iteratorNotHandled=!0,I}J[H++]=159;for(let I of x)v(I);J[H++]=255;return}if(x[Symbol.asyncIterator]||eo(x)){let I=new Error("Iterable/blob should be serialized as iterator");throw I.iteratorNotHandled=!0,I}if(this.useToJSON&&x.toJSON){const I=x.toJSON();if(I!==x)return v(I)}y(x,!x.hasOwnProperty)}}else if(P==="boolean")J[H++]=x?245:244;else if(P==="bigint"){if(x<BigInt(1)<<BigInt(64)&&x>=0)J[H++]=27,at.setBigUint64(H,x);else if(x>-(BigInt(1)<<BigInt(64))&&x<0)J[H++]=59,at.setBigUint64(H,-x-BigInt(1));else if(this.largeBigIntToFloat)J[H++]=251,at.setFloat64(H,Number(x));else throw new RangeError(x+" was too large to fit in CBOR 64-bit integer format, set largeBigIntToFloat to convert to float-64");H+=8}else if(P==="undefined")J[H++]=247;else throw new Error("Unknown type: "+P)},y=this.useRecords===!1?this.variableMapSize?x=>{let P=Object.keys(x),L=Object.values(x),F=P.length;if(F<24?J[H++]=160|F:F<256?(J[H++]=184,J[H++]=F):F<65536?(J[H++]=185,J[H++]=F>>8,J[H++]=F&255):(J[H++]=186,at.setUint32(H,F),H+=4),c.keyMap)for(let I=0;I<F;I++)v(c.encodeKey(P[I])),v(L[I]);else for(let I=0;I<F;I++)v(P[I]),v(L[I])}:(x,P)=>{J[H++]=185;let L=H-t;H+=2;let F=0;if(c.keyMap)for(let I in x)(P||x.hasOwnProperty(I))&&(v(c.encodeKey(I)),v(x[I]),F++);else for(let I in x)(P||x.hasOwnProperty(I))&&(v(I),v(x[I]),F++);J[L+++t]=F>>8,J[L+t]=F&255}:(x,P)=>{let L,F=s.transitions||(s.transitions=Object.create(null)),I=0,W=0,G,k;if(this.keyMap){k=Object.keys(x).map(U=>this.encodeKey(U)),W=k.length;for(let U=0;U<W;U++){let j=k[U];L=F[j],L||(L=F[j]=Object.create(null),I++),F=L}}else for(let U in x)(P||x.hasOwnProperty(U))&&(L=F[U],L||(F[nn]&1048576&&(G=F[nn]&65535),L=F[U]=Object.create(null),I++),F=L,W++);let b=F[nn];if(b!==void 0)b&=65535,J[H++]=217,J[H++]=b>>8|224,J[H++]=b&255;else if(k||(k=F.__keys__||(F.__keys__=Object.keys(x))),G===void 0?(b=s.nextId++,b||(b=0,s.nextId=1),b>=df&&(s.nextId=(b=f)+1)):b=G,s[b]=k,b<f){J[H++]=217,J[H++]=b>>8|224,J[H++]=b&255,F=s.transitions;for(let U=0;U<W;U++)(F[nn]===void 0||F[nn]&1048576)&&(F[nn]=b),F=F[k[U]];F[nn]=b|1048576,i=!0}else{if(F[nn]=b,at.setUint32(H,3655335680),H+=3,I&&(m+=T*I),p.length>=df-f&&(p.shift()[nn]=void 0),p.push(F),Ln(W+2),v(57344+b),v(k),P===null)return;for(let U in x)(P||x.hasOwnProperty(U))&&v(x[U]);return}if(W<24?J[H++]=128|W:Ln(W),P!==null)for(let U in x)(P||x.hasOwnProperty(U))&&v(x[U])},E=x=>{let P;if(x>16777216){if(x-t>pf)throw new Error("Encoded buffer would be larger than maximum buffer size");P=Math.min(pf,Math.round(Math.max((x-t)*(x>67108864?1.25:2),4194304)/4096)*4096)}else P=(Math.max(x-t<<2,J.length-1)>>12)+1<<12;let L=new Za(P);return at=new DataView(L.buffer,0,P),J.copy?J.copy(L,0,t,x):L.set(J.slice(t,x)),H-=t,t=0,ti=L.length-10,J=L};let w=100,R=1e3;this.encodeAsIterable=function(x,P){return $(x,P,B)},this.encodeAsAsyncIterable=function(x,P){return $(x,P,N)};function*B(x,P,L){let F=x.constructor;if(F===Object){let I=c.useRecords!==!1;I?y(x,null):mf(Object.keys(x).length,160);for(let W in x){let G=x[W];I||v(W),G&&typeof G=="object"?P[W]?yield*B(G,P[W]):yield*M(G,P,W):v(G)}}else if(F===Array){let I=x.length;Ln(I);for(let W=0;W<I;W++){let G=x[W];G&&(typeof G=="object"||H-t>w)?P.element?yield*B(G,P.element):yield*M(G,P,"element"):v(G)}}else if(x[Symbol.iterator]){J[H++]=159;for(let I of x)I&&(typeof I=="object"||H-t>w)?P.element?yield*B(I,P.element):yield*M(I,P,"element"):v(I);J[H++]=255}else eo(x)?(mf(x.size,64),yield J.subarray(t,H),yield x,A()):x[Symbol.asyncIterator]?(J[H++]=159,yield J.subarray(t,H),yield x,A(),J[H++]=255):v(x);L&&H>t?yield J.subarray(t,H):H-t>w&&(yield J.subarray(t,H),A())}function*M(x,P,L){let F=H-t;try{v(x),H-t>w&&(yield J.subarray(t,H),A())}catch(I){if(I.iteratorNotHandled)P[L]={},H=t+F,yield*B.call(this,x,P[L]);else throw I}}function A(){w=R,c.encode(null,to)}function $(x,P,L){return P&&P.chunkThreshold?w=R=P.chunkThreshold:w=100,x&&typeof x=="object"?(c.encode(null,to),L(x,c.iterateProperties||(c.iterateProperties={}),!0)):[c.encode(x)]}async function*N(x,P){for(let L of B(x,P,!0)){let F=L.constructor;if(F===hf||F===Uint8Array)yield L;else if(eo(L)){let I=L.stream().getReader(),W;for(;!(W=await I.read()).done;)yield W.value}else if(L[Symbol.asyncIterator])for await(let I of L)A(),I?yield*N(I,P.async||(P.async={})):yield c.encode(I);else yield L}}}useBuffer(e){J=e,at=new DataView(J.buffer,J.byteOffset,J.byteLength),H=0}clearSharedData(){this.structures&&(this.structures=[]),this.sharedValues&&(this.sharedValues=void 0)}updateSharedData(){let e=this.sharedVersion||0;this.sharedVersion=e+1;let t=this.structures.slice(0),n=new ih(t,this.sharedValues,this.sharedVersion),i=this.saveShared(n,s=>(s&&s.version||0)==e);return i===!1?(n=this.getShared()||{},this.structures=n.structures||[],this.sharedValues=n.packedValues,this.sharedVersion=n.version,this.structures.nextId=this.structures.length):t.forEach((s,a)=>this.structures[a]=s),i}}function mf(r,e){r<24?J[H++]=e|r:r<256?(J[H++]=e|24,J[H++]=r):r<65536?(J[H++]=e|25,J[H++]=r>>8,J[H++]=r&255):(J[H++]=e|26,at.setUint32(H,r),H+=4)}class ih{constructor(e,t,n){this.structures=e,this.packedValues=t,this.version=n}}function Ln(r){r<24?J[H++]=128|r:r<256?(J[H++]=152,J[H++]=r):r<65536?(J[H++]=153,J[H++]=r>>8,J[H++]=r&255):(J[H++]=154,at.setUint32(H,r),H+=4)}const nx=typeof Blob>"u"?function(){}:Blob;function eo(r){if(r instanceof nx)return!0;let e=r[Symbol.toStringTag];return e==="Blob"||e==="File"}function Xs(r,e){switch(typeof r){case"string":if(r.length>3){if(e.objectMap[r]>-1||e.values.length>=e.maxValues)return;let n=e.get(r);if(n)++n.count==2&&e.values.push(r);else if(e.set(r,{count:1}),e.samplingPackedValues){let i=e.samplingPackedValues.get(r);i?i.count++:e.samplingPackedValues.set(r,{count:1})}}break;case"object":if(r)if(r instanceof Array)for(let n=0,i=r.length;n<i;n++)Xs(r[n],e);else{let n=!e.encoder.useRecords;for(var t in r)r.hasOwnProperty(t)&&(n&&Xs(t,e),Xs(r[t],e))}break;case"function":console.log(r)}}const ix=new Uint8Array(new Uint16Array([1]).buffer)[0]==1;nh=[Date,Set,Error,RegExp,Ai,ArrayBuffer,Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,typeof BigUint64Array>"u"?function(){}:BigUint64Array,Int8Array,Int16Array,Int32Array,typeof BigInt64Array>"u"?function(){}:BigInt64Array,Float32Array,Float64Array,ih];Lo=[{tag:1,encode(r,e){let t=r.getTime()/1e3;(this.useTimestamp32||r.getMilliseconds()===0)&&t>=0&&t<4294967296?(J[H++]=26,at.setUint32(H,t),H+=4):(J[H++]=251,at.setFloat64(H,t),H+=8)}},{tag:258,encode(r,e){let t=Array.from(r);e(t)}},{tag:27,encode(r,e){e([r.name,r.message])}},{tag:27,encode(r,e){e(["RegExp",r.source,r.flags])}},{getTag(r){return r.tag},encode(r,e){e(r.value)}},{encode(r,e,t){gf(r,t)}},{getTag(r){if(r.constructor===Uint8Array&&(this.tagUint8Array||Qr&&this.tagUint8Array!==!1))return 64},encode(r,e,t){gf(r,t)}},Un(68,1),Un(69,2),Un(70,4),Un(71,8),Un(72,1),Un(77,2),Un(78,4),Un(79,8),Un(85,4),Un(86,8),{encode(r,e){let t=r.packedValues||[],n=r.structures||[];if(t.values.length>0){J[H++]=216,J[H++]=51,Ln(4);let i=t.values;e(i),Ln(0),Ln(0),packedObjectMap=Object.create(sharedPackedObjectMap||null);for(let s=0,a=i.length;s<a;s++)packedObjectMap[i[s]]=s}if(n){at.setUint32(H,3655335424),H+=3;let i=n.slice(0);i.unshift(57344),i.push(new Ai(r.version,1399353956)),e(i)}else e(new Ai(r.version,1399353956))}}];function Un(r,e){return!ix&&e>1&&(r-=4),{tag:r,encode:function(n,i){let s=n.byteLength,a=n.byteOffset||0,o=n.buffer||n;i(Qr?sa.from(o,a,s):new Uint8Array(o,a,s))}}}function gf(r,e){let t=r.byteLength;t<24?J[H++]=64+t:t<256?(J[H++]=88,J[H++]=t):t<65536?(J[H++]=89,J[H++]=t>>8,J[H++]=t&255):(J[H++]=90,at.setUint32(H,t),H+=4),H+t>=J.length&&e(H+t),J.set(r.buffer?r:new Uint8Array(r),H),H+=t}function rx(r,e){let t,n=e.length*2,i=r.length-n;e.sort((s,a)=>s.offset>a.offset?1:-1);for(let s=0;s<e.length;s++){let a=e[s];a.id=s;for(let o of a.references)r[o++]=s>>8,r[o]=s&255}for(;t=e.pop();){let s=t.offset;r.copyWithin(s+n,s,i),n-=2;let a=s+n;r[a++]=216,r[a++]=28,i=s}return r}function _f(r,e){at.setUint32(St.position+r,H-St.position-r+1);let t=St;St=null,e(t[0]),e(t[1])}let qo=new tx({useRecords:!1});qo.encode;qo.encodeAsIterable;qo.encodeAsAsyncIterable;const vf=512,sx=1024,to=2048;function wi(r,e,t,n){Object.defineProperty(r,e,{get:t,set:n,enumerable:!0,configurable:!0})}class rh{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let s=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:s,data:c,total:i};t.push(l),a=o,s++}return this._dataCount++,t}}}function ax(r){let e=0;for(const i of r)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of r)t.set(i,n),n+=i.byteLength;return t}const no=af.default||af,Dr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const r=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(r)?r==="chrome"?e>=this.minChromeVersion:r==="firefox"?e>=this.minFirefoxVersion:r==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return no.browserDetails.browser}getVersion(){return no.browserDetails.version||0}isUnifiedPlanSupported(){const r=this.getBrowser(),e=no.browserDetails.version||0;if(r==="chrome"&&e<this.minChromeVersion)return!1;if(r==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},ox=r=>!r||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(r),sh=()=>Math.random().toString(36).slice(2),xf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class cx extends rh{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=xf,this.browser=Dr.getBrowser(),this.browserVersion=Dr.getVersion(),this.pack=gu,this.unpack=mu,this.supports=function(){const t={browser:Dr.isBrowserSupported(),webRTC:Dr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(xf),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Dr.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=ox,this.randomToken=sh}}const Kt=new cx,lx="PeerJS: ";var fn;(function(r){r[r.Disabled=0]="Disabled",r[r.Errors=1]="Errors",r[r.Warnings=2]="Warnings",r[r.All=3]="All"})(fn||(fn={}));class fx{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=fn.All&&this._print(fn.All,...e)}warn(...e){this._logLevel>=fn.Warnings&&this._print(fn.Warnings,...e)}error(...e){this._logLevel>=fn.Errors&&this._print(fn.Errors,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[lx,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=fn.All?console.log(...n):e>=fn.Warnings?console.warn("WARNING",...n):e>=fn.Errors&&console.error("ERROR",...n)}constructor(){this._logLevel=fn.Disabled}}var Oe=new fx,Ko={},ux=Object.prototype.hasOwnProperty,Ht="~";function jr(){}Object.create&&(jr.prototype=Object.create(null),new jr().__proto__||(Ht=!1));function hx(r,e,t){this.fn=r,this.context=e,this.once=t||!1}function ah(r,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new hx(t,n||r,i),a=Ht?Ht+e:e;return r._events[a]?r._events[a].fn?r._events[a]=[r._events[a],s]:r._events[a].push(s):(r._events[a]=s,r._eventsCount++),r}function js(r,e){--r._eventsCount===0?r._events=new jr:delete r._events[e]}function kt(){this._events=new jr,this._eventsCount=0}kt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)ux.call(t,n)&&e.push(Ht?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};kt.prototype.listeners=function(e){var t=Ht?Ht+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,s=n.length,a=new Array(s);i<s;i++)a[i]=n[i].fn;return a};kt.prototype.listenerCount=function(e){var t=Ht?Ht+e:e,n=this._events[t];return n?n.fn?1:n.length:0};kt.prototype.emit=function(e,t,n,i,s,a){var o=Ht?Ht+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,f,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,s),!0;case 6:return c.fn.call(c.context,t,n,i,s,a),!0}for(u=1,f=new Array(l-1);u<l;u++)f[u-1]=arguments[u];c.fn.apply(c.context,f)}else{var h=c.length,d;for(u=0;u<h;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,i);break;default:if(!f)for(d=1,f=new Array(l-1);d<l;d++)f[d-1]=arguments[d];c[u].fn.apply(c[u].context,f)}}return!0};kt.prototype.on=function(e,t,n){return ah(this,e,t,n,!1)};kt.prototype.once=function(e,t,n){return ah(this,e,t,n,!0)};kt.prototype.removeListener=function(e,t,n,i){var s=Ht?Ht+e:e;if(!this._events[s])return this;if(!t)return js(this,s),this;var a=this._events[s];if(a.fn)a.fn===t&&(!i||a.once)&&(!n||a.context===n)&&js(this,s);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||i&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[s]=c.length===1?c[0]:c:js(this,s)}return this};kt.prototype.removeAllListeners=function(e){var t;return e?(t=Ht?Ht+e:e,this._events[t]&&js(this,t)):(this._events=new jr,this._eventsCount=0),this};kt.prototype.off=kt.prototype.removeListener;kt.prototype.addListener=kt.prototype.on;kt.prefixed=Ht;kt.EventEmitter=kt;Ko=kt;var Pi={};wi(Pi,"ConnectionType",()=>Fn);wi(Pi,"PeerErrorType",()=>ht);wi(Pi,"BaseConnectionErrorType",()=>Yr);wi(Pi,"DataConnectionErrorType",()=>qr);wi(Pi,"SerializationType",()=>fr);wi(Pi,"SocketEventType",()=>In);wi(Pi,"ServerMessageType",()=>At);var Fn;(function(r){r.Data="data",r.Media="media"})(Fn||(Fn={}));var ht;(function(r){r.BrowserIncompatible="browser-incompatible",r.Disconnected="disconnected",r.InvalidID="invalid-id",r.InvalidKey="invalid-key",r.Network="network",r.PeerUnavailable="peer-unavailable",r.SslUnavailable="ssl-unavailable",r.ServerError="server-error",r.SocketError="socket-error",r.SocketClosed="socket-closed",r.UnavailableID="unavailable-id",r.WebRTC="webrtc"})(ht||(ht={}));var Yr;(function(r){r.NegotiationFailed="negotiation-failed",r.ConnectionClosed="connection-closed"})(Yr||(Yr={}));var qr;(function(r){r.NotOpenYet="not-open-yet",r.MessageToBig="message-too-big"})(qr||(qr={}));var fr;(function(r){r.Binary="binary",r.BinaryUTF8="binary-utf8",r.JSON="json",r.None="raw"})(fr||(fr={}));var In;(function(r){r.Message="message",r.Disconnected="disconnected",r.Error="error",r.Close="close"})(In||(In={}));var At;(function(r){r.Heartbeat="HEARTBEAT",r.Candidate="CANDIDATE",r.Offer="OFFER",r.Answer="ANSWER",r.Open="OPEN",r.Error="ERROR",r.IdTaken="ID-TAKEN",r.InvalidKey="INVALID-KEY",r.Leave="LEAVE",r.Expire="EXPIRE"})(At||(At={}));var Jo={};Jo=JSON.parse('{"name":"peerjs","version":"1.5.1","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-cbor":"dist/serializer.cbor.mjs","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-cbor":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/Cbor.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","cbor-x":"^1.5.3","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.0.0","webrtc-adapter":"^8.0.0"},"alias":{"process":false,"buffer":false}}');class dx extends Ko.EventEmitter{constructor(e,t,n,i,s,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+i+"peerjs?key="+s}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Jo.version),this._disconnected=!1,this._socket.onmessage=i=>{let s;try{s=JSON.parse(i.data),Oe.log("Server message received:",s)}catch{Oe.log("Invalid server message",i.data);return}this.emit(In.Message,s)},this._socket.onclose=i=>{this._disconnected||(Oe.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(In.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Oe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Oe.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:At.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(In.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class oh{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Fn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},s=t.createDataChannel(n.label,i);n._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Oe.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,s=this.connection.provider;Oe.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(Oe.log(`Received ICE candidates for ${t}:`,a.candidate),s.socket.send({type:At.Candidate,payload:{candidate:a.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Oe.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Yr.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Oe.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Yr.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Oe.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Oe.log("Listening for data channel"),e.ondatachannel=a=>{Oe.log("Received data channel");const o=a.channel;s.getConnection(t,n)._initializeDataChannel(o)},Oe.log("Listening for remote stream"),e.ontrack=a=>{Oe.log("Received remote stream");const o=a.streams[0],c=s.getConnection(t,n);if(c.type===Fn.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){Oe.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);Oe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Oe.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Fn.Data){const s=this.connection;i={...i,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:At.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(ht.WebRTC,i),Oe.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(ht.WebRTC,n),Oe.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();Oe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Oe.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:At.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(ht.WebRTC,i),Oe.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(ht.WebRTC,n),Oe.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;Oe.log("Setting remote description",t);const s=this;try{await n.setRemoteDescription(t),Oe.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(a){i.emitError(ht.WebRTC,a),Oe.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){Oe.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Oe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(ht.WebRTC,t),Oe.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Oe.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Oe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Oe.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class ch extends Ko.EventEmitter{emitError(e,t){Oe.error("Error:",t),this.emit("error",new px(`${e}`,t))}}class px extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class lh extends ch{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Io;const Br=class Br extends lh{get type(){return Fn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Br.ID_PREFIX+Kt.randomToken(),this._negotiator=new oh(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Oe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Oe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Oe.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case At.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case At.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Oe.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Oe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Io=new WeakMap,Cr(Br,Io,(()=>{Br.ID_PREFIX="mc_"})());let $s=Br;class mx{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:s,key:a}=this._options,o=new URL(`${t}://${n}:${i}${s}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",Jo.version),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Oe.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Kt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Kt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Oe.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Fo,Oo;const vi=class vi extends lh{get type(){return Fn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||vi.ID_PREFIX+sh(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new oh(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Oe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Oe.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Oe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(qr.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case At.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case At.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Oe.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Fo=new WeakMap,Oo=new WeakMap,Cr(vi,Fo,(()=>{vi.ID_PREFIX="dc_"})()),Cr(vi,Oo,(()=>{vi.MAX_BUFFERED_AMOUNT=8388608})());let Zs=vi;class $o extends Zs{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Zs.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Oe.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class ro extends $o{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new rh,this.serialization=fr.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=mu(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=ax(n.data);this._handleDataMessage({data:i})}}_send(e,t){if(e instanceof Blob)return e.arrayBuffer().then(i=>{this._send(i,t)});const n=gu(e);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}_sendChunks(e){const t=this.chunker.chunk(e);Oe.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class gx extends $o{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=fr.None}}class _x extends $o{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Kt.chunkedMTU){this.emitError(qr.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=fr.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var ko;const Gr=class Gr extends ch{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:gx,json:_x,binary:ro,"binary-utf8":ro,default:ro},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Kt.CLOUD_HOST,port:Kt.CLOUD_PORT,path:"/",key:Gr.DEFAULT_KEY,token:Kt.randomToken(),config:Kt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Kt.CLOUD_HOST?this._options.secure=Kt.isSecure():this._options.host==Kt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Oe.setLogFunction(this._options.logFunction),Oe.logLevel=this._options.debug||0,this._api=new mx(t),this._socket=this._createServerConnection(),!Kt.supports.audioVideo&&!Kt.supports.data){this._delayedAbort(ht.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Kt.validateId(n)){this._delayedAbort(ht.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(ht.ServerError,i))}_createServerConnection(){const e=new dx(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(In.Message,t=>{this._handleMessage(t)}),e.on(In.Error,t=>{this._abort(ht.SocketError,t)}),e.on(In.Disconnected,()=>{this.disconnected||(this.emitError(ht.Network,"Lost connection to server."),this.disconnect())}),e.on(In.Close,()=>{this.disconnected||this._abort(ht.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case At.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case At.Error:this._abort(ht.ServerError,n.msg);break;case At.IdTaken:this._abort(ht.UnavailableID,`ID "${this.id}" is taken`);break;case At.InvalidKey:this._abort(ht.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case At.Leave:Oe.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case At.Expire:this.emitError(ht.PeerUnavailable,`Could not connect to peer ${i}`);break;case At.Offer:{const s=n.connectionId;let a=this.getConnection(i,s);if(a&&(a.close(),Oe.warn(`Offer received for existing Connection ID:${s}`)),n.type===Fn.Media){const c=new $s(i,this,{connectionId:s,_payload:n,metadata:n.metadata});a=c,this._addConnection(i,a),this.emit("call",c)}else if(n.type===Fn.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(i,a),this.emit("connection",c)}else{Oe.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(s);for(const c of o)a.handleMessage(c);break}default:{if(!n){Oe.warn(`You received a malformed message from ${i} of type ${t}`);return}const s=n.connectionId,a=this.getConnection(i,s);a&&a.peerConnection?a.handleMessage(e):s?this._storeMessage(s,e):Oe.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Oe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(ht.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Oe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(ht.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Oe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new $s(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){Oe.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Oe.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Oe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;Oe.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Oe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Oe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(ht.ServerError,t))}};ko=new WeakMap,Cr(Gr,ko,(()=>{Gr.DEFAULT_KEY="peerjs"})());let Do=Gr;class vx extends Cv{constructor(t){super();st(this,"socketId",null);st(this,"socket",null);st(this,"name",null);st(this,"score",0);st(this,"users",{});st(this,"ready",!1);this.name=t,this.socket=io(),this.init()}init(){this.setupListeners()}setState(t){switch(this.state=t,this.emit("statechange",this.state),t){case"loading":this.validateProfile(),this.setState("connecting");break;case"connecting":this.connect();break}}initprofile(){this.socket.emit("joinprofile",{name:this.name,score:this.score})}getroster(){this.socket.emit("getroster")}setupListeners(){this.socket.on("connect",async()=>{this.socketId=this.socket.id,await this.setupPeerServer(),this.initprofile(),this.getroster()}),this.socket.on("roster",t=>{this.users=t.roster;for(const[n,i]of Object.entries(t.roster))this.loadUser(n,i);this.setState("ready")}),this.socket.on("userjoin",t=>{this.loadUser(t.uid,t.profile)}),this.socket.on("userleft",t=>{delete this.users[t.uid]}),this.socket.on("disconnect",()=>{console.log("disconnected")})}loadUser(t,n){if(t!==this.socketId){const i=new Av(t,n,this.peer);this.users[t]={peer:i,profile:n,ready:!1}}}async setupPeerServer(){return new Promise(async(t,n)=>{const i=await xx();this.peer=new Do(this.socketId,{config:{iceServers:[i.v.iceServers],pingInterval:500}}),this.peer.on("open",s=>{t()}),this.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,this.peer.on("call",s=>{this.getUserMedia({video:!0,audio:!0},a=>{s.answer(a)},function(a){console.log("Failed to get local stream",a)})}),this.peer.on("connection",s=>{s.on("data",a=>{const o=a.event,c=a.uid;switch(o){case"handshake":a.data.step==="start"&&s.send({uid:this.socketId,event:"handshake",data:{step:"accept"}}),a.data.step==="accept"&&s.send({uid:this.socketId,event:"handshake",data:{step:"complete"}}),a.data.step==="complete"&&this.userOnline(c,s);break;case"readyupdate":this.sendUserEvent(a),this.updateUserReady(c,a.data);break;case"startgame":this.sendUserEvent(a);break;case"scoreupdate":this.sendUserEvent(a),this.updateUserScore(c,a.data);break;case"gameupdate":this.handleGameUpdate(c,a.data);break}})})})}sendUserEvent(t){this.emit(t.event,t)}userOnline(t,n){t!=this.socketId&&(this.users[t].connection=n,this.users[t].ready=!1,this.emit("p2puseronline",{uid:t,user:this.users[t]}),this.setupUserCall(t))}setupUserCall(t){var n=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;n({video:!0,audio:!0},i=>{var s=this.peer.call(t,i);s.on("stream",a=>{this.callStart(t,a)})},function(i){console.log("Failed to get local stream",i)})}callStart(t,n){this.users[t].stream=n,this.emit("callstart",{uid:t,stream:n})}handleGameUpdate(t,n){this.emit("gameupdate",{uid:t,data:n}),this.users[t].profile.score=n.score}updateUserReady(t,n){this.users[t].ready=n.ready;let i=!1;const s=Object.keys(this.users).filter(a=>!this.users[a].ready&&a!==this.socketId&&this.ready);Object.keys(s).length||(i=!0),this.emit("allready",{data:{status:i}})}broadcastStartGame(){this.broadcast({uid:this.socketId,event:"startgame",data:{}})}broadcast(t){for(const[n,i]of Object.entries(this.users))i.connection&&i.peer.connection.send(t)}setReady(t){this.ready=t;let n=!1;Object.values(this.users).every(i=>i.ready)&&(n=!0),this.emit("allready",{data:{status:n}}),this.broadcast({uid:this.socketId,event:"readyupdate",data:{ready:t}})}sendGameUpdateEvent(t,n){this.broadcast({uid:this.socketId,event:"gameupdate",data:{score:t,characters:n}})}}async function xx(){return new Promise((r,e)=>{try{let t=new XMLHttpRequest;t.onreadystatechange=function(n){try{if(t.readyState==4&&t.status==200){let i=JSON.parse(t.responseText);r(i)}}catch(i){console.log(i)}},t.open("PUT","https://global.xirsys.net/_turn/MyFirstApp",!0),t.setRequestHeader("Authorization","Basic "+btoa("deadener:225b9c68-70eb-11ed-aa8f-0242ac150003")),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({format:"urls"}))}catch(t){console.log(t),r(null)}})}let Is;const yx=new Uint8Array(16);function Sx(){if(!Is&&(Is=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Is))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Is(yx)}const Dt=[];for(let r=0;r<256;++r)Dt.push((r+256).toString(16).slice(1));function Mx(r,e=0){return Dt[r[e+0]]+Dt[r[e+1]]+Dt[r[e+2]]+Dt[r[e+3]]+"-"+Dt[r[e+4]]+Dt[r[e+5]]+"-"+Dt[r[e+6]]+Dt[r[e+7]]+"-"+Dt[r[e+8]]+Dt[r[e+9]]+"-"+Dt[r[e+10]]+Dt[r[e+11]]+Dt[r[e+12]]+Dt[r[e+13]]+Dt[r[e+14]]+Dt[r[e+15]]}const bx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),yf={randomUUID:bx};function Ex(r,e,t){if(yf.randomUUID&&!e&&!r)return yf.randomUUID();r=r||{};const n=r.random||(r.rng||Sx)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(let i=0;i<16;++i)e[t+i]=n[i];return e}return Mx(n)}class Tx extends HTMLElement{constructor(){super();st(this,"appstate","loading");st(this,"name",null);st(this,"frameCallback",null);st(this,"someoneOnline",!1);this.attachShadow({mode:"open"}),this.setAppState("initializing")}async setAppState(t){switch(this.appstate=t,t){case"initializing":await this.initialize(),this.setAppState("objectloading");break;case"objectloading":this.loadInitialObjects(),this.animateRenderer(),this.setAppState("waitingonname");break;case"waitingonname":break;case"waitingonopponents":break;case"serverloading":this.loadServer(),this.setAppState("loaded");break;case"loaded":this.setGlobalCtx(),this.setAppState("waitinplayersgready");break;case"waitinplayersgready":break;case"startinggame":this.sendoutStartGame(),this.loadGame(),this.setAppState("gamestarted");break;case"remotestarted":this.loadGame(),this.setAppState("gamestarted");break}this.dispatchEvent(new CustomEvent("appstatechange",{state:t}))}async initialize(){this.scene=new x_,this.camera=new un(100,window.innerWidth/window.innerHeight,.1,1e3);const t=new tu;t.setSize(window.innerWidth,window.innerHeight),this.renderer=t,this.shadowRoot.appendChild(t.domElement),this.camera.position.z=5}loadInitialObjects(){document.getElementById("nameinputbtn").addEventListener("click",this.nameInputCallback.bind(this)),document.getElementById("readybtn").addEventListener("click",this.readyBtnCallback.bind(this)),this.camera.position.z=5,this.scene.add(new R_(16777215));const i=new A_(16777215,1.5);i.position.set(0,2,0),i.castShadow=!0,i.shadow.camera.near=1,i.shadow.camera.far=10,i.shadow.camera.right=1,i.shadow.camera.left=-1,i.shadow.camera.top=1,i.shadow.camera.bottom=-1,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,this.scene.add(i);const s=new oi(600,60,1,1),a=new rn(s,new E_({color:10530223,shininess:10}));a.rotation.x=-Math.PI/2,a.position.y=-30.5,a.position.z=2,this.scene.add(a);const o=new kl(2e3,100);o.position.y=-199,o.material.opacity=.25,o.material.transparent=!0,this.scene.add(o);const c=new kl(2e3,100);c.position.z=-400,c.rotation.x=-Math.PI/2,c.material.opacity=.25,c.material.transparent=!0,this.scene.add(c)}readyBtnCallback(){this.ready=!0,document.getElementById("readybtn").style.display="none",this.server.setReady(!0)}nameInputCallback(){const n=document.getElementById("name").value;if(!n){alert("Please enter a name");return}this.name=n,document.getElementById("nameinput").style.display="none",document.getElementById("waiting").style.display="block";const i=document.getElementById("readybtn");i.disabled=!0,this.setAppState("serverloading")}animateRenderer(){this.renderer.render(this.scene,this.camera),this.frameCallback&&this.frameCallback(),requestAnimationFrame(this.animateRenderer.bind(this))}loadServer(){this.server=new vx(this.name),this.server.on("p2puseronline",this.p2pUserOnlineCallback.bind(this)),this.server.on("p2puseroffline",this.p2pUserOfflineCallback.bind(this)),this.server.on("readyupdate",this.readyUpdateCallback.bind(this)),this.server.on("scoreupdate",this.scoreUpdateCallback.bind(this)),this.server.on("allready",this.allReadyCallback.bind(this)),this.server.on("startgame",this.startGameCallback.bind(this)),this.server.on("gameupdate",this.gameUpdateCallback.bind(this)),this.server.on("callstart",this.callStartCallback.bind(this))}callStartCallback(t){if(!document.getElementById(`${t.uid}-video`)){const i=document.getElementById(t.uid),s=document.createElement("video");s.setAttribute("autoplay",!0),s.setAttribute("playsinline",!0),s.setAttribute("muted",!1),s.setAttribute("id",`${t.uid}-video`),s.style.width="100px",s.srcObject=t.stream,i.appendChild(s)}}gameUpdateCallback(t){this.scoreUpdateCallback(t)}startGameCallback(){this.setAppState("remotestarted")}allReadyCallback(t){t.data.status==!0&&this.ready==!0&&this.setAppState("startinggame")}readyUpdateCallback(t){const n=document.getElementById(`${t.uid}-status`);n.innerText=!!t.data.ready}scoreUpdateCallback(t){const n=document.getElementById(`${t.uid}-score`);n.innerText=Math.round(t.data.score)}p2pUserOfflineCallback(t){document.getElementById(t.uid).remove()}p2pUserOnlineCallback(t){this.someoneOnline=!0;const n=document.getElementById("readybtn");n.disabled=!1,this.addUserScoreboard(t)}addUserScoreboard(t){const n=document.createElement("div");n.setAttribute("id",t.uid);const i=document.createElement("span");i.innerText="Name: ";const s=document.createElement("span");s.innerText=t.user.peer.profile.name;const a=document.createElement("span");a.innerText="Score: ";const o=document.createElement("span");o.setAttribute("id",`${t.uid}-score`),o.innerText=t.user.peer.profile.score;const c=document.createElement("span");c.innerText="Ready: ";const l=document.createElement("span");l.setAttribute("id",`${t.uid}-status`),l.innerText=!!t.ready,n.appendChild(i),n.appendChild(s),n.insertAdjacentHTML("beforeend","<br>"),n.appendChild(a),n.appendChild(o),n.insertAdjacentHTML("beforeend","<br>"),n.appendChild(c),n.appendChild(l),document.getElementById("scoreboards").appendChild(n)}setGlobalCtx(){this.ctx={app:this,name:this.name,scene:this.scene,camera:this.camera,renderer:this.renderer,game:this.game,server:this.server}}sendoutStartGame(){this.server.broadcastStartGame()}loadGame(){const t=document.getElementById("waiting");t.style.display="none",this.game=new Cx(this.ctx)}setFrameCallback(t){this.frameCallback=t}}customElements.define("volu-game",Tx);class Cx{constructor(e){st(this,"state","loading");st(this,"render",null);st(this,"server",null);st(this,"scene",null);st(this,"points",0);st(this,"scoreboard",null);st(this,"missed",0);st(this,"gameMechanics",{fallingCharacters:[],startingChars:3,fallingSpeed:.001,startingy:3});st(this,"remoteUsersChars",{});st(this,"userVideos",{});this.ctx=e,this.render=this.ctx.renderer,this.server=this.ctx.server,this.scene=this.ctx.scene,this.setGameState("loading")}async setGameState(e){switch(this.state=e,e){case"loading":this.setupListeners(),this.setGameState("startgame");break;case"startgame":this.startGame(),this.setGameState("playing");break;case"playing":break;case"gameover":this.drawGameOverMenu();break}}setupListeners(){this.server.on("gameupdate",this.gameUpdateCallback.bind(this))}gameUpdateCallback(e){const t=e.data.characters,n=e.uid;if(!this.remoteUsersChars[n]){this.remoteUsersChars[n]={},this.drawRemoteUsersChars(n,t);return}this.drawRemoteUsersChars(n,t)}drawRemoteUsersChars(e,t){t.forEach(n=>{this.remoteUsersChars[e][n.uid]?(this.remoteUsersChars[e][n.uid].position.x=n.position.x,this.remoteUsersChars[e][n.uid].position.y=n.position.y,this.remoteUsersChars[e][n.uid].position.z=n.position.z):this.addRemoteUserChar(e,n)});for(const[n,i]of Object.entries(this.remoteUsersChars[e]))t.find(a=>a.uid==n)||(this.scene.remove(i),delete this.remoteUsersChars[e][n])}addRemoteUserChar(e,t){const n=new xo;this.scene.add(n);const i=t.char;n.text=i,n.fontSize=.2,n.position.x=t.position.x,n.position.y=t.position.y,n.position.z=t.position.z,n.color=10053375,n.sync(),this.remoteUsersChars[e][t.uid]=n}drawGameOverMenu(){const e=document.getElementById("gameover");e.style.display="block";const t=document.getElementById("finalscore");t.innerText=Math.round(this.points)}startGame(){this.ctx.app.setFrameCallback(this.frameCallback.bind(this)),window.addEventListener("keydown",this.keydownCallback.bind(this)),this.myColor=Math.floor(Math.random()*16777215).toString(16),this.startGameLoop()}startGameLoop(){this.initUserVideo(),this.initFallingCharacters(3),this.startIncrease(),this.updateRemoteUsers()}initUserVideo(){const e=this.server.users;for(const[t,n]of Object.entries(e))n.stream&&this.addUserVideo(t,n)}addUserVideo(e,t){const n=document.getElementById(`${e}-video`),i=new b_(n);i.minFilter=Rt,i.magFilter=Rt,i.colorSpace=ot;const s=new oi(2,2),a=new na({map:i}),o=new rn(s,a);o.position.z=-3,o.position.y=7,o.position.x=Math.random()*10-5,this.userVideos[e]=o,this.scene.add(o)}animateUserVideos(){for(const[e,t]of Object.entries(this.userVideos)){let n=.01;t.xdirection||(t.xdirection=n),t.position.x>3&&t.xdirection>0&&(t.xdirection=-n),t.position.x<-3&&t.xdirection<0&&(t.xdirection=n),t.position.x+=t.xdirection}}initFallingCharacters(e){for(let t=0;t<e;t++)this.initFallingCharacter()}startIncrease(){setTimeout(()=>{this.gameMechanics.fallingSpeed+=.001,this.startIncrease()},500)}initFallingCharacter(){const e=new xo;this.scene.add(e);const t=String.fromCharCode(97+Math.floor(Math.random()*26));e.text=t;const n=Math.random()*1.5+.1;e.fontSize=n,e.position.x=Math.random()*10-5;const i=Math.random()*-2+2;e.position.z=i,e.position.y=this.gameMechanics.startingy,e.color=65280,e.sync();const s=Math.random()*.015+.005,a={character:e,speed:s,points:1e4,uid:Ex()};this.gameMechanics.fallingCharacters.push(a)}frameCallback(){if(this.state=="gameover"){this.ctx.app.setFrameCallback(null);return}this.updateFallingCharacters(),this.animateUserVideos()}updateFallingCharacters(){this.gameMechanics.fallingCharacters.forEach(e=>{e.character.position.y-=e.speed+this.gameMechanics.fallingSpeed,e.points=e.points-e.speed*100,e.character.position.y<-4&&(this.scene.remove(e.character),this.gameMechanics.fallingCharacters.splice(this.gameMechanics.fallingCharacters.indexOf(e),1),this.missed++,this.missed>=3&&this.setGameState("gameover"))})}keydownCallback(e){const t=e.key;if(this.gameMechanics.fallingCharacters.length!=0){const n=this.gameMechanics.fallingCharacters.reduce((i,s)=>i.character.position.y<s.character.position.y?i:s);n.character.text==t&&this.hitKey(n)}}hitKey(e){e.character.color=16711680,e.character.sync(),this.points+=e.points,this.scene.remove(e.character),this.gameMechanics.fallingCharacters.splice(this.gameMechanics.fallingCharacters.indexOf(e),1),this.initFallingCharacter(),this.updateScore()}updateScore(){const e=document.getElementById("points");e.innerText=Math.round(this.points)}updateRemoteUsers(){if(this.state=="gameover")return;const e=this.gameMechanics.fallingCharacters.map(t=>({uid:t.uid,char:t.character.text,position:{x:t.character.position.x,y:t.character.position.y,z:t.character.position.z}}));this.server.sendGameUpdateEvent(this.points,e),setTimeout(()=>{this.updateRemoteUsers()},50)}}
