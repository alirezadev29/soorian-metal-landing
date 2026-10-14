<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Products from './components/Products.vue';
import Features from './components/Features.vue';
import Gallery from './components/Gallery.vue';
import Testimonials from './components/Testimonials.vue';
import FAQ from './components/FAQ.vue';
import ContactForm from './components/ContactForm.vue';   // 👈 اضافه شد
import CTA from './components/CTA.vue';
import Footer from './components/Footer.vue';
import TelegramButton from './components/TelegramButton.vue';
import BackToTop from './components/BackToTop.vue';
import ScrollProgress from './components/ScrollProgress.vue';
</script>

<template>
  <ScrollProgress />
  <Header />
  <main>
    <Hero />
    <Products />
    <Features />
    <Gallery />
    <Testimonials />
    <FAQ />
    <ContactForm />   <!-- 👈 اضافه شد (قبل از CTA) -->
    <CTA />
  </main>
  <Footer />

  <TelegramButton />
  <BackToTop />
</template>