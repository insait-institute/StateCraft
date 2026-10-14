window.HELP_IMPROVE_VIDEOJS = false;

// Scrubbable rollout: frames live at <base>/<000000>.<ext>, one per rollout step.
// Configure with data-base / data-frames / data-ext on #scrub-panel. Steps are labelled relative to
// frame 0 (step t, step t+1, ...), not by their absolute index in the trajectory.
function initScrub() {
  var panel = document.getElementById('scrub-panel');
  if (!panel) return;
  var slot = panel.querySelector('.media-slot');
  var slider = document.getElementById('scrub-slider');
  var label = document.getElementById('scrub-step');
  var base = panel.dataset.base;
  var ext = panel.dataset.ext || 'jpg';
  var count = Number(panel.dataset.frames);
  var frames = [];

  function framePath(i) {
    return base + '/' + String(i).padStart(6, '0') + '.' + ext;
  }

  function show(i) {
    var img = slot.querySelector('img');
    img.src = frames[i] ? frames[i].src : framePath(i);
    label.textContent = i === 0 ? 'step t' : 'step t+' + i;
  }

  function start() {
    for (var i = 0; i < count; i++) {
      frames[i] = new Image();
      frames[i].src = framePath(i);
    }
    slider.max = count - 1;
    slider.addEventListener('input', function () { show(Number(this.value)); });
    show(0);
  }

  var first = slot.querySelector('img');
  if (first.complete) {
    start();
  } else {
    first.addEventListener('load', start, { once: true });
    first.addEventListener('error', start, { once: true });
  }
}

function initEditTabs() {
  $('#edit-tabs li').on('click', function () {
    var target = $(this).data('target');
    $('#edit-tabs li').removeClass('is-active');
    $(this).addClass('is-active');
    $('.edit-panel').removeClass('is-active');
    $('#' + target).addClass('is-active');
    $('#' + target).find('video').each(function () {
      var playback = this.play();
      if (playback) playback.catch(function () {});
    });
  });
}

function initBibtexCopy() {
  $('#copy-bibtex').on('click', function () {
    var button = $(this);
    var text = $('#bibtex-code').text();
    navigator.clipboard.writeText(text).then(function () {
      button.find('.copy-label').text('Copied');
      setTimeout(function () { button.find('.copy-label').text('Copy'); }, 1500);
    });
  });
}

$(document).ready(function () {
  $('.navbar-burger').click(function () {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  bulmaCarousel.attach('#results-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: false,
    pagination: true,
  });

  bulmaSlider.attach();
  initScrub();
  initEditTabs();
  initBibtexCopy();
});
