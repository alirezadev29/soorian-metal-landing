// دایرکتیو سفارشی v-reveal برای انیمیشن اسکرول

export const reveal = {
  // وقتی المان به DOM اضافه شد
  mounted(el, binding) {
    // مقدار delay از binding (اختیاری)
    const delay = binding.value?.delay || 0;
    const animation = binding.value?.animation || 'up';

    // کلاس پایه
    el.classList.add('reveal-init');
    el.classList.add(`reveal-${animation}`);

    // مقدار تأخیر
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    // ساخت observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // المان وارد دید شد → انیمیشن را اجرا کن
            el.classList.add('reveal-visible');
            // بعد از دیدن، دیگر رصد نکن
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,      // وقتی ۱۵٪ از المان دیده شد
        rootMargin: '0px 0px -50px 0px'  // کمی قبل‌تر از رسیدن کامل
      }
    );

    // شروع رصد
    observer.observe(el);

    // ذخیره observer برای cleanup
    el._revealObserver = observer;
  },

  // وقتی المان از DOM حذف شد
  unmounted(el) {
    if (el._revealObserver) {
      el._revealObserver.disconnect();
      delete el._revealObserver;
    }
  }
};