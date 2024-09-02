var ae=Object.defineProperty;var ie=(e,s,t)=>s in e?ae(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var d=(e,s,t)=>(ie(e,typeof s!="symbol"?s+"":s,t),t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();var R=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},I=Q,ne=P,le=de,oe=q,re=$,ce=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(e){for(var s=[],t=0,a=0,i="",n;(n=ce.exec(e))!=null;){var l=n[0],o=n[1],r=n.index;if(i+=e.slice(a,r),a=r+l.length,o){i+=o[1];continue}i&&(s.push(i),i="");var c=n[2],g=n[3],w=n[4],x=n[5],L=n[6],Z=n[7],ee=L==="+"||L==="*",se=L==="?"||L==="*",D=c||"/",te=w||x||(Z?".*":"[^"+D+"]+?");s.push({name:g||t++,prefix:c||"",delimiter:D,optional:se,repeat:ee,pattern:ve(te)})}return a<e.length&&(i+=e.substr(a)),i&&s.push(i),s}function de(e){return q(P(e))}function q(e){for(var s=new Array(e.length),t=0;t<e.length;t++)typeof e[t]=="object"&&(s[t]=new RegExp("^"+e[t].pattern+"$"));return function(a){for(var i="",n=a||{},l=0;l<e.length;l++){var o=e[l];if(typeof o=="string"){i+=o;continue}var r=n[o.name],c;if(r==null){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to be defined')}if(R(r)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received "'+r+'"');if(r.length===0){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var g=0;g<r.length;g++){if(c=encodeURIComponent(r[g]),!s[l].test(c))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received "'+c+'"');i+=(g===0?o.prefix:o.delimiter)+c}continue}if(c=encodeURIComponent(r),!s[l].test(c))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+c+'"');i+=o.prefix+c}return i}}function _(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function ve(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function V(e,s){return e.keys=s,e}function J(e){return e.sensitive?"":"i"}function ge(e,s){var t=e.source.match(/\((?!\?)/g);if(t)for(var a=0;a<t.length;a++)s.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return V(e,s)}function pe(e,s,t){for(var a=[],i=0;i<e.length;i++)a.push(Q(e[i],s,t).source);var n=new RegExp("(?:"+a.join("|")+")",J(t));return V(n,s)}function he(e,s,t){for(var a=P(e),i=$(a,t),n=0;n<a.length;n++)typeof a[n]!="string"&&s.push(a[n]);return V(i,s)}function $(e,s){s=s||{};for(var t=s.strict,a=s.end!==!1,i="",n=e[e.length-1],l=typeof n=="string"&&/\/$/.test(n),o=0;o<e.length;o++){var r=e[o];if(typeof r=="string")i+=_(r);else{var c=_(r.prefix),g=r.pattern;r.repeat&&(g+="(?:"+c+g+")*"),r.optional?c?g="(?:"+c+"("+g+"))?":g="("+g+")?":g=c+"("+g+")",i+=g}}return t||(i=(l?i.slice(0,-2):i)+"(?:\\/(?=$))?"),a?i+="$":i+=t&&l?"":"(?=\\/|$)",new RegExp("^"+i,J(s))}function Q(e,s,t){return s=s||[],R(s)?t||(t={}):(t=s,s=[]),e instanceof RegExp?ge(e,s):R(e)?pe(e,s,t):he(e,s,t)}I.parse=ne;I.compile=le;I.tokensToFunction=oe;I.tokensToRegExp=re;var A=typeof document<"u",h=typeof window<"u",N=typeof history<"u",ue=typeof process<"u",F=A&&document.ontouchstart?"touchstart":"click",y=h&&!!(window.history.location||window.location);function v(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}v.prototype.configure=function(e){var s=e||{};this._window=s.window||h&&window,this._decodeURLComponents=s.decodeURLComponents!==!1,this._popstate=s.popstate!==!1&&h,this._click=s.click!==!1&&A,this._hashbang=!!s.hashbang;var t=this._window;this._popstate?t.addEventListener("popstate",this._onpopstate,!1):h&&t.removeEventListener("popstate",this._onpopstate,!1),this._click?t.document.addEventListener(F,this.clickHandler,!1):A&&t.document.removeEventListener(F,this.clickHandler,!1),this._hashbang&&h&&!N?t.addEventListener("hashchange",this._onpopstate,!1):h&&t.removeEventListener("hashchange",this._onpopstate,!1)};v.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};v.prototype._getBase=function(){var e=this._base;if(e)return e;var s=h&&this._window&&this._window.location;return h&&this._hashbang&&s&&s.protocol==="file:"&&(e=s.pathname),e};v.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};v.prototype.start=function(e){var s=e||{};if(this.configure(s),s.dispatch!==!1){this._running=!0;var t;if(y){var a=this._window,i=a.location;this._hashbang&&~i.hash.indexOf("#!")?t=i.hash.substr(2)+i.search:this._hashbang?t=i.search+i.hash:t=i.pathname+i.search+i.hash}this.replace(t,null,!0,s.dispatch)}};v.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(F,this.clickHandler,!1),h&&e.removeEventListener("popstate",this._onpopstate,!1),h&&e.removeEventListener("hashchange",this._onpopstate,!1)}};v.prototype.show=function(e,s,t,a){var i=new S(e,s,this),n=this.prevContext;return this.prevContext=i,this.current=i.path,t!==!1&&this.dispatch(i,n),i.handled!==!1&&a!==!1&&i.pushState(),i};v.prototype.back=function(e,s){var t=this;if(this.len>0){var a=this._window;N&&a.history.back(),this.len--}else setTimeout(e?function(){t.show(e,s)}:function(){t.show(t._getBase(),s)})};v.prototype.redirect=function(e,s){var t=this;typeof e=="string"&&typeof s=="string"&&C.call(this,e,function(a){setTimeout(function(){t.replace(s)},0)}),typeof e=="string"&&typeof s>"u"&&setTimeout(function(){t.replace(e)},0)};v.prototype.replace=function(e,s,t,a){var i=new S(e,s,this),n=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=t,i.save(),a!==!1&&this.dispatch(i,n),i};v.prototype.dispatch=function(e,s){var t=0,a=0,i=this;function n(){var o=i.exits[a++];if(!o)return l();o(s,n)}function l(){var o=i.callbacks[t++];if(e.path!==i.current){e.handled=!1;return}if(!o)return me.call(i,e);o(e,l)}s?n():l()};v.prototype.exit=function(e,s){if(typeof e=="function")return this.exit("*",e);for(var t=new T(e,null,this),a=1;a<arguments.length;++a)this.exits.push(t.middleware(arguments[a]))};v.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var s=e.target,t=e.path||(e.composedPath?e.composedPath():null);if(t){for(var a=0;a<t.length;a++)if(t[a].nodeName&&t[a].nodeName.toUpperCase()==="A"&&t[a].href){s=t[a];break}}for(;s&&s.nodeName.toUpperCase()!=="A";)s=s.parentNode;if(!(!s||s.nodeName.toUpperCase()!=="A")){var i=typeof s.href=="object"&&s.href.constructor.name==="SVGAnimatedString";if(!(s.hasAttribute("download")||s.getAttribute("rel")==="external")){var n=s.getAttribute("href");if(!(!this._hashbang&&this._samePath(s)&&(s.hash||n==="#"))&&!(n&&n.indexOf("mailto:")>-1)&&!(i?s.target.baseVal:s.target)&&!(!i&&!this.sameOrigin(s.href))){var l=i?s.href.baseVal:s.pathname+s.search+(s.hash||"");l=l[0]!=="/"?"/"+l:l,ue&&l.match(/^\/[a-zA-Z]:\//)&&(l=l.replace(/^\/[a-zA-Z]:\//,"/"));var o=l,r=this._getBase();l.indexOf(r)===0&&(l=l.substr(r.length)),this._hashbang&&(l=l.replace("#!","")),!(r&&o===l&&(!y||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(o))}}}}};v.prototype._onpopstate=function(){var e=!1;return h?(A&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var a=this;if(t.state){var i=t.state.path;a.replace(i,t.state)}else if(y){var n=a._window.location;a.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}}):function(){}}();v.prototype._which=function(e){return e=e||h&&this._window.event,e.which==null?e.button:e.which};v.prototype._toURL=function(e){var s=this._window;if(typeof URL=="function"&&y)return new URL(e,s.location.toString());if(A){var t=s.document.createElement("a");return t.href=e,t}};v.prototype.sameOrigin=function(e){if(!e||!y)return!1;var s=this._toURL(e),t=this._window,a=t.location;return a.protocol===s.protocol&&a.hostname===s.hostname&&(a.port===s.port||a.port===""&&(s.port==80||s.port==443))};v.prototype._samePath=function(e){if(!y)return!1;var s=this._window,t=s.location;return e.pathname===t.pathname&&e.search===t.search};v.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function X(){var e=new v;function s(){return C.apply(e,arguments)}return s.callbacks=e.callbacks,s.exits=e.exits,s.base=e.base.bind(e),s.strict=e.strict.bind(e),s.start=e.start.bind(e),s.stop=e.stop.bind(e),s.show=e.show.bind(e),s.back=e.back.bind(e),s.redirect=e.redirect.bind(e),s.replace=e.replace.bind(e),s.dispatch=e.dispatch.bind(e),s.exit=e.exit.bind(e),s.configure=e.configure.bind(e),s.sameOrigin=e.sameOrigin.bind(e),s.clickHandler=e.clickHandler.bind(e),s.create=X,Object.defineProperty(s,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(s,"current",{get:function(){return e.current},set:function(t){e.current=t}}),s.Context=S,s.Route=T,s}function C(e,s){if(typeof e=="function")return C.call(this,"*",e);if(typeof s=="function")for(var t=new T(e,null,this),a=1;a<arguments.length;++a)this.callbacks.push(t.middleware(arguments[a]));else typeof e=="string"?this[typeof s=="string"?"redirect":"show"](e,s):this.start(e)}function me(e){if(!e.handled){var s,t=this,a=t._window;t._hashbang?s=y&&this._getBase()+a.location.hash.replace("#!",""):s=y&&a.location.pathname+a.location.search,s!==e.canonicalPath&&(t.stop(),e.handled=!1,y&&(a.location.href=e.canonicalPath))}}function fe(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(e,s,t){var a=this.page=t||C,i=a._window,n=a._hashbang,l=a._getBase();e[0]==="/"&&e.indexOf(l)!==0&&(e=l+(n?"#!":"")+e);var o=e.indexOf("?");this.canonicalPath=e;var r=new RegExp("^"+fe(l));if(this.path=e.replace(r,"")||"/",n&&(this.path=this.path.replace("#!","")||"/"),this.title=A&&i.document.title,this.state=s||{},this.state.path=e,this.querystring=~o?a._decodeURLEncodedURIComponent(e.slice(o+1)):"",this.pathname=a._decodeURLEncodedURIComponent(~o?e.slice(0,o):e),this.params={},this.hash="",!n){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=a._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}S.prototype.pushState=function(){var e=this.page,s=e._window,t=e._hashbang;e.len++,N&&s.history.pushState(this.state,this.title,t&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};S.prototype.save=function(){var e=this.page;N&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function T(e,s,t){var a=this.page=t||k,i=s||{};i.strict=i.strict||a._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=I(this.path,this.keys=[],i)}T.prototype.middleware=function(e){var s=this;return function(t,a){if(s.match(t.path,t.params))return t.routePath=s.path,e(t,a);a()}};T.prototype.match=function(e,s){var t=this.keys,a=e.indexOf("?"),i=~a?e.slice(0,a):e,n=this.regexp.exec(decodeURIComponent(i));if(!n)return!1;delete s[0];for(var l=1,o=n.length;l<o;++l){var r=t[l-1],c=this.page._decodeURLEncodedURIComponent(n[l]);(c!==void 0||!hasOwnProperty.call(s,r.name))&&(s[r.name]=c)}return!0};var k=X(),p=k,be=k;p.default=be;const ye=`
  <div class="home-valve-background">
        <!-- Primer punto -->
        <div class="home-valve-punto" style="top: 280px; left: 227px;" onclick="window.location.href='/floating-valves'">
            <div class="home-valve-visuals">
                <span class="home-valve-circle home-valve-animate-circle"></span>
                <span class="home-valve-inner-point home-valve-animate-point"></span>
            </div>
            <div class="home-valve-tooltip"><span>FLOATING BALL </span><span class="home-valve-highlight">VALVE</span></div>
        </div>

        <!-- Segundo punto -->
        <div class="home-valve-punto" style="top: 116px; left: 298px;" onclick="window.location.href='/trunnion-valves'">
            <div class="home-valve-visuals">
                <span class="home-valve-circle home-valve-animate-circle"></span>
                <span class="home-valve-inner-point home-valve-animate-point"></span>
            </div>
            <div class="home-valve-tooltip"><span>TRUNNION </span><span class="home-valve-highlight">VALVE</span></div>
        </div>

        <!-- Tercer punto -->
        <div class="home-valve-punto" style="top: 269px; left: 407px;" onclick="window.location.href='/butterfly-valves'">
            <div class="home-valve-visuals">
                <span class="home-valve-circle home-valve-animate-circle"></span>
                <span class="home-valve-inner-point home-valve-animate-point"></span>
            </div>
            <div class="home-valve-tooltip"><span>BUTTERFLY </span><span class="home-valve-highlight">VALVE</span></div>
        </div>

        <!-- Cuarto punto -->
        <div class="home-valve-punto" style="top: 440px; left: 400px;" onclick="window.location.href='/globe-valves'">
            <div class="home-valve-visuals">
                <span class="home-valve-circle home-valve-animate-circle"></span>
                <span class="home-valve-inner-point home-valve-animate-point"></span>
            </div>
            <div class="home-valve-tooltip"><span>GLOBE </span><span class="home-valve-highlight">VALVE</span></div>
        </div>

        <!-- Quinto punto -->
        <div class="home-valve-punto" style="top: 157px; left: 543px;" onclick="window.location.href='/gate-valves'">
            <div class="home-valve-visuals">
                <span class="home-valve-circle home-valve-animate-circle"></span>
                <span class="home-valve-inner-point home-valve-animate-point"></span>
            </div>
            <div class="home-valve-tooltip"><span>GATE </span><span class="home-valve-highlight">VALVE</span></div>
        </div>

        <!-- Sexto punto -->
        <div class="home-valve-punto" style="top: 303px; left: 511px;" onclick="window.location.href='/floating-valves'">
            <div class="home-valve-visuals">
                <span class="home-valve-circle home-valve-animate-circle"></span>
                <span class="home-valve-inner-point home-valve-animate-point"></span>
            </div>
            <div class="home-valve-tooltip"><span>SWING CHECK </span><span class="home-valve-highlight">VALVE</span></div>
        </div>
    </div>
`,Ae=`
<section>
  <img src="./assets/images/home-bg1.webp" alt="" class="home-header-background" />
  <main class="header-container" style="min-height: unset">
    <div class="header-content-wrapper">
      <header class="header-header">
        <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
        <nav class="header-navigation">
          <a href="/gate-valves" class="link">GATE VALVES</a>
          <a href="/check-valves" class="link">CHECK VALVES</a>
          <a href="/globe-valves" class="link">GLOBE VALVES</a>
          <a href="/trunnion-valves" class="link">TRUNNION VALVES</a>
          <a href="/floating-valves" class="link">FLOATING VALVES</a>
        <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
          <div class="dropdown">
            <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
            <ul class="dropdown-content">
              <li><a href="/">HOME</a></li>
              <li><a href="/steps">STEPS</a></li>
              <li><a href="/about-us">ABOUT US</a></li>
              <li><a href="/certifications">CERTIFICATIONS</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  </main>
  <section class="home-header-section">
    <div class="home-header-content">
      <h1 class="home-header-title">VALVES AND FLUID MANAGEMENT.</h1>
      <span class="home-header-subtitle typeJsText" data-typetext="FULLY"></span>
      <a style="text-decoration: none; cursor: pointer" href="javascript:void(0);"
        onclick="window.open('https://crm.dervosamerica.com/contact', '_blank');"
        class="home-header-cta-button">CONTACT</a>
      <p class="text-header-bajada">
        We provide a quick and reliable response for the supply of industrial
        valves. Our manufacturing process is certified by API International.
      </p>
    </div>
    <div class="home-header-valve">
      ${ye}
    </div>
  </section>
</section>

<section class="home-valve-section">
  <div class="home-valve-container">

    <section class="home-globe-valve-section">
      <div class="home-globe-valve-content">
        <a href="/gate-valves"><img src="./assets/images/valve1.webp" alt="Gate valve" class="home-butterfly-valve-"
            loading="lazy" /></a>
        <span class="home-globe-valve-text link gate-link">GATE VALVE</span>
      </div>
    </section>

    <section class="home-globe-valve-section">
      <div class="home-globe-valve-content">
        <a href="/check-valves"><img src="./assets/images/valve2.webp" alt="Swing valve"
            class="home-butterfly-valve-image" loading="lazy" /></a>
        <span class="home-globe-valve-text link">SWING VALVE</span>
      </div>
    </section>

    <section class="home-ball-valve-section">
      <div class="home-globe-valve-content">
        <a href="/globe-valves"> <img src="./assets/images/valve3.webp" alt="Globe valve"
            class="home-butterfly-valve-image" loading="lazy" /></a>
        <span class="home-globe-valve-text link">GLOBE VALVE</span>
      </div>
    </section>

    <section class="home-butterfly-valve-section">
      <div class="home-globe-valve-content">
        <a href="/floating-valves"><img src="./assets/images/valve4.webp" alt="Ball valve"
            class="home-butterfly-valve-image" loading="lazy" /></a>
        <span class="home-globe-valve-text link">BALL VALVE</span>
      </div>

    </section>

    <section class="home-butterfly-valve-section">
      <div class="home-globe-valve-content">
        <a href="/butterfly-valves"><img src="./assets/images/valve5.webp" alt="Butterfly valve"
            class="home-butterfly-valve-image butterfly-image" loading="lazy" /></a>
        <span class="home-globe-valve-text link">BUTTERFLY VALVE</span>
      </div>
    </section>
  </div>
</section>

<section class="home-certification">
  <div class="home-certification-info">
    <h3 class="home-certification-title">American Petroleum Institute</h3>
    <div class="home-certifications-section">
      <h2 class="home-certifications-heading">We have the certifications</h2>
      <p class="home-api-number-cert ">
        API
        <span class="home-api-number-highlight SecondtypeJsText" data-typetext="API"></span>
      </p>
      <p class="home-certifications-description DescriptionpeJsText" data-typetext="">
        Y
      </p>
    </div>
  </div>
</section>

<section class="home-first-api-section">
  <video id="fire-video" autoplay loop muted playsinline>
    <source src="./assets/videos/40_sss_loop_compressed.webm" type="video/webm" />
  </video>
  <img src="./assets/images/bg-valve-home1.jpeg" alt="" class="home-first-background-image" />
  <img src="./assets/images/first-valve.webp"  alt="API 6FD Fire Testing Standard for Valves"
    class="home-first-api-image" />
  <div class="home-first-text-content">
    <h1 class="home-first-api-title">
      <span class="home-first-api-code">API</span>
      <span class="home-first-api-standard">6FD</span>
    </h1>
    <p class="home-first-api-description">
      Fire Testing Standard for Valves: Ensuring Safety in Critical Environments
      under
      <span class="home-first-highlight">Fire</span> and
      <br />
      <span class="home-first-highlight">High Temperature</span> Conditions
    </p>
  </div>
</section>

<section class="home-second-api-section">
  <video autoplay loop muted playsinline id="water-video">
    <source src="./assets/videos/WhiteLiquislashtranAlph_compressed.webm" type="video/webm" />
  </video>
  <img src="./assets/images/bg-team.jpeg" alt="" class="home-first-background-image" />
  <img src="./assets/images/second-valve.webp" alt="API 6FD Fire Testing Standard for Valves"
    class="home-second-api-image" />
  <div class="home-second-text-content">
    <h1 class="home-first-api-title">
      <span class="home-second-api-code">API</span>
      <span class="home-first-api-standard">598</span>
    </h1>
    <p class="home-second-api-description">
      Standard for Valve Inspection and Testing Ensures Quality and Safety
    </p>
  </div>
</section>

<section class="valves-portfolio">
  </br>
  <h2 class="valves-title-portfolio">OUR VALVES PORTFOLIO</h2>
  <div class="home-carousel">
    <figure id="our-valves-slider">
      <div id="v-left-end" class="valve-card" style="font-weight: bold;">
        <div class="valve-card-inner">
          <a href="/check-valves" style="text-decoration: none;">
            <img src="./assets/images/check_valve 1 (2).webp" alt="Check Valve">
            <p style="font-size: 32px; font-family: Raleway; margin-bottom: 5;"> Check <strong
                style="color: #00A39F;">Valve</strong></p>
          </a>
        </div>
      </div>
      <div id="v-left-mid" class="valve-card" style="font-weight: bold;">
        <a href="/floating-valves" style="text-decoration: none;">
          <img src="./assets/images/Butterfly_Valve_Dervos_America 1 (1).webp" alt="Globe Valve">
          <p style="font-size: 32px; font-family: Raleway;">Floating<strong style="color: #00A39F;">Valve</strong></p>
        </a>
      </div>
      <div id="v-left" class="valve-card" style="font-weight: bold;">
        <a href="/gate-valves" style="text-decoration: none;">
          <img src="./assets/images/gate_valve 1.webp" alt="Gate Valve">
          <p style="font-size: 32px; font-family: Raleway; margin-bottom: 5;">Gate <strong
              style="color: #00A39F;">Valve</strong></p>
        </a>
      </div>
      <div id="v-center" class="valve-card" style="font-weight: bold;">
        <a href="javascript:void(0);"
         onclick="window.open('https://crm.dervosamerica.com/contact', '_blank');" 
         style="text-decoration: none;">
          <img src="./assets/images/logo-footer.webp" style="margin-top:10%; scale:1.2;"  alt="Contact">
          <p style="font-size: 32px; font-family: Raleway; margin-top: revert">
            <strong style="color: #00A39F;">Contact</strong>
          </p>
        </a>
      </div>
      <div id="v-right" class="valve-card" style="font-weight: bold;">
        <a href="/trunnion-valves" style="text-decoration: none;">
          <img src="./assets/images/trunnion2 (1).webp" alt="Gate Valve">
          <p style="font-size: 32px; font-family: Raleway; margin-bottom: 5;">Trunnion <strong
              style="color: #00A39F;">Valve</strong></p>
        </a>
      </div>
      <div id="v-right-mid" class="valve-card" style="font-weight: bold;">
        <a href="/butterfly-valves" style="text-decoration: none;">
          <img src="./assets/images/Butterfly_Valve_Dervos_America 1 (1).webp" alt="Globe Valve">
          <p style="font-size: 32px; font-family: Raleway;">Butterfly<strong style="color: #00A39F;">&nbsp;Valve</strong></p>
        </a>
      </div>
      
      <div id="v-right-end" class="valve-card" style="font-weight: bold;">
        <a href="/globe-valves" style="text-decoration: none;">
          <img src="./assets/images/valge-gloves-2 1 1.webp" alt="Globe Valve">
          <p style="font-size: 32px; font-family: Raleway;">Globe <strong style="color: #00A39F;">Valve</strong></p>
        </a>
      </div>
      
    </figure>
  </div>
</section>

<section class="home-info-certifications-section">
  <div class="home-info-certifications-container">
    <div class="home-info-certifications-grid">
      <div class="home-info-certification-item">
        <div class="home-info-certification-content">
          <div class="home-info-certification-header">
            <a href ="/certifications" style="text-decoration: none;" ><img src="./assets/images/certificate-info1.webp" alt="Operational Certifications Icon"
              class="home-info-certification-icon" />
            </a>
            <h3 class="home-info-certification-title">
              OPERATIONAL<br />
              CERTIFICATIONS
            </h3>
          </div>
          <p class="home-info-certification-details">
            Fire Safe API 6FA / 6FD / 607<br />
            Low emissions API 624
          </p>
        </div>
      </div>

      <div class="home-info-certification-item">
        <div class="home-info-certification-content">
          <div class="home-info-certification-header">
            <a href ="/certifications" style="text-decoration: none;" >
            <img src="./assets/images/certificate-info2.webp" alt="Operational Certifications Icon"
              class="home-info-certification-icon" />
            </a>
            <h3 class="home-info-certification-title">
              OPERATIONAL<br />
              CERTIFICATIONS
            </h3>
          </div>
          <p class="home-info-certification-details" style="width: 317px">
            Our valves upon request are delivered with a QA dossier and test
            results.
          </p>
        </div>
      </div>

      <div class="home-info-certification-item">
        <div class="home-info-certification-content">
          <div class="home-info-certification-header">
           <a href ="/certifications" style="text-decoration: none;" >
            <img src="./assets/images/certificate-info3.webp" alt="Operational Certifications Icon"
              class="home-info-certification-icon home-info-certificate-gears" />
           </a>
            <h3 class="home-info-certification-title">
              OPERATIONAL<br />
              CERTIFICATIONS
            </h3>
          </div>
          <p class="home-info-certification-details" style="width: 263px">
            Our manufacturing process is certificated by API International.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="home-mission-section-container">
  <video autoplay muted loop alt="Usa map" class="home-info-certification-map" >
        <source src="./assets/videos/Dervos_Mapa_Web1.webm" type="video/webm">
        Your browser does not support the video tag.
  </video>
  <!--
  <img src="./assets/images/usa-map.jpeg" alt="Usa map" class="home-info-certification-map" />
  -->
   <div class="home-mission-section">
    <h2 class="home-mission-label">OUR MISSION</h2>
    <h3 class="home-mission-title">
      DEVELOPING SOLUTIONS <br />
      FOR OUR CLIENTS
    </h3>
    <div class="home-mission-line"></div>
    <p class="home-mission-description">
      Together we share the mission and vision of a
      <span class="home-bold-text">modern,</span> <br />
      <span class="home-bold-text">
        efficient and environmentally conscious company
      </span>
      that <br />
      exceeds the quality demands imposed by the market <br />
      today.
    </p>
    <a href="/about-us"><button class="home-mission-cta">LEARN MORE</button></a>
  </div>
</section>

<!--
<section class="home-blog-articles-section">
  <h2 class="home-blog-section-title">
    SOME <span style="color: rgba(0, 163, 159, 1)">ARTICLES</span> MIGHT
    INTEREST YOU
  </h2>
  <div class="home-blog-articles-container">
    <article class="home-blog-article-card">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb9243c0f57cd87bdd022dd7d1af9d7efc229c16070f99b3f2edbd613a281dec?apiKey=360bf7e333734610b3ff691474e14d53&"
        alt="Pipeline Expansion Projects" class="home-blog-article-image" />
      <h3 class="home-blog-article-title">Pipeline Expansion Projects</h3>
      <p class="home-blog-article-description">
        Major pipeline expansion projects are underway across key regions,
        driven...
      </p>
    </article>
    <article class="home-blog-article-card">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d0ee07c2c5d9e3e6e6cad7be6d05d63651f0f488b8a22782845ebb08bb41764?apiKey=360bf7e333734610b3ff691474e14d53&"
        alt="Digitalization Revolutionizes" class="home-blog-article-image" />
      <h3 class="home-blog-article-title">Digitalization Revolutionizes</h3>
      <p class="home-blog-article-description">
        The integration of digital technologies, including AI-driven analytics
        and IoT...
      </p>
    </article>
    <article class="home-blog-article-card">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/599cc0b922d41ff04c249732c5524aefc5a49a30c50a3980a7b890ae3c454299?apiKey=360bf7e333734610b3ff691474e14d53&"
        alt="Challenges Highlight Tensions" class="home-blog-article-image" />
      <h3 class="home-blog-article-title">Challenges Highlight Tensions</h3>
      <p class="home-blog-article-description">
        Controversy surrounds several pipeline projects as communities voice
        concerns...
      </p>
    </article>
    <article class="home-blog-article-card">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/599cc0b922d41ff04c249732c5524aefc5a49a30c50a3980a7b890ae3c454299?apiKey=360bf7e333734610b3ff691474e14d53&"
        alt="Challenges Highlight Tensions" class="home-blog-article-image" />
      <h3 class="home-blog-article-title">Challenges Highlight Tensions</h3>
      <p class="home-blog-article-description">
        Controversy surrounds several pipeline projects as communities voice
        concerns...
      </p>
    </article>
  </div>
</section>

-->
`,Ee=()=>{let e=document.querySelector(".typeJsText");console.log("typeJsText",e);let s=["FULLY.","SUCESS.","AUTOMATED.","VALVE PURCHASING.","PROCCESSES."],t=0,a=0,i=!1;function n(){e?i?a>=0?(e.innerHTML=e.innerHTML.substring(0,a),a--,setTimeout(n,100)):(i=!1,t=(t+1)%s.length,setTimeout(n,500)):a<s[t].length?(e.innerHTML+=s[t].charAt(a),a++,setTimeout(n,100)):setTimeout(()=>{i=!0,n()},1e3):console.log("Element .typeJsText not found")}n()},we=()=>{let e=document.querySelector(".SecondtypeJsText");console.log("SecondtypeJsText",e);let s=["602","6D","600","594","609","602","623"],t=0,a=0,i=!1;function n(){e?i?a>=0?(e.innerHTML=e.innerHTML.substring(0,a),a--,setTimeout(n,100)):(i=!1,t=(t+1)%s.length,setTimeout(n,90)):a<s[t].length?(e.innerHTML+=s[t].charAt(a),a++,setTimeout(n,100)):setTimeout(()=>{i=!0,n()},6e3):console.log("Element .SecondtypeJsText not found")}n()},Ie=()=>{let e=document.querySelector(".DescriptionpeJsText"),s=[`Forged steel valves with threaded, bolted and welded ends, including
    gate, globe and check valves`,`Pipeline valves including gate, plug, ball, and check valves for pipeline transportation systems.
    `,`Steel gate valves with flanged and butt-welding ends, designed for high-pressure and high-temperature services.
    `,"Check valves with flanged, lug, wafer, and butt-welding ends to prevent backflow in piping systems.","Butterfly valves with double-flanged, lug-type, and wafer-type ends for shut-off and flow control.","Forged steel valves with threaded, bolted, and welded ends, including gate, globe, and check valves.",`Steel globe valves with flanged and butt-welding ends for high-temperature and high-pressure services.
    `],t=0,a=0,i=!1;function n(){e?i?a>=0?(e.innerHTML=e.innerHTML.substring(0,a),a--,setTimeout(n,10)):(i=!1,t=(t+1)%s.length,setTimeout(n,100)):a<s[t].length?(e.innerHTML+=s[t].charAt(a),a++,setTimeout(n,10)):setTimeout(()=>{i=!0,n()},4e3):console.log("Element .SecondtypeJsText not found")}n()},m=()=>{const e=document.querySelectorAll(".dropdown");if(console.log("Number of dropdowns found:",e.length),e.length===0){console.warn("No dropdown elements found!");return}e.forEach(s=>{const t=s,a=t.querySelector(".dropdown-content");if(!a){console.warn("No dropdown-content element found in a dropdown!");return}let i;const n=()=>{console.log("Showing dropdown content for",t),a.style.display="block",i&&window.clearTimeout(i)},l=()=>{i=window.setTimeout(()=>{console.log("Hiding dropdown content for",t),a.style.display="none"},1e3)};t.addEventListener("mouseover",n),a.addEventListener("mouseover",n),t.addEventListener("mouseleave",l),a.addEventListener("mouseleave",l)})},O=()=>{window.addEventListener("scroll",()=>{const e=document.querySelector(".parallax-background");if(e){const s=window.pageYOffset;e.style.backgroundPositionY=`${s*.2}px`}})},f=()=>{const e=window.scrollY||document.documentElement.scrollTop,s=document.querySelector(".sticky-header-container");e>75?window.hasOwnProperty("processActivated")||s&&!s.classList.contains("animate-sticky-header")&&(s.classList.add("animate-sticky-header"),setTimeout(()=>{},3e3)):s.classList.remove("animate-sticky-header")},Se=()=>{if(!document.getElementById("our-valves-slider")){console.error("Slider element not found");return}const s=["v-center","v-right","v-right-mid","v-right-end","v-left-end","v-left-mid","v-left"];function t(){const a=s.map(n=>document.getElementById(n)).filter(n=>n!==null);if(a.length!==s.length){console.error("Some elements are missing");return}const i=a.pop();i&&a.unshift(i),a.forEach((n,l)=>{n.id=s[l]})}setInterval(t,5e3)},b=()=>{window.addEventListener("popstate",()=>{window.scrollTo(0,0)}),window.addEventListener("pushState",()=>{window.scrollTo(0,0)}),window.addEventListener("replaceState",()=>{window.scrollTo(0,0)}),function(){const e=history.pushState;history.pushState=function(t,a,i){e.call(history,t,a,i),window.dispatchEvent(new Event("pushState")),window.scrollTo(0,0)};const s=history.replaceState;history.replaceState=function(t,a,i){s.call(history,t,a,i),window.dispatchEvent(new Event("replaceState")),window.scrollTo(0,0)}}()},Te=e=>{e.forEach(s=>{const t=new Image;t.src=s})},E=(e,s,t=100,a=!1)=>{const i=Array.from({length:18},(g,w)=>`./assets/scroll-animations/${e}/output_frame_${String(w+1).padStart(4,"0")}.webp`);Te(i);const n=document.getElementById(s);if(!n){console.error("Element with id not found.",s);return}let l=0,o=!1;console.log("smooth",a);const r=40;new IntersectionObserver(g=>{g.forEach(w=>{if(w.isIntersecting){o=!0;const x=setInterval(()=>{if(!o||l>=i.length-1){clearInterval(x);return}l++,n.src=i[l]},r)}else o=!1})},{threshold:.5}).observe(n)};b();const Oe=`
<main class="header-container container-parallax-about">
  <!-- <img src="./assets/images/header_bg.jpeg" alt="" class="header-background-image" /> -->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves" class="link">GATE VALVES</a>
        <a href="/check-valves" class="link">CHECK VALVES</a>
        <a href="/globe-valves" class="link">GLOBE VALVES</a>
        <a href="/trunnion-valves" class="link">TRUNNION VALVES</a>
        <a href="/floating-valves" class="link">FLOATING VALVES</a>
        <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
        <div class="dropdown">
          <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
          <ul class="dropdown-content">
            <li><a href="/">HOME</a></li>
            <li><a href="/steps">STEPS</a></li>
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/certifications">CERTIFICATIONS</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <section class="header-main-content">
      <h1 class="header-main-heading">
        YOU CAN COUNT ON THE QUALITY OF OUR VALVES.
      </h1>
      <p class="header-main-description">
        We provide a quick and reliable response for the supply of
        industrial valves. Our manufacturing process is certified by
        <span class="header-api-text">API International.</span>
      </p>
      <img  src="./assets/images/arrow.webp" class="header-arrow flotation-container" style="margin-bottom: 3%; margin-top:6%;"/>
      <p class="header-scroll-text" style="margin-top: 0;">SCROLL BELOW</p>
    </section>
  </div>
</main>
<section class="about-products-section">
  <h2 class="about-section-title">
    OUR PRODUCTS ARE STRICTLY DESIGNED AND BUILT TO COMPLY 100% WITH SPECIFIC
    MANUFACTURING STANDARDS
  </h2>
  <div class="about-products-container">
    <div>
      <p class="about-product-description">
        We feel represented by our global birth as a young company in the
        American market.
      </p>
      <p class="about-product-description">
        We deeply feel that the best product is one that meets the
        specifications and is delivered within the agreed deadlines.
      </p>
      <p class="about-product-description">
        To do this,<strong class="about-highlight">we use the best national and international logistics chains to supply
          our clients.</strong>
      </p>
      <p class="about-product-description">
        We know the criticality of the projects in which our products are used
        and
        <strong class="about-highlight">we provide peace of mind in supply and planning.</strong>
      </p>
      <p class="about-product-description">
        Dervos América markets
        <strong class="about-highlight">4 main lines of valves</strong>, Lock
        valves according to <strong class="about-highlight">API 600</strong>,
        Globe valves according to
        <strong class="about-highlight">API 623</strong>, Check valves according
        to
        <strong class="about-highlight">API 594</strong>
        and ¼ turn Ball valves according to
        <strong class="about-highlight">API 6D.</strong>
      </p>
      <p class="about-product-description">
        We develop diameters from
        <strong class="about-highlight">2" to 60"</strong>
        with pressures up to
        <strong class="about-highlight">class 2500.</strong>
      </p>
    </div>
    <img src="./assets/images/globe_valves.webp" alt="" class="about-product-blode-valve-image img-valve-about" />
  </div>
</section>

<section class="about-about-section">
  <div class="about-about-container main-about">
    <div class="about-about-content">
      <div class="about-about-title-column">
        <div class="about-about-title-wrapper">
          <h2 class="about-about-title">
            <span class="about-white-text">ABOUT</span>
            <span class="about-dark-text">US</span>
          </h2>
          <p class="about-about-subtitle" style="font-size: 32px">
            THINGS THAT
            <strong class="about-white-text">FIT</strong>
            YOUR NEEDS
          </p>
        </div>
      </div>
      <div class="about-about-description-column" style="margin-top: 75px">
        <p class="about-about-description">
          We deeply feel that the best product is one that meets the
          specifications and is delivered within the agreed deadlines. We know
          the criticality of the projects in which our products are used and we
          provide peace of mind in supply and planning. Dervos América markets 4
          main lines of valves, Lock valves according to API 600,
        </p>
      </div>
    </div>
  </div>
</section>

<section class="about-team-section">
  <p class="about-team-title">
    MEET THE <strong>TEAM</strong> BEHIND <strong>SUCCESS</strong>
  </p>
  <div class="about-profile-container">
    <section class="about-profile-image-column">
      <img src="./assets/images/Santiago Giron - Ceo Dervos America.webp"  alt="Profile picture of Nestor Morales"
        class="about-profile-image" />
    </section>
    <section class="about-profile-details-column">
      <div class="about-profile-details-wrapper">
        <h1 class="about-profile-name">
          <span class="about-profile-name-accent">SANTIAGO</span> GIRON
        </h1>
        <p class="about-profile-title">
            FOUNDER - CEO
        </p>
        <!-- <ul class="about-profile-qualifications">
          <li><strong>Mechanical engineer</strong></li>
          <li>Project Management <strong>Master's Degree.</strong></li>
          <li><strong>PhD,</strong> Economics, Management and Politics</li>
          <li><strong>Master</strong> of Business Administration</li>
        </ul> 
        <img src="./assets/images/blue-linkedin.webp" alt="" class="about-profile-logo" />-->
      </div>
    </section>
  </div>
  <img src="./assets/images/bg-team.jpeg" class="about-profile-image-bg" />
  <div class="about-profile-container">
    <section class="about-profile-details-column">
      <div class="about-profile-details-wrapper">
        <h1 class="about-profile-name">
          <span class="about-profile-name-accent">ERIC</span> WONG
        </h1>
        <p class="about-profile-title">
          FOUNDER
        </p>
        <!--<ul class="about-profile-qualifications">
          <li><strong>Mechanical engineer</strong></li>
          <li>Project Management <strong>Master's Degree.</strong></li>
          <li><strong>PhD,</strong> Economics, Management and Politics</li>
          <li><strong>Master</strong> of Business Administration</li>
        </ul>
        <img src="./assets/images/blue-linkedin.webp" alt="" class="about-profile-logo" />-->
      </div>
    </section>
    <section class="about-profile-image-column">
      <img src="./assets/images/Eric Wong - Ceo Dervos.webp" />
    </section>
  </div>


  <div class="about-mission-container">
    <div class="about-top-bar"></div>
    <h1 class="about-page-title">
      THE UNION OF BUSINESS EXPERTISE AND THE MANUFACTURING EXCELLENCE
    </h1>
    <div class="about-content-wrapper">
      <p class="about-page-subtitle">At <strong>DERVOS AMERICA, </strong> we are committed to manufacturing leading-edge
        products specific to flow control products for
        systems and services within oil, gas, and their processes worldwide, ensuring a standard of quality we set over
        30
        years ago.</p>
      <div class="about-two-column-layout">
        <div class="about-column">
          <p class="about-text-content">
            <strong>Our commitment </strong>to valve quality has stood the test of time in some of the world's most
            corrosive oil and gas
            applications, which include natural gas production and within H2S processes, producing water pipelines,
            saltwater disposals, and cryogenic.
            strategic union with Xiamen Dervos industrial Valves Co LTD.
          </p>
          <br>
          <p class="about-text-content">
            <strong>Our vision </strong>of excellence in manufacturing the industry's highest-quality valves is backed
            by our own
            engineering team's intricate process that ensures our valves are meet a standard that designed and
            manufactured to meet the industry's latest standards, regulations, and up-to-date engineering criteria to
            improve our valves' efficiency and reliability, essential for the safe and efficient operation of oil and
            gas facilities.
          </p>
        </div>

        <div class="about-column-with-image">
          <div class="about-text-with-image">
            <p class="about-text-content-image">
              At <strong>DERVOS AMERICA</strong> our fQuality Control Team oversees each valve manufactured, meets the standards and
              criteria set, and complies with the oil and gas industry concerning material traceability, quality
              control, testing, and traceability. That includes (NIST) which provides a policy on metrological
              traceability. ISO 9001:2015 outlines requirements for quality management systems, and (API) includes <strong>API
              6D</strong>, which outlines requirements for pipeline valves and is certified with full traceability by the DERVOS
              AMERICA team.
            </p>
            <img src="./assets/images/dervos_logo.webp" alt="Company image" class="about-company-image" />
          </div>
        </div>
      </div>
    </div>
    <p class="about-mission-statement">
      CEO Santiago Giron began his career in the valve industry over 30 years ago in Argentina, Peru, and Bolivia, and
      successfully collaborated and consulted on the Vaca Muerta natural gas pipeline in addition to Fortin de Piedra is
      Tecpetrol's premiere Vaca Muerta development. Santiago envisioned creating and developing valve manufacturing
      strategies with a strategic partnership with a mix of traditional state-of-the-art valve technology and a
      credentialed, certified, and recognized factory in the global supply chain. DERVOS AMERICA's exponential growth
      over the last ten years has created opportunities to supply valves in many large-scale projects, creating a
      globally recognized brand. At Dervos America Corp., we are committed to building a state-of-the-art,
      energy-efficient, and environmentally conscious company that exceeds the demands and standards of today's market
      and creates a sustainable future.
    </p>
  </div>
  <div class="about-partner container-parallax-about-us">
    <!--<img src="./assets/images/partner-bg.jpeg" alt="Hero background" class="about-partner-background" /> -->
    <div class="about-partner-content">
      <h2 class="about-partner-title">READY TO START ?</h2>
      <p class="about-partner-subtitle">PARTNER WITH US FOR A BETTER EXPERIENCE.</p>
      <!--
      <button onclick="location.href='mailto:contact@dervosamerica.com';" class="about-partner-cta">CONTACT NOW</button>
      -->
      <button onclick="window.open('https://crm.dervosamerica.com/contact', '_blank');" class="about-partner-cta">CONTACT NOW</button>
    </div>
  </div>
</section>
`;b();const Le=`
<main class="header-container container-parallax">
<!-- <img src="./assets/images/building-bg.jpeg" alt="" class="header-background-image" />-->

    <div class="header-content-wrapper">
        <header class="header-header">
        <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
            <nav class="header-navigation">
                <a href="/gate-valves" class="link">GATE VALVES</a>
                <a href="/check-valves" class="link">CHECK VALVES</a>
                <a href="/globe-valves" class="link">GLOBE VALVES</a>
                <a href="/trunnion-valves" class="link">TRUNNION VALVES</a>
                <a href="/floating-valves" class="link">FLOATING VALVES</a>
                <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
                <div class="dropdown">
                    <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
                    <ul class="dropdown-content">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/steps">STEPS</a></li>
                    <li><a href="/about-us">ABOUT US</a></li>
                    <li><a href="/certifications">CERTIFICATIONS</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <section class="header-main-content">
           <!--  <div class="parallax-background"></div>Div para el fondo con efecto parallax -->
                <h1 class="header-main-heading">
                    WE DESIGN AND CARRY OUT ALL THE STEPS IN THE CREATION OF OUR PRODUCTS.
                </h1>
                 <img  src="./assets/images/arrow.webp" class="header-arrow flotation-container"  style="height:50px; margin: 5%"/>
                <p class="header-scroll-text" style="margin-top: 20px;">SCROLL BELOW</p>
        </section>
    </div>
</main>
<div class="steps-content ">
    <img src="./assets/images/bg-products.webp" class="steps-bg-right steps-first-bg" />
    <img src="./assets/images/bg-products.webp" class="steps-bg-right steps-middle-bg" />
    <img src="./assets/images/bg-team.jpeg" class="steps-bg-right steps-third-bg" />
    <div class="steps-container steps-content-first">
        <div class="steps-content-column">
            <div class="steps-content-wrapper">
                <h2 class="steps-section-title">START</h2>
                <div class="steps-section-divider"></div>
                <p class="steps-intro-text">
                    · From the foundries, carefully selected to meet all quality standards
                </p>
                <p class="steps-quality-text">· ISO 9001 for quality procedures</p>
                <p class="steps-testing-text">And non destructive Testing</p>
                <ul class="steps-testing-list">
                    <li>Penetrant inspection</li>
                    <li>Magnetic Particle inspection</li>
                    <li>Radiography, X-Ray</li>
                </ul>
                <p class="steps-manufacturing-text">
                    We take in our hand the development and manufacture of our own molding
                    adaptable to any type of foundry material.
                </p>
                <p class="steps-manufacturing-text" style="margin-top: 0">
                    From sand casting for low complexity pieces to Investment Casting (low
                    wax) for more reliable and critical component.
                </p>
            </div>
        </div>
        <div class="steps-image-column">
            <img src="./assets/images/steps1.jpeg" alt="Product image" class="steps-product-image" />
        </div>
    </div>

    <div class="steps-container steps-content-first step-content-second">
    <!-- Imagen para escritorio -->
    <div class="steps-image-column steps-product-image-second desktop-image">
        <img src="./assets/images/steps2.jpeg" alt="Product image" class="steps-product-image" />
    </div>
    
    <div class="steps-content-column">
        <div class="steps-content-wrapper steps-right">
            <h2 class="steps-section-title">TAKING SHAPE</h2>
            <div class="steps-section-divider"></div>
            <p class="steps-intro-text">
                The engineering process, CAD-CAM and machining are critical to ensure
                a reliable product. In short, a valve is always more than the sum of
                its parts.
            </p>
            <p class="steps-quality-text" style="margin-top: 0">
                All our designs are carried out using CAD-CAM technology. Ensuring
                that all applicable design standards are met and being able to assess
                performance before arriving at the finished product.
            </p>
            <p class="steps-testing-text" style="color: black; margin: 5px">
                <b>FROM A SINGLE VALVE TO ELABORATED SOLUTIONS</b>
            </p>
            <p class="steps-manufacturing-text">
                The requirement is working together with our clients.
            </p>
            <p class="steps-manufacturing-text" style="margin-top: 0">
                We work with your specifications, your engineering and we adapt to
                your schedule.
            </p>
            <p class="steps-manufacturing-text" style="margin-top: 0">
                Machining is the heart of the development of our products.
            </p>
            <p class="steps-testing-text">
                <b>For DERVOS efficiency and reproducibility are essential.</b>
            </p>
        </div>
    </div>
    <!-- Imagen para móviles -->
    <div class="steps-image-column steps-product-image-second mobile-image">
        <img src="./assets/images/steps2.jpeg" alt="Product image" class="steps-product-image" />
    </div>
</div>


    <div class="steps-container steps-content-first step-content-third">
        <div class="steps-content-column">
            <div class="steps-content-wrapper">
                <h2 class="steps-section-title">ASSEMBLY</h2>
                <div class="steps-section-divider"></div>
                <p class="steps-quality-text">
                    Our assembly lines guarantee the correct selection of materials with a
                    wide production capacity.
                </p>
                <ul class="steps-testing-list">
                    <li>Bar code enable picking</li>
                    <li>Consolidated stock</li>
                    <li>ERP process</li>
                </ul>
                <p class="steps-testing-text" style="color: black">
                    <b>MAKE OUR ASSEMBLY LINE WORKING 24/7</b>
                </p>
            </div>
        </div>
        <div class="steps-image-column">
            <img src="./assets/images/steps3.jpeg" alt="Product image" class="steps-product-image " />
        </div>
    </div>

    <div class="steps-container steps-content-first">
        <div class="steps-image-column steps-forth-container">
            <img src="./assets/images/steps4.jpeg" alt="Product image" class="steps-product-image steps-forth" />
        </div>
        <div class="steps-content-column test-steps-container">
            <div class="steps-content-wrapper steps-right">
                <h2 class="steps-section-title test-certifications">TEST AND CERTIFICATIONS</h2>
                <div class="steps-section-divider"></div>
                <p class="steps-manufacturing-text">
                    Our state-of-the-art automatic banks ensure that each valvecomplies
                    with API 598.
                </p>
                <p class="steps-manufacturing-text" style="margin-top: 0">
                    Our quality guarantee system specifies that each finished valve will
                    have a certificate issued by Dervos America Corp. where the
                    traceability and tests carried out can be verified.
                </p>
                <p class="steps-testing-text" style="color: black; margin: 10px 0px">
                    Our products are:
                </p>
                <div class="steps-list-container">
                    <ul class="steps-testing-list" style="margin-top: 10px;">
                        <li>API 6D Certified.</li>
                        <li>API 600 compliant.</li>
                        <li>API 594 compliant.</li>
                    </ul>
                    <ul class="steps-testing-list steps-second-list" style="margin-top: 10px;">
                        <li>Fire safe.</li>
                        <li>API6FD/API6FA certified.</li>
                        <li>API 624 certified (low emission).</li>
                    </ul>
                </div>
                <div class="steps-certification-button-container">
                    <img src="./assets/images/certification-star.webp" alt="Cert image" class="steps-cert-image" />
                    <a href ="/certifications" style="text-decoration: none;" ><button class="steps-cert-button">MORE ABOUT OUR CERTIFICATIONS</button></a>
                </div>
            </div>
        </div>
    </div>

    <div class="steps-container steps-content-first">
        <div class="steps-content-column">
            <div class="steps-content-wrapper">
                <h2 class="steps-section-title">LOGISTICS</h2>
                <div class="steps-section-divider"></div>
                <p class="steps-testing-text" style="color: black;">
                    Finally when the product is ready:
                </p>
                <p class="steps-quality-text">
                    It is dispatched to its destination through our own <b>national and international distribution
                        chain</b>.
                </p>
                <!--<button class="steps-contact-button">CONTACT</button>-->
                <!--
                <a style="text-decoration: none;  cursor: pointer;" href="mailto:contact@dervosamerica.com" class="home-header-cta-button">CONTACT</a> 
                -->
                <a style="text-decoration: none; cursor: pointer;" onclick="window.open('https://crm.dervosamerica.com/contact', '_blank'); return false;" class="home-header-cta-button">CONTACT</a>
            </div>
        </div>
        <div class="steps-image-column steps-fifth">
            <img src="./assets/images/steps5.jpeg" alt="Product image" class="steps-product-image" />
        </div>
    </div>

</div>
<section class="about-about-section">
  <div class="about-about-container main-about">
    <div class="about-about-content">
      <div class="about-about-title-column">
        <div class="about-about-title-wrapper">
          <h2 class="about-about-title">
            <span class="about-white-text">ABOUT</span>
            <span class="about-dark-text" >US</span>
          </h2>
          <p class="about-about-subtitle" style="font-size: 32px">
            THINGS THAT
            <strong class="about-white-text">FIT</strong>
            YOUR NEEDS
          </p>
        </div>
      </div>
      <div class="about-about-description-column" style="margin-top: 75px">
        <p class="about-about-description">
          We deeply feel that the best product is one that meets the
          specifications and is delivered within the agreed deadlines. We know
          the criticality of the projects in which our products are used and we
          provide peace of mind in supply and planning. Dervos América markets 4
          main lines of valves, Lock valves according to API 600,
        </p>
      </div>
    </div>
  </div>
</section>

`;b();const Ne=`
<main class="header-container container-parallax-gate-valves">
<!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />-->

    <div class="header-content-wrapper">
        <header class="header-header">
        <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
            <nav class="header-navigation">
                <a href="/gate-valves" class="link">GATE VALVES</a>
                <a href="/check-valves" class="link">CHECK VALVES</a>
                <a href="/globe-valves" class="link">GLOBE VALVES</a>
                <a href="/trunnion-valves" class="link">TRUNNION VALVES</a>
                <a href="/floating-valves" class="link">FLOATING VALVES</a>
                <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
                <div class="dropdown">
                    <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
                    <ul class="dropdown-content">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/steps">STEPS</a></li>
                    <li><a href="/about-us">ABOUT US</a></li>
                    <li><a href="/certifications">CERTIFICATIONS</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <section class="header-main-content" >
            <p class="valves-testing-list" style="margin-top: 10%; margin-bottom:1%;">WE DESIGN AND CARRY OUT ALL THE STEPS IN THE CREATION OF OUR PRODUCTS.</p>
            <p class="header-scroll-text"
                style="font-weight: 900;  letter-spacing: 0.20em ;margin-top: 20px; font-size: 60px; color: #3F3F3F; font-family: Raleway; ">GATE
                VALVES</p>
                <img src="./assets/images/arrow.webp" class="header-arrow flotation-container" style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
          <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
        </section>
    </div>
</main>
<div class="valves-content">
    <img class="valves-bg-right valves-first-bg" />
    <img src="./assets/images/bg-team.jpeg" class="valves-bg-right valves-middle-bg" />
    <img src="./assets/images/bg-products.webp" class="valves-bg-right valves-third-bg" />
    <div class="valves-container">
        <div class="valves-content-column valves-first-column">
            <div class="valves-content-wrapper">
                <div class="valves-section">
                    <h1 class="valves-section-title" style="font-size: 80px">GATE<strong style="color: #00A39F;"> VALVE</strong> </h1>
                    <p style="color:#959595; font-size:24px; font-family:Raleway">Designed And Manufactured Under
                        International Standards</p>
                </div>
                <ul class="valves-testing-list">
                    <li>API 600 / API 6D</li>
                    <li> From 2′ up to 60′</li>
                    <li> Up to class 2500 </li>
                    <li>All Trims available</li>
                    <li>High quality standart and materials</li>
                    <li>Available in any carbon, stainless or
                        alloys steel (ASTM series)</li>
                </ul>
                <div class="valves-section">
                    <h3 class="valves-section-title">OUR WIDE <strong style="color: #00A39F;"> RANGE </strong> OF
                        DIAMETER</h3>
                    <p style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be produced
                        from <strong>2″</strong> up tost <strong> 60″.</strong> </p>
                </div>
                </br>
                <div class="valves-section">
                    <h3 class="valves-section-title">HOW MUCH <strong style="color: #00A39F;"> PRESSURE </strong> DO YOU
                        WANT?</h3>
                    <h5 style="color:#959595; font-size:18px; font-family:Raleway">We can elaborate our product from:
                    </H5>
                    <div class="valves-testing-list" style="font-size: 18px">
                        <p>ANSI 150 / ANSI 300 / ANSI 600</p>
                        <p> ANSI 900 / ANSI 1500 / ANSI 2500</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="valves-image-column">
            <!--
            <img src="./assets/images/valves-equipment-1.jpeg" alt="Product image" class="valves-product-image first-image-valve" />
            -->
            <img src="./assets/scroll-animations/gate-valves/output_frame_0001.webp" id="parallax-gate-valve" alt="Product image" class="valves-product-image first-image-valve" />
        </div>
    </div>
    </br>
    <div class="valves-container second-container">
        <div class="valves-image-column">
            <img src="./assets/images/valves-equipment-2.webp" alt="Product image" class="valves-product-image" />
        </div>
        <div class="valves-content-column valves-second-column">
            <div class="valves-content-wrapper valves-right">
                <div class="valves-section">
                    <h3 class="valves-section-title" style="white-space: nowrap; text-overflow: ellipsis;">CONNECTION
                        <strong style="color: #00A39F;">FLANGES</strong></h3>
                    <h5 style="color:#959595; font-size:18px; font-family:Raleway">As should be, you can choose from:
                    </h5>
                    <p class="valves-testing-list" style="margin-top: 15px;">RF / FF / RJ / BW </p>
                </div>
                <div class="valves-section">
                    <h3 class="valves-section-title">A WORLD OF POSSIBILITIES</h3>
                    <p class="valves-testing-list" style="font-size: 18px">Developing our moulds in advance, we can cast
                        our valves in
                        virtually any <strong> ASTM code.</strong>
                        <br>
                        From <strong>Carbon Steel</strong> to <strong> Stainless Steel </strong>and all in between.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </br>

    <div class="valves-container valves-third-container">
        <div class="valves-content-column  valves-third-column">
            <div class="valves-content-wrapper" style="gap: 40px;">
                <div class="valves-section">
                    <h3 class="valves-section-title">LOOKING <strong style="color: #00A39F;">INSIDE </strong></h3>
                    <h5 style="color:#959595; font-size:18px; font-family:Raleway">We’ve got you covered</h5>
                    <p class="valves-testing-list">All trims available in the latest <strong> API
                        </strong>specifications.
                        <br>
                        From our standard <strong>TRIM 8</strong> up to <strong> TRIM 24.</strong>
                    </p>
                </div>
                <div class="valves-section">
                    <div class="valves-section-title">THINGS THAT <strong style="color: #00A39F;"> FIT </strong> YOUR
                        NEEDS</div>
                    <h5 style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be delivered with:
                    </h5>
                    <ul class="valves-testing-list">
                        <li>Handwheel operated</li>
                        <li>Electric actuator operated</li>
                        <li>Pneumatic actuator operated</li>

                    </ul>
                </div>
                <a id="downloadLink" href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank" class="valves-contact-button" style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
                     DOWNLOAD TECHNICAL FILE
                </a>
            </div>
        </div>
        <div class="valves-image-column">
            <img src="./assets/images/valves-equipment-3.webp" alt="Product image" class="valves-product-image" />
        </div>
    </div>

</div>
<section class="about-about-section">
    <div class="about-about-container">
        <div class="about-about-content">
            <div class="about-about-title">
                <div class="about-about-title-wrapper">
                    <h2 class="about-about-title">
                        <span class="about-white-text">TECH<span class="nical-text">NICAL</span></span>
                    </h2>
                    <p class="about-about-subtitle">
                        A DEEP LOOK AT THE
                        <strong class="about-white-text">TECHNICAL</strong>
                        SHEET
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="valves-content content-fourth">
    <div class="valves-container second-container" style="text-align: left;">
        <div class="valves-image-column">
            <img src="./assets/images/valves-equipment-4.jpeg" alt="Product image" class="valves-product-image-fourth" />
        </div>
        <div class="valves-content-column">
            <div class="valves-content-wrapper valves-right">
                <div class="valves-section">
                    <div class="valves-section-title">GATE <strong style="color:#00A39F;"> VALVE</strong></div>
                    <h5 style="color:#959595; font-size:18px; font-family:Raleway">OS & Y, Rising Stem, Flexible Solid
                        Wedge Bolted Bonnet, Threaded or Welded Seat Ring Non-Rising Gate Valve.</h5>
                </div>
                <div class="valves-section">
                    <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: 800;">STANDARDS
                        COMPLIANCE:</h4>
                    <ul class="valves-testing-list">

                        <li>Basic Design: AP1600, BS1414</li>
                        <li> Face to Face Dimension: ANSI B16.10</li>
                        <li> End to End Dimension: ANSI B16.10</li>
                        <li> End Flange Dimension: 2"-24" to ANSI B16.5, 26"-60" to MSS</li>
                        <li> SP-44, to ANSI B16.47-A on request</li>
                        <li> B. W. Ends to ANSI B16.25</li>
                        <li> Manufacturing to NACE MR-01-75 on request</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="centered-title">STANDARD MATERIALS <strong style="color: #00A39F;"> SPECIFICATIONS</strong></div></br>
    <img src="./assets/images/pdf-1.jpeg" alt="img-pdf" class="img-pdf-section-valve">

    <div class="centered-title">TEST PRESSURE TO <strong style="color: #00A39F;">API598</strong></div>
    <img src="./assets/images/pdf-2.jpeg" alt="img-pdf" class="img-pdf-section-valve">
    <img src="./assets/images/pdf-3.jpeg" alt="img-pdf" class="img-pdf-section-valve">
</div>

<div class="download-section">
  <h4 class="check-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <!-- Enlace para abrir en nueva pestaña y descargar el archivo si el usuario decide hacerlo -->
  <a href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank" class="download-link">
    DOWNLOAD TECHNICAL FILE
  </a>
  <div class="background-image"></div>
</div>
`;b();const Ce=`
<main class="header-container container-parallax-gate-check">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />-->
  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves" class="link">GATE VALVES</a>
        <a href="/check-valves" class="link">CHECK VALVES</a>
        <a href="/globe-valves" class="link">GLOBE VALVES</a>
        <a href="/trunnion-valves" class="link">TRUNNION VALVES</a>
        <a href="/floating-valves" class="link">FLOATING VALVES</a>
        <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
        <div class="dropdown">
          <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
          <ul class="dropdown-content">
            <li><a href="/">HOME</a></li>
            <li><a href="/steps">STEPS</a></li>
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/certifications">CERTIFICATIONS</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="header-main-content">
      <p class="valves-testing-list" style="margin-top: 10%; margin-bottom:1%;">WE DESIGN AND CARRY OUT ALL THE STEPS IN
        THE CREATION OF OUR PRODUCTS.</p>
      <p class="header-scroll-text"
        style="font-weight: 900;  letter-spacing: 0.20em ;margin-top: 20px; font-size: 60px; color: #3F3F3F; font-family: Raleway; ">
        SWING CHECK
        VALVE</p>
        <img src="./assets/images/arrow.webp" class="header-arrow flotation-container" style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
          <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>
<div class="check-content">
  <img class="check-bg-right check-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="check-bg-right check-middle-bg" />
  <img src="./assets/images/bg-products.webp" class="check-bg-right check-third-bg" />
  <div class="check-container">
    <div class="check-content-column check-first-column">
      <div class="check-content-wrapper">
        <div class="check-section">
          <h1 class="check-section-title" style="font-size: 80px">SWING CHECK<strong style="color: #00A39F;"> VALVE</strong> </h1>
          <p style="color:#959595; font-size:24px; font-family:Raleway">Designed And Manufactured Under
            International Standards</p>
        </div>
        <ul class="check-testing-list">
          <li>Steel valves <strong>API 600 / 6D </strong></li>
          <li>Face to face <strong>ASME B16.10</strong></li>
          <li>Flanges <strong>ASME B16.5 / ASME B16.47 </strong> </br> Serie A y B</li>
          <li>Butt weld ends <strong>ASME B16.25</strong></li>
          <li>Inspection and Testing Standard <strong>API 598</strong></li>
          <li>Quality standard of cast surface </br> <strong>MSS- SP 112 / 55</strong></li>
          <li>Marking Standard <strong>MSS-SP 25</strong></li>
        </ul>
        <div class="check-section">
          <h3 class="check-section-title">OUR WIDE <strong style="color: #00A39F;"> RANGE </strong> OF
            DIAMETER</h3>
          <p style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be produced
            from <strong>2″</strong> up tost <strong> 60″.</strong> </p>
        </div>
        </br>
        <div class="check-section">
          <h3 class="check-section-title">HOW MUCH <strong style="color: #00A39F;"> PRESSURE </strong> DO YOU
            WANT?</h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">We can elaborate our product from:
          </H5>
          <div class="check-testing-list  check-second-content">
            <ul>
              <li>ANSI 150</li>
              <li>ANSI 300</li>
              <li>ANSI 600</li>
              <li>ANSI 900</li>
              <li>ANSI 1500</li>
              <li>ANSI 2500</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="check-image-column">
    <!--
      <img src="./assets/images/SwingCheck6.webp" alt="Product image" class="check-product-image-first" />
    -->
    <img src="./assets/scroll-animations/check-valves/output_frame_0001.webp" id="parallax-check-valve" alt="Product image" class="check-product-image-first" />
    </div>
  </div>
  </br>
  <div class="check-container check-second-container">
    <div class="check-image-column">
      <img src="./assets/images/swingCheck02.webp" alt="Product image" class="check-product-image-second image-check-second" />
    </div>
    <div class="check-content-column check-second-column">
      <div class="check-content-wrapper check-right">
        <div class="check-section">
          <h3 class="check-section-title" style="white-space: nowrap; text-overflow: ellipsis;">CONNECTION
            <strong style="color: #00A39F;">FLANGES</strong>
          </h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">As should be, you can choose from:
          </h5>
          <p class="check-testing-list" style="margin-top: 15px;">RF / FF / RJ / BW </p>
        </div>
        <div class="check-section">
          <h3 class="check-section-title">A WORLD OF POSSIBILITIES</h3>
          <p class="check-testing-list" style="font-size: 18px">Developing our moulds in advance, we can cast
            our valves in
            virtually any <strong> ASTM code.</strong>
            <br>
            From <strong>Carbon Steel</strong> to <strong> Stainless Steel </strong>and all in between.
          </p>
        </div>
      </div>
    </div>
  </div>
  </br>

  <div class="check-container check-third-container">
    <div class="check-content-column  check-third-column">
      <div class="check-content-wrapper" style="gap: 40px;">
        <div class="check-section">
          <h3 class="check-section-title">LOOKING <strong style="color: #00A39F;">INSIDE </strong></h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">We’ve got you covered</h5>
          <p class="check-testing-list">All trims available in the latest <strong> API
            </strong>specifications.
            <br><br>
            From our standard <strong>TRIM 8</strong> up to <strong> TRIM 24.</strong>
          </p>
        </div>
        <div class="check-section">
          <div class="check-section-title">THINGS THAT<strong style="color: #00A39F;"> FIT </strong> YOUR
            NEEDS</div>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be delivered with:
          </h5>
          <ul class="check-testing-list">
            <li>Handwheel operated</li>
            <li>Electric actuator operated</li>
            <li>Pneumatic actuator operated</li>

          </ul>
        </div>
        <a id="downloadLink" href="https://dervosamerica.com/DervosValvesCatalog.pdf"
          target="_blank" class="check-contact-button"
          style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
          DOWNLOAD TECHNICAL FILE
        </a>
      </div>
    </div>
    <div class="check-image-column">
      <img src="./assets/images/swingCheck03.webp" alt="Product image" class="check-product-image third-image-check" style=" width: 778px;
      height: 778px;"/>
    </div>
  </div>

</div>
<section class="about-about-section">
  <div class="about-about-container">
    <div class="about-about-content">
      <div class="about-about-title">
        <div class="about-about-title-wrapper">
          <h2 class="about-about-title">
            <span class="about-white-text">TECH<span class="nical-text">NICAL</span></span>
          </h2>
          <p class="about-about-subtitle">
            A DEEP LOOK AT THE
            <strong class="about-white-text">TECHNICAL</strong>
            SHEET
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="check-content content-fourth">
  <div class="check-container second-container" style="text-align: left;">
    <div class="check-image-column">
      <img src="./assets/images/Check Valve - Dervos America.jpeg" alt="Product image" class="check-product-image" />
    </div>
    <div class="check-content-column">
      <div class="check-content-wrapper check-right">
        <div class="check-section">
          <div class="check-section-title"> CHECK <strong style="color:#00A39F;"> VALVE</strong></div>
          <h5 style="color:#959595; font-size:24px; font-family:Raleway">Bolted, Cover, Swing Type Disc, Threaded or
            Welded Seat Ring.</h5>
        </div>
        <div class="check-section">
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: 800;">STANDARDS
            COMPLIANCE:</h4>
          <ul class="check-testing-list">
            <li>Basic Design: <strong> AP1594</strong></li>
            <li> Face to Face Dimension: <strong>ANSI B16.10 </strong></li>
            <li> End to End Dimension: <strong>ANSI B16.10 </strong></li>
            <li> End Flange Dimension: <strong>2"-24" to ANSI B16.5</strong>
              <br> > 24: to MSS SP-44
              to ANSI B16.34 on request
            </li>
            <li> B. W. Ends to <strong>ANSI B16.25</strong></li>
            <li> Manufacturing to <strong> NACE MR-01-75 on request </strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="centered-title">STANDARD MATERIALS <strong style="color: #00A39F;"> SPECIFICATIONS</strong></div></br>
  <img src="./assets/images/Material_specificiations.webp" alt="img-pdf" class="img-pdf-section-check">
  <img src="./assets/images/Material_specificiations2.webp" alt="img-pdf" class="img-pdf-section-check">

  <div class="centered-title">TEST PRESSURE TO <strong style="color: #00A39F;">API598</strong></div></br>
  <img src="./assets/images/pdf-3.jpeg" alt="img-pdf" class="img-pdf-section-check">
</div>

<div class="download-section">
  <h4 class="check-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <!-- Enlace para abrir en nueva pestaña y descargar el archivo si el usuario decide hacerlo -->
  <a href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank" class="download-link">
    DOWNLOAD TECHNICAL FILE
  </a>
  <div class="background-image"></div>
</div>

`;b();const xe=`
<main class="header-container container-parallax">
  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves">GATE VALVES</a>
        <a href="/check-valves">CHECK VALVES</a>
        <a href="/globe-valves">GLOBE VALVES</a>
        <a href="/trunnion-valves">TRUNNION VALVES</a>
        <a href="/floating-valves">FLOATING VALVES</a>
        <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
        <div class="dropdown">
          <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
          <ul class="dropdown-content">
            <li><a href="/">HOME</a></li>
            <li><a href="/steps">STEPS</a></li>
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/certifications">CERTIFICATIONS</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <section class="header-main-content">
      <h1 class="header-main-heading" style="font-size: 50px;">
        CERTIFICATIONS
      </h1>
      <p class="header-main-description" style="font-size: 33px; margin-bottom: 25px">
        Our manufacturing process is certificated by API International. <br> <br>
        <span class="header-api-text">You can count on the quality of our valves.</span>
      </p>
      <!--<h6 style="color: white; font-size: 38px; margin-bottom:15%; font-family: Raleway; " >Our manufacturing process is certificated by API International.You can count on the quality of our valves.</h6>-->
      <img class="flotation-container" src="./assets/images/arrow.webp" class="header-arrow"
        style="height:50px; margin: 5%" />
      <p class="header-scroll-text" style="margin-top: 0;">SCROLL BELOW</p>
    </section>
  </div>
</main>
<section class="certifications-section">
  <h2 class="certifications-title">DERVOS AMERICA API CERTIFICATIONS</h2>
  <div class="line-divider"></div> <!-- Línea divisora -->

  <p class="certifications-subtitle">
    API 6D CERTIFIED * API 600 COMPLIANT * API 594 COMPLIANT * FIRE SAFE API6D/API6FA CERTIFIED * API 624 CERTIFIED
    (LOW EMISSION)
  </p>

  <p class="certifications-description">
    API 6D covers the design, manufacture, testing, and documentation for pipeline ball, check, gate, and plug
    valves for pressure ratings up to ASME class 2500.
  </p>

  <img src="./assets/images/certificado.webp" alt="img background"
    class="img-background-certifications fadein-certification">

</section>

<div class="api-spec-container">
  <div class="api-container">
    <div class="api-text-column">
      <h1 class="api-title">API SPEC 6D</h1>
      <div class="line-divider-list"></div> <!-- Línea divisora -->
      <p class="api-description">The standard specifies configurations for the following types of valves:</p>
      <ul class="api-list-left">
        <li>Gate valves</li>
        <li>Lubricated and non-lubricated plug valves</li>
        <li>Ball valves</li>
        <li>Check valves</li>
        <li>Full-opening valves</li>
        <li>Reduced-opening valves</li>
        <li>The valve ends may be flanged or welding. If fluid can become trapped in the body cavity, then
          valves for both gas and liquid service must have a pressure relief. Actuators may be electric,
          hydraulic, or pneumatic.</li>
      </ul>
    </div>

    <div class="api-list-column-right">
      <p class="api-description-right">All our products are in accordance and certified with API 6D, complying
        with each step of production.</p>
      <ul class="api-list-right">
        <li class="api-list-item">
          <span class="text">Engineering design</span>
          <span class="number">1</span>
        </li>
        <li class="api-list-item">
          <span class="text">Manufacture process</span>
          <span class="number">2</span>
        </li>
        <li class="api-list-item">
          <span class="text">Testing</span>
          <span class="number">3</span>
        </li>
        <li class="api-list-item">
          <span class="text">Marking and shipping</span>
          <span class="number">4</span>
        </li>
      </ul>
    </div>
  </div>


  <!-- container icon -->

  <div class="icon-row-alt">
    <div class="icon-container-alt">
      <img src="./assets/images/checkout.webp" alt="Icon 1" class="fade">
      <h3>STEM BACKSEAT TEST</h3>
      <div class="line-divider-list-icons-alt"></div>
      <p>Pressure at 1.1 times valve rating for 2 to 5 minutes depending on valve size</p>
    </div>

    <div class="icon-container-alt">
      <img src="./assets/images/checkout.webp" alt="Icon 2" class="fade">
      <h3>HYDROSTATIC SHELL TEST</h3>
      <div class="line-divider-list-icons-alt"></div>
      <p>Pressure at 1.5 times valve rating for 2 to 30 minutes depending on valve size</p>
    </div>

    <div class="icon-container-alt">
      <img src="./assets/images/checkout.webp" alt="Icon 3" class="fade">
      <h3>HYDROSTATIC SEAT TEST</h3>
      <div class="line-divider-list-icons-alt"></div>
      <p>Pressure at 1.1 times valve rating for 2 to 5 minutes depending on valve size</p>
    </div>
  </div>


  <!--CONTAINER ICON SECOND-->

  <div>
    <h1 class="title-certifications-icons">
      <span class="highlight">FIRE SAFE&nbsp;</span>CERTIFICATES
    </h1>
    <div class="line-divider-list-icons-title"></div>
  </div>
  <div class="icon-row">
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FA_GLOBE_VALVE-268155.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FA</span></h3>
      <p>GLOBE VALVE 268155</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FA_GLOBE_VALVE-268157.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FA</span></h3>
      <p>GLOBE VALVE 268157</p>
    </div>

    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FA_GLOBE_VALVE-268159.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FA</span></h3>
      <p>GLOBE VALVE 268159</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FA_Swing Check_8-600.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FA</span></h3>
      <p>SWING CHECK 8-600</p>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FA_Swing_Check_4-600.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FA</span></h3>
      <p>SWING CHECK 4-600</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FA_Swing_Check_16-150.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FA</span></h3>
      <p>SWING CHECK 16-150</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FD_Swing_Check_2-150_32233.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FD</span></h3>
      <p>SWING CHECK 2-150 32233</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FD_Swing_Check_2-600_42342.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FD</span></h3>
      <p>SWING CHECK 2-600 42342</p>
    </div>
  </div>

  <div class="icon-row">
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FD_Swing_Check_4-150_23116.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FD</span></h3>
      <p>SWING CHECK 4-150 23116</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FD_Swing_Check_8-150_48039.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FD</span></h3>
      <p>SWING CHECK 8-150 48039</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API6FD_WAFER_CHECK.pdf" target="_blank" rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">6FD</span></h3>
      <p>WAFER CHECK</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API607_Ball.pdf" target="_blank" rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">607</span></h3>
      <p>BALL</p>
    </div>
  </div>

  <!--CONTAINER ICON THIRD-->
  <div>
    <h1 class="title-certifications-icons">
      <span class="highlight">FUGITIVE EMISSION&nbsp;</span> CERTIFICATES
    </h1>
    <div class="line-divider-list-icons-title"></div>
  </div>
  <div class="icon-row">
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/API624-Certificate_No273345.pdf" target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/images/DervosAPI.webp" alt="Icon 3" class="fade">
      </a>
      <h3>API<span class="highlight title-cert">624</span></h3>
      <p>API624 CERTIFICATE No.273345</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/ISO15848-Certificate_No273341.pdf" target="_blank"
        rel="noopener noreferrer"> <img src="./assets/images/DervosCertificates.webp" alt="Icon 3" class="fade">
      </a>
      <h3>ISO<span class="highlight title-cert">15848</span></h3>
      <p>CERTIFICATE No.273341</p>
    </div>
    <div class="icon-container">
      <a href="https://dervosamerica.com/certificates/ISO15848-Certificate_No273343.pdf" target="_blank"
        rel="noopener noreferrer"> <img src="./assets/images/DervosCertificates.webp" alt="Icon 3" class="fade">
      </a>
      <h3>ISO<span class="highlight title-cert">15848</span></h3>
      <p>CERTIFICATE No.273343</p>
    </div>
  </div>
  <!--  ABOUT US SECTION-->
  <section class="about-about-section">
    <div class="about-about-container main-about">
      <div class="about-about-content">
        <div class="about-about-title-column">
          <div class="about-about-title-wrapper">
            <h2 class="about-about-title">
              <span class="about-white-text">ABOUT</span>
              <span class="about-dark-text">US</span>
            </h2>
            <p class="about-about-subtitle" style="font-size: 32px">
              THINGS THAT
              <strong class="about-white-text">FIT</strong>
              YOUR NEEDS
            </p>
          </div>
        </div>
        <div class="about-about-description-column" style="margin-top: 75px">
          <p class="about-about-description">
            We deeply feel that the best product is one that meets the
            specifications and is delivered within the agreed deadlines. We know
            the criticality of the projects in which our products are used and we
            provide peace of mind in supply and planning. Dervos América markets 4
            main lines of valves, Lock valves according to API 600,
          </p>
        </div>
      </div>
    </div>
  </section>
  `;b();const Re=`
<main class="header-container container-parallax-trunnion-valves">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />-->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves" class="link">GATE VALVES</a>
        <a href="/check-valves" class="link">CHECK VALVES</a>
        <a href="/globe-valves" class="link">GLOBE VALVES</a>
        <a href="/trunnion-valves" class="link">TRUNNION VALVES</a>
        <a href="/floating-valves" class="link">FLOATING VALVES</a>
        <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
        <div class="dropdown">
          <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
          <ul class="dropdown-content">
            <li><a href="/">HOME</a></li>
            <li><a href="/steps">STEPS</a></li>
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/certifications">CERTIFICATIONS</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="header-main-content">
      <p class="valves-testing-list" style="margin-top: 10%; margin-bottom:1%;">WE DESIGN AND CARRY OUT ALL THE STEPS IN
        THE CREATION OF OUR PRODUCTS.</p>
      <p class="trunnion-header-scroll-text"
        style="font-weight: 900;  letter-spacing: 0.20em ;margin-top: 20px; font-size: 60px; color: #3F3F3F; font-family: Raleway; ">
        TRUNNION BALL VALVES</p>
      <img src="./assets/images/arrow.webp" class="header-arrow flotation-container"
        style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
      <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>
<div class="trunnion-content">
  <img class="trunnion-bg-right trunnion-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="trunnion-bg-right trunnion-middle-bg" />
  <img src="./assets/images/bg-products.webp" class="trunnion-bg-right trunnion-third-bg" />
  <div class="trunnion-container">
    <div class="trunnion-content-column trunnion-first-column">
      <div class="trunnion-content-wrapper">
        <div class="trunnion-section">
          <h1 class="trunnion-section-title" style="font-size: 80px;">TRUNNION BALL<strong style="color: #00A39F;">
              VALVE</strong> </h1>
          <p style="color:#959595; font-size:24px; font-family:Raleway">Designed And Manufactured Under
            International Standards</p>
        </div>
        <ul class="trunnion-testing-list">
          <li>Steel valves <strong>API 600 / 6D </strong></li>
          <li>Face to face <strong>ASME B16.10</strong></li>
          <li>Flanges <strong>ASME B16.5 / ASME B16.47 </br>Serie A y B </strong></li>
          <li>Butt weld ends <strong>ASME B16.25</strong></li>
          <li>Inspection and Testing Standard <strong>API 598</strong></li>
          <li>Quality standard of cast surface <strong></br>MSS- SP 112 / 55</strong></li>
          <li>Marking Standard <strong>MSS-SP 25</strong></li>
        </ul>
        <div class="trunnion-section">
          <h3 class="trunnion-section-title">OUR WIDE <strong style="color: #00A39F;"> RANGE </strong> OF
            DIAMETER</h3>
          <p style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be produced
            from <strong>2″</strong> up to <strong> 24″ </strong></br>depending on class selection. </p>
        </div>
        </br>
        <div class="trunnion-section">
          <h3 class="trunnion-section-title">CONNECTION <strong style="color: #00A39F;">FLANGES</strong>
          </h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">As should be, you can choose from:
          </H5>
          <div class="trunnion-testing-list" style="font-size: 18px">
            <p class="trunnion-testing-list" style="margin-top: 15px;">RF / FF / RJ / BW </p>

          </div>
        </div>
      </div>
    </div>
    <div class="trunnion-image-column">
      <!--
      <img src="./assets/images/trunnion1.webp" alt="Product image" class="trunnion-product-image-first" />
      -->
      <img src="./assets/scroll-animations/trunnion-valves/output_frame_0001.webp" id="parallax-trunnion-valve" alt="Product image" class="trunnion-product-image-first" />
    </div>
  </div>
  </br>

  <div class="valves-container second-container container-trunnion">
    <div class="valves-image-column">
      <img src="./assets/images/trunnion2.webp" alt="Product image" class="valves-product-image second-trunnion-img" />
    </div>
    <div class="valves-content-column trunnion-second-column">
      <div class="valves-content-wrapper valves-right">
        <div class="valves-section">
          <h3 class="valves-section-title" style="white-space: nowrap; text-overflow: ellipsis;">HOW MUCH
            <strong style="color: #00A39F;">PRESSURE </strong></br>DO YOU WANT?
          </h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">As should be, you can choose from:
          </h5>
          <div class="trunnion-testing-list trunning-second-content" style="margin-top: 5px;">
            <p class="item">ANSI 150</p>
            <p class="item">ANSI 300</p>
            <p class="item">ANSI 600</p>
            <p class="item">ANSI 900</p>
            <p class="item">ANSI 1500</p>
            <p class="item">ANSI 2500</p>
          </div>
        </div>
        <div class="valves-section">
          <h3 class="valves-section-title">A WORLD OF POSSIBILITIES</h3>
          <p class="valves-testing-list" style="font-size: 18px">Developing our moulds in advance, we can <br> cast
            our valves in <br>
            virtually any <strong> ASTM code.</strong>
            <br><br>
            From <strong>Carbon Steel</strong> to <strong> Stainless Steel </strong>and <br>all in between.
          </p>
        </div>
      </div>
    </div>
  </div>
  </br>

  <div class="trunnion-container trunnion-third-container">
    <div class="trunnion-content-column  trunnion-third-column">
      <div class="trunnion-content-wrapper" style="gap: 40px;">
        <div class="trunnion-section">
          <h3 class="trunnion-section-title">LOOKING <strong style="color: #00A39F;">INSIDE </strong></h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">We’ve got you covered</h5>
          <p class="trunnion-testing-list">All interns available in the latest <br><strong> API
            </strong>specifications.
            <br><br>
            From our standard <strong>AISI 316</strong> ball and <br>
            steam with Teflon Seats.
          </p>
        </div>
        <div class="trunnion-section">
          <div class="trunnion-section-title">THINGS THAT <strong style="color: #00A39F;"> FIT </strong> YOUR
            NEEDS</div>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be delivered with:
          </h5>
          <ul class="trunnion-testing-list">
            <li>Handwheel operated</li>
            <li>Electric actuator operated</li>
            <li>Pneumatic actuator operated</li>

          </ul>
        </div>
        <a id="downloadLink" href="https://dervosamerica.com/DervosValvesCatalog.pdf"
          target="_blank" class="trunnion-contact-button"
          style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
          DOWNLOAD TECHNICAL FILE
        </a>
      </div>
    </div>
    <div class="trunnion-image-column">
      <img src="./assets/images/trunnion3.webp" alt="Product image" class="trunnion-product-image" />
    </div>
  </div>

</div>
<section class="about-about-section">
  <div class="about-about-container">
    <div class="about-about-content">
      <div class="about-about-title">
        <div class="about-about-title-wrapper">
          <h2 class="about-about-title">
            <span class="about-white-text">TECH<span class="nical-text">NICAL</span></span>
          </h2>
          <p class="about-about-subtitle">
            A DEEP LOOK AT THE
            <strong class="about-white-text">TECHNICAL</strong>
            SHEET
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="trunnion-content trunnion-content-fourth">
  <div class="trunnion-container trunnion-second-container" style="text-align: left;">
    <div class="trunnion-image-column">
      <img src="./assets/images/Trunnion_Valve_-_Dervos_America_upscaled.jpg" alt="Product image" class="trunnion-product-image" />
    </div>
    <div class="trunnion-content-column">
      <div class="trunnion-content-wrapper trunnion-right">
        <div class="trunnion-section">
        </div>
        <div class="trunnion-section">
         <div class="trunnion-section-title">TRUNNION <strong style="color:#00A39F;"> VALVE</strong></div>
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: bold;">STANDARD COMPLIANCE</h4>
          <ul class="trunnion-testing-list">
            <li> <strong> AP16D, ASME B16.34</strong></li>
            <li>Inspection and test to<strong>API 598</strong></li>
            <li> Flang to <strong>ASME B16.5
                , DIN2543-2550, JB/T79.4</strong></li>
            <li> Material to <strong>NACE MRO175</strong>
            </li>
            <li> Fire safe as per <strong>API 607, API 6FA</strong></li>
          </ul>
        </div>

          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: bold;">End Flange dimensions:</h4>
          <ul class="trunnion-testing-list second-list-trunnion">
            <li>NPS 2-24<strong> ANSI B16.5</strong></li>
            <li>NPS 26 <strong>ANSI B16.47 or MSS SP-44</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
 
  
</div>
<div class="centered-title-trunnion">STANDARD MATERIALS<strong style="color:#00A39F;">  SPECIFICATIONS</strong></div>
<div class="justify-img-content-trunnion">
  <img src="./assets/images/Tabla_Trunnion_Valve 1 (1).webp" alt="img-pdf" class="img-pdf-section-trunnion-last">
</div>
<div class="centered-title-trunnion-second">DIMENSIONS AND <strong style="color:#00A39F;"> WEIGHT</strong></div>
<div class="justify-img-content-trunnion">
  <img src="./assets/images/Trunnion_2 1.webp" alt="img-pdf" class="img-pdf-section-trunnion-last">
<img src="./assets/images/Trunnion_! 1.webp" alt="img-pdf" class="img-pdf-section-trunnion-last">
<img src="./assets/images/Trunnion_3 1.webp" alt="img-pdf" class="img-pdf-section-trunnion-last">
<img src="./assets/images/Trunnion_4 1.webp" alt="img-pdf" class="img-pdf-section-trunnion-last">
</div>
<div class="download-section">
  <h4 class="check-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <!-- Enlace para abrir en nueva pestaña y descargar el archivo si el usuario decide hacerlo -->
  <a href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank" class="download-link">
    DOWNLOAD TECHNICAL FILE
  </a>
  <div class="background-image"></div>
</div>

`;b();const Fe=`
<main class="header-container container-parallax-gate-floating">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />-->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves">GATE VALVES</a>
        <a href="/check-valves">CHECK VALVES</a>
        <a href="/globe-valves">GLOBE VALVES</a>
        <a href="/trunnion-valves">TRUNNION VALVES</a>
        <a href="/floating-valves">FLOATING VALVES</a>
        <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
        <div class="dropdown">
          <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
          <ul class="dropdown-content">
            <li><a href="/">HOME</a></li>
            <li><a href="/steps">STEPS</a></li>
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/certifications">CERTIFICATIONS</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="header-main-content">
      <p class="valves-testing-list" style="margin-top: 10%; margin-bottom:1%;">WE DESIGN AND CARRY OUT ALL THE STEPS IN
        THE CREATION OF OUR PRODUCTS.</p>
      <p class="header-scroll-text"
        style="font-weight: 900;  letter-spacing: 0.20em ;margin-top: 20px; font-size: 60px; color: #3F3F3F; font-family: Raleway; ">
        FLOATING BALL VALVES</p>
      <img src="./assets/images/arrow.webp" class="header-arrow flotation-container"
        style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
      <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>


<div class="trunnion-content floating-content">
  <img class="trunnion-bg-right trunnion-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="trunnion-bg-right trunnion-middle-bg" />
  <img src="./assets/images/bg-products.webp" class="trunnion-bg-right trunnion-third-bg" />
  <div class="trunnion-container">
    <div class="trunnion-content-column trunnion-first-column">
      <div class="trunnion-content-wrapper">
        <div class="trunnion-section">
          <h1 class="trunnion-section-title" style="font-size: 80px;">FLOATING BALL<strong style="color: #00A39F;"> VALVE</strong> </h1>
          <p style="color:#959595; font-size:24px; font-family:Raleway">Designed And Manufactured Under
            International Standards</p>
        </div>
        <ul class="trunnion-testing-list">
          <li>Steel valves <strong>API 600 / 6D </strong></li>
          <li>Face to face <strong>ASME B16.10</strong></li>
          <li>Flanges <strong>ASME B16.5 / ASME B16.47 </br>Serie A y B </strong></li>
          <li>Butt weld ends <strong>ASME B16.25</strong></li>
          <li>Inspection and Testing Standard <strong>API 598</strong></li>
          <li>Quality standard of cast surface <strong></br>MSS- SP 112 / 55</strong></li>
          <li>Marking Standard <strong>MSS-SP 25</strong></li>
        </ul>
        <div class="trunnion-section">
          <h3 class="trunnion-section-title">OUR WIDE <strong style="color: #00A39F;"> RANGE </strong> OF
            DIAMETER</h3>
          <p style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be produced
            from <strong>2″</strong> up to <strong> 24″ </strong></br>depending on class selection. </p>
        </div>
        </br>
        <div class="trunnion-section">
          <h3 class="trunnion-section-title">CONNECTION <strong style="color: #00A39F;">FLANGES</strong>
          </h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">As should be, you can choose from:
          </H5>
          <div class="trunnion-testing-list" style="font-size: 18px">
            <p class="trunnion-testing-list" style="margin-top: 15px;">RF / FF / RJ / BW </p>

          </div>
        </div>
      </div>
    </div>
    <div class="trunnion-image-column" style="z-index:0">
      <!-- <img src="./assets/images/floating_valve011.webp" alt="Product image" class="floating-product-image-first floating-valv" /> -->
      <img src="./assets/scroll-animations/floating-valves/output_frame_0001.webp" alt="Product image" id="parallax-floating-valve" class="floating-product-image-first floating-valv" />
      <div id="visibility-trigger" style="top: 0; left: 0; z-index: -1;"></div>
    </div>
  </div>
  </br>
 
  <div class="valves-container second-container container-floating">
    <div class="floating-image-column">
        <img src="./assets/images/floating_valve022.webp" alt="Product image" class="valves-product-image second-floating-img" />
    </div>
    <div class="valves-content-column trunnion-second-column">
        <div class="valves-content-wrapper valves-right">
            <div class="valves-section">
                <h3 class="valves-section-title" style="white-space: nowrap; text-overflow: ellipsis;">HOW MUCH  
                    <strong style="color: #00A39F;">PRESSURE </strong></br>DO YOU WANT?</h3>
                <h5 style="color:#959595; font-size:18px; font-family:Raleway">As should be, you can choose from:
                </h5>
                <div class="trunnion-testing-list trunning-second-content" style="margin-top: 5px;">
                  <p class="item">ANSI 150</p>
                  <p class="item">ANSI 300</p>
                  <p class="item">ANSI 600</p>
                  <p class="item">ANSI 900</p>
                  <p class="item">ANSI 1500</p>
                  <p class="item">ANSI 2500</p>
                </div>                               
            </div>
            <div class="valves-section">
                <h3 class="valves-section-title">A WORLD OF POSSIBILITIES</h3>
                <p class="valves-testing-list" style="font-size: 18px">Developing our moulds in advance, we can <br> cast
                    our valves in <br>
                    virtually any <strong> ASTM code.</strong>
                    <br><br>
                    From <strong>Carbon Steel</strong> to <strong> Stainless Steel </strong>and <br>all in between.
                </p>
            </div>
        </div>
    </div>
</div>

  </br>

  
  <div class="valves-container valves-third-container">
  <div class="valves-content-column  valves-third-column">
      <div class="valves-content-wrapper" style="gap: 40px;">
          <div class="valves-section">
              <h3 class="valves-section-title">LOOKING <strong style="color: #00A39F;">INSIDE </strong></h3>
              <h5 style="color:#959595; font-size:18px; font-family:Raleway">We’ve got you covered</h5>
              <p class="valves-testing-list">All trims available in the latest <strong> API
                  </strong>specifications.
                  <br>
                  From our standard <strong>TRIM 8</strong> up to <strong> TRIM 24.</strong>
              </p>
          </div>
          <div class="valves-section">
              <div class="valves-section-title">THINGS THAT <strong style="color: #00A39F;"> FIT </strong> YOUR
                  NEEDS</div>
              <h5 style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be delivered with:
              </h5>
              <ul class="valves-testing-list">
                  <li>Handwheel operated</li>
                  <li>Electric actuator operated</li>
                  <li>Pneumatic actuator operated</li>

              </ul>
          </div>
          <a id="downloadLink" href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank" class="valves-contact-button" style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
               DOWNLOAD TECHNICAL FILE
          </a>
      </div>
  </div>
  <div class="valves-image-column">
      <img src="./assets/images/floating_valve0333 1.webp" alt="Product image" class="valves-product-image" style="margin-top: 125px"/>
  </div>
</div>
  
</div>


<section class="about-about-section">
  <div class="about-about-container">
    <div class="about-about-content">
      <div class="about-about-title">
        <div class="about-about-title-wrapper">
          <h2 class="about-about-title">
            <span class="about-white-text">TECH<span class="nical-text">NICAL</span></span>
          </h2>
          <p class="about-about-subtitle">
            A DEEP LOOK AT THE
            <strong class="about-white-text">TECHNICAL</strong>
            SHEET
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="floating-content floating-content-fourth">
  <div class="floating-container floating-second-container" style="text-align: left;">
    <div class="floating-image-column">
      <img src="./assets/images/ball_valve_resume.jpeg" alt="Product image" class="floating-product-image" />
    </div>
    <div class="floating-content-column">
      <div class="floating-content-wrapper floating-right">
        <div class="floating-section">
          <div class="floating-section-title">BALL <strong style="color:#00A39F;"> VALVE</strong></div>
        </div>
        <div class="floating-section">
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: bold;">STANDARDS</h4>
          <ul class="floating-testing-list">
            <li>Design and manufacture: API6D AP1608 or BS 5351</li>
            <li>Face to Face Dimensions: ANSI B16.10</li>
            <li>End Flange Dimensions: ANSI B16.5</li>
            <li>Test: API 6D or API 598</li>
          </ul>
        </div>

        <div class="floating-section">
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: bold;">TYPE OF CONNECTION</h4>
          <ul class="floating-testing-list">
            <li>RF and RTJ Flange Ends to ANSI B16.5 standard.</li>
            <li>BW Flange Ends to ANSI B16.25 standard.</li>
          </ul>
        </div>

        <div class="floating-section">
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: bold;">TYPE OF OPERATION</h4>
          <ul class="floating-testing-list">
            <li>Lever</li>
            <li>Connection dimensions of Worm Gear actuator, Electric actuator,</li>
            <li>Pneumatic actuator to ISO 5211 standard.</li>
            <li>Anti-static electricity constructions "AS" and Fire-safe</li>
            <li>constructions "FD</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="centered-title">STANDARD MATERIALS <strong style="color:#00A39F;"> SPECIFICATIONS</strong></div>
  <img src="./assets/images/floating_valve_standar_specification.jpeg" alt="img-pdf" class="img-pdf-section-floating">
  <div class="centered-title">DIMENSIONS AND <strong style="color: #00A39F;">WEIGHT</strong></div>
  <img src="./assets/images/floating_valve001.jpeg" alt="img-pdf" class="img-pdf-section-floating-second">
  <img src="./assets/images/floating_valve002.jpeg" alt="img-pdf" class="img-pdf-section-floating-second">
  <img src="./assets/images/floating_valve003.jpeg" alt="img-pdf" class="img-pdf-section-floating-second">
</div>

<div class="download-section">
  <h4 class="check-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <!-- Enlace para abrir en nueva pestaña y descargar el archivo si el usuario decide hacerlo -->
  <a href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank" class="download-link">
    DOWNLOAD TECHNICAL FILE
  </a>
  <div class="background-image"></div>
</div>
`;b();const Pe=`

<main class="header-container container-parallax-globe-valves">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />  -->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves" class="link">GATE VALVES</a>
        <a href="/check-valves" class="link">CHECK VALVES</a>
        <a href="/globe-valves" class="link">GLOBE VALVES</a>
        <a href="/trunnion-valves" class="link">TRUNNION VALVES</a>
        <a href="/floating-valves" class="link">FLOATING VALVES</a>
        <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
        <div class="dropdown">
          <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
          <ul class="dropdown-content">
            <li><a href="/">HOME</a></li>
            <li><a href="/steps">STEPS</a></li>
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/certifications">CERTIFICATIONS</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="header-main-content">
      <p class="valves-testing-list" style="margin-top: 10%; margin-bottom:1%;">WE DESIGN AND CARRY OUT ALL THE STEPS IN
        THE CREATION OF OUR PRODUCTS.</p>
      <p class="header-scroll-text"
        style="font-weight: 900;  letter-spacing: 0.20em ;margin-top: 20px; font-size: 60px; color: #3F3F3F; font-family: Raleway; ">
        BUTTERFLY
        VALVES</p>
      <img src="./assets/images/arrow.webp" class="header-arrow flotation-container"
        style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
      <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>
<div class="butterflys-valves-content">
  <img class="butterflys-valves-bg-right valves-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="butterflys-valves-bg-right butterflys-valves-middle-bg" />
  <img src="./assets/images/bg-products.webp" class="butterflys-valves-bg-right butterflys-valves-third-bg" />
  <div class="butterflys-valves-container">
    <div class="butterflys-valves-content-column butterflys-valves-first-column">
      <div class="butterflys-valves-content-wrapper">
        <div class="butterflys-valves-section">
          <h1 class="butterflys-valves-section-title" style="font-size: 80px">BUTTERFLY<strong style="color: #00A39F;">
              VALVE</strong> </h1>
          <p style="color:#959595; font-size:24px; font-family:Raleway">Designed And Manufactured Under
            International Standards</p>
        </div>
        <ul class="butterflys-valves-testing-list">
          <li>Standards for Flange Butterfly Valves:<strong>MSS SP-67</strong></li>
          <li>Standards for Wafer Butterfly Valves:<strong> MSS SP-68 or API 609</strong></li>
          <li>Face to Face Dimensions:<strong>ANSI B16.10, MSS SP-67, MSS SP-68, or API 609</strong></li>
          <li>Testing Standard: <strong>API 598 </strong></li>
        </ul>
        </br>
        <div class="butterflys-valves-section">
          <h3 class="butterflys-valves-section-title">END <strong style="color: #00A39F;">FLANGE </strong>DIMENSIONS
          </h3>
          <ul class="butterflys-valves-testing-list">
            <li>NPS 1 1/2 - 24:<strong>ANSI B16.5</strong></li>
            <li>NPS 30 - 72:<strong>MSS SP-44 or ANSI B16.47</strong></li>
          </ul>
        </div>
        </br>
        <div class="butterflys-valves-section">
          <h3 class="butterflys-valves-section-title">TYPE OF <strong style="color: #00A39F;">CONSTRUCTION </strong>
          </h3>
          <ul class="butterflys-valves-testing-list">
            <li>Flange Butterfly Valves:<strong>Available in hard face and soft face options</strong></li>
            <li>Wafer Butterfly Valves:<strong> Available in hard face and soft face options</strong></li>
          </ul>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="butterflys-valves-section">
          <h3 class="butterflys-valves-section-title">CONNECTION<strong style="color: #00A39F;"> OPTIONS </strong>AND
            OPERATION</h3>
          <div class="butterflys-valves-testing-list" style="font-size: 18px">
          </div>
        </div>
      </div>
    </div>
    <div class="butterflys-valves-image-column ">
    <!--
      <img src="./assets/images/Dervos_Butterfly_Valve_Parts.webp" alt="Product image"
        class="butterflys-valves-product-image" />
    -->
    <img src="./assets/scroll-animations/butterfly-valves/output_frame_0001.webp" id="parallax-butterfly-valve" alt="Product image"
        class="butterflys-valves-product-image" />
    </div>
  </div>
  </br>
  <div class="butterflys-valves-container second-container">
    <div class="butterflys-valves-image-column">
      <img src="./assets/images/Dervos_Butterfly_Valve.webp" alt="Product image"
        class="butterflys-valves-product-image-second" />
    </div>
    <div class="butterflys-valves-content-column butterflys-valves-second-column">
      <div class="butterflys-valves-content-wrapper butterflys-valves-right">
        <div class="butterflys-valves-section">
          <h3 class="butterflys-valves-section-title" style="white-space: nowrap; text-overflow: ellipsis;">TYPE OF
            <strong style="color: #00A39F;">CONNECTION</strong>
          </h3>
          <ul class="butterflys-valves-testing-list" style="margin-top: 15px;">
            <li><strong>RF and RTJ flange ends to</strong>ANSI B16.5, API 605, and MSS SP-44 standards</li>
            <li><strong>Type of Operation:</strong> Lever, Worm Gear actuator, Electric actuator, Pneumatic actuator
            </li>
            <li><strong> Actuator Dimensions:</strong> To ISO 5211 standard</li>
          </ul>
        </div>
        <div class="butterflys-valves-section">
          <h3 class="butterflys-valves-section-title">A WORLD OF POSSIBILITIES</h3>
          <p class="butterflys-valves-testing-list" style="font-size: 18px">With our advanced construction and wide
            range of
            connection options, we can meet diverse requirements, ensuring compatibility and performance across various
            applications.
            <br>
            From <strong>Carbon Steel</strong> to <strong> Stainless Steel </strong>and all in between.
          </p>
        </div>
      </div>
    </div>
  </div>
  </br>

  <div class="butterflys-valves-container butterflys-valves-third-container">
    <div class="butterflys-valves-content-column  butterflys-valves-third-column">
      <div class="butterflys-valves-content-wrapper" style="gap: 40px;">
        <div class="butterflys-valves-section">
          <h3 class="butterflys-valves-section-title">LOOKING <strong style="color: #00A39F;">INSIDE </strong></h3>
          <p class="butterflys-valves-testing-list"><strong>We offer all trims available in the latest API
              specifications,
            </strong>>ensuring
            optimal performance for every application. <strong>Our valves can be customized with:</strong>
            <br><br>
          <ul class="butterflys-valves-testing-list">
            <li> <strong>Actuation Options:</strong> Handwheel operated, Electric actuator operated, Pneumatic actuator
              operated</li>
          </ul>
          </p>
        </div>
        <div class="butterflys-valves-section">
          <div class="butterflys-valves-section-title">THINGS THAT <strong style="color: #00A39F;"> FIT </strong> YOUR
            NEEDS</div>
          </h5>
          <p class="butterflys-valves-testing-list">Our Butterfly Valves are designed to suit your specific needs,
            offering
            flexibility in operation and
            construction to match your operational requirements.</p>
        </div>
        <a id="downloadLink" href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank"
          class="butterflys-valves-contact-button"
          style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
          DOWNLOAD TECHNICAL FILE
        </a>

      </div>
    </div>
    <div class="butterflys-valves-image-column third-img-butterflys">
      <img src="./assets/images/Dervos_Butterfly_Valve_Inside.webp" alt="Product image"
        class="butterflys-valves-product-image img-butterflys-second" />
    </div>
  </div>
</div>
<section class="about-about-section">
  <div class="about-about-container">
    <div class="about-about-content">
      <div class="about-about-title">
        <div class="about-about-title-wrapper">
          <h2 class="about-about-title">
            <span class="about-white-text">TECH<span class="nical-text">NICAL</span></span>
          </h2>
          <p class="about-about-subtitle">
            A DEEP LOOK AT THE
            <strong class="about-white-text">TECHNICAL</strong>
            SHEET
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="butterfly-content butterfly-fourth">
  <div class="butterfly-container butterfly-second-container" style="text-align: left;">
    <div class="butterfly-image-column">
      <img src="./assets/images/Dervos_Butterfly_Valve_Technical_Parts.jpg" alt="Product image"
        class="butterfly-product-image" />
    </div>
    <div class="butterfly-content-column">
      <div class="butterfly-content-wrapper butterfly-right">
        <div class="butterfly-section">
          <div class="butterfly-section-title">BUTTERFLY <strong style="color:#00A39F;"> VALVE</strong></div>
          <!--<h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: 800;">STANDARDS
            COMPLIANCE:</h4>-->
          <ul class="butterfly-testing-list">
            <li>Flange Butterfly Valves: <strong>MSS SP-67</strong></li>
            <li>Wafer Butterfly Valves: <strong> MSS SP-68 OR API 609 </strong></li>
            <li>Face to face dimensions: <strong> ANSI B16.10 MSS SP-67 and MSS SP-68 or 609</strong></li>
            <li>Test: <strong>AP1598 </strong></li>
          </ul>
        </div>
        <div class="butterfly-section"  style="line-height:0;">
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: 800; margin-bottom: 15px;">End Flange Dimensions</h4>
          <ul class="butterfly-testing-list">
            <li >NPS 1 1/2-24: <strong>ANSI B16.5</strong></li>
            <li>NPS 30-72: <strong>MSS SP-44 or ANSI
                B16.47</strong></li>
          </ul>
        </div>
        <div class="butterfly-section"  style="line-height:0;">
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: 800; margin-bottom: 15px;">Type of construction</h4>
          <ul class="butterfly-testing-list" >
            <li>Flange Butterfly Valves (Hard face and soft
              face)</li>
            <li >Wafer Butterfly Valves (Hard face and soft face)
            </li>
          </ul>
        </div>
        <div class="butterfly-section" style="line-height: 0;">
          <h4 style="font-size: 24px; color: black; font-family: Raleway; font-weight: 800; margin-bottom: 15px;">Type of connection</h4>
          <ul class="butterfly-testing-list" style="list-style-type: none; padding-left: 0; margin-top: 0;">
            <li>RF and RTJ flange ends to ANSI B16.5 or API 605 and MSS SP-44 standard.</li>
          </ul>
        </div>
        
        <div class="butterfly-section " style="line-height: 0;">
          <h4 style="font-size: 24px; color: black; font-family: Raleway; font-weight: 800; margin-bottom: 15px;">Type of operation</h4>
          <ul class="butterfly-testing-list" style="list-style-type: none; padding-left: 0; margin-top: 0;">
            <li>Worm Gear actuator, Electric actuator, Pneumatic actuator. <br>Actuator dimensions to ISO 5211 standard.</li>
          </ul>
        </div>
        
        
      </div>
    </div>
  </div>
</div>


<div class="just-image-container butterfly-img">
</div>
<div class="butterflys-valves-centered-title">DIMENSIONS AND <strong style="color: #00A39F;">WEIGHTS</strong></div>
<div class="just-image-container butterfly-img">
  <img src="./assets/images/Dervos_Butterfly_Valve_Technical_1.jpg" alt="img-pdf" class="img-pdf-section-butterflys">
</div>
</div>
<div class="just-image-container butterfly-img">
  <img src="./assets/images/Dervos_Butterfly_Valve_Technical_2.jpg" alt="img-pdf" class="img-pdf-section-butterflys">
</div>
<div class="just-image-container butterfly-img">
  <img src="./assets/images/Dervos_Butterfly_Valve_Technical_3.jpg" alt="img-pdf" class="img-pdf-section-butterflys">
</div>
</div>
<div class="just-image-container butterfly-img">
  <img src="./assets/images/Dervos_Butterfly_Valve_Technical_4.jpg" alt="img-pdf" class="img-pdf-section-butterflys">
</div>
</div>
<br><br>


<!-- <img src="./assets/images/Globe3_ 1.webp" alt="img-pdf" class="butterflys-second-img">-->

<div class="download-section">
  <h4 class="check-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <!-- Enlace para abrir en nueva pestaña y descargar el archivo si el usuario decide hacerlo -->
  <a href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank" class="download-link">
    DOWNLOAD TECHNICAL FILE
  </a>
  <div class="background-image"></div>
</div>

`;b();const Ve=`

<main class="header-container container-parallax-globe-valves">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />  -->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.webp" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves" class="link">GATE VALVES</a>
        <a href="/check-valves" class="link">CHECK VALVES</a>
        <a href="/globe-valves" class="link">GLOBE VALVES</a>
        <a href="/trunnion-valves" class="link">TRUNNION VALVES</a>
        <a href="/floating-valves" class="link">FLOATING VALVES</a>
        <a href="/butterfly-valves" class="link">BUTTERFLY VALVES</a>
        <div class="dropdown">
          <a href="#">VISIT<span class="dropdown-icon">▼</span></a>
          <ul class="dropdown-content">
            <li><a href="/">HOME</a></li>
            <li><a href="/steps">STEPS</a></li>
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/certifications">CERTIFICATIONS</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="header-main-content">
      <p class="valves-testing-list" style="margin-top: 10%; margin-bottom:1%;">WE DESIGN AND CARRY OUT ALL THE STEPS IN
        THE CREATION OF OUR PRODUCTS.</p>
      <p class="header-scroll-text"
        style="font-weight: 900;  letter-spacing: 0.20em ;margin-top: 20px; font-size: 60px; color: #3F3F3F; font-family: Raleway; ">
        GLOBE
        VALVES</p>
      <img src="./assets/images/arrow.webp" class="header-arrow flotation-container"
        style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
      <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>
<div class="gloves-valves-content">
  <img class="gloves-valves-bg-right valves-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="gloves-valves-bg-right gloves-valves-middle-bg" />
  <img src="./assets/images/bg-products.webp" class="gloves-valves-bg-right gloves-valves-third-bg" />
  <div class="gloves-valves-container">
    <div class="gloves-valves-content-column gloves-valves-first-column">
      <div class="gloves-valves-content-wrapper">
        <div class="gloves-valves-section">
          <h1 class="gloves-valves-section-title" style="font-size: 80px">GLOBE<strong style="color: #00A39F;">
              VALVE</strong> </h1>
          <p style="color:#959595; font-size:24px; font-family:Raleway">Designed And Manufactured Under
            International Standards</p>
        </div>
        <ul class="gloves-valves-testing-list">
          <li>Steel valves <strong>API 623</strong></li>
          <li>Face to face <strong>ASME B16.10</strong></li>
          <li>Flanges <strong>ASME B16.5 / ASME B16.47 </br>/ Serie A y B</strong></li>
          <li>Butt weld ends <strong>ASME B16.25</strong></li>
          <li>Inspection and Testing Standard <strong> API 598</strong></li>
          <li>Quality standard of cast surface <strong></br>MSS- SP 112 / 55</strong></li>
          <li>Marking Standard <strong>MSS-SP 25</strong></li>
        </ul>
        <div class="gloves-valves-section">
          <h3 class="gloves-valves-section-title">OUR WIDE <strong style="color: #00A39F;"> RANGE </strong> OF
            DIAMETER</h3>
          <p style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be produced
            from <strong>2″</strong> up tost <strong> 60″.</strong> </p>
        </div>
        </br>
        <div class="gloves-valves-section">
          <h3 class="gloves-valves-section-title">HOW MUCH <strong style="color: #00A39F;"> PRESSURE </strong> DO YOU
            WANT?</h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">We can elaborate our product from:
          </H5>
          <div class="gloves-valves-testing-list" style="font-size: 18px">
            <ul style="font-size: 24px;">
              <li>ANSI 150</li>
              <li>ANSI 300</li>
              <li>ANSI 600</li>
              <li>ANSI 900</li>
              <li>ANSI 1500</li>
              <li>ANSI 2500</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="gloves-valves-image-column ">
      <!--
      <img src="./assets/images/Globe-6.webp" alt="Product image" class="gloves-valves-product-image" />
      -->
      <img src="./assets/scroll-animations/globe-valves/output_frame_0001.webp" id="parallax-globe-valve" alt="Product image" class="gloves-valves-product-image" />
    </div>
  </div>
  </br>
  <div class="gloves-valves-container second-container">
    <div class="gloves-valves-image-column second">
      <img src="./assets/images/globe_valves.webp" alt="Product image" class="gloves-valves-product-image" />
    </div>
    <div class="gloves-valves-content-column gloves-valves-second-column">
      <div class="gloves-valves-content-wrapper gloves-valves-right">
        <div class="gloves-valves-section">
          <h3 class="gloves-valves-section-title" style="white-space: nowrap; text-overflow: ellipsis;">CONNECTION
            <strong style="color: #00A39F;">FLANGES</strong>
          </h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">As should be, you can choose from:
          </h5>
          <p class="gloves-valves-testing-list" style="margin-top: 15px;">RF / FF / RJ / BW </p>
        </div>
        <div class="gloves-valves-section">
          <h3 class="gloves-valves-section-title">A WORLD OF POSSIBILITIES</h3>
          <p class="gloves-valves-testing-list" style="font-size: 18px">Developing our moulds in advance, we can cast
            our valves in
            virtually any <strong> ASTM code.</strong>
            <br>
            From <strong>Carbon Steel</strong> to <strong> Stainless Steel </strong>and all in between.
          </p>
        </div>
      </div>
    </div>
  </div>
  </br>

  <div class="gloves-valves-container gloves-valves-third-container">
    <div class="gloves-valves-content-column  gloves-valves-third-column">
      <div class="gloves-valves-content-wrapper" style="gap: 40px;">
        <div class="gloves-valves-section">
          <h3 class="gloves-valves-section-title">LOOKING <strong style="color: #00A39F;">INSIDE </strong></h3>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">We’ve got you covered</h5>
          <p class="gloves-valves-testing-list">All trims available in the latest <strong> API
            </strong>specifications.
            <br><br>
            From our standard <strong>TRIM 8</strong> up to <strong> TRIM 24.</strong>
          </p>
        </div>
        <div class="gloves-valves-section">
          <div class="gloves-valves-section-title">THINGS THAT <strong style="color: #00A39F;"> FIT </strong> YOUR
            NEEDS</div>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">Our valves can be delivered with:
          </h5>
          <ul class="gloves-valves-testing-list">
            <li>Handwheel operated</li>
            <li>Electric actuator operated</li>
            <li>Pneumatic actuator operated</li>

          </ul>
        </div>
        <a id="downloadLink" href="https://dervosamerica.com/DervosValvesCatalog.pdf"
          target="_blank" class="gloves-valves-contact-button"
          style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
          DOWNLOAD TECHNICAL FILE
        </a>

      </div>
    </div>
    <div class="gloves-valves-image-column third-img-gloves">
      <img src="./assets/images/valge-gloves-2.webp" alt="Product image"
        class="gloves-valves-product-image img-gloves-second" />
    </div>
  </div>
</div>
<section class="about-about-section">
  <div class="about-about-container">
    <div class="about-about-content">
      <div class="about-about-title">
        <div class="about-about-title-wrapper">
          <h2 class="about-about-title">
            <span class="about-white-text">TECH<span class="nical-text">NICAL</span></span>
          </h2>
          <p class="about-about-subtitle">
            A DEEP LOOK AT THE
            <strong class="about-white-text">TECHNICAL</strong>
            SHEET
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="glove-content glove-fourth">
  <div class="glove-container glove-second-container" style="text-align: left;">
    <div class="glove-image-column">
      <img src="./assets/images/Globe Valve - Dervos America.jpg" alt="Product image" class="glove-product-image" />
    </div>
    <div class="glove-content-column">
      <div class="glove-content-wrapper glove-right">
        <div class="glove-section">
          <div class="glove-section-title">GLOVE <strong style="color:#00A39F;"> VALVE</strong></div>
          <h5 style="color:#959595; font-size:24px;  font-family:raleway">OS & Y, Rising Ste, Plug Type Disc Bolted Bonnet
          <br/><br/> Threaded Seat Ring.</h5>
        </div>
        <div class="glove-section">
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: 800;">STANDARDS
            COMPLIANCE:</h4>
          <ul class="glove-testing-list">
            <li>Basic Design: <strong> BS1873</strong></li>
            <li> Face to Face Dimension: <strong>ANSI B16.10 </strong></li>
            <li> End to End Dimension: <strong>ANSI B16.10 </strong></li>
            <li> Flanged Ends to: <strong>ANSI B16.25</strong></li>
            <li> B. W. Ends to <strong>ANSI B16.25</strong></li>
            <li> Manufacturing to <strong> NACE MR-01-75 on request </strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="just-image-container">
  <img src="./assets/images/Globe-Valves-Parts.jpg" alt="img-pdf" class="img-pdf-section-gloves">
</div>
<div class="centered-title">TEST PRESSURE TO <strong style="color: #00A39F;">API598</strong></div>
<div class="just-image-container">
  <img src="./assets/images/pdf-3.jpeg" alt="img-pdf" class="img-pdf-section-gloves">
</div>
</div>
<div class="gloves-valves-container gloves-valves-third-container">
  <div class="gloves-valves-content-column  gloves-valves-third-column">
    <div class="gloves-valves-content-wrapper" style="gap: 40px;">
      <div class="gloves-valves-section">
        <div class="gloves-valves-section-title">MAIN EXTERNAL CONNECTING <strong style="color: #00A39F;"> DIMENSIONS
          </strong> </div>
        </h5>
        <ul class="gloves-valves-testing-list">
          <li>From 2′ up to 60′</li>
          <li>Up to class 2500</li>
          <li>All Trims available</li>
          <li>High quality standart and materials</li>
          <li> Available in any carbon, stainless or alloys steel (ASTM series) API 623</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="gloves-valves-image-column third-img-gloves">
    <img src="./assets/images/Globe5_ 1.webp" alt="Product image"
      class="gloves-valves-product-image img-gloves-fourth" />
  </div>
</div>

<div class="just-image-container">
  <img src="./assets/images/Globe3_ 1.webp" alt="img-pdf" class="img-pdf-section-gloves">
</div>

</br> </br>
</div>

<!-- <img src="./assets/images/Globe3_ 1.webp" alt="img-pdf" class="gloves-second-img">-->

<div class="download-section">
  <h4 class="check-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <!-- Enlace para abrir en nueva pestaña y descargar el archivo si el usuario decide hacerlo -->
  <a href="https://dervosamerica.com/DervosValvesCatalog.pdf" target="_blank" class="download-link">
    DOWNLOAD TECHNICAL FILE
  </a>
  <div class="background-image"></div>
</div>

`,u=document.getElementById("app");class ke{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){if(!this.animationsInitialized){m(),window.addEventListener("scroll",f);const s=document.getElementById("fire-video");s&&(s.playbackRate=.45),Se(),this.animationsInitialized=!0}Ee(),we(),Ie()}}class De{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(m(),window.addEventListener("scroll",f),this.animationsInitialized=!0)}}class _e{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(O(),m(),window.addEventListener("scroll",f),this.animationsInitialized=!0)}}class He{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(m(),window.addEventListener("scroll",f),this.animationsInitialized=!0),E("gate-valves","parallax-gate-valve",0)}}class Be{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(m(),window.addEventListener("scroll",f),this.animationsInitialized=!0),E("check-valves","parallax-check-valve",100,!0)}}class Me{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(O(),m(),window.addEventListener("scroll",f),this.animationsInitialized=!0)}}class Ue{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(O(),m(),window.addEventListener("scroll",f),this.animationsInitialized=!0),E("trunnion-valves","parallax-trunnion-valve",0,!1)}}class Ge{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(O(),m(),window.addEventListener("scroll",f),this.animationsInitialized=!0),E("floating-valves","parallax-floating-valve")}}class ze{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(m(),window.addEventListener("scroll",f),this.animationsInitialized=!0),E("globe-valves","parallax-globe-valve",0,!1)}}class We{constructor(s){d(this,"html");d(this,"animationsInitialized",!1);this.html=s}render(){return this.html}initAnimations(){this.animationsInitialized||(m(),window.addEventListener("scroll",f),O(),this.animationsInitialized=!0),E("butterfly-valves","parallax-butterfly-valve",0,!1)}}const H=new ke(Ae),B=new De(Oe),M=new _e(Le),U=new He(Ne),G=new ze(Ve),z=new Be(Ce),W=new Me(xe),j=new Ue(Re),Y=new Ge(Fe),K=new We(Pe),je=()=>{p("/",()=>{u.innerHTML=H.render(),H.initAnimations()}),p("/about-us",()=>{u.innerHTML=B.render(),B.initAnimations()}),p("/steps",()=>{u.innerHTML=M.render(),M.initAnimations()}),p("/gate-valves",()=>{u.innerHTML=U.render(),U.initAnimations()}),p("/globe-valves",()=>{u.innerHTML=G.render(),G.initAnimations()}),p("/check-valves",()=>{u.innerHTML=z.render(),z.initAnimations()}),p("/certifications",()=>{u.innerHTML=W.render(),W.initAnimations()}),p("/trunnion-valves",()=>{u.innerHTML=j.render(),j.initAnimations()}),p("/floating-valves",()=>{u.innerHTML=Y.render(),Y.initAnimations()}),p("/butterfly-valves",()=>{u.innerHTML=K.render(),K.initAnimations()}),p(),b()};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-container");console.log("footer",e),e&&setTimeout(()=>{e.classList.remove("hidden")},1e3),je()});
