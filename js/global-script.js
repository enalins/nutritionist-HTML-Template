//MENU TOGGLER
let topHeader = document.getElementById('topHeader'),
menuToggle = document.getElementById('menuToggle'),
closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
  topHeader.classList.add('mobileMenu');
  document.getElementsByTagName('body')[0].style.overflowY = "hidden";

  closeMenu.addEventListener('click', () => {
    topHeader.classList.remove('mobileMenu');
    document.getElementsByTagName('body')[0].style.overflowY = "scroll";
  })
})

//BLOG FILTER
let blogFilter = document.getElementById('blogFilter'),
filterToggler = document.getElementById('filterToggler'),
closeFilter = document.getElementById('closeFilter');

if(!!blogFilter && !!filterToggler && !!closeFilter){
  filterToggler.addEventListener('click', () => {
    blogFilter.classList.add('filterOpen');
    document.getElementsByTagName('body')[0].style.overflowY = "hidden";
  
    closeFilter.addEventListener('click', () => {
      blogFilter.classList.remove('filterOpen');
      document.getElementsByTagName('body')[0].style.overflowY = "scroll";
    })
  })
}

//BLOG FILTER ACCORDION
$(function(){
  (function(){

    var collapsedHeight = $('.blog__filter__date ul').css('maxHeight');

    $('.blog__filter__date ul').each(function(){
      var $this = $(this);

      $this.data('natural', $this[0].scrollHeight);
    });

    $('.blog__filter__date__select').click(function(){
      var $parent = $(this).parent().eq(0)
      var $story = $(this).siblings('ul').eq(0)
      if ($parent.hasClass('active')) {
        $story.animate({'maxHeight': collapsedHeight}, 280);
        $parent.removeClass('active');
      }
      else {
        $story.animate({'maxHeight': $story.data('natural')}, 280);
        $parent.addClass('active');
      }
    });

  })();
});

//ANIMATIONS
let animatedItem = document.querySelectorAll('.animation');
let winHeight = window.innerHeight;

if(!!animatedItem){
  function animate (item) {
    if (window.pageYOffset >= (item.offsetTop - winHeight)) {
      item.classList.forEach(elClass => {
        if (elClass.match(/load*/)) {
          let animationName = elClass.substring('load-'.length);
          item.style.animation = `${animationName} 1s ease 1 forwards`;
        }
      });
    }
  }

  //first check
  for(i=0; i<animatedItem.length; i++){
    animate(animatedItem[i])
  }

  //on scroll check
  window.addEventListener('scroll', function(e){
    for(i=0; i<animatedItem.length; i++){
      animate(animatedItem[i])
    }
  })
}