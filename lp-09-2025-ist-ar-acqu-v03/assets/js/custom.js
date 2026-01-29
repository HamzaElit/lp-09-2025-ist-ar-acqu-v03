document.addEventListener("DOMContentLoaded", () => {
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
          i = l.querySelector(".popup-close");
        o.classList.add("active"),
          i.addEventListener("click", function () {
            o.classList.remove("active");
          });
      });
    });
  document.querySelectorAll(".accordion__quesion").forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      const t = this.parentElement,
        l = t.closest("section");
      if (l) {
        l.querySelectorAll("details.accordion__item").forEach((e) => {
          e !== t && e.removeAttribute("open");
        }),
          t.hasAttribute("open")
            ? t.removeAttribute("open")
            : t.setAttribute("open", "");
      }
    });
  }),
    document.querySelectorAll(".embla").forEach((e) => {
      let t = e.getAttribute("data-slides-mobile") || 1,
        l = e.getAttribute("data-slides-tab") || 1,
        o = e.getAttribute("data-slides-desk") || 1,
        i = e.getAttribute("data-mobile-only") || 0,
        r = e.hasAttribute("data-embla-loop"),
        c = {};
      c =
        1 == i
          ? {
              direction: "rtl",
              loop: false,
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
              loop: false,
              align: "start",
              containScroll: "trimSnaps",
              slidesToScroll: t,
              breakpoints: {
                "(min-width: 768px)": { loop: r, slidesToScroll: l },
                "(min-width: 992px)": { loop: r, slidesToScroll: o }
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
          if (u.scrollSnapList().length <= 1) return void (d.innerHTML = "");
          d.innerHTML = u
            .scrollSnapList()
            .map(() => '<span class="embla__dot"  ></span>')
            .join("");
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
          );
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
      let i = e.getAttribute("data-price"),
        r = e.getAttribute("data-image");
      (l.src = r), (o.innerHTML = `Ø <span>${i}</span>`);
    });
  });
}),
  window.addEventListener("load", function () {
    document.querySelectorAll(".elh-custom-vimeo")?.forEach(function (e) {
      e.addEventListener("click", function () {
        document.querySelectorAll(".elh-custom-vimeo").forEach(function (e) {
          e.classList.remove("active");
        });
        const t = this.getAttribute("data-vimeo-id"),
          l = document.createElement("iframe"),
          o = e.querySelector(".elh-custom-vimeo__iframe-wrp");
        (l.src = "https://player.vimeo.com/video/" + t + "?autoplay=1"),
          (l.frameBorder = "0"),
          (l.allow = "autoplay; fullscreen; picture-in-picture"),
          (l.style.width = "100%"),
          (l.style.height = "100%"),
          (l.style.position = "absolute"),
          (l.style.top = "0"),
          (l.style.left = "0"),
          (l.allowFullscreen = !0),
          (o.innerHTML = ""),
          e.classList.add("active"),
          o.appendChild(l);
      });
    });
  });
