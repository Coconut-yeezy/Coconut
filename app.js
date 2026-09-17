const { portfolioData } = window;

const app = document.getElementById('app');
const nav = document.querySelector('.main-nav');

function renderNav() {
  nav.innerHTML = portfolioData.navigation
    .map(
      (item) => `
        <a href="${item.href}">${item.label}</a>
      `
    )
    .join('');
}

function renderHero() {
  return `
    <section id="hero" class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow">${portfolioData.hero.eyebrow}</p>
        <h1>
          ${portfolioData.hero.title}
          <span>${portfolioData.hero.subtitle}</span>
        </h1>
        <p class="hero-intro">${portfolioData.hero.intro}</p>

        <div class="hero-actions">
          <a class="primary-btn" href="${portfolioData.hero.primaryCta.href}">${portfolioData.hero.primaryCta.label}</a>
          <a class="secondary-btn" href="${portfolioData.hero.secondaryCta.href}">${portfolioData.hero.secondaryCta.label}</a>
        </div>

        <div class="highlight-list">
          ${portfolioData.hero.highlights
            .map(
              (item) => `
                <span>${item}</span>
              `
            )
            .join('')}
        </div>
      </div>

      <div class="hero-visual">
        <div class="portrait-card">
          <div class="portrait-blob"></div>
          <div class="portrait-content">
            <p class="label">Profile</p>
            <h3>${portfolioData.profile.fullName}</h3>
            <ul>
              <li>${portfolioData.profile.location}</li>
              <li>${portfolioData.profile.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderStats() {
  return `
    <section class="stats section-shell">
      <div class="stats-grid">
        ${portfolioData.hero.stats
          .map(
            (stat) => `
              <div class="stat-card scroll-reveal">
                <strong>${stat.value}</strong>
                <span>${stat.label}</span>
              </div>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderWorks() {
  const featuredWork =
    portfolioData.works.find((work) => work.name.includes('Munchkin')) || portfolioData.works[0];

  return `
    <section id="works" class="section-shell">
      <div class="section-heading align-between">
        <div>
          <p class="eyebrow">Works</p>
          <h2>Selected work</h2>
        </div>
        <span class="mini-pill">ICE WORKS</span>
      </div>

      <div class="ring-shell">
        <div class="ring-stage" id="ringStage">
          <div class="ring-track">
            ${portfolioData.works
              .map(
                (work, index) => `
                  <article
                    class="ring-card scroll-reveal"
                    data-index="${index}"
                    data-name="${work.name}"
                    data-type="${work.type}"
                    data-year="${work.year}"
                    data-description="${work.description}"
                    data-tags="${work.tags.join(',')}"
                    data-palette="${work.palette.join(',')}"
                  >
                    <div class="work-visual" style="background: linear-gradient(135deg, ${work.palette[0]}, ${work.palette[1]} 52%, ${work.palette[2]});">
                      <div class="work-glow"></div>
                    </div>
                    <div class="work-meta">
                      <div class="work-topline">
                        <span class="work-index">0${index + 1}</span>
                        <span class="work-year">${work.year}</span>
                      </div>
                      <h3>${work.name}</h3>
                      <p class="work-type">${work.type}</p>
                      <p class="work-description">${work.description}</p>
                      <div class="tag-list">
                        ${work.tags
                          .map(
                            (tag) => `
                              <span>${tag}</span>
                            `
                          )
                          .join('')}
                      </div>
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>

        <aside class="ring-info">
          <p class="eyebrow">Current</p>
          <h3 id="ringInfoTitle">${featuredWork.name}</h3>
          <p id="ringInfoType" class="ring-type">${featuredWork.type}</p>
          <p id="ringInfoDesc" class="ring-description">${featuredWork.description}</p>
          <div id="ringInfoTags" class="tag-list">
            ${featuredWork.tags
              .map(
                (tag) => `
                  <span>${tag}</span>
                `
              )
              .join('')}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderFocusAreas() {
  return `
    <section id="method" class="section-shell">
      <div class="section-heading">
        <p class="eyebrow">Method</p>
        <h2>Approach</h2>
      </div>

      <div class="focus-grid">
        ${portfolioData.methods
          .map(
            (area) => `
              <article class="focus-card scroll-reveal">
                <div class="focus-icon">${area.accent}</div>
                <h3>${area.title}</h3>
                <p>${area.text}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderProcess() {
  return `
    <section id="process" class="section-shell">
      <div class="section-heading">
        <p class="eyebrow">Workflow</p>
        <h2>Process</h2>
      </div>

      <div class="process-grid">
        ${portfolioData.process
          .map(
            (item) => `
              <article class="step-card scroll-reveal">
                <span class="step-index">${item.step}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderEducation() {
  return `
    <section id="archive" class="section-shell">
      <div class="section-heading">
        <p class="eyebrow">Archive</p>
        <h2>Background</h2>
      </div>

      <div class="timeline-list">
        ${portfolioData.archive
          .map(
            (item) => `
              <article class="timeline-card scroll-reveal">
                <div class="period">${item.period}</div>
                <div class="content">
                  <h3>${item.title}</h3>
                  <p class="detail">${item.detail}</p>
                  <div class="tag-list">
                    ${item.tags
                      .map(
                        (tag) => `
                          <span>${tag}</span>
                        `
                      )
                      .join('')}
                  </div>
                </div>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section id="contact" class="section-shell contact-section">
      <div class="section-heading">
        <p class="eyebrow">Contact</p>
        <h2>Contact</h2>
      </div>

      <div class="contact-layout">
        <div class="contact-info">
          <p>${portfolioData.contact.intro}</p>
          <div class="contact-list">
            <div>
              <span>Email</span>
              <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a>
            </div>
            <div>
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/${portfolioData.contact.linkedin}" target="_blank" rel="noreferrer">${portfolioData.contact.linkedin}</a>
            </div>
          </div>
        </div>

        <form class="contact-form">
          <h3>${portfolioData.contact.formTitle}</h3>
          ${portfolioData.contact.fields
            .map(
              (field) => {
                if (field.type === 'textarea') {
                  return `
                    <label>
                      <span>${field.label}</span>
                      <textarea placeholder="${field.placeholder}"></textarea>
                    </label>
                  `;
                }

                return `
                  <label>
                    <span>${field.label}</span>
                    <input type="${field.type}" placeholder="${field.placeholder}" />
                  </label>
                `;
              }
            )
            .join('')}
          <button class="primary-btn" type="submit">Send message</button>
        </form>
      </div>
    </section>
  `;
}

function updateRingInfo(activeCard) {
  const title = document.getElementById('ringInfoTitle');
  const type = document.getElementById('ringInfoType');
  const desc = document.getElementById('ringInfoDesc');
  const tags = document.getElementById('ringInfoTags');
  const ringInfo = document.querySelector('.ring-info');

  if (!title || !type || !desc || !tags || !activeCard) return;

  title.textContent = activeCard.dataset.name;
  type.textContent = activeCard.dataset.type;
  desc.textContent = activeCard.dataset.description;
  tags.innerHTML = activeCard.dataset.tags
    .split(',')
    .map((tag) => `<span>${tag}</span>`)
    .join('');

  const palette = (activeCard.dataset.palette || '').split(',').filter(Boolean);

  if (ringInfo) {
    ringInfo.style.setProperty('--ring-accent-1', palette[0] || '#f0f0f0');
    ringInfo.style.setProperty('--ring-accent-2', palette[1] || '#d5d5d5');
    ringInfo.style.setProperty('--ring-accent-3', palette[2] || '#bbbbbb');
  }
}

function initRingCarousel() {
  const stage = document.getElementById('ringStage');
  const cards = [...document.querySelectorAll('.ring-card')];

  if (!stage || !cards.length) return;

  const step = 360 / cards.length;
  const radius = 290;
  let rotation = 0;
  let targetRotation = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartTarget = 0;
  let dragVelocity = 0;
  let homePulse = 0;

  function updateCarousel() {
    cards.forEach((card, index) => {
      const raw = ((index * step + rotation) % 360 + 360) % 360;
      const offset = raw > 180 ? raw - 360 : raw;
      const angle = (offset * Math.PI) / 180;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.26;
      const dist = Math.abs(offset);
      const scale = 1 - dist / 180 * 0.54;
      const opacity = 1 - dist / 180 * 0.8;
      const tilt = offset * -0.18;
      const arc = (index / cards.length) % 1;
      const bump = Math.sin(Math.PI * (arc + homePulse * 0.7));
      const localX = x + (index - cards.length / 2) * 18 * homePulse * 0.7 + Math.sin(homePulse * 12 + arc * Math.PI * 2) * 20 * homePulse;
      const localY = y + 18 * bump * homePulse + Math.cos(homePulse * 9 + arc * Math.PI) * 12 * homePulse;
      const morphTilt = tilt + Math.PI * (index % 2 ? -1 : 1) * bump * homePulse * 0.22;
      const morphScale = scale + (0.12 + 0.18 * bump) * homePulse;

      card.style.transform = `translate(${localX}px, ${localY}px) rotateY(${morphTilt}deg) scale(${morphScale})`;
      card.style.opacity = opacity;
      card.style.zIndex = String(100 - Math.round(dist));
      card.classList.toggle('is-active', dist < 12);
      card.style.filter = dist < 18 ? 'saturate(1.08) brightness(1.02)' : 'saturate(0.9) brightness(0.96)';
    });

    let activeCard = cards[0];
    let bestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const index = Number(card.dataset.index);
      const raw = ((index * step + rotation) % 360 + 360) % 360;
      const offset = raw > 180 ? raw - 360 : raw;
      const distance = Math.abs(offset);

      if (distance < bestDistance) {
        bestDistance = distance;
        activeCard = card;
      }
    });

    updateRingInfo(activeCard);
  }

  function tick() {
    rotation += (targetRotation - rotation) * 0.12;
    targetRotation += dragVelocity;
    dragVelocity *= 0.96;
    homePulse *= 0.9;
    if (homePulse < 0.01) homePulse = 0;
    updateCarousel();
    requestAnimationFrame(tick);
  }

  stage.addEventListener(
    'wheel',
    (event) => {
      event.preventDefault();
      targetRotation -= event.deltaY * 0.12;
      dragVelocity = event.deltaY * 0.01;
    },
    { passive: false }
  );

  stage.addEventListener('pointerdown', (event) => {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartTarget = targetRotation;
    stage.setPointerCapture(event.pointerId);
  });

  stage.addEventListener('pointermove', (event) => {
    if (!isDragging) return;
    const delta = (dragStartX - event.clientX) * 0.32;
    targetRotation = dragStartTarget + delta;
    dragVelocity = delta * 0.03;
  });

  stage.addEventListener('pointerup', () => {
    isDragging = false;
  });

  stage.addEventListener('pointerleave', () => {
    isDragging = false;
  });

  cards.forEach((card) => {
    card.addEventListener('pointerenter', () => {
      const index = Number(card.dataset.index);
      targetRotation = -(index * step);
      dragVelocity = 0;
    });

    card.addEventListener('click', () => {
      const index = Number(card.dataset.index);
      targetRotation = -(index * step);
      dragVelocity = 0;
    });
  });

  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      homePulse = 1;
      stage.classList.add('hero-clicked');
      window.clearTimeout(stage._homeClickTimer);
      stage._homeClickTimer = window.setTimeout(() => {
        stage.classList.remove('hero-clicked');
      }, 520);
    });
  }

  updateCarousel();
  requestAnimationFrame(tick);
}

function renderPage() {
  app.innerHTML = `
    ${renderHero()}
    ${renderStats()}
    ${renderWorks()}
    ${renderFocusAreas()}
    ${renderProcess()}
    ${renderEducation()}
    ${renderContact()}
  `;

  observeReveal();
  initRingCarousel();
}

function observeReveal() {
  const revealItems = document.querySelectorAll('.scroll-reveal');

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initIntroExperience() {
  const intro = document.getElementById('introScreen');
  const canvas = document.getElementById('introCanvasFallback');
  const portfolio = document.getElementById('portfolioShell');
  const nameInput = document.getElementById('introName');
  const sparkleButton = document.getElementById('introSparkle');
  const settingsButton = document.getElementById('introSettings');
  const settingsPanel = document.getElementById('introSettingsPanel');
  const enterButton = document.getElementById('introEnter');
  const shareButton = document.getElementById('introShare');
  const status = document.getElementById('introStatus');
  const returnButton = document.getElementById('introReturn');

  if (!intro || !canvas || !portfolio || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const group = new THREE.Group();
  const particleCount = 3600;
  const positions = new Float32Array(particleCount * 3);
  const targetPositions = new Float32Array(particleCount * 3);
  const basePositions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.PointsMaterial({ size: 0.105, color: 0x000000, transparent: true, opacity: 1, alphaTest: 0.08, sizeAttenuation: true });
  const points = new THREE.Points(geometry, material);
  const lattice = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(3.15, 2)),
    new THREE.LineBasicMaterial({ color: 0xffe184, transparent: true, opacity: 0.1 })
  );
  let sparkle = 0;
  let rotationX = -0.08;
  let rotationY = 0.34;
  let dragX = 0;
  let dragY = 0;
  let isDragging = false;

  scene.add(group);
  group.add(points, lattice);
  camera.position.z = 10;

  function resize() {
    const width = intro.clientWidth;
    const height = intro.clientHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function makeTargets(text) {
    const textCanvas = document.createElement('canvas');
    const context = textCanvas.getContext('2d', { willReadFrequently: true });
    const fontSize = Math.min(190, Math.max(86, 860 / Math.max(text.length, 4)));
    textCanvas.width = 1000;
    textCanvas.height = 280;
    context.clearRect(0, 0, textCanvas.width, textCanvas.height);
    context.fillStyle = '#ffffff';
    context.font = `900 ${fontSize}px Inter, Noto Sans SC, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text || 'AVIS', textCanvas.width / 2, textCanvas.height / 2);
    const pixels = context.getImageData(0, 0, textCanvas.width, textCanvas.height).data;
    const samples = [];
    for (let y = 0; y < textCanvas.height; y += 4) {
      for (let x = 0; x < textCanvas.width; x += 4) {
        if (pixels[(y * textCanvas.width + x) * 4 + 3] > 100) samples.push({ x, y });
      }
    }

    for (let index = 0; index < particleCount; index += 1) {
      const sample = samples[Math.floor(Math.random() * samples.length)] || { x: 500, y: 140 };
      const offset = index * 3;
      targetPositions[offset] = (sample.x - 500) / 125;
      targetPositions[offset + 1] = -(sample.y - 140) / 125;
      targetPositions[offset + 2] = (Math.random() - 0.5) * 0.42;
    }
  }

  function setName(text) {
    makeTargets(text);
    sparkle = Math.max(sparkle, 0.8);
    status.textContent = `BUILDING “${text || 'AVIS'}” · DRAG TO ROTATE`;
  }

  function burst() {
    sparkle = 1.6;
    for (let index = 0; index < particleCount * 3; index += 1) velocities[index] += (Math.random() - 0.5) * 0.08;
    status.textContent = 'SPARKLE FIELD ACTIVE · CLICK AGAIN';
  }

  function animate() {
    requestAnimationFrame(animate);
    sparkle *= 0.94;
    const positionAttribute = geometry.attributes.position;
    for (let index = 0; index < particleCount * 3; index += 1) {
      const noise = sparkle * velocities[index];
      velocities[index] *= 0.92;
      positions[index] += (targetPositions[index] + noise - positions[index]) * 0.08;
      basePositions[index] = positions[index];
    }
    positionAttribute.needsUpdate = true;
    group.rotation.x += (rotationX - group.rotation.x) * 0.06;
    group.rotation.y += (rotationY - group.rotation.y) * 0.06;
    lattice.rotation.z += 0.0015;
    material.size = 0.105 + sparkle * 0.045;
    material.opacity = 0.92 + Math.min(sparkle, 1) * 0.08;
    lattice.material.opacity = 0.08 + Math.min(sparkle, 1) * 0.12;
    renderer.render(scene, camera);
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  makeTargets(nameInput.value);
  if (document.fonts?.ready) document.fonts.ready.then(() => makeTargets(nameInput.value));
  resize();
  window.addEventListener('resize', resize);
  canvas.addEventListener('pointerdown', (event) => {
    isDragging = true;
    dragX = event.clientX;
    dragY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!isDragging) return;
    rotationY += (event.clientX - dragX) * 0.006;
    rotationX += (event.clientY - dragY) * 0.004;
    dragX = event.clientX;
    dragY = event.clientY;
  });
  canvas.addEventListener('pointerup', () => { isDragging = false; });
  canvas.addEventListener('click', burst);
  nameInput.addEventListener('input', (event) => setName(event.target.value));
  sparkleButton.addEventListener('click', burst);
  settingsButton.addEventListener('click', () => {
    const isOpen = settingsPanel.hidden;
    settingsPanel.hidden = !isOpen;
    settingsButton.setAttribute('aria-expanded', String(isOpen));
  });
  document.getElementById('introLetterColor').addEventListener('input', (event) => material.color.set(event.target.value));
  document.getElementById('introBgColor').addEventListener('input', (event) => intro.style.setProperty('--intro-bg', event.target.value));
  document.getElementById('introDeepColor').addEventListener('input', (event) => intro.style.setProperty('--intro-deep', event.target.value));
  enterButton.addEventListener('click', () => {
    intro.classList.add('is-exiting');
    window.setTimeout(() => {
      intro.hidden = true;
      portfolio.hidden = false;
      window.scrollTo(0, 0);
    }, 650);
  });
  if (returnButton) {
    returnButton.addEventListener('click', () => {
      portfolio.hidden = true;
      intro.hidden = false;
      intro.classList.remove('is-exiting');
      window.scrollTo(0, 0);
    });
  }
  shareButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      status.textContent = 'LINK COPIED · SHARE THE FIELD';
    } catch (error) {
      status.textContent = 'COPY UNAVAILABLE · SHARE FROM YOUR BROWSER';
    }
  });
  animate();
}

initIntroExperience();
renderNav();
renderPage();
