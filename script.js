// Off The Map — tiny enhancements, no dependencies.
// Recomputes episode statuses from each row's data-release timestamp so the
// guide stays accurate on its own after publish day, and fills in the
// "next drop" line in the hero.

(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var now = new Date();
  var items = Array.prototype.slice.call(
    document.querySelectorAll(".episode-list li[data-release]")
  );
  var nextItem = null;

  items.forEach(function (li) {
    var release = new Date(li.getAttribute("data-release"));
    var badge = li.querySelector(".ep-badge");
    li.classList.remove("is-out", "is-next");
    if (badge) {
      badge.classList.remove("badge-out", "badge-next");
    }
    if (release <= now) {
      li.classList.add("is-out");
      if (badge) {
        badge.textContent = "Out now";
        badge.classList.add("badge-out");
      }
    } else if (!nextItem) {
      nextItem = { li: li, release: release };
    } else if (badge) {
      badge.textContent = "Upcoming";
    }
  });

  if (nextItem) {
    nextItem.li.classList.add("is-next");
    var nextBadge = nextItem.li.querySelector(".ep-badge");
    if (nextBadge) {
      nextBadge.textContent = "Next up";
      nextBadge.classList.add("badge-next");
    }
    var num = nextItem.li.querySelector(".ep-num");
    var dateEl = nextItem.li.querySelector(".ep-date");
    var dropEl = document.getElementById("next-drop");
    if (dropEl && num && dateEl) {
      dropEl.innerHTML =
        "Next drop: <strong>" +
        num.textContent +
        " — " +
        dateEl.textContent +
        ", 7 AM CT</strong>";
    }
  } else {
    var dropDone = document.getElementById("next-drop");
    if (dropDone) dropDone.textContent = "Season 1 is complete — all 30 episodes are out.";
  }
})();
