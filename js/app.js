/**
 * VULKOR PERFORMANCE - Application Controller
 * Alinhado com o Design System Oficial (Montserrat, 0-Radius, Monocromático, Componentes Táticos)
 */

class VulkorApp {
  constructor() {
    this.activeModality = null;
    this.currentTestimonialIndex = 0;
    this.totalTestimonials = 4;

    this.init();
  }

  init() {
    this.renderHomeProducts();
    this.initTestimonialsCarousel();
    this.initScrollAnimations();
    this.initCustomCursor();

    // Routing by URL Hash
    this.handleHashChange();
    window.addEventListener('hashchange', () => this.handleHashChange());

    // Escape key listener for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    console.log("Vulkor Performance Design System initialized.");
  }

  // ==========================================
  // ROUTING & VIEWS
  // ==========================================
  handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash.startsWith('modalidade/')) {
      const modId = hash.split('/')[1];
      this.showModalityDetails(modId);
    } else {
      this.showHomeView();
    }
  }

  showHome(event) {
    if (event) event.preventDefault();
    window.location.hash = '';
    this.showHomeView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showHomeView() {
    this.activeModality = null;
    const homeView = document.getElementById('homeView');
    const detailsView = document.getElementById('detailsView');

    if (homeView && detailsView) {
      detailsView.style.display = 'none';
      detailsView.innerHTML = '';
      homeView.style.display = 'block';
    }

    this.updateNavLinks('home');
    setTimeout(() => this.initScrollAnimations(), 40);
  }

  scrollToSection(sectionId, event) {
    if (event) event.preventDefault();

    const homeView = document.getElementById('homeView');
    if (homeView && homeView.style.display === 'none') {
      this.showHomeView();
    }

    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        const headerOffset = 30;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);

    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.remove('active');

    this.updateNavLinks(sectionId);
  }

  updateNavLinks(activeSection) {
    const links = document.querySelectorAll('.nav-links a');
    if (!links || links.length === 0) return;
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeSection}` || (activeSection === 'home' && href === '#home')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // ==========================================
  // MODALITY DETAILS VIEW
  // ==========================================
  showModalityDetails(modalityId, event) {
    if (event) event.preventDefault();

    const modality = VULKOR_DATA.modalities.find(m => m.id === modalityId);
    if (!modality) {
      this.showToast("Modalidade não encontrada.");
      return;
    }

    this.activeModality = modality;
    window.location.hash = `modalidade/${modalityId}`;

    const homeView = document.getElementById('homeView');
    const detailsView = document.getElementById('detailsView');

    if (homeView) homeView.style.display = 'none';
    if (detailsView) {
      detailsView.style.display = 'block';

      detailsView.innerHTML = `
        <div class="container details-view-container">
          <!-- Back Bar -->
          <div class="back-bar">
            <button class="btn btn-outline btn-sm" onclick="app.showHome(event)">
              <div class="btn-corner-triangle"></div>
              <i class="fa-solid fa-arrow-left"></i> Voltar para a Página Principal
            </button>
            <div class="details-breadcrumb">
              Início / Modalidades / <span style="color: var(--color-black);">${modality.name}</span>
            </div>
          </div>

          <!-- Modality Hero Box (Design System) -->
          <div class="details-hero-box">
            <div class="details-hero-info">
              <span class="badge" style="margin-bottom: 12px;">MOD // ${modality.number} - ${modality.tag}</span>
              <h1 class="details-main-title">${modality.name}</h1>
              <p class="details-tagline">
                ${modality.tagline}
              </p>
              <p class="details-desc-text">${modality.description}</p>
            </div>

            <div class="details-hero-img">
              <img src="${modality.heroImage}" alt="${modality.name}">
            </div>
          </div>

          <!-- Deep-Dive Article & Size Table -->
          <section class="details-engineering-section">
            <h2 class="details-section-heading">Qualidade e Construção // ${modality.name}</h2>
            <div class="details-engineering-grid">
              <div class="details-article-col">
                <h3>${modality.article.title}</h3>
                ${modality.article.paragraphs.map(p => `<p>${p}</p>`).join('')}

                <h3 style="margin-top: 25px;">Diferenciais de Qualidade:</h3>
                <ul class="details-diff-list">
                  ${modality.article.bulletPoints.map(bp => `<li><strong>${bp}</strong></li>`).join('')}
                </ul>
              </div>

              <!-- Size Table (Design System Spec) -->
              <div class="details-sizetable-box">
                <h3>Tabela de Tamanhos</h3>
                <p style="font-size: 12px; margin-bottom: 10px;">Consulte as medidas para escolha ideal do vestuário:</p>

                <div class="table-responsive-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Tamanho</th>
                        <th>Altura / Uso</th>
                        <th>Peso / Medida</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${modality.sizeChart.map(row => `
                        <tr>
                          <td><strong>${row.size}</strong></td>
                          <td>${row.height}</td>
                          <td>${row.weight}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <!-- Bottom Navigation & WhatsApp CTA -->
          <div class="details-bottom-cta" style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <a href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20personalizar%20${encodeURIComponent(modality.name)}" target="_blank" class="btn btn-primary btn-lg">
              <div class="btn-corner-triangle"></div>
              <i class="fa-brands fa-whatsapp"></i> Solicitar Orçamento Personalizado
            </a>
            <button class="btn btn-secondary btn-lg" onclick="app.showHome(event)">
              <div class="btn-corner-triangle"></div>
              <i class="fa-solid fa-arrow-left"></i> Voltar para a Página Principal
            </button>
          </div>
        </div>
      `;

      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => this.initScrollAnimations(), 50);
    }
  }

  // ==========================================
  // HOME PRODUCTS (MASCULINO / FEMININO / INFANTIL)
  // ==========================================
  renderHomeProducts() {
    const audiences = ['masculino', 'feminino', 'infantil'];

    audiences.forEach(audience => {
      const containerId = `productsGrid${audience.charAt(0).toUpperCase()}${audience.slice(1)}`;
      const container = document.getElementById(containerId);
      if (!container) return;

      const items = VULKOR_DATA.products.filter(p => p.audience === audience);
      container.innerHTML = items.map(p => this.renderProductItemHTML(p)).join('');
    });

    setTimeout(() => this.initScrollAnimations(), 40);
  }

  // Card de produto na home: imagem em larga escala, sem preço, botões ou tags.
  // Clique (ou Enter) em qualquer ponto do card abre o modal de detalhes.
  renderProductItemHTML(product) {
    return `
      <div class="category-item-fullimage product-card" role="button" tabindex="0"
           aria-label="Ver detalhes de ${product.name}"
           onclick="app.openProductModal('${product.id}')"
           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();app.openProductModal('${product.id}');}">
        <div class="category-card-triangle"></div>
        <img src="${product.image}" alt="${product.name}" class="category-fullimage-bg" loading="lazy">
        <div class="category-fullimage-overlay">
          <span class="category-fullimage-title product-card-title">${product.name}</span>
        </div>
      </div>
    `;
  }

  // ==========================================
  // PRODUCT QUICK MODAL (CATÁLOGO: DETALHES + PERSONALIZAÇÃO, SEM COMPRA)
  // ==========================================
  openProductModal(productId) {
    const product = VULKOR_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalProductBody');
    const modal = document.getElementById('productModal');

    const images = product.images && product.images.length > 0 ? product.images : [product.image];
    this.activeProduct = product;
    this.activeProductImageIndex = 0;

    const mainImage = images[this.activeProductImageIndex];

    // Carrossel quando o produto tem múltiplas imagens (ex.: rashguards personalizadas)
    const imageBox = images.length > 1 ? `
      <div class="modal-carousel">
        <button type="button" class="modal-carousel-btn modal-carousel-prev" onclick="app.changeProductImage(-1)" ${this.activeProductImageIndex === 0 ? 'disabled' : ''} aria-label="Ver imagem anterior">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <img src="${mainImage}" alt="${product.name}" id="modalMainProductImg">
        <button type="button" class="modal-carousel-btn modal-carousel-next" onclick="app.changeProductImage(1)" ${this.activeProductImageIndex >= images.length - 1 ? 'disabled' : ''} aria-label="Ver próxima imagem">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="modal-carousel-dots">
          ${images.map((img, idx) => `
            <button type="button" class="modal-carousel-dot${idx === 0 ? ' active' : ''}" onclick="app.selectProductImage(${idx})" aria-label="Ver imagem ${idx + 1}"></button>
          `).join('')}
        </div>
      </div>
    ` : `<img src="${mainImage}" alt="${product.name}" id="modalMainProductImg">`;

    modalBody.innerHTML = `
      <div class="modal-product-layout">
        <div class="modal-product-img-box">
          ${imageBox}
        </div>

        <div class="modal-product-details">
          <span class="badge">${product.modalityLabel}</span>
          <span class="badge badge-outline">${product.badge}</span>
          
          <h2 class="modal-product-title">${product.name}</h2>
          
          <p class="modal-product-desc">${product.description}</p>

          <label>Selecione o Tamanho:</label>
          <div class="modal-size-group" id="modalSizeGroup">
            ${product.sizes.map((s, idx) => `
              <button class="btn btn-outline btn-sm ${idx === 0 ? 'btn-primary' : ''}" onclick="app.selectSize(this)">
                <div class="btn-corner-triangle"></div>
                ${s}
              </button>
            `).join('')}
          </div>

          <div class="modal-specs-box">
            <label>Especificações:</label>
            <ul class="modal-specs-list">
              ${product.specs.map(sp => `<li>• ${sp}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
  }

  changeProductImage(delta) {
    if (!this.activeProduct) return;
    const images = this.activeProduct.images && this.activeProduct.images.length > 0 ? this.activeProduct.images : [this.activeProduct.image];
    const total = images.length;
    if (total <= 1) return;
    this.setActiveProductImage((this.activeProductImageIndex + delta + total) % total);
  }

  selectProductImage(index) {
    this.setActiveProductImage(index);
  }

  setActiveProductImage(index) {
    if (!this.activeProduct) return;
    const images = this.activeProduct.images && this.activeProduct.images.length > 0 ? this.activeProduct.images : [this.activeProduct.image];
    const total = images.length;
    if (index < 0 || index >= total) return;

    this.activeProductImageIndex = index;
    const mainImg = document.getElementById('modalMainProductImg');
    if (mainImg) mainImg.src = images[index];

    document.querySelectorAll('#productModal .modal-carousel-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });

    const prevBtn = document.querySelector('#productModal .modal-carousel-btn.modal-carousel-prev');
    const nextBtn = document.querySelector('#productModal .modal-carousel-btn.modal-carousel-next');
    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= total - 1;
  }

  selectSize(btn) {
    const parent = document.getElementById('modalSizeGroup');
    if (!parent) return;
    parent.querySelectorAll('button').forEach(b => {
      b.classList.remove('btn-primary');
      b.classList.add('btn-outline');
    });
    btn.classList.remove('btn-outline');
    btn.classList.add('btn-primary');
  }

  closeProductModal(e) {
    if (e.target.classList.contains('modal-backdrop')) {
      this.closeProductModalDirect();
    }
  }

  closeProductModalDirect() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('active');
    this.activeProduct = null;
    this.activeProductImageIndex = 0;
  }

  closeAllModals() {
    this.closeProductModalDirect();
    const searchModal = document.getElementById('searchModal');
    if (searchModal) searchModal.classList.remove('active');
  }

  // ==========================================
  // SEARCH MODAL
  // ==========================================
  toggleSearch() {
    const modal = document.getElementById('searchModal');
    if (!modal) return;
    modal.classList.toggle('active');

    if (modal.classList.contains('active')) {
      const input = document.getElementById('searchInput');
      if (input) {
        input.value = '';
        input.focus();
      }
      document.getElementById('searchResults').innerHTML = '';
    }
  }

  closeSearchModal(e) {
    if (e.target.classList.contains('modal-backdrop')) {
      this.toggleSearch();
    }
  }

  handleSearch(query) {
    const res = document.getElementById('searchResults');
    if (!res) return;

    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      res.innerHTML = '';
      return;
    }

    const matches = VULKOR_DATA.products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.modalityLabel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      res.innerHTML = `<p style="font-size: 12px; color: var(--color-text-muted);">Nenhum equipamento encontrado para "${query}".</p>`;
      return;
    }

    res.innerHTML = matches.map(p => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="app.openProductModal('${p.id}'); app.toggleSearch();">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${p.image}" style="width: 40px; height: 40px; object-fit: cover;">
          <div>
            <strong style="font-size: 13px; display: block;">${p.name}</strong>
            <small>${p.modalityLabel.toUpperCase()}</small>
          </div>
        </div>
        <div style="font-weight: 700; font-size: 13px;">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
      </div>
    `).join('');
  }

  toggleMobileMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('active');
  }

  handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const email = document.getElementById('contactEmail') ? document.getElementById('contactEmail').value.trim() : '';
    const sport = document.getElementById('contactSport').value;
    const message = document.getElementById('contactMessage').value.trim();

    let text = `🥋 *CONSULTORIA / PEDIDO - VULKOR PERFORMANCE*\n\n`;
    text += `*Nome:* ${name}\n`;
    text += `*WhatsApp:* ${phone}\n`;
    if (email) text += `*E-mail:* ${email}\n`;
    text += `*Interesse em Vestuário:* ${sport}\n`;
    text += `*Mensagem:* ${message}\n\n`;
    text += `_Enviado através do formulário de contato do site Vulkor Performance_`;

    const whatsappNumber = "5511999999999";
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;

    this.showToast(`Redirecionando ${name} para o WhatsApp oficial da Vulkor...`);
    window.open(url, '_blank');
  }

  showToast(message) {
    const toast = document.getElementById('toastBox');
    if (!toast) return;

    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(() => {
      toast.style.display = 'none';
    }, 3500);
  }

  // ==========================================
  // TESTIMONIALS 3-STAGE CAROUSEL (SCREENSHOT MATCH)
  // ==========================================
  initTestimonialsCarousel() {
    this.updateTestimonialCarousel();

    // Resize listener to recalculate shifts accurately
    window.addEventListener('resize', () => {
      this.updateTestimonialCarousel();
    });

    // Touch swipe support for mobile
    const stage = document.getElementById('testimonialsStage');
    if (stage) {
      let touchStartX = 0;
      let touchEndX = 0;
      stage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      stage.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 40) {
          this.nextTestimonial();
        } else if (touchEndX - touchStartX > 40) {
          this.prevTestimonial();
        }
      }, { passive: true });
    }
  }

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.totalTestimonials;
    this.updateTestimonialCarousel();
  }

  prevTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.totalTestimonials) % this.totalTestimonials;
    this.updateTestimonialCarousel();
  }

  goToTestimonial(index) {
    if (index >= 0 && index < this.totalTestimonials) {
      this.currentTestimonialIndex = index;
      this.updateTestimonialCarousel();
    }
  }

  updateTestimonialCarousel() {
    const cards = document.querySelectorAll('.testimonial-ref-card');
    if (!cards || cards.length === 0) return;

    const isDesktop = window.innerWidth > 768;

    cards.forEach((card, idx) => {
      let offset = idx - this.currentTestimonialIndex;

      // Wrap around for seamless looping
      if (offset > this.totalTestimonials / 2) offset -= this.totalTestimonials;
      if (offset < -this.totalTestimonials / 2) offset += this.totalTestimonials;

      card.style.left = '50%';
      if (offset === 0) {
        // Active Center Card
        card.classList.remove('side-card');
        card.classList.add('active-card');
        card.style.transform = 'translate(-50%, -50%) scale(1)';
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.filter = 'none';
        card.style.zIndex = '10';
        card.style.pointerEvents = 'auto';
        card.style.cursor = 'default';
      } else if (isDesktop && (offset === 1 || offset === -1)) {
        // Desktop Blurred Side Cards
        card.classList.remove('active-card');
        card.classList.add('side-card');

        let shift = 380;
        if (window.innerWidth <= 1024) {
          shift = 320;
        }

        const dir = offset > 0 ? 1 : -1;
        const xOffset = dir * shift;

        card.style.transform = `translate(calc(-50% + ${xOffset}px), -50%) scale(0.88)`;
        card.style.opacity = '0.55';
        card.style.visibility = 'visible';
        card.style.filter = 'blur(3px)';
        card.style.zIndex = '5';
        card.style.pointerEvents = 'auto';
        card.style.cursor = 'pointer';
      } else {
        // Hidden / Far Cards (or mobile inactive cards)
        card.classList.remove('active-card', 'side-card');
        const dir = offset > 0 ? 1 : -1;
        card.style.transform = isDesktop
          ? `translate(calc(-50% + ${dir * 540}px), -50%) scale(0.75)`
          : `translate(${dir > 0 ? '120%' : '-220%'}, -50%) scale(0.88)`;
        card.style.opacity = '0';
        card.style.visibility = 'hidden';
        card.style.filter = 'blur(6px)';
        card.style.zIndex = '1';
        card.style.pointerEvents = 'none';
      }
    });

    // Update active dot
    const dots = document.querySelectorAll('.testimonials-dots .t-dot');
    dots.forEach((dot, idx) => {
      if (idx === this.currentTestimonialIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // FAQ Accordion Toggle
  toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    if (!item) return;
    const isActive = item.classList.contains('active');
    
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(i => i.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  }

  // ==========================================
  // PURE JAVASCRIPT ENTRANCE & SCROLL ANIMATIONS
  // ==========================================
  initScrollAnimations() {
    if (typeof window === 'undefined') return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Hero Section Sequential Entrance
    const heroElements = document.querySelectorAll(
      '.hero-logo-wrap, .hero-main-heading, .hero-main-subtext, .hero-cta-buttons-wrap'
    );
    if (heroElements.length > 0) {
      heroElements.forEach((el, idx) => {
        if (!el.classList.contains('hero-reveal-init')) {
          el.classList.add('hero-reveal-init');
          setTimeout(() => {
            el.classList.add('hero-revealed');
          }, 80 + (idx * 120));
        }
      });
    }

    // Scroll-triggered Elements
    const elementsToAnimate = document.querySelectorAll(
      '.products-combat-title, .audience-block-title, .category-item-fullimage, .benefits-section-title, .benefit-card, .tactical-marquee-wrapper, .about-vertical-column, .about-main-black-card, .testimonials-ref-title, .testimonials-ref-carousel, .testimonials-dots, .testimonials-ref-cta, .contact-box-title, .contact-form-box, .contact-info-box, .faq-title, .faq-item, .product-item, .details-hero-box, .details-engineering-section, .details-catalog-section, .details-bottom-cta'
    );

    if (elementsToAnimate.length === 0) return;

    // Apply init class and staggered delay for grid items
    elementsToAnimate.forEach((el) => {
      if (!el.classList.contains('reveal-init') && !el.classList.contains('revealed')) {
        el.classList.add('reveal-init');
        const parent = el.parentElement;
        if (parent && (
          parent.classList.contains('categories-grid') ||
          parent.classList.contains('benefits-grid') ||
          parent.classList.contains('products-grid') ||
          parent.classList.contains('faq-list')
        )) {
          const siblingIndex = Array.from(parent.children).indexOf(el);
          el.style.transitionDelay = `${(siblingIndex % 4) * 0.1}s`;
        }
      }
    });

    if ('IntersectionObserver' in window) {
      if (!this.scrollObserver) {
        const observerOptions = {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08
        };

        this.scrollObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
      }

      elementsToAnimate.forEach(el => {
        if (!el.classList.contains('revealed')) {
          this.scrollObserver.observe(el);
        }
      });
    } else {
      // Fallback if IntersectionObserver is not available
      elementsToAnimate.forEach(el => el.classList.add('revealed'));
    }
  }

  // ==========================================
  // CIRCULO PRETO AO REDOR DO MOUSE (CURSOR FOLLOWER - SOMENTE DESKTOP)
  // ==========================================
  initCustomCursor() {
    const follower = document.getElementById('cursorFollower');
    if (!follower) return;

    // Check if device is desktop with fine pointer and hover capability
    const isDesktop = () => window.matchMedia('(min-width: 992px) and (hover: hover) and (pointer: fine)').matches;
    if (!isDesktop()) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let isMoving = false;

    window.addEventListener('mousemove', (e) => {
      if (!isDesktop()) {
        follower.classList.remove('active', 'hovering');
        return;
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        followerX = mouseX;
        followerY = mouseY;
        follower.classList.add('active');
        isMoving = true;
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      follower.classList.remove('active');
    });

    document.addEventListener('mouseenter', () => {
      if (isDesktop()) {
        follower.classList.add('active');
      }
    });

    // Detect hover over interactive elements
    const interactiveSelectors = 'a, button, input, select, textarea, .category-item-fullimage, .sublimation-stage, .benefit-card, .faq-question, .t-dot, .testimonial-ref-card';
    document.addEventListener('mouseover', (e) => {
      if (!isDesktop()) return;
      if (e.target.closest && e.target.closest(interactiveSelectors)) {
        follower.classList.add('hovering');
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      if (!isDesktop()) return;
      if (e.target.closest && e.target.closest(interactiveSelectors)) {
        follower.classList.remove('hovering');
      }
    }, { passive: true });

    // Smooth animation loop using lerp
    const animateCursor = () => {
      if (isMoving && isDesktop()) {
        followerX += (mouseX - followerX) * 0.22;
        followerY += (mouseY - followerY) * 0.22;
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);
  }
}

// Initialize Application
const app = new VulkorApp();
