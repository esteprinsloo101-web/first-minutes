(function () {
  "use strict";

  const protocols = window.FM_PROTOCOLS || {};
  const grid = document.getElementById("situation-grid");
  const panel = document.getElementById("protocol-panel");
  const facilitiesEl = document.getElementById("facilities-list");
  const filterBtns = document.querySelectorAll("[data-city-filter]");

  let facilities = [];
  let cityFilter = "all";

  function renderProtocol(key) {
    const p = protocols[key];
    if (!p || !panel) return;

    document.querySelectorAll(".sit-card").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-sit") === key);
    });

    const steps = p.steps
      .map(function (step, i) {
        const id = "step-" + key + "-" + i;
        return (
          '<li><input type="checkbox" id="' +
          id +
          '"><label for="' +
          id +
          '">' +
          step +
          "</label></li>"
        );
      })
      .join("");

    panel.innerHTML =
      (p.callNow
        ? '<div class="call-now-banner" role="alert">Call 112 now — do not wait for this checklist to finish.</div>'
        : "") +
      "<h3>" +
      p.icon +
      " " +
      p.title +
      "</h3>" +
      '<ul class="checklist">' +
      steps +
      "</ul>" +
      '<p class="protocol-note">' +
      p.note +
      " Not a substitute for trained first aiders or EMS.</p>";

    panel.classList.add("visible");
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  if (grid) {
    grid.addEventListener("click", function (e) {
      const btn = e.target.closest(".sit-card");
      if (!btn) return;
      renderProtocol(btn.getAttribute("data-sit"));
    });
  }

  function renderFacilities() {
    if (!facilitiesEl) return;
    const list = facilities.filter(function (f) {
      return cityFilter === "all" || f.city === cityFilter;
    });

    if (!list.length) {
      facilitiesEl.innerHTML = "<p class='meta'>No DEMO facilities for this filter.</p>";
      return;
    }

    facilitiesEl.innerHTML = list
      .map(function (f) {
        const aids = (f.medicalAidsExample || [])
          .map(function (a) {
            return '<span class="aid-chip">' + a + " (DEMO / unverified example)</span>";
          })
          .join("");
        return (
          '<article class="facility" data-demo="true">' +
          '<div class="facility-top">' +
          "<h3>" +
          f.name +
          "</h3>" +
          '<span class="demo-tag">DEMO / unverified</span>' +
          "</div>" +
          '<p class="meta"><strong>' +
          f.city +
          "</strong> · " +
          f.type +
          "</p>" +
          '<p class="meta">' +
          f.address +
          "</p>" +
          '<p class="meta">Hours: ' +
          f.hours +
          "</p>" +
          '<p class="meta">Phone: ' +
          f.phone +
          "</p>" +
          '<div class="aids">' +
          aids +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      cityFilter = btn.getAttribute("data-city-filter");
      filterBtns.forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
      renderFacilities();
    });
  });

  fetch("data/facilities.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      facilities = (data.facilities || []).filter(function (f) {
        return f.demo === true; // all seed rows DEMO/unverified until Build verifies
      });
      renderFacilities();
    })
    .catch(function () {
      if (facilitiesEl) {
        facilitiesEl.innerHTML =
          "<p class='meta'>Could not load DEMO facilities. Open this app via a local server so <code>data/facilities.json</code> can load.</p>";
      }
    });
})();
