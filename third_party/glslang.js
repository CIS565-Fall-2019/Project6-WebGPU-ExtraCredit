
var glslangModule = (function() {
    var _scriptDir = import.meta.url;
    return (
  function(glslangModule) {
    glslangModule = glslangModule || {};
  
  var e;e||(e=typeof glslangModule !== 'undefined' ? glslangModule : {});e.compileGLSLZeroCopy=function(a,b,c){c=!!c;if("vertex"===b)var d=0;else if("fragment"===b)d=4;else if("compute"===b)d=5;else throw Error("shader_stage must be 'vertex', 'fragment', or 'compute'");b=e._malloc(4);var f=e._malloc(4),g=aa([a,d,c,b,f]);c=ba(b);a=ba(f);e._free(b);e._free(f);if(0===a)throw Error("GLSL compilation failed");b={};f=c/4;b.data=e.HEAPU32.subarray(f,f+a);b.fa=function(){e._destroy_output_buffer(g)};return b};
  e.compileGLSL=function(a,b,c){a=e.compileGLSLZeroCopy(a,b,c);b=a.data.slice();a.fa();return b};var m={},p;for(p in e)e.hasOwnProperty(p)&&(m[p]=e[p]);var ca=!1,r=!1;ca="object"===typeof window;r="function"===typeof importScripts;var t="",da;
  if(ca||r)r?t=self.location.href:document.currentScript&&(t=document.currentScript.src),_scriptDir&&(t=_scriptDir),0!==t.indexOf("blob:")?t=t.substr(0,t.lastIndexOf("/")+1):t="",r&&(da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ea=e.print||console.log.bind(console),u=e.printErr||console.warn.bind(console);for(p in m)m.hasOwnProperty(p)&&(e[p]=m[p]);m=null;
  var fa={"f64-rem":function(a,b){return a%b},"debugger":function(){}},v;e.wasmBinary&&(v=e.wasmBinary);"object"!==typeof WebAssembly&&u("no native wasm support detected");function ba(a){var b="i32";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return w[a>>0];case "i8":return w[a>>0];case "i16":return x[a>>1];case "i32":return y[a>>2];case "i64":return y[a>>2];case "float":return ha[a>>2];case "double":return ia[a>>3];default:z("invalid type for getValue: "+b)}return null}var A,ja=!1;
  function ka(){var a=e._convert_glsl_to_spirv;a||z("Assertion failed: Cannot call unknown function convert_glsl_to_spirv, make sure it is exported");return a}
  function aa(a){var b=["string","number","boolean","number","number"],c={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=la(c);B(a,C,b,c)}return b},array:function(a){var b=la(a.length);w.set(a,b);return b}},d=ka(),f=[],g=0;if(a)for(var h=0;h<a.length;h++){var k=c[b[h]];k?(0===g&&(g=ma()),f[h]=k(a[h])):f[h]=a[h]}a=d.apply(null,f);0!==g&&na(g);return a}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
  function pa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function D(a){return a?pa(C,a,void 0):""}
  function B(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
  function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var E,w,C,x,sa,y,F,ha,ia;
  function ta(a){E=a;e.HEAP8=w=new Int8Array(a);e.HEAP16=x=new Int16Array(a);e.HEAP32=y=new Int32Array(a);e.HEAPU8=C=new Uint8Array(a);e.HEAPU16=sa=new Uint16Array(a);e.HEAPU32=F=new Uint32Array(a);e.HEAPF32=ha=new Float32Array(a);e.HEAPF64=ia=new Float64Array(a)}var ua=e.TOTAL_MEMORY||16777216;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:ua/65536});A&&(E=A.buffer);ua=E.byteLength;ta(E);y[69820]=5522192;
  function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ga;"number"===typeof c?void 0===b.da?e.dynCall_v(c):e.dynCall_vi(c,b.da):c(void 0===b.da?null:b.da)}}}var va=[],wa=[],xa=[],ya=[];function za(){var a=e.preRun.shift();va.unshift(a)}var H=0,Aa=null,J=null;e.preloadedImages={};e.preloadedAudios={};
  function Ba(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="glslang.wasm";if(!Ba()){var Ca=K;K=e.locateFile?e.locateFile(Ca,t):t+Ca}function Da(){try{if(v)return new Uint8Array(v);if(da)return da(K);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
  function Ea(){return v||!ca&&!r||"function"!==typeof fetch?new Promise(function(a){a(Da())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Da()})}
  function Fa(a){function b(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Aa&&(clearInterval(Aa),Aa=null),J&&(a=J,J=null,a()))}function c(a){b(a.instance)}function d(a){return Ea().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){u("failed to asynchronously prepare wasm: "+a);z(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:fa};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(f,
  b)}catch(g){return u("Module.instantiateWasm callback failed with error: "+g),!1}(function(){if(v||"function"!==typeof WebAssembly.instantiateStreaming||Ba()||"function"!==typeof fetch)return d(c);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,f).then(c,function(a){u("wasm streaming compile failed: "+a);u("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}
  e.asm=function(a,b){b.memory=A;b.table=new WebAssembly.Table({initial:1320,maximum:1320,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Fa(b)};wa.push({ga:function(){Ga()}});function Ha(a){e.___errno_location&&(y[e.___errno_location()>>2]=a);return a}var Ia=[null,[],[]],L=0;function M(){L+=4;return y[L-4>>2]}var N={};function Ja(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ka=void 0;
  function O(a){for(var b="";C[a];)b+=Ka[C[a++]];return b}var La={},Ma={},Na={};function Oa(a,b){if(void 0===a)a="_unknown";else{a=a.replace(/[^a-zA-Z0-9_]/g,"$");var c=a.charCodeAt(0);a=48<=c&&57>=c?"_"+a:a}return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
  function Pa(a){var b=Error,c=Oa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ra=void 0;function P(a){throw new Ra(a);}
  function Q(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||P('type "'+d+'" must have a positive integer typeid pointer');if(Ma.hasOwnProperty(a)){if(c.ia)return;P("Cannot register type '"+d+"' twice")}Ma[a]=b;delete Na[a];La.hasOwnProperty(a)&&(b=La[a],delete La[a],b.forEach(function(a){a()}))}var Sa=[],R=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
  function Ta(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Sa.length?Sa.pop():R.length;R[b]={ka:1,value:a};return b}}function Ua(a){return this.fromWireType(F[a>>2])}function Va(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
  function Wa(a,b){switch(b){case 2:return function(a){return this.fromWireType(ha[a>>2])};case 3:return function(a){return this.fromWireType(ia[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
  function Xa(a,b,c){switch(b){case 0:return c?function(a){return w[a]}:function(a){return C[a]};case 1:return c?function(a){return x[a>>1]}:function(a){return sa[a>>1]};case 2:return c?function(a){return y[a>>2]}:function(a){return F[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function Ya(){return w.length}var Za={};function S(a){if(0===a)return 0;a=D(a);if(!Za.hasOwnProperty(a))return 0;S.X&&T(S.X);a=Za[a];var b=qa(a)+1,c=$a(b);c&&B(a,w,c,b);S.X=c;return S.X}
  function U(){U.X||(U.X=[]);U.X.push(ma());return U.X.length-1}function V(a){return 0===a%4&&(0!==a%100||0===a%400)}function ab(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var W=[31,29,31,30,31,30,31,31,30,31,30,31],X=[31,28,31,30,31,30,31,31,30,31,30,31];
  function Y(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(V(a.getFullYear())?W:X)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
  function bb(a,b,c,d){function f(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function g(a,b){return f(a,b,"0")}function h(a,b){function c(a){return 0>a?-1:0<a?1:0}var Z;0===(Z=c(a.getFullYear()-b.getFullYear()))&&0===(Z=c(a.getMonth()-b.getMonth()))&&(Z=c(a.getDate()-b.getDate()));return Z}function k(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
  0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function q(a){a=Y(new Date(a.W+1900,0,1),a.ca);var b=k(new Date(a.getFullYear()+1,0,4));return 0>=h(k(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var l=y[d+40>>2];d={na:y[d>>2],ma:y[d+4>>2],aa:y[d+8>>2],$:y[d+12>>2],Y:y[d+16>>2],W:y[d+20>>2],ba:y[d+24>>2],ca:y[d+28>>2],ya:y[d+32>>2],la:y[d+36>>2],oa:l?
  D(l):""};c=D(c);l={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var n in l)c=c.replace(new RegExp(n,"g"),l[n]);var I="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  Qa="January February March April May June July August September October November December".split(" ");l={"%a":function(a){return I[a.ba].substring(0,3)},"%A":function(a){return I[a.ba]},"%b":function(a){return Qa[a.Y].substring(0,3)},"%B":function(a){return Qa[a.Y]},"%C":function(a){return g((a.W+1900)/100|0,2)},"%d":function(a){return g(a.$,2)},"%e":function(a){return f(a.$,2," ")},"%g":function(a){return q(a).toString().substring(2)},"%G":function(a){return q(a)},"%H":function(a){return g(a.aa,
  2)},"%I":function(a){a=a.aa;0==a?a=12:12<a&&(a-=12);return g(a,2)},"%j":function(a){return g(a.$+ab(V(a.W+1900)?W:X,a.Y-1),3)},"%m":function(a){return g(a.Y+1,2)},"%M":function(a){return g(a.ma,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=a.aa&&12>a.aa?"AM":"PM"},"%S":function(a){return g(a.na,2)},"%t":function(){return"\t"},"%u":function(a){return a.ba||7},"%U":function(a){var b=new Date(a.W+1900,0,1),c=0===b.getDay()?b:Y(b,7-b.getDay());a=new Date(a.W+1900,a.Y,a.$);return 0>h(c,a)?
  g(Math.ceil((31-c.getDate()+(ab(V(a.getFullYear())?W:X,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=k(new Date(a.W+1900,0,4)),c=k(new Date(a.W+1901,0,4)),d=Y(new Date(a.W+1900,0,1),a.ca);return 0>h(d,b)?"53":0>=h(c,d)?"01":g(Math.ceil((b.getFullYear()<a.W+1900?a.ca+32-b.getDate():a.ca+1-b.getDate())/7),2)},"%w":function(a){return a.ba},"%W":function(a){var b=new Date(a.W,0,1),c=1===b.getDay()?b:Y(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.W+1900,a.Y,a.$);
  return 0>h(c,a)?g(Math.ceil((31-c.getDate()+(ab(V(a.getFullYear())?W:X,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%y":function(a){return(a.W+1900).toString().substring(2)},"%Y":function(a){return a.W+1900},"%z":function(a){a=a.la;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.oa},"%%":function(){return"%"}};for(n in l)0<=c.indexOf(n)&&(c=c.replace(new RegExp(n,"g"),l[n](d)));n=cb(c);if(n.length>b)return 0;w.set(n,
  a);return n.length-1}for(var db=Array(256),eb=0;256>eb;++eb)db[eb]=String.fromCharCode(eb);Ka=db;Ra=e.BindingError=Pa("BindingError");e.InternalError=Pa("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<R.length;++b)void 0!==R[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<R.length;++a)if(void 0!==R[a])return R[a];return null};function cb(a){var b=Array(qa(a)+1);B(a,b,0,b.length);return b}
  var gb=e.asm({},{c:z,I:function(){ja=!0;throw"Pure virtual function called!";},C:function(){return fb.pa},v:function(){},q:function(){Ha(1);return-1},j:Ha,p:function(a,b){L=b;try{return N.ha(),M(),M(),M(),M(),0}catch(c){return z(c),-c.ea}},i:function(a,b){L=b;try{var c=M(),d=M(),f=M();for(b=a=0;b<f;b++){for(var g=y[d+8*b>>2],h=y[d+(8*b+4)>>2],k=0;k<h;k++){var q=C[g+k],l=Ia[c];0===q||10===q?((1===c?ea:u)(pa(l,0)),l.length=0):l.push(q)}a+=h}return a}catch(n){return z(n),-n.ea}},o:function(a,b){L=b;
  return 0},n:function(a,b){L=b;try{return N.ha(),0}catch(c){return z(c),-c.ea}},H:function(a,b){L=b;try{var c=M();var d=M();if(-1===c||0===d)var f=-22;else{var g=N.ja[c];if(g&&d===g.va){var h=(void 0).ta(g.sa);N.ra(c,h,d,g.flags);(void 0).xa(h);N.ja[c]=null;g.qa&&T(g.wa)}f=0}return f}catch(k){return z(k),-k.ea}},m:function(){},G:function(a,b,c,d,f){var g=Ja(c);b=O(b);Q(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?d:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===
  c)var d=w;else if(2===c)d=x;else if(4===c)d=y;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(d[a>>g])},Z:null})},F:function(a,b){b=O(b);Q(a,{name:b,fromWireType:function(a){var b=R[a].value;4<a&&0===--R[a].ka&&(R[a]=void 0,Sa.push(a));return b},toWireType:function(a,b){return Ta(b)},argPackAdvance:8,readValueFromPointer:Ua,Z:null})},l:function(a,b,c){c=Ja(c);b=O(b);Q(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==
  typeof b)throw new TypeError('Cannot convert "'+Va(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Wa(b,c),Z:null})},e:function(a,b,c,d,f){function g(a){return a}b=O(b);-1===f&&(f=4294967295);var h=Ja(c);if(0===d){var k=32-8*c;g=function(a){return a<<k>>>k}}var q=-1!=b.indexOf("unsigned");Q(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+Va(c)+'" to '+this.name);if(c<d||c>f)throw new TypeError('Passing a number "'+
  Va(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return q?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:Xa(b,h,0!==d),Z:null})},d:function(a,b,c){function d(a){a>>=2;var b=F;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=O(c);Q(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ia:!0})},k:function(a,b){b=O(b);var c="std::string"===
  b;Q(a,{name:b,fromWireType:function(a){var b=F[a>>2];if(c){var d=C[a+4+b],h=0;0!=d&&(h=d,C[a+4+b]=0);var k=a+4;for(d=0;d<=b;++d){var q=a+4+d;if(0==C[q]){k=D(k);if(void 0===l)var l=k;else l+=String.fromCharCode(0),l+=k;k=q+1}}0!=h&&(C[a+4+b]=h)}else{l=Array(b);for(d=0;d<b;++d)l[d]=String.fromCharCode(C[a+4+d]);l=l.join("")}T(a);return l},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var d="string"===typeof b;d||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof
  Int8Array||P("Cannot pass non-string to std::string");var f=(c&&d?function(){return qa(b)}:function(){return b.length})(),k=$a(4+f+1);F[k>>2]=f;if(c&&d)B(b,C,k+4,f+1);else if(d)for(d=0;d<f;++d){var q=b.charCodeAt(d);255<q&&(T(k),P("String has UTF-16 code units that do not fit in 8 bits"));C[k+4+d]=q}else for(d=0;d<f;++d)C[k+4+d]=b[d];null!==a&&a.push(T,k);return k},argPackAdvance:8,readValueFromPointer:Ua,Z:function(a){T(a)}})},E:function(a,b,c){c=O(c);if(2===b){var d=function(){return sa};var f=
  1}else 4===b&&(d=function(){return F},f=2);Q(a,{name:c,fromWireType:function(a){for(var b=d(),c=F[a>>2],g=Array(c),l=a+4>>f,n=0;n<c;++n)g[n]=String.fromCharCode(b[l+n]);T(a);return g.join("")},toWireType:function(a,c){var g=d(),h=c.length,l=$a(4+h*b);F[l>>2]=h;for(var n=l+4>>f,I=0;I<h;++I)g[n+I]=c.charCodeAt(I);null!==a&&a.push(T,l);return l},argPackAdvance:8,readValueFromPointer:Ua,Z:function(a){T(a)}})},D:function(a,b){b=O(b);Q(a,{ua:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},
  b:function(){e.abort()},B:Ya,A:function(a,b,c){C.set(C.subarray(b,b+c),a)},z:function(a){if(2147418112<a)return!1;for(var b=Math.max(Ya(),16777216);b<a;)536870912>=b?b=ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);a:{try{A.grow(b-E.byteLength+65535>>16);ta(A.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},h:S,y:function(a){return Math.log(a)/Math.LN2},g:function(a){var b=U.X[a];U.X.splice(a,1);na(b)},f:U,x:function(){z("trap!")},w:function(){return 0},u:function(){},t:function(){},
  s:function(a,b,c,d){return bb(a,b,c,d)},r:function(){z("OOM")},a:279280},E);e.asm=gb;var Ga=e.__GLOBAL__sub_I_bind_cpp=function(){return e.asm.J.apply(null,arguments)},fb=e.__ZSt18uncaught_exceptionv=function(){return e.asm.K.apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return e.asm.L.apply(null,arguments)};e.___getTypeName=function(){return e.asm.M.apply(null,arguments)};e._convert_glsl_to_spirv=function(){return e.asm.N.apply(null,arguments)};
  e._destroy_output_buffer=function(){return e.asm.O.apply(null,arguments)};var T=e._free=function(){return e.asm.P.apply(null,arguments)},$a=e._malloc=function(){return e.asm.Q.apply(null,arguments)},la=e.stackAlloc=function(){return e.asm.T.apply(null,arguments)},na=e.stackRestore=function(){return e.asm.U.apply(null,arguments)},ma=e.stackSave=function(){return e.asm.V.apply(null,arguments)};e.dynCall_v=function(){return e.asm.R.apply(null,arguments)};
  e.dynCall_vi=function(){return e.asm.S.apply(null,arguments)};e.asm=gb;var hb;"undefined"!==typeof Promise&&(e.ready=new Promise(function(a){var b=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){b&&b();a(e)}}));J=function ib(){hb||jb();hb||(J=ib)};
  function jb(){function a(){if(!hb&&(hb=!0,!ja)){G(wa);G(xa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();ya.unshift(a)}G(ya)}}if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)za();G(va);0<H||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=jb;
  function z(a){if(e.onAbort)e.onAbort(a);ea(a);u(a);ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=z;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();jb();
  
  
    return glslangModule.ready;
  }
  );
  })();
  export default glslangModule;