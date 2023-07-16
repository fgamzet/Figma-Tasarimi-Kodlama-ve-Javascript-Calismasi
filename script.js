var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += (cardWidth);
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= (cardWidth);
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }

  function handleEllipse(ellipse, action) {
    if (action === 'fill') {
      fillEllipse(ellipse);
      showTooltip(ellipse);
    } else if (action === 'reset') {
      resetEllipse(ellipse);
      hideTooltip(ellipse);
    }
  }
  
  function fillEllipse(ellipse) {
    ellipse.classList.add('filled');
 
  }
  
  function resetEllipse(ellipse) {
    ellipse.classList.remove('filled');

  }
  
  function showTooltip(ellipse) {
    const tooltip = ellipse.querySelector('.tooltip');
    tooltip.style.visibility = 'visible';
  }
  
  function hideTooltip(ellipse) {
    const tooltip = ellipse.querySelector('.tooltip');
    tooltip.style.visibility = 'hidden';
  }