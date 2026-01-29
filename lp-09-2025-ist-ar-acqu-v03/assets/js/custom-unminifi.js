document.addEventListener("DOMContentLoaded", () => {
  // Hero Modal (single image)
  const heroMediaTrigger = document.getElementById("heroMediaTrigger");
  const heroModal = document.getElementById("heroModal");

  if (heroMediaTrigger && heroModal) {
    const modalOverlay = heroModal.querySelector(".hero-modal__overlay");
    const modalCloseBtn = heroModal.querySelector(".hero-modal__close");

    const openModal = () => {
      heroModal.classList.add("is-active");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      heroModal.classList.remove("is-active");
      document.body.style.overflow = "";
    };

    heroMediaTrigger.addEventListener("click", openModal);

    if (modalOverlay) {
      modalOverlay.addEventListener("click", closeModal);
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && heroModal.classList.contains("is-active")) {
        closeModal();
      }
    });
  }

  const e = document.querySelectorAll(".popup__quesion");
  document.querySelectorAll(".popup__answer").forEach((e) => {
    e.addEventListener("click", (t) => {
      const l = document.querySelector(".popup__answer.active");
      t.target === e && l?.classList.remove("active");
    });
  }),
    e.forEach((e) => {
      e.addEventListener("click", function (t) {
        const l = e.closest(".accordion__item"),
          o = l.querySelector(".popup__answer"),
          r = l.querySelector(".popup-close");
        o.classList.add("active"),
          r.addEventListener("click", function () {
            o.classList.remove("active");
          });
      });
    }),
    document.querySelectorAll(".accordion__quesion").forEach((e) => {
      e.addEventListener("click", function (e) {
        e.preventDefault();
        const t = this.parentElement,
          l = t.closest("section");
        l &&
          (l.querySelectorAll("details.accordion__item").forEach((e) => {
            e !== t && e.removeAttribute("open");
          }),
          t.hasAttribute("open")
            ? t.removeAttribute("open")
            : t.setAttribute("open", ""));
      });
    }),
    document.querySelectorAll(".embla").forEach((e) => {
      let t = e.getAttribute("data-slides-mobile") || 1,
        l = e.getAttribute("data-slides-tab") || 1,
        o = e.getAttribute("data-slides-desk") || 1,
        r = e.getAttribute("data-mobile-only") || 0,
        i = e.hasAttribute("data-embla-loop"),
        c = {};
      c =
        1 == r
          ? {
              direction: "rtl",
              loop: !1,
              slidesToScroll: t,
              containScroll: "trimSnaps",
              breakpoints: {
                "(min-width: 768px)": { loop: !0, slidesToScroll: l },
                "(min-width: 992px)": {
                  loop: !0,
                  slidesToScroll: o,
                  active: !1
                }
              }
            }
          : {
              direction: "rtl",
              loop: i,
              align: "start",
              containScroll: "trimSnaps",
              slidesToScroll: t,
              breakpoints: {
                "(min-width: 768px)": { loop: i, slidesToScroll: l },
                "(min-width: 992px)": { loop: i, slidesToScroll: o }
              }
            };
      let n = e.querySelector(".embla__viewport"),
        a = e.querySelector(".embla__arrow--prev"),
        s = e.querySelector(".embla__arrow--next"),
        d = e.querySelector(".embla__dots"),
        u = EmblaCarousel(n, c);
      a && a.addEventListener("click", u.scrollPrev, !1),
        s && s.addEventListener("click", u.scrollNext, !1);
      let m = () => {
          if (a) {
            let e = u.canScrollPrev();
            (a.disabled = !e), a.classList.toggle("is-disabled", !e);
          }
          if (s) {
            let e = u.canScrollNext();
            (s.disabled = !e), s.classList.toggle("is-disabled", !e);
          }
        },
        p = [],
        v = () => {
          if (!d) return !1;
          u.scrollSnapList().length <= 1
            ? (d.innerHTML = "")
            : ((d.innerHTML = u
                .scrollSnapList()
                .map(() => '<span class="embla__dot"  ></span>')
                .join("")),
              (p = Array.from(d.querySelectorAll(".embla__dot"))).forEach(
                (e, t) => {
                  e.addEventListener(
                    "click",
                    () =>
                      ((e) => {
                        u.scrollTo(e);
                      })(t),
                    !1
                  );
                }
              ));
        },
        S = () => {
          if (!d || 0 === p.length) return;
          let e = u.previousScrollSnap(),
            t = u.selectedScrollSnap();
          p[e] && p[e].classList.remove("embla__dot--selected"),
            p[t] && p[t].classList.add("embla__dot--selected");
        };
      u.on("init", m)
        .on("select", m)
        .on("reInit", m)
        .on("init", v)
        .on("reInit", v)
        .on("init", S)
        .on("reInit", S)
        .on("select", S);
    });
  let t = document.querySelectorAll(".ys-lp-material-costs__tab"),
    l = document.getElementById("treatment-image"),
    o = document.getElementById("treatment-price");
  t.forEach((e) => {
    e.addEventListener("click", () => {
      t.forEach((e) => e.classList.remove("active")), e.classList.add("active");
      let r = e.getAttribute("data-price"),
        i = e.getAttribute("data-image");
      (l.src = i), (o.innerHTML = `Ø <span>${r}</span>`);
    });
  });
}),
  window.addEventListener("load", function () {
    // Video autoplay function
    function playVimeoVideo(e) {
      if (e.classList.contains("active")) return;
      document.querySelectorAll(".elh-custom-vimeo").forEach(function (el) {
        el.classList.remove("active");
      });
      const t = e.getAttribute("data-vimeo-id"),
        l = document.createElement("iframe"),
        o = e.querySelector(".elh-custom-vimeo__iframe-wrp");
      l.src = "https://player.vimeo.com/video/" + t + "?autoplay=1";
      l.frameBorder = "0";
      l.allow = "autoplay; fullscreen; picture-in-picture";
      l.style.width = "100%";
      l.style.height = "100%";
      l.style.position = "absolute";
      l.style.top = "0";
      l.style.left = "0";
      l.allowFullscreen = true;
      o.innerHTML = "";
      e.classList.add("active");
      o.appendChild(l);
    }

    // Click handler for video
    document.querySelectorAll(".elh-custom-vimeo")?.forEach(function (e) {
      e.addEventListener("click", function () {
        playVimeoVideo(this);
      });
    });

    // Autoplay video when in viewport using IntersectionObserver
    const videoSection = document.querySelector(
      ".lp-full-video .elh-custom-vimeo"
    );
    if (videoSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              playVimeoVideo(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(videoSection);
    }

    // Logo click scrolls to video section
    const siteLogo = document.querySelector(".site-logo");
    const videoSectionEl = document.querySelector(".elh-custom-vimeo");
    if (siteLogo && videoSectionEl) {
      siteLogo.style.cursor = "pointer";
      siteLogo.addEventListener("click", (e) => {
        e.preventDefault();
        // Desktop: video bottom aligned to screen bottom, Mobile: center
        const isDesktop = window.innerWidth >= 992;
        if (isDesktop) {
          const videoRect = videoSectionEl.getBoundingClientRect();
          const scrollTarget =
            window.scrollY + videoRect.bottom - window.innerHeight;
          window.scrollTo({ top: scrollTarget, behavior: "smooth" });
        } else {
          videoSectionEl.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      });
    }
    /*
    // Exit Intent Modal
    const exitModal = document.getElementById("exitModal");
    const exitModalClose = document.getElementById("exitModalClose");
    const exitModalOverlay = exitModal?.querySelector(".exit-modal__overlay");
    let exitModalShown = false;

    function showExitModal() {
      if (exitModalShown || !exitModal) return;
      exitModalShown = true;
      exitModal.classList.add("is-active");
      document.body.style.overflow = "hidden";
    }

    function closeExitModal() {
      if (!exitModal) return;
      exitModal.classList.remove("is-active");
      document.body.style.overflow = "";
    }

    // --------------------
    // Desktop: Exit intent
    // --------------------
    document.addEventListener("mouseleave", (e) => {
      if (window.innerWidth > 768 && e.clientY <= 0) {
        showExitModal();
      }
    });

    // --------------------
    // Mobile: Scroll to bottom
    // --------------------
    function handleMobileScrollExitIntent() {
      if (exitModalShown) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      // Trigger when user is within 300px of bottom
      if (pageHeight - scrollPosition <= 300) {
        showExitModal();
        window.removeEventListener("scroll", handleMobileScrollExitIntent);
      }
    }

    if (window.innerWidth <= 768) {
      window.addEventListener("scroll", handleMobileScrollExitIntent, {
        passive: true
      });
    }

    // --------------------
    // Close modal handlers
    // --------------------
    if (exitModalClose) {
      exitModalClose.addEventListener("click", closeExitModal);
    }
    if (exitModalOverlay) {
      exitModalOverlay.addEventListener("click", closeExitModal);
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && exitModal?.classList.contains("is-active")) {
        closeExitModal();
      }
    });

    // --------------------
    // Exit Modal Countdown Timer
    // --------------------
    const countdownEl = document.querySelector(".exit-modal__countdown");
    if (countdownEl) {
      const endDate = new Date(countdownEl.getAttribute("data-countdown-end"));
      const days1 = document.getElementById("exitDays1");
      const days2 = document.getElementById("exitDays2");
      const hours1 = document.getElementById("exitHours1");
      const hours2 = document.getElementById("exitHours2");
      const minutes1 = document.getElementById("exitMinutes1");
      const minutes2 = document.getElementById("exitMinutes2");
      const seconds1 = document.getElementById("exitSeconds1");
      const seconds2 = document.getElementById("exitSeconds2");

      function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) {
          // Offer expired - show zeros
          if (days1) days1.textContent = "0";
          if (days2) days2.textContent = "0";
          if (hours1) hours1.textContent = "0";
          if (hours2) hours2.textContent = "0";
          if (minutes1) minutes1.textContent = "0";
          if (minutes2) minutes2.textContent = "0";
          if (seconds1) seconds1.textContent = "0";
          if (seconds2) seconds2.textContent = "0";
          return;
        }

        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        // Split into two digits
        const daysStr = String(days).padStart(2, "0");
        const hoursStr = String(hours).padStart(2, "0");
        const minutesStr = String(minutes).padStart(2, "0");
        const secondsStr = String(seconds).padStart(2, "0");

        if (days1) days1.textContent = daysStr[0];
        if (days2) days2.textContent = daysStr[1];
        if (hours1) hours1.textContent = hoursStr[0];
        if (hours2) hours2.textContent = hoursStr[1];
        if (minutes1) minutes1.textContent = minutesStr[0];
        if (minutes2) minutes2.textContent = minutesStr[1];
        if (seconds1) seconds1.textContent = secondsStr[0];
        if (seconds2) seconds2.textContent = secondsStr[1];
      }

      // Update immediately and then every second
      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
      */
  });
