function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,a,r,u,l,f=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,a=o;return i=o=void 0,f=t,r=e.apply(a,n)}function F(e){return f=e,u=setTimeout(S,t),c?b(e):r}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=a}function S(){var e=v();if(j(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-l);return s?m(n,a-(e-f)):n}(e))}function h(e){return u=void 0,g&&i?b(e):(i=o=void 0,r)}function w(){var e=v(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===u)return F(l);if(s)return u=setTimeout(S,t),b(l)}return void 0===u&&(u=setTimeout(S,t)),r}return t=y(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(y(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=l=o=u=void 0},w.flush=function(){return void 0===u?r:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||r.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const b={emailField:document.querySelector("input"),messageField:document.querySelector("textarea"),forms:document.querySelector(".feedback-form")};function F(){localStorage.setItem("feedback-form-state",JSON.stringify({email:b.emailField.value,message:b.messageField.value}))}b.emailField.addEventListener("input",e(t)(F,500)),b.messageField.addEventListener("input",e(t)(F,500)),b.forms.addEventListener("submit",(function(e){e.preventDefault(),b.emailField.value&&b.messageField.value&&(localStorage.removeItem("feedback-form-state"),console.log({email:b.emailField.value,message:b.messageField.value}),b.emailField.value="",b.messageField.value="")}));const j=localStorage.getItem("feedback-form-state");if(j){const e=JSON.parse(j);b.emailField.value=e.email,b.messageField.value=e.message}
//# sourceMappingURL=03-feedback.7dc5f57d.js.map
