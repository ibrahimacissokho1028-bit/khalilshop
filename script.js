// script.js - Version avec paiement réel
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "T-shirt Premium Noir", price: 4500, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", stock: 12 },
        { id: 2, name: "Chemise Casual Bleue", price: 6500, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=400&fit=crop", stock: 8 },
        { id: 3, name: "Jean Slim Gris", price: 8500, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop", stock: 5 },
        { id: 4, name: "Blouson Léger Beige", price: 12000, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", stock: 3 },
        { id: 5, name: "Montre Classique Argent", price: 9500, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop", stock: 0 },
        { id: 6, name: "Casquette Street Noir", price: 3500, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop", stock: 15 }
    ];

    // ============================================
    // 🔴 NUMÉROS DE PAIEMENT - MODIFIEZ ICI
    // ============================================
    const PAYMENT_NUMBERS = {
        wave: "221779284528",    // Votre numéro Wave
        orange: "221779284528"   // Votre numéro Orange Money
    };

    // ============================================
    // LIENS DE PAIEMENT - MODIFIEZ ICI
    // ============================================
    // Pour Wave : Utilisez le lien de paiement Wave
    // Pour Orange Money : Utilisez le lien de paiement Orange
    
    const PAYMENT_LINKS = {
        // Lien Wave (à configurer sur votre compte Wave)
        wave: "https://pay.wave.com/s/", // Remplacez par votre lien Wave personnalisé
        
        // Lien Orange Money (à configurer via Orange)
        orange: "https://pay.orange.com/" // Remplacez par votre lien Orange
    };

    const productGrid = document.getElementById('productGrid');
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    let cart = [];

    // ---------- FONCTION POUR LE PAIEMENT WAVE ----------
    function payWithWave(total) {
        // Méthode 1 : Lien direct Wave
        const waveLink = `https://pay.wave.com/s/?amount=${total}&currency=XOF&phone=${PAYMENT_NUMBERS.wave}`;
        
        // Méthode 2 : Numéro à afficher pour transfert manuel
        const message = `💰 Paiement Wave\nMontant : ${total.toLocaleString()} FCFA\n📱 Numéro : ${PAYMENT_NUMBERS.wave}\n\n📝 Référence : KHIL-${Date.now()}`;
        
        // Ouvrir Wave si disponible
        const waveApp = `intent://pay?amount=${total}&currency=XOF&phone=${PAYMENT_NUMBERS.wave}#Intent;scheme=wave;package=com.wave;end`;
        
        // Afficher les options de paiement
        showPaymentModal('Wave', total, PAYMENT_NUMBERS.wave, message);
    }

    // ---------- FONCTION POUR LE PAIEMENT ORANGE MONEY ----------
    function payWithOrange(total) {
        // Pour Orange Money, vous pouvez utiliser :
        // 1. Le lien Orange Money
        // 2. Le numéro à afficher
        
        const message = `💰 Paiement Orange Money\nMontant : ${total.toLocaleString()} FCFA\n📱 Numéro : ${PAYMENT_NUMBERS.orange}\n\n📝 Référence : KHIL-${Date.now()}`;
        
        showPaymentModal('Orange Money', total, PAYMENT_NUMBERS.orange, message);
    }

    // ---------- AFFICHER LA MODALE DE PAIEMENT ----------
    function showPaymentModal(method, total, number, message) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            animation: fadeIn 0.3s;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 24px;
                padding: 2rem;
                max-width: 400px;
                width: 90%;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                position: relative;
                animation: slideUp 0.3s;
            ">
                <button onclick="this.closest('div[style]').parentElement.remove()" style="
                    position: absolute;
                    top: 10px; right: 15px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #999;
                ">✕</button>
                
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">
                    ${method === 'Wave' ? '📱' : '📱'}
                </div>
                <h2 style="margin: 0.5rem 0; color: #0b1a2e;">Paiement ${method}</h2>
                
                <div style="
                    background: #f8f9fa;
                    border-radius: 12px;
                    padding: 1rem;
                    margin: 1rem 0;
                ">
                    <p style="margin: 0; color: #6c757d;">Montant à payer</p>
                    <p style="font-size: 2rem; font-weight: 700; color: #0b1a2e; margin: 0.2rem 0;">
                        ${total.toLocaleString()} FCFA
                    </p>
                </div>
                
                <div style="
                    background: #e8f5e9;
                    border-radius: 12px;
                    padding: 1rem;
                    margin: 1rem 0;
                ">
                    <p style="margin: 0; color: #2e7d32; font-weight: 600;">
                        📱 Numéro : ${number}
                    </p>
                    <p style="margin: 0.3rem 0 0; font-size: 0.85rem; color: #4caf50;">
                        Référence : KHIL-${Date.now()}
                    </p>
                </div>
                
                <div style="margin: 1rem 0;">
                    <p style="font-size: 0.9rem; color: #6c757d;">
                        <i class="fas fa-info-circle"></i> 
                        Effectuez le transfert sur le numéro ci-dessus
                    </p>
                </div>
                
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                    <button onclick="copyToClipboard('${number}')" style="
                        background: #0b1a2e;
                        color: white;
                        border: none;
                        padding: 0.8rem 1.5rem;
                        border-radius: 40px;
                        font-weight: 600;
                        cursor: pointer;
                        flex: 1;
                        min-width: 120px;
                    ">
                        <i class="fas fa-copy"></i> Copier le numéro
                    </button>
                    
                    <button onclick="sendWhatsAppPayment('${number}', ${total}, '${method}')" style="
                        background: #25d366;
                        color: white;
                        border: none;
                        padding: 0.8rem 1.5rem;
                        border-radius: 40px;
                        font-weight: 600;
                        cursor: pointer;
                        flex: 1;
                        min-width: 120px;
                    ">
                        <i class="fab fa-whatsapp"></i> Envoyer sur WhatsApp
                    </button>
                </div>
                
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eaeef2;">
                    <button onclick="this.closest('div[style]').parentElement.remove()" style="
                        background: none;
                        border: none;
                        color: #6c757d;
                        cursor: pointer;
                        font-size: 0.9rem;
                    ">
                        Annuler
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    // ---------- COPIER LE NUMÉRO ----------
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showTemporaryMessage('✅ Numéro copié !');
        }).catch(() => {
            // Fallback
            const input = document.createElement('input');
            input.value = text;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            showTemporaryMessage('✅ Numéro copié !');
        });
    }

    // ---------- ENVOYER SUR WHATSAPP ----------
    function sendWhatsAppPayment(number, total, method) {
        const message = `Bonjour KHILSHOP,\n\nJe souhaite effectuer un paiement de ${total.toLocaleString()} FCFA par ${method}.\n\n📱 Mon numéro : [VOTRE NUMÉRO]\n🔢 Référence : KHIL-${Date.now()}\n\nMerci !`;
        const url = `https://wa.me/221779284528?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    // ---------- RENDER PRODUCTS ----------
    function renderProducts() {
        productGrid.innerHTML = '';
        products.forEach(p => {
            const isAvailable = p.stock > 0;
            const stockClass = p.stock === 0 ? 'unavailable' : (p.stock <= 3 ? 'low' : 'available');
            const stockText = p.stock === 0 ? 'Rupture de stock' : (p.stock <= 3 ? `⚠️ Plus que ${p.stock}` : `✅ ${p.stock} disponibles`);
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                ${!isAvailable ? '<span class="badge-sold-out">ÉPUISÉ</span>' : ''}
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x400/1f3a4e/fff?text=${p.name}'">
                <h3>${p.name}</h3>
                <div class="price"><i class="fas fa-cfa-sign"></i> ${p.price.toLocaleString()} FCFA</div>
                <span class="stock ${stockClass}">${stockText}</span>
                <button class="btn-add" data-id="${p.id}" ${!isAvailable ? 'disabled' : ''}>
                    ${isAvailable ? '<i class="fas fa-cart-plus"></i> Ajouter' : '<i class="fas fa-times-circle"></i> Indisponible'}
                </button>
            `;
            productGrid.appendChild(card);
        });
        document.querySelectorAll('.btn-add:not(:disabled)').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const product = products.find(p => p.id === id);
                if (product && product.stock > 0) {
                    const existing = cart.find(item => item.id === id);
                    if (existing) { showTemporaryMessage('⚠️ Déjà dans le panier'); return; }
                    cart.push({...product});
                    updateCart();
                    showTemporaryMessage(`✅ "${product.name}" ajouté`);
                }
            });
        });
    }

    // ---------- RENDER CART ----------
    function renderCart() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-basket"></i><p>Votre panier est vide</p></div>`;
            cartSummary.innerHTML = `<h3>Résumé</h3><div class="summary-row"><span>Total</span><span><strong>0 FCFA</strong></span></div>`;
            return;
        }
        let html = '';
        cart.forEach((item, index) => {
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div><h4>${item.name}</h4><span class="price">${item.price.toLocaleString()} FCFA</span></div>
                    </div>
                    <button class="btn-remove" data-index="${index}"><i class="fas fa-trash"></i> Supprimer</button>
                </div>
            `;
        });
        html += `<button class="btn-remove-all" id="clearCartBtn"><i class="fas fa-trash"></i> Vider le panier</button>`;
        cartItemsContainer.innerHTML = html;
        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                cart.splice(index, 1);
                updateCart();
            });
        });
        document.getElementById('clearCartBtn').addEventListener('click', function() {
            if (confirm('Vider le panier ?')) { cart = []; updateCart(); }
        });
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartSummary.innerHTML = `
            <h3>Résumé</h3>
            <div class="summary-row"><span>Articles</span><span>${cart.length}</span></div>
            <div class="summary-row total"><span>Total</span><span><strong>${total.toLocaleString()} FCFA</strong></span></div>
        `;
    }

    // ---------- UPDATE CART ----------
    function updateCart() { cartCount.textContent = cart.length; renderCart(); localStorage.setItem('khilshop_cart', JSON.stringify(cart)); }

    // ---------- LOAD CART ----------
    function loadCart() {
        try { const saved = localStorage.getItem('khilshop_cart'); if (saved) { const parsed = JSON.parse(saved); if (Array.isArray(parsed)) cart = parsed.filter(item => products.some(p => p.id === item.id)); } } catch(e) {}
        updateCart();
    }

    // ---------- MESSAGE TEMPORAIRE ----------
    function showTemporaryMessage(msg) {
        const msgDiv = document.getElementById('paymentMessage');
        if (msgDiv) {
            msgDiv.innerHTML = `<span style="background:#d4edda;padding:0.5rem 1.2rem;border-radius:40px;color:#155724;display:inline-block;">${msg}</span>`;
            setTimeout(() => { msgDiv.innerHTML = ''; }, 3000);
        }
    }

    // ---------- BOUTONS DE PAIEMENT ----------
    document.querySelectorAll('.btn-pay').forEach(btn => {
        btn.addEventListener('click', function() {
            if (cart.length === 0) {
                document.getElementById('paymentMessage').innerHTML = '<span style="background:#f8d7da;padding:0.5rem 1.2rem;border-radius:40px;color:#721c24;">⚠️ Panier vide</span>';
                return;
            }
            
            const method = this.dataset.method;
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            
            if (method === 'Wave') {
                payWithWave(total);
            } else if (method === 'Orange Money') {
                payWithOrange(total);
            }
            
            document.getElementById('paymentMessage').innerHTML = '';
        });
    });

    // ---------- WHATSAPP ----------
    document.getElementById('whatsappBtn').addEventListener('click', function(e) {
        if (cart.length === 0) { e.preventDefault(); alert('Panier vide'); return; }
        const items = cart.map(item => `• ${item.name} (${item.price.toLocaleString()} FCFA)`).join('\n');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        this.href = `https://wa.me/221779284528?text=Bonjour KHALILSHOP, je commande :%0A${encodeURIComponent(items)}%0ATotal : ${total} FCFA`;
    });

    // ---------- INIT ----------
    renderProducts();
    loadCart();

    // Ajouter les styles d'animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});
