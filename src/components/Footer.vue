<script setup>
const year = new Date().getFullYear();

const MAIN_URL = 'https://soorianmetal.com/';
const SHOP_URL = 'https://soorianmetal.com/shop/';
const ABOUT_URL = 'https://soorianmetal.com/about/';
const PHONE_1 = '۰۵۱۳۵۲۳۱۶۱۰';
const PHONE_LINK_1 = 'tel:+985135231610';

const quickLinks = [
  { name: 'خانه', href: '#home' },
  { name: 'محصولات', href: '#products' },
  { name: 'مزایا', href: '#features' },
  { name: 'نمونه کارها', href: '#gallery' },
  { name: 'تماس با ما', href: '#contact' }
];

const externalLinks = [
  { name: 'سایت اصلی', url: MAIN_URL },
  { name: 'فروشگاه آنلاین', url: SHOP_URL },
  { name: 'درباره ما', url: ABOUT_URL }
];

const socialShops = [
  { name: 'باسلام', url: 'https://basalam.com' },
  { name: 'ترب', url: 'https://torob.com' },
  { name: 'دیوار', url: 'https://divar.ir' },
  { name: 'شیپور', url: 'https://sheypoor.com' },
  { name: 'ایمالز', url: 'https://emalls.ir' }
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <!-- بالای فوتر -->
      <div class="footer-top">
        <!-- برند -->
        <div class="footer-brand">
          <h3 class="footer-logo">
            <span>SOORIAN</span>
            <small>METAL</small>
          </h3>
          <p>
            تولیدکننده پیشرو محصولات فلزی صنعتی و دکوراتیو در مشهد.
            با کیفیت، استحکام و طراحی مدرن.
          </p>
        </div>

        <!-- لینک‌های سریع -->
        <div class="footer-col">
          <h4>دسترسی سریع</h4>
          <ul>
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.href">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <!-- لینک‌های خارجی -->
        <div class="footer-col">
          <h4>سایت اصلی</h4>
          <ul>
            <li v-for="link in externalLinks" :key="link.name">
              <a :href="link.url" target="_blank">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <!-- فروشگاه‌های آنلاین -->
        <div class="footer-col">
          <h4>فروشگاه‌های ما</h4>
          <ul>
            <li v-for="shop in socialShops" :key="shop.name">
              <a :href="shop.url" target="_blank">{{ shop.name }}</a>
            </li>
          </ul>
        </div>

        <!-- تماس -->
        <div class="footer-col">
          <h4>تماس</h4>
          <a :href="PHONE_LINK_1" class="footer-phone">{{ PHONE_1 }}</a>
          <p class="footer-address">
            مشهد، شهرک فلاحی، فروشگاه سورین متال
          </p>
        </div>
      </div>

      <!-- پایین فوتر -->
      <div class="footer-bottom">
        <p>© {{ year }} تمامی حقوق برای <strong>سورین متال</strong> محفوظ است.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--black);
  color: var(--white);
  padding-top: 4rem;
  margin-top: 5rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  gap: 2.5rem;
  padding-bottom: 3rem;
}

/* برند */
.footer-brand h3 {
  margin-bottom: 1rem;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.footer-logo span {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--white);
}

.footer-logo small {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 6px;
  color: var(--green);
  margin-top: 4px;
}

.footer-brand p {
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.8;
  max-width: 300px;
}

/* ستون‌ها */
.footer-col h4 {
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
  color: var(--white);
  font-weight: 700;
}

.footer-col ul {
  list-style: none;
}

.footer-col ul li {
  margin-bottom: 0.6rem;
}

.footer-col ul a {
  color: #aaa;
  font-size: 0.9rem;
  transition: color 0.3s;
  text-decoration: none;
}

.footer-col ul a:hover {
  color: var(--green);
}

/* تماس */
.footer-phone {
  display: block;
  color: var(--green);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  direction: ltr;
  transition: color 0.3s;
}

.footer-phone:hover {
  color: var(--white);
}

.footer-address {
  color: #aaa;
  font-size: 0.85rem;
  line-height: 1.8;
}

/* پایین */
.footer-bottom {
  border-top: 1px solid #222;
  padding: 1.5rem 0;
  text-align: center;
  color: #888;
  font-size: 0.9rem;
}

.footer-bottom strong {
  color: var(--green);
}

/* ریسپانسیو */
@media (max-width: 968px) {
  .footer-top {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 576px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
}
</style>