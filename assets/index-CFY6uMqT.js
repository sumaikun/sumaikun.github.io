(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();var T=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},f=D,V=S,j=z,W=C,G=N,q=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(e){for(var s=[],t=0,i=0,a="",n;(n=q.exec(e))!=null;){var o=n[0],r=n[1],l=n.index;if(a+=e.slice(i,l),i=l+o.length,r){a+=r[1];continue}a&&(s.push(a),a="");var c=n[2],p=n[3],_=n[4],U=n[5],A=n[6],M=n[7],k=A==="+"||A==="*",B=A==="?"||A==="*",L=c||"/",H=_||U||(M?".*":"[^"+L+"]+?");s.push({name:p||t++,prefix:c||"",delimiter:L,optional:B,repeat:k,pattern:Y(H)})}return i<e.length&&(a+=e.substr(i)),a&&s.push(a),s}function z(e){return C(S(e))}function C(e){for(var s=new Array(e.length),t=0;t<e.length;t++)typeof e[t]=="object"&&(s[t]=new RegExp("^"+e[t].pattern+"$"));return function(i){for(var a="",n=i||{},o=0;o<e.length;o++){var r=e[o];if(typeof r=="string"){a+=r;continue}var l=n[r.name],c;if(l==null){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to be defined')}if(T(l)){if(!r.repeat)throw new TypeError('Expected "'+r.name+'" to not repeat, but received "'+l+'"');if(l.length===0){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(c=encodeURIComponent(l[p]),!s[o].test(c))throw new TypeError('Expected all "'+r.name+'" to match "'+r.pattern+'", but received "'+c+'"');a+=(p===0?r.prefix:r.delimiter)+c}continue}if(c=encodeURIComponent(l),!s[o].test(c))throw new TypeError('Expected "'+r.name+'" to match "'+r.pattern+'", but received "'+c+'"');a+=r.prefix+c}return a}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function Y(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function O(e,s){return e.keys=s,e}function P(e){return e.sensitive?"":"i"}function K(e,s){var t=e.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)s.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return O(e,s)}function $(e,s,t){for(var i=[],a=0;a<e.length;a++)i.push(D(e[a],s,t).source);var n=new RegExp("(?:"+i.join("|")+")",P(t));return O(n,s)}function X(e,s,t){for(var i=S(e),a=N(i,t),n=0;n<i.length;n++)typeof i[n]!="string"&&s.push(i[n]);return O(a,s)}function N(e,s){s=s||{};for(var t=s.strict,i=s.end!==!1,a="",n=e[e.length-1],o=typeof n=="string"&&/\/$/.test(n),r=0;r<e.length;r++){var l=e[r];if(typeof l=="string")a+=R(l);else{var c=R(l.prefix),p=l.pattern;l.repeat&&(p+="(?:"+c+p+")*"),l.optional?c?p="(?:"+c+"("+p+"))?":p="("+p+")?":p=c+"("+p+")",a+=p}}return t||(a=(o?a.slice(0,-2):a)+"(?:\\/(?=$))?"),i?a+="$":a+=t&&o?"":"(?=\\/|$)",new RegExp("^"+a,P(s))}function D(e,s,t){return s=s||[],T(s)?t||(t={}):(t=s,s=[]),e instanceof RegExp?K(e,s):T(e)?$(e,s,t):X(e,s,t)}f.parse=V;f.compile=j;f.tokensToFunction=W;f.tokensToRegExp=G;var u=typeof document<"u",h=typeof window<"u",E=typeof history<"u",Q=typeof process<"u",I=u&&document.ontouchstart?"touchstart":"click",v=h&&!!(window.history.location||window.location);function d(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}d.prototype.configure=function(e){var s=e||{};this._window=s.window||h&&window,this._decodeURLComponents=s.decodeURLComponents!==!1,this._popstate=s.popstate!==!1&&h,this._click=s.click!==!1&&u,this._hashbang=!!s.hashbang;var t=this._window;this._popstate?t.addEventListener("popstate",this._onpopstate,!1):h&&t.removeEventListener("popstate",this._onpopstate,!1),this._click?t.document.addEventListener(I,this.clickHandler,!1):u&&t.document.removeEventListener(I,this.clickHandler,!1),this._hashbang&&h&&!E?t.addEventListener("hashchange",this._onpopstate,!1):h&&t.removeEventListener("hashchange",this._onpopstate,!1)};d.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};d.prototype._getBase=function(){var e=this._base;if(e)return e;var s=h&&this._window&&this._window.location;return h&&this._hashbang&&s&&s.protocol==="file:"&&(e=s.pathname),e};d.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};d.prototype.start=function(e){var s=e||{};if(this.configure(s),s.dispatch!==!1){this._running=!0;var t;if(v){var i=this._window,a=i.location;this._hashbang&&~a.hash.indexOf("#!")?t=a.hash.substr(2)+a.search:this._hashbang?t=a.search+a.hash:t=a.pathname+a.search+a.hash}this.replace(t,null,!0,s.dispatch)}};d.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(I,this.clickHandler,!1),h&&e.removeEventListener("popstate",this._onpopstate,!1),h&&e.removeEventListener("hashchange",this._onpopstate,!1)}};d.prototype.show=function(e,s,t,i){var a=new b(e,s,this),n=this.prevContext;return this.prevContext=a,this.current=a.path,t!==!1&&this.dispatch(a,n),a.handled!==!1&&i!==!1&&a.pushState(),a};d.prototype.back=function(e,s){var t=this;if(this.len>0){var i=this._window;E&&i.history.back(),this.len--}else setTimeout(e?function(){t.show(e,s)}:function(){t.show(t._getBase(),s)})};d.prototype.redirect=function(e,s){var t=this;typeof e=="string"&&typeof s=="string"&&w.call(this,e,function(i){setTimeout(function(){t.replace(s)},0)}),typeof e=="string"&&typeof s>"u"&&setTimeout(function(){t.replace(e)},0)};d.prototype.replace=function(e,s,t,i){var a=new b(e,s,this),n=this.prevContext;return this.prevContext=a,this.current=a.path,a.init=t,a.save(),i!==!1&&this.dispatch(a,n),a};d.prototype.dispatch=function(e,s){var t=0,i=0,a=this;function n(){var r=a.exits[i++];if(!r)return o();r(s,n)}function o(){var r=a.callbacks[t++];if(e.path!==a.current){e.handled=!1;return}if(!r)return Z.call(a,e);r(e,o)}s?n():o()};d.prototype.exit=function(e,s){if(typeof e=="function")return this.exit("*",e);for(var t=new y(e,null,this),i=1;i<arguments.length;++i)this.exits.push(t.middleware(arguments[i]))};d.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var s=e.target,t=e.path||(e.composedPath?e.composedPath():null);if(t){for(var i=0;i<t.length;i++)if(t[i].nodeName&&t[i].nodeName.toUpperCase()==="A"&&t[i].href){s=t[i];break}}for(;s&&s.nodeName.toUpperCase()!=="A";)s=s.parentNode;if(!(!s||s.nodeName.toUpperCase()!=="A")){var a=typeof s.href=="object"&&s.href.constructor.name==="SVGAnimatedString";if(!(s.hasAttribute("download")||s.getAttribute("rel")==="external")){var n=s.getAttribute("href");if(!(!this._hashbang&&this._samePath(s)&&(s.hash||n==="#"))&&!(n&&n.indexOf("mailto:")>-1)&&!(a?s.target.baseVal:s.target)&&!(!a&&!this.sameOrigin(s.href))){var o=a?s.href.baseVal:s.pathname+s.search+(s.hash||"");o=o[0]!=="/"?"/"+o:o,Q&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var r=o,l=this._getBase();o.indexOf(l)===0&&(o=o.substr(l.length)),this._hashbang&&(o=o.replace("#!","")),!(l&&r===o&&(!v||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(r))}}}}};d.prototype._onpopstate=function(){var e=!1;return h?(u&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var i=this;if(t.state){var a=t.state.path;i.replace(a,t.state)}else if(v){var n=i._window.location;i.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}}):function(){}}();d.prototype._which=function(e){return e=e||h&&this._window.event,e.which==null?e.button:e.which};d.prototype._toURL=function(e){var s=this._window;if(typeof URL=="function"&&v)return new URL(e,s.location.toString());if(u){var t=s.document.createElement("a");return t.href=e,t}};d.prototype.sameOrigin=function(e){if(!e||!v)return!1;var s=this._toURL(e),t=this._window,i=t.location;return i.protocol===s.protocol&&i.hostname===s.hostname&&(i.port===s.port||i.port===""&&(s.port==80||s.port==443))};d.prototype._samePath=function(e){if(!v)return!1;var s=this._window,t=s.location;return e.pathname===t.pathname&&e.search===t.search};d.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function F(){var e=new d;function s(){return w.apply(e,arguments)}return s.callbacks=e.callbacks,s.exits=e.exits,s.base=e.base.bind(e),s.strict=e.strict.bind(e),s.start=e.start.bind(e),s.stop=e.stop.bind(e),s.show=e.show.bind(e),s.back=e.back.bind(e),s.redirect=e.redirect.bind(e),s.replace=e.replace.bind(e),s.dispatch=e.dispatch.bind(e),s.exit=e.exit.bind(e),s.configure=e.configure.bind(e),s.sameOrigin=e.sameOrigin.bind(e),s.clickHandler=e.clickHandler.bind(e),s.create=F,Object.defineProperty(s,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(s,"current",{get:function(){return e.current},set:function(t){e.current=t}}),s.Context=b,s.Route=y,s}function w(e,s){if(typeof e=="function")return w.call(this,"*",e);if(typeof s=="function")for(var t=new y(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(t.middleware(arguments[i]));else typeof e=="string"?this[typeof s=="string"?"redirect":"show"](e,s):this.start(e)}function Z(e){if(!e.handled){var s,t=this,i=t._window;t._hashbang?s=v&&this._getBase()+i.location.hash.replace("#!",""):s=v&&i.location.pathname+i.location.search,s!==e.canonicalPath&&(t.stop(),e.handled=!1,v&&(i.location.href=e.canonicalPath))}}function J(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function b(e,s,t){var i=this.page=t||w,a=i._window,n=i._hashbang,o=i._getBase();e[0]==="/"&&e.indexOf(o)!==0&&(e=o+(n?"#!":"")+e);var r=e.indexOf("?");this.canonicalPath=e;var l=new RegExp("^"+J(o));if(this.path=e.replace(l,"")||"/",n&&(this.path=this.path.replace("#!","")||"/"),this.title=u&&a.document.title,this.state=s||{},this.state.path=e,this.querystring=~r?i._decodeURLEncodedURIComponent(e.slice(r+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~r?e.slice(0,r):e),this.params={},this.hash="",!n){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}b.prototype.pushState=function(){var e=this.page,s=e._window,t=e._hashbang;e.len++,E&&s.history.pushState(this.state,this.title,t&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};b.prototype.save=function(){var e=this.page;E&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function y(e,s,t){var i=this.page=t||x,a=s||{};a.strict=a.strict||i._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=f(this.path,this.keys=[],a)}y.prototype.middleware=function(e){var s=this;return function(t,i){if(s.match(t.path,t.params))return t.routePath=s.path,e(t,i);i()}};y.prototype.match=function(e,s){var t=this.keys,i=e.indexOf("?"),a=~i?e.slice(0,i):e,n=this.regexp.exec(decodeURIComponent(a));if(!n)return!1;delete s[0];for(var o=1,r=n.length;o<r;++o){var l=t[o-1],c=this.page._decodeURLEncodedURIComponent(n[o]);(c!==void 0||!hasOwnProperty.call(s,l.name))&&(s[l.name]=c)}return!0};var x=F(),g=x,ee=x;g.default=ee;const se=`
<section>
  <img
    src="./assets/images/home-bg1.png"
    alt=""
    class="home-header-background"
  />
  <main class="header-container" style="min-height: unset">
    <div class="header-content-wrapper">
      <header class="header-header">
        <img
          src="./assets/images/logo.png"
          alt="Company Logo"
          class="header-logo"
        />

        <nav class="header-navigation">
          <a href="/" class="selected">HOME</a>
          <a href="/about-us">ABOUT US</a>
          <a href="/steps">VALVES STEPS</a>
          <a href="/valves">BALL VALVES</a>
          <a href="/certifications">CERTIFICATIONS</a>
        </nav>
      </header>
    </div>
  </main>
  <section class="home-header-section">
    <div class="home-header-content">
      <h1 class="home-header-title">VALVES AND FLUID MANAGEMENT.</h1>
      <h2 class="home-header-subtitle">FULLY</h2>
      <button class="home-header-cta-button">CONTACT</button>
    </div>
    <img
      src="./assets/images/home-valve.png"
      alt=""
      class="home-header-valve"
    />
  </section>
</section>

<section class="home-valve-section">
  <div class="home-valve-container">
    <section class="home-globe-valve-section">
      <div class="home-globe-valve-content">
        <img
          src="./assets/images/home-valve1-removebg-preview.png"
          alt="Valve diagram"
          class="home-valve-image"
          loading="lazy"
        />
        <span class="home-globe-valve-text">GLOBE VALVE</span>
      </div>
    </section>

    <section class="home-globe-valve-section">
      <div class="home-globe-valve-content">
        <img
          src="./assets/images/home-valve2-removebg-preview.png"
          alt="Globe valve"
          class="home-globe-valve-image"
          loading="lazy"
        />
        <span style="margin-left: 25px" class="home-globe-valve-text"
          >SWING VALVE</span
        >
      </div>
    </section>

    <section class="home-ball-valve-section">
      <div class="home-globe-valve-content">
        <img
          src="./assets/images/home-valve3-removebg-preview.png"
          alt="Ball valve"
          class="home-ball-valve-image"
          loading="lazy"
        />
        <span class="home-globe-valve-text">GLOBE VALVE</span>
      </div>
    </section>

    <section class="home-butterfly-valve-section">
      <div class="home-globe-valve-content">
        <img
          src="./assets/images/home-valve4-removebg-preview.png"
          alt="Butterfly valve"
          class="home-butterfly-valve-image"
          loading="lazy"
        />
        <span class="home-globe-valve-text">BALL VALVE</span>
      </div>
    </section>

    <section class="home-butterfly-valve-section">
      <div class="home-globe-valve-content">
        <img
          src="./assets/images/home-valve5-removebg-preview.png"
          alt="Butterfly valve"
          class="home-butterfly-valve-image"
          loading="lazy"
        />
        <span class="home-globe-valve-text">BUTTERFLY VALVE</span>
      </div>
    </section>
  </div>
</section>

<section class="home-certification">
  <div class="home-certification-info">
    <h3 class="home-certification-title">American Petroleum Institute</h3>
    <div class="home-certifications-section">
      <h2 class="home-certifications-heading">We have the certifications</h2>
      <p class="home-api-number-cert">
        API
        <span class="home-api-number-highlight">602</span>
      </p>
      <p class="home-certifications-description">
        Forged steel valves with threaded, bolted and welded ends, including
        gate, globe and check valves.
      </p>
    </div>
  </div>
</section>

<section class="home-first-api-section">
  <img
    src="./assets/images/bg-valve-home1.jpeg"
    alt=""
    class="home-first-background-image"
  />
  <img
    src="./assets/images/first-valve.png"
    alt="API 6FD Fire Testing Standard for Valves"
    class="home-first-api-image"
  />
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
  <img
    src="./assets/images/bg-team.jpeg"
    alt=""
    class="home-first-background-image"
  />
  <img
    src="./assets/images/second-valve.png"
    alt="API 6FD Fire Testing Standard for Valves"
    class="home-second-api-image"
  />
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

<section class="home-first-api-section">
  <img
    src="./assets/images/cilinders.jpeg"
    alt=""
    class="home-first-background-image"
  />
  <img
    src="./assets/images/third-valve.png"
    alt="API 6FD Fire Testing Standard for Valves"
    class="home-third-api-image"
  />
</section>

<section class="home-info-certifications-section">
  <div class="home-info-certifications-container">
    <div class="home-info-certifications-grid">

      <div class="home-info-certification-item">
        <div class="home-info-certification-content">
          <div class="home-info-certification-header">
            <img src="./assets/images/certificate-info1.png" alt="Operational Certifications Icon" class="home-info-certification-icon" />
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
            <img src="./assets/images/certificate-info2.png" alt="Operational Certifications Icon" class="home-info-certification-icon" />
            <h3 class="home-info-certification-title">
              OPERATIONAL<br />
              CERTIFICATIONS
            </h3>
          </div>
          <p class="home-info-certification-details" style="width: 317px;">
            Our valves upon request are delivered with a QA dossier and test results.
          </p>
        </div>
      </div>

      <div class="home-info-certification-item">
        <div class="home-info-certification-content">
          <div class="home-info-certification-header">
            <img src="./assets/images/certificate-info3.png" alt="Operational Certifications Icon" class="home-info-certification-icon home-info-certificate-gears" />
            <h3 class="home-info-certification-title">
              OPERATIONAL<br />
              CERTIFICATIONS
            </h3>
          </div>
          <p class="home-info-certification-details" style="width: 263px;">
            Our manufacturing process is certificated by API International.
          </p>
        </div>
      </div>
   
    </div>
  </div>
</section>

<section class="home-mission-section-container">
    <img src="./assets/images/usa-map.jpeg" alt="Usa map" class="home-info-certification-map" />
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
        <button class="home-mission-cta">LEARN MORE</button>
    </div>
</section>

<section class="home-blog-articles-section">
  <h2 class="home-blog-section-title">
    SOME <span style="color: rgba(0, 163, 159, 1)">ARTICLES</span> MIGHT INTEREST YOU
  </h2>
  <div class="home-blog-articles-container">
    <article class="home-blog-article-card">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb9243c0f57cd87bdd022dd7d1af9d7efc229c16070f99b3f2edbd613a281dec?apiKey=360bf7e333734610b3ff691474e14d53&" alt="Pipeline Expansion Projects" class="home-blog-article-image" />
      <h3 class="home-blog-article-title">Pipeline Expansion Projects</h3>
      <p class="home-blog-article-description">
        Major pipeline expansion projects are underway across key regions, driven...
      </p>
    </article>
    <article class="home-blog-article-card">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d0ee07c2c5d9e3e6e6cad7be6d05d63651f0f488b8a22782845ebb08bb41764?apiKey=360bf7e333734610b3ff691474e14d53&" alt="Digitalization Revolutionizes" class="home-blog-article-image" />
      <h3 class="home-blog-article-title">Digitalization Revolutionizes</h3>
      <p class="home-blog-article-description">
        The integration of digital technologies, including AI-driven analytics and IoT...
      </p>
    </article>
    <article class="home-blog-article-card">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/599cc0b922d41ff04c249732c5524aefc5a49a30c50a3980a7b890ae3c454299?apiKey=360bf7e333734610b3ff691474e14d53&" alt="Challenges Highlight Tensions" class="home-blog-article-image" />
      <h3 class="home-blog-article-title">Challenges Highlight Tensions</h3>
      <p class="home-blog-article-description">
        Controversy surrounds several pipeline projects as communities voice concerns...
      </p>
    </article>
    <article class="home-blog-article-card">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/599cc0b922d41ff04c249732c5524aefc5a49a30c50a3980a7b890ae3c454299?apiKey=360bf7e333734610b3ff691474e14d53&" alt="Challenges Highlight Tensions" class="home-blog-article-image" />
      <h3 class="home-blog-article-title">Challenges Highlight Tensions</h3>
      <p class="home-blog-article-description">
        Controversy surrounds several pipeline projects as communities voice concerns...
      </p>
    </article>
  </div>
</section>
`,te=`
<main class="header-container">
  <img
    src="./assets/images/header_bg.jpeg"
    alt=""
    class="header-background-image"
  />

  <div class="header-content-wrapper">
    <header class="header-header">
      <img
        src="./assets/images/logo.png"
        alt="Company Logo"
        class="header-logo"
      />

      <nav class="header-navigation">
        <a href="/">HOME</a>
        <a href="/about-us" class="selected">ABOUT US</a>
        <a href="/steps">VALVES STEPS</a>
        <a href="/valves">BALL VALVES</a>
        <a href="/certifications">CERTIFICATIONS</a>
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

      <p class="header-scroll-text">SCROLL BELOW</p>
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
        To do this,<strong class="about-highlight"
          >we use the best national and international logistics chains to supply
          our clients.</strong
        >
      </p>
      <p class="about-product-description">
        We know the criticality of the projects in which our products are used
        and
        <strong class="about-highlight"
          >we provide peace of mind in supply and planning.</strong
        >
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
    <img
      src="./assets/images/globe_valves.png"
      alt=""
      class="about-product-blode-valve-image"
    />
  </div>
</section>

<section class="about-about-section">
  <div class="about-about-container">
    <div class="about-about-content">
      <div class="about-about-title-column">
        <div class="about-about-title-wrapper">
          <h2 class="about-about-title">
            <span class="about-white-text">ABOUT</span>
            <span class="about-dark-text">US</span>
          </h2>
          <p class="about-about-subtitle">
            THINGS THAT
            <strong class="about-white-text">FIT</strong>
            YOUR NEEDS
          </p>
        </div>
      </div>
      <div class="about-about-description-column">
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
      <img
        src="./assets/images/nestor.png"
        alt="Profile picture of Nestor Morales"
        class="about-profile-image"
      />
    </section>
    <section class="about-profile-details-column">
      <div class="about-profile-details-wrapper">
        <h1 class="about-profile-name">
          <span class="about-profile-name-accent">NESTOR</span> MORALES
        </h1>
        <p class="about-profile-title">
          Project Management | Oil & Gas | Business Development
        </p>
        <ul class="about-profile-qualifications">
          <li><strong>Mechanical engineer</strong></li>
          <li>Project Management <strong>Master's Degree.</strong></li>
          <li><strong>PhD,</strong> Economics, Management and Politics</li>
          <li><strong>Master</strong> of Business Administration</li>
        </ul>
        <img
          src="./assets/images/blue-linkedin.png"
          alt=""
          class="about-profile-logo"
        />
      </div>
    </section>
  </div>
  <img src="./assets/images/bg-team.jpeg" class="about-profile-image-bg" />
  <div class="about-profile-container">
    <section class="about-profile-details-column">
      <div class="about-profile-details-wrapper">
        <h1 class="about-profile-name">
          <span class="about-profile-name-accent">NESTOR</span> MORALES
        </h1>
        <p class="about-profile-title">
          Project Management | Oil & Gas | Business Development
        </p>
        <ul class="about-profile-qualifications">
          <li><strong>Mechanical engineer</strong></li>
          <li>Project Management <strong>Master's Degree.</strong></li>
          <li><strong>PhD,</strong> Economics, Management and Politics</li>
          <li><strong>Master</strong> of Business Administration</li>
        </ul>
        <img
          src="./assets/images/blue-linkedin.png"
          alt=""
          class="about-profile-logo"
        />
      </div>
    </section>
    <section class="about-profile-image-column">
      <img src="./assets/images/nestor.png" />
    </section>
  </div>
  <div class="about-mission-container">
    <div class="about-top-bar"></div>
    <h1 class="about-page-title">
      THE UNION OF BUSINESS EXPERTISE AND THE MANUFACTURING EXCELLENCE
    </h1>

    <div class="about-content-wrapper">
      <div class="about-two-column-layout">
        <div class="about-column">
          <p class="about-text-content">
            At Dervos America we work with the mission of developing solutions
            for our clients. Integrating our value chain allowing us to enter
            such demanding markets as is North American, as an excellent
            alternative for the provision of valves and accessories for the Oil,
            Gas, and Petrochemical industries, among others. We have more than
            20 years of experience from our CEO Santiago Giron, who has
            developed in this business in places like Argentina, Peru and
            Bolivia. In large-scale projects such as Vaca Muerta, Fortin de
            Piedra, among others. His vision of the need for a global market has
            allowed the development of manufacturing strategies through the
            strategic union with Xiamen Dervos industrial Valves Co LTD.
          </p>
        </div>

        <div class="about-column-with-image">
          <div class="about-text-with-image">
            <p class="about-text-content-image">
              Xiamen Dervos Industrial Valves Co LTD. is one of the leading
              Valves manufacturers in China. Its exponential growth over the
              last 10 years has led it to participate together with Santiago
              Giron in complex and really demanding projects. Always being up to
              the needs and fulfilling a fundamental role in the vision of
              Dervos America Corp. The professional trajectory towards the
              international certifications of its processes and methods has
              allowed us to be able to start Dervos America Corp. as a
              fundamental pillar our vision.
            </p>
            <img
              src="./assets/images/dervos_logo.png"
              alt="Company image"
              class="about-company-image"
            />
          </div>
        </div>
      </div>
    </div>
    <p class="about-mission-statement">
      Together we share the mission and vision of a modern, efficient and
      environmentally conscious company that exceeds the quality demands imposed
      by the market today. That is why today, through Dervos America Corp., we
      embark once again on that beautiful dream that we all share in the company
      of being able to build a better and more sustainable future.
    </p>
  </div>
  <div class="about-partner">
    <img src="./assets/images/partner-bg.jpeg" alt="Hero background" class="about-partner-background" />
    <div class="about-partner-content">
        <h2 class="about-partner-title">READY TO START ?</h2>
        <p class="about-partner-subtitle">PARTNER WITH US FOR A BETTER EXPERIENCE.</p>
        <button class="about-partner-cta">CONTACT NOW</button>
    </div>
  </div>
</section>
`,ae=`
<main class="header-container">
    <img src="./assets/images/building-bg.jpeg" alt="" class="header-background-image" />

    <div class="header-content-wrapper">
        <header class="header-header">
            <img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" />

            <nav class="header-navigation">
                <a href="/">HOME</a>
                <a href="/about-us">ABOUT US</a>
                <a href="/steps" class="selected">VALVES STEPS</a>
                <a href="/valves">BALL VALVES</a>
                <a href="/certifications">CERTIFICATIONS</a>
            </nav>
        </header>

        <section class="header-main-content">
            <div class="parallax-background"></div><!-- Div para el fondo con efecto parallax -->
                <h1 class="header-main-heading">
                    WE DESIGN AND CARRY OUT ALL THE STEPS IN THE CREATION OF OUR PRODUCTS.
                </h1>
                <img src="./assets/images/arrow.png" class="header-arrow" />
                <p class="header-scroll-text" style="margin-top: 20px;">SCROLL BELOW</p>
        </section>
    </div>
</main>
<div class="steps-content">
    <img src="./assets/images/bg-products.png" class="steps-bg-right steps-first-bg" />
    <img src="./assets/images/bg-products.png" class="steps-bg-right steps-middle-bg" />
    <img src="./assets/images/bg-team.jpeg" class="steps-bg-right steps-third-bg" />
    <div class="steps-container">
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

    <div class="steps-container">
        <div class="steps-image-column">
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
    </div>

    <div class="steps-container">
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
            <img src="./assets/images/steps3.jpeg" alt="Product image" class="steps-product-image" />
        </div>
    </div>

    <div class="steps-container">
        <div class="steps-image-column">
            <img src="./assets/images/steps4.jpeg" alt="Product image" class="steps-product-image" />
        </div>
        <div class="steps-content-column">
            <div class="steps-content-wrapper steps-right">
                <h2 class="steps-section-title">TEST AND CERTIFICATIONS</h2>
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
                    <img src="./assets/images/certification-star.png" alt="Cert image" class="steps-cert-image" />
                    <button class="steps-cert-button">MORE ABOUT OUR CERTIFICATIONS</button>
                </div>
            </div>
        </div>
    </div>

    <div class="steps-container">
        <div class="steps-content-column">
            <div class="steps-content-wrapper" style="gap: 40px;">
                <h2 class="steps-section-title">LOGISTICS</h2>
                <div class="steps-section-divider"></div>
                <p class="steps-testing-text" style="color: black;">
                    Finally when the product is ready:
                </p>
                <p class="steps-quality-text">
                    It is dispatched to its destination through our own <b>national and international distribution
                        chain</b>.
                </p>
                <button class="steps-contact-button">CONTACT</button>
            </div>
        </div>
        <div class="steps-image-column">
            <img src="./assets/images/steps5.jpeg" alt="Product image" class="steps-product-image" />
        </div>
    </div>

</div>
<section class="about-about-section">
    <div class="about-about-container">
        <div class="about-about-content">
            <div class="about-about-title-column">
                <div class="about-about-title-wrapper">
                    <h2 class="about-about-title">
                        <span class="about-white-text">ABOUT</span>
                        <span class="about-dark-text">US</span>
                    </h2>
                    <p class="about-about-subtitle">
                        THINGS THAT
                        <strong class="about-white-text">FIT</strong>
                        YOUR NEEDS
                    </p>
                </div>
            </div>
            <div class="about-about-description-column">
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

<script>
  // Escucha el evento de scroll.
  window.addEventListener('scroll', function() {
    const parallaxBackground = document.querySelector('.parallax-background');
    const offset = window.pageYOffset;
    parallaxBackground.style.backgroundPositionY = offset * 0.2 + "px"; // Ajusta el 0.7 al ratio de velocidad que prefieras.
  });
<\/script>
`,ie=`
<main class="header-container">
    <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />

    <div class="header-content-wrapper">
        <header class="header-header">
            <img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" />

            <nav class="header-navigation">
                <a href="/">HOME</a>
                <a href="/about-us">ABOUT US</a>
                <a href="/steps">VALVES STEPS</a>
                <a href="/valves" class="selected">BALL VALVES</a>
                <a href="/certifications">CERTIFICATIONS</a>
            </nav>
        </header>

        <section class="header-main-content" >
            <p class="valves-testing-list" style="margin-top: 10%; margin-bottom:1%;">WE DESIGN AND CARRY OUT ALL THE STEPS IN THE CREATION OF OUR PRODUCTS.</p>
            <p class="header-scroll-text"
                style="font-weight: 900;  letter-spacing: 0.20em ;margin-top: 20px; font-size: 60px; color: #3F3F3F; font-family: Raleway; ">GATE
                VALVES</p>
        </section>
    </div>
</main>
<div class="valves-content">
    <img class="valves-bg-right valves-first-bg" />
    <img src="./assets/images/bg-team.jpeg" class="valves-bg-right valves-middle-bg" />
    <img src="./assets/images/bg-products.png" class="valves-bg-right valves-third-bg" />
    <div class="valves-container">
        <div class="valves-content-column valves-first-column">
            <div class="valves-content-wrapper">
                <div class="valves-section">
                    <h1 class="valves-section-title">GATE<strong style="color: #00A39F;"> GATE</strong> </h1>
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
            <img src="./assets/images/valves-equipment-1.jpeg" alt="Product image" class="valves-product-image" />
        </div>
    </div>
    </br>
    <div class="valves-container second-container">
        <div class="valves-image-column">
            <img src="./assets/images/valves-equipment-2.png" alt="Product image" class="valves-product-image" />
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
                    <P class="valves-testing-list" style="font-size: 18px">Developing our moulds in advance, we can cast
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

    <div class="valves-container third-container">
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
                <button class="valves-contact-button">DOWNLOAD TECNICAL FILE</button>
            </div>
        </div>
        <div class="valves-image-column">
            <img src="./assets/images/valves-equipment-3.png" alt="Product image" class="valves-product-image" />
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
            <img src="./assets/images/valves-equipment-4.jpeg" alt="Product image" class="valves-product-image" />
        </div>
        <div class="valves-content-column">
            <div class="valves-content-wrapper valves-right">
                <div class="valves-section">
                    <div class="valves-section-title">GATE <strong style="color:#00A39F;"> VALVE</strong></div>
                    <h5 style="color:#959595; font-size:18px; font-family:Raleway">OS & Y, Rising Stem, Flexible Solid
                        Wedge Bolted Bonnet, Threaded or Welded Seat Ring Non-Rising Gate Valve.</h5>
                </div>
                <div class="valves-section">
                    <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: bold;">STANDARDS
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
    <div class="centered-title">STANDARD MATERIALS <strong style="color: black;"> SPECIFICATIONS</strong></div>
    <img src="./assets/images/pdf-1.jpeg" alt="img-pdf" class="img-pdf-section-valve">

    <div class="centered-title">TEST PRESSURE TO <strong style="color: black;">API598</strong></div>
    <img src="./assets/images/pdf-2.jpeg" alt="img-pdf" class="img-pdf-section-valve">
    <img src="./assets/images/pdf-3.jpeg" alt="img-pdf" class="img-pdf-section-valve">
</div>

<div class="download-section">
    <h4 class="section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
    <a href="./assets/images/valves-equipment-4.pdf" class="download-link" download>DOWNLOAD TECHNICAL FILE</a>
    <div class="background-image"></div>
</div>
`,ne=`
<main class="header-container container-parallax">
    <div class="header-content-wrapper">
        <header class="header-header">
            <img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" />

            <nav class="header-navigation">
                <a href="/">HOME</a>
                <a href="/about-us">ABOUT US</a>
                <a href="/steps">VALVES STEPS</a>
                <a href="/valves">BALL VALVES</a>
                <a href="/certifications" class="selected">CERTIFICATIONS</a>
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
            <!--<h6 style="color: white; font-size: 38px; margin-bottom:15%; font-family: Raleway; " >Our manufacturing process is certificated by API International.\u2028You can count on the quality of our valves.</h6>-->
            <img src="./assets/images/arrow.png" class="header-arrow" />
            <p class="header-scroll-text" style="margin-top: 20px;">SCROLL BELOW</p>
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

    <img src="./assets/images/certificado.png" alt="img background" class="img-background-certifications">
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

    <div class="icon-row">
        <div class="icon-container">
            <img src="./assets/images/checkout.png" alt="Icon 1">
            <h3>STEM BACKSEAT TEST</h3>
            <div class="line-divider-list-icons"></div> <!-- Línea divisora -->
            <p>Pressure at 1.1 times valve rating for 2 to 5 minutes depending on valve size</p>
        </div>

        <!-- Contenedor del segundo ícono -->
        <div class="icon-container">
            <img src="./assets/images/checkout.png" alt="Icon 2">
            <h3>HYDROSTATIC SHELL TEST</h3>
            <div class="line-divider-list-icons"></div> <!-- Línea divisora -->
            <p>Pressure at 1.5 times valve rating for 2 to 30 minutes depending on valve size</p>
        </div>

        <!-- Contenedor del tercer ícono -->
        <div class="icon-container">
            <img src="./assets/images/checkout.png" alt="Icon 3">
            <h3>HYDROSTATIC SEAT TEST</h3>
            <div class="line-divider-list-icons"></div> <!-- Línea divisora -->
            <p>Pressure at 1.1 times valve rating for 2 to 5 minutes depending on valve size</p>
        </div>
    </div>
</div>

<!--  ABOUT US SECTION-->
<section class="about-about-section">
    <div class="about-about-container">
        <div class="about-about-content">
            <div class="about-about-title-column">
                <div class="about-about-title-wrapper">
                    <h2 class="about-about-title">
                        <span class="about-white-text">ABOUT</span>
                        <span class="about-dark-text">US</span>
                    </h2>
                    <p class="about-about-subtitle">
                        THINGS THAT
                        <strong class="about-white-text">FIT</strong>
                        YOUR NEEDS
                    </p>
                </div>
            </div>
            <div class="about-about-description-column">
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

<script>
    // Escucha el evento de scroll.
    window.addEventListener('scroll', function() {
      const parallaxBackground = document.querySelector('.parallax-background');
      const offset = window.pageYOffset;
      parallaxBackground.style.backgroundPositionY = offset * 0.7 + "px"; // Ajusta el 0.7 al ratio de velocidad que prefieras.
    });
  <\/script>
  

`,m=document.getElementById("app"),oe=()=>{g("/",()=>{m.innerHTML=se}),g("/about-us",()=>{m.innerHTML=te}),g("/steps",()=>{m.innerHTML=ae}),g("/valves",()=>{m.innerHTML=ie}),g("/certifications",()=>{m.innerHTML=ne}),g()};document.addEventListener("DOMContentLoaded",()=>{oe()});
