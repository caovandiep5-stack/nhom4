// main.js - Quản lý hiển thị sản phẩm BÁNH KEM
console.log('main.js đang chạy...');

// Danh sách bánh kem SINH NHẬT (15 sản phẩm)
const dsca1 = [
    {
        id: "canho1",
        tendv: "Cá Bảy Màu Full Gold",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Bảy Màu Full Gold.jpg",
        tt1: "Toàn thân phủ màu vàng kim lấp lánh, vây xòe rộng. Thích hợp nuôi bầy đàn, dễ chăm sóc.",
        gia: "25000",
        category: "Cá Cảnh Nhỏ",
        size: "3 - 4 cm",
        environment: "Bể thủy sinh, thùng xốp"
    },
    {
        id: "canho2",
        tendv: "Cá Bảy Màu Blue Grass",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Bảy Màu Blue Grass.jpg",
        tt1: "Thân màu xanh dương mát mắt kết hợp với hoa văn chấm bi li ti ở đuôi rất độc đáo.",
        gia: "30000",
        category: "Cá Cảnh Nhỏ",
        size: "3 - 4 cm",
        environment: "Bể thủy sinh, thùng xốp"
    },
   
    {
        id: "canho4",
        tendv: "Cá Neon Xanh",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Neon Xanh.jpg",
        tt1: "Có dải màu xanh và đỏ dạ quang chạy dọc thân, phát sáng rực rỡ dưới ánh đèn bể cá.",
        gia: "10000",
        category: "Cá Cảnh Nhỏ",
        size: "2 - 3 cm",
        environment: "Bể thủy sinh bơi theo đàn"
    },
    {
        id: "canho5",
        tendv: "Cá Sọc Ngựa Dạ Quang",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Sọc Ngựa Dạ Quang.jpg",
        tt1: "Cá khỏe, bơi nhanh, có nhiều màu dạ quang nổi bật như hồng, xanh chuối, vàng.",
        gia: "12000",
        category: "Cá Cảnh Nhỏ",
        size: "3 - 4 cm",
        environment: "Bể thủy sinh, bể mini"
    },
    {
        id: "canho6",
        tendv: "Cá Tam Giác",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Tam Giác.jpg",
        tt1: "Thân hình có mảng màu đen hình tam giác đặc trưng, tập tính bơi thành đàn rất đều.",
        gia: "15000",
        category: "Cá Cảnh Nhỏ",
        size: "3 - 4 cm",
        environment: "Bể thủy sinh lớn"
    },
    {
        id: "canho7",
        tendv: "Cá Diếc Anh Đào",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Diếc Anh Đào.jpg",
        tt1: "Khi trưởng thành, cá trống sẽ lên màu đỏ rực như quả anh đào vô cùng hút mắt.",
        gia: "18000",
        category: "Cá Cảnh Nhỏ",
        size: "4 - 5 cm",
        environment: "Bể thủy sinh, bể kính"
    },
    {
        id: "canho8",
        tendv: "Cá Mún Đỏ",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Mún Đỏ.jpg",
        tt1: "Thân hình bầu bĩnh màu đỏ cam, cực kỳ dễ nuôi, sinh sản nhanh, phù hợp cho người mới.",
        gia: "8000",
        category: "Cá Cảnh Nhỏ",
        size: "3 - 4 cm",
        environment: "Bể mini, thùng xốp"
    },
    {
        id: "canho9",
        tendv: "Cá Bình Tích",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Bình Tích.jpg",
        tt1: "Cá có bụng tròn xòe với các màu trắng, vàng, đen. Rất chăm rỉa rêu hại giữ sạch bể.",
        gia: "10000",
        category: "Cá Cảnh Nhỏ",
        size: "4 - 5 cm",
        environment: "Bể kính, chậu ngoài trời"
    },
    {
        id: "canho10",
        tendv: "Cá Trâm",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Trâm.jpg",
        tt1: "Loài cá siêu mini màu đỏ cam, kích thước tí hon thích hợp nuôi trong các bể nano để ngắm.",
        gia: "5000",
        category: "Cá Cảnh Nhỏ",
        size: "1 - 2 cm",
        environment: "Bể thủy sinh Nano"
    },
    {
        id: "canho11",
        tendv: "Cá Betta",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Betta.jpg",
        tt1: "Vây xòe rộng lộng lẫy, nhiều màu sắc. Có thể nuôi mộc không cần máy lọc hay oxy.",
        gia: "40000",
        category: "Cá Cảnh Nhỏ",
        size: "5 - 6 cm",
        environment: "Hũ thủy tinh, bể để bàn"
    },
    {
        id: "canho12",
        tendv: "Cá Sặc Gấm",
        anh: "./ảnh/default-fish.jpg/cacanh/canho/Cá Sặc Gấm.jpg",
        tt1: "Thân dẹt với các sọc xanh lam và đỏ cam lấp lánh như kim cương, chịu nghèo oxy tốt.",
        gia: "20000",
        category: "Cá Cảnh Nhỏ",
        size: "5 - 7 cm",
        environment: "Bể kính, chậu cây thủy sinh"
    }
];

// 2. CÁ VÀNG (8 sản phẩm)
const dsca2 = [
    {
        id: "cavang1",
        tendv: "Cá Vàng Ranchu Đỏ Toàn Thân",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Hạc Đỉnh Hồng (Redcap Oranda).png",
        tt1: "Cá vàng Ranchu thuần chủng, thân tròn, màu đỏ rực rỡ, dễ nuôi và rất đẹp mắt.",
        gia: "120000",
        category: "Cá Vàng",
        size: "5 - 6 cm",
        environment: "Bể kính, hồ xi măng"
    },
    {
        id: "cavang2",
        tendv: "Cá Vàng Ranchu Calico (Ngũ Sắc)",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Lưu Kim (Ryukin).png",
        tt1: "Cá vàng Ranchu ngũ sắc với hoa văn độc đáo, rất được ưa chuộng.",
        gia: "150000",
        category: "Cá Vàng",
        size: "5 - 7 cm",
        environment: "Bể kính, hồ xi măng"
    },
    {
        id: "cavang3",
        tendv: "Cá Vàng Oranda Đầu Lân",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Mắt Lồi (Black Moor).jpg",
        tt1: "Cá vàng Oranda có u đầu phát triển, màu sắc đa dạng, sang trọng.",
        gia: "180000",
        category: "Cá Vàng",
        size: "6 - 8 cm",
        environment: "Bể kính, hồ thủy sinh"
    },
    {
        id: "cavang4",
        tendv: "Cá Vàng Oranda Kamihata",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Oranda Kamihata.jpg",
        tt1: "Dòng Oranda Kamihata nhập khẩu, màu đỏ - trắng tương phản, u đầu đẹp.",
        gia: "200000",
        category: "Cá Vàng",
        size: "6 - 8 cm",
        environment: "Bể kính"
    },
    {
        id: "cavang5",
        tendv: "Cá Vàng Ping Pong",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Ping Pong.png",
        tt1: "Cá vàng dáng tròn như quả bóng, bơi chậm rãi, dễ thương.",
        gia: "90000",
        category: "Cá Vàng",
        size: "4 - 5 cm",
        environment: "Bể mini, hồ thủy sinh"
    },
    {
        id: "cavang6",
        tendv: "Cá Vàng Mắt Lồi (Black Moor)",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Mắt Lồi (Black Moor).jpg",
        tt1: "Cá vàng mắt lồi màu đen huyền bí, mắt to đặc trưng, dễ chăm sóc.",
        gia: "100000",
        category: "Cá Vàng",
        size: "5 - 6 cm",
        environment: "Bể kính"
    },
    {
        id: "cavang7",
        tendv: "Cá Vàng Hạc Đỉnh Hồng",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Hạc Đỉnh Hồng (Redcap Oranda).png",
        tt1: "Cá vàng có u đầu màu đỏ như hạc đỉnh, thân trắng tinh, rất quý.",
        gia: "250000",
        category: "Cá Vàng",
        size: "6 - 8 cm",
        environment: "Bể kính, hồ phong thủy"
    },
    {
        id: "cavang8",
        tendv: "Cá Vàng Lưu Kim (Ryukin)",
        anh: "./ảnh/default-fish.jpg/cacanh/cavang/Cá Vàng Lưu Kim (Ryukin).png",
        tt1: "Cá vàng Ryukin có lưng gù, đuôi xòe rộng, nhiều màu sắc.",
        gia: "130000",
        category: "Cá Vàng",
        size: "5 - 7 cm",
        environment: "Bể kính, hồ thủy sinh"
    }
];

// 3. CÁ THỦY SINH (8 sản phẩm)
const dsca3 = [
    {
        id: "thuysinh1",
        tendv: "Cá Neon Vua (Cardinal Tetra)",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts1.png",
        tt1: "Cá neon vua với sọc xanh và đỏ dạ quang, bơi đàn đẹp mắt.",
        gia: "15000",
        category: "Cá Thủy Sinh",
        size: "3 - 4 cm",
        environment: "Bể thủy sinh"
    },
    {
        id: "thuysinh2",
        tendv: "Cá Tứ Vân (Cá Xê Can)",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts2.jpg",
        tt1: "Cá tứ vân có 4 sọc đen trên thân, bơi nhanh, thích hợp bể trồng cây.",
        gia: "12000",
        category: "Cá Thủy Sinh",
        size: "3 - 4 cm",
        environment: "Bể thủy sinh"
    },
    {
        id: "thuysinh3",
        tendv: "Cá Diếc Anh Đào (Cherry Barb)",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts3.jpg",
        tt1: "Cá trống có màu đỏ rực như anh đào, rất nổi bật trong bể.",
        gia: "18000",
        category: "Cá Thủy Sinh",
        size: "4 - 5 cm",
        environment: "Bể thủy sinh"
    },
    {
        id: "thuysinh4",
        tendv: "Cá Thủy Tinh (Glass Catfish)",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts4.jpg",
        tt1: "Cá thủy tinh trong suốt, nhìn thấy xương, bơi tầng giữa, lạ mắt.",
        gia: "20000",
        category: "Cá Thủy Sinh",
        size: "5 - 6 cm",
        environment: "Bể thủy sinh"
    },
    {
        id: "thuysinh5",
        tendv: "Cá Thần Tiên (Angel Fish)",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts5.jpg",
        tt1: "Cá thần tiên với dáng bơi uyển chuyển, vây dài, màu sắc đa dạng.",
        gia: "50000",
        category: "Cá Thủy Sinh",
        size: "6 - 8 cm",
        environment: "Bể thủy sinh cao"
    },
    {
        id: "thuysinh6",
        tendv: "Cá Phượng Hoàng Lam",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts6.png",
        tt1: "Cá phượng hoàng lam có màu xanh óng ánh, rất quý hiếm.",
        gia: "80000",
        category: "Cá Thủy Sinh",
        size: "5 - 6 cm",
        environment: "Bể thủy sinh"
    },
    {
        id: "thuysinh7",
        tendv: "Cá Sừng Tấm (Rummy Nose Tetra)",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts7.png",
        tt1: "Cá sừng tấm có mũi đỏ đặc trưng, bơi thành đàn rất đẹp.",
        gia: "20000",
        category: "Cá Thủy Sinh",
        size: "3 - 4 cm",
        environment: "Bể thủy sinh"
    },
    {
        id: "thuysinh8",
        tendv: "Cá Trâm (Boraras Urophthalmoides)",
        anh: "./ảnh/default-fish.jpg/cacanh/thuysinh/ts8.jpg",
        tt1: "Cá trâm mini, màu đỏ cam, kích thước nhỏ, nuôi bể nano.",
        gia: "10000",
        category: "Cá Thủy Sinh",
        size: "1 - 2 cm",
        environment: "Bể nano, thủy sinh"
    }
];

// 4. CÁ PHONG THỦY (8 sản phẩm)
const dsca4 = [
    {
        id: "phongthuy1",
        tendv: "Cá Rồng Huyết Long",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt1.jpg",
        tt1: "Cá rồng huyết long màu đỏ rực, tượng trưng cho tài lộc, may mắn.",
        gia: "25000000",
        category: "Cá Phong Thủy",
        size: "20 - 30 cm",
        environment: "Bể lớn, hồ kính"
    },
    {
        id: "phongthuy2",
        tendv: "Cá Rồng Kim Long Quá Bối",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt2.jpg",
        tt1: "Cá rồng kim long quá bối với vảy ánh kim lấp lánh, rất sang trọng.",
        gia: "30000000",
        category: "Cá Phong Thủy",
        size: "20 - 30 cm",
        environment: "Bể lớn, hồ kính"
    },
    {
        id: "phongthuy3",
        tendv: "Cá Koi Kohaku (Đỏ Trắng)",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt3.jpg",
        tt1: "Cá Koi Kohaku hai màu đỏ - trắng, biểu tượng của sự may mắn.",
        gia: "500000",
        category: "Cá Phong Thủy",
        size: "15 - 20 cm",
        environment: "Hồ xi măng, ao"
    },
    {
        id: "phongthuy4",
        tendv: "Cá Koi Showa (Tam Sắc)",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt4.jpg",
        tt1: "Cá Koi Showa ba màu đen - đỏ - trắng, rất mạnh mẽ.",
        gia: "600000",
        category: "Cá Phong Thủy",
        size: "15 - 20 cm",
        environment: "Hồ xi măng, ao"
    },
    {
        id: "phongthuy5",
        tendv: "Cá La Hán Kim Cương",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt5.png",
        tt1: "Cá La Hán với u đầu to, màu sắc rực rỡ, mang lại may mắn.",
        gia: "800000",
        category: "Cá Phong Thủy",
        size: "10 - 15 cm",
        environment: "Bể kính"
    },
    {
        id: "phongthuy6",
        tendv: "Cá Tài Phát (Cá Phát Tài)",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt6.jpg",
        tt1: "Cá tài phát có màu vàng - đen, ý nghĩa phát tài phát lộc.",
        gia: "300000",
        category: "Cá Phong Thủy",
        size: "8 - 10 cm",
        environment: "Bể kính, hồ thủy sinh"
    },
    {
        id: "phongthuy7",
        tendv: "Cá Thần Tài Hồng Két",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt7.jpg",
        tt1: "Cá hồng két dễ thương, màu đỏ cam, tượng trưng cho tiền tài.",
        gia: "200000",
        category: "Cá Phong Thủy",
        size: "8 - 10 cm",
        environment: "Bể kính"
    },
    {
        id: "phongthuy8",
        tendv: "Cá Hải Tượng Mini",
        anh: "./ảnh/default-fish.jpg/cacanh/phongthuy/pt8.jpg",
        tt1: "Cá hải tượng mini có vảy lớn, dáng khỏe, mang lại sức mạnh.",
        gia: "150000",
        category: "Cá Phong Thủy",
        size: "10 - 12 cm",
        environment: "Bể kính, hồ"
    }
];

// 4. COMBO ƯU ĐÃI (4 sản phẩm)
const dsca5 = [
    {
        id: "combo1",
        tendv: "Combo Tân Thủ Nhập Môn",
        anh: "./ảnh/default-fish.jpg/cacanh/combo/cb1.png",
        tt1: "Combo dành cho người mới: 5 cá neon xanh + 3 cá bảy màu + thức ăn + cây thủy sinh.",
        gia: "250000",
        category: "Combo",
        size: "Combo tiết kiệm",
        serves: "Bể 30-50L"
    },
    {
        id: "combo2",
        tendv: "Combo Thủy Sinh Bán Chuyên",
        anh: "./ảnh/default-fish.jpg/cacanh/combo/cb2.png",
        tt1: "Combo nâng cấp: 10 sọc ngựa cánh tiên + 5 tép cảnh + 2 ốc nerita + rêu/dương xỉ + phân nước.",
        gia: "490000",
        category: "Combo",
        size: "Combo tiêu chuẩn",
        serves: "Bể 50-80L"
    },
    {
        id: "combo3",
        tendv: "Combo Thủy Sinh Chuyên Nghiệp",
        anh: "./ảnh/default-fish.jpg/cacanh/combo/cb3.png",
        tt1: "Combo cao cấp: 1 cặp cá thần tiên + 15 cá phượng hoàng + ráy/tiêu thảo + sủi oxy + vi sinh Extrabio.",
        gia: "950000",
        category: "Combo",
        size: "Combo cao cấp",
        serves: "Bể 80-120L"
    },
    {
        id: "combo4",
        tendv: "Combo Dân Chơi Pro",
        anh: "./ảnh/default-fish.jpg/cacanh/combo/cb4.png",
        tt1: "Combo VIP: 20 cá neon vua + 2 cặp guppy thuần chủng + bình CO2 mini + lọc thùng + bộ đo 5 chỉ số nước.",
        gia: "2500000",
        category: "Combo",
        size: "Combo VIP",
        serves: "Bể trên 120L"
    }
];

function createProductCard(product, containerId, cardClass) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Không tìm thấy container: ${containerId}`);
            return;
        }
        
        if (!product || !product.id) {
            console.error('Dữ liệu sản phẩm không hợp lệ:', product);
            return;
        }
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
            </div>
            <div class="product-info">
                <div class="ten">${product.tendv || 'Sản phẩm không tên'}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                <div class="gia">${formattedPrice} VNĐ</div>
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Click vào card để xem chi tiết
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Click nút thêm vào giỏ hàng
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    const currentUser = localStorage.getItem('currentUser');
                    if (!currentUser) {
                        alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
                        setTimeout(() => {
                            window.location.href = 'login.html';
                        }, 1000);
                        return;
                    }
                    
                    if (window.cartManager && typeof window.cartManager.addToCart === 'function') {
                        const success = window.cartManager.addToCart(product, 1);
                        if (success) {
                            showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                            
                            this.style.backgroundColor = '#4CAF50';
                            this.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                            setTimeout(() => {
                                this.style.backgroundColor = '';
                                this.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                            }, 1000);
                        }
                    } else {
                        const cart = JSON.parse(localStorage.getItem('cart')) || [];
                        const existingItem = cart.find(item => item.id === product.id);
                        
                        if (existingItem) {
                            existingItem.quantity += 1;
                        } else {
                            cart.push({
                                id: product.id,
                                name: product.tendv,
                                image: product.anh || './ảnh/default-cake.jpg',
                                price: parseInt(product.gia || 0),
                                quantity: 1,
                                category: product.category || 'Không phân loại'
                            });
                        }
                        
                        localStorage.setItem('cart', JSON.stringify(cart));
                        updateCartCount();
                        showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                        
                        this.style.backgroundColor = '#4CAF50';
                        this.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                        setTimeout(() => {
                            this.style.backgroundColor = '';
                            this.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Lỗi khi thêm vào giỏ hàng:', error);
                    showNotification('Không thể thêm sản phẩm vào giỏ hàng', 'error');
                }
            });
        }
        
        // Click nút xem chi tiết
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        container.appendChild(card);
        
    } catch (error) {
        console.error(`Lỗi khi tạo card cho sản phẩm:`, error);
    }
}

function formatPriceFallback(price) {
    try {
        return parseInt(price || 0).toLocaleString('vi-VN');
    } catch (e) {
        return '0';
    }
}

function displayProductList(products, containerId, cardClass) {
    try {
        if (!products || !Array.isArray(products)) {
            console.error('Danh sách sản phẩm không hợp lệ:', products);
            return;
        }
        
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Không tìm thấy container: ${containerId}`);
            return;
        }
        
        container.innerHTML = '';
        
        // CHỈ HIỂN THỊ 9 SẢN PHẨM ĐẦU TIÊN
        const limitedProducts = products.slice(0, 9);
        
        limitedProducts.forEach(product => {
            createProductCard(product, containerId, cardClass);
        });
        
        console.log(`Đã hiển thị ${limitedProducts.length} sản phẩm trong ${containerId}`);
    } catch (error) {
        console.error('Lỗi khi hiển thị danh sách sản phẩm:', error);
    }
}

function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
        
        document.querySelectorAll('#cart-badge, .cart-badge').forEach(badge => {
            if (badge) {
                badge.textContent = totalItems > 99 ? '99+' : totalItems;
                badge.style.display = totalItems > 0 ? 'flex' : 'none';
            }
        });
        
        return totalItems;
    } catch (error) {
        console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
        return 0;
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

document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo hiển thị sản phẩm bánh kem...');
    
    try {
        // CHỈ HIỂN THỊ 9 SẢN PHẨM MỖI DANH MỤC
        displayProductList(dsca1.slice(0, 9), "danhsach1", "ten-card1");
        displayProductList(dsca2.slice(0, 9), "danhsach2", "ten-card2");
        displayProductList(dsca3.slice(0, 9), "danhsach3", "ten-card3");
        displayProductList(dsca4.slice(0, 9), "danhsach4", "ten-card4");
        displayProductList(dsca5.slice(0, 9), "danhsach5", "ten-card5");
        
        console.log('Đã hiển thị tất cả sản phẩm bánh kem (9 sản phẩm mỗi danh mục)');
    } catch (error) {
        console.error('Lỗi khi hiển thị sản phẩm:', error);
    }
});

window.displayProductList = displayProductList;
window.updateCartCount = updateCartCount;
window.showNotification = showNotification;

// ============================================
// HỆ THỐNG PHÂN TRANG VÀ LỌC SẢN PHẨM
// ============================================

// Cấu hình phân trang - CHỈ HIỂN THỊ 9 SẢN PHẨM MỖI TRANG
const PRODUCTS_PER_PAGE = 9;

// Hợp nhất tất cả sản phẩm
const ALL_PRODUCTS = [
    ...dsca1.map(p => ({...p, type: 'birthday'})),
    ...dsca2.map(p => ({...p, type: 'wedding'})),
    ...dsca3.map(p => ({...p, type: 'cupcake'})),
    ...dsca4.map(p => ({...p, type: 'mousse'})),
    ...dsca5.map(p => ({...p, type: 'combo'}))
];
// Biến toàn cục
let currentCategory = 'all';
let currentPage = 1;
let filteredProducts = [...ALL_PRODUCTS];

// Hàm lọc sản phẩm theo danh mục
function filterProducts(category) {
    currentCategory = category;
    currentPage = 1;
    
    // Cập nhật active state cho danh mục
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        if (item.onclick && item.onclick.toString().includes(`'${category}'`)) {
            item.classList.add('active');
        }
    });
    
    // Lọc sản phẩm
    if (category === 'all') {
        filteredProducts = [...ALL_PRODUCTS];
        document.getElementById('category-title').textContent = 'TẤT CẢ SẢN PHẨM';
        document.getElementById('category-description').textContent = 'Khám phá những chiếc bánh kem thơm ngon, tươi mới';
    } else if (category === 'birthday') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'birthday');
        document.getElementById('category-title').textContent = 'BÁNH KEM SINH NHẬT';
        document.getElementById('category-description').textContent = 'Những chiếc bánh sinh nhật đẹp mắt, ngọt ngào cho ngày đặc biệt';
    } else if (category === 'wedding') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'wedding');
        document.getElementById('category-title').textContent = 'BÁNH KEM CƯỚI';
        document.getElementById('category-description').textContent = 'Bánh cưới sang trọng, tinh tế cho ngày trọng đại';
    } else if (category === 'cupcake') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'cupcake');
        document.getElementById('category-title').textContent = 'BÁNH CUPCAKE';
        document.getElementById('category-description').textContent = 'Những chiếc cupcake xinh xắn, thơm ngon';
    } else if (category === 'mousse') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'mousse');
        document.getElementById('category-title').textContent = 'BÁNH MOUSSE & ĐẶC BIỆT';
        document.getElementById('category-description').textContent = 'Bánh mousse mềm mịn, thanh mát';
    } else if (category === 'combo') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'combo');
        document.getElementById('category-title').textContent = 'COMBO & SET QUÀ TẶNG';
        document.getElementById('category-description').textContent = 'Combo tiết kiệm, set quà tặng ý nghĩa';
    } else if (category === 'sale') {
        // Sản phẩm giảm giá (demo)
        filteredProducts = ALL_PRODUCTS.slice(0, 15).map(p => ({
            ...p,
            originalPrice: parseInt(p.gia) * 1.2
        }));
        document.getElementById('category-title').textContent = 'SẢN PHẨM KHUYẾN MÃI';
        document.getElementById('category-description').textContent = 'Những ưu đãi hấp dẫn đang chờ bạn';
    } else if (category === 'new') {
        // Sản phẩm mới (demo - lấy 10 sản phẩm đầu)
        filteredProducts = ALL_PRODUCTS.slice(0, 10);
        document.getElementById('category-title').textContent = 'SẢN PHẨM MỚI';
        document.getElementById('category-description').textContent = 'Những sản phẩm mới nhất của tiệm bánh';
    }
    
    // Hiển thị sản phẩm
    renderProducts();
    renderPagination();


const productsContainer = document.querySelector('.products-main-content');
    if (productsContainer) {
        productsContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Hàm hiển thị sản phẩm
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Tính toán sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Xóa nội dung cũ
    grid.innerHTML = '';
    
    // Hiển thị sản phẩm
    productsToShow.forEach(product => {
        const cardClass = getCardClassByType(product.type);
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        // Kiểm tra nếu có giá gốc (sale)
        let priceHTML = `<div class="gia">${formattedPrice} VNĐ</div>`;
        if (product.originalPrice) {
            const originalFormatted = window.formatPrice ? 
                window.formatPrice(product.originalPrice) : 
                formatPriceFallback(product.originalPrice);
            priceHTML = `
                <div class="gia sale-price">
                    <span class="original-price">${originalFormatted} VNĐ</span>
                    <span class="current-price">${formattedPrice} VNĐ</span>
                    <span class="discount-badge">-20%</span>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
                ${product.originalPrice ? '<div class="sale-tag">Sale</div>' : ''}
                ${currentCategory === 'new' ? '<div class="new-tag">Mới</div>' : ''}
            </div>
            <div class="product-info">
                <div class="ten">${product.tendv || 'Sản phẩm không tên'}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                ${priceHTML}
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Thêm sự kiện click
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Sự kiện cho nút thêm vào giỏ
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                handleAddToCart(product, this);
            });
        }
        
        // Sự kiện cho nút xem chi tiết
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        grid.appendChild(card);
    });
    
    // Nếu không có sản phẩm
    if (productsToShow.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-box-open" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Không tìm thấy sản phẩm</h3>
                <p style="color: #999;">Hiện không có sản phẩm nào trong danh mục này.</p>
            </div>
        `;
    }
}

// Hàm hiển thị phân trang
function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    
    // Nếu chỉ có 1 trang thì ẩn phân trang
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Nút Previous
    html += `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Các trang số
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>
                ${i}
            </button>
        `;
    }
    
    // Nút Next
    html += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    // Thông tin phân trang
    const startItem = (currentPage - 1) * PRODUCTS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length);
    
    html += `
        <div class="pagination-info">
            Hiển thị ${startItem}-${endItem} của ${filteredProducts.length} sản phẩm
        </div>
    `;
    
    pagination.innerHTML = html;
}

// Hàm chuyển trang
function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)) {
        return;
    }
    
    currentPage = page;
    renderProducts();
    renderPagination();
    
    // Cuộn lên đầu phần sản phẩm
    document.querySelector('.products-main-content').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Hàm lấy class card theo loại
function getCardClassByType(type) {
    switch(type) {
        case 'birthday': return 'ten-card1';
        case 'wedding': return 'ten-card2';
        case 'cupcake': return 'ten-card3';
        case 'mousse': return 'ten-card4';
        case 'combo': return 'ten-card5';
        default: return 'ten-card1';
    }
}

// Hàm xử lý thêm vào giỏ hàng
function handleAddToCart(product, button) {
    try {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
            return;
        }
        
        if (window.cartManager && typeof window.cartManager.addToCart === 'function') {
            const success = window.cartManager.addToCart(product, 1);
            if (success) {
                showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                
                button.style.backgroundColor = '#4CAF50';
                button.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                setTimeout(() => {
                    button.style.backgroundColor = '';
                    button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                }, 1000);
            }
        } else {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.tendv,
                    image: product.anh || './ảnh/default-cake.jpg',
                    price: parseInt(product.gia || 0),
                    quantity: 1,
                    category: product.category || 'Không phân loại',
                    type: product.type || 'unknown'
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
            
            button.style.backgroundColor = '#4CAF50';
            button.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
            setTimeout(() => {
                button.style.backgroundColor = '';
                button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
            }, 1000);
        }
    } catch (error) {
        console.error('Lỗi khi thêm vào giỏ hàng:', error);
        showNotification('Không thể thêm sản phẩm vào giỏ hàng', 'error');
    }
}

// Hàm khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo hệ thống phân trang và lọc sản phẩm...');
    
    // Kiểm tra xem đã có phần hiển thị sản phẩm mới chưa
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        // Ẩn các phần hiển thị sản phẩm cũ
        document.querySelectorAll('.ten-container1, .ten-container2, .ten-container3, .ten-container4, .ten-container5').forEach(container => {
            container.style.display = 'none';
        });
        
        document.querySelectorAll('#products, h2:nth-of-type(2), h2:nth-of-type(3), h2:nth-of-type(4), h2:nth-of-type(5)').forEach(el => {
            el.style.display = 'none';
        });
        
        // Khởi tạo hiển thị sản phẩm
        filterProducts('all');
    } else {
        // Nếu không có phần hiển thị mới, dùng hệ thống cũ
        console.log('Sử dụng hệ thống hiển thị sản phẩm cũ...');
        displayProductList(dsbanh1.slice(0, 9), "danhsach1", "ten-card1");
        displayProductList(dsbanh2.slice(0, 9), "danhsach2", "ten-card2");
        displayProductList(dsbanh3.slice(0, 9), "danhsach3", "ten-card3");
        displayProductList(dsbanh4.slice(0, 9), "danhsach4", "ten-card4");
        displayProductList(dsbanh5.slice(0, 9), "danhsach5", "ten-card5");
    }
});

// Thêm CSS cho giá sale
const style = document.createElement('style');
style.textContent = `
    .sale-price {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .sale-price .original-price {
        text-decoration: line-through;
        color: #999;
        font-size: 16px;
    }
    
    .sale-price .current-price {
        color: #e91e63;
        font-size: 22px;
        font-weight: bold;
    }
    
    .sale-price .discount-badge {
        background: #e91e63;
        color: white;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
        display: inline-block;
        margin-top: 5px;
    }
    
    .product-image {
        position: relative;
    }
    
    .sale-tag, .new-tag {
        position: absolute;
        top: 10px;
        left: 10px;
        background: #e91e63;
        color: white;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
        z-index: 2;
    }
    
    .new-tag {
        background: #4CAF50;
    }
`;
document.head.appendChild(style);

// Export functions to global scope
window.filterProducts = filterProducts;
window.changePage = changePage;
window.handleAddToCart = handleAddToCart;

// ============================================
// HỆ THỐNG TÌM KIẾM SẢN PHẨM
// ============================================

let isSearching = false;
let searchResults = [];
let searchQuery = '';

// Hàm tìm kiếm sản phẩm
function searchProducts(event) {
    if (event.key === 'Enter') {
        performSearch();
        return;
    }
    
    // Tự động tìm kiếm sau 500ms ngừng gõ
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
        performSearch();
    }, 500);
}

// Thực hiện tìm kiếm
function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    searchQuery = searchInput.value.trim().toLowerCase();
    
    if (searchQuery.length === 0) {
        // Nếu ô tìm kiếm trống, hiển thị lại danh mục hiện tại
        isSearching = false;
        document.getElementById('search-results-header').style.display = 'none';
        filterProducts(currentCategory);
        return;
    }
    
    isSearching = true;
    
    // Tìm kiếm trong tất cả sản phẩm
    searchResults = ALL_PRODUCTS.filter(product => {
        const searchFields = [
            product.tendv || '',
            product.category || '',
            product.tt1 || '',
            product.flavor || '',
            product.size || '',
            product.serves || '',
            ...(product.tags || [])
        ].join(' ').toLowerCase();
        
        return searchFields.includes(searchQuery);
    });
    
    // Hiển thị kết quả tìm kiếm
    displaySearchResults();
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults() {
    const resultsHeader = document.getElementById('search-results-header');
    const resultsCount = document.getElementById('search-results-count');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    
    if (searchResults.length === 0) {
        // Không tìm thấy kết quả
        const grid = document.getElementById('products-grid');
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Không tìm thấy sản phẩm nào phù hợp với từ khóa "<strong>${searchQuery}</strong>"</p>
                <button class="promo-btn" onclick="clearSearch()" style="max-width: 200px; margin: 0 auto;">
                    <i class="fas fa-times"></i> Xóa tìm kiếm
                </button>
            </div>
        `;
        
        resultsHeader.style.display = 'block';
        resultsCount.textContent = `Tìm thấy 0 sản phẩm cho "${searchQuery}"`;
        document.getElementById('pagination').innerHTML = '';
        
    } else {
        // Có kết quả tìm kiếm
        resultsHeader.style.display = 'block';
        resultsCount.textContent = `Tìm thấy ${searchResults.length} sản phẩm cho "${searchQuery}"`;
        
        categoryTitle.textContent = 'KẾT QUẢ TÌM KIẾM';
        categoryDescription.textContent = `Tìm kiếm: "${searchQuery}"`;
        
        // Hiển thị sản phẩm tìm được
        filteredProducts = searchResults;
        currentPage = 1;
        renderProducts();
        renderPagination();
    }
}

// Xóa tìm kiếm
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    isSearching = false;
    searchQuery = '';
    searchResults = [];
    
    document.getElementById('search-results-header').style.display = 'none';
    
    // Quay lại danh mục hiện tại
    filterProducts(currentCategory);
}

// Cập nhật hàm filterProducts để xử lý khi đang tìm kiếm
const originalFilterProducts = window.filterProducts;
window.filterProducts = function(category) {
    // Nếu đang tìm kiếm, xóa tìm kiếm trước
    if (isSearching) {
        clearSearch();
    }
    
    // Gọi hàm filterProducts gốc
    originalFilterProducts(category);
};

// Cập nhật hàm renderProducts để hỗ trợ highlight từ khóa
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Tính toán sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Xóa nội dung cũ
    grid.innerHTML = '';
    
    // Hiển thị sản phẩm
    productsToShow.forEach(product => {
        const cardClass = getCardClassByType(product.type);
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        // Highlight từ khóa tìm kiếm nếu đang tìm kiếm
        let productName = product.tendv || 'Sản phẩm không tên';
        if (isSearching && searchQuery) {
            productName = highlightSearchText(productName, searchQuery);
        }
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        // Kiểm tra nếu có giá gốc (sale)
        let priceHTML = `<div class="gia">${formattedPrice} VNĐ</div>`;
        if (product.originalPrice) {
            const originalFormatted = window.formatPrice ? 
                window.formatPrice(product.originalPrice) : 
                formatPriceFallback(product.originalPrice);
            priceHTML = `
                <div class="gia sale-price">
                    <span class="original-price">${originalFormatted} VNĐ</span>
                    <span class="current-price">${formattedPrice} VNĐ</span>
                    <span class="discount-badge">-20%</span>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
                ${product.originalPrice ? '<div class="sale-tag">Sale</div>' : ''}
                ${currentCategory === 'new' ? '<div class="new-tag">Mới</div>' : ''}
            </div>
            <div class="product-info">
                <div class="ten">${productName}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                ${priceHTML}
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Thêm sự kiện click (giữ nguyên từ code cũ)
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Sự kiện cho nút thêm vào giỏ (giữ nguyên)
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                handleAddToCart(product, this);
            });
        }
        
        // Sự kiện cho nút xem chi tiết (giữ nguyên)
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        grid.appendChild(card);
    });
    
    // Nếu không có sản phẩm
    if (productsToShow.length === 0 && !isSearching) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-box-open" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Không tìm thấy sản phẩm</h3>
                <p style="color: #999;">Hiện không có sản phẩm nào trong danh mục này.</p>
            </div>
        `;
    }
}

// Hàm highlight từ khóa tìm kiếm
function highlightSearchText(text, query) {
    if (!query || !text) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Thêm CSS cho highlight
const highlightStyle = document.createElement('style');
highlightStyle.textContent = `
    .search-highlight {
        background: linear-gradient(135deg, #ffeb3b, #ffc107);
        color: #333;
        padding: 2px 5px;
        border-radius: 4px;
        font-weight: bold;
    }
`;
document.head.appendChild(highlightStyle);

// Export hàm tìm kiếm ra global scope
window.searchProducts = searchProducts;
window.performSearch = performSearch;
window.clearSearch = clearSearch;





imgElement.onerror = function() {
    this.onerror = null; // Chặn vòng lặp: Chỉ chạy lỗi đúng 1 lần rồi thôi
    this.src = 'anh/default-cake.jpg'; 
};