/**
 * VULKOR PERFORMANCE - Application Controller
 * Alinhado com o Design System Oficial (Montserrat, 0-Radius, Monocromático, Componentes Táticos)
 */

class VulkorApp {
  constructor() {
    this.cart = [];
    this.currentCoupon = null;
    this.currentDiscountPercent = 0;
    this.activeFilter = 'all';
    this.activeModality = null;
    this.currentTestimonialIndex = 0;
    this.totalTestimonials = 4;

    this.init();
  }

  init() {
    this.loadCartFromStorage();
    this.renderModalities();
    this.renderProducts();
    this.updateCartUI();
    this.initTestimonialsCarousel();

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
        const headerOffset = 90;
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
  // RENDER MODALITIES (FULL-IMAGE CARDS WITH TEXT ONLY & WHITE TRIANGLE)
  // ==========================================
  renderModalities() {
    const container = document.getElementById('modalitiesCategoryGrid');
    if (!container) return;

    container.innerHTML = VULKOR_DATA.modalities.map(mod => `
      <div class="category-item-fullimage" onclick="app.showModalityDetails('${mod.id}', event)">
        <div class="category-card-triangle"></div>
        <img src="${mod.featuredImage}" alt="${mod.cardTitle || mod.name}" class="category-fullimage-bg" loading="lazy">
        <div class="category-fullimage-overlay">
          <span class="category-fullimage-title">${mod.cardTitle || mod.name}</span>
        </div>
      </div>
    `).join('');
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

      const modalityProducts = VULKOR_DATA.products.filter(p => p.modality === modality.id);

      detailsView.innerHTML = `
        <div class="container details-view-container">
          <!-- Back Bar -->
          <div class="back-bar">
            <button class="btn btn-outline btn-sm" onclick="app.showHome(event)">
              <i class="fa-solid fa-arrow-left"></i> Voltar para a Página Principal
            </button>
            <div style="font-size: 12px; text-transform: uppercase; font-weight: 700;">
              Início / Modalidades / <span style="color: var(--color-black);">${modality.name}</span>
            </div>
          </div>

          <!-- Modality Hero Box (Design System) -->
          <div class="details-hero-box">
            <div>
              <span class="badge" style="margin-bottom: 12px;">MOD // ${modality.number} - ${modality.tag}</span>
              <h1 style="font-size: 30px; margin-bottom: 10px;">${modality.name}</h1>
              <p style="font-weight: 700; color: var(--color-black); text-transform: uppercase; font-size: 13px; margin-bottom: 15px;">
                ${modality.tagline}
              </p>
              <p>${modality.description}</p>

              <!-- Technical Specs Grid -->
              <div class="details-specs-grid">
                <div class="details-spec-item">
                  <label>Material & Trama</label>
                  <strong>${modality.stats.material || modality.stats.padding || "Mil-Spec"}</strong>
                </div>
                <div class="details-spec-item">
                  <label>Homologação</label>
                  <strong>${modality.stats.homologation}</strong>
                </div>
                <div class="details-spec-item">
                  <label>Proteção</label>
                  <strong>${modality.stats.reinforcedSeams || modality.stats.wristProtection || modality.stats.mobility || "Trava Anatômica"}</strong>
                </div>
              </div>
            </div>

            <div class="details-hero-img">
              <img src="${modality.heroImage}" alt="${modality.name}">
            </div>
          </div>

          <!-- Deep-Dive Article & Size Table -->
          <section>
            <h2>Engenharia Aplicada ao ${modality.name}</h2>
            <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; margin-top: 20px;">
              <div>
                <h3>${modality.article.title}</h3>
                ${modality.article.paragraphs.map(p => `<p>${p}</p>`).join('')}

                <h3 style="margin-top: 25px;">Diferenciais de Construção:</h3>
                <ul style="list-style: square; padding-left: 20px; font-size: 13px; color: var(--color-text-secondary); line-height: 1.8;">
                  ${modality.article.bulletPoints.map(bp => `<li><strong>${bp}</strong></li>`).join('')}
                </ul>
              </div>

              <!-- Size Table (Design System Spec) -->
              <div style="background: var(--color-gray-light); padding: 25px; border: 1px solid var(--border-color);">
                <h3>Tabela Oficial de Tamanhos</h3>
                <p style="font-size: 12px; margin-bottom: 10px;">Consulte as medidas para escolha ideal do vestuário:</p>

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
          </section>

          <!-- Modality Catalog -->
          <section>
            <h2>Coleção de Roupas & Vestuário de ${modality.name}</h2>
            <p>Peças técnicas fabricadas pela Vulkor sob o padrão 0-Radius:</p>

            <div class="products-grid" style="margin-top: 20px;">
              ${modalityProducts.map(p => this.renderProductItemHTML(p)).join('')}
            </div>
          </section>

          <!-- Bottom Navigation CTA -->
          <div style="text-align: center; padding: 40px 0;">
            <button class="btn btn-primary btn-lg" onclick="app.showHome(event)">
              <i class="fa-solid fa-arrow-left"></i> Voltar e Ver Todas as Modalidades
            </button>
          </div>
        </div>
      `;

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ==========================================
  // PRODUCTS RENDERING & FILTERS
  // ==========================================
  renderProducts() {
    const container = document.getElementById('productsCatalogGrid');
    if (!container) return;

    let filtered = VULKOR_DATA.products;
    if (this.activeFilter !== 'all') {
      filtered = VULKOR_DATA.products.filter(p => p.modality === this.activeFilter);
    }

    container.innerHTML = filtered.map(p => this.renderProductItemHTML(p)).join('');
  }

  filterProducts(category) {
    this.activeFilter = category;

    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      if (tab.getAttribute('data-cat') === category) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    this.renderProducts();
  }

  renderProductItemHTML(product) {
    return `
      <div class="product-item">
        <div class="product-item-triangle"></div>
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="product-tag">${product.techBadge}</span>
        </div>
        <div class="product-info">
          <span class="product-sport-label">${product.modalityLabel}</span>
          <h4 class="product-name">${product.name}</h4>
          <p class="product-desc-snippet">${product.description.substring(0, 80)}...</p>
          
          <div class="product-price-box">
            <div>
              <div class="product-price-val">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
              <div class="product-installments">${product.installments}</div>
            </div>
            
            <div class="product-actions">
              <button class="btn btn-outline btn-sm" onclick="app.openProductModal('${product.id}')">
                Detalhes
              </button>
              <button class="btn btn-primary btn-sm" onclick="app.addToCart('${product.id}')">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // PRODUCT QUICK MODAL
  // ==========================================
  openProductModal(productId) {
    const product = VULKOR_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalProductBody');
    const modal = document.getElementById('productModal');

    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: start;">
        <div style="background: #000; height: 320px; border: 1px solid var(--border-color);">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <div>
          <span class="badge">${product.modalityLabel}</span>
          <span class="badge badge-outline">${product.badge}</span>
          
          <h2 style="font-size: 20px; margin: 10px 0 5px 0;">${product.name}</h2>
          
          <div style="margin: 15px 0;">
            <div style="font-size: 22px; font-weight: 700; color: var(--color-black);">
              R$ ${product.price.toFixed(2).replace('.', ',')}
            </div>
            <small>${product.installments} | 5% OFF à vista no PIX</small>
          </div>

          <p style="font-size: 13px; margin-bottom: 15px;">${product.description}</p>

          <label>Selecione o Tamanho:</label>
          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px;" id="modalSizeGroup">
            ${product.sizes.map((s, idx) => `
              <button class="btn btn-outline btn-sm ${idx === 0 ? 'btn-primary' : ''}" onclick="app.selectSize(this)">${s}</button>
            `).join('')}
          </div>

          <div style="margin-bottom: 20px; border-top: 1px solid var(--border-color); padding-top: 10px;">
            <label>Especificações:</label>
            <ul style="list-style: none; font-size: 12px; color: var(--color-text-secondary);">
              ${product.specs.map(sp => `<li>• ${sp}</li>`).join('')}
            </ul>
          </div>

          <div style="display: flex; gap: 10px;">
            <button class="btn btn-primary btn-block" onclick="app.addToCart('${product.id}'); app.closeProductModalDirect();">
              Adicionar ao Arsenal
            </button>
            <button class="btn btn-secondary" onclick="app.showModalityDetails('${product.modality}', event); app.closeProductModalDirect();" title="Ver Modalidade">
              Modalidade
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
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
  }

  closeAllModals() {
    this.closeProductModalDirect();
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer) cartDrawer.classList.remove('active');
    const searchModal = document.getElementById('searchModal');
    if (searchModal) searchModal.classList.remove('active');
  }

  // ==========================================
  // SHOPPING CART (DRAWER)
  // ==========================================
  addToCart(productId, quantity = 1) {
    const product = VULKOR_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(i => i.product.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        product: product,
        quantity: quantity,
        size: product.sizes[0]
      });
    }

    this.saveCartToStorage();
    this.updateCartUI();
    this.showToast(`"${product.name}" adicionado ao arsenal.`);
    this.toggleCart(true);
  }

  updateQuantity(productId, delta) {
    const idx = this.cart.findIndex(i => i.product.id === productId);
    if (idx === -1) return;

    this.cart[idx].quantity += delta;
    if (this.cart[idx].quantity <= 0) {
      this.cart.splice(idx, 1);
    }

    this.saveCartToStorage();
    this.updateCartUI();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.product.id !== productId);
    this.saveCartToStorage();
    this.updateCartUI();
    this.showToast("Item removido.");
  }

  toggleCart(forceOpen = false) {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;

    if (forceOpen) {
      drawer.classList.add('active');
    } else {
      drawer.classList.toggle('active');
    }
  }

  applyCoupon() {
    const input = document.getElementById('couponInput');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === 'VULKOR10') {
      this.currentCoupon = 'VULKOR10';
      this.currentDiscountPercent = 0.10;
      this.showToast('Cupom VULKOR10 aplicado (-10% OFF)!');
    } else if (code === 'MESTRE15') {
      this.currentCoupon = 'MESTRE15';
      this.currentDiscountPercent = 0.15;
      this.showToast('Cupom MESTRE15 aplicado (-15% OFF)!');
    } else if (code === '') {
      this.showToast('Digite o código do cupom.');
    } else {
      this.showToast('Cupom inválido.');
    }

    this.updateCartUI();
  }

  updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const drawerCount = document.getElementById('drawerCount');
    const itemsContainer = document.getElementById('cartDrawerItems');
    const subtotalText = document.getElementById('cartSubtotalText');
    const totalText = document.getElementById('cartTotalText');
    const discountLine = document.getElementById('discountLine');
    const discountText = document.getElementById('cartDiscountText');

    const totalCount = this.cart.reduce((s, i) => s + i.quantity, 0);
    if (badge) badge.textContent = totalCount;
    if (drawerCount) drawerCount.textContent = totalCount;

    if (!itemsContainer) return;

    if (this.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--color-text-muted);">
          <p style="font-size: 14px; font-weight: 700; color: #000;">SEU ARSENAL ESTÁ VAZIO</p>
          <p style="font-size: 12px;">Selecione kimonos, luvas de boxe, doboks ou shorts de MMA.</p>
        </div>
      `;
      if (subtotalText) subtotalText.textContent = 'R$ 0,00';
      if (totalText) totalText.textContent = 'R$ 0,00';
      if (discountLine) discountLine.style.display = 'none';
      return;
    }

    itemsContainer.innerHTML = this.cart.map(item => `
      <div class="cart-drawer-item">
        <img src="${item.product.image}" alt="${item.product.name}">
        <div>
          <h5 style="font-size: 12px; margin-bottom: 2px; text-transform: uppercase;">${item.product.name}</h5>
          <div style="font-size: 12px; font-weight: 700;">R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}</div>
          <div style="display: flex; align-items: center; gap: 6px; margin-top: 6px;">
            <button class="btn btn-outline btn-sm" style="padding: 2px 6px; font-size: 10px;" onclick="app.updateQuantity('${item.product.id}', -1)">-</button>
            <span style="font-size: 12px; font-weight: 700;">${item.quantity}</span>
            <button class="btn btn-outline btn-sm" style="padding: 2px 6px; font-size: 10px;" onclick="app.updateQuantity('${item.product.id}', 1)">+</button>
            <small style="margin-left: 6px;">Tam: ${item.size}</small>
          </div>
        </div>
        <button class="btn btn-outline btn-sm" style="padding: 4px 8px; border: none;" onclick="app.removeFromCart('${item.product.id}')" title="Excluir">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    const subtotal = this.cart.reduce((s, i) => s + (i.product.price * i.quantity), 0);
    const discount = subtotal * this.currentDiscountPercent;
    const total = subtotal - discount;

    if (subtotalText) subtotalText.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    if (this.currentDiscountPercent > 0 && discountLine && discountText) {
      discountLine.style.display = 'flex';
      discountText.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')} (${this.currentDiscountPercent * 100}%)`;
    } else if (discountLine) {
      discountLine.style.display = 'none';
    }

    if (totalText) totalText.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  checkout() {
    if (this.cart.length === 0) {
      this.showToast("Arsenal vazio. Adicione produtos antes de finalizar.");
      return;
    }

    const total = document.getElementById('cartTotalText').textContent;
    alert(`🎉 PEDIDO SIMULADO COM SUCESSO!\n\nArsenal Vulkor reservado.\nTotal: ${total}\nObrigado por treinar com a Vulkor Performance!`);
    
    this.cart = [];
    this.saveCartToStorage();
    this.updateCartUI();
    this.toggleCart(false);
  }

  saveCartToStorage() {
    try {
      localStorage.setItem('vulkor_cart', JSON.stringify(this.cart));
    } catch (e) {}
  }

  loadCartFromStorage() {
    try {
      const saved = localStorage.getItem('vulkor_cart');
      if (saved) this.cart = JSON.parse(saved);
    } catch (e) {
      this.cart = [];
    }
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

    cards.forEach((card, idx) => {
      let offset = idx - this.currentTestimonialIndex;

      // Wrap around for seamless looping
      if (offset > this.totalTestimonials / 2) offset -= this.totalTestimonials;
      if (offset < -this.totalTestimonials / 2) offset += this.totalTestimonials;

      card.style.left = '50%';
      if (offset === 0) {
        card.style.transform = 'translate(-50%, -50%) scale(1)';
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.filter = 'none';
        card.style.zIndex = '10';
        card.style.pointerEvents = 'auto';
        card.style.cursor = 'default';
      } else {
        const dir = offset > 0 ? 1 : -1;
        card.style.transform = `translate(${dir > 0 ? '120%' : '-220%'}, -50%) scale(0.88)`;
        card.style.opacity = '0';
        card.style.visibility = 'hidden';
        card.style.filter = 'none';
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
}

// Initialize Application
const app = new VulkorApp();
