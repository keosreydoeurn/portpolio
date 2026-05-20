// Flower data with image URLs
const flowers = [
    {
        id: 1,
        name: "Red Rose",
        scientificName: "Rosa rubiginosa",
        color: "red",
        description: "The red rose is a classic symbol of love and romance. With its velvety petals and sweet fragrance, it's one of the most popular flowers worldwide.",
        details: "Native to Asia, roses have been cultivated for over 5,000 years. There are over 300 species and thousands of cultivars. Red roses contain high levels of anthocyanins which give them their vibrant color.",
        symbolism: "Love, romance, passion, courage",
        imageUrl: "https://starrosesandplants.com/app/uploads/2024/04/RubyRed_Blooms_033.jpg"
    },
    {
        id: 2,
        name: "Sunflower",
        scientificName: "Helianthus annuus",
        color: "yellow",
        description: "Sunflowers are known for their tall stems and large, bright yellow flower heads that follow the sun across the sky.",
        details: "Native to North America, sunflowers can grow up to 12 feet tall. The flower head is actually made up of thousands of tiny flowers. Sunflower seeds are a valuable source of oil and food.",
        symbolism: "Adoration, loyalty, longevity, happiness",
        imageUrl: "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
    },
    {
        id: 3,
        name: "Cherry Blossom",
        scientificName: "Prunus serrulata",
        color: "pink",
        description: "Cherry blossoms are delicate pink flowers that bloom en masse, creating stunning displays in spring.",
        details: "Native to Japan, cherry blossoms have a very short blooming period (usually 1-2 weeks). The annual blooming is celebrated with hanami (flower viewing) festivals. Different varieties bloom at slightly different times.",
        symbolism: "Beauty, renewal, transience of life",
        imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4,
        name: "Lavender",
        scientificName: "Lavandula angustifolia",
        color: "purple",
        description: "Lavender is known for its fragrant purple flower spikes and silvery-green foliage. It's widely used in aromatherapy and cosmetics.",
        details: "Native to the Mediterranean region, lavender thrives in sunny, well-drained soils. The flowers are harvested for their essential oil, which has calming properties. Lavender is also a popular culinary herb.",
        symbolism: "Calmness, purity, silence, devotion",
        imageUrl: "https://veggiegardenseeds.com.au/cdn/shop/files/LavenderTrueFlowerSeeds.jpg?v=1713153929"
    },
    {
        id: 5,
        name: "White Lily",
        scientificName: "Lilium candidum",
        color: "white",
        description: "The white lily, also known as the Madonna lily, is a fragrant flower with trumpet-shaped blooms that symbolize purity and virtue.",
        details: "Native to the Balkans and Middle East, white lilies have been cultivated for over 3,000 years. They grow from bulbs and can reach up to 6 feet in height. The flowers are often used in religious ceremonies.",
        symbolism: "Purity, virtue, innocence, sympathy",
        imageUrl: "https://lh3.googleusercontent.com/proxy/oZFT_SpaTL0SINEtR6WbYXWVtJGW-rQ5j3PxtncOXXBZ4Tdkcfc0Lz5pEsfIIXkb-wGpgdmMsxwY5CyC0xQtA0oBqpOFNtsdR2a422fHhseRGmwyb2OW3fiINacymSbomIIlm-4"
    },
    {
        id: 6,
        name: "Tulip",
        scientificName: "Tulipa gesneriana",
        color: "red",
        description: "Tulips are brightly colored, cup-shaped flowers that herald the arrival of spring. They come in almost every color except true blue.",
        details: "Originally from Central Asia, tulips became immensely popular in the Netherlands during the 17th century, leading to 'Tulip Mania'. They grow from bulbs and each stem produces a single flower.",
        symbolism: "Perfect love, rebirth, charity",
        imageUrl: "https://images.unsplash.com/photo-1622388030569-b4d863856e8d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        name: "Daffodil",
        scientificName: "Narcissus pseudonarcissus",
        color: "yellow",
        description: "Daffodils are cheerful spring flowers with trumpet-shaped blooms surrounded by six petal-like tepals.",
        details: "Native to Europe and North Africa, daffodils are one of the first flowers to bloom in spring. All parts of the daffodil are poisonous if ingested. They are the national flower of Wales.",
        symbolism: "Rebirth, new beginnings, unrequited love",
        imageUrl: "https://www.poison.org/-/media/images/shared/articles/2015-mar/are-daffodils-poisonous.jpg?h=562&w=751&la=en&hash=689503741CA7D2F4EDB8BE40B5368421"
    },
    {
        id: 8,
        name: "Orchid",
        scientificName: "Orchidaceae",
        color: "pink",
        description: "Orchids are exotic, intricate flowers known for their unique shapes and vibrant colors. They are one of the largest families of flowering plants.",
        details: "There are over 28,000 species of orchids, found on every continent except Antarctica. Some orchid flowers mimic the appearance of insects to attract pollinators. They can live for many years with proper care.",
        symbolism: "Love, luxury, beauty, strength",
        imageUrl: "https://nurserynisarga.in/wp-content/uploads/2019/08/orchid-plant2NF.webp"
    },
    {
        id: 9,
        name: "Iris",
        scientificName: "Iris germanica",
        color: "purple",
        description: "Irises are elegant flowers with distinctive petal formations. The name 'iris' comes from the Greek word for rainbow, reflecting their variety of colors.",
        details: "Irises have been cultivated for centuries and appear in Egyptian hieroglyphics. The fleur-de-lis symbol is based on the iris. Some iris species are used in perfumery and medicine.",
        symbolism: "Wisdom, hope, trust, valor",
        imageUrl: "https://cdn.britannica.com/19/235419-050-9DF1D2AF/Purple-iris-flower-plant.jpg"
    },
    {
        id: 10,
        name: "Gardenia",
        scientificName: "Gardenia jasminoides",
        color: "white",
        description: "Gardenias are fragrant, creamy-white flowers with velvety petals. They are prized for their intoxicating scent and elegant appearance.",
        details: "Native to Asia, gardenias are evergreen shrubs that bloom in late spring to early summer. The flowers are often used in perfumes and teas. Gardenias prefer acidic soil and high humidity.",
        symbolism: "Purity, sweetness, secret love",
        imageUrl: "https://media.bunnings.com.au/api/public/content/9774e890ba5240f38737dcc45d55a808?v=2037aeb6&t=w1100dpr1"
    },
    {
        id: 11,
        name: "Poppy",
        scientificName: "Papaver rhoeas",
        color: "red",
        description: "Poppies are delicate, papery flowers with vibrant red petals and a dark center. They are often found growing in fields and along roadsides.",
        details: "Poppies have been used symbolically since ancient times. The red poppy is a symbol of remembrance for soldiers who have died in war. Some poppy species produce opium, from which morphine is derived.",
        symbolism: "Remembrance, consolation, imagination",
        imageUrl: "https://media.interflora.co.uk/i/interflora/poppy-corn-red-flower.jpg?$poi-square$&crop=poi&fmt=auto&qlt=default&fmt.jp2.qlt=60&bg=rgb%28255%2C+255%2C+255%29&h=804px&aspect=1%3A1"
    },
    {
        id: 12,
        name: "Dahlia",
        scientificName: "Dahlia pinnata",
        color: "pink",
        description: "Dahlias are showy flowers with intricate, multi-petaled blooms that come in a wide range of colors, sizes, and forms.",
        details: "Native to Mexico, dahlias were grown by the Aztecs for food, ceremony, and decorative purposes. The tubers are edible and taste similar to sweet potatoes. Dahlias are the national flower of Mexico.",
        symbolism: "Elegance, dignity, change, creativity",
        imageUrl: "https://gardenerspath.com/wp-content/uploads/2022/07/How-to-Propagate-Dahlias-Feature.jpg"
    }
];

// DOM elements
const galleryContainer = document.querySelector('.gallery-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const flowerModal = document.getElementById('flower-modal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.querySelector('.modal-body');
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const backToTopBtn = document.getElementById('back-to-top');

// Initialize the gallery
function initGallery() {
    galleryContainer.innerHTML = '';
    
    flowers.forEach(flower => {
        const flowerCard = document.createElement('div');
        flowerCard.className = `flower-card ${flower.color}`;
        flowerCard.setAttribute('data-color', flower.color);
        
        flowerCard.innerHTML = `
            <div class="flower-image">
                <img src="${flower.imageUrl}" alt="${flower.name}">
            </div>
            <div class="flower-info">
                <h3>${flower.name}</h3>
                <p>${flower.description}</p>
                <div class="flower-tags">
                    <span class="tag ${flower.color}">${flower.color.charAt(0).toUpperCase() + flower.color.slice(1)}</span>
                    <span class="tag scientific">${flower.scientificName}</span>
                </div>
            </div>
        `;
        
        flowerCard.addEventListener('click', () => openModal(flower));
        galleryContainer.appendChild(flowerCard);
    });
}

// Open flower modal
function openModal(flower) {
    modalBody.innerHTML = `
        <div class="modal-flower-image">
            <img src="${flower.imageUrl}" alt="${flower.name}">
        </div>
        <div class="modal-flower-info">
            <h2>${flower.name}</h2>
            <h3>${flower.scientificName}</h3>
            <p>${flower.details}</p>
            <div class="modal-flower-details">
                <div class="detail-item">
                    <h4>Color</h4>
                    <p>${flower.color.charAt(0).toUpperCase() + flower.color.slice(1)}</p>
                </div>
                <div class="detail-item">
                    <h4>Symbolism</h4>
                    <p>${flower.symbolism}</p>
                </div>
                <div class="detail-item">
                    <h4>Family</h4>
                    <p>${flower.scientificName.split(' ')[0]}</p>
                </div>
                <div class="detail-item">
                    <h4>ID</h4>
                    <p>#${flower.id.toString().padStart(3, '0')}</p>
                </div>
            </div>
        </div>
    `;
    
    flowerModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close flower modal
function closeModalFunc() {
    flowerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Filter flowers by color
function filterFlowers(color) {
    const flowerCards = document.querySelectorAll('.flower-card');
    
    flowerCards.forEach(card => {
        if (color === 'all' || card.getAttribute('data-color') === color) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Toggle mobile menu
function toggleMenu() {
    navLinks.classList.toggle('active');
}

// Handle contact form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For this demo, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. We'll respond to ${email} soon.`);
    
    // Reset form
    contactForm.reset();
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Check for saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = themeToggle.querySelector('i');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
    }
}

// Initialize event listeners
function initEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter flowers
            filterFlowers(button.getAttribute('data-filter'));
        });
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', closeModalFunc);
    
    // Close modal when clicking outside modal content
    flowerModal.addEventListener('click', (e) => {
        if (e.target === flowerModal) {
            closeModalFunc();
        }
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Back to top button
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
}

// Initialize the application
function init() {
    loadTheme();
    initGallery();
    initEventListeners();
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);