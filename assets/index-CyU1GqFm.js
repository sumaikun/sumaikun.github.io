(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();document.querySelector("#app-about-us").innerHTML=`
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
`;document.querySelector("#app-steps").innerHTML=`
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
`;
