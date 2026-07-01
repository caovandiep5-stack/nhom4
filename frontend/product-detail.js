// product-detail.js - Xử lý trang chi tiết sản phẩm CÁ CẢNH
console.log('product-detail.js đang chạy...');

// ============================================
// 1. HỆ THỐNG DỮ LIỆU SẢN PHẨM CÁ CẢNH
// ============================================

const FISH_DATABASE = {
    "canho1": {
        id: "canho1",
        tendv: "🐠 Cá Bảy Màu Full Gold",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Bảy Màu Full Gold.jpg",
        tt1: `Cá Bảy Màu Full Gold với toàn thân phủ màu vàng kim lấp lánh, vây xòe rộng.
        
• Nguồn gốc: Đông Nam Á
• Kích thước: 3 - 4 cm
• Môi trường: Bể thủy sinh, thùng xốp
• Nhiệt độ: 24-28°C
• pH: 6.5-7.5
• Thức ăn: Trùn chỉ, cám viên
• Đặc điểm: Dễ nuôi, sinh sản nhanh, thích hợp bầy đàn`,
        gia: "25000",
        category: "Cá Cảnh Nhỏ",
        size: "3 - 4 cm",
        serves: "Bầy đàn 5-10 con",
        flavor: "Nước ngọt",
        tags: ["bảy màu", "dễ nuôi", "đẹp", "nhỏ"],
        nutrition: {
            calories: 0,
            sugar: 0,
            fat: 0,
            protein: 0
        },
        images: [
            "./ảnh/default-fish.jpg/cacanh/canho/Cá Bảy Màu Full Gold.jpg",
            "./ảnh/default-fish.jpg/cacanh/canho/Cá Bảy Màu Blue Grass.jpg"
        ]
    },
    "canho2": {
        id: "canho2",
        tendv: "🐟 Cá Neon Xanh",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Neon Xanh.jpg",
        tt1: `Cá Neon Xanh với dải màu xanh và đỏ dạ quang chạy dọc thân.
        
• Nguồn gốc: Amazon
• Kích thước: 2 - 3 cm
• Môi trường: Bể thủy sinh bơi theo đàn
• Nhiệt độ: 22-26°C
• pH: 6.0-7.0
• Thức ăn: Cám nhỏ, trùng chỉ
• Đặc điểm: Phát sáng rực rỡ dưới đèn LED`,
        gia: "10000",
        category: "Cá Cảnh Nhỏ",
        size: "2 - 3 cm",
        serves: "Bầy đàn 10-15 con",
        flavor: "Nước ngọt",
        tags: ["neon", "phát sáng", "đẹp", "dễ nuôi"],
        images: [
            "./ảnh/default-fish.jpg/cacanh/canho/Cá Neon Xanh.jpg"
        ]
    },
    "cavang1": {
        id: "cavang1",
        tendv: "🐠 Cá Vàng Ranchu Đỏ Toàn Thân",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Hạc Đỉnh Hồng (Redcap Oranda).png",
        tt1: `Cá Vàng Ranchu thuần chủng, thân tròn, màu đỏ rực rỡ.
        
• Nguồn gốc: Nhật Bản
• Kích thước: 5 - 6 cm
• Môi trường: Bể kính, hồ xi măng
• Nhiệt độ: 18-24°C
• pH: 7.0-8.0
• Thức ăn: Cám chuyên dụng, trùn
• Đặc điểm: Dễ nuôi, rất đẹp, sang trọng`,
        gia: "120000",
        category: "Cá Vàng",
        size: "5 - 6 cm",
        serves: "1-2 con/hồ 60L",
        flavor: "Nước ngọt",
        tags: ["vàng", "ranchu", "đẹp", "sang trọng"],
        images: [
            "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Hạc Đỉnh Hồng (Redcap Oranda).png"
        ]
    },
    "thuysinh1": {
        id: "thuysinh1",
        tendv: "🐟 Cá Neon Vua (Cardinal Tetra)",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts1.png",
        tt1: `Cá Neon Vua với sọc xanh và đỏ dạ quang, bơi đàn đẹp mắt.
        
• Nguồn gốc: Amazon
• Kích thước: 3 - 4 cm
• Môi trường: Bể thủy sinh
• Nhiệt độ: 24-28°C
• pH: 5.5-7.0
• Thức ăn: Cám nhỏ, trùng chỉ
• Đặc điểm: Đẹp, bơi đàn, dễ chăm`,
        gia: "15000",
        category: "Cá Thủy Sinh",
        size: "3 - 4 cm",
        serves: "Bầy đàn 10-15 con",
        flavor: "Nước ngọt",
        tags: ["neon", "thủy sinh", "đẹp", "đàn"],
        images: [
            "./ảnh/default-fish.jpg/cacanh/thuysinh/ts1.png"
        ]
    },
    "phongthuy1": {
        id: "phongthuy1",
        tendv: "🐉 Cá Rồng Huyết Long",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt1.jpg",
        tt1: `Cá Rồng Huyết Long màu đỏ rực, tượng trưng cho tài lộc, may mắn.
        
• Nguồn gốc: Đông Nam Á
• Kích thước: 20 - 30 cm
• Môi trường: Bể lớn, hồ kính
• Nhiệt độ: 26-30°C
• pH: 6.5-7.5
• Thức ăn: Tôm, cá nhỏ, cám chuyên dụng
• Đặc điểm: Phong thủy tốt, màu đỏ đẹp, quý hiếm`,
        gia: "25000000",
        category: "Cá Phong Thủy",
        size: "20 - 30 cm",
        serves: "1 con/hồ 200L",
        flavor: "Nước ngọt",
        tags: ["rồng", "phong thủy", "cao cấp", "quý hiếm"],
        images: [
            "./ảnh/default-fish.jpg/cacanh/phongthuy/pt1.jpg"
        ]
    },
    "combo1": {
        id: "combo1",
        tendv: "🎁 Combo Tân Thủ Nhập Môn",
        anh: "./ảnh/default-fish.jpg/cacanh/combo/cb1.png",
        tt1: `COMBO DÀNH CHO NGƯỜI MỚI CHƠI CÁ CẢNH:

• 5 con Cá Neon Xanh
• 3 con Cá Bảy Màu
• 1 gói thức ăn viên 50g
• 3 cây thủy sinh sống
• 1 chai dung dịch khử clo 50ml
• Hướng dẫn chăm sóc chi tiết

Tổng giá trị: 350,000 VNĐ
Tiết kiệm: 100,000 VNĐ (28%)`,
        gia: "250000",
        category: "Combo",
        size: "Combo tiết kiệm",
        serves: "Bể 30-50L",
        flavor: "Nước ngọt",
        tags: ["combo", "tiết kiệm", "người mới", "đầy đủ"],
        images: [
            "./ảnh/default-fish.jpg/cacanh/combo/cb1.png"
        ]

    },

    "combo2": {
        id: "combo2",
        tendv: "🌿 Combo Thủy Sinh Bán Chuyên (Standard)",
        anh: "./ảnh/default-fish.jpg/cacanh/combo/cb2.png",
        tt1: `COMBO NÂNG CẤP CHO DÂN CHƠI THỦY SINH BÁN CHUYÊN:

• 10 con Cá Sọc Ngựa Cánh Tiên (Đủ màu)
• 5 con Tép Cảnh Màu (Đỏ/Xanh) để dọn bể
• 2 con Ốc Nerita diệt rêu hại
• 1 cụm Dương Xỉ hoặc Rêu buộc giá thể
• 1 lọ phân nước bổ sung vi chất (100ml)
• 1 vòng cho cá ăn chống tràn

Tổng giá trị: 650,000 VNĐ
Tiết kiệm: 160,000 VNĐ (24%)`,
        gia: "490000",
        category: "Combo",
        size: "Combo tiêu chuẩn",
        serves: "Bể 50-80L",
        flavor: "Nước ngọt",
        tags: ["combo", "bán chuyên", "thủy sinh", "nâng cấp"],
        images: [
            "./ảnh/default-fish.jpg/cacanh/combo/cb2.png"
        ]
    },
    "combo3": {
        id: "combo3",
        tendv: "🔱 Combo Cao Cấp - Thủy Sinh Chuyên Nghiệp",
        anh: "./ảnh/default-fish.jpg/cacanh/combo/cb3.png",
        tt1: `COMBO CAO CẤP DÀNH CHO CÁC ĐỒNG NGƯ CHUYÊN NGHIỆP:

• 1 cặp Cá Thần Tiên (hoặc Cá Đĩa size nhỏ)
• 15 con Cá Phượng Hoàng Lam/Đức siêu đẹp
• 1 bụi Cây Tiêu Thảo hoặc Ráy Nana mọc khỏe
• 1 bộ sủi oxy siêu êm kèm đá sủi mịn
• 1 chai vi sinh sống cao cấp dòng Extrabio (125ml)
• 1 cây nhíp bén chuyên dụng cắm cây thủy sinh

Tổng giá trị: 1,250,000 VNĐ
Tiết kiệm: 300,000 VNĐ (24%)`,
        gia: "950000",
        category: "Combo",
        size: "Combo cao cấp",
        serves: "Bể 80-120L",
        flavor: "Nước ngọt",
        tags: ["combo", "cao cấp", "chuyên nghiệp", "đẳng cấp"],
        images: [
            "./ảnh/default-fish.jpg/cacanh/combo/cb3.png"
        ]
    },
    "combo4": {
        id: "combo4",
        tendv: "👑 Combo Dân Chơi Pro - Tuyệt Đỉnh Bể Thủy Sinh",
        anh: "./ảnh/default-fish.jpg/cacanh/combo/cb4.png",
        tt1: `COMBO VIP DÀNH CHO BẬC THẦY LÃO LUYỆN:

• 20 con Cá Neon Vua (Size đại, phát quang mạnh)
• 2 cặp Cá Guppy Full Gold/Albino thuần chủng
• 1 bộ bình khí CO2 mini (đầy đủ van tinh chỉnh)
• 1 bộ lọc thùng chất lượng cao kèm vật liệu lọc matrix
• 1 lọ thức ăn tươi sấy khô/trùng huyết bổ dưỡng (100g)
• Bộ đo 5 chỉ số nước (pH, NO3, kH,...) chuẩn chỉnh

Tổng giá trị: 3,200,000 VNĐ
Tiết kiệm: 700,000 VNĐ (21%)`,
        gia: "2500000",
        category: "Combo",
        size: "Combo VIP",
        serves: "Bể trên 120L",
        flavor: "Nước ngọt",
        tags: ["combo", "pro", "vip", "đỉnh cao"],
        images: [
            "./ảnh/default-fish.jpg/cacanh/combo/cb4.png"
        ]
    }
};




// ============================================
// 2. HÀM TIỆN ÍCH
// ============================================

function formatPrice(price) {
    return parseInt(price || 0).toLocaleString('vi-VN');
}

function getCartManager() {
    if (typeof window.cartManager !== 'undefined' && window.cartManager) {
        return window.cartManager;
    }
    
    return {
        addToCart: function(product, quantity = 1) {
            try {
                if (!product || !product.id) {
                    console.error('Sản phẩm không hợp lệ:', product);
                    return false;
                }
                
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingItem = cart.find(item => item.id === product.id);
                const qty = Math.max(1, Math.min(99, quantity));
                
                if (existingItem) {
                    existingItem.quantity += qty;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.tendv || product.name || 'Sản phẩm không tên',
                        image: product.anh || product.image || './ảnh/default-fish.jpg',
                        price: parseInt(product.gia || product.price || 0),
                        quantity: qty,
                        category: product.category || 'Không phân loại',
                        size: product.size || '3-4 cm',
                        serves: product.serves || '5-10 con'
                    });
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                
                const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
                const displayCount = totalItems > 99 ? '99+' : totalItems;
                
                document.querySelectorAll('#cart-badge, #cart-count, .cart-count').forEach(el => {
                    if (el) {
                        el.textContent = displayCount;
                        el.style.display = totalItems > 0 ? 'flex' : 'none';
                    }
                });
                
                return true;
            } catch (error) {
                console.error('Lỗi khi thêm vào giỏ hàng:', error);
                return false;
            }
        }
    };
}

// ============================================
// 3. HÀM HIỂN THỊ CHI TIẾT SẢN PHẨM
// ============================================

function displayProductDetail() {
    let product = null;
    const productId = getProductIdFromURL();
    
    if (productId && FISH_DATABASE[productId]) {
        product = FISH_DATABASE[productId];
        localStorage.setItem('selectedProduct', JSON.stringify(product));
    } else {
        try {
            product = JSON.parse(localStorage.getItem('selectedProduct'));
        } catch (error) {
            console.error('Lỗi khi parse product:', error);
        }
    }
    
    // ===== SỬA LỖI: THÊM FALLBACK CHO TẤT CẢ CÁC TRƯỜNG =====
    if (product) {
        product.tendv = product.tendv || 'Cá Cảnh Đặc Biệt';
        product.anh = product.anh || './ảnh/default-fish.jpg';
        product.tt1 = product.tt1 || 'Thông tin chi tiết sản phẩm';
        product.gia = product.gia || '0';
        product.category = product.category || 'Cá Cảnh';
        product.size = product.size || '3-4 cm';
        product.serves = product.serves || 'Bầy đàn 5-10 con';  // ← SỬA LỖI undefined
        product.flavor = product.flavor || 'Nước ngọt';         // ← SỬA LỖI chính tả
        product.tags = product.tags || ['cá cảnh'];
        product.images = product.images || [product.anh];
    }
    // ========================================================
    
    if (!product) {
        product = {
            id: "default",
            tendv: "Cá Cảnh Đặc Biệt",
            anh: "./ảnh/default-fish.jpg",
            tt1: "Cá cảnh cao cấp, khỏe mạnh, đẹp mắt. Phù hợp với mọi không gian sống.",
            gia: "500000",
            category: "Cá Đặc Biệt",
            size: "5-7 cm",
            serves: "Bầy đàn 5-10 con",     // ← SỬA LỖI
            flavor: "Nước ngọt",            // ← SỬA LỖI
            tags: ["đặc biệt", "cao cấp"]
        };
    }
    
    updateBreadcrumb(product);
    renderProductDetail(product);
    setupEventListeners(product);
}

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function updateBreadcrumb(product) {
    const breadcrumbCategory = document.getElementById('product-category');
    const breadcrumbName = document.getElementById('product-name');
    
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = product.category || 'Cá Cảnh';
    }
    if (breadcrumbName) {
        breadcrumbName.textContent = product.tendv || 'Chi tiết sản phẩm';
    }
}

function renderProductDetail(product) {
    const detailContainer = document.getElementById('product-detail-content');
    if (!detailContainer) return;
    
    const images = product.images || [product.anh, './ảnh/default-fish.jpg'];
    
    detailContainer.innerHTML = `
        <div class="product-detail-content">
            <div class="product-images-section">
                <div class="main-image-container">
                    <img src="${images[0]}" alt="${product.tendv}" 
                         id="main-product-image"
                         onerror="this.src='./ảnh/default-fish.jpg'">
                    <div class="image-badge ${product.category.includes('Phong Thủy') ? 'wedding' : product.category.includes('Vàng') ? 'birthday' : 'normal'}">
                        ${product.category.includes('Phong Thủy') ? '🐉' : product.category.includes('Vàng') ? '🐠' : '🐟'}
                    </div>
                </div>
                
                <div class="thumbnail-gallery">
                    ${images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" 
                             data-image="${img}"
                             onclick="changeProductImage('${img}')">
                            <img src="${img}" alt="Ảnh ${index + 1}"
                                 onerror="this.src='./ảnh/default-fish.jpg'">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="product-info-section">
                <div class="product-header">
                    <h1 class="product-title">${product.tendv}</h1>
                    <div class="product-meta">
                        <span class="category-badge">${product.category}</span>
                        <span class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="rating-text">4.5 (128 đánh giá)</span>
                        </span>
                    </div>
                </div>
                
                <div class="product-price-section">
                    <div class="current-price">${formatPrice(product.gia)} VNĐ</div>
                    <div class="price-details">
                        <span class="original-price">${formatPrice(parseInt(product.gia) * 1.2)} VNĐ</span>
                        <span class="discount">Tiết kiệm 20%</span>
                    </div>
                    <div class="installment">
                        <i class="fas fa-credit-card"></i>
                        Trả góp 0% qua thẻ tín dụng
                    </div>
                </div>
                
                <div class="basic-info">
                    <div class="info-item">
                        <i class="fas fa-ruler"></i>
                        <div>
                            <div class="info-label">Kích thước</div>
                            <div class="info-value">${product.size || '3-4 cm'}</div>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-users"></i>
                        <div>
                            <div class="info-label">Số lượng</div>
                            <div class="info-value">${product.serves || 'Bầy đàn 5-10 con'}</div>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-water"></i>
                        <div>
                            <div class="info-label">Môi trường</div>
                            <div class="info-value">${product.flavor || 'Nước ngọt'}</div>
                        </div>
                    </div>
                </div>
                
                <div class="quantity-section">
                    <label>Số lượng:</label>
                    <div class="quantity-control">
                        <button class="quantity-btn minus" onclick="changeQuantity(-1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" id="quantity" value="1" min="1" max="99" 
                               onchange="validateQuantity(this)">
                        <button class="quantity-btn plus" onclick="changeQuantity(1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="stock-info">
                        <i class="fas fa-check-circle"></i>
                        Còn hàng - Giao trong 2 giờ
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="btn-add-to-cart" onclick="addToCartFromDetail()">
                        <i class="fas fa-cart-plus"></i>
                        <span>Thêm vào giỏ hàng</span>
                    </button>
                    <button class="btn-buy-now" onclick="buyNow()">
                        <i class="fas fa-bolt"></i>
                        <span>Mua ngay</span>
                    </button>
                    <button class="btn-wishlist" onclick="addToWishlist()">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                
                <div class="product-tags">
                    ${(product.tags || []).map(tag => `
                        <span class="tag">${tag}</span>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="product-description-section">
            <div class="section-tabs">
                <button class="tab-btn active" onclick="switchTab('description')">Mô tả</button>
                <button class="tab-btn" onclick="switchTab('reviews')">Đánh giá</button>
                <button class="tab-btn" onclick="switchTab('policy')">Chính sách</button>
            </div>
            
            <div class="tab-content active" id="description-tab">
                <div class="description-content">
                    ${product.tt1.split('\n').map(line => `<p>${line}</p>`).join('')}
                </div>
                
                <div class="features-grid">
                    <div class="feature">
                        <i class="fas fa-heart"></i>
                        <h4>Khỏe mạnh</h4>
                        <p>Đảm bảo cá khỏe mạnh, bơi lội linh hoạt</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-clock"></i>
                        <h4>Giao hàng nhanh</h4>
                        <p>Giao trong 2 giờ nội thành</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-gift"></i>
                        <h4>Đóng gói chuyên nghiệp</h4>
                        <p>Bao bì đảm bảo an toàn cho cá</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-undo"></i>
                        <h4>Bảo hành sức khỏe</h4>
                        <p>Bảo hành 7 ngày nếu cá có vấn đề</p>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="reviews-tab">
                <div class="reviews-section">
                    <h3>Đánh giá từ khách hàng</h3>
                    <div class="average-rating">
                        <div class="rating-number">4.5/5</div>
                        <div class="rating-stars">
                            ${'<i class="fas fa-star"></i>'.repeat(4)}<i class="fas fa-star-half-alt"></i>
                        </div>
                        <div class="rating-count">128 đánh giá</div>
                    </div>
                    
                    <div class="review-list">
                        <div class="review">
                            <div class="review-header">
                                <img src="https://i.pravatar.cc/150?img=1" alt="Nguyễn Văn A" class="review-avatar">
                                <div>
                                    <div class="review-name">Nguyễn Văn A</div>
                                    <div class="review-date">20/01/2024</div>
                                </div>
                            </div>
                            <div class="review-rating">
                                ${'<i class="fas fa-star"></i>'.repeat(5)}
                            </div>
                            <div class="review-text">
                                "Cá đẹp, khỏe mạnh, bơi rất dễ thương. Shop đóng gói cẩn thận, giao hàng đúng giờ."
                            </div>
                        </div>
                        
                        <div class="review">
                            <div class="review-header">
                                <img src="https://i.pravatar.cc/150?img=2" alt="Trần Thị B" class="review-avatar">
                                <div>
                                    <div class="review-name">Trần Thị B</div>
                                    <div class="review-date">15/01/2024</div>
                                </div>
                            </div>
                            <div class="review-rating">
                                ${'<i class="fas fa-star"></i>'.repeat(4)}<i class="far fa-star"></i>
                            </div>
                            <div class="review-text">
                                "Chất lượng tốt, cá thích nghi nhanh với hồ mới. Sẽ ủng hộ lần sau."
                            </div>
                        </div>
                    </div>
                    
                    <div class="write-review-btn" style="margin-top: 20px;">
                        <button onclick="viewAllReviews()" style="
                            background: linear-gradient(135deg, #667eea, #764ba2);
                            color: white;
                            border: none;
                            padding: 12px 30px;
                            border-radius: 8px;
                            cursor: pointer;
                            font-weight: bold;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            margin: 0 auto;
                        ">
                            <i class="fas fa-edit"></i>
                            Viết đánh giá của bạn
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="policy-tab">
                <div class="policy-section">
                    <h3>Chính sách mua hàng</h3>
                    <div class="policy-list">
                        <div class="policy-item">
                            <i class="fas fa-shipping-fast"></i>
                            <div>
                                <h4>Giao hàng</h4>
                                <p>• Miễn phí giao hàng nội thành đơn từ 500k<br>
                                   • Giao trong 2 giờ (8:00 - 20:00)<br>
                                   • Đóng gói chuyên nghiệp đảm bảo an toàn</p>
                            </div>
                        </div>
                        <div class="policy-item">
                            <i class="fas fa-exchange-alt"></i>
                            <div>
                                <h4>Đổi trả</h4>
                                <p>• Bảo hành sức khỏe 7 ngày<br>
                                   • Hoàn tiền 100% nếu cá chết trong 24h<br>
                                   • Liên hệ hotline: 0937 881 148</p>
                            </div>
                        </div>
                        <div class="policy-item">
                            <i class="fas fa-calendar-alt"></i>
                            <div>
                                <h4>Đặt hàng trước</h4>
                                <p>• Đặt trước 3 ngày cho cá nhập khẩu<br>
                                   • Đặt trước 1 ngày cho cá thường<br>
                                   • Tư vấn miễn phí 24/7</p>
                            </div>
                        </div>
                        <div class="policy-item">
                            <i class="fas fa-credit-card"></i>
                            <div>
                                <h4>Thanh toán</h4>
                                <p>• COD (nhận hàng thanh toán)<br>
                                   • Chuyển khoản ngân hàng<br>
                                   • Thẻ tín dụng (trả góp 0%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="related-products-section">
            <h2>Sản phẩm liên quan</h2>
            <div class="related-products" id="related-products"></div>
        </div>
    `;
    
    showRelatedProducts(product);
}

function showRelatedProducts(currentProduct) {
    const container = document.getElementById('related-products');
    if (!container) return;
    
    const relatedProducts = Object.values(FISH_DATABASE)
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) return;
    
    container.innerHTML = relatedProducts.map(product => `
        <div class="related-product" onclick="viewProduct('${product.id}')">
            <img src="${product.anh}" alt="${product.tendv}"
                 onerror="this.src='./ảnh/default-fish.jpg'">
            <div class="related-product-info">
                <div class="related-product-name">${product.tendv}</div>
                <div class="related-product-price">${formatPrice(product.gia)} VNĐ</div>
                <div class="related-product-size">${product.size}</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// 4. CÁC HÀM XỬ LÝ SỰ KIỆN
// ============================================

function changeProductImage(imageUrl) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = imageUrl;
        mainImage.onerror = function() {
            this.src = './ảnh/default-fish.jpg';
        };
    }
    
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.dataset.image === imageUrl) {
            thumb.classList.add('active');
        }
    });
}

function changeQuantity(change) {
    const input = document.getElementById('quantity');
    if (!input) return;
    
    let value = parseInt(input.value) + change;
    if (value < 1) value = 1;
    if (value > 99) value = 99;
    input.value = value;
}

function validateQuantity(input) {
    let value = parseInt(input.value);
    if (isNaN(value) || value < 1) {
        input.value = 1;
    } else if (value > 99) {
        input.value = 99;
    }
}

function addToCartFromDetail() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) {
        showNotification('Không tìm thấy thông tin sản phẩm', 'error');
        return;
    }

    const quantityInput = document.getElementById('quantity');
    if (!quantityInput) {
        showNotification('Không tìm thấy ô số lượng', 'error');
        return;
    }
    
    const quantity = parseInt(quantityInput.value) || 1;
    
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để thêm vào giỏ hàng!', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }

    const cartManager = getCartManager();
    const success = cartManager.addToCart(product, quantity);
    
    if (success) {
        showNotification(`Đã thêm ${quantity} "${product.tendv}" vào giỏ hàng!`, 'success');
        
        const addBtn = document.querySelector('.btn-add-to-cart');
        if (addBtn) {
            const originalHTML = addBtn.innerHTML;
            const originalBackground = addBtn.style.background;
            
            addBtn.innerHTML = '<i class="fas fa-check"></i> <span>Đã thêm</span>';
            addBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                addBtn.innerHTML = originalHTML;
                addBtn.style.background = originalBackground;
            }, 1000);
        }
    } else {
        showNotification('Không thể thêm sản phẩm vào giỏ hàng!', 'error');
    }
}

function buyNow() {
    addToCartFromDetail();
    setTimeout(() => {
        window.location.href = 'sop.html';
    }, 800);
}

function addToWishlist() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) return;
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (!wishlist.some(item => item.id === product.id)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        const wishlistBtn = document.querySelector('.btn-wishlist');
        if (wishlistBtn) {
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
            wishlistBtn.style.color = '#e91e63';
        }
        
        showNotification('Đã thêm vào danh sách yêu thích!', 'success');
    } else {
        showNotification('Sản phẩm đã có trong danh sách yêu thích!', 'info');
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const tabContent = document.getElementById(`${tabName}-tab`);
    const tabBtn = document.querySelector(`.tab-btn[onclick="switchTab('${tabName}')"]`);
    
    if (tabContent) tabContent.classList.add('active');
    if (tabBtn) tabBtn.classList.add('active');
}

function viewAllReviews() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) return;
    
    const reviews = getProductReviews(product.id);
    
    const modalHTML = `
        <div class="reviews-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        ">
            <div class="modal-content" style="
                background: white;
                border-radius: 15px;
                padding: 30px;
                max-width: 800px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
            ">
                <div class="modal-header" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #eee;
                ">
                    <h2 style="margin: 0; color: #333;">Đánh giá sản phẩm</h2>
                    <button onclick="closeModal()" style="
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                        color: #666;
                    ">&times;</button>
                </div>
                
                <div class="add-review-section" style="
                    margin-bottom: 30px;
                    padding: 20px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 10px;
                    color: white;
                ">
                    <h3 style="margin: 0 0 15px 0;">Thêm đánh giá của bạn</h3>
                    <div class="review-stars-input" style="margin-bottom: 15px;">
                        ${[1,2,3,4,5].map(star => `
                            <span style="
                                font-size: 24px;
                                cursor: pointer;
                                color: #ddd;
                                margin-right: 5px;
                            " onclick="rateProduct(${star})" data-star="${star}">★</span>
                        `).join('')}
                        <span id="selected-rating-text" style="margin-left: 10px;"></span>
                    </div>
                    <textarea id="review-text" placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..." style="
                        width: 100%;
                        height: 100px;
                        padding: 12px;
                        border: none;
                        border-radius: 8px;
                        resize: vertical;
                        margin-bottom: 15px;
                    "></textarea>
                    <button onclick="submitReview()" style="
                        background: white;
                        color: #667eea;
                        border: none;
                        padding: 10px 25px;
                        border-radius: 8px;
                        font-weight: bold;
                        cursor: pointer;
                    ">Gửi đánh giá</button>
                </div>
                
                <div class="all-reviews">
                    ${reviews.map(review => `
                        <div class="review-item" style="
                            padding: 20px;
                            border-bottom: 1px solid #eee;
                            margin-bottom: 15px;
                        ">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                                <img src="${review.avatar}" alt="${review.name}" style="
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                    object-fit: cover;
                                ">
                                <div>
                                    <div style="font-weight: bold; color: #333;">${review.name}</div>
                                    <div style="color: #666; font-size: 14px;">${formatDate(review.date)}</div>
                                </div>
                            </div>
                            <div style="color: #ff9800; margin-bottom: 10px;">
                                ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                            </div>
                            <div style="color: #333; line-height: 1.6; margin-bottom: 10px;">
                                ${review.comment}
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button onclick="likeReview('${review.id}')" style="
                                    background: none;
                                    border: 1px solid #ddd;
                                    padding: 5px 15px;
                                    border-radius: 20px;
                                    color: #666;
                                    cursor: pointer;
                                ">
                                    <i class="fas fa-thumbs-up"></i> Hữu ích (${review.likes || 0})
                                </button>
                                <button onclick="reportReview('${review.id}')" style="
                                    background: none;
                                    border: none;
                                    color: #999;
                                    cursor: pointer;
                                ">
                                    Báo cáo
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    setupReviewStars();
}

function closeModal() {
    const modal = document.querySelector('.reviews-modal');
    if (modal) modal.remove();
}

function getProductReviews(productId) {
    return [
        {
            id: "review-1",
            productId: productId,
            name: "Nguyễn Văn A",
            avatar: "https://i.pravatar.cc/150?img=1",
            rating: 5,
            date: "2024-01-20",
            comment: "Cá đẹp, khỏe mạnh, bơi rất dễ thương. Shop đóng gói cẩn thận, giao hàng đúng giờ.",
            likes: 12
        },
        {
            id: "review-2",
            productId: productId,
            name: "Trần Thị B",
            avatar: "https://i.pravatar.cc/150?img=2",
            rating: 4,
            date: "2024-01-15",
            comment: "Chất lượng tốt, cá thích nghi nhanh với hồ mới. Sẽ ủng hộ lần sau.",
            likes: 8
        },
        {
            id: "review-3",
            productId: productId,
            name: "Lê Văn C",
            avatar: "https://i.pravatar.cc/150?img=3",
            rating: 5,
            date: "2024-01-10",
            comment: "Tuyệt vời! Cá đẹp như hình, bơi khỏe. Nhân viên tư vấn nhiệt tình. Rất đáng tiền!",
            likes: 15
        }
    ];
}

function rateProduct(rating) {
    const stars = document.querySelectorAll('[data-star]');
    stars.forEach((star, index) => {
        const starNum = parseInt(star.dataset.star);
        star.style.color = starNum <= rating ? '#ffd700' : '#ddd';
    });
    
    const ratingText = document.getElementById('selected-rating-text');
    const texts = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];
    ratingText.textContent = texts[rating - 1];
    ratingText.style.color = '#ffd700';
    
    window.tempRating = rating;
}

function setupReviewStars() {
    const stars = document.querySelectorAll('[data-star]');
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.dataset.star);
            stars.forEach((s, index) => {
                const starNum = parseInt(s.dataset.star);
                s.style.color = starNum <= rating ? '#ffd700' : '#ddd';
            });
        });
        
        star.addEventListener('mouseout', function() {
            if (window.tempRating) {
                stars.forEach(s => {
                    const starNum = parseInt(s.dataset.star);
                    s.style.color = starNum <= window.tempRating ? '#ffd700' : '#ddd';
                });
            } else {
                stars.forEach(s => {
                    s.style.color = '#ddd';
                });
            }
        });
    });
}

function submitReview() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        showNotification('Vui lòng đăng nhập để đánh giá sản phẩm!', 'warning');
        setTimeout(() => {
            closeModal();
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    
    const rating = window.tempRating;
    const comment = document.getElementById('review-text').value.trim();
    
    if (!rating) {
        showNotification('Vui lòng chọn số sao đánh giá!', 'error');
        return;
    }
    
    if (!comment) {
        showNotification('Vui lòng nhập nội dung đánh giá!', 'error');
        return;
    }
    
    showNotification('Cảm ơn bạn đã đánh giá sản phẩm!', 'success');
    
    setTimeout(() => {
        closeModal();
        switchTab('reviews');
    }, 1500);
}

function likeReview(reviewId) {
    showNotification('Cảm ơn phản hồi của bạn!', 'info');
}

function reportReview(reviewId) {
    const reason = prompt('Vui lòng nhập lý do báo cáo:');
    if (reason && reason.trim()) {
        showNotification('Đã gửi báo cáo. Cảm ơn bạn đã đóng góp!', 'info');
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}

function viewProduct(productId) {
    if (FISH_DATABASE[productId]) {
        localStorage.setItem('selectedProduct', JSON.stringify(FISH_DATABASE[productId]));
        window.location.href = `product-detail.html?id=${productId}`;
    }
}

function showNotification(message, type = 'success') {
    try {
        let notification = document.getElementById('global-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'global-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 8px;
                color: white;
                font-weight: bold;
                z-index: 9999;
                display: none;
                min-width: 300px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            `;
            document.body.appendChild(notification);
        }
        
        const colors = {
            'success': 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            'error': 'linear-gradient(135deg, #ff5252, #d32f2f)',
            'info': 'linear-gradient(135deg, #2196F3, #1976D2)',
            'warning': 'linear-gradient(135deg, #FF9800, #F57C00)'
        };
        
        notification.style.background = colors[type] || colors['success'];
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        notification.style.display = 'block';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    } catch (error) {
        console.error('Lỗi khi hiển thị thông báo:', error);
    }
}

function setupEventListeners(product) {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addToCartFromDetail();
            }
        });
    }
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const wishlistBtn = document.querySelector('.btn-wishlist');
    if (wishlistBtn && isInWishlist) {
        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
        wishlistBtn.style.color = '#e91e63';
    }
}

// ============================================
// 5. KHỞI TẠO KHI DOM SẴN SÀNG
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo trang chi tiết sản phẩm...');
    
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('wishlist')) {
        localStorage.setItem('wishlist', JSON.stringify([]));
    }
    
    displayProductDetail();
    addProductDetailStyles();
    updateCartCount();
});

function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const cartBadge = document.getElementById('cart-badge');
        
        if (cartBadge) {
            cartBadge.textContent = totalItems > 99 ? '99+' : totalItems;
            cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    } catch (error) {
        console.error('Lỗi khi cập nhật giỏ hàng:', error);
    }
}

function addProductDetailStyles() {
    if (document.querySelector('#product-detail-styles')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'product-detail-styles';
    style.textContent = `
        .breadcrumb {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 15px 0;
            margin-top: 20px;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .breadcrumb-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .breadcrumb-container a {
            text-decoration: none;
            color: #666;
            transition: color 0.3s;
            font-weight: 500;
        }
        
        .breadcrumb-container a:hover {
            color: #e91e63;
        }
        
        .breadcrumb-container .current {
            color: #e91e63;
            font-weight: 600;
        }
        
        .product-detail-container {
            max-width: 1200px;
            margin: 30px auto;
            padding: 0 20px;
        }
        
        .product-detail-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            margin-top: 20px;
        }
        
        @media (max-width: 768px) {
            .product-detail-content {
                grid-template-columns: 1fr;
                padding: 20px;
                gap: 30px;
            }
        }
        
        .product-images-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .main-image-container {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            height: 400px;
            background: #f9f9f9;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .main-image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            transition: transform 0.3s;
        }
        
        .main-image-container:hover img {
            transform: scale(1.02);
        }
        
        .image-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 18px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            z-index: 2;
        }
        
        .image-badge.birthday {
            background: linear-gradient(135deg, #ff4081, #e91e63);
            color: white;
        }
        
        .image-badge.wedding {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }
        
        .image-badge.normal {
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
        }
        
        .thumbnail-gallery {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 10px 0;
        }
        
        .thumbnail {
            min-width: 80px;
            height: 80px;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s;
            opacity: 0.7;
        }
        
        .thumbnail:hover {
            opacity: 0.9;
        }
        
        .thumbnail.active {
            border-color: #e91e63;
            opacity: 1;
        }
        
        .thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .product-info-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .product-header {
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .product-title {
            font-size: 28px;
            color: #333;
            margin-bottom: 10px;
            line-height: 1.3;
        }
        
        .product-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .category-badge {
            background: #f0f0f0;
            color: #666;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 14px;
        }
        
        .rating {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #ff9800;
        }
        
        .rating-text {
            color: #666;
            font-size: 14px;
            margin-left: 5px;
        }
        
        .product-price-section {
            background: linear-gradient(135deg, #f9f9f9, #f0f0f0);
            padding: 20px;
            border-radius: 10px;
        }
        
        .current-price {
            font-size: 36px;
            color: #e91e63;
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .price-details {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 10px;
        }
        
        .original-price {
            text-decoration: line-through;
            color: #999;
            font-size: 18px;
        }
        
        .discount {
            background: #ff4081;
            color: white;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: bold;
        }
        
        .installment {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #666;
            font-size: 14px;
        }
        
        .basic-info {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
        }
        
        @media (max-width: 480px) {
            .basic-info {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        .info-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .info-item i {
            font-size: 24px;
            color: #667eea;
            width: 30px;
        }
        
        .info-label {
            font-size: 12px;
            color: #999;
            text-transform: uppercase;
        }
        
        .info-value {
            font-weight: 600;
            color: #333;
        }
        
        .quantity-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .quantity-section label {
            font-weight: 600;
            color: #333;
        }
        
        .quantity-control {
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 150px;
        }
        
        .quantity-btn {
            width: 40px;
            height: 40px;
            border: 2px solid #ddd;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            font-size: 16px;
            color: #333;
        }
        
        .quantity-btn:hover {
            background: #f5f5f5;
            border-color: #667eea;
            color: #667eea;
        }
        
        #quantity {
            width: 60px;
            height: 40px;
            text-align: center;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            padding: 0;
        }
        
        #quantity:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .stock-info {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #4CAF50;
            font-size: 14px;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            margin: 20px 0;
        }
        
        @media (max-width: 480px) {
            .action-buttons {
                flex-direction: column;
            }
        }
        
        .btn-add-to-cart, .btn-buy-now, .btn-wishlist {
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: all 0.3s;
            padding: 15px 25px;
        }
        
        .btn-add-to-cart {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            flex: 2;
        }
        
        .btn-add-to-cart:hover {
            background: linear-gradient(135deg, #764ba2, #667eea);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        
        .btn-buy-now {
            background: linear-gradient(135deg, #f093fb, #f5576c);
            color: white;
            flex: 2;
        }
        
        .btn-buy-now:hover {
            background: linear-gradient(135deg, #f5576c, #f093fb);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(245, 87, 108, 0.3);
        }
        
        .btn-wishlist {
            background: #f0f0f0;
            color: #666;
            flex: 1;
            max-width: 60px;
        }
        
        .btn-wishlist:hover {
            background: #e0e0e0;
            transform: translateY(-2px);
        }
        
        .product-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .tag {
            background: #f0f0f0;
            color: #666;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 13px;
        }
        
        .product-description-section {
            margin-top: 40px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        
        .section-tabs {
            display: flex;
            background: #f9f9f9;
            border-bottom: 1px solid #eee;
        }
        
        .tab-btn {
            padding: 15px 30px;
            background: none;
            border: none;
            font-size: 16px;
            font-weight: 600;
            color: #666;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
        }
        
        .tab-btn:hover {
            color: #667eea;
        }
        
        .tab-btn.active {
            color: #667eea;
        }
        
        .tab-btn.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: #667eea;
        }
        
        .tab-content {
            padding: 30px;
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .description-content {
            color: #666;
            line-height: 1.8;
            margin-bottom: 30px;
        }
        
        .description-content p {
            margin-bottom: 15px;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 30px;
        }
        
        @media (max-width: 768px) {
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 480px) {
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
        
        .feature {
            text-align: center;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
            transition: transform 0.3s;
        }
        
        .feature:hover {
            transform: translateY(-5px);
        }
        
        .feature i {
            font-size: 32px;
            color: #667eea;
            margin-bottom: 15px;
        }
        
        .feature h4 {
            color: #333;
            margin-bottom: 10px;
            font-size: 16px;
        }
        
        .feature p {
            color: #666;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .reviews-section {
            max-width: 800px;
        }
        
        .average-rating {
            display: flex;
            align-items: center;
            gap: 20px;
            margin: 20px 0 30px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
        }
        
        .rating-number {
            font-size: 36px;
            font-weight: bold;
            color: #333;
        }
        
        .rating-stars {
            color: #ff9800;
            font-size: 20px;
        }
        
        .rating-count {
            color: #666;
        }
        
        .review-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .review {
            padding: 20px;
            background: white;
            border: 1px solid #eee;
            border-radius: 10px;
        }
        
        .review-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 10px;
        }
        
        .review-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .review-name {
            font-weight: 600;
            color: #333;
        }
        
        .review-date {
            color: #999;
            font-size: 14px;
        }
        
        .review-rating {
            color: #ff9800;
            margin-bottom: 10px;
        }
        
        .review-text {
            color: #666;
            line-height: 1.6;
        }
        
        .policy-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }
        
        .policy-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
        }
        
        .policy-item i {
            font-size: 24px;
            color: #667eea;
            margin-top: 5px;
        }
        
        .policy-item h4 {
            color: #333;
            margin-bottom: 10px;
        }
        
        .policy-item p {
            color: #666;
            line-height: 1.6;
        }
        
        .related-products-section {
            margin-top: 40px;
        }
        
        .related-products-section h2 {
            text-align: left;
            margin-bottom: 20px;
            font-size: 24px;
            color: #333;
        }
        
        .related-products {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
        
        @media (max-width: 992px) {
            .related-products {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .related-products {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 480px) {
            .related-products {
                grid-template-columns: 1fr;
            }
        }
        
        .related-product {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            cursor: pointer;
            transition: transform 0.3s;
        }
        
        .related-product:hover {
            transform: translateY(-5px);
        }
        
        .related-product img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }
        
        .related-product-info {
            padding: 15px;
        }
        
        .related-product-name {
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
            font-size: 15px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .related-product-price {
            color: #e91e63;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 5px;
        }
        
        .related-product-size {
            color: #666;
            font-size: 13px;
        }
    `;
    document.head.appendChild(style);
}

window.changeProductImage = changeProductImage;
window.changeQuantity = changeQuantity;
window.validateQuantity = validateQuantity;
window.addToCartFromDetail = addToCartFromDetail;
window.buyNow = buyNow;
window.addToWishlist = addToWishlist;
window.switchTab = switchTab;
window.viewAllReviews = viewAllReviews;
window.viewProduct = viewProduct;
window.formatPrice = formatPrice;
window.rateProduct = rateProduct;
window.submitReview = submitReview;
window.likeReview = likeReview;
window.reportReview = reportReview;
window.closeModal = closeModal;

console.log('product-detail.js đã sẵn sàng!');