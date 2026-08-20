// script.js
document.addEventListener('DOMContentLoaded', function () {
    // ---------- CATALOGUE PRODUITS AVEC IMAGES RÉELLES ----------
    const products = [
        { 
            id: 1, 
            name: "T-shirt Premium Noir", 
            price: 4500, 
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
            stock: 12,
            description: "T-shirt en coton bio, coupe classique"
        },
        { 
            id: 2, 
            name: "Chemise Casual Bleue", 
            price: 6500, 
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=400&fit=crop&crop=center",
            stock: 8,
            description: "Chemise en lin, parfaite pour l'été"
        },
        { 
            id: 3, 
            name: "Jean Slim Gris", 
            price: 8500, 
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop&crop=center",
            stock: 5,
            description: "Jean slim élastique, confort absolu"
        },
        { 
            id: 4, 
            name: "Blouson Léger ", 
            price: 12000, 
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
            stock: 3,
            description: "Blouson imperméable, coupe moderne"
        },
        { 
            id: 5, 
            name: "Montre Classique ", 
            price: 5000, 
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
            stock: 0,
            description: "Montre automatique, bracelet en acier"
        },
        { 
            id: 6, 
            name: "Casquette Street Noir", 
            price: 3500, 
            image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&crop=center",
            stock: 15,
            description: "Casquette en coton, ajustable"
        }
    ];

    const productGrid = document.getElementById('productGrid');
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    let cart = [];

    // ---------- AFFICHER LES PRODUITS ----------
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
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/1f3a4e/fff?text=${encodeURIComponent(p.name)}'">
                <h3>${p.name}</h3>
                <p style="font-size:0.85rem;color:#6c757d;margin:0.2rem 0;">${p.description}</p>
                <div class="price"><i class="fas fa-cfa-sign"></i> ${p.price.toLocaleString()} FCFA</div>
                <span class="stock ${stockClass}">${stockText}</span>
                <button class="btn-add" data-id="${p.id}" ${!isAvailable ? 'disabled' : ''}>
                    ${isAvailable ? '<i class="fas fa-cart-plus"></i> Ajouter' : '<i class="fas fa-times-circle"></i> Indisponible'}
                </button>
            `;
            productGrid.appendChild(card);
        });

        document.querySelectorAll('.btn-add:not(:disabled)').forEach(btn => {
            btn.addEventListener('click', function (e) {
                const id = parseInt(this.dataset.id);
                const product = products.find(p => p.id === id);
                if (product && product.stock > 0) {
                    // Vérifier si le produit est déjà dans le panier
                    const existingItem = cart.find(item => item.id === id);
                    if (existingItem) {
                        showTemporaryMessage(`⚠️ "${product.name}" est déjà dans votre panier`);
                        return;
                    }
                    
                    cart.push({ ...product, quantity: 1 });
                    updateCart();
                    showTemporaryMessage(`✅ "${product.name}" ajouté au panier`);
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
                    <p style="font-size:0.9rem;color:#999;">Ajoutez des articles depuis la section Produits</p>
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

        // Afficher les articles
        let itemsHtml = '';
        cart.forEach((item, index) => {
            itemsHtml += `
                <div class="cart-item" data-index="${index}">
                    <div class="cart-item-info">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60x60/1f3a4e/fff?text=?'">
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <span class="price"><i class="fas fa-cfa-sign"></i> ${item.price.toLocaleString()} FCFA</span>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="btn-remove" data-index="${index}">
                            <i class="fas fa-trash-alt"></i> Supprimer
                        </button>
                    </div>
                </div>
            `;
        });

        itemsHtml += `
            <div style="text-align:right;margin-top:1rem;">
                <button class="btn-remove-all" id="clearCartBtn">
                    <i class="fas fa-trash"></i> Vider le panier
                </button>
            </div>
        `;

        cartItemsContainer.innerHTML = itemsHtml;

        // Écouteurs sur les boutons "Supprimer"
        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', function () {
                const index = parseInt(this.dataset.index);
                const removedItem = cart[index];
                cart.splice(index, 1);
                updateCart();
                showTemporaryMessage(`❌ "${removedItem.name}" retiré du panier`);
            });
        });

        // Écouteur sur "Vider le panier"
        const clearBtn = document.getElementById('clearCartBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', function () {
                if (cart.length === 0) return;
                if (confirm('Voulez-vous vraiment vider tout le panier ?')) {
                    cart = [];
                    updateCart();
                    showTemporaryMessage('🗑️ Panier vidé avec succès');
                }
            });
        }

        // Résumé du panier
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartSummary.innerHTML = `
            <h3>Résumé du panier</h3>
            <div class="summary-row">
                <span>Articles</span>
                <span>${cart.length}</span>
            </div>
            <div class="summary-row">
                <span>Articles disponibles</span>
                <span>${cart.filter(item => item.stock > 0).length}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span><strong>${total.toLocaleString()} FCFA</strong></span>
            </div>
            ${cart.some(item => item.stock === 0) ? '<p style="color:#dc3545;font-size:0.9rem;margin-top:0.5rem;">⚠️ Certains articles sont en rupture de stock</p>' : ''}
        `;
    }

    // ---------- METTRE À JOUR LE PANIER ----------
    function updateCart() {
        cartCount.textContent = cart.length;
        renderCart();
        // Sauvegarder dans localStorage
        try {
            localStorage.setItem('khilshop_cart', JSON.stringify(cart));
        } catch (e) {}
    }

    // ---------- CHARGER LE PANIER DEPUIS LOCALSTORAGE ----------
    function loadCart() {
        try {
            const saved = localStorage.getItem('khilshop_cart');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    // Vérifier que les produits existent toujours et mettre à jour les stocks
                    cart = parsed.filter(item => {
                        const productExists = products.some(p => p.id === item.id);
                        if (productExists) {
                            // Mettre à jour le stock avec les valeurs actuelles
                            const currentProduct = products.find(p => p.id === item.id);
                            if (currentProduct) {
                                item.stock = currentProduct.stock;
                                return true;
                            }
                        }
                        return false;
                    });
                }
            }
        } catch (e) {}
        updateCart();
    }

    // ---------- MESSAGE TEMPORAIRE ----------
    function showTemporaryMessage(msg) {
        const msgDiv = document.getElementById('paymentMessage');
        if (msgDiv) {
            msgDiv.innerHTML = `<span style="background:#d4edda;padding:0.5rem 1.2rem;border-radius:40px;color:#155724;display:inline-block;">${msg}</span>`;
            setTimeout(() => {
                msgDiv.innerHTML = '';
            }, 3000);
        }
    }

    // ---------- PAIEMENT ----------
    const payButtons = document.querySelectorAll('.btn-pay');
    const paymentMessage = document.getElementById('paymentMessage');

    payButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const method = this.dataset.method;
            const totalItems = cart.length;

            if (totalItems === 0) {
                paymentMessage.innerHTML = `<span style="background:#f8d7da;padding:0.5rem 1.2rem;border-radius:40px;color:#721c24;">⚠️ Votre panier est vide. Ajoutez des articles d'abord.</span>`;
                return;
            }

            // Vérifier si tous les articles sont disponibles
            const unavailableItems = cart.filter(item => item.stock === 0);
            if (unavailableItems.length > 0) {
                paymentMessage.innerHTML = `
                    <span style="background:#f8d7da;padding:0.5rem 1.2rem;border-radius:40px;color:#721c24;display:inline-block;">
                        ⚠️ ${unavailableItems.map(item => `"${item.name}"`).join(', ')} ${unavailableItems.length > 1 ? 'sont' : 'est'} en rupture de stock
                    </span>
                `;
                return;
            }

            const total = cart.reduce((sum, item) => sum + item.price, 0);
            const totalFormatted = total.toLocaleString();

            paymentMessage.innerHTML = `
                <div style="background:#e2f0ea;padding:1rem 1.5rem;border-radius:30px;color:#0b2e1f;display:inline-block;">
                    <i class="fas fa-check-circle" style="color:#2e7d32;font-size:1.6rem;"></i>
                    <p style="font-weight:600;margin:0.5rem 0 0.2rem;">Paiement par ${method} simulé</p>
                    <p>Total : <strong>${totalFormatted} FCFA</strong> (${cart.length} article${cart.length>1?'s':''})</p>
                    <p style="font-size:0.95rem;">📲 Confirmez le paiement sur votre mobile.</p>
                    <small style="display:block;margin-top:0.4rem;">🔔 N'oubliez pas de finaliser votre commande via WhatsApp.</small>
                </div>
            `;
        });
    });

    // ---------- WHATSAPP ----------
    const waBtn = document.getElementById('whatsappBtn');
    if (waBtn) {
        waBtn.addEventListener('click', function (e) {
            if (cart.length === 0) {
                e.preventDefault();
                alert('⚠️ Votre panier est vide. Ajoutez des articles avant de commander.');
                return;
            }

            // Vérifier les stocks
            const unavailableItems = cart.filter(item => item.stock === 0);
            if (unavailableItems.length > 0) {
                e.preventDefault();
                alert(`⚠️ ${unavailableItems.map(item => `"${item.name}"`).join(', ')} ${unavailableItems.length > 1 ? 'sont' : 'est'} en rupture de stock. Veuillez les retirer du panier.`);
                return;
            }

            // Construire le message avec les articles
            const itemsList = cart.map(item => `• ${item.name} (${item.price.toLocaleString()} FCFA)`).join('\n');
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            const message = `Bonjour KHILSHOP, je souhaite commander :\n\n${itemsList}\n\nTotal : ${total.toLocaleString()} FCFA\n\nMerci !`;
            const encodedMessage = encodeURIComponent(message);
            this.href = `https://wa.me/221779284528?text=${encodedMessage}`;
        });
    }

    // ---------- NAVIGATION SMOOTH ----------
    document.querySelectorAll('nav a, .btn-primary').forEach(link => {
        link.addEventListener('click', function (e) {
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

    // ---------- INIT ----------
    renderProducts();
    loadCart();
});