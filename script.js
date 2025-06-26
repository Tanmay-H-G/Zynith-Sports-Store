const exchangeRate = 83; // 1 USD = 83 INR (approximate rate as of 2025)

const products = [
    { id: 1, name: "Trekking Shoes", category: "Trekking", price: 89.99, image: "images/trekking bootss.jpeg", description: "Designed for rugged trails, these trekking shoes offer superior grip and durability. Features: Waterproof material, anti-slip sole, cushioned insole. Brand: Zynith - Known for high-performance outdoor gear." },
    { id: 2, name: "Running Shoes", category: "Running", price: 79.99, image: "images/Running shoes.jpeg", description: "Lightweight running shoes for speed and comfort. Features: Breathable mesh, shock-absorbing sole, flexible design. Brand: Zynith - Trusted for innovative running gear." },
    { id: 3, name: "PowerLift Gym Gloves", category: "Gym", price: 29.99, image: "images/weightlifting gloves.jpeg", description: "Protect your hands during intense workouts. Features: Padded palm, adjustable wrist strap, sweat-resistant fabric. Brand: Zynith - Preferred by fitness enthusiasts." },
    { id: 4, name: "Backpacks", category: "Trekking", price: 59.99, image: "images/Backpacks.jpeg", description: "Spacious backpacks for your trekking adventures. Features: Multiple compartments, water-resistant, ergonomic straps. Brand: Zynith - Experts in outdoor equipment." },
    { id: 5, name: "SpeedX Sports Watch", category: "Running", price: 99.99, image: "images/Running smartwatches.jpeg", description: "Track your runs with precision. Features: Heart rate monitor, GPS tracking, water-resistant. Brand: Zynith - Leading in sports technology." },
    { id: 6, name: "FlexFit Yoga Mat", category: "Yoga", price: 39.99, image: "images/Yoga Mat.jpeg", description: "Enhance your yoga practice with this non-slip mat. Features: Extra thickness, eco-friendly material, textured surface. Brand: Zynith - Committed to wellness products." },
    { id: 7, name: "Riding Helmets", category: "Cycling", price: 49.99, image: "images/riding helmets.jpeg", description: "Stay safe on your rides with this sturdy helmet. Features: Lightweight, ventilated design, adjustable fit. Brand: Zynith - Focused on cyclist safety." },
    { id: 8, name: "HydraBottles", category: "Accessories", price: 19.99, image: "images/hydrabottles.jpeg", description: "Keep hydrated with this sleek bottle. Features: BPA-free, leak-proof, wide mouth design. Brand: Zynith - Quality hydration solutions." },
    { id: 9, name: "PeakPulse Trekking Poles", category: "Trekking", price: 34.99, image: "images/Trekking poles.jpg", description: "Support your treks with these reliable poles. Features: Adjustable height, shock-absorbing, lightweight. Brand: Zynith - Built for outdoor durability." },
    { id: 10, name: "SprintLite Socks", category: "Running", price: 14.99, image: "images/SprintLite Socks.avif", description: "Comfortable socks for long runs. Features: Moisture-wicking, cushioned sole, breathable fabric. Brand: Zynith - Designed for runners." },
    { id: 11, name: "Weights", category: "Gym", price: 49.99, image: "images/Weights.jpeg", description: "Build strength with these durable weights. Features: Non-slip grip, rust-resistant, hexagonal design. Brand: Zynith - Trusted gym equipment." },
    { id: 12, name: "ZenFlow Yoga Blocks", category: "Yoga", price: 24.99, image: "images/Yoga Block.jpeg", description: "Support your poses with these sturdy blocks. Features: Lightweight, non-slip surface, eco-friendly. Brand: Zynith - Yoga essentials." },
    { id: 13, name: "Reflectors", category: "Cycling", price: 29.99, image: "images/reflectors.jpeg", description: "Stay visible with these bright reflectors. Features: Easy to install, weather-resistant, long-lasting. Brand: Zynith - Enhancing cyclist safety." },
    { id: 14, name: "Resistance Bands", category: "Accessories", price: 19.99, image: "images/Resistance bands.jpeg", description: "Versatile bands for full-body workouts. Ascending: Multiple resistance levels, durable latex, portable. Brand: Zynith - Fitness on the go." },
].map(product => ({
    ...product,
    price: product.price * exchangeRate // Convert price to INR
}));

const subcategories = {
    1: [
        { id: "1-1", name: "Trail Shoes", price: 79.99 * exchangeRate, image: "images/Trail shoes.jpeg" },
        { id: "1-2", name: "Mountain Boots", price: 99.99 * exchangeRate, image: "images/mountain boots.jpeg" },
        { id: "1-3", name: "Hiking Sandals", price: 49.99 * exchangeRate, image: "images/hiking sandals.jpeg" },
    ],
    2: [
        { id: "2-1", name: "Short Distance", price: 69.99 * exchangeRate, image: "images/short distance.jpeg" },
        { id: "2-2", name: "Mid Distance", price: 79.99 * exchangeRate, image: "images/mid distance.jpeg" },
        { id: "2-3", name: "Long Distance", price: 89.99 * exchangeRate, image: "images/long distance.jpeg" },
    ],
    3: [
        { id: "3-1", name: "Weightlifting Gloves", price: 24.99 * exchangeRate, image: "images/Weightlifting glooves.jpeg" },
        { id: "3-2", name: "CrossFit Gloves", price: 29.99 * exchangeRate, image: "images/crossfit gloves.jpeg" },
        { id: "3-3", name: "General Fitness Gloves", price: 19.99 * exchangeRate, image: "images/general purpose gloves.jpeg" },
    ],
    4: [
        { id: "4-1", name: "Daypacks", price: 39.99 * exchangeRate, image: "images/daypacks.jpeg" },
        { id: "4-2", name: "Multi-Day Packs", price: 69.99 * exchangeRate, image: "images/multi-day-backpack.jpg" },
        { id: "4-3", name: "Hydration Packs", price: 49.99 * exchangeRate, image: "images/hydration packs.jpeg" },
    ],
    5: [
        { id: "5-1", name: "Fitness Trackers", price: 59.99 * exchangeRate, image: "images/fitness trackers.jpeg" },
        { id: "5-2", name: "Running Smartwatches", price: 89.99 * exchangeRate, image: "images/Running smartwatches.jpeg" },
        { id: "5-3", name: "GPS Watches", price: 119.99 * exchangeRate, image: "images/GPS watches.jpeg" },
    ],
    6: [
        { id: "6-1", name: "Standard Mats", price: 29.99 * exchangeRate, image: "images/Standard mats.jpeg" },
        { id: "6-2", name: "Eco-Friendly Mats", price: 39.99 * exchangeRate, image: "images/Ecofriendly mats.jpeg" },
        { id: "6-3", name: "Extra-Thick Mats", price: 49.99 * exchangeRate, image: "images/Extra thik mats.jpeg" },
    ],
    7: [
        { id: "7-1", name: "Road Helmets", price: 39.99 * exchangeRate, image: "images/riding helmets.jpeg" },
        { id: "7-2", name: "Mountain Helmets", price: 59.99 * exchangeRate, image: "images/Mountain helmets.jpeg" },
        { id: "7-3", name: "Kids Helmets", price: 29.99 * exchangeRate, image: "images/Kids helmets.jpeg" },
    ],
    8: [
        { id: "8-1", name: "Insulated Bottles", price: 24.99 * exchangeRate, image: "images/Collapsible bottle.jpeg" },
        { id: "8-2", name: "Filtered Bottles", price: 29.99 * exchangeRate, image: "images/Filtered bottle.jpeg" },
        { id: "8-3", name: "Collapsible Bottles", price: 14.99 * exchangeRate, image: "images/Collapsible bottle.jpeg" },
    ],
    9: [
        { id: "9-1", name: "Carbon Poles", price: 39.99 * exchangeRate, image: "images/Carbon poles.jpeg" },
        { id: "9-2", name: "Aluminum Poles", price: 29.99 * exchangeRate, image: "images/Aluminium poles.jpeg" },
        { id: "9-3", name: "Adjustable Poles", price: 34.99 * exchangeRate, image: "images/Adjustable poles.jpeg" },
    ],
    10: [
        { id: "10-1", name: "Ankle Socks", price: 9.99 * exchangeRate, image: "images/ankle socks.jpeg" },
        { id: "10-2", name: "Crew Socks", price: 12.99 * exchangeRate, image: "images/Crew socks.jpeg" },
        { id: "10-3", name: "Compression Socks", price: 19.99 * exchangeRate, image: "images/Compression socks.jpeg" },
    ],
    11: [
        { id: "11-1", name: "5kg Dumbbells", price: 39.99 * exchangeRate, image: "images/5Kg dumbells.jpeg" },
        { id: "11-2", name: "10kg Dumbbells", price: 59.99 * exchangeRate, image: "images/10kg dumbells.jpeg" },
        { id: "11-3", name: "Adjustable Dumbbells", price: 79.99 * exchangeRate, image: "images/adjustable dumbells.jpeg" },
    ],
    12: [
        { id: "12-1", name: "Cork Blocks", price: 19.99 * exchangeRate, image: "images/Cork blocks.jpeg" },
        { id: "12-2", name: "Foam Blocks", price: 14.99 * exchangeRate, image: "images/Foam Block.jpeg" },
       
    ],
    13: [
        { id: "13-1", name: "Front Lights", price: 19.99 * exchangeRate, image: "images/front reflectors.jpeg" },
        { id: "13-2", name: "Rear Lights", price: 19.99 * exchangeRate, image: "images/Rear reflectors.jpeg" },
       
    ],
    14: [
        { id: "14-1", name: "Light Resistance", price: 14.99 * exchangeRate, image: "images/Light resistance.jpeg" },
        { id: "14-2", name: "Medium Resistance", price: 19.99 * exchangeRate, image: "images/Medium resistance.jpeg" },
        { id: "14-3", name: "Wrist Bands", price: 24.99 * exchangeRate, image: "images/Wrist bands.jpeg" },
    ],
};

let cart = [];
let user = null;

try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    user = JSON.parse(localStorage.getItem("user")) || null;
} catch (e) {
    console.error("Error accessing localStorage:", e);
    cart = [];
    user = null;
}

window.onload = () => {
    console.log("Window loaded, initializing...");
    const savedTheme = localStorage.getItem("theme") || "dark-mode";
    document.body.className = savedTheme;
    document.getElementById("theme-toggle").textContent = savedTheme === "dark-mode" ? "Light Mode" : "Dark Mode";

    if (user) {
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("signup-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
        if (user.role === "admin") {
            document.getElementById("admin-btn").style.display = "block";
        }
    }
    renderFeaturedProducts();
    renderProducts();
    renderCart();
    renderAdminProducts();
    showSection('home');

    window.addEventListener('scroll', () => {
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    toggleAuthMode('login');
};

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggleBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light-mode");
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeToggleBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark-mode");
    }
}

function showSection(sectionId) {
    console.log(`Showing section: ${sectionId}`);
    const spinner = document.getElementById('loading-spinner');
    if (!spinner) {
        console.error("Spinner element not found!");
        return;
    }
    spinner.style.display = 'block';

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove('active');
        section.querySelectorAll('.visible').forEach(el => el.classList.remove('visible'));
    });

    const section = document.getElementById(sectionId);
    if (!section) {
        console.error(`Section with ID ${sectionId} not found!`);
        spinner.style.display = 'none';
        return;
    }
    section.classList.add('active');

    setTimeout(() => {
        const elements = section.querySelectorAll('.hero, .section-title, .category-title, .filters, .product-card, .product-description, .cart-item, .auth-hero, .contact-info');
        console.log(`Applying visibility to ${elements.length} elements in section ${sectionId}`);
        elements.forEach(el => {
            el.classList.add('visible');
            console.log(`Added 'visible' class to element: ${el.className}`);
        });
        spinner.style.display = 'none';
    }, 300);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleAuthMode(mode) {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const btn = document.getElementById("btn");
    const logBtn = document.getElementById("log");
    const regBtn = document.getElementById("reg");
    const after = document.getElementById("after");

    if (mode === "register") {
        loginForm.style.left = "-500px";
        registerForm.style.left = "0px";
        btn.style.left = "110px";
        logBtn.style.color = document.body.classList.contains("dark-mode") ? "#ffffff" : "#2d2d2d";
        regBtn.style.color = document.body.classList.contains("dark-mode") ? "#2d2d2d" : "#333333";
        after.style.left = "0";
        after.style.top = "0";
    } else {
        loginForm.style.left = "0px";
        registerForm.style.left = "500px";
        btn.style.left = "0px";
        regBtn.style.color = document.body.classList.contains("dark-mode") ? "#ffffff" : "#333333";
        logBtn.style.color = document.body.classList.contains("dark-mode") ? "#2d2d2d" : "#333333";
        after.style.left = "50%";
        after.style.top = "0";
    }
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const messageEl = document.getElementById("login-message");
    let users = [];
    try {
        users = JSON.parse(localStorage.getItem("users")) || [
            { email: "user@zynithsports.com", password: "User123", role: "user" },
            { email: "admin@zynithsports.com", password: "Admin123", role: "admin" },
        ];
    } catch (e) {
        console.error("Error accessing localStorage:", e);
        messageEl.textContent = "Error accessing storage. Please try again.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
        return;
    }
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
        user = foundUser;
        try {
            localStorage.setItem("user", JSON.stringify(user));
        } catch (e) {
            console.error("Error saving to localStorage:", e);
            messageEl.textContent = "Error saving data. Please try again.";
            messageEl.classList.remove("success");
            messageEl.classList.add("error");
            return;
        }
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("signup-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
        if (user.role === "admin") {
            document.getElementById("admin-btn").style.display = "block";
        }
        messageEl.textContent = "Login successful!";
        messageEl.classList.remove("error");
        messageEl.classList.add("success");
        setTimeout(() => showSection("home"), 1000);
    } else {
        messageEl.textContent = "Invalid credentials!";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
    }
}

function signup(event) {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const messageEl = document.getElementById("signup-message");
    let users = [];
    try {
        users = JSON.parse(localStorage.getItem("users")) || [];
    } catch (e) {
        console.error("Error accessing localStorage:", e);
        messageEl.textContent = "Error accessing storage. Please try again.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
        return;
    }
    if (users.find(u => u.email === email)) {
        messageEl.textContent = "Email already exists!";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
        return;
    }
    const newUser = { email, password, role: "user" };
    users.push(newUser);
    try {
        localStorage.setItem("users", JSON.stringify(users));
    } catch (e) {
        console.error("Error saving to localStorage:", e);
        messageEl.textContent = "Error saving data. Please try again.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
        return;
    }
    user = newUser;
    try {
        localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
        console.error("Error saving to localStorage:", e);
        messageEl.textContent = "Error saving data. Please try again.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
        return;
    }
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("signup-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "block";
    messageEl.textContent = "Signup successful!";
    messageEl.classList.remove("error");
    messageEl.classList.add("success");
    setTimeout(() => showSection("home"), 1000);
}

function logout() {
    user = null;
    try {
        localStorage.removeItem("user");
    } catch (e) {
        console.error("Error accessing localStorage:", e);
    }
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("signup-btn").style.display = "block";
    document.getElementById("logout-btn").style.display = "none";
    document.getElementById("admin-btn").style.display = "none";
    showSection("home");
}

function renderFeaturedProducts() {
    console.log("Starting renderFeaturedProducts...");
    const container = document.getElementById("category-sections");
    if (!container) {
        console.error("Category sections container not found!");
        return;
    }

    let rows = [];
    for (let i = 0; i < products.length; i += 3) {
        const rowProducts = products.slice(i, i + 3);
        rows.push(rowProducts);
    }

    container.innerHTML = `
        <div class="category-section">
            <h4 class="category-title">Featured Products</h4>
            ${rows.map(row => `
                <div class="product-grid">
                    ${row.map(product => {
        console.log(`Rendering product: ${product.name} with image: ${product.image}`);
        return `
                            <div class="product-container">
                                <div class="product-card" style="background-image: url('${product.image}');">
                                    <h4>${product.name}</h4>
                                    <button onclick="showSubcategories(${product.id}, '${product.name}')" class="btn-primary">View Options</button>
                                </div>
                                <div class="product-description">
                                    <p>${product.description}</p>
                                </div>
                            </div>
                        `;
    }).join("")}
                </div>
            `).join("")}
        </div>
    `;

    console.log("renderFeaturedProducts completed.");
    const cards = container.querySelectorAll('.product-card');
    console.log(`Found ${cards.length} product cards after rendering.`);
    cards.forEach(card => {
        card.classList.add('visible');
        console.log(`Ensured visibility for card: ${card.querySelector('h4')?.textContent}`);
    });
    const descriptions = container.querySelectorAll('.product-description');
    descriptions.forEach(desc => desc.classList.add('visible'));
}

function renderProducts() {
    console.log("Starting renderProducts...");
    const container = document.getElementById("product-grid");
    if (!container) {
        console.error("Product grid container not found!");
        return;
    }
    container.innerHTML = products.map(product => `
        <div class="product-card" style="background-image: url('${product.image}');">
            <h4>${product.name}</h4>
            <p>₹${product.price.toFixed(2)}</p>
            <button onclick="showSubcategories(${product.id}, '${product.name}')" class="btn-primary">View Options</button>
        </div>
    `).join("");
    console.log("renderProducts completed.");
    container.querySelectorAll('.product-card').forEach(el => el.classList.add('visible'));
}

function showSubcategories(productId, productName) {
    console.log(`Showing subcategories for product ID: ${productId}`);
    const subs = subcategories[productId] || [];
    const container = document.getElementById("subcategory-grid");
    document.getElementById("subcategory-title").textContent = `${productName} Options`;
    container.innerHTML = subs.map(sub => `
        <div class="product-card" style="background-image: url('${sub.image}');">
            <h4>${sub.name}</h4>
            <p>₹${sub.price.toFixed(2)}</p>
            <button onclick="addToCart('${sub.id}', '${sub.name}', ${sub.price})" class="btn-primary">Add to Cart</button>
        </div>
    `).join("");
    showSection("subcategories");
}

function filterProducts() {
    console.log("Filtering products...");
    const category = document.getElementById("category-filter").value;
    const search = document.getElementById("search-input").value.toLowerCase();
    const filtered = products.filter(p =>
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(search)
    );
    const container = document.getElementById("product-grid");
    container.innerHTML = filtered.map(product => `
        <div class="product-card" style="background-image: url('${product.image}');">
            <h4>${product.name}</h4>
            <p>₹${product.price.toFixed(2)}</p>
            <button onclick="showSubcategories(${product.id}, '${product.name}')" class="btn-primary">View Options</button>
        </div>
    `).join("");
    container.querySelectorAll('.product-card').forEach(el => el.classList.add('visible'));
    console.log(`Filtered ${filtered.length} products.`);
}

function addToCart(id, name, price) {
    console.log(`Adding to cart: ${name} (ID: ${id})`);
    if (!user) {
        alert("Please login to add items to cart!");
        showSection("auth");
        return;
    }
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
        console.error("Error saving to localStorage:", e);
    }
    renderCart();
    const cartCount = document.getElementById("cart-count");
    cartCount.classList.add("bounce");
}

function renderCart() {
    console.log("Rendering cart...");
    const container = document.getElementById("cart-items");
    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        container.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <p>₹${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `).join("");
        container.querySelectorAll('.cart-item').forEach(el => el.classList.add('visible'));
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("total-amount").textContent = total.toFixed(2);
    document.getElementById("cart-count").textContent = cart.length;
    console.log("Cart rendered.");
}

function removeFromCart(index) {
    console.log(`Removing item at index ${index} from cart.`);
    cart.splice(index, 1);
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
        console.error("Error saving to localStorage:", e);
    }
    renderCart();
}

function checkout() {
    console.log("Processing checkout...");
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    cart = [];
    try {
        localStorage.removeItem("cart");
    } catch (e) {
        console.error("Error accessing localStorage:", e);
    }
    alert("Checkout successful! Thank you for your purchase.");
    renderCart();
    showSection("home");
}

function renderAdminProducts() {
    console.log("Rendering admin products...");
    const container = document.getElementById("admin-products");
    container.innerHTML = products.map(product => `
        <div class="product-card" style="background-image: url('${product.image}');">
            <h4>${product.name}</h4>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price.toFixed(2)}</p>
        </div>
    `).join("");
    container.querySelectorAll('.product-card').forEach(el => el.classList.add('visible'));
    console.log("Admin products rendered.");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}