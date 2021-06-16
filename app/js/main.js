$(function () {

  var mixer = mixitup('.gallery__content');

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // },
    },

  });

})
//# sourceMappingURL=main.js.map
