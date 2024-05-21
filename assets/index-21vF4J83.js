(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();var O=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},A=V,z=N,j=J,q=P,K=k,Y=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function N(e){for(var s=[],t=0,i=0,a="",n;(n=Y.exec(e))!=null;){var o=n[0],l=n[1],r=n.index;if(a+=e.slice(i,r),i=r+o.length,l){a+=l[1];continue}a&&(s.push(a),a="");var c=n[2],g=n[3],U=n[4],M=n[5],S=n[6],B=n[7],_=S==="+"||S==="*",G=S==="?"||S==="*",x=c||"/",W=U||M||(B?".*":"[^"+x+"]+?");s.push({name:g||t++,prefix:c||"",delimiter:x,optional:G,repeat:_,pattern:$(W)})}return i<e.length&&(a+=e.substr(i)),a&&s.push(a),s}function J(e){return P(N(e))}function P(e){for(var s=new Array(e.length),t=0;t<e.length;t++)typeof e[t]=="object"&&(s[t]=new RegExp("^"+e[t].pattern+"$"));return function(i){for(var a="",n=i||{},o=0;o<e.length;o++){var l=e[o];if(typeof l=="string"){a+=l;continue}var r=n[l.name],c;if(r==null){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to be defined')}if(O(r)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received "'+r+'"');if(r.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var g=0;g<r.length;g++){if(c=encodeURIComponent(r[g]),!s[o].test(c))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received "'+c+'"');a+=(g===0?l.prefix:l.delimiter)+c}continue}if(c=encodeURIComponent(r),!s[o].test(c))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+c+'"');a+=l.prefix+c}return a}}function F(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function $(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function C(e,s){return e.keys=s,e}function D(e){return e.sensitive?"":"i"}function Q(e,s){var t=e.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)s.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return C(e,s)}function X(e,s,t){for(var i=[],a=0;a<e.length;a++)i.push(V(e[a],s,t).source);var n=new RegExp("(?:"+i.join("|")+")",D(t));return C(n,s)}function Z(e,s,t){for(var i=N(e),a=k(i,t),n=0;n<i.length;n++)typeof i[n]!="string"&&s.push(i[n]);return C(a,s)}function k(e,s){s=s||{};for(var t=s.strict,i=s.end!==!1,a="",n=e[e.length-1],o=typeof n=="string"&&/\/$/.test(n),l=0;l<e.length;l++){var r=e[l];if(typeof r=="string")a+=F(r);else{var c=F(r.prefix),g=r.pattern;r.repeat&&(g+="(?:"+c+g+")*"),r.optional?c?g="(?:"+c+"("+g+"))?":g="("+g+")?":g=c+"("+g+")",a+=g}}return t||(a=(o?a.slice(0,-2):a)+"(?:\\/(?=$))?"),i?a+="$":a+=t&&o?"":"(?=\\/|$)",new RegExp("^"+a,D(s))}function V(e,s,t){return s=s||[],O(s)?t||(t={}):(t=s,s=[]),e instanceof RegExp?Q(e,s):O(e)?X(e,s,t):Z(e,s,t)}A.parse=z;A.compile=j;A.tokensToFunction=q;A.tokensToRegExp=K;var b=typeof document<"u",v=typeof window<"u",w=typeof history<"u",ee=typeof process<"u",L=b&&document.ontouchstart?"touchstart":"click",f=v&&!!(window.history.location||window.location);function d(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}d.prototype.configure=function(e){var s=e||{};this._window=s.window||v&&window,this._decodeURLComponents=s.decodeURLComponents!==!1,this._popstate=s.popstate!==!1&&v,this._click=s.click!==!1&&b,this._hashbang=!!s.hashbang;var t=this._window;this._popstate?t.addEventListener("popstate",this._onpopstate,!1):v&&t.removeEventListener("popstate",this._onpopstate,!1),this._click?t.document.addEventListener(L,this.clickHandler,!1):b&&t.document.removeEventListener(L,this.clickHandler,!1),this._hashbang&&v&&!w?t.addEventListener("hashchange",this._onpopstate,!1):v&&t.removeEventListener("hashchange",this._onpopstate,!1)};d.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};d.prototype._getBase=function(){var e=this._base;if(e)return e;var s=v&&this._window&&this._window.location;return v&&this._hashbang&&s&&s.protocol==="file:"&&(e=s.pathname),e};d.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};d.prototype.start=function(e){var s=e||{};if(this.configure(s),s.dispatch!==!1){this._running=!0;var t;if(f){var i=this._window,a=i.location;this._hashbang&&~a.hash.indexOf("#!")?t=a.hash.substr(2)+a.search:this._hashbang?t=a.search+a.hash:t=a.pathname+a.search+a.hash}this.replace(t,null,!0,s.dispatch)}};d.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(L,this.clickHandler,!1),v&&e.removeEventListener("popstate",this._onpopstate,!1),v&&e.removeEventListener("hashchange",this._onpopstate,!1)}};d.prototype.show=function(e,s,t,i){var a=new y(e,s,this),n=this.prevContext;return this.prevContext=a,this.current=a.path,t!==!1&&this.dispatch(a,n),a.handled!==!1&&i!==!1&&a.pushState(),a};d.prototype.back=function(e,s){var t=this;if(this.len>0){var i=this._window;w&&i.history.back(),this.len--}else setTimeout(e?function(){t.show(e,s)}:function(){t.show(t._getBase(),s)})};d.prototype.redirect=function(e,s){var t=this;typeof e=="string"&&typeof s=="string"&&I.call(this,e,function(i){setTimeout(function(){t.replace(s)},0)}),typeof e=="string"&&typeof s>"u"&&setTimeout(function(){t.replace(e)},0)};d.prototype.replace=function(e,s,t,i){var a=new y(e,s,this),n=this.prevContext;return this.prevContext=a,this.current=a.path,a.init=t,a.save(),i!==!1&&this.dispatch(a,n),a};d.prototype.dispatch=function(e,s){var t=0,i=0,a=this;function n(){var l=a.exits[i++];if(!l)return o();l(s,n)}function o(){var l=a.callbacks[t++];if(e.path!==a.current){e.handled=!1;return}if(!l)return se.call(a,e);l(e,o)}s?n():o()};d.prototype.exit=function(e,s){if(typeof e=="function")return this.exit("*",e);for(var t=new E(e,null,this),i=1;i<arguments.length;++i)this.exits.push(t.middleware(arguments[i]))};d.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var s=e.target,t=e.path||(e.composedPath?e.composedPath():null);if(t){for(var i=0;i<t.length;i++)if(t[i].nodeName&&t[i].nodeName.toUpperCase()==="A"&&t[i].href){s=t[i];break}}for(;s&&s.nodeName.toUpperCase()!=="A";)s=s.parentNode;if(!(!s||s.nodeName.toUpperCase()!=="A")){var a=typeof s.href=="object"&&s.href.constructor.name==="SVGAnimatedString";if(!(s.hasAttribute("download")||s.getAttribute("rel")==="external")){var n=s.getAttribute("href");if(!(!this._hashbang&&this._samePath(s)&&(s.hash||n==="#"))&&!(n&&n.indexOf("mailto:")>-1)&&!(a?s.target.baseVal:s.target)&&!(!a&&!this.sameOrigin(s.href))){var o=a?s.href.baseVal:s.pathname+s.search+(s.hash||"");o=o[0]!=="/"?"/"+o:o,ee&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var l=o,r=this._getBase();o.indexOf(r)===0&&(o=o.substr(r.length)),this._hashbang&&(o=o.replace("#!","")),!(r&&l===o&&(!f||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(l))}}}}};d.prototype._onpopstate=function(){var e=!1;return v?(b&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var i=this;if(t.state){var a=t.state.path;i.replace(a,t.state)}else if(f){var n=i._window.location;i.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}}):function(){}}();d.prototype._which=function(e){return e=e||v&&this._window.event,e.which==null?e.button:e.which};d.prototype._toURL=function(e){var s=this._window;if(typeof URL=="function"&&f)return new URL(e,s.location.toString());if(b){var t=s.document.createElement("a");return t.href=e,t}};d.prototype.sameOrigin=function(e){if(!e||!f)return!1;var s=this._toURL(e),t=this._window,i=t.location;return i.protocol===s.protocol&&i.hostname===s.hostname&&(i.port===s.port||i.port===""&&(s.port==80||s.port==443))};d.prototype._samePath=function(e){if(!f)return!1;var s=this._window,t=s.location;return e.pathname===t.pathname&&e.search===t.search};d.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function H(){var e=new d;function s(){return I.apply(e,arguments)}return s.callbacks=e.callbacks,s.exits=e.exits,s.base=e.base.bind(e),s.strict=e.strict.bind(e),s.start=e.start.bind(e),s.stop=e.stop.bind(e),s.show=e.show.bind(e),s.back=e.back.bind(e),s.redirect=e.redirect.bind(e),s.replace=e.replace.bind(e),s.dispatch=e.dispatch.bind(e),s.exit=e.exit.bind(e),s.configure=e.configure.bind(e),s.sameOrigin=e.sameOrigin.bind(e),s.clickHandler=e.clickHandler.bind(e),s.create=H,Object.defineProperty(s,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(s,"current",{get:function(){return e.current},set:function(t){e.current=t}}),s.Context=y,s.Route=E,s}function I(e,s){if(typeof e=="function")return I.call(this,"*",e);if(typeof s=="function")for(var t=new E(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(t.middleware(arguments[i]));else typeof e=="string"?this[typeof s=="string"?"redirect":"show"](e,s):this.start(e)}function se(e){if(!e.handled){var s,t=this,i=t._window;t._hashbang?s=f&&this._getBase()+i.location.hash.replace("#!",""):s=f&&i.location.pathname+i.location.search,s!==e.canonicalPath&&(t.stop(),e.handled=!1,f&&(i.location.href=e.canonicalPath))}}function te(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function y(e,s,t){var i=this.page=t||I,a=i._window,n=i._hashbang,o=i._getBase();e[0]==="/"&&e.indexOf(o)!==0&&(e=o+(n?"#!":"")+e);var l=e.indexOf("?");this.canonicalPath=e;var r=new RegExp("^"+te(o));if(this.path=e.replace(r,"")||"/",n&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&a.document.title,this.state=s||{},this.state.path=e,this.querystring=~l?i._decodeURLEncodedURIComponent(e.slice(l+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~l?e.slice(0,l):e),this.params={},this.hash="",!n){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}y.prototype.pushState=function(){var e=this.page,s=e._window,t=e._hashbang;e.len++,w&&s.history.pushState(this.state,this.title,t&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};y.prototype.save=function(){var e=this.page;w&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function E(e,s,t){var i=this.page=t||R,a=s||{};a.strict=a.strict||i._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=A(this.path,this.keys=[],a)}E.prototype.middleware=function(e){var s=this;return function(t,i){if(s.match(t.path,t.params))return t.routePath=s.path,e(t,i);i()}};E.prototype.match=function(e,s){var t=this.keys,i=e.indexOf("?"),a=~i?e.slice(0,i):e,n=this.regexp.exec(decodeURIComponent(a));if(!n)return!1;delete s[0];for(var o=1,l=n.length;o<l;++o){var r=t[o-1],c=this.page._decodeURLEncodedURIComponent(n[o]);(c!==void 0||!hasOwnProperty.call(s,r.name))&&(s[r.name]=c)}return!0};var R=H(),p=R,ae=R;p.default=ae;const ie=`
<section>
  <img src="./assets/images/home-bg1.png" alt="" class="home-header-background" />
  <main class="header-container" style="min-height: unset">
    <div class="header-content-wrapper">
      <header class="header-header">
        <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
        <nav class="header-navigation">
          <a href="/gate-valves">GATE VALVES</a>
          <a href="/check-valves">CHECK VALVES</a>
          <a href="/globe-valves">GLOBE VALVES</a>
          <a href="/trunnion-valves">TRUNNION VALVES</a>
          <a href="/floating-valves">FLOATING VALVES</a>
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
      <a style="text-decoration: none; cursor: pointer" href="mailto:contact@dervosamerica.com"
        class="home-header-cta-button">CONTACT</a>
      <p class="text-header-bajada">
        We provide a quick and reliable response for the supply of industrial
        valves. Our manufacturing process is certified by API International.
      </p>
    </div>
    <img src="./assets/images/home-valve.png" alt="" class="home-header-valve" />
  </section>
</section>

<section class="home-valve-section">
  <div class="home-valve-container">
    <section class="home-globe-valve-section">
      <div class="home-globe-valve-content">
        <img src="./assets/images/valve1.png" alt="Valve diagram" class="home-butterfly-valve-" loading="lazy" />
        <span class="home-globe-valve-text">GATE VALVE</span>
      </div>
    </section>

    <section class="home-globe-valve-section">
      <div class="home-globe-valve-content">
        <img src="./assets/images/valve2.png" alt="Globe valve" class="home-butterfly-valve-image" loading="lazy" />
        <span style="margin-left: 25px" class="home-globe-valve-text">SWING VALVE</span>
      </div>
    </section>

    <section class="home-ball-valve-section">
      <div class="home-globe-valve-content">
        <img src="./assets/images/valve3.png" alt="Ball valve" class="home-butterfly-valve-image" loading="lazy" />
        <span class="home-globe-valve-text">GLOBE VALVE</span>
      </div>
    </section>

    <section class="home-butterfly-valve-section">
      <div class="home-globe-valve-content">
        <img src="./assets/images/valve4.png" alt="Butterfly valve" class="home-butterfly-valve-image" loading="lazy" />
        <span class="home-globe-valve-text">BALL VALVE</span>
      </div>
    </section>

    <section class="home-butterfly-valve-section">
      <div class="home-globe-valve-content">
        <img src="./assets/images/valve5.png" alt="Butterfly valve" class="home-butterfly-valve-image" loading="lazy" />
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
  <!-- <video
    autoplay
    loop
    muted
    playsinline
    style="position: absolute; z-index: 3; left: 0"
  >
    <source
      src="./assets/videos/40_sss_loop_compressed.webm"
      type="video/webm"
    />
  </video> -->
  <img src="./assets/images/bg-valve-home1.jpeg" alt="" class="home-first-background-image" />
  <img src="./assets/images/first-valve.png" alt="API 6FD Fire Testing Standard for Valves"
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
  <video autoplay loop muted playsinline style="position: absolute; z-index: 3; left: 0">
    <source src="./assets/videos/WhiteLiquislashtranAlph_compressed.webm" type="video/webm" />
  </video>
  <img src="./assets/images/bg-team.jpeg" alt="" class="home-first-background-image" />
  <img src="./assets/images/second-valve.png" alt="API 6FD Fire Testing Standard for Valves"
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

<section class="valves-portfolio"></br>
  <h2 class="valves-title-portfolio">Our Valves Portfolio</h2>
  <div class="valve-card">
    <img src="./assets/images/check_valve 1 (2).png" alt="Check Valve">
    <p style="font-size: 32px; font-family: Raleway; margin-bottom: 5;"> Check <strong style="color: #00A39F;">Valve</strong></p>
  </div>
  <div class="valve-card middle-card">
    <img src="./assets/images/gate_valve 1.png" alt="Gate Valve">
    <p style="font-size: 32px; font-family: Raleway; margin-bottom: 5;">Gate <strong style="color: #00A39F;">Valve</strong></p>
  </div>
  <div class="valve-card">
    <img src="./assets/images/valge-gloves-2 1 1.png" alt="Globe Valve">
    <p style="font-size: 32px; font-family: Raleway; ;">Globe <strong style="color: #00A39F;">Valve</strong></p>
  </div>
</br>
</section>

<section class="home-info-certifications-section">
  <div class="home-info-certifications-container">
    <div class="home-info-certifications-grid">
      <div class="home-info-certification-item">
        <div class="home-info-certification-content">
          <div class="home-info-certification-header">
            <img src="./assets/images/certificate-info1.png" alt="Operational Certifications Icon"
              class="home-info-certification-icon" />
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
            <img src="./assets/images/certificate-info2.png" alt="Operational Certifications Icon"
              class="home-info-certification-icon" />
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
            <img src="./assets/images/certificate-info3.png" alt="Operational Certifications Icon"
              class="home-info-certification-icon home-info-certificate-gears" />
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
`,ne=`
<main class="header-container container-parallax-about">
  <!-- <img src="./assets/images/header_bg.jpeg" alt="" class="header-background-image" /> -->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves">GATE VALVES</a>
        <a href="/check-valves">CHECK VALVES</a>
        <a href="/globe-valves">GLOBE VALVES</a>
        <a href="/trunnion-valves">TRUNNION VALVES</a>
        <a href="/floating-valves">FLOATING VALVES</a>
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
      <img  src="./assets/images/arrow.png" class="header-arrow flotation-container" style="margin-bottom: 3%; margin-top:6%;"/>
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
    <img src="./assets/images/globe_valves.png" alt="" class="about-product-blode-valve-image" />
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
      <img src="./assets/images/Eric Wong - Ceo Dervos.png" alt="Profile picture of Nestor Morales"
        class="about-profile-image" />
    </section>
    <section class="about-profile-details-column">
      <div class="about-profile-details-wrapper">
        <h1 class="about-profile-name">
          <span class="about-profile-name-accent">ERIC</span> WANG
        </h1>
        <p class="about-profile-title">
          CEO - Dervos
        </p>
        <!-- <ul class="about-profile-qualifications">
          <li><strong>Mechanical engineer</strong></li>
          <li>Project Management <strong>Master's Degree.</strong></li>
          <li><strong>PhD,</strong> Economics, Management and Politics</li>
          <li><strong>Master</strong> of Business Administration</li>
        </ul> -->
        <img src="./assets/images/blue-linkedin.png" alt="" class="about-profile-logo" />
      </div>
    </section>
  </div>
  <img src="./assets/images/bg-team.jpeg" class="about-profile-image-bg" />
  <div class="about-profile-container">
    <section class="about-profile-details-column">
      <div class="about-profile-details-wrapper">
        <h1 class="about-profile-name">
          <span class="about-profile-name-accent">SANTIAGO</span> GIRON
        </h1>
        <p class="about-profile-title">
          CEO - Dervos America
        </p>
        <!--<ul class="about-profile-qualifications">
          <li><strong>Mechanical engineer</strong></li>
          <li>Project Management <strong>Master's Degree.</strong></li>
          <li><strong>PhD,</strong> Economics, Management and Politics</li>
          <li><strong>Master</strong> of Business Administration</li>
        </ul>-->
        <img src="./assets/images/blue-linkedin.png" alt="" class="about-profile-logo" />
      </div>
    </section>
    <section class="about-profile-image-column">
      <img src="./assets/images/Santiago Giron - Ceo Dervos America.png" />
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
              At <strong>DERVOS AMERICA</strong> our Quality Control Team oversees each valve manufactured, meets the standards and
              criteria set, and complies with the oil and gas industry concerning material traceability, quality
              control, testing, and traceability. That includes (NIST) which provides a policy on metrological
              traceability. ISO 9001:2015 outlines requirements for quality management systems, and (API) includes <strong>API
              6D</strong>, which outlines requirements for pipeline valves and is certified with full traceability by the DERVOS
              AMERICA team.
            </p>
            <img src="./assets/images/dervos_logo.png" alt="Company image" class="about-company-image" />
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
      <button onclick="location.href='mailto:contact@dervosamerica.com';" class="about-partner-cta">CONTACT NOW</button>
    </div>
  </div>
</section>
`,oe=`
<main class="header-container container-parallax">
<!-- <img src="./assets/images/building-bg.jpeg" alt="" class="header-background-image" />-->

    <div class="header-content-wrapper">
        <header class="header-header">
        <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
            <nav class="header-navigation">
                <a href="/gate-valves">GATE VALVES</a>
                <a href="/check-valves">CHECK VALVES</a>
                <a href="/globe-valves">GLOBE VALVES</a>
                <a href="/trunnion-valves">TRUNNION VALVES</a>
                <a href="/floating-valves">FLOATING VALVES</a>
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
            <div class="parallax-background"></div><!-- Div para el fondo con efecto parallax -->
                <h1 class="header-main-heading">
                    WE DESIGN AND CARRY OUT ALL THE STEPS IN THE CREATION OF OUR PRODUCTS.
                </h1>
                 <img  src="./assets/images/arrow.png" class="header-arrow flotation-container"  style="height:50px; margin: 5%"/>
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
                <a style="text-decoration: none;  cursor: pointer;" href="mailto:contact@dervosamerica.com" class="home-header-cta-button">CONTACT</a> 
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

`,le=`
<main class="header-container container-parallax-gate-valves">
<!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />-->

    <div class="header-content-wrapper">
        <header class="header-header">
        <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
            <nav class="header-navigation">
                <a href="/gate-valves">GATE VALVES</a>
                <a href="/check-valves">CHECK VALVES</a>
                <a href="/globe-valves">GLOBE VALVES</a>
                <a href="/trunnion-valves">TRUNNION VALVES</a>
                <a href="/floating-valves">FLOATING VALVES</a>
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
                <img src="./assets/images/arrow.png" class="header-arrow flotation-container" style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
          <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
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
            <img src="./assets/images/valves-equipment-1.jpeg" alt="Product image" class="valves-product-image first-image-valve" />
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
                <a id="downloadLink" href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view" target="_blank" class="valves-contact-button" style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
                     DOWNLOAD TECHNICAL FILE
                </a>
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
    <h4 class="gate-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
    <a href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view" target="_blank" class="download-link" download >DOWNLOAD TECHNICAL FILE</a>
    <div class="background-image"></div>
</div>
`,re=`
<main class="header-container container-parallax-gate-check">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />-->
  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves">GATE VALVES</a>
        <a href="/check-valves">CHECK VALVES</a>
        <a href="/globe-valves">GLOBE VALVES</a>
        <a href="/trunnion-valves">TRUNNION VALVES</a>
        <a href="/floating-valves">FLOATING VALVES</a>
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
        <img src="./assets/images/arrow.png" class="header-arrow flotation-container" style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
          <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>
<div class="check-content">
  <img class="check-bg-right check-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="check-bg-right check-middle-bg" />
  <img src="./assets/images/bg-products.png" class="check-bg-right check-third-bg" />
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
      <img src="./assets/images/SwingCheck6.png" alt="Product image" class="check-product-image-first" />
    </div>
  </div>
  </br>
  <div class="check-container check-second-container">
    <div class="check-image-column">
      <img src="./assets/images/swingCheck02.png" alt="Product image" class="check-product-image image-check-second" />
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
        <a id="downloadLink" href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view"
          target="_blank" class="check-contact-button"
          style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
          DOWNLOAD TECHNICAL FILE
        </a>
      </div>
    </div>
    <div class="check-image-column">
      <img src="./assets/images/swingCheck03.png" alt="Product image" class="check-product-image third-image-check" style=" width: 778px;
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
      <img src="./assets/images/valves-equipment-4.jpeg" alt="Product image" class="check-product-image" />
    </div>
    <div class="check-content-column">
      <div class="check-content-wrapper check-right">
        <div class="check-section">
          <div class="check-section-title">SWING CHECK <strong style="color:#00A39F;"> VALVE</strong></div>
          <h5 style="color:#959595; font-size:18px; font-family:Raleway">Bolted, Cover, Swing Type Disc, Threaded or
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
              to ANSI B16.34 on\u2028 request
            </li>
            <li> B. W. Ends to <strong>ANSI B16.25</strong></li>
            <li> Manufacturing to <strong> NACE MR-01-75 on request </strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="centered-title">STANDARD MATERIALS <strong style="color: #00A39F;"> SPECIFICATIONS</strong></div></br>
  <img src="./assets/images/Material_specificiations.png" alt="img-pdf" class="img-pdf-section-check">
  <img src="./assets/images/Material_specificiations2.png" alt="img-pdf" class="img-pdf-section-check">

  <div class="centered-title">TEST PRESSURE TO <strong style="color: #00A39F;">API598</strong></div></br>
  <img src="./assets/images/pdf-3.jpeg" alt="img-pdf" class="img-pdf-section-check">
</div>

<div class="download-section">
  <h4 class="check-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <a href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view" target="_blank" class="download-link"
    download>DOWNLOAD TECHNICAL FILE</a>
  <div class="background-image"></div>
</div>
`,ce=`
<main class="header-container container-parallax">
  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves">GATE VALVES</a>
        <a href="/check-valves">CHECK VALVES</a>
        <a href="/globe-valves">GLOBE VALVES</a>
        <a href="/trunnion-valves">TRUNNION VALVES</a>
        <a href="/floating-valves">FLOATING VALVES</a>
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
      <!--<h6 style="color: white; font-size: 38px; margin-bottom:15%; font-family: Raleway; " >Our manufacturing process is certificated by API International.\u2028You can count on the quality of our valves.</h6>-->
      <img class="flotation-container" src="./assets/images/arrow.png" class="header-arrow"
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

  <img src="./assets/images/certificado.png" alt="img background" class="img-background-certifications fadein-certification">

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
      <img src="./assets/images/checkout.png" alt="Icon 1" class="fade">
      <h3>STEM BACKSEAT TEST</h3>
      <div class="line-divider-list-icons"></div>
      <p>Pressure at 1.1 times valve rating for 2 to 5 minutes depending on valve size</p>
    </div>
  
    <div class="icon-container">
      <img src="./assets/images/checkout.png" alt="Icon 2" class="fade">
      <h3>HYDROSTATIC SHELL TEST</h3>
      <div class="line-divider-list-icons"></div>
      <p>Pressure at 1.5 times valve rating for 2 to 30 minutes depending on valve size</p>
    </div>
  
    <div class="icon-container">
      <img src="./assets/images/checkout.png" alt="Icon 3" class="fade">
      <h3>HYDROSTATIC SEAT TEST</h3>
      <div class="line-divider-list-icons"></div>
      <p>Pressure at 1.1 times valve rating for 2 to 5 minutes depending on valve size</p>
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
`,de=`
<main class="header-container container-parallax-trunnion-valves">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />-->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves">GATE VALVES</a>
        <a href="/check-valves">CHECK VALVES</a>
        <a href="/globe-valves">GLOBE VALVES</a>
        <a href="/trunnion-valves">TRUNNION VALVES</a>
        <a href="/floating-valves">FLOATING VALVES</a>
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
        <img src="./assets/images/arrow.png" class="header-arrow flotation-container" style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
          <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>
<div class="trunnion-content">
  <img class="trunnion-bg-right trunnion-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="trunnion-bg-right trunnion-middle-bg" />
  <img src="./assets/images/bg-products.png" class="trunnion-bg-right trunnion-third-bg" />
  <div class="trunnion-container">
    <div class="trunnion-content-column trunnion-first-column">
      <div class="trunnion-content-wrapper">
        <div class="trunnion-section">
          <h1 class="trunnion-section-title" style="font-size: 80px;">TRUNNION BALL<strong style="color: #00A39F;"> VALVE</strong> </h1>
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
      <img src="./assets/images/trunnion1.png" alt="Product image" class="trunnion-product-image-first" />
    </div>
  </div>
  </br>
 
  <div class="valves-container second-container container-trunnion">
    <div class="valves-image-column">
        <img src="./assets/images/trunnion2.png" alt="Product image" class="valves-product-image second-trunnion-img" />
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
        <a id="downloadLink" href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view"
          target="_blank" class="trunnion-contact-button"
          style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
          DOWNLOAD TECHNICAL FILE
        </a>
      </div>
    </div>
    <div class="trunnion-image-column">
      <img src="./assets/images/trunnion3.png" alt="Product image" class="trunnion-product-image" />
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
  <div class="trunnion-section-title">TRUNNION BALL <strong style="color:#00A39F;"> VALVE</strong></div>

  <div class="trunnion-container trunnion-second-container" style="text-align: left;">

    <div class="trunnion-image-column">
      <!--<img src="./assets/images/Trunnion_upscaled 1.png" alt="Product image" class="trunnion-product-image" />-->
    </div>

    <div class="trunnion-content-column">
      <div class="trunnion-content-wrapper trunnion-right">
        <div class="trunnion-section">
        </div>
        <div class="trunnion-section">
          <h4 style="font-size: 24px; color: black; font-family:Raleway; font-weight: bold;">STANDARD MATERIALS <strong
              style="color:#00A39F;">SPECIFICATIONS </strong></h4>
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
      </div>
    </div>
  </div>
  <img src="./assets/images/Trunnion_upscaled 1.png" alt="img-pdf" class="img-pdf-section-trunnion" style="margin-top: -48%;
  margin-right: 5px;">
  <div class="centered-title">DIMENSIONS AND <strong style="color:#00A39F;"> WEIGHT</strong></div>
  <img src="./assets/images/Trunnion_2 1.png" alt="img-pdf" class="img-pdf-section-trunnion-last">
  <img src="./assets/images/Trunnion_! 1.png" alt="img-pdf" class="img-pdf-section-trunnion-last">
  <img src="./assets/images/Trunnion_3 1.png" alt="img-pdf" class="img-pdf-section-trunnion-last">
  <img src="./assets/images/Trunnion_4 1.png" alt="img-pdf" class="img-pdf-section-trunnion-last">
</div>

<div class="download-section">
  <h4 class="trunnion-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <a href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view" target="_blank" class="download-link"
    download>DOWNLOAD TECHNICAL FILE</a>
  <div class="background-image"></div>
</div>
`,ge=`
<main class="header-container container-parallax-gate-floating">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />-->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves">GATE VALVES</a>
        <a href="/check-valves">CHECK VALVES</a>
        <a href="/globe-valves">GLOBE VALVES</a>
        <a href="/trunnion-valves">TRUNNION VALVES</a>
        <a href="/floating-valves">FLOATING VALVES</a>
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
      <img src="./assets/images/arrow.png" class="header-arrow flotation-container"
        style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
      <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>


<div class="trunnion-content">
  <img class="trunnion-bg-right trunnion-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="trunnion-bg-right trunnion-middle-bg" />
  <img src="./assets/images/bg-products.png" class="trunnion-bg-right trunnion-third-bg" />
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
    <div class="trunnion-image-column ">
      <img src="./assets/images/floating_valve011.png" alt="Product image" class="floating-product-image-first floating-valv" />
    </div>
  </div>
  </br>
 
  <div class="valves-container second-container container-floating" style="margin-top: 45%; margin-right: 25%;">
    <div class="floating-image-column">
        <img src="./assets/images/floating_valve022.png" alt="Product image" class="valves-product-image second-floating-img" />
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
          <a id="downloadLink" href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view" target="_blank" class="valves-contact-button" style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
               DOWNLOAD TECHNICAL FILE
          </a>
      </div>
  </div>
  <div class="valves-image-column">
      <img src="./assets/images/floating_valve0333 1.png" alt="Product image" class="valves-product-image" style="margin-top: 125px"/>
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
  <h4 class="floating-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <a href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view" target="_blank" class="download-link"
    download>DOWNLOAD TECHNICAL FILE</a>
  <div class="background-image"></div>
</div>
`,ve=()=>{console.log("I'm working");let e=document.querySelector(".typeJsText");console.log("typeJsText",e);let s=["FULLY.","SUCESS.","AUTOMATED.","VALVE PURCHASING.","PROCCESSES."],t=0,i=0,a=!1;function n(){e?a?i>=0?(e.innerHTML=e.innerHTML.substring(0,i),i--,setTimeout(n,100)):(a=!1,t=(t+1)%s.length,setTimeout(n,500)):i<s[t].length?(e.innerHTML+=s[t].charAt(i),i++,setTimeout(n,100)):setTimeout(()=>{a=!0,n()},1e3):console.log("Element .typeJsText not found")}n()},h=()=>{const e=document.querySelectorAll(".dropdown");if(console.log("Number of dropdowns found:",e.length),e.length===0){console.warn("No dropdown elements found!");return}e.forEach(s=>{const t=s,i=t.querySelector(".dropdown-content");if(!i){console.warn("No dropdown-content element found in a dropdown!");return}let a;const n=()=>{console.log("Showing dropdown content for",t),i.style.display="block",a&&window.clearTimeout(a)},o=()=>{a=window.setTimeout(()=>{console.log("Hiding dropdown content for",t),i.style.display="none"},1e3)};t.addEventListener("mouseover",n),i.addEventListener("mouseover",n),t.addEventListener("mouseleave",o),i.addEventListener("mouseleave",o)})},T=()=>{window.addEventListener("scroll",()=>{const e=document.querySelector(".parallax-background");if(e){const s=window.pageYOffset;e.style.backgroundPositionY=`${s*.2}px`}})},u=()=>{const e=window.scrollY||document.documentElement.scrollTop,s=document.querySelector(".sticky-header-container");e>75?window.hasOwnProperty("processActivated")||(console.log("do it here"),s&&!s.classList.contains("animate-sticky-header")&&(s.classList.add("animate-sticky-header"),console.log("Animation triggered"),setTimeout(()=>{},3e3))):s.classList.remove("animate-sticky-header")},pe=`

<main class="header-container container-parallax-globe-valves">
  <!-- <img src="./assets/images/valve-2.jpeg" alt="" class="header-background-image header-image-background" />  -->

  <div class="header-content-wrapper">
    <header class="header-header">
      <a href="/"><img src="./assets/images/logo.png" alt="Company Logo" class="header-logo" /></a>
      <nav class="header-navigation">
        <a href="/gate-valves">GATE VALVES</a>
        <a href="/check-valves">CHECK VALVES</a>
        <a href="/globe-valves">GLOBE VALVES</a>
        <a href="/trunnion-valves">TRUNNION VALVES</a>
        <a href="/floating-valves">FLOATING VALVES</a>
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
      <img src="./assets/images/arrow.png" class="header-arrow flotation-container"
        style="height:50px; margin: 5%; filter: grayscale(100%) brightness(50%) contrast(50%);" />
      <p class="header-scroll-text" style="margin-top: 20px; color:#3F3F3F">SCROLL BELOW</p>
    </section>
  </div>
</main>
<div class="gloves-valves-content">
  <img class="gloves-valves-bg-right valves-first-bg" />
  <img src="./assets/images/bg-team.jpeg" class="gloves-valves-bg-right gloves-valves-middle-bg" />
  <img src="./assets/images/bg-products.png" class="gloves-valves-bg-right gloves-valves-third-bg" />
  <div class="gloves-valves-container">
    <div class="gloves-valves-content-column gloves-valves-first-column">
      <div class="gloves-valves-content-wrapper">
        <div class="gloves-valves-section">
          <h1 class="gloves-valves-section-title" style="font-size: 80px">GLOVE<strong style="color: #00A39F;">
              GATE</strong> </h1>
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
      <img src="./assets/images/Globe-6.png" alt="Product image" class="gloves-valves-product-image" />
    </div>
  </div>
  </br>
  <div class="gloves-valves-container second-container">
    <div class="gloves-valves-image-column">
      <img src="./assets/images/globe_valves.png" alt="Product image" class="gloves-valves-product-image" />
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
        <a id="downloadLink" href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view"
          target="_blank" class="gloves-valves-contact-button"
          style="align-items: center; justify-content: center; display: inline-flex; text-decoration: none; color: white;">
          DOWNLOAD TECHNICAL FILE
        </a>

      </div>
    </div>
    <div class="gloves-valves-image-column third-img-gloves">
      <img src="./assets/images/valge-gloves-2.png" alt="Product image"
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

<img src="./assets/images/pdf-2.jpeg" alt="img-pdf" class="img-pdf-section-gloves">
<div class="centered-title">TEST PRESSURE TO <strong style="color: #00A39F;">API598</strong></div>
<img src="./assets/images/pdf-3.jpeg" alt="img-pdf" class="img-pdf-section-gloves">
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
    <img src="./assets/images/Globe5_ 1.png" alt="Product image"
      class="gloves-valves-product-image img-gloves-fourth" />
  </div>
</div>
<img src="./assets/images/Globe3_ 1.png" alt="img-pdf" class="img-pdf-section-gloves">

</br> </br>
</div>

<!-- <img src="./assets/images/Globe3_ 1.png" alt="img-pdf" class="gloves-second-img">-->

<div class="gloves-valves-download-section">
  <h4 class="gloves-valves-section-text">A DEEP LOOK AT THE TECHNICAL SHEET</h4>
  <a href="https://drive.google.com/file/d/1F3BFhq_1TN5DpIUkTlbCGl0J9-A5FaFS/view" class="gloves-valves-download-link"
    target="_blank">DOWNLOAD TECHNICAL FILE</a>
  <div class="gloves-valves-background-image"></div>
</div>
`,m=document.getElementById("app"),he=()=>{p("/",()=>{m.innerHTML=ie,ve(),h(),window.addEventListener("scroll",u)}),p("/about-us",()=>{m.innerHTML=ne,h(),window.addEventListener("scroll",u)}),p("/steps",()=>{m.innerHTML=oe,T(),h(),window.addEventListener("scroll",u)}),p("/gate-valves",()=>{m.innerHTML=le,h(),window.addEventListener("scroll",u)}),p("/globe-valves",()=>{m.innerHTML=pe,h(),window.addEventListener("scroll",u)}),p("/check-valves",()=>{m.innerHTML=re,h(),window.addEventListener("scroll",u)}),p("/certifications",()=>{m.innerHTML=ce,T(),h(),window.addEventListener("scroll",u)}),p("/trunnion-valves",()=>{m.innerHTML=de,T(),h(),window.addEventListener("scroll",u)}),p("/floating-valves",()=>{m.innerHTML=ge,T(),h(),window.addEventListener("scroll",u)}),p()};document.addEventListener("DOMContentLoaded",()=>{he()});
