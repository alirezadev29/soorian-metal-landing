<script setup>
const PHONE_1 = '۰۵۱۳۵۲۳۱۶۱۰';
const PHONE_2 = '۰۹۰۲۳۶۵۲۲۱۲';
const PHONE_LINK_1 = 'tel:+985135231610';
const PHONE_LINK_2 = 'tel:+989023652212';
const SHOP_URL = 'https://soorianmetal.com/shop/';
const MAIN_URL = 'https://soorianmetal.com/';

const workHours = [
  { day: 'شنبه تا چهارشنبه', time: '۹:۰۰ تا ۱۷:۰۰' },
  { day: 'پنجشنبه', time: '۹:۰۰ تا ۱۳:۰۰' },
  { day: 'جمعه', time: 'تعطیل' }
];

const addresses = [
  {
    title: 'دفتر مرکزی',
    address: 'مشهد، شهرک فلاحی، فروشگاه سورین متال'
  },
  {
    title: 'کارگاه شرکت',
    address: 'مشهد، منطقه صنعتی چاهشک، باغبان ۷'
  }
];
</script>

<template>
  <section id="contact" class="section cta">
    <div class="container">
      <div class="cta-wrapper">
        <!-- بخش بالای CTA -->
        <div class="cta-top">
          <h2 class="cta-title">
            آماده همکاری با <span class="green-text">سورین متال</span> هستید؟
          </h2>
          <p class="cta-desc">
            برای ثبت سفارش، دریافت مشاوره یا بازدید از محصولات، با ما تماس بگیرید
          </p>

          <div class="cta-buttons">
            <a :href="SHOP_URL" target="_blank" class="btn btn-white">
              🛒 مشاهده فروشگاه
            </a>
            <a :href="PHONE_LINK_1" class="btn btn-outline-light">
              📞 تماس با ما
            </a>
          </div>
        </div>

        <!-- بخش اطلاعات تماس -->
        <div class="contact-info">
          <!-- تماس -->
          <div class="info-card">
            <div class="info-icon">📞</div>
            <h3>تماس با ما</h3>
            <a :href="PHONE_LINK_1" class="info-link">{{ PHONE_1 }}</a>
            <a :href="PHONE_LINK_2" class="info-link">{{ PHONE_2 }}</a>
          </div>

          <!-- آدرس‌ها -->
          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>آدرس‌های ما</h3>
            <div
              v-for="addr in addresses"
              :key="addr.title"
              class="address-item"
            >
              <strong>{{ addr.title }}:</strong>
              <p>{{ addr.address }}</p>
            </div>
          </div>

          <!-- ساعت کاری -->
          <div class="info-card">
            <div class="info-icon">🕐</div>
            <h3>ساعت کاری</h3>
            <div
              v-for="wh in workHours"
              :key="wh.day"
              class="hours-item"
            >
              <span>{{ wh.day }}:</span>
              <strong>{{ wh.time }}</strong>
            </div>
          </div>
        </div>

        <!-- فروشگاه‌های آنلاین -->
        <div class="online-shops">
          <p>همچنین در این پلتفرم‌ها فعال هستیم:</p>
          <div class="shop-tags">
            <span>باسلام</span>
            <span>ترب</span>
            <span>دیوار</span>
            <span>شیپور</span>
            <span>ایمالز</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: var(--green);
  color: var(--white);
  border-radius: 40px;
  margin: 0 2rem;
  padding: 5rem 2rem;
}

.cta-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

/* بخش بالای CTA */
.cta-top {
  text-align: center;
  margin-bottom: 4rem;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 1rem;
}

.cta-title .green-text {
  color: #ffd966;
}

.cta-desc {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-outline-light {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border: 2px solid var(--white);
  color: var(--white);
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-outline-light:hover {
  background: var(--white);
  color: var(--green);
  transform: translateY(-3px);
}

/* کارت‌های اطلاعات */
.contact-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--white);
}

.info-link {
  display: block;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  padding: 0.35rem 0;
  transition: color 0.3s;
  direction: ltr;
}

.info-link:hover {
  color: #ffd966;
}

.address-item,
.hours-item {
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

.address-item strong {
  display: block;
  color: var(--white);
  margin-bottom: 0.25rem;
}

.address-item p {
  font-size: 0.85rem;
  line-height: 1.7;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.hours-item:last-child {
  border-bottom: none;
}

/* فروشگاه‌های آنلاین */
.online-shops {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.online-shops p {
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.shop-tags {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.shop-tags span {
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.shop-tags span:hover {
  background: var(--white);
  color: var(--green);
  transform: translateY(-2px);
}

/* ریسپانسیو */
@media (max-width: 968px) {
  .cta {
    margin: 0 1rem;
    padding: 4rem 1.5rem;
    border-radius: 30px;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .cta {
    border-radius: 24px;
    padding: 3rem 1.25rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons .btn,
  .btn-outline-light {
    width: 100%;
    justify-content: center;
  }
}
</style>