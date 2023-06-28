var $nav = $('.amazon-navbar');

$(window).resize(function() {
  if (window.innerWidth <= 767) $nav.addClass('navbar navbar-expand-lg bg-body-dark');
  else $nav.removeClass('navbar navbar-expand-lg bg-body-dark');
});

const $cartItem = $('.cart-item');

$(window).resize(function() {
  if (window.innerWidth <= 767) $cartItem.addClass('d-none');
  else $cartItem.removeClass('d-none');
});

