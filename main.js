$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
  
  window.addEventListener('load', () => {
    const preload = document.querySelector('.preloader-wrapper');
    const loading = document.querySelector('.loading');
    setTimeout( function() {
        preload.classList.add('preloader-wrapper-finish');
        loading.classList.remove('loading');
    }, 0 );
  });