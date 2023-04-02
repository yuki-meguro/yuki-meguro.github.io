const se="modulepreload",ie=function(e){return"/https://github.com/yuki-meguro/site/"+e},B={},ae=function(t,_,o){if(!_||_.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(_.map(r=>{if(r=ie(r),r in B)return;B[r]=!0;const i=r.endsWith(".css"),f=i?'[rel="stylesheet"]':"";if(!!o)for(let n=l.length-1;n>=0;n--){const d=l[n];if(d.href===r&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${f}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":se,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((n,d)=>{a.addEventListener("load",n),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var R,h,J,b,F,K,W,U={},Q=[],ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var _ in t)e[_]=t[_];return e}function X(e){var t=e.parentNode;t&&t.removeChild(e)}function S(e,t,_){var o,l,r,i={};for(r in t)r=="key"?o=t[r]:r=="ref"?l=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?R.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return T(e,i,o,l,null)}function T(e,t,_,o,l){var r={type:e,props:t,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++J};return l==null&&h.vnode!=null&&h.vnode(r),r}function H(e){return e.children}function A(e,t){this.props=e,this.context=t}function C(e,t){if(t==null)return e.__?C(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?C(e):null}function Y(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return Y(e)}}function j(e){(!e.__d&&(e.__d=!0)&&b.push(e)&&!D.__r++||F!==h.debounceRendering)&&((F=h.debounceRendering)||K)(D)}function D(){var e,t,_,o,l,r,i,f;for(b.sort(W);e=b.shift();)e.__d&&(t=b.length,o=void 0,l=void 0,i=(r=(_=e).__v).__e,(f=_.__P)&&(o=[],(l=k({},r)).__v=r.__v+1,I(f,r,l,_.__n,f.ownerSVGElement!==void 0,r.__h!=null?[i]:null,o,i??C(r),r.__h),_e(o,r),r.__e!=i&&Y(r)),b.length>t&&b.sort(W));D.__r=0}function Z(e,t,_,o,l,r,i,f,p,a){var n,d,c,s,u,w,v,y=o&&o.__k||Q,g=y.length;for(_.__k=[],n=0;n<t.length;n++)if((s=_.__k[n]=(s=t[n])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?T(null,s,null,null,s):Array.isArray(s)?T(H,{children:s},null,null,null):s.__b>0?T(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=_,s.__b=_.__b+1,(c=y[n])===null||c&&s.key==c.key&&s.type===c.type)y[n]=void 0;else for(d=0;d<g;d++){if((c=y[d])&&s.key==c.key&&s.type===c.type){y[d]=void 0;break}c=null}I(e,s,c=c||U,l,r,i,f,p,a),u=s.__e,(d=s.ref)&&c.ref!=d&&(v||(v=[]),c.ref&&v.push(c.ref,null,s),v.push(d,s.__c||u,s)),u!=null?(w==null&&(w=u),typeof s.type=="function"&&s.__k===c.__k?s.__d=p=ee(s,p,e):p=te(e,s,c,y,u,p),typeof _.type=="function"&&(_.__d=p)):p&&c.__e==p&&p.parentNode!=e&&(p=C(c))}for(_.__e=w,n=g;n--;)y[n]!=null&&(typeof _.type=="function"&&y[n].__e!=null&&y[n].__e==_.__d&&(_.__d=ne(o).nextSibling),oe(y[n],y[n]));if(v)for(n=0;n<v.length;n++)re(v[n],v[++n],v[++n])}function ee(e,t,_){for(var o,l=e.__k,r=0;l&&r<l.length;r++)(o=l[r])&&(o.__=e,t=typeof o.type=="function"?ee(o,t,_):te(_,o,o,l,o.__e,t));return t}function te(e,t,_,o,l,r){var i,f,p;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(_==null||l!=r||l.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(l),i=null;else{for(f=r,p=0;(f=f.nextSibling)&&p<o.length;p+=1)if(f==l)break e;e.insertBefore(l,r),i=r}return i!==void 0?i:l.nextSibling}function ne(e){var t,_,o;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((_=e.__k[t])&&(o=ne(_)))return o}return null}function fe(e,t,_,o,l){var r;for(r in _)r==="children"||r==="key"||r in t||M(e,r,null,_[r],o);for(r in t)l&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||_[r]===t[r]||M(e,r,t[r],_[r],o)}function V(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||ce.test(t)?_:_+"px"}function M(e,t,_,o,l){var r;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)_&&t in _||V(e.style,t,"");if(_)for(t in _)o&&_[t]===o[t]||V(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=_,_?o||e.addEventListener(t,r?z:q,r):e.removeEventListener(t,r?z:q,r);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function q(e){return this.l[e.type+!1](h.event?h.event(e):e)}function z(e){return this.l[e.type+!0](h.event?h.event(e):e)}function I(e,t,_,o,l,r,i,f,p){var a,n,d,c,s,u,w,v,y,g,P,x,$,E,N,m=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(p=_.__h,f=t.__e=_.__e,t.__h=null,r=[f]),(a=h.__b)&&a(t);try{e:if(typeof m=="function"){if(v=t.props,y=(a=m.contextType)&&o[a.__c],g=a?y?y.props.value:a.__:o,_.__c?w=(n=t.__c=_.__c).__=n.__E:("prototype"in m&&m.prototype.render?t.__c=n=new m(v,g):(t.__c=n=new A(v,g),n.constructor=m,n.render=pe),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=g,n.__n=o,d=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,m.getDerivedStateFromProps(v,n.__s))),c=n.props,s=n.state,n.__v=t,d)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==c&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,g),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,g)===!1||t.__v===_.__v){for(t.__v!==_.__v&&(n.props=v,n.state=n.__s,n.__d=!1),n.__e=!1,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(L){L&&(L.__=t)}),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[],n.__h.length&&i.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,g),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(c,s,u)})}if(n.context=g,n.props=v,n.__P=e,x=h.__r,$=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,x&&x(t),a=n.render(n.props,n.state,n.context),E=0;E<n._sb.length;E++)n.__h.push(n._sb[E]);n._sb=[]}else do n.__d=!1,x&&x(t),a=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++$<25);n.state=n.__s,n.getChildContext!=null&&(o=k(k({},o),n.getChildContext())),d||n.getSnapshotBeforeUpdate==null||(u=n.getSnapshotBeforeUpdate(c,s)),N=a!=null&&a.type===H&&a.key==null?a.props.children:a,Z(e,Array.isArray(N)?N:[N],t,_,o,l,r,i,f,p),n.base=t.__e,t.__h=null,n.__h.length&&i.push(n),w&&(n.__E=n.__=null),n.__e=!1}else r==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=ue(_.__e,t,_,o,l,r,i,p);(a=h.diffed)&&a(t)}catch(L){t.__v=null,(p||r!=null)&&(t.__e=f,t.__h=!!p,r[r.indexOf(f)]=null),h.__e(L,t,_)}}function _e(e,t){h.__c&&h.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){h.__e(o,_.__v)}})}function ue(e,t,_,o,l,r,i,f){var p,a,n,d=_.props,c=t.props,s=t.type,u=0;if(s==="svg"&&(l=!0),r!=null){for(;u<r.length;u++)if((p=r[u])&&"setAttribute"in p==!!s&&(s?p.localName===s:p.nodeType===3)){e=p,r[u]=null;break}}if(e==null){if(s===null)return document.createTextNode(c);e=l?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,c.is&&c),r=null,f=!1}if(s===null)d===c||f&&e.data===c||(e.data=c);else{if(r=r&&R.call(e.childNodes),a=(d=_.props||U).dangerouslySetInnerHTML,n=c.dangerouslySetInnerHTML,!f){if(r!=null)for(d={},u=0;u<e.attributes.length;u++)d[e.attributes[u].name]=e.attributes[u].value;(n||a)&&(n&&(a&&n.__html==a.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(fe(e,c,d,l,f),n)t.__k=[];else if(u=t.props.children,Z(e,Array.isArray(u)?u:[u],t,_,o,l&&s!=="foreignObject",r,i,r?r[0]:_.__k&&C(_,0),f),r!=null)for(u=r.length;u--;)r[u]!=null&&X(r[u]);f||("value"in c&&(u=c.value)!==void 0&&(u!==e.value||s==="progress"&&!u||s==="option"&&u!==d.value)&&M(e,"value",u,d.value,!1),"checked"in c&&(u=c.checked)!==void 0&&u!==e.checked&&M(e,"checked",u,d.checked,!1))}return e}function re(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(o){h.__e(o,_)}}function oe(e,t,_){var o,l;if(h.unmount&&h.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||re(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){h.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&oe(o[l],t,_||typeof e.type!="function");_||e.__e==null||X(e.__e),e.__=e.__e=e.__d=void 0}function pe(e,t,_){return this.constructor(e,_)}function de(e,t,_){var o,l,r;h.__&&h.__(e,t),l=(o=typeof _=="function")?null:_&&_.__k||t.__k,r=[],I(t,e=(!o&&_||t).__k=S(H,null,[e]),l||U,U,t.ownerSVGElement!==void 0,!o&&_?[_]:l?null:t.firstChild?R.call(t.childNodes):null,r,!o&&_?_:l?l.__e:t.firstChild,o),_e(r,e)}R=Q.slice,h={__e:function(e,t,_,o){for(var l,r,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,o||{}),i=l.__d),i)return l.__E=l}catch(f){e=f}throw e}},J=0,A.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},_),this.props)),e&&k(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),j(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),j(this))},A.prototype.render=H,b=[],K=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(e,t){return e.__v.__b-t.__v.__b},D.__r=0;const le=({value:e,name:t})=>e?S("astro-slot",{name:t,dangerouslySetInnerHTML:{__html:e}}):null;le.shouldComponentUpdate=()=>!1;var G=le;const O=new Map;var he=e=>async(t,_,{default:o,...l})=>{if(!e.hasAttribute("ssr"))return;for(const[f,p]of Object.entries(l))_[f]=S(G,{value:p,name:f});if(e.dataset.preactSignals){const{signal:f}=await ae(()=>import("./signals.module.35191a50.js"),[]);let p=JSON.parse(e.dataset.preactSignals);for(const[a,n]of Object.entries(p)){if(!O.has(n)){const d=f(_[a]);O.set(n,d)}_[a]=O.get(n)}}function i({children:f}){let p=Object.fromEntries(Array.from(e.attributes).map(a=>[a.name,a.value]));return S(e.localName,p,f)}de(S(i,null,S(t,_,o!=null?S(G,{value:o}):o)),e.parentNode,e)};export{he as c,A as k,h as l};
