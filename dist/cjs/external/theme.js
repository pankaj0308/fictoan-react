"use strict";var e=require("./DefaultColours.js");function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r={exports:{}},a={exports:{}};!function(e,t){function r(e,t,a){return function(){var o=a.concat(Array.prototype.slice.call(arguments));return o.length>=t?e.apply(this,o):r(e,t,o)}}t.__esModule=!0,t.default=function(e){return r(e,e.length,[])},e.exports=t.default}(a,a.exports);var o={exports:{}};!function(e,t){t.__esModule=!0,t.default=void 0;var r=function(e,t,r){return Math.max(e,Math.min(t,r))};t.default=r,e.exports=t.default}(o,o.exports);var n={exports:{}},s={exports:{}},l={exports:{}};!function(e,t){function r(e){return Math.round(255*e)}function a(e,t,a){return r(e)+","+r(t)+","+r(a)}t.__esModule=!0,t.default=void 0;var o=function(e,t,r,o){if(void 0===o&&(o=a),0===t)return o(r,r,r);var n=(e%360+360)%360/60,s=(1-Math.abs(2*r-1))*t,l=s*(1-Math.abs(n%2-1)),i=0,u=0,d=0;n>=0&&n<1?(i=s,u=l):n>=1&&n<2?(i=l,u=s):n>=2&&n<3?(u=s,d=l):n>=3&&n<4?(u=l,d=s):n>=4&&n<5?(i=l,d=s):n>=5&&n<6&&(i=s,d=l);var f=r-s/2;return o(i+f,u+f,d+f)};t.default=o,e.exports=t.default}(l,l.exports);var i={exports:{}};!function(e,t){t.__esModule=!0,t.default=void 0;var r={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var a=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return r[t]?"#"+r[t]:e};t.default=a,e.exports=t.default}(i,i.exports);var u={exports:{}};!function(e,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return o(e,arguments,l(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),s(a,e)})(e)}function o(e,t,r){return(o=n()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&s(o,r.prototype),o}).apply(null,arguments)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.__esModule=!0,t.default=void 0;var i={1:"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",2:"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",3:"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",4:"Couldn't generate valid rgb string from %s, it returned %s.\n\n",5:"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",6:"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",7:"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",8:"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",9:"Please provide a number of steps to the modularScale helper.\n\n",10:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",11:'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',12:'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',13:'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',14:'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',15:'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',16:"You must provide a template to this method.\n\n",17:"You passed an unsupported selector state to this method.\n\n",18:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",19:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",20:"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:"fontFace expects a name of a font-family.\n\n",24:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",25:"fontFace expects localFonts to be an array.\n\n",26:"fontFace expects fileFormats to be an array.\n\n",27:"radialGradient requries at least 2 color-stops to properly render.\n\n",28:"Please supply a filename to retinaImage() as the first argument.\n\n",29:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",32:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",33:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",34:"borderRadius expects a radius value as a string or number as the second argument.\n\n",35:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',36:"Property must be a string value.\n\n",37:"Syntax Error at %s.\n\n",38:"Formula contains a function that needs parentheses at %s.\n\n",39:"Formula is missing closing parenthesis at %s.\n\n",40:"Formula has too many closing parentheses at %s.\n\n",41:"All values in a formula must have the same unit or be unitless.\n\n",42:"Please provide a number of steps to the modularScale helper.\n\n",43:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",44:"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",45:"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",46:"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",47:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",48:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",49:"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",50:"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",51:"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",52:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",53:"fontFace expects localFonts to be an array.\n\n",54:"fontFace expects fileFormats to be an array.\n\n",55:"fontFace expects a name of a font-family.\n\n",56:"linearGradient requries at least 2 color-stops to properly render.\n\n",57:"radialGradient requries at least 2 color-stops to properly render.\n\n",58:"Please supply a filename to retinaImage() as the first argument.\n\n",59:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:"Property must be a string value.\n\n",62:"borderRadius expects a radius value as a string or number as the second argument.\n\n",63:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',64:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",65:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",66:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",67:"You must provide a template to this method.\n\n",68:"You passed an unsupported selector state to this method.\n\n",69:'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',70:'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',71:'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',72:'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',73:"Please provide a valid CSS variable.\n\n",74:"CSS variable not found and no default was provided.\n\n",75:"important requires a valid style object, got a %s instead.\n\n",76:"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",77:'remToPx expects a value in "rem" but you provided it in "%s".\n\n',78:'base must be set in "px" or "%" but you set it in "%s".\n'};function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a,o=t[0],n=[];for(a=1;a<t.length;a+=1)n.push(t[a]);return n.forEach((function(e){o=o.replace(/%[a-z]/,e)})),o}var d=/*#__PURE__*/function(e){var t,a;function o(t){var a;if("production"===process.env.NODE_ENV)a=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;else{for(var o=arguments.length,n=new Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];a=e.call(this,u.apply(void 0,[i[t]].concat(n)))||this}return r(a)}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,s(t,a),o}(/*#__PURE__*/a(Error));t.default=d,e.exports=t.default}(u,u.exports),function(e,t){t.__esModule=!0,t.default=function(e){if("string"!=typeof e)throw new o.default(3);var t=(0,a.default)(e);if(t.match(s))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(d)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(f))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(g)){var l=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:l}}var i=p.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var u=b.exec(t.substring(0,50));if(u)return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10),alpha:parseFloat(""+u[4])};var m=c.exec(t);if(m){var S=parseInt(""+m[1],10),v=parseInt(""+m[2],10)/100,x=parseInt(""+m[3],10)/100,C="rgb("+(0,r.default)(S,v,x)+")",y=p.exec(C);if(!y)throw new o.default(4,t,C);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var w=h.exec(t.substring(0,50));if(w){var _=parseInt(""+w[1],10),k=parseInt(""+w[2],10)/100,R=parseInt(""+w[3],10)/100,M="rgb("+(0,r.default)(_,k,R)+")",I=p.exec(M);if(!I)throw new o.default(4,t,M);return{red:parseInt(""+I[1],10),green:parseInt(""+I[2],10),blue:parseInt(""+I[3],10),alpha:parseFloat(""+w[4])}}throw new o.default(5)};var r=/*#__PURE__*/n(l.exports),a=/*#__PURE__*/n(i.exports),o=/*#__PURE__*/n(u.exports);function n(e){return e&&e.__esModule?e:{default:e}}var s=/^#[a-fA-F0-9]{6}$/,d=/^#[a-fA-F0-9]{8}$/,f=/^#[a-fA-F0-9]{3}$/,g=/^#[a-fA-F0-9]{4}$/,p=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,b=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,c=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,h=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;e.exports=t.default}(s,s.exports);var d={exports:{}};!function(e,t){t.__esModule=!0,t.default=void 0;var r=function(e){var t,r=e.red/255,a=e.green/255,o=e.blue/255,n=Math.max(r,a,o),s=Math.min(r,a,o),l=(n+s)/2;if(n===s)return void 0!==e.alpha?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l};var i=n-s,u=l>.5?i/(2-n-s):i/(n+s);switch(n){case r:t=(a-o)/i+(a<o?6:0);break;case a:t=(o-r)/i+2;break;default:t=(r-a)/i+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:u,lightness:l,alpha:e.alpha}:{hue:t,saturation:u,lightness:l}};t.default=r,e.exports=t.default}(d,d.exports),function(e,t){t.__esModule=!0,t.default=function(e){return(0,a.default)((0,r.default)(e))};var r=/*#__PURE__*/o(s.exports),a=/*#__PURE__*/o(d.exports);function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}(n,n.exports);var f={exports:{}},g={exports:{}},p={exports:{}},b={exports:{}};!function(e,t){t.__esModule=!0,t.default=void 0;var r=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};t.default=r,e.exports=t.default}(b,b.exports);var c={exports:{}};!function(e,t){t.__esModule=!0,t.default=void 0;var r=function(e){var t=e.toString(16);return 1===t.length?"0"+t:t};t.default=r,e.exports=t.default}(c,c.exports),function(e,t){t.__esModule=!0,t.default=void 0;var r=/*#__PURE__*/n(l.exports),a=/*#__PURE__*/n(b.exports),o=/*#__PURE__*/n(c.exports);function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return(0,o.default)(Math.round(255*e))}function i(e,t,r){return(0,a.default)("#"+s(e)+s(t)+s(r))}var u=function(e,t,a){return(0,r.default)(e,t,a,i)};t.default=u,e.exports=t.default}(p,p.exports),function(e,t){t.__esModule=!0,t.default=function(e,t,o){if("number"==typeof e&&"number"==typeof t&&"number"==typeof o)return(0,r.default)(e,t,o);if("object"==typeof e&&void 0===t&&void 0===o)return(0,r.default)(e.hue,e.saturation,e.lightness);throw new a.default(1)};var r=/*#__PURE__*/o(p.exports),a=/*#__PURE__*/o(u.exports);function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}(g,g.exports);var h={exports:{}};!function(e,t){t.__esModule=!0,t.default=function(e,t,n,s){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof s)return s>=1?(0,r.default)(e,t,n):"rgba("+(0,a.default)(e,t,n)+","+s+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===s)return e.alpha>=1?(0,r.default)(e.hue,e.saturation,e.lightness):"rgba("+(0,a.default)(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new o.default(2)};var r=/*#__PURE__*/n(p.exports),a=/*#__PURE__*/n(l.exports),o=/*#__PURE__*/n(u.exports);function n(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}(h,h.exports);var m={exports:{}};!function(e,t){t.__esModule=!0,t.default=function(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return(0,r.default)("#"+(0,a.default)(e)+(0,a.default)(t)+(0,a.default)(n));if("object"==typeof e&&void 0===t&&void 0===n)return(0,r.default)("#"+(0,a.default)(e.red)+(0,a.default)(e.green)+(0,a.default)(e.blue));throw new o.default(6)};var r=/*#__PURE__*/n(b.exports),a=/*#__PURE__*/n(c.exports),o=/*#__PURE__*/n(u.exports);function n(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}(m,m.exports);var S={exports:{}};!function(e,t){t.__esModule=!0,t.default=function(e,t,n,s){if("string"==typeof e&&"number"==typeof t){var l=(0,r.default)(e);return"rgba("+l.red+","+l.green+","+l.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof s)return s>=1?(0,a.default)(e,t,n):"rgba("+e+","+t+","+n+","+s+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===s)return e.alpha>=1?(0,a.default)(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new o.default(7)};var r=/*#__PURE__*/n(s.exports),a=/*#__PURE__*/n(m.exports),o=/*#__PURE__*/n(u.exports);function n(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}(S,S.exports),function(e,t){t.__esModule=!0,t.default=function(e){if("object"!=typeof e)throw new s.default(8);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha}(e))return(0,n.default)(e);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return(0,o.default)(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha}(e))return(0,a.default)(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return(0,r.default)(e);throw new s.default(8)};var r=/*#__PURE__*/l(g.exports),a=/*#__PURE__*/l(h.exports),o=/*#__PURE__*/l(m.exports),n=/*#__PURE__*/l(S.exports),s=/*#__PURE__*/l(u.exports);function l(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}(f,f.exports),function(e,t){t.__esModule=!0,t.default=void 0;var r=/*#__PURE__*/u(a.exports),s=/*#__PURE__*/u(o.exports),l=/*#__PURE__*/u(n.exports),i=/*#__PURE__*/u(f.exports);function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function g(e,t){if("transparent"===t)return t;var r=(0,l.default)(t);return(0,i.default)(d({},r,{lightness:(0,s.default)(0,1,r.lightness+parseFloat(e))}))}var p=/*#__PURE__*/(0,r.default)(g);t.default=p,e.exports=t.default}(r,r.exports);var v=/*@__PURE__*/t(r.exports),x={exports:{}};!function(e,t){t.__esModule=!0,t.default=void 0;var r=/*#__PURE__*/u(a.exports),s=/*#__PURE__*/u(o.exports),l=/*#__PURE__*/u(n.exports),i=/*#__PURE__*/u(f.exports);function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function g(e,t){if("transparent"===t)return t;var r=(0,l.default)(t);return(0,i.default)(d({},r,{lightness:(0,s.default)(0,1,r.lightness-parseFloat(e))}))}var p=/*#__PURE__*/(0,r.default)(g);t.default=p,e.exports=t.default}(x,x.exports);var C=/*@__PURE__*/t(x.exports);const y={hue:e.defaultColours.blue90,tint:e.defaultColours.amber,shade:e.defaultColours.grey,analogue:e.defaultColours.indigo50,accent:e.defaultColours.green80},w={borderWidth:"1px",borderRadius:"4px",measurements:{nano:"8px",micro:"24px",tiny:"2vmax",small:"4vmax",medium:"8vmax",large:"16vmax",huge:"24vmax"}},_={customColours:y,body:{bg:String(e.defaultColours.white)},bottomDrawer:{bg:String(e.defaultColours.white),border:String(e.defaultColours.slate20),borderRadius:String(w.measurements.micro),overlay:{bg:String(e.defaultColours.black),opacity:.4,blur:"4px"},dismissButton:{color:String(e.defaultColours.slate90)}},breadcrumbs:{wrapper:{bg:String(e.defaultColours.white)},item:{text:String(y.shade),active:String(y.shade),inactive:String(y.shade)},separator:{text:String(e.defaultColours.slate80),content:'"/"'}},button:{font:"sans-serif",isLoading:{spinnerBorder:String(y.hue)},primary:{default:{bg:String(y.hue),border:String(y.hue),text:String(e.defaultColours.white),borderRadius:String(w.borderRadius)},onHover:{bg:String(y.hue),border:String(y.hue),text:String(e.defaultColours.white)},isActive:{bg:String(y.hue),border:String(y.hue),text:String(e.defaultColours.white)},isDisabled:{bg:String(y.hue),border:String(y.hue),text:String(e.defaultColours.white)},isLoading:{spinnerBorder:String(e.defaultColours.white)}},secondary:{default:{bg:String(`${v(.4,String(y.hue))}`),border:String(y.hue),text:String(y.hue),borderRadius:String(w.borderRadius)},onHover:{bg:String(`${v(.4,String(y.hue))}`),border:String(y.hue),text:String(y.hue)},isActive:{bg:String(`${v(.2,String(y.hue))}`),border:String(y.hue),text:String(y.hue)},isLoading:{spinnerBorder:String(y.hue)},isDisabled:{bg:String(`${v(.4,String(y.hue))}`),border:String(y.hue),text:String(y.hue)}},tertiary:{default:{bg:String(e.defaultColours.transparent),border:String(y.hue),text:String(y.hue),borderRadius:String(w.borderRadius)},onHover:{bg:String(`${v(.4,String(y.hue))}`),border:String(e.defaultColours.transparent),text:String(y.hue)},isActive:{bg:String(`${v(.32,String(y.hue))}`),border:String(e.defaultColours.transparent),text:String(y.hue)},isLoading:{spinnerBorder:String(y.hue)},isDisabled:{bg:String(e.defaultColours.transparent),border:String(y.hue),text:String(y.hue)}}},card:{bg:String(e.defaultColours.white),border:String(`${v(.96,String(e.defaultColours.black))}`),borderRadius:String(w.borderRadius)},checkBox:{square:{default:{bg:String(e.defaultColours.slate20),borderRadius:String(w.borderRadius)},onHover:{bg:String(e.defaultColours.slate40)},isChecked:{bg:String(y.hue)},isDisabled:{bg:String(e.defaultColours.slate10)}},check:{default:{border:String(e.defaultColours.white)}}},hr:{default:{bg:String(e.defaultColours.blue80),height:"1px"},primary:{bg:String(e.defaultColours.blue80),height:"1px"},secondary:{bg:String(e.defaultColours.slate40),height:"1px"},tertiary:{bg:String(e.defaultColours.slate20),height:"1px"}},inputField:{default:{bg:String(e.defaultColours.white),border:String(e.defaultColours.slate40),label:String(y.shade),text:String(y.shade),borderRadius:String(w.borderRadius),helpText:{text:String(e.defaultColours.slate60),scale:"92%"}},onFocus:{bg:String(e.defaultColours.white),border:String(y.hue),text:String(y.shade)},isValid:{bg:String(e.defaultColours.white),border:String(e.defaultColours.green80),label:String(y.shade)},isInvalid:{bg:String(e.defaultColours.red10),border:String(e.defaultColours.red80),text:String(e.defaultColours.red),label:String(e.defaultColours.red),errorText:String(e.defaultColours.red)},isDisabled:{bg:String(e.defaultColours.slate20),border:String(e.defaultColours.slate40),text:String(e.defaultColours.slate80),label:String(e.defaultColours.slate80)},isReadOnly:{bg:String(e.defaultColours.slate10),border:String(e.defaultColours.slate20),text:String(e.defaultColours.slate80),label:String(y.shade)},required:{text:String(e.defaultColours.red)},icons:{default:{fill:String(e.defaultColours.slate30)},onFocus:{fill:String(y.hue)},isValid:{bg:String(e.defaultColours.grey50),border:String(e.defaultColours.red30)}}},infoPanel:{bg:String(e.defaultColours.white),border:String(e.defaultColours.slate20),dismissButton:{color:String(e.defaultColours.slate90),borderRadius:String(w.borderRadius)}},notification:{generic:{bg:String(e.defaultColours.white),text:String(y.shade),borderRadius:String(w.borderRadius)},kinds:{info:{bg:String(`${v(.32,String(e.defaultColours.blue60))}`),border:String(e.defaultColours.blue60)},warning:{bg:String(`${v(.32,String(e.defaultColours.amber))}`),border:String(e.defaultColours.amber)},error:{bg:String(`${v(.32,String(e.defaultColours.red90))}`),border:String(e.defaultColours.red90)},success:{bg:String(`${v(.32,String(e.defaultColours.green90))}`),border:String(e.defaultColours.green90)}}},progressBar:{bg:String(e.defaultColours.slate20),fill:String(y.hue),label:String(y.shade),value:String(y.shade),borderRadius:String(w.borderRadius)},radioButton:{inset:{default:{bg:String(e.defaultColours.slate20)},onHover:{bg:String(e.defaultColours.slate40)},isSelected:{bg:String(y.hue)},isDisabled:{bg:String(e.defaultColours.slate10)}},circle:{default:{bg:String(e.defaultColours.white)}}},select:{chevron:String(y.hue)},sidebar:{width:String("240px"),bg:String(e.defaultColours.white),isCollapsed:{width:"48px",label:{text:String(e.defaultColours.white),bg:String(y.hue),borderRadius:String(w.borderRadius)}},header:{bg:String(e.defaultColours.white),borderBottom:String(e.defaultColours.slate10),logoWidth:"50%",iconWidth:"40px"},icons:{size:"24px",stroked:{thickness:2,default:{line:String(e.defaultColours.slate40)},onHover:{line:String(e.defaultColours.slate80)},isActive:{line:String(e.defaultColours.slate)}},filled:{default:{bg:String(e.defaultColours.slate40)},onHover:{bg:String(e.defaultColours.slate80)},isActive:{bg:String(e.defaultColours.slate)}}},links:{default:{bg:String(e.defaultColours.white),text:String(y.shade),scale:100,weight:600},onHover:{bg:String(e.defaultColours.slate10),text:String(y.hue)},isSelected:{bg:String(e.defaultColours.white),border:String(y.hue),text:String(y.hue)},hasAlert:{bg:String(e.defaultColours.red70)}},subLinks:{header:{weight:600},default:{bg:String(e.defaultColours.white),text:String(`${v(.24,String(y.shade))}`),weight:400,scale:92},onHover:{bg:String(e.defaultColours.slate10),text:String(y.hue)},chevron:{border:String(e.defaultColours.slate40)}},footer:{height:"32px",bg:String(e.defaultColours.white),borderTop:String(e.defaultColours.slate10)}},spinner:{color:String(e.defaultColours.teal)},table:{bg:String(e.defaultColours.white),text:String(y.shade),border:String(e.defaultColours.slate40),striped:{header:{bg:String(e.defaultColours.blue40)},cell:{bg:String(e.defaultColours.slate20)}},onHover:{bg:String(e.defaultColours.amber20),text:String(y.shade)},pagination:{bg:String(e.defaultColours.white),text:String(e.defaultColours.grey),borderRadius:String(w.borderRadius),navIcon:{onHover:{stroke:String(e.defaultColours.slate60)}}}},tabs:{label:{default:{text:String(`${v(.16,String(e.defaultColours.grey))}`)},onHover:{text:String(`${v(.16,String(y.hue))}`)},isActive:{border:String(y.hue),text:String(y.hue)},isDisabled:{text:String(`${C(.24,String(e.defaultColours.slate))}`)},hasAlert:{circle:{bg:String(e.defaultColours.red90),border:String(e.defaultColours.slate10)}}}},text:{font:{sans:"sans-serif",serif:"serif",mono:"monospace"},paras:{font:"sans-serif",size:1,color:e.defaultColours.black,weight:400,lineHeight:1.64,subtext:String(e.defaultColours.slate80)},headings:{font:"sans-serif",color:e.defaultColours.black,weight:600,multiplier:1.24,lineHeight:1.24},links:{font:"sans-serif",default:{color:String(e.defaultColours.blue90)},onHover:{color:String(e.defaultColours.blue60)}},selection:{bg:String(y.hue),text:String(e.defaultColours.white)},code:{inline:{bg:String(e.defaultColours.blue10),text:String(e.defaultColours.blue90),scale:80},block:{bg:String(`${v(.02,String(e.defaultColours.slate10))}`),text:String(e.defaultColours.blue70),scale:80,lineHeight:1.8,borderRadius:String(w.borderRadius)},prism:{tokens:{tag:String(e.defaultColours.violet),atrule:String(e.defaultColours.teal90),attrName:String(e.defaultColours.orange),attrValue:String(e.defaultColours.green80),boolean:String(e.defaultColours.green80),cdata:String(e.defaultColours.grey70),className:String(e.defaultColours.red),comment:String(e.defaultColours.grey70),constant:String(e.defaultColours.green80),deleted:String(e.defaultColours.slate80),delimiter:String(e.defaultColours.grey90),doctype:String(e.defaultColours.grey90),entity:String(e.defaultColours.green80),function:String(e.defaultColours.orange),hexcode:String(e.defaultColours.green),inserted:String(e.defaultColours.green80),italic:String(e.defaultColours.green80),keyword:String(e.defaultColours.orange90),namespace:String(e.defaultColours.green80),number:String(e.defaultColours.green80),operator:String(e.defaultColours.pistachio),plain:String(e.defaultColours.grey),prolog:String(e.defaultColours.grey90),property:String(e.defaultColours.red90),punctuation:String(e.defaultColours.grey60),regex:String(e.defaultColours.green80),selector:String(e.defaultColours.violet),string:String(e.defaultColours.crimson60),symbol:String(e.defaultColours.green80),url:String(e.defaultColours.green80),variable:String(e.defaultColours.orange80)},languages:{css:{fallback:String(e.defaultColours.orange90)},html:{fallback:String(e.defaultColours.grey)},js:{fallback:String(e.defaultColours.violet90)},json:{fallback:String(e.defaultColours.teal),tokens:{string:String(e.defaultColours.teal)}}}}},kbd:{bg:String(e.defaultColours.grey10),text:String(e.defaultColours.grey),borderRadius:String(w.borderRadius)}},toast:{bg:String(e.defaultColours.slate10),text:String(e.defaultColours.black)},toggleSwitch:{case:{default:{bg:String(e.defaultColours.slate30)},onHover:{bg:String(e.defaultColours.green40)},isChecked:{bg:String(e.defaultColours.green90)},isDisabled:{bg:String(e.defaultColours.grey)}},actuator:{default:{bg:String(e.defaultColours.white)},onHover:{bg:String(e.defaultColours.white)},isChecked:{bg:String(e.defaultColours.white)},isDisabled:{bg:String(e.defaultColours.grey70)}}}};exports.FictoanTheme=_,exports._curry=a,exports._guard=o,exports.getDefaultExportFromCjs=t,exports.globalVariables=w,exports.parseToRgb=s,exports.rgba=S;
//# sourceMappingURL=theme.js.map
