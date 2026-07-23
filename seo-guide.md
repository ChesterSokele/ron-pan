<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ron_Pan Tour & Safari</title>
  <!-- Font Awesome 6 (free) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <!-- Google Font (optional but adds dope vibe) -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Montserrat', sans-serif;
      background: #0b0b0b;
      color: #f5f0e8;
    }

    /* ----- GOLD / ORANGE & BLACK theme (African sunset) ----- */
    :root {
      --gold: #f5b342;
      --orange: #e67e22;
      --deep-gold: #d4a017;
      --black: #0e0e0e;
      --dark-card: #1a1a1a;
      --text-light: #f5f0e8;
      --shadow-gold: 0 8px 20px rgba(245, 179, 66, 0.25);
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 30px;
    }

    /* ----- HEADER with logo left corner ----- */
    header {
      background: rgba(14, 14, 14, 0.92);
      backdrop-filter: blur(4px);
      padding: 10px 0;
      position: sticky;
      top: 0;
      z-index: 99;
      border-bottom: 1px solid rgba(245, 179, 66, 0.2);
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      background: transparent;
      filter: drop-shadow(0 0 6px rgba(245, 179, 66, 0.5));
    }

    .logo-text {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: 1px;
      background: linear-gradient(135deg, var(--gold), var(--orange));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ----- NAVIGATION TABS ----- */
    nav ul {
      display: flex;
      list-style: none;
      gap: 28px;
      font-weight: 600;
      font-size: 1.05rem;
    }

    nav ul li a {
      color: #ddd;
      transition: 0.3s;
      padding: 6px 0;
      border-bottom: 2px solid transparent;
    }

    nav ul li a:hover {
      color: var(--gold);
      border-bottom-color: var(--gold);
    }

    /* ----- HERO SECTION with bg image (african sunset vibe) ----- */
    .hero {
      background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), 
                  url('images/logo.jpeg') center/cover no-repeat;
      min-height: 85vh;
      display: flex;
      align-items: center;
      text-align: left;
      padding: 40px 0;
      border-bottom: 3px solid var(--gold);
    }

    .hero-content {
      max-width: 700px;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(3px);
      padding: 40px 50px;
      border-radius: 20px;
      border-left: 6px solid var(--gold);
      box-shadow: var(--shadow-gold);
    }

    .hero-content h1 {
      font-size: 3.4rem;
      font-weight: 800;
      line-height: 1.2;
      color: #fff;
    }

    .hero-content h1 span {
      color: var(--gold);
      text-shadow: 0 0 15px rgba(245, 179, 66, 0.5);
    }

    .hero-content p {
      font-size: 1.2rem;
      margin: 20px 0 30px;
      color: #eee;
      line-height: 1.6;
    }

    .btn-gold {
      background: linear-gradient(145deg, var(--gold), var(--orange));
      border: none;
      padding: 14px 40px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1.2rem;
      color: #0b0b0b;
      cursor: pointer;
      transition: 0.3s;
      box-shadow: 0 4px 15px rgba(245, 179, 66, 0.4);
      display: inline-block;
    }

    .btn-gold:hover {
      transform: scale(1.04);
      box-shadow: 0 8px 25px rgba(245, 179, 66, 0.7);
    }

    /* ----- TOURS SECTION (cards animated) ----- */
    .tours-section {
      padding: 70px 0;
      background: #111;
    }

    .tours-section h2 {
      font-size: 2.8rem;
      text-align: center;
      margin-bottom: 20px;
      color: #fff;
    }

    .tours-section h2 i {
      color: var(--gold);
      margin-right: 12px;
    }

    .tour-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 35px;
      margin-top: 30px;
    }

    .tour-card {
      background: var(--dark-card);
      border-radius: 24px;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.7);
      border: 1px solid rgba(245, 179, 66, 0.1);
      animation: fadeUp 0.7s ease forwards;
      opacity: 0;
      transform: translateY(30px);
    }

    .tour-card:nth-child(1) { animation-delay: 0.1s; }
    .tour-card:nth-child(2) { animation-delay: 0.2s; }
    .tour-card:nth-child(3) { animation-delay: 0.3s; }
    .tour-card:nth-child(4) { animation-delay: 0.4s; }
    .tour-card:nth-child(5) { animation-delay: 0.5s; }
    .tour-card:nth-child(6) { animation-delay: 0.6s; }

    @keyframes fadeUp {
      to { opacity: 1; transform: translateY(0); }
    }

    .tour-card:hover {
      transform: translateY(-12px) scale(1.01);
      border-color: var(--gold);
      box-shadow: 0 20px 40px rgba(245, 179, 66, 0.25);
    }

    .tour-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-bottom: 2px solid var(--gold);
    }

    .tour-card-content {
      padding: 22px 20px 26px;
    }

    .tour-card-content h3 {
      font-size: 1.5rem;
      color: var(--gold);
      margin-bottom: 6px;
    }

    .tour-card-content p {
      color: #bbb;
      font-size: 0.95rem;
      margin: 10px 0 18px;
      line-height: 1.4;
    }

    .btn-readmore {
      background: transparent;
      border: 2px solid var(--gold);
      color: var(--gold);
      padding: 8px 22px;
      border-radius: 40px;
      font-weight: 700;
      font-size: 0.9rem;
      transition: 0.3s;
      cursor: pointer;
      display: inline-block;
    }

    .btn-readmore:hover {
      background: var(--gold);
      color: #0b0b0b;
      box-shadow: 0 0 20px rgba(245, 179, 66, 0.5);
    }

    /* ----- FLOATING WHATSAPP ICON ----- */
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 999;
      background: #25d366;
      color: #fff;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.6rem;
      box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);
      transition: 0.2s;
      animation: pulse 2s infinite;
    }

    .whatsapp-float:hover {
      transform: scale(1.1);
      background: #20b85f;
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
      70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }

    /* ----- SOCIAL ICONS AT BOTTOM (footer) ----- */
    footer {
      background: #0e0e0e;
      padding: 30px 0 20px;
      border-top: 2px solid var(--gold);
      text-align: center;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 30px;
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .social-icons a {
      color: #ccc;
      transition: 0.3s;
    }

    .social-icons a:hover {
      color: var(--gold);
      transform: translateY(-4px);
    }

    footer p {
      color: #777;
      font-size: 0.9rem;
    }

    /* ---- extra touches: favicon (logo) and responsiveness ---- */
    .favicon-demo {
      display: none;
    }

    @media (max-width: 850px) {
      .header-inner {
        flex-direction: column;
        align-items: start;
        gap: 12px;
      }
      nav ul {
        flex-wrap: wrap;
        gap: 12px 20px;
      }
      .hero-content {
        padding: 30px 25px;
      }
      .hero-content h1 {
        font-size: 2.4rem;
      }
    }

    @media (max-width: 500px) {
      .logo-text {
        font-size: 1.3rem;
      }
      .tour-grid {
        grid-template-columns: 1fr;
      }
      .whatsapp-float {
        width: 55px;
        height: 55px;
        font-size: 2.2rem;
        bottom: 20px;
        right: 20px;
      }
    }

    /* small extra: section for "Our Story" & "Get in Touch" (content from brief) */
    .story-section, .contact-section {
      padding: 60px 0;
      background: #141414;
      border-bottom: 1px solid #2a2a2a;
    }
    .story-section h2, .contact-section h2 {
      color: var(--gold);
      font-size: 2.4rem;
      margin-bottom: 20px;
    }
    .story-section p {
      max-width: 800px;
      line-height: 1.8;
      color: #ccc;
    }
    .contact-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      margin-top: 20px;
    }
    .contact-info {
      flex: 1;
      min-width: 240px;
    }
    .contact-info i {
      color: var(--gold);
      width: 30px;
    }
    .contact-form {
      flex: 2;
      min-width: 280px;
    }
    .contact-form input, .contact-form textarea {
      width: 100%;
      padding: 14px;
      margin: 8px 0;
      background: #222;
      border: 1px solid #444;
      color: #eee;
      border-radius: 12px;
    }
    .contact-form button {
      background: var(--gold);
      border: none;
      padding: 14px 30px;
      font-weight: 700;
      border-radius: 40px;
      color: #0b0b0b;
      cursor: pointer;
      transition: 0.3s;
    }
    .contact-form button:hover {
      background: var(--orange);
      transform: scale(1.02);
    }
    /* testmonial placeholder (from brief) */
    .testimonial {
      background: #1a1a1a;
      padding: 25px;
      border-radius: 20px;
      border-left: 6px solid var(--gold);
      margin: 30px 0;
    }
    .testimonial i {
      color: var(--gold);
    }
  </style>
</head>
<body>

<!-- ===== HEADER with logo left corner ===== -->
<header>
  <div class="container header-inner">
    <div class="logo-area">

      <img src="images/logo.jpeg" alt="Ron_Pan Logo" class="logo-img">
    </div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#tours">Tours</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </div>
</header>

<!-- ===== HERO SECTION ===== -->
<section id="home" class="hero">
  <div class="container hero-content">
    <h1>Discover <span>Namibian</span> Wonders</h1>
    <p><i class="fas fa-leaf" style="color: var(--gold); margin-right: 8px;"></i> Welcome to Ron_Pan Tour and Safari — Your gateway to discovering the heart and soul of Namibia.</p>
    <a href="#" class="btn-gold"><i class="fas fa-compass"></i> BOOK NOW</a>
  </div>
</section>

<!-- ===== TOURS SECTION (animated cards) ===== -->
<section id="tours" class="tours-section">
  <div class="container">
    <h2><i class="fas fa-binoculars"></i> Book Your Safari Adventure</h2>
    <p style="text-align: center; color: #aaa; max-width: 700px; margin: 0 auto 20px;">Embark on an unforgettable safari journey with Ron_Pan Tour and Safari, where breathtaking adventures await in Namibia's wilderness.</p>
    <div class="tour-grid">
      <!-- card 1: Katutura -->
      <div class="tour-card">
        <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&auto=format&fit=crop" alt="Katutura">
        <div class="tour-card-content">
          <h3>Katutura Township Cultural Tour</h3>
          <p>Travelers seeking authentic cultural connection</p>
          <a href="katutura-tour.html" class="btn-readmore">Read More</a>
        </div>
      </div>
      <!-- card 2: Sossusvlei -->
      <div class="tour-card">
        <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&auto=format&fit=crop" alt="Sossusvlei">
        <div class="tour-card-content">
          <h3>Sossusvlei & Namib Desert</h3>
          <p>Adventure through the Dunes</p>
          <a href="sossusvlei-tour.html" class="btn-readmore">Read More</a>
        </div>
      </div>
      <!-- card 3: Swakopmund -->
      <div class="tour-card">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop" alt="Swakopmund">
        <div class="tour-card-content">
          <h3>Swakopmund & Walvis Bay Coastal Tours</h3>
          <p>Explore the stunning coastlines of Swakopmund and Walvis Bay.</p>
          <a href="swakopmund-tour.html" class="btn-readmore">Read More</a>
        </div>
      </div>
      <!-- card 4: Skeleton Coast -->
      <div class="tour-card">
        <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&auto=format&fit=crop" alt="Skeleton Coast">
        <div class="tour-card-content">
          <h3>Skeleton Coast & Seal Colony Tour</h3>
          <p>Enjoy a personalized safari experience with a private tour</p>
          <a href="skeleton-coast-tour.html" class="btn-readmore">Read More</a>
        </div>
      </div>
      <!-- card 5: Etosha -->
      <div class="tour-card">
        <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&auto=format&fit=crop" alt="Etosha">
        <div class="tour-card-content">
          <h3>Etosha National Park Safari</h3>
          <p>Explore the Majestic Etosha Wildlife</p>
          <a href="#" class="btn-readmore">Read More</a>
        </div>
      </div>
      <!-- card 6: Airport Transfers -->
      <div class="tour-card">
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop" alt="Airport">
        <div class="tour-card-content">
          <h3>Airport Transfers & Pickups</h3>
          <p>Book your airport transfer online for convenience</p>
          <a href="#" class="btn-readmore">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== ABOUT / STORY SECTION ===== -->
<section id="about" class="story-section">
  <div class="container">
    <h2><i class="fas fa-map-signs" style="color: var(--gold);"></i> Our Story – From Footprints to Frontiers</h2>
    <p>Ron_Pan Tour and Safari began with a dream — one rooted not in big offices or tourist brochures, but in the footsteps of a young boy named Ronny Benjamin, growing up in the vibrant streets of Windhoek, Namibia. Surrounded by rich landscapes, wildlife, and cultural diversity, Ronny developed a deep love for his country and a desire to share it with the world.</p>
    <p style="margin-top: 15px;">Today, Ron_Pan Tour and Safari offers a wide range of adventures, from the wild plains of Etosha to the red sands of Sossusvlei, the ocean breeze of Swakopmund, and the hidden cultural gems of Namibia's towns and villages. Our Katutura Township Tours remain a heartfelt part of our journey.</p>
    <!-- testimonial placeholder -->
    <div class="testimonial">
      <i class="fas fa-quote-left" style="font-size: 2rem; opacity: 0.3;"></i>
      <p style="font-style: italic; color: #ddd;">Exploring Windhoek with Ron_Pan Tour and Safari was a dream come true! The breathtaking scenery and expert guides made it an adventure of a lifetime. Their attention to detail ensured a seamless experience from start to finish. Highly recommended for all nature enthusiasts</p>
      <p style="color: var(--gold); font-weight: 600; margin-top: 8px;">— Alexa Young</p>
    </div>
  </div>
</section>

<!-- ===== CONTACT SECTION ===== -->
<section id="contact" class="contact-section">
  <div class="container">
    <h2><i class="fas fa-paper-plane" style="color: var(--gold);"></i> Get in Touch</h2>
    <div class="contact-grid">
      <div class="contact-info">
        <p><i class="fas fa-map-pin"></i> Windhoek, Khomas Funky town next to Woermann hyper</p>
        <p><i class="fas fa-phone-alt"></i> +264 81 743 9270</p>
        <p><i class="fas fa-envelope"></i> ronpantoursandsafari@gmail.com</p>
        <div style="margin-top: 20px; display: flex; gap: 18px; font-size: 1.8rem;">
          <a href="#" style="color: #ccc;"><i class="fab fa-facebook"></i></a>
          <a href="#" style="color: #ccc;"><i class="fab fa-twitter"></i></a>
          <a href="#" style="color: #ccc;"><i class="fab fa-linkedin"></i></a>
          <a href="#" style="color: #ccc;"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="contact-form">
        <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
        <input type="email" placeholder="Email">
        <textarea rows="4" placeholder="Message"></textarea>
        <button><i class="fas fa-paper-plane"></i> Send</button>
      </div>
    </div>
  </div>
</section>

<!-- ===== FOOTER with social icons ===== -->
<footer>
  <div class="container">
    <div class="social-icons">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
    <p>&copy; 2025 Ron_Pan Tour & Safari — Namibian adventures.</p>
  </div>
</footer>

<!-- ===== FLOATING WHATSAPP ICON (link to number) ===== -->
<a href="https://wa.me/264817439270" target="_blank" class="whatsapp-float" aria-label="Chat on WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>

<!-- favicon as logo -->
<link rel="icon" href="images/logo.jpeg" type="image/jpeg">

</body>
</html>