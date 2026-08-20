// ============================================
// SCRIPT COMPLET POUR KHALILSHOP
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // 🛍️ CATALOGUE PRODUITS - MODIFIEZ ICI
    // ============================================
    const products = [
        // ---------- VÊTEMENTS ----------
        { 
            id: 1, 
            name: "T-shirt Premium Noir", 
            price: 4500, 
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", 
            stock: 12,
            category: "Vêtements"
        },
        { 
            id: 2, 
            name: "Chemise Casual Bleue", 
            price: 6500, 
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=400&fit=crop", 
            stock: 8,
            category: "Vêtements"
        },
        { 
            id: 3, 
            name: "Jean Slim Gris", 
            price: 8500, 
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop", 
            stock: 5,
            category: "Vêtements"
        },
        { 
            id: 4, 
            name: "Blouson Léger Beige", 
            price: 12000, 
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", 
            stock: 3,
            category: "Vêtements"
        },
        { 
            id: 7, 
            name: "Polo Lacoste Bleu", 
            price: 7500, 
            image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d92?w=400&h=400&fit=crop", 
            stock: 10,
            category: "Vêtements"
        },
        { 
            id: 8, 
            name: "Veste en Cuir Noir", 
            price: 18000, 
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", 
            stock: 4,
            category: "Vêtements"
        },
        { 
            id: 9, 
            name: "Short Chino Beige", 
            price: 5500, 
            image: "https://images.unsplash.com/photo-1594938298603-c8248f8e7fd6?w=400&h=400&fit=crop", 
            stock: 7,
            category: "Vêtements"
        },
        { 
            id: 10, 
            name: "Costume Noir Classique", 
            price: 35000, 
            image: "https://images.unsplash.com/photo-1594938298603-c8248f8e7fd6?w=400&h=400&fit=crop", 
            stock: 2,
            category: "Vêtements"
        },

        // ---------- PARFUMS POUR HOMME ----------
        { 
            id: 11, 
            name: "Parfum Dior Sauvage", 
            price: 25000, 
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", 
            stock: 8,
            category: "Parfums"
        },
        { 
            id: 12, 
            name: "Parfum Chanel Bleu", 
            price: 28000, 
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", 
            stock: 6,
            category: "Parfums"
        },
        { 
            id: 13, 
            name: "Parfum Versace Eros", 
            price: 22000, 
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", 
            stock: 10,
            category: "Parfums"
        },
        { 
            id: 14, 
            name: "Parfum Paco Rabanne 1M", 
            price: 24000, 
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", 
            stock: 5,
            category: "Parfums"
        },
        { 
            id: 15, 
            name: "Parfum Tom Ford Noir", 
            price: 32000, 
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", 
            stock: 4,
            category: "Parfums"
        },
        { 
            id: 16, 
            name: "Parfum Jean Paul Gaultier", 
            price: 21000, 
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", 
            stock: 7,
            category: "Parfums"
        },

        // ---------- ACCESSOIRES ----------
        { 
            id: 5, 
            name: "Montre Classique Argent", 
            price: 9500, 
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop", 
            stock: 0,
            category: "Accessoires"
        },
        { 
            id: 6, 
            name: "Casquette Street Noir", 
            price: 3500, 
            image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop", 
            stock: 15,
            category: "Accessoires"
        },
        { 
            id: 17, 
            name: "Ceinture en Cuir Marron", 
            price: 6000, 
            image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop", 
            stock: 10,
            category: "Accessoires"
        },
        { 
            id: 18, 
            name: "Sac à Dos Sport", 
            price: 12000, 
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", 
            stock: 6,
            category: "Accessoires"
        },
        { 
            id: 19, 
            name: "Lunettes de Soleil Ray-Ban", 
            price: 15000, 
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop", 
            stock: 8,
            category: "Accessoires"
        },
        { 
            id: 20, 
            name: "Portefeuille en Cuir Noir", 
            price: 7000, 
            image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop", 
            stock: 12,
            category: "Accessoires"
        }
    ];

    // ============================================
    // 🔴 CONFIGURATION DES PAIEMENTS - MODIFIEZ ICI
    // ============================================
    const PAYMENT_NUMBERS = {
        wave: "221779284528",    // 🔴 METTEZ VOTRE NUMÉRO WAVE ICI
        orange: "221779284528"   // 🔴 METTEZ VOTRE NUMÉRO ORANGE MONEY ICI
    };

    // ---------- VARIABLES GLOBALES ----------
    const productGrid = document.getElementById('productGrid');
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    let cart = [];

    // ============================================
    // FONCTIONS DE PAIEMENT
    // ============================================

    // ---------- PAIEMENT WAVE ----------
    function payWithWave(total) {
        const message = `💰 Paiement Wave\nMontant : ${total.toLocaleString()} FCFA\n📱 Numéro : ${PAYMENT_NUMBERS.wave}\n\n📝 Référence : KHIL-${Date.now()}`;
        showPaymentModal('Wave', total, PAYMENT_NUMBERS.wave, message);
    }

    // ---------- PAIEMENT ORANGE MONEY ----------
    function payWithOrange(total) {
        const message = `💰 Paiement Orange Money\nMontant : ${total.toLocaleString()} FCFA\n📱 Numéro : ${PAYMENT_NUMBERS.orange}\n\n📝 Référence : KHIL-${Date.now()}`;
        showPaymentModal('Orange Money', total, PAYMENT_NUMBERS.orange, message);
    }

    // ---------- AFFICHER LA MODALE DE PAIEMENT ----------
    function showPaymentModal(method, total, number, message) {
        // Créer la modale
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
                max-width: 420px;
                width: 92%;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                position: relative;
                animation: slideUp 0.3s;
            ">
                <!-- Bouton fermer -->
                <button onclick="this.closest('div[style]').parentElement.remove()" style="
                    position: absolute;
                    top: 10px; right: 15px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #999;
                    transition: 0.2s;
                " onmouseover="this.style.color='#333'" onmouseout="this.style.color='#999'">✕</button>
                
                <!-- Icône -->
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">
                    ${method === 'Wave' ? '📱' : '📱'}
                </div>
                
                <h2 style="margin: 0.5rem 0; color: #0b1a2e;">Paiement ${method}</h2>
                
                <!-- Montant -->
                <div style="
                    background: #f8f9fa;
                    border-radius: 12px;
                    padding: 1rem;
                    margin: 1rem 0;
                ">
                    <p style="margin: 0; color: #6c757d; font-size: 0.9rem;">Montant à payer</p>
                    <p style="font-size: 2rem; font-weight: 700; color: #0b1a2e; margin: 0.2rem 0;">
                        ${total.toLocaleString()} FCFA
                    </p>
                </div>
                
                <!-- Numéro de paiement -->
                <div style="
                    background: #e8f5e9;
                    border-radius: 12px;
                    padding: 1rem;
                    margin: 1rem 0;
                ">
                    <p style="margin: 0; color: #2e7d32; font-weight: 600;">
                        📱 Numéro : <strong style="font-size: 1.1rem;">${number}</strong>
                    </p>
                    <p style="margin: 0.3rem 0 0; font-size: 0.85rem; color: #4caf50;">
                        Référence : KHIL-${Date.now()}
                    </p>
                </div>
                
                <!-- Instructions -->
                <div style="margin: 1rem 0; padding: 0.5rem; background: #fff3cd; border-radius: 8px;">
                    <p style="font-size: 0.85rem; color: #856404; margin: 0;">
                        <i class="fas fa-info-circle"></i> 
                        Effectuez le transfert sur le numéro ci-dessus
                    </p>
                </div>
                
                <!-- Boutons d'action -->
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-top: 1rem;">
                    <button onclick="copyToClipboard('${number}')" style="
                        background: #0b1a2e;
                        color: white;
                        border: none;
                        padding: 0.8rem 1.5rem;
                        border-radius: 40px;
                        font-weight: 600;
                        cursor: pointer;
                        flex: 1;
                        min-width: 130px;
                        transition: 0.2s;
                    " onmouseover="this.style.background='#1f3a4e'" onmouseout="this.style.background='#0b1a2e'">
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
                        min-width: 130px;
                        transition: 0.2s;
                    " onmouseover="this.style.background='#1ebd59'" onmouseout="this.style.background='#25d366'">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
                
                <!-- Lien annuler -->
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eaeef2;">
                    <button onclick="this.closest('div[style]').parentElement.remove()" style="
                        background: none;
                        border: none;
                        color: #6c757d;
                        cursor: pointer;
                        font-size: 0.9rem;
                        transition: 0.2s;
                    " onmouseover="this.style.color='#333'" onmouseout="this.style.color='#6c757d'">
                        Annuler
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    // ---------- COPIER LE NUMÉRO ----------
    window.copyToClipboard = function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showTemporaryMessage('✅ Numéro copié !');
            }).catch(() => {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showTemporaryMessage('✅ Numéro copié !');
    }

    // ---------- ENVOYER SUR WHATSAPP ----------
    window.sendWhatsAppPayment = function(number, total, method) {
        const message = `Bonjour KHILSHOP,\n\nJe souhaite effectuer un paiement de ${total.toLocaleString()} FCFA par ${method}.\n\n📱 Mon numéro : [VOTRE NUMÉRO]\n🔢 Référence : KHIL-${Date.now()}\n\nMerci !`;
        const url = `https://wa.me/221779284528?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    // ============================================
    // FONCTIONS DU PANIER
    // ============================================

    // ---------- AFFICHER LES PRODUITS ----------
    function renderProducts() {
        productGrid.innerHTML = '';
        products.forEach(p => {
            const isAvailable = p.stock > 0;
            const stockClass = p.stock === 0 ? 'unavailable' : (p.stock <= 3 ? 'low' : 'available');
            const stockText = p.stock === 0 ? 'Rupture de stock' : (p.stock <= 3 ? `⚠️ Plus que ${p.stock}` : `✅ ${p.stock} disponibles`);
            
            // Icône de catégorie
            let categoryIcon = '';
            if (p.category === 'Vêtements') categoryIcon = '👕';
            else if (p.category === 'Parfums') categoryIcon = '🧴';
            else if (p.category === 'Accessoires') categoryIcon = '⌚';
            
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                ${!isAvailable ? '<span class="badge-sold-out">ÉPUISÉ</span>' : ''}
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x400/1f3a4e/fff?text=${p.name}'">
                <h3>${p.name}</h3>
                <div style="font-size: 0.8rem; color: #6c757d; margin: 0.2rem 0;">
                    ${categoryIcon} ${p.category}
                </div>
                <div class="price"><i class="fas fa-cfa-sign"></i> ${p.price.toLocaleString()} FCFA</div>
                <span class="stock ${stockClass}">${stockText}</span>
                <button class="btn-add" data-id="${p.id}" ${!isAvailable ? 'disabled' : ''}>
                    ${isAvailable ? '<i class="fas fa-cart-plus"></i> Ajouter' : '<i class="fas fa-times-circle"></i> Indisponible'}
                </button>
            `;
            productGrid.appendChild(card);
        });

        // Écouteurs sur les boutons "Ajouter"
        document.querySelectorAll('.btn-add:not(:disabled)').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const product = products.find(p => p.id === id);
                if (product && product.stock > 0) {
                    const existing = cart.find(item => item.id === id);
                    if (existing) { 
                        showTemporaryMessage('⚠️ Déjà dans le panier'); 
                        return; 
                    }
                    cart.push({...product});
                    updateCart();
                    showTemporaryMessage(`✅ "${product.name}" ajouté`);
                }
            });
        });
    }

    // ---------- AFFICHER LE PANIER ----------
    function renderCart() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Votre panier est vide</p>
                </div>
            `;
            cartSummary.innerHTML = `
                <h3>Résumé</h3>
                <div class="summary-row">
                    <span>Total</span>
                    <span><strong>0 FCFA</strong></span>
                </div>
            `;
            return;
        }

        let html = '';
        cart.forEach((item, index) => {
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <h4>${item.name}</h4>
                            <span class="price">${item.price.toLocaleString()} FCFA</span>
                            <div style="font-size: 0.75rem; color: #6c757d;">${item.category}</div>
                        </div>
                    </div>
                    <button class="btn-remove" data-index="${index}">
                        <i class="fas fa-trash"></i> Supprimer
                    </button>
                </div>
            `;
        });
        
        html += `
            <button class="btn-remove-all" id="clearCartBtn">
                <i class="fas fa-trash"></i> Vider le panier
            </button>
        `;
        
        cartItemsContainer.innerHTML = html;

        // Écouteurs sur les boutons "Supprimer"
        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                const removed = cart[index];
                cart.splice(index, 1);
                updateCart();
                showTemporaryMessage(`❌ "${removed.name}" retiré`);
            });
        });

        // Écouteur sur "Vider le panier"
        document.getElementById('clearCartBtn').addEventListener('click', function() {
            if (confirm('Vider le panier ?')) { 
                cart = []; 
                updateCart(); 
                showTemporaryMessage('🗑️ Panier vidé');
            }
        });

        // Résumé du panier
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartSummary.innerHTML = `
            <h3>Résumé</h3>
            <div class="summary-row">
                <span>Articles</span>
                <span>${cart.length}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span><strong>${total.toLocaleString()} FCFA</strong></span>
            </div>
        `;
    }

    // ---------- METTRE À JOUR LE PANIER ----------
    function updateCart() { 
        cartCount.textContent = cart.length; 
        renderCart(); 
        localStorage.setItem('khilshop_cart', JSON.stringify(cart)); 
    }

    // ---------- CHARGER LE PANIER ----------
    function loadCart() {
        try { 
            const saved = localStorage.getItem('khilshop_cart'); 
            if (saved) { 
                const parsed = JSON.parse(saved); 
                if (Array.isArray(parsed)) {
                    cart = parsed.filter(item => products.some(p => p.id === item.id));
                }
            } 
        } catch(e) {}
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

    // ============================================
    // ÉVÉNEMENTS
    // ============================================

    // ---------- BOUTONS DE PAIEMENT ----------
    document.querySelectorAll('.btn-pay').forEach(btn => {
        btn.addEventListener('click', function() {
            if (cart.length === 0) {
                document.getElementById('paymentMessage').innerHTML = 
                    '<span style="background:#f8d7da;padding:0.5rem 1.2rem;border-radius:40px;color:#721c24;">⚠️ Panier vide</span>';
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

    // ---------- BOUTON WHATSAPP ----------
    document.getElementById('whatsappBtn').addEventListener('click', function(e) {
        if (cart.length === 0) { 
            e.preventDefault(); 
            alert('⚠️ Panier vide'); 
            return; 
        }
        const items = cart.map(item => `• ${item.name} (${item.price.toLocaleString()} FCFA)`).join('\n');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        this.href = `https://wa.me/221779284528?text=Bonjour KHALILSHOP, je commande :%0A${encodeURIComponent(items)}%0ATotal : ${total} FCFA`;
    });

    // ---------- NAVIGATION SMOOTH ----------
    document.querySelectorAll('nav a, .btn-primary').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ============================================
    // INITIALISATION
    // ============================================

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

    // Lancer l'application
    renderProducts();
    loadCart();
});
