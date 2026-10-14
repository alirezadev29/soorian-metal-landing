<script setup>
import { ref, computed } from 'vue';

// ⚠️ این را با ID خودت عوض کن (توضیح در ادامه)
const FORMSPREE_URL = 'https://formspree.io/f/xjygalqe';

// داده‌های فرم
const form = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
});

// خطاهای هر فیلد
const errors = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
});

// فیلدهایی که کاربر لمس کرده (برای نمایش خطا بعد از لمس)
const touched = ref({
  name: false,
  phone: false,
  email: false,
  message: false
});

// وضعیت ارسال
const status = ref('idle'); // 'idle' | 'loading' | 'success' | 'error'

// لیست موضوعات
const subjects = [
  'سفارش محصول',
  'مشاوره و استعلام قیمت',
  'سفارش خاص و سفارشی',
  'پیگیری سفارش',
  'همکاری تجاری',
  'سایر موارد'
];

// ===================
// توابع اعتبارسنجی
// ===================

// اعتبارسنجی نام
function validateName() {
  const value = form.value.name.trim();
  if (!value) return 'لطفاً نام خود را وارد کنید';
  if (value.length < 3) return 'نام باید حداقل ۳ حرف باشد';
  if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(value)) {
    return 'نام فقط باید شامل حروف فارسی یا انگلیسی باشد';
  }
  return '';
}

// اعتبارسنجی شماره تماس
function validatePhone() {
  const value = form.value.phone.trim();
  if (!value) return 'لطفاً شماره تماس خود را وارد کنید';
  // پشتیبانی از فرمت‌های: 09123456789، 9123456789، +989123456789
  const cleaned = value.replace(/[\s\-()]/g, '');
  const phoneRegex = /^(\+98|0098|98|0)?9[0-9]{9}$/;
  if (!phoneRegex.test(cleaned)) {
    return 'شماره موبایل معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹)';
  }
  return '';
}

// اعتبارسنجی ایمیل (اختیاری)
function validateEmail() {
  const value = form.value.email.trim();
  if (!value) return ''; // اختیاری
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return 'ایمیل معتبر نیست';
  }
  return '';
}

// اعتبارسنجی پیام
function validateMessage() {
  const value = form.value.message.trim();
  if (!value) return 'لطفاً پیام خود را بنویسید';
  if (value.length < 10) return 'پیام باید حداقل ۱۰ حرف باشد';
  if (value.length > 1000) return 'پیام نباید بیشتر از ۱۰۰۰ حرف باشد';
  return '';
}

// اعتبارسنجی همه فیلدها
function validateAll() {
  errors.value.name = validateName();
  errors.value.phone = validatePhone();
  errors.value.email = validateEmail();
  errors.value.message = validateMessage();

  return !errors.value.name && !errors.value.phone && !errors.value.email && !errors.value.message;
}

// ===================
// Computed
// ===================

// آیا فرم آماده ارسال است؟
const isValid = computed(() => {
  return (
    form.value.name.trim().length >= 3 &&
    form.value.phone.trim().length >= 10 &&
    form.value.message.trim().length >= 10
  );
});

// ===================
// Event Handlers
// ===================

// وقتی فیلد از حالت focus خارج شد
function onBlur(field) {
  touched.value[field] = true;
  // اعتبارسنجی همان فیلد
  const validators = {
    name: validateName,
    phone: validatePhone,
    email: validateEmail,
    message: validateMessage
  };
  if (validators[field]) {
    errors.value[field] = validators[field]();
  }
}

// وقتی کاربر تایپ می‌کند (اگر قبلاً لمس شده، خطا را پاک کن)
function onInput(field) {
  if (touched.value[field]) {
    const validators = {
      name: validateName,
      phone: validatePhone,
      email: validateEmail,
      message: validateMessage
    };
    if (validators[field]) {
      errors.value[field] = validators[field]();
    }
  }
}

// ارسال فرم
async function handleSubmit() {
  // همه فیلدها را لمس شده علامت بزن
  touched.value = { name: true, phone: true, email: true, message: true };

  // اعتبارسنجی
  if (!validateAll()) {
    // اسکرول به اولین خطا
    const firstError = document.querySelector('.form-field.has-error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  status.value = 'loading';

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        subject: form.value.subject || 'بدون موضوع',
        message: form.value.message
      })
    });

    if (response.ok) {
      status.value = 'success';
      // ریست فرم
      form.value = { name: '', phone: '', email: '', subject: '', message: '' };
      touched.value = { name: false, phone: false, email: false, message: false };
      errors.value = { name: '', phone: '', email: '', message: '' };

      // بعد از ۵ ثانیه، پیام موفقیت را پاک کن
      setTimeout(() => {
        status.value = 'idle';
      }, 5000);
    } else {
      throw new Error('خطا در ارسال');
    }
  } catch (error) {
    console.error('Form error:', error);
    status.value = 'error';
    setTimeout(() => {
      status.value = 'idle';
    }, 5000);
  }
}
</script>

<template>
  <section id="contact" class="section contact-form-section">
    <div class="container">
      <h2 class="section-title">
        با ما <span class="green-text">در تماس باشید</span>
      </h2>
      <p class="section-subtitle">
        سوال، پیشنهاد یا درخواست مشاوره دارید؟ پیام بگذارید، در اسرع وقت پاسخ می‌دهیم.
      </p>

      <div class="form-wrapper">
        <!-- فرم -->
        <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
          <!-- نام -->
          <div :class="['form-field', { 'has-error': touched.name && errors.name }]">
            <label for="name">
              نام و نام خانوادگی
              <span class="required">*</span>
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="مثلاً: علی رضایی"
              autocomplete="name"
              :aria-invalid="!!errors.name"
              :aria-describedby="errors.name ? 'name-error' : undefined"
              @blur="onBlur('name')"
              @input="onInput('name')"
            />
            <Transition name="error-fade">
              <p v-if="touched.name && errors.name" id="name-error" class="error-message">
                <span class="error-icon">⚠</span>
                {{ errors.name }}
              </p>
            </Transition>
          </div>

          <!-- شماره تماس -->
          <div :class="['form-field', { 'has-error': touched.phone && errors.phone }]">
            <label for="phone">
              شماره موبایل
              <span class="required">*</span>
            </label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              autocomplete="tel"
              dir="ltr"
              :aria-invalid="!!errors.phone"
              :aria-describedby="errors.phone ? 'phone-error' : undefined"
              @blur="onBlur('phone')"
              @input="onInput('phone')"
            />
            <Transition name="error-fade">
              <p v-if="touched.phone && errors.phone" id="phone-error" class="error-message">
                <span class="error-icon">⚠</span>
                {{ errors.phone }}
              </p>
            </Transition>
          </div>

          <!-- ایمیل (اختیاری) -->
          <div :class="['form-field', { 'has-error': touched.email && errors.email }]">
            <label for="email">
              ایمیل
              <span class="optional">(اختیاری)</span>
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="example@email.com"
              autocomplete="email"
              dir="ltr"
              :aria-invalid="!!errors.email"
              :aria-describedby="errors.email ? 'email-error' : undefined"
              @blur="onBlur('email')"
              @input="onInput('email')"
            />
            <Transition name="error-fade">
              <p v-if="touched.email && errors.email" id="email-error" class="error-message">
                <span class="error-icon">⚠</span>
                {{ errors.email }}
              </p>
            </Transition>
          </div>

          <!-- موضوع -->
          <div class="form-field">
            <label for="subject">موضوع</label>
            <select id="subject" v-model="form.subject">
              <option value="">انتخاب کنید...</option>
              <option v-for="s in subjects" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>

          <!-- پیام -->
          <div :class="['form-field', { 'has-error': touched.message && errors.message }]">
            <label for="message">
              پیام شما
              <span class="required">*</span>
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="پیام خود را اینجا بنویسید..."
              :aria-invalid="!!errors.message"
              :aria-describedby="errors.message ? 'message-error' : undefined"
              @blur="onBlur('message')"
              @input="onInput('message')"
            ></textarea>
            <div class="field-footer">
              <Transition name="error-fade">
                <p v-if="touched.message && errors.message" id="message-error" class="error-message">
                  <span class="error-icon">⚠</span>
                  {{ errors.message }}
                </p>
              </Transition>
              <span class="char-count" :class="{ 'near-limit': form.message.length > 900 }">
                {{ form.message.length }} / ۱۰۰۰
              </span>
            </div>
          </div>

          <!-- دکمه ارسال -->
          <button
            type="submit"
            class="submit-btn"
            :disabled="status === 'loading'"
          >
            <template v-if="status === 'loading'">
              <span class="spinner"></span>
              در حال ارسال...
            </template>
            <template v-else>
              ارسال پیام
              <span class="arrow">←</span>
            </template>
          </button>
        </form>

        <!-- پیام موفقیت -->
        <Transition name="slide-up">
          <div v-if="status === 'success'" class="status-message success">
            <div class="status-icon">✓</div>
            <h3>پیام شما با موفقیت ارسال شد</h3>
            <p>ممنون از تماس شما. تیم سورین متال در اسرع وقت با شما تماس خواهد گرفت.</p>
          </div>
        </Transition>

        <!-- پیام خطا -->
        <Transition name="slide-up">
          <div v-if="status === 'error'" class="status-message error">
            <div class="status-icon">✕</div>
            <h3>خطا در ارسال پیام</h3>
            <p>لطفاً دوباره تلاش کنید یا با شماره ۰۵۱۳۵۲۳۱۶۱۰ تماس بگیرید.</p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-form-section {
  background: var(--white);
}

.form-wrapper {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* فیلد */
.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--navy);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.required {
  color: #ef4444;
  font-size: 1.1rem;
}

.optional {
  color: var(--gray);
  font-weight: 400;
  font-size: 0.85rem;
}

/* Input و Textarea و Select */
.form-field input,
.form-field textarea,
.form-field select {
  width: 100%;
  padding: 0.95rem 1.15rem;
  border: 2px solid var(--gray-light);
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--navy);
  background: var(--white);
  transition: all 0.3s ease;
}

.form-field input:focus,
.form-field textarea:focus,
.form-field select:focus {
  outline: none;
  border-color: var(--green);
  box-shadow: 0 0 0 4px rgba(26, 122, 92, 0.1);
}

.form-field textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.7;
}

.form-field select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236b7280'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 1rem center;
  background-size: 20px;
  padding-left: 2.5rem;
}

/* خطا */
.form-field.has-error input,
.form-field.has-error textarea,
.form-field.has-error select {
  border-color: #ef4444;
  background: #fef2f2;
}

.form-field.has-error input:focus,
.form-field.has-error textarea:focus,
.form-field.has-error select:focus {
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
}

/* پیام خطا */
.error-message {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #dc2626;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.15rem;
}

.error-icon {
  font-size: 0.9rem;
}

/* فوتر فیلد */
.field-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.25rem;
}

.char-count {
  font-size: 0.8rem;
  color: var(--gray);
  margin-right: auto;
}

.char-count.near-limit {
  color: #f59e0b;
  font-weight: 600;
}

/* دکمه ارسال */
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: var(--white);
  border: none;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(26, 122, 92, 0.3);
  align-self: center;
  min-width: 200px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(26, 122, 92, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.arrow {
  font-size: 1.2rem;
  transition: transform 0.3s;
}

.submit-btn:hover:not(:disabled) .arrow {
  transform: translateX(-4px);
}

/* Spinner */
.spinner {
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: var(--white);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* پیام وضعیت */
.status-message {
  position: absolute;
  inset: 0;
  background: var(--white);
  border-radius: 20px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.status-message.success {
  border: 2px solid var(--green);
}

.status-message.error {
  border: 2px solid #ef4444;
}

.status-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: var(--white);
  margin-bottom: 1.5rem;
}

.status-message.success .status-icon {
  background: var(--green);
}

.status-message.error .status-icon {
  background: #ef4444;
}

.status-message h3 {
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 0.75rem;
}

.status-message p {
  color: var(--gray);
  font-size: 1rem;
  line-height: 1.8;
  max-width: 400px;
}

/* Transitions */
.error-fade-enter-active,
.error-fade-leave-active {
  transition: all 0.25s ease;
}

.error-fade-enter-from,
.error-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* موبایل */
@media (max-width: 576px) {
  .form-field input,
  .form-field textarea,
  .form-field select {
    padding: 0.85rem 1rem;
    font-size: 0.95rem;
  }

  .submit-btn {
    width: 100%;
  }

  .status-message {
    padding: 2rem 1.5rem;
  }

  .status-icon {
    width: 55px;
    height: 55px;
    font-size: 1.5rem;
  }

  .status-message h3 {
    font-size: 1.2rem;
  }
}
</style>