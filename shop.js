// Shop State
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

// Elements
const steps = document.querySelectorAll('.shop-step');
const progressSteps = document.querySelectorAll('.progress-step');
const productCards = document.querySelectorAll('.product-card');
const freqCards = document.querySelectorAll('.option-card');
const backBtns = document.querySelectorAll('.back-btn');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');
const qtyValue = document.getElementById('qty-value');

// Navigation
function goToStep(stepNum) {
    shopState.step = stepNum;
    
    // Update Classes
    steps.forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${stepNum}`).classList.add('active');
    
    progressSteps.forEach(ps => {
        const s = parseInt(ps.dataset.step);
        ps.classList.toggle('active', s <= stepNum);
    });

    if (stepNum === 3) updateSummary();
}

// Step 1: Variant Selection
productCards.forEach(card => {
    card.addEventListener('click', () => {
        shopState.variant = card.dataset.variant;
        goToStep(2);
    });
});

// Step 2: Frequency Selection
freqCards.forEach(card => {
    card.addEventListener('click', () => {
        shopState.frequency = card.dataset.freq;
        
        // Visual selection
        freqCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        
        setTimeout(() => goToStep(3), 300);
    });
});

// Step 3: Quantity & Summary
qtyMinus.addEventListener('click', () => {
    if (shopState.quantity > 1) {
        shopState.quantity--;
        updateSummary();
    }
});

qtyPlus.addEventListener('click', () => {
    if (shopState.quantity < 10) {
        shopState.quantity++;
        updateSummary();
    }
});

function updateSummary() {
    qtyValue.textContent = shopState.quantity;
    
    const variantLabel = shopState.variant === 'standard' ? 'STANDARD (7.5x)' : 'EXTRA THICK (4.5x)';
    const freqLabel = { '1': 'ELKE WEEK', '2': 'OM DE WEEK', '4': 'ELKE MAAND' }[shopState.frequency];
    
    const basePrice = shopState.prices[shopState.variant];
    const depositTotal = shopState.quantity * shopState.prices.deposit;
    const total = (basePrice * shopState.quantity) + depositTotal;
    
    document.getElementById('summary-variant').textContent = variantLabel;
    document.getElementById('summary-freq').textContent = freqLabel;
    document.getElementById('summary-total').textContent = `€${total.toFixed(2).replace('.', ',')}`;
}

// Back Buttons
backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        goToStep(shopState.step - 1);
    });
});

// Checkout
document.querySelector('.checkout-btn').addEventListener('click', () => {
    alert('Bedankt! Je abonnement op ' + shopState.variant + ' sojamelk (' + shopState.quantity + 'L) is bijna klaar. In een echte omgeving zou je nu naar Stripe gaan.');
});
