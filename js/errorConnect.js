Vue.component('error-connect', {
  methods: {
    closeModal() {
      const errorWrap = document.querySelector('.error-wrap');
      errorWrap.addEventListener('click', (e) =>{
        const target = e.target;
        console.log(target);
        if (target.classList.contains('error__btn') || target.classList.contains('error-wrap')) {
          errorWrap.classList.remove('error-wrap_active');
        }
      });
    }
  },
  template: `
  <div class="error-wrap error-wrap_active" @click="closeModal">
    <div class="error">
      Ошибка доступа к ресурсу <br> попробуйте чуть позже.
      <button class="error__btn">Ok</button>
    </div>
  </div>
  `
})