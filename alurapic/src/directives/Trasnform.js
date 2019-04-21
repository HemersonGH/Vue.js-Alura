import Vue from 'vue';

Vue.directive('my-Transform', {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener('click', function () {

      let increment = binding.value || 90;

      let efectStyle;

      if (!binding.arg || binding.arg == 'rotate') {
        if (binding.modifiers.reverse) {
          current -= increment;
        } else {
          current += increment;
        }
        efectStyle = `rotate(${current}deg)`;
      } else if (binding.arg == 'scale') {
        efectStyle = `scale(${increment})`;
      }

      el.style.transform = efectStyle;

      if (binding.modifiers.animate) {
        el.style.transition = 'transform 0.5s';
      }
    });
  },
});
