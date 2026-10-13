<script setup>
const features = [
  {
    icon: '✓',
    title: 'کیفیت بالا',
    desc: 'استفاده از بهترین مواد اولیه و تجهیزات مدرن برای تولید محصولات باکیفیت.'
  },
  {
    icon: '💪',
    title: 'استحکام و دوام',
    desc: 'محصولات ما با بالاترین استانداردها ساخته می‌شوند و سال‌ها دوام می‌آورند.'
  },
  {
    icon: '✨',
    title: 'طراحی مدرن',
    desc: 'تیم طراحی ما محصولاتی با ظاهر مدرن و هماهنگ با هر دکوراسیونی می‌سازد.'
  },
  {
    icon: '🛡️',
    title: 'گارانتی معتبر',
    desc: 'تمام محصولات با گارانتی رسمی و پشتیبانی کامل ارائه می‌شوند.'
  },
  {
    icon: '🎨',
    title: 'سفارشی‌سازی',
    desc: 'امکان طراحی و ساخت محصولات فلزی طبق ابعاد و سلیقه شما.'
  },
  {
    icon: '🚚',
    title: 'ارسال سراسر کشور',
    desc: 'ارسال سریع و مطمئن محصولات به تمام نقاط ایران.'
  }
];
</script>

<template>
  <section id="features" class="section features">
    <div class="container">
      <h2 class="section-title">
        چرا <span class="green-text">سورین متال</span>؟
      </h2>
      <p class="section-subtitle">
        دلایلی که ما را به انتخاب اول مشتریان تبدیل کرده است
      </p>

      <div class="features-grid">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: var(--off-white);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background: var(--white);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--gray-light);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--green);
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  background: var(--green-light);
  color: var(--green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  background: var(--green);
  color: var(--white);
  transform: scale(1.1) rotate(-5deg);
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.75rem;
}

.feature-desc {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.8;
}

@media (max-width: 968px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }
}
</style>