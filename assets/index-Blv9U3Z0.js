(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();var T=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},f=U,k=I,j=Y,G=C,W=_,q=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(e){for(var t=[],s=0,i=0,a="",n;(n=q.exec(e))!=null;){var o=n[0],r=n[1],c=n.index;if(a+=e.slice(i,c),i=c+o.length,r){a+=r[1];continue}a&&(t.push(a),a="");var l=n[2],h=n[3],D=n[4],M=n[5],w=n[6],V=n[7],F=w==="+"||w==="*",B=w==="?"||w==="*",S=l||"/",H=D||M||(V?".*":"[^"+S+"]+?");t.push({name:h||s++,prefix:l||"",delimiter:S,optional:B,repeat:F,pattern:K(H)})}return i<e.length&&(a+=e.substr(i)),a&&t.push(a),t}function Y(e){return C(I(e))}function C(e){for(var t=new Array(e.length),s=0;s<e.length;s++)typeof e[s]=="object"&&(t[s]=new RegExp("^"+e[s].pattern+"$"));return function(i){for(var a="",n=i||{},o=0;o<e.length;o++){var r=e[o];if(typeof r=="string"){a+=r;continue}var c=n[r.name],l;if(c==null){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to be defined')}if(T(c)){if(!r.repeat)throw new TypeError('Expected "'+r.name+'" to not repeat, but received "'+c+'"');if(c.length===0){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(l=encodeURIComponent(c[h]),!t[o].test(l))throw new TypeError('Expected all "'+r.name+'" to match "'+r.pattern+'", but received "'+l+'"');a+=(h===0?r.prefix:r.delimiter)+l}continue}if(l=encodeURIComponent(c),!t[o].test(l))throw new TypeError('Expected "'+r.name+'" to match "'+r.pattern+'", but received "'+l+'"');a+=r.prefix+l}return a}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function K(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function x(e,t){return e.keys=t,e}function P(e){return e.sensitive?"":"i"}function z(e,t){var s=e.source.match(/\((?!\?)/g);if(s)for(var i=0;i<s.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return x(e,t)}function $(e,t,s){for(var i=[],a=0;a<e.length;a++)i.push(U(e[a],t,s).source);var n=new RegExp("(?:"+i.join("|")+")",P(s));return x(n,t)}function X(e,t,s){for(var i=I(e),a=_(i,s),n=0;n<i.length;n++)typeof i[n]!="string"&&t.push(i[n]);return x(a,t)}function _(e,t){t=t||{};for(var s=t.strict,i=t.end!==!1,a="",n=e[e.length-1],o=typeof n=="string"&&/\/$/.test(n),r=0;r<e.length;r++){var c=e[r];if(typeof c=="string")a+=R(c);else{var l=R(c.prefix),h=c.pattern;c.repeat&&(h+="(?:"+l+h+")*"),c.optional?l?h="(?:"+l+"("+h+"))?":h="("+h+")?":h=l+"("+h+")",a+=h}}return s||(a=(o?a.slice(0,-2):a)+"(?:\\/(?=$))?"),i?a+="$":a+=s&&o?"":"(?=\\/|$)",new RegExp("^"+a,P(t))}function U(e,t,s){return t=t||[],T(t)?s||(s={}):(s=t,t=[]),e instanceof RegExp?z(e,t):T(e)?$(e,t,s):X(e,t,s)}f.parse=k;f.compile=j;f.tokensToFunction=G;f.tokensToRegExp=W;var g=typeof document<"u",d=typeof window<"u",y=typeof history<"u",Q=typeof process<"u",O=g&&document.ontouchstart?"touchstart":"click",u=d&&!!(window.history.location||window.location);function p(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}p.prototype.configure=function(e){var t=e||{};this._window=t.window||d&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&d,this._click=t.click!==!1&&g,this._hashbang=!!t.hashbang;var s=this._window;this._popstate?s.addEventListener("popstate",this._onpopstate,!1):d&&s.removeEventListener("popstate",this._onpopstate,!1),this._click?s.document.addEventListener(O,this.clickHandler,!1):g&&s.document.removeEventListener(O,this.clickHandler,!1),this._hashbang&&d&&!y?s.addEventListener("hashchange",this._onpopstate,!1):d&&s.removeEventListener("hashchange",this._onpopstate,!1)};p.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};p.prototype._getBase=function(){var e=this._base;if(e)return e;var t=d&&this._window&&this._window.location;return d&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};p.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};p.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var s;if(u){var i=this._window,a=i.location;this._hashbang&&~a.hash.indexOf("#!")?s=a.hash.substr(2)+a.search:this._hashbang?s=a.search+a.hash:s=a.pathname+a.search+a.hash}this.replace(s,null,!0,t.dispatch)}};p.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(O,this.clickHandler,!1),d&&e.removeEventListener("popstate",this._onpopstate,!1),d&&e.removeEventListener("hashchange",this._onpopstate,!1)}};p.prototype.show=function(e,t,s,i){var a=new v(e,t,this),n=this.prevContext;return this.prevContext=a,this.current=a.path,s!==!1&&this.dispatch(a,n),a.handled!==!1&&i!==!1&&a.pushState(),a};p.prototype.back=function(e,t){var s=this;if(this.len>0){var i=this._window;y&&i.history.back(),this.len--}else setTimeout(e?function(){s.show(e,t)}:function(){s.show(s._getBase(),t)})};p.prototype.redirect=function(e,t){var s=this;typeof e=="string"&&typeof t=="string"&&E.call(this,e,function(i){setTimeout(function(){s.replace(t)},0)}),typeof e=="string"&&typeof t>"u"&&setTimeout(function(){s.replace(e)},0)};p.prototype.replace=function(e,t,s,i){var a=new v(e,t,this),n=this.prevContext;return this.prevContext=a,this.current=a.path,a.init=s,a.save(),i!==!1&&this.dispatch(a,n),a};p.prototype.dispatch=function(e,t){var s=0,i=0,a=this;function n(){var r=a.exits[i++];if(!r)return o();r(t,n)}function o(){var r=a.callbacks[s++];if(e.path!==a.current){e.handled=!1;return}if(!r)return Z.call(a,e);r(e,o)}t?n():o()};p.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var s=new b(e,null,this),i=1;i<arguments.length;++i)this.exits.push(s.middleware(arguments[i]))};p.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,s=e.path||(e.composedPath?e.composedPath():null);if(s){for(var i=0;i<s.length;i++)if(s[i].nodeName&&s[i].nodeName.toUpperCase()==="A"&&s[i].href){t=s[i];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var a=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var n=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||n==="#"))&&!(n&&n.indexOf("mailto:")>-1)&&!(a?t.target.baseVal:t.target)&&!(!a&&!this.sameOrigin(t.href))){var o=a?t.href.baseVal:t.pathname+t.search+(t.hash||"");o=o[0]!=="/"?"/"+o:o,Q&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var r=o,c=this._getBase();o.indexOf(c)===0&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace("#!","")),!(c&&r===o&&(!u||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(r))}}}}};p.prototype._onpopstate=function(){var e=!1;return d?(g&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(s){if(e){var i=this;if(s.state){var a=s.state.path;i.replace(a,s.state)}else if(u){var n=i._window.location;i.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}}):function(){}}();p.prototype._which=function(e){return e=e||d&&this._window.event,e.which==null?e.button:e.which};p.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&u)return new URL(e,t.location.toString());if(g){var s=t.document.createElement("a");return s.href=e,s}};p.prototype.sameOrigin=function(e){if(!e||!u)return!1;var t=this._toURL(e),s=this._window,i=s.location;return i.protocol===t.protocol&&i.hostname===t.hostname&&(i.port===t.port||i.port===""&&(t.port==80||t.port==443))};p.prototype._samePath=function(e){if(!u)return!1;var t=this._window,s=t.location;return e.pathname===s.pathname&&e.search===s.search};p.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function N(){var e=new p;function t(){return E.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=N,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(s){e.len=s}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(s){e.current=s}}),t.Context=v,t.Route=b,t}function E(e,t){if(typeof e=="function")return E.call(this,"*",e);if(typeof t=="function")for(var s=new b(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(s.middleware(arguments[i]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function Z(e){if(!e.handled){var t,s=this,i=s._window;s._hashbang?t=u&&this._getBase()+i.location.hash.replace("#!",""):t=u&&i.location.pathname+i.location.search,t!==e.canonicalPath&&(s.stop(),e.handled=!1,u&&(i.location.href=e.canonicalPath))}}function J(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function v(e,t,s){var i=this.page=s||E,a=i._window,n=i._hashbang,o=i._getBase();e[0]==="/"&&e.indexOf(o)!==0&&(e=o+(n?"#!":"")+e);var r=e.indexOf("?");this.canonicalPath=e;var c=new RegExp("^"+J(o));if(this.path=e.replace(c,"")||"/",n&&(this.path=this.path.replace("#!","")||"/"),this.title=g&&a.document.title,this.state=t||{},this.state.path=e,this.querystring=~r?i._decodeURLEncodedURIComponent(e.slice(r+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~r?e.slice(0,r):e),this.params={},this.hash="",!n){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=i._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}v.prototype.pushState=function(){var e=this.page,t=e._window,s=e._hashbang;e.len++,y&&t.history.pushState(this.state,this.title,s&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};v.prototype.save=function(){var e=this.page;y&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function b(e,t,s){var i=this.page=s||L,a=t||{};a.strict=a.strict||i._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=f(this.path,this.keys=[],a)}b.prototype.middleware=function(e){var t=this;return function(s,i){if(t.match(s.path,s.params))return s.routePath=t.path,e(s,i);i()}};b.prototype.match=function(e,t){var s=this.keys,i=e.indexOf("?"),a=~i?e.slice(0,i):e,n=this.regexp.exec(decodeURIComponent(a));if(!n)return!1;delete t[0];for(var o=1,r=n.length;o<r;++o){var c=s[o-1],l=this.page._decodeURLEncodedURIComponent(n[o]);(l!==void 0||!hasOwnProperty.call(t,c.name))&&(t[c.name]=l)}return!0};var L=N(),m=L,ee=L;m.default=ee;const te=`
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
          <a href="#ball-valves">BALL VALVES</a>
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
`,se=`
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
        <a href="#ball-valves">BALL VALVES</a>
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
  <img
    src="./assets/images/building-bg.jpeg"
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
        <a href="/about-us">ABOUT US</a>
        <a href="/steps" class="selected">VALVES STEPS</a>
        <a href="#ball-valves">BALL VALVES</a>
      </nav>
    </header>

    <section class="header-main-content">
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
      <img
        src="./assets/images/steps1.jpeg"
        alt="Product image"
        class="steps-product-image"
      />
    </div>
  </div>

  <div class="steps-container">
    <div class="steps-image-column">
      <img
        src="./assets/images/steps2.jpeg"
        alt="Product image"
        class="steps-product-image"
      />
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
      <img
        src="./assets/images/steps3.jpeg"
        alt="Product image"
        class="steps-product-image"
      />
    </div>
  </div>

  <div class="steps-container">
    <div class="steps-image-column">
      <img
        src="./assets/images/steps4.jpeg"
        alt="Product image"
        class="steps-product-image"
      />
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
            <img
                src="./assets/images/certification-star.png"
                alt="Cert image"
                class="steps-cert-image"
            />
            <button class="steps-cert-button" >MORE ABOUT OUR CERTIFICATIONS</button>
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
            It is dispatched to its destination through our own <b>national and international distribution chain</b>.
        </p>
        <button class="steps-contact-button" >CONTACT</button>    
      </div>
    </div>
    <div class="steps-image-column">
      <img
        src="./assets/images/steps5.jpeg"
        alt="Product image"
        class="steps-product-image"
      />
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
`,A=document.getElementById("app"),ie=()=>{m("/",()=>{A.innerHTML=te}),m("/about-us",()=>{A.innerHTML=se}),m("/steps",()=>{A.innerHTML=ae}),m()};document.addEventListener("DOMContentLoaded",()=>{ie()});
