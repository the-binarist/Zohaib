/* A progressive layer over the supplied site: natural page scrolling remains untouched. */
(() => {
  const screens = [
    { number: '01', label: 'Home', title: 'The first <em>impression.</em>', description: 'A clear promise, a piece of proof, and one unmistakable next step.', path: '', test: 'home' },
    { number: '02', label: 'Services', title: 'Make it <em>easy</em> to choose.', description: 'Honest packages and useful detail replace the usual wall of agency jargon.', path: '', test: 'services' },
    { number: '03', label: 'About', title: 'Meet the <em>maker.</em>', description: 'A human story behind the work. The person you brief is the person who builds.', path: '', test: 'about' },
    { number: '04', label: 'Mobile', title: 'The same care. <em>Everywhere.</em>', description: 'The story holds together on the smallest screen, without losing its character.', path: '', test: 'mobile' }
  ];

  const breakpoints = [
    { number: '01', label: 'Desktop', width: '96%', title: 'Room to <em>breathe.</em>', description: 'A two-column introduction and full navigation let the work take centre stage.', test: 'desktop' },
    { number: '02', label: 'Laptop', width: '76%', title: 'A little <em>closer.</em>', description: 'The same system tightens its spacing without losing the hierarchy.', test: 'laptop' },
    { number: '03', label: 'Tablet', width: '54%', title: 'Made to <em>adapt.</em>', description: 'The navigation simplifies and the image moves below the message.', test: 'tablet' },
    { number: '04', label: 'Phone', width: '30%', title: 'Nothing <em>left out.</em>', description: 'One column, generous tap targets, and a complete story in your hand.', test: 'phone' }
  ];

  const nav = '<div class="enh-site-nav"><span class="enh-site-logo"><b><i class="zh-sharp" aria-hidden="true"></i></b> zohaib</span><span class="enh-site-links"><span>Work</span><span>Services</span><span>About</span><span>Journal</span></span><span class="enh-mini-cta">Start a project ↗</span></div>';
  const ART = window.__ART || {};
  const art = (key) => ART[key] || '';
  const star = '<svg class="v67-star" viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><rect x="43" y="3" width="14" height="94" rx="7"/><rect x="43" y="3" width="14" height="94" rx="7" transform="rotate(45 50 50)"/><rect x="43" y="3" width="14" height="94" rx="7" transform="rotate(90 50 50)"/><rect x="43" y="3" width="14" height="94" rx="7" transform="rotate(135 50 50)"/></g></svg>';
  const ico = {
    launch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.2"/><path d="M8.6 15.4 15.4 8.6M9.4 8.6h6v6"/></svg>',
    identity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="6.2"/><circle cx="15" cy="12" r="6.2"/></svg>',
    care: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-9"/><path d="M12 12C12 7.6 8.8 5 4.6 5c0 4.4 3 7 7.4 7Z"/><path d="M12 14.5c0-3.6 2.6-5.8 6.6-5.8 0 3.7-2.6 5.8-6.6 5.8Z"/></svg>'
  };
  const studioSvg = '<svg class="v67-studio-svg" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>'
    + '<linearGradient id="v67w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4ecdd"/><stop offset="1" stop-color="#dccdb2"/></linearGradient>'
    + '<linearGradient id="v67d" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9c6a49"/><stop offset=".5" stop-color="#7d5036"/><stop offset="1" stop-color="#5a3624"/></linearGradient>'
    + '<linearGradient id="v67l" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff8e6" stop-opacity=".78"/><stop offset="1" stop-color="#fff8e6" stop-opacity="0"/></linearGradient>'
    + '<radialGradient id="v67v" cx=".5" cy=".46" r=".78"><stop offset=".55" stop-color="#2a140c" stop-opacity="0"/><stop offset="1" stop-color="#2a140c" stop-opacity=".42"/></radialGradient>'
    + '<filter id="v67b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>'
    + '<filter id="v67g"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 .2  0 0 0 0 .12  0 0 0 0 .08  0 0 0 .5 0"/></filter></defs>'
    + '<rect width="800" height="900" fill="url(#v67w)"/>'
    + '<g filter="url(#v67b)" opacity=".9"><path d="M470 0h240L430 640H150Z" fill="url(#v67l)"/><path d="M640 0h120L560 520H440Z" fill="url(#v67l)" opacity=".7"/></g>'
    + '<g transform="translate(96 118) rotate(-3)"><rect width="188" height="244" fill="#fbf7ee" stroke="#d8cbb3"/><rect x="18" y="20" width="152" height="76" fill="none" stroke="#6e0b17" stroke-width="2.4"/><path d="M18 20 170 96M170 20 18 96" stroke="#6e0b17" stroke-width="1.4" opacity=".55"/><rect x="18" y="116" width="72" height="9" fill="#c9bba1"/><rect x="18" y="136" width="152" height="6" fill="#ddd2bd"/><rect x="18" y="152" width="128" height="6" fill="#ddd2bd"/><rect x="18" y="186" width="58" height="22" rx="11" fill="none" stroke="#6e0b17" stroke-width="2"/><circle cx="94" cy="-6" r="7" fill="#b84a2e"/><path d="M0 0H188" stroke="#fff" stroke-opacity=".6"/></g>'
    + '<g transform="translate(330 150)"><path d="M0 0v118" stroke="#3a2418" stroke-width="3"/><path d="M-62 160Q-62 112 0 112T62 160Z" fill="#b84a2e"/><path d="M-62 160Q-62 112 0 112T62 160Z" fill="url(#v67l)" opacity=".5"/><ellipse cx="0" cy="161" rx="62" ry="7" fill="#f6dca0"/></g>'
    + '<rect x="0" y="560" width="800" height="26" fill="#a47750"/><rect x="0" y="586" width="800" height="314" fill="url(#v67d)"/>'
    + '<path d="M0 586H800" stroke="#e9c59b" stroke-opacity=".7" stroke-width="2"/>'
    + '<ellipse cx="300" cy="708" rx="238" ry="18" fill="#2a140c" opacity=".35"/>'
    + '<g transform="translate(96 584) skewX(-6)"><path d="M0 40 160 0 160 118 0 156Z" fill="#fbf6ea"/><path d="M160 0 320 40 320 156 160 118Z" fill="#f3ebd9"/><path d="M160 0V118" stroke="#cdbd9f" stroke-width="3"/><path d="M0 156 160 118 320 156 320 168 160 130 0 168Z" fill="#6e0b17"/><g stroke="#6e0b17" stroke-width="2.4" fill="none"><rect x="26" y="52" width="86" height="46" transform="skewY(-14)"/><path d="M36 128 120 108" stroke-width="3" opacity=".5"/></g><g fill="#d6c8ac"><path d="M196 36 296 60 296 70 196 46Z"/><path d="M196 62 276 82 276 90 196 70Z"/></g><rect x="198" y="94" width="74" height="40" rx="2" fill="none" stroke="#6e0b17" stroke-width="2.4" transform="skewY(14) translate(0 -30)"/></g>'
    + '<g transform="translate(70 650) rotate(-9)"><rect width="250" height="12" rx="6" fill="#d7a53b"/><path d="M250 0l34 6-34 6Z" fill="#f1d6a8"/><path d="M270 3.4l14 2.6-14 2.6Z" fill="#2a140c"/><rect width="250" height="3.4" y="1.5" rx="2" fill="#fff" opacity=".35"/></g>'
    + '<g transform="translate(560 612)"><ellipse cx="42" cy="108" rx="62" ry="9" fill="#2a140c" opacity=".4"/><path d="M0 18h86v70q0 26-26 26H26Q0 114 0 88Z" fill="#faf5e9"/><path d="M86 38h20q22 0 22 22t-22 22H86" fill="none" stroke="#faf5e9" stroke-width="12"/><ellipse cx="43" cy="18" rx="43" ry="10" fill="#3a1a0e"/><path d="M0 18h86v70q0 26-26 26H26Q0 114 0 88Z" fill="url(#v67l)" opacity=".6"/><g fill="none" stroke="#fffaf0" stroke-width="3.4" stroke-linecap="round" opacity=".75"><path d="M28 -8q-12-18 0-34t0-34"/><path d="M52 -4q-12-18 0-34t0-34"/></g></g>'
    + '<g transform="translate(646 330)"><path d="M0 230c0-70 18-120 22-190M22 230c8-60 44-96 86-140M22 230c-6-52-40-82-86-108" fill="none" stroke="#4d6b3a" stroke-width="4" stroke-linecap="round"/><g fill="#5f8147"><ellipse cx="22" cy="30" rx="16" ry="38" transform="rotate(8 22 30)"/><ellipse cx="108" cy="82" rx="14" ry="36" transform="rotate(58 108 82)"/><ellipse cx="-64" cy="116" rx="14" ry="36" transform="rotate(-58 -64 116)"/><ellipse cx="62" cy="136" rx="10" ry="26" transform="rotate(38 62 136)" fill="#74964f"/></g><path d="M-36 230h116l-14 98q-2 12-14 12H-12q-12 0-14-12Z" transform="translate(0 -8)" fill="#b8573a"/><path d="M-36 222h116v18H-36Z" fill="#c9694a"/></g>'
    + '<rect width="800" height="900" filter="url(#v67g)" opacity=".5"/><rect width="800" height="900" fill="url(#v67v)"/></svg>';

  const sceneHtml = `
    <article class="enh-scene is-active" data-scene="0" data-testid="story-scene-home" aria-hidden="false">
      ${nav}
      <div class="enh-home-content v67-home">
        <div class="v67-copy">
          <div class="enh-site-eyebrow v67-pill"><span class="enh-dot"></span> Booking new projects</div>
          <h4>Thoughtful <em>websites</em> for small businesses &amp; founders.</h4>
          <p>I design and build websites — one person from first idea to launch.</p>
          <div class="enh-home-actions"><span class="enh-mini-cta">Start a project ↗</span><span>See the work</span></div>
          <div class="v67-proof"><span class="v67-avs"><i>AK</i><i>MR</i><i>JS</i></span><span class="v67-proof-t"><b>40+</b> sites launched<em></em><b>2 wks</b> typical launch</span></div>
        </div>
        <div class="v67-work" aria-hidden="true">
          <figure class="v67-wcard v67-wcard-a"><img src="${art('ceramics')}" alt=""><figcaption><b>Ceramics studio</b><small>Brand + website</small></figcaption></figure>
          <figure class="v67-wcard v67-wcard-b"><img src="${art('cafe')}" alt=""><figcaption><b>Neighbourhood café</b><small>Launch site</small></figcaption></figure>
          <span class="v67-wtag">Selected work<i>01 — 02</i></span>
        </div>
      </div>
      <div class="enh-site-footer"><span>01 Strategy</span><span>02 Design</span><span>03 Development</span><span>04 Launch &amp; care</span></div>
    </article>
    <article class="enh-scene" data-scene="1" data-testid="story-scene-services" aria-hidden="true">
      ${nav}
      <div class="enh-services-content v67-svc">
        <div class="v67-svc-head"><div><div class="enh-site-eyebrow">Ways to work together — 03</div><h4>One person, first idea to <em>launch.</em></h4></div><span class="v67-svc-tag">Fixed quotes</span></div>
        <div class="v67-svc-grid">
          <div class="v67-svc-card"><div class="v67-svc-top"><span class="v67-ico">${ico.launch}</span><span class="v67-num">01</span></div><b>Launch site</b><p>A focused, fast website for a new offer.</p><ul><li>One page or a handful</li><li>Copy &amp; structure guidance</li><li>Built and launched</li></ul><div class="v67-svc-foot"><span>2–3 weeks</span><i>↗</i></div></div>
          <div class="v67-svc-card is-feature"><span class="v67-svc-flag">Most chosen</span><div class="v67-svc-top"><span class="v67-ico">${ico.identity}</span><span class="v67-num">02</span></div><b>Website + identity</b><p>Brand and website as one clear idea.</p><ul><li>Logo, colour &amp; type system</li><li>Custom page design</li><li>Built and launched</li></ul><div class="v67-svc-foot"><span>4–6 weeks</span><i>↗</i></div></div>
          <div class="v67-svc-card"><div class="v67-svc-top"><span class="v67-ico">${ico.care}</span><span class="v67-num">03</span></div><b>Care &amp; growth</b><p>Thoughtful support after launch.</p><ul><li>Updates &amp; fixes</li><li>Performance checks</li><li>Small, steady improvements</li></ul><div class="v67-svc-foot"><span>Monthly</span><i>↗</i></div></div>
        </div>
        <div class="enh-service-note v67-svc-note"><span class="enh-dot"></span>Typical timeline 3–5 weeks <i></i> Reply within a day <i></i> No hand-offs</div>
      </div>
    </article>
    <article class="enh-scene" data-scene="2" data-testid="story-scene-about" aria-hidden="true">
      ${nav}
      <div class="enh-about-content v67-about">
        <div class="v67-copy">
          <div class="enh-site-eyebrow">About / behind the work</div>
          <h4>Nothing gets lost in a <em>hand-off.</em></h4>
          <p>The person you brief is the person who designs, builds and launches — clear thinking, precise execution.</p>
          <ol class="v67-steps">
            <li><span>01</span><b>Discover</b><small>Listen, question, scope</small></li>
            <li><span>02</span><b>Design</b><small>Type, colour, layout</small></li>
            <li><span>03</span><b>Build</b><small>Fast, accessible code</small></li>
          </ol>
        </div>
        <div class="v67-studio" aria-hidden="true">
          <div class="v67-arch">${studioSvg}</div>
          <span class="v67-studio-tag">The workspace / 001</span>
          <div class="v67-note"><b>1</b><span>person<br>0 hand-offs</span></div>
        </div>
      </div>
    </article>
    <article class="enh-scene enh-mobile-scene v67-mobile" data-scene="3" data-testid="story-scene-mobile" aria-hidden="true">
      <div class="enh-mini-phone v67-ph">
        <span class="v67-island"></span>
        <div class="v67-status"><b>9:41</b><i></i></div>
        <div class="enh-phone-top"><span class="v67-plogo"><i class="zh-sharp" aria-hidden="true"></i> zohaib</span><span class="v67-burger"><s></s><s></s></span></div>
        <div class="v67-pbody">
          <div class="v67-peyebrow"><span class="enh-dot"></span> Booking new projects</div>
          <h5>Thoughtful <em>websites.</em></h5>
          <p>One person from first idea to launch.</p>
          <span class="v67-pbtn">Start a project ↗</span>
          <div class="v67-parch"><img src="${art('ceramics')}" alt=""></div>
        </div>
      </div>
      <div class="enh-mini-phone v67-ph">
        <span class="v67-island"></span>
        <div class="v67-status"><b>9:41</b><i></i></div>
        <div class="enh-phone-top"><span class="v67-plogo"><i class="zh-sharp" aria-hidden="true"></i> zohaib</span><span class="v67-burger"><s></s><s></s></span></div>
        <div class="v67-pbody">
          <div class="v67-peyebrow">Selected work</div>
          <h5>Work that <em>means more.</em></h5>
          <div class="v67-plist">
            <div class="v67-prow"><img src="${art('ceramics')}" alt=""><span><b>Ceramics studio</b><small>Brand + website</small></span><i>↗</i></div>
            <div class="v67-prow"><img src="${art('cafe')}" alt=""><span><b>Neighbourhood café</b><small>Launch site</small></span><i>↗</i></div>
          </div>
          <span class="v67-ptabs"><i class="on"></i><i></i><i></i></span>
        </div>
      </div>
      <div class="enh-mini-phone v67-ph">
        <span class="v67-island"></span>
        <div class="v67-status"><b>9:41</b><i></i></div>
        <div class="enh-phone-top"><span class="v67-plogo"><i class="zh-sharp" aria-hidden="true"></i> zohaib</span><span class="v67-close">×</span></div>
        <div class="v67-pbody">
          <div class="v67-pmenu"><span><em>01</em>Work</span><span><em>02</em>Services</span><span><em>03</em>About</span><span><em>04</em>Contact</span></div>
          <div class="v67-pfoot"><small><a href="mailto:zohaib.abdollah@gmail.com" style="color:inherit">zohaib.abdollah@gmail.com</a></small><span class="v67-pbtn">Start a project ↗</span></div>
        </div>
      </div>
    </article>`;

  const makeSteps = (items, prefix) => items.map((item, i) => `
    <button class="enh-step${i === 0 ? ' is-active' : ''}" type="button" data-step="${i}" data-testid="${prefix}-step-${item.test}" aria-label="Show ${item.label} preview" aria-pressed="${i === 0}">
      <span class="enh-step-index">${item.number}</span><span>${item.label}</span><span class="enh-step-arrow" aria-hidden="true">↗</span>
    </button>`).join('');

  function createScreenChapter() {
    const track = document.createElement('div');
    track.className = 'enh-story-track';
    track.setAttribute('data-testid', 'scroll-screens-track');
    track.innerHTML = `
      <div class="enh-story-sticky">
        <div class="enh-story-intro">
          <div class="enh-micro"><i></i> THE SCREENS / SCROLL TO EXPLORE</div>
          <div class="enh-story-number" data-testid="story-active-number">01</div>
          <h3 class="enh-story-title" data-testid="story-active-title">${screens[0].title}</h3>
          <p class="enh-story-description" data-testid="story-active-description">${screens[0].description}</p>
          <div class="enh-story-count" data-testid="story-active-count">01 / 04 — KEY SCREENS</div>
          <div class="enh-story-nav" role="group" aria-label="Choose a screen">${makeSteps(screens, 'story')}</div>
        </div>
        <div class="enh-story-canvas">
          <span class="enh-canvas-star zh-sharp" aria-hidden="true"></span>
          <div class="enh-browser" data-testid="story-browser-preview">
            <div class="enh-browser-top"><i class="enh-browser-dot"></i><i class="enh-browser-dot"></i><i class="enh-browser-dot"></i><span class="enh-browser-url" data-testid="story-browser-url"></span></div>
            <div class="enh-scene-stack">${sceneHtml}</div>
          </div>
        </div>
      </div>`;
    const section = document.querySelector('#screens');
    const sectionIntro = section.querySelector('.wrap > .grid');
    sectionIntro.insertAdjacentElement('afterend', track);
    const tail = document.createElement('div');
    tail.className = 'enh-story-tail';
    tail.textContent = 'More views below — services, about & mobile';
    tail.setAttribute('data-testid', 'screen-collection-label');
    track.insertAdjacentElement('afterend', tail);
    return track;
  }

  function createBreakpointChapter() {
    const track = document.createElement('div');
    track.className = 'enh-break-track';
    track.setAttribute('data-testid', 'scroll-responsive-track');
    track.innerHTML = `
      <div class="enh-break-sticky">
        <div class="enh-break-intro">
          <div class="enh-micro"><i></i> THE REFLOW / SCROLL TO RESIZE</div>
          <div class="enh-break-number" data-testid="breakpoint-active-number">01</div>
          <h3 class="enh-break-title" data-testid="breakpoint-active-title">${breakpoints[0].title}</h3>
          <p class="enh-break-description" data-testid="breakpoint-active-description">${breakpoints[0].description}</p>
          <div class="enh-break-count" data-testid="breakpoint-active-count">01 / 04 — DESKTOP</div>
          <div class="enh-break-nav" role="group" aria-label="Choose a breakpoint">${makeSteps(breakpoints, 'breakpoint')}</div>
        </div>
        <div class="enh-device-stage">
          <div class="enh-device-shell" data-stage="0" data-testid="responsive-live-preview">
            <div class="enh-device-inner">
              <div class="enh-device-nav"><span><i class="zh-sharp" aria-hidden="true"></i> zohaib</span><span class="enh-device-nav-links"><span class="enh-device-nav-link">Work</span><span class="enh-device-nav-link">Services</span><span class="enh-device-nav-link">About</span><span class="enh-device-nav-link">Start a project ↗</span></span><span class="enh-device-hamburger">☰</span></div>
              <div class="enh-device-content"><div class="enh-device-text"><span class="enh-device-kicker">Independent designer &amp;&nbsp;developer</span><h4>Thoughtful websites for small businesses &amp; founders.</h4><p>One person from first idea to launch.</p><span class="enh-device-button">Start a project ↗</span></div></div>
              <div class="enh-device-grid" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>`;
    const deviceGrid = track.querySelector('.enh-device-grid');
    if (deviceGrid) deviceGrid.insertAdjacentHTML('afterend', '<div class="enh-device-proof"><span><b>Same story</b><small>Content stays in sync</small></span><span><b>New rhythm</b><small>Layout follows the space</small></span><span><b>Touch ready</b><small>Controls stay comfortable</small></span></div>');
    const rpInner = track.querySelector('.enh-device-inner');
    if (rpInner) rpInner.innerHTML = `
      <div class="rp">
        <div class="rp-nav"><span class="rp-logo"><i class="zh-sharp" aria-hidden="true"></i> zohaib</span><span class="rp-links"><span>Work</span><span>Services</span><span>About</span></span><span class="rp-cta">Start a project ↗</span><span class="rp-burger"><s></s><s></s></span></div>
        <div class="rp-hero">
          <div class="rp-text">
            <span class="rp-pill"><i></i>Booking new projects</span>
            <h4>Thoughtful <em>websites</em> for small businesses &amp; founders.</h4>
            <p>I design and build websites — one person from first idea to launch.</p>
            <div class="rp-actions"><span class="rp-btn">Start a project ↗</span><span class="rp-btn ghost">See the work</span></div>
          </div>
          <div class="rp-art"><img src="${art('ceramics')}" alt=""><span class="rp-chip"><b>+212%</b>enquiries</span></div>
        </div>
        <div class="rp-work">
          <div class="rp-card"><img src="${art('ceramics')}" alt=""><span><b>Ceramics studio</b><small>Brand + website</small></span></div>
          <div class="rp-card"><img src="${art('cafe')}" alt=""><span><b>Neighbourhood café</b><small>Launch site</small></span></div>
          <div class="rp-card rp-card-note"><span><b>Care &amp; growth</b><small>Support after launch</small></span><i>↗</i></div>
        </div>
        <div class="rp-proof"><span><b>Same story</b><small>Content stays in sync</small></span><span><b>New rhythm</b><small>Layout follows the space</small></span><span><b>Touch ready</b><small>Controls stay comfortable</small></span></div>
      </div>`;
    const rpStage = track.querySelector('.enh-device-stage');
    if (rpStage) rpStage.insertAdjacentHTML('afterbegin', '<div class="rp-measure" aria-hidden="true"><span class="rp-line"></span><span class="rp-readout"><b data-rp-px>1280</b><i>px</i><em data-rp-name>Desktop</em></span></div>');
    const section = document.querySelector('#responsive');
    section.querySelector('.wrap > .grid').insertAdjacentElement('afterend', track);
    return track;
  }

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function connectChapter(track, items, prefix, onActive) {
    const title = track.querySelector(`.${prefix}-title`);
    const description = track.querySelector(`.${prefix}-description`);
    const number = track.querySelector(`.${prefix}-number`);
    const count = track.querySelector(`.${prefix}-count`);
    const buttons = Array.from(track.querySelectorAll('.enh-step'));
    let active = -1;
    let lastProgress = -1;

    // PERFORMANCE: the track's page position only changes on resize / layout shifts, so it is measured once and
    // cached instead of forcing a layout (getBoundingClientRect + offsetHeight) on every scroll frame.
    let dimCache = null;
    const invalidate = () => { dimCache = null; };
    window.addEventListener('resize', invalidate, { passive: true });
    window.addEventListener('load', invalidate);
    if (window.ResizeObserver) { try { new ResizeObserver(invalidate).observe(document.body); } catch (e) {} }
    const dimensions = () => {
      if (dimCache) return dimCache;
      const start = track.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(1, track.offsetHeight - window.innerHeight + 55);
      return (dimCache = { start, travel });
    };

    const setActive = index => {
      if (active === index) return;
      active = index;
      const item = items[index];
      title.innerHTML = item.title;
      description.textContent = item.description;
      number.textContent = item.number;
      count.textContent = `${item.number} / 04 — ${prefix === 'enh-story' ? 'KEY SCREENS' : item.label.toUpperCase()}`;
      buttons.forEach((button, i) => {
        button.classList.toggle('is-active', i === index);
        button.setAttribute('aria-pressed', String(i === index));
      });
      onActive(index, item);
    };

    buttons.forEach((button, i) => button.addEventListener('click', () => {
      const { start, travel } = dimensions();
      setActive(i);
      window.scrollTo({ top: start + travel * ((i + .14) / items.length), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }));

    const update = () => {
      const { start, travel } = dimensions();
      const progress = clamp((window.scrollY - start) / travel, 0, .99999);
      if (progress === lastProgress) return;
      lastProgress = progress;
      setActive(Math.min(items.length - 1, Math.floor(progress * items.length)));
      buttons.forEach((button, i) => {
        const pct = clamp((progress * items.length - i) * 100, 0, 100);
        if (button._pct !== undefined && Math.abs(button._pct - pct) < .4 && pct !== 0 && pct !== 100) return;   // skip sub-pixel changes
        button._pct = pct;
        button.style.setProperty('--sp', (pct / 100).toFixed(3));   // unitless, drives a GPU scaleX (no layout)
        button.style.setProperty('--step-progress', `${pct}%`);
      });
    };
    return update;
  }

  function mount() {
    if (document.querySelector('.enh-story-track')) return true;
    if (!document.querySelector('#screens .wrap > .grid') || !document.querySelector('#responsive .wrap > .grid')) return false;
    const screenTrack = createScreenChapter();
    const breakTrack = createBreakpointChapter();
    const originalBreakpointButtons = Array.from(document.querySelectorAll('#responsive .wrap > .flex button'));
    const updateScreens = connectChapter(screenTrack, screens, 'enh-story', (index, item) => {
      screenTrack.querySelector('.enh-browser-url').textContent = item.path;
      screenTrack.querySelectorAll('.enh-scene').forEach((scene, i) => {
        scene.classList.toggle('is-active', i === index);
        scene.setAttribute('aria-hidden', String(i !== index));
      });
    });
    const updateBreakpoints = connectChapter(breakTrack, breakpoints, 'enh-break', (index, item) => {
      const device = breakTrack.querySelector('.enh-device-shell');
      device.style.setProperty('--device-width', item.width);
      device.setAttribute('data-stage', String(index));
      const stage = device.closest('.enh-device-stage');
      if (stage) {
        const px = [1280, 1024, 768, 390][index];
        stage.style.setProperty('--rp-w', String(parseFloat(item.width) / 100));
        const num = stage.querySelector('[data-rp-px]'), nm = stage.querySelector('[data-rp-name]');
        if (nm) nm.textContent = item.label;
        if (num) {
          const from = parseFloat(num.textContent) || px, t0 = performance.now();
          cancelAnimationFrame(num._raf);
          const tick = (t) => { const k = Math.min(1, (t - t0) / 650), e = 1 - Math.pow(1 - k, 3); num.textContent = Math.round(from + (px - from) * e); if (k < 1) num._raf = requestAnimationFrame(tick); };
          num._raf = requestAnimationFrame(tick);
        }
      }
      device.classList.remove('is-swap'); void device.offsetWidth; device.classList.add('is-swap');
      if (originalBreakpointButtons[index] && !originalBreakpointButtons[index].classList.contains('on')) originalBreakpointButtons[index].click();
    });
    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; updateScreens(); updateBreakpoints(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return true;
  }

  if (!mount()) {
    const wait = new MutationObserver(() => { if (mount()) wait.disconnect(); });
    wait.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => wait.disconnect(), 15000);
  }
})();

/* Hero title typewriter + blinking cursor */
(() => {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let started = false;
  function start() {
    const title = document.querySelector('[data-testid="hero-title"]');
    if (!title || !title.textContent.trim()) return false;
    if (started) return true;
    started = true;
    title.setAttribute('aria-label', title.textContent.replace(/\s+/g, ' ').trim());
    const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) if (walker.currentNode.nodeValue.trim()) nodes.push(walker.currentNode);
    const cursor = document.createElement('span');
    cursor.className = 'zh-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    const parts = nodes.map(node => {
      const wrap = document.createElement('span');
      wrap.className = 'zh-type';
      wrap.setAttribute('aria-hidden', 'true');
      const typed = document.createElement('span');
      const rest = document.createElement('span');
      rest.className = 'zh-rest';
      const full = node.nodeValue;
      rest.textContent = full;
      wrap.append(typed, rest);
      node.parentNode.replaceChild(wrap, node);
      return { typed, rest, full };
    });
    if (reduce) {
      parts.forEach(p => { p.typed.textContent = p.full; p.rest.textContent = ''; });
      parts[parts.length - 1].typed.after(cursor);
      title.dataset.typed = 'true';
      return true;
    }
    let pi = 0, ci = 0;
    cursor.classList.add('is-typing');
    parts[0].typed.after(cursor);
    const tick = () => {
      const p = parts[pi];
      ci++;
      p.typed.textContent = p.full.slice(0, ci);
      p.rest.textContent = p.full.slice(ci);
      if (ci >= p.full.length) {
        pi++; ci = 0;
        if (pi >= parts.length) {
          cursor.classList.remove('is-typing');
          title.dataset.typed = 'true';
          title.dispatchEvent(new CustomEvent('zh:typed', { bubbles: true }));
          return;
        }
        parts[pi].typed.after(cursor);
        setTimeout(tick, 220);
        return;
      }
      setTimeout(tick, 55 + Math.random() * 60);
    };
    setTimeout(tick, 900);
    return true;
  }
  if (!start()) {
    const wait = new MutationObserver(() => { if (start()) wait.disconnect(); });
    wait.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => wait.disconnect(), 15000);
  }
})();

/* Blood-red flickering grid and centered navigation support. */
(() => {
  function mountNavActions() {
    const navWrap = document.querySelector('.topnav .wrap');
    if (!navWrap) return false;

    let actions = navWrap.querySelector('.nav-actions');
    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'nav-actions';
      const cta = navWrap.querySelector('.nav-cta');
      if (cta) actions.appendChild(cta);
      navWrap.appendChild(actions);
    }
    return true;
  }

  function mountFlickeringGrid() {
    const hero = document.querySelector('.hero');
    if (!hero) return false;
    if (hero.querySelector('.enh-flickering-grid')) return true;

    const layer = document.createElement('div');
    layer.className = 'enh-flickering-grid';
    layer.setAttribute('aria-hidden', 'true');
    const canvas = document.createElement('canvas');
    layer.appendChild(canvas);
    hero.insertBefore(layer, hero.firstChild);

    const ctx = canvas.getContext('2d');
    if (!ctx) return true;
    // Premium flickering grid. Base is the Magic UI model (every cell has its own opacity and only
    // occasionally re-rolls), plus an ignition sweep on load and a slow wavy colour field. Colours come from a
    // 10-step maroon -> crimson ramp; cells are drawn in colour buckets for speed.
    const squareSize = 4;
    const gridGap = 2;
    const cellSize = squareSize + gridGap;
    const maxOpacity = 0.62;
    const flickerChance = 0.1;
    const ramp = ['#3a060c', '#520913', '#6e0b17', '#850f1d', '#9b1426', '#b0182c', '#c21d33', '#d02a3f', '#dc3e50', '#e65a68'];
    const N = ramp.length;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0, height = 0, columns = 0, rows = 0;
    let order = new Uint32Array(0);
    let squares = new Float32Array(0), spark = new Float32Array(0), alphaArr = new Float32Array(0), bucket = new Uint8Array(0);
    let raf = 0, last = 0, visible = true, t0 = 0, sqPx = 4, gapPx = 2, cellPx = 6;
    let low = null, lowCtx = null, lowImg = null, mask = null, rowWave = new Float32Array(0);
    const rampRGB = ramp.map((h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]);
    const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

    const setup = () => {
      const rect = layer.getBoundingClientRect();
      // Render at the screen's true pixel density (up to 3x) and size every square in whole device pixels,
      // so each cell is a crisp, hard-edged block with no sub-pixel blur.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);   // 3x canvases cost ~2.25x the pixels for no visible gain (canvas is pixelated-scaled)
      sqPx = Math.max(2, Math.round(squareSize * dpr));
      gapPx = Math.max(1, Math.round(gridGap * dpr));
      cellPx = sqPx + gapPx;
      width = Math.max(1, Math.round(rect.width * dpr));
      height = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = width;
      canvas.height = height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.imageSmoothingEnabled = false;
      columns = Math.ceil(width / cellPx);
      rows = Math.ceil(height / cellPx);
      const n = columns * rows;
      squares = new Float32Array(n);
      spark = new Float32Array(n);
      alphaArr = new Float32Array(n);
      bucket = new Uint8Array(n);
      for (let i = 0; i < n; i++) squares[i] = Math.random() * maxOpacity;
      // PERFORMANCE: one pixel per cell. Colours are written into this small image, scaled up in a single
      // drawImage, and a static mask then cuts the gaps between squares (instead of ~30,000 fillRect calls per frame).
      low = document.createElement('canvas');
      low.width = columns; low.height = rows;
      lowCtx = low.getContext('2d');
      lowImg = lowCtx.createImageData(columns, rows);
      rowWave = new Float32Array(rows);
      const tile = document.createElement('canvas');
      tile.width = cellPx; tile.height = cellPx;
      const tc = tile.getContext('2d');
      tc.fillStyle = '#000';
      tc.fillRect(0, 0, sqPx, sqPx);
      mask = document.createElement('canvas');
      mask.width = columns * cellPx; mask.height = rows * cellPx;
      const mc = mask.getContext('2d');
      mc.fillStyle = mc.createPattern(tile, 'repeat');
      mc.fillRect(0, 0, mask.width, mask.height);
      draw(reduce ? 0 : performance.now());
    };

    const draw = (time) => {
      const intro = reduce ? 1 : clamp((time - t0) / 2400, 0, 1);
      const ease = 1 - Math.pow(1 - intro, 3);
      const sweep = ease * 1.75;
      const tw = time * 0.001;
      const px = lowImg.data;
      // The inner sine of the first wave depends only on the row, so compute it once per row per frame.
      for (let j = 0; j < rows; j++) rowWave[j] = Math.sin(((j * cellPx + sqPx / 2) / height) * 4.2 + tw * 0.45) * 1.7;
      for (let i = 0; i < columns; i++) {
        const x = i * cellPx + sqPx / 2, nx = x / width;
        const colWave = Math.sin(nx * 2.4 + tw * 0.3);       // inner sine of the second wave: per column
        const nx75 = nx * 7.5 + tw * 0.32, nx32 = nx * 3.2 + tw * 0.22 + colWave;
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j, y = j * cellPx + sqPx / 2, ny = y / height;
          const front = sweep - nx * 0.85 - ny * 0.15;
          const rv = clamp(front / 0.3, 0, 1);
          let a = 0;
          let tt = 0;
          if (rv > 0) {
            // Wavy colour field: flowing bands that bend and drift slowly across the grid.
            const wv = Math.sin(nx75 + rowWave[j]);
            const wv2 = Math.sin(nx32 - ny * 5.1);
            const wave = 0.5 + 0.5 * (wv * 0.7 + wv2 * 0.3);
            const fr = intro < 1 ? Math.exp(-Math.pow(front - 0.05, 2) / 0.004) : 0;
            a = (0.07 + squares[idx]) * rv + wave * wave * 0.2 * rv + fr * 0.6;
            tt = 0.08 + wave * 0.62 + fr * 0.7;
          }
          const o = (j * columns + i) * 4;
          if (a < 0.03) { px[o + 3] = 0; continue; }
          const rgb = rampRGB[(clamp(tt, 0, 1) * (N - 1) + 0.5) | 0];
          px[o] = rgb[0]; px[o + 1] = rgb[1]; px[o + 2] = rgb[2];
          px[o + 3] = (a > 0.95 ? 0.95 : a) * 255 + 0.5;
        }
      }
      lowCtx.putImageData(lowImg, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.imageSmoothingEnabled = false;
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(low, 0, 0, columns * cellPx, rows * cellPx);   // one pixel per cell -> one block per cell
      ctx.globalCompositeOperation = 'destination-in';
      ctx.drawImage(mask, 0, 0);                                    // cut the gaps between the squares
      ctx.globalCompositeOperation = 'source-over';
    };

    const frame = (time) => {
      raf = requestAnimationFrame(frame);
      if (!visible || window.__enhScrolling) return;
      const dt = (time - last) / 1000;
      if (dt < 1 / 18) return;
      last = time;
      const p = flickerChance * dt;
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < p) squares[i] = Math.random() * maxOpacity;
      }
      draw(time);
    };

    setup();
    if (!reduce) {
      raf = requestAnimationFrame((t) => { t0 = t; last = t; frame(t); });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(layer);
      }
    }
    if ('ResizeObserver' in window) {
      new ResizeObserver(setup).observe(layer);
    } else {
      window.addEventListener('resize', setup, { passive: true });
    }
    const timer = null;
    window.addEventListener('pagehide', () => { if (raf) cancelAnimationFrame(raf); }, { once: true });
    return true;
  }

  function mountAll() {
    const navReady = mountNavActions();
    const gridReady = mountFlickeringGrid();
    return navReady && gridReady;
  }

  if (!mountAll()) {
    const observer = new MutationObserver(() => {
      if (mountAll()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 15000);
  }
})();

/* Accent only the hero's dot and question-mark punctuation. */
(() => {
  function accentHeroPunctuation() {
    document.querySelectorAll('.hero h1').forEach((heading) => {
      if (heading.dataset.punctuationAccented) return;
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach((node) => {
        if (!/[.?]/.test(node.nodeValue || '')) return;
        const fragment = document.createDocumentFragment();
        node.nodeValue.split(/([.?])/).forEach((part) => {
          if (part === '.' || part === '?') {
            const span = document.createElement('span');
            span.className = 'enh-hero-punctuation';
            span.textContent = part;
            fragment.appendChild(span);
          } else if (part) fragment.appendChild(document.createTextNode(part));
        });
        node.parentNode.replaceChild(fragment, node);
      });
      heading.dataset.punctuationAccented = 'true';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', accentHeroPunctuation, { once: true });
  else accentHeroPunctuation();
})();


/* 02 — Design approach: replace the native section in place. */
(() => {
  const principles = [
    {
      title: 'Hierarchy',
      phrase: 'earn their place.',
      description: 'Every page answers three questions in order: what is this, is it for me, what do I do next. Size, weight and position follow that order — nothing else competes.'
    },
    {
      title: 'Spacing',
      phrase: 'make room.',
      description: 'An 8-point scale keeps rhythm consistent from a button’s padding to the gap between sections. Generous whitespace is the luxury; tight spacing is reserved for things that belong together.'
    },
    {
      title: 'Typography for screens',
      phrase: 'read with ease.',
      description: 'A clear scale for display, body and quieter editorial moments. Body copy stays comfortable at 16px or above.'
    },
    {
      title: 'Interaction design',
      phrase: 'move with intent.',
      description: 'Hover, focus and press states are designed, not defaulted. One shared easing curve gives the whole site a consistent sense of weight.'
    },
    {
      title: 'Responsive strategy',
      phrase: 'fit each screen.',
      description: 'Content priority starts on the smallest screen. Larger breakpoints add room and columns — never new ideas — so the story stays the same everywhere.'
    }
  ];

  function mountDesignApproach() {
    // Reuse the site's existing section node so its position in the page cannot change.
    const section = document.querySelector('#approach');
    if (!section) return false;
    if (section.dataset.designApproachReady === 'true') return true;

    // Replace the original section contents and styling in place; preserve its ID and DOM position.
    section.className = 'enh-design-approach da-motion-ready';
    section.id = 'approach';
    section.setAttribute('data-testid', 'approach-section');
    section.setAttribute('aria-labelledby', 'da-main-title');
    section.innerHTML = `
      <div class="da-shell">
        <header class="da-topline">
          <span>02 <i></i> DESIGN APPROACH</span>
          <span>HOW DECISIONS WERE MADE</span>
        </header>
        <div class="da-layout">
          <aside class="da-rail">
            <p class="da-overline">FIVE PRINCIPLES</p>
            <h2 id="da-main-title" class="da-main-title">
              <span class="da-main-lead">Decisions that</span>
              <span class="da-promise-wrap" aria-label="earn their place">
                <span class="da-promise-current" aria-hidden="true">earn their place.</span>
                <span class="da-promise-next" aria-hidden="true"></span>
              </span>
            </h2>
            <div class="da-current-block">
              <div class="da-current-meta"><span data-da-current-index>01 / 05</span><span>SCROLL TO EXPLORE</span></div>
              <h3 class="da-current-title" aria-live="polite">
                <span class="da-title-current">Hierarchy</span><span class="da-title-next" aria-hidden="true"></span>
              </h3>
            </div>
            <nav class="da-step-nav" aria-label="Design principles">
              ${principles.map((item, index) => `<button type="button" data-da-jump="${index}" class="${index === 0 ? 'is-active' : ''}" aria-label="Go to principle ${index + 1}: ${item.title}" aria-current="${index === 0 ? 'step' : 'false'}"><span>0${index + 1}</span><i></i></button>`).join('')}
            </nav>
          </aside>

          <div class="da-principles" aria-label="Five design principles">
            <article class="da-principle is-visible is-active" data-da-step="0">
              <header class="da-card-head"><span>01</span><h3>Hierarchy</h3></header>
              <p class="da-card-copy">${principles[0].description}</p>
              <div class="da-hierarchy-visual" aria-label="Three levels of content priority">
                <div class="da-hierarchy-row da-level-one"><b>01</b><span>Headline — the promise</span></div>
                <div class="da-hierarchy-row da-level-two"><b>02</b><span>Support — who it’s for</span></div>
                <div class="da-hierarchy-row da-level-three"><b>03</b><span>Action — one clear step</span></div>
              </div>
            </article>

            <article class="da-principle" data-da-step="1">
              <header class="da-card-head"><span>02</span><h3>Spacing</h3></header>
              <p class="da-card-copy">${principles[1].description}</p>
              <div class="da-spacing-visual" aria-label="Eight point spacing scale">
                <div class="da-spacing-scale">
                  <span style="--scale:4">4</span><span style="--scale:8">8</span><span style="--scale:16">16</span><span style="--scale:24">24</span><span style="--scale:40">40</span><span style="--scale:64">64</span><span style="--scale:104">104</span>
                </div>
                <div class="da-spacing-caption"><span>DETAIL</span><span>COMPONENT</span><span>SECTION</span><span>SPACE</span></div>
              </div>
            </article>

            <article class="da-principle" data-da-step="2">
              <header class="da-card-head"><span>03</span><h3>Typography for screens</h3></header>
              <p class="da-card-copy">${principles[2].description}</p>
              <div class="da-type-specimens" aria-label="Examples of display, body, editorial and interface label typography">
                <div class="da-type-sample da-type-display">
                  <div class="da-type-meta"><span>Display</span><span>Fluid · 44–200px</span></div>
                  <p class="da-type-example">Hello, founder.</p>
                </div>
                <div class="da-type-sample da-type-body">
                  <div class="da-type-meta"><span>Body</span><span>17 / 1.65 · 68ch</span></div>
                  <p class="da-type-example">Readable at arm’s length on a phone.</p>
                </div>
                <div class="da-type-sample da-type-editorial">
                  <div class="da-type-meta"><span>Editorial</span><span>Italic · emphasis</span></div>
                  <p class="da-type-example">Notes that slow the reader down.</p>
                </div>
                <div class="da-type-sample da-type-label">
                  <div class="da-type-meta"><span>Label</span><span>11px · interface</span></div>
                  <p class="da-type-example">STEP 02 — DESIGN</p>
                </div>
              </div>
            </article>

            <article class="da-principle" data-da-step="3">
              <header class="da-card-head"><span>04</span><h3>Interaction design</h3></header>
              <p class="da-card-copy">${principles[3].description}</p>
              <div class="da-motion-visual">
                <svg viewBox="0 0 260 92" role="img" aria-label="A single easing curve that rises quickly and settles smoothly">
                  <path class="da-curve-grid" d="M8 8V80H252M8 44H252" />
                  <path class="da-curve-path" d="M8 80 C62 20 105 8 252 8" />
                  <circle class="da-curve-point" r="4" cx="8" cy="80" />
                </svg>
                <div class="da-motion-note"><b>420 ms</b><span>One shared curve</span><button type="button" class="da-replay">Replay ↗</button></div>
              </div>
            </article>

            <article class="da-principle" data-da-step="4">
              <header class="da-card-head"><span>05</span><h3>Responsive strategy</h3></header>
              <p class="da-card-copy">${principles[4].description}</p>
              <div class="da-responsive-visual" aria-label="The same page content rearranged for phone, tablet and desktop">
                <section class="da-rs-device da-rs-phone" aria-label="Phone layout, 390 pixels wide">
                  <div class="da-rs-device-head"><b>Phone</b><span>390 PX</span></div>
                  <div class="da-rs-screen">
                    <div class="da-rs-nav"><b>z.</b><span class="da-rs-menu">☰</span></div>
                    <div class="da-rs-content">
                      <span class="da-rs-eyebrow">INDEPENDENT / DIGITAL</span>
                      <h4>Make room<br>for good work.</h4>
                      <p>Clear thinking, carefully made.</p>
                      <span class="da-rs-link">Explore the work ↗</span>
                    </div>
                  </div>
                  <span class="da-rs-caption">ONE COLUMN / FOCUS</span>
                </section>
                <section class="da-rs-device da-rs-tablet" aria-label="Tablet layout, 768 pixels wide">
                  <div class="da-rs-device-head"><b>Tablet</b><span>768 PX</span></div>
                  <div class="da-rs-screen">
                    <div class="da-rs-nav"><b>z.</b><span class="da-rs-nav-links">WORK&nbsp;&nbsp; ABOUT&nbsp;&nbsp; ↗</span></div>
                    <div class="da-rs-content">
                      <span class="da-rs-eyebrow">INDEPENDENT / DIGITAL</span>
                      <div class="da-rs-content-grid">
                        <h4>Make room<br>for good work.</h4>
                        <div><p>Clear thinking, carefully made.</p><span class="da-rs-link">Explore the work ↗</span></div>
                      </div>
                    </div>
                  </div>
                  <span class="da-rs-caption">HYBRID / REBALANCE</span>
                </section>
                <section class="da-rs-device da-rs-desktop" aria-label="Desktop layout, 1440 pixels wide">
                  <div class="da-rs-device-head"><b>Desktop</b><span>1440 PX</span></div>
                  <div class="da-rs-screen">
                    <div class="da-rs-nav"><b>zohaib✳</b><span class="da-rs-nav-links">WORK&nbsp;&nbsp; SERVICES&nbsp;&nbsp; ABOUT</span><span class="da-rs-nav-cta">START A PROJECT ↗</span></div>
                    <div class="da-rs-content">
                      <span class="da-rs-eyebrow">INDEPENDENT / DIGITAL</span>
                      <div class="da-rs-content-grid">
                        <h4>Make room<br>for good work.</h4>
                        <div><p>Clear thinking, carefully made.</p><span class="da-rs-link">Explore the work ↗</span></div>
                      </div>
                    </div>
                  </div>
                  <span class="da-rs-caption">EXPANSIVE / EDITORIAL</span>
                </section>
              </div>
              <p class="da-responsive-rule">Nothing new is added at a larger breakpoint. The same content gets more room and a different arrangement.</p>
            </article>
          </div>
        </div>
        <footer class="da-bottomline"><span>02 / DESIGN APPROACH</span><span>FIVE PRINCIPLES. ONE POINT OF VIEW.</span></footer>
      </div>
      <svg class="da-morph-filter" aria-hidden="true" focusable="false"><defs><filter id="da-morph-threshold" x="-8%" y="-35%" width="116%" height="170%" color-interpolation-filters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140" /></filter></defs></svg>`;

    section.dataset.designApproachReady = 'true';

    const currentTitle = section.querySelector('.da-title-current');
    const nextTitle = section.querySelector('.da-title-next');
    const currentPromise = section.querySelector('.da-promise-current');
    const nextPromise = section.querySelector('.da-promise-next');
    const currentIndexLabel = section.querySelector('[data-da-current-index]');
    const cards = Array.from(section.querySelectorAll('[data-da-step]'));
    const jumpButtons = Array.from(section.querySelectorAll('[data-da-jump]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frames = { title: 0, promise: 0 };
    let activeIndex = 0;
    let scrollFrame = 0;

    // --- Morphing text: gooey threshold morph + line-shadow layers, driven by a queue ---------------
    // Structure per text: [shadow-front][shadow-back][core: front + back]. The threshold filter lives on
    // the core only; the hatched line shadow sits beside it so the filter can never chew it into specks.
    function buildMorph(front, back) {
      const host = front.parentElement;
      const core = document.createElement('span');
      core.className = 'da-morph-core';
      host.insertBefore(core, front);
      core.append(front, back);
      const mk = () => { const el = document.createElement('span'); el.className = 'da-ls'; el.setAttribute('aria-hidden', 'true'); return el; };
      const lsFront = mk(), lsBack = mk();
      host.insertBefore(lsFront, core); host.insertBefore(lsBack, core);
      const set = (el, text) => { el.textContent = text; el.setAttribute('data-text', text); };
      set(lsFront, front.textContent);
      return { front, back, lsFront, lsBack, set };
    }
    const layers = [
      buildMorph(currentTitle, nextTitle),
      buildMorph(currentPromise, nextPromise)
    ];
    const textFor = (index) => [principles[index].title, principles[index].phrase];

    function morphStep(index, duration, done) {
      const texts = textFor(index);
      const settle = () => {
        layers.forEach((L, k) => {
          L.set(L.front, texts[k]); L.set(L.lsFront, texts[k]);
          L.set(L.back, ''); L.set(L.lsBack, '');
          L.front.style.opacity = '1'; L.front.style.filter = 'none';
          L.back.style.opacity = '0'; L.back.style.filter = 'none'; L.back.style.visibility = 'hidden';
          L.lsFront.style.opacity = '1'; L.lsBack.style.opacity = '0';
        });
        done();
      };
      if (reduceMotion || duration <= 0) { settle(); return; }
      layers.forEach((L, k) => {
        L.set(L.back, texts[k]); L.set(L.lsBack, texts[k]);
        L.back.style.visibility = 'visible';
        L.front.style.opacity = '1'; L.front.style.filter = 'blur(0px)';
        L.back.style.opacity = '0'; L.back.style.filter = 'blur(9px)';
        L.lsFront.style.opacity = '1'; L.lsBack.style.opacity = '0';
      });
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const e = t * t * (3 - 2 * t);
        layers.forEach((L) => {
          L.front.style.opacity = String(Math.pow(1 - e, .45));
          L.front.style.filter = `blur(${9 * e}px)`;
          L.back.style.opacity = String(Math.pow(e, .45));
          L.back.style.filter = `blur(${9 * (1 - e)}px)`;
          L.lsFront.style.opacity = String(1 - e);
          L.lsBack.style.opacity = String(e);
        });
        if (t < 1) frames.title = requestAnimationFrame(tick);
        else { frames.title = 0; settle(); }
      };
      frames.title = requestAnimationFrame(tick);
    }

    // Every step the reader passes is queued and played in order, even when a fast scroll jumps
    // several principles in one frame. The more that is waiting, the faster each morph plays.
    const morphQueue = [];
    let morphRunning = false;
    let queuedIndex = 0;
    function runQueue() {
      if (!morphQueue.length) { morphRunning = false; return; }
      morphRunning = true;
      const index = morphQueue.shift();
      const duration = Math.max(120, 360 / (1 + morphQueue.length * .9));
      morphStep(index, duration, runQueue);
    }
    function enqueueMorph(toIndex) {
      const dir = toIndex > queuedIndex ? 1 : -1;
      for (let i = queuedIndex + dir; dir > 0 ? i <= toIndex : i >= toIndex; i += dir) morphQueue.push(i);
      queuedIndex = toIndex;
      if (!morphRunning) runQueue();
    }

    function activateStep(index) {
      if (index < 0 || index >= principles.length || index === activeIndex) return;
      activeIndex = index;
      enqueueMorph(index);
      currentIndexLabel.textContent = `0${index + 1} / 05`;
      cards.forEach((card, cardIndex) => card.classList.toggle('is-active', cardIndex === index));
      jumpButtons.forEach((button, buttonIndex) => {
        const active = buttonIndex === index;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-current', active ? 'step' : 'false');
      });
    }

    const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: .08, rootMargin: '0px 0px -5% 0px' }) : null;
    if (revealObserver) cards.forEach((card) => revealObserver.observe(card));
    else cards.forEach((card) => card.classList.add('is-visible'));

    // One source of truth: a fixed "reading line" a little above mid-screen. The active principle is the last
    // card whose top has crossed that line, so the rail (title, counter, step nav) and the highlighted card on
    // the right always point at the same index, whatever each card's height.
    const readingLine = () => window.innerHeight * .46;
    function updateByScroll() {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const line = readingLine();
        let current = 0;
        cards.forEach((card, index) => {
          if (card.getBoundingClientRect().top <= line) current = index;
        });
        activateStep(current);
      });
    }
    window.addEventListener('scroll', updateByScroll, { passive: true });
    window.addEventListener('resize', updateByScroll, { passive: true });
    jumpButtons.forEach((button) => button.addEventListener('click', () => {
      const index = Number(button.dataset.daJump);
      if (cards[index]) {
        // Land the card's top just above the reading line so the rail and the card agree straight away.
        const top = cards[index].getBoundingClientRect().top + window.scrollY - window.innerHeight * .3;
        window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }));

    const replay = section.querySelector('.da-replay');
    const curve = section.querySelector('.da-motion-visual');
    if (replay && curve) replay.addEventListener('click', () => {
      curve.classList.remove('is-playing');
      void curve.offsetWidth;
      curve.classList.add('is-playing');
      window.setTimeout(() => curve.classList.remove('is-playing'), 700);
    });

    updateByScroll();
    return true;
  }

  if (!mountDesignApproach()) {
    const observer = new MutationObserver(() => {
      if (mountDesignApproach()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 15000);
  }
})();

/* Canvas Text heading style — dependency-free port of the Aceternity "Canvas Text" idea.
   The original heading text (colour, shadow, typewriter) is left untouched. A duplicate,
   aria-hidden layer sits on top of each line; evenly spaced flowing lines are clipped to its
   glyphs with CSS background-clip:text. Hero = horizontal ribbons, section headings = diagonal flow. */
(() => {
  const TARGETS = '.hero h1, .closing-title';
  window.setTimeout(() => document.documentElement.classList.add('cv-ready'), 2500);   // absolute fallback for the reveal gate
  // Gradient stops; every line takes an evenly interpolated colour, so the spread stays uniform.
  const HERO_ON_LIGHT = ['#3a0a12', '#6e0b17', '#9a7431'];      // dark maroon → maroon → blood red (visible on white text)
  const HERO_ON_DARK  = ['#2a0409', '#5e0a15', '#8b1325'];      // blood red → maroon → bright blood red
  const SEC_ON_LIGHT  = ['#3a0a12', '#6e0b17', '#9a7431'];      // dark maroon → maroon → blood red
  const SEC_ON_DARK   = ['#2a0409', '#5e0a15', '#8b1325'];   // deep crimson range: stays distinct from the soft-white letters

  function mix(stops, t) {
    const n = stops.length - 1, f = Math.min(n - 1e-6, t * n), i = Math.floor(f), u = f - i;
    const a = parseInt(stops[i].slice(1), 16), b = parseInt(stops[i + 1].slice(1), 16);
    const ch = (sh) => Math.round(((a >> sh) & 255) * (1 - u) + ((b >> sh) & 255) * u);
    return `rgb(${ch(16)},${ch(8)},${ch(0)})`;
  }

  // mode 'ribbon': dense, evenly spaced silk ribbons (two blended harmonics, constant phase step).
  // mode 'silk': wider, weaving strands that drift across each other.
  // Every harmonic has a whole number of cycles per tile, so a CSS drift loops with no seam.
  function strip(mode, width, height, count, stops, lw) {
    // A single flowing mesh: every line follows the same current, lines only drift together and apart
    // (fan / pinch), and never cross. Whole number of cycles per tile keeps the drift loop seamless.
    const dpr = Math.min(4, Math.max(2, Math.ceil(window.devicePixelRatio || 1))), c = document.createElement('canvas');   // supersampled: no jagged / pixelated mesh lines
    c.width = width * dpr; c.height = height * dpr;
    const g = c.getContext('2d');
    g.scale(dpr, dpr);
    g.imageSmoothingQuality = 'high';
    g.lineCap = 'round';
    g.lineJoin = 'round';
    g.lineWidth = mode === 'ribbon' ? 1.05 : mode === 'flow' ? 1.2 : .95;
    const p = mode === 'ribbon'
      ? { s0: 3.2, k: .35, A: 20, h1: 2, h2: 3, twist: .035 }   // hero: tight silky bundle
      : mode === 'flow'
        ? { s0: 3.0, k: .4, A: 24, h1: 2, h2: 3, twist: .07 }   // kinetic hero: lively silk, lines undulate in sequence
        : { s0: 3.0, k: .4,  A: 18, h1: 2, h2: 5, twist: .04 };   // sections: broader, slower weave
    // Full-coverage mesh: the lines are spread across the ENTIRE tile height (plus a margin beyond both edges)
    // and only wobble gently, so no part of a glyph - ascenders, x-height or descenders such as p, g, y -
    // ever lands in an empty gap of the mesh.
    const mid = (count - 1) / 2;
    const half = height / 2 + 34;                    // lines reach well past the top and bottom of the tile
    const pinch = mode === 'ribbon' ? .1 : mode === 'flow' ? .14 : .06;      // gentle fan/pinch; small enough that coverage never breaks
    const wob = mode === 'ribbon' ? 12 : mode === 'flow' ? 27 : 14;   // flow: bigger waves, still inside the 34px coverage margin         // flow amplitude
    for (let i = 0; i < count; i++) {
      g.strokeStyle = mix(stops, count === 1 ? 0 : i / (count - 1));
      g.beginPath();
      for (let x = -8; x <= width + 8; x += 3) {
        const t = x / width * Math.PI * 2 + i * p.twist;
        const flow = wob * (.7 * Math.sin(p.h1 * t) + .3 * Math.sin(p.h2 * t + 1));
        const fan = half * ((i - mid) / mid) * (1 + pinch * Math.sin(x / width * Math.PI * 2 + .5));
        const y = height / 2 + flow + fan;
        x === -8 ? g.moveTo(x, y) : g.lineTo(x, y);
      }
      g.stroke();
    }
    return c;
  }

  // PERFORMANCE: the tiles used to be inlined as data: URLs inside CSS custom properties (~0.5 MB of text each).
  // Every style recalculation of a heading letter (and the kinetic loop triggers one per letter per frame) had to
  // re-substitute and re-parse that string, which cost hundreds of ms. A blob: URL is a ~60 character string
  // for the same image, so recalculation becomes cheap and the decoded image is cached by URL.
  function toUrl(canvas) {
    return new Promise((resolve) => {
      const fallback = () => resolve(`url("${canvas.toDataURL('image/png')}")`);
      if (!canvas.toBlob || !window.URL || !URL.createObjectURL) return fallback();
      canvas.toBlob((blob) => (blob ? resolve(`url("${URL.createObjectURL(blob)}")`) : fallback()), 'image/png');
    });
  }

  let built = false;
  function buildTiles() {
    if (built) return;
    built = true;
    const r = document.documentElement.style;
    // (The old --cv-hero-* ribbon tiles were never applied to any element, so they are no longer generated.)
    const tiles = [
      ['--cv-sec-lt', strip('silk', 800, 240, 112, SEC_ON_LIGHT)],
      ['--cv-sec-dt', strip('silk', 800, 240, 112, SEC_ON_DARK)],
    ].map(([name, canvas]) => toUrl(canvas).then((url) => r.setProperty(name, url)));
    // Reveal gate: the heading stays invisible until both mesh tiles exist, so it appears once, already striped,
    // instead of showing flat letters and then changing colour when the texture arrives.
    const ready = () => document.documentElement.classList.add('cv-ready');
    Promise.all(tiles).then(ready, ready);
    window.setTimeout(ready, 1500);   // safety net: never leave the heading hidden
  }

  function isLight(el) {
    const m = getComputedStyle(el).color.match(/[\d.]+/g);
    if (!m) return false;
    return (0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2]) > 150;
  }

  function sync(host, layer) {
    layer.replaceChildren(...Array.from(host.childNodes).filter((n) => n !== layer && !(n.classList && n.classList.contains('cv-layer'))).map((n) => n.cloneNode(true)));
    layer.querySelectorAll('.zh-cursor').forEach((n) => n.remove());
  }

  function decorate(host) {
    buildTiles();
    host.classList.add('cv-host');
    const layer = document.createElement('span');
    layer.className = 'cv-layer ' + 'cv-sec' + ' ' + (isLight(host) ? 'cv-on-light' : 'cv-on-dark');
    layer.setAttribute('aria-hidden', 'true');
    host.appendChild(layer);
    let queued = false;
    const resync = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        obs.disconnect();
        sync(host, layer);
        obs.observe(host, { childList: true, subtree: true, characterData: true });
      });
    };
    const obs = new MutationObserver((muts) => {
      if (muts.every((m) => layer.contains(m.target))) return;
      resync();
    });
    sync(host, layer);
    obs.observe(host, { childList: true, subtree: true, characterData: true });
  }

  function apply() {
    document.querySelectorAll(TARGETS).forEach((h) => {
      if (h.dataset.canvasText) return;
      const blocks = h.querySelectorAll(':scope > .mask > .block');
      if (!blocks.length && !h.textContent.trim()) return;
      h.dataset.canvasText = 'true';
      if (blocks.length) blocks.forEach(decorate);
      else decorate(h);
    });
  }

  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();
})();

/* Liquid-glass refraction filter for the floating nav (used by Chromium via backdrop-filter:url()). */
(() => {
  if (document.getElementById('cv-liquid-glass-svg')) return;
  const mount = () => {
    if (!document.body) return false;
    const wrap = document.createElement('div');
    wrap.id = 'cv-liquid-glass-svg';
    wrap.setAttribute('aria-hidden', 'true');
    wrap.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
    wrap.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><filter id="cv-liquid-glass" x="-5%" y="-30%" width="110%" height="160%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="2" seed="7" result="noise"/><feGaussianBlur in="noise" stdDeviation="2" result="soft"/><feDisplacementMap in="SourceGraphic" in2="soft" scale="12" xChannelSelector="R" yChannelSelector="G"/></filter></svg>';
    document.body.appendChild(wrap);
    return true;
  };
  if (!mount()) document.addEventListener('DOMContentLoaded', mount, { once: true });
})();


/* Scroll state flag: lets CSS and canvas loops pause decorative work while the page is moving. */
(function () {
  const root = document.documentElement;
  let timer = 0;
  window.__enhScrolling = false;
  window.addEventListener('scroll', () => {
    if (!window.__enhScrolling) { window.__enhScrolling = true; root.classList.add('is-scrolling'); }
    clearTimeout(timer);
    timer = setTimeout(() => { window.__enhScrolling = false; root.classList.remove('is-scrolling'); }, 140);
  }, { passive: true });
})();

/* Marquees (page strip + laptop strip) speed up with scroll velocity, then ease back to their idle drift.
   The loop only runs while there is velocity to apply or a boost still easing out. */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const SELECTOR = '.marquee, .lm-strip-track';
  let rate = 1, lastY = window.scrollY, lastT = performance.now(), running = false, anims = [], lastScan = 0;
  function scan(now) {
    if (now - lastScan < 1500 && anims.length) return;
    lastScan = now; anims = [];
    document.querySelectorAll(SELECTOR).forEach((el) => el.getAnimations().forEach((a) => { if (a.animationName) anims.push(a); }));
  }
  function frame(now) {
    const dt = Math.max(1, now - lastT);
    const y = window.scrollY;
    const speed = Math.abs(y - lastY) / dt * 16.7;
    lastY = y; lastT = now;
    const target = 1 + Math.min(speed * .9, 24);
    rate += (target - rate) * (target > rate ? .25 : .06);
    scan(now);
    const r = rate < 1.02 ? 1 : rate;
    if (Math.abs(r - (frame._last || 1)) > .25 || (r === 1 && frame._last !== 1)) {   // only touch the animations when the speed visibly changed
      frame._last = r;
      for (let i = 0; i < anims.length; i++) anims[i].playbackRate = r;
    }
    if (r === 1 && speed < .05) { running = false; rate = 1; return; }
    requestAnimationFrame(frame);
  }
  function wake() { if (running) return; running = true; lastT = performance.now(); lastY = window.scrollY; requestAnimationFrame(frame); }
  window.addEventListener('scroll', wake, { passive: true });
})();


/* Kinetic hero heading.
   Once the typewriter has finished, the heading is split into letters (in the real text AND in the
   ribbon overlay layer so the two stay pixel-aligned). Each letter is then driven by one spring loop:
   - pointer proximity lifts, scales and tilts nearby letters (a soft "magnet" wave),
   - scroll velocity shears the word with a per-letter lag,
   - a slow idle swell keeps the heading alive,
   - a left-to-right ripple plays once when typing completes.
   Transform-only, so layout never reflows. Skipped for prefers-reduced-motion. */
(() => {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let started = false;

  function splitText(root) {
    // Split every typed text run into word > letter spans (words stay unbreakable, spaces stay real).
    const runs = root.querySelectorAll('.zh-type > span:first-child');
    runs.forEach((run) => {
      const text = run.textContent;
      if (!text || run.querySelector('.kin-ch')) return;
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
        const word = document.createElement('span');
        word.className = 'kin-word';
        Array.from(part).forEach((c) => {
          const ch = document.createElement('span');
          ch.className = 'kin-ch';
          ch.textContent = c;
          ch.setAttribute('data-ch', c);
          word.appendChild(ch);
        });
        frag.appendChild(word);
      });
      run.replaceChildren(frag);
    });
  }

  function start(title) {
    if (started) return;
    started = true;
    title.classList.add('kin-on');
    splitText(title);

    // Letters in the real text, and their mirrors inside each cv-layer (rebuilt by the resync observer).
    let real = [], mirrors = [];
    // Each overlay letter paints its own slice of the ribbon texture; --ox keeps the texture continuous
    // across letters by shifting it back by the letter's rest position inside the overlay.
    const pageX = (el) => { let x = 0, n = el; while (n) { x += n.offsetLeft; n = n.offsetParent; } return x; };
    const syncOffsets = () => {
      const base = pageX(title);
      real.forEach((n) => n.style.setProperty('--ox', (pageX(n) - base) + 'px'));
    };
    const collect = () => {
      real = Array.from(title.querySelectorAll('.kin-ch')).filter((n) => !n.closest('.cv-layer'));
      const layers = Array.from(title.querySelectorAll('.cv-layer'));
      mirrors = real.map(() => null);
      // Mirrors appear in the same document order inside each layer, line by line.
      const per = layers.map((l) => Array.from(l.querySelectorAll('.kin-ch')));
      syncOffsets();
      state.length = real.length;
      for (let i = 0; i < real.length; i++) {
        if (!state[i]) state[i] = { y: 0, vy: 0, r: 0, vr: 0, s: 1, vs: 0, k: 0, vk: 0, x: 0, w: 0 };
      }
    };
    const state = [];
    collect();
    // Real letters and layer letters are both in document order, but the h1 lists real text per line
    // then the layer per line; line order is the same, so index i maps to the same glyph.
    // Rebuild the mapping whenever the overlay re-clones the heading.
    const mo = new MutationObserver(() => collect());
    title.querySelectorAll('.cv-layer').forEach((l) => mo.observe(l, { childList: true, subtree: true }));

    // Pointer, in viewport px.
    const ptr = { x: -9999, y: -9999, on: false, vx: 0 };
    let lastPX = 0;
    window.addEventListener('pointermove', (e) => {
      ptr.x = e.clientX; ptr.y = e.clientY; ptr.on = true;
      ptr.vx = e.clientX - lastPX; lastPX = e.clientX;
    }, { passive: true });
    document.addEventListener('pointerleave', () => { ptr.on = false; });
    window.addEventListener('blur', () => { ptr.on = false; });

    // Scroll velocity (smoothed).
    let lastY = window.scrollY, scrollV = 0;

    // Layout cache: letter centres in page coordinates; refreshed on resize / font load / scroll end.
    let centers = [], em = 100, dirty = true;
    const measure = () => {
      dirty = false;
      syncOffsets();
      const sy = window.scrollY;
      em = parseFloat(getComputedStyle(title).fontSize) || 100;
      centers = real.map((n) => {
        const r = n.getBoundingClientRect();
        // getBoundingClientRect includes the current transform; back it out so we get the rest position.
        const st = state[real.indexOf(n)] || { y: 0 };
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 + st.y * em + sy, w: r.width };
      });
    };
    window.addEventListener('resize', () => { dirty = true; }, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { dirty = true; });

    // Entrance ripple: each letter gets a delayed impulse.
    const t0 = performance.now();
    const rippleAt = (i) => t0 + 120 + i * 38;
    const kicked = [];

    // Critically-damped-ish spring step.
    const spring = (st, key, vkey, target, k, d, dt) => {
      const a = (target - st[key]) * k - st[vkey] * d;
      st[vkey] += a * dt;
      st[key] += st[vkey] * dt;
    };

    let last = performance.now();
    let awake = true;
    let visible = true;
    new IntersectionObserver((e) => { visible = e[0].isIntersecting; title.classList.toggle('kin-offscreen', !visible); }, { threshold: 0 }).observe(title);

    function frame(now) {
      requestAnimationFrame(frame);
      if (!visible) { last = now; return; }
      const dt = Math.min(.034, (now - last) / 1000); last = now;
      if (dt <= 0) return;
      if (dirty) measure();
      const sy = window.scrollY;
      const dv = sy - lastY; lastY = sy;
      scrollV += (dv - scrollV) * .18;
      const shear = Math.max(-1, Math.min(1, scrollV / 40));   // -1..1
      const sc = sy;
      const R = em * 1.25;                                      // pointer influence radius
      const tt = now / 1000;
      // Sleep: nothing to animate when the pointer is away, scroll is still and every spring has settled.
      if (!ptr.on && Math.abs(scrollV) < .05 && now > t0 + 120 + real.length * 38 + 1200 && !awake) return;
      let moving = false;
      for (let i = 0; i < real.length; i++) {
        const st = state[i], c = centers[i];
        if (!c) continue;
        kicked[i] = true; // entrance ripple removed: the typed text turns into the final letters with no hop
        let ty = 0;
        let tr = 0;
        let ts = 1, tk = -shear * .22 * (.55 + .45 * Math.sin(i * .9));
        if (ptr.on) {
          const dx = ptr.x - c.x, dy = ptr.y - (c.y - sc);
          const dist = Math.hypot(dx, dy);
          if (dist < R) {
            const f = 1 - dist / R, e = f * f * (3 - 2 * f);     // smoothstep
            ty += -e * .16 + (dy > 0 ? -1 : 1) * 0;              // lift
            ts += e * .16;                                       // swell
            tr += (dx / R) * -e * .22;                           // lean away from the pointer
            tk += (dx / R) * e * .16;
          }
        }
        spring(st, 'y', 'vy', ty, 120, 13, dt);
        spring(st, 'r', 'vr', tr, 120, 12, dt);
        spring(st, 's', 'vs', ts, 140, 14, dt);
        spring(st, 'k', 'vk', tk, 100, 12, dt);
        const tf = `translate3d(0,${(st.y * em).toFixed(2)}px,0) rotate(${st.r.toFixed(4)}rad) skewX(${st.k.toFixed(4)}rad) scale(${st.s.toFixed(4)})`;
        if (Math.abs(st.vy) + Math.abs(st.vr) + Math.abs(st.vs) + Math.abs(st.vk) > .02 || Math.abs(st.y) > .0005 || Math.abs(st.r) > .0005 || Math.abs(st.s - 1) > .0005 || Math.abs(st.k) > .0005) moving = true;
        if (st.tf === tf) continue;
        st.tf = tf;
        real[i].style.transform = tf;
        const m = mirrors[i];
        if (m) m.style.transform = tf;
      }
      awake = moving;
    }
    requestAnimationFrame(frame);
    // Re-measure after typing settled and fonts are in.
    setTimeout(() => { dirty = true; }, 400);
  }

  function arm() {
    const title = document.querySelector('[data-testid="hero-title"]');
    if (!title) return false;
    if (title.dataset.typed === 'true') { start(title); return true; }
    title.addEventListener('zh:typed', () => start(title), { once: true });
    return true;
  }
  if (!arm()) {
    const wait = new MutationObserver(() => { if (arm()) wait.disconnect(); });
    wait.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => wait.disconnect(), 15000);
  }
})();


/* v78 — The brief goals: scroll-focused rows with a drawn rule and a one-glance target for each goal. */
(() => {
  const METRICS = ['5 sec · first screen', '≤ 3 clicks', '< 3 s · patchy 4G', '1 action · repeated', 'Thumb first'];
  let rows = [], box = null, raf = 0;
  function mount() {
    box = document.querySelector('[data-testid="brief-goals"]');
    if (!box) return false;
    rows = Array.from(box.querySelectorAll('.goal-row'));
    if (!rows.length) return false;
    rows.forEach((row, i) => row.setAttribute('data-metric', METRICS[i] || ''));
    box.classList.add('bg-ready');
    update();
    return true;
  }
  function update() {
    raf = 0;
    if (!box) return;
    const line = window.innerHeight * .55;
    const r = box.getBoundingClientRect();
    let current = -1;
    if (r.top < line && r.bottom > window.innerHeight * .2) rows.forEach((row, i) => { if (row.getBoundingClientRect().top <= line) current = i; });
    rows.forEach((row, i) => row.classList.toggle('is-current', i === current));
  }
  const queue = () => { if (!raf) raf = requestAnimationFrame(update); };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  if (!mount()) {
    const mo = new MutationObserver(() => { if (mount()) mo.disconnect(); });
    mo.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(() => mo.disconnect(), 15000);
  }
})();


/* Hero title size + mesh sync.
   - The font size is worked out ONCE from the final (weight 900) text so that "& development." fits on one line,
     and is used for the typed text and the final letters alike: the heading never changes size when typing ends.
   - The typed text's mesh drifts on the same clock as the final letters (see --kin-delay), so the flow is continuous. */
(() => {
  const LINES = ['Web design', '& development.'];
  function fitTitle() {
    const t = document.querySelector('.hero h1.hero-title');
    if (!t) return;
    t.style.fontSize = '';
    const cs = getComputedStyle(t);
    const base = parseFloat(cs.fontSize);
    const probe = document.createElement('span');
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:0;white-space:pre;pointer-events:none;' +
      'font-family:' + cs.fontFamily + ';font-weight:900;font-stretch:' + cs.fontStretch + ';letter-spacing:' + cs.letterSpacing +
      ';font-size:' + base + 'px;line-height:1;font-variation-settings:' + cs.fontVariationSettings;
    document.body.appendChild(probe);
    let widest = 0;
    LINES.forEach((l) => { probe.textContent = l; widest = Math.max(widest, probe.getBoundingClientRect().width); });
    probe.remove();
    const avail = t.clientWidth;
    if (widest > avail && widest > 0) t.style.fontSize = Math.floor(base * (avail / widest) * 0.98 * 100) / 100 + 'px';
  }
  let raf = 0;
  const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fitTitle); };
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  if (document.fonts) {
    if (document.fonts.ready) document.fonts.ready.then(schedule);
    if (document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', schedule);
  }

  let typeStart = null;
  const boot = setInterval(() => {
    const t = document.querySelector('.hero h1.hero-title');
    if (!t) return;
    clearInterval(boot);
    schedule();
    const mark = () => {
      if (typeStart === null && t.querySelector('.zh-type > span:first-child')) typeStart = performance.now();
      if (t.classList.contains('kin-on') && !t.style.getPropertyValue('--kin-delay')) {
        const elapsed = typeStart === null ? 0 : (performance.now() - typeStart) / 1000;
        t.style.setProperty('--kin-delay', '-' + elapsed.toFixed(3) + 's');
      }
    };
    new MutationObserver(mark).observe(t, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    mark();
  }, 50);
})();


/* "feels": one single text node. The laptop mock used two stacked copies (black + clay overlay crossfaded by
   opacity), which looked doubled. The overlay is hidden and the one real word is tinted between the two colours. */
(() => {
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const rgb = (c) => (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number);
  let word = null, ghost = null, last = -1, baseKey = '';
  function frame() {
    requestAnimationFrame(frame);
    if (!word || !word.isConnected) {
      word = document.querySelector('.lm-feels');
      ghost = word && word.querySelector('i');
      last = -1;
      if (!word) return;
    }
    if (!ghost || !ghost.isConnected) { ghost = word.querySelector('i'); if (!ghost) return; }
    // Oval: follow the original pencil ellipse's opacity and left-to-right reveal.
    const el = document.querySelector('.lm-sketch ellipse');
    if (el) {
      const o = parseFloat(el.style.opacity);
      if (!isNaN(o)) word.style.setProperty('--ring-o', String(o));
      const m = /inset\(\s*0(?:px)?\s+([\d.]+)%/.exec(el.style.clipPath || '');
      if (m) word.style.setProperty('--ring-clip', 'inset(-20% ' + m[1] + '% -20% -20%)');
    }
    const t = Math.max(0, Math.min(1, parseFloat(ghost.style.opacity)));
    const base = getComputedStyle(word.parentElement).color;
    const key = t + '|' + base;
    if (key === baseKey || isNaN(t)) return;
    baseKey = key;
    const clay = getComputedStyle(ghost).color;
    word.style.color = 'rgb(' + mix(rgb(base), rgb(clay), t).join(',') + ')';
  }
  requestAnimationFrame(frame);
})();
