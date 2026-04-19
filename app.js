// ── Static HTML ───────────────────────────────────────

const NAV = `
<nav class="main-nav">
    <a href="#" class="nav-brand">SOYMEK</a>
    <div class="nav-links">
        <a href="#about" class="nav-link">ABOUT</a>
        <a href="#shop" class="nav-link">SHOP</a>
        <a href="#calculator" class="nav-link">CALC</a>
        <a href="#batches" class="nav-link">BATCHES</a>
        <a href="#proces" class="nav-link">GUIDE</a>
    </div>
    <button id="theme-toggle" class="theme-toggle" aria-label="Toggle Theme">
        <svg class="sun-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        <svg class="moon-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </button>
</nav>`;

const FOOTER = `
<footer class="main-footer">
    <div class="footer-inner">
        <div class="footer-brand">SOYMEK</div>
        <div class="footer-detail">
            <div class="footer-term">
                <span class="footer-zh">手工豆漿</span>
                <span class="footer-pinyin">Shǒugōng dòujiāng</span>
                <span class="footer-en">CRAFT SOY MILK</span>
            </div>
            <div class="footer-term">
                <span class="footer-zh">台灣早餐店</span>
                <span class="footer-pinyin">Táiwān zǎocān diàn</span>
                <span class="footer-en">TAIWAN-STYLE BREAKFAST</span>
            </div>
        </div>
        <div class="footer-copy">
            &copy; ${new Date().getFullYear()} SOYMEK &nbsp;·&nbsp;
            <a href="https://github.com/mdeheij/soymek" target="_blank" rel="noopener" class="footer-link">GITHUB</a>
        </div>
    </div>
</footer>`;

// ── Pages ─────────────────────────────────────────────

const PAGES = {
    '': `
        <header class="main-header">
            <span class="header-corner tl"></span>
            <span class="header-corner tr"></span>
            <span class="header-corner bl"></span>
            <span class="header-corner br"></span>
            <div class="header-inner">
                <div class="brand-line"><ruby>手工豆漿<rt>Shǒugōng dòujiāng</rt></ruby></div>
                <h1 class="brand-name">SOYMEK</h1>
                <div class="brand-tagline"><span>CRAFT SOY MILK</span></div>
                <div class="brand-line brand-line--bottom"><ruby>台灣早餐店<rt>Táiwān zǎocān diàn</rt></ruby></div>
            </div>
            <div class="scroll-hint">↓</div>
        </header>

        <nav class="page-nav">
            <a href="#about" class="page-nav-item">
                <span class="page-nav-num">01</span>
                <span class="page-nav-title">ABOUT</span>
                <span class="page-nav-sub"><ruby class="fade-pinyin">關於<rt>Guānyú</rt></ruby></span>
            </a>
            <a href="#shop" class="page-nav-item">
                <span class="page-nav-num">02</span>
                <span class="page-nav-title">SHOP</span>
                <span class="page-nav-sub"><ruby>商店<rt>Shāngdiàn</rt></ruby></span>
            </a>
            <a href="#calculator" class="page-nav-item">
                <span class="page-nav-num">03</span>
                <span class="page-nav-title">CALC</span>
                <span class="page-nav-sub"><ruby>計算機<rt>Jìsuànjī</rt></ruby></span>
            </a>
            <a href="#proces" class="page-nav-item">
                <span class="page-nav-num">04</span>
                <span class="page-nav-title">GUIDE</span>
                <span class="page-nav-sub"><ruby>指南<rt>Zhǐnán</rt></ruby></span>
            </a>
            <a href="#batches" class="page-nav-item">
                <span class="page-nav-num">05</span>
                <span class="page-nav-title">BATCHES</span>
                <span class="page-nav-sub"><ruby>批次<rt>Pīcì</rt></ruby></span>
            </a>
        </nav>`,

    about: `
        <h1 class="section-title">ABOUT <ruby class="fade-pinyin">關於<rt>Guānyú</rt></ruby></h1>

        <div class="tw-sign">
            <div class="tw-sign-inner">
                <span class="tw-sign-zh">手工豆漿</span>
                <span class="tw-sign-sub">Shǒugōng dòujiāng · 正宗手口店 · SINCE 2025</span>
            </div>
        </div>

        <section class="about-section">
            <div class="about-grid">
                <div class="about-deco">
                    <span class="deco-char">豆</span>
                    <span class="deco-char">漿</span>
                </div>
                <div class="about-text">
                    <h2 class="about-title">早餐店</h2>
                    <p>SOYMEK is geen winkel. Het is een wekelijkse batch. Verse, handgemaakte sojamelk zoals je die krijgt bij een Taiwanees ontbijttentje om zes uur 's ochtends, nog warm uit de pan.</p>
                    <p>Geen stabilisatoren. Geen E-nummers. Alleen sojabonen, water, en de Yum Asia Sakura rijstkoker die nooit protesteert.</p>
                    <p>De calculator en het recept staan op <a href="https://github.com/mdeheij/soymek" target="_blank" rel="noopener" class="footer-link">GitHub</a>. Open source, want goede sojamelk is geen bedrijfsgeheim.</p>

                    <div class="menu-board">
                        <div class="menu-board-header">今日特賣 · VANDAAG</div>
                        <div class="menu-board-items">
                            <div class="menu-board-item">
                                <span class="menu-item-zh">標準</span>
                                <span class="menu-item-name">STANDARD</span>
                                <span class="menu-item-spec">7.5×</span>
                            </div>
                            <div class="menu-board-item">
                                <span class="menu-item-zh">特濃</span>
                                <span class="menu-item-name">EXTRA THICK</span>
                                <span class="menu-item-spec">4.5×</span>
                            </div>
                            <div class="menu-board-item">
                                <span class="menu-item-zh">新鮮</span>
                                <span class="menu-item-name">HOUDBAAR</span>
                                <span class="menu-item-spec">5–7d</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`,

    shop: `
        <h1 class="section-title">SHOP <ruby>商店<rt>Shāngdiàn</rt></ruby></h1>
        
        <div class="shop-funnel">
            <!-- Progress Bar -->
            <div class="funnel-progress">
                <div class="progress-step active" data-step="1">VARIANT</div>
                <div class="progress-step" data-step="2">RITME</div>
                <div class="progress-step" data-step="3">HOEVEELHEID</div>
            </div>

            <!-- Step 1: Variant -->
            <div class="shop-step active" id="step-1">
                <h3 class="step-heading">KIES JE VARIANT</h3>
                <div class="product-grid">
                    <div class="product-card" data-variant="standard">
                        <div class="product-image"><img src="shop1.png" alt="Standard Soymilk"></div>
                        <h4 class="product-name">STANDARD <ruby>標準<rt>Biāozhǔn</rt></ruby></h4>
                        <p class="product-desc">7.5x water op bonen. Licht, drinkbaar, elke dag.</p>
                        <button class="select-btn">SELECTEER</button>
                    </div>
                    <div class="product-card" data-variant="extra-thick">
                        <div class="product-image"><img src="shop1.png" alt="Extra Thick Soymilk"></div>
                        <h4 class="product-name">EXTRA THICK <ruby>特濃<rt>Tè nóng</rt></ruby></h4>
                        <p class="product-desc">4.5x water op bonen. Dik, sterk, voor wie het weet.</p>
                        <button class="select-btn">SELECTEER</button>
                    </div>
                </div>
            </div>

            <!-- Step 2: Frequency -->
            <div class="shop-step" id="step-2">
                <h3 class="step-heading">HOE VAAK WIL JE ONTVANGEN?</h3>
                <div class="frequency-grid">
                    <div class="option-card" data-freq="1">
                        <span class="option-title">ELKE WEEK</span>
                        <span class="option-sub">Altijd vers</span>
                    </div>
                    <div class="option-card" data-freq="2">
                        <span class="option-title">OM DE WEEK</span>
                        <span class="option-sub">Twee weken</span>
                    </div>
                    <div class="option-card" data-freq="4">
                        <span class="option-title">ELKE MAAND</span>
                        <span class="option-sub">Lage frequentie</span>
                    </div>
                </div>
                <div class="step-nav">
                    <button class="back-btn">TERUG</button>
                </div>
            </div>

            <!-- Step 3: Quantity & Review -->
            <div class="shop-step" id="step-3">
                <h3 class="step-heading">HOEVEELHEID & CHECKOUT</h3>
                <div class="checkout-card">
                    <div class="quantity-selector">
                        <label>AANTAL FLESSEN (1L)</label>
                        <div class="qty-controls">
                            <button id="qty-minus">-</button>
                            <span id="qty-value">1</span>
                            <button id="qty-plus">+</button>
                        </div>
                    </div>
                    
                    <div class="order-summary">
                        <div class="summary-line">
                            <span>ABONNEMENT</span>
                            <span id="summary-variant">-</span>
                        </div>
                        <div class="summary-line">
                            <span>INTERVAL</span>
                            <span id="summary-freq">-</span>
                        </div>
                        <div class="summary-total">
                            <span>TOTAAL PER LEVERING</span>
                            <span id="summary-total">€0,00</span>
                        </div>
                        <p class="deposit-notice">* Inclusief €2,00 statiegeld per fles. Geen contract, altijd opzegbaar.</p>
                    </div>
                    
                    <button class="checkout-btn">START SUBSCRIPTION</button>
                </div>
                <div class="step-nav">
                    <button class="back-btn">TERUG</button>
                </div>
            </div>
        </div>`,

    calculator: `
        <h1 class="section-title">CALC <ruby class="fade-pinyin">計算機<rt>Jìsuànjī</rt></ruby></h1>
        <div class="calculator-card">
            <div class="input-group">
                <label>CONCENTRATIE <ruby>濃度<rt>Nóngdù</rt></ruby></label>
                <div class="strength-selector">
                    <input type="radio" id="std" name="strength" value="7.5">
                    <label for="std">STANDARD</label>
                    <input type="radio" id="thick" name="strength" value="4.5" checked>
                    <label for="thick">EXTRA THICK</label>
                </div>
            </div>
            <div class="input-group">
                <label for="beans-slider">SOJABONEN <ruby>大豆<rt>Dàdòu</rt></ruby></label>
                <div class="value-display"><span id="beans-value">400</span><small>G</small></div>
                <input type="range" id="beans-slider" min="100" max="1000" step="50" value="400">
            </div>
            <div id="sakura-warning" class="sakura-warning">
                ⚠️ SAKURA LIMIT EXCEEDED ⚠️<br>
                <span>OVERSTROMINGSGEVAAR: VERDEEL IN <span id="warning-batches">2</span> KOOKBEURTEN</span>
            </div>
            <div class="stats-row">
                <div class="stat">
                    <label>WATER <ruby>水<rt>Shuǐ</rt></ruby></label>
                    <div class="stat-value"><span id="water-total">3.0</span><small>L</small></div>
                </div>
                <div class="stat">
                    <label>SUIKER <ruby>糖<rt>Táng</rt></ruby></label>
                    <div class="stat-value"><span id="sugar-range">160–200</span><small>G</small></div>
                </div>
                <div class="stat">
                    <label>BLEND BATCHES <ruby>份<rt>Fèn</rt></ruby></label>
                    <div class="stat-value"><span id="batch-count">3</span></div>
                </div>
            </div>
        </div>`,

    proces: `
        <h1 class="section-title">GUIDE ｜ <ruby class="fade-pinyin">指南<rt>Zhǐnán</rt></ruby></h1>
        <div class="process-step" data-step="01">
            <h3>WEKEN ｜ <ruby class="fade-pinyin">浸泡<rt>Jìnpào</rt></ruby></h3>
            <p>Was de bonen. 8–12 uur weken in de koelkast. Volume moet verdubbelen.</p>
        </div>
        <div class="process-step" data-step="02">
            <h3>BLENDEN ｜ <ruby class="fade-pinyin">研磨<rt>Yánmó</rt></ruby></h3>
            <p>Maximaal 150g bonen per blend-batch. 2 minuten op vol vermogen. Verdeel het water evenredig over de batches.</p>
        </div>
        <div class="process-step" data-step="03">
            <h3>FILTEREN ｜ <ruby class="fade-pinyin">過濾<rt>Guòlǜ</rt></ruby></h3>
            <p>Giet door kaasdoek. Laat uitlekken en knijp daarna krachtig uit tot de pulp droog is.</p>
        </div>
        <div class="process-step" data-step="04">
            <h3>GARING ｜ <ruby class="fade-pinyin">煮沸<rt>Zhǔfèi</rt></ruby></h3>
            <p>Rijstkoker (Yum Asia Sakura) op 'Porridge' stand, 15 minuten. Maximaal 800ml per kookbeurt. Skim het schuim zodra het verschijnt. Verdeel grotere batches over meerdere kookbeurten.</p>
        </div>

        <section class="pro-notes">
            <div class="notes-grid">
                <div class="note-item">
                    <strong>BEWAREN</strong>
                    Gekoeld 5 tot 7 dagen houdbaar in gesteriliseerd glas. Gebruik je zintuigen.
                </div>
            </div>
        </section>`,

    tips: `<script>location.hash = "#proces"</script>`,

    batches: `
        <h1 class="section-title">BATCHES <ruby>批次<rt>Pīcì</rt></ruby></h1>
        <section class="batches-section">
            <table class="batch-table">
                <thead>
                    <tr>
                        <th>BATCH</th>
                        <th>DATUM</th>
                        <th>BONEN</th>
                        <th>VARIANT</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="batch-num">#001</td>
                        <td>2026-04-19</td>
                        <td>400G</td>
                        <td>EXTRA THICK</td>
                        <td><span class="batch-status status-soaking">SOAKING <ruby>浸泡<rt>Jìnpào</rt></ruby></span></td>
                    </tr>
                </tbody>
            </table>
        </section>`,
};
const TITLES = {
    '':           'SOYMEK | Craft Soy Milk',
    about:        'About — SOYMEK',
    shop:         'Shop — SOYMEK',
    calculator:   'Calc — SOYMEK',
    proces:       'Guide — SOYMEK',
    tips:         'Guide — SOYMEK',
    batches:      'Batches — SOYMEK',
};

// ── Router ────────────────────────────────────────────

function getPage() {
    return location.hash.slice(1) || '';
}

function render() {
    const page = getPage();
    const html = PAGES[page] ?? PAGES[''];

    document.getElementById('content').innerHTML = html;
    document.title = TITLES[page] ?? TITLES[''];
    window.scrollTo(0, 0);

    // Hide footer on home page (cover)
    const footer = document.getElementById('site-footer');
    footer.innerHTML = page === '' ? '' : FOOTER;

    // Toggle page-specific classes
    document.body.classList.toggle('page-home', page === '');
    document.body.classList.toggle('page-shop', page === 'shop');

    document.querySelectorAll('.nav-link').forEach(link => {
        const target = link.getAttribute('href').slice(1);
        link.classList.toggle('active', target === page);
    });

    if (page === 'calculator') initCalculator();
    if (page === 'shop') initShop();
}

window.addEventListener('hashchange', render);

// ── Shop ──────────────────────────────────────────────

let shopState = {
    step: 1,
    variant: null,
    frequency: null,
    quantity: 1,
    prices: {
        'standard': 4.50,
        'extra-thick': 6.50,
        'deposit': 2.00
    }
};

function initShop() {
    const steps = document.querySelectorAll('.shop-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const productCards = document.querySelectorAll('.product-card');
    const freqCards = document.querySelectorAll('.option-card');
    const backBtns = document.querySelectorAll('.back-btn');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const qtyValue = document.getElementById('qty-value');

    function goToStep(stepNum) {
        shopState.step = stepNum;
        steps.forEach(s => s.classList.remove('active'));
        const targetStep = document.getElementById(`step-${stepNum}`);
        if (targetStep) targetStep.classList.add('active');
        
        progressSteps.forEach(ps => {
            const s = parseInt(ps.dataset.step);
            ps.classList.toggle('active', s <= stepNum);
        });

        if (stepNum === 3) updateSummary();
    }

    function updateSummary() {
        if (!qtyValue) return;
        qtyValue.textContent = shopState.quantity;
        
        const variantLabel = shopState.variant === 'standard' ? 'STANDARD (7.5x)' : 'EXTRA THICK (4.5x)';
        const freqLabel = { '1': 'ELKE WEEK', '2': 'OM DE WEEK', '4': 'ELKE MAAND' }[shopState.frequency] || '-';
        
        const basePrice = shopState.prices[shopState.variant] || 0;
        const depositTotal = shopState.quantity * shopState.prices.deposit;
        const total = (basePrice * shopState.quantity) + depositTotal;
        
        const sVariant = document.getElementById('summary-variant');
        const sFreq = document.getElementById('summary-freq');
        const sTotal = document.getElementById('summary-total');

        if (sVariant) sVariant.textContent = variantLabel;
        if (sFreq) sFreq.textContent = freqLabel;
        if (sTotal) sTotal.textContent = `€${total.toFixed(2).replace('.', ',')}`;
    }

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            shopState.variant = card.dataset.variant;
            goToStep(2);
        });
    });

    freqCards.forEach(card => {
        card.addEventListener('click', () => {
            shopState.frequency = card.dataset.freq;
            freqCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            setTimeout(() => goToStep(3), 300);
        });
    });

    if (qtyMinus) {
        qtyMinus.addEventListener('click', (e) => {
            e.preventDefault();
            if (shopState.quantity > 1) {
                shopState.quantity--;
                updateSummary();
            }
        });
    }

    if (qtyPlus) {
        qtyPlus.addEventListener('click', (e) => {
            e.preventDefault();
            if (shopState.quantity < 10) {
                shopState.quantity++;
                updateSummary();
            }
        });
    }

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            goToStep(shopState.step - 1);
        });
    });

    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('Bedankt! Je abonnement op ' + shopState.variant + ' sojamelk (' + shopState.quantity + 'L) is bijna klaar.');
        });
    }

    // Reset to step 1 on init
    goToStep(1);
}

// ── Calculator ────────────────────────────────────────

function initCalculator() {
    const slider   = document.getElementById('beans-slider');
    const radios   = document.getElementsByName('strength');

    function update() {
        const beans  = parseInt(slider.value);
        let ratio = 7.5;
        Array.from(radios).forEach(r => { if (r.checked) ratio = parseFloat(r.value); });

        const waterL      = (beans * ratio / 1000).toFixed(1);
        const blendBatches = Math.ceil(beans / 150);
        const yieldL      = (waterL * 0.8).toFixed(1);
        const cBatches    = Math.ceil(yieldL / 1.5);

        document.getElementById('beans-value').textContent  = beans;
        document.getElementById('water-total').textContent  = waterL;
        document.getElementById('sugar-range').textContent  = `${Math.round(beans * 0.4)}–${Math.round(beans * 0.5)}`;
        document.getElementById('batch-count').textContent  = blendBatches;

        const warning = document.getElementById('sakura-warning');
        if (yieldL > 1.5) {
            warning.style.display = 'block';
            document.getElementById('warning-batches').textContent = cBatches;
        } else {
            warning.style.display = 'none';
        }
    }

    Array.from(radios).forEach(r => r.addEventListener('change', update));
    slider.addEventListener('input', update);
    update();
}

// ── Theme ─────────────────────────────────────────────

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    
    toggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// ── Boot ──────────────────────────────────────────────

document.getElementById('site-nav').innerHTML = NAV;
initTheme();
render();
