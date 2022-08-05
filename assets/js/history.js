(function ($) {
  document.addEventListener("DOMContentLoaded", () => {


    window.addEventListener('scroll', (e) => {
      fnOnScroll();
    });

    window.addEventListener('resize', (e) => {
      fnOnResize();
    });


    let agTimeline = document.getElementByClassName("js-timeline"),
      agTimelineLine = document.getElementByClassName("js-timeline_line"),
      agTimelineLineProgress = document.getElementByClassName("js-timeline_line-progress"),
      agTimelinePoint = document.getElementByClassName("js-timeline-card_point-box"),
      agTimelineItem = document.getElementByClassName("js-timeline_item"),
      agOuterHeight = window.outerHeight(),
      agHeight = window.height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = window.scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = window.scrollTop();
      agHeight = window.height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
      });

      f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      let agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - window.scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - window.scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({height: n + "px"});

      agTimelineItem.each(function () {
        let agTop = this.find(agTimelinePoint).offset().top;

        (agTop + agPosY - window.scrollTop()) < agPosY + .5 * agOuterHeight ? this.classList.add("js-ag-active") : this.classList.remove("js-ag-active");
      })
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }


  });
})
