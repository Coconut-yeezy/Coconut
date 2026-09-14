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
              <li>${portfolioData.profile.linkedin}</li>
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
  return `
    <section id="works" class="section-shell">
      <div class="section-heading align-between">
        <div>
          <p class="eyebrow">Works</p>
          <h2>作品轮播</h2>
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
          <h3 id="ringInfoTitle">${portfolioData.works[0].name}</h3>
          <p id="ringInfoType" class="ring-type">${portfolioData.works[0].type}</p>
          <p id="ringInfoDesc" class="ring-description">${portfolioData.works[0].description}</p>
          <div id="ringInfoTags" class="tag-list">
            ${portfolioData.works[0].tags
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
        <h2>创作方法</h2>
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
        <h2>创作流程</h2>
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
        <h2>档案与背景</h2>
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
        <h2>联系我</h2>
      </div>

      <div class="contact-layout">
        <div class="contact-info">
          <p>${portfolioData.contact.intro}</p>
          <div class="contact-list">
            <div>
              <span>邮箱</span>
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
          <button class="primary-btn" type="submit">发送消息</button>
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
    ringInfo.style.setProperty('--ring-accent-1', palette[0] || '#dfeef1');
    ringInfo.style.setProperty('--ring-accent-2', palette[1] || '#c7dfe7');
    ringInfo.style.setProperty('--ring-accent-3', palette[2] || '#e9c7d8');
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

      card.style.transform = `translate(${x}px, ${y}px) rotateY(${tilt}deg) scale(${scale})`;
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

renderNav();
renderPage();
